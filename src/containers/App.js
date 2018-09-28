import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{id: 'adfak', name: 'John', age: 28},
				{id: 'fdafdk', name: 'Max', age: 30},
				{id: 'adfadfa', name: 'Rachel', age: 42}
			],
			otherState: 'some other value',
			showPersons: false,
			toggleClicked: 0
		};
	}



	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({persons: persons})
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState((prevState, props) => {
			return {showPersons: !doesShow,
			toggleClicked: prevState.toggleClicked + 1}});
	};


	render() {
		let persons = null;

		if(this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangeHandler}/>
		}
		;

		return (
			<Auxiliary>
				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}
			</Auxiliary>

		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"));
	}
}

export default withClass(App, classes.App);
