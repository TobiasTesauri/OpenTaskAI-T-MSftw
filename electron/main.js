
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, '../build-assets/icon.ico')
  });
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);
