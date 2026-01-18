(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
const electron_1 = __webpack_require__(/*! electron */ "electron");
const windowHandler = {
    closeApp: () => electron_1.ipcRenderer.send('close-app'),
    minimizeApp: () => electron_1.ipcRenderer.send('minimize-app'),
    maximizeApp: () => electron_1.ipcRenderer.send('maximize-app'),
};
const dataHandler = {
    onUpdateState: (callback) => {
        electron_1.ipcRenderer.on('update-state', (event, data) => {
            callback(data);
        });
    },
};
const networkHandler = {
    getLocalIP: () => electron_1.ipcRenderer.invoke('get-local-ip'),
};
const websocketHandler = {
    getIsConnected: () => electron_1.ipcRenderer.invoke('get-is-connected'),
    getStrength: () => electron_1.ipcRenderer.invoke('get-strength'),
    onConnect: (callback) => {
        electron_1.ipcRenderer.on('connected', () => {
            callback();
        });
    },
    onDisconnect: (callback) => {
        electron_1.ipcRenderer.on('disconnected', () => {
            callback();
        });
    },
    onBind: (callback) => {
        electron_1.ipcRenderer.on('bound', () => {
            callback();
        });
    },
    onMessage: (callback) => {
        electron_1.ipcRenderer.on('message', (event, data) => {
            callback(data);
        });
    },
};
electron_1.contextBridge.exposeInMainWorld('windowHandler', windowHandler);
electron_1.contextBridge.exposeInMainWorld('data', dataHandler);
electron_1.contextBridge.exposeInMainWorld('network', networkHandler);
electron_1.contextBridge.exposeInMainWorld('websocket', websocketHandler);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9tYWluL3ByZWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgKCkgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIElwY1JlbmRlcmVyRXZlbnQgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCB0eXBlIENoYW5uZWxzID0gJ2lwYy1leGFtcGxlJztcblxuY29uc3Qgd2luZG93SGFuZGxlciA9IHtcblx0Y2xvc2VBcHA6ICgpID0+IGlwY1JlbmRlcmVyLnNlbmQoJ2Nsb3NlLWFwcCcpLFxuXHRtaW5pbWl6ZUFwcDogKCkgPT4gaXBjUmVuZGVyZXIuc2VuZCgnbWluaW1pemUtYXBwJyksXG5cdG1heGltaXplQXBwOiAoKSA9PiBpcGNSZW5kZXJlci5zZW5kKCdtYXhpbWl6ZS1hcHAnKSxcbn07XG5cbmNvbnN0IGRhdGFIYW5kbGVyID0ge1xuXHRvblVwZGF0ZVN0YXRlOiAoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpID0+IHtcblx0XHRpcGNSZW5kZXJlci5vbigndXBkYXRlLXN0YXRlJywgKGV2ZW50OiBJcGNSZW5kZXJlckV2ZW50LCBkYXRhOiBhbnkpID0+IHtcblx0XHRcdGNhbGxiYWNrKGRhdGEpO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuY29uc3QgbmV0d29ya0hhbmRsZXIgPSB7XG5cdGdldExvY2FsSVA6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZSgnZ2V0LWxvY2FsLWlwJyksXG59O1xuXG5jb25zdCB3ZWJzb2NrZXRIYW5kbGVyID0ge1xuXHRnZXRJc0Nvbm5lY3RlZDogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdnZXQtaXMtY29ubmVjdGVkJyksXG5cdGdldFN0cmVuZ3RoOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoJ2dldC1zdHJlbmd0aCcpLFxuXG5cdG9uQ29ubmVjdDogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG5cdFx0aXBjUmVuZGVyZXIub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0sXG5cdG9uRGlzY29ubmVjdDogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG5cdFx0aXBjUmVuZGVyZXIub24oJ2Rpc2Nvbm5lY3RlZCcsICgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0sXG5cdG9uQmluZDogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG5cdFx0aXBjUmVuZGVyZXIub24oJ2JvdW5kJywgKCkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9KTtcblx0fSxcblx0b25NZXNzYWdlOiAoY2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWQpID0+IHtcblx0XHRpcGNSZW5kZXJlci5vbignbWVzc2FnZScsIChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgZGF0YTogYW55KSA9PiB7XG5cdFx0XHRjYWxsYmFjayhkYXRhKTtcblx0XHR9KTtcblx0fSxcbn07XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ3dpbmRvd0hhbmRsZXInLCB3aW5kb3dIYW5kbGVyKTtcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCduZXR3b3JrJywgbmV0d29ya0hhbmRsZXIpO1xuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnd2Vic29ja2V0Jywgd2Vic29ja2V0SGFuZGxlcik7XG5cbmV4cG9ydCB0eXBlIFdpbmRvd0hhbmRsZXIgPSB0eXBlb2Ygd2luZG93SGFuZGxlcjtcbmV4cG9ydCB0eXBlIERhdGFIYW5kbGVyID0gdHlwZW9mIGRhdGFIYW5kbGVyO1xuZXhwb3J0IHR5cGUgTmV0d29ya0hhbmRsZXIgPSB0eXBlb2YgbmV0d29ya0hhbmRsZXI7XG5leHBvcnQgdHlwZSBXZWJzb2NrZXRIYW5kbGVyID0gdHlwZW9mIHdlYnNvY2tldEhhbmRsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=