import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Beer extends Component {

  static contextTypes = {
    edit: PropTypes.func,
    remove: PropTypes.func,
  }

  render () {
    const { edit, remove } = this.context;
    const { uid, name, brewery } = this.props;
    const onClick = () => remove(uid);
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
          <button onClick={onClick}>Remove</button>
        </div>
      </div>
    )
  }
}

export default Beer;
