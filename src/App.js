import React,{useState , useMemo} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import Filter from './views/Filter/Filter'
import Detail from './views/Detail/Detail'
import MyAuth from './views/MyAuth/MyAuth'
import './App.css'
import { UserContext } from './UserContext';
import Login from './views/Login/Login'
import PageNoutFound from './views/PageNotFound/PageNotFound'
function App() {
  const [user, setUser]=useState(false)
  const providerValue=useMemo(()=>({user,setUser}),[user,setUser]);
  return(
    <div className="row">
        <div className="col-md-12" data-testid="appid">
        <UserContext.Provider value={providerValue}>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="Navbar">
                    <Navbar.Brand href="#home" className="logo">
                        Company's logo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {
                            user===false ?
                             <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about-us">About us</Nav.Link>
                                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                              </Nav>
                            :
                             <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/" className="pull-right">Log out</Nav.Link>
                              </Nav>
                       }
                    </Navbar.Collapse>
                </Navbar>
                <br />
                
                <Switch>
                    {
                      user===false ?
                      <Route exact path="/">
                         <Filter />
                      </Route>
                        :
                        <Route path="/Auth">
                        <MyAuth/>
                       </Route>
                    }
                    <Route path="/about-us">
                        <About />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/details">
                        <Detail/>
                    </Route>
                    <Route component={PageNoutFound}/>
                </Switch>
                
            </Router>
            </UserContext.Provider>
        </div>
    </div>
) 
}
function About() {
  // const {user, setUser}=useContext(UserContext)
  return (
    <div>
      <h2>This is About us page</h2>
      {/* <p>{user}</p> */}
    </div>
  );
}
function ContactUs() {
  // const {user, setUser}=useContext(UserContext)
  return (
    <div>
      <h2>This is contact us page</h2>
      {/* <p>{user}</p> */}
    </div>
  );
}

export default App;
//NotFound.js

