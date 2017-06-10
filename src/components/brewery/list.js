import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import Beer from 'components/brewery/beer';

class List extends Component {

  add = () => {
    this.props.dispatch({
      type: 'BREWERY_LIST_ADD'
    });
  }

  componentDidMount() {
    this.props.dispatch({ type: 'BREWERY_LIST_REQUEST' })
  }

  render() {
    const { list, dispatch } = this.props;
    const beers = list.map(beer => (
      <Beer
        dispatch={dispatch}
        key={beer.get('uid')}
        beer={beer}
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

export default connect(state => {
  return {
    list: state.list,
  }
})(List);
