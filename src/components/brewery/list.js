import React, { Component } from 'react';
import { fromJS } from 'immutable';
import Beer from 'components/brewery/beer';
import BeerShow from 'components/brewery/beerShow';

class List extends Component {

  state = {
    beer: fromJS({}),
  }

  add = () => {
    this.props.add();
  }

  componentDidMount() {
    this.props.request();
  }

  edit = (beer) => {
    this.setState({ beer });
  }

  mappingBeers = () => {
    const { beer: beerEdit } = this.state;
    const { list, edit, remove } = this.props;
    return list.map(beer => (
      (beerEdit.get('uid') === beer.get('uid')) ?
      <Beer
        edit={this.edit}
        remove={remove}
        key={`bre-edit-${beer.get('uid')}`}
        beer={beerEdit}
      /> :
      <BeerShow
        edit={this.edit}
        remove={remove}
        key={beer.get('uid')}
        beer={beer}
      />
    ));
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
