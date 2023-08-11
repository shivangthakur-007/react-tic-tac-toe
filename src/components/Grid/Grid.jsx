import { useState } from "react";
import Card from '../Card/Card'
import iswinner from "../../helpers/checkwinner";
import './Grid.css'

function Grid({NumberOfCards}){
    const [board, setboard]= useState(Array(NumberOfCards).fill(" "))
    const [turn, setturn]= useState(true)
    const [winner, setwinner]= useState(null)
function play(index){
   if(turn == true)
   { board[index]= 'O'}
   else{
    board[index]= 'X'
   }
   const win= iswinner(board, turn ? 'O' : 'X')
   if(win)
   {
    setwinner(win);
   }
   setboard([...board])
   setturn(!turn)
}
function reset(){
    setturn(true);
    setwinner(null);
    setboard(Array(NumberOfCards).fill(" "))
}
    return (
        <div className="Grid-Wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight"> Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset</button>
                    </>
                )
            }
        <h1 className="turn-highlight">Current turn: {(turn) ? 'O':'X' }</h1>
        <div className="Grid">
            {board.map((el, idx) => <Card gameEnd={ winner ? true : false} key={idx} onPlay={play} player={el} index={idx}/>)}</div>  
        </div>
    )
}

export default Grid;