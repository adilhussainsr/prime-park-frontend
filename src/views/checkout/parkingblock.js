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
class ParkingBlock extends Component {
  constructor(props) {
    super(props);

    const { state } = this.props.location;
    var momentObja = moment(
    state.pick_up_time,
    "YYYY-MM-DDLT"
    );

    var momentObjb = moment(
        state.reservation_time,
        "YYYY-MM-DDLT"
        );
  
    var dwkees = momentObja.diff(momentObjb, 'days');
    dwkees = parseFloat(dwkees/7).toFixed(1);
    dwkees = dwkees + "";
    dwkees = dwkees.split(".");

    this.state = {
      items: [],
      parkingblocks: [],
      slotsstatus:[],
      currentbookingduration:dwkees[0],
      currentbookingdurationdays:dwkees[1],
    };
    this.accounts();
    
    
  }

  accounts() {
    console.log('this tstate. location')
    console.log(this.props.location.state)
    const { state } = this.props.location;
    var momentObja = moment(
    state.pick_up_time,
    "YYYY-MM-DDLT"
    );

    var momentObjb = moment(
        state.reservation_time,
        "YYYY-MM-DDLT"
        );
  
    var dwkees = momentObja.diff(momentObjb, 'days');

    this.setState({
      items: [],
      currentbookingduration: dwkees,
    });

    var headerdata = "";
    const data = {
      //page: '' + (pageNumber ? parseInt(pageNumber) : parseInt()),
    };
    // this.setState({ activePageNo: (pageNumber ? pageNumber : this.state.activePageNo) })
    _callApi(data, "/parking/getparkingslots", headerdata, 2).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
            console.log("response response response response")
            console.log(response.data.parking[1])
            this.setState({ parkingblocks: response.data.parking[0], slotsstatus: response.data.parking[1] }, () => {
                console.log("response response response response")
                console.log(this.state.parkingblocks)
            });
           
            
        }
      } else {
        this.setState({ message: response.msg });
        setTimeout(() => this.setState({ message: "" }), 2000);
      }
    });
  }
  onChangeOptionsPlus(val, vacant) {
    if(parseInt(vacant) < 1){
        alert("No slots vacant!")
        return false;
    }
    if (0 === 0) {
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
          onsite_amount: state.onsite_amount === "" ? 0 : state.onsite_amount,
          plate_number: state.plate_number,
          reservation_id: state.reservation_id,
          passengers: state.passengers,
          car_type_id: state.car_type_id,
          slot_type_id: val,
          reservation_time: state.reservation_time,
          pick_up_time: state.pick_up_time,
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
          slot_type_id: val,
          vendor_id: null,
          reservation_time: state.reservation_time,
          pick_up_time: state.pick_up_time,
          booking_time: null,
        };
      }

    //   this.props.history.push({
    //     pathname: "/checkout/reservation_date",
    //     state: data, // your data array of objects
    //   });

      var headerdata = "";
      var s = _callApi(data, "booking/checkin", headerdata).then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            console.log(response.data);
            var self = this;
            self.props.history.push({
              pathname: "/checkout/checkout_review/" + response.data.id,
            });
          }
        }
      });
    }
  }

  getVacantSlots(slot, flag)  {
    if(flag === 'T'){
        let total = 0;
        this.state.slotsstatus.map((item,index) => {
            if(item.parking_lot_id === slot.id){
                total = total + parseInt(item.c);
            }
        })
        return total;
    }

    if(flag === 'V'){
        let total = 0;
        this.state.slotsstatus.map((item,index) => {
            if(item.parking_lot_id === slot.id && item.status === "vacant"){
                total = total + parseInt(item.c);
            }
        })
        return total;
    }
    return 0;
  }

  getHtmlForBoxes(item) {

    var lot = item.lot;

    lot = lot === 'M'?'C':lot;

    lot = lot === 'F3'?'F':lot;

    lot = this.getVacantSlots(item, 'T') === 4?'G':lot;

    let showblockornot = true;

    if(item.lot === 'C'){
        showblockornot = false;
    }

    if(this.getVacantSlots(item, 'T') === 12){
        showblockornot = false;
    }

    if(this.getVacantSlots(item, 'T') === 20){
        showblockornot = false;
    }

    if(showblockornot === true )
            return <>
            <div
                            class="cartype-box"
                            onClick={() => this.onChangeOptionsPlus(item.id, this.getVacantSlots(item, 'V'))}
                        >
                            {/* <div class="cartype-icon">
                            <img src={cartypeImage} />
                            </div> */}

                            <div class="cartype-name font-size-50">{lot}</div>
                            <div class="cartype-name">{'Min duration : ' + item.min_duration + " weeks"}</div>
                            <div class="cartype-name">{'Total slots : ' + this.getVacantSlots(item, 'T')}</div>
                            <div class="cartype-name">{'Vacant slots : ' + this.getVacantSlots(item, 'V')}</div>
                        </div>
            </>
  }

  render() {
    var { isLoaded, items, parkingblocks, slotsstatus } = this.state;
    // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;

    return (
      <div class="dc-wrap select-car-type">
        <div class="dc-header">
          <div class="dch-left">
            <h3 class="dc-head">{ "Parking Blocks - Current Booking Duration: (" + this.state.currentbookingduration +" week and "+ this.state.currentbookingdurationdays + " day )" }</h3>
          </div>
          <div class="dch-right">
            {0 === 0 ? (
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
            {parkingblocks.length > 0
              ? parkingblocks.map((item, i) => (
                this.getHtmlForBoxes(item)
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

export default connect(mapStateToProps)(ParkingBlock);
