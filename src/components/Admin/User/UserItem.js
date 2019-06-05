import React, { Component } from 'react';

class UserItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.userObj.id);
  }
  onDeleteUser = () => {
    this.props.onDeleteUser(this.props.userObj.id);
  }
  onUpdateUser = () => {
    this.props.onUpdateUser(this.props.userObj.id);
  }
  render() {
    var { userObj, index } = this.props;
    return (
         <tr key={ index } >
                  <td>{userObj.username}</td>
                  <td>{userObj.fullname}</td>
                  <td>{userObj.email}</td>

                  <td>
                    <i 
                      onClick={this.onUpdateStatus } 
                      ref="status"  
                      data-index={index} 
                      data-status={userObj.status} 
                      className={(userObj.status === true)?"fas fa-check-circle" : "fas fa-times-circle"}></i>
                  </td>
                  <td>
                    <i className="fas fa-eye "></i>
                    <i 
                      onClick={ this.onUpdateUser }
                      className="fas fa-edit"></i>
                    <i 
                      onClick={this.onDeleteUser } 
                      className="fas fa-eraser"></i></td>
                </tr>
    )
  }
}

export default UserItem;
