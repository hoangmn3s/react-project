import React, { Component } from 'react';

class User extends Component {


  render() {
    var userList = [
      {
        'id' : 1,
        'username' : 'admin',
        'password' : '123456',
        'fullname' : 'Quản Trị Hệ Thống',
        'role_id' : 1,
        'status' : 1
      },
      {
        'id' : 2,
        'username' : 'hoangmn',
        'password' : '123456',
        'fullname' : 'Mai Ngọc Hoàng',
        'role_id' : 2,
        'status' : 1
      },
      {
        'id' : 3,
        'username' : 'user01',
        'password' : '123456',
        'fullname' : 'Người Dùng O1',
        'role_id' : 2,
        'status' : 3
      },
      {
        'id' : 4,
        'username' : 'user02',
        'password' : '123456',
        'fullname' : 'Người Dùng O2',
        'role_id' : 3,
        'status' : 1
      }
    ];

    return (
    	<section id="admin-user">
        <div className="blog">
          <div className="container">
            <div className="row">
             <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Fullname</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userList.map((userObj,index) => {
                    return(
                       <tr key={index}>
                        <td>{userObj.id}</td>
                        <td>{userObj.username}</td>
                        <td>{userObj.fullname}</td>
                        <td><i class="fas fa-eye"></i><i class="fas fa-edit"></i><i class="fas fa-eraser"></i></td>
                      </tr>
                      )
                    
                  })
                }
                
              </tbody>
            </table> 
            </div>
          </div>
        </div>
        </section>
    )
  }
}

export default User;
