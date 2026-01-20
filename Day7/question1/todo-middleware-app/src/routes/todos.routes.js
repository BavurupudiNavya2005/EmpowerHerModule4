const express = require("express");
const fs = require("fs");
const path = require("path");

const rateLimiter = require("../middleware/rateLimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

/* ======================
   CREATE TODO
====================== */
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();

  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json({
    message: "Todo created successfully",
    todo: newTodo
  });
});

/* ======================
   GET ALL TODOS
====================== */
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

/* ======================
   GET SINGLE TODO
====================== */
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id === req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

/* ======================
   UPDATE TODO
====================== */
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id === req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos[index] = {
    ...db.todos[index],
    ...req.body
  };

  writeDB(db);

  res.json({
    message: "Todo updated successfully",
    todo: db.todos[index]
  });
});

/* ======================
   DELETE TODO
====================== */
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id === req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deleted = db.todos.splice(index, 1);
  writeDB(db);

  res.json({
    message: "Todo deleted successfully",
    todo: deleted[0]
  });
});

module.exports = router;
