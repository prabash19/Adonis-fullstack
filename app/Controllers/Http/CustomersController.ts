import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
export default class CustomersController {
  public async index() {
    return "working";
  }

  public async update({ params, request, response }: HttpContextContract) {
    response.status(201);
    return {
      message: "successfully updated",
      id: `${params.id}`,
      body: request.body(),
    };
  }
  public async destroy({ params, response }: HttpContextContract) {
    response.status(200);
    return {
      message: "successfully deleted",
      id: `${params.id}`,
    };
  }
}
