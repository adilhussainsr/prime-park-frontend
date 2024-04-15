import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';


class Revenue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start_date:moment().subtract(15,'days'),
			end_date:moment(),
			checkoutData: {},
			checkinData: {},
			items:[],
			vendors: [],
			vendor_id: '',
			message:'',
			revenue_data: {},
			revenue_data_carType: [],
			user_id:'',
			toggleName: "All",
			isCarTypeSelected:false
		}
		var headerdata = "";
		var data = {};
		_callApi(data, '/vendor/', headerdata, 2)
			.then((response) => {
				if (response.status === 200) {
					if (response.data.status === 200) {
						this.setState({
vendor_id:"All",
							vendors: response.data.vendors,
						});
					}
					
				} else {


				}

			});
		this.onChange = this.onChange.bind(this)
		this.finalReport=this.finalReport.bind(this)
		this.accounts=this.accounts.bind(this)
		this.carmovementData();
		this.accounts();
	}
	onChange(event) {
		event.preventDefault();
		const { name, value } = event.target;
		console.log(value+' '+name)
		if (name == 'vendor_id' && value == "Self Check-in by App") {
			this.setState({ [name]: value  }, () => {
				setTimeout(() => this.carmovementDataForCarType(), 100);
			  })
			this.setState({
			  isCarTypeSelected: true
			});
		  }
		  else if(name== 'vendor_id'){
			this.setState({
				isCarTypeSelected: false
			  });
		  }
		this.setState({ [name]: value })
		console.log(this.state.user_id)
		if(name==="user_id"){
			this.setState({ [name]: value  }, () => {
				setTimeout(() => this.carmovementData(), 100);
			  })
		

		}
	}
	finalReport(revenue_type){
		console.log('fjfjfj')
		var headerdata = "";
		const startdate = moment(this.state.start_date).format('YYYY-MM-DD');
		const enddate = moment(this.state.end_date).format('YYYY-MM-DD');

		var data = { };
		var vendorname=this.state.vendor_id;
var vendordata=this.state.vendors.filter(function(arr){return arr.name == vendorname})[0];
var url="";
if(vendorname=="----"){
	url="booking/downloadrevenue?user_id="+this.state.user_id+"&revenue_type="+revenue_type+"&payment_mode="+this.state.toggleName+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON()
}else if(vendorname=="All"){
	url="booking/downloadrevenue?user_id="+this.state.user_id+"&revenue_type="+revenue_type+"&vendor=0&payment_mode="+this.state.toggleName+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON()
}else{
	url="booking/downloadrevenue?user_id="+this.state.user_id+"&revenue_type="+revenue_type+"&vendor="+vendordata.id+"&payment_mode="+this.state.toggleName+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON()
}
		var s = _callApi(data,url , headerdata,2)
			.then((response) => {
				console.log(response)
				if (response.status == 200) {
						var pom = document.createElement('a');
var csvContent=response.data; //here we load our csv data 
var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
var url = URL.createObjectURL(blob);
pom.href = url;
pom.setAttribute('download', 'revenue.csv');
pom.click();
					
				}
			})
		//localhost:8000/api/v1/booking/downloadrevenue?revenue_type=parking&vendor="+this.state.vendor_id+"&payment_mode="+this.state.toggleName+"&start_date="+new Date(startdate + " 00:00:00").toJSON()+"&end_date="+new Date(enddate + " 23:59:59").toJSON()
	}

	accounts(pageNumber) {
		this.setState({
		  items: [],
		});
		var headerdata = "";
		const data = {
		  //page: '' + (pageNumber ? parseInt(pageNumber) : parseInt()),     
		}
		// this.setState({ activePageNo: (pageNumber ? pageNumber : this.state.activePageNo) })
		 _callApi(data, '/user/', headerdata,2)
		  .then((response) => {
			if(response.status === 200){
			if (response.data.status === 200) {
			 this.setState({
				  isLoaded: true,
				  items: response.data.users, });
			  }
			  console.log(response.data.users)
			} else {
			  this.setState({ message: response.msg });
			  setTimeout(
				() => this.setState({ message: '' }),
				2000
			  );
			  
			}
		  
		  });
	
	
	  }
	  carmovementDataForCarType() {
		var headerdata = "";
		const startdate = moment(this.state.start_date).format('YYYY-MM-DD');
		const enddate = moment(this.state.end_date).format('YYYY-MM-DD');

		var data = { start_date: moment(startdate + " 00:00:00").toJSON(), 
		end_date: moment(enddate + " 23:59:59").toJSON(), 
		vendor_id: this.state.vendor_id,
		user_id:this.state.user_id };
		console.log(data)
		var s = _callApi(data, 'booking/revenue/car', headerdata)
			.then((response) => {
				if (response.status === 200) {
					if (response.data.status === 200) {
						// console.log(response.data.revenue.vendor==='all')
						var revenue_data = response.data.revenue;
						console.log('====================================');
						console.log(revenue_data);
						console.log('====================================');
						this.setState({
							revenue_data_carType: revenue_data

						})
					}
				}else{
	
					if (response.status === 400) {
						this.setState({message:response.msg});
					  }
					
					
				}
			})
	}
	carmovementData() {
		var headerdata = "";
		const startdate = moment(this.state.start_date).format('YYYY-MM-DD');
		const enddate = moment(this.state.end_date).format('YYYY-MM-DD');

		var data = { start_date: moment(startdate + " 00:00:00").toJSON(), 
		end_date: moment(enddate + " 23:59:59").toJSON(), 
		vendor_id: this.state.vendor_id,
		user_id:this.state.user_id };
		console.log(data)
		var s = _callApi(data, 'booking/revenue', headerdata)
			.then((response) => {
				if (response.status == 200) {
					if (response.data.status === 200) {
						console.log(response.data.revenue[0])
						var revenue_data = response.data.revenue;
						this.setState({
							revenue_data: revenue_data

						})
					}
				}else{
	
					if (response.status === 400) {
						this.setState({message:response.msg});
					  }
					
					
				}
			})
	}
	toggle = (value) => {

		this.setState({ toggleName: value })
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

			<div class="dc-wrap revenue-report">
				<div class="dc-header">
					<div class="dch-left">
						<h3 class="dc-head">Revenue Report</h3>
						
					</div>
					<div className="dch-right">
					<div class="sc-input margin-data">
							<label class="sc-label">User's Name</label>
							<div class="sc-select-wrap">
								<select class="sc-custom-form" value={this.state.user_id} name="user_id" onChange={this.onChange}>
	
									<option value='' id="All">All</option>
									{this.state.items.length > 0 ?
										this.state.items.map((item, i) => (
											<option value={item.id} id={item.id}>{item.name}</option>

										)) : ''}
								</select>
								<span class="ion-ios-arrow-down select-drop-icon"></span>
							</div>
						</div>
						
						<div class="sc-input">
							<label class="sc-label">Vendor's Name</label>
							<div class="sc-select-wrap">
								<select class="sc-custom-form" value={this.state.vendor_id} name="vendor_id" onChange={this.onChange}>
									<option value='----' id='----'>Walkin</option>
									<option value='All' id="All">All</option>
									{this.state.vendors.length > 0 ?
										this.state.vendors.map((vendor, i) => (
											<option value={vendor.name} id={vendor.id}>{vendor.name}</option>

										)) : ''}
								</select>
								<span class="ion-ios-arrow-down select-drop-icon"></span>
							</div>
						</div>
						<div className="dch-date-fields">
							<div className="dch-d-from-to">
								<p className="dch-d-head">From</p>


								<Datetime dateFormat={true} input={true} value={this.state.start_date} onChange={this._onInputChange} timeFormat={false} />


							</div>
							<div className="dch-d-from-to">
								<p className="dch-d-head">To</p>


								<Datetime dateFormat={true} input={true} value={this.state.end_date} onChange={this._onInputChangeEnd} timeFormat={false} />


							</div>
						</div>
					</div>

				</div>
				{this.state.message.length>0?
     <span class="error" style={{'float':'right'}}>{this.state.message}</span>
	 
     :''}
	 <br/>
				<div class="dc-body">
					<div class="rr-wrap">
						<div class="rr-type">
							<ul>
								<li onClick={() => this.toggle('All')} className={this.state.toggleName == "All" ? "active" : ""}><span></span>All</li>
								<li onClick={() => this.toggle('Cash')} className={this.state.toggleName == "Cash" ? "active" : ""}><span></span>Cash</li>
								<li onClick={() => this.toggle('Card')} className={this.state.toggleName == "Card" ? "active" : ""}><span></span>Card</li>
							</ul>
						</div>
					</div>
					{this.state.toggleName == 'Cash' ?
					<>{!this.state.isCarTypeSelected ? 
							<>
							{this.state.revenue_data.length > 0 ?
								this.state.revenue_data.map((item, i) => (
									this.state.vendor_id === item.vendor ?
										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>

														<tbody>



														</tbody>


														<tfoot>
															<tr>
																{/* <th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.cash.parking_fee_total.no_of_cars}</p>
																</div></th>
																<th  onClick={() => this.finalReport("parking")}><div class="ct-head">
																<a class="hover">${item.cash.parking_fee_total.revenue}</a>
																</div></th> */}

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table extra-pass-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Extra Passengers</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>
															{


																Object.keys(item.cash.extra_passenger_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.cash.extra_passenger_charges).length}><p>Extra Passenger Fees</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.cash.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.cash.extra_passenger_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.cash.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.cash.extra_passenger_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.cash.extra_passenger_charges_total.extra_passengers}</p>
																</div></th>
																<th onClick={() => this.finalReport("passengers")}><div class="ct-head">
																<a class="hover">${item.cash.extra_passenger_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>

															{


																Object.keys(item.cash.overstay_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.cash.overstay_charges).length}><p>Overstay Charges</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.cash.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.cash.overstay_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.cash.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.cash.overstay_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.cash.overstay_charges_total.no_of_vehicles}</p>
																</div></th>
																<th onClick={() => this.finalReport("overstay")}><div class="ct-head">
																<a class="hover">${item.cash.overstay_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														
														<tbody>

															
<tr>
<td ><div class="ct-head"><p>Total Revenue</p></div></td>
<td ><div class="ct-head"><p>All Vehicles</p></div></td>
																					
																					<td ><div class="ct-head"><p>-</p></div></td>
																<td><div class="ct-head">	<p>${item.cash.grand_toatal}</p></div>
																					</td>
																		
																	</tr>
																

														</tbody>
														
													</table>
												</div>
											</div>
											<div class="rr-table fees-summary">

											</div>
										</> : '')) :
								<>
									<br />
									No records found
									<br />
								</>
							}
						</> : ''}
								 <>
									{/* here */}

										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
													
															<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Car</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Booking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Parking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Passenger Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Overstay Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Oversize Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Total Amount</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Received</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Due</p>
																</div></th>

														

															</tr>
														</thead>

														<tbody>
															{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.cash).map((carType) => (
																	carType == 'total'? <></>
																	: <React.Fragment key={`${index}-${carType}`}>
																	<tr>
																		<td>
																		
																			<p>{carType}</p>
																		
																		</td>
																		<td>
																	
																			<p>{carTypeData.cash[carType].booking_fees}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].parking_fee}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].extra_passenger_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].overstay_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].oversize_charges}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].total_amount}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].recived}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.cash[carType].due}</p>
																
																		</td>
																	</tr>
																	</React.Fragment>
																))
																))}
															</tbody>
														{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.cash).map((carType) => (
																	carType !== 'total'? <></>:
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Total Revenue</p>
																</div></th>
																<th><div class="ct-head">
																<p>{carTypeData.cash[carType].booking_fees}</p>
																</div></th>
																<th>
																<div class="ct-head">
																			<p>{carTypeData.cash[carType].parking_fee}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].extra_passenger_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].overstay_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].oversize_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].total_amount}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].recived}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.cash[carType].due}</p>
																		</div>
																		</th>
															</tr>
														</tfoot>
																))))}
													</table>
												</div>
											</div>
											


											
										</> 


									
								 </>

								 
						</> : ''}

					{this.state.toggleName == 'Card' ?
					<>{!this.state.isCarTypeSelected ? 
							<>
							{this.state.revenue_data.length > 0 ?
								this.state.revenue_data.map((item, i) => (
									this.state.vendor_id === item.vendor ?
										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>

														<tbody>

															{


																Object.keys(item.credit.parking_fee).map((key, j) => (
																	<tr>
																		{j == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.credit.parking_fee).length}><p>Parking Fee</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.parking_fee[key].no_of_cars}</p></td>
																				<td><p>{item.credit.parking_fee[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.parking_fee[key].no_of_cars}</p></td>
																				<td><p>{item.credit.parking_fee[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}


														</tbody>


														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.credit.parking_fee_total.no_of_cars}</p>
																</div></th>
																<th onClick={() => this.finalReport("parking")}><div class="ct-head">
																<a class="hover">${item.credit.parking_fee_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table extra-pass-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Extra Passengers</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>
															{


																Object.keys(item.credit.extra_passenger_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.credit.extra_passenger_charges).length}><p>Extra Passenger Fees</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.credit.extra_passenger_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.credit.extra_passenger_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.credit.extra_passenger_charges_total.extra_passengers}</p>
																</div></th>
																<th  onClick={() => this.finalReport("passengers")}><div class="ct-head">
																<a class="hover">${item.credit.extra_passenger_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>

															{


																Object.keys(item.credit.overstay_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.credit.overstay_charges).length}><p>Overstay Charges</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.credit.overstay_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.credit.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.credit.overstay_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.credit.overstay_charges_total.no_of_vehicles}</p>
																</div></th>
																<th  onClick={() => this.finalReport("overstay")}><div class="ct-head">
																<a class="hover">${item.credit.overstay_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														
														<tbody>

															
														<tr>
														<td ><div class="ct-head"><p>Total Revenue</p></div></td>
<td ><div class="ct-head"><p>All Vehicles</p></div></td>
																					
																					<td ><div class="ct-head"><p>-</p></div></td>
																<td><div class="ct-head">	<p>${item.credit.grand_toatal}</p></div>
																					</td>
																	</tr>
																

														</tbody>
														
													</table>
												</div>
											</div>
											<div class="rr-table fees-summary">
												{/* <div class="dcb-table-responsive">
			   <table class="custom-table">
				 <tfoot>
				   <tr>
					 <th><div class="ct-head">
						 <p>All Reports</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>Total</p>
						 </div></th>
					 <th><div class="ct-head">
						 <p>280</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$115</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$115</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$230</p>
						 </div></th>
				   </tr>
				 </tfoot>
			   </table>
				 </div> */}
											</div>
										</> : '')) : <>
									<br />
								No records found
								<br />
								</>}
								</>
								 : 
								 <>
									{/* here */}

										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
													
															<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Car</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Booking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Parking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Passenger Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Overstay Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Oversize Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Total Amount</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Received</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Due</p>
																</div></th>

														

															</tr>
														</thead>

														<tbody>
															{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.credit).map((carType) => (
																	carType == 'total'? <></>
																	: <React.Fragment key={`${index}-${carType}`}>
																	<tr>
																		<td>
																		
																			<p>{carType}</p>
																		
																		</td>
																		<td>
																	
																			<p>{carTypeData.credit[carType].booking_fees}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].parking_fee}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].extra_passenger_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].overstay_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].oversize_charges}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].total_amount}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].recived}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.credit[carType].due}</p>
																
																		</td>
																	</tr>
																	</React.Fragment>
																))
																))}
															</tbody>
														{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.credit).map((carType) => (
																	carType !== 'total'? <></>:
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Total Revenue</p>
																</div></th>
																<th><div class="ct-head">
																<p>{carTypeData.credit[carType].booking_fees}</p>
																</div></th>
																<th>
																<div class="ct-head">
																			<p>{carTypeData.credit[carType].parking_fee}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].extra_passenger_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].overstay_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].oversize_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].total_amount}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].recived}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.credit[carType].due}</p>
																		</div>
																		</th>
															</tr>
														</tfoot>
																))))}
													</table>
												</div>
											</div>
											


											
										</> 


									
								 </>

								 }
						</> : ''}
					{this.state.toggleName == 'All' ?
						<>{!this.state.isCarTypeSelected ? 
							<>
							{this.state.revenue_data.length > 0 ?
								this.state.revenue_data.map((item, i) => (
									this.state.vendor_id === item.vendor ?
										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>

														<tbody>

															{


																Object.keys(item.all.parking_fee).map((key, j) => (
																	<tr>
																		{j == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.all.parking_fee).length}><p>Parking Fee</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.parking_fee[key].no_of_cars}</p></td>
																				<td><p>{item.all.parking_fee[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.parking_fee[key].no_of_cars}</p></td>
																				<td><p>{item.all.parking_fee[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}


														</tbody>


														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.all.parking_fee_total.no_of_cars}</p>
																</div></th>
																<th onClick={() => this.finalReport("parking")}><div class="ct-head">
																<a class="hover">${item.all.parking_fee_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table extra-pass-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Extra Passengers</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>
															{


																Object.keys(item.all.extra_passenger_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																		
																				<td rowSpan={Object.keys(item.all.extra_passenger_charges).length}><p>Extra Passenger Fees</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.all.extra_passenger_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.extra_passenger_charges[key].extra_passengers}</p></td>
																				<td><p>{item.all.extra_passenger_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Revenue</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.all.extra_passenger_charges_total.extra_passengers}</p>
																</div></th>
																<th onClick={() => this.finalReport("passengers")}><div class="ct-head">
																<a class="hover">${item.all.extra_passenger_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>
											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
														<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Car Type</p>
																</div></th>
																<th><div class="ct-head">
																	<p>No. of cars</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Revenue Received</p>
																</div></th>

															</tr>
														</thead>
														<tbody>

															{


																Object.keys(item.all.overstay_charges).map((key, k) => (
																	<tr>
																		{k == 0 ?
																			<>
																				<td rowSpan={Object.keys(item.all.overstay_charges).length}><p>Overstay Charges</p></td>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.all.overstay_charges[key].revenue}</p></td>

																			</>
																			:
																			<>
																				<td><p>{key}</p></td>
																				<td><p>{item.all.overstay_charges[key].no_of_vehicles}</p></td>
																				<td><p>{item.all.overstay_charges[key].revenue}</p></td>


																			</>
																		}
																	</tr>
																))}

														</tbody>
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Overstay Charges</p>
																</div></th>
																<th><div class="ct-head">
																	<p>All</p>
																</div></th>
																<th><div class="ct-head">
																	<p>{item.all.overstay_charges_total.no_of_vehicles}</p>
																</div></th>
																<th onClick={() => this.finalReport("overstay")}><div class="ct-head">
																<a class="hover">${item.all.overstay_charges_total.revenue}</a>
																</div></th>

															</tr>
														</tfoot>
													</table>
												</div>
											</div>


											<div class="rr-table overstay-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
													
														<tbody>

															
														<tr>
														<td ><div class="ct-head"><p>Total Revenue</p></div></td>
<td ><div class="ct-head"><p>All Vehicles</p></div></td>
																					
																					<td ><div class="ct-head"><p>-</p></div></td>
																<td><div class="ct-head">	<p>${item.all.grand_toatal}</p></div>
																					</td>	
																	</tr>
																

														</tbody>
														
													</table>
												</div>
											</div>


											<div class="rr-table fees-summary">
												{/* <div class="dcb-table-responsive">
			   <table class="custom-table">
				 <tfoot>
				   <tr>
					 <th><div class="ct-head">
						 <p>All Reports</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>Total</p>
						 </div></th>
					 <th><div class="ct-head">
						 <p>280</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$115</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$115</p>
						 </div></th>
						 <th><div class="ct-head">
						 <p>$230</p>
						 </div></th>
				   </tr>
				 </tfoot>
			   </table>
				 </div> */}
											</div>
										</> : '')) : <>
									<br />
									No records found
									<br />
								</>}
								</>
								 : 
								 <>
									{/* here */}

										<>

											<div class="rr-table park-fees">
												<div class="dcb-table-responsive">
													<table class="custom-table">
													
															<thead>
															<tr>
																<th><div class="ct-head">
																	<p>Type of Car</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Booking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Parking Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Passenger Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Overstay Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Oversize Fee</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Total Amount</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Received</p>
																</div></th>
																<th><div class="ct-head">
																	<p>Due</p>
																</div></th>

														

															</tr>
														</thead>

														<tbody>
															{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.all).map((carType) => (
																	carType == 'total'? <></>
																	: <React.Fragment key={`${index}-${carType}`}>
																	<tr>
																		<td>
																		
																			<p>{carType}</p>
																		
																		</td>
																		<td>
																	
																			<p>{carTypeData.all[carType].booking_fees}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].parking_fee}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].extra_passenger_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].overstay_charges}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].oversize_charges}</p>
																	
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].total_amount}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].recived}</p>
																		
																		</td>
																		<td>
																		
																			<p>{carTypeData.all[carType].due}</p>
																
																		</td>
																	</tr>
																	</React.Fragment>
																))
																))}
															</tbody>
														{this.state.revenue_data_carType
																.filter(item => this.state.vendor_id === item.vendor)
																.map((carTypeData, index) => (
																Object.keys(carTypeData.all).map((carType) => (
																	carType !== 'total'? <></>:
														<tfoot>
															<tr>
																<th><div class="ct-head">
																	<p>Total Revenue</p>
																</div></th>
																<th><div class="ct-head">
																<p>{carTypeData.all[carType].booking_fees}</p>
																</div></th>
																<th>
																<div class="ct-head">
																			<p>{carTypeData.all[carType].parking_fee}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].extra_passenger_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].overstay_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].oversize_charges}</p>
																			</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].total_amount}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].recived}</p>
																		</div>
																		</th>
																		<th>
																		<div class="ct-head">
																			<p>{carTypeData.all[carType].due}</p>
																		</div>
																		</th>
															</tr>
														</tfoot>
																))))}
													</table>
												</div>
											</div>
											


											
										</> 


									
								 </>

								 }
						</> : ''}
						</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	console.log(state.loginDetails);
	return state;
}


export default connect(mapStateToProps)(Revenue);


