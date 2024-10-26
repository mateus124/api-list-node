const Task = require("../entities/task");

const createTask = async (taskData) => {
  try {
    const task = await Task.create({
      title: taskData.title,
      description: taskData.description,
      checked: taskData.checked,
    });
    return task;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
};
