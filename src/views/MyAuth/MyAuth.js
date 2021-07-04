import React,{ useContext } from 'react';
import MyAlert from '../../components/Alert/Alert'
import MyButton from '../../components/Button/Button'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../UserContext';
import './MyAuth.css'
function MyAuth(){
    const {setUser}=useContext(UserContext)
    const myHistory=useHistory()
    function logout(){
        setUser(false)
        let path = `/`; 
        myHistory.push(path);
    }
    return(
        <div className="authDiv" data-testid="authDiv">
        <MyAlert className="alert-info">You've loged In  hoora</MyAlert>
        <MyButton title="log out" onClick={()=>logout()}/>
        </div>
    )
}
export default MyAuth