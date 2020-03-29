import React from 'react';
import './Block.scss';

export const Block = (props) => {
  return (
    <div className="Block" style={{ color: props.color || 'black' }}>
      <h2>{props.title}</h2>
      <h4>Total: {props.number}</h4>
      <p>Today: {props.increment}</p>
    </div>
  );
}
