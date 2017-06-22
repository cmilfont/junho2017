import React from 'react';

const Beer = ({ beer, edit, remove, update, userId, breweryId }) => {

  const removeBeer = () => {
    remove(beer.get('uid'), userId, breweryId);
  }

  const updateBeer = () => {
    update(beer, userId, breweryId);
  }

  const onChange = ({ target: { value, dataset } }) => {
    edit(
      beer.set(dataset['key'], value),
      userId,
      breweryId,
    );
  }

  const onCheck = ({ target: { checked, dataset } }) => {
    edit(
      beer.set(dataset['key'], checked)
    );
  }

  return (
    <li className="mdc-list-item beer">
      <div>
        <label htmlFor={`beer-${beer.get('uid')}`}>Beer</label>
        <input
          data-key="name"
          onChange={onChange}
          value={beer.get('name')}
          id={`beer-${beer.get('uid')}`}
        />
      </div>
      <div>
        <label htmlFor={`premium-${beer.get('uid')}`}>Premium</label>
        <input
          data-key="premium"
          onChange={onCheck}
          checked={beer.get('premium')}
          id={`premium-${beer.get('uid')}`}
          type='checkbox'
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
