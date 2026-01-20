const express = require("express");
const todoRoutes = require("./routes/todos.routes");
const logger = require("./middleware/logger.middleware");

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// App-level middleware
app.use(logger);

// Routes
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
