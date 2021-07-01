const service=require('../Service/Service')
module.exports=data={
    getAllData:async(req,res)=>{
       try {
           let data=await service.getAllData()
           res.json(data)
       } catch (error) {
          res.json("There was error")
       }
    },
    getProcess:async(req,res)=>{
        let field1=req.params.field1
        try {
            let data=await service.getProcess(field1)
            if(data.length==0){
                res.json("Not found")
            }else{
                res.json(data)
            }
           
        } catch (error) {
            res.json("There was error")
        }
    },
    getCustomer:async(req,res)=>{
        let field2=req.params.field2
        try {
            let data=await service.getCustomer(field2)
            if(data.length==0){
                res.json("Not found")
            }else{
                res.json(data)
            }
           } catch (error) {
            res.json("There was error")
           }
    },
    getSensor:async(req,res)=>{
        let field3=req.params.field3
        try {
            let data=await service.getSensor(field3)
            if(data.length==0){
                res.json("Not found")
            }else{
                res.json(data)
            }
           } catch (error) {
              res.json("There was error")
           }
    }
}