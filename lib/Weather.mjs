import*as e from"react";var t={187:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1em;\n    width: fit-content;\n    min-width: 10em;\n}\n\n.weather > * {\n    margin: .2em;\n}\n\n.update_button:hover {\n    cursor: pointer;\n}\n\n@-moz-keyframes spin {\n    to {\n        -moz-transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes spin {\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.spin {\n    animation: spin 1000ms linear infinite;\n}\n\n.temperature {\n    font-size: 3em;\n}",""]);const u=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var u=n(a[i]);t[u].references--}for(var c=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var o={};r.d(o,{A:()=>W});const a=(i={Component:()=>e.Component,default:()=>e.default},u={},r.d(u,i),u);var i,u,c=r(72),s=r.n(c),d=r(825),l=r.n(d),p=r(659),f=r.n(p),h=r(56),m=r.n(h),v=r(540),y=r.n(v),_=r(113),w=r.n(_),g=r(187),b={};b.styleTagTransform=w(),b.setAttributes=m(),b.insert=f().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=y(),s()(g.A,b),g.A&&g.A.locals&&g.A.locals;var x,S=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},x(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=u(0),i.throw=u(1),i.return=u(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},M=function(e){function t(t){var n=e.call(this,t)||this;return n.weather_data=[],n.setOpenMeteoResponse=function(){return C(n,void 0,void 0,(function(){var e,t=this;return E(this,(function(n){return e="https://api.open-meteo.com/v1/forecast?latitude="+this.config.latitude+"&longitude="+this.config.longitude+"&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m",[2,new Promise((function(n,r){fetch(e).then((function(e){void 0!==e.body&&e.json().then((function(e){n(t.open_meteo=e.hourly)}))}))}))]}))}))},n.getWeatherData=function(){return n.weather_data},n.setWeatherData=function(){for(var e,t,r,o,a=n.open_meteo,i=new Date,u=[],c=-1,s=0;s<a.time.length;s++){var d={hour:(r=new Date(a.time[s])).getHours(),temperature:Math.round(a.temperature_2m[s]),weather_code:a.weather_code[s],weather_condition:n.convertWMO(a.weather_code[s],a.precipitation_probability[s]),wind_speed:Math.round(a.wind_speed_10m[s]),rain_propability:a.precipitation_probability[s],humidity:a.relative_humidity_2m[s],wind_direction:n.convertWindDirection(a.wind_direction_10m[s])};if((null===(e=u[c])||void 0===e?void 0:e.date)&&(null===(t=u[c])||void 0===t?void 0:t.date.toLocaleDateString())===r.toLocaleDateString())u[c].forcasts.push(d);else{if(r<i)continue;o={date:new Date(r.toLocaleDateString()),forcasts:[d]},u.push(o),c+=1}}for(s=0;s<u.length;s++){var l=n.findMinMaxTemperature(u[s].forcasts),p=l.min,f=l.max;u[s].max_temperature=f,u[s].min_temperature=p}n.weather_data=u},n.findMinMaxTemperature=function(e){var t=e.reduce((function(e,t){return t.temperature>e.temperature?t:e})).temperature;return{min:e.reduce((function(e,t){return t.temperature<e.temperature?t:e})).temperature,max:t}},n.updateCurrentWeather=function(){var e=(new Date).getHours()+1;if(void 0!==n.weather_data&&Array.isArray(n.weather_data)&&0!==n.weather_data.length){var t=n.weather_data[0].forcasts.find((function(t){return t.hour===e}));n.current_weather=t}},n.updateWeather=function(){return C(n,void 0,void 0,(function(){var e=this;return E(this,(function(t){return this.setOpenMeteoResponse().then((function(){e.setWeatherData(),e.updateCurrentWeather(),e.setState({loaded:!0})})),[2]}))}))},n.convertWMO=function(e,t){var n="";if(null!=e)return 0===e?n="Sunny":e<=3?n="Cloudy":45===e||48===e?n="Fog":e>=51&&e<=67?(n="Rain",e-50<=5||e-60<=5||(n="Freezing "+n),e>60&&(n="Heavy "+n)):e>70&&e<80?n="Snow":e>=80&&e<=82?n="Violent Rain":85===e||86===e?n="Heavy Snow":e>=95&&e<=99&&(n="Thunderstorm",96!==e&&99!==e||(n+=" with Hail")),n+" (Rain: "+t+"%)"},n.convertWindDirection=function(e){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.floor(e/22.5+.5)%16]},n.nextRainyDay=function(){return C(n,void 0,void 0,(function(){return E(this,(function(e){return[2]}))}))},n.state={loaded:!1,temperature_unit:t.temperature_unit.substring(0,1).toUpperCase()},n.config={longitude:t.longitude,latitude:t.latitude,temperature_unit:t.temperature_unit,wind_speed_unit:t.wind_speed_unit},n.config.hourly=["temperature_2m","relative_humidity_2m","apparent_temperature","precipitation_probability","precipitation","weather_code","cloud_cover","visibility","wind_speed_10m"],n.updateWeather(),n}return S(t,e),t.prototype.getLoaded=function(){return this.state.loaded},t.prototype.getOpenMeteoData=function(){return this.open_meteo},t.prototype.render=function(){var e,t,n,r;return a.default.createElement("div",{className:"container"},this.state.loaded&&a.default.createElement("div",{className:"weather"},a.default.createElement("div",{className:"temperature"},(null===(e=this.current_weather)||void 0===e?void 0:e.temperature)+"°"+this.state.temperature_unit," "),a.default.createElement("div",null,(null===(t=this.current_weather)||void 0===t?void 0:t.wind_speed)+" "+this.config.wind_speed_unit.toUpperCase()+" "+(null===(n=this.current_weather)||void 0===n?void 0:n.wind_direction)),a.default.createElement("div",null,null===(r=this.current_weather)||void 0===r?void 0:r.weather_condition)),a.default.createElement("svg",{role:"button",className:this.state.loaded?"update_button":"spin",fill:"currentColor",height:"1em",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",onClick:this.updateCurrentWeather},a.default.createElement("path",{d:"M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002",fill:"none",strokeWidth:"2"})))},t}(a.Component);const W=M;var N=o.A;export{N as default};