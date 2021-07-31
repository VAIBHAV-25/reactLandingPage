import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch , Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar"
const App = () => {
   return ( 
       <>
       <Navbar/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Redirect to="/" />
           <Home/>
         </Switch>  
       </>   
    ); 
};
export default App; 