import './List.css'
function List(props){
    return(
        <div className="listContainer">
            {
                props.data && props.data.map((item)=>{
                    return(
                        Object.entries(item).map((key,value)=>{
                            return(
                                <div className="list">
                                    <ul data-testid="listsid" key={value}>
                                       <label className="">{key[0]}:</label>
                                        <li data-testid="itemid" key={key}>
                                            <div className="">
                                                <p className="">{key[1]}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )
                        
                        })
                    )
                })
            }
        </div>
    )
}
export default List;