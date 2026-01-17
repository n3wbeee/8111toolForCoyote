import { Net } from 'electron';
import {
	WindowHandler,
	DataHandler,
	NetworkHandler,
	WebsocketHandler,
} from '../main/preload';

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		windowHandler: WindowHandler;
		data: DataHandler;
		network: NetworkHandler;
		websocket: WebsocketHandler;
	}
}

export {};
