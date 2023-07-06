let student={     //object methods
    name:"Ann",
    age:20,
    introduce:function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`);

    }
}
student.introduce();
student.hobby=function(){
    console.log("I love swimming");
}
console.log({student});
student.hobby();
//delete a property inside an object
delete student.age
console.log({student});
student.introduce();