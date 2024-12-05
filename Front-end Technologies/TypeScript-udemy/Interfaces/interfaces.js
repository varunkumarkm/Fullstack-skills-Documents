//Interface - we can use the interfaces as objects, arrays and functions as well
//interface is just a contract, which of some set of rules over there
//create and object
var product1 = {
    id: 123,
    name: 'lenova',
    decription: 'its a good laptop',
    price: 30000,
    display: function () {
        console.log(this.id + " " + this.name + " " + this.decription + " " + this.price);
    }
};
var product2 = {
    id: 123,
    name: 'lenova',
    decription: 'its a good laptop' //I have not mentioned price here, But not showing an error 
}; //this ia a optional properties
var add;
var sub;
add = function (x, y) {
    return x + y;
};
sub = function (a, b) {
    return a - b;
};
var studentNames = ['kiran', 'mahesh', 'ramesh'];
var studentScores = {};
studentScores['kiran'] = 95;
studentScores['mahesh'] = 97;
studentScores['ramesh'] = 94;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]); //95 97 94
}
