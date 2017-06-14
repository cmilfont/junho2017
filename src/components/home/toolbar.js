import React from 'react';
import { connect } from 'react-redux';

const Toolbar = ({ count, user: { uid }, onLogout }) => (
  <div className="">
    <div>
      {
        uid ? `Count: ${count}`: ''
      }
    </div>
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  </div>
);

export default connect(state => {
  return {
    count: state.list.reduce(
      (count, item) => {
        if (item.premium) {
          return count + 1;
        }
        return count;
      },
      0
    ),
    user: state.user,
  }
})(Toolbar);
