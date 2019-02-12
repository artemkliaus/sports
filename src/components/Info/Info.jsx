import React from 'react';
import './Info.sass';

function Info (props) {
  return (
    <div className="info">
      <span className="info__items-count">{props.count} tasks</span>
    </div>
  )
}

export default Info;
