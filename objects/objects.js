//creating an object
let person={
    name:"Susan",
    age:25,
    height:"5ft3Inch",
    friend:{
        name:"Amanda",  //nested element
        age:20,
    }

}
let student=new Object();


student.name="Mary"  //add a property
console.log(person.age); //log a value
console.log(person["name"]);
console.log(person.friend.name); //getting the value of the nested object
console.log({student});

person.age=27
person.school="AkiraChix";
console.log({person});

let person2=Object.assign(person); //cloning an object
console.log({person2});

let keys=Object.keys(person) //finding all the keys 
console.log({keys});

let values=Object.values(person)
console.log({values})


