import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this); //resolve the scope problem
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => this.setState({ monsters: users }));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox placeholder="Search cats" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
