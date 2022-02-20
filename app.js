var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;
var path = require('path')

app.use("/assets", express.static(path.join(__dirname, 'app/web/assets')));

app.get('', function (req, res) {
    html = fs.readFileSync('app/web/views/index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:', port);
});
