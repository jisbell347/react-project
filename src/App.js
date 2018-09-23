import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Hi, Im a React App</h1>
         <p>This is really working!</p>
         <Person name="John" age="23"/>
			<Person name="Lisa" age="31">My Hobbies: Sewing</Person>
			<Person name="Charles" age="54"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
  }
}

export default App;
