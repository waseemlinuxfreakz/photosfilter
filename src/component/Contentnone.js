import {React,useState} from 'react';

import image_1 from '../images/image-1.jpg';
import image_2 from '../images/image-2.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes , faDownload } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from '../component/ImageGallery';

import useFetch from '../Utils/useFetch';


function Contentnone({handleload}) {
  
  const [i, seti] = useState(0);

  const handleClick = (e,i) => {
    //handleClick(e) {
      seti(i)
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));
    //alert(e.target.getAttribute('data-id'));
    var active_id = e.target.getAttribute('data-id');
    var element_galp = document.getElementById('gallery_list');
    element_galp.classList.add('active');
    
    var element_gal = document.getElementById(active_id);
    element_gal.classList.add('active-gal');
    var prev_elem = document.getElementById("main_content_modify");
    prev_elem.classList.remove("active");
    //var prev_elem = document.getElementById("main_content_modify");
    prev_elem.classList.add("hidden");
  }

  const {data, isPending, error} = useFetch("http://nicolas.99design.website/apiconnection/?results=1")

  
const usersObject = [
  {
      id: 'img-1',
      userAvatar: image_2,
      class_txt: ""
  },
  {
    id: 'img-2',
    userAvatar: image_1,
    class_txt: ""
},
{
  id: 'img-3',
  userAvatar: image_2,
  class_txt: ""
},
{
  id: 'img-4',
  userAvatar: image_1,
  class_txt: ""
},
{
  id: 'img-5',
  userAvatar: image_2,
  class_txt: ""
},
]

const [users, setUsers] = useState({
  activeMark: null,
  allUsers: usersObject
});

const toggleCheck = (index) => {
  setUsers({...users, activeMark: users.allUsers[index]});
};

const toggleCheckMark = (index) => {
  if(users.allUsers[index] === users.activeMark){
      return users.activeMark = true;
  }
}

    return (
    <>
     <div className="main-content" id="main_content_modify">
      <div className="container">
        <h1>Select Any Photo or Video and Modify</h1>
        <div className="row card_row">
        {isPending && <div>Pending</div>}
          {error && <div>{error}</div>}
          {data && data.map((obj, index) => (
            <div className="col-sm-4 col-4">
              <div className="cardImage"><img src={obj.img_url} alt="waseem" data-id={'popupg-'} class="open-gallary" onClick={e => handleClick(e, index)}/></div>
              <div data-id={'img-'+index} className="image-click"></div>
                <div id={'img-'+index} className="close-and-download-btn-wrapper hidden">
                  <ul>
                    <li><FontAwesomeIcon icon={faDownload} /></li>
                    <li ><FontAwesomeIcon icon={faTimes}/></li>
                  </ul>
                </div>
              </div>
          ))}
     </div>
    </div>
    </div> 
    <div>
    {isPending && "Pending"}
      {error && "Error"}
    {data &&<ImageGallery dt = {data[i]} handleload = {handleload}/>}
    </div>
    
   </>
    );
  }
  
  export default Contentnone;