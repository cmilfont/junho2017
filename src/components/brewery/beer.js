import React, { Component } from 'react';
import connect from 'milflux/connect';

class Beer extends Component {

  remove = () => {
    const { uid, dispatch } = this.props;
    dispatch({
      type: 'remove',
      payload: uid,
    })
  }

  edit = (event) => {
    const { uid, dispatch } = this.props;
    dispatch({
      type: 'edit',
      payload: event,
    });
  }

  render () {
    const { uid, name, brewery } = this.props;

    return (
      <div className="beer">
        <div>
          <label htmlFor={`name-${uid}`}>Name</label>
          <input
            data-name="name"
            onChange={this.edit}
            value={name}
            id={`name-${uid}`}
            name={uid}
          />
        </div>
        <div>
          <label htmlFor={`bre-${uid}`}>Brewery</label>
          <input
            data-name="brewery"
            onChange={this.edit}
            value={brewery}
            id={`bre-${uid}`}
            name={uid}
          />
        </div>
        <div>
          <button onClick={this.remove}>Remove</button>
        </div>
      </div>
    )
  }
}

export default connect(Beer);
