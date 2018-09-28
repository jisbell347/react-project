import React, {Component} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
	render() {
		return this.props.persons.map((person, index) => {
				return <ErrorBoundary><Person
					click={() => this.props.clicked(index)}
					name={person.name}
					position={index}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/></ErrorBoundary>
			}
		);
	}
}

export default Persons;