import react, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Tim',
          id: 1,
        },
        {
          name: 'Bob',
          id: 2,
        },
        {
          name: 'Fred',
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
