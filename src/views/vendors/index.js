import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import trash  from '../../img/icons/trash-outline.svg';
import editpng  from '../../img/icons/edit.png';
import { _callApi } from '../../Services/baseService';


  class ListVendors extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: true,
        items: [],
        id:'',
        searchKey: '',
        totalCount: 0,
        activePageNo: 1,
        pageRange:1,
        count: 10,
        modalAccess: false, search: ''
      }
      this.search = this.search.bind(this);
    }
    search(event) {
  
      this.setState({
        searchKey: event.target.value,
        activePageNo: 1,
      }, function () {
        const self = this;
  
        if (self.state.typingTimeout) {
          clearTimeout(self.state.typingTimeout);
        }
        self.setState({
          typing: false,
          typingTimeout: setTimeout(function () {
            self.accounts(self.state.activePageNo);
          }, 2000)
        });
  
      })
    }
    componentDidMount() {
      this.accounts(this.state.activePageNo);
    }
    deleteSubadmin = () => {
      const data = {
      }
      var id=this.state.id;
      var headerdata = "";
      _callApi(data, 'vendor/delete/'+id, headerdata,4)
        .then((response) => {
  
          if (response.data.status === 200) {
            this.accounts(this.state.activePageNo);
           this.setState({modalAccess:false})
  
          } else {
            this.setState({message:response.data.msg});
            setTimeout(
             () => this.setState({ message: '' }), 
             2000
           );
          }
        });
    }
    onChangeOptionsPlus(value,id) {
      if(id){
      this.setState({ modalAccess: value,id:id })
      }else{
        this.setState({ modalAccess: value })
      }
  
    }
    accounts(pageNumber) {
      this.setState({
        items: [],
      });
      var headerdata = "";
      const data = {
        //page: '' + (pageNumber ? parseInt(pageNumber) : parseInt()),     
      }
      // this.setState({ activePageNo: (pageNumber ? pageNumber : this.state.activePageNo) })
       _callApi(data, '/vendor/', headerdata,2)
        .then((response) => {
          if(response.status === 200){
          if (response.data.status === 200) {
           this.setState({
                isLoaded: true,
                items: response.data.vendors, });
            }
            console.log(response.data.users)
          } else {
            this.setState({ message: response.msg });
            setTimeout(
              () => this.setState({ message: '' }),
              2000
            );
            
          }
        
        });
  
  
    }
  
    render() {
      var { isLoaded, items } = this.state;
      // var i = ((this.state.activePageNo - 1) * this.state.count) + 1;
      if (!isLoaded) {
        return <div>Loading....</div>;
      } else {
  
      return (
<>
<div className="dashboard-wrapper">

<div className={this.state.modalAccess ? "dashboard-center-popup active" : "dashboard-center-popup"}>
  <div className="dp-backdrop"></div>
  <div className="dp-content">
    <div className="dp-body">
    <div class="dp-popup del-ven-name">
		 <div class="popup-close"><span class="ion-close-round" onClick={() => this.onChangeOptionsPlus(false)}></span></div>
		 <h4 class="popup-title">Do you want to delete? <span>Vendor Name</span></h4>
			  <div class="popup-action">
				  <button type="button" onClick={() => this.deleteSubadmin()}class="pp-custom-btn">Yes</button>
				  <button type="button" onClick={() => this.onChangeOptionsPlus(false)} class="pp-custom-btn pp-btn-outline">No</button>
			  </div>
		  </div>
    
    </div>
  </div>
</div>
</div>

      
        <div class="dc-wrap vendor-mgnt-table">
        <div class="dc-header">
         <div class="dch-left">
           <h3 class="dc-head">Vendor Management</h3>
           </div>
           <div class="dch-right">
           <NavLink to="/vendors/add"><button type="button" class="pp-custom-btn"><span class="ion-plus-round"></span>Add</button></NavLink> 
      
           </div>	 
         </div>
         <div class="dc-body">
          <div class="dcb-table-responsive ct-plain">
                  <table class="custom-table vendor-mgnt-tbl last-center-tbl">
                    <thead>
                      <tr>
                        <th><div class="ct-head">
                            <p>Name</p>
                            </div></th>
                            <th><div class="ct-head">
                            <p>Onsite Charge Applicable</p>
                            </div></th>
                            <th><div class="ct-head">
                            <p>Modify</p>
                            </div></th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.length > 0 ?
                      items.map((item, i) => (

                      <tr>
                        <td><p>{item.name}</p></td>
                        <td><p>{item.onsie_charge_applicable.toString().toUpperCase()}</p></td>
                <td>
                <div class="ct-action">
                 {/* eslint-disable-next-line */}
                <a  href="javascript:void(0);" onClick={() => this.onChangeOptionsPlus(true,item.id)}><img src={trash} alt="delete" /><span>Delete</span></a>
                <NavLink to={"/vendors/edit/" + item.id}><img src={editpng} alt="edit" /><span>Edit</span></NavLink>	
                </div>
                       </td>
                       </tr>
                      )):<tr><td colSpan="2">No records found</td></tr>}
                    </tbody>
                  </table>
              </div>	
         </div>		
        </div>
</>

      // <div class="dc-wrap select-vendor-name">
      //  <div class="dc-header">
      //  <div class="dch-left">
      //    <h3 class="dc-head">Vendor's name</h3>
      //    </div>
      //    <div class="dch-right">

      //      <NavLink to="/vendors/add"><button type="button" class="pp-custom-btn"><span class="ion-plus-round"></span>Add</button></NavLink> 
      //    </div>	 
      //  </div>
      //  <div class="dc-body">
      //    <div class="vendor-wrap">
      //    {items.length > 0 ?
      //                 items.map((item, i) => (

      //      <div class="vendor-box">
      //        <div class="vendor-name">
      //          <span>{item.name.charAt(0)}</span>
      //          <p>{item.name}</p>
      //        </div>
      //        <NavLink to={"/vendors/edit/"+item.id}  class="vendor-link">
      //          <span class="ion-ios-arrow-thin-right"></span>
      //        </NavLink>
      //      </div>
      //                 )):''}
           
            
      //    <div class="vendor-box add-box">
      //    <NavLink to="/vendors/add"> <i class="ion-plus-round"></i>	 
			//  </NavLink>  </div>
         
      //  </div>
      // </div>
      // </div>

    )
  }
}

  }
function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(ListVendors);


