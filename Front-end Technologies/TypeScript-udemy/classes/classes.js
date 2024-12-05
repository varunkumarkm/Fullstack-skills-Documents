//Classes -
//* classes are the blue prints of objects
//* using classes we define rules and much more
//* class provides us implimentations of the methods, we can define constructors, accessor methods and much more
//* classes is not a compi;e time thing like interfaces, Classes exists even at runtime
var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    //Adding function properties
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNumber);
    };
    return Passenger;
}());
var passenger = new Passenger('varun', 'kumar', 123);
passenger.display();
var passenger2 = new Passenger('kiran', 'kumar', 456);
passenger2.display();
//using for-in and instanceoff
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
        // if(item !== 'display'){ This is oneway 
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.viewFlight = function () {
        console.log(this.flightNo, this.from, this.to);
    };
    return Flight;
}());
var flight = new Flight(1234, 'mumbai', 'thailand');
flight.viewFlight();
