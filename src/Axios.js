import {useState,useEffect} from 'react';
import axios from 'axios'
const useApi = () => {
    const [data, setData] = useState();
    const [url, setUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            let result
            if(url.method==='get'){
               result = await axios(url.url);
            }else if(url.method==='post'){
               result = await axios.post(url.url,url.data);
            }
            if(result.data==='There was error'){
                setData([{key:"There was error"}]);
            }else if(result.data==='Not found'){
                    setData([{key:"Not found"}]);
            }else{
                    setData(result.data);
            }
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [url]);
    return [{ data, isLoading, isError }, setUrl];

  }
  export default useApi