import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


 class Step3 extends Component {
   constructor() {
     super() 
     this.state = {
        mortgage: 0,
        rent: 0
    
     }

     this.handleMortgageChange = this.handleMortgageChange.bind(this)
     this.handleRentChange = this.handleRentChange.bind(this)
     this.handleClick = this.handleClick.bind(this)
  
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
    const { name, address, city, St, zipcode} = this.props;
    const { mortgage, rent} = this.state;
      axios.post('/houses', {name: name, address: address, city: city, state: St, zipcode: zipcode, mortgage: mortgage,
      rent: rent}).then(res => {
        console.log('this shit worked')
      })
   }


  render() {
    // const {mortgage, rent} = this.state;
    // const {name , address, city, state, zipcode} = this.props;
    return (
      <div>
        {/* <Link to="/"><button>Cancel</button></Link> */}
        <h3>Recommended Rent: ${this.state.mortgage*1.25}</h3>
        <div className="input-group">
        <h3>Monthly Mortgage Ammount</h3>
        <input onChange={this.handleMortgageChange} value={this.state.mortage} type="text"/>
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


export default connect(mapStateToProps)(Step3)
