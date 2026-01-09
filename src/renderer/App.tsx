import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import close from '../../assets/icons/close.svg';
import maximize from '../../assets/icons/maximize.svg';
import minimize from '../../assets/icons/minimize.svg';
import './App.css';

function Sidebar() {
	const [activeButton, setActiveButton] = useState('test');

	function Button({
		text,
		activeButton,
		onClick,
	}: {
		text: string;
		activeButton: string;
		onClick?: () => void;
	}) {
		return (
			<div className="buttonOutside">
				<div
					className="buttonInside"
					onClick={onClick}
					id={text}
					style={
						activeButton === text
							? {
									background: 'rgba(159, 212, 253, 1)',
									boxShadow:
										'0px 0px 4px 1px rgba(159, 212, 253, 0.5)',
								}
							: {}
					}
				>
					<p className="buttonText">{text}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="sidebar">
			<Button
				text="test"
				activeButton={activeButton}
				onClick={() => setActiveButton('test')}
			/>
			<Button
				text="test2"
				activeButton={activeButton}
				onClick={() => setActiveButton('test2')}
			/>
		</div>
	);
}

function Navbar() {
	return (
		<div className="navbar">
			<div
				className="messageIconBox"
				onClick={window.electron.minimizeApp}
			>
				<img src={minimize} />
			</div>
			<div
				className="messageIconBox"
				onClick={window.electron.maximizeApp}
			>
				<img src={maximize} />
			</div>
			<div className="closeIconBox" onClick={window.electron.closeApp}>
				<img src={close} />
			</div>
		</div>
	);
}

function MainPage() {
	return (
		<>
			<Sidebar />
			<div className="verticalLine" />
			<div className="mainPage">
				<Navbar />
				<div className="horizonalLine" />
			</div>
		</>
	);
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</Router>
	);
}
