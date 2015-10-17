var express = require('express');
var app = express();
var mainRouter = require('./endpoints');
var port = process.env.PORT || 3041;
var cors = require('cors');
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())
app.use(mainRouter);

app.listen(port,function(){
	console.log('corriendo en ',port);
})