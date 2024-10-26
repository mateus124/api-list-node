const Task = require("../entities/task");

const updateStatus = async (id) => {
  try {
    const [rowsUpdated] = await Task.update(
      { checked: false },
      { where: { uuid: id, checked: true } }
    );

    if (rowsUpdated == 0) {
      const [rowsUpdated] = await Task.update(
        { checked: true },
        { where: { uuid: id, checked: false } }
      );
    }

    const updatedTask = await Task.findByPk(id);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateStatus,
};
