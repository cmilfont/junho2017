import React, { Component } from 'react';
import uuid from 'uuid';
import List from 'components/list';
import './App.css';

class App extends Component {

  state = {
    config: {},
    list: [
      {
        uid: uuid(),
        name: 'Heineken',
        brewery: 'Heineken',
      }
    ],
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

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <List
          edit={this.edit}
          list={list}
        />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
