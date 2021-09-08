const spawn = require('child_process').spawn;
var exe = ('SoundVolumeView.exe');

const mute = (device) => {
    var app = spawn(exe, ['/Mute', device]);
}

const unmute = (device) => {
    var app = spawn(exe, ['/unMute', device]);
}

const volume = (device, vol) => {
    var app = spawn(exe, ['/SetVolume', device, vol]);
}

module.exports = { mute, unmute, volume }