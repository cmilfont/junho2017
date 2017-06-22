import React from 'react';
import { Link } from 'react-router-dom'

const Brewery = ({ brewery, edit, remove, user }) => {
  const removeBrewery = () => remove(brewery.get('uid'));
  const onClick = () => edit(brewery);
  //
  // const premium = brewery.get('premium') ?
  //   <div className="premium">Especial</div>: null;

  return (
    <li className="mdc-list-item brewery">
      <div>
        <div>Brewery: </div>
        <Link to={'/brewery/'+brewery.get('uid')+'/'+user.uid}>
          {brewery.get('name')}
        </Link>
      </div>
      <div>
        <button className="mdc-button" onClick={onClick}>Edit</button>
        <button className="mdc-button" onClick={removeBrewery}>Remove</button>
      </div>
    </li>
  );

}

export default Brewery;
