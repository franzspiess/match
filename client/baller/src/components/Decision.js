import React from 'react';

const Decision = (props) => {

  const {yes} = props;
  const {no} = props;
  console.log(no);








  return (

    <div className="decision-container">
      <span className="decide yes" onClick={yes}></span>
      <span className="decide no" onClick={no}></span>
    </div>


  )

}

export default Decision;