import React,{useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import {UserContext}  from '../../UserContext';
import MyInput from '../../components/Input/Input'
import MyButton from '../../components/Button/Button'
import MyAlert from '../../components/Alert/Alert'
import './Login.css'
import config from '../../SourceConfig/config'
function Login() {
   
    const [myconfig]=useState(config.loginPage)
    const {setUser}=useContext(UserContext)
    const myHistory=useHistory()
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [loginNotice, setLoginNotice]=useState('')
    let userLoginData={
        username:'gide',
        password:'gide'
    }
    function login(){
       if(username==='' || password===''){
           setLoginNotice(myconfig.infoOnEmptyEntry)
       }else{
        if(userLoginData.username===username && userLoginData.password===password){
            setLoginNotice('')
            setUser(true)
            let path = `/Auth`; 
            myHistory.push(path);
        }else{
            setLoginNotice(myconfig.onUsernameOrPasswordMismatch)
        }
       }
        
    }
    return (
      <div className="loginContainer" data-testid="loginContainerTestId">
        <h2>{myconfig.loginTitle}</h2>
        <MyAlert className="alert-danger">{loginNotice}</MyAlert>
        <div className="loginInputContainer">
            <MyInput type="text" placeholder={myconfig.username} onChange={(e)=>setUsername(e.target.value)}/>
            <MyInput type="password" placeholder={myconfig.password} onChange={(e)=>setPassword(e.target.value)}/>
            <MyButton onClick={()=>login()} title={myconfig.submitLoginText} className="btn-primary"/>
        </div>
       
      </div>
    );
}
export default Login