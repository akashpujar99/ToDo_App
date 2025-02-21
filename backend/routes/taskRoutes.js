import express from "express";
const router = express.Router();
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";
router.route("/").get(getTasks).post(createTask);
router.route("/").put(updateTask).delete(deleteTask);
export default router;