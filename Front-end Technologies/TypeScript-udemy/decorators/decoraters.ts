function classDecoratorFactory(price:number){
    console.log('class DecoratorFactory')
    return (constructor: Function) =>{
        console.log('Class Decorator');
        console.log(constructor);
        constructor.prototype.price = price;
    }
}

function classDecorator(constructor: Function){
    console.log('Class Decorator');
    console.log(constructor);
    constructor.prototype.price = 1000
}

//property Decorator
function propertyDecorator(target: any, propertyName:string){
    console.log('property Decorator');
    console.log(target.constructor);
    console.log(propertyName);
}
//method Decorator
function methodDecorator(target:any,
    methodName:string,
    discriptor:PropertyDescriptor){
        console.log('method Decorator')
        console.log(target);
        console.log(methodName);
        console.log(discriptor)
    }
 //param decorator

 function paramDecorator(target:any,
    methodName:string,
    paramIndex:number){
        console.log('param Decorator');
        console.log(target);
        console.log(methodName);
        console.log(paramIndex);
    }

@classDecoratorFactory(1234)
class Product {
    @propertyDecorator
    name:string = 'Iphone';
    constructor(id:number){

    }
    @methodDecorator
    print(@paramDecorator test:string){
       console.log(this.name);
    }
}
//(tsc --target ES6 --experimentalDecorators decoraters.ts) this is the command

let p = new Product(1);
console.log((<any>p).price)//1000