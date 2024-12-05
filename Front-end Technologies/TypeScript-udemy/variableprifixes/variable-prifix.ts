//When we use the var,  we can access the outside of the function
for(var i=0; i<10; i++){
    console.log(i);
}
console.log(i)

//But when we using the let, we cannot access ex:

for(let J=0; J<10; J++){
    console.log(J);
}
console.log(J);//ERROR

//const - once we define a variable with the const prifix it should not be changed, In word of java it 
//the final keyword.
var pi = 3.12;
pi = 6.67;//able to change the value
//where in const we can't able to change the value ex: This is the read-only property
const pii = 3.14;
pii = 8.89 //got error
//once we execute this program with const error, it's not showing error, Because it introduce on ES6 feature
//it just showing a warning not give a COMPILATION ERROR

//When we using const in function

var product = (num:number):number => {
    return num;
    //Another developer comes creating a function over here
    product = (num1:number):number => {
        return num1;
        // but it cannot work at this time we using assign a const on function
    }
}
const products = (num:number):number => {
    return num;
    //Another developer comes creating a function over here
    products = (num1:number):number => {//this function is getting an error
        return num1;
        // but it cannot work at this time we using assign a const on function
    }
}
//declare - it is used to define variables of ambient type or scope
//ambient - it means variables that come from external libraries, variables that are not available 
//directly within our typescript file that are called ambient variables and to use declare to define
//those variables

