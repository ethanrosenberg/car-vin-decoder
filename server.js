const express = require('express');
var cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();


// Then pass them to cors:
app.use(cors());


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port);
