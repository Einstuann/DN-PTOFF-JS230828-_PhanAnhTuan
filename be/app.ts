import * as express from "express";
import "dotenv/config";
import * as cors from "cors";
import { dbConfig } from "./src/config/db.config";
import todoRoute from "./src/router/todo.route";

const port = process.env.PORT || 3000;

dbConfig
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

app.use("/api/v1/tasks", todoRoute);

app.listen(port, () => {
  console.log(`server running ${port}`);
});
