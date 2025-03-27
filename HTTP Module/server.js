const http = require("http");


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello i am Home Page</h1>");
        res.end();
    }
    if(req.url === "/contact"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello i am Contact Page</h1>");
        res.end();
    }
});



let PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server is runing on PORT ", PORT);
});