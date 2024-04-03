import React, { Component } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import editImage from '../../img/icons/edit.png';
import { _callApi } from '../../Services/baseService';
import RichTextEditor from 'react-rte';
class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
		PrivacyPolicy:'',
		toggle:false,
		value: ''   }
this.toggleEdit=this.toggleEdit.bind(this)
this.submit=this.submit.bind(this);
  }
  onChange = (value) => {
    this.setState({PrivacyPolicy:value});

  };
 
componentDidMount(){
this.PoliciesData();
}
PoliciesData(){
	var headerdata = "";
	var data = {};
	console.log(data)
	var s = _callApi(data, 'parking/privacypolicy', headerdata,2)
	.then((response) => {
		if (response.status == 200) {
			if (response.data.status === 200) {
			  console.log(response.data.data)
			  this.setState({PrivacyPolicy:response.data.policy})
			  
			}
		}
	})
  }
  toggleEdit(){
	  this.setState({toggle:!this.state.toggle})
  }
  submit(){
	var headerdata = "";
	var data={};
	if(this.state.PrivacyPolicy.target){
	 data = {policy:this.state.PrivacyPolicy.target.value};
	}else{
	data={policy:this.state.PrivacyPolicy}
	}
	console.log(data)
	var s = _callApi(data, 'parking/privacypolicy', headerdata)
	.then((response) => {
		if (response.status == 200) {
			if (response.data.status === 200) {
			  console.log(response.data.data)
			  this.setState({toggle:false})
			  this.PoliciesData();
			
			}
		}
	})
  }
  rawMarkup(){
	var rawMarkup = this.state.PrivacyPolicy
	return { __html: rawMarkup };
}
  render() {

    return (

        <div className="dc-wrap modify-policy">
	 <div className="dc-header">
	 <div className="dch-left">
		 <h3 className="dc-head">Modify Policy</h3>
		 </div>
		 <div className="dch-right">
			<NavLink to="/settings"><button type="button" className="pp-custom-btn"><span className="ion-arrow-left-c"></span>Back</button></NavLink> 
			 <button type="button" onClick={this.toggleEdit} className="pp-custom-btn pp-btn-outline"><img src={editImage} />Edit</button>
		 </div>	 
	 </div>
	 <div className="dc-body">
	   <div className="sc-bg-white">
       <div className="term-condition-box">
		   {this.state.toggle?
		    <div className="tc-body">
				
<textarea  onChange={this.onChange} style={{'width':'100%'}} defaultValue={this.state.PrivacyPolicy} rows={15} ></textarea>
 <button type="button" onClick={this.submit} className="pp-custom-btn pp-btn-outline">Save</button>
			</div>
		   :
			 <div className="tc-body">
				   <span dangerouslySetInnerHTML={this.rawMarkup()} />

				
			 </div>
  }
		 </div>
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


export default connect(mapStateToProps)(Policies);


