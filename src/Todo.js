// Todo Component

import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { useState } from 'react';
import db from './firebase';
import './Todo.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {

  const classes = useStyles() ;
  const [open, setOpen] = useState(false) ;
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const updateTodo = () => {
    // Update Todo with new input text
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{ merge: true }); //prevents from overwriting
      
    setOpen(false);
  }

    return (
      <>
      
      <Modal
        open={open}
        onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Change Todo</h1>
          <input placeholder = {props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick ={updateTodo}>Update</Button>
        </div>
      </Modal>
      
        <List>
          <ListItem>
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText primary={props.todo.todo} secondary='todo...'/>
          </ListItem>
          <button onClick = {handleOpen}>Edit</button>
          <DeleteForeverIcon onClick ={event => db.collection('todos').doc(props.todo.id).delete()}>
          </DeleteForeverIcon>
        </List>
      </>
         
    )
}

export default Todo
// Button event for deleting doc object of a particular id
//'todo.todo' implies'object.data'
// modals for popups
// useStyles for styling modal popup box
