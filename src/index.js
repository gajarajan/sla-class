import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';  
import './index.css';  
import App from './App';  
import About from './About' ; 
import Contact from './Context' ; 
import Notfound from './Notfound' ; 
import FormFirst from'./loginform';
import Login from  './login';
import Content from './content';
  
const routing = (  
  <Router>  
    <div >  
      <h1>React Router Example</h1>  
      <ul className="inline">  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/About" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/Contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li> 
        <li>  
          <NavLink to="/Login" exact activeStyle={  
             {color:'magenta'}  
          }>Login</NavLink>  
        </li>  
      </ul>  
      <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/About" component={About} />  
         <Route path="/Contact" component={Contact} /> 
         <Route path="/Login" component={Login} /> 
         <Route path="/FormFirst" component={FormFirst} />  
         <Route component={Notfound} />  
      </Switch>  
    </div>  
  </Router>  
)  
ReactDOM.render(<Content/>, document.getElementById('root')); 