import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class PlateName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
   
  }

  render() {

    return (

      <div class="dashboard-content">
       <div class="dc-wrap plate-number">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Plate Number</h3>
		 </div>
		 <div class="dch-right">
			 <button type="button" class="pp-custom-btn"><span class="ion-arrow-left-c"></span>Back</button>
		 </div>	 
	 </div>
	 <div class="dc-body">
		 <div class="sc-input-wrap">
            <div class="sc-input">
              <label class="sc-label">Customer's name</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter Customer's Name" />
            </div>
          </div>
          <div class="sc-input-wrap sc-one-by-two">
            <div class="sc-input">
              <label class="sc-label">Onsite Amount</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter onsite amount" />
            </div>
            <div class="sc-input">
              <label class="sc-label">Mobile No.</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter mobile number " />
            </div>
          </div>
          <div class="sc-input-wrap sc-one-by-two sc-bg-gray">
            <div class="sc-input">
              <label class="sc-label">Customer's information</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter plate number" />
              <input type="text" class="sc-custom-form" placeholder="Please confirm Plate number" />
            </div>
            <div class="sc-input">
              <label class="sc-label">Reservation ID</label>
              <input type="text" class="sc-custom-form" placeholder="Please enter Reservation ID" />
              <input type="text" class="sc-custom-form" placeholder="Please confirm Reservation ID" />
            </div>
          </div>
		 <div class="select-pass">
			 <h2 class="sp-heading">Select no. of Passengers</h2>
			 <div class="no-pass">
				 <div class="sp-no active">1</div>
				 <div class="sp-no active">2</div>
				 <div class="sp-no active">3</div>
				 <div class="sp-no">4</div>
				 <div class="sp-no">5</div>
				 <div class="sp-no sp-add-more">+</div>
			 </div>
			 <p class="sp-notice">Additional Charges will apply on Passengers above 4.</p>
		 </div>
	 </div>
	 <div class="dc-footer">
	 	<button type="submit" class="pp-custom-btn">Submit</button>
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


export default connect(mapStateToProps)(PlateName);


