import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("courses_schedule", (table) => {
    table.increments("id").primary().unique();

    table.integer("week_day").notNullable();
    table.integer("to").notNullable();
    table.integer("from").notNullable();

    table
      .integer("course_id")
      .notNullable()
      .references("id")
      .inTable("courses")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("courses_schedule");
}
