const Task = require("../entities/task");

const readTasks = async () => {
  try {
    const tasklist = await Task.findAll();
    return tasklist;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  readTasks,
};
