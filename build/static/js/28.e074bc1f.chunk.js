(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1039:function(e,t,s){"use strict";s.r(t);var a=s(12),c=s(26),i=s(27),r=s(29),l=s(30),d=s(1),n=s(215),h=s(736),j=s(772),o=s(741),p=s(738),b=s.n(p),x=s(64),O=s.n(x),m=s(773),u=s.n(m),v=s(990),g=s.n(v),D=s(810),y=s.n(D),_=s(998),f=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var a;Object(c.a)(this,s),(a=t.call(this,e)).toggle=function(){O()(".custom-select").hasClass("active")?O()(".custom-select").removeClass("active"):O()(".custom-select").addClass("active")},a.state={id:a.props.match.params.id?a.props.match.params.id:"",receiptData:{},customer_receipt:!0,office_receipt:!0,vechile_receipt:!0,days:0,type:"All"};Object(h.a)({},"booking/receipt/"+a.state.id,"",2).then((function(e){200==e.status&&200===e.data.status&&a.setState({receiptData:e.data.receipt})}));return a.PoliciesData(),a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){O()(document).ready((function(){O()("#recieptprint").on("click",(function(){var e=this;y()(document.querySelector("#capture"),{scale:"1"}).then((function(t){t.style.width="396px",t.style.height="560px",O()("#mbody").html(t),e.imgFile=t.toDataURL("image/jpeg",.3);var s=new _.a("p","mm","a6",!0);s.addImage(e.imgFile,"JPEG",5,0,91,132,void 0,"FAST"),s.save("vehicle_receipt.pdf"),O()("#openmodalbutton").click()})),y()(document.querySelector(".page"),{scale:"1"}).then((function(e){}))}))}))}},{key:"rawMarkup",value:function(){var e=this.state.PrivacyPolicy;return{__html:e}}},{key:"PoliciesData",value:function(){var e=this,t={};console.log(t);Object(h.a)(t,"parking/privacypolicy","",2).then((function(t){200==t.status&&200===t.data.status&&(console.log(t.data.data),e.setState({PrivacyPolicy:t.data.policy}))}))}},{key:"onChangeOptions",value:function(e){"All"==e?this.setState({customer_receipt:!0,office_receipt:!0,vechile_receipt:!0,type:"All"}):"customer_receipt"==e?this.setState({customer_receipt:!0,office_receipt:!1,vechile_receipt:!1,type:"Office & Customer Receipt"}):"office_receipt"==e?this.setState({customer_receipt:!1,office_receipt:!0,vechile_receipt:!1,type:"Office Receipt"}):"vechile_receipt"==e&&O()("#recieptprint").click()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"dashboard-content",ref:function(t){return e.componentRef=t},children:[Object(a.jsxs)("div",{class:"row dc-wrap-0 check-in-receipt updated",children:[Object(a.jsxs)("div",{class:"dch-right",children:[Object(a.jsx)(u.a,{trigger:function(){return Object(a.jsxs)("button",{className:"print-btn",children:[Object(a.jsx)("img",{alt:"printLogo",src:j.a}),"Print"]})},content:function(){return e.componentRef}}),Object(a.jsxs)("div",{class:"custom-select",children:[Object(a.jsxs)("div",{class:"select-field",children:[Object(a.jsx)("p",{class:"select-value",children:this.state.type}),Object(a.jsx)("span",{className:"ion-ios-arrow-down",onClick:this.toggle})]}),Object(a.jsx)("div",{class:"select-field-list",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{onClick:function(){return e.onChangeOptions("All")},children:"All"}),Object(a.jsx)("li",{onClick:function(){return e.onChangeOptions("customer_receipt")},children:"Office & Customer Receipt"}),Object(a.jsx)("li",{onClick:function(){return e.onChangeOptions("vechile_receipt")},children:"Vehicle Receipt"})]})})]})]}),this.state.customer_receipt?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{class:"col30",children:[Object(a.jsxs)("div",{class:"sub-card updated",children:[Object(a.jsx)("div",{class:"sub-card-header",children:Object(a.jsx)("h4",{class:"sub-card-head",children:"Office's Receipt"})}),Object(a.jsxs)("div",{class:"card-by-card",children:[Object(a.jsx)("div",{class:"card-left card-w-60 mr-1",children:Object(a.jsxs)("div",{class:"sc-bg-white",children:[Object(a.jsxs)("div",{class:"card-header",children:[Object(a.jsx)("h4",{children:"Prime Park Receipt"}),Object(a.jsx)("p",{children:"206 S Weller St, Seattle, WA 98104, United States"}),Object(a.jsx)("div",{class:"ch-extra",children:Object(a.jsxs)("div",{class:"extra-item",children:[Object(a.jsx)("span",{class:"ion-ios-telephone-outline"}),Object(a.jsx)("p",{children:"+918298738900"})]})}),Object(a.jsxs)("div",{class:"date-data",children:[Object(a.jsxs)("div",{class:"date-left",children:[Object(a.jsx)("span",{children:"From-"}),this.state.receiptData&&this.state.receiptData.reservation_time?b()(this.state.receiptData.reservation_time).format("DD/MM/YYYY"):""]})," ",Object(a.jsxs)("div",{class:"date-right",children:[" ",Object(a.jsx)("span",{children:" To-"}),this.state.receiptData&&this.state.receiptData.pick_up_time?b()(this.state.receiptData.pick_up_time).format("DD/MM/YYYY"):""]})]})]}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsxs)("div",{class:"card-summary",children:[Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Name"}),Object(a.jsx)("h4",{children:this.state.receiptData.customer_name?this.state.receiptData.customer_name:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Passenger"}),Object(a.jsx)("h4",{children:this.state.receiptData.passengers?this.state.receiptData.passengers:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Phone number"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.mobile_number?this.state.receiptData.mobile_number:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Ticket ID"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.id?this.state.receiptData.id:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Plate number"}),Object(a.jsx)("h4",{children:this.state.receiptData.plate_number?this.state.receiptData.plate_number:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Payment"}),Object(a.jsx)("h4",{children:this.state.receiptData.payment_mode?this.state.receiptData.payment_mode:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Slot Number"}),Object(a.jsx)("h4",{children:this.state.receiptData.parking&&this.state.receiptData.parking.display_slot?this.state.receiptData.parking.display_slot:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box-left card-w-50",children:[Object(a.jsx)("p",{children:"Amount Paid"}),Object(a.jsxs)("h4",{children:["$"," ",this.state.receiptData&&this.state.receiptData.total_amount?this.state.receiptData.total_amount:"0"]})]})]})})]})}),Object(a.jsx)("div",{className:"card-right card-w-50",children:Object(a.jsxs)("div",{className:"sc-bg-white",children:[Object(a.jsxs)("div",{className:"cpanel-header",children:[Object(a.jsx)("h4",{children:"Billing Details"}),Object(a.jsx)("div",{className:"cpanel-logo",children:Object(a.jsx)("img",{src:o.a})})]}),Object(a.jsxs)("div",{className:"cpanel-body",children:[Object(a.jsxs)("div",{className:"cpanel-row",children:[Object(a.jsx)("div",{className:"cr-left",children:Object(a.jsx)("p",{children:"Onsite amount charges"})}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData&&this.state.receiptData.onsite_amount?this.state.receiptData.onsite_amount:"0"]})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Parking Charges "}),Object(a.jsx)("small",{children:""==this.state.receiptData.reservation_id?this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days *"," ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," ","+",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days *"," ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," ","+",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.hourly_overstay_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges]})}),Object(a.jsxs)("small",{children:[" ","(",this.state.receiptData.carType&&this.state.receiptData.carType.type?" "+this.state.receiptData.carType.type:""," ",")"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.calculated_charges?this.state.receiptData.calculated_charges:0})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsxs)("p",{children:[" ",1==Math.sign(this.state.receiptData.overstay_days)?"Overstay charges":"Early return"]}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.overstay_days," days)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData.overstay_charges?this.state.receiptData.overstay_charges:0]})})]}),Object(a.jsxs)("div",{className:"cpanel-row",children:[Object(a.jsxs)("div",{className:"cr-left",children:[Object(a.jsx)("p",{children:"Extra Passenger Fees"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.passengers," Passengers)"]})]}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData&&this.state.receiptData.extra_passenger_charges?this.state.receiptData.extra_passenger_charges:"0"]})})]}),this.state.receiptData.pre_booking_days>0?Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Early Check-in Charges"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.pre_booking_days," ","Days)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.pre_booking_charges?this.state.receiptData.pre_booking_charges:0})})]}):""]}),Object(a.jsx)("div",{className:"cpanel-footer",children:Object(a.jsxs)("div",{className:"cpanel-row cp-bg",children:[Object(a.jsx)("div",{className:"cr-left",children:Object(a.jsx)("p",{children:"Total amount to pay"})}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsxs)("h4",{children:["$"," ",this.state.receiptData&&this.state.receiptData.total_amount?this.state.receiptData.total_amount:"0"]})})]})})]})})]})]}),Object(a.jsxs)("div",{class:"term-condition-box updated",children:[Object(a.jsx)("div",{class:"tc-header",children:Object(a.jsx)("h4",{class:"tc-head",children:"Terms & Conditions"})}),Object(a.jsx)("div",{class:"tc-body",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"1."}),"Your reservation will be subject to Parking hourly and daily rate as soon as the voucher is expired. The hourly rate is 10/hour and the daily rate is $15 for small cars and $18 for SUV/ Trucks per day."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"2."}),"This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"3."}),"For all Canceled online vouchers/Reservation customers are required to pay for one day of parking and a $10 service fee."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"4."}),"This facility does not allow online reservation extensions. Additional time must be paid on-site at a regular rate."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"5."}),"Customer is required to take pictures of their vehicles (all sides) at the location during drop-off and also agree that no damage claim can be filed without providing those pictures."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"6."}),"Customer must leave the car key to the attendant and agree that failure to do so may result to towing fees from $75 to $150."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"7."}),"Customer agree that all balance must be paid in full prior to retrieval of vehicle."]})]})}),Object(a.jsx)("div",{class:"tc-footer",children:Object(a.jsxs)("div",{class:"tcf-left",children:[Object(a.jsxs)("div",{class:"check-condition active",children:[Object(a.jsx)("span",{class:"check-mark",children:Object(a.jsx)("i",{class:"ion-ios-checkmark-empty"})}),Object(a.jsx)("p",{class:"condition-text",children:"I accept the Terms & Conditions"})]}),Object(a.jsx)("div",{class:"sign-field",children:Object(a.jsx)("h3",{children:"Customer's Signature ______________________ "})})]})}),Object(a.jsx)("div",{class:"tcf-right"})]})]}),Object(a.jsxs)("div",{class:"col30",children:[Object(a.jsx)("div",{class:"dc-header",children:Object(a.jsx)("h3",{class:"dc-head",children:"Customer's Receipt"})}),Object(a.jsxs)("div",{class:"card-by-card",children:[Object(a.jsx)("div",{class:"card-left card-w-60 mr-1",children:Object(a.jsxs)("div",{class:"sc-bg-white",children:[Object(a.jsxs)("div",{class:"card-header",children:[Object(a.jsx)("h4",{children:"Prime Park Receipt"}),Object(a.jsx)("p",{children:"206 S Weller St, Seattle, WA 98104, United States"}),Object(a.jsx)("div",{class:"ch-extra",children:Object(a.jsxs)("div",{class:"extra-item",children:[Object(a.jsx)("span",{class:"ion-ios-telephone-outline"}),Object(a.jsx)("p",{children:"+918298738900"})]})}),Object(a.jsxs)("div",{class:"date-data",children:[Object(a.jsxs)("div",{class:"date-left",children:[Object(a.jsx)("span",{children:"From-"}),this.state.receiptData&&this.state.receiptData.reservation_time?b()(this.state.receiptData.reservation_time).format("DD/MM/YYYY"):""]})," ",Object(a.jsxs)("div",{class:"date-right",children:[" ",Object(a.jsx)("span",{children:" To-"}),this.state.receiptData&&this.state.receiptData.pick_up_time?b()(this.state.receiptData.pick_up_time).format("DD/MM/YYYY"):""]})]})]}),Object(a.jsx)("div",{class:"card-body h-230",children:Object(a.jsxs)("div",{class:"card-summary-right",children:[Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Name"}),Object(a.jsx)("h4",{children:this.state.receiptData.customer_name?this.state.receiptData.customer_name:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Vendor"}),Object(a.jsx)("h4",{children:this.state.receiptData.vendor&&this.state.receiptData.vendor.name?this.state.receiptData.vendor.name:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Passenger"}),Object(a.jsx)("h4",{children:this.state.receiptData.passengers?this.state.receiptData.passengers:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Phone number"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.mobile_number?this.state.receiptData.mobile_number:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Reservation ID"}),Object(a.jsx)("h4",{children:this.state.receiptData.reservation_id?this.state.receiptData.reservation_id:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Plate number"}),Object(a.jsx)("h4",{children:this.state.receiptData.plate_number?this.state.receiptData.plate_number:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Ticket ID"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.id?this.state.receiptData.id:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Slot Number"}),Object(a.jsx)("h4",{children:this.state.receiptData.parking&&this.state.receiptData.parking.display_slot?this.state.receiptData.parking.display_slot:"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Payment"}),Object(a.jsx)("h4",{children:"Cash"})]})]})}),Object(a.jsx)("div",{class:"card-footer",children:Object(a.jsxs)("div",{class:"card-summary",children:[Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Check-In Time"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.reservation_time?b()(this.state.receiptData.reservation_time).format("hh:mm a"):"NA"})]}),Object(a.jsxs)("div",{class:"card-sum-box card-w-50",children:[Object(a.jsx)("p",{children:"Check-Out Time"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.pick_up_time?b()(this.state.receiptData.pick_up_time).format("hh:mm a"):"NA"})]})]})})]})}),Object(a.jsx)("div",{className:"card-right card-w-50",children:Object(a.jsxs)("div",{className:"sc-bg-white",children:[Object(a.jsxs)("div",{className:"cpanel-header",children:[Object(a.jsx)("h4",{children:"Billing Details"}),Object(a.jsx)("div",{className:"cpanel-logo",children:Object(a.jsx)("img",{src:o.a})})]}),Object(a.jsxs)("div",{className:"cpanel-body",children:[Object(a.jsxs)("div",{className:"cpanel-row",children:[Object(a.jsx)("div",{className:"cr-left",children:Object(a.jsx)("p",{children:"Onsite amount charges"})}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData&&this.state.receiptData.onsite_amount?this.state.receiptData.onsite_amount:"0"]})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Parking Charges "}),Object(a.jsx)("small",{children:""==this.state.receiptData.reservation_id?this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days *"," ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," ","+",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.regular_charges]}):this.state.receiptData.hours>0?Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days *"," ",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges," ","+",this.state.receiptData.hours,"hr *",this.state.receiptData.carType&&this.state.receiptData.carType.hourly_overstay_charges]}):Object(a.jsxs)(a.Fragment,{children:[this.state.receiptData.days," days * $",this.state.receiptData.carType&&this.state.receiptData.carType.onsite_charges]})}),Object(a.jsxs)("small",{children:[" ","(",this.state.receiptData.carType&&this.state.receiptData.carType.type?" "+this.state.receiptData.carType.type:""," ",")"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.calculated_charges?this.state.receiptData.calculated_charges:0})})]}),Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsxs)("p",{children:[" ",(Math.sign(this.state.receiptData.overstay_days),"Overstay charges")]}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.overstay_days," days)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsxs)("h4",{children:[" ",this.state.receiptData.overstay_charges?this.state.receiptData.overstay_charges:0]})})]}),Object(a.jsxs)("div",{className:"cpanel-row",children:[Object(a.jsxs)("div",{className:"cr-left",children:[Object(a.jsx)("p",{children:"Extra Passenger Fees"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.passengers," Passengers)"]})]}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.extra_passenger_charges?this.state.receiptData.extra_passenger_charges:"0"})})]}),this.state.receiptData.pre_booking_days>0?Object(a.jsxs)("div",{class:"cpanel-row",children:[Object(a.jsxs)("div",{class:"cr-left",children:[Object(a.jsx)("p",{children:"Early Check-in Charges"}),Object(a.jsxs)("small",{children:["(",this.state.receiptData.pre_booking_days," Days)"]})]}),Object(a.jsx)("div",{class:"cr-right",children:Object(a.jsx)("h4",{children:this.state.receiptData.pre_booking_charges?this.state.receiptData.pre_booking_charges:0})})]}):""]}),Object(a.jsx)("div",{className:"cpanel-footer",children:Object(a.jsxs)("div",{className:"cpanel-row cp-bg",children:[Object(a.jsx)("div",{className:"cr-left",children:Object(a.jsx)("p",{children:"Total amount to pay"})}),Object(a.jsx)("div",{className:"cr-right",children:Object(a.jsxs)("h4",{children:["$"," ",this.state.receiptData&&this.state.receiptData.total_amount?this.state.receiptData.total_amount:"0"]})})]})})]})})]}),Object(a.jsxs)("div",{class:"term-condition-box",children:[Object(a.jsxs)("div",{class:"tc-header",children:[Object(a.jsx)("button",{type:"button",class:"btn btn-primary btn-lg",id:"openmodalbutton","data-toggle":"modal","data-target":"#canvasModal",style:{display:"none"},children:"Open Modal Dialog"}),Object(a.jsx)("h4",{class:"tc-head",children:"Terms & Conditions"})]}),Object(a.jsx)("div",{class:"tc-body",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"1."}),"Your reservation will be subject to Parking hourly and daily rate as soon as the voucher is expired. The hourly rate is 10/hour and the daily rate is $15 for small cars and $18 for SUV/ Trucks per day."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"2."}),"This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"3."}),"For all Canceled online vouchers/Reservation customers are required to pay for one day of parking and a $10 service fee."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"4."}),"This facility does not allow online reservation extensions. Additional time must be paid on-site at a regular rate."]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"5."}),"Customer is required to take pictures of their vehicles (all sides) at the location during drop-off and also agree that no damage claim can be filed without providing those pictures."]})]})})]}),Object(a.jsx)("div",{style:{textAlign:"center",margin:"10px",background:"white",padding:"10px"},children:Object(a.jsx)(g.a,{size:"64",value:"http://ec2-44-201-80-160.compute-1.amazonaws.com/#/search"})})]}),this.state.vechile_receipt?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("button",{style:{display:"none"},id:"recieptprint",children:"Print"}),Object(a.jsx)("div",{id:"capture",class:"col30",children:Object(a.jsxs)("div",{class:"sub-card updated vehicle-spacing",children:[Object(a.jsx)("div",{class:"sub-card-header",children:Object(a.jsx)("h4",{class:"sub-card-head",children:"Vehicle's Receipt"})}),Object(a.jsx)("div",{class:"card-by-card slot-card",children:Object(a.jsx)("div",{class:"card-left mr-1",children:Object(a.jsxs)("div",{class:"sc-bg-white",children:[Object(a.jsxs)("div",{class:"card-header",children:[Object(a.jsx)("h4",{children:"Prime Park JFK"}),Object(a.jsx)("p",{children:"15115 Lefferts Blvd South Ozone Park NY 11420"}),Object(a.jsx)("div",{class:"ch-extra",children:Object(a.jsxs)("div",{class:"extra-item",children:[Object(a.jsx)("span",{class:"ion-ios-telephone-outline"}),Object(a.jsx)("p",{children:"+918298738900"})]})}),Object(a.jsx)("div",{class:"reserve-data",children:Object(a.jsx)("h4",{class:"bold",children:this.state.receiptData.parking&&this.state.receiptData.parking.display_slot?this.state.receiptData.parking.display_slot:"NA"})}),Object(a.jsxs)("div",{class:"reserve-data",children:[Object(a.jsx)("p",{class:"light",children:"Pickup : Date"}),Object(a.jsxs)("h4",{class:"bold",children:[this.state.receiptData.parking&&this.state.receiptData.pick_up_time?b()(this.state.receiptData.pick_up_time).format("MM/DD/YYYY"):"NA",Object(a.jsx)("p",{})]})]})]}),Object(a.jsxs)("div",{class:"card-body ",children:[Object(a.jsx)("div",{class:"card-data "}),Object(a.jsxs)("div",{class:"card-data",children:[Object(a.jsxs)("div",{class:"card-block",children:[Object(a.jsx)("p",{children:"Name"}),Object(a.jsx)("h4",{children:this.state.receiptData.customer_name?this.state.receiptData.customer_name:"NA"})]}),Object(a.jsxs)("div",{class:"card-block",children:[Object(a.jsx)("p",{children:"Vendor"}),Object(a.jsx)("h4",{children:this.state.receiptData.vendor&&this.state.receiptData.vendor.name?this.state.receiptData.vendor.name:"NA"})]}),Object(a.jsxs)("div",{class:"card-block",children:[Object(a.jsx)("p",{children:"Passenger"}),Object(a.jsx)("h4",{children:this.state.receiptData.parking&&this.state.receiptData.passengers?this.state.receiptData.passengers:"NA"})]}),Object(a.jsxs)("div",{class:"card-block",children:[Object(a.jsx)("p",{children:"Date : From"}),Object(a.jsx)("h4",{children:this.state.receiptData.parking&&this.state.receiptData.reservation_time?b()(this.state.receiptData.reservation_time).format("MM/DD/YYYY"):"NA"})]}),Object(a.jsxs)("div",{class:"card-block",children:[Object(a.jsx)("p",{children:"Phone Number"}),Object(a.jsx)("h4",{children:this.state.receiptData&&this.state.receiptData.mobile_number?this.state.receiptData.mobile_number:"NA"})]})]}),Object(a.jsxs)("div",{class:"reserve-data",children:[Object(a.jsx)("p",{class:"light",children:"Reservation ID"}),Object(a.jsxs)("h4",{class:"bold",children:[this.state.receiptData.reservation_id?this.state.receiptData.reservation_id:"NA",Object(a.jsx)("p",{})]})]})]})]})})})]})})]}):""]}):""]}),Object(a.jsx)("div",{class:"modal fade",id:"canvasModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel",children:Object(a.jsx)("div",{class:"modal-dialog",role:"document",children:Object(a.jsx)("div",{id:"mbody",class:"modal-content"})})})]})}}]),s}(d.Component);t.default=Object(n.b)((function(e){return console.log(e.loginDetails),e}))(f)},772:function(e,t,s){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAaBJREFUWEftVsFxwjAQxBWEDsIzv5gK4g4SfvkFKggdABUkqSD4mR+pAFwB9jO/lJAOzK4jzYBzAkscMzDxzWiYEXe3y0q3Iuo4Io7jBb66d33vuf+W5/lYqomkTYDH2F97guxNBwERy0UgQbfluRDIwJ6EvANClrboGAVaAq0C/0QBjMwUI3OHRRPqes9cs4IfpOVYdEY6bacyIoCvDHizNjpZlT1H5pdPdHp6dxmQACW5NaUzfL6CGaVSD2D12B/LPnIpCRy0S00mwEvQz74zWUtAVAAycQyfFMfxG/cqNRN3+AhAgP9eXjTPHr0GnP1Gd+BEozkDgWkIgQzsaVQhQbnproxgAlVhCHpNSSeBbSMaAWwuFSoSoBE9m36VEW1v/MEpy/KjKIrHQAI8OnsEUosRCXDkmGjteCcRBL5A4CaQAC39ylGbQu2hfQ1Jguf8gHVdK/hEIve9w/HKFmg0R08q//sc1+OUd6COdREEeD+4QiJBERdDHOcmCoQASzVeBIbo8K6FbPr0cfHoOTshKsAMXETefP5B1YiFBM7GG2eoEeB0Xq48AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=28.e074bc1f.chunk.js.map