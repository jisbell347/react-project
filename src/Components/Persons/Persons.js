import React, {PureComponent} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[Persons.js] inside Constructor', props);
		this.lastPersonRef = React.createRef();
	}

	componentWillMount(){
		console.log('[Persons.js] inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] inside componentDidMount()');
		this.lastPersonRef.current.focus();
	}

	componentWillRecieveProps(nextProps) {
		console.log('[Update Persons.js] inside componentWillRecieveProps()', nextProps);
	}

	render() {
		console.log('[Persons.js] inside render()');
		return this.props.persons.map((person, index) => {
				return <ErrorBoundary><Person
					click={() => this.props.clicked(index)}
					name={person.name}
					position={index}
					age={person.age}
					ref={this.lastPersonRef}
					authenticated={this.props.isAuthenticated}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/></ErrorBoundary>
			}
		);
	}
}

export default Persons;