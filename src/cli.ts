#!/usr/bin/env node

import express from "express";

const [, , ...args] = process.argv;

if (args[0] === "serve") {
  // * Need to start the server that will serve the report.json
  // * Need to serve the compiled react/html files to make a front end
  // * Need the front end to request the report from the serve

  const app = express();
  const port = 5555;

  app.get("/", (req, res) => {
    const file = require("../report/report.json");
    res.send(file);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

// console.log(`Hello Worlsd : ${args}`);
