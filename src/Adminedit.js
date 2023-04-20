import React, { Component } from 'react'

export class Adminedit extends Component {
  render() {
    return (
      <div>
       <div className="container mx-7 my-3 ">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="col">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> 
      </div>
    )
  }
}

export default Adminedit
