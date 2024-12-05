
//let, const and Block scoping
console.log(product);
var product = 13;//undefined

//  console.log(modelId);
//  let modelId = 13;//Referance error

var materialId = 12;
console.log(materialId);//12

let carId = 13;
console.log(carId);//13

//Block scoping
let productId = 100;
{
   let productId = 2000;
}
console.log(productId);//100

//  {
//     let busId = 2000
//  }
//  console.log(busId);//Referance error

function updatebusId (){
 busId = 33;
}
let busId = 54;
updatebusId();// when commant this call function result is 54
console.log(busId);//33

let produc = 42;
for (let produc = 0; produc<10; produc++){
}
console.log(produc);//42

let updateFunctions = [];
for (var i = 0; i<3; i++){
   updateFunctions.push(function(){
       return i;
   });
}
console.log(updateFunctions[0]());//2

let updateFunction = [];
for (let i = 0; i<2; i++){
   updateFunction.push(function(){
       return i;
   });
}
console.log(updateFunction[0]());//0

// // const keyword
const MARK_PCT = 100;       // const MARK_PCT;
console.log(MARK_PCT);     // console.log(MARK_PCT); // syntax error initialization mandatory

//  const MARK_DCT = 100;
//  MARK_DCT = 10;
//  console.log(MARK_DCT);//Type error assignment to constant variable

const MARK_GCT = 200;
if(MARK_GCT >0){
   const MARK_GCT = 20;
}
console.log(MARK_GCT);//200

// //Arrow Functions =>

var getPrice = () => 9.087;
console.log(typeof getPrice);//function

var getPrice = () => 9.087;
console.log(getPrice());//9.087

// //Arrow function with no parantisis 

var getPrice = count => count *8;
console.log(getPrice(3));//24 

// //Arrow function with 2 parameters, we using more than one parameter we going paranthisis 

var getPrice = (count, tax) => count * 9 * (2 + tax);//9*2+(2+1)=54
console.log(getPrice(2, 1));//54

//using a block example

var getPrice = (count, tax) => {
   var price = count * 4.00;//4*2 * (1+1)=16
   price *= (1+tax);
   return price;
}
console.log(getPrice(2, 1));//16
    
// document.addEventListener('click', function(){
// console.log(this)
// });Referance error document is not defined, But in browsr shows #document

// document.addEventListener('click', () => console.log(this));Referance error document is not defined, But in browsr shows global object window {...}
//ES5 code

var invoice = {
   number: 123,
   process: function(){
      console.log(this);
   }
};
invoice.process();//{number: 123, process [function: process]}

//For ES6 code

var invoice = {
   number: 123,
   process: () => console.log(this) 
};
invoice.process();//{} global object is created

var invoice = {
   number: 123,
   process: function(){//Because process is function here
           return() => console.log(this.number);//return by a process function
   }
};
invoice.process()();//123

var invoice = {
   number: 123,
   process: function(){
           return() => console.log(this.number);
   }
};
var newInvoice = {//we cannot bind a new object in arrow function
   number :456
};
invoice.process().bind(newInvoice)();//123

var invoice = {
   number: 123,
   process: function(){
           return() => console.log(this.number);
   }
};
var newInvoice = {
   number :456
};
invoice.process().call(newInvoice);//123

// var getPrice = ()
//      => 6.78;
//      console.log(typeofgetPrice);syntax Error unexpectred tocken => because arrow function we not use a new line

var getPrice = () => 6.78;
console.log(getPrice.hasOwnProperty("prototype"));//false

//Default function parameters

var getProduct = function(productId = 1000){
   console.log(productId);
};
getProduct();//1000

var getProduct = function(productId = 1000, type = 'software'){
   console.log(productId +', '+type);
};
getProduct(undefined, 'hardware');//1000, hardware

var getTotal = function(price, tax = price*0.07){
   console.log(price+tax);//5*.0.7+5
};
getTotal(5);//5.35

var basetax = 0.07;
var getTotal = function(price, tax = price*basetax){
   console.log(price + tax);//5*.0.7+5
};
getTotal(5);//5.35

var generatebasetax = () => 0.07;
var getTotal = function(price, tax = price * generatebasetax()){
   console.log(price + tax);//5*.0.7+5
};
getTotal(5);//5.35  we can access the function when we specifying a default 

