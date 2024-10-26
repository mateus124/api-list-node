const sequelize = require("./src/database/connect");

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tabelas sincronizadas.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
  });

require("./src/routes/taskRoutes");
