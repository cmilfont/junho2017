import React from 'react';
import { connect } from 'react-redux';

const Toolbar = ({ count, user: { uid }, onLogout }) => (
  <div className="">
    { uid ? `User: ${uid}`: '' }
    <br/>
    { count ? `Count: ${count}`: '' }
    <br/>
    <button onClick={onLogout}>Logout</button>
  </div>
);

export default connect(state => {
  return {
    count: state.list.size,
    user: state.user
  }
})(Toolbar);
