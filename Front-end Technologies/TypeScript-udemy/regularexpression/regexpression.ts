let cell:string = '9108677907';
let re:any = /[0-9]{10}/
if(cell.match(re)){
    console.log('cell number is valid')//cell number is valid
}else{
    console.log('cell number is not valid'+ cell);
}

//password validation

let password:string = 'Test@123';
let regEx:any = /(?=.*[A-Z])\w{4,10}/;
if(password.match(regEx)){
    console.log('password is valid')//password is valid
}else {
    console.log('password is not valid '+ regEx)
}

//How to working on the date

let DateExpiry:any = new Date();
console.log(DateExpiry);//2023-09-04T15:56:25.921Z

let DateExpirys:any = new Date('2023-07-11');
console.log(DateExpirys)//2023-07-11T00:00:00.000Z
console.log(DateExpirys.getDate());//11
console.log(DateExpirys.getDay());//2
console.log(DateExpirys.getHours());//5
console.log(DateExpirys.getMinutes());//30
console.log(DateExpirys.toTimeString());//05:30:00 GMT+0530 (India Standard Time)
DateExpiry.setDate(20)
console.log(DateExpirys)