//Number
var num: Number = 10;
console.log(num);//10

//String
var str: string = 'This is the typescript course';
var str1:string = `This is another way to define a string using backtik`
console.log(str);//This is the typescript course
console.log(str1);//This is another way to define a string using backtik

//Boolean
var bool:boolean = true;
var bool1:boolean = false;
console.log(bool);//true
console.log(bool1);//false

//any
var anyy = {
    productId: 1,
    product: 'laptop',
    cpu: 'i9',
    cost: 50000,
    brand:'hp' 
}
console.log(anyy);//{productId: 1, product: 'laptop', cpu: 'i9', cost: 50000, brand: 'hp'}

//Homogenous Array
var arr:Array<string> = ['Angular-js', 'Node-js', 'React-js'];
console.log(arr);//(3) ['Angular-js', 'Node-js', 'React-js']
console.log(arr[1]);//Node-js

//Hetrogenous Array
var arry:Array<any> = ['varun', 123, true];
console.log(arry);//(3) ['varun', 123, true]

//Enum
enum Gender {
    Male,
    Female
}
console.log(Gender.Male);//0
console.log(Gender.Female);//1
console.log(Gender[0]);//Male
console.log(Gender[1]);//Female

enum weekEnds {
    saterday = 6,
    sunday = 7
}
console.log(weekEnds[6]);//saterday
console.log(weekEnds[7]);//sunday

//String type 
var srti: string = 'varun';
var result = (`${srti}`);
console.log(result);//varun

//String functions
var stringval:string = 'check the values';
console.log(stringval.length);//16
console.log(stringval.charAt(0));//c
console.log(stringval.indexOf('h'));//1
console.log(stringval.lastIndexOf('n'));//-1

//TypeScript supports union type, we can combine different data types
var sn: string | number
sn = 'varun';
sn = 123;
console.log(sn);//123
console.log(sn);//123