import React, { Component } from 'react'
import Packagesitem from './Packagesitem';

export class Packagesview extends Component {
    jsonitems=[
        {
        "id": 2,
        "title": "2 updated",
        "description": "2 updated",
        "created_at": "2023-03-17T14:36:38.000000Z",
        "updated_at": "2023-03-17T15:43:54.000000Z"
        },
        {
        "id": 5,
        "title": "third post title",
        "description": "third description",
        "created_at": "2023-03-24T12:40:15.000000Z",
        "updated_at": "2023-03-24T12:40:15.000000Z"
        },
        {
        "id": 6,
        "title": "fourth post title",
        "description": "fourth description",
        "created_at": "2023-03-24T12:40:51.000000Z",
        "updated_at": "2023-03-24T12:40:51.000000Z"
        }
        ]
        constructor(){
            super();
            this.state={
             jsonitems: this.jsonitems,
             loading:false
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
        <div className='container my-3 '>
        <h2 style={{color:'white'}}><center>Packages</center></h2>
        <div className='row'>
        {this.state.jsonitems.map((element)=>{
            return <div className='col md-4 my-3 'key={element.updated_at}>
            <Packagesitem title={element.title} description={element.description}/>
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
