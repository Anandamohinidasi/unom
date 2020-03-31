import React from 'react';
import Card from './card/Card'
import './Board.less';
import './card/Card.less'

/*

  <Card content="0" color="green"></Card>
  <Card content="1" color="green"></Card>
  <Card content="2" color="green"></Card>
  <Card content="3" color="green"></Card>
  <Card content="4" color="green"></Card>
  <Card content="5" color="green"></Card>
  <Card content="6" color="green"></Card>
  <Card content="7" color="green"></Card>
  <Card content="8" color="green"></Card>
  <Card content="9" color="green"></Card>
  <Card type="skip" color="yellow"></Card>
  <Card type="plus-two" color="yellow"></Card>
  <Card type="reverse" color="yellow"></Card>
  <Card type="wild"></Card>
  <Card type="plus-four"></Card>


*/
function Board() {
  return (
    <div className="board">
      <div className="cardMount">
        <Card type="back"></Card>
      </div>
      <div className="inTableCard"></div>
    </div>
  );
}

export default Board;
