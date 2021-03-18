import React from 'react'
import { connect } from 'react-redux'
import { addList } from '../Service/actions/action';

function AddTodo(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.itemName.value;
        props.dispatch(addList(inputValue));
        e.target.itemName.value = "";
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="itemName"></input>
            <button type="submit" >Add</button>
        </form>
    )
}

export default connect()(AddTodo);
