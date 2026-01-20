const express = require("express");
const usersRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
