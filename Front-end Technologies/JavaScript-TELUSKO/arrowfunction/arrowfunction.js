//Arrow function - why arrow is use, In the future it helps to reducing the code ex:
let greeet = (user) => {
    console.log("Hello function " + user)//Hello function varun
    return 1
}
console.log(greeet('varun'))//1

//compare to the earlier code, arrow function is decreasing a lines of code ex:

let addedd = (num1, num2) => num1 + num2;
let rrr = addedd(23, 23);
console.log(rrr)//46

//How to add a function to an object (Function + Object)
let laptop = {
    cpu: '19',
    ram: 16,
    brand: 'dell',

    grreeet: function () {
        console.log('hello function')//hello function
    }
}
laptop.grreeet()
