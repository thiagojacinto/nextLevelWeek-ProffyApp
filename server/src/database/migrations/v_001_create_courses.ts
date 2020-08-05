import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("courses", (table) => {
    table.increments("id").primary().unique();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();
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
  return knex.schema.dropTable("courses");
}
