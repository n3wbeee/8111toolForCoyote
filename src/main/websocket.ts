import { WebSocketServer, WebSocket } from 'ws';

const { v4: uuidv4 } = require('uuid');

export interface Strength {
	channelAStrength: number;
	channelBStrength: number;
	channelALimit: number;
	channelBLimit: number;
}

export class WebSocketManager {
	private wss: WebSocketServer;
	// @ts-ignore
	private coyoteWs: WebSocket;

	private clientID: string = '';
	private targetID: string = '';

	private isConnected: boolean = false;
	private strengthData: Strength = {
		channelAStrength: 0,
		channelBStrength: 0,
		channelALimit: 0,
		channelBLimit: 0,
	};

	private onConnectFunc: Function = () => {};
	private onBindFunc: Function = () => {};
	private onDisconnectFunc: Function = () => {};
	private onMessageFunc: Function = () => {};

	constructor(port: number = 1314) {
		this.wss = new WebSocketServer({ port });

		this.wss.on('connection', (ws: WebSocket) => {
			const clientID = uuidv4();

			if (this.onConnectFunc) this.onConnectFunc();

			// 发送绑定消息
			ws.send(
				JSON.stringify({
					type: 'bind',
					clientId: clientID,
					message: 'targetId',
					targetId: '',
				}),
			);

			// 监听发信
			ws.on('message', (message: Buffer) => {
				let data;

				// 尝试解析 message
				try {
					data = JSON.parse(message.toString());
				} catch (e) {
					ws.send(
						JSON.stringify({
							type: 'msg',
							clientId: '',
							targetId: '',
							message: '403',
						}),
					);
					return;
				}

				// 若 message 内容无误...
				if (
					data.type &&
					data.clientId &&
					data.message &&
					data.targetId
				) {
					switch (data.type) {
						case 'bind':
							ws.send(
								JSON.stringify({
									type: 'bind',
									clientId: clientID,
									message: '200',
									targetId: data.clientId,
								}),
							);

							if (this.onBindFunc) this.onBindFunc();

							this.isConnected = true;
							this.coyoteWs = ws;
							this.clientID = data.clientId;
							this.targetID = data.targetId;

							break;

						case 'msg':
							if (data.message.includes('strength')) {
								var strengthData = data.message.split(/[-+]/);

								this.strengthData.channelAStrength =
									strengthData[1];
								this.strengthData.channelBStrength =
									strengthData[2];
								this.strengthData.channelALimit =
									strengthData[3];
								this.strengthData.channelBLimit =
									strengthData[4];
							}

							if (this.onMessageFunc) this.onMessageFunc();
							break;

						case 'break':
							ws.close();
							break;

						case 'command':
							if (this.isConnected) {
								console.log(this.targetID, this.clientID);
								this.coyoteWs.send(
									JSON.stringify({
										type: 'msg',
										clientId: this.clientID,
										message:
											'pulse-A:["0A0A0A0A00000000","0A0A0A0A0A0A0A0A","0A0A0A0A14141414","0A0A0A0A1E1E1E1E","0A0A0A0A28282828","0A0A0A0A32323232","0A0A0A0A3C3C3C3C","0A0A0A0A46464646","0A0A0A0A50505050","0A0A0A0A5A5A5A5A","0A0A0A0A64646464"]',
										targetId: this.targetID,
									}),
								);
							}
							break;

						default:
							break;
					}
				}
			});

			ws.on('close', () => {
				this.isConnected = false;
				if (this.onDisconnectFunc) this.onDisconnectFunc();
			});
		});
	}

	getIsConnected() {
		return this.isConnected;
	}

	getStrength() {
		return this.strengthData;
	}

	onConnect(onConnectFunc: Function) {
		this.onConnectFunc = onConnectFunc;
	}
	onBind(onBindFunc: Function) {
		this.onBindFunc = onBindFunc;
	}
	onDisconnect(onDisconnectFunc: Function) {
		this.onDisconnectFunc = onDisconnectFunc;
	}
	onMessage(onMessageFunc: Function) {
		this.onMessageFunc = onMessageFunc;
	}
}
