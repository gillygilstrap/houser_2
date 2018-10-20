import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';

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


   }



  //  handleClick() {
 
  //   const {name , address, city, state, zipcode} = this.state;
  //     axios.post('/houses', {name: name, address: address, city: city, state: state, zipcode: zipcode}).then(res => {

  //     })
  //  }


  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>Cancel</button></Link>

        <Route component={ Step1 } path="/wizard/step1" />
        <Route component={ Step2 } path="/wizard/step2" />
        <Route component={ Step3 } path="/wizard/step3" />


      </div>
    )
  }
}


export default Wizard
