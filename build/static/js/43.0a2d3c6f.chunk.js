(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{1043:function(e,s,t){"use strict";t.r(s);var c=t(12),r=t(26),n=t(27),i=t(29),o=t(30),a=t(1),l=t(214),d=t(215),j=t(736),h=function(e){Object(i.a)(t,e);var s=Object(o.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={profile:{}},c}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(j.a)({},"user/profile","",2).then((function(s){200==s.status&&(console.log(s.data),e.setState({profile:s.data.profile}))}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{class:"dashboard-content",children:[Object(c.jsxs)("div",{class:"dc-wrap reports",children:[Object(c.jsx)("div",{class:"dc-header",children:Object(c.jsx)("div",{class:"dch-left",children:Object(c.jsx)("h3",{class:"dc-head",children:"Reports"})})}),Object(c.jsx)("div",{class:"dc-body",children:Object(c.jsxs)("div",{class:"vendor-wrap",children:[this.state.profile&&this.state.profile.inventory_report_access?Object(c.jsxs)("div",{class:"vendor-box",children:[Object(c.jsx)(l.c,{to:"/reports/inventory",children:Object(c.jsxs)("div",{class:"vendor-name",children:[Object(c.jsx)("span",{children:"I"}),Object(c.jsx)("p",{children:"Inventory Report"})]})}),Object(c.jsx)(l.c,{to:"/reports/inventory",class:"vendor-link",children:Object(c.jsx)("span",{class:"ion-ios-arrow-thin-right"})})]}):"",this.state.profile&&this.state.profile.car_movement_record_access?Object(c.jsxs)("div",{class:"vendor-box",children:[Object(c.jsx)(l.c,{to:"/reports/carmovement",children:Object(c.jsxs)("div",{class:"vendor-name",children:[Object(c.jsx)("span",{children:"C"}),Object(c.jsx)("p",{children:"Car Movements"})]})}),Object(c.jsx)(l.c,{to:"/reports/carmovement",class:"vendor-link",children:Object(c.jsx)("span",{class:"ion-ios-arrow-thin-right"})})]}):"",this.state.profile&&this.state.profile.revenue_report_access?Object(c.jsxs)("div",{class:"vendor-box",children:[Object(c.jsx)(l.c,{to:"/reports/revenue",children:Object(c.jsxs)("div",{class:"vendor-name",children:[Object(c.jsx)("span",{children:"R"}),Object(c.jsx)("p",{children:"Revenue Report"})]})}),Object(c.jsx)(l.c,{to:"/reports/revenue",class:"vendor-link",children:Object(c.jsx)("span",{class:"ion-ios-arrow-thin-right"})})]}):""]})})]}),"  "]})}}]),t}(a.Component);s.default=Object(d.b)((function(e){return console.log(e.loginDetails),e}))(h)}}]);
//# sourceMappingURL=43.0a2d3c6f.chunk.js.map