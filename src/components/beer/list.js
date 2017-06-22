import React, { Component } from 'react';
import Beer from 'components/beer/beer';
import BeerShow from 'components/beer/beerShow';

class List extends Component{

  componentWillMount() {
    this.props.request(this.props.match.params.uid, this.props.match.params.id);
  }

  add = () => {
    this.props.add(this.props.match.params.uid, this.props.match.params.id);
  }

  mappingBeers = () => {
    const { beerList, beerEdit, edit, remove, update } = this.props;
    const breweryId = this.props.match.params.id;
    const userId = this.props.match.params.uid;

    return beerList.map(beer => (
      (beerEdit.get('uid') === beer.get('uid')) ?
      <Beer
        update={update}
        edit={edit}
        remove={remove}
        key={`beer-edit-${beer.get('uid')}`}
        beer={beerEdit}
        userId={userId}
        breweryId={breweryId}
      /> :
      <BeerShow
        edit={edit}
        remove={remove}
        key={beer.get('uid')}
        beer={beer}
        userId={userId}
        breweryId={breweryId}
      />
    )).toList().toJS();
  }

  //
  // findBrewery = (breweryId) => {
  //   const { beerList } = this.props;
  //   return beerList.toList().toJS().find(
  //     brew => {
  //       return brew.uid === breweryId;
  //     }
  //   );
  // }

  render() {
    const breweryId = this.props.match.params.id;
    const userId = this.props.match.params.uid;
    //const brewery = this.findBrewery(breweryId);

    const beers = this.mappingBeers();
    console.log()
    return (
      <div className="Beers">
        <ul className="mdc-list">
          <h3>user id: {userId}</h3>
          <h3>brewery id: {breweryId}</h3>
          {beers}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default List;
