import React from 'react';

const Brewery = ({ brewery, edit, remove, update }) => {

  const removeBrewery = () => {
    remove(brewery.get('uid'));
  }

  const updateBrewery = () => {
    update(brewery);
  }

  const onChange = ({ target: { value, dataset } }) => {
    edit(
      brewery.set(dataset['key'], value)
    );
  }

  const onCheck = ({ target: { checked, dataset } }) => {
    edit(
      brewery.set(dataset['key'], checked)
    );
  }

  return (
    <li className="mdc-list-item brewery">
      <div>
        <label htmlFor={`bre-${brewery.get('uid')}`}>Brewery</label>
        <input
          data-key="name"
          onChange={onChange}
          value={brewery.get('name')}
          id={`bre-${brewery.get('uid')}`}
        />
      </div>
      <div>
        <button className="mdc-button" onClick={updateBrewery}>Save</button>
        <button className="mdc-button" onClick={removeBrewery}>Remove</button>
      </div>
    </li>
  );

}

export default Brewery;
