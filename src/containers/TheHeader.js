import React, { Component } from 'react'
import { connect } from 'react-redux';
import logo from '../img/logo.png';
import logo_image from '../img/admin-image.png';
import { _callApi } from '../Services/baseService';
import $ from 'jquery';
class TheHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{}
    }
    
  }

  componentDidMount(){

    var headerdata = "";
		var data = { };
        var s = _callApi(data, "user/profile", headerdata,2)
			.then((response) => {
				if (response.status == 200) {
					console.log(response)
					this.setState({profile:response.data.profile})
				}else{
          localStorage.removeItem('accessToken');
    window.location.href = "/#/login";
        }
			})
  }
  
  logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = "/#/login";
  }
  toggle=()=>{
    
if($(".dh-user-dropdown").hasClass("active")){
  $(".dh-user-dropdown").removeClass("active");
}else{
  $(".dh-user-dropdown").addClass("active");
}
      
      
  
 

  }
    render(){
  return (
	<div className="dashboard-header">
    <div className="dh-logo"><img src={logo} /></div>
    <div className="dh-user-option">
      <div className="dh-user-dropdown">
        <div className="dhu-wrap tests">
          <p className="dhu-name margin-data">{this.state.profile && this.state.profile.name?this.state.profile.name:''}</p>
          {/* <div className="dhu-profile"  style={{ backgroundImage: `url(${logo_image})` }}></div> */}
          <div className="dhu-drop-icon"  onClick={this.toggle}><i className="ion-ios-arrow-down"></i></div>
        </div>
        <div className="dhu-drop-wrap">
          <ul className="dhu-list">
           <li onClick={this.logout}><a><i className="ion-log-out"></i>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
    }
function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(TheHeader);
