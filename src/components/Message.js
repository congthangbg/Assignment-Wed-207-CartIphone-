import react from 'react';
import PropTypes from 'prop-types';
function Message( {message}) {
  return (
    <h3>
      <span className="badge amber darken-2">
      {message}
      </span>
    
    </h3>
  );
}
Message.propTypes ={
  message: PropTypes.string.isRequired,
}

export default Message;
