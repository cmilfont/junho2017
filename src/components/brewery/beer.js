import React from 'react';

const Beer = ({ beer, dispatch }) => {

  const { uid, name, brewery } = beer.toJS();

  const remove = () => {
    dispatch({
      type: 'remove',
      payload: uid,
    })
  }

  const edit = ({ target }) => {
    const key = target.dataset['key'];
    const value = target.value;
    dispatch({
      type: 'BREWERY_LIST_EDIT',
      payload: {
        uid,
        [key]: value
      },
    });
  }

  return (
    <div className="beer">
      <div>
        <label htmlFor={`name-${uid}`}>Name</label>
        <input
          data-key="name"
          onChange={edit}
          value={name}
          id={`name-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <label htmlFor={`bre-${uid}`}>Brewery</label>
        <input
          data-key="brewery"
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
