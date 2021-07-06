//primitive

// 1.literl properties
const obj1 = {}  //object literal 
const obj2  = new Object(); //object constructor

const ellie = {name : "ellie", age: 4};  // key str 지정 x 

ellie.hasjob  = true;
console.log(ellie.hasjob);  // 정의 되고 나서 element 추가 가능  < - runtime 언어라서 동작할 때 타입 정보 정해짐

delete ellie.hasjob;
console.log(ellie.hasjob);  //정의되고 나서 삭제도 가능 

//2 computed properties  -=- key always be string  [안으로] 
ellie['hasjob']  = true;
console.log(ellie.hasjob);  // 정의 되고 나서 element 추가 가능  < - runtime 언어라서 동작할 때 타입 정보 정해짐

console.log(ellie.name);   // 일반적인 코딩 
console.log(ellie['name']); // runtime에서 결정될 때 // 실시간으로 원하는 값을 가져올 때 

function printValue(obj,key) {
    //console.log(obj.key); // key라는 property가 obj 에 있니?? --> no! --> undefined
    console.log(obj[key]) // run(동작시)알 수 있음--> 출력! 
}
printValue(ellie, 'name')

//3, property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'ssteve', age : 4};
const person3 = {name : 'boss', age : 6};
const person4 = Person('ellie',30);  //string
console.log(person4)
/* function makePerson(name,age) {
    name : name,
    age : age, 
}
*/ 
4.
function Person(name,age) {  //  constructor function / like a class startwith uppercase
    this.name = name;
    this.age= age;
    //return 생략
};


// 5. in operator  
// check key in obj 
console.log('name' in ellie);

//6. for in vs for of 
// for key in obj

console.clear()
for (key in ellie) {
    console.log(key)
}

// for value of iterable (array etc)
const array = [1,2,3,4];
for (value of array ) {
    console.log(value)
}

//7. cloning

const user = {name : 'ellie', age : '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); //user2 change --> user  change

//old way 
const user3 = {};
for (key in user){
    user3[key] =user[key];
}
console.log(user3);

//new way
const user4 = {}
Object.assign(user4, user);  // target , things to copy
console.log(user4)

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color: 'blue', size : 'big'};
const mixed = Object.assign({},fruit2, fruit1);
console.log(mixed.color); // 뒤에 자료로 덮어씌어짐
console.log(mixed.size); // 뒤에 해당하는 게 없다면 그대로 남아있다.\   





