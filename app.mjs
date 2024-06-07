import express from "express";
import routes from "./routes/tasks.route.mjs";
import { connectDB } from "./db/connect.db.mjs";
const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", routes);

const start = async () => {
  try {
    await connectDB();
    console.log("Connected to DB...");
    app.listen(3000, () => console.log("Server start running!!"));
  } catch (error) {
    console.log(error);
  }
};

start();
