//This is the way we creating the function and call the function
function greet() {
    console.log('Hello world')
}
greet();//Hello world
console.log(1)
greet();//Hello world

//How do we pass value in the function and how a function return a value

function greeting(){
    return 'Hello india'
}
let str = greeting()
console.log(str);//Hello india

function greeted(user){
    return `Hello ${user}!!`
}
let user = 'varun'
let strr = greeted(user)
console.log(strr);//Hello varun!!

//Function Expression
 
let add = function(num1, num2){//This is a ananimous function, we does'nt add the name
    return num1 + num2;
}
let result = add(5, 9)
console.log(result);//14

let adding = function(num1, num2){
    return num1 + num2;
}
let sum = adding
let results = sum(5, 9)
console.log(result);//14

let userr = 'varun' //So , user we created outside, we will call it as global variable
function greeted(usr){//usr is created inside the function, So we will call it as local variable
    let num = 5
    console.log(num)//5
    return `Hello ${usr}!!`
}
console.log(userr)// It print varun, Because it is a global variable, created as outside the block
//console.log(num);// it cannot print, Because it is a local variable, created as inside the block
let strrr = greeted(userr)
console.log(strr);//Hello varun!!

function addition(num1, num2, num3=1){
    console.log(num1, num2, num3)//12 3 1
    return (num1, num2, num3)
}
let value = addition(12, 3)
console.log(value)//undefined


