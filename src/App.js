
import React, { Component } from 'react';
import CardList from './CardList';
//import { robots } from './robots.js';
import SearchBox from './SearchBox.js';
import Scoll from './Scoll';
import './App.css';



class App extends Component {
  //add “state” to the APP component.
  // state come with class component

  //Add a class constructor that assigns the initial this.state
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: " ",
    }
  }

  //These methods are called “lifecycle methods”.
  componentDidMount() {
    console.log("check");
    //fetch 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))

  }

  componentWillUnmount() {
  }

  //Use arrow function
  onSearchChange = (event) => {
    console.log(event.target.value);
    //change state this.setState()
    this.setState({ searchfield: event.target.value })
  }


  render() {

    const filterRobots = this.state.robots.filter(robot => {
      return (
        robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
      );
    });

    if (this.state.robots.length === 0) {
      return <h1>Still Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scoll>
            <CardList robots={filterRobots} />
          </Scoll>
        </div>
      );
    }
  }
}


// const App = () => {
//   return (
//     <div className="tc">
//       <h1>Robofriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// }

export default App;
