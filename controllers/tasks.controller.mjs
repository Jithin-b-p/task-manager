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

export const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!id) {
    return res.status(404).json({ msg: "id doesn't exist" });
  }
  res.status(200).json({ task });
});

export const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ msg: "id doesn't exist" });
  }
  res.status(200).json({ status: "success", deletedTask: task });
});
