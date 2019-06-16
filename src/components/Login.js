import React, { Component } from 'react';

// import Home from './Home';
import LoginForm from './layouts/LoginForm';



// import {
//   Route, Redirect, BrowserRouter as Router,} from 'react-router-dom';



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
		// var { userList } = this.state;
		var loginAuth = this.loginAuth(loginUser);
		if(loginAuth){
			window.location.href = "/admin/user";
		}else{
			alert('Fail CMNR!');
		}

	}
	loginAuth(loginUser){
    	var { userList } = this.state;
    	var loginAuth = false;
    	console.log(userList);
    	userList.forEach((userObj,index) => {
    		if(loginAuth === false){
    			if(userObj.username === loginUser.username && userObj.password === loginUser.password ){
					if(userObj.status)
    					return loginAuth = true;
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
