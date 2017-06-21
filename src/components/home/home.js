import React from 'react';
import Toolbar from 'components/home/toolbar/index.js';
import Brewery from 'components/brewery';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Toolbar />
        <Brewery />
      </div>
    );
  }
}

export default Home;
