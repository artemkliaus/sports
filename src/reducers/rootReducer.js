const initialState = {
    typedText: '',
    tasks: [],
    hideCompleted: false
}

const main = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state;
			break;
		default:
			return state;
	}
}

export default main;
