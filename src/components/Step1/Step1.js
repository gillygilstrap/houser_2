import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHouse } from '../../ducks/reducer'
import './step1.css'

 class Step1 extends Component {
   constructor() {
     super() 
     this.state = {
        name: '',
        address: '',
        city: '',
        St: '',
        zipcode: 0
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
       St: e.target.value
     })
   }
   handleZipcodeChange(e) {
     this.setState({
       zipcode: e.target.value
     })
   }

   componentDidMount() {
    const {name, address, city, St, zipcode} = this.props
     this.setState({
        name,
        address,
        city, 
        St,
        zipcode
     })
   }
   


  render() {
  const {name, address, city, St, zipcode} = this.state
    // console.log('----------BANG!!!!----------', this.props);
    return (
      <div className="step-1">  
        <div className="main">      
            <div className="input-group-1">
            <h3 className="">Property Name</h3>
            <input onChange={this.handleNameChange} value={this.state.name} type="text"/>
            </div>
            <br/>
            

            <div className="input-group-2">
            <h3>Address</h3>
            <input onChange={this.handleAddressChange} value={this.state.address} type="text"/>
            </div>

            <div className="three-group">
              <div className="input-group-3">
              <h3>City</h3>
              <input onChange={this.handleCityChange} value={this.state.city} type="text"/>
              </div>

              <div className="input-group-4">
              <h3>State</h3>
              <input onChange={this.handleStateChange} value={this.state.St} type="text"/>
              </div>

              <div className="input-group-5">
              <h3>Zip</h3>
              <input onChange={this.handleZipcodeChange} value={this.state.zipcode} type="text"/>
              </div>
            </div>
          </div>
          <div className="link-box">
             <Link to="/wizard/step2"><button className="travis-was-still-wrong-to-me" onClick={() => this.props.updateHouse(name, address, city, St, zipcode)}>Next Step</button></Link>
          </div>
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

