import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
import { updateImg } from '../../ducks/reducer';
import './step2.css'

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
       img: e.target.value
     })
   }

   componentDidMount() {
    this.setState({
      img: this.props.img
    })
   }
   
  

  //  handleClick() {
 
 
  //  }


  render() {
  
    return (
      <div className="step2-main">        
        <div className="input-group-1a">
        <h3>Image Url</h3>
        <input onChange={this.handleImgChange} value={this.state.img} type="text"/>
        </div>
        
        <Link to="/wizard/step1"><button>Previous Step</button></Link>
        {/* <Link to="/wizard/step3"><button>Next Step</button></Link> */}
        <Link to="/wizard/step3"><button onClick ={() => this.props.updateImg(this.state.img)}>Next Step</button></Link>
        {/* <button onClick ={_ => this.props.updateImg(this.state.img)}>Next Step</button> */}
    
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)

  return {
    img: state.img
  }
}


export default connect(mapStateToProps, { updateImg })(Step2);
