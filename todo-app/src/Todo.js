import { ListItemText, ListItem, List, ListItemAvatar, Modal, } from '@material-ui/core'
import "./Todo.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'
import db from './firebase';
import { useState } from 'react';

function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
     
    const updateTodo = () =>{
        //update the todo with the new input
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true })
        setOpen(false);
    }
    
    return (
        <>
        <Modal
            open={open}
            onClose = {e => setOpen(false) }
        >
            <div>
                <h1>
                   Edit here 👇..
                </h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <button onClick={updateTodo}> Change Task </button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItemAvatar>

            </ListItemAvatar>        
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary= "Dummy Deadline ⏰"/>
            </ListItem>
            <EditIcon onClick={e=> setOpen(true)}> Edit </EditIcon>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo
