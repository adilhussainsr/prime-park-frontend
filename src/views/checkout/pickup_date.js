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
  class PickupDate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message:'',
       time:new Date(),
       disablePastDt:disablePastDt
      }
      this.submit=this.submit.bind(this);
     this.backButton=this.backButton.bind(this);
 
    }
    componentDidMount(){
      const yesterdays = moment(this.props.location.state.reservation_date).subtract(1, 'day');
      console.log(yesterdays)
       var disablePastDts = current => {
         return current.isAfter(yesterdays);
       };
       console.log(disablePastDts)
      this.setState({disablePastDt:disablePastDts})
    }
    backButton(event){
      event.preventDefault();
      const {state}=this.props.location;
      var data={};
      if(state.vendor_id==0){
        data = {
          'customer_name':state.customer_name,
         'onsite_amount':state.onsite_amount,
         'plate_number':state.plate_number,
         'reservation_id':state.reservation_id,
         'passengers':state.passengers,
         'car_type_id':state.car_type_id,
          'mobile_number':state.mobile_number,
         'vendor_id':state.vendor_id
         }
         this.props.history.push({
           pathname: '/checkout/car_types',
             state: data // your data array of objects
         })
      }else{
         data = {
          'customer_name':state.customer_name,
         'onsite_amount':state.onsite_amount,
         'plate_number':state.plate_number,
         'reservation_id':state.reservation_id,
         'passengers':state.passengers,
         'car_type_id':state.car_type_id,
         'reservation_date': state.reservation_date,
         'reservation_time':state.reservation_time,
         'mobile_number':state.mobile_number,
         'vendor_id':state.vendor_id
         }
         this.props.history.push({
           pathname: '/checkout/reservation_time',
             state: data // your data array of objects
         })
      }
   
    }
   
    _onInputChange = e => {
      const value = e.target ? e.target.value : e;
      const {state}=this.props.location;
      this.setState({message:''})
      console.log(state.reservation_date+'<'+moment(value).format('YYYY-MM-DD'))
    if(state.reservation_date<=moment(value).format('YYYY-MM-DD')){
      this.setState({time:value})

    }else{
      this.setState({message:'Select pickup date always greater than and equal to reservation date'})
      this.setState({time:value})
      
    }
     
    }
    submit(event){
      event.preventDefault();
      if(this.state.message.length==0){
      var value=this.state.time;
      var data = {};
      const {state}=this.props.location;
      data = {
       'customer_name':state.customer_name,
       'onsite_amount':state.onsite_amount,
       'plate_number':state.plate_number,
       'reservation_id':state.reservation_id,
       'passengers':state.passengers,
       'car_type_id':state.car_type_id,
       'pickup_date':moment(value).format('YYYY-MM-DD'),
       'reservation_date': state.reservation_date,
       'reservation_time':state.reservation_time,
       'mobile_number':state.mobile_number,
       'vendor_id':state.vendor_id
      }
      console.log(state)
      this.props.history.push({
        pathname: '/checkout/pickup_time',
          state: data // your data array of objects
      })
    }else{
      this.setState({message:'Select pickup date always greater than and equal to reservation date'})
      
    }
    }
  
    render() {
      var { isLoaded, items } = this.state;
      // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;
     
      return (

    
      <div class="dc-wrap select-car-type">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Select Pickup Date</h3>
		 </div>
		 <div class="dch-right">
     <button type="button" onClick={this.backButton} class="pp-custom-btn"><span className="ion-arrow-left-c"></span>Back</button>
	
		 </div>	 
	 </div>
	 <div class="dc-body">
		 <div class="cartype-wrap">
		<Datetime dateFormat={true} input={false}        isValidDate={this.state.disablePastDt}
 open={true} value={this.state.time}  onChange={this._onInputChange} timeFormat={false} />
			
		 </div>
     {this.state.message.length>0?
     <span class="error">{this.state.message}</span>
     :''}
     <div className="dc-footer">
     <button type="button" onClick={this.submit} className="pp-custom-btn" >Ok</button>
	
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


export default connect(mapStateToProps)(PickupDate);


