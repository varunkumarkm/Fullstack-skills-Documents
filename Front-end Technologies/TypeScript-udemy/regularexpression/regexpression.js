var cell = '9108677907';
var re = /[0-9]{10}/;
if (cell.match(re)) {
    console.log('cell number is valid'); //cell number is valid
}
else {
    console.log('cell number is not valid' + cell);
}
//password validation
var password = 'Test@123';
var regEx = /(?=.*[A-Z])\w{4,10}/;
if (password.match(regEx)) {
    console.log('password is valid'); //password is valid
}
else {
    console.log('password is not valid ' + regEx);
}
//How to working on the date
var DateExpiry = new Date();
console.log(DateExpiry); //2023-09-04T15:56:25.921Z
var DateExpirys = new Date('2023-07-11');
console.log(DateExpirys); //2023-07-11T00:00:00.000Z
console.log(DateExpirys.getDate());
console.log(DateExpirys.getDay());
console.log(DateExpirys.getHours());
console.log(DateExpirys.getMinutes());
console.log(DateExpirys.toTimeString());