var getTotal = function(price, tax = 0.07){
   console.log(arguments.length);// it is not a best practice for using the arguments within a function
};
getTotal(5.00);//1

// var getTotal = function(price = adjustment, adjustment = 1.00){
//    console.log(price + adjustment);// syntax error, use before decleration
// };
// getTotal();

var getTotal = function(price = adjustment, adjustment = 1.00){
   console.log(price + adjustment);
};
getTotal(5);//6

// Creating a dynamic function with default
var getTotal = new Function("price = 20.00", "return price;");
console.log(getTotal());//20

//Rest and Spread

//Rest

//Catagories will be set to an array

var showCatagories = function (productId, ...Catagories){
   console.log(Catagories instanceof Array);
};
showCatagories(123, 'search', 'advertising');//true

var showCatagories = function (productId, ...Catagories){
   console.log(Catagories);
};
showCatagories(123, 'search', 'advertising');//['search', 'advertising']

var showCatagories = function (productId, ...Catagories){
   console.log(Catagories);
};
showCatagories(123);//[]

var showCatagories = function (productId, ...Catagories){
};
console.log(showCatagories.length);//1

var showCatagories = function (productId, ...Catagories){
   console.log(arguments.length);
};
showCatagories(123, 'search', 'advertising');//3

//what happens for new dynamic function

var showCatagories = new Function("...catagories", "return catagories");
console.log(showCatagories('search', 'advertising'));//[ 'search', 'advertising' ]

//Spread

var prices = [45, 78, 34];
var MaxPrice = Math.max(...prices);
console.log(MaxPrice);//78

var prices = [45, 78, 34];
var newPriceArray = [...prices];
console.log(newPriceArray);//[ 45, 78, 34 ]

var newPriceArray = Array (...[,,]);
console.log(newPriceArray);//[ undefined, undefined ]

var newPriceArray =  [...[,,]];
console.log(newPriceArray);//[ undefined, undefined ]

var MaxCode = Math.max(..."43210");
console.log(MaxCode);

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);

//Object literal extensions:

var price = 8.09, quality = 30;
var productView = {
   price,
   quality
};
console.log(productView);// {price: 8.09, quality: 30}

var price = 8.09, quality = 30;
var productView = {
   price,
   quality,
   calculateValue(){
      return this.price * this.quality
   }
};
console.log(productView.calculateValue());//242.7
                 //or
                 var price = 8.09, quality = 30;
                 var productView = {
                    price,
                    quality,
                    "calculateValue"(){
                       return this.price * this.quality
                    }
                 };
                 console.log(productView["calculateValue"]());//242.7     
                 
 var field = 'dynamicfield'
 var price = 9.98
 var productView = {
   [field] : price
 };
 console.log(productView);//{ dynamicfield: 9.98 }     
 
 var field = 'dynamicfield'
 var price = 9.98
 var productView = {
   [field + "-001"] : price
 };
 console.log(productView);//{ 'dynamicfield-001': 9.98 }

   var method = 'doit'
   productView = {
      [method + "-001"] (){
         console.log('in a method');
      }
   };
   productView ['doit-001']();// in a method

   var ident = 'productId'
      productView = {
         get [ident] () {
            return true;
         },
         set [ident] (value){
         }
      };
      console.log(productView.productId);//true

      //for ...of loops:

      var catagories = ['hardware', 'software', 'vaporware'];
      for (var item of catagories){
         console.log(item);//hardware software vaporware
      }

      var catagories = [,,];
      for(var item of catagories){
         console.log(item);//undefined undefined
      }

      var codes = "ABCDE";
      var count = 0;
      for (var code of codes){
         count++ ;
      }
      console.log(count);

      //Octal and binary literals: ES6 is new support for this

      var value = 0o10;//it is begin with 0 and followed by o and O is octal value
      console.log(value);//8

      var value = 0O10;
      console.log(value);//8

      var value = 0b10;// b means binary value
      console.log(value);//2

      var value = 0B10;
      console.log(value);//2

      //Template literals

      let invoiceNum = '1350';// Here we using backtik
      console.log(`Invoice Number:${invoiceNum}`);//Invoice Number:1350

      let invoiceNumb = '1350';// Here we using backtik
      console.log(`Invoice Number:\${invoiceNumb}`);//Invoice Number:${invoiceNumb}

      let message = `A
      B
      C`;
      console.log(message);//we get ABC on different line

      let invoiceNumber = '1350';
      console.log(`Invoice Number: ${"Inv-" + invoiceNumber}`);//Invoice Number: Inv-1350

