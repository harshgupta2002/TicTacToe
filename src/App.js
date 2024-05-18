import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
    return (
        <div className="App">
        <h1 style={{margin: "4rem", marginTop:"-2rem"}}>Tic-Tac-Toe</h1>
            <Game />
        </div>
    );
}

export default App;
