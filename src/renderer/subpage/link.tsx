import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import lostConnect from '../../../assets/icons/lost_connect.svg';

import '../styleComplied.css';
import { url } from 'inspector';

function WarthunderPage({ stateData }: { stateData: any }) {
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
				<div className="flex flex-1 flex-col justify-center items-center">
					<img src={lostConnect} />
					<p className="text-neutral-400 text-lg">未连接到战争雷霆</p>
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

function CoyotePage({ localIP }: { localIP: string }) {
	const url =
		'https://www.dungeon-lab.com/app-download.php#DGLAB-SOCKET#ws://' +
		localIP +
		':1314';

	return (
		<>
			<QRCodeSVG value={url} bgColor="#F5F5F5" />
			<p className="text-neutral-400 text-lg select-none">
				扫码链接WebSocket
			</p>
		</>
	);
}

function Link() {
	const [stateData, setStateData] = useState();
	const [localIP, setLocalIP] = useState('');

	useEffect(() => {
		window.network.getLocalIP().then((localIP) => {
			console.log(localIP);
			setLocalIP(localIP);
		});
	}, []);

	useEffect(() => {
		window.data.onUpdateState((data) => {
			setStateData(data);
		});
	}, []);

	return (
		<div className="flex flex-1 h-full overflow-auto">
			<WarthunderPage stateData={stateData} />

			<div className="bg-neutral-200 w-px h-full" />

			<div className="flex flex-1 flex-col gap-4 justify-center items-center">
				<CoyotePage localIP={localIP} />
			</div>
		</div>
	);
}

export default Link;
