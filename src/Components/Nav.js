import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" color="Colors.green" href="/">GlideAway</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">  
        <button className="btn btn-outline-success" >Admin Login</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav
