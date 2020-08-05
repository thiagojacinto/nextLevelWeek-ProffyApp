import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("favourites", (table) => {
    table.increments("id").primary().unique();
    table.timestamp("created_at").defaultTo("now()").notNullable();
    table
      .integer("instructor_id")
      .notNullable()
      .references("id")
      .inTable("instructors")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("favourites");
}
