//TypeCasting - it means converts one data type into another
//Converts string to number

//prompt - its always retuning a string, does not returning a number
let x:string = prompt('enter a number'); //10
console.log(x+3);//103, it is appending '10'+3 = 103

//we have a proper result we using parseInt:
let y:number = parseInt(prompt('Enter a number'));
console.log(y+3);//13, its adding now 10+3 = 13

//We adding float value using parseFloat
let z:number = parseFloat(prompt('Enter a number'));
console.log(z+3);//13.3    10.3+3 = 13.3 

//Using the to string methods:
let cources = ['java', 'spring', 'angular']
console.log(cources);//(3) ['java', 'spring', 'angular']
//I need a output for string type using toString method ex:
console.log(cources.toString());//java,spring,angular

let bool = false;
let k:string = bool.toString();
console.log(k);//false

