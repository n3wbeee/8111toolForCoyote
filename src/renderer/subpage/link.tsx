import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import lostConnect from '../../../assets/icons/lost_connect.svg';

import '../styleComplied.css';
import { stat } from 'fs';

function WarthunderPage() {
	const [stateData, setStateData] = useState();

	useEffect(() => {
		window.data.onUpdateState((data) => {
			setStateData(data);
		});
	}, []);

	return (
		<div className="flex flex-1 flex-col">
			{stateData && (
				<>
					<div className="flex h-4 items-center m-2 gap-2">
						{stateData!['valid'] === true ? (
							<>
								<div className="w-2 h-2 rounded-full bg-green-500 shadow shadow-green-500/50" />
								<div className="text-neutral-400 text-xs select-none ">
									飞机状态有效
								</div>
							</>
						) : (
							<>
								<div className="w-2 h-2 rounded-full bg-red-500 shadow shadow-red-500/50" />
								<div className="text-neutral-400 text-xs select-none">
									飞机状态无效
								</div>
							</>
						)}
					</div>
					<div className="bg-neutral-200 w-full h-px" />
				</>
			)}

			{!stateData && (
				<div className="flex flex-1 flex-col justify-center items-center select-none">
					<img src={lostConnect} />
					<p className="text-neutral-400 text-lg select-none">
						未连接到战争雷霆
					</p>
				</div>
			)}

			{stateData && (
				<div className="flex-1 p-4 overflow-auto grid grid-cols-2 gap-4">
					{stateData!['valid'] === true && (
						<>
							{Object.entries(stateData!).map(([key, value]) => (
								<div
									key={key}
									className="bg-neutral-50 rounded-2xl p-4 flex flex-col justify-center items-center shadow"
								>
									<div className="text-neutral-500 text-sm select-none">
										{key}
									</div>
									<div className="text-neutral-900 text-xl font-bold select-none">
										{String(value)}
									</div>
								</div>
							))}
						</>
					)}
				</div>
			)}
		</div>
	);
}

function CoyotePage() {
	const [localIP, setLocalIP] = useState('');
	const [isCoyoteConnected, setIsCoyoteConnected] = useState(false);

	useEffect(() => {
		window.websocket.getIsConnected().then((status) => {
			setIsCoyoteConnected(status);
		});
	}, []);

	useEffect(() => {
		window.network.getLocalIP().then((localIP) => {
			setLocalIP(localIP);
		});
	}, []);

	const url =
		'https://www.dungeon-lab.com/app-download.php#DGLAB-SOCKET#ws://' +
		localIP +
		':1314';

	return (
		<>
			{isCoyoteConnected ? (
				<div className="text-neutral-400 text-lg select-none">
					已链接
				</div>
			) : (
				<>
					<QRCodeSVG value={url} bgColor="#F5F5F5" />
					<p className="text-neutral-400 text-lg select-none">
						扫码链接 WebSocket
					</p>
					<p className="text-neutral-400 text select-none">
						服务器地址：{localIP}
					</p>
				</>
			)}
		</>
	);
}

function Link() {
	return (
		<div className="flex flex-1 h-full overflow-auto">
			<WarthunderPage />

			<div className="bg-neutral-200 w-px h-full" />

			<div className="flex flex-1 flex-col gap-2 justify-center items-center">
				<CoyotePage />
			</div>
		</div>
	);
}

export default Link;
