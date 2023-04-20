import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
        <div class='row g-3 mx-2 mb-4 '>
        <div className="col-auto ">
    <label for="exampleFormControlInput1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="col-auto">
    <label for="exampleFormControlInput1" className="form-label"></label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="password" />
  </div>
</div>
    )
  }
}

export default Admin
