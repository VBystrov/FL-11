import React from 'react';
import './EmojiIcons.css';
function EmojiIconsPreview(props) {
  return (
    <div className="icon-preview">
      <span className="firstIcon">{props.iconsArray[0].char}</span>
      <span className="secondIcon">{props.iconsArray[1].char}</span>
      <span className="thirdIcon">{props.iconsArray[2].char}</span>
    </div>
  );
}

export default EmojiIconsPreview;
