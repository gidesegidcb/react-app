import './Label.css'
function Label(props){
    console.log("props at lable",props)
    return(
        <div className="labelContainer">
            <label>{props.text}:</label>
        </div>
    )
}
export default Label;