import { useState } from 'react'
import UseApi from '../../Axios';
import Item from '../Item/Item'
import config from '../../SourceConfig/config'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../../components/Button/Button';
import MyInput from '../../components/Input/Input'
import MyAlert from '../../components/Alert/Alert'
import './Filter.css'
function Filter(){
    const [myconfig]=useState(config.filterPage)
    const [selectionInfo, setSelectionInfo]=useState('')
    const [field1, setField1]=useState('');
    const [allData, setAllData]=useState('');
    const [{ data, isLoading, isError="" }, doFetch] = UseApi(myconfig.routs.urlBasedAllData);
    const [listAllDataCheckbox, setlistAllDataCheckbox]=useState(false)
    const [listAllChecked, setListAllChecked] = useState(false)
    const [field1Display, setField1display]=useState(false);

    function search(e){
        e.preventDefault()
        if(field1!==''){
            doFetch({url:myconfig.routs.urlBasedField1+field1,method:'get',data:field1})
            setSelectionInfo('')
            
        }else if(allData!==''){
            doFetch({url:myconfig.routs.urlBasedAllData,method:'get',data:''})
            setSelectionInfo('')
        }else{
            setSelectionInfo('Select fetching methode')
        }
    }
    function listAllDataCheckBox(){
        setSelectionInfo('')
        setField1('')
        setlistAllDataCheckbox(!listAllDataCheckbox)
        setAllData('allData')
        setField1display(false) 
    }
    function getField1CheckBox(){
        if(listAllChecked===true){
            setListAllChecked(false)
        }
        setField1display(!field1Display)
        setlistAllDataCheckbox(false)
    }
    return(
        <div className="filterContainer">
            <div className="col-md-12">
                    <div data-testid="filters" className="filterParams">
                        <div className="">
                            <h2>{myconfig.listTitle.mainTitle}</h2>
                        </div>
                        <div className="paramSelection">
                            <MyAlert className="alert-danger">{selectionInfo}</MyAlert>
                            <MyInput type="radio" onClick={()=>listAllDataCheckBox()} checked={listAllDataCheckbox} readOnly data-testid="listAllDataCheckbox"/> {myconfig.searchBases.selectAll}
                            <MyInput type="radio" onClick={()=>getField1CheckBox()} checked={field1Display} readOnly data-testid="checkbox1"/> {myconfig.searchBases.selectBasedField1}
                        </div>
                        <div className="inputParams">
                            {listAllChecked && <div></div>}
                            {field1Display && <MyInput type="text" placeholder={myconfig.searchBases.selectBasedField1} onChange={e => setField1(e.target.value)} data-testid='process'/>}
                            <form onSubmit={search}>
                                <MyButton  type="submit" title='Search' className="btn-primary" data-testid="btnSearch"/>
                            </form>
                        </div>
                    </div>
                    <div className="resultContainer">
                            {
                               data ? 
                                data[0].key==='Not found' ? <p>Not found</p>:
                                  data[0].key==='There was error'? <p>There was error</p>:
                                   <Item data={data} isLoading={isLoading} isError={isError}/>:<p></p>
                            } 
                    </div>
           </div>
        </div>
    )
}
export default Filter;