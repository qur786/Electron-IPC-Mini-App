const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ElectronAPI", {
  setTitle: (title) => ipcRenderer.send("setTitle", title),
  openDialog: () => ipcRenderer.invoke("dialog:open"),
})