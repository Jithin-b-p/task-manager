import express from "express";
import routes from "./routes/tasks.route.mjs";

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", routes);

app.listen(3000, () => console.log("Server start running!!"));
