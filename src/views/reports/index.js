import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';


class Reports extends Component {
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
					console.log(response.data)
					this.setState({profile:response.data.profile})
				}
			})
	
  }

  render() {

    return (

      <div class="dashboard-content">
     <div class="dc-wrap reports">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Reports</h3>
		 </div>	 
	 </div>
	 <div class="dc-body">
		 <div class="vendor-wrap">
{this.state.profile && this.state.profile.inventory_report_access?
			 <div class="vendor-box">
			 <NavLink to="/reports/inventory" >
				 <div class="vendor-name">
					 <span>I</span>
					 <p>Inventory Report</p>
				 </div>
				 </NavLink>
				 <NavLink to="/reports/inventory" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 :''}
			 {this.state.profile && this.state.profile.car_movement_record_access?
			 <div class="vendor-box">
			 <NavLink to="/reports/carmovement" >
				 <div class="vendor-name">
					 <span>C</span>
					 <p>Car Movements</p>
				 </div>
				 </NavLink>
				 <NavLink to="/reports/carmovement" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 :''}
			  {this.state.profile && this.state.profile.revenue_report_access?
			 <div class="vendor-box">
			 <NavLink to="/reports/revenue">
				 <div class="vendor-name">
					 <span>R</span>
					 <p>Revenue Report</p>
				 </div>
				 </NavLink>
				 <NavLink to="/reports/revenue" class="vendor-link">
				 	<span class="ion-ios-arrow-thin-right"></span>
				 </NavLink>
			 </div>
			 :''}
		 </div>
	 </div>
	</div>  </div>

    )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(Reports);


