import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 class Step3 extends Component {
   constructor() {
     super() 
     this.state = {
        mortgage: '',
        rent: '',
        recRent: '',
    
     }

     this.handleMortgageChange = this.handleMortgageChange.bind(this)
     this.handleRentChange = this.handleRentChange.bind(this)
  
   }

   handleMortgageChange(e) {
     this.setState({
       mortgage: e.target.value
     })
   }
   
   handleRentChange(e) {
     this.setState({
       rent: e.target.value
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
        <h3>Monthly Mortgage Ammount</h3>
        <input onChange={this.handleMortageChange} value={this.state.mortage} type="text"/>
        </div>
        
        <div className="input-group">
        <h3>Desired Monthly Rent</h3>
        <input onChange={this.handleRentChange} value={this.state.rent} type="text"/>
        </div>

        
        <Link to="/wizard/step2"><button>Previous Step</button></Link>

        <Link to="/"><button onClick={this.handleClick}>Complete</button></Link>

      </div>
    )
  }
}


export default Step3
