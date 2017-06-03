import React, { Component } from 'react';
import connect from 'milflux/connect';
import Beer from 'components/brewery/beer';

class List extends Component {

  add = () => {
    this.props.dispatch({
      type: 'add'
    });
  }

  render() {
    const { list, dispatch } = this.props;
    const beers = list.map(beer => (
      <Beer
        key={beer.uid}
        {...beer}
      />
    ));

    return (
      <div>
        <div className="list">{beers}</div>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default connect(List);
