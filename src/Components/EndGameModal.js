import React from 'react';
import { Modal,ModalHeader,ModalBody,ModalFooter,Button } from 'reactstrap'


function EndGameModal(props) {
    const message = (winner) => {
        if(winner){
            return `Player ${props.winner} wins!`
        }else{
            return "Draw!"
        }
    }
  return (
<div>
    <Modal isOpen={props.gameOver} toggle={props.resetGame} >
    <ModalHeader toggle={props.resetGame}>{props.winner?"Congrats!":"OOPS!"}</ModalHeader>
    <ModalBody className="text-center">
      <h2>{message(props.winner)}</h2>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.resetGame} className="mx-auto">Play Again!</Button>
    </ModalFooter>
  </Modal>
</div>
    
  );
}

export default EndGameModal;