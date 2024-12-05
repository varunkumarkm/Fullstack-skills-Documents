//Classes -
//* classes are the blue prints of objects
//* using classes we define rules and much more
//* class provides us implimentations of the methods, we can define constructors, accessor methods and much more
//* classes is not a compi;e time thing like interfaces, Classes exists even at runtime

class Passenger {
    firstName:string;
    lastName:string;
    frequentFlyerNumber:number;
    constructor(firstName:string, lastName:string,frequentFlyerNumber:number){
         this.firstName = firstName;
         this.lastName = lastName;
         this.frequentFlyerNumber = frequentFlyerNumber;
    }
    //Adding function properties
    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNumber)
    }
}
var passenger = new Passenger('varun', 'kumar', 123);
passenger.display();
var passenger2 = new Passenger('kiran', 'kumar', 456);
passenger2.display();
 //using for-in and instanceoff

for(let item in passenger){
    if(passenger[item] instanceof Function){
        continue;
    // if(item !== 'display'){ This is oneway 
    }else{
    console.log(item);
    console.log(passenger[item]);
    }
}

//Implimenting a interface

interface IFlight {
    flightNo:number;
    from:string;
    to:string;
    viewFlight():void;
}
class Flight implements IFlight{
    flightNo:number;
    from:string;
    to:string;
        constructor(flightNo:number,from:string,to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        }
            viewFlight(){
            console.log(this.flightNo,this.from,this.to);
        
    }
}
var flight = new Flight(1234, 'mumbai', 'thailand');
flight.viewFlight();