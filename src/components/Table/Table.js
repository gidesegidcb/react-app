import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import './Table.css'
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
                            return(<th key={item}>{item}</th>)
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
                                return(
                                    <td>
                                      {item2}
                                   </td>
                                ) 
                                })
                            }
                            {
                                <td className="tableBtnDetails">
                                    {/* <div> */}
                                    <Button component={Link}
                                                to={{pathname: `/details`,
                                                    state: {data: item,prevPath: history.location.pathname,
                                                    }
                                                }}
                                                className="btn btn-primary" data-testid="btnDetails">
                                                Details
                                            </Button>
                                    {/* </div> */}
                                    
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