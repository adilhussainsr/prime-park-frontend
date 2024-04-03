import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import cartypeImage  from '../../img/cartype.png';
import trash  from '../../img/icons/trash-outline.svg';
import editpng  from '../../img/icons/edit.png';
  const defaultProps = {
    initialPage: 1,
    pageSize: 10
  }
  class CarType extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: true,
        items: [],
        searchKey: '',
        totalCount: 0,
        activePageNo: 1,
        pageRange:1,
        count: 10,
        modalAccess: false, search: ''
      }
      this.search = this.search.bind(this);
    }
    onChangeOptionsPlus(value,id) {
      if(id){
      this.setState({ modalAccess: value,id:id })
      }else{
        this.setState({ modalAccess: value })
      }
  
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
 
      _callApi(data, 'cartype/delete/'+id, headerdata,4)
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
  
    accounts(pageNumber) {
      this.setState({
        items: [],
      });
      var headerdata = "";
      const data = {
        //page: '' + (pageNumber ? parseInt(pageNumber) : parseInt()),     
      }
      // this.setState({ activePageNo: (pageNumber ? pageNumber : this.state.activePageNo) })
       _callApi(data, '/cartype/', headerdata,2)
        .then((response) => {
          if(response.status === 200){
          if (response.data.status === 200) {
           this.setState({
                isLoaded: true,
                items: response.data.types });
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
             <h4 class="popup-title">Do you want to delete? <span>Car type</span></h4>
                <div class="popup-action">
                  <button type="button" onClick={() => this.deleteSubadmin()}class="pp-custom-btn">Yes</button>
                  <button type="button" onClick={() => this.onChangeOptionsPlus(false)} class="pp-custom-btn pp-btn-outline">No</button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        </div>
        <div class="dc-wrap car-type-table">
        <div class="dc-header">
         <div class="dch-left">
           <h3 class="dc-head">Car Type</h3>
           </div>
           <div class="dch-right">
           <NavLink to="/car_types/add"><button type="button" class="pp-custom-btn"><span class="ion-plus-round"></span>Add</button></NavLink> 
      
           </div>	 
         </div>
         <div class="dc-body">
          <div class="dcb-table-responsive">
                  <table class="custom-table car-type-tbl last-center-tbl">
                    <thead>
                      <tr>
                        <th><div class="ct-head">
                            <p>Vehicles</p>
                            </div></th>
                            <th><div class="ct-head">
                            <p>Regular Amount</p>
                            </div></th>
                        <th><div class="ct-head">
                            <p>Overstay Charges</p>
                            </div></th>
                            <th><div class="ct-head">
                            <p>Vehicle Type Charges</p>
                            </div></th>
                            <th><div class="ct-head">
                            <p>Actions</p> 
                            </div></th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.length > 0 ?
                      items.map((item, i) => (

                      <tr>
                        <td><p>{item.type}</p></td>
                        <td><p>${item.regular_charges}</p></td>
                        <td><p>${item.hourly_overstay_charges}</p></td>
                        <td><p>${item.onsite_charges}</p></td>
                        <td>
                <div class="ct-action">
                <a href="javascript:void(0);" onClick={() => this.onChangeOptionsPlus(true,item.id)}><img src={trash}  /><span>Delete</span></a>
                <NavLink to={"/car_types/edit/" + item.id}><img src={editpng} /><span>Edit</span></NavLink>	
                </div>
                       </td>
                        </tr>
                      )):''}
                    </tbody>
                  </table>
              </div>	
         </div>		
        </div>
       
</>
    )
  }
}
  }

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(CarType);


