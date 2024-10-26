const Sequelize = require("sequelize");
const database = require("../database/connect");

const Task = database.define(
  "task",
  {
    uuid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    checked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
  }
);

module.exports = Task;
