import React from 'react';

const Beer = ({ beer, edit, remove, update }) => {

  const removeBeer = () => {
    remove(beer.get('uid'));
  }

  const updateBeer = () => {
    update(beer);
  }

  const onChange = ({ target: { value, dataset } }) => {
    edit(
      beer.set(dataset['key'], value)
    );
  }

  return (
    <li className="mdc-list-item beer">
      <div>
        <label htmlFor={`name-${beer.get('uid')}`}>Name</label>
        <input
          data-key="name"
          onChange={onChange}
          value={beer.get('name')}
          id={`name-${beer.get('uid')}`}
          name={beer.get('uid')}
        />
      </div>
      <div>
        <label htmlFor={`bre-${beer.get('uid')}`}>Brewery</label>
        <input
          data-key="brewery"
          onChange={onChange}
          value={beer.get('brewery')}
          id={`bre-${beer.get('uid')}`}
          name={beer.get('uid')}
        />
      </div>
      <div>
        <button className="mdc-button" onClick={updateBeer}>Save</button>
        <button className="mdc-button" onClick={removeBeer}>Remove</button>
      </div>
    </li>
  );

}

export default Beer;
