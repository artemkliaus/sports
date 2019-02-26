export const addTodo = (text, id) => {
	console.log('ACTION', text, id);
	return {
		type: 'ADD_TODO',
		id,
		text,
		done: false,
		hide: false
	}
};

export const typeText = (text) => {
	console.log('TYPE_TEXT', text);
	return {
		type: 'TYPE_TEXT',
		text
	}
}
