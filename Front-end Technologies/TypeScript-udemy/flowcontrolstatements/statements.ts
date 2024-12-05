//Flow control statements: its determine the order in which at our code is executed at runtime
//There are three types of flow control statements are:
//* Selection (it checks if-else, switch, determine conditionally)
//* Iterative (it helps us execute the same code miltiple times using while, for, do while loop)
//* transfer  (transfer the execution of our code of one part of to other using continue and break return)

//if-else 
var num1:number = 35;
var num2:number = 45;
if(num1 > num2){
    console.log('num1 is grater');
} else {
    console.log('num2 is grater');//num2 is grater
}
//using else if
var num3:number = 35;
var num4:number = 35;
if(num3 > num4){
    console.log('num1 is grater');
} else if(num4 > num3){
    console.log('num2 is grater');
} else {
    console.log('both numbers are equal');//both numbers are equal
}

var x:number = 10;
var y:number = 20;
var z:number = 30;
if(x > y && x > z){
    console.log('x is grater');
} else if(y > x && y > z){
    console.log('y is grater');
} else if(z > x && z > y){
    console.log('z is grater');//z is grater
} else {
    console.log('Numbers are equal');
}

//switch
var str: string = 'sunday';
switch(str){
    case 'monday':
        console.log('7am');
    break;
    case 'tuesday':
        console.log('8am');
    case 'wednesday':
        console.log('8am');
        break;
    default:
        console.log('any time');    
}
var val:number = 4;
switch(val){
    case 1:
        console.log('case 1')
        break;
    case 2:
        console.log('case 2')  
        break;
    case 4:
        console.log('case 4')//case 4
        break;
    default:
        console.log('For any number');      
}
//while loop

var n:number = 10;
var i:number = 1;
while(i <= n){
     console.log(i++);//1 2 3 4 5 6 7 8 9 10
}

//How to validate a email address
var stri:string = 'test@gmail.com'
var atSymbol:number = stri.indexOf('@');
var dotSymbol:number = stri.indexOf('.');
if(atSymbol == -1 || dotSymbol == -1){
    console.log(`Invalid emailId ${stri}`)
}else{
    console.log('valid emailId');
}
//How to validate a password
var password: string = 'Test@123';
if(password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
      console.log('valid password');//valid password
}else{
    console.log('invalid passwoed'+ password);
}