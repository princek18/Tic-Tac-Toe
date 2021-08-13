import './App.css';
import Main from './Components/Main';
import Player from './Components/Player';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(["1", "2", "3",
                                    "4", "5", "6",
                                    "7", "8", "9"]);
  const [win, setWin] = useState("");
  const [flag, setFlag] = useState(0);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const ob = {"X" : player1, "O":player2};


  const check = () =>{
    if(list[0]===list[1] && list[1]===list[2] && (list[0]==="X" || list[0]==="O"))
    {
        setWin(list[0])
    }
    else if(list[3]===list[4] && list[3]===list[5] && (list[3]==="X" || list[3]==="O"))
    {
      setWin(list[3])
    }
    else if(list[6]===list[7] && list[6]===list[8] && (list[6]==="X" || list[6]==="O"))
    {
      setWin(list[6])
    }
    else if(list[0]===list[3] && list[0]===list[6] && (list[0]==="X" || list[0]==="O"))
    {
      setWin(list[0])
    }
    else if(list[1]===list[4] && list[1]===list[7] && (list[1]==="X" || list[1]==="O"))
    {
      setWin(list[1])
    }
    else if(list[2]===list[5] && list[8]===list[5] && (list[2]==="X" || list[2]==="O"))
    {
      setWin(list[2])
    }
    else if(list[0]===list[4] && list[4]===list[8] && (list[0]==="X" || list[0]==="O"))
    {
      setWin(list[0])
    }
    else if(list[2]===list[4] && list[4]===list[6] && (list[2]==="X" || list[2]==="O"))
    {
      setWin(list[2])
    }
  }
  
  const put = (updated) =>{
    setList(updated)
    console.log(list)
    setFlag(flag+1);
    check();
  }

  const refresh = () =>{
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      {player1 && player2?<Main put={put} win={win} player1={player1} player2={player2}/>:<Player setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>}
      {win?<h1>{ob[win]} Wins.</h1>:(flag>=9?<h1>No Winner!</h1>:"")}
      {player1 && player2?<button onClick={refresh}>Restart</button>:""}
    </div>
  );
}

export default App;
