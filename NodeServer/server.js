 // content (require fs)
 // generate instance of http server (require http)
// routing system
// port to listen

const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 5555;

const server = http.createServer();


function handleHTTPRequest(request,response) {
  let body =  [];
  console.log('Handling!');
  // response.setHeader('Content-Length', body.length);
  // response.setHeader('Set-Cookie', 'type=ninja');
  // response.setHeader('Content-Type', 'text/plain');
  // request.statusCode = 200;

//   response.writeHead(200, {'Content-Type': 'text/html',
//   'Content-Length': body.length
// });


request.on('error', function(error) {
  console.log(error);
})
.on('data', function(chunk) {
  body.push(chunk);
})
.on('end', function() {

  body = Buffer.concat(body).toString();
  console.log(body);
})

  if(request.url == '/') {
    fs.readFile('index.html', 'utf8', function(error, contents) {
      if(error) {
        throw error;
      }
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } else if(request.url == '/pizza') {
    try {
    const readFile = fs.readFileSync('./pizza.html');
    console.log(readFile);
    response.end(readFile);

  } catch (error) {
    response.end(error.toString());
  }

  } else {
    const readStream = fs.createReadStream('404.html');
    // console.log(readStream);
    readStream.pipe(response);
  }


  // response.end('The End.');
}


server.on('request', handleHTTPRequest);


server.listen(port, function() {
  console.log(`Listening on ${port}`);
})
