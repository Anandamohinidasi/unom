/* eslint-disable default-case */
import React from 'react';
import './Card.less'

const cardTypeMap = {
    content: {
      'skip': <div className="skip"></div>,
      'plus-two': <div className="plus-two"></div>,
      'reverse':  <div className="reverse">
                    <div className="arrows">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>
                  </div>,
      'wild': <div className="wild">
                <div className="segment yellow"></div>
                <div className="segment green"></div>
                <div className="segment blue"></div>
                <div className="segment red"></div>
              </div>,
      'plus-four': <div class="plus-four">
                    <div className="card1"></div>
                    <div className="card2"></div>
                    <div className="card3"></div>
                    <div className="card4"></div>
                   </div>,
        'back': <div className="wild">
                    <div className="segment red"></div>
                    <div className="segment red"></div>
                    <div className="segment red"></div>
                    <div className="segment red"></div>
                </div>
    },
    smallContent: {
      'plus-two': '+2',
      'plus-four': '+4',
      'back': ' '
    }
}

function Card(props) {
  const content = cardTypeMap.content[props.type] || props.content; 
  const smallContent = cardTypeMap.smallContent[props.type];

  return (
    <div className={'card ' + (props.color || 'black')}>
        <div className="ellipse"></div>
        <div className={'content ' + props.color}>
            {content}
        </div>
        <div className={'small-content ' + props.color}>
            {smallContent || content}
        </div>
        <div className={'small-content-reverse ' + props.color}>
            {smallContent || content}
        </div>
    </div>
  );
}

export default Card;
