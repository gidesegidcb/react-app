
const ServerPort=3001
const server='http://localhost:'+ServerPort
let myconfig={
    filterPage:{
        searchBases:{
            selectAll:"List all data",
            selectBasedField1:"Search",
        },
        listTitle:{
            mainTitle:"Your list, search or filter is based on..",
            subTitle:""
        },
        routs:{
            urlBasedAllData:server,
            urlBasedField1:server+'/getField1/',
            urlBasedField2:server+'/getField2/',
            urlBasedField3:server+'/getField3/',
            urlDetails:server+'/details/'
        }
    },
    loginPage:{
        loginTitle:" User login ",
        username:" User name ",
        password:" Password ",
        submitLoginText:"Login",
        onErrorMessage:"There is something wrong",
        onUsernameOrPasswordMismatch:" Username or password is mismatch",
        infoOnEmptyEntry:"Fill username and password"
    },
    item:{

    },
    detailPage:{
        title:{
          mainTitle:'Details',
          subTitle:''
        },
        router:{
            urlDetails:server+'/details/'
        },
        others:{
            btnBack:'Back'
        }
    },
    authPages:{

    }
}
export default myconfig