const http = require('http');

let nextId = 1;
const items = [];

const assignId = item => Object.assign({}, item, { id: nextId++ });

http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.setHeader('Access-Control-Allow-Origin', '*');
        console.log(request.method, request.url);
        switch(request.method) {
            case 'GET':
                response.end(JSON.stringify(items));
                break;
            case 'POST':
                const item = assignId(JSON.parse(body));
                items.push(item);
                response.end(JSON.stringify(item));
                break;
            default:
                response.end(`'${request.method}' unsupported`);
                break;
        }

    });
}).listen(4000);