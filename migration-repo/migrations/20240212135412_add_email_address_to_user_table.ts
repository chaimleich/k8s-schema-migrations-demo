import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable("users", (table) => {
    table.string("email");
  });
}

export async function down(knex: Knex): Promise<void> {
  // no implementation
}
