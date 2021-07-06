// class-틀 메모리x  //  - object - 실체 메모리 o 

'use strict';
//object - oriented programming
// class : template 
//object : instance of a class 
//javascript class 

// 1. class decalarations 
class Person{
    constructor(name,age){
        //fields
        this.name = name;
        this.age  = age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}
const kevin = new Person('kevin', 20);
console.log(kevin.name);
console.log(kevin.age);
kevin.speak();

//2. Getter & setter 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age; 
    }
    get age() {
        return this._age;
    }
    set age(value) {
        /*if (value < 0) {
            throw Error('age can not be negative')
        }*/
        this._age = value < 0 ? 0 : value; //value < 0 이라면 0 아니라면 value
    }
}

const user1 = new User('steve', 'Job', -1);  //나이 -1이 맞아?? 
console.log(user1.age)

// 3. field(public, private)
class Experiment {
    publicField = 2;   //public -- access from outside possible 

}
