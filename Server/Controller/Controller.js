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
    getSearches:async(req,res)=>{
        let search=req.params.search
        console.log("search",search)
        try {
            let data=await service.getSearches(search)
            if(data.length==0){
                res.json("Not found")
            }else{
                res.json(data)
            }
           
        } catch (error) {
            res.json("There was error")
        }
    },
    details:async(req,res)=>{
        try {
            let data=await service.details(req.body)
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