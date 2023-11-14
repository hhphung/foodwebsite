
import  Navbar from './Navbar.js';
import Home from './food_list/home.js'
import List from './food_list/list.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App(){
  return (
    <Router> 
      <div className='App'>
        <Navbar/>
        <div className='content'> 
          <Routes> 
            <Route exact path= '/' Component={Home} /> 
            <Route path = '/list' Component={List}/>  
          </Routes>
        
        </div>
      </div>
      </Router>
  );
}

export default App;