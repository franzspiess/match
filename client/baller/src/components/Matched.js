import React from 'react';
import { Link } from '@reach/router'

const Matched = (props) => {

  const { matches } = props;

    const myMatches = matches.map(el => {

      if (!el.messages.length){
        console.log(el.idid)

        return (
        <Link to = {`chatview/${el.idid}`} state={{user:el}} key={el.idid} >
        <img className="chatpic" src={el.img} alt="matchimg"></img>
        </Link>
    )
      }
    });

  if (matches && myMatches) {
  return (
    <div className="matched">
      {myMatches}
    </div>
  )
  }
  else return null;


}

export default Matched;