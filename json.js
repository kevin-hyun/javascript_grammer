//1. Object to Json

let json = JSON.stringify(true);
console.log(json);
console.log(typeof(json));

json = JSON.stringify(['apple','banana']);
console.log(json);
console.log(typeof(json));

const rabbit = {
    name: 'tori',
    color: 'white',
    size : null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`);  // function doesn't include 
    }
}

json =JSON.stringify(rabbit);
console.log(json);

json =JSON.stringify(rabbit,['name','color']);  // change specific property to Json
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; // 키가 name이면 ellie로 바꾼다 아니라면 그 value 그대로 유지 
});
console.log(json);

//2. Json to Object
//parse json

const obj = JSON.parse(json);
console.log(obj);
//obj.jump();  // obj -->  json (함수 사라짐 ) --> obj원래대로 돌아와도 함수는 사라진 상태

console.log(rabbit.birthDate.getDate()); // 가능  Date() object class 사용 --> 내장 .getDate()사용가능
//console.log(obj.birthDate.getDate())//  --> date () --> str화 --> 내장 함수 없음

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;   // 이 과정을 통해서 다시 함수로 str-->  살릴 수 있음 (reviver) 
});
console.log(obj1.birthDate.getDate())  