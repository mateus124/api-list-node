const Task = require("../entities/task");

const updateTask = async (id, newData) => {
  try {
    const taskUpdate = await Task.update(
      { title: newData.title, description: newData.description },
      { where: { uuid: id } }
    );

    if (taskUpdate.rowsUpdated == 0) {
      throw new Error("Task não encontrada");
    }

    const updatedTask = await Task.findByPk(id);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateTask,
};
