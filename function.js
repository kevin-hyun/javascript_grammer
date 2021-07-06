//default  parameter 
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// Rest parameters 

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie')  // 배열을 받음 

// 다른 for loop

function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

printAll('dream','coding','ellie')
// for each 

function printAll(...args) {
    args.forEach((arg) => console.log(arg));
}

// scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.  == 썬팅

let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage)
    function printAnother() {
        console.log(message); // 부모변수 --> 자식변수 가능 
        let childMessage = 'hello';
    }
    //console.log(childMessage)  <- 자식변수 --> 부모 변수 불가능
}
//printMessage();
//console.log(message)

// Early return , early exit 

//bad
function upgradeUser(user) {
    if (user.point > 10 ) {
        //long upgrade logic...  if  else if else.... 
    }
}
//good 
function upgradeUser(user) {
    if (user.point <=10) {
        return;  // 원하는 값이 아닐 때 빨리 리턴하고 함수 종료  == django if ~~ :
    }
}

//function Expression

const print = function () {
    console.log('print');
};
print();
const printAgain = print; //변수에 다시 할당하면 출력 가능
printAgain();


//callback function using function expression

function randomQuiz( answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};
const printNo = function () {
    console.log('no!');
};
randomQuiz('wrong',printYes, printNo)
randomQuiz('love you',printYes, printNo)

// Arrow function 
const simplePrint = function () {
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');
const add  = (a,b) => a+b ;
const simpleMultify = (a,b) => {
    //do something more
    return a  * b ;  // 이렇게 블록을 표현하면 꼭 return 넣어줘야 함
};
//IIFE : Immediately Invoked Fucntion Expression
(function hello() {
    console.log('IIFE');
}() ); //함수 소환하듯이 정의한 부분 뒤에 변수 () 넣고 시작과 끝을 () 로 감싸주기 --> 정의하면 바로 실행    

