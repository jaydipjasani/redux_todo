const initialState = {
    data: [],
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                data: [
                    ...state.data, {
                        item: action.item,
                        id: action.id,
                    },
                ],
            };
        case "DELETE_TO_LIST":
            const todos = state.data.filter((data) => {
                return data.id !== action.id
            })
            return {
                ...state,
                data: todos,
            }
        default:
            return state;
    }
}

export default todoList;