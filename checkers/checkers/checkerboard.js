var Qo=Object.create;var br=Object.defineProperty;var ea=Object.getOwnPropertyDescriptor;var ta=Object.getOwnPropertyNames;var ra=Object.getPrototypeOf,ia=Object.prototype.hasOwnProperty;var tt=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')});var wr=(i,e)=>()=>(i&&(e=i(i=0)),e);var J=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),nn=(i,e)=>{for(var t in e)br(i,t,{get:e[t],enumerable:!0})},na=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ta(e))!ia.call(i,n)&&n!==t&&br(i,n,{get:()=>e[n],enumerable:!(r=ea(e,n))||r.enumerable});return i};var xr=(i,e,t)=>(t=i!=null?Qo(ra(i)):{},na(e||!i||!i.__esModule?br(t,"default",{value:i,enumerable:!0}):t,i));var Ae=J(Q=>{"use strict";Q.__esModule=!0;Q.DEFAULT_VERSION=Q.REGISTER=Q.PURGE=Q.PERSIST=Q.PAUSE=Q.REHYDRATE=Q.FLUSH=Q.KEY_PREFIX=void 0;var Ja="persist:";Q.KEY_PREFIX=Ja;var Xa="persist/FLUSH";Q.FLUSH=Xa;var Qa="persist/REHYDRATE";Q.REHYDRATE=Qa;var ec="persist/PAUSE";Q.PAUSE=ec;var tc="persist/PERSIST";Q.PERSIST=tc;var rc="persist/PURGE";Q.PURGE=rc;var ic="persist/REGISTER";Q.REGISTER=ic;var nc=-1;Q.DEFAULT_VERSION=nc});var Bn=J(Nr=>{"use strict";Nr.__esModule=!0;Nr.default=ac;function Ft(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ft=function(t){return typeof t}:Ft=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ft(i)}function Ln(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),t.push.apply(t,r)}return t}function sc(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ln(t,!0).forEach(function(r){oc(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Ln(t).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function oc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function ac(i,e,t,r){var n=r.debug,s=sc({},t);return i&&Ft(i)==="object"&&Object.keys(i).forEach(function(o){o!=="_persist"&&e[o]===t[o]&&(s[o]=i[o])}),s}});var Lr=J(jr=>{"use strict";jr.__esModule=!0;jr.default=lc;var cc=Ae();function lc(i){var e=i.blacklist||null,t=i.whitelist||null,r=i.transforms||[],n=i.throttle||0,s="".concat(i.keyPrefix!==void 0?i.keyPrefix:cc.KEY_PREFIX).concat(i.key),o=i.storage,a;i.serialize===!1?a=function($){return $}:typeof i.serialize=="function"?a=i.serialize:a=uc;var c=i.writeFailHandler||null,u={},f={},v=[],d=null,_=null,w=function($){Object.keys($).forEach(function(x){A(x)&&u[x]!==$[x]&&v.indexOf(x)===-1&&v.push(x)}),Object.keys(u).forEach(function(x){$[x]===void 0&&A(x)&&v.indexOf(x)===-1&&u[x]!==void 0&&v.push(x)}),d===null&&(d=setInterval(C,n)),u=$};function C(){if(v.length===0){d&&clearInterval(d),d=null;return}var E=v.shift(),$=r.reduce(function(x,k){return k.in(x,E,u)},u[E]);if($!==void 0)try{f[E]=a($)}catch(x){console.error("redux-persist/createPersistoid: error serializing state",x)}else delete f[E];v.length===0&&b()}function b(){Object.keys(f).forEach(function(E){u[E]===void 0&&delete f[E]}),_=o.setItem(s,a(f)).catch(O)}function A(E){return!(t&&t.indexOf(E)===-1&&E!=="_persist"||e&&e.indexOf(E)!==-1)}function O(E){c&&c(E)}var I=function(){for(;v.length!==0;)C();return _||Promise.resolve()};return{update:w,flush:I}}function uc(i){return JSON.stringify(i)}});var Ur=J(Br=>{"use strict";Br.__esModule=!0;Br.default=dc;var hc=Ae();function dc(i){var e=i.transforms||[],t="".concat(i.keyPrefix!==void 0?i.keyPrefix:hc.KEY_PREFIX).concat(i.key),r=i.storage,n=i.debug,s;return i.deserialize===!1?s=function(a){return a}:typeof i.deserialize=="function"?s=i.deserialize:s=pc,r.getItem(t).then(function(o){if(o)try{var a={},c=s(o);return Object.keys(c).forEach(function(u){a[u]=e.reduceRight(function(f,v){return v.out(f,u,c)},s(c[u]))}),a}catch(u){throw u}else return})}function pc(i){return JSON.parse(i)}});var Vr=J(Kr=>{"use strict";Kr.__esModule=!0;Kr.default=mc;var fc=Ae();function mc(i){var e=i.storage,t="".concat(i.keyPrefix!==void 0?i.keyPrefix:fc.KEY_PREFIX).concat(i.key);return e.removeItem(t,gc)}function gc(i){}});var Fr=J(Hr=>{"use strict";Hr.__esModule=!0;Hr.default=Cc;var qe=Ae(),vc=qt(Bn()),yc=qt(Lr()),_c=qt(Ur()),bc=qt(Vr());function qt(i){return i&&i.__esModule?i:{default:i}}function Un(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),t.push.apply(t,r)}return t}function be(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Un(t,!0).forEach(function(r){wc(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Un(t).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function wc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function xc(i,e){if(i==null)return{};var t=Sc(i,e),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(n=0;n<s.length;n++)r=s[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function Sc(i,e){if(i==null)return{};var t={},r=Object.keys(i),n,s;for(s=0;s<r.length;s++)n=r[s],!(e.indexOf(n)>=0)&&(t[n]=i[n]);return t}var Ec=5e3;function Cc(i,e){var t=i.version!==void 0?i.version:qe.DEFAULT_VERSION,r=i.debug||!1,n=i.stateReconciler===void 0?vc.default:i.stateReconciler,s=i.getStoredState||_c.default,o=i.timeout!==void 0?i.timeout:Ec,a=null,c=!1,u=!0,f=function(d){return d._persist.rehydrated&&a&&!u&&a.update(d),d};return function(v,d){var _=v||{},w=_._persist,C=xc(_,["_persist"]),b=C;if(d.type===qe.PERSIST){var A=!1,O=function(K,q){A||(d.rehydrate(i.key,K,q),A=!0)};if(o&&setTimeout(function(){!A&&O(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(i.key,'"')))},o),u=!1,a||(a=(0,yc.default)(i)),w)return be({},e(b,d),{_persist:w});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(i.key),s(i).then(function(D){var K=i.migrate||function(q,ne){return Promise.resolve(q)};K(D,t).then(function(q){O(q)},function(q){O(void 0,q)})},function(D){O(void 0,D)}),be({},e(b,d),{_persist:{version:t,rehydrated:!1}})}else{if(d.type===qe.PURGE)return c=!0,d.result((0,bc.default)(i)),be({},e(b,d),{_persist:w});if(d.type===qe.FLUSH)return d.result(a&&a.flush()),be({},e(b,d),{_persist:w});if(d.type===qe.PAUSE)u=!0;else if(d.type===qe.REHYDRATE){if(c)return be({},b,{_persist:be({},w,{rehydrated:!0})});if(d.key===i.key){var I=e(b,d),E=d.payload,$=n!==!1&&E!==void 0?n(E,v,I,i):I,x=be({},$,{_persist:be({},w,{rehydrated:!0})});return f(x)}}}if(!w)return e(v,d);var k=e(b,d);return k===b?v:f(be({},k,{_persist:w}))}}});var Zr=J((Zu,qn)=>{"use strict";var Wr=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,Pc=Object.getOwnPropertyNames,$c=Object.prototype.hasOwnProperty,Oc=(i,e)=>{for(var t in e)Wr(i,t,{get:e[t],enumerable:!0})},Mc=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Pc(e))!$c.call(i,n)&&n!==t&&Wr(i,n,{get:()=>e[n],enumerable:!(r=Ac(e,n))||r.enumerable});return i},Rc=i=>Mc(Wr({},"__esModule",{value:!0}),i),Hn={};Oc(Hn,{__DO_NOT_USE__ActionTypes:()=>pt,applyMiddleware:()=>jc,bindActionCreators:()=>Nc,combineReducers:()=>Dc,compose:()=>Fn,createStore:()=>Gr,isAction:()=>Lc,isPlainObject:()=>Yr,legacy_createStore:()=>Ic});qn.exports=Rc(Hn);function ee(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var kc=typeof Symbol=="function"&&Symbol.observable||"@@observable",Kn=kc,qr=()=>Math.random().toString(36).substring(7).split("").join("."),Tc={INIT:`@@redux/INIT${qr()}`,REPLACE:`@@redux/REPLACE${qr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${qr()}`},pt=Tc;function Yr(i){if(typeof i!="object"||i===null)return!1;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e||Object.getPrototypeOf(i)===null}function Gr(i,e,t){if(typeof i!="function")throw new Error(ee(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ee(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ee(1));return t(Gr)(i,e)}let r=i,n=e,s=new Map,o=s,a=0,c=!1;function u(){o===s&&(o=new Map,s.forEach((b,A)=>{o.set(A,b)}))}function f(){if(c)throw new Error(ee(3));return n}function v(b){if(typeof b!="function")throw new Error(ee(4));if(c)throw new Error(ee(5));let A=!0;u();let O=a++;return o.set(O,b),function(){if(A){if(c)throw new Error(ee(6));A=!1,u(),o.delete(O),s=null}}}function d(b){if(!Yr(b))throw new Error(ee(7));if(typeof b.type>"u")throw new Error(ee(8));if(typeof b.type!="string")throw new Error(ee(17));if(c)throw new Error(ee(9));try{c=!0,n=r(n,b)}finally{c=!1}return(s=o).forEach(O=>{O()}),b}function _(b){if(typeof b!="function")throw new Error(ee(10));r=b,d({type:pt.REPLACE})}function w(){let b=v;return{subscribe(A){if(typeof A!="object"||A===null)throw new Error(ee(11));function O(){let E=A;E.next&&E.next(f())}return O(),{unsubscribe:b(O)}},[Kn](){return this}}}return d({type:pt.INIT}),{dispatch:d,subscribe:v,getState:f,replaceReducer:_,[Kn]:w}}function Ic(i,e,t){return Gr(i,e,t)}function zc(i){Object.keys(i).forEach(e=>{let t=i[e];if(typeof t(void 0,{type:pt.INIT})>"u")throw new Error(ee(12));if(typeof t(void 0,{type:pt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ee(13))})}function Dc(i){let e=Object.keys(i),t={};for(let o=0;o<e.length;o++){let a=e[o];typeof i[a]=="function"&&(t[a]=i[a])}let r=Object.keys(t),n,s;try{zc(t)}catch(o){s=o}return function(a={},c){if(s)throw s;let u=!1,f={};for(let v=0;v<r.length;v++){let d=r[v],_=t[d],w=a[d],C=_(w,c);if(typeof C>"u"){let b=c&&c.type;throw new Error(ee(14))}f[d]=C,u=u||C!==w}return u=u||r.length!==Object.keys(a).length,u?f:a}}function Vn(i,e){return function(...t){return e(i.apply(this,t))}}function Nc(i,e){if(typeof i=="function")return Vn(i,e);if(typeof i!="object"||i===null)throw new Error(ee(16));let t={};for(let r in i){let n=i[r];typeof n=="function"&&(t[r]=Vn(n,e))}return t}function Fn(...i){return i.length===0?e=>e:i.length===1?i[0]:i.reduce((e,t)=>(...r)=>e(t(...r)))}function jc(...i){return e=>(t,r)=>{let n=e(t,r),s=()=>{throw new Error(ee(15))},o={getState:n.getState,dispatch:(c,...u)=>s(c,...u)},a=i.map(c=>c(o));return s=Fn(...a)(n.dispatch),{...n,dispatch:s}}}function Lc(i){return Yr(i)&&"type"in i&&typeof i.type=="string"}});var Gn=J(Jr=>{"use strict";Jr.__esModule=!0;Jr.default=Uc;function ft(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ft=function(t){return typeof t}:ft=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(i)}function Wn(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),t.push.apply(t,r)}return t}function Yn(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wn(t,!0).forEach(function(r){Bc(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Wn(t).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Bc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Uc(i,e,t,r){var n=r.debug,s=Yn({},t);return i&&ft(i)==="object"&&Object.keys(i).forEach(function(o){if(o!=="_persist"&&e[o]===t[o]){if(Kc(t[o])){s[o]=Yn({},s[o],{},i[o]);return}s[o]=i[o]}}),s}function Kc(i){return i!==null&&!Array.isArray(i)&&ft(i)==="object"}});var Jn=J(Xr=>{"use strict";Xr.__esModule=!0;Xr.default=qc;var Vc=Zr(),Hc=Zn(Fr()),Fc=Zn(Gn());function Zn(i){return i&&i.__esModule?i:{default:i}}function qc(i,e){return i.stateReconciler=i.stateReconciler===void 0?Fc.default:i.stateReconciler,(0,Hc.default)(i,(0,Vc.combineReducers)(e))}});var ts=J(ei=>{"use strict";ei.__esModule=!0;ei.default=Qc;var Wc=Zr(),Pe=Ae();function Xn(i){return Zc(i)||Gc(i)||Yc()}function Yc(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Gc(i){if(Symbol.iterator in Object(i)||Object.prototype.toString.call(i)==="[object Arguments]")return Array.from(i)}function Zc(i){if(Array.isArray(i)){for(var e=0,t=new Array(i.length);e<i.length;e++)t[e]=i[e];return t}}function Qn(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),t.push.apply(t,r)}return t}function Qr(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qn(t,!0).forEach(function(r){Jc(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Qn(t).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Jc(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var es={registry:[],bootstrapped:!1},Xc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:es,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe.REGISTER:return Qr({},e,{registry:[].concat(Xn(e.registry),[t.key])});case Pe.REHYDRATE:var r=e.registry.indexOf(t.key),n=Xn(e.registry);return n.splice(r,1),Qr({},e,{registry:n,bootstrapped:n.length===0});default:return e}};function Qc(i,e,t){if(0)var r,n;var s=t||!1,o=(0,Wc.createStore)(Xc,es,e&&e.enhancer?e.enhancer:void 0),a=function(v){o.dispatch({type:Pe.REGISTER,key:v})},c=function(v,d,_){var w={type:Pe.REHYDRATE,payload:d,err:_,key:v};i.dispatch(w),o.dispatch(w),s&&u.getState().bootstrapped&&(s(),s=!1)},u=Qr({},o,{purge:function(){var v=[];return i.dispatch({type:Pe.PURGE,result:function(_){v.push(_)}}),Promise.all(v)},flush:function(){var v=[];return i.dispatch({type:Pe.FLUSH,result:function(_){v.push(_)}}),Promise.all(v)},pause:function(){i.dispatch({type:Pe.PAUSE})},persist:function(){i.dispatch({type:Pe.PERSIST,register:a,rehydrate:c})}});return e&&e.manualPersist||u.persist(),u}});var rs=J(ti=>{"use strict";ti.__esModule=!0;ti.default=tl;var el=Ae();function tl(i,e){var t=e||{},r=t.debug;return function(n,s){if(!n)return Promise.resolve(void 0);var o=n._persist&&n._persist.version!==void 0?n._persist.version:el.DEFAULT_VERSION;if(o===s||o>s)return Promise.resolve(n);var a=Object.keys(i).map(function(u){return parseInt(u)}).filter(function(u){return s>=u&&u>o}).sort(function(u,f){return u-f});try{var c=a.reduce(function(u,f){return i[f](u)},n);return Promise.resolve(c)}catch(u){return Promise.reject(u)}}}});var is=J(ri=>{"use strict";ri.__esModule=!0;ri.default=rl;function rl(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.whitelist||null,n=t.blacklist||null;function s(o){return!!(r&&r.indexOf(o)===-1||n&&n.indexOf(o)!==-1)}return{in:function(a,c,u){return!s(c)&&i?i(a,c,u):a},out:function(a,c,u){return!s(c)&&e?e(a,c,u):a}}}});var ii=J(Z=>{"use strict";Z.__esModule=!0;var il={persistReducer:!0,persistCombineReducers:!0,persistStore:!0,createMigrate:!0,createTransform:!0,getStoredState:!0,createPersistoid:!0,purgeStoredState:!0};Z.purgeStoredState=Z.createPersistoid=Z.getStoredState=Z.createTransform=Z.createMigrate=Z.persistStore=Z.persistCombineReducers=Z.persistReducer=void 0;var nl=$e(Fr());Z.persistReducer=nl.default;var sl=$e(Jn());Z.persistCombineReducers=sl.default;var ol=$e(ts());Z.persistStore=ol.default;var al=$e(rs());Z.createMigrate=al.default;var cl=$e(is());Z.createTransform=cl.default;var ll=$e(Ur());Z.getStoredState=ll.default;var ul=$e(Lr());Z.createPersistoid=ul.default;var hl=$e(Vr());Z.purgeStoredState=hl.default;var ns=Ae();Object.keys(ns).forEach(function(i){i==="default"||i==="__esModule"||Object.prototype.hasOwnProperty.call(il,i)||(Z[i]=ns[i])});function $e(i){return i&&i.__esModule?i:{default:i}}});var as=J((os,ni)=>{(function(i){if(typeof os=="object"&&typeof ni<"u")ni.exports=i();else if(typeof define=="function"&&define.amd)define([],i);else{var e;typeof window<"u"?e=window:typeof global<"u"?e=global:typeof self<"u"?e=self:e=this,e.localforage=i()}})(function(){var i,e,t;return function r(n,s,o){function a(f,v){if(!s[f]){if(!n[f]){var d=typeof tt=="function"&&tt;if(!v&&d)return d(f,!0);if(c)return c(f,!0);var _=new Error("Cannot find module '"+f+"'");throw _.code="MODULE_NOT_FOUND",_}var w=s[f]={exports:{}};n[f][0].call(w.exports,function(C){var b=n[f][1][C];return a(b||C)},w,w.exports,r,n,s,o)}return s[f].exports}for(var c=typeof tt=="function"&&tt,u=0;u<o.length;u++)a(o[u]);return a}({1:[function(r,n,s){(function(o){"use strict";var a=o.MutationObserver||o.WebKitMutationObserver,c;if(a){var u=0,f=new a(C),v=o.document.createTextNode("");f.observe(v,{characterData:!0}),c=function(){v.data=u=++u%2}}else if(!o.setImmediate&&typeof o.MessageChannel<"u"){var d=new o.MessageChannel;d.port1.onmessage=C,c=function(){d.port2.postMessage(0)}}else"document"in o&&"onreadystatechange"in o.document.createElement("script")?c=function(){var A=o.document.createElement("script");A.onreadystatechange=function(){C(),A.onreadystatechange=null,A.parentNode.removeChild(A),A=null},o.document.documentElement.appendChild(A)}:c=function(){setTimeout(C,0)};var _,w=[];function C(){_=!0;for(var A,O,I=w.length;I;){for(O=w,w=[],A=-1;++A<I;)O[A]();I=w.length}_=!1}n.exports=b;function b(A){w.push(A)===1&&!_&&c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(r,n,s){"use strict";var o=r(1);function a(){}var c={},u=["REJECTED"],f=["FULFILLED"],v=["PENDING"];n.exports=d;function d(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=v,this.queue=[],this.outcome=void 0,x!==a&&b(this,x)}d.prototype.catch=function(x){return this.then(null,x)},d.prototype.then=function(x,k){if(typeof x!="function"&&this.state===f||typeof k!="function"&&this.state===u)return this;var D=new this.constructor(a);if(this.state!==v){var K=this.state===f?x:k;w(D,K,this.outcome)}else this.queue.push(new _(D,x,k));return D};function _(x,k,D){this.promise=x,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(x){c.resolve(this.promise,x)},_.prototype.otherCallFulfilled=function(x){w(this.promise,this.onFulfilled,x)},_.prototype.callRejected=function(x){c.reject(this.promise,x)},_.prototype.otherCallRejected=function(x){w(this.promise,this.onRejected,x)};function w(x,k,D){o(function(){var K;try{K=k(D)}catch(q){return c.reject(x,q)}K===x?c.reject(x,new TypeError("Cannot resolve promise with itself")):c.resolve(x,K)})}c.resolve=function(x,k){var D=A(C,k);if(D.status==="error")return c.reject(x,D.value);var K=D.value;if(K)b(x,K);else{x.state=f,x.outcome=k;for(var q=-1,ne=x.queue.length;++q<ne;)x.queue[q].callFulfilled(k)}return x},c.reject=function(x,k){x.state=u,x.outcome=k;for(var D=-1,K=x.queue.length;++D<K;)x.queue[D].callRejected(k);return x};function C(x){var k=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof k=="function")return function(){k.apply(x,arguments)}}function b(x,k){var D=!1;function K(ae){D||(D=!0,c.reject(x,ae))}function q(ae){D||(D=!0,c.resolve(x,ae))}function ne(){k(q,K)}var oe=A(ne);oe.status==="error"&&K(oe.value)}function A(x,k){var D={};try{D.value=x(k),D.status="success"}catch(K){D.status="error",D.value=K}return D}d.resolve=O;function O(x){return x instanceof this?x:c.resolve(new this(a),x)}d.reject=I;function I(x){var k=new this(a);return c.reject(k,x)}d.all=E;function E(x){var k=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=x.length,K=!1;if(!D)return this.resolve([]);for(var q=new Array(D),ne=0,oe=-1,ae=new this(a);++oe<D;)ge(x[oe],oe);return ae;function ge(Xe,St){k.resolve(Xe).then(ur,function(Ue){K||(K=!0,c.reject(ae,Ue))});function ur(Ue){q[St]=Ue,++ne===D&&!K&&(K=!0,c.resolve(ae,q))}}}d.race=$;function $(x){var k=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=x.length,K=!1;if(!D)return this.resolve([]);for(var q=-1,ne=new this(a);++q<D;)oe(x[q]);return ne;function oe(ae){k.resolve(ae).then(function(ge){K||(K=!0,c.resolve(ne,ge))},function(ge){K||(K=!0,c.reject(ne,ge))})}}},{1:1}],3:[function(r,n,s){(function(o){"use strict";typeof o.Promise!="function"&&(o.Promise=r(2))}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(r,n,s){"use strict";var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};function a(l,p){if(!(l instanceof p))throw new TypeError("Cannot call a class as a function")}function c(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var u=c();function f(){try{if(!u||!u.open)return!1;var l=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),p=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!l||p)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function v(l,p){l=l||[],p=p||{};try{return new Blob(l,p)}catch(m){if(m.name!=="TypeError")throw m;for(var h=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,g=new h,y=0;y<l.length;y+=1)g.append(l[y]);return g.getBlob(p.type)}}typeof Promise>"u"&&r(3);var d=Promise;function _(l,p){p&&l.then(function(h){p(null,h)},function(h){p(h)})}function w(l,p,h){typeof p=="function"&&l.then(p),typeof h=="function"&&l.catch(h)}function C(l){return typeof l!="string"&&(console.warn(l+" used as a key, but it is not a string."),l=String(l)),l}function b(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var A="local-forage-detect-blob-support",O=void 0,I={},E=Object.prototype.toString,$="readonly",x="readwrite";function k(l){for(var p=l.length,h=new ArrayBuffer(p),g=new Uint8Array(h),y=0;y<p;y++)g[y]=l.charCodeAt(y);return h}function D(l){return new d(function(p){var h=l.transaction(A,x),g=v([""]);h.objectStore(A).put(g,"key"),h.onabort=function(y){y.preventDefault(),y.stopPropagation(),p(!1)},h.oncomplete=function(){var y=navigator.userAgent.match(/Chrome\/(\d+)/),m=navigator.userAgent.match(/Edge\//);p(m||!y||parseInt(y[1],10)>=43)}}).catch(function(){return!1})}function K(l){return typeof O=="boolean"?d.resolve(O):D(l).then(function(p){return O=p,O})}function q(l){var p=I[l.name],h={};h.promise=new d(function(g,y){h.resolve=g,h.reject=y}),p.deferredOperations.push(h),p.dbReady?p.dbReady=p.dbReady.then(function(){return h.promise}):p.dbReady=h.promise}function ne(l){var p=I[l.name],h=p.deferredOperations.pop();if(h)return h.resolve(),h.promise}function oe(l,p){var h=I[l.name],g=h.deferredOperations.pop();if(g)return g.reject(p),g.promise}function ae(l,p){return new d(function(h,g){if(I[l.name]=I[l.name]||Ni(),l.db)if(p)q(l),l.db.close();else return h(l.db);var y=[l.name];p&&y.push(l.version);var m=u.open.apply(u,y);p&&(m.onupgradeneeded=function(S){var P=m.result;try{P.createObjectStore(l.storeName),S.oldVersion<=1&&P.createObjectStore(A)}catch(M){if(M.name==="ConstraintError")console.warn('The database "'+l.name+'" has been upgraded from version '+S.oldVersion+" to version "+S.newVersion+', but the storage "'+l.storeName+'" already exists.');else throw M}}),m.onerror=function(S){S.preventDefault(),g(m.error)},m.onsuccess=function(){var S=m.result;S.onversionchange=function(P){P.target.close()},h(S),ne(l)}})}function ge(l){return ae(l,!1)}function Xe(l){return ae(l,!0)}function St(l,p){if(!l.db)return!0;var h=!l.db.objectStoreNames.contains(l.storeName),g=l.version<l.db.version,y=l.version>l.db.version;if(g&&(l.version!==p&&console.warn('The database "'+l.name+`" can't be downgraded from version `+l.db.version+" to version "+l.version+"."),l.version=l.db.version),y||h){if(h){var m=l.db.version+1;m>l.version&&(l.version=m)}return!0}return!1}function ur(l){return new d(function(p,h){var g=new FileReader;g.onerror=h,g.onloadend=function(y){var m=btoa(y.target.result||"");p({__local_forage_encoded_blob:!0,data:m,type:l.type})},g.readAsBinaryString(l)})}function Ue(l){var p=k(atob(l.data));return v([p],{type:l.type})}function Di(l){return l&&l.__local_forage_encoded_blob}function Qs(l){var p=this,h=p._initReady().then(function(){var g=I[p._dbInfo.name];if(g&&g.dbReady)return g.dbReady});return w(h,l,l),h}function eo(l){q(l);for(var p=I[l.name],h=p.forages,g=0;g<h.length;g++){var y=h[g];y._dbInfo.db&&(y._dbInfo.db.close(),y._dbInfo.db=null)}return l.db=null,ge(l).then(function(m){return l.db=m,St(l)?Xe(l):m}).then(function(m){l.db=p.db=m;for(var S=0;S<h.length;S++)h[S]._dbInfo.db=m}).catch(function(m){throw oe(l,m),m})}function ve(l,p,h,g){g===void 0&&(g=1);try{var y=l.db.transaction(l.storeName,p);h(null,y)}catch(m){if(g>0&&(!l.db||m.name==="InvalidStateError"||m.name==="NotFoundError"))return d.resolve().then(function(){if(!l.db||m.name==="NotFoundError"&&!l.db.objectStoreNames.contains(l.storeName)&&l.version<=l.db.version)return l.db&&(l.version=l.db.version+1),Xe(l)}).then(function(){return eo(l).then(function(){ve(l,p,h,g-1)})}).catch(h);h(m)}}function Ni(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function to(l){var p=this,h={db:null};if(l)for(var g in l)h[g]=l[g];var y=I[h.name];y||(y=Ni(),I[h.name]=y),y.forages.push(p),p._initReady||(p._initReady=p.ready,p.ready=Qs);var m=[];function S(){return d.resolve()}for(var P=0;P<y.forages.length;P++){var M=y.forages[P];M!==p&&m.push(M._initReady().catch(S))}var R=y.forages.slice(0);return d.all(m).then(function(){return h.db=y.db,ge(h)}).then(function(T){return h.db=T,St(h,p._defaultConfig.version)?Xe(h):T}).then(function(T){h.db=y.db=T,p._dbInfo=h;for(var z=0;z<R.length;z++){var L=R[z];L!==p&&(L._dbInfo.db=h.db,L._dbInfo.version=h.version)}})}function ro(l,p){var h=this;l=C(l);var g=new d(function(y,m){h.ready().then(function(){ve(h._dbInfo,$,function(S,P){if(S)return m(S);try{var M=P.objectStore(h._dbInfo.storeName),R=M.get(l);R.onsuccess=function(){var T=R.result;T===void 0&&(T=null),Di(T)&&(T=Ue(T)),y(T)},R.onerror=function(){m(R.error)}}catch(T){m(T)}})}).catch(m)});return _(g,p),g}function io(l,p){var h=this,g=new d(function(y,m){h.ready().then(function(){ve(h._dbInfo,$,function(S,P){if(S)return m(S);try{var M=P.objectStore(h._dbInfo.storeName),R=M.openCursor(),T=1;R.onsuccess=function(){var z=R.result;if(z){var L=z.value;Di(L)&&(L=Ue(L));var H=l(L,z.key,T++);H!==void 0?y(H):z.continue()}else y()},R.onerror=function(){m(R.error)}}catch(z){m(z)}})}).catch(m)});return _(g,p),g}function no(l,p,h){var g=this;l=C(l);var y=new d(function(m,S){var P;g.ready().then(function(){return P=g._dbInfo,E.call(p)==="[object Blob]"?K(P.db).then(function(M){return M?p:ur(p)}):p}).then(function(M){ve(g._dbInfo,x,function(R,T){if(R)return S(R);try{var z=T.objectStore(g._dbInfo.storeName);M===null&&(M=void 0);var L=z.put(M,l);T.oncomplete=function(){M===void 0&&(M=null),m(M)},T.onabort=T.onerror=function(){var H=L.error?L.error:L.transaction.error;S(H)}}catch(H){S(H)}})}).catch(S)});return _(y,h),y}function so(l,p){var h=this;l=C(l);var g=new d(function(y,m){h.ready().then(function(){ve(h._dbInfo,x,function(S,P){if(S)return m(S);try{var M=P.objectStore(h._dbInfo.storeName),R=M.delete(l);P.oncomplete=function(){y()},P.onerror=function(){m(R.error)},P.onabort=function(){var T=R.error?R.error:R.transaction.error;m(T)}}catch(T){m(T)}})}).catch(m)});return _(g,p),g}function oo(l){var p=this,h=new d(function(g,y){p.ready().then(function(){ve(p._dbInfo,x,function(m,S){if(m)return y(m);try{var P=S.objectStore(p._dbInfo.storeName),M=P.clear();S.oncomplete=function(){g()},S.onabort=S.onerror=function(){var R=M.error?M.error:M.transaction.error;y(R)}}catch(R){y(R)}})}).catch(y)});return _(h,l),h}function ao(l){var p=this,h=new d(function(g,y){p.ready().then(function(){ve(p._dbInfo,$,function(m,S){if(m)return y(m);try{var P=S.objectStore(p._dbInfo.storeName),M=P.count();M.onsuccess=function(){g(M.result)},M.onerror=function(){y(M.error)}}catch(R){y(R)}})}).catch(y)});return _(h,l),h}function co(l,p){var h=this,g=new d(function(y,m){if(l<0){y(null);return}h.ready().then(function(){ve(h._dbInfo,$,function(S,P){if(S)return m(S);try{var M=P.objectStore(h._dbInfo.storeName),R=!1,T=M.openKeyCursor();T.onsuccess=function(){var z=T.result;if(!z){y(null);return}l===0||R?y(z.key):(R=!0,z.advance(l))},T.onerror=function(){m(T.error)}}catch(z){m(z)}})}).catch(m)});return _(g,p),g}function lo(l){var p=this,h=new d(function(g,y){p.ready().then(function(){ve(p._dbInfo,$,function(m,S){if(m)return y(m);try{var P=S.objectStore(p._dbInfo.storeName),M=P.openKeyCursor(),R=[];M.onsuccess=function(){var T=M.result;if(!T){g(R);return}R.push(T.key),T.continue()},M.onerror=function(){y(M.error)}}catch(T){y(T)}})}).catch(y)});return _(h,l),h}function uo(l,p){p=b.apply(this,arguments);var h=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||h.name,l.storeName=l.storeName||h.storeName);var g=this,y;if(!l.name)y=d.reject("Invalid arguments");else{var m=l.name===h.name&&g._dbInfo.db,S=m?d.resolve(g._dbInfo.db):ge(l).then(function(P){var M=I[l.name],R=M.forages;M.db=P;for(var T=0;T<R.length;T++)R[T]._dbInfo.db=P;return P});l.storeName?y=S.then(function(P){if(P.objectStoreNames.contains(l.storeName)){var M=P.version+1;q(l);var R=I[l.name],T=R.forages;P.close();for(var z=0;z<T.length;z++){var L=T[z];L._dbInfo.db=null,L._dbInfo.version=M}var H=new d(function(F,G){var Y=u.open(l.name,M);Y.onerror=function(ce){var et=Y.result;et.close(),G(ce)},Y.onupgradeneeded=function(){var ce=Y.result;ce.deleteObjectStore(l.storeName)},Y.onsuccess=function(){var ce=Y.result;ce.close(),F(ce)}});return H.then(function(F){R.db=F;for(var G=0;G<T.length;G++){var Y=T[G];Y._dbInfo.db=F,ne(Y._dbInfo)}}).catch(function(F){throw(oe(l,F)||d.resolve()).catch(function(){}),F})}}):y=S.then(function(P){q(l);var M=I[l.name],R=M.forages;P.close();for(var T=0;T<R.length;T++){var z=R[T];z._dbInfo.db=null}var L=new d(function(H,F){var G=u.deleteDatabase(l.name);G.onerror=function(){var Y=G.result;Y&&Y.close(),F(G.error)},G.onblocked=function(){console.warn('dropInstance blocked for database "'+l.name+'" until all open connections are closed')},G.onsuccess=function(){var Y=G.result;Y&&Y.close(),H(Y)}});return L.then(function(H){M.db=H;for(var F=0;F<R.length;F++){var G=R[F];ne(G._dbInfo)}}).catch(function(H){throw(oe(l,H)||d.resolve()).catch(function(){}),H})})}return _(y,p),y}var ho={_driver:"asyncStorage",_initStorage:to,_support:f(),iterate:io,getItem:ro,setItem:no,removeItem:so,clear:oo,length:ao,key:co,keys:lo,dropInstance:uo};function po(){return typeof openDatabase=="function"}var xe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fo="~~local_forage_type~",ji=/^~~local_forage_type~([^~]+)~/,Et="__lfsc__:",hr=Et.length,dr="arbf",pr="blob",Li="si08",Bi="ui08",Ui="uic8",Ki="si16",Vi="si32",Hi="ur16",Fi="ui32",qi="fl32",Wi="fl64",Yi=hr+dr.length,Gi=Object.prototype.toString;function Zi(l){var p=l.length*.75,h=l.length,g,y=0,m,S,P,M;l[l.length-1]==="="&&(p--,l[l.length-2]==="="&&p--);var R=new ArrayBuffer(p),T=new Uint8Array(R);for(g=0;g<h;g+=4)m=xe.indexOf(l[g]),S=xe.indexOf(l[g+1]),P=xe.indexOf(l[g+2]),M=xe.indexOf(l[g+3]),T[y++]=m<<2|S>>4,T[y++]=(S&15)<<4|P>>2,T[y++]=(P&3)<<6|M&63;return R}function fr(l){var p=new Uint8Array(l),h="",g;for(g=0;g<p.length;g+=3)h+=xe[p[g]>>2],h+=xe[(p[g]&3)<<4|p[g+1]>>4],h+=xe[(p[g+1]&15)<<2|p[g+2]>>6],h+=xe[p[g+2]&63];return p.length%3===2?h=h.substring(0,h.length-1)+"=":p.length%3===1&&(h=h.substring(0,h.length-2)+"=="),h}function mo(l,p){var h="";if(l&&(h=Gi.call(l)),l&&(h==="[object ArrayBuffer]"||l.buffer&&Gi.call(l.buffer)==="[object ArrayBuffer]")){var g,y=Et;l instanceof ArrayBuffer?(g=l,y+=dr):(g=l.buffer,h==="[object Int8Array]"?y+=Li:h==="[object Uint8Array]"?y+=Bi:h==="[object Uint8ClampedArray]"?y+=Ui:h==="[object Int16Array]"?y+=Ki:h==="[object Uint16Array]"?y+=Hi:h==="[object Int32Array]"?y+=Vi:h==="[object Uint32Array]"?y+=Fi:h==="[object Float32Array]"?y+=qi:h==="[object Float64Array]"?y+=Wi:p(new Error("Failed to get type for BinaryArray"))),p(y+fr(g))}else if(h==="[object Blob]"){var m=new FileReader;m.onload=function(){var S=fo+l.type+"~"+fr(this.result);p(Et+pr+S)},m.readAsArrayBuffer(l)}else try{p(JSON.stringify(l))}catch(S){console.error("Couldn't convert value into a JSON string: ",l),p(null,S)}}function go(l){if(l.substring(0,hr)!==Et)return JSON.parse(l);var p=l.substring(Yi),h=l.substring(hr,Yi),g;if(h===pr&&ji.test(p)){var y=p.match(ji);g=y[1],p=p.substring(y[0].length)}var m=Zi(p);switch(h){case dr:return m;case pr:return v([m],{type:g});case Li:return new Int8Array(m);case Bi:return new Uint8Array(m);case Ui:return new Uint8ClampedArray(m);case Ki:return new Int16Array(m);case Hi:return new Uint16Array(m);case Vi:return new Int32Array(m);case Fi:return new Uint32Array(m);case qi:return new Float32Array(m);case Wi:return new Float64Array(m);default:throw new Error("Unkown type: "+h)}}var mr={serialize:mo,deserialize:go,stringToBuffer:Zi,bufferToString:fr};function Ji(l,p,h,g){l.executeSql("CREATE TABLE IF NOT EXISTS "+p.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],h,g)}function vo(l){var p=this,h={db:null};if(l)for(var g in l)h[g]=typeof l[g]!="string"?l[g].toString():l[g];var y=new d(function(m,S){try{h.db=openDatabase(h.name,String(h.version),h.description,h.size)}catch(P){return S(P)}h.db.transaction(function(P){Ji(P,h,function(){p._dbInfo=h,m()},function(M,R){S(R)})},S)});return h.serializer=mr,y}function Se(l,p,h,g,y,m){l.executeSql(h,g,y,function(S,P){P.code===P.SYNTAX_ERR?S.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[p.storeName],function(M,R){R.rows.length?m(M,P):Ji(M,p,function(){M.executeSql(h,g,y,m)},m)},m):m(S,P)},m)}function yo(l,p){var h=this;l=C(l);var g=new d(function(y,m){h.ready().then(function(){var S=h._dbInfo;S.db.transaction(function(P){Se(P,S,"SELECT * FROM "+S.storeName+" WHERE key = ? LIMIT 1",[l],function(M,R){var T=R.rows.length?R.rows.item(0).value:null;T&&(T=S.serializer.deserialize(T)),y(T)},function(M,R){m(R)})})}).catch(m)});return _(g,p),g}function _o(l,p){var h=this,g=new d(function(y,m){h.ready().then(function(){var S=h._dbInfo;S.db.transaction(function(P){Se(P,S,"SELECT * FROM "+S.storeName,[],function(M,R){for(var T=R.rows,z=T.length,L=0;L<z;L++){var H=T.item(L),F=H.value;if(F&&(F=S.serializer.deserialize(F)),F=l(F,H.key,L+1),F!==void 0){y(F);return}}y()},function(M,R){m(R)})})}).catch(m)});return _(g,p),g}function Xi(l,p,h,g){var y=this;l=C(l);var m=new d(function(S,P){y.ready().then(function(){p===void 0&&(p=null);var M=p,R=y._dbInfo;R.serializer.serialize(p,function(T,z){z?P(z):R.db.transaction(function(L){Se(L,R,"INSERT OR REPLACE INTO "+R.storeName+" (key, value) VALUES (?, ?)",[l,T],function(){S(M)},function(H,F){P(F)})},function(L){if(L.code===L.QUOTA_ERR){if(g>0){S(Xi.apply(y,[l,M,h,g-1]));return}P(L)}})})}).catch(P)});return _(m,h),m}function bo(l,p,h){return Xi.apply(this,[l,p,h,1])}function wo(l,p){var h=this;l=C(l);var g=new d(function(y,m){h.ready().then(function(){var S=h._dbInfo;S.db.transaction(function(P){Se(P,S,"DELETE FROM "+S.storeName+" WHERE key = ?",[l],function(){y()},function(M,R){m(R)})})}).catch(m)});return _(g,p),g}function xo(l){var p=this,h=new d(function(g,y){p.ready().then(function(){var m=p._dbInfo;m.db.transaction(function(S){Se(S,m,"DELETE FROM "+m.storeName,[],function(){g()},function(P,M){y(M)})})}).catch(y)});return _(h,l),h}function So(l){var p=this,h=new d(function(g,y){p.ready().then(function(){var m=p._dbInfo;m.db.transaction(function(S){Se(S,m,"SELECT COUNT(key) as c FROM "+m.storeName,[],function(P,M){var R=M.rows.item(0).c;g(R)},function(P,M){y(M)})})}).catch(y)});return _(h,l),h}function Eo(l,p){var h=this,g=new d(function(y,m){h.ready().then(function(){var S=h._dbInfo;S.db.transaction(function(P){Se(P,S,"SELECT key FROM "+S.storeName+" WHERE id = ? LIMIT 1",[l+1],function(M,R){var T=R.rows.length?R.rows.item(0).key:null;y(T)},function(M,R){m(R)})})}).catch(m)});return _(g,p),g}function Co(l){var p=this,h=new d(function(g,y){p.ready().then(function(){var m=p._dbInfo;m.db.transaction(function(S){Se(S,m,"SELECT key FROM "+m.storeName,[],function(P,M){for(var R=[],T=0;T<M.rows.length;T++)R.push(M.rows.item(T).key);g(R)},function(P,M){y(M)})})}).catch(y)});return _(h,l),h}function Ao(l){return new d(function(p,h){l.transaction(function(g){g.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(y,m){for(var S=[],P=0;P<m.rows.length;P++)S.push(m.rows.item(P).name);p({db:l,storeNames:S})},function(y,m){h(m)})},function(g){h(g)})})}function Po(l,p){p=b.apply(this,arguments);var h=this.config();l=typeof l!="function"&&l||{},l.name||(l.name=l.name||h.name,l.storeName=l.storeName||h.storeName);var g=this,y;return l.name?y=new d(function(m){var S;l.name===h.name?S=g._dbInfo.db:S=openDatabase(l.name,"","",0),l.storeName?m({db:S,storeNames:[l.storeName]}):m(Ao(S))}).then(function(m){return new d(function(S,P){m.db.transaction(function(M){function R(H){return new d(function(F,G){M.executeSql("DROP TABLE IF EXISTS "+H,[],function(){F()},function(Y,ce){G(ce)})})}for(var T=[],z=0,L=m.storeNames.length;z<L;z++)T.push(R(m.storeNames[z]));d.all(T).then(function(){S()}).catch(function(H){P(H)})},function(M){P(M)})})}):y=d.reject("Invalid arguments"),_(y,p),y}var $o={_driver:"webSQLStorage",_initStorage:vo,_support:po(),iterate:_o,getItem:yo,setItem:bo,removeItem:wo,clear:xo,length:So,key:Eo,keys:Co,dropInstance:Po};function Oo(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Qi(l,p){var h=l.name+"/";return l.storeName!==p.storeName&&(h+=l.storeName+"/"),h}function Mo(){var l="_localforage_support_test";try{return localStorage.setItem(l,!0),localStorage.removeItem(l),!1}catch{return!0}}function Ro(){return!Mo()||localStorage.length>0}function ko(l){var p=this,h={};if(l)for(var g in l)h[g]=l[g];return h.keyPrefix=Qi(l,p._defaultConfig),Ro()?(p._dbInfo=h,h.serializer=mr,d.resolve()):d.reject()}function To(l){var p=this,h=p.ready().then(function(){for(var g=p._dbInfo.keyPrefix,y=localStorage.length-1;y>=0;y--){var m=localStorage.key(y);m.indexOf(g)===0&&localStorage.removeItem(m)}});return _(h,l),h}function Io(l,p){var h=this;l=C(l);var g=h.ready().then(function(){var y=h._dbInfo,m=localStorage.getItem(y.keyPrefix+l);return m&&(m=y.serializer.deserialize(m)),m});return _(g,p),g}function zo(l,p){var h=this,g=h.ready().then(function(){for(var y=h._dbInfo,m=y.keyPrefix,S=m.length,P=localStorage.length,M=1,R=0;R<P;R++){var T=localStorage.key(R);if(T.indexOf(m)===0){var z=localStorage.getItem(T);if(z&&(z=y.serializer.deserialize(z)),z=l(z,T.substring(S),M++),z!==void 0)return z}}});return _(g,p),g}function Do(l,p){var h=this,g=h.ready().then(function(){var y=h._dbInfo,m;try{m=localStorage.key(l)}catch{m=null}return m&&(m=m.substring(y.keyPrefix.length)),m});return _(g,p),g}function No(l){var p=this,h=p.ready().then(function(){for(var g=p._dbInfo,y=localStorage.length,m=[],S=0;S<y;S++){var P=localStorage.key(S);P.indexOf(g.keyPrefix)===0&&m.push(P.substring(g.keyPrefix.length))}return m});return _(h,l),h}function jo(l){var p=this,h=p.keys().then(function(g){return g.length});return _(h,l),h}function Lo(l,p){var h=this;l=C(l);var g=h.ready().then(function(){var y=h._dbInfo;localStorage.removeItem(y.keyPrefix+l)});return _(g,p),g}function Bo(l,p,h){var g=this;l=C(l);var y=g.ready().then(function(){p===void 0&&(p=null);var m=p;return new d(function(S,P){var M=g._dbInfo;M.serializer.serialize(p,function(R,T){if(T)P(T);else try{localStorage.setItem(M.keyPrefix+l,R),S(m)}catch(z){(z.name==="QuotaExceededError"||z.name==="NS_ERROR_DOM_QUOTA_REACHED")&&P(z),P(z)}})})});return _(y,h),y}function Uo(l,p){if(p=b.apply(this,arguments),l=typeof l!="function"&&l||{},!l.name){var h=this.config();l.name=l.name||h.name,l.storeName=l.storeName||h.storeName}var g=this,y;return l.name?y=new d(function(m){l.storeName?m(Qi(l,g._defaultConfig)):m(l.name+"/")}).then(function(m){for(var S=localStorage.length-1;S>=0;S--){var P=localStorage.key(S);P.indexOf(m)===0&&localStorage.removeItem(P)}}):y=d.reject("Invalid arguments"),_(y,p),y}var Ko={_driver:"localStorageWrapper",_initStorage:ko,_support:Oo(),iterate:zo,getItem:Io,setItem:Bo,removeItem:Lo,clear:To,length:jo,key:Do,keys:No,dropInstance:Uo},Vo=function(p,h){return p===h||typeof p=="number"&&typeof h=="number"&&isNaN(p)&&isNaN(h)},Ho=function(p,h){for(var g=p.length,y=0;y<g;){if(Vo(p[y],h))return!0;y++}return!1},en=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"},Qe={},tn={},Ke={INDEXEDDB:ho,WEBSQL:$o,LOCALSTORAGE:Ko},Fo=[Ke.INDEXEDDB._driver,Ke.WEBSQL._driver,Ke.LOCALSTORAGE._driver],Ct=["dropInstance"],gr=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ct),qo={description:"",driver:Fo.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Wo(l,p){l[p]=function(){var h=arguments;return l.ready().then(function(){return l[p].apply(l,h)})}}function vr(){for(var l=1;l<arguments.length;l++){var p=arguments[l];if(p)for(var h in p)p.hasOwnProperty(h)&&(en(p[h])?arguments[0][h]=p[h].slice():arguments[0][h]=p[h])}return arguments[0]}var Yo=function(){function l(p){a(this,l);for(var h in Ke)if(Ke.hasOwnProperty(h)){var g=Ke[h],y=g._driver;this[h]=y,Qe[y]||this.defineDriver(g)}this._defaultConfig=vr({},qo),this._config=vr({},this._defaultConfig,p),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return l.prototype.config=function(h){if((typeof h>"u"?"undefined":o(h))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var g in h){if(g==="storeName"&&(h[g]=h[g].replace(/\W/g,"_")),g==="version"&&typeof h[g]!="number")return new Error("Database version must be a number.");this._config[g]=h[g]}return"driver"in h&&h.driver?this.setDriver(this._config.driver):!0}else return typeof h=="string"?this._config[h]:this._config},l.prototype.defineDriver=function(h,g,y){var m=new d(function(S,P){try{var M=h._driver,R=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!h._driver){P(R);return}for(var T=gr.concat("_initStorage"),z=0,L=T.length;z<L;z++){var H=T[z],F=!Ho(Ct,H);if((F||h[H])&&typeof h[H]!="function"){P(R);return}}var G=function(){for(var et=function(Jo){return function(){var Xo=new Error("Method "+Jo+" is not implemented by the current driver"),rn=d.reject(Xo);return _(rn,arguments[arguments.length-1]),rn}},yr=0,Zo=Ct.length;yr<Zo;yr++){var _r=Ct[yr];h[_r]||(h[_r]=et(_r))}};G();var Y=function(et){Qe[M]&&console.info("Redefining LocalForage driver: "+M),Qe[M]=h,tn[M]=et,S()};"_support"in h?h._support&&typeof h._support=="function"?h._support().then(Y,P):Y(!!h._support):Y(!0)}catch(ce){P(ce)}});return w(m,g,y),m},l.prototype.driver=function(){return this._driver||null},l.prototype.getDriver=function(h,g,y){var m=Qe[h]?d.resolve(Qe[h]):d.reject(new Error("Driver not found."));return w(m,g,y),m},l.prototype.getSerializer=function(h){var g=d.resolve(mr);return w(g,h),g},l.prototype.ready=function(h){var g=this,y=g._driverSet.then(function(){return g._ready===null&&(g._ready=g._initDriver()),g._ready});return w(y,h,h),y},l.prototype.setDriver=function(h,g,y){var m=this;en(h)||(h=[h]);var S=this._getSupportedDrivers(h);function P(){m._config.driver=m.driver()}function M(z){return m._extend(z),P(),m._ready=m._initStorage(m._config),m._ready}function R(z){return function(){var L=0;function H(){for(;L<z.length;){var F=z[L];return L++,m._dbInfo=null,m._ready=null,m.getDriver(F).then(M).catch(H)}P();var G=new Error("No available storage method found.");return m._driverSet=d.reject(G),m._driverSet}return H()}}var T=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=T.then(function(){var z=S[0];return m._dbInfo=null,m._ready=null,m.getDriver(z).then(function(L){m._driver=L._driver,P(),m._wrapLibraryMethodsWithReady(),m._initDriver=R(S)})}).catch(function(){P();var z=new Error("No available storage method found.");return m._driverSet=d.reject(z),m._driverSet}),w(this._driverSet,g,y),this._driverSet},l.prototype.supports=function(h){return!!tn[h]},l.prototype._extend=function(h){vr(this,h)},l.prototype._getSupportedDrivers=function(h){for(var g=[],y=0,m=h.length;y<m;y++){var S=h[y];this.supports(S)&&g.push(S)}return g},l.prototype._wrapLibraryMethodsWithReady=function(){for(var h=0,g=gr.length;h<g;h++)Wo(this,gr[h])},l.prototype.createInstance=function(h){return new l(h)},l}(),Go=new Yo;n.exports=Go},{3:3}]},{},[4])(4)})});var cs=J(Wt=>{"use strict";var pl=fl(as());Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.default=void 0;function fl(i){return i&&i.__esModule?i:{default:i}}function ml(i){let e=pl.default.createInstance({name:i});return{db:e,getItem:e.getItem,setItem:e.setItem,removeItem:e.removeItem}}var gl=ml;Wt.default=gl});var ls=J((oh,Yt)=>{var si=function(){var i=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function n(o,a){if(!r[o]){r[o]={};for(var c=0;c<o.length;c++)r[o][o.charAt(c)]=c}return r[o][a]}var s={compressToBase64:function(o){if(o==null)return"";var a=s._compress(o,6,function(c){return e.charAt(c)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:s._decompress(o.length,32,function(a){return n(e,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":s._compress(o,15,function(a){return i(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:s._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=s.compress(o),c=new Uint8Array(a.length*2),u=0,f=a.length;u<f;u++){var v=a.charCodeAt(u);c[u*2]=v>>>8,c[u*2+1]=v%256}return c},decompressFromUint8Array:function(o){if(o==null)return s.decompress(o);for(var a=new Array(o.length/2),c=0,u=a.length;c<u;c++)a[c]=o[c*2]*256+o[c*2+1];var f=[];return a.forEach(function(v){f.push(i(v))}),s.decompress(f.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":s._compress(o,6,function(a){return t.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),s._decompress(o.length,32,function(a){return n(t,o.charAt(a))}))},compress:function(o){return s._compress(o,16,function(a){return i(a)})},_compress:function(o,a,c){if(o==null)return"";var u,f,v={},d={},_="",w="",C="",b=2,A=3,O=2,I=[],E=0,$=0,x;for(x=0;x<o.length;x+=1)if(_=o.charAt(x),Object.prototype.hasOwnProperty.call(v,_)||(v[_]=A++,d[_]=!0),w=C+_,Object.prototype.hasOwnProperty.call(v,w))C=w;else{if(Object.prototype.hasOwnProperty.call(d,C)){if(C.charCodeAt(0)<256){for(u=0;u<O;u++)E=E<<1,$==a-1?($=0,I.push(c(E)),E=0):$++;for(f=C.charCodeAt(0),u=0;u<8;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1}else{for(f=1,u=0;u<O;u++)E=E<<1|f,$==a-1?($=0,I.push(c(E)),E=0):$++,f=0;for(f=C.charCodeAt(0),u=0;u<16;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1}b--,b==0&&(b=Math.pow(2,O),O++),delete d[C]}else for(f=v[C],u=0;u<O;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1;b--,b==0&&(b=Math.pow(2,O),O++),v[w]=A++,C=String(_)}if(C!==""){if(Object.prototype.hasOwnProperty.call(d,C)){if(C.charCodeAt(0)<256){for(u=0;u<O;u++)E=E<<1,$==a-1?($=0,I.push(c(E)),E=0):$++;for(f=C.charCodeAt(0),u=0;u<8;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1}else{for(f=1,u=0;u<O;u++)E=E<<1|f,$==a-1?($=0,I.push(c(E)),E=0):$++,f=0;for(f=C.charCodeAt(0),u=0;u<16;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1}b--,b==0&&(b=Math.pow(2,O),O++),delete d[C]}else for(f=v[C],u=0;u<O;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1;b--,b==0&&(b=Math.pow(2,O),O++)}for(f=2,u=0;u<O;u++)E=E<<1|f&1,$==a-1?($=0,I.push(c(E)),E=0):$++,f=f>>1;for(;;)if(E=E<<1,$==a-1){I.push(c(E));break}else $++;return I.join("")},decompress:function(o){return o==null?"":o==""?null:s._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,c){var u=[],f,v=4,d=4,_=3,w="",C=[],b,A,O,I,E,$,x,k={val:c(0),position:a,index:1};for(b=0;b<3;b+=1)u[b]=b;for(O=0,E=Math.pow(2,2),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;switch(f=O){case 0:for(O=0,E=Math.pow(2,8),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;x=i(O);break;case 1:for(O=0,E=Math.pow(2,16),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;x=i(O);break;case 2:return""}for(u[3]=x,A=x,C.push(x);;){if(k.index>o)return"";for(O=0,E=Math.pow(2,_),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;switch(x=O){case 0:for(O=0,E=Math.pow(2,8),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;u[d++]=i(O),x=d-1,v--;break;case 1:for(O=0,E=Math.pow(2,16),$=1;$!=E;)I=k.val&k.position,k.position>>=1,k.position==0&&(k.position=a,k.val=c(k.index++)),O|=(I>0?1:0)*$,$<<=1;u[d++]=i(O),x=d-1,v--;break;case 2:return C.join("")}if(v==0&&(v=Math.pow(2,_),_++),u[x])w=u[x];else if(x===d)w=A+A.charAt(0);else return null;C.push(w),u[d++]=A+w.charAt(0),v--,A=w,v==0&&(v=Math.pow(2,_),_++)}}};return s}();typeof define=="function"&&define.amd?define(function(){return si}):typeof Yt<"u"&&Yt!=null?Yt.exports=si:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return si})});var ds=J((oi,hs)=>{oi=hs.exports=vl;oi.getSerialize=us;function vl(i,e,t,r){return JSON.stringify(i,us(e,r),t)}function us(i,e){var t=[],r=[];return e==null&&(e=function(n,s){return t[0]===s?"[Circular ~]":"[Circular ~."+r.slice(0,t.indexOf(s)).join(".")+"]"}),function(n,s){if(t.length>0){var o=t.indexOf(this);~o?t.splice(o+1):t.push(this),~o?r.splice(o,1/0,n):r.push(n),~t.indexOf(s)&&(s=e.call(this,n,s))}else t.push(s);return i==null?s:i.call(this,n,s)}}});var gs=J(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.default=xl;var yl=ii(),_l=ls(),ps=ms(_l),bl=ds(),wl=ms(bl);function ms(i){return i&&i.__esModule?i:{default:i}}var fs="production";function xl(i){return(0,yl.createTransform)(function(e){return ps.default.compressToUTF16((0,wl.default)(e))},function(e){if(typeof e!="string")return fs!=="production"&&console.error("redux-persist-transform-compress: expected outbound state to be a string"),e;try{return JSON.parse(ps.default.decompressFromUTF16(e))}catch(t){return fs!=="production"&&console.error("redux-persist-transform-compress: error while decompressing state",t),null}},i)}});var wt,Ls=wr(()=>{wt=class{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let r=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-r}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}}});function Si(i){return i==="horizontal"?"width":"height"}var sr,Bs=wr(()=>{sr=class{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){e=e==="horizontal"?e:"vertical",e!==this._direction&&(this._direction=e,this._sizeDim=e==="horizontal"?"width":"height",this._secondarySizeDim=e==="horizontal"?"height":"width",this._positionDim=e==="horizontal"?"left":"top",this._secondaryPositionDim=e==="horizontal"?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:r}=this;Object.assign(this._viewportSize,e),r!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(this._pin!==null){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[Si(this.direction)]-this._viewDim1))}unpin(){this._pin!==null&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(this.pin!==null){let e=this._scrollPosition,{index:t,block:r}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:r||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,r=Math.min(this.items.length,Math.max(0,e.index)),n=this._getItemPosition(r)[this._positionDim],s=n;if(t!=="start"){let o=this._getItemSize(r)[this._sizeDim];if(t==="center")s=n-.5*this._viewDim1+.5*o;else{let a=n-this._viewDim1+o;if(t==="end")s=a;else{let c=this._scrollPosition;s=Math.abs(c-n)<Math.abs(c-a)?n:a}}}return s+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(s)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(this._first!==-1&&this._last!==-1)for(let r=this._first;r<=this._last;r++)e.set(r,this._getItemPosition(r));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return this._first===-1||this._last===-1?0:this._last-this._first+1}_checkThresholds(){if(this._viewDim1===0&&this._num>0||this._pin!==null)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(this._first===-1||this._last===-1)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let r=this._last;for(;r>this._first&&Math.round(this._getItemPosition(r)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)r--;(t!==this._firstVisible||r!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=r,e&&e.emit&&this._sendVisibilityChangedMessage())}}});var Ks={};nn(Ks,{FlowLayout:()=>or,flow:()=>Bl});function Us(i){return i==="horizontal"?"marginLeft":"marginTop"}function Ul(i){return i==="horizontal"?"marginRight":"marginBottom"}function Kl(i){return i==="horizontal"?"xOffset":"yOffset"}function Vl(i,e){let t=[i,e].sort();return t[1]<=0?Math.min(...t):t[0]>=0?Math.max(...t):t[0]+t[1]}var Bl,Ei,or,Vs=wr(()=>{Ls();Bs();Bl=i=>Object.assign({type:or},i);Ei=class{constructor(){this._childSizeCache=new wt,this._marginSizeCache=new wt,this._metricsCache=new Map}update(e,t){let r=new Set;Object.keys(e).forEach(n=>{let s=Number(n);this._metricsCache.set(s,e[s]),this._childSizeCache.set(s,e[s][Si(t)]),r.add(s),r.add(s+1)});for(let n of r){let s=this._metricsCache.get(n)?.[Us(t)]||0,o=this._metricsCache.get(n-1)?.[Ul(t)]||0;this._marginSizeCache.set(n,Vl(s,o))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[Us(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}},or=class extends sr{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new Ei,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(this._first===-1||this._last===-1)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let r=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(r*t.averageChildSize+(r-1)*t.averageMarginSize)}else{let r=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+r*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:r}=this._metricsCache;return e===0?this._metricsCache.getMarginSize(0)??r:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(this._physicalItems.size===0)return this._calculateAnchor(e,t);if(this._first<0)return this._calculateAnchor(e,t);if(this._last<0)return this._calculateAnchor(e,t);let r=this._getPhysicalItem(this._first),n=this._getPhysicalItem(this._last),s=r.pos;if(n.pos+this._metricsCache.getChildSize(this._last)<e)return this._calculateAnchor(e,t);if(s>t)return this._calculateAnchor(e,t);let c=this._firstVisible-1,u=-1/0;for(;u<e;)u=this._getPhysicalItem(++c).pos+this._metricsCache.getChildSize(c);return c}_getActiveItems(){this._viewDim1===0||this.items.length===0?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e=this._newPhysicalItems;this._stable=!0;let t,r;if(this.pin!==null){let{index:u}=this.pin;this._anchorIdx=u,this._anchorPos=this._getPosition(u)}if(t=this._scrollPosition-this._overhang,r=this._scrollPosition+this._viewDim1+this._overhang,r<0||t>this._scrollSize){this._clearItems();return}(this._anchorIdx===null||this._anchorPos===null)&&(this._anchorIdx=this._getAnchor(t,r),this._anchorPos=this._getPosition(this._anchorIdx));let n=this._getSize(this._anchorIdx);n===void 0&&(this._stable=!1,n=this._getAverageSize());let s=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,o=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;this._anchorIdx===0&&(this._anchorPos=s),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-o-n);let a=0;for(this._anchorPos+n+o<t&&(a=t-(this._anchorPos+n+o)),this._anchorPos-s>r&&(a=r-(this._anchorPos-s)),a&&(this._scrollPosition-=a,t-=a,r-=a,this._scrollError+=a),e.set(this._anchorIdx,{pos:this._anchorPos,size:n}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-s,this._physicalMax=this._anchorPos+n+o;this._physicalMin>t&&this._first>0;){let u=this._getSize(--this._first);u===void 0&&(this._stable=!1,u=this._getAverageSize());let f=this._metricsCache.getMarginSize(this._first);f===void 0&&(this._stable=!1,f=this._metricsCache.averageMarginSize),this._physicalMin-=u;let v=this._physicalMin;if(e.set(this._first,{pos:v,size:u}),this._physicalMin-=f,this._stable===!1&&this._estimate===!1)break}for(;this._physicalMax<r&&this._last<this.items.length-1;){let u=this._getSize(++this._last);u===void 0&&(this._stable=!1,u=this._getAverageSize());let f=this._metricsCache.getMarginSize(this._last);f===void 0&&(this._stable=!1,f=this._metricsCache.averageMarginSize);let v=this._physicalMax;if(e.set(this._last,{pos:v,size:u}),this._physicalMax+=u+f,!this._stable&&!this._estimate)break}let c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,e.forEach(u=>u.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e)}_calculateError(){return this._first===0?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(this._first===-1&&this._last==-1||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,[Kl(this.direction)]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}});var At=globalThis,Pt=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sr=Symbol(),sn=new WeakMap,rt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Pt&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=sn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&sn.set(t,e))}return e}toString(){return this.cssText}},on=i=>new rt(typeof i=="string"?i:i+"",void 0,Sr),ue=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new rt(t,i,Sr)},Er=(i,e)=>{if(Pt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),n=At.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}},$t=Pt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return on(t)})(i):i;var{is:sa,defineProperty:oa,getOwnPropertyDescriptor:aa,getOwnPropertyNames:ca,getOwnPropertySymbols:la,getPrototypeOf:ua}=Object,Ot=globalThis,an=Ot.trustedTypes,ha=an?an.emptyScript:"",da=Ot.reactiveElementPolyfillSupport,it=(i,e)=>i,nt={toAttribute(i,e){switch(e){case Boolean:i=i?ha:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Mt=(i,e)=>!sa(i,e),cn={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:Mt};Symbol.metadata??=Symbol("metadata"),Ot.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=cn){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&oa(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:s}=aa(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n?.call(this)},set(o){let a=n?.call(this);s.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??cn}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;let e=ua(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){let t=this.properties,r=[...ca(t),...la(t)];for(let n of r)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift($t(n))}else e!==void 0&&t.push($t(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Er(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:nt).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let s=r.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:nt;this._$Em=n,this[n]=o.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??Mt)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,s]of r)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[it("elementProperties")]=new Map,ye[it("finalized")]=new Map,da?.({ReactiveElement:ye}),(Ot.reactiveElementVersions??=[]).push("2.0.4");var Ar=globalThis,Rt=Ar.trustedTypes,ln=Rt?Rt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Pr="$lit$",_e=`lit$${Math.random().toFixed(9).slice(2)}$`,$r="?"+_e,pa=`<${$r}>`,ze=document,ot=()=>ze.createComment(""),at=i=>i===null||typeof i!="object"&&typeof i!="function",Or=Array.isArray,mn=i=>Or(i)||typeof i?.[Symbol.iterator]=="function",Cr=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,un=/-->/g,hn=/>/g,Te=RegExp(`>|${Cr}(?:([^\\s"'>=/]+)(${Cr}*=${Cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dn=/'/g,pn=/"/g,gn=/^(?:script|style|textarea|title)$/i,Mr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),N=Mr(1),he=Mr(2),ru=Mr(3),W=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),fn=new WeakMap,Ie=ze.createTreeWalker(ze,129);function vn(i,e){if(!Or(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ln!==void 0?ln.createHTML(e):e}var yn=(i,e)=>{let t=i.length-1,r=[],n,s=e===2?"<svg>":e===3?"<math>":"",o=st;for(let a=0;a<t;a++){let c=i[a],u,f,v=-1,d=0;for(;d<c.length&&(o.lastIndex=d,f=o.exec(c),f!==null);)d=o.lastIndex,o===st?f[1]==="!--"?o=un:f[1]!==void 0?o=hn:f[2]!==void 0?(gn.test(f[2])&&(n=RegExp("</"+f[2],"g")),o=Te):f[3]!==void 0&&(o=Te):o===Te?f[0]===">"?(o=n??st,v=-1):f[1]===void 0?v=-2:(v=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?Te:f[3]==='"'?pn:dn):o===pn||o===dn?o=Te:o===un||o===hn?o=st:(o=Te,n=void 0);let _=o===Te&&i[a+1].startsWith("/>")?" ":"";s+=o===st?c+pa:v>=0?(r.push(u),c.slice(0,v)+Pr+c.slice(v)+_e+_):c+_e+(v===-2?a:_)}return[vn(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},ct=class i{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,o=0,a=e.length-1,c=this.parts,[u,f]=yn(e,t);if(this.el=i.createElement(u,r),Ie.currentNode=this.el.content,t===2||t===3){let v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(n=Ie.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let v of n.getAttributeNames())if(v.endsWith(Pr)){let d=f[o++],_=n.getAttribute(v).split(_e),w=/([.?@])?(.*)/.exec(d);c.push({type:1,index:s,name:w[2],strings:_,ctor:w[1]==="."?Tt:w[1]==="?"?It:w[1]==="@"?zt:Ne}),n.removeAttribute(v)}else v.startsWith(_e)&&(c.push({type:6,index:s}),n.removeAttribute(v));if(gn.test(n.tagName)){let v=n.textContent.split(_e),d=v.length-1;if(d>0){n.textContent=Rt?Rt.emptyScript:"";for(let _=0;_<d;_++)n.append(v[_],ot()),Ie.nextNode(),c.push({type:2,index:++s});n.append(v[d],ot())}}}else if(n.nodeType===8)if(n.data===$r)c.push({type:2,index:s});else{let v=-1;for(;(v=n.data.indexOf(_e,v+1))!==-1;)c.push({type:7,index:s}),v+=_e.length-1}s++}}static createElement(e,t){let r=ze.createElement("template");return r.innerHTML=e,r}};function De(i,e,t=i,r){if(e===W)return e;let n=r!==void 0?t._$Co?.[r]:t._$Cl,s=at(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(i),n._$AT(i,t,r)),r!==void 0?(t._$Co??=[])[r]=n:t._$Cl=n),n!==void 0&&(e=De(i,n._$AS(i,e.values),n,r)),e}var kt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??ze).importNode(t,!0);Ie.currentNode=n;let s=Ie.nextNode(),o=0,a=0,c=r[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new Ve(s,s.nextSibling,this,e):c.type===1?u=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(u=new Dt(s,this,e)),this._$AV.push(u),c=r[++a]}o!==c?.index&&(s=Ie.nextNode(),o++)}return Ie.currentNode=ze,n}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ve=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=De(this,e,t),at(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&at(this._$AH)?this._$AA.nextSibling.data=e:this.T(ze.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ct.createElement(vn(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let s=new kt(n,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=fn.get(e.strings);return t===void 0&&fn.set(e.strings,t=new ct(e)),t}k(e){Or(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let s of e)n===t.length?t.push(r=new i(this.O(ot()),this.O(ot()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ne=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(e,t=this,r,n){let s=this.strings,o=!1;if(s===void 0)e=De(this,e,t,0),o=!at(e)||e!==this._$AH&&e!==W,o&&(this._$AH=e);else{let a=e,c,u;for(e=s[0],c=0;c<s.length-1;c++)u=De(this,a[r+c],t,c),u===W&&(u=this._$AH[c]),o||=!at(u)||u!==this._$AH[c],u===B?e=B:e!==B&&(e+=(u??"")+s[c+1]),this._$AH[c]=u}o&&!n&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Tt=class extends Ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}},It=class extends Ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}},zt=class extends Ne{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){if((e=De(this,e,t,0)??B)===W)return;let r=this._$AH,n=e===B&&r!==B||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==B&&(r===B||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Dt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}},_n={M:Pr,P:_e,A:$r,C:1,L:yn,R:kt,D:mn,V:De,I:Ve,H:Ne,N:It,U:zt,B:Tt,F:Dt},fa=Ar.litHtmlPolyfillSupport;fa?.(ct,Ve),(Ar.litHtmlVersions??=[]).push("3.2.1");var Nt=(i,e,t)=>{let r=t?.renderBefore??e,n=r._$litPart$;if(n===void 0){let s=t?.renderBefore??null;r._$litPart$=n=new Ve(e.insertBefore(ot(),s),s,void 0,t??{})}return n._$AI(i),n};var re=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};re._$litElement$=!0,re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:re});var ma=globalThis.litElementPolyfillSupport;ma?.({LitElement:re});(globalThis.litElementVersions??=[]).push("4.1.1");var ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},se=i=>(...e)=>({_$litDirective$:i,values:e}),le=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:ga}=_n;var jt=i=>i.strings===void 0,bn=()=>document.createComment(""),He=(i,e,t)=>{let r=i._$AA.parentNode,n=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=r.insertBefore(bn(),n),o=r.insertBefore(bn(),n);t=new ga(s,o,i,i.options)}else{let s=t._$AB.nextSibling,o=t._$AM,a=o!==i;if(a){let c;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==o._$AU&&t._$AP(c)}if(s!==n||a){let c=t._$AA;for(;c!==s;){let u=c.nextSibling;r.insertBefore(c,n),c=u}}}return t},Ee=(i,e,t=i)=>(i._$AI(e,t),i),va={},Lt=(i,e=va)=>i._$AH=e,wn=i=>i._$AH,Bt=i=>{i._$AP?.(!1,!0);let e=i._$AA,t=i._$AB.nextSibling;for(;e!==t;){let r=e.nextSibling;e.remove(),e=r}};var xn=(i,e,t)=>{let r=new Map;for(let n=e;n<=t;n++)r.set(i[n],n);return r},lt=se(class extends le{constructor(i){if(super(i),i.type!==ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let n=[],s=[],o=0;for(let a of i)n[o]=r?r(a,o):o,s[o]=t(a,o),o++;return{values:s,keys:n}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,r]){let n=wn(i),{values:s,keys:o}=this.dt(e,t,r);if(!Array.isArray(n))return this.ut=o,s;let a=this.ut??=[],c=[],u,f,v=0,d=n.length-1,_=0,w=s.length-1;for(;v<=d&&_<=w;)if(n[v]===null)v++;else if(n[d]===null)d--;else if(a[v]===o[_])c[_]=Ee(n[v],s[_]),v++,_++;else if(a[d]===o[w])c[w]=Ee(n[d],s[w]),d--,w--;else if(a[v]===o[w])c[w]=Ee(n[v],s[w]),He(i,c[w+1],n[v]),v++,w--;else if(a[d]===o[_])c[_]=Ee(n[d],s[_]),He(i,n[v],n[d]),d--,_++;else if(u===void 0&&(u=xn(o,_,w),f=xn(a,v,d)),u.has(a[v]))if(u.has(a[d])){let C=f.get(o[_]),b=C!==void 0?n[C]:null;if(b===null){let A=He(i,n[v]);Ee(A,s[_]),c[_]=A}else c[_]=Ee(b,s[_]),He(i,n[v],b),n[C]=null;_++}else Bt(n[d]),d--;else Bt(n[v]),v++;for(;_<=w;){let C=He(i,c[w+1]);Ee(C,s[_]),c[_++]=C}for(;v<=d;){let C=n[v++];C!==null&&Bt(C)}return this.ut=o,Lt(i,c),W}});var je=i=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=i.subscribe(()=>this.stateChanged(i.getState())),this.stateChanged(i.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}};var[Sn,Pu]=["animation","transition"].map(i=>(e,t,r)=>new Promise((n,s)=>{let o,a=c=>{try{clearTimeout(o),e.removeEventListener(`${i}end`,a),e.removeEventListener(`${i}cancel`,a),n(r?r(c):c)}catch(u){s(u)}};e.addEventListener(`${i}end`,a,{once:!0}),e.addEventListener(`${i}cancel`,a,{once:!0}),t&&(o=setTimeout(a,t,{type:"timeout"}))}));var Fe=se(class extends le{constructor(i){if(super(i),i.type!==ie.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let t=i.element.classList;for(let r of this.st)r in e||(t.remove(r),this.st.delete(r));for(let r in e){let n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return W}});var Ut=(i,{size:e="24px",stroke:t="currentColor",fill:r="currentColor"})=>N`<svg
        class="${Fe({icon:!0,[i]:!0})}"
        xmlns="http://www.w3.org/2000/svg"
        height="${e}"
        width="${e}"
        viewBox="0 -960 960 960"
        fill="${r}"
        stroke="${t}"
    >
        ${ya[i]}
    </svg>`,ya={play:he`<path d="M320-200v-560l440 280-440 280Z"/>`,pause:he`<path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/>`,playDisabled:he`<path d="M658-416 320-754v-6l440 280-102 64ZM790-56 520-328 320-200v-328L56-792l56-56 736 736-58 56Z"/>`,playPause:he`<path d="M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z"/>`,resume:he`<path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z"/>`,tune:he`<path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80 h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>`,skipNext:he`<path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"/>`,skipPrev:he`<path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z"/>`,replay:he`<path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/>`,dropdown:he`<path d="M481-362 255-588l38-38 188 188 188-188 38 38-226 226Z"/>`};var zr={};nn(zr,{__DO_NOT_USE__ActionTypes:()=>ut,applyMiddleware:()=>Ir,bindActionCreators:()=>Sa,combineReducers:()=>Tr,compose:()=>Kt,createStore:()=>ht,isAction:()=>Ea,isPlainObject:()=>kr,legacy_createStore:()=>wa});function X(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var _a=typeof Symbol=="function"&&Symbol.observable||"@@observable",En=_a,Rr=()=>Math.random().toString(36).substring(7).split("").join("."),ba={INIT:`@@redux/INIT${Rr()}`,REPLACE:`@@redux/REPLACE${Rr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Rr()}`},ut=ba;function kr(i){if(typeof i!="object"||i===null)return!1;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e||Object.getPrototypeOf(i)===null}function ht(i,e,t){if(typeof i!="function")throw new Error(X(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(X(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(X(1));return t(ht)(i,e)}let r=i,n=e,s=new Map,o=s,a=0,c=!1;function u(){o===s&&(o=new Map,s.forEach((b,A)=>{o.set(A,b)}))}function f(){if(c)throw new Error(X(3));return n}function v(b){if(typeof b!="function")throw new Error(X(4));if(c)throw new Error(X(5));let A=!0;u();let O=a++;return o.set(O,b),function(){if(A){if(c)throw new Error(X(6));A=!1,u(),o.delete(O),s=null}}}function d(b){if(!kr(b))throw new Error(X(7));if(typeof b.type>"u")throw new Error(X(8));if(typeof b.type!="string")throw new Error(X(17));if(c)throw new Error(X(9));try{c=!0,n=r(n,b)}finally{c=!1}return(s=o).forEach(O=>{O()}),b}function _(b){if(typeof b!="function")throw new Error(X(10));r=b,d({type:ut.REPLACE})}function w(){let b=v;return{subscribe(A){if(typeof A!="object"||A===null)throw new Error(X(11));function O(){let E=A;E.next&&E.next(f())}return O(),{unsubscribe:b(O)}},[En](){return this}}}return d({type:ut.INIT}),{dispatch:d,subscribe:v,getState:f,replaceReducer:_,[En]:w}}function wa(i,e,t){return ht(i,e,t)}function xa(i){Object.keys(i).forEach(e=>{let t=i[e];if(typeof t(void 0,{type:ut.INIT})>"u")throw new Error(X(12));if(typeof t(void 0,{type:ut.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(X(13))})}function Tr(i){let e=Object.keys(i),t={};for(let o=0;o<e.length;o++){let a=e[o];typeof i[a]=="function"&&(t[a]=i[a])}let r=Object.keys(t),n,s;try{xa(t)}catch(o){s=o}return function(a={},c){if(s)throw s;let u=!1,f={};for(let v=0;v<r.length;v++){let d=r[v],_=t[d],w=a[d],C=_(w,c);if(typeof C>"u"){let b=c&&c.type;throw new Error(X(14))}f[d]=C,u=u||C!==w}return u=u||r.length!==Object.keys(a).length,u?f:a}}function Cn(i,e){return function(...t){return e(i.apply(this,t))}}function Sa(i,e){if(typeof i=="function")return Cn(i,e);if(typeof i!="object"||i===null)throw new Error(X(16));let t={};for(let r in i){let n=i[r];typeof n=="function"&&(t[r]=Cn(n,e))}return t}function Kt(...i){return i.length===0?e=>e:i.length===1?i[0]:i.reduce((e,t)=>(...r)=>e(t(...r)))}function Ir(...i){return e=>(t,r)=>{let n=e(t,r),s=()=>{throw new Error(X(15))},o={getState:n.getState,dispatch:(c,...u)=>s(c,...u)},a=i.map(c=>c(o));return s=Kt(...a)(n.dispatch),{...n,dispatch:s}}}function Ea(i){return kr(i)&&"type"in i&&typeof i.type=="string"}function Le(){return Le=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Le.apply(this,arguments)}function Ca(i){var e;i.models.forEach(function(c){return Mn(i,c)});var t=Rn(i),r=Ir.apply(zr,i.reduxConfig.middlewares),n=i.reduxConfig.devtoolComposer?(e=i.reduxConfig).devtoolComposer.apply(e,i.reduxConfig.enhancers.concat([r])):Pa(i.reduxConfig.devtoolOptions).apply(void 0,i.reduxConfig.enhancers.concat([r])),s=i.reduxConfig.createStore||ht,o=i.reduxConfig.initialState,a=o===void 0?{}:o;return s(t,a,n)}function Mn(i,e){var t={},r=Object.keys(e.reducers);r.forEach(function(a){var c=$a(a)?a:e.name+"/"+a;t[c]=e.reducers[a]});var n=function(c,u){return c===void 0&&(c=e.state),u.type in t?t[u.type](c,u.payload,u.meta):c},s=e.baseReducer,o=s?function(a,c){return a===void 0&&(a=e.state),n(s(a,c),c)}:n;i.forEachPlugin("onReducer",function(a){o=a(o,e.name,i)||o}),i.reduxConfig.reducers[e.name]=o}function Rn(i){var e=i.reduxConfig.rootReducers,t=Aa(i.reduxConfig),r=t;return e&&Object.keys(e).length&&(r=function(s,o){var a=e[o.type];return t(a?a(s,o):s,o)}),i.forEachPlugin("onRootReducer",function(n){r=n(r,i)||r}),r}function Aa(i){var e=i.combineReducers||Tr;return Object.keys(i.reducers).length?e(i.reducers):function(t){return t}}function Pa(i){return i===void 0&&(i={}),!i.disabled&&typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(i):Kt}function $a(i){return i.indexOf("/")>-1}var An=function(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)},Ce=function(e){return!e||typeof e=="function"},dt=function(e){if(0)var t,r},Oa=function(e){dt(function(){return[[!Array.isArray(e.plugins),"init config.plugins must be an array"],[!An(e.models),"init config.models must be an object"],[!An(e.redux.reducers),"init config.redux.reducers must be an object"],[!Array.isArray(e.redux.middlewares),"init config.redux.middlewares must be an array"],[!Array.isArray(e.redux.enhancers),"init config.redux.enhancers must be an array of functions"],[!Ce(e.redux.combineReducers),"init config.redux.combineReducers must be a function"],[!Ce(e.redux.createStore),"init config.redux.createStore must be a function"]]})},kn=function(e){dt(function(){return[[!e,"model config is required"],[typeof e.name!="string",'model "name" [string] is required'],[e.state===void 0&&e.baseReducer===void 0,'model "state" is required'],[!Ce(e.baseReducer),'model "baseReducer" must be a function']]})},Ma=function(e){dt(function(){return[[!Ce(e.onStoreCreated),"Plugin onStoreCreated must be a function"],[!Ce(e.onModel),"Plugin onModel must be a function"],[!Ce(e.onReducer),"Plugin onReducer must be a function"],[!Ce(e.onRootReducer),"Plugin onRootReducer must be a function"],[!Ce(e.createMiddleware),"Plugin createMiddleware must be a function"]]})},Ra=function(e,t,r){dt(function(){return[[!!r.match(/\/.+\//),"Invalid reducer name ("+e+"/"+r+")"],[typeof t[r]!="function","Invalid reducer ("+e+"/"+r+"). Must be a function"]]})},ka=function(e,t,r){dt(function(){return[[!!r.match(/\//),"Invalid effect name ("+e+"/"+r+")"],[typeof t[r]!="function","Invalid effect ("+e+"/"+r+"). Must be a function"]]})},Tn=function(e,t,r,n){return Object.assign(function(s,o){var a={type:t+"/"+r};return typeof s<"u"&&(a.payload=s),typeof o<"u"&&(a.meta=o),e.dispatch(a)},{isEffect:n})},Ta=function(e,t){var r=e.dispatch[t.name],n=Object.keys(t.reducers);n.forEach(function(s){Ra(t.name,t.reducers,s),r[s]=Tn(e,t.name,s,!1)})},Ia=function(e,t,r){var n=e.dispatch[r.name],s={};r.effects&&(s=typeof r.effects=="function"?r.effects(e.dispatch):r.effects);var o=Object.keys(s);o.forEach(function(a){ka(r.name,s,a),t.effects[r.name+"/"+a]=s[a].bind(n),n[a]=Tn(e,r.name,a,!0)})};function za(i){return{models:Da(i.models),reduxConfig:i.redux,forEachPlugin:function(t,r){i.plugins.forEach(function(n){n[t]&&r(n[t])})},effects:{}}}function Da(i){return Object.keys(i).map(function(e){var t=Na(e,i[e]);return kn(t),t})}function Na(i,e){return Le({name:i,reducers:{}},e)}function ja(i){var e=za(i);e.reduxConfig.middlewares.push(La(e)),e.forEachPlugin("createMiddleware",function(n){e.reduxConfig.middlewares.push(n(e))});var t=Ca(e),r=Le({},t,{name:i.name,addModel:function(s){kn(s),Mn(e,s),Pn(r,s),$n(r,e,s),t.replaceReducer(Rn(e)),t.dispatch({type:"@@redux/REPLACE"})}});return Ba(r,i.plugins),e.models.forEach(function(n){return Pn(r,n)}),e.models.forEach(function(n){return $n(r,e,n)}),e.forEachPlugin("onStoreCreated",function(n){r=n(r,e)||r}),r}function La(i){return function(e){return function(t){return function(r){return r.type in i.effects?(t(r),i.effects[r.type](r.payload,e.getState(),r.meta)):t(r)}}}}function Pn(i,e){var t={};i.dispatch[""+e.name]=t,Ta(i,e)}function $n(i,e,t){Ia(i,e,t),e.forEachPlugin("onModel",function(r){r(t,i)})}function Ba(i,e){e.forEach(function(t){if(t.exposed){var r=Object.keys(t.exposed);r.forEach(function(n){if(t.exposed){var s=t.exposed[n],o=typeof s=="function";i[n]=o?function(){for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return s.apply(void 0,[i].concat(c))}:Object.create(t.exposed[n])}})}})}var On=0;function Ua(i){var e,t,r,n=(e=i.name)!=null?e:"Rematch Store "+On;On+=1;var s={name:n,models:i.models||{},plugins:i.plugins||[],redux:Le({reducers:{},rootReducers:{},enhancers:[],middlewares:[]},i.redux,{devtoolOptions:Le({name:n},(t=(r=i.redux)==null?void 0:r.devtoolOptions)!=null?t:{})})};return Oa(s),s.plugins.forEach(function(o){o.config&&(s.models=Vt(s.models,o.config.models),o.config.redux&&(s.redux.initialState=Vt(s.redux.initialState,o.config.redux.initialState),s.redux.reducers=Vt(s.redux.reducers,o.config.redux.reducers),s.redux.rootReducers=Vt(s.redux.rootReducers,o.config.redux.reducers),s.redux.enhancers=[].concat(s.redux.enhancers,o.config.redux.enhancers||[]),s.redux.middlewares=[].concat(s.redux.middlewares,o.config.redux.middlewares||[]),s.redux.combineReducers=s.redux.combineReducers||o.config.redux.combineReducers,s.redux.createStore=s.redux.createStore||o.config.redux.createStore)),Ma(o)}),s}function Vt(i,e){return e?Le({},e,i):i}var In=function(e){var t=Ua(e||{});return ja(t)};var Ht="NOT_FOUND";function Ka(i){var e;return{get:function(r){return e&&i(e.key,r)?e.value:Ht},put:function(r,n){e={key:r,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function Va(i,e){var t=[];function r(a){var c=t.findIndex(function(f){return e(a,f.key)});if(c>-1){var u=t[c];return c>0&&(t.splice(c,1),t.unshift(u)),u.value}return Ht}function n(a,c){r(a)===Ht&&(t.unshift({key:a,value:c}),t.length>i&&t.pop())}function s(){return t}function o(){t=[]}return{get:r,put:n,getEntries:s,clear:o}}var zn=function(e,t){return e===t};function Ha(i){return function(t,r){if(t===null||r===null||t.length!==r.length)return!1;for(var n=t.length,s=0;s<n;s++)if(!i(t[s],r[s]))return!1;return!0}}function Dn(i,e){var t=typeof e=="object"?e:{equalityCheck:e},r=t.equalityCheck,n=r===void 0?zn:r,s=t.maxSize,o=s===void 0?1:s,a=t.resultEqualityCheck,c=Ha(n),u=o===1?Ka(c):Va(o,c);function f(){var v=u.get(arguments);if(v===Ht){if(v=i.apply(null,arguments),a){var d=u.getEntries(),_=d.find(function(w){return a(w.value,v)});_&&(v=_.value)}u.put(arguments,v)}return v}return f.clearCache=function(){return u.clear()},f}function Fa(i){var e=Array.isArray(i[0])?i[0]:i;if(!e.every(function(r){return typeof r=="function"})){var t=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function qa(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var n=function(){for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];var u=0,f,v={memoizeOptions:void 0},d=a.pop();if(typeof d=="object"&&(v=d,d=a.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var _=v,w=_.memoizeOptions,C=w===void 0?t:w,b=Array.isArray(C)?C:[C],A=Fa(a),O=i.apply(void 0,[function(){return u++,d.apply(null,arguments)}].concat(b)),I=i(function(){for(var $=[],x=A.length,k=0;k<x;k++)$.push(A[k].apply(null,arguments));return f=O.apply(null,$),f});return Object.assign(I,{resultFunc:d,memoizedResultFunc:O,dependencies:A,lastResult:function(){return f},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),I};return n}var Dr=qa(Dn),Nn=function(e,t){if(t===void 0&&(t=Dr),typeof e!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof e));var r=Object.keys(e),n=t(r.map(function(s){return e[s]}),function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return o.reduce(function(c,u,f){return c[r[f]]=u,c},{})});return n};var Wa=function(){function e(t,r){r===void 0&&(r=Nn);var n=function(o,a){return n=r(t(e)),n(o,a)};return function(s,o){return n(s,o)}}return e},Ya=function(){var e=!1,t=new Set;return{add:function(n){e?n.forEach(function(s){return s()}):n.forEach(function(s){return t.add(s)})},finish:function(n){t.delete(n)},startBuilding:function(){e=!0,t.forEach(function(n){return n()})}}},Ga=function(e){},Za=function(e,t,r){},jn=function(e){e===void 0&&(e={}),Ga(e);var t=e.sliceState||function(c,u){return c[u.name||""]},r=e.selectorCreator||Dr,n=function(u){return function(f){return typeof f=="function"?r(function(v){return t(v,u)},f):t(f,u)}},s=function(u){return function(f){var v=this;return r(function(d){return d},function(d){return u.call(v,f,d)})}},o=Ya(),a=Wa();return{exposed:{select:a,sliceState:t,selectorCreator:r},onModel:function(u){a[u.name]={};var f=typeof u.selectors=="function"?u.selectors(n(u),r,s):u.selectors;o.add(Object.keys(f||{}).map(function(v){Za(f,v,u);var d=function _(){return o.finish(_),delete a[u.name][v],a[u.name][v]=f[v].call(a[u.name],a),a[u.name][v]};return Object.defineProperty(a[u.name],v,{configurable:!0,get:function(){return d()}}),d}))},onStoreCreated:function(u){o.startBuilding(),u.select=a}}};var mt=xr(ii()),dl;var ss=function(e,t,r,n){if(t===void 0&&(t={}),!e)throw new Error("persist plugin is missing config object");return{onReducer:function(o,a){var c=t[a];if(c)return(0,mt.persistReducer)(c,o)},onRootReducer:function(o){return(0,mt.persistReducer)(e,o)},onStoreCreated:function(o){dl=(0,mt.persistStore)(o,r,n)}}};var Ms=xr(cs(),1),Rs=xr(gs(),1);var{entries:fe,fromEntries:de,keys:me,values:vs}=Object,{from:ch}=Array,Gt=(i,e)=>de(fe(i).map(([t,r])=>[t,e(r,t,i)])),ys=(i,e)=>de(fe(i).filter(([t,r])=>e(r,t,i)));var gt=(i,e)=>{switch(typeof i){case"number":return i+(e??0);case"object":return(Array.isArray(i)?i:[i]).reduce((t,r)=>typeof r=="number"?r+(t??0):{...t??{},...Gt(r,(n,s)=>gt(n,(t??{})[s]))},e)}},_s=(i,e)=>Gt(e,t=>i.flatMap(r=>t.flatMap(n=>n in r?r[n]:[])).reduce((r,n)=>r+n,0));var bs=i=>i instanceof RegExp?i.source:Array.isArray(i)?i.map(bs):i,Oe=(i,...e)=>{let t=typeof e.at(-1)=="string"&&/^\/[gimsuydx]*$/.test(e.at(-1))?e.pop():"";e=e.map(bs);let r=i.raw.flatMap((n,s)=>[n,...e[s]??""]).join("");return r=r.replace(/#[^\n]*/g,""),r=r.replace(/(?<escape>\\.)|(?<charClass>\[.*?(?<!\\)])|(\s+)/g,"$<escape>$<charClass>"),new RegExp(r,t?.slice(1))};Oe`
    (\\.)               | # first pull escape sequences out of the string
    (\[.*?(?<!\\)\])    | # then charClasses
    (\#[^\n]*)          | # then comments
    (\s+)                 # then whitespace
    ${"/gs"}
`;var V=class extends Event{constructor(e,{value:t,path:r,error:n,...s}={}){super(e,s),this.details={value:t,path:r,error:n}}},te=class extends Error{constructor(e,{cause:t,offset:r,line:n,column:s,path:o}){super(e,{cause:t}),this.offset=r,this.line=n,this.column=s,this.path=o}[Symbol.for("nodejs.util.inspect.custom")](e,t,r){return`${this.path??""}:${this.line??""}:${this.column??""}:${this.offset??""} ${this.message}`}},Sl=Oe`
    -?
    (?:0|[1-9]\d*)
    (?:\.\d+)?
    (?:[eE][+-]?\d+)?
`,El=Oe`
    (?<objectStart> \{ )                     |
    (?<objectEnd> \} )                       |
    (?<arrayStart> \[ )                      |
    (?<arrayEnd> \] )                        |
    (?<string> "(?:[^"\\]|\\.)*(?:"|\\?$) )  |
    (?<number> ${Sl} )               |
    (?<boolean> true | false)                |
    (?<null> null )                          |
    (?<colon> : )                            |
    (?<comma> , )                            |
    (?<whitespace> \s+ )                     |
    (?<comment> \/\/[^\n]*     |
                \/\*.*?\*\/)
    ${"/gs"}
`,ws=Oe`
    ^(?<stringPart> (?: [^"\\] | \\.)* )
     (?<ending>"|\\?$)
`,Zt=class{constructor(e={}){this.allowComments=e.allowComments??!1,this.allowTrailingCommas=e.allowTrailingCommas??!0,this.decoder=e.decoder,this.parsing=!1}#e={value:[],part:[],end:[],error:[]};addEventListener(e,t,{once:r=!1}={}){e in this.#e&&this.#e[e].push({listener:t,once:r})}removeEventListener(e,t){e in this.#e&&(this.#e[e]=this.#e[e].filter(r=>r.listener!==t))}dispatchEvent(e){this.#e[e.type]?.forEach(({listener:t,once:r})=>{t(e),r&&this.removeEventListener(e.type,t)})}async parse(e){if(this.parsing)throw new Error(`Already parsing ${this.parsing}`);this.parsing=e;for await(let t of e)this.push(t)}push=(e=>{let t="",r="",n="init",s=[],o=[],a=[],c,u=[],f=0;return v=>{try{if(v.length===0)return;let d=0;if(t+=this.decoder?this.decoder.decode(v,{stream:!0}):v,n==="string"){let[_,w,C]=t.match(ws)??[],{result:b,dangle:A}=this.escapeString(w);if(A){let x=new te("Invalid escape sequence",{offset:f+w.length-A.length});throw this.dispatchEvent(new V("error",{error:x})),x}let O=C==='"'?1:0;t=t.slice(w.length+O),f+=w.length+O,d=0,r+=b;let I=o.at(-1);if(I!=="object-key"&&I!=="object-key-opt"&&this.dispatchEvent(new V("part",{path:a.join("."),value:b})),C!=='"')return;n=o.pop();let E=JSON.stringify(r),$={type:"string",value:r,length:E.length,index:f-E.length};n==="array-element"||n==="array-element-opt"?n=this.handleArrayElementState({token:$,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:f}):n==="object-key-opt"||n==="object-key"?n=this.handleObjectKeyState({token:$,subscripts:a,state:n,accumulatorOffset:f,states:o,contexts:s}):n==="object-value"&&(n=this.handleObjectValueState({token:$,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:f})),r=""}for(let _ of t.matchAll(El)){let[[w,C]]=Object.entries(_.groups).filter(([O,I])=>I!=null||I===null),b={type:w,value:C,length:_[0].length,index:_.index};if(d!==b.index){let O=new te(`Syntax error: ${b.type} ${t.slice(d,b.index)}`,{offset:f+d});throw this.dispatchEvent(new V("error",{error:O})),O}let A=b.index+b.length===t.length;if(A&&["comment","number"].includes(b.type))break;if(b.type==="string"){if(A){if(b.value==='"'||b.value.at(-1)!=='"')break;let{ending:O}=b.value.slice(1).match(ws)?.groups??{};if(O!=='"')break}b.value=b.value.slice(1,-1)}if(b.type==="whitespace"||b.type==="comment"){let O=b.index+f;if(u.push(...[...b.value.matchAll(/\n/g)].map(I=>I.index+O)),b.type==="whitespace"||this.allowComments){d+=b.length;continue}}switch(n){case"init":({initValue:c,state:n}=this.handleInitState({token:b,initValue:c,contexts:s,states:o,state:n,accumulatorOffset:f}));break;case"object-key":case"object-key-opt":n=this.handleObjectKeyState({token:b,subscripts:a,state:n,accumulatorOffset:f,states:o,contexts:s});break;case"object-colon":n=this.handleObjectColonState({token:b,state:n,accumulatorOffset:f});break;case"object-value":n=this.handleObjectValueState({token:b,contexts:s,subscripts:a,state:n,states:o,accumulatorOffset:f});break;case"object-comma":n=this.handleObjectCommaState({token:b,state:n,states:o,subscripts:a,contexts:s,accumulatorOffset:f});break;case"array-element":case"array-element-opt":n=this.handleArrayElementState({contexts:s,token:b,subscripts:a,state:n,states:o,accumulatorOffset:f});break;case"array-comma":n=this.handleArrayCommaState({token:b,state:n,subscripts:a,states:o,contexts:s,accumulatorOffset:f})}d+=b.length}if(f+=d,t=t.slice(d),c&&n==="init")return this.dispatchEvent(new V("end",{path:a.join("."),value:c})),c;if(t[0]==='"'){o.push(n),n="string";let{result:_,dangle:w}=this.escapeString(t.slice(1));r=_,w?(f+=t.length-w.length,t=w):(f+=t.length,t=""),this.dispatchEvent(new V("part",{path:a.join("."),value:_}))}}catch(d){if(d instanceof te){let _=u.filter(w=>w<d.offset);d.line=_.length+1,d.column=d.offset-(_.at(-1)??-1)}throw d}finally{this.parsing=!1}}})();handleObjectColonState({token:e,state:t,accumulatorOffset:r}){if(e.type==="colon")t="object-value";else{let n=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:r+e.index});throw this.dispatchEvent(new V("error",{error:n})),n}return t}handleArrayCommaState({token:e,state:t,subscripts:r,states:n,contexts:s,accumulatorOffset:o}){if(e.type==="comma")t="array-element",r[r.length-1]=r.at(-1)+1;else if(e.type==="arrayEnd")r.pop(),t=n.pop(),this.dispatchEvent(new V("value",{path:r.join("."),value:s.pop()}));else{let a=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return t}handleObjectCommaState({token:e,state:t,states:r,subscripts:n,contexts:s,accumulatorOffset:o}){if(e.type==="comma")t="object-key",n.pop();else if(e.type==="objectEnd")t=r.pop(),n.pop(),this.dispatchEvent(new V("value",{path:n.join("."),value:s.pop()}));else{let a=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return t}handleArrayElementState({contexts:e,token:t,subscripts:r,state:n,states:s,accumulatorOffset:o}){n==="array-element-opt"&&t.type!=="arrayEnd"&&r.push(0);let a=e.at(-1);if(t.type==="string"){let{result:c,dangle:u}=this.escapeString(t.value);if(u){let f=new te("Invalid escape sequence",{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:f})),f}a.push(c),this.dispatchEvent(new V("value",{path:r.join("."),value:c})),n="array-comma"}else if(t.type==="number")a.push(Number(t.value)),this.dispatchEvent(new V("value",{path:r.join("."),value:t.value})),n="array-comma";else if(t.type==="boolean")a.push(t.value==="true"),this.dispatchEvent(new V("value",{path:r.join("."),value:t.value})),n="array-comma";else if(t.type==="null")a.push(null),this.dispatchEvent(new V("value",{path:r.join("."),value:t.value})),n="array-comma";else if(t.type==="objectStart"){let c={};a.push(c),e.push(c),s.push("array-comma"),n="object-key-opt"}else if(t.type==="arrayStart"){let c=[];a.push(c),e.push(c),s.push("array-comma"),n="array-element-opt"}else if(t.type==="arrayEnd"){if(n==="array-element"&&!this.allowTrailingCommas){let c=new te("Unexpected comma token: ,",{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:c})),c}e.pop(),n=s.pop(),r.pop(),this.dispatchEvent(new V("value",{path:r.join("."),value:a}))}else{let c=new te(`Unexpected ${t.type} token: ${t.value} `,{offset:o+t.index});throw this.dispatchEvent(new V("error",{error:c})),c}return n}handleObjectValueState({token:e,contexts:t,subscripts:r,state:n,states:s,accumulatorOffset:o}){if(e.type==="string"){let{result:a,dangle:c}=this.escapeString(e.value);if(c){let u=new te("Invalid escape sequence",{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:u})),u}t.at(-1)[r.at(-1)]=a,n="object-comma",this.dispatchEvent(new V("value",{path:r.join("."),value:a}))}else if(e.type==="number")t.at(-1)[r.at(-1)]=Number(e.value),n="object-comma",this.dispatchEvent(new V("value",{path:r.join("."),value:e.value}));else if(e.type==="boolean")t.at(-1)[r.at(-1)]=e.value==="true",n="object-comma",this.dispatchEvent(new V("value",{path:r.join("."),value:e.value==="true"}));else if(e.type==="null")t.at(-1)[r.at(-1)]=null,n="object-comma",this.dispatchEvent(new V("value",{path:r.join("."),value:null}));else if(e.type==="objectStart")t.push(t.at(-1)[r.at(-1)]={}),s.push("object-comma"),n="object-key-opt";else if(e.type==="arrayStart")t.push(t.at(-1)[r.at(-1)]=[]),s.push("object-comma"),n="array-element-opt";else{let a=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return n}handleObjectKeyState({token:e,subscripts:t,state:r,accumulatorOffset:n,states:s,contexts:o}){if(e.type==="string"){let{result:a,dangle:c}=this.escapeString(e.value);if(c){let u=new te("Invalid escape sequence",{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:u})),u}t.push(a),r="object-colon"}else if(e.type==="objectEnd"){if(r==="object-key"&&!this.allowTrailingCommas){let c=new te("Unexpected comma token: ,",{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:c})),c}r=s.pop();let a=o.pop();this.dispatchEvent(new V("value",{path:t.join("."),value:a}))}else{let a=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:n+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return r}handleInitState({token:e,initValue:t,contexts:r,states:n,state:s,accumulatorOffset:o}){if(e.type==="objectStart")t={},r.push(t),n.push(s),s="object-key-opt";else if(e.type==="arrayStart")t=[],r.push(t),n.push(s),s="array-element-opt";else{let a=new te(`Unexpected ${e.type} token: ${e.value} `,{offset:o+e.index});throw this.dispatchEvent(new V("error",{error:a})),a}return{initValue:t,state:s}}escapeMap={n:`
`,r:"\r",t:"	",f:"\f",b:"\b","/":"/",'"':'"',"\\":"\\"};escapeString(e){let t=e.slice(-2)==="\\\\",r=e.replace(/\\u(....)|\\(.)/g,(s,o,a)=>{if(o){if(o.match(/^[0-9A-F]{4}$/i))return String.fromCodePoint(parseInt(o,16));throw new te("Invalid Unicode escape sequence",{offset:o.index})}else return this.escapeMap[a]??a}),[n]=!t&&r.slice(-5).match(/\\$|\\u[0-9a-fA-F]{0,3}$/)||[];return{result:n?r.slice(0,-n.length):r,dangle:n}}};var xs={name:"currentMatch",state:{id:""},reducers:{start(i,{red:e,black:t}){let r=crypto.randomUUID(),n=Date.now();return{id:r,started:n,red:e,black:t,turns:[]}},stream(i,{chunk:e}){let t=[...i.turns],r=t.pop(),n={...r.stream,chunks:[...r.stream?.chunks??[],e]};return{...i,turns:[...t??[],{...r,stream:n}]}},reasoningStream(i,e){let t=[...i.turns],r=t.pop(),n={...r.reasoningStream,chunks:[...r.reasoningStream?.chunks??[],e]};return{...i,turns:[...t??[],{...r,reasoningStream:n}]}},turnRequest(i,{date:e,side:t,request:r}){return{...i,turns:[...i.turns,{date:e,side:t,request:r}]}},turnResponse(i,{move:e,response:t}){let r=[...i.turns],n=r.pop(),s={...n,response:t,move:e},o=gt([i.usage??{},{[n.side]:t?.usage??{}}]);return{...i,usage:o,turns:[...r,s]}},"board/capture":(i,{position:e})=>{let t=[...i.turns],r=t.pop(),n=r.captures??[];return{...i,turns:[...t,{...r,captures:[...n,e]}]}},end(i,{result:e}){return{...i,result:e,ended:Date.now()}},reset(i){return{}}},selectors:(i,e,t)=>({id(){return e(i,r=>r.id)},usage(){return e(i,r=>r.usage??{})},turns(){return e(i,r=>r.turns??[])},redTurns(){return e(this.turns,r=>r.filter(n=>n.side==="red"))},blackTurns(){return e(this.turns,r=>r.filter(n=>n.side==="black"))},turn(){return e(this.turns,r=>r.at(-1))},stream(){return e(this.turn,r=>r?.stream)},contentThread(){return e(this.turns,r=>r.filter(n=>n.request?.content))},redThread(){return e(this.contentThread,r=>r?.filter(n=>n.side==="red"))},blackThread(){return e(this.contentThread,r=>r?.filter(n=>n.side==="black"))}}),effects:i=>({parseStream(e){this.contentParser||(this.contentParser=new Zt,this.contentParser.addEventListener("part",t=>{t.details.path==="comment"&&i.currentMatch.stream({chunk:t.details.value})})),this.contentParser.push(e)},async start(e,t){},async playTurn({side:e},t){},turn(e,t){},end(e,t){i.matches.add({match:{...t.currentMatch}})},pause(e,t){},resume(e,t){}})};var Ss={name:"matches",state:[],reducers:{add:(i,{match:e})=>[...i,e]},selectors:(i,e,t)=>({matches(){return e(i,r=>r)},usageByProvider(){return e(i,r=>n=>{let s=o=>o.turns?.filter(a=>o[a.color]?.provider===n&&a.response?.usage)??[];return gt(r.flatMap(s).map(o=>o.response?.usage??{}))})},matchesByProvider(){return e(i,r=>n=>r.filter(s=>s.red.provider===n||s.black.provider===n))},matchesWonByProvider(){return e(this.matchesByProvider,r=>n=>r(n).filter(s=>s[s.result?.winner]?.provider===n))},matchesWonAndLostByProvider(){return e(i,r=>r.reduce((n,s)=>{if(!s.result||s.result.winner==="Error")return n;let o=s[s.result.winner]?.provider??"other",a=s[s.result.winner==="red"?"black":"red"]?.provider??"other";return n[o]??={wins:[],losses:[]},n[a]??={wins:[],losses:[]},n[o].wins.push(s),n[a].losses.push(s),n},{}))}})};var ci={r:"red",R:"red",b:"black",B:"black"},li={r:"pawn",R:"king",b:"pawn",B:"king"},Es=[..."ABCDEFGH"],Jt={};for(let i=0;i<12;i++){let e=i/4,t=Math.floor(e),r=e%1*8+t%2;Jt[`${Es[r]}${t+1}`]=`b${i}`,Jt[`${Es[7-r]}${8-t}`]=`r${i}`}var Cs={name:"board",state:{positions:{...Jt},captures:[],highlights:[],moves:[]},reducers:{move(i,{from:e,flair:t,to:r}){let n={...i.positions,[r]:i.positions[e]};delete n[e];let s=n[r],o=[...i.moves??[],{piece:s,from:e,to:r}];return{...i,positions:n,moves:o}},capture(i,{position:e}){let t=i.moves.length,r={...i.positions},n=r[e];return delete r[e],{...i,positions:r,captures:[...i.captures,{color:ci[n[0]],rank:li[n[0]],position:e,piece:n,turn:t}]}},promote(i,{position:e}){let{positions:t}=i;return{...i,positions:{...t,[e]:t[e].toUpperCase()}}},reset(i){return{...i,positions:{...Jt},turns:[],captures:[],moves:[]}},highlightPositions(i,{positions:e}){return{...i,highlights:e}},unhighlightPositions(i){return{...i,highlights:[]}}},selectors:(i,e,t)=>({pieces(){return e(i,r=>r.positions)},piece(){return e(this.pieces,r=>n=>r[n])},occupied(){return e(this.piece,r=>n=>!r(n))},pieceColor(){return e(this.piece,r=>n=>ci[r(n)[0]])},rank(){return e(this.piece,r=>n=>li[r(n)[0]])},captures(){return i(r=>r.captures.map(n=>({color:ci[n.piece[0]],rank:li[n.piece[0]],...n})))},redCaptures(){return e(this.captures,r=>r.filter(({color:n})=>n==="red"))},blackCaptures(){return e(this.captures,r=>r.filter(({color:n})=>n==="black"))},highlights(){return e(i,r=>r.highlights)}})};var Me=class{constructor(e){this.config=e}formatUrl(e){throw new Error("formatUrl must be implemented")}formatMessages(e){throw new Error("formatMessages must be implemented")}createRequestPayload(e){throw new Error("createRequestPayload must be implemented")}getHeaders(){throw new Error("getHeaders must be implemented")}handleResponseJson(e,t){throw new Error("handleResponseJson must be imolemented")}parseStreamChunk(e){throw new Error("parseStreamChunk must be implemented")}extractRateLimitHeaders(e){throw new Error("extractRateLimitHeaders must be implemented")}};var pe=class extends Me{formatUrl(e){return`${e}/chat/completions`}formatMessages(e){return e.map(({role:t,content:r})=>({role:t,content:r}))}createRequestPayload(e){let t=ys({model:this.config.model,messages:this.formatMessages(e),max_tokens:this.config.maxTokens,temperature:this.config.temperature,response_format:this.config.responseFormat,stream:this.config.stream,stream_options:this.config.stream?{include_usage:!0}:void 0},r=>r!==void 0);if(this.config.provider==="openai"&&this.config.model==="o1"&&this.config.stream&&(t.stream=!1,delete t.stream_options),this.config.provider==="openai"&&this.config.model.startsWith("o")?(t.reasoning_effort=this.config.reasoningEffort??"low",delete t.temperature):delete t.reasoning_effort,this.config.provider==="mistral"&&delete t.stream_options,["deepseek","openrouter"].includes(this.config.provider)&&t.response_format&&t.response_format.type==="json_schema"){if(this.config.provider!=="deepseek"||this.config.provider==="deepseek"&&this.config.model!=="deepseek-reasoner"){let r=t.response_format.json_schema;delete t.response_format,t.tools=[{type:"function",function:{name:r.name,description:r.description,parameters:r.schema}}],t.tool_choice={type:"function",function:{name:"CheckersMove"}}}this.config.provider==="deepseek"&&this.config.model==="deepseek-reasoner"&&(delete t.temperature,delete t.response_format,t.messages[0].content+='Please respond in this format: {"comment": "your comment", "move": "your move"}')}return t}getHeaders(){return{"Content-Type":"application/json",Authorization:`Bearer ${this.config.apiKey}`}}handleResponseJson(e){e.choices.length!==1&&console.warn(`response includes ${e.choices.length} choices.`);let t=e.choices[0]?.finish_reason,r=e.choices[0]?.message,n=e.usage;return{content:t==="tool_calls"?r.tool_calls[0].function.arguments:r?.content,message:r,usage:n}}parseStreamChunk({data:e},t){let r=JSON.parse(e),n="",s="";if(!t.id)t={...r,id:r.id??Date.now(),choices:[{...r.choices[0],message:r.choices[0].delta}]},n=r.choices[0].delta.content??"",delete t.choices[0].delta;else{if("content"in(r.choices[0]?.delta??{})&&r.choices[0]?.delta?.content)t.choices[0].message.content+=n=r.choices[0].delta.content??"";else if("tool_calls"in(r.choices[0]?.delta??{})){let o=r.choices[0].delta.tool_calls[0];t.choices[0].message.tool_calls??=[];let a=t.choices[0].message.tool_calls,c=o.index;a[c]??={function:{arguments:""}},a[c].function.arguments+=o.function.arguments??"",c===0&&(n=o.function.arguments??"")}else"reasoning_content"in(r.choices[0]?.delta??{})&&r.choices[0]?.delta?.reasoning_content&&(t.choices[0].message.reasoning_content??="",t.choices[0].message.reasoning_content+=s=r.choices[0].delta.reasoning_content);r.choices.length&&(t.choices[0].finish_reason=r.choices[0].finish_reason),r.usage&&(t.usage=r.usage)}return{partialReasoningContent:s,partialContent:n,parsed:r,message:t}}extractRateLimitHeaders(e){let t=e.headers;return{rateLimitTokens:t.get("x-ratelimit-limit-tokens"),rateLimitRemainingTokens:t.get("x-ratelimit-remaining-tokens"),rateLimitResetTokens:t.get("x-ratelimit-reset-tokens"),rateLimitRequests:t.get("x-ratelimit-limit-requests"),rateLimitRemainingRequests:t.get("x-ratelimit-remaining-requests"),rateLimitResetRequests:t.get("x-ratelimit-reset-requests")}}};var vt=class extends Me{formatUrl(e){return`${e}/messages`}formatMessages(e){return e.map(t=>({role:t.role==="assistant"?"assistant":"user",content:t.content}))}createRequestPayload(e){return{model:this.config.model,messages:this.formatMessages(e),max_tokens:this.config.maxTokens??8192,temperature:this.config.temperature,stream:this.config.stream,tool_choice:{type:"tool",name:"CheckersMove"},tools:[{name:"CheckersMove",description:"Take your turn at checkers",input_schema:this.config.responseFormat.json_schema.schema}]}}getHeaders(){let e={"Content-Type":"application/json","x-api-key":this.config.apiKey,"anthropic-version":this.config.anthropicVersion};return globalThis.navigator&&(e["anthropic-dangerous-direct-browser-access"]="true"),e}handleResponseJson(e){e.content.length!==1&&console.warn(`response includes ${e.content.length} content blocks.`);let t=e.content[0],r=t.type==="text"?t.text:t.type==="tool_use"?JSON.stringify(t.input):void 0,n={role:e.role,content:r},s=e.usage;return{content:r,message:n,usage:s}}accum=[];parseStreamChunk(e,t){let r=JSON.parse(e.data),n="";switch(r.type==="content_block_delta"&&(r.delta?.type==="text_delta"?n=r.delta.text:r.delta?.type==="input_json_delta"&&(n=r.delta.partial_json)),e.data=r,e.event){case"message_start":t={...e.data.message};break;case"content_block_start":t.content[e.data.index]=e.data.content_block;break;case"content_block_delta":let s=e.data.delta.type==="input_json_delta"?"partial_json":"text";this.accum.push(e.data.delta[s]);break;case"content_block_stop":let o=t.content[e.data.index].type,a=o==="tool_use"?JSON.parse(this.accum.join("")):this.accum.join(""),c=o==="tool_use"?"input":"text";t.content[e.data.index][c]=a,this.accum.length=0;break;case"message_delta":t={...t,...e.data.delta};break;case"message_stop":case"ping":default:break}return{partialContent:n,message:t,parsed:r}}extractRateLimitHeaders(e){let t=e.headers,r=de([...t.entries()].flatMap(([n,s])=>n.startsWith("anthropic-ratelimit")?[[n.slice(20).replace(/-./g,o=>o[1].toUpperCase()),s]]:[]));return t.has("retry-after")&&(r.retryAfter=t.get("retry-after")),r}};var U={openai:{name:"OpenAI",baseUrl:"https://api.openai.com/v1",models:["gpt-4o","gpt-4o-mini","o1","o3-mini"],defaultModel:"gpt-4o",apiStyle:"openai",apiKeyName:"OPENAI_API_KEY",handler:pe},anthropic:{name:"Anthropic",baseUrl:"https://api.anthropic.com/v1",models:["claude-3-5-sonnet-latest","claude-3-5-haiku-latest"],defaultModel:"claude-3-5-sonnet-latest",apiStyle:"anthropic",apiKeyName:"ANTHROPIC_API_KEY",anthropicVersion:"2023-12-06",handler:vt},deepseek:{name:"DeepSeek",baseUrl:"https://api.deepseek.com",models:["deepseek-chat","deepseek-reasoner"],defaultModel:"deepseek-chat",apiStyle:"openai",apiKeyName:"DEEPSEEK_API_KEY",handler:pe},google:{name:"Google",baseUrl:"https://generativelanguage.googleapis.com/v1beta/openai",models:["gemini-2.0-flash-exp","gemini-2.0-flash-thinking-exp","gemini-1.5-flash","gemini-1.5-pro"],defaultModel:"gemini-2.0-flash-exp",handler:pe,apiStyle:"openai",apiKeyName:"GEMINI_API_KEY"},mistral:{name:"Mistral AI",baseUrl:"https://api.mistral.ai/v1",models:["mistral-tiny","mistral-small","codestral-2501"],defaultModel:"mistral-tiny",apiStyle:"openai",apiKeyName:"MISTRAL_API_KEY",handler:pe},lmstudio:{name:"LM Studio",apiStyle:"openai",models:["llama-3.2-3b-instruct","qwen2.5-14b-instruct","deepseek-r1-distill-qwen-14b","deepseek-r1-distill-llama-8b","qwen2.5-7b-instruct-1m"],defaultModel:"llama-3.2-3b-instruct",baseUrl:"http://0.0.0.0:1234/v1",configurableUrl:!0,handler:pe},ollama:{name:"Ollama",baseUrl:"http://0.0.0.0:11434/v1",apiStyle:"openai",models:["llama3.2:3b","phi4","deepseek-r1:7b"],defaultModel:"phi4",configurableUrl:!0,handler:pe},openrouter:{name:"OpenRouter",baseUrl:"https://openrouter.ai/api/v1",apiStyle:"openai",apiKeyName:"OPENROUTER_API_KEY",models:["minimax/minimax-01","qwen/qvq-72b-preview"],defaultModel:"qwen/qvq-72b-preview",handler:pe}};var As={anthropic:{placements:{"chatOutput:darkMode":{filter:"brightness(500%) invert(100%) opacity(15%)"},"chatOutput:lightMode":{filter:"brightness(45%) opacity(20%)"},chatSettings:{filter:"brightness(80%)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="filter:${e}; ${t}" filter="${i}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.2 65"><path fill="#FFF" d="M66.5,0H52.4l25.7,65h14.1L66.5,0z M25.7,0L0,65h14.4l5.3-13.6h26.9L51.8,65h14.4L40.5,0C40.5,0,25.7,0,25.7,0z M24.3,39.3l8.8-22.8l8.8,22.8H24.3z" ></path></svg>`},deepseek:{placements:{"chatOutput:darkMode":{filter:"brightness(500%) invert(100%) opacity(15%)"},"chatOutput:lightMode":{filter:"saturate(40%) brightness(55%) opacity(15%)"},chatSettings:{filter:"brightness(100%) drop-shadow(0 0 2px #000000af)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="filter:${e}; ${t}" filter="${i}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 24 20"><path fill-rule="nonzero" fill="#4D6BFE" d="M27.501 8.46875C27.249 8.3457 27.1406 8.58008 26.9932 8.69922C26.9434 8.73828 26.9004 8.78906 26.8584 8.83398C26.4902 9.22852 26.0605 9.48633 25.5 9.45508C24.6787 9.41016 23.9785 9.66797 23.3594 10.2969C23.2275 9.52148 22.79 9.05859 22.125 8.76172C21.7764 8.60742 21.4238 8.45312 21.1807 8.11719C21.0098 7.87891 20.9639 7.61328 20.8779 7.35156C20.8242 7.19336 20.7695 7.03125 20.5879 7.00391C20.3906 6.97266 20.3135 7.13867 20.2363 7.27734C19.9258 7.84375 19.8066 8.46875 19.8174 9.10156C19.8447 10.5234 20.4453 11.6562 21.6367 12.4629C21.7725 12.5547 21.8076 12.6484 21.7646 12.7832C21.6836 13.0605 21.5869 13.3301 21.501 13.6074C21.4473 13.7852 21.3662 13.8242 21.1768 13.7461C20.5225 13.4727 19.957 13.0684 19.458 12.5781C18.6104 11.7578 17.8438 10.8516 16.8877 10.1426C16.6631 9.97656 16.4395 9.82227 16.207 9.67578C15.2314 8.72656 16.335 7.94727 16.5898 7.85547C16.8574 7.75977 16.6826 7.42773 15.8193 7.43164C14.957 7.43555 14.167 7.72461 13.1611 8.10938C13.0137 8.16797 12.8594 8.21094 12.7002 8.24414C11.7871 8.07227 10.8389 8.0332 9.84766 8.14453C7.98242 8.35352 6.49219 9.23633 5.39648 10.7441C4.08105 12.5547 3.77148 14.6133 4.15039 16.7617C4.54883 19.0234 5.70215 20.8984 7.47559 22.3633C9.31348 23.8809 11.4307 24.625 13.8457 24.4824C15.3125 24.3984 16.9463 24.2012 18.7881 22.6406C19.2529 22.8711 19.7402 22.9629 20.5498 23.0332C21.1729 23.0918 21.7725 23.002 22.2373 22.9062C22.9648 22.752 22.9141 22.0781 22.6514 21.9531C20.5186 20.959 20.9863 21.3633 20.5605 21.0371C21.6445 19.752 23.2783 18.418 23.917 14.0977C23.9668 13.7539 23.9238 13.5391 23.917 13.2598C23.9131 13.0918 23.9512 13.0254 24.1445 13.0059C24.6787 12.9453 25.1973 12.7988 25.6738 12.5352C27.0557 11.7793 27.6123 10.5391 27.7441 9.05078C27.7637 8.82422 27.7402 8.58789 27.501 8.46875ZM15.46 21.8613C13.3926 20.2344 12.3906 19.6992 11.9766 19.7227C11.5898 19.7441 11.6592 20.1875 11.7441 20.4766C11.833 20.7617 11.9492 20.959 12.1123 21.209C12.2246 21.375 12.3018 21.623 12 21.8066C11.334 22.2207 10.1768 21.668 10.1221 21.6406C8.77539 20.8477 7.64941 19.7988 6.85547 18.3652C6.08984 16.9844 5.64453 15.5039 5.57129 13.9238C5.55176 13.541 5.66406 13.4062 6.04297 13.3379C6.54199 13.2461 7.05762 13.2266 7.55664 13.2988C9.66602 13.6074 11.4619 14.5527 12.9668 16.0469C13.8262 16.9004 14.4766 17.918 15.1465 18.9121C15.8584 19.9688 16.625 20.9746 17.6006 21.7988C17.9443 22.0879 18.2197 22.3086 18.4824 22.4707C17.6895 22.5586 16.3652 22.5781 15.46 21.8613ZM16.4502 15.4805C16.4502 15.3105 16.5859 15.1758 16.7568 15.1758C16.7949 15.1758 16.8301 15.1836 16.8613 15.1953C16.9033 15.2109 16.9424 15.2344 16.9727 15.2695C17.0273 15.3223 17.0586 15.4004 17.0586 15.4805C17.0586 15.6504 16.9229 15.7852 16.7529 15.7852C16.582 15.7852 16.4502 15.6504 16.4502 15.4805ZM19.5273 17.0625C19.3301 17.1426 19.1328 17.2129 18.9434 17.2207C18.6494 17.2344 18.3281 17.1152 18.1533 16.9688C17.8828 16.7422 17.6895 16.6152 17.6074 16.2168C17.5732 16.0469 17.5928 15.7852 17.623 15.6348C17.6934 15.3105 17.6152 15.1035 17.3877 14.9141C17.2012 14.7598 16.9658 14.7188 16.7061 14.7188C16.6094 14.7188 16.5205 14.6758 16.4541 14.6406C16.3457 14.5859 16.2568 14.4512 16.3418 14.2852C16.3691 14.2324 16.501 14.1016 16.5322 14.0781C16.8838 13.877 17.29 13.9434 17.666 14.0938C18.0146 14.2363 18.2773 14.498 18.6562 14.8672C19.0439 15.3145 19.1133 15.4395 19.334 15.7734C19.5078 16.0371 19.667 16.3066 19.7754 16.6152C19.8408 16.8066 19.7559 16.9648 19.5273 17.0625Z" ></path></svg>`},google:{placements:{"chatOutput:darkMode":{filter:"brightness(500%) invert(100%) opacity(25%)"},"chatOutput:lightMode":{filter:"saturate(100%) brightness(100%) opacity(20%)"},chatSettings:{filter:"brightness(100%) drop-shadow(0 0 4px #0000007f)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="filter:${e}; ${t}" filter="${i}" viewBox="15 0 200 229" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="68" cy="39" fill="#ea4335" r="12"/><circle cx="68" cy="89" fill="#ea4335" r="12"/><circle cx="68" cy="139" fill="#ea4335" r="12"/><circle cx="68" cy="189" fill="#ea4335" r="12"/><g fill="#fbbc04"><circle cx="111" cy="14" r="14"/><circle cx="111" cy="64" r="14"/><circle cx="111" cy="114" r="14"/><circle cx="111" cy="164" r="14"/><circle cx="111" cy="215" r="14"/></g><circle cx="153.5" cy="39.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="89.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="139.5" fill="#34a853" r="16.5"/><circle cx="153.5" cy="189.5" fill="#34a853" r="16.5"/><g fill="#4285f4"><circle cx="196" cy="64" r="19"/><circle cx="25" cy="64" r="10"/><circle cx="25" cy="114" r="10"/><circle cx="25" cy="164" r="10"/><circle cx="196" cy="114" r="19"/><circle cx="196" cy="164" r="19"/></g></g></svg>`},mistral:{placements:{"chatOutput:darkMode":{filter:"brightness(500%) invert(100%) opacity(20%)"},"chatOutput:lightMode":{filter:"saturate(25%) brightness(70%) opacity(20%)"},chatSettings:{filter:"brightness(100%) scale(0.8, 0.8)",transform:"scale(0.8)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="transform:${e}; ${t}" filter="${i}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" ><path d="M189.08 303.228H94.587l.044-94.446h94.497l-.048 94.446z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M283.528 397.674h-94.493l.044-94.446h94.496l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M283.575 303.228H189.08l.046-94.446h94.496l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M378.07 303.228h-94.495l.044-94.446h94.498l-.047 94.446zM189.128 208.779H94.633l.044-94.448h94.498l-.047 94.448zM378.115 208.779h-94.494l.045-94.448h94.496l-.047 94.448zM94.587 303.227H.093l.044-96.017h94.496l-.046 96.017z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M94.633 208.779H.138l.046-94.448H94.68l-.047 94.448z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M94.68 115.902H.185L.23 19.885h94.498l-.047 96.017zM472.657 114.331h-94.495l.044-94.446h94.497l-.046 94.446zM94.54 399.244H.046l.044-97.588h94.497l-.047 97.588z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M94.495 492.123H0l.044-94.446H94.54l-.045 94.446zM472.563 303.228H378.07l.044-94.446h94.496l-.047 94.446zM472.61 208.779h-94.495l.044-94.448h94.498l-.047 94.448z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M472.517 397.674h-94.494l.044-94.446h94.497l-.047 94.446z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M472.47 492.121h-94.493l.044-96.017h94.496l-.047 96.017z" fill="#e3e3e4" fill-rule="nonzero"/><path d="M228.375 303.22h-96.061l.046-94.446h96.067l-.052 94.446z" fill="#ff7000" fill-rule="nonzero"/><path d="M322.827 397.666h-94.495l.044-96.018h94.498l-.047 96.018z" fill="#ff4900" fill-rule="nonzero"/><path d="M324.444 303.22h-97.636l.046-94.446h97.638l-.048 94.446z" fill="#ff7000" fill-rule="nonzero"/><path d="M418.938 303.22h-96.064l.045-94.446h96.066l-.047 94.446z" fill="#ff7000" fill-rule="nonzero"/><path d="M228.423 208.77H132.36l.045-94.445h96.066l-.05 94.446zM418.985 208.77H322.92l.044-94.445h96.069l-.048 94.446z" fill="#ffa300" fill-rule="nonzero"/><path d="M133.883 304.79H39.392l.044-96.017h94.496l-.049 96.017z" fill="#ff7000" fill-rule="nonzero"/><path d="M133.929 208.77H39.437l.044-95.445h94.496l-.048 95.445z" fill="#ffa300" fill-rule="nonzero"/><path d="M133.976 114.325H39.484l.044-94.448h94.497l-.05 94.448zM511.954 115.325h-94.493l.044-95.448h94.497l-.048 95.448z" fill="#ffce00" fill-rule="nonzero"/><path d="M133.836 399.667H39.345l.044-96.447h94.496l-.049 96.447z" fill="#ff4900" fill-rule="nonzero"/><path d="M133.79 492.117H39.3l.044-94.448h94.496l-.049 94.448z" fill="#ff0107" fill-rule="nonzero"/><path d="M511.862 303.22h-94.495l.046-94.446h94.496l-.047 94.446z" fill="#ff7000" fill-rule="nonzero"/><path d="M511.907 208.77h-94.493l.044-94.445h94.496l-.047 94.446z" fill="#ffa300" fill-rule="nonzero"/><path d="M511.815 398.666h-94.493l.044-95.447h94.496l-.047 95.447z" fill="#ff4900" fill-rule="nonzero"/><path d="M511.77 492.117h-94.496l.046-94.448h94.496l-.047 94.448z" fill="#ff0107" fill-rule="nonzero"/></svg>`},lmstudio:{placements:{"chatOutput:darkMode":{filter:"brightness(95%) invert(100%) opacity(30%)"},"chatOutput:lightMode":{filter:"brightness(40%) opacity(30%)"},chatSettings:{filter:"brightness(80%)",transform:"scale(0.8)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="transform:${e}; ${t}" filter="${i}" fill="#FFF" fill-rule="evenodd" style="flex:none;line-height:1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>LM Studio</title><path d="M2.84 2a1.273 1.273 0 100 2.547h14.107a1.273 1.273 0 100-2.547H2.84zM7.935 5.33a1.273 1.273 0 000 2.548H22.04a1.274 1.274 0 000-2.547H7.935zM3.624 9.935c0-.704.57-1.274 1.274-1.274h14.106a1.274 1.274 0 010 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM1.273 12.188a1.273 1.273 0 100 2.547H15.38a1.274 1.274 0 000-2.547H1.273zM3.624 16.792c0-.704.57-1.274 1.274-1.274h14.106a1.273 1.273 0 110 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM13.029 18.849a1.273 1.273 0 100 2.547h9.698a1.273 1.273 0 100-2.547h-9.698z" fill-opacity=".3" ></path><path d="M2.84 2a1.273 1.273 0 100 2.547h10.287a1.274 1.274 0 000-2.547H2.84zM7.935 5.33a1.273 1.273 0 000 2.548H18.22a1.274 1.274 0 000-2.547H7.935zM3.624 9.935c0-.704.57-1.274 1.274-1.274h10.286a1.273 1.273 0 010 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM1.273 12.188a1.273 1.273 0 100 2.547H11.56a1.274 1.274 0 000-2.547H1.273zM3.624 16.792c0-.704.57-1.274 1.274-1.274h10.286a1.273 1.273 0 110 2.547H4.898c-.703 0-1.274-.57-1.274-1.273zM13.029 18.849a1.273 1.273 0 100 2.547h5.78a1.273 1.273 0 100-2.547h-5.78z" ></path></svg>`},ollama:{placements:{"chatOutput:darkMode":{filter:"brightness(95%) invert(100%) opacity(30%)"},"chatOutput:lightMode":{filter:"brightness(40%) opacity(20%)"},chatSettings:{filter:"brightness(80%)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="transform:${e}; ${t}" filter="${i}" viewBox="-104 0 854 854" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M140.629 0.239929C132.66 1.52725 123.097 5.69568 116.354 10.845C95.941 26.3541 80.1253 59.2728 73.4435 100.283C70.9302 115.792 69.2138 137.309 69.2138 153.738C69.2138 173.109 71.4819 197.874 74.7309 214.977C75.4665 218.778 75.8343 222.15 75.5278 222.395C75.2826 222.64 72.2788 225.092 68.9072 227.789C57.3827 236.984 44.2029 251.145 35.1304 264.08C17.7209 288.784 6.44151 316.86 1.72133 347.265C-0.117698 359.28 -0.608106 383.555 0.863118 395.57C4.11207 423.278 12.449 446.695 26.7321 468.151L31.391 475.078L30.0424 477.346C20.4794 493.407 12.3264 516.64 8.52575 538.953C5.522 556.608 5.15419 561.328 5.15419 584.99C5.15419 608.837 5.4607 613.557 8.28054 630.047C11.6521 649.786 18.5178 670.689 26.1804 684.605C28.6938 689.141 34.8239 698.581 35.5595 699.072C35.8047 699.194 35.0691 701.462 33.9044 704.098C25.077 723.408 17.537 749.093 14.4106 770.733C12.2038 785.567 11.8973 790.349 11.8973 805.981C11.8973 825.903 13.0007 835.589 17.1692 851.466L17.7822 853.795H44.019H70.3172L68.6007 850.546C57.9957 830.93 57.0149 794.517 66.1487 758.166C70.3172 741.369 75.0374 729.048 83.8647 712.067L89.1366 701.769V695.455C89.1366 689.57 89.014 688.896 87.1137 685.034C85.6424 682.091 83.6808 679.578 80.1866 676.145C74.2404 670.383 69.9494 664.314 66.5165 656.835C51.4365 624.1 48.494 575.489 59.0991 534.049C63.5128 516.762 70.8076 501.376 78.4702 492.978C83.6808 487.215 86.378 480.779 86.378 474.097C86.378 467.17 83.926 461.469 78.4089 455.523C62.5932 438.604 52.8464 418.006 49.3522 394.038C44.3868 359.893 53.3981 322.683 73.8726 293.198C93.9181 264.263 122.055 245.689 153.503 240.724C160.552 239.559 173.732 239.743 181.088 241.092C189.119 242.502 194.145 242.072 199.295 239.62C205.67 236.617 208.858 232.877 212.597 224.295C215.907 216.633 218.482 212.464 225.409 203.821C233.746 193.461 241.776 186.411 254.649 177.89C269.362 168.266 286.097 161.278 302.771 157.906C308.839 156.68 311.659 156.496 323 156.496C334.341 156.496 337.161 156.68 343.229 157.906C367.688 162.872 391.964 175.5 411.335 193.399C415.503 197.261 425.495 209.644 428.683 214.794C429.909 216.816 432.055 221.108 433.403 224.295C437.142 232.877 440.33 236.617 446.705 239.62C451.671 242.011 456.881 242.502 464.605 241.214C476.804 239.13 486.183 239.314 498.137 241.766C538.841 249.98 574.273 283.512 589.966 328.446C603.636 367.862 599.774 409.118 579.422 440.626C575.989 445.96 572.556 450.251 567.591 455.523C556.863 466.986 556.863 481.208 567.53 492.978C585.062 512.165 596.035 559.367 592.724 600.99C590.518 628.453 583.468 653.035 573.782 666.95C572.066 669.402 568.511 673.57 565.813 676.145C562.319 679.578 560.358 682.091 558.886 685.034C556.986 688.896 556.863 689.57 556.863 695.455V701.769L562.135 712.067C570.963 729.048 575.683 741.369 579.851 758.166C588.863 794.027 588.066 829.704 577.767 849.995C576.909 851.711 576.173 853.305 576.173 853.489C576.173 853.673 587.882 853.795 602.226 853.795H628.218L628.892 851.159C629.26 849.75 629.873 847.604 630.179 846.378C630.854 843.681 632.202 835.712 633.306 828.049C634.348 820.325 634.348 791.881 633.306 783.299C629.383 752.158 622.823 727.454 612.096 704.098C610.931 701.462 610.195 699.194 610.44 699.072C610.747 698.888 612.463 696.436 614.302 693.677C627.666 673.448 635.88 648.008 640.049 614.415C641.152 605.158 641.152 565.374 640.049 556.485C637.106 533.559 633.551 517.988 627.666 502.234C625.214 495.675 618.716 481.821 615.958 477.346L614.609 475.078L619.268 468.151C633.551 446.695 641.888 423.278 645.137 395.57C646.608 383.555 646.118 359.28 644.279 347.265C639.497 316.798 628.279 288.845 610.87 264.08C601.797 251.145 588.617 236.984 577.093 227.789C573.721 225.092 570.717 222.64 570.472 222.395C570.166 222.15 570.534 218.778 571.269 214.977C578.687 176.296 578.441 128.053 570.656 90.3524C563.913 57.4951 551.653 31.3808 535.837 16.3008C523.209 4.28578 510.336 -0.863507 494.888 0.11731C459.456 2.20154 430.89 42.9667 419.61 107.21C417.771 117.57 416.178 129.708 416.178 133.018C416.178 134.305 415.932 135.347 415.626 135.347C415.319 135.347 412.929 134.121 410.354 132.589C383.014 116.405 352.608 107.762 323 107.762C293.392 107.762 262.986 116.405 235.646 132.589C233.071 134.121 230.681 135.347 230.374 135.347C230.068 135.347 229.822 134.305 229.822 133.018C229.822 129.585 228.167 117.08 226.39 107.21C216.152 49.5259 192.674 11.3354 161.472 1.71112C157.181 0.423799 144.982 -0.434382 140.629 0.239929ZM151.051 50.139C159.878 57.1273 169.686 77.1114 175.326 99.4863C176.368 103.532 177.471 108.191 177.778 109.907C178.023 111.563 178.697 115.302 179.249 118.183C181.64 131.179 182.743 145.217 182.866 162.32L182.927 179.178L178.697 185.43L174.468 191.744H164.598C153.074 191.744 141.61 193.216 130.637 196.158C126.714 197.139 122.913 198.12 122.178 198.304C121.013 198.549 120.829 198.181 120.155 193.154C116.538 165.875 116.722 135.654 120.707 110.52C125.12 82.5059 135.419 57.1273 145.472 49.6486C147.863 47.8708 148.292 47.9321 151.051 50.139ZM500.589 49.7098C506.658 54.1848 513.34 66.0772 518.305 81.2798C528.297 111.685 531.117 153.431 525.845 193.154C525.171 198.181 524.987 198.549 523.822 198.304C523.087 198.12 519.286 197.139 515.363 196.158C504.39 193.216 492.926 191.744 481.402 191.744H471.532L467.303 185.43L463.073 179.178L463.134 162.32C463.257 138.535 465.464 119.961 470.735 99.3024C476.314 77.1114 486.183 57.1273 494.949 50.139C497.708 47.9321 498.137 47.8708 500.589 49.7098Z" fill="#FFF"/><path d="M313.498 358.237C300.195 359.525 296.579 360.015 290.203 361.303C279.843 363.448 265.989 368.23 256.365 372.95C222.895 389.317 199.846 416.596 192.796 448.166C191.386 454.419 191.202 456.503 191.202 467.047C191.202 477.468 191.386 479.736 192.735 485.682C202.114 526.938 240.12 557.405 289.284 562.983C299.95 564.148 346.049 564.148 356.715 562.983C396.193 558.508 430.154 537.114 445.418 507.076C449.463 499.046 451.425 493.835 453.264 485.682C454.613 479.736 454.797 477.468 454.797 467.047C454.797 456.503 454.613 454.419 453.203 448.166C442.965 402.313 398.461 366.207 343.903 359.341C336.792 358.483 318.157 357.747 313.498 358.237ZM336.424 391.585C354.631 393.547 372.96 400.045 387.672 409.853C395.58 415.125 406.737 426.159 411.518 433.393C417.403 442.342 420.774 451.476 422.307 462.572C422.981 467.66 422.614 471.522 420.774 479.736C417.893 491.996 408.943 504.808 396.867 513.758C391.227 517.865 379.519 523.812 372.347 526.141C358.738 530.493 349.849 531.29 318.095 531.045C297.376 530.861 293.697 530.677 287.751 529.574C267.461 525.773 251.4 517.681 239.753 505.36C230.312 495.429 226.021 486.357 223.692 471.706C222.65 464.901 224.611 453.622 228.596 444.12C233.439 432.534 245.944 418.129 258.327 409.853C272.671 400.29 291.552 393.486 308.9 391.647C315.582 390.911 329.742 390.911 336.424 391.585Z" fill="#FFF"/><path d="M299.584 436.336C294.925 438.849 291.676 445.224 292.657 449.944C293.76 455.032 298.235 460.182 305.223 464.412C308.963 466.68 309.208 466.986 309.392 469.254C309.514 470.603 309.024 474.465 308.35 477.898C307.614 481.269 307.062 484.825 307.062 485.806C307.124 488.442 309.576 492.733 312.15 494.817C314.419 496.656 314.848 496.717 321.223 496.901C327.047 497.085 328.273 496.962 330.602 495.859C336.61 492.916 338.142 487.522 335.935 477.162C334.096 468.519 334.464 467.17 339.062 464.534C343.904 461.714 349.054 456.749 350.586 453.377C353.529 446.941 350.831 439.646 344.333 436.274C342.74 435.477 340.778 435.11 337.897 435.11C333.422 435.11 330.541 436.152 325.269 439.523L322.265 441.424L320.365 440.259C312.58 435.661 311.17 435.11 306.449 435.171C303.078 435.171 301.239 435.477 299.584 436.336Z" fill="#FFF"/><path d="M150.744 365.165C139.894 368.598 131.802 376.567 127.634 387.908C125.611 393.303 124.63 401.824 125.488 406.421C127.511 417.394 136.522 427.386 146.76 430.145C159.633 433.516 169.257 431.309 177.778 422.85C182.743 418.007 185.441 413.777 188.138 406.911C190.099 402.069 190.222 401.211 190.222 394.345L190.283 386.989L187.709 381.717C183.601 373.38 176.184 367.188 167.602 364.92C162.759 363.694 154.974 363.756 150.744 365.165Z" fill="#FFF"/><path d="M478.153 364.982C469.755 367.25 462.276 373.502 458.291 381.717L455.717 386.989L455.778 394.345C455.778 401.211 455.901 402.069 457.862 406.911C460.56 413.777 463.257 418.007 468.222 422.85C476.743 431.309 486.367 433.516 499.241 430.145C506.658 428.183 514.075 421.93 517.631 414.635C520.696 408.444 521.431 403.969 520.451 396.919C518.183 380.797 508.742 369.089 494.704 364.982C490.597 363.756 482.628 363.756 478.153 364.982Z" fill="#FFF"/></svg>`},openai:{placements:{"chatOutput:darkMode":{filter:"brightness(200%) invert(100%) opacity(15%)"},"chatOutput:lightMode":{filter:"brightness(45%) opacity(20%)"},chatSettings:{filter:"brightness(80%)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="transform:${e}; ${t}" filter="${i}" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" ><path fill="#FFF" d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/></svg>`},openrouter:{placements:{"chatOutput:darkMode":{filter:"brightness(200%) invert(100%) opacity(15%)"},"chatOutput:lightMode":{filter:"brightness(30%) opacity(15%)"},chatSettings:{filter:"brightness(80%)"}},svg:({filter:i="",transform:e="",style:t=""})=>N`<svg style="transform:${e}; ${t}" filter="${i}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff" ><g clip-path="url(#clip0_205_3)"><path d="M3 248.945C18 248.945 76 236 106 219C136 202 136 202 198 158C276.497 102.293 332 120.945 423 120.945" stroke-width="90"/><path d="M511 121.5L357.25 210.268L357.25 32.7324L511 121.5Z"/><path d="M0 249C15 249 73 261.945 103 278.945C133 295.945 133 295.945 195 339.945C273.497 395.652 329 377 420 377" stroke-width="90"/><path d="M508 376.445L354.25 287.678L354.25 465.213L508 376.445Z"/></g></svg>`}},ui=document.createElement("div"),Cl=i=>(ui.innerText=null,delete ui._$litPart$,Nt(i,ui)),hi=i=>Cl(i).parentNode.innerHTML.replace(/<![^>]+>/g,"");var Xt={},di=(i,e)=>(i in Xt||(Xt[i]=URL.createObjectURL(new Blob([e],{type:"image/svg+xml;utf8"}))),Xt[i]),Al=(i,e)=>As[i].placements[e],Ps=(i,e)=>di(i+":"+e,$l(i,e)),Pl=(i,e)=>As[i].svg(Al(i,e)),$l=(i,e)=>hi(Pl(i,e));var $s={name:"settings",state:{recentModels:{openai:U.openai.defaultModel,anthropic:U.anthropic.defaultModel,google:U.google.defaultModel,mistral:U.mistral.defaultModel,deepseek:U.deepseek.defaultModel,openrouter:U.openrouter.defaultModel,lmstudio:U.lmstudio.defaultModel,ollama:U.ollama.defaultMode},recentBaseUrls:{ollama:U.ollama.baseUrl,lmstudio:U.lmstudio.baseUrl},recentApiKeys:{openai:"",anthropic:"",google:"",mistral:"",deepseek:"",openrouter:""},recentSettings:{},players:{red:{provider:"openai",model:U.openai.defaultModel,stream:!0,temperature:1,baseUrl:U.openai.baseUrl,maxTokens:2048,contextLength:4096},black:{provider:"anthropic",model:U.anthropic.defaultModel,stream:!0,temperature:1,baseUrl:U.anthropic.baseUrl,maxTokens:2048,contextLength:4096}},ui:{saveApiKeys:!1}},reducers:{setPlayerProvider(i,{color:e,provider:t}){let r={...i.players[e],provider:t,model:i.recentModels[t]??U[t]?.defaultModel,baseUrl:i.recentBaseUrls[t]??U[t]?.baseUrl,...U[t]?.settings??{temperature:1,maxTokens:2048,contextLength:4096}};return{...i,players:{...i.players,[e]:r}}},setPlayerModel(i,{color:e,model:t}){let{provider:r}=i.players[e],n={...i.recentModels,[r]:t},s={...i.players[e],model:t};return{...i,recentModels:n,players:{...i.players,[e]:s}}},setPlayerBaseUrl(i,{color:e,baseUrl:t}){let{provider:r}=i.players[e],n={...i.recentBaseUrls,[r]:t},s={...i.players[e],baseUrl:t};return{...i,recentBaseUrls:n,players:{...i.players,[e]:s}}},setSaveApiKeys(i,{save:e}){return e?{...i,ui:{...i.ui,saveApiKeys:e}}:{...i,recentApiKeys:{},ui:{...i.ui,saveApiKeys:e}}},setPlayerSettings(i,{color:e,key:t,value:r,...n}){let s={...i.players};if(typeof t=="string")if(t in i.players[e]&&!["provider","model","baseUrl"].includes(t))s[e]={...s[e],[t]:r};else throw new Error(`Invalid setting key: ${t}`);else{let o=me(n).filter(a=>["provider","model","baseUrl"].includes(a));if(o.length)throw new Error(`Invalid setting key${o.length!==1?"s":""}: ${o.join(",")}`);s[e]={...s[e],...n}}return{...i,players:s}},setUi(i,{key:e,value:t}){return{...i,ui:{...i.ui,[e]:t}}},"session/setApiKey":(i,{provider:e,apiKey:t,...r})=>i.ui.saveApiKeys?e?{...i,recentApiKeys:{...i.recentApiKeys,[e]:t}}:(r=de(fe(r).filter(([n])=>n in U)),{...i,recentApiKeys:{...i.recentApiKeys,...r}}):i},effects:i=>({setSaveApiKeys({save:e},t){e&&i.session.sendKeys()}}),selectors:(i,e,t)=>({player(){return e(r=>r.settings,r=>n=>r.players[n])},provider(){return e(this.player,r=>n=>r(n)?.provider)},currentModel(){return e(this.player,r=>n=>r(n)?.model)},currentApiKey(){return e(this.player,r=>n=>r(n)?.apiKey)},currentBaseUrl(){return e(this.player,r=>n=>r(n)?.baseUrl)},currentSettings(){return e(this.player,r=>n=>{let{provider:s,model:o,baseUrl:a,...c}=r(n);return c})},recentModel(){return e(i,this.provider,(r,n)=>s=>r.recentModels[n(s)])},recentApiKey(r){return e(i,this.provider,(n,s)=>o=>n.recentApiKeys[s(o)]||r.apiKeys.apiKey[s(o)])},recentBaseUrl(){return e(i,this.provider,(r,n)=>s=>r.recentBaseUrls[n(s)])},recentSettings(){return e(i,this.provider,(r,n)=>s=>r.recentSettings[n(s)]??{...U[n(s)].settings}??{})},model(){return e(this.currentModel,this.recentModel,(r,n)=>s=>r(s)||n(s))},apiKey(){return e(this.currentApiKey,this.recentApiKey,(r,n)=>s=>r(s)||n(s))},baseUrl(){return e(this.currentBaseUrl,this.recentBaseUrl,(r,n)=>s=>r(s)||n(s))},settings(){return e(this.currentSettings,this.recentSettings,(r,n)=>s=>r(s)||n(s))},temperature(){return e(this.settings,r=>n=>r(n).temperature)},ui(){return e(i,r=>r.ui)},saveApiKeys(){return e(this.ui,r=>r.saveApiKeys)},canPlay({session:r}){return e(this.provider,this.baseUrl,r.apiKey,(n,s,o)=>{let a=U[n("red")],c=!a||a.apiKeyName?!o(n("red")):!s("red"),u=U[n("black")],f=!u||u.apiKeyName?!o(n("black")):!s("black");return!c&&!f})},providerLogoUrlBySideAndPlacement(){return e(i,r=>n=>s=>Ps(...s.split("/")))}})};var pi={},mi=(i,e)=>{let t=pi[i];if(t){let{mediaQueryList:o,actionTypes:a}=t;if(!(e in a)){a[e]=!0;let{matches:c}=o;fi(e,{mediaQuery:i,matches:c})}return}let r=window.matchMedia(i),n={[e]:!0};pi[i]={mediaQueryList:r,actionTypes:n};let{matches:s}=r;fi(e,{mediaQuery:i,matches:s}),r.addEventListener("change",({matches:o})=>{let{actionTypes:a}=pi[i];for(let c of me(a))fi(c,{mediaQuery:i,matches:o})})};var fi=(i,e)=>{j.dispatch({type:i,payload:e})};var Os={name:"session",state:{colorScheme:"light",reducedMotion:!1,providerLogoUrls:{},providerLogos:{},apiKeys:{openai:"",anthropic:"",google:"",mistral:"",deepseek:"",openrouter:""}},reducers:{setApiKey(i,{provider:e,apiKey:t,...r}){return e?{...i,apiKeys:{...i.apiKeys,[e]:t}}:(r=de(fe(r).filter(([n])=>n in U)),{...i,apiKeys:{...i.apiKeys,...r}})},"persist/REHYDRATE":(i,e,t)=>{if(e?.settings?.ui?.saveApiKeys){let r=de(fe(e.settings.recentApiKeys).filter(([n,s])=>n in U));return{...i,apiKeys:{...i.apiKeys,...r}}}return i},prefersReducedMotion(i,{matches:e}){return{...i,reducedMotion:e}},prefersDarkColorScheme(i,{matches:e}){return{...i,colorScheme:e?"dark":"light"}}},effects:i=>({rehydrationComplete:(e,t)=>{mi("(prefers-reduced-motion: reduce)","session/prefersReducedMotion"),mi("(prefers-color-scheme: dark)","session/prefersDarkColorScheme")},async sendKeys(e,t){i.session.setApiKey({...t.session.apiKeys})}}),selectors:(i,e,t)=>({prefersReducedMotion(){return e(i,r=>r.reducedMotion)},prefersDarkColorScheme(){return e(i,r=>r.colorScheme==="dark")},apiKeys(){return e(i,r=>r.apiKeys)},apiKey(){return e(i,r=>n=>r.apiKeys[n])},provider(){return e(i,r=>n=>r.provider[n])},apiKeyByColor(){return e(this.provider,this.apiKey,(r,n)=>s=>n(r(s)))}})};var Ol={currentMatch:xs,matches:Ss,board:Cs,settings:$s,session:Os},Ml={key:"root",storage:Ms.default.default("chatsworth"),transforms:[Rs.default.default()],whitelist:["matches","settings"]},j=In({models:Ol,plugins:[jn(),ss(Ml,{},{},Rl)]});function Rl(){j.dispatch.session.rehydrationComplete()}var Be=j.select(i=>({redTurns:i.currentMatch.redTurns,blackTurns:i.currentMatch.blackTurns,contentThread:i.currentMatch.contentThread,redThread:i.currentMatch.redThread,blackThread:i.currentMatch.blackThread,stream:i.currentMatch.stream,turn:i.currentMatch.turn,pieces:i.board.pieces,piece:i.board.piece,rank:i.board.rank,color:i.board.pieceColor,redCaptures:i.board.redCaptures,blackCaptures:i.board.blackCaptures,highlights:i.board.highlights,currentUsage:i.currentMatch.usage,usageByProvider:i.matches.usageByProvider,matches:i.matches.matches,matchesByProvider:i.matches.matchesByProvider,matchesWonByProvider:i.matches.matchesWonByProvider,matchesWonAndLostByProvider:i.matches.matchesWonAndLostByProvider,player:i.settings.player,provider:i.settings.provider,currentModel:i.settings.currentModel,currentApiKey:i.settings.currentApiKey,currentBaseUrl:i.settings.currentBaseUrl,currentSettings:i.settings.currentSettings,recentModel:i.settings.recentModel,recentApiKey:i.settings.recentApiKey,recentBaseUrl:i.settings.recentBaseUrl,recentSettings:i.settings.recentSettings,model:i.settings.model,apiKey:i.settings.apiKey,baseUrl:i.settings.baseUrl,settings:i.settings.settings,temperature:i.settings.temperature,ui:i.settings.ui,prefersReducedMotion:i.session.prefersReducedMotion,prefersDarkColorScheme:i.session.prefersDarkColorScheme,saveApiKeys:i.settings.saveApiKeys,apiKeys:i.session.apiKeys,apiKeyByProvider:i.session.apiKey,canPlay:i.settings.canPlay,providerLogoUrlBySideAndPlacement:i.settings.providerLogoUrlBySideAndPlacement})),td=j.select(i=>({providerLogoUrlBySideAndPlacement:i.settings.providerLogoUrlBySideAndPlacement}));var ks=ue`
    @media (prefers-reduced-motion: reduce) {
        :host,
        body {
            border: 1px solid red;
        }
        *,
        *::before,
        *::after {
            animation: none !important;
            transition: none !important;
            --time: 0 !important;
        }
    }

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
        --text-labels: var(--text-main);
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
        color: var(--text-labels);
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

    .square.black.highlight {
        box-shadow: 0 0 15px 2px var(--accent);
        z-index: 1;
        transform: translateZ(1px);
    }

    .square.black.highlight::after {
        position: absolute;
        content: '➠';
        font-size: var(--square-side);
        line-height: var(--square-side);
        text-align: center;
        vertical-align: middle;
        transform: translate(calc(-1 * var(--square-side)), calc(-1 * var(--square-side))) rotateZ(135deg) scale(0.8);
        z-index: 1;
        height: 100%;
        width: 100%;
        color: black;
        background-image: radial-gradient(circle, var(--accent) 0%, var(--accent) 50%, transparent 75%);
        border-radius: 50%;
        transition: transform 1s ease-in-out;
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
`;var Qt=class i{static EMPTY=".";static BLACK_PAWN="b";static BLACK_KING="B";static RED_PAWN="r";static RED_KING="R";board;isBlackTurn;constructor(e=!0){this.board=this.createInitialBoard(),this.isBlackTurn=e}createInitialBoard(){let e=Array.from({length:8},()=>Array(8).fill(i.EMPTY));for(let t=0;t<3;t++)for(let r=0;r<8;r++)(t+r)%2===0&&(e[t][r]=i.BLACK_PAWN);for(let t=5;t<8;t++)for(let r=0;r<8;r++)(t+r)%2===0&&(e[t][r]=i.RED_PAWN);return e}generateAllMoves(e=this.board,t=this.isBlackTurn){let r=[],n=t?[i.BLACK_PAWN,i.BLACK_KING]:[i.RED_PAWN,i.RED_KING];for(let o=0;o<8;o++)for(let a=0;a<8;a++){let c=e[o][a];if(n.includes(c)){let u=this.getPieceMoves(e,o,a);r.push(...u)}}return r.some(o=>o.captured.length>0)?r.filter(o=>o.captured.length>0):r}getPieceMoves(e,t,r){let n=e[t][r],s=this.findCaptures(e,t,r,n);return s.length>0?s:this.getNormalMoves(e,t,r,n)}getNormalMoves(e,t,r,n){let s=this.getDirectionsForPiece(n),o=[];for(let a of s){let c=t+a.dr,u=r+a.dc;this.isOnBoard(c,u)&&e[c][u]===i.EMPTY&&o.push({from:{row:t,col:r},to:{row:c,col:u},captured:[]})}return o}findCaptures(e,t,r,n,s=[],o=[],a={row:t,col:r}){let c=this.getDirectionsForPiece(n),u=[];for(let f of c){let v=t+f.dr,d=r+f.dc,_=t+2*f.dr,w=r+2*f.dc;if(this.isOnBoard(_,w)&&this.isEnemyPiece(n,e[v]?.[d])&&e[_][w]===i.EMPTY){let C=this.copyBoardState(e);C[t][r]=i.EMPTY,C[v][d]=i.EMPTY;let b=[...s,{row:v,col:d}],A=[...o,{row:_,col:w}],O=this.findCaptures(C,_,w,n,b,A,a);O.length>0?u.push(...O):u.push({from:{row:a.row,col:a.col},to:{row:_,col:w},captured:b,jumps:A})}}return u}getDirectionsForPiece(e){let t=[{dr:1,dc:-1},{dr:1,dc:1}],r=[{dr:-1,dc:-1},{dr:-1,dc:1}],n=[{dr:1,dc:-1},{dr:1,dc:1},{dr:-1,dc:-1},{dr:-1,dc:1}];switch(e){case i.BLACK_PAWN:return t;case i.RED_PAWN:return r;case i.BLACK_KING:case i.RED_KING:return n;default:return[]}}isOnBoard(e,t){return e>=0&&e<8&&t>=0&&t<8}isEnemyPiece(e,t){return t!==i.EMPTY&&e.toLowerCase()!==t.toLowerCase()}maybePromotePiece(e,t){return e===i.BLACK_PAWN&&t===7?i.BLACK_KING:e===i.RED_PAWN&&t===0?i.RED_KING:e}copyBoardState(e){return e.map(t=>t.slice())}parseMoveString(e){let t=e.split(/[-x]/),r=this.algebraicToRowCol(t[0]),n=this.algebraicToRowCol(t.at(-1));return{from:r,to:n,isCapture:e.includes("x")}}formatMove(e){let t=this.rowColToAlgebraic(e.from.row,e.from.col),r=this.rowColToAlgebraic(e.to.row,e.to.col);if(!e.captured||e.captured.length===0)return`${t}-${r}`;let n=t;if(e.jumps)for(let s of e.jumps)n+="x"+this.rowColToAlgebraic(s.row,s.col);else n+="x"+r;return n}applyMove(e){let t=this.parseMoveString(e),n=this.generateAllMoves().find(a=>{let c=a.from.row===t.from.row&&a.from.col===t.from.col,u=a.to.row===t.to.row&&a.to.col===t.to.col;return t.isCapture?c&&u&&a.captured.length>0:c&&u});if(!n)throw new Error(`Illegal move: ${e}`);let s=this.board[n.from.row][n.from.col];this.board[n.from.row][n.from.col]=i.EMPTY;for(let a of n.captured)this.board[a.row][a.col]=i.EMPTY;let o=this.maybePromotePiece(s,n.to.row);return this.board[n.to.row][n.to.col]=o,this.isBlackTurn=!this.isBlackTurn,n.captured.map(a=>this.rowColToAlgebraic(a.row,a.col))}isGameOver(){return this.generateAllMoves(this.board,this.isBlackTurn).length===0}algebraicToRowCol(e){let t=e[0].toUpperCase(),r=parseInt(e.slice(1),10),n=t.charCodeAt(0)-65;return{row:r-1,col:n}}rowColToAlgebraic(e,t){let r=String.fromCharCode(65+t),n=e+1;return`${r}${n}`}printBoard(){let e=["```\n  ABCDEFGH. \n +--------+ "];for(let t=7;t>=0;t--)e.push(`${t+1}|${this.board[t].join("")}|${t+1}`);return e.push(" +--------+ \n  ABCDEFGH. \n```"),e.join(`
`)}async play(e,t,r){for(this.isBlackTurn=!0;!this.isGameOver();){let s=await(this.isBlackTurn?e:t).makeMove(this.board,this.isBlackTurn);this.applyMove(s)}}};async function*Ts(i,e){try{let t,r="";for(;;){let{done:n,value:s}=await i.read();if(n)throw new Error("Unexpected end of Server-Sent Event stream");for(r+=e?e.decode(s,{stream:!0}):s;r.length>0;){let[o,a,c,u="",f]=r.match(/^(?::(?<comment>[^\n]*)|(?<name>[^:\n]+)(?::\s*(?<value>[^\n]*))?|(?<emptyLine>))\n/)??[];if(!o){let v=r.indexOf(`
`);if(v>-1)throw new Error(`Invalid Server-Sent Event stream: ${r.slice(0,v+1)}`);break}if(r=r.slice(o.length),f==="")t&&(yield t,t=void 0);else if(c){if(c==="data"&&u.match(/\[DONE\]/)||c==="event"&&u==="message_stop")return;t??={},t[c]=u}else a!=null}}}catch(t){let r=new Error(`Error parsing Server-Sent Event stream: ${t.message}`);throw r.cause=t,r}}var er=class extends EventTarget{constructor(e={}){super(),this.config={apiKey:e.apiKey,provider:e.providerId?.toLowerCase()||"openai",model:e.model,baseUrl:e.baseUrl,maxTokens:e.maxTokens,temperature:e.temperature||1,stream:e.stream||!1,anthropicVersion:e.anthropicVersion||"2023-06-01",role:e.role},this.dispatch=e.dispatch;let t=U[this.config.provider];if(!t)throw new Error(`Unknown provider: ${this.config.provider}`);this.handler=new t.handler(this.config),this.url=this.handler.formatUrl(`${e.baseUrl??t.baseUrl}`),this.conversation=[],this.model=this.config.model,this.usage={input_tokens:0,output_tokens:0}}addMessage(e,t,r,n={}){this.conversation.push({role:e,content:t,message:r,metadata:n})}clearConversation(){this.conversation=[]}getConversation(){return[...this.conversation]}sendRequest(e,t,r){try{let n=this.getConversation();n.length>8&&n.splice(4,n.length-8),n.push({role:"user",content:e});let s=this.handler.createRequestPayload(n);this.addMessage("user",e,s,{});let o=JSON.stringify(s),a=this.handler.getHeaders();return{responsePromise:fetch(this.url,{method:"POST",headers:a,body:o}),request:{body:s,headers:a,content:e}}}catch(n){throw console.error("Error making chat completion:",n),n}}async receiveResponse(e,t){try{let r=await e,n=this.extractRateLimitHeaders(r);if(!r.ok){let v=await r.text();throw r.status===429?new Error(`API rate limit exceeded: ${v}

${n}`):new Error(`API request failed: ${r.status} - ${v}`)}if(!t){let v=await r.json(),{content:d,message:_,usage:w}=this.handler.handleResponseJson(v);return this.addMessage("assistant",d,_,{usage:w}),{content:d,message:_,usage:w,timing:[]}}if(!r.body)throw new Error("ReadableStream not supported");let s=r.body.getReader(),o=new TextDecoder,a="",c=[],u={};for await(let v of Ts(s,o)){let{partialReasoningContent:d,partialContent:_,parsed:w,message:C}=this.handler.parseStreamChunk(v,u);_?(a+=_,t({content:_})):d&&t({reasoning:d}),u=C,c.push(w)}return this.addMessage("assistant",a,u,{streamData:c}),{content:a,message:u,usage:u.usage}}catch(r){throw console.error("Error in chat completion:",r),r}}setOptions(e={}){Object.assign(this.config,e);let t=U[this.config.provider];t&&(this.url=t.url,this.handler=new t.handler(this.config))}extractRateLimitHeaders(e){return this.handler.extractRateLimitHeaders(e)}};var tr=class extends er{side;constructor(e,t){super(t),this.side=e,this.usage={input_tokens:0,output_tokens:0}}getMoveSchema(e=[]){return{name:"CheckersMove",description:"Take your turn at checkers",strict:!0,schema:{type:"object",required:["comment","move","captureFlair"],properties:{captureFlair:{enum:["jump","flip","spiral","back flip","double flip","triple flip","double back flip","triple back flip","double spiral","triple spiral"],type:"string"},comment:{type:"string"},move:{enum:e,type:"string"}},additionalProperties:!1}}}async sendMessage(e,t,r,n){this.config.responseFormat={type:"json_schema",json_schema:e};let{request:s,responsePromise:o}=this.sendRequest(t,r,n);j.dispatch.currentMatch.turnRequest({date:Date.now(),side:this.side,request:s,matchId:r,turnNum:n});let a=s.body.stream?({content:v,reasoning:d})=>d?j.dispatch.currentMatch.reasoningStream(d):j.dispatch.currentMatch.parseStream(v):void 0,c=await this.receiveResponse(o,a);c.content=JSON.parse(c.content);let{move:u,captures:f}=c.content;return j.dispatch.currentMatch.turnResponse({move:u,captures:f,response:c,matchId:r,turnNum:n}),c}};var kl=`Standard Checkers Rules:
Movement
\u2022 Pawns: one square diagonally forward only
\u2022 Kings: one square diagonally any direction
\u2022 Black advance to row 8
\u2022 Red advance to row 1
Captures
\u2022 Mandatory when possible
\u2022 Jump over enemy to empty square
\u2022 Pawns capture forward only
\u2022 Kings capture any direction
\u2022 Multiple jumps required if possible
Kings
\u2022 Pawn promotes upon reaching opposite end
\u2022 Black kings at row 8; Red kings at row 1
Notation
\u2022 Pawns: r = red, b = black, Kings: R and B
\u2022 Columns A-H, rows 1-8
\u2022 Moves: "A3-B4"
\u2022 Captures: "A3xC5"
\u2022 Multiple captures: "A1xC3xE1"
Winning
\u2022 Win by capturing and/or blocking all opponent moves

`;async function zs(i,e,{throttleMs:t=2500}={}){let r=new Qt(e[0].side==="black"),n=[],s=0,o=3,a="";try{for(let u=0;;u++){let f=Date.now(),v=f-s;v<t&&await new Promise(D=>setTimeout(D,t-v)),s=f,await i.wait;let d=u%2,_=e[d],w=e[(d+1)%2],C=_.side,b=r.generateAllMoves().map(D=>r.formatMove(D)),A=_.getMoveSchema(b),O=b.some(D=>D.includes("x"));O||(delete A.schema.properties.captureFlair,A.schema.required=me(A.schema.properties));let I=c(u,w,O,C,b),E=await _.sendMessage(A,I);await i.wait;let $=E.content;n.push({date:Tl(new Date),turn:u,color:C,schema:A,message:I,response:$});let x=$.move.toUpperCase().replace(/X/g,"x"),k=$.captureFlair;if(A.schema.properties.move.enum.includes(x)){o=3,a="";let D=r.applyMove(x);if(console.log(D),await i.movePiece(x,k),r.isGameOver())return{winner:C,history:n,board:r.printBoard()};Il(r.copyBoardState(r.board),j.select.board.pieces(j.getState()))}else{if(u--,o--,o===0)return{winner:e[(d+1)%2].side,history:n,board:r.printBoard()};a=`Invalid move: "${x}". Please try again.
`}}}catch(u){return console.error(u),{winner:"Error",history:n,board:r.printBoard(),error:u.message}}function c(u,f,v,d,_){let w=n.at(-1)?.response,C=w?.move,b=C?.split("x").length-1,A=u>1?"":`${kl}Your opponent today is "${f.model}".

`,O=v?"Captures are done with flair. Choose from flips, spirals, and twirls, doubles and triples, and backwards even.":"",I=C?`Your opponent just moved ${C}${b?`, capturing ${b} of your pieces with a ${w.captureFlair}! `:". "}`:"",E=`Your pieces are ${d} and it's your turn to move. Here's the board state after ${u} move${u!==1?"s":""}:

${r.printBoard()}

`,$="Feel free to trash talk your opponent, use emojis, etc.  ",x=`Choose from these moves: ${_}`;return[A,a,I,E,$,O,x].join("")}}var Tl=i=>new Date(i.getTime()-i.getTimezoneOffset()*60*1e3).toISOString().slice(0,-1),Is={r:"a red pawn",R:"a red king",b:"a black pawn",B:"a black king",".":"an empty square"};function Il(i,e){for(let[t,r]of[..."ABCDEFGH"].entries())for(let[n,s]of[..."12345678"].entries()){let o=Is[i[n][t]],a=Is[e[r+s]?.[0]??"."];o!==a&&console.error(`Game board crosscheck sees a mismatch at ${r}${s}: game sees ${o}, whereas the UI shows ${a}`)}}var rr=ue`
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

        /* border-image: radial-gradient(
            www circle,
            rgba(255, 222, 101, 0) 90%,
            rgba(255, 222, 101, 1) 95%,
            rgba(255, 222, 101, 0) 100%
        );
        background-position: center center;
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 10% 10%; */
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

    :host([perspective]) .piece.king {
        box-shadow: 14px -6px 4px 6px #0002;
    }
    :host([perspective]) .piece.king.red::before {
        box-shadow: -14px 6px 2px 3px #0002;
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
        48% {
            transform: translate3d(
                    calc(1.1 * var(--move-dx) * var(--square-side)),
                    calc(-1.1 * var(--move-dy) * var(--square-side)),
                    calc(((var(--trick-count, 0) / 6) + 1.5) * var(--jump-z))
                )
                var(--jump-rotation-a, rotate(0));
        }

        50% {
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
            calc(var(--move-dx)),
            var(--move-dy),
            0,
            calc(-1 * var(--trick-dir, 1) * var(--trick-count, 1) * 160deg)
        );
        --jump-rotation-b: rotate3d(
            calc(var(--move-dx)),
            var(--move-dy),
            0,
            calc(-1 * var(--trick-dir, 1) * var(--trick-count, 1) * 360deg)
        );
    }

    .twirl.piece {
        --jump-rotation-a: rotate3d(0, 0, 1, calc(var(--trick-dir, 1) * var(--trick-count, 1) * 180deg));
        --jump-rotation-b: rotate3d(0, 0, 1, calc(var(--trick-dir, 1) * var(--twirl-count, 1) * 360deg));
    }
`;var gi=class{constructor(e){this.style=e}get(e){return this.style.getPropertyValue(e)}set(e,t){this.style.setProperty(e,t)}delete(e){this.style.removeProperty(e)}append(e,t){this.style.setProperty(e,t)}clear(){this.style.cssText=""}get size(){return this.style.length}getAll(e){return[this.style.getPropertyValue(e)]}has(e){return this.style.getPropertyValue(e)!==""}forEach(e){for(let t=0;t<this.style.length;t++){let r=this.style[t],n=this.style.getPropertyValue(r);e(n,r,this.style)}}keys(){return this.style}values(){return Array.from(this.style).map(e=>this.style.getPropertyValue(e))}entries(){return Array.from(this.style).map(e=>[e,this.style.getPropertyValue(e)])}};try{CSSStyleRule.prototype.styleMap===void 0&&Object.defineProperty(CSSStyleRule.prototype,"styleMap",{get(){return new gi(this.style)}})}catch{}var vi=se(class extends le{constructor(i){if(super(i),i.type!==ie.PROPERTY&&i.type!==ie.ATTRIBUTE&&i.type!==ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===W||e===B)return e;let t=i.element,r=i.name;if(i.type===ie.PROPERTY){if(e===t[r])return W}else if(i.type===ie.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return W}else if(i.type===ie.ATTRIBUTE&&t.getAttribute(r)===e+"")return W;return Lt(i),e}});var yt=(i,e)=>{let t=i._$AN;if(t===void 0)return!1;for(let r of t)r._$AO?.(e,!1),yt(r,e);return!0},ir=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},Ds=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Nl(e)}};function zl(i){this._$AN!==void 0?(ir(this),this._$AM=i,Ds(this)):this._$AM=i}function Dl(i,e=!1,t=0){let r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(r))for(let s=t;s<r.length;s++)yt(r[s],!1),ir(r[s]);else r!=null&&(yt(r,!1),ir(r));else yt(this,i)}var Nl=i=>{i.type==ie.CHILD&&(i._$AP??=Dl,i._$AQ??=zl)},We=class extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Ds(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(yt(this,e),ir(this))}setValue(e){if(jt(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Re=()=>new _i,_i=class{},yi=new WeakMap,ke=se(class extends We{render(i){return B}update(i,[e]){let t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=i.options?.host,this.rt(this.ct=i.element)),B}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,t=yi.get(e);t===void 0&&(t=new WeakMap,yi.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){return typeof this.Y=="function"?yi.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ns=ue`
    :host {
        --piece-z: 13px;
        --hero-size: calc(var(--aside-width) / 3.5);
        --hero-piece-size: 100%;
        --square-side: calc(var(--hero-size) * 0.6 / 0.86);
        --select-arrow-url: var(--select-arrow-url-light, none);
        perspective: 800px;
        background-color: var(--bg-main);
        transition: background-color 333ms ease-in-out;
    }

    @media (prefers-color-scheme: dark) {
        :host {
            --select-arrow-url: var(--select-arrow-url-dark, none);
        }
    }

    .hero {
        position: absolute;
        top: 11px;
        right: 13px;
        width: var(--hero-size);
        aspect-ratio: 1;
        perspective-origin: calc(100% - var(--hero-size) / 2) calc(var(--hero-size) / 2);
        pointer-events: none;
    }

    .hero .piece {
        height: var(--hero-piece-size, 100%);
        width: var(--hero-piece-size, 100%);
        aspect-ratio: 1;
        position: absolute;
        opacity: 1;
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        transform-origin: center center;
    }
    .hero .piece.red.king::before {
        transform: rotate(0) translateZ(calc(2 * var(--piece-z)));
    }

    .hero .piece::before {
        background: var(--provider-logo-url) no-repeat center / contain;
    }

    form:focus-within + .hero,
    form:hover + .hero {
        z-index: -1;
    }
    form:not(:focus-within):hover + .hero > .piece {
        animation: spin 1.25s cubic-bezier(0, 0.46, 0.36, 0.92) 100ms forwards;
    }

    @keyframes spin {
        0% {
            transform: translateX(0px) rotateY(0deg);
            filter: blur(0);
        }
        15% {
            transform: translateX(30px) rotateY(1200deg);
            filter: blur(2px);
        }
        85% {
            transform: translateX(5px) rotateY(4096deg);
            filter: blur(2px);
        }
        100% {
            transform: translateX(0px) rotateY(4320deg);
            filter: blur(0px);
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
        position: relative;
        display: grid;
        grid-template-rows: repeat(4, min-content);
        grid-template-columns: 1fr;
        align-items: baseline;
        height: 110px;
        width: calc(100% - 4px);
        border: 2px solid transparent;
        transition:
            width 333ms ease-in-out,
            height 333ms ease-in-out 333ms;
        text-overflow: ellipsis;
        background-color: var(--bg-chat);
    }
    :host(:hover) form,
    form:has(*:focus-visible),
    form:has(*:focus-within),
    form:has(*:active) {
        grid-template-rows: repeat(9, min-content);
        /* background-color: rgba(from var(--bg-user) r g b / 0.25); */
        background-color: transparent;
        height: auto;
        input::placeholder {
            opacity: 1;
        }
        input[type='text'],
        input[type='password'],
        input[type='number'] {
            border-color: var(--border-color);
            background-color: var(--input-bg);
        }
        select {
            width: 100%;
            border: 1px solid var(--border-color);
            background: var(--input-bg) var(--select-arrow-url) no-repeat 100% center;
        }
    }
    label {
        color: var(--accent);
        margin: 3px;
        margin-top: 5px;
        text-align: left;
        line-height: 1.6;
        white-space: nowrap;
        grid-column: 1;
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
    @media (max-width: 1280px) {
        :host {
            --hero-size: calc(var(--aside-width) / 4.5);
        }
    }
    @media (max-width: 1024px) {
        form {
            height: 40px;
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
            /* grid-auto-rows: minmax(1.5em, auto); */
            grid-template-columns: min-content 1fr;
        }
        label {
            text-align: left;
        }
    }

    @media (max-width: 640px) {
        :host {
            --hero-size: calc(var(--aside-width) / 4.5);
        }
        form {
            grid-template-columns: 1fr;
            /* grid-auto-rows: minmax(1.5em, auto); */
        }
        label {
            text-align: left;
        }
    }

    input[type='checkbox']:checked {
        color: white;
    }
    @media (prefers-color-scheme: dark) {
        input[type='checkbox']:checked {
            color: black;
        }
    }
    input[type='checkbox'] {
        appearance: none;
        accent-color: var(--accent);
        background-color: rgb(221, 221, 221);
        border-radius: 3px;
        border: 1px solid var(--border-color);
        vertical-align: middle;
        margin-right: 3px;
        position: relative;
        display: inline-block;
        height: 1em;
        aspect-ratio: 1;
    }
    input[type='checkbox']:checked::after {
        content: '✓';
        position: absolute;
        font-family: system-ui;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        background-color: var(--accent);
        accent-color: var(--accent);
    }
    input[type='text'],
    input[type='password'],
    input[type='number'] {
        background-color: transparent;
        /* background-color: rgba(from var(--input-bg) r g b / 0.5); */
        border: 1px solid transparent;
        color: var(--text-main);
        border-radius: 4px;
        vertical-align: baseline;
        font-size: 0.9em;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: auto;
    }

    select {
        position: relative;
        width: 93%;
        appearance: none;
        background-color: transparent;
        /* background-color: rgba(from var(--input-bg) rgb / 0.5); */
        color: var(--text-main);
        font-size: 1em;
        border-radius: 4px;
        border: 1px solid transparent;
        padding: 3px 0.5em;
        text-overflow: ellipsis;
        transition:
            border 333ms ease-in-out,
            background-color 333ms ease-in-out;
    }

    input::placeholder {
        opacity: 0;
        transition: opacity 333ms ease-in-out;
    }
    .labelFollowsInput {
        display: inline-block;
    }
    input[type='number'] {
        width: 100%;
        border-radius: 4px;
        -moz-appearance: textfield;
    }
    input[type='number']::-webkit-inner-spin-button {
        display: none;
    }
    input[name='apiKey'],
    input[name='baseUrl'] {
        width: calc(100% - 10px);
    }
    input[type='range'] {
        accent-color: var(--accent);
    }

    fieldset {
        grid-column: 1;
        display: flex;
        border: none;
        padding: 0;
    }

    fieldset.belowRelatedField {
        margin-top: 0;
        input,
        label {
            margin-top: 0;
        }
    }
    fieldset.rangeWithInput {
        input[type='number'] {
            flex-grow: 0;
            width: 3em;
            margin-right: 0.5em;
            padding-inline: 0.5em;
        }

        input[type='range'] {
            flex-grow: 1;
            width: calc(100% - 4em);
            margin-right: 0.5em;
        }
    }

    .dragover {
        border-color: var(--accent);
        border-style: dashed;
        border-width: 2px;
    }
`;var bi=class i extends je(j)(re){static styles=[Ns,rr];static properties={providerId:{type:String,attribute:"provider",reflect:!0},provider:{type:Object,attribute:!1},providerLogoUrl:{type:String},apiKey:{type:String},saveApiKeys:{type:Boolean},showApiKey:{type:Boolean},model:{type:String,attribute:!0,reflect:!0},baseUrl:{type:String,attribute:!0},temperature:{type:Number,attribute:!0},side:{type:String,attribute:!0},store:{type:Object}};constructor(){super(),this.showApiKey=!1,this.formRef=Re(),this.side="",this.store=null,customElements.whenDefined("modal-dialog").then(e=>this.modal=document.querySelector("modal-dialog")),customElements.whenDefined("notification-dialog").then(e=>this.notify=document.querySelector("notification-dialog"))}stateChanged(e){let t=Be(e);this.providerId=t.provider(this.side),this.model=t.model(this.side),this.baseUrl=t.baseUrl(this.side),this.temperature=t.temperature(this.side),this.provider=U[this.providerId],this.apiKey=t.apiKeyByProvider(this.providerId),this.saveApiKeys=t.saveApiKeys,this.prefersDarkMode=t.prefersDarkColorScheme,this.providerLogoUrl=t.providerLogoUrlBySideAndPlacement(e)((this.providerId??"")+"/chatSettings"),this.renderCssVariables()}firstUpdated(){this.forms=this.initializeForm(),this.providerId??="openai",this.provider=U[this.providerId],this.baseUrl=this.provider.baseUrl}initializeForm(){let e=this.formRef.value;return e.addEventListener("dragover",t=>this.dragover(t)),e.addEventListener("dragleave",t=>this.dragleave(t)),e.addEventListener("drop",t=>this.drop(t)),e.addEventListener("beforeinput",t=>{if(t.inputType==="insertFromPaste"){let r=t.dataTransfer?.getData("text/plain")||t.data;r.match(/\n/)?this.processEnvText(r):t.target.value=r,t.preventDefault()}}),e}dragover(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.classList.add("dragover")}dragleave(e){e.stopPropagation(),e.currentTarget.classList.remove("dragover")}drop(e){if(e.dataTransfer.files?.length){let t=e.dataTransfer.files[0],r=new FileReader;r.onload=n=>{let s=n.target.result;this.processEnvText(s)},r.readAsText(t),e.preventDefault(),e.stopPropagation()}e.currentTarget.classList.remove("dragover")}processEnvText(e){let t=Gt(U,({apiKeyName:o})=>o),r=Oe`${fe(t).filter(([o,a])=>!!a).map(([o,a])=>Oe`^${a}=(?<${o}>[^\n]*)$`).flatMap((o,a,c)=>[o,"|"]).slice(0,-1)}${"/gm"}`,n=de([...e.matchAll(r)].flatMap(o=>o.groups?fe(o.groups).filter(([a,c])=>!!c):[]));j.dispatch.session.setApiKey(n);let s=me(n).length;if(s){let o=s===1;this.notify.show({title:s+" API keys found",content:N`API key${o?"":"s"} have been set for: ${me(n).join(", ")}.`,autoDismiss:5e3})}}static modals={saveApiKeys:{title:"Save API Keys Warning",content:N`This feature will save your API keys in local storage. Do not use this feature on a shared
            computer.`,actions:[N`<button class="primary" value="confirmed">Confirm</button>`,N`<button value="canceled">Cancel</button>`]},expandedSettingsForm:{title:"Settings",content:N``,actions:[N`<button class="primary" value="saved">Save</button>`,N`<button value="canceled">Cancel</button>`]}};async saveApiKeysChanged(e){if(e.stopPropagation(),e.target.checked){let r=await this.modal.show(i.modals.saveApiKeys)==="confirmed";r&&j.dispatch.settings.setSaveApiKeys({save:!0}),this.requestUpdate("saveApiKeys",!r)}else j.dispatch.settings.setSaveApiKeys({save:!1})}showApiKeyChanged(e){this.showApiKey=e.target.checked,this.requestUpdate("showApiKey",!this.showApiKey),e.stopPropagation()}initializeStyles(){let e=new CSSStyleSheet;e.insertRule(":host {}"),this.shadowRoot.adoptedStyleSheets.push(e);let t=e.cssRules[0],r=t.styleMap,n=getComputedStyle(this);r.parentRule=t;let[s,o]=["--c200","--c700"].map(a=>n.getPropertyValue(a)).map(a=>[a,Ut("dropdown",{size:"24px",fill:a})]).map(([a,c])=>di(`selectArrow${a}`,hi(c)));return r.set("--select-arrow-url-dark",`url("${s}")`),r.set("--select-arrow-url-light",`url("${o}")`),r}renderCssVariables(){this.hostStyleMap||(this.hostStyleMap=this.initializeStyles());let e=[["--provider-logo-url",`url("${this.providerLogoUrl}")`]],t=!1;for(let[n,s]of e){let o=this.hostStyleMap.get(n);o?.toString()===s?.toString()||Array.isArray(o)&&o.join("")===s?.toString()||(this.hostStyleMap.set(n,s),t=!0)}if(t){var r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(r){let n=this.hostStyleMap.parentRule.parentStyleSheet;n.replaceSync([...n.cssRules].map(s=>s.cssText).join(`
`)),this.hostStyleMap=n.cssRules[0].styleMap,this.hostStyleMap.parentRule=n.cssRules[0]}this.requestUpdate()}}addCssRule(e){let t=this.hostStyleMap.parentRule.parentStyleSheet,r=t.insertRule(`${e} {}`,t.cssRules.length),n=t.cssRules[r],s=n.styleMap;return s.parentRule=n,s}renderProviderSelect(e,t){return N`
            <label for="${t}_provider">Provider</label>
            <select
                id="${t}_provider"
                name="provider"
                @change=${r=>j.dispatch.settings.setPlayerProvider({color:t,provider:r.target.value})}
                value="${e}"
            >
                ${me(U).map(r=>N`<option ?selected=${e===r} value="${r}">${r}</option>`)}
            </select>
        `}renderModelSelect(e,t,r){return N`
            <label for="${this.side}_aiModel">Model</label>
            <select
                id="${this.side}_aiModel"
                name="aiModel"
                @change=${n=>j.dispatch.settings.setPlayerModel({color:this.side,model:n.target.value})}
                value="${this.model}"
            >
                ${this.provider?.models.map(n=>N`<option ?selected=${this.model===n} value="${n}">${n}</option>`)}
            </select>
        `}renderApiKeyInput(){return N`
            <label for="${this.side}_apiKey" class="secondary" ?disabled=${!("apiKeyName"in(this.provider??{}))}
                >API Key</label
            >
            <input
                class="secondary"
                type="${this.showApiKey?"text":"password"}"
                name="apiKey"
                id="${this.side}_apiKeys"
                .value="${this.apiKey??""}"
                placeholder="Enter API key for ${this.provider?.name??""} ..."
                ?disabled=${!("apiKeyName"in(this.provider??{}))}
                @change="${e=>j.dispatch.session.setApiKey({provider:this.providerId,apiKey:e.target.value})}"
                title="${this.provider?.name?`Enter your ${this.provider?.name} API key here, or drop your .env file here and your API keys will be extracted.`:""}"
            />
            <fieldset class="belowRelatedField secondary">
                <label
                    class="labelFollowsInput secondary"
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    for="${this.side}_saveApiKeys"
                    ><input
                        id="${this.side}_saveApiKeys"
                        name="saveApiKeys"
                        type="checkbox"
                        ?disabled=${!("apiKeyName"in(this.provider??{}))}
                        .checked=${vi(this.saveApiKeys)}
                        @change=${this.saveApiKeysChanged}
                    />Save keys</label
                ><label
                    class="labelFollowsInput secondary"
                    ?disabled=${!("apiKeyName"in(this.provider??{}))}
                    for="${this.side}_showApiKey"
                    ><input
                        id="${this.side}_showApiKey"
                        name="showApiKey"
                        type="checkbox"
                        ?disabled=${!("apiKeyName"in(this.provider??{}))}
                        .checked=${vi(this.showApiKey)}
                        @change=${this.showApiKeyChanged}
                    />Show key</label
                >
            </fieldset>
        `}renderBaseUrlInput(){return N` <label for="${this.side}_baseUrl" class="secondary" ?disabled=${!this.provider?.configurableUrl}
                >Base URL</label
            >
            <input
                type="text"
                id="${this.side}_baseUrl"
                ,
                name="baseUrl"
                class="secondary"
                .value="${this.baseUrl??this.provider?.baseUrl}"
                placeholder="Enter Base URL..."
                ?disabled=${!this.provider?.configurableUrl}
                @change=${e=>j.dispatch.settings.setPlayerModel({color:this.side,baseUrl:e.target.value})}
            />`}renderTemperatureInput(){return N` <label for="${this.side}_temperature" class="secondary"><abbr>Temp</abbr>&#8203;erature</label>
            <fieldset class="secondary rangeWithInput">
                <input
                    type="number"
                    min="0"
                    max="1"
                    step="0.05"
                    id="${this.side}_temperature"
                    class="secondary"
                    .value="${this.temperature}"
                    @change=${e=>j.dispatch.settings.setPlayerSettings({color:this.side,temperature:Number(e.target.value)})}
                />
                <input
                    id="${this.side}_temperature_slider"
                    name="temperature"
                    class="secondary"
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    .value="${this.temperature}"
                    @input=${e=>j.dispatch.settings.setPlayerSettings({color:this.side,temperature:Number(e.target.value)})}
                />
            </fieldset>`}render(){return N`
            <form ${ke(this.formRef)}>
                ${this.renderProviderSelect(this.providerId,this.side)}
                ${this.renderModelSelect(this.model,this.providerId,this.side)}
                ${this.provider?.apiKeyName?this.renderApiKeyInput():this.renderBaseUrlInput()}
                ${this.renderTemperatureInput()}
            </form>
            <div class="hero">
                <div class="piece ${this.side} pawn"></div>
            </div>
        `}};customElements.get("chat-settings")||customElements.define("chat-settings",bi);var _t=class extends le{constructor(e){if(super(e),this.it=B,e.type!==ie.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this._t=void 0,this.it=e;if(e===W)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};_t.directiveName="unsafeHTML",_t.resultType=1;var wi=se(_t);var js=ue`
    :host {
        /* --bg-image: var(--bg-image-light-mode); */
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        overflow-x: visible;
        height: 100%;
        padding-top: 10px;
        transition: height 1s ease;
    }

    /* @media (prefers-color-scheme: dark) {
        :host {
            --bg-image: var(--bg-image-dark-mode);
        }
    } */

    /* allow first few chats to remain pinned at bottom while virtual scrolling fills up */
    .flex-pinned.scroll {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .scroll {
        position: relative;
        flex: 1;
        overflow-y: auto;
        margin: 10px 20px;
        box-shadow: 0 0 0 1px var(--border-color);
        border-radius: 5px;
        border: 14px solid var(--bg-chat);
        border-top: 0;
        background: var(--bg-chat) var(--bg-image) 50% 50% / contain scroll no-repeat;
        --theta: mod(var(--time) / 500, 2 * pi);
        --glow-x: cos(var(--theta));
        --glow-y: sin(var(--theta));
        opacity: 1;
        transition:
            background-image 2s ease-in-out,
            background-color 2s ease-in-out,
            background-position 750ms ease-in-out,
            opacity 750ms ease-in-out;
    }

    :host([intro]) .scroll {
        opacity: 0;
        background: linear-gradient(rgb(from var(--bg-chat)) r g b / 0) 50% bottom / contain scroll no-repeat;
    }

    @media (prefers-color-scheme: dark) {
        :host([intro]) .scroll {
            background: linear-gradient(rgb(from var(--bg-chat)) r g b / 1) 50% 0% / contain scroll no-repeat;
        }
    }

    :host([playing]) .scroll {
        box-shadow: calc(3px * var(--glow-x)) calc(3px * var(--glow-y)) 6px 3px var(--accent);
    }

    .scroll::before {
        content: '';
        height: 50px;
        min-height: 50px;
        background-repeat: no-repeat;
        background-color: transparent;
        background-position: center top;
        background-size: 100% 50px;
        background-image: linear-gradient(to bottom, var(--bg-main), rgba(from var(--bg-main) r g b / 0));
        display: block;
        position: sticky;
        z-index: 1;
        top: 0px;
        left: 0px;
        right: 0px;
        /* transition: height 2s ease-in-out 3s; */
    }

    .scroll lit-virtualizer.chats {
        padding: 0;
        width: 100%;
        height: fit-content;
        overflow-x: hidden;
        background-color: transparent;
        flex: 0 1 auto;
    }

    /* while the scroller is flex-pinned, the ::before pseudo-element is also pinned and the gradient scrolls over the backgroud.
     turn off the gradient until the scroller is no longer flex-pinned. */
    div.scroll.flex-pinned::before {
        background-image: none;
        height: 0;
    }

    .chatEntry {
        justify-self: flex-end;
        font-size: 1.1rem;
        width: 100%;
        min-height: 36px;
        padding: 8px;
        margin-block: 2px;
        color: var(--text-main);
        background-color: var(--bg-user);
        border-radius: 4px;
        cursor: pointer;
        transition: color 1s ease-out;
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
        /* display: none; */
        font-style: italic;
        font-weight: 200;
    }

    .chatEntry .moveAndCaptures {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 6px;
        background-color: #aeaca9;
        color: var(--text-inverse);
        padding: 2px;
        margin-block: 5px;
        font-weight: bold;
        font-size: 0.85em;
    }

    .chats .active.chatEntry > *:last-child::after {
        content: '      ';
        display: inline;
        animation: throb 1s infinite;
        font-weight: bold;
        vertical-align: bottom;
        font-size: 1.25em;
        line-height: 1;
        filter: blur(1.15px);
    }

    .usage {
        flex-shrink: 0;
        display: block;
        position: relative;
        font-size: 12px;
        color: var(--text-main);
        background-color: var(--bg-user);
        white-space: nowrap;
        margin-bottom: 10px;
        width: 100%;
        text-align: center;
        border-radius: 0 0 6px 6px;
    }

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
`;function Ye(i,e,t,r){var n=arguments.length,s=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(n<3?o(s):n>3?o(e,t,s):o(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}var jl={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:Mt},Ll=(i=jl,e,t)=>{let{kind:r,metadata:n}=t,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,i),r==="accessor"){let{name:o}=t;return{set(a){let c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){let{name:o}=t;return function(a){let c=this[o];e.call(this,a),this.requestUpdate(o,c,i)}}throw Error("Unsupported decorator location: "+r)};function Ge(i){return(e,t)=>typeof t=="object"?Ll(i,e,t):((r,n,s)=>{let o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,e,t)}var Ze=class i extends Event{constructor(e){super(i.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};Ze.eventName="rangeChanged";var Je=class i extends Event{constructor(e){super(i.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};Je.eventName="visibilityChanged";var bt=class i extends Event{constructor(){super(i.eventName,{bubbles:!1})}};bt.eventName="unpinned";var xi=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},nr=class extends xi{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let r=this._node;this._originalScrollTo=r.scrollTo,this._originalScrollBy=r.scrollBy,this._originalScroll=r.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let r=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(r)}scrollBy(e,t){let r=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;r.top!==void 0&&(r.top+=this.scrollTop),r.left!==void 0&&(r.left+=this.scrollLeft),this._scrollTo(r)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,r=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=r):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:r}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),r=r===void 0?void 0:Math.max(0,Math.min(r,this.maxScrollLeft)),this._destination!==null&&r===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:r,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,r){return this._scrollTo(e,t,r),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:r,left:n}=this._destination;r=Math.min(r||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);let s=Math.abs(r-e),o=Math.abs(n-t);s<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};var Hs=typeof window<"u"?window.ResizeObserver:void 0;var xt=Symbol("virtualizerRef"),ar="virtualizer-sizer",Fs,lr=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Hs(()=>this._hostElementSizeChanged()),this._childrenRO=new Hs(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[xt]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=ql(this._hostElement,e),this._scrollerController=new nr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${ar}]`);t||(t=document.createElement("div"),t.setAttribute(ar,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(ar,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||Fs;if(typeof t=="function"&&this._layout instanceof t){let r={...e};return delete r.type,this._layout.config=r,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type=="function"){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(Fs=r=(await Promise.resolve().then(()=>(Vs(),Ks))).FlowLayout),this._layout=new r(n=>this._handleLayoutMessage(n),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(s=>s.startTime>=this._benchmarkStart&&s.startTime<e).reduce((s,o)=>s+o.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,r=this._measureChildOverride||this._measureChild;for(let n=0;n<t.length;n++){let s=t[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(s))&&(e[o]=r.call(this,s,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:r}=e.getBoundingClientRect();return Object.assign({width:t,height:r},Hl(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:r}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||r)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new bt)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(ar)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,r=this._layout;if(e&&t&&r){let n,s,o,a,c=e.getBoundingClientRect();n=0,s=0,o=window.innerHeight,a=window.innerWidth;let u=this._clippingAncestors.map(A=>A.getBoundingClientRect());u.unshift(c);for(let A of u)n=Math.max(n,A.top),s=Math.max(s,A.left),o=Math.min(o,A.bottom),a=Math.min(a,A.right);let f=t.getBoundingClientRect(),v={left:c.left-f.left,top:c.top-f.top},d={width:t.scrollWidth,height:t.scrollHeight},_=n-c.top+e.scrollTop,w=s-c.left+e.scrollLeft,C=Math.max(0,o-n),b=Math.max(0,a-s);r.viewportSize={width:b,height:C},r.viewportScroll={top:_,left:w},r.totalScrollSize=d,r.offsetWithinScroller=v}}_sizeHostElement(e){let r=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${r}px, ${n}px)`;else{let s=this._hostElement.style;s.minWidth=r?`${r}px`:"100%",s.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:r,width:n,height:s,xOffset:o,yOffset:a},c)=>{let u=this._children[c-this._first];u&&(u.style.position="absolute",u.style.boxSizing="border-box",u.style.transform=`translate(${r}px, ${t}px)`,n!==void 0&&(u.style.width=n+"px"),s!==void 0&&(u.style.height=s+"px"),u.style.left=o===void 0?null:o+"px",u.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){let{_first:t,_last:r,_firstVisible:n,_lastVisible:s}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==r,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==s}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:r,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-r,left:t-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:r}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:r}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Ze({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Je({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function Hl(i){let e=window.getComputedStyle(i);return{marginTop:cr(e.marginTop),marginRight:cr(e.marginRight),marginBottom:cr(e.marginBottom),marginLeft:cr(e.marginLeft)}}function cr(i){let e=i?parseFloat(i):NaN;return Number.isNaN(e)?0:e}function qs(i){if(i.assignedSlot!==null)return i.assignedSlot;if(i.parentElement!==null)return i.parentElement;let e=i.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Fl(i,e=!1){let t=[],r=e?i:qs(i);for(;r!==null;)t.push(r),r=qs(r);return t}function ql(i,e=!1){let t=!1;return Fl(i,e).filter(r=>{if(t)return!1;let n=getComputedStyle(r);return t=n.position==="fixed",n.overflow!=="visible"})}var Ai=i=>i,Pi=(i,e)=>N`${e}: ${JSON.stringify(i,null,2)}`,Ci=class extends We{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,r)=>Pi(t,r+this._first),this._keyFunction=(t,r)=>Ai(t,r+this._first),this._items=[],e.type!==ie.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let r=this._first;r<=this._last;r++)t.push(this._items[r]);return lt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let r=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),r?W:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:r}=e;t&&(this._renderItem=(n,s)=>t(n,s+this._first)),r&&(this._keyFunction=(n,s)=>r(n,s+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:r,scroller:n,items:s}=t;this._virtualizer=new lr({hostElement:e,layout:r,scroller:n}),this._virtualizer.items=s,this._virtualizer.connected()}_initialize(e,t){let r=e.parentNode;r&&r.nodeType===1&&(r.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(r,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},Ws=se(Ci);var we=class extends re{constructor(){super(...arguments),this.items=[],this.renderItem=Pi,this.keyFunction=Ai,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:r,layout:n,scroller:s}=this;return N`${Ws({items:e,renderItem:t,keyFunction:r,layout:n,scroller:s})}`}element(e){return this[xt]?.element(e)}get layoutComplete(){return this[xt]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};Ye([Ge({attribute:!1})],we.prototype,"items",void 0);Ye([Ge()],we.prototype,"renderItem",void 0);Ye([Ge()],we.prototype,"keyFunction",void 0);Ye([Ge({attribute:!1})],we.prototype,"layout",void 0);Ye([Ge({reflect:!0,type:Boolean})],we.prototype,"scroller",void 0);customElements.define("lit-virtualizer",we);var Ys=new showdown.Converter({disableForced4SpacesIndentedSublists:!0,emoji:!0,ghCodeBlocks:!0,requireSpaceBeforeHeadingText:!0,tables:!0,openLinksInNewWindow:!0,simpleLineBreaks:!0,simplifiedAutoLink:!0,smoothLivePreview:!0}),$i=new Intl.NumberFormat,Oi=class{constructor(){this.turns=[],this.index=0,this.turn=void 0}get comment(){return this.turn.response?.content?.comment}get reasoning(){return this.turn.response?.content?.s}get commentParts(){return this.turn.stream?.chunks||[]}get reasoningParts(){return this.turn.reasoningStream?.chunks||[]}hasCommentContent(){return this.comment||this.commentParts.length}hasReasoningContent(){return this.reasoning||this.reasoningParts.length}get move(){return this.turn.move}get captures(){return this.turn.captures}};var Mi=class extends je(j)(re){static styles=js;static properties={conversation:{type:Array},playing:{type:Boolean,reflect:!0},paused:{type:Boolean},wait:{type:Object},provider:{type:String},side:{type:String,attribute:!0},usage:{type:Object},intro:{type:Boolean,reflect:!0},flexPinScroller:{type:Boolean},darkMode:{type:Boolean},providerLogoUrl:{type:String}};constructor(){super(),this.wait=Promise.resolve(),this.paused=!1,this.conversation=[],this.playing=!1,this.provider="",this.scrollerElemRef=Re(),this.scrolledElemRef=Re(),this.intro=!0,this.contentParser=null,this.side="",this.flexPinScroller=!0,this.usage={input_tokens:0,output_tokens:0,total_tokens:0},this.stateChangesSinceUpdate=0}get scrollerElem(){return this.scrollerElemRef.value}get scrolledElem(){return this.scrolledElemRef.value}stateChanged(e){let t=Be(e);this.darkMode=t.prefersDarkColorScheme,this.provider=t.provider(this.side);let r=this.darkMode?"chatOutput:darkMode":"chatOutput:lightMode";this.provider&&(this.providerLogoUrl=t.providerLogoUrlBySideAndPlacement(e)(this.provider+"/"+r)),this.renderCssVariables(),this.conversation=t[`${this.side}Turns`],this.playing=this.conversation.length&&!this.conversation.at(-1)?.response?.content?.comment;let n={input_tokens:["input_tokens","prompt_tokens"],output_tokens:["output_tokens","completion_tokens"]},s=t.currentUsage?.[this.side];s&&(this.usage=_s([s],n))}firstUpdated(){setTimeout(()=>{this.intro=!1},500),this.installResizeObservers()}installResizeObservers(){let e="flex-pinned",t=0,r=1/0,n=this.scrollerElem,s=this.scrolledElem,o=u=>{requestAnimationFrame(()=>{n.classList.contains(e)?r<t&&(this.flexPinScroller=!1,s.scrollToIndex(this.conversation.length-1,"end")):t<r&&(this.flexPinScroller=!0),this.requestUpdate("flexPinScroller",!this.flexPinScroller)})},a=new ResizeObserver(u=>{for(let f of u)r=f.contentRect.height;o()}),c=new ResizeObserver(u=>{for(let f of u)t=f.contentRect.height;o()});window.addEventListener("error",u=>{u.message==="ResizeObserver loop completed with undelivered notifications."&&(u.stopImmediatePropagation(),u.preventDefault())}),s.addEventListener("pointer```````````````````````````````````````````````````over",u=>{let f=u.target;if(f.matches(".moveAndCaptures")){let v=f.getAttribute("turn"),d=this.conversation[v].move.split(/[-x]/g);j.dispatch.board.highlightPositions({positions:d}),f.addEventListener("pointerleave",_=>{j.dispatch.board.unhighlightPositions()},{once:!0})}}),a.observe(n),c.observe(s)}reset(){this.usage={input_tokens:0,output_tokens:0,total_tokens:0},this.conversation=[],this.requestUpdate(),this.updateComplete.then(e=>{this.followScroll()})}followScroll(){let e=(t,r)=>{this.side==="black"&&console.log(t,this.side,r.scrollHeight,r.scrollTop,r.clientHeight)};this.conversation.length&&this.scrollerElem.scrollHeight-this.scrollerElem.scrollTop<(this.scrollerElem.clientHeight-50)*4&&this.scrolledElem.scrollToIndex(this.conversation.length-1,"end")}renderMoveAndCaptures(e,t){let r=e.move,n=e.captures;return N`<div class="moveAndCaptures" turn="${e.index}">
            <span class="move">Move ${2*t+(this.side==="black"?1:2)}: ${r}</span>${n?N`<span class="captures">Captured: ${n.length}</span>`:""}
        </div>`}renderComment(e){let t=e.comment||e.commentParts.join("");return t?N`<div class="comment">${wi(Ys.makeHtml(t))}</div>`:B}renderReasoning(e){let t=e.reasoning||e.reasoningParts.join("");return t?N`<div class="reasoning">${wi(Ys.makeHtml(t))}</div>`:B}flyweightEntry=new Oi;renderChatEntry(e,t){let r=this.flyweightEntry;r.index=t,r.turn=e;let n=this.playing&&!e.response?.content?.comment;return N`<div class="chatEntry ${Fe({active:n})}">
            ${r.hasReasoningContent()?this.renderReasoning(r):B}
            ${r.hasCommentContent()?this.renderComment(r):B}
            ${r.move?this.renderMoveAndCaptures(r,t):B}
            ${n&&!r.hasCommentContent()&&!r.hasReasoningContent()?N`<span style="width:100%" class="throbber"></span>`:B}
        </div>`}renderMessages(e){return N`<lit-virtualizer
            ${ke(this.scrolledElemRef)}
            class="chats"
            .items=${e??[]}
            .renderItem=${this.renderChatEntry.bind(this)}
        ></lit-virtualizer>`}initializeStyles(){let e=new CSSStyleSheet;e.insertRule(":host {}");let t=e.cssRules[0],r=t.styleMap;return r.parentRule=t,this.shadowRoot.adoptedStyleSheets.push(e),r}renderCssVariables(){this.hostStyleMap||(this.hostStyleMap=this.initializeStyles());let e=[["--bg-image",`url("${this.providerLogoUrl}")`]],t=!1;for(let[n,s]of e){let o=this.hostStyleMap.get(n);o?.toString()===s?.toString()||Array.isArray(o)&&o.join("")===s?.toString()||(this.hostStyleMap.set(n,s),t=!0)}if(t){var r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(r){let n=this.hostStyleMap.parentRule.parentStyleSheet;n.replaceSync([...n.cssRules].map(s=>s.cssText).join(`
`)),this.hostStyleMap=n.cssRules[0].styleMap,this.hostStyleMap.parentRule=n.cssRules[0]}this.requestUpdate()}}render(){return this.renderCssVariables(),this.paused?(this.wait.then(e=>this.requestUpdate()),W):(this.flyweightEntry.turns=this.conversation,this.updateComplete.then(e=>{this.followScroll()}),N`<div class="scroll ${this.flexPinScroller?"flex-pinned":""}" ${ke(this.scrollerElemRef)}>
                ${this.renderMessages(this.conversation)}
            </div>
            <div class="usage">
                tokens = { in: ${$i.format(this.usage.input_tokens)}, out:
                ${$i.format(this.usage.output_tokens)}, total:
                ${$i.format(this.usage.input_tokens+this.usage.output_tokens)} }
            </div>`)}};customElements.define("chat-output",Mi);var Ri=ue`
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
        max-width: 1200px;
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
`;var ki=class extends re{static styles=Ri;static properties={open:{type:Boolean},title:{type:String},content:{type:Object},actions:{type:Array}};constructor(){super(),this.open=!1,this.title="",this.dialogRef=Re()}async show({title:e,content:t,actions:r}){return this.title=e,this.content=t,this.actions=r,this.open=!0,this.requestUpdate(),this.updateComplete.then(()=>new Promise(n=>{let s=this.dialogRef.value;s.addEventListener("close",o=>n(s.returnValue),{once:!0}),s.showModal()}))}close(e){e.preventDefault(),e.stopPropagation(),this.dialogRef.value.close(e.target.value),this.open=!1}render(){return this.open?N`
            <dialog ${ke(this.dialogRef)}>
                <div class="dialog-header">
                    <span class="dialog-title">${this.title}</span>
                </div>
                <div class="dialog-content">${this.content}</div>
                <div class="dialog-actions" @click=${this.close}>${this.actions}</div>
            </dialog>
        `:null}},Ti=class extends re{static styles=Ri;static properties={_open:{type:Boolean,state:!0},title:{type:String},content:{type:Object}};constructor(){super(),this._open=!1,this.title="",this.content="",this.message="",this.dialogRef=Re()}get dialog(){return this.dialogRef.value}firstUpdated(){this.addEventListener("click",e=>{if(!this._open)return;let t=this.dialog.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.bottom&&t.left<=e.clientX&&e.clientX<=t.right||(e.stopPropagation(),e.preventDefault(),this.close())})}render(){return this._open?N`
            <dialog ${ke(this.dialogRef)} ?open="${this._open}" class="notification">
                <div class="dialog-header">
                    <span class="dialog-title">${this.title}</span>
                    <button class="close-button" @click=${this.close}>×</button>
                </div>
                <div class="dialog-content">${this.content}</div>
            </dialog>
        `:B}async show({title:e,content:t,autoDismiss:r=0}){return new Promise(n=>{this.title=e,this.content=t,this._open=!0,r>0&&setTimeout(s=>this.close(),r),this.addEventListener("notification-close",()=>n(),{once:!0})})}close(){this._open=!1,this.dialog.close(),this.dispatchEvent(new CustomEvent("notification-close"))}};customElements.define("modal-dialog",ki);customElements.define("notification-dialog",Ti);var Ii=[..."ABCDEFGH"],Js=[1,2,3,4,5,6,7,8],Gs=65,Wl={r:"red",b:"black",R:"red",B:"black"},Yl={r:"pawn",b:"pawn",R:"king",B:"king"},Xs=Ii.flatMap(i=>Js.map(e=>`${i}${e}`)),Gl=new Set(Xs.filter((i,e)=>{let t=Math.floor(e/8),r=e%8;return(t+r)%2===0})),Zs={type:Object,converter:i=>document.querySelector(i)},zi=class extends je(j)(re){static styles=[ks,rr];static properties={positions:{type:Object},redThoughts:Zs,blackThoughts:Zs,canPlay:{type:Boolean},playing:{type:Boolean},paused:{type:Boolean},highlights:{type:Array},intro:{type:Boolean,reflect:!0},perspective:{type:Boolean,reflect:!0}};constructor(){super(),this.positions={},this.redSettings=null,this.blackSettings=null,this.redOutput=null,this.blackOutput=null,this.wait=this.whenDefined("chat-output",'[side="red"]').then(e=>this.redOutput=e).then(e=>this.whenDefined("chat-output",'[side="black"]')).then(e=>this.blackOutput=e).then(e=>{this.ready=!0,this.dispatchEvent(new CustomEvent("checkerboard:ready"))}),this.ready=!1,this.turn=1,this.playing=!1,this.intro=!0,this.perspective=!1,this.highlights=[],this.selection=Be,this.store=j}stateChanged(e){let t=document.timeline.currentTime,r=Be(e);this.selectors=r,this.positions=r.pieces,this.positionColor=r.color,this.positionRank=r.rank,this.redCaptures=r.redCaptures,this.blackCaptures=r.blackCaptures,this.canPlay=r.canPlay,this.apiKeyByProvider=r.apiKeyByProvider,this.redSettings=r.player("red"),this.blackSettings=r.player("black"),this.highlights=r.highlights}firstUpdated(){this.notificationDialog=this.whenDefined("notification-dialog"),setTimeout(t=>{this.intro=!1,this.perspective=!0}),document.addEventListener("ChatSettings:apiKey",t=>{this.requestUpdate()});let e=t=>{let r=this.shadowRoot.querySelectorAll(".piece"),n=r[Math.floor(Math.random()*r.length)];n.style.removeProperty("animation");let s=["translate(0,0)"];if(n.jittered)delete n.jittered;else{let{dx:a,dy:c}=this.jitter(7);s.push(`translate(${a}px,${c}px)`),n.jittered=!0}let o=n.animate({transform:s},{duration:333,iterations:1,fill:"forwards",direction:"normal",easing:"ease-in-out"});o.play(),console.log(n,o),setTimeout(e,500)}}jitter(e=1){let t=Math.random()*2*Math.PI,r=e*Math.random(),n=Math.cos(t)*r,s=Math.sin(t)*r;return{dx:n,dy:s,theta:t,magnitude:r}}whenDefined(e,t="",r=document){return customElements.whenDefined(e).then(n=>r.querySelector(e+t))}validateStep=(e,t,r,n={...this.positions})=>{let s=e[1],o=n[e],a=t[1],c=e.charCodeAt(0)-Gs,u=t.charCodeAt(0)-Gs;if(!o)throw new Error(`Invalid move from ${e} to ${t}: no piece at ${e}`);let f=Wl[o[0]],v=Yl[o[0]],d=u-c,_=a-s;if(v==="pawn"&&(f==="red"&&_>0||f==="black"&&_<0))throw new Error(`Invalid move from ${e} to ${t}: ${f} pawn can only move forward`);let w=r==="x"?"jump":"move";if(Math.abs(d)!==Math.abs(_)||Math.abs(d)>2||w==="move"&&Math.abs(d)!==1)throw new Error(`Invalid ${w} from ${e} to ${t}: not a diagonal move <= 2 squares`);if(n[t])throw new Error(`Invalid ${w} from ${e} to ${t}: destination occupied`);let C;if(w==="jump"){let b=`${Ii[c+d/2]}${+s+_/2}`,A=n[b],O=f==="red"?"black":"red";if(!A||A[0]===f[0])throw new Error(`Invalid jump from ${e} to ${t}: no ${O} piece to capture at ${b}`);C=b}return{from:e,to:t,dx:d,dy:_,captured:C,positions:n}};async movePiece(e,t){let[,r,n]=e.match(/^([A-H][1-8])(?:([-x])([A-H][1-8]))(?:x([A-H][1-8]))*$/),s=e.slice(3).split("x");if(!r||n==="-"&&s.length>1)throw new Error(`Invalid move syntax: ${e}`);let o,[,...a]=s.reduce(([A,...O],I)=>{let E=this.validateStep(A,I,n,o);return o=E.positions,o[I]=o[A],delete o[A],E.captured&&delete o[E.captured],[I,...O,E]},[r]),c=n==="-"?"move":"jump",u=c==="move"?.5:2,f=c==="move"?"ease":"cubic-bezier(0.5, 0.05, 1, 0.5)",v=this.positions[r],d=this.shadowRoot.getElementById(v),_=d.style;_.removeProperty("animation");for(let A of a){let{from:O,to:I,dx:E,dy:$,captured:x}=A,k=Sn(d,u*1100,D=>{_.gridArea=I,_.removeProperty("animation"),x&&j.dispatch.board.capture({position:x}),D.type!=="animationend"&&console.warn(`Animation incomplete: ${D.type}`)});_.setProperty("--move-dx",`${E/(x?2:1)}`),_.setProperty("--move-dy",`${$/(x?2:1)}`);for(let D of t?.split(" ")??[])d.classList.add(D);_.animation=`${u}s ${f} ${c}`,await k}_.removeProperty("--move-dx"),_.removeProperty("--move-dy");for(let A of t?.split(" ")??[])d.classList.remove(A);let w=s.at(-1),C=this.positionColor(r),b=this.positionRank(r);j.dispatch.board.move({from:r,to:w}),b==="pawn"&&(w[1]==="1"&&C==="red"||w[1]==="8"&&C==="black")&&j.dispatch.board.promote({position:w})}async play(){j.dispatch.board.reset(),this.playing=!0;let e=["black","red"];await this.wait;let[t,r]=[this.blackSettings,this.redSettings].map((f,v)=>{let{provider:d,model:_,baseUrl:w,stream:C,temperature:b}=f;return new tr(e[v],{apiKey:this.apiKeyByProvider(d),providerId:d,model:_,baseUrl:w,stream:C,temperature:b,dispatch:j.dispatch,role:e[v]})});this.players={black:t,red:r},j.dispatch.currentMatch.start({red:this.redSettings,black:this.blackSettings});let n=j.getState().currentMatch.id,s=await zs(this,vs(this.players));this.playing=!1,j.dispatch.currentMatch.end({result:{winner:s.winner,error:s.error}});let o=s.error?"Error!":"Game Over!",a=s.winner.replace(/^./,f=>f.toUpperCase()),c=s.error?N`<pre>Error: ${s.error}</pre>`:`${a} wins the match!`;return(await this.notificationDialog).show({title:o,content:c})}pause(){this.paused=this.blackOutput.paused=this.redOutput.paused=!0,this.wait=this.blackOutput.wait=this.redOutput.wait=new Promise(e=>{this.addEventListener("resume",t=>{this.paused=this.blackOutput.paused=this.redOutput.paused=!1,e()},{once:!0})})}resume(){this.dispatchEvent(new Event("resume"))}playDisabled(){}renderColLabels(){return Ii.map(e=>N`<div>${e}</div>`)}renderRowLabels(){return Js.map(e=>N`<div>${9-e}</div>`)}renderSquares(){let e=r=>Gl.has(r)?"black":"white",t=r=>({square:!0,[e(r)]:!0,highlight:this.highlights.includes(r)});return Xs.map(r=>N`<div class=${Fe(t(r))} style="grid-area: ${r}"></div>`)}renderPieces(){let e=Object.entries(this.positions);return N`${lt(e,([t,r])=>r,([t,r])=>N`<div
                    id="${r}"
                    class="piece ${this.positionColor(t)} ${this.positionRank(t)}"
                    style="grid-area: ${t}"
                ></div>`)}`}renderCaptures(e){return lt(e,({piece:t})=>t,({piece:t,color:r,rank:n})=>N`<div id="${t}" class="piece ${r} ${n}"></div>`)}renderControls(){let e=this.playing?this.paused?"resume":"pause":this.canPlay?"play":"playDisabled",t=this.playing?this.paused?"resume":"pause":this.canPlay?"play":"enter API keys to play";return N`
            <div class="controls">
                <button ?disabled=${!this.canPlay} @click=${r=>this[e]()}>
                    <div class="hint">${t}</div>
                    ${Ut(e,{size:getComputedStyle(this).getPropertyValue("--icon-size")})}
                </button>
            </div>
        `}renderBoard(){return this.paused?(this.wait.then(e=>this.requestUpdate()),W):N`<div class="board">
            <div class="col-labels top">${this.renderColLabels()}</div>
            <div class="row-labels left">${this.renderRowLabels()}</div>
            <div class="col-labels bottom">${this.renderColLabels()}</div>
            <div class="row-labels right">${this.renderRowLabels()}</div>
            ${this.renderSquares()}${this.renderPieces()}
            <div class="captures red">${this.renderCaptures(this.redCaptures)}</div>
            <div class="captures black">${this.renderCaptures(this.blackCaptures)}</div>
        </div>`}render(){return[this.renderBoard(),this.renderControls()]}};customElements.define("checker-board",zi);
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

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
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
*/
//# sourceMappingURL=checkerboard.js.map
