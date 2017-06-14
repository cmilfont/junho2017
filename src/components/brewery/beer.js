import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/brewery';

const Beer = ({ beer, edit, remove }) => {

  const { uid, name, brewery } = beer.toJS();

  const onRemove = () => {
    remove({uid});
  }

  const onChange = ({ target: { value, dataset } }) => {
    edit({
      uid,
      [dataset['key']]: value,
    });
  }

  return (
    <div className="beer">
      <div>
        <label htmlFor={`name-${uid}`}>Name</label>
        <input
          data-key="name"
          onChange={onChange}
          value={name}
          id={`name-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <label htmlFor={`bre-${uid}`}>Brewery</label>
        <input
          data-key="brewery"
          onChange={onChange}
          value={brewery}
          id={`bre-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
