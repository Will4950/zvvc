const config = require('./config');
const logger = require('./logger');
const sound = require('./sound');
const io = require('socket.io')();
const socketapi = {io: io};

io.on('connection', (socket) => {
   logger.debug('sid: ' + socket.id)
   var sid = socket.id;

   socket.on('mute', () => {
      sound.mute(config.microphone);
      io.to(sid).emit('mute');
   });

   socket.on('unmute', () => {
      sound.unmute(config.microphone);
      io.to(sid).emit('unmute');
   });

   socket.on('setVol', (data) => {
      sound.volume(data.pid, data.val);
   })

});

module.exports = socketapi;