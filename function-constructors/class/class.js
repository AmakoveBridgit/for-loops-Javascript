class Person{
    constructor(name,age,height){
        this.name=name
        this.age=age
        this.height=height


    }
    greet(){
        console.log('Hello');
    }
}
let person=new Person('Hannah',30,'5ft 8Inch')
console.log({person});
person.greet();

class child extends Person{
    constructor(name,age,height){ 
    super(name,age,height);
    this.brains=brains
   
}


}
let firstChild= new FirstChild ('James',2,'2ft','smart')
console.log({firstChild});


class Sister extends Person{
    constructor(name,age,height){ 
    super(name,age,height);
    this.brains=brains
    this.height='7ft'
    }
}
let sister=new Sister('Amanda',20,'5ft','avaerage')
console.log({sister});
