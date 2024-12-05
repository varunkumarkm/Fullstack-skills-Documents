//Loops
console.log("Hi")//Hi
//I want to print Hi 10 times
//initialize, condition, increment

//while loop - First check for the conditions
let i = 1
while(i <= 5)
{
    console.log("Hi", i)//Hi 1 Hi 2 Hi 3 Hi 4 Hi 5
    i++
}
console.log(i)//6

i = 5
while(i >= 1)
{
    console.log("Hi", i)//Hi 5 Hi 4 Hi 3 Hi 2 Hi 1 
    i--
}
console.log(i)

//Do while loop - First Execute the block then check for the conditions

 i = 5
 do
 {
    console.log("Wel", i)//Wel 5 Wel 6 Wel 7 Wel 8 Wel 9 Wel 10
    i++
 }while(i <= 10)

 //For loop - 

 for(let i = 1; i<=5; i++){
    console.log("Hello")//Hello Hello Hello Hello Hello
}
i = 1
for(; i<=5;){
    console.log("Ram")// Ram Ram Ram Ram Ram
    i++
}
//Nested for loop
for(let i = 1; i<=5; i++){
    console.log("hiii", i)//ex: it runs completly
    for(let j = 1; j<=5; j++)
         console.log("hello!!", i)//ex: it run same value 5 times
}
//Which one is the best loop compare to while loop and for loop
//Every loop is an own drawbacks and advantages

for(i = 1; i<=100; i++){
    if(i%12===0)
      console.log(i)//12 24 36 48 60 72 84 96
}
//435364747 I have this number, This numbers I need to print induvidually for reverse manner
let induvidually = 435364747
// console.log(induvidually%10)//6
// induvidually = parseInt(induvidually/10)
// console.log(induvidually)//12345

// console.log(induvidually%10)//5
// induvidually = parseInt(induvidually/10)
// console.log(induvidually)//1234
// //it will repeathing

while(induvidually > 0){
    console.log(induvidually%10)//747463534
    induvidually = parseInt(induvidually/10)
}
 //How do we use a for in loop
 //we want to print a one by one value for ex:
 let allean = {
    name: 'varun',
    tech: 'java',
    laptop : {
        cpu: 'i5',
        ram: 4,
        brand: 'hp',
    }
}
for(let key in allean){
//console.log(key);//name tech laptop
//console.log(key, allean.tech);//name java  tech java  laptop java
console.log(key, allean[key]);//name varun
                            // tech java
                            // laptop { cpu: 'i5', ram: 4, brand: 'hp' }
 }




















