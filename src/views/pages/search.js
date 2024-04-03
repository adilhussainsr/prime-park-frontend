import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import eye from "../../img/icons/eye.png";
import crossImage1 from "../../img/icons/close-eye.png";

import logo from "../../img/logo.png";
import { _callApi } from "../../Services/baseService";
import * as regexClass from "../../common/regex";
import iso from "../../img/car-iso.png";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      id: "",
      carnumber: "",
      errors: {
        id: "",
        cnum: "",
        notfound: ""
      },
    };
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "id":
        errors.id =
          !regexClass.NUMBER_ONLY.test(value)
            ? "Only number are accepted"
            : "";
        break;
      case "cnum":
        errors.cnum = !regexClass.ALPHANUMERIC.test(value) || value.length > 2 
            ? "Only alphanumeric are accepted max 2"
            : "";

        break;  
        default:
          //true
        break;  
    }

    this.setState({ errors, [name]: value }, () => {
      if (errors.id === "") {
        this.setState({ isDisabled: false });
      }
      if (errors.cnum === "") {
        this.setState({ isDisabled: false });
      }
    });
  }
  submit(event) {
    event.preventDefault();
    let errors = this.state.errors;
    if(this.state.id.length === 0){
      errors.id = "Ticket is required";
      this.setState({ errors });
      return false;
    }
    if(this.state.cnum.length < 2){
      errors.cnum = "Last 2 digit of Car number is required";
      this.setState({ errors });
      return false;
    }
    if (this.state.isDisabled === false) {
      var data = {};
     

      data = {
        ticket_id: this.state.id,
        cnum: this.state.cnum
      };
      var headerdata = "";
      var s = _callApi(data, "booking/search", headerdata).then((response) => {
        
        if (response.status === 200) {
          if (response.data.status === 200) {
            var booking = response.data.booking;
            var self = this;
            self.props.history.push({
              pathname: "/search-result/" + booking.id,
            });
          }else{
            errors.notfound = "Car not found!"
          }
        } else {
          errors.notfound = "Car not found!"
        }
        this.setState({ errors });
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="dashboard-body full-width-body">
        <div className="dashboard-header">
          <div className="dh-logo">
            <img alt="logo" src={logo} />
          </div>
        </div>
       
        <div className="dc-wrap get-car-ready">
          <div className="dc-body">
            <div className="car-ready">
              <div className="car-content">
                <div className="car-img-ready">
                  <img alt="logo" src={iso} className="car-iso" />
                </div>
                <h4 className="dc-head">Get Car Ready</h4>
                <p className="dc-desc">
                  Please fill the following information, to get your car ready.
                </p>
                {this.state.errors.notfound.length > 0 &&
                    <span style={{fontSize:30, marginTop: 20}} className='error'>{this.state.errors.notfound}</span>}
              </div>
              <div className="car-id">
                <div className="sc-input-wrap">
                  <div className="sc-input">
                    <label className="sc-label">
                      Enter Last 2 digits of plate number.
                    </label>
                    <input
                      type="text"
                      className="sc-custom-form"
                      name="cnum"
                      onChange={this.onChange}
                      placeholder="Enter last 2 digits of plate number"
                    />
                  </div>
                  {this.state.errors.cnum.length > 0 &&
                    <span className='error'>{this.state.errors.cnum}</span>}

                </div>
                <div className="sc-input-wrap">
                  <div className="sc-input">
                    <label className="sc-label">Ticket No.</label>
                    <input
                      type="text"
                      className="sc-custom-form"
                      name="id"
                      placeholder="Enter your Ticket no./Reservation ID"
                      onChange={this.onChange}
                    />
                  </div>
                  {this.state.errors.id.length > 0 &&
                  <span className='error'>{this.state.errors.id}</span>}

                </div>
              </div>
            </div>
          </div>
          <div className="dc-footer">
            <button type="button" onClick={this.submit} disabled={this.state.isDisabled}className="pp-custom-btn">Search</button>
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

export default connect(mapStateToProps)(Search);
