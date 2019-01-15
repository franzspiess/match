import React from 'react';
import { Link } from '@reach/router';

const Messages = (props) => {

  const { matches } = props;


  const myChats = matches.map(el => {

    if (el.messages.length) {
      console.log(el.img)

      return (
        <Link to={`chatview/${el.idid}`} state={{ user: el }} key={el.idid}>
          <div className="chatpreview">
            <img className="chatpic" src={el.img} alt="matchpic"></img>
            <div className="msgheader">
              <div className="msgpreview msgname">{el.first}</div>
              <div className="msgpreview">{el.messages[0].content}</div>
            </div>
          </div>
        </Link>
      )
    }



  })

  return (
    <div className="chatoverview">
      {myChats}
    </div>
  )





}

export default Messages;