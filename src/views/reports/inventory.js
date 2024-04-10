import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import $ from 'jquery';
import { _callApi } from '../../Services/baseService';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
		items:[],
		vendors:[],
		message:'',
		vendor_name:"All",
		selectionRange: {
			startDate: null,
			endDate: null,
			key: 'selection',
		  }
    }
this.inventoryData=this.inventoryData.bind(this)
		this.inventoryData();
	this.handleSelect=this.handleSelect.bind(this)
  }
  handleSelect(ranges){
    console.log(ranges);
	this.setState({
		selectionRange:
		{
		  startDate: ranges.selection.startDate,
		  endDate: ranges.selection.endDate,
		  key: 'selection',
		}
  
	  })
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  inventoryData(){
	var headerdata = "";
	var data = {};
	console.log(data)
	var s = _callApi(data, 'booking/inventory/lot', headerdata,2)
	.then((response) => {
		
		if (response.status == 200) {
			if (response.data.status === 200) {
			  console.log(response.data.data)
			  this.setState({items:response.data.invnentory})
			}
		}else{
	
			if (response.status === 400) {
				this.setState({message:response.msg});
			  }
			
			
		}
	})
  }
  onChangeOptions(value) {
	if(value){
		
		this.setState({vendor_name:value});

	}
	
  }
  toggle=()=>{
	
	if($(".custom-select").hasClass("active")){
	  $(".custom-select").removeClass("active");
	}else{
	  $(".custom-select").addClass("active");
	}
  }
  render() {
    var { isLoaded, items ,vendors} = this.state;
    return (

		<div className="dc-wrap inventory-report-table">
		<div className="dc-header">
		 <div className="dch-left">
			 <h3 className="dc-head">Inventory Report</h3>
			 {this.state.message.length > 0 &&
                  <span className='error'>{this.state.message}</span>}
			 </div>
			
			 <div className="dch-right">
			 
				 {/* <div className="custom-date-picker-wrap">
				  <h4 className="cs-label">Date</h4>
					
						<DateRangePicker ranges={[this.state.selectionRange]}
        onChange={this.handleSelect}/>
					
				 </div>
				 <div className="custom-select">
					 <h4 className="cs-label">Select Vendor</h4>
					 <div className="select-field">
						 <p className="select-value">{this.state.vendor_name}</p>
						 <span className="ion-ios-arrow-down" onClick={this.toggle}></span>
					 </div>
					 <div className="select-field-list">
					 {vendors.length > 0 ?
                    
						 <ul>
							  <li  onClick={() => this.onChangeOptions("All")}>All</li>
							  { vendors.map((vendor, j) => (
							 <li  onClick={() => this.onChangeOptions(vendor.name)}>{vendor.name}</li>
							  ))}
							
						 </ul>
						 :''}
					 </div>
				 </div> */}
			 </div>	 
		 </div>
		 <div className="dc-body">
			<div className="dcb-table-responsive">
				<table className="custom-table inventory-report-tbl last-center-tbl">
				  <thead>
					<tr>
					  <th><div className="ct-head">
						  <p>Parking Lot</p>
						  </div></th>
						  <th><div className="ct-head">
						  <p>Capacity</p>
						  </div></th>
					  <th><div className="ct-head">
						  <p>Occupied</p>
						  </div></th>
						  <th><div className="ct-head">
						  <p>Available</p>
						  </div></th>
					</tr>
				  </thead>
				  <tbody>
				  {items.length > 0 ?
                      items.map((item, i) => (
					<tr>
					  <td><p>{item.type}</p></td>
					  <td><p>{item.total}</p></td>
					  <td><p>{item.occupied}</p></td>
					  <td><p>{item.vacant}</p></td>
					  </tr>
					  )):''}
					 
				  </tbody>
				</table>
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


export default connect(mapStateToProps)(Inventory);


