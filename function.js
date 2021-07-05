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
}
printMessage();
console.log(message)