const config = require('./src/config');
const logger = require('./src/logger');

const http = require('http');
const eapp = require('./src/express');
const server = http.createServer(eapp);
const socketapi = require('./src/socket');
socketapi.io.attach(server);

server.listen(config.port, config.host);

const { app, BrowserWindow } = require('electron');

console.log = data => logger.debug(data);
console.warn = data => logger.warn(data);
console.error = data => logger.error(data);

const onError = (error) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'	? 'Pipe ' + port : 'Port ' + port;

	switch (error.code) {
		case 'EACCES':
			logger.error('http | ' + bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			logger.error('http | ' + bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

const onListening = () => {
	var addr = server.address();
	var bind = typeof addr === 'string'	? 'pipe ' + addr : 'port ' + addr.port;
	logger.debug('http | listening on ' + bind);
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
			nativeWindowOpen: true
        }
    });

    mainWindow.loadURL('http://localhost:' + config.port + '/');
	mainWindow.setMenuBarVisibility(false);
}

server.on('error', onError);
server.on('listening', onListening);

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})
