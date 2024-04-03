import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { _callApi } from "../../Services/baseService";
import cartypeImage from "../../img/cartype.png";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};
class PickupTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      message: "",
    };
    this.submit = this.submit.bind(this);
    this.backButton = this.backButton.bind(this);
  }
  backButton(event) {
    event.preventDefault();
    const { state } = this.props.location;
    var data = {
      customer_name: state.customer_name,
      onsite_amount: state.onsite_amount,
      plate_number: state.plate_number,
      reservation_id: state.reservation_id,
      passengers: state.passengers,
      car_type_id: state.car_type_id,
      reservation_date: state.reservation_date,
      reservation_time: state.reservation_time,
      pickup_date: state.pickup_date,
      mobile_number: state.mobile_number,
      vendor_id: state.vendor_id,
    };
    this.props.history.push({
      pathname: "/checkout/pickup_date",
      state: data, // your data array of objects
    });
  }
  _onInputChange = (e) => {
    const value = e.target ? e.target.value : e;
    const { state } = this.props.location;
    var momentObj = moment(
      state.reservation_date + state.reservation_time,
      "YYYY-MM-DDLT"
    );
    var dateTime = momentObj.format("YYYY-MM-DD HH:mm:ss");
    var timer = moment(value).format("HH:mm:ss");
    var momentObj1 = moment(state.pickup_date + timer, "YYYY-MM-DDLT");
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

  submit(event) {
    event.preventDefault();
    if (this.state.message.length == 0) {
      var value = this.state.time;
      console.log(value);
      var data = {};
      const { state } = this.props.location;
      var momentObj = moment(
        state.reservation_date + state.reservation_time,
        "YYYY-MM-DDLT"
      );
      var dateTime = momentObj.format("YYYY-MM-DD HH:mm:ss");
      var timer = moment(value).format("HH:mm:ss");
      var momentObj1 = moment(state.pickup_date + timer, "YYYY-MM-DDLT");
      var dateTime1 = momentObj1.format("YYYY-MM-DD HH:mm:ss");

      console.log(state);
      if (parseInt(state.vendor_id) > 0) {
        data = {
          prebooked: true,
          customer_name: state.customer_name,
          onsite_amount: state.onsite_amount == "" ? 0 : state.onsite_amount,
          plate_number: state.plate_number,
          reservation_id: state.reservation_id,
          passengers: state.passengers,
          car_type_id: state.car_type_id,
          reservation_time: new Date(dateTime).toJSON(),
          pick_up_time: new Date(dateTime1).toJSON(),
          mobile_number: state.mobile_number,
          vendor_id: state.vendor_id,
          booking_time: new Date(),
        };
      } else {
        data = {
          prebooked: false,
          customer_name: state.customer_name,
          onsite_amount: 0,
          plate_number: state.plate_number,
          mobile_number: state.mobile_number,
          reservation_id: state.reservation_id,
          passengers: state.passengers,
          car_type_id: state.car_type_id,
          vendor_id: null,
          reservation_time: new Date(dateTime).toJSON(),
          pick_up_time: new Date(dateTime1).toJSON(),
          booking_time: null,
        };
      }


      this.props.history.push({
        pathname: '/checkout/parkingblock',
          state: data // your data array of objects
      })  

      // var headerdata = "";
      // var s = _callApi(data, "booking/checkin", headerdata).then((response) => {
      //   if (response.status == 200) {
      //     if (response.data.status === 200) {
      //       console.log(response.data);
      //       var self = this;
      //       self.props.history.push({
      //         pathname: "/checkout/checkout_review/" + response.data.id,
      //       });
      //     }
      //   }
      // });
    }
  }

  render() {
    var { isLoaded, items } = this.state;
    // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;

    return (
      <div className="dc-wrap select-car-type">
        <div className="dc-header">
          <div className="dch-left">
            <h3 className="dc-head">Select Pickup Time</h3>
          </div>
          <div className="dch-right">
            <button
              type="button"
              className="pp-custom-btn"
              onClick={this.backButton}
            >
              <span className="ion-arrow-left-c"></span>Back
            </button>
          </div>
        </div>
        <div className="dc-body">
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
          {this.state.message.length > 0 ? (
            <span class="error">{this.state.message}</span>
          ) : (
            ""
          )}
          <div className="dc-footer">
            <button
              type="button"
              onClick={this.submit}
              className="pp-custom-btn"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(PickupTime);
