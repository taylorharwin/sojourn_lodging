var http = require('http'),
 fs = require('fs'),
 index = fs.readFileSync(__dirname + '/index.html'),
 port = process.env.PORT || 1337;

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});


app.listen(3000);
console.log('listening on 3000');

