import Task from "../models/task.model.mjs";

export const getAllTasks = (req, res) => {
  res.send("All tasks");
};

export const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`A single task id: ${id}`);
};

export const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json(task);
};

export const updateTask = (req, res) => {
  res.send("task updated");
};

export const deleteTask = (req, res) => {
  res.send("task deleted");
};
