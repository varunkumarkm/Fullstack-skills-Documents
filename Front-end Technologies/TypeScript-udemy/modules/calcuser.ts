import add,{sub} from './calc'//we do the default export don't add the inside of the curly brackets

console.log(add(10, 20));
console.log(sub(30, 20));

//How we can add a alieas name

// import {add as sum,sub} from './calc'
// console.log(sum(10, 20));//we can add a alias name
// console.log(sub(30, 20));

// import * as c from './calc'
// console.log(c.add(10, 20));
// console.log(c.sub(30, 20));


//importing a class
import { Calculator } from './calc';

var calc = new Calculator();
console.log(calc.add(78,12));
console.log(calc.sub(72,12));

//Alias names

// import { Calculator as call } from './calc';

// var calc = new call();
// console.log(calc.add(78,12));
// console.log(calc.sub(72,12));

//accessing default class

// import Calculator  from './calc';  //for default export class we need not mentioned a flower brackets, 
//we can export for the another class we add a flower brackets

// var calc = new Calculator();
// console.log(calc.add(78,12));
// console.log(calc.sub(72,12));
