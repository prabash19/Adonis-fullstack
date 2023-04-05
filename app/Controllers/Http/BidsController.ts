import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Bid from "App/Models/Bid";
export default class BidsController {
  public async createBid({ request, response }: HttpContextContract) {
    response.status(201);
    const data = await Bid.create(request.body());
    return {
      message: "success",
      data,
    };
  }
  public async fetchBids({ params, response }: HttpContextContract) {
    const jobId = params.id;
    response.status(201);
    const data = await Bid.query().where("job_id", jobId);
    return {
      message: "success",
      data,
    };
  }
}
