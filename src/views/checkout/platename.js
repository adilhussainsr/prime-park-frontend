import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { _callApi } from "../../Services/baseService";
import * as regexClass from "../../common/regex";

class PlateName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor_id:
        this.props.match.params.id != undefined
          ? this.props.match.params.id
          : 0,
      customer_name: "",
      onsite_amount: "",
      mobile_number: "",
      plate_number: "",
      reservation_id: "",
      passengers: 1,
      numberPassengers: 5,
      confirm_plate_number: "",
      confirm_reservation_id: "",
      isDisabled: true,
      onsie_charge_applicable: false,
      errors: {
        customer_name: "",
        onsite_amount: "",
        mobile_number: "",
        plate_number: "",
        reservation_id: "",
        passengers: "",
        confirm_plate_number: "",
        confirm_reservation_id: "",
      },
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    if (this.state.vendor_id > 0) {
      var headerdata = "";
      var data = {};
      var s = _callApi(
        data,
        "vendor/" + this.state.vendor_id,
        headerdata,
        2
      ).then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            var users = response.data.vendor;
            this.setState({
              onsie_charge_applicable: users.onsie_charge_applicable,
            });
          } else {
            this.setState({ message: response.data.msg });
            setTimeout(() => this.setState({ message: "" }), 2000);
          }
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      });
    }
  }

  componentDidMount() {}

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  submit(event) {
    event.preventDefault();

    var data = {};
    var errors = this.state.errors;
    if (this.state.onsie_charge_applicable) {
      if (this.state.onsite_amount <= 0 || this.state.onsite_amount == "") {
        errors.onsite_amount = "Please enter vaild onsite amount";
        this.setState({ errors });
      }
    }
    if (this.state.isDisabled == false && this.validateForm(errors)) {
      data = {
        customer_name: this.state.customer_name,
        onsite_amount: this.state.onsite_amount,
        plate_number: this.state.plate_number,
        reservation_id: this.state.reservation_id,
        mobile_number: this.state.mobile_number,
        passengers: this.state.passengers,
        vendor_id: this.state.vendor_id,
      };
      console.log(data);
      this.props.history.push({
        pathname: "/checkout/car_types",
        state: data, // your data array of objects
      });
    }
  }

  onChangeOptions(value) {
    this.setState({ passengers: value });
  }
  onChangeOptionsPlus(value) {
    this.setState({ numberPassengers: value });
  }

  checkPlateNumber(val) {
    if (val.length === 0) {
      return "Plate number is required";
    }
    if (!regexClass.ALPHANUMERIC.test(val)) {
      return "Only alphabets and number are accepted";
    }
    return "";
  }

  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "customer_name":
        errors.customer_name =
          value.length < 2
            ? "Name is required"
            : !regexClass.ALPHABET_REGEX.test(value)
            ? "Only alphabets are accepted"
            : "";
        break;
      case "plate_number":
        errors.plate_number = this.checkPlateNumber(value);

        break;
      case "onsite_amount":
        errors.onsite_amount = !regexClass.NUMBER_ONLY.test(value)
          ? "Please enter valid site amount"
          : "";
        break;
      case "reservation_id":
        errors.reservation_id =
          value.length == 0
            ? "Reservation id is required"
            : !regexClass.ALPHANUMERIC.test(value)
            ? "Only alphabets and number are accepted"
            : (
                this.state.confirm_reservation_id.length === 0
                  ? (errors.confirm_reservation_id =
                      "Reservation id is required")
                  : ""
              )
            ? ""
            : "";
        break;

      case "confirm_plate_number":
        errors.confirm_plate_number = this.checkPlateNumber(value);

        break;
      case "confirm_reservation_id":
        errors.confirm_reservation_id =
          value.length == 0
            ? "Reservation id is required"
            : !regexClass.ALPHANUMERIC.test(value)
            ? "Only alphabets and number are accepted"
            : (
                this.state.reservation_id.length === 0
                  ? (errors.reservation_id = "Reservation id is required")
                  : ""
              )
            ? ""
            : "";
        break;
      case "mobile_number":
        errors.mobile_number =
          value.length == 0
            ? "Enter Phone number"
            : value.length < 10
            ? "Phone number should be 10-13 characters"
            : value.length > 13
            ? "Phone number should be less than 13 characters"
            : !regexClass.NUMBER_ONLY.test(value)
            ? "Enter vaild phone number "
            : "";
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      if (name == "confirm_plate_number") {
        console.log(
          this.state.confirm_plate_number + "!==" + this.state.plate_number
        );
        if (this.state.confirm_plate_number !== this.state.plate_number) {
          console.log("kkkkkkkkkkkk");
          errors.confirm_plate_number = "Plate numbers do not match";
        } else if (this.state.confirm_plate_number == this.state.plate_number) {
          errors.confirm_plate_number = "";
        }
      }
      if (name == "plate_number") {
        console.log(
          this.state.confirm_plate_number + "!==" + this.state.plate_number
        );
        if (this.state.confirm_plate_number !== value) {
          errors.confirm_plate_number = "Plate numbers do not match";
        } else if (this.state.confirm_plate_number == value) {
          errors.confirm_plate_number = "";
        }
      }

      if (name == "confirm_reservation_id") {
        if (this.state.confirm_reservation_id !== this.state.reservation_id) {
          errors.confirm_reservation_id = "Reservation ID's do not Match";
        } else {
          errors.confirm_reservation_id = "";
        }
      }
      this.setState({ errors });
      if (
        errors.customer_name === "" &&
        this.state.customer_name != "" &&
        errors.onsite_amount === "" &&
        errors.mobile_number === "" &&
        this.state.mobile_number != "" &&
        errors.plate_number === "" &&
        this.state.plate_number != "" &&
        errors.reservation_id === "" &&
        errors.confirm_reservation_id === "" &&
        errors.confirm_plate_number === ""
      ) {
        this.setState({ isDisabled: false });
        console.log(this.state.isDisabled);
      }
    });
  }
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.submit(e);
    }
  };
  render() {
    const { errors } = this.state;
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (
      <div className="dc-wrap plate-number">
        <div className="dc-header">
          <div className="dch-left">
            <h3 className="dc-head">Select Plate Number</h3>
          </div>
          <div className="dch-right">
            {this.state.vendor_id == 0 ? (
              <NavLink to="/dashboard">
                {" "}
                <button type="button" className="pp-custom-btn">
                  <span className="ion-arrow-left-c"></span>Back
                </button>
              </NavLink>
            ) : (
              <NavLink to="/checkout/vendors">
                {" "}
                <button type="button" className="pp-custom-btn">
                  <span className="ion-arrow-left-c"></span>Back
                </button>
              </NavLink>
            )}
          </div>
        </div>
        <div className="dc-body">
          <div className="sc-input-wrap">
            <div className="sc-input">
              <label className="sc-label">Customer's Name</label>
              <input
                type="text"
                className="sc-custom-form"
                placeholder="Please enter Customer's Name"
                maxLength={25}
                onKeyDown={this._handleKeyDown}
                onChange={this.onChange}
                name="customer_name"
                autocomplete="off"
                value={this.state.customer_name}
              />
              {errors.customer_name.length > 0 && (
                <span className="error">{errors.customer_name}</span>
              )}
            </div>
          </div>

          {this.state.onsie_charge_applicable ? (
            <div className="sc-input-wrap sc-one-by-two">
              <div className="sc-input">
                <label className="sc-label">Onsite Amount</label>
                <input
                  type="text"
                  className="sc-custom-form"
                  placeholder="Please enter onsite amount"
                  maxLength={25}
                  onKeyDown={this._handleKeyDown}
                  onChange={this.onChange}
                  name="onsite_amount"
                  autocomplete="off"
                  value={this.state.onsite_amount}
                />
                {errors.onsite_amount.length > 0 && (
                  <span className="error">{errors.onsite_amount}</span>
                )}
              </div>
              <div className="sc-input">
                <label className="sc-label">Mobile No.</label>
                <input
                  type="text"
                  className="sc-custom-form"
                  placeholder="Please enter mobile number "
                  maxLength={25}
                  onKeyDown={this._handleKeyDown}
                  onChange={this.onChange}
                  name="mobile_number"
                  autocomplete="off"
                  value={this.state.mobile_number}
                />
                {errors.mobile_number.length > 0 && (
                  <span className="error">{errors.mobile_number}</span>
                )}
              </div>
            </div>
          ) : (
            <div className="sc-input-wrap">
              <div className="sc-input">
                <label className="sc-label">Mobile No.</label>
                <input
                  type="text"
                  className="sc-custom-form"
                  placeholder="Please enter mobile number "
                  maxLength={25}
                  onKeyDown={this._handleKeyDown}
                  onChange={this.onChange}
                  name="mobile_number"
                  autocomplete="off"
                  value={this.state.mobile_number}
                />
                {errors.mobile_number.length > 0 && (
                  <span className="error">{errors.mobile_number}</span>
                )}
              </div>
            </div>
          )}

          <div className="sc-input-wrap sc-one-by-two sc-bg-gray">
            <div className="sc-input">
              <label className="sc-label">Plate Number</label>
              <input
                type="text"
                className="sc-custom-form"
                placeholder="Please enter plate number"
                maxLength={25}
                onKeyDown={this._handleKeyDown}
                onChange={this.onChange}
                name="plate_number"
                autocomplete="off"
                value={this.state.plate_number}
              />
              {errors.plate_number.length > 0 && (
                <span className="error">{errors.plate_number}</span>
              )}
              <input
                type="text"
                className="sc-custom-form"
                placeholder="Please confirm Plate number"
                maxLength={25}
                onKeyDown={this._handleKeyDown}
                onChange={this.onChange}
                name="confirm_plate_number"
                autocomplete="off"
                value={this.state.confirm_plate_number}
              />
              {errors.confirm_plate_number.length > 0 && (
                <span className="error">{errors.confirm_plate_number}</span>
              )}
            </div>
            {this.state.vendor_id == 0 ? (
              ""
            ) : (
              <div className="sc-input">
                <label className="sc-label">Reservation ID</label>
                <input
                  type="text"
                  className="sc-custom-form"
                  placeholder="Please enter Reservation ID"
                  maxLength={25}
                  onKeyDown={this._handleKeyDown}
                  onChange={this.onChange}
                  name="reservation_id"
                  autoComplete="off"
                  value={this.state.reservation_id}
                />
                {errors.reservation_id.length > 0 && (
                  <span className="error">{errors.reservation_id}</span>
                )}
                <input
                  type="text"
                  className="sc-custom-form"
                  placeholder="Please confirm Reservation ID"
                  maxLength={25}
                  onKeyDown={this._handleKeyDown}
                  onChange={this.onChange}
                  name="confirm_reservation_id"
                  autoComplete="off"
                  value={this.state.confirm_reservation_id}
                />
                {errors.confirm_reservation_id.length > 0 && (
                  <span className="error">{errors.confirm_reservation_id}</span>
                )}
              </div>
            )}
          </div>
          <div className="select-pass">
            <h2 className="sp-heading">Select no. of Passengers</h2>
            <div className="no-pass">
              {[...Array(this.state.numberPassengers)].map((el, index) => (
                <div
                  className={
                    this.state.passengers >= index + 1
                      ? "sp-no active"
                      : "sp-no"
                  }
                  onClick={() => this.onChangeOptions(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
              {this.state.numberPassengers < 10 ? (
                <div
                  className="sp-no sp-add-more"
                  onClick={() => this.onChangeOptionsPlus(10)}
                >
                  +
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="sp-notice">
              Additional Charges will apply on Passengers above 4.
            </p>
          </div>
        </div>
        <div className="dc-footer">
          <button
            type="button"
            onClick={this.submit}
            disabled={this.state.isDisabled}
            className="pp-custom-btn"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(PlateName);
