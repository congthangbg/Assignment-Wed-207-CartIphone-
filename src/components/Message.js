import react from 'react';
function Message( {message,message1}) {
  return (
    <h3>
      <span className="badge amber darken-2">
      {message}
      </span>
    
    </h3>
  );
}

export default Message;
