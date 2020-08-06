import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary().unique();
    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
    table
      .integer("instructor_id")
      .notNullable()
      .references("id")
      .inTable("instructors")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
