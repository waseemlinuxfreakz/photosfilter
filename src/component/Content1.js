import {React,useState} from 'react';
import Cards from '../component/Cards';
import image_1 from '../images/image-1.jpg';
import image_2 from '../images/image-2.jpg';







function Content() {
  

    return (
    <>
     <div className="main-content" id="main_content_modify">
     <div className="container">
      <h1>Click to modify</h1>
     <div className="row">
      <Cards image={image_1}  />
      <Cards image={image_2} />
      <Cards image={image_1} />
      <Cards image={image_1} />
      <Cards image={image_2} />
      <Cards image={image_1} />
           
     </div>
     </div>
     </div> 

        
   </>
  
    );
  }
  
  export default Content;
  