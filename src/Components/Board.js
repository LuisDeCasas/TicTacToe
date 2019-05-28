import React from 'react';
import Square from './Square';


function Board(props) {
const drawSquares = props.positions.map((value,index) => (
    <Square key={index} index={index} player={value} handle={props.squareHandle} />
))


  return (
        <div className="row board mx-auto " >
            {drawSquares}    
        </div> 
  );
}

export default Board;
