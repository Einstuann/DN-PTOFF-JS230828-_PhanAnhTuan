"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfig = new typeorm_1.DataSource({
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
