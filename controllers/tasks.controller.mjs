import { createCustomError } from "../errors/custom-error.mjs";
import { asyncWrapper } from "../middleware/async.mjs";
import Task from "../models/task.model.mjs";

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  res.status(200).json({ task });
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!id) {
    return next(createCustomError("id doesn't exist", 404));
  }
  res.status(200).json({ task });
});

export const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return next(createCustomError("id doesn't exist", 404));
  }
  res.status(200).json({ status: "success", deletedTask: task });
});
