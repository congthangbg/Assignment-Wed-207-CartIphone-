import react from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Message from './../components/Message'


function MessageContainer({message}) {

  return (
    <Message message={message}/>
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
