import React from 'react';
import Icon from '@material-ui/core/Icon';

function Stars(props) {
  let stars = [];
  let starFull = Math.floor(props.count);
  let starHalf = props.count - starFull;
  let i = 0;
  for (; i < starFull; i++) {
    stars.push('star');
  }
  if (starHalf) {
    stars.push('star_half');
    i++;
  }
  while (i < 5) {
    stars.push('star_border');
    i++;
  }
  return (
    <div>
      <Icon>{stars[0]}</Icon>
      <Icon>{stars[1]}</Icon>
      <Icon>{stars[2]}</Icon>
      <Icon>{stars[3]}</Icon>
      <Icon>{stars[4]}</Icon>
    </div>
  );
}

export default Stars;
