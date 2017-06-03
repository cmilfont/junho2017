import React, { Component } from 'react';
import uuid from 'uuid';
import connect from 'milflux/connect';
import Beer from 'components/brewery/beer';

class List extends Component {

  add = () => {
    this.props.dispatch({
      type: 'add'
    });
  }

  componentDidMount() {

    const ref = window.firebase.database().ref(`/breweries`);
    ref.on('value', data => {
      this.props.dispatch({
        type: 'load',
        payload: data.val(),
      });
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

export default connect(List, state => {
  return {
    list: state.list,
  }
});
