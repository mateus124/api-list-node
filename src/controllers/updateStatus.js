const Task = require("../entities/task");

const updateTask = async (id) => {
  try {
    const taskUpdate = await Task.update(
      { title: newData.title, description: newData.description },
      { where: { uuid: id } }
    );

    if (taskUpdate.rowsUpdated == 0) {
      throw new Error("Usuário não encontrado");
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
