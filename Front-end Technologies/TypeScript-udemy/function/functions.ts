function add(num1:number, num2:number):number{
    return num1+num2;
}
console.log("Sum is:" +add(12, 45));//Sum is: 57

function str():string {
    return 'varun';
}
console.log(str());//varun

//passing multiple elements
 function elements(name:string, num:number, bool:boolean):any{
    return name+num+bool; 
 }
 console.log("value is:" +elements('kiran', 12, true));//kiran12true

 //How to make a function parameters as a optional
 function display(id:number, name:string, role:string) {
    console.log('id:',id);//1
    console.log('name:',name);//anil
    console.log('role:', role);//admin
 }
 display(1, 'anil', 'admin');

 function displays(id:number, name:string, role?:string) {
    console.log('id:',id);//1
    console.log('name:',name);//anil
    if(role !=undefined){
    console.log('role:', role);
    }
 }
 displays(1, 'anil');

 //How to add a default value to the parameters
 function displaying(id:number, name:string, role:string = 'normal') {
    console.log('id:',id);//1
    console.log('name:',name);//anil
    console.log('role:', role);//normal
 }
 displaying(1, 'anil');

 //how to add a parameter function
function calculator(cal:any):void {
    console.log(cal(10,20));//30
}
calculator(add);

//How to returning a function within another function
function mobile():any {
    function substract(num3:number, num4:number){
        return num3-num4;
    }
    return substract;
}
var sub = mobile();
console.log(sub(20,5));//15
console.log(mobile()(30,5))//25

//Anonymous function
var hello = function (name:string):string{
    return "Hello" +name;
} 
console.log(hello('prashanth'));//Helloprashanth

//Function overloadinng
//we using doubleMe - It access the numeric data as well as string data, if it is number*2, if its stirng
//append the same string
function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x:any){
    if(x && typeof x === 'number'){
        console.log(x*2);
    }else if(x && typeof x === 'string'){
        console.log(x+" "+x);
    }
} 
doubleMe(4);//8
doubleMe('manoj');//manoj manoj

//Rest params - using this we pass any number of parameters in the function
//Rest parameter is the last parameter in the function
var product = function(...nums){
    var resulted = 1;
    for(var i = 0; i<nums.length; i++){
        resulted *= nums[i];
    }
    return resulted;
}
console.log(product(2,4,6,8,3));//2*4*6*8*3 = 1152

//Arrow Functions - Arrow functions are used to short-cut to using Anonymous function
//ex: var duubleMe = (num:number) => num*2   this is arrow function syntax
//There is no function keyword, no curly braces and no return ststement as well

var hi = ():string => {
   return 'Hello world!!!'
}
console.log(hi());//Hello world

//How to pass a arguments
var hii = (name:string):string => {
    return 'Hello '+ name;
 }
 console.log(hii('ramesh'));

 var multiply = (mult1:number, mult2:number):number => {
    return mult1*mult2;
 }
 console.log(multiply(6,6));//36

 //Array of arrow function
 var myArray:Array<any> = [];
 for (var i=0; i<10; i++){
    myArray.push(():number=>{return i})
 }
 for (var i=0; i<10; i++){
    console.log(myArray[i]()); //0 1 2 3 4 5 6 7 8 9
}

