const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "./preload.js"),
        }
    });
    window.loadFile(path.join(__dirname, "./renderer/index.html"))
}

app.whenReady().then(() => {
    createWindow()
    ipcMain.on("setTitle", (event, title) => {
        const webContents = event.sender;
        const window = BrowserWindow.fromWebContents(webContents);
        window.setTitle(title);
    })
    ipcMain.handle("dialog:open", async () => {
        const { filePaths, canceled } = await dialog.showOpenDialog();
        let result = undefined
        if (canceled === false) {
            result = filePaths[0];
        }
        return result;
    })
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})