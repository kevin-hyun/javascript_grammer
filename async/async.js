//async &&& await
//clear style of using promise

// 1. async
function fetchUser() {
    //do network request in 10 secs ... 
    return new Promise((resolve, reject) => {
        resolve('ellie')
    })
}
const user = fetchUser();
console.log(user);

// promise/ resolve/reject 없으면 계속 pending 상태! 
// resolve 되면 fullfiled가 됌  

async function fetchUser() {
    //do network request in 10 secs ... 
    return 'ellie';
}   // 
const user1 = fetchUser();
console.log(user1);

// async function앞에 쓰면 promise없이도 자동으로 비동기 처리 

//2. await

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);