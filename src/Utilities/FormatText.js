
function FormatText(data){
    let arrayData=[]
    if (data.indexOf(';') > -1) { 
       arrayData=data.split(';')
    }else{
        arrayData.push(data)
    }
    console.log("arrayData",arrayData)
    return arrayData
   
}
export default FormatText;