import React from 'react';

const Beer = ({ beer, edit, remove, userId, breweryId }) => {

  const removeBeer = () => {
    remove(beer.get('uid'), userId, breweryId);
  }

  const onClick = () => edit(beer, userId, breweryId);

  const premium = beer.get('premium') ?
    <div className="premium">Especial</div>: null;

  return (
    <li className="mdc-list-item beer">
      <div>
        <div>Beer: </div>
        <div>
          {beer.get('name')}
        </div>
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
