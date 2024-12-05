//Number
var num = 10;
console.log(num); //10
//String
var str = 'This is the typescript course';
var str1 = "This is another way to define a string using backtik";
console.log(str); //This is the typescript course
console.log(str1); //This is another way to define a string using backtik
//Boolean
var bool = true;
var bool1 = false;
console.log(bool); //true
console.log(bool1); //false
//any
var anyy = {
    productId: 1,
    product: 'laptop',
    cpu: 'i9',
    cost: 50000,
    brand: 'hp'
};
console.log(anyy); //{productId: 1, product: 'laptop', cpu: 'i9', cost: 50000, brand: 'hp'}
//Homogenous Array
var arr = ['Angular-js', 'Node-js', 'React-js'];
console.log(arr); //(3) ['Angular-js', 'Node-js', 'React-js']
console.log(arr[1]); //Node-js
//Hetrogenous Array
var arry = ['varun', 123, true];
console.log(arry); //(3) ['varun', 123, true]
//Enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //0
console.log(Gender.Female); //1
console.log(Gender[0]); //Male
console.log(Gender[1]); //Female
var weekEnds;
(function (weekEnds) {
    weekEnds[weekEnds["saterday"] = 6] = "saterday";
    weekEnds[weekEnds["sunday"] = 7] = "sunday";
})(weekEnds || (weekEnds = {}));
console.log(weekEnds[6]); //saterday
console.log(weekEnds[7]); //sunday
//String type 
var srti = 'varun';
var result = ("".concat(srti));
console.log(result); //varun
//String functions
var stringval = 'check the values';
console.log(stringval.length); //16
console.log(stringval.charAt(0)); //c
console.log(stringval.indexOf('h')); //1
console.log(stringval.lastIndexOf('n')); //-1
//TypeScript supports union type, we can combine different data types
var sn;
sn = 'varun';
sn = 123;
console.log(sn);
console.log(sn);
