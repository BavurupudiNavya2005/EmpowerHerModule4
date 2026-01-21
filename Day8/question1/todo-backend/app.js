import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

export default app;
