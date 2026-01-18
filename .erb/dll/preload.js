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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsaURBQWlEO0FBQ2pELGdDQUFnQztBQUNoQyxtRUFBd0U7QUFLeEUsTUFBTSxhQUFhLEdBQUc7SUFDckIsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ25ELFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxzQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Q0FDbkQsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHO0lBQ25CLGFBQWEsRUFBRSxDQUFDLFFBQTZCLEVBQUUsRUFBRTtRQUNoRCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUF1QixFQUFFLElBQVMsRUFBRSxFQUFFO1lBQ3JFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUc7SUFDdEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztDQUNwRCxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRztJQUN4QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUVyRCxTQUFTLEVBQUUsQ0FBQyxRQUFvQixFQUFFLEVBQUU7UUFDbkMsc0JBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLFFBQW9CLEVBQUUsRUFBRTtRQUN0QyxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQ25DLFFBQVEsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFFLENBQUMsUUFBb0IsRUFBRSxFQUFFO1FBQ2hDLHNCQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxTQUFTLEVBQUUsQ0FBQyxRQUE2QixFQUFFLEVBQUU7UUFDNUMsc0JBQVcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBdUIsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQztBQUVGLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2hFLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3JELHdCQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzNELHdCQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvbWFpbi9wcmVsb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gRGlzYWJsZSBuby11bnVzZWQtdmFycywgYnJva2VuIGZvciBzcHJlYWQgYXJnc1xuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBvZmYgKi9cbmltcG9ydCB7IGNvbnRleHRCcmlkZ2UsIGlwY1JlbmRlcmVyLCBJcGNSZW5kZXJlckV2ZW50IH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgdHlwZSBDaGFubmVscyA9ICdpcGMtZXhhbXBsZSc7XG5cbmNvbnN0IHdpbmRvd0hhbmRsZXIgPSB7XG5cdGNsb3NlQXBwOiAoKSA9PiBpcGNSZW5kZXJlci5zZW5kKCdjbG9zZS1hcHAnKSxcblx0bWluaW1pemVBcHA6ICgpID0+IGlwY1JlbmRlcmVyLnNlbmQoJ21pbmltaXplLWFwcCcpLFxuXHRtYXhpbWl6ZUFwcDogKCkgPT4gaXBjUmVuZGVyZXIuc2VuZCgnbWF4aW1pemUtYXBwJyksXG59O1xuXG5jb25zdCBkYXRhSGFuZGxlciA9IHtcblx0b25VcGRhdGVTdGF0ZTogKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKSA9PiB7XG5cdFx0aXBjUmVuZGVyZXIub24oJ3VwZGF0ZS1zdGF0ZScsIChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgZGF0YTogYW55KSA9PiB7XG5cdFx0XHRjYWxsYmFjayhkYXRhKTtcblx0XHR9KTtcblx0fSxcbn07XG5cbmNvbnN0IG5ldHdvcmtIYW5kbGVyID0ge1xuXHRnZXRMb2NhbElQOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoJ2dldC1sb2NhbC1pcCcpLFxufTtcblxuY29uc3Qgd2Vic29ja2V0SGFuZGxlciA9IHtcblx0Z2V0SXNDb25uZWN0ZWQ6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZSgnZ2V0LWlzLWNvbm5lY3RlZCcpLFxuXHRnZXRTdHJlbmd0aDogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKCdnZXQtc3RyZW5ndGgnKSxcblxuXHRvbkNvbm5lY3Q6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdGlwY1JlbmRlcmVyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9LFxuXHRvbkRpc2Nvbm5lY3Q6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdGlwY1JlbmRlcmVyLm9uKCdkaXNjb25uZWN0ZWQnLCAoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9LFxuXHRvbkJpbmQ6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdGlwY1JlbmRlcmVyLm9uKCdib3VuZCcsICgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH0sXG5cdG9uTWVzc2FnZTogKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKSA9PiB7XG5cdFx0aXBjUmVuZGVyZXIub24oJ21lc3NhZ2UnLCAoZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIGRhdGE6IGFueSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soZGF0YSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCd3aW5kb3dIYW5kbGVyJywgd2luZG93SGFuZGxlcik7XG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdkYXRhJywgZGF0YUhhbmRsZXIpO1xuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnbmV0d29yaycsIG5ldHdvcmtIYW5kbGVyKTtcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ3dlYnNvY2tldCcsIHdlYnNvY2tldEhhbmRsZXIpO1xuXG5leHBvcnQgdHlwZSBXaW5kb3dIYW5kbGVyID0gdHlwZW9mIHdpbmRvd0hhbmRsZXI7XG5leHBvcnQgdHlwZSBEYXRhSGFuZGxlciA9IHR5cGVvZiBkYXRhSGFuZGxlcjtcbmV4cG9ydCB0eXBlIE5ldHdvcmtIYW5kbGVyID0gdHlwZW9mIG5ldHdvcmtIYW5kbGVyO1xuZXhwb3J0IHR5cGUgV2Vic29ja2V0SGFuZGxlciA9IHR5cGVvZiB3ZWJzb2NrZXRIYW5kbGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9