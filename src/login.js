import React from "react";
import FormFirst from'./loginform';
import { BrowserRouter as Router, Route,  NavLink} from 'react-router-dom';
class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>login from</h1>
        <NavLink to="/FormFirst" > <button>createaccount </button></NavLink> 
      </div>
    );
  }
}

export default Login;
