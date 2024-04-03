import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';



class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (

      <div class="dashboard-content">
       <div class="dc-wrap settings">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Settings</h3>
		 </div>
	 </div>
	 <div class="dc-body">
		 <div class="vendor-wrap">
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>R</span>
					 <p>Reports</p>
				 </div>
				 <NavLink to="/reports/list" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>S</span>
					 <p>Slots</p>
				 </div>
				 <NavLink to="/diagram/lots" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>V</span>
					 <p>Vendor</p>
				 </div>
				 <NavLink to="/vendors/list" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>C</span>
					 <p>Car Type</p>
				 </div>
				 <NavLink to="/car_types/list" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>M</span>
					 <p>Modify Policies</p>
				 </div>
				 <NavLink to="/settings/policies" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 {/* <div class="vendor-box">
				 <div class="vendor-name">
					 <span>P</span>
					 <p>Pickup-Up Status</p>
				 </div>
				 <NavLink to="/car_status/list" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div> */}
			 <div class="vendor-box">
				 <div class="vendor-name">
					 <span>U</span>
					 <p>Upload Data</p>
				 </div>
				 <NavLink to="/settings/upload-csv" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
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


export default connect(mapStateToProps)(Settings);


