import React, { Component } from 'react'
import Packagesitem from './Packagesitem';

export class Packagesview extends Component {
    jsonitems=[];
        constructor(){
            super();
            this.state={
             jsonitems: this.jsonitems
            }
        }
        async componentDidMount(){
        let api_url="https://mi-linux.wlv.ac.uk/~2311275/restapi_crud/public/api/posts";
        let data=await fetch(api_url);
        let parsedData=await data.json();
        this.setState({jsonitems:parsedData})
        }

  render() {
    
      return (
        <div className='container my-4'>
        <h2 style={{color:'black'}}><center>Packages</center></h2>
        <div className='row my-4'>
        {this.state.jsonitems.map((element)=>{
            return <div className='col md-3 my-3'key={element.updated_at}>
            <Packagesitem title={element.title} description={element.description.slice(0,30)+"..."} imageUrl={element.imageUrl}/>
            </div>
        }
    )
    }          
      </div>
    </div>
    )
    
  }
}

export default Packagesview
