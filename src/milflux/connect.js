import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { state, dispatch } = this.context;
    const { component, defaultProps, mapping } = this.props;

    const mapped = (mapping) ? mapping(state) : {};
    const props = {
      ...mapped,
      dispatch,
      ...defaultProps,
    };
    return React.createElement(
      component,
      props
    );
  }
}

const connect = (component, mapping) => {
  return (props) => (
    <Wrapper
      mapping={mapping}
      defaultProps={props}
      component={component}
    />
  );
}

export default connect;
