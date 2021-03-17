const initialState = {
    data: [],
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {}
            break;
        case "DELETE_TO_LIST":
            return {}
        default:
            return state;
    }
}

export default todoList;