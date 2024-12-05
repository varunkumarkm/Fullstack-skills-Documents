"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc"); //we do the default export don't add the inside of the curly brackets
console.log((0, calc_1.default)(10, 20));
console.log((0, calc_1.sub)(30, 20));
//How we can add a alieas name
// import {add as sum,sub} from './calc'
// console.log(sum(10, 20));//we can add a alias name
// console.log(sub(30, 20));
// import * as c from './calc'
// console.log(c.add(10, 20));
// console.log(c.sub(30, 20));
//importing a class
var calc_2 = require("./calc");
var calc = new calc_2.Calculator();
console.log(calc.add(78, 12));
console.log(calc.sub(72, 12));
