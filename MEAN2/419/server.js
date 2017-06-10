const express = require('express');
const app = express()

const bodyParser = require('body-parser');

const path = require('path')
const port = process.env.PORT || 7411;

app.use(bodyParser.urlencoded)({extended:true});
app.set('views', path.join(__dirname + './static'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response){
  response.send("Here is a response!")

})

app.listen(port,function(){
  console.log(`Listening on ${port}`)
})
