const ADD_TO_LIST = "ADD_TO_LIST"

export const addList = (item) => ({
    type: ADD_TO_LIST,
    item,
    id: Math.random().toString(36).substring(7),
})

const DELETE_TO_LIST = "DELETE_TO_LIST"

export const deleteList = (id) => ({
    type: DELETE_TO_LIST,
    id,
}) 