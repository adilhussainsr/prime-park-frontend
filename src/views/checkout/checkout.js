import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import logo from '../../img/logo.png';
import moment from 'moment';
class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: (this.props.match.params.id) ? this.props.match.params.id : '',
			receiptData: {}
		}
		var headerdata = "";
		var data = {};
		var s = _callApi(data, 'booking/checkout/' + this.state.id, headerdata, 2)
			.then((response) => {
				if (response.status == 200) {
					if (response.data.status === 200) {
						this.setState({ receiptData: response.data.receipt })

					}
				}
			})
		this.submit = this.submit.bind(this);
	}
	submit(event) {

		if (this.state.receiptData.is_checked_out == false) {
			event.preventDefault();
			var headerdata = "";
			var data = {};
			var s = _callApi(data, 'booking/status/' + this.state.id, headerdata, 2)
				.then((response) => {
					if (response.status == 200) {
						if (response.data.status === 200) {

							var self = this;
							self.props.history.push({
								pathname: '/checkout/checkoutReceipt/' + this.state.id,

							})


						}
					}
				})
		} else {

			var self = this;
			self.props.history.push({
				pathname: '/checkout/checkoutReceipt/' + this.state.id,

			})

		}
	}
	getDateFinal(d1, d2) {
		var a = moment(d1, 'M/D/YYYY');
		var b = moment(d2, 'M/D/YYYY');
		console.log(a + '  ' + b)
		var diffDays = b.diff(a, 'days');
		return diffDays
	}

	render() {

		return (

			<div class="dashboard-content">
				<div class="dc-wrap cancel-check-in">
					<div class="dc-header">
						<div class="dch-left">
							<h3 class="dc-head">Check - OUT </h3>
						</div>
						<div class="dch-right">
							<NavLink to="/dashboard">	 <button type="button" class="pp-custom-btn"><span class="ion-arrow-left-c"></span>Back</button>
							</NavLink>
							{/* <button type="button" class="pp-custom-btn pp-btn-outline"><img src="img/icons/edit.png" />Edit</button> */}
						</div>
					</div>
					<div class="dc-body">
						<div class="card-by-card">
							<div class="card-left card-w-70">
								<div class="sc-bg-white">
									<div class="card-header">
										<h4>Airport Parking Receipt</h4>
										<p>15115 Lefferts Blvd south Ozone Park NY 11420
										</p>
										<div class="ch-extra">
											<div class="extra-item"><span class="ion-ios-telephone-outline"></span><p>(800) 201-3756</p></div>
											<div class="extra-item"><span class="ion-ios-email-outline"></span><p>abcd@gmail.com</p></div>
										</div>
									</div>
									<div className="card-body">
										<div className="card-summary">
											<div className="card-sum-box">
												<p>Customer's name</p>
												<h4>{this.state.receiptData.customer_name ? this.state.receiptData.customer_name : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Plate number</p>
												<h4>{this.state.receiptData.plate_number ? this.state.receiptData.plate_number : 'NA'}</h4>
											</div>
											{this.state.receiptData.prebooked == true ? '' :
												<div className="card-sum-box">
													<p>Reservation ID</p>
													<h4>{this.state.receiptData.reservation_id ? this.state.receiptData.reservation_id : 'NA'}</h4>
												</div>
											}
											<div className="card-sum-box">
												<p>Ticket ID</p>
												<h4>{this.state.receiptData.id ? this.state.receiptData.id : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Vendor</p>
												<h4>{(this.state.receiptData.vendor && this.state.receiptData.vendor.name) ? this.state.receiptData.vendor.name : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>No. of Passengers
												</p>
												<h4>{this.state.receiptData.passengers ? this.state.receiptData.passengers : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Slot No.</p>
												<h4>{(this.state.receiptData.parking && this.state.receiptData.parking.display_slot) ? this.state.receiptData.parking.display_slot : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Car Type</p>
												<h4>{(this.state.receiptData.carType && this.state.receiptData.carType.type) ? this.state.receiptData.carType.type : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Check-In time</p>
												<h4>{(this.state.receiptData && this.state.receiptData.reservation_time) ? moment(this.state.receiptData.reservation_time).format('HH:mm:ss') : 'NA'}</h4>
											</div>
											<div className="card-sum-box">
												<p>Check-Out time</p>
												<h4>{(this.state.receiptData && this.state.receiptData.pick_up_time) ? moment(this.state.receiptData.pick_up_time).format('HH:mm:ss') : ''}</h4>
											</div>
										</div>
									</div>
									<div className="card-footer">
										<div className="card-summary">
											<div className="card-sum-box card-w-50">
												<p>Date</p>
												<h4>
													<span>From-</span>{(this.state.receiptData && this.state.receiptData.reservation_time) ? moment(this.state.receiptData.reservation_time).format('MM/DD/YYYY') : ''}
													<span>  To-</span>{(this.state.receiptData && this.state.receiptData.pick_up_time) ? moment(this.state.receiptData.pick_up_time).format('MM/DD/YYYY') : ''}
												</h4>
											</div>

										</div>
									</div>
								</div>
							</div>
							<div class="card-right card-w-30">
								<div class="sc-bg-white">
									<div class="cpanel-header">
										<h4>Billing Details</h4>
										<div class="cpanel-logo">
											<img src={logo} />
										</div>
									</div>
									<div className="cpanel-body">
										{this.state.receiptData.cancellation_charges > 0 ?
											<div class="cpanel-row first-row cp-red">
												<div class="cr-left">
													<p>Cancelled Reservation</p>

												</div>
												<div class="cr-right">
													<span class="cross-mark">
														<i class="ion-ios-close-empty"></i>
													</span>
												</div>
											</div> : ''}
										<div className="cpanel-row">
											<div className="cr-left">
												<p>Onsite amount charges</p>
											</div>
											<div className="cr-right">
												<h4> {
												this.getDateFinal(moment(this.state.receiptData.reservation_time),moment())==0 && this.state.receiptData.vendorId!=null?
												0:
												(this.state.receiptData && this.state.receiptData.onsite_amount) ? this.state.receiptData.onsite_amount : '0'
											
											}</h4>
											</div>
										</div>
										<div className="cpanel-row">
											<div className="cr-left">
												<p>Parking Charges</p>
												<small>	   {
													this.state.receiptData.reservation_id == "" ?

														this.state.receiptData.hours > 0 ?
															<>

																{this.state.receiptData.days} days * {this.state.receiptData.carType &&
																	this.state.receiptData.carType.onsite_charges} +
																{this.state.receiptData.hours}hr *
																{this.state.receiptData.carType && this.state.receiptData.carType.regular_charges}

															</>
															:
															<>
																{this.state.receiptData.days} days * ${this.state.receiptData.carType && this.state.receiptData.carType.regular_charges}

															</> :


														this.state.receiptData.hours > 0 ?
															<>

																{this.state.receiptData.days} days * {this.state.receiptData.carType &&
																	this.state.receiptData.carType.onsite_charges} +
																{this.state.receiptData.hours}hr *
																{this.state.receiptData.carType && this.state.receiptData.carType.hourly_overstay_charges}

															</>
															:
															<>

																{this.getDateFinal(moment(this.state.receiptData.reservation_time), moment()) == 0 && this.state.receiptData.vendorId != null ? 1 : this.state.receiptData.days} days * ${this.getDateFinal(moment(this.state.receiptData.reservation_time), moment()) == 0 && this.state.receiptData.vendorId != null ?
																	this.state.receiptData.carType && this.state.receiptData.carType.regular_charges :
																	this.state.receiptData.carType && this.state.receiptData.carType.onsite_charges}

															</>

												} </small></div>
											<div className="cr-right">
												<h4>{
													this.getDateFinal(moment(this.state.receiptData.reservation_time), moment()) == 0 && this.state.receiptData.vendorId != null ?
														(this.state.receiptData && this.state.receiptData.cancellation_charges) ?
															this.state.receiptData.cancellation_charges : '0'
														: (this.state.receiptData && this.state.receiptData.calculated_charges) ?
															this.state.receiptData.calculated_charges : '0'}</h4>
											</div>
										</div>
										{this.state.receiptData.vendorId == null ?

											<div class="cpanel-row">
												<div class="cr-left">
													<p> Credit days
													</p>

												</div>
												<div class="cr-right">
													<h4>{this.state.receiptData.credit_days ? this.state.receiptData.credit_days : 0}</h4>
												</div>
											</div>
											: ""}

										<div class="cpanel-row">
											<div class="cr-left">
												<p> {(Math.sign(this.state.receiptData.overstay_days) == 1 || Math.sign(this.state.receiptData.overstay_hours) == 1) ? 'Overstay charges' : 'Early checkout'}</p>
												<small>({
													Math.sign(this.state.receiptData.overstay_days) == 1 ?
														this.state.receiptData.overstay_days + ' days ' : (this.state.receiptData.days - 1) + ' days '}
													{
														Math.sign(this.state.receiptData.overstay_hours) == 1 ?
															this.state.receiptData.overstay_hours + ' hrs' : ''}
													)</small>
											</div>
											<div class="cr-right">
												<h4> {(Math.sign(this.state.receiptData.overstay_days) == 1 || Math.sign(this.state.receiptData.overstay_hours) == 1)?
													(this.state.receiptData.overstay_charges ? (this.state.receiptData.overstay_charges) : 0) :
													this.state.receiptData.refund ? (-this.state.receiptData.refund) : 0
												}</h4>
											</div>
										</div>
										{this.state.receiptData.cancellation_charges > 0 ?
											<div className="cpanel-row">
												<div className="cr-left">
													<p>Service Fee</p>

												</div>
												<div className="cr-right">
													<h4>{
														this.getDateFinal(moment(this.state.receiptData.reservation_time), moment()) == 0 && this.state.receiptData.vendorId != null ? 0 :
															(this.state.receiptData && this.state.receiptData.cancellation_charges) ? this.state.receiptData.cancellation_charges : '0'}</h4>
												</div>
											</div> : ''}

										<div className="cpanel-row">
											<div className="cr-left">
												<p>Extra Passenger Fees</p>
												<small>({this.state.receiptData.passengers} Passengers)</small>
											</div>
											<div className="cr-right">
												<h4>{(this.state.receiptData && this.state.receiptData.extra_passenger_charges) ? this.state.receiptData.extra_passenger_charges : '0'}</h4>
											</div>
										</div>
										{this.state.receiptData.pre_booking_days > 0 ?
											<div class="cpanel-row">
												<div class="cr-left">
													<p>Early Check-in Charges</p>
													<small>({this.state.receiptData.pre_booking_days} Days)</small>
												</div>
												<div class="cr-right">
													<h4>{this.state.receiptData.pre_booking_charges ? this.state.receiptData.pre_booking_charges : 0}</h4>
												</div>
											</div>
											: ''}
									</div>
									<div className="cpanel-footer">
										<div className="cpanel-row cp-bg">
											<div className="cr-left">
												<p>Total amount to pay</p>
											</div>
											<div className="cr-right">
												<h4>$ {
													this.getDateFinal(moment(this.state.receiptData.reservation_time), moment()) == 0 && this.state.receiptData.vendorId != null ?
														((this.state.receiptData && this.state.receiptData.cancellation_charges) ? this.state.receiptData.cancellation_charges : '0') :
														((this.state.receiptData && this.state.receiptData.total_amount) ? this.state.receiptData.total_amount : '0')}</h4>
											</div>
										</div>
										{(this.state.receiptData && Math.sign(this.state.receiptData.overstay_days) == -1) ?
											<div className="cpanel-row cp-bg">
												<div className="cr-left">
													<p>Total amount to refund</p>
												</div>
												<div className="cr-right">
													<h4>{

														(this.state.receiptData && this.state.receiptData.overstay_charges) ? (this.state.receiptData.overstay_charges) : '0'}</h4>
												</div>
											</div>
											: ''}
										{(this.state.receiptData && this.state.receiptData.credit_days) ?
											<div className="cpanel-row cp-bg">
												<div className="cr-left">
													<p>Total Credit days</p>
												</div>
												<div className="cr-right">
													<h4>{(this.state.receiptData && this.state.receiptData.credit_days) ? this.state.receiptData.credit_days : '0'}</h4>
												</div>
											</div>
											: ''}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="dc-footer">

						<button type="button" onClick={this.submit} className="pp-custom-btn">Save</button>

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


export default connect(mapStateToProps)(Checkout);


