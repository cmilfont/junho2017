import React from 'react';
import connect from 'milflux/connect';

const Toolbar = ({ count, user: { uid } }) => (
  <div className="">
    {
      uid ? `Count: ${count}`: ''
    }
  </div>
);

export default connect(Toolbar, state => {
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
});
