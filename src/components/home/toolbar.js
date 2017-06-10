import React from 'react';
import { connect } from 'react-redux';

const Toolbar = ({ count, user: { uid } }) => (
  <div className="">
    {
      uid ? `Count: ${count}`: ''
    }
  </div>
);

export default connect(state => {
  return {
    count: 0,
    //  state.list.reduce(
    //   (count, item) => {
    //     if (item.premium) {
    //       return count + 1;
    //     }
    //     return count;
    //   },
    //   0
    // ),
    user: state.user,
  }
})(Toolbar);
