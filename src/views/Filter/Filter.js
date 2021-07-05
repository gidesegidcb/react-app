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
    const [search, setSearch]=useState('');
    const [allData, setAllData]=useState('');
    const [{ data, isLoading, isError="" }, doFetch] = UseApi(myconfig.routs.urlBasedAllData);
    const [listAllDataCheckbox, setlistAllDataCheckbox]=useState(false)
    const [listAllChecked, setListAllChecked] = useState(false)
    const [searchDisplay, setSearchDisplay]=useState(false);

    function MySearch(e){
        e.preventDefault()
        if(search!==''){
            doFetch({url:myconfig.routs.urlBasedSearch+search,method:'get',data:search})
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
        setSearch('')
        setlistAllDataCheckbox(!listAllDataCheckbox)
        setAllData('allData')
        setSearchDisplay(false) 
    }
    function getSearchCheckBox(){
        if(listAllChecked===true){
            setListAllChecked(false)
        }
        setSearchDisplay(!searchDisplay)
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
                            <MyInput type="radio" onClick={()=>getSearchCheckBox()} checked={searchDisplay} readOnly data-testid="checkbox1"/> {myconfig.searchBases.selectBasedSearch}
                        </div>
                        <div className="inputParams">
                            {listAllChecked && <div></div>}
                            {searchDisplay && <MyInput type="text" placeholder={myconfig.searchBases.selectBasedSearch} onChange={e => setSearch(e.target.value)} data-testid='search'/>}
                            <form onSubmit={MySearch}>
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