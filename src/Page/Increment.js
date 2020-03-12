import React, { Component } from 'react'
import './Increment.css';
import {connect} from 'react-redux';


class Increment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      id: "",
      name: ""
    
     
    };
  }

  componentDidMount(){
    const id = this.props.id;
    const name = this.props.name;
    const amount = this.props.amount;
  
    this.setState({
      id:id,
      name:name,
      quantity:amount
    })
    
  }

  IncrementItem = () => {
    
    if(this.state.quantity > 9) {

    }else {
        const amount = parseInt(this.state.quantity)+1;
        this.setState({
            quantity: amount 
        });
        
        
        const data = {
      
          name:this.state.name,
          amount:amount,
       
      }
      this.props.dispatch({
          type:'UPDATE',
          id:this.state.id,
          data:data
      });
    }
  }

  DecreaseItem = () => {
    const amount = parseInt(this.state.quantity)-1;
    
    if(this.state.quantity <= 1) {
     
    }else {
      this.setState({
        quantity: amount 
    });
    const data = {
      
      name:this.state.name,
      amount:amount,
   
  }
  this.props.dispatch({
      type:'UPDATE',
      id:this.state.id,
      data:data
  });
    }
  }

 

    render() {
        return (
           
        
       
          
              <div className="number-input-container">
                <button type="button" className="button-decrement" onClick={this.DecreaseItem} />
                <div className="number-input">
                  <input type="number" className="number-input-text-box" value={this.state.quantity} ref={(input)=>this.getAmount = input}/>
                </div>
                <button type="button" className="button-increment" onClick={this.IncrementItem} />
               </div>
          
         
          
        )
    }
}export default  connect()(Increment);
