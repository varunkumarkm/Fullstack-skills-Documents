//Inheritance - it is a process of defining a new object with the help of an existing object, In typescript
//we use the keyword extends

class BMW {
    make:string;
    model:string;
    year:number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year
    }
    commonEngineFunction(){
        console.log('common func');
    }
    start(){
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
}
class ThreeSeries extends BMW {
    cruiseControlEnabled:boolean;

    cruiseControl(){
        this.cruiseControlEnabled = true;
        console.log('cruising');
    }

    constructor(make:string, model:string, year:number,curiseControlEnabled:boolean){
        super(make, model, year);
        this.cruiseControlEnabled = curiseControlEnabled;
    }
    start(){
        console.log('Button start');
    }
    stop() {
        console.log('Button stop');
    }
}
class FiveSeries extends BMW {
    parkingAssistEnabled:boolean;

    parkingAssist(){
    this.parkingAssistEnabled = true;
    console.log('parked');
    }

    constructor(make:string, model:string, year:number,parkingAssistEnabled:boolean){
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
    start(){
        console.log('Remote start');
    }
    stop() {
        console.log('Remote stop');
    }
}
var threeSeries = new ThreeSeries("BMW", '328i', 2019, false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunction();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();

var fiveSeries = new FiveSeries("BMW", '328i', 2019, false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunction();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();
