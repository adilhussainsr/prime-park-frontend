import React, { Component } from 'react'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import logo from '../../img/logo.png';
import moment from 'moment';


const defaultProps = {
  initialPage: 1,
  pageSize: 10
}
const yester = moment().subtract(1, 'day');
  const disablePast = current => {
    return current.isAfter(yester);
  };
const timeConvertCoef = 1000 * 60 * 60;
const maxFreePassengers = 4;
const chargesExtraPerPassenger = 10;
const twentyFour = 24;
const two = 2;

class ReviewCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      carTypes: [],
      booking_time:'',
      id: (this.props.match.params.id) ? this.props.match.params.id : '',
      receiptData: {},
      booking: {},
      customer_name: '',
      onsite_amount: '0',
      mobile_number: '',
      plate_number: '',
      reservation_id: '',
      passengers: 1,
      payment_mode:'',
      overstay_charges: 0,
      reservation_charges: 0,
      days: 0,
      overstay_days: 0,
      car_type_id: '',
      reservation: 'Yes',
      checkin: {},
      checkout: {},
      timein: {},
      timeout: {},
      vendor_id: '',
      slot: '',
      oldSlot: '',
      carType: {},
      disablePastDt:disablePast
      ,disablePastDts:disablePast,
      errors: {
        customer_name: '',
        onsite_amount: '',
        mobile_number: '',
        plate_number: '',
        vendor_id: '',
        reservation_id: '',
        passengers: 1,
        car_type_id: '',
        reservation: '',
        checkin: '',
        checkout: '',
       
        timeout: '',
      },
      numberPassengers: 5,
      saveDisabled: false,
      slotMessage: {},
      parking_lot_id: ''
    }
    var headerdata = "";
    var data = {};
    _callApi(data, '/cartype/', headerdata, 2)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            this.setState({
              carTypes: response.data.types
            });
          }
        } else {


        }

      });
    _callApi(data, '/vendor/', headerdata, 2)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            this.setState({

              vendors: response.data.vendors,
            });
          }
          // console.log(response.data.users)
        } else {


        }

      });

    _callApi(data, 'booking/receipt/' + this.state.id, headerdata, 2)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            var d = response.data.receipt;
            // console.log("**********************************")
            // console.log(d)
            this.setState({
              receiptData: d,
              customer_name: d.customer_name,
              onsite_amount: d.onsite_amount,
              mobile_number: d.mobile_number,
              plate_number: d.plate_number,
              reservation_id: d.reservation_id,
              passengers: d.passengers,
              id: d.id,
              vendor_id: d.vendor_id,
              slot: d.parking?d.parking.display_slot:null,
              parking_lot_id: d.parking?d.parking.parking_lot_id:null,
              oldSlot: d.parking?d.parking.display_slot:null,
              car_type_id: d.car_type_id,
              checkout: new Date(d.pick_up_time),
              checkin: new Date(d.reservation_time),
              extra_passenger_charges: d.extra_passenger_charges,
              total_amount: d.total_amount,
              overstay_charges: d.overstay_charges,
              payment_mode:d.payment_mode,
              days: d.days,
              overstay_days: d.overstay_days,
              timeout: new Date(d.pick_up_time),
              reservation_charges: d.reservation_charges,
              timein: new Date(d.reservation_time),
              booking_time:new Date(d.booking_time)
            })

            const yesterdays = moment(new Date());
      // console.log(yesterdays)
       var disablePastDt = current => {
         return current.isAfter(yesterdays);
       };

       const yesterday = moment(new Date(d.reservation_time)).subtract(1, 'day');;
       // console.log(yesterday)
        var disablePastDts = current => {
          return current.isAfter(yesterday);
        };
       // console.log(disablePastDts)
      this.setState({disablePastDt,disablePastDts})
            if (d.reservation_id) {
              this.setState({ reservation: 'Yes' })
            } else {
              this.setState({ reservation: 'No' })
            }
            // this.calculate();

          }
        }
      })
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.getCarType = this.getCarType.bind(this);
    this.onSlotIdChange = this.onSlotIdChange.bind(this);
    this.timer = null;
  }
  _onInputChangeIn = e => {

    const value = e.target ? e.target.value : e;
    // console.log(e)

    this.setState({ checkin: value }, () => {
      setTimeout(() => this.calculate(), 100);
    })
  }
  _onInputChangeOut = e => {
    const value = e.target ? e.target.value : e;
    // console.log(e)
    this.setState({ checkout: value }, () => {
      setTimeout(() => this.calculate(), 100);
    })
  }
  _onInputChangeTimein = e => {
    const value = e.target ? e.target.value : e;
    // console.log(e)
    this.setState({ timein: value }, () => {
      setTimeout(() => this.calculate(), 100);
    })

  }
  _onInputChangeTimeout = e => {
    const value = e.target ? e.target.value : e;
    // console.log(value)
    this.setState({ timeout: value }, () => {
      setTimeout(() => this.calculate(), 100);
    })

  }

  validMobileNumber(number){

    var val = number;
    if (/^\d{10}$/.test(val)) {
        // value is ok, use it
        return false;
    } else {
       
        
        return true;
    }
  }
  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

      case 'customer_name':
        errors.customer_name =
          value.length < 2
            ? 'Name is required'
            : '';
        break;
      case 'plate_number':
        errors.plate_number =
          value.length < 2
            ? 'Plate number is required'
            : '';
        break;
      case 'reservation_id':
        errors.reservation_id =
          value.length < 2
            ? 'Reservation id is required'
            : '';
        break;

      case 'mobile_number':
        errors.mobile_number =
          value.length < 2 || this.validMobileNumber(value)
            ? 'Valid Mobile number is required'
            : '';
        break; 
        case 'passengers':
        errors.passengers =
          value.length==0
            ? 'Passenger is required'
            : '';
        break;

    }
    this.setState({ errors, [name]: value }, () => {
      if(name=="vendor_id"){
        this.setState({onsite_amount:0})
      }
      setTimeout(() => this.calculate(), 100);
      this.setState({ errors });
      if (errors.customer_name === "" && this.state.customer_name != "" && errors.onsite_amount === "" &&
        errors.mobile_number === "" && this.state.mobile_number != ""
        && errors.plate_number === "" && this.state.plate_number != "" && errors.reservation_id === ""
      ) {
        this.setState({ isDisabled: false });
        // console.log(this.state.isDisabled)
      }
    })
  }
  getCarType() {


    var headerdata = "";
    var data = {};
    var s = _callApi(data, 'cartype/' + this.state.car_type_id, headerdata, 2)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            this.setState({ carType: response.data.carType });

          } else {

          }
        } else {


        }
      });


  }
  calculate() {
    var booking = this.state.receiptData;

    const carType = this.state.carTypes.find(item => item.id == this.state.car_type_id);

    let onsiteAmount = parseInt(this.state.onsite_amount) || 0;
    let extraPassengerCharge = 0;
    let overStayCharges = 0;
    let overstayCharges = 0;
    let overstayDays=0;
    let vendor = null;
    if (this.state.vendor_id) {
      vendor = this.state.vendors.find(item => item.id == this.state.vendor_id);
      // console.log(vendor)
    }
    let parkingCharges = 0;
    let days = 0;
    const { state } = this;
    var check_in = moment(state.checkin).format('YYYY-MM-DD')
    var check_out = moment(state.checkout).format('YYYY-MM-DD')
    var time_in = moment(state.timein).format('HH:mm:ss')
    var time_out = moment(state.timeout).format('HH:mm:ss')
    var momentObj = moment(check_in + time_in, 'YYYY-MM-DDLT');
    // console.log(momentObj)
    var dateTime = momentObj.format('YYYY-MM-DD HH:mm:ss');
    var momentObj1 = moment(check_out + time_out, 'YYYY-MM-DDLT');
    var dateTime1 = momentObj1.format('YYYY-MM-DD HH:mm:ss');
    let reservationTime = new Date(dateTime) || new Date();
    let bookingTime =  null
    let pickupTime = new Date(dateTime1);
    if(booking.booking_time==null){
      bookingTime =  null;
    }else{
      bookingTime = new Date(booking.booking_time);
    }

    if(!pickupTime) {
      return {val: null, msg: 'Pick-up time is missing.'};
  }
  let preBookingDays = 0;

  let preBookingCharges = 0;
  let hours=0;
  let dailyCharges = 0;

  if(bookingTime && bookingTime < reservationTime) {
      preBookingDays = this.calculateDays(bookingTime, reservationTime);
  }

  if(!vendor/* || (vendor && !vendor.onsie_charge_applicable)*/) {
      dailyCharges = carType.regular_charges;
  } else {
      if(carType.onsite_charges) {
          dailyCharges = carType.onsite_charges;
      }
  }
  days = this.calculateDays(reservationTime, pickupTime);
  if(days <= 0) {
      return {val: null, msg: 'Invlid reservation and(or) pick-up time.'};
  }
  parkingCharges = days * dailyCharges;
  preBookingCharges = preBookingDays * carType.regular_charges;


    if(state.passengers > maxFreePassengers) {
        extraPassengerCharge = (state.passengers - maxFreePassengers) * chargesExtraPerPassenger;
    }
    // console.log(state.passengers)
    // console.log(extraPassengerCharge)

    let parking = booking.parking
    if(!parking) {
        return {val: null, msg: 'Parking slot unavailable.'};
    }


    booking.extra_passenger_charges = extraPassengerCharge;
    booking.calculated_charges = parkingCharges + overStayCharges;
    booking.pre_booking_charges = preBookingCharges;
    booking.pre_booking_days = preBookingDays;
    booking.total_amount = parkingCharges + extraPassengerCharge + parseInt(onsiteAmount) + preBookingCharges;
    booking.parking_id = parking.id;
    booking.onsite_amount = onsiteAmount;
    booking.passengers = this.state.passengers;
    booking.carType = carType;
    booking.vendor = vendor;
    booking.days = days;
    booking.payment_mode=this.state.payment_mode;
    booking.overstay_charges = overstayCharges;
    booking.overstay_days = overstayDays;
    booking.hours=hours;
    this.setState({ receiptData: booking })
    // console.log(booking)
  }

  onSlotIdChange(event) {
    this.setState({ slot: event.target.value, saveDisabled: true });

    clearTimeout(this.timer);
    if (event.target.value == this.state.oldSlot) {
      return this.setState({ slotMessage: {}, saveDisabled: false });
    }

    // Set a new timer to update the state after 500ms
    this.timer = setTimeout(() => {
      _callApi({
        params: {
          slot: this.state.slot,
          parkingLotId:this.state.parking_lot_id
        }
      }, 'parking/parkingSlotStatus', '', 2)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            var slot = response.data.slot;
            if (slot=='vacant') {
              return this.setState({ slotMessage: {success: true, msg:'Slot is vacant'}, saveDisabled: false });
            } else if (slot == 'occupied'){
              return this.setState({ slotMessage: {success: false, msg:'Slot is Occupied'}, saveDisabled: true });
            } else {
              return this.setState({ slotMessage: {success: false, msg:'Invalid slot number'}, saveDisabled: true });
            }
          }}
          return this.setState({ slotMessage: {success: false, msg:'Something went wrong'}, saveDisabled: true });
      });
    }, 1000);
  }
  
  submit(event) {
    event.preventDefault();
    if(this.state.is_checked_out)
    var value = this.state.time;
    // console.log(value)
    var data = {};
    const { state } = this;
    var check_in = moment(state.checkin).format('YYYY-MM-DD')
    var check_out = moment(state.checkout).format('YYYY-MM-DD')
    var time_in = moment(state.timein).format('HH:mm:ss')
    var time_out = moment(state.timeout).format('HH:mm:ss')
    var momentObj = moment(check_in + time_in, 'YYYY-MM-DDLT');
    console.log(momentObj)
    var dateTime = momentObj.format('YYYY-MM-DD HH:mm:ss');
    var momentObj1 = moment(check_out + time_out, 'YYYY-MM-DDLT');
    var dateTime1 = momentObj1.format('YYYY-MM-DD HH:mm:ss');

    data = this.state.receiptData;
    data.reservation_time=new Date(dateTime).toJSON();
    data.pick_up_time= new Date(dateTime1).toJSON();
    data.customer_name = this.state.customer_name;
    data.mobile_number = this.state.mobile_number;
    data.car_type_id = this.state.car_type_id;
    data.reservation_id = this.state.reservation_id;
    data.plate_number = this.state.plate_number;
    data.passengers = this.state.passengers;
    data.slot = this.state.slot;
    data.oldSlot = this.state.oldSlot;




    var headerdata = "";
    var s = _callApi(data, 'booking/editbooking', headerdata, 3)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
            // console.log(response.data)
            var self = this;
            return self.props.history.push({
              pathname: '/checkout/checkout_receipt/' + this.state.id,
            })
          }
        }
        // alert('failed to save');
      })
  }
  calculateDays = (startTime, endTime) => {
    if(!startTime) {
        startTime = new Date();
    } else {
        startTime = new Date(startTime);
    }

    if(!endTime || endTime < startTime) {
        return null;
    }
    endTime = new Date(endTime);

    startTime.setHours(0);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    endTime.setHours(0);
    endTime.setMinutes(0);
    endTime.setSeconds(0);

    let days = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24)) + 1;
    return days;
};
  createElements(number) {
    var elements = [];
    for (var i = 1; i <= number; i++) {
      elements.push(<option value={i}>{i} </option>);
    }
    return elements;
  }
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submit(e);
    }
  }
  onChangeEdit(value) {

    this.setState({ payment_mode: value }, () => {
      setTimeout(() => this.calculate(), 100);
    })
}
  render() {
    var { isLoaded, carTypes, vendors, errors } = this.state;

    return (


      <div class="dc-wrap edit-plate-number">
        <div class="dc-header">
          <div class="dch-left">
            <h3 class="dc-head">Plate Number</h3>
          </div>
          <div class="dch-right">
          </div>
        </div>
        <div class="dc-body">
          <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Customer's name</label>
              <input type="text" class="sc-custom-form" name="customer_name" onKeyDown={this._handleKeyDown} onChange={this.onChange} value={this.state.customer_name} />
              {errors.customer_name.length > 0 &&
                <span className='error'>{errors.customer_name}</span>}
            </div>
            <div class="sc-input">
              <label class="sc-label">Mobile No.</label>
              <input type="text" class="sc-custom-form" name="mobile_number" onKeyDown={this._handleKeyDown} onChange={this.onChange} value={this.state.mobile_number} />
              {errors.mobile_number.length > 0 &&
                <span className='error'>{errors.mobile_number}</span>}
            </div>
          </div>
          <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Car Type</label>
              <div class="sc-select-wrap">
                <select class="sc-custom-form" name="car_type_id" value={this.state.car_type_id} onKeyDown={this._handleKeyDown} onChange={this.onChange} >

                  <option value="">Select</option>  {carTypes.length > 0 ?
                    carTypes.map((carType, i) => (
                      <option value={carType.id}>{carType.type}</option>

                    )) : ''}
                </select>
                <span class="ion-ios-arrow-down select-drop-icon"></span>
              </div>
              {errors.car_type_id.length > 0 &&
                <span className='error'>{errors.car_type_id}</span>}
            </div>

            <div class="sc-input">
              <label class="sc-label">Reservation Status</label>
              <div class="sc-select-wrap">
                <select disabled={true} class="sc-custom-form" name="reservation" value={this.state.reservation} onKeyDown={this._handleKeyDown} onChange={this.onChange}  >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <span class="ion-ios-arrow-down select-drop-icon"></span>
              </div>
            </div>
          </div>
          {(this.state.reservation_id==null || this.state.reservation_id=="")?
            <div class="sc-input-wrap">
            
            <div class="sc-input">
              <label class="sc-label">Plate Number</label>
              <input type="text" class="sc-custom-form" value={this.state.plate_number} name="plate_number" onKeyDown={this._handleKeyDown} onChange={this.onChange} />

              {errors.plate_number.length > 0 &&
                <span className='error'>{errors.plate_number}</span>}
            </div>
          </div>
          :
          <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Reservation ID</label>
              <input type="text" class="sc-custom-form" name="reservation_id" onKeyDown={this._handleKeyDown} onChange={this.onChange} value={this.state.reservation_id} />
              {errors.reservation_id.length > 0 &&
                <span className='error'>{errors.reservation_id}</span>}
            </div>
            <div class="sc-input">
              <label class="sc-label">Plate Number</label>
              <input type="text" class="sc-custom-form" value={this.state.plate_number} name="plate_number" onKeyDown={this._handleKeyDown} onChange={this.onChange} />

              {errors.plate_number.length > 0 &&
                <span className='error'>{errors.plate_number}</span>}
            </div>
          </div>
  }
      {this.state.receiptData.reservation_id!==""?
     
          <div class="sc-input-wrap sc-one-by-two">
        {this.state.receiptData.vendor && this.state.receiptData.vendor.onsie_charge_applicable==true ?
              <div class="sc-input">
                <label class="sc-label">Onsite Amount Paid</label>
                <input type="text" class="sc-custom-form" value={this.state.onsite_amount} name="onsite_amount" onKeyDown={this._handleKeyDown} onChange={this.onChange} />
                {errors.onsite_amount.length > 0 &&
                  <span className='error'>{errors.onsite_amount}</span>}
              </div>
              :''}
        
            <div class="sc-input">
              <label class="sc-label">No. of Passengers</label>

              <div class="sc-select-wrap">
                <select class="sc-custom-form" value={this.state.passengers} name="passengers" onKeyDown={this._handleKeyDown} onChange={this.onChange} >
                  <option>Select</option>
                  {this.createElements(10)}
                </select>
                <span class="ion-ios-arrow-down select-drop-icon"></span>

              </div>
              <p class="sc-notice sc-error">Additional Charges will apply on Passengers above 4.</p>
              {errors.passengers.length > 0 &&
                <span className='error'>{errors.passengers}</span>}
            </div>
          </div>
                :  <div class="sc-input-wrap ">
      
                
              <div class="sc-input">
                <label class="sc-label">No. of Passengers</label>
  
                <div class="sc-select-wrap">
                  <select class="sc-custom-form" value={this.state.passengers} name="passengers" onKeyDown={this._handleKeyDown} onChange={this.onChange} >
                    <option>Select</option>
                    {this.createElements(10)}
                  </select>
                  <span class="ion-ios-arrow-down select-drop-icon"></span>
  
                </div>
                <p class="sc-notice sc-error">Additional Charges will apply on Passengers above 4.</p>
                {errors.passengers.length > 0 &&
                  <span className='error'>{errors.passengers}</span>}
              </div>
            </div>}
          {(this.state.vendor_id==null || this.state.vendor_id=="")?
''
          :
          <>
          <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Vendor Name</label>
              <div class="sc-select-wrap">
                <select class="sc-custom-form" value={this.state.vendor_id} name="vendor_id" onKeyDown={this._handleKeyDown} onChange={this.onChange} >
                  <option>Select</option>
                  {vendors.length > 0 ?
                    vendors.map((vendor, i) => (
                      <option value={vendor.id}>{vendor.name}</option>

                    )) : ''}
                </select>
                <span class="ion-ios-arrow-down select-drop-icon"></span>
                {errors.vendor_id.length > 0 &&
                  <span className='error'>{errors.vendor_id}</span>}
              </div>
            </div>
            <div class="sc-input">
              <label class="sc-label">Booking Date</label>
              <div class="sc-select-wrap">
              <input type="text" class="sc-custom-form" value={moment(this.state.booking_time).format('DD/MM/YYYY')}  />
              </div>
            </div>

          </div>
          </>
  }
          <div class="card-by-card">
            <div class="card-left card-w-70">
              <div class="sc-input-wrap sc-bg-gray">
                <label class="sc-label">Date & Time</label>
                <div class="sc-input">
                  <div class="one-row-by-two">
                    <div class="sc-input-col">
                      <label class="sc-label">Check-In Date</label>
                      <Datetime dateFormat={true} input={false} open={true}  isValidDate={this.state.disablePastDt}  value={this.state.checkin} onChange={this._onInputChangeIn} timeFormat={false} />


                    </div>
                    <div class="sc-input-col">
                      <label class="sc-label">Check-Out Date</label>
                      <Datetime dateFormat={true} input={false} open={true}  isValidDate={this.state.disablePastDts} value={this.state.checkout} onChange={this._onInputChangeOut} timeFormat={false} />

                    </div>
                  </div>
                  </div>
                  <div class="sc-input">
                  <div class="one-row-by-two">
                    <div class="sc-input-col">
                      <label class="sc-label">Check-In Time</label>
                      <Datetime dateFormat={false} input={false} open={true}    value={this.state.timein} onChange={this._onInputChangeTimein} timeFormat={true} />

                    </div>
                    <div class="sc-input-col">
                      <label class="sc-label">Check-Out Time</label>
                      <Datetime dateFormat={false} input={false} open={true} value={this.state.timeout} onChange={this._onInputChangeTimeout} timeFormat={true} />

                    </div>
                  </div>
                </div>
              </div>
              <div class="dc-header">
                <div class="dch-left">
                  <h3 class="dc-head">Payment Mode</h3>
                </div>
                <div class="dch-right toggle-btn">
                  {this.state.payment_mode=="Cash"?
                  <>
                  <button type="button" class="pp-custom-btn">Cash</button>
                  <button type="button" class="pp-custom-btn pp-deactive" onClick={() => this.onChangeEdit('Card')}>Card</button>
                  </>
                  :
                  <>
                  <button type="button" class="pp-custom-btn pp-deactive" onClick={() => this.onChangeEdit('Cash')}>Cash</button>
                  <button type="button" class="pp-custom-btn" >Card</button>
                  </>
  }
                </div>
              </div>
              <div class="sc-input-wrap sc-bg-gray">
                <div class="sc-input">
                  <div class="one-row-by-two">
                    <div class="sc-input-col">
                      <label class="sc-label">Ticket ID</label>
                      <input type="text" class="sc-custom-form" readOnly value={this.state.id} />
                    </div>
                    <div class="sc-input-col">
                      <label class="sc-label">Slot No.</label>
                      <input type="text" class="sc-custom-form" value={this.state.slot ? this.state.slot : ''} onChange= {this.onSlotIdChange} />
                      <div className={this.state.slotMessage.success ? "success": "error"}>{this.state.slotMessage?.msg}</div>
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
                <div class="cpanel-body">
                  <div class="cpanel-row">
                    <div class="cr-left">
                      <p>Onsite amount charges</p>
                    </div>
                    <div class="cr-right">
                      <h4> {this.state.receiptData.onsite_amount ? this.state.receiptData.onsite_amount : 0}</h4>
                    </div>
                  </div>
                  <div class="cpanel-row">
                    <div class="cr-left">
                      <p>Parking Charges </p>
                      <small>

                        {
       
                       

                        this.state.receiptData.reservation_id==""?

                      this.state.receiptData.hours>0?
                      <>

                             {this.state.receiptData.days} days * {this.state.receiptData.carType && 
                             this.state.receiptData.carType.onsite_charges} +
                              {this.state.receiptData.hours}hr * 
                              {this.state.receiptData.carType && this.state.receiptData.carType.regular_charges}
                             
 </>
                      :
                      <>
                      {this.state.receiptData.days} days * ${this.state.receiptData.carType && this.state.receiptData.carType.regular_charges} 
                      
                </>:
                
                
                  this.state.receiptData.hours>0?
                  <>

                         {this.state.receiptData.days} days * {this.state.receiptData.carType && 
                         this.state.receiptData.carType.onsite_charges} +
                          {this.state.receiptData.hours}hr * 
                          {this.state.receiptData.carType && this.state.receiptData.carType.hourly_overstay_charges}
                         
</>
                  :
                  <>
                  {this.state.receiptData.days} days * ${this.state.receiptData.carType && this.state.receiptData.carType.onsite_charges} 
                  
            </>
                
                } 
                
              
                 </small>
                <small> ({(this.state.receiptData.carType && this.state.receiptData.carType.type) ? ' '+this.state.receiptData.carType.type : ''} )</small>
                    </div>
                    <div class="cr-right">
                      <h4>{this.state.receiptData.calculated_charges ? this.state.receiptData.calculated_charges : 0}</h4>
                    </div>
                  </div>
               
										<div class="cpanel-row">
                              <div class="cr-left">
                                  <p> {Math.sign(this.state.receiptData.overstay_days)==1?'Overstay charges':'Overstay charges'}
								  </p>
                                  <small>({this.state.receiptData.overstay_days} days)</small>
                              </div>
                              <div class="cr-right">
                                   <h4>{this.state.receiptData.overstay_charges?this.state.receiptData.overstay_charges:0}</h4>
                              </div>
                          </div>
                  <div class="cpanel-row">
                    <div class="cr-left">
                      <p>Extra Passenger Fees</p>
                      <small>({this.state.receiptData.passengers} Passengers)</small>
                    </div>
                    <div class="cr-right">
                      <h4>{this.state.receiptData.extra_passenger_charges ? this.state.receiptData.extra_passenger_charges : 0}</h4>
                    </div>
                  </div>
                  {this.state.receiptData.pre_booking_days>0?
                  <div class="cpanel-row">
                    <div class="cr-left">
                      <p>Early Check-in Charges</p>
                      <small>({this.state.receiptData.pre_booking_days} Days * ${this.state.receiptData.carType.regular_charges})</small>
                    </div>
                    <div class="cr-right">
                      <h4>{this.state.receiptData.pre_booking_charges ? this.state.receiptData.pre_booking_charges : 0}</h4>
                    </div>
                  </div>
                  :''}
                </div>
                <div class="cpanel-footer">
                  <div class="cpanel-row cp-bg">
                    <div class="cr-left">
                      <p>Total amount to pay</p>
                    </div>
                    <div class="cr-right">
                      <h4>$ {this.state.receiptData.total_amount}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dc-footer">
          <button type="button" disabled={this.state.saveDisabled} onClick={this.submit} class="pp-custom-btn">Save</button>
        </div>
      </div>

    )
  }

}

function mapStateToProps(state) {
  // console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(ReviewCheckin);


