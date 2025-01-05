import*as e from"react";var t={636:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,".container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1em;\n    width: fit-content;\n    min-width: 10em;\n}\n\n.weather > * {\n    margin: .2em;\n}\n\n.update_button:hover {\n    cursor: pointer;\n}\n\n@-moz-keyframes spin {\n    to {\n        -moz-transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes spin {\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.spin {\n    animation: spin 1000ms linear infinite;\n}\n\n.temperature {\n    font-size: 3em;\n}",""]);const u=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,exports:{}};return t[e](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var a={};r.d(a,{A:()=>N,b:()=>E});const o=(i={Component:()=>e.Component,default:()=>e.default},u={},r.d(u,i),u);var i,u,c=r(72),s=r.n(c),l=r(825),d=r.n(l),p=r(659),f=r.n(p),h=r(56),m=r.n(h),v=r(540),y=r.n(v),w=r(113),b=r.n(w),_=r(636),g={};g.styleTagTransform=b(),g.setAttributes=m(),g.insert=f().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=y(),s()(_.A,g),_.A&&_.A.locals&&_.A.locals;var x,S=function(e,t){var n="";if(null!=e)return 0===e?n="Sunny":e<=3?n="Cloudy":45===e||48===e?n="Fog":e>=51&&e<=67?(n="Rain",e-50<=5||e-60<=5||(n="Freezing "+n),e>60&&(n="Heavy "+n)):e>70&&e<80?n="Snow":e>=80&&e<=82?n="Violent Rain":85===e||86===e?n="Heavy Snow":e>=95&&e<=99&&(n="Thunderstorm",96!==e&&99!==e||(n+=" with Hail")),n+" (Rain: "+t+"%)"},C=function(e){var t=e.reduce((function(e,t){return t.temperature>e.temperature?t:e})).temperature;return{min:e.reduce((function(e,t){return t.temperature<e.temperature?t:e})).temperature,max:t}},E=function(e,t){return n=void 0,r=void 0,o=function(){var n,r,a,o,i,u,c,s,l,d,p,f,h,m,v,y;return function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}(this,(function(w){switch(w.label){case 0:return n=new Date,i=[],u=-1,[4,fetch(e)];case 1:return[4,w.sent().json()];case 2:if((c=w.sent()).error)return[2,{body:[],error:c.reason}];for(s=c.hourly,p=0;p<(null==s?void 0:s.time.length);p++){for(d in a=new Date(s.time[p]),r=a.getHours(),l={},s)switch(l.hour=r,d){case"temperature_2m":l.temperature="f"===t?Math.round(1.8*s.temperature_2m[p]+32):Math.round(s.temperature_2m[p]);break;case"weather_code":l.weather_code=s.weather_code[p],l.weather_condition=S(s.weather_code[p],s.precipitation_probability[p]);break;case"precipitation_probability":l.rain_propability=s.precipitation_probability[p];break;case"wind_speed_10m":l.wind_speed=Math.round(s.wind_speed_10m[p]);break;case"wind_direction_10m":l.wind_direction=(b=s.wind_direction_10m[p],["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(b/22.5+.5)%16]);break;default:l[d]=s[d][p]}if((null===(v=i[u])||void 0===v?void 0:v.date)&&(null===(y=i[u])||void 0===y?void 0:y.date.toLocaleDateString())===a.toLocaleDateString())i[u].forcasts.push(l);else{if(a<n)continue;o={date:new Date(a.toLocaleDateString()),forcasts:[l]},i.push(o),u+=1}}for(p=0;p<i.length;p++)f=C(i[p].forcasts),h=f.min,m=f.max,i[p].max_temperature=m,i[p].min_temperature=h;return[2,{body:i,error:void 0}]}var b}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function u(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,u)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o},k=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},x(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),W=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},M=function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};const N=function(e){function t(t){var n=e.call(this,t)||this;return n.updateWeatherData=function(){return W(n,void 0,void 0,(function(){var e,t;return M(this,(function(n){switch(n.label){case 0:return this.setState({loaded:!1}),e="https://api.open-meteo.com/v1/forecast?latitude="+this.state.config.latitude+"&longitude="+this.state.config.longitude+"&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m",[4,E(e,this.state.config.temperature_unit)];case 1:return void 0===(t=n.sent()).error&&(this.weather_data=t.body,this.updateCurrentWeather(),this.setState({loaded:!0})),[2,this.weather_data]}}))}))},n.updateCurrentWeather=function(){return W(n,void 0,void 0,(function(){var e,t,n=this;return M(this,(function(r){switch(r.label){case 0:return this.setState({loaded:!1}),e=(new Date).getHours()+1,void 0!==this.weather_data&&Array.isArray(this.weather_data)&&0!==this.weather_data.length?void 0!==(t=this.weather_data[0].forcasts.find((function(t){return t.hour===e})))?[3,2]:[4,this.updateWeatherData()]:[3,3];case 1:return r.sent(),[2,this.current_weather];case 2:this.current_weather=t,r.label=3;case 3:return setTimeout((function(){n.setState({loaded:!0})}),2e3),[2,this.current_weather]}}))}))},n.state={config:t,loaded:!1},n}return k(t,e),t.prototype.componentDidMount=function(){this.updateWeatherData=this.updateWeatherData.bind(this),this.updateCurrentWeather=this.updateCurrentWeather.bind(this),this.updateWeatherData()},t.prototype.render=function(){var e,t,n,r;return o.default.createElement("div",{className:"container"},this.state.loaded&&o.default.createElement("div",{className:"weather"},o.default.createElement("div",{className:"temperature"},(null===(e=this.current_weather)||void 0===e?void 0:e.temperature)+"°"+this.state.config.temperature_unit.toUpperCase()," "),o.default.createElement("div",null,null===(t=this.current_weather)||void 0===t?void 0:t.weather_condition),o.default.createElement("div",null,"Wind: ",(null===(n=this.current_weather)||void 0===n?void 0:n.wind_speed)+" "+this.state.config.wind_speed_unit.toUpperCase()+" "+(null===(r=this.current_weather)||void 0===r?void 0:r.wind_direction))),o.default.createElement("svg",{className:this.state.loaded?"update_button":"spin",fill:"currentColor",height:"1em",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",onClick:this.updateCurrentWeather},o.default.createElement("path",{d:"M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002",fill:"none",strokeWidth:"2"})))},t}(o.Component);var A=a.A,D=a.b;export{A as default,D as getWeatherOpenMeteo};