import React, { Component } from 'react';
import Beer from 'components/brewery/beer';
import BeerShow from 'components/brewery/beerShow';

class List extends Component {

  add = () => {
    this.props.add();
  }

  componentDidMount() {
    this.props.request();
  }

  mappingBeers = () => {
    const { list, beerEdit, edit, remove, update } = this.props;
    return list.map(beer => (
      (beerEdit.get('uid') === beer.get('uid')) ?
      <Beer
        update={update}
        edit={edit}
        remove={remove}
        key={`bre-edit-${beer.get('uid')}`}
        beer={beerEdit}
      /> :
      <BeerShow
        edit={edit}
        remove={remove}
        key={beer.get('uid')}
        beer={beer}
      />
    )).toList().toJS();
  }

  render() {
    const beers = this.mappingBeers();
    return (
      <div className="Brewery">
        <ul className="mdc-list">
          {beers}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default List;
