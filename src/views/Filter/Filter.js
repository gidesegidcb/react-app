import { useState} from 'react'
import UseApi from '../../Axios';
import useStyle from './Styles'
import Item from '../Item/Item'
import config from '../../config/config'
import 'bootstrap/dist/css/bootstrap.min.css';
function Filter(){
    const classes=useStyle()
    const [selectionInfo, setSelectionInfo]=useState('')

    const [field1, setField1]=useState('');
    const [field2, setField2]=useState('');
    const [field3, setField3]=useState('');
    const [allData, setAllData]=useState('');

    const [{ data, isLoading, isError="" }, doFetch] = UseApi(config.server);
    
    const [listAllDataCheckbox, setlistAllDataCheckbox]=useState(false)
    const [listAllChecked, setListAllChecked] = useState(false)
    const [field1Display, setField1display]=useState(false);
    const [field2Display, setField2Display]=useState(false);
    const [field3Display, setField3Display]=useState(false);
    function search(e){
        e.preventDefault()
        if(field1!==''){
            doFetch(config.apisOnUserloggedOut.urlBasedField1+field1)
            setSelectionInfo('')
        }else if(field2!==''){
            doFetch(config.apisOnUserloggedOut.urlBasedField2+field2)
            setSelectionInfo('')
        }else if(field3!==''){
            doFetch(config.apisOnUserloggedOut.urlBasedField3+field3)
            setSelectionInfo('')
        }else if(allData!==''){
            doFetch(config.apisOnUserloggedOut.urlBasedAllData)
            setSelectionInfo('')
        }else{
            setSelectionInfo('Select fetching methode')
        }
    }
    function listAllDataCheckBox(){
        setSelectionInfo('')
        setField1('')
        setField2('')
        setField3('')
        setlistAllDataCheckbox(!listAllDataCheckbox)
        setAllData('allData')
        setField1display(false) 
        setField2Display(false) 
        setField3Display(false) 
    }
    function getProcessCheckBox(){
        if(listAllChecked==true){
            setField2('')
            setField3('')
            setListAllChecked(false)
        }
        setField1display(!field1Display)
        setlistAllDataCheckbox(false)
        setField2Display(false) 
        setField3Display(false) 
    }
    function getCustomerCheckBox(){
        setField1('')
        setField3('')
        setField2Display(!field2Display)
        setlistAllDataCheckbox(false)
        setField1display(false)  
        setField3Display(false) 
    }
    function getSensorCheckBox(){
        setField1('')
        setField2('')
        setSelectionInfo('')
        setField3Display(!field3Display)
        setlistAllDataCheckbox(false)
        setField2Display(false)
        setField1display(false)   
        
    }
    return(
        <div className="row">
            <div className="col-md-12">
                    <div data-testid="filters">
                        <div className={classes.heading}>
                            <h2>Your list, search or filter is based on</h2>
                        </div>
                        <div>{selectionInfo}</div>
                        <div className={classes.checkboxesDiv}>
                        <div className={classes.checkboxes}>
                        <input type="radio" onClick={()=>listAllDataCheckBox()} checked={listAllDataCheckbox} readOnly data-testid="listAllDataCheckbox"/> {config.searchBases.selectAll}
                        </div>
                        <div className={classes.checkboxes}>
                        <input type="radio" onClick={()=>getProcessCheckBox()} checked={field1Display} readOnly data-testid="processCheckbox"/> {config.searchBases.selectBasedField1}
                        </div>
                        <div className={classes.checkboxes}>
                        <input type="radio" onClick={()=>getCustomerCheckBox()} checked={field2Display} readOnly data-testid="customerCheckbox"/> {config.searchBases.selectBasedField2}
                        </div>
                        <div className={classes.checkboxes}>
                        <input type="radio" onClick={()=>getSensorCheckBox()} checked={field3Display} readOnly data-testid="sensorCheckbox"/> {config.searchBases.selectBasedField3}
                        </div>
                    </div>
                    <div className={classes.inputs}>
                        {
                            listAllChecked &&
                            <div>
                            </div>
                        }
                        {
                            field1Display && 
                            <div>
                
                                <input type="text" placeholder="Process" data-testid='process' onChange={e => setField1(e.target.value)} />
                            </div>
                        }
                        {
                            field2Display &&
                            <div>
                            <input type="text" placeholder="Customer name" data-testid='customer' onChange={e => setField2(e.target.value)} />
                            </div>
                        }
                        {
                            field3Display &&
                            <div>
                                <input type="text" placeholder="Sensor data" onChange={e => setField3(e.target.value)} data-testid='sensor'/>
                            </div>
                        }
                        <form onSubmit={search}>
                          <button type="submit" data-testid="btnSearch">Search</button>
                        </form>
                    </div>
                </div>
                <Item data={data} isLoading={isLoading} isError={isError}/>
           </div>
        </div>
    )
}
export default Filter;