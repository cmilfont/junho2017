import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

  logar = () => {
    this.props.dispatch({
      type: 'login',
    });
  }

  render() {
    return (
      <button onClick={this.logar}>Log In</button>
    )
  }
}

export default connect(state => {
  return {
    user: state.user,
  }
})(Login);
