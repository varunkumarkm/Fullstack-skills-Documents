//object literal

var student = {
    firstName: 'varun',
    lastName: 'kumar',
    score: 85,
    city: 'mandya'
};
console.log(student);//{name: 'varun', score: 85, city: 'mandya'}
console.log(student.firstName);//varun
console.log(student.score);//85
console.log(student.city);//mandya
//for in loops - it is used to good work with against the objects
for(var item in student){  //in is a keyword followed by the objects
    console.log(item)//name score city
    console.log(student[item]);//varun 85 mandya
}

//Destracturing the objects also for ex:
var {firstName, lastName} = student;
console.log(firstName+" "+lastName)
