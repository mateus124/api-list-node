const Task = require("../entities/task");

const createTask = async (taskData) => {
  const { title, description, checked } = taskData;
  try {
    const task = await Task.create({
      title: title,
      description: description,
      checked: checked,
    });
    return task;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
};
