//TypeScript is inbuilt support for module 

// function add(x:number, y:number):number {
//     return x+y;
// }
function sub(x:number, y:number):number {
    return x-y;
}
export {add, sub};
// instead of using this export keyword, we can also export induvidual functions ex:

// export function add(x:number, y:number):number {
//     return x+y;
// }
// export function sub(x:number, y:number):number {
//     return x-y;
// }

//How to use a default export function
export default function add(x:number, y:number):number {
        return x+y;
    }

//For the same functions type of using objects and interfaces as well

export class Calculator {
     add(x:number, y:number):number {
        return x+y;
     }
      sub(x:number, y:number):number {
        return x-y;
    }
}

//we can export default class also

// export default class Calculator {
//     add(x:number, y:number):number {
//        return x+y;
//     }
//      sub(x:number, y:number):number {
//        return x-y;
//    }
// }