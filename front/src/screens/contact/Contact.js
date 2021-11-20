import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'
import "./contact.css"
const Contact = () => {
    const users=useSelector(state=>state.user.userlist)
    return (
        <div className="kolchay">
            <div className="te7tkolchay">
            <div className="divcontact">
                <div className="titlecontact">
                    <h2 className="hash">Contact us on :</h2>
                </div>
            </div>
            <div className="information">
                <div className="sociale">
                <ul class="socialIcons">
  <li class="facebook"><a href=""><i class="fa fa-fw fa-facebook"></i>Facebook</a></li><br/>
  <li class="twitter"><a href=""><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
  <li class="instagram"><a href=""><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>
  
</ul>
                </div>
                <div className="elmap">
                <img style={{borderRadius:"25px"}} src="Capture.jpg" alt="logo map"/>
                </div>
            </div>
            <div className="community">
                <h2 className="hash">Community</h2>
            </div>
            <div className="showuser">
              {users? users.map((el)=><UserCard user={el}/>):<h1>loadinf...z</h1>}
            </div>
            </div>

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

export default Contact
