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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsaURBQWlEO0FBQ2pELGdDQUFnQztBQUNoQyxtRUFBd0U7QUFJeEUsTUFBTSxhQUFhLEdBQUc7SUFDckIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ25ELFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxzQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Q0FDbkQsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHO0lBQ25CLGFBQWEsRUFBRSxDQUFDLFFBQTZCLEVBQUUsRUFBRTtRQUNoRCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUF1QixFQUFFLElBQVMsRUFBRSxFQUFFO1lBQ3JFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUc7SUFDdEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztDQUNwRCxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRztJQUN4QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUVyRCxTQUFTLEVBQUUsQ0FBQyxRQUFvQixFQUFFLEVBQUU7UUFDbkMsc0JBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLFFBQW9CLEVBQUUsRUFBRTtRQUN0QyxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQ25DLFFBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFFLENBQUMsUUFBb0IsRUFBRSxFQUFFO1FBQ2hDLHNCQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxTQUFTLEVBQUUsQ0FBQyxRQUE2QixFQUFFLEVBQUU7UUFDNUMsc0JBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBdUIsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQztBQUVGLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2hFLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3JELHdCQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzNELHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWlzLWEtdGh1bmRlci1oZWxwZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dpdGgtaXMtYS10aHVuZGVyLWhlbHBlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly93aXRoLWlzLWEtdGh1bmRlci1oZWxwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2l0aC1pcy1hLXRodW5kZXItaGVscGVyLy4vc3JjL21haW4vcHJlbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCAoKSA9PiB7XG5yZXR1cm4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIERpc2FibGUgbm8tdW51c2VkLXZhcnMsIGJyb2tlbiBmb3Igc3ByZWFkIGFyZ3Ncbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogb2ZmICovXG5pbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbHMgPSAnaXBjLWV4YW1wbGUnO1xuXG5jb25zdCB3aW5kb3dIYW5kbGVyID0ge1xuXHRjbG9zZUFwcDogKCkgPT4gaXBjUmVuZGVyZXIuc2VuZCgnY2xvc2UtYXBwJyksXG5cdG1pbmltaXplQXBwOiAoKSA9PiBpcGNSZW5kZXJlci5zZW5kKCdtaW5pbWl6ZS1hcHAnKSxcblx0bWF4aW1pemVBcHA6ICgpID0+IGlwY1JlbmRlcmVyLnNlbmQoJ21heGltaXplLWFwcCcpLFxufTtcblxuY29uc3QgZGF0YUhhbmRsZXIgPSB7XG5cdG9uVXBkYXRlU3RhdGU6IChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCkgPT4ge1xuXHRcdGlwY1JlbmRlcmVyLm9uKCd1cGRhdGUtc3RhdGUnLCAoZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIGRhdGE6IGFueSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soZGF0YSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG5jb25zdCBuZXR3b3JrSGFuZGxlciA9IHtcblx0Z2V0TG9jYWxJUDogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdnZXQtbG9jYWwtaXAnKSxcbn07XG5cbmNvbnN0IHdlYnNvY2tldEhhbmRsZXIgPSB7XG5cdGdldElzQ29ubmVjdGVkOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoJ2dldC1pcy1jb25uZWN0ZWQnKSxcblx0Z2V0U3RyZW5ndGg6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZSgnZ2V0LXN0cmVuZ3RoJyksXG5cblx0b25Db25uZWN0OiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcblx0XHRpcGNSZW5kZXJlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9KTtcblx0fSxcblx0b25EaXNjb25uZWN0OiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcblx0XHRpcGNSZW5kZXJlci5vbignZGlzY29ubmVjdGVkJywgKCkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9KTtcblx0fSxcblx0b25CaW5kOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcblx0XHRpcGNSZW5kZXJlci5vbignYm91bmQnLCAoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9LFxuXHRvbk1lc3NhZ2U6IChjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCkgPT4ge1xuXHRcdGlwY1JlbmRlcmVyLm9uKCdtZXNzYWdlJywgKGV2ZW50OiBJcGNSZW5kZXJlckV2ZW50LCBkYXRhOiBhbnkpID0+IHtcblx0XHRcdGNhbGxiYWNrKGRhdGEpO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnd2luZG93SGFuZGxlcicsIHdpbmRvd0hhbmRsZXIpO1xuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZGF0YScsIGRhdGFIYW5kbGVyKTtcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ25ldHdvcmsnLCBuZXR3b3JrSGFuZGxlcik7XG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCd3ZWJzb2NrZXQnLCB3ZWJzb2NrZXRIYW5kbGVyKTtcblxuZXhwb3J0IHR5cGUgV2luZG93SGFuZGxlciA9IHR5cGVvZiB3aW5kb3dIYW5kbGVyO1xuZXhwb3J0IHR5cGUgRGF0YUhhbmRsZXIgPSB0eXBlb2YgZGF0YUhhbmRsZXI7XG5leHBvcnQgdHlwZSBOZXR3b3JrSGFuZGxlciA9IHR5cGVvZiBuZXR3b3JrSGFuZGxlcjtcbmV4cG9ydCB0eXBlIFdlYnNvY2tldEhhbmRsZXIgPSB0eXBlb2Ygd2Vic29ja2V0SGFuZGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==