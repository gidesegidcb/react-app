import {useState,useEffect} from 'react'
import { useHistory} from "react-router-dom";
import './Detail.css'
import MyButton from '../../components/Button/Button'
import MyList from '../../components/List/List'
import UseApi from '../../Axios';
import config from '../../SourceConfig/config'
function Detail(){
    const [myconfig]=useState(config.detailPage)
    const history = useHistory();
    const [{ data, isLoading, isError="" }, doFetch] = UseApi();
    let inputData=history.location.state.data
    useEffect(()=>{
        doFetch({url:myconfig.router.urlDetails,method:'post',data:inputData})
    },[inputData])
    console.log("data..",data)
    function back(){
        let path = `/`; 
        history.push(path);
    }
    return(
        <div className="container" data-testid="detailid">
            <div className="detailsTitle">
                <h2>
                 {myconfig.title.mainTitle}
                </h2>
                <h6>{myconfig.title.subTitle}</h6>
               
            </div>
            <div className="details">
                {
                    isLoading
                }
                {
                    isError
                }
                <MyList data={data} key="listkey"/>
           </div>
            <div className="btnBackContainer">
              <MyButton onClick={()=>back()} title={myconfig.others.btnBack} className="btn-primary pull-right" data-testid="back"/> 
            </div>
        </div>
    )
}
export default Detail