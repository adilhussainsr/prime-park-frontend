(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{1057:function(e,t,s){"use strict";s.r(t);var a=s(12),c=s(216),n=s(26),i=s(27),r=s(60),l=s(29),o=s(30),h=s(1),d=s(215),u=s(736),b=s(743),p=s.n(b),j=(s(744),s(741)),m=s(738),v=s.n(m),g=v()().subtract(1,"day"),_=function(e){return e.isAfter(g)},O=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;Object(n.a)(this,s),(a=t.call(this,e))._onInputChangeIn=function(e){var t=e.target?e.target.value:e;a.setState({checkin:t},(function(){setTimeout((function(){return a.calculate()}),100)}))},a._onInputChangeOut=function(e){var t=e.target?e.target.value:e;a.setState({checkout:t},(function(){setTimeout((function(){return a.calculate()}),100)}))},a._onInputChangeTimein=function(e){var t=e.target?e.target.value:e;a.setState({timein:t},(function(){setTimeout((function(){return a.calculate()}),100)}))},a._onInputChangeTimeout=function(e){var t=e.target?e.target.value:e;a.setState({timeout:t},(function(){setTimeout((function(){return a.calculate()}),100)}))},a.calculateDays=function(e,t){return e=e?new Date(e):new Date,!t||t<e?null:(t=new Date(t),e.setHours(0),e.setMinutes(0),e.setSeconds(0),t.setHours(0),t.setMinutes(0),t.setSeconds(0),Math.ceil((t-e)/864e5)+1)},a._handleKeyDown=function(e){"Enter"===e.key&&a.submit(e)},a.state={vendors:[],carTypes:[],booking_time:"",id:a.props.match.params.id?a.props.match.params.id:"",receiptData:{},booking:{},customer_name:"",onsite_amount:"0",mobile_number:"",plate_number:"",reservation_id:"",passengers:1,payment_mode:"",overstay_charges:0,reservation_charges:0,days:0,overstay_days:0,car_type_id:"",reservation:"Yes",checkin:{},checkout:{},timein:{},timeout:{},vendor_id:"",slot:"",oldSlot:"",carType:{},disablePastDt:_,disablePastDts:_,errors:{customer_name:"",onsite_amount:"",mobile_number:"",plate_number:"",vendor_id:"",reservation_id:"",passengers:1,car_type_id:"",reservation:"",checkin:"",checkout:"",timeout:""},numberPassengers:5,saveDisabled:!1,slotMessage:{},parking_lot_id:""};var c={};return Object(u.a)(c,"/cartype/","",2).then((function(e){200===e.status&&200===e.data.status&&a.setState({carTypes:e.data.types})})),Object(u.a)(c,"/vendor/","",2).then((function(e){200===e.status&&200===e.data.status&&a.setState({vendors:e.data.vendors})})),Object(u.a)(c,"booking/receipt/"+a.state.id,"",2).then((function(e){if(200==e.status&&200===e.data.status){var t=e.data.receipt;a.setState({receiptData:t,customer_name:t.customer_name,onsite_amount:t.onsite_amount,mobile_number:t.mobile_number,plate_number:t.plate_number,reservation_id:t.reservation_id,passengers:t.passengers,id:t.id,vendor_id:t.vendor_id,slot:t.parking?t.parking.display_slot:null,parking_lot_id:t.parking?t.parking.parking_lot_id:null,oldSlot:t.parking?t.parking.display_slot:null,car_type_id:t.car_type_id,checkout:new Date(t.pick_up_time),checkin:new Date(t.reservation_time),extra_passenger_charges:t.extra_passenger_charges,total_amount:t.total_amount,overstay_charges:t.overstay_charges,payment_mode:t.payment_mode,days:t.days,overstay_days:t.overstay_days,timeout:new Date(t.pick_up_time),reservation_charges:t.reservation_charges,timein:new Date(t.reservation_time),booking_time:new Date(t.booking_time)});var s=v()(new Date),c=v()(new Date(t.reservation_time)).subtract(1,"day");a.setState({disablePastDt:function(e){return e.isAfter(s)},disablePastDts:function(e){return e.isAfter(c)}}),t.reservation_id?a.setState({reservation:"Yes"}):a.setState({reservation:"No"})}})),a.submit=a.submit.bind(Object(r.a)(a)),a.onChange=a.onChange.bind(Object(r.a)(a)),a.calculate=a.calculate.bind(Object(r.a)(a)),a.getCarType=a.getCarType.bind(Object(r.a)(a)),a.onSlotIdChange=a.onSlotIdChange.bind(Object(r.a)(a)),a.timer=null,a}return Object(i.a)(s,[{key:"validMobileNumber",value:function(e){return!/^\d{10}$/.test(e)}},{key:"onChange",value:function(e){var t=this;e.preventDefault();var s=e.target,a=s.name,n=s.value,i=this.state.errors;switch(a){case"customer_name":i.customer_name=n.length<2?"Name is required":"";break;case"plate_number":i.plate_number=n.length<2?"Plate number is required":"";break;case"reservation_id":i.reservation_id=n.length<2?"Reservation id is required":"";break;case"mobile_number":i.mobile_number=n.length<2||this.validMobileNumber(n)?"Valid Mobile number is required":"";break;case"passengers":i.passengers=0==n.length?"Passenger is required":""}this.setState(Object(c.a)({errors:i},a,n),(function(){"vendor_id"==a&&t.setState({onsite_amount:0}),setTimeout((function(){return t.calculate()}),100),t.setState({errors:i}),""===i.customer_name&&""!=t.state.customer_name&&""===i.onsite_amount&&""===i.mobile_number&&""!=t.state.mobile_number&&""===i.plate_number&&""!=t.state.plate_number&&""===i.reservation_id&&t.setState({isDisabled:!1})}))}},{key:"getCarType",value:function(){var e=this;Object(u.a)({},"cartype/"+this.state.car_type_id,"",2).then((function(t){200==t.status&&200===t.data.status&&e.setState({carType:t.data.carType})}))}},{key:"calculate",value:function(){var e=this,t=this.state.receiptData,s=this.state.carTypes.find((function(t){return t.id==e.state.car_type_id})),a=parseInt(this.state.onsite_amount)||0,c=0,n=null;this.state.vendor_id&&(n=this.state.vendors.find((function(t){return t.id==e.state.vendor_id})));var i,r,l=this.state,o=v()(l.checkin).format("YYYY-MM-DD"),h=v()(l.checkout).format("YYYY-MM-DD"),d=v()(l.timein).format("HH:mm:ss"),u=v()(l.timeout).format("HH:mm:ss"),b=v()(o+d,"YYYY-MM-DDLT").format("YYYY-MM-DD HH:mm:ss"),p=v()(h+u,"YYYY-MM-DDLT").format("YYYY-MM-DD HH:mm:ss"),j=new Date(b)||new Date,m=null,g=new Date(p);if(m=null==t.booking_time?null:new Date(t.booking_time),!g)return{val:null,msg:"Pick-up time is missing."};var _,O=0,x=0;if(m&&m<j&&(O=this.calculateDays(m,j)),n?s.onsite_charges&&(x=s.onsite_charges):x=s.regular_charges,(r=this.calculateDays(j,g))<=0)return{val:null,msg:"Invlid reservation and(or) pick-up time."};i=r*x,_=O*s.regular_charges,l.passengers>4&&(c=10*(l.passengers-4));var y=t.parking;if(!y)return{val:null,msg:"Parking slot unavailable."};t.extra_passenger_charges=c,t.calculated_charges=i+0,t.pre_booking_charges=_,t.pre_booking_days=O,t.total_amount=i+c+parseInt(a)+_,t.parking_id=y.id,t.onsite_amount=a,t.passengers=this.state.passengers,t.carType=s,t.vendor=n,t.days=r,t.payment_mode=this.state.payment_mode,t.overstay_charges=0,t.overstay_days=0,t.hours=0,this.setState({receiptData:t})}},{key:"onSlotIdChange",value:function(e){var t=this;if(this.setState({slot:e.target.value,saveDisabled:!0}),clearTimeout(this.timer),e.target.value==this.state.oldSlot)return this.setState({slotMessage:{},saveDisabled:!1});this.timer=setTimeout((function(){Object(u.a)({params:{slot:t.state.slot,parkingLotId:t.state.parking_lot_id}},"parking/parkingSlotStatus","",2).then((function(e){if(200==e.status&&200===e.data.status){var s=e.data.slot;return"vacant"==s?t.setState({slotMessage:{success:!0,msg:"Slot is vacant"},saveDisabled:!1}):"occupied"==s?t.setState({slotMessage:{success:!1,msg:"Slot is Occupied"},saveDisabled:!0}):t.setState({slotMessage:{success:!1,msg:"Invalid slot number"},saveDisabled:!0})}return t.setState({slotMessage:{success:!1,msg:"Something went wrong"},saveDisabled:!0})}))}),1e3)}},{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.state.is_checked_out)this.state.time;var s={},a=this.state,c=v()(a.checkin).format("YYYY-MM-DD"),n=v()(a.checkout).format("YYYY-MM-DD"),i=v()(a.timein).format("HH:mm:ss"),r=v()(a.timeout).format("HH:mm:ss"),l=v()(c+i,"YYYY-MM-DDLT");console.log(l);var o=l.format("YYYY-MM-DD HH:mm:ss"),h=v()(n+r,"YYYY-MM-DDLT").format("YYYY-MM-DD HH:mm:ss");(s=this.state.receiptData).reservation_time=new Date(o).toJSON(),s.pick_up_time=new Date(h).toJSON(),s.customer_name=this.state.customer_name,s.mobile_number=this.state.mobile_number,s.car_type_id=this.state.car_type_id,s.reservation_id=this.state.reservation_id,s.plate_number=this.state.plate_number,s.passengers=this.state.passengers,s.slot=this.state.slot,s.oldSlot=this.state.oldSlot;Object(u.a)(s,"booking/editbooking","",3).then((function(e){if(200==e.status&&200===e.data.status)return t.props.history.push({pathname:"/checkout/checkout_receipt/"+t.state.id})}))}},{key:"createElements",value:function(e){for(var t=[],s=1;s<=e;s++)t.push(Object(a.jsxs)("option",{value:s,children:[s," "]}));return t}},{key:"onChangeEdit",value:function(e){var t=this;this.setState({payment_mode:e},(function(){setTimeout((function(){return t.calculate()}),100)}))}},{key:"render",value:function(){var e,t=this,s=this.state,c=(s.isLoaded,s.carTypes),n=s.vendors,i=s.errors;return Object(a.jsxs)("div",{class:"dc-wrap edit-plate-number",children:[Object(a.jsxs)("div",{class:"dc-header",children:[Object(a.jsx)("div",{class:"dch-left",children:Object(a.jsx)("h3",{class:"dc-head",children:"Plate Number"})}),Object(a.jsx)("div",{class:"dch-right"})]}),Object(a.jsxs)("div",{class:"dc-body",children:[Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Customer's name"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",name:"customer_name",onKeyDown:this._handleKeyDown,onChange:this.onChange,value:this.state.customer_name}),i.customer_name.length>0&&Object(a.jsx)("span",{className:"error",children:i.customer_name})]}),Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Mobile No."}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",name:"mobile_number",onKeyDown:this._handleKeyDown,onChange:this.onChange,value:this.state.mobile_number}),i.mobile_number.length>0&&Object(a.jsx)("span",{className:"error",children:i.mobile_number})]})]}),Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Car Type"}),Object(a.jsxs)("div",{class:"sc-select-wrap",children:[Object(a.jsxs)("select",{class:"sc-custom-form",name:"car_type_id",value:this.state.car_type_id,onKeyDown:this._handleKeyDown,onChange:this.onChange,children:[Object(a.jsx)("option",{value:"",children:"Select"}),"  ",c.length>0?c.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.type})})):""]}),Object(a.jsx)("span",{class:"ion-ios-arrow-down select-drop-icon"})]}),i.car_type_id.length>0&&Object(a.jsx)("span",{className:"error",children:i.car_type_id})]}),Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Reservation Status"}),Object(a.jsxs)("div",{class:"sc-select-wrap",children:[Object(a.jsxs)("select",{disabled:!0,class:"sc-custom-form",name:"reservation",value:this.state.reservation,onKeyDown:this._handleKeyDown,onChange:this.onChange,children:[Object(a.jsx)("option",{value:"Yes",children:"Yes"}),Object(a.jsx)("option",{value:"No",children:"No"})]}),Object(a.jsx)("span",{class:"ion-ios-arrow-down select-drop-icon"})]})]})]}),null==this.state.reservation_id||""==this.state.reservation_id?Object(a.jsx)("div",{class:"sc-input-wrap",children:Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Plate Number"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",value:this.state.plate_number,name:"plate_number",onKeyDown:this._handleKeyDown,onChange:this.onChange}),i.plate_number.length>0&&Object(a.jsx)("span",{className:"error",children:i.plate_number})]})}):Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Reservation ID"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",name:"reservation_id",onKeyDown:this._handleKeyDown,onChange:this.onChange,value:this.state.reservation_id}),i.reservation_id.length>0&&Object(a.jsx)("span",{className:"error",children:i.reservation_id})]}),Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Plate Number"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",value:this.state.plate_number,name:"plate_number",onKeyDown:this._handleKeyDown,onChange:this.onChange}),i.plate_number.length>0&&Object(a.jsx)("span",{className:"error",children:i.plate_number})]})]}),""!==this.state.receiptData.reservation_id?Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[this.state.receiptData.vendor&&1==this.state.receiptData.vendor.onsie_charge_applicable?Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Onsite Amount Paid"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",value:this.state.onsite_amount,name:"onsite_amount",onKeyDown:this._handleKeyDown,onChange:this.onChange}),i.onsite_amount.length>0&&Object(a.jsx)("span",{className:"error",children:i.onsite_amount})]}):"",Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"No. of Passengers"}),Object(a.jsxs)("div",{class:"sc-select-wrap",children:[Object(a.jsxs)("select",{class:"sc-custom-form",value:this.state.passengers,name:"passengers",onKeyDown:this._handleKeyDown,onChange:this.onChange,children:[Object(a.jsx)("option",{children:"Select"}),this.createElements(10)]}),Object(a.jsx)("span",{class:"ion-ios-arrow-down select-drop-icon"})]}),Object(a.jsx)("p",{class:"sc-notice sc-error",children:"Additional Charges will apply on Passengers above 4."}),i.passengers.length>0&&Object(a.jsx)("span",{className:"error",children:i.passengers})]})]}):Object(a.jsx)("div",{class:"sc-input-wrap ",children:Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"No. of Passengers"}),Object(a.jsxs)("div",{class:"sc-select-wrap",children:[Object(a.jsxs)("select",{class:"sc-custom-form",value:this.state.passengers,name:"passengers",onKeyDown:this._handleKeyDown,onChange:this.onChange,children:[Object(a.jsx)("option",{children:"Select"}),this.createElements(10)]}),Object(a.jsx)("span",{class:"ion-ios-arrow-down select-drop-icon"})]}),Object(a.jsx)("p",{class:"sc-notice sc-error",children:"Additional Charges will apply on Passengers above 4."}),i.passengers.length>0&&Object(a.jsx)("span",{className:"error",children:i.passengers})]})}),null==this.state.vendor_id||""==this.state.vendor_id?"":Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{class:"sc-input-wrap sc-one-by-two",children:[Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Vendor Name"}),Object(a.jsxs)("div",{class:"sc-select-wrap",children:[Object(a.jsxs)("select",{class:"sc-custom-form",value:this.state.vendor_id,name:"vendor_id",onKeyDown:this._handleKeyDown,onChange:this.onChange,children:[Object(a.jsx)("option",{children:"Select"}),n.length>0?n.map((function(e,t){return Object(a.jsx)("option",{value:e.id,children:e.name})})):""]}),Object(a.jsx)("span",{class:"ion-ios-arrow-down select-drop-icon"}),i.vendor_id.length>0&&Object(a.jsx)("span",{className:"error",children:i.vendor_id})]})]}),Object(a.jsxs)("div",{class:"sc-input",children:[Object(a.jsx)("label",{class:"sc-label",children:"Booking Date"}),Object(a.jsx)("div",{class:"sc-select-wrap",children:Object(a.jsx)("input",{type:"text",class:"sc-custom-form",value:v()(this.state.booking_time).format("DD/MM/YYYY")})})]})]})}),Object(a.jsxs)("div",{class:"card-by-card",children:[Object(a.jsxs)("div",{class:"card-left card-w-70",children:[Object(a.jsxs)("div",{class:"sc-input-wrap sc-bg-gray",children:[Object(a.jsx)("label",{class:"sc-label",children:"Date & Time"}),Object(a.jsx)("div",{class:"sc-input",children:Object(a.jsxs)("div",{class:"one-row-by-two",children:[Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Check-In Date"}),Object(a.jsx)(p.a,{dateFormat:!0,input:!1,open:!0,isValidDate:this.state.disablePastDt,value:this.state.checkin,onChange:this._onInputChangeIn,timeFormat:!1})]}),Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Check-Out Date"}),Object(a.jsx)(p.a,{dateFormat:!0,input:!1,open:!0,isValidDate:this.state.disablePastDts,value:this.state.checkout,onChange:this._onInputChangeOut,timeFormat:!1})]})]})}),Object(a.jsx)("div",{class:"sc-input",children:Object(a.jsxs)("div",{class:"one-row-by-two",children:[Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Check-In Time"}),Object(a.jsx)(p.a,{dateFormat:!1,input:!1,open:!0,value:this.state.timein,onChange:this._onInputChangeTimein,timeFormat:!0})]}),Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Check-Out Time"}),Object(a.jsx)(p.a,{dateFormat:!1,input:!1,open:!0,value:this.state.timeout,onChange:this._onInputChangeTimeout,timeFormat:!0})]})]})})]}),Object(a.jsxs)("div",{class:"dc-header",children:[Object(a.jsx)("div",{class:"dch-left",children:Object(a.jsx)("h3",{class:"dc-head",children:"Payment Mode"})}),Object(a.jsx)("div",{class:"dch-right toggle-btn",children:"Cash"==this.state.payment_mode?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",class:"pp-custom-btn",children:"Cash"}),Object(a.jsx)("button",{type:"button",class:"pp-custom-btn pp-deactive",onClick:function(){return t.onChangeEdit("Card")},children:"Card"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",class:"pp-custom-btn pp-deactive",onClick:function(){return t.onChangeEdit("Cash")},children:"Cash"}),Object(a.jsx)("button",{type:"button",class:"pp-custom-btn",children:"Card"})]})})]}),Object(a.jsx)("div",{class:"sc-input-wrap sc-bg-gray",children:Object(a.jsx)("div",{class:"sc-input",children:Object(a.jsxs)("div",{class:"one-row-by-two",children:[Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Ticket ID"}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",readOnly:!0,value:this.state.id})]}),Object(a.jsxs)("div",{class:"sc-input-col",children:[Object(a.jsx)("label",{class:"sc-label",children:"Slot No."}),Object(a.jsx)("input",{type:"text",class:"sc-custom-form",value:this.state.slot?this.state.slot:"",onChange:this.onSlotIdChange}),Object(a.jsx)("div",{className:this.state.slotMessage.success?"success":"error",children:null===(e=this.state.slotMessage)||void 0===e?void 0:e.msg})]})]})})})]}),Object(a.jsx)("div",{class:"card-right card-w-30",children:Object(a.jsxs)("div",{class:"sc-bg-white",children:[Object(a.jsxs)("div",{class:"cpanel-header",children:[Object(a.jsx)("h4",{children:"Billing Details"}),Object(a.jsx)("div",{class:"cpanel-logo",children:Object(a.jsx)("img",{src:j.a})})]}),Object(a.jsxs)("div",{class:"cpanel-body",children:[Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsx)("div",{class:"cr-left",children:Object(a.jsx)("p",{children:"Onsite amount charges"})}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData.onsite_amount?this.state.receiptData.onsite_amount:0]})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Parking Charges "}),Object(a.jsx)("small",{children:""==this.state.receiptData.reservation_id?this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," +",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," +",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.hourly_overstay_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges]})}),Object(a.jsxs)("small",{children:[" (",this.state.receiptData.carType&&this.state.receiptData.carType.type?" "+this.state.receiptData.carType.type:""," )"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.calculated_charges?this.state.receiptData.calculated_charges:0})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsxs)("p",{children:[" ",(Math.sign(this.state.receiptData.overstay_days),"Overstay charges")]}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.overstay_days," days)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.overstay_charges?this.state.receiptData.overstay_charges:0})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Extra Passenger Fees"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.passengers," Passengers)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.extra_passenger_charges?this.state.receiptData.extra_passenger_charges:0})})]}),this.state.receiptData.pre_booking_days>0?Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Early Check-in Charges"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.pre_booking_days," Days * $",this.state.receiptData.carType.regular_charges,")"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.pre_booking_charges?this.state.receiptData.pre_booking_charges:0})})]}):""]}),Object(a.jsx)("div",{class:"cpanel-footer",children:Object(a.jsxs)("div",{class:"cpanel-row cp-bg",children:[Object(a.jsx)("div",{class:"cr-left",children:Object(a.jsx)("p",{children:"Total amount to pay"})}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsxs)("h4",{children:["$ ",this.state.receiptData.total_amount]})})]})})]})})]})]}),Object(a.jsx)("div",{class:"dc-footer",children:Object(a.jsx)("button",{type:"button",disabled:this.state.saveDisabled,onClick:this.submit,class:"pp-custom-btn",children:"Save"})})]})}}]),s}(h.Component);t.default=Object(d.b)((function(e){return e}))(O)}}]);
//# sourceMappingURL=41.cf7c9740.chunk.js.map