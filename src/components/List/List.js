import { useHistory, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import './List.css'
import Spliter from '../../Utilities/SplitFields'
import FormatText from '../../Utilities/FormatText'
import MyImage from '../../components/Image/Image'
import ImageChecker from '../../Utilities/ImageUrlChecker'
import MyLink from '../../components/Link/Link'
import MyLabel from '../../components/Label/Label'
function List(props){
    const history=useHistory()
    return(
        <div className="listContainer">
            {
                props.data && props.data.map((item)=>{
                    return(
                        <div>
                            { Object.entries(item).map((key,value)=>{
                                    let adjustedKey=Spliter(key[0])
                                    let adjustedValue=FormatText(key[1])
                                    return(
                                            <ul data-testid="listsid" key={value} className="">
                                                        <MyLabel text={adjustedKey}/>
                                                        {
                                                        adjustedValue.map((item)=>{
                                                                if (item.substring(0, 4) == 'http'){
                                                                    let isImageExist= ImageChecker(item)
                                                                    if(isImageExist==='yes'){
                                                                        return(<li className="" key={key}><MyImage src={item} width="60px" height="60px"/></li>)
                                                                    }else{
                                                                        return(<li className="" key={key}><MyLink link={item} target="_blank" title={item}/></li>)
                                                                    }
                                                                }else{
                                                                    return(<li className="" key={key}>{item}</li>)
                                                                }
                                                                
                                                        })
                                                    }
                                            </ul>
                                    )
                                
                                })
                            }
                            <Button component={Link}
                                to={{pathname: `/details`,
                                    state: {data: item,prevPath: history.location.pathname,
                                    }
                                }}
                                className="btn btn-primary pull-right" data-testid="btnDetails">
                                Details
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default List;