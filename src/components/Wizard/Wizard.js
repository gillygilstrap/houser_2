import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 class Wizard extends Component {
   constructor() {
     super() 
     this.state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: null
     }

     this.handleNameChange = this.handleNameChange.bind(this)
     this.handleAddressChange = this.handleAddressChange.bind(this)
     this.handleCityChange = this.handleCityChange.bind(this)
     this.handleStateChange = this.handleStateChange.bind(this)
     this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
     this.handleClick = this.handleClick.bind(this)
   }

   handleNameChange(e) {
     this.setState({
       name: e.target.value
     })
   }
   
   handleAddressChange(e) {
     this.setState({
       address: e.target.value
     })
   }
   handleCityChange(e) {
     this.setState({
       city: e.target.value
     })
   }
   handleStateChange(e) {
     this.setState({
       state: e.target.value
     })
   }
   handleZipcodeChange(e) {
     this.setState({
       zipcode: e.target.value
     })
   }

   handleClick() {
 
    const {name , address, city, state, zipcode} = this.state;
      axios.post('/houses', {name: name, address: address, city: city, state: state, zipcode: zipcode}).then(res => {

      })
   }


  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>Cancel</button></Link>
        
        <div className="input-group">
        <h3>Name</h3>
        <input onChange={this.handleNameChange} value={this.state.name} type="text"/>
        </div>
        
        <div className="input-group">
        <h3>Address</h3>
        <input onChange={this.handleAddressChange} value={this.state.address} type="text"/>
        </div>

        <div className="input-group">
        <h3>City</h3>
        <input onChange={this.handleCityChange} value={this.state.city} type="text"/>
        </div>

        <div className="input-group">
        <h3>State</h3>
        <input onChange={this.handleStateChange} value={this.state.state} type="text"/>
        </div>

        <div className="input-group">
        <h3>Zipcode</h3>
        <input onChange={this.handleZipcodeChange} value={this.state.zipcode} type="text"/>
        </div>

        <Link to="/"><button onClick={this.handleClick}>Complete</button></Link>

      </div>
    )
  }
}


export default Wizard
