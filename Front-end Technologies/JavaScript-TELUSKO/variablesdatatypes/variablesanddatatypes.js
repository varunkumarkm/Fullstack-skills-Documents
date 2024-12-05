let radius = 5
const pi = 3.14
let area;
radius = 8
//pi = 3.88 it's give a error because, in pi keyword is const, we using const keyword the variable shoult be constant
area = pi* radius*radius
console.log(area);//200.96

// why we using a typeof

let num1 = 34.6
console.log(typeof num1)//number

let nuum = 5                                        //let nuum = 5
console.log(5/"var")//NaN not a number              //console.log(typeof(5/"var"))//number

let user = 'varun'
console.log(typeof(user));//string

//Number data type

//we use hexadecimal value
let num2 = 0xf
console.log(num2)//15

let num3 = 0xff
console.log(num3)//255

let num4 = 1.5e12
console.log(num4)//1500000000000 so it the exponential, it is 1.5*10^12

let num5 = 100_00_000
console.log(num5)//In javascript we can find the values easily, we using underscope, But we not using comma over here

let num6 = 5/0
console.log(num6)//Infinity, So it is a type of number

console.log(Number.MAX_VALUE)//1.7976931348623157e+308

console.log(Number.MAX_VALUE * 10)//Infinity

//How can we use BinInt, when we using the last name n on value that is BinInt, it shows as it is values
let num7 = 1537329853298547239865846n
console.log(num7)//1537329853298547239865846n

// let num8 = 1537329853298547239865846n
// console.log(num7+2)//TypeError: Cannot mix BigInt and other types, use explicit conversions

let num8 = 1537329853298547239865846n
console.log(num7+2n)//fix this issue 1537329853298547239865848n

//String data type

//The + operate is very smart it checks weather its string or number, is it String it will concatinated
// if its number it will addition for example for String

let firstName = 'varun'
let lastName = 'kumar'
let userName = firstName + " " +lastName//+" "+ we take a space in between
console.log(userName)//varun kumar

//We understanding how we are using single cots and double cots
let userNamee = 'varun kumar "capgemini"'
console.log(userNamee)//varun kumar "capgemini"

//So which ever double cots is work in a string we using like this
let userr = "varun kumar \"capgemini\""
console.log (userr)//varun kumar "capgemini"

//escape character
user = 'Va\trun \nkumar'//Va	run   \t - give some space, \b - removing the extra character
console.log(user)//   \n - next line kumar   

//Boolean data type

let bool = 5 > 6                 //let bool = 5 < 6          //let bool = 5 < 6 
console.log(bool)// false        //console.log(bool)//true   //console.log(typeof(bool))//Boolean

//Null and undefined

let use = null                 // let use = null  its not showing any bug and error, we convey we don't have a value we can say null
console.log(use)//null         // console.log(typeof(use))//object 

let usee                       //let usee  
console.log(usee)//undefined  //console.log(typeof(usee))//undefined 