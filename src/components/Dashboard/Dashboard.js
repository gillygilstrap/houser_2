import React, { Component } from 'react'
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';


 class Dashboard extends Component {
   constructor() {
     super() 
     this.state = {
       houses: []
     }

     this.getAllHouses = this.getAllHouses.bind(this);
     this.handleClick = this.handleClick.bind(this);
     this.componentDidMount = this.componentDidMount.bind(this)
   }

   getAllHouses() {
    axios.get('/houses').then(res => {
      this.setState({
        houses: res.data
      })
    })
   }

   componentDidMount() {
    this.getAllHouses()
   }

   handleClick(id) {
     axios.delete(`/houses/${id}`)
     this.componentDidMount()
   }

  render() {
    
    return (
      <div>
        Dashboard
        <Link to="/wizard"><button>Add New Propertry</button></Link>
        {this.state.houses.map((house,i) => {
          return <House delete={this.handleClick} id={i+1} house={house}/>
        })}
      </div>
    )
  }
}



export default Dashboard
