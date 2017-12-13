import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={e => this.handleClick(e)}>Change Something</button>
        <br /><br />
        <p>Items in Shopping List: {this.props.store.getState().items.length}</p>
      </div>
    );
  }
};

export default App;
