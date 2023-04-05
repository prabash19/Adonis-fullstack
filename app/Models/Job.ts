import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Customer from "./Customer";
export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public customerId: number;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public status: string;

  @column()
  public type: string;

  @column()
  public images: string;

  @column()
  public location: string;

  @column()
  public budget: number;

  @column()
  public paid: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>;
}
