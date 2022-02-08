
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar.js';
import Contentnone from './component/Contentnone';
import Content from './component/Content.js';
import Popup from './component/Popup.js';
import ModifyFilter from './component/ModifyFilter';
import ModifyFilterv2 from './component/ModifyFilterV2';
import { useState } from 'react';

function App() {

  const [load, setload] = useState(false);
  
  function handleLoad(){ setload(true) }

  return (

    <>

 <Navbar/>
 <Contentnone handleload  = {handleLoad} />
 <Content load = {load}/>
<Popup/>
<ModifyFilter/>
<ModifyFilterv2/>


  </>

  );
}

export default App;
