import React, { Component } from 'react';

import {
  Route} from 'react-router-dom';



class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			username : null,
			password : null
		}
		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSubmitLogin = this.onSubmitLogin.bind(this);
	}
	onChangeInput(event){
    var target = event.target;
    var formName = target.name;
    var value = target.value;
    this.setState({
      [formName] : value
    })
  }
	onSubmitLogin(event){
    event.preventDefault();
    this.props.onSubmitLogin(this.state);

  }
	

	render() {
		return (
			<div className="row">
				<div className="col-lg-3"></div>
				<div className="col-lg-6">
					<div className="contact_form_container">
						<div className="contact_title">Login</div>
						<form action="#" className="contact_form" id="contact_form" onSubmit={ this.onSubmitLogin }>
						<input type="text" className="contact_input" placeholder="Username" required="required" ref="username" name="username" onChange={ this.onChangeInput } />
						<input type="password" className="contact_input" placeholder="Password" required="required" ref="password" name="password" onChange={ this.onChangeInput } />
						<button type="submit" className="contact_button"  >Login</button>
						</form>
					</div>
				</div>
				<div className="col-lg-3"></div>
			</div>
		)
	}
}

export default LoginForm;
