#!/usr/bin/env node

import express from "express";
import path from "path";

const [, , ...args] = process.argv;

if (args[0] === "--serve") {
  const app = express();
  const port = 5000;

  app.use(express.static("report"));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../report/index.html"));
  });

  app.get("/report", (req, res) => {
    console.log({ __dirname });
    res.sendFile(path.join(__dirname, "../../../report/report.json"));
  });

  app.listen(port, () => {
    console.log("");
    console.log(`View your report by going to http://localhost:${port}/ !`);
  });
}
