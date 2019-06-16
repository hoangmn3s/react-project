import React, { Component } from 'react';

import UserTable from './UserTable';
import UserForm from './UserForm';
class User extends Component {

  constructor(props){

    super(props);
    this.state = {
      userList : [],
      userEditing : null
    };
    this.generateData = this.generateData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);

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

  generateData(){
    var userList = JSON.parse(localStorage.getItem('userList'))
    this.setState({
      userList : userList
    })  
    localStorage.setItem('userList',JSON.stringify(userList));
  }
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateId(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
  }
  onSubmit(data){
    data.id = this.generateId();
    var { userList } = this.state;
    userList.push(data);
    localStorage.setItem('userList',JSON.stringify(userList));
    this.generateData();

  }
  onUpdateStatus(userId){
    var { userList } = this.state;
    var newUserList = userList.map( userObj => {
      if(userObj.id === userId){
        userObj.status = !userObj.status
      }
      return userObj;
    })
    this.setState({
      userList: newUserList
    })
    localStorage.setItem('userList',JSON.stringify(userList));
  }

  onUpdateUser(userId){
    var { userList } = this.state;
    var index = this.findUser(userId);
    var userEditing = userList[index];
    this.setState({
      userEditing : userEditing
    })
  }

  onDeleteUser(userId){
    var { userList } = this.state;
    var index = this.findUser(userId);
    if(index !== null){
      userList.splice(index,1 );
      this.setState({
        userList: userList
      })
      localStorage.setItem('userList',JSON.stringify(userList));
    }
  }

  findUser = (userId) => {
    var { userList } = this.state;
    var result = null;
    userList.forEach((userObj,index) => {
      if(userObj.id === userId){
        result = index;
      }
    });
    return result;
  }

  render() {
  var { userList, userEditing} = this.state ;// var userList = this.state.userList
    return (
    	<section id="admin-user">
        <div className="blog">
          <div className="container">
          {/*  <div className="row gerenate">
              <button type="submit" className="contact_button" onClick={ this.generateData } >Generate Data</button>
            </div>*/}
            <div className="row">
              <UserTable 
                userList={userList}  
                onUpdateStatus={ this.onUpdateStatus } 
                onDeleteUser={ this.onDeleteUser }
                onUpdateUser={ this.onUpdateUser }
                userObj={ userEditing }/>
              <div className="accordions">
                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center btn-add">
                      <div className="row">Add New</div>
                    </div>
                    <div className="accordion_panel">
                        <UserForm onSubmitUser={this.onSubmit} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </section>
    )
  }
}

export default User;
