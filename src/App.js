import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{name: 'John', age: 28 },
			{name: 'Max', age: 30},
			{name: 'Rachel', age: 42}
		],
		otherState: 'some other value',
		showPersons: false
	};

	switchNameHandler = (newName) => {
		//console.log('Was clicked!');
		//DON'T DO THIS: this.state.persons[0].name = 'Caleb';
		this.setState({persons: [
				{name: newName, age: 28 },
				{name: 'Max', age: 30},
				{name: 'Rachel', age: 32}
			]})
	};

	nameChangeHandler = (event) => {
		this.setState({persons: [
				{name: 'Manu', age: 28 },
				{name: event.target.value, age: 30},
				{name: 'Rachel', age: 32}
			]})
	};

	togglePersonsHandler = () => {

	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, Im a React App</h1>
				<p>This is really working!</p>
				<button
					style={style}
					onClick={() => this.togglePersonsHandler}>Switch Name</button>
				{this.state.showPersons ?
					<div>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}/>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Joe')}
						changed={this.nameChangeHandler}>My Hobbies: Sewing</Person>

					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}/>
				</div> : null
				}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
	}
}

export default App;
