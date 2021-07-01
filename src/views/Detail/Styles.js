import {makeStyles} from '@material-ui/core/styles'
export default makeStyles(()=>({
    container:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            width:'auto',
            fontSize:'16px',
            marginLeft:'20px'
    },
    backBtn:{
        marginLeft:'20px',
    },
    details:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    }
   
}))