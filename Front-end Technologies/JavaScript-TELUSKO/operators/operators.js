//Arithmetic operator
let number1 = 6
let number2 = 8
let result = number1 + number2
console.log(result)//14

 number1 = 6
 number2 = 8
 result = number1 - number2
console.log(result)//-2

number1 = 6
number2 = 8
result = number1 / number2
console.log(result)//0.75

number1 = 6
number2 = 8
result = number1 % number2
console.log(result)//6

number1 = true
number2 = true
result = number1 + number2
console.log(result)// we using falsy and truly value here 0-false and 1-true, that's we got 1+1 = 2

let nu = 4
//nu = 4 + 8   12 instead of using this
nu +=8
nu++ // increment number 1, this we call post increment
++nu // This will call pre increment
nu-- // decrement number 1, this we call post decrement
--nu // this is pre decrement
console.log(nu) //12

let va = 5
let v = ++va 
console.log(v, va) //6 6

 va = 5
 v = va++ 
console.log(v, va) //5 6

//We need to a cube value of 4
let numb = 4
let res = numb*numb*numb
console.log(res)//64

 numb = 4
 res = Math.pow(4, 3)
console.log(res)//64, But in es6 we have one feature

 numb = 4
 res = numb**3
console.log(res)//64 single * is multiplication, and double ** is power

//Relational Operator
let data = 7 > 6
console.log(data)//true

data = 6 <= 6
console.log(data)//true

let b = 7
let c = 7
data = b > c
console.log(data)//true

 x = "pen"
 y = "book"
data = x >= y
console.log(data)//Ascii values, For every character a unique number

x = "pen"
 y = "pencil"
data = x > y
console.log(data)//false, it will comparing character by character

// Comparing a number and String
x = "2"
 y =  1
data = x >= y
console.log(data)//true

x = 2
 y =  "3"
data = x >= y
console.log(data)//false

//Comparing a equals 

 x = 3
 y = 3
data = x == y
console.log(data)//true

 x = "3"
 y = 3
data = x == y
console.log(data)//true

//In javascript we are using to === equals

x = "3"
y = 3
data = x === y
console.log(data)//false

//Locical operators
x = 7, y = 8, z = 9
result = x > y
console.log(result)//false

x = 7, y = 8, z = 9
result = x < y && y < z
console.log(result)//true

x = 7, y = 8, z = 9
result = x < y && y > z
console.log(result)//false

x = 7, y = 8, z = 9
result = x < y || y > z
console.log(result)//true, first condition is true and second is false, it give a true

x = 7, y = 8, z = 9
result = x > y || y > z
console.log(result)//both are false it will give a false

x = 7, y = 8, z = 9
result = x < y && y > z
n = !result
console.log(result, n)//false true

x = 7, y = 8, z = 9
result = x < y || y > z
n = !result
console.log(result, n)//true false

//Conditional Statement

num1 = 6
num2 = 4
result = num1 > num2
if(result)
   console.log('num1 is greater')//num1 is greater
   console.log('Bye....') //Bye....

num1 = 3
num2 = 4
result = num1 > num2
if(result)
   console.log('num1 is greater')
else
   console.log('num2 is greater')//num2 is greater 
   console.log('yee....')//yee....
   console.log('Bye....')//Bye....

num1 = 6
num2 = 4
result = num1 > num2
if(result){
   console.log('num1 is greater')//num1 is greater
}
else{
   console.log('num2 is greater')
   console.log('yee....')
}
   console.log('Bye....')//Bye....
//The curly braces is a optional, if we have a one statement, But we have a multiple statement 
//We should use curly braces

//When we using else if
num1 = 6
num2 = 4
num3 = 8
if( num1 > num2 && num1 > num3 ){
   console.log('num1 is greatest')
}
else if (num2 > num3){
   console.log('num2 is greatest')
}else {
    console.log('num3 is greatest')//num3 is greatest
}
   console.log('Bye....')//Bye....

//We find number is even or odd using if else condition

let numberr = 5
let rresult
if(numberr%0 === 0)
   rresult = "even"
else
   rresult = "odd"
console.log(rresult)  //odd

//when we using ternary operator
num1 = 10
result = num1%2===0 ? "Even" : "Odd"
console.log(result)//Even

num1 = 11
result = num1%2===0 ? "Even" : "Odd"
console.log(result)//Odd

// Switch statement
//Ex: I want to put an alarm for based on the day
//Mon - 7am
//Tue - Thrus - 4am
//Fri - 9am
//sat - sun - 8am

let day = "Holiday"
switch(day){
    case "Monday":
        console.log("7am")
        break;
    case "Tuesday": 
    case "Wednesday":
    case "Thrusday":
        console.log("4am") 
        break;
    case "Friday":
        console.log("9am")
        break;
    case "Saterday":
    case "Sunday":
        console.log("8am")   
    default: 
       console.log("7am doing body workout")                
}
       console.log("alarm bell")