//Interpolation takes first before the function call for example
function showMessage(message){
   let invoiceNo = '99';
   console.log(message);
}
let invoiceNo = '1350';
showMessage (`Invoice Number: ${invoiceNo}`);//Invoice Number: 1350

function processInvoice(segments){
   console.log(segments);
}
processInvoice `template`;//[ 'template' ]

function processInvoice(segments, ...values){
   console.log(segments);
   console.log(values)
}
let invoiceNumbe = '1350';
let amount = '2000'
processInvoice `Invoice: ${invoiceNumbe} for ${amount}`;//[ 'Invoice: ', ' for ', '' ] [ '1350', '2000' ]

// Destracturing
let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average);//50000

let salaryVal = ['32000', '50000'];
let [low1, average1, high1] = salaryVal;
console.log(high1);//undefined

let salaryValue = ['32000', '50000','75000'];
let [low2, ,high2] = salaryValue;
console.log(high2);//75000

//Rest Parameter
let salaryValu = ['32000', '50000','75000'];
let [low3, ...remaining] = salaryValu;
console.log(remaining);//[ '50000', '75000' ]

let salry = ['32000', '50000'];
let [low4, average4, high4 = 88000] = salry;
console.log(high4);//88000

//Nested Array
let salry1 = ['32000', '50000',['88000', '98000']];
let [low5, average5, [actualLow, actualHigh]] = salry1;
console.log(actualLow);//88000

let salry2 = ['32000', '50000'];
let low6, average6, high6;
[low6, average6, high6 = 88000] = salry2;
console.log(high6);//88000

function reviewSalary ([low, average], high = '88000'){
console.log(average);
}
reviewSalary(['32000', '50000']);//50000

//Destracturing objects example
//working with array we using square brackets[], working with objects we using curly brackets {}
let salarygiven = {
  low7: '32000',
  average7: '50000',
  high7: '75000' 
};
let {low7, average7, high7} = salarygiven;
console.log(high7);//75000

let salarygive = {
   low8: '32000',
   average8: '50000',
   high8: '75000' 
 };
 let {low8: newLow, average8: newAverage, high8: newHigh} = salarygive;
 console.log(newAverage);//50000

//  let salarygivened = {
//    low9: '32000',
//    average9: '50000',
//    high9: '75000' 
//  };
//  let newLow1, newAverage1, newHigh1;
//     {low9: newLow1, average9: newAverage1, high9: newHigh1} = salarygivened;
//  console.log(newHigh1);//SyntaxError: Unexpected token and how to fix this

let salarygivened = {
   low9: '32000',
   average9: '50000',
   high9: '75000' 
 };
 let newLow1, newAverage1, newHigh1;
    ({low9: newLow1, average9: newAverage1, high9: newHigh1} = salarygivened);
 console.log(newHigh1);//75000

 let [maxCode, minCode] = 'AZ';
 console.log(`min: ${minCode} max: ${maxCode}`);//min: Z max: A

 //Advanced Destracture
 let [high10, low10] = [,];
 console.log(`high: ${high10} low: ${low10}`);//high: undefined low: undefined

//  let [high11, low11] = undefined;//instade of undefined we use 'null' also same error 
//  console.log(`high:${high11} low:${low11}`);//we get a runtime error(TypeError:undefined is not iterable)
 
 try{
       let [high12, low12] = undefined;
 }catch(e){
   console.log(e.name);//TypeError
 }

 let [high13, low13, ] = [500, 200] ;
 console.log(`high: ${high13} low: ${low13}`);//high: 500 low: 200

 for (let [a,b] of [[5,10]]){
   console.log(`${a} ${b}`)
 }// 5 10

 let count1 = 0;
 for (let [c,d] of [[5,10]]){
   console.log(`${c} ${d}`);
   count1++ ;
 }
 console.log(count1);//5 10 next line 1

 //classes

