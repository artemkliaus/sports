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
