(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[3],{805:function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=c(t(90)),i=c(t(1)),s=c(t(735)),l=c(t(129)),u=t(974);function c(e){return e&&e.__esModule?e:{default:e}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_LOCAL_URL:"https://ec2-34-234-203-68.compute-1.amazonaws.com/api/v1/",REACT_APP_API_SOCKET:"ws://ec2-34-234-203-68.compute-1.amazonaws.com:5000",REACT_APP_API_URL:"https://ec2-34-234-203-68.compute-1.amazonaws.com/api/v1/",REACT_APP_ENV:"development",REACT_APP_VAPID_KEY:"BH1Xcy0m8guespp3NNhzm3fuI24ajElUX0Xc35Av_cFgseS-EGx1Zcj_YgRtmSuWe0atWA78XF5K9w-erUQEbG8"}).REACT_SPINKIT_NO_STYLES||(t(975),t(976),t(977),t(978),t(979),t(980),t(981),t(982),t(983),t(984),t(985),t(986),t(987),t(988),t(989));var d=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),e.noFadeIn&&console.warn("Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'");var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.displayName="SpinKit",t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"render",value:function(){var e,n=u.allSpinners[this.props.name]||u.allSpinners["three-bounce"],t=(0,s.default)((p(e={"sk-fade-in":"full"===this.props.fadeIn&&!this.props.noFadeIn,"sk-fade-in-half-second":"half"===this.props.fadeIn&&!this.props.noFadeIn,"sk-fade-in-quarter-second":"quarter"===this.props.fadeIn&&!this.props.noFadeIn,"sk-spinner":!this.props.overrideSpinnerClassName},this.props.overrideSpinnerClassName,!!this.props.overrideSpinnerClassName),p(e,this.props.className,!!this.props.className),p(e,n.className||this.props.name,!0),e)),a=(0,l.default)({},this.props);return delete a.name,delete a.fadeIn,delete a.noFadeIn,delete a.overrideSpinnerClassName,delete a.className,this.props.color&&(a.style=a.style?o({},a.style,{color:this.props.color}):{color:this.props.color}),i.default.createElement("div",o({},a,{className:t}),[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(Array(n.divCount))).map((function(e,n){return i.default.createElement("div",{key:n})})))}}]),n}(i.default.Component);d.propTypes={name:r.default.string.isRequired,noFadeIn:r.default.bool,fadeIn:r.default.oneOf(["full","half","quarter","none"]),overrideSpinnerClassName:r.default.string,className:r.default.string,color:r.default.string},d.defaultProps={name:"three-bounce",noFadeIn:!1,fadeIn:"full",overrideSpinnerClassName:""},e.exports=d},974:function(e,n,t){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a={circle:{className:"sk-circle",divCount:12},"cube-grid":{className:"sk-cube-grid",divCount:9},wave:{className:"sk-wave",divCount:5},"folding-cube":{className:"sk-folding-cube",divCount:4},"three-bounce":{className:"sk-three-bounce",divCount:3},"double-bounce":{className:"sk-double-bounce",divCount:2},"wandering-cubes":{className:"sk-wandering-cubes",divCount:2},"chasing-dots":{className:"sk-chasing-dots",divCount:2},"rotating-plane":{className:"sk-rotating-plane",divCount:1},pulse:{className:"sk-pulse",divCount:1},wordpress:{className:"sk-wordpress",divCount:1}},r={"ball-grid-beat":{divCount:9},"ball-grid-pulse":{divCount:9},"line-spin-fade-loader":{divCount:8},"ball-spin-fade-loader":{divCount:8},"ball-pulse-rise":{divCount:5},"line-scale":{divCount:5},"line-scale-pulse-out":{divCount:5},"line-scale-pulse-out-rapid":{divCount:5},pacman:{divCount:5},"line-scale-party":{divCount:4},"ball-triangle-path":{divCount:3},"ball-scale-multiple":{divCount:3},"ball-scale-ripple-multiple":{divCount:3},"ball-pulse-sync":{divCount:3},"ball-beat":{divCount:3},"ball-zig-zag":{divCount:2},"ball-zig-zag-deflect":{divCount:2},"ball-clip-rotate-pulse":{divCount:2},"ball-clip-rotate-multiple":{divCount:2},"ball-clip-rotate":{divCount:1},"ball-scale-ripple":{divCount:1},"triangle-skew-spin":{divCount:1}};e.exports={spinkitSpinners:a,loadersCssSpinners:r,allSpinners:o({},a,r)}},975:function(e,n,t){},976:function(e,n,t){},977:function(e,n,t){},978:function(e,n,t){},979:function(e,n,t){},980:function(e,n,t){},981:function(e,n,t){},982:function(e,n,t){},983:function(e,n,t){},984:function(e,n,t){},985:function(e,n,t){},986:function(e,n,t){},987:function(e,n,t){},988:function(e,n,t){},989:function(e,n,t){}}]);
//# sourceMappingURL=3.f7f27e62.chunk.js.map