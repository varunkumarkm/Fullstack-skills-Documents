"use strict";
//TypeScript is inbuilt support for module 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.sub = exports.add = void 0;
// function add(x:number, y:number):number {
//     return x+y;
// }
function sub(x, y) {
    return x - y;
}
exports.sub = sub;
// instead of using this export keyword, we can also export induvidual functions ex:
// export function add(x:number, y:number):number {
//     return x+y;
// }
// export function sub(x:number, y:number):number {
//     return x-y;
// }
//How to use a default export function
function add(x, y) {
    return x + y;
}
exports.default = add;
exports.add = add;
//For the same functions type of using objects and interfaces as well
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
