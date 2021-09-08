const config = require('./config');
const logger = require('./logger');
const sound = require('./sound');
const io = require('socket.io')();
const socketapi = {io: io};
const store = require('electron-json-config');

io.on('connection', (socket) => {
   logger.debug('sid: ' + socket.id)
   var sid = socket.id;

   socket.on('mute', () => {
      sound.mute(getmic());
      io.to(sid).emit('mute');
   });

   socket.on('unmute', () => {
      sound.unmute(getmic());
      io.to(sid).emit('unmute');
   });

   socket.on('setVol', (data) => {
      sound.volume(data.pid, data.val);
   })

});

const getmic = () => {
   if (store.get('microphone') == undefined){
       store.set('microphone', config.microphone);
   }
   store.get('microphone');
   console.log(store.get('microphone'));
}

module.exports = socketapi;