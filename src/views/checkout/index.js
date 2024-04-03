import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';

  const defaultProps = {
    initialPage: 1,
    pageSize: 10
  }
  class CheckoutVendors extends Component {
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
    deleteSubadmin = (id) => {
      const data = {
      }
      var headerdata = "";
      _callApi(data, 'user/delete/'+id, headerdata,4)
        .then((response) => {
  
          if (response.data.status === 200) {
            this.accounts(this.state.activePageNo);
           
  
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

      
      <div class="dc-wrap select-vendor-name">
       <div class="dc-header">
       <div class="dch-left">
         <h3 class="dc-head">Select Vendor's Name</h3>
         </div>
         <div class="dch-right">

           <NavLink to="/dashboard"><button type="button" class="pp-custom-btn"><span class="ion-arrow-left-c"></span>Back</button></NavLink> 
         </div>	 
       </div>
       <div class="dc-body">
         <div class="vendor-wrap">
         {items.length > 0 ?
                      items.map((item, i) => (

           <div class="vendor-box">
             <div class="vendor-name">
               <span>{item.name.charAt(0)}</span>
               <p>{item.name}</p>
             </div>
             <NavLink to={"/checkout/plate_name/"+item.id}  class="vendor-link">
               <span class="ion-ios-arrow-thin-right"></span>
             </NavLink>
           </div>
                      )):''}
           
            
        
         
       </div>
      </div>
      </div>

    )
  }
}

  }
function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(CheckoutVendors);


