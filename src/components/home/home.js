import React from 'react';
import Toolbar from 'components/home/toolbar';
import Brewery from 'components/brewery/list';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Brewery />
      </div>
    );
  }
}

export default Home;
