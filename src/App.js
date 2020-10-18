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
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search cats"
          handleChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            )
          }
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
