import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Text extends React.Component {
	render() {
		if (this.props.value === "bot") {
			return (
				<a>Switch to User account</a>
				)
		} else {
			return (
				<a>Switch to Bot account</a>
				)
		}
	}
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

	log() {
		console.log("hey")
	}
	  
	// return React.createElement('button', 
	// 	{className: "code", onClick: function() { this.setState({value: "bot"}) }}, 
	// 	"hi")
	render() {
		if (this.props.value === "bot") {
			return (	
				<a onClick={() => {
					this.props.onClick();
				}} className="Button"> 
					Switch to User account
				</a>
			)
		} else {
			return (

				<a onClick={() => {
					//alert(this.state.value)
					this.props.onClick();
				}} className="Button"> 
					Switch to Bot account
				</a>
			)
		}
	}
}

class Input extends React.Component {
	render() {
		if (this.props.value === "bot") {
			return (
    			<label>
	        		<a className="Field">Token</a>
	        		<input type="password" id="TokenButton" name="token" />
        		</label>
			);
		} else {
			return (
        			<label>
		        		<a className="Field">Username</a>
		        		<input type="username" id="TokenButton" name="username" />

		        		<a className="Field">password</a>
		        		<input type="password" id="TokenButton" name="password" />
					</label>
        		)
		}
	}
}

class Login extends React.Component {
	constructor(props) {
    	super(props);
		this.state = {
			value: "bot"
		}
	}
	handle() {
		if (this.state.value === "bot") {
			this.setState({value: "user"});
		} else {
			this.setState({value: "bot"});
		}
	}
 	render() {
		
		return (
			<div>
				<div id="TokenWrapper">
					<Input value={this.state.value}></Input>
		        </div>
		        <label> 
		        	<button id="button" type="submit">Login</button>
		        </label>
		        <Button onClick={() => this.handle()} valueg={this.state.value}></Button>
	        </div>
		)
	}
}

ReactDOM.render(<Login />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
