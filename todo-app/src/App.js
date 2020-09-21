import React, { useState } from "react";
import "./App.css";
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';

function App() {
    const [todos, setTodos] = useState(['Happy coding!!!!!', 'Got new Dual display setup xD ']);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        //this will fire when we click the buttons
        event.preventDefault();   //will stop refreshing
        setTodos([...todos, input]);
        setInput('');  //clears up the input feild after enter
    }

    return ( 
        <div className="App">
            <h1>Hello World!!</h1>
            {/* encapsuling in form and adding type submit allows us to use enter to submit todo*/}
            <form>   
                <FormControl>
                    <InputLabel>Write a todos</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>

                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
                {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
            </form>

            <ul>
                {todos.map(todo => (
                    <Todo text={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default App;