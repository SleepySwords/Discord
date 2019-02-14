import React from 'react';
import './../index.css';

class Field extends React.Component {
	render() {
		let msgs = this.props.errorMessage;
		if(this.props.error) {
			return (
				<label>

					<div className="Field" id="redField">{this.props.name} <i className="errorField"> - {msgs(this.props.name)}</i></div>
					<input autoComplete="off" spellCheck="false" className="TokenButton inputError" onChange={this.props.change} type={this.props.type} name={this.props.name} />
				</label>
			)
		} else {	
			return (
				<label>
					<div className="Field">{this.props.name}</div>
					<input autoComplete="off" spellCheck="false" onChange={this.props.change} type={this.props.type} className="TokenButton" name={this.props.name} />
				</label>
			)
		}
	}
}

class Input extends React.Component {
	render() {
		let errored = this.props.Field.fields;
		if (this.props.value === "bot") {
			return (
				<Field name="token" type="password" change={this.props.change} error={errored[0]} errorMessage={(type) => this.props.Field.getErrorMessage(type)}></Field>
    			//<label>
	        	//	<a className="Field">Token</a>
	        	//	<input onChange={this.props.change} type="password" id="TokenButton" name="token" />
        		//</label>
			);
		} else {
			return (
				<div>
					<Field name="username" type="Username" change={this.props.change} error={errored[1]} errorMessage={(type) => this.props.Field.getErrorMessage(type)}></Field>
					<Field name="password" type="password" change={this.props.change} error={errored[2]} errorMessage={(type) => this.props.Field.getErrorMessage(type)}></Field>
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