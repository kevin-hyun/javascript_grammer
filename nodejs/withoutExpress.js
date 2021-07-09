//without express  only http is used 
const http = require('http') //1  import outer module and assign to the variable
const { sendPosts} = require ('./sendPosts')

const server = http.createServer((req,res) => { //2 서버 생성 
    console.log('request received')  
    res.setHeader('Content-Type', 'application/json') // 3  헤더에 Content-Type : "application/json"
    
    if (url === '/') res.end(JSON.stringify({message : '/ endpoint'}))
    if (url === '/signup' && method === 'POST') handleSignUp(req,res)
    if (url === '/login' && method === 'POST') handleSignUp(req,res)
    if (url === '/products' && method === 'GET') handleSignUp(res)
    
    
    res.end(JSON.stringify({message: "this response answers to every request "})) // 4 여기 인자 값이 최종적으로 클라이언트가 받는 응답값 
});

server.listen(3000,() => {console.log('server is learning on PORT 3000')}) //5 포트번호 / 서버켜져있다는 로그 함수 
