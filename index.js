var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var server = require('http').Server(app);
var template = require('./template.js');
var upload = require('./upload.js');
app.use(fileUpload());


 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/template', template.get);
app.post('/', upload.post);
mongoose.connect('mongodb://0.0.0.0:27017/csvimport');


server.listen(8080, () => {
  console.log('Server started on port 8080')
})

