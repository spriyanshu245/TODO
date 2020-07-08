import React from 'react' ;
import './Todo.css' ;
import { List, ListItem ,ListItemText, ListItemAvatar } from '@material-ui/core' ;

function Todo(props) {
    return (
        <List className="Todo_List">
          <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
            <ListItemText primary={props.text} secondary='todo...'/>
          </ListItem>
        </List>
    )
}

export default Todo
