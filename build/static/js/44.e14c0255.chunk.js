(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{1059:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c(26),n=c(27),i=c(60),l=c(29),r=c(30),d=c(1),j=c(215),o=c(64),h=c.n(o),b=c(736),O=(c(1002),c(1009),c(1010),function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(e){var s;return Object(a.a)(this,c),(s=t.call(this,e)).toggle=function(){h()(".custom-select").hasClass("active")?h()(".custom-select").removeClass("active"):h()(".custom-select").addClass("active")},s.state={items:[],vendors:[],message:"",vendor_name:"All",selectionRange:{startDate:null,endDate:null,key:"selection"}},s.inventoryData=s.inventoryData.bind(Object(i.a)(s)),s.inventoryData(),s.handleSelect=s.handleSelect.bind(Object(i.a)(s)),s}return Object(n.a)(c,[{key:"handleSelect",value:function(e){console.log(e),this.setState({selectionRange:{startDate:e.selection.startDate,endDate:e.selection.endDate,key:"selection"}})}},{key:"inventoryData",value:function(){var e=this,t={};console.log(t);Object(b.a)(t,"booking/inventory","",2).then((function(t){200==t.status?200===t.data.status&&(console.log(t.data.data),e.setState({items:t.data.invnentory})):400===t.status&&e.setState({message:t.msg})}))}},{key:"onChangeOptions",value:function(e){e&&this.setState({vendor_name:e})}},{key:"render",value:function(){var e=this.state,t=(e.isLoaded,e.items);e.vendors;return Object(s.jsxs)("div",{className:"dc-wrap inventory-report-table",children:[Object(s.jsxs)("div",{className:"dc-header",children:[Object(s.jsxs)("div",{className:"dch-left",children:[Object(s.jsx)("h3",{className:"dc-head",children:"Inventory Report"}),this.state.message.length>0&&Object(s.jsx)("span",{className:"error",children:this.state.message})]}),Object(s.jsx)("div",{className:"dch-right"})]}),Object(s.jsx)("div",{className:"dc-body",children:Object(s.jsx)("div",{className:"dcb-table-responsive",children:Object(s.jsxs)("table",{className:"custom-table inventory-report-tbl last-center-tbl",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:Object(s.jsx)("div",{className:"ct-head",children:Object(s.jsx)("p",{children:"Vehicles"})})}),Object(s.jsx)("th",{children:Object(s.jsx)("div",{className:"ct-head",children:Object(s.jsx)("p",{children:"Capacity"})})}),Object(s.jsx)("th",{children:Object(s.jsx)("div",{className:"ct-head",children:Object(s.jsx)("p",{children:"Occupied"})})}),Object(s.jsx)("th",{children:Object(s.jsx)("div",{className:"ct-head",children:Object(s.jsx)("p",{children:"Available"})})})]})}),Object(s.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.type})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.total})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.occupied})}),Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:e.vacant})})]})})):""})]})})})]})}}]),c}(d.Component));t.default=Object(j.b)((function(e){return console.log(e.loginDetails),e}))(O)}}]);
//# sourceMappingURL=44.e14c0255.chunk.js.map