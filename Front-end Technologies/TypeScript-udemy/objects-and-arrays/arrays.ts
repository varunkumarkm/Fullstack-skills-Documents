var cources:any = ['java', 'spring', 'hibernate', 10, true];
cources.push('spring security');
cources.push(10);
for (var i=0; i<cources.length; i++){
       console.log(cources[i]);
}
//De-stracturning - This we call it as de-stracturning of array 
var [a,b,c] = cources;
console.log(a,b,c);//java spring hibernate

//Array Function
//->array methods

var levels:number[] = [20,78,90,34,75,21]
console.log(levels.toString());//20,78,90,34,75,21
console.log(levels.join(" "))//20 78 90 34 75 21
console.log(levels.slice(3));//(3) [34, 75, 21]
levels.splice(2,3,88, 98)//it does delete and add the element at the same time
console.log(levels.toString);