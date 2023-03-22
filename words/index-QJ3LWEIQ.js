(()=>{var l$=Object.create;var Ns=Object.defineProperty;var u$=Object.getOwnPropertyDescriptor;var c$=Object.getOwnPropertyNames;var p$=Object.getPrototypeOf,f$=Object.prototype.hasOwnProperty;var d$=(e,t,r)=>t in e?Ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var vu=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),cr=(e,t)=>{for(var r in t)Ns(e,r,{get:t[r],enumerable:!0})},h$=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of c$(t))!f$.call(e,n)&&n!==r&&Ns(e,n,{get:()=>t[n],enumerable:!(o=u$(t,n))||o.enumerable});return e};var m$=(e,t,r)=>(r=e!=null?l$(p$(e)):{},h$(t||!e||!e.__esModule?Ns(r,"default",{value:e,enumerable:!0}):r,e));var Cu=(e,t,r)=>(d$(e,typeof t!="symbol"?t+"":t,r),r);var em=vu((nO,tm)=>{tm.exports=nt;var he=null;try{he=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function nt(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}nt.prototype.__isLong__;Object.defineProperty(nt.prototype,"__isLong__",{value:!0});function Zt(e){return(e&&e.__isLong__)===!0}nt.isLong=Zt;var Hh={},qh={};function Br(e,t){var r,o,n;return t?(e>>>=0,(n=0<=e&&e<256)&&(o=qh[e],o)?o:(r=st(e,(e|0)<0?-1:0,!0),n&&(qh[e]=r),r)):(e|=0,(n=-128<=e&&e<128)&&(o=Hh[e],o)?o:(r=st(e,e<0?-1:0,!1),n&&(Hh[e]=r),r))}nt.fromInt=Br;function me(e,t){if(isNaN(e))return t?Lr:ge;if(t){if(e<0)return Lr;if(e>=Yh)return Jh}else{if(e<=-Xh)return Qt;if(e+1>=Xh)return Zh}return e<0?me(-e,t).neg():st(e%Po|0,e/Po|0,t)}nt.fromNumber=me;function st(e,t,r){return new nt(e,t,r)}nt.fromBits=st;var xi=Math.pow;function Mu(e,t,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return ge;if(typeof t=="number"?(r=t,t=!1):t=!!t,r=r||10,r<2||36<r)throw RangeError("radix");var o;if((o=e.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Mu(e.substring(1),t,r).neg();for(var n=me(xi(r,8)),s=ge,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+a),r);if(a<8){var u=me(xi(r,a));s=s.mul(u).add(me(l))}else s=s.mul(n),s=s.add(me(l))}return s.unsigned=t,s}nt.fromString=Mu;function Se(e,t){return typeof e=="number"?me(e,t):typeof e=="string"?Mu(e,t):st(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}nt.fromValue=Se;var Kh=1<<16,V$=1<<24,Po=Kh*Kh,Yh=Po*Po,Xh=Yh/2,jh=Br(V$),ge=Br(0);nt.ZERO=ge;var Lr=Br(0,!0);nt.UZERO=Lr;var Oo=Br(1);nt.ONE=Oo;var Qh=Br(1,!0);nt.UONE=Qh;var Pu=Br(-1);nt.NEG_ONE=Pu;var Zh=st(-1,2147483647,!1);nt.MAX_VALUE=Zh;var Jh=st(-1,-1,!0);nt.MAX_UNSIGNED_VALUE=Jh;var Qt=st(0,-2147483648,!1);nt.MIN_VALUE=Qt;var D=nt.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low};D.toNumber=function(){return this.unsigned?(this.high>>>0)*Po+(this.low>>>0):this.high*Po+(this.low>>>0)};D.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Qt)){var r=me(t),o=this.div(r),n=o.mul(r).sub(this);return o.toString(t)+n.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=me(xi(t,6),this.unsigned),i=this,a="";;){var l=i.div(s),u=i.sub(l.mul(s)).toInt()>>>0,c=u.toString(t);if(i=l,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};D.getHighBits=function(){return this.high};D.getHighBitsUnsigned=function(){return this.high>>>0};D.getLowBits=function(){return this.low};D.getLowBitsUnsigned=function(){return this.low>>>0};D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Qt)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,r=31;r>0&&!(t&1<<r);r--);return this.high!=0?r+33:r+1};D.isZero=function(){return this.high===0&&this.low===0};D.eqz=D.isZero;D.isNegative=function(){return!this.unsigned&&this.high<0};D.isPositive=function(){return this.unsigned||this.high>=0};D.isOdd=function(){return(this.low&1)===1};D.isEven=function(){return(this.low&1)===0};D.equals=function(t){return Zt(t)||(t=Se(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};D.eq=D.equals;D.notEquals=function(t){return!this.eq(t)};D.neq=D.notEquals;D.ne=D.notEquals;D.lessThan=function(t){return this.comp(t)<0};D.lt=D.lessThan;D.lessThanOrEqual=function(t){return this.comp(t)<=0};D.lte=D.lessThanOrEqual;D.le=D.lessThanOrEqual;D.greaterThan=function(t){return this.comp(t)>0};D.gt=D.greaterThan;D.greaterThanOrEqual=function(t){return this.comp(t)>=0};D.gte=D.greaterThanOrEqual;D.ge=D.greaterThanOrEqual;D.compare=function(t){if(Zt(t)||(t=Se(t)),this.eq(t))return 0;var r=this.isNegative(),o=t.isNegative();return r&&!o?-1:!r&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};D.comp=D.compare;D.negate=function(){return!this.unsigned&&this.eq(Qt)?Qt:this.not().add(Oo)};D.neg=D.negate;D.add=function(t){Zt(t)||(t=Se(t));var r=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=t.high>>>16,a=t.high&65535,l=t.low>>>16,u=t.low&65535,c=0,p=0,f=0,h=0;return h+=s+u,f+=h>>>16,h&=65535,f+=n+l,p+=f>>>16,f&=65535,p+=o+a,c+=p>>>16,p&=65535,c+=r+i,c&=65535,st(f<<16|h,c<<16|p,this.unsigned)};D.subtract=function(t){return Zt(t)||(t=Se(t)),this.add(t.neg())};D.sub=D.subtract;D.multiply=function(t){if(this.isZero())return ge;if(Zt(t)||(t=Se(t)),he){var r=he.mul(this.low,this.high,t.low,t.high);return st(r,he.get_high(),this.unsigned)}if(t.isZero())return ge;if(this.eq(Qt))return t.isOdd()?Qt:ge;if(t.eq(Qt))return this.isOdd()?Qt:ge;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(jh)&&t.lt(jh))return me(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=t.high>>>16,l=t.high&65535,u=t.low>>>16,c=t.low&65535,p=0,f=0,h=0,m=0;return m+=i*c,h+=m>>>16,m&=65535,h+=s*c,f+=h>>>16,h&=65535,h+=i*u,f+=h>>>16,h&=65535,f+=n*c,p+=f>>>16,f&=65535,f+=s*u,p+=f>>>16,f&=65535,f+=i*l,p+=f>>>16,f&=65535,p+=o*c+n*u+s*l+i*a,p&=65535,st(h<<16|m,p<<16|f,this.unsigned)};D.mul=D.multiply;D.divide=function(t){if(Zt(t)||(t=Se(t)),t.isZero())throw Error("division by zero");if(he){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var r=(this.unsigned?he.div_u:he.div_s)(this.low,this.high,t.low,t.high);return st(r,he.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Lr:ge;var o,n,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Lr;if(t.gt(this.shru(1)))return Qh;s=Lr}else{if(this.eq(Qt)){if(t.eq(Oo)||t.eq(Pu))return Qt;if(t.eq(Qt))return Oo;var i=this.shr(1);return o=i.div(t).shl(1),o.eq(ge)?t.isNegative()?Oo:Pu:(n=this.sub(t.mul(o)),s=o.add(n.div(t)),s)}else if(t.eq(Qt))return this.unsigned?Lr:ge;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=ge}for(n=this;n.gte(t);){o=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),l=a<=48?1:xi(2,a-48),u=me(o),c=u.mul(t);c.isNegative()||c.gt(n);)o-=l,u=me(o,this.unsigned),c=u.mul(t);u.isZero()&&(u=Oo),s=s.add(u),n=n.sub(c)}return s};D.div=D.divide;D.modulo=function(t){if(Zt(t)||(t=Se(t)),he){var r=(this.unsigned?he.rem_u:he.rem_s)(this.low,this.high,t.low,t.high);return st(r,he.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};D.mod=D.modulo;D.rem=D.modulo;D.not=function(){return st(~this.low,~this.high,this.unsigned)};D.and=function(t){return Zt(t)||(t=Se(t)),st(this.low&t.low,this.high&t.high,this.unsigned)};D.or=function(t){return Zt(t)||(t=Se(t)),st(this.low|t.low,this.high|t.high,this.unsigned)};D.xor=function(t){return Zt(t)||(t=Se(t)),st(this.low^t.low,this.high^t.high,this.unsigned)};D.shiftLeft=function(t){return Zt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?st(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):st(0,this.low<<t-32,this.unsigned)};D.shl=D.shiftLeft;D.shiftRight=function(t){return Zt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?st(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):st(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};D.shr=D.shiftRight;D.shiftRightUnsigned=function(t){if(Zt(t)&&(t=t.toInt()),t&=63,t===0)return this;var r=this.high;if(t<32){var o=this.low;return st(o>>>t|r<<32-t,r>>>t,this.unsigned)}else return t===32?st(r,0,this.unsigned):st(r>>>t-32,0,this.unsigned)};D.shru=D.shiftRightUnsigned;D.shr_u=D.shiftRightUnsigned;D.toSigned=function(){return this.unsigned?st(this.low,this.high,!1):this};D.toUnsigned=function(){return this.unsigned?this:st(this.low,this.high,!0)};D.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};D.toBytesLE=function(){var t=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};D.toBytesBE=function(){var t=this.high,r=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};nt.fromBytes=function(t,r,o){return o?nt.fromBytesLE(t,r):nt.fromBytesBE(t,r)};nt.fromBytesLE=function(t,r){return new nt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,r)};nt.fromBytesBE=function(t,r){return new nt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],r)}});var Em=vu(()=>{});var _m=vu(()=>{});var $n=class{constructor(t,r){this.backend=t,this.dataMover=r,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,r){this.dataIdsCount++,this.data.set(t,r)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Nr=class{refCount(t){return Yt("refCount")}incRef(t){return Yt("incRef")}timerAvailable(){return!0}time(t){return Yt("time")}read(t){return Yt("read")}readSync(t){return Yt("readSync")}readToGPU(t,r){return Yt("readToGPU")}numDataIds(){return Yt("numDataIds")}disposeData(t,r){return Yt("disposeData")}write(t,r,o){return Yt("write")}move(t,r,o,n,s){return Yt("move")}createTensorFromGPUData(t,r,o){return Yt("createTensorFromGPUData")}memory(){return Yt("memory")}floatPrecision(){return Yt("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Yt("dispose")}};function Yt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function $f(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,t--,Fs(e,t,r)}function g$(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,o=0;for(;r>0;)o=Math.random()*r|0,r--,Fs(e,r,o),Fs(t,r,o)}function vo(e,t,r){return Math.max(e,Math.min(t,r))}function x$(e){return e%2===0?e:e+1}function Fs(e,t,r){let o=e[t];e[t]=e[r],e[r]=o}function y$(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function w$(e,t){let r=Math.random();return t*r+(1-r)*e}function b$(e,t){let r=0;for(let o=0;o<e.length;o++){let n=Number(e[o])-Number(t[o]);r+=n*n}return r}function F(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ds(e,t,r=""){F(Co(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function Su(e){F(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function dt(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function v$(e){return e.length===0}function Co(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function In(e){return e%1===0}function C$(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function S$(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function $$(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return $f(t),t}function Dr(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function I$(e,t=n=>0,r,o){return new Promise((n,s)=>{let i=0,a=()=>{if(e()){n();return}i++;let l=t(i);if(r!=null&&i>=r){s();return}o!=null?o(a,l):setTimeout(a,l)};a()})}function T$(e,t){let r=1,o=-1;for(let s=0;s<e.length;++s)if(e[s]>=0)r*=e[s];else if(e[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(e[s]<0)throw Error(`Shapes can not be < 0. Found ${e[s]} at dim ${s}`);if(o===-1){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(r===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let n=e.slice();return n[o]=t/r,n}function Os(e,t){let r=t.length;return e=e==null?t.map((o,n)=>n):[].concat(e),F(e.every(o=>o>=-r&&o<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),F(e.every(o=>In(o)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(o=>o<0?r+o:o)}function E$(e,t){let r=[],o=[],n=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||n?null:Os(t,e).sort(),i=0;for(let a=0;a<e.length;++a){if(s!=null){if(s[i]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(s[i]==null||s[i]>a)&&e[a]===1&&(r.push(e[a]),o.push(a)),s[i]<=a&&i++}e[a]!==1&&(r.push(e[a]),o.push(a))}return{newShape:r,keptDims:o}}function _$(e,t){return Ps(e,t)}function Ps(e,t){let r=null;if(e==null||e==="float32")r=new Float32Array(t);else if(e==="int32")r=new Int32Array(t);else if(e==="bool")r=new Uint8Array(t);else if(e==="string")r=new Array(t);else throw new Error(`Unknown data type ${e}`);return r}function $u(e,t){for(let r=0;r<e.length;r++){let o=e[r];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function Iu(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function A$(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function So(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Tu(e){if(e==null)return 0;let t=0;return e.forEach(r=>t+=r.length),t}function $o(e){return typeof e=="string"||e instanceof String}function If(e){return typeof e=="boolean"}function Tf(e){return typeof e=="number"}function pr(e){return Array.isArray(e)?pr(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Tf(e)?"float32":$o(e)?"string":If(e)?"bool":"float32"}function Io(e){return!!(e&&e.constructor&&e.call&&e.apply)}function To(e,t){for(let r=t;r<e;++r)if(e%r===0)return r;return e}function De(e){let t=e.length;if(t<2)return[];let r=new Array(t-1);r[t-2]=e[t-1];for(let o=t-3;o>=0;--o)r[o]=r[o+1]*e[o+1];return r}function Ef(e,t,r,o=!1){let n=new Array;if(t.length===1){let s=t[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=r[e+i]}else{let s=t[0],i=t.slice(1),a=i.reduce((l,u)=>l*u)*(o?2:1);for(let l=0;l<s;l++)n[l]=Ef(e+l*a,i,r,o)}return n}function Fr(e,t,r=!1){if(e.length===0)return t[0];let o=e.reduce((n,s)=>n*s)*(r?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return Ef(0,e,t,r)}function k$(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function Eu(e,t){let r=Eo(e,t);for(let o=0;o<r.length;o++)r[o]=1;return r}function Eo(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function R$(e,t){let r=e.reduce((o,n)=>o*n,1);if(t==null||t==="float32")return Fr(e,new Float32Array(r));if(t==="int32")return Fr(e,new Int32Array(r));if(t==="bool")return Fr(e,new Uint8Array(r));throw new Error(`Unknown data type ${t}`)}function Ce(e){e.forEach(t=>{F(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function N$(e,t,r){if(t===0)return 0;if(t===1)return e[0];let o=e[e.length-1];for(let n=0;n<e.length-1;++n)o+=r[n]*e[n];return o}function F$(e,t,r){if(t===0)return[];if(t===1)return[e];let o=new Array(t);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(e/r[n]),e-=o[n]*r[n];return o[o.length-1]=e,o}function Or(e){return e&&e.then&&typeof e.then=="function"}var _f="tfjsflags",Tn=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=O$,this.populateURLFlags()}setPlatform(t,r){this.platform!=null&&(I().getBool("IS_TEST")||I().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=r}registerFlag(t,r,o){if(this.flagRegistry[t]={evaluationFn:r,setHook:o},this.urlFlags[t]!=null){let n=this.urlFlags[t];I().getBool("IS_TEST")||I().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let r=this.evaluateFlag(t);if(Or(r))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=r,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,r){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=r,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(r)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);_f in t&&t[_f].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=M$(n,s)})}};function O$(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(r,...o)=>(P$(t,o[0],o[1]),o.join("="))),t}function P$(e,t,r){e[decodeURIComponent(t)]=decodeURIComponent(r||"")}function M$(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function I(){return _u}var _u=null;function Af(e){_u=e}var Au;function ku(){if(Au==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Au=e}return Au}function L$(){let e=ku();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function En(e,t){let r=L$();if(r.has(e))return r.get(e);{let o=t();return r.set(e,o),r.get(e)}}var _n="Abs",kf="Acos",Rf="Acosh",fr="Add",Nf="AddN",Ff="All",Df="Any",Of="ArgMax",Pf="ArgMin",Mf="Asin",Lf="Asinh",Bf="Atan",Uf="Atanh",Vf="Atan2",Wf="AvgPool",zf="AvgPoolGrad",Gf="AvgPool3D",Hf="AvgPool3DGrad",Ms="BatchMatMul",qf="BatchToSpaceND",Kf="Bincount";var Xf="BroadcastArgs",Pr="Cast",Ls="Ceil",jf="ClipByValue",An="Complex",Bs="ComplexAbs",Yf="Concat",Qf="Conv2D",Zf="Conv2DBackpropFilter",Jf="Conv2DBackpropInput",td="Conv3D",ed="Conv3DBackpropFilterV2",rd="Conv3DBackpropInputV2",od="Cos",nd="Cosh",sd="Cumprod",id="Cumsum",ad="CropAndResize",ld="DenseBincount",ud="DepthToSpace",cd="DepthwiseConv2dNative",pd="DepthwiseConv2dNativeBackpropFilter",fd="DepthwiseConv2dNativeBackpropInput",dd="Diag",hd="Dilation2D";var Us="RealDiv",md="Einsum",Vs="Elu",gd="EluGrad",xd="Erf",Ws="Equal",zs="Exp",yd="ExpandDims",Gs="Expm1",wd="FFT",Hs="Fill",bd="FlipLeftRight",qs="Floor",_o="FloorDiv",vd="FusedBatchNorm",Cd="GatherV2",Sd="GatherNd",Ks="Greater",Xs="GreaterEqual",Mr="Identity",$d="IFFT",js="Imag",Id="IsFinite",Td="IsInf",Ed="IsNan",Ys="LeakyRelu",Qs="Less",Zs="LessEqual",_d="LinSpace",Js="Log",Ad="Log1p",kd="LogicalAnd",Rd="LogicalNot",Nd="LogicalOr";var Fd="LRN",Dd="LRNGrad";var ti="Max",Ao="Maximum",Od="MaxPool",Pd="MaxPoolGrad",Md="MaxPool3D",Ld="MaxPool3DGrad",Bd="MaxPoolWithArgmax",Ud="Mean",ei="Min",ri="Minimum",Vd="MirrorPad",Wd="Mod",zd="Multinomial",ko="Multiply",kn="Neg",oi="NotEqual",Gd="NonMaxSuppressionV3",Hd="NonMaxSuppressionV4",qd="NonMaxSuppressionV5",Kd="OnesLike",Xd="OneHot",jd="Pack",Yd="PadV2";var ni="Pow",si="Prelu",Ru="Prod",Qd="RaggedGather",Zd="RaggedRange",Jd="RaggedTensorToTensor",th="Range",Rn="Real",eh="Reciprocal",ii="Relu",ai="Reshape",rh="ResizeNearestNeighbor",oh="ResizeNearestNeighborGrad",nh="ResizeBilinear",sh="ResizeBilinearGrad",li="Relu6",ih="Reverse",ah="Round",ui="Rsqrt",lh="ScatterNd",uh="TensorScatterUpdate",ch="SearchSorted",ph="Select",fh="Selu",Nu="Slice",dh="Sin",hh="Sinh",mh="Sign",Ro="Sigmoid",gh="Softplus",No="Sqrt",ci="Sum",xh="SpaceToBatchND",yh="SplitV",wh="Softmax",bh="SparseFillEmptyRows",vh="SparseReshape",Ch="SparseSegmentMean",Sh="SparseSegmentSum",$h="SparseToDense",pi="SquaredDifference",Ih="Square",fi="StaticRegexReplace",Th="StridedSlice",Eh="StringNGrams",_h="StringSplit",Ah="StringToHashBucketFast",Fo="Sub",kh="Tan",Rh="Tanh",di="Tile",Nh="TopK",Fh="Transform",Do="Transpose",Dh="Unique",Oh="Unpack",Ph="UnsortedSegmentSum";var hi="ZerosLike",mi="Step",Mh="FromPixels",Lh="RotateWithOffset",Bh="_FusedMatMul",Uh="FusedConv2D",Vh="FusedDepthwiseConv2D";function He(...e){I().getBool("IS_TEST")||I().getBool("PROD")||console.warn(...e)}function B$(...e){I().getBool("IS_TEST")||I().getBool("PROD")||console.log(...e)}var gi=En("kernelRegistry",()=>new Map),U$=En("gradRegistry",()=>new Map);function Fu(e,t){let r=Gh(e,t);return gi.get(r)}function Du(e){return U$.get(e)}function Ou(e){let t=gi.entries(),r=[];for(;;){let{done:o,value:n}=t.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===e&&r.push(i)}return r}function zh(e){let{kernelName:t,backendName:r}=e,o=Gh(t,r);gi.has(o)&&He(`The kernel '${t}' for backend '${r}' is already registered`),gi.set(o,e)}function Gh(e,t){return`${t}_${e}`}var b={};cr(b,{arraysEqual:()=>Co,assert:()=>F,assertNonNegativeIntegerDimensions:()=>Ce,assertNonNull:()=>Su,assertShapesMatch:()=>Ds,bytesFromStringArray:()=>Tu,bytesPerElement:()=>So,checkConversionForErrors:()=>$u,clamp:()=>vo,computeStrides:()=>De,convertBackendValuesAndArrayBuffer:()=>k$,createScalarValue:()=>K$,createShuffledIndices:()=>$$,decodeString:()=>Bo,distSquared:()=>b$,encodeString:()=>Lo,fetch:()=>j$,fingerPrint64:()=>q$,flatten:()=>hr,getArrayFromDType:()=>Ps,getTypedArrayFromDType:()=>_$,hasEncodingLoss:()=>A$,hexToLong:()=>Nn,indexToLoc:()=>F$,inferDtype:()=>pr,inferFromImplicitShape:()=>T$,isBoolean:()=>If,isFunction:()=>Io,isInt:()=>In,isNumber:()=>Tf,isPromise:()=>Or,isScalarShape:()=>v$,isString:()=>$o,isTypedArray:()=>Ut,isValidDtype:()=>Iu,locToIndex:()=>N$,makeOnesTypedArray:()=>Eu,makeZerosNestedTypedArray:()=>R$,makeZerosTypedArray:()=>Eo,nearestDivisor:()=>To,nearestLargerEven:()=>x$,now:()=>Wr,parseAxisParam:()=>Os,randUniform:()=>w$,repeatedTry:()=>I$,rightPad:()=>Dr,shuffle:()=>$f,shuffleCombo:()=>g$,sizeFromShape:()=>dt,sizeToSquarishShape:()=>S$,squeezeShape:()=>E$,sum:()=>y$,swap:()=>Fs,tanh:()=>C$,toNestedArray:()=>Fr,toTypedArray:()=>Mo});var Bu=m$(em());var Vr=Bu.default||Bu;function Nn(e){return Vr.fromString(e,!0,16)}var om=Nn("c3a5c85c97cb3127"),Ur=Nn("b492b66fbe98f273"),Pt=Nn("9ae16a3b2f90404f");function Lu(e){return e.xor(e.shru(47))}function nm(e,t,r){let o=e.slice(t,t+r);return Vr.fromBytes(Array.from(o),!0,!0)}function rt(e,t){return nm(e,t,8)}function rm(e,t){return nm(e,t,4)}function St(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function dr(e,t,r=Nn("9ddfea08eb382d69")){let o=e.xor(t).mul(r);o=o.xor(o.shru(47));let n=t.xor(o).mul(r);return n=n.xor(n.shru(47)),n=n.mul(r),n}function W$(e,t,r,o,n,s){n=n.add(e),s=St(s.add(n).add(o),21);let i=n;return n=n.add(t),n=n.add(r),s=s.add(St(n,44)),[n.add(o),s.add(i)]}function yi(e,t,r,o){return W$(rt(e,t),rt(e,t+8),rt(e,t+16),rt(e,t+24),r,o)}function z$(e,t=e.length){if(t>=8){let r=Pt.add(t*2),o=rt(e,0).add(Pt),n=rt(e,t-8),s=St(n,37).mul(r).add(o),i=St(o,25).add(n).mul(r);return dr(s,i,r)}if(t>=4){let r=Pt.add(t*2),o=rm(e,0);return dr(o.shl(3).add(t),rm(e,t-4),r)}if(t>0){let r=e[0],o=e[t>>1],n=e[t-1],s=r+(o<<8),i=t+(n<<2);return Lu(Pt.mul(s).xor(om.mul(i))).mul(Pt)}return Pt}function G$(e,t=e.length){let r=Pt.add(t*2),o=rt(e,0).mul(Ur),n=rt(e,8),s=rt(e,t-8).mul(r),i=rt(e,t-16).mul(Pt);return dr(St(o.add(n),43).add(St(s,30)).add(i),o.add(St(n.add(Pt),18)).add(s),r)}function H$(e,t=e.length){let r=Pt.add(t*2),o=rt(e,0).mul(Pt),n=rt(e,8),s=rt(e,t-8).mul(r),i=rt(e,t-16).mul(Pt),a=St(o.add(n),43).add(St(s,30)).add(i),l=dr(a,o.add(St(n.add(Pt),18)).add(s),r),u=rt(e,16).mul(r),c=rt(e,24),p=a.add(rt(e,t-32)).mul(r),f=l.add(rt(e,t-24)).mul(r);return dr(St(u.add(c),43).add(St(p,30)).add(f),u.add(St(c.add(o),18)).add(p),r)}function q$(e,t=e.length){let r=Vr.fromNumber(81,!0);if(t<=32)return t<=16?z$(e,t):G$(e,t);if(t<=64)return H$(e,t);let o=r,n=r.mul(Ur).add(113),s=Lu(n.mul(Pt).add(113)).mul(Pt),i=[Vr.UZERO,Vr.UZERO],a=[Vr.UZERO,Vr.UZERO];o=o.mul(Pt).add(rt(e,0));let l=0,u=(t-1>>6)*64,c=u+(t-1&63)-63;do o=St(o.add(n).add(i[0]).add(rt(e,l+8)),37).mul(Ur),n=St(n.add(i[1]).add(rt(e,l+48)),42).mul(Ur),o=o.xor(a[1]),n=n.add(i[0]).add(rt(e,l+40)),s=St(s.add(a[0]),33).mul(Ur),i=yi(e,l,i[1].mul(Ur),o.add(a[0])),a=yi(e,l+32,s.add(a[1]),n.add(rt(e,l+16))),[s,o]=[o,s],l+=64;while(l!==u);let p=Ur.add(s.and(255).shl(1));return l=c,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=St(o.add(n).add(i[0]).add(rt(e,l+8)),37).mul(p),n=St(n.add(i[1]).add(rt(e,l+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(rt(e,l+40))),s=St(s.add(a[0]),33).mul(p),i=yi(e,l,i[1].mul(p),o.add(a[0])),a=yi(e,l+32,s.add(a[1]),n.add(rt(e,l+16))),[s,o]=[o,s],dr(dr(i[0],a[0],p).add(Lu(n).mul(om)).add(s),dr(i[1],a[1],p).add(o),p)}function K$(e,t){return t==="string"?Lo(e):Mo([e],t)}function X$(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Mo(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=hr(e)),I().getBool("DEBUG")&&$u(e,t),X$(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){let r=new Uint8Array(e.length);for(let o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}else throw new Error(`Unknown data type ${t}`)}function Wr(){return I().platform.now()}function j$(e,t){return I().platform.fetch(e,t)}function Lo(e,t="utf-8"){return t=t||"utf-8",I().platform.encode(e,t)}function Bo(e,t="utf-8"){return t=t||"utf-8",I().platform.decode(e,t)}function Ut(e){return I().platform.isTypedArray(e)}function hr(e,t=[],r=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Or(e)||e==null||Ut(e)&&r)t.push(e);else if(Array.isArray(e)||Ut(e))for(let o=0;o<e.length;++o)hr(e[o],t,r);else{let o=-1;for(let n of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)hr(e[n],t,r)}return t}var wi=class{constructor(t,r){this.backendTimer=t,this.logger=r,r==null&&(this.logger=new Uu)}profileKernel(t,r,o){let n,s=()=>{n=o()},i,a=Wr();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let u of n)u.dataSync();i=Promise.resolve({kernelMs:Wr()-a})}if(I().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<n.length;u++){let c=n[u];c.data().then(p=>{Y$(p,c.dtype,t)})}return{kernelName:t,outputs:n,inputs:r,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:r,outputs:o,timeMs:n,inputs:s,extraInfo:i}=t;o.forEach(a=>{Promise.all([a.data(),n,i]).then(l=>{this.logger.logKernelProfile(r,a,l[0],l[1],s,l[2])})})}};function Y$(e,t,r){if(t!=="float32")return!1;for(let o=0;o<e.length;o++){let n=e[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${r}'`),!0}return!1}var Uu=class{logKernelProfile(t,r,o,n,s,i){let a=typeof n=="number"?Dr(`${n}ms`,9):n.error,l=Dr(t,25),u=r.rank,c=r.size,p=Dr(r.shape.toString(),14),f="";for(let h in s){let m=s[h];if(m!=null){let y=m.shape||r.shape,x=y.length;f+=`${h}: ${x}D ${x>0?y:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${p}	%c${c}	%c${f}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function sm(e,t,r){let o={},n={};for(let l=0;l<t.length;l++)o[t[l].id]=!0;for(let l=0;l<e.length;l++){let u=e[l],c=u.inputs;for(let p in c){let f=c[p],h=!1;for(let m=0;m<t.length;m++)if(o[f.id]){u.outputs.forEach(y=>o[y.id]=!0),h=!0,n[u.id]=!0;break}if(h)break}}let s={};s[r.id]=!0;let i={};for(let l=e.length-1;l>=0;l--){let u=e[l],c=u.inputs;for(let p=0;p<u.outputs.length;p++)if(s[u.outputs[p].id]){for(let f in c)s[c[f].id]=!0,i[u.id]=!0;break}}let a=[];for(let l=0;l<e.length;l++){let u=e[l];if(n[u.id]&&i[u.id]){let c={};for(let f in u.inputs){let h=u.inputs[f];o[h.id]&&(c[f]=h)}let p=Object.assign({},u);p.inputs=c,p.outputs=u.outputs,a.push(p)}}return a}function im(e,t,r,o){for(let n=t.length-1;n>=0;n--){let s=t[n],i=[];if(s.outputs.forEach(l=>{let u=e[l.id];u!=null?i.push(u):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let u=r(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);let c=s.inputs[l];if(!Co(u.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(e[c.id]==null)e[c.id]=u;else{let p=e[c.id];e[c.id]=o(p,u),p.dispose()}}}}var am=20,Fn=3,Vu=7;function lm(e,t,r,o){let n=De(t),s=Q$(e,t,r,n),i=t.length,a=bi(e,t,r,n,s),l=["Tensor"];return o&&(l.push(`  dtype: ${r}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function Q$(e,t,r,o){let n=dt(t),s=o[o.length-1],i=new Array(s).fill(0),a=t.length,l=r==="complex64"?On(e):e;if(a>1)for(let u=0;u<n/s;u++){let c=u*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Dn(l[c+p],0,r).length)}return i}function Dn(e,t,r){let o;return Array.isArray(e)?o=`${parseFloat(e[0].toFixed(Vu))} + ${parseFloat(e[1].toFixed(Vu))}j`:$o(e)?o=`'${e}'`:r==="bool"?o=um(e):o=parseFloat(e.toFixed(Vu)).toString(),Dr(o,t)}function um(e){return e===0?"false":"true"}function bi(e,t,r,o,n,s=!0){let i=r==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(r==="complex64"){let y=On(e);return[Dn(y[0],0,r)]}return r==="bool"?[um(e[0])]:[e[0].toString()]}if(l===1){if(a>am){let x=Fn*i,g=Array.from(e.slice(0,x)),w=Array.from(e.slice((a-Fn)*i,a*i));return r==="complex64"&&(g=On(g),w=On(w)),["["+g.map((C,v)=>Dn(C,n[v],r)).join(", ")+", ..., "+w.map((C,v)=>Dn(C,n[a-Fn+v],r)).join(", ")+"]"]}return["["+(r==="complex64"?On(e):Array.from(e)).map((x,g)=>Dn(x,n[g],r)).join(", ")+"]"]}let u=t.slice(1),c=o.slice(1),p=o[0]*i,f=[];if(a>am){for(let y=0;y<Fn;y++){let x=y*p,g=x+p;f.push(...bi(e.slice(x,g),u,r,c,n,!1))}f.push("...");for(let y=a-Fn;y<a;y++){let x=y*p,g=x+p;f.push(...bi(e.slice(x,g),u,r,c,n,y===a-1))}}else for(let y=0;y<a;y++){let x=y*p,g=x+p;f.push(...bi(e.slice(x,g),u,r,c,n,y===a-1))}let h=l===2?",":"";f[0]="["+(a>0?f[0]+h:"");for(let y=1;y<f.length-1;y++)f[y]=" "+f[y]+h;let m=`,
`;for(let y=2;y<l;y++)m+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(s?"":m),f}function On(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var Oe=class{constructor(t,r,o){if(this.dtype=r,this.shape=t.slice(),this.size=dt(t),o!=null){let n=o.length;F(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(r==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Ps(r,this.size),this.strides=De(t)}set(t,...r){r.length===0&&(r=[0]),F(r.length===this.rank,()=>`The number of provided coordinates (${r.length}) must match the rank (${this.rank})`);let o=this.locToIndex(r);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let r=0;for(let n of t){if(n<0||n>=this.shape[r]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}r++}let o=t[t.length-1];for(let n=0;n<t.length-1;++n)o+=this.strides[n]*t[n];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let r=t[t.length-1];for(let o=0;o<t.length-1;++o)r+=this.strides[o]*t[o];return r}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let r=new Array(this.shape.length);for(let o=0;o<r.length-1;++o)r[o]=Math.floor(t/this.strides[o]),t-=r[o]*this.strides[o];return r[r.length-1]=t,r}get rank(){return this.shape.length}toTensor(){return $e().makeTensor(this.values,this.shape,this.dtype)}},$e=null,Uo=null,Z$=null;function cm(e){$e=e}function pm(e){Uo=e}function fm(e){Z$=e}var $t=class{constructor(t,r,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=r||"float32",this.size=dt(t),this.strides=De(t),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Uo.buffer(this.shape,this.dtype,t)}bufferSync(){return Uo.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Fr(this.shape,t,this.dtype==="complex64")}arraySync(){return Fr(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=$e().read(this.dataId);if(this.dtype==="string"){let r=await t;try{return r.map(o=>Bo(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),$e().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=$e().readSync(this.dataId);if(this.dtype==="string")try{return t.map(r=>Bo(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await $e().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||($e().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Uo.print(this,t)}clone(){return this.throwIfDisposed(),Uo.clone(this)}toString(t=!1){let r=this.dataSync();return lm(r,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Uo.cast(this,t)}variable(t=!0,r,o){return this.throwIfDisposed(),$e().makeVariable(this,t,r,o)}};Object.defineProperty($t,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function J$(){return En("Tensor",()=>$t)}J$();var qe=class extends $t{constructor(t,r,o,n){super(t.shape,t.dtype,t.dataId,n),this.trainable=r,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Co(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);$e().disposeTensor(this),this.dataId=t.dataId,$e().incRef(this,null)}dispose(){$e().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(qe,Symbol.hasInstance,{value:e=>e instanceof $t&&e.assign!=null&&e.assign instanceof Function});var Wu;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Wu||(Wu={}));var zu;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(zu||(zu={}));var Gu;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(Gu||(Gu={}));var Hu;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Hu||(Hu={}));var qu;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(qu||(qu={}));var t2={float32:Hu,int32:zu,bool:Gu,complex64:qu};function Nt(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return t2[e][t]}function zr(e){return Nt(e,"int32")}function vi(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function Ci(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}function Mt(e,t){if(e.dtype===t.dtype)return[e,t];let r=Nt(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function Si(e){let t=[];return dm(e,t,new Set),t}function dm(e,t,r){if(e==null)return;if(e instanceof $t){t.push(e);return}if(!e2(e))return;let o=e;for(let n in o){let s=o[n];r.has(s)||(r.add(s),dm(s,t,r))}}function e2(e){return Array.isArray(e)||typeof e=="object"}function Ku(e){return e.kernelName!=null}var $i=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},mr=class{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new $i}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:r}=this.initializeBackendsAndReturnBest();if(r)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:r}=this.initializeBackend(t);if(r)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,r,o=1){return t in this.registryFactory?(He(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:r,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:r,asyncInit:o}=this.initializeBackend(t);if(!(o?await r:r))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new wi(this.backendInstance),!0}setupRegisteredKernels(){Ou(this.backendName).forEach(r=>{r.setupFunc!=null&&r.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Ou(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){let r=this.registryFactory[t];if(r==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let o=r.factory();if(o&&!(o instanceof Nr)&&typeof o.then=="function"){let n=++this.pendingBackendInitId,s=o.then(i=>n<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,He(`Initialization of backend ${t} failed`),He(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return He(`Initialization of backend ${t} failed`),He(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,r)=>this.registryFactory[r].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r],{success:n,asyncInit:s}=this.initializeBackend(o);if(s||n)return{name:o,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,r){let o=this.state.tensorInfo.get(r),n=o.backend,s=this.readSync(r),i=n.refCount(r);n.disposeData(r,!0),o.backend=t,t.move(r,s,o.shape,o.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,r){let o=null;if(r==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");r=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof r!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let n;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(n),()=>(n=r(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,r,o){t();try{let n=o();return r(),n}catch(n){throw r(),n}}nextTensorId(){return mr.nextTensorId++}nextVariableId(){return mr.nextVariableId++}clone(t){let r=k.runKernel(Mr,{x:t}),o={x:t},n=i=>({x:()=>{let a="float32",l={x:i},u={dtype:a};return k.runKernel(Pr,l,u)}}),s=[];return this.addTapeNode(this.state.activeScope.name,o,[r],n,s,{}),r}runKernel(t,r,o){if(this.backendName==null&&this.backend,!(Fu(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:r,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,r,o){let n=this.backend.numDataIds(),s=0;o.forEach(l=>{s+=l.dtype==="complex64"?3:1});let i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=n-r-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let r,o=[],n=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l,u=Ku(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Ku(t)){let{kernelName:m,inputs:y,attrs:x}=t;this.backendName==null&&this.backend;let g=Fu(m,this.backendName);F(g!=null,()=>`Cannot find registered kernel '${m}' for backend '${this.backendName}'`),a=()=>{let w=this.backend.numDataIds();l=g.kernelFunc({inputs:y,attrs:x,backend:this.backend});let C=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(m,w,C);let v=C.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(n){let $=this.getTensorsForGradient(m,y,v);o=this.saveTensorsForBackwardMode($)}return v}}else{let{forwardFunc:m}=t,y=x=>{n&&(o=x.map(g=>this.keep(this.clone(g))))};a=()=>{let x=this.backend.numDataIds();l=this.tidy(()=>m(this.backend,y));let g=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,x,g),g}}let{inputs:c,attrs:p}=t,f=Ku(t)?null:t.backwardsFunc,h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?r=a():(h=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),r=h.outputs)}),n&&this.addTapeNode(u,c,r,f,o,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(m=>c[m]!=null?c[m].shape:null),outputShapes:r.map(m=>m.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(l)?r:r[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,r,o){let n=Du(t);if(n!=null){let s=n.inputsToSave||[],i=n.outputsToSave||[],a;n.saveAllInputs?(F(Array.isArray(r),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(r).map(u=>r[u])):a=s.map(u=>r[u]);let l=o.filter((u,c)=>i[c]);return a.concat(l)}return[]}makeTensor(t,r,o,n){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",n=n||this.backend;let s=t;o==="string"&&$o(t[0])&&(s=t.map(l=>Lo(l)));let i=n.write(s,r,o),a=new $t(r,o,i,this.nextTensorId());if(this.trackTensor(a,n),o==="string"){let l=this.state.tensorInfo.get(i),u=Tu(s);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,r,o,n){o=o||"float32";let s={dataId:t,shape:r,dtype:o};return this.makeTensorFromTensorInfo(s,n)}makeTensorFromTensorInfo(t,r){let{dataId:o,shape:n,dtype:s}=t,i=new $t(n,s,o,this.nextTensorId());return this.trackTensor(i,r),i}makeVariable(t,r=!0,o,n){o=o||this.nextVariableId().toString(),n!=null&&n!==t.dtype&&(t=t.cast(n));let s=new qe(t,r,o,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,r){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*So(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:r||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof qe||this.track(t)}incRef(t,r){this.trackTensor(t,r),this.backend.incRef(t.dataId)}removeDataId(t,r){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===r&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let r=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=r.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let o=t.size*So(t.dtype);this.state.numBytes-=o}r.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,r.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let r=this.state.registeredVariables[t];this.disposeVariable(r)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let r=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(n=>n.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-r,this.state.activeProfile.newTensors=this.state.numTensors-o;for(let n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,r,o,n,s,i){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:r,outputs:o,saved:s},l=Du(t);l!=null&&(n=l.gradFunc),n!=null&&(a.gradient=u=>(u=u.map((c,p)=>{if(c==null){let f=o[p],h=Eo(f.size,f.dtype);return this.makeTensor(h,f.shape,f.dtype)}return c}),n(u.length>1?u:u[0],s,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let r={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(r.name=t),this.state.scopeStack.push(r),this.state.activeScope=r}endScope(t){let r=Si(t),o=new Set(r.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let i=this.state.activeScope.track[s];!i.kept&&!o.has(i.id)&&i.dispose()}let n=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(s=>{!s.kept&&s.scopeId===n.id&&this.track(s)})}gradients(t,r,o,n=!1){if(F(r.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));F(s instanceof $t,()=>"The result y returned by f() must be a tensor.");let i=sm(this.state.activeTape,r,s);if(!n&&i.length===0&&r.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=o??r2(s.shape),im(a,i,u=>this.tidy(u),o2);let l=r.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(let c of u.saved)c.dispose()}),this.state.activeTape=null),{value:s,grads:l}})}customGrad(t){return F(Io(t),()=>"The f passed in customGrad(f) must be a function."),(...r)=>{F(r.every(a=>a instanceof $t),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o,n={};r.forEach((a,l)=>{n[l]=a});let s=(a,l)=>(o=t(...r,l),F(o.value instanceof $t,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),F(Io(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),i=(a,l)=>{let u=o.gradFunc(a,l),c=Array.isArray(u)?u:[u];F(c.length===r.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),F(c.every(f=>f instanceof $t),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let p={};return c.forEach((f,h)=>{p[h]=()=>f}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:n})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,r){return this.state.tensorInfo.get(t).backend.readToGPU(t,r)}async time(t){let r=Wr(),o=await this.backend.time(t);return o.wallMs=Wr()-r,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new $i;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};mr.nextTensorId=0;mr.nextVariableId=0;function r2(e){let t=Eu(dt(e),"float32");return k.makeTensor(t,e,"float32")}function Xu(){let e=ku();if(e._tfengine==null){let t=new Tn(e);e._tfengine=new mr(t)}return Af(e._tfengine.ENV),cm(()=>e._tfengine),e._tfengine}var k=Xu();function o2(e,t){let r={a:e,b:t};return k.runKernel(fr,r)}var gr={};cr(gr,{isBrowser:()=>Yu,isMobile:()=>i2,mockIsMobile:()=>s2});function n2(){return typeof navigator<"u"&&navigator!=null}var ju;function s2(e){ju=e}function i2(e){if(ju!==void 0)return ju;if(e||n2()){if(e||(e=navigator),e.product==="ReactNative")return!0;let t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){let r=e;return r.userAgentData&&r.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Yu(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Vt=I();Vt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Vt.registerFlag("IS_BROWSER",()=>Yu());Vt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Vt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Vt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Vt.registerFlag("PROD",()=>!1);Vt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Vt.getBool("DEBUG"));Vt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Vt.registerFlag("IS_TEST",()=>!1);Vt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Vt.getBool("DEBUG"));Vt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Vt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Vt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Qu(e,t){let r=e;if(Ut(e))return t==="string"?[]:[e.length];if(vi(e)){let n=e.channels||"RGBA";return[e.height,e.width*n.length]}else if(Ci(e))return[e.buffer.size/(t==null?4:So(t))];if(!Array.isArray(e))return[];let o=[];for(;Array.isArray(r)||Ut(r)&&t!=="string";)o.push(r.length),r=r[0];return Array.isArray(e)&&I().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&mm(e,o,[]),o}function mm(e,t,r){if(r=r||[],!Array.isArray(e)&&!Ut(e)){F(t.length===0,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}F(t.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),F(e.length===t[0],()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);let o=t.slice(1);for(let n=0;n<e.length;++n)mm(e[n],o,r.concat(n))}function hm(e,t,r,o){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${r}' passed to '${o}' must be ${e} tensor, but got ${t} tensor`)}}function M(e,t,r,o="numeric"){if(e instanceof $t)return hm(o,e.dtype,t,r),e;let n=pr(e);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),hm(o,n,t,r),e==null||!Ut(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){let l=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${l}'`)}let s=Qu(e,n);!Ut(e)&&!Array.isArray(e)&&(e=[e]);let a=n!=="string"?Mo(e,n):hr(e,[],!0);return k.makeTensor(a,s,n)}var a2="__op";function U(e){let t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0],o=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r=r+a2;let n=(...s)=>{k.startScope(r);try{let i=o(...s);return Or(i)&&console.error("Cannot return a Promise inside of tidy."),k.endScope(i),i}catch(i){throw k.endScope(null),i}};return Object.defineProperty(n,"name",{value:r,configurable:!0}),n}function l2(e,t){let r=M(e,"real","complex"),o=M(t,"imag","complex");Ds(r.shape,o.shape,`real and imag shapes, ${r.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:r,imag:o};return k.runKernel(An,n)}var Ii=U({complex_:l2});function Ti(e,t,r,o){if(o==null)o=pr(e);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Ci(e)||vi(e)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return k.backend.createTensorFromGPUData(e,t||r,o)}if(!Ut(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Ce(t);let n=dt(t),s=dt(r);F(n===s,()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<r.length;++i){let a=r[i],l=i===r.length-1?a!==dt(t.slice(i)):!0;F(r[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `)}}return!Ut(e)&&!Array.isArray(e)&&(e=[e]),t=t||r,e=o!=="string"?Mo(e,o):hr(e,[],!0),k.makeTensor(e,t,o)}var Zu=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function gm(e){return Zu?Buffer.byteLength(e):new Blob([e]).size}function xm(e){if(Zu)return Buffer.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let o=0,n=t.length;o<n;o++)r+=String.fromCharCode(t[o]);return btoa(r)}function ym(e){if(Zu){let o=Buffer.from(e,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;++o)r.set([t.charCodeAt(o)],o);return r.buffer}function Ei(e){if(e.length===1)return e[0];let t=0;e.forEach(n=>{t+=n.byteLength});let r=new Uint8Array(t),o=0;return e.forEach(n=>{r.set(new Uint8Array(n),o),o+=n.byteLength}),r.buffer}function _i(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),r}function wm(e,t,r){let o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(o.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=t,o.weightData=r}return e.signature!=null&&(o.signature=e.signature),e.userDefinedMetadata!=null&&(o.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(o.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(o.initializerSignature=e.initializerSignature),o}async function Ai(e,t){let r,o;return e.weightsManifest!=null&&([r,o]=await t(e.weightsManifest)),wm(e,r,o)}function Ke(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:gm(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:gm(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function Ju(e){let t=[];for(let r of e)t.push(...r.weights);return t}var at=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return at.instance==null&&(at.instance=new at),at.instance}static registerSaveRouter(t){at.getInstance().saveRouters.push(t)}static registerLoadRouter(t){at.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return at.getHandlers(t,"save")}static getLoadHandlers(t,r){return at.getHandlers(t,"load",r)}static getHandlers(t,r,o){let n=[];return(r==="load"?at.getInstance().loadRouters:at.getInstance().saveRouters).forEach(i=>{let a=i(t,o);a!==null&&n.push(a)}),n}};var tc="tensorflowjs",ec=1,Gr="models_store",xr="model_info_store";function bm(){if(!I().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function rc(e){let t=e.result;t.createObjectStore(Gr,{keyPath:"modelPath"}),t.createObjectStore(xr,{keyPath:"modelPath"})}var Pe=class{constructor(t){if(this.indexedDB=bm(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,r){return new Promise((o,n)=>{let s=this.indexedDB.open(tc,ec);s.onupgradeneeded=()=>rc(s),s.onsuccess=()=>{let i=s.result;if(r==null){let a=i.transaction(Gr,"readonly"),u=a.objectStore(Gr).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return i.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(u.result.modelArtifacts)},u.onerror=c=>(i.close(),n(u.error)),a.oncomplete=()=>i.close()}else{let a=Ke(r),l=i.transaction(xr,"readwrite"),u=l.objectStore(xr),c;try{c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(f){return n(f)}let p;c.onsuccess=()=>{p=i.transaction(Gr,"readwrite");let f=p.objectStore(Gr),h;try{h=f.put({modelPath:this.modelPath,modelArtifacts:r,modelArtifactsInfo:a})}catch(m){return n(m)}h.onsuccess=()=>o({modelArtifactsInfo:a}),h.onerror=m=>{u=l.objectStore(xr);let y=u.delete(this.modelPath);y.onsuccess=()=>(i.close(),n(h.error)),y.onerror=x=>(i.close(),n(h.error))}},c.onerror=f=>(i.close(),n(c.error)),l.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>n(s.error)})}};Pe.URL_SCHEME="indexeddb://";var vm=e=>I().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Pe.URL_SCHEME)?c2(e.slice(Pe.URL_SCHEME.length)):null;at.registerSaveRouter(vm);at.registerLoadRouter(vm);function c2(e){return new Pe(e)}function p2(e){return e.startsWith(Pe.URL_SCHEME)?e.slice(Pe.URL_SCHEME.length):e}var ki=class{constructor(){this.indexedDB=bm()}async listModels(){return new Promise((t,r)=>{let o=this.indexedDB.open(tc,ec);o.onupgradeneeded=()=>rc(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(xr,"readonly"),a=s.objectStore(xr).getAll();a.onsuccess=()=>{let l={};for(let u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(n.close(),r(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>r(o.error)})}async removeModel(t){return t=p2(t),new Promise((r,o)=>{let n=this.indexedDB.open(tc,ec);n.onupgradeneeded=()=>rc(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(xr,"readwrite"),a=i.objectStore(xr),l=a.get(t),u;l.onsuccess=()=>{if(l.result==null)return s.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let c=a.delete(t),p=()=>{u=s.transaction(Gr,"readwrite");let h=u.objectStore(Gr).delete(t);h.onsuccess=()=>r(l.result.modelArtifactsInfo),h.onerror=m=>o(l.error)};c.onsuccess=p,c.onerror=f=>(p(),s.close(),o(l.error))}},l.onerror=c=>(s.close(),o(l.error)),i.oncomplete=()=>{u==null?s.close():u.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})}};var Xe="/",Vo="tensorflowjs_models",Cm="info",f2="model_topology",d2="weight_specs",h2="weight_data",m2="model_metadata";function Sm(e){return{info:[Vo,e,Cm].join(Xe),topology:[Vo,e,f2].join(Xe),weightSpecs:[Vo,e,d2].join(Xe),weightData:[Vo,e,h2].join(Xe),modelMetadata:[Vo,e,m2].join(Xe)}}function $m(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function g2(e){let t=e.split(Xe);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Xe)}function x2(e){return e.startsWith(Me.URL_SCHEME)?e.slice(Me.URL_SCHEME.length):e}var Me=class{constructor(t){if(!I().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Sm(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let r=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),n=Ke(t);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,r),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,xm(t.weightData));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:n}}catch{throw $m(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let r={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);r.modelTopology=o;let n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(n==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);r.weightSpecs=n;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);r.format=a.format,r.generatedBy=a.generatedBy,r.convertedBy=a.convertedBy,a.signature!=null&&(r.signature=a.signature),a.userDefinedMetadata!=null&&(r.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(r.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(r.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(r.trainingConfig=a.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return r.weightData=ym(i),r}};Me.URL_SCHEME="localstorage://";var Im=e=>I().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Me.URL_SCHEME)?y2(e.slice(Me.URL_SCHEME.length)):null;at.registerSaveRouter(Im);at.registerLoadRouter(Im);function y2(e){return new Me(e)}var Ri=class{constructor(){F(I().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),F(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},r=Vo+Xe,o=Xe+Cm;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(r)&&s.endsWith(o)){let i=g2(s);t[i]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=x2(t);let r=Sm(t);if(this.LS.getItem(r.info)==null)throw new Error(`Cannot find model at path '${t}'`);let o=JSON.parse(this.LS.getItem(r.info));return $m(r),o}};var Tm="://",ie=class{constructor(){this.managers={}}static getInstance(){return ie.instance==null&&(ie.instance=new ie),ie.instance}static registerManager(t,r){F(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Tm)&&(t=t.slice(0,t.indexOf(Tm))),F(t.length>0,()=>"scheme must not be an empty string.");let o=ie.getInstance();F(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=r}static getManager(t){let r=ie.getInstance().managers[t];if(r==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return r}static getSchemes(){return Object.keys(ie.getInstance().managers)}};var oc=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,r){return fetch(t,r)}now(){return performance.now()}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${r}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,r){return new TextDecoder(r).decode(t)}setTimeoutCustom(t,r){if(typeof window>"u"||!I().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,r);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},r),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}};if(I().get("IS_BROWSER")){I().setPlatform("browser",new oc);try{ie.registerManager(Me.URL_SCHEME,new Ri)}catch{}try{ie.registerManager(Pe.URL_SCHEME,new ki)}catch{}}var w2={importFetch:()=>Em()},nc;var sc=class{constructor(){this.util=_m(),this.textEncoder=new this.util.TextEncoder}fetch(t,r){return I().global.fetch!=null?I().global.fetch(t,r):(nc==null&&(nc=w2.importFetch()),nc(t,r))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${r}`);return this.textEncoder.encode(t)}decode(t,r){return t.length===0?"":new this.util.TextDecoder(r).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};I().get("IS_NODE")&&!I().get("IS_BROWSER")&&I().setPlatform("node",new sc);function Q(e,t="float32",r){return t=t||"float32",Ce(e),new Oe(e,t,r)}function b2(e,t){let r=M(e,"x","cast");if(!Iu(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&r.dtype!=="string"||t!=="string"&&r.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:r},n={dtype:t};return k.runKernel(Pr,o,n)}var Hr=U({cast_:b2});function v2(e){let r={x:M(e,"x","clone","string_or_numeric")};return k.runKernel(Mr,r)}var Ni=U({clone_:v2});function Am(e,t=!1){console.log(e.toString(t))}Xu();var C2={buffer:Q,cast:Hr,clone:Ni,print:Am};pm(C2);function S2(e){I().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}fm(S2);function je(){return k}function K(e,t){return k.tidy(e,t)}function bt(e){Si(e).forEach(r=>r.dispose())}function km(e){return k.keep(e)}function Rm(e,t,r=1){return k.registerBackend(e,t,r)}function $2(e,t){let r=M(e,"a","add"),o=M(t,"b","add");[r,o]=Mt(r,o);let n={a:r,b:o};return k.runKernel(fr,n)}var X=U({add_:$2});function I2(e,t){let r=M(e,"a","floorDiv"),o=M(t,"b","floorDiv");[r,o]=Mt(r,o);let n={a:r,b:o};return k.runKernel(_o,n)}var Nm=U({floorDiv_:I2});function T2(e,t){let r=M(e,"a","div"),o=M(t,"b","div");if([r,o]=Mt(r,o),r.dtype==="int32"&&o.dtype==="int32")return Nm(r,o);let n={a:r,b:o},s={};return k.runKernel(Us,n,s)}var It=U({div_:T2});function E2(e,t){let r=M(e,"a","mul"),o=M(t,"b","mul");[r,o]=Mt(r,o);let n={a:r,b:o};return k.runKernel(ko,n)}var q=U({mul_:E2});function _2(e){let t=M(e,"x","abs");if(t.dtype==="complex64"){let r={x:t};return k.runKernel(Bs,r)}else{let r={x:t};return k.runKernel(_n,r)}}var Ie=U({abs_:_2});function A2(e,t,r,o,n="NHWC",s){let i=e[3],a=[...t,i],l=Dm(n);return lc(e,a,r,s,o,null,null,l)}function k2(e,t,r,o,n,s,i="channelsLast"){let[a,l]=Pn(t),u;if(i==="channelsLast")u=[a,l,e[3],e[3]];else if(i==="channelsFirst")u=[a,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return lc(e,u,r,o,n,s,!1,i)}function R2(e,t,r,o,n,s,i="NDHWC"){let[a,l,u]=ic(t),c,p;if(i==="NDHWC")p="channelsLast",c=[a,l,u,e[4],e[4]];else if(i==="NCDHW")p="channelsFirst",c=[a,l,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return Fm(e,c,r,o,n,!1,p,s)}function lc(e,t,r,o,n,s,i=!1,a="channelsLast"){let[l,u,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,p]=e;else if(a==="channelsFirst")[l,p,u,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,h,,m]=t,[y,x]=Pn(r),[g,w]=Pn(o),C=Wo(f,g),v=Wo(h,w),{padInfo:$,outHeight:T,outWidth:E}=D2(n,u,c,y,x,C,v,s,a),_=i?m*p:m,N;return a==="channelsFirst"?N=[l,_,T,E]:a==="channelsLast"&&(N=[l,T,E,_]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:p,outHeight:T,outWidth:E,outChannels:_,padInfo:$,strideHeight:y,strideWidth:x,filterHeight:f,filterWidth:h,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationHeight:g,dilationWidth:w,inShape:e,outShape:N,filterShape:t}}function Fm(e,t,r,o,n,s=!1,i="channelsLast",a){let[l,u,c,p,f]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,p,f]=e;else if(i==="channelsFirst")[l,f,u,c,p]=e;else throw new Error(`Unknown dataFormat ${i}`);let[h,m,y,,x]=t,[g,w,C]=ic(r),[v,$,T]=ic(o),E=Wo(h,v),_=Wo(m,$),N=Wo(y,T),{padInfo:O,outDepth:V,outHeight:z,outWidth:ct}=O2(n,u,c,p,g,w,C,E,_,N,a),pt=s?x*f:x,ht;return i==="channelsFirst"?ht=[l,pt,V,z,ct]:i==="channelsLast"&&(ht=[l,V,z,ct,pt]),{batchSize:l,dataFormat:i,inDepth:u,inHeight:c,inWidth:p,inChannels:f,outDepth:V,outHeight:z,outWidth:ct,outChannels:pt,padInfo:O,strideDepth:g,strideHeight:w,strideWidth:C,filterDepth:h,filterHeight:m,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:_,effectiveFilterWidth:N,dilationDepth:v,dilationHeight:$,dilationWidth:T,inShape:e,outShape:ht,filterShape:t}}function N2(e,t,r,o,n){o==null&&(o=uc(e,t,r));let s=e[0],i=e[1],a=Mn((s-t+2*o)/r+1,n),l=Mn((i-t+2*o)/r+1,n);return[a,l]}function F2(e,t,r,o,n,s){n==null&&(n=uc(e,t[0],o[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(i[a]=Mn((e[a]-t[a]+2*n)/o[a]+1,s));return i}function uc(e,t,r,o=1){let n=Wo(t,o);return Math.floor((e[0]*(r-1)-r+n)/2)}function Pn(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ic(e){return typeof e=="number"?[e,e,e]:e}function Wo(e,t){return t<=1?e:e+(e-1)*(t-1)}function D2(e,t,r,o,n,s,i,a,l){let u,c,p;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};let h=N2([t,r],s,o,e,a);c=h[0],p=h[1]}else if(e==="same"){c=Math.ceil(t/o),p=Math.ceil(r/n);let f=Math.max(0,(c-1)*o+s-t),h=Math.max(0,(p-1)*n+i-r),m=Math.floor(f/2),y=f-m,x=Math.floor(h/2),g=h-x;u={top:m,bottom:y,left:x,right:g,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/o),p=Math.ceil((r-i+1)/n);else if(typeof e=="object"){let f=l==="channelsLast"?e[1][0]:e[2][0],h=l==="channelsLast"?e[1][1]:e[2][1],m=l==="channelsLast"?e[2][0]:e[3][0],y=l==="channelsLast"?e[2][1]:e[3][1];u={top:f,bottom:h,left:m,right:y,type:f===0&&h===0&&m===0&&y===0?"VALID":"EXPLICIT"},c=Mn((t-s+f+h)/o+1,a),p=Mn((r-i+m+y)/n+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:c,outWidth:p}}function O2(e,t,r,o,n,s,i,a,l,u,c){let p,f,h,m;if(e==="valid"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};let x=F2([t,r,o,1],[a,l,u],1,[n,s,i],e,c);f=x[0],h=x[1],m=x[2]}else if(e==="same"){f=Math.ceil(t/n),h=Math.ceil(r/s),m=Math.ceil(o/i);let y=(f-1)*n+a-t,x=(h-1)*s+l-r,g=(m-1)*i+u-o,w=Math.floor(y/2),C=y-w,v=Math.floor(x/2),$=x-v,T=Math.floor(g/2),E=g-T;p={top:v,bottom:$,left:T,right:E,front:w,back:C,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:h,outWidth:m}}function Mn(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function ac(e){let[t,r,o]=Pn(e);return t===1&&r===1&&o===1}function P2(e,t){return ac(e)||ac(t)}function M2(e){return Pn(e).every(t=>t>0)}function Dm(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function L2(e,t,r){if(r!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if(typeof t=="number")F(In(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);else if(typeof t=="object")t.forEach(o=>{o.forEach(n=>{F(In(n),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${n}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function B2(e,t){let o={x:M(e,"x","reshape","string_or_numeric")},n={shape:t};return k.runKernel(ai,o,n)}var vt=U({reshape_:B2});function U2(e,t,r=!1,o=!1){let n=M(e,"a","matMul"),s=M(t,"b","matMul");[n,s]=Mt(n,s);let i={a:n,b:s},a={transposeA:r,transposeB:o};return k.runKernel(Ms,i,a)}var ae=U({matMul_:U2});function V2(e){let r={x:M(e,"x","sigmoid","float32")};return k.runKernel(Ro,r)}var Om=U({sigmoid_:V2});function W2(e,t){let r=M(e,"broadcastTo","x"),o=r.shape;if(Ce(t),t.length<r.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){let u=r.shape.slice();for(;u.length<t.length;)u.unshift(1);r=vt(r,u)}let n=r.shape,s=Array.from(t);for(let u=t.length-1;u>=0;u--)if(n[u]===t[u])s[u]=1;else if(r.shape[u]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(s.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return Ni(r);let a={x:r},l={reps:s};return k.runKernel(di,a,l)}var cc=U({broadcastTo_:W2});function Pm(e,t,r){Ce(e),r=r||pr(t);let o={shape:e,value:t,dtype:r};return k.runKernel(Hs,{},o)}var Ln={};cr(Ln,{assertAndGetBroadcastShape:()=>Di,getBroadcastDims:()=>Mm,getReductionAxes:()=>Fi});function Mm(e,t){let r=e.length,o=[];for(let n=0;n<r;n++){let s=r-1-n,i=e[s]||1;(t[t.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function Fi(e,t){let r=[];for(let o=0;o<t.length;o++){let n=e[e.length-o-1],s=t.length-o-1,i=t[s];(n==null||n===1&&i>1)&&r.unshift(s)}return r}function Di(e,t){let r=Math.max(e.length,t.length),o=new Array(r);for(let n=0;n<r;n++){let s=e[e.length-n-1];s==null&&(s=1);let i=t[t.length-n-1];if(i==null&&(i=1),s===1)o[r-n-1]=i;else if(i===1)o[r-n-1]=s;else if(s!==i){let a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else o[r-n-1]=s}return o}function z2(e){let r={x:M(e,"x","zerosLike")};return k.runKernel(hi,r)}var Wt=U({zerosLike_:z2});function G2(e,t){let r=M(e,"t1","dot"),o=M(t,"t2","dot");F((r.rank===1||r.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${r.rank} and ${o.rank}.`);let n=r.rank===1?r.size:r.shape[1],s=o.rank===1?o.size:o.shape[0];if(F(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),r.rank===1&&o.rank===1){let i=vt(r,[1,-1]),a=vt(o,[-1,1]),l=ae(i,a);return vt(l,[])}else if(r.rank===1&&o.rank===2){let i=vt(r,[1,-1]),a=vt(o,[o.shape[0],o.shape[1]]),l=ae(i,a);return vt(l,[l.size])}else if(r.rank===2&&o.rank===1){let i=vt(o,[-1,1]),a=ae(r,i);return vt(a,[a.size])}else{let i=vt(o,[o.shape[0],o.shape[1]]);return ae(r,i)}}var pc=U({dot_:G2});function H2(e){let r={x:M(e,"x","elu","float32")};return k.runKernel(Vs,r)}var Lm=U({elu_:H2});function fc(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function Bm(e,t,r){let o=e.length+t.length,n=[],s=0,i=0;for(let a=0;a<o;a++)r.indexOf(a)===-1?n.push(e[s++]):n.push(t[i++]);return n}function q2(e,t){let r=[],o=e.length;for(let s=0;s<o;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]}function dc(e,t){let r=t.map(o=>1);return Bm(e,r,t)}function K2(e,t,r){F(fc(t,r),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${r} input.`)}function X2(e,t){if(fc(e,t))return null;let r=[];for(let o=0;o<t;++o)e.indexOf(o)===-1&&r.push(o);return e.forEach(o=>r.push(o)),r}function j2(e){return e.map((t,r)=>[r,t]).sort((t,r)=>t[1]-r[1]).map(t=>t[0])}function Y2(e,t){let r=[];for(let o=t-e;o<t;++o)r.push(o);return r}function Z2(e,t=null,r=!1){let n={x:M(e,"x","max")},s={reductionIndices:t,keepDims:r};return k.runKernel(ti,n,s)}var Oi=U({max_:Z2});function J2(e,t=null,r=!1){let n={x:M(e,"x","min")},s={axis:t,keepDims:r};return k.runKernel(ei,n,s)}var hc=U({min_:J2});function tI(e,t){let r=M(e,"base","pow"),o=M(t,"exp","pow");[r,o]=Mt(r,o);let n={a:r,b:o};return k.runKernel(ni,n)}var Bn=U({pow_:tI});function Ft(e,t){if((Ut(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ut(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ti(e,[],[],t)}function eI(e){let r={x:M(e,"x","sqrt","float32")};return k.runKernel(No,r)}var Jt=U({sqrt_:eI});function rI(e){let t=M(e,"x","square"),r={};return k.runKernel("Square",{x:t},r)}var le=U({square_:rI});function oI(e,t=null,r=!1){let o=M(e,"x","sum");o.dtype==="bool"&&(o=Hr(o,"int32"));let n={x:o},s={axis:t,keepDims:r};return k.runKernel(ci,n,s)}var Ye=U({sum_:oI});function nI(e,t="euclidean",r=null,o=!1){e=M(e,"x","norm");let n=Um(e,t,r),s=n.shape;if(o){let i=Os(r,e.shape);s=dc(n.shape,i)}return vt(n,s)}function Um(e,t,r=null){if(e.rank===0)return Ie(e);if(e.rank!==1&&r===null)return Um(vt(e,[-1]),t,r);if(e.rank===1||typeof r=="number"||Array.isArray(r)&&r.length===1){if(t===1)return Ye(Ie(e),r);if(t===1/0)return Oi(Ie(e),r);if(t===-1/0)return hc(Ie(e),r);if(t==="euclidean"||t===2)return Jt(Ye(Bn(Ie(e),Ft(2,"int32")),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(r)&&r.length===2){if(t===1)return Oi(Ye(Ie(e),r[0]),r[1]-1);if(t===1/0)return Oi(Ye(Ie(e),r[1]),r[0]);if(t===-1/0)return hc(Ye(Ie(e),r[1]),r[0]);if(t==="fro"||t==="euclidean")return Jt(Ye(le(e),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${r}`)}var Vm=U({norm_:nI});function sI(e){let r={input:M(e,"input","imag")};return k.runKernel(js,r)}var Wm=U({imag_:sI});function iI(e,t=.2){let o={x:M(e,"x","leakyRelu")},n={alpha:t};return k.runKernel(Ys,o,n)}var zm=U({leakyRelu_:iI});function Gm(e,t){F(Io(e),()=>"The f passed in variableGrads(f) must be a function"),F(t==null||Array.isArray(t)&&t.every(u=>u instanceof qe),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let r=t!=null;if(!r){t=[];for(let u in k.registeredVariables)t.push(k.registeredVariables[u])}let o=r?t.filter(u=>!u.trainable):null,n=t.length;t=t.filter(u=>u.trainable),F(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:i,grads:a}=k.gradients(e,t,null,s);F(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),F(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let l={};return t.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),o?.forEach(u=>l[u.name]=null),{value:i,grads:l}}function aI(e){let r={x:M(e,"x","neg")};return k.runKernel(kn,r)}var Un=U({neg_:aI});function lI(e,t){let r=M(e,"a","sub"),o=M(t,"b","sub");[r,o]=Mt(r,o);let n={a:r,b:o};return k.runKernel(Fo,n)}var xe=U({sub_:lI});function uI(e,t){let r=M(e,"a","maximum"),o=M(t,"b","maximum");[r,o]=Mt(r,o),r.dtype==="bool"&&(r=Hr(r,"int32"),o=Hr(o,"int32")),Di(r.shape,o.shape);let n={a:r,b:o};return k.runKernel(Ao,n)}var Hm=U({maximum_:uI});function Vn(e,t="float32"){if(Ce(e),t==="complex64"){let o=Vn(e,"float32"),n=Vn(e,"float32");return Ii(o,n)}let r=Eo(dt(e),t);return k.makeTensor(r,e,t)}function cI(e,t){let r=M(e,"x","prelu"),o=M(t,"alpha","prelu"),n={x:r,alpha:o};return k.runKernel(si,n)}var qm=U({prelu_:cI});function pI(e){let r={input:M(e,"input","real")};return k.runKernel(Rn,r)}var Km=U({real_:pI});function fI(e){let r={x:M(e,"x","relu")};return k.runKernel(ii,r)}var Xm=U({relu_:fI});function dI(e){let r={x:M(e,"x","relu6")};return k.runKernel(li,r)}var jm=U({relu6_:dI});function hI(e,t=0){let o={x:M(e,"x","step")},n={alpha:t};return k.runKernel(mi,o,n)}var Ym=U({step_:hI});function Qe(e,t,r){if(Su(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=Qu(e,r);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ti(e,t,o,r)}function Qm(e,t,r){let o=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${o}, and batchDim: ${n}.`;if(r.rank<n)throw new Error(s+` update.rank < ${n}. `);if(e.length<o+(r.rank-n))throw new Error(s+` Output shape length < ${o+(r.rank-n)}`);if(r.rank!==n+e.length-o)throw new Error(s+` update.rank != ${n+e.length-o}`);for(let i=0;i<n;++i)if(r.shape[i]!==t.shape[i])throw new Error(s+` updates.shape[${i}] (${r.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<r.rank-n;++i)if(r.shape[i+n]!==e[i+o])throw new Error(s+` updates.shape[${i+n}] (${r.shape[i+n]}) != shape[${i+n}] (${e[i+n]})`)}function mI(e,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(r.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Qm(r,t,e)}function gI(e,t,r){let o=t.shape.length,n=o>1?t.shape[o-1]:1,s=r.length,i=1;for(let p=n;p<s;++p)i*=r[p];let a=n<1?1:n,l=dt(t.shape)/a,u=[...De(r.slice(0,n)),1],c=dt(r);return{sliceRank:n,numUpdates:l,sliceSize:i,strides:u,outputSize:c}}function Zm(e,t){let r=[];for(let s=0;s<t.length;s++)t[s]&&r.push(s);let o=Q(e,"int32"),n=Q([r.length,e.length],"int32");for(let s=0;s<r.length;s++){let i=o.indexToLoc(r[s]),a=s*e.length;n.values.set(i,a)}return n.toTensor()}function xI(e,t,r){let o=M(e,"x","transpose");if(t==null&&(t=o.shape.map((i,a)=>a).reverse()),F(o.rank===t.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${t}.`),t.forEach(i=>{F(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${t}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:t};return o.dtype==="complex64"?K(()=>{let i=Km(o),a=Wm(o);return i=k.runKernel(Do,{x:i},s),a=k.runKernel(Do,{x:a},s),r&&(a=Un(a)),Ii(i,a)}):k.runKernel(Do,n,s)}var Jm=U({transpose_:xI});function yI(e,t,r){if(r==null||r==="linear")return e;if(r==="relu")return q(e,Ym(t));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function wI(e,t){let r=t,o=Fi(e.shape,t.shape);return o.length>0&&(r=Ye(r,o)),vt(r,e.shape)}function bI(e,t,r,o){if(t==="linear")return e;if(t==="relu")return Xm(e);if(t==="elu")return Lm(e);if(t==="relu6")return jm(e);if(t==="prelu")return qm(e,r);if(t==="leakyrelu")return zm(e,o);if(t==="sigmoid")return Om(e);throw new Error(`Unknown fused activation ${t}.`)}var vI=(e,t)=>!(e>0)||t==="linear";function tg(e,t,r){let o=CI(e,t,r),n=o<0?-(o+1):o;e.splice(n,0,t)}function CI(e,t,r){return $I(e,t,r||SI)}function SI(e,t){return e>t?1:e<t?-1:0}function $I(e,t,r){let o=0,n=e.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=r(t,e[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function rg(e,t,r,o,n){return mc(e,t,r,o,n,0)}function og(e,t,r,o,n,s){return mc(e,t,r,o,n,0,!1,s,!0)}function ng(e,t,r,o,n,s){return mc(e,t,r,o,n,s,!0)}function mc(e,t,r,o,n,s,i=!1,a=!1,l=!1){let u=[];for(let x=0;x<t.length;x++)t[x]>n&&u.push({score:t[x],boxIndex:x,suppressBeginIndex:0});u.sort(eg);let c=s>0?-.5/s:0,p=[],f=[];for(;p.length<r&&u.length>0;){let x=u.pop(),{score:g,boxIndex:w,suppressBeginIndex:C}=x;if(g<n)break;let v=!1;for(let $=p.length-1;$>=C;--$){let T=II(e,w,p[$]);if(T>=o){v=!0;break}if(x.score=x.score*TI(o,c,T),x.score<=n)break}x.suppressBeginIndex=p.length,v||(x.score===g?(p.push(w),f.push(x.score)):x.score>n&&tg(u,x,eg))}let h=p.length,m=r-h;a&&m>0&&(p.push(...new Array(m).fill(0)),f.push(...new Array(m).fill(0)));let y={selectedIndices:p};return i&&(y.selectedScores=f),l&&(y.validOutputs=h),y}function II(e,t,r){let o=e.subarray(t*4,t*4+4),n=e.subarray(r*4,r*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),u=Math.min(n[0],n[2]),c=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),f=Math.max(n[1],n[3]),h=(a-s)*(l-i),m=(p-u)*(f-c);if(h<=0||m<=0)return 0;let y=Math.max(s,u),x=Math.max(i,c),g=Math.min(a,p),w=Math.min(l,f),C=Math.max(g-y,0)*Math.max(w-x,0);return C/(h+m-C)}function TI(e,t,r){let o=Math.exp(t*r*r);return r<=e?o:0}function eg(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var Pi=class{getClassName(){return this.constructor.className}static fromConfig(t,r){return new t(r)}},Ze=class{constructor(){this.classNameMap={}}static getMap(){return Ze.instance==null&&(Ze.instance=new Ze),Ze.instance}static register(t){Ze.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function sg(e){F(e.className!=null,()=>"Class being registered does not have the static className property defined."),F(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),F(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Ze.register(e)}var zt=class extends Pi{minimize(t,r=!1,o){let{value:n,grads:s}=this.computeGradients(t,o);if(o!=null){let i=o.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return bt(s),r?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,r){return Gm(t,r)}dispose(){this.iterations_!=null&&bt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Ft(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(zt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var Mi=class extends zt{static get className(){return"Adadelta"}constructor(t,r,o=null){super(),this.learningRate=t,this.rho=r,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:K(()=>Wt(s).variable(i))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:K(()=>Wt(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedGrads[n].variable,u=this.accumulatedUpdates[n].variable;K(()=>{let c=X(q(l,this.rho),q(le(a),1-this.rho)),p=q(It(Jt(X(u,this.epsilon)),Jt(X(l,this.epsilon))),a),f=X(q(u,this.rho),q(le(p),1-this.rho));l.assign(c),u.assign(f);let h=X(q(p,-this.learningRate),s);s.assign(h)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(bt(this.accumulatedGrads.map(t=>t.variable)),bt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=t.length/2,o=!1;this.accumulatedGrads=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.rho,r.epsilon)}};var Li=class extends zt{static get className(){return"Adagrad"}constructor(t,r=.1){super(),this.learningRate=t,this.initialAccumulatorValue=r,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:K(()=>Pm(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(t)?t[n].tensor:t[o];if(i==null)return;let a=this.accumulatedGrads[n].variable;K(()=>{let l=X(a,le(i));a.assign(l);let u=X(q(It(i,Jt(X(l,k.backend.epsilon()))),-this.learningRate),s);s.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&bt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulatedGrads=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,r){return new t(r.learningRate,r.initialAccumulatorValue)}};var Bi=class extends zt{static get className(){return"Adam"}constructor(t,r,o,n=null){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],K(()=>{this.accBeta1=Ft(r).variable(),this.accBeta2=Ft(o).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);K(()=>{let o=xe(1,this.accBeta1),n=xe(1,this.accBeta2);r.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:K(()=>Wt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:K(()=>Wt(a).variable(l))});let u=Array.isArray(t)?t[i].tensor:t[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,f=X(q(c,this.beta1),q(u,1-this.beta1)),h=X(q(p,this.beta2),q(le(u),1-this.beta2)),m=It(f,o),y=It(h,n);c.assign(f),p.assign(h);let x=X(q(It(m,X(Jt(y),this.epsilon)),-this.learningRate),a);a.assign(x)}),this.accBeta1.assign(q(this.accBeta1,this.beta1)),this.accBeta2.assign(q(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&bt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&bt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t),K(()=>{this.accBeta1.assign(Bn(this.beta1,this.iterations_+1)),this.accBeta2.assign(Bn(this.beta2,this.iterations_+1))});let r=t.length/2,o=!1;this.accumulatedFirstMoment=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon)}};var Ui=class extends zt{static get className(){return"Adamax"}constructor(t,r,o,n=null,s=0){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],K(()=>{this.iteration=Ft(0).variable(),this.accBeta1=Ft(r).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);K(()=>{let o=xe(1,this.accBeta1),n=It(-this.learningRate,X(q(this.iteration,this.decay),1));r.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:Wt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:Wt(a).variable(l)});let u=Array.isArray(t)?t[i].tensor:t[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,f=X(q(c,this.beta1),q(u,1-this.beta1)),h=q(p,this.beta2),m=Ie(u),y=Hm(h,m);c.assign(f),p.assign(y);let x=X(q(It(n,o),It(f,X(y,this.epsilon))),a);a.assign(x)}),this.iteration.assign(X(this.iteration,1)),this.accBeta1.assign(q(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&bt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&bt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)}};var zo=class extends zt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=Array.isArray(t)?t[n].tensor:t[o];if(s==null)return;let i=k.registeredVariables[o];K(()=>{let a=X(q(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=km(Ft(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,r){return new t(r.learningRate)}};var Vi=class extends zo{static get className(){return"Momentum"}constructor(t,r,o=!1){super(t),this.learningRate=t,this.momentum=r,this.useNesterov=o,this.accumulations=[],this.m=Ft(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:K(()=>Wt(s).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(t)?t[n].tensor:t[o];a!=null&&K(()=>{let l,u=X(q(this.m,i),a);this.useNesterov?l=X(q(this.c,X(a,q(u,this.m))),s):l=X(q(this.c,u),s),i.assign(u),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&bt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulations=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,r){return new t(r.learningRate,r.momentum,r.useNesterov)}};var Wi=class extends zt{static get className(){return"RMSProp"}constructor(t,r=.9,o=0,n=null,s=!1){if(super(),this.learningRate=t,this.decay=r,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=k.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:K(()=>Wt(s).variable(i))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:K(()=>Wt(s).variable(i))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:K(()=>Wt(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedMeanSquares[n].variable,u=this.accumulatedMoments[n].variable;K(()=>{let c=X(q(l,this.decay),q(le(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[n].variable,f=X(q(p,this.decay),q(a,1-this.decay)),h=It(q(a,this.learningRate),Jt(xe(c,X(le(f),this.epsilon)))),m=X(q(u,this.momentum),h);l.assign(c),p.assign(f),u.assign(m);let y=xe(s,m);s.assign(y)}else{let p=X(q(l,this.decay),q(le(a),1-this.decay)),f=X(q(u,this.momentum),It(q(a,this.learningRate),Jt(X(p,this.epsilon))));l.assign(p),u.assign(f);let h=xe(s,f);s.assign(h)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&bt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&bt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&bt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=this.centered?t.length/3:t.length/2,o=!1;this.accumulatedMeanSquares=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=t.slice(r*2,r*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,r){return new t(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)}};var EI=[Mi,Li,Bi,Ui,Vi,Wi,zo];function ig(){for(let e of EI)sg(e)}var _I="model",AI=".json",kI=".weights.bin";function ag(e){return new Promise(t=>setTimeout(t)).then(e)}var Je=class{constructor(t){if(!I().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Je.URL_SCHEME)&&(t=t.slice(Je.URL_SCHEME.length)),(t==null||t.length===0)&&(t=_I),this.modelJsonFileName=t+AI,this.weightDataFileName=t+kI}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let r=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],n=_i(t,o),s=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await ag(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=r,await ag(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Ke(t)}}}};Je.URL_SCHEME="downloads://";var RI=e=>I().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Je.URL_SCHEME)?NI(e.slice(Je.URL_SCHEME.length)):null;at.registerSaveRouter(RI);function NI(e="model"){return new Je(e)}function gc(e,t,r,o){i(e),r=r??0,o=o??1,a(r,o);let n=0,s=l=>(l.then(u=>{let c=r+ ++n/e.length*(o-r);return t(c),u}),l);function i(l){F(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){F(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),F(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),F(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(e.map(s))}async function lg(e,t){t==null&&(t={});let r=t.fetchFunc==null?I().platform.fetch:t.fetchFunc,o=e.map(p=>r(p,t.requestInit,{isBinary:!0})),n=0,s=.5,a=(t.onProgress==null?await Promise.all(o):await gc(o,t.onProgress,n,s)).map(p=>p.arrayBuffer()),l=.5,u=1;return t.onProgress==null?await Promise.all(a):await gc(a,t.onProgress,l,u)}var DI="application/octet-stream",OI="application/json",Wn=class{constructor(t,r){if(this.DEFAULT_METHOD="POST",r==null&&(r={}),this.weightPathPrefix=r.weightPathPrefix,this.onProgress=r.onProgress,this.weightUrlConverter=r.weightUrlConverter,r.fetchFunc!=null?(F(typeof r.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=r.fetchFunc):this.fetch=I().platform.fetch,F(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&F(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,r.requestInit!=null&&r.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=r.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let r=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);r.body=new FormData;let o=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],n=_i(t,o);r.body.append("model.json",new Blob([JSON.stringify(n)],{type:OI}),"model.json"),t.weightData!=null&&r.body.append("model.weights.bin",new Blob([t.weightData],{type:DI}),"model.weights.bin");let s=await this.fetch(this.path,r);if(s.ok)return{modelArtifactsInfo:Ke(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let r;try{r=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}let o=r.modelTopology,n=r.weightsManifest;if(o==null&&n==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ai(r,s=>this.loadWeights(s))}async loadWeights(t){let r=Array.isArray(this.path)?this.path[1]:this.path,[o,n]=PI(r),s=this.weightPathPrefix||o,i=Ju(t),a=[],l=[];for(let c of t)for(let p of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(p)):a.push(s+p+n);this.weightUrlConverter&&a.push(...await Promise.all(l));let u=await lg(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,Ei(u)]}};Wn.URL_SCHEME_REGEX=/^https?:\/\//;function PI(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?"),o=e.substring(0,t),n=r>t?e.substring(r):"";return[o+"/",n]}function xc(e){return e.match(Wn.URL_SCHEME_REGEX)!=null}var ug=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let r=!0;if(Array.isArray(e)?r=e.every(o=>xc(o)):r=xc(e),r)return cg(e,t)}return null};at.registerSaveRouter(ug);at.registerLoadRouter(ug);function cg(e,t){return new Wn(e,t)}function LI(e,t){let r=e.shape.length,o=t.shape.length;if(r<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>r)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${r}`);if(dt(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let n=t.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=e.shape,l=n.slice();l.pop();let u=1;for(let p=s;p<r;++p)u*=a[p],l.push(a[p]);let c=[...De(e.shape).map(p=>p/u),1].slice(0,s);return[l,i,u,c]}var Gt={};cr(Gt,{assertParamsValid:()=>UI,computeFlatOffset:()=>HI,computeOutShape:()=>WI,getNormalizedAxes:()=>zI,isSliceContinous:()=>GI,maskToAxes:()=>VI,parseSliceParams:()=>qI,sliceInfo:()=>KI,startForAxis:()=>yg,startIndicesWithElidedDims:()=>mg,stopForAxis:()=>wg,stopIndicesWithElidedDims:()=>gg,stridesForAxis:()=>xg,stridesWithElidedDims:()=>fg});var yc=-2,BI=-1;function UI(e,t,r){let o=e.shape.length;F(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),F(o===r.length,()=>`Error in slice${o}D: Length of size ${r} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)F(t[n]+r[n]<=e.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${t[n]+r[n]}) would overflow input.shape[${n}] (${e.shape[n]})`)}function VI(e){let t=[],r=0;for(;e>0;)e&1&&t.push(r),e/=2,r++;return t}function WI(e,t,r){let o=[];for(let n=0;n<e.length;n++)o[n]=Math.ceil((t[n]-e[n])/r[n]);return o}function fg(e,t,r,o){let n=[...e];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<r;s++)s===0?n[t]=1:(n.splice(t,0,1),n.pop());return n}function dg(e,t,r){return r<=e?r:r-(t-1)}function hg(e,t){let r=[];for(let o=0;o<e;o++)r.push(t+o);return r}function zI(e,t,r,o,n,s,i,a,l){let u=e.length,c=new Array(u),p=new Array(u),f=new Array(u);if(t.length&&r>0){let h=t[0],m=r+1;c=mg(i,h,m,o,e),p=gg(a,h,m,n,e),f=fg(s,h,m,e)}else for(let h=0;h<u;h++)c[h]=yg(i,o,s,e,h,l),p[h]=wg(a,n,s,e,h,l),f[h]=xg(s,h,l);return{begin:c,end:p,strides:f}}function mg(e,t,r,o,n){let s=[...n],i=hg(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let l=dg(t,r,a),u=o[l];e&1<<l&&(u=0),s[a]=u}return s}function gg(e,t,r,o,n){let s=[...n],i=hg(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=dg(t,r,a),u=o[l];e&1<<l&&(u=Number.MAX_SAFE_INTEGER),s[a]=u}for(let a=0;a<s.length;a++){let l=n[a];s[a]<0&&(s[a]+=l),s[a]=vo(0,s[a],n[a])}return s}function xg(e,t,r){let o=e[t];return(r&1<<t||o==null)&&(o=1),o}function yg(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),i=vo(0,i,l-1),i}function wg(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),a>0?i=vo(0,i,l):i=vo(-1,i,l-1),i}function GI(e,t,r){let o=r.length;for(let n=0;n<r.length;n++)if(r[n]>1){o=n;break}for(let n=o+1;n<r.length;n++)if(t[n]>0||r[n]!==e[n])return!1;return!0}function HI(e,t){let r=e.length>0?e[e.length-1]:1;for(let o=0;o<e.length-1;o++)r+=e[o]*t[o];return r}function qI(e,t,r){let o,n=e.shape.length;typeof t=="number"?o=[t,...new Array(n-1).fill(0)]:t.length<n?o=t.concat(new Array(n-t.length).fill(0)):o=t.slice(),o.forEach(i=>{F(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return r==null?s=new Array(n).fill(-1):typeof r=="number"?s=[r,...new Array(n-1).fill(-1)]:r.length<n?s=r.concat(new Array(n-r.length).fill(-1)):s=r,s=s.map((i,a)=>i>=0?i:(F(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),e.shape[a]-o[a])),[o,s]}function KI(e,t,r,o,n,s,i,a,l){let u;if(o==null?(u=new Array(t.length),u.fill(1)):u=o,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1,p={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:u.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let C=0;C<p.dims;C++)c&&1<<C&a&&p.numAddAxisAfterEllipsis++,1<<C&i&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};XI(p,f);let h=!0,m=!0,y=!0,x=[],g=[];for(let C=0;C<e.length;++C){if(f.strides[C]===0)throw Error(`strides[${C}] must be non-zero`);let v=!!(f.shrinkAxisMask&1<<C),$=e[C];if($===-1){x.push(v?1:-1);continue}let T=[f.beginMask&1<<C,f.endMask&1<<C],E=[f.strides[C]>0?0:-1,f.strides[C]>0?$:$-1];if(v&&f.strides[C]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&f.strides[C]===1;let _=!!(f.beginMask&1<<C&&f.endMask&1<<C);if(f.beginValid&&f.endValid){if(v){let z=f.begin[C]<0?$+f.begin[C]:f.begin[C];if(f.begin[C]=z,f.end[C]=f.begin[C]+1,z<0||z>=$)throw Error(`slice index ${f.begin[C]} of dimension ${C} out of bounds.`)}else f.begin[C]=pg(f.begin[C],0,f.strides[C],$,T,E),f.end[C]=pg(f.end[C],1,f.strides[C],$,T,E);let V=f.strides[C]===1&&f.begin[C]===0&&f.end[C]===$;h=h&&V,m=m&&(C===0&&f.strides[C]===1||V)}else h=h&&f.strides[C]===1&&_,m=m&&(C===0&&f.strides[C]===1||_);let N,O=!1;if(f.beginValid&&f.endValid?(N=f.end[C]-f.begin[C],O=!0):v?(N=1,O=!0):_&&$>=0&&(f.strides[C]<0?N=-$:N=$,O=!0),O){let V;N===0||N<0!=f.strides[C]<0?V=0:V=Math.trunc(N/f.strides[C])+(N%f.strides[C]!==0?1:0),x.push(V)}else x.push(-1)}for(let C=0;C<f.finalShapeGatherIndices.length;++C){let v=f.finalShapeGatherIndices[C];v>=0?g.push(x[v]):v===yc&&g.push(1)}return{finalShapeSparse:g.filter((C,v)=>f.finalShapeGatherIndices[v]!==yc),finalShape:g,isIdentity:h,sliceDim0:m,isSimpleSlice:y,begin:f.begin,end:f.end,strides:f.strides}}function XI(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let r=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<e.dims;o++)if(1<<o&e.ellipsisMask){let n=Math.min(t.dims-(e.dims-o)+1+e.numAddAxisAfterEllipsis,t.dims);for(;r<n;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=o}else if(1<<o&e.newAxisMask)t.finalShapeGatherIndices.push(yc),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error(`Index out of range using input dim ${r}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[r]=e.begin[o]),e.end!=null&&(t.end[r]=e.end[o]),t.strides[r]=e.strides[o],e.beginMask&1<<o&&(t.beginMask|=1<<r),e.endMask&1<<o&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(BI),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[r]=o,r++}}function pg(e,t,r,o,n,s){if(n[t])return r>0?s[t]:s[t+1&1];{let i=e<0?o+e:e;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var jI=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function wc(){return new Promise(e=>jI(()=>e()))}var S={};cr(S,{ERF_A1:()=>fT,ERF_A2:()=>dT,ERF_A3:()=>hT,ERF_A4:()=>mT,ERF_A5:()=>gT,ERF_P:()=>pT,PARALLELIZE_THRESHOLD:()=>zi,RowPartitionType:()=>Le,SELU_SCALE:()=>cT,SELU_SCALEALPHA:()=>uT,applyActivation:()=>bI,assertAndGetBroadcastShape:()=>Di,assertAxesAreInnerMostDims:()=>K2,assertParamsConsistent:()=>YI,assignToTypedArray:()=>CT,axesAreInnerMostDims:()=>fc,calculateShapes:()=>gI,checkEinsumDimSizes:()=>_T,checkPadOnDimRoundingMode:()=>L2,combineLocations:()=>Bm,combineRaggedTensorToTensorShapes:()=>ZI,complexWithEvenIndex:()=>wT,complexWithOddIndex:()=>bT,computeConv2DInfo:()=>lc,computeConv3DInfo:()=>Fm,computeDefaultPad:()=>uc,computeDilation2DInfo:()=>A2,computeOptimalWindowSize:()=>rT,computeOutAndReduceShapes:()=>q2,computeOutShape:()=>QI,computePool2DInfo:()=>k2,computePool3DInfo:()=>R2,convertConv2DDataFormat:()=>Dm,decodeEinsumEquation:()=>TT,eitherStridesOrDilationsAreOne:()=>P2,expandShapeToKeepDim:()=>dc,exponent:()=>$T,exponents:()=>ST,fromStringArrayToUint8:()=>jT,fromUint8ToStringArray:()=>XT,getAxesPermutation:()=>X2,getBroadcastDims:()=>Mm,getComplexWithIndex:()=>vT,getEinsumComputePath:()=>AT,getEinsumPermutation:()=>ET,getFusedBiasGradient:()=>wI,getFusedDyActivation:()=>yI,getImageCenter:()=>oT,getInnerMostAxes:()=>Y2,getPermuted:()=>sT,getRaggedRank:()=>tT,getReductionAxes:()=>Fi,getReshaped:()=>nT,getReshapedPermuted:()=>iT,getRowPartitionTypesHelper:()=>JI,getSliceBeginCoords:()=>aT,getSliceSize:()=>lT,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>FT,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>DT,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>OT,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>LT,getSparseReshapeInputOutputMismatchErrorMessage:()=>UT,getSparseReshapeInputOutputMultipleErrorMessage:()=>BT,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>PT,getSparseReshapeNegativeOutputDimErrorMessage:()=>MT,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>GT,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>VT,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>WT,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>zT,getUndoAxesPermutation:()=>j2,isIdentityPermutation:()=>kT,log:()=>B$,mergeRealAndImagArrays:()=>xT,prepareAndValidate:()=>LI,prepareSplitSize:()=>NT,segment_util:()=>vc,shouldFuse:()=>vI,slice_util:()=>Gt,splitRealAndImagArrays:()=>yT,stridesOrDilationsArePositive:()=>M2,tupleValuesAreOne:()=>ac,upcastType:()=>Nt,validateDefaultValueShape:()=>eT,validateInput:()=>mI,validateUpdateShape:()=>Qm,warn:()=>He});function YI(e,t){let r=e[0].length;e.forEach((n,s)=>{F(n.length===r,()=>`Error in concat${r}D: rank of tensors[${s}] must be the same as the rank of the rest (${r})`)}),F(t>=0&&t<r,()=>`Error in concat${r}D: axis must be between 0 and ${r-1}.`);let o=e[0];e.forEach((n,s)=>{for(let i=0;i<r;i++)F(i===t||n[i]===o[i],()=>`Error in concat${r}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function QI(e,t){let r=e[0].slice();for(let o=1;o<e.length;o++)r[t]+=e[o][t];return r}var Le;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(Le||(Le={}));function ZI(e,t,r){let o=new Array;if(r==null&&t==null)return o;if(t==null)for(;o.length<e+r.length;)o.push(-1);else o=t.slice();if(r==null)return o;if(e+r.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+r.length}, but shape.rank = ${o.length}`);for(let n=1;n<r.length;++n){let s=r[n],i=o[o.length-r.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+e}] = ${s} but shape[${n+e}] = ${a}`)}else o[i]=s}return o}function JI(e){let t={FIRST_DIM_SIZE:Le.FIRST_DIM_SIZE,VALUE_ROWIDS:Le.VALUE_ROWIDS,ROW_LENGTHS:Le.ROW_LENGTHS,ROW_SPLITS:Le.ROW_SPLITS,ROW_LIMITS:Le.ROW_LIMITS,ROW_STARTS:Le.ROW_STARTS},r=[];for(let o of e)if(o in t)r.push(t[o]);else break;return r}function tT(e){return e.length===0?0:e[0]===Le.FIRST_DIM_SIZE?e.length-1:e.length}function eT(e,t){if(e==null||t==null)return;let r=e.length,o=t.length;if(r>=o)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${r} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(r,o-1);++n){let s=e[n],i=t[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-e.length}] = ${s} but ragged tensor input.flatValues.shape[${n-e.length}] = ${i}`)}}var zi=30;function rT(e){return e<=zi?e:To(e,Math.floor(Math.sqrt(e)))}function oT(e,t,r){let o=r*(typeof e=="number"?e:e[0]),n=t*(typeof e=="number"?e:e[1]);return[o,n]}function nT(e,t,r,o=!0){let n=[];if(o)n=n.concat(t.slice(0)),n.push(e[0]/r),n=n.concat(e.slice(1));else{n=n.concat(e[0]);let s=t.length;for(let i=0;i<s;++i)n=n.concat([e[i+1]/t[i],t[i]]);n=n.concat(e.slice(s+1))}return n}function sT(e,t,r=!0){let o=[];if(r){o.push(t);for(let n=t+1;n<e;++n)n<=2*t?(o.push(n),o.push(n-(t+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<e;++i)i>=t*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function iT(e,t,r,o=!0){let n=[];o?n.push(e[0]/r):n.push(e[0]*r);for(let s=1;s<e.length;++s)s<=t.length?o?n.push(t[s-1]*e[s]):n.push(e[s]/t[s-1]):n.push(e[s]);return n}function aT(e,t){let r=[0];for(let o=0;o<t;++o)r.push(e[o][0]);return r}function lT(e,t,r){let o=e.slice(0,1);for(let n=0;n<r;++n)o.push(e[n+1]-t[n][0]-t[n][1]);return o}var uT=1.7580993408473768,cT=1.0507009873554805;var pT=.3275911,fT=.254829592,dT=-.284496736,hT=1.421413741,mT=-1.453152027,gT=1.061405429;function xT(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let r=new Float32Array(e.length*2);for(let o=0;o<r.length;o+=2)r[o]=e[o/2],r[o+1]=t[o/2];return r}function yT(e){let t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let o=0;o<e.length;o+=2)t[o/2]=e[o],r[o/2]=e[o+1];return{real:t,imag:r}}function wT(e){let t=Math.ceil(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=0;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function bT(e){let t=Math.floor(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=2;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function vT(e,t){let r=e[t*2],o=e[t*2+1];return{real:r,imag:o}}function CT(e,t,r,o){e[o*2]=t,e[o*2+1]=r}function ST(e,t){let r=new Float32Array(e/2),o=new Float32Array(e/2);for(let n=0;n<Math.ceil(e/2);n++){let s=(t?2:-2)*Math.PI*(n/e);r[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:r,imag:o}}function $T(e,t,r){let o=(r?2:-2)*Math.PI*(e/t),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var bc="->",IT=/->/g,bg=",",vg="...";function TT(e,t){e=e.replace(/\s/g,"");let r=(e.length-e.replace(IT,"").length)/bc.length;if(r<1)throw new Error("Equations without an arrow are not supported.");if(r>1)throw new Error(`Equation must contain exactly one arrow ("${bc}").`);let[o,n]=e.split(bc);F(o.indexOf(vg)===-1,()=>`The ellipsis notation ("${vg}") is not supported yet.`);let s=o.split(bg),i=s.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let f=0;f<n.length;++f){let h=n[f];if(!s.some(m=>m.indexOf(h)!==-1))throw new Error(`Output subscripts contain the label ${h} not present in the input subscripts.`);a.indexOf(h)===-1&&a.push(h)}for(let f=0;f<o.length;++f){let h=o[f];a.indexOf(h)===-1&&h!==bg&&a.push(h)}let l=new Array(s.length);for(let f=0;f<i;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let h=0;h<s[f].length;++h)l[f].push(a.indexOf(s[f][h]))}let u=a.length,c=n.length,p=[];for(let f=c;f<u;++f)p.push(f);return{allDims:a,summedDims:p,idDims:l}}function ET(e,t){let r=new Array(e);r.fill(-1);for(let n=0;n<t.length;++n)r[t[n]]=n;let o=[];for(let n=0;n<e;++n)r[n]===-1&&o.push(n);return r=r.filter(n=>n!==-1),{permutationIndices:r,expandDims:o}}function _T(e,t,r){let o=new Array(e);for(let n=0;n<r.length;++n){let s=r[n].shape;for(let i=0;i<t[n].length;++i)o[t[n][i]]===void 0?o[t[n][i]]=s[i]:F(o[t[n][i]]===s[i],()=>`Expected dimension ${o[t[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function AT(e,t){let r=e,o=[],n=0;e.length===0&&r.push(-1),n=e.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<r.length;++i){let a=r[i],l=RT(t,a);for(let u of l)s.indexOf(u)===-1&&(o[i].push(u),s.push(u))}return{path:r,steps:o}}function kT(e){return e.every((t,r)=>t===r)}function RT(e,t){let r=[];for(let o=0;o<e.length;++o)(e[o].length===0||e[o].indexOf(t)!==-1||t===-1)&&r.push(o);return r}function NT(e,t,r=0){let o=[];if(typeof t=="number")F(e.shape[r]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(e.shape[r]/t);else{let n=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);F(n<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let i=t.reduce((a,l)=>l>0?a+l:a);t[s]=e.shape[r]-i}F(e.shape[r]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}function FT(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function DT(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function OT(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`}function PT(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function MT(e,t){return`size ${e} must be non-negative, not ${t}`}function LT(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function BT(e,t){let r=dt(e),o=dt(t);return`Input to reshape is a SparseTensor with ${r}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${e} outputShape= ${t}`}function UT(e,t){let r=dt(e),o=dt(t);return`Input to reshape is a tensor with ${r} dense values, but the requested shape has ${o}. inputShape=${e} outputShape=${t}`}function VT(){return"segment ids must be >= 0"}function WT(){return"segment ids are not increasing"}function zT(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function GT(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`}var vc={};cr(vc,{collectGatherOpShapeInfo:()=>KT,computeOutShape:()=>qT,segOpComputeOptimalWindowSize:()=>HT});function HT(e,t){let r=!1,o;for(e<=zi?(o=e,r=!0):o=To(e,Math.floor(Math.sqrt(e)));!r;)o>t||o===e?r=!0:o=To(e,o+1);return o}function qT(e,t,r){let o=[],n=e.length;for(let s=0;s<n;s++)s!==t?o.push(e[s]):o.push(r);return o}function KT(e,t,r,o){let n=t.shape.length,s=e.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(r<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${r}).`);for(let p=0;p<o;++p)if(e.shape[p]!==t.shape[p])throw new Error(`x.shape[${p}]: ${e.shape[p]} should be equal to indices.shape[${p}]: ${t.shape[p]}.`);let i=e.shape[r],a=[],l=1,u=1,c=1;for(let p=0;p<o;++p)a.push(e.shape[p]),l*=e.shape[p];for(let p=o;p<r;p++)a.push(e.shape[p]),u*=e.shape[p];for(let p=o;p<n;p++)a.push(t.shape[p]);for(let p=r+1;p<s;p++)a.push(e.shape[p]),c*=e.shape[p];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:i,outputShape:a}}function XT(e){try{return e.map(t=>Bo(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function jT(e){return e.map(t=>Lo(t))}var Be={};cr(Be,{nonMaxSuppressionV3Impl:()=>rg,nonMaxSuppressionV4Impl:()=>og,nonMaxSuppressionV5Impl:()=>ng,whereImpl:()=>Zm});ig();var qr={},Gi={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Cg(e,t){qr[e]=t}function te(e,t){if(!(e in qr)||t!=null){let o=QT(e,t);if(o!==null)qr[e]=o;else return console.log("Could not get context for WebGL version",e),null}let r=qr[e];return r==null||r.isContextLost()?(delete qr[e],te(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),qr[e])}function YT(e){if(!I().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&e===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function QT(e,t){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=t??YT(e);return r.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete qr[e]},!1),I().getBool("SOFTWARE_WEBGL_ENABLED")&&(Gi.failIfMajorPerformanceCaveat=!1),e===1?r.getContext("webgl",Gi)||r.getContext("experimental-webgl",Gi):r.getContext("webgl2",Gi)}var yr;(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(yr||(yr={}));var kt;(function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"})(kt||(kt={}));var Tt;(function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Tt||(Tt={}));function Kr(e,t){return[t,e]}function Sg(e,t){return e*t}function zn(e){let t=b.sizeFromShape(e),r=Math.ceil(t/4);return b.sizeToSquarishShape(r)}function Ue(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function $g(e,t){let[r,o]=Ue(e,t);return r*o*4}function Gn(e,t){let r=e,o,n,s,i,a,l,u,c,p,f;return I().getNumber("WEBGL_VERSION")===2?(o=r.R32F,n=r.R16F,s=r.RGBA16F,i=r.RGBA32F,a=r.RED,u=4,c=1,p=r.HALF_FLOAT,f=r.FLOAT,l=r.RGBA8):(o=e.RGBA,n=e.RGBA,s=e.RGBA,i=r.RGBA,a=e.RGBA,u=4,c=4,p=t!=null?t.HALF_FLOAT_OES:null,f=e.FLOAT,l=e.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:f}}function L(e,t){let r=t();return I().getBool("DEBUG")&&ZT(e),r}function ZT(e){let t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+eE(e,t))}var JT=596e-10,tE=65504;function Ig(e){return!!(I().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||JT<Math.abs(e)&&Math.abs(e)<tE)}function eE(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Hn(e,t){return tr(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function Tg(e,t){let r=tr(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(L(e,()=>e.shaderSource(r,t)),L(e,()=>e.compileShader(r)),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Eg(e,t){let r=tr(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(L(e,()=>e.shaderSource(r,t)),L(e,()=>e.compileShader(r)),I().get("ENGINE_COMPILE_ONLY"))return r;if(e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw Ec(t,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var rE=/ERROR: [0-9]+:([0-9]+):/g;function Ec(e,t){let r=rE.exec(t);if(r==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let o=+r[1],n=e.split(`
`),s=n.length.toString().length+2,i=n.map((p,f)=>b.rightPad((f+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let l=i.slice(0,o-1),u=i.slice(o-1,o),c=i.slice(o);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${b.rightPad(u[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function _g(e){return tr(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function Ag(e,t){if(L(e,()=>e.linkProgram(t)),!I().get("ENGINE_COMPILE_ONLY")&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function qi(e,t){if(L(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function kg(e,t){let r=tr(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),L(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function Rg(e,t){let r=tr(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return L(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),L(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function Ng(e){return tr(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function Fg(e,t){let r=I().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){let o=`[${e}x${t}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(e>r||t>r){let o=`[${e}x${t}]`,n=`[${r}x${r}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function Dg(e){return tr(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function _c(e,t,r,o,n,s,i){let a=e.getAttribLocation(t,r);return a===-1?!1:(L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,o)),L(e,()=>e.vertexAttribPointer(a,n,e.FLOAT,!1,s,i)),L(e,()=>e.enableVertexAttribArray(a)),!0)}function oE(e,t,r){sE(e,r),L(e,()=>e.activeTexture(e.TEXTURE0+r)),L(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function Og(e,t,r){return tr(e,()=>e.getUniformLocation(t,r),'uniform "'+r+'" not present in program.')}function Pg(e,t,r){return e.getUniformLocation(t,r)}function Mg(e,t,r,o){L(e,()=>oE(e,t,o)),L(e,()=>e.uniform1i(r,o))}function Ki(e,t,r){L(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),L(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Ac(e,t){L(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),L(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function qn(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+nE(e,t))}function nE(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function tr(e,t,r){let o=L(e,()=>t());if(o==null)throw new Error(r);return o}function sE(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=t+e.TEXTURE0;if(o<e.TEXTURE0||o>r){let n=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw new Error(`textureUnit must be in ${n}.`)}}function wr(e,t=2){return b.sizeFromShape(e.slice(0,e.length-t))}function br(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Kn(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[wr(e),...br(e)]),t}function Lg(e,t=!1){let r=I().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=I().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&I().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=r/2),t&&(r=r*2,o=o*2,e=e.map((a,l)=>l>=e.length-2?b.nearestLargerEven(e[l]):e[l]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=b.squeezeShape(e).newShape);let n=b.sizeFromShape(e),s=null;e.length<=1&&n<=r?s=[1,n]:e.length===2&&e[0]<=r&&e[1]<=r?s=e:e.length===3&&e[0]*e[1]<=r&&e[2]<=r?s=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=r&&e[1]*e[2]<=r?s=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r?s=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(s=[e[0],e[1]*e[2]*e[3]]);let i=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(s==null||i)if(t){let a=wr(e),l=2,u=2;e.length&&([l,u]=br(e)),n=a*(l/2)*(u/2),s=b.sizeToSquarishShape(n).map(c=>c*2)}else s=b.sizeToSquarishShape(n);return s}function Hi(e){return e%2===0}function Xr(e,t){if(e=e.slice(-2),t=t.slice(-2),b.arraysEqual(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let r=e[e.length-1],o=t[t.length-1];if(r===o||Hi(r)&&Hi(o)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Hi(e[0])&&Hi(t[0])}var $c,Ic;function Bg(e){if($c==null){let t=te(e);$c=t.getParameter(t.MAX_TEXTURE_SIZE)}return $c}function Ug(e){if(Ic==null){let t=te(e);Ic=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ic)}function Vg(e){if(e===0)return 0;let t,r=te(e);return ue(r,"EXT_disjoint_timer_query_webgl2")&&e===2?t=2:ue(r,"EXT_disjoint_timer_query")?t=1:t=0,t}function ue(e,t){return e.getExtension(t)!=null}function kc(e){try{if(te(e)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function Wg(e){if(e===0)return!1;let t=te(e);if(e===1){if(!ue(t,"OES_texture_float"))return!1}else if(!ue(t,"EXT_color_buffer_float"))return!1;return Tc(t)}function zg(e){if(e===0)return!1;let t=te(e);if(e===1){if(!ue(t,"OES_texture_float")||!ue(t,"WEBGL_color_buffer_float"))return!1}else{if(ue(t,"EXT_color_buffer_float"))return Tc(t);let o="EXT_color_buffer_half_float";if(ue(t,o)){let n=t.getExtension(o);return iE(t,n)}return!1}return Tc(t)}function Tc(e){let t=Gn(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let o=1,n=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,o,n,0,t.textureFormatFloat,t.textureTypeFloat,null);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(s),i}function iE(e,t){let r=Gn(e,t),o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o);let n=1,s=1;e.texImage2D(e.TEXTURE_2D,0,r.internalFormatHalfFloat,n,s,0,r.textureFormatFloat,r.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(o),e.deleteFramebuffer(i),a}function Gg(e){return e!==2?!1:te(e).fenceSync!=null}function Ve(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&b.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var W=I();W.registerFlag("HAS_WEBGL",()=>W.getNumber("WEBGL_VERSION")>0);W.registerFlag("WEBGL_VERSION",()=>kc(2)?2:kc(1)?1:0);W.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);W.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>W.get("WEBGL_VERSION")===2);W.registerFlag("WEBGL_CPU_FORWARD",()=>!0);W.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);W.registerFlag("WEBGL_PACK",()=>W.getBool("HAS_WEBGL"));W.registerFlag("WEBGL_PACK_NORMALIZATION",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_CLIP",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_PACK_REDUCE",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_LAZILY_UNPACK",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_CONV_IM2COL",()=>W.getBool("WEBGL_PACK"));W.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Bg(W.getNumber("WEBGL_VERSION")));W.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Ug(W.getNumber("WEBGL_VERSION")));W.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=W.getNumber("WEBGL_VERSION");return e===0?0:Vg(e)});W.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>W.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!gr.isMobile());W.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Wg(W.getNumber("WEBGL_VERSION")));W.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>W.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:W.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));W.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>zg(W.getNumber("WEBGL_VERSION")));W.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Gg(W.getNumber("WEBGL_VERSION")));W.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>W.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);W.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)});W.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>gr.isMobile()?1:-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)});W.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);W.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);W.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);W.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);W.registerFlag("WEBGL_EXP_CONV",()=>!1);W.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>W.getBool("IS_TEST"));W.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);W.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);W.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);W.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function ot(){let e,t,r,o,n,s,i,a,l,u;return I().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",r="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=I().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",r="varying",o="varying",n="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:r,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:u}}function Te(e,t,r="index"){let o=b.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / ${n}`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * ${n}`:`index -= ${e[s]} * ${n}`;return`${i}; ${a};`}).join("")}function jr(e,t,r="index"){let o=b.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * outShapeStrides[${s}]`:`index -= ${e[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function aE(e,t){let r=e.length,o=e.map(s=>`${t}[${s}]`),n=new Array(r-1);n[r-2]=o[r-1];for(let s=r-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function Hg(e,t,r="index"){let o=e.map((s,i)=>i),n=aE(o,t);return n.map((s,i)=>{let a=`int ${e[i]} = ${r} / ${n[i]}`,l=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * ${n[i]}`:`index -= ${e[i]} * ${n[i]}`;return`${a}; ${l};`}).join("")}function Go(e){let t=b.computeStrides(e).map(r=>r.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Ho(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var ji=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:qg}=S;function Kg(e,t,r){let o=[];if(e.forEach(h=>{let m=b.sizeFromShape(h.shapeInfo.logicalShape);if(h.shapeInfo.isUniform?o.push(`uniform float ${h.name}${m>1?`[${m}]`:""};`):(o.push(`uniform sampler2D ${h.name};`),o.push(`uniform int offset${h.name};`)),r.enableShapeUniforms){let{uniformShape:y}=Yi(r.packedInputs,h.shapeInfo.logicalShape,h.shapeInfo.texShape);switch(y.length){case 1:o.push(`uniform int ${h.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${h.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${h.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${h.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${h.name}TexShape;`)}}),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach(h=>{o.push(`uniform ${h.type} ${h.name}${h.arrayIndex?`[${h.arrayIndex}]`:""};`)});let n=o.join(`
`),s=e.map(h=>lE(h,t,r.packedInputs,r.enableShapeUniforms)).join(`
`),i=t.texShape,a=ot(),l=pE(a),u,c,p=hE(a);return t.isPacked?(u=uE(t.logicalShape,i,r.enableShapeUniforms),c=dE(a)):(u=cE(t.logicalShape,i,r.enableShapeUniforms),c=fE(a)),r.packedInputs&&(p+=yE),[p,l,c,n,u,s,r.userCode].join(`
`)}function Ko(e,t=!1){let r=e.shapeInfo.logicalShape;switch(r.length){case 0:return kE(e,t);case 1:return NE(e,t);case 2:return DE(e,t);case 3:return PE(e,t);case 4:return LE(e,t);case 5:return BE(e);case 6:return UE(e);default:throw new Error(`${r.length}-D input sampling is not yet supported`)}}function Xg(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return AE(e);case 1:return RE(e,t);case 2:return FE(e,t);case 3:return OE(e,t);default:return ME(e,t)}}function lE(e,t,r=!1,o){let n="";r?n+=Xg(e,o):n+=Ko(e,o);let s=e.shapeInfo.logicalShape,i=t.logicalShape;return s.length<=i.length&&(r?n+=VE(e,t):n+=WE(e,t)),n}function uE(e,t,r){switch(e.length){case 0:return jg();case 1:return wE(e,t,r);case 2:return EE(e,t,r);case 3:return vE(e,t,r);default:return SE(e,t,r)}}function cE(e,t,r){switch(e.length){case 0:return jg();case 1:return bE(e,t,r);case 2:return _E(e,t,r);case 3:return CE(e,t,r);case 4:return $E(e,t,r);case 5:return IE(e,t);case 6:return TE(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function pE(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function fE(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function dE(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function hE(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${mE}
    ${gE}
    ${xE}
  `}var mE=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,gE=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,xE=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,yE=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function jg(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function wE(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return o[0]===1?r?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${o[1]}.0);
      }
    `:o[1]===1?r?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${o[0]}.0);
      }
    `:r?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      return 2 * (resTexRC.x * ${o[1]} + resTexRC.y);
    }
  `}function bE(e,t,r){return t[0]===1?r?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?r?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:r?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function vE(e,t,r){if(r)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(e[2]/2),s=n*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec3(b, r, c);
    }
  `}function CE(e,t,r){if(r)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${jr(["r","c","d"],e)}
    return ivec3(r, c, d);
  }
`;let o=Te(["r","c","d"],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function SE(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(e[e.length-1]/2),s=n*Math.ceil(e[e.length-2]/2),i=s,a="",l="b, r, c";for(let u=2;u<e.length-1;u++)i*=e[e.length-u-1],a=`
      int b${u} = index / ${i};
      index -= b${u} * ${i};
    `+a,l=`b${u}, `+l;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${e.length}(${l});
    }
  `}function $E(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${jr(["r","c","d","d2"],e)}
      return ivec4(r, c, d, d2);
    }
  `;let o=Te(["r","c","d","d2"],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function IE(e,t){let r=Te(["r","c","d","d2","d3"],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function TE(e,t){let r=Te(["r","c","d","d2","d3","d4"],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function EE(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(b.arraysEqual(e,t))return r?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `;let n=Math.ceil(e[1]/2);return r?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));

      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec2(r, c);
    }
  `}function _E(e,t,r){return b.arraysEqual(e,t)?r?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?r?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?r?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:r?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function Yr(e){return`offset${e}`}function AE(e){let t=e.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),o=ot();return`
    vec4 ${r}() {
      return ${o.texture2D}(${t}, halfCR);
    }
  `}function kE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${o}() {return ${r};}`;let[n,s]=e.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${r}, halfCR);
      }
    `;let i=Yr(r);if(t)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${i});
      return sampleTexture(${r}, uv);
    }
  `;let[a,l]=e.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${r}, uv);
    }
  `}function RE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=e.shapeInfo.texShape,s=ot();if(t)return`
    vec4 ${o}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${r}, uv);
    }
  `;let i=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${o}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${r}, uv);
    }
  `}function NE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${Xo(e)}
      }
    `;let n=e.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${r}, halfCR);
      }
    `;let a=Yr(r);return i===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${r}, uv);
      }
    `:s===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${r}, uv);
      }
    `:t?`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${a});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${r}, uv);
    }
  `}function FE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=s[0],a=s[1],l=ot();if(s!=null&&b.arraysEqual(r,s))return t?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);

        return ${l.texture2D}(${o}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${o}, uv);
      }
    `;if(t)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `;let u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(r[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `}function DE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape;if(s!=null&&b.arraysEqual(r,s)){if(t)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let f=s[0],h=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${h}.0, ${f}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=b.squeezeShape(r),l=i;if(l.length<r.length){let f=jo(e,l),h=["row","col"];return`
      ${Ko(f,t)}
      float ${n}(int row, int col) {
        return ${n}(${Yo(h,a)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${r[1]}, 1)));
        ${Xo(e)}
      }
    `;let u=s[0],c=s[1],p=Yr(o);return c===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${r[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${o}, uv);
    }
  `:u===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${r[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${o}, uv);
    }
  `:t?`
      float ${n}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
        return sampleTexture(${o}, uv);
      }
    `:`
  float ${n}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${r[1]} + col + ${p};
    vec2 uv = uvFromFlat(${u}, ${c}, index);
    return sampleTexture(${o}, uv);
  }
`}function OE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(r[0]===1){let f=r.slice(1),h=[1,2],m=jo(e,f),y=["b","row","col"];return`
        ${Xg(m,t)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${Yo(y,h)});
        }
      `}let a=ot();if(t)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `;let l=i[0],u=i[1],c=Math.ceil(r[2]/2),p=c*Math.ceil(r[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${u}, ${p}, ${c}, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `}function PE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[1]*r[2],i=r[2],{newShape:a,keptDims:l}=b.squeezeShape(r),u=a;if(u.length<r.length){let y=jo(e,u),x=["row","col","depth"];return`
        ${Ko(y,t)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${Yo(x,l)});
        }
      `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${Xo(e)}
      }
    `;let c=e.shapeInfo.texShape,p=c[0],f=c[1],h=e.shapeInfo.flatOffset;if(f===s&&h==null)return t?`
      float ${n}(int row, int col, int depth) {
        int stride1 = ${o}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
        float ${n}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${p}.0);
          return sampleTexture(${o}, uv);
        }
      `;if(f===i&&h==null)return t?`
      float ${n}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${o}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${r[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${p}.0);
      return sampleTexture(${o}, uv);
    }
  `;let m=Yr(o);return t?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${m};
        vec2 uv = uvFromFlat(${p}, ${f}, index);
        return sampleTexture(${o}, uv);
      }
  `}function ME(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=ot();if(t)return`
    vec4 ${o}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${r}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${r}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${r}, uv);
    }
  `;let s=e.shapeInfo.logicalShape,i=s.length,a=e.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=l[0],c=l[1],p=Math.ceil(s[i-1]/2),f=p*Math.ceil(s[i-2]/2),h="int b, int row, int col",m=`b * ${f} + (row / 2) * ${p} + (col / 2)`;for(let y=2;y<i-1;y++)h=`int b${y}, `+h,f*=s[i-y-1],m=`b${y} * ${f} + `+m;return`
    vec4 ${o}(${h}) {
      int index = ${m};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${u});
      return ${n.texture2D}(${r}, uv);
    }
  `}function LE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[3],i=r[2]*s,a=r[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(r);if(l.length<r.length){let w=jo(e,l),C=["row","col","depth","depth2"];return`
      ${Ko(w,t)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${Yo(C,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${Xo(e)}
      }
    `;let c=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],h=p[1],m=`int stride2 = ${o}Shape[3];`,y=`int stride1 = ${o}Shape[2] * stride2;`,x=`int stride0 = ${o}Shape[1] * stride1;`;if(h===a&&c==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${m}
        ${y}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(h===s&&c==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${o}Shape[1] * ${o}Shape[2], ${o}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r[1]*r[2]}, ${r[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${o}, uv);
      }
    `;let g=Yr(o);return t?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${y}
      ${x}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${g});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${f}, ${h}, index + ${g});
      return sampleTexture(${o}, uv);
    }
  `}function BE(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=t[4],s=t[3]*n,i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(t);if(l.length<t.length){let y=jo(e,l),x=["row","col","depth","depth2","depth3"];return`
      ${Ko(y)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${Yo(x,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${Xo(e)}
      }
    `;let c=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],h=p[1];if(h===a&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(h===n&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let m=Yr(r);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${m};
      vec2 uv = uvFromFlat(${f}, ${h}, index);
      return sampleTexture(${r}, uv);
    }
  `}function UE(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),{newShape:n,keptDims:s}=b.squeezeShape(t);if(n.length<t.length){let x=jo(e,n),g=["row","col","depth","depth2","depth3","depth4"];return`
      ${Ko(x)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${Yo(g,s)});
      }
    `}let i=t[5],a=t[4]*i,l=t[3]*a,u=t[2]*l,c=t[1]*u;if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${u}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Xo(e)}
      }
    `;let p=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,h=f[0],m=f[1];if(m===c&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${h}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(m===i&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${h}.0);
        return sampleTexture(${r}, uv);
      }
    `;let y=Yr(r);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${u} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${y};
      vec2 uv = uvFromFlat(${h}, ${m}, index);
      return sampleTexture(${r}, uv);
    }
  `}function Xo(e){let t=e.name,r=b.sizeFromShape(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`
    for (int i = 0; i < ${r}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function VE(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=qg(e.shapeInfo.logicalShape,t.logicalShape),l=H(i),u=i-s,c,p=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map(w=>`coords.${p[w+u]} = 0;`).join(`
`);let f="";i<2&&s>0?f="coords":f=e.shapeInfo.logicalShape.map((w,C)=>`coords.${p[C+u]}`).join(", ");let h="return outputValue;",y=b.sizeFromShape(e.shapeInfo.logicalShape)===1,g=b.sizeFromShape(t.logicalShape)===1;if(s===1&&!y&&!g)h=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(y&&!g)i===1?h=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:h=`
        return vec4(outputValue.x);
      `;else if(a.length){let w=s-2,C=s-1;a.indexOf(w)>-1&&a.indexOf(C)>-1?h="return vec4(outputValue.x);":a.indexOf(w)>-1?h="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(C)>-1&&(h="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${l} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${o}(${f});
      ${h}
    }
  `}function WE(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=t.texShape,i=e.shapeInfo.texShape,a=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&a===l&&e.shapeInfo.flatOffset==null&&b.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${r}, resultUV);
      }
    `;let u=H(l),c=qg(e.shapeInfo.logicalShape,t.logicalShape),p=l-a,f,h=["x","y","z","w","u","v"];a===0?f="":l<2&&c.length>=1?f="coords = 0;":f=c.map(y=>`coords.${h[y+p]} = 0;`).join(`
`);let m="";return l<2&&a>0?m="coords":m=e.shapeInfo.logicalShape.map((y,x)=>`coords.${h[x+p]}`).join(", "),`
    float ${n}() {
      ${u} coords = getOutputCoords();
      ${f}
      return get${o}(${m});
    }
  `}function H(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function Yi(e,t,r){let{newShape:o,keptDims:n}=b.squeezeShape(t),s=t.length,i=e&&s===3&&t[0]===1,a=i?t.slice(1):o,l=!e&&s>1&&!b.arraysEqual(t,r)&&o.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:n}}function jo(e,t){let r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function Yo(e,t){return t.map(r=>e[r]).join(", ")}function Qg(e,t,r,o){let n=r.map((c,p)=>{let f={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(f.flatOffset=c.texData.slice.flatOffset),{name:t.variableNames[p],shapeInfo:f}}),s=n.map(c=>c.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=Kg(n,i,t),l=Eg(e.gl,a),u=e.createProgram(l);return I().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i},Rc(e,t,u))}function Rc(e,t,r){let o=[],n=[],s,i,a,l=null,u=null;u=e.getUniformLocation(r,"NAN",!1),I().getNumber("WEBGL_VERSION")===1&&(l=e.getUniformLocation(r,"INFINITY",!1));let c=!1;for(let p of t.variableNames){let f={name:p,uniform:e.getUniformLocation(r,p,c),offset:e.getUniformLocation(r,`offset${p}`,c)};t.enableShapeUniforms&&(f.shape=e.getUniformLocation(r,`${p}Shape`,c),f.texShape=e.getUniformLocation(r,`${p}TexShape`,c)),o.push(f)}if(t.enableShapeUniforms&&(s=e.getUniformLocation(r,"outShape",c),a=e.getUniformLocation(r,"outShapeStrides",c),i=e.getUniformLocation(r,"outTexShape",c)),t.customUniforms)for(let p of t.customUniforms)n.push(e.getUniformLocation(r,p.name,c));return{variablesLocations:o,customUniformLocations:n,infLoc:l,nanLoc:u,outShapeLocation:s,outShapeStridesLocation:a,outTexShapeLocation:i}}function Yg(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((r,o)=>{let n=r.logicalShape,s=t[o],i=s.shape;if(!b.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(r.isUniform&&s.isUniform)return;let a=r.texShape,l=s.isUniform?null:s.texData.texShape;if(!b.arraysEqual(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function Zg(e,t,r,o,n){t.program.enableShapeUniforms||(Yg(t.inShapeInfos,r),Yg([t.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):e.setOutputMatrixTexture(s.texture,i[0],i[1]),e.setProgram(t.webGLProgram),I().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<r.length;++l){let u=r[l],{uniform:c,offset:p,shape:f,texShape:h}=t.variablesLocations[l];if(f){let{uniformShape:m}=Yi(t.program.packedInputs,u.shape,u.texData.texShape);switch(m.length){case 1:e.gl.uniform1iv(f,new Int32Array(m));break;case 2:e.gl.uniform2iv(f,new Int32Array(m));break;case 3:e.gl.uniform3iv(f,new Int32Array(m));break;case 4:e.gl.uniform4iv(f,new Int32Array(m));break;default:break}}if(h&&e.gl.uniform2i(h,u.texData.texShape[0],u.texData.texShape[1]),c!=null){if(u.isUniform){if(b.sizeFromShape(u.shape)<2)e.gl.uniform1f(c,u.uniformValues[0]);else{let m=u.uniformValues;m instanceof Float32Array||(m=new Float32Array(m)),e.gl.uniform1fv(c,m)}continue}u.texData.slice!=null&&p!=null&&e.gl.uniform1i(p,u.texData.slice.flatOffset),e.setInputMatrixTexture(u.texData.texture.texture,c,l)}}let a=t.outShapeLocation;if(a)switch(o.shape.length){case 1:e.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:e.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:e.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:e.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(t.outShapeStridesLocation){let l=b.computeStrides(o.shape);switch(o.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&n)for(let l=0;l<t.program.customUniforms.length;++l){let u=t.program.customUniforms[l],c=t.customUniformLocations[l],p=n[l];if(u.type==="float")e.gl.uniform1fv(c,p);else if(u.type==="vec2")e.gl.uniform2fv(c,p);else if(u.type==="vec3")e.gl.uniform3fv(c,p);else if(u.type==="vec4")e.gl.uniform4fv(c,p);else if(u.type==="int")e.gl.uniform1iv(c,p);else if(u.type==="ivec2")e.gl.uniform2iv(c,p);else if(u.type==="ivec3")e.gl.uniform3iv(c,p);else if(u.type==="ivec4")e.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}e.executeProgram()}function Jg(e,t,r){let o="";t.concat(r).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!i.isUniform){let l=i.texData.texShape,{useSqueezeShape:u,uniformShape:c,keptDims:p}=Yi(e.packedInputs,i.shape,l),f="",h="",m="";if(c.length===1&&e.packedInputs){let $=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];f=`${$[0]>1}_${$[1]>1}`}else if(c.length===2&&!e.packedInputs)h=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!e.packedInputs){let $=b.computeStrides(c);m=`${$[0]===l[1]}_${$[$.length-1]===l[1]}`}let y=i.shape.length,x=c.length===2&&b.arraysEqual(i.shape,l),g=b.sizeFromShape(i.shape)===1,w=S.getBroadcastDims(i.shape,r.shape),C=!e.packedInputs&&y===r.shape.length&&b.arraysEqual(l,r.texData.texShape),v=e.packedInputs||c.length>2?"":`${l[0]>1}_${l[1]>1}`;o+=`${y}_${C}_${u?p:""}_${c.length}_${g}_${w}_${x}_${f}_${h}_${m}_${v}_${a}`}else{let l=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${l}_${a}`}});let n=e.userCode,s=e.constructor.name;return s+="_"+o+"_"+n+`${I().getNumber("WEBGL_VERSION")}`,s}function Y(e){return I().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}var Qi=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=yr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=ot();this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?jr(["r","c","d"],t):Te(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${r.output} = result;
      }
    `}};var Zi=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=yr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=ot();this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?jr(["r","c","d"],t):Te(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${r.output} = result;
      }
    `}};var Ji=class{constructor(t){this.variableNames=["A"],this.outTexUsage=kt.DOWNLOAD;let r=ot();this.outputShape=t,this.userCode=`
      ${ji}

      void main() {
        float x = getAAtOutCoords();
        ${r.output} = encode_float(x);
      }
    `}};var ta=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=kt.DOWNLOAD;let r=ot();this.outputShape=t,this.userCode=`
      ${ji}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${r.output} = encode_float(x);
      }
    `}};var HE={R:0,G:1,B:2,A:3},Xn=class{constructor(t,r=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=ot();this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length);let s="result";r&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<o.length;a++){let l=o[a];i+=`
          if(offset == ${a}) {
            result = values[${HE[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Ho():Go(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${o.length});

        flatIndex = idiv(flatIndex, ${o.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${n.texture2D}(A, uv);
          ${i}
        }
        ${n.output} = vec4(${s}, 0., 0., 0.);
      }
    `}};var ea=class{constructor(t,r=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=ot();this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length);let n="",s="result";r&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let l=i*2+a;n+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${o.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Ho():Go(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${n}

          ${o.output} = ${s};
        }
    `}};function tx(e){let t=ot(),r=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return Tg(e,r)}function ex(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return kg(e,t)}function rx(e){let t=new Uint16Array([0,1,2,2,1,3]);return Rg(e,t)}function jn(e,t,r,o,n,s){Fg(t,r);let i=Ng(e),a=e.TEXTURE_2D;return L(e,()=>e.bindTexture(a,i)),L(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),L(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),L(e,()=>e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST)),L(e,()=>e.texParameteri(a,e.TEXTURE_MAG_FILTER,e.NEAREST)),I().getNumber("WEBGL_VERSION")===1?L(e,()=>e.texImage2D(a,0,o,t,r,0,n,s,null)):L(e,()=>e.texStorage2D(a,1,o,t,r)),L(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[r,t]}}function Nc(e){return e.internalFormatFloat}function ox(e,t,r,o){let[n,s]=Kr(t,r);return jn(e,n,s,Nc(o),o.textureFormatFloat,e.FLOAT)}function Fc(e){return e.internalFormatHalfFloat}function nx(e,t,r,o){let[n,s]=Kr(t,r);return jn(e,n,s,Fc(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function Dc(e){return e.downloadTextureFormat}function sx(e,t,r,o){let[n,s]=Kr(t,r);return jn(e,n,s,Dc(o),e.RGBA,e.UNSIGNED_BYTE)}function Oc(e){return e.internalFormatPackedFloat}function ix(e,t,r,o){let[n,s]=Ue(t,r);return jn(e,n,s,Oc(o),e.RGBA,e.FLOAT)}function Pc(e){return e.internalFormatPackedHalfFloat}function ax(e,t,r,o){let[n,s]=Ue(t,r);return jn(e,n,s,Pc(o),e.RGBA,o.textureTypeHalfFloat)}function lx(e,t,r){return L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),_c(e,t,"clipSpacePos",r,3,20,0)&&_c(e,t,"uv",r,2,20,12)}function ux(e,t,r,o,n,s){L(e,()=>e.bindTexture(e.TEXTURE_2D,t));let i,a,l;n instanceof Uint8Array?(i=new Uint8Array(r*o*4),a=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(r*o*4),a=e.FLOAT,l=s.internalFormatPackedFloat),i.set(n),I().getNumber("WEBGL_VERSION")===2?L(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,o,e.RGBA,a,i)):L(e,()=>e.texImage2D(e.TEXTURE_2D,0,l,r,o,0,e.RGBA,a,i)),L(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function cx(e,t,r){L(e,()=>e.bindTexture(e.TEXTURE_2D,t)),r.data instanceof Uint8Array?I().getNumber("WEBGL_VERSION")===2?L(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data)):L(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)):I().getNumber("WEBGL_VERSION")===2?L(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r)):L(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),L(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function px(e,t,r,o){let n=e.createBuffer();L(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let a=4*4*t*r;return L(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),L(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),L(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}function fx(e,t,r){let o=e,n=new Float32Array(r);return o.bindBuffer(o.PIXEL_PACK_BUFFER,t),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function dx(e,t,r,o){let[n,s]=Kr(t,r),i=4,a=new Uint8Array(Sg(t*r,i));return L(e,()=>e.readPixels(0,0,n,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function hx(e,t,r,o,n,s,i,a){let l=e,u=new Float32Array($g(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function mx(e,t,r){let o=new Float32Array(t*r*4);return L(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,o)),o}var Qo=class{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let r=I().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,Cg(r,t)):this.gl=te(r),t=this.gl,I().getNumber("WEBGL_VERSION")===2){let s=t;this.createVertexArray=()=>L(s,()=>s.createVertexArray()),this.bindVertexArray=i=>L(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>L(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>L(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(t!=null){let s=t.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>L(t,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>L(t,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>L(t,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>L(t,()=>t.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),I().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Hn(this.gl,s),ue(this.gl,i))this.textureHalfFloatExtension=Hn(this.gl,i);else if(I().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),ue(this.gl,n))this.colorBufferHalfFloatExtension=Hn(this.gl,n);else if(I().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",ue(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(ue(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=ex(this.gl),this.indexBuffer=rx(this.gl),this.framebuffer=Dg(this.gl),this.textureConfig=Gn(this.gl,this.textureHalfFloatExtension)}get debug(){return I().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let t=this.gl;L(t,()=>t.finish()),L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),L(t,()=>t.deleteFramebuffer(this.framebuffer)),L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),L(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),L(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,r){return this.throwIfDisposed(),ox(this.gl,t,r,this.textureConfig)}createFloat16MatrixTexture(t,r){return this.throwIfDisposed(),nx(this.gl,t,r,this.textureConfig)}createUnsignedBytesMatrixTexture(t,r){return this.throwIfDisposed(),sx(this.gl,t,r,this.textureConfig)}uploadPixelDataToTexture(t,r){this.throwIfDisposed(),cx(this.gl,t,r)}uploadDenseMatrixToTexture(t,r,o,n){this.throwIfDisposed(),ux(this.gl,t,r,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(t,r){return this.throwIfDisposed(),ax(this.gl,t,r,this.textureConfig)}createPackedMatrixTexture(t,r){return this.throwIfDisposed(),ix(this.gl,t,r,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Ac(this.gl,this.framebuffer),this.outputTexture=null),L(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,r,o){return this.downloadMatrixDriver(t,()=>dx(this.gl,r,o,this.textureConfig))}downloadPackedMatrixFromBuffer(t,r,o,n,s,i){return hx(this.gl,t,r,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,r){return fx(this.gl,t,r)}createBufferFromTexture(t,r,o){this.bindTextureToFrameBuffer(t);let n=px(this.gl,r,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let r,o;if(I().getBool("WEBGL_FENCE_API_ENABLED")){let n=t,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},r=s}else I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(r=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(r,I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:r,isFencePassed:o}}downloadMatrixFromPackedTexture(t,r,o){return this.downloadMatrixDriver(t,()=>mx(this.gl,r,o))}createProgram(t){this.throwIfDisposed();let r=this.gl;this.vertexShader==null&&(this.vertexShader=tx(r));let o=_g(r);L(r,()=>r.attachShader(o,this.vertexShader)),L(r,()=>r.attachShader(o,t)),Ag(r,o);let n;return n=Object.assign(o,{vao:this.createVertexArray()}),this.bindVertexArray(n.vao),L(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(lx(r,n,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&qi(r,n),this.setProgram(n),n}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(L(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&qi(this.gl,this.program)),L(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,r,o=!0){return this.throwIfDisposed(),o?Og(this.gl,t,r):Pg(this.gl,t,r)}getAttributeLocation(t,r){return this.throwIfDisposed(),L(this.gl,()=>this.gl.getAttribLocation(t,r))}getUniformLocationNoThrow(t,r){return this.throwIfDisposed(),this.gl.getUniformLocation(t,r)}setInputMatrixTexture(t,r,o){this.throwIfDisposed(),this.throwIfNoProgram(),Mg(this.gl,t,r,o)}setOutputMatrixTexture(t,r,o){this.setOutputMatrixTextureDriver(t,o,r)}setOutputPackedMatrixTexture(t,r,o){this.throwIfDisposed();let[n,s]=Ue(r,o);this.setOutputMatrixTextureDriver(t,n,s)}setOutputMatrixWriteRegion(t,r,o,n){this.setOutputMatrixWriteRegionDriver(o,t,n,r)}setOutputPackedMatrixWriteRegion(t,r,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&qi(this.gl,this.program),qn(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let t=this.gl;if(this.debug){let r=this.getVertexArray();console.assert(r===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}L(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),L(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Hn(this.gl,I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let t=this.getQueryTimerExtensionWebGL1(),r=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,r),r}endQuery(){if(I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let r=this.gl,o=this.getQueryTimerExtensionWebGL2();r.endQuery(o.TIME_ELAPSED_EXT);return}let t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await b.repeatedTry(()=>this.disposed||this.isQueryAvailable(t,I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,r){if(r===0)return null;if(r===2){let o=this.gl;return o.getQueryParameter(t,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,r){if(r===0)return!0;if(r===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(t,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(t){return new Promise(r=>{this.addItemToPoll(()=>t.isFencePassed(),()=>r())})}pollItems(){let t=KE(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=t;++r){let{resolveFn:o}=this.itemsToPoll[r];o()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,r){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:r}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in I().platform&&(o=I().platform.setTimeoutCustom.bind(I().platform)),b.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),Ki(this.gl,t,this.framebuffer),this.debug&&qn(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Ki(this.gl,this.outputTexture,this.framebuffer),this.debug&&qn(this.gl)):Ac(this.gl,this.framebuffer)}downloadMatrixDriver(t,r){this.bindTextureToFrameBuffer(t);let o=r();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(t,r,o){this.throwIfDisposed();let n=this.gl;Ki(n,t,this.framebuffer),this.debug&&qn(n),this.outputTexture=t,L(n,()=>n.viewport(0,0,r,o)),L(n,()=>n.scissor(0,0,r,o))}setOutputMatrixWriteRegionDriver(t,r,o,n){this.throwIfDisposed(),L(this.gl,()=>this.gl.scissor(t,r,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function KE(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var sp={};cr(sp,{addImpl:()=>Bc,bincountImpl:()=>yx,bincountReduceImpl:()=>wx,castImpl:()=>Lc,ceilImpl:()=>Uc,concatImpl:()=>bx,equalImpl:()=>Vc,expImpl:()=>Wc,expm1Impl:()=>zc,floorDivImpl:()=>Hc,floorImpl:()=>Gc,gatherNdImpl:()=>vx,gatherV2Impl:()=>Cx,greaterEqualImpl:()=>Kc,greaterImpl:()=>qc,lessEqualImpl:()=>jc,lessImpl:()=>Xc,linSpaceImpl:()=>Sx,logImpl:()=>Yc,maxImpl:()=>$x,maximumImpl:()=>Qc,minimumImpl:()=>Zc,multiplyImpl:()=>Qn,negImpl:()=>Ix,notEqualImpl:()=>Jc,prodImpl:()=>Ex,raggedGatherImpl:()=>Ax,raggedRangeImpl:()=>Rx,raggedTensorToTensorImpl:()=>Dx,rangeImpl:()=>Ox,rsqrtImpl:()=>tp,scatterImpl:()=>Px,sigmoidImpl:()=>Mx,simpleAbsImpl:()=>gx,sliceImpl:()=>Lx,sparseFillEmptyRowsImpl:()=>Bx,sparseReshapeImpl:()=>Ux,sparseSegmentReductionImpl:()=>Vx,sqrtImpl:()=>Wx,squaredDifferenceImpl:()=>ep,staticRegexReplaceImpl:()=>rp,stridedSliceImpl:()=>zx,stringNGramsImpl:()=>Gx,stringSplitImpl:()=>Hx,stringToHashBucketFastImpl:()=>qx,subImpl:()=>np,tileImpl:()=>Kx,topKImpl:()=>jx,transposeImpl:()=>Tx,uniqueImpl:()=>Yx});function ra(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&b.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function gx(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}function tt(e){return(t,r,o,n,s)=>{let i=S.assertAndGetBroadcastShape(t,r),a=i.length,l=b.computeStrides(i),u=b.sizeFromShape(i),c=b.getTypedArrayFromDType(s,u),p=t.length,f=r.length,h=b.computeStrides(t),m=b.computeStrides(r),y=S.getBroadcastDims(t,i),x=S.getBroadcastDims(r,i);if(y.length+x.length===0)for(let g=0;g<c.length;++g)c[g]=e(o[g%o.length],n[g%n.length]);else for(let g=0;g<c.length;++g){let w=b.indexToLoc(g,a,l),C=w.slice(-p);y.forEach(E=>C[E]=0);let v=b.locToIndex(C,p,h),$=w.slice(-f);x.forEach(E=>$[E]=0);let T=b.locToIndex($,f,m);c[g]=e(o[v],n[T])}return[c,i]}}function Zo(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.data.get(o.dataId).values,i=r.data.get(n.dataId).values,a=r.makeTensorInfo(o.shape,"complex64"),l=r.data.get(a.dataId);return l.complexTensorInfos={real:r.makeTensorInfo(o.shape,"float32",s),imag:r.makeTensorInfo(n.shape,"float32",i)},a}function oa(e,t,r="float32"){if(r==="complex64"){let n=oa(e,t,"float32"),s=oa(e,t,"float32");return Zo({inputs:{real:n,imag:s},backend:e})}let o=b.makeZerosTypedArray(b.sizeFromShape(t),r);return e.makeTensorInfo(t,r,o)}function Mc(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function xx(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.data.get(o.dataId).complexTensorInfos.real,s=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,s)}function Lc(e,t,r,o){if(o==="int32"){let n=Int32Array.from(e);return[t,"int32",n]}if(o==="bool"){let n=b.toTypedArray([0],r),[s,i]=tt((a,l)=>a!==l?1:0)(t,[],e,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${r} to ${o}`)}function Yn(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return Mc({inputs:{x:n},backend:r});let c=oa(r,n.shape,n.dtype),p=Yn({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),f=Zo({inputs:{real:p,imag:c},backend:r});return r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p),f}if(n.dtype==="complex64"){let c=xx({inputs:{input:n},backend:r}),p=Yn({inputs:{x:c},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(c),p}if(!b.hasEncodingLoss(n.dtype,s)){let c=Mc({inputs:{x:n},backend:r});return{dataId:c.dataId,shape:c.shape,dtype:s}}let i=r.data.get(n.dataId).values,[a,l,u]=Lc(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,u)}function it(e,t,r,o){return r==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;ra([i,a],e);let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=i.dtype==="string"?S.fromUint8ToStringArray(u):u,f=i.dtype==="string"?S.fromUint8ToStringArray(c):c,h=o||i.dtype,[m,y]=t(i.shape,a.shape,p,f,h);return l.makeTensorInfo(y,h,m)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let u=Yn({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),c=l.data.get(u.dataId),p=c.complexTensorInfos.real,f=c.complexTensorInfos.imag,h=l.data.get(p.dataId).values,m=l.data.get(f.dataId).values,y=Yn({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),x=l.data.get(y.dataId),g=x.complexTensorInfos.real,w=x.complexTensorInfos.imag,C=l.data.get(g.dataId).values,v=l.data.get(w.dataId).values,[$,T,E]=r(i.shape,a.shape,h,m,C,v),_=l.makeTensorInfo(E,"float32",$),N=l.makeTensorInfo(E,"float32",T),O=Zo({inputs:{real:_,imag:N},backend:l});return l.disposeIntermediateTensorInfo(u),l.disposeIntermediateTensorInfo(y),l.disposeIntermediateTensorInfo(_),l.disposeIntermediateTensorInfo(N),O}else{let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=o||i.dtype,[f,h]=t(i.shape,a.shape,u,c,p);return l.makeTensorInfo(h,p,f)}}}function Jo(e){return(t,r,o,n,s,i)=>{let a=S.assertAndGetBroadcastShape(t,r),l=b.sizeFromShape(a),u=a.length,c=b.computeStrides(a),p=b.getTypedArrayFromDType("float32",l),f=b.getTypedArrayFromDType("float32",l),h=S.getBroadcastDims(t,a),m=S.getBroadcastDims(r,a),y=S.mergeRealAndImagArrays(o,n),x=S.mergeRealAndImagArrays(s,i),g=t.length,w=b.computeStrides(t),C=r.length,v=b.computeStrides(r);if(h.length+m.length===0)for(let $=0;$<p.length;$++){let T=$%y.length,E=$%x.length,_=e(y[T*2],y[T*2+1],x[E*2],x[E*2+1]);p[$]=_.real,f[$]=_.imag}else for(let $=0;$<p.length;$++){let T=b.indexToLoc($,u,c),E=T.slice(-g);h.forEach(z=>E[z]=0);let _=b.locToIndex(E,g,w),N=T.slice(-C);m.forEach(z=>N[z]=0);let O=b.locToIndex(N,C,v),V=e(y[_*2],y[_*2+1],x[O*2],x[O*2+1]);p[$]=V.real,f[$]=V.imag}return[p,f,a]}}var Bc=tt((e,t)=>e+t),XE=Jo((e,t,r,o)=>({real:e+r,imag:t+o})),IG=it(fr,Bc,XE);function yx(e,t,r,o,n){let s=b.sizeFromShape(o),i=b.makeZerosTypedArray(n,r);for(let a=0;a<e.length;a++){let l=e[a];if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s>0?i[l]+=t[a]:i[l]+=1)}return i}function wx(e,t,r,o=!1){let n=e.shape[0],s=e.shape[1],i=Q([n,r],t.dtype);for(let a=0;a<n;a++)for(let l=0;l<s;l++){let u=e.get(a,l);if(u<0)throw new Error("Input x must be non-negative!");u>=r||(o?i.set(1,a,u):t.size>0?i.set(i.get(a,u)+t.get(a,l),a,u):i.set(i.get(a,u)+1,a,u))}return i}function Ct(e){return(t,r,o)=>{let n=b.getArrayFromDType(r,t.length);for(let s=0;s<t.length;++s)n[s]=e(t[s],o);return n}}function na(e,t,r){let o=Ct(t);return Ht(e,o,r)}function Ht(e,t,r){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;ra(i,e);let a=s,l=a.data.get(i.dataId).values,u;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");u=S.fromUint8ToStringArray(l)}else u=l;let c=r||i.dtype,p=t(u,c,n);return a.makeTensorInfo(i.shape,c,p)}}var Uc=Ct(e=>Math.ceil(e)),LG=Ht(Ls,Uc);function bx(e,t,r,o){let n=b.getArrayFromDType(r,b.sizeFromShape(t));if(o&&r!=="string"){let s=0;e.forEach(i=>{let a=b.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;e.forEach(i=>{let a=r==="string"?S.fromUint8ToStringArray(i.vals):i.vals,l=0;for(let u=0;u<i.shape[0];++u){let c=u*t[1]+s;for(let p=0;p<i.shape[1];++p)n[c+p]=a[l++]}s+=i.shape[1]})}return n}var Vc=tt((e,t)=>e===t?1:0),HG=it(Ws,Vc,null,"bool");var Wc=Ct(e=>Math.exp(e)),YG=Ht(zs,Wc,"float32");var zc=Ct(e=>Math.expm1(e)),e5=Ht(Gs,zc);var Gc=Ct(e=>Math.floor(e)),i5=Ht(qs,Gc);var Hc=tt((e,t)=>Math.floor(e/t)),p5=it(_o,Hc,null,"int32");function vx(e,t,r,o,n,s,i,a,l){let u=Q([o,s],r);for(let c=0;c<o;c++){let p=[],f=0;for(let h=0;h<n;h++){let m=e[c*n+h];f+=m*i[h],p.push(m)}if(f<0||f>=l/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let h=0;h<s;h++)u.values[c*s+h]=t.get(...t.indexToLoc(f*s+h))}return u}function Cx(e,t,r){let o=Q(r,e.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],l=i[2],u=t.locToIndex([a,l]);i[2]=t.values[u];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(o.values[n]=e.values[c])}return o}var qc=tt((e,t)=>e>t?1:0),b5=it(Ks,qc,null,"bool");var Kc=tt((e,t)=>e>=t?1:0),I5=it(Xs,Kc,null,"bool");var Xc=tt((e,t)=>e<t?1:0),k5=it(Qs,Xc,null,"bool");var jc=tt((e,t)=>e<=t?1:0),O5=it(Zs,jc,null,"bool");function Sx(e,t,r){let o=(t-e)/(r-1),n=b.makeZerosTypedArray(r,"float32");n[0]=e;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var Yc=Ct(e=>Math.log(e)),W5=Ht(Js,Yc);function $x(e,t,r,o){let n=b.getTypedArrayFromDType(o,b.sizeFromShape(r));for(let s=0;s<n.length;++s){let i=s*t,a=e[i];for(let l=0;l<t;++l){let u=e[i+l];(Number.isNaN(u)||u>a)&&(a=u)}n[s]=a}return n}var Qc=tt((e,t)=>Math.max(e,t)),j5=it(Ao,Qc);var Zc=tt((e,t)=>Math.min(e,t)),t6=it(ri,Zc);var Qn=tt((e,t)=>e*t),jE=Jo((e,t,r,o)=>({real:e*r-t*o,imag:e*o+t*r})),s6=it(ko,Qn,jE);function Ix(e,t,r){let o=b.createScalarValue(-1,r);return Qn([],t,o,e,r)}var Jc=tt((e,t)=>e!==t?1:0),d6=it(oi,Jc,null,"bool");function Tx(e,t,r,o,n){let s=t.length,i=b.sizeFromShape(t),a=b.computeStrides(t),l=b.computeStrides(n),u=b.getTypedArrayFromDType(r,b.sizeFromShape(n));for(let c=0;c<i;++c){let p=b.indexToLoc(c,s,a),f=new Array(p.length);for(let m=0;m<f.length;m++)f[m]=p[o[m]];let h=b.locToIndex(f,s,l);u[h]=e[c]}return u}function Ex(e,t,r,o){let[n,s]=S.computeOutAndReduceShapes(e,o),i=Nt(t,"int32"),a=b.makeZerosTypedArray(b.sizeFromShape(n),i),l=b.sizeFromShape(s);for(let u=0;u<a.length;++u){let c=u*l,p=1;for(let f=0;f<l;++f)p*=r[c+f];a[u]=p}return{outVals:a,outShape:n,outDtype:i}}function YE(e,t,r){e.forEach((o,n)=>{if(o<0||o>=r){let s=b.indexToLoc(n,t.length,b.computeStrides(t)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${r})`)}})}function QE(e,t){for(let r=0;r<e.length;++r){let o=e[r],n=r===e.length-1?t:e[r+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function ZE(e,t,r,o){let n=[],s=0,i=t.length-1+r.length,a=new Array(i).fill(null).map(()=>[0]);QE(r,o);let l=1;for(let u=0;u<t.length-1;++u){l*=t[u];let c=t[u+1];for(let p=1;p<l+1;++p)a[u].push(p*c)}for(let u=0;u<e.length;++u){let c=e[u],p=e[u]+1;for(let f=0;f<r.length;++f){let h=r[f],m=f+t.length-1;if(m>=0){let y=a[m],x=y[y.length-1]-h[c];for(let g=c;g<p;++g)a[m].push(h[g+1]+x)}c=h[c],p=h[p]}p!==c&&(n.push([c,p]),s+=p-c)}return{outSplits:a,valueSlices:n,numValues:s}}function JE(e){let t=[];for(let r=0;r<e.length;++r){let o=e[r].length,n=b.getArrayFromDType("int32",o);t.push(n),e[r].forEach((s,i)=>n[i]=s)}return t}function _x(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let o=t;o<e.length;o++)r[t-1]*=e[o];return r}function t_(e,t,r,o,n,s){let i=_x(t,2)[1],a=_x(s,2)[1],l=0;for(let u of r)for(let c=u[0];c<u[1];++c){for(let p=0;p<o;++p)n[l*a+p]=e[c*i+p];++l}}function e_(e,t,r,o,n){let s=t.slice();s[0]=n;let i=b.getArrayFromDType(r,b.sizeFromShape(s)),a=e.length,l=a===0?0:a/t[0];return t_(e,t,o,l,i,s),[i,s]}function Ax(e,t,r,o,n,s,i,a){if(e.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let l=t[0][0]-1;if(YE(s,i,l),o.length===0)throw new Error("params.rank must be nonzero");let u=o[0],{outSplits:c,valueSlices:p,numValues:f}=ZE(s,i,e,u),h=JE(c),m=e_(r,o,n,p,f);return[h,m[0],m[1]]}var kx=2147483647;function Rx(e,t,r,o,n,s,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=t.length===0,l=n.length===0,u=i.length===0,c=[];a||c.push(t[0]),l||c.push(n[0]),u||c.push(i[0]);for(let x=1;x<c.length;++x)if(c[x]!==c[x-1])throw new Error("starts, limits, and deltas must have the same shape");let p=c.length===0?1:c[0],f=b.getArrayFromDType("int32",p+1);f[0]=0;for(let x=0;x<p;++x){let g=a?e[0]:e[x],w=l?o[0]:o[x],C=u?s[0]:s[x];if(C===0)throw new Error("Requires delta != 0");let v;if(C>0&&w<g||C<0&&w>g)v=0;else if(v=Math.ceil(Math.abs((w-g)/C)),v>kx)throw new Error(`Requires ((limit - start) / delta) <= ${kx}`);f[x+1]=f[x]+v}let h=f[p],m=b.getArrayFromDType(r,h),y=0;for(let x=0;x<p;++x){let g=f[x+1]-f[x],w=a?e[0]:e[x],C=u?s[0]:s[x];for(let v=0;v<g;++v)m[y++]=w,w+=C}return[f,m]}var ye=S.RowPartitionType,tn=class{constructor(t,r,o,n,s,i,a,l,u,c){this.shape=t,this.shapeShape=r,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=S.getRowPartitionTypesHelper(c),this.raggedRank=S.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===ye.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===ye.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let r=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case ye.VALUE_ROWIDS:return tn.getMaxWidthValueRowID(r);case ye.ROW_SPLITS:return tn.getMaxWidthRowSplit(r);default:throw new Error(`Cannot handle partition type ${ye[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let r=t.length;if(r===0||r===1)return 0;let o=0;for(let n=0;n<r-1;++n){let s=t[n+1]-t[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(t){let r=t.length;if(r===0)return 0;let o=0,n=t[0],s=0;for(let i=1;i<r;++i){let a=t[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(r-o,s)}tensorShapeFromTensor(t,r,o=!0){if(r.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Fx(t,o)}calculateOutputSize(t){let r=this.valuesShape,o=this.defaultValueShape;S.validateDefaultValueShape(o,r);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=S.combineRaggedTensorToTensorShapes(this.raggedRank,n,r);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,r,o){let n=Math.min(t,o),s=[],i=0;for(let a=0;a<n;++a,i+=r)s.push(i);for(let a=n;a<t;++a)s.push(-1);return b.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,r,o,n){let s=t.length,i=[];for(let a=0;a<s-1;++a){let l=t[a+1]-t[a],u=Math.min(n,l),c=r[a];c===-1&&(u=0);for(let p=0;p<u;++p)i.push(c),c+=o;for(let p=0;p<l-u;++p)i.push(-1)}if(s>0&&i.length!==t[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,r,o,n){let s=t.length,i=[];if(s===0)return[];let a=0,l=t[0];if(l>=r.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${r.length}`);let u=r[l];i.push(u);for(let c=1;c<s;++c){let p=t[c];if(p===l)u>=0&&(++a,a<n?u+=o:u=-1);else{if(a=0,l=p,p>=r.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${r.length}`);u=r[p]}i.push(u)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,r,o,n){let s=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case ye.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,r,o,n);case ye.ROW_SPLITS:if(s.length-1>r.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${r.length}`);return this.calculateOutputIndexRowSplit(s,r,o,n);default:throw new Error(`Unsupported partition type: ${ye[i]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let r=this.rowPartitionTypes[0];switch(r){case ye.FIRST_DIM_SIZE:return t[0];case ye.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case ye.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${ye[r]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let r=this.getFirstDimensionSize(),o=this.calculateOutputSize(r),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let l=n.length-2;l>=0;--l)n[l]=n[l+1]*o[l+1];let s=Fx(o,!1),i=b.getArrayFromDType(this.valuesDType,b.sizeFromShape(s));if(n[0]*o[0]>0){let l=this.calculateFirstParentOutputIndex(r,n[0],o[0]);for(let u=1;u<=this.raggedRank;++u)l=this.calculateOutputIndex(u-1,l,n[u],o[u]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(t,r,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(t+1);let l=b.sizeFromShape(a),u=r.length,c=this.defaultValue;if(c.length!==l&&c.length!==1){let m=this.defaultValueShape;K(()=>{let y=vt(c,m);c=cc(y,a).dataSync()})}let p=0,f=0,h=0;for(let m=0;m<=u;++m){let y=m<u?r[m]:-1;if(y===h){++h;continue}if(f<h){let x=s.subarray(p*l),g=i.subarray(f*l),w=(h-f)*l;Nx(g,x,w)}if(m>=u){let x=o.length;y=Math.floor(x/l)}if(y>h)if(this.defaultValue.length===1)i.subarray(h*l,y*l).fill(this.defaultValue[0]),h=y;else for(;y>h;){let x=i.slice(h*l);Nx(x,c,l),++h}y<0?(p=m+1,f=h):(p=m,f=h,h=f+1)}}};function Nx(e,t,r){for(let o=0;o<r;o++)e[o]=t[o]}function Fx(e,t){let r=[];for(let o of e){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}r.push(o)}return r}function Dx(e,t,r,o,n,s,i,a,l,u){return new tn(e,t,r,o,n,s,i,a,l,u).compute()}function Ox(e,t,r,o){let n=e===t,s=e<t&&r<0,i=t<e&&r>1;if(n||s||i)return b.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((t-e)/r)),l=b.makeZerosTypedArray(a,o);t<e&&r===1&&(r=-1),l[0]=e;for(let u=1;u<l.length;u++)l[u]=l[u-1]+r;return l}var tp=Ct(e=>1/Math.sqrt(e)),k6=Ht(ui,tp);function Px(e,t,r,o,n,s,i,a,l,u){let c=[o/n,n],p=e.values,f=t.values;if(o===0)return Q(r,t.dtype);let h=l instanceof Oe?l:Q(c,t.dtype);typeof l=="string"||typeof l=="number"?h.values.fill(l):typeof l=="boolean"&&h.values.fill(+l);for(let m=0;m<s;m++){let y=[],x=0;for(let g=0;g<i;g++){let w=p[m*i+g];y.push(w),x+=w*a[g]}if(x<0||x>=o/n)throw new Error(`Invalid indices: ${y} does not index into ${r}`);for(let g=0;g<n;g++)u?h.values[x*n+g]+=f[m*n+g]:h.values[x*n+g]=t.rank===0?f[0]:f[m*n+g]}return h}var Mx=Ct(e=>1/(1+Math.exp(-e))),M6=na(Ro,e=>1/(1+Math.exp(-e)));function Lx(e,t,r,o,n){let s=Gt.isSliceContinous(o,t,r),i=b.sizeFromShape(r),a=b.computeStrides(o);if(s){let p=Gt.computeFlatOffset(t,a);return n==="string"?e.slice(p,p+i):e.subarray(p,p+i)}let l=n==="string"?S.fromUint8ToStringArray(e):e,u=Q(o,n,l),c=Q(r,n);for(let p=0;p<c.size;++p){let f=c.indexToLoc(p),h=f.map((m,y)=>m+t[y]);c.set(u.get(...h),...f)}return n==="string"?S.fromStringArrayToUint8(c.values):c.values}function Bx(e,t,r,o,n,s,i){let a=t[0],l=s[0],u=new Array(l),c=new Array(a),p=t[1];if(l===0){if(a!==0)throw new Error(S.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let x=b.getArrayFromDType(r,0),g=b.getArrayFromDType(n,0);return[x,[0,p],g,u,c]}let f=!0,h=0,m=new Array(l).fill(0);for(let x=0;x<a;++x){let g=e[x*p];if(g<0)throw new Error(S.getSparseFillEmptyRowsNegativeIndexErrorMessage(x,g));if(g>=l)throw new Error(S.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(x,g,l));++m[g],f=f&&g>=h,h=g}let y=!0;for(let x=0;x<l;++x){let g=m[x]===0;u[x]=g,y=y&&!g,m[x]=Math.max(m[x],1),x>0&&(m[x]+=m[x-1])}if(y&&f){let x=e,g=o;for(let w=0;w<a;++w)c[w]=w;return[x,[a,p],g,u,c]}else{let x=m[l-1],g=b.getArrayFromDType(r,x*p),w=b.getArrayFromDType(n,x),C=new Array(l).fill(0);for(let v=0;v<a;++v){let $=e[v*p],T=C[$],E=($===0?0:m[$-1])+T;C[$]++;for(let _=0;_<p;++_)g[E*p+_]=e[v*p+_];w[E]=o[v],c[v]=E}for(let v=0;v<l;++v)if(C[v]===0){let T=v===0?0:m[v-1];g[T*p+0]=v;for(let E=1;E<p;++E)g[T*p+E]=0;w[T]=i}return[g,[x,p],w,u,c]}}function Ux(e,t,r,o,n){let s=b.sizeFromShape(o),i=t[0],a=n.length,l=[],u=1,c=-1;for(let x=0;x<a;++x){let g=n[x];if(g===-1){if(c!==-1)throw new Error(S.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(c,x));c=x,l.push(1)}else{if(g<0)throw new Error(S.getSparseReshapeNegativeOutputDimErrorMessage(x,g));u*=g,l.push(g)}}if(c!==-1){if(u<=0)throw new Error(S.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let x=Math.trunc(s/u);if(u*x!==s)throw new Error(S.getSparseReshapeInputOutputMultipleErrorMessage(o,l));l[c]=x}if(b.sizeFromShape(l)!==s)throw new Error(S.getSparseReshapeInputOutputMismatchErrorMessage(o,l));let f=o.length,h=[];if(f>0){h[f-1]=1;for(let x=f-2;x>=0;--x)h[x]=h[x+1]*o[x+1]}let m=[];if(a>0){m[a-1]=1;for(let x=a-2;x>=0;--x)m[x]=m[x+1]*l[x+1]}let y=b.getArrayFromDType(r,i*a);for(let x=0;x<i;++x){let g=0;for(let w=0;w<f;++w)g+=e[x*f+w]*h[w];for(let w=0;w<a;++w)y[x*a+w]=Math.trunc(g/m[w]),g%=m[w]}return[y,[i,a],l]}function Vx(e,t,r,o,n,s=!1,i=0){let a=o.length,l=[t[0],e.length/t[0]],u=l[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(S.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=t.slice();f[0]=p;let h=f.reduce((C,v)=>C*v,1),m=b.getArrayFromDType(r,h);if(a===0)return p>0&&m.fill(i),[m,f];if(p<=0)throw new Error(S.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let y=0,x=1,g=0,w=n[y];for(;;){let C=0;if(x<a){if(C=n[x],w===C){++x;continue}if(w>=C)throw new Error(S.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(w<0||w>=p)throw new Error(S.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(w,p));w>g&&m.fill(i,g*u,w*u);for(let v=y;v<x;++v){let $=o[v];if($<0||$>=l[0])throw new Error(S.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(v,o[v],l[0]));for(let T=0;T<u;T++)m[w*u+T]+=e[$*u+T]}if(s)for(let v=0;v<u;v++)m[w*u+v]/=x-y;if(y=x,++x,g=w+1,w=C,x>a)break}return g<p&&m.fill(i,g*u,p*u),[m,f]}var Wx=Ct(e=>Math.sqrt(e)),Y6=na(No,e=>Math.sqrt(e));var ep=tt((e,t)=>{let r=e-t;return r*r}),eH=it(pi,ep);var rp=Ct((e,t)=>{let{pattern:r,replaceGlobal:o,rewrite:n}=t;return e.replace(new RegExp(r,o?"g":""),n)}),iH=Ht(fi,rp);function zx(e,t,r,o){let n=Q(e,t.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*r[l]+o[l];n.set(t.get(...a),...i)}return n}var op=class{constructor(t,r,o,n,s,i){this.separator=b.encodeString(t),this.nGramWidths=r,this.leftPad=b.encodeString(o),this.rightPad=b.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,r){let o=this.getPadWidth(r);return Math.max(0,t+2*o-r+1)}createNGrams(t,r,o,n,s,i){for(let a=0;a<s;++a){let l=this.getPadWidth(i),u=Math.max(0,l-a),c=Math.max(0,l-(s-(a+1))),p=i-(u+c),f=r+(u>0?0:a-l),h=0;h+=u*this.leftPad.length;for(let w=0;w<p;++w)h+=t[f+w].length;h+=c*this.rightPad.length;let m=u+c+p-1;h+=m*this.separator.length,o[n+a]=new Uint8Array(h);let y=o[n+a],x=0,g=w=>w.forEach(C=>y[x++]=C);for(let w=0;w<u;++w)g(this.leftPad),g(this.separator);for(let w=0;w<p-1;++w)g(t[f+w]),g(this.separator);if(p>0){g(t[f+p-1]);for(let w=0;w<c;++w)g(this.separator),g(this.rightPad)}else{for(let w=0;w<c-1;++w)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(t,r){let o=t.length,n=r.length;if(n>0){let l=r[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let u=1;u<n;++u){let c=r[u]>=l;if(c=c&&r[u]<=o,!c)throw new Error(`Invalid split value ${r[u]}, must be in [${l}, ${o}]`);l=r[u]}if(l!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${l}`)}let s=n-1,i=b.getArrayFromDType("int32",n);if(o===0||n===0){let l=new Array(o);for(let u=0;u<=s;++u)i[u]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){let u=r[l]-r[l-1],c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(u,p)}),this.preserveShort&&u>0&&c===0&&(c=1),i[l]=i[l-1]+c}let a=new Array(i[s]);for(let l=0;l<s;++l){let u=r[l],c=i[l];if(this.nGramWidths.forEach(p=>{let f=r[l+1]-r[l],h=this.getNumNGrams(f,p);this.createNGrams(t,u,a,c,h,p),c+=h}),this.preserveShort&&c===i[l]){let p=r[l+1]-r[l];if(p===0)continue;let f=p+2*this.padWidth,h=1;this.createNGrams(t,u,a,c,h,f)}}return[a,i]}};function Gx(e,t,r,o,n,s,i,a){return new op(r,o,n,s,i,a).compute(e,t)}function r_(e,t,r,o){if(!e.length)return;if(t.length===0){for(let s=0;s<e.length;++s)o.push(e.subarray(s,s+1));return}if(t.length===1){let s=t[0],i=e.indexOf(s);for(;i!==-1;){let a=e.subarray(0,i);(!r||a.length!==0)&&o.push(a),e=e.subarray(i+1),i=e.indexOf(s)}(!r||e.length!==0)&&o.push(e);return}let n=0;for(let s=0;s<e.length+1;s++)if(s===e.length||t.indexOf(e[s])!==-1){let i=e.subarray(n,s);(!r||i.length!==0)&&o.push(i),n=s+1}}function Hx(e,t,r){let o=e.length,n=[],s=0,i=0,a=new Array(o);for(let f=0;f<o;++f){let h=n.length;r_(e[f],t,r,n);let m=n.length-h;a[f]=m,s+=m,i=Math.max(i,m)}let l=b.getArrayFromDType("int32",s*2),u=new Array(s),c=[o,i],p=0;for(let f=0;f<o;++f)for(let h=0;h<a[f];++h)l[p*2]=f,l[p*2+1]=h,u[p]=n[p],++p;return[l,u,c]}function qx(e,t){let r=b.getArrayFromDType("int32",e.length);for(let o=0;o<e.length;++o)r[o]=b.fingerPrint64(e[o]).modulo(t).getLowBitsUnsigned();return r}var np=tt((e,t)=>e-t),o_=Jo((e,t,r,o)=>({real:e-r,imag:t-o})),wH=it(Fo,np,o_);function Kx(e,t){let r=new Array(e.rank);for(let n=0;n<r.length;n++)r[n]=e.shape[n]*t[n];let o=Q(r,e.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(e.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%e.shape[l];let a=e.locToIndex(i);o.values[n]=e.values[a]}return o}var Zn=(e,t)=>{let r=t.value-e.value;return r===0?e.index-t.index:r};function Xx(e,t,r=0,o=e.length-1){for(;o>r;){if(o-r>600){let a=o-r+1,l=t-r+1,u=Math.log(a),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(a-c)/a)*Math.sign(l-a/2),f=Math.max(r,Math.floor(t-l*c/a+p)),h=Math.min(o,Math.floor(t+(a-l)*c/a+p));Xx(e,t,f,h)}let n=e[t],s=r,i=o;for(b.swap(e,r,t),Zn(e[o],n)>0&&b.swap(e,r,o);s<i;){for(b.swap(e,s,i),s++,i--;Zn(e[s],n)<0;)s=s+1;for(;Zn(e[i],n)>0;)i=i-1}Zn(e[r],n)===0?b.swap(e,r,i):(i=i+1,b.swap(e,i,o)),i<=t&&(r=i+1),t<=i&&(o=i-1)}}function jx(e,t,r,o,n){let s=t[t.length-1],[i,a]=[e.length/s,s],l=b.getTypedArrayFromDType(r,i*o),u=b.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let f=p*a,h=e.subarray(f,f+a),m=new Array(h.length);h.forEach((w,C)=>m[C]={value:w,index:C}),o<m.length&&(Xx(m,o),m=m.slice(0,o)),n&&m.sort(Zn);let y=p*o,x=l.subarray(y,y+o),g=u.subarray(y,y+o);for(let w=0;w<o;w++)x[w]=m[w].value,g[w]=m[w].index}let c=t.slice();return c[c.length-1]=o,[Q(c,r,l),Q(c,"int32",u)]}function Yx(e,t,r,o){let n=b.parseAxisParam(t,r)[0],s=[1,r[0],1];for(let m=0;m<n;m++)s[0]*=r[m];s[1]=r[n];for(let m=n+1;m<r.length;m++)s[2]*=r[m];let i=new Map,a=new Int32Array(r[n]),l=new Oe(s,o,e),u=[],c=s[0]===1&&s[2]===1;for(let m=0;m<r[n];m++){let y;if(c)y=e[m].toString();else{let g=[];for(let w=0;w<s[0];w++)for(let C=0;C<s[2];C++)g.push(l.get(w,m,C));y=g.join(",")}let x=i.get(y);if(x!=null)a[m]=x;else{let g=i.size;i.set(y,g),a[m]=g,u.push(m)}}let p=s.slice();p[1]=i.size;let f=new Oe(p,o);u.forEach((m,y)=>{for(let x=0;x<s[0];x++)for(let g=0;g<s[2];g++)f.set(l.get(x,m,g),x,y,g)});let h=r.slice();return h[n]=p[1],{outputValues:f.values,outputShape:h,indices:a}}var{addImpl:Qx,bincountImpl:sa,bincountReduceImpl:Zx,castImpl:Jx,ceilImpl:t0,concatImpl:e0,equalImpl:r0,expImpl:o0,expm1Impl:n0,floorImpl:s0,gatherNdImpl:i0,gatherV2Impl:a0,greaterImpl:l0,greaterEqualImpl:u0,lessImpl:c0,lessEqualImpl:p0,linSpaceImpl:f0,logImpl:d0,maxImpl:h0,maximumImpl:m0,minimumImpl:g0,multiplyImpl:x0,negImpl:y0,notEqualImpl:w0,prodImpl:b0,raggedGatherImpl:v0,raggedRangeImpl:C0,raggedTensorToTensorImpl:S0,rangeImpl:$0,rsqrtImpl:I0,scatterImpl:T0,sigmoidImpl:E0,simpleAbsImpl:ia,sliceImpl:_0,sparseFillEmptyRowsImpl:A0,sparseReshapeImpl:k0,sparseSegmentReductionImpl:aa,sqrtImpl:R0,staticRegexReplaceImpl:N0,stridedSliceImpl:F0,stringNGramsImpl:D0,stringSplitImpl:O0,stringToHashBucketFastImpl:P0,subImpl:M0,tileImpl:L0,topKImpl:B0,transposeImpl:Qr,uniqueImpl:U0}=sp;function ip(e,t){return["x","y","z","w","u","v"].slice(0,t).map(r=>`${e}.${r}`)}function lt(e,t){return t===1?[e]:ip(e,t)}function V0(e,t){if(e===1)return"rc";let r="";for(let o=0;o<e;o++)r+=t[o],o<e-1&&(r+=",");return r}var la=class{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Y(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let r=lt("rc",this.rank),o=H(this.rank),n=this.getOutOfBoundsCondition(r),s=this.getSetup(r),i=this.getOutput(r);this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){let r=[];for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){let s=`${o===0?"r":"rp1"}, ${n===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${t[t.length-1-i]},`+s;r.push(s)}return r}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let r="";for(let o=this.rank-2;o<this.rank;o++)r+=`${t[o]} >= ${this.enableShapeUniforms?`outShape[${o}]`:this.outputShape[o]}`,o<this.rank-1&&(r+="||");return r}getSetup(t){if(this.rank===1)return"";let r=t.slice(-2),o=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${r[0]};
      int c = ${r[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${o};
      bool rEdge = rp1 >= ${n};
    `}getOutput(t){let r=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${r[0]}),
            cEdge ? 0. : getA(${r[1]}),
            rEdge ? 0. : getA(${r[2]}),
            rEdge || cEdge ? 0. : getA(${r[3]})`}};var en=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${n_(r,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Ho():Go(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${o}

        setOutput(result);
      }
    `}};function n_(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?Hg(["r","c","d"],"inputShape"):Te(["r","c","d"],e)}
      return ivec3(r, c, d);
    }
  `}var ua=class{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,r,o){let n=z0(r,o),s=G0(t,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=W0(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let l=this.freeTextures[s].pop();return this.usedTextures[s].push(l),l}let a;return n===Tt.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):n===Tt.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):n===Tt.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):n===Tt.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):n===Tt.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,r,o,n){if(this.freeTextures==null)return;let s=z0(o,n),i=G0(r,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=W0(r,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=I().get("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let u=this.usedTextures[i],c=u&&u.indexOf(t);if(c==null||c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u[c]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;let t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);let r=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*r)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let t in this.freeTextures)this.freeTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function s_(e,t){let r=e;if(t===r.R32F)return 4;if(t===r.R16F)return 2;if(t===r.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===r.RGBA16F)return 8;if(t===r.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function W0(e,t,r,o,n){let s=i_(t,o),i;if(n){let[l,u]=Ue(e[0],e[1]);i=l*u}else{let[l,u]=Kr(e[0],e[1]);i=l*u}let a=s_(r,s);return i*a}function i_(e,t){switch(e){case Tt.PACKED_2X2_FLOAT32:return Oc(t);case Tt.PACKED_2X2_FLOAT16:return Pc(t);case Tt.UNPACKED_FLOAT32:return Nc(t);case Tt.UNPACKED_FLOAT16:return Fc(t);case Tt.PACKED_4X1_UNSIGNED_BYTE:return Dc(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function a_(e){return I().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Tt.PACKED_2X2_FLOAT32:Tt.UNPACKED_FLOAT32:e?Tt.PACKED_2X2_FLOAT16:Tt.UNPACKED_FLOAT16}function z0(e,t){if(e===kt.UPLOAD)return Tt.PACKED_2X2_FLOAT32;if(e===kt.RENDER||e==null)return a_(t);if(e===kt.DOWNLOAD||e===kt.PIXELS)return Tt.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function G0(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}var Et=class{constructor(t,r){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${r}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},xt="if (isnan(x)) return x;",H0="return x;",ap="return abs(x);";var q0="return (x >= 0.0) ? x : (exp(x) - 1.0);",K0=xt+`
  return (x < 0.0) ? 0.0 : x;
`,X0=xt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,We="return x;",j0="return 1.0 / (1.0 + exp(-1.0 * x));";var Q0="return x;",Z0=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,J0=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ty=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ey="return 1.0 / (1.0 + exp(-1.0 * x));",qt=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${r}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var ca=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length);let r=t.length,o=lt("rc",r),n=H(r),s=V0(r,o),i=o.slice(-2),a=r<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var u_=Be.whereImpl,c_=1e-7,p_=1e-4,pa={};function f_(e){return e in pa||(pa[e]={}),pa[e]}var d_=I().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),h_=600;function m_(){return I().global.screen==null?1024:I().global.screen.height*I().global.screen.width*window.devicePixelRatio*h_/1024/1024}var Zr=class extends Nr{nextDataId(){return Zr.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!I().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let r;if(t!=null){if(t instanceof Qo)r=t;else{let o=te(I().getNumber("WEBGL_VERSION"),t);r=new Qo(o)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let o=te(I().getNumber("WEBGL_VERSION"));r=new Qo(o),this.binaryCache=f_(I().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=r,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new ua(this.gpgpu),this.numMBBeforeWarning=m_(),this.texData=new $n(this,je())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,r,o,n,s,i){let a=this.makeTensorInfo(r,o),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[n,s]},l.texShape=[n,s];let u=Kn(r),c=new Xn(u,!1,i),p=this.runWebGLProgram(c,[a],o,[[n,s]]);return p.shape=r,l.texture=null,this.disposeIntermediateTensorInfo(a),p.dataId}write(t,r,o){if((I().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||I().getBool("DEBUG"))&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let n={id:this.nextDataId()};return this.texData.set(n,{shape:r,dtype:o,values:t,usage:kt.UPLOAD,refCount:1}),n}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let r=this.texData.get(t);r.refCount++}decRef(t){if(this.texData.has(t)){let r=this.texData.get(t);r.refCount--}}move(t,r,o,n,s){if(I().getBool("DEBUG")&&this.checkNumericalProblems(r),n==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:n,values:r,usage:kt.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let r=this.texData.get(t),{values:o,dtype:n,complexTensorInfos:s,slice:i,shape:a,isPacked:l}=r;if(i!=null){let f;l?f=new qt(a,We):f=new Et(a,We);let h=this.runWebGLProgram(f,[{dataId:t,shape:a,dtype:n}],n),m=this.readSync(h.dataId);return this.disposeIntermediateTensorInfo(h),m}if(o!=null)return this.convertAndCacheOnCPU(t);if(n==="string")return o;let u=this.activeTimers!=null,c;u&&(c=b.now());let p;if(n==="complex64"){let f=this.readSync(s.real.dataId),h=this.readSync(s.imag.dataId);p=S.mergeRealAndImagArrays(f,h)}else p=this.getValuesFromTexture(t);return u&&(this.downloadWaitMs+=b.now()-c),this.convertAndCacheOnCPU(t,p)}async read(t){if(this.pendingRead.has(t)){let m=this.pendingRead.get(t);return new Promise(y=>m.push(y))}let r=this.texData.get(t),{values:o,shape:n,slice:s,dtype:i,complexTensorInfos:a,isPacked:l}=r;if(s!=null){let m;l?m=new qt(n,We):m=new Et(n,We);let y=this.runWebGLProgram(m,[{dataId:t,shape:n,dtype:i}],i),x=this.read(y.dataId);return this.disposeIntermediateTensorInfo(y),x}if(o!=null)return this.convertAndCacheOnCPU(t);if(I().getBool("DEBUG")&&!I().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&I().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null,c;if(i!=="complex64"&&I().get("WEBGL_BUFFER_SUPPORTED")){c=this.decode(t);let m=this.texData.get(c.dataId);u=this.gpgpu.createBufferFromTexture(m.texture.texture,...zn(n))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(i==="complex64"){let m=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),y=m[0],x=m[1];p=S.mergeRealAndImagArrays(y,x)}else if(u==null)p=this.getValuesFromTexture(t);else{let m=b.sizeFromShape(n);p=this.gpgpu.downloadFloat32MatrixFromBuffer(u,m)}if(c!=null&&this.disposeIntermediateTensorInfo(c),u!=null){let m=this.gpgpu.gl;L(m,()=>m.deleteBuffer(u))}let f=this.convertAndCacheOnCPU(t,p),h=this.pendingRead.get(t);return this.pendingRead.delete(t),h.forEach(m=>m(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&je().removeDataId(t,this),this.pendingDeletes--),f}readToGPU(t,r={}){let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,isPacked:l,texture:u}=o;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let h;l?h=new qt(s,We):h=new Et(s,We);let m=this.runWebGLProgram(h,[{dataId:t,shape:s,dtype:a}],a),y=this.readToGPU(m,r);return this.disposeIntermediateTensorInfo(m),y}if(u==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let c=this.decode(t,r.customTexShape),p=je().makeTensorFromTensorInfo(c),f=this.texData.get(c.dataId);return Object.assign({tensorRef:p},f.texture)}bufferSync(t){let r=this.readSync(t.dataId);if(t.dtype==="string")try{let o=r.map(n=>b.decodeString(n));return Q(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Q(t.shape,t.dtype,r)}checkNumericalProblems(t){if(t!=null)for(let r=0;r<t.length;r++){let o=t[r];if(!Ig(o))throw I().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${o} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${o} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:r,dtype:o,isPacked:n}=this.texData.get(t),s=b.sizeFromShape(r);if(I().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let f=this.decode(t),h=this.texData.get(f.dataId),m=this.gpgpu.downloadMatrixFromPackedTexture(h.texture.texture,...zn(r)).subarray(0,s);return this.disposeIntermediateTensorInfo(f),m}let i=I().getBool("WEBGL_PACK")&&n===!0,a=i?Kn(r):r,l=i?new ta(a):new Ji(a),u=this.runWebGLProgram(l,[{shape:a,dtype:o,dataId:t}],"float32"),c=this.texData.get(u.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(u),p}timerAvailable(){return I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let r=this.activeTimers,o=[],n=!1;this.programTimersStack==null?(this.programTimersStack=o,n=!0):this.activeTimers.push(o),this.activeTimers=o,t();let s=b.flatten(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=b.flatten(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=r,n&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let l=await Promise.all(s);a.kernelMs=b.sum(l),a.getExtraProfileInfo=()=>l.map((u,c)=>({name:i[c],ms:u})).map(u=>`${u.name}: ${u.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:b.now(),endMs:null}}endTimer(t){return I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=b.now(),t)}async getQueryTime(t){if(I().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let r=t;return r.endMs-r.startMs}disposeData(t,r=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(r?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!r&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:o}=this.texData.get(t);return o!=null&&(this.disposeData(o.real.dataId,r),this.disposeData(o.imag.dataId,r)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:r,dtype:o,texShape:n,usage:s,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,u=this.dataRefCount.get(l);u>1?this.dataRefCount.set(l,u-1):(this.dataRefCount.delete(l),r!=null&&(this.numBytesInGPU-=this.computeBytes(n,o),this.textureManager.releaseTexture(r,n,s,i)));let c=this.texData.get(t);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,r=d_){return I().getBool("WEBGL_CPU_FORWARD")&&t.every(o=>this.texData.get(o.dataId).texture==null&&b.sizeFromShape(o.shape)<r)}getGPGPUContext(){return this.gpgpu}where(t){S.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let r=t.dataSync();return u_(t.shape,r)}packedUnaryOp(t,r,o){let n=new qt(t.shape,r),s=this.compileAndRun(n,[t],o);return je().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let n=ia(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,n)}if(I().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ap,t.dtype);let r=new Et(t.shape,ap),o=this.compileAndRun(r,[t]);return je().makeTensorFromTensorInfo(o)}makeTensorInfo(t,r,o){let n;if(r==="string"&&o!=null&&o.length>0&&b.isString(o[0])){let s=o.map(i=>b.encodeString(i));n=this.write(s,t,r)}else n=this.write(o,t,r);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:r}}makeOutput(t,r,o){return je().makeTensorFromTensorInfo(this.makeTensorInfo(t,r,o),this)}unpackTensor(t){let r=new ca(t.shape);return this.runWebGLProgram(r,[t],t.dtype)}packTensor(t){let r=new la(t.shape),o=!0;return this.runWebGLProgram(r,[t],t.dtype,null,o)}packedReshape(t,r){let o=[wr(t.shape),...br(t.shape)],n={dtype:t.dtype,shape:o,dataId:t.dataId},s=[wr(r),...br(r)],i=new en(s,o),a=!0,l=[o],u=this.runWebGLProgram(i,[n],t.dtype,l,a);return{dataId:u.dataId,shape:r,dtype:u.dtype}}decode(t,r){let o=this.texData.get(t),{isPacked:n,shape:s,dtype:i}=o;if(r!=null){let f=b.sizeFromShape(s),h=r[0]*r[1]*4;b.assert(f<=h,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let a=Kn(s),l;n?l=new Zi(a):l=new Qi(a);let u=!0,c=[r??zn(a)],p=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,c,u,r);return{dtype:i,shape:s,dataId:p.dataId}}runWebGLProgram(t,r,o,n,s=!1,i){let a=this.makeTensorInfo(t.outputShape,o),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===yr.DENSE){let g=i??zn(t.outputShape);l.texShape=g.map(w=>w*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),b.sizeFromShape(a.shape)===0)return l.values=b.getTypedArrayFromDType(a.dtype,0),a;let u=[],c=r.map(g=>{if(g.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let w=this.texData.get(g.dataId);if(w.texture==null){if(!t.packedInputs&&b.sizeFromShape(g.shape)<=I().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:g.shape,texData:null,isUniform:!0,uniformValues:w.values};t.packedInputs&&(w.isPacked=!0,w.shape=g.shape)}if(this.uploadToGPU(g.dataId),!!w.isPacked!=!!t.packedInputs)g=w.isPacked?this.unpackTensor(g):this.packTensor(g),u.push(g),w=this.texData.get(g.dataId);else if(w.isPacked&&!Xr(w.shape,g.shape)){let C=g,v=g.shape;g.shape=w.shape,g=this.packedReshape(g,v),u.push(g),w=this.texData.get(g.dataId),C.shape=v}return{shape:g.shape,texData:w,isUniform:!1}});this.uploadToGPU(a.dataId);let p={shape:a.shape,texData:l,isUniform:!1},f=Jg(t,c,p),h=this.getAndSaveBinary(f,()=>Qg(this.gpgpu,t,c,p)),m=this.activeTimers!=null,y;m&&(y=this.startTimer()),I().get("ENGINE_COMPILE_ONLY")||Zg(this.gpgpu,h,c,p,n),u.forEach(g=>this.disposeIntermediateTensorInfo(g)),m&&(y=this.endTimer(y),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(y)}));let x=I().get("WEBGL_FLUSH_THRESHOLD");if(x>0){let g=b.now();g-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=g)}if(!I().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&s===!1){let g=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),g}return a}compileAndRun(t,r,o,n,s=!1){return o=o||r[0].dtype,this.runWebGLProgram(t,r,o,n,s)}getAndSaveBinary(t,r){return t in this.binaryCache||(this.binaryCache[t]=r()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(I().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(r=>{this.gpgpu.deleteProgram(this.binaryCache[r].webGLProgram),delete this.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=K(()=>{if(!I().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=I().getBool("DEBUG");I().set("DEBUG",!1);let r=this.abs(Ft(1e-8)).dataSync()[0];if(I().set("DEBUG",t),r>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?c_:p_}uploadToGPU(t){let r=this.texData.get(t),{shape:o,dtype:n,values:s,texture:i,usage:a,isPacked:l}=r;if(i!=null)return;let u=this.activeTimers!=null,c;u&&(c=b.now());let p=r.texShape;if(p==null&&(p=Lg(o,l),r.texShape=p),s!=null){let f=Kn(o),h,m=p[1],y=p[0],x=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(l||!x)&&([m,y]=Ue(p[0],p[1])),l?h=new ea(f,x):h=new Xn(f,x);let g=x?[y,m]:p,w=this.makeTensorInfo(g,n),C=this.texData.get(w.dataId);x?C.usage=kt.PIXELS:C.usage=kt.UPLOAD,C.texShape=g,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),m,y,s);let v=[[y,m]],$=!0,T=this.runWebGLProgram(h,[w],n,v,$),E=this.texData.get(T.dataId);r.texShape=E.texShape,r.isPacked=E.isPacked,r.usage=E.usage,I().get("ENGINE_COMPILE_ONLY")?this.disposeData(T.dataId):(r.texture=E.texture,r.values=null,this.texData.delete(T.dataId)),this.disposeIntermediateTensorInfo(w),u&&(this.uploadWaitMs+=b.now()-c)}else{let f=this.acquireTexture(p,a,n,l);r.texture=f}}convertAndCacheOnCPU(t,r){let o=this.texData.get(t),{dtype:n}=o;return r!=null&&(o.values=g_(r,n)),o.values}acquireTexture(t,r,o,n){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,r,n)}computeBytes(t,r){return t[0]*t[1]*b.bytesPerElement(r)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,r]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(r));return Promise.all(t)}else{for(let[,r]of Object.entries(this.binaryCache)){let o=new Promise(n=>{try{this.checkCompletion_(r),n(!0)}catch(s){throw s}});t.push(o)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await wc(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Ec(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){let{variablesLocations:r,customUniformLocations:o,infLoc:n,nanLoc:s,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=Rc(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=r,t.customUniformLocations=o,t.infLoc=n,t.nanLoc=s,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,r,o){t.channels=t.channels||"RGBA";let{texture:n,height:s,width:i,channels:a}=t,l=je().backend;if(!l.gpgpu.gl.isTexture(n))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let u=l.writeTexture(n,r,o,s,i,a);return je().makeTensorFromDataId(u,r,o,l)}};Zr.nextDataId=0;function g_(e,t){if(t==="float32"||t==="complex64")return e;if(t==="int32"||t==="bool"){let r=t==="int32"?new Int32Array(e.length):new Uint8Array(e.length);for(let o=0;o<r.length;++o)r[o]=Math.round(e[o]);return r}else throw new Error(`Unknown dtype ${t}`)}gr.isBrowser()&&Rm("webgl",()=>new Zr,2);var rn=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var ce=class{constructor(t,r,o){this.variableNames=["A","B"],this.outputShape=S.assertAndGetBroadcastShape(r,o),this.enableShapeUniforms=Y(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var ee=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var we=class{constructor(t,r,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=S.assertAndGetBroadcastShape(r,o);let s=this.outputShape.length;this.enableShapeUniforms=Y(s);let i="";if(n)if(s===0||b.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${H(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let l=lt("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}};function ut(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var ry={kernelName:Mr,backendName:"webgl",kernelFunc:ut};function Kt(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.makeTensorInfo(o.shape,"complex64"),i=r.texData.get(s.dataId),a=ut({inputs:{x:o},backend:r}),l=ut({inputs:{x:n},backend:r});return i.complexTensorInfos={real:a,imag:l},s}var oy={kernelName:An,backendName:"webgl",kernelFunc:Kt};var lp="return (a < 0.) ? b * a : a;",up=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function x_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{alpha:s}=o,i=r.makeTensorInfo([],"float32",b.createScalarValue(s,"float32")),a=I().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new we(up,n.shape,i.shape):new ce(lp,n.shape,i.shape),l=r.runWebGLProgram(a,[n,i],"float32");return r.disposeIntermediateTensorInfo(i),l}var ny={kernelName:Ys,backendName:"webgl",kernelFunc:x_};var cp="return (a < 0.) ? b * a : a;",pp=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function y_(e){let{inputs:t,backend:r}=e,{x:o,alpha:n}=t,s=I().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new we(pp,o.shape,n.shape):new ce(cp,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],"float32")}var sy={kernelName:si,backendName:"webgl",kernelFunc:y_};var be="if (isnan(x)) return x;";function B({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,l=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&r!=null){let p=a.texData.get(i.dataId),f=r(p.values,l);return a.makeTensorInfo(i.shape,l,f)}let u=I().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null,c;return u?c=new qt(i.shape,t):c=new Et(i.shape,e),a.runWebGLProgram(c,[i],l)}}function j({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:l,b:u}=i,c=a;if(o&&l.dtype==="complex64"){let m=c.texData.get(l.dataId),y=c.texData.get(u.dataId),[x,g]=[[m.complexTensorInfos.real,y.complexTensorInfos.real],[m.complexTensorInfos.imag,y.complexTensorInfos.imag]].map(C=>{let[v,$]=C,T={dataId:v.dataId,dtype:v.dtype,shape:l.shape},E={dataId:$.dataId,dtype:$.dtype,shape:u.shape},_=new ce(e,l.shape,u.shape);return c.runWebGLProgram(_,[T,E],Nt(v.dtype,$.dtype))}),w=Kt({inputs:{real:x,imag:g},backend:c});return c.disposeIntermediateTensorInfo(x),c.disposeIntermediateTensorInfo(g),w}let p=s||Nt(l.dtype,u.dtype);if((l.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([l,u]))&&n!=null){let m=c.texData.get(l.dataId).values,y=c.texData.get(u.dataId).values,x=l.dtype==="string"?S.fromUint8ToStringArray(m):m,g=l.dtype==="string"?S.fromUint8ToStringArray(y):y,[w,C]=n(l.shape,u.shape,x,g,p),v=c.makeTensorInfo(C,p),$=c.texData.get(v.dataId);return $.values=w,v}let f=I().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null,h;return f?h=new we(t,l.shape,u.shape,r):h=new ce(e,l.shape,u.shape),c.runWebGLProgram(h,[l,u],p)}}function er(e,t=!1){if(e==="linear")return t?Q0:H0;if(e==="relu")return t?J0:K0;if(e==="elu")return t?Z0:q0;if(e==="relu6")return t?ty:X0;if(e==="prelu")return t?pp:cp;if(e==="leakyrelu")return t?up:lp;if(e==="sigmoid")return t?ey:j0;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var on=class{constructor(t,r,o,n=!1,s=!1,i=!1,a=null,l=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=Y(this.outputShape.length);let c=n?t[1]:t[2],p=Math.ceil(c/2),f=n?"i * 2, rc.y":"rc.y, i * 2",h=s?"rc.z, i * 2":"i * 2, rc.z",m=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],y=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],x="",g="";a&&(l?x=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?x=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:x=`vec4 activation(vec4 x) {
          ${a}
        }`,g="result = activation(result);");let w=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let C="rc.x",v="rc.x";t[0]<r[0]?C=`imod(rc.x, ${t[0]})`:r[0]<t[0]&&(v=`imod(rc.x, ${r[0]})`),this.userCode=`
      ${x}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${C};
        int batchB = ${v};
        for (int i = 0; i < ${p}; i++) {
          vec4 a = getMatrixA(batchA, ${f});
          vec4 b = getMatrixB(batchB, ${h});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${m[0]} * ${y[0]});
          result += (${m[1]} * ${y[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${w}

        ${g}

        setOutput(result);
      }
    `}};var fp={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},Jn=class{constructor(t,r,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=S.assertAndGetBroadcastShape(r,o),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var iy="return a * b;";function ts(e){let{inputs:t,backend:r}=e,{a:o,b:n}=t,s=S.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),u=new Jn(fp.REAL,o.shape,n.shape),c=new Jn(fp.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:n.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:n.shape}],f=r.runWebGLProgram(u,p,"float32"),h=r.runWebGLProgram(c,p,"float32"),m=Kt({inputs:{real:f,imag:h},backend:r});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(h),m}if(r.shouldExecuteOnCPU([o,n])){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),[u,c]=x0(o.shape,n.shape,a.values,l.values,s),p=r.makeTensorInfo(c,s),f=r.texData.get(p.dataId);return f.values=u,p}let i;return I().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new we(iy,o.shape,n.shape):i=new ce(iy,o.shape,n.shape),r.runWebGLProgram(i,[o,n],s)}var ay={kernelName:ko,backendName:"webgl",kernelFunc:ts};function ly(e,t,r){let o=[wr(e.shape),...br(e.shape)],n={dtype:e.dtype,shape:o,dataId:e.dataId},s=[wr(t),...br(t)],i=new en(s,o),a=!0,l=[o],u=r.runWebGLProgram(i,[n],e.dtype,l,a);return{dataId:u.dataId,shape:t,dtype:u.dtype}}function A(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{shape:s}=o,i=r,a=b.sizeFromShape(n.shape),l=b.inferFromImplicitShape(s,a),u=b.sizeFromShape(l);b.assert(a===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let c=i.texData.get(n.dataId);return c.isPacked&&!Xr(n.shape,l)&&!(c.texture!==null&&Xr(c.shape,l))?ly(n,l,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype})}var uy={kernelName:ai,backendName:"webgl",kernelFunc:A};var es=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a=Math.floor(o/4)*4,l=o%4,u="sumValue += dot(values, ones);";if(r!=null){let p=1/r;u=`sumValue += dot(values * ${b.isInt(p)?p.toPrecision(2):p}, ones);`}let c="";s%o>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}};var fa=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a="0.0",l="";r==="prod"?a="1.0":r==="min"?(a="1.0 / 1e-20",l="min"):r==="max"&&(a="-1.0 / 1e-20",l="max");let u=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="sum"?u="sumValue":r==="prod"?u="prodValue":r==="all"?u="allValue":r==="any"&&(u="anyValue");let c=Math.floor(o/4)*4,p=o%4,f=`
      if (${r==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${r==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${r==="min"} || ${r==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,h="vec4";r==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):r==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");let m="";s%o>0&&(m=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${m}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${f}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${p===2}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${p===3}) {
          ${h} values = ${h}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${f}
        }
        setOutput(${u});
      }
    `}};function b_(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let r=t.length?t[t.length-1].outSize:e[1],o=S.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:o,outSize:Math.ceil(r/o)})}return t}function re(e,t,r,o){let n=b_(e.shape),s=e;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:l,outSize:u}=n[i],c,p;r==="mean"?c=i===0?new es({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},a):new es({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u}):c=new fa({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},r),p=s,s=o.runWebGLProgram(c,[s],t),p.dataId!==e.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var da=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[r[i]];this.outputShape=o,this.rank=o.length;let n=H(this.rank),s=v_(r);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function v_(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(t);for(let n=0;n<e.length;n++)o[e[n]]=r[n];return o.join()}var ha=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(t.length);for(let c=0;c<o.length;c++)o[c]=t[r[c]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=H(this.rank),s=ip("rc",this.rank),i=new Array(this.rank);for(let c=0;c<r.length;c++)i[r[c]]=s[c];let a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${o[this.rank-1]}`,u=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${u};
      if(${l}) {
        result[1] = ${u};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${u};
        if(${l}) {
          result[3] = ${u};
        }
      }
      setOutput(result);
    }
    `}};function vr(e,t,r){let o=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ha(e.shape,t):new da(e.shape,t);return r.runWebGLProgram(o,[e],e.dtype)}function cy(e,t,r,o){let n=t,s=e.shape.length,i=b.parseAxisParam(n,e.shape),a=i,l=S.getAxesPermutation(a,s),u=l!=null,c=e;u&&(c=vr(e,l,o),a=S.getInnerMostAxes(a.length,s)),S.assertAxesAreInnerMostDims("sum",a,s);let[p,f]=S.computeOutAndReduceShapes(c.shape,a),h=p;r&&(h=S.expandShapeToKeepDim(p,i));let m=b.sizeFromShape(f),x=b.sizeFromShape(e.shape)/m,g=A({inputs:{x:c},attrs:{shape:[x,m]},backend:o}),w=zr(e.dtype),C=re(g,w,"sum",o),v=A({inputs:{x:C},attrs:{shape:h},backend:o});return o.disposeIntermediateTensorInfo(g),o.disposeIntermediateTensorInfo(C),u&&o.disposeIntermediateTensorInfo(c),v}function Jr(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o;return cy(n,s,i,r)}var py={kernelName:ci,backendName:"webgl",kernelFunc:Jr};function et(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{perm:s}=o,i=r,a=n.shape.length,l=new Array(a);for(let c=0;c<l.length;c++)l[c]=n.shape[s[c]];let u;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,f=Qr(p,n.shape,n.dtype,s,l);u=i.makeTensorInfo(l,n.dtype);let h=i.texData.get(u.dataId);h.values=f}else u=vr(n,s,i);return u}var fy={kernelName:Do,backendName:"webgl",kernelFunc:et};var dp=1e3;function to({a:e,b:t,transposeA:r,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){let u=e.shape.length,c=t.shape.length,p=r?e.shape[u-2]:e.shape[u-1],f=o?t.shape[c-1]:t.shape[c-2],h=r?e.shape[u-1]:e.shape[u-2],m=o?t.shape[c-2]:t.shape[c-1],y=e.shape.slice(0,-2),x=t.shape.slice(0,-2),g=b.sizeFromShape(y),w=b.sizeFromShape(x),v=Ln.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([h,m]);b.assert(p===f,()=>`Error in matMul: inner shapes (${p}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${o} must match.`);let $=r?[g,p,h]:[g,h,p],T=o?[w,m,f]:[w,f,m],E=A({inputs:{x:e},backend:n,attrs:{shape:$}}),_=A({inputs:{x:t},backend:n,attrs:{shape:T}}),N=[E,_],O=Math.max(g,w),V=r?E.shape[1]:E.shape[2],z=s!=null,ct=i!=null,pt=l==="leakyrelu",ht=l!=null?er(l,!0):null,gt=z||ct||pt||ht!=null,Ot;if((h===1||m===1)&&V>dp&&gt===!1){let P=E,ft=_;r&&(P=et({inputs:{x:E},backend:n,attrs:{perm:[0,2,1]}}),N.push(P)),o&&(ft=et({inputs:{x:_},backend:n,attrs:{perm:[0,2,1]}}),N.push(ft));let At=m!==1,fe=m===1,de=P;At&&(de=A({inputs:{x:P},backend:n,attrs:{shape:[O,V,1]}}),N.push(de));let G=m===1?2:1,wt=ft;fe&&(wt=A({inputs:{x:ft},backend:n,attrs:{shape:[O,1,V]}}),N.push(wt));let Bt=ts({inputs:{a:de,b:wt},backend:n});Ot=Jr({inputs:{x:Bt},backend:n,attrs:{axis:G,keepDims:!0}}),N.push(Bt)}else{let P=Nt(e.dtype,t.dtype),ft=new on($,T,[O,h,m],r,o,z,ht,ct,pt),At=[E,_];if(s!=null&&At.push(s),ct&&At.push(i),pt){let fe=n.makeTensorInfo([],"float32",b.createScalarValue(a,"float32"));At.push(fe),N.push(fe)}Ot=n.runWebGLProgram(ft,At,P)}let R=A({inputs:{x:Ot},backend:n,attrs:{shape:v}});N.push(Ot);for(let P of N)n.disposeIntermediateTensorInfo(P);return R}function C_(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:p}=o;return to({a:n,b:s,transposeA:l,transposeB:u,backend:r,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:c})}var dy={kernelName:Bh,backendName:"webgl",kernelFunc:C_};var hy="return abs(x);";function S_(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=r.texData.get(o.dataId),i=ia(s.values);return r.makeTensorInfo(o.shape,o.dtype,i)}let n;return I().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new qt(o.shape,hy):n=new Et(o.shape,hy),r.runWebGLProgram(n,[o],o.dtype)}var my={kernelName:_n,backendName:"webgl",kernelFunc:S_};var $_=xt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,I_=B({opSnippet:$_}),gy={kernelName:kf,backendName:"webgl",kernelFunc:I_};var T_=xt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,E_=B({opSnippet:T_}),xy={kernelName:Rf,backendName:"webgl",kernelFunc:E_};var yy="return a + b;",__=j({opSnippet:yy,packedOpSnippet:yy,supportsComplex:!0,cpuKernelImpl:Qx}),wy={kernelName:fr,backendName:"webgl",kernelFunc:__};var ma=class{constructor(t,r){this.outputShape=[],this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var ga=class{constructor(t,r){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function xa(e){let{inputs:t,backend:r}=e,o=t;if(o.length===1)return ut({inputs:{x:o[0]},backend:r});if(o.length>I().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let l=Math.floor(o.length/2),u=xa({inputs:o.slice(0,l),backend:r}),c=xa({inputs:o.slice(l),backend:r});return xa({inputs:[u,c],backend:r})}let n=o.map(l=>l.dtype).reduce((l,u)=>Nt(l,u)),s=o.map(l=>l.shape),a=I().getBool("WEBGL_PACK")?new ga(o[0].shape,s):new ma(o[0].shape,s);return r.runWebGLProgram(a,o,n)}var by={kernelName:Nf,backendName:"webgl",kernelFunc:xa};function A_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=et({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,a)),S.assertAxesAreInnerMostDims("all",u,a);let[f,h]=S.computeOutAndReduceShapes(p.shape,u),m=b.sizeFromShape(h),y=A({inputs:{x:p},backend:r,attrs:{shape:[-1,m]}}),x=re(y,y.dtype,"all",r),g;if(i){let w=S.expandShapeToKeepDim(f,l);g=A({inputs:{x},backend:r,attrs:{shape:w}})}else g=A({inputs:{x},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(x),c!=null&&r.disposeIntermediateTensorInfo(p),g}var vy={kernelName:Ff,backendName:"webgl",kernelFunc:A_};function k_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=et({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,a)),S.assertAxesAreInnerMostDims("any",u,a);let[f,h]=S.computeOutAndReduceShapes(p.shape,u),m=b.sizeFromShape(h),y=A({inputs:{x:p},backend:r,attrs:{shape:[-1,m]}}),x=re(y,y.dtype,"any",r),g;if(i){let w=S.expandShapeToKeepDim(f,l);g=A({inputs:{x},backend:r,attrs:{shape:w}})}else g=A({inputs:{x},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(x),c!=null&&r.disposeIntermediateTensorInfo(p),g}var Cy={kernelName:Df,backendName:"webgl",kernelFunc:k_};var ya=class{constructor(t,r,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=t;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=r==="max"?">":"<",l=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${n}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var wa=class{constructor(t,r,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,b.assert(t.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=t[t.length-1],i=Math.ceil(s/r);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,l=a.length,u=H(l),c=lt("coords",l),p,f;if(i===1){f=l+1;let _=H(f);p=`
        ${_} sourceLocR = ${_}(${c.join()}, 0);
        ++${c[l-1]};
        ${_} sourceLocG = ${_}(${c.join()}, 0);
        ++${c[l-2]};
        ${_} sourceLocA = ${_}(${c.join()}, 0);
        --${c[l-1]};
        ${_} sourceLocB = ${_}(${c.join()}, 0);
        --${c[l-2]};`}else f=l,p=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;let h=["x","y","z","w","u","v"].slice(0,f),m="."+h[f-1],y=h.map(_=>"int "+_),x=lt("sourceLocR",f-1).concat("inIdx.r"),g=lt("sourceLocG",f-1).concat("inIdx.g"),w=lt("sourceLocB",f-1).concat("inIdx.b"),C=lt("sourceLocA",f-1).concat("inIdx.a"),v=o==="max"?"greaterThan":"lessThan",$=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${w.join()}),
                             getBestIndicesAChannel(${C.join()})));`,T=`vec4(
            getAChannel(${x.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${w.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${C.join()}) : 0.)`,E=n?"":`
      float getBestIndicesAChannel(${y.join()}) {
        return getChannel(getBestIndicesA(${h.join()}),
                                          vec2(${h.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${y.join()}) {
        return getChannel(getA(${h.join()}),
                               vec2(${h.slice(-2).join()}));
      }
      ${E}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${a[l-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${m}, sourceLocG${m},
          sourceLocB${m}, sourceLocA${m}) * ${r};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${T};

        for (int i = 0; i < ${r}; i++) {
          inIdx = srcIdx;
          ${$}
          vec4 candidate = ${T};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${v}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function Sy(e,t,r,o=null){let n=t.shape[0],s=t.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=S.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},l=new ya(a,r,o==null),u=[t];o!=null&&u.push(o);let c=e.runWebGLProgram(l,u,"int32");if(c.shape[1]===1)return c;let p=Sy(e,t,r,c);return e.disposeIntermediateTensorInfo(c),p}function $y(e,t,r,o=null){let n=o!=null?o.shape:t.shape,s=n[n.length-1],i=S.computeOptimalWindowSize(s),a=new wa(n,i,r,o==null),l=o==null?[t]:[t,o],u=e.runWebGLProgram(a,l,"int32");if(u.shape.length===t.shape.length){let c=$y(e,t,r,u);return e.disposeIntermediateTensorInfo(u),c}return u}function ba(e,t,r,o){let n=[r];if(S.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,t.shape.length),!I().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let s=[],i=e.texData.get(t.dataId),a=i!==null&&i.isPacked,l=t;a&&(l=e.unpackTensor(t),s.push(l));let[u,c]=S.computeOutAndReduceShapes(l.shape,n),p=b.sizeFromShape(c),f=A({inputs:{x:l},backend:e,attrs:{shape:[-1,p]}});s.push(f);let h=Sy(e,f,o);s.push(h);let m=A({inputs:{x:h},backend:e,attrs:{shape:u}});return s.forEach(y=>e.disposeIntermediateTensorInfo(y)),m}return $y(e,t,o)}function R_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=S.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=et({inputs:{x:n},backend:r,attrs:{perm:a}}),u.push(l),i=S.getInnerMostAxes(i.length,l.shape.length)),S.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);let c=ba(r,l,i[0],"max");return u.forEach(p=>r.disposeIntermediateTensorInfo(p)),c}var Iy={kernelName:Of,backendName:"webgl",kernelFunc:R_};function N_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=S.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=et({inputs:{x:n},backend:r,attrs:{perm:a}}),u.push(l),i=S.getInnerMostAxes(i.length,l.shape.length)),S.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);let c=ba(r,l,i[0],"min");return u.forEach(p=>r.disposeIntermediateTensorInfo(p)),c}var Ty={kernelName:Pf,backendName:"webgl",kernelFunc:N_};var F_=xt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,D_=B({opSnippet:F_}),Ey={kernelName:Mf,backendName:"webgl",kernelFunc:D_};var O_=xt+"return log(x + sqrt(x * x + 1.0));",P_=B({opSnippet:O_}),_y={kernelName:Lf,backendName:"webgl",kernelFunc:P_};var M_=xt+`
  return atan(x);
`,L_=B({opSnippet:M_}),Ay={kernelName:Bf,backendName:"webgl",kernelFunc:L_};var B_=rn+`
  return atan(a, b);
`,U_=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ee+`
  return result;
`,V_=j({opSnippet:B_,packedOpSnippet:U_}),ky={kernelName:Vf,backendName:"webgl",kernelFunc:V_};var W_=xt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,z_=B({opSnippet:W_}),Ry={kernelName:Uf,backendName:"webgl",kernelFunc:z_};var Ee=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,u=t.dilationHeight,c=t.dilationWidth,p=t.effectiveFilterHeight,f=t.effectiveFilterWidth,h=t.padInfo.top,m=t.padInfo.left;this.outputShape=t.outShape;let y=r==="avg",x=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,g=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`,w="0.0";if(y||(w="-1.0 / 1e-20"),o){let _=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${h}, ${m});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${_} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?x:g:`wR * ${f} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let C="max",v=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(v="avgValue / max(count, 1.0)");let $=Math.floor(i/4)*4,T=i%4,E=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${h}, ${m});
      const float initializationValue = ${w};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${w});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${$}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${E}
          }

          int xC = xCCorner + ${$};
          if (${T===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${E}
          } else if (${T===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${E}
          } else if (${T===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${E}
          }
        }
        setOutput(${v});
      }
    `}},Cr=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,u=t.strideWidth,c=t.dilationDepth,p=t.dilationHeight,f=t.dilationWidth,h=t.effectiveFilterDepth,m=t.effectiveFilterHeight,y=t.effectiveFilterWidth,x=t.padInfo.front,g=t.padInfo.top,w=t.padInfo.left;this.outputShape=t.outShape;let C=r==="avg",v="0.0";if(C||(v="-1.0 / 1e-20"),o){let O=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${u});
        const ivec3 pads = ivec3(${x}, ${g}, ${w});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${h};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${m};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${y};
                  wC += ${f}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${O} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${m} * ${y} +
                      wR * ${y} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let $="max",T=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(T="avgValue / max(count, 1.0)");let E=Math.floor(i/4)*4,_=i%4,N=`
      if (${C}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${u});
      const ivec3 pads = ivec3(${x}, ${g}, ${w});
      const float initializationValue = ${v};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${v});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${E}; wC += 4) {
              int xC = xCCorner + wC * ${f};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                getValue(batch, xD, xR, xC + 3 * ${f}, ch)
              );

              ${N}
            }

            int xC = xCCorner + ${E};
            if (${_===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${_===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${_===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                initializationValue
              );

              ${N}
            }
          }
        }
        setOutput(${T});
      }
    `}};function G_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;Ve(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(S.eitherStridesOrDilationsAreOne(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=S.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return ut({inputs:{x:n},backend:r});let p=new Ee(c,"avg",!1);return r.runWebGLProgram(p,[n],"float32")}var Ny={kernelName:Wf,backendName:"webgl",kernelFunc:G_};function H_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o,c=[1,1,1],p=S.computePool3DInfo(n.shape,s,i,c,a,l,u),f=new Cr(p,"avg",!1);return r.runWebGLProgram(f,[n],"float32")}var Fy={kernelName:Gf,backendName:"webgl",kernelFunc:H_};var va=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,u=t.effectiveFilterWidth,c=l-1-t.padInfo.top,p=u-1-t.padInfo.left,f=1/(r*o);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${p});
      const float avgMultiplier = float(${f});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},Ca=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,h=t.effectiveFilterWidth,m=p-1-t.padInfo.front,y=f-1-t.padInfo.top,x=h-1-t.padInfo.left,g=1/(r*o*n);this.userCode=`
      const ivec3 pads = ivec3(${m}, ${y}, ${x});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${f};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${h};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function q_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],f=S.computePool3DInfo(i.shape,a,l,p,u,c),h=new Ca(f);return r.runWebGLProgram(h,[n],i.dtype)}var Dy={kernelName:Hf,backendName:"webgl",kernelFunc:q_};function K_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s;Ve([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:u}=o,c=S.computePool2DInfo(i.shape,a,l,1,u),p=new va(c);return r.runWebGLProgram(p,[n],i.dtype)}var Oy={kernelName:zf,backendName:"webgl",kernelFunc:K_};function X_(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s}=t,{transposeA:i,transposeB:a}=o;return to({a:n,b:s,transposeA:i,transposeB:a,backend:r})}var Py={kernelName:Ms,backendName:"webgl",kernelFunc:X_};var Sa=class{constructor(t,r,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],S.assertAndGetBroadcastShape(t,r),S.assertAndGetBroadcastShape(t,o);let a="0.0";n!=null&&(S.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(S.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var $a=class{constructor(t,r,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],S.assertAndGetBroadcastShape(t,r),S.assertAndGetBroadcastShape(t,o);let a="vec4(0.0)";n!=null&&(S.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(S.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var j_=({inputs:e,backend:t,attrs:r})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=e;b.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),b.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),b.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=r;l==null&&(l=.001);let u=[o,n,s],c=null;i!=null&&(c=i.shape,u.push(i));let p=null;a!=null&&(p=a.shape,u.push(a));let f=I().getBool("WEBGL_PACK_NORMALIZATION")?new $a(o.shape,n.shape,s.shape,c,p,l):new Sa(o.shape,n.shape,s.shape,c,p,l);return t.runWebGLProgram(f,u,u[0].dtype)},My={kernelName:vd,backendName:"webgl",kernelFunc:j_};var Ia=class{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;let r=H(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=Y_(this.rank),n,s=t.map((i,a)=>`sourceLoc.${hp[a]} = start[${a}] + coords.${hp[a]};`);n=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},hp=["x","y","z","w","u","v"];function Y_(e){if(e===1)return"sourceLoc";if(e<=6)return hp.slice(0,e).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}var Ta=class{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let r=H(this.rank),o=lt("coords",this.rank),n=lt("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
        ++${n[this.rank-1]};
        result.y = ${i};
        --${n[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${o[this.rank-1]};
      if (++${o[this.rank-2]} < ${t[this.rank-2]}) {
        ++${n[this.rank-2]};
        result.z = ${i};
        if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
          ++${n[this.rank-1]};
          result.w = ${i};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${r}(${t.map((c,p)=>`start[${p}]`).join()});`:t.map((c,p)=>`${n[p]} = ${o[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${r} coords = getOutputCoords();
        ${r} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}};function Q_(e,t,r,o){let n=o.texData.get(e.dataId),s=o.makeTensorInfo(r,e.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=r,i.dtype=e.dtype;let a=Gt.computeFlatOffset(t,b.computeStrides(e.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||e.dataId};let l=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,l+1),s}function _e(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,size:i}=o,[a,l]=Gt.parseSliceParams(n,s,i);if(Gt.assertParamsValid(n,a,l),b.sizeFromShape(l)===0)return r.makeTensorInfo(l,n.dtype,[]);if(r.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=r.texData.get(n.dataId),f=_0(p.values,a,l,n.shape,n.dtype);return r.makeTensorInfo(l,n.dtype,f)}let{isPacked:u}=r.texData.get(n.dataId),c=Gt.isSliceContinous(n.shape,a,l);if(u||!c){let p=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ta(l):new Ia(l),f=[a];return r.runWebGLProgram(p,[n],n.dtype,f)}return r.uploadToGPU(n.dataId),Q_(n,a,l,r)}var Ly={kernelName:Nu,backendName:"webgl",kernelFunc:_e};var Z_=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,crops:i}=o;b.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((w,C)=>w*C),l=S.getReshaped(n.shape,s,a),u=S.getPermuted(l.length,s.length),c=S.getReshapedPermuted(n.shape,s,a),p=S.getSliceBeginCoords(i,s.length),f=S.getSliceSize(c,i,s.length),h=[],m=A({inputs:{x:n},backend:r,attrs:{shape:l}}),y=et({inputs:{x:m},backend:r,attrs:{perm:u}}),x=A({inputs:{x:y},backend:r,attrs:{shape:c}}),g=_e({inputs:{x},backend:r,attrs:{begin:p,size:f}});return h.push(m),h.push(y),h.push(x),h.forEach(w=>r.disposeIntermediateTensorInfo(w)),g},By={kernelName:qf,backendName:"webgl",kernelFunc:Z_};function J_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i}=o,a=r.readSync(n.dataId),l=r.readSync(s.dataId),u=sa(a,l,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,u)}var Uy={kernelName:Kf,backendName:"webgl",kernelFunc:J_};function tA(e){let{inputs:t,backend:r}=e,{s0:o,s1:n}=t,s=r.readSync(o.dataId),i=r.readSync(n.dataId),a=S.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return r.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var Vy={kernelName:Xf,backendName:"webgl",kernelFunc:tA};var eA="return float(a != b);",mp=j({opSnippet:eA,cpuKernelImpl:w0,dtype:"bool"}),Wy={kernelName:oi,backendName:"webgl",kernelFunc:mp};function rr(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return ut({inputs:{x:n.complexTensorInfos.real},backend:r})}var zy={kernelName:Rn,backendName:"webgl",kernelFunc:rr};var rA="return float(int(x));";function Gy(e,t){let r=new Et(e.shape,rA),o=t.runWebGLProgram(r,[e],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function gp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return ut({inputs:{x:n},backend:r});let i=Vn(n.shape),a=gp({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),l=Kt({inputs:{real:a,imag:i},backend:r});return i.dispose(),r.disposeIntermediateTensorInfo(a),l}if(n.dtype==="complex64"){let i=rr({inputs:{input:n},backend:r}),a=gp({inputs:{x:i},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(i),a}if(!b.hasEncodingLoss(n.dtype,s)){let i=ut({inputs:{x:n},backend:r});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(r.shouldExecuteOnCPU([n])){let i=r.texData.get(n.dataId).values,[a,l,u]=Jx(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,u)}if(s==="int32")return Gy(n,r);if(s==="bool"){let i=r.makeTensorInfo([],"bool",b.getTypedArrayFromDType("bool",1)),l=mp({inputs:{a:n,b:i},backend:r});return r.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Hy={kernelName:Pr,backendName:"webgl",kernelFunc:gp};var qy="return ceil(x);",oA=B({opSnippet:qy,packedOpSnippet:qy,cpuKernelImpl:t0}),Ky={kernelName:Ls,backendName:"webgl",kernelFunc:oA};var Ea=class{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var _a=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function nA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{clipValueMin:s,clipValueMax:i}=o,a;I().getBool("WEBGL_PACK_CLIP")?a=new _a(n.shape):a=new Ea(n.shape);let l=[[s],[i]];return r.runWebGLProgram(a,[n],n.dtype,l)}var Xy={kernelName:jf,backendName:"webgl",kernelFunc:nA};var Aa=class{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function jy(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function sA(e){let{inputs:t,backend:r}=e,{x:o}=t,n=r.texData.get(o.dataId),s=new Aa(o.shape),i=[jy(o,n.complexTensorInfos.real),jy(o,n.complexTensorInfos.imag)];return r.runWebGLProgram(s,i,i[0].dtype)}var Yy={kernelName:Bs,backendName:"webgl",kernelFunc:sA};var ka=class{constructor(t){this.outputShape=[],this.outputShape=S.computeOutShape(t,1),this.variableNames=t.map((i,a)=>`T${a}`);let r=new Array(t.length-1);r[0]=t[0][1];for(let i=1;i<r.length;i++)r[i]=r[i-1]+t[i][1];let o=[`if (yC < ${r[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<r.length;i++){let a=r[i-1];o.push(`else if (yC < ${r[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=r.length,s=r[r.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var Na=class{constructor(t,r){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=S.computeOutShape(t,r);let o=this.outputShape,n=o.length,s=H(n),i=lt("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=t.map((y,x)=>`T${x}`);let l=new Array(t.length-1);l[0]=t[0][r];for(let y=1;y<l.length;y++)l[y]=l[y-1]+t[y][r];let u=a[r],c=a.slice(-2),p=a.join(),f=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let y=1;y<l.length;y++){let x=l[y-1];f+=`
        if (${u} < ${l[y]}  && ${u} >= ${l[y-1]}) {
          return getChannel(
            getT${y}(${Ra(a,u,x)}),
            vec2(${Ra(c,u,x)}));
        }`}let h=l.length,m=l[l.length-1];f+=`
        return getChannel(
          getT${h}(${Ra(a,u,m)}),
          vec2(${Ra(c,u,m)}));`,this.userCode=`
      float getValue(${a.map(y=>"int "+y)}) {
        ${f}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[n-1]} = ${i[n-1]} + 1;
        if (${i[n-1]} < ${o[n-1]}) {
          result.g = getValue(${i});
        }

        ${i[n-2]} = ${i[n-2]} + 1;
        if (${i[n-2]} < ${o[n-2]}) {
          result.a = getValue(${i});
        }

        ${i[n-1]} = ${i[n-1]} - 1;
        if (${i[n-2]} < ${o[n-2]} &&
            ${i[n-1]} < ${o[n-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}};function Ra(e,t,r){let o=e.indexOf(t);return e.map((s,i)=>i===o?`${s} - ${r}`:s).join()}function eo(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return ut({inputs:{x:n.complexTensorInfos.imag},backend:r})}var Qy={kernelName:js,backendName:"webgl",kernelFunc:eo};function nn(e,t,r){let o=e[0].dtype;if(o==="complex64"){let h=e.map(w=>rr({inputs:{input:w},backend:r})),m=e.map(w=>eo({inputs:{input:w},backend:r})),y=nn(h,t,r),x=nn(m,t,r),g=Kt({inputs:{real:y,imag:x},backend:r});return h.forEach(w=>r.disposeIntermediateTensorInfo(w)),m.forEach(w=>r.disposeIntermediateTensorInfo(w)),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(x),g}let n=r.shouldExecuteOnCPU(e);if(o==="string"&&(n=!0),n){let h=e.map(v=>{let T=[-1,b.sizeFromShape(v.shape.slice(t))];return A({inputs:{x:v},backend:r,attrs:{shape:T}})}),m=h.map(v=>({vals:r.readSync(v.dataId),shape:v.shape})),y=S.computeOutShape(h.map(v=>v.shape),1),x=h[0].shape[0]===1,g=e0(m,y,o,x),w=S.computeOutShape(e.map(v=>v.shape),t),C=r.makeTensorInfo(w,o,g);return h.forEach(v=>r.disposeIntermediateTensorInfo(v)),C}let s=e.filter(h=>b.sizeFromShape(h.shape)>0),i=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let h=i?new Et(e[0].shape,We):new qt(e[0].shape,We);return r.runWebGLProgram(h,e,o)}let a=I().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let h=[];for(let y=0;y<s.length;y+=a){let x=s.slice(y,y+a);h.push(nn(x,t,r))}let m=nn(h,t,r);for(let y of h)r.disposeIntermediateTensorInfo(y);return m}if(i){let h=new Na(s.map(m=>m.shape),t);return r.runWebGLProgram(h,s,o)}let{tensors2D:l,outShape:u}=iA(s,t,r),c=new ka(l.map(h=>h.shape)),p=r.runWebGLProgram(c,l,o);l.forEach(h=>r.disposeIntermediateTensorInfo(h));let f=A({inputs:{x:p},attrs:{shape:u},backend:r});return r.disposeIntermediateTensorInfo(p),f}function iA(e,t,r){let o=S.computeOutShape(e.map(s=>s.shape),t);return{tensors2D:e.map(s=>A({inputs:{x:s},attrs:{shape:[-1,b.sizeFromShape(s.shape.slice(t))]},backend:r})),outShape:o}}function xp(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o,s=b.parseAxisParam(n,t[0].shape)[0],i=t.map(u=>u.shape);S.assertParamsConsistent(i,s);let a=S.computeOutShape(t.map(u=>u.shape),s);if(b.sizeFromShape(a)===0)return r.makeTensorInfo(a,t[0].dtype,[]);let l=t.filter(u=>b.sizeFromShape(u.shape)>0);return l.length===1?ut({inputs:{x:l[0]},backend:r}):nn(l,s,r)}var Zy={kernelName:Yf,backendName:"webgl",kernelFunc:xp};var sn=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;let i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,u=t.strideWidth,c=t.dilationHeight,p=t.dilationWidth,f=t.filterHeight,h=t.filterWidth,m=Math.floor(t.inChannels/4)*4,y=t.inChannels%4,x=t.dataFormat==="channelsLast",g=x?1:2,w=x?2:3,C=x?3:1,v="",$="";o&&(n?v=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?v=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:v=`
          float activation(float x) {
            ${o}
          }
        `,$="result = activation(result);");let T=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${v}

      const ivec2 strides = ivec2(${l}, ${u});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${C}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${w}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${f}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${h}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${m}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${x}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${y===1}) {

              if (${x}) {
                dotProd +=
                    getX(batch, xR, xC, ${m}) *
                    getW(wR, wC, ${m}, d2);
              } else {
                dotProd +=
                    getX(batch, ${m}, xR, xC) *
                    getW(wR, wC, ${m}, d2);
              }

            } else if (${y===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${m}, d2),
                getW(wR, wC, ${m} + 1, d2)
              );

              if (${x}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${m}),
                  getX(batch, xR, xC, ${m} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${m}, xR, xC),
                  getX(batch, ${m} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${y===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${m}, d2),
                getW(wR, wC, ${m} + 1, d2),
                getW(wR, wC, ${m} + 2, d2)
              );

              if (${x}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${m}),
                  getX(batch, xR, xC, ${m} + 1),
                  getX(batch, xR, xC, ${m} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${m}, xR, xC),
                  getX(batch, ${m} + 1, xR, xC),
                  getX(batch, ${m} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${T}
        ${$}
        setOutput(result);
      }
    `}},Fa=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let r=t.padInfo.front,o=t.padInfo.top,n=t.padInfo.left,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,p=t.filterDepth,f=t.filterHeight,h=t.filterWidth,m=Math.floor(t.inChannels/4)*4,y=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${r}, ${o}, ${n});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${m}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${y===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${m}) *
                  getW(wF, wR, wC, ${m}, d2);
              } else if (${y===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${m}),
                  getX(batch, xF, xR, xC, ${m} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${m}, d2),
                  getW(wF, wR, wC, ${m} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${y===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${m}),
                  getX(batch, xF, xR, xC, ${m} + 1),
                  getX(batch, xF, xR, xC, ${m} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${m}, d2),
                  getW(wF, wR, wC, ${m} + 1, d2),
                  getW(wF, wR, wC, ${m} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var an=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Y(this.outputShape.length);let i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,u=t.filterHeight,c=t.filterWidth,p=c,f=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<c;x++)f+=`
           vec4 xTexelC${x*2};
           int xTexelC${x*2}Ready;
           vec4 xTexelC${x*2+1};
           int xTexelC${x*2+1}Ready;
           vec4 xC${x};`;f+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let x=0;x<c;x++)f+=`
           xTexelC${x*2} = vec4(0.0);
           xTexelC${x*2}Ready = 0;
           xTexelC${x*2+1} = vec4(0.0);
           xTexelC${x*2+1}Ready = 0;
           xC${x} = vec4(0.0);`;f+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let x=0;x<(p+1)/2;x++){let g=x*2;if(f+=`
           xC = xCCorner + ${g*l};
           `,a===1){if(g<c&&(i%2===1?(f+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g}Ready == 0) {
                   xTexelC${g} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${g}.zw = vec2(0.0);
                   }
                   xTexelC${g}Ready = 1;
                 }
               `,l===1&&g>0?f+=`
                 xC${g} = vec4(xTexelC${g-2}.zw, xTexelC${g}.xy);
                 `:f+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${g} = vec4(previous.zw, xTexelC${g}.xy);
                   } else {
                     xC${g} = vec4(0.0, 0.0, xTexelC${g}.xy);
                   }
                   `):f+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${g}Ready == 0) {
                   xTexelC${g} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${g}.zw = vec2(0.0);
                   }
                   xTexelC${g}Ready = 1;
                 }

                 xC${g} = xTexelC${g};
                 `,g+1<c)){let w=i%2===0?b.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
                   xCOffset = xC + imod(pads[1], 2) + ${w};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                     xTexelC${g+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${g+1}.zw = vec2(0.0);
                     }
                     xTexelC${g+1}Ready = 1;
                   }
                   `,l>1?f+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${g+1} = vec4(previous.zw, xTexelC${g+1}.xy);
                     } else {
                      xC${g+1} = vec4(0.0, 0.0, xTexelC${g+1}.xy);
                     }
                     `:f+=`
                     xC${g+1} = vec4(xTexelC${g}.zw, xTexelC${g+1}.xy);
                     `):w===1?f+=`
                     xC${g+1} = xTexelC${g};
                     `:f+=`
                     xCOffset = xC + ${w};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                       xTexelC${g+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${g+1}.zw = vec2(0.0);
                       }
                       xTexelC${g+1}Ready = 1;
                     }

                     xC${g+1} = xTexelC${g+1};
                     `}}else g<c&&(i%2===1?(f+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g}Ready == 0) {
                   xTexelC${g} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${g}.zw = vec2(0.0);
                   }
                   xTexelC${g}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${g+1}Ready == 0) {
                   xTexelC${g+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${g+1}.zw = vec2(0.0);
                   }
                   xTexelC${g+1}Ready = 1;
                 }

                 xC${g} = vec4(xTexelC${g}.zw, xTexelC${g+1}.zw);
               `,g+1<c&&(f+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${g+1} = vec4(xTexelC${g+1}.xy, final.xy);
                 `)):(f+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${g}Ready == 0) {
                   xTexelC${g} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${g}.zw = vec2(0.0);
                   }
                   xTexelC${g}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${g+1}Ready == 0) {
                   xTexelC${g+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${g+1}.zw = vec2(0.);
                   }
                   xTexelC${g+1}Ready = 1;
                 }

                 xC${g} = vec4(
                   xTexelC${g}.xy, xTexelC${g+1}.xy);
               `,g+1<c&&(f+=`
                   xC${g+1} = vec4(xTexelC${g}.zw, xTexelC${g+1}.zw);
                 `)));g<c&&(f+=`
             wTexel = getW(r, ${g}, d1, d2);
             dotProd += xC${g}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${g}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,g+1<c&&(f+=`
               wTexel = getW(r, ${g+1}, d1, d2);
               dotProd += xC${g+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${g+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}f+=`
     }
   `,f+=`
     }
   `,f+=`
     }
   `;let h="",m="";o&&(n?h=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?h=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:h=`vec4 activation(vec4 x) {
           ${o}
         }`,m="result = activation(result);");let y=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${h}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${f}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${y}
         ${m}
         setOutput(result);
       }
     `}};var Da=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Y(this.outputShape.length);let{dataFormat:o}=r,n=ot(),s=o==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`,u="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)u+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${c};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${n.output} = result;
      }
    `}};function Oa(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&r===1&&e[0]>1?[e[0],1]:null}function Pa({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let l=e.shape,u=o.texData.get(e.dataId),c=r.inChannels,p=l[0]*l[1]*l[2],f=r.outChannels,h=r.dataFormat==="channelsLast",m=!1,y=!1,x,g=[];if(s!=null){let v=Oa(s.shape,h);v!=null&&(s=A({inputs:{x:s},backend:o,attrs:{shape:v}}),g.push(s))}if(n!=null){let v=Oa(n.shape,h);v!=null&&(n=A({inputs:{x:n},backend:o,attrs:{shape:v}}),g.push(n))}if(!((p===1||f===1)&&c>dp)&&u.isPacked&&h&&u.texture!=null&&l[2]%2!==0&&b.arraysEqual(u.shape.slice(-3),l.slice(-3))){let v=l[0]*l[1]*(l[2]+1),$={dataId:e.dataId,shape:[1,v,r.inChannels],dtype:e.dtype},T=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,b.assert(Xr(u.shape,$.shape),()=>`packed reshape ${u.shape} to ${$.shape} isn't free`);let E=A({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}});g.push(E);let _=to({a:$,b:E,backend:o,transposeA:m,transposeB:y,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),N=o.texData.get(_.dataId);b.assert(N.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=T,N.shape=r.outShape,x=ut({inputs:{x:_},backend:o}),x.shape=r.outShape,g.push(_)}else{let v=r.outHeight*r.outWidth,$=A({inputs:{x:e},backend:o,attrs:{shape:h?[r.batchSize,v,r.inChannels]:[r.batchSize,r.inChannels,v]}}),T=A({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}}),E=to({a:h?$:T,b:h?T:$,transposeA:!h,transposeB:y,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});x=A({inputs:{x:E},backend:o,attrs:{shape:r.outShape}}),g.push($),g.push(T),g.push(E)}for(let v of g)o.disposeIntermediateTensorInfo(v);return x}function Ma({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:l,filterHeight:u,inChannels:c,outWidth:p,outHeight:f,dataFormat:h}=r,m=h==="channelsLast",y=l*u*c,x=f*p,g=[r.batchSize,y,x],w=!0,C=!1,v=[];if(s!=null){let R=Oa(s.shape,m);R!=null&&(s=A({inputs:{x:s},backend:o,attrs:{shape:R}}),v.push(s))}if(n!=null){let R=Oa(n.shape,m);R!=null&&(n=A({inputs:{x:n},backend:o,attrs:{shape:R}}),v.push(n))}let $=A({inputs:{x:t},backend:o,attrs:{shape:[1,y,b.sizeFromShape(t.shape)/y]}});v.push($);let T=new Da(g,r),E=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],_=o.runWebGLProgram(T,[e],"float32",E),N=A({inputs:{x:_},backend:o,attrs:{shape:g}});v.push(_),v.push(N);let O=n!=null,V=s!=null,z=a==="leakyrelu",ct=a?er(a,!0):null,pt=new on(m?N.shape:$.shape,m?$.shape:N.shape,m?[r.batchSize,x,r.outChannels]:[r.batchSize,r.outChannels,x],w,C,O,ct,V,z),ht=m?[N,$]:[$,N];if(n&&ht.push(n),V&&ht.push(s),z){let R=o.makeTensorInfo([],"float32",b.createScalarValue(i,"float32"));ht.push(R),v.push(R)}let gt=o.runWebGLProgram(pt,ht,"float32"),Ot=A({inputs:{x:gt},backend:o,attrs:{shape:r.outShape}});v.push(gt);for(let R of v)o.disposeIntermediateTensorInfo(R);return Ot}function aA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=o,p=S.convertConv2DDataFormat(l),f=S.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!1,p),h;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type==="SAME"||f.padInfo.type==="VALID"))h=Pa({x:n,filter:s,convInfo:f,backend:r});else if(f.strideWidth<=2&&p==="channelsLast"&&I().getBool("WEBGL_EXP_CONV")){let y=new an(f),x=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];h=r.runWebGLProgram(y,[n,s],"float32",x)}else if(I().getBool("WEBGL_CONV_IM2COL"))h=Ma({x:n,filter:s,convInfo:f,backend:r});else{let y=new sn(f);h=r.runWebGLProgram(y,[n,s],"float32")}let m=A({inputs:{x:h},backend:r,attrs:{shape:f.outShape}});return r.disposeIntermediateTensorInfo(h),m}var Jy={kernelName:Qf,backendName:"webgl",kernelFunc:aA};var La=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${r} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Ba=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dataFormat==="channelsLast",a=r-1-t.padInfo.top,l=o-1-t.padInfo.left,u=i?1:2,c=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${u}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${r} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},Ua=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${r} - ${s};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${o} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${n} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Va=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=r-1-t.padInfo.front,u=o-1-t.padInfo.top,c=n-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${u}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${r}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${r} - 1 - wF;

          for (int wR = 0; wR < ${o}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${o} - 1 - wR;

            for (int wC = 0; wC < ${n}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${n} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function lA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=o,p=S.convertConv2DDataFormat(l),f=S.computeConv2DInfo(n.shape,c,i,1,a,u,!1,p),h=new La(f);return r.runWebGLProgram(h,[n,s],"float32")}var tw={kernelName:Zf,backendName:"webgl",kernelFunc:lA};var Wa=class{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Y(this.outputShape.length);let r=t.filterHeight,o=t.filterWidth,n=r-1-t.padInfo.top,s=o-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${n}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${r}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${r} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            int wCPerm = ${o} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function uA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=o,p=S.convertConv2DDataFormat(u),f=S.computeConv2DInfo(i,s.shape,a,1,l,c,!1,p);if(I().getBool("WEBGL_PACK")&&p==="channelsLast"){let h=[[f.strideHeight,f.strideWidth]],m=new Wa(f);return r.runWebGLProgram(m,[n,s],"float32",h)}else{let h=new Ba(f);return r.runWebGLProgram(h,[n,s],"float32")}}var ew={kernelName:Jf,backendName:"webgl",kernelFunc:uA};function cA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,u=S.computeConv3DInfo(n.shape,s.shape,i,l,a),c=new Fa(u);return r.runWebGLProgram(c,[n,s],"float32")}var rw={kernelName:td,backendName:"webgl",kernelFunc:cA};function pA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,filterShape:l}=o,u=S.computeConv3DInfo(n.shape,l,i,1,a),c=new Ua(u);return r.runWebGLProgram(c,[n,s],"float32")}var ow={kernelName:ed,backendName:"webgl",kernelFunc:pA};function fA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{pad:i,strides:a,inputShape:l}=o,u=S.computeConv3DInfo(l,s.shape,a,1,i),c=new Va(u);return r.runWebGLProgram(c,[n,s],"float32")}var nw={kernelName:rd,backendName:"webgl",kernelFunc:fA};var dA=be+`
  return cos(x);
`,hA=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${ee}
  return result;
`,mA=B({opSnippet:dA,packedOpSnippet:hA}),sw={kernelName:od,backendName:"webgl",kernelFunc:mA};var gA=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,xA=B({opSnippet:gA}),iw={kernelName:nd,backendName:"webgl",kernelFunc:xA};var za=class{constructor(t,r,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,l,u]=t,[c]=r,[p,f]=o;this.outputShape=[c,p,f,u];let h=n==="bilinear"?1:0,[m,y]=[`${a-1}.0`,`${l-1}.0`],[x,g,w]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${m} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${m}`],[C,v,$]=f>1?[`${(l-1)/(f-1)}`,"(x2-x1) * width_ratio",`x1*${y} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${y}`];this.userCode=`
      const float height_ratio = float(${x});
      const float width_ratio = float(${C});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${v};

        float in_y = ${w};
        if( in_y < 0.0 || in_y > ${m} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${$};
        if( in_x < 0.0 || in_x > ${y} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${h} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var yA=e=>{let{inputs:t,backend:r,attrs:o}=e,{image:n,boxes:s,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:u}=o,c=new za(n.shape,s.shape,a,l,u);return r.runWebGLProgram(c,[n,s,i],"float32")},aw={kernelName:ad,backendName:"webgl",kernelFunc:yA};var ro;(function(e){e.Prod="*",e.Sum="+"})(ro||(ro={}));var rs=class{constructor(t,r,o,n){this.op=t,this.outputShape=r,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===ro.Prod?"1.0":"0.0",a=o?i:`getX(${lw(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";o?(u=n?`end != ${l-1}`:"end != 0",c=n?"end + 1":"end - 1"):(u=n?`end + pow2 < ${l}`:"end >= pow2",c=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${H(s)} coords = getOutputCoords();
        int end = ${uw(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${uw(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${lw(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function lw(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function uw(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function Ga(e,t,r,o,n,s){let i=t.shape.length,a=S.getAxesPermutation([o],i),l=t;a!=null&&(l=et({inputs:{x:t},backend:r,attrs:{perm:a}}));let u=S.getInnerMostAxes(1,i)[0];if(u!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${o}`);let c=l.shape[u],p=ut({inputs:{x:l},backend:r});for(let f=0;f<=Math.ceil(Math.log2(c))-1;f++){let h=new rs(e,l.shape,!1,s),m=[[f]],y=p;p=r.runWebGLProgram(h,[p],p.dtype,m),r.disposeIntermediateTensorInfo(y)}if(n){let f=new rs(e,l.shape,n,s),h=p;p=r.runWebGLProgram(f,[p],p.dtype),r.disposeIntermediateTensorInfo(h)}if(a!=null){let f=S.getUndoAxesPermutation(a),h=et({inputs:{x:p},backend:r,attrs:{perm:f}});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(l),h}return p}function wA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return Ga(ro.Prod,n,r,s,i,a)}var cw={kernelName:sd,backendName:"webgl",kernelFunc:wA};function bA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return Ga(ro.Sum,n,r,s,i,a)}var pw={kernelName:id,backendName:"webgl",kernelFunc:bA};function vA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=r.readSync(n.dataId),u=r.readSync(s.dataId),c=sa(l,u,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,c)}else if(n.shape.length===2){let l=r.bufferSync(n),u=r.bufferSync(s),c=Zx(l,u,i,a);return r.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var fw={kernelName:ld,backendName:"webgl",kernelFunc:vA};var Ha=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=r,this.dataFormat=o,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${r};
      int offset_h = imod(h, ${r});
      int in_w = w / ${r};
      int offset_w = imod(w, ${r});
      int offset_d = (offset_h * ${r} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function CA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockSize:s,dataFormat:i}=o,a=n.shape[0],l=i==="NHWC"?n.shape[1]:n.shape[2],u=i==="NHWC"?n.shape[2]:n.shape[3],c=i==="NHWC"?n.shape[3]:n.shape[1],p=l*s,f=u*s,h=c/(s*s),m=i==="NHWC"?[a,p,f,h]:[a,h,p,f],y=new Ha(m,s,i);return r.runWebGLProgram(y,[n],n.dtype)}var dw={kernelName:ud,backendName:"webgl",kernelFunc:CA};var ln=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Y(this.outputShape.length);let i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels,u="",c="";o&&(n?u=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?u=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:u=`
          float activation(float x) {
            ${o}
          }
        `,c="result = activation(result);");let p=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${c}
        setOutput(result);
      }
    `}};var un=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Y(this.outputShape.length);let i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,u=t.dilationWidth,c=t.filterHeight,p=t.filterWidth,f=p,h=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<p;g++)h+=`
          vec4 xTexelC${g*2};
          int xTexelC${g*2}Ready;
          vec4 xTexelC${g*2+1};
          int xTexelC${g*2+1}Ready;
          vec4 xC${g};`;h+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let g=0;g<p;g++)h+=`
          xTexelC${g*2} = vec4(0.0);
          xTexelC${g*2}Ready = 0;
          xTexelC${g*2+1} = vec4(0.0);
          xTexelC${g*2+1}Ready = 0;
          xC${g} = vec4(0.0);`;h+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let g=0;g<(f+1)/2;g++){let w=g*2;if(h+=`
          xC = xCCorner + ${w*u};
          `,l===1){if(w<p&&(a%2===1?(h+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }
              `,u===1&&w>0?h+=`
                xC${w} = vec4(xTexelC${w-2}.zw, xTexelC${w}.xy);
                `:h+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${w} = vec4(previous.zw, xTexelC${w}.xy);
                  } else {
                    xC${w} = vec4(0.0, 0.0, xTexelC${w}.xy);
                  }
                  `):h+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                xC${w} = xTexelC${w};
                `,w+1<p)){let C=a%2===0?b.nearestLargerEven(u):u;u%2===0&&a%2===1||u%2!==0&&a%2!==1?(h+=`
                  xCOffset = xC + imod(pads[1], 2) + ${C};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                    xTexelC${w+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${w+1}.zw = vec2(0.0);
                    }
                    xTexelC${w+1}Ready = 1;
                  }
                  `,u>1?h+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${w+1} = vec4(previous.zw, xTexelC${w+1}.xy);
                    } else {
                     xC${w+1} = vec4(0.0, 0.0, xTexelC${w+1}.xy);
                    }
                    `:h+=`
                    xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.xy);
                    `):C===1?h+=`
                    xC${w+1} = xTexelC${w};
                    `:h+=`
                    xCOffset = xC + ${C};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                      xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${w+1}.zw = vec2(0.0);
                      }
                      xTexelC${w+1}Ready = 1;
                    }

                    xC${w+1} = xTexelC${w+1};
                    `}}else w<p&&(a%2===1?(h+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${w+1}Ready == 0) {
                  xTexelC${w+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${w+1}.zw = vec2(0.0);
                  }
                  xTexelC${w+1}Ready = 1;
                }

                xC${w} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
              `,w+1<p&&(h+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${w+1} = vec4(xTexelC${w+1}.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                  xTexelC${w} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${w}.zw = vec2(0.0);
                  }
                  xTexelC${w}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                  xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${w+1}.zw = vec2(0.);
                  }
                  xTexelC${w+1}Ready = 1;
                }

                xC${w} = vec4(
                  xTexelC${w}.xy, xTexelC${w+1}.xy);
              `,w+1<p&&(h+=`
                  xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
                `)));w<p&&(h+=`
            wTexel = getW(r, ${w}, d1, q);
            dotProd += xC${w} * vec4(wTexel.xz, wTexel.xz);
          `,w+1<p&&(h+=`
              wTexel = getW(r, ${w+1}, d1, q);
              dotProd += xC${w+1} * vec4(wTexel.xz, wTexel.xz);
            `))}h+=`
    }
  `,h+=`
      }
    `;let m="",y="";o&&(n?m=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?m=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:m=`vec4 activation(vec4 x) {
          ${o}
        }`,y="result = activation(result);");let x=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${m}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${h}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${x}
        ${y}
        setOutput(result);
      }
    `}};function SA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=o,c=l;c==null&&(c=[1,1]),b.assert(S.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let p=S.computeConv2DInfo(n.shape,s.shape,i,c,a,u,!0),f;I().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?f=new un(p):f=new ln(p);let h=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return r.runWebGLProgram(f,[n,s],"float32",h)}var hw={kernelName:cd,backendName:"webgl",kernelFunc:SA};var qa=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${r} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Ka=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=r-1-t.padInfo.top,a=o-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${r}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${r} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function $A(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=o,p=S.computeConv2DInfo(n.shape,c,i,a,l,u,!0),f=new qa(p);return r.runWebGLProgram(f,[n,s],"float32")}var mw={kernelName:pd,backendName:"webgl",kernelFunc:$A};function IA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=o,p=S.computeConv2DInfo(c,s.shape,i,a,l,u,!0),f=new Ka(p);return r.runWebGLProgram(f,[n,s],"float32")}var gw={kernelName:fd,backendName:"webgl",kernelFunc:IA};var Xa=class{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function TA(e){let{inputs:t,backend:r}=e,{x:o}=t,n=[...o.shape,...o.shape],s=b.sizeFromShape(o.shape),i=A({inputs:{x:o},backend:r,attrs:{shape:[s]}}),a=new Xa(s),l=r.runWebGLProgram(a,[i],i.dtype),u=A({inputs:{x:l},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(l),u}var xw={kernelName:dd,backendName:"webgl",kernelFunc:TA};var ja=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let{inHeight:r,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:u,dilationWidth:c}=t,{top:p,left:f}=n;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${p}, ${f});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${r}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${o}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function EA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,u=S.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",l),c,p=new ja(u);c=r.runWebGLProgram(p,[n,s],"float32");let f=A({inputs:{x:c},backend:r,attrs:{shape:u.outShape}});return r.disposeIntermediateTensorInfo(c),f}var yw={kernelName:hd,backendName:"webgl",kernelFunc:EA};function _A(e){let{inputs:t,backend:r,attrs:o}=e,{equation:n}=o,s=t,{allDims:i,summedDims:a,idDims:l}=S.decodeEinsumEquation(n,s.length);S.checkEinsumDimSizes(i.length,l,s);let{path:u,steps:c}=S.getEinsumComputePath(a,l),p=c.length,f=null,h=i.length,m=[];for(let y=0;y<p;++y){for(let x of c[y]){let{permutationIndices:g,expandDims:w}=S.getEinsumPermutation(h,l[x]),C;S.isIdentityPermutation(g)?C=s[x]:(C=et({inputs:{x:s[x]},backend:r,attrs:{perm:g}}),m.push(C));let v=C.shape.slice();for(let $=0;$<w.length;++$)v.splice(w[$],0,1);b.arraysEqual(C.shape,v)||(C=A({inputs:{x:C},backend:r,attrs:{shape:v}}),m.push(C)),f===null?f=C:(f=ts({inputs:{a:C,b:f},backend:r}),m.push(f))}y<p-1&&(u[y]>=0&&(f=Jr({inputs:{x:f},backend:r,attrs:{axis:u[y]-(i.length-h),keepDims:!1}}),m.push(f)),h--)}for(let y of m)y!==f&&r.disposeIntermediateTensorInfo(y);return f}var ww={kernelName:md,backendName:"webgl",kernelFunc:_A};var AA="return (x >= 0.0) ? x : (exp(x) - 1.0);",kA=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,RA=B({opSnippet:AA,packedOpSnippet:kA}),bw={kernelName:Vs,backendName:"webgl",kernelFunc:RA};var NA="return (b >= 0.0) ? a : a * (b + 1.0);",FA=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,DA=e=>{let{inputs:t,backend:r}=e,{dy:o,y:n}=t,s=I().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new we(FA,o.shape,n.shape):new ce(NA,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],o.dtype)},vw={kernelName:gd,backendName:"webgl",kernelFunc:DA};var OA=`
  return vec4(equal(a, b));
`,PA="return float(a == b);",MA=j({opSnippet:PA,packedOpSnippet:OA,dtype:"bool",cpuKernelImpl:r0}),Cw={kernelName:Ws,backendName:"webgl",kernelFunc:MA};var LA=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${S.ERF_P};
  float a1 = ${S.ERF_A1};
  float a2 = ${S.ERF_A2};
  float a3 = ${S.ERF_A3};
  float a4 = ${S.ERF_A4};
  float a5 = ${S.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,BA=B({opSnippet:LA}),Sw={kernelName:xd,backendName:"webgl",kernelFunc:BA};var UA=be+`
  return exp(x);
`,VA=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,yp=B({opSnippet:UA,packedOpSnippet:VA,cpuKernelImpl:o0,dtype:"float32"}),$w={kernelName:zs,backendName:"webgl",kernelFunc:yp};function Ya(e){let{inputs:t,attrs:r,backend:o}=e,{dim:n}=r,{input:s}=t,i=s.shape.length,a=s.shape.slice(),l=n;return n<0&&(b.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+n+1),a.splice(l,0,1),A({inputs:{x:s},backend:o,attrs:{shape:a}})}var Iw={kernelName:yd,backendName:"webgl",kernelFunc:Ya};var Tw="return exp(x) - 1.0;",WA=B({opSnippet:Tw,packedOpSnippet:Tw,cpuKernelImpl:n0}),Ew={kernelName:Gs,backendName:"webgl",kernelFunc:WA};var os=class{constructor(t,r,o){this.variableNames=["real","imag"];let n=r[1];this.outputShape=r;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function Qa(e,t,r){let o=r.texData.get(e.dataId),n=b.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],i=n/s,a=A({inputs:{x:e},backend:r,attrs:{shape:[i,s]}}),l=a.shape,u=new os("real",l,t),c=new os("imag",l,t),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:l},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:l}],f=r.runWebGLProgram(u,p,"float32"),h=r.runWebGLProgram(c,p,"float32"),m=Kt({inputs:{real:f,imag:h},backend:r});r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(h);let y=A({inputs:{x:m},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(m),y}function zA(e){let{inputs:t,backend:r}=e,{input:o}=t;return Qa(o,!1,r)}var _w={kernelName:wd,backendName:"webgl",kernelFunc:zA};var Za=class{constructor(t,r){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function or(e){let{backend:t,attrs:r}=e,{shape:o,value:n}=r,{dtype:s}=r;if(s=s||b.inferDtype(n),s==="string"){let i=b.getArrayFromDType(s,b.sizeFromShape(o));return i.fill(n),t.makeTensorInfo(o,s,i)}else{let i=new Za(o,n),a=[[n]];return t.runWebGLProgram(i,[],s,a)}}var Aw={kernelName:Hs,backendName:"webgl",kernelFunc:or};var Ja=class{constructor(t){this.variableNames=["Image"],this.outputShape=[];let r=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${r} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${r}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var kw={kernelName:bd,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,o=t,n=new Ja(r.shape);return o.runWebGLProgram(n,[r],r.dtype)}};var Rw="return floor(x);",GA=B({opSnippet:Rw,packedOpSnippet:Rw,cpuKernelImpl:s0}),Nw={kernelName:qs,backendName:"webgl",kernelFunc:GA};var HA=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,qA=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,KA=j({opSnippet:HA,packedOpSnippet:qA,dtype:"int32"}),Fw={kernelName:_o,backendName:"webgl",kernelFunc:KA};var tl=class{constructor(t){this.variableNames=["A"];let r=ot(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}.0, ${o}.0);

        vec4 values = ${r.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var el=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let r=ot(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${n}.0, ${o}.0);
            vec4 values = ${r.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${r.output} = result;
      }
    `}};var Dw={kernelName:Mh,backendName:"webgl",kernelFunc:XA},cn,wp=I().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function XA(e){let{inputs:t,backend:r,attrs:o}=e,{pixels:n}=t,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[l,u]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],c=[u,l],p=[u,l,s];if(a||i){let y=I().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(cn==null||y!==wp)&&(wp=y,cn=document.createElement("canvas").getContext("2d",{willReadFrequently:wp})),cn.canvas.width=l,cn.canvas.height=u,cn.drawImage(n,0,0,l,u),n=cn.canvas}let f=r.makeTensorInfo(c,"int32");r.texData.get(f.dataId).usage=kt.PIXELS,r.gpgpu.uploadPixelDataToTexture(r.getTexture(f.dataId),n);let h=I().getBool("WEBGL_PACK")?new el(p):new tl(p),m=r.runWebGLProgram(h,[f],"int32");return r.disposeData(f.dataId),m}function jA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:f,activation:h,leakyreluAlpha:m}=o,y=S.convertConv2DDataFormat(c),x=S.computeConv2DInfo(n.shape,s.shape,l,p,u,f,!1,y),g,w=[],C=i!=null,v=a!=null,$=h==="leakyrelu",T=()=>{let _=[n,s],N=(O,V)=>{if(V==="NCHW"&&O.shape.length===1&&O.shape[0]!==1){let z=A({inputs:{x:O},backend:r,attrs:{shape:[O.shape[0],1,1]}});return w.push(z),z}return O};if(C&&_.push(N(i,c)),v&&_.push(N(a,c)),$){let O=r.makeTensorInfo([],"float32",b.createScalarValue(m,"float32"));_.push(O),w.push(O)}return _};if(x.filterHeight===1&&x.filterWidth===1&&x.dilationHeight===1&&x.dilationWidth===1&&x.strideHeight===1&&x.strideWidth===1&&(x.padInfo.type==="SAME"||x.padInfo.type==="VALID"))g=Pa({x:n,filter:s,convInfo:x,backend:r,bias:i,activation:h,preluActivationWeights:a,leakyreluAlpha:m});else if(x.strideWidth<=2&&y==="channelsLast"&&I().getBool("WEBGL_EXP_CONV")){let _=h?er(h,!0):null,N=new an(x,C,_,v,$),O=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],V=T();g=r.runWebGLProgram(N,V,"float32",O)}else if(I().getBool("WEBGL_CONV_IM2COL"))g=Ma({x:n,filter:s,convInfo:x,backend:r,bias:i,activation:h,preluActivationWeights:a,leakyreluAlpha:m});else{let _=h?er(h,!1):null,N=new sn(x,C,_,v,$),O=T();g=r.runWebGLProgram(N,O,"float32")}let E=A({inputs:{x:g},backend:r,attrs:{shape:x.outShape}});return w.push(g),w.forEach(_=>r.disposeIntermediateTensorInfo(_)),E}var Ow={kernelName:Uh,backendName:"webgl",kernelFunc:jA};function YA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dilations:c,dimRoundingMode:p,activation:f,leakyreluAlpha:h}=o,m=[],y=c;y==null&&(y=[1,1]),b.assert(S.eitherStridesOrDilationsAreOne(l,y),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${y}'`);let x=S.computeConv2DInfo(n.shape,s.shape,l,y,u,p,!0),g=I().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels===1,w=f?er(f,g):null,C=[n,s],v=i!=null,$=a!=null,T=f==="leakyrelu";if(v&&C.push(i),$&&C.push(a),T){let O=r.makeTensorInfo([],"float32",b.createScalarValue(h,"float32"));C.push(O),m.push(O)}let E;g?E=new un(x,v,w,$,T):E=new ln(x,v,w,$,T);let _=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],N=r.runWebGLProgram(E,C,"float32",_);return m.forEach(O=>r.disposeIntermediateTensorInfo(O)),N}var Pw={kernelName:Vh,backendName:"webgl",kernelFunc:YA};var rl=class{constructor(t,r,o,n){this.sliceDim=t,this.strides=r,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=H(o.length),i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function QA(e){let{inputs:t,backend:r}=e,{params:o,indices:n}=t,s=n.shape,i=s[s.length-1],a=b.sizeFromShape(o.shape),[l,u,c,p]=S.prepareAndValidate(o,n),f=A({inputs:{x:n},backend:r,attrs:{shape:[u,i]}}),h=A({inputs:{x:o},backend:r,attrs:{shape:[b.sizeFromShape(o.shape)/c,c]}});if(r.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let g=r.readSync(n.dataId),w=r.bufferSync(o),C=i0(g,w,o.dtype,u,i,c,p,o.shape,a);return r.makeTensorInfo(l,o.dtype,C.values)}let m=new rl(i,p,[u,c],o.shape),y=r.runWebGLProgram(m,[h,f],h.dtype),x=A({inputs:{x:y},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(y),x}var Mw={kernelName:Sd,backendName:"webgl",kernelFunc:QA};var ol=class{constructor(t,r){this.variableNames=["A","indices"],this.outputShape=r,this.rank=r.length;let o=H(this.rank),n=ZA(t,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function ZA(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<e.length;n++)n===2?o.push("index"):o.push(`${r[n]}`);return o.join()}function bp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,indices:s}=t,{axis:i,batchDims:a}=o,l=b.parseAxisParam(i,n.shape)[0];if(I().get("DEBUG")){let w=r.readSync(s.dataId),C=n.shape[l];for(let v=0;v<w.length;++v){let $=w[v];b.assert($<=C-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${C-1}]`)}}let u=S.segment_util.collectGatherOpShapeInfo(n,s,l,a),c=b.sizeFromShape(s.shape),p=[],f=A({inputs:{x:n},backend:r,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),h=A({inputs:{x:s},backend:r,attrs:{shape:[u.batchSize,c/u.batchSize]}});p.push(f),p.push(h);let m=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(r.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let w=r.bufferSync(h),C=r.bufferSync(f),v=a0(C,w,m);return p.forEach($=>r.disposeIntermediateTensorInfo($)),r.makeTensorInfo(u.outputShape,v.dtype,v.values)}let y=new ol(f.shape,m),x=r.runWebGLProgram(y,[f,h],f.dtype);p.push(x);let g=A({inputs:{x},backend:r,attrs:{shape:u.outputShape}});return p.forEach(w=>r.disposeIntermediateTensorInfo(w)),g}var Lw={kernelName:Cd,backendName:"webgl",kernelFunc:bp};var JA="return float(a > b);",tk=`
  return vec4(greaterThan(a, b));
`,ek=j({opSnippet:JA,packedOpSnippet:tk,cpuKernelImpl:l0,dtype:"bool"}),Bw={kernelName:Ks,backendName:"webgl",kernelFunc:ek};var rk="return float(a >= b);",ok=`
  return vec4(greaterThanEqual(a, b));
`,nk=j({opSnippet:rk,packedOpSnippet:ok,dtype:"bool",cpuKernelImpl:u0}),Uw={kernelName:Xs,backendName:"webgl",kernelFunc:nk};function sk(e){let{inputs:t,backend:r}=e,{input:o}=t;return Qa(o,!0,r)}var Vw={kernelName:$d,backendName:"webgl",kernelFunc:sk};var ik="return float(!isnan(x) && !isinf(x));",ak=B({opSnippet:ik,dtype:"bool"}),Ww={kernelName:Id,backendName:"webgl",kernelFunc:ak};var lk="return float(isinf(x));",uk=B({opSnippet:lk,dtype:"bool"}),zw={kernelName:Td,backendName:"webgl",kernelFunc:uk};var ck="return float(isnan(x));",pk=B({opSnippet:ck,dtype:"bool"}),Gw={kernelName:Ed,backendName:"webgl",kernelFunc:pk};var fk="return float(a < b);",dk=`
  return vec4(lessThan(a, b));
`,hk=j({opSnippet:fk,packedOpSnippet:dk,cpuKernelImpl:c0,dtype:"bool"}),Hw={kernelName:Qs,backendName:"webgl",kernelFunc:hk};var mk="return float(a <= b);",gk=`
  return vec4(lessThanEqual(a, b));
`,xk=j({opSnippet:mk,packedOpSnippet:gk,cpuKernelImpl:p0,dtype:"bool"}),qw={kernelName:Zs,backendName:"webgl",kernelFunc:xk};function yk(e){let{backend:t,attrs:r}=e,{start:o,stop:n,num:s}=r,i=f0(o,n,s);return t.makeTensorInfo([i.length],"float32",i)}var Kw={kernelName:_d,backendName:"webgl",kernelFunc:yk};var wk=be+`
  return x < 0.0 ? 0./0. : log(x);
`,bk=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,vk=B({opSnippet:wk,packedOpSnippet:bk,cpuKernelImpl:d0}),Xw={kernelName:Js,backendName:"webgl",kernelFunc:vk};var Ck=be+`
  return log(1.0 + x);
`,Sk=B({opSnippet:Ck}),jw={kernelName:Ad,backendName:"webgl",kernelFunc:Sk};var $k="return float(a >= 1.0 && b >= 1.0);",Ik=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,Tk=j({opSnippet:$k,packedOpSnippet:Ik,dtype:"bool"}),Yw={kernelName:kd,backendName:"webgl",kernelFunc:Tk};var Ek="return float(!(x >= 1.0));",_k=B({opSnippet:Ek}),Qw={kernelName:Rd,backendName:"webgl",kernelFunc:_k};var Ak="return float(a >= 1.0 || b >= 1.0);",kk=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,Rk=j({opSnippet:Ak,packedOpSnippet:kk,dtype:"bool"}),Zw={kernelName:Nd,backendName:"webgl",kernelFunc:Rk};var nl=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=r,a=t[3]-1;this.outputShape=t;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}};var sl=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=r,a=t[3]-1;this.outputShape=t;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}};var Nk=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{depthRadius:s,bias:i,alpha:a,beta:l}=o,u=I().getBool("WEBGL_PACK_NORMALIZATION")?new sl(n.shape,s,i,a,l):new nl(n.shape,s,i,a,l);return r.runWebGLProgram(u,[n],n.dtype)},Jw={kernelName:Fd,backendName:"webgl",kernelFunc:Nk};var il=class{constructor(t,r,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=r,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${r})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${r} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${n}) * norm + float(${o});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${n})
                * float(${s})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var Fk=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n,y:s,dy:i}=t,{depthRadius:a,bias:l,alpha:u,beta:c}=o,p=new il(n.shape,a,l,u,c);return r.runWebGLProgram(p,[n,s,i],n.dtype)},tb={kernelName:Dd,backendName:"webgl",kernelFunc:Fk};function eb(e,t,r,o){let n=b.sizeFromShape(t),i=b.sizeFromShape(e.shape)/n,a=A({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=re(a,e.dtype,"max",o),u=A({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}function vp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=c!=null,f=r.shouldExecuteOnCPU([n]),h=n;if(p){if(f){let C=r.texData.get(h.dataId).values,v=new Array(a);for(let E=0;E<v.length;E++)v[E]=n.shape[c[E]];let $=Qr(C,n.shape,n.dtype,c,v);h=r.makeTensorInfo(v,n.dtype);let T=r.texData.get(h.dataId);T.values=$}else h=vr(n,c,r);u=S.getInnerMostAxes(u.length,a)}S.assertAxesAreInnerMostDims("max",u,a);let[m,y]=S.computeOutAndReduceShapes(h.shape,u),x=m;i&&(x=S.expandShapeToKeepDim(m,l));let g;if(f){let C=r.texData.get(h.dataId).values,v=h0(C,b.sizeFromShape(y),x,n.dtype);g=r.makeTensorInfo(x,n.dtype);let $=r.texData.get(g.dataId);$.values=v}else g=eb(h,y,x,r);return p&&r.disposeIntermediateTensorInfo(h),g}var rb={kernelName:ti,backendName:"webgl",kernelFunc:vp};var Dk=rn+`
  return max(a, b);
`,Ok=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ee+`
  return result;
`,Pk=j({opSnippet:Dk,packedOpSnippet:Ok,cpuKernelImpl:m0}),ob={kernelName:Ao,backendName:"webgl",kernelFunc:Pk};function Mk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;Ve(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(S.eitherStridesOrDilationsAreOne(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=S.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return ut({inputs:{x:n},backend:r});let p=new Ee(c,"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}var nb={kernelName:Od,backendName:"webgl",kernelFunc:Mk};function Lk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:u}=o,c=[1,1,1],p=S.computePool3DInfo(n.shape,s,i,c,a,u,l),f=new Cr(p,"max",!1);return r.runWebGLProgram(f,[n],n.dtype)}var sb={kernelName:Md,backendName:"webgl",kernelFunc:Lk};var al=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideHeight,o=t.strideWidth,n=t.dilationHeight,s=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=s-1-t.padInfo.top,l=i-1-t.padInfo.left,u=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${n}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},ll=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,p=l-1-t.padInfo.front,f=u-1-t.padInfo.top,h=c-1-t.padInfo.left,m=l*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${f}, ${h});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${m} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Bk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],f=S.computePool3DInfo(i.shape,a,l,p,u,c),h=new Cr(f,"max",!0),m=r.runWebGLProgram(h,[i],i.dtype),y=new ll(f),x=r.runWebGLProgram(y,[n,m],i.dtype);return r.disposeIntermediateTensorInfo(m),x}var ib={kernelName:Ld,backendName:"webgl",kernelFunc:Bk};function Uk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s,output:i}=t,a=s;Ve([s,i],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:p}=o,f=S.computePool2DInfo(a.shape,l,u,1,c,p),h=!0,m=new Ee(f,"max",h),y=r.runWebGLProgram(m,[a],a.dtype),x=new al(f),g=r.runWebGLProgram(x,[n,y],a.dtype);return r.disposeIntermediateTensorInfo(y),g}var ab={kernelName:Pd,backendName:"webgl",kernelFunc:Uk};function lb(e,t,r,o){let n=new Ee(r,"max",!1),s=o.runWebGLProgram(n,[e],"float32");n=new Ee(r,"max",!0,!0,t);let i=o.runWebGLProgram(n,[e],"float32");return[s,i]}var ub={kernelName:Bd,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=t,l=r;b.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let u=[1,1];b.assert(S.eitherStridesOrDilationsAreOne(s,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${u}'`);let c=S.computePool2DInfo(o.shape,n,s,u,i),[p,f]=lb(o,a,c,l);return[p,f]}};function cb(e,t,r,o){let n=b.sizeFromShape(t),i=b.sizeFromShape(e.shape)/n,a=A({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=re(a,"float32","mean",o),u=A({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}var pb={kernelName:Ud,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{keepDims:n,axis:s}=t,i=r,a=o.shape.length,l=b.parseAxisParam(s,o.shape),u=l,c=S.getAxesPermutation(u,a),p=c!=null,f=i.shouldExecuteOnCPU([o]),h=[],m=o;if(p){if(f){let v=i.texData.get(m.dataId).values,$=new Array(a);for(let _=0;_<$.length;_++)$[_]=o.shape[c[_]];let T=Qr(v,o.shape,o.dtype,c,$);m=i.makeTensorInfo($,o.dtype);let E=i.texData.get(m.dataId);E.values=T}else m=vr(o,c,i);h.push(m),u=S.getInnerMostAxes(u.length,a)}S.assertAxesAreInnerMostDims("sum",u,a);let[y,x]=S.computeOutAndReduceShapes(m.shape,u),g=y;n&&(g=S.expandShapeToKeepDim(y,l));let w=cb(m,x,g,i);for(let C of h)i.disposeIntermediateTensorInfo(C);return w}};function Vk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=et({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,n.shape.length)),S.assertAxesAreInnerMostDims("min",u,a);let[f,h]=S.computeOutAndReduceShapes(p.shape,u),m=b.sizeFromShape(h),y=A({inputs:{x:p},backend:r,attrs:{shape:[-1,m]}}),x=re(y,y.dtype,"min",r),g;if(i){let w=S.expandShapeToKeepDim(f,l);g=A({inputs:{x},backend:r,attrs:{shape:w}})}else g=A({inputs:{x},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(x),c!=null&&r.disposeIntermediateTensorInfo(p),g}var fb={kernelName:ei,backendName:"webgl",kernelFunc:Vk};var Wk=rn+`
  return min(a, b);
`,zk=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ee+`
  return result;
`,Gk=j({opSnippet:Wk,packedOpSnippet:zk,cpuKernelImpl:g0}),db={kernelName:ri,backendName:"webgl",kernelFunc:Gk};var ul=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=r.map((c,p)=>c[0]+t[p]+c[1]);let n=t.length,s=H(n),i=r.map(c=>c[0]).join(","),a=r.map((c,p)=>c[0]+t[p]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),u=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${n}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}};var cl=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.map((m,y)=>m[0]+t[y]+m[1]);let n=t.length,s=H(n),i=r.map(m=>m[0]).join(","),a=r.map((m,y)=>m[0]+t[y]).join(","),l=lt("rc",n),u=lt("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,f=o==="reflect"?0:1,h="";if(n===1){let m=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${f};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${f};
        }
        source -= start;
      `;h=`
        ${s} rc = outputLoc;
        ${m}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${m}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
      `}else{let m=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${f}) +
                gte * ((end - 1) * 2 - source + ${f});
        source -= start;
      `;h=`
        ${s} rc = outputLoc;
        ${m}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${m}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
        rc = outputLoc;
        ${l[n-2]} += 1;
        if(${l[n-2]} < ${this.outputShape[n-2]}) {
          ${m}
          result[2] = getChannel(getX(${u.join()}), ${p});
          ${l[n-1]} += 1;
          if(${c}) {
            ${m}
            result[3] = getChannel(getX(${u.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}};var Hk=({inputs:e,backend:t,attrs:r})=>{let{x:o}=e,{paddings:n,mode:s}=r,i=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new cl(o.shape,n,s):new ul(o.shape,n,s);return t.runWebGLProgram(i,[o],o.dtype)},hb={kernelName:Vd,backendName:"webgl",kernelFunc:Hk};var qk=`if (b == 0.0) return NAN;
  return mod(a, b);`,Kk=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+ee+`
  return result;
`,Xk=j({opSnippet:qk,packedOpSnippet:Kk}),mb={kernelName:Wd,backendName:"webgl",kernelFunc:Xk};var pl=class{constructor(t,r,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${r-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${r-1}));
      }
    `}};var jk=`
if (a == b) {
  return 1.0;
};
return a / b;`,Yk=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Cp=j({opSnippet:jk,packedOpSnippet:Yk,checkOutOfBounds:!0}),gb={kernelName:Us,backendName:"webgl",kernelFunc:Cp};var xb="return a - b;",Sp=j({opSnippet:xb,packedOpSnippet:xb,supportsComplex:!0,cpuKernelImpl:M0}),yb={kernelName:Fo,backendName:"webgl",kernelFunc:Sp};function $p(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{dim:s}=o,i=b.parseAxisParam([s],n.shape),a=vp({inputs:{x:n},backend:r,attrs:{reductionIndices:i,keepDims:!1}}),l=S.expandShapeToKeepDim(a.shape,i),u=A({inputs:{x:a},backend:r,attrs:{shape:l}}),c=Sp({inputs:{a:n,b:u},backend:r}),p=yp({inputs:{x:c},backend:r}),f=Jr({inputs:{x:p},backend:r,attrs:{axis:i,keepDims:!1}}),h=A({inputs:{x:f},backend:r,attrs:{shape:l}}),m=Cp({inputs:{a:p,b:h},backend:r});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(h),m}var wb={kernelName:wh,backendName:"webgl",kernelFunc:$p};function Qk(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{numSamples:s,seed:i,normalized:a}=o,l=a?n:$p({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),u=l.shape[0],c=l.shape[1],p=new pl(u,c,s),f=[[i]],h=r.runWebGLProgram(p,[l],"int32",f);return a||r.disposeIntermediateTensorInfo(l),h}var bb={kernelName:zd,backendName:"webgl",kernelFunc:Qk};var Zk=xt+`
  return -x;
`,Jk=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function tR(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])){let s=r.texData.get(o.dataId),[i,a]=y0(s.values,o.shape,o.dtype);return r.makeTensorInfo(a,o.dtype,i)}let n;return I().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new qt(o.shape,Jk):n=new Et(o.shape,Zk),r.runWebGLProgram(n,[o],o.dtype)}var vb={kernelName:kn,backendName:"webgl",kernelFunc:tR};var eR=Be.nonMaxSuppressionV3Impl;function rR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o,u=r.readSync(n.dataId),c=r.readSync(s.dataId),{selectedIndices:p}=eR(u,c,i,a,l);return r.makeTensorInfo([p.length],"int32",new Int32Array(p))}var Cb={kernelName:Gd,backendName:"webgl",kernelFunc:rR};var oR=Be.nonMaxSuppressionV4Impl;function nR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=o,c=r.readSync(n.dataId),p=r.readSync(s.dataId),{selectedIndices:f,validOutputs:h}=oR(c,p,i,a,l,u);return[r.makeTensorInfo([f.length],"int32",new Int32Array(f)),r.makeTensorInfo([],"int32",new Int32Array([h]))]}var Sb={kernelName:Hd,backendName:"webgl",kernelFunc:nR};var sR=Be.nonMaxSuppressionV5Impl;function iR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=o,c=r.readSync(n.dataId),p=r.readSync(s.dataId),f=i,h=a,m=l,y=u,{selectedIndices:x,selectedScores:g}=sR(c,p,f,h,m,y);return[r.makeTensorInfo([x.length],"int32",new Int32Array(x)),r.makeTensorInfo([g.length],"float32",new Float32Array(g))]}var $b={kernelName:qd,backendName:"webgl",kernelFunc:iR};var fl=class{constructor(t,r,o,n){this.variableNames=["indices"],this.outputShape=[t,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var aR=e=>{let{inputs:t,backend:r,attrs:o}=e,{indices:n}=t,{dtype:s,depth:i,onValue:a,offValue:l}=o,u=b.sizeFromShape(n.shape),c=new fl(u,i,a,l),p=A({inputs:{x:n},backend:r,attrs:{shape:[u]}}),f=r.runWebGLProgram(c,[p],s);r.disposeIntermediateTensorInfo(p);let h=[...n.shape,i],m=A({inputs:{x:f},backend:r,attrs:{shape:h}});return r.disposeIntermediateTensorInfo(f),m},Ib={kernelName:Xd,backendName:"webgl",kernelFunc:aR};function ns(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="complex64"){let n=rr({inputs:{input:o},backend:r}),s=ns({inputs:{x:n},backend:r}),i=eo({inputs:{input:o},backend:r}),a=ns({inputs:{x:i},backend:r}),l=Kt({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return or({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:r})}var Tb={kernelName:hi,backendName:"webgl",kernelFunc:ns};function Eb(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=rr({inputs:{input:o},backend:r}),s=Eb({inputs:{x:n},backend:r}),i=eo({inputs:{input:o},backend:r}),a=ns({inputs:{x:i},backend:r}),l=Kt({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return or({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:r})}var _b={kernelName:Kd,backendName:"webgl",kernelFunc:Eb};function lR(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o;if(t.length===1)return Ya({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let s=t[0].shape,i=t[0].dtype;t.forEach(c=>{b.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),b.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=t.map(c=>{let p=Ya({inputs:{input:c},backend:r,attrs:{dim:n}});return a.push(p),p}),u=xp({inputs:l,backend:r,attrs:{axis:n}});return a.forEach(c=>r.disposeIntermediateTensorInfo(c)),u}var Ab={kernelName:jd,backendName:"webgl",kernelFunc:lR};var dl=class{constructor(t,r,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((u,c)=>u[0]+t[c]+u[1]);let n=t.length,s=H(n),i=r.map(u=>u[0]).join(","),a=r.map((u,c)=>u[0]+t[c]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}};var hl=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((y,x)=>y[0]+t[x]+y[1]);let n=t.length,s=H(n),i=r.map(y=>y[0]).join(","),a=r.map((y,x)=>y[0]+t[x]).join(","),l=lt("rc",n),u=lt("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,f=[`${s} rc = outputLoc;`,`${l[n-1]} += 1;
       if(${c}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${l[n-2]} += 1;
       if(${l[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${l[n-1]} += 1;
         if(${c}) {`],h=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",m="";for(let y=0,x=n===1?2:4;y<x;y++)m+=`
        ${f[y]}
        if (${h}) {
          result[${y}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${y}] = getChannel(getX(${u.join()}), ${p});
        }
      `;m+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${m}
        setOutput(result);
      }
    `}};var Ip=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{paddings:s,constantValue:i}=o;if(b.sizeFromShape(n.shape)===0){let u=s.map((c,p)=>c[0]+n.shape[p]+c[1]);return or({backend:r,attrs:{shape:u,value:i,dtype:n.dtype}})}let a=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hl(n.shape,s,i):new dl(n.shape,s,i),l=[[i]];return r.runWebGLProgram(a,[n],n.dtype,l)},kb={kernelName:Yd,backendName:"webgl",kernelFunc:Ip};var uR=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,cR=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+ee+`
  return result;
`,pR=j({opSnippet:uR,packedOpSnippet:cR}),Rb={kernelName:ni,backendName:"webgl",kernelFunc:pR};function fR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=[],u=b.parseAxisParam(s,n.shape),c=u,p=S.getAxesPermutation(c,a),f=n;p!=null&&(f=et({inputs:{x:n},backend:r,attrs:{perm:p}}),c=S.getInnerMostAxes(c.length,a),l.push(f)),S.assertAxesAreInnerMostDims("prod",c,a);let h;if(r.shouldExecuteOnCPU([f])){let m=r.texData.get(f.dataId).values,{outVals:y,outShape:x,outDtype:g}=b0(f.shape,f.dtype,m,c);h=r.makeTensorInfo(x,g,y)}else{let[m,y]=S.computeOutAndReduceShapes(f.shape,c),x=b.sizeFromShape(y),g=A({inputs:{x:f},backend:r,attrs:{shape:[-1,x]}}),w=zr(n.dtype),C=re(g,w,"prod",r);h=A({inputs:{x:C},backend:r,attrs:{shape:m}}),l.push(g),l.push(C)}if(i){l.push(h);let m=S.expandShapeToKeepDim(h.shape,u);h=A({inputs:{x:h},backend:r,attrs:{shape:m}})}return l.forEach(m=>r.disposeIntermediateTensorInfo(m)),h}var Nb={kernelName:Ru,backendName:"webgl",kernelFunc:fR};function dR(e){let{inputs:t,backend:r,attrs:o}=e,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=t,{outputRaggedRank:a}=o,l=n.map(g=>r.readSync(g.dataId)),u=n.map(g=>g.shape),c=r.readSync(s.dataId),p=r.readSync(i.dataId),[f,h,m]=v0(l,u,c,s.shape,s.dtype,p,i.shape,a),y=f.map(g=>r.makeTensorInfo([g.length],"int32",g)),x=r.makeTensorInfo(m,s.dtype,h);return y.concat([x])}var Fb={kernelName:Qd,backendName:"webgl",kernelFunc:dR};function hR(e){let{inputs:t,backend:r}=e,{starts:o,limits:n,deltas:s}=t,i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=C0(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=r.makeTensorInfo([u.length],"int32",u),f=r.makeTensorInfo([c.length],o.dtype,c);return[p,f]}var Db={kernelName:Zd,backendName:"webgl",kernelFunc:hR};function mR(e){let{inputs:t,backend:r,attrs:o}=e,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=o,u=r.readSync(n.dataId),c=r.readSync(s.dataId),p=r.readSync(i.dataId),f=a.map(x=>r.readSync(x.dataId)),h=a.map(x=>x.shape),[m,y]=S0(u,n.shape,c,s.shape,s.dtype,p,i.shape,f,h,l);return r.makeTensorInfo(m,s.dtype,y)}var Ob={kernelName:Jd,backendName:"webgl",kernelFunc:mR};var Tp=e=>{let{backend:t,attrs:r}=e,{start:o,stop:n,step:s,dtype:i}=r,a=$0(o,n,s,i);return t.makeTensorInfo([a.length],i,a)},Pb={kernelName:th,backendName:"webgl",kernelFunc:Tp};var gR="return 1.0 / x;",xR=B({opSnippet:gR}),Mb={kernelName:eh,backendName:"webgl",kernelFunc:xR};var yR=xt+`
  return (x < 0.0) ? 0.0 : x;
`,wR=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,bR=B({opSnippet:yR,packedOpSnippet:wR}),Lb={kernelName:ii,backendName:"webgl",kernelFunc:bR};var vR=xt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,CR=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,SR=B({opSnippet:vR,packedOpSnippet:CR}),Bb={kernelName:li,backendName:"webgl",kernelFunc:SR};var ml=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var gl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function $R(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=I().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new gl(n.shape,l,u,s,i):new ml(n.shape,l,u,s,i);return r.runWebGLProgram(c,[n],"float32")}var Ub={kernelName:nh,backendName:"webgl",kernelFunc:$R};var xl=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],f=1/c,h=1/p,m=Math.ceil(f)*2+2,y=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${h});

        const int winHeight = int(${m});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${n-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function IR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new xl(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var Vb={kernelName:sh,backendName:"webgl",kernelFunc:IR};var yl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",h;s?h="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var wl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",h;s?h="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function TR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=I().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new wl(n.shape,l,u,s,i):new yl(n.shape,l,u,s,i);return r.runWebGLProgram(c,[n],n.dtype)}var Wb={kernelName:rh,backendName:"webgl",kernelFunc:TR};var bl=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],f=1/c,h=1/p,m=Math.ceil(f)*2+2,y=Math.ceil(h)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${h});

        const int winHeight = int(${m});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${n}) - 1),
                ${o} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${o} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function ER(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new bl(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var zb={kernelName:oh,backendName:"webgl",kernelFunc:ER};var vl=class{constructor(t,r){this.variableNames=["x"];let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=t,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}let n=a=>r.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,s=t.map((a,l)=>n(l)).join(","),i=H(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var Cl=class{constructor(t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=t;let n=lt("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=H(o);o===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(n.slice())};
          if(${s}){
            result.g = ${u(n.slice())};
          }
          if(${i}) {
            result.b = ${c(n.slice())};
            if(${s}) {
              result.a = ${p(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(m){return f(m)}function u(m){return m[o-1]="("+m[o-1]+" + 1)",f(m)}function c(m){return m[o-2]="("+m[o-2]+" + 1)",f(m)}function p(m){return m[o-1]="("+m[o-1]+" + 1)",m[o-2]="("+m[o-2]+" + 1)",f(m)}function f(m){let y=t.map((w,C)=>h(C,m)),x=y.join(","),g=y.slice(-2).join(",");return`getChannel(getX(${x}), vec2(${g}))`}function h(m,y){return r.indexOf(m)!==-1&&t[m]!==1?`${t[m]} - ${y[m]} - 1`:`${y[m]}`}}};function _R(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dims:s}=o,i=n.shape.length,a=b.parseAxisParam(s,n.shape);if(i===0)return ut({inputs:{x:n},backend:r});let l=I().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Cl(n.shape,a):new vl(n.shape,a);return r.runWebGLProgram(l,[n],n.dtype)}var Gb={kernelName:ih,backendName:"webgl",kernelFunc:_R};var Sl=class{constructor(t,r){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=t[1],n=t[2];this.outputShape=t;let s="";typeof r=="number"?s=`float outputValue = ${r.toFixed(2)};`:s=`
        vec3 fill = vec3(${r.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${n} && coordY >= 0 && coordY < ${o}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var Hb={kernelName:Lh,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:o}=e,{radians:n,fillValue:s,center:i}=t,a=r,l=new Sl(o.shape,s),[u,c]=S.getImageCenter(i,o.shape[1],o.shape[2]),p=[[u,c,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(l,[o],o.dtype,p)}};var AR=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,kR=B({opSnippet:AR}),qb={kernelName:ah,backendName:"webgl",kernelFunc:kR};var RR="return inversesqrt(x);",NR=B({opSnippet:RR,cpuKernelImpl:I0}),Kb={kernelName:ui,backendName:"webgl",kernelFunc:NR};var Sr=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=H(s.length),c=H(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,h="";n===1?h="i":n===2&&(h="i, coords[1]");let m=`getUpdates(${h})`,y="";l&&(y="coords[0], coords[1]");let x=`getDefaultValue(${y})`,g=r>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${r}; j++) {
              int index = round(${f});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${m};
              found = true;
            }
          }
          setOutput(mix(${x}, sum, float(found)));
        }
      `}};var $l=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let u=H(s.length),c=H(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,h="";n===1?h="i":n===2&&(h="i, coords[1]");let m=`getUpdates(${h})`,y="";l&&(y="coords[0], coords[1]");let x=`getDefaultValue(${y})`,g=r>1?"strides[j]":"strides",w=r>1?"strides[j + 1]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${r}; j+=2) {
              ivec4 index = round(${f});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${r}) {
                flattenedIndex += index.yw * ${w};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${m};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${x}, sum, found));
        }
      `}};function FR(e){let{inputs:t,backend:r,attrs:o}=e,{indices:n,updates:s}=t,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=S.calculateShapes(s,n,i),f=[p/u,u];if(p===0)return r.makeTensorInfo(i,n.dtype);let h=A({inputs:{x:n},backend:r,attrs:{shape:[l,a]}}),m=A({inputs:{x:s},backend:r,attrs:{shape:[l,u]}}),y=r.makeTensorInfo([],"float32",new Float32Array([0])),x;I().getBool("WEBGL_PACK")?x=new $l(l,a,h.shape.length,m.shape.length,c,f):x=new Sr(l,a,h.shape.length,m.shape.length,c,f);let g=r.runWebGLProgram(x,[m,h,y],m.dtype),w=A({inputs:{x:g},backend:r,attrs:{shape:i}});return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(y),w}var Xb={kernelName:lh,backendName:"webgl",kernelFunc:FR};var Il=class{constructor(t,r,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(r+1))}; ++i) { if (left >= right) break;`,a=I().getNumber("WEBGL_VERSION")===2?s:i,l=n==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function DR(e){let{inputs:t,backend:r,attrs:o}=e,{sortedSequence:n,values:s}=t,{side:i}=o,a=new Il(n.shape[0],n.shape[1],s.shape[1],i),l=[[n.shape[1]]];return r.runWebGLProgram(a,[n,s],"int32",l)}var jb={kernelName:ch,backendName:"webgl",kernelFunc:DR};var Tl=class{constructor(t,r,o){this.variableNames=["c","a","b"],this.outputShape=r;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],u=[];for(let c=0;c<r.length;c++)u.push(`${a[c]}`),c<t&&l.push(`${a[c]}`);n=l.join(),s=u.join()}let i=H(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function OR(e){let{inputs:t,backend:r}=e,{condition:o,t:n,e:s}=t,i=new Tl(o.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(i,[o,n,s],Nt(n.dtype,s.dtype))}var Yb={kernelName:ph,backendName:"webgl",kernelFunc:OR};var PR=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${S.SELU_SCALEALPHA};
  float scale = ${S.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,MR=B({opSnippet:PR}),Qb={kernelName:fh,backendName:"webgl",kernelFunc:MR};var LR=be+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,BR=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,UR=B({opSnippet:LR,packedOpSnippet:BR,cpuKernelImpl:E0}),Zb={kernelName:Ro,backendName:"webgl",kernelFunc:UR};var VR=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,WR=B({opSnippet:VR}),Jb={kernelName:mh,backendName:"webgl",kernelFunc:WR};var zR=be+`
  return sin(x);
`,GR=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${ee}
  return result;
`,HR=B({opSnippet:zR,packedOpSnippet:GR}),tv={kernelName:dh,backendName:"webgl",kernelFunc:HR};var qR=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,KR=B({opSnippet:qR}),ev={kernelName:hh,backendName:"webgl",kernelFunc:KR};var XR=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,jR=B({opSnippet:XR}),rv={kernelName:gh,backendName:"webgl",kernelFunc:jR};var YR=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,paddings:i}=o;b.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((g,w)=>g*w),l=[[0,0]];l.push(...i);for(let g=1+s.length;g<n.shape.length;++g)l.push([0,0]);let u=[],c=Ip({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),p=S.getReshaped(c.shape,s,a,!1),f=S.getPermuted(p.length,s.length,!1),h=S.getReshapedPermuted(c.shape,s,a,!1),m=A({inputs:{x:c},backend:r,attrs:{shape:p}}),y=et({inputs:{x:m},backend:r,attrs:{perm:f}}),x=A({inputs:{x:y},backend:r,attrs:{shape:h}});return u.push(c),u.push(m),u.push(y),u.forEach(g=>r.disposeIntermediateTensorInfo(g)),x},ov={kernelName:xh,backendName:"webgl",kernelFunc:YR};function QR(e){let{inputs:t,backend:r}=e,{indices:o,values:n,denseShape:s,defaultValue:i}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=r.readSync(o.dataId),l=r.readSync(n.dataId),u=r.readSync(s.dataId),c=r.readSync(i.dataId)[0],[p,f,h,m,y]=A0(a,o.shape,o.dtype,l,n.dtype,u,c);return[r.makeTensorInfo(f,o.dtype,p),r.makeTensorInfo([f[0]],n.dtype,h),r.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(x=>Number(x)))),r.makeTensorInfo([y.length],o.dtype,new Int32Array(y))]}var nv={kernelName:bh,backendName:"webgl",kernelFunc:QR};function ZR(e){let{inputs:t,backend:r}=e,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(r.readSync(n.dataId)),a=r.readSync(o.dataId),l=Array.from(r.readSync(s.dataId)),[u,c,p]=k0(a,o.shape,o.dtype,i,l);return[r.makeTensorInfo(c,o.dtype,u),r.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var sv={kernelName:vh,backendName:"webgl",kernelFunc:ZR};function JR(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=aa(i,o.shape,o.dtype,a,l,!0);return r.makeTensorInfo(c,o.dtype,u)}var iv={kernelName:Ch,backendName:"webgl",kernelFunc:JR};function tN(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=aa(i,o.shape,o.dtype,a,l);return r.makeTensorInfo(c,o.dtype,u)}var av={kernelName:Sh,backendName:"webgl",kernelFunc:tN};function eN(e){let{inputs:t,backend:r,attrs:o}=e,{sparseIndices:n,sparseValues:s,defaultValue:i}=t,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:f}=S.calculateShapes(s,n,a),h=!1;if(s.dtype==="string"){let g=r.bufferSync(n),w=r.bufferSync(s),C=b.decodeString(r.readSync(i.dataId)[0]),v=T0(g,w,a,f,c,u,l,p,C,h);return r.makeTensorInfo(a,v.dtype,v.values)}let m=new Sr(u,l,n.shape.length,s.shape.length,p,[f,1],h),y=r.runWebGLProgram(m,[s,n,i],s.dtype),x=A({inputs:{x:y},backend:r,attrs:{shape:a}});return r.disposeIntermediateTensorInfo(y),x}var lv={kernelName:$h,backendName:"webgl",kernelFunc:eN};function rN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{numOrSizeSplits:s,axis:i}=o,a=b.parseAxisParam(i,n.shape)[0],l=S.prepareSplitSize(n,s,a),u=n.shape.length,c=new Array(u).fill(0),p=n.shape.slice();return l.map(f=>{let h=[...p];h[a]=f;let m=_e({inputs:{x:n},backend:r,attrs:{begin:c,size:h}});return c[a]+=f,m})}var uv={kernelName:yh,backendName:"webgl",kernelFunc:rN};var cv="return sqrt(x);",oN=B({opSnippet:cv,packedOpSnippet:cv,cpuKernelImpl:R0}),pv={kernelName:No,backendName:"webgl",kernelFunc:oN};var nN="return x * x;",sN=B({opSnippet:nN}),fv={kernelName:Ih,backendName:"webgl",kernelFunc:sN};var dv="return (a - b) * (a - b);",iN=j({opSnippet:dv,packedOpSnippet:dv}),hv={kernelName:pi,backendName:"webgl",kernelFunc:iN};function aN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=r.readSync(n.dataId),i=S.fromUint8ToStringArray(s),a=N0(i,"string",o);return r.makeTensorInfo(n.shape,"string",a)}var mv={kernelName:fi,backendName:"webgl",kernelFunc:aN};function lN({inputs:e,attrs:t,backend:r}){let{x:o}=e,n=xt+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new Et(o.shape,n);return r.runWebGLProgram(s,[o],o.dtype)}var gv={kernelName:mi,backendName:"webgl",kernelFunc:lN};var El=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=H(o.length),i=H(o.length),a="";if(n===1)a="coords * strides + begin";else{let l=0;a=o.map((u,c)=>(l++,o.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${l-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${r});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function uN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:f}=o,{finalShapeSparse:h,finalShape:m,isIdentity:y,sliceDim0:x,isSimpleSlice:g,begin:w,end:C,strides:v}=Gt.sliceInfo(n.shape,s,i,a,l,u,c,p,f),$;if(y)$=A({inputs:{x:n},backend:r,attrs:{shape:m}});else if(x||g){b.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let E=Gt.computeOutShape(w,C,v),_=_e({inputs:{x:n},backend:r,attrs:{begin:w,size:E}});$=A({inputs:{x:_},backend:r,attrs:{shape:m}}),r.disposeIntermediateTensorInfo(_)}else if(r.shouldExecuteOnCPU([n])){let _=r.readSync(n.dataId),N=Q(n.shape,n.dtype,_),O=F0(h,N,v,w);$=r.makeTensorInfo(m,n.dtype,O.values)}else{let _=new El(w,v,h);$=r.runWebGLProgram(_,[n],n.dtype)}let T=A({inputs:{x:$},backend:r,attrs:{shape:m}});return r.disposeIntermediateTensorInfo($),T}var xv={kernelName:Th,backendName:"webgl",kernelFunc:uN};function cN(e){let{inputs:t,backend:r,attrs:o}=e,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=t,f=r.readSync(c.dataId),h=r.readSync(p.dataId),[m,y]=D0(f,h,n,s,i,a,l,u);return[r.makeTensorInfo([m.length],"string",m),r.makeTensorInfo(p.shape,"int32",y)]}var yv={kernelName:Eh,backendName:"webgl",kernelFunc:cN};function pN(e){let{inputs:t,backend:r,attrs:o}=e,{skipEmpty:n}=o,{input:s,delimiter:i}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=r.readSync(s.dataId),l=r.readSync(i.dataId)[0],[u,c,p]=O0(a,l,n),f=c.length;return[r.makeTensorInfo([f,2],"int32",u),r.makeTensorInfo([f],"string",c),r.makeTensorInfo([2],"int32",new Int32Array(p))]}var wv={kernelName:_h,backendName:"webgl",kernelFunc:pN};function fN(e){let{inputs:t,backend:r,attrs:o}=e,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=r.readSync(s.dataId),a=P0(i,n);return r.makeTensorInfo(s.shape,"int32",a)}var bv={kernelName:Ah,backendName:"webgl",kernelFunc:fN};var dN="return tan(x);",hN=B({opSnippet:dN}),vv={kernelName:kh,backendName:"webgl",kernelFunc:hN};var mN=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,gN=B({opSnippet:mN}),Cv={kernelName:Rh,backendName:"webgl",kernelFunc:gN};function xN(e){let{inputs:t,backend:r,attrs:o}=e,{tensor:n,indices:s,updates:i}=t,{}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=S.calculateShapes(i,s,n.shape),f=[p/u,u];if(p===0)return r.makeTensorInfo(n.shape,s.dtype);let h=A({inputs:{x:s},backend:r,attrs:{shape:[l,a]}}),m=A({inputs:{x:i},backend:r,attrs:{shape:[l,u]}}),y=A({inputs:{x:n},backend:r,attrs:{shape:f}}),x=new Sr(l,a,h.shape.length,m.shape.length,c,f,!1,!0),g=r.runWebGLProgram(x,[m,h,y],y.dtype),w=A({inputs:{x:g},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(g),w}var Sv={kernelName:uh,backendName:"webgl",kernelFunc:xN};var _l=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[i]*r[i];this.outputShape=o,this.rank=o.length;let n=H(this.rank),s=yN(t);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function yN(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<e.length;n++)o.push(`imod(${r[n]}, ${e[n]})`);return o.join()}function Ep(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let l=r.readSync(n.dataId),u=n.dtype==="string"?l.map(f=>b.decodeString(f)):l,c=Q(n.shape,n.dtype,u),p=L0(c,s);return r.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new _l(n.shape,s);return r.runWebGLProgram(i,[n],n.dtype)}var $v={kernelName:di,backendName:"webgl",kernelFunc:Ep};var Al=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},kl=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function oo(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function Iv(e){let t=1;for(;t<e;)t*=2;return t}function wN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{k:s,sorted:i}=o,a=I().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=I().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,c=u[u.length-1];if(r.shouldExecuteOnCPU([n])||c<a||s>l){let O=r.readSync(n.dataId),[V,z]=B0(O,u,n.dtype,s,i);return[r.makeTensorInfo(V.shape,V.dtype,V.values),r.makeTensorInfo(z.shape,z.dtype,z.values)]}if(s===0)return u[u.length-1]=0,[r.makeTensorInfo(u,n.dtype,[]),r.makeTensorInfo(u,"int32",[])];if(c===1)return[n,or({attrs:{shape:u,dtype:"int32",value:0},backend:r})];let p=r.texData.get(n.dataId),f=p!==null&&p.isPacked,h=f?r.unpackTensor(n):n,y=b.sizeFromShape(u)/c,x=A({inputs:{x:h},attrs:{shape:[y,c]},backend:r});f&&oo(r,h);let g=Iv(s),w=Iv(c),C=null,v=()=>C===null?[x,x]:[x,C],$=(O,V,z)=>{let ct=v(),pt=new Al(z),gt=[[c],[C===null?1:0],[Number.NEGATIVE_INFINITY],[O],[V]],Ot=C;C=r.runWebGLProgram(pt,ct,"int32",gt),oo(r,Ot)};for(let O=1;O<g;O*=2){let V=O*2;for(let z=O;z>=1;z/=2)$(V,z,[y,w])}for(let O=w;O>g;O/=2){let V=v(),z=new kl([y,O/2]),pt=[[c],[C===null?1:0],[g]],ht=C;C=r.runWebGLProgram(z,V,"int32",pt),oo(r,ht);let gt=g/2,Ot=gt*2;for(let R=gt;R>=1;R/=2)$(Ot,R,C.shape)}let T=C;C=_e({inputs:{x:C},backend:r,attrs:{begin:0,size:[y,s]}}),oo(r,T);let E=bp({inputs:{x,indices:C},backend:r,attrs:{axis:1,batchDims:1}});oo(r,x);let _=u.slice(0,-1);_.push(s),T=C,C=A({inputs:{x:C},attrs:{shape:_},backend:r}),oo(r,T);let N=E;return E=A({inputs:{x:E},attrs:{shape:_},backend:r}),oo(r,N),[E,C]}var Tv={kernelName:Nh,backendName:"webgl",kernelFunc:wN};var Rl=class{constructor(t,r,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,l;switch(n){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${r}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${r}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function bN(e){let{inputs:t,backend:r,attrs:o}=e,{image:n,transforms:s}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=o,[c,p,f,h]=n.shape,[m,y]=u??[p,f],x=[c,m,y,h],g=new Rl(p,f,i,a,l,x);return r.runWebGLProgram(g,[n,s],"float32")}var Ev={kernelName:Fh,backendName:"webgl",kernelFunc:bN};function vN(e){let{inputs:t,attrs:r,backend:o}=e,{axis:n}=r,{x:s}=t;Ve(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:l,indices:u}=U0(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var _v={kernelName:Dh,backendName:"webgl",kernelFunc:vN};function CN(e){let{inputs:t,backend:r,attrs:o}=e,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,l=n.shape[s],u=new Array(a-1),c=0;for(let y=0;y<a;y++)y!==s&&(u[c++]=i.shape[y]);let p=[],f=new Array(a).fill(0),h=i.shape.slice();h[s]=1;let m=new Array(l);for(let y=0;y<m.length;y++){f[s]=y;let x=_e({inputs:{x:i},backend:r,attrs:{begin:f,size:h}}),g=A({inputs:{x},backend:r,attrs:{shape:u}});m[y]=g,p.push(x)}return p.forEach(y=>r.disposeIntermediateTensorInfo(y)),m}var Av={kernelName:Oh,backendName:"webgl",kernelFunc:CN};var Nl=class{constructor(t,r){this.variableNames=["x","segmentIds"];let o=t.windowSize,n=t.batchSize,s=t.inSize,i=t.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let l="0.0",u="sumValue",c=Math.floor(o/4)*4,p=o%4,f=`
        sumValue += dot(values, segFilter);
    `,h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let m="";s%o>0&&(m=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${m}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${o}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${f}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${f}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${f}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${f}
        }
        setOutput(${u});
      }
    `}};function SN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,segmentIds:s}=t,{numSegments:i}=o,a=n.shape.length,l=[],u=0,c=S.getAxesPermutation([u],a),p=n;c!=null&&(p=et({inputs:{x:n},backend:r,attrs:{perm:c}}),l.push(p),u=S.getInnerMostAxes(1,a)[0]);let f=S.segment_util.computeOutShape(p.shape,u,i),h=b.sizeFromShape([p.shape[u]]),m=A({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}});l.push(m);let y=zr(n.dtype),x=(v,$,T,E,_)=>{let N=v.shape[0],O=v.shape[1],V=S.segment_util.segOpComputeOptimalWindowSize(O,_),z={windowSize:V,inSize:O,batchSize:N,numSegments:_},ct=new Nl(z,$),pt=r.compileAndRun(ct,[v,T],E);if(l.push(pt),pt.shape[1]===_)return pt;let ht=Tp({backend:r,attrs:{start:0,stop:_,step:1,dtype:"float32"}}),gt=Ep({inputs:{x:ht},backend:r,attrs:{reps:[O/V]}});return l.push(ht),l.push(gt),x(pt,$,gt,E,_)},g=x(m,"unsortedSegmentSum",s,y,i),w=A({inputs:{x:g},backend:r,attrs:{shape:f}}),C=w;if(c!=null){l.push(w);let v=S.getUndoAxesPermutation(c);C=et({inputs:{x:C},backend:r,attrs:{perm:v}})}return l.forEach(v=>r.disposeIntermediateTensorInfo(v)),C}var kv={kernelName:Ph,backendName:"webgl",kernelFunc:SN};var $N=[dy,my,gy,xy,wy,by,vy,Cy,Iy,Ty,Ey,_y,Ay,ky,Ry,Ny,Fy,Dy,Oy,Py,My,By,Uy,Vy,Hy,Ky,Xy,oy,Yy,Zy,Jy,tw,ew,rw,ow,nw,sw,iw,aw,cw,pw,fw,dw,hw,mw,gw,xw,yw,ww,bw,vw,Cw,Sw,$w,Iw,Ew,_w,Aw,kw,Nw,Fw,Dw,Ow,Pw,Mw,Lw,Bw,Uw,ry,Vw,Qy,Ww,zw,Gw,ny,Hw,qw,Kw,Xw,jw,Yw,Qw,Zw,Jw,tb,rb,ob,nb,sb,ib,ab,ub,pb,fb,db,hb,mb,bb,ay,vb,Cb,Sb,$b,Wy,Ib,_b,Ab,kb,Rb,sy,Nb,Fb,Db,Ob,Pb,zy,gb,Mb,Lb,Bb,uy,Ub,Vb,Wb,zb,Gb,Hb,qb,Kb,Xb,jb,Yb,Qb,Zb,Jb,tv,ev,Ly,wb,rv,ov,nv,sv,iv,av,lv,uv,pv,fv,hv,mv,gv,xv,yv,wv,bv,yb,py,vv,Cv,Sv,$v,Tv,Ev,fy,_v,Av,kv,Tb];for(let e of $N)zh(e);function no(e,t){let r=0;if(t===void 0)for(let o of e)(o=+o)&&(r+=o);else{let o=-1;for(let n of e)(n=+t(n,++o,e))&&(r+=n)}return r}var IN={value:()=>{}};function Nv(){for(var e=0,t=arguments.length,r={},o;e<t;++e){if(!(o=arguments[e]+"")||o in r||/[\s.]/.test(o))throw new Error("illegal type: "+o);r[o]=[]}return new Fl(r)}function Fl(e){this._=e}function TN(e,t){return e.trim().split(/^|\s+/).map(function(r){var o="",n=r.indexOf(".");if(n>=0&&(o=r.slice(n+1),r=r.slice(0,n)),r&&!t.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:o}})}Fl.prototype=Nv.prototype={constructor:Fl,on:function(e,t){var r=this._,o=TN(e+"",r),n,s=-1,i=o.length;if(arguments.length<2){for(;++s<i;)if((n=(e=o[s]).type)&&(n=EN(r[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<i;)if(n=(e=o[s]).type)r[n]=Rv(r[n],e.name,t);else if(t==null)for(n in r)r[n]=Rv(r[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var r in t)e[r]=t[r].slice();return new Fl(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var r=new Array(n),o=0,n,s;o<n;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],o=0,n=s.length;o<n;++o)s[o].value.apply(t,r)},apply:function(e,t,r){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,s=o.length;n<s;++n)o[n].value.apply(t,r)}};function EN(e,t){for(var r=0,o=e.length,n;r<o;++r)if((n=e[r]).name===t)return n.value}function Rv(e,t,r){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=IN,e=e.slice(0,o).concat(e.slice(o+1));break}return r!=null&&e.push({name:t,value:r}),e}var so=Nv;var Dl="http://www.w3.org/1999/xhtml",_p={svg:"http://www.w3.org/2000/svg",xhtml:Dl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function nr(e){var t=e+="",r=t.indexOf(":");return r>=0&&(t=e.slice(0,r))!=="xmlns"&&(e=e.slice(r+1)),_p.hasOwnProperty(t)?{space:_p[t],local:e}:e}function _N(e){return function(){var t=this.ownerDocument,r=this.namespaceURI;return r===Dl&&t.documentElement.namespaceURI===Dl?t.createElement(e):t.createElementNS(r,e)}}function AN(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ol(e){var t=nr(e);return(t.local?AN:_N)(t)}function kN(){}function io(e){return e==null?kN:function(){return this.querySelector(e)}}function Fv(e){typeof e!="function"&&(e=io(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=new Array(i),l,u,c=0;c<i;++c)(l=s[c])&&(u=e.call(l,l.__data__,c,s))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new yt(o,this._parents)}function Ap(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function RN(){return[]}function ss(e){return e==null?RN:function(){return this.querySelectorAll(e)}}function NN(e){return function(){return Ap(e.apply(this,arguments))}}function Dv(e){typeof e=="function"?e=NN(e):e=ss(e);for(var t=this._groups,r=t.length,o=[],n=[],s=0;s<r;++s)for(var i=t[s],a=i.length,l,u=0;u<a;++u)(l=i[u])&&(o.push(e.call(l,l.__data__,u,i)),n.push(l));return new yt(o,n)}function is(e){return function(){return this.matches(e)}}function Pl(e){return function(t){return t.matches(e)}}var FN=Array.prototype.find;function DN(e){return function(){return FN.call(this.children,e)}}function ON(){return this.firstElementChild}function Ov(e){return this.select(e==null?ON:DN(typeof e=="function"?e:Pl(e)))}var PN=Array.prototype.filter;function MN(){return Array.from(this.children)}function LN(e){return function(){return PN.call(this.children,e)}}function Pv(e){return this.selectAll(e==null?MN:LN(typeof e=="function"?e:Pl(e)))}function Mv(e){typeof e!="function"&&(e=is(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,u=0;u<i;++u)(l=s[u])&&e.call(l,l.__data__,u,s)&&a.push(l);return new yt(o,this._parents)}function Ml(e){return new Array(e.length)}function Lv(){return new yt(this._enter||this._groups.map(Ml),this._parents)}function as(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}as.prototype={constructor:as,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Bv(e){return function(){return e}}function BN(e,t,r,o,n,s){for(var i=0,a,l=t.length,u=s.length;i<u;++i)(a=t[i])?(a.__data__=s[i],o[i]=a):r[i]=new as(e,s[i]);for(;i<l;++i)(a=t[i])&&(n[i]=a)}function UN(e,t,r,o,n,s,i){var a,l,u=new Map,c=t.length,p=s.length,f=new Array(c),h;for(a=0;a<c;++a)(l=t[a])&&(f[a]=h=i.call(l,l.__data__,a,t)+"",u.has(h)?n[a]=l:u.set(h,l));for(a=0;a<p;++a)h=i.call(e,s[a],a,s)+"",(l=u.get(h))?(o[a]=l,l.__data__=s[a],u.delete(h)):r[a]=new as(e,s[a]);for(a=0;a<c;++a)(l=t[a])&&u.get(f[a])===l&&(n[a]=l)}function VN(e){return e.__data__}function Uv(e,t){if(!arguments.length)return Array.from(this,VN);var r=t?UN:BN,o=this._parents,n=this._groups;typeof e!="function"&&(e=Bv(e));for(var s=n.length,i=new Array(s),a=new Array(s),l=new Array(s),u=0;u<s;++u){var c=o[u],p=n[u],f=p.length,h=WN(e.call(c,c&&c.__data__,u,o)),m=h.length,y=a[u]=new Array(m),x=i[u]=new Array(m),g=l[u]=new Array(f);r(c,p,y,x,g,h,t);for(var w=0,C=0,v,$;w<m;++w)if(v=y[w]){for(w>=C&&(C=w+1);!($=x[C])&&++C<m;);v._next=$||null}}return i=new yt(i,o),i._enter=a,i._exit=l,i}function WN(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Vv(){return new yt(this._exit||this._groups.map(Ml),this._parents)}function Wv(e,t,r){var o=this.enter(),n=this,s=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),r==null?s.remove():r(s),o&&n?o.merge(n).order():n}function zv(e){for(var t=e.selection?e.selection():e,r=this._groups,o=t._groups,n=r.length,s=o.length,i=Math.min(n,s),a=new Array(n),l=0;l<i;++l)for(var u=r[l],c=o[l],p=u.length,f=a[l]=new Array(p),h,m=0;m<p;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<n;++l)a[l]=r[l];return new yt(a,this._parents)}function Gv(){for(var e=this._groups,t=-1,r=e.length;++t<r;)for(var o=e[t],n=o.length-1,s=o[n],i;--n>=0;)(i=o[n])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Hv(e){e||(e=zN);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var r=this._groups,o=r.length,n=new Array(o),s=0;s<o;++s){for(var i=r[s],a=i.length,l=n[s]=new Array(a),u,c=0;c<a;++c)(u=i[c])&&(l[c]=u);l.sort(t)}return new yt(n,this._parents).order()}function zN(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function qv(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Kv(){return Array.from(this)}function Xv(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length;n<s;++n){var i=o[n];if(i)return i}return null}function jv(){let e=0;for(let t of this)++e;return e}function Yv(){return!this.node()}function Qv(e){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var n=t[r],s=0,i=n.length,a;s<i;++s)(a=n[s])&&e.call(a,a.__data__,s,n);return this}function GN(e){return function(){this.removeAttribute(e)}}function HN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qN(e,t){return function(){this.setAttribute(e,t)}}function KN(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function XN(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttribute(e):this.setAttribute(e,r)}}function jN(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,r)}}function Zv(e,t){var r=nr(e);if(arguments.length<2){var o=this.node();return r.local?o.getAttributeNS(r.space,r.local):o.getAttribute(r)}return this.each((t==null?r.local?HN:GN:typeof t=="function"?r.local?jN:XN:r.local?KN:qN)(r,t))}function Ll(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function YN(e){return function(){this.style.removeProperty(e)}}function QN(e,t,r){return function(){this.style.setProperty(e,t,r)}}function ZN(e,t,r){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,r)}}function Jv(e,t,r){return arguments.length>1?this.each((t==null?YN:typeof t=="function"?ZN:QN)(e,t,r??"")):$r(this.node(),e)}function $r(e,t){return e.style.getPropertyValue(t)||Ll(e).getComputedStyle(e,null).getPropertyValue(t)}function JN(e){return function(){delete this[e]}}function tF(e,t){return function(){this[e]=t}}function eF(e,t){return function(){var r=t.apply(this,arguments);r==null?delete this[e]:this[e]=r}}function t1(e,t){return arguments.length>1?this.each((t==null?JN:typeof t=="function"?eF:tF)(e,t)):this.node()[e]}function e1(e){return e.trim().split(/^|\s+/)}function kp(e){return e.classList||new r1(e)}function r1(e){this._node=e,this._names=e1(e.getAttribute("class")||"")}r1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function o1(e,t){for(var r=kp(e),o=-1,n=t.length;++o<n;)r.add(t[o])}function n1(e,t){for(var r=kp(e),o=-1,n=t.length;++o<n;)r.remove(t[o])}function rF(e){return function(){o1(this,e)}}function oF(e){return function(){n1(this,e)}}function nF(e,t){return function(){(t.apply(this,arguments)?o1:n1)(this,e)}}function s1(e,t){var r=e1(e+"");if(arguments.length<2){for(var o=kp(this.node()),n=-1,s=r.length;++n<s;)if(!o.contains(r[n]))return!1;return!0}return this.each((typeof t=="function"?nF:t?rF:oF)(r,t))}function sF(){this.textContent=""}function iF(e){return function(){this.textContent=e}}function aF(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function i1(e){return arguments.length?this.each(e==null?sF:(typeof e=="function"?aF:iF)(e)):this.node().textContent}function lF(){this.innerHTML=""}function uF(e){return function(){this.innerHTML=e}}function cF(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function a1(e){return arguments.length?this.each(e==null?lF:(typeof e=="function"?cF:uF)(e)):this.node().innerHTML}function pF(){this.nextSibling&&this.parentNode.appendChild(this)}function l1(){return this.each(pF)}function fF(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function u1(){return this.each(fF)}function c1(e){var t=typeof e=="function"?e:Ol(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function dF(){return null}function p1(e,t){var r=typeof e=="function"?e:Ol(e),o=t==null?dF:typeof t=="function"?t:io(t);return this.select(function(){return this.insertBefore(r.apply(this,arguments),o.apply(this,arguments)||null)})}function hF(){var e=this.parentNode;e&&e.removeChild(this)}function f1(){return this.each(hF)}function mF(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function gF(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function d1(e){return this.select(e?gF:mF)}function h1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function xF(e){return function(t){e.call(this,t,this.__data__)}}function yF(e){return e.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{type:t,name:r}})}function wF(e){return function(){var t=this.__on;if(t){for(var r=0,o=-1,n=t.length,s;r<n;++r)s=t[r],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++o]=s;++o?t.length=o:delete this.__on}}}function bF(e,t,r){return function(){var o=this.__on,n,s=xF(t);if(o){for(var i=0,a=o.length;i<a;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=s,n.options=r),n.value=t;return}}this.addEventListener(e.type,s,r),n={type:e.type,name:e.name,value:t,listener:s,options:r},o?o.push(n):this.__on=[n]}}function m1(e,t,r){var o=yF(e+""),n,s=o.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(n=0,c=a[l];n<s;++n)if((i=o[n]).type===c.type&&i.name===c.name)return c.value}return}for(a=t?bF:wF,n=0;n<s;++n)this.each(a(o[n],t,r));return this}function g1(e,t,r){var o=Ll(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,r):(n=o.document.createEvent("Event"),r?(n.initEvent(t,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function vF(e,t){return function(){return g1(this,e,t)}}function CF(e,t){return function(){return g1(this,e,t.apply(this,arguments))}}function x1(e,t){return this.each((typeof t=="function"?CF:vF)(e,t))}function*y1(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length,i;n<s;++n)(i=o[n])&&(yield i)}var Rp=[null];function yt(e,t){this._groups=e,this._parents=t}function w1(){return new yt([[document.documentElement]],Rp)}function SF(){return this}yt.prototype=w1.prototype={constructor:yt,select:Fv,selectAll:Dv,selectChild:Ov,selectChildren:Pv,filter:Mv,data:Uv,enter:Lv,exit:Vv,join:Wv,merge:zv,selection:SF,order:Gv,sort:Hv,call:qv,nodes:Kv,node:Xv,size:jv,empty:Yv,each:Qv,attr:Zv,style:Jv,property:t1,classed:s1,text:i1,html:a1,raise:l1,lower:u1,append:c1,insert:p1,remove:f1,clone:d1,datum:h1,on:m1,dispatch:x1,[Symbol.iterator]:y1};var sr=w1;function Ae(e){return typeof e=="string"?new yt([[document.querySelector(e)]],[document.documentElement]):new yt([[e]],Rp)}function b1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Bl(e,t){if(e=b1(e),t===void 0&&(t=e.currentTarget),t){var r=t.ownerSVGElement||t;if(r.createSVGPoint){var o=r.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var v1={passive:!1},ao={capture:!0,passive:!1};function Ul(e){e.stopImmediatePropagation()}function Ir(e){e.preventDefault(),e.stopImmediatePropagation()}function C1(e){var t=e.document.documentElement,r=Ae(e).on("dragstart.drag",Ir,ao);"onselectstart"in t?r.on("selectstart.drag",Ir,ao):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function S1(e,t){var r=e.document.documentElement,o=Ae(e).on("dragstart.drag",null);t&&(o.on("click.drag",Ir,ao),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in r?o.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var ls=e=>()=>e;function us(e,{sourceEvent:t,subject:r,target:o,identifier:n,active:s,x:i,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}us.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function $F(e){return!e.ctrlKey&&!e.button}function IF(){return this.parentNode}function TF(e,t){return t??{x:e.x,y:e.y}}function EF(){return navigator.maxTouchPoints||"ontouchstart"in this}function Np(){var e=$F,t=IF,r=TF,o=EF,n={},s=so("start","drag","end"),i=0,a,l,u,c,p=0;function f(v){v.on("mousedown.drag",h).filter(o).on("touchstart.drag",x).on("touchmove.drag",g,v1).on("touchend.drag touchcancel.drag",w).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(v,$){if(!(c||!e.call(this,v,$))){var T=C(this,t.call(this,v,$),v,$,"mouse");T&&(Ae(v.view).on("mousemove.drag",m,ao).on("mouseup.drag",y,ao),C1(v.view),Ul(v),u=!1,a=v.clientX,l=v.clientY,T("start",v))}}function m(v){if(Ir(v),!u){var $=v.clientX-a,T=v.clientY-l;u=$*$+T*T>p}n.mouse("drag",v)}function y(v){Ae(v.view).on("mousemove.drag mouseup.drag",null),S1(v.view,u),Ir(v),n.mouse("end",v)}function x(v,$){if(e.call(this,v,$)){var T=v.changedTouches,E=t.call(this,v,$),_=T.length,N,O;for(N=0;N<_;++N)(O=C(this,E,v,$,T[N].identifier,T[N]))&&(Ul(v),O("start",v,T[N]))}}function g(v){var $=v.changedTouches,T=$.length,E,_;for(E=0;E<T;++E)(_=n[$[E].identifier])&&(Ir(v),_("drag",v,$[E]))}function w(v){var $=v.changedTouches,T=$.length,E,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),E=0;E<T;++E)(_=n[$[E].identifier])&&(Ul(v),_("end",v,$[E]))}function C(v,$,T,E,_,N){var O=s.copy(),V=Bl(N||T,$),z,ct,pt;if((pt=r.call(v,new us("beforestart",{sourceEvent:T,target:f,identifier:_,active:i,x:V[0],y:V[1],dx:0,dy:0,dispatch:O}),E))!=null)return z=pt.x-V[0]||0,ct=pt.y-V[1]||0,function ht(gt,Ot,R){var P=V,ft;switch(gt){case"start":n[_]=ht,ft=i++;break;case"end":delete n[_],--i;case"drag":V=Bl(R||Ot,$),ft=i;break}O.call(gt,v,new us(gt,{sourceEvent:Ot,subject:pt,target:f,identifier:_,active:ft,x:V[0]+z,y:V[1]+ct,dx:V[0]-P[0],dy:V[1]-P[1],dispatch:O}),E)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:ls(!!v),f):e},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:ls(v),f):t},f.subject=function(v){return arguments.length?(r=typeof v=="function"?v:ls(v),f):r},f.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:ls(!!v),f):o},f.on=function(){var v=s.on.apply(s,arguments);return v===s?f:v},f.clickDistance=function(v){return arguments.length?(p=(v=+v)*v,f):Math.sqrt(p)},f}function Vl(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Fp(e,t){var r=Object.create(e.prototype);for(var o in t)r[o]=t[o];return r}function fs(){}var cs=.7,Gl=1/cs,pn="\\s*([+-]?\\d+)\\s*",ps="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ze="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_F=/^#([0-9a-f]{3,8})$/,AF=new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`),kF=new RegExp(`^rgb\\(${ze},${ze},${ze}\\)$`),RF=new RegExp(`^rgba\\(${pn},${pn},${pn},${ps}\\)$`),NF=new RegExp(`^rgba\\(${ze},${ze},${ze},${ps}\\)$`),FF=new RegExp(`^hsl\\(${ps},${ze},${ze}\\)$`),DF=new RegExp(`^hsla\\(${ps},${ze},${ze},${ps}\\)$`),$1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Vl(fs,Tr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:I1,formatHex:I1,formatHex8:OF,formatHsl:PF,formatRgb:T1,toString:T1});function I1(){return this.rgb().formatHex()}function OF(){return this.rgb().formatHex8()}function PF(){return N1(this).formatHsl()}function T1(){return this.rgb().formatRgb()}function Tr(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=_F.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?E1(t):r===3?new oe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?Wl(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?Wl(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=AF.exec(e))?new oe(t[1],t[2],t[3],1):(t=kF.exec(e))?new oe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=RF.exec(e))?Wl(t[1],t[2],t[3],t[4]):(t=NF.exec(e))?Wl(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=FF.exec(e))?k1(t[1],t[2]/100,t[3]/100,1):(t=DF.exec(e))?k1(t[1],t[2]/100,t[3]/100,t[4]):$1.hasOwnProperty(e)?E1($1[e]):e==="transparent"?new oe(NaN,NaN,NaN,0):null}function E1(e){return new oe(e>>16&255,e>>8&255,e&255,1)}function Wl(e,t,r,o){return o<=0&&(e=t=r=NaN),new oe(e,t,r,o)}function MF(e){return e instanceof fs||(e=Tr(e)),e?(e=e.rgb(),new oe(e.r,e.g,e.b,e.opacity)):new oe}function fn(e,t,r,o){return arguments.length===1?MF(e):new oe(e,t,r,o??1)}function oe(e,t,r,o){this.r=+e,this.g=+t,this.b=+r,this.opacity=+o}Vl(oe,fn,Fp(fs,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new oe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?cs:Math.pow(cs,e),new oe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new oe(uo(this.r),uo(this.g),uo(this.b),Hl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_1,formatHex:_1,formatHex8:LF,formatRgb:A1,toString:A1}));function _1(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}`}function LF(){return`#${lo(this.r)}${lo(this.g)}${lo(this.b)}${lo((isNaN(this.opacity)?1:this.opacity)*255)}`}function A1(){let e=Hl(this.opacity);return`${e===1?"rgb(":"rgba("}${uo(this.r)}, ${uo(this.g)}, ${uo(this.b)}${e===1?")":`, ${e})`}`}function Hl(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function uo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function lo(e){return e=uo(e),(e<16?"0":"")+e.toString(16)}function k1(e,t,r,o){return o<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new ke(e,t,r,o)}function N1(e){if(e instanceof ke)return new ke(e.h,e.s,e.l,e.opacity);if(e instanceof fs||(e=Tr(e)),!e)return new ke;if(e instanceof ke)return e;e=e.rgb();var t=e.r/255,r=e.g/255,o=e.b/255,n=Math.min(t,r,o),s=Math.max(t,r,o),i=NaN,a=s-n,l=(s+n)/2;return a?(t===s?i=(r-o)/a+(r<o)*6:r===s?i=(o-t)/a+2:i=(t-r)/a+4,a/=l<.5?s+n:2-s-n,i*=60):a=l>0&&l<1?0:i,new ke(i,a,l,e.opacity)}function F1(e,t,r,o){return arguments.length===1?N1(e):new ke(e,t,r,o??1)}function ke(e,t,r,o){this.h=+e,this.s=+t,this.l=+r,this.opacity=+o}Vl(ke,F1,Fp(fs,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new ke(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?cs:Math.pow(cs,e),new ke(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,o=r+(r<.5?r:1-r)*t,n=2*r-o;return new oe(Dp(e>=240?e-240:e+120,n,o),Dp(e,n,o),Dp(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new ke(R1(this.h),zl(this.s),zl(this.l),Hl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Hl(this.opacity);return`${e===1?"hsl(":"hsla("}${R1(this.h)}, ${zl(this.s)*100}%, ${zl(this.l)*100}%${e===1?")":`, ${e})`}`}}));function R1(e){return e=(e||0)%360,e<0?e+360:e}function zl(e){return Math.max(0,Math.min(1,e||0))}function Dp(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}function Op(e,t,r,o,n){var s=e*e,i=s*e;return((1-3*e+3*s-i)*t+(4-6*s+3*i)*r+(1+3*e+3*s-3*i)*o+i*n)/6}function D1(e){var t=e.length-1;return function(r){var o=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),n=e[o],s=e[o+1],i=o>0?e[o-1]:2*n-s,a=o<t-1?e[o+2]:2*s-n;return Op((r-o/t)*t,i,n,s,a)}}function O1(e){var t=e.length;return function(r){var o=Math.floor(((r%=1)<0?++r:r)*t),n=e[(o+t-1)%t],s=e[o%t],i=e[(o+1)%t],a=e[(o+2)%t];return Op((r-o/t)*t,n,s,i,a)}}var Pp=e=>()=>e;function BF(e,t){return function(r){return e+r*t}}function UF(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(o){return Math.pow(e+o*t,r)}}function P1(e){return(e=+e)==1?ql:function(t,r){return r-t?UF(t,r,e):Pp(isNaN(t)?r:t)}}function ql(e,t){var r=t-e;return r?BF(e,r):Pp(isNaN(e)?t:e)}var Kl=function e(t){var r=P1(t);function o(n,s){var i=r((n=fn(n)).r,(s=fn(s)).r),a=r(n.g,s.g),l=r(n.b,s.b),u=ql(n.opacity,s.opacity);return function(c){return n.r=i(c),n.g=a(c),n.b=l(c),n.opacity=u(c),n+""}}return o.gamma=e,o}(1);function M1(e){return function(t){var r=t.length,o=new Array(r),n=new Array(r),s=new Array(r),i,a;for(i=0;i<r;++i)a=fn(t[i]),o[i]=a.r||0,n[i]=a.g||0,s[i]=a.b||0;return o=e(o),n=e(n),s=e(s),a.opacity=1,function(l){return a.r=o(l),a.g=n(l),a.b=s(l),a+""}}}var VF=M1(D1),WF=M1(O1);function ne(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}var Lp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Mp=new RegExp(Lp.source,"g");function zF(e){return function(){return e}}function GF(e){return function(t){return e(t)+""}}function Bp(e,t){var r=Lp.lastIndex=Mp.lastIndex=0,o,n,s,i=-1,a=[],l=[];for(e=e+"",t=t+"";(o=Lp.exec(e))&&(n=Mp.exec(t));)(s=n.index)>r&&(s=t.slice(r,s),a[i]?a[i]+=s:a[++i]=s),(o=o[0])===(n=n[0])?a[i]?a[i]+=n:a[++i]=n:(a[++i]=null,l.push({i,x:ne(o,n)})),r=Mp.lastIndex;return r<t.length&&(s=t.slice(r),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?GF(l[0].x):zF(t):(t=l.length,function(u){for(var c=0,p;c<t;++c)a[(p=l[c]).i]=p.x(u);return a.join("")})}var L1=180/Math.PI,Xl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Up(e,t,r,o,n,s){var i,a,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*r+t*o)&&(r-=e*l,o-=t*l),(a=Math.sqrt(r*r+o*o))&&(r/=a,o/=a,l/=a),e*o<t*r&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:s,rotate:Math.atan2(t,e)*L1,skewX:Math.atan(l)*L1,scaleX:i,scaleY:a}}var jl;function B1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Xl:Up(t.a,t.b,t.c,t.d,t.e,t.f)}function U1(e){return e==null?Xl:(jl||(jl=document.createElementNS("http://www.w3.org/2000/svg","g")),jl.setAttribute("transform",e),(e=jl.transform.baseVal.consolidate())?(e=e.matrix,Up(e.a,e.b,e.c,e.d,e.e,e.f)):Xl)}function V1(e,t,r,o){function n(u){return u.length?u.pop()+" ":""}function s(u,c,p,f,h,m){if(u!==p||c!==f){var y=h.push("translate(",null,t,null,r);m.push({i:y-4,x:ne(u,p)},{i:y-2,x:ne(c,f)})}else(p||f)&&h.push("translate("+p+t+f+r)}function i(u,c,p,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:p.push(n(p)+"rotate(",null,o)-2,x:ne(u,c)})):c&&p.push(n(p)+"rotate("+c+o)}function a(u,c,p,f){u!==c?f.push({i:p.push(n(p)+"skewX(",null,o)-2,x:ne(u,c)}):c&&p.push(n(p)+"skewX("+c+o)}function l(u,c,p,f,h,m){if(u!==p||c!==f){var y=h.push(n(h)+"scale(",null,",",null,")");m.push({i:y-4,x:ne(u,p)},{i:y-2,x:ne(c,f)})}else(p!==1||f!==1)&&h.push(n(h)+"scale("+p+","+f+")")}return function(u,c){var p=[],f=[];return u=e(u),c=e(c),s(u.translateX,u.translateY,c.translateX,c.translateY,p,f),i(u.rotate,c.rotate,p,f),a(u.skewX,c.skewX,p,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,p,f),u=c=null,function(h){for(var m=-1,y=f.length,x;++m<y;)p[(x=f[m]).i]=x.x(h);return p.join("")}}}var Vp=V1(B1,"px, ","px)","deg)"),Wp=V1(U1,", ",")",")");var dn=0,hs=0,ds=0,z1=1e3,Yl,ms,Ql=0,co=0,Zl=0,gs=typeof performance=="object"&&performance.now?performance:Date,G1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ys(){return co||(G1(HF),co=gs.now()+Zl)}function HF(){co=0}function xs(){this._call=this._time=this._next=null}xs.prototype=hn.prototype={constructor:xs,restart:function(e,t,r){if(typeof e!="function")throw new TypeError("callback is not a function");r=(r==null?ys():+r)+(t==null?0:+t),!this._next&&ms!==this&&(ms?ms._next=this:Yl=this,ms=this),this._call=e,this._time=r,zp()},stop:function(){this._call&&(this._call=null,this._time=1/0,zp())}};function hn(e,t,r){var o=new xs;return o.restart(e,t,r),o}function H1(){ys(),++dn;for(var e=Yl,t;e;)(t=co-e._time)>=0&&e._call.call(void 0,t),e=e._next;--dn}function W1(){co=(Ql=gs.now())+Zl,dn=hs=0;try{H1()}finally{dn=0,KF(),co=0}}function qF(){var e=gs.now(),t=e-Ql;t>z1&&(Zl-=t,Ql=e)}function KF(){for(var e,t=Yl,r,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(r=t._next,t._next=null,t=e?e._next=r:Yl=r);ms=e,zp(o)}function zp(e){if(!dn){hs&&(hs=clearTimeout(hs));var t=e-co;t>24?(e<1/0&&(hs=setTimeout(W1,e-gs.now()-Zl)),ds&&(ds=clearInterval(ds))):(ds||(Ql=gs.now(),ds=setInterval(qF,z1)),dn=1,G1(W1))}}function Jl(e,t,r){var o=new xs;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,r),o}var XF=so("start","end","cancel","interrupt"),jF=[],X1=0,q1=1,eu=2,tu=3,K1=4,ru=5,ws=6;function Er(e,t,r,o,n,s){var i=e.__transition;if(!i)e.__transition={};else if(r in i)return;YF(e,r,{name:t,index:o,group:n,on:XF,tween:jF,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:X1})}function bs(e,t){var r=_t(e,t);if(r.state>X1)throw new Error("too late; already scheduled");return r}function Dt(e,t){var r=_t(e,t);if(r.state>tu)throw new Error("too late; already running");return r}function _t(e,t){var r=e.__transition;if(!r||!(r=r[t]))throw new Error("transition not found");return r}function YF(e,t,r){var o=e.__transition,n;o[t]=r,r.timer=hn(s,0,r.time);function s(u){r.state=q1,r.timer.restart(i,r.delay,r.time),r.delay<=u&&i(u-r.delay)}function i(u){var c,p,f,h;if(r.state!==q1)return l();for(c in o)if(h=o[c],h.name===r.name){if(h.state===tu)return Jl(i);h.state===K1?(h.state=ws,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete o[c]):+c<t&&(h.state=ws,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete o[c])}if(Jl(function(){r.state===tu&&(r.state=K1,r.timer.restart(a,r.delay,r.time),a(u))}),r.state=eu,r.on.call("start",e,e.__data__,r.index,r.group),r.state===eu){for(r.state=tu,n=new Array(f=r.tween.length),c=0,p=-1;c<f;++c)(h=r.tween[c].value.call(e,e.__data__,r.index,r.group))&&(n[++p]=h);n.length=p+1}}function a(u){for(var c=u<r.duration?r.ease.call(null,u/r.duration):(r.timer.restart(l),r.state=ru,1),p=-1,f=n.length;++p<f;)n[p].call(e,c);r.state===ru&&(r.on.call("end",e,e.__data__,r.index,r.group),l())}function l(){r.state=ws,r.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function ou(e,t){var r=e.__transition,o,n,s=!0,i;if(r){t=t==null?null:t+"";for(i in r){if((o=r[i]).name!==t){s=!1;continue}n=o.state>eu&&o.state<ru,o.state=ws,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete r[i]}s&&delete e.__transition}}function j1(e){return this.each(function(){ou(this,e)})}function QF(e,t){var r,o;return function(){var n=Dt(this,e),s=n.tween;if(s!==r){o=r=s;for(var i=0,a=o.length;i<a;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function ZF(e,t,r){var o,n;if(typeof r!="function")throw new Error;return function(){var s=Dt(this,e),i=s.tween;if(i!==o){n=(o=i).slice();for(var a={name:t,value:r},l=0,u=n.length;l<u;++l)if(n[l].name===t){n[l]=a;break}l===u&&n.push(a)}s.tween=n}}function Y1(e,t){var r=this._id;if(e+="",arguments.length<2){for(var o=_t(this.node(),r).tween,n=0,s=o.length,i;n<s;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?QF:ZF)(r,e,t))}function mn(e,t,r){var o=e._id;return e.each(function(){var n=Dt(this,o);(n.value||(n.value={}))[t]=r.apply(this,arguments)}),function(n){return _t(n,o).value[t]}}function nu(e,t){var r;return(typeof t=="number"?ne:t instanceof Tr?Kl:(r=Tr(t))?(t=r,Kl):Bp)(e,t)}function JF(e){return function(){this.removeAttribute(e)}}function tD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function eD(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttribute(e);return i===n?null:i===o?s:s=t(o=i,r)}}function rD(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?s:s=t(o=i,r)}}function oD(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function nD(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function Q1(e,t){var r=nr(e),o=r==="transform"?Wp:nu;return this.attrTween(e,typeof t=="function"?(r.local?nD:oD)(r,o,mn(this,"attr."+e,t)):t==null?(r.local?tD:JF)(r):(r.local?rD:eD)(r,o,t))}function sD(e,t){return function(r){this.setAttribute(e,t.call(this,r))}}function iD(e,t){return function(r){this.setAttributeNS(e.space,e.local,t.call(this,r))}}function aD(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&iD(e,s)),r}return n._value=t,n}function lD(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&sD(e,s)),r}return n._value=t,n}function Z1(e,t){var r="attr."+e;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;var o=nr(e);return this.tween(r,(o.local?aD:lD)(o,t))}function uD(e,t){return function(){bs(this,e).delay=+t.apply(this,arguments)}}function cD(e,t){return t=+t,function(){bs(this,e).delay=t}}function J1(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?uD:cD)(t,e)):_t(this.node(),t).delay}function pD(e,t){return function(){Dt(this,e).duration=+t.apply(this,arguments)}}function fD(e,t){return t=+t,function(){Dt(this,e).duration=t}}function tC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?pD:fD)(t,e)):_t(this.node(),t).duration}function dD(e,t){if(typeof t!="function")throw new Error;return function(){Dt(this,e).ease=t}}function eC(e){var t=this._id;return arguments.length?this.each(dD(t,e)):_t(this.node(),t).ease}function hD(e,t){return function(){var r=t.apply(this,arguments);if(typeof r!="function")throw new Error;Dt(this,e).ease=r}}function rC(e){if(typeof e!="function")throw new Error;return this.each(hD(this._id,e))}function oC(e){typeof e!="function"&&(e=is(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,u=0;u<i;++u)(l=s[u])&&e.call(l,l.__data__,u,s)&&a.push(l);return new Xt(o,this._parents,this._name,this._id)}function nC(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,r=e._groups,o=t.length,n=r.length,s=Math.min(o,n),i=new Array(o),a=0;a<s;++a)for(var l=t[a],u=r[a],c=l.length,p=i[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(p[h]=f);for(;a<o;++a)i[a]=t[a];return new Xt(i,this._parents,this._name,this._id)}function mD(e){return(e+"").trim().split(/^|\s+/).every(function(t){var r=t.indexOf(".");return r>=0&&(t=t.slice(0,r)),!t||t==="start"})}function gD(e,t,r){var o,n,s=mD(t)?bs:Dt;return function(){var i=s(this,e),a=i.on;a!==o&&(n=(o=a).copy()).on(t,r),i.on=n}}function sC(e,t){var r=this._id;return arguments.length<2?_t(this.node(),r).on.on(e):this.each(gD(r,e,t))}function xD(e){return function(){var t=this.parentNode;for(var r in this.__transition)if(+r!==e)return;t&&t.removeChild(this)}}function iC(){return this.on("end.remove",xD(this._id))}function aC(e){var t=this._name,r=this._id;typeof e!="function"&&(e=io(e));for(var o=this._groups,n=o.length,s=new Array(n),i=0;i<n;++i)for(var a=o[i],l=a.length,u=s[i]=new Array(l),c,p,f=0;f<l;++f)(c=a[f])&&(p=e.call(c,c.__data__,f,a))&&("__data__"in c&&(p.__data__=c.__data__),u[f]=p,Er(u[f],t,r,f,u,_t(c,r)));return new Xt(s,this._parents,t,r)}function lC(e){var t=this._name,r=this._id;typeof e!="function"&&(e=ss(e));for(var o=this._groups,n=o.length,s=[],i=[],a=0;a<n;++a)for(var l=o[a],u=l.length,c,p=0;p<u;++p)if(c=l[p]){for(var f=e.call(c,c.__data__,p,l),h,m=_t(c,r),y=0,x=f.length;y<x;++y)(h=f[y])&&Er(h,t,r,y,f,m);s.push(f),i.push(c)}return new Xt(s,i,t,r)}var yD=sr.prototype.constructor;function uC(){return new yD(this._groups,this._parents)}function wD(e,t){var r,o,n;return function(){var s=$r(this,e),i=(this.style.removeProperty(e),$r(this,e));return s===i?null:s===r&&i===o?n:n=t(r=s,o=i)}}function cC(e){return function(){this.style.removeProperty(e)}}function bD(e,t,r){var o,n=r+"",s;return function(){var i=$r(this,e);return i===n?null:i===o?s:s=t(o=i,r)}}function vD(e,t,r){var o,n,s;return function(){var i=$r(this,e),a=r(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),$r(this,e))),i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a))}}function CD(e,t){var r,o,n,s="style."+t,i="end."+s,a;return function(){var l=Dt(this,e),u=l.on,c=l.value[s]==null?a||(a=cC(t)):void 0;(u!==r||n!==c)&&(o=(r=u).copy()).on(i,n=c),l.on=o}}function pC(e,t,r){var o=(e+="")=="transform"?Vp:nu;return t==null?this.styleTween(e,wD(e,o)).on("end.style."+e,cC(e)):typeof t=="function"?this.styleTween(e,vD(e,o,mn(this,"style."+e,t))).each(CD(this._id,e)):this.styleTween(e,bD(e,o,t),r).on("end.style."+e,null)}function SD(e,t,r){return function(o){this.style.setProperty(e,t.call(this,o),r)}}function $D(e,t,r){var o,n;function s(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&SD(e,i,r)),o}return s._value=t,s}function fC(e,t,r){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,$D(e,t,r??""))}function ID(e){return function(){this.textContent=e}}function TD(e){return function(){var t=e(this);this.textContent=t??""}}function dC(e){return this.tween("text",typeof e=="function"?TD(mn(this,"text",e)):ID(e==null?"":e+""))}function ED(e){return function(t){this.textContent=e.call(this,t)}}function _D(e){var t,r;function o(){var n=e.apply(this,arguments);return n!==r&&(t=(r=n)&&ED(n)),t}return o._value=e,o}function hC(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,_D(e))}function mC(){for(var e=this._name,t=this._id,r=su(),o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,u=0;u<a;++u)if(l=i[u]){var c=_t(l,t);Er(l,e,r,u,i,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Xt(o,this._parents,e,r)}function gC(){var e,t,r=this,o=r._id,n=r.size();return new Promise(function(s,i){var a={value:i},l={value:function(){--n===0&&s()}};r.each(function(){var u=Dt(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),u.on=t}),n===0&&s()})}var AD=0;function Xt(e,t,r,o){this._groups=e,this._parents=t,this._name=r,this._id=o}function xC(e){return sr().transition(e)}function su(){return++AD}var ir=sr.prototype;Xt.prototype=xC.prototype={constructor:Xt,select:aC,selectAll:lC,selectChild:ir.selectChild,selectChildren:ir.selectChildren,filter:oC,merge:nC,selection:uC,transition:mC,call:ir.call,nodes:ir.nodes,node:ir.node,size:ir.size,empty:ir.empty,each:ir.each,on:sC,attr:Q1,attrTween:Z1,style:pC,styleTween:fC,text:dC,textTween:hC,remove:iC,tween:Y1,delay:J1,duration:tC,ease:eC,easeVarying:rC,end:gC,[Symbol.iterator]:ir[Symbol.iterator]};function iu(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Gp=3,au=function e(t){t=+t;function r(o){return Math.pow(o,t)}return r.exponent=e,r}(Gp),Hp=function e(t){t=+t;function r(o){return 1-Math.pow(1-o,t)}return r.exponent=e,r}(Gp),yC=function e(t){t=+t;function r(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return r.exponent=e,r}(Gp);function wC(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}function vs(e){return 1-wC(e)}var RD={time:null,delay:0,duration:250,ease:iu};function ND(e,t){for(var r;!(r=e.__transition)||!(r=r[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return r}function bC(e){var t,r;e instanceof Xt?(t=e._id,e=e._name):(t=su(),(r=RD).time=ys(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,u=0;u<a;++u)(l=i[u])&&Er(l,e,t,u,i,r||ND(l,t));return new Xt(o,this._parents,e,t)}sr.prototype.interrupt=j1;sr.prototype.transition=bC;var{abs:zht,max:Ght,min:Hht}=Math;function vC(e){return[+e[0],+e[1]]}function FD(e){return[vC(e[0]),vC(e[1])]}var qht={name:"x",handles:["w","e"].map(qp),input:function(e,t){return e==null?null:[[+e[0],t[0][1]],[+e[1],t[1][1]]]},output:function(e){return e&&[e[0][0],e[1][0]]}},Kht={name:"y",handles:["n","s"].map(qp),input:function(e,t){return e==null?null:[[t[0][0],+e[0]],[t[1][0],+e[1]]]},output:function(e){return e&&[e[0][1],e[1][1]]}},Xht={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(qp),input:function(e){return e==null?null:FD(e)},output:function(e){return e}};function qp(e){return{type:e}}function CC(e){let t=+this._x.call(null,e),r=+this._y.call(null,e);return SC(this.cover(t,r),t,r,e)}function SC(e,t,r,o){if(isNaN(t)||isNaN(r))return e;var n,s=e._root,i={data:o},a=e._x0,l=e._y0,u=e._x1,c=e._y1,p,f,h,m,y,x,g,w;if(!s)return e._root=i,e;for(;s.length;)if((y=t>=(p=(a+u)/2))?a=p:u=p,(x=r>=(f=(l+c)/2))?l=f:c=f,n=s,!(s=s[g=x<<1|y]))return n[g]=i,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&r===m)return i.next=s,n?n[g]=i:e._root=i,e;do n=n?n[g]=new Array(4):e._root=new Array(4),(y=t>=(p=(a+u)/2))?a=p:u=p,(x=r>=(f=(l+c)/2))?l=f:c=f;while((g=x<<1|y)===(w=(m>=f)<<1|h>=p));return n[w]=s,n[g]=i,e}function $C(e){var t,r,o=e.length,n,s,i=new Array(o),a=new Array(o),l=1/0,u=1/0,c=-1/0,p=-1/0;for(r=0;r<o;++r)isNaN(n=+this._x.call(null,t=e[r]))||isNaN(s=+this._y.call(null,t))||(i[r]=n,a[r]=s,n<l&&(l=n),n>c&&(c=n),s<u&&(u=s),s>p&&(p=s));if(l>c||u>p)return this;for(this.cover(l,u).cover(c,p),r=0;r<o;++r)SC(this,i[r],a[r],e[r]);return this}function IC(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,o=this._y0,n=this._x1,s=this._y1;if(isNaN(r))n=(r=Math.floor(e))+1,s=(o=Math.floor(t))+1;else{for(var i=n-r||1,a=this._root,l,u;r>e||e>=n||o>t||t>=s;)switch(u=(t<o)<<1|e<r,l=new Array(4),l[u]=a,a=l,i*=2,u){case 0:n=r+i,s=o+i;break;case 1:r=n-i,s=o+i;break;case 2:n=r+i,o=s-i;break;case 3:r=n-i,o=s-i;break}this._root&&this._root.length&&(this._root=a)}return this._x0=r,this._y0=o,this._x1=n,this._y1=s,this}function TC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function EC(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Rt(e,t,r,o,n){this.node=e,this.x0=t,this.y0=r,this.x1=o,this.y1=n}function _C(e,t,r){var o,n=this._x0,s=this._y0,i,a,l,u,c=this._x1,p=this._y1,f=[],h=this._root,m,y;for(h&&f.push(new Rt(h,n,s,c,p)),r==null?r=1/0:(n=e-r,s=t-r,c=e+r,p=t+r,r*=r);m=f.pop();)if(!(!(h=m.node)||(i=m.x0)>c||(a=m.y0)>p||(l=m.x1)<n||(u=m.y1)<s))if(h.length){var x=(i+l)/2,g=(a+u)/2;f.push(new Rt(h[3],x,g,l,u),new Rt(h[2],i,g,x,u),new Rt(h[1],x,a,l,g),new Rt(h[0],i,a,x,g)),(y=(t>=g)<<1|e>=x)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-y],f[f.length-1-y]=m)}else{var w=e-+this._x.call(null,h.data),C=t-+this._y.call(null,h.data),v=w*w+C*C;if(v<r){var $=Math.sqrt(r=v);n=e-$,s=t-$,c=e+$,p=t+$,o=h.data}}return o}function AC(e){if(isNaN(c=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._x1,u=this._y1,c,p,f,h,m,y,x,g;if(!r)return this;if(r.length)for(;;){if((m=c>=(f=(i+l)/2))?i=f:l=f,(y=p>=(h=(a+u)/2))?a=h:u=h,t=r,!(r=r[x=y<<1|m]))return this;if(!r.length)break;(t[x+1&3]||t[x+2&3]||t[x+3&3])&&(o=t,g=x)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[x]=s:delete t[x],(r=t[0]||t[1]||t[2]||t[3])&&r===(t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[g]=r:this._root=r),this):(this._root=s,this)}function kC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function RC(){return this._root}function NC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function FC(e){var t=[],r,o=this._root,n,s,i,a,l;for(o&&t.push(new Rt(o,this._x0,this._y0,this._x1,this._y1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.x1,l=r.y1)&&o.length){var u=(s+a)/2,c=(i+l)/2;(n=o[3])&&t.push(new Rt(n,u,c,a,l)),(n=o[2])&&t.push(new Rt(n,s,c,u,l)),(n=o[1])&&t.push(new Rt(n,u,i,a,c)),(n=o[0])&&t.push(new Rt(n,s,i,u,c))}return this}function DC(e){var t=[],r=[],o;for(this._root&&t.push(new Rt(this._root,this._x0,this._y0,this._x1,this._y1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.x1,u=o.y1,c=(i+l)/2,p=(a+u)/2;(s=n[0])&&t.push(new Rt(s,i,a,c,p)),(s=n[1])&&t.push(new Rt(s,c,a,l,p)),(s=n[2])&&t.push(new Rt(s,i,p,c,u)),(s=n[3])&&t.push(new Rt(s,c,p,l,u))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.x1,o.y1);return this}function OC(e){return e[0]}function PC(e){return arguments.length?(this._x=e,this):this._x}function MC(e){return e[1]}function LC(e){return arguments.length?(this._y=e,this):this._y}function Cs(e,t,r){var o=new Kp(t??OC,r??MC,NaN,NaN,NaN,NaN);return e==null?o:o.addAll(e)}function Kp(e,t,r,o,n,s){this._x=e,this._y=t,this._x0=r,this._y0=o,this._x1=n,this._y1=s,this._root=void 0}function BC(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var jt=Cs.prototype=Kp.prototype;jt.copy=function(){var e=new Kp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=BC(t),e;for(r=[{source:t,target:e._root=new Array(4)}];t=r.pop();)for(var n=0;n<4;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(4)}):t.target[n]=BC(o));return e};jt.add=CC;jt.addAll=$C;jt.cover=IC;jt.data=TC;jt.extent=EC;jt.find=_C;jt.remove=AC;jt.removeAll=kC;jt.root=RC;jt.size=NC;jt.visit=FC;jt.visitAfter=DC;jt.x=PC;jt.y=LC;function _r(e,t,r){this.k=e,this.x=t,this.y=r}_r.prototype={constructor:_r,scale:function(e){return e===1?this:new _r(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new _r(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Xp=new _r(1,0,0);jp.prototype=_r.prototype;function jp(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Xp;return e.__zoom}function Yp(e,t,r){var o,n=1;e==null&&(e=0),t==null&&(t=0),r==null&&(r=0);function s(){var i,a=o.length,l,u=0,c=0,p=0;for(i=0;i<a;++i)l=o[i],u+=l.x||0,c+=l.y||0,p+=l.z||0;for(u=(u/a-e)*n,c=(c/a-t)*n,p=(p/a-r)*n,i=0;i<a;++i)l=o[i],u&&(l.x-=u),c&&(l.y-=c),p&&(l.z-=p)}return s.initialize=function(i){o=i},s.x=function(i){return arguments.length?(e=+i,s):e},s.y=function(i){return arguments.length?(t=+i,s):t},s.z=function(i){return arguments.length?(r=+i,s):r},s.strength=function(i){return arguments.length?(n=+i,s):n},s}function UC(e){let t=+this._x.call(null,e);return VC(this.cover(t),t,e)}function VC(e,t,r){if(isNaN(t))return e;var o,n=e._root,s={data:r},i=e._x0,a=e._x1,l,u,c,p,f;if(!n)return e._root=s,e;for(;n.length;)if((c=t>=(l=(i+a)/2))?i=l:a=l,o=n,!(n=n[p=+c]))return o[p]=s,e;if(u=+e._x.call(null,n.data),t===u)return s.next=n,o?o[p]=s:e._root=s,e;do o=o?o[p]=new Array(2):e._root=new Array(2),(c=t>=(l=(i+a)/2))?i=l:a=l;while((p=+c)==(f=+(u>=l)));return o[f]=n,o[p]=s,e}function WC(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=1/0,n=-1/0;for(let s=0,i;s<t;++s)isNaN(i=+this._x.call(null,e[s]))||(r[s]=i,i<o&&(o=i),i>n&&(n=i));if(o>n)return this;this.cover(o).cover(n);for(let s=0;s<t;++s)VC(this,r[s],e[s]);return this}function zC(e){if(isNaN(e=+e))return this;var t=this._x0,r=this._x1;if(isNaN(t))r=(t=Math.floor(e))+1;else{for(var o=r-t||1,n=this._root,s,i;t>e||e>=r;)switch(i=+(e<t),s=new Array(2),s[i]=n,n=s,o*=2,i){case 0:r=t+o;break;case 1:t=r-o;break}this._root&&this._root.length&&(this._root=n)}return this._x0=t,this._x1=r,this}function GC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function HC(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function ve(e,t,r){this.node=e,this.x0=t,this.x1=r}function qC(e,t){var r,o=this._x0,n,s,i=this._x1,a=[],l=this._root,u,c;for(l&&a.push(new ve(l,o,i)),t==null?t=1/0:(o=e-t,i=e+t);u=a.pop();)if(!(!(l=u.node)||(n=u.x0)>i||(s=u.x1)<o))if(l.length){var p=(n+s)/2;a.push(new ve(l[1],p,s),new ve(l[0],n,p)),(c=+(e>=p))&&(u=a[a.length-1],a[a.length-1]=a[a.length-1-c],a[a.length-1-c]=u)}else{var f=Math.abs(e-+this._x.call(null,l.data));f<t&&(t=f,o=e-f,i=e+f,r=l.data)}return r}function KC(e){if(isNaN(l=+this._x.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._x1,l,u,c,p,f;if(!r)return this;if(r.length)for(;;){if((c=l>=(u=(i+a)/2))?i=u:a=u,t=r,!(r=r[p=+c]))return this;if(!r.length)break;t[p+1&1]&&(o=t,f=p)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[p]=s:delete t[p],(r=t[0]||t[1])&&r===(t[1]||t[0])&&!r.length&&(o?o[f]=r:this._root=r),this):(this._root=s,this)}function XC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function jC(){return this._root}function YC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function QC(e){var t=[],r,o=this._root,n,s,i;for(o&&t.push(new ve(o,this._x0,this._x1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.x1)&&o.length){var a=(s+i)/2;(n=o[1])&&t.push(new ve(n,a,i)),(n=o[0])&&t.push(new ve(n,s,a))}return this}function ZC(e){var t=[],r=[],o;for(this._root&&t.push(new ve(this._root,this._x0,this._x1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.x1,l=(i+a)/2;(s=n[0])&&t.push(new ve(s,i,l)),(s=n[1])&&t.push(new ve(s,l,a))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.x1);return this}function JC(e){return e[0]}function tS(e){return arguments.length?(this._x=e,this):this._x}function Ss(e,t){var r=new Qp(t??JC,NaN,NaN);return e==null?r:r.addAll(e)}function Qp(e,t,r){this._x=e,this._x0=t,this._x1=r,this._root=void 0}function eS(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var se=Ss.prototype=Qp.prototype;se.copy=function(){var e=new Qp(this._x,this._x0,this._x1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=eS(t),e;for(r=[{source:t,target:e._root=new Array(2)}];t=r.pop();)for(var n=0;n<2;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(2)}):t.target[n]=eS(o));return e};se.add=UC;se.addAll=WC;se.cover=zC;se.data=GC;se.extent=HC;se.find=qC;se.remove=KC;se.removeAll=XC;se.root=jC;se.size=YC;se.visit=QC;se.visitAfter=ZC;se.x=tS;function rS(e){let t=+this._x.call(null,e),r=+this._y.call(null,e),o=+this._z.call(null,e);return oS(this.cover(t,r,o),t,r,o,e)}function oS(e,t,r,o,n){if(isNaN(t)||isNaN(r)||isNaN(o))return e;var s,i=e._root,a={data:n},l=e._x0,u=e._y0,c=e._z0,p=e._x1,f=e._y1,h=e._z1,m,y,x,g,w,C,v,$,T,E,_;if(!i)return e._root=a,e;for(;i.length;)if((v=t>=(m=(l+p)/2))?l=m:p=m,($=r>=(y=(u+f)/2))?u=y:f=y,(T=o>=(x=(c+h)/2))?c=x:h=x,s=i,!(i=i[E=T<<2|$<<1|v]))return s[E]=a,e;if(g=+e._x.call(null,i.data),w=+e._y.call(null,i.data),C=+e._z.call(null,i.data),t===g&&r===w&&o===C)return a.next=i,s?s[E]=a:e._root=a,e;do s=s?s[E]=new Array(8):e._root=new Array(8),(v=t>=(m=(l+p)/2))?l=m:p=m,($=r>=(y=(u+f)/2))?u=y:f=y,(T=o>=(x=(c+h)/2))?c=x:h=x;while((E=T<<2|$<<1|v)===(_=(C>=x)<<2|(w>=y)<<1|g>=m));return s[_]=i,s[E]=a,e}function nS(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=new Float64Array(t),n=new Float64Array(t),s=1/0,i=1/0,a=1/0,l=-1/0,u=-1/0,c=-1/0;for(let p=0,f,h,m,y;p<t;++p)isNaN(h=+this._x.call(null,f=e[p]))||isNaN(m=+this._y.call(null,f))||isNaN(y=+this._z.call(null,f))||(r[p]=h,o[p]=m,n[p]=y,h<s&&(s=h),h>l&&(l=h),m<i&&(i=m),m>u&&(u=m),y<a&&(a=y),y>c&&(c=y));if(s>l||i>u||a>c)return this;this.cover(s,i,a).cover(l,u,c);for(let p=0;p<t;++p)oS(this,r[p],o[p],n[p],e[p]);return this}function sS(e,t,r){if(isNaN(e=+e)||isNaN(t=+t)||isNaN(r=+r))return this;var o=this._x0,n=this._y0,s=this._z0,i=this._x1,a=this._y1,l=this._z1;if(isNaN(o))i=(o=Math.floor(e))+1,a=(n=Math.floor(t))+1,l=(s=Math.floor(r))+1;else{for(var u=i-o||1,c=this._root,p,f;o>e||e>=i||n>t||t>=a||s>r||r>=l;)switch(f=(r<s)<<2|(t<n)<<1|e<o,p=new Array(8),p[f]=c,c=p,u*=2,f){case 0:i=o+u,a=n+u,l=s+u;break;case 1:o=i-u,a=n+u,l=s+u;break;case 2:i=o+u,n=a-u,l=s+u;break;case 3:o=i-u,n=a-u,l=s+u;break;case 4:i=o+u,a=n+u,s=l-u;break;case 5:o=i-u,a=n+u,s=l-u;break;case 6:i=o+u,n=a-u,s=l-u;break;case 7:o=i-u,n=a-u,s=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this}function iS(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function aS(e){return arguments.length?this.cover(+e[0][0],+e[0][1],+e[0][2]).cover(+e[1][0],+e[1][1],+e[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function J(e,t,r,o,n,s,i){this.node=e,this.x0=t,this.y0=r,this.z0=o,this.x1=n,this.y1=s,this.z1=i}function lS(e,t,r,o){var n,s=this._x0,i=this._y0,a=this._z0,l,u,c,p,f,h,m=this._x1,y=this._y1,x=this._z1,g=[],w=this._root,C,v;for(w&&g.push(new J(w,s,i,a,m,y,x)),o==null?o=1/0:(s=e-o,i=t-o,a=r-o,m=e+o,y=t+o,x=r+o,o*=o);C=g.pop();)if(!(!(w=C.node)||(l=C.x0)>m||(u=C.y0)>y||(c=C.z0)>x||(p=C.x1)<s||(f=C.y1)<i||(h=C.z1)<a))if(w.length){var $=(l+p)/2,T=(u+f)/2,E=(c+h)/2;g.push(new J(w[7],$,T,E,p,f,h),new J(w[6],l,T,E,$,f,h),new J(w[5],$,u,E,p,T,h),new J(w[4],l,u,E,$,T,h),new J(w[3],$,T,c,p,f,E),new J(w[2],l,T,c,$,f,E),new J(w[1],$,u,c,p,T,E),new J(w[0],l,u,c,$,T,E)),(v=(r>=E)<<2|(t>=T)<<1|e>=$)&&(C=g[g.length-1],g[g.length-1]=g[g.length-1-v],g[g.length-1-v]=C)}else{var _=e-+this._x.call(null,w.data),N=t-+this._y.call(null,w.data),O=r-+this._z.call(null,w.data),V=_*_+N*N+O*O;if(V<o){var z=Math.sqrt(o=V);s=e-z,i=t-z,a=r-z,m=e+z,y=t+z,x=r+z,n=w.data}}return n}function uS(e){if(isNaN(f=+this._x.call(null,e))||isNaN(h=+this._y.call(null,e))||isNaN(m=+this._z.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._z0,u=this._x1,c=this._y1,p=this._z1,f,h,m,y,x,g,w,C,v,$,T;if(!r)return this;if(r.length)for(;;){if((w=f>=(y=(i+u)/2))?i=y:u=y,(C=h>=(x=(a+c)/2))?a=x:c=x,(v=m>=(g=(l+p)/2))?l=g:p=g,t=r,!(r=r[$=v<<2|C<<1|w]))return this;if(!r.length)break;(t[$+1&7]||t[$+2&7]||t[$+3&7]||t[$+4&7]||t[$+5&7]||t[$+6&7]||t[$+7&7])&&(o=t,T=$)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[$]=s:delete t[$],(r=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&r===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[T]=r:this._root=r),this):(this._root=s,this)}function cS(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function pS(){return this._root}function fS(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function dS(e){var t=[],r,o=this._root,n,s,i,a,l,u,c;for(o&&t.push(new J(o,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.z0,l=r.x1,u=r.y1,c=r.z1)&&o.length){var p=(s+l)/2,f=(i+u)/2,h=(a+c)/2;(n=o[7])&&t.push(new J(n,p,f,h,l,u,c)),(n=o[6])&&t.push(new J(n,s,f,h,p,u,c)),(n=o[5])&&t.push(new J(n,p,i,h,l,f,c)),(n=o[4])&&t.push(new J(n,s,i,h,p,f,c)),(n=o[3])&&t.push(new J(n,p,f,a,l,u,h)),(n=o[2])&&t.push(new J(n,s,f,a,p,u,h)),(n=o[1])&&t.push(new J(n,p,i,a,l,f,h)),(n=o[0])&&t.push(new J(n,s,i,a,p,f,h))}return this}function hS(e){var t=[],r=[],o;for(this._root&&t.push(new J(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.z0,u=o.x1,c=o.y1,p=o.z1,f=(i+u)/2,h=(a+c)/2,m=(l+p)/2;(s=n[0])&&t.push(new J(s,i,a,l,f,h,m)),(s=n[1])&&t.push(new J(s,f,a,l,u,h,m)),(s=n[2])&&t.push(new J(s,i,h,l,f,c,m)),(s=n[3])&&t.push(new J(s,f,h,l,u,c,m)),(s=n[4])&&t.push(new J(s,i,a,m,f,h,p)),(s=n[5])&&t.push(new J(s,f,a,m,u,h,p)),(s=n[6])&&t.push(new J(s,i,h,m,f,c,p)),(s=n[7])&&t.push(new J(s,f,h,m,u,c,p))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.z0,o.x1,o.y1,o.z1);return this}function mS(e){return e[0]}function gS(e){return arguments.length?(this._x=e,this):this._x}function xS(e){return e[1]}function yS(e){return arguments.length?(this._y=e,this):this._y}function wS(e){return e[2]}function bS(e){return arguments.length?(this._z=e,this):this._z}function $s(e,t,r,o){var n=new Zp(t??mS,r??xS,o??wS,NaN,NaN,NaN,NaN,NaN,NaN);return e==null?n:n.addAll(e)}function Zp(e,t,r,o,n,s,i,a,l){this._x=e,this._y=t,this._z=r,this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this._root=void 0}function vS(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var Lt=$s.prototype=Zp.prototype;Lt.copy=function(){var e=new Zp(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=vS(t),e;for(r=[{source:t,target:e._root=new Array(8)}];t=r.pop();)for(var n=0;n<8;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(8)}):t.target[n]=vS(o));return e};Lt.add=rS;Lt.addAll=nS;Lt.cover=sS;Lt.data=iS;Lt.extent=aS;Lt.find=lS;Lt.remove=uS;Lt.removeAll=cS;Lt.root=pS;Lt.size=fS;Lt.visit=dS;Lt.visitAfter=hS;Lt.x=gS;Lt.y=yS;Lt.z=bS;function po(e){return function(){return e}}function Re(e){return(e()-.5)*1e-6}function OD(e){return e.index}function CS(e,t){var r=e.get(t);if(!r)throw new Error("node not found: "+t);return r}function Jp(e){var t=OD,r=f,o,n=po(30),s,i,a,l,u,c,p=1;e==null&&(e=[]);function f(g){return 1/Math.min(l[g.source.index],l[g.target.index])}function h(g){for(var w=0,C=e.length;w<p;++w)for(var v=0,$,T,E,_=0,N=0,O=0,V,z;v<C;++v)$=e[v],T=$.source,E=$.target,_=E.x+E.vx-T.x-T.vx||Re(c),a>1&&(N=E.y+E.vy-T.y-T.vy||Re(c)),a>2&&(O=E.z+E.vz-T.z-T.vz||Re(c)),V=Math.sqrt(_*_+N*N+O*O),V=(V-s[v])/V*g*o[v],_*=V,N*=V,O*=V,E.vx-=_*(z=u[v]),a>1&&(E.vy-=N*z),a>2&&(E.vz-=O*z),T.vx+=_*(z=1-z),a>1&&(T.vy+=N*z),a>2&&(T.vz+=O*z)}function m(){if(i){var g,w=i.length,C=e.length,v=new Map(i.map((T,E)=>[t(T,E,i),T])),$;for(g=0,l=new Array(w);g<C;++g)$=e[g],$.index=g,typeof $.source!="object"&&($.source=CS(v,$.source)),typeof $.target!="object"&&($.target=CS(v,$.target)),l[$.source.index]=(l[$.source.index]||0)+1,l[$.target.index]=(l[$.target.index]||0)+1;for(g=0,u=new Array(C);g<C;++g)$=e[g],u[g]=l[$.source.index]/(l[$.source.index]+l[$.target.index]);o=new Array(C),y(),s=new Array(C),x()}}function y(){if(i)for(var g=0,w=e.length;g<w;++g)o[g]=+r(e[g],g,e)}function x(){if(i)for(var g=0,w=e.length;g<w;++g)s[g]=+n(e[g],g,e)}return h.initialize=function(g,...w){i=g,c=w.find(C=>typeof C=="function")||Math.random,a=w.find(C=>[1,2,3].includes(C))||2,m()},h.links=function(g){return arguments.length?(e=g,m(),h):e},h.id=function(g){return arguments.length?(t=g,h):t},h.iterations=function(g){return arguments.length?(p=+g,h):p},h.strength=function(g){return arguments.length?(r=typeof g=="function"?g:po(+g),y(),h):r},h.distance=function(g){return arguments.length?(n=typeof g=="function"?g:po(+g),x(),h):n},h}function SS(){let e=1;return()=>(e=(1664525*e+1013904223)%4294967296)/4294967296}var $S=3;function lu(e){return e.x}function tf(e){return e.y}function IS(e){return e.z}var PD=10,MD=Math.PI*(3-Math.sqrt(5)),LD=Math.PI*20/(9+Math.sqrt(221));function ef(e,t){t=t||2;var r=Math.min($S,Math.max(1,Math.round(t))),o,n=1,s=.001,i=1-Math.pow(s,1/300),a=0,l=.6,u=new Map,c=hn(h),p=so("tick","end"),f=SS();e==null&&(e=[]);function h(){m(),p.call("tick",o),n<s&&(c.stop(),p.call("end",o))}function m(g){var w,C=e.length,v;g===void 0&&(g=1);for(var $=0;$<g;++$)for(n+=(a-n)*i,u.forEach(function(T){T(n)}),w=0;w<C;++w)v=e[w],v.fx==null?v.x+=v.vx*=l:(v.x=v.fx,v.vx=0),r>1&&(v.fy==null?v.y+=v.vy*=l:(v.y=v.fy,v.vy=0)),r>2&&(v.fz==null?v.z+=v.vz*=l:(v.z=v.fz,v.vz=0));return o}function y(){for(var g=0,w=e.length,C;g<w;++g){if(C=e[g],C.index=g,C.fx!=null&&(C.x=C.fx),C.fy!=null&&(C.y=C.fy),C.fz!=null&&(C.z=C.fz),isNaN(C.x)||r>1&&isNaN(C.y)||r>2&&isNaN(C.z)){var v=PD*(r>2?Math.cbrt(.5+g):r>1?Math.sqrt(.5+g):g),$=g*MD,T=g*LD;r===1?C.x=v:r===2?(C.x=v*Math.cos($),C.y=v*Math.sin($)):(C.x=v*Math.sin($)*Math.cos(T),C.y=v*Math.cos($),C.z=v*Math.sin($)*Math.sin(T))}(isNaN(C.vx)||r>1&&isNaN(C.vy)||r>2&&isNaN(C.vz))&&(C.vx=0,r>1&&(C.vy=0),r>2&&(C.vz=0))}}function x(g){return g.initialize&&g.initialize(e,f,r),g}return y(),o={tick:m,restart:function(){return c.restart(h),o},stop:function(){return c.stop(),o},numDimensions:function(g){return arguments.length?(r=Math.min($S,Math.max(1,Math.round(g))),u.forEach(x),o):r},nodes:function(g){return arguments.length?(e=g,y(),u.forEach(x),o):e},alpha:function(g){return arguments.length?(n=+g,o):n},alphaMin:function(g){return arguments.length?(s=+g,o):s},alphaDecay:function(g){return arguments.length?(i=+g,o):+i},alphaTarget:function(g){return arguments.length?(a=+g,o):a},velocityDecay:function(g){return arguments.length?(l=1-g,o):1-l},randomSource:function(g){return arguments.length?(f=g,u.forEach(x),o):f},force:function(g,w){return arguments.length>1?(w==null?u.delete(g):u.set(g,x(w)),o):u.get(g)},find:function(){var g=Array.prototype.slice.call(arguments),w=g.shift()||0,C=(r>1?g.shift():null)||0,v=(r>2?g.shift():null)||0,$=g.shift()||1/0,T=0,E=e.length,_,N,O,V,z,ct;for($*=$,T=0;T<E;++T)z=e[T],_=w-z.x,N=C-(z.y||0),O=v-(z.z||0),V=_*_+N*N+O*O,V<$&&(ct=z,$=V);return ct},on:function(g,w){return arguments.length>1?(p.on(g,w),o):p.on(g)}}}function rf(){var e,t,r,o,n,s=po(-30),i,a=1,l=1/0,u=.81;function c(m){var y,x=e.length,g=(t===1?Ss(e,lu):t===2?Cs(e,lu,tf):t===3?$s(e,lu,tf,IS):null).visitAfter(f);for(n=m,y=0;y<x;++y)r=e[y],g.visit(h)}function p(){if(e){var m,y=e.length,x;for(i=new Array(y),m=0;m<y;++m)x=e[m],i[x.index]=+s(x,m,e)}}function f(m){var y=0,x,g,w=0,C,v,$,T,E=m.length;if(E){for(C=v=$=T=0;T<E;++T)(x=m[T])&&(g=Math.abs(x.value))&&(y+=x.value,w+=g,C+=g*(x.x||0),v+=g*(x.y||0),$+=g*(x.z||0));y*=Math.sqrt(4/E),m.x=C/w,t>1&&(m.y=v/w),t>2&&(m.z=$/w)}else{x=m,x.x=x.data.x,t>1&&(x.y=x.data.y),t>2&&(x.z=x.data.z);do y+=i[x.data.index];while(x=x.next)}m.value=y}function h(m,y,x,g,w){if(!m.value)return!0;var C=[x,g,w][t-1],v=m.x-r.x,$=t>1?m.y-r.y:0,T=t>2?m.z-r.z:0,E=C-y,_=v*v+$*$+T*T;if(E*E/u<_)return _<l&&(v===0&&(v=Re(o),_+=v*v),t>1&&$===0&&($=Re(o),_+=$*$),t>2&&T===0&&(T=Re(o),_+=T*T),_<a&&(_=Math.sqrt(a*_)),r.vx+=v*m.value*n/_,t>1&&(r.vy+=$*m.value*n/_),t>2&&(r.vz+=T*m.value*n/_)),!0;if(m.length||_>=l)return;(m.data!==r||m.next)&&(v===0&&(v=Re(o),_+=v*v),t>1&&$===0&&($=Re(o),_+=$*$),t>2&&T===0&&(T=Re(o),_+=T*T),_<a&&(_=Math.sqrt(a*_)));do m.data!==r&&(E=i[m.data.index]*n/_,r.vx+=v*E,t>1&&(r.vy+=$*E),t>2&&(r.vz+=T*E));while(m=m.next)}return c.initialize=function(m,...y){e=m,o=y.find(x=>typeof x=="function")||Math.random,t=y.find(x=>[1,2,3].includes(x))||2,p()},c.strength=function(m){return arguments.length?(s=typeof m=="function"?m:po(+m),p(),c):s},c.distanceMin=function(m){return arguments.length?(a=m*m,c):Math.sqrt(a)},c.distanceMax=function(m){return arguments.length?(l=m*m,c):Math.sqrt(l)},c.theta=function(m){return arguments.length?(u=m*m,c):Math.sqrt(u)},c}var uu=window,cu=uu.ShadowRoot&&(uu.ShadyCSS===void 0||uu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,of=Symbol(),TS=new WeakMap,Is=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==of)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(cu&&t===void 0){let o=r!==void 0&&r.length===1;o&&(t=TS.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&TS.set(r,t))}return t}toString(){return this.cssText}},ES=e=>new Is(typeof e=="string"?e:e+"",void 0,of),nf=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Is(r,e,of)},sf=(e,t)=>{cu?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let o=document.createElement("style"),n=uu.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},pu=cu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let o of t.cssRules)r+=o.cssText;return ES(r)})(e):e;var af,fu=window,_S=fu.trustedTypes,UD=_S?_S.emptyScript:"",AS=fu.reactiveElementPolyfillSupport,uf={toAttribute(e,t){switch(t){case Boolean:e=e?UD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},kS=(e,t)=>t!==e&&(t==t||e==e),lf={attribute:!0,type:String,converter:uf,reflect:!1,hasChanged:kS},ar=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,o)=>{let n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=lf){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){let s=this[t];this[r]=n,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lf}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)r.unshift(pu(n))}else t!==void 0&&r.push(pu(t));return r}static _$Ep(t,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return sf(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=lf){var n;let s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){let i=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:uf).toAttribute(r,o.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var o;let n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){let i=n.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?i.converter:uf;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||kS)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ar.finalized=!0,ar.elementProperties=new Map,ar.elementStyles=[],ar.shadowRootOptions={mode:"open"},AS?.({ReactiveElement:ar}),((af=fu.reactiveElementVersions)!==null&&af!==void 0?af:fu.reactiveElementVersions=[]).push("1.6.1");var cf,du=window,xn=du.trustedTypes,RS=xn?xn.createPolicy("lit-html",{createHTML:e=>e}):void 0,lr=`lit$${(Math.random()+"").slice(9)}$`,pf="?"+lr,VD=`<${pf}>`,yn=document,Es=(e="")=>yn.createComment(e),_s=e=>e===null||typeof e!="object"&&typeof e!="function",LS=Array.isArray,BS=e=>LS(e)||typeof e?.[Symbol.iterator]=="function",Ts=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,NS=/-->/g,FS=/>/g,fo=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),DS=/'/g,OS=/"/g,US=/^(?:script|style|textarea|title)$/i,VS=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),kr=VS(1),Ge=VS(2),Ne=Symbol.for("lit-noChange"),mt=Symbol.for("lit-nothing"),PS=new WeakMap,gn=yn.createTreeWalker(yn,129,null,!1),WS=(e,t)=>{let r=e.length-1,o=[],n,s=t===2?"<svg>":"",i=Ts;for(let l=0;l<r;l++){let u=e[l],c,p,f=-1,h=0;for(;h<u.length&&(i.lastIndex=h,p=i.exec(u),p!==null);)h=i.lastIndex,i===Ts?p[1]==="!--"?i=NS:p[1]!==void 0?i=FS:p[2]!==void 0?(US.test(p[2])&&(n=RegExp("</"+p[2],"g")),i=fo):p[3]!==void 0&&(i=fo):i===fo?p[0]===">"?(i=n??Ts,f=-1):p[1]===void 0?f=-2:(f=i.lastIndex-p[2].length,c=p[1],i=p[3]===void 0?fo:p[3]==='"'?OS:DS):i===OS||i===DS?i=fo:i===NS||i===FS?i=Ts:(i=fo,n=void 0);let m=i===fo&&e[l+1].startsWith("/>")?" ":"";s+=i===Ts?u+VD:f>=0?(o.push(c),u.slice(0,f)+"$lit$"+u.slice(f)+lr+m):u+lr+(f===-2?(o.push(void 0),l):m)}let a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[RS!==void 0?RS.createHTML(a):a,o]},ho=class{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[u,c]=WS(t,r);if(this.el=ho.createElement(u,o),gn.currentNode=this.el.content,r===2){let p=this.el.content,f=p.firstChild;f.remove(),p.append(...f.childNodes)}for(;(n=gn.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){let p=[];for(let f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(lr)){let h=c[i++];if(p.push(f),h!==void 0){let m=n.getAttribute(h.toLowerCase()+"$lit$").split(lr),y=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?mu:y[1]==="?"?gu:y[1]==="@"?xu:go})}else l.push({type:6,index:s})}for(let f of p)n.removeAttribute(f)}if(US.test(n.tagName)){let p=n.textContent.split(lr),f=p.length-1;if(f>0){n.textContent=xn?xn.emptyScript:"";for(let h=0;h<f;h++)n.append(p[h],Es()),gn.nextNode(),l.push({type:2,index:++s});n.append(p[f],Es())}}}else if(n.nodeType===8)if(n.data===pf)l.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(lr,p+1))!==-1;)l.push({type:7,index:s}),p+=lr.length-1}s++}}static createElement(t,r){let o=yn.createElement("template");return o.innerHTML=t,o}};function mo(e,t,r=e,o){var n,s,i,a;if(t===Ne)return t;let l=o!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[o]:r._$Cl,u=_s(t)?void 0:t._$litDirective$;return l?.constructor!==u&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(e),l._$AT(e,r,o)),o!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=mo(e,l._$AS(e,t.values),l,o)),t}var hu=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;let{el:{content:o},parts:n}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:yn).importNode(o,!0);gn.currentNode=s;let i=gn.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new Ar(i,i.nextSibling,this,t):u.type===1?c=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(c=new yu(i,this,t)),this.u.push(c),u=n[++l]}a!==u?.index&&(i=gn.nextNode(),a++)}return s}p(t){let r=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},Ar=class{constructor(t,r,o,n){var s;this.type=2,this._$AH=mt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cm=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=mo(this,t,r),_s(t)?t===mt||t==null||t===""?(this._$AH!==mt&&this._$AR(),this._$AH=mt):t!==this._$AH&&t!==Ne&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):BS(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==mt&&_s(this._$AH)?this._$AA.nextSibling.data=t:this.T(yn.createTextNode(t)),this._$AH=t}$(t){var r;let{values:o,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ho.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.p(o);else{let i=new hu(s,this),a=i.v(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let r=PS.get(t.strings);return r===void 0&&PS.set(t.strings,r=new ho(t)),r}k(t){LS(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,n=0;for(let s of t)n===r.length?r.push(o=new Ar(this.O(Es()),this.O(Es()),this,this.options)):o=r[n],o._$AI(s),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},go=class{constructor(t,r,o,n,s){this.type=1,this._$AH=mt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=mt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){let s=this.strings,i=!1;if(s===void 0)t=mo(this,t,r,0),i=!_s(t)||t!==this._$AH&&t!==Ne,i&&(this._$AH=t);else{let a=t,l,u;for(t=s[0],l=0;l<s.length-1;l++)u=mo(this,a[o+l],r,l),u===Ne&&(u=this._$AH[l]),i||(i=!_s(u)||u!==this._$AH[l]),u===mt?t=mt:t!==mt&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}i&&!n&&this.j(t)}j(t){t===mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mu=class extends go{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===mt?void 0:t}},WD=xn?xn.emptyScript:"",gu=class extends go{constructor(){super(...arguments),this.type=4}j(t){t&&t!==mt?this.element.setAttribute(this.name,WD):this.element.removeAttribute(this.name)}},xu=class extends go{constructor(t,r,o,n,s){super(t,r,o,n,s),this.type=5}_$AI(t,r=this){var o;if((t=(o=mo(this,t,r,0))!==null&&o!==void 0?o:mt)===Ne)return;let n=this._$AH,s=t===mt&&n!==mt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==mt&&(n===mt||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},yu=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){mo(this,t)}},zS={P:"$lit$",A:lr,M:pf,C:1,L:WS,R:hu,D:BS,V:mo,I:Ar,H:go,N:gu,U:xu,B:mu,F:yu},MS=du.litHtmlPolyfillSupport;MS?.(ho,Ar),((cf=du.litHtmlVersions)!==null&&cf!==void 0?cf:du.litHtmlVersions=[]).push("2.6.1");var GS=(e,t,r)=>{var o,n;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:t,i=s._$litPart$;if(i===void 0){let a=(n=r?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=i=new Ar(t.insertBefore(Es(),a),a,void 0,r??{})}return i._$AI(e),i};var ff,df;var Rr=class extends ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=GS(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ne}};Rr.finalized=!0,Rr._$litElement$=!0,(ff=globalThis.litElementHydrateSupport)===null||ff===void 0||ff.call(globalThis,{LitElement:Rr});var HS=globalThis.litElementPolyfillSupport;HS?.({LitElement:Rr});((df=globalThis.litElementVersions)!==null&&df!==void 0?df:globalThis.litElementVersions=[]).push("3.2.2");var qS=e=>e??mt;var{I:$0t}=zS;var KS=e=>e.strings===void 0;var xo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=e=>(...t)=>({_$litDirective$:e,values:t}),ur=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var As=(e,t)=>{var r,o;let n=e._$AN;if(n===void 0)return!1;for(let s of n)(o=(r=s)._$AO)===null||o===void 0||o.call(r,t,!1),As(s,t);return!0},wu=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},XS=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),HD(t)}};function zD(e){this._$AN!==void 0?(wu(this),this._$AM=e,XS(this)):this._$AM=e}function GD(e,t=!1,r=0){let o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)As(o[s],!1),wu(o[s]);else o!=null&&(As(o,!1),wu(o));else As(this,e)}var HD=e=>{var t,r,o,n;e.type==xo.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=GD),(r=(n=e)._$AQ)!==null&&r!==void 0||(n._$AQ=zD))},wn=class extends ur{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),XS(this),this.isConnected=t._$AU}_$AO(t,r=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),r&&(As(this,t),wu(this))}setValue(t){if(KS(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var jS=()=>new mf,mf=class{},hf=new WeakMap,YS=yo(class extends wn{render(e){return mt}update(e,[t]){var r;let o=t!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=t,this.dt=(r=e.options)===null||r===void 0?void 0:r.host,this.rt(this.ct=e.element)),mt}rt(e){var t;if(typeof this.Y=="function"){let r=(t=this.dt)!==null&&t!==void 0?t:globalThis,o=hf.get(r);o===void 0&&(o=new WeakMap,hf.set(r,o)),o.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),o.set(this.Y,e),e!==void 0&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,r;return typeof this.Y=="function"?(t=hf.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(r=this.Y)===null||r===void 0?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var QS=yo(class extends ur{constructor(e){var t;if(super(e),e.type!==xo.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}let n=e.element.classList;this.nt.forEach(s=>{s in t||(n.remove(s),this.nt.delete(s))});for(let s in t){let i=!!t[s];i===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(i?(n.add(s),this.nt.add(s)):(n.remove(s),this.nt.delete(s)))}return Ne}});var gf=class extends ur{constructor(t){if(super(t),this.partInfo=t,t.type!==xo.ELEMENT)throw new Error("`events()` can only be used in an element.");this.listeners=new Map}setValue(t){this.detachListeners();let r=o=>function(...n){o.bind(this)(...n)}.bind(this.partInfo.ELEMENT);this.listeners={},Object.entries(t).forEach(([o,n])=>this.listeners[o]=r(n)),this.attachListeners()}reconnected(){this.connect()}disconnected(){this.disconnect()}update(t,[{eventMap:r}]){r&&this.setValue(r)}attachListeners(){this.detachListeners();for(let[t,r]of Object.entries(this.listeners))this.partInfo.element.addEventListener(t,r)}detachListeners(){for(let[t,r]of Object.entries(this.listeners))this.partInfo.element.removeEventListener(t,r)}render(){return Ne}connect(){this.attachListeners()}disconnect(){this.detachListeners()}},ZS=yo(gf);var xf=(e,t,r={})=>kr`<svg ${ZS({eventMap:r})} class="${QS({icon:!0,[e]:!0})}" height="${t}" width="${t}" viewBox="0 0 48 48">${qD[e]}</svg>`,qD={eye:Ge`<path d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z">`,noeye:Ge`<path d="m31.45 27.05-2.2-2.2q1.3-3.55-1.35-5.9-2.65-2.35-5.75-1.2l-2.2-2.2q.85-.55 1.9-.8 1.05-.25 2.15-.25 3.55 0 6.025 2.475Q32.5 19.45 32.5 23q0 1.1-.275 2.175-.275 1.075-.775 1.875Zm6.45 6.45-2-2q2.45-1.8 4.275-4.025Q42 25.25 42.85 23q-2.5-5.55-7.5-8.775Q30.35 11 24.5 11q-2.1 0-4.3.4-2.2.4-3.45.95L14.45 10q1.75-.8 4.475-1.4Q21.65 8 24.25 8q7.15 0 13.075 4.075Q43.25 16.15 46 23q-1.3 3.2-3.35 5.85-2.05 2.65-4.75 4.65Zm2.9 11.3-8.4-8.25q-1.75.7-3.95 1.075T24 38q-7.3 0-13.25-4.075T2 23q1-2.6 2.775-5.075T9.1 13.2L2.8 6.9l2.1-2.15L42.75 42.6ZM11.15 15.3q-1.85 1.35-3.575 3.55Q5.85 21.05 5.1 23q2.55 5.55 7.675 8.775Q17.9 35 24.4 35q1.65 0 3.25-.2t2.4-.6l-3.2-3.2q-.55.25-1.35.375T24 31.5q-3.5 0-6-2.45T15.5 23q0-.75.125-1.5T16 20.15Zm15.25 7.1Zm-5.8 2.9Z">`,lightMode:Ge`<path d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z">`,darkMode:Ge`<path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z">`},Q0t=new class extends wn{};var yf=e=>e?.match(/[+\-*/]/)&&!wf(e),wf=e=>e?.match(/^".*"$/);var bf=async(e,t)=>{let r={whitespace:/(?<whitespace>\s+)/,operator:/(?<operator>[+\-*/])/,groupStart:/(?<groupStart>\()/,groupEnd:/(?<groupEnd>\))/,quotedString:/"(?<quotedString>[^"\\]*(?:\\.[^"\\]*)*)"/,number:/(?<number>[0-9]+(?:\.[0-9]+)?(?=[^0-9]|$))/,string:/(?<string>[^\\+\-*/()"]*[^\\+\-*/() ]+)/},o=new RegExp(Object.values(r).map(m=>m.source).join("|"),"g"),s=(m=>[...m.matchAll(o)??{}].flatMap(y=>Object.entries(y?.groups??{}).filter(([,x])=>x!=null).map(([x,g])=>({type:x,val:g}))))(e),i=0,a=()=>s[i++],l=()=>s[i],u=()=>{for(;l()?.type==="whitespace";)a()},c=async()=>{u();let m=a();switch(m.type){case"groupStart":let y=await h();if(u(),a()?.type!=="groupEnd")throw new Error("Expected closing parenthesis");return y;case"quotedString":return await t.lookup(m.val.replace(/\\(.)/g,"$1"));case"number":return await parseFloat(m.val);case"string":return await t.lookup(m.val);default:throw new Error(`Unexpected token: ${m.val}`)}},p=async()=>{u();let m=l();if(m&&m.type==="operator"&&(m.val==="+"||m.val==="-")){i++;let y=await p();return m.val==="+"?y:t.neg(y)}return await c()},f=async()=>{u();let m=await p();for(;;){u();let y=l();if(y&&y.type==="operator"&&(y.val==="*"||y.val==="/")){i++;let x=await p();m=y.val==="*"?t.mul(m,x):t.div(m,x)}else return m}},h=async()=>{u();let m=await f();for(;;){u();let y=l();if(y&&y.type==="operator"&&(y.val==="+"||y.val==="-")){i++;let x=await f();m=y.val==="+"?t.add(m,x):t.sub(m,x)}else return m}};return h().then(m=>m?.array())};var JS=nf`:host{--graph-height:100vh;--graph-width:calc(var(--graph-height) * 4 / 3);--aside-width:min(600px, calc(100vw - var(--graph-width)));--color:black;--background-color:hsl(225, 40%, 93%);--node-fill:hsl(0, 0, calc(50% * (1 - var(--pw, 1))));--node-fill-highlight:hsl(225, 52%, calc(25% + 50% * (1 - var(--pw, 1))));--node-fill-muted:rgb(50% 50% 50%);--link-text-fill:currentColor;--link-rect-fill:var(--background-color);--link-stroke-highlight:rgba(0 0 0 / 1);--link-stroke-muted:rgb(0 0 0 / 0.1);--input-background-color:hsl(225, 40%, 98%);width:100vw;height:100vh;display:grid;grid-auto-flow:column;grid-template-columns:max(300px,var(--aside-width)) auto;font-family:sans-serif;color:var(--color);background-color:var(--background-color);font-size:var(--font-size)}:host(.dark){--brightness:calc(80% + 20% * (1 - var(--pw, 1)));--color:#e7f0ff;--background-color:hsl(240, 15%, 22%);--node-fill:rgb(var(--brightness) var(--brightness) var(--brightness));--node-fill-highlight:hsl(60, 100%, var(--brightness));--node-fill-muted:rgb(50% 50% 50%);--link-stroke-highlight:rgba(100% 100% 100% / 0.7);--link-stroke-muted:rgb(100% 100% 100% / 0.1);--input-background-color:hsl(240, 10%, 24%)}aside{--label-font-size:14px;--text-area-height:300px;--input-area-height:calc(var(--label-font-size) + var(--text-area-height) + var(--gap));--gap:10px;--aside-padding:16px;position:relative;height:100vh;width:var(--aside-wdth);display:grid;grid-auto-flow:row;grid-template-rows:repeat(2,40px) var(--input-area-height) 1fr;padding:var(--aside-padding);gap:var(--gap);overflow:hidden;border-right:1px solid var(--color)}label{display:block;font-size:var(--label-font-size);font-weight:600;line-height:24px;width:100%;white-space:nowrap}table{font-size:14px;font-weight:300}svg.icon{fill:var(--color)}svg.icon.eye,svg.icon.noeye{position:relative;top:4px;right:32px;cursor:pointer}input{appearance:none;border:none;background-color:var(--input-background-color);border-bottom:1px solid var(--color);color:var(--color)}input[type=checkbox]{appearance:none;border:1px solid var(--color);background-color:var(--input-background-color)}input[type=checkbox][checked]{background-color:var(--color);border:1px solid var(--color),inset 6px solid var(--background-color)}textarea{appearance:none;border:1px solid var(--color);background-color:var(--input-background-color);color:var(--color)}input[type=checkbox],input[type=number],input[type=password],input[type=text]{height:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top;font-size:16px}input[type=checkbox]{height:16px;width:16px}input[name=apiKey]{position:relative;width:210px;padding-right:20px}input[name=topWordCount]{width:80px}textarea{display:block;width:calc(100% - var(--aside-padding));height:calc(300px - var(--gap) - var(--label-font-size))}.scroll{overflow:auto;height:auto}table thead tr{top:0;position:sticky}table tbody th{left:0;position:sticky}svg.graph{height:var(--graph-size);width:calc(var(--graph-size) * 4 / 3);display:block;margin:auto;--font-size-base:calc(6px + 1px * var(--pw, 1))}.node,.node circle{fill:var(--node-fill)}.node.highlight,.node.highlight circle{fill:var(--node-fill-highlight)}.node{font-size:11px;font-weight:200;text-anchor:middle;alignment-baseline:baseline;cursor:pointer;transition:fill 250ms ease,font-size 250ms ease;user-select:none}.node.highlight{font-size:13px;font-weight:400}.link .label{display:none}.link text{font-size:7px;font-weight:200;fill:var(--link-text-fill);text-anchor:middle;alignment-baseline:middle;user-select:none;transform:scale(var(--pw,1))}.link rect{fill:var(--link-rect-fill);stroke:none;transform:scale(var(--pw,1))}.link.highlight .label{display:block}.link{stroke-width:.1px;pointer-events:none}.link.highlight{stroke:var(--link-stroke-highlight);stroke-width:.4px;z-index:1}.link.highlight line{animation:scaleLink .3s ease}svg.darkMode,svg.lightMode{position:absolute;top:20px;right:20px;pointer-events:all;cursor:pointer}@keyframes scaleLink{0%{transform:scale(0)}30%{transform:scale(0)}to{transform:scale(1)}}`;var t$=Qe([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]),e$=({eye:e,target:t,up:r})=>{let o=(c,p)=>[c[0]-p[0],c[1]-p[1],c[2]-p[2]],n=(c,p)=>[c[0]/p,c[1]/p,c[2]/p],s=c=>n(c,Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])),i=(c,p)=>[c[1]*p[2]-c[2]*p[1],c[2]*p[0]-c[0]*p[2],c[0]*p[1]-c[1]*p[0]],a=s(o(t,e)),l=s(i(r,a)),u=i(a,l);return Qe([[l[0],l[1],l[2],-l[0]*e[0]-l[1]*e[1]-l[2]*e[2]],[u[0],u[1],u[2],-u[0]*e[0]-u[1]*e[1]-u[2]*e[2]],[a[0],a[1],a[2],-a[0]*e[0]-a[1]*e[1]-a[2]*e[2]],[0,0,0,1]])},r$=({fov:e,aspect:t,near:r,far:o})=>{let n=1/Math.tan(e/2),s=1/(r-o);return Qe([[n/t,0,0,0],[0,n,0,0],[0,0,(r+o)*s,2*r*o*s],[0,0,-1,0]])};var bu=(e,t)=>K(r=>{let o=Math.sin(t),n=Math.cos(t);return ae([[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]],e)}),ks=(e,t)=>K(r=>{let o=Math.sin(t),n=Math.cos(t);return ae([[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]],e)}),o$=(e,{dx:t=0,dy:r=0,dz:o=0})=>K(n=>ae([[1,0,0,-t],[0,1,0,-r],[0,0,1,-o],[0,0,0,1]],e));var n$=(e,{world:t,view:r,projection:o})=>K(n=>ae(ae(o,ae(r,t)),Qe(e,[e.length/4,4]),!1,!0).arraySync());var Sf=(e,t,r)=>Math.max(t,Math.min(r,e)),Z=(...e)=>e.find(t=>t!=null&&!isNaN(t)),KD=(e,t,r,o)=>n=>e(n??Sf((Date.now()-(o??=Date.now()))%(r?t:1/0)/t,0,1));var bn=(e,t,{duration:r=750,ease:o=Hp}={})=>{let n=KD(a=>t(e(o(a))),r);n(0);let s=setInterval(n,1e3/30),i=new Cf;return setTimeout(a=>{clearInterval(s),n(1),i.resolve()},r),i.promise};var vn=(e,t)=>{let r,o=ne(e,t);return n=>{let s=o(n),i=r==null?0:s-r;return r=s,i}};var Cn=e=>+(e?.toFixed(2)??e),vf=class extends Error{},Cf=class{done;promises=[];name;reject;resolve;constructor({signal:t,repeat:r=!1,name:o=""}={}){this.done=!r,this.name=o,t?.on("abort",n=>this.abort()),this.repeat()}get promise(){return this.promises.shift()}abort(){this.done=!0,this.reject(new vf(`Future ${this.name?`${this.name} `:""}aborted`))}async*[Symbol.asyncIterator](){do yield*this.promises,this.promises.length=0;while(!this.done)}repeat(){this.promises.push(new Promise((t,r)=>{this.resolve=o=>{this.done||this.repeat(),t(o)},this.reject=o=>{this.done||this.repeat(),r(o)}}))}},s$=(e,t,r,o=!1)=>{let n=0,s=[];return(...i)=>{if(n===t){o||s.push(i);return}e(...i),++n;let a=()=>{if(s.length){let l=s.shift();e(...l),setTimeout(a,r);return}--n};setTimeout(a,r)}};var pe=1536,Sn={fov:.5,aspect:4/3,near:500,far:900,width:400,height:300},wo={left:-200,right:200,top:-150,bottom:150,near:500,far:900},XD={eye:[0,0,-900],target:[0,0,0],up:[0,1,0]},Rs=class extends Rr{constructor(){super(),this.topWordCount=100,this.forces={charge:-2,link:.8,center:1},this.inputMean={x:0,y:0,w:1},this.svgRef=jS(),this.topWords=[],this.svgDefs=Ge``,this.manageColorScheme(),this.initialized=this.initialize()}shouldUpdate=t=>{t.has("input")&&(this.inputWords=this.input.split(/\n/).filter(i=>i.trim()));let o=["apiKey","inputWords"].some(i=>t.has(i)),s=["showTopWords","topWordCount"].some(i=>t.has(i));return t.get("topWordCount")&&(this.showTopWords=!0),(o||!this.topWords&&s)&&this.updateGraph(),s&&this.drawGraph(),t.has("colorSchemeOverride")&&this.manageColorScheme(),!0};initialize=async t=>{let[r,o]=await Promise.all([this.fetchWords(),this.fetchEmbeddings()]);this.words=r,this.embeddings=o,this.wordIndexes=new Map(this.words.map((n,s)=>[n,s])),this.world=t$.clone(),this.view=e$(XD),this.projection=r$(Sn),this.setupKeys()};setupKeys=t=>{let n=u=>s$(u,30,1e3,!0),s=(u,c)=>n(p=>bn(vn(0,c),f=>this.world=u(this.world,f))),i=u=>n(c=>bn(vn(0,u),p=>this.view=o$(this.view,{dz:p}))),a={ArrowRight:s(ks,-.26),ArrowLeft:s(ks,.26),ArrowDown:s(bu,.26),ArrowUp:s(bu,-.26),"-":i(-100),"+":i(100)},l=new Set(["textarea","input"]);window.addEventListener("keydown",u=>{let[c]=u.composedPath?.()??[u.target];if(!l.has(c?.tagName?.toLowerCase())){let p=a[u.key];p?.(u)}})};manageColorScheme=t=>{let r=t??window.matchMedia("(prefers-color-scheme: dark)");this.colorSchemeMediaListener||(this.colorSchemeMediaListener=this.manageColorScheme.bind(this),r.addEventListener("change",this.colorSchemeMediaListener)),this.colorScheme=this.colorSchemeOverride??(r.matches?"dark":"light"),this.classList[this.colorScheme==="dark"?"add":"remove"]("dark")};fetchWords=t=>fetch("./words").then(r=>r.text()).then(r=>r.split(/\n/).filter(o=>o?.trim().length));fetchEmbeddings=t=>fetch("./embeddings").then(r=>r.arrayBuffer()).then(r=>new Float32Array(r));updateGraph=async t=>{if(!this.apiKey||!this.inputWords?.length)return;let r=this.inputWords.filter(n=>!this.wordIndexes.has(n));r.length&&await this.fetchMissingEmbeddings(r),this.embeddingsTensor??=Qe(this.embeddings,[this.words.length,pe]);let o=new Float32Array(this.inputWords.length*pe);this.inputWords.forEach((n,s)=>{let i=this.wordIndexes.get(n)*pe;o.set(this.embeddings.slice(i,i+pe),s*pe)}),this.scores=K(n=>{let s=Qe(o,[this.inputWords.length,pe]);return pc(this.embeddingsTensor,Jm(s)).arraySync()}),this.drawGraph()};normalizer=t=>async(...r)=>{let o=await t(...r);return It(o,Vm(o))};evaluator={add:this.normalizer(async(t,r)=>X(t,r)),sub:this.normalizer(async(t,r)=>xe(t,r)),mul:this.normalizer(async(t,r)=>q(t,r)),div:this.normalizer(async(t,r)=>It(t,r)),neg:this.normalizer(async t=>Un(t)),lookup:async t=>{let r=this.wordIndexes.get(t)??-1;return r===-1?await this.fetchMissingEmbeddings([t]):this.embeddings.slice(pe*r,pe*(r+1))}};appendEmbeddings=(t,r)=>{let o=new Float32Array(this.embeddings.length+pe*t.length);o.set(this.embeddings),t.forEach((n,s)=>{this.wordIndexes.set(n,this.words.length),this.words.push(n),o.set(r[s].embedding,this.embeddings.length+pe*s)}),this.embeddingsTensor&&(this.embeddingsTensor.dispose(),this.embeddingsTensor=void 0),this.embeddings=o};fetchMissingEmbeddings=async t=>{let r=t.filter(yf),o=[];await Promise.all(r.map(l=>{let u=p=>{};return bf(l,{add:u,sub:u,mul:u,div:u,neg:u,lookup:p=>o.push(p)})}));let n=Array.from(new Set([...t.filter(l=>!yf(l)).map(l=>wf(l)?l.slice(1,-1):l),...o.filter(l=>!this.wordIndexes.has(l))])),s=[];n.length&&(s=(await fetch("https://api.openai.com/v1/embeddings",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"text-embedding-ada-002",input:n})}).then(u=>u.json())).data,this.appendEmbeddings(n,s));let i=await Promise.all(r.map(l=>bf(l,this.evaluator))).then(l=>l.map(u=>({embedding:u})));this.appendEmbeddings(r,i);let a=new Float32Array((n.length+r.length)*pe);for(let[l,u]of n.entries()){let c=t.indexOf(u);c!==-1&&a.set(s[l].embedding,c*pe)}for(let[l,u]of r.entries())a.set(i[l].embedding,t.indexOf(u)*pe);return a};drawGraph=t=>{if(!this.inputWords||!this.scores)return;let r=this.showTopWords?this.scores.map((R,P)=>P).filter(R=>!this.inputWords.includes(this.words[R])).sort((R,P)=>no(this.scores[P])-no(this.scores[R])).slice(0,this.topWordCount):[];this.topWords=[...this.inputWords.map(R=>this.wordIndexes.get(R)),...r].sort((R,P)=>no(this.scores[P])-no(this.scores[R])).map(R=>({wordIndex:R,word:this.words[R],scores:this.scores[R],inputWord:this.inputWords.indexOf(this.words[R])}));let o=({source:R,target:P})=>[(Z(P.tx,P.px,0)+Z(R.tx,R.px,0))/2,(Z(P.ty,P.py,0)+Z(R.ty,R.py,0))/2].map(Cn).join(" "),n=this.inputWords.map(R=>this.topWords.find(P=>P.word===R)),s=this.topWords.flatMap(({scores:R,word:P,wordIndex:ft},At)=>R.flatMap((fe,de)=>{let G=this.topWords[At],wt=n[de],Bt=o({source:G,target:wt});return P===this.inputWords[de]?[]:{source:G,target:wt,score:fe,midpoint:Bt}})),i=this.topWords.reduce((R,{scores:P})=>P.reduce((ft,At)=>({min:Math.min(ft.min,At),max:Math.max(ft.max,At)}),R),{min:1/0,max:-1/0}),a=R=>1-R,l=a(.925),u=1/(a(i.min)-l),c=R=>Sf((a(R)-l)*u,0,1),p=R=>30+160*au(c(R.score));this.forceSim||(this.forceSim=ef(this.topWords,3).force("link",Jp(s).strength(.8).id(R=>R.word).distance(p)).force("charge",rf().strength(-2).distanceMax(85)).force("center",Yp(0,0,0).strength(1)).alpha(.75).alphaDecay(.02).tick(),bn(vn(-180*(Math.PI/180),0),R=>this.world=ks(this.world,R),{ease:vs,duration:1e3}));let f=R=>[R],h=R=>R.wordIndex,m=R=>`${R.source.wordIndex} ${R.target.wordIndex}`,y=Ae(this.svgRef.value),x,g=Np().on("drag",({dx:R,dy:P,defaultPrevented:ft})=>{if(R===0&&P===0)return;let At=ft?.005:.0015,fe={ease:vs,duration:1e3};bn(vn(0,P*At*Math.PI),de=>this.world=bu(this.world,de),fe),bn(vn(0,-R*At*Math.PI),de=>this.world=ks(this.world,de),fe),x={dx:R,dy:P}});y.call(g);let w=y.selectAll("g.link").data(s,m).join("g").classed("link",!0).attr("data-words",m),C=w.selectAll("line").data(f).join("line").attr("stroke",R=>`url(#linkGradient-${R.target.wordIndex})`),v=w.selectAll("g.label").data(f).join("g").classed("label",!0);v.selectAll("rect").data(f).join("rect").attr("x",-12).attr("y",-4).attr("width",24).attr("height",8),v.selectAll("text").data(f).join("text").text(R=>`${R.score}`.slice(0,6)).attr("transform","translate(0 0.25)");let $=Object.fromEntries(y.selectAll("g.node").data().map(R=>[R.wordIndex,R])),T=350,E=R=>150*Math.random(),_=R=>`${Z(R.pw,0)}`,N=R=>`${Z(R.tx,R.px,0)} ${Z(R.ty,R.py,0)}`,O=R=>R.append("g").classed("node",!0).attr("transform",P=>"scale(0) translate(0 0)").attr("transform-origin",N).attr("data-word",h).style("opacity","0").on("click",this.nodeClick.bind(this)).on("mouseenter",this.nodeEnter.bind(this)).on("mouseleave",this.nodeLeave.bind(this)).transition("node enter").duration(T).delay(E).style("opacity","1").attr("transform-origin",P=>N).attr("transform",P=>`scale(${_(P)}) translate(${N(P)})`),V=R=>R.attr("transform-origin",N).attr("transform",P=>(P.tx=P.px=P.ox=$[P.wordIndex].px,P.ty=P.py=P.oy=$[P.wordIndex].py,`scale(${_(P)}) translate(${P.tx} ${P.ty})`)).transition("node update").duration(T).delay(E).attrTween("transform",P=>ft=>(P.tx=P.ox+(Z(P.px,P.ox)-P.ox)*ft,P.ty=P.oy+(Z(P.py,P.oy)-P.oy)*ft,`scale(${_(P)}) translate(${P.tx} ${P.ty})`)).on("end",P=>P.ox=P.oy=P.tx=P.ty=null),z=R=>R.transition("node exit").duration(T).delay(E).style("opacity","0").attr("transform-origin",N).attr("transform",P=>`scale(${_(P)}) translate(${P.px} ${P.py})`).remove(),ct=y.selectAll("g.node").data(this.topWords,h).join(O,V,z).classed("highlight",R=>this.inputWords.includes(R.word));ct.selectAll("text").data(f,h).join("text").text(R=>R.word).attr("transform","translate(0 -2)");let pt=ct.selectAll("circle").data(f,h).join("circle").attr("r",R=>1.25*(R.pw??1));this.forceSim.force("link").links(s).distance(R=>30+160*au(c(R.score))),this.tickInterval&&clearInterval(this.tickInterval);let ht=0;this.fpsInterval&&clearInterval(this.fpsInterval),this.fpsInterval=setInterval(R=>{console.log(`${ht} frames per second`),ht=0},1e3);let gt,Ot=R=>{ht++,this.svgDefs=this.renderSvgDefs();let P=this.inputWords.reduce(({x:G,y:wt,z:Bt,w:bo},i$)=>{let Fe=this.topWords.find(a$=>a$.word===i$)??{};return G+=Z(Fe.tx,Fe.px,Fe.x,0),wt+=Z(Fe.ty,Fe.py,Fe.y,0),Bt+=Z(Fe.tz,Fe.pz,Fe.z,0),bo+=Z(Fe.pw,1),{x:G,y:wt,z:Bt,w:bo}},{x:0,y:0,z:0,w:0});this.inputMean={x:P.x/this.inputWords.length,y:P.y/this.inputWords.length,z:P.z/this.inputWords.length,w:P.w/this.inputWords.length},(!gt||gt.length!==this.topWords.length)&&(gt=new Float32Array(this.topWords.length*4)),this.topWords.forEach(({x:G,y:wt,z:Bt},bo)=>gt.set([G,wt,Bt,1],bo*4));let[ft,At,fe,de]=n$(gt,{world:this.world,view:this.view,projection:this.projection});for(let[G,wt]of this.topWords.entries()){let Bt=de[G];wt.clipped=fe[G]<Sn.near||fe[G]>Sn.far||ft[G]<wo.left||ft[G]>wo.right||At[G]<wo.top||At[G]>wo.bottom,wt.pw=-Cn(Sn.width/Bt),wt.px=Cn(wo.left+Sn.width*((ft[G]/Bt+1)/2)),wt.py=Cn(wo.top+Sn.height*((At[G]/Bt+1)/2))}C.style("display",d.source.clipped||d.target.clipped?"none":null).attr("x1",G=>Z(G.source.tx,G.source.px,0)).attr("y1",G=>Z(G.source.ty,G.source.py,0)).attr("x2",G=>Z(G.target.tx,G.target.px,0)).attr("y2",G=>Z(G.target.ty,G.target.py,0)).attr("transform-origin",o),v.style("display",d.source.clipped||d.target.clipped?"none":null).attr("transform",G=>`translate(${o(G)})`).style("--pw",G=>Cn(Z(G.source.pw+G.target.pw,0)/2)),ct.style("display",d.clipped?"none":null).attr("transform-origin",G=>`${Z(G.tx,G.px,0)} ${Z(G.ty,G.py,0)}`).attr("transform",G=>`scale(${Z(G.pw,0)}) translate(${Z(G.tx,G.px,0)} ${Z(G.ty,G.py,0)})`).style("--pw",G=>Z(G.pw,0)),y.selectAll("g.node, g.link").sort((G,wt)=>{let Bt=G.source?(G.source?.pw+G.target?.pw)/2:G.pw,bo=wt.source?(wt.source?.pw+wt.target?.pw)/2:wt.pw;return Bt-bo})};this.tickInterval=setInterval(Ot,1e3/30),this.forceSim.nodes(this.topWords).alpha(1).restart()};nodeEnter=(t,r)=>{let o=Ae(this.svgRef.value);o.selectAll(".link.highlight").attr("highlight",null),o.selectAll(`.link[data-words~="${r.wordIndex}"]`).filter(({source:n,target:s})=>!t.target.classList.contains("highlight")||n.inputWord!==-1&&s.inputWord!==-1).classed("highlight",!0)};nodeLeave=(t,r)=>{Ae(this.svgRef.value).selectAll(".link.highlight").classed("highlight",null)};nodeClick=(t,r)=>{t.shiftKey?r.inputWord!==-1?this.input=this.input.split(/\n/).filter(o=>o!==r.word).join(`
`):this.input=`${this.input}
${r.word}`:this.input=r.word};change=t=>{let r=t.target.name;switch(t.target.type){case"checkbox":{this[r]=t.target.checked;break}default:{this[r]=t.target.value;break}}};toggleShowApiKey=t=>{this.showApiKey=!this.showApiKey,t.preventDefault(),t.stopPropagation()};viewBox=({left:t,top:r,right:o,bottom:n}={})=>`${t??0} ${r??0} ${(o??0)-(t??0)} ${(n??0)-(r??0)}`;renderSvgDefs=t=>{let r=this.topWords.filter(s=>s.inputWord!==-1),o=r.map(s=>{let{wordIndex:i,px:a,py:l,tx:u,ty:c}=s,p=Z(u,a,0),f=Z(c,l,0);return Ge`<radialGradient id="linkGradient-${i}" cx="${p}" cy="${f}" r="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="transparent"></stop><stop offset="${this.colorScheme==="dark"?45:80}%" stop-color="${this.colorScheme==="dark"?"white":"black"}"></stop></radialGradient>`}),n=r.flatMap((s,i)=>r.slice(i+1).map(a=>{let{wordIndex:l,px:u,py:c,tx:p,ty:f}=s,{wordIndex:h,px:m,py:y,tx:x,ty:g}=a;return Ge`<linearGradient id="linkGradient-${[l,h].sort().join("-")}" x1="${Z(p,u)}" y1="${Z(f,c)}" x2="${Z(x,m)}" y2="${Z(g,y)}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="transparent"></stop><stop offset="59%" stop-color="${this.colorScheme==="dark"?"white":"black"}"></stop><stop offset="100%" stop-color="transparent"></stop></linearGradient>`}));return this.defs=[...o,...n],Ge`${o}${n}`};renderScores=t=>kr`<div class="scroll"><table class="scores"><thead></thead><tr><th></th>${this.inputWords?.map(r=>kr`<th>${r}</th>`)??""}</tr><tbody>${this.topWords?.map(r=>kr`<tr><th>${r.word}</th>${r.scores.map(o=>kr`<td>${o.toFixed(5)}</td>`)}</tr>`)??""}</tbody></table></div>`;render=t=>kr`<aside><label>OpenAI API Key: <input name="apiKey" type="${this.showApiKey?"text":"password"}" @change="${this.change}"> ${xf(this.showApiKey?"noeye":"eye",22,{click:r=>this.toggleShowApiKey(r)})}</label> <label><input name="showTopWords" type="checkbox" @change="${this.change}" ?checked="${this.showTopWords??!1}" .checked="${this.showTopWords??!1}"> Show <input name="topWordCount" type="number" value="${qS(this.topWordCount)}" .value="${this.topWordCount?.toString()??"0"}" @change="${this.change}"> nearest vocabulary words</label> <label>Input: <textarea name="input" @change="${this.change}" .value="${this.input??""}"></textarea></label> <label>Cosine Similarity Scores ${this.renderScores()}</label></aside><main><svg ${YS(this.svgRef)} class="graph" viewBox="${this.viewBox(wo)}"><defs>${this.svgDefs}</defs></svg></main>${xf(this.classList.contains("dark")?"lightMode":"darkMode",36,{click:r=>this.colorSchemeOverride=this.classList.contains("dark")?"light":"dark"})}`};Cu(Rs,"styles",JS),Cu(Rs,"properties",{apiKey:String,input:String,inputWords:Array,showApiKey:Boolean,initialized:Object,words:Array,embeddings:Array,topWords:Array,showTopWords:Boolean,topWordCount:Number,colorSchemeOverride:String,colorScheme:String,svgDefs:Object});customElements.define("s-o",Rs);})();
/*! Bundled license information:@tensorflow/tfjs-core/dist/backends/backend.js:
@tensorflow/tfjs-core/dist/util_base.js:
@tensorflow/tfjs-core/dist/global_util.js:
@tensorflow/tfjs-core/dist/ops/complex.js:
@tensorflow/tfjs-core/dist/ops/clone.js:
@tensorflow/tfjs-core/dist/ops/add.js:
@tensorflow/tfjs-core/dist/ops/floorDiv.js:
@tensorflow/tfjs-core/dist/ops/div.js:
@tensorflow/tfjs-core/dist/ops/mul.js:
@tensorflow/tfjs-core/dist/ops/conv_util.js:
@tensorflow/tfjs-core/dist/ops/reshape.js:
@tensorflow/tfjs-core/dist/ops/mat_mul.js:
@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
@tensorflow/tfjs-core/dist/ops/fill.js:
@tensorflow/tfjs-core/dist/ops/dot.js:
@tensorflow/tfjs-core/dist/ops/elu.js:
@tensorflow/tfjs-core/dist/ops/max.js:
@tensorflow/tfjs-core/dist/ops/pow.js:
@tensorflow/tfjs-core/dist/ops/imag.js:
@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
@tensorflow/tfjs-core/dist/ops/sub.js:
@tensorflow/tfjs-core/dist/ops/maximum.js:
@tensorflow/tfjs-core/dist/ops/prelu.js:
@tensorflow/tfjs-core/dist/ops/real.js:
@tensorflow/tfjs-core/dist/ops/relu.js:
@tensorflow/tfjs-core/dist/ops/relu6.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js:
@tensorflow/tfjs-core/dist/ops/ops.js:
@tensorflow/tfjs-core/dist/ops/rotate_util.js:
@tensorflow/tfjs-core/dist/backends/kernel_impls.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js:
@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js:
@tensorflow/tfjs-backend-cpu/dist/shared.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LeakyRelu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Prelu.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js:
@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sum_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Acos.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Acosh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AddN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/All.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Any.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/arg_min_max.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Asin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Asinh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atan.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atanh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3DGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchToSpaceND.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Bincount.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ClipByValue.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ComplexAbs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropFilter.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropInput.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropFilterV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropInputV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cosh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DenseBincount.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthToSpace.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNative.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Diag.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Dilation2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Elu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/EluGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Erf.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Fill.js:
@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FusedConv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FusedDepthwiseConv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GatherNd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GatherV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsFinite.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsInf.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsNaN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Less.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LinSpace.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Log.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Log1p.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalAnd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalNot.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalOr.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LRN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LRNGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3DGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Min.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Softmax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Multinomial.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/OneHot.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ZerosLike.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/OnesLike.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Pack.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/PadV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Pow.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Range.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reciprocal.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Relu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Relu6.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinear.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinearGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighbor.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighborGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reverse.js:
@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Round.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ScatterNd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Select.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Selu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sign.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sinh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Softplus.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SpaceToBatchND.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseToDense.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SplitV.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Step.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StridedSlice.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tanh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tile.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/TopK.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Unpack.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/UnsortedSegmentSum.js:
@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js:
@tensorflow/tfjs-backend-webgl/dist/index.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/environment.js:
@tensorflow/tfjs-core/dist/util.js:
@tensorflow/tfjs-core/dist/tape.js:
@tensorflow/tfjs-core/dist/tensor.js:
@tensorflow/tfjs-core/dist/types.js:
@tensorflow/tfjs-core/dist/device_util.js:
@tensorflow/tfjs-core/dist/ops/broadcast_util.js:
@tensorflow/tfjs-core/dist/ops/axis_util.js:
@tensorflow/tfjs-core/dist/browser_util.js:
@tensorflow/tfjs-core/dist/ops/concat_util.js:
@tensorflow/tfjs-core/dist/ops/reduce_util.js:
@tensorflow/tfjs-core/dist/index.js:
@tensorflow/tfjs-backend-webgl/dist/tex_util.js:
@tensorflow/tfjs-backend-webgl/dist/webgl_util.js:
@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js:
@tensorflow/tfjs-backend-webgl/dist/texture_manager.js:
@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/dilation_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/select_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/log.js:
@tensorflow/tfjs-core/dist/profiler.js:
@tensorflow/tfjs-core/dist/tensor_format.js:
@tensorflow/tfjs-core/dist/tensor_util.js:
@tensorflow/tfjs-core/dist/engine.js:
@tensorflow/tfjs-core/dist/tensor_util_env.js:
@tensorflow/tfjs-core/dist/ops/operation.js:
@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js:
@tensorflow/tfjs-core/dist/io/types.js:
@tensorflow/tfjs-core/dist/io/io_utils.js:
@tensorflow/tfjs-core/dist/io/router_registry.js:
@tensorflow/tfjs-core/dist/io/indexed_db.js:
@tensorflow/tfjs-core/dist/io/local_storage.js:
@tensorflow/tfjs-core/dist/io/model_management.js:
@tensorflow/tfjs-core/dist/globals.js:
@tensorflow/tfjs-core/dist/ops/abs.js:
@tensorflow/tfjs-core/dist/ops/sigmoid.js:
@tensorflow/tfjs-core/dist/ops/zeros_like.js:
@tensorflow/tfjs-core/dist/ops/scalar.js:
@tensorflow/tfjs-core/dist/ops/sqrt.js:
@tensorflow/tfjs-core/dist/ops/sum.js:
@tensorflow/tfjs-core/dist/ops/norm.js:
@tensorflow/tfjs-core/dist/gradients.js:
@tensorflow/tfjs-core/dist/ops/neg.js:
@tensorflow/tfjs-core/dist/ops/zeros.js:
@tensorflow/tfjs-core/dist/ops/step.js:
@tensorflow/tfjs-core/dist/ops/tensor2d.js:
@tensorflow/tfjs-core/dist/backends/where_impl.js:
@tensorflow/tfjs-core/dist/ops/transpose.js:
@tensorflow/tfjs-core/dist/serialization.js:
@tensorflow/tfjs-core/dist/optimizers/optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js:
@tensorflow/tfjs-core/dist/io/browser_files.js:
@tensorflow/tfjs-core/dist/io/weights_loader.js:
@tensorflow/tfjs-core/dist/io/http.js:
@tensorflow/tfjs-core/dist/io/passthrough.js:
@tensorflow/tfjs-core/dist/io/io.js:
@tensorflow/tfjs-core/dist/ops/array_ops_util.js:
@tensorflow/tfjs-core/dist/ops/selu_util.js:
@tensorflow/tfjs-core/dist/ops/erf_util.js:
@tensorflow/tfjs-core/dist/backends/complex_util.js:
@tensorflow/tfjs-core/dist/ops/segment_util.js:
@tensorflow/tfjs-core/dist/backends/backend_util.js:
@tensorflow/tfjs-backend-webgl/dist/canvas_util.js:
@tensorflow/tfjs-backend-webgl/dist/glsl_version.js:
@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js:
@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/packing_util.js:
@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/kernel_registry.js:
@tensorflow/tfjs-core/dist/flags.js:
@tensorflow/tfjs-core/dist/platforms/platform_browser.js:
@tensorflow/tfjs-core/dist/platforms/platform_node.js:
@tensorflow/tfjs-core/dist/ops/square.js:
@tensorflow/tfjs-core/dist/ops/fused_util.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js:
@tensorflow/tfjs-core/dist/io/progress.js:
@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js:
@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js:
@tensorflow/tfjs-backend-cpu/dist/cpu_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js:
@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/hash_util.js:
@tensorflow/tfjs-core/dist/ops/slice_util.js:
@tensorflow/tfjs-core/dist/backends/einsum_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BroadcastArgs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Einsum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseFillEmptyRows.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseReshape.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentMean.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentSum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringNGrams.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringSplit.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringToHashBucketFast.js:
@tensorflow/tfjs-backend-webgl/dist/transform_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/buffer.js:
@tensorflow/tfjs-core/dist/ops/cast.js:
@tensorflow/tfjs-core/dist/ops/print.js:
@tensorflow/tfjs-core/dist/base_side_effects.js:
@tensorflow/tfjs-core/dist/ops/min.js:
@tensorflow/tfjs-core/dist/base.js:
@tensorflow/tfjs-backend-webgl/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedRange.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_to_dense_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js:
@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cum_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cumprod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cumsum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedGather.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedTensorToTensor.js:
@tensorflow/tfjs-backend-webgl/dist/search_sorted_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SearchSorted.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/TensorScatterUpdate.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/_FusedMatMul.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ExpandDims.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/scatter_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StaticRegexReplace.js:
  (**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/async-directive.js:
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

lit-html/directives/if-defined.js:
lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

*/
//# sourceMappingURL=index-QJ3LWEIQ.js.map
