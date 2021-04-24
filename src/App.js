import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
   
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Products from './Pages/Products';
import Reports from './Pages/Reports';
import  Team from './Pages/Team';
import  Support from './Pages/Support';
import   Massage from './Pages/Massage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
       
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/products' component={Products}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/team' component={ Team}/>
          <Route path='/support' component={Support}/>
          <Route path='/messages' component={Massage}/>

     
        </Switch>
      </Router>

    </>
  );
}

export default App;
