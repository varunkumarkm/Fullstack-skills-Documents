//Interface - we can use the interfaces as objects, arrays and functions as well
//interface is just a contract, which of some set of rules over there

//Defining a object interface
interface product {
    id: number;
    name:string;
    decription:string;
    price:number
    display():void;
}
//create and object
var product1:product = {
    id: 123,
    name: 'lenova',
    decription:'its a good laptop',
    price:30000,
    display():void{
        console.log(this.id+" "+this.name+" "+this.decription+" "+this.price)
    }
}
//How do we define optional properties
interface products {
    id: number;
    name:string;
    decription:string;
    price?:number
}
var product2:products = {
    id: 123,
    name: 'lenova',
    decription:'its a good laptop'//I have not mentioned price here, But not showing an error 
}//this ia a optional properties
//Interfaces are only compilation time, it does't exists runtime

//Defining functional interfaces
interface Add{
    (x:number, y:number):void
}
interface Sub{
    (a:number, b:number):number
}
var add:Add;
var sub:Sub;
add = function(x:number, y:number):number {
    return x+y;
}
sub = function(a:number, b:number):number {
    return a-b;
}
//How the return type is useful, when we working the functional interfaces
//* In interface we mentioned a void or not mentioned any return type in function we can add any return type, But
//* In interface we can mentioned any return type, in function we cannot add any return type values, same return type only using

//Array type
//we can also create interfaces into arrays there are two types are:
//* Number index  * string index

//* Number index
interface studentName {
    [index:number]: string;
}
var studentNames:studentName = ['kiran', 'mahesh', 'ramesh']

//* String index
interface studentScore {
    [index:string]:number;
}
var studentScores: studentScore = {};
studentScores['kiran'] = 95;
studentScores['mahesh'] = 97;
studentScores['ramesh'] = 94;
for(var item in studentScores){
    console.log(item);//kiran mahesh  ramesh
    console.log(studentScores[item]);//95 97 94
}

//How to extending a interfaces
interface Exterior {
    color: string;
    numberOfDoors:number;
}
interface Interior {
    seats:number;
    auto:boolean;
}
interface car extends Exterior,Interior {
    make:string;
    model:string;
    year:number
}
var myCar:car = {
    make:'Honda',
    model:'verna',
    year: 2018,
    color:'white',
    numberOfDoors: 4,
    seats:7,
    auto:true,
    
}    
//Casting the objects
interface Employee {
    id:number;
}
let e1:Employee;
let e2 = {id:123, name:'varun'}
e1 = e2 //it will work
//e2 = e1 //it does not work, Because name field is not mentioned

//we can only assign the data of the second variable to the first varible, if the first variable data or 
//type members are contain within the type of the second variable