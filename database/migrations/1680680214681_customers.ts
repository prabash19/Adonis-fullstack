import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Customers extends BaseSchema {
  protected tableName = "customers";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("email").unique();
      table.string("password");
      table.string("role");
      table.string("first_name");
      table.string("last_name");
      table.string("phone_number");
      table.string("address");
      table.string("postcode");
      table.string("state");
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
