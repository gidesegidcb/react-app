import React,{useState , useMemo} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'
import Filter from './views/Filter/Filter'
import Detail from './views/Detail/Detail'
import MyAuth from './views/MyAuth/MyAuth'
import './App.css'
import { UserContext } from './UserContext';
import Login from './views/Login/Login'
import PageNoutFound from './views/PageNotFound/PageNotFound'
import Language from './SourceConfig/config'
import HeaderText from './components/HeaderText/HeaderText';
import MyP from './components/P/P'
function App() {
  const [user, setUser]=useState(false)
  const providerValue=useMemo(()=>({user,setUser}),[user,setUser]);
  const [myconfig]=useState(Language.language.menu)
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
                                <Nav.Link href="/">{myconfig.home}</Nav.Link>
                                <Nav.Link href="/about-us">{myconfig.about}</Nav.Link>
                                <Nav.Link href="/contact-us">{myconfig.contact}</Nav.Link>
                                <Nav.Link href="/login">{myconfig.login}</Nav.Link>
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
  const [myconfig]=useState(Language.language.about)
  return (
    <div className="text-center">
      <HeaderText type='h1' title={myconfig.title}/>
      <MyP text={myconfig.mainContent}></MyP>
    </div>
  );
}
function ContactUs() {
  // const {user, setUser}=useContext(UserContext)
  const [myconfig]=useState(Language.language.contact)
  return (
    <div className="text-center">
       <HeaderText type='h1' title={myconfig.title}/>
      {
        
          <MyP text={myconfig.mainContent}></MyP>
        
      }
    </div>
  );
}

export default App;
//NotFound.js

