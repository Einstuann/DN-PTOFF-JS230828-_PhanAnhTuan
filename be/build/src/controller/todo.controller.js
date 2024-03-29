"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const db_config_1 = require("../config/db.config");
const todo_entity_1 = require("../entity/todo.entity");
class todoController {
}
exports.todoController = todoController;
_a = todoController;
todoController.todoRepo = db_config_1.dbConfig.getRepository(todo_entity_1.Todo);
todoController.getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield _a.todoRepo.find();
    res.status(200).json(tasks);
});
todoController.getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const task = yield _a.todoRepo.findOneBy({ id });
    res.status(200).json(task);
});
todoController.addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = _a.todoRepo.create(req.body);
    const result = yield _a.todoRepo.save(newTask);
    res.status(201).json(result);
});
todoController.updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const task = yield _a.todoRepo.findOneBy({ id });
    _a.todoRepo.merge(task, req.body);
    const result = yield _a.todoRepo.save(task);
    res.status(201).json(result);
});
todoController.deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const results = yield _a.todoRepo.delete(id);
    res.status(204).end();
});
exports.default = todoController;
