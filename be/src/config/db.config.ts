import { DataSource } from "typeorm";

export const dbConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "db_md4_todo",
  entities: ["build/src/entity/*.js"],
  logging: false,
  synchronize: true,
});
