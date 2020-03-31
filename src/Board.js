import React, { useState }  from 'react';
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

const cardColors = ['yellow', 'green', 'blue', 'red']

const cardPile = createCards();

function createCards() {
  const allCards = [];
  cardColors.forEach(color => {
    [...Array(10).keys()]
    .concat(['skip', 'reverse', 'plus-two'])
    .forEach(unit => {
      allCards.push({
        content: unit,
        color,
        type: unit
      },
      {
        content: unit,
        color,
        type: unit
      })
    })
  });

  [...Array(8).keys()]
          .forEach((position, index) => {
                allCards.push({
                    type: !(index & 1) ? 'plus-four' : 'wild'
                })
              })

  return allCards;
}

function Board() {
  const [chooseCard, setChoosenCard] = useState([{
    color:'', 
    content:'',
    type:''
  }]);

  function putCardInTable() {    
    const index = Math.floor(Math.random() * cardPile.length);
    setChoosenCard(cardPile[index]);
    cardPile.splice(index, 1);
  }
  

  return (
    <div className="board">
      <div className="cardMount" onClick={putCardInTable}>
        <Card type="back"></Card>
      </div>
      <div className="inTableCard" >
      {
        (!!chooseCard.type || !!chooseCard.color) && 
          <Card color={chooseCard.color}
                content={chooseCard.content}
                type={chooseCard.type}>
          </Card>
      }
      </div>
    </div>
  );
}

export default Board;
