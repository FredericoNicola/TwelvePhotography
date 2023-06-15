import React from "react";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
    return(
        <>
        <Router>
        <Navbar />

          <Switch>
            <Route path='/' component={Home} exact> <Home/> </Route>
            <Route path='/Portfolio' component={Portfolio} exact> <Portfolio/> </Route>
            <Route path='/Contact' component={Contact} exact> <Contact/> </Route>
            <Route path='/About' component={About} exact> <About/> </Route>
          </Switch>

        </Router>
        </>

    )
}

export default App