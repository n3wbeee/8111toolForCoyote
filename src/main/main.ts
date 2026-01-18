/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, Tray, ipcMain, Menu } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { resolveHtmlPath } from './util';
import { WebSocketManager } from './websocket';

const os = require('os');

class AppUpdater {
	constructor() {
		log.transports.file.level = 'info';
		autoUpdater.logger = log;
		autoUpdater.checkForUpdatesAndNotify();
	}
}

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

if (process.env.NODE_ENV === 'production') {
	const sourceMapSupport = require('source-map-support');
	sourceMapSupport.install();
}

const isDebug =
	process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
	require('electron-debug').default();
}

const installExtensions = async () => {
	const installer = require('electron-devtools-installer');
	const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
	const extensions = ['REACT_DEVELOPER_TOOLS'];

	return installer
		.default(
			extensions.map((name) => installer[name]),
			forceDownload,
		)
		.catch(console.log);
};

const createWindow = async () => {
	if (isDebug) {
		await installExtensions();
	}

	const RESOURCES_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(__dirname, '../../assets');

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCES_PATH, ...paths);
	};

	mainWindow = new BrowserWindow({
		show: false,
		frame: false,
		width: 1024,
		height: 728,
		minWidth: 768,
		minHeight: 546,
		icon: getAssetPath('icon.png'),
		webPreferences: {
			preload: app.isPackaged
				? path.join(__dirname, 'preload.js')
				: path.join(__dirname, '../../.erb/dll/preload.js'),
		},
	});

	mainWindow.loadURL(resolveHtmlPath('index.html'));

	mainWindow.on('ready-to-show', () => {
		if (!mainWindow) {
			throw new Error('"mainWindow" is not defined');
		}
		if (process.env.START_MINIMIZED) {
			mainWindow.minimize();
		} else {
			mainWindow.show();

			const trayMenu = Menu.buildFromTemplate([
				{
					label: '显示主页',
					click: () => {
						if (mainWindow) {
							mainWindow.show();
						}
					},
				},
				{
					label: '退出',
					click: () => {
						app.quit();
					},
				},
			]);

			tray = new Tray(getAssetPath('icon.png'));
			tray.setToolTip('WITH');
			tray.setContextMenu(trayMenu);

			tray.on('double-click', () => {
				if (mainWindow) {
					mainWindow.show();
				}
			});
		}
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	// Remove this if your app does not use auto updates
	// eslint-disable-next-line
	new AppUpdater();
};

app.on('window-all-closed', async () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.whenReady()
	.then(() => {
		// 初始化 WebSocket 服务器
		let wsManager = new WebSocketManager(1314);
		wsManager.onBind(() => {
			mainWindow?.webContents.send('bound');
		});
		wsManager.onDisconnect(() => {
			mainWindow?.webContents.send('disconnected');
		});
		wsManager.onMessage(() => {
			mainWindow?.webContents.send('message', wsManager.getStrength());
		});
		ipcMain.handle('get-strength', () => {
			return wsManager.getStrength();
		});

		ipcMain.on('close-app', () => {
			if (mainWindow) {
				mainWindow.hide();
			}
		});
		ipcMain.on('minimize-app', () => {
			if (mainWindow) {
				mainWindow.minimize();
			}
		});
		ipcMain.on('maximize-app', () => {
			if (mainWindow) {
				if (mainWindow.isMaximized()) {
					mainWindow.unmaximize();
				} else {
					mainWindow.maximize();
				}
			}
		});

		ipcMain.handle('get-local-ip', () => {
			const networkInterfaces = os.networkInterfaces();
			for (const name of Object.keys(networkInterfaces)) {
				for (const network of networkInterfaces[name]) {
					if (
						network.family === 'IPv4' &&
						!network.internal &&
						network.address.includes('192')
					) {
						return network.address;
					}
				}
			}
		});

		ipcMain.handle('get-is-connected', () => {
			return wsManager.getIsConnected();
		});

		createWindow();

		// setInterval(() => {
		// 	fetch(
		// 		isDebug
		// 			? 'http://127.0.0.1:4523/m1/7705341-7448087-default/state'
		// 			: 'http://localhost:8111/state',
		// 	)
		// 		.then((response) => {
		// 			if (!response.ok) throw new Error('网络响应错误');
		// 			return response.json();
		// 		})
		// 		.then((data) => {
		// 			mainWindow?.webContents.send('update-state', data);
		// 			console.log(data);
		// 		})
		// 		.catch((error) => {
		// 			mainWindow?.webContents.send('update-state', null);
		// 			console.error(error);
		// 		});
		// }, 250);
	})
	.catch(console.log);
