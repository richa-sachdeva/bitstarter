var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  fs.writeFile('index.html', function(err){ 
	if(err) throw err;
	console.log('It\'s saved!');
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
