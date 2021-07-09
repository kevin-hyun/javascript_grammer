//promise is a jajvascript object for asnycrinumus operation

//state  && producer vs consumer 
//state :  pending -> fulfilled or rejected 
// Producer vs Consumer 

//1. producer
// when new promise is created the executor runs automa=tically
const promise = new Promise ((resolve,reject ) => {
    //doing some heavy work(network read files)  통신에서 동기적은 진행 부적절 
    console.log('doing something');  // promise가 만들어지는 순간 통신이 이루어짐 // 사용자가 버튼 눌렀을때만 통신해야 하는 경우는 불필요한 통신 발생 
    setTimeout(() => {
        resolve('ellie');
    },2000) 
});
//2. consumers ;  then catch finally 
promise.then ( (value ) => {
    console.log(value)
})
// producer가 정상적으로 수행이 되었을 떄 resolve 에 있는 값이 value가 됌 

//
const promise2 = new Promise ((resolve,reject ) => {
    //doing some heavy work(network read files)  통신에서 동기적은 진행 부적절 
    console.log('doing something');  // promise가 만들어지는 순간 통신이 이루어짐 // 사용자가 버튼 눌렀을때만 통신해야 하는 경우는 불필요한 통신 발생 
    setTimeout(() => {
        reject(new Error('no network'));  //에러 이유 명시 
    },2000) 
});

promise2//
    .then(value => {
        console.log(value);
    })                                      //chaining
    .catch(error => {
        console.log(error);
    })  //catch -> error handling
    .finally(() => {
        console.log('finally');   // 성공 실패 상관없이 실행됌
    });


// 3. promise chaining
const fetchNumber = new Promise((resolve, reject ) => {
    setTimeout(() => resolve(1),1000);
});
fetchNumber
    .then(num => num *2)
    .then(num => num *3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1 ) , 1000);
        });
    })
    .then(num => console.log(num));

//4. error handling
const getHen = () => 
    new Promise((resolve, rejcet ) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg  = hen => 
new Promise((resolve, rejcet ) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook  = egg => 
new Promise((resolve, rejcet ) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
    .then(hen => getEgg(hen))
    // then(getEgg)  이렇게도 표현가능 
    .then(egg => cook(egg))
    //then()
    .then(meal => console.log(meal))
    //then(console.log)
    .catch(error => {
        return '🥐';
    });
