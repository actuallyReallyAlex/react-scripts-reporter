#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var _a = process.argv, args = _a.slice(2);
if (args[0] === "--serve") {
    var app = express_1.default();
    var port_1 = 5000;
    app.use(express_1.default.static("report"));
    app.get("/", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../report/index.html"));
    });
    app.get("/report", function (req, res) {
        res.sendFile(path_1.default.join(__dirname, "../../../report/report.json"));
    });
    app.listen(port_1, function () {
        console.log("");
        console.log("View your report by going to http://localhost:" + port_1 + "/ !");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxvREFBOEI7QUFDOUIsOENBQXdCO0FBRWxCLElBQUEsaUJBQTRCLEVBQXZCLGtCQUF1QixDQUFDO0FBRW5DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtJQUN6QixJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7SUFDdEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDO0lBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUMxQixHQUFHLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFpRCxNQUFJLFFBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0NBQ0oifQ==