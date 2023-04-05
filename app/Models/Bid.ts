import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Bid extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public jobId: number;

  @column()
  public makerId: number;

  @column()
  public totalCost: number;

  @column()
  public meyditFee: number;

  @column()
  public makerFee: number;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public isAccepted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
