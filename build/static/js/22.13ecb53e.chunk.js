(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1044:function(e,t,s){"use strict";s.r(t);var c=s(12),a=s(216),n=s(26),i=s(27),d=s(60),r=s(29),l=s(30),o=s(1),j=s(214),h=s(215),u=s(736),b=s(754),p=s(740),O=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var c,i;return Object(n.a)(this,s),(i=t.call(this,e)).deleteSubadmin=function(){var e=i.state.id;Object(u.a)({},"user/delete/"+e,"",4).then((function(e){200===e.data.status?(i.accounts(i.state.activePageNo),i.setState({modalAccess:!1})):(i.setState({message:e.data.msg}),setTimeout((function(){return i.setState({message:""})}),2e3))}))},i.state=(c={isLoaded:!0,items:[],searchKey:"",totalCount:0,activePageNo:1,pageRange:1,modalAccess:!1,id:"",count:10,profile:{}},Object(a.a)(c,"modalAccess",!1),Object(a.a)(c,"search",""),c),i.search=i.search.bind(Object(d.a)(i)),i}return Object(i.a)(s,[{key:"search",value:function(e){this.setState({searchKey:e.target.value,activePageNo:1},(function(){var e=this;e.state.typingTimeout&&clearTimeout(e.state.typingTimeout),e.setState({typing:!1,typingTimeout:setTimeout((function(){e.accounts(e.state.activePageNo)}),2e3)})}))}},{key:"componentDidMount",value:function(){var e=this;this.accounts(this.state.activePageNo);Object(u.a)({},"user/profile","",2).then((function(t){200==t.status&&(console.log(t),t.data.profile&&0==t.data.profile.is_admin&&e.props.history.push({pathname:"/dashboard"}),console.log(t.data.profile),e.setState({profile:t.data.profile}))}))}},{key:"onChangeOptionsPlus",value:function(e,t){t?this.setState({modalAccess:e,id:t}):this.setState({modalAccess:e})}},{key:"accounts",value:function(e){var t=this;this.setState({items:[]});Object(u.a)({},"/user/","",2).then((function(e){200===e.status?(200===e.data.status&&t.setState({isLoaded:!0,items:e.data.users}),console.log(e.data.users)):(t.setState({message:e.msg}),setTimeout((function(){return t.setState({message:""})}),2e3))}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.isLoaded,a=t.items;return s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"dashboard-wrapper",children:Object(c.jsxs)("div",{className:this.state.modalAccess?"dashboard-center-popup active":"dashboard-center-popup",children:[Object(c.jsx)("div",{className:"dp-backdrop"}),Object(c.jsx)("div",{className:"dp-content",children:Object(c.jsx)("div",{className:"dp-body",children:Object(c.jsxs)("div",{className:"dp-popup del-ven-name",children:[Object(c.jsx)("div",{className:"popup-close",children:Object(c.jsx)("span",{className:"ion-close-round",onClick:function(){return e.onChangeOptionsPlus(!1)}})}),Object(c.jsxs)("h4",{className:"popup-title",children:["Do you want to delete? ",Object(c.jsx)("span",{children:"User Name"})]}),Object(c.jsxs)("div",{className:"popup-action",children:[Object(c.jsx)("button",{type:"button",onClick:function(){return e.deleteSubadmin()},className:"pp-custom-btn",children:"Yes"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.onChangeOptionsPlus(!1)},className:"pp-custom-btn pp-btn-outline",children:"No"})]})]})})})]})}),Object(c.jsxs)("div",{className:"dc-wrap user-mgnt-table",children:[Object(c.jsxs)("div",{className:"dc-header",children:[Object(c.jsx)("div",{className:"dch-left",children:Object(c.jsx)("h3",{className:"dc-head",children:"User Management"})}),Object(c.jsx)("div",{className:"dch-right",children:Object(c.jsx)(j.c,{to:"/users/add",children:Object(c.jsxs)("button",{type:"button",className:"pp-custom-btn",children:[Object(c.jsx)("span",{className:"ion-plus-round"}),"Add"]})})})]}),Object(c.jsx)("div",{className:"dc-body",children:Object(c.jsx)("div",{className:"dcb-table-responsive ct-plain",children:Object(c.jsxs)("table",{className:"custom-table user-mgnt-tbl last-center-tbl",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"ct-head",children:Object(c.jsx)("p",{children:"Name"})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"ct-head",children:Object(c.jsx)("p",{children:"Email"})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"ct-head",children:Object(c.jsx)("p",{children:"Status"})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"ct-head",children:Object(c.jsx)("p",{children:"Mobile No."})})}),Object(c.jsx)("th",{children:Object(c.jsx)("div",{className:"ct-head",children:Object(c.jsx)("p",{children:"Action"})})})]})}),Object(c.jsx)("tbody",{children:a.length>0?a.map((function(t,s){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("p",{children:t.name})}),Object(c.jsx)("td",{children:Object(c.jsx)("p",{children:t.email})}),Object(c.jsx)("td",{children:Object(c.jsx)("p",{className:"status st-active",children:t.status?t.status:"-"})}),Object(c.jsx)("td",{children:Object(c.jsx)("p",{children:t.phone})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"ct-action",children:[Object(c.jsxs)("a",{href:"javascript:void(0);",onClick:function(){return e.onChangeOptionsPlus(!0,t.id)},children:[Object(c.jsx)("img",{src:b.a}),Object(c.jsx)("span",{children:"Delete"})]}),Object(c.jsxs)(j.c,{to:"/users/edit/"+t.id,children:[Object(c.jsx)("img",{src:p.a}),Object(c.jsx)("span",{children:"Edit"})]})]})})]})})):Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"5",children:"No record found"})})})]})})})]})]}):Object(c.jsx)("div",{children:"Loading...."})}}]),s}(o.Component);t.default=Object(h.b)((function(e){return console.log(e.loginDetails),e}))(O)},740:function(e,t,s){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAABHNCSVQICAgIfAhkiAAAAgdJREFUSEu1lkFWGkEQhqsaFrrSG0Q2ibiRG2SYCxhP4CTgHk8AnkBdJ8TxBpwA+gYxG3hmIzlBZCW+B11Wt/bYM2FgBod5j/eY6er6+v+nuqYR3nEF995u6QlOUGEAiDWTiuiWBIXdfXmVTI3rsk7/eDWa4XUESSZi6AzpOKzKsR1aC6ZBaoYDRNxdulgN3KZ6WJEPOi43LDPobRXnP6r9Tm5YGoiAbuZb1NIJS1O8RMATy+Kxcbc6qOSCLQNxssAm10VTnop/rr2szDiYycasIAtojnxaC5YbNPRbLOHCgU1YmSmkpcrygr6N/EAAXLuq9Pu0NqfCigAxdDIDVbN7bSGsIBCQUMfdT7KXuqmLAimArz+r/dC1NKZsk6BYgWwaFMFM937E+2SvcyvJtWNR1enxRdb9Z2NjVA/dFqMDigZFypI7fhMgA2uOPA9ADKLGSfC3e9Dfc+Xr/+taF7ORVXX4QTuCOTvePisC9KqsLlngZ5s4+ZKLAr3C4h2a20ulDMA2Cl4AscXIv/i1quqS8fae35mvP9k7aQFpoMad9wXn2E49gzgT9QcUBJ1hc1jv8YSjLDBXUWPojxHhQ5Z5JobPI2hOSXPxa9kkXtlvUaLg+0d5a+PywnQO0xtfgHhpC4W4/AFJEqBUoKR7HItgbCMo7HAzOFylzuQrqVamY8GqZFnHnwEaoFtX1O6VLgAAAABJRU5ErkJggg=="},754:function(e,t,s){"use strict";t.a=s.p+"static/media/trash-outline.6b8bea40.svg"}}]);
//# sourceMappingURL=22.13ecb53e.chunk.js.map