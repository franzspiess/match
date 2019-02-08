import React from 'react';

const Decision = (props) => {

  const {yes} = props;
  const {no} = props;

  return (
    <div className="decision-container">
      <span className="decide no" onClick={no}></span>
      <span className="decide yes" onClick={yes}></span>
    </div>
  )
}

export default Decision;