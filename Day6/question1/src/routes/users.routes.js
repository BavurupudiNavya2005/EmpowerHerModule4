const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

// Helper function
const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

/* =======================
   CREATE USER
======================= */
router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = {
    id: Date.now().toString(),
    ...req.body
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "User added successfully", user: newUser });
});

/* =======================
   GET ALL USERS
======================= */
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.users);
});

/* =======================
   GET SINGLE USER
======================= */
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === req.params.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

/* =======================
   UPDATE USER
======================= */
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id === req.params.userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = {
    ...db.users[index],
    ...req.body
  };

  writeDB(db);
  res.json({ message: "User updated successfully", user: db.users[index] });
});

/* =======================
   DELETE USER
======================= */
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id === req.params.userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = db.users.splice(index, 1);
  writeDB(db);

  res.json({ message: "User deleted successfully", user: deletedUser[0] });
});

module.exports = router;
