export const addTask = (text, id) => ({
	type: 'ADD_TASK',
	id,
	text,
	done: false
});

export const typeText = (text) => ({
	type: 'TYPE_TEXT',
	text
});

export const closeTask = (id) => ({
	type: 'CLOSE_TASK',
	id
});

export const removeTask = (id) => ({
	type: 'REMOVE_TASK',
	id
});

export const hideCompletedTasks = () => ({
	type: 'HIDE_COMPLETED_TASKS'
});
