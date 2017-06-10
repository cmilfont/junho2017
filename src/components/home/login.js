import React, { Component } from 'react';
import connect from 'milflux/connect';

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

export default connect(Login, state => {
  return {
    user: state.user,
  }
});
