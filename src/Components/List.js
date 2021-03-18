import React from 'react'
import { connect } from 'react-redux'
import { deleteList } from '../Service/actions/action';


function List(props) {
    console.log("listprop", props);
    return <div>
        {
            props.todoList.map((data, index) => {
                return <li key={index}>{data.item}
                    <button onClick={() => props.dispatch(deleteList(data.id))}>Delete</button>
                </li>
            })
        }
    </div>


}
const mapStateToProps = (state) => ({
    todoList: state.todoList.data
})

export default connect(mapStateToProps)(List)