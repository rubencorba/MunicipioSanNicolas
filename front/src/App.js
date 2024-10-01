import {Route,Routes} from "react-router-dom";

import './App.css';
import Create from './views/create/createComponent';
import Home from './views/home/homeComponent';
import Landing from './views/landing/landingComponent';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/create' element={<Create/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
