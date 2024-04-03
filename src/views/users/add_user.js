import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import * as regexClass from '../../common/regex';
const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const handleChange = (e) => {
  e.preventDefault();
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      user_id: (this.props.match.params.id) ? this.props.match.params.id : '',
      access: 'all',
      inventory_report_access: false,
      message: '',
      revenue_report_access: false, car_movement_record_access: false, lot_diagram_access: false,
      errors: {
        name: '',
        phone: '',
        email: '',
        password: '',
        access: ''
      },
      isDisabled: false
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeaccess = this.onChangeaccess.bind(this);
    if (this.state.user_id != '') {
      var headerdata = "";
      var data = {};
      var s = _callApi(data, 'user/' + this.state.user_id, headerdata, 2)
        .then((response) => {
          if (response.status == 200) {
            if (response.data.status === 200) {
              var users = response.data.user;
              this.setState({
                name: users.name, email: users.email, phone: users.phone, inventory_report_access: users.inventory_report_access, revenue_report_access: users.revenue_report_access,
                car_movement_record_access: users.car_movement_record_access
                , lot_diagram_access: users.lot_diagram_access
              });


              console.log(this.state);

            } else {

              this.setState({ message: response.data.msg });
              setTimeout(
                () => this.setState({ message: '' }),
                2000
              );

            }
          } else {
            this.setState({ message: response.msg });
            setTimeout(
              () => this.setState({ message: '' }),
              2000
            );

          }
        });
    }
  }


  componentDidMount() {
  }
  onChangeaccess(name, value) {
    console.log(value);
    this.setState({ [name]: value })

  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state.isDisabled)
    if (this.state.isDisabled === false && this.validateForm(this.state.errors)) {

      this.setState({ isDisabled: true });
      if (this.state.user_id) {
        var data = {};
        if (this.state.password) {
          data = {
            'id': this.state.user_id,
            'name': this.state.name,
            'phone': this.state.phone,
            'email': this.state.email,
            'password': this.state.password,
            'inventory_report_access': this.state.inventory_report_access ? 1 : 0,
            'revenue_report_access': this.state.revenue_report_access ? 1 : 0,
            'car_movement_record_access': this.state.car_movement_record_access ? 1 : 0,
            'lot_diagram_access': this.state.lot_diagram_access ? 1 : 0,
          }
        } else {
          data = {
            'id': this.state.user_id,
            'name': this.state.name,
            'phone': this.state.phone,
            'email': this.state.email,
            'inventory_report_access': this.state.inventory_report_access ? 1 : 0,
            'revenue_report_access': this.state.revenue_report_access ? 1 : 0,
            'car_movement_record_access': this.state.car_movement_record_access ? 1 : 0,
            'lot_diagram_access': this.state.lot_diagram_access ? 1 : 0,
          }
        }


        var headerdata = "";

        _callApi(data, 'user/edit', headerdata, 3)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.status === 200) {
                let self = this;
                self.props.history.push('/users/list');
              } else {
                this.setState({ message: response.data.msg, isDisabled: false });
                setTimeout(
                  () => this.setState({ message: '' }),
                  2000
                );
              }
            } else {
              this.setState({ message: response.msg, isDisabled: false });
              setTimeout(
                () => this.setState({ message: '' }),
                2000
              );
            }
          });


      } else {
        var data = {
          'name': this.state.name,
          'phone': this.state.phone,
          'email': this.state.email,
          'password': this.state.password,
          'inventory_report_access': this.state.inventory_report_access ? 1 : 0,
          'revenue_report_access': this.state.revenue_report_access ? 1 : 0,
          'car_movement_record_access': this.state.car_movement_record_access ? 1 : 0,
          'lot_diagram_access': this.state.lot_diagram_access ? 1 : 0,
        }

        var headerdata = "";

        _callApi(data, 'user/add', headerdata)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.status === 200) {
                let self = this;
                self.props.history.push('/users/list');
              } else {
                this.setState({ message: response.data.msg, isDisabled: false });
                setTimeout(
                  () => this.setState({ message: '' }),
                  2000
                );
              }
            } else {
              this.setState({ message: response.msg, isDisabled: false });
              setTimeout(
                () => this.setState({ message: '' }),
                2000
              );
            }
          });
      }
    }
  }



  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Please enter vaild Email Address';
        break;
      case 'name':
        errors.name =
          value.length < 2
            ? 'Name is required'
            : !(regexClass.ALPHABET_REGEX.test(value)) ? 'Only alphabets are accepted' : '';
        break;
      case 'password':
        errors.password =
          value.length < 6
            ? 'Password must be 6 characters long!'
            : !regexClass.PASSWORD_VALUE_REGEX_SPECIAL.test(value) ? 'Pawword should have at least 1 uppercase, 1 Lowercase ,1 number and 1 special characters ' : '';
        break;
      case 'phone':
        errors.phone =
          value.length == 0
            ? 'Enter Phone number'
            : (value.length < 10) ?
              'Phone number should be 10-13 characters' : (value.length > 13) ? 'Phone number should be 10-13 characters'
               : '';
        break;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {

      if (errors.email === "" && errors.name === "" && errors.phone === "") {
        this.setState({ isDisabled: false });
        console.log(this.state.isDisabled)
      }
    })
  }
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submit(e);
    }
  }
  render() {
    const { errors } = this.state;
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (


      <div className="dc-wrap add-user">
        <div className="dc-header">
          <div className="dch-left">
            <h3 className="dc-head">{this.state.user_id ? 'Edit User' : 'Add User'}</h3>
          </div>
          <div className="dch-right">
            <NavLink to="/users"> <button type="button" className="pp-custom-btn"><span className="ion-arrow-left-c"></span>Back</button></NavLink>
          </div>
        </div>
        <div className="dc-body">
          {this.state.message.length > 0 ?
            <span class="error">{this.state.message}</span>
            : ''}
          <div className="sc-bg-white">
            <div className="sc-input-wrap sc-one-by-two">
              <div className="sc-input">
                <label className="sc-label">Name</label>
                <input type="text" className="sc-custom-form" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="name" autoComplete="name" value={this.state.name} placeholder="Enter Candidate's Name" />
                {errors.name.length > 0 &&
                  <span className='error'>{errors.name}</span>}
              </div>
              <div className="sc-input">
                <label className="sc-label">Email ID</label>
                <input type="text" className="sc-custom-form" name="email" onKeyDown={this._handleKeyDown} maxLength={50} onChange={this.onChange} autoComplete="username" value={this.state.email} placeholder="Enter email ID" />
                {errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}
              </div>
            </div>
            <div className="sc-input-wrap sc-one-by-two">
              <div className="sc-input">
                <label className="sc-label">Password</label>
                <input type="password" className="sc-custom-form" name="password" onKeyDown={this._handleKeyDown} maxLength={16} onChange={this.onChange} autoComplete="password" value={this.state.password} placeholder="************" />
                {errors.password.length > 0 &&
                  <span className='error'>{errors.password}</span>}
              </div>
            </div>
            <div className="sc-input-wrap sc-one-by-two">
              <div className="sc-input">
                <label className="sc-label">Mobile Number</label>
                <input type="text" className="sc-custom-form" name="phone" onKeyDown={this._handleKeyDown} maxLength={13} onChange={this.onChange} autoComplete="name" value={this.state.phone} placeholder="Please mobile number" />
                {errors.phone.length > 0 &&
                  <span className='error'>{errors.phone}</span>}
              </div>
            </div>
            <div className="sc-checkbox-wrap">
              <h4 className="sc-label">Select a section for access</h4>
              <div className="sc-checkbox-content">
                <div className="sc-input">
                  {/* <input type="checkbox" name="access" id="all"  onClick={() => this.onChangeaccess('all')}defaultChecked={this.state.access == 'all' ? 'checked' : ''}/>
                  <label htmlFor="all">All</label>
                  <br /> */}
                  {this.state.inventory_report_access ?
                    <input type="checkbox" name="access" id="inventory_report" onClick={() => this.onChangeaccess('inventory_report_access', !this.state.inventory_report_access)} checked />
                    :
                    <input type="checkbox" name="access" id="inventory_report" onClick={() => this.onChangeaccess('inventory_report_access', !this.state.inventory_report_access)} />
                  }
                  <label htmlFor="inventory_report">Inventory Report </label>
                  <br />
                  {this.state.revenue_report_access ?
                    <input type="checkbox" name="access" id="revenue_report" onClick={() => this.onChangeaccess('revenue_report_access', !this.state.revenue_report_access)} checked />
                    : <input type="checkbox" name="access" id="revenue_report" onClick={() => this.onChangeaccess('revenue_report_access', !this.state.revenue_report_access)} />
                  }
                  <label htmlFor="revenue_report">Revenue Report</label>
                  <br />
                  {this.state.car_movement_record_access ?
                    <input type="checkbox" name="access" id="car_movement_report" onClick={() => this.onChangeaccess('car_movement_record_access', !this.state.car_movement_record_access)} checked />
                    :
                    <input type="checkbox" name="access" id="car_movement_report" onClick={() => this.onChangeaccess('car_movement_record_access', !this.state.car_movement_record_access)} />

                  }  <label htmlFor="car_movement_report">Car Movement Report</label>
                  <br />
                  {this.state.lot_diagram_access ?
                    <input type="checkbox" name="access" id="lot_diagram" onClick={() => this.onChangeaccess("lot_diagram_access", !this.state.lot_diagram_access)} checked />
                    :
                    <input type="checkbox" name="access" id="lot_diagram" onClick={() => this.onChangeaccess("lot_diagram_access", !this.state.lot_diagram_access)} />

                  }  <label htmlFor="lot_diagram">Lot Diagram Report</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="dc-footer">

          <button type="button" onClick={this.submit} className="pp-custom-btn">Submit</button>
        </div>
      </div>

    )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(AddUser);