class Task {
}
let task = new Task();
console.log(typeof task);//object

class Tasks {
}
console.log(typeof Tasks);//function

class Tasking {
}
let tasks = new Tasking();
console.log(tasks instanceof Tasking);//true

class Work {
  showId(){
    console.log('99');
  }
}
let work = new Work();
work.showId();//99

class Main {
   showingId(){
    console.log('99');
   }
}
let main = new Main();
console.log(main.showingId === Main.prototype.showingId);//true

class Wart {
  constructor(){
    console.log('constructing task');
  }
  showedId(){
    console.log('180');
  }
}
let wart = new Wart();//constructing task

// class Ramt {
//   let RamtId = 9000;
//   constructor(){
//     console.log('constructing task');//stntax error
//   }
//   viewId(){
//     console.log('180');
//   }
// }
// let ramt = new Ramt();

// let ramt = new Ramt();
// class Ramt {
//    constructor(){
//     console.log('constructing log');//Error use befor decleration
//    }
// }

let newClass = class Smart {
  constructor(){
    console.log('constructing log');
  }
};
new newClass();//constructing log

let Job = function (){
   console.log('construct job')
};
let job = {};
Job.call(job);//construct job

// class Mark {
//   constructor(){
//     console.log('constructing work');
//   }
// };
// let mark = {};
// Mark.call(mark);//Error, Class constructor Mark cannot be invoked without 'new

// function Project() { };
// console.log(window.Project === Project);//window is not defined true

// class Bars { }
//   console.log(window.Bars === Bars);// false

//extends and super

class Music {
  constructor(){
    console.log('constructing value');
  }
}
class MusicProject extends Music {
}
let p = new MusicProject();//constructing value

class Song {
  constructor(name){
    console.log('constructing value :'+ name);
  }
}
class SongProject extends Song {
}
let s = new SongProject('varun');//constructing value :varun

class Sing {
  constructor(){
    console.log('constructing value');
  }
}
class SingProject extends Sing {
  constructor(){
    super();
    console.log('constructing SingProject')
  }
}
let Si = new SingProject();//constructing value
                           // constructing SingProject

 class WorkTask {
  getTaskCount(){
    return 50;
  }
 }      
 class WorkTaskProject extends WorkTask {

 }                    
let wt = new WorkTaskProject();
console.log(wt.getTaskCount());//50

class WorkWork {
  getWorkCount(){
    return 50;
  }
 }      
 class WorkWorkProject extends WorkWork {
  getWorkCount(){
    return 66;
  }
 }                    
let ww = new WorkWorkProject();
console.log(ww.getWorkCount());// 50 66

//we can use super in methods
class TaskGame {
  getGameCount(){
    return 50;
  }
 }      
 class TaskGameProject extends TaskGame {
  getGameCount(){
    return super.getGameCount() + 6;
  }
 }                    
let tg = new TaskGameProject();
console.log(tg.getGameCount());//56

let rocket = {
   getRocketCount(){
    return 50;
   }
};
let rocketProject = {
  getRocketCount(){
    return super.getRocketCount() + 7;
  }
}
Object.setPrototypeOf(rocketProject, rocket);
console.log(rocketProject.getRocketCount());//57

//properties for class instances

class vikram {
  constructor(){
    this.location = 'bangalore';
  }
}
class vikramProject extends vikram {
  constructor(){
    super();
  }
}
let vp = new vikramProject();
console.log(vp.location);//bangalore

// class vikram {
//   constructor(){
//     let.location = 'bangalore';
//   }
// }
// class vikramProject extends vikram {
//   constructor(){
//     super();
//   }
// }
// let vp = new vikramProject();
// console.log(vp.location);//instead this using let the output is undefined

class downward {
  constructor(){
    this.location = 'bangalore';
  }
}
class downwardProject extends downward {
  constructor(){
    super();
    this.location = this.location +' Beach'
  }
}
let dp = new downwardProject();
console.log(dp.location);//bangalore Beach

//Static member in a class

class roject {
  static getRojectId(){
 return 0;
  }
}
console.log(roject.getRojectId());

