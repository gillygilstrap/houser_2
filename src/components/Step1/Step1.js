import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHouse } from '../../ducks/reducer'

 class Step1 extends Component {
   constructor() {
     super() 
     this.state = {
        name: '',
        address: '',
        city: '',
        St: '',
        zipcode: null
     }

     this.handleNameChange = this.handleNameChange.bind(this)
     this.handleAddressChange = this.handleAddressChange.bind(this)
     this.handleCityChange = this.handleCityChange.bind(this)
     this.handleStateChange = this.handleStateChange.bind(this)
     this.handleZipcodeChange = this.handleZipcodeChange.bind(this)

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

   


  render() {
  const {name, address, city, St, zipcode} = this.state
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

        <Link to="/wizard/step2"><button onClick={() => this.props.updateHouse(name, address, city, St, zipcode)}>Next Step</button></Link>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { name, address, city, St, zipcode} = state

  return {
    name,
    address,
    city,
    St,
    zipcode
  }
}


export default connect(mapStateToProps,{ updateHouse })(Step1);

