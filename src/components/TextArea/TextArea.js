function TextArea(props){
    return(
        <div>
            <TextArea col={props.cols} rows={props.rows}>
            {props.content}
            </TextArea>
        </div>
    )
}
export default TextArea