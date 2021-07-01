import {makeStyles} from '@material-ui/core/styles'
export default makeStyles(()=>({
    container:{
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       width:'auto',
       fontSize:'16px'
    },
    listItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        justifyItems:'flex-start',
        width:'auto',
        marginLeft:'30px',
        marginRight:'20px',
        marginTop:'10px',
        marginBottom:'10px'

    },
    detail:{
        display:'flex',
       flexDirection:'row',
       justifyContent:'center',
       width:'200px'
    },
    detailbtn:{
      marginLeft:'10px',
      marginTop:'10px',
      marginRight:'10px',
      marginBottom:'10px',
      width:'30px',
      height:'30px',
      backgroundColor:'grey'
    },
    label:{
        marginLeft:'10px',
        marginTop:'10px',
        marginRight:'10px',
        marginBottom:'10px'
    },
    p:{
        marginLeft:'10px',
        marginTop:'10px',
        marginRight:'10px',
        marginBottom:'10px'
    },
    li:{
     borderStyle:'none'
    }
    
   
}))