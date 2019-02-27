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
		case 'CLOSE_TASK':
			let tasks = closeTask(state.tasks, action)
			return {...state, tasks};
			break;
		case 'REMOVE_TASK':
			let cuttedTasks = removeTask(state.tasks, action)
			return {...state, tasks: cuttedTasks};
			break;
		case 'HIDE_COMPLETED_TASKS':
			return {...state, hideCompleted: !state.hideCompleted};
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
};

const closeTask = (tasks, action) => {
	return tasks.map((el) => {
		if (el.id === action.id) el.done = !el.done;
		return el;
	})
};

const removeTask = (tasks, action) => {
	return tasks.filter((el) => {
		return el.id !== action.id;
	})
};

export default main;
