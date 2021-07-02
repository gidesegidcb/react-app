import { Button } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import './Item.css'
function Item(props){
    const history = useHistory();
    return(
        <div className="listContainer" data-testid="listContainer">
           <div>
            <div>
                {
                    props.isLoading && 
                    <div>
                        is loading ...
                    </div>
                }
            </div>
            <div>
                {
                    props.data && props.data.map((item)=>{
                        return(
                            Object.entries(item).map((key,value)=>{
                                return(
                                    <div className="">
                                        <ul data-testid="listsid">
                                            <li data-testid="itemid" key={value}>
                                                <div className="">
                                                    <label className="">{key[0]}:</label>
                                                    <p className="">{key[1]}</p>
                                                    {
                                                        key[1]=='Not found' ? '' :
                                                        <Button component={Link}
                                                        to={{pathname: `/details`,
                                                            state: {data: item,prevPath: history.location.pathname,
                                                            }
                                                        }}
                                                        className="btn btn-primary" data-testId="btnDetails">
                                                        Details
                                                    </Button>
                                                    }
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
           </div>
        </div>
    )
}
export default Item