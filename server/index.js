const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const env = process.env.NODE_ENV || 'dev';

// controllers
const demoMode = require('./controllers/demoMode');
const randomMode = require('./controllers/randomMode');
const odb2 = require('./controllers/odb2');

// gpio
// const board = require('./controllers/gpio');

// board.on('ready', () => {
//     console.log('strobe')
//     // Create an Led on pin 7 (GPIO4) on P1 and strobe it on/off
//     // Optionally set the speed; defaults to 100ms
//     (new five.Led('P1-7')).strobe(); 
//   });

// websocket
io.on('connection', function (socket) {
  console.log('a user connected');
  
  demoMode(socket);
  // randomMode(socket);

  socket.on('get', (res) => {
    console.log('msg:', res);
  });

});

http.listen(1313, function () {
  console.log('listening on *:1313', env);
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.179.20:8080');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});