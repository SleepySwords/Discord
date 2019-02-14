import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
class Button extends React.Component {
	  
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
export default Button