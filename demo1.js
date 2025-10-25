// alert("||| Youkoso |||");
console.log("Hello");
const func1 = (temp1=25,temp2=5) => {   console.log(temp1+temp2);  }
func1(2,4);
//OOP
function Person (name,age,isGamer=true) {
    this.name = name;
    this.age = age
    this.isGamer = isGamer;
    this.info = () => {
        return "My name is "+name+ " , "+age+" and I am a "+isGamer+" gamer";
    };
}
let person1 = new Person('Zoro',20);   //New is a keyword here used to instantiate new objects
let person2 = new Person('Brook',25);
console.log(person1.info()); 

// We can also use classes where we have class and instead of function we use constructor keyword
