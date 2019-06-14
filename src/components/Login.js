import React, { Component } from 'react';

import Home from './Home';
import LoginForm from './layouts/LoginForm';
import {
  Route, Redirect} from 'react-router-dom';
  import { hashHistory } from 'react-router'



class Login extends Component {

	
	constructor(props){
		super(props);
		this.state = {
			userList : []
		}
		this.loginAuth = this.loginAuth.bind(this);
	}
	componentWillMount(){

	    if(localStorage && localStorage.getItem('userList')){
	      var userList = JSON.parse(localStorage.getItem('userList'));
	      this.setState({
	        userList : userList
	      })
	      localStorage.setItem('userList',JSON.stringify(userList));
	    }
  	}


	onSubmitLogin = (loginUser) => {
		var { userList } = this.state;
		console.log(userList);
		var loginAuth = this.loginAuth(loginUser);
		if(loginAuth){
			console.log('redirect');
			// window.location.replace("/admin/user");

			hashHistory.push('/registrationStep2')

			{/*return <Redirect to='/admin/user' />*/}
		}

	}
	loginAuth(loginUser){
    	var { userList } = this.state;
    	var loginAuth = false;
    	userList.forEach((userObj,index) => {
    		if(loginAuth === false){
    			if(userObj.username === loginUser.username &&  userObj.password === loginUser.password ){
        		loginAuth = true; 
      			}
      		}
    		});
    	return loginAuth;
	}

	
	render() {
		return (
			<section id="login">
				<div className="contact">
					<div className="container">
						<LoginForm onSubmitLogin={this.onSubmitLogin} />
					</div>
				</div>
			</section>
		)
	}
}

export default Login;
