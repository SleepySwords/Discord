import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import './Discord.css';


class AddButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img class="button" src={this.props.src}></img>
		)
	}
}

class MessageBar extends React.Component {
	constructor(props) {
    	super(props);
		this.state = {
			value: "hey"
		}

		this.onEnterPress = this.onEnterPress.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	onEnterPress = (e) => {
	  if(e.keyCode == 13 && e.shiftKey == false) {
	    e.preventDefault();
	    console.log(this.state.value);
		this.setState({value: ""});
	  }
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<div class="MessageBar">
				<AddButton src="https://image.flaticon.com/icons/png/512/60/60740.png"></AddButton>
				<textarea rows="1" value={this.state.value} onChange={this.handleChange} onKeyDown={this.onEnterPress} tabindex="1" id="MessageBarInput" name="username" type="Username" placeholder="Message in #SOmething"></textarea>
				<AddButton src="https://image.flaticon.com/icons/png/512/60/60740.png"></AddButton>
			</div>
			)
	}
}

export default MessageBar;