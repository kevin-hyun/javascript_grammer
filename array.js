//javascript === dynamically typed language --> 여러 타입 담김 --> undesirable

//array 포인트--> index!   insert delete 유리

'use strict';

const arr1 = new Array();
const arr2 = [1,2];

//index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); // out of index == undefined
console.log(fruits[fruits.length-1])  // 총길이 -1 (0부터 시작이라)


//looping array
//a. for loop
for (let i =0 ; i< fruits.length; i++){
   console.log(fruits[i]) 
}
//b. for of 
for (let fruit of fruits){
    console.log(fruit)
}
//c. for each
fruits.forEach((fruit, index) => console.log(fruit,index));

//4. addition deletion copy 

//push : add an item to the end 
fruits.push('berry','peach')
console.log(fruits)
// pop : remove an item from the end 
fruits.pop ();
fruits.pop ();
console.log(fruits)

//unshift :  add an iotem to the benigging
fruits.unshift('lemon');
console.log(fruits)

//shift : remove an item from the benigging
fruits.shift('lemon');
console.log(fruits)

//****speed  : pop push >>>>> unshift shift**
//pop push ( 빈공간에 넣고 빼고 )
//unshift shift (기존 데이터 인덱스 옮기고 빈자리 만들고 거기에 넣는 과정 )


//splice : remove an item by index position
fruits.push('berry', 'lemon','pear')
console.log(fruits)
//fruits.splice(1)  // 지울 갯수 지정 안하면 지정 인덱스부터 끝까지 다 지움
//fruits.splice(1,1)  // 지정 인덱스 하나만 지움
fruits.splice(1,1,'watermelon','coconut')  // 해당 인덱스에 값을 지우고 뒤에 문자 삽입
console.log(fruits)

//concat : combine two arrays 
const fruits2 = ['add fruit', 'add fruit2']
const newFruits = fruits.concat(fruits2);
console.log(newFruits)

//5. searching
//find the index

console.log(fruits);
console.log(fruits.indexOf('apple'))  // 해당 인덱스 반환
console.log(fruits.includes('watermelon')) // 존재하면 true
console.log(fruits.indexOf('durian')) // 없으면 -1 
fruits.push('apple')
console.log(fruits.lastIndexOf('apple'))  // 두개 이상의 경우 마지막 인덱스 반환 

