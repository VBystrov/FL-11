import React from 'react';
import Button from './Button';
import Stars from './Stars';
import Title from './Title';
import EmojiIconsPreview from './EmojiIcons.js';
import './Item.css';

function Item(props) {
  return (
    <div className="item" id={props.emojiPack.id}>
      <EmojiIconsPreview iconsArray={props.emojiPack.emoji} />
      <Title text={props.emojiPack.title} />
      <Stars count={props.emojiPack.stars} />
      <Button
        id={props.emojiPack.id}
        price={props.emojiPack.price}
        buttonInactive={props.inBasket}
      />
    </div>
  );
}

export default Item;
