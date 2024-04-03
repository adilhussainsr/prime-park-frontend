import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';



class CheckoutSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_name: '',
      mobile_number: '',
      plate_number: '',
      reservation_id: '',
      ticket_id: '',
      message:'',
      search_string:'',
      Suggestions:[],
      SuggestionsPN:[],
      SuggestionsMN:[],
      SuggestionsRI:[],
      SuggestionsTI:[],
      SuggestionData:[],
      errors: {
        customer_name: '',
        mobile_number: '',
        plate_number: '',
        reservation_id: '',
        ticket_id: ''
      }
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

SuggestionDataPopup(name,value){
  var headerdata = "";
  if(this.state[name].length!=0){
    console.log('-----------------')
		var data = {[name]:value};
		var s = _callApi(data, 'booking/suggestions', headerdata)
			.then((response) => {
				if (response.status == 200) {
					if (response.data.status === 200) {
            if(name=="customer_name"){
						this.setState({ Suggestions: response.data.bookings , SuggestionsPN:[],
              SuggestionsMN:[],
              SuggestionsRI:[],
              SuggestionsTI:[],})
            }else if(name=='plate_number'){
            	this.setState({ SuggestionsPN: response.data.bookings, Suggestions:[],
                SuggestionsMN:[],
                SuggestionsRI:[],
                SuggestionsTI:[], })
            }else if(name=='mobile_number'){
              this.setState({ SuggestionsMN: response.data.bookings, SuggestionsPN:[],
                Suggestions:[],
                SuggestionsRI:[],
                SuggestionsTI:[], })
          }else if(name=='id'){
            this.setState({ SuggestionsTI: response.data.bookings , SuggestionsPN:[],
              SuggestionsMN:[],
              SuggestionsRI:[],
              })
        }else if(name=='reservation_id'){
          this.setState({ SuggestionsRI: response.data.bookings , SuggestionsPN:[],
            SuggestionsMN:[],
            SuggestionsTI:[],})
					}
				}else{
          this.setState({  Suggestions:[],
            SuggestionsPN:[],
            SuggestionsMN:[],
            SuggestionsRI:[],
            SuggestionsTI:[],
            SuggestionData:[],})
        }
      }else{
        this.setState({  Suggestions:[],
          SuggestionsPN:[],
          SuggestionsMN:[],
          SuggestionsRI:[],
          SuggestionsTI:[],
          SuggestionData:[],})
      }
			})
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

    var data = {};

    data = {
      'customer_name': this.state.customer_name,
      'plate_number': this.state.plate_number,
      'mobile_number': this.state.mobile_number,
      'ticket_id': this.state.ticket_id,
      'reservation_id': this.state.reservation_id
    }
    var headerdata = "";
    var s = _callApi(data, 'booking/search', headerdata)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.status === 200) {
           var booking=response.data.booking;
        
          // if(booking.is_checked_out==false){
            var self = this;
            self.props.history.push({
              pathname: '/checkout/checkout/'+booking.id,

            })
          
      //   }else{
      //     this.setState({ message: 'Checkout already completed' });
      //     setTimeout(
      //       () => this.setState({ message: '' }),
      //       2000
      //     );
      //   }
      // }
          }
        
        }else{
					this.setState({ message: "No response!" });
							setTimeout(
								() => this.setState({ message: '' }),
								2000
							);
        }
      })

  }



  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;


    this.setState({ errors, [name]: value }, () => {

  this.SuggestionDataPopup(name,value);

 

    })
  }
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submit(e);
    }
  }
  onChangeOptions(item){
    this.setState({
      'customer_name': item.customer_name,
      'plate_number': item.plate_number,
      'mobile_number': item.mobile_number,
      'ticket_id': item.id,
      'reservation_id': item.reservation_id,
      Suggestions:[],
      SuggestionsPN:[],
      SuggestionsMN:[],
      SuggestionsRI:[],
      SuggestionsTI:[],
      SuggestionData:[],
  })

  }
  render() {
    const { errors ,SuggestionsTI,SuggestionsRI,SuggestionsPN,SuggestionsMN,Suggestions} = this.state;
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    return (

      <div className="dc-wrap plate-number">
        <div className="dc-header">
          <div className="dch-left">
            <h3 className="dc-head">Check-Out</h3>
          </div>
          <div className="dch-right">


          </div>
        </div>
        <div className="dc-body">
          <div className="sc-input-wrap sc-one-by-two">
            <div className="sc-input">
              <label className="sc-label">Customer's name</label>
              <input type="text" className="sc-custom-form"  autocomplete="off"  placeholder="Search by Customer's Name"  maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="customer_name"  value={this.state.customer_name} />
              {Suggestions.length > 0 ?
               <div class="suggestion-wrap">	  
                   {   Suggestions.map((item, i) => (
                      <>  <span onClick={() => this.onChangeOptions(item)}>{item.customer_name}(Ticket Number: {item.id})</span><br/></>

                      ))}
                      </div>
                      
                    :
                      ''}
                     
			
                      
             
              {errors.customer_name.length > 0 &&
                <span className='error'>{errors.customer_name}</span>}
            </div>
            <div className="sc-input">
              <label className="sc-label">Plate Number</label>
              <input type="text" className="sc-custom-form" placeholder="Please enter plate number" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="plate_number" autocomplete="off" value={this.state.plate_number} />
              
              {SuggestionsPN.length > 0 ?
               <div class="suggestion-wrap">	  
                   {   SuggestionsPN.map((item, i) => (
                      <>  <span onClick={() => this.onChangeOptions(item)}>{item.customer_name}(Ticket Number: {item.id})</span><br/></>

                      ))}
                      </div>
                      
                    :
                      ''}
                     
              {errors.plate_number.length > 0 &&
                <span className='error'>{errors.plate_number}</span>}

            </div>
          </div>
          <div className="sc-input-wrap sc-one-by-two">

            <div className="sc-input">
              <label className="sc-label">Mobile No.</label>
              <input type="text" className="sc-custom-form" placeholder="Please enter mobile number " maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="mobile_number" autocomplete="off" value={this.state.mobile_number} />
            
              {SuggestionsMN.length > 0 ?
               <div class="suggestion-wrap">	  
                   {   SuggestionsMN.map((item, i) => (
                      <>  <span onClick={() => this.onChangeOptions(item)}>{item.customer_name}(Ticket Number: {item.id})</span><br/></>

                      ))}
                      </div>
                      
                    :
                      ''}
              {errors.mobile_number.length > 0 &&
                <span className='error'>{errors.mobile_number}</span>}
            </div>
            <div className="sc-input">
              <label className="sc-label">Reservation ID</label>
              <input type="text" className="sc-custom-form" placeholder="Please enter Reservation ID" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="reservation_id" autocomplete="off" value={this.state.reservation_id} />
              {SuggestionsRI.length > 0 ?
               <div class="suggestion-wrap">	  
                   {   SuggestionsRI.map((item, i) => (
                      <>  <span onClick={() => this.onChangeOptions(item)}>{item.customer_name}(Ticket Number: {item.id})</span><br/></>

                      ))}
                      </div>
                      
                    :
                      ''}
              {errors.reservation_id.length > 0 &&
                <span className='error'>{errors.reservation_id}</span>}

            </div>
          </div>
          <div className="sc-input-wrap sc-one-by-two">
            <div className="sc-input">
              <label className="sc-label">Ticket Id</label>
              <input type="text" className="sc-custom-form" placeholder="Please enter Ticket number" maxLength={25} onKeyDown={this._handleKeyDown} onChange={this.onChange} name="id" autocomplete="off" value={this.state.ticket_id} />
              {SuggestionsTI.length > 0 ?
               <div class="suggestion-wrap">	  
                   {   SuggestionsTI.map((item, i) => (
                      <>  <span onClick={() => this.onChangeOptions(item)}>{item.customer_name}(Ticket Number: {item.id})</span><br/></>

                      ))}
                      </div>
                      
                    :
                      ''}
              {errors.ticket_id.length > 0 &&
                <span className='error'>{errors.ticket_id}</span>}

            </div>

          </div>
          {/* {this.state.message .length>0?
                  <span className="" style={{ color: "red" }}>
                    {this.state.message}</span> : ''} */}
         

          <div className="dc-footer">
          
            <button type="button" onClick={this.submit} className="pp-custom-btn">Search</button>
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


export default connect(mapStateToProps)(CheckoutSearch);


