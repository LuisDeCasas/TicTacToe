import React from 'react';
import { Button } from 'reactstrap';

function Square(props) {
    const icons = {
        0 : "",
        1 : "X",
        2 : "O"
    }

    const colors = {
        0 : "secondary",
        1 : "danger",
        2 : "primary"
    }
  return (
    <div className="col-4 square p-0">
        <Button outline className="w-100 h-100 border-dark rounded-0 p-0" color={colors[props.player]} onClick={()=>props.handle(props.index)} disabled={props.player!==0}>
            {icons[props.player]}
        </Button>
    </div>
    
  );
}

export default Square;
