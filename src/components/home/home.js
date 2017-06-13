import React from 'react';
import Toolbar from 'components/home/toolbar';
import Brewery from 'components/brewery/list';

class Home extends React.Component {
  render() {
    const { onLogout } = this.props;
    return (
      <div>
        <Toolbar onLogout={onLogout}/>
        <Brewery />
      </div>
    );
  }
}

export default Home;
