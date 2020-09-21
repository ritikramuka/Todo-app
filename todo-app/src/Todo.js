// rafce -> shortcut for creating boiler plate of component
import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Todo(props) {
    return (
        <List className="todo__list">
            {/* <div>
                <li>{props.text}</li>
            </div> */}
            <ListItem>
                <ListItemAvatar>
                    <ArrowForwardIosIcon style={{color : '#00e5ff' }} /> 
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary={"Dummy Dead Line ⏰"} />
            </ListItem>
        </List>
    )
}

export default Todo
