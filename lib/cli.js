#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Sentry = require("@sentry/node");
Sentry.init({
    dsn: "https://d8d9d7aef3594c6388835cdaf834b781@sentry.io/1510035"
});
var _a = process.argv, args = _a.slice(2);
if (args[0] === "--serve") {
    var app_1 = express_1.default();
    var port_1 = 5000;
    app_1.use(express_1.default.static("report"));
    app_1.get("/", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../report/index.html"));
    });
    app_1.get("/root", function (req, res) {
        res.send(process.cwd());
    });
    var rawReport = fs_1.default
        .readFileSync(path_1.default.join(__dirname, "../../../report/report.json"))
        .toString();
    var report = JSON.parse(rawReport);
    report.testResults.forEach(function (testResult, i) {
        var testFilePath = testResult.testFilePath;
        app_1.get("/" + i, function (req, res) { return res.sendFile(testFilePath); });
    });
    app_1.get("/report", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../../../report/report.json"));
    });
    app_1.listen(port_1, function () {
        console.log("");
        console.log("View your report by going to http://localhost:" + port_1 + "/ !");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLDBDQUFvQjtBQUNwQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNWLEdBQUcsRUFBRSw0REFBNEQ7Q0FDbEUsQ0FBQyxDQUFDO0FBRUcsSUFBQSxpQkFBNEIsRUFBdkIsa0JBQXVCLENBQUM7QUFFbkMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO0lBQ3pCLElBQU0sS0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztJQUN0QixJQUFNLE1BQUksR0FBRyxJQUFJLENBQUM7SUFFbEIsS0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWxDLEtBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFNLFNBQVMsR0FBRyxZQUFFO1NBQ2pCLFlBQVksQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2pFLFFBQVEsRUFBRSxDQUFDO0lBQ2QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDeEIsVUFBQyxVQUFvQyxFQUFFLENBQVM7UUFDdEMsSUFBQSxzQ0FBWSxDQUFnQjtRQUVwQyxLQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQ0YsQ0FBQztJQUVGLEtBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDMUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFHLENBQUMsTUFBTSxDQUFDLE1BQUksRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBaUQsTUFBSSxRQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztDQUNKIn0=