import React from 'react'
import { connect } from 'react-redux'
import { deleteList } from '../Service/actions/action';


function List(props) {
    return <div>
        {
            props.todoList.map((data) => {
                return <div className="itemlist">
                    <li key={data.id}>{data.item}
                        <button onClick={() => props.dispatch(deleteList(data.id))}>Delete</button>
                    </li>
                </div>
            })
        }
    </div>

}
const mapStateToProps = (state) => ({
    todoList: state.todoList.data
})

export default connect(mapStateToProps)(List)