import React, { Component } from 'react';

class UserForm extends Component {

	constructor(props){

    super(props);
    this.state = {
      'isActive' : true,
      'id' : null,
      'username' : null,
      'password' : null,
      'email' : null,
      'language' :"vi",
      'gender' : 1,
      'fullname' : null,
      'role_id' : null,
      'status' : false
    };
    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeInput = this.onChangeInput.bind(this);

  }

  componentWillMount(){
  	console.log(123);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onSubmitUser(this.state);

  }
  onChangeInput(event){
    var target = event.target;
    var formName = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [formName] : value
    })
  }

  render() {
    return (
		<form action="#" className="contact_form add_form" id="" onSubmit={ this.onSubmit }>
        	<input type="text" className="contact_input" placeholder="Username" required="required" ref="username" name="username" onChange={ this.onChangeInput } />
			<input type="password" className="contact_input" placeholder="Password" required="required" ref="password" name="password" onChange={ this.onChangeInput }  />
			<input type="text" className="contact_input" placeholder="Fullname" required="required" ref="fullname" name="fullname" onChange={ this.onChangeInput }  />
			<select className="contact_input" name="gender" onChange={ this.onChangeInput } value={this.state.gender} >
				<option value={1} >Men</option>
				<option value={2} >Woman</option>
				<option value={3} >Other</option>
			</select>
			<div className="language">
		  		<input type="radio" name="language" className="radio_input" value="en" onChange={ this.onChangeInput } checked={this.state.language ==="en"} /><label>English</label>
		  		<input type="radio" name="language" className="radio_input" value="vi" onChange={ this.onChangeInput } checked={this.state.language ==="vi"} /><label>Tiếng Việt</label>
			</div>
			<div className="user_status"> 
				<input type="checkbox" name="status" className="checkbox_input" value={true} onChange={ this.onChangeInput }/><label>Active</label>
			</div>
			<input type="email" className="contact_input" placeholder="email"  ref="email" name="email" onChange={ this.onChangeInput }  />
			<br />
			<button type="submit" className="contact_button" onClick={ this.submitContact } >Save</button>
			<button type="reset" className="contact_button clear_btn" >Clear</button>
		</form>
    )
  }
}

export default UserForm;
