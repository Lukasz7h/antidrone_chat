const { app, BrowserWindow } = require('electron')
const url = require("url");

const path = require("path");
const { globalShortcut } = require("electron")

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `dist/chat/index.html`),
            slashes: true
        })
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    globalShortcut.register('f5', function() {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `dist/chat/index.html`),
                slashes: true
            })
        );
	})

	globalShortcut.register('CommandOrControl+R', function() {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `dist/chat/index.html`),
                slashes: true
            })
        );
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})