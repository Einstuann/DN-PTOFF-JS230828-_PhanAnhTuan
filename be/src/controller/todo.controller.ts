import { Request, Response } from "express";
import { dbConfig } from "../config/db.config";
import { Todo } from "../entity/todo.entity";

export class todoController {
  private static todoRepo = dbConfig.getRepository(Todo);

  static getTask = async (req: Request, res: Response) => {
    const tasks = await this.todoRepo.find();
    res.status(200).json(tasks);
  };

  static getTaskById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const task = await this.todoRepo.findOneBy({ id });
    res.status(200).json(task);
  };

  static addTask = async (req: Request, res: Response) => {
    const newTask = this.todoRepo.create(req.body);
    const result = await this.todoRepo.save(newTask);
    res.status(201).json(result);
  };

  static updateTask = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const task = await this.todoRepo.findOneBy({ id });
    this.todoRepo.merge(task, req.body);
    const result = await this.todoRepo.save(task);
    res.status(201).json(result);
  };

  static deleteTask = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const results = await this.todoRepo.delete(id);
    res.status(204).end();
  };
}

export default todoController;
