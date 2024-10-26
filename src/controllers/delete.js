const Task = require("../entities/task");

const deleteTask = async (id) => {
  try {
    const taskDelete = await Task.destroy({ where: { uuid: id } });
    return "task deletada";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  deleteTask,
};
