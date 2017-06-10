const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 1111;

app.use(bodyParser.urlencoded({'extended':true}));

app.set('view engine', ejs);
app.set('views', path.resolve('views'));

app.get('/', function(request, response){
  console.log("root route");
})

app.post('/process', function(request, response){
  console.log("Submitted the form!");
  console.log(request.body);
  request.body.array = [1,2,3,4];
  response.render('processed.esj', {name : request.body.name, location : request.body.location})
})



app.listen(port, function(){
  console.log(`Listening on ${port}`);
})
