import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({ searchFeild: e.target.value }, () =>
  //     console.log(this.state.searchFeild)
  //   );
  // }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value }, () =>
      console.log(this.state.searchFeild)
    );
  };

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
        <h1>Monster Rolex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
