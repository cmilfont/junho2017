import React, { Component } from 'react';
import Beer from 'components/beer';

export default class List extends Component {
  render() {
    const { list, edit } = this.props;
    const beers = list.map(beer => (
      <Beer
        edit={edit}
        key={beer.uid}
        {...beer}
      />
    ));

    return (
      <div className="list">{beers}</div>
    );
  }
}
