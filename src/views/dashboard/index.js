import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect, useStore } from "react-redux";
import editImage from "../../img/icons/edit.png";
import { _callApi } from "../../Services/baseService";
import moment from "moment";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "src/scss/modal.css";
import { setInterval } from "core-js";
import $ from 'jquery'; 
import Spinner from "react-spinkit";


var modalMsg = '';
const Modal = ({ handleClose, show, me }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} style={{textAlign: "center"}}>
      <section className="modal-main">
        <p className="modal-header">Reservation ID: {modalMsg} time approaching!!</p>
       
        <span
          onClick={me.snoozeNotification}
          class="car-action mark-ready mbtn"
        >
          Snooze for 2 min
        </span>
        <span
          onClick={handleClose}
          class="car-action mark-ready mbtn"
        >
          See Notification
        </span>
      </section>
    </div>
  );
};

const tryFunc = () => {
  $(".btnsm").click();
}

const tryFuncClose = () => {
  $(".btnsmcls").click();
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAccess: false,
      items: [],
      users: [],
      activePageNo: 0,
      adminUser: 0,
      modalShow: false,
    };

    this.showNotification = this.showNotification.bind(this);
  }

  onChangeOptionsPlus(value) {
    this.setState({ modalAccess: value, modalAccessStatus: false });
  }

  componentDidMount() {
    let me = this;
    me.accounts(me.state.activePageNo);
    setTimeout(() => {
      me.accounts(me.state.activePageNo);
    }, 60000);
    
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }

    // setInterval(() => {
    //   this.showModalForRecentTime()
    // }, 1000);

  
  }

  showNotification() {
    new Notification("Your  car is due id 198 !");
  }
  //06 Mar 2017 21:22:23
  accounts(pageNumber) {

    this.setState({
      isLoaded: false
    });
    var headerdata = "";
    const data = {
      page: "" + (pageNumber ? parseInt(pageNumber) : 0),
    };
    this.setState({
      activePageNo: pageNumber ? pageNumber : this.state.activePageNo,
    });
    _callApi(data, "/booking/" + data.page, headerdata, 2).then((response) => {
      if (response.status === 200) {
            setTimeout(() => {
              console.log(response);
            }, 1000);
        if (response.data.status === 200) {
          console.log(response.data.data);
          let is_admin = localStorage.getItem("is_admin");
          this.setState({
            isLoaded: true,
            items: response.data.data.booking,
            users: response.data.data.users,
            is_admin: is_admin,
          });
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  assigUser(user, id) {
    var headerdata = "";
    const data = {
      id: id,
      assigned_to: user,
      status: "Accepted",
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true,
          });
          this.accounts(this.state.activePageNo);
          //  console.log(this.state.items)
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  markCarReady(id) {
    var headerdata = "";
    const data = {
      id: id,
      status: "Ready",
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true,
          });
          this.accounts(this.state.activePageNo);
          //  console.log(this.state.items)
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  markCarNotReady(id) {
    var headerdata = "";
    const data = {
      id: id,
      status: "Accepted",
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true,
          });
          this.accounts(this.state.activePageNo);
          //  console.log(this.state.items)
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  markCarReject(id) {
    var headerdata = "";
    const data = {
      id: id,
      status: "Pending",
      assigned_to: 1,
    };

    _callApi(data, "/booking/assignuser", headerdata, 1).then((response) => {
      if (response.status === 200) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          this.setState({
            isLoaded: true,
          });
          this.accounts(this.state.activePageNo);
          //  console.log(this.state.items)
        } else {
          this.setState({ message: response.msg });
          setTimeout(() => this.setState({ message: "" }), 2000);
        }
      }
    });
  }

  viewMoreFunc = () => {
    this.setState({ activePageNo: this.state.activePageNo + 1 }, () => {
      this.accounts(this.state.activePageNo);
    });
  };

  handleChange = (value, id) => {
    this.assigUser(value, id);
  };

  handleChangeMarkReady = (value, id) => {
    this.markCarReady(id);
  };

  handleChangeMarkNotReady = (value, id) => {
    this.markCarNotReady(id);
  };

  handleChangeMarkRject = (value, id) => {
    this.markCarReject(id);
  };

  showModal = () => {
    //this.setState({ modalShow: true });
    tryFunc()
  };

  hideModal = () => {
    //this.setState({ modalShow: false });
    tryFunc()
  };

  showModalForRecentTime = () => {
    //moment().diff(Moment|String|Number|Date|Array);
    console.log('showModalForRecentTime')
    var { items } = this.state;
    let diffTime = 0;
    let absTime = 0;
    let calculatedTime = 0;
    //if (items.length > 0) {
      items.map((item, i) => {
        diffTime = moment().diff(moment(item.pick_up_time));
        console.log(moment().diff(moment(item.pick_up_time)))
        //if (diffTime < 0) {
          absTime = Math.abs(diffTime);
          calculatedTime = absTime / 1000;
          calculatedTime = calculatedTime / 60;
          calculatedTime = parseInt(calculatedTime);
          console.log(calculatedTime);
          //if (calculatedTime < 61 ) {
            modalMsg = item.reservation_id;
            this.showModal();
            return false;
          //}
        //}
      });
    //}
  };

  snoozeNotification = () => {
    alert('snoozeNotification')
  }

  seeNotification = () => {
    alert('snoozeNotification')
  }

  _onClickAccept = (e,item) => {
    this.setState({
      isLoaded: false
    });
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

  

  render() {
    var { isLoaded, items, users } = this.state;
    return (
      <>
        <div className="dashboard-wrapper">
          <div
            className={
              this.state.modalAccess
                ? "dashboard-center-popup active"
                : "dashboard-center-popup"
            }
          >
            <div className="dp-backdrop"></div>
            <div className="dp-content">
              <div className="dp-body">
                <div className="dp-popup cus-have-res">
                  <div className="popup-close">
                    <span
                      className="ion-close-round"
                      onClick={() => this.onChangeOptionsPlus(false)}
                    ></span>
                  </div>
                  <h4 className="popup-title">
                    Does the Customer have a reservation?
                  </h4>
                  <div className="popup-action">
                    <NavLink to="/checkout/vendors">
                      {" "}
                      <button type="button" className="pp-custom-btn">
                        Yes
                      </button>
                    </NavLink>
                    <NavLink to="/checkout/plate_name/0">
                      {" "}
                      <button
                        type="button"
                        className="pp-custom-btn pp-btn-outline"
                      >
                        No
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              this.state.modalAccessStatus
                ? "dashboard-center-popup active"
                : "dashboard-center-popup"
            }
          >
            <div className="dp-backdrop"></div>
            <div className="dp-content">
              <div className="dp-body">
                <div class="dp-popup del-ven-name">
                  <div class="popup-close">
                    <span
                      class="ion-close-round"
                      onClick={() => this.onChangeOptionsPlus(false)}
                    ></span>
                  </div>
                  <h4 class="popup-title">
                    Do you want to delete? <span>User Name</span>
                  </h4>
                  <div class="popup-action">
                    <button
                      type="button"
                      onClick={() => this.deleteSubadmin()}
                      class="pp-custom-btn"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => this.onChangeOptionsPlus(false)}
                      class="pp-custom-btn pp-btn-outline"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dc-wrap main-dashboard dashboard-car-status">
          <div class="dc-header">
            <div class="dch-left">
              <h3 class="dc-head">Car Status</h3>
            </div>
            <div class="dch-right">
              <button
                type="button"
                className="pp-custom-btn"
                onClick={() => this.onChangeOptionsPlus(true)}
              >
                Check In
              </button>
              <NavLink to="/checkout/search">
                {" "}
                <button type="button" className="pp-custom-btn">
                  Check-Out
                </button>
              </NavLink>
              <NavLink to="/checkout/modify">
                <button type="button" className="pp-custom-btn ">
                  Modify and search
                </button>
              </NavLink>
              <NavLink to="/car_status/list">
                <button type="button" class="pp-custom-btn">
                  Car Status
                </button>
              </NavLink>
            </div>
          </div>
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
                        <p>Phone Number</p>
                      </div>
                    </th>
                    <th>
                      <div class="ct-head">
                        <p>Ticket Id</p>
                      </div>
                    </th>

                    <th>
                      <div class="ct-head">
                        <p>Slot</p>
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
                    {this.state.is_admin === "true" ? (
                      <th>
                        <div class="ct-head">
                          <p>Assigned to</p>
                        </div>
                      </th>
                    ) : (
                      ""
                    )}
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
                        <tr>
                          <td>
                            <p>{item.customer_name}</p>
                          </td>
                          <td>
                            <p>{item.mobile_number}</p>
                          </td>
                          <td>
                            <p>{item.id}</p>
                          </td>
                          <td className="no-line-break">
                          {item?.parking?.slot || "-"}
                          </td>
                          <td>
                            <p>{item.reservation_id}</p>
                          </td>
                          <td>
                            <p>
                              {moment(item.pick_up_time).format("MMM D HH:mm")}
                            </p>
                          </td>
                          {this.state.is_admin === "true" ? (
                            <td>
                              <div class="sc-input-wrap">
                                <div class="sc-input">
                                  <div class="sc-select-wrap" key={1235}>
                                    <select
                                      class="sc-custom-form"
                                      value={item.assigned_to}
                                    
                                      onChange={(e) =>
                                        this.handleChange(
                                          e.target.value,
                                          item.id
                                        )
                                      }
                                    >
                                      <option value="">Select</option>
                                      {users.length > 0
                                        ? users.map((user, i) => ( user.name !== ""?
                                            <option value={user.id}>
                                              {user.name}
                                            </option>
                                            :null
                                          ))
                                        : ""}
                                    </select>

                                    <span class="ion-ios-arrow-down select-drop-icon"></span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          ) : (
                            ""
                          )}
                          <td>
                            <p>
                              <span class={"car-status " + item.status}>
                                {item.status}
                              </span>
                            </p>
                          </td>
                          <td>
                            {item.status === "Pending"
                              ? <div class="car-action-wrap">
                                   <span onClick={(e) =>
                                    this._onClickAccept(
                                      e.target,
                                      item
                                    )
                                  } 
                                  class="car-action accept"
                                  >
                                    Accept
                                  </span>
                                 </div>
                                :""}
                            {item.status === "Accepted" ? (
                              <div class="car-action-wrap">
                                <span
                                  onClick={(e) =>
                                    this.handleChangeMarkReady(
                                      e.target,
                                      item.id
                                    )
                                  }
                                  class="car-action mark-ready"
                                >
                                  Mark Ready
                                </span>
                                <span
                                  onClick={(e) =>
                                    this.handleChangeMarkRject(
                                      e.target,
                                      item.id
                                    )
                                  }
                                  class="car-action reject"
                                >
                                  Reject
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                            {item.status === "Ready" ? (
                              <div class="car-action-wrap">
                                <span
                                  onClick={(e) =>
                                    this.handleChangeMarkNotReady(
                                      e.target,
                                      item.id
                                    )
                                  }
                                  class="car-action mark-not-ready"
                                >
                                  Mark Not Ready
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
            <NavLink to="/dashboard" onClick={this.viewMoreFunc}>
              <div class="view-more-data">View More</div>
            </NavLink>
       
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
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}

export default connect(mapStateToProps)(Dashboard);
