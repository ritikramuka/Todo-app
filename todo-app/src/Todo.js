// rafce -> shortcut for creating boiler plate of component
import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText, Button} from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    return (
        <List className="todo__list">
            {/* <div>
                <li>{props.text}</li>
            </div> */}
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary={"Dummy Dead Line ⏰"} />
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} style={{ fill: '#f50057', fontsize: 60}}/>
        </List>
    )
}

export default Todo