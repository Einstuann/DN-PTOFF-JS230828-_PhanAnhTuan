import { Router } from "express";
import todoController from "../controller/todo.controller";

const todoRoute = Router();

todoRoute.get("/", todoController.getTask);
todoRoute.get("/:id", todoController.getTaskById);
todoRoute.post("/", todoController.addTask);
todoRoute.put("/:id", todoController.updateTask);
todoRoute.delete("/:id", todoController.deleteTask);

export default todoRoute;
