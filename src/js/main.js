const {app, BrowserWindow} = require('electron')
const path = require('path')

let win = null

const createWindow = () => {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        icon: path.join(__dirname, '../../assets/icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'index.js'),
            devTools: false
        }
    });

    win.loadFile(path.join(__dirname, '../index.html'))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})