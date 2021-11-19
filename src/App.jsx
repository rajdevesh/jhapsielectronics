import React from "react";
import Home from './Home';
import Phone from './Phone';
import Album from './Album';
import Signin from "./Signin";
import Checkout from "./Checkout";
import Carousel from "./Carousel";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import {Route,Switch} from 'react-router-dom';
import Navbar from "./Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Signin" component={Signin}/>
        <Route exact path="/Checkout" component={Checkout}/>
        <Route exact path="/Carousel" component={Carousel}/>
        <Route exact path="/Album" component={Album}/>
        <Route exact path="/Iphone" component={Iphone}/>
        <Route exact path="/Ipad" component={Ipad}/>
        <Route exact path="/Phone" component={Phone}/>
    </Switch>
    </>
  );
}

export default App;
