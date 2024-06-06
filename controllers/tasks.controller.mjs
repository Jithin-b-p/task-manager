export const getAllTasks = (req, res) => {
  res.send("All tasks");
};

export const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`A single task id: ${id}`);
};

export const createTask = (req, res) => {
  res.send("task created");
};

export const updateTask = (req, res) => {
  res.send("task updated");
};

export const deleteTask = (req, res) => {
  res.send("task deleted");
};
