import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import Filter from './views/Filter/Filter'
import Detail from './views/Detail/Detail'
import useStyles from './Styles'
function App() {
  const classes=useStyles()
  return(
    <div className="row">
        <div className="col-md-12" data-testid="appid">
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className={classes.fonts}>
                    <Navbar.Brand href="#home" className={classes.logo}>
                        Company's logo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path="/">
                        <Filter />
                    </Route>
                    <Route path="/about-us">
                        <About />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                    <Route path="/login">
                        <div>This is login page</div>
                    </Route>
                    <Route path="/details">
                        <Detail title="gide" body="hhh"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
) 
}
function About() {
return <h2>This is About us page</h2>;
}
function ContactUs() {
return <h2>This is Contact us page</h2>;
}
function Login() {
return <h2>This is login page</h2>;
}
export default App;
