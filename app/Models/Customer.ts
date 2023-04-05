import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public role: string;

  @column()
  public firstName: string;

  @column()
  public lastName: string;

  @column()
  public phoneNumber: string;

  @column()
  public address: string;

  @column()
  public postcode: string;

  @column()
  public state: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
