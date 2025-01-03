//polymorphism - ploy means multi and morphic means shape or forms ex:
class Employee {
    public firstName:string;
    public lastName:string;
    public designation:string;

    public print():void {
        console.log('Employee Details');
    }
}
class Manager extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
class Lead extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
class Developer extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
let employees:Employee [] = new Array(new Manager('kiran', 'kumar', 'manager')
,new Lead('anil', 'gowda', 'lead team'), new Developer('varun', 'kumar','developer work'));
for(var employee of employees){
   employee.print();
}

//We are holding the objects for one parent Employee this is the polymorphism