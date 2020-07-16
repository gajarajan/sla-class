import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class FormFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Phonenumber: "",
      Passward: "",
      DOB: ""
     
    };
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
  handleChange(event) {
    this.setState({Name: event.target.Name});
    // this.setState({Passward: event.target.Passward});
    // this.setState({Phonenumber: event.target.Phonenumber});
    
  }
  handleSubmit(event) {  
    console.log('You have submitted the input successfully: ' + this.state.Name); 
    console.log('You have submitted the input successfully: ' + this.state.Phonenumber); 
    console.log('You have submitted the input successfully: ' + this.state.Passward);  
    event.preventDefault();  
  }  

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit} className="form-wrapper">
          <h1>enetr the details</h1>
          <label className="name">
            Name:
            <input
              type="text"
              value={this.state.Name}
              name="Name"
              onChange={this.handleChange}
              placeholder="name"
            />
          </label>
          <br></br>
          <label className="Phonenumber">
            Phonenumber:
            <input
              type="tel"
              value={this.state.Phonenumber}
              name="Phonenumber"
              onChange={this.handleChange}
              placeholder="PhoneNumber"
            />
          </label>
          <br></br>
          <label className="Passward">
            Passward:
            <input
              type="Passward"
              value={this.state.Passward}
              name="Passward"
              onChange={this.handleChange}
              placeholder="Passward"
            />
          </label>
          <br></br>
          <button onSubmit="this.handleSubmit">create a new login</button>
          <div className="login1" style={{textAlign:"center"}}>
            <NavLink to="/">
              <button style={{textAlign:"left"}}> back to home</button>
            </NavLink>
            <NavLink to="/Login" style={{textAlign:"left"}}>
              <button> sign </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
};

export default FormFirst;
// import React from 'react';

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );
// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: null,
//       email: null,
//       password: null,
//       errors: {
//         fullName: '',
//         email: '',
//         password: '',
//       }
//     };
//   }

//   handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     let errors = this.state.errors;

//     switch (name) {
//       case 'fullName': 
//         errors.fullName = 
//           value.length < 5
//             ? 'Full Name must be at least 5 characters long!'
//             : '';
//         break;
//       case 'email': 
//         errors.email = 
//           validEmailRegex.test(value)
//             ? ''
//             : 'Email is not valid!';
//         break;
//       case 'password': 
//         errors.password = 
//           value.length < 8
//             ? 'Password must be at least 8 characters long!'
//             : '';
//         break;
//       default:
//         break;
//     }

//     this.setState({errors, [name]: value});
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if(validateForm(this.state.errors)) {
//       console.info('Valid Form')
//     }else{
//       console.error('Invalid Form')
//     }
//   }

//   render() {
//     const {errors} = this.state;
//     return (
//       <div className='wrapper'>
//         <div className='form-wrapper'>
//           <h2>Create Account</h2>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className='fullName'>
//               <label htmlFor="fullName">Full Name</label>
//               <input type='text' name='fullName' onChange={this.handleChange} noValidate />
//               {errors.fullName.length > 0 && 
//                 <span className='error'>{errors.fullName}</span>}
//             </div>
//             <div className='email'>
//               <label htmlFor="email">Email</label>
//               <input type='email' name='email' onChange={this.handleChange} noValidate />
//               {errors.email.length > 0 && 
//                 <span className='error'>{errors.email}</span>}
//             </div>
//             <div className='password'>
//               <label htmlFor="password">Password</label>
//               <input type='password' name='password' onChange={this.handleChange} noValidate />
//               {errors.password.length > 0 && 
//                 <span className='error'>{errors.password}</span>}
//             </div>
//             <div className='submit'>
//               <button>Create</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
