const express = require("express");
const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

app.get("/cadastrar/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Bem vindo usuário ${id}`);
});

app.listen(PORT, () => {
  console.log("Servidor rodando!");
});
