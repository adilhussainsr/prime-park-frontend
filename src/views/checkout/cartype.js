import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { _callApi } from "../../Services/baseService";
import cartypeImage from "../../img/cartype.png";
import moment from "moment";

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};
class CarType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.accounts();
    console.log(this.props.location.state);
  }

  accounts() {
    this.setState({
      items: [],
    });
    var headerdata = "";
    const data = {
      //page: '' + (pageNumber ? parseInt(pageNumber) : parseInt()),
    };
    // this.setState({ activePageNo: (pageNumber ? pageNumber : this.state.activePageNo) })
    _callApi(data, "/cartype/", headerdata, 2).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          this.setState({
            isLoaded: true,
            items: response.data.types,
          });
        }
      } else {
        this.setState({ message: response.msg });
        setTimeout(() => this.setState({ message: "" }), 2000);
      }
    });
  }
  onChangeOptionsPlus(value) {
    var data = {};
    const { state } = this.props.location;

    if (state.vendor_id == 0) {
      var valueDate = new Date();
      data = {
        customer_name: state.customer_name,
        onsite_amount: state.onsite_amount,
        plate_number: state.plate_number,
        mobile_number: state.mobile_number,
        reservation_id: state.reservation_id,
        passengers: state.passengers,
        car_type_id: value,
        reservation_date: moment(valueDate).format("YYYY-MM-DD"),
        reservation_time: moment(valueDate).format("HH:mm:ss"),
        vendor_id: state.vendor_id,
      };
      this.props.history.push({
        pathname: "/checkout/pickup_date",
        state: data, // your data array of objects
      });
    } else {
      data = {
        customer_name: state.customer_name,
        onsite_amount: state.onsite_amount,
        plate_number: state.plate_number,
        mobile_number: state.mobile_number,
        reservation_id: state.reservation_id,
        passengers: state.passengers,
        car_type_id: value,
        vendor_id: state.vendor_id,
      };
      this.props.history.push({
        pathname: "/checkout/reservation_date",
        state: data, // your data array of objects
      });
    }
  }

  carType(item, index){
 
    return <>
      <div
        class="cartype-box"
        onClick={() => this.onChangeOptionsPlus(item.id)}
      >
        <div class="cartype-icon">
          <img src={cartypeImage} />
        </div>

        <div class="cartype-name">{item.type}</div>
      </div>
    </>
  }

  render() {
    var { isLoaded, items } = this.state;
    // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;

    return (
      <div class="dc-wrap select-car-type">
        <div class="dc-header">
          <div class="dch-left">
            <h3 class="dc-head">Car Type</h3>
          </div>
          <div class="dch-right">
            {this.props.location.state.vendor_id == 0 ? (
              <NavLink to="/checkout/plate_name">
                <button type="button" class="pp-custom-btn">
                  <span className="ion-arrow-left-c"></span>Back
                </button>
              </NavLink>
            ) : (
              <NavLink
                to={
                  "/checkout/plate_name/" + this.props.location.state.vendor_id
                }
              >
                <button type="button" class="pp-custom-btn">
                  <span className="ion-arrow-left-c"></span>Back
                </button>
              </NavLink>
            )}{" "}
          </div>
        </div>
        <div class="dc-body">
          <div class="cartype-wrap">
            {items.length > 0
              ? items.map((item, i) => (
                this.carType(item, i)
                ))
              : ""}
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

export default connect(mapStateToProps)(CarType);
