const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Начало обработки запроса");
    if(req.method == 'GET'){
        res.writeHead(200, { 
            "Content-Type": "text/plain; charset=UTF-8" 
        });
    }
    else if(req.method == 'POST'){
        res.writeHead(300, { 
            "Content-Type": "text/plain; charset=UTF-8" 
        });
    }
    else res.writeHead(400, { 
        "Content-Type": "text/plain; charset=UTF-8" 
    });
    res.end("Hello, world!");
});


server.listen(3000, "127.0.0.1", () => {
    const { address, port } = server.address();
    console.log(`Сервер запущен ${address}:${port}`);
});