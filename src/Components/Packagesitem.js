import React, { Component } from 'react'
export class Packagesitem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
    <div className="card" style={{width: "18rem"}}>
  <img src="https://cdn.cnn.com/cnnnext/dam/assets/170606121333-scotland---travel-destination---shutterstock-512226913.jpg" className="card-img-top" alt="..."/>
  <div className="card-body bg-secondary">
    <h5 className="card-title ">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-sm btn-warning">View itinerary</a>
  </div>
</div>
      </div>
    )
  }
}
export default Packagesitem
