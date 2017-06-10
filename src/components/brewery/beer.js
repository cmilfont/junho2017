import React from 'react';

const Beer = ({ uid, name, brewery, dispatch }) => {

  const remove = () => {
    dispatch({
      type: 'remove',
      payload: uid,
    })
  }

  const edit = (event) => {
    dispatch({
      type: 'edit',
      payload: event,
    });
  }

  return (
    <div className="beer">
      <div>
        <label htmlFor={`name-${uid}`}>Name</label>
        <input
          data-name="name"
          onChange={edit}
          value={name}
          id={`name-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <label htmlFor={`bre-${uid}`}>Brewery</label>
        <input
          data-name="brewery"
          onChange={edit}
          value={brewery}
          id={`bre-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );

}

export default Beer;
