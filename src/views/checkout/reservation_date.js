import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
const yesterday = moment().subtract(1, 'day');
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };
  const defaultProps = {
    initialPage: 1,
    pageSize: 10
  }
  class ReservationDate extends Component {
    constructor(props) {
      super(props);
      this.state = {
       time:new Date()
      }
      this.submit=this.submit.bind(this)
     this.backButton=this.backButton.bind(this);
    }
  
    _onInputChange = e => {
      const value = e.target ? e.target.value : e;
      this.setState({time:value})
    }
    submit(event){
      event.preventDefault();
      var value=this.state.time;
      var data = {};
      const {state}=this.props.location;
      console.log(state)
      data = {
       'customer_name':state.customer_name,
       'onsite_amount':state.onsite_amount,
       'plate_number':state.plate_number,
       'reservation_id':state.reservation_id,
       'mobile_number':state.mobile_number,
       'passengers':state.passengers,
       'car_type_id':state.car_type_id,
       'vendor_id':state.vendor_id,
       'reservation_date':moment(value).format('YYYY-MM-DD')
      }
      this.props.history.push({
        pathname: '/checkout/reservation_time',
          state: data // your data array of objects
      })
    }
    backButton(event){
      event.preventDefault();
      const {state}=this.props.location;
      var data = {
        'customer_name':state.customer_name,
        'onsite_amount':state.onsite_amount,
        'plate_number':state.plate_number,
        'reservation_id':state.reservation_id,
        'mobile_number':state.mobile_number,
        'passengers':state.passengers,
        'car_type_id':state.car_type_id,
        'vendor_id':state.vendor_id
       }
       this.props.history.push({
         pathname: '/checkout/car_types',
           state: data // your data array of objects
       })
    }
    render() {
      var { isLoaded, items } = this.state;
      // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;
     
      return (

    
      <div class="dc-wrap select-car-type">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Select Reservation Date</h3>
		 </div>
		 <div class="dch-right">
		 <button onClick={this.backButton} type="button" class="pp-custom-btn"><span className="ion-arrow-left-c"></span>Back</button>
		 </div>	 
	 </div>
	 <div class="dc-body">
		 <div class="cartype-wrap">
		<Datetime dateFormat={true} input={false} open={true}    isValidDate={disablePastDt} value={this.state.time} onChange={this._onInputChange} timeFormat={false} />
			
		 </div>
     <div className="dc-footer">
     <button type="button" onClick={this.submit} className="pp-custom-btn" >OK</button>
	
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


export default connect(mapStateToProps)(ReservationDate);


