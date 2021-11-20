import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../js/userSlice/userSlice';

import "./profile.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Profile = () => {
    const user = useSelector((state) => state.user.user)
    console.log(user);
    const history = useHistory();
    const dispatch = useDispatch()
    const handlelogout=()=>{
        dispatch(logout())
        history.push("/login");
    }
    AOS.init();

    return (
      
        <div>
        <section className="all">
        <div>
            <h1 className="hash">Welcome {user?user.name:<img src="https://brokerportal.anthem.com/ehb-portlet/images/loading.gif" alt=""/>} !</h1>
       
            {/* <button style={{width:"80%", marginBottom:"18px"}} variant="secondary" onClick={handlelogout} >
                logout
            </button> */}
        
            <div class="carde"  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <div class="card__content">
    <div class="card__content-header">
      <div class="card__content-profile">
        <div class="card__content-profile-image-container">
          <picture class="card__content-profile-picture">

                              {/* image profile */}
            <img class="card__content-profile-image" src={user?user.photo:"upload photo"} />


                
          </picture>
        </div>
        <div class="card__content-profile-details">
          <span class="card__content-profile-name">{user?user.name:"user name"}</span>
          <span class="card__content-profile-job"> {user?user.lastname:"user lastname"}</span>
        </div>
      </div>
      
      <a class="card__content-header-link" href="#">Edit profile</a>
    </div>
    <h1 class="card__content-title">This is my profile</h1>
    <p class="card__content-body">{user?user.profession:"profession"}</p>
  </div>
  
  
</div>

<p style={{paddingTop:"20px"}}>Designed by <a href="https://www.instagram.com/yahya_0017/?hl=fr">yahya elhammi</a> via <a href="https://www.instagram.com/yahya_0017/?hl=fr">go my code</a></p>

        </div>
        </section>



                                        {/* footer */}


        <footer style={{backgroundColor:"black",paddingTop:"7px"}}>
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

export default Profile;
