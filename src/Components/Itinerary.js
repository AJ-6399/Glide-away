import React,{useState,useEffect} from 'react'

export default function Itinerary() {
    const [title,setTitle]=useState([])
    const [url,setUrl]=useState([])
    const [description,setDescription]=useState([])
  
useEffect(() => {
         setTitle(localStorage.getItem("title"));
         setUrl(localStorage.getItem("imageUrl"));
         setDescription(localStorage.getItem("description"));
       }, [])
  return (
    <div>
      <>
      <center>
      <div id="carouselExampleIndicators" className="carousel slide">
      <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{filter:'brightness(40%)'}} className="a-block" width="1600" height="600" src={url} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h1 style={{fontWeight:"900",fontSize:50}} >{title}</h1>
  </div>
    </div>
  </div>
  <h3 className='my-3' style={{color:"orange",fontWeight:"950",fontSize:30}}>Itinerary</h3>
<div className='container'>
<p style={{fontSize:20,fontWeight:"550"}}>{description} </p>
</div>
</div>
</center>
      </>
    </div>
  )
}
