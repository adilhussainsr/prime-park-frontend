import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';



class UploadCsv extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedFile:null,
        message:''
    }
    this.submit=this.submit.bind(this);
  }
  fileSelectedHandler = (e) => {
    console.log(e.target.files)
  
    this.setState({ selectedFile: e.target.files[0] }, () => {

      this.submit();
    })

  // #3 Catching files that are too large on the client

  
    
  }
  submit() {


     
        const formData = new FormData();
    
        // Update the formData object
        formData.append(
          "csvfile",
          this.state.selectedFile,
        );
      
        var headerdata = "";
  
        _callApi(formData, 'booking/upload', headerdata)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.status === 200) {
                let self = this;
              
                this.setState({ message: response.data.msg, isDisabled: false });
                setTimeout(
                  () =>   self.props.history.push('/dashboard'),
                  2000
                );

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


  render() {

    return (

      <div class="dashboard-content">
       <div class="dc-wrap settings">
	 <div class="dc-header">
	 <div class="dch-left">
		 <h3 class="dc-head">Upload CSV</h3>
		 </div>
	 </div>
	 <div class="dc-body">
		 <div class="vendor-wrap">
          
             <input type="file" name="attach"   onChange={this.fileSelectedHandler} />
		 </div>
     {this.state.message ?
								<span className="mb-3 error" style={{ color: "red" }}>
									{this.state.message}
								</span> : ''}
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


export default connect(mapStateToProps)(UploadCsv);


