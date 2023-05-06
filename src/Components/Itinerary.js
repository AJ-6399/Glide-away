import React,{useState,useEffect} from 'react'
export default function Itinerary() {
    const [title,setTitle]=useState([])//to use setTitle to change state of title
    const [url,setUrl]=useState([])//to use setUrl to change state of url
    const [description,setDescription]=useState([])//to use setDescription to change state of description
  
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
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{filter:'brightness(40%)'}} className="a-block" width="1600" height="600" src={url} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h1 style={{fontWeight:"900",fontSize:50}} >{title}</h1>
  </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{color:'white'}} width="50" height="50" fill="currentColor" className="bi bi-chevron-compact-down my-3" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg>

  <h3 className='my-3' style={{color:"orange",fontWeight:"950",fontSize:30}}>Itinerary</h3>
<div className='container my-3'>
<p style={{fontSize:20,fontWeight:"550",color:'white'}}>{description}</p>
</div>
</div>
</center>
      </>
    </div>
  )
}
