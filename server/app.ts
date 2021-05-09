import express, { Application } from "express";
import config from "./config";

const app: Application = express();

app.get("/", (_req, res) => {
  res.send("test");
});

app.listen(config.port, () =>
  console.log(`Server started on port ${config.port}`)
);
