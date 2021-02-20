import react from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Message from './../components/Message'


function MessageContainer({message,message1}) {

  return (
    <Message message={message} message1={message1}/>
  );
}

MessageContainer.prototype={
  message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    message: state.Message
  }
}

export default connect(mapStateToProps, null)(MessageContainer);
