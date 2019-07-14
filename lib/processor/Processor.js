"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Processor = (function () {
    function Processor(results, config) {
        if (!fs.existsSync("./report")) {
            fs.mkdirSync("./report");
        }
        this.createReportJSON(results);
        this.createReportHTML();
        this.createReportJS();
        console.log("Report generated.");
    }
    Processor.run = function (results, config) {
        return new Processor(results, config);
    };
    Processor.prototype.createReportJSON = function (results) {
        fs.writeFileSync("./report/report.json", JSON.stringify(__assign({}, results), null, 2));
    };
    Processor.prototype.createReportHTML = function () {
        var html = fs.readFileSync(path.resolve(__dirname, "../renderer/index.html"));
        fs.writeFileSync("./report/index.html", html);
    };
    Processor.prototype.createReportJS = function () {
        var js = fs.readFileSync(path.resolve(__dirname, "../renderer/main.js"));
        fs.writeFileSync("./report/main.js", js);
    };
    return Processor;
}());
exports.Processor = Processor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb2Nlc3Nvci9Qcm9jZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUEwQjtBQUMxQiwyQkFBOEI7QUFFOUI7SUFLRSxtQkFBWSxPQUE4QixFQUFFLE1BQVU7UUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFkYSxhQUFHLEdBQWpCLFVBQWtCLE9BQThCLEVBQUUsTUFBVTtRQUMxRCxPQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBY00sb0NBQWdCLEdBQXZCLFVBQXdCLE9BQThCO1FBQ3BELEVBQUUsQ0FBQyxhQUFhLENBQ2Qsc0JBQXNCLEVBQ3RCLElBQUksQ0FBQyxTQUFTLGNBQU0sT0FBTyxHQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkI7UUFDRSxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx3QkFBd0IsQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sa0NBQWMsR0FBckI7UUFDRSxJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksOEJBQVMifQ==