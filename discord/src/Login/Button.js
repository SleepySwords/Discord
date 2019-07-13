import React from 'react';
import './../index.css';
import './Login.css';

class Button extends React.Component {
	  
	// return React.createElement('button', 
	// 	{className: "code", onClick: function() { this.setState({value: "bot"}) }}, 
	// 	"hi")
	render() {
		if (this.props.value === "bot") {
			return (	
				<div onClick={() => {
					this.props.onClick();
				}} className="Button"> 
					Switch to User account
				</div>
			)
		} else {
			return (

				<div href="#" onClick={() => {
					//alert(this.state.value)
					this.props.onClick();
				}} className="Button"> 
					Switch to Bot account
				</div>
			)
		}
	}
}
export default Button