class Manage {
  static getManageId(){
 return 0;
  }
}
var m = new Manage();
console.log(Manage.getManageId());//0

// class Manager {
//    static getManagerId(){
//   return 0;
//    }
//  }
//  var m = new Manager();
//  console.log(m.getManagerId());//error object does'nt support property

// class ninja {
//    static let id = 0;
// }
// console.log(ninja.id);// SyntaxError: Unexpected identifier

class ninja {
}
ninja.id = 100;
console.log(ninja.id);//100

//new.target: Mainly used to the constructor

class Hondas {
   constructor(){
      console.log(typeof new.target);
   }
}
var h = new Hondas();//function

class Honda {
   constructor(){
      console.log(new.target);
   }
}
var h = new Honda();//[class Honda]

class Bajaj {
   constructor(){
      console.log(new.target);
   }
}
class BajajProject extends Bajaj {
   constructor(){
      super();
   }
}
var b = new BajajProject();//[class BajajProject extends Bajaj]

class Chetak {
   constructor(){
      console.log(new.target);
   }
}
class ChetakProject extends Chetak {
}
var b = new ChetakProject();//[class ChetakProject extends Chetak] here javascript creats default constructor

class Motor {
   constructor(){
      console.log(new.target.getMotorId());
   }
}
class MotorProject extends Motor {
  static getMotorId(){
     return 99;
  }
}
var mt = new MotorProject();//99

//New Types and object extensions

//symbols: A symbol a unique and immutable data type and may be used as an identifier for the object properties
let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);//symbol

let eventSymbols = Symbol('resize event');
console.log(eventSymbols.toString());//Symbol(resize event)

const CALCULATE_EVENT_SYMBOL = Symbol('Calculate symbol');
console.log(CALCULATE_EVENT_SYMBOL.toString());//Symbol(Calculate symbol)

let s1 = Symbol('event');
let s2 = Symbol('event');
console.log(s1 === s2);//false

let s3 = Symbol.for('event');
console.log(s3.toString());//Symbol(event)

let s4 = Symbol.for('event');
let s5 = Symbol.for('event');
console.log(s4 === s5);//true

let s6 = Symbol.for('event');
let s7 = Symbol.for('eventA');
console.log(s6 === s7);// false

let s8 = Symbol.for('event');
let description = Symbol.keyFor(s8);
console.log(description);//event

let article = {
   title: 'whiteface mountain',
   [Symbol.for('article')]: 'My article'
};
let values = article[Symbol.for('article')];
console.log(values);//My article

let articles = {
   title: 'whiteface mountain',
   [Symbol.for('article')]: 'My articles'
};
console.log(Object.getOwnPropertyNames(articles));//[ 'title' ]

let articleses = {
   title: 'whiteface mountain',
   [Symbol.for('articleses')]: 'My articles'
};
console.log(Object.getOwnPropertySymbols(articleses));//[ Symbol(articleses) ]

let Blog = function(){
};
let blog = new Blog();
console.log(blog.toString());//[object Object]

let Blogs = function(){
};
   Blogs.prototype[Symbol.toStringTag] = 'Blog class';
   let blogs = new Blogs();
   console.log(blogs.toString());//[object Blog class]

   let valuing = [8, 12, 16];
   console.log([].concat(valuing));//[ 8, 12, 16 ]

   let valued = [8, 12, 16];
   valued[Symbol.isConcatSpreadable] = false;
   console.log([].concat(valued));//[ [ 8, 12, 16, [Symbol(Symbol.isConcatSpreadable)]: false ] ]

   let val = [8, 12, 16];
   let sum = val + 100;
   console.log(sum);//8,12,16100

   let valing = [8, 12, 16];
   valing[Symbol.toPrimitive] = function (hint) {
      console.log(hint);
      return 42;
   };
   let suming = valing+ 100;
   console.log(suming);//default 142

   //Object extensions

   let k = {
      x: 1
   };
   let l = {
      y: 2
   };
    Object.setPrototypeOf(k, l);
    console.log(k.y);//2

    let d = {d: 1}, e = {e: 2};
    let target = {};
    Object.assign(target, d,e);
    console.log(target);//{ d: 1, e: 2 }

    let f = {f: 1}, g = {f: 2, h: 3};
    let targets = {};
    Object.assign(targets, f,g);
    console.log(targets);//{ f: 2, h: 3 }

    let o = {o: 1}, j = {o: 2, j: 3};
    Object.defineProperty(b, 'c', {
      value: 10,
      enumerable: false
    });
    let targeting = {};
    Object.assign(targeting, o, j);
    console.log(targeting);//{ o: 2, j: 3 }

    let amounts = NaN;
    console.log(amounts === amounts);//false

    let account = NaN;
    console.log(Object.is(amount, amount));//true

    let rupees = 0, totally = -0;
    console.log(rupees === totally);//true

    let rupeey = 0, total = -0;
    console.log(Object.is(amount, total));//false

    //String Extensions

    let title = 'lord is the most powerful';
    console.log(title.startsWith('lord'));//true

    let titles = 'lord is the most powerful';
    console.log(titles.endsWith('power'));//false

    let titling = 'lord is the most powerful';
    console.log(titling.includes('mo'));//true

    let titl = "varun's \u{1f3c4} blog";
    console.log(titl);//varun's 🏄 blog

    let surfur = '\u{1f3c4}';
    console.log(surfur.length);//2

    var surfer = '\u{1f3c4}\u{1f30a}\u{1f40b}'
    console.log(Array.from(surfer).length);
    console.log(surfer);//🏄🌊🐋

    var tit = "Varun\u0301n";
    console.log(tit + ' ' + tit.length);//Varuńn 7

    var tita = "Varun\u0301n";
    console.log(tita + ' ' + tita.normalize().length);//Varuńn 6

    var tital = "Varun\u0301n";
    console.log(tital.normalize().codePointAt(4).toString(12));//230

    console.log(String.fromCodePoint(0x1f3c4));//🏄

    let wave = '\u{1f30a}';
    console.log(wave.repeat(20));//🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊

    //Number Extensions

    console.log(Number.parseInt === parseInt);//true
    console.log(Number.parseFloat === parseFloat);//true

    let sa = 'Nan';
    console.log(isNaN(sa));//true
    console.log(Number.isNaN(sa));//false

    let su = '8000';
    console.log(isFinite(su));//true
    console.log(Number.isFinite(su));//false

    let som = '480.98';
    console.log(Number.isInteger(som));//false

    console.log(Number.isInteger(NaN));//false
    console.log(Number.isInteger(Infinity));//false
    console.log(Number.isInteger(3));//true
    console.log(Number.isInteger(undefined));//false

    let a = Math.pow(2, 53) - 1;
    console.log(Number.isSafeInteger(a));//true
    a = Math.pow(2, 53);
    console.log(Number.isSafeInteger(a))//false

    console.log(Number.EPSILON);//2.220446049250313e-16
    console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
    console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

    //Math Extensions

    //Hyperbolic functions
    //cosh(), acosh(), sinh(), asinh(), tanh(), atanh(), hypot()

    //Arithmetic functions
    // cbrt() - cube root
    // clz32() - count leading zeros(32 bit integers)
    // expml() - equal to exp(x)-1
    // log2() - log base 2
    // log10() - log base 10
    // log1p() - equal to log(x + 1)
    // imul() - 32 bit integer multiplication 

    // Miscellanous functions
    // sign() - the number's sign: 1, -1, 0, -0, NaN
    //trunc() - the integer part of number
    //fround() - riund to nearest 32 bit floating-point value

    //RegExp Extensions

    let pattern = /\u{1f3c4}/;
    console.log(pattern.test('🏄'));//false

    let patterns = /\u{1f3c4}/u;
    console.log(patterns.test('🏄'));//true

    let patt = /^.surfer/;
    console.log(pattern.test('🏄surfer'));//false

    let pattt = /900/y;
    console.log(pattt.lastIndex);
    console.log(pattt.test('800900'));//0 false

    let patttn = /900/y;
    pattern.lastIndex = 3;
    console.log(patttn.test('800900'));//false

    let patu = /900/yg;
    console.log(patu.flags);//gy, order will be gimuy

    //Function Extensions

    let fn = function calc(){
      return 0
    };
    console.log(fn.name);//calc

    let fnn = function() {
      return 0
    };
    console.log(fnn.name);//fnn

    class Calculator {
      constructor(){
      }
         add(){
         }
      }
    let cal = new Calculator();
    console.log(Calculator.name);//Calculator
    console.log(cal.add.name);//add
