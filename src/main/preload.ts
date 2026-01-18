// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { data } from 'react-router-dom';

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
	getStrength: () => ipcRenderer.invoke('get-strength'),

	onConnect: (callback: () => void) => {
		ipcRenderer.on('connected', () => {
			callback();
		});
	},
	onDisconnect: (callback: () => void) => {
		ipcRenderer.on('disconnected', () => {
			callback();
		});
	},
	onBind: (callback: () => void) => {
		ipcRenderer.on('bound', () => {
			callback();
		});
	},
	onMessage: (callback: (data: any) => void) => {
		ipcRenderer.on('message', (event: IpcRendererEvent, data: any) => {
			callback(data);
		});
	},
};

contextBridge.exposeInMainWorld('windowHandler', windowHandler);
contextBridge.exposeInMainWorld('data', dataHandler);
contextBridge.exposeInMainWorld('network', networkHandler);
contextBridge.exposeInMainWorld('websocket', websocketHandler);

export type WindowHandler = typeof windowHandler;
export type DataHandler = typeof dataHandler;
export type NetworkHandler = typeof networkHandler;
export type WebsocketHandler = typeof websocketHandler;
