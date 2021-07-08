import Spliter from '../../Utilities/SplitFields'
import FormatText from '../../Utilities/FormatText'
import MyImage from '../../components/Image/Image'
import ImageChecker from '../../Utilities/ImageUrlChecker'
import MyLink from '../../components/Link/Link'
import HeaderText  from '../HeaderText/HeaderText'
import MyP from '../../components/P/P'
import './Paragraph.css'
import { useHistory, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
function Paragraph(props){
    const history=useHistory()
    return(
        <div className="paragraphContainer">
            {
                props.data && props.data.map((item)=>{
                    return(
                        <div>
                            {
                                Object.entries(item).map((key,value)=>{
                                    let adjustedKey=Spliter(key[0])
                                    let adjustedValue=FormatText(key[1])
                                    return(
                                            <div className="content">
                                                    <HeaderText type="h3" title={adjustedKey}></HeaderText>
                                                    {
                                                        adjustedValue.map((item)=>{
                                                            if (item.substring(0, 4) == 'http'){
                                                            let isImageExist= ImageChecker(item)
                                                                if(isImageExist==='yes'){
                                                                    return(
                                                                            <MyImage src={item} width="60px" height="60px"/>
                                                                    )
                                                                }else{
                                                                    return(
                                                                            <MyLink link={item} target="_blank" title={item}/>
                                                                        )
                                                                }
                                                            }
                                                            return(
                                                                <div className="paragraphP">
                                                                    <MyP text={item}/>
                                                                </div>
                                                                )
                                                            })
                                                    }
                                                
                                            </div>
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
export default Paragraph