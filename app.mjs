import express from "express";

const app = express();

app.get("/login", (req, res) => {
  res.status(200).send("Login page");
});
app.listen(3000, () => console.log("Server start running!!"));
