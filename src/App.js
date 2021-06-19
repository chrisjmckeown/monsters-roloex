import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: '',
      // {
      //   name: 'Tim',
      //   id: 1,
      // },
      // {
      //   name: 'Bob',
      //   id: 2,
      // },
      // {
      //   name: 'Fred',
      //   id: 3,
      // },
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFeild } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) =>
            this.setState({ searchFeild: e.target.value }, () =>
              console.log(this.state.searchFeild)
            )
          }
        ></input>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
