import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Field extends React.Component {
	render() {
		if(this.props.error) {
			return (
				<label>

					<a className="Field" id="redField">{this.props.name} <i className="errorField"> - This field is required</i></a>
					<input className="TokenButton inputError" onChange={this.props.change} type={this.props.type} name={this.props.name} />
				</label>
			)
		} else {	
			return (
				<label>
					<a className="Field">{this.props.name}</a>
					<input onChange={this.props.change} type={this.props.type} className="TokenButton" name={this.props.name} />
				</label>
			)
		}
	}
}

class Input extends React.Component {
	render() {
		let errored = this.props.Field.fields;
		console.log(errored)
		if (this.props.value === "bot") {
			return (
				<Field name="token" type="password" change={this.props.change} error={errored[0]}></Field>
    			//<label>
	        	//	<a className="Field">Token</a>
	        	//	<input onChange={this.props.change} type="password" id="TokenButton" name="token" />
        		//</label>
			);
		} else {
			return (
				<div>
					<Field name="username" type="Username" change={this.props.change} error={errored[1]}></Field>
					<Field name="password" type="password" change={this.props.change} error={errored[2]}></Field>
				</div>
        			//<label>
		        	//	<a className="Field">Username</a>
		        	//	<input onChange={this.props.change} type="username" id="TokenButton" name="username" />
		        	//
		        	//	<a className="Field">Password</a>
		        	//	<input onChange={this.props.change} type="password" id="TokenButton" name="password" />
					//</label>
        		)
		}
	}
}
export default Input