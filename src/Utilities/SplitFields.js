function SplitFields(data){
    let dataArray=data.split('')
    function isUpper(str) {
        return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    }
    let collectionData=[]
    dataArray.map((item)=>{
        if(isUpper(item)==true){
            collectionData.push(" "+item)
        }else{
            collectionData.push(item)
        }
    })
    return collectionData.join('')
}
export default SplitFields;