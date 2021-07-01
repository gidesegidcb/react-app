import { Button } from '@material-ui/core';
import { useHistory, Link } from "react-router-dom";
import useStyle from './Styles'
function Item(props){
    const classes=useStyle()
    const history = useHistory();
    return(
        <div className={classes.container} data-testid="listContainer">
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
                                    <div className={classes.list}>
                                        <ul data-testid="listsid">
                                            <li data-testid="itemid" key={value}>
                                                <div className={classes.listItem}>
                                                    <label className={classes.label}>{key[0]}:</label>
                                                    <p className={classes.p}>{key[1]}</p>
                                                    {
                                                        key[1]=='Not found' ? '' :
                                                        <Button component={Link}
                                                        to={{pathname: `/details`,
                                                            state: {data: item,prevPath: history.location.pathname,
                                                            }
                                                        }}
                                                        className={classes.detailbtn} data-testId="btnDetails">
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