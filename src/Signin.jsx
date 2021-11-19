import React from "react";
import Keyboard from "./Keyboard.jpg";
const Signin =() =>
{

    return(
        <>
        <div className="container text-center" style={{width:"50%"}}> 
        <div className="text-center p-3">
        <form className="form-signin">
      <img className="mb-4" src={Keyboard} alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2021 copyright Devesh Raj <br/> All rights reserved</p>
    </form>
        </div>
        </div>
        </>
    );

};
export default Signin;