import './Link.css'
function Link(props){
    return(
        <div className="linkContainer">
            <a href={props.link} onClick={props.onclick} target={props.target}>{props.title}</a>
        </div>
    )
}
export default Link