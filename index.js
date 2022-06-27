var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
	
	const user ={
		message:'Welcome',
		success: true
	}
	res.json(user)
})

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})