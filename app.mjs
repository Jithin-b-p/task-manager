import express from "express";
import routes from "./routes/tasks.route.mjs";

const app = express();

app.use("/api/v1/tasks", routes);

app.get("/login", (req, res) => {
  res.status(200).send("Login page");
});
app.listen(3000, () => console.log("Server start running!!"));
