import React from "react";
import "./App.css";

function App() {
    const [todos, todosSet] = (['Happy coding!!!!!', 'Got new Dual display setup xD ']);//38:52
    
    return ( 
        <div className="App">
            <h1>Hello World!!</h1>
            <input></input>
            <button>Add Todo</button>

            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default App;