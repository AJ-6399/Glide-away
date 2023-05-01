import React, { Component } from 'react'
export class Packagesitem extends Component {
  render() {
    let {title,description,imageUrl}=this.props;
    return (
      <div>
    <div className="card" style={{width: "18rem"}}>
  <img data-testid="image" height={250} width={286} src={imageUrl} alt=""/>
  <div className="card-body bg-secondary">
    <h4 className="card-title ">{title}</h4>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-sm btn-warning">View itinerary</a>
  </div>
</div>
      </div>
    )
  }
}
export default Packagesitem
