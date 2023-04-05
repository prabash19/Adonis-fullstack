import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Job from "App/Models/Job";
export default class JobsController {
  public async createJob({ request, response }: HttpContextContract) {
    response.status(201);
    const data = await Job.create(request.body());
    return {
      message: "success",
      data,
    };
  }
  public async viewJobs({ response }: HttpContextContract) {
    response.status(201);
    const jobs = await Job.all();
    return {
      message: "success",
      jobs,
    };
  }
  public async filterJobs({ params, response }: HttpContextContract) {
    const { location, type } = params;
    let dataFromLocation, dataFromType;
    if (location) {
      dataFromLocation = await Job.query().where("location", location);
    }
    if (type) {
      dataFromType = await Job.query().where("type", type);
    }
    response.status(201);
    const jobs = { ...dataFromLocation, dataFromType };
    return {
      message: "success",
      jobs,
    };
  }
}
