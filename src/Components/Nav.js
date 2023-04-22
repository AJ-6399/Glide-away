import React, { Component } from 'react'
import Admin from './Login'

export class Nav extends Component {
  render() {
    return (
      <div style={{backgroundColor:'black'}}>
        <nav className="navbar navbar-expand-lg bg-warning" >
  <div className="container-fluid ">
    
    <a className="navbar-brand" style={{fontSize:30}} href="/">GlideAway</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="fw-bold">
          <a className="nav-link active" style={{fontSize:20,}} aria-current="page" href="/">Home</a>
        </li>
        <li className="fw-bold">
          <a className="nav-link active" style={{fontSize:20,}} href="/">Packages</a>
        </li>
        <li className="fw-bold">
          <a className="nav-link active" style={{fontSize:20,}} href="/">Contact Us</a>
        </li>
      </ul>
      <Admin/>
       
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav
