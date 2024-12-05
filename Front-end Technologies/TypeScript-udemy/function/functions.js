function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is:" + add(12, 45)); //Sum is: 57
function str() {
    return 'varun';
}
console.log(str()); //varun
//passing multiple elements
function elements(name, num, bool) {
    return name + num + bool;
}
console.log("value is:" + elements('kiran', 12, true)); //kiran12true
//How to make a function parameters as a optional
function display(id, name, role) {
    console.log('id:', id); //1
    console.log('name:', name); //anil
    console.log('role:', role); //admin
}
display(1, 'anil', 'admin');
function displays(id, name, role) {
    console.log('id:', id); //1
    console.log('name:', name); //anil
    if (role != undefined) {
        console.log('role:', role);
    }
}
displays(1, 'anil');
//How to add a default value to the parameters
function displaying(id, name, role) {
    if (role === void 0) { role = 'normal'; }
    console.log('id:', id); //1
    console.log('name:', name); //anil
    console.log('role:', role); //normal
}
displaying(1, 'anil');
//how to add a parameter function
function calculator(cal) {
    console.log(cal(10, 20)); //30
}
calculator(add);
//How to returning a function within another function
function mobile() {
    function substract(num3, num4) {
        return num3 - num4;
    }
    return substract;
}
var sub = mobile();
console.log(sub(20, 5)); //15
console.log(mobile()(30, 5)); //25
//Anonymous function
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello('prashanth')); //Helloprashanth
function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + " " + x);
    }
}
doubleMe(4); //8
doubleMe('manoj'); //manoj manoj
//Rest params - using this we pass any number of parameters in the function
//Rest parameter is the last parameter in the function
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var resulted = 1;
    for (var i = 0; i < nums.length; i++) {
        resulted *= nums[i];
    }
    return resulted;
};
console.log(product(2, 4, 6, 8, 3)); //2*4*6*8*3 = 1152
//Arrow Functions - Arrow functions are used to short-cut to using Anonymous function
//ex: var duubleMe = (num:number) => num*2   this is arrow function syntax
//There is no function keyword, no curly braces and no return ststement as well
var hi = function () {
    return 'Hello world!!!';
};
console.log(hi()); //Hello world
//How to pass a arguments
var hii = function (name) {
    return 'Hello ' + name;
};
console.log(hii('ramesh'));
var multiply = function (mult1, mult2) {
    return mult1 * mult2;
};
console.log(multiply(6, 6)); //36
//Array of arrow function
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myArray[i]());
}
