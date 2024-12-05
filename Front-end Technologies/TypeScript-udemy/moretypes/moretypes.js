//Map type
var studentScore = new Map([['varun', 90], ['anil', 92], ['kiran', 94]]);
console.log(studentScore.get('varun'));
studentScore.set('arun', 98);
console.log(studentScore.size);
studentScore.has('varun');
studentScore.delete('anil');
//for version problem we use this command - tsc -lib "ES2016","DOM" moretypes.ts
