import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/brewery';
import Beer from 'components/brewery/beer';

class List extends Component {

  add = () => {
    this.props.add();
  }

  componentDidMount() {
    this.props.request();
  }

  render() {
    const { list, edit, remove } = this.props;
    const beers = list.map(beer => (
      <Beer
        edit={edit}
        remove={remove}
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

export default connect(
  mapStateToProps, mapDispatchToProps
)(List);
