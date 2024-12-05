//Map type
let studentScore = new Map([['varun', 90], ['anil',92],['kiran',94]]);
console.log(studentScore.get('varun'));
studentScore.set('arun', 98);
console.log(studentScore.size);
studentScore.has('varun');
studentScore.delete('anil');
//studentScore.clear();//it deletes all entries
console.log(studentScore.keys());
for (let key of Array.from(studentScore.keys())){
    console.log(key);
    console.log(studentScore.get(key));
}
console.log(studentScore.values());
console.log(studentScore.entries());
//for version problem we use this command - tsc -lib "ES2016","DOM" moretypes.ts

//set type

let cources = new Set();
cources.add('Angular course');
cources.add('react');
cources.add('react');//set is not taking a duplicate entry
cources.add('java');
cources.add('typescript');
console.log(cources.size);
console.log(cources.values());
cources.forEach(function(cources){
    console.log(cources)
})// forEach is a stream we can iterate the every entry within this set
