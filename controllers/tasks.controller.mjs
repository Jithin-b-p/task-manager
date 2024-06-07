import Task from "../models/task.model.mjs";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ errorType: error.name, msg: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    res.status(200).json({ task });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ msg: "id doesn't exist" });
    }
    res.status(500).json({ errorType: error.name, msg: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ errorType: error.name, msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidator: true,
    });
    if (!id) {
      return res.status(404).json({ msg: "id doesn't exist" });
    }
    res.status(200).json({ task });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ msg: "id doesn't exist" });
    }
    res.status(500).json({ errorType: error.name, msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: "id doesn't exist" });
    }
    res.status(200).json({ status: "success", deletedTask: task });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ msg: "id doesn't exist" });
    }
    res.status(500).json({ errorType: error.name, msg: error.message });
  }
};
