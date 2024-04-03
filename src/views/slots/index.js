import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';



class Slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
<>
        <div class="dc-header">
        <div class="dch-left">
            <h3 class="dc-head">Parking Slots</h3>
            </div> 
        </div>
                 <div class="dcb-table-responsive">
               <table class="custom-table parking-slot last-center-tbl">
                 <thead>
                   <tr>
                     <th><div class="ct-head">
                         <p>Vehicles</p>
                         </div></th>
                         <th><div class="ct-head">
                         <p>Capacity</p>
                         </div></th>
                     <th><div class="ct-head">
                         <p>Occupied</p>
                         </div></th>
                         <th><div class="ct-head">
                         <p>Available</p>
                         </div></th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td><p>SUV</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                     <tr>
                     <td><p>Trucks</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                     <tr>
                     <td><p>Sedan</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                     <tr>
                     <td><p>Small Car</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                     <tr>
                     <td><p>SUV Trucks</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                     <tr>
                     <td><p>All</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     <td><p>100</p></td>
                     </tr>
                 </tbody>
               </table>
                 </div>
                 </>

    )
  }
}


function mapStateToProps(state) {
  console.log(state.loginDetails);
  return state;
}


export default connect(mapStateToProps)(Slots);


