import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import './Login.css';
import Button from './Button.js'
import LoginInput from './LoginInput.js'
import BlankFieldError from './BlankFieldError.js'


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

		let err;
		if (!this.state.username.includes("@")) {

			err = new BlankFieldError(this.state.token === "", true, this.state.password === "");
			err.setErrorMessage(1, "You must have an @ symbol.")

		} else if (!(/.+@.+\..+/.test(this.state.username))) {

			err = new BlankFieldError(this.state.token === "", true, this.state.password === "");
			err.setErrorMessage(1, "Not a well formated email address")

		} else {
			err = new BlankFieldError(this.state.token === "", this.state.username === "", this.state.password === "");
		}
		this.setState({Field: err})
	}
	change(event) {
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
		<div id="particles-js">
			<div id="name"><a>Client</a></div>
			<div class="loginForm">
				<form className="form" onSubmit={(e) => this.submit(e)}>
					<div className="centeringWrapper">
						<div id="title">Welcome back!</div>
						<div id="subtitle">Good to see you again!</div>

						<div id="TokenWrapper">
							<LoginInput value={this.state.user} change={(e) => this.change(e)} Field={this.state.Field}></LoginInput>
						</div>
						<label> 
							<button id="button" type="submit">Login</button>
						</label>
						<Button onClick={() => this.switchUser()} value={this.state.user}></Button>
					</div>
				</form>
			</div>
		</div>
		)
	}
}


export default Login;