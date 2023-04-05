import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class BidsController {
  public async createBid({ request, response }: HttpContextContract) {
    response.status(201);
    const data = await Database.table("bids").insert(request.body());
    return {
      message: "success",
      data,
    };
  }
}
