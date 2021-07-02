import { useHistory} from "react-router-dom";
import './Detail.css'
import MyButton from '../../components/Button'
function Detail(){
    const history = useHistory();
    let data=history.location.state.data
    function back(){
        let path = `/`; 
        history.push(path);
    }
    return(
        <div className="container" data-testid="detailid">
           <div className="details">
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
            <MyButton onClick={()=>back()} title="back"/>
           </div>
        </div>
    )
}
export default Detail