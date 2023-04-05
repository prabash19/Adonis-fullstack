import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "bids";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("job_id").unsigned().references("id").inTable("jobs");
      table
        .integer("maker_id")
        .unsigned()
        .references("id")
        .inTable("customers");
      table.decimal("total_cost", 10, 2);
      table.decimal("meydit_fee", 10, 2);
      table.decimal("maker_fee", 10, 2);
      table.string("title");
      table.string("description");
      table.boolean("is_accepted").defaultTo(false);
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
