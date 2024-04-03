import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
class Carmovement extends Component {
  constructor(props) {
    super(props);
    this.state = {
		start_date:moment().subtract(15,'days'),
		end_date:moment(),
		checkoutData:{},
		checkinData:{},
		check_in_total:0,
		message:'',
		check_out_total:0,
		check_out_pending:0,
		toggleName:true,
		messages:''
	    }
	this.carmovementData();
  }
  carmovementData(){
	var headerdata = "";
	const startdate=moment(this.state.start_date).format('YYYY-MM-DD');
	const enddate=moment(this.state.end_date).format('YYYY-MM-DD');

	var data = {start_date: new Date(startdate + " 00:00:00").toJSON(), end_date: new Date(enddate + " 23:59:59").toJSON()};
	console.log(data)
	var s = _callApi(data, 'booking/carmovement', headerdata)
	.then((response) => {
		if (response.status == 200) {
			if (response.data.status === 200) {
			  console.log(response.data.data)
			  let check_in_total=response.data.data.check_in_total
			  let check_out_total=response.data.data.check_out_total.checked_out;
			  let check_out_pending=response.data.data.check_out_total.pending_check_out
			  this.setState({checkinData:response.data.data.check_in,checkoutData:response.data.data.check_out,check_in_total:check_in_total,check_out_total:check_out_total,check_out_pending:check_out_pending});
			
			 
			
			}
		}else{
	
			if (response.status === 400) {
				this.setState({messages:response.msg});
			  }
			
			
		}
	})
  }
  toggle=()=>{
	
	this.setState({toggleName:!this.state.toggleName})
  }
  _onInputChange = e => {
	const value = e.target ? e.target.value : e;
	console.log(value.diff(this.state.end_date, 'days'))
	if(value.diff(this.state.end_date, 'days')>0){
        this.setState({message:'Start date is always less than end date'})
	}else{
		this.setState({start_date:value})
		this.setState({message:''})
		this.carmovementData();
	}
  }
  finalReport(report_type){
	var headerdata = "";
	const startdate = moment(this.state.start_date).format('YYYY-MM-DD');
	const enddate = moment(this.state.end_date).format('YYYY-MM-DD');

	var data = { };
var value_report=this.state.toggleName?"checkin":"checkout";
	var s = _callApi(data, "booking/downloadcarmovement?report_type="+report_type+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON(), headerdata,2)
		.then((response) => {
			if (response.status == 200) {
				
					console.log(response.data)
					var pom = document.createElement('a');
					var csvContent=response.data; //here we load our csv data 
					var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
					var url = URL.createObjectURL(blob);
					pom.href = url;
					pom.setAttribute('download', 'carmovement.csv');
					pom.click();
					
				
			}
		})
	//localhost:8000/api/v1/booking/downloadrevenue?revenue_type=parking&vendor="+this.state.vendor_id+"&payment_mode="+this.state.toggleName+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON()
}
  _onInputChangeEnd = e => {
	const value = e.target ? e.target.value : e;

	if(value.diff(this.state.start_date, 'days')<0){
        this.setState({message:'Start date is always less than end date'})
	}else{
		this.setState({message:''})
		this.setState({end_date:value})
		this.carmovementData();
		//this.finalReport();
	}
	
  }
  render() {

    return (

		<div className="dc-wrap car-movement-report">
		<div className="dc-header">
		<div className="dch-left">
			<h3 className="dc-head">Car Movement Report</h3>
			{this.state.messages.length > 0 &&
                  <span className='error'>{this.state.messages}</span>}
			</div>
			<div className="dch-right">
			   <div className="dch-date-fields">
			   <div className="dch-d-from-to">
			   <p className="dch-d-head">From</p>
			  
                    
                      <Datetime dateFormat={true} input={true}  value={this.state.start_date} onChange={this._onInputChange} timeFormat={false} />
			
                    
			   </div>
			   <div className="dch-d-from-to">
			   <p className="dch-d-head">To</p>
			  
                    
                      <Datetime dateFormat={true} input={true} startDate={this.state.start_date} value={this.state.end_date} onChange={this._onInputChangeEnd} timeFormat={false} />
			
                    
			   </div>
		
			</div>	 
			
		</div>
	
		</div>
		{this.state.message.length>0?
     <span class="error" style={{'float':'right'}}>{this.state.message}</span>
	 
     :''}
	 <br/>
		<div className="dc-body"> 
		  <div className="rr-wrap">
		   <div className="rr-type">
		   <ul>
		   <li onClick={this.toggle} className={this.state.toggleName?"active":""}><span></span>Check-In</li>
		   <li onClick={this.toggle} className={this.state.toggleName?"":"active"}><span></span>Check-Out</li>
		   </ul>
		   </div>
		  </div>{this.state.toggleName?
		  <div className="rr-table check-in">
		  <div className="dcb-table-responsive">
			   <table className="custom-table">
				 <thead>
				   <tr>
						 <th><div className="ct-head">
						 <p>Car Type</p>
						 </div></th>
						 <th colspan="4"></th>
						 <th><div className="ct-head">
						 <p>Check-In</p>
						 </div></th>
				   </tr>
				 </thead>
				 <tbody>
				 {Object.keys(this.state.checkinData).map((key)=>(
					 <tr>
					 <td><p>{key}</p></td>
					  <td colspan="4"></td>
					 <td><p>{this.state.checkinData[key]}</p></td>
					 </tr>
				 ))}
					
				 </tbody>
				 <tfoot>
				   <tr>
						 <th><div className="ct-head">
						 <p>All</p>
						 </div></th>
						  <th colspan="4"></th>
						 <th onClick={() => this.finalReport('checkin')}><div className="ct-head">
						 <a class="hover">{this.state.check_in_total}</a>
						 </div></th>
				   </tr>
				 </tfoot>
			   </table>
				 </div>
		  </div>
		 : <div className="rr-table check-out">
		  <div className="dcb-table-responsive">
			   <table className="custom-table">
				 <thead>
				   <tr>
						 <th><div className="ct-head">
						 <p>Car Type</p>
						 </div></th>
						 <th colspan="3"></th>
						 <th><div className="ct-head">
						 <p>Check-Out</p>
						 </div></th>
						 <th><div className="ct-head">
						 <p>Pending Check-Out</p>
						 </div></th>
				   </tr>
				 </thead>
				 <tbody>
				 {Object.keys(this.state.checkoutData).map((key)=>(
					 <tr>
					 <td><p>{key}</p></td>
					  <td colspan="3"></td>
					 <td><p>{this.state.checkoutData[key].checked_out}</p></td>
					 <td><p>{this.state.checkoutData[key].pending_check_out}</p></td>
					 </tr>
				 ))}
					
				 </tbody>
				 <tfoot>
				   <tr>
						 <th><div className="ct-head">
						 <p>All</p>
						 </div></th>
						  <th colspan="3"></th>
						 <th onClick={() => this.finalReport('checkout')} ><div className="ct-head">
						 <a class="hover">{this.state.check_out_total}</a>
						 </div></th>
						 <th onClick={() => this.finalReport('pending')}><div className="ct-head">
						 <a class="hover">{this.state.check_out_pending}</a>
						 </div></th>
				   </tr>
				 </tfoot>
			   </table>
				 </div>
		  </div>
  }
	   </div>
	   </div> 	
    )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(Carmovement);


