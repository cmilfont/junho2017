import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class Store extends React.Component {

  static childContextTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
  }

  state = {
    list: [],
    user: {},
  }

  getChildContext() {
    return {
      state: this.state,
      dispatch: this.dispatch,
    };
  }

  dispatch = action => {

    if (action.type === 'load') {
      this.load(action.payload);
    }

    if (action.type === 'add') {
      this.add();
    }

    if (action.type === 'remove') {
      this.remove(action.payload);
    }

    if (action.type === 'edit') {
      this.edit(action.payload);
    }

  }

  load = (list) => {
    this.setState({
      ...this.state,
      list,
    });
  }

  remove = (uid) => {
    this.setState({
      ...this.state,
      list: this.state.list.reduce(
        (newList, item) => {
          if (item.uid !== uid) {
            newList.push(item);
          }
          return newList;
        },
        []
      ),
    });
  }

  add = () => {
    const newList = this.state.list;
    newList.push({ name: '', uid: uuid() });
    this.setState({
      ...this.state,
      list: newList,
    });
  }

  edit = ({ target: { dataset, name, value } }) => {
    const { list } = this.state;
    this.setState({
      ...this.state,
      list: list.map(item => {
        if (item.uid === name) {
          item.premium = (value === 'Baden');
          if (dataset['name'] === 'brewery') {
            item.brewery = value;
          }
          if (dataset['name'] === 'name') {
            item.name = value;
          }
        }
        return item;
      }),
    });
  }

  render () {
    return this.props.children;
  }
}

export default Store;
