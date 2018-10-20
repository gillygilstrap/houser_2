import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 class Step2 extends Component {
   constructor() {
     super() 
     this.state = {
        img: '',
    
     }

     this.handleImgChange = this.handleImgChange.bind(this)
  
   }

   handleImgChange(e) {
     this.setState({
       ing: e.target.value
     })
   }
   
  

  //  handleClick() {
 
 
  //  }


  render() {
    return (
      <div>
        Wizard
        <Link to="/"><button>Cancel</button></Link>
        
        <div className="input-group">
        <h3>Image Url</h3>
        <input onChange={this.handleImgChange} value={this.state.img} type="text"/>
        </div>
        
        <Link to="/wizard/step1"><button>Previous Step</button></Link>
        <Link to="/wizard/step3"><button>Next Step</button></Link>


      </div>
    )
  }
}


export default Step2
