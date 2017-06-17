import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ logout, count, user: { uid } }) => (
  <header className="mdc-toolbar mdc-toolbar--fixed">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section" role="toolbar">
        <div className="">
          {
            uid ? `Premium: ${count}`: ''
          }
        </div>
      </section>
      <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
        <i onClick={logout} className="material-icons">exit_to_app</i>
      </section>
    </div>
  </header>
);

Toolbar.propTypes = {
  logout: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
}

export default Toolbar;
