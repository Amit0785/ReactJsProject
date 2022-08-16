import React from 'react'
import {galleryData} from '../Components/Constant'

function Gallery() {

  return (
    <div  style={{display:'flex',flexWrap:'wrap'}}>

    {galleryData.map((item,index)=>{
      return(
        <div className="bg-light py-5 border-bottom"  key={index}>
           
             
                
                  <img src={item.image} alt="" style={{height:250,width:250}}/>
                
                
                  <h5>
                    {item.title}
                  </h5>
                 
                
                    <h6>
                    {item.price}
                    </h6>
                   
                
               
          
           
          </div>

      )
    })}                  
     </div>
  )
}

export default Gallery