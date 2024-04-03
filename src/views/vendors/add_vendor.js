import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';


class AddVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initials: '',
      onsie_charge_applicable:false,
      user_id:(this.props.match.params.id) ? this.props.match.params.id : '',
      errors: {
        name: '',
        onsie_charge_applicable:'',
      initials: '',
      },
      isDisabled: false
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    if (this.state.user_id != '') {
      var headerdata="";
      var data={};
			var s = _callApi(data, 'vendor/' + this.state.user_id, headerdata, 2)
				.then((response) => {
					if (response.status == 200) {
						if (response.data.status === 200) {
              var users=response.data.vendor;
              this.setState({name:users.name,initials:users.initials,onsie_charge_applicable:users.onsie_charge_applicable});
          

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
            "name":this.state.name,
        "initials": this.state.initials,
        "onsie_charge_applicable": this.state.onsie_charge_applicable
           }       
  
        var headerdata = "";
  
        _callApi(data, 'vendor/edit', headerdata,3)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.status === 200) {
                let self = this;
                self.props.history.push('/vendors/list');
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
        "name":this.state.name,
        "initials": this.state.initials,
        "onsie_charge_applicable": this.state.onsie_charge_applicable
      }

      var headerdata = "";

      _callApi(data, 'vendor/add', headerdata)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              let self = this;
              self.props.history.push('/vendors/list');
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
  onChangeOptionsPlus(value) {
    
    this.setState({ onsie_charge_applicable:value})
    

  }


  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {

      case 'initials':
        errors.name =
          value.length < 2
            ? 'Intials is required'
            : '';
        break;
      case 'name':
        errors.name =
          value.length < 2
            ? 'Name is required'
            : '';
        break;
        
    }
    this.setState({ errors, [name]: value }, () => {

      if (errors.name === "" && errors.initials === "") {
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
     
        <div class="dc-wrap add-vendor">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Add Vendor</h3>
		 </div>
		 <div class="dch-right">
		<NavLink to="/vendors/list"><button type="button" class="pp-custom-btn"><span class="ion-arrow-left-c"></span>Back</button></NavLink>	 
		 </div>	 
	 </div>
	 <div class="dc-body">
      <div class="sc-bg-white">
       <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Vendor's</label>
              <input type="text" class="sc-custom-form" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="name" autoComplete="name" value={this.state.name} placeholder="" />
                {errors.name.length > 0 &&
                  <span className='error'>{errors.name}</span>}
            </div>
            <div class="sc-input">
              <label class="sc-label">Reservation initials</label>
               <input type="text" class="sc-custom-form" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="initials" autoComplete="name" value={this.state.initials} placeholder="Enter initials" />
                {errors.initials.length > 0 &&
                  <span className='error'>{errors.initials}</span>}
			  </div>
            </div>
		  <div class="sc-extra">
        {this.state.onsie_charge_applicable?
			  <div class="check-condition active" onClick={() => this.onChangeOptionsPlus(false)}>
				  <span class="check-mark">
				  <i class="ion-ios-checkmark-empty"></i></span>
				  <p class="condition-text">Onsite Charge Applicable</p>
			  </div>
        :
        <div class="check-condition" onClick={() => this.onChangeOptionsPlus(true)}>
				  <span class="check-mark">
				  <i class="ion-ios-checkmark-empty"></i></span>
				  <p class="condition-text">Onsite Charge Applicable</p>
			  </div>
        }
		  </div>
          </div>   
     </div>
	 <div class="dc-footer">
	 	<button type="button" onClick={this.submit} class="pp-custom-btn">Save</button>
	 </div>
	</div>
      

    )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(AddVendor);


