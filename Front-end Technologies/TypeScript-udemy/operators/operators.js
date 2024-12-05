//Arithmatic operators (+, -, * /, %)
//% - is help us to giving a remainder of the values
var x = 10;
var y = 20;
console.log(x + y); //30
console.log(x - y); //-10
console.log(x * y); //200
console.log(x / y); //0.5
console.log(x % y); //10
//Assignment operator (=), it can used with all the Arithmatic operations 
// These are called compound assignments(+=, -=, *=, /=, %=)
var num1 = 10;
var num2 = 2;
var num3 = num2;
var num4 = num3 += num1;
var num5 = num3 -= num1;
var num6 = num3 *= num1;
var num7 = num3 /= num1;
var num8 = num3 %= num1;
console.log(num4); //12
console.log(num5); //2
console.log(num6); //20
console.log(num7); //2
console.log(num8); //2
//Comparision operator: compare one variable into another or one value into another value(===, !==, >, <, >=, <=)
var comp1 = 30;
var comp2 = 40;
console.log(comp1 === 30); //true
console.log(comp1 !== 30); //false
console.log(comp1 > comp2); //false
console.log(comp1 < comp2); //true
console.log(comp1 >= comp2); //false
console.log(comp1 <= comp2); //true
//Logical operator: it helps us to define logic, by evaluating into a boolean result, 
//(&&) - and operator, (||) or operatoe, (!) will reverse the logic
console.log((10 > 20) && (20 > 10)); //false
console.log((30 > 20) && (20 > 10)); //true both condition will true
console.log((10 > 20) || (20 > 10)); //true either one true
console.log((10 > 20) || (5 > 10)); //false
console.log(!((30 > 20) && (20 > 10))); //now its false
//Ternary operator: (testExpression? value1:vaulue2)
var ter1 = 20;
var ter2 = 30;
var results = (ter1 > ter2) ? 'ter1 is greater than ter2' : 'ter2 is grater than ter1';
console.log(results);
