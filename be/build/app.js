"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("dotenv/config");
const cors = require("cors");
const db_config_1 = require("./src/config/db.config");
const todo_route_1 = require("./src/router/todo.route");
const port = process.env.PORT || 3000;
db_config_1.dbConfig
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/tasks", todo_route_1.default);
app.listen(port, () => {
    console.log(`server running ${port}`);
});
