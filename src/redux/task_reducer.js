const ADD_TASK = 'ADD_TASK';
const PERFORM_TASK = 'PERFORM_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    tasks: [{id: 1, performed: false, task: 'hi!'}]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {
                    id: Math.max(...state.tasks.map(item => {
                        return item.id
                    })) + 1, performed: false, task: action.text
                }]
            };
            break;
        case PERFORM_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, performed: !item.performed}
                    }
                    return item;
                })
            };
            break;
        case UPDATE_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, task: action.text}
                    }
                    return item;
                })
            };
            break;
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)};
            break;
        default:
            return state;
    }
}

export const addTask = (text) => {
    return {type: 'ADD_TASK', text}
}

export const performTask = (id) => {
    return {type: 'PERFORM_TASK', id}
}

export const updateTask = (id, text) => {
    return {type: 'UPDATE_TASK', id, text}
}

export const deleteTask = (id) => {
    return {type: 'DELETE_TASK', id}
}
