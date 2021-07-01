let data=[
    {"CustomerId":"3123","CustomerName":"UMC Utrecht",
    "MachineNr":"UMC-342","MachineId":"21",
    "MachineTypeSerial":"EWD220;338198304139 01","Process":"WashDisWash","ProcessTime":"Start:2019-13-02 21:13:11.328;End:2019-13-02 22:03:00.327",
    "SensorData":"WaterTemp:celcius:23;Pump10:off;Pump5:on;Dra inSensor:off;WaterLevel:ml-432","OnlineFrom":"27-07-2014 10:02:37"},

    {"CustomerId":"2954","CustomerName":"UMC Utrecht",
    "MachineNr":"UMC-536J","MachineId":"22",
    "MachineTypeSerial":"EWD440;481385081010 1","Process":"WashDis","ProcessTime":"Start:2019-20-04 20:10:04.129;End:2019-20-04 21:29:20.734",
    "SensorData":"WaterTemp:celcius:25;Pump10:on;Pump5:off;Dra inSensor:off;WaterLevel:ml-382;","OnlineFrom":"08-09-2017 18:12:43"},

    {"CustomerId":"1224","CustomerName":"AMC",
    "MachineNr":"AMC1-32","MachineId":"21",
    "MachineTypeSerial":"EWD440- PT;36849839827301","Process":"Dis","ProcessTime":"Start:2019-12-09 23:54:12.349;End:2019-12-09 23:59:14.343",
    "SensorData":"WaterTemp:celcius:22;Pump10:off;Pump5:on;Dra inSensor:on;WaterLevel:ml-30;","OnlineFrom":"29-06-2016 16:55:02"}
]
// let data=[
//     {name:'Gide', lastname:'segid'}
// ]
let collection=[]
module.exports=serviceTest={
    getAllData:()=>{
        return new Promise((resolve,reject)=>{
            return resolve(data)
        })
    },
    getProcess:(field1)=>{
        collection=[]
        data.find((item)=>{
            let values=Object.values(item).map((itemsToLowercase)=>{
                return itemsToLowercase.toLocaleLowerCase()
            })
            if(values.includes(field1.toLocaleLowerCase())){
             collection.push(item)
            }
         })
        return new Promise((resolve,reject)=>{
           if(collection.length==0){
            return resolve("Not found")
           }else if(collection.length!==0){
               return resolve(collection)
           }else{
               return reject("There was error")
           }
            
        })
    },
    getCustomer:(field2)=>{
        collection=[]
        data.filter((item)=>{
            // if(item.CustomerName.toLocaleLowerCase().includes(customer.toLocaleLowerCase())){
            //     collection.push(item)
            // }
            let values=Object.values(item).map((itemsToLowercase)=>{
                return itemsToLowercase.toLocaleLowerCase()
            })
            if(values.includes(field2.toLocaleLowerCase())){
             collection.push(item)
            }
        })
        return new Promise((resolve,reject)=>{
            if(collection.length==0){
                return resolve("Not found")
            }else if(collection.length!==0){
                return resolve(collection)
            }else{
                return reject("There was error")
            }
        }) 
    },
    getSensor:(field3)=>{
        collection=[]
        data.filter((item)=>{
            let values=Object.values(item).map((itemsToLowercase)=>{
                return itemsToLowercase.toLocaleLowerCase()
            })
            if(values.includes(field3.toLocaleLowerCase())){
             collection.push(item)
            }
        })
        return new Promise((resolve,reject)=>{
            if(collection.length==0){
                return resolve("Not found")
            }else if(collection.length!==0){
                return resolve(collection)
            }else{
                return reject("There was error")
            }
        }) 
    }
}