// console.log(__dirname,__filename);
class Person{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
module.exports=Person;