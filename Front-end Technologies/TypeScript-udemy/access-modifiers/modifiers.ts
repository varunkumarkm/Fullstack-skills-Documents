//In typeScript all the properties is by default public ex:
//public and readOnly:

//Public
class Student{
    public name:string;//we using public access modifier we can access any where
}
var student = new Student();
student.name = 'varun';

//readOnly:
class Employee {
    public readonly name:string = 'varun';//Now, getting an error, Because it is constant or readOnly property 
}
var employee = new Employee();
//employee.name = 'varun';

//Encapsulation: it is the binding the data and code together we can access using get and set and functions
// its binding data properties or function and method properties on a object together by using to achive 
//the access specifier is private

class Students {
    private _name:string;//we using underscope here,Because we tell to user this is not access out of class
     display(){
        console.log(this._name);//we can access like this
     }
     get getName():string {
        return this._name;
     }
     set setName(name:string) {
        this._name = name;
     }
}
var students = new Students();
students.setName = 'varun'//using set method, we setting the value
console.log(students.getName);//Now we can access using get method
//students._name = 'varun';// we cannot access this, Because access specifier as private

//Note: This was introduced after ES5, we have not access below ES5, that's we tell us to compiler using this command
//tsc --target es5 modifiers.ts

//How can we using a static properties:
//Ex we working on bank check case:
//Bank name is common, its constant across the check objects

class Check {
    static bankName:string = 'HDFC bank';//Memory will allocate the each object, that's why bankName is common over here we make it static
    customerName:string;
    accNo:number;
    routingNo:number;
}
var check = new Check();
//check.bankName; now we cannot access it 
//we can able to access it using class name only ex:
Check.bankName = 'HDFC';
var check1 = new Check();
check1.accNo = 35014890765;
check1.customerName = 'varun';
check1.routingNo = 24;

console.log(Check.bankName );//HDFC   we can accessing it using the class name
console.log(check1);//Check {accNo: 35014890765, customerName: 'varun', routingNo: 24}

//More about static:
//We can access the static property for the another way
class CheckPage {
    static bankName:string = 'HDFC bank';
    customerName:string;
    accNo:number;
    routingNo:number;
    display(){
        CheckPage.bankName = 'HDFC banking';
        console.log(CheckPage.bankName);//HDFC banking
    }
}
var checkPage = new CheckPage();
CheckPage.bankName = 'HDFC';
console.log(CheckPage.bankName);//HDFC
checkPage.display();

//static methods:
//Utility methods will not directly effect the object state or good candidates for static methods
//Here we have some methods are:Calculator * sum * sub * mul *div these methods do not need access to  
//object properties we simply pass in parameters and calculate the result and return it back ex:

class Calculator {
    static sum(num1:number, num2:number):number{
        return num1 + num2;
    }
    static sub(num1:number, num2:number):number{
        return num1 - num2;
    }
    static mul(num1:number, num2:number):number{
        return num1 * num2;
    }
    static div(num1:number, num2:number):number{
        return num1 / num2;
    }
}
console.log(Calculator.sum(10,20));//30
console.log(Calculator.sub(10,20));//-10
console.log(Calculator.mul(10,20));//200
console.log(Calculator.div(10,20));//0.5


