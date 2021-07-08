
const ServerPort=3001
const server='http://localhost:'+ServerPort
let english={
        menu:{
        home:'Home',
        about:'About',
        contact:'Contact',
        login:'Login',
        logout:'Log out'
        },
        about:{
            title:'Who we are ',
            mainContent:'This is about page .Description is here',
            footer:'no footer'
        },
        contact:{
            title:'Where can you find us ',
            mainContent:'This is our contact info',
            footer:'no footer' 
        },
        filterPage:{
            title:{
                mainTitle:"Your list, search or filter is based on..",
                subTitle:""
            },
            routs:{
                urlBasedAllData:server,
                urlBasedSearch:server+'/getSearches/',
                urlDetails:server+'/details/'
            },
            searchBases:{
                getRandomData:'Get random data',
                searchButtonText:"Search",
                inputPlaceholder:"Search",
                listShouldDisplayAs:"normalText" //changes could be list, table, normalText
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

        },
        sidebar:{

        }
}
let tigrina={
    menu:{
        home:'Home t',
        about:'About t',
        contact:'Contact t',
        login:'Login t',
        logout:'Log out t'
        },
        about:{
            title:'Who we are tirina ',
            mainContent:'This is about page .Description is here fsdf',
            footer:'no footer  tt'
        },
        contact:{
            title:'Where can you find us ',
            mainContent:'This is our contact info',
            footer:'no footer' 
        },
        filterPage:{
            title:{
                mainTitle:"tigrina list arieesti",
                subTitle:""
            },
            routs:{
                urlBasedAllData:server,
                urlBasedSearch:server+'/getSearches/',
                urlDetails:server+'/details/'
            },
            searchBases:{
                getRandomData:'Get random data',
                searchButtonText:"Search",
                inputPlaceholder:"Search",
                listShouldDisplayAs:"normalText" //changes could be list, table, normalText
            },
        },
        loginPage:{
            loginTitle:" User login t",
            username:" User name t",
            password:" Password t",
            submitLoginText:"Login t",
            onErrorMessage:"There is something wrong t",
            onUsernameOrPasswordMismatch:" Username or password is mismatch t",
            infoOnEmptyEntry:"Fill username and password t"
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

        },
        sidebar:{

        }
}
let languages={
    language:tigrina
}
console.log("language",languages)
export default languages