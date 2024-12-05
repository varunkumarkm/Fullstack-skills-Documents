//Type Conversion and type Coercion:

//Explisite conversion
let numm = 6
console.log(numm, typeof(numm))//6 number

//we convert Number to string
let nummm = String(6)
console.log(nummm, typeof(nummm))//6 string

//we conver String to Number
let nummmb = Number("123")
console.log(nummmb, typeof(nummmb))//123 number

//Coercion
let x
console.log(x, typeof x)//undefined undefined

x = 8
console.log(x, typeof x)//8 number

x = x + ""
console.log(x, typeof x)//8 string

x = x +2
console.log(x, typeof x)//82 string

x = +x +2
console.log(x, typeof x)//84 number

x = x - 2
console.log(x, typeof x)//6 number    

x = !x
console.log(x, typeof x)//false boolean

//How to convert a boolean into number
console.log(Boolean(7))//true
console.log(Boolean(0))//false, Because o is falsy value
console.log(Boolean(null))//false, Because null is falsy value
console.log(Boolean(undefined))//false, Because undefined is falsy value
//apart from the everything is truly value like: convert object, function into boolean is gives to truly,
console.log(Boolean("varun"))//true

//ParseInt is a special function which will except a String, it will try to convert into Number
let y = parseInt("123 varun")
console.log(y)//123