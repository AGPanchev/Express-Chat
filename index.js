var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', now + ' - '+ msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
