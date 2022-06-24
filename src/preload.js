const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ElectronAPI", {
  setTitle: (title) => ipcRenderer.send("setTitle", title),
})