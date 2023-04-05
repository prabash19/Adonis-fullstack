import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class MakersController {
  public async index() {
    return "working";
  }
  public async store({ request, response }: HttpContextContract) {
    response.status(201);
    return {
      message: "created maker",
      body: request.body(),
    };
  }
  public async update({ params, request, response }: HttpContextContract) {
    response.status(201);
    return {
      message: "successfully updated maker",
      id: `${params.id}`,
      body: request.body(),
    };
  }
  public async destroy({ params, response }: HttpContextContract) {
    response.status(200);
    return {
      message: "successfully deleted maker",
      id: `${params.id}`,
    };
  }
}
