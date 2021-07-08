import { useState, useEffect } from 'react'
import MyTable from '../../components/Table/Table'
import MyList from '../../components/List/List'
import MyParagraph from '../../components/Paragraph/Paragraph'
import './Item.css'
function Item(props){
    const [objectLength, setObjectLength]=useState()
    const [longestText, setLongestText]=useState()
    const [shouldDisplay, setShouldDisplay]= useState()
    const [itemCount, setItemCount]=useState()
    let header=[]
    function headers(){
      return  props.data && props.data.map(function(item,index){
            header=[]
          return  header.push(Object.keys(item))
       })
    }
    headers()
    let columns=[]
    let rows=[]
    columns=header[0];
    rows=props.data
   
      useEffect(()=>{
        Object.size = function(obj) {
            var size = 0,
            key;
            for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        let lengthOfObject = Object.size(props.data && props.data[0]);
            setObjectLength(lengthOfObject)
        
        function getTheLongestText(){
            let textCollection=[]
            props.data && props.data.map((item)=>{
                let values=Object.values(item)
                
                    for(let key in values){
                        if(values[key].substring(0,4)=='http'){
                            console.log("heeeee")
                        }else{
                            textCollection.push(values[key])
                            
                        }
                    }
            })
            let longestTextFromTextCollection = props.data &&  textCollection.reduce(
                function (a, b) {
                    return a.length > b.length ? a : b;
                }
            );
            let longestTextLength=props.data && longestTextFromTextCollection.length
            setLongestText(longestTextLength)
        }
        setItemCount(props.data && props.data.length)
        getTheLongestText()
        if(objectLength<4 && itemCount<4){
            if(longestText<22){
                setShouldDisplay('list')
            }else{
                setShouldDisplay('normalText')
            }
        }else{
            setShouldDisplay('table') 
        }
      },[header])
    return(
        <div className="listContainerClass" data-testid="listContainer">
                {
                    props.isLoading && 
                    <div>
                        is loading ...
                    </div>
                }
                {
                  rows &&
                  shouldDisplay==='list' ? <MyList data={rows} key="listkey"/>:
                    shouldDisplay==='table' ? 
                    <MyTable columns={columns} rows={rows}/>:
                     <MyParagraph data={props.data}></MyParagraph>
                }
        </div>
    )
}
export default Item