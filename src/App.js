import React, { Component } from 'react';
import { Button, ListCard } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <Button href="#" theme='go'> Button </Button>
          <ListCard header={'Header'} items={['Item 1', 'Item 2', 'Item 3']}>Items</ListCard>
        </div>
      </div>
    );
  }
}

export default App;
