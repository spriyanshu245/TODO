import React, {useState} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  //below fun called after clicking the button
  const addTodo = (event) => {
    event.preventDefault(); //Will stop refresh
    setTodos([...todos, input]);
    setInput(''); //clearing up the input after clicking todo button
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      
      <form>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">ADD TO LIST
        </Button>
      </form>
      </FormControl>
      
      <ul>
        {todos.map(todo => (
         <Todo text={todo}/>
         ))}
      </ul>
    </div>
  );
}

export default App;

// (rfce) React Functional component 
// (props) Differentiate one component from another