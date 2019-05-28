import React from 'react';
import Board from './Board';
import EndGameModal from './EndGameModal';



const winnerPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
class TicTacToe extends React.Component {
    // winner : 0 is draw, 1 is Player1, 2 is Player2
    state={
        turn:0,
        board:[0,0,0,0,0,0,0,0,0],
        gameOver:false,
        winner:0,
    }
    checkWin = () => {
        let gameOver = this.state.gameOver
        //Only check for a winner after turn 5
        if(this.state.turn>4 && !gameOver){
            const currentPos= this.getPlayersPos(this.state.turn%2||2)
            for (let i = 0; i < 8 && !gameOver; i++) {
                let intersection = winnerPos[i].filter(x => currentPos.includes(x))
                if(intersection.length===3){
                    gameOver = true
                }
            }    
        }
        if(gameOver){
            this.setState(state => ({
                gameOver:true,
                winner: state.turn%2||2
            }))
        }else if(this.state.turn === 9){
            this.setState(state => ({
                gameOver:true,
                winner: 0,
            }))
        }      
    }

    getPlayersPos = (player) => {    
        let playersPos = []
        for(let i = 0 ;i<9;i++){
            if(this.state.board[i]===player){
                playersPos.push(i)
            }
        }
        return playersPos
    }

    handleClick = (index) => {
        this.setState(state=> {
            const turn = state.turn+1
            const player =turn%2||2
            return ({
                board:state.board.map((pos,i) => i===index?player:pos),
                turn:turn
            })
        }, ()=> this.checkWin())
       
    }

    resetGame = () => {
        this.setState({
            turn:0,
        board:[0,0,0,0,0,0,0,0,0],
        gameOver:false,
        winner:0,
        })
    }
    
    render() {
        console.log(this.state)
      return (
        <div>
            <EndGameModal 
                gameOver={this.state.gameOver} 
                resetGame={this.resetGame} 
                winner={this.state.winner}

            />
            <h1 className="text-center text-primary">Tic Tac Toe</h1>
            <Board 
                gameOver={this.state.gameOver} 
                positions={this.state.board} 
                squareHandle={this.handleClick}
            />
            {this.state.board && (<div> <h1>hello</h1>
                                    <ul>{this.state.board.map(
                                        (el,key) => (<li>{key}</li>))
                                        }
                                    </ul>
                                </div>)
            }
        </div>
      );
    }
  }

export default TicTacToe;
