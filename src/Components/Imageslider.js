import React, { Component } from 'react'

export class Imageslider extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/170606121333-scotland---travel-destination---shutterstock-512226913.jpg"  className="d-block w-70 h-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/paris-france-19597218.jpg" className="d-block w-50 h-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/170606121333-scotland---travel-destination---shutterstock-512226913.jpg" className="d-block w-50 h-100" alt="..."/>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default Imageslider
