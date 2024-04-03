import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import editImage from '../../img/icons/edit.png';
import { _callApi } from '../../Services/baseService';
import { object } from 'prop-types';

class LotDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAccess: false,
      items:[],
      A:[],
      B:[],
      C:[],
      D:[],
      E:[],
      G:[],
      M:[],
      F1:[],
      F2:[],
      R:[],
      L:[],
      F3:[],
    }
  }
  onChangeOptionsPlus(value) {
    this.setState({ modalAccess: value })

  }
  componentDidMount() {
    this.accounts();
  }
  accounts() {
    this.setState({
      items: [],
    });
    var headerdata = "";
    const data = {        
    }
  
     _callApi(data, '/parking/parkingslots/', headerdata,2)
      .then((response) => {
        if(response.status === 200){
        if (response.data.status === 200) {
          console.log(response.data.parking)
         this.setState({
              isLoaded: true,
              A: response.data.parking.A[1],
              Arowcount:Object.keys(response.data.parking.A[1]).length,
              Acolcount:response.data.parking.A[1][1].length,
              Acolcounttotal:(response.data.parking.A[1][1].length*Object.keys(response.data.parking.A[1]).length),

              B: response.data.parking.B[1],
              Browcount:Object.keys(response.data.parking.B[1]).length,
              Bcolcount:response.data.parking.B[1][29].length,
              Bcolcounttotal:(response.data.parking.B[1][29].length*Object.keys(response.data.parking.B[1]).length),       
              
              //C: response.data.parking.C[1],
              //Crowcount:Object.keys(response.data.parking.C[1]).length,
              ///Ccolcount:response.data.parking.C[1][38].length,
              //Ccolcounttotal:(response.data.parking.C[1][38].length*Object.keys(response.data.parking.C[1]).length),       
              D: response.data.parking.D[1],
              Drowcount:Object.keys(response.data.parking.D[1]).length,
              Dcolcount:response.data.parking.D[1][39].length,
              Dcolcounttotal:(response.data.parking.D[1][39].length*Object.keys(response.data.parking.D[1]).length),       
            
              E: response.data.parking.E[1],
              Erowcount:Object.keys(response.data.parking.E[1]).length,
              Ecolcount:response.data.parking.E[1][63].length,
              Ecolcounttotal:(response.data.parking.E[1][63].length*Object.keys(response.data.parking.E[1]).length),       
            
              G: response.data.parking.G[1],
              Growcount:Object.keys(response.data.parking.G[1]).length,
              Gcolcount:response.data.parking.G[1][87].length,
              Gcolcounttotal:(response.data.parking.G[1][87].length*Object.keys(response.data.parking.G[1]).length),       
            
              M: response.data.parking.M[1],
              Mrowcount:Object.keys(response.data.parking.M[1]).length,
              Mcolcount:response.data.parking.M[1][5].length,
              Mcolcounttotal:(response.data.parking.M[1][5].length*Object.keys(response.data.parking.M[1]).length),       
            
              F1: response.data.parking.F[1],
              F1rowcount:Object.keys(response.data.parking.F[1]).length,
              F1colcount:response.data.parking.F[1][72].length,
              F1colcounttotal:(response.data.parking.F[1][72].length*Object.keys(response.data.parking.F[1]).length),       
            
              F2: response.data.parking.F[2],
              F2rowcount:Object.keys(response.data.parking.F[2]).length,
              F2colcount:response.data.parking.F[2][79].length,
              F2colcounttotal:(response.data.parking.F[2][79].length*Object.keys(response.data.parking.F[2]).length),

              F3: response.data.parking.F3[2],
              F3rowcount:Object.keys(response.data.parking.F3[2]).length,
              F3colcount:response.data.parking.F3[2][11].length,
              F3colcounttotal:(response.data.parking.F3[2][11].length*Object.keys(response.data.parking.F3[2]).length),
              
              R: response.data.parking.R[1],
              Rrowcount:Object.keys(response.data.parking.R[1]).length,
              Rcolcount:response.data.parking.R[1][11].length,
              Rcolcounttotal:(response.data.parking.R[1][11].length*Object.keys(response.data.parking.R[1]).length), 

              L: response.data.parking.L[1],
              Lrowcount:Object.keys(response.data.parking.L[1]).length,
              Lcolcount:response.data.parking.L[1][11].length,
              Lcolcounttotal:(response.data.parking.L[1][11].length*Object.keys(response.data.parking.L[1]).length),       
              
            
            });
           
        } else {
          this.setState({ message: response.msg });
          setTimeout(
            () => this.setState({ message: '' }),
            2000
          );
          
        }
        }
      
      });


  }
 

  render() {

    return (
        <div className="dc-wrap dashboard-car-status">
        <div className="dc-header">
        <div className="dch-left">
            <h3 className="dc-head">Parking Lot Diagram</h3>
            </div>
            <div className="dch-right">
           <div className="parking-indicator">
             <div className="ind-box"><span className="ind-color overstay"></span><span className="ind-name">Overstay Car</span></div>
             <div className="ind-box"><span className="ind-color leaving"></span><span className="ind-name">Leaving Today</span></div>
             <div className="ind-box"><span className="ind-color parked"></span><span className="ind-name">Parked Car</span></div>
             <div className="ind-box"><span className="ind-color vacant"></span><span className="ind-name">Vacant Slots</span></div>
           </div>	
        </div>
        </div>
        <div className="dc-body">
        <div className="lot-diagram-wrap">
        <div className="ld-col col-5">
        <div className="ld-col-content lot-a">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Arowcount}*{this.state.Acolcount}<small>(All Cars)</small>{this.state.Acolcounttotal}</h4>
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">A</div>
        </div>
        
       { Object.keys(this.state.A).map((key, items) => (
           <div className="ldc-body">
        { this.state.A[items] && this.state.A[items].map((item, i) => (
        
        <div className={"lot-box "+item.status}>{item.display_slot}</div>
        ))}
         </div>
       ))}
        
        
        </div>

        <div className="ld-col-content lot-b">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Browcount}*{this.state.Bcolcount}<small>(All Cars)</small>{this.state.Bcolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">B</div>
        </div>
        { Object.keys(this.state.B).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.B[key] && this.state.B[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{bitem.display_slot}</div>
        ))}
         </div>
       ))}

        </div>

        {/* L block start  */}
        <div className="ld-col-content lot-b">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Lrowcount}*{this.state.Lcolcount}<small>(All Cars)</small>{this.state.Lcolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">L</div>
        </div>
        { Object.keys(this.state.L).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.L[key] && this.state.L[key].map((bitem, i) => (
        bitem?.status?  
          <>
            <div className={"lot-box  lot-box-6 "+bitem?.status}>{bitem?.display_slot}</div>
          </>
        :null
        ))}
         </div>
       ))}

        </div>
        {/* L block ends  */}


        <div className="ld-col-content lot-c margintop710px">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Crowcount}*{this.state.Ccolcount}<small>(All Cars)</small>{this.state.Ccolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">C</div>
        </div>
        { Object.keys(this.state.C).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.C[key] && this.state.C[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{bitem.display_slot}</div>
        ))}
         </div>
       ))}
        </div>
        <div className="ld-col-content lot-office">
        <div className="office-lot">Office</div>
        </div>
        <div className="ld-col-content lot-f">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.F1rowcount}*{this.state.F1colcount}<small>(All Cars)</small>{this.state.F1colcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">F</div>
        </div>
        { Object.keys(this.state.F1).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.F1[key] && this.state.F1[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{bitem.display_slot}</div>
        ))}
        </div>
        ))}
        </div>
       
        </div>
        <div className="ld-col col-2">
        <div className="ld-col-content lot-30car">
        <div className="ldc-header">
        <div className="lot-detail">
        
        <h4>{this.state.Mcolcounttotal} cars</h4>
       
        </div>
        </div>
        <div className="ldc-body">
        { Object.keys(this.state.M).map((key, bitems) => (
          
         this.state.M[key] && this.state.M[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{bitem.display_slot}</div>
        ))
      
        ))}
        </div>
        </div>
        </div>
        <div className="ld-col col-5">
        <div className="ld-col-content lot-d">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Drowcount}*{this.state.Dcolcount}<small>(All Cars)</small>{this.state.Dcolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">D</div>
        </div>
      
        { Object.keys(this.state.D).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.D[key] && this.state.D[key].map((bitem, i) => (
          
          bitem?.status?  
          <>
            <div className={"lot-box "+bitem?.status}>{bitem?.display_slot}</div>
          </>
        :null
        ))}
        </div>
        ))}
      
        </div>

        <div className="ld-col-content lot-e">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Erowcount}*{this.state.Ecolcount}<small>(All Cars)</small>{this.state.Ecolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">E</div>
        </div>
        { Object.keys(this.state.E).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.E[key] && this.state.E[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{bitem.display_slot}</div>
        ))}
        </div>
        ))}
      
        </div>


       

        {/* R block start  */}
  
        <div className="ld-col-content lot-r">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Rrowcount}*{this.state.Rcolcount}<small>(All Cars)</small>{this.state.Rcolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">R</div>
        </div>
        { Object.keys(this.state.R).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.R[key] && this.state.R[key].map((bitem, i) => (
        
        bitem?.status?  
          <>
            <div className={"lot-box "+bitem?.status}>{bitem?.display_slot}</div>
          </>
        :null
        ))}
        </div>
        ))}
      
        </div>

        {/* R block ends  */}

       
       
        <div className="ld-col-content lot-e-5">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.F2rowcount}*{this.state.F2colcount}<small>(All Cars)</small>{this.state.F2colcounttotal}</h4>
       
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">G</div>
        </div>
        { Object.keys(this.state.F2).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.F2[key] && this.state.F2[key].map((bitem, i) => (
        
        <div className={"lot-box "+bitem.status}>{ bitem.display_slot}</div>
        ))}
        </div>
        ))}
        </div>


        <div className="ld-col-content lot-e-5 marginrTop300px">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.F2rowcount}*{this.state.F2colcount}<small>(All Cars)</small>{this.state.F2colcounttotal}</h4>
       
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">F</div>
        </div>
        { Object.keys(this.state.F3).map((key, bitems) => (
           <div className="ldc-body">
        { this.state.F3[key] && this.state.F3[key].map((bitem, i) => (
          bitem?.status?  
            <>
              <div className={"lot-box "+bitem?.status}>{bitem?.display_slot}</div>
            </>
          :null
        ))}
        </div>
        ))}
        </div>




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


export default connect(mapStateToProps)(LotDiagram);


