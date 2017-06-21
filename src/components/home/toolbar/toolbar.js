import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ count, user: { uid }, onLogout }) => (
  <header className="mdc-toolbar mdc-toolbar--fixed">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section" role="toolbar">
        <div className="">
          {
            uid ? `Count: ${count}`: ''
          }
        </div>
      </section>
      <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
        <i onClick={onLogout} className="material-icons">exit_to_app</i>
      </section>
    </div>
  </header>
);

Toolbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
}

export default Toolbar;
