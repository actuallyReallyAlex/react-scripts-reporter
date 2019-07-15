#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLDBDQUFvQjtBQUVkLElBQUEsaUJBQTRCLEVBQXZCLGtCQUF1QixDQUFDO0FBRW5DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtJQUN6QixJQUFNLEtBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7SUFDdEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDO0lBRWxCLEtBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsQyxLQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBTSxTQUFTLEdBQUcsWUFBRTtTQUNqQixZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztTQUNqRSxRQUFRLEVBQUUsQ0FBQztJQUNkLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQ3hCLFVBQUMsVUFBb0MsRUFBRSxDQUFTO1FBQ3RDLElBQUEsc0NBQVksQ0FBZ0I7UUFFcEMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUNGLENBQUM7SUFFRixLQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFJLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWlELE1BQUksUUFBSyxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7Q0FDSiJ9