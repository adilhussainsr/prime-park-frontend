import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { _callApi } from '../../Services/baseService';
import trash  from '../../img/icons/trash-outline.svg';
import editpng  from '../../img/icons/edit.png';

const defaultProps = {
  initialPage: 1,
  pageSize: 10
}
class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      items: [],
      searchKey: '',
      totalCount: 0,
      activePageNo: 1,
      pageRange:1,
      modalAccess: false,
      id:'',
      count: 10,
      profile:{},
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
    var headerdata = "";
		var data = { };
        var s = _callApi(data, "user/profile", headerdata,2)
			.then((response) => {
				if (response.status == 200) {
					console.log(response)
          if(response.data.profile && response.data.profile.is_admin==false){
            this.props.history.push({
              pathname: '/dashboard'
            })
          }
          console.log(response.data.profile)
					this.setState({profile:response.data.profile})
				}
			})
  }
  deleteSubadmin = () => {
    var id=this.state.id;
    const data = {
    }
    var headerdata = "";
    _callApi(data, 'user/delete/'+id, headerdata,4)
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
     _callApi(data, '/user/', headerdata,2)
      .then((response) => {
        if(response.status === 200){
        if (response.data.status === 200) {
         this.setState({
              isLoaded: true,
              items: response.data.users, });
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
    <div className="dp-popup del-ven-name">
		 <div className="popup-close"><span className="ion-close-round" onClick={() => this.onChangeOptionsPlus(false)}></span></div>
		 <h4 className="popup-title">Do you want to delete? <span>User Name</span></h4>
			  <div className="popup-action">
				  <button type="button" onClick={() => this.deleteSubadmin()}className="pp-custom-btn">Yes</button>
				  <button type="button" onClick={() => this.onChangeOptionsPlus(false)} className="pp-custom-btn pp-btn-outline">No</button>
			  </div>
		  </div>
    
    </div>
  </div>
</div>
</div>

     
      <div className="dc-wrap user-mgnt-table">
      <div className="dc-header">
       <div className="dch-left">
         <h3 className="dc-head">User Management</h3>
         </div>
         <div className="dch-right">
         <NavLink to="/users/add"><button type="button" className="pp-custom-btn"><span className="ion-plus-round"></span>Add</button></NavLink> 
         </div>	 
       </div>
       <div className="dc-body">
        <div className="dcb-table-responsive ct-plain">
                <table className="custom-table user-mgnt-tbl last-center-tbl">
                  <thead>
                    <tr>
                      <th><div className="ct-head">
                          <p>Name</p>
                          </div></th>
                           <th><div className="ct-head">
                          <p>Email</p>
                          </div></th>
                           <th><div className="ct-head">
                          <p>Status</p>
                          </div></th>
                          <th><div className="ct-head">
                          <p>Mobile No.</p>
                          </div></th>
                        
                          <th><div className="ct-head">
                          <p>Action</p>
                          </div></th>
                       
                    </tr>
                  </thead>
                  <tbody>
                  {items.length > 0 ?
                      items.map((item, i) => (

                    <tr>
                      <td><p>{item.name}</p></td>
               <td><p>{item.email}</p></td>
               <td><p className="status st-active">{item.status?item.status:'-'}</p></td>
               <td><p>{item.phone}</p></td>
              <td>
              
              <div className="ct-action">
                <a href="javascript:void(0);" onClick={() => this.onChangeOptionsPlus(true,item.id)}><img src={trash}  /><span>Delete</span></a>
                <NavLink to={"/users/edit/" + item.id}><img src={editpng} /><span>Edit</span></NavLink>	
              </div>
            
                     </td>
              </tr>
                      )):<tr><td colSpan="5">No record found</td></tr>}
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


export default connect(mapStateToProps)(ListUsers);


