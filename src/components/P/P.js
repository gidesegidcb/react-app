import './P.css'
function P(props){
    return(
       <div className="pContainer">
         <p>{props.text}</p>
       </div> 
    )
}
export default P;