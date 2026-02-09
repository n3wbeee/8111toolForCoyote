import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useBlocker, BlockerFunction, Blocker } from 'react-router-dom';
import { useCallback, useState, useRef, useEffect } from 'react';

const { v4: uuidv4 } = require('uuid');

import save from '../../../assets/icons/save.svg';
import create from '../../../assets/icons/create.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import dragHandle from '../../../assets/icons/drag_handle.svg';
import edit from '../../../assets/icons/edit.svg';

import { Rule, TriggerType } from '../../interfaces.d';

const triggerOptions: TriggerType[] = ['onAirbrakeOn', 'onCriticalSpeed'];

function TriggerCard({
	item,
	dragHandleProps,
	onDelete,
	onTriggerChange,
	onNameChange,
}: {
	item: Rule;
	dragHandleProps: any;
	onDelete: (id: string) => void;
	onTriggerChange: (id: string, newTrigger: TriggerType) => void;
	onNameChange: (id: string, newName: string) => void;
}) {
	return (
		<div
			className="h-16 rounded-2xl m-4 shrink-0 shadow relative flex group items-center p-2 gap-2 bg-neutral-50 select-none
			transition-colors hover:bg-blue-200"
		>
			<img src={edit} className="w-6 h-6 cursor-pointer" />
			{/* 规则名称和触发条件编辑区 */}
			<div className="flex-1 h-full flex justify-center flex-col">
				<input
					type="text"
					value={item.name}
					onChange={(e) => onNameChange(item.id, e.target.value)}
					className="text-neutral-900 font-bold w-full bg-transparent"
				/>
				<select
					value={item.trigger}
					onChange={(e) =>
						onTriggerChange(item.id, e.target.value as TriggerType)
					}
					className="text-neutral-500 text-sm bg-transparent"
				>
					{triggerOptions.map((option) => (
						<option
							key={option}
							value={option}
							className="bg-neutral-50 transition-colors hover:bg-blue-200"
						>
							{option}
						</option>
					))}
				</select>
			</div>

			{/* 删除图标 */}
			<img
				src={deleteIcon}
				className="w-4 h-4 absolute	-right-1 -top-1 cursor-pointer invisible group-hover:visible"
				onClick={() => onDelete(item.id)}
			/>

			{/* 拖拽手柄 */}
			<div
				className="w-6 h-full flex items-center justify-end cursor-grab active:cursor-grabbing"
				{...dragHandleProps}
			>
				<img src={dragHandle} />
			</div>
		</div>
	);
}

function RuleContent() {
	const [items, setItems] = useState<Rule[]>([
		{
			name: '规则1',
			trigger: 'onCriticalSpeed',
			action: [],
			id: uuidv4(),
		},
		{
			name: '规则2',
			trigger: 'onCriticalSpeed',
			action: [],
			id: uuidv4(),
		},
	]);

	const initialItemsRef = useRef(JSON.stringify(items));
	const [isDirty, setIsDirty] = useState(false);

	// 检测是否有未保存的更改
	const checkForChanges = useCallback(() => {
		const currentItems = JSON.stringify(items);
		const hasChanges = currentItems !== initialItemsRef.current;
		setIsDirty(hasChanges);
		return hasChanges;
	}, [items]);

	// 每次items变化时检查
	useEffect(() => {
		checkForChanges();
	}, [items, checkForChanges]);

	// 路由拦截相关
	const shouldBlock = useCallback<BlockerFunction>(
		({ currentLocation, nextLocation }) => {
			// 如果有未保存的更改且要离开当前页面，则拦截
			return (
				isDirty && currentLocation.pathname !== nextLocation.pathname
			);
		},
		[isDirty],
	);
	const blocker: Blocker = useBlocker(shouldBlock);

	// 保存对话框相关
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const confirmSaveHandler = () => {
		// 在这里添加保存逻辑

		// 保存成功后更新初始状态
		initialItemsRef.current = JSON.stringify(items);
		setIsDirty(false);
		setIsDialogOpen(false);

		// 如果是从路由拦截触发的，继续导航
		if (blocker.state === 'blocked') {
			blocker.proceed?.();
		}
	};
	const cancelSaveHandler = () => {
		setIsDialogOpen(false);

		// 如果是从路由拦截触发的，取消导航
		if (blocker.state === 'blocked') {
			blocker.reset?.();
		}
	};
	const discardChangesHandler = () => {
		// 放弃更改，恢复到初始状态
		setItems(JSON.parse(initialItemsRef.current));
		setIsDirty(false);
		setIsDialogOpen(false);

		// 如果是从路由拦截触发的，继续导航
		if (blocker.state === 'blocked') {
			blocker.proceed?.();
		}
	};

	// item操作相关
	const addHandler = () => {
		const newItem: Rule = {
			name: '新建规则',
			trigger: 'onAirbrakeOn',
			action: [],
			id: uuidv4(),
		};
		setItems([...items, newItem]);
	};
	const triggerChangeHandler = (id: string, newTrigger: TriggerType) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, trigger: newTrigger };
			}
			return item;
		});
		setItems(newItems);
	};
	const nameChangeHandler = (id: string, newName: string) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, name: newName };
			}
			return item;
		});
		setItems(newItems);
	};
	const deleteHandler = (id: string) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};
	const dragHandler = (result: any) => {
		if (!result.destination) return;

		const newItems = Array.from(items);
		const [reorderedItem] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, reorderedItem);

		setItems(newItems);
	};

	return (
		<DragDropContext onDragEnd={dragHandler}>
			<div className="relative flex flex-1 h-full overflow-hidden select-none">
				{(isDialogOpen || blocker.state === 'blocked') && (
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-25">
						<div className="p-6 bg-white rounded-lg shadow-xl min-w-80">
							<h2 className="text-lg font-bold text-neutral-900 mb-2">
								{blocker.state === 'blocked'
									? '未保存的更改'
									: '确认保存'}
							</h2>
							<p className="text-neutral-700 mb-4">
								{blocker.state === 'blocked'
									? '您有未保存的更改，是否要保存？'
									: '您确定要保存当前的规则配置吗？'}
							</p>
							<div className="flex justify-end gap-2">
								<button
									onClick={cancelSaveHandler}
									className="px-4 py-2 text-white bg-gray-500 rounded transition-colors hover:bg-gray-600"
								>
									取消
								</button>
								{blocker.state === 'blocked' && (
									<button
										onClick={discardChangesHandler}
										className="px-4 py-2 text-white bg-red-500 rounded transition-colors hover:bg-red-600"
									>
										放弃更改
									</button>
								)}
								<button
									onClick={confirmSaveHandler}
									className="px-4 py-2 text-white bg-blue-500 rounded transition-colors hover:bg-blue-600"
								>
									保存
								</button>
							</div>
						</div>
					</div>
				)}

				{/* 规则页 */}
				<div className="w-64 h-full flex flex-col">
					{/* 工具栏 */}
					<div className="w-full h-8 flex items-center justify-end p-2 gap-2 bg-neutral-50">
						<img
							src={save}
							className="cursor-pointer"
							onClick={() => {
								setIsDialogOpen(true);
							}}
						/>
						<img
							src={create}
							className="cursor-pointer"
							onClick={addHandler}
						/>
					</div>
					<div className="bg-neutral-200 w-full h-px" />

					{/* 规则卡片展示区 byd怎么这么能套娃 */}
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
													onTriggerChange={
														triggerChangeHandler
													}
													onNameChange={
														nameChangeHandler
													}
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

export default RuleContent;
