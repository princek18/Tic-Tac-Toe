import React from 'react'
import { useState } from 'react'
import './Main.css'

export default function Main({put, win, player1, player2}) {
    const ob = {"X":player1, "O":player2};
    const [state, setState] = useState("O");
    const [flag, setFlag] = useState(0);
    const [dummy, setDummy] = useState(["1", "2", "3",
                                        "4", "5", "6",
                                        "7", "8", "9"]);


    const Handle = (k)=>{
        if(state==="O")
        {
            let i = dummy.indexOf(k);
            dummy[i] = "X";
            setDummy(dummy);
            setState("X");
            setFlag(flag+1);
            put(dummy);   
        }
        else if(state==="X")
        {
            let i = dummy.indexOf(k);
            dummy[i] = "O";
            setDummy(dummy);
            setState("O");
            setFlag(flag+1);
            put(dummy);   
        }
    }
    return (
        <>
        <div className="out">
            <button value="1" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[0]}</button>
            <button value="2" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[1]}</button>
            <button value="3" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[2]}</button>
            <button value="4" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[3]}</button>
            <button value="5" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[4]}</button>
            <button value="6" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[5]}</button>
            <button value="7" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[6]}</button>
            <button value="8" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[7]}</button>
            <button value="9" onClick={(e)=>{Handle(e.target.value)}} className="column">{dummy[8]}</button>
        </div>
        {flag>=9 || win?<h1>Game Over</h1>:<h1>{(state==="O"? ob["X"] : ob["O"])}'s Turn</h1>}
        </>
    )
}
