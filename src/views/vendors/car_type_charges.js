import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import * as regexClass from '../../common/regex';
const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const handleChange = (e) => {
  e.preventDefault();
};

class CarTypeCharges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    regular_charges: '',
    hourly_overstay_charges: '',
    onsite_charges:'',
      user_id:(this.props.match.params.id) ? this.props.match.params.id : '',
      errors: {
        type: "",
    regular_charges: '',
    hourly_overstay_charges: '',
    onsite_charges:''
      },
      isDisabled: true
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    if (this.state.user_id != '') {
      var headerdata="";
      var data={};
			var s = _callApi(data, 'cartype/' + this.state.user_id, headerdata, 2)
				.then((response) => {
					if (response.status == 200) {
						if (response.data.status === 200) {
              var users=response.data.carType;
              this.setState({type:users.type,regular_charges:users.regular_charges,hourly_overstay_charges:users.hourly_overstay_charges,onsite_charges:users.onsite_charges});
           

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
      if(this.state.user_id){
        var data={};
       
           data = {
            'id':this.state.user_id,
            "type": this.state.type,
            "regular_charges": this.state.regular_charges,
            "hourly_overstay_charges": this.state.hourly_overstay_charges,
            "onsite_charges":this.state.onsite_charges
        }
        
  
        var headerdata = "";
  
        _callApi(data, 'cartype/edit', headerdata,3)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.status === 200) {
                let self = this;
                self.props.history.push('/car_types/list');
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
      

      }else{
      var data = {
        "type": this.state.type,
            "regular_charges": this.state.regular_charges,
            "hourly_overstay_charges": this.state.hourly_overstay_charges,
            "onsite_charges":this.state.onsite_charges
      }

      var headerdata = "";

      _callApi(data, 'cartype/add', headerdata)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              let self = this;
              self.props.history.push('/car_types/list');
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

      
      case 'type':
        errors.type =
          value.length < 2
            ? 'type is required'
            :  !(regexClass.ALPHABET_REGEX.test(value)) ?'Only alphabets are accepted':
            ((this.state.regular_charges.length === 0) ?
            errors.regular_charges ='Charges is required' : ''
              ) 
            
            
            
            ? '' : '';
        break;
        case 'regular_charges':
          errors.regular_charges =
            value.length ==0
              ? 'Charges is required'
              : !(regexClass.NUMBER_REGEXONLY.test(value)) ?'Please enter vaild charges':             
              
             ( (this.state.hourly_overstay_charges.length === 0) ?
              errors.hourly_overstay_charges ='Charges is required' : '')
              ? '' : '';
          break;
          case 'hourly_overstay_charges':
            errors.hourly_overstay_charges =
            value.length ==0
            ? 'Hourly charges is required'
            : !(regexClass.NUMBER_REGEXONLY.test(value)) ?'Please enter vaild charges':
            ((this.state.onsite_charges.length === 0) ?
            errors.onsite_charges ='Charges is required' : '')
            ? '' : '';
            break;
            case 'onsite_charges':
            errors.onsite_charges =
            value.length ==0
            ? 'Onsite Charges is required'
            : !(regexClass.NUMBER_REGEXONLY.test(value)) ?'Please enter vaild charges':'';
            break;
           
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {

      if (errors.type === "" && errors.hourly_overstay_charges === "" && errors.regular_charges === "" && errors.onsite_charges==="") {
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

      <div class="dashboard-content">
      <div class="dc-wrap car-type">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Car Type</h3>
		 </div>
		 <div class="dch-right">
			<NavLink to="/car_types/list"> <button type="button" class="pp-custom-btn"><span class="ion-arrow-left-c"></span>Back</button></NavLink>
		 </div>	 
	 </div>
	 <div class="dc-body">
      <div class="sc-bg-white">
       <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Car Type</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter car type" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="type" autoComplete="name" value={this.state.type} />
                {errors.type.length > 0 &&
                  <span className='error'>{errors.type}</span>}
            </div>
            <div class="sc-input">
              <label class="sc-label">Regular Charges</label>
               <input type="text" class="sc-custom-form" placeholder="Please enter regular charges" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="regular_charges" autoComplete="name" value={this.state.regular_charges}  />
                {errors.regular_charges.length > 0 &&
                  <span className='error'>{errors.regular_charges}</span>}
			  </div>
            </div>
           <div class="sc-input-wrap sc-one-by-two">
           <div class="sc-input">
              <label class="sc-label">Overstay Charges</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter the overstay charges"  maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="hourly_overstay_charges" autoComplete="name" value={this.state.hourly_overstay_charges}  />
                {errors.hourly_overstay_charges.length > 0 &&
                  <span className='error'>{errors.hourly_overstay_charges}</span>}
            </div>
          
           <div class="sc-input">
              <label class="sc-label">Vehicle Type Charges</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter the vehcile charges"  maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="onsite_charges" autoComplete="name" value={this.state.onsite_charges}  />
                {errors.onsite_charges.length > 0 &&
                  <span className='error'>{errors.onsite_charges}</span>}
            </div>
            </div>
          </div>   
     </div> 
	 <div class="dc-footer">
	 	<button type="button" onClick={this.submit} disabled={this.state.isDisabled} class="pp-custom-btn">Save</button>
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


export default connect(mapStateToProps)(CarTypeCharges);


