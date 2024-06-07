import express from "express";
import routes from "./routes/tasks.route.mjs";
import { notFound } from "./middleware/not-found.mjs";
import { connectDB } from "./db/connect.db.mjs";
import { errorHandlerMiddleware } from "./middleware/error-handler.mjs";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", routes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB();
    console.log("Connected to DB...");
    app.listen(port, () => console.log("Server start running!!"));
  } catch (error) {
    console.log(error);
  }
};

start();
