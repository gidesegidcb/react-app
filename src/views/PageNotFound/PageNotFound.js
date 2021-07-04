import { useHistory } from 'react-router-dom';
import './PageNotFound.css'
import MyButton from '../../components/Button/Button'
import MyAlert from '../../components/Alert/Alert'
function RouteNotFound(){
    const history = useHistory();
    return (
      <div className="pagenotfoundContainer">
          <div>
          <MyAlert className="alert-danger">Either you'r not authenticated or this page is not available</MyAlert>
          </div>
          <div>
          <MyButton onClick={() => history.push('/')} title="back" className="btn-danger"/>
          </div>
      </div>
    );
  };
  export default RouteNotFound;