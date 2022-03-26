(this.webpackJsonpherolo_weather_app=this.webpackJsonpherolo_weather_app||[]).push([[0],{126:function(t,e,r){},150:function(t,e,r){},154:function(t,e,r){},155:function(t,e,r){},156:function(t,e,r){},157:function(t,e,r){},158:function(t,e,r){},159:function(t,e,r){},160:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r.n(n),a=r(33),o=r.n(a),i=(r(126),r(18)),s=r(47),u=r(19),l=r(12),f=r.n(l),d=r(16),p=r(57),h=r(68),j=r(20),b=r(58),v=r.n(b),O=r(15),x={query:y,get:function(t,e){return y(t).then((function(t){return t.find((function(t){return t._id===e}))}))},post:function(t,e){return e._id=m(),y(t).then((function(r){return r.push(e),g(t,r),e}))},postMany:function(t,e){return y(t).then((function(r){return e=e.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{_id:m()})})),r.push.apply(r,Object(j.a)(e)),g(t,r),r}))},put:function(t,e){return y(t).then((function(r){var n=r.findIndex((function(t){return t._id===e._id}));return r.splice(n,1,e),g(t,r),e}))},remove:function(t,e){return y(t).then((function(r){var n=r.findIndex((function(t){return t._id===e}));r.splice(n,1),g(t,r)}))},_save:g};function y(t){var e=JSON.parse(localStorage.getItem(t))||[];return Promise.resolve(e)}function g(t,e){localStorage.setItem(t,JSON.stringify(e))}function m(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}var F="XceX2CagSSR4XuUPkvu6aqtZlPP9S7hJ",w={getCitiesAutoComplete:function(){return C.apply(this,arguments)},getForcast:function(){return E.apply(this,arguments)},getCurrentForcast:k,getEmptyCity:function(){return{cityName:"",locId:""}},getCurrentForcasts:function(t){return T.apply(this,arguments)},getCityByGeoloc:function(t,e){return R.apply(this,arguments)}};function C(){return(C=Object(d.a)(f.a.mark((function t(){var e,r,n,c,a=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"Tel Aviv",t.prev=1,t.next=4,x.query("citiesResults_".concat(e));case 4:if(!(null===(n=t.sent)||void 0===n?void 0:n.length)){t.next=7;break}return t.abrupt("return",n);case 7:return console.log("getLocation api!"),t.next=10,v.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(F,"&q=").concat(e));case 10:return c=t.sent,(null===(r=c.data)||void 0===r?void 0:r.length)||x.postMany("citiesResults_".concat(e),c.data),t.abrupt("return",c.data);case 15:t.prev=15,t.t0=t.catch(1),console.log("Error in getCitiesAutoComplete:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function E(){return(E=Object(d.a)(f.a.mark((function t(){var e,r,n,c=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"215854",t.prev=1,t.next=4,x.query("forcastResults_".concat(e));case 4:if(!(null===(r=t.sent)||void 0===r?void 0:r.length)){t.next=7;break}return t.abrupt("return",r);case 7:return console.log("getForcast api!"),t.next=10,v.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(F));case 10:return n=t.sent,x.postMany("forcastResults_".concat(e),Object(j.a)(n.data.DailyForecasts)),t.abrupt("return",n.data.DailyForecasts);case 15:t.prev=15,t.t0=t.catch(1),console.log("Error in getForcast:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function k(){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(f.a.mark((function t(){var e,r,n,c=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"215854",t.prev=1,t.next=4,x.query("currentForcastResults_".concat(e));case 4:if(!(null===(r=t.sent)||void 0===r?void 0:r.length)){t.next=7;break}return t.abrupt("return",r[0]);case 7:return console.log("getCurrentForcast api!"),t.next=10,v.a.get("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(F));case 10:return n=t.sent,x.post("currentForcastResults_".concat(e),n.data[0]),t.abrupt("return",n.data[0]);case 15:t.prev=15,t.t0=t.catch(1),console.log("Error in getForcast:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function R(){return(R=Object(d.a)(f.a.mark((function t(e,r){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.query("geoLocationResults_".concat(e,"_").concat(r));case 3:if(!(null===(n=t.sent)||void 0===n?void 0:n.length)){t.next=6;break}return t.abrupt("return",{label:n[0].AdministrativeArea.LocalizedName,id:n[0].Key});case 6:return console.log("getCityByGeoloc api!"),t.next=9,v.a.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(F,"&q=").concat(e,"%2C").concat(r,"&toplevel=false"));case 9:return c=t.sent,x.post("geoLocationResults_".concat(e,"_").concat(r),c.data),t.abrupt("return",{label:c.data.AdministrativeArea.LocalizedName,id:c.data.Key});case 14:t.prev=14,t.t0=t.catch(0),console.log("Error in getCityByGeoloc:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function T(){return(T=Object(d.a)(f.a.mark((function t(e){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.map(function(){var t=Object(d.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.locId);case 2:return t.abrupt("return",e.currForcast=t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:return r=t.sent,t.abrupt("return",Promise.all(r));case 7:t.prev=7,t.t0=t.catch(0),console.log("Error in getCurrentForcasts:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function I(t){return function(){var e=Object(d.a)(f.a.mark((function e(r){var n,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getForcast(null===t||void 0===t?void 0:t.id);case 2:return n=e.sent,e.next=5,w.getCurrentForcast(null===t||void 0===t?void 0:t.id);case 5:return c=e.sent,a=t||{label:"Tel Aviv",id:"215854"},e.next=9,r({type:"SET_DETAILS",details:a});case 9:return e.next=11,r({type:"SET_FORCAST",forcast:n,currForcast:c});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var S=r(11),D=r(206),A=r(207),N=(r(150),r(2));function M(t){var e=t.isDarkMode,r=Object(i.b)(),c=Object(h.useHistory)(),a=Object(n.useState)([]),o=Object(S.a)(a,2),s=o[0],u=o[1],l=Object(n.useState)(!1),p=Object(S.a)(l,2),j=p[0],b=p[1],v=function(){var t=Object(d.a)(f.a.mark((function t(e){var r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&x(e)){t.next=2;break}return t.abrupt("return");case 2:return r=[],n=[],b(null),t.next=7,w.getCitiesAutoComplete(e);case 7:if(null===(c=t.sent)||void 0===c?void 0:c.length){t.next=10;break}return t.abrupt("return");case 10:c.forEach((function(t){r.forEach((function(t){n.push(t.label)})),n.includes(t.LocalizedName)||r.push({label:t.LocalizedName,id:t.Key})})),u(r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){return!(!/^[A-Za-z\s]+$/.test(t)&&""!==t)||(b("English only!"),!1)};return Object(N.jsxs)("section",{className:"search-container",children:[Object(N.jsx)("div",{style:{maxHeight:j?"100%":0,maxWidth:j?"100%":0},children:Object(N.jsx)("h3",{children:"English only!"})}),Object(N.jsx)(D.a,{inputMode:"text",disablePortal:!0,id:"combo-box-demo",options:s,style:{color:"black"},sx:{width:"100%",bgcolor:e?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.07)","& input":{color:"black"}},onInputChange:function(t){return v(t.target.value)},onChange:function(t,e){return(null===e||void 0===e?void 0:e.id)?function(t){r(I(t)),c.push("/")}(e):null},renderInput:function(t){return Object(N.jsx)(A.a,Object(O.a)(Object(O.a)({},t),{},{label:"Search cities"}))}})]})}r(154);function P(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.forcastReducer.isDarkMode})),r=Object(i.c)((function(t){return t.forcastReducer.isFahrenheit})),n=Object(h.useHistory)(),c=function(){var e=Object(d.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCityByGeoloc(r.coords.latitude,r.coords.longitude);case 2:n=e.sent,t(I(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("section",{className:"app-header-container",children:[Object(N.jsx)("h2",{children:"Weather Forcast"}),Object(N.jsx)(s.b,{className:"link nav-item",to:"/",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{icon:"house"})," ",Object(N.jsx)("h2",{children:"Home"})]})}),Object(N.jsx)(s.b,{className:"link nav-item",to:"/favorites",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{icon:"heart"})," ",Object(N.jsx)("h2",{children:"Favorites"})]})}),Object(N.jsxs)("div",{className:"options-container",children:[Object(N.jsx)("button",{onClick:function(){return t(function(){var t=Object(d.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"TOGGLE_FAHRENHEIT"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:r?"F\xb0":"C\xb0"}),Object(N.jsx)("button",{onClick:function(){navigator.geolocation.getCurrentPosition(c),n.push("/")},children:Object(N.jsx)(p.a,{icon:"location"})}),Object(N.jsx)("button",{onClick:function(){return t(function(){var t=Object(d.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:"TOGGLE_DARK_MODE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:Object(N.jsx)(p.a,{icon:e?"sun":"moon"})})]}),Object(N.jsx)(M,{isDarkMode:e})]})}r(155);function L(t){var e=t.favorite,r=t.currForcast,n=Object(i.b)(),c=Object(i.c)((function(t){return t.forcastReducer.isFahrenheit})),a=Object(u.useHistory)(),o=function(t){return Math.floor(t)};return r?Object(N.jsxs)("li",{className:"favorite-preview",onClick:function(){n(I({label:e.cityName,id:e.locId})),a.push("/")},children:[Object(N.jsx)("p",{children:e.cityName}),Object(N.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(r.WeatherIcon<10?"0".concat(r.WeatherIcon):r.WeatherIcon,"-s.png")}),Object(N.jsx)("p",{children:r.WeatherText}),c&&Object(N.jsxs)("p",{children:[o(r.Temperature.Imperial.Value),"\xb0 F"]}),!c&&Object(N.jsxs)("p",{children:[o(r.Temperature.Metric.Value),"\xb0 C"]})]}):Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"Loading..."})})}var V="favorites",H={getFavorites:function(){return G.apply(this,arguments)},addFavorite:function(t){return W.apply(this,arguments)},removeFavorite:function(t){return q.apply(this,arguments)}};function G(){return(G=Object(d.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.query(V);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("Error in getFavorites:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function W(){return(W=Object(d.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.post(V,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("Error in getFavorites:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function q(){return(q=Object(d.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.remove(V,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("Error in getFavorites:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function J(){return function(){var t=Object(d.a)(f.a.mark((function t(e){var r,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getFavorites();case 2:return r=t.sent,n={type:"SET_FAVORITES",favorites:r},t.next=6,e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function B(t){return function(){var e=Object(d.a)(f.a.mark((function e(r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.addFavorite(t);case 2:return n=e.sent,c={type:"ADD_FAVORITE",favorite:n},e.next=6,r(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function z(t){return function(){var e=Object(d.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.removeFavorite(t);case 2:return n={type:"REMOVE_FAVORITE",favId:t},e.next=5,r(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}r(156);function K(){var t,e,r=Object(i.b)(),c=Object(i.c)((function(t){return t.favoritesReducer.favorites})),a=Object(i.c)((function(t){return t.favoritesReducer.favoritesCurrForcasts})),o=Object(i.c)((function(t){return t.forcastReducer.currCity}));return Object(n.useEffect)((function(){r(J())}),[]),Object(n.useEffect)((function(){var t;(null===c||void 0===c?void 0:c.length)&&r((t=c,function(){var e=Object(d.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCurrentForcasts(t);case 2:return n=e.sent,e.next=5,r({type:"SET_FAVORITES_CURR_FORCASTS",forcasts:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[c]),Object(N.jsxs)(N.Fragment,{children:[c&&!!c.length&&Object(N.jsxs)("section",{className:"favorites-container ".concat((null===(t=o.currForcast)||void 0===t?void 0:t.HasPrecipitation)?"rain-bgi":"sunny-bgi"),children:[Object(N.jsx)("h2",{children:"Your favorites"}),Object(N.jsx)("ul",{className:"favorites-list hide-overflow",children:c.map((function(t,e){return Object(N.jsx)(L,{currForcast:a[e],favorite:t},e)}))})]}),!c||!c.length&&Object(N.jsx)("section",{className:"favorites-container ".concat((null===(e=o.currForcast)||void 0===e?void 0:e.HasPrecipitation)?"rain-bgi":"sunny-bgi"),children:Object(N.jsx)("h2",{children:"You dont have favorites yet!"})})]})}var U={light:"white",dark:"#2e2e2e"},X=r(106),Y=r.n(X),Z=r(107),Q=r.n(Z);r(157);function $(t){var e=t.day,r=t.isFahrenheit,c=Object(n.useState)(""),a=Object(S.a)(c,2),o=a[0],i=a[1],s=Object(n.useState)(""),u=Object(S.a)(s,2),l=u[0],f=u[1];Object(n.useEffect)((function(){var t=new Date(1e3*e.EpochDate),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];i(r[t.getDay()+1>=r.length?0:t.getDay()+1]),f("".concat(t.getDate()+1,"/").concat(t.getMonth()+1))}),[]);var d=function(t){return r?Math.floor(t):Math.floor(5*(t-32)/9)};return Object(N.jsxs)("div",{className:"day-preview",children:[Object(N.jsxs)("h3",{children:[o," ",l]}),Object(N.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e.Day.Icon<10?"0".concat(e.Day.Icon):e.Day.Icon,"-s.png")}),e.Day.HasPrecipitation&&Object(N.jsxs)("p",{children:[e.Day.PrecipitationIntensity," ",e.Day.PrecipitationType.toLowerCase()]}),!e.Day.HasPrecipitation&&Object(N.jsx)("p",{children:e.Day.IconPhrase}),Object(N.jsxs)("h3",{children:[d(e.Temperature.Minimum.Value),"\xb0 ",r?"F":"C"," - ",d(e.Temperature.Maximum.Value),"\xb0 ",r?"F":"C"]})]})}r(158);function tt(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.forcastReducer.isFahrenheit})),r=Object(i.c)((function(t){return t.forcastReducer.currCity})),c=Object(i.c)((function(t){return t.forcastReducer.isDarkMode})),a=Object(i.c)((function(t){return t.favoritesReducer.favorites})),o=r.forcast,s=r.currForcast,u=r.cityName,l=Object(n.useState)(!1),p=Object(S.a)(l,2),h=p[0],j=p[1];Object(n.useEffect)((function(){r.cityName||navigator.geolocation.getCurrentPosition(b,v);var t=a.find((function(t){return t.locId===r.locId}));j(!!t)}),[r]);var b=function(){var e=Object(d.a)(f.a.mark((function e(r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCityByGeoloc(r.coords.latitude,r.coords.longitude);case 2:n=e.sent,t(I(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return t(I())},O=function(t){return Math.floor(t)},x=function(){var e=Object(d.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.find((function(t){return t.locId===r.locId})),t(z(n._id)),j(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=w.getEmptyCity()).cityName=r.cityName,n.locId=r.locId,t(B(n)),j(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===r||void 0===r?void 0:r.currForcast)?Object(N.jsxs)("section",{className:"forcast-container ".concat(!r.currForcast.HasPrecipitation&&c?"dark-sunny-bgi":r.currForcast.HasPrecipitation?"rain-bgi":"sunny-bgi"),children:[Object(N.jsxs)("div",{className:"forcast-header",children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:u}),h&&Object(N.jsx)("button",{onClick:function(){return x()},children:Object(N.jsx)(Y.a,{sx:{color:"red"}})}),!h&&Object(N.jsx)("button",{onClick:function(){return y()},children:Object(N.jsx)(Q.a,{})})]}),Object(N.jsx)("p",{children:function(){var t=new Date(Date.now());return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())}()}),Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(s.WeatherIcon<10?"0".concat(s.WeatherIcon):s.WeatherIcon,"-s.png")}),Object(N.jsx)("h3",{children:"Rain"===s.WeatherText?s.WeatherText+"ing":s.WeatherText})]})]}),Object(N.jsxs)("div",{children:[e&&Object(N.jsxs)("p",{children:[O(s.Temperature.Imperial.Value),"\xb0"]}),!e&&Object(N.jsxs)("p",{children:[O(s.Temperature.Metric.Value),"\xb0"]})]})]}),Object(N.jsx)("div",{className:"days-list hide-overflow",children:Object(N.jsx)("div",{children:o.map((function(t,r){return Object(N.jsx)($,{isFahrenheit:e,day:t},r)}))})})]}):Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"Loading Forcast..."})})}var et=r(45),rt=r(50);r(159);et.b.add(rt.d,rt.e,rt.c,rt.b,rt.a);var nt=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.forcastReducer.isDarkMode}));return Object(n.useEffect)((function(){t(J())}),[]),Object(N.jsx)(s.a,{children:Object(N.jsxs)("div",{className:"App  ".concat(e?"light-container":"dark-container"),style:{backgroundColor:e?U.dark:U.light},children:[Object(N.jsx)(P,{}),Object(N.jsxs)(u.Switch,{children:[Object(N.jsx)(u.Route,{component:K,path:"/favorites"}),Object(N.jsx)(u.Route,{component:tt,path:"/"})]})]})})},ct=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,209)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;r(t),n(t),c(t),a(t),o(t)}))},at=r(44),ot=r(108),it={currCity:{cityName:null,locId:null,forcast:null,currForcast:null},isDarkMode:!1,isFahrenheit:!1};var st={favorites:[],favoritesCurrForcasts:[]};var ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||at.d,lt=Object(at.c)({forcastReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_DETAILS":return Object(O.a)(Object(O.a)({},t),{},{currCity:Object(O.a)(Object(O.a)({},t.currCity),{},{cityName:e.details.label,locId:e.details.id})});case"SET_FORCAST":return Object(O.a)(Object(O.a)({},t),{},{currCity:Object(O.a)(Object(O.a)({},t.currCity),{},{forcast:e.forcast,currForcast:e.currForcast})});case"SET_CURR_FORCAST":return Object(O.a)(Object(O.a)({},t),{},{currCity:Object(O.a)(Object(O.a)({},t.currCity),{},{currForcast:e.currForcast})});case"TOGGLE_DARK_MODE":return Object(O.a)(Object(O.a)({},t),{},{isDarkMode:!t.isDarkMode});case"TOGGLE_FAHRENHEIT":return Object(O.a)(Object(O.a)({},t),{},{isFahrenheit:!t.isFahrenheit});default:return t}},favoritesReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FAVORITES":return Object(O.a)(Object(O.a)({},t),{},{favorites:e.favorites});case"SET_FAVORITES_CURR_FORCASTS":return Object(O.a)(Object(O.a)({},t),{},{favoritesCurrForcasts:e.forcasts});case"ADD_FAVORITE":return Object(O.a)(Object(O.a)({},t),{},{favorites:[].concat(Object(j.a)(t.favorites),[e.favorite])});case"REMOVE_FAVORITE":return Object(O.a)(Object(O.a)({},t),{},{favorites:t.favorites.filter((function(t){return t._id!==e.favoriteId}))});default:return t}}}),ft=Object(at.e)(lt,ut(Object(at.a)(ot.a)));o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.a,{store:ft,children:Object(N.jsx)(nt,{})})}),document.getElementById("root")),ct()}},[[160,1,2]]]);
//# sourceMappingURL=main.35094e41.chunk.js.map