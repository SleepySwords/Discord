import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Login/Button.js'
import Input from './Login/Input.js'
import BlankFieldError from './Login/BlankFieldError.js'

class Login extends React.Component {
	constructor(props) {
    	super(props);
		this.state = {
			user: "bot",
			token: "",
			username: "",
			password: "",
			Field: new BlankFieldError(false, false, false)
		}
	}

	submit(e) {
		e.preventDefault()
		if (this.state.token != "" || (this.state.username != "" && this.state.password != "")) {
			
		} else {
			//todo error messages
			let err = new BlankFieldError(this.state.token == "", this.state.username == "", this.state.password == "");
			this.setState({Field: err})
		}
	}
	change(event) {
		console.log( event)
		this.setState({[event.target.name]: event.target.value})
	}

	switchUser() {
		this.setState({
			username: "",
			token: "",
			password: "",
			Field: new BlankFieldError(false, false, false)
		})
		if (this.state.user === "bot") {
			this.setState({
				user: "user"
			})
		} else {
			this.setState({
				user: "bot"
			})
		}
	}

 	render() {
		return (
			<div>
			    <form className="form" onSubmit={(e) => this.submit(e)}>
			      <div className="centeringWrapper">

			        <div id="title">Welcome back!</div>
			        <div id="subtitle">Good to see you again!</div>

					<div id="TokenWrapper">
						<Input value={this.state.user} change={(e) => this.change(e)} Field={this.state.Field}></Input>
			        </div>
			        <label> 
			        	<button id="button" type="submit">Login</button>
			        </label>
			        <Button onClick={() => this.switchUser()} value={this.state.user}></Button>

			      </div>
			    </form>
	        </div>
		)
	}
}

ReactDOM.render(<Login />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
