const express = require("express");
const { createTask } = require("../controllers/create");
const { readTasks } = require("../controllers/read");
const { updateTask } = require("../controllers/update");
const { updateStatus } = require("../controllers/updateStatus");
const { deleteTask } = require("../controllers/delete");

const port = 8080;
const app = express();

app.use(express.json());

// criando uma nova tarefa
app.post("/tasks", async (req, res) => {
  try {
    const newTask = await createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// listando tarefas
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizando tarefas
app.patch("/tasks/:id", async (req, res) => {
  try {
    const update = await updateTask(req.params.id, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar status
app.patch("/tasks/:id/status/", async (req, res) => {
  try {
    const update = await updateStatus(req.params.id);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// remover task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const deleted = await deleteTask(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log("Rodando com express na porta", port);
});
