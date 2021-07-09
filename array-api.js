//Q1. make a string out of array
const fruits = ['apple','banana','orange'];
const result = fruits.join("/");  // 원하는 구분자 사용가능 비우면 ,
console.log(result)

//Q2. make an array out of a string
const fruits2 = "apple, banana, peach"
const result2 = fruits2.split(",",2)  // delimeter/ how many element
console.log(result2)
//Q3. make this array look like this [5,4,3,2,1]

const array = [1,2,3,4,5]
const result3 = array.reverse();  // 배열자체를 변화
console.log(array)
console.log(result3)

//Q4. make new array without the first two elements
const array2 = [1,2,3,4,5]
//const result4 = array2.splice(0,2);
//console.log(array2, result4) // original array change! problem
const result4 = array2.slice(2,-1) // -1로 하면 제일 마지막 숫자 제외  마지막숫자까지하려면 array2.slice(2)/ array2.slice(2,5)
console.log(result4)

class Student {
    constructor(name,age,enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];


//Q5. find a student with score 90
const result5 = students.find((student) =>  student.score === 90);   //element of array is called one by one  90찾으면 stop
console.log(result5)

//Q6. make an array of enrolled students
const result6 = students.filter((student)=> student.enrolled === true);
console.log(result6)

//Q7. make new array containing only the students' scores  --map
{
    const result = students.map((student) => student.score*2);  // 각 요소에 대해서 다른 값으로 mapping하는 callback function 적용
    console.log(result)
}
//Q8. check if there iss a student with the score lower than 50
{
    console.clear()
    const result = students.some((student) => student.score < 50 )   // in array element whether callback 함수 satisfy just 'one'  time --> return true
    console.log(result)
    const result1 = students.every((student) => student.score < 50 )  // in array element whether callback 함수 satisfy 'all'  time --> return true
    console.log(result1)
    const result2 = !students.every((student) => student.score < 50 )  // in array element whether callback 함수 satisfy 'all' time --> return false   
    console.log(result2)   
}
//Q9. compute students' average score    -reduce 누적 
{
    //원리 
    const result = students.reduce((prev, curr) => {
        console.log(" -----");
        console.log(prev);
        console.log(curr);
        return curr ;
    }, 0);// 초기값 0으로 설정 
    // 평균 계산하기
    const result2 = students.reduce((prev, curr) => {
        console.log(" -----");
        console.log(prev);
        console.log(curr);
        return prev + curr.score ;
    }, 0);
    console.log(result2/students.length)
    
}
//Q10. make a string containing all the scores
//result should be : "45, 80, 90, 66, 88"
{
    const result = students.map((student) => student.score).filter((score) => score >= 50).join() ;
    console.log(result);
    console.log(typeof(result))
}
//Q10 bonus!. do Q10 sorted in ascending order
//result should be : "45, 66, 80, 88, 90"
{
    const result = students.map(student => student.score).sort((a,b)=>a-b); // if negative value  a<b 
    console.log(result)
}
