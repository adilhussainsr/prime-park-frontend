(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1061:function(t,e,a){"use strict";a.r(e);var s=a(12),c=a(26),l=a(27),n=a(29),i=a(30),d=a(1),o=a(215),r=(a(740),a(736)),j=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).state={modalAccess:!1,items:[],A:[],B:[],C:[],D:[],E:[],G:[],M:[],F1:[],F2:[],R:[],L:[],F3:[]},s}return Object(l.a)(a,[{key:"onChangeOptionsPlus",value:function(t){this.setState({modalAccess:t})}},{key:"componentDidMount",value:function(){this.accounts()}},{key:"accounts",value:function(){var t=this;this.setState({items:[]});Object(r.a)({},"/parking/parkingslots/","",2).then((function(e){200===e.status&&(200===e.data.status?(console.log(e.data.parking),t.setState({isLoaded:!0,A:e.data.parking.A[1],Arowcount:Object.keys(e.data.parking.A[1]).length,Acolcount:e.data.parking.A[1][1].length,Acolcounttotal:e.data.parking.A[1][1].length*Object.keys(e.data.parking.A[1]).length,B:e.data.parking.B[1],Browcount:Object.keys(e.data.parking.B[1]).length,Bcolcount:e.data.parking.B[1][29].length,Bcolcounttotal:e.data.parking.B[1][29].length*Object.keys(e.data.parking.B[1]).length,D:e.data.parking.D[1],Drowcount:Object.keys(e.data.parking.D[1]).length,Dcolcount:e.data.parking.D[1][39].length,Dcolcounttotal:e.data.parking.D[1][39].length*Object.keys(e.data.parking.D[1]).length,E:e.data.parking.E[1],Erowcount:Object.keys(e.data.parking.E[1]).length,Ecolcount:e.data.parking.E[1][63].length,Ecolcounttotal:e.data.parking.E[1][63].length*Object.keys(e.data.parking.E[1]).length,G:e.data.parking.G[1],Growcount:Object.keys(e.data.parking.G[1]).length,Gcolcount:e.data.parking.G[1][87].length,Gcolcounttotal:e.data.parking.G[1][87].length*Object.keys(e.data.parking.G[1]).length,M:e.data.parking.M[1],Mrowcount:Object.keys(e.data.parking.M[1]).length,Mcolcount:e.data.parking.M[1][5].length,Mcolcounttotal:e.data.parking.M[1][5].length*Object.keys(e.data.parking.M[1]).length,F1:e.data.parking.F[1],F1rowcount:Object.keys(e.data.parking.F[1]).length,F1colcount:e.data.parking.F[1][72].length,F1colcounttotal:e.data.parking.F[1][72].length*Object.keys(e.data.parking.F[1]).length,F2:e.data.parking.F[2],F2rowcount:Object.keys(e.data.parking.F[2]).length,F2colcount:e.data.parking.F[2][79].length,F2colcounttotal:e.data.parking.F[2][79].length*Object.keys(e.data.parking.F[2]).length,F3:e.data.parking.F3[2],F3rowcount:Object.keys(e.data.parking.F3[2]).length,F3colcount:e.data.parking.F3[2][11].length,F3colcounttotal:e.data.parking.F3[2][11].length*Object.keys(e.data.parking.F3[2]).length,R:e.data.parking.R[1],Rrowcount:Object.keys(e.data.parking.R[1]).length,Rcolcount:e.data.parking.R[1][11].length,Rcolcounttotal:e.data.parking.R[1][11].length*Object.keys(e.data.parking.R[1]).length,L:e.data.parking.L[1],Lrowcount:Object.keys(e.data.parking.L[1]).length,Lcolcount:e.data.parking.L[1][11].length,Lcolcounttotal:e.data.parking.L[1][11].length*Object.keys(e.data.parking.L[1]).length})):(t.setState({message:e.msg}),setTimeout((function(){return t.setState({message:""})}),2e3)))}))}},{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"dc-wrap dashboard-car-status",children:[Object(s.jsxs)("div",{className:"dc-header",children:[Object(s.jsx)("div",{className:"dch-left",children:Object(s.jsx)("h3",{className:"dc-head",children:"Parking Lot Diagram"})}),Object(s.jsx)("div",{className:"dch-right",children:Object(s.jsxs)("div",{className:"parking-indicator",children:[Object(s.jsxs)("div",{className:"ind-box",children:[Object(s.jsx)("span",{className:"ind-color overstay"}),Object(s.jsx)("span",{className:"ind-name",children:"Overstay Car"})]}),Object(s.jsxs)("div",{className:"ind-box",children:[Object(s.jsx)("span",{className:"ind-color leaving"}),Object(s.jsx)("span",{className:"ind-name",children:"Leaving Today"})]}),Object(s.jsxs)("div",{className:"ind-box",children:[Object(s.jsx)("span",{className:"ind-color parked"}),Object(s.jsx)("span",{className:"ind-name",children:"Parked Car"})]}),Object(s.jsxs)("div",{className:"ind-box",children:[Object(s.jsx)("span",{className:"ind-color vacant"}),Object(s.jsx)("span",{className:"ind-name",children:"Vacant Slots"})]})]})})]}),Object(s.jsx)("div",{className:"dc-body",children:Object(s.jsxs)("div",{className:"lot-diagram-wrap",children:[Object(s.jsxs)("div",{className:"ld-col col-5",children:[Object(s.jsxs)("div",{className:"ld-col-content lot-a",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Arowcount,"*",this.state.Acolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Acolcounttotal]}),Object(s.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(s.jsx)("div",{className:"lot-name",children:"A"})]}),Object.keys(this.state.A).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.A[a]&&t.state.A[a].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-b",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Browcount,"*",this.state.Bcolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Bcolcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"B"})]}),Object.keys(this.state.B).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.B[e]&&t.state.B[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-b",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Lrowcount,"*",this.state.Lcolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Lcolcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"L"})]}),Object.keys(this.state.L).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.L[e]&&t.state.L[e].map((function(t,e){return(null===t||void 0===t?void 0:t.status)?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"lot-box  lot-box-6 "+(null===t||void 0===t?void 0:t.status),children:null===t||void 0===t?void 0:t.display_slot})}):null}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-c margintop710px",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Crowcount,"*",this.state.Ccolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Ccolcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"C"})]}),Object.keys(this.state.C).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.C[e]&&t.state.C[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]}),Object(s.jsx)("div",{className:"ld-col-content lot-office",children:Object(s.jsx)("div",{className:"office-lot",children:"Office"})}),Object(s.jsxs)("div",{className:"ld-col-content lot-f",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.F1rowcount,"*",this.state.F1colcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.F1colcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"F"})]}),Object.keys(this.state.F1).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.F1[e]&&t.state.F1[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]})]}),Object(s.jsx)("div",{className:"ld-col col-2",children:Object(s.jsxs)("div",{className:"ld-col-content lot-30car",children:[Object(s.jsx)("div",{className:"ldc-header",children:Object(s.jsx)("div",{className:"lot-detail",children:Object(s.jsxs)("h4",{children:[this.state.Mcolcounttotal," cars"]})})}),Object(s.jsx)("div",{className:"ldc-body",children:Object.keys(this.state.M).map((function(e,a){return t.state.M[e]&&t.state.M[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))}))})]})}),Object(s.jsxs)("div",{className:"ld-col col-5",children:[Object(s.jsxs)("div",{className:"ld-col-content lot-d",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Drowcount,"*",this.state.Dcolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Dcolcounttotal]}),Object(s.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(s.jsx)("div",{className:"lot-name",children:"D"})]}),Object.keys(this.state.D).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.D[e]&&t.state.D[e].map((function(t,e){return(null===t||void 0===t?void 0:t.status)?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"lot-box "+(null===t||void 0===t?void 0:t.status),children:null===t||void 0===t?void 0:t.display_slot})}):null}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-e",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Erowcount,"*",this.state.Ecolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Ecolcounttotal]}),Object(s.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(s.jsx)("div",{className:"lot-name",children:"E"})]}),Object.keys(this.state.E).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.E[e]&&t.state.E[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-r",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.Rrowcount,"*",this.state.Rcolcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.Rcolcounttotal]}),Object(s.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(s.jsx)("div",{className:"lot-name",children:"R"})]}),Object.keys(this.state.R).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.R[e]&&t.state.R[e].map((function(t,e){return(null===t||void 0===t?void 0:t.status)?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"lot-box "+(null===t||void 0===t?void 0:t.status),children:null===t||void 0===t?void 0:t.display_slot})}):null}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-e-5",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.F2rowcount,"*",this.state.F2colcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.F2colcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"G"})]}),Object.keys(this.state.F2).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.F2[e]&&t.state.F2[e].map((function(t,e){return Object(s.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot})}))})}))]}),Object(s.jsxs)("div",{className:"ld-col-content lot-e-5 marginrTop300px",children:[Object(s.jsxs)("div",{className:"ldc-header",children:[Object(s.jsxs)("div",{className:"lot-detail",children:[Object(s.jsxs)("h4",{children:[this.state.F2rowcount,"*",this.state.F2colcount,Object(s.jsx)("small",{children:"(All Cars)"}),this.state.F2colcounttotal]}),Object(s.jsx)("p",{children:"Fast Moving"})]}),Object(s.jsx)("div",{className:"lot-name",children:"F"})]}),Object.keys(this.state.F3).map((function(e,a){return Object(s.jsx)("div",{className:"ldc-body",children:t.state.F3[e]&&t.state.F3[e].map((function(t,e){return(null===t||void 0===t?void 0:t.status)?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"lot-box "+(null===t||void 0===t?void 0:t.status),children:null===t||void 0===t?void 0:t.display_slot})}):null}))})}))]})]})]})})]})}}]),a}(d.Component);e.default=Object(o.b)((function(t){return console.log(t.loginDetails),t}))(j)},740:function(t,e,a){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAABHNCSVQICAgIfAhkiAAAAgdJREFUSEu1lkFWGkEQhqsaFrrSG0Q2ibiRG2SYCxhP4CTgHk8AnkBdJ8TxBpwA+gYxG3hmIzlBZCW+B11Wt/bYM2FgBod5j/eY6er6+v+nuqYR3nEF995u6QlOUGEAiDWTiuiWBIXdfXmVTI3rsk7/eDWa4XUESSZi6AzpOKzKsR1aC6ZBaoYDRNxdulgN3KZ6WJEPOi43LDPobRXnP6r9Tm5YGoiAbuZb1NIJS1O8RMATy+Kxcbc6qOSCLQNxssAm10VTnop/rr2szDiYycasIAtojnxaC5YbNPRbLOHCgU1YmSmkpcrygr6N/EAAXLuq9Pu0NqfCigAxdDIDVbN7bSGsIBCQUMfdT7KXuqmLAimArz+r/dC1NKZsk6BYgWwaFMFM937E+2SvcyvJtWNR1enxRdb9Z2NjVA/dFqMDigZFypI7fhMgA2uOPA9ADKLGSfC3e9Dfc+Xr/+taF7ORVXX4QTuCOTvePisC9KqsLlngZ5s4+ZKLAr3C4h2a20ulDMA2Cl4AscXIv/i1quqS8fae35mvP9k7aQFpoMad9wXn2E49gzgT9QcUBJ1hc1jv8YSjLDBXUWPojxHhQ5Z5JobPI2hOSXPxa9kkXtlvUaLg+0d5a+PywnQO0xtfgHhpC4W4/AFJEqBUoKR7HItgbCMo7HAzOFylzuQrqVamY8GqZFnHnwEaoFtX1O6VLgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=34.00df93bd.chunk.js.map