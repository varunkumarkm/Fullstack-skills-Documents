//In typeScript all the properties is by default public ex:
//public and readOnly:
//Public
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student = new Student();
student.name = 'varun';
//readOnly:
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = 'varun'; //Now, getting an error, Because it is constant or readOnly property 
    }
    return Employee;
}());
var employee = new Employee();
//employee.name = 'varun';
//Encapsulation: it is the binding the data and code together
// its binding data properties or function and method properties on a object together by using to achive 
//the access specifier is private
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.display = function () {
        console.log(this._name); //we can access like this
    };
    Object.defineProperty(Students.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
var students = new Students();
students.setName = 'varun'; //using set method, we setting the value
console.log(students.getName); //Now we can access using get method
//students._name = 'varun';// we cannot access this, Because access specifier as private
//Note: This was introduced after ES5, we have not access below ES5, that's we tell us to compiler using this command
//tsc --target es5 modifiers.ts
//How can we using a static properties:
//Ex we working on bank check case:
//Bank name is common, its constant across the check objects
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.bankName = 'HDFC bank'; //Memory will allocate the each object, that's why bankName is common over here we make it static
    return Check;
}());
var check = new Check();
//check.bankName; now we cannot access it 
//we can able to access it using class name only ex:
Check.bankName = 'HDFC';
var check1 = new Check();
check1.accNo = 35014890765;
check1.customerName = 'varun';
check1.routingNo = 24;
console.log(Check.bankName); //HDFC   we can accessing it using the class name
console.log(check1); //Check {accNo: 35014890765, customerName: 'varun', routingNo: 24}
//More about static:
//We can access the static property for the another way
var CheckPage = /** @class */ (function () {
    function CheckPage() {
    }
    CheckPage.prototype.display = function () {
        CheckPage.bankName = 'HDFC banking';
        console.log(CheckPage.bankName); //HDFC banking
    };
    CheckPage.bankName = 'HDFC bank';
    return CheckPage;
}());
var checkPage = new CheckPage();
CheckPage.bankName = 'HDFC';
console.log(CheckPage.bankName); //HDFC
checkPage.display();
//static methods:
//Utility methods will not directly effect the object state or good candidates for static methods
//Here we have some methods are:Calculator * sum * sub * mul *div these methods do not need access to  
//object properties we simply pass in parameters and calculate the result and return it back ex:
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.mul = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.div = function (num1, num2) {
        return num1 / num2;
    };
    return Calculator;
}());
console.log(Calculator.sum(10, 20));
console.log(Calculator.sub(10, 20));
console.log(Calculator.mul(10, 20));
console.log(Calculator.div(10, 20));
