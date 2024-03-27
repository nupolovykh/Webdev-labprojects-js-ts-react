// const http = require("http");
// const server = http.createServer((req, res) => {
//     console.log("Начало обработки запроса");
//     if(req.method == 'GET'){
//         res.writeHead(200, { 
//             "Content-Type": "text/plain; charset=UTF-8" 
//         });
//     }
//     else if(req.method == 'POST'){
//         res.writeHead(300, { 
//             "Content-Type": "text/plain; charset=UTF-8" 
//         });
//     }
//     else res.writeHead(400, { 
//         "Content-Type": "text/plain; charset=UTF-8" 
//     });
//     res.end("Hello, world!");
// });


const http = require('http');
const fs = require('fs');

const path = 'note.txt';

const server = http.createServer((req, res) => {
	console.log("Start of processing the request");

	if (req.method === 'GET') {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.end(`Error reading the file: ${err}`);
			} else {
				res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
				res.end(data);
			}
		});
	}

	else if (req.method === 'POST') {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk;
		});
		req.on('end', () => {
			fs.appendFile(path, body, (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(`Error appending to the file: ${err}`);
				} else {
					res.end('Data has been appended to the file');
				}
			});
		});
	}
	
	else {
		res.statusCode = 404;
		res.end('Not Found');
	}
});

server.listen(3000, "127.0.0.1", () => {
	const { address, port } = server.address();
	console.log(`Server has started work ${address}:${port}`);
});