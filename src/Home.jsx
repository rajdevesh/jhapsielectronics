import React from 'react';
import iphone9 from "./iphone9.jpg";
import Oneplus from "./Oneplus.png";
import MotoG from "./MotoG.jpg";
import Xperiapro from "./Xperiapro.png";
import Pixel4A from "./Pixel4A.jpg";
import Zflip from "./Zflip.png";
import Zenfone8 from "./Zenfone8.png";
import elugaray600 from "./elugaray600.jpg";


function Home()
{
    return(

    
    <>
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Know me</h4>
              <p className="text-muted">I'm Devesh Raj, Student of School of Language and Litreture, Jawaharlal Nehru University, Delhi.
              I'm also a programmer who messed up with Web Designing and Development, I usually deals in Python, C, C++, Java and Machine Learning also.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://twitter.com/Ideveshraj" className="text-white">Follow on Twitter</a></li>
                <li><a href="https://www.instagram.com/ideveshraj/" className="text-white">Follow on Instagram</a></li>
                <li><a href="mailto:rajdevsh2001@yahoo.com" className="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>About Developer</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
   

    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-lighter">Jhapsi's</h1>
        <p className="lead font-weight-normal">Let Your Dreams Come True Here on Jhapsi's </p>
        <a className="btn btn-outline-secondary" href="#">Buy Now on Jhapsi's</a>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
        <h2 className="display-5">iPhone 13 pro</h2>
          <p className="lead">Oh. So. Pro.</p>
        </div>
        
        <div> <img src={iphone9} height="300px" width="80%"/>
      </div>
      </div>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">One Plus 9R 5G</h2>
          <p className="lead">Never Settle.</p>
        </div>
        
        <div>
        <img src={Oneplus} height="300px" width="80%"/>
        </div>
      </div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Samsung Galaxy Z</h2>
          <p className="lead">Fold3 | Flip3 5G.</p>
        </div>
        <div>
        <img src={Zflip} height="300px" width="80%"/>
        </div>
      </div>
      <div className="bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Google Pixel 4a.</h2>
          <p className="lead">Great help at your fingertips.</p>
        </div>
        <div>
        <img src={Pixel4A} height="300px" width="80%"/>
        </div>
      </div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 class="display-5">Asus Zenfone 8</h2>
          <p className="lead">Big on Performane. Compact in Size.</p>
        </div>
        <div>
        <img src={Zenfone8} height="300px" width="100%"/>
        </div>
      </div>
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Moto G</h2>
          <p className="lead">Pure Ultra Wide Display. 2 Day Battery.</p>
        </div>
        <div>
        <img src={MotoG} height="300px" width="50%"/>
        </div>
      </div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Panasonic ElugaRay600</h2>
          <p className="lead">#SoSleekSoPowerful.</p>
        </div>
        <div>
        <img src={elugaray600} height="300px" width="80%"/>
        </div>
      </div>
      <div className="bg-info mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Sony Xperia Pro</h2>
          <p className="lead">Xperia pro with 5G sub-6 for High-Speed Data Transfer.</p>
        </div>
        <div>
        <img src={Xperiapro} height="300px" width="80%"/>
        </div>
      </div>
    </div>

    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small className="d-block mb-3 text-muted">© 2021 Devesh Raj</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Cool stuff</a></li>
            <li><a className="text-muted" href="#">Random feature</a></li>
            <li><a className="text-muted" href="#">Team feature</a></li>
            <li><a className="text-muted" href="#">Stuff for developers</a></li>
            <li><a className="text-muted" href="#">Another one</a></li>
            <li><a className="text-muted" href="#">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Look Around</a></li>
            <li><a className="text-muted" href="#">Grab it</a></li>
            <li><a className="text-muted" href="#">Get yours</a></li>            
            <li><a className="text-muted" href="#">That's All</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Business</a></li>
            <li><a className="text-muted" href="#">Experience</a></li>
            <li><a className="text-muted" href="#">Governence</a></li>
            <li><a className="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="mailto: rajdevesh2001@yahoo.com"> Contact Team</a></li>
            <li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>
            <li><a className="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>


      
    </>
    );
}
export default Home;