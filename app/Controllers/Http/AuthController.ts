import Hash from "@ioc:Adonis/Core/Hash";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Customer from "App/Models/Customer";

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    response.status(201);
    const data = await Customer.create(request.body());
    return {
      message: "success",
      data,
    };
  }
  public async login({ auth, request, response }) {
    const { email, password } = request.body();

    try {
      // Find the user with the provided email
      const user = await Customer.findBy("email", email);
      if (user !== null) {
        // Check if the password matches
        const passwordMatches = await Hash.verify(password, user.password);

        if (passwordMatches) {
          // If the password matches, generate a JWT token for the user
          const token = await auth.generate(user);
          return response.json({
            status: "success",
            token,
          });
        }
      }
    } catch (error) {
      // Handle errors
      return response.status(400).json({
        status: "error",
        message: "Invalid email/password",
      });
    }
  }
}
