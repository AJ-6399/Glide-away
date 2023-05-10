import React from 'react'
import Admin from './Login';

export default function Nav() {
  var menuitems=["Home","Packages","Admin"];
  return (
    <div data-testid="navbar" style={{backgroundColor:'black'}}>
    <nav className="navbar navbar-expand-lg bg-warning" >
<div className="container-fluid ">
<div data-testid="navtitle"><a className="navbar-brand" style={{fontSize:30}} href="/">GlideAway</a></div>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div data-testid="menuitem" className="collapse navbar-collapse " id="navbarSupportedContent">
  <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
    <li className="fw-bold">
      <a className="nav-link active" style={{fontSize:20,}} aria-current="page" href="/">{menuitems[0]}</a>
    </li>
    <li data-testid="menuitem" className="fw-bold">
      <a className="nav-link active" style={{fontSize:20,}} href="/packages">{menuitems[1]}</a>
    </li>
    <li data-testid="menuitem" className="fw-bold">
      <a className="nav-link active" style={{fontSize:20,}} href="/dashboard">{menuitems[2]}</a>
    </li>
  </ul>
</div>
<Admin/>
</div>

</nav>
  </div>
  )
}
