import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Jobs extends BaseSchema {
  protected tableName = "jobs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table
        .integer("customer_id")
        .unsigned()
        .references("id")
        .inTable("customers");
      table.string("title");
      table.string("description");
      table.string("status");
      table.string("type");
      table.string("images");
      table.string("location");
      table.decimal("budget", 10, 2);

      table.boolean("paid").defaultTo(false);
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
