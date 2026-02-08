import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
const { v4: uuidv4 } = require('uuid');
import { useState } from 'react';

import save from '../../../assets/icons/save.svg';
import create from '../../../assets/icons/create.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import dragHandle from '../../../assets/icons/drag_handle.svg';

import '../styleComplied.css';

function TriggerCard({
	item,
	dragHandleProps,
	onDelete,
}: {
	item: any;
	dragHandleProps: any;
	onDelete: (id: string) => void;
}) {
	return (
		<div
			className="h-16 rounded-2xl m-4 shrink-0 shadow flex items-center p-2 gap-2 bg-neutral-50 select-none transition-colors
					 hover:bg-blue-200 "
		>
			<img
				src={deleteIcon}
				className="w-8 h-8 cursor-pointer"
				onClick={() => onDelete(item.id)}
			/>
			<div className="flex-1 h-full flex justify-center flex-col">
				<p className="text-neutral-900 font-bold">{item.name}</p>
				<p className="text-neutral-500 text-sm">{item.trigger}</p>
			</div>
			<div
				className="w-6 h-full flex items-center justify-end cursor-grab active:cursor-grabbing"
				{...dragHandleProps}
			>
				<img src={dragHandle} />
			</div>
		</div>
	);
}

function Rule() {
	const [items, setItems] = useState([
		{
			name: '规则1',
			trigger: 'critical_ias',
			action: [],
			active: true,
			id: uuidv4(),
		},
		{
			name: '规则2',
			trigger: 'airbrake_on',
			action: [],
			active: true,
			id: uuidv4(),
		},
	]);

	const dragHandler = (result: any) => {
		if (!result.destination) return;

		const newItems = Array.from(items);
		const [reorderedItem] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, reorderedItem);

		setItems(newItems);
	};

	const addHandler = () => {
		const newItem = {
			name: '新建规则',
			trigger: 'new_trigger',
			action: [],
			active: true,
			id: uuidv4(),
		};
		setItems([...items, newItem]);
	};

	const deleteHandler = (id: string) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	return (
		<DragDropContext onDragEnd={dragHandler}>
			<div className="flex flex-1 h-full overflow-hidden select-none">
				{/* 规则页 */}
				<div className="w-64 h-full flex flex-col">
					{/* 工具栏 */}
					<div className="w-full h-8 flex items-center justify-end p-2 gap-2 bg-neutral-50">
						<img src={save} className="cursor-pointer" />
						<img
							src={create}
							className="cursor-pointer"
							onClick={addHandler}
						/>
					</div>
					<div className="bg-neutral-200 w-full h-px" />

					{/* 规则卡片展示区 */}
					<Droppable droppableId="rule-list">
						{(provided, snapshot) => (
							<div
								className="flex flex-col flex-1 overflow-auto"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{items.map((item, index) => (
									<Draggable
										key={item.id}
										draggableId={item.id}
										index={index}
									>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
											>
												<TriggerCard
													item={item}
													dragHandleProps={
														provided.dragHandleProps
													}
													onDelete={deleteHandler}
												/>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>

				<div className="bg-neutral-200 w-px h-full"></div>

				<div className="flex-1"></div>
			</div>
		</DragDropContext>
	);
}

export default Rule;
