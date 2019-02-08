import React from 'react';
import { Link } from '@reach/router';

const Messages = ({matches}) => {

  const myChats = matches.map(el => {

    if (el.messages.length) {

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
    };
  });

  return (
    <div className="chatoverview">
      {myChats}
    </div>
  )
};

export default Messages;