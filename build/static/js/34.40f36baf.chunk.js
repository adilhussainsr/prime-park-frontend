(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1061:function(t,e,s){"use strict";s.r(e);var a=s(12),c=s(26),l=s(27),n=s(29),i=s(30),d=s(1),o=s(215),r=(s(740),s(736)),j=function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).state={modalAccess:!1,items:[],A:[],B:[],C:[],D:[],E:[],G:[],M:[],F1:[],F2:[],R:[],L:[],F3:[]},a}return Object(l.a)(s,[{key:"onChangeOptionsPlus",value:function(t){this.setState({modalAccess:t})}},{key:"componentDidMount",value:function(){this.accounts()}},{key:"accounts",value:function(){var t=this;this.setState({items:[]});Object(r.a)({},"/parking/parkingslots/","",2).then((function(e){200===e.status&&(200===e.data.status?(console.log("D lenght->",e.data.parking.D[1]),t.setState({isLoaded:!0,A:e.data.parking.A[1],Arowcount:Object.keys(e.data.parking.A[1]).length,Acolcount:Object.keys(e.data.parking.A[1]["42R"]).length,Acolcounttotal:Object.keys(e.data.parking.A[1]["42R"]).length*Object.keys(e.data.parking.A[1]).length,B:e.data.parking.B[1],Browcount:Object.keys(e.data.parking.B[1]).length,Bcolcount:Object.keys(e.data.parking.B[1]["70L"]).length,Bcolcounttotal:Object.keys(e.data.parking.B[1]["70L"]).length*Object.keys(e.data.parking.B[1]).length,C:e.data.parking.C[1],Crowcount:Object.keys(e.data.parking.C[1].C).length,Ccolcount:Object.keys(e.data.parking.C[1]).length,Ccolcounttotal:Object.keys(e.data.parking.C[1].C).length*Object.keys(e.data.parking.C[1]).length,D:e.data.parking.D[1],Drowcount:Object.keys(e.data.parking.D[1]).length,Dcolcount:Object.keys(e.data.parking.D[1]["26R"]).length,Dcolcounttotal:Object.keys(e.data.parking.D[1]["26R"]).length*Object.keys(e.data.parking.D[1]).length,E:e.data.parking.E[27],Erowcount:Object.keys(e.data.parking.E[27]).length,Ecolcount:Object.keys(e.data.parking.E[27]["17R"]).length,Ecolcounttotal:Object.keys(e.data.parking.E[27]["17R"]).length*Object.keys(e.data.parking.E[27]).length,G:e.data.parking.G[4],Growcount:Object.keys(e.data.parking.G[4]).length,Gcolcount:Object.keys(e.data.parking.G[4].F02).length,Gcolcounttotal:Object.keys(e.data.parking.G[4].F02).length*Object.keys(e.data.parking.G[4]).length,F1:e.data.parking.F[8],F1rowcount:Object.keys(e.data.parking.F[8]).length,F1colcount:Object.keys(e.data.parking.F[8].F03).length,F1colcounttotal:Object.keys(e.data.parking.F[8].F03).length*Object.keys(e.data.parking.F[8]).length,F2:e.data.parking.F[21],F2rowcount:Object.keys(e.data.parking.F[21]).length,F2colcount:Object.keys(e.data.parking.F[21].F01).length,F2colcounttotal:Object.keys(e.data.parking.F[21].F01).length*Object.keys(e.data.parking.F[21]).length,R:e.data.parking.R[0],Rrowcount:Object.keys(e.data.parking.R[0]).length,Rcolcount:Object.keys(e.data.parking.R[0]["16R"]).length,Rcolcounttotal:Object.keys(e.data.parking.R[0]["16R"]).length*Object.keys(e.data.parking.R[0]).length,L:e.data.parking.L[0],Lrowcount:Object.keys(e.data.parking.L[0]).length,Lcolcount:Object.keys(e.data.parking.L[0]["81L"]).length,Lcolcounttotal:Object.keys(e.data.parking.L[0]["81L"]).length*Object.keys(e.data.parking.L[0]).length})):(t.setState({message:e.msg}),setTimeout((function(){return t.setState({message:""})}),2e3)))}))}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"dc-wrap dashboard-car-status",children:[Object(a.jsxs)("div",{className:"dc-header",children:[Object(a.jsx)("div",{className:"dch-left",children:Object(a.jsx)("h3",{className:"dc-head",children:"Parking Lot Diagram"})}),Object(a.jsx)("div",{className:"dch-right",children:Object(a.jsxs)("div",{className:"parking-indicator",children:[Object(a.jsxs)("div",{className:"ind-box",children:[Object(a.jsx)("span",{className:"ind-color overstay"}),Object(a.jsx)("span",{className:"ind-name",children:"Overstay Car"})]}),Object(a.jsxs)("div",{className:"ind-box",children:[Object(a.jsx)("span",{className:"ind-color leaving"}),Object(a.jsx)("span",{className:"ind-name",children:"Leaving Today"})]}),Object(a.jsxs)("div",{className:"ind-box",children:[Object(a.jsx)("span",{className:"ind-color parked"}),Object(a.jsx)("span",{className:"ind-name",children:"Parked Car"})]}),Object(a.jsxs)("div",{className:"ind-box",children:[Object(a.jsx)("span",{className:"ind-color vacant"}),Object(a.jsx)("span",{className:"ind-name",children:"Vacant Slots"})]})]})})]}),Object(a.jsx)("div",{className:"dc-body",children:Object(a.jsxs)("div",{className:"lot-diagram-wrap",children:[Object(a.jsxs)("div",{className:"ld-col col-5",children:[Object(a.jsxs)("div",{className:"ld-col-content lot-a",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Arowcount,"*",this.state.Acolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Acolcounttotal]}),Object(a.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(a.jsx)("div",{className:"lot-name",children:"A"})]}),Object.keys(this.state.A).map((function(e,s){return Object(a.jsx)("div",{className:"ldc-body",children:Object.keys(t.state.A[e]).map((function(s,c){return Object(a.jsx)("div",{className:"lot-box "+t.state.A[e][s].status,children:t.state.A[e][s].display_slot},c)}))},s)}))]}),Object(a.jsxs)("div",{className:"ld-col-content lot-b",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Browcount,"*",this.state.Bcolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Bcolcounttotal]}),Object(a.jsx)("p",{children:"Fast Moving"})]}),Object(a.jsx)("div",{className:"lot-name",children:"B"})]}),Object(a.jsx)("div",{className:"ldc-body",children:Object.keys(this.state.B).map((function(e,s){return Object(a.jsx)("div",{className:"ldc-body",children:Object.keys(t.state.B[e]).map((function(s,c){return Object(a.jsx)("div",{className:"lot-box "+t.state.B[e][s].status,children:t.state.B[e][s].display_slot},c)}))},"B-"+s)}))})]}),Object(a.jsxs)("div",{className:"ld-col-content lot-d margintop710px",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Lrowcount,"*",this.state.Lcolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Lcolcounttotal]}),Object(a.jsx)("p",{children:"Fast Moving"})]}),Object(a.jsx)("div",{className:"lot-name",children:"L"})]}),Object.keys(this.state.L).map((function(e,s){return Object(a.jsxs)("div",{className:"ldc-body",children:[" ",Object.values(t.state.L[e]).map((function(t,e){return Object(a.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot},e)}))]},e)}))]}),Object(a.jsx)("div",{className:"ld-col-content lot-office",children:Object(a.jsx)("div",{className:"office-lot",children:"Office"})}),Object(a.jsxs)("div",{className:"ld-col-content lot-f",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.F2rowcount,"*",this.state.F2colcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.F2colcounttotal]}),Object(a.jsx)("p",{children:"Fast Moving"})]}),Object(a.jsx)("div",{className:"lot-name",children:"F"})]}),Object.keys(this.state.F2).map((function(e,s){return Object(a.jsx)("div",{className:"ldc-body",children:t.state.F2[e]&&Object.values(t.state.F2[e]).map((function(t,e){return Object(a.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot},e)}))},e)}))]})]}),Object(a.jsx)("div",{className:"ld-col col-2",children:Object(a.jsxs)("div",{className:"ld-col-content lot-30car",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsx)("div",{className:"lot-detail",children:Object(a.jsxs)("h4",{children:[this.state.Ccolcounttotal," cars"]})}),Object(a.jsx)("div",{className:"lot-name",children:"C"})]}),Object(a.jsx)("div",{className:"ldc-body",children:Object.keys(this.state.C).map((function(e,s){return Object.keys(t.state.C[e]).map((function(s,c){var l,n;return Object(a.jsxs)("div",{className:"lot-box "+(null===(l=t.state.C[e][s])||void 0===l?void 0:l.status),children:[" ",null===(n=t.state.C[e][s])||void 0===n?void 0:n.display_slot]})}))}))})]})}),Object(a.jsxs)("div",{className:"ld-col col-5",children:[Object(a.jsxs)("div",{className:"ld-col-content lot-d",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Drowcount,"*",this.state.Dcolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Dcolcounttotal]}),Object(a.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(a.jsx)("div",{className:"lot-name",children:"D"})]}),Object(a.jsx)("div",{className:"ldc-body",children:Object.keys(this.state.D).map((function(e){return Object.values(t.state.D[e]).map((function(t,e){return Object(a.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot},e)}))}))})]}),Object(a.jsxs)("div",{className:"ld-col-content lot-e",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Erowcount,"*",this.state.Ecolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Ecolcounttotal]}),Object(a.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(a.jsx)("div",{className:"lot-name",children:"E"})]}),Object.keys(this.state.E).map((function(e){return Object(a.jsx)("div",{className:"ldc-body",children:Object.values(t.state.E[e]).map((function(t,e){return Object(a.jsx)("div",{className:"lot-box "+t.status,children:t.display_slot},e)}))},e)}))]}),Object(a.jsxs)("div",{className:"ld-col-content lot-r",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Rrowcount,"*",this.state.Rcolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Rcolcounttotal]}),Object(a.jsx)("p",{children:"For cars parked  for 3 weeks or more "})]}),Object(a.jsx)("div",{className:"lot-name",children:"R"})]}),Object.keys(this.state.R).map((function(e){return Object(a.jsx)("div",{className:"ldc-body",children:t.state.R[e]?Object.keys(t.state.R[e]).map((function(s,c){return t.state.R[e][s].status?Object(a.jsx)("div",{className:"lot-box "+t.state.R[e][s].status,children:t.state.R[e][s].display_slot},c):null})):null},e)}))]}),Object(a.jsxs)("div",{className:"ld-col-content lot-e-5",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.Growcount,"*",this.state.Gcolcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.Gcolcounttotal]}),Object(a.jsx)("p",{children:"Fast Moving"})]}),Object(a.jsx)("div",{className:"lot-name",children:"G"})]}),Object.keys(this.state.G).map((function(e){return Object(a.jsx)("div",{className:"ldc-body",children:t.state.G[e]?Object.keys(t.state.G[e]).map((function(s){return Object(a.jsx)("div",{className:"lot-box "+t.state.G[e][s].status,children:t.state.G[e][s].display_slot},s)})):null},e)}))]}),Object(a.jsxs)("div",{className:"ld-col-content lot-e-5 marginrTop300px",children:[Object(a.jsxs)("div",{className:"ldc-header",children:[Object(a.jsxs)("div",{className:"lot-detail",children:[Object(a.jsxs)("h4",{children:[this.state.F2rowcount,"*",this.state.F2colcount,Object(a.jsx)("small",{children:"(All Cars)"}),this.state.F2colcounttotal]}),Object(a.jsx)("p",{children:"Fast Moving"})]}),Object(a.jsx)("div",{className:"lot-name",children:"F"})]}),Object.keys(this.state.F2).map((function(e){return Object(a.jsx)("div",{className:"ldc-body",children:t.state.F2[e]?Object.keys(t.state.F2[e]).map((function(s){return Object(a.jsx)("div",{className:"lot-box "+t.state.F2[e][s].status,children:t.state.F2[e][s].display_slot},s)})):null},e)}))]})]})]})})]})}}]),s}(d.Component);e.default=Object(o.b)((function(t){return console.log(t.loginDetails),t}))(j)},740:function(t,e,s){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAABHNCSVQICAgIfAhkiAAAAgdJREFUSEu1lkFWGkEQhqsaFrrSG0Q2ibiRG2SYCxhP4CTgHk8AnkBdJ8TxBpwA+gYxG3hmIzlBZCW+B11Wt/bYM2FgBod5j/eY6er6+v+nuqYR3nEF995u6QlOUGEAiDWTiuiWBIXdfXmVTI3rsk7/eDWa4XUESSZi6AzpOKzKsR1aC6ZBaoYDRNxdulgN3KZ6WJEPOi43LDPobRXnP6r9Tm5YGoiAbuZb1NIJS1O8RMATy+Kxcbc6qOSCLQNxssAm10VTnop/rr2szDiYycasIAtojnxaC5YbNPRbLOHCgU1YmSmkpcrygr6N/EAAXLuq9Pu0NqfCigAxdDIDVbN7bSGsIBCQUMfdT7KXuqmLAimArz+r/dC1NKZsk6BYgWwaFMFM937E+2SvcyvJtWNR1enxRdb9Z2NjVA/dFqMDigZFypI7fhMgA2uOPA9ADKLGSfC3e9Dfc+Xr/+taF7ORVXX4QTuCOTvePisC9KqsLlngZ5s4+ZKLAr3C4h2a20ulDMA2Cl4AscXIv/i1quqS8fae35mvP9k7aQFpoMad9wXn2E49gzgT9QcUBJ1hc1jv8YSjLDBXUWPojxHhQ5Z5JobPI2hOSXPxa9kkXtlvUaLg+0d5a+PywnQO0xtfgHhpC4W4/AFJEqBUoKR7HItgbCMo7HAzOFylzuQrqVamY8GqZFnHnwEaoFtX1O6VLgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=34.40f36baf.chunk.js.map