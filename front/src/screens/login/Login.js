import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { loginUser } from '../../js/userSlice/userSlice';
import "../register/register.css"
const Login = () => {
  const [login, setlogin] = useState({
 
    email: "",
    password:"",
});
const history =useHistory();
const dispatch = useDispatch();
const handlelogin=(e)=>{
  e.preventDefault();
    dispatch(loginUser(login))
   setTimeout(()=>{ history.push("/Profile"); },1000);
};
    return (
      <div>
        <div className='logscreen'>
          <div className="box1">
            <Form>
                <h1 className="hash">Log in</h1>
                 
                <Form.Group className="mb-3" >
    <Form.Label className="label" style={{fontStyle:"obtique",color:"#957bda"}}>Email address</Form.Label>
    <Form.Control style={{width:"80%"}} type="email" placeholder="Enter email" 
        onChange={(e)=> setlogin({...login,email: e.target.value})} />
        
    <Form.Text className="text-muted">
      Dont share your email.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label className="label" style={{ fontStyle:"obtique",color:"#957bda"}}>Password</Form.Label>
    <Form.Control style={{width:"80%"}} type="password" placeholder="Password" 
        onChange={(e)=> setlogin({...login,password: e.target.value})} />
        
  </Form.Group>
  
  <Button style={{width:"80%", marginBottom:"18px",}}  onClick={handlelogin}>
    Submit
  </Button>
  <h5 style={{color:"#8c8c8c"}}>If you dont have acount <Link to='/register'>Sign up</Link> </h5>
</Form>
</div>  
<div className="box2">
  <img src="maxim.jpg" alt="stanna chway"/>
  </div>   
  
        </div><footer style={{backgroundColor:"black",paddingTop:"7px"}}>
        <div class="container-fluid mt-5">
    <div class="carda">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                        <h1 class="font-weight-bold mr-2 px-3" style={{color:"#16151a", backgroundColor:"#957bda"}}> P </h1>
                        <h1 style={{color: "#957bda"}}>Library</h1>
                    </div>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div class="social mt-2 mb-3"> <i class="fa fa-facebook-official fa-lg"></i> <i class="fa fa-instagram fa-lg"></i> <i class="fa fa-twitter fa-lg"></i> <i class="fa fa-linkedin-square fa-lg"></i> <i class="fa fa-facebook"></i> </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Services</h5>
                <ul>
                    <li>Book services</li>
                    <li>Book rental</li>
                    <li>7 days available</li>
                    <li>Research</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Building</h5>
                <ul class="card-text">
                    <li>Open space</li>
                    <li>Smart Office</li>
                    <li>quiet </li>
                    
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Society</h5>
                <ul class="card-text">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style={{fontSize:"10px;"}}>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> 2021°</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-right mr-4 d-flex policy">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
</div>
          </footer>
        </div>
    )
}

export default Login
