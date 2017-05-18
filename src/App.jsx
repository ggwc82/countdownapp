import React, { Component } from 'react';
import './App.css';

class App extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			deadline: 'November 25, 2017',
			newDeadline: ''
		}
	}
	changeDeadline(){
		this.setState({deadline: this.state.newDeadline})
	}

	render() {	
		return(
		<div className="App">
			<div className="App-title">Countdown to {this.state.deadline}</div>
			<div>
				<div className="Clock-days">14 days</div>
				<div className="Clock-hours">14 hours</div>
				<div className="Clock-mins">14 mins</div>
				<div className="Clock-secs">14 secs</div>
			</div>
			<div>
				<input
					placeholder='new date'
				 	onChange={event => this.setState({newDeadline: event.target.value})}/>
				<button onClick={() => this.changeDeadline()}>Submit</button>
			</div>
		</div>
		)
	}
}

export default App;
