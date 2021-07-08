import './Image.css'
function Image(props){
    return(
        <div className="imageContainer">
          <img src={props.src} width={props.width} height={props.height} alt="Image here"/>
        </div>
    )
};
export default Image;