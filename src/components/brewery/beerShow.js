import React from 'react';

const Beer = ({ beer, edit, remove }) => {

  const removeBeer = () => {
    remove(beer.get('uid'));
  }

  const onClick = () => edit(beer);

  return (
    <li className="mdc-list-item beer">
      <div>
        <label htmlFor={`name-${beer.get('uid')}`}>Name</label>
        <input
          data-key="name"
          readOnly
          value={beer.get('name')}
          id={`name-${beer.get('uid')}`}
          name={beer.get('uid')}
        />
      </div>
      <div>
        <label htmlFor={`bre-${beer.get('uid')}`}>Brewery</label>
        <input
          data-key="brewery"
          readOnly
          value={beer.get('brewery')}
          id={`bre-${beer.get('uid')}`}
          name={beer.get('uid')}
        />
      </div>
      <div>
        <button className="mdc-button" onClick={onClick}>Edit</button>
        <button className="mdc-button" onClick={removeBeer}>Remove</button>
      </div>
    </li>
  );

}

export default Beer;
