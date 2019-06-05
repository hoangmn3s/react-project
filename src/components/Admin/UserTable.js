import React, { Component } from 'react';
import UserItem from './User/UserItem';

class UserTable extends Component {

  render() {

   var { userList } = this.props;

    var getUser = userList.map((userObj,index) => {
        return (
          <UserItem 
            userObj={userObj} 
            index={index} 
            key={index} 
            onUpdateStatus={this.props.onUpdateStatus}
            onDeleteUser={this.props.onDeleteUser}
            onUpdateUser={this.props.onUpdateUser}
            />
        )
      })
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="tbl-mormal">Username</th>
            <th className="tbl-long">Fullname</th>
            <th className="tbl-id ">Email</th>

            <th className="tbl-id">Status</th>
            <th className="tbl-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {getUser}
        </tbody>
      </table>
    )
  }
}

export default UserTable;
