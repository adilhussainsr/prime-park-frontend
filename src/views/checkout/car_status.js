import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import editImage from "../../img/icons/edit.png";
import { _callApi } from "../../Services/baseService";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Spinner from "react-spinkit";

import moment from "moment";
import Pagination from "react-js-pagination";
//import "bootstrap/less/bootstrap.less";

class CarStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAccess: false,
      items: [],
      users: [],
      user_id: 0,
      count: 10,
      totalCount: 0,
      pageRange: 1,
      activePageNo: 1,
      message: "",
      start_date: new Date().setDate(new Date().getDate() - 1),
      end_date: new Date(),
    };

    this._onSelectChange = this._onSelectChange.bind(this);
  }
  onChangeOptionsPlus(value) {
    this.setState({ modalAccess: value });
  }
  componentDidMount() {
    this.accounts(this.state.activePageNo);
    this.setState(
      {
        user_id: localStorage.getItem('user_id'),
        is_admin: localStorage.getItem('is_admin'),
      });

      console.log("is admin")
      console.log(localStorage.getItem('is_admin'))
  }
  _onInputChange = (e) => {
    const value = e.target ? e.target.value : e;

    if (value > this.state.end_date) {
      this.setState({ message: "Start date is always less than end date" });
    } else {
      this.setState({ start_date: value });
      this.setState({ message: "" });
      this.setState({ activePageNo: 1 });
      this.accounts(this.state.activePageNo);
    }
  };

  _onSelectChange = (e,item) => {
    this.setState({
      isLoaded: false
    });
    const value = e.target ? e.target.value : e;
    let headerdata = "";

    if(parseInt(this.state.user_id) !== parseInt(value) || this.state.is_admin === false){
      this.setState({
        isLoaded: true
      });
      alert('You cannot assign to other user!')
      return false;
    } 
    
    const data = {
      assigned_to: value,
      id: item.id,
      status: 'Accepted'
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true
          });
          this.accounts(this.state.activePageNo);

        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  };

  _onClickAccept = (e,item) => {
    this.setState({
      isLoaded: false
    });
    const value = e.target ? e.target.value : e;
    let headerdata = "";

    const data = {
      assigned_to: localStorage.getItem("user_id"),
      id: item.id,
      status: 'Accepted'
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true
          });
          this.accounts(this.state.activePageNo);

        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  };

  _onClickNotReady = (e,item) => {
    this.setState({
      isLoaded: false
    });
    const value = e.target ? e.target.value : e;
    let headerdata = "";

    const data = {
      id: item.id,
      status: 'Accepted'
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true
          });
          this.accounts(this.state.activePageNo);

        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  };

  _onClickReject  = (e,item) => {
    this.setState({
      isLoaded: false
    });
    const value = e.target ? e.target.value : e;
    let headerdata = "";

    const data = {
      id: item.id,
      assigned_to: 1,
      status: 'Pending'
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true
          });
          this.accounts(this.state.activePageNo);

        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  };

  _onClickReady = (e,item) => {
    this.setState({
      isLoaded: false
    });
    const value = e.target ? e.target.value : e;
    let headerdata = "";

    const data = {
      id: item.id,
      status: 'Ready'
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true
          });
          this.accounts(this.state.activePageNo);

        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  };

  

  _onInputChangeEnd = (e) => {
    const value = e.target ? e.target.value : e;
    if (value < this.state.end_date) {
      this.setState({ message: "Start date is always less than end date" });
    } else {
      this.setState({ end_date: value });
      this.setState({ message: "" });
      this.setState({ activePageNo: 1 });
      this.accounts(this.state.activePageNo);
    }
  };
  handlePageChange(pageNumber) {
    this.accounts(pageNumber);
  }
  accounts(pageNumber) {
  
    this.setState({
      isLoaded: false
    });
    var headerdata = "";
    const startdate = moment(this.state.start_date).format("YYYY-MM-DD");
    const enddate = moment(this.state.end_date).format("YYYY-MM-DD");

    const data = {
      start_date: new Date(startdate + " 00:00:00").toJSON(),
      end_date: new Date(enddate + " 23:59:59").toJSON(),
      page: "" + (pageNumber ? parseInt(pageNumber) : parseInt()),
    };
    this.setState({
      activePageNo: pageNumber ? pageNumber : this.state.activePageNo,
    });
    _callApi(data, "/booking/", headerdata).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true,
            totalCount: response.data.data.count,
            pageRange: Math.ceil(response.data.data.count / 10),
            items: response.data.data.booking,
            users: response.data.data.users,
          });

          console.log(this.state.count);
        } else {
          this.setState({ message: response.msg });
          this.setState({
            isLoaded: true,
            totalCount: 0,
            items: [],
            pageRange: Math.ceil(0 / 10),
          });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  showDataToUserOrNot(item){
 
    if(this.state.is_admin === 'true'){
        return true;
    }

    if(parseInt(item.assigned_to) === parseInt(this.state.user_id)){
         return true;
    }

    if(item.status === 'Pending'){
      return true;
    }


    return false;

  }

  render() {
    var { isLoaded, items, users } = this.state;
    return (
      <div class="dc-wrap dashboard-car-status">
        <div class="dc-header">
          <div class="dch-left">
            <h3 class="dc-head">Car Status</h3>
          </div>
          <div class="dch-right">
            <div className="dch-date-fields">
              <div className="dch-d-from-to">
                <p className="dch-d-head">From</p>

                <Datetime
                  dateFormat={true}
                  input={true}
                  value={this.state.start_date}
                  onChange={this._onInputChange}
                  timeFormat={false}
                />
              </div>
              <div className="dch-d-from-to">
                <p className="dch-d-head">To</p>

                <Datetime
                  dateFormat={true}
                  input={true}
                  value={this.state.end_date}
                  onChange={this._onInputChangeEnd}
                  timeFormat={false}
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.message.length > 0 ? (
          <span class="error" style={{ float: "right" }}>
            {this.state.message}
          </span>
        ) : (
          ""
        )}
        <br />
        <div class="dc-body">
          <div class="dcb-table-responsive">
            <table class="custom-table car-type-tbl last-center-tbl">
              <thead>
                <tr>
                  <th>
                    <div class="ct-head">
                      <p>Customer's name</p>
                    </div>
                  </th>
                  <th>
                    <div class="ct-head">
                      <p>Reservation ID</p>
                    </div>
                  </th>
                  <th>
                    <div class="ct-head">
                      <p>Pick Up Time</p>
                    </div>
                  </th>
                  <th>
                    <div class="ct-head">
                      <p>Assigned to</p>
                    </div>
                  </th>
                  <th>
                    <div class="ct-head">
                      <p>Status</p>
                    </div>
                  </th>
                  <th>
                    <div class="ct-head">
                      <p>Action</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0
                  ? items.map((item, i) => (
                      this.showDataToUserOrNot(item) === true ?
                      <>
                      <tr>
                        <td>
                          <p>{item.customer_name}</p>
                        </td>
                        <td>
                          <p>{item.reservation_id}</p>
                        </td>
                        <td>
                          <p>{moment(item.pick_up_time).format("HH:mm")}</p>
                        </td>
                        <td>
                          <div class="sc-input-wrap">
                            <div class="sc-input">
                              <div class="sc-select-wrap">
                                <select
                                  class="sc-custom-form"
                                  onChange={(e) => this._onSelectChange(e,item)}
                                  value={item.assigned_to}
                                >
                                  <option value="">Select</option>
                                  {users.length > 0
                                    ? users.map((user, i) => ( user.name !== ""? <>
                                        <option value={user.id}>
                                          {user.name}
                                        </option>
                                        </>
                                        :""
                                      ))
                                    : ""}
                                </select>
                                <span class="ion-ios-arrow-down select-drop-icon"></span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <p>
                            <span class={"car-status " + item.status}>
                              {item.status}
                            </span>
                          </p>
                        </td>
                        <td>
                          {item.status == "Pending" ? (
                            <div class="car-action-wrap">
                              <span onClick={(e)=>{this._onClickAccept(e,item)}} class="car-action accept">Accept</span>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.status == "Accepted" ? (
                            <div class="car-action-wrap">
                              <span onClick={(e)=>{this._onClickReady(e,item)}} class="car-action mark-ready">
                                Mark Ready
                              </span>
                              <span onClick={(e)=>{this._onClickReject(e,item)}} class="car-action reject">Reject</span>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.status == "Ready" ? (
                            <div class="car-action-wrap">
                              <span onClick={(e)=>{this._onClickNotReady(e,item)}} class="car-action mark-not-ready">
                                Mark Not Ready
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </td> 
                      </tr>
                      </>
                      :null 
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
          <div class="custom-pagination">
            <Pagination
              pages={this.state.pageRange}
              activePage={this.state.activePageNo}
              itemsCountPerPage={this.state.count}
              totalItemsCount={this.state.totalCount}
              pageRangeDisplayed={this.state.pageRange}
              onChange={this.handlePageChange.bind(this)}
              align="center"
            />
          </div>
        </div>
        { this.state.isLoaded === false?
        <div
          style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-between",
              position: "absolute", /*position: fixed;*/
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              }}>
          <Spinner name="double-bounce" color="steelblue" style={{ width: 100, height: 100, textAlign: "center", margin: "auto" }} />
         
        </div>
        :null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(CarStatus);
