(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1035:function(e,t,s){"use strict";s.r(t);var c=s(12),a=s(26),n=s(27),i=s(60),d=s(29),r=s(30),o=s(1),l=s(214),j=s(215),u=s(754),b=s(739),h=s(736),p=function(e){Object(d.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).deleteSubadmin=function(){var e=c.state.id;Object(h.a)({},"vendor/delete/"+e,"",4).then((function(e){200===e.data.status?(c.accounts(c.state.activePageNo),c.setState({modalAccess:!1})):(c.setState({message:e.data.msg}),setTimeout((function(){return c.setState({message:""})}),2e3))}))},c.state={isLoaded:!0,items:[],id:"",searchKey:"",totalCount:0,activePageNo:1,pageRange:1,count:10,modalAccess:!1,search:""},c.search=c.search.bind(Object(i.a)(c)),c}return Object(n.a)(s,[{key:"search",value:function(e){this.setState({searchKey:e.target.value,activePageNo:1},(function(){var e=this;e.state.typingTimeout&&clearTimeout(e.state.typingTimeout),e.setState({typing:!1,typingTimeout:setTimeout((function(){e.accounts(e.state.activePageNo)}),2e3)})}))}},{key:"componentDidMount",value:function(){this.accounts(this.state.activePageNo)}},{key:"onChangeOptionsPlus",value:function(e,t){t?this.setState({modalAccess:e,id:t}):this.setState({modalAccess:e})}},{key:"accounts",value:function(e){var t=this;this.setState({items:[]});Object(h.a)({},"/vendor/","",2).then((function(e){200===e.status?(200===e.data.status&&t.setState({isLoaded:!0,items:e.data.vendors}),console.log(e.data.users)):(t.setState({message:e.msg}),setTimeout((function(){return t.setState({message:""})}),2e3))}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.isLoaded,a=t.items;return s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"dashboard-wrapper",children:Object(c.jsxs)("div",{className:this.state.modalAccess?"dashboard-center-popup active":"dashboard-center-popup",children:[Object(c.jsx)("div",{className:"dp-backdrop"}),Object(c.jsx)("div",{className:"dp-content",children:Object(c.jsx)("div",{className:"dp-body",children:Object(c.jsxs)("div",{class:"dp-popup del-ven-name",children:[Object(c.jsx)("div",{class:"popup-close",children:Object(c.jsx)("span",{class:"ion-close-round",onClick:function(){return e.onChangeOptionsPlus(!1)}})}),Object(c.jsxs)("h4",{class:"popup-title",children:["Do you want to delete? ",Object(c.jsx)("span",{children:"Vendor Name"})]}),Object(c.jsxs)("div",{class:"popup-action",children:[Object(c.jsx)("button",{type:"button",onClick:function(){return e.deleteSubadmin()},class:"pp-custom-btn",children:"Yes"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.onChangeOptionsPlus(!1)},class:"pp-custom-btn pp-btn-outline",children:"No"})]})]})})})]})}),Object(c.jsxs)("div",{class:"dc-wrap vendor-mgnt-table",children:[Object(c.jsxs)("div",{class:"dc-header",children:[Object(c.jsx)("div",{class:"dch-left",children:Object(c.jsx)("h3",{class:"dc-head",children:"Vendor Management"})}),Object(c.jsx)("div",{class:"dch-right",children:Object(c.jsx)(l.c,{to:"/vendors/add",children:Object(c.jsxs)("button",{type:"button",class:"pp-custom-btn",children:[Object(c.jsx)("span",{class:"ion-plus-round"}),"Add"]})})})]}),Object(c.jsx)("div",{class:"dc-body",children:Object(c.jsx)("div",{class:"dcb-table-responsive ct-plain",children:Object(c.jsxs)("table",{class:"custom-table vendor-mgnt-tbl last-center-tbl",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("div",{class:"ct-head",children:Object(c.jsx)("p",{children:"Name"})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{class:"ct-head",children:Object(c.jsx)("p",{children:"Onsite Charge Applicable"})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{class:"ct-head",children:Object(c.jsx)("p",{children:"Modify"})})})]})}),Object(c.jsx)("tbody",{children:a.length>0?a.map((function(t,s){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("p",{children:t.name})}),Object(c.jsx)("td",{children:Object(c.jsx)("p",{children:t.onsie_charge_applicable.toString().toUpperCase()})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{class:"ct-action",children:[Object(c.jsxs)("a",{href:"javascript:void(0);",onClick:function(){return e.onChangeOptionsPlus(!0,t.id)},children:[Object(c.jsx)("img",{src:u.a,alt:"delete"}),Object(c.jsx)("span",{children:"Delete"})]}),Object(c.jsxs)(l.c,{to:"/vendors/edit/"+t.id,children:[Object(c.jsx)("img",{src:b.a,alt:"edit"}),Object(c.jsx)("span",{children:"Edit"})]})]})})]})})):Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"2",children:"No records found"})})})]})})})]})]}):Object(c.jsx)("div",{children:"Loading...."})}}]),s}(o.Component);t.default=Object(j.b)((function(e){return console.log(e.loginDetails),e}))(p)},739:function(e,t,s){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAABHNCSVQICAgIfAhkiAAAAgdJREFUSEu1lkFWGkEQhqsaFrrSG0Q2ibiRG2SYCxhP4CTgHk8AnkBdJ8TxBpwA+gYxG3hmIzlBZCW+B11Wt/bYM2FgBod5j/eY6er6+v+nuqYR3nEF995u6QlOUGEAiDWTiuiWBIXdfXmVTI3rsk7/eDWa4XUESSZi6AzpOKzKsR1aC6ZBaoYDRNxdulgN3KZ6WJEPOi43LDPobRXnP6r9Tm5YGoiAbuZb1NIJS1O8RMATy+Kxcbc6qOSCLQNxssAm10VTnop/rr2szDiYycasIAtojnxaC5YbNPRbLOHCgU1YmSmkpcrygr6N/EAAXLuq9Pu0NqfCigAxdDIDVbN7bSGsIBCQUMfdT7KXuqmLAimArz+r/dC1NKZsk6BYgWwaFMFM937E+2SvcyvJtWNR1enxRdb9Z2NjVA/dFqMDigZFypI7fhMgA2uOPA9ADKLGSfC3e9Dfc+Xr/+taF7ORVXX4QTuCOTvePisC9KqsLlngZ5s4+ZKLAr3C4h2a20ulDMA2Cl4AscXIv/i1quqS8fae35mvP9k7aQFpoMad9wXn2E49gzgT9QcUBJ1hc1jv8YSjLDBXUWPojxHhQ5Z5JobPI2hOSXPxa9kkXtlvUaLg+0d5a+PywnQO0xtfgHhpC4W4/AFJEqBUoKR7HItgbCMo7HAzOFylzuQrqVamY8GqZFnHnwEaoFtX1O6VLgAAAABJRU5ErkJggg=="},754:function(e,t,s){"use strict";t.a=s.p+"static/media/trash-outline.6b8bea40.svg"}}]);
//# sourceMappingURL=23.7bb454fd.chunk.js.map