// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
	closeApp: () => ipcRenderer.send('close-app'),
	minimizeApp: () => ipcRenderer.send('minimize-app'),
	maximizeApp: () => ipcRenderer.send('maximize-app'),
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
