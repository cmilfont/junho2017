import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'milflux/connect';
import Beer from 'components/brewery/beer';

class List extends Component {

  static contextTypes = {
    add: PropTypes.func,
  }

  render() {
    const { list } = this.props;
    const { add } = this.context;
    const beers = list.map(beer => (
      <Beer
        key={beer.uid}
        {...beer}
      />
    ));

    return (
      <div>
        <div className="list">{beers}</div>
        <button onClick={add}>Add</button>
      </div>
    );
  }
}

export default connect(List);
