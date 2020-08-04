import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("instructors", (table) => {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("instructors");
}
