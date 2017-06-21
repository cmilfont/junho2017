import React from 'react';

const Beer = ({ beer, edit, remove }) => {

  const removeBeer = () => remove(beer.get('uid'));

  const onClick = () => edit(beer);

  const premium = beer.get('premium') ?
    <div className="premium">Especial</div>: null;

  return (
    <li className="mdc-list-item beer">
      <div>
        <div>Beer: </div>
        <div>{beer.get('name')}</div>
      </div>
      <div>
        <div>Brewery: </div>
        <div>{beer.get('brewery')}</div>
      </div>
      <div>
        {premium}
      </div>
      <div>
        <button className="mdc-button" onClick={onClick}>Edit</button>
        <button className="mdc-button" onClick={removeBeer}>Remove</button>
      </div>
    </li>
  );

}

export default Beer;
