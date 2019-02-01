import React from 'react';
import Suggestion from './Suggestion';

const Message = props => {
  const suggestions = props.suggestions || [];
  return (
    <div className={props.answer ? 'message-answer' : 'message'}>
      {props.children}
      <div>
        {suggestions.map((i, idx) => (
          <Suggestion action={i.action} key={idx}>
            {i.name}
          </Suggestion>
        ))}
      </div>
    </div>
  );
};

export default Message;
