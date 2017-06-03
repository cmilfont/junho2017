import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    list: PropTypes.array,
  }

  render() {
    const { list } = this.context;
    const { component } = this.props;
    const props = { list };
    return React.createElement(
      component,
      props
    );
  }
}

const connect = (component) => {
  return () => (
    <Wrapper component={component} />
  );
}

export default connect;
