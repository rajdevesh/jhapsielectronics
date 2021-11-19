import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() =>{

    return(
        <>
             <nav class="navbar navbar-expand-md bg-dark navbar-dark  justify-content-center">

<NavLink class="navbar-brand" to="#">Jhapsi Electronics</NavLink>


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
</nav>
    
    <nav className="navbar navbar-expand-md bg-danger navbar-dark">

  <a className="navbar-brand" href="#">Jhapsi's Electronics</a>

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
      <NavLink className="nav-link  pl-5 pr-5" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5  pl-4 pr-4" to="Album">Mac</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Ipad">ipad</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Iphone">Phones</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Carousel">Wearables</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Phone">Pricing</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Checkout">Cart</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link pl-5 pr-5 pl-4 pr-4" to="Signin">Sign In</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
};
export default Navbar;