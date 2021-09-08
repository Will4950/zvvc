const socket = io();

const mute = () => {
    socket.emit('mute');
}

const unmute = () => {
    socket.emit('unmute');
}

socket.on('mute', () => {
    $('#mute').attr('onclick', 'unmute();');
    $('#mute').addClass('btn-danger');
    $('#mute').removeClass('btn-success');
    $('#mute').html('Unmute');
});

socket.on('unmute', () => {
    $('#mute').attr('onclick', 'mute();');
    $('#mute').addClass('btn-success');
    $('#mute').removeClass('btn-danger');
    $('#mute').html('Mute');
});

const setVol = (range) => {
    socket.emit('setVol', {pid: range.getAttribute('id'), val: range.value});
}
