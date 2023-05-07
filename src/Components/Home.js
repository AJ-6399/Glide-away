import React from 'react'

export default function Home() {
     const imgurls=[
        "https://ilovetravel.fr/wp-content/uploads/2019/06/image-16-copyright.jpg",
       "https://www.travelandleisure.com/thmb/kA83FmSKKFU5TJkE-jfb7m3JzfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/day-hike-olympic-national-park-WOMENONLY0717-e42dbe8f382a4861a2138fbeb20faa29.jpg",
    "https://media.cntraveler.com/photos/615f55a8eb6bd1314aa47add/16:9/w_2560%2Cc_limit/Outdoor%2520Enthusiasts-2021_GettyImages-451932111.jpg"];
    //Added random imageurl to the array imgurls for home page.
    var random=Math.floor(Math.random()*3);// Getting random of the three image links
  return (
    <div>
      <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="500">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{filter:'brightness(40%)'}} className="d-block" width="1530" height="735" src={imgurls[random]} alt="First slide"/>
      <div className="carousel-caption">
    <h1 style={{fontWeight:"1000",fontSize:50}}>Ready on where to go?</h1>
    <p style={{fontWeight:"700",fontSize:30,color:'orange'}}>We will get it executed</p>
    </div>
    </div>
  </div>
</div>
      </>
    </div>
  )
}
