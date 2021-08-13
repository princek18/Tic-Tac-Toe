import React from 'react'
import { useState } from 'react';
import "./Player.css"

export default function Player({setPlayer1, setPlayer2}) {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const start = (e)=>{
        e.preventDefault();
        setPlayer2(p2);
        setPlayer1(p1);
    }

    return (
        <div>
            <form onSubmit={start}>
            <input type="text" onChange={((e) =>{setP1(e.target.value)})} placeholder="Player 1:" />
            <input type="text" onChange={((e) =>{setP2(e.target.value)})} placeholder="Player 2:" />
            <button type="submit">Start</button>
            </form>
        </div>
    )
}
