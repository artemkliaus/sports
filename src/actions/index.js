export const addTask = (text, id) => ({
	type: 'ADD_TASK',
	id,
	text,
	done: false,
	hide: false
});

export const typeText = (text) => ({
	type: 'TYPE_TEXT',
	text
})
