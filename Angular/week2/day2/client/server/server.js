require('dotenv').load();
const express = require('express');
const app = express();
const path - require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9999;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));
