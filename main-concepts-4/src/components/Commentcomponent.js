import React from 'react'
import Userinfo from './Userinfo';

export default function Commentcomponent(props) {
    // function formatDate(date) {
    //     return date.toLocaleDateString();
    //   }
    return (
      <div className="Comment">
        <Userinfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }
  