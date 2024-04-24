import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import editImage from '../../img/icons/edit.png';
import { _callApi } from '../../Services/baseService';
import { object } from 'prop-types';

const transformDataForH = (obj) => {
    let transposedObj = {};

    // Loop through each key in the input object
    for (let outerKey in obj) {
        let innerObj = obj[outerKey];
        
        // Loop through each key in the inner object
        for (let innerKey in innerObj) {
            // If the transposed object doesn't have a key yet, create it
            if (!transposedObj[innerKey]) {
                transposedObj[innerKey] = {};
            }
            
            // Assign the value of the current inner object to the corresponding key in the transposed object
            transposedObj[innerKey][outerKey] = innerObj[innerKey];
        }
    }

    return transposedObj;

}
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
      H:[],
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
          console.log('D lenght->', response.data.parking.D[1]);
          const HData = transformDataForH( response.data.parking.H[0]);
         this.setState({
              isLoaded: true,
              A: response.data.parking.A[1],
              Arowcount:Object.keys(response.data.parking.A[1]).length,
              Acolcount:Object.keys(response.data.parking.A[1][Object.keys(response.data.parking.A[1])[0]]).length,
              Acolcounttotal:(Object.keys(response.data.parking.A[1][Object.keys(response.data.parking.A[1])[0]]).length*Object.keys(response.data.parking.A[1]).length),

              B: response.data.parking.B[1],
              Browcount:Object.keys(response.data.parking.B[1]).length,
              Bcolcount:Object.keys(response.data.parking.B[1][Object.keys(response.data.parking.B[1])[0]]).length,
              Bcolcounttotal:(Object.keys(response.data.parking.B[1][Object.keys(response.data.parking.B[1])[0]]).length*Object.keys(response.data.parking.B[1]).length),       
              
              C: response.data.parking.C[1],
              Crowcount:Object.keys(response.data.parking.C[1][Object.keys(response.data.parking.C[1])[0]]).length,
              Ccolcount: Object.keys(response.data.parking.C[1]).length,
              Ccolcounttotal:(Object.keys(response.data.parking.C[1][Object.keys(response.data.parking.C[1])[0]]).length*Object.keys(response.data.parking.C[1]).length),       
            
              D: response.data.parking.D[1],
              Drowcount:Object.keys(response.data.parking.D[1]).length,
              Dcolcount: Object.keys(response.data.parking.D[1][Object.keys(response.data.parking.D[1])[0]]).length,
              Dcolcounttotal:(Object.keys(response.data.parking.D[1][Object.keys(response.data.parking.D[1])[0]]).length*Object.keys(response.data.parking.D[1]).length),       
            
              E: response.data.parking.E[27],
              Erowcount:Object.keys(response.data.parking.E[27]).length,
              Ecolcount: Object.keys(response.data.parking.E[27][Object.keys(response.data.parking.E[27])[0]]).length,
              Ecolcounttotal:(Object.keys(response.data.parking.E[27][Object.keys(response.data.parking.E[27])[0]]).length*Object.keys(response.data.parking.E[27]).length),       
            
              G: response.data.parking.G[4],
              Growcount:Object.keys(response.data.parking.G[4]).length,
              Gcolcount:Object.keys(response.data.parking.G[4][Object.keys(response.data.parking.G[4])[0]]).length,
              Gcolcounttotal:(Object.keys(response.data.parking.G[4][Object.keys(response.data.parking.G[4])[0]]).length*Object.keys(response.data.parking.G[4]).length),       
            
              M: response.data.parking.M[0],
              Mrowcount:Object.keys(response.data.parking.M[0]).length,
              Mcolcount:Object.keys(response.data.parking.M[0][Object.keys(response.data.parking.M[0])[0]]).length,
              Mcolcounttotal:(Object.keys(response.data.parking.M[0][Object.keys(response.data.parking.M[0])[0]]).length*Object.keys(response.data.parking.M[0]).length),        
            
              H: HData,
              Hrowcount:Object.keys(HData).length,
              Hcolcount:Object.keys(HData[Object.keys(HData)[0]]).length,
              Hcolcounttotal:(Object.keys(HData[Object.keys(HData)[0]]).length*Object.keys(HData).length),        
            


              F1: response.data.parking.F[21],
              F1rowcount:Object.keys(response.data.parking.F[21]).length,
              F1colcount: Object.keys(response.data.parking.F[21][Object.keys(response.data.parking.F[21])[0]]).length,
              F1colcounttotal:( Object.keys(response.data.parking.F[21][Object.keys(response.data.parking.F[21])[0]]).length*Object.keys(response.data.parking.F[8]).length),     
            

              F2: response.data.parking.F[8],
              F2rowcount:Object.keys(response.data.parking.F[8]).length,
              F2colcount: Object.keys(response.data.parking.F[8][Object.keys(response.data.parking.F[8])[0]]).length,
              F2colcounttotal: ( Object.keys(response.data.parking.F[8][Object.keys(response.data.parking.F[8])[0]]).length*Object.keys(response.data.parking.F[8]).length),
              
              // F2: response.data.parking.F[2],
              // F2rowcount:Object.keys(response.data.parking.F[2]).length,
              // F2colcount:response.data.parking.F[2][79].length,
              // F2colcounttotal:(response.data.parking.F[2][79].length*Object.keys(response.data.parking.F[2]).length),

              // F3: response.data.parking.F3[2],
              // F3rowcount:Object.keys(response.data.parking.F3[2]).length,
              // F3colcount:response.data.parking.F3[2][11].length,
              // F3colcounttotal:(response.data.parking.F3[2][11].length*Object.keys(response.data.parking.F3[2]).length),
              
              // R: response.data.parking.R[0],
              // Rrowcount:Object.keys(response.data.parking.R[0]).length,
              // Rcolcount:Object.keys(response.data.parking.R[0]['16R']).length,
              // Rcolcounttotal:(Object.keys(response.data.parking.R[0]['16R']).length*Object.keys(response.data.parking.R[0]).length), 

              L: response.data.parking.L[0],
              Lrowcount:Object.keys(response.data.parking.L[0]).length,
              Lcolcount: Object.keys(response.data.parking.L[0][Object.keys(response.data.parking.L[0])[0]]).length,
              Lcolcounttotal:(Object.keys(response.data.parking.L[0][Object.keys(response.data.parking.L[0])[0]]).length * Object.keys(response.data.parking.L[0]).length),       
              
            
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
        
        {/* {Object.keys(this.state.A).map((key, items) => (
  <div key={key} className="ldc-body">
    {this.state.A[items] && (
      Array.isArray(this.state.A[items]) ? (
        this.state.A[items].map((item, i) => (
          <div key={i} className={"lot-box " + item.status}>
            {item.display_slot}
          </div>
        ))
      ) : (
        Object.keys(this.state.A[items]).map((innerKey, j) => (
          <div key={j} className={"lot-box " + this.state.A[items][innerKey].status}>
            {this.state.A[items][innerKey].display_slot}
          </div>
        ))
      )
    )}
  </div>
))} */}

{Object.keys(this.state.A).map((key, index) => (
  <div key={index} className="ldc-body">
    {
        Object.keys(this.state.A[key]).map((innerKey, j) => (
          <div key={j} className={"lot-box " + this.state.A[key][innerKey].status}>
            {this.state.A[key][innerKey].display_slot}
          </div>
        ))
      
    }
  </div>
))}

  
        
        </div>
        {/* <div className="ld-col col-5"></div> */}
        <div className="ld-col-content lot-b">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Browcount}*{this.state.Bcolcount}<small>(All Cars)</small>{this.state.Bcolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">B</div>
        </div>
        <div className="ldc-body">
        {Object.keys(this.state.B).map((key, index) => (
  <div key={"B-" +index} className="ldc-body">
    {
        Object.keys(this.state.B[key]).map((slotKey, j) => (
          <div key={j} className={"lot-box " + this.state.B[key][slotKey].status}>
            {this.state.B[key][slotKey].display_slot}
          </div>
        ))
      
    }
  </div>
))}

</div>


        </div>

        {/* L block start  */}
        {/* <div className="ld-col-content lot-b">
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

        </div> */}
        {/* L block ends  */}


        <div className="ld-col-content lot-d margintop710px">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Lrowcount}*{this.state.Lcolcount}<small>(All Cars)</small>{this.state.Lcolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">L</div>
        </div>
                  {Object.keys(this.state.L).map((key, bitems) => (
            <div className="ldc-body" key={key}> {/* Add a unique key */}
              {
                  Object.values(this.state.L[key]).map((bitem, i) => ( 
                    <div key={i} className={"lot-box " + bitem.status}>
                      {bitem.display_slot}
                    </div>
                  ))
                }
            </div>
        ))}

        </div>
        {/* M Block */}
        {/* M Block */}
        <div className="ld-col-content lot-e margintop710px">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Mrowcount}*{this.state.Mcolcount}<small>(All Cars)</small>{this.state.Mcolcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">M</div>
        </div>
                  {Object.keys(this.state.M).map((key, bitems) => (
            <div className="ldc-body" key={key}> {/* Add a unique key */}
              {
                  Object.values(this.state.M[key]).map((bitem, i) => ( 
                    <div key={i} className={"lot-box " + bitem.status}>
                      {bitem.display_slot}
                    </div>
                  ))
                }
            </div>
        ))}

        </div>
        
        {/* M Block End */}
        
        {/* M Block End */}
        <div className="ld-col-content lot-office">
        <div className="office-lot">Office</div>
        </div>
        <div className="ld-col-content lot-r">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.F1rowcount}*{this.state.F1colcount}<small>(All Cars)</small>{this.state.F1colcounttotal}</h4>
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">F</div>
        </div>
        {Object.keys(this.state.F1).map((key, bitems) => (
  <div className="ldc-body" key={key}>
    {this.state.F1[key] && (
      Object.values(this.state.F1[key]).map((bitem, i) => (
        <div key={i} className={"lot-box " + bitem.status}>
          {bitem.display_slot}
        </div>
      ))
    )}
  </div>
))}

        </div>
       
        </div>
        <div className="ld-col col-2">
        <div className="ld-col-content lot-30car">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Ccolcounttotal} cars</h4>
        </div>
        <div className="lot-name">C</div>
        </div>
        <div className="ldc-body">
        { Object.keys(this.state.C).map((key, bitems) => (
         Object.keys(this.state.C[key]).reverse().map((bitem, i) => (
        <div className={"lot-box "+this.state.C[key][bitem]?.status}> {this.state.C[key][bitem]?.display_slot}</div>
        ))
        ))}
        </div>
        </div>
        </div>
        <div className="ld-col col-4">
        <div className="ld-col-content lot-d">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Drowcount}*{this.state.Dcolcount}<small>(All Cars)</small>{this.state.Dcolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">D</div>
        </div>
      
        <div className="ldc-body">
        {Object.keys(this.state.D).map((key) => (Object.values(this.state.D[key]).map((bitem, i) => ( 
      <div key={i} className={"lot-box " + bitem.status}>
        {bitem.display_slot}
      </div>
    ))
))}


</div>

        </div>

        <div className="ld-col-content lot-e">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Erowcount}*{this.state.Ecolcount}<small>(All Cars)</small>{this.state.Ecolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">E</div>
        </div>
        {Object.keys(this.state.E).map((key) => (
  <div key={key} className="ldc-body">
    {
        Object.values(this.state.E[key]).map((bitem, i) => (
          <div key={i} className={"lot-box " + bitem.status}>
            {bitem.display_slot}
          </div>
        ))
      }
  </div>
))}

      
        </div>


       

        {/* R block start  */}
  
        {/* <div className="ld-col-content lot-r">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Rrowcount}*{this.state.Rcolcount}<small>(All Cars)</small>{this.state.Rcolcounttotal}</h4>
       
        <p>For cars parked  for 3 weeks or more </p>
        </div>
        <div className="lot-name">R</div>
        </div>
        {Object.keys(this.state.R).map((key) => (
  <div key={key} className="ldc-body">
    {this.state.R[key] ? (
      Object.keys(this.state.R[key]).map((innerKey, i) => (
        this.state.R[key][innerKey].status ? (
          <div key={i} className={"lot-box " + this.state.R[key][innerKey].status}>
            {this.state.R[key][innerKey].display_slot}
          </div>
        ) : null
      ))
    ) : null}
  </div>
))}

      
        </div> */}

        {/* R block ends  */}

       
       
        <div className="ld-col-content lot-r">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.Growcount}*{this.state.Gcolcount}<small>(All Cars)</small>{this.state.Gcolcounttotal}</h4>
       
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">G</div>
        </div>
        {Object.keys(this.state.G).map((key) => (
  <div key={key} className="ldc-body">
    {this.state.G[key] ? (
      Object.keys(this.state.G[key]).map((slotKey) => (
        <div key={slotKey} className={"lot-box " + this.state.G[key][slotKey].status}>
          {this.state.G[key][slotKey].display_slot}
        </div>
      ))
    ) : null}
  </div>
))}

        </div>



        {/* H block start  */}
  
        <div className="ld-col-content lot-r">
  <div className="ldc-header">
    <div className="lot-detail">
      <h4>{this.state.Hrowcount}*{this.state.Hcolcount}<small>(All Cars)</small>{this.state.Hcolcounttotal}</h4>
      <p>Fast Moving</p>
    </div>
    <div className="lot-name">H</div>
  </div>

  {Object.keys(this.state.H).reverse().map((key) => (
    <div key={key} className="ldc-body">
      {Object.values(this.state.H[key]).map((bitem, i) => (
        <div key={i} className={"lot-box " + bitem.status}>
          {bitem.display_slot}
        </div>
      ))}
    </div>
  ))}
</div>



        {/* H block ends  */}

        <div className="ld-col-content lot-e-5 marginrTop300px">
        <div className="ldc-header">
        <div className="lot-detail">
        <h4>{this.state.F2rowcount}*{this.state.F2colcount}<small>(All Cars)</small>{this.state.F2colcounttotal}</h4>
       
        <p>Fast Moving</p>
        </div>
        <div className="lot-name">F</div>
        </div>
        {Object.keys(this.state.F2).map((key) => (
  <div key={key} className="ldc-body">
    {this.state.F2[key] ? (
      Object.keys(this.state.F2[key]).reverse().map((slotKey) => (
        <div key={slotKey} className={"lot-box " + this.state.F2[key][slotKey].status}>
          {this.state.F2[key][slotKey].display_slot}
        </div>
      ))
    ) : null}
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


