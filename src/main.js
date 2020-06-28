import { createServer } from 'http';

const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {

            response.writeHead(200);
            response.write('<h1> OKS </h1>');
            response.end();
            break;
        }
        default:{
            response.writeHead(404, 'Service not found. ');            
            response.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
server.listen(8000, '127.0.0.1', () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});