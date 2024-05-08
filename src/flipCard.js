import React from "react";
import image from "./images/about-img.png"
const Flipcard=()=>{
    return(
<div className="App">
    <div className='front'>
         <div>
          <img src={image}/>
         </div>
    </div>
    <div className='back'>
        <div>
          <img src={image}/>
         </div>
         <div className='btnWrapper'>
          <button>View</button>
         </div>
    </div>
</div>
    )
}
export default Flipcard