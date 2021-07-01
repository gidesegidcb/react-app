import { useHistory} from "react-router-dom";
import useStyle from './Styles'
function Detail(){
    const classes=useStyle()
    const history = useHistory();
    let data=history.location.state.data
    function back(){
        let path = `/`; 
        history.push(path);
    }
    return(
        <div className={classes.container} data-testid="detailid">
           <div className={classes.details}>
           {
              Object.entries(data).map((key,value)=>{
                 return(
                     <div key={value}>
                         <label>{key[0]}</label>
                         <p>{key[1]}</p>
                     </div>
                 ) 
              })
            }
            <button onClick={()=>back()} >Back</button>
           </div>
        </div>
    )
}
export default Detail