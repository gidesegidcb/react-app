import MyTable from '../../components/Table/Table'
import './Item.css'
function Item(props){
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
    return(
        <div className="listContainerClass" data-testid="listContainer">
           <div>
            <div>
                {
                    props.isLoading && 
                    <div>
                        is loading ...
                    </div>
                }
                {
                  rows &&
                    <MyTable columns={columns} rows={rows}/>
                }
                 
            </div>
           </div>
        </div>
    )
}
export default Item