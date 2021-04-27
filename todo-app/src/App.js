import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';    
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState ([]);
  const [input, setInput] = useState ('');
  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code... fires  when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      // snapshot.docs.map(doc =>doc.data().todo);
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);
  // console.log('✔', input);
  const addTodo = (event) =>{
    // this will work whenever we click on the button
    event.preventDefault(); // will prevent from refreshing the page
   
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // console.log( '💋', "i m working!!!!!" );
    // setTodos ([...todos, input]);
    setInput(''); //clear up the input after clicking on the add to todo button
    // console.log(todos);
  } 

  return(
    <div className="App">
      <h1> Hello!! </h1>
      <form>
        <FormControl>
          <InputLabel> ✔ Write a Todo </InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type= "submit" onClick={addTodo} variant="contained" color="primary"> Add Todo </Button>
        {/* <button type="submit" onClick={addTodo} > Add Todo </button>*/}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo ={todo}/>
          //<li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
