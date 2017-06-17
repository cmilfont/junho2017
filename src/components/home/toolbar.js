import React from 'react';
import { connect } from 'react-redux';

const Toolbar = ({ count, user: { uid } }) => (
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
        <i className="material-icons">exit_to_app</i>
      </section>
    </div>
  </header>
);

export default connect(state => {
  return {
    count: 0,
    //  state.list.reduce(
    //   (count, item) => {
    //     if (item.premium) {
    //       return count + 1;
    //     }
    //     return count;
    //   },
    //   0
    // ),
    user: state.user,
  }
})(Toolbar);
