import React , { Component } from 'react';
import axios from 'axios';


class Signup extends Component{

    constructor(){
        super();
        this.state = {
            id:'',
            position:'',
            status:''
        }
       
        
    }
    componentDidMount(){
      const { data } = this.props.location.state;
      console.log("params "+data);
      
    }
    
    
    OnSubmit = (e)=>{
      e.preventDefault()
      const Name = this.getName.value;
      const Position = this.getPosition.value;
      const Username = this.getUsername.value;
      const Password = this.getPassword.value;
   
      axios.post(`http://localhost/project_shabu/index.php/login/register`, 
      JSON.stringify({
        'username': Username,
        'password': Password,
        'name': Name,
        'position': Position
      }))
      .then(res => {
        this.setState({
          status: res.data.status,
          id:res.data.data[0].p_id,
          position: res.data.data[0].p_position
         
        
        });
        
        if(this.state.status === true){
          localStorage.setItem('id', this.state.id);
          localStorage.setItem('position',this.state.position);
          
          if(this.state.position == 'MANAGER'){
            this.props.history.push('/');
          }else{
            this.props.history.push('/employee');
          }
         
        }
    
      })
    
      
    }


    render(){
        return(
           
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <div className="login-brand">
                        <img src="../assets/img/stisla-fill.svg" alt="logo" width="100" className="shadow-light rounded-circle"/>
                    </div>

            <div className="card card-primary">
            <div className="card-header"><h4>Register</h4></div>

        <div className="card-body">

        <form  className="needs-validation" noValidate="" onSubmit={this.OnSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" name="name" tabIndex="1" required autoFocus ref={(input)=>this.getName = input} />
            <div className="invalid-feedback">
              Please fill in your name
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position">Position :</label>
            <select name="position" ref={(input)=>this.getPosition = input}>
                <option value="MANAGER">MANAGER</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user">Username</label>
            <input id="user" type="text" className="form-control" name="user" tabIndex="1" required autoFocus ref={(input)=>this.getUsername = input} />
            <div className="invalid-feedback">
              Please fill in your name
            </div>
          </div>

          <div className="form-group">
            <div className="d-block">
              <label htmlFor="password" className="control-label">Password</label>
              
            </div>
            <input id="password" type="password" className="form-control" name="password" tabIndex="2" required ref={(input)=>this.getPassword = input}/>
            <div className="invalid-feedback">
              please fill in your password
            </div>
          </div>

          

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
              Submit
            </button>
          </div>
        </form>
        </div>
            
          </div>
        </div>
      </div>
     
   
        )
    }
}export default Signup;