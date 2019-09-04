import React from 'react';
import './ItemContainer.css';
import Item from './Item';

function ItemContainer(props) {
  let emoji = props.emoji;
  return (
    <div className="item-container">
      {emoji.map(function(item) {
        return (
          <Item
            key={item.id}
            emojiPack={item}
            inBasket={props.inBasket[item.id]}
          />
        );
      })}
    </div>
  );
}

export default ItemContainer;
