import React from 'react';

function Bar({ height }) {
  return <li className="item-bar flex-1" style={{ height: `${height / 100}%`, backgroundColor: 'rgb(16, 185, 129)' }}></li>;
}

export default Bar;
