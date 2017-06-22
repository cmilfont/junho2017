import React, { Component } from 'react';
import Brewery from 'components/brewery/brewery';
import BreweryShow from 'components/brewery/breweryShow';

class List extends Component {

  add = () => {
    this.props.add();
  }

  componentDidMount() {
    this.props.request();
  }

  mappingBreweries = () => {
    const { list, breweryEdit, edit, remove, update, user } = this.props;
    return list.map(brewery => (
      (breweryEdit.get('uid') === brewery.get('uid')) ?
      <Brewery
        update={update}
        edit={edit}
        remove={remove}
        key={`bre-edit-${brewery.get('uid')}`}
        brewery={breweryEdit}
      /> :
      <BreweryShow
        edit={edit}
        remove={remove}
        key={brewery.get('uid')}
        brewery={brewery}
        user={user}
      />
    )).toList().toJS();
  }

  render() {
    const brewery = this.mappingBreweries();
    return (
      <div className="Brewery">
        <ul className="mdc-list">
          {brewery}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default List;
