var Ko=Object.create;var br=Object.defineProperty;var Vo=Object.getOwnPropertyDescriptor;var Fo=Object.getOwnPropertyNames;var qo=Object.getPrototypeOf,Ho=Object.prototype.hasOwnProperty;var Xe=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var wr=(r,e)=>()=>(r&&(e=r(r=0)),e);var X=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Qi=(r,e)=>{for(var t in e)br(r,t,{get:e[t],enumerable:!0})},Wo=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Fo(e))!Ho.call(r,n)&&n!==t&&br(r,n,{get:()=>e[n],enumerable:!(i=Vo(e,n))||i.enumerable});return r};var xr=(r,e,t)=>(t=r!=null?Ko(qo(r)):{},Wo(e||!r||!r.__esModule?br(t,"default",{value:r,enumerable:!0}):t,r));var Ee=X(ee=>{"use strict";ee.__esModule=!0;ee.DEFAULT_VERSION=ee.REGISTER=ee.PURGE=ee.PERSIST=ee.PAUSE=ee.REHYDRATE=ee.FLUSH=ee.KEY_PREFIX=void 0;var Aa="persist:";ee.KEY_PREFIX=Aa;var Pa="persist/FLUSH";ee.FLUSH=Pa;var Oa="persist/REHYDRATE";ee.REHYDRATE=Oa;var $a="persist/PAUSE";ee.PAUSE=$a;var Ma="persist/PERSIST";ee.PERSIST=Ma;var Ra="persist/PURGE";ee.PURGE=Ra;var Ta="persist/REGISTER";ee.REGISTER=Ta;var Ia=-1;ee.DEFAULT_VERSION=Ia});var vn=X($r=>{"use strict";$r.__esModule=!0;$r.default=Da;function $t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$t=function(t){return typeof t}:$t=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(r)}function gn(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function ka(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gn(t,!0).forEach(function(i){za(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):gn(t).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function za(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Da(r,e,t,i){var n=i.debug,s=ka({},t);return r&&$t(r)==="object"&&Object.keys(r).forEach(function(o){o!=="_persist"&&e[o]===t[o]&&(s[o]=r[o])}),s}});var Rr=X(Mr=>{"use strict";Mr.__esModule=!0;Mr.default=ja;var Na=Ee();function ja(r){var e=r.blacklist||null,t=r.whitelist||null,i=r.transforms||[],n=r.throttle||0,s="".concat(r.keyPrefix!==void 0?r.keyPrefix:Na.KEY_PREFIX).concat(r.key),o=r.storage,a;r.serialize===!1?a=function($){return $}:typeof r.serialize=="function"?a=r.serialize:a=La;var l=r.writeFailHandler||null,h={},p={},g=[],f=null,_=null,E=function($){Object.keys($).forEach(function(w){O(w)&&h[w]!==$[w]&&g.indexOf(w)===-1&&g.push(w)}),Object.keys(h).forEach(function(w){$[w]===void 0&&O(w)&&g.indexOf(w)===-1&&h[w]!==void 0&&g.push(w)}),f===null&&(f=setInterval(C,n)),h=$};function C(){if(g.length===0){f&&clearInterval(f),f=null;return}var S=g.shift(),$=i.reduce(function(w,P){return P.in(w,S,h)},h[S]);if($!==void 0)try{p[S]=a($)}catch(w){console.error("redux-persist/createPersistoid: error serializing state",w)}else delete p[S];g.length===0&&b()}function b(){Object.keys(p).forEach(function(S){h[S]===void 0&&delete p[S]}),_=o.setItem(s,a(p)).catch(T)}function O(S){return!(t&&t.indexOf(S)===-1&&S!=="_persist"||e&&e.indexOf(S)!==-1)}function T(S){l&&l(S)}var k=function(){for(;g.length!==0;)C();return _||Promise.resolve()};return{update:E,flush:k}}function La(r){return JSON.stringify(r)}});var Ir=X(Tr=>{"use strict";Tr.__esModule=!0;Tr.default=Ua;var Ba=Ee();function Ua(r){var e=r.transforms||[],t="".concat(r.keyPrefix!==void 0?r.keyPrefix:Ba.KEY_PREFIX).concat(r.key),i=r.storage,n=r.debug,s;return r.deserialize===!1?s=function(a){return a}:typeof r.deserialize=="function"?s=r.deserialize:s=Ka,i.getItem(t).then(function(o){if(o)try{var a={},l=s(o);return Object.keys(l).forEach(function(h){a[h]=e.reduceRight(function(p,g){return g.out(p,h,l)},s(l[h]))}),a}catch(h){throw h}else return})}function Ka(r){return JSON.parse(r)}});var zr=X(kr=>{"use strict";kr.__esModule=!0;kr.default=Fa;var Va=Ee();function Fa(r){var e=r.storage,t="".concat(r.keyPrefix!==void 0?r.keyPrefix:Va.KEY_PREFIX).concat(r.key);return e.removeItem(t,qa)}function qa(r){}});var Nr=X(Dr=>{"use strict";Dr.__esModule=!0;Dr.default=ec;var Ue=Ee(),Ha=Mt(vn()),Wa=Mt(Rr()),Ya=Mt(Ir()),Ga=Mt(zr());function Mt(r){return r&&r.__esModule?r:{default:r}}function yn(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function me(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yn(t,!0).forEach(function(i){Za(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):yn(t).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Za(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ja(r,e){if(r==null)return{};var t=Xa(r,e),i,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)i=s[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(t[i]=r[i])}return t}function Xa(r,e){if(r==null)return{};var t={},i=Object.keys(r),n,s;for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&(t[n]=r[n]);return t}var Qa=5e3;function ec(r,e){var t=r.version!==void 0?r.version:Ue.DEFAULT_VERSION,i=r.debug||!1,n=r.stateReconciler===void 0?Ha.default:r.stateReconciler,s=r.getStoredState||Ya.default,o=r.timeout!==void 0?r.timeout:Qa,a=null,l=!1,h=!0,p=function(f){return f._persist.rehydrated&&a&&!h&&a.update(f),f};return function(g,f){var _=g||{},E=_._persist,C=Ja(_,["_persist"]),b=C;if(f.type===Ue.PERSIST){var O=!1,T=function(B,H){O||(f.rehydrate(r.key,B,H),O=!0)};if(o&&setTimeout(function(){!O&&T(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(r.key,'"')))},o),h=!1,a||(a=(0,Wa.default)(r)),E)return me({},e(b,f),{_persist:E});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(r.key),s(r).then(function(D){var B=r.migrate||function(H,se){return Promise.resolve(H)};B(D,t).then(function(H){T(H)},function(H){T(void 0,H)})},function(D){T(void 0,D)}),me({},e(b,f),{_persist:{version:t,rehydrated:!1}})}else{if(f.type===Ue.PURGE)return l=!0,f.result((0,Ga.default)(r)),me({},e(b,f),{_persist:E});if(f.type===Ue.FLUSH)return f.result(a&&a.flush()),me({},e(b,f),{_persist:E});if(f.type===Ue.PAUSE)h=!0;else if(f.type===Ue.REHYDRATE){if(l)return me({},b,{_persist:me({},E,{rehydrated:!0})});if(f.key===r.key){var k=e(b,f),S=f.payload,$=n!==!1&&S!==void 0?n(S,g,k,r):k,w=me({},$,{_persist:me({},E,{rehydrated:!0})});return p(w)}}}if(!E)return e(g,f);var P=e(b,f);return P===b?g:p(me({},P,{_persist:E}))}}});var Kr=X((Ql,En)=>{"use strict";var Lr=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,rc=Object.getOwnPropertyNames,ic=Object.prototype.hasOwnProperty,nc=(r,e)=>{for(var t in e)Lr(r,t,{get:e[t],enumerable:!0})},sc=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of rc(e))!ic.call(r,n)&&n!==t&&Lr(r,n,{get:()=>e[n],enumerable:!(i=tc(e,n))||i.enumerable});return r},oc=r=>sc(Lr({},"__esModule",{value:!0}),r),wn={};nc(wn,{__DO_NOT_USE__ActionTypes:()=>rt,applyMiddleware:()=>fc,bindActionCreators:()=>dc,combineReducers:()=>hc,compose:()=>xn,createStore:()=>Ur,isAction:()=>pc,isPlainObject:()=>Br,legacy_createStore:()=>lc});En.exports=oc(wn);function te(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var ac=typeof Symbol=="function"&&Symbol.observable||"@@observable",_n=ac,jr=()=>Math.random().toString(36).substring(7).split("").join("."),cc={INIT:`@@redux/INIT${jr()}`,REPLACE:`@@redux/REPLACE${jr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${jr()}`},rt=cc;function Br(r){if(typeof r!="object"||r===null)return!1;let e=r;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e||Object.getPrototypeOf(r)===null}function Ur(r,e,t){if(typeof r!="function")throw new Error(te(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(te(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(te(1));return t(Ur)(r,e)}let i=r,n=e,s=new Map,o=s,a=0,l=!1;function h(){o===s&&(o=new Map,s.forEach((b,O)=>{o.set(O,b)}))}function p(){if(l)throw new Error(te(3));return n}function g(b){if(typeof b!="function")throw new Error(te(4));if(l)throw new Error(te(5));let O=!0;h();let T=a++;return o.set(T,b),function(){if(O){if(l)throw new Error(te(6));O=!1,h(),o.delete(T),s=null}}}function f(b){if(!Br(b))throw new Error(te(7));if(typeof b.type>"u")throw new Error(te(8));if(typeof b.type!="string")throw new Error(te(17));if(l)throw new Error(te(9));try{l=!0,n=i(n,b)}finally{l=!1}return(s=o).forEach(T=>{T()}),b}function _(b){if(typeof b!="function")throw new Error(te(10));i=b,f({type:rt.REPLACE})}function E(){let b=g;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(te(11));function T(){let S=O;S.next&&S.next(p())}return T(),{unsubscribe:b(T)}},[_n](){return this}}}return f({type:rt.INIT}),{dispatch:f,subscribe:g,getState:p,replaceReducer:_,[_n]:E}}function lc(r,e,t){return Ur(r,e,t)}function uc(r){Object.keys(r).forEach(e=>{let t=r[e];if(typeof t(void 0,{type:rt.INIT})>"u")throw new Error(te(12));if(typeof t(void 0,{type:rt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(te(13))})}function hc(r){let e=Object.keys(r),t={};for(let o=0;o<e.length;o++){let a=e[o];typeof r[a]=="function"&&(t[a]=r[a])}let i=Object.keys(t),n,s;try{uc(t)}catch(o){s=o}return function(a={},l){if(s)throw s;let h=!1,p={};for(let g=0;g<i.length;g++){let f=i[g],_=t[f],E=a[f],C=_(E,l);if(typeof C>"u"){let b=l&&l.type;throw new Error(te(14))}p[f]=C,h=h||C!==E}return h=h||i.length!==Object.keys(a).length,h?p:a}}function bn(r,e){return function(...t){return e(r.apply(this,t))}}function dc(r,e){if(typeof r=="function")return bn(r,e);if(typeof r!="object"||r===null)throw new Error(te(16));let t={};for(let i in r){let n=r[i];typeof n=="function"&&(t[i]=bn(n,e))}return t}function xn(...r){return r.length===0?e=>e:r.length===1?r[0]:r.reduce((e,t)=>(...i)=>e(t(...i)))}function fc(...r){return e=>(t,i)=>{let n=e(t,i),s=()=>{throw new Error(te(15))},o={getState:n.getState,dispatch:(l,...h)=>s(l,...h)},a=r.map(l=>l(o));return s=xn(...a)(n.dispatch),{...n,dispatch:s}}}function pc(r){return Br(r)&&"type"in r&&typeof r.type=="string"}});var An=X(Vr=>{"use strict";Vr.__esModule=!0;Vr.default=gc;function it(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?it=function(t){return typeof t}:it=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(r)}function Sn(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function Cn(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Sn(t,!0).forEach(function(i){mc(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Sn(t).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function mc(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function gc(r,e,t,i){var n=i.debug,s=Cn({},t);return r&&it(r)==="object"&&Object.keys(r).forEach(function(o){if(o!=="_persist"&&e[o]===t[o]){if(vc(t[o])){s[o]=Cn({},s[o],{},r[o]);return}s[o]=r[o]}}),s}function vc(r){return r!==null&&!Array.isArray(r)&&it(r)==="object"}});var On=X(Fr=>{"use strict";Fr.__esModule=!0;Fr.default=wc;var yc=Kr(),_c=Pn(Nr()),bc=Pn(An());function Pn(r){return r&&r.__esModule?r:{default:r}}function wc(r,e){return r.stateReconciler=r.stateReconciler===void 0?bc.default:r.stateReconciler,(0,_c.default)(r,(0,yc.combineReducers)(e))}});var Tn=X(Hr=>{"use strict";Hr.__esModule=!0;Hr.default=Oc;var xc=Kr(),Se=Ee();function $n(r){return Cc(r)||Sc(r)||Ec()}function Ec(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Sc(r){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]")return Array.from(r)}function Cc(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}function Mn(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function qr(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mn(t,!0).forEach(function(i){Ac(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Mn(t).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Ac(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Rn={registry:[],bootstrapped:!1},Pc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se.REGISTER:return qr({},e,{registry:[].concat($n(e.registry),[t.key])});case Se.REHYDRATE:var i=e.registry.indexOf(t.key),n=$n(e.registry);return n.splice(i,1),qr({},e,{registry:n,bootstrapped:n.length===0});default:return e}};function Oc(r,e,t){if(0)var i,n;var s=t||!1,o=(0,xc.createStore)(Pc,Rn,e&&e.enhancer?e.enhancer:void 0),a=function(g){o.dispatch({type:Se.REGISTER,key:g})},l=function(g,f,_){var E={type:Se.REHYDRATE,payload:f,err:_,key:g};r.dispatch(E),o.dispatch(E),s&&h.getState().bootstrapped&&(s(),s=!1)},h=qr({},o,{purge:function(){var g=[];return r.dispatch({type:Se.PURGE,result:function(_){g.push(_)}}),Promise.all(g)},flush:function(){var g=[];return r.dispatch({type:Se.FLUSH,result:function(_){g.push(_)}}),Promise.all(g)},pause:function(){r.dispatch({type:Se.PAUSE})},persist:function(){r.dispatch({type:Se.PERSIST,register:a,rehydrate:l})}});return e&&e.manualPersist||h.persist(),h}});var In=X(Wr=>{"use strict";Wr.__esModule=!0;Wr.default=Mc;var $c=Ee();function Mc(r,e){var t=e||{},i=t.debug;return function(n,s){if(!n)return Promise.resolve(void 0);var o=n._persist&&n._persist.version!==void 0?n._persist.version:$c.DEFAULT_VERSION;if(o===s||o>s)return Promise.resolve(n);var a=Object.keys(r).map(function(h){return parseInt(h)}).filter(function(h){return s>=h&&h>o}).sort(function(h,p){return h-p});try{var l=a.reduce(function(h,p){return r[p](h)},n);return Promise.resolve(l)}catch(h){return Promise.reject(h)}}}});var kn=X(Yr=>{"use strict";Yr.__esModule=!0;Yr.default=Rc;function Rc(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.whitelist||null,n=t.blacklist||null;function s(o){return!!(i&&i.indexOf(o)===-1||n&&n.indexOf(o)!==-1)}return{in:function(a,l,h){return!s(l)&&r?r(a,l,h):a},out:function(a,l,h){return!s(l)&&e?e(a,l,h):a}}}});var Gr=X(J=>{"use strict";J.__esModule=!0;var Tc={persistReducer:!0,persistCombineReducers:!0,persistStore:!0,createMigrate:!0,createTransform:!0,getStoredState:!0,createPersistoid:!0,purgeStoredState:!0};J.purgeStoredState=J.createPersistoid=J.getStoredState=J.createTransform=J.createMigrate=J.persistStore=J.persistCombineReducers=J.persistReducer=void 0;var Ic=Ce(Nr());J.persistReducer=Ic.default;var kc=Ce(On());J.persistCombineReducers=kc.default;var zc=Ce(Tn());J.persistStore=zc.default;var Dc=Ce(In());J.createMigrate=Dc.default;var Nc=Ce(kn());J.createTransform=Nc.default;var jc=Ce(Ir());J.getStoredState=jc.default;var Lc=Ce(Rr());J.createPersistoid=Lc.default;var Bc=Ce(zr());J.purgeStoredState=Bc.default;var zn=Ee();Object.keys(zn).forEach(function(r){r==="default"||r==="__esModule"||Object.prototype.hasOwnProperty.call(Tc,r)||(J[r]=zn[r])});function Ce(r){return r&&r.__esModule?r:{default:r}}});var jn=X((Nn,Zr)=>{(function(r){if(typeof Nn=="object"&&typeof Zr<"u")Zr.exports=r();else if(typeof define=="function"&&define.amd)define([],r);else{var e;typeof window<"u"?e=window:typeof global<"u"?e=global:typeof self<"u"?e=self:e=this,e.localforage=r()}})(function(){var r,e,t;return function i(n,s,o){function a(p,g){if(!s[p]){if(!n[p]){var f=typeof Xe=="function"&&Xe;if(!g&&f)return f(p,!0);if(l)return l(p,!0);var _=new Error("Cannot find module '"+p+"'");throw _.code="MODULE_NOT_FOUND",_}var E=s[p]={exports:{}};n[p][0].call(E.exports,function(C){var b=n[p][1][C];return a(b||C)},E,E.exports,i,n,s,o)}return s[p].exports}for(var l=typeof Xe=="function"&&Xe,h=0;h<o.length;h++)a(o[h]);return a}({1:[function(i,n,s){(function(o){"use strict";var a=o.MutationObserver||o.WebKitMutationObserver,l;if(a){var h=0,p=new a(C),g=o.document.createTextNode("");p.observe(g,{characterData:!0}),l=function(){g.data=h=++h%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var f=new o.MessageChannel;f.port1.onmessage=C,l=function(){f.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?l=function(){var O=o.document.createElement("script");O.onreadystatechange=function(){C(),O.onreadystatechange=null,O.parentNode.removeChild(O),O=null},o.document.documentElement.appendChild(O)}:l=function(){setTimeout(C,0)};var _,E=[];function C(){_=!0;for(var O,T,k=E.length;k;){for(T=E,E=[],O=-1;++O<k;)T[O]();k=E.length}_=!1}n.exports=b;function b(O){E.push(O)===1&&!_&&l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(i,n,s){"use strict";var o=i(1);function a(){}var l={},h=["REJECTED"],p=["FULFILLED"],g=["PENDING"];n.exports=f;function f(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,w!==a&&b(this,w)}f.prototype.catch=function(w){return this.then(null,w)},f.prototype.then=function(w,P){if(typeof w!="function"&&this.state===p||typeof P!="function"&&this.state===h)return this;var D=new this.constructor(a);if(this.state!==g){var B=this.state===p?w:P;E(D,B,this.outcome)}else this.queue.push(new _(D,w,P));return D};function _(w,P,D){this.promise=w,typeof P=="function"&&(this.onFulfilled=P,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(w){l.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){E(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){l.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){E(this.promise,this.onRejected,w)};function E(w,P,D){o(function(){var B;try{B=P(D)}catch(H){return l.reject(w,H)}B===w?l.reject(w,new TypeError("Cannot resolve promise with itself")):l.resolve(w,B)})}l.resolve=function(w,P){var D=O(C,P);if(D.status==="error")return l.reject(w,D.value);var B=D.value;if(B)b(w,B);else{w.state=p,w.outcome=P;for(var H=-1,se=w.queue.length;++H<se;)w.queue[H].callFulfilled(P)}return w},l.reject=function(w,P){w.state=h,w.outcome=P;for(var D=-1,B=w.queue.length;++D<B;)w.queue[D].callRejected(P);return w};function C(w){var P=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof P=="function")return function(){P.apply(w,arguments)}}function b(w,P){var D=!1;function B(le){D||(D=!0,l.reject(w,le))}function H(le){D||(D=!0,l.resolve(w,le))}function se(){P(H,B)}var ce=O(se);ce.status==="error"&&B(ce.value)}function O(w,P){var D={};try{D.value=w(P),D.status="success"}catch(B){D.status="error",D.value=B}return D}f.resolve=T;function T(w){return w instanceof this?w:l.resolve(new this(a),w)}f.reject=k;function k(w){var P=new this(a);return l.reject(P,w)}f.all=S;function S(w){var P=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=w.length,B=!1;if(!D)return this.resolve([]);for(var H=new Array(D),se=0,ce=-1,le=new this(a);++ce<D;)fe(w[ce],ce);return le;function fe(Ge,Et){P.resolve(Ge).then(ur,function(Le){B||(B=!0,l.reject(le,Le))});function ur(Le){H[Et]=Le,++se===D&&!B&&(B=!0,l.resolve(le,H))}}}f.race=$;function $(w){var P=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=w.length,B=!1;if(!D)return this.resolve([]);for(var H=-1,se=new this(a);++H<D;)ce(w[H]);return se;function ce(le){P.resolve(le).then(function(fe){B||(B=!0,l.resolve(se,fe))},function(fe){B||(B=!0,l.reject(se,fe))})}}},{1:1}],3:[function(i,n,s){(function(o){"use strict";typeof o.Promise!="function"&&(o.Promise=i(2))}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(i,n,s){"use strict";var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};function a(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function l(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var h=l();function p(){try{if(!h||!h.open)return!1;var c=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),d=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!c||d)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function g(c,d){c=c||[],d=d||{};try{return new Blob(c,d)}catch(m){if(m.name!=="TypeError")throw m;for(var u=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,v=new u,y=0;y<c.length;y+=1)v.append(c[y]);return v.getBlob(d.type)}}typeof Promise>"u"&&i(3);var f=Promise;function _(c,d){d&&c.then(function(u){d(null,u)},function(u){d(u)})}function E(c,d,u){typeof d=="function"&&c.then(d),typeof u=="function"&&c.catch(u)}function C(c){return typeof c!="string"&&(console.warn(c+" used as a key, but it is not a string."),c=String(c)),c}function b(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var O="local-forage-detect-blob-support",T=void 0,k={},S=Object.prototype.toString,$="readonly",w="readwrite";function P(c){for(var d=c.length,u=new ArrayBuffer(d),v=new Uint8Array(u),y=0;y<d;y++)v[y]=c.charCodeAt(y);return u}function D(c){return new f(function(d){var u=c.transaction(O,w),v=g([""]);u.objectStore(O).put(v,"key"),u.onabort=function(y){y.preventDefault(),y.stopPropagation(),d(!1)},u.oncomplete=function(){var y=navigator.userAgent.match(/Chrome\/(\d+)/),m=navigator.userAgent.match(/Edge\//);d(m||!y||parseInt(y[1],10)>=43)}}).catch(function(){return!1})}function B(c){return typeof T=="boolean"?f.resolve(T):D(c).then(function(d){return T=d,T})}function H(c){var d=k[c.name],u={};u.promise=new f(function(v,y){u.resolve=v,u.reject=y}),d.deferredOperations.push(u),d.dbReady?d.dbReady=d.dbReady.then(function(){return u.promise}):d.dbReady=u.promise}function se(c){var d=k[c.name],u=d.deferredOperations.pop();if(u)return u.resolve(),u.promise}function ce(c,d){var u=k[c.name],v=u.deferredOperations.pop();if(v)return v.reject(d),v.promise}function le(c,d){return new f(function(u,v){if(k[c.name]=k[c.name]||Ii(),c.db)if(d)H(c),c.db.close();else return u(c.db);var y=[c.name];d&&y.push(c.version);var m=h.open.apply(h,y);d&&(m.onupgradeneeded=function(x){var A=m.result;try{A.createObjectStore(c.storeName),x.oldVersion<=1&&A.createObjectStore(O)}catch(M){if(M.name==="ConstraintError")console.warn('The database "'+c.name+'" has been upgraded from version '+x.oldVersion+" to version "+x.newVersion+', but the storage "'+c.storeName+'" already exists.');else throw M}}),m.onerror=function(x){x.preventDefault(),v(m.error)},m.onsuccess=function(){var x=m.result;x.onversionchange=function(A){A.target.close()},u(x),se(c)}})}function fe(c){return le(c,!1)}function Ge(c){return le(c,!0)}function Et(c,d){if(!c.db)return!0;var u=!c.db.objectStoreNames.contains(c.storeName),v=c.version<c.db.version,y=c.version>c.db.version;if(v&&(c.version!==d&&console.warn('The database "'+c.name+`" can't be downgraded from version `+c.db.version+" to version "+c.version+"."),c.version=c.db.version),y||u){if(u){var m=c.db.version+1;m>c.version&&(c.version=m)}return!0}return!1}function ur(c){return new f(function(d,u){var v=new FileReader;v.onerror=u,v.onloadend=function(y){var m=btoa(y.target.result||"");d({__local_forage_encoded_blob:!0,data:m,type:c.type})},v.readAsBinaryString(c)})}function Le(c){var d=P(atob(c.data));return g([d],{type:c.type})}function Ti(c){return c&&c.__local_forage_encoded_blob}function Ks(c){var d=this,u=d._initReady().then(function(){var v=k[d._dbInfo.name];if(v&&v.dbReady)return v.dbReady});return E(u,c,c),u}function Vs(c){H(c);for(var d=k[c.name],u=d.forages,v=0;v<u.length;v++){var y=u[v];y._dbInfo.db&&(y._dbInfo.db.close(),y._dbInfo.db=null)}return c.db=null,fe(c).then(function(m){return c.db=m,Et(c)?Ge(c):m}).then(function(m){c.db=d.db=m;for(var x=0;x<u.length;x++)u[x]._dbInfo.db=m}).catch(function(m){throw ce(c,m),m})}function pe(c,d,u,v){v===void 0&&(v=1);try{var y=c.db.transaction(c.storeName,d);u(null,y)}catch(m){if(v>0&&(!c.db||m.name==="InvalidStateError"||m.name==="NotFoundError"))return f.resolve().then(function(){if(!c.db||m.name==="NotFoundError"&&!c.db.objectStoreNames.contains(c.storeName)&&c.version<=c.db.version)return c.db&&(c.version=c.db.version+1),Ge(c)}).then(function(){return Vs(c).then(function(){pe(c,d,u,v-1)})}).catch(u);u(m)}}function Ii(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Fs(c){var d=this,u={db:null};if(c)for(var v in c)u[v]=c[v];var y=k[u.name];y||(y=Ii(),k[u.name]=y),y.forages.push(d),d._initReady||(d._initReady=d.ready,d.ready=Ks);var m=[];function x(){return f.resolve()}for(var A=0;A<y.forages.length;A++){var M=y.forages[A];M!==d&&m.push(M._initReady().catch(x))}var R=y.forages.slice(0);return f.all(m).then(function(){return u.db=y.db,fe(u)}).then(function(I){return u.db=I,Et(u,d._defaultConfig.version)?Ge(u):I}).then(function(I){u.db=y.db=I,d._dbInfo=u;for(var z=0;z<R.length;z++){var N=R[z];N!==d&&(N._dbInfo.db=u.db,N._dbInfo.version=u.version)}})}function qs(c,d){var u=this;c=C(c);var v=new f(function(y,m){u.ready().then(function(){pe(u._dbInfo,$,function(x,A){if(x)return m(x);try{var M=A.objectStore(u._dbInfo.storeName),R=M.get(c);R.onsuccess=function(){var I=R.result;I===void 0&&(I=null),Ti(I)&&(I=Le(I)),y(I)},R.onerror=function(){m(R.error)}}catch(I){m(I)}})}).catch(m)});return _(v,d),v}function Hs(c,d){var u=this,v=new f(function(y,m){u.ready().then(function(){pe(u._dbInfo,$,function(x,A){if(x)return m(x);try{var M=A.objectStore(u._dbInfo.storeName),R=M.openCursor(),I=1;R.onsuccess=function(){var z=R.result;if(z){var N=z.value;Ti(N)&&(N=Le(N));var U=c(N,z.key,I++);U!==void 0?y(U):z.continue()}else y()},R.onerror=function(){m(R.error)}}catch(z){m(z)}})}).catch(m)});return _(v,d),v}function Ws(c,d,u){var v=this;c=C(c);var y=new f(function(m,x){var A;v.ready().then(function(){return A=v._dbInfo,S.call(d)==="[object Blob]"?B(A.db).then(function(M){return M?d:ur(d)}):d}).then(function(M){pe(v._dbInfo,w,function(R,I){if(R)return x(R);try{var z=I.objectStore(v._dbInfo.storeName);M===null&&(M=void 0);var N=z.put(M,c);I.oncomplete=function(){M===void 0&&(M=null),m(M)},I.onabort=I.onerror=function(){var U=N.error?N.error:N.transaction.error;x(U)}}catch(U){x(U)}})}).catch(x)});return _(y,u),y}function Ys(c,d){var u=this;c=C(c);var v=new f(function(y,m){u.ready().then(function(){pe(u._dbInfo,w,function(x,A){if(x)return m(x);try{var M=A.objectStore(u._dbInfo.storeName),R=M.delete(c);A.oncomplete=function(){y()},A.onerror=function(){m(R.error)},A.onabort=function(){var I=R.error?R.error:R.transaction.error;m(I)}}catch(I){m(I)}})}).catch(m)});return _(v,d),v}function Gs(c){var d=this,u=new f(function(v,y){d.ready().then(function(){pe(d._dbInfo,w,function(m,x){if(m)return y(m);try{var A=x.objectStore(d._dbInfo.storeName),M=A.clear();x.oncomplete=function(){v()},x.onabort=x.onerror=function(){var R=M.error?M.error:M.transaction.error;y(R)}}catch(R){y(R)}})}).catch(y)});return _(u,c),u}function Zs(c){var d=this,u=new f(function(v,y){d.ready().then(function(){pe(d._dbInfo,$,function(m,x){if(m)return y(m);try{var A=x.objectStore(d._dbInfo.storeName),M=A.count();M.onsuccess=function(){v(M.result)},M.onerror=function(){y(M.error)}}catch(R){y(R)}})}).catch(y)});return _(u,c),u}function Js(c,d){var u=this,v=new f(function(y,m){if(c<0){y(null);return}u.ready().then(function(){pe(u._dbInfo,$,function(x,A){if(x)return m(x);try{var M=A.objectStore(u._dbInfo.storeName),R=!1,I=M.openKeyCursor();I.onsuccess=function(){var z=I.result;if(!z){y(null);return}c===0||R?y(z.key):(R=!0,z.advance(c))},I.onerror=function(){m(I.error)}}catch(z){m(z)}})}).catch(m)});return _(v,d),v}function Xs(c){var d=this,u=new f(function(v,y){d.ready().then(function(){pe(d._dbInfo,$,function(m,x){if(m)return y(m);try{var A=x.objectStore(d._dbInfo.storeName),M=A.openKeyCursor(),R=[];M.onsuccess=function(){var I=M.result;if(!I){v(R);return}R.push(I.key),I.continue()},M.onerror=function(){y(M.error)}}catch(I){y(I)}})}).catch(y)});return _(u,c),u}function Qs(c,d){d=b.apply(this,arguments);var u=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||u.name,c.storeName=c.storeName||u.storeName);var v=this,y;if(!c.name)y=f.reject("Invalid arguments");else{var m=c.name===u.name&&v._dbInfo.db,x=m?f.resolve(v._dbInfo.db):fe(c).then(function(A){var M=k[c.name],R=M.forages;M.db=A;for(var I=0;I<R.length;I++)R[I]._dbInfo.db=A;return A});c.storeName?y=x.then(function(A){if(A.objectStoreNames.contains(c.storeName)){var M=A.version+1;H(c);var R=k[c.name],I=R.forages;A.close();for(var z=0;z<I.length;z++){var N=I[z];N._dbInfo.db=null,N._dbInfo.version=M}var U=new f(function(F,Z){var G=h.open(c.name,M);G.onerror=function(ue){var Je=G.result;Je.close(),Z(ue)},G.onupgradeneeded=function(){var ue=G.result;ue.deleteObjectStore(c.storeName)},G.onsuccess=function(){var ue=G.result;ue.close(),F(ue)}});return U.then(function(F){R.db=F;for(var Z=0;Z<I.length;Z++){var G=I[Z];G._dbInfo.db=F,se(G._dbInfo)}}).catch(function(F){throw(ce(c,F)||f.resolve()).catch(function(){}),F})}}):y=x.then(function(A){H(c);var M=k[c.name],R=M.forages;A.close();for(var I=0;I<R.length;I++){var z=R[I];z._dbInfo.db=null}var N=new f(function(U,F){var Z=h.deleteDatabase(c.name);Z.onerror=function(){var G=Z.result;G&&G.close(),F(Z.error)},Z.onblocked=function(){console.warn('dropInstance blocked for database "'+c.name+'" until all open connections are closed')},Z.onsuccess=function(){var G=Z.result;G&&G.close(),U(G)}});return N.then(function(U){M.db=U;for(var F=0;F<R.length;F++){var Z=R[F];se(Z._dbInfo)}}).catch(function(U){throw(ce(c,U)||f.resolve()).catch(function(){}),U})})}return _(y,d),y}var eo={_driver:"asyncStorage",_initStorage:Fs,_support:p(),iterate:Hs,getItem:qs,setItem:Ws,removeItem:Ys,clear:Gs,length:Zs,key:Js,keys:Xs,dropInstance:Qs};function to(){return typeof openDatabase=="function"}var be="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ro="~~local_forage_type~",ki=/^~~local_forage_type~([^~]+)~/,St="__lfsc__:",hr=St.length,dr="arbf",fr="blob",zi="si08",Di="ui08",Ni="uic8",ji="si16",Li="si32",Bi="ur16",Ui="ui32",Ki="fl32",Vi="fl64",Fi=hr+dr.length,qi=Object.prototype.toString;function Hi(c){var d=c.length*.75,u=c.length,v,y=0,m,x,A,M;c[c.length-1]==="="&&(d--,c[c.length-2]==="="&&d--);var R=new ArrayBuffer(d),I=new Uint8Array(R);for(v=0;v<u;v+=4)m=be.indexOf(c[v]),x=be.indexOf(c[v+1]),A=be.indexOf(c[v+2]),M=be.indexOf(c[v+3]),I[y++]=m<<2|x>>4,I[y++]=(x&15)<<4|A>>2,I[y++]=(A&3)<<6|M&63;return R}function pr(c){var d=new Uint8Array(c),u="",v;for(v=0;v<d.length;v+=3)u+=be[d[v]>>2],u+=be[(d[v]&3)<<4|d[v+1]>>4],u+=be[(d[v+1]&15)<<2|d[v+2]>>6],u+=be[d[v+2]&63];return d.length%3===2?u=u.substring(0,u.length-1)+"=":d.length%3===1&&(u=u.substring(0,u.length-2)+"=="),u}function io(c,d){var u="";if(c&&(u=qi.call(c)),c&&(u==="[object ArrayBuffer]"||c.buffer&&qi.call(c.buffer)==="[object ArrayBuffer]")){var v,y=St;c instanceof ArrayBuffer?(v=c,y+=dr):(v=c.buffer,u==="[object Int8Array]"?y+=zi:u==="[object Uint8Array]"?y+=Di:u==="[object Uint8ClampedArray]"?y+=Ni:u==="[object Int16Array]"?y+=ji:u==="[object Uint16Array]"?y+=Bi:u==="[object Int32Array]"?y+=Li:u==="[object Uint32Array]"?y+=Ui:u==="[object Float32Array]"?y+=Ki:u==="[object Float64Array]"?y+=Vi:d(new Error("Failed to get type for BinaryArray"))),d(y+pr(v))}else if(u==="[object Blob]"){var m=new FileReader;m.onload=function(){var x=ro+c.type+"~"+pr(this.result);d(St+fr+x)},m.readAsArrayBuffer(c)}else try{d(JSON.stringify(c))}catch(x){console.error("Couldn't convert value into a JSON string: ",c),d(null,x)}}function no(c){if(c.substring(0,hr)!==St)return JSON.parse(c);var d=c.substring(Fi),u=c.substring(hr,Fi),v;if(u===fr&&ki.test(d)){var y=d.match(ki);v=y[1],d=d.substring(y[0].length)}var m=Hi(d);switch(u){case dr:return m;case fr:return g([m],{type:v});case zi:return new Int8Array(m);case Di:return new Uint8Array(m);case Ni:return new Uint8ClampedArray(m);case ji:return new Int16Array(m);case Bi:return new Uint16Array(m);case Li:return new Int32Array(m);case Ui:return new Uint32Array(m);case Ki:return new Float32Array(m);case Vi:return new Float64Array(m);default:throw new Error("Unkown type: "+u)}}var mr={serialize:io,deserialize:no,stringToBuffer:Hi,bufferToString:pr};function Wi(c,d,u,v){c.executeSql("CREATE TABLE IF NOT EXISTS "+d.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],u,v)}function so(c){var d=this,u={db:null};if(c)for(var v in c)u[v]=typeof c[v]!="string"?c[v].toString():c[v];var y=new f(function(m,x){try{u.db=openDatabase(u.name,String(u.version),u.description,u.size)}catch(A){return x(A)}u.db.transaction(function(A){Wi(A,u,function(){d._dbInfo=u,m()},function(M,R){x(R)})},x)});return u.serializer=mr,y}function we(c,d,u,v,y,m){c.executeSql(u,v,y,function(x,A){A.code===A.SYNTAX_ERR?x.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[d.storeName],function(M,R){R.rows.length?m(M,A):Wi(M,d,function(){M.executeSql(u,v,y,m)},m)},m):m(x,A)},m)}function oo(c,d){var u=this;c=C(c);var v=new f(function(y,m){u.ready().then(function(){var x=u._dbInfo;x.db.transaction(function(A){we(A,x,"SELECT * FROM "+x.storeName+" WHERE key = ? LIMIT 1",[c],function(M,R){var I=R.rows.length?R.rows.item(0).value:null;I&&(I=x.serializer.deserialize(I)),y(I)},function(M,R){m(R)})})}).catch(m)});return _(v,d),v}function ao(c,d){var u=this,v=new f(function(y,m){u.ready().then(function(){var x=u._dbInfo;x.db.transaction(function(A){we(A,x,"SELECT * FROM "+x.storeName,[],function(M,R){for(var I=R.rows,z=I.length,N=0;N<z;N++){var U=I.item(N),F=U.value;if(F&&(F=x.serializer.deserialize(F)),F=c(F,U.key,N+1),F!==void 0){y(F);return}}y()},function(M,R){m(R)})})}).catch(m)});return _(v,d),v}function Yi(c,d,u,v){var y=this;c=C(c);var m=new f(function(x,A){y.ready().then(function(){d===void 0&&(d=null);var M=d,R=y._dbInfo;R.serializer.serialize(d,function(I,z){z?A(z):R.db.transaction(function(N){we(N,R,"INSERT OR REPLACE INTO "+R.storeName+" (key, value) VALUES (?, ?)",[c,I],function(){x(M)},function(U,F){A(F)})},function(N){if(N.code===N.QUOTA_ERR){if(v>0){x(Yi.apply(y,[c,M,u,v-1]));return}A(N)}})})}).catch(A)});return _(m,u),m}function co(c,d,u){return Yi.apply(this,[c,d,u,1])}function lo(c,d){var u=this;c=C(c);var v=new f(function(y,m){u.ready().then(function(){var x=u._dbInfo;x.db.transaction(function(A){we(A,x,"DELETE FROM "+x.storeName+" WHERE key = ?",[c],function(){y()},function(M,R){m(R)})})}).catch(m)});return _(v,d),v}function uo(c){var d=this,u=new f(function(v,y){d.ready().then(function(){var m=d._dbInfo;m.db.transaction(function(x){we(x,m,"DELETE FROM "+m.storeName,[],function(){v()},function(A,M){y(M)})})}).catch(y)});return _(u,c),u}function ho(c){var d=this,u=new f(function(v,y){d.ready().then(function(){var m=d._dbInfo;m.db.transaction(function(x){we(x,m,"SELECT COUNT(key) as c FROM "+m.storeName,[],function(A,M){var R=M.rows.item(0).c;v(R)},function(A,M){y(M)})})}).catch(y)});return _(u,c),u}function fo(c,d){var u=this,v=new f(function(y,m){u.ready().then(function(){var x=u._dbInfo;x.db.transaction(function(A){we(A,x,"SELECT key FROM "+x.storeName+" WHERE id = ? LIMIT 1",[c+1],function(M,R){var I=R.rows.length?R.rows.item(0).key:null;y(I)},function(M,R){m(R)})})}).catch(m)});return _(v,d),v}function po(c){var d=this,u=new f(function(v,y){d.ready().then(function(){var m=d._dbInfo;m.db.transaction(function(x){we(x,m,"SELECT key FROM "+m.storeName,[],function(A,M){for(var R=[],I=0;I<M.rows.length;I++)R.push(M.rows.item(I).key);v(R)},function(A,M){y(M)})})}).catch(y)});return _(u,c),u}function mo(c){return new f(function(d,u){c.transaction(function(v){v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(y,m){for(var x=[],A=0;A<m.rows.length;A++)x.push(m.rows.item(A).name);d({db:c,storeNames:x})},function(y,m){u(m)})},function(v){u(v)})})}function go(c,d){d=b.apply(this,arguments);var u=this.config();c=typeof c!="function"&&c||{},c.name||(c.name=c.name||u.name,c.storeName=c.storeName||u.storeName);var v=this,y;return c.name?y=new f(function(m){var x;c.name===u.name?x=v._dbInfo.db:x=openDatabase(c.name,"","",0),c.storeName?m({db:x,storeNames:[c.storeName]}):m(mo(x))}).then(function(m){return new f(function(x,A){m.db.transaction(function(M){function R(U){return new f(function(F,Z){M.executeSql("DROP TABLE IF EXISTS "+U,[],function(){F()},function(G,ue){Z(ue)})})}for(var I=[],z=0,N=m.storeNames.length;z<N;z++)I.push(R(m.storeNames[z]));f.all(I).then(function(){x()}).catch(function(U){A(U)})},function(M){A(M)})})}):y=f.reject("Invalid arguments"),_(y,d),y}var vo={_driver:"webSQLStorage",_initStorage:so,_support:to(),iterate:ao,getItem:oo,setItem:co,removeItem:lo,clear:uo,length:ho,key:fo,keys:po,dropInstance:go};function yo(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Gi(c,d){var u=c.name+"/";return c.storeName!==d.storeName&&(u+=c.storeName+"/"),u}function _o(){var c="_localforage_support_test";try{return localStorage.setItem(c,!0),localStorage.removeItem(c),!1}catch{return!0}}function bo(){return!_o()||localStorage.length>0}function wo(c){var d=this,u={};if(c)for(var v in c)u[v]=c[v];return u.keyPrefix=Gi(c,d._defaultConfig),bo()?(d._dbInfo=u,u.serializer=mr,f.resolve()):f.reject()}function xo(c){var d=this,u=d.ready().then(function(){for(var v=d._dbInfo.keyPrefix,y=localStorage.length-1;y>=0;y--){var m=localStorage.key(y);m.indexOf(v)===0&&localStorage.removeItem(m)}});return _(u,c),u}function Eo(c,d){var u=this;c=C(c);var v=u.ready().then(function(){var y=u._dbInfo,m=localStorage.getItem(y.keyPrefix+c);return m&&(m=y.serializer.deserialize(m)),m});return _(v,d),v}function So(c,d){var u=this,v=u.ready().then(function(){for(var y=u._dbInfo,m=y.keyPrefix,x=m.length,A=localStorage.length,M=1,R=0;R<A;R++){var I=localStorage.key(R);if(I.indexOf(m)===0){var z=localStorage.getItem(I);if(z&&(z=y.serializer.deserialize(z)),z=c(z,I.substring(x),M++),z!==void 0)return z}}});return _(v,d),v}function Co(c,d){var u=this,v=u.ready().then(function(){var y=u._dbInfo,m;try{m=localStorage.key(c)}catch{m=null}return m&&(m=m.substring(y.keyPrefix.length)),m});return _(v,d),v}function Ao(c){var d=this,u=d.ready().then(function(){for(var v=d._dbInfo,y=localStorage.length,m=[],x=0;x<y;x++){var A=localStorage.key(x);A.indexOf(v.keyPrefix)===0&&m.push(A.substring(v.keyPrefix.length))}return m});return _(u,c),u}function Po(c){var d=this,u=d.keys().then(function(v){return v.length});return _(u,c),u}function Oo(c,d){var u=this;c=C(c);var v=u.ready().then(function(){var y=u._dbInfo;localStorage.removeItem(y.keyPrefix+c)});return _(v,d),v}function $o(c,d,u){var v=this;c=C(c);var y=v.ready().then(function(){d===void 0&&(d=null);var m=d;return new f(function(x,A){var M=v._dbInfo;M.serializer.serialize(d,function(R,I){if(I)A(I);else try{localStorage.setItem(M.keyPrefix+c,R),x(m)}catch(z){(z.name==="QuotaExceededError"||z.name==="NS_ERROR_DOM_QUOTA_REACHED")&&A(z),A(z)}})})});return _(y,u),y}function Mo(c,d){if(d=b.apply(this,arguments),c=typeof c!="function"&&c||{},!c.name){var u=this.config();c.name=c.name||u.name,c.storeName=c.storeName||u.storeName}var v=this,y;return c.name?y=new f(function(m){c.storeName?m(Gi(c,v._defaultConfig)):m(c.name+"/")}).then(function(m){for(var x=localStorage.length-1;x>=0;x--){var A=localStorage.key(x);A.indexOf(m)===0&&localStorage.removeItem(A)}}):y=f.reject("Invalid arguments"),_(y,d),y}var Ro={_driver:"localStorageWrapper",_initStorage:wo,_support:yo(),iterate:So,getItem:Eo,setItem:$o,removeItem:Oo,clear:xo,length:Po,key:Co,keys:Ao,dropInstance:Mo},To=function(d,u){return d===u||typeof d=="number"&&typeof u=="number"&&isNaN(d)&&isNaN(u)},Io=function(d,u){for(var v=d.length,y=0;y<v;){if(To(d[y],u))return!0;y++}return!1},Zi=Array.isArray||function(c){return Object.prototype.toString.call(c)==="[object Array]"},Ze={},Ji={},Be={INDEXEDDB:eo,WEBSQL:vo,LOCALSTORAGE:Ro},ko=[Be.INDEXEDDB._driver,Be.WEBSQL._driver,Be.LOCALSTORAGE._driver],Ct=["dropInstance"],gr=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ct),zo={description:"",driver:ko.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Do(c,d){c[d]=function(){var u=arguments;return c.ready().then(function(){return c[d].apply(c,u)})}}function vr(){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var u in d)d.hasOwnProperty(u)&&(Zi(d[u])?arguments[0][u]=d[u].slice():arguments[0][u]=d[u])}return arguments[0]}var No=function(){function c(d){a(this,c);for(var u in Be)if(Be.hasOwnProperty(u)){var v=Be[u],y=v._driver;this[u]=y,Ze[y]||this.defineDriver(v)}this._defaultConfig=vr({},zo),this._config=vr({},this._defaultConfig,d),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return c.prototype.config=function(u){if((typeof u>"u"?"undefined":o(u))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var v in u){if(v==="storeName"&&(u[v]=u[v].replace(/\W/g,"_")),v==="version"&&typeof u[v]!="number")return new Error("Database version must be a number.");this._config[v]=u[v]}return"driver"in u&&u.driver?this.setDriver(this._config.driver):!0}else return typeof u=="string"?this._config[u]:this._config},c.prototype.defineDriver=function(u,v,y){var m=new f(function(x,A){try{var M=u._driver,R=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!u._driver){A(R);return}for(var I=gr.concat("_initStorage"),z=0,N=I.length;z<N;z++){var U=I[z],F=!Io(Ct,U);if((F||u[U])&&typeof u[U]!="function"){A(R);return}}var Z=function(){for(var Je=function(Bo){return function(){var Uo=new Error("Method "+Bo+" is not implemented by the current driver"),Xi=f.reject(Uo);return _(Xi,arguments[arguments.length-1]),Xi}},yr=0,Lo=Ct.length;yr<Lo;yr++){var _r=Ct[yr];u[_r]||(u[_r]=Je(_r))}};Z();var G=function(Je){Ze[M]&&console.info("Redefining LocalForage driver: "+M),Ze[M]=u,Ji[M]=Je,x()};"_support"in u?u._support&&typeof u._support=="function"?u._support().then(G,A):G(!!u._support):G(!0)}catch(ue){A(ue)}});return E(m,v,y),m},c.prototype.driver=function(){return this._driver||null},c.prototype.getDriver=function(u,v,y){var m=Ze[u]?f.resolve(Ze[u]):f.reject(new Error("Driver not found."));return E(m,v,y),m},c.prototype.getSerializer=function(u){var v=f.resolve(mr);return E(v,u),v},c.prototype.ready=function(u){var v=this,y=v._driverSet.then(function(){return v._ready===null&&(v._ready=v._initDriver()),v._ready});return E(y,u,u),y},c.prototype.setDriver=function(u,v,y){var m=this;Zi(u)||(u=[u]);var x=this._getSupportedDrivers(u);function A(){m._config.driver=m.driver()}function M(z){return m._extend(z),A(),m._ready=m._initStorage(m._config),m._ready}function R(z){return function(){var N=0;function U(){for(;N<z.length;){var F=z[N];return N++,m._dbInfo=null,m._ready=null,m.getDriver(F).then(M).catch(U)}A();var Z=new Error("No available storage method found.");return m._driverSet=f.reject(Z),m._driverSet}return U()}}var I=this._driverSet!==null?this._driverSet.catch(function(){return f.resolve()}):f.resolve();return this._driverSet=I.then(function(){var z=x[0];return m._dbInfo=null,m._ready=null,m.getDriver(z).then(function(N){m._driver=N._driver,A(),m._wrapLibraryMethodsWithReady(),m._initDriver=R(x)})}).catch(function(){A();var z=new Error("No available storage method found.");return m._driverSet=f.reject(z),m._driverSet}),E(this._driverSet,v,y),this._driverSet},c.prototype.supports=function(u){return!!Ji[u]},c.prototype._extend=function(u){vr(this,u)},c.prototype._getSupportedDrivers=function(u){for(var v=[],y=0,m=u.length;y<m;y++){var x=u[y];this.supports(x)&&v.push(x)}return v},c.prototype._wrapLibraryMethodsWithReady=function(){for(var u=0,v=gr.length;u<v;u++)Do(this,gr[u])},c.prototype.createInstance=function(u){return new c(u)},c}(),jo=new No;n.exports=jo},{3:3}]},{},[4])(4)})});var Ln=X(Rt=>{"use strict";var Kc=Vc(jn());Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.default=void 0;function Vc(r){return r&&r.__esModule?r:{default:r}}function Fc(r){let e=Kc.default.createInstance({name:r});return{db:e,getItem:e.getItem,setItem:e.setItem,removeItem:e.removeItem}}var qc=Fc;Rt.default=qc});var Bn=X((lu,Tt)=>{var Jr=function(){var r=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function n(o,a){if(!i[o]){i[o]={};for(var l=0;l<o.length;l++)i[o][o.charAt(l)]=l}return i[o][a]}var s={compressToBase64:function(o){if(o==null)return"";var a=s._compress(o,6,function(l){return e.charAt(l)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:s._decompress(o.length,32,function(a){return n(e,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":s._compress(o,15,function(a){return r(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:s._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=s.compress(o),l=new Uint8Array(a.length*2),h=0,p=a.length;h<p;h++){var g=a.charCodeAt(h);l[h*2]=g>>>8,l[h*2+1]=g%256}return l},decompressFromUint8Array:function(o){if(o==null)return s.decompress(o);for(var a=new Array(o.length/2),l=0,h=a.length;l<h;l++)a[l]=o[l*2]*256+o[l*2+1];var p=[];return a.forEach(function(g){p.push(r(g))}),s.decompress(p.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":s._compress(o,6,function(a){return t.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),s._decompress(o.length,32,function(a){return n(t,o.charAt(a))}))},compress:function(o){return s._compress(o,16,function(a){return r(a)})},_compress:function(o,a,l){if(o==null)return"";var h,p,g={},f={},_="",E="",C="",b=2,O=3,T=2,k=[],S=0,$=0,w;for(w=0;w<o.length;w+=1)if(_=o.charAt(w),Object.prototype.hasOwnProperty.call(g,_)||(g[_]=O++,f[_]=!0),E=C+_,Object.prototype.hasOwnProperty.call(g,E))C=E;else{if(Object.prototype.hasOwnProperty.call(f,C)){if(C.charCodeAt(0)<256){for(h=0;h<T;h++)S=S<<1,$==a-1?($=0,k.push(l(S)),S=0):$++;for(p=C.charCodeAt(0),h=0;h<8;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1}else{for(p=1,h=0;h<T;h++)S=S<<1|p,$==a-1?($=0,k.push(l(S)),S=0):$++,p=0;for(p=C.charCodeAt(0),h=0;h<16;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1}b--,b==0&&(b=Math.pow(2,T),T++),delete f[C]}else for(p=g[C],h=0;h<T;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1;b--,b==0&&(b=Math.pow(2,T),T++),g[E]=O++,C=String(_)}if(C!==""){if(Object.prototype.hasOwnProperty.call(f,C)){if(C.charCodeAt(0)<256){for(h=0;h<T;h++)S=S<<1,$==a-1?($=0,k.push(l(S)),S=0):$++;for(p=C.charCodeAt(0),h=0;h<8;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1}else{for(p=1,h=0;h<T;h++)S=S<<1|p,$==a-1?($=0,k.push(l(S)),S=0):$++,p=0;for(p=C.charCodeAt(0),h=0;h<16;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1}b--,b==0&&(b=Math.pow(2,T),T++),delete f[C]}else for(p=g[C],h=0;h<T;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1;b--,b==0&&(b=Math.pow(2,T),T++)}for(p=2,h=0;h<T;h++)S=S<<1|p&1,$==a-1?($=0,k.push(l(S)),S=0):$++,p=p>>1;for(;;)if(S=S<<1,$==a-1){k.push(l(S));break}else $++;return k.join("")},decompress:function(o){return o==null?"":o==""?null:s._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,l){var h=[],p,g=4,f=4,_=3,E="",C=[],b,O,T,k,S,$,w,P={val:l(0),position:a,index:1};for(b=0;b<3;b+=1)h[b]=b;for(T=0,S=Math.pow(2,2),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;switch(p=T){case 0:for(T=0,S=Math.pow(2,8),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;w=r(T);break;case 1:for(T=0,S=Math.pow(2,16),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;w=r(T);break;case 2:return""}for(h[3]=w,O=w,C.push(w);;){if(P.index>o)return"";for(T=0,S=Math.pow(2,_),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;switch(w=T){case 0:for(T=0,S=Math.pow(2,8),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;h[f++]=r(T),w=f-1,g--;break;case 1:for(T=0,S=Math.pow(2,16),$=1;$!=S;)k=P.val&P.position,P.position>>=1,P.position==0&&(P.position=a,P.val=l(P.index++)),T|=(k>0?1:0)*$,$<<=1;h[f++]=r(T),w=f-1,g--;break;case 2:return C.join("")}if(g==0&&(g=Math.pow(2,_),_++),h[w])E=h[w];else if(w===f)E=O+O.charAt(0);else return null;C.push(E),h[f++]=O+E.charAt(0),g--,O=E,g==0&&(g=Math.pow(2,_),_++)}}};return s}();typeof define=="function"&&define.amd?define(function(){return Jr}):typeof Tt<"u"&&Tt!=null?Tt.exports=Jr:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return Jr})});var Vn=X((Xr,Kn)=>{Xr=Kn.exports=Hc;Xr.getSerialize=Un;function Hc(r,e,t,i){return JSON.stringify(r,Un(e,i),t)}function Un(r,e){var t=[],i=[];return e==null&&(e=function(n,s){return t[0]===s?"[Circular ~]":"[Circular ~."+i.slice(0,t.indexOf(s)).join(".")+"]"}),function(n,s){if(t.length>0){var o=t.indexOf(this);~o?t.splice(o+1):t.push(this),~o?i.splice(o,1/0,n):i.push(n),~t.indexOf(s)&&(s=e.call(this,n,s))}else t.push(s);return r==null?s:r.call(this,n,s)}}});var Wn=X(Qr=>{"use strict";Object.defineProperty(Qr,"__esModule",{value:!0});Qr.default=Jc;var Wc=Gr(),Yc=Bn(),Fn=Hn(Yc),Gc=Vn(),Zc=Hn(Gc);function Hn(r){return r&&r.__esModule?r:{default:r}}var qn="production";function Jc(r){return(0,Wc.createTransform)(function(e){return Fn.default.compressToUTF16((0,Zc.default)(e))},function(e){if(typeof e!="string")return qn!=="production"&&console.error("redux-persist-transform-compress: expected outbound state to be a string"),e;try{return JSON.parse(Fn.default.decompressFromUTF16(e))}catch(t){return qn!=="production"&&console.error("redux-persist-transform-compress: error while decompressing state",t),null}},r)}});var _t,Ss=wr(()=>{_t=class{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let i=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-i}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}}});function vi(r){return r==="horizontal"?"width":"height"}var ir,Cs=wr(()=>{ir=class{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){e=e==="horizontal"?e:"vertical",e!==this._direction&&(this._direction=e,this._sizeDim=e==="horizontal"?"width":"height",this._secondarySizeDim=e==="horizontal"?"height":"width",this._positionDim=e==="horizontal"?"left":"top",this._secondaryPositionDim=e==="horizontal"?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:i}=this;Object.assign(this._viewportSize,e),i!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(this._pin!==null){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[vi(this.direction)]-this._viewDim1))}unpin(){this._pin!==null&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(this.pin!==null){let e=this._scrollPosition,{index:t,block:i}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:i||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,i=Math.min(this.items.length,Math.max(0,e.index)),n=this._getItemPosition(i)[this._positionDim],s=n;if(t!=="start"){let o=this._getItemSize(i)[this._sizeDim];if(t==="center")s=n-.5*this._viewDim1+.5*o;else{let a=n-this._viewDim1+o;if(t==="end")s=a;else{let l=this._scrollPosition;s=Math.abs(l-n)<Math.abs(l-a)?n:a}}}return s+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(s)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(this._first!==-1&&this._last!==-1)for(let i=this._first;i<=this._last;i++)e.set(i,this._getItemPosition(i));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return this._first===-1||this._last===-1?0:this._last-this._first+1}_checkThresholds(){if(this._viewDim1===0&&this._num>0||this._pin!==null)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(this._first===-1||this._last===-1)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let i=this._last;for(;i>this._first&&Math.round(this._getItemPosition(i)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)i--;(t!==this._firstVisible||i!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=i,e&&e.emit&&this._sendVisibilityChangedMessage())}}});var Ps={};Qi(Ps,{FlowLayout:()=>nr,flow:()=>wl});function As(r){return r==="horizontal"?"marginLeft":"marginTop"}function xl(r){return r==="horizontal"?"marginRight":"marginBottom"}function El(r){return r==="horizontal"?"xOffset":"yOffset"}function Sl(r,e){let t=[r,e].sort();return t[1]<=0?Math.min(...t):t[0]>=0?Math.max(...t):t[0]+t[1]}var wl,yi,nr,Os=wr(()=>{Ss();Cs();wl=r=>Object.assign({type:nr},r);yi=class{constructor(){this._childSizeCache=new _t,this._marginSizeCache=new _t,this._metricsCache=new Map}update(e,t){let i=new Set;Object.keys(e).forEach(n=>{let s=Number(n);this._metricsCache.set(s,e[s]),this._childSizeCache.set(s,e[s][vi(t)]),i.add(s),i.add(s+1)});for(let n of i){let s=this._metricsCache.get(n)?.[As(t)]||0,o=this._metricsCache.get(n-1)?.[xl(t)]||0;this._marginSizeCache.set(n,Sl(s,o))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[As(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}},nr=class extends ir{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new yi,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(this._first===-1||this._last===-1)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let i=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(i*t.averageChildSize+(i-1)*t.averageMarginSize)}else{let i=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+i*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:i}=this._metricsCache;return e===0?this._metricsCache.getMarginSize(0)??i:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(this._physicalItems.size===0)return this._calculateAnchor(e,t);if(this._first<0)return this._calculateAnchor(e,t);if(this._last<0)return this._calculateAnchor(e,t);let i=this._getPhysicalItem(this._first),n=this._getPhysicalItem(this._last),s=i.pos;if(n.pos+this._metricsCache.getChildSize(this._last)<e)return this._calculateAnchor(e,t);if(s>t)return this._calculateAnchor(e,t);let l=this._firstVisible-1,h=-1/0;for(;h<e;)h=this._getPhysicalItem(++l).pos+this._metricsCache.getChildSize(l);return l}_getActiveItems(){this._viewDim1===0||this.items.length===0?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e=this._newPhysicalItems;this._stable=!0;let t,i;if(this.pin!==null){let{index:h}=this.pin;this._anchorIdx=h,this._anchorPos=this._getPosition(h)}if(t=this._scrollPosition-this._overhang,i=this._scrollPosition+this._viewDim1+this._overhang,i<0||t>this._scrollSize){this._clearItems();return}(this._anchorIdx===null||this._anchorPos===null)&&(this._anchorIdx=this._getAnchor(t,i),this._anchorPos=this._getPosition(this._anchorIdx));let n=this._getSize(this._anchorIdx);n===void 0&&(this._stable=!1,n=this._getAverageSize());let s=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,o=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;this._anchorIdx===0&&(this._anchorPos=s),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-o-n);let a=0;for(this._anchorPos+n+o<t&&(a=t-(this._anchorPos+n+o)),this._anchorPos-s>i&&(a=i-(this._anchorPos-s)),a&&(this._scrollPosition-=a,t-=a,i-=a,this._scrollError+=a),e.set(this._anchorIdx,{pos:this._anchorPos,size:n}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-s,this._physicalMax=this._anchorPos+n+o;this._physicalMin>t&&this._first>0;){let h=this._getSize(--this._first);h===void 0&&(this._stable=!1,h=this._getAverageSize());let p=this._metricsCache.getMarginSize(this._first);p===void 0&&(this._stable=!1,p=this._metricsCache.averageMarginSize),this._physicalMin-=h;let g=this._physicalMin;if(e.set(this._first,{pos:g,size:h}),this._physicalMin-=p,this._stable===!1&&this._estimate===!1)break}for(;this._physicalMax<i&&this._last<this.items.length-1;){let h=this._getSize(++this._last);h===void 0&&(this._stable=!1,h=this._getAverageSize());let p=this._metricsCache.getMarginSize(this._last);p===void 0&&(this._stable=!1,p=this._metricsCache.averageMarginSize);let g=this._physicalMax;if(e.set(this._last,{pos:g,size:h}),this._physicalMax+=h+p,!this._stable&&!this._estimate)break}let l=this._calculateError();l&&(this._physicalMin-=l,this._physicalMax-=l,this._anchorPos-=l,this._scrollPosition-=l,e.forEach(h=>h.pos-=l),this._scrollError+=l),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e)}_calculateError(){return this._first===0?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(this._first===-1&&this._last==-1||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,[El(this.direction)]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}});var Pr={};Qi(Pr,{__DO_NOT_USE__ActionTypes:()=>Qe,applyMiddleware:()=>Ar,bindActionCreators:()=>Xo,combineReducers:()=>Cr,compose:()=>At,createStore:()=>et,isAction:()=>Qo,isPlainObject:()=>Sr,legacy_createStore:()=>Zo});function Q(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var Yo=typeof Symbol=="function"&&Symbol.observable||"@@observable",en=Yo,Er=()=>Math.random().toString(36).substring(7).split("").join("."),Go={INIT:`@@redux/INIT${Er()}`,REPLACE:`@@redux/REPLACE${Er()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Er()}`},Qe=Go;function Sr(r){if(typeof r!="object"||r===null)return!1;let e=r;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e||Object.getPrototypeOf(r)===null}function et(r,e,t){if(typeof r!="function")throw new Error(Q(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Q(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Q(1));return t(et)(r,e)}let i=r,n=e,s=new Map,o=s,a=0,l=!1;function h(){o===s&&(o=new Map,s.forEach((b,O)=>{o.set(O,b)}))}function p(){if(l)throw new Error(Q(3));return n}function g(b){if(typeof b!="function")throw new Error(Q(4));if(l)throw new Error(Q(5));let O=!0;h();let T=a++;return o.set(T,b),function(){if(O){if(l)throw new Error(Q(6));O=!1,h(),o.delete(T),s=null}}}function f(b){if(!Sr(b))throw new Error(Q(7));if(typeof b.type>"u")throw new Error(Q(8));if(typeof b.type!="string")throw new Error(Q(17));if(l)throw new Error(Q(9));try{l=!0,n=i(n,b)}finally{l=!1}return(s=o).forEach(T=>{T()}),b}function _(b){if(typeof b!="function")throw new Error(Q(10));i=b,f({type:Qe.REPLACE})}function E(){let b=g;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(Q(11));function T(){let S=O;S.next&&S.next(p())}return T(),{unsubscribe:b(T)}},[en](){return this}}}return f({type:Qe.INIT}),{dispatch:f,subscribe:g,getState:p,replaceReducer:_,[en]:E}}function Zo(r,e,t){return et(r,e,t)}function Jo(r){Object.keys(r).forEach(e=>{let t=r[e];if(typeof t(void 0,{type:Qe.INIT})>"u")throw new Error(Q(12));if(typeof t(void 0,{type:Qe.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Q(13))})}function Cr(r){let e=Object.keys(r),t={};for(let o=0;o<e.length;o++){let a=e[o];typeof r[a]=="function"&&(t[a]=r[a])}let i=Object.keys(t),n,s;try{Jo(t)}catch(o){s=o}return function(a={},l){if(s)throw s;let h=!1,p={};for(let g=0;g<i.length;g++){let f=i[g],_=t[f],E=a[f],C=_(E,l);if(typeof C>"u"){let b=l&&l.type;throw new Error(Q(14))}p[f]=C,h=h||C!==E}return h=h||i.length!==Object.keys(a).length,h?p:a}}function tn(r,e){return function(...t){return e(r.apply(this,t))}}function Xo(r,e){if(typeof r=="function")return tn(r,e);if(typeof r!="object"||r===null)throw new Error(Q(16));let t={};for(let i in r){let n=r[i];typeof n=="function"&&(t[i]=tn(n,e))}return t}function At(...r){return r.length===0?e=>e:r.length===1?r[0]:r.reduce((e,t)=>(...i)=>e(t(...i)))}function Ar(...r){return e=>(t,i)=>{let n=e(t,i),s=()=>{throw new Error(Q(15))},o={getState:n.getState,dispatch:(l,...h)=>s(l,...h)},a=r.map(l=>l(o));return s=At(...a)(n.dispatch),{...n,dispatch:s}}}function Qo(r){return Sr(r)&&"type"in r&&typeof r.type=="string"}function Me(){return Me=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Me.apply(this,arguments)}function ea(r){var e;r.models.forEach(function(l){return an(r,l)});var t=cn(r),i=Ar.apply(Pr,r.reduxConfig.middlewares),n=r.reduxConfig.devtoolComposer?(e=r.reduxConfig).devtoolComposer.apply(e,r.reduxConfig.enhancers.concat([i])):ra(r.reduxConfig.devtoolOptions).apply(void 0,r.reduxConfig.enhancers.concat([i])),s=r.reduxConfig.createStore||et,o=r.reduxConfig.initialState,a=o===void 0?{}:o;return s(t,a,n)}function an(r,e){var t={},i=Object.keys(e.reducers);i.forEach(function(a){var l=ia(a)?a:e.name+"/"+a;t[l]=e.reducers[a]});var n=function(l,h){return l===void 0&&(l=e.state),h.type in t?t[h.type](l,h.payload,h.meta):l},s=e.baseReducer,o=s?function(a,l){return a===void 0&&(a=e.state),n(s(a,l),l)}:n;r.forEachPlugin("onReducer",function(a){o=a(o,e.name,r)||o}),r.reduxConfig.reducers[e.name]=o}function cn(r){var e=r.reduxConfig.rootReducers,t=ta(r.reduxConfig),i=t;return e&&Object.keys(e).length&&(i=function(s,o){var a=e[o.type];return t(a?a(s,o):s,o)}),r.forEachPlugin("onRootReducer",function(n){i=n(i,r)||i}),i}function ta(r){var e=r.combineReducers||Cr;return Object.keys(r.reducers).length?e(r.reducers):function(t){return t}}function ra(r){return r===void 0&&(r={}),!r.disabled&&typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(r):At}function ia(r){return r.indexOf("/")>-1}var rn=function(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)},xe=function(e){return!e||typeof e=="function"},tt=function(e){if(0)var t,i},na=function(e){tt(function(){return[[!Array.isArray(e.plugins),"init config.plugins must be an array"],[!rn(e.models),"init config.models must be an object"],[!rn(e.redux.reducers),"init config.redux.reducers must be an object"],[!Array.isArray(e.redux.middlewares),"init config.redux.middlewares must be an array"],[!Array.isArray(e.redux.enhancers),"init config.redux.enhancers must be an array of functions"],[!xe(e.redux.combineReducers),"init config.redux.combineReducers must be a function"],[!xe(e.redux.createStore),"init config.redux.createStore must be a function"]]})},ln=function(e){tt(function(){return[[!e,"model config is required"],[typeof e.name!="string",'model "name" [string] is required'],[e.state===void 0&&e.baseReducer===void 0,'model "state" is required'],[!xe(e.baseReducer),'model "baseReducer" must be a function']]})},sa=function(e){tt(function(){return[[!xe(e.onStoreCreated),"Plugin onStoreCreated must be a function"],[!xe(e.onModel),"Plugin onModel must be a function"],[!xe(e.onReducer),"Plugin onReducer must be a function"],[!xe(e.onRootReducer),"Plugin onRootReducer must be a function"],[!xe(e.createMiddleware),"Plugin createMiddleware must be a function"]]})},oa=function(e,t,i){tt(function(){return[[!!i.match(/\/.+\//),"Invalid reducer name ("+e+"/"+i+")"],[typeof t[i]!="function","Invalid reducer ("+e+"/"+i+"). Must be a function"]]})},aa=function(e,t,i){tt(function(){return[[!!i.match(/\//),"Invalid effect name ("+e+"/"+i+")"],[typeof t[i]!="function","Invalid effect ("+e+"/"+i+"). Must be a function"]]})},un=function(e,t,i,n){return Object.assign(function(s,o){var a={type:t+"/"+i};return typeof s<"u"&&(a.payload=s),typeof o<"u"&&(a.meta=o),e.dispatch(a)},{isEffect:n})},ca=function(e,t){var i=e.dispatch[t.name],n=Object.keys(t.reducers);n.forEach(function(s){oa(t.name,t.reducers,s),i[s]=un(e,t.name,s,!1)})},la=function(e,t,i){var n=e.dispatch[i.name],s={};i.effects&&(s=typeof i.effects=="function"?i.effects(e.dispatch):i.effects);var o=Object.keys(s);o.forEach(function(a){aa(i.name,s,a),t.effects[i.name+"/"+a]=s[a].bind(n),n[a]=un(e,i.name,a,!0)})};function ua(r){return{models:ha(r.models),reduxConfig:r.redux,forEachPlugin:function(t,i){r.plugins.forEach(function(n){n[t]&&i(n[t])})},effects:{}}}function ha(r){return Object.keys(r).map(function(e){var t=da(e,r[e]);return ln(t),t})}function da(r,e){return Me({name:r,reducers:{}},e)}function fa(r){var e=ua(r);e.reduxConfig.middlewares.push(pa(e)),e.forEachPlugin("createMiddleware",function(n){e.reduxConfig.middlewares.push(n(e))});var t=ea(e),i=Me({},t,{name:r.name,addModel:function(s){ln(s),an(e,s),nn(i,s),sn(i,e,s),t.replaceReducer(cn(e)),t.dispatch({type:"@@redux/REPLACE"})}});return ma(i,r.plugins),e.models.forEach(function(n){return nn(i,n)}),e.models.forEach(function(n){return sn(i,e,n)}),e.forEachPlugin("onStoreCreated",function(n){i=n(i,e)||i}),i}function pa(r){return function(e){return function(t){return function(i){return i.type in r.effects?(t(i),r.effects[i.type](i.payload,e.getState(),i.meta)):t(i)}}}}function nn(r,e){var t={};r.dispatch[""+e.name]=t,ca(r,e)}function sn(r,e,t){la(r,e,t),e.forEachPlugin("onModel",function(i){i(t,r)})}function ma(r,e){e.forEach(function(t){if(t.exposed){var i=Object.keys(t.exposed);i.forEach(function(n){if(t.exposed){var s=t.exposed[n],o=typeof s=="function";r[n]=o?function(){for(var a=arguments.length,l=new Array(a),h=0;h<a;h++)l[h]=arguments[h];return s.apply(void 0,[r].concat(l))}:Object.create(t.exposed[n])}})}})}var on=0;function ga(r){var e,t,i,n=(e=r.name)!=null?e:"Rematch Store "+on;on+=1;var s={name:n,models:r.models||{},plugins:r.plugins||[],redux:Me({reducers:{},rootReducers:{},enhancers:[],middlewares:[]},r.redux,{devtoolOptions:Me({name:n},(t=(i=r.redux)==null?void 0:i.devtoolOptions)!=null?t:{})})};return na(s),s.plugins.forEach(function(o){o.config&&(s.models=Pt(s.models,o.config.models),o.config.redux&&(s.redux.initialState=Pt(s.redux.initialState,o.config.redux.initialState),s.redux.reducers=Pt(s.redux.reducers,o.config.redux.reducers),s.redux.rootReducers=Pt(s.redux.rootReducers,o.config.redux.reducers),s.redux.enhancers=[].concat(s.redux.enhancers,o.config.redux.enhancers||[]),s.redux.middlewares=[].concat(s.redux.middlewares,o.config.redux.middlewares||[]),s.redux.combineReducers=s.redux.combineReducers||o.config.redux.combineReducers,s.redux.createStore=s.redux.createStore||o.config.redux.createStore)),sa(o)}),s}function Pt(r,e){return e?Me({},e,r):r}var hn=function(e){var t=ga(e||{});return fa(t)};var Ot="NOT_FOUND";function va(r){var e;return{get:function(i){return e&&r(e.key,i)?e.value:Ot},put:function(i,n){e={key:i,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function ya(r,e){var t=[];function i(a){var l=t.findIndex(function(p){return e(a,p.key)});if(l>-1){var h=t[l];return l>0&&(t.splice(l,1),t.unshift(h)),h.value}return Ot}function n(a,l){i(a)===Ot&&(t.unshift({key:a,value:l}),t.length>r&&t.pop())}function s(){return t}function o(){t=[]}return{get:i,put:n,getEntries:s,clear:o}}var dn=function(e,t){return e===t};function _a(r){return function(t,i){if(t===null||i===null||t.length!==i.length)return!1;for(var n=t.length,s=0;s<n;s++)if(!r(t[s],i[s]))return!1;return!0}}function fn(r,e){var t=typeof e=="object"?e:{equalityCheck:e},i=t.equalityCheck,n=i===void 0?dn:i,s=t.maxSize,o=s===void 0?1:s,a=t.resultEqualityCheck,l=_a(n),h=o===1?va(l):ya(o,l);function p(){var g=h.get(arguments);if(g===Ot){if(g=r.apply(null,arguments),a){var f=h.getEntries(),_=f.find(function(E){return a(E.value,g)});_&&(g=_.value)}h.put(arguments,g)}return g}return p.clearCache=function(){return h.clear()},p}function ba(r){var e=Array.isArray(r[0])?r[0]:r;if(!e.every(function(i){return typeof i=="function"})){var t=e.map(function(i){return typeof i=="function"?"function "+(i.name||"unnamed")+"()":typeof i}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function wa(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var n=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];var h=0,p,g={memoizeOptions:void 0},f=a.pop();if(typeof f=="object"&&(g=f,f=a.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var _=g,E=_.memoizeOptions,C=E===void 0?t:E,b=Array.isArray(C)?C:[C],O=ba(a),T=r.apply(void 0,[function(){return h++,f.apply(null,arguments)}].concat(b)),k=r(function(){for(var $=[],w=O.length,P=0;P<w;P++)$.push(O[P].apply(null,arguments));return p=T.apply(null,$),p});return Object.assign(k,{resultFunc:f,memoizedResultFunc:T,dependencies:O,lastResult:function(){return p},recomputations:function(){return h},resetRecomputations:function(){return h=0}}),k};return n}var Or=wa(fn),pn=function(e,t){if(t===void 0&&(t=Or),typeof e!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof e));var i=Object.keys(e),n=t(i.map(function(s){return e[s]}),function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return o.reduce(function(l,h,p){return l[i[p]]=h,l},{})});return n};var xa=function(){function e(t,i){i===void 0&&(i=pn);var n=function(o,a){return n=i(t(e)),n(o,a)};return function(s,o){return n(s,o)}}return e},Ea=function(){var e=!1,t=new Set;return{add:function(n){e?n.forEach(function(s){return s()}):n.forEach(function(s){return t.add(s)})},finish:function(n){t.delete(n)},startBuilding:function(){e=!0,t.forEach(function(n){return n()})}}},Sa=function(e){},Ca=function(e,t,i){},mn=function(e){e===void 0&&(e={}),Sa(e);var t=e.sliceState||function(l,h){return l[h.name||""]},i=e.selectorCreator||Or,n=function(h){return function(p){return typeof p=="function"?i(function(g){return t(g,h)},p):t(p,h)}},s=function(h){return function(p){var g=this;return i(function(f){return f},function(f){return h.call(g,p,f)})}},o=Ea(),a=xa();return{exposed:{select:a,sliceState:t,selectorCreator:i},onModel:function(h){a[h.name]={};var p=typeof h.selectors=="function"?h.selectors(n(h),i,s):h.selectors;o.add(Object.keys(p||{}).map(function(g){Ca(p,g,h);var f=function _(){return o.finish(_),delete a[h.name][g],a[h.name][g]=p[g].call(a[h.name],a),a[h.name][g]};return Object.defineProperty(a[h.name],g,{configurable:!0,get:function(){return f()}}),f}))},onStoreCreated:function(h){o.startBuilding(),h.select=a}}};var nt=xr(Gr()),Uc;var Dn=function(e,t,i,n){if(t===void 0&&(t={}),!e)throw new Error("persist plugin is missing config object");return{onReducer:function(o,a){var l=t[a];if(l)return(0,nt.persistReducer)(l,o)},onRootReducer:function(o){return(0,nt.persistReducer)(e,o)},onStoreCreated:function(o){Uc=(0,nt.persistStore)(o,i,n)}}};var Zn=xr(Ln(),1),Jn=xr(Wn(),1);var{entries:ge,fromEntries:Ae,keys:ei,values:ti}=Object,It=(r,e)=>Ae(ge(r).map(([t,i])=>[t,e(i,t,r)])),Yn=(r,e)=>Ae(ge(r).filter(([t,i])=>e(i,t,r)));var Re=(r,e)=>{switch(typeof r){case"number":return r+(e??0);case"object":return(Array.isArray(r)?r:[r]).reduce((t,i)=>typeof i=="number"?i+(t??0):{...t??{},...It(i,(n,s)=>Re(n,(t??{})[s]))},e)}},kt=(r,e)=>It(e,t=>r.flatMap(i=>t.flatMap(n=>n in i?i[n]:[])).reduce((i,n)=>i+n,0)),st=(r,e)=>{r||console.error(e)};var Pe=class{constructor(e){this.config=e}formatUrl(e){throw new Error("formatUrl must be implemented")}formatMessages(e){throw new Error("formatMessages must be implemented")}createRequestPayload(e){throw new Error("createRequestPayload must be implemented")}getHeaders(){throw new Error("getHeaders must be implemented")}handleResponseJson(e,t){throw new Error("handleResponseJson must be imolemented")}parseStreamChunk(e){throw new Error("parseStreamChunk must be implemented")}};var de=class extends Pe{formatUrl(e){return`${e}/chat/completions`}formatMessages(e){return e.map(({role:t,content:i})=>({role:t,content:i}))}createRequestPayload(e){let t=Yn({model:this.config.model,messages:this.formatMessages(e),max_tokens:this.config.maxTokens,temperature:this.config.temperature,response_format:this.config.responseFormat,stream:this.config.stream,stream_options:this.config.stream?{include_usage:!0}:void 0},i=>i!==void 0);if(this.config.provider==="openai"&&this.config.model==="o1"&&this.config.stream&&(t.stream=!1,delete t.stream_options),this.config.provider==="openai"&&this.config.model.startsWith("o")?t.reasoning_effort=this.config.reasoningEffort??"low":delete t.reasoning_effort,this.config.provider==="mistral"&&delete t.stream_options,["deepseek","openrouter"].includes(this.config.provider)&&t.response_format&&t.response_format.type==="json_schema"){if(this.config.provider!=="deepseek"||this.config.provider==="deepseek"&&this.config.model!=="deepseek-reasoner"){let i=t.response_format.json_schema;delete t.response_format,t.tools=[{type:"function",function:{name:i.name,description:i.description,parameters:i.schema}}],t.tool_choice={type:"function",function:{name:"CheckersMove"}}}this.config.provider==="deepseek"&&this.config.model==="deepseek-reasoner"&&(delete t.temperature,delete t.response_format,t.messages[0].content+='Please respond in this format: {"comment": "your comment", "move": "your move"}')}return t}getHeaders(){return{"Content-Type":"application/json",Authorization:`Bearer ${this.config.apiKey}`}}handleResponseJson(e){e.choices.length!==1&&console.warn(`response includes ${e.choices.length} choices.`);let t=e.choices[0]?.finish_reason,i=e.choices[0]?.message,n=e.usage;return{content:t==="tool_calls"?i.tool_calls[0].function.arguments:i?.content,message:i,usage:n}}parseStreamChunk({data:e},t){let i=JSON.parse(e),n="",s="";if(!t.id)t={...i,id:i.id??Date.now(),choices:[{...i.choices[0],message:i.choices[0].delta}]},n=i.choices[0].delta.content??"",delete t.choices[0].delta;else{if("content"in(i.choices[0]?.delta??{})&&i.choices[0]?.delta?.content)t.choices[0].message.content+=n=i.choices[0].delta.content??"";else if("tool_calls"in(i.choices[0]?.delta??{})){let o=i.choices[0].delta.tool_calls[0];t.choices[0].message.tool_calls??=[];let a=t.choices[0].message.tool_calls,l=o.index;a[l]??={function:{arguments:""}},a[l].function.arguments+=o.function.arguments??"",l===0&&(n=o.function.arguments??"")}else"reasoning_content"in(i.choices[0]?.delta??{})&&i.choices[0]?.delta?.reasoning_content&&(t.choices[0].message.reasoning_content??="",t.choices[0].message.reasoning_content+=s=i.choices[0].delta.reasoning_content);i.choices.length&&(t.choices[0].finish_reason=i.choices[0].finish_reason),i.usage&&(t.usage=i.usage)}return{partialReasoningContent:s,partialContent:n,parsed:i,message:t}}};var ot=class extends Pe{formatUrl(e){return`${e}/messages`}formatMessages(e){return e.map(t=>({role:t.role==="assistant"?"assistant":"user",content:t.content}))}createRequestPayload(e){return{model:this.config.model,messages:this.formatMessages(e),max_tokens:this.config.maxTokens??8192,temperature:this.config.temperature,stream:this.config.stream,tool_choice:{type:"tool",name:"CheckersMove"},tools:[{name:"CheckersMove",description:"Take your turn at checkers",input_schema:this.config.responseFormat.json_schema.schema}]}}getHeaders(){let e={"Content-Type":"application/json","x-api-key":this.config.apiKey,"anthropic-version":this.config.anthropicVersion};return globalThis.navigator&&(e["anthropic-dangerous-direct-browser-access"]="true"),e}handleResponseJson(e){e.content.length!==1&&console.warn(`response includes ${e.content.length} content blocks.`);let t=e.content[0],i=t.type==="text"?t.text:t.type==="tool_use"?JSON.stringify(t.input):void 0,n={role:e.role,content:i},s=e.usage;return{content:i,message:n,usage:s}}accum=[];parseStreamChunk(e,t){let i=JSON.parse(e.data),n="";switch(i.type==="content_block_delta"&&(i.delta?.type==="text_delta"?n=i.delta.text:i.delta?.type==="input_json_delta"&&(n=i.delta.partial_json)),e.data=i,e.event){case"message_start":t={...e.data.message};break;case"content_block_start":t.content[e.data.index]=e.data.content_block;break;case"content_block_delta":let s=e.data.delta.type==="input_json_delta"?"partial_json":"text";this.accum.push(e.data.delta[s]);break;case"content_block_stop":let o=t.content[e.data.index].type,a=o==="tool_use"?JSON.parse(this.accum.join("")):this.accum.join(""),l=o==="tool_use"?"input":"text";t.content[e.data.index][l]=a,this.accum.length=0;break;case"message_delta":t={...t,...e.data.delta};break;case"message_stop":case"ping":default:break}return{partialContent:n,message:t,parsed:i}}};var K={openai:{name:"OpenAI",baseUrl:"https://api.openai.com/v1",models:["gpt-4o","gpt-4o-mini","o1","o3-mini"],defaultModel:"gpt-4o",apiStyle:"openai",apiKeyName:"OPENAI_API_KEY",handler:de},anthropic:{name:"Anthropic",baseUrl:"https://api.anthropic.com/v1",models:["claude-3-5-sonnet-20241022","claude-3-5-haiku-20241022"],defaultModel:"claude-3-5-sonnet-20241022",apiStyle:"anthropic",apiKeyName:"ANTHROPIC_API_KEY",anthropicVersion:"2023-12-06",handler:ot},deepseek:{name:"DeepSeek",baseUrl:"https://api.deepseek.com",models:["deepseek-chat","deepseek-reasoner"],defaultModel:"deepseek-chat",apiStyle:"openai",apiKeyName:"DEEPSEEK_API_KEY",handler:de},google:{name:"Google",baseUrl:"https://generativelanguage.googleapis.com/v1beta/openai",models:["gemini-2.0-flash-exp","gemini-2.0-flash-thinking-exp","gemini-1.5-flash","gemini-1.5-pro"],defaultModel:"gemini-2.0-flash-exp",handler:de,apiStyle:"openai",apiKeyName:"GEMINI_API_KEY"},mistral:{name:"Mistral AI",baseUrl:"https://api.mistral.ai/v1",models:["mistral-tiny","mistral-small","codestral-2501"],defaultModel:"mistral-tiny",apiStyle:"openai",apiKeyName:"MISTRAL_API_KEY",handler:de},lmstudio:{name:"LM Studio",apiStyle:"openai",models:["llama-3.2-3b-instruct","qwen2.5-14b-instruct","deepseek-r1-distill-qwen-14b","deepseek-r1-distill-llama-8b","qwen2.5-7b-instruct-1m"],defaultModel:"llama-3.2-3b-instruct",baseUrl:"http://0.0.0.0:1234/v1",configurableUrl:!0,handler:de},ollama:{name:"Ollama",baseUrl:"http://0.0.0.0:11434/v1",apiStyle:"openai",models:["llama3.2:3b","phi4","deepseek-r1:7b"],defaultModel:"phi4",configurableUrl:!0,handler:de},openrouter:{name:"OpenRouter",baseUrl:"https://openrouter.ai/api/v1",apiStyle:"openai",apiKeyName:"OPENROUTER_API_KEY",models:["minimax/minimax-01","qwen/qvq-72b-preview"],defaultModel:"qwen/qvq-72b-preview",handler:de}};var ri={r:"red",R:"red",b:"black",B:"black"},ii={r:"pawn",R:"king",b:"pawn",B:"king"},Gn=[..."ABCDEFGH"],zt={};for(let r=0;r<12;r++){let e=r/4,t=Math.floor(e),i=e%1*8+(1+t)%2;zt[`${Gn[i]}${t+1}`]=`b${r}`,zt[`${Gn[7-i]}${8-t}`]=`r${r}`}var Xc={currentMatch:{name:"currentMatch",state:{id:""},reducers:{start(r,{red:e,black:t}){let i=crypto.randomUUID(),n=Date.now();return{...r,id:i,started:n,red:e,black:t,turns:[]}},turn(r,{turn:e}){let t=Re([r.usage??{},{[e.color]:e.response?.usage??{}}]);return{...r,usage:t,turns:[...r.turns,e]}},"board/capture":(r,e)=>{let t=r.turns.at(-1),i=t.captures??[];return{...r,turns:[...r.turns.slice(0,-1),{...t,captures:[...i,e.position]}]}},end(r,{result:e}){return{...r,result:e,ended:Date.now()}},reset(r){return{}}},effects:r=>({start(e,t){},end(e,t){r.matches.add({match:{...t.currentMatch}}),r.currentMatch.reset()},turn(e,t){}}),selectors:(r,e,t)=>({usage(){return e(r,i=>i?.usage??{})}})},matches:{name:"matches",state:[],reducers:{add:(r,{match:e})=>[...r,e]},selectors:(r,e,t)=>({matches(){return e(r,i=>i)},usageByProvider(){return e(r,i=>n=>{let s=o=>o.turns?.filter(a=>o[a.color]?.provider===n&&a.response?.usage)??[];return Re(i.flatMap(s).map(o=>o.response?.usage??{}))})},matchesByProvider(){return e(r,i=>n=>i.filter(s=>s.red.provider===n||s.black.provider===n))},matchesWonByProvider(){return e(this.matchesByProvider,i=>n=>i(n).filter(s=>s[s.result?.winner]?.provider===n))},matchesWonAndLostByProvider(){return e(r,i=>i.reduce((n,s)=>{if(!s.result||s.result.winner==="Error")return n;let o=s[s.result.winner]?.provider??"other",a=s[s.result.winner==="red"?"black":"red"]?.provider??"other";return n[o]??={wins:[],losses:[]},n[a]??={wins:[],losses:[]},n[o].wins.push(s),n[a].losses.push(s),n},{}))}})},board:{name:"board",state:{positions:{...zt},captures:[]},reducers:{move(r,{from:e,to:t}){let i={...r.positions,[t]:r.positions[e]};return delete i[e],{...r,positions:i}},capture(r,{position:e}){let t={...r.positions},i=t[e];return delete t[e],{...r,positions:t,captures:[...r.captures,{color:ri[i[0]],rank:ii[i[0]],position:e,piece:i}]}},promote(r,{position:e}){let{positions:t}=r;return{...r,positions:{...t,[e]:t[e].toUpperCase()}}},reset(r){return{...r,positions:{...zt},turns:[],captures:[]}}},selectors:(r,e,t)=>({pieces(){return e(r,i=>i.positions)},piece(){return e(this.pieces,i=>n=>i[n])},occupied(){return e(this.piece,i=>n=>!i(n))},pieceColor(){return e(this.piece,i=>n=>ri[i(n)[0]])},rank(){return e(this.piece,i=>n=>ii[i(n)[0]])},captures(){return r(i=>i.captures.map(n=>({color:ri[n.piece[0]],rank:ii[n.piece[0]],...n})))},redCaptures(){return e(this.captures,i=>i.filter(({color:n})=>n==="red"))},blackCaptures(){return e(this.captures,i=>i.filter(({color:n})=>n==="black"))}})},apiKeys:{name:"apiKeys",state:{apiKeys:{openai:"",anthropic:"",google:"",mistral:"",deepseek:"",openrouter:""}},reducers:{set(r,{provider:e,apiKey:t,...i}){return e?{...r,apiKeys:{...r.apiKeys,[e]:t}}:(i=Ae(ge(i).filter(([n])=>n in K)),{...r,apiKeys:{...r.apiKeys,...i}})},"persist/REHYDRATE":(r,e,t)=>{if(e?.settings?.ui?.saveApiKeys){let i=Ae(ge(e.settings.recentApiKeys).filter(([n,s])=>n in K));return{...r,apiKeys:{...r.apiKeys,...i}}}return r}},effects:r=>({async sendKeys(e,t){r.apiKeys.set({...t.apiKeys.apiKeys})}}),selectors:(r,e,t)=>({apiKeys(){return e(r,i=>i.apiKeys)},apiKey(){return e(r,i=>n=>i.apiKeys[n])},provider(){return e(r,i=>n=>i.provider[n])},apiKeyByColor(){return e(this.provider,this.apiKey,(i,n)=>s=>n(i(s)))}})},settings:{name:"settings",state:{recentModels:{openai:K.openai.defaultModel,anthropic:K.anthropic.defaultModel,google:K.google.defaultModel,mistral:K.mistral.defaultModel,deepseek:K.deepseek.defaultModel,openrouter:K.openrouter.defaultModel,lmstudio:K.lmstudio.defaultModel,ollama:K.ollama.defaultModel},recentBaseUrls:{ollama:K.ollama.baseUrl,lmstudio:K.lmstudio.baseUrl},recentApiKeys:{openai:"",anthropic:"",google:"",mistral:"",deepseek:"",openrouter:""},players:{red:{provider:"openai",model:K.openai.defaultModel,stream:!0,temperature:1,baseUrl:K.openai.baseUrl,maxTokens:2048,contextLength:4096},black:{provider:"anthropic",model:K.anthropic.defaultModel,stream:!0,temperature:1,baseUrl:K.anthropic.baseUrl,maxTokens:2048,contextLength:4096}},ui:{saveApiKeys:!1}},reducers:{setPlayerProvider(r,{color:e,provider:t}){let i={...r.players[e],provider:t,model:r.recentModels[t]||K[t].defaultModel,baseUrl:r.recentBaseUrls[t]||K[t].baseUrl,stream:!0,temperature:1,maxTokens:2048,contextLength:4096};return{...r,players:{...r.players,[e]:i}}},setPlayerModel(r,{color:e,model:t}){let{provider:i}=r.players[e],n={...r.recentModels,[i]:t},s={...r.players[e],model:t};return{...r,recentModels:n,players:{...r.players,[e]:s}}},setPlayerBaseUrl(r,{color:e,baseUrl:t}){let{provider:i}=r.players[e],n={...r.recentBaseUrls,[i]:t},s={...r.players[e],baseUrl:t};return{...r,recentBaseUrls:n,players:{...r.players,[e]:s}}},setSaveApiKeys(r,{save:e}){return e?{...r,ui:{...r.ui,saveApiKeys:e}}:{...r,recentApiKeys:{},ui:{...r.ui,saveApiKeys:e}}},setUi(r,{key:e,value:t}){return{...r,ui:{...r.ui,[e]:t}}},"apiKeys/set":(r,{provider:e,apiKey:t,...i})=>r.ui.saveApiKeys?e?{...r,recentApiKeys:{...r.recentApiKeys,[e]:t}}:(i=Ae(ge(i).filter(([n])=>n in K)),{...r,recentApiKeys:{...r.recentApiKeys,...i}}):r},effects:r=>({setSaveApiKeys({save:e},t){e&&r.apiKeys.sendKeys()}}),selectors:(r,e,t)=>({player(){return e(r,i=>n=>i.players[n])},provider(){return e(this.player,i=>n=>i(n).provider)},currentModel(){return e(this.player,i=>n=>i(n).model)},currentApiKey(){return e(this.player,i=>n=>i(n).apiKey)},currentBaseUrl(){return e(this.player,i=>n=>i(n).baseUrl)},recentModel(){return e(r,this.provider,(i,n)=>s=>i.recentModels[n(s)])},recentApiKey(i){return e(r,this.provider,(n,s)=>o=>n.recentApiKeys[s(o)]||i.apiKeys.apiKey[s(o)])},recentBaseUrl(){return e(this.player,i=>n=>i(n).baseUrl)},model(){return e(this.currentModel,this.recentModel,(i,n)=>s=>i(s)||n(s))},apiKey(){return e(this.currentApiKey,this.recentApiKey,(i,n)=>s=>i(s)||n(s))},baseUrl(){return e(this.currentBaseUrl,this.recentBaseUrl,(i,n)=>s=>i(s)||n(s))},ui(){return e(r,i=>i.ui)},saveApiKeys(){return e(this.ui,i=>i.saveApiKeys)},canPlay({apiKeys:i}){return e(this.provider,this.baseUrl,i.apiKey,(n,s,o)=>{let a=K[n("red")],l=!a||a.apiKeyName?!o(n("red")):!s("red"),h=K[n("black")],p=!h||h.apiKeyName?!o(n("black")):!s("black");return!l&&!p})}})},threads:{name:"threads",state:{},reducers:{addRequest(r,e){let{subject:t,...i}=e,n=r[t]??[],s=n.length;return{...r,[t]:[{id:s,request:i},...n]}},addResponsePart(r,e){let{subject:t,part:i}=e,[{id:n,request:s,responseParts:o=[],response:a},...l]=r[t];return st(s,"Missing request in message"),st(!a,"Duplicate response in message"),{...r,[t]:[{id:n,request:s,responseParts:[...o,i]},...l]}},addResponse(r,e){let{subject:t,...i}=e,[{id:n,request:s,responseParts:o,response:a},...l]=r[t];return st(s,"Missing request in message"),st(!a,"Duplicate response in message"),{...r,[t]:[{id:n,request:s,responseParts:o,response:i},...l]}},clear(r){return[]}},selectors:(r,e,t)=>({thread(){return e(r,i=>n=>i[n])},exchangeById(){return e(this.thread,i=>n=>s=>i(n)?.at(-s-1))},exchangeById2(){return e(this.thread,i=>({subject:n,id:s})=>i(n).at(-s-1))},exchangeByProps:t((i,{subject:n,id:s})=>e(r,o=>o[n]?.at(-s-1))),requestById(){return e(this.exchangeById,(i,n,s)=>i(n).at(-s-1).request)},responseById(){return e(this.exchangeById,i=>n=>s=>i(n).at(-s-1).response)},partsByResponseId(){return e(this.exchangeById,i=>n=>s=>i(n).at(-s-1).responseParts)},exchangesAfterId(){return e(this.thread,i=>n=>s=>i(n).slice(0,-s-1).reverse())},requestsAfterId(){return e(this.exchangesAfterId,i=>n=>s=>i(n)(s).map(({id:o,request:a})=>({id:o,request:a})))},responsesAfterId(){return e(this.exchangesAfterId,i=>n=>s=>i(n)(s).map(({id:o,response:a})=>({id:o,response:a})))},partsByResponseIdAfterId(){return e(this.partsByResponseId,i=>n=>s=>o=>i(n)(s).slice(o+1).map(a=>a.content))},usageByThread(){return e(this.thread,i=>n=>Re(i(n)?.map(({response:s})=>s?.message?.usage??{})))}})}},Qc={key:"root",storage:Zn.default.default("chatsworth"),transforms:[Jn.default.default()],blacklist:["board","threads","apiKeys","currentMatch"]},W=hn({models:Xc,plugins:[mn(),Dn(Qc)]}),Te=W.select(r=>({pieces:r.board.pieces,piece:r.board.piece,rank:r.board.rank,color:r.board.pieceColor,redCaptures:r.board.redCaptures,blackCaptures:r.board.blackCaptures,currentUsage:r.currentMatch.usage,usageByProvider:r.matches.usageByProvider,matches:r.matches.matches,matchesByProvider:r.matches.matchesByProvider,matchesWonByProvider:r.matches.matchesWonByProvider,matchesWonAndLostByProvider:r.matches.matchesWonAndLostByProvider,apiKeys:r.apiKeys.apiKeys,apiKeyByProvider:r.apiKeys.apiKey,player:r.settings.player,provider:r.settings.provider,currentModel:r.settings.currentModel,currentApiKey:r.settings.currentApiKey,currentBaseUrl:r.settings.currentBaseUrl,recentModel:r.settings.recentModel,recentApiKey:r.settings.recentApiKey,recentBaseUrl:r.settings.recentBaseUrl,model:r.settings.model,apiKey:r.settings.apiKey,baseUrl:r.settings.baseUrl,ui:r.settings.ui,saveApiKeys:r.settings.saveApiKeys,canPlay:r.settings.canPlay}));var Ie=r=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=r.subscribe(()=>this.stateChanged(r.getState())),this.stateChanged(r.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};var Dt=globalThis,Nt=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ni=Symbol(),Xn=new WeakMap,at=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ni)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Nt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Xn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xn.set(t,e))}return e}toString(){return this.cssText}},Qn=r=>new at(typeof r=="string"?r:r+"",void 0,ni),oe=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new at(t,r,ni)},si=(r,e)=>{if(Nt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=Dt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},jt=Nt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Qn(t)})(r):r;var{is:el,defineProperty:tl,getOwnPropertyDescriptor:rl,getOwnPropertyNames:il,getOwnPropertySymbols:nl,getPrototypeOf:sl}=Object,Lt=globalThis,es=Lt.trustedTypes,ol=es?es.emptyScript:"",al=Lt.reactiveElementPolyfillSupport,ct=(r,e)=>r,lt={toAttribute(r,e){switch(e){case Boolean:r=r?ol:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Bt=(r,e)=>!el(r,e),ts={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Bt};Symbol.metadata??=Symbol("metadata"),Lt.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ts){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&tl(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:s}=rl(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n?.call(this)},set(o){let a=n?.call(this);s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ts}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;let e=sl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){let t=this.properties,i=[...il(t),...nl(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(jt(n))}else e!==void 0&&t.push(jt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return si(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:lt).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:lt;this._$Em=n,this[n]=o.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Bt)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,s]of i)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[ct("elementProperties")]=new Map,ve[ct("finalized")]=new Map,al?.({ReactiveElement:ve}),(Lt.reactiveElementVersions??=[]).push("2.0.4");var ai=globalThis,Ut=ai.trustedTypes,rs=Ut?Ut.createPolicy("lit-html",{createHTML:r=>r}):void 0,ci="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,li="?"+ye,cl=`<${li}>`,De=document,ht=()=>De.createComment(""),dt=r=>r===null||typeof r!="object"&&typeof r!="function",ui=Array.isArray,cs=r=>ui(r)||typeof r?.[Symbol.iterator]=="function",oi=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,is=/-->/g,ns=/>/g,ke=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ss=/'/g,os=/"/g,ls=/^(?:script|style|textarea|title)$/i,hi=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),j=hi(1),q=hi(2),ju=hi(3),Y=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),as=new WeakMap,ze=De.createTreeWalker(De,129);function us(r,e){if(!ui(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rs!==void 0?rs.createHTML(e):e}var hs=(r,e)=>{let t=r.length-1,i=[],n,s=e===2?"<svg>":e===3?"<math>":"",o=ut;for(let a=0;a<t;a++){let l=r[a],h,p,g=-1,f=0;for(;f<l.length&&(o.lastIndex=f,p=o.exec(l),p!==null);)f=o.lastIndex,o===ut?p[1]==="!--"?o=is:p[1]!==void 0?o=ns:p[2]!==void 0?(ls.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=ke):p[3]!==void 0&&(o=ke):o===ke?p[0]===">"?(o=n??ut,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?ke:p[3]==='"'?os:ss):o===os||o===ss?o=ke:o===is||o===ns?o=ut:(o=ke,n=void 0);let _=o===ke&&r[a+1].startsWith("/>")?" ":"";s+=o===ut?l+cl:g>=0?(i.push(h),l.slice(0,g)+ci+l.slice(g)+ye+_):l+ye+(g===-2?a:_)}return[us(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},ft=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0,a=e.length-1,l=this.parts,[h,p]=hs(e,t);if(this.el=r.createElement(h,i),ze.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(n=ze.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let g of n.getAttributeNames())if(g.endsWith(ci)){let f=p[o++],_=n.getAttribute(g).split(ye),E=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:E[2],strings:_,ctor:E[1]==="."?Vt:E[1]==="?"?Ft:E[1]==="@"?qt:je}),n.removeAttribute(g)}else g.startsWith(ye)&&(l.push({type:6,index:s}),n.removeAttribute(g));if(ls.test(n.tagName)){let g=n.textContent.split(ye),f=g.length-1;if(f>0){n.textContent=Ut?Ut.emptyScript:"";for(let _=0;_<f;_++)n.append(g[_],ht()),ze.nextNode(),l.push({type:2,index:++s});n.append(g[f],ht())}}}else if(n.nodeType===8)if(n.data===li)l.push({type:2,index:s});else{let g=-1;for(;(g=n.data.indexOf(ye,g+1))!==-1;)l.push({type:7,index:s}),g+=ye.length-1}s++}}static createElement(e,t){let i=De.createElement("template");return i.innerHTML=e,i}};function Ne(r,e,t=r,i){if(e===Y)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,s=dt(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=Ne(r,n._$AS(r,e.values),n,i)),e}var Kt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??De).importNode(t,!0);ze.currentNode=n;let s=ze.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Ke(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new Ht(s,this,e)),this._$AV.push(h),l=i[++a]}o!==l?.index&&(s=ze.nextNode(),o++)}return ze.currentNode=De,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ke=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ne(this,e,t),dt(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(De.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ft.createElement(us(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let s=new Kt(n,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=as.get(e.strings);return t===void 0&&as.set(e.strings,t=new ft(e)),t}k(e){ui(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let s of e)n===t.length?t.push(i=new r(this.O(ht()),this.O(ht()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},je=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(e,t=this,i,n){let s=this.strings,o=!1;if(s===void 0)e=Ne(this,e,t,0),o=!dt(e)||e!==this._$AH&&e!==Y,o&&(this._$AH=e);else{let a=e,l,h;for(e=s[0],l=0;l<s.length-1;l++)h=Ne(this,a[i+l],t,l),h===Y&&(h=this._$AH[l]),o||=!dt(h)||h!==this._$AH[l],h===L?e=L:e!==L&&(e+=(h??"")+s[l+1]),this._$AH[l]=h}o&&!n&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vt=class extends je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}},Ft=class extends je{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}},qt=class extends je{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=Ne(this,e,t,0)??L)===Y)return;let i=this._$AH,n=e===L&&i!==L||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ht=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}},ds={M:ci,P:ye,A:li,C:1,L:hs,R:Kt,D:cs,V:Ne,I:Ke,H:je,N:Ft,U:qt,B:Vt,F:Ht},ll=ai.litHtmlPolyfillSupport;ll?.(ft,Ke),(ai.litHtmlVersions??=[]).push("3.2.1");var fs=(r,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let s=t?.renderBefore??null;i._$litPart$=n=new Ke(e.insertBefore(ht(),s),s,void 0,t??{})}return n._$AI(r),n};var ie=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};ie._$litElement$=!0,ie.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ie});var ul=globalThis.litElementPolyfillSupport;ul?.({LitElement:ie});(globalThis.litElementVersions??=[]).push("4.1.1");var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ae=r=>(...e)=>({_$litDirective$:r,values:e}),he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:hl}=ds;var Wt=r=>r.strings===void 0,ps=()=>document.createComment(""),Ve=(r,e,t)=>{let i=r._$AA.parentNode,n=e===void 0?r._$AB:e._$AA;if(t===void 0){let s=i.insertBefore(ps(),n),o=i.insertBefore(ps(),n);t=new hl(s,o,r,r.options)}else{let s=t._$AB.nextSibling,o=t._$AM,a=o!==r;if(a){let l;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(l=r._$AU)!==o._$AU&&t._$AP(l)}if(s!==n||a){let l=t._$AA;for(;l!==s;){let h=l.nextSibling;i.insertBefore(l,n),l=h}}}return t},Oe=(r,e,t=r)=>(r._$AI(e,t),r),dl={},Yt=(r,e=dl)=>r._$AH=e,ms=r=>r._$AH,Gt=r=>{r._$AP?.(!1,!0);let e=r._$AA,t=r._$AB.nextSibling;for(;e!==t;){let i=e.nextSibling;e.remove(),e=i}};var gs=(r,e,t)=>{let i=new Map;for(let n=e;n<=t;n++)i.set(r[n],n);return i},pt=ae(class extends he{constructor(r){if(super(r),r.type!==ne.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);let n=[],s=[],o=0;for(let a of r)n[o]=i?i(a,o):o,s[o]=t(a,o),o++;return{values:s,keys:n}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){let n=ms(r),{values:s,keys:o}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=o,s;let a=this.ut??=[],l=[],h,p,g=0,f=n.length-1,_=0,E=s.length-1;for(;g<=f&&_<=E;)if(n[g]===null)g++;else if(n[f]===null)f--;else if(a[g]===o[_])l[_]=Oe(n[g],s[_]),g++,_++;else if(a[f]===o[E])l[E]=Oe(n[f],s[E]),f--,E--;else if(a[g]===o[E])l[E]=Oe(n[g],s[E]),Ve(r,l[E+1],n[g]),g++,E--;else if(a[f]===o[_])l[_]=Oe(n[f],s[_]),Ve(r,n[g],n[f]),f--,_++;else if(h===void 0&&(h=gs(o,_,E),p=gs(a,g,f)),h.has(a[g]))if(h.has(a[f])){let C=p.get(o[_]),b=C!==void 0?n[C]:null;if(b===null){let O=Ve(r,n[g]);Oe(O,s[_]),l[_]=O}else l[_]=Oe(b,s[_]),Ve(r,n[g],b),n[C]=null;_++}else Gt(n[f]),f--;else Gt(n[g]),g++;for(;_<=E;){let C=Ve(r,l[E+1]);Oe(C,s[_]),l[_++]=C}for(;g<=f;){let C=n[g++];C!==null&&Gt(C)}return this.ut=o,Yt(r,l),Y}});var Zt=class r{static EMPTY=".";static BLACK_PAWN="b";static BLACK_KING="B";static RED_PAWN="r";static RED_KING="R";board;isBlackTurn;constructor(e=!0){this.board=this.createInitialBoard(),this.isBlackTurn=e}createInitialBoard(){let e=Array.from({length:8},()=>Array(8).fill(r.EMPTY));for(let t=0;t<3;t++)for(let i=0;i<8;i++)(t+i)%2!==0&&(e[t][i]=r.BLACK_PAWN);for(let t=5;t<8;t++)for(let i=0;i<8;i++)(t+i)%2!==0&&(e[t][i]=r.RED_PAWN);return e}generateAllMoves(e=this.board,t=this.isBlackTurn){let i=[],n=t?[r.BLACK_PAWN,r.BLACK_KING]:[r.RED_PAWN,r.RED_KING];for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=e[o][a];if(n.includes(l)){let h=this.getPieceMoves(e,o,a);i.push(...h)}}return i.some(o=>o.captured.length>0)?i.filter(o=>o.captured.length>0):i}getPieceMoves(e,t,i){let n=e[t][i],s=this.findCaptures(e,t,i,n);return s.length>0?s:this.getNormalMoves(e,t,i,n)}getNormalMoves(e,t,i,n){let s=this.getDirectionsForPiece(n),o=[];for(let a of s){let l=t+a.dr,h=i+a.dc;this.isOnBoard(l,h)&&e[l][h]===r.EMPTY&&o.push({from:{row:t,col:i},to:{row:l,col:h},captured:[]})}return o}findCaptures(e,t,i,n,s=[],o=[],a={row:t,col:i}){let l=this.getDirectionsForPiece(n),h=[];for(let p of l){let g=t+p.dr,f=i+p.dc,_=t+2*p.dr,E=i+2*p.dc;if(this.isOnBoard(_,E)&&this.isEnemyPiece(n,e[g]?.[f])&&e[_][E]===r.EMPTY){let C=this.copyBoardState(e);C[t][i]=r.EMPTY,C[g][f]=r.EMPTY;let b=[...s,{row:g,col:f}],O=[...o,{row:_,col:E}],T=this.findCaptures(C,_,E,n,b,O,a);T.length>0?h.push(...T):h.push({from:{row:a.row,col:a.col},to:{row:_,col:E},captured:b,jumps:O})}}return h}getDirectionsForPiece(e){let t=[{dr:1,dc:-1},{dr:1,dc:1}],i=[{dr:-1,dc:-1},{dr:-1,dc:1}],n=[{dr:1,dc:-1},{dr:1,dc:1},{dr:-1,dc:-1},{dr:-1,dc:1}];switch(e){case r.BLACK_PAWN:return t;case r.RED_PAWN:return i;case r.BLACK_KING:case r.RED_KING:return n;default:return[]}}isOnBoard(e,t){return e>=0&&e<8&&t>=0&&t<8}isEnemyPiece(e,t){return t!==r.EMPTY&&e.toLowerCase()!==t.toLowerCase()}maybePromotePiece(e,t){return e===r.BLACK_PAWN&&t===7?r.BLACK_KING:e===r.RED_PAWN&&t===0?r.RED_KING:e}copyBoardState(e){return e.map(t=>t.slice())}parseMoveString(e){let t=e.split(/[-x]/),i=this.algebraicToRowCol(t[0]),n=this.algebraicToRowCol(t.at(-1));return{from:i,to:n,isCapture:e.includes("x")}}formatMove(e){let t=this.rowColToAlgebraic(e.from.row,e.from.col),i=this.rowColToAlgebraic(e.to.row,e.to.col);if(!e.captured||e.captured.length===0)return`${t}-${i}`;let n=t;if(e.jumps)for(let s of e.jumps)n+="x"+this.rowColToAlgebraic(s.row,s.col);else n+="x"+i;return n}applyMove(e){let t=this.parseMoveString(e),n=this.generateAllMoves().find(a=>{let l=a.from.row===t.from.row&&a.from.col===t.from.col,h=a.to.row===t.to.row&&a.to.col===t.to.col;return t.isCapture?l&&h&&a.captured.length>0:l&&h});if(!n)throw new Error(`Illegal move: ${e}`);let s=this.board[n.from.row][n.from.col];this.board[n.from.row][n.from.col]=r.EMPTY;for(let a of n.captured)this.board[a.row][a.col]=r.EMPTY;let o=this.maybePromotePiece(s,n.to.row);return this.board[n.to.row][n.to.col]=o,this.isBlackTurn=!this.isBlackTurn,n.captured.map(a=>this.rowColToAlgebraic(a.row,a.col))}isGameOver(){return this.generateAllMoves(this.board,this.isBlackTurn).length===0}algebraicToRowCol(e){let t=e[0].toUpperCase(),i=parseInt(e.slice(1),10),n=t.charCodeAt(0)-65;return{row:i-1,col:n}}rowColToAlgebraic(e,t){let i=String.fromCharCode(65+t),n=e+1;return`${i}${n}`}printBoard(){let e=["  ABCDEFGH"];for(let t=7;t>=0;t--)e.push(`${t+1} ${this.board[t].join("")}`);return e.join(`
`)}async play(e,t,i){for(this.isBlackTurn=!0;!this.isGameOver();){let s=await(this.isBlackTurn?e:t).makeMove(this.board,this.isBlackTurn);this.applyMove(s)}}};async function*vs(r,e){try{let t,i="";for(;;){let{done:n,value:s}=await r.read();if(n)throw new Error("Unexpected end of Server-Sent Event stream");for(i+=e?e.decode(s,{stream:!0}):s;i.length>0;){let[o,a,l,h="",p]=i.match(/^(?::(?<comment>[^\n]*)|(?<name>[^:\n]+)(?::\s*(?<value>[^\n]*))?|(?<emptyLine>))\n/)??[];if(!o){let g=i.indexOf(`
`);if(g>-1)throw new Error(`Invalid Server-Sent Event stream: ${i.slice(0,g+1)}`);break}if(i=i.slice(o.length),p==="")t&&(yield t,t=void 0);else if(l){if(l==="data"&&h.match(/\[DONE\]/)||l==="event"&&h==="message_stop")return;t??={},t[l]=h}else a!=null}}}catch(t){let i=new Error(`Error parsing Server-Sent Event stream: ${t.message}`);throw i.cause=t,i}}var Jt=class extends EventTarget{constructor(e={}){super(),this.config={apiKey:e.apiKey,provider:e.providerId?.toLowerCase()||"openai",model:e.model,baseUrl:e.baseUrl,maxTokens:e.maxTokens,temperature:e.temperature||1,stream:e.stream||!1,anthropicVersion:e.anthropicVersion||"2023-06-01",role:e.role},this.dispatch=e.dispatch;let t=K[this.config.provider];if(!t)throw new Error(`Unknown provider: ${this.config.provider}`);this.handler=new t.handler(this.config),this.url=this.handler.formatUrl(`${e.baseUrl??t.baseUrl}`),this.conversation=[],this.model=this.config.model,this.usage={input_tokens:0,output_tokens:0}}accumulateUsage(e){let t={input_tokens:["input_tokens","prompt_tokens"],output_tokens:["output_tokens","completion_tokens"]},i=[];e.metadata?.usage?i.push(e.metadata.usage):i.push(...e.metadata?.streamData?.flatMap(n=>n.usage??n.message?.usage??[])??[]),this.usage=Re([kt(i,t)],this.usage),this.dispatchEvent(new CustomEvent("ChatClient:usage",{detail:this.usage}))}addMessage(e,t,i,n={}){this.conversation.push({role:e,content:t,message:i,metadata:n}),this.accumulateUsage({metadata:n})}clearConversation(){this.conversation=[]}getConversation(){return[...this.conversation]}async sendMessage(e,t=()=>{}){try{t("");let i=this.getConversation();i.length>8&&i.splice(4,i.length-8),i.push({role:"user",content:e});let n=this.handler.createRequestPayload(i);this.addMessage("user",e,n,{});let s=JSON.stringify(n),o=await fetch(this.url,{method:"POST",headers:this.handler.getHeaders(),body:s});if(!o.ok){let _=await o.text();throw new Error(`API request failed: ${o.status} - ${_}`)}if(!n.stream){let _=await o.json(),{content:E,message:C,usage:b}=this.handler.handleResponseJson(_);return this.addMessage("assistant",E,C,{usage:b}),{content:E,message:C,usage:b}}if(!o.body)throw new Error("ReadableStream not supported");let a=o.body.getReader(),l=new TextDecoder,h="",p=[],g={};for await(let _ of vs(a,l)){let{partialReasoningContent:E,partialContent:C,parsed:b,message:O}=this.handler.parseStreamChunk(_,g);C?(h+=C,await t(C,"comment_part")):E&&await t(E,"reasoning_part"),g=O,p.push(b)}return this.addMessage("assistant",h,g,{streamData:p}),{content:h,message:g,usage:g.usage}}catch(i){throw console.error("Error in chat completion:",i),i}}setOptions(e={}){Object.assign(this.config,e);let t=K[this.config.provider];t&&(this.url=t.url,this.handler=new t.handler(this.config))}};var Xt=class extends Jt{side;constructor(e,t){super(t),this.side=e,this.usage={input_tokens:0,output_tokens:0}}getMoveSchema(e=[]){return{name:"CheckersMove",description:"Take your turn at checkers",strict:!0,schema:{type:"object",required:["comment","move","captureFlair"],properties:{captureFlair:{enum:["jump","flip","spiral","back flip","double flip","triple flip","double back flip","triple back flip","double spiral","triple spiral"],type:"string"},comment:{type:"string"},move:{enum:e,type:"string"}},additionalProperties:!1}}}async sendMessage(e,t,i){this.config.responseFormat={type:"json_schema",json_schema:e};let n=await super.sendMessage(t,i);n.content=JSON.parse(n.content);let{move:s,captures:o}=n.content,a=this.conversation.findLast(({role:l})=>l==="user");return W.dispatch.currentMatch.turn({turn:{date:Date.now(),color:this.side,move:s,captures:o,request:a,response:n}}),n}};var fl=`Checkers Rules
Movement
\u2022 Pawns: one square diagonally forward only
\u2022 Kings: one square diagonally any direction
\u2022 Black advances toward row 8
\u2022 Red advances toward row 1
Captures
\u2022 Mandatory when available
\u2022 Jump over enemy to empty square beyond
\u2022 Pawns capture forward only
\u2022 Kings capture any direction
\u2022 Multiple jumps required if possible
Kings
\u2022 Pawn promotes upon reaching opposite end
\u2022 Black kings at row 8; Red kings at row 1
Notation
\u2022 Pieces: r for red, b for black, capitalized for Kings
\u2022 Columns A-H, rows 1-8
\u2022 Moves: "A3-B4"
\u2022 Captures: "A3xC5"
\u2022 Multiple captures: "A1xC3xE5"
Winning
\u2022 Win by capturing all pieces or blocking all opponent moves

`;async function ys(r,e){let t=new Zt(e[0].side==="black"),i=[],n=2500,s=0,o=3,a="";try{for(let l=0;;l++){Date.now()-s<n&&await new Promise(P=>setTimeout(P,n-(Date.now()-s))),await r.wait,s=Date.now();let h=l%2,p=e[h],g=p.side,f=t.generateAllMoves().map(P=>t.formatMove(P)),_=p.getMoveSchema(f),E=f.some(P=>P.includes("x"));E||(delete _.schema.properties.captureFlair,_.schema.required.pop());let O=`${l<2?fl:""}${a}${t.printBoard()}

Your pieces are ${g} and it's your turn to move. Feel free to trash talk your opponent, use emojis, etc. ${E?"Captures will be done with the flair of your choosing, including flips and spirals with double, triples, and back flips. Choose your flair ahead.":""} Choose from these moves: ${f}`,T=(P,D)=>r.streamThoughts(h,P,D),k=await p.sendMessage(_,O,T);await r.wait;let S=k.content;i.push({date:pl(new Date),turn:l,color:g,schema:_,message:O,response:S});let $=S.move.toUpperCase().replace(/X/g,"x"),w=S.captureFlair;if(_.schema.properties.move.enum.includes($)){if(o=3,a="",t.applyMove($),await r.showThoughts(h,S.comment),await r.movePiece($,w),t.isGameOver())return{winner:g,history:i,board:t.printBoard()}}else{if(l--,o--,o===0)return{winner:e[(h+1)%2].side,history:i,board:t.printBoard()};a=`Invalid move: "${$}". Please try again.
`}}}catch(l){return console.error(l),{winner:"Error",history:i,board:t.printBoard(),error:l.message}}}var pl=r=>new Date(r.getTime()-r.getTimezoneOffset()*60*1e3).toISOString().slice(0,-1);var _s=oe`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        perspective: 1400px;
        perspective-origin: 50% 50%;

        --board-rotate-x: 0deg;
        --board-rotate-z: 0deg;
        --cos-board-rotate-x: cos(var(--board-rotate-x));
        --square-side: min(calc(var(--main-height) / (13 * var(--cos-board-rotate-x))), calc(var(--main-width) / 13));
        --jump-z: calc(0.75 * var(--square-side));
        --piece-z: calc(var(--square-side) / 10);
        --label-size: calc(var(--square-side) / 4);
        --icon-size: 36px;
    }

    :host([perspective]) {
        --board-rotate-x: 60deg;
        --board-rotate-z: 90deg;
    }

    @media (max-width: 800px) {
        :host {
            --square-side: calc(var(--main-width) / 18);
        }
    }

    .board {
        transition:
            transform 2s ease-in-out 500ms,
            opacity 2s ease-in-out,
            top 2s ease-in-out 500ms,
            height 2s ease-in-out 500ms;
        font-family: 'Segoe UI', system-ui, sans-serif;
        display: grid;
        position: absolute;
        justify-content: center;
        align-content: center;
        grid-template-areas:
            'JT JT JT JT JT JT JT JT JT JT'
            'UL ct ct ct ct ct ct ct ct UR'
            'rl A8 B8 C8 D8 E8 F8 G8 H8 rr'
            'rl A7 B7 C7 D7 E7 F7 G7 H7 rr'
            'rl A6 B6 C6 D6 E6 F6 G6 H6 rr'
            'rl A5 B5 C5 D5 E5 F5 G5 H5 rr'
            'rl A4 B4 C4 D4 E4 F4 G4 H4 rr'
            'rl A3 B3 C3 D3 E3 F3 G3 H3 rr'
            'rl A2 B2 C2 D2 E2 F2 G2 H2 rr'
            'rl A1 B1 C1 D1 E1 F1 G1 H1 rr'
            'LL cb cb cb cb cb cb cb cb LR'
            'JB JB JB JB JB JB JB JB JB JB';
        grid-template-columns: auto repeat(8, var(--square-side)) auto;
        grid-template-rows: calc(2 * var(--square-side)) auto repeat(8, var(--square-side)) auto calc(
                2 * var(--square-side)
            );
        transform-style: preserve-3d;
        transform: rotateX(var(--board-rotate-x)) rotateZ(var(--board-rotate-z));
        opacity: 1;
        height: 100%;
        width: 100%;
        top: -20px;
    }

    :host([intro]) .board {
        opacity: 0;
    }

    button {
        position: relative;
        display: block;
        appearance: none;
        background-color: rgba(from var(--bg-chat) r g b / 0.5);
        border-radius: 20%;
        border: 3px solid var(--border-color);
        color: rgba(from var(--text-main) r g b / 0.5);
        cursor: pointer;
        top: 0px;
        text-align: center;
        width: 72px;
        height: 48px;
        padding: 2px;

        transition:
            top 333ms ease,
            background-color 500ms ease-in-out,
            border-color 333ms ease-in-out,
            color 333ms ease-in-out,
            box-shadow 2s cubic-bezier(0.05, 0.6, 0.25, 1);
    }

    button:hover {
        background-color: rgba(from var(--bg-user) r g b / 0.75);
        color: var(--text-main);
        border: 3px solid var(--text-main);
        top: -10px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.75;
    }

    button:active {
        box-shadow:
            30px 30px 150px 15px var(--accent),
            -30px -30px 150px 15px var(--accent),
            30px -30px 150px 15px var(--accent),
            -30px 30px 150px 15px var(--accent);
        color: var(--accent);
        border-color: var(--accent);
        transition: box-shadow 10ms cubic-bezier(0.05, 0.6, 0.25, 1);
    }

    button .hint {
        position: relative;
        opacity: 0;
        transition: opacity 333ms ease-in-out;
        text-align: center;
        top: 8px;
        font-size: 0.9rem;
        outline: none;
        display: none;
    }

    button:hover .hint {
        opacity: 1;
    }

    button svg {
        margin: auto;
    }

    .controls {
        position: absolute;
        display: flex;
        justify-content: center;
        justify-items: center;
        height: 80px;
        width: max-content;
        min-width: 144px;
        margin: auto;
        padding: 10px;
        gap: 16px;
        top: calc(50% + var(--square-side) * 5 * var(--cos-board-rotate-x));
    }

    @media (max-height: 500px), (max-width: 800px) {
        .controls {
            height: 60px;
            min-width: 120px;
            gap: 8px;
            top: calc(50% + var(--square-side) * 4 * var(--cos-board-rotate-x));
            --icon-size: 24px;
        }
    }

    .row-labels,
    .col-labels {
        font-size: var(--label-size, 1.25rem);
        font-weight: 800;
        color: #aaa;
    }

    .row-labels {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-inline: var(--label-size);
    }

    .col-labels {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-block: var(--label-size);
    }

    .top.col-labels {
        grid-area: ct;
    }

    .bottom.col-labels {
        grid-area: cb;
    }

    .left.row-labels {
        grid-area: rl;
    }

    .right.row-labels {
        grid-area: rr;
    }

    .row-labels > div,
    .col-labels > div {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
        transition: transform 1.5s ease-in-out 1.5s;
    }

    :host([perspective]) .row-labels > div,
    :host([perspective]) .col-labels > div {
        transform: rotate(-90deg);
    }

    .square {
        position: relative;
        background-color: #eee;
        aspect-ratio: 1;
        height: var(--square-side);
        width: var(--square-side);
    }

    .square.black {
        background-color: #aaa;
        background-size: 5px 5px;
    }

    .notification-content {
        max-height: 400px;
    }

    .notification-content pre {
        display: block;
        position: relative;
        white-space: pre-wrap;
        height: fit-content;
    }
`;var Qt=ae(class extends he{constructor(r){if(super(r),r.type!==ne.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let t=r.element.classList;for(let i of this.st)i in e||(t.remove(i),this.st.delete(i));for(let i in e){let n=!!e[i];n===this.st.has(i)||this.nt?.has(i)||(n?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return Y}});var bs=(r,e="24px")=>j`<svg
        class="${Qt({icon:!0,[r]:!0})}"
        xmlns="http://www.w3.org/2000/svg"
        style="height:${e};width:${e};"
        viewBox="0 -960 960 960"
        fill="currentColor"
    >
        ${ml[r]}
    </svg>`,ml={play:q`<path d="M320-200v-560l440 280-440 280Z"/>`,pause:q`<path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/>`,playDisabled:q`<path d="M658-416 320-754v-6l440 280-102 64ZM790-56 520-328 320-200v-328L56-792l56-56 736 736-58 56Z"/>`,playPause:q`<path d="M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z"/>`,resume:q`<path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z"/>`,tune:q`<path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80 h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>`,skipNext:q`<path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"/>`,skipPrev:q`<path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z"/>`,replay:q`<path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/>`};var di=ae(class extends he{constructor(r){if(super(r),r.type!==ne.PROPERTY&&r.type!==ne.ATTRIBUTE&&r.type!==ne.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wt(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===Y||e===L)return e;let t=r.element,i=r.name;if(r.type===ne.PROPERTY){if(e===t[i])return Y}else if(r.type===ne.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return Y}else if(r.type===ne.ATTRIBUTE&&t.getAttribute(i)===e+"")return Y;return Yt(r),e}});var mt=(r,e)=>{let t=r._$AN;if(t===void 0)return!1;for(let i of t)i._$AO?.(e,!1),mt(i,e);return!0},er=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},ws=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),yl(e)}};function gl(r){this._$AN!==void 0?(er(this),this._$AM=r,ws(this)):this._$AM=r}function vl(r,e=!1,t=0){let i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)mt(i[s],!1),er(i[s]);else i!=null&&(mt(i,!1),er(i));else mt(this,r)}var yl=r=>{r.type==ne.CHILD&&(r._$AP??=vl,r._$AQ??=gl)},Fe=class extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ws(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(mt(this,e),er(this))}setValue(e){if(Wt(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var gt=()=>new pi,pi=class{},fi=new WeakMap,vt=ae(class extends Fe{render(r){return L}update(r,[e]){let t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=r.options?.host,this.rt(this.ct=r.element)),L}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,t=fi.get(e);t===void 0&&(t=new WeakMap,fi.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){return typeof this.Y=="function"?fi.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var tr=oe`
    .piece {
        height: 86%;
        width: 86%;
        border-radius: 50%;
        place-self: center;
        position: relative;
        transform-style: preserve-3d;
        transition: box-shadow 1s ease-in-out;
        box-shadow: 3px 7px 2px 3px #0002;
        aspect-ratio: 1;
    }

    :host([perspective]) .piece {
        box-shadow: 7px -3px 2px 3px #0002;
    }

    .piece::after {
        height: 100%;
        width: 100%;
    }

    .piece::before {
        z-index: 1;
        height: 80%;
        width: 80%;
        top: 10%;
        left: 10%;
    }
    .piece.king::after {
        border: 1px solid #000;
    }

    .piece.red {
        background-color: #b22;
        border-color: #0009;
    }

    .piece.black {
        background-color: #000;
        border: 1px double rgb(97, 99, 107);
    }

    .piece::after,
    .piece::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        transform: translateZ(var(--piece-z));
        background-color: inherit;
        border-width: 1px;
        border-style: solid;
        box-shadow: inherit;
        border-color: inherit;

        border-image: radial-gradient(
            www circle,
            rgba(255, 222, 101, 0) 90%,
            rgba(255, 222, 101, 1) 95%,
            rgba(255, 222, 101, 0) 100%
        );
        background-position: center center;
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 10% 10%;
    }

    .piece.king::before {
        content: '♔';
        font-size: calc(var(--square-side) * 0.55);
        line-height: calc(var(--square-side) * 0.7);
        display: inline-block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        color: gold;
        border: 1px solid gold;
        text-align: center;
    }

    .piece.king::before {
        transform: translateZ(calc(2 * var(--piece-z)));
    }

    .piece.king {
        box-shadow: 14px -6px 4px 6px #0002;
    }

    .piece.red.king::before {
        transform: rotate(180deg) translateZ(calc(2 * var(--piece-z)));
    }

    .captures {
        display: grid;
        grid-auto-flow: dense column;
        grid-template-columns: repeat(6, var(--square-side));
        grid-template-rows: repeat(2, var(--square-side));
        transform-style: preserve-3d;
    }

    .captures.red {
        grid-area: JB;
    }
    .captures.black {
        grid-area: JT;
    }

    .captures .piece {
        height: calc(var(--square-side) * 0.86);
        width: calc(var(--square-side) * 0.86);
        transform-style: preserve-3d;
    }

    .jumping {
        animation: jump 1s ease-in-out;
    }

    @keyframes move {
        to {
            transform: translate(
                calc(var(--move-dx) * var(--square-side)),
                calc(-1 * var(--move-dy) * var(--square-side))
            );
        }
    }

    @keyframes jump {
        40% {
            transform: translate3d(
                    calc(1.1 * var(--move-dx) * var(--square-side)),
                    calc(-1.1 * var(--move-dy) * var(--square-side)),
                    calc(((var(--trick-count, 0) / 6) + 1.5) * var(--jump-z))
                )
                var(--jump-rotation-a, rotate(0));
        }

        55% {
            transform: translate3d(
                    calc(1.1 * var(--move-dx) * var(--square-side)),
                    calc(-1.1 * var(--move-dy) * var(--square-side)),
                    calc(((var(--trick-count, 0) / 6) + 1.5) * var(--jump-z))
                )
                var(--jump-rotation-a, rotate(0));
        }

        to {
            transform: translate3d(
                    calc(2 * var(--move-dx) * var(--square-side)),
                    calc(-2 * var(--move-dy) * var(--square-side)),
                    0
                )
                var(--jump-rotation-b, rotate(0));
        }
    }

    .back.piece {
        --trick-dir: -1;
    }

    .double.piece {
        --trick-count: 2;
    }

    .triple.piece {
        --trick-count: 3;
    }

    .flip.piece {
        --jump-rotation-a: rotate3d(
            var(--move-dy),
            var(--move-dx),
            0,
            calc(var(--trick-dir, 1) * var(--trick-count, 1) * 160deg)
        );
        --jump-rotation-b: rotate3d(
            var(--move-dy),
            var(--move-dx),
            0,
            calc(var(--trick-dir, 1) * var(--trick-count, 1) * 360deg)
        );
    }

    .spiral.piece {
        --jump-rotation-a: rotate3d(
            calc(-1 * var(--move-dx)),
            var(--move-dy),
            0,
            calc(var(----trick-dir, 1) * var(--trick-count, 1) * 160deg)
        );
        --jump-rotation-b: rotate3d(
            calc(-1 * var(--move-dx)),
            var(--move-dy),
            0,
            calc(var(----trick-dir, 1) * var(--trick-count, 1) * 360deg)
        );
    }

    .twirl.piece {
        --jump-rotation-a: rotate3d(0, 0, 1, calc(var(----trick-dir, 1) * var(--trick-count, 1) * 180deg));
        --jump-rotation-b: rotate3d(0, 0, 1, calc(var(----trick-dir, 1) * var(--twirl-count, 1) * 360deg));
    }
`;var xs=oe`
    :host {
        --piece-z: 13px;
        --hero-size: calc(var(--aside-width) / 3.5);
        --square-side: calc(var(--hero-size) * 0.6 / 0.86);
        perspective: 800px;
    }
    .hero {
        position: absolute;
        top: 0;
        right: 0;
        width: var(--hero-size);
        aspect-ratio: 1;
        perspective-origin: calc(100% - var(--hero-size) / 2) calc(var(--hero-size) / 2);
        z-index: -1;
    }

    .hero .piece {
        height: 60%;
        width: 60%;
        aspect-ratio: 1;
        position: absolute;
        right: 5px;
        top: 5px;
        opacity: 1;
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        transform-origin: center center;
    }
    .hero .piece.red.king::before {
        transform: rotate(0) translateZ(calc(2 * var(--piece-z)));
    }
    form:not(:focus-within):hover + .hero > .piece {
        animation: spin 1.25s cubic-bezier(0, 0.46, 0.36, 0.92) 100ms forwards;
    }

    @keyframes spin {
        15% {
            transform: translateX(60px) rotateY(1200deg);
        }
        to {
            transform: translateX(0px) rotateY(4320deg);
        }
    }

    .hero .piece,
    .hero .piece::after,
    .hero .piece::before {
        border-style: inset;
        box-shadow:
            3px 3px 6px 1px #0004,
            -1px -1px 2px 1px #fff4;
    }

    form {
        /* border: 2px solid transparent; */
        position: relative;
        display: grid;
        grid-template:
            'L1 S1 S1' auto
            'L3 S2 S2' auto
            'L2 I1 I1' auto
            'L2 C1 C2' auto / min-content 1fr 1fr;
        align-items: baseline;
        width: 75%;
        transition:
            width 333ms ease-in-out,
            background-color 1500ms ease-in-out;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: #0000;
    }
    form:hover,
    form:has(*:focus-visible),
    form:has(*:active) {
        width: 100%;
        background-color: rgba(from var(--bg-chat) r g b / 0.7);

        .secondary {
            opacity: 1;
            height: 1.5em;
            transition:
                height 333ms ease-in-out,
                opacity 333ms ease-in-out;
        }
        label.secondary {
            margin: 3px;
        }
        input.secondary {
            border: 1px solid var(--border-color);
            margin: 0;
        }

        select,
        input:not([type='checkbox']) {
            appearance: revert;
            background-color: rgba(from var(--input-bg) r g b / 0.5);
            border: 1px solid var(--border-color);
            color: var(--text-main);
            margin-inline: 0px;
            padding-left: 1px;
        }

        input::placeholder {
            opacity: 1;
        }
    }
    label {
        color: var(--accent);
        margin: 3px;
        text-align: right;
        line-height: 1.6;
        white-space: nowrap;
    }
    label[disabled],
    input[disabled],
    select[disabled],
    fieldset[disabled] {
        display: none;
    }
    label.labelFollowsInput {
        text-align: left;
        font-size: 0.8em;
    }
    @media (max-width: 1280px), (max-width: 640px) {
        :host {
            --hero-size: calc(var(--aside-width) / 4.5);
        }
        form {
            grid-template:
                'L1'
                'S1'
                'L3'
                'S2'
                'L2'
                'I1'
                'C1'
                'C2' / 1fr;
        }
        label {
            text-align: left;
        }
    }
    @media (max-width: 800px) {
        :host {
            --hero-size: calc(var(--aside-width) / 3.5);
        }
        form {
            grid-template:
                'L1 S1 S1' auto
                'L3 S2 S2' auto
                'L2 I1 I1' auto
                'L2 C1 C2' auto / min-content 1fr 1fr;
        }
        label {
            text-align: right;
        }
    }

    @media (max-width: 640px) {
        :host {
            --hero-size: calc(var(--aside-width) / 4.5);
        }
        form {
            grid-template:
                'L1'
                'S1'
                'L3'
                'S2'
                'L2'
                'I1'
                'C1'
                'C2' / 1fr;
        }
        label {
            text-align: left;
        }
    }

    .secondary {
        overflow: hidden;
        height: 0;
        opacity: 0;
        margin: 0;
        margin-top: -6px; /* fix table row won't collapse */
        padding: 0;
        border: 0;
        transition:
            margin 333ms ease-in-out,
            height 333ms ease-in-out,
            opacity 200ms ease-in-out;
    }

    input[type='checkbox']:checked {
        background-color: var(--accent);
        color: black;
    }
    input[type='checkbox'] {
        appearance: none;
        background-color: #ddd;
        border-radius: 3px;
        border: 1px solid var(--border-color);
        vertical-align: text-top;
        margin-right: 2px;
        position: relative;
        display: inline-block;
        height: 0.8em;
        aspect-ratio: 1;
    }

    input[type='checkbox']:checked::after {
        content: '✓';
        position: absolute;
        font-family: system-ui;
        font-size: 0.8em;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
        line-height: 0.8em;
    }

    select,
    input:not([type='checkbox']) {
        appearance: none;
        background-color: transparent;
        color: var(--text-main);
        border: 1px solid transparent;
        border-radius: 4px;
        vertical-align: baseline;
        font-size: 0.9em;
        padding-left: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: calc(100% - 1px);
    }
    input:not([type='checkbox']).secondary {
        border-color: transparent;
    }
    input::placeholder {
        opacity: 0;
        transition: opacity 333ms ease-in-out;
    }
    .labelFollowsInput {
        display: inline-block;
    }

    input[name='apiKey'],
    input[name='baseUrl'] {
        width: calc(100% - 10px);
    }

    .dragover {
        border-color: var(--accent);
        border-style: dashed;
        border-width: 2px;
    }

    ${tr}
`;var Es=r=>r instanceof RegExp?r.source:Array.isArray(r)?r.map(Es):r,$e=(r,...e)=>{let t=typeof e.at(-1)=="string"&&/^\/[gimsuydx]*$/.test(e.at(-1))?e.pop():"";e=e.map(Es);let i=r.raw.flatMap((n,s)=>[n,...e[s]??""]).join("");return i=i.replace(/#[^\n]*/g,""),i=i.replace(/(?<escape>\\.)|(?<charClass>\[.*?(?<!\\)])|(\s+)/g,"$<escape>$<charClass>"),new RegExp(i,t?.slice(1))};$e`
    (\\.)               | # first pull escape sequences out of the string
    (\[.*?(?<!\\)\])    | # then charClasses
    (\#[^\n]*)          | # then comments
    (\s+)                 # then whitespace
    ${"/gs"}
`;var mi=class r extends Ie(W)(ie){static styles=xs;static properties={providerId:{type:String,attribute:"provider",reflect:!0},provider:{type:Object,attribute:!1},apiKey:{type:String},saveApiKeys:{type:Boolean},showApiKey:{type:Boolean},model:{type:String,attribute:!0,reflect:!0},baseUrl:{type:String,attribute:!0},side:{type:String,attribute:!0},store:{type:Object}};constructor(){super(),this.showApiKey=!1,this.formRef=gt(),this.side="",this.store=null,customElements.whenDefined("modal-dialog").then(e=>this.modal=document.querySelector("modal-dialog")),customElements.whenDefined("notification-dialog").then(e=>this.notify=document.querySelector("notification-dialog"))}stateChanged(e){let t=Te(e,{color:this.side});this.providerId=t.provider(this.side),this.provider=K[this.providerId],this.model=t.model(this.side),this.saveApiKeys=t.saveApiKeys,this.apiKey=t.apiKeyByProvider(this.providerId),this.baseUrl=t.baseUrl(this.side)}firstUpdated(){this.providerId??="openai",this.provider=K[this.providerId],this.baseUrl=this.provider.baseUrl;let e=this.formRef.value;e.addEventListener("dragover",t=>this.dragover(t)),e.addEventListener("dragleave",t=>this.dragleave(t)),e.addEventListener("drop",t=>this.drop(t)),e.addEventListener("beforeinput",t=>{if(t.inputType==="insertFromPaste"){let i=t.dataTransfer?.getData("text/plain")||t.data;i.match(/\n/)?this.processEnvText(i):t.target.value=i,t.preventDefault()}})}dragover(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.add("dragover")}dragleave(e){e.stopPropagation(),e.currentTarget.classList.remove("dragover")}drop(e){if(e.dataTransfer.files?.length){let t=e.dataTransfer.files[0],i=new FileReader;i.onload=n=>{let s=n.target.result;this.processEnvText(s)},i.readAsText(t),e.preventDefault(),e.stopPropagation()}e.currentTarget.classList.remove("dragover")}processEnvText(e){let t=It(K,({apiKeyName:o})=>o),i=$e`${ge(t).filter(([o,a])=>!!a).map(([o,a])=>$e`^${a}=(?<${o}>[^\n]*)$`).flatMap((o,a,l)=>[o,"|"]).slice(0,-1)}${"/gm"}`,n=Ae([...e.matchAll(i)].flatMap(o=>o.groups?ge(o.groups).filter(([a,l])=>!!l):[]));W.dispatch.apiKeys.set(n);let s=ei(n).length;if(s){let o=s===1;this.notify.show({title:s+" API keys found",content:j`API key${o?"":"s"} have been set for: ${ei(n).join(", ")}.`,autoDismiss:5e3})}}static modals={saveApiKeys:{title:"Save API Keys Warning",content:j`This feature will save your API keys in local storage. Do not use this feature on a shared
            computer.`,actions:[j`<button class="primary" value="confirmed">Confirm</button>`,j`<button value="canceled">Cancel</button>`]},expandedSettingsForm:{title:"Settings",content:j``,actions:[j`<button class="primary" value="saved">Save</button>`,j`<button value="canceled">Cancel</button>`]}};async saveApiKeysChanged(e){if(e.stopPropagation(),e.target.checked){let i=await this.modal.show(r.modals.saveApiKeys)==="confirmed";i&&W.dispatch.settings.setSaveApiKeys({save:!0}),this.requestUpdate("saveApiKeys",!i)}else W.dispatch.settings.setSaveApiKeys({save:!1})}showApiKeyChanged(e){this.showApiKey=e.target.checked,this.requestUpdate("showApiKey",!this.showApiKey),e.stopPropagation()}render(){return j`
            <form ${vt(this.formRef)}>
                <label style="grid-area: L1" for="${this.side}_apiProvider">Provider</label>
                <select
                    id="${this.side}_apiProvider"
                    value="${this.providerId}"
                    name="apiProvider"
                    style="grid-area: S1"
                    @change=${e=>W.dispatch.settings.setPlayerProvider({color:this.side,provider:e.target.value})}
                >
                    ${Object.entries(K).map(([e,t])=>j`<option ?selected=${this.providerId===e} value="${e}">${t.name}</option>`)}
                </select>

                <label for="${this.side}_aiModel" style="grid-area: L3">Model</label>
                <select
                    id="${this.side}_aiModel"
                    style="grid-area: S2"
                    name="aiModel"
                    @change=${e=>W.dispatch.settings.setPlayerModel({color:this.side,model:e.target.value})}
                    value="${this.model}"
                >
                    ${this.provider?.models.map(e=>j`<option ?selected=${this.model===e} value="${e}">${e}</option>`)}
                </select>

                <label
                    for="${this.side}_apiKey"
                    style="grid-area: L2"
                    class="secondary"
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    >API Key</label
                >
                <input
                    class="secondary"
                    style="grid-area: I1"
                    type="${this.showApiKey?"text":"password"}"
                    name="apiKey"
                    id="${this.side}_apiKeys"
                    .value="${this.apiKey??""}"
                    placeholder="Enter API key for ${this.provider?.name??""} ..."
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    @change="${e=>W.dispatch.apiKeys.set({provider:this.providerId,apiKey:e.target.value})}"
                    title="${this.provider?.name?`Enter your ${this.provider?.name} API key here, or drop your .env file here and your API keys will be extracted.`:""}"
                /><label
                    class="labelFollowsInput secondary"
                    style="grid-area: C1"
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    for="${this.side}_saveApiKeys"
                    ><input
                        id="${this.side}_saveApiKeys"
                        name="saveApiKeys"
                        type="checkbox"
                        ?disabled=${!("apiKeyName"in(this.provider??{}))}
                        .checked=${di(this.saveApiKeys)}
                        @change=${this.saveApiKeysChanged}
                    />Save keys</label
                ><label
                    class="labelFollowsInput secondary"
                    style="grid-area: C2"
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    for="${this.side}_showApiKey"
                    ><input
                        id="${this.side}_showApiKey"
                        name="showApiKey"
                        type="checkbox"
                        ?disabled=${!("apiKeyName"in(this.provider??{}))}
                        .checked=${di(this.showApiKey)}
                        @change=${this.showApiKeyChanged}
                    />Show key</label
                >
                <label
                    for="${this.side}_baseUrl"
                    class="secondary"
                    style="grid-area: L2"
                    ?disabled=${!this.provider?.configurableUrl}
                    >Base URL</label
                >
                <input
                    id="${this.side}_baseUrl"
                    name="baseUrl"
                    class="secondary"
                    style="grid-area: I1"
                    .value="${this.baseUrl??this.provider?.baseUrl}"
                    placeholder="Enter Base URL..."
                    ?disabled=${!this.provider?.configurableUrl}
                    @change=${e=>W.dispatch.settings.setPlayerModel({color:this.side,baseUrl:e.target.value})}
                />
            </form>
            <div class="hero">
                <div class="piece ${this.side} pawn"></div>
            </div>
        `}};customElements.get("chat-settings")||customElements.define("chat-settings",mi);function qe(r,e,t,i){var n=arguments.length,s=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(s=(n<3?o(s):n>3?o(e,t,s):o(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}var _l={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Bt},bl=(r=_l,e,t)=>{let{kind:i,metadata:n}=t,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,r),i==="accessor"){let{name:o}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(i==="setter"){let{name:o}=t;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+i)};function He(r){return(e,t)=>typeof t=="object"?bl(r,e,t):((i,n,s)=>{let o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}var We=class r extends Event{constructor(e){super(r.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};We.eventName="rangeChanged";var Ye=class r extends Event{constructor(e){super(r.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};Ye.eventName="visibilityChanged";var yt=class r extends Event{constructor(){super(r.eventName,{bubbles:!1})}};yt.eventName="unpinned";var gi=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},rr=class extends gi{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){let i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);let s=Math.abs(i-e),o=Math.abs(n-t);s<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};var $s=typeof window<"u"?window.ResizeObserver:void 0;var bt=Symbol("virtualizerRef"),sr="virtualizer-sizer",Ms,ar=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new $s(()=>this._hostElementSizeChanged()),this._childrenRO=new $s(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[bt]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=Pl(this._hostElement,e),this._scrollerController=new rr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${sr}]`);t||(t=document.createElement("div"),t.setAttribute(sr,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(sr,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||Ms;if(typeof t=="function"&&this._layout instanceof t){let i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;let n={...e};delete n.type,t=n}else t=e;i===void 0&&(Ms=i=(await Promise.resolve().then(()=>(Os(),Ps))).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(s=>s.startTime>=this._benchmarkStart&&s.startTime<e).reduce((s,o)=>s+o.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<t.length;n++){let s=t[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(s))&&(e[o]=i.call(this,s,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},Cl(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new yt)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(sr)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let n,s,o,a,l=e.getBoundingClientRect();n=0,s=0,o=window.innerHeight,a=window.innerWidth;let h=this._clippingAncestors.map(O=>O.getBoundingClientRect());h.unshift(l);for(let O of h)n=Math.max(n,O.top),s=Math.max(s,O.left),o=Math.min(o,O.bottom),a=Math.min(a,O.right);let p=t.getBoundingClientRect(),g={left:l.left-p.left,top:l.top-p.top},f={width:t.scrollWidth,height:t.scrollHeight},_=n-l.top+e.scrollTop,E=s-l.left+e.scrollLeft,C=Math.max(0,o-n),b=Math.max(0,a-s);i.viewportSize={width:b,height:C},i.viewportScroll={top:_,left:E},i.totalScrollSize=f,i.offsetWithinScroller=g}}_sizeHostElement(e){let i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{let s=this._hostElement.style;s.minWidth=i?`${i}px`:"100%",s.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:n,height:s,xOffset:o,yOffset:a},l)=>{let h=this._children[l-this._first];h&&(h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${i}px, ${t}px)`,n!==void 0&&(h.style.width=n+"px"),s!==void 0&&(h.style.height=s+"px"),h.style.left=o===void 0?null:o+"px",h.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){let{_first:t,_last:i,_firstVisible:n,_lastVisible:s}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==s}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new We({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ye({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function Cl(r){let e=window.getComputedStyle(r);return{marginTop:or(e.marginTop),marginRight:or(e.marginRight),marginBottom:or(e.marginBottom),marginLeft:or(e.marginLeft)}}function or(r){let e=r?parseFloat(r):NaN;return Number.isNaN(e)?0:e}function Rs(r){if(r.assignedSlot!==null)return r.assignedSlot;if(r.parentElement!==null)return r.parentElement;let e=r.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Al(r,e=!1){let t=[],i=e?r:Rs(r);for(;i!==null;)t.push(i),i=Rs(i);return t}function Pl(r,e=!1){let t=!1;return Al(r,e).filter(i=>{if(t)return!1;let n=getComputedStyle(i);return t=n.position==="fixed",n.overflow!=="visible"})}var bi=r=>r,wi=(r,e)=>j`${e}: ${JSON.stringify(r,null,2)}`,_i=class extends Fe{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>wi(t,i+this._first),this._keyFunction=(t,i)=>bi(t,i+this._first),this._items=[],e.type!==ne.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return pt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Y:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(n,s)=>t(n,s+this._first)),i&&(this._keyFunction=(n,s)=>i(n,s+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:i,scroller:n,items:s}=t;this._virtualizer=new ar({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=s,this._virtualizer.connected()}_initialize(e,t){let i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},Ts=ae(_i);var _e=class extends ie{constructor(){super(...arguments),this.items=[],this.renderItem=wi,this.keyFunction=bi,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:i,layout:n,scroller:s}=this;return j`${Ts({items:e,renderItem:t,keyFunction:i,layout:n,scroller:s})}`}element(e){return this[bt]?.element(e)}get layoutComplete(){return this[bt]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};qe([He({attribute:!1})],_e.prototype,"items",void 0);qe([He()],_e.prototype,"renderItem",void 0);qe([He()],_e.prototype,"keyFunction",void 0);qe([He({attribute:!1})],_e.prototype,"layout",void 0);qe([He({reflect:!0,type:Boolean})],_e.prototype,"scroller",void 0);customElements.define("lit-virtualizer",_e);var wt=class extends he{constructor(e){if(super(e),this.it=L,e.type!==ne.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===L||e==null)return this._t=void 0,this.it=e;if(e===Y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};wt.directiveName="unsafeHTML",wt.resultType=1;var xi=ae(wt);var Is=oe`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        overflow-x: visible;
        height: 100%;
        padding-top: 10px;
    }

    .scroll {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        flex: 1;
        overflow-y: auto;
        margin: 10px 20px;
        border-radius: 6px;
        border: 15px solid #1a1b26;
        border-top: 0;
        background: var(--bg-main) scroll center / contain no-repeat;
        background-image: var(--bg-image);
        --theta: mod(var(--time) / 500, 2 * pi);
        --glow-x: cos(var(--theta));
        --glow-y: sin(var(--theta));
    }

    :host([playing]) .scroll {
        box-shadow: calc(3px * var(--glow-x)) calc(3px * var(--glow-y)) 6px 4px var(--accent);
    }

    .scroll::before {
        content: '';
        height: 100px;
        min-height: 50px;
        background-repeat: no-repeat;
        background-color: transparent;
        background-position: center top;
        background-size: 100% 50px;
        background-image: linear-gradient(to bottom, var(--bg-main), rgba(from var(--bg-main) r g b / 0));
        display: block;
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0px;
        right: 0px;
        transition: height 2s ease-in-out 3s;
    }

    .intro.scroll::before {
        height: 0px;
    }

    .scroll lit-virtualizer.chats {
        padding: 0;
        width: 100%;
        height: fit-content;
        overflow-x: hidden;
        background-color: transparent;
        transition: background-color 4s ease-in-out;
    }

    .intro.scroll lit-virtualizer.chats {
        background-color: rgba(from var(--bg-main) r g b / 1);
    }

    .chatEntry {
        justify-self: flex-end;
        font-size: 1.1rem;
        width: 100%;
        padding: 8px;
        margin: 4px 0;
        background-color: var(--bg-chat);
        border-radius: 4px;
        cursor: pointer;
        transition-timing-function: ease-out;
        transition-duration: 2s;
        transition-property: color, background-color;
    }

    .chatEntry:hover {
        background-color: var(--bg-user);
    }

    :host([playing]) .chatEntry.active {
        color: var(--accent);
        background-color: var(--bg-user);
    }

    .chatEntry p:first-child {
        margin-top: 0;
    }

    .chatEntry * + p {
        margin-top: 5px;
    }

    .chatEntry p:last-child {
        margin-bottom: 0;
        .active & {
            display: inline;
            padding-inline-end: 0.2em;
        }
    }

    .chatEntry .reasoning {
        font-style: italic;
        font-weight: 200;
    }

    .chats .active.chatEntry > *:last-child::after {
        content: '      ';
        display: inline;
        animation: throb 1s infinite;
        font-weight: bold;
        vertical-align: bottom;
        font-size: 1.25em;
        line-height: 1;
        filter: blur(1.4px);
    }

    .usage {
        flex-shrink: 0;
        display: block;
        position: relative;
        font-size: 12px;
        color: var(--text-main);
        background-color: var(--bg-chat);
        white-space: nowrap;
        margin-bottom: 10px;
        width: 100%;
        text-align: center;
        border-radius: 0 0 6px 6px;
    }

    /* .throbber::after {
        content: '···';
        display: inline-block;
        animation: throb 1s infinite;
        font-weight: bold;
        vertical-align: bottom;
    } */

    @keyframes throb {
        0% {
            content: '      ';
        }
        25% {
            content: ' ·    ';
        }
        50% {
            content: ' · ·  ';
        }
        75% {
            content: ' · · ·';
        }
    }
`;var Ol={anthropic:q`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.2 65">
        <path fill="#FFF" d="M66.5,0H52.4l25.7,65h14.1L66.5,0z M25.7,0L0,65h14.4l5.3-13.6h26.9L51.8,65h14.4L40.5,0C40.5,0,25.7,0,25.7,0z M24.3,39.3l8.8-22.8l8.8,22.8H24.3z"></path>
    </svg>`,deepseek:q`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 24 25">
        <path fill-rule="nonzero" fill="#4D6BFE" d="M27.501 8.46875C27.249 8.3457 27.1406 8.58008 26.9932 8.69922C26.9434 8.73828 26.9004 8.78906 26.8584 8.83398C26.4902 9.22852 26.0605 9.48633 25.5 9.45508C24.6787 9.41016 23.9785 9.66797 23.3594 10.2969C23.2275 9.52148 22.79 9.05859 22.125 8.76172C21.7764 8.60742 21.4238 8.45312 21.1807 8.11719C21.0098 7.87891 20.9639 7.61328 20.8779 7.35156C20.8242 7.19336 20.7695 7.03125 20.5879 7.00391C20.3906 6.97266 20.3135 7.13867 20.2363 7.27734C19.9258 7.84375 19.8066 8.46875 19.8174 9.10156C19.8447 10.5234 20.4453 11.6562 21.6367 12.4629C21.7725 12.5547 21.8076 12.6484 21.7646 12.7832C21.6836 13.0605 21.5869 13.3301 21.501 13.6074C21.4473 13.7852 21.3662 13.8242 21.1768 13.7461C20.5225 13.4727 19.957 13.0684 19.458 12.5781C18.6104 11.7578 17.8438 10.8516 16.8877 10.1426C16.6631 9.97656 16.4395 9.82227 16.207 9.67578C15.2314 8.72656 16.335 7.94727 16.5898 7.85547C16.8574 7.75977 16.6826 7.42773 15.8193 7.43164C14.957 7.43555 14.167 7.72461 13.1611 8.10938C13.0137 8.16797 12.8594 8.21094 12.7002 8.24414C11.7871 8.07227 10.8389 8.0332 9.84766 8.14453C7.98242 8.35352 6.49219 9.23633 5.39648 10.7441C4.08105 12.5547 3.77148 14.6133 4.15039 16.7617C4.54883 19.0234 5.70215 20.8984 7.47559 22.3633C9.31348 23.8809 11.4307 24.625 13.8457 24.4824C15.3125 24.3984 16.9463 24.2012 18.7881 22.6406C19.2529 22.8711 19.7402 22.9629 20.5498 23.0332C21.1729 23.0918 21.7725 23.002 22.2373 22.9062C22.9648 22.752 22.9141 22.0781 22.6514 21.9531C20.5186 20.959 20.9863 21.3633 20.5605 21.0371C21.6445 19.752 23.2783 18.418 23.917 14.0977C23.9668 13.7539 23.9238 13.5391 23.917 13.2598C23.9131 13.0918 23.9512 13.0254 24.1445 13.0059C24.6787 12.9453 25.1973 12.7988 25.6738 12.5352C27.0557 11.7793 27.6123
            10.5391 27.7441 9.05078C27.7637 8.82422 27.7402 8.58789 27.501 8.46875ZM15.46 21.8613C13.3926 20.2344 12.3906 19.6992 11.9766 19.7227C11.5898 19.7441 11.6592 20.1875 11.7441 20.4766C11.833 20.7617 11.9492 20.959 12.1123 21.209C12.2246 21.375 12.3018 21.623 12 21.8066C11.334 22.2207 10.1768 21.668 10.1221 21.6406C8.77539 20.8477 7.64941 19.7988 6.85547 18.3652C6.08984 16.9844 5.64453 15.5039 5.57129 13.9238C5.55176 13.541 5.66406 13.4062 6.04297 13.3379C6.54199 13.2461 7.05762 13.2266 7.55664 13.2988C9.66602 13.6074 11.4619 14.5527 12.9668 16.0469C13.8262 16.9004 14.4766 17.918 15.1465 18.9121C15.8584 19.9688 16.625 20.9746 17.6006 21.7988C17.9443 22.0879 18.2197 22.3086 18.4824 22.4707C17.6895 22.5586 16.3652 22.5781 15.46 21.8613ZM16.4502 15.4805C16.4502 15.3105 16.5859 15.1758 16.7568 15.1758C16.7949 15.1758 16.8301 15.1836 16.8613 15.1953C16.9033 15.2109 16.9424 15.2344 16.9727 15.2695C17.0273 15.3223 17.0586 15.4004 17.0586 15.4805C17.0586 15.6504 16.9229 15.7852 16.7529 15.7852C16.582 15.7852 16.4502 15.6504 16.4502 15.4805ZM19.5273 17.0625C19.3301 17.1426 19.1328 17.2129 18.9434 17.2207C18.6494 17.2344 18.3281 17.1152 18.1533 16.9688C17.8828 16.7422 17.6895 16.6152 17.6074 16.2168C17.5732 16.0469 17.5928 15.7852 17.623 15.6348C17.6934 15.3105 17.6152 15.1035 17.3877 14.9141C17.2012 14.7598 16.9658 14.7188 16.7061 14.7188C16.6094 14.7188 16.5205 14.6758 16.4541 14.6406C16.3457 14.5859 16.2568 14.4512 16.3418 14.2852C16.3691 14.2324 16.501 14.1016 16.5322 14.0781C16.8838 13.877 17.29 13.9434 17.666 14.0938C18.0146 14.2363 18.2773 14.498 18.6562 14.8672C19.0439 15.3145 19.1133 15.4395 19.334 15.7734C19.5078 16.0371 19.667 16.3066 19.7754 16.6152C19.8408 16.8066 19.7559 16.9648 19.5273 17.0625Z">
        </path>
    </svg>`,google:q`<svg viewBox="15 0 200 229" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="68" cy="39" fill="#ea4335" r="12"/><circle cx="68" cy="89" fill="#ea4335" r="12"/><circle cx="68" cy="139" fill="#ea4335" r="12"/><circle cx="68" cy="189" fill="#ea4335" r="12"/><g fill="#fbbc04"><circle cx="111" cy="14" r="14"/><circle cx="111" cy="64" r="14"/><circle cx="111" cy="114" r="14"/><circle cx="111" cy="164" r="14"/><circle cx="111" cy="215" r="14"/></g><circle cx="153.5" cy="39.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="89.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="139.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="189.5" fill="#34a853" r="16.5"/><g fill="#4285f4"><circle cx="196" cy="64" r="19"/><circle cx="25" cy="64" r="10"/><circle cx="25" cy="114" r="10"/><circle cx="25" cy="164" r="10"/><circle cx="196" cy="114" r="19"/><circle cx="196" cy="164" r="19"/></g></g></svg>`,lmstudio:q`<svg fill="#FFF" fill-rule="evenodd" style="flex:none;line-height:1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>LM Studio</title>
        <path d="M2.84 2a1.273 1.273 0 100 2.547h14.107a1.273 1.273 0 100-2.547H2.84zM7.935 5.33a1.273 1.273 0 000 2.548H22.04a1.274 1.274 0 000-2.547H7.935zM3.624 9.935c0-.704.57-1.274 1.274-1.274h14.106a1.274 1.274 0 010 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM1.273 12.188a1.273 1.273 0 100 2.547H15.38a1.274 1.274 0 000-2.547H1.273zM3.624 16.792c0-.704.57-1.274 1.274-1.274h14.106a1.273 1.273 0 110 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM13.029 18.849a1.273 1.273 0 100 2.547h9.698a1.273 1.273 0 100-2.547h-9.698z" fill-opacity=".3"></path>
        <path d="M2.84 2a1.273 1.273 0 100 2.547h10.287a1.274 1.274 0 000-2.547H2.84zM7.935 5.33a1.273 1.273 0 000 2.548H18.22a1.274 1.274 0 000-2.547H7.935zM3.624 9.935c0-.704.57-1.274 1.274-1.274h10.286a1.273 1.273 0 010 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM1.273 12.188a1.273 1.273 0 100 2.547H11.56a1.274 1.274 0 000-2.547H1.273zM3.624 16.792c0-.704.57-1.274 1.274-1.274h10.286a1.273 1.273 0 110 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM13.029 18.849a1.273 1.273 0 100 2.547h5.78a1.273 1.273 0 100-2.547h-5.78z"></path>
    </svg>`,mistral:q`<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
        <path d="M189.08 303.228H94.587l.044-94.446h94.497l-.048 94.446z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M283.528 397.674h-94.493l.044-94.446h94.496l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M283.575 303.228H189.08l.046-94.446h94.496l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M378.07 303.228h-94.495l.044-94.446h94.498l-.047 94.446zM189.128 208.779H94.633l.044-94.448h94.498l-.047 94.448zM378.115 208.779h-94.494l.045-94.448h94.496l-.047 94.448zM94.587 303.227H.093l.044-96.017h94.496l-.046 96.017z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M94.633 208.779H.138l.046-94.448H94.68l-.047 94.448z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M94.68 115.902H.185L.23 19.885h94.498l-.047 96.017zM472.657 114.331h-94.495l.044-94.446h94.497l-.046 94.446zM94.54 399.244H.046l.044-97.588h94.497l-.047 97.588z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M94.495 492.123H0l.044-94.446H94.54l-.045 94.446zM472.563 303.228H378.07l.044-94.446h94.496l-.047 94.446zM472.61 208.779h-94.495l.044-94.448h94.498l-.047 94.448z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M472.517 397.674h-94.494l.044-94.446h94.497l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M472.47 492.121h-94.493l.044-96.017h94.496l-.047 96.017z" fill="#e3e3e4" fill-rule="nonzero"/>
        <path d="M228.375 303.22h-96.061l.046-94.446h96.067l-.052 94.446z" fill="#ff7000" fill-rule="nonzero"/>
        <path d="M322.827 397.666h-94.495l.044-96.018h94.498l-.047 96.018z" fill="#ff4900" fill-rule="nonzero"/>
                <path d="M324.444 303.22h-97.636l.046-94.446h97.638l-.048 94.446z" fill="#ff7000" fill-rule="nonzero"/>
        <path d="M418.938 303.22h-96.064l.045-94.446h96.066l-.047 94.446z" fill="#ff7000" fill-rule="nonzero"/>
        <path d="M228.423 208.77H132.36l.045-94.445h96.066l-.05 94.446zM418.985 208.77H322.92l.044-94.445h96.069l-.048 94.446z" fill="#ffa300" fill-rule="nonzero"/>
        <path d="M133.883 304.79H39.392l.044-96.017h94.496l-.049 96.017z" fill="#ff7000" fill-rule="nonzero"/>
        <path d="M133.929 208.77H39.437l.044-95.445h94.496l-.048 95.445z" fill="#ffa300" fill-rule="nonzero"/>
        <path d="M133.976 114.325H39.484l.044-94.448h94.497l-.05 94.448zM511.954 115.325h-94.493l.044-95.448h94.497l-.048 95.448z" fill="#ffce00" fill-rule="nonzero"/>
        <path d="M133.836 399.667H39.345l.044-96.447h94.496l-.049 96.447z" fill="#ff4900" fill-rule="nonzero"/>
        <path d="M133.79 492.117H39.3l.044-94.448h94.496l-.049 94.448z" fill="#ff0107" fill-rule="nonzero"/>
        <path d="M511.862 303.22h-94.495l.046-94.446h94.496l-.047 94.446z" fill="#ff7000" fill-rule="nonzero"/>
        <path d="M511.907 208.77h-94.493l.044-94.445h94.496l-.047 94.446z" fill="#ffa300" fill-rule="nonzero"/>
        <path d="M511.815 398.666h-94.493l.044-95.447h94.496l-.047 95.447z" fill="#ff4900" fill-rule="nonzero"/>
        <path d="M511.77 492.117h-94.496l.046-94.448h94.496l-.047 94.448z" fill="#ff0107" fill-rule="nonzero"/>
    </svg>`,ollama:q`<svg viewBox="-104 0 854 854" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M140.629 0.239929C132.66 1.52725 123.097 5.69568 116.354 10.845C95.941 26.3541 80.1253 59.2728 73.4435 100.283C70.9302 115.792 69.2138 137.309 69.2138 153.738C69.2138 173.109 71.4819 197.874 74.7309 214.977C75.4665 218.778 75.8343 222.15 75.5278 222.395C75.2826 222.64 72.2788 225.092 68.9072 227.789C57.3827 236.984 44.2029 251.145 35.1304 264.08C17.7209 288.784 6.44151 316.86 1.72133 347.265C-0.117698 359.28 -0.608106 383.555 0.863118 395.57C4.11207 423.278 12.449 446.695 26.7321 468.151L31.391 475.078L30.0424 477.346C20.4794 493.407 12.3264 516.64 8.52575 538.953C5.522 556.608 5.15419 561.328 5.15419 584.99C5.15419 608.837 5.4607 613.557 8.28054 630.047C11.6521 649.786 18.5178 670.689 26.1804 684.605C28.6938 689.141 34.8239 698.581 35.5595 699.072C35.8047 699.194 35.0691 701.462 33.9044 704.098C25.077 723.408 17.537 749.093 14.4106 770.733C12.2038 785.567 11.8973 790.349 11.8973 805.981C11.8973 825.903 13.0007 835.589 17.1692 851.466L17.7822 853.795H44.019H70.3172L68.6007 850.546C57.9957 830.93 57.0149 794.517 66.1487 758.166C70.3172 741.369 75.0374 729.048 83.8647 712.067L89.1366 701.769V695.455C89.1366 689.57 89.014 688.896 87.1137 685.034C85.6424 682.091 83.6808 679.578 80.1866 676.145C74.2404 670.383 69.9494 664.314 66.5165 656.835C51.4365 624.1 48.494 575.489 59.0991 534.049C63.5128 516.762 70.8076 501.376 78.4702 492.978C83.6808 487.215 86.378 480.779 86.378 474.097C86.378 467.17 83.926 461.469 78.4089 455.523C62.5932 438.604 52.8464 418.006 49.3522 394.038C44.3868 359.893 53.3981 322.683 73.8726 293.198C93.9181 264.263 122.055 245.689 153.503 240.724C160.552 239.559 173.732 239.743 181.088
            241.092C189.119 242.502 194.145 242.072 199.295 239.62C205.67 236.617 208.858 232.877 212.597 224.295C215.907 216.633 218.482 212.464 225.409 203.821C233.746 193.461 241.776 186.411 254.649 177.89C269.362 168.266 286.097 161.278 302.771 157.906C308.839 156.68 311.659 156.496 323 156.496C334.341 156.496 337.161 156.68 343.229 157.906C367.688 162.872 391.964 175.5 411.335 193.399C415.503 197.261 425.495 209.644 428.683 214.794C429.909 216.816 432.055 221.108 433.403 224.295C437.142 232.877 440.33 236.617 446.705 239.62C451.671 242.011 456.881 242.502 464.605 241.214C476.804 239.13 486.183 239.314 498.137 241.766C538.841 249.98 574.273 283.512 589.966 328.446C603.636 367.862 599.774 409.118 579.422 440.626C575.989 445.96 572.556 450.251 567.591 455.523C556.863 466.986 556.863 481.208 567.53 492.978C585.062 512.165 596.035 559.367 592.724 600.99C590.518 628.453 583.468 653.035 573.782 666.95C572.066 669.402 568.511 673.57 565.813 676.145C562.319 679.578 560.358 682.091 558.886 685.034C556.986 688.896 556.863 689.57 556.863 695.455V701.769L562.135 712.067C570.963 729.048 575.683 741.369 579.851 758.166C588.863 794.027 588.066 829.704 577.767 849.995C576.909 851.711 576.173 853.305 576.173 853.489C576.173 853.673 587.882 853.795 602.226 853.795H628.218L628.892 851.159C629.26 849.75 629.873 847.604 630.179 846.378C630.854 843.681 632.202 835.712 633.306 828.049C634.348 820.325 634.348 791.881 633.306 783.299C629.383 752.158 622.823 727.454 612.096 704.098C610.931 701.462 610.195 699.194 610.44 699.072C610.747 698.888 612.463 696.436 614.302 693.677C627.666 673.448 635.88 648.008 640.049 614.415C641.152 605.158
            641.152 565.374 640.049 556.485C637.106 533.559 633.551 517.988 627.666 502.234C625.214 495.675 618.716 481.821 615.958 477.346L614.609 475.078L619.268 468.151C633.551 446.695 641.888 423.278 645.137 395.57C646.608 383.555 646.118 359.28 644.279 347.265C639.497 316.798 628.279 288.845 610.87 264.08C601.797 251.145 588.617 236.984 577.093 227.789C573.721 225.092 570.717 222.64 570.472 222.395C570.166 222.15 570.534 218.778 571.269 214.977C578.687 176.296 578.441 128.053 570.656 90.3524C563.913 57.4951 551.653 31.3808 535.837 16.3008C523.209 4.28578 510.336 -0.863507 494.888 0.11731C459.456 2.20154 430.89 42.9667 419.61 107.21C417.771 117.57 416.178 129.708 416.178 133.018C416.178 134.305 415.932 135.347 415.626 135.347C415.319 135.347 412.929 134.121 410.354 132.589C383.014 116.405 352.608 107.762 323 107.762C293.392 107.762 262.986 116.405 235.646 132.589C233.071 134.121 230.681 135.347 230.374 135.347C230.068 135.347 229.822 134.305 229.822 133.018C229.822 129.585 228.167 117.08 226.39 107.21C216.152 49.5259 192.674 11.3354 161.472 1.71112C157.181 0.423799 144.982 -0.434382 140.629 0.239929ZM151.051 50.139C159.878 57.1273 169.686 77.1114 175.326 99.4863C176.368 103.532 177.471 108.191 177.778 109.907C178.023 111.563 178.697 115.302 179.249 118.183C181.64 131.179 182.743 145.217 182.866 162.32L182.927 179.178L178.697 185.43L174.468 191.744H164.598C153.074 191.744 141.61 193.216 130.637 196.158C126.714 197.139 122.913 198.12 122.178 198.304C121.013 198.549 120.829 198.181 120.155 193.154C116.538 165.875 116.722 135.654 120.707 110.52C125.12 82.5059 135.419 57.1273 145.472 49.6486C147.863 47.8708 148.292 47.9321 151.051 50.139ZM500.589 49.7098C506.658 54.1848 513.34 66.0772 518.305 81.2798C528.297 111.685 531.117 153.431 525.845 193.154C525.171 198.181 524.987 198.549 523.822 198.304C523.087 198.12 519.286 197.139 515.363 196.158C504.39 193.216 492.926 191.744 481.402 191.744H471.532L467.303 185.43L463.073 179.178L463.134 162.32C463.257 138.535 465.464 119.961 470.735 99.3024C476.314 77.1114 486.183 57.1273 494.949 50.139C497.708 47.9321 498.137 47.8708 500.589 49.7098Z" fill="#FFF"/>
        <path d="M313.498 358.237C300.195 359.525 296.579 360.015 290.203 361.303C279.843 363.448 265.989 368.23 256.365 372.95C222.895 389.317 199.846 416.596 192.796 448.166C191.386 454.419 191.202 456.503 191.202 467.047C191.202 477.468 191.386 479.736 192.735 485.682C202.114 526.938 240.12 557.405 289.284 562.983C299.95 564.148 346.049 564.148 356.715 562.983C396.193 558.508 430.154 537.114 445.418 507.076C449.463 499.046 451.425 493.835 453.264 485.682C454.613 479.736 454.797 477.468 454.797 467.047C454.797 456.503 454.613 454.419 453.203 448.166C442.965 402.313 398.461 366.207 343.903 359.341C336.792 358.483 318.157 357.747 313.498 358.237ZM336.424 391.585C354.631 393.547 372.96 400.045 387.672 409.853C395.58 415.125 406.737 426.159 411.518 433.393C417.403 442.342 420.774 451.476 422.307 462.572C422.981 467.66 422.614 471.522 420.774 479.736C417.893 491.996 408.943 504.808 396.867 513.758C391.227 517.865 379.519 523.812 372.347 526.141C358.738 530.493 349.849 531.29 318.095 531.045C297.376 530.861 293.697 530.677 287.751 529.574C267.461 525.773 251.4 517.681 239.753 505.36C230.312 495.429 226.021 486.357 223.692 471.706C222.65 464.901 224.611 453.622 228.596 444.12C233.439 432.534 245.944 418.129 258.327 409.853C272.671 400.29 291.552 393.486 308.9 391.647C315.582 390.911 329.742 390.911 336.424 391.585Z" fill="#FFF"/>
        <path d="M299.584 436.336C294.925 438.849 291.676 445.224 292.657 449.944C293.76 455.032 298.235 460.182 305.223 464.412C308.963 466.68 309.208 466.986 309.392 469.254C309.514 470.603 309.024 474.465 308.35 477.898C307.614 481.269 307.062 484.825 307.062 485.806C307.124 488.442 309.576 492.733 312.15 494.817C314.419 496.656 314.848 496.717 321.223 496.901C327.047 497.085 328.273 496.962 330.602 495.859C336.61 492.916 338.142 487.522 335.935 477.162C334.096 468.519 334.464 467.17 339.062 464.534C343.904 461.714 349.054 456.749 350.586 453.377C353.529 446.941 350.831 439.646 344.333 436.274C342.74 435.477 340.778 435.11 337.897 435.11C333.422 435.11 330.541 436.152 325.269 439.523L322.265 441.424L320.365 440.259C312.58 435.661 311.17 435.11 306.449 435.171C303.078 435.171 301.239 435.477 299.584 436.336Z" fill="#FFF"/>
        <path d="M150.744 365.165C139.894 368.598 131.802 376.567 127.634 387.908C125.611 393.303 124.63 401.824 125.488 406.421C127.511 417.394 136.522 427.386 146.76 430.145C159.633 433.516 169.257 431.309 177.778 422.85C182.743 418.007 185.441 413.777 188.138 406.911C190.099 402.069 190.222 401.211 190.222 394.345L190.283 386.989L187.709 381.717C183.601 373.38 176.184 367.188 167.602 364.92C162.759 363.694 154.974 363.756 150.744 365.165Z" fill="#FFF"/>
        <path d="M478.153 364.982C469.755 367.25 462.276 373.502 458.291 381.717L455.717 386.989L455.778 394.345C455.778 401.211 455.901 402.069 457.862 406.911C460.56 413.777 463.257 418.007 468.222 422.85C476.743 431.309 486.367 433.516 499.241 430.145C506.658 428.183 514.075 421.93 517.631 414.635C520.696 408.444 521.431 403.969 520.451 396.919C518.183 380.797 508.742 369.089 494.704 364.982C490.597 363.756 482.628 363.756 478.153 364.982Z" fill="#FFF"/>
    </svg>`,openai:q`<svg viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFF" d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/>
    </svg>`,openrouter:q`<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff">
        <g clip-path="url(#clip0_205_3)">
                    <path d="M3 248.945C18 248.945 76 236 106 219C136 202 136 202 198 158C276.497 102.293 332 120.945 423 120.945" stroke-width="90"/>
            <path d="M511 121.5L357.25 210.268L357.25 32.7324L511 121.5Z" />
            <path d="M0 249C15 249 73 261.945 103 278.945C133 295.945 133 295.945 195 339.945C273.497 395.652 329 377 420 377" stroke-width="90"/>
            <path d="M508 376.445L354.25 287.678L354.25 465.213L508 376.445Z" />
        </g>
    </svg>`,_desaturate:q`<svg xmlns="http://www.w3.org/2000/svg">
        <filter id="desaturate"><feColorMatrix type="saturate" values="0.75" />
    </svg>`,_marble:q`<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <filter id='mono-chrome-turbulence'>
            <feTurbulence baseFrequency='.2' numOctaves='1'/>
            <feColorMatrix type='luminanceToAlpha'/>
            <feComponentTransfer>
                <feFuncA type='linear' slope='0.2'/>
            </feComponentTransfer>
        </filter>
        <rect x='0' y='0' height='100%' width='100%' fill='#263f4a'/>
        <rect x='0' y='0' height='100%' width='100%' filter='url(#mono-chrome-turbulence)'/>
    </svg>`},$l={desaturate:({values:r=.75})=>q`<feColorMatrix type="saturate" values="${r}" />`,normalizeBrightness:({rangeIn:r,rangeOut:e})=>{let t=(e.max-e.min)/(r.max-r.min),i=e.min-r.min*t;return q`<feComponentTransfer>
            <feFuncR type="linear" slope="${t}" intercept="${i}"/>
            <feFuncG type="linear" slope="${t}" intercept="${i}"/>
            <feFuncB type="linear" slope="${t}" intercept="${i}"/>
        </feComponentTransfer>`},opacity:({value:r=1})=>q`<feComponentTransfer><feFuncA type="linear" slope="${r}"/></feComponentTransfer>`,blur:({value:r=1})=>q`<feGaussianBlur stdDeviation="${r}" />`},ks=r=>Si(Ol[r]),Ml=r=>Object.entries(r).map(([e,t])=>Si($l[e](t))).join(""),Ei={},Ds=(r,e)=>r in Ei?Ei[r]:Ei[r]=URL.createObjectURL(new Blob([e],{type:"image/svg+xml;utf8"}));var Rl=r=>`data:image/svg+xml;utf8,${encodeURIComponent(r)}`;var zs=(r,e)=>Si(q`<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs><filter id="filter">${Object.values(e).join("")}</filter></defs>
        <g filter="url(#filter)">${r}</g>
    </svg>`);function Tl(r,e,t){let i=r.getImageData(0,0,e,t),{data:n}=i,s=255,o=0;for(let a=0;a<n.length;a+=4){let l=n[a],h=n[a+1],p=n[a+2],g=.299*l+.587*h+.114*p;s=Math.min(s,g),o=Math.max(o,g)}return{min:s/255,max:o/255}}var Ns=async r=>{let e=new Image;e.src=Rl(zs(ks(r),{desaturate:{values:0}}));let t=document.createElement("canvas"),i=t.getContext("2d");return new Promise((n,s)=>{e.onload=()=>{(!e.width||!e.height)&&(e.width=300,e.height=150),t.width=e.width,t.height=e.height,i.drawImage(e,0,0);let o=Tl(i,e.width,e.height),a=zs(ks(r),Ml({normalizeBrightness:{rangeIn:o,rangeOut:{min:.25,max:.25}},desaturate:{values:0},opacity:{value:r==="deepseek"?.2:.1}}));n(a)}})},Il=(r,e)=>r.flatMap((t,i)=>[t,e[i]]),Si=r=>Il(r.strings,r.values).join("");var V=class extends Event{constructor(e,t){super(e,t),this.value=t?.value,this.path=t?.path,this.error=t?.error}},re=class extends Error{constructor(e,{cause:t,offset:i,line:n,column:s,path:o}){super(e,{cause:t}),this.offset=i,this.line=n,this.column=s,this.path=o}[Symbol.for("nodejs.util.inspect.custom")](e,t,i){return`${this.path??""}:${this.line??""}:${this.column??""}:${this.offset??""} ${this.message}`}},kl=$e`
    -?
    (?:0|[1-9]\d*)
    (?:\.\d+)?
    (?:[eE][+-]?\d+)?
`,zl=$e`
    (?<objectStart> \{ )                     |
    (?<objectEnd> \} )                       |
    (?<arrayStart> \[ )                      |
    (?<arrayEnd> \] )                        |
    (?<string> "(?:[^"\\]|\\.)*(?:"|$) )     |
    (?<number> ${kl} )               |
    (?<boolean> true | false)                |
    (?<null> null )                          |
    (?<colon> : )                            |
    (?<comma> , )                            |
    (?<whitespace> \s+ )                     |
    (?<comment> \/\/[^\n]*     |
                \/\*.*?\*\/)
    ${"/gs"}
`,cr=class{constructor(e={}){this.allowComments=e.allowComments??!1,this.allowTrailingCommas=e.allowTrailingCommas??!0,this.decoder=e.decoder,this.parsing=!1}#e={value:[],part:[],end:[],error:[]};addEventListener(e,t){e in this.#e&&this.#e[e].push(t)}removeEventListener(e,t){e in this.#e&&(this.#e[e]=this.#e[e].filter(i=>i!==t))}dispatchEvent(e){this.#e[e.type]?.forEach(t=>t(e))}push(e){this.parsing||this.parse(this.streamGenerator()),this.streamBuffer.push(e),this.streamActivity?.()}streamBuffer=[];async*streamGenerator(){for(;this.parsing;)this.streamBuffer.length===0&&await new Promise(e=>this.streamActivity=e),yield this.streamBuffer.shift()}async parse(e){if(this.parsing)throw new Error(`Already parsing ${this.parsing}`);this.parsing=e;let t="",i="",n="init",s=[],o=[],a=[],l,h=[],p=0;try{for await(let g of e){if(g.length===0)continue;let f=0;if(t+=this.decoder?this.decoder.decode(g,{stream:!0}):g,n==="string"){let _=$e`
                        ^(?<stringPart>(?:[^"\\]|\\.)*)
                         (?<ending>"|\\?$)
                    `,[E,C,b]=t.match(_)??[],{result:O,dangle:T}=this.escapeString(C);if(T){let P=new re("Invalid escape sequence",{offset:p+C.length-T.length});throw this.dispatchEvent(new V("error",{error:P})),P}let k=b==='"'?1:0;t=t.slice(C.length+k),p+=C.length+k,f=0,i+=O;let S=o.at(-1);if(S!=="object-key"&&S!=="object-key-opt"&&this.dispatchEvent(new V("part",{path:a.join("."),value:O})),b!=='"')continue;n=o.pop();let $=JSON.stringify(i),w={type:"string",value:i,length:$.length,index:p-$.length};n==="array-element"||n==="array-element-opt"?n=this.handleArrayElementState({token:w,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:p}):n==="object-key-opt"||n==="object-key"?n=this.handleObjectKeyState({token:w,subscripts:a,state:n,accumulatorOffset:p,states:o,contexts:s}):n==="object-value"&&(n=this.handleObjectValueState({token:w,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:p})),i=""}for(let _ of t.matchAll(zl)){let[[E,C]]=Object.entries(_.groups).filter(([O,T])=>T!=null||T===null),b={type:E,value:C,length:_[0].length,index:_.index};if(f!==b.index)throw this.dispatchEvent(new Event("error")),new re(`Syntax error: ${b.type} ${t.slice(f,b.index)} `,{offset:p+f});if(["comment","number"].includes(b.type)&&b.index+b.length===t.length)break;if(b.type==="string"){if(b.value==='"'||b.value.at(-1)!=='"')break;b.value=b.value.slice(1,-1)}if(b.type==="whitespace"||b.type==="comment"){let O=b.index+p;if(h.push(...[...b.value.matchAll(/\n/g)].map(T=>T.index+O)),b.type==="whitespace"||this.allowComments){f+=b.length;continue}}switch(n){case"init":({initValue:l,state:n}=this.handleInitState({token:b,initValue:l,contexts:s,states:o,state:n,accumulatorOffset:p}));break;case"object-key":case"object-key-opt":n=this.handleObjectKeyState({token:b,subscripts:a,state:n,accumulatorOffset:p,states:o,contexts:s});break;case"object-colon":n=this.handleObjectColonState({token:b,state:n,accumulatorOffset:p});break;case"object-value":n=this.handleObjectValueState({token:b,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:p});break;case"object-comma":n=this.handleObjectCommaState({token:b,state:n,states:o,subscripts:a,contexts:s,accumulatorOffset:p});break;case"array-element":case"array-element-opt":n=this.handleArrayElementState({contexts:s,token:b,subscripts:a,state:n,states:o,accumulatorOffset:p});break;case"array-comma":n=this.handleArrayCommaState({token:b,state:n,subscripts:a,states:o,contexts:s,accumulatorOffset:p})}f+=b.length}if(p+=f,t=t.slice(f),l&&n==="init"){this.dispatchEvent(new V("end",{path:a.join("."),value:l}));break}if(t[0]==='"'){o.push(n),n="string";let{result:_,dangle:E}=this.escapeString(t.slice(1));i=_,E?(p+=t.length-E.length,t=E):(p+=t.length,t=""),this.dispatchEvent(new V("part",{path:a.join("."),value:_}))}}}catch(g){if(g instanceof re){let f=h.filter(_=>_<g.offset);g.line=f.length+1,g.column=g.offset-(f.at(-1)??-1)}throw g}finally{this.parsing=!1}return l}handleObjectColonState({token:e,state:t,accumulatorOffset:i}){if(e.type==="colon")t="object-value";else{let n=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:i+e.index});throw this.dispatchEvent(new V("error",{error:n})),n}return t}handleArrayCommaState({token:e,state:t,subscripts:i,states:n,contexts:s,accumulatorOffset:o}){if(e.type==="comma")t="array-element",i[i.length-1]=i.at(-1)+1;else if(e.type==="arrayEnd")i.pop(),t=n.pop(),this.dispatchEvent(new V("value",{path:i.join("."),value:s.pop()})),i.pop();else{let a=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return t}handleObjectCommaState({token:e,state:t,states:i,subscripts:n,contexts:s,accumulatorOffset:o}){if(e.type==="comma")t="object-key";else if(e.type==="objectEnd")t=i.pop(),this.dispatchEvent(new V("value",{path:n.join("."),value:s.pop()})),n.pop();else{let a=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return t}handleArrayElementState({contexts:e,token:t,subscripts:i,state:n,states:s,accumulatorOffset:o}){let a=e.at(-1);if(t.type==="string"){let{result:l,dangle:h}=this.escapeString(t.value);if(h){let p=new re("Invalid escape sequence",{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:p})),p}a.push(l),this.dispatchEvent(new V("value",{path:i.join("."),value:l})),n="array-comma"}else if(t.type==="number")a.push(Number(t.value)),this.dispatchEvent(new V("value",{path:i.join("."),value:t.value})),n="array-comma";else if(t.type==="boolean")a.push(t.value==="true"),this.dispatchEvent(new V("value",{path:i.join("."),value:t.value})),n="array-comma";else if(t.type==="null")a.push(null),this.dispatchEvent(new V("value",{path:i.join("."),value:t.value})),n="array-comma";else if(t.type==="objectStart"){let l={};a.push(l),e.push(l),s.push("array-comma"),n="object-key-opt"}else if(t.type==="arrayStart"){let l=[];a.push(l),e.push(a),s.push("array-comma"),n="array-element-opt"}else if(t.type==="arrayEnd"){if(n==="array-element"&&!this.allowTrailingCommas){let l=new re("Unexpected comma token: ,",{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:l})),l}e.pop(),n=s.pop(),this.dispatchEvent(new V("value",{path:i.join("."),value:a})),i.pop()}else{let l=new re(`Unexpected ${t.type} token: ${t.value} `,{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:l})),l}return n}handleObjectValueState({token:e,contexts:t,subscripts:i,state:n,states:s,accumulatorOffset:o}){if(e.type==="string"){let{result:a,dangle:l}=this.escapeString(e.value);if(l){let h=new re("Invalid escape sequence",{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:h})),h}t.at(-1)[i.at(-1)]=a,n="object-comma",this.dispatchEvent(new V("value",{path:i.join("."),value:a})),i.pop()}else if(e.type==="number")t.at(-1)[i.at(-1)]=Number(e.value),n="object-comma",this.dispatchEvent(new V("value",{path:i.join("."),value:e.value})),i.pop();else if(e.type==="boolean")t.at(-1)[i.at(-1)]=e.value==="true",n="object-comma",this.dispatchEvent(new V("value",{path:i.join("."),value:e.value==="true"})),i.pop();else if(e.type==="null")t.at(-1)[i.at(-1)]=null,n="object-comma",this.dispatchEvent(new V("value",{path:i.join("."),value:null})),i.pop();else if(e.type==="objectStart")t.push(t.at(-1)[i.at(-1)]={}),s.push("object-comma"),n="object-key-opt";else if(e.type==="arrayStart")t.push(t.at(-1)[i.at(-1)]=[]),s.push("object-comma"),n="array-element-opt",i.push(0);else{let a=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return n}handleObjectKeyState({token:e,subscripts:t,state:i,accumulatorOffset:n,states:s,contexts:o}){if(e.type==="string"){let{result:a,dangle:l}=this.escapeString(e.value);if(l){let h=new re("Invalid escape sequence",{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:h})),h}t.push(a),i="object-colon"}else if(e.type==="objectEnd"){if(i==="object-key"&&!this.allowTrailingCommas){let l=new re("Unexpected comma token: ,",{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:l})),l}t.pop(),i=s.pop();let a=o.pop();this.dispatchEvent(new V("value",{path:t.join("."),value:a}))}else{let a=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return i}handleInitState({token:e,initValue:t,contexts:i,states:n,state:s,accumulatorOffset:o}){if(e.type==="objectStart")t={},i.push(t),n.push(s),s="object-key-opt";else if(e.type==="arrayStart")t=[],i.push(t),n.push(s),s="array-element-opt";else{let a=new re(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return{initValue:t,state:s}}escapeMap={n:`
`,r:"\r",t:"	",f:"\f",b:"\b","/":"/",'"':'"',"\\":"\\"};escapeString(e){let t=e.slice(-2)==="\\\\",i=e.replace(/\\u(....)|\\(.)/g,(s,o,a)=>{if(o){if(o.match(/^[0-9A-F]{4}$/i))return String.fromCodePoint(parseInt(o,16));throw new re("Invalid Unicode escape sequence",{offset:o.index})}else return this.escapeMap[a]??a}),[n]=!t&&i.slice(-5).match(/\\$|\\u[0-9a-fA-F]{0,3}$/)||[];return{result:n?i.slice(0,-n.length):i,dangle:n}}};var js=new showdown.Converter({disableForced4SpacesIndentedSublists:!0,emoji:!0,ghCodeBlocks:!0,requireSpaceBeforeHeadingText:!0,tables:!0,openLinksInNewWindow:!0,simpleLineBreaks:!0,simplifiedAutoLink:!0,smoothLivePreview:!0}),Ci=new Intl.NumberFormat,xt=class{role="assistant";reasoning="";comment="";commentParts=[];reasoningParts=[];hasCommentContent(){return this.comment||this.commentParts.length>1||this.commentParts[0]}hasReasoningContent(){return this.reasoning||this.reasoningParts.length>1||this.reasoningParts[0]}isLast=!0},Ai=class extends Ie(W)(ie){static styles=Is;static properties={conversation:{type:Array},playing:{type:Boolean,reflect:!0},provider:{type:String},side:{type:String,attribute:!0},settings:{type:Object,converter:e=>document.querySelector(e)},usage:{type:Object},intro:{type:Boolean}};constructor(){super(),this.wait=Promise.resolve(),this.paused=!1,this.conversation=[new xt],this.playing=!1,this.provider="",this.settings=null,this.scrollElem=null,this.intro=!0,this.contentParser=null,this.side="",this.usage={input_tokens:0,output_tokens:0,total_tokens:0}}stateChanged(e){let t=Te(e);this.provider=t.provider(this.side),this.bgStyle&&this.bgImageUrl().then(s=>this.bgStyle.setProperty("--bg-image",s));let i={input_tokens:["input_tokens","prompt_tokens"],output_tokens:["output_tokens","completion_tokens"]},n=t.currentUsage?.[this.side];n&&(this.usage=kt([n],i))}firstUpdated(){this.scrollElem=this.shadowRoot.querySelector("lit-virtualizer"),setTimeout(()=>this.intro=!1);let e=new CSSStyleSheet;e.replaceSync(oe`
            :host {
                --bg-image: none;
            }
        `.cssText),this.shadowRoot.adoptedStyleSheets??=[],this.shadowRoot.adoptedStyleSheets.push(e),this.bgStyle=e.cssRules[0].style}reset(){this.conversation=[new xt],this.usage={input_tokens:0,output_tokens:0,total_tokens:0},this.requestUpdate(),this.followScroll()}async streamMessage(e,t="comment_part"){if(this.followScroll(),this.playing=!0,t==="comment_part"){if(!this.contentParser){this.contentParser=new cr;let i=n=>{n.path==="comment"&&(this.conversation.at(-1).commentParts.push(n.value),this.requestUpdate("conversation"),this.followScroll())};this.contentParser.addEventListener("part",i)}this.contentParser.push(e)}else this.conversation.at(-1).reasoningParts.push(e),this.requestUpdate("conversation"),this.followScroll()}followScroll(){this.updateComplete.then(e=>{this.scrollElem.scrollToIndex(this.conversation.length-(this.playing?1:2),"end")})}addMessage(e){let t=this.conversation.length-1,{commentParts:i}=this.conversation[t];i.length&&i.join("")!==e&&console.warn({commentParts:i.join(""),comment:e},"are not equal"),this.conversation[t].comment=e,this.conversation[t].isLast=!1,this.conversation.push(new xt),this.requestUpdate(),this.followScroll(),this.playing=!1,this.contentParser=null}async bgImageUrl(){if(!this.provider)return"none";let e=await Ns(this.provider);return`url(${Ds(this.provider,e)})`}renderComment(e){let t=e.comment||e.commentParts.join("");return t?j`<div class="comment">${xi(js.makeHtml(t))}</div>`:L}renderReasoning(e){let t=e.reasoning||e.reasoningParts.join("");return t?j`<div class="reasoning">${xi(js.makeHtml(t))}</div>`:L}renderChatEntry(e,t){let i=this.playing&&e.isLast;return j`<div class="chatEntry ${Qt({active:i})}">
            ${e.hasReasoningContent()?this.renderReasoning(e):L}
            ${e.hasCommentContent()?this.renderComment(e):L}
            ${i&&!e.hasCommentContent()&&!e.hasReasoningContent()?j`<span style="width:100%" class="throbber"></span>`:L}
        </div>`}renderMessages(e){return j`<lit-virtualizer
            class="chats"
            .items=${e}
            .renderItem=${this.renderChatEntry.bind(this)}
        ></lit-virtualizer>`}render(){if(this.paused)return this.wait.then(i=>this.requestUpdate()),Y;let e=this.playing?this.conversation.length:this.conversation.length-1,t=this.conversation.slice(0,e);return j`<div class="scroll ${this.intro?"intro":""}">${this.renderMessages(t)}</div>
            <div class="usage">
                tokens = { in: ${Ci.format(this.usage.input_tokens)}, out:
                ${Ci.format(this.usage.output_tokens)}, total:
                ${Ci.format(this.usage.input_tokens+this.usage.output_tokens)} }
            </div>`}};customElements.define("chat-output",Ai);var Pi=oe`
    :host(notification-dialog) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
    }

    dialog[open]::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }

    dialog {
        pointer-events: auto;
        background-color: var(--bg-chat);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 20px;
        min-width: 300px;
        max-width: 500px;
        position: relative;
    }

    .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }

    .dialog-title {
        color: var(--text-main);
        font-size: 1.2em;
        font-weight: bold;
    }

    .close-button {
        background: none;
        border: none;
        color: var(--text-main);
        cursor: pointer;
        padding: 4px;
        font-size: 1.2em;
        display: inline-block;
        right: 0;
        position: relative;
    }

    .dialog-content {
        color: var(--text-main);
        margin-bottom: 20px;
        overflow: hidden auto;
    }

    .dialog-content pre {
        white-space: pre-wrap;
    }

    .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }

    dialog button {
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        background-color: var(--input-bg);
        color: var(--text-main);
        cursor: pointer;
    }

    dialog button.primary {
        background-color: var(--accent);
        color: var(--text-button);
        border: none;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--bg-chat);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 16px;
        max-width: 400px;
        z-index: 1000;
        animation: slide-in 0.3s ease-out;
    }

    .notification::before {
        content: ' ';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;var Oi=class extends ie{static styles=Pi;static properties={open:{type:Boolean},title:{type:String},content:{type:Object},actions:{type:Array}};constructor(){super(),this.open=!1,this.title="",this.dialogRef=gt()}async show({title:e,content:t,actions:i}){return this.title=e,this.content=t,this.actions=i,this.open=!0,this.requestUpdate(),this.updateComplete.then(()=>new Promise(n=>{let s=this.dialogRef.value;s.addEventListener("close",o=>n(s.returnValue),{once:!0}),s.showModal()}))}close(e){e.preventDefault(),e.stopPropagation(),this.dialogRef.value.close(e.target.value),this.open=!1}render(){return this.open?j`
            <dialog ${vt(this.dialogRef)}>
                <div class="dialog-header">
                    <span class="dialog-title">${this.title}</span>
                </div>
                <div class="dialog-content">${this.content}</div>
                <div class="dialog-actions" @click=${this.close}>${this.actions}</div>
            </dialog>
        `:null}},$i=class extends ie{static styles=Pi;static properties={_open:{type:Boolean,state:!0},title:{type:String},content:{type:Object}};constructor(){super(),this._open=!1,this.title="",this.content="",this.message="",this.dialogRef=gt()}get dialog(){return this.dialogRef.value}firstUpdated(){this.addEventListener("click",e=>{if(!this._open)return;let t=this.dialog.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.bottom&&t.left<=e.clientX&&e.clientX<=t.right||(e.stopPropagation(),e.preventDefault(),this.close())})}render(){return j`
            <dialog ${vt(this.dialogRef)} ?open="${this._open}" class="notification">
                <div class="dialog-header">
                    <span class="dialog-title">${this.title}</span>
                    <button class="close-button" @click=${this.close}>×</button>
                </div>
                <div class="dialog-content">${this.content}</div>
            </dialog>
        `}async show({title:e,content:t,autoDismiss:i=0}){return new Promise(n=>{this.title=e,this.content=t,this._open=!0,i>0&&setTimeout(s=>this.close(),i),this.addEventListener("notification-close",()=>n(),{once:!0})})}close(){this._open=!1,this.dialog.close(),this.dispatchEvent(new CustomEvent("notification-close"))}};customElements.define("modal-dialog",Oi);customElements.define("notification-dialog",$i);var Mi=[..."ABCDEFGH"],Bs=[1,2,3,4,5,6,7,8],Ls=65,Dl={r:"red",b:"black",R:"red",B:"black"},Nl={r:"pawn",b:"pawn",R:"king",B:"king"},Us=Mi.flatMap(r=>Bs.map(e=>`${r}${e}`)),jl=new Set(Us.filter((r,e)=>{let t=Math.floor(e/8),i=e%8;return(t+i)%2!==0}));["chat-settings","chat-output"].forEach(r=>{customElements.whenDefined(r).then(e=>document.querySelectorAll(r).forEach(t=>t.store=W))});var lr={type:Object,converter:r=>document.querySelector(r)},Ri=class extends Ie(W)(ie){static styles=[_s,tr];static properties={positions:{type:Object},redSettings:lr,blackSettings:lr,redThoughts:lr,blackThoughts:lr,canPlay:{type:Boolean},playing:{type:Boolean},paused:{type:Boolean},intro:{type:Boolean,reflect:!0},perspective:{type:Boolean,reflect:!0}};constructor(){super(),this.redSettings=null,this.blackSettings=null,this.redThoughts=null,this.blackThoughts=null,this.wait=Promise.resolve(),this.turn=1,this.side="black",this.playing=!1,this.intro=!0,this.perspective=!1,this.selection=Te,this.store=W}stateChanged(e){let t=Te(e);this.selectors=t,this.positions=t.pieces,this.positionPieceId=t.piece,this.positionColor=t.color,this.positionRank=t.rank,this.redCaptures=t.redCaptures,this.blackCaptures=t.blackCaptures,this.canPlay=t.canPlay,this.redSettings=t.player("red"),this.blackSettings=t.player("black"),this.apiKeyByProvider=t.apiKeyByProvider}firstUpdated(){this.notificationDialog=customElements.whenDefined("notification-dialog").then(e=>document.querySelector("notification-dialog")),setTimeout(e=>{this.intro=!1,this.perspective=!0}),document.addEventListener("ChatSettings:apiKey",e=>{this.requestUpdate()})}validateStep=(e,t,i,n={...this.positions})=>{let s=e[1],o=n[e],a=t[1],l=e.charCodeAt(0)-Ls,h=t.charCodeAt(0)-Ls;if(!o)throw new Error(`Invalid move from ${e} to ${t}: no piece at ${e}`);let p=Dl[o[0]],g=Nl[o[0]],f=h-l,_=a-s;if(g==="pawn"&&(p==="red"&&_>0||p==="black"&&_<0))throw new Error(`Invalid move from ${e} to ${t}: ${p} pawn can only move forward`);let E=i==="x"?"jump":"move";if(Math.abs(f)!==Math.abs(_)||Math.abs(f)>2||E==="move"&&Math.abs(f)!==1)throw new Error(`Invalid ${E} from ${e} to ${t}: not a diagonal move <= 2 squares`);if(n[t])throw new Error(`Invalid ${E} from ${e} to ${t}: destination occupied`);let C;if(E==="jump"){let b=`${Mi[l+f/2]}${+s+_/2}`,O=n[b],T=p==="red"?"black":"red";if(!O||O[0]===p[0])throw new Error(`Invalid jump from ${e} to ${t}: no ${T} piece to capture at ${b}`);C=b}return{from:e,to:t,dx:f,dy:_,captured:C,positions:n}};async movePiece(e,t){let[,i,n]=e.match(/^([A-H][1-8])(?:([-x])([A-H][1-8]))(?:x([A-H][1-8]))*$/),s=e.slice(3).split("x");if(!i||n==="-"&&s.length>1)throw new Error(`Invalid move syntax: ${e}`);let o,[,...a]=s.reduce(([O,...T],k)=>{let S=this.validateStep(O,k,n,o);return o=S.positions,o[k]=o[O],delete o[O],S.captured&&delete o[S.captured],[k,...T,S]},[i]),l=n==="-"?"move":"jump",h=l==="move"?.5:2,p=l==="move"?"ease":"cubic-bezier(0.5, 0.05, 1, 0.5)",g=this.positions[i],f=this.shadowRoot.getElementById(g),_=f.style;for(let O of a){let{from:T,to:k,dx:S,dy:$,captured:w}=O,P=new Promise(D=>f.addEventListener("animationend",()=>{_.gridArea=k,_.removeProperty("animation"),w&&W.dispatch.board.capture({position:w}),setTimeout(D,100)},{once:!0}));_.setProperty("--move-dx",`${S/(w?2:1)}`),_.setProperty("--move-dy",`${$/(w?2:1)}`);for(let D of t?.split(" ")??[])f.classList.add(D);_.animation=`${h}s ${p} ${l}`,await P}_.removeProperty("--move-dx"),_.removeProperty("--move-dy");for(let O of t?.split(" ")??[])f.classList.remove(O);let E=s.at(-1),C=this.positionColor(i),b=this.positionRank(i);W.dispatch.board.move({from:i,to:E}),b==="pawn"&&(E[1]==="1"&&C==="red"||E[1]==="8"&&C==="black")&&W.dispatch.board.promote({position:E})}async play(){W.dispatch.board.reset(),this.blackThoughts.reset(),this.redThoughts.reset(),this.playing=!0;let e=["black","red"],[t,i]=[this.blackSettings,this.redSettings].map((h,p)=>{let{provider:g,model:f,baseUrl:_,stream:E,temperature:C}=h;return new Xt(e[p],{apiKey:this.apiKeyByProvider(g),providerId:g,model:f,baseUrl:_,stream:E,temperature:C,dispatch:W.dispatch,role:e[p]})});this.players={black:t,red:i},this.dispatchEvent(new CustomEvent("play",{detail:{players:ti(this.players)}})),W.dispatch.currentMatch.start({red:this.redSettings,black:this.blackSettings});let n=await ys(this,ti(this.players));this.playing=!1,W.dispatch.currentMatch.end({result:{winner:n.winner,error:n.error}});let s=n.error?"Error!":"Game Over!",o=n.winner.replace(/^./,h=>h.toUpperCase()),a=n.error?j`<pre>Error: ${n.error}</pre>`:`${o} wins the match!`;return(await this.notificationDialog).show({title:s,content:a})}pause(){this.paused=this.blackThoughts.paused=this.redThoughts.paused=!0,this.wait=this.blackThoughts.wait=this.redThoughts.wait=new Promise(e=>{this.addEventListener("resume",t=>{this.paused=this.blackThoughts.paused=this.redThoughts.paused=!1,e()},{once:!0})})}resume(){this.dispatchEvent(new Event("resume"))}playDisabled(){}async streamThoughts(e,t,i){let n=e===0?this.blackThoughts:this.redThoughts;await this.wait,await n.streamMessage(t,i)}showThoughts(e,t,i){(e===0?this.blackThoughts:this.redThoughts).addMessage(t,i)}renderColLabels(){return Mi.map(e=>j`<div>${e}</div>`)}renderRowLabels(){return Bs.map(e=>j`<div>${9-e}</div>`)}renderSquares(){let e=t=>jl.has(t)?"black":"white";return Us.map(t=>j`<div class="square ${e(t)}" style="grid-area: ${t}"></div>`)}renderPieces(){let e=Object.entries(this.positions);return j`${pt(e,([t,i])=>i,([t,i])=>j`<div
                    id="${i}"
                    class="piece ${this.positionColor(t)} ${this.positionRank(t)}"
                    style="grid-area: ${t}"
                ></div>`)}`}renderCaptures(e){return pt(e,({piece:t})=>t,({piece:t,color:i,rank:n})=>j`<div id="${t}" class="piece ${i} ${n}"></div>`)}renderControls(){let e=this.playing?this.paused?"resume":"pause":this.canPlay?"play":"playDisabled",t=this.playing?this.paused?"resume":"pause":this.canPlay?"play":"enter API keys to play";return j`
            <div class="controls">
                <button ?disabled=${!this.canPlay} @click=${i=>this[e]()}>
                    ${bs(e,"var(--icon-size)")}
                    <div class="hint">${t}</div>
                </button>
            </div>
        `}renderBoard(){return this.paused?(this.wait.then(e=>this.requestUpdate()),Y):j`<div class="board">
            <div class="col-labels top">${this.renderColLabels()}</div>
            <div class="row-labels left">${this.renderRowLabels()}</div>
            <div class="col-labels bottom">${this.renderColLabels()}</div>
            <div class="row-labels right">${this.renderRowLabels()}</div>
            ${this.renderSquares()}${this.renderPieces()}
            <div class="captures red">${this.renderCaptures(this.redCaptures)}</div>
            <div class="captures black">${this.renderCaptures(this.blackCaptures)}</div>
        </div>`}render(){return[this.renderBoard(),this.renderControls()]}};customElements.define("checker-board",Ri);
/*! Bundled license information:

localforage/dist/localforage.js:
  (*!
      localForage -- Offline Storage, Improved
      Version 1.10.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  *)

@lit-labs/virtualizer/layouts/shared/SizeCache.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/layouts/shared/BaseLayout.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/layouts/flow.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

pwa-helpers/connect-mixin.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

pwa-helpers/lazy-reducer-enhancer.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

pwa-helpers/media-query.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

pwa-helpers/metadata.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

pwa-helpers/network.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

pwa-helpers/router.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

pwa-helpers/pwa-helpers.js:
  (**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/events.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/ScrollerController.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/Virtualizer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/virtualize.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/LitVirtualizer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/virtualizer/lit-virtualizer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=checkerboard.js.map
