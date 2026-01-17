// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { on } from 'events';

export type Channels = 'ipc-example';

const windowHandler = {
	closeApp: () => ipcRenderer.send('close-app'),
	minimizeApp: () => ipcRenderer.send('minimize-app'),
	maximizeApp: () => ipcRenderer.send('maximize-app'),
};

const dataHandler = {
	onUpdateState: (callback: (data: any) => void) => {
		ipcRenderer.on('update-state', (event: IpcRendererEvent, data: any) => {
			callback(data);
		});
	},
};

const networkHandler = {
	getLocalIP: () => ipcRenderer.invoke('get-local-ip'),
};

const websocketHandler = {
	getIsConnected: () => ipcRenderer.invoke('get-is-connected'),
};

contextBridge.exposeInMainWorld('windowHandler', windowHandler);
contextBridge.exposeInMainWorld('data', dataHandler);
contextBridge.exposeInMainWorld('network', networkHandler);
contextBridge.exposeInMainWorld('websocket', websocketHandler);

export type WindowHandler = typeof windowHandler;
export type DataHandler = typeof dataHandler;
export type NetworkHandler = typeof networkHandler;
export type WebsocketHandler = typeof websocketHandler;
