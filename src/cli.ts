#!/usr/bin/env node

import express from "express";
import path from "path";
import fs from "fs";
const Sentry = require("@sentry/node");
Sentry.init({
  dsn: "https://d8d9d7aef3594c6388835cdaf834b781@sentry.io/1510035"
});

const [, , ...args] = process.argv;

if (args[0] === "--serve") {
  const app = express();
  const port = 5000;

  app.use(express.static("report"));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../report/index.html"));
  });

  app.get("/root", (req, res) => {
    res.send(process.cwd());
  });

  const rawReport = fs
    .readFileSync(path.join(__dirname, "../../../report/report.json"))
    .toString();
  const report = JSON.parse(rawReport);

  report.testResults.forEach(
    (testResult: { testFilePath: string }, i: number) => {
      const { testFilePath } = testResult;

      app.get(`/${i}`, (req, res) => res.sendFile(testFilePath));
    }
  );

  app.get("/report", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../report/report.json"));
  });

  app.listen(port, () => {
    console.log("");
    console.log(`View your report by going to http://localhost:${port}/ !`);
  });
}
