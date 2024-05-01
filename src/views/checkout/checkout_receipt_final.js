import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { _callApi } from "../../Services/baseService";
import printImage from "../../img/icons/printer.png";
import logo from "../../img/logo.png";
import moment from "moment";
import $ from "jquery";
import ReactToPrint from "react-to-print";

class CheckoutReceiptFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id ? this.props.match.params.id : "",
      receiptData: {},
      customer_receipt: true,
      office_receipt: true,
      vechile_receipt: true,
      days: 0,
      select_text: "All",
      type: "All",
    };
    var headerdata = "";
    var data = {};
    var s = _callApi(
      data,
      "booking/checkout/" + this.state.id,
      headerdata,
      2
    ).then((response) => {
      if (response.status == 200) {
        if (response.data.status === 200) {
          this.setState({ receiptData: response.data.receipt });
          if (this.state.receiptData.prebooked == true) {
          }
        }
      }
    });
    this.PoliciesData();
  }
  PoliciesData() {
    var headerdata = "";
    var data = {};
    console.log(data);
    var s = _callApi(data, "parking/privacypolicy", headerdata, 2).then(
      (response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            console.log(response.data.data);
            this.setState({ PrivacyPolicy: response.data.policy });
          }
        }
      }
    );
  }
  rawMarkup() {
    var rawMarkup = this.state.PrivacyPolicy;
    return { __html: rawMarkup };
  }
  onChangeOptions(value) {
    if (value === "All") {
      this.setState({
        customer_receipt: true,
        office_receipt: true,
        vechile_receipt: true,
        select_text: "All",
        type: "All",
      });
    } else if (value === "customer_receipt") {
      this.setState({
        customer_receipt: true,
        office_receipt: false,
        vechile_receipt: false,
        select_text: "Cus..",
        type: "Office & Customer Receipt",
      });
    } else if (value === "office_receipt") {
      this.setState({
        customer_receipt: false,
        office_receipt: true,
        vechile_receipt: false,
        select_text: "Off..",
        type: "Office Receipt",
      });
    } else if (value === "vechile_receipt") {
      this.setState({
        customer_receipt: false,
        office_receipt: false,
        vechile_receipt: true,
        select_text: "Vec..",
        type: "Vehicle Receipt",
      });
    }
  }
  getDateFinal(d1, d2) {
    var a = moment(d1, "M/D/YYYY");
    var b = moment(d2, "M/D/YYYY");
    console.log(a + "  " + b);
    var diffDays = b.diff(a, "days");
    return diffDays;
  }
  toggle = () => {
    if ($(".custom-select").hasClass("active")) {
      $(".custom-select").removeClass("active");
    } else {
      $(".custom-select").addClass("active");
    }
  };
  render() {
    return (
      <div className="dashboard-content" ref={(el) => (this.componentRef = el)}>
        <div class="row dc-wrap check-in-receipt updated">
          <div class="dch-right">
            <ReactToPrint
              trigger={() => {
                return (
                  <button className="print-btn">
                    <img src={printImage} />
                    Print
                  </button>
                );
              }}
              content={() => this.componentRef}
            />
            <div class="custom-select">
              <div class="select-field">
                <p class="select-value">{this.state.type}</p>
                <span
                  className="ion-ios-arrow-down"
                  onClick={this.toggle}
                ></span>
              </div>
              <div className="">
                {/* <ReactToPrint
								trigger={() => {
									// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
									// to the root node of the returned component as it will be overwritten.
									return <button className="print-btn"><img src={printImage} />Printqq</button>;
								}}
								content={() => this.componentRef}
							/> */}
                <div
                  className="custom-select"
                  style={{ background: "none", border: "none" }}
                >
                  <div className="select-field" style={{ marginTop: "-20px" }}>
                    {/* <p className="select-value">{this.state.select_text}aa</p> */}
                    {/* <span className="ion-ios-arrow-down" onClick={this.toggle}></span> */}
                    <div className="select-field-list">
                      <ul>
                        <li onClick={() => this.onChangeOptions("All")}>All</li>
                        <li
                          onClick={() =>
                            this.onChangeOptions("customer_receipt")
                          }
                        >
                          Customer's Receipt and Office's Receipt
                        </li>
                        <li
                          onClick={() =>
                            this.onChangeOptions("vechile_receipt")
                          }
                        >
                          Vehicle's Receipt
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.customer_receipt ? (
            <>
              <div class="col50">
                <div class="sub-card updated">
                  <div class="sub-card-header">
                    <h4 class="sub-card-head">Office's Receipt</h4>
                  </div>
                  <div class="card-by-card">
                    <div class="card-left card-w-60">
                      <div class="sc-bg-white">
                        <div class="card-header">
                          <h4>Prime Park Receipt</h4>
                          <p>
                            206 S Weller St, Seattle, WA 98104, United States
                          </p>
                          <div class="ch-extra">
                            <div class="extra-item">
                              <span class="ion-ios-telephone-outline"></span>
                              <p>+918298738900</p>
                            </div>
                          </div>
                          <div class="date-data">
                            <div class="date-left">
                              <span>From-</span>
                              {this.state.receiptData &&
                              this.state.receiptData.reservation_time
                                ? moment(
                                    this.state.receiptData.reservation_time
                                  ).format("DD/MM/YYYY")
                                : ""}
                            </div>{" "}
                            <div class="date-right">
                              {" "}
                              <span> To-</span>
                              {this.state.receiptData &&
                              this.state.receiptData.pick_up_time
                                ? moment(
                                    this.state.receiptData.pick_up_time
                                  ).format("DD/MM/YYYY")
                                : ""}
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="card-summary">
                            <div class="card-sum-box card-w-50">
                              <p>Name</p>
                              <h4>
                                {this.state.receiptData.customer_name
                                  ? this.state.receiptData.customer_name
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Passenger</p>
                              <h4>
                                {this.state.receiptData.passengers
                                  ? this.state.receiptData.passengers
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Phone number</p>
                              <h4>
                                {this.state.receiptData &&
                                this.state.receiptData.mobile_number
                                  ? this.state.receiptData.mobile_number
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Ticket ID</p>
                              <h4>
                                {this.state.receiptData &&
                                this.state.receiptData.id
                                  ? this.state.receiptData.id
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Plate number</p>
                              <h4>
                                {this.state.receiptData.plate_number
                                  ? this.state.receiptData.plate_number
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Payment</p>
                              <h4>Cash</h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Slot Number</p>
                              <h4>
                                {this.state.receiptData.parking &&
                                this.state.receiptData.parking.display_slot
                                  ? this.state.receiptData.parking.display_slot
                                  : "NA"}
                              </h4>
                            </div>
                            <div class="card-sum-box card-w-50">
                              <p>Amount Paid</p>
                              <h4>
                                ${" "}
                                {this.state.receiptData &&
                                this.state.receiptData.total_amount
                                  ? this.state.receiptData.total_amount
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-right card-w-30">
                      <div className="sc-bg-white">
                        <div className="cpanel-header">
                          <h4>Billing Details</h4>
                          <div className="cpanel-logo">
                            <img src={logo} />
                          </div>
                        </div>
                        <div className="cpanel-body">
                          <div className="cpanel-row">
                            <div className="cr-left">
                              <p>Onsite amount charges</p>
                            </div>
                            <div className="cr-right">
                              <h4>
                                {" "}
                                {this.state.receiptData &&
                                this.state.receiptData.onsite_amount
                                  ? this.state.receiptData.onsite_amount
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                          <div class="cpanel-row">
                            <div class="cr-left">
                              <p>Parking Charges </p>
                              <small>
                                {this.state.receiptData.reservation_id == "" ? (
                                  this.state.receiptData.hours > 0 ? (
                                    <>
                                      {this.state.receiptData.days} days *{" "}
                                      {this.state.receiptData.carType &&
                                        this.state.receiptData.carType
                                          .onsite_charges}{" "}
                                      +{this.state.receiptData.hours}hr *
                                      {this.state.receiptData.carType &&
                                        this.state.receiptData.carType
                                          .regular_charges}
                                    </>
                                  ) : (
                                    <>
                                      {this.state.receiptData.days} days * $
                                      {this.state.receiptData.carType &&
                                        this.state.receiptData.carType
                                          .regular_charges}
                                    </>
                                  )
                                ) : this.state.receiptData.hours > 0 ? (
                                  <>
                                    {this.state.receiptData.days} days *{" "}
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .onsite_charges}{" "}
                                    +{this.state.receiptData.hours}hr *
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .hourly_overstay_charges}
                                  </>
                                ) : (
                                  <>
                                    {this.state.receiptData.days} days * $
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .onsite_charges}
                                  </>
                                )}
                              </small>
                              <small>
                                {" "}
                                (
                                {this.state.receiptData.carType &&
                                this.state.receiptData.carType.type
                                  ? " " + this.state.receiptData.carType.type
                                  : ""}{" "}
                                )
                              </small>
                            </div>
                            <div class="cr-right">
                              <h4>
                                {this.state.receiptData.calculated_charges
                                  ? this.state.receiptData.calculated_charges
                                  : 0}
                              </h4>
                            </div>
                          </div>

                          <div class="cpanel-row">
                            <div class="cr-left">
                              <p>
                                {" "}
                                {Math.sign(
                                  this.state.receiptData.overstay_days
                                ) == 1
                                  ? "Overstay charges"
                                  : "Early return"}
                              </p>
                              <small>
                                ({this.state.receiptData.overstay_days} days)
                              </small>
                            </div>
                            <div class="cr-right">
                              <h4>
                                {" "}
                                {this.state.receiptData.overstay_charges
                                  ? this.state.receiptData.overstay_charges
                                  : 0}
                              </h4>
                            </div>
                          </div>

                          <div className="cpanel-row">
                            <div className="cr-left">
                              <p>Extra Passenger Fees</p>
                              <small>
                                ({this.state.receiptData.passengers} Passengers)
                              </small>
                            </div>
                            <div className="cr-right">
                              <h4>
                                {" "}
                                {this.state.receiptData &&
                                this.state.receiptData.extra_passenger_charges
                                  ? this.state.receiptData
                                      .extra_passenger_charges
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                          {this.state.receiptData.pre_booking_days > 0 ? (
                            <div class="cpanel-row">
                              <div class="cr-left">
                                <p>Early Check-in Charges</p>
                                <small>
                                  ({this.state.receiptData.pre_booking_days}{" "}
                                  Days)
                                </small>
                              </div>
                              <div class="cr-right">
                                <h4>
                                  {this.state.receiptData.pre_booking_charges
                                    ? this.state.receiptData.pre_booking_charges
                                    : 0}
                                </h4>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="cpanel-footer">
                          <div className="cpanel-row cp-bg">
                            <div className="cr-left">
                              <p>Total amount to pay</p>
                            </div>
                            <div className="cr-right">
                              <h4>
                                ${" "}
                                {this.state.receiptData &&
                                this.state.receiptData.total_amount
                                  ? this.state.receiptData.total_amount
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="term-condition-box updated">
                  <div class="tc-header">
                    <h4 class="tc-head">Terms & Conditions</h4>
                  </div>
                  <div class="tc-body">
                    <ul>
                      <li>
                        <strong>1.</strong>Your reservation will be subject to
                        Parking hourly and daily rate as soon as the voucher is
                        expired. The hourly rate is 10/hour and the daily rate
                        is $15 for small cars and $18 for SUV/ Trucks per day.
                      </li>
                      <li>
                        <strong>2.</strong>This facility does NOT allow in/out
                        privileges. You CANNOT enter & exit more than once.
                      </li>
                      <li>
                        <strong>3.</strong>For all Canceled online
                        vouchers/Reservation customers are required to pay for
                        one day of parking and a $10 service fee.
                      </li>
                      <li>
                        <strong>4.</strong>This facility does not allow online
                        reservation extensions. Additional time must be paid
                        on-site at a regular rate.
                      </li>
                      <li>
                        <strong>5.</strong>Customer is required to take pictures
                        of their vehicles (all sides) at the location during
                        drop-off and also agree that no damage claim can be
                        filed without providing those pictures.
                      </li>
                      <li>
                        <strong>6.</strong>Customer must leave the car key to
                        the attendant and agree that failure to do so may result
                        to towing fees from $75 to $150.
                      </li>
                      <li>
                        <strong>7.</strong>Customer agree that all balance must
                        be paid in full prior to retrieval of vehicle.
                      </li>
                    </ul>
                  </div>
                  <div class="tc-footer">
                    <div class="tcf-left">
                      <div class="check-condition active">
                        <span class="check-mark">
                          <i class="ion-ios-checkmark-empty"></i>
                        </span>
                        <p class="condition-text">
                          I accept the Terms & Conditions
                        </p>
                      </div>
                    </div>
                    <div class="tcf-right">
                      <div class="sign-field">
                        <h3>Customer's Signature _________ </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col50">
                <div class="dc-header">
                  <div class="dch-left">
                    <h3 class="dc-head">Customer's Receipt</h3>
                  </div>
                </div>
                <div class="card-by-card">
                  <div class="card-left card-w-60">
                    <div class="sc-bg-white">
                      <div class="card-header">
                        <h4>Prime Park Receipt</h4>
                        <p>206 S Weller St, Seattle, WA 98104, United States</p>
                        <div class="ch-extra">
                          <div class="extra-item">
                            <span class="ion-ios-telephone-outline"></span>
                            <p>+918298738900</p>
                          </div>
                        </div>
                        <div class="date-data">
                          <div class="date-left">
                            <span>From-</span>
                            {this.state.receiptData &&
                            this.state.receiptData.reservation_time
                              ? moment(
                                  this.state.receiptData.reservation_time
                                ).format("DD/MM/YYYY")
                              : ""}
                          </div>{" "}
                          <div class="date-right">
                            {" "}
                            <span> To-</span>
                            {this.state.receiptData &&
                            this.state.receiptData.pick_up_time
                              ? moment(
                                  this.state.receiptData.pick_up_time
                                ).format("DD/MM/YYYY")
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="card-summary">
                          <div class="card-sum-box card-w-50">
                            <p>Name</p>
                            <h4>
                              {this.state.receiptData.customer_name
                                ? this.state.receiptData.customer_name
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Vendor</p>
                            <h4>
                              {this.state.receiptData.vendor &&
                              this.state.receiptData.vendor.name
                                ? this.state.receiptData.vendor.name
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Passenger</p>
                            <h4>
                              {this.state.receiptData.passengers
                                ? this.state.receiptData.passengers
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Phone number</p>
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.mobile_number
                                ? this.state.receiptData.mobile_number
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Reservation ID</p>
                            <h4>
                              {this.state.receiptData.reservation_id
                                ? this.state.receiptData.reservation_id
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Plate number</p>
                            <h4>
                              {this.state.receiptData.plate_number
                                ? this.state.receiptData.plate_number
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Ticket ID</p>
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.id
                                ? this.state.receiptData.id
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Slot Number</p>
                            <h4>
                              {this.state.receiptData.parking &&
                              this.state.receiptData.parking.display_slot
                                ? this.state.receiptData.parking.display_slot
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Payment</p>
                            <h4>Cash</h4>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="card-summary">
                          <div class="card-sum-box card-w-50">
                            <p>Check-In Time</p>
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.reservation_time
                                ? moment(
                                    this.state.receiptData.reservation_time
                                  ).format("hh:mm a")
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box card-w-50">
                            <p>Check-Out Time</p>
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.pick_up_time
                                ? moment(
                                    this.state.receiptData.pick_up_time
                                  ).format("hh:mm a")
                                : "NA"}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-right card-w-30">
                    <div className="sc-bg-white">
                      <div className="cpanel-header">
                        <h4>Billing Details</h4>
                        <div className="cpanel-logo">
                          <img src={logo} />
                        </div>
                      </div>
                      <div className="cpanel-body">
                        {this.state.receiptData.cancellation_charges > 0 ? (
                          <div class="cpanel-row first-row cp-red">
                            <div class="cr-left">
                              <p>Cancelled Reservation</p>
                            </div>
                            <div class="cr-right">
                              <span class="cross-mark">
                                <i class="ion-ios-close-empty"></i>
                              </span>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="cpanel-row">
                          <div className="cr-left">
                            <p>Onsite amount charges</p>
                          </div>
                          <div className="cr-right">
                            <h4>
                              {" "}
                              {this.getDateFinal(
                                moment(this.state.receiptData.reservation_time),
                                moment()
                              ) == 0 && this.state.receiptData.vendorId != null
                                ? 0
                                : this.state.receiptData &&
                                  this.state.receiptData.onsite_amount
                                ? this.state.receiptData.onsite_amount
                                : "0"}
                            </h4>
                          </div>
                        </div>
                        <div className="cpanel-row">
                          <div className="cr-left">
                            <p>Parking Charges</p>
                            <small>
                              {" "}
                              {this.state.receiptData.reservation_id == "" ? (
                                this.state.receiptData.hours > 0 ? (
                                  <>
                                    {this.state.receiptData.days} days *{" "}
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .onsite_charges}{" "}
                                    +{this.state.receiptData.hours}hr *
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .regular_charges}
                                  </>
                                ) : (
                                  <>
                                    {this.state.receiptData.days} days * $
                                    {this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .regular_charges}
                                  </>
                                )
                              ) : this.state.receiptData.hours > 0 ? (
                                <>
                                  {this.state.receiptData.days} days *{" "}
                                  {this.state.receiptData.carType &&
                                    this.state.receiptData.carType
                                      .onsite_charges}{" "}
                                  +{this.state.receiptData.hours}hr *
                                  {this.state.receiptData.carType &&
                                    this.state.receiptData.carType
                                      .hourly_overstay_charges}
                                </>
                              ) : (
                                <>
                                  {this.getDateFinal(
                                    moment(
                                      this.state.receiptData.reservation_time
                                    ),
                                    moment()
                                  ) == 0 &&
                                  this.state.receiptData.vendorId != null
                                    ? 1
                                    : this.state.receiptData.days}{" "}
                                  days * $
                                  {this.getDateFinal(
                                    moment(
                                      this.state.receiptData.reservation_time
                                    ),
                                    moment()
                                  ) == 0 &&
                                  this.state.receiptData.vendorId != null
                                    ? this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .regular_charges
                                    : this.state.receiptData.carType &&
                                      this.state.receiptData.carType
                                        .onsite_charges}
                                </>
                              )}{" "}
                            </small>
                          </div>
                          <div className="cr-right">
                            <h4>
                              {this.getDateFinal(
                                moment(this.state.receiptData.reservation_time),
                                moment()
                              ) == 0 && this.state.receiptData.vendorId != null
                                ? this.state.receiptData &&
                                  this.state.receiptData.cancellation_charges
                                  ? this.state.receiptData.cancellation_charges
                                  : "0"
                                : this.state.receiptData &&
                                  this.state.receiptData.calculated_charges
                                ? this.state.receiptData.calculated_charges
                                : "0"}
                            </h4>
                          </div>
                        </div>

                        {this.state.receiptData.vendorId == null ? (
                          <div class="cpanel-row">
                            <div class="cr-left">
                              <p> Credit days</p>
                            </div>
                            <div class="cr-right">
                              <h4>
                                {this.state.receiptData.credit_days
                                  ? this.state.receiptData.credit_days
                                  : 0}
                              </h4>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div class="cpanel-row">
                          <div class="cr-left">
                            <p>
                              {" "}
                              {Math.sign(
                                this.state.receiptData.overstay_days
                              ) == 1 ||
                              Math.sign(
                                this.state.receiptData.overstay_hours
                              ) == 1
                                ? "Overstay charges"
                                : "Early checkout"}
                            </p>
                            <small>
                              (
                              {Math.sign(
                                this.state.receiptData.overstay_days
                              ) == 1
                                ? this.state.receiptData.overstay_days +
                                  " days "
                                : this.state.receiptData.days - 1 + " days "}
                              {Math.sign(
                                this.state.receiptData.overstay_hours
                              ) == 1
                                ? this.state.receiptData.overstay_hours + " hrs"
                                : ""}
                              )
                            </small>
                          </div>
                          <div class="cr-right">
                            <h4>
                              {" "}
                              {Math.sign(
                                this.state.receiptData.overstay_days
                              ) == 1 ||
                              Math.sign(
                                this.state.receiptData.overstay_hours
                              ) == 1
                                ? this.state.receiptData.overstay_charges
                                  ? this.state.receiptData.overstay_charges
                                  : 0
                                : this.state.receiptData.refund
                                ? -this.state.receiptData.refund
                                : 0}
                            </h4>
                          </div>
                        </div>
                        {this.state.receiptData.cancellation_charges > 0 ? (
                          <div className="cpanel-row">
                            <div className="cr-left">
                              <p>Service Fee</p>
                            </div>
                            <div className="cr-right">
                              <h4>
                                {this.getDateFinal(
                                  moment(
                                    this.state.receiptData.reservation_time
                                  ),
                                  moment()
                                ) == 0 &&
                                this.state.receiptData.vendorId != null
                                  ? 0
                                  : this.state.receiptData &&
                                    this.state.receiptData.cancellation_charges
                                  ? this.state.receiptData.cancellation_charges
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="cpanel-row">
                          <div className="cr-left">
                            <p>Extra Passenger Fees</p>
                            <small>
                              ({this.state.receiptData.passengers} Passengers)
                            </small>
                          </div>
                          <div className="cr-right">
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.extra_passenger_charges
                                ? this.state.receiptData.extra_passenger_charges
                                : "0"}
                            </h4>
                          </div>
                        </div>
                        {this.state.receiptData.pre_booking_days > 0 ? (
                          <div class="cpanel-row">
                            <div class="cr-left">
                              <p>Early Check-in Charges</p>
                              <small>
                                ({this.state.receiptData.pre_booking_days} Days)
                              </small>
                            </div>
                            <div class="cr-right">
                              <h4>
                                {this.state.receiptData.pre_booking_charges
                                  ? this.state.receiptData.pre_booking_charges
                                  : 0}
                              </h4>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="cpanel-footer">
                        <div className="cpanel-row cp-bg">
                          <div className="cr-left">
                            <p>Total amount to pay</p>
                          </div>
                          <div className="cr-right">
                            <h4>
                              ${" "}
                              {this.getDateFinal(
                                moment(this.state.receiptData.reservation_time),
                                moment()
                              ) == 0 && this.state.receiptData.vendorId != null
                                ? this.state.receiptData &&
                                  this.state.receiptData.cancellation_charges
                                  ? this.state.receiptData.cancellation_charges
                                  : "0"
                                : this.state.receiptData &&
                                  this.state.receiptData.total_amount
                                ? this.state.receiptData.total_amount
                                : "0"}
                            </h4>
                          </div>
                        </div>
                        {this.state.receiptData &&
                        this.state.receiptData.credit_days ? (
                          <div className="cpanel-row cp-bg">
                            <div className="cr-left">
                              <p>Total Credit days</p>
                            </div>
                            <div className="cr-right">
                              <h4>
                                {this.state.receiptData &&
                                this.state.receiptData.credit_days
                                  ? this.state.receiptData.credit_days
                                  : "0"}
                              </h4>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
				 
                </div>
                <div class="term-condition-box">
                  <div class="tc-header">
                    <h4 class="tc-head">Terms & Conditions</h4>
                  </div>
                  <div class="tc-body">
                    <ul>
                      <li>
                        <strong>1.</strong>Your reservation will be subject to
                        Parking hourly and daily rate as soon as the voucher is
                        expired. The hourly rate is 10/hour and the daily rate
                        is $15 for small cars and $18 for SUV/ Trucks per day.
                      </li>
                      <li>
                        <strong>2.</strong>This facility does NOT allow in/out
                        privileges. You CANNOT enter & exit more than once.
                      </li>
                      <li>
                        <strong>3.</strong>For all Canceled online
                        vouchers/Reservation customers are required to pay for
                        one day of parking and a $10 service fee.
                      </li>
                      <li>
                        <strong>4.</strong>This facility does not allow online
                        reservation extensions. Additional time must be paid
                        on-site at a regular rate.
                      </li>
                      <li>
                        <strong>5.</strong>Customer is required to take pictures
                        of their vehicles (all sides) at the location during
                        drop-off and also agree that no damage claim can be
                        filed without providing those pictures.
                      </li>
                      <li>
                        <strong>6.</strong>Customer must leave the car key to
                        the attendant and agree that failure to do so may result
                        to towing fees from $75 to $150.
                      </li>
                      <li>
                        <strong>7.</strong>Customer agree that all balance must
                        be paid in full prior to retrieval of vehicle.
                      </li>
                    </ul>
                  </div>
                  <div class="tc-footer">
                    <div class="tcf-left">
                      <div class="check-condition active">
                        <span class="check-mark">
                          <i class="ion-ios-checkmark-empty"></i>
                        </span>
                        <p class="condition-text">
                          I accept the Terms & Conditions
                        </p>
                      </div>
                    </div>
                    <div class="tcf-right">
                      <div class="sign-field">
                        <h3>Customer's Signature _________ </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <br />
        {this.state.vechile_receipt ? (
          <div class="col60" style={{display:'none'}}>
            <div class="sub-card updated vehicle-spacing">
              <div class="sub-card-header">
                <h4 class="sub-card-head">Vehicle's Receipt</h4>
              </div>
              <div class="card-by-card slot-card">
                <div class="card-left">
                  <div class="sc-bg-white">
                    <div class="card-header">
                      <h4>Prime Park Receipt</h4>
                      <p>206 S Weller St, Seattle, WA 98104, United States</p>
                      <div class="ch-extra">
                        <div class="extra-item">
                          <span class="ion-ios-telephone-outline"></span>
                          <p>+918298738900</p>
                        </div>
                      </div>
                      <div class="date-data">
                        <div class="date-left">
                          Date: <span>From-</span> 22/02/2021
                        </div>
                        <div class="date-right">
                          <span> To- </span>22/02/2021
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="card-sum-slot-wrap">
                        <div class="card-summary">
                          <div class="card-sum-box">
                            <p>Name</p>
                            <h4>
                              {this.state.receiptData.customer_name
                                ? this.state.receiptData.customer_name
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box">
                            <p>Vendor</p>
                            <h4>
                              {this.state.receiptData.vendor &&
                              this.state.receiptData.vendor.name
                                ? this.state.receiptData.vendor.name
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box">
                            <p>Reservation ID</p>
                            <h4>
                              {this.state.receiptData.reservation_id
                                ? this.state.receiptData.reservation_id
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box">
                            <p>Passenger</p>
                            <h4>
                              {this.state.receiptData.passengers
                                ? this.state.receiptData.passengers
                                : "NA"}
                            </h4>
                          </div>
                          <div class="card-sum-box">
                            <p>Phone number</p>
                            <h4>
                              {this.state.receiptData &&
                              this.state.receiptData.mobile_number
                                ? this.state.receiptData.mobile_number
                                : "NA"}
                            </h4>
                          </div>
                        </div>
                        <div class="card-slot-no">
                          {this.state.receiptData.parking &&
                          this.state.receiptData.parking.display_slot
                            ? this.state.receiptData.parking.display_slot
                            : "NA"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(CheckoutReceiptFinal);
