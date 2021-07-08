import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import './Table.css'
import Spliter from '../../Utilities/SplitFields'
import FormatText from '../../Utilities/FormatText'
import ImageChecker from '../../Utilities/ImageUrlChecker'
import MyImage from '../../components/Image/Image'
import MyLink from '../../components/Link/Link'
const Table = (props) => {
  return (
    <div className="tableContainer">
      <table className="table table-bordered table-hover" columns={props.headers} rows={props.data}>
          <TableHeader columns={props.columns}></TableHeader>
          <TableBody rows={props.rows}></TableBody>
      </table>
      </div>
    
  );
}
const TableHeader = (props) => {
  return(
        <thead className="thead-dark" key="0">
            {
                <tr key="header-0"> 
                    {
                    props.columns &&  props.columns.map((item)=>{
                            let adjustedKey=Spliter(item)
                            return(<th key={item}>{adjustedKey}</th>)
                    })
                    }
                </tr>
            
            }
        </thead>
  );
}

const TableBody = (props) => {
    const history=useHistory()
    return(
        <tbody key="1">
            {
            props.rows &&  props.rows.map((item,index)=>{
                    return(
                        <tr key={index}>
                            {
                                Object.values(item).map((item2)=>{
                                    let adjustedValue=FormatText(item2)
                                    console.log("adjustedValue",adjustedValue)
                                return(
                                    <td>
                                      {adjustedValue && adjustedValue.map((item)=>{
                                           if (item.substring(0, 4) == 'http'){
                                                let isImageExist= ImageChecker(item)
                                                if(isImageExist==='yes'){
                                                    return(<MyImage src={item} width="40px" height="40px"/>)
                                                }else{
                                                    return(<MyLink link={item} target="_blank" title={item}/>)
                                                }
                                            }
                                          return(<li>{item}</li>)
                                      })}
                                   </td>
                                ) 
                                })
                            }
                            {
                                <td className="tableBtnDetails">
                                    <Button component={Link}
                                        to={{pathname: `/details`,
                                            state: {data: item,prevPath: history.location.pathname,
                                            }
                                        }}
                                        className="btn btn-primary" data-testid="btnDetails">
                                        Details
                                    </Button>
                                </td>
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default Table;