import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class JobsController {
  public async createJob({ request, response }: HttpContextContract) {
    response.status(201);
    const data = await Database.table("jobs").insert(request.body());
    return {
      message: "success",
      data,
    };
  }
  public async viewJobs({ response }: HttpContextContract) {
    response.status(201);
    const jobs = await Database.from("jobs").select("*");
    return {
      message: "success",
      jobs,
    };
  }
}
