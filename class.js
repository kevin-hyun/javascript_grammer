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
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);  // 출력 가능 
console.log(experiment.pricateField); // # 붙이면 private이고 클래스 외부에서 출력 안됌

//4. static 

class Article {
    static publisher = 'dream coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);  // instance가 아니라 class 그자체에서 가져옴 /들어오는 object 상관없이 클래스에서 가져올때 
Article.printPublisher();

//5. inheritance

class Shape {
    constructor(width, height, color) {
        this.width  = width;
        this.height = height;
        this.color  = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of! `);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}  //상속해줌
class Triangle extends Shape {
    getArea(){
        return (this.width * this.height) /2   // overriding --> 자식 클래스에서 다시 함수를 정의 --> 덮어씌어짐
    }
    draw(){
        super.draw();  // 기존 부모 fucntion
        console.log('🔼');
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'yellow');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());

//6. instance of 
//check whether obj is instance of specific class  --> boolean

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);  // all object inherit Object

