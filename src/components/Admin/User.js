import React, { Component } from 'react';

class User extends Component {

  constructor(props){
    super(props);
    this.state = {
       userList : [
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
      ],
      isActive: true
    };
  }
  changeState = () => {
    var userIndex = this.refs.status.getAttribute("data-index");
    var userStatus = this.refs.status.getAttribute("data-status");
      this.setState({
        userList : [
        {
          'id' : 1,
          'username' : 'admin',
          'password' : '123456',
          'fullname' : 'Quản Trị Hệ Thống',
          'role_id' : 1,
          'status' : 1
        }
      ],
        isActive : false
      })
    
    console.log(this.state);
  }

  render() {
    

    return (
    	<section id="admin-user">
        <div className="blog">
          <div className="container">
            <div className="row">
             <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="tbl-id ">Id</th>
                  <th className="tbl-mormal">Username</th>
                  <th className="tbl-long">Fullname</th>
                  <th className="tbl-id">Status</th>
                  <th className="tbl-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.userList.map((userObj,index) => {
                    return(
                       <tr key={index}>
                        <td>{userObj.id}</td>
                        <td>{userObj.username}</td>
                        <td>{userObj.fullname}</td>
                        <td>
                          <i ref="status"  data-index={index} data-status={userObj.status} onClick={ this.changeState } className={(userObj.status === 1)?"fas fa-check-circle" : "fas fa-times-circle"}></i>
                        </td>
                        <td>
                          <i className="fas fa-eye "></i>
                          <i className="fas fa-edit"></i>
                          <i className="fas fa-eraser"></i></td>
                      </tr>
                      )
                  })
                }
              </tbody>
            </table>
            <div className="accordions">

                  <div className="accordion_container">
                    <div className="accordion d-flex flex-row align-items-center btn-add">
                        <div className="row">Add New</div></div>
                    <div className="accordion_panel">
                        <form action="#" className="contact_form add_form" id="">
                          <input type="text" className="contact_input" placeholder="Username" required="required" ref="username" />
                          <input type="text" className="contact_input" placeholder="Fullname" required="required" ref="fullname" />
                          <input type="email" className="contact_input" placeholder="email"  ref="email" />
                          <br />
                          <button className="contact_button" onClick={ this.submitContact } >Add</button>
                        </form>
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
