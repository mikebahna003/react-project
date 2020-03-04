import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Url_api from '../Url_api';

export default class Signin extends React.Component{

  constructor(){
    super();
    this.state = {
        id:'',
        position:'',
        status:''
    }
}


OnSubmitLogin = (e)=>{
  e.preventDefault()
  const Username = this.getUsername.value;
  const Password = this.getPassword.value;
  
  axios.post(Url_api('checklogin'), 
  JSON.stringify({
    'username': Username,
    'password': Password
  }))
  .then(res => {
   
  
    if(res.data.status == true){
   this.setState({
      status: res.data.status,
      id:res.data.data[0].p_id,
      position: res.data.data[0].p_position
     
    
    });
    }else{

    }
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
            <div className="card-header"><h4>Login</h4></div>

<div className="card-body">

        <form  className="needs-validation" noValidate="" onSubmit={this.OnSubmitLogin}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" name="user" tabIndex="1" required autoFocus ref={(input)=>this.getUsername = input} />
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
              Login
            </button>
          </div>
        </form>
        </div>
            <div className="mt-5 text-muted text-center">
              Don't have an account?  <Link to={{
                                        pathname: '/register',
                                        state: {
                                          data: "test"
                                        }
                                      }}>Register</Link>
            </div>
            <div className="mt-5 text-muted text-center">
            <Link to="/mobile">Mobile</Link>
            </div>
            <div className="simple-footer">
              Copyright &copy; Stisla 2018
            </div>
            
          </div>
        </div>
      </div>
     
   
            
        );
    };

    
   


}













import React from 'react';


class Login extends React.Component{

  


    render(){
    
    return(
      <div>
        
      <div className="hero-center">
        <div className="container" align="center">
        <div className="card-header"><h4>Login</h4></div>

        <div className="card-body">
    
                <form  className="needs-validation" noValidate="" onSubmit={this.props.OnSubmitLogin}>
                  <div className="form-group">
                    <label htmlFor="name" align="Left">Name</label>
                    <input id="name" type="text" className="form-control" name="user" tabIndex="1" required autoFocus onChange={this.props.onChangeUsername} />
                    <div className="invalid-feedback">
                      Please fill in your name
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="d-block">
                    	<label htmlFor="password" className="control-label">Password</label>
                      <div className="float-right">
                        <a href="#" className="text-small">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input id="password" type="password" className="form-control" name="password" tabIndex="2" required onChange={this.props.onChangePassword}/>
                    <div className="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me"/>
                      <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <a type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4" href="/home">
                      Login
                    </a>
                  </div>
                </form>
                </div>
            </div></div>
      </div>
 
        );
    };

    
   


}
export default Login;