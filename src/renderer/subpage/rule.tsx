import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import save from '../../../assets/icons/save.svg';
import create from '../../../assets/icons/create.svg';

import '../styleComplied.css';

function TriggerCard() {
	return (
		<div className="h-24 rounded-2xl m-4 shrink-0 shadow bg-neutral-50"></div>
	);
}

function Rule() {
	return (
		<div className="flex flex-1 h-full overflow-auto">
			{/* 规则触发器 */}
			<div className="w-64 h-full overflow-auto flex flex-col">
				<div className="w-full h-8 flex items-center justify-end p-2 gap-2 bg-neutral-50">
					<img src={save} className="cursor-pointer" />
					<img src={create} className="cursor-pointer" />
				</div>
				<div className="bg-neutral-200 w-full h-px" />
			</div>

			<div className="bg-neutral-200 w-px h-full"></div>

			<div className="flex-1"></div>
		</div>
	);
}

export default Rule;
