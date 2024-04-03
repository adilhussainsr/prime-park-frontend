import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../img/logo.png";
import { _callApi } from "../../Services/baseService";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const handleChange = (e) => {
  e.preventDefault();
};

const yesterday = moment().subtract(1, "day");
const disablePastDt = (current) => {
  return current.isAfter(yesterday);
};

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id ? this.props.match.params.id : "",
      bookingdata: {},
      time: new Date(),
      message: "",
      modalAccess: false,
      accessPopup1: false,
      accessPopup2: false,
      editAccess: true,
      pickuptime: false,
      pickupdate: false,
      disablePastDt: disablePastDt,
      datetime: new Date(),
    };
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.getTicket();
  }
  getTicket() {
    var headerdata = "";
    var data = {};
    var s = _callApi(
      data,
      "booking/checkout/" + this.state.id,
      headerdata,
      2
    ).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          
          var dt = response.data.receipt.ready_date;
          dt = dt.split("T")
          var dtdate = dt[0];
          dt = dt[1].split(":")
          var mobj = moment(
            dtdate + " "+dt[0]+" "+dt[1],
            "YYYY-MM-DDLT"
          );
          var fdt = mobj.format("YYYY-MM-DD HH:mm:ss");
          this.setState({
            bookingdata: response.data.receipt,
            datetime: new Date(response.data.receipt.ready_date),
            time: fdt,
          });
        }
      }
    });
  }
  _onInputChange = (e) => {
    const value = e.target ? e.target.value : e;

    var momentObj1 = moment(
      this.state.bookingdata.reservation_time,
      "YYYY-MM-DDLT"
    );
    var dateTime = momentObj1.format("YYYY-MM-DD HH:mm:ss");
    var timer = moment(value).format("HH:mm:ss");

    var pickup_date = moment(this.state.bookingdata.pick_up_time).format(
      "YYYY-MM-DD"
    );
    var momentObj1 = moment(pickup_date + timer, "YYYY-MM-DDLT");
    var dateTime1 = momentObj1.format("YYYY-MM-DD HH:mm:ss");
    this.setState({ message: "" });

    if (dateTime <= dateTime1) {
      this.setState({ time: value });
    } else {
      this.setState({
        message:
          "Select pickup time always greater than and equal to reservation date & time",
      });
      this.setState({ time: value });
    }
  };

  _onInputChangeDate = (e) => {
    const value = e.target ? e.target.value : e;

    var momentObj1 = moment(
      this.state.datetime,
      "YYYY-MM-DDLT"
    );
    var dateTime = momentObj1.format("YYYY-MM-DD HH:mm:ss");
    var timer = moment(value).format("YYYY-MM-DD HH:mm:ss");

    var pickup_date = moment(this.state.bookingdata.pick_up_time).format(
      "YYYY-MM-DD"
    );
    var momentObj1 = moment(pickup_date + timer, "YYYY-MM-DDLT");
    var dateTime1 = momentObj1.format("YYYY-MM-DD HH:mm:ss");
    this.setState({ message: "" });

    if (dateTime <= dateTime1) {
      this.setState({ datetime: value });
    } else {
      // this.setState({
      //   message:
      //     "Select pickup time always greater than and equal to reservation date & time",
      // });
      this.setState({ datetime: value });
    }
  };

  submit(event) {
    event.preventDefault();
    if (this.state.message.length === 0) {
      var value = this.state.time;

      var data = {};

      var pickup_date = moment(this.state.bookingdata.pick_up_time).format(
        "YYYY-MM-DD"
      );
      var ready_date = moment(this.state.datetime).format(
        "YYYY-MM-DD"
      );
      var timer = moment(value).format("HH:mm:ss");
      ready_date = ready_date + " " + timer;
      ready_date = moment(ready_date).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      var momentObj1 = moment(pickup_date + timer, "YYYY-MM-DDLT");
      var dateTime1 = momentObj1.format("YYYY-MM-DD HH:mm:ss");

      data = {
        id: this.state.id,
        pick_up_time: dateTime1,
        ready_date: ready_date,
      };

      var headerdata = "";
      var s = _callApi(data, "booking/editbooking", headerdata, 3).then(
        (response) => {
          if (response.status == 200) {
            if (response.data.status === 200) {
              console.log(response.data);
              this.setState({
                pickuptime: false,
                accessPopup2: true,
                accessPopup1: false,
                modalAccess: true,
                editAccess: true,
              });
              this.getTicket();
            }
          }
        }
      );
    }
  }
  onChangeOptionsPlus(type) {
    if (type == "popup1") {
      this.setState({ modalAccess: true, accessPopup1: true });
    } else if (type == "popup2") {
      this.setState({ modalAccess: true, accessPopup2: true });
    } else {
      this.setState({
        modalAccess: false,
        accessPopup1: false,
        accessPopup2: false,
      });
    }
  }
  onChangeEdit() {
    this.setState({ editAccess: !this.state.editAccess });
  }
  onChangePickup() {
    this.setState({ pickuptime: !this.state.pickuptime });
  }

  onChangePickupDate() {
    this.setState({ pickuptime: !this.state.pickuptime });
    this.setState({ pickupdate: !this.state.pickupdate });
  }

  render() {
    const { errors, bookingdata } = this.state;

    return (
      <>
        <div className="dashboard-wrapper">
          <div
            className={
              this.state.modalAccess
                ? "dashboard-center-popup active"
                : "dashboard-center-popup"
            }
          >
            <div className="dp-backdrop"></div>
            <div className="dp-content">
              <div className="dp-body">
                <div className="dp-popup del-ven-name">
                  {this.state.accessPopup1 ? (
                    <div className="dp-popup car-ready">
                      <div className="popup-close">
                        <span
                          className="ion-close-round"
                          onClick={() => this.onChangeOptionsPlus(false)}
                        ></span>
                      </div>
                      <div className="check-icon">
                        <span className="ion-ios-checkmark-empty"></span>
                      </div>
                      <h4 className="popup-title">Congratulations!!</h4>
                      <p className="popup-desc">
                        Your request has been submitted.
                      </p>
                      <p className="popup-desc">
                        Your car will be ready by the time you reach.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.accessPopup2 ? (
                    <div className="dp-popup request-submitted">
                      <div className="popup-close">
                        <span
                          className="ion-close-round"
                          onClick={() => this.onChangeOptionsPlus(false)}
                        ></span>
                      </div>
                      <div className="check-icon">
                        <span className="ion-ios-checkmark-empty"></span>
                      </div>
                      <h4 className="popup-title">Congratulations!!</h4>
                      <p className="popup-desc">
                        Your Ticket Id is <strong>{this.state.id}</strong>
                      </p>
                      <p className="popup-desc">
                        Your car will be ready by the time you reach.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-body full-width-body">
          <div className="dashboard-header">
            <div className="dh-logo">
              <img src={logo} />
            </div>
          </div>
          <div className="dashboard-content">
            {this.state.editAccess ? (
              <div className="dc-wrap user-detail">
                <div className="dc-body">
                  <div className="sub-header user-header">
                    <h2 className="sh-head">
                      Hello {bookingdata.customer_name}
                    </h2>
                    <p className="sh-desc">Your details are</p>
                  </div>
                  <div className="card-body">
                    <div className="card-summary">
                      <div className="card-sum-box">
                        <p>Full Name</p>
                        <h4>{bookingdata.customer_name}</h4>
                      </div>
                      <div className="card-sum-box">
                        <p>Plate number</p>
                        <h4>{bookingdata.plate_number}</h4>
                      </div>
                      <div className="card-sum-box">
                        <p>Reservation ID</p>
                        <h4>{bookingdata.reservation_id}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="sub-header">
                    <h2 className="sh-head">Pick-Up Time</h2>
                    <p className="sh-desc">
                      Your car will be ready at the scheduled time, click on
                      modify if you want to change the timings.
                    </p>
                  </div>
                  <div className="dch-date-fields">
                    <div className="input-d-field">
                      <input
                        type="text"
                        className="sc-custom-form"
                        placeholder={moment(bookingdata.ready_date).format(
                          "DD/MM/YYYY HH:mm:ss"
                        )}
                      />
                      <span className="ion-calendar"></span>
                    </div>
                  </div>
                </div>
                <div className="dc-footer">
                  <button
                    type="submit"
                    className="pp-custom-btn pp-btn-outline"
                    onClick={() => this.onChangeEdit()}
                  >
                    Modify
                  </button>
                  <button
                    type="submit"
                    className="pp-custom-btn"
                    onClick={() => this.onChangeOptionsPlus("popup1")}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : this.state.pickuptime ? (
              <div className="dc-wrap select-car-type">
                <div className="dc-header">
                  <div className="dch-left">
                    <h3 className="dc-head">{this.state.pickupdate ?'New Pickup Date':'New Pickup Time'}</h3>
                  </div>
                  {/* <div className="dch-right">
              <button type="button" onClick={this.backButton} className="pp-custom-btn"><span className="ion-arrow-left-c"></span>Back</button>
           
              </div>	  */}
                </div>
                <div className="dc-body">
                {this.state.pickupdate ?(
                  <div class="cartype-wrap">
                    <Datetime
                      dateFormat={true}
                      input={false}
                      isValidDate={this.state.disablePastDt}
                      open={true}
                      value={this.state.datetime}
                      onChange={this._onInputChangeDate}
                      timeFormat={false}
                    />
                  </div>
                ):(
                  <div className="cartype-wrap">
                    <Datetime
                      dateFormat={false}
                      input={false}
                      open={true}
                      value={this.state.time}
                      onChange={this._onInputChange}
                      timeFormat={true}
                    />
                  </div>
                )}
                  {this.state.message.length > 0 ? (
                    <span className="error">{this.state.message}</span>
                  ) : (
                    ""
                  )}
                  <div className="dc-footer">
                    <button
                      type="button"
                      onClick={() => this.state.pickupdate ?this.onChangePickupDate():this.onChangePickup()}
                      className="pp-custom-btn"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dc-wrap user-detail edit-user">
                <div className="dc-body">
                  <div className="sub-header user-header">
                    <h2 className="sh-head">
                      Hello {bookingdata.customer_name}
                    </h2>
                    <p className="sh-desc">Your details are</p>
                  </div>
                  <div className="sc-input-wrap sc-bg-gray">
                    <div className="sc-input">
                      <div className="one-row-by-two">
                        <div className="sc-input-col">
                          <label className="sc-label">Full Name</label>
                          <input
                            type="text"
                            className="sc-custom-form"
                            name="customer_name"
                            disabled
                            value={bookingdata.customer_name}
                          />
                        </div>
                        <div className="sc-input-col">
                          <label className="sc-label">Plate Number</label>
                          <input
                            type="text"
                            className="sc-custom-form"
                            name="plate_number"
                            disabled
                            value={bookingdata.plate_number}
                          />
                        </div>
                      </div>
                      <div className="one-row-by-two">
                        <div className="sc-input-col">
                          <label className="sc-label">Car type</label>
                          <input
                            type="text"
                            className="sc-custom-form"
                            disabled
                            value={
                              bookingdata.carType
                                ? bookingdata.carType.type
                                : "NA"
                            }
                          />
                        </div>
                      </div>
                      <div className="one-row-by-two">
                        <div className="sc-input-col">
                          <label className="sc-label">Reservation ID</label>
                          <input
                            type="text"
                            className="sc-custom-form"
                            disabled
                            value={bookingdata.reservation_id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-header">
                    <h2 className="sh-head">Pick-Up Time</h2>
                    <p className="sh-desc">
                      Your car will be ready at the scheduled time, click on
                      modify if you want to change the timings.
                    </p>
                  </div>
                  <div className="dch-date-fields with-labels">
                    <div
                      className="input-d-field"
                      onClick={() => this.onChangePickupDate()}
                    >
                      <label className="sc-label">Pick-Up Date</label>
                      <input
                        type="text"
                        className="sc-custom-form"
                        placeholder={moment(this.state.datetime).format(
                          "DD/MM/YYYY"
                        )}
                      />
                      <span className="ion-calendar"></span>
                    </div>
                    <div
                      className="input-d-field"
                      onClick={() => this.onChangePickup()}
                    >
                      <label className="sc-label">Pick-Up Time</label>
                      <input
                        type="text"
                        className="sc-custom-form"
                        placeholder={moment(this.state.time).format("HH:mm:ss")}
                      />
                      <span className="ion-clock"></span>
                    </div>
                  </div>
                </div>
                <div className="dc-footer">
                  <button
                    type="button"
                    onClick={this.submit}
                    className="pp-custom-btn"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(SearchResult);
