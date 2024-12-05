//this keyword, why it is this keyword
function getFastLaptop(laptop1, laptop2){
    if(laptop1 > laptop2) 
        console.log(laptop1)
    else 
        console.log(laptop2)// This is greater
}
let laptop1 = {
    brand: 'ausus',
    ram: 20,
    cpu: 'i7',

    compare: function(other){
        if(this.cpu > other.cpu) 
        console.log(this)
    else 
        console.log(other)
    },
    greetCongig: function(){
        console.log(this.cpu);//i7
    }
}
laptop1.greetCongig();

let laptop2 = {
    brand: 'ausus',
    ram: 20,
    cpu: 'i9',

    greetCongig: function(){
    }
}
laptop2.greetCongig();

getFastLaptop(laptop1, laptop2)//laptop 2, This is the third party function

laptop1.compare(laptop2)

//When we use constructor
function Aliean(name, tech){ //whenever we creating a constructor we use first character is capital
 this.name = name;
 this.tech = tech
}
let aliean1 = new Aliean('varun', 'java')
console.log(aliean1);//Aliean { name: 'varun', tech: 'java' }

function Alieann(name, tech){ 
    this.name = name;
    this.tech = tech

    this.work = function(){
        console.log('solving bugs');
    }
   }
   let aliean2 = new Alieann('anil', 'java')
   let aliean3 = new Alieann('kiran', 'javaScript')//Alieann { name: 'kiran', tech: 'javaScript' }
   aliean2.tech = 'aws'
   console.log(aliean2);//Alieann { name: 'anil', tech: 'aws' }
   aliean2.work();//solving bugs

   //Recurtion - The function is calling itself that is called recurtion, 
   //Where do we use this, May be for the JSON data, and factorial
//    let nuum = 1;
//    function show(){
//     console.log("Hi", nuum)
//     nuum++
//     show();
//    }
//    show();//Hi
 
   //Faciorial - ex: 5! = 5*4*3*2*1 = 120
   //I can say 5! = 5*4!

   function fact(n) {
    if(n==0)
    return 1;
else    
    return n*fact(n-1);
   }
   let numbbr = 5;
   let rresult = fact(numbbr)
   console.log(rresult)//120