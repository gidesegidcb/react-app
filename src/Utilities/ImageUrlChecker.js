import {useState,useEffect} from 'react'
 function CheckImage(url) {
     const [isImage, setIsImage]=useState()
     useEffect(()=>{
        var image = new Image();
         image.onload = function() {
          if (this.width > 0) {
            console.log("image exists");
            setIsImage("yes")
          }
        }
        image.onerror = function() {
          console.log("image doesn't exist");
          setIsImage("no")
        }
        image.src = url;
     },[isImage])

    return isImage
  }
export default CheckImage