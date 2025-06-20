// URL - Uniform Resourse Locator

// URL = protocol/DNS/Path?Query


import url from "url";
import {createServer} from "http";



const server = createServer((req, res) => {
    if(req.method === "GET"){
        let parseUrl = url.parse(req.url, true);
        switch (parseUrl.pathname) {
            case "/hello":
                console.log(parseUrl);
                res.end("Home Page");
                break;
            case "/about":
                let pq = parseUrl.query;
                res.end(`Hi ${pq.name} your toke is ${pq.token}`);
                break;
        
            default:
                break;
        }
    }
});




// Listen Here
server.listen(8080);