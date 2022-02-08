import React from 'react';
import Navbar from '../component/Navbar.js';
import image_3 from '../images/image-3.jpg';
import { useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function ImageGallery({ dt, handleload }){
  const [filter, setfilter] = useState();

  const [editedImg, setEditedImg] = useState();

  const [loading, setloading] = useState(false);

  const checkTextInput_gal = () => {

    setloading(true)
    const data = {
      "item_url": editedImg,
      "item_type": "image",
      "item_class": "none",
      "submit_request": "send",
      "ip_address": "34343434"
    }

    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '='
     + encodeURIComponent(data[key])).join('&');

  fetch("http://nicolas.99design.website/apiconnection/", {
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:formBody
})
  .then((result) => result)
  .then((data) => {
    console.log(data);
    handleload();
    var modify_hidden_ap_ele = document.getElementById("modify_hidden_ap");
    modify_hidden_ap_ele.classList.remove('modify_hidden');
    var content_hidden_ap_ele = document.getElementById("gallery_list");
    content_hidden_ap_ele.classList.remove('active');
    modify_hidden_ap_ele.classList.add('active');
    setloading(false)
    if (!data.ResponseMessage) {
    }
  })
  .catch((error) => {
    console.log(error);
  });
};

  

const downloadedImg = new Image();
downloadedImg.crossOrigin = "Anonymous";
downloadedImg.addEventListener("load", imageReceived, false);
downloadedImg.src = dt.img_url;

function imageReceived() {
let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");

canvas.width = downloadedImg.width;
canvas.height = downloadedImg.height;

let i = document.getElementById("mainimg")

let compstyle = window.getComputedStyle(i)

var fil = compstyle.getPropertyValue('filter').toString();

context.filter = fil;

context.drawImage(downloadedImg, 0, 0);

try {
setEditedImg(canvas.toDataURL())
console.log(canvas.toDataURL())
}
catch(err) {
console.log("Error: " + err);
}
}

   
return(
<>
<ClimbingBoxLoader color={"#000000"} loading={loading} size={150} />
<div className="image-gallery-wrapper" id="gallery_list">


<div className="container">
<div className="image-gallery-inner-wrapper">
<h2>Click to modify</h2>

<figure className="gallery-main-image filter_img sepia" id={'popupg-'}  ></figure>
<div className='filter_imge_wrap'>
<img className={filter+" galery-mains-img"}  src={dt.img_url} alt="" id = "mainimg"/>
</div>
<h3>PICK A FILTER</h3>
<div className="filter-wrapper">
<div className="row">
<div className="col-sm-2"><h3>Sepia</h3><img className='dummySepiaFilter' src={dt.img_url} alt="" onClick={()=> setfilter('dummySepiaFilter')}/></div>    
<div className="col-sm-2"><h3>Fair</h3><img className='dummyFairFilter' src={dt.img_url} alt=""  onClick={()=> setfilter('dummyFairFilter')}/></div>
<div className="col-sm-2"><h3>Dark</h3><img className='dummyDarkFilter' src={dt.img_url} alt=""  onClick={()=> setfilter('dummyDarkFilter')}/></div>
<div className="col-sm-2"><h3>Black and White</h3><img className='dummyBWFilter' src={dt.img_url} alt=""  onClick={()=> setfilter('dummyBWFilter')}/></div>
<div className="col-sm-2"><h3>Blur</h3><img className='dummyBlurFilter' src={dt.img_url} alt=""  onClick={()=> setfilter('dummyBlurFilter')}/></div>
<div className="col-sm-2"><h3>Street</h3><img className='dummySaturateFilter' src={dt.img_url} alt=""  onClick={()=> setfilter('dummySaturateFilter')}/></div>
</div>

<button type="button" onClick={checkTextInput_gal}>OK</button>

</div>


</div>
</div>
</div>
</>
)


}
export default ImageGallery;
