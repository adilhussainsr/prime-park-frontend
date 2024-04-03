import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import eye from '../../img/icons/eye.png';
import crossImage1 from '../../img/icons/close-eye.png';

import logo from '../../img/logo.png';
import { _callApi } from '../../Services/baseService';

const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const handleChange = (e) => {
    e.preventDefault();
  };
  
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      eyeState: false,
      passwordType: 'password',
      errors: {
        email: '',
        password: '',
      },
      redirectToReferrer: false,
      isDisabled: true,
      rememberMe:false,
      message:'',
      
    };
  

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleRememberMe=this.toggleRememberMe.bind(this);
    this.changePassIcon=this.changePassIcon.bind(this);
  }
  changePassIcon() {
    if (this.state.eyeState === false) {
      this.setState({ eyeState: true, passwordType: 'text' });
    } else {
      this.setState({ eyeState: false, passwordType: 'password' });
    }
  }
  componentWillMount() {
   
    // if (localStorage.getItem('accessToken') !== undefined) {
    //   this.setState({ auth: jwt.decode(localStorage.getItem('accessToken')) }, function () {

    //     this.props.history.push('/dashboard');
    //     return;

    //   })
    // }
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  login(event) {
    event.preventDefault();
    if ( this.state.isDisabled === false && this.validateForm(this.state.errors)) {
      this.setState({isDisabled:true});
      var data = {
        'email': this.state.email,
        'password': this.state.password,
      }
 
      var headerdata = { };
      _callApi(data, 'user/login', headerdata)
        .then((response) => {
          console.log(response)
         if (response.status === 200) {
          if (response.data.status === 200) {
            this.setState({isDisabled:false});

            let self = this;
              localStorage.setItem('accessToken', response.data.token);
              localStorage.setItem('is_admin', response.data.is_admin);
              localStorage.setItem('user_id', response.data.user_id);
              self.props.history.push('/dashboard');
              
             
            } else {
              console.log(response.data.msg)
             this.setState({message:response.data.msg,isDisabled:false});
             setTimeout(
              () => this.setState({ message: '' }), 
              2000
            );
            }
          }else {
            
            this.setState({message:response.msg,isDisabled:false});
            setTimeout(
             () => this.setState({ message: '' }), 
             2000
           );
            }
          
        });


    } 
  }
 
  toggleRememberMe() {
    this.setState({
        rememberMe: !this.state.rememberMe
    });
}

onChange(event) {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {

    case 'email':
      errors.email =
        validEmailRegex.test(value)
          ? ''
          : 'Please enter vaild Email Address';
      break;
    case 'password':
      errors.password =
        value.length < 6
          ? 'Password must be 6 characters long!'
          : '';
      break;
    default:
      break;
  }
  this.setState({ errors, [name]: value }, () => {
    if (errors.email === '' && errors.password === '') {
      this.setState({ isDisabled: false });
      console.log(this.state.isDisabled)
    }
  })
}
_handleKeyDown = (e) => {
  if (e.key === 'Enter') {
   this.login(e);
  }
}
render() {
  const { errors } = this.state;
   

    return (
     
        <div className="dashboard-wrapper">
 
      
          <div className="splash-screen" >
              <div className="ss-left">
                  <div className="ss-logo">
                      <img alt='logo' src={logo} />
                  </div>
                  <div className="ss-more">
                      <h5>Welcome to</h5>
                      <p>Primepark!</p>
                  </div>
              </div>
              <div className="ss-right">
                  <div className="ss-form">
                      <div className="ss-form-head">Login to Continue</div>
                      {this.state.message?
                    <span className="mb-3 error" style={{ color: "red" }}>
                    {this.state.message}
                    </span>:''}
                  <div className="sc-input-wrap">
                  <div className="sc-input">
                     <input type="text"
                        name="email"
                          onKeyDown={this._handleKeyDown} 
                        autoFocus
                        onFocus={function(e) {
                          var val = e.target.value;
                          e.target.value = '';
                          e.target.value = val;
                        }}
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        onCopy={this.onCopy} className="sc-custom-form" />
                        {errors.email.length > 0 &&
                    <span className='error'>{errors.email}</span>}
                  </div>
                  <div className="sc-input sc-pass">
                     <input type={this.state.passwordType} className="sc-custom-form" name="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        onCut={handleChange}
      onCopy={handleChange}
      onPaste={handleChange}
      onKeyDown={this._handleKeyDown} 
                        value={this.state.password}
                        onChange={this.onChange} />
                        <div className="sc-input-icons">
                           {this.state.eyeState ? 
                           <img onClick={this.changePassIcon} src={crossImage1} alt='common-svg-icon' class="common-svg-icon" /> :
                           <img onClick={this.changePassIcon} src={eye} alt='common-svg-icon' className="common-svg-icon" />
                          }
</div>

                     {errors.password.length > 0 &&
                    <span className='error'>{errors.password}</span>}
                    </div>
                  </div>
                      <div className="ss-form-btn">
                          <button type="button"  onClick={this.login}
                          value="Login"
                          disabled={this.state.isDisabled} className="pp-custom-btn">Log In</button>
                      </div>
                  </div>
              </div>
          </div>
          </div>
 )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(Login);