//Function.name is not writable, But its configure with Object.defineProperty()


//Iterator, Generator, and promises

//Iterator

let ids = [9000, 9001, 9002];
console.log(typeof ids[Symbol.iterator]);//function

let idss = [9000, 9001, 9002];
let it = idss[Symbol.iterator]();
console.log(it.next());//{ value: 9000, done: false }

let idsss = [9000, 9001, 9002];
let its = idsss[Symbol.iterator]();
its.next();
its.next();
console.log(its.next());//{ value: 9002, done: false }

let idssss = [9000, 9001, 9002];
let itss = idsss[Symbol.iterator]();
itss.next();
itss.next();
itss.next();
console.log(itss.next());//{ value: undefined, done: true }

let idMaker = {
   [Symbol.iterator](){
      let nextId = '8000';
      return {
         next(){
            return{
               value: nextId++,
               done: false
            };
         }
      };
   }
};
let itt = idMaker[Symbol.iterator]();
console.log(itt.next().value);//8000
console.log(itt.next().value);//8001

let idMaked = {
   [Symbol.iterator](){
      let nextIds = '8000';
      return {
         next(){
            return{
               value: nextIds++,
               done: false
            };
         }
      };
   }
};
for(let v of idMaked){
   if(v > 8002) break;
   console.log(v);//8000,8001, 8000, 8001, 8002
}

let idMake = {
   [Symbol.iterator](){
      let nextval = 8000;
        return {
         next(){
            let value = nextval>8002?undefined: nextval++;
            let done = !value;
            return {value, done};
         }};
   }};
   for(let v of idMake){
    console.log(v);//8000, 8001, 8002
   }

   let vals = [8000, 8001, 8002];
   function process(empid1, empid2, empid3){
      console.log(empid3);
   }
   process(...vals);//8002

   //Generators

   function *process(){
      yield 8000;
      yield 8001;
   }
   let iti = process();
   console.log(iti.next());//{ value: 8000, done: false }

   function *process(){
      yield 8000;
      yield 8001;
   }
   let itis = process();
   itis.next();
   console.log(itis.next());//{ value: 8001, done: false }

   function *process(){
      yield 8000;
      yield 8001;
   }
   let itiss = process();
   itiss.next();
   itiss.next();
   console.log(itiss.next());//{ value: undefined, done: true }

   function *process(){
      let nextempId = 7000;
      while (true)
        yield(nextempId++);
   }
   let lit = process();
   lit.next();
   console.log(lit.next().value);//7001

   function *process(){
      let nextstuId = 7000;
      while (true)
        yield(nextstuId++);
   }
    for (let id of process()){
      if (id>7002) break;
      console.log(id);//7000, 7001, 7002
    }

   //yielding in generators

   function *process(){
      yield 9000;
   }
   let bt = process();
   console.log(bt.next());//{ value: 9000, done: false }

   // function *process(){
   //    yield ;
   // }
   // let st = process();
   // console.log(st.next());//{ value: undefined, done: false }

   function *process(){
      let result = yield;
      console.log(`result is ${result}`)
   }
   let ot = process();
   ot.next();
   ot.next(200);//result is 200

   function *process(){
      let newArray = [yield, yield, yield];
      console.log(newArray[2]);//12
   }
   let uy = process();
   uy.next();
   uy.next(2);
   uy.next(42);
   uy.next(12);

   function *process(){
      let vallue = 4 * (yield 42);
      console.log(vallue);//40
   }
   let vit = process();
   vit.next();
   vit.next(10);

   function *process(){
      yield 42;
      yield [1, 2, 3];
   }
   let pt = process();
   console.log(pt.next().value);//42
   console.log(pt.next().value);//[1, 2, 3]
   console.log(pt.next().value);//undefined

   function *process(){
      yield 42;
      yield* [1, 2, 3];
   }
   let pts = process();
   console.log(pts.next().value);//42
   console.log(pts.next().value);//1
   console.log(pts.next().value);//2
   console.log(pts.next().value);//3
   console.log(pts.next().value);//undefined














    





















