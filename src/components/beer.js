import React, { PropTypes } from 'react'

class Beer extends React.Component {
  render () {
    const { uid, name, brewery, edit } = this.props;
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
      </div>
    )
  }
}

export default Beer;
