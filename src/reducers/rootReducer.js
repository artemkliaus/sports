const initialState = {
    typedText: '',
    tasks: [],
    hideCompleted: false
}

const main = (state = initialState, action = {}) => {
	console.log(state, '|||',  action)
	switch (action.type) {
		case 'ADD_TASK':
			return addTodo(state, action);
			break;
		case 'TYPE_TEXT':
			return { ...state, typedText: action.text };
			break;
		default:
			return state;
	}
}

const addTodo = (state, action) => {
	const task = {
		id: action.id,
		text: action.text,
		hide: false,
		done: false
	};
	const tasks = state.tasks;
	tasks.push(task);
	return {
		...state,
		tasks,
		typedText: ''
	}
}

export default main;
