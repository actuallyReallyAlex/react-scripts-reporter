#!/usr/bin/env node

import express from "express";
import path from "path";
import fs from "fs";

const [, , ...args] = process.argv;

if (args[0] === "--serve") {
  const app = express();
  const port = 5000;

  app.use(express.static("report"));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../report/index.html"));
  });

  const rawReport = fs
    .readFileSync(path.join(__dirname, "../../../report/report.json"))
    .toString();
  const report = JSON.parse(rawReport);

  report.testResults.forEach(
    (testResult: { testFilePath: string }, i: number) => {
      const { testFilePath } = testResult;
      console.log(testFilePath + " " + i);

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
