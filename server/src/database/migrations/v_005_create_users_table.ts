import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.string("whatsapp").notNullable();
    table.string("password").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
