const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9630;

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.resolve('views'));
app.set('views engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');

mongoose.connection.on('connected', function(){[
  console.log("We are connected to Mongoose!")
]});


const {Schema} = mongoose;
var authorSchema = new Schema({
  name: String,
  age: Number,
  isAlive: Boolean,
})

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  pages: Number,
  author: authorSchema
})

app.listen(port, function() {
  console.log("Listening on port", port);
});
