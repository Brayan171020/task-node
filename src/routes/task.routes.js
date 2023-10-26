import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, createTask, getTask, updateTask, delteTask } from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createTaskSchema } from "../schemas/tasks.schema.js";

const router = Router();

router.get('/tasks', authRequired, getTasks)

router.get('/tasks/:id', authRequired, getTask)

router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)

router.delete('/tasks/:id', authRequired, delteTask)

router.put('/tasks/:id', authRequired, updateTask)

export default router;