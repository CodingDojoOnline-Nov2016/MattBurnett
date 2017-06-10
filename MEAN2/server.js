/**
  generate http server
  read and write content with fs
  routing system
  port information for server
*/

const http = require('http');
const fs = require('fs');
const port = 8080;
const server = http.createServer();

function handleHTTPRequest(request, response) {
  /**
    route
    method
    parameters
  */

    let body = [];

    request.on('error', function(error) {
      console.log(`We got an error! ${ error.message }`);
    })
    .on('data', function(chunk) {
      body.push(chunk);
    })
    .on('end', function() {
      console.log(body);
    switch(request.url){
      case '/':
        fs.readFile('index.html', 'utf8', function(error, contents){
            if(error){
              throw error
            }
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(contents);
        response.end();
        })
        break;
      case '/pizza':
      if(request.method == 'GET'){
        const contents = fs.readFileSync('pizza.html');
        response.writeHead(200, {'Content-Type' : 'text/html'});
        console.log(contents);
        response.end(contents);
      } else {
        body = Buffer.concat(body).toString();
        console.log(body);

        response.end(JSON.stringify(body));

      }
      break;
      default:
          const readStream = fs.createReadStream('donut.html');
          readStream.pipe(response);

      }

    });
  }

server.on('request', handleHTTPRequest);
server.listen(port, () => console.log(`Listening on ${port}`));
