(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{1041:function(e,t,s){"use strict";s.r(t);var a=s(12),i=s(742),n=s(216),c=s(26),r=s(27),l=s(60),o=s(29),h=s(30),d=s(1),u=s(214),b=s(215),p=s(736),m=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var a;if(Object(c.a)(this,s),(a=t.call(this,e)).validateForm=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},a._handleKeyDown=function(e){"Enter"===e.key&&a.submit(e)},a.state={name:"",initials:"",onsie_charge_applicable:!1,user_id:a.props.match.params.id?a.props.match.params.id:"",errors:{name:"",onsie_charge_applicable:"",initials:""},isDisabled:!1},a.submit=a.submit.bind(Object(l.a)(a)),a.onChange=a.onChange.bind(Object(l.a)(a)),""!=a.state.user_id)Object(p.a)({},"vendor/"+a.state.user_id,"",2).then((function(e){if(200==e.status)if(200===e.data.status){var t=e.data.vendor;a.setState({name:t.name,initials:t.initials,onsie_charge_applicable:t.onsie_charge_applicable})}else a.setState({message:e.data.msg}),setTimeout((function(){return a.setState({message:""})}),2e3);else a.setState({message:e.msg}),setTimeout((function(){return a.setState({message:""})}),2e3)}));return a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){}},{key:"submit",value:function(e){var t=this;if(e.preventDefault(),console.log(this.state.isDisabled),!1===this.state.isDisabled&&this.validateForm(this.state.errors))if(this.setState({isDisabled:!0}),this.state.user_id){var s={};s={id:this.state.user_id,name:this.state.name,initials:this.state.initials,onsie_charge_applicable:this.state.onsie_charge_applicable};var a="";Object(p.a)(s,"vendor/edit",a,3).then((function(e){200===e.status?200===e.data.status?t.props.history.push("/vendors/list"):(t.setState({message:e.data.msg,isDisabled:!1}),setTimeout((function(){return t.setState({message:""})}),2e3)):(t.setState({message:e.msg,isDisabled:!1}),setTimeout((function(){return t.setState({message:""})}),2e3))}))}else{s={name:this.state.name,initials:this.state.initials,onsie_charge_applicable:this.state.onsie_charge_applicable},a="";Object(p.a)(s,"vendor/add",a).then((function(e){200===e.status?200===e.data.status?t.props.history.push("/vendors/list"):(t.setState({message:e.data.msg,isDisabled:!1}),setTimeout((function(){return t.setState({message:""})}),2e3)):(t.setState({message:e.msg,isDisabled:!1}),setTimeout((function(){return t.setState({message:""})}),2e3))}))}}},{key:"onChangeOptionsPlus",value:function(e){this.setState({onsie_charge_applicable:e})}},{key:"onChange",value:function(e){var t=this;e.preventDefault();var s=e.target,a=s.name,i=s.value,c=this.state.errors;switch(a){case"initials":c.name=i.length<2?"Intials is required":"";break;case"name":c.name=i.length<2?"Name is required":""}this.setState(Object(n.a)({errors:c},a,i),(function(){""===c.name&&""===c.initials&&(t.setState({isDisabled:!1}),console.log(t.state.isDisabled))}))}},{key:"render",value:function(){var e=this,t=this.state.errors,s=this.props;s.children,Object(i.a)(s,["children"]);return Object(a.jsxs)("div",{class:"dc-wrap add-vendor",children:[Object(a.jsxs)("div",{class:"dc-header",children:[Object(a.jsx)("div",{class:"dch-left",children:Object(a.jsx)("h3",{class:"dc-head",children:"Add Vendor"})}),Object(a.jsx)("div",{class:"dch-right",children:Object(a.jsx)(u.c,{to:"/vendors/list",children:Object(a.jsxs)("button",{type:"button",class:"pp-custom-btn",children:[Object(a.jsx)("span",{class:"ion-arrow-left-c"}),"Back"]})})})]}),Object(a.jsx)("div",{class:"dc-body",children:Object(a.jsxs)("div",{class:"sc-bg-white",children:[Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Vendor's"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",maxLength:25,onKeyDown:this._handleKeyDown,onChange:this.onChange,name:"name",autoComplete:"name",value:this.state.name,placeholder:""}),t.name.length>0&&Object(a.jsx)("span",{className:"error",children:t.name})]}),Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Reservation initials"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",maxLength:25,onKeyDown:this._handleKeyDown,onChange:this.onChange,name:"initials",autoComplete:"name",value:this.state.initials,placeholder:"Enter initials"}),t.initials.length>0&&Object(a.jsx)("span",{className:"error",children:t.initials})]})]}),Object(a.jsx)("div",{class:"sc-extra",children:this.state.onsie_charge_applicable?Object(a.jsxs)("div",{class:"check-condition active",onClick:function(){return e.onChangeOptionsPlus(!1)},children:[Object(a.jsx)("span",{class:"check-mark",children:Object(a.jsx)("i",{class:"ion-ios-checkmark-empty"})}),Object(a.jsx)("p",{class:"condition-text",children:"Onsite Charge Applicable"})]}):Object(a.jsxs)("div",{class:"check-condition",onClick:function(){return e.onChangeOptionsPlus(!0)},children:[Object(a.jsx)("span",{class:"check-mark",children:Object(a.jsx)("i",{class:"ion-ios-checkmark-empty"})}),Object(a.jsx)("p",{class:"condition-text",children:"Onsite Charge Applicable"})]})})]})}),Object(a.jsx)("div",{class:"dc-footer",children:Object(a.jsx)("button",{type:"button",onClick:this.submit,class:"pp-custom-btn",children:"Save"})})]})}}]),s}(d.Component);t.default=Object(b.b)((function(e){return console.log(e.loginDetails),e}))(m)},742:function(e,t,s){"use strict";function a(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}s.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=36.5156c2bd.chunk.js.map