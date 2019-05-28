import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

  function homeRoute() {
    return <Home />
  }

class Login extends Component {

	submitLogin = () => {
		const STATUS_ACTIVE = 1;
		const STATUS_INACTIVE = 3;
		const LOGIN_SUCCESS = 200;
		const LOGIN_INACTIVE_USER = 201;
		const LOGIN_WRONG_PASSWORD = 202;
		const LOGIN_DO_NOT_EXIST = 203;
		var userList = [
			{
				'id' : 1,
				'username' : 'admin',
				'password' : '123456',
				'role_id' : 1,
				'status' : 1
			},
			{
				'id' : 2,
				'username' : 'hoangmn',
				'password' : '123456',
				'role_id' : 2,
				'status' : 1
			},
			{
				'id' : 3,
				'username' : 'user01',
				'password' : '123456',
				'role_id' : 2,
				'status' : 3
			},
			{
				'id' : 4,
				'username' : 'user02',
				'password' : '123456',
				'role_id' : 3,
				'status' : 1
			}
		];
		var username = this.refs.username.value;
		var password = this.refs.password.value;
        var loginStatus = null;
		for (var i = 0; i < userList.length; i++) {
			var userObj = userList[i];
		  if(userObj.username === username){
            	if(userObj.password === password){
            		if(userObj.status === STATUS_ACTIVE){
            			loginStatus =  LOGIN_SUCCESS; //login Succes;
            		}
            		else{
            			loginStatus =  LOGIN_INACTIVE_USER; // inactive user;
            		}
            		break;
            	}else{
            		loginStatus = LOGIN_WRONG_PASSWORD; //wrong pasword
            		break;
            	}
            }else{
            	loginStatus = LOGIN_DO_NOT_EXIST ; // Do not exist
            	break;
            }
		}
		if(loginStatus  === LOGIN_SUCCESS){

			return (<Route path="/home" component= { homeRoute } />)
		}
		console.log(loginStatus);
	}

	render() {
		return (
			<section id="login">
				<div className="contact">
					<div className="container">
						<div className="row">
							<div className="col-lg-3"></div>
							<div className="col-lg-6">
								<div className="contact_form_container">
									<div className="contact_title">Login</div>
									<form action="#" className="contact_form" id="contact_form">
									<input type="text" className="contact_input" placeholder="Username" required="required" ref="username" />
									<input type="password" className="contact_input" placeholder="Password" required="required" ref="password" />
									<button className="contact_button" onClick={ this.submitLogin } >Login</button>
									</form>
								</div>
							</div>
							<div className="col-lg-3"></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Login;
