import type { Knex } from "knex";

const config: Knex.Config = {
  client: "postgresql",
  connection: {
    host: process.env.CLOUD_SQL_HOST,
    port: parseInt(process.env.CLOUD_SQL_PORT),
    user: process.env.CLOUD_SQL_USER,
    password: process.env.CLOUD_SQL_PASSWORD,
    database: process.env.CLOUD_SQL_DB,
  },
  pool: {
    acquireTimeoutMillis: 200000,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

module.exports = config;
