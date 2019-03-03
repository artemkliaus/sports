import React from 'react';
import './Info.sass';

function Info ({ count, hideFunc, hidden }) {
  const text = hidden ? 'Show' : 'Hide';
  let classCompleted = 'info__completed ';
  classCompleted += hidden ? `${classCompleted}_hide` : '';

  return (
    <div className="info">
      <span className="info__items-count">{count} tasks</span>
      <span className={classCompleted} onClick={hideFunc}>{text} completed</span>
    </div>
  )
}

export default Info;
