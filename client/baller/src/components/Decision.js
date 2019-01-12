import React from 'react';

const Decision = (props) => {

  const {yes} = props;
  const {no} = props;
  console.log(no);








  return (

    <div className="decision-container">
      <button className="decide yes" onClick={yes}></button>
      <button className="decide no" onClick={no}></button>
    </div>


  )

}

export default Decision;