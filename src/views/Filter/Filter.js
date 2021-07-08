import { useState, useEffect } from 'react'
import UseApi from '../../Axios';
import Item from '../Item/Item'
import Language from '../../SourceConfig/config'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../../components/Button/Button';
import MyInput from '../../components/Input/Input'
import MyLink from '../../components/Link/Link'
import MyAlert from '../../components/Alert/Alert'
import HeaderText from '../../components/HeaderText/HeaderText'
import './Filter.css'
function Filter(){
    const [myconfig, setMyconfig]=useState(Language.language.filterPage)
    
    const [selectionInfo, setSelectionInfo]=useState('')
    const [search, setSearch]=useState('');
    const [{ data, isLoading, isError="" }, doFetch] = UseApi(myconfig.routs.urlBasedAllData);
    function MySearch(){
        if(search!==''){
            doFetch({url:myconfig.routs.urlBasedSearch+search,method:'get',data:search})
            setSelectionInfo('')
        }else{
            setSelectionInfo('Select fetching methode')
        }
    }
    function getRandomData(){
        doFetch({url:myconfig.routs.urlBasedAllData,method:'get',data:''})
        setSelectionInfo('')
    }
    return(
        <div >
            <div className="filterContainer text-center" data-testid="filters">
                <HeaderText type="h2" title={myconfig.title.mainTitle}/>
                <MyAlert className="alert-danger">{selectionInfo}</MyAlert>
                <MyInput type="text" placeholder={myconfig.searchBases.inputPlaceholder} onChange={e => setSearch(e.target.value)} data-testid='search'/>
                <MyLink link="#"  onclick={()=>getRandomData()} title={myconfig.searchBases.getRandomData} target=""/>
                <MyButton title={myconfig.searchBases.searchButtonText} onClick={()=>MySearch()} className="btn-primary" data-testid="btnSearch"/>
            </div>
            <div>
            {
                    data ? 
                    data[0].key==='Not found' ? <p>Not found</p>:
                        data[0].key==='There was error'? <p>There was error</p>:
                        <Item data={data} isLoading={isLoading} isError={isError} displayAs={myconfig.searchBases.listShouldDisplayAs}/>:<p></p>
                }
            </div>
                
           
        </div>
    )
}
export default Filter;