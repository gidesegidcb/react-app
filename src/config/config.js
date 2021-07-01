const ServerPort=3001
const server='http://localhost:'+ServerPort
let myconfig={
    searchBases:{
        selectAll:"List all data",
        selectBasedField1:"Processes",
        selectBasedField2:"Customer name",
        selectBasedField3:'Sensor'
    },
    apisOnUserloggedOut:{
        urlBasedAllData:server,
        urlBasedField1:server+'/getField1/',
        urlBasedField2:server+'/getField2/',
        urlBasedField3:server+'/getField3/'
    },
    apisOnUserLoggedIn:{
     /* not yet implemented */
    },
}
export default myconfig