import {React} from 'react';
import Navbar from '../component/Navbar.js';


function Popup(){
  
  
  
  /*const [textInputName, setTextInputName] = useState('');*/
  /*const [textInputEmail, setTextInputEmail] = useState('');*/
 
  const checkTextInput = () => {
    
    
    const user_email_list = document.getElementById('user_email_list').value;
    if(user_email_list!==""){
  
      var element = document.getElementById('user_list_video');
      element.classList.add('hidden');
      var content_elment_lift = document.getElementById('main_content_modify');
      content_elment_lift.classList.add('active');

    }
    else{

      var elements = document.getElementById('user_list_video');
      elements.classList.remove('hidden');
      var content_elment_lifts = document.getElementById('main_content_modify');
      content_elment_lifts.classList.remove('active');
      alert("Please Fill Email address");
    }
    
  };
  
return(
<>
    <div className="popup-wrapper">
    <div className="popup-container" id="user_list_video">
    <p>Enter your email to see your photos and videos</p>
    <form>
<div className="text-input-div">
<input type="text" placeholder="youremail@email.com" id="user_email_list"/>
<a href="#">Reset</a>
</div>    
<div className="check-box-div">

<input type="checkbox" name="termsbox" />
<label for="terms"> I accept the <strong>TCU</strong></label>

</div>
<button onClick={checkTextInput} type="button">submit</button>    
        
    </form> 
    </div>    
        

    </div>
    
</>
)


}
export default Popup;
