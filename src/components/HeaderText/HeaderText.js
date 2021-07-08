import './HeaderText.css'
function HeaderText(props){
    return(
        <div className="headersDiv">
          {
             props.type=='h1' ? <h1>{props.title}</h1>:''
             
          }
          {
              props.type=='h2' ? <h2>{props.title}</h2>:''
          }
          {
              props.type=='h3' ? <h3>{props.title}</h3>:''
          }
          {
              props.type=='h4' ? <h4>{props.title}</h4>:''
          }
           {
              props.type=='h5' ? <h5>{props.title}</h5>:''
          }
           {
              props.type=='h6' ? <h6>{props.title}</h6>:''
          }
        </div>
    )
}
export default HeaderText;