import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{name: 'John', age: 28 },
			{name: 'Max', age: 30},
			{name: 'Rachel', age: 42}
		]
	};

	switchNameHandler = () => {
		console.log('Was clicked!');
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, Im a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler()}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Sewing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
	}
}

export default App;
