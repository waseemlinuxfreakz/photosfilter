import {React,useEffect,useState} from 'react';
import useFetch from '../Utils/useFetch';
import {ShareSocial} from 'react-share-social';

import image_1 from '../images/image-1.jpg';
import image_2 from '../images/image-2.jpg';
import vector_3 from '../images/Vector-3.png';
import vector_4 from '../images/Vector-4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes , faDownload } from "@fortawesome/free-solid-svg-icons";




function Content({load}) {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("http://nicolas.99design.website/apiconnection/?results=1")
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch("http://nicolas.99design.website/apiconnection/?results=1", { signal: abortCont.signal})
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        console.log(data)
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch http call aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    return () => abortCont.abort();
  }, [load])
  console.log(load + "-------------------------------")

  const [url_, seturl] = useState("Select an Imange");

  const [itemId, setItemId] = useState();
  
  const handleClick = (e, a, b) => {
    e.preventDefault()
    setItemId(b)
    seturl(a)
    console.log(e.target.getAttribute('data-id'));}
    
    return (
    <>
     <div className="main-content modify_hidden" id="modify_hidden_ap">
     <div className="container">
      <h1>Click to modify</h1>
      <h1>Select and Share!</h1>
      <div class="share_link_external">
      <ShareSocial 
     
     url = {url_}
     socialTypes={['facebook','twitter','reddit','linkedin']}
   /></div>
   {isPending && <div>Pending</div>}
     {error && <div>{error}</div>}

       <ul className="share-list">
       <li><a href="#"><img src={vector_3}alt=""/><span>Share</span></a></li>
       <li><a href="#"><img src={vector_4}alt=""/><span>Email</span></a></li>

       </ul>

       <div className="row card_row">
       {data && data.map((obj, index) => (
            <div className="col-sm-4 col-4">
              <div className="cardImage"><img src={obj.img_url} alt="waseem" data-id={obj.id} className={itemId === obj.id ? "selected_img" : ""} /></div>
              <div data-id={'img-'+index} className="image-click" onClick={e => handleClick(e, obj.img_url, obj.id)}></div>
                <div id={'img-'+index} className="close-and-download-btn-wrapper hidden">
                  <ul>
                    <li><a href={obj.img_url} download="download"><FontAwesomeIcon icon={faDownload} /></a></li>
                    <li ><FontAwesomeIcon icon={faTimes}/></li>
                  </ul>
                </div>
              </div>
          ))}
      </div>
    </div>
    </div> 
   </>
  
    );
  }
  
  export default Content;