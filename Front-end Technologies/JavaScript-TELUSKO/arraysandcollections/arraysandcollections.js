//we are creating an array are:
// let values = new Array(); //This is one way, and another way is
// console.log(values)//[]

let values =[5, 8, 4]
// console.log(values)//[]
console.log(values)//[5, 8, 4]
console.log(values.length);//3
console.log(values[0])//5

//How we add a values on empty array

let val = []
val.push(5,6,9)
val.push(8)
console.log(val);//[ 5, 6, 9 ]   [ 5, 6, 9, 8 ]

let names = ['varun', 'prash', 'ramesh']
names.push('kiran')//[ 'varun', 'prash', 'ramesh', 'kiran' ]
names[2] = 'anil'//[ 'varun', 'prash', 'anil', 'kiran' ]
names[4] = 'prathap' //[ 'varun', 'prash', 'anil', 'kiran', 'prathap' ]
console.log(names)

//How to store a different objects in an array
let data = ['arun', 6, {tech: 'test'}, function(){console.log('hello world!!')}]
console.log(data);//[ 'arun', 6, { tech: 'test' }, [Function (anonymous)] ]
data[3]();//hello world!!

let datas = [5,6, 4, 3, 7, 0, 3, 1, 6]
// console.log(datas.push(2))//6 this shows a array size
//pop - it means stach first in and first out
//console.log(datas.pop());//7, [ 5, 6, 4, 3 ]   it will remove last element and print remaining element 
//shift method - shift does a removes a element from the first
//console.log(datas.shift())//5, [6,4,3,7] removing a first element and rest all prining
//console.log(datas.unshift(9))//[ 9, 5, 6, 4, 3, 7 ] added  a element at the beginning
console.log(datas.splice(7,2))//
console.log(datas)//[ 5, 6, 4, 3, 7, 2 ]

//For in array we using for of loops ex: we specifically using of loops in an array
let nums = [];
nums[0] = 5;
nums[99] = 9;
//console.log(nums.length);//[ 5, <98 empty items>, 9 ] // 100 length
// for(let n of nums)
//   console.log(n);//5 undefined....9
// for(let key in nums)
// console.log(nums[key])//5 9

//How do we Destracture an array
let destracture = [5,6,9,7,8,3]
console.log(destracture)//[ 5, 6, 9, 7, 8, 3 ]
let [a,b,c,,e,f] = destracture// Assign the all array values into character, romoving one character that will work, but comma is mandatory
console.log(b)//6

//How do we swap two elements
let x = 10;
let y = 20;
[x,y] = [y,x];
console.log(x,y)//20 10

//How we use split
let words = 'this is the learning platform of javaScript'.split(" ");
let [l,m,n,o,p,q,r] = words;
console.log(n,o)//[ 'this', 'is', 'the', 'learning', 'platform', 'of', 'javaScript' ]
//the learning

let wordss = 'this is the learning platform of javaScript'.split(" ");
let [s,t,...u] = words
console.log(u)//[ 'the', 'learning', 'platform', 'of', 'javaScript' ] ... it means we can any long elements it shoult be printing
//... means rest of the elements

//For each method

let number = [42,51,44,98,55,12]
//console.log(number)//Now we try to print one by one value
 number.forEach((n) => {
    console.log(n+2);//Now the output printed as one by one
});

//filter()
let nu = [65,78,90,43,44,21,26,30]
nu.filter(f=>f%2===0)  
 .forEach( n => {
 console.log(n)
});

//Map() - map will take a value and change that value
let numb = [65,78,90,43,44,21,26,30]
numb.filter(f=>f%2===0) 
 .map(n => n*2) 
 .forEach( n => {
 console.log(n)
});

//Map reduce
let numbe = [1,2,4,3,6,8,6,3,5,2]
let resultNum = numbe.filter(f=>f%2===0) //[2 4 6 8 6 2]
 .map(n => n*2) // 4 8 12 16 12 4
 .reduce((x,z) => x+z)//56
 console.log(resultNum);//

 //set - it means a only unique
 let value = new Set('bookkeeper')
 console.log(value)//Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }

let allVal = new Set();
allVal.add('varun');
allVal.add(2);
allVal.add(8)
allVal.add(2);
allVal.add('master')
allVal.add('varun')
console.log(allVal);//Set(4) { 'varun', 2, 8, 'master' }

// How we itterate a values 
let Values = new Set();
Values.add('varun');
Values.add(2);
Values.add(8)
Values.add(2);
Values.add('master')
Values.add('varun')
Values.forEach(val => {
    console.log(val);
})

//Map()
let map = new Map();
map.set("varun", "java")
map.set("kiran", "photon")
map.set('prathik', 'aws')
console.log(map.keys())//[Map Iterator] { 'varun', 'kiran', 'prathik' }
console.log(map.has('varun'))//true
for(let [k,v] of map)
   console.log(k," : ",v)

map.forEach((v,k) => {
    console.log(k,":",v)
})