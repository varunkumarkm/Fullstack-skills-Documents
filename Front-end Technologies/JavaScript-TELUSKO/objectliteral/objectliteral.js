//Objects - its repersents the real entity
//Object literal
let aliean = {}
console.log(aliean)//{}   its key and value pair
console.log(typeof (aliean))//object

let input = 'name';
let alieann = {
    name: 'varun',
    tech: 'java',
    'work exp': 2//we have property name as two word we use space
}
console.log(alieann)//{ name: 'varun', tech: 'java' }
console.log(alieann.name);//varun
//or, Another way
console.log(alieann['name'])//varun     it depends upon the requirement we use . operator and []operator
console.log(alieann[input]);//varun

//Complex objects: it means having an object inside of that object ex
let alean = {
    name: 'varun',
    tech: 'java',
    laptop : {
        cpu: 'i5',
        ram: 4,
        brand: 'hp',
    }
}
console.log(alean);// This is the output 
// {
//     name: 'varun',
//     tech: 'java',
//     laptop: { cpu: 'i5', ram: 4, brand: 'hp' }
//   }
console.log(alean.tech)//java
console.log(alean.laptop)//{ cpu: 'i5', ram: 4, brand: 'hp' }y
console.log(alean.laptop.brand)//hp
console.log(alean.laptop.brand.length)//2
console.log(alean.laptop.brand?.length)//undefined it check available or not if not available gives undefined, 
                                       //if available gives a value for this purpose we use ? we handle the error using ?

delete alean.laptop// Javascript have a delete word
console.log(alean)// { name: 'varun', tech: 'java' }  now its not showing a laptop value, if anything we delete the property using delete  