import React, { useEffect, useState} from "react";
import "./App.css";
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import db from './firebase.js';
import firebase from 'firebase';


function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // when the app loads, we need to listen to to the database and fetch new todos as they added/removed
    
    // is hook which runs once the app loads
    useEffect(() => {
        //this code.... fires when app.js loads
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot( snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data().todo))
        })
    }, [] /*this blank array means only runs once when app loads*/ ); 

    const addTodo = (event) => {
        //this will fire when we click the buttons
        event.preventDefault();   //will stop refreshing

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setTodos([...todos, input]);
        setInput('');  //clears up the input feild after enter
    }

    return ( 
        <div className="App">
            <h1>Hello Budding Programmers xD</h1>
            {/* encapsuling in form and adding type submit allows us to use enter to submit todo*/}
            <form>   
                <FormControl>
                    <InputLabel>Write a todo</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>

                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
                {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
            </form>

            <ul>
                {todos.map(todo => (
                    <Todo text={todo}/>   //breaked code into components
                ))}
            </ul>
        </div>
    );
};

export default App;