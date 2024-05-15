const { create } = require('domain');
const http = require('http')

const port = 3000;

const server = http.createServer((req,res)=>{
    res.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(port,()=>{
    console.log(`server running at port ${port}`)
})