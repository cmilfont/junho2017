import React from 'react';
import connect from 'milflux/connect';

class Toolbar extends React.Component {

  render() {
    const { list } = this.props;
    const count = list.reduce(
      (count, item) => {
        if (item.premium) {
          return count + 1;
        }
        return count;
      },
      0
    );
    return (
      <div>
        Count: {count}
      </div>
    );
  }
}

export default connect(Toolbar);
