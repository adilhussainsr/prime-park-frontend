import React, { Component } from 'react'
import { connect } from 'react-redux';
import { _callApi } from '../Services/baseService';
import settings from '../img/icons/setting.svg';
import box from '../img/icons/box.svg';
import user from '../img/icons/user.svg';
import file from '../img/icons/file.svg';
import dashboard from '../img/icons/dashboard.svg';
import { NavLink } from 'react-router-dom';

class TheSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = "/#/login";
  }
  componentDidMount() {
  }

  render() {

    return (
      <div className="dashboard-sidebar">
        <ul className="ds-list">
          <li><NavLink activeClassName={"active"} to="/dashboard"><img src={dashboard} /></NavLink></li>
          <li><NavLink activeClassName={"active"} to="/reports/list"><img src={file}/></NavLink></li>
          <li><NavLink activeClassName={"active"} to="/users/list"><img src={user} /></NavLink></li>
          {/* <li><NavLink to="/"><img src={box} /></NavLink></li> */}
          <li><NavLink to="/settings"><img src={settings} /></NavLink></li>
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(TheSidebar);










