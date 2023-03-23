(()=>{var m$=Object.create;var Ps=Object.defineProperty;var g$=Object.getOwnPropertyDescriptor;var x$=Object.getOwnPropertyNames;var y$=Object.getPrototypeOf,w$=Object.prototype.hasOwnProperty;var b$=(e,t,r)=>t in e?Ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dr=(e,t)=>{for(var r in t)Ps(e,r,{get:t[r],enumerable:!0})},v$=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of x$(t))!w$.call(e,n)&&n!==r&&Ps(e,n,{get:()=>t[n],enumerable:!(o=g$(t,n))||o.enumerable});return e};var C$=(e,t,r)=>(r=e!=null?m$(y$(e)):{},v$(t||!e||!e.__esModule?Ps(r,"default",{value:e,enumerable:!0}):r,e));var kc=(e,t,r)=>(b$(e,typeof t!="symbol"?t+"":t,r),r);var cm=_c((pO,lm)=>{lm.exports=nt;var de=null;try{de=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function nt(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}nt.prototype.__isLong__;Object.defineProperty(nt.prototype,"__isLong__",{value:!0});function Qt(e){return(e&&e.__isLong__)===!0}nt.isLong=Qt;var Jh={},tm={};function Wr(e,t){var r,o,n;return t?(e>>>=0,(n=0<=e&&e<256)&&(o=tm[e],o)?o:(r=st(e,(e|0)<0?-1:0,!0),n&&(tm[e]=r),r)):(e|=0,(n=-128<=e&&e<128)&&(o=Jh[e],o)?o:(r=st(e,e<0?-1:0,!1),n&&(Jh[e]=r),r))}nt.fromInt=Wr;function he(e,t){if(isNaN(e))return t?zr:me;if(t){if(e<0)return zr;if(e>=nm)return am}else{if(e<=-rm)return Yt;if(e+1>=rm)return im}return e<0?he(-e,t).neg():st(e%Uo|0,e/Uo|0,t)}nt.fromNumber=he;function st(e,t,r){return new nt(e,t,r)}nt.fromBits=st;var vi=Math.pow;function Gc(e,t,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return me;if(typeof t=="number"?(r=t,t=!1):t=!!t,r=r||10,r<2||36<r)throw RangeError("radix");var o;if((o=e.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Gc(e.substring(1),t,r).neg();for(var n=he(vi(r,8)),s=me,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+a),r);if(a<8){var c=he(vi(r,a));s=s.mul(c).add(he(l))}else s=s.mul(n),s=s.add(he(l))}return s.unsigned=t,s}nt.fromString=Gc;function Se(e,t){return typeof e=="number"?he(e,t):typeof e=="string"?Gc(e,t):st(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}nt.fromValue=Se;var em=1<<16,X$=1<<24,Uo=em*em,nm=Uo*Uo,rm=nm/2,om=Wr(X$),me=Wr(0);nt.ZERO=me;var zr=Wr(0,!0);nt.UZERO=zr;var Bo=Wr(1);nt.ONE=Bo;var sm=Wr(1,!0);nt.UONE=sm;var Wc=Wr(-1);nt.NEG_ONE=Wc;var im=st(-1,2147483647,!1);nt.MAX_VALUE=im;var am=st(-1,-1,!0);nt.MAX_UNSIGNED_VALUE=am;var Yt=st(0,-2147483648,!1);nt.MIN_VALUE=Yt;var O=nt.prototype;O.toInt=function(){return this.unsigned?this.low>>>0:this.low};O.toNumber=function(){return this.unsigned?(this.high>>>0)*Uo+(this.low>>>0):this.high*Uo+(this.low>>>0)};O.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Yt)){var r=he(t),o=this.div(r),n=o.mul(r).sub(this);return o.toString(t)+n.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=he(vi(t,6),this.unsigned),i=this,a="";;){var l=i.div(s),c=i.sub(l.mul(s)).toInt()>>>0,u=c.toString(t);if(i=l,i.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}};O.getHighBits=function(){return this.high};O.getHighBitsUnsigned=function(){return this.high>>>0};O.getLowBits=function(){return this.low};O.getLowBitsUnsigned=function(){return this.low>>>0};O.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Yt)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,r=31;r>0&&!(t&1<<r);r--);return this.high!=0?r+33:r+1};O.isZero=function(){return this.high===0&&this.low===0};O.eqz=O.isZero;O.isNegative=function(){return!this.unsigned&&this.high<0};O.isPositive=function(){return this.unsigned||this.high>=0};O.isOdd=function(){return(this.low&1)===1};O.isEven=function(){return(this.low&1)===0};O.equals=function(t){return Qt(t)||(t=Se(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};O.eq=O.equals;O.notEquals=function(t){return!this.eq(t)};O.neq=O.notEquals;O.ne=O.notEquals;O.lessThan=function(t){return this.comp(t)<0};O.lt=O.lessThan;O.lessThanOrEqual=function(t){return this.comp(t)<=0};O.lte=O.lessThanOrEqual;O.le=O.lessThanOrEqual;O.greaterThan=function(t){return this.comp(t)>0};O.gt=O.greaterThan;O.greaterThanOrEqual=function(t){return this.comp(t)>=0};O.gte=O.greaterThanOrEqual;O.ge=O.greaterThanOrEqual;O.compare=function(t){if(Qt(t)||(t=Se(t)),this.eq(t))return 0;var r=this.isNegative(),o=t.isNegative();return r&&!o?-1:!r&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};O.comp=O.compare;O.negate=function(){return!this.unsigned&&this.eq(Yt)?Yt:this.not().add(Bo)};O.neg=O.negate;O.add=function(t){Qt(t)||(t=Se(t));var r=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=t.high>>>16,a=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,p=0,f=0,d=0;return d+=s+c,f+=d>>>16,d&=65535,f+=n+l,p+=f>>>16,f&=65535,p+=o+a,u+=p>>>16,p&=65535,u+=r+i,u&=65535,st(f<<16|d,u<<16|p,this.unsigned)};O.subtract=function(t){return Qt(t)||(t=Se(t)),this.add(t.neg())};O.sub=O.subtract;O.multiply=function(t){if(this.isZero())return me;if(Qt(t)||(t=Se(t)),de){var r=de.mul(this.low,this.high,t.low,t.high);return st(r,de.get_high(),this.unsigned)}if(t.isZero())return me;if(this.eq(Yt))return t.isOdd()?Yt:me;if(t.eq(Yt))return this.isOdd()?Yt:me;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(om)&&t.lt(om))return he(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=t.high>>>16,l=t.high&65535,c=t.low>>>16,u=t.low&65535,p=0,f=0,d=0,h=0;return h+=i*u,d+=h>>>16,h&=65535,d+=s*u,f+=d>>>16,d&=65535,d+=i*c,f+=d>>>16,d&=65535,f+=n*u,p+=f>>>16,f&=65535,f+=s*c,p+=f>>>16,f&=65535,f+=i*l,p+=f>>>16,f&=65535,p+=o*u+n*c+s*l+i*a,p&=65535,st(d<<16|h,p<<16|f,this.unsigned)};O.mul=O.multiply;O.divide=function(t){if(Qt(t)||(t=Se(t)),t.isZero())throw Error("division by zero");if(de){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var r=(this.unsigned?de.div_u:de.div_s)(this.low,this.high,t.low,t.high);return st(r,de.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?zr:me;var o,n,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return zr;if(t.gt(this.shru(1)))return sm;s=zr}else{if(this.eq(Yt)){if(t.eq(Bo)||t.eq(Wc))return Yt;if(t.eq(Yt))return Bo;var i=this.shr(1);return o=i.div(t).shl(1),o.eq(me)?t.isNegative()?Bo:Wc:(n=this.sub(t.mul(o)),s=o.add(n.div(t)),s)}else if(t.eq(Yt))return this.unsigned?zr:me;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=me}for(n=this;n.gte(t);){o=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),l=a<=48?1:vi(2,a-48),c=he(o),u=c.mul(t);u.isNegative()||u.gt(n);)o-=l,c=he(o,this.unsigned),u=c.mul(t);c.isZero()&&(c=Bo),s=s.add(c),n=n.sub(u)}return s};O.div=O.divide;O.modulo=function(t){if(Qt(t)||(t=Se(t)),de){var r=(this.unsigned?de.rem_u:de.rem_s)(this.low,this.high,t.low,t.high);return st(r,de.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};O.mod=O.modulo;O.rem=O.modulo;O.not=function(){return st(~this.low,~this.high,this.unsigned)};O.and=function(t){return Qt(t)||(t=Se(t)),st(this.low&t.low,this.high&t.high,this.unsigned)};O.or=function(t){return Qt(t)||(t=Se(t)),st(this.low|t.low,this.high|t.high,this.unsigned)};O.xor=function(t){return Qt(t)||(t=Se(t)),st(this.low^t.low,this.high^t.high,this.unsigned)};O.shiftLeft=function(t){return Qt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?st(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):st(0,this.low<<t-32,this.unsigned)};O.shl=O.shiftLeft;O.shiftRight=function(t){return Qt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?st(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):st(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};O.shr=O.shiftRight;O.shiftRightUnsigned=function(t){if(Qt(t)&&(t=t.toInt()),t&=63,t===0)return this;var r=this.high;if(t<32){var o=this.low;return st(o>>>t|r<<32-t,r>>>t,this.unsigned)}else return t===32?st(r,0,this.unsigned):st(r>>>t-32,0,this.unsigned)};O.shru=O.shiftRightUnsigned;O.shr_u=O.shiftRightUnsigned;O.toSigned=function(){return this.unsigned?st(this.low,this.high,!1):this};O.toUnsigned=function(){return this.unsigned?this:st(this.low,this.high,!0)};O.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};O.toBytesLE=function(){var t=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};O.toBytesBE=function(){var t=this.high,r=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};nt.fromBytes=function(t,r,o){return o?nt.fromBytesLE(t,r):nt.fromBytesBE(t,r)};nt.fromBytesLE=function(t,r){return new nt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,r)};nt.fromBytesBE=function(t,r){return new nt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],r)}});var Om=_c(()=>{});var Pm=_c(()=>{});var Tn=class{constructor(t,r){this.backend=t,this.dataMover=r,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,r){this.dataIdsCount++,this.data.set(t,r)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Pr=class{refCount(t){return jt("refCount")}incRef(t){return jt("incRef")}timerAvailable(){return!0}time(t){return jt("time")}read(t){return jt("read")}readSync(t){return jt("readSync")}readToGPU(t,r){return jt("readToGPU")}numDataIds(){return jt("numDataIds")}disposeData(t,r){return jt("disposeData")}write(t,r,o){return jt("write")}move(t,r,o,n,s){return jt("move")}createTensorFromGPUData(t,r,o){return jt("createTensorFromGPUData")}memory(){return jt("memory")}floatPrecision(){return jt("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return jt("dispose")}};function jt(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function Nf(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,t--,Ms(e,t,r)}function S$(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,o=0;for(;r>0;)o=Math.random()*r|0,r--,Ms(e,r,o),Ms(t,r,o)}function Io(e,t,r){return Math.max(e,Math.min(t,r))}function $$(e){return e%2===0?e:e+1}function Ms(e,t,r){let o=e[t];e[t]=e[r],e[r]=o}function I$(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function T$(e,t){let r=Math.random();return t*r+(1-r)*e}function E$(e,t){let r=0;for(let o=0;o<e.length;o++){let n=Number(e[o])-Number(t[o]);r+=n*n}return r}function D(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ls(e,t,r=""){D(To(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function Ac(e){D(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ut(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function _$(e){return e.length===0}function To(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function En(e){return e%1===0}function k$(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function A$(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function R$(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return Nf(t),t}function Lr(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function N$(e,t=n=>0,r,o){return new Promise((n,s)=>{let i=0,a=()=>{if(e()){n();return}i++;let l=t(i);if(r!=null&&i>=r){s();return}o!=null?o(a,l):setTimeout(a,l)};a()})}function F$(e,t){let r=1,o=-1;for(let s=0;s<e.length;++s)if(e[s]>=0)r*=e[s];else if(e[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(e[s]<0)throw Error(`Shapes can not be < 0. Found ${e[s]} at dim ${s}`);if(o===-1){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(r===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let n=e.slice();return n[o]=t/r,n}function Bs(e,t){let r=t.length;return e=e==null?t.map((o,n)=>n):[].concat(e),D(e.every(o=>o>=-r&&o<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),D(e.every(o=>En(o)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(o=>o<0?r+o:o)}function D$(e,t){let r=[],o=[],n=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||n?null:Bs(t,e).sort(),i=0;for(let a=0;a<e.length;++a){if(s!=null){if(s[i]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(s[i]==null||s[i]>a)&&e[a]===1&&(r.push(e[a]),o.push(a)),s[i]<=a&&i++}e[a]!==1&&(r.push(e[a]),o.push(a))}return{newShape:r,keptDims:o}}function O$(e,t){return Us(e,t)}function Us(e,t){let r=null;if(e==null||e==="float32")r=new Float32Array(t);else if(e==="int32")r=new Int32Array(t);else if(e==="bool")r=new Uint8Array(t);else if(e==="string")r=new Array(t);else throw new Error(`Unknown data type ${e}`);return r}function Rc(e,t){for(let r=0;r<e.length;r++){let o=e[r];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function Nc(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function P$(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function Eo(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Fc(e){if(e==null)return 0;let t=0;return e.forEach(r=>t+=r.length),t}function _o(e){return typeof e=="string"||e instanceof String}function Ff(e){return typeof e=="boolean"}function Df(e){return typeof e=="number"}function hr(e){return Array.isArray(e)?hr(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Df(e)?"float32":_o(e)?"string":Ff(e)?"bool":"float32"}function ko(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Ao(e,t){for(let r=t;r<e;++r)if(e%r===0)return r;return e}function De(e){let t=e.length;if(t<2)return[];let r=new Array(t-1);r[t-2]=e[t-1];for(let o=t-3;o>=0;--o)r[o]=r[o+1]*e[o+1];return r}function Of(e,t,r,o=!1){let n=new Array;if(t.length===1){let s=t[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=r[e+i]}else{let s=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(o?2:1);for(let l=0;l<s;l++)n[l]=Of(e+l*a,i,r,o)}return n}function Mr(e,t,r=!1){if(e.length===0)return t[0];let o=e.reduce((n,s)=>n*s)*(r?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return Of(0,e,t,r)}function M$(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function Dc(e,t){let r=Ro(e,t);for(let o=0;o<r.length;o++)r[o]=1;return r}function Ro(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function L$(e,t){let r=e.reduce((o,n)=>o*n,1);if(t==null||t==="float32")return Mr(e,new Float32Array(r));if(t==="int32")return Mr(e,new Int32Array(r));if(t==="bool")return Mr(e,new Uint8Array(r));throw new Error(`Unknown data type ${t}`)}function Ce(e){e.forEach(t=>{D(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function B$(e,t,r){if(t===0)return 0;if(t===1)return e[0];let o=e[e.length-1];for(let n=0;n<e.length-1;++n)o+=r[n]*e[n];return o}function U$(e,t,r){if(t===0)return[];if(t===1)return[e];let o=new Array(t);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(e/r[n]),e-=o[n]*r[n];return o[o.length-1]=e,o}function Br(e){return e&&e.then&&typeof e.then=="function"}var Pf="tfjsflags",_n=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=z$,this.populateURLFlags()}setPlatform(t,r){this.platform!=null&&($().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=r}registerFlag(t,r,o){if(this.flagRegistry[t]={evaluationFn:r,setHook:o},this.urlFlags[t]!=null){let n=this.urlFlags[t];$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let r=this.evaluateFlag(t);if(Br(r))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=r,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,r){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=r,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(r)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);Pf in t&&t[Pf].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=G$(n,s)})}};function z$(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(r,...o)=>(W$(t,o[0],o[1]),o.join("="))),t}function W$(e,t,r){e[decodeURIComponent(t)]=decodeURIComponent(r||"")}function G$(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function $(){return Oc}var Oc=null;function Mf(e){Oc=e}var Pc;function Mc(){if(Pc==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Pc=e}return Pc}function H$(){let e=Mc();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function kn(e,t){let r=H$();if(r.has(e))return r.get(e);{let o=t();return r.set(e,o),r.get(e)}}var An="Abs",Lf="Acos",Bf="Acosh",mr="Add",Uf="AddN",Vf="All",zf="Any",Wf="ArgMax",Gf="ArgMin",Hf="Asin",qf="Asinh",Kf="Atan",Xf="Atanh",jf="Atan2",Yf="AvgPool",Qf="AvgPoolGrad",Zf="AvgPool3D",Jf="AvgPool3DGrad",Vs="BatchMatMul",td="BatchToSpaceND",ed="Bincount";var rd="BroadcastArgs",Ur="Cast",zs="Ceil",od="ClipByValue",Rn="Complex",Ws="ComplexAbs",nd="Concat",sd="Conv2D",id="Conv2DBackpropFilter",ad="Conv2DBackpropInput",ld="Conv3D",cd="Conv3DBackpropFilterV2",ud="Conv3DBackpropInputV2",pd="Cos",fd="Cosh",dd="Cumprod",hd="Cumsum",md="CropAndResize",gd="DenseBincount",xd="DepthToSpace",yd="DepthwiseConv2dNative",wd="DepthwiseConv2dNativeBackpropFilter",bd="DepthwiseConv2dNativeBackpropInput",vd="Diag",Cd="Dilation2D";var Gs="RealDiv",Sd="Einsum",Hs="Elu",$d="EluGrad",Id="Erf",qs="Equal",Ks="Exp",Td="ExpandDims",Xs="Expm1",Ed="FFT",js="Fill",_d="FlipLeftRight",Ys="Floor",No="FloorDiv",kd="FusedBatchNorm",Ad="GatherV2",Rd="GatherNd",Qs="Greater",Zs="GreaterEqual",Vr="Identity",Nd="IFFT",Js="Imag",Fd="IsFinite",Dd="IsInf",Od="IsNan",ti="LeakyRelu",ei="Less",ri="LessEqual",Pd="LinSpace",oi="Log",Md="Log1p",Ld="LogicalAnd",Bd="LogicalNot",Ud="LogicalOr";var Vd="LRN",zd="LRNGrad";var ni="Max",Fo="Maximum",Wd="MaxPool",Gd="MaxPoolGrad",Hd="MaxPool3D",qd="MaxPool3DGrad",Kd="MaxPoolWithArgmax",Xd="Mean",si="Min",ii="Minimum",jd="MirrorPad",Yd="Mod",Qd="Multinomial",Do="Multiply",Nn="Neg",ai="NotEqual",Zd="NonMaxSuppressionV3",Jd="NonMaxSuppressionV4",th="NonMaxSuppressionV5",eh="OnesLike",rh="OneHot",oh="Pack",nh="PadV2";var li="Pow",ci="Prelu",Lc="Prod",sh="RaggedGather",ih="RaggedRange",ah="RaggedTensorToTensor",lh="Range",Fn="Real",ch="Reciprocal",ui="Relu",pi="Reshape",uh="ResizeNearestNeighbor",ph="ResizeNearestNeighborGrad",fh="ResizeBilinear",dh="ResizeBilinearGrad",fi="Relu6",hh="Reverse",mh="Round",di="Rsqrt",gh="ScatterNd",xh="TensorScatterUpdate",yh="SearchSorted",wh="Select",bh="Selu",Bc="Slice",vh="Sin",Ch="Sinh",Sh="Sign",Oo="Sigmoid",$h="Softplus",Po="Sqrt",hi="Sum",Ih="SpaceToBatchND",Th="SplitV",Eh="Softmax",_h="SparseFillEmptyRows",kh="SparseReshape",Ah="SparseSegmentMean",Rh="SparseSegmentSum",Nh="SparseToDense",mi="SquaredDifference",Fh="Square",gi="StaticRegexReplace",Dh="StridedSlice",Oh="StringNGrams",Ph="StringSplit",Mh="StringToHashBucketFast",Mo="Sub",Lh="Tan",Bh="Tanh",xi="Tile",Uh="TopK",Vh="Transform",Lo="Transpose",zh="Unique",Wh="Unpack",Gh="UnsortedSegmentSum";var yi="ZerosLike",wi="Step",Hh="FromPixels",qh="RotateWithOffset",Kh="_FusedMatMul",Xh="FusedConv2D",jh="FusedDepthwiseConv2D";function He(...e){$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(...e)}function q$(...e){$().getBool("IS_TEST")||$().getBool("PROD")||console.log(...e)}var bi=kn("kernelRegistry",()=>new Map),K$=kn("gradRegistry",()=>new Map);function Uc(e,t){let r=Zh(e,t);return bi.get(r)}function Vc(e){return K$.get(e)}function zc(e){let t=bi.entries(),r=[];for(;;){let{done:o,value:n}=t.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===e&&r.push(i)}return r}function Qh(e){let{kernelName:t,backendName:r}=e,o=Zh(t,r);bi.has(o)&&He(`The kernel '${t}' for backend '${r}' is already registered`),bi.set(o,e)}function Zh(e,t){return`${t}_${e}`}var w={};dr(w,{arraysEqual:()=>To,assert:()=>D,assertNonNegativeIntegerDimensions:()=>Ce,assertNonNull:()=>Ac,assertShapesMatch:()=>Ls,bytesFromStringArray:()=>Fc,bytesPerElement:()=>Eo,checkConversionForErrors:()=>Rc,clamp:()=>Io,computeStrides:()=>De,convertBackendValuesAndArrayBuffer:()=>M$,createScalarValue:()=>t2,createShuffledIndices:()=>R$,decodeString:()=>Wo,distSquared:()=>E$,encodeString:()=>zo,fetch:()=>r2,fingerPrint64:()=>J$,flatten:()=>xr,getArrayFromDType:()=>Us,getTypedArrayFromDType:()=>O$,hasEncodingLoss:()=>P$,hexToLong:()=>Dn,indexToLoc:()=>U$,inferDtype:()=>hr,inferFromImplicitShape:()=>F$,isBoolean:()=>Ff,isFunction:()=>ko,isInt:()=>En,isNumber:()=>Df,isPromise:()=>Br,isScalarShape:()=>_$,isString:()=>_o,isTypedArray:()=>Lt,isValidDtype:()=>Nc,locToIndex:()=>B$,makeOnesTypedArray:()=>Dc,makeZerosNestedTypedArray:()=>L$,makeZerosTypedArray:()=>Ro,nearestDivisor:()=>Ao,nearestLargerEven:()=>$$,now:()=>qr,parseAxisParam:()=>Bs,randUniform:()=>T$,repeatedTry:()=>N$,rightPad:()=>Lr,shuffle:()=>Nf,shuffleCombo:()=>S$,sizeFromShape:()=>ut,sizeToSquarishShape:()=>A$,squeezeShape:()=>D$,sum:()=>I$,swap:()=>Ms,tanh:()=>k$,toNestedArray:()=>Mr,toTypedArray:()=>Vo});var qc=C$(cm());var Hr=qc.default||qc;function Dn(e){return Hr.fromString(e,!0,16)}var pm=Dn("c3a5c85c97cb3127"),Gr=Dn("b492b66fbe98f273"),Ot=Dn("9ae16a3b2f90404f");function Hc(e){return e.xor(e.shru(47))}function fm(e,t,r){let o=e.slice(t,t+r);return Hr.fromBytes(Array.from(o),!0,!0)}function et(e,t){return fm(e,t,8)}function um(e,t){return fm(e,t,4)}function St(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function gr(e,t,r=Dn("9ddfea08eb382d69")){let o=e.xor(t).mul(r);o=o.xor(o.shru(47));let n=t.xor(o).mul(r);return n=n.xor(n.shru(47)),n=n.mul(r),n}function j$(e,t,r,o,n,s){n=n.add(e),s=St(s.add(n).add(o),21);let i=n;return n=n.add(t),n=n.add(r),s=s.add(St(n,44)),[n.add(o),s.add(i)]}function Ci(e,t,r,o){return j$(et(e,t),et(e,t+8),et(e,t+16),et(e,t+24),r,o)}function Y$(e,t=e.length){if(t>=8){let r=Ot.add(t*2),o=et(e,0).add(Ot),n=et(e,t-8),s=St(n,37).mul(r).add(o),i=St(o,25).add(n).mul(r);return gr(s,i,r)}if(t>=4){let r=Ot.add(t*2),o=um(e,0);return gr(o.shl(3).add(t),um(e,t-4),r)}if(t>0){let r=e[0],o=e[t>>1],n=e[t-1],s=r+(o<<8),i=t+(n<<2);return Hc(Ot.mul(s).xor(pm.mul(i))).mul(Ot)}return Ot}function Q$(e,t=e.length){let r=Ot.add(t*2),o=et(e,0).mul(Gr),n=et(e,8),s=et(e,t-8).mul(r),i=et(e,t-16).mul(Ot);return gr(St(o.add(n),43).add(St(s,30)).add(i),o.add(St(n.add(Ot),18)).add(s),r)}function Z$(e,t=e.length){let r=Ot.add(t*2),o=et(e,0).mul(Ot),n=et(e,8),s=et(e,t-8).mul(r),i=et(e,t-16).mul(Ot),a=St(o.add(n),43).add(St(s,30)).add(i),l=gr(a,o.add(St(n.add(Ot),18)).add(s),r),c=et(e,16).mul(r),u=et(e,24),p=a.add(et(e,t-32)).mul(r),f=l.add(et(e,t-24)).mul(r);return gr(St(c.add(u),43).add(St(p,30)).add(f),c.add(St(u.add(o),18)).add(p),r)}function J$(e,t=e.length){let r=Hr.fromNumber(81,!0);if(t<=32)return t<=16?Y$(e,t):Q$(e,t);if(t<=64)return Z$(e,t);let o=r,n=r.mul(Gr).add(113),s=Hc(n.mul(Ot).add(113)).mul(Ot),i=[Hr.UZERO,Hr.UZERO],a=[Hr.UZERO,Hr.UZERO];o=o.mul(Ot).add(et(e,0));let l=0,c=(t-1>>6)*64,u=c+(t-1&63)-63;do o=St(o.add(n).add(i[0]).add(et(e,l+8)),37).mul(Gr),n=St(n.add(i[1]).add(et(e,l+48)),42).mul(Gr),o=o.xor(a[1]),n=n.add(i[0]).add(et(e,l+40)),s=St(s.add(a[0]),33).mul(Gr),i=Ci(e,l,i[1].mul(Gr),o.add(a[0])),a=Ci(e,l+32,s.add(a[1]),n.add(et(e,l+16))),[s,o]=[o,s],l+=64;while(l!==c);let p=Gr.add(s.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=St(o.add(n).add(i[0]).add(et(e,l+8)),37).mul(p),n=St(n.add(i[1]).add(et(e,l+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(et(e,l+40))),s=St(s.add(a[0]),33).mul(p),i=Ci(e,l,i[1].mul(p),o.add(a[0])),a=Ci(e,l+32,s.add(a[1]),n.add(et(e,l+16))),[s,o]=[o,s],gr(gr(i[0],a[0],p).add(Hc(n).mul(pm)).add(s),gr(i[1],a[1],p).add(o),p)}function t2(e,t){return t==="string"?zo(e):Vo([e],t)}function e2(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Vo(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=xr(e)),$().getBool("DEBUG")&&Rc(e,t),e2(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){let r=new Uint8Array(e.length);for(let o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}else throw new Error(`Unknown data type ${t}`)}function qr(){return $().platform.now()}function r2(e,t){return $().platform.fetch(e,t)}function zo(e,t="utf-8"){return t=t||"utf-8",$().platform.encode(e,t)}function Wo(e,t="utf-8"){return t=t||"utf-8",$().platform.decode(e,t)}function Lt(e){return $().platform.isTypedArray(e)}function xr(e,t=[],r=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Br(e)||e==null||Lt(e)&&r)t.push(e);else if(Array.isArray(e)||Lt(e))for(let o=0;o<e.length;++o)xr(e[o],t,r);else{let o=-1;for(let n of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)xr(e[n],t,r)}return t}var Si=class{constructor(t,r){this.backendTimer=t,this.logger=r,r==null&&(this.logger=new Kc)}profileKernel(t,r,o){let n,s=()=>{n=o()},i,a=qr();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let c of n)c.dataSync();i=Promise.resolve({kernelMs:qr()-a})}if($().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<n.length;c++){let u=n[c];u.data().then(p=>{o2(p,u.dtype,t)})}return{kernelName:t,outputs:n,inputs:r,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:r,outputs:o,timeMs:n,inputs:s,extraInfo:i}=t;o.forEach(a=>{Promise.all([a.data(),n,i]).then(l=>{this.logger.logKernelProfile(r,a,l[0],l[1],s,l[2])})})}};function o2(e,t,r){if(t!=="float32")return!1;for(let o=0;o<e.length;o++){let n=e[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${r}'`),!0}return!1}var Kc=class{logKernelProfile(t,r,o,n,s,i){let a=typeof n=="number"?Lr(`${n}ms`,9):n.error,l=Lr(t,25),c=r.rank,u=r.size,p=Lr(r.shape.toString(),14),f="";for(let d in s){let h=s[d];if(h!=null){let x=h.shape||r.shape,g=x.length;f+=`${d}: ${g}D ${g>0?x:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${p}	%c${u}	%c${f}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function dm(e,t,r){let o={},n={};for(let l=0;l<t.length;l++)o[t[l].id]=!0;for(let l=0;l<e.length;l++){let c=e[l],u=c.inputs;for(let p in u){let f=u[p],d=!1;for(let h=0;h<t.length;h++)if(o[f.id]){c.outputs.forEach(x=>o[x.id]=!0),d=!0,n[c.id]=!0;break}if(d)break}}let s={};s[r.id]=!0;let i={};for(let l=e.length-1;l>=0;l--){let c=e[l],u=c.inputs;for(let p=0;p<c.outputs.length;p++)if(s[c.outputs[p].id]){for(let f in u)s[u[f].id]=!0,i[c.id]=!0;break}}let a=[];for(let l=0;l<e.length;l++){let c=e[l];if(n[c.id]&&i[c.id]){let u={};for(let f in c.inputs){let d=c.inputs[f];o[d.id]&&(u[f]=d)}let p=Object.assign({},c);p.inputs=u,p.outputs=c.outputs,a.push(p)}}return a}function hm(e,t,r,o){for(let n=t.length-1;n>=0;n--){let s=t[n],i=[];if(s.outputs.forEach(l=>{let c=e[l.id];c!=null?i.push(c):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let c=r(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);let u=s.inputs[l];if(!To(c.shape,u.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(e[u.id]==null)e[u.id]=c;else{let p=e[u.id];e[u.id]=o(p,c),p.dispose()}}}}var mm=20,On=3,Xc=7;function gm(e,t,r,o){let n=De(t),s=n2(e,t,r,n),i=t.length,a=$i(e,t,r,n,s),l=["Tensor"];return o&&(l.push(`  dtype: ${r}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function n2(e,t,r,o){let n=ut(t),s=o[o.length-1],i=new Array(s).fill(0),a=t.length,l=r==="complex64"?Mn(e):e;if(a>1)for(let c=0;c<n/s;c++){let u=c*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Pn(l[u+p],0,r).length)}return i}function Pn(e,t,r){let o;return Array.isArray(e)?o=`${parseFloat(e[0].toFixed(Xc))} + ${parseFloat(e[1].toFixed(Xc))}j`:_o(e)?o=`'${e}'`:r==="bool"?o=xm(e):o=parseFloat(e.toFixed(Xc)).toString(),Lr(o,t)}function xm(e){return e===0?"false":"true"}function $i(e,t,r,o,n,s=!0){let i=r==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(r==="complex64"){let x=Mn(e);return[Pn(x[0],0,r)]}return r==="bool"?[xm(e[0])]:[e[0].toString()]}if(l===1){if(a>mm){let g=On*i,m=Array.from(e.slice(0,g)),y=Array.from(e.slice((a-On)*i,a*i));return r==="complex64"&&(m=Mn(m),y=Mn(y)),["["+m.map((v,b)=>Pn(v,n[b],r)).join(", ")+", ..., "+y.map((v,b)=>Pn(v,n[a-On+b],r)).join(", ")+"]"]}return["["+(r==="complex64"?Mn(e):Array.from(e)).map((g,m)=>Pn(g,n[m],r)).join(", ")+"]"]}let c=t.slice(1),u=o.slice(1),p=o[0]*i,f=[];if(a>mm){for(let x=0;x<On;x++){let g=x*p,m=g+p;f.push(...$i(e.slice(g,m),c,r,u,n,!1))}f.push("...");for(let x=a-On;x<a;x++){let g=x*p,m=g+p;f.push(...$i(e.slice(g,m),c,r,u,n,x===a-1))}}else for(let x=0;x<a;x++){let g=x*p,m=g+p;f.push(...$i(e.slice(g,m),c,r,u,n,x===a-1))}let d=l===2?",":"";f[0]="["+(a>0?f[0]+d:"");for(let x=1;x<f.length-1;x++)f[x]=" "+f[x]+d;let h=`,
`;for(let x=2;x<l;x++)h+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(s?"":h),f}function Mn(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var Oe=class{constructor(t,r,o){if(this.dtype=r,this.shape=t.slice(),this.size=ut(t),o!=null){let n=o.length;D(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(r==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Us(r,this.size),this.strides=De(t)}set(t,...r){r.length===0&&(r=[0]),D(r.length===this.rank,()=>`The number of provided coordinates (${r.length}) must match the rank (${this.rank})`);let o=this.locToIndex(r);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let r=0;for(let n of t){if(n<0||n>=this.shape[r]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}r++}let o=t[t.length-1];for(let n=0;n<t.length-1;++n)o+=this.strides[n]*t[n];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let r=t[t.length-1];for(let o=0;o<t.length-1;++o)r+=this.strides[o]*t[o];return r}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let r=new Array(this.shape.length);for(let o=0;o<r.length-1;++o)r[o]=Math.floor(t/this.strides[o]),t-=r[o]*this.strides[o];return r[r.length-1]=t,r}get rank(){return this.shape.length}toTensor(){return $e().makeTensor(this.values,this.shape,this.dtype)}},$e=null,Go=null,s2=null;function ym(e){$e=e}function wm(e){Go=e}function bm(e){s2=e}var $t=class{constructor(t,r,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=r||"float32",this.size=ut(t),this.strides=De(t),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Go.buffer(this.shape,this.dtype,t)}bufferSync(){return Go.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Mr(this.shape,t,this.dtype==="complex64")}arraySync(){return Mr(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=$e().read(this.dataId);if(this.dtype==="string"){let r=await t;try{return r.map(o=>Wo(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),$e().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=$e().readSync(this.dataId);if(this.dtype==="string")try{return t.map(r=>Wo(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await $e().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||($e().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Go.print(this,t)}clone(){return this.throwIfDisposed(),Go.clone(this)}toString(t=!1){let r=this.dataSync();return gm(r,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Go.cast(this,t)}variable(t=!0,r,o){return this.throwIfDisposed(),$e().makeVariable(this,t,r,o)}};Object.defineProperty($t,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function i2(){return kn("Tensor",()=>$t)}i2();var qe=class extends $t{constructor(t,r,o,n){super(t.shape,t.dtype,t.dataId,n),this.trainable=r,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!To(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);$e().disposeTensor(this),this.dataId=t.dataId,$e().incRef(this,null)}dispose(){$e().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(qe,Symbol.hasInstance,{value:e=>e instanceof $t&&e.assign!=null&&e.assign instanceof Function});var jc;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(jc||(jc={}));var Yc;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(Yc||(Yc={}));var Qc;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(Qc||(Qc={}));var Zc;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Zc||(Zc={}));var Jc;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Jc||(Jc={}));var a2={float32:Zc,int32:Yc,bool:Qc,complex64:Jc};function Nt(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return a2[e][t]}function Kr(e){return Nt(e,"int32")}function Ii(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function Ti(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}function Pt(e,t){if(e.dtype===t.dtype)return[e,t];let r=Nt(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function Ei(e){let t=[];return vm(e,t,new Set),t}function vm(e,t,r){if(e==null)return;if(e instanceof $t){t.push(e);return}if(!l2(e))return;let o=e;for(let n in o){let s=o[n];r.has(s)||(r.add(s),vm(s,t,r))}}function l2(e){return Array.isArray(e)||typeof e=="object"}function tu(e){return e.kernelName!=null}var _i=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},yr=class{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new _i}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:r}=this.initializeBackendsAndReturnBest();if(r)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:r}=this.initializeBackend(t);if(r)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,r,o=1){return t in this.registryFactory?(He(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:r,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:r,asyncInit:o}=this.initializeBackend(t);if(!(o?await r:r))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Si(this.backendInstance),!0}setupRegisteredKernels(){zc(this.backendName).forEach(r=>{r.setupFunc!=null&&r.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){zc(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){let r=this.registryFactory[t];if(r==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let o=r.factory();if(o&&!(o instanceof Pr)&&typeof o.then=="function"){let n=++this.pendingBackendInitId,s=o.then(i=>n<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,He(`Initialization of backend ${t} failed`),He(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return He(`Initialization of backend ${t} failed`),He(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,r)=>this.registryFactory[r].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r],{success:n,asyncInit:s}=this.initializeBackend(o);if(s||n)return{name:o,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,r){let o=this.state.tensorInfo.get(r),n=o.backend,s=this.readSync(r),i=n.refCount(r);n.disposeData(r,!0),o.backend=t,t.move(r,s,o.shape,o.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,r){let o=null;if(r==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");r=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof r!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let n;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(n),()=>(n=r(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,r,o){t();try{let n=o();return r(),n}catch(n){throw r(),n}}nextTensorId(){return yr.nextTensorId++}nextVariableId(){return yr.nextVariableId++}clone(t){let r=k.runKernel(Vr,{x:t}),o={x:t},n=i=>({x:()=>{let a="float32",l={x:i},c={dtype:a};return k.runKernel(Ur,l,c)}}),s=[];return this.addTapeNode(this.state.activeScope.name,o,[r],n,s,{}),r}runKernel(t,r,o){if(this.backendName==null&&this.backend,!(Uc(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:r,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,r,o){let n=this.backend.numDataIds(),s=0;o.forEach(l=>{s+=l.dtype==="complex64"?3:1});let i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=n-r-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let r,o=[],n=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l,c=tu(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(tu(t)){let{kernelName:h,inputs:x,attrs:g}=t;this.backendName==null&&this.backend;let m=Uc(h,this.backendName);D(m!=null,()=>`Cannot find registered kernel '${h}' for backend '${this.backendName}'`),a=()=>{let y=this.backend.numDataIds();l=m.kernelFunc({inputs:x,attrs:g,backend:this.backend});let v=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(h,y,v);let b=v.map(S=>S.rank!=null?S:this.makeTensorFromTensorInfo(S));if(n){let S=this.getTensorsForGradient(h,x,b);o=this.saveTensorsForBackwardMode(S)}return b}}else{let{forwardFunc:h}=t,x=g=>{n&&(o=g.map(m=>this.keep(this.clone(m))))};a=()=>{let g=this.backend.numDataIds();l=this.tidy(()=>h(this.backend,x));let m=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,m),m}}let{inputs:u,attrs:p}=t,f=tu(t)?null:t.backwardsFunc,d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?r=a():(d=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),r=d.outputs)}),n&&this.addTapeNode(c,u,r,f,o,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(h=>u[h]!=null?u[h].shape:null),outputShapes:r.map(h=>h.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(l)?r:r[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,r,o){let n=Vc(t);if(n!=null){let s=n.inputsToSave||[],i=n.outputsToSave||[],a;n.saveAllInputs?(D(Array.isArray(r),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(r).map(c=>r[c])):a=s.map(c=>r[c]);let l=o.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,r,o,n){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",n=n||this.backend;let s=t;o==="string"&&_o(t[0])&&(s=t.map(l=>zo(l)));let i=n.write(s,r,o),a=new $t(r,o,i,this.nextTensorId());if(this.trackTensor(a,n),o==="string"){let l=this.state.tensorInfo.get(i),c=Fc(s);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,r,o,n){o=o||"float32";let s={dataId:t,shape:r,dtype:o};return this.makeTensorFromTensorInfo(s,n)}makeTensorFromTensorInfo(t,r){let{dataId:o,shape:n,dtype:s}=t,i=new $t(n,s,o,this.nextTensorId());return this.trackTensor(i,r),i}makeVariable(t,r=!0,o,n){o=o||this.nextVariableId().toString(),n!=null&&n!==t.dtype&&(t=t.cast(n));let s=new qe(t,r,o,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,r){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Eo(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:r||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof qe||this.track(t)}incRef(t,r){this.trackTensor(t,r),this.backend.incRef(t.dataId)}removeDataId(t,r){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===r&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let r=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=r.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let o=t.size*Eo(t.dtype);this.state.numBytes-=o}r.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,r.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let r=this.state.registeredVariables[t];this.disposeVariable(r)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let r=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(n=>n.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-r,this.state.activeProfile.newTensors=this.state.numTensors-o;for(let n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,r,o,n,s,i){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:r,outputs:o,saved:s},l=Vc(t);l!=null&&(n=l.gradFunc),n!=null&&(a.gradient=c=>(c=c.map((u,p)=>{if(u==null){let f=o[p],d=Ro(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return u}),n(c.length>1?c:c[0],s,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let r={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(r.name=t),this.state.scopeStack.push(r),this.state.activeScope=r}endScope(t){let r=Ei(t),o=new Set(r.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let i=this.state.activeScope.track[s];!i.kept&&!o.has(i.id)&&i.dispose()}let n=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(s=>{!s.kept&&s.scopeId===n.id&&this.track(s)})}gradients(t,r,o,n=!1){if(D(r.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));D(s instanceof $t,()=>"The result y returned by f() must be a tensor.");let i=dm(this.state.activeTape,r,s);if(!n&&i.length===0&&r.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=o??c2(s.shape),hm(a,i,c=>this.tidy(c),u2);let l=r.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let u of c.saved)u.dispose()}),this.state.activeTape=null),{value:s,grads:l}})}customGrad(t){return D(ko(t),()=>"The f passed in customGrad(f) must be a function."),(...r)=>{D(r.every(a=>a instanceof $t),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o,n={};r.forEach((a,l)=>{n[l]=a});let s=(a,l)=>(o=t(...r,l),D(o.value instanceof $t,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),D(ko(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),i=(a,l)=>{let c=o.gradFunc(a,l),u=Array.isArray(c)?c:[c];D(u.length===r.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),D(u.every(f=>f instanceof $t),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let p={};return u.forEach((f,d)=>{p[d]=()=>f}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:n})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,r){return this.state.tensorInfo.get(t).backend.readToGPU(t,r)}async time(t){let r=qr(),o=await this.backend.time(t);return o.wallMs=qr()-r,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new _i;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};yr.nextTensorId=0;yr.nextVariableId=0;function c2(e){let t=Dc(ut(e),"float32");return k.makeTensor(t,e,"float32")}function eu(){let e=Mc();if(e._tfengine==null){let t=new _n(e);e._tfengine=new yr(t)}return Mf(e._tfengine.ENV),ym(()=>e._tfengine),e._tfengine}var k=eu();function u2(e,t){let r={a:e,b:t};return k.runKernel(mr,r)}var wr={};dr(wr,{isBrowser:()=>ou,isMobile:()=>d2,mockIsMobile:()=>f2});function p2(){return typeof navigator<"u"&&navigator!=null}var ru;function f2(e){ru=e}function d2(e){if(ru!==void 0)return ru;if(e||p2()){if(e||(e=navigator),e.product==="ReactNative")return!0;let t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){let r=e;return r.userAgentData&&r.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function ou(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Bt=$();Bt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Bt.registerFlag("IS_BROWSER",()=>ou());Bt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Bt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Bt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Bt.registerFlag("PROD",()=>!1);Bt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Bt.getBool("DEBUG"));Bt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Bt.registerFlag("IS_TEST",()=>!1);Bt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Bt.getBool("DEBUG"));Bt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Bt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Bt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function nu(e,t){let r=e;if(Lt(e))return t==="string"?[]:[e.length];if(Ii(e)){let n=e.channels||"RGBA";return[e.height,e.width*n.length]}else if(Ti(e))return[e.buffer.size/(t==null?4:Eo(t))];if(!Array.isArray(e))return[];let o=[];for(;Array.isArray(r)||Lt(r)&&t!=="string";)o.push(r.length),r=r[0];return Array.isArray(e)&&$().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Sm(e,o,[]),o}function Sm(e,t,r){if(r=r||[],!Array.isArray(e)&&!Lt(e)){D(t.length===0,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}D(t.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),D(e.length===t[0],()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);let o=t.slice(1);for(let n=0;n<e.length;++n)Sm(e[n],o,r.concat(n))}function Cm(e,t,r,o){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${r}' passed to '${o}' must be ${e} tensor, but got ${t} tensor`)}}function P(e,t,r,o="numeric"){if(e instanceof $t)return Cm(o,e.dtype,t,r),e;let n=hr(e);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),Cm(o,n,t,r),e==null||!Lt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){let l=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${l}'`)}let s=nu(e,n);!Lt(e)&&!Array.isArray(e)&&(e=[e]);let a=n!=="string"?Vo(e,n):xr(e,[],!0);return k.makeTensor(a,s,n)}var h2="__op";function B(e){let t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0],o=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r=r+h2;let n=(...s)=>{k.startScope(r);try{let i=o(...s);return Br(i)&&console.error("Cannot return a Promise inside of tidy."),k.endScope(i),i}catch(i){throw k.endScope(null),i}};return Object.defineProperty(n,"name",{value:r,configurable:!0}),n}function m2(e,t){let r=P(e,"real","complex"),o=P(t,"imag","complex");Ls(r.shape,o.shape,`real and imag shapes, ${r.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:r,imag:o};return k.runKernel(Rn,n)}var ki=B({complex_:m2});function Ai(e,t,r,o){if(o==null)o=hr(e);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Ti(e)||Ii(e)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return k.backend.createTensorFromGPUData(e,t||r,o)}if(!Lt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Ce(t);let n=ut(t),s=ut(r);D(n===s,()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<r.length;++i){let a=r[i],l=i===r.length-1?a!==ut(t.slice(i)):!0;D(r[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `)}}return!Lt(e)&&!Array.isArray(e)&&(e=[e]),t=t||r,e=o!=="string"?Vo(e,o):xr(e,[],!0),k.makeTensor(e,t,o)}var su=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function $m(e){return su?Buffer.byteLength(e):new Blob([e]).size}function Im(e){if(su)return Buffer.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let o=0,n=t.length;o<n;o++)r+=String.fromCharCode(t[o]);return btoa(r)}function Tm(e){if(su){let o=Buffer.from(e,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;++o)r.set([t.charCodeAt(o)],o);return r.buffer}function Ri(e){if(e.length===1)return e[0];let t=0;e.forEach(n=>{t+=n.byteLength});let r=new Uint8Array(t),o=0;return e.forEach(n=>{r.set(new Uint8Array(n),o),o+=n.byteLength}),r.buffer}function Ni(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),r}function Em(e,t,r){let o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(o.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=t,o.weightData=r}return e.signature!=null&&(o.signature=e.signature),e.userDefinedMetadata!=null&&(o.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(o.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(o.initializerSignature=e.initializerSignature),o}async function Fi(e,t){let r,o;return e.weightsManifest!=null&&([r,o]=await t(e.weightsManifest)),Em(e,r,o)}function Ke(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:$m(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:$m(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function iu(e){let t=[];for(let r of e)t.push(...r.weights);return t}var at=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return at.instance==null&&(at.instance=new at),at.instance}static registerSaveRouter(t){at.getInstance().saveRouters.push(t)}static registerLoadRouter(t){at.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return at.getHandlers(t,"save")}static getLoadHandlers(t,r){return at.getHandlers(t,"load",r)}static getHandlers(t,r,o){let n=[];return(r==="load"?at.getInstance().loadRouters:at.getInstance().saveRouters).forEach(i=>{let a=i(t,o);a!==null&&n.push(a)}),n}};var au="tensorflowjs",lu=1,Xr="models_store",br="model_info_store";function _m(){if(!$().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function cu(e){let t=e.result;t.createObjectStore(Xr,{keyPath:"modelPath"}),t.createObjectStore(br,{keyPath:"modelPath"})}var Pe=class{constructor(t){if(this.indexedDB=_m(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,r){return new Promise((o,n)=>{let s=this.indexedDB.open(au,lu);s.onupgradeneeded=()=>cu(s),s.onsuccess=()=>{let i=s.result;if(r==null){let a=i.transaction(Xr,"readonly"),c=a.objectStore(Xr).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(c.result.modelArtifacts)},c.onerror=u=>(i.close(),n(c.error)),a.oncomplete=()=>i.close()}else{let a=Ke(r),l=i.transaction(br,"readwrite"),c=l.objectStore(br),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(f){return n(f)}let p;u.onsuccess=()=>{p=i.transaction(Xr,"readwrite");let f=p.objectStore(Xr),d;try{d=f.put({modelPath:this.modelPath,modelArtifacts:r,modelArtifactsInfo:a})}catch(h){return n(h)}d.onsuccess=()=>o({modelArtifactsInfo:a}),d.onerror=h=>{c=l.objectStore(br);let x=c.delete(this.modelPath);x.onsuccess=()=>(i.close(),n(d.error)),x.onerror=g=>(i.close(),n(d.error))}},u.onerror=f=>(i.close(),n(u.error)),l.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>n(s.error)})}};Pe.URL_SCHEME="indexeddb://";var km=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Pe.URL_SCHEME)?x2(e.slice(Pe.URL_SCHEME.length)):null;at.registerSaveRouter(km);at.registerLoadRouter(km);function x2(e){return new Pe(e)}function y2(e){return e.startsWith(Pe.URL_SCHEME)?e.slice(Pe.URL_SCHEME.length):e}var Di=class{constructor(){this.indexedDB=_m()}async listModels(){return new Promise((t,r)=>{let o=this.indexedDB.open(au,lu);o.onupgradeneeded=()=>cu(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(br,"readonly"),a=s.objectStore(br).getAll();a.onsuccess=()=>{let l={};for(let c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(n.close(),r(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>r(o.error)})}async removeModel(t){return t=y2(t),new Promise((r,o)=>{let n=this.indexedDB.open(au,lu);n.onupgradeneeded=()=>cu(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(br,"readwrite"),a=i.objectStore(br),l=a.get(t),c;l.onsuccess=()=>{if(l.result==null)return s.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let u=a.delete(t),p=()=>{c=s.transaction(Xr,"readwrite");let d=c.objectStore(Xr).delete(t);d.onsuccess=()=>r(l.result.modelArtifactsInfo),d.onerror=h=>o(l.error)};u.onsuccess=p,u.onerror=f=>(p(),s.close(),o(l.error))}},l.onerror=u=>(s.close(),o(l.error)),i.oncomplete=()=>{c==null?s.close():c.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})}};var Xe="/",Ho="tensorflowjs_models",Am="info",w2="model_topology",b2="weight_specs",v2="weight_data",C2="model_metadata";function Rm(e){return{info:[Ho,e,Am].join(Xe),topology:[Ho,e,w2].join(Xe),weightSpecs:[Ho,e,b2].join(Xe),weightData:[Ho,e,v2].join(Xe),modelMetadata:[Ho,e,C2].join(Xe)}}function Nm(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function S2(e){let t=e.split(Xe);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Xe)}function $2(e){return e.startsWith(Me.URL_SCHEME)?e.slice(Me.URL_SCHEME.length):e}var Me=class{constructor(t){if(!$().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Rm(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let r=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),n=Ke(t);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,r),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,Im(t.weightData));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:n}}catch{throw Nm(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let r={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);r.modelTopology=o;let n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(n==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);r.weightSpecs=n;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);r.format=a.format,r.generatedBy=a.generatedBy,r.convertedBy=a.convertedBy,a.signature!=null&&(r.signature=a.signature),a.userDefinedMetadata!=null&&(r.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(r.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(r.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(r.trainingConfig=a.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return r.weightData=Tm(i),r}};Me.URL_SCHEME="localstorage://";var Fm=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Me.URL_SCHEME)?I2(e.slice(Me.URL_SCHEME.length)):null;at.registerSaveRouter(Fm);at.registerLoadRouter(Fm);function I2(e){return new Me(e)}var Oi=class{constructor(){D($().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),D(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},r=Ho+Xe,o=Xe+Am;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(r)&&s.endsWith(o)){let i=S2(s);t[i]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=$2(t);let r=Rm(t);if(this.LS.getItem(r.info)==null)throw new Error(`Cannot find model at path '${t}'`);let o=JSON.parse(this.LS.getItem(r.info));return Nm(r),o}};var Dm="://",ae=class{constructor(){this.managers={}}static getInstance(){return ae.instance==null&&(ae.instance=new ae),ae.instance}static registerManager(t,r){D(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Dm)&&(t=t.slice(0,t.indexOf(Dm))),D(t.length>0,()=>"scheme must not be an empty string.");let o=ae.getInstance();D(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=r}static getManager(t){let r=ae.getInstance().managers[t];if(r==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return r}static getSchemes(){return Object.keys(ae.getInstance().managers)}};var uu=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,r){return fetch(t,r)}now(){return performance.now()}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${r}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,r){return new TextDecoder(r).decode(t)}setTimeoutCustom(t,r){if(typeof window>"u"||!$().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,r);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},r),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}};if($().get("IS_BROWSER")){$().setPlatform("browser",new uu);try{ae.registerManager(Me.URL_SCHEME,new Oi)}catch{}try{ae.registerManager(Pe.URL_SCHEME,new Di)}catch{}}var T2={importFetch:()=>Om()},pu;var fu=class{constructor(){this.util=Pm(),this.textEncoder=new this.util.TextEncoder}fetch(t,r){return $().global.fetch!=null?$().global.fetch(t,r):(pu==null&&(pu=T2.importFetch()),pu(t,r))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${r}`);return this.textEncoder.encode(t)}decode(t,r){return t.length===0?"":new this.util.TextDecoder(r).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};$().get("IS_NODE")&&!$().get("IS_BROWSER")&&$().setPlatform("node",new fu);function Y(e,t="float32",r){return t=t||"float32",Ce(e),new Oe(e,t,r)}function E2(e,t){let r=P(e,"x","cast");if(!Nc(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&r.dtype!=="string"||t!=="string"&&r.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:r},n={dtype:t};return k.runKernel(Ur,o,n)}var jr=B({cast_:E2});function _2(e){let r={x:P(e,"x","clone","string_or_numeric")};return k.runKernel(Vr,r)}var Pi=B({clone_:_2});function Mm(e,t=!1){console.log(e.toString(t))}eu();var k2={buffer:Y,cast:jr,clone:Pi,print:Mm};wm(k2);function A2(e){$().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}bm(A2);function je(){return k}function q(e,t){return k.tidy(e,t)}function wt(e){Ei(e).forEach(r=>r.dispose())}function Lm(e){return k.keep(e)}function Bm(e,t,r=1){return k.registerBackend(e,t,r)}function R2(e,t){let r=P(e,"a","add"),o=P(t,"b","add");[r,o]=Pt(r,o);let n={a:r,b:o};return k.runKernel(mr,n)}var K=B({add_:R2});function N2(e,t){let r=P(e,"a","floorDiv"),o=P(t,"b","floorDiv");[r,o]=Pt(r,o);let n={a:r,b:o};return k.runKernel(No,n)}var Um=B({floorDiv_:N2});function F2(e,t){let r=P(e,"a","div"),o=P(t,"b","div");if([r,o]=Pt(r,o),r.dtype==="int32"&&o.dtype==="int32")return Um(r,o);let n={a:r,b:o},s={};return k.runKernel(Gs,n,s)}var It=B({div_:F2});function D2(e,t){let r=P(e,"a","mul"),o=P(t,"b","mul");[r,o]=Pt(r,o);let n={a:r,b:o};return k.runKernel(Do,n)}var H=B({mul_:D2});function O2(e){let t=P(e,"x","abs");if(t.dtype==="complex64"){let r={x:t};return k.runKernel(Ws,r)}else{let r={x:t};return k.runKernel(An,r)}}var Ie=B({abs_:O2});function P2(e,t,r,o,n="NHWC",s){let i=e[3],a=[...t,i],l=zm(n);return mu(e,a,r,s,o,null,null,l)}function M2(e,t,r,o,n,s,i="channelsLast"){let[a,l]=Ln(t),c;if(i==="channelsLast")c=[a,l,e[3],e[3]];else if(i==="channelsFirst")c=[a,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return mu(e,c,r,o,n,s,!1,i)}function L2(e,t,r,o,n,s,i="NDHWC"){let[a,l,c]=du(t),u,p;if(i==="NDHWC")p="channelsLast",u=[a,l,c,e[4],e[4]];else if(i==="NCDHW")p="channelsFirst",u=[a,l,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return Vm(e,u,r,o,n,!1,p,s)}function mu(e,t,r,o,n,s,i=!1,a="channelsLast"){let[l,c,u,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,p]=e;else if(a==="channelsFirst")[l,p,c,u]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,d,,h]=t,[x,g]=Ln(r),[m,y]=Ln(o),v=qo(f,m),b=qo(d,y),{padInfo:S,outHeight:I,outWidth:T}=V2(n,c,u,x,g,v,b,s,a),E=i?h*p:h,R;return a==="channelsFirst"?R=[l,E,I,T]:a==="channelsLast"&&(R=[l,I,T,E]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:p,outHeight:I,outWidth:T,outChannels:E,padInfo:S,strideHeight:x,strideWidth:g,filterHeight:f,filterWidth:d,effectiveFilterHeight:v,effectiveFilterWidth:b,dilationHeight:m,dilationWidth:y,inShape:e,outShape:R,filterShape:t}}function Vm(e,t,r,o,n,s=!1,i="channelsLast",a){let[l,c,u,p,f]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,p,f]=e;else if(i==="channelsFirst")[l,f,c,u,p]=e;else throw new Error(`Unknown dataFormat ${i}`);let[d,h,x,,g]=t,[m,y,v]=du(r),[b,S,I]=du(o),T=qo(d,b),E=qo(h,S),R=qo(x,I),{padInfo:F,outDepth:U,outHeight:z,outWidth:ft}=z2(n,c,u,p,m,y,v,T,E,R,a),tt=s?g*f:g,mt;return i==="channelsFirst"?mt=[l,tt,U,z,ft]:i==="channelsLast"&&(mt=[l,U,z,ft,tt]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:p,inChannels:f,outDepth:U,outHeight:z,outWidth:ft,outChannels:tt,padInfo:F,strideDepth:m,strideHeight:y,strideWidth:v,filterDepth:d,filterHeight:h,filterWidth:x,effectiveFilterDepth:T,effectiveFilterHeight:E,effectiveFilterWidth:R,dilationDepth:b,dilationHeight:S,dilationWidth:I,inShape:e,outShape:mt,filterShape:t}}function B2(e,t,r,o,n){o==null&&(o=gu(e,t,r));let s=e[0],i=e[1],a=Bn((s-t+2*o)/r+1,n),l=Bn((i-t+2*o)/r+1,n);return[a,l]}function U2(e,t,r,o,n,s){n==null&&(n=gu(e,t[0],o[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(i[a]=Bn((e[a]-t[a]+2*n)/o[a]+1,s));return i}function gu(e,t,r,o=1){let n=qo(t,o);return Math.floor((e[0]*(r-1)-r+n)/2)}function Ln(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function du(e){return typeof e=="number"?[e,e,e]:e}function qo(e,t){return t<=1?e:e+(e-1)*(t-1)}function V2(e,t,r,o,n,s,i,a,l){let c,u,p;if(typeof e=="number"){c={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};let d=B2([t,r],s,o,e,a);u=d[0],p=d[1]}else if(e==="same"){u=Math.ceil(t/o),p=Math.ceil(r/n);let f=Math.max(0,(u-1)*o+s-t),d=Math.max(0,(p-1)*n+i-r),h=Math.floor(f/2),x=f-h,g=Math.floor(d/2),m=d-g;c={top:h,bottom:x,left:g,right:m,type:"SAME"}}else if(e==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-s+1)/o),p=Math.ceil((r-i+1)/n);else if(typeof e=="object"){let f=l==="channelsLast"?e[1][0]:e[2][0],d=l==="channelsLast"?e[1][1]:e[2][1],h=l==="channelsLast"?e[2][0]:e[3][0],x=l==="channelsLast"?e[2][1]:e[3][1];c={top:f,bottom:d,left:h,right:x,type:f===0&&d===0&&h===0&&x===0?"VALID":"EXPLICIT"},u=Bn((t-s+f+d)/o+1,a),p=Bn((r-i+h+x)/n+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outHeight:u,outWidth:p}}function z2(e,t,r,o,n,s,i,a,l,c,u){let p,f,d,h;if(e==="valid"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};let g=U2([t,r,o,1],[a,l,c],1,[n,s,i],e,u);f=g[0],d=g[1],h=g[2]}else if(e==="same"){f=Math.ceil(t/n),d=Math.ceil(r/s),h=Math.ceil(o/i);let x=(f-1)*n+a-t,g=(d-1)*s+l-r,m=(h-1)*i+c-o,y=Math.floor(x/2),v=x-y,b=Math.floor(g/2),S=g-b,I=Math.floor(m/2),T=m-I;p={top:b,bottom:S,left:I,right:T,front:y,back:v,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:d,outWidth:h}}function Bn(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function hu(e){let[t,r,o]=Ln(e);return t===1&&r===1&&o===1}function W2(e,t){return hu(e)||hu(t)}function G2(e){return Ln(e).every(t=>t>0)}function zm(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function H2(e,t,r){if(r!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if(typeof t=="number")D(En(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);else if(typeof t=="object")t.forEach(o=>{o.forEach(n=>{D(En(n),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${n}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function q2(e,t){let o={x:P(e,"x","reshape","string_or_numeric")},n={shape:t};return k.runKernel(pi,o,n)}var bt=B({reshape_:q2});function K2(e,t,r=!1,o=!1){let n=P(e,"a","matMul"),s=P(t,"b","matMul");[n,s]=Pt(n,s);let i={a:n,b:s},a={transposeA:r,transposeB:o};return k.runKernel(Vs,i,a)}var le=B({matMul_:K2});function X2(e){let r={x:P(e,"x","sigmoid","float32")};return k.runKernel(Oo,r)}var Wm=B({sigmoid_:X2});function j2(e,t){let r=P(e,"broadcastTo","x"),o=r.shape;if(Ce(t),t.length<r.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){let c=r.shape.slice();for(;c.length<t.length;)c.unshift(1);r=bt(r,c)}let n=r.shape,s=Array.from(t);for(let c=t.length-1;c>=0;c--)if(n[c]===t[c])s[c]=1;else if(r.shape[c]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(s.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return Pi(r);let a={x:r},l={reps:s};return k.runKernel(xi,a,l)}var xu=B({broadcastTo_:j2});function Gm(e,t,r){Ce(e),r=r||hr(t);let o={shape:e,value:t,dtype:r};return k.runKernel(js,{},o)}var Un={};dr(Un,{assertAndGetBroadcastShape:()=>Li,getBroadcastDims:()=>Hm,getReductionAxes:()=>Mi});function Hm(e,t){let r=e.length,o=[];for(let n=0;n<r;n++){let s=r-1-n,i=e[s]||1;(t[t.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function Mi(e,t){let r=[];for(let o=0;o<t.length;o++){let n=e[e.length-o-1],s=t.length-o-1,i=t[s];(n==null||n===1&&i>1)&&r.unshift(s)}return r}function Li(e,t){let r=Math.max(e.length,t.length),o=new Array(r);for(let n=0;n<r;n++){let s=e[e.length-n-1];s==null&&(s=1);let i=t[t.length-n-1];if(i==null&&(i=1),s===1)o[r-n-1]=i;else if(i===1)o[r-n-1]=s;else if(s!==i){let a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else o[r-n-1]=s}return o}function Y2(e){let r={x:P(e,"x","zerosLike")};return k.runKernel(yi,r)}var Ut=B({zerosLike_:Y2});function Q2(e,t){let r=P(e,"t1","dot"),o=P(t,"t2","dot");D((r.rank===1||r.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${r.rank} and ${o.rank}.`);let n=r.rank===1?r.size:r.shape[1],s=o.rank===1?o.size:o.shape[0];if(D(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),r.rank===1&&o.rank===1){let i=bt(r,[1,-1]),a=bt(o,[-1,1]),l=le(i,a);return bt(l,[])}else if(r.rank===1&&o.rank===2){let i=bt(r,[1,-1]),a=bt(o,[o.shape[0],o.shape[1]]),l=le(i,a);return bt(l,[l.size])}else if(r.rank===2&&o.rank===1){let i=bt(o,[-1,1]),a=le(r,i);return bt(a,[a.size])}else{let i=bt(o,[o.shape[0],o.shape[1]]);return le(r,i)}}var yu=B({dot_:Q2});function Z2(e){let r={x:P(e,"x","elu","float32")};return k.runKernel(Hs,r)}var qm=B({elu_:Z2});function wu(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function Km(e,t,r){let o=e.length+t.length,n=[],s=0,i=0;for(let a=0;a<o;a++)r.indexOf(a)===-1?n.push(e[s++]):n.push(t[i++]);return n}function J2(e,t){let r=[],o=e.length;for(let s=0;s<o;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]}function bu(e,t){let r=t.map(o=>1);return Km(e,r,t)}function tI(e,t,r){D(wu(t,r),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${r} input.`)}function eI(e,t){if(wu(e,t))return null;let r=[];for(let o=0;o<t;++o)e.indexOf(o)===-1&&r.push(o);return e.forEach(o=>r.push(o)),r}function rI(e){return e.map((t,r)=>[r,t]).sort((t,r)=>t[1]-r[1]).map(t=>t[0])}function oI(e,t){let r=[];for(let o=t-e;o<t;++o)r.push(o);return r}function sI(e,t=null,r=!1){let n={x:P(e,"x","max")},s={reductionIndices:t,keepDims:r};return k.runKernel(ni,n,s)}var Bi=B({max_:sI});function iI(e,t=null,r=!1){let n={x:P(e,"x","min")},s={axis:t,keepDims:r};return k.runKernel(si,n,s)}var vu=B({min_:iI});function aI(e,t){let r=P(e,"base","pow"),o=P(t,"exp","pow");[r,o]=Pt(r,o);let n={a:r,b:o};return k.runKernel(li,n)}var Vn=B({pow_:aI});function Ft(e,t){if((Lt(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Lt(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ai(e,[],[],t)}function lI(e){let r={x:P(e,"x","sqrt","float32")};return k.runKernel(Po,r)}var Zt=B({sqrt_:lI});function cI(e){let t=P(e,"x","square"),r={};return k.runKernel("Square",{x:t},r)}var ce=B({square_:cI});function uI(e,t=null,r=!1){let o=P(e,"x","sum");o.dtype==="bool"&&(o=jr(o,"int32"));let n={x:o},s={axis:t,keepDims:r};return k.runKernel(hi,n,s)}var Ye=B({sum_:uI});function pI(e,t="euclidean",r=null,o=!1){e=P(e,"x","norm");let n=Xm(e,t,r),s=n.shape;if(o){let i=Bs(r,e.shape);s=bu(n.shape,i)}return bt(n,s)}function Xm(e,t,r=null){if(e.rank===0)return Ie(e);if(e.rank!==1&&r===null)return Xm(bt(e,[-1]),t,r);if(e.rank===1||typeof r=="number"||Array.isArray(r)&&r.length===1){if(t===1)return Ye(Ie(e),r);if(t===1/0)return Bi(Ie(e),r);if(t===-1/0)return vu(Ie(e),r);if(t==="euclidean"||t===2)return Zt(Ye(Vn(Ie(e),Ft(2,"int32")),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(r)&&r.length===2){if(t===1)return Bi(Ye(Ie(e),r[0]),r[1]-1);if(t===1/0)return Bi(Ye(Ie(e),r[1]),r[0]);if(t===-1/0)return vu(Ye(Ie(e),r[1]),r[0]);if(t==="fro"||t==="euclidean")return Zt(Ye(ce(e),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${r}`)}var jm=B({norm_:pI});function fI(e){let r={input:P(e,"input","imag")};return k.runKernel(Js,r)}var Ym=B({imag_:fI});function dI(e,t=.2){let o={x:P(e,"x","leakyRelu")},n={alpha:t};return k.runKernel(ti,o,n)}var Qm=B({leakyRelu_:dI});function Zm(e,t){D(ko(e),()=>"The f passed in variableGrads(f) must be a function"),D(t==null||Array.isArray(t)&&t.every(c=>c instanceof qe),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let r=t!=null;if(!r){t=[];for(let c in k.registeredVariables)t.push(k.registeredVariables[c])}let o=r?t.filter(c=>!c.trainable):null,n=t.length;t=t.filter(c=>c.trainable),D(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:i,grads:a}=k.gradients(e,t,null,s);D(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),D(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),o?.forEach(c=>l[c.name]=null),{value:i,grads:l}}function hI(e){let r={x:P(e,"x","neg")};return k.runKernel(Nn,r)}var zn=B({neg_:hI});function mI(e,t){let r=P(e,"a","sub"),o=P(t,"b","sub");[r,o]=Pt(r,o);let n={a:r,b:o};return k.runKernel(Mo,n)}var ge=B({sub_:mI});function gI(e,t){let r=P(e,"a","maximum"),o=P(t,"b","maximum");[r,o]=Pt(r,o),r.dtype==="bool"&&(r=jr(r,"int32"),o=jr(o,"int32")),Li(r.shape,o.shape);let n={a:r,b:o};return k.runKernel(Fo,n)}var Jm=B({maximum_:gI});function Wn(e,t="float32"){if(Ce(e),t==="complex64"){let o=Wn(e,"float32"),n=Wn(e,"float32");return ki(o,n)}let r=Ro(ut(e),t);return k.makeTensor(r,e,t)}function xI(e,t){let r=P(e,"x","prelu"),o=P(t,"alpha","prelu"),n={x:r,alpha:o};return k.runKernel(ci,n)}var tg=B({prelu_:xI});function yI(e){let r={input:P(e,"input","real")};return k.runKernel(Fn,r)}var eg=B({real_:yI});function wI(e){let r={x:P(e,"x","relu")};return k.runKernel(ui,r)}var rg=B({relu_:wI});function bI(e){let r={x:P(e,"x","relu6")};return k.runKernel(fi,r)}var og=B({relu6_:bI});function vI(e,t=0){let o={x:P(e,"x","step")},n={alpha:t};return k.runKernel(wi,o,n)}var ng=B({step_:vI});function Qe(e,t,r){if(Ac(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=nu(e,r);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ai(e,t,o,r)}function sg(e,t,r){let o=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${o}, and batchDim: ${n}.`;if(r.rank<n)throw new Error(s+` update.rank < ${n}. `);if(e.length<o+(r.rank-n))throw new Error(s+` Output shape length < ${o+(r.rank-n)}`);if(r.rank!==n+e.length-o)throw new Error(s+` update.rank != ${n+e.length-o}`);for(let i=0;i<n;++i)if(r.shape[i]!==t.shape[i])throw new Error(s+` updates.shape[${i}] (${r.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<r.rank-n;++i)if(r.shape[i+n]!==e[i+o])throw new Error(s+` updates.shape[${i+n}] (${r.shape[i+n]}) != shape[${i+n}] (${e[i+n]})`)}function CI(e,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(r.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}sg(r,t,e)}function SI(e,t,r){let o=t.shape.length,n=o>1?t.shape[o-1]:1,s=r.length,i=1;for(let p=n;p<s;++p)i*=r[p];let a=n<1?1:n,l=ut(t.shape)/a,c=[...De(r.slice(0,n)),1],u=ut(r);return{sliceRank:n,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function ig(e,t){let r=[];for(let s=0;s<t.length;s++)t[s]&&r.push(s);let o=Y(e,"int32"),n=Y([r.length,e.length],"int32");for(let s=0;s<r.length;s++){let i=o.indexToLoc(r[s]),a=s*e.length;n.values.set(i,a)}return n.toTensor()}function $I(e,t,r){let o=P(e,"x","transpose");if(t==null&&(t=o.shape.map((i,a)=>a).reverse()),D(o.rank===t.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${t}.`),t.forEach(i=>{D(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${t}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:t};return o.dtype==="complex64"?q(()=>{let i=eg(o),a=Ym(o);return i=k.runKernel(Lo,{x:i},s),a=k.runKernel(Lo,{x:a},s),r&&(a=zn(a)),ki(i,a)}):k.runKernel(Lo,n,s)}var ag=B({transpose_:$I});function II(e,t,r){if(r==null||r==="linear")return e;if(r==="relu")return H(e,ng(t));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function TI(e,t){let r=t,o=Mi(e.shape,t.shape);return o.length>0&&(r=Ye(r,o)),bt(r,e.shape)}function EI(e,t,r,o){if(t==="linear")return e;if(t==="relu")return rg(e);if(t==="elu")return qm(e);if(t==="relu6")return og(e);if(t==="prelu")return tg(e,r);if(t==="leakyrelu")return Qm(e,o);if(t==="sigmoid")return Wm(e);throw new Error(`Unknown fused activation ${t}.`)}var _I=(e,t)=>!(e>0)||t==="linear";function lg(e,t,r){let o=kI(e,t,r),n=o<0?-(o+1):o;e.splice(n,0,t)}function kI(e,t,r){return RI(e,t,r||AI)}function AI(e,t){return e>t?1:e<t?-1:0}function RI(e,t,r){let o=0,n=e.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=r(t,e[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function ug(e,t,r,o,n){return Cu(e,t,r,o,n,0)}function pg(e,t,r,o,n,s){return Cu(e,t,r,o,n,0,!1,s,!0)}function fg(e,t,r,o,n,s){return Cu(e,t,r,o,n,s,!0)}function Cu(e,t,r,o,n,s,i=!1,a=!1,l=!1){let c=[];for(let g=0;g<t.length;g++)t[g]>n&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(cg);let u=s>0?-.5/s:0,p=[],f=[];for(;p.length<r&&c.length>0;){let g=c.pop(),{score:m,boxIndex:y,suppressBeginIndex:v}=g;if(m<n)break;let b=!1;for(let S=p.length-1;S>=v;--S){let I=NI(e,y,p[S]);if(I>=o){b=!0;break}if(g.score=g.score*FI(o,u,I),g.score<=n)break}g.suppressBeginIndex=p.length,b||(g.score===m?(p.push(y),f.push(g.score)):g.score>n&&lg(c,g,cg))}let d=p.length,h=r-d;a&&h>0&&(p.push(...new Array(h).fill(0)),f.push(...new Array(h).fill(0)));let x={selectedIndices:p};return i&&(x.selectedScores=f),l&&(x.validOutputs=d),x}function NI(e,t,r){let o=e.subarray(t*4,t*4+4),n=e.subarray(r*4,r*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),c=Math.min(n[0],n[2]),u=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),f=Math.max(n[1],n[3]),d=(a-s)*(l-i),h=(p-c)*(f-u);if(d<=0||h<=0)return 0;let x=Math.max(s,c),g=Math.max(i,u),m=Math.min(a,p),y=Math.min(l,f),v=Math.max(m-x,0)*Math.max(y-g,0);return v/(d+h-v)}function FI(e,t,r){let o=Math.exp(t*r*r);return r<=e?o:0}function cg(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var Ui=class{getClassName(){return this.constructor.className}static fromConfig(t,r){return new t(r)}},Ze=class{constructor(){this.classNameMap={}}static getMap(){return Ze.instance==null&&(Ze.instance=new Ze),Ze.instance}static register(t){Ze.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function dg(e){D(e.className!=null,()=>"Class being registered does not have the static className property defined."),D(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),D(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Ze.register(e)}var Vt=class extends Ui{minimize(t,r=!1,o){let{value:n,grads:s}=this.computeGradients(t,o);if(o!=null){let i=o.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return wt(s),r?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,r){return Zm(t,r)}dispose(){this.iterations_!=null&&wt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Ft(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(Vt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var Vi=class extends Vt{static get className(){return"Adadelta"}constructor(t,r,o=null){super(),this.learningRate=t,this.rho=r,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:q(()=>Ut(s).variable(i))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:q(()=>Ut(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedGrads[n].variable,c=this.accumulatedUpdates[n].variable;q(()=>{let u=K(H(l,this.rho),H(ce(a),1-this.rho)),p=H(It(Zt(K(c,this.epsilon)),Zt(K(l,this.epsilon))),a),f=K(H(c,this.rho),H(ce(p),1-this.rho));l.assign(u),c.assign(f);let d=K(H(p,-this.learningRate),s);s.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(wt(this.accumulatedGrads.map(t=>t.variable)),wt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=t.length/2,o=!1;this.accumulatedGrads=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.rho,r.epsilon)}};var zi=class extends Vt{static get className(){return"Adagrad"}constructor(t,r=.1){super(),this.learningRate=t,this.initialAccumulatorValue=r,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:q(()=>Gm(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(t)?t[n].tensor:t[o];if(i==null)return;let a=this.accumulatedGrads[n].variable;q(()=>{let l=K(a,ce(i));a.assign(l);let c=K(H(It(i,Zt(K(l,k.backend.epsilon()))),-this.learningRate),s);s.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&wt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulatedGrads=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,r){return new t(r.learningRate,r.initialAccumulatorValue)}};var Wi=class extends Vt{static get className(){return"Adam"}constructor(t,r,o,n=null){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],q(()=>{this.accBeta1=Ft(r).variable(),this.accBeta2=Ft(o).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);q(()=>{let o=ge(1,this.accBeta1),n=ge(1,this.accBeta2);r.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:q(()=>Ut(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:q(()=>Ut(a).variable(l))});let c=Array.isArray(t)?t[i].tensor:t[s];if(c==null)return;let u=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,f=K(H(u,this.beta1),H(c,1-this.beta1)),d=K(H(p,this.beta2),H(ce(c),1-this.beta2)),h=It(f,o),x=It(d,n);u.assign(f),p.assign(d);let g=K(H(It(h,K(Zt(x),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(H(this.accBeta1,this.beta1)),this.accBeta2.assign(H(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&wt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&wt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t),q(()=>{this.accBeta1.assign(Vn(this.beta1,this.iterations_+1)),this.accBeta2.assign(Vn(this.beta2,this.iterations_+1))});let r=t.length/2,o=!1;this.accumulatedFirstMoment=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon)}};var Gi=class extends Vt{static get className(){return"Adamax"}constructor(t,r,o,n=null,s=0){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],q(()=>{this.iteration=Ft(0).variable(),this.accBeta1=Ft(r).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);q(()=>{let o=ge(1,this.accBeta1),n=It(-this.learningRate,K(H(this.iteration,this.decay),1));r.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:Ut(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:Ut(a).variable(l)});let c=Array.isArray(t)?t[i].tensor:t[s];if(c==null)return;let u=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,f=K(H(u,this.beta1),H(c,1-this.beta1)),d=H(p,this.beta2),h=Ie(c),x=Jm(d,h);u.assign(f),p.assign(x);let g=K(H(It(n,o),It(f,K(x,this.epsilon))),a);a.assign(g)}),this.iteration.assign(K(this.iteration,1)),this.accBeta1.assign(H(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&wt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&wt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)}};var Ko=class extends Vt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=Array.isArray(t)?t[n].tensor:t[o];if(s==null)return;let i=k.registeredVariables[o];q(()=>{let a=K(H(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Lm(Ft(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,r){return new t(r.learningRate)}};var Hi=class extends Ko{static get className(){return"Momentum"}constructor(t,r,o=!1){super(t),this.learningRate=t,this.momentum=r,this.useNesterov=o,this.accumulations=[],this.m=Ft(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:q(()=>Ut(s).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(t)?t[n].tensor:t[o];a!=null&&q(()=>{let l,c=K(H(this.m,i),a);this.useNesterov?l=K(H(this.c,K(a,H(c,this.m))),s):l=K(H(this.c,c),s),i.assign(c),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&wt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulations=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,r){return new t(r.learningRate,r.momentum,r.useNesterov)}};var qi=class extends Vt{static get className(){return"RMSProp"}constructor(t,r=.9,o=0,n=null,s=!1){if(super(),this.learningRate=t,this.decay=r,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=k.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:q(()=>Ut(s).variable(i))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:q(()=>Ut(s).variable(i))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:q(()=>Ut(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedMeanSquares[n].variable,c=this.accumulatedMoments[n].variable;q(()=>{let u=K(H(l,this.decay),H(ce(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[n].variable,f=K(H(p,this.decay),H(a,1-this.decay)),d=It(H(a,this.learningRate),Zt(ge(u,K(ce(f),this.epsilon)))),h=K(H(c,this.momentum),d);l.assign(u),p.assign(f),c.assign(h);let x=ge(s,h);s.assign(x)}else{let p=K(H(l,this.decay),H(ce(a),1-this.decay)),f=K(H(c,this.momentum),It(H(a,this.learningRate),Zt(K(p,this.epsilon))));l.assign(p),c.assign(f);let d=ge(s,f);s.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&wt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&wt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&wt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=this.centered?t.length/3:t.length/2,o=!1;this.accumulatedMeanSquares=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=t.slice(r*2,r*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,r){return new t(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)}};var DI=[Vi,zi,Wi,Gi,Hi,qi,Ko];function hg(){for(let e of DI)dg(e)}var OI="model",PI=".json",MI=".weights.bin";function mg(e){return new Promise(t=>setTimeout(t)).then(e)}var Je=class{constructor(t){if(!$().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Je.URL_SCHEME)&&(t=t.slice(Je.URL_SCHEME.length)),(t==null||t.length===0)&&(t=OI),this.modelJsonFileName=t+PI,this.weightDataFileName=t+MI}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let r=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],n=Ni(t,o),s=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await mg(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=r,await mg(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Ke(t)}}}};Je.URL_SCHEME="downloads://";var LI=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Je.URL_SCHEME)?BI(e.slice(Je.URL_SCHEME.length)):null;at.registerSaveRouter(LI);function BI(e="model"){return new Je(e)}function Su(e,t,r,o){i(e),r=r??0,o=o??1,a(r,o);let n=0,s=l=>(l.then(c=>{let u=r+ ++n/e.length*(o-r);return t(u),c}),l);function i(l){D(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){D(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),D(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),D(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(e.map(s))}async function gg(e,t){t==null&&(t={});let r=t.fetchFunc==null?$().platform.fetch:t.fetchFunc,o=e.map(p=>r(p,t.requestInit,{isBinary:!0})),n=0,s=.5,a=(t.onProgress==null?await Promise.all(o):await Su(o,t.onProgress,n,s)).map(p=>p.arrayBuffer()),l=.5,c=1;return t.onProgress==null?await Promise.all(a):await Su(a,t.onProgress,l,c)}var VI="application/octet-stream",zI="application/json",Gn=class{constructor(t,r){if(this.DEFAULT_METHOD="POST",r==null&&(r={}),this.weightPathPrefix=r.weightPathPrefix,this.onProgress=r.onProgress,this.weightUrlConverter=r.weightUrlConverter,r.fetchFunc!=null?(D(typeof r.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=r.fetchFunc):this.fetch=$().platform.fetch,D(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&D(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,r.requestInit!=null&&r.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=r.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let r=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);r.body=new FormData;let o=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],n=Ni(t,o);r.body.append("model.json",new Blob([JSON.stringify(n)],{type:zI}),"model.json"),t.weightData!=null&&r.body.append("model.weights.bin",new Blob([t.weightData],{type:VI}),"model.weights.bin");let s=await this.fetch(this.path,r);if(s.ok)return{modelArtifactsInfo:Ke(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let r;try{r=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}let o=r.modelTopology,n=r.weightsManifest;if(o==null&&n==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Fi(r,s=>this.loadWeights(s))}async loadWeights(t){let r=Array.isArray(this.path)?this.path[1]:this.path,[o,n]=WI(r),s=this.weightPathPrefix||o,i=iu(t),a=[],l=[];for(let u of t)for(let p of u.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(p)):a.push(s+p+n);this.weightUrlConverter&&a.push(...await Promise.all(l));let c=await gg(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,Ri(c)]}};Gn.URL_SCHEME_REGEX=/^https?:\/\//;function WI(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?"),o=e.substring(0,t),n=r>t?e.substring(r):"";return[o+"/",n]}function $u(e){return e.match(Gn.URL_SCHEME_REGEX)!=null}var xg=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let r=!0;if(Array.isArray(e)?r=e.every(o=>$u(o)):r=$u(e),r)return yg(e,t)}return null};at.registerSaveRouter(xg);at.registerLoadRouter(xg);function yg(e,t){return new Gn(e,t)}function HI(e,t){let r=e.shape.length,o=t.shape.length;if(r<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>r)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${r}`);if(ut(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let n=t.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=e.shape,l=n.slice();l.pop();let c=1;for(let p=s;p<r;++p)c*=a[p],l.push(a[p]);let u=[...De(e.shape).map(p=>p/c),1].slice(0,s);return[l,i,c,u]}var zt={};dr(zt,{assertParamsValid:()=>KI,computeFlatOffset:()=>ZI,computeOutShape:()=>jI,getNormalizedAxes:()=>YI,isSliceContinous:()=>QI,maskToAxes:()=>XI,parseSliceParams:()=>JI,sliceInfo:()=>tT,startForAxis:()=>Tg,startIndicesWithElidedDims:()=>Sg,stopForAxis:()=>Eg,stopIndicesWithElidedDims:()=>$g,stridesForAxis:()=>Ig,stridesWithElidedDims:()=>bg});var Iu=-2,qI=-1;function KI(e,t,r){let o=e.shape.length;D(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),D(o===r.length,()=>`Error in slice${o}D: Length of size ${r} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)D(t[n]+r[n]<=e.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${t[n]+r[n]}) would overflow input.shape[${n}] (${e.shape[n]})`)}function XI(e){let t=[],r=0;for(;e>0;)e&1&&t.push(r),e/=2,r++;return t}function jI(e,t,r){let o=[];for(let n=0;n<e.length;n++)o[n]=Math.ceil((t[n]-e[n])/r[n]);return o}function bg(e,t,r,o){let n=[...e];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<r;s++)s===0?n[t]=1:(n.splice(t,0,1),n.pop());return n}function vg(e,t,r){return r<=e?r:r-(t-1)}function Cg(e,t){let r=[];for(let o=0;o<e;o++)r.push(t+o);return r}function YI(e,t,r,o,n,s,i,a,l){let c=e.length,u=new Array(c),p=new Array(c),f=new Array(c);if(t.length&&r>0){let d=t[0],h=r+1;u=Sg(i,d,h,o,e),p=$g(a,d,h,n,e),f=bg(s,d,h,e)}else for(let d=0;d<c;d++)u[d]=Tg(i,o,s,e,d,l),p[d]=Eg(a,n,s,e,d,l),f[d]=Ig(s,d,l);return{begin:u,end:p,strides:f}}function Sg(e,t,r,o,n){let s=[...n],i=Cg(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let l=vg(t,r,a),c=o[l];e&1<<l&&(c=0),s[a]=c}return s}function $g(e,t,r,o,n){let s=[...n],i=Cg(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=vg(t,r,a),c=o[l];e&1<<l&&(c=Number.MAX_SAFE_INTEGER),s[a]=c}for(let a=0;a<s.length;a++){let l=n[a];s[a]<0&&(s[a]+=l),s[a]=Io(0,s[a],n[a])}return s}function Ig(e,t,r){let o=e[t];return(r&1<<t||o==null)&&(o=1),o}function Tg(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),i=Io(0,i,l-1),i}function Eg(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),a>0?i=Io(0,i,l):i=Io(-1,i,l-1),i}function QI(e,t,r){let o=r.length;for(let n=0;n<r.length;n++)if(r[n]>1){o=n;break}for(let n=o+1;n<r.length;n++)if(t[n]>0||r[n]!==e[n])return!1;return!0}function ZI(e,t){let r=e.length>0?e[e.length-1]:1;for(let o=0;o<e.length-1;o++)r+=e[o]*t[o];return r}function JI(e,t,r){let o,n=e.shape.length;typeof t=="number"?o=[t,...new Array(n-1).fill(0)]:t.length<n?o=t.concat(new Array(n-t.length).fill(0)):o=t.slice(),o.forEach(i=>{D(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return r==null?s=new Array(n).fill(-1):typeof r=="number"?s=[r,...new Array(n-1).fill(-1)]:r.length<n?s=r.concat(new Array(n-r.length).fill(-1)):s=r,s=s.map((i,a)=>i>=0?i:(D(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),e.shape[a]-o[a])),[o,s]}function tT(e,t,r,o,n,s,i,a,l){let c;if(o==null?(c=new Array(t.length),c.fill(1)):c=o,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1,p={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:c.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let v=0;v<p.dims;v++)u&&1<<v&a&&p.numAddAxisAfterEllipsis++,1<<v&i&&(u=!0);u||(p.ellipsisMask|=1<<p.dims,p.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};eT(p,f);let d=!0,h=!0,x=!0,g=[],m=[];for(let v=0;v<e.length;++v){if(f.strides[v]===0)throw Error(`strides[${v}] must be non-zero`);let b=!!(f.shrinkAxisMask&1<<v),S=e[v];if(S===-1){g.push(b?1:-1);continue}let I=[f.beginMask&1<<v,f.endMask&1<<v],T=[f.strides[v]>0?0:-1,f.strides[v]>0?S:S-1];if(b&&f.strides[v]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&f.strides[v]===1;let E=!!(f.beginMask&1<<v&&f.endMask&1<<v);if(f.beginValid&&f.endValid){if(b){let z=f.begin[v]<0?S+f.begin[v]:f.begin[v];if(f.begin[v]=z,f.end[v]=f.begin[v]+1,z<0||z>=S)throw Error(`slice index ${f.begin[v]} of dimension ${v} out of bounds.`)}else f.begin[v]=wg(f.begin[v],0,f.strides[v],S,I,T),f.end[v]=wg(f.end[v],1,f.strides[v],S,I,T);let U=f.strides[v]===1&&f.begin[v]===0&&f.end[v]===S;d=d&&U,h=h&&(v===0&&f.strides[v]===1||U)}else d=d&&f.strides[v]===1&&E,h=h&&(v===0&&f.strides[v]===1||E);let R,F=!1;if(f.beginValid&&f.endValid?(R=f.end[v]-f.begin[v],F=!0):b?(R=1,F=!0):E&&S>=0&&(f.strides[v]<0?R=-S:R=S,F=!0),F){let U;R===0||R<0!=f.strides[v]<0?U=0:U=Math.trunc(R/f.strides[v])+(R%f.strides[v]!==0?1:0),g.push(U)}else g.push(-1)}for(let v=0;v<f.finalShapeGatherIndices.length;++v){let b=f.finalShapeGatherIndices[v];b>=0?m.push(g[b]):b===Iu&&m.push(1)}return{finalShapeSparse:m.filter((v,b)=>f.finalShapeGatherIndices[b]!==Iu),finalShape:m,isIdentity:d,sliceDim0:h,isSimpleSlice:x,begin:f.begin,end:f.end,strides:f.strides}}function eT(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let r=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<e.dims;o++)if(1<<o&e.ellipsisMask){let n=Math.min(t.dims-(e.dims-o)+1+e.numAddAxisAfterEllipsis,t.dims);for(;r<n;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=o}else if(1<<o&e.newAxisMask)t.finalShapeGatherIndices.push(Iu),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error(`Index out of range using input dim ${r}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[r]=e.begin[o]),e.end!=null&&(t.end[r]=e.end[o]),t.strides[r]=e.strides[o],e.beginMask&1<<o&&(t.beginMask|=1<<r),e.endMask&1<<o&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(qI),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[r]=o,r++}}function wg(e,t,r,o,n,s){if(n[t])return r>0?s[t]:s[t+1&1];{let i=e<0?o+e:e;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var rT=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function Tu(){return new Promise(e=>rT(()=>e()))}var C={};dr(C,{ERF_A1:()=>wT,ERF_A2:()=>bT,ERF_A3:()=>vT,ERF_A4:()=>CT,ERF_A5:()=>ST,ERF_P:()=>yT,PARALLELIZE_THRESHOLD:()=>Ki,RowPartitionType:()=>Le,SELU_SCALE:()=>xT,SELU_SCALEALPHA:()=>gT,applyActivation:()=>EI,assertAndGetBroadcastShape:()=>Li,assertAxesAreInnerMostDims:()=>tI,assertParamsConsistent:()=>oT,assignToTypedArray:()=>kT,axesAreInnerMostDims:()=>wu,calculateShapes:()=>SI,checkEinsumDimSizes:()=>OT,checkPadOnDimRoundingMode:()=>H2,combineLocations:()=>Km,combineRaggedTensorToTensorShapes:()=>sT,complexWithEvenIndex:()=>TT,complexWithOddIndex:()=>ET,computeConv2DInfo:()=>mu,computeConv3DInfo:()=>Vm,computeDefaultPad:()=>gu,computeDilation2DInfo:()=>P2,computeOptimalWindowSize:()=>cT,computeOutAndReduceShapes:()=>J2,computeOutShape:()=>nT,computePool2DInfo:()=>M2,computePool3DInfo:()=>L2,convertConv2DDataFormat:()=>zm,decodeEinsumEquation:()=>FT,eitherStridesOrDilationsAreOne:()=>W2,expandShapeToKeepDim:()=>bu,exponent:()=>RT,exponents:()=>AT,fromStringArrayToUint8:()=>rE,fromUint8ToStringArray:()=>eE,getAxesPermutation:()=>eI,getBroadcastDims:()=>Hm,getComplexWithIndex:()=>_T,getEinsumComputePath:()=>PT,getEinsumPermutation:()=>DT,getFusedBiasGradient:()=>TI,getFusedDyActivation:()=>II,getImageCenter:()=>uT,getInnerMostAxes:()=>oI,getPermuted:()=>fT,getRaggedRank:()=>aT,getReductionAxes:()=>Mi,getReshaped:()=>pT,getReshapedPermuted:()=>dT,getRowPartitionTypesHelper:()=>iT,getSliceBeginCoords:()=>hT,getSliceSize:()=>mT,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>UT,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>VT,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>zT,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>HT,getSparseReshapeInputOutputMismatchErrorMessage:()=>KT,getSparseReshapeInputOutputMultipleErrorMessage:()=>qT,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>WT,getSparseReshapeNegativeOutputDimErrorMessage:()=>GT,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>QT,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>XT,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>jT,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>YT,getUndoAxesPermutation:()=>rI,isIdentityPermutation:()=>MT,log:()=>q$,mergeRealAndImagArrays:()=>$T,prepareAndValidate:()=>HI,prepareSplitSize:()=>BT,segment_util:()=>_u,shouldFuse:()=>_I,slice_util:()=>zt,splitRealAndImagArrays:()=>IT,stridesOrDilationsArePositive:()=>G2,tupleValuesAreOne:()=>hu,upcastType:()=>Nt,validateDefaultValueShape:()=>lT,validateInput:()=>CI,validateUpdateShape:()=>sg,warn:()=>He});function oT(e,t){let r=e[0].length;e.forEach((n,s)=>{D(n.length===r,()=>`Error in concat${r}D: rank of tensors[${s}] must be the same as the rank of the rest (${r})`)}),D(t>=0&&t<r,()=>`Error in concat${r}D: axis must be between 0 and ${r-1}.`);let o=e[0];e.forEach((n,s)=>{for(let i=0;i<r;i++)D(i===t||n[i]===o[i],()=>`Error in concat${r}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function nT(e,t){let r=e[0].slice();for(let o=1;o<e.length;o++)r[t]+=e[o][t];return r}var Le;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(Le||(Le={}));function sT(e,t,r){let o=new Array;if(r==null&&t==null)return o;if(t==null)for(;o.length<e+r.length;)o.push(-1);else o=t.slice();if(r==null)return o;if(e+r.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+r.length}, but shape.rank = ${o.length}`);for(let n=1;n<r.length;++n){let s=r[n],i=o[o.length-r.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+e}] = ${s} but shape[${n+e}] = ${a}`)}else o[i]=s}return o}function iT(e){let t={FIRST_DIM_SIZE:Le.FIRST_DIM_SIZE,VALUE_ROWIDS:Le.VALUE_ROWIDS,ROW_LENGTHS:Le.ROW_LENGTHS,ROW_SPLITS:Le.ROW_SPLITS,ROW_LIMITS:Le.ROW_LIMITS,ROW_STARTS:Le.ROW_STARTS},r=[];for(let o of e)if(o in t)r.push(t[o]);else break;return r}function aT(e){return e.length===0?0:e[0]===Le.FIRST_DIM_SIZE?e.length-1:e.length}function lT(e,t){if(e==null||t==null)return;let r=e.length,o=t.length;if(r>=o)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${r} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(r,o-1);++n){let s=e[n],i=t[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-e.length}] = ${s} but ragged tensor input.flatValues.shape[${n-e.length}] = ${i}`)}}var Ki=30;function cT(e){return e<=Ki?e:Ao(e,Math.floor(Math.sqrt(e)))}function uT(e,t,r){let o=r*(typeof e=="number"?e:e[0]),n=t*(typeof e=="number"?e:e[1]);return[o,n]}function pT(e,t,r,o=!0){let n=[];if(o)n=n.concat(t.slice(0)),n.push(e[0]/r),n=n.concat(e.slice(1));else{n=n.concat(e[0]);let s=t.length;for(let i=0;i<s;++i)n=n.concat([e[i+1]/t[i],t[i]]);n=n.concat(e.slice(s+1))}return n}function fT(e,t,r=!0){let o=[];if(r){o.push(t);for(let n=t+1;n<e;++n)n<=2*t?(o.push(n),o.push(n-(t+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<e;++i)i>=t*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function dT(e,t,r,o=!0){let n=[];o?n.push(e[0]/r):n.push(e[0]*r);for(let s=1;s<e.length;++s)s<=t.length?o?n.push(t[s-1]*e[s]):n.push(e[s]/t[s-1]):n.push(e[s]);return n}function hT(e,t){let r=[0];for(let o=0;o<t;++o)r.push(e[o][0]);return r}function mT(e,t,r){let o=e.slice(0,1);for(let n=0;n<r;++n)o.push(e[n+1]-t[n][0]-t[n][1]);return o}var gT=1.7580993408473768,xT=1.0507009873554805;var yT=.3275911,wT=.254829592,bT=-.284496736,vT=1.421413741,CT=-1.453152027,ST=1.061405429;function $T(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let r=new Float32Array(e.length*2);for(let o=0;o<r.length;o+=2)r[o]=e[o/2],r[o+1]=t[o/2];return r}function IT(e){let t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let o=0;o<e.length;o+=2)t[o/2]=e[o],r[o/2]=e[o+1];return{real:t,imag:r}}function TT(e){let t=Math.ceil(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=0;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function ET(e){let t=Math.floor(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=2;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function _T(e,t){let r=e[t*2],o=e[t*2+1];return{real:r,imag:o}}function kT(e,t,r,o){e[o*2]=t,e[o*2+1]=r}function AT(e,t){let r=new Float32Array(e/2),o=new Float32Array(e/2);for(let n=0;n<Math.ceil(e/2);n++){let s=(t?2:-2)*Math.PI*(n/e);r[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:r,imag:o}}function RT(e,t,r){let o=(r?2:-2)*Math.PI*(e/t),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var Eu="->",NT=/->/g,_g=",",kg="...";function FT(e,t){e=e.replace(/\s/g,"");let r=(e.length-e.replace(NT,"").length)/Eu.length;if(r<1)throw new Error("Equations without an arrow are not supported.");if(r>1)throw new Error(`Equation must contain exactly one arrow ("${Eu}").`);let[o,n]=e.split(Eu);D(o.indexOf(kg)===-1,()=>`The ellipsis notation ("${kg}") is not supported yet.`);let s=o.split(_g),i=s.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let f=0;f<n.length;++f){let d=n[f];if(!s.some(h=>h.indexOf(d)!==-1))throw new Error(`Output subscripts contain the label ${d} not present in the input subscripts.`);a.indexOf(d)===-1&&a.push(d)}for(let f=0;f<o.length;++f){let d=o[f];a.indexOf(d)===-1&&d!==_g&&a.push(d)}let l=new Array(s.length);for(let f=0;f<i;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let d=0;d<s[f].length;++d)l[f].push(a.indexOf(s[f][d]))}let c=a.length,u=n.length,p=[];for(let f=u;f<c;++f)p.push(f);return{allDims:a,summedDims:p,idDims:l}}function DT(e,t){let r=new Array(e);r.fill(-1);for(let n=0;n<t.length;++n)r[t[n]]=n;let o=[];for(let n=0;n<e;++n)r[n]===-1&&o.push(n);return r=r.filter(n=>n!==-1),{permutationIndices:r,expandDims:o}}function OT(e,t,r){let o=new Array(e);for(let n=0;n<r.length;++n){let s=r[n].shape;for(let i=0;i<t[n].length;++i)o[t[n][i]]===void 0?o[t[n][i]]=s[i]:D(o[t[n][i]]===s[i],()=>`Expected dimension ${o[t[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function PT(e,t){let r=e,o=[],n=0;e.length===0&&r.push(-1),n=e.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<r.length;++i){let a=r[i],l=LT(t,a);for(let c of l)s.indexOf(c)===-1&&(o[i].push(c),s.push(c))}return{path:r,steps:o}}function MT(e){return e.every((t,r)=>t===r)}function LT(e,t){let r=[];for(let o=0;o<e.length;++o)(e[o].length===0||e[o].indexOf(t)!==-1||t===-1)&&r.push(o);return r}function BT(e,t,r=0){let o=[];if(typeof t=="number")D(e.shape[r]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(e.shape[r]/t);else{let n=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);D(n<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let i=t.reduce((a,l)=>l>0?a+l:a);t[s]=e.shape[r]-i}D(e.shape[r]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}function UT(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function VT(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function zT(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`}function WT(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function GT(e,t){return`size ${e} must be non-negative, not ${t}`}function HT(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function qT(e,t){let r=ut(e),o=ut(t);return`Input to reshape is a SparseTensor with ${r}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${e} outputShape= ${t}`}function KT(e,t){let r=ut(e),o=ut(t);return`Input to reshape is a tensor with ${r} dense values, but the requested shape has ${o}. inputShape=${e} outputShape=${t}`}function XT(){return"segment ids must be >= 0"}function jT(){return"segment ids are not increasing"}function YT(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function QT(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`}var _u={};dr(_u,{collectGatherOpShapeInfo:()=>tE,computeOutShape:()=>JT,segOpComputeOptimalWindowSize:()=>ZT});function ZT(e,t){let r=!1,o;for(e<=Ki?(o=e,r=!0):o=Ao(e,Math.floor(Math.sqrt(e)));!r;)o>t||o===e?r=!0:o=Ao(e,o+1);return o}function JT(e,t,r){let o=[],n=e.length;for(let s=0;s<n;s++)s!==t?o.push(e[s]):o.push(r);return o}function tE(e,t,r,o){let n=t.shape.length,s=e.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(r<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${r}).`);for(let p=0;p<o;++p)if(e.shape[p]!==t.shape[p])throw new Error(`x.shape[${p}]: ${e.shape[p]} should be equal to indices.shape[${p}]: ${t.shape[p]}.`);let i=e.shape[r],a=[],l=1,c=1,u=1;for(let p=0;p<o;++p)a.push(e.shape[p]),l*=e.shape[p];for(let p=o;p<r;p++)a.push(e.shape[p]),c*=e.shape[p];for(let p=o;p<n;p++)a.push(t.shape[p]);for(let p=r+1;p<s;p++)a.push(e.shape[p]),u*=e.shape[p];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function eE(e){try{return e.map(t=>Wo(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function rE(e){return e.map(t=>zo(t))}var Be={};dr(Be,{nonMaxSuppressionV3Impl:()=>ug,nonMaxSuppressionV4Impl:()=>pg,nonMaxSuppressionV5Impl:()=>fg,whereImpl:()=>ig});hg();var Yr={},Xi={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ag(e,t){Yr[e]=t}function Jt(e,t){if(!(e in Yr)||t!=null){let o=nE(e,t);if(o!==null)Yr[e]=o;else return console.log("Could not get context for WebGL version",e),null}let r=Yr[e];return r==null||r.isContextLost()?(delete Yr[e],Jt(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),Yr[e])}function oE(e){if(!$().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&e===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function nE(e,t){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=t??oE(e);return r.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete Yr[e]},!1),$().getBool("SOFTWARE_WEBGL_ENABLED")&&(Xi.failIfMajorPerformanceCaveat=!1),e===1?r.getContext("webgl",Xi)||r.getContext("experimental-webgl",Xi):r.getContext("webgl2",Xi)}var vr;(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(vr||(vr={}));var kt;(function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"})(kt||(kt={}));var Tt;(function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Tt||(Tt={}));function Qr(e,t){return[t,e]}function Rg(e,t){return e*t}function Hn(e){let t=w.sizeFromShape(e),r=Math.ceil(t/4);return w.sizeToSquarishShape(r)}function Ue(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Ng(e,t){let[r,o]=Ue(e,t);return r*o*4}function qn(e,t){let r=e,o,n,s,i,a,l,c,u,p,f;return $().getNumber("WEBGL_VERSION")===2?(o=r.R32F,n=r.R16F,s=r.RGBA16F,i=r.RGBA32F,a=r.RED,c=4,u=1,p=r.HALF_FLOAT,f=r.FLOAT,l=r.RGBA8):(o=e.RGBA,n=e.RGBA,s=e.RGBA,i=r.RGBA,a=e.RGBA,c=4,u=4,p=t!=null?t.HALF_FLOAT_OES:null,f=e.FLOAT,l=e.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:p,textureTypeFloat:f}}function M(e,t){let r=t();return $().getBool("DEBUG")&&sE(e),r}function sE(e){let t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+lE(e,t))}var iE=596e-10,aE=65504;function Fg(e){return!!($().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||iE<Math.abs(e)&&Math.abs(e)<aE)}function lE(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Kn(e,t){return tr(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function Dg(e,t){let r=tr(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(M(e,()=>e.shaderSource(r,t)),M(e,()=>e.compileShader(r)),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Og(e,t){let r=tr(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(M(e,()=>e.shaderSource(r,t)),M(e,()=>e.compileShader(r)),$().get("ENGINE_COMPILE_ONLY"))return r;if(e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw Du(t,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var cE=/ERROR: [0-9]+:([0-9]+):/g;function Du(e,t){let r=cE.exec(t);if(r==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let o=+r[1],n=e.split(`
`),s=n.length.toString().length+2,i=n.map((p,f)=>w.rightPad((f+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let l=i.slice(0,o-1),c=i.slice(o-1,o),u=i.slice(o);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${w.rightPad(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function Pg(e){return tr(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function Mg(e,t){if(M(e,()=>e.linkProgram(t)),!$().get("ENGINE_COMPILE_ONLY")&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Yi(e,t){if(M(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function Lg(e,t){let r=tr(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return M(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),M(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function Bg(e,t){let r=tr(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return M(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),M(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function Ug(e){return tr(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function Vg(e,t){let r=$().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){let o=`[${e}x${t}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(e>r||t>r){let o=`[${e}x${t}]`,n=`[${r}x${r}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function zg(e){return tr(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Ou(e,t,r,o,n,s,i){let a=e.getAttribLocation(t,r);return a===-1?!1:(M(e,()=>e.bindBuffer(e.ARRAY_BUFFER,o)),M(e,()=>e.vertexAttribPointer(a,n,e.FLOAT,!1,s,i)),M(e,()=>e.enableVertexAttribArray(a)),!0)}function uE(e,t,r){fE(e,r),M(e,()=>e.activeTexture(e.TEXTURE0+r)),M(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function Wg(e,t,r){return tr(e,()=>e.getUniformLocation(t,r),'uniform "'+r+'" not present in program.')}function Gg(e,t,r){return e.getUniformLocation(t,r)}function Hg(e,t,r,o){M(e,()=>uE(e,t,o)),M(e,()=>e.uniform1i(r,o))}function Qi(e,t,r){M(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),M(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Pu(e,t){M(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),M(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function Xn(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+pE(e,t))}function pE(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function tr(e,t,r){let o=M(e,()=>t());if(o==null)throw new Error(r);return o}function fE(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=t+e.TEXTURE0;if(o<e.TEXTURE0||o>r){let n=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw new Error(`textureUnit must be in ${n}.`)}}function Cr(e,t=2){return w.sizeFromShape(e.slice(0,e.length-t))}function Sr(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function jn(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[Cr(e),...Sr(e)]),t}function qg(e,t=!1){let r=$().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=$().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&$().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=r/2),t&&(r=r*2,o=o*2,e=e.map((a,l)=>l>=e.length-2?w.nearestLargerEven(e[l]):e[l]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=w.squeezeShape(e).newShape);let n=w.sizeFromShape(e),s=null;e.length<=1&&n<=r?s=[1,n]:e.length===2&&e[0]<=r&&e[1]<=r?s=e:e.length===3&&e[0]*e[1]<=r&&e[2]<=r?s=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=r&&e[1]*e[2]<=r?s=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r?s=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(s=[e[0],e[1]*e[2]*e[3]]);let i=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(s==null||i)if(t){let a=Cr(e),l=2,c=2;e.length&&([l,c]=Sr(e)),n=a*(l/2)*(c/2),s=w.sizeToSquarishShape(n).map(u=>u*2)}else s=w.sizeToSquarishShape(n);return s}function ji(e){return e%2===0}function Zr(e,t){if(e=e.slice(-2),t=t.slice(-2),w.arraysEqual(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let r=e[e.length-1],o=t[t.length-1];if(r===o||ji(r)&&ji(o)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&ji(e[0])&&ji(t[0])}var Ru,Nu;function Kg(e){if(Ru==null){let t=Jt(e);Ru=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ru}function Xg(e){if(Nu==null){let t=Jt(e);Nu=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Nu)}function jg(e){if(e===0)return 0;let t,r=Jt(e);return ue(r,"EXT_disjoint_timer_query_webgl2")&&e===2?t=2:ue(r,"EXT_disjoint_timer_query")?t=1:t=0,t}function ue(e,t){return e.getExtension(t)!=null}function Mu(e){try{if(Jt(e)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function Yg(e){if(e===0)return!1;let t=Jt(e);if(e===1){if(!ue(t,"OES_texture_float"))return!1}else if(!ue(t,"EXT_color_buffer_float"))return!1;return Fu(t)}function Qg(e){if(e===0)return!1;let t=Jt(e);if(e===1){if(!ue(t,"OES_texture_float")||!ue(t,"WEBGL_color_buffer_float"))return!1}else{if(ue(t,"EXT_color_buffer_float"))return Fu(t);let o="EXT_color_buffer_half_float";if(ue(t,o)){let n=t.getExtension(o);return dE(t,n)}return!1}return Fu(t)}function Fu(e){let t=qn(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let o=1,n=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,o,n,0,t.textureFormatFloat,t.textureTypeFloat,null);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(s),i}function dE(e,t){let r=qn(e,t),o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o);let n=1,s=1;e.texImage2D(e.TEXTURE_2D,0,r.internalFormatHalfFloat,n,s,0,r.textureFormatFloat,r.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(o),e.deleteFramebuffer(i),a}function Zg(e){return e!==2?!1:Jt(e).fenceSync!=null}function Ve(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&w.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var V=$();V.registerFlag("HAS_WEBGL",()=>V.getNumber("WEBGL_VERSION")>0);V.registerFlag("WEBGL_VERSION",()=>Mu(2)?2:Mu(1)?1:0);V.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);V.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>V.get("WEBGL_VERSION")===2);V.registerFlag("WEBGL_CPU_FORWARD",()=>!0);V.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);V.registerFlag("WEBGL_PACK",()=>V.getBool("HAS_WEBGL"));V.registerFlag("WEBGL_PACK_NORMALIZATION",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_CLIP",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_REDUCE",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_LAZILY_UNPACK",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_CONV_IM2COL",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Kg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Xg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=V.getNumber("WEBGL_VERSION");return e===0?0:jg(e)});V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>V.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!wr.isMobile());V.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Yg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>V.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:V.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));V.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Qg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Zg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>V.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);V.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)});V.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>wr.isMobile()?1:-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)});V.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);V.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);V.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);V.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);V.registerFlag("WEBGL_EXP_CONV",()=>!1);V.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>V.getBool("IS_TEST"));V.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);V.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);V.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);V.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function rt(){let e,t,r,o,n,s,i,a,l,c;return $().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",r="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=$().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
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
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:r,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Te(e,t,r="index"){let o=w.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / ${n}`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * ${n}`:`index -= ${e[s]} * ${n}`;return`${i}; ${a};`}).join("")}function Jr(e,t,r="index"){let o=w.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * outShapeStrides[${s}]`:`index -= ${e[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function hE(e,t){let r=e.length,o=e.map(s=>`${t}[${s}]`),n=new Array(r-1);n[r-2]=o[r-1];for(let s=r-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function Jg(e,t,r="index"){let o=e.map((s,i)=>i),n=hE(o,t);return n.map((s,i)=>{let a=`int ${e[i]} = ${r} / ${n[i]}`,l=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * ${n[i]}`:`index -= ${e[i]} * ${n[i]}`;return`${a}; ${l};`}).join("")}function Xo(e){let t=w.computeStrides(e).map(r=>r.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function jo(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var Ji=`
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
`;var{getBroadcastDims:tx}=C;function ex(e,t,r){let o=[];if(e.forEach(d=>{let h=w.sizeFromShape(d.shapeInfo.logicalShape);if(d.shapeInfo.isUniform?o.push(`uniform float ${d.name}${h>1?`[${h}]`:""};`):(o.push(`uniform sampler2D ${d.name};`),o.push(`uniform int offset${d.name};`)),r.enableShapeUniforms){let{uniformShape:x}=ta(r.packedInputs,d.shapeInfo.logicalShape,d.shapeInfo.texShape);switch(x.length){case 1:o.push(`uniform int ${d.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${d.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${d.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${d.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${d.name}TexShape;`)}}),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach(d=>{o.push(`uniform ${d.type} ${d.name}${d.arrayIndex?`[${d.arrayIndex}]`:""};`)});let n=o.join(`
`),s=e.map(d=>mE(d,t,r.packedInputs,r.enableShapeUniforms)).join(`
`),i=t.texShape,a=rt(),l=yE(a),c,u,p=vE(a);return t.isPacked?(c=gE(t.logicalShape,i,r.enableShapeUniforms),u=bE(a)):(c=xE(t.logicalShape,i,r.enableShapeUniforms),u=wE(a)),r.packedInputs&&(p+=IE),[p,l,u,n,c,s,r.userCode].join(`
`)}function Qo(e,t=!1){let r=e.shapeInfo.logicalShape;switch(r.length){case 0:return ME(e,t);case 1:return BE(e,t);case 2:return VE(e,t);case 3:return WE(e,t);case 4:return HE(e,t);case 5:return qE(e);case 6:return KE(e);default:throw new Error(`${r.length}-D input sampling is not yet supported`)}}function rx(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return PE(e);case 1:return LE(e,t);case 2:return UE(e,t);case 3:return zE(e,t);default:return GE(e,t)}}function mE(e,t,r=!1,o){let n="";r?n+=rx(e,o):n+=Qo(e,o);let s=e.shapeInfo.logicalShape,i=t.logicalShape;return s.length<=i.length&&(r?n+=XE(e,t):n+=jE(e,t)),n}function gE(e,t,r){switch(e.length){case 0:return ox();case 1:return TE(e,t,r);case 2:return DE(e,t,r);case 3:return _E(e,t,r);default:return AE(e,t,r)}}function xE(e,t,r){switch(e.length){case 0:return ox();case 1:return EE(e,t,r);case 2:return OE(e,t,r);case 3:return kE(e,t,r);case 4:return RE(e,t,r);case 5:return NE(e,t);case 6:return FE(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function yE(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function wE(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function bE(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function vE(e){return`${e.version}
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

    ${CE}
    ${SE}
    ${$E}
  `}var CE=`
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
`,SE=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,$E=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,IE=`
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
`;function ox(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function TE(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return o[0]===1?r?`
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
  `}function EE(e,t,r){return t[0]===1?r?`
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
  `}function _E(e,t,r){if(r)return`
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
  `}function kE(e,t,r){if(r)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Jr(["r","c","d"],e)}
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
  `}function AE(e,t,r){if(r)return`
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
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(e[e.length-1]/2),s=n*Math.ceil(e[e.length-2]/2),i=s,a="",l="b, r, c";for(let c=2;c<e.length-1;c++)i*=e[e.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
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
  `}function RE(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Jr(["r","c","d","d2"],e)}
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
  `}function NE(e,t){let r=Te(["r","c","d","d2","d3"],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function FE(e,t){let r=Te(["r","c","d","d2","d3","d4"],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function DE(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(w.arraysEqual(e,t))return r?`
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
  `}function OE(e,t,r){return w.arraysEqual(e,t)?r?`
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
  `}function to(e){return`offset${e}`}function PE(e){let t=e.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),o=rt();return`
    vec4 ${r}() {
      return ${o.texture2D}(${t}, halfCR);
    }
  `}function ME(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${o}() {return ${r};}`;let[n,s]=e.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${r}, halfCR);
      }
    `;let i=to(r);if(t)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${i});
      return sampleTexture(${r}, uv);
    }
  `;let[a,l]=e.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${r}, uv);
    }
  `}function LE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=e.shapeInfo.texShape,s=rt();if(t)return`
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
  `}function BE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${Zo(e)}
      }
    `;let n=e.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${r}, halfCR);
      }
    `;let a=to(r);return i===1?t?`
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
  `}function UE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=s[0],a=s[1],l=rt();if(s!=null&&w.arraysEqual(r,s))return t?`
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
  `;let c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],u=Math.ceil(r[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `}function VE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape;if(s!=null&&w.arraysEqual(r,s)){if(t)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let f=s[0],d=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${f}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=w.squeezeShape(r),l=i;if(l.length<r.length){let f=Jo(e,l),d=["row","col"];return`
      ${Qo(f,t)}
      float ${n}(int row, int col) {
        return ${n}(${tn(d,a)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${r[1]}, 1)));
        ${Zo(e)}
      }
    `;let c=s[0],u=s[1],p=to(o);return u===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${r[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${o}, uv);
    }
  `:c===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${r[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
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
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${o}, uv);
  }
`}function zE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(r[0]===1){let f=r.slice(1),d=[1,2],h=Jo(e,f),x=["b","row","col"];return`
        ${rx(h,t)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${tn(x,d)});
        }
      `}let a=rt();if(t)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `;let l=i[0],c=i[1],u=Math.ceil(r[2]/2),p=u*Math.ceil(r[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${p}, ${u}, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `}function WE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[1]*r[2],i=r[2],{newShape:a,keptDims:l}=w.squeezeShape(r),c=a;if(c.length<r.length){let x=Jo(e,c),g=["row","col","depth"];return`
        ${Qo(x,t)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${tn(g,l)});
        }
      `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${Zo(e)}
      }
    `;let u=e.shapeInfo.texShape,p=u[0],f=u[1],d=e.shapeInfo.flatOffset;if(f===s&&d==null)return t?`
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
      `;if(f===i&&d==null)return t?`
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
  `;let h=to(o);return t?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${h};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${h};
        vec2 uv = uvFromFlat(${p}, ${f}, index);
        return sampleTexture(${o}, uv);
      }
  `}function GE(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=rt();if(t)return`
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
  `;let s=e.shapeInfo.logicalShape,i=s.length,a=e.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],p=Math.ceil(s[i-1]/2),f=p*Math.ceil(s[i-2]/2),d="int b, int row, int col",h=`b * ${f} + (row / 2) * ${p} + (col / 2)`;for(let x=2;x<i-1;x++)d=`int b${x}, `+d,f*=s[i-x-1],h=`b${x} * ${f} + `+h;return`
    vec4 ${o}(${d}) {
      int index = ${h};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${n.texture2D}(${r}, uv);
    }
  `}function HE(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[3],i=r[2]*s,a=r[1]*i,{newShape:l,keptDims:c}=w.squeezeShape(r);if(l.length<r.length){let y=Jo(e,l),v=["row","col","depth","depth2"];return`
      ${Qo(y,t)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${tn(v,c)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${Zo(e)}
      }
    `;let u=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],d=p[1],h=`int stride2 = ${o}Shape[3];`,x=`int stride1 = ${o}Shape[2] * stride2;`,g=`int stride0 = ${o}Shape[1] * stride1;`;if(d===a&&u==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${h}
        ${x}
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
                   vec2(${d}.0, ${f}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(d===s&&u==null)return t?`
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
                  vec2(${d}.0, ${f}.0);
        return sampleTexture(${o}, uv);
      }
    `;let m=to(o);return t?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${h}
      ${x}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${m});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${f}, ${d}, index + ${m});
      return sampleTexture(${o}, uv);
    }
  `}function qE(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=t[4],s=t[3]*n,i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:c}=w.squeezeShape(t);if(l.length<t.length){let x=Jo(e,l),g=["row","col","depth","depth2","depth3"];return`
      ${Qo(x)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${tn(g,c)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${Zo(e)}
      }
    `;let u=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],d=p[1];if(d===a&&u==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(d===n&&u==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let h=to(r);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${h};
      vec2 uv = uvFromFlat(${f}, ${d}, index);
      return sampleTexture(${r}, uv);
    }
  `}function KE(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),{newShape:n,keptDims:s}=w.squeezeShape(t);if(n.length<t.length){let g=Jo(e,n),m=["row","col","depth","depth2","depth3","depth4"];return`
      ${Qo(g)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${tn(m,s)});
      }
    `}let i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Zo(e)}
      }
    `;let p=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,d=f[0],h=f[1];if(h===u&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${d}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(h===i&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${d}.0);
        return sampleTexture(${r}, uv);
      }
    `;let x=to(r);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${x};
      vec2 uv = uvFromFlat(${d}, ${h}, index);
      return sampleTexture(${r}, uv);
    }
  `}function Zo(e){let t=e.name,r=w.sizeFromShape(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`
    for (int i = 0; i < ${r}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function XE(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=tx(e.shapeInfo.logicalShape,t.logicalShape),l=G(i),c=i-s,u,p=["x","y","z","w","u","v"];s===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(y=>`coords.${p[y+c]} = 0;`).join(`
`);let f="";i<2&&s>0?f="coords":f=e.shapeInfo.logicalShape.map((y,v)=>`coords.${p[v+c]}`).join(", ");let d="return outputValue;",x=w.sizeFromShape(e.shapeInfo.logicalShape)===1,m=w.sizeFromShape(t.logicalShape)===1;if(s===1&&!x&&!m)d=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(x&&!m)i===1?d=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:d=`
        return vec4(outputValue.x);
      `;else if(a.length){let y=s-2,v=s-1;a.indexOf(y)>-1&&a.indexOf(v)>-1?d="return vec4(outputValue.x);":a.indexOf(y)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(v)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${o}(${f});
      ${d}
    }
  `}function jE(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=t.texShape,i=e.shapeInfo.texShape,a=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&a===l&&e.shapeInfo.flatOffset==null&&w.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${r}, resultUV);
      }
    `;let c=G(l),u=tx(e.shapeInfo.logicalShape,t.logicalShape),p=l-a,f,d=["x","y","z","w","u","v"];a===0?f="":l<2&&u.length>=1?f="coords = 0;":f=u.map(x=>`coords.${d[x+p]} = 0;`).join(`
`);let h="";return l<2&&a>0?h="coords":h=e.shapeInfo.logicalShape.map((x,g)=>`coords.${d[g+p]}`).join(", "),`
    float ${n}() {
      ${c} coords = getOutputCoords();
      ${f}
      return get${o}(${h});
    }
  `}function G(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function ta(e,t,r){let{newShape:o,keptDims:n}=w.squeezeShape(t),s=t.length,i=e&&s===3&&t[0]===1,a=i?t.slice(1):o,l=!e&&s>1&&!w.arraysEqual(t,r)&&o.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:n}}function Jo(e,t){let r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function tn(e,t){return t.map(r=>e[r]).join(", ")}function sx(e,t,r,o){let n=r.map((u,p)=>{let f={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(f.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[p],shapeInfo:f}}),s=n.map(u=>u.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=ex(n,i,t),l=Og(e.gl,a),c=e.createProgram(l);return $().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:s,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:s,outShapeInfo:i},Lu(e,t,c))}function Lu(e,t,r){let o=[],n=[],s,i,a,l=null,c=null;c=e.getUniformLocation(r,"NAN",!1),$().getNumber("WEBGL_VERSION")===1&&(l=e.getUniformLocation(r,"INFINITY",!1));let u=!1;for(let p of t.variableNames){let f={name:p,uniform:e.getUniformLocation(r,p,u),offset:e.getUniformLocation(r,`offset${p}`,u)};t.enableShapeUniforms&&(f.shape=e.getUniformLocation(r,`${p}Shape`,u),f.texShape=e.getUniformLocation(r,`${p}TexShape`,u)),o.push(f)}if(t.enableShapeUniforms&&(s=e.getUniformLocation(r,"outShape",u),a=e.getUniformLocation(r,"outShapeStrides",u),i=e.getUniformLocation(r,"outTexShape",u)),t.customUniforms)for(let p of t.customUniforms)n.push(e.getUniformLocation(r,p.name,u));return{variablesLocations:o,customUniformLocations:n,infLoc:l,nanLoc:c,outShapeLocation:s,outShapeStridesLocation:a,outTexShapeLocation:i}}function nx(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((r,o)=>{let n=r.logicalShape,s=t[o],i=s.shape;if(!w.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(r.isUniform&&s.isUniform)return;let a=r.texShape,l=s.isUniform?null:s.texData.texShape;if(!w.arraysEqual(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function ix(e,t,r,o,n){t.program.enableShapeUniforms||(nx(t.inShapeInfos,r),nx([t.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):e.setOutputMatrixTexture(s.texture,i[0],i[1]),e.setProgram(t.webGLProgram),$().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<r.length;++l){let c=r[l],{uniform:u,offset:p,shape:f,texShape:d}=t.variablesLocations[l];if(f){let{uniformShape:h}=ta(t.program.packedInputs,c.shape,c.texData.texShape);switch(h.length){case 1:e.gl.uniform1iv(f,new Int32Array(h));break;case 2:e.gl.uniform2iv(f,new Int32Array(h));break;case 3:e.gl.uniform3iv(f,new Int32Array(h));break;case 4:e.gl.uniform4iv(f,new Int32Array(h));break;default:break}}if(d&&e.gl.uniform2i(d,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(w.sizeFromShape(c.shape)<2)e.gl.uniform1f(u,c.uniformValues[0]);else{let h=c.uniformValues;h instanceof Float32Array||(h=new Float32Array(h)),e.gl.uniform1fv(u,h)}continue}c.texData.slice!=null&&p!=null&&e.gl.uniform1i(p,c.texData.slice.flatOffset),e.setInputMatrixTexture(c.texData.texture.texture,u,l)}}let a=t.outShapeLocation;if(a)switch(o.shape.length){case 1:e.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:e.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:e.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:e.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(t.outShapeStridesLocation){let l=w.computeStrides(o.shape);switch(o.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&n)for(let l=0;l<t.program.customUniforms.length;++l){let c=t.program.customUniforms[l],u=t.customUniformLocations[l],p=n[l];if(c.type==="float")e.gl.uniform1fv(u,p);else if(c.type==="vec2")e.gl.uniform2fv(u,p);else if(c.type==="vec3")e.gl.uniform3fv(u,p);else if(c.type==="vec4")e.gl.uniform4fv(u,p);else if(c.type==="int")e.gl.uniform1iv(u,p);else if(c.type==="ivec2")e.gl.uniform2iv(u,p);else if(c.type==="ivec3")e.gl.uniform3iv(u,p);else if(c.type==="ivec4")e.gl.uniform4iv(u,p);else throw Error(`uniform type ${c.type} is not supported yet.`)}e.executeProgram()}function ax(e,t,r){let o="";t.concat(r).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!i.isUniform){let l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:p}=ta(e.packedInputs,i.shape,l),f="",d="",h="";if(u.length===1&&e.packedInputs){let S=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];f=`${S[0]>1}_${S[1]>1}`}else if(u.length===2&&!e.packedInputs)d=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!e.packedInputs){let S=w.computeStrides(u);h=`${S[0]===l[1]}_${S[S.length-1]===l[1]}`}let x=i.shape.length,g=u.length===2&&w.arraysEqual(i.shape,l),m=w.sizeFromShape(i.shape)===1,y=C.getBroadcastDims(i.shape,r.shape),v=!e.packedInputs&&x===r.shape.length&&w.arraysEqual(l,r.texData.texShape),b=e.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;o+=`${x}_${v}_${c?p:""}_${u.length}_${m}_${y}_${g}_${f}_${d}_${h}_${b}_${a}`}else{let l=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${l}_${a}`}});let n=e.userCode,s=e.constructor.name;return s+="_"+o+"_"+n+`${$().getNumber("WEBGL_VERSION")}`,s}function j(e){return $().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}var ea=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=vr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=rt();this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Jr(["r","c","d"],t):Te(["r","c","d"],t)}
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
    `}};var ra=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=vr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=rt();this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Jr(["r","c","d"],t):Te(["r","c","d"],t)}
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
    `}};var oa=class{constructor(t){this.variableNames=["A"],this.outTexUsage=kt.DOWNLOAD;let r=rt();this.outputShape=t,this.userCode=`
      ${Ji}

      void main() {
        float x = getAAtOutCoords();
        ${r.output} = encode_float(x);
      }
    `}};var na=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=kt.DOWNLOAD;let r=rt();this.outputShape=t,this.userCode=`
      ${Ji}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${r.output} = encode_float(x);
      }
    `}};var ZE={R:0,G:1,B:2,A:3},Yn=class{constructor(t,r=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=rt();this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length);let s="result";r&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<o.length;a++){let l=o[a];i+=`
          if(offset == ${a}) {
            result = values[${ZE[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?jo():Xo(t)}

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
    `}};var sa=class{constructor(t,r=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=rt();this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length);let n="",s="result";r&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let l=i*2+a;n+=`
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
        ${this.enableShapeUniforms?jo():Xo(t)}

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
    `}};function lx(e){let t=rt(),r=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return Dg(e,r)}function cx(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return Lg(e,t)}function ux(e){let t=new Uint16Array([0,1,2,2,1,3]);return Bg(e,t)}function Qn(e,t,r,o,n,s){Vg(t,r);let i=Ug(e),a=e.TEXTURE_2D;return M(e,()=>e.bindTexture(a,i)),M(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),M(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),M(e,()=>e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST)),M(e,()=>e.texParameteri(a,e.TEXTURE_MAG_FILTER,e.NEAREST)),$().getNumber("WEBGL_VERSION")===1?M(e,()=>e.texImage2D(a,0,o,t,r,0,n,s,null)):M(e,()=>e.texStorage2D(a,1,o,t,r)),M(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[r,t]}}function Bu(e){return e.internalFormatFloat}function px(e,t,r,o){let[n,s]=Qr(t,r);return Qn(e,n,s,Bu(o),o.textureFormatFloat,e.FLOAT)}function Uu(e){return e.internalFormatHalfFloat}function fx(e,t,r,o){let[n,s]=Qr(t,r);return Qn(e,n,s,Uu(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function Vu(e){return e.downloadTextureFormat}function dx(e,t,r,o){let[n,s]=Qr(t,r);return Qn(e,n,s,Vu(o),e.RGBA,e.UNSIGNED_BYTE)}function zu(e){return e.internalFormatPackedFloat}function hx(e,t,r,o){let[n,s]=Ue(t,r);return Qn(e,n,s,zu(o),e.RGBA,e.FLOAT)}function Wu(e){return e.internalFormatPackedHalfFloat}function mx(e,t,r,o){let[n,s]=Ue(t,r);return Qn(e,n,s,Wu(o),e.RGBA,o.textureTypeHalfFloat)}function gx(e,t,r){return M(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Ou(e,t,"clipSpacePos",r,3,20,0)&&Ou(e,t,"uv",r,2,20,12)}function xx(e,t,r,o,n,s){M(e,()=>e.bindTexture(e.TEXTURE_2D,t));let i,a,l;n instanceof Uint8Array?(i=new Uint8Array(r*o*4),a=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(r*o*4),a=e.FLOAT,l=s.internalFormatPackedFloat),i.set(n),$().getNumber("WEBGL_VERSION")===2?M(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,o,e.RGBA,a,i)):M(e,()=>e.texImage2D(e.TEXTURE_2D,0,l,r,o,0,e.RGBA,a,i)),M(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function yx(e,t,r){M(e,()=>e.bindTexture(e.TEXTURE_2D,t)),r.data instanceof Uint8Array?$().getNumber("WEBGL_VERSION")===2?M(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data)):M(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)):$().getNumber("WEBGL_VERSION")===2?M(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r)):M(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),M(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function wx(e,t,r,o){let n=e.createBuffer();M(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let a=4*4*t*r;return M(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),M(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),M(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}function bx(e,t,r){let o=e,n=new Float32Array(r);return o.bindBuffer(o.PIXEL_PACK_BUFFER,t),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function vx(e,t,r,o){let[n,s]=Qr(t,r),i=4,a=new Uint8Array(Rg(t*r,i));return M(e,()=>e.readPixels(0,0,n,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Cx(e,t,r,o,n,s,i,a){let l=e,c=new Float32Array(Ng(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function Sx(e,t,r){let o=new Float32Array(t*r*4);return M(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,o)),o}var en=class{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let r=$().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,Ag(r,t)):this.gl=Jt(r),t=this.gl,$().getNumber("WEBGL_VERSION")===2){let s=t;this.createVertexArray=()=>M(s,()=>s.createVertexArray()),this.bindVertexArray=i=>M(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>M(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>M(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(t!=null){let s=t.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>M(t,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>M(t,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>M(t,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>M(t,()=>t.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),$().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Kn(this.gl,s),ue(this.gl,i))this.textureHalfFloatExtension=Kn(this.gl,i);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),ue(this.gl,n))this.colorBufferHalfFloatExtension=Kn(this.gl,n);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",ue(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(ue(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=cx(this.gl),this.indexBuffer=ux(this.gl),this.framebuffer=zg(this.gl),this.textureConfig=qn(this.gl,this.textureHalfFloatExtension)}get debug(){return $().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let t=this.gl;M(t,()=>t.finish()),M(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),M(t,()=>t.deleteFramebuffer(this.framebuffer)),M(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),M(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),M(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,r){return this.throwIfDisposed(),px(this.gl,t,r,this.textureConfig)}createFloat16MatrixTexture(t,r){return this.throwIfDisposed(),fx(this.gl,t,r,this.textureConfig)}createUnsignedBytesMatrixTexture(t,r){return this.throwIfDisposed(),dx(this.gl,t,r,this.textureConfig)}uploadPixelDataToTexture(t,r){this.throwIfDisposed(),yx(this.gl,t,r)}uploadDenseMatrixToTexture(t,r,o,n){this.throwIfDisposed(),xx(this.gl,t,r,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(t,r){return this.throwIfDisposed(),mx(this.gl,t,r,this.textureConfig)}createPackedMatrixTexture(t,r){return this.throwIfDisposed(),hx(this.gl,t,r,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Pu(this.gl,this.framebuffer),this.outputTexture=null),M(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,r,o){return this.downloadMatrixDriver(t,()=>vx(this.gl,r,o,this.textureConfig))}downloadPackedMatrixFromBuffer(t,r,o,n,s,i){return Cx(this.gl,t,r,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,r){return bx(this.gl,t,r)}createBufferFromTexture(t,r,o){this.bindTextureToFrameBuffer(t);let n=wx(this.gl,r,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let r,o;if($().getBool("WEBGL_FENCE_API_ENABLED")){let n=t,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},r=s}else $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(r=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(r,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:r,isFencePassed:o}}downloadMatrixFromPackedTexture(t,r,o){return this.downloadMatrixDriver(t,()=>Sx(this.gl,r,o))}createProgram(t){this.throwIfDisposed();let r=this.gl;this.vertexShader==null&&(this.vertexShader=lx(r));let o=Pg(r);M(r,()=>r.attachShader(o,this.vertexShader)),M(r,()=>r.attachShader(o,t)),Mg(r,o);let n;return n=Object.assign(o,{vao:this.createVertexArray()}),this.bindVertexArray(n.vao),M(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(gx(r,n,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&Yi(r,n),this.setProgram(n),n}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(M(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&Yi(this.gl,this.program)),M(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,r,o=!0){return this.throwIfDisposed(),o?Wg(this.gl,t,r):Gg(this.gl,t,r)}getAttributeLocation(t,r){return this.throwIfDisposed(),M(this.gl,()=>this.gl.getAttribLocation(t,r))}getUniformLocationNoThrow(t,r){return this.throwIfDisposed(),this.gl.getUniformLocation(t,r)}setInputMatrixTexture(t,r,o){this.throwIfDisposed(),this.throwIfNoProgram(),Hg(this.gl,t,r,o)}setOutputMatrixTexture(t,r,o){this.setOutputMatrixTextureDriver(t,o,r)}setOutputPackedMatrixTexture(t,r,o){this.throwIfDisposed();let[n,s]=Ue(r,o);this.setOutputMatrixTextureDriver(t,n,s)}setOutputMatrixWriteRegion(t,r,o,n){this.setOutputMatrixWriteRegionDriver(o,t,n,r)}setOutputPackedMatrixWriteRegion(t,r,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Yi(this.gl,this.program),Xn(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let t=this.gl;if(this.debug){let r=this.getVertexArray();console.assert(r===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}M(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),M(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Kn(this.gl,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let t=this.getQueryTimerExtensionWebGL1(),r=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,r),r}endQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let r=this.gl,o=this.getQueryTimerExtensionWebGL2();r.endQuery(o.TIME_ELAPSED_EXT);return}let t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await w.repeatedTry(()=>this.disposed||this.isQueryAvailable(t,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,r){if(r===0)return null;if(r===2){let o=this.gl;return o.getQueryParameter(t,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,r){if(r===0)return!0;if(r===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(t,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(t){return new Promise(r=>{this.addItemToPoll(()=>t.isFencePassed(),()=>r())})}pollItems(){let t=t_(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=t;++r){let{resolveFn:o}=this.itemsToPoll[r];o()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,r){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:r}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in $().platform&&(o=$().platform.setTimeoutCustom.bind($().platform)),w.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),Qi(this.gl,t,this.framebuffer),this.debug&&Xn(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Qi(this.gl,this.outputTexture,this.framebuffer),this.debug&&Xn(this.gl)):Pu(this.gl,this.framebuffer)}downloadMatrixDriver(t,r){this.bindTextureToFrameBuffer(t);let o=r();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(t,r,o){this.throwIfDisposed();let n=this.gl;Qi(n,t,this.framebuffer),this.debug&&Xn(n),this.outputTexture=t,M(n,()=>n.viewport(0,0,r,o)),M(n,()=>n.scissor(0,0,r,o))}setOutputMatrixWriteRegionDriver(t,r,o,n){this.throwIfDisposed(),M(this.gl,()=>this.gl.scissor(t,r,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function t_(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var fp={};dr(fp,{addImpl:()=>qu,bincountImpl:()=>Tx,bincountReduceImpl:()=>Ex,castImpl:()=>Hu,ceilImpl:()=>Ku,concatImpl:()=>_x,equalImpl:()=>Xu,expImpl:()=>ju,expm1Impl:()=>Yu,floorDivImpl:()=>Zu,floorImpl:()=>Qu,gatherNdImpl:()=>kx,gatherV2Impl:()=>Ax,greaterEqualImpl:()=>tp,greaterImpl:()=>Ju,lessEqualImpl:()=>rp,lessImpl:()=>ep,linSpaceImpl:()=>Rx,logImpl:()=>op,maxImpl:()=>Nx,maximumImpl:()=>np,minimumImpl:()=>sp,multiplyImpl:()=>Jn,negImpl:()=>Fx,notEqualImpl:()=>ip,prodImpl:()=>Ox,raggedGatherImpl:()=>Mx,raggedRangeImpl:()=>Bx,raggedTensorToTensorImpl:()=>zx,rangeImpl:()=>Wx,rsqrtImpl:()=>ap,scatterImpl:()=>Gx,sigmoidImpl:()=>Hx,simpleAbsImpl:()=>$x,sliceImpl:()=>qx,sparseFillEmptyRowsImpl:()=>Kx,sparseReshapeImpl:()=>Xx,sparseSegmentReductionImpl:()=>jx,sqrtImpl:()=>Yx,squaredDifferenceImpl:()=>lp,staticRegexReplaceImpl:()=>cp,stridedSliceImpl:()=>Qx,stringNGramsImpl:()=>Zx,stringSplitImpl:()=>Jx,stringToHashBucketFastImpl:()=>t0,subImpl:()=>pp,tileImpl:()=>e0,topKImpl:()=>o0,transposeImpl:()=>Dx,uniqueImpl:()=>n0});function ia(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&w.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function $x(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}function Z(e){return(t,r,o,n,s)=>{let i=C.assertAndGetBroadcastShape(t,r),a=i.length,l=w.computeStrides(i),c=w.sizeFromShape(i),u=w.getTypedArrayFromDType(s,c),p=t.length,f=r.length,d=w.computeStrides(t),h=w.computeStrides(r),x=C.getBroadcastDims(t,i),g=C.getBroadcastDims(r,i);if(x.length+g.length===0)for(let m=0;m<u.length;++m)u[m]=e(o[m%o.length],n[m%n.length]);else for(let m=0;m<u.length;++m){let y=w.indexToLoc(m,a,l),v=y.slice(-p);x.forEach(T=>v[T]=0);let b=w.locToIndex(v,p,d),S=y.slice(-f);g.forEach(T=>S[T]=0);let I=w.locToIndex(S,f,h);u[m]=e(o[b],n[I])}return[u,i]}}function rn(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.data.get(o.dataId).values,i=r.data.get(n.dataId).values,a=r.makeTensorInfo(o.shape,"complex64"),l=r.data.get(a.dataId);return l.complexTensorInfos={real:r.makeTensorInfo(o.shape,"float32",s),imag:r.makeTensorInfo(n.shape,"float32",i)},a}function aa(e,t,r="float32"){if(r==="complex64"){let n=aa(e,t,"float32"),s=aa(e,t,"float32");return rn({inputs:{real:n,imag:s},backend:e})}let o=w.makeZerosTypedArray(w.sizeFromShape(t),r);return e.makeTensorInfo(t,r,o)}function Gu(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Ix(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.data.get(o.dataId).complexTensorInfos.real,s=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,s)}function Hu(e,t,r,o){if(o==="int32"){let n=Int32Array.from(e);return[t,"int32",n]}if(o==="bool"){let n=w.toTypedArray([0],r),[s,i]=Z((a,l)=>a!==l?1:0)(t,[],e,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${r} to ${o}`)}function Zn(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return Gu({inputs:{x:n},backend:r});let u=aa(r,n.shape,n.dtype),p=Zn({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),f=rn({inputs:{real:p,imag:u},backend:r});return r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(p),f}if(n.dtype==="complex64"){let u=Ix({inputs:{input:n},backend:r}),p=Zn({inputs:{x:u},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(u),p}if(!w.hasEncodingLoss(n.dtype,s)){let u=Gu({inputs:{x:n},backend:r});return{dataId:u.dataId,shape:u.shape,dtype:s}}let i=r.data.get(n.dataId).values,[a,l,c]=Hu(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,c)}function it(e,t,r,o){return r==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;ia([i,a],e);let c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,p=i.dtype==="string"?C.fromUint8ToStringArray(c):c,f=i.dtype==="string"?C.fromUint8ToStringArray(u):u,d=o||i.dtype,[h,x]=t(i.shape,a.shape,p,f,d);return l.makeTensorInfo(x,d,h)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let c=Zn({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),p=u.complexTensorInfos.real,f=u.complexTensorInfos.imag,d=l.data.get(p.dataId).values,h=l.data.get(f.dataId).values,x=Zn({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(x.dataId),m=g.complexTensorInfos.real,y=g.complexTensorInfos.imag,v=l.data.get(m.dataId).values,b=l.data.get(y.dataId).values,[S,I,T]=r(i.shape,a.shape,d,h,v,b),E=l.makeTensorInfo(T,"float32",S),R=l.makeTensorInfo(T,"float32",I),F=rn({inputs:{real:E,imag:R},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(x),l.disposeIntermediateTensorInfo(E),l.disposeIntermediateTensorInfo(R),F}else{let c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,p=o||i.dtype,[f,d]=t(i.shape,a.shape,c,u,p);return l.makeTensorInfo(d,p,f)}}}function on(e){return(t,r,o,n,s,i)=>{let a=C.assertAndGetBroadcastShape(t,r),l=w.sizeFromShape(a),c=a.length,u=w.computeStrides(a),p=w.getTypedArrayFromDType("float32",l),f=w.getTypedArrayFromDType("float32",l),d=C.getBroadcastDims(t,a),h=C.getBroadcastDims(r,a),x=C.mergeRealAndImagArrays(o,n),g=C.mergeRealAndImagArrays(s,i),m=t.length,y=w.computeStrides(t),v=r.length,b=w.computeStrides(r);if(d.length+h.length===0)for(let S=0;S<p.length;S++){let I=S%x.length,T=S%g.length,E=e(x[I*2],x[I*2+1],g[T*2],g[T*2+1]);p[S]=E.real,f[S]=E.imag}else for(let S=0;S<p.length;S++){let I=w.indexToLoc(S,c,u),T=I.slice(-m);d.forEach(z=>T[z]=0);let E=w.locToIndex(T,m,y),R=I.slice(-v);h.forEach(z=>R[z]=0);let F=w.locToIndex(R,v,b),U=e(x[E*2],x[E*2+1],g[F*2],g[F*2+1]);p[S]=U.real,f[S]=U.imag}return[p,f,a]}}var qu=Z((e,t)=>e+t),e_=on((e,t,r,o)=>({real:e+r,imag:t+o})),NG=it(mr,qu,e_);function Tx(e,t,r,o,n){let s=w.sizeFromShape(o),i=w.makeZerosTypedArray(n,r);for(let a=0;a<e.length;a++){let l=e[a];if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s>0?i[l]+=t[a]:i[l]+=1)}return i}function Ex(e,t,r,o=!1){let n=e.shape[0],s=e.shape[1],i=Y([n,r],t.dtype);for(let a=0;a<n;a++)for(let l=0;l<s;l++){let c=e.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=r||(o?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}function vt(e){return(t,r,o)=>{let n=w.getArrayFromDType(r,t.length);for(let s=0;s<t.length;++s)n[s]=e(t[s],o);return n}}function la(e,t,r){let o=vt(t);return Wt(e,o,r)}function Wt(e,t,r){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;ia(i,e);let a=s,l=a.data.get(i.dataId).values,c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=C.fromUint8ToStringArray(l)}else c=l;let u=r||i.dtype,p=t(c,u,n);return a.makeTensorInfo(i.shape,u,p)}}var Ku=vt(e=>Math.ceil(e)),HG=Wt(zs,Ku);function _x(e,t,r,o){let n=w.getArrayFromDType(r,w.sizeFromShape(t));if(o&&r!=="string"){let s=0;e.forEach(i=>{let a=w.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;e.forEach(i=>{let a=r==="string"?C.fromUint8ToStringArray(i.vals):i.vals,l=0;for(let c=0;c<i.shape[0];++c){let u=c*t[1]+s;for(let p=0;p<i.shape[1];++p)n[u+p]=a[l++]}s+=i.shape[1]})}return n}var Xu=Z((e,t)=>e===t?1:0),ZG=it(qs,Xu,null,"bool");var ju=vt(e=>Math.exp(e)),o5=Wt(Ks,ju,"float32");var Yu=vt(e=>Math.expm1(e)),l5=Wt(Xs,Yu);var Qu=vt(e=>Math.floor(e)),d5=Wt(Ys,Qu);var Zu=Z((e,t)=>Math.floor(e/t)),y5=it(No,Zu,null,"int32");function kx(e,t,r,o,n,s,i,a,l){let c=Y([o,s],r);for(let u=0;u<o;u++){let p=[],f=0;for(let d=0;d<n;d++){let h=e[u*n+d];f+=h*i[d],p.push(h)}if(f<0||f>=l/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let d=0;d<s;d++)c.values[u*s+d]=t.get(...t.indexToLoc(f*s+d))}return c}function Ax(e,t,r){let o=Y(r,e.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];let u=e.locToIndex(i);0<=u&&u<e.values.length&&(o.values[n]=e.values[u])}return o}var Ju=Z((e,t)=>e>t?1:0),E5=it(Qs,Ju,null,"bool");var tp=Z((e,t)=>e>=t?1:0),N5=it(Zs,tp,null,"bool");var ep=Z((e,t)=>e<t?1:0),M5=it(ei,ep,null,"bool");var rp=Z((e,t)=>e<=t?1:0),z5=it(ri,rp,null,"bool");function Rx(e,t,r){let o=(t-e)/(r-1),n=w.makeZerosTypedArray(r,"float32");n[0]=e;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var op=vt(e=>Math.log(e)),j5=Wt(oi,op);function Nx(e,t,r,o){let n=w.getTypedArrayFromDType(o,w.sizeFromShape(r));for(let s=0;s<n.length;++s){let i=s*t,a=e[i];for(let l=0;l<t;++l){let c=e[i+l];(Number.isNaN(c)||c>a)&&(a=c)}n[s]=a}return n}var np=Z((e,t)=>Math.max(e,t)),r6=it(Fo,np);var sp=Z((e,t)=>Math.min(e,t)),a6=it(ii,sp);var Jn=Z((e,t)=>e*t),r_=on((e,t,r,o)=>({real:e*r-t*o,imag:e*o+t*r})),f6=it(Do,Jn,r_);function Fx(e,t,r){let o=w.createScalarValue(-1,r);return Jn([],t,o,e,r)}var ip=Z((e,t)=>e!==t?1:0),b6=it(ai,ip,null,"bool");function Dx(e,t,r,o,n){let s=t.length,i=w.sizeFromShape(t),a=w.computeStrides(t),l=w.computeStrides(n),c=w.getTypedArrayFromDType(r,w.sizeFromShape(n));for(let u=0;u<i;++u){let p=w.indexToLoc(u,s,a),f=new Array(p.length);for(let h=0;h<f.length;h++)f[h]=p[o[h]];let d=w.locToIndex(f,s,l);c[d]=e[u]}return c}function Ox(e,t,r,o){let[n,s]=C.computeOutAndReduceShapes(e,o),i=Nt(t,"int32"),a=w.makeZerosTypedArray(w.sizeFromShape(n),i),l=w.sizeFromShape(s);for(let c=0;c<a.length;++c){let u=c*l,p=1;for(let f=0;f<l;++f)p*=r[u+f];a[c]=p}return{outVals:a,outShape:n,outDtype:i}}function o_(e,t,r){e.forEach((o,n)=>{if(o<0||o>=r){let s=w.indexToLoc(n,t.length,w.computeStrides(t)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${r})`)}})}function n_(e,t){for(let r=0;r<e.length;++r){let o=e[r],n=r===e.length-1?t:e[r+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function s_(e,t,r,o){let n=[],s=0,i=t.length-1+r.length,a=new Array(i).fill(null).map(()=>[0]);n_(r,o);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];let u=t[c+1];for(let p=1;p<l+1;++p)a[c].push(p*u)}for(let c=0;c<e.length;++c){let u=e[c],p=e[c]+1;for(let f=0;f<r.length;++f){let d=r[f],h=f+t.length-1;if(h>=0){let x=a[h],g=x[x.length-1]-d[u];for(let m=u;m<p;++m)a[h].push(d[m+1]+g)}u=d[u],p=d[p]}p!==u&&(n.push([u,p]),s+=p-u)}return{outSplits:a,valueSlices:n,numValues:s}}function i_(e){let t=[];for(let r=0;r<e.length;++r){let o=e[r].length,n=w.getArrayFromDType("int32",o);t.push(n),e[r].forEach((s,i)=>n[i]=s)}return t}function Px(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let o=t;o<e.length;o++)r[t-1]*=e[o];return r}function a_(e,t,r,o,n,s){let i=Px(t,2)[1],a=Px(s,2)[1],l=0;for(let c of r)for(let u=c[0];u<c[1];++u){for(let p=0;p<o;++p)n[l*a+p]=e[u*i+p];++l}}function l_(e,t,r,o,n){let s=t.slice();s[0]=n;let i=w.getArrayFromDType(r,w.sizeFromShape(s)),a=e.length,l=a===0?0:a/t[0];return a_(e,t,o,l,i,s),[i,s]}function Mx(e,t,r,o,n,s,i,a){if(e.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let l=t[0][0]-1;if(o_(s,i,l),o.length===0)throw new Error("params.rank must be nonzero");let c=o[0],{outSplits:u,valueSlices:p,numValues:f}=s_(s,i,e,c),d=i_(u),h=l_(r,o,n,p,f);return[d,h[0],h[1]]}var Lx=2147483647;function Bx(e,t,r,o,n,s,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=t.length===0,l=n.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(n[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");let p=u.length===0?1:u[0],f=w.getArrayFromDType("int32",p+1);f[0]=0;for(let g=0;g<p;++g){let m=a?e[0]:e[g],y=l?o[0]:o[g],v=c?s[0]:s[g];if(v===0)throw new Error("Requires delta != 0");let b;if(v>0&&y<m||v<0&&y>m)b=0;else if(b=Math.ceil(Math.abs((y-m)/v)),b>Lx)throw new Error(`Requires ((limit - start) / delta) <= ${Lx}`);f[g+1]=f[g]+b}let d=f[p],h=w.getArrayFromDType(r,d),x=0;for(let g=0;g<p;++g){let m=f[g+1]-f[g],y=a?e[0]:e[g],v=c?s[0]:s[g];for(let b=0;b<m;++b)h[x++]=y,y+=v}return[f,h]}var xe=C.RowPartitionType,nn=class{constructor(t,r,o,n,s,i,a,l,c,u){this.shape=t,this.shapeShape=r,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=C.getRowPartitionTypesHelper(u),this.raggedRank=C.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===xe.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===xe.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let r=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case xe.VALUE_ROWIDS:return nn.getMaxWidthValueRowID(r);case xe.ROW_SPLITS:return nn.getMaxWidthRowSplit(r);default:throw new Error(`Cannot handle partition type ${xe[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let r=t.length;if(r===0||r===1)return 0;let o=0;for(let n=0;n<r-1;++n){let s=t[n+1]-t[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(t){let r=t.length;if(r===0)return 0;let o=0,n=t[0],s=0;for(let i=1;i<r;++i){let a=t[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(r-o,s)}tensorShapeFromTensor(t,r,o=!0){if(r.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Vx(t,o)}calculateOutputSize(t){let r=this.valuesShape,o=this.defaultValueShape;C.validateDefaultValueShape(o,r);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=C.combineRaggedTensorToTensorShapes(this.raggedRank,n,r);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,r,o){let n=Math.min(t,o),s=[],i=0;for(let a=0;a<n;++a,i+=r)s.push(i);for(let a=n;a<t;++a)s.push(-1);return w.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,r,o,n){let s=t.length,i=[];for(let a=0;a<s-1;++a){let l=t[a+1]-t[a],c=Math.min(n,l),u=r[a];u===-1&&(c=0);for(let p=0;p<c;++p)i.push(u),u+=o;for(let p=0;p<l-c;++p)i.push(-1)}if(s>0&&i.length!==t[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,r,o,n){let s=t.length,i=[];if(s===0)return[];let a=0,l=t[0];if(l>=r.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${r.length}`);let c=r[l];i.push(c);for(let u=1;u<s;++u){let p=t[u];if(p===l)c>=0&&(++a,a<n?c+=o:c=-1);else{if(a=0,l=p,p>=r.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${r.length}`);c=r[p]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,r,o,n){let s=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case xe.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,r,o,n);case xe.ROW_SPLITS:if(s.length-1>r.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${r.length}`);return this.calculateOutputIndexRowSplit(s,r,o,n);default:throw new Error(`Unsupported partition type: ${xe[i]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let r=this.rowPartitionTypes[0];switch(r){case xe.FIRST_DIM_SIZE:return t[0];case xe.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case xe.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${xe[r]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let r=this.getFirstDimensionSize(),o=this.calculateOutputSize(r),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let l=n.length-2;l>=0;--l)n[l]=n[l+1]*o[l+1];let s=Vx(o,!1),i=w.getArrayFromDType(this.valuesDType,w.sizeFromShape(s));if(n[0]*o[0]>0){let l=this.calculateFirstParentOutputIndex(r,n[0],o[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,n[c],o[c]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(t,r,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(t+1);let l=w.sizeFromShape(a),c=r.length,u=this.defaultValue;if(u.length!==l&&u.length!==1){let h=this.defaultValueShape;q(()=>{let x=bt(u,h);u=xu(x,a).dataSync()})}let p=0,f=0,d=0;for(let h=0;h<=c;++h){let x=h<c?r[h]:-1;if(x===d){++d;continue}if(f<d){let g=s.subarray(p*l),m=i.subarray(f*l),y=(d-f)*l;Ux(m,g,y)}if(h>=c){let g=o.length;x=Math.floor(g/l)}if(x>d)if(this.defaultValue.length===1)i.subarray(d*l,x*l).fill(this.defaultValue[0]),d=x;else for(;x>d;){let g=i.slice(d*l);Ux(g,u,l),++d}x<0?(p=h+1,f=d):(p=h,f=d,d=f+1)}}};function Ux(e,t,r){for(let o=0;o<r;o++)e[o]=t[o]}function Vx(e,t){let r=[];for(let o of e){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}r.push(o)}return r}function zx(e,t,r,o,n,s,i,a,l,c){return new nn(e,t,r,o,n,s,i,a,l,c).compute()}function Wx(e,t,r,o){let n=e===t,s=e<t&&r<0,i=t<e&&r>1;if(n||s||i)return w.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((t-e)/r)),l=w.makeZerosTypedArray(a,o);t<e&&r===1&&(r=-1),l[0]=e;for(let c=1;c<l.length;c++)l[c]=l[c-1]+r;return l}var ap=vt(e=>1/Math.sqrt(e)),M6=Wt(di,ap);function Gx(e,t,r,o,n,s,i,a,l,c){let u=[o/n,n],p=e.values,f=t.values;if(o===0)return Y(r,t.dtype);let d=l instanceof Oe?l:Y(u,t.dtype);typeof l=="string"||typeof l=="number"?d.values.fill(l):typeof l=="boolean"&&d.values.fill(+l);for(let h=0;h<s;h++){let x=[],g=0;for(let m=0;m<i;m++){let y=p[h*i+m];x.push(y),g+=y*a[m]}if(g<0||g>=o/n)throw new Error(`Invalid indices: ${x} does not index into ${r}`);for(let m=0;m<n;m++)c?d.values[g*n+m]+=f[h*n+m]:d.values[g*n+m]=t.rank===0?f[0]:f[h*n+m]}return d}var Hx=vt(e=>1/(1+Math.exp(-e))),G6=la(Oo,e=>1/(1+Math.exp(-e)));function qx(e,t,r,o,n){let s=zt.isSliceContinous(o,t,r),i=w.sizeFromShape(r),a=w.computeStrides(o);if(s){let p=zt.computeFlatOffset(t,a);return n==="string"?e.slice(p,p+i):e.subarray(p,p+i)}let l=n==="string"?C.fromUint8ToStringArray(e):e,c=Y(o,n,l),u=Y(r,n);for(let p=0;p<u.size;++p){let f=u.indexToLoc(p),d=f.map((h,x)=>h+t[x]);u.set(c.get(...d),...f)}return n==="string"?C.fromStringArrayToUint8(u.values):u.values}function Kx(e,t,r,o,n,s,i){let a=t[0],l=s[0],c=new Array(l),u=new Array(a),p=t[1];if(l===0){if(a!==0)throw new Error(C.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let g=w.getArrayFromDType(r,0),m=w.getArrayFromDType(n,0);return[g,[0,p],m,c,u]}let f=!0,d=0,h=new Array(l).fill(0);for(let g=0;g<a;++g){let m=e[g*p];if(m<0)throw new Error(C.getSparseFillEmptyRowsNegativeIndexErrorMessage(g,m));if(m>=l)throw new Error(C.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(g,m,l));++h[m],f=f&&m>=d,d=m}let x=!0;for(let g=0;g<l;++g){let m=h[g]===0;c[g]=m,x=x&&!m,h[g]=Math.max(h[g],1),g>0&&(h[g]+=h[g-1])}if(x&&f){let g=e,m=o;for(let y=0;y<a;++y)u[y]=y;return[g,[a,p],m,c,u]}else{let g=h[l-1],m=w.getArrayFromDType(r,g*p),y=w.getArrayFromDType(n,g),v=new Array(l).fill(0);for(let b=0;b<a;++b){let S=e[b*p],I=v[S],T=(S===0?0:h[S-1])+I;v[S]++;for(let E=0;E<p;++E)m[T*p+E]=e[b*p+E];y[T]=o[b],u[b]=T}for(let b=0;b<l;++b)if(v[b]===0){let I=b===0?0:h[b-1];m[I*p+0]=b;for(let T=1;T<p;++T)m[I*p+T]=0;y[I]=i}return[m,[g,p],y,c,u]}}function Xx(e,t,r,o,n){let s=w.sizeFromShape(o),i=t[0],a=n.length,l=[],c=1,u=-1;for(let g=0;g<a;++g){let m=n[g];if(m===-1){if(u!==-1)throw new Error(C.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(u,g));u=g,l.push(1)}else{if(m<0)throw new Error(C.getSparseReshapeNegativeOutputDimErrorMessage(g,m));c*=m,l.push(m)}}if(u!==-1){if(c<=0)throw new Error(C.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let g=Math.trunc(s/c);if(c*g!==s)throw new Error(C.getSparseReshapeInputOutputMultipleErrorMessage(o,l));l[u]=g}if(w.sizeFromShape(l)!==s)throw new Error(C.getSparseReshapeInputOutputMismatchErrorMessage(o,l));let f=o.length,d=[];if(f>0){d[f-1]=1;for(let g=f-2;g>=0;--g)d[g]=d[g+1]*o[g+1]}let h=[];if(a>0){h[a-1]=1;for(let g=a-2;g>=0;--g)h[g]=h[g+1]*l[g+1]}let x=w.getArrayFromDType(r,i*a);for(let g=0;g<i;++g){let m=0;for(let y=0;y<f;++y)m+=e[g*f+y]*d[y];for(let y=0;y<a;++y)x[g*a+y]=Math.trunc(m/h[y]),m%=h[y]}return[x,[i,a],l]}function jx(e,t,r,o,n,s=!1,i=0){let a=o.length,l=[t[0],e.length/t[0]],c=l[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(C.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=t.slice();f[0]=p;let d=f.reduce((v,b)=>v*b,1),h=w.getArrayFromDType(r,d);if(a===0)return p>0&&h.fill(i),[h,f];if(p<=0)throw new Error(C.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let x=0,g=1,m=0,y=n[x];for(;;){let v=0;if(g<a){if(v=n[g],y===v){++g;continue}if(y>=v)throw new Error(C.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=p)throw new Error(C.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,p));y>m&&h.fill(i,m*c,y*c);for(let b=x;b<g;++b){let S=o[b];if(S<0||S>=l[0])throw new Error(C.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(b,o[b],l[0]));for(let I=0;I<c;I++)h[y*c+I]+=e[S*c+I]}if(s)for(let b=0;b<c;b++)h[y*c+b]/=g-x;if(x=g,++g,m=y+1,y=v,g>a)break}return m<p&&h.fill(i,m*c,p*c),[h,f]}var Yx=vt(e=>Math.sqrt(e)),oH=la(Po,e=>Math.sqrt(e));var lp=Z((e,t)=>{let r=e-t;return r*r}),lH=it(mi,lp);var cp=vt((e,t)=>{let{pattern:r,replaceGlobal:o,rewrite:n}=t;return e.replace(new RegExp(r,o?"g":""),n)}),dH=Wt(gi,cp);function Qx(e,t,r,o){let n=Y(e,t.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*r[l]+o[l];n.set(t.get(...a),...i)}return n}var up=class{constructor(t,r,o,n,s,i){this.separator=w.encodeString(t),this.nGramWidths=r,this.leftPad=w.encodeString(o),this.rightPad=w.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,r){let o=this.getPadWidth(r);return Math.max(0,t+2*o-r+1)}createNGrams(t,r,o,n,s,i){for(let a=0;a<s;++a){let l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(s-(a+1))),p=i-(c+u),f=r+(c>0?0:a-l),d=0;d+=c*this.leftPad.length;for(let y=0;y<p;++y)d+=t[f+y].length;d+=u*this.rightPad.length;let h=c+u+p-1;d+=h*this.separator.length,o[n+a]=new Uint8Array(d);let x=o[n+a],g=0,m=y=>y.forEach(v=>x[g++]=v);for(let y=0;y<c;++y)m(this.leftPad),m(this.separator);for(let y=0;y<p-1;++y)m(t[f+y]),m(this.separator);if(p>0){m(t[f+p-1]);for(let y=0;y<u;++y)m(this.separator),m(this.rightPad)}else{for(let y=0;y<u-1;++y)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(t,r){let o=t.length,n=r.length;if(n>0){let l=r[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<n;++c){let u=r[c]>=l;if(u=u&&r[c]<=o,!u)throw new Error(`Invalid split value ${r[c]}, must be in [${l}, ${o}]`);l=r[c]}if(l!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${l}`)}let s=n-1,i=w.getArrayFromDType("int32",n);if(o===0||n===0){let l=new Array(o);for(let c=0;c<=s;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){let c=r[l]-r[l-1],u=0;this.nGramWidths.forEach(p=>{u+=this.getNumNGrams(c,p)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}let a=new Array(i[s]);for(let l=0;l<s;++l){let c=r[l],u=i[l];if(this.nGramWidths.forEach(p=>{let f=r[l+1]-r[l],d=this.getNumNGrams(f,p);this.createNGrams(t,c,a,u,d,p),u+=d}),this.preserveShort&&u===i[l]){let p=r[l+1]-r[l];if(p===0)continue;let f=p+2*this.padWidth,d=1;this.createNGrams(t,c,a,u,d,f)}}return[a,i]}};function Zx(e,t,r,o,n,s,i,a){return new up(r,o,n,s,i,a).compute(e,t)}function c_(e,t,r,o){if(!e.length)return;if(t.length===0){for(let s=0;s<e.length;++s)o.push(e.subarray(s,s+1));return}if(t.length===1){let s=t[0],i=e.indexOf(s);for(;i!==-1;){let a=e.subarray(0,i);(!r||a.length!==0)&&o.push(a),e=e.subarray(i+1),i=e.indexOf(s)}(!r||e.length!==0)&&o.push(e);return}let n=0;for(let s=0;s<e.length+1;s++)if(s===e.length||t.indexOf(e[s])!==-1){let i=e.subarray(n,s);(!r||i.length!==0)&&o.push(i),n=s+1}}function Jx(e,t,r){let o=e.length,n=[],s=0,i=0,a=new Array(o);for(let f=0;f<o;++f){let d=n.length;c_(e[f],t,r,n);let h=n.length-d;a[f]=h,s+=h,i=Math.max(i,h)}let l=w.getArrayFromDType("int32",s*2),c=new Array(s),u=[o,i],p=0;for(let f=0;f<o;++f)for(let d=0;d<a[f];++d)l[p*2]=f,l[p*2+1]=d,c[p]=n[p],++p;return[l,c,u]}function t0(e,t){let r=w.getArrayFromDType("int32",e.length);for(let o=0;o<e.length;++o)r[o]=w.fingerPrint64(e[o]).modulo(t).getLowBitsUnsigned();return r}var pp=Z((e,t)=>e-t),u_=on((e,t,r,o)=>({real:e-r,imag:t-o})),TH=it(Mo,pp,u_);function e0(e,t){let r=new Array(e.rank);for(let n=0;n<r.length;n++)r[n]=e.shape[n]*t[n];let o=Y(r,e.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(e.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%e.shape[l];let a=e.locToIndex(i);o.values[n]=e.values[a]}return o}var ts=(e,t)=>{let r=t.value-e.value;return r===0?e.index-t.index:r};function r0(e,t,r=0,o=e.length-1){for(;o>r;){if(o-r>600){let a=o-r+1,l=t-r+1,c=Math.log(a),u=.5*Math.exp(2*c/3),p=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),f=Math.max(r,Math.floor(t-l*u/a+p)),d=Math.min(o,Math.floor(t+(a-l)*u/a+p));r0(e,t,f,d)}let n=e[t],s=r,i=o;for(w.swap(e,r,t),ts(e[o],n)>0&&w.swap(e,r,o);s<i;){for(w.swap(e,s,i),s++,i--;ts(e[s],n)<0;)s=s+1;for(;ts(e[i],n)>0;)i=i-1}ts(e[r],n)===0?w.swap(e,r,i):(i=i+1,w.swap(e,i,o)),i<=t&&(r=i+1),t<=i&&(o=i-1)}}function o0(e,t,r,o,n){let s=t[t.length-1],[i,a]=[e.length/s,s],l=w.getTypedArrayFromDType(r,i*o),c=w.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let f=p*a,d=e.subarray(f,f+a),h=new Array(d.length);d.forEach((y,v)=>h[v]={value:y,index:v}),o<h.length&&(r0(h,o),h=h.slice(0,o)),n&&h.sort(ts);let x=p*o,g=l.subarray(x,x+o),m=c.subarray(x,x+o);for(let y=0;y<o;y++)g[y]=h[y].value,m[y]=h[y].index}let u=t.slice();return u[u.length-1]=o,[Y(u,r,l),Y(u,"int32",c)]}function n0(e,t,r,o){let n=w.parseAxisParam(t,r)[0],s=[1,r[0],1];for(let h=0;h<n;h++)s[0]*=r[h];s[1]=r[n];for(let h=n+1;h<r.length;h++)s[2]*=r[h];let i=new Map,a=new Int32Array(r[n]),l=new Oe(s,o,e),c=[],u=s[0]===1&&s[2]===1;for(let h=0;h<r[n];h++){let x;if(u)x=e[h].toString();else{let m=[];for(let y=0;y<s[0];y++)for(let v=0;v<s[2];v++)m.push(l.get(y,h,v));x=m.join(",")}let g=i.get(x);if(g!=null)a[h]=g;else{let m=i.size;i.set(x,m),a[h]=m,c.push(h)}}let p=s.slice();p[1]=i.size;let f=new Oe(p,o);c.forEach((h,x)=>{for(let g=0;g<s[0];g++)for(let m=0;m<s[2];m++)f.set(l.get(g,h,m),g,x,m)});let d=r.slice();return d[n]=p[1],{outputValues:f.values,outputShape:d,indices:a}}var{addImpl:s0,bincountImpl:ca,bincountReduceImpl:i0,castImpl:a0,ceilImpl:l0,concatImpl:c0,equalImpl:u0,expImpl:p0,expm1Impl:f0,floorImpl:d0,gatherNdImpl:h0,gatherV2Impl:m0,greaterImpl:g0,greaterEqualImpl:x0,lessImpl:y0,lessEqualImpl:w0,linSpaceImpl:b0,logImpl:v0,maxImpl:C0,maximumImpl:S0,minimumImpl:$0,multiplyImpl:I0,negImpl:T0,notEqualImpl:E0,prodImpl:_0,raggedGatherImpl:k0,raggedRangeImpl:A0,raggedTensorToTensorImpl:R0,rangeImpl:N0,rsqrtImpl:F0,scatterImpl:D0,sigmoidImpl:O0,simpleAbsImpl:ua,sliceImpl:P0,sparseFillEmptyRowsImpl:M0,sparseReshapeImpl:L0,sparseSegmentReductionImpl:pa,sqrtImpl:B0,staticRegexReplaceImpl:U0,stridedSliceImpl:V0,stringNGramsImpl:z0,stringSplitImpl:W0,stringToHashBucketFastImpl:G0,subImpl:H0,tileImpl:q0,topKImpl:K0,transposeImpl:eo,uniqueImpl:X0}=fp;function dp(e,t){return["x","y","z","w","u","v"].slice(0,t).map(r=>`${e}.${r}`)}function lt(e,t){return t===1?[e]:dp(e,t)}function j0(e,t){if(e===1)return"rc";let r="";for(let o=0;o<e;o++)r+=t[o],o<e-1&&(r+=",");return r}var fa=class{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=j(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let r=lt("rc",this.rank),o=G(this.rank),n=this.getOutOfBoundsCondition(r),s=this.getSetup(r),i=this.getOutput(r);this.userCode=`
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
            rEdge || cEdge ? 0. : getA(${r[3]})`}};var sn=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${p_(r,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?jo():Xo(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${o}

        setOutput(result);
      }
    `}};function p_(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?Jg(["r","c","d"],"inputShape"):Te(["r","c","d"],e)}
      return ivec3(r, c, d);
    }
  `}var da=class{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,r,o){let n=Q0(r,o),s=Z0(t,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=Y0(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let l=this.freeTextures[s].pop();return this.usedTextures[s].push(l),l}let a;return n===Tt.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):n===Tt.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):n===Tt.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):n===Tt.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):n===Tt.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,r,o,n){if(this.freeTextures==null)return;let s=Q0(o,n),i=Z0(r,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=Y0(r,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=$().get("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);let r=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*r)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let t in this.freeTextures)this.freeTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function f_(e,t){let r=e;if(t===r.R32F)return 4;if(t===r.R16F)return 2;if(t===r.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===r.RGBA16F)return 8;if(t===r.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function Y0(e,t,r,o,n){let s=d_(t,o),i;if(n){let[l,c]=Ue(e[0],e[1]);i=l*c}else{let[l,c]=Qr(e[0],e[1]);i=l*c}let a=f_(r,s);return i*a}function d_(e,t){switch(e){case Tt.PACKED_2X2_FLOAT32:return zu(t);case Tt.PACKED_2X2_FLOAT16:return Wu(t);case Tt.UNPACKED_FLOAT32:return Bu(t);case Tt.UNPACKED_FLOAT16:return Uu(t);case Tt.PACKED_4X1_UNSIGNED_BYTE:return Vu(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function h_(e){return $().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Tt.PACKED_2X2_FLOAT32:Tt.UNPACKED_FLOAT32:e?Tt.PACKED_2X2_FLOAT16:Tt.UNPACKED_FLOAT16}function Q0(e,t){if(e===kt.UPLOAD)return Tt.PACKED_2X2_FLOAT32;if(e===kt.RENDER||e==null)return h_(t);if(e===kt.DOWNLOAD||e===kt.PIXELS)return Tt.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function Z0(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}var Et=class{constructor(t,r){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${r}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},dt="if (isnan(x)) return x;",J0="return x;",hp="return abs(x);";var ty="return (x >= 0.0) ? x : (exp(x) - 1.0);",ey=dt+`
  return (x < 0.0) ? 0.0 : x;
`,ry=dt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ze="return x;",oy="return 1.0 / (1.0 + exp(-1.0 * x));";var sy="return x;",iy=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ay=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ly=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cy="return 1.0 / (1.0 + exp(-1.0 * x));",Gt=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${r}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var ha=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length);let r=t.length,o=lt("rc",r),n=G(r),s=j0(r,o),i=o.slice(-2),a=r<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var g_=Be.whereImpl,x_=1e-7,y_=1e-4,ma={};function w_(e){return e in ma||(ma[e]={}),ma[e]}var b_=$().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),v_=600;function C_(){return $().global.screen==null?1024:$().global.screen.height*$().global.screen.width*window.devicePixelRatio*v_/1024/1024}var ro=class extends Pr{nextDataId(){return ro.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!$().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let r;if(t!=null){if(t instanceof en)r=t;else{let o=Jt($().getNumber("WEBGL_VERSION"),t);r=new en(o)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let o=Jt($().getNumber("WEBGL_VERSION"));r=new en(o),this.binaryCache=w_($().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=r,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new da(this.gpgpu),this.numMBBeforeWarning=C_(),this.texData=new Tn(this,je())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,r,o,n,s,i){let a=this.makeTensorInfo(r,o),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[n,s]},l.texShape=[n,s];let c=jn(r),u=new Yn(c,!1,i),p=this.runWebGLProgram(u,[a],o,[[n,s]]);return p.shape=r,l.texture=null,this.disposeIntermediateTensorInfo(a),p.dataId}write(t,r,o){if(($().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||$().getBool("DEBUG"))&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let n={id:this.nextDataId()};return this.texData.set(n,{shape:r,dtype:o,values:t,usage:kt.UPLOAD,refCount:1}),n}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let r=this.texData.get(t);r.refCount++}decRef(t){if(this.texData.has(t)){let r=this.texData.get(t);r.refCount--}}move(t,r,o,n,s){if($().getBool("DEBUG")&&this.checkNumericalProblems(r),n==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:n,values:r,usage:kt.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let r=this.texData.get(t),{values:o,dtype:n,complexTensorInfos:s,slice:i,shape:a,isPacked:l}=r;if(i!=null){let f;l?f=new Gt(a,ze):f=new Et(a,ze);let d=this.runWebGLProgram(f,[{dataId:t,shape:a,dtype:n}],n),h=this.readSync(d.dataId);return this.disposeIntermediateTensorInfo(d),h}if(o!=null)return this.convertAndCacheOnCPU(t);if(n==="string")return o;let c=this.activeTimers!=null,u;c&&(u=w.now());let p;if(n==="complex64"){let f=this.readSync(s.real.dataId),d=this.readSync(s.imag.dataId);p=C.mergeRealAndImagArrays(f,d)}else p=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=w.now()-u),this.convertAndCacheOnCPU(t,p)}async read(t){if(this.pendingRead.has(t)){let h=this.pendingRead.get(t);return new Promise(x=>h.push(x))}let r=this.texData.get(t),{values:o,shape:n,slice:s,dtype:i,complexTensorInfos:a,isPacked:l}=r;if(s!=null){let h;l?h=new Gt(n,ze):h=new Et(n,ze);let x=this.runWebGLProgram(h,[{dataId:t,shape:n,dtype:i}],i),g=this.read(x.dataId);return this.disposeIntermediateTensorInfo(x),g}if(o!=null)return this.convertAndCacheOnCPU(t);if($().getBool("DEBUG")&&!$().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&$().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&$().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);let h=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(h.texture.texture,...Hn(n))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(i==="complex64"){let h=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),x=h[0],g=h[1];p=C.mergeRealAndImagArrays(x,g)}else if(c==null)p=this.getValuesFromTexture(t);else{let h=w.sizeFromShape(n);p=this.gpgpu.downloadFloat32MatrixFromBuffer(c,h)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){let h=this.gpgpu.gl;M(h,()=>h.deleteBuffer(c))}let f=this.convertAndCacheOnCPU(t,p),d=this.pendingRead.get(t);return this.pendingRead.delete(t),d.forEach(h=>h(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&je().removeDataId(t,this),this.pendingDeletes--),f}readToGPU(t,r={}){let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,isPacked:l,texture:c}=o;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let d;l?d=new Gt(s,ze):d=new Et(s,ze);let h=this.runWebGLProgram(d,[{dataId:t,shape:s,dtype:a}],a),x=this.readToGPU(h,r);return this.disposeIntermediateTensorInfo(h),x}if(c==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let u=this.decode(t,r.customTexShape),p=je().makeTensorFromTensorInfo(u),f=this.texData.get(u.dataId);return Object.assign({tensorRef:p},f.texture)}bufferSync(t){let r=this.readSync(t.dataId);if(t.dtype==="string")try{let o=r.map(n=>w.decodeString(n));return Y(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Y(t.shape,t.dtype,r)}checkNumericalProblems(t){if(t!=null)for(let r=0;r<t.length;r++){let o=t[r];if(!Fg(o))throw $().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${o} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${o} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:r,dtype:o,isPacked:n}=this.texData.get(t),s=w.sizeFromShape(r);if($().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let f=this.decode(t),d=this.texData.get(f.dataId),h=this.gpgpu.downloadMatrixFromPackedTexture(d.texture.texture,...Hn(r)).subarray(0,s);return this.disposeIntermediateTensorInfo(f),h}let i=$().getBool("WEBGL_PACK")&&n===!0,a=i?jn(r):r,l=i?new na(a):new oa(a),c=this.runWebGLProgram(l,[{shape:a,dtype:o,dataId:t}],"float32"),u=this.texData.get(c.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(c),p}timerAvailable(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let r=this.activeTimers,o=[],n=!1;this.programTimersStack==null?(this.programTimersStack=o,n=!0):this.activeTimers.push(o),this.activeTimers=o,t();let s=w.flatten(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=w.flatten(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=r,n&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let l=await Promise.all(s);a.kernelMs=w.sum(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:w.now(),endMs:null}}endTimer(t){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=w.now(),t)}async getQueryTime(t){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let r=t;return r.endMs-r.startMs}disposeData(t,r=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(r?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!r&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:o}=this.texData.get(t);return o!=null&&(this.disposeData(o.real.dataId,r),this.disposeData(o.imag.dataId,r)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:r,dtype:o,texShape:n,usage:s,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),r!=null&&(this.numBytesInGPU-=this.computeBytes(n,o),this.textureManager.releaseTexture(r,n,s,i)));let u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,r=b_){return $().getBool("WEBGL_CPU_FORWARD")&&t.every(o=>this.texData.get(o.dataId).texture==null&&w.sizeFromShape(o.shape)<r)}getGPGPUContext(){return this.gpgpu}where(t){C.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let r=t.dataSync();return g_(t.shape,r)}packedUnaryOp(t,r,o){let n=new Gt(t.shape,r),s=this.compileAndRun(n,[t],o);return je().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let n=ua(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,n)}if($().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,hp,t.dtype);let r=new Et(t.shape,hp),o=this.compileAndRun(r,[t]);return je().makeTensorFromTensorInfo(o)}makeTensorInfo(t,r,o){let n;if(r==="string"&&o!=null&&o.length>0&&w.isString(o[0])){let s=o.map(i=>w.encodeString(i));n=this.write(s,t,r)}else n=this.write(o,t,r);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:r}}makeOutput(t,r,o){return je().makeTensorFromTensorInfo(this.makeTensorInfo(t,r,o),this)}unpackTensor(t){let r=new ha(t.shape);return this.runWebGLProgram(r,[t],t.dtype)}packTensor(t){let r=new fa(t.shape),o=!0;return this.runWebGLProgram(r,[t],t.dtype,null,o)}packedReshape(t,r){let o=[Cr(t.shape),...Sr(t.shape)],n={dtype:t.dtype,shape:o,dataId:t.dataId},s=[Cr(r),...Sr(r)],i=new sn(s,o),a=!0,l=[o],c=this.runWebGLProgram(i,[n],t.dtype,l,a);return{dataId:c.dataId,shape:r,dtype:c.dtype}}decode(t,r){let o=this.texData.get(t),{isPacked:n,shape:s,dtype:i}=o;if(r!=null){let f=w.sizeFromShape(s),d=r[0]*r[1]*4;w.assert(f<=d,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let a=jn(s),l;n?l=new ra(a):l=new ea(a);let c=!0,u=[r??Hn(a)],p=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,r);return{dtype:i,shape:s,dataId:p.dataId}}runWebGLProgram(t,r,o,n,s=!1,i){let a=this.makeTensorInfo(t.outputShape,o),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===vr.DENSE){let m=i??Hn(t.outputShape);l.texShape=m.map(y=>y*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),w.sizeFromShape(a.shape)===0)return l.values=w.getTypedArrayFromDType(a.dtype,0),a;let c=[],u=r.map(m=>{if(m.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let y=this.texData.get(m.dataId);if(y.texture==null){if(!t.packedInputs&&w.sizeFromShape(m.shape)<=$().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:m.shape,texData:null,isUniform:!0,uniformValues:y.values};t.packedInputs&&(y.isPacked=!0,y.shape=m.shape)}if(this.uploadToGPU(m.dataId),!!y.isPacked!=!!t.packedInputs)m=y.isPacked?this.unpackTensor(m):this.packTensor(m),c.push(m),y=this.texData.get(m.dataId);else if(y.isPacked&&!Zr(y.shape,m.shape)){let v=m,b=m.shape;m.shape=y.shape,m=this.packedReshape(m,b),c.push(m),y=this.texData.get(m.dataId),v.shape=b}return{shape:m.shape,texData:y,isUniform:!1}});this.uploadToGPU(a.dataId);let p={shape:a.shape,texData:l,isUniform:!1},f=ax(t,u,p),d=this.getAndSaveBinary(f,()=>sx(this.gpgpu,t,u,p)),h=this.activeTimers!=null,x;h&&(x=this.startTimer()),$().get("ENGINE_COMPILE_ONLY")||ix(this.gpgpu,d,u,p,n),c.forEach(m=>this.disposeIntermediateTensorInfo(m)),h&&(x=this.endTimer(x),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(x)}));let g=$().get("WEBGL_FLUSH_THRESHOLD");if(g>0){let m=w.now();m-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=m)}if(!$().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&s===!1){let m=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),m}return a}compileAndRun(t,r,o,n,s=!1){return o=o||r[0].dtype,this.runWebGLProgram(t,r,o,n,s)}getAndSaveBinary(t,r){return t in this.binaryCache||(this.binaryCache[t]=r()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||($().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(r=>{this.gpgpu.deleteProgram(this.binaryCache[r].webGLProgram),delete this.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=q(()=>{if(!$().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=$().getBool("DEBUG");$().set("DEBUG",!1);let r=this.abs(Ft(1e-8)).dataSync()[0];if($().set("DEBUG",t),r>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?x_:y_}uploadToGPU(t){let r=this.texData.get(t),{shape:o,dtype:n,values:s,texture:i,usage:a,isPacked:l}=r;if(i!=null)return;let c=this.activeTimers!=null,u;c&&(u=w.now());let p=r.texShape;if(p==null&&(p=qg(o,l),r.texShape=p),s!=null){let f=jn(o),d,h=p[1],x=p[0],g=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(l||!g)&&([h,x]=Ue(p[0],p[1])),l?d=new sa(f,g):d=new Yn(f,g);let m=g?[x,h]:p,y=this.makeTensorInfo(m,n),v=this.texData.get(y.dataId);g?v.usage=kt.PIXELS:v.usage=kt.UPLOAD,v.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(y.dataId),h,x,s);let b=[[x,h]],S=!0,I=this.runWebGLProgram(d,[y],n,b,S),T=this.texData.get(I.dataId);r.texShape=T.texShape,r.isPacked=T.isPacked,r.usage=T.usage,$().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(r.texture=T.texture,r.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(y),c&&(this.uploadWaitMs+=w.now()-u)}else{let f=this.acquireTexture(p,a,n,l);r.texture=f}}convertAndCacheOnCPU(t,r){let o=this.texData.get(t),{dtype:n}=o;return r!=null&&(o.values=S_(r,n)),o.values}acquireTexture(t,r,o,n){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,r,n)}computeBytes(t,r){return t[0]*t[1]*w.bytesPerElement(r)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,r]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(r));return Promise.all(t)}else{for(let[,r]of Object.entries(this.binaryCache)){let o=new Promise(n=>{try{this.checkCompletion_(r),n(!0)}catch(s){throw s}});t.push(o)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await Tu(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Du(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){let{variablesLocations:r,customUniformLocations:o,infLoc:n,nanLoc:s,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=Lu(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=r,t.customUniformLocations=o,t.infLoc=n,t.nanLoc=s,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,r,o){t.channels=t.channels||"RGBA";let{texture:n,height:s,width:i,channels:a}=t,l=je().backend;if(!l.gpgpu.gl.isTexture(n))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let c=l.writeTexture(n,r,o,s,i,a);return je().makeTensorFromDataId(c,r,o,l)}};ro.nextDataId=0;function S_(e,t){if(t==="float32"||t==="complex64")return e;if(t==="int32"||t==="bool"){let r=t==="int32"?new Int32Array(e.length):new Uint8Array(e.length);for(let o=0;o<r.length;++o)r[o]=Math.round(e[o]);return r}else throw new Error(`Unknown dtype ${t}`)}wr.isBrowser()&&Bm("webgl",()=>new ro,2);var an=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var pe=class{constructor(t,r,o){this.variableNames=["A","B"],this.outputShape=C.assertAndGetBroadcastShape(r,o),this.enableShapeUniforms=j(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var te=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var ye=class{constructor(t,r,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=C.assertAndGetBroadcastShape(r,o);let s=this.outputShape.length;this.enableShapeUniforms=j(s);let i="";if(n)if(s===0||w.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${G(s)} coords = getOutputCoords();
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
    `}};function ct(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var uy={kernelName:Vr,backendName:"webgl",kernelFunc:ct};function Ht(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.makeTensorInfo(o.shape,"complex64"),i=r.texData.get(s.dataId),a=ct({inputs:{x:o},backend:r}),l=ct({inputs:{x:n},backend:r});return i.complexTensorInfos={real:a,imag:l},s}var py={kernelName:Rn,backendName:"webgl",kernelFunc:Ht};var mp="return (a < 0.) ? b * a : a;",gp=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function $_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{alpha:s}=o,i=r.makeTensorInfo([],"float32",w.createScalarValue(s,"float32")),a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ye(gp,n.shape,i.shape):new pe(mp,n.shape,i.shape),l=r.runWebGLProgram(a,[n,i],"float32");return r.disposeIntermediateTensorInfo(i),l}var fy={kernelName:ti,backendName:"webgl",kernelFunc:$_};var xp="return (a < 0.) ? b * a : a;",yp=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function I_(e){let{inputs:t,backend:r}=e,{x:o,alpha:n}=t,s=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ye(yp,o.shape,n.shape):new pe(xp,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],"float32")}var dy={kernelName:ci,backendName:"webgl",kernelFunc:I_};var we="if (isnan(x)) return x;";function L({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,l=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&r!=null){let p=a.texData.get(i.dataId),f=r(p.values,l);return a.makeTensorInfo(i.shape,l,f)}let c=$().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null,u;return c?u=new Gt(i.shape,t):u=new Et(i.shape,e),a.runWebGLProgram(u,[i],l)}}function X({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:l,b:c}=i,u=a;if(o&&l.dtype==="complex64"){let h=u.texData.get(l.dataId),x=u.texData.get(c.dataId),[g,m]=[[h.complexTensorInfos.real,x.complexTensorInfos.real],[h.complexTensorInfos.imag,x.complexTensorInfos.imag]].map(v=>{let[b,S]=v,I={dataId:b.dataId,dtype:b.dtype,shape:l.shape},T={dataId:S.dataId,dtype:S.dtype,shape:c.shape},E=new pe(e,l.shape,c.shape);return u.runWebGLProgram(E,[I,T],Nt(b.dtype,S.dtype))}),y=Ht({inputs:{real:g,imag:m},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(m),y}let p=s||Nt(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&n!=null){let h=u.texData.get(l.dataId).values,x=u.texData.get(c.dataId).values,g=l.dtype==="string"?C.fromUint8ToStringArray(h):h,m=l.dtype==="string"?C.fromUint8ToStringArray(x):x,[y,v]=n(l.shape,c.shape,g,m,p),b=u.makeTensorInfo(v,p),S=u.texData.get(b.dataId);return S.values=y,b}let f=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null,d;return f?d=new ye(t,l.shape,c.shape,r):d=new pe(e,l.shape,c.shape),u.runWebGLProgram(d,[l,c],p)}}function er(e,t=!1){if(e==="linear")return t?sy:J0;if(e==="relu")return t?ay:ey;if(e==="elu")return t?iy:ty;if(e==="relu6")return t?ly:ry;if(e==="prelu")return t?yp:xp;if(e==="leakyrelu")return t?gp:mp;if(e==="sigmoid")return t?cy:oy;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var ln=class{constructor(t,r,o,n=!1,s=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=j(this.outputShape.length);let u=n?t[1]:t[2],p=Math.ceil(u/2),f=n?"i * 2, rc.y":"rc.y, i * 2",d=s?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],x=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],g="",m="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,m="result = activation(result);");let y=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let v="rc.x",b="rc.x";t[0]<r[0]?v=`imod(rc.x, ${t[0]})`:r[0]<t[0]&&(b=`imod(rc.x, ${r[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${b};
        for (int i = 0; i < ${p}; i++) {
          vec4 a = getMatrixA(batchA, ${f});
          vec4 b = getMatrixB(batchB, ${d});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${h[0]} * ${x[0]});
          result += (${h[1]} * ${x[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${y}

        ${m}

        setOutput(result);
      }
    `}};var wp={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},es=class{constructor(t,r,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=C.assertAndGetBroadcastShape(r,o),this.userCode=`
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
    `}};var hy="return a * b;";function rs(e){let{inputs:t,backend:r}=e,{a:o,b:n}=t,s=C.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),c=new es(wp.REAL,o.shape,n.shape),u=new es(wp.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:n.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:n.shape}],f=r.runWebGLProgram(c,p,"float32"),d=r.runWebGLProgram(u,p,"float32"),h=Ht({inputs:{real:f,imag:d},backend:r});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),h}if(r.shouldExecuteOnCPU([o,n])){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),[c,u]=I0(o.shape,n.shape,a.values,l.values,s),p=r.makeTensorInfo(u,s),f=r.texData.get(p.dataId);return f.values=c,p}let i;return $().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new ye(hy,o.shape,n.shape):i=new pe(hy,o.shape,n.shape),r.runWebGLProgram(i,[o,n],s)}var my={kernelName:Do,backendName:"webgl",kernelFunc:rs};function gy(e,t,r){let o=[Cr(e.shape),...Sr(e.shape)],n={dtype:e.dtype,shape:o,dataId:e.dataId},s=[Cr(t),...Sr(t)],i=new sn(s,o),a=!0,l=[o],c=r.runWebGLProgram(i,[n],e.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function _(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{shape:s}=o,i=r,a=w.sizeFromShape(n.shape),l=w.inferFromImplicitShape(s,a),c=w.sizeFromShape(l);w.assert(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let u=i.texData.get(n.dataId);return u.isPacked&&!Zr(n.shape,l)&&!(u.texture!==null&&Zr(u.shape,l))?gy(n,l,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype})}var xy={kernelName:pi,backendName:"webgl",kernelFunc:_};var os=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a=Math.floor(o/4)*4,l=o%4,c="sumValue += dot(values, ones);";if(r!=null){let p=1/r;c=`sumValue += dot(values * ${w.isInt(p)?p.toPrecision(2):p}, ones);`}let u="";s%o>0&&(u=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
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

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}};var ga=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a="0.0",l="";r==="prod"?a="1.0":r==="min"?(a="1.0 / 1e-20",l="min"):r==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="sum"?c="sumValue":r==="prod"?c="prodValue":r==="all"?c="allValue":r==="any"&&(c="anyValue");let u=Math.floor(o/4)*4,p=o%4,f=`
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
    `,d="vec4";r==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):r==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
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

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${f}
        }

        int inIdx = inOffset + ${u};
        if (${p===1}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${p===2}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${f}
        } else if (${p===3}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${f}
        }
        setOutput(${c});
      }
    `}};function E_(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let r=t.length?t[t.length-1].outSize:e[1],o=C.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:o,outSize:Math.ceil(r/o)})}return t}function ee(e,t,r,o){let n=E_(e.shape),s=e;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:l,outSize:c}=n[i],u,p;r==="mean"?u=i===0?new os({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:c},a):new os({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:c}):u=new ga({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:c},r),p=s,s=o.runWebGLProgram(u,[s],t),p.dataId!==e.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var xa=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[r[i]];this.outputShape=o,this.rank=o.length;let n=G(this.rank),s=__(r);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function __(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(t);for(let n=0;n<e.length;n++)o[e[n]]=r[n];return o.join()}var ya=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(t.length);for(let u=0;u<o.length;u++)o[u]=t[r[u]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=G(this.rank),s=dp("rc",this.rank),i=new Array(this.rank);for(let u=0;u<r.length;u++)i[r[u]]=s[u];let a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${o[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function $r(e,t,r){let o=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ya(e.shape,t):new xa(e.shape,t);return r.runWebGLProgram(o,[e],e.dtype)}function yy(e,t,r,o){let n=t,s=e.shape.length,i=w.parseAxisParam(n,e.shape),a=i,l=C.getAxesPermutation(a,s),c=l!=null,u=e;c&&(u=$r(e,l,o),a=C.getInnerMostAxes(a.length,s)),C.assertAxesAreInnerMostDims("sum",a,s);let[p,f]=C.computeOutAndReduceShapes(u.shape,a),d=p;r&&(d=C.expandShapeToKeepDim(p,i));let h=w.sizeFromShape(f),g=w.sizeFromShape(e.shape)/h,m=_({inputs:{x:u},attrs:{shape:[g,h]},backend:o}),y=Kr(e.dtype),v=ee(m,y,"sum",o),b=_({inputs:{x:v},attrs:{shape:d},backend:o});return o.disposeIntermediateTensorInfo(m),o.disposeIntermediateTensorInfo(v),c&&o.disposeIntermediateTensorInfo(u),b}function oo(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o;return yy(n,s,i,r)}var wy={kernelName:hi,backendName:"webgl",kernelFunc:oo};function J(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{perm:s}=o,i=r,a=n.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=n.shape[s[u]];let c;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,f=eo(p,n.shape,n.dtype,s,l);c=i.makeTensorInfo(l,n.dtype);let d=i.texData.get(c.dataId);d.values=f}else c=$r(n,s,i);return c}var by={kernelName:Lo,backendName:"webgl",kernelFunc:J};var bp=1e3;function no({a:e,b:t,transposeA:r,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){let c=e.shape.length,u=t.shape.length,p=r?e.shape[c-2]:e.shape[c-1],f=o?t.shape[u-1]:t.shape[u-2],d=r?e.shape[c-1]:e.shape[c-2],h=o?t.shape[u-2]:t.shape[u-1],x=e.shape.slice(0,-2),g=t.shape.slice(0,-2),m=w.sizeFromShape(x),y=w.sizeFromShape(g),b=Un.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([d,h]);w.assert(p===f,()=>`Error in matMul: inner shapes (${p}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${o} must match.`);let S=r?[m,p,d]:[m,d,p],I=o?[y,h,f]:[y,f,h],T=_({inputs:{x:e},backend:n,attrs:{shape:S}}),E=_({inputs:{x:t},backend:n,attrs:{shape:I}}),R=[T,E],F=Math.max(m,y),U=r?T.shape[1]:T.shape[2],z=s!=null,ft=i!=null,tt=l==="leakyrelu",mt=l!=null?er(l,!0):null,gt=z||ft||tt||mt!=null,xt;if((d===1||h===1)&&U>bp&&gt===!1){let A=T,N=E;r&&(A=J({inputs:{x:T},backend:n,attrs:{perm:[0,2,1]}}),R.push(A)),o&&(N=J({inputs:{x:E},backend:n,attrs:{perm:[0,2,1]}}),R.push(N));let Ct=h!==1,se=h===1,Fe=A;Ct&&(Fe=_({inputs:{x:A},backend:n,attrs:{shape:[F,U,1]}}),R.push(Fe));let pr=h===1?2:1,ie=N;se&&(ie=_({inputs:{x:N},backend:n,attrs:{shape:[F,1,U]}}),R.push(ie));let fr=rs({inputs:{a:Fe,b:ie},backend:n});xt=oo({inputs:{x:fr},backend:n,attrs:{axis:pr,keepDims:!0}}),R.push(fr)}else{let A=Nt(e.dtype,t.dtype),N=new ln(S,I,[F,d,h],r,o,z,mt,ft,tt),Ct=[T,E];if(s!=null&&Ct.push(s),ft&&Ct.push(i),tt){let se=n.makeTensorInfo([],"float32",w.createScalarValue(a,"float32"));Ct.push(se),R.push(se)}xt=n.runWebGLProgram(N,Ct,A)}let yt=_({inputs:{x:xt},backend:n,attrs:{shape:b}});R.push(xt);for(let A of R)n.disposeIntermediateTensorInfo(A);return yt}function k_(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:p}=o;return no({a:n,b:s,transposeA:l,transposeB:c,backend:r,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:u})}var vy={kernelName:Kh,backendName:"webgl",kernelFunc:k_};var Cy="return abs(x);";function A_(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=r.texData.get(o.dataId),i=ua(s.values);return r.makeTensorInfo(o.shape,o.dtype,i)}let n;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Gt(o.shape,Cy):n=new Et(o.shape,Cy),r.runWebGLProgram(n,[o],o.dtype)}var Sy={kernelName:An,backendName:"webgl",kernelFunc:A_};var R_=dt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,N_=L({opSnippet:R_}),$y={kernelName:Lf,backendName:"webgl",kernelFunc:N_};var F_=dt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,D_=L({opSnippet:F_}),Iy={kernelName:Bf,backendName:"webgl",kernelFunc:D_};var Ty="return a + b;",O_=X({opSnippet:Ty,packedOpSnippet:Ty,supportsComplex:!0,cpuKernelImpl:s0}),Ey={kernelName:mr,backendName:"webgl",kernelFunc:O_};var wa=class{constructor(t,r){this.outputShape=[],this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var ba=class{constructor(t,r){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function va(e){let{inputs:t,backend:r}=e,o=t;if(o.length===1)return ct({inputs:{x:o[0]},backend:r});if(o.length>$().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let l=Math.floor(o.length/2),c=va({inputs:o.slice(0,l),backend:r}),u=va({inputs:o.slice(l),backend:r});return va({inputs:[c,u],backend:r})}let n=o.map(l=>l.dtype).reduce((l,c)=>Nt(l,c)),s=o.map(l=>l.shape),a=$().getBool("WEBGL_PACK")?new ba(o[0].shape,s):new wa(o[0].shape,s);return r.runWebGLProgram(a,o,n)}var _y={kernelName:Uf,backendName:"webgl",kernelFunc:va};function P_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),c=l,u=C.getAxesPermutation(c,a),p=n;u!=null&&(p=J({inputs:{x:n},backend:r,attrs:{perm:u}}),c=C.getInnerMostAxes(c.length,a)),C.assertAxesAreInnerMostDims("all",c,a);let[f,d]=C.computeOutAndReduceShapes(p.shape,c),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=ee(x,x.dtype,"all",r),m;if(i){let y=C.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),u!=null&&r.disposeIntermediateTensorInfo(p),m}var ky={kernelName:Vf,backendName:"webgl",kernelFunc:P_};function M_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),c=l,u=C.getAxesPermutation(c,a),p=n;u!=null&&(p=J({inputs:{x:n},backend:r,attrs:{perm:u}}),c=C.getInnerMostAxes(c.length,a)),C.assertAxesAreInnerMostDims("any",c,a);let[f,d]=C.computeOutAndReduceShapes(p.shape,c),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=ee(x,x.dtype,"any",r),m;if(i){let y=C.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),u!=null&&r.disposeIntermediateTensorInfo(p),m}var Ay={kernelName:zf,backendName:"webgl",kernelFunc:M_};var Ca=class{constructor(t,r,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=t;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=r==="max"?">":"<",l=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `}};var Sa=class{constructor(t,r,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,w.assert(t.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=t[t.length-1],i=Math.ceil(s/r);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,l=a.length,c=G(l),u=lt("coords",l),p,f;if(i===1){f=l+1;let E=G(f);p=`
        ${E} sourceLocR = ${E}(${u.join()}, 0);
        ++${u[l-1]};
        ${E} sourceLocG = ${E}(${u.join()}, 0);
        ++${u[l-2]};
        ${E} sourceLocA = ${E}(${u.join()}, 0);
        --${u[l-1]};
        ${E} sourceLocB = ${E}(${u.join()}, 0);
        --${u[l-2]};`}else f=l,p=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;let d=["x","y","z","w","u","v"].slice(0,f),h="."+d[f-1],x=d.map(E=>"int "+E),g=lt("sourceLocR",f-1).concat("inIdx.r"),m=lt("sourceLocG",f-1).concat("inIdx.g"),y=lt("sourceLocB",f-1).concat("inIdx.b"),v=lt("sourceLocA",f-1).concat("inIdx.a"),b=o==="max"?"greaterThan":"lessThan",S=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${v.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${y.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,T=n?"":`
      float getBestIndicesAChannel(${x.join()}) {
        return getChannel(getBestIndicesA(${d.join()}),
                                          vec2(${d.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${x.join()}) {
        return getChannel(getA(${d.join()}),
                               vec2(${d.slice(-2).join()}));
      }
      ${T}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${h}, sourceLocG${h},
          sourceLocB${h}, sourceLocA${h}) * ${r};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${r}; i++) {
          inIdx = srcIdx;
          ${S}
          vec4 candidate = ${I};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${b}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function Ry(e,t,r,o=null){let n=t.shape[0],s=t.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=C.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},l=new Ca(a,r,o==null),c=[t];o!=null&&c.push(o);let u=e.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;let p=Ry(e,t,r,u);return e.disposeIntermediateTensorInfo(u),p}function Ny(e,t,r,o=null){let n=o!=null?o.shape:t.shape,s=n[n.length-1],i=C.computeOptimalWindowSize(s),a=new Sa(n,i,r,o==null),l=o==null?[t]:[t,o],c=e.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){let u=Ny(e,t,r,c);return e.disposeIntermediateTensorInfo(c),u}return c}function $a(e,t,r,o){let n=[r];if(C.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,t.shape.length),!$().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let s=[],i=e.texData.get(t.dataId),a=i!==null&&i.isPacked,l=t;a&&(l=e.unpackTensor(t),s.push(l));let[c,u]=C.computeOutAndReduceShapes(l.shape,n),p=w.sizeFromShape(u),f=_({inputs:{x:l},backend:e,attrs:{shape:[-1,p]}});s.push(f);let d=Ry(e,f,o);s.push(d);let h=_({inputs:{x:d},backend:e,attrs:{shape:c}});return s.forEach(x=>e.disposeIntermediateTensorInfo(x)),h}return Ny(e,t,o)}function L_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=w.parseAxisParam(s,n.shape),a=C.getAxesPermutation(i,n.shape.length),l=n,c=[];a!=null&&(l=J({inputs:{x:n},backend:r,attrs:{perm:a}}),c.push(l),i=C.getInnerMostAxes(i.length,l.shape.length)),C.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);let u=$a(r,l,i[0],"max");return c.forEach(p=>r.disposeIntermediateTensorInfo(p)),u}var Fy={kernelName:Wf,backendName:"webgl",kernelFunc:L_};function B_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=w.parseAxisParam(s,n.shape),a=C.getAxesPermutation(i,n.shape.length),l=n,c=[];a!=null&&(l=J({inputs:{x:n},backend:r,attrs:{perm:a}}),c.push(l),i=C.getInnerMostAxes(i.length,l.shape.length)),C.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);let u=$a(r,l,i[0],"min");return c.forEach(p=>r.disposeIntermediateTensorInfo(p)),u}var Dy={kernelName:Gf,backendName:"webgl",kernelFunc:B_};var U_=dt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,V_=L({opSnippet:U_}),Oy={kernelName:Hf,backendName:"webgl",kernelFunc:V_};var z_=dt+"return log(x + sqrt(x * x + 1.0));",W_=L({opSnippet:z_}),Py={kernelName:qf,backendName:"webgl",kernelFunc:W_};var G_=dt+`
  return atan(x);
`,H_=L({opSnippet:G_}),My={kernelName:Kf,backendName:"webgl",kernelFunc:H_};var q_=an+`
  return atan(a, b);
`,K_=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+te+`
  return result;
`,X_=X({opSnippet:q_,packedOpSnippet:K_}),Ly={kernelName:jf,backendName:"webgl",kernelFunc:X_};var j_=dt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Y_=L({opSnippet:j_}),By={kernelName:Xf,backendName:"webgl",kernelFunc:Y_};var Ee=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,p=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;let x=r==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,m=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`,y="0.0";if(x||(y="-1.0 / 1e-20"),o){let E=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${d}, ${h});

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
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${E} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?g:m:`wR * ${f} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v="max",b=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(b="avgValue / max(count, 1.0)");let S=Math.floor(i/4)*4,I=i%4,T=`
      if (${x}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${d}, ${h});
      const float initializationValue = ${y};
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
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${S}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${T}
          }

          int xC = xCCorner + ${S};
          if (${I===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${I===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${T}
          }
        }
        setOutput(${b});
      }
    `}},Ir=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,p=t.dilationHeight,f=t.dilationWidth,d=t.effectiveFilterDepth,h=t.effectiveFilterHeight,x=t.effectiveFilterWidth,g=t.padInfo.front,m=t.padInfo.top,y=t.padInfo.left;this.outputShape=t.outShape;let v=r==="avg",b="0.0";if(v||(b="-1.0 / 1e-20"),o){let F=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${m}, ${y});

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

          for (int wD = 0; wD < ${d};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${x};
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
                if (value ${F} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${h} * ${x} +
                      wR * ${x} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let S="max",I=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(I="avgValue / max(count, 1.0)");let T=Math.floor(i/4)*4,E=i%4,R=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${S}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${m}, ${y});
      const float initializationValue = ${b};
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
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${T}; wC += 4) {
              int xC = xCCorner + wC * ${f};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                getValue(batch, xD, xR, xC + 3 * ${f}, ch)
              );

              ${R}
            }

            int xC = xCCorner + ${T};
            if (${E===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${R}
            } else if (${E===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                initializationValue,
                initializationValue
              );

              ${R}
            } else if (${E===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${f}, ch),
                getValue(batch, xD, xR, xC + 2 * ${f}, ch),
                initializationValue
              );

              ${R}
            }
          }
        }
        setOutput(${I});
      }
    `}};function Q_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;Ve(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,c=1;w.assert(C.eitherStridesOrDilationsAreOne(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let u=C.computePool2DInfo(n.shape,s,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&w.arraysEqual(u.inShape,u.outShape))return ct({inputs:{x:n},backend:r});let p=new Ee(u,"avg",!1);return r.runWebGLProgram(p,[n],"float32")}var Uy={kernelName:Yf,backendName:"webgl",kernelFunc:Q_};function Z_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=o,u=[1,1,1],p=C.computePool3DInfo(n.shape,s,i,u,a,l,c),f=new Ir(p,"avg",!1);return r.runWebGLProgram(f,[n],"float32")}var Vy={kernelName:Zf,backendName:"webgl",kernelFunc:Z_};var Ia=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,p=c-1-t.padInfo.left,f=1/(r*o);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${p});
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

          for (int wC = 0; wC < ${c};
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
    `}},Ta=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,d=t.effectiveFilterWidth,h=p-1-t.padInfo.front,x=f-1-t.padInfo.top,g=d-1-t.padInfo.left,m=1/(r*o*n);this.userCode=`
      const ivec3 pads = ivec3(${h}, ${x}, ${g});
      const float avgMultiplier = float(${m});

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
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
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
    `}};function J_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=o,p=[1,1,1],f=C.computePool3DInfo(i.shape,a,l,p,c,u),d=new Ta(f);return r.runWebGLProgram(d,[n],i.dtype)}var zy={kernelName:Jf,backendName:"webgl",kernelFunc:J_};function tk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s;Ve([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:c}=o,u=C.computePool2DInfo(i.shape,a,l,1,c),p=new Ia(u);return r.runWebGLProgram(p,[n],i.dtype)}var Wy={kernelName:Qf,backendName:"webgl",kernelFunc:tk};function ek(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s}=t,{transposeA:i,transposeB:a}=o;return no({a:n,b:s,transposeA:i,transposeB:a,backend:r})}var Gy={kernelName:Vs,backendName:"webgl",kernelFunc:ek};var Ea=class{constructor(t,r,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],C.assertAndGetBroadcastShape(t,r),C.assertAndGetBroadcastShape(t,o);let a="0.0";n!=null&&(C.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(C.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var _a=class{constructor(t,r,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],C.assertAndGetBroadcastShape(t,r),C.assertAndGetBroadcastShape(t,o);let a="vec4(0.0)";n!=null&&(C.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(C.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var rk=({inputs:e,backend:t,attrs:r})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=e;w.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),w.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),w.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=r;l==null&&(l=.001);let c=[o,n,s],u=null;i!=null&&(u=i.shape,c.push(i));let p=null;a!=null&&(p=a.shape,c.push(a));let f=$().getBool("WEBGL_PACK_NORMALIZATION")?new _a(o.shape,n.shape,s.shape,u,p,l):new Ea(o.shape,n.shape,s.shape,u,p,l);return t.runWebGLProgram(f,c,c[0].dtype)},Hy={kernelName:kd,backendName:"webgl",kernelFunc:rk};var ka=class{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;let r=G(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=ok(this.rank),n,s=t.map((i,a)=>`sourceLoc.${vp[a]} = start[${a}] + coords.${vp[a]};`);n=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},vp=["x","y","z","w","u","v"];function ok(e){if(e===1)return"sourceLoc";if(e<=6)return vp.slice(0,e).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}var Aa=class{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let r=G(this.rank),o=lt("coords",this.rank),n=lt("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
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
    `,c=this.rank<=4?`sourceLoc = coords +
            ${r}(${t.map((u,p)=>`start[${p}]`).join()});`:t.map((u,p)=>`${n[p]} = ${o[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${r} coords = getOutputCoords();
        ${r} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}};function nk(e,t,r,o){let n=o.texData.get(e.dataId),s=o.makeTensorInfo(r,e.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=r,i.dtype=e.dtype;let a=zt.computeFlatOffset(t,w.computeStrides(e.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||e.dataId};let l=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,l+1),s}function _e(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,size:i}=o,[a,l]=zt.parseSliceParams(n,s,i);if(zt.assertParamsValid(n,a,l),w.sizeFromShape(l)===0)return r.makeTensorInfo(l,n.dtype,[]);if(r.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=r.texData.get(n.dataId),f=P0(p.values,a,l,n.shape,n.dtype);return r.makeTensorInfo(l,n.dtype,f)}let{isPacked:c}=r.texData.get(n.dataId),u=zt.isSliceContinous(n.shape,a,l);if(c||!u){let p=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Aa(l):new ka(l),f=[a];return r.runWebGLProgram(p,[n],n.dtype,f)}return r.uploadToGPU(n.dataId),nk(n,a,l,r)}var qy={kernelName:Bc,backendName:"webgl",kernelFunc:_e};var sk=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,crops:i}=o;w.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((y,v)=>y*v),l=C.getReshaped(n.shape,s,a),c=C.getPermuted(l.length,s.length),u=C.getReshapedPermuted(n.shape,s,a),p=C.getSliceBeginCoords(i,s.length),f=C.getSliceSize(u,i,s.length),d=[],h=_({inputs:{x:n},backend:r,attrs:{shape:l}}),x=J({inputs:{x:h},backend:r,attrs:{perm:c}}),g=_({inputs:{x},backend:r,attrs:{shape:u}}),m=_e({inputs:{x:g},backend:r,attrs:{begin:p,size:f}});return d.push(h),d.push(x),d.push(g),d.forEach(y=>r.disposeIntermediateTensorInfo(y)),m},Ky={kernelName:td,backendName:"webgl",kernelFunc:sk};function ik(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i}=o,a=r.readSync(n.dataId),l=r.readSync(s.dataId),c=ca(a,l,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,c)}var Xy={kernelName:ed,backendName:"webgl",kernelFunc:ik};function ak(e){let{inputs:t,backend:r}=e,{s0:o,s1:n}=t,s=r.readSync(o.dataId),i=r.readSync(n.dataId),a=C.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return r.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var jy={kernelName:rd,backendName:"webgl",kernelFunc:ak};var lk="return float(a != b);",Cp=X({opSnippet:lk,cpuKernelImpl:E0,dtype:"bool"}),Yy={kernelName:ai,backendName:"webgl",kernelFunc:Cp};function rr(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return ct({inputs:{x:n.complexTensorInfos.real},backend:r})}var Qy={kernelName:Fn,backendName:"webgl",kernelFunc:rr};var ck="return float(int(x));";function Zy(e,t){let r=new Et(e.shape,ck),o=t.runWebGLProgram(r,[e],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Sp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return ct({inputs:{x:n},backend:r});let i=Wn(n.shape),a=Sp({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),l=Ht({inputs:{real:a,imag:i},backend:r});return i.dispose(),r.disposeIntermediateTensorInfo(a),l}if(n.dtype==="complex64"){let i=rr({inputs:{input:n},backend:r}),a=Sp({inputs:{x:i},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(i),a}if(!w.hasEncodingLoss(n.dtype,s)){let i=ct({inputs:{x:n},backend:r});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(r.shouldExecuteOnCPU([n])){let i=r.texData.get(n.dataId).values,[a,l,c]=a0(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,c)}if(s==="int32")return Zy(n,r);if(s==="bool"){let i=r.makeTensorInfo([],"bool",w.getTypedArrayFromDType("bool",1)),l=Cp({inputs:{a:n,b:i},backend:r});return r.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Jy={kernelName:Ur,backendName:"webgl",kernelFunc:Sp};var tw="return ceil(x);",uk=L({opSnippet:tw,packedOpSnippet:tw,cpuKernelImpl:l0}),ew={kernelName:zs,backendName:"webgl",kernelFunc:uk};var Ra=class{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var Na=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function pk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{clipValueMin:s,clipValueMax:i}=o,a;$().getBool("WEBGL_PACK_CLIP")?a=new Na(n.shape):a=new Ra(n.shape);let l=[[s],[i]];return r.runWebGLProgram(a,[n],n.dtype,l)}var rw={kernelName:od,backendName:"webgl",kernelFunc:pk};var Fa=class{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
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
    `}};function ow(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function fk(e){let{inputs:t,backend:r}=e,{x:o}=t,n=r.texData.get(o.dataId),s=new Fa(o.shape),i=[ow(o,n.complexTensorInfos.real),ow(o,n.complexTensorInfos.imag)];return r.runWebGLProgram(s,i,i[0].dtype)}var nw={kernelName:Ws,backendName:"webgl",kernelFunc:fk};var Da=class{constructor(t){this.outputShape=[],this.outputShape=C.computeOutShape(t,1),this.variableNames=t.map((i,a)=>`T${a}`);let r=new Array(t.length-1);r[0]=t[0][1];for(let i=1;i<r.length;i++)r[i]=r[i-1]+t[i][1];let o=[`if (yC < ${r[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<r.length;i++){let a=r[i-1];o.push(`else if (yC < ${r[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=r.length,s=r[r.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var Pa=class{constructor(t,r){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=C.computeOutShape(t,r);let o=this.outputShape,n=o.length,s=G(n),i=lt("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=t.map((x,g)=>`T${g}`);let l=new Array(t.length-1);l[0]=t[0][r];for(let x=1;x<l.length;x++)l[x]=l[x-1]+t[x][r];let c=a[r],u=a.slice(-2),p=a.join(),f=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${p}), vec2(${u.join()}));
        }`;for(let x=1;x<l.length;x++){let g=l[x-1];f+=`
        if (${c} < ${l[x]}  && ${c} >= ${l[x-1]}) {
          return getChannel(
            getT${x}(${Oa(a,c,g)}),
            vec2(${Oa(u,c,g)}));
        }`}let d=l.length,h=l[l.length-1];f+=`
        return getChannel(
          getT${d}(${Oa(a,c,h)}),
          vec2(${Oa(u,c,h)}));`,this.userCode=`
      float getValue(${a.map(x=>"int "+x)}) {
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
    `}};function Oa(e,t,r){let o=e.indexOf(t);return e.map((s,i)=>i===o?`${s} - ${r}`:s).join()}function so(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return ct({inputs:{x:n.complexTensorInfos.imag},backend:r})}var sw={kernelName:Js,backendName:"webgl",kernelFunc:so};function cn(e,t,r){let o=e[0].dtype;if(o==="complex64"){let d=e.map(y=>rr({inputs:{input:y},backend:r})),h=e.map(y=>so({inputs:{input:y},backend:r})),x=cn(d,t,r),g=cn(h,t,r),m=Ht({inputs:{real:x,imag:g},backend:r});return d.forEach(y=>r.disposeIntermediateTensorInfo(y)),h.forEach(y=>r.disposeIntermediateTensorInfo(y)),r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),m}let n=r.shouldExecuteOnCPU(e);if(o==="string"&&(n=!0),n){let d=e.map(b=>{let I=[-1,w.sizeFromShape(b.shape.slice(t))];return _({inputs:{x:b},backend:r,attrs:{shape:I}})}),h=d.map(b=>({vals:r.readSync(b.dataId),shape:b.shape})),x=C.computeOutShape(d.map(b=>b.shape),1),g=d[0].shape[0]===1,m=c0(h,x,o,g),y=C.computeOutShape(e.map(b=>b.shape),t),v=r.makeTensorInfo(y,o,m);return d.forEach(b=>r.disposeIntermediateTensorInfo(b)),v}let s=e.filter(d=>w.sizeFromShape(d.shape)>0),i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let d=i?new Et(e[0].shape,ze):new Gt(e[0].shape,ze);return r.runWebGLProgram(d,e,o)}let a=$().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let d=[];for(let x=0;x<s.length;x+=a){let g=s.slice(x,x+a);d.push(cn(g,t,r))}let h=cn(d,t,r);for(let x of d)r.disposeIntermediateTensorInfo(x);return h}if(i){let d=new Pa(s.map(h=>h.shape),t);return r.runWebGLProgram(d,s,o)}let{tensors2D:l,outShape:c}=dk(s,t,r),u=new Da(l.map(d=>d.shape)),p=r.runWebGLProgram(u,l,o);l.forEach(d=>r.disposeIntermediateTensorInfo(d));let f=_({inputs:{x:p},attrs:{shape:c},backend:r});return r.disposeIntermediateTensorInfo(p),f}function dk(e,t,r){let o=C.computeOutShape(e.map(s=>s.shape),t);return{tensors2D:e.map(s=>_({inputs:{x:s},attrs:{shape:[-1,w.sizeFromShape(s.shape.slice(t))]},backend:r})),outShape:o}}function $p(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o,s=w.parseAxisParam(n,t[0].shape)[0],i=t.map(c=>c.shape);C.assertParamsConsistent(i,s);let a=C.computeOutShape(t.map(c=>c.shape),s);if(w.sizeFromShape(a)===0)return r.makeTensorInfo(a,t[0].dtype,[]);let l=t.filter(c=>w.sizeFromShape(c.shape)>0);return l.length===1?ct({inputs:{x:l[0]},backend:r}):cn(l,s,r)}var iw={kernelName:nd,backendName:"webgl",kernelFunc:$p};var un=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;let i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,p=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,x=t.inChannels%4,g=t.dataFormat==="channelsLast",m=g?1:2,y=g?2:3,v=g?3:1,b="",S="";o&&(n?b=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?b=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:b=`
          float activation(float x) {
            ${o}
          }
        `,S="result = activation(result);");let I=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${b}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${m}], coords[${y}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${f}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
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

            if (${x===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${x===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${x===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${I}
        ${S}
        setOutput(result);
      }
    `}},Ma=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let r=t.padInfo.front,o=t.padInfo.top,n=t.padInfo.left,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,p=t.filterDepth,f=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,x=t.inChannels%4;this.userCode=`
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
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
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

              if (${x===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${x===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${x===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var pn=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=j(this.outputShape.length);let i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,p=u,f=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)f+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;f+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)f+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;f+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(p+1)/2;g++){let m=g*2;if(f+=`
           xC = xCCorner + ${m*l};
           `,a===1){if(m<u&&(i%2===1?(f+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }
               `,l===1&&m>0?f+=`
                 xC${m} = vec4(xTexelC${m-2}.zw, xTexelC${m}.xy);
                 `:f+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${m} = vec4(previous.zw, xTexelC${m}.xy);
                   } else {
                     xC${m} = vec4(0.0, 0.0, xTexelC${m}.xy);
                   }
                   `):f+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xC${m} = xTexelC${m};
                 `,m+1<u)){let y=i%2===0?w.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
                   xCOffset = xC + imod(pads[1], 2) + ${y};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                     xTexelC${m+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${m+1}.zw = vec2(0.0);
                     }
                     xTexelC${m+1}Ready = 1;
                   }
                   `,l>1?f+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${m+1} = vec4(previous.zw, xTexelC${m+1}.xy);
                     } else {
                      xC${m+1} = vec4(0.0, 0.0, xTexelC${m+1}.xy);
                     }
                     `:f+=`
                     xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.xy);
                     `):y===1?f+=`
                     xC${m+1} = xTexelC${m};
                     `:f+=`
                     xCOffset = xC + ${y};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                       xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${m+1}.zw = vec2(0.0);
                       }
                       xTexelC${m+1}Ready = 1;
                     }

                     xC${m+1} = xTexelC${m+1};
                     `}}else m<u&&(i%2===1?(f+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.0);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
               `,m+1<u&&(f+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${m+1} = vec4(xTexelC${m+1}.xy, final.xy);
                 `)):(f+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${m}Ready == 0) {
                   xTexelC${m} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${m}.zw = vec2(0.0);
                   }
                   xTexelC${m}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${m+1}Ready == 0) {
                   xTexelC${m+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${m+1}.zw = vec2(0.);
                   }
                   xTexelC${m+1}Ready = 1;
                 }

                 xC${m} = vec4(
                   xTexelC${m}.xy, xTexelC${m+1}.xy);
               `,m+1<u&&(f+=`
                   xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
                 `)));m<u&&(f+=`
             wTexel = getW(r, ${m}, d1, d2);
             dotProd += xC${m}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${m}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,m+1<u&&(f+=`
               wTexel = getW(r, ${m+1}, d1, d2);
               dotProd += xC${m+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${m+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}f+=`
     }
   `,f+=`
     }
   `,f+=`
     }
   `;let d="",h="";o&&(n?d=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?d=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:d=`vec4 activation(vec4 x) {
           ${o}
         }`,h="result = activation(result);");let x=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${d}

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
         ${x}
         ${h}
         setOutput(result);
       }
     `}};var La=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=j(this.outputShape.length);let{dataFormat:o}=r,n=rt(),s=o==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`,c="";for(let u=0;u<=1;u++)for(let p=0;p<=1;p++)c+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${u};

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
                  result[${u*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+p}] = getChannel(
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

        ${c}

        ${n.output} = result;
      }
    `}};function Ba(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&r===1&&e[0]>1?[e[0],1]:null}function Ua({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let l=e.shape,c=o.texData.get(e.dataId),u=r.inChannels,p=l[0]*l[1]*l[2],f=r.outChannels,d=r.dataFormat==="channelsLast",h=!1,x=!1,g,m=[];if(s!=null){let b=Ba(s.shape,d);b!=null&&(s=_({inputs:{x:s},backend:o,attrs:{shape:b}}),m.push(s))}if(n!=null){let b=Ba(n.shape,d);b!=null&&(n=_({inputs:{x:n},backend:o,attrs:{shape:b}}),m.push(n))}if(!((p===1||f===1)&&u>bp)&&c.isPacked&&d&&c.texture!=null&&l[2]%2!==0&&w.arraysEqual(c.shape.slice(-3),l.slice(-3))){let b=l[0]*l[1]*(l[2]+1),S={dataId:e.dataId,shape:[1,b,r.inChannels],dtype:e.dtype},I=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,w.assert(Zr(c.shape,S.shape),()=>`packed reshape ${c.shape} to ${S.shape} isn't free`);let T=_({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}});m.push(T);let E=no({a:S,b:T,backend:o,transposeA:h,transposeB:x,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),R=o.texData.get(E.dataId);w.assert(R.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=I,R.shape=r.outShape,g=ct({inputs:{x:E},backend:o}),g.shape=r.outShape,m.push(E)}else{let b=r.outHeight*r.outWidth,S=_({inputs:{x:e},backend:o,attrs:{shape:d?[r.batchSize,b,r.inChannels]:[r.batchSize,r.inChannels,b]}}),I=_({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}}),T=no({a:d?S:I,b:d?I:S,transposeA:!d,transposeB:x,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});g=_({inputs:{x:T},backend:o,attrs:{shape:r.outShape}}),m.push(S),m.push(I),m.push(T)}for(let b of m)o.disposeIntermediateTensorInfo(b);return g}function Va({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:l,filterHeight:c,inChannels:u,outWidth:p,outHeight:f,dataFormat:d}=r,h=d==="channelsLast",x=l*c*u,g=f*p,m=[r.batchSize,x,g],y=!0,v=!1,b=[];if(s!=null){let yt=Ba(s.shape,h);yt!=null&&(s=_({inputs:{x:s},backend:o,attrs:{shape:yt}}),b.push(s))}if(n!=null){let yt=Ba(n.shape,h);yt!=null&&(n=_({inputs:{x:n},backend:o,attrs:{shape:yt}}),b.push(n))}let S=_({inputs:{x:t},backend:o,attrs:{shape:[1,x,w.sizeFromShape(t.shape)/x]}});b.push(S);let I=new La(m,r),T=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],E=o.runWebGLProgram(I,[e],"float32",T),R=_({inputs:{x:E},backend:o,attrs:{shape:m}});b.push(E),b.push(R);let F=n!=null,U=s!=null,z=a==="leakyrelu",ft=a?er(a,!0):null,tt=new ln(h?R.shape:S.shape,h?S.shape:R.shape,h?[r.batchSize,g,r.outChannels]:[r.batchSize,r.outChannels,g],y,v,F,ft,U,z),mt=h?[R,S]:[S,R];if(n&&mt.push(n),U&&mt.push(s),z){let yt=o.makeTensorInfo([],"float32",w.createScalarValue(i,"float32"));mt.push(yt),b.push(yt)}let gt=o.runWebGLProgram(tt,mt,"float32"),xt=_({inputs:{x:gt},backend:o,attrs:{shape:r.outShape}});b.push(gt);for(let yt of b)o.disposeIntermediateTensorInfo(yt);return xt}function hk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=o,p=C.convertConv2DDataFormat(l),f=C.computeConv2DInfo(n.shape,s.shape,i,c,a,u,!1,p),d;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type==="SAME"||f.padInfo.type==="VALID"))d=Ua({x:n,filter:s,convInfo:f,backend:r});else if(f.strideWidth<=2&&p==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){let x=new pn(f),g=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];d=r.runWebGLProgram(x,[n,s],"float32",g)}else if($().getBool("WEBGL_CONV_IM2COL"))d=Va({x:n,filter:s,convInfo:f,backend:r});else{let x=new un(f);d=r.runWebGLProgram(x,[n,s],"float32")}let h=_({inputs:{x:d},backend:r,attrs:{shape:f.outShape}});return r.disposeIntermediateTensorInfo(d),h}var aw={kernelName:sd,backendName:"webgl",kernelFunc:hk};var za=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
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
    `}},Wa=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dataFormat==="channelsLast",a=r-1-t.padInfo.top,l=o-1-t.padInfo.left,c=i?1:2,u=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
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
    `}},Ga=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
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
    `}},Ha=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=r-1-t.padInfo.front,c=o-1-t.padInfo.top,u=n-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

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
    `}};function mk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=o,p=C.convertConv2DDataFormat(l),f=C.computeConv2DInfo(n.shape,u,i,1,a,c,!1,p),d=new za(f);return r.runWebGLProgram(d,[n,s],"float32")}var lw={kernelName:id,backendName:"webgl",kernelFunc:mk};var qa=class{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=j(this.outputShape.length);let r=t.filterHeight,o=t.filterWidth,n=r-1-t.padInfo.top,s=o-1-t.padInfo.left;this.userCode=`
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
    `}};function gk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=o,p=C.convertConv2DDataFormat(c),f=C.computeConv2DInfo(i,s.shape,a,1,l,u,!1,p);if($().getBool("WEBGL_PACK")&&p==="channelsLast"){let d=[[f.strideHeight,f.strideWidth]],h=new qa(f);return r.runWebGLProgram(h,[n,s],"float32",d)}else{let d=new Wa(f);return r.runWebGLProgram(d,[n,s],"float32")}}var cw={kernelName:ad,backendName:"webgl",kernelFunc:gk};function xk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,c=C.computeConv3DInfo(n.shape,s.shape,i,l,a),u=new Ma(c);return r.runWebGLProgram(u,[n,s],"float32")}var uw={kernelName:ld,backendName:"webgl",kernelFunc:xk};function yk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,filterShape:l}=o,c=C.computeConv3DInfo(n.shape,l,i,1,a),u=new Ga(c);return r.runWebGLProgram(u,[n,s],"float32")}var pw={kernelName:cd,backendName:"webgl",kernelFunc:yk};function wk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{pad:i,strides:a,inputShape:l}=o,c=C.computeConv3DInfo(l,s.shape,a,1,i),u=new Ha(c);return r.runWebGLProgram(u,[n,s],"float32")}var fw={kernelName:ud,backendName:"webgl",kernelFunc:wk};var bk=we+`
  return cos(x);
`,vk=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${te}
  return result;
`,Ck=L({opSnippet:bk,packedOpSnippet:vk}),dw={kernelName:pd,backendName:"webgl",kernelFunc:Ck};var Sk=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,$k=L({opSnippet:Sk}),hw={kernelName:fd,backendName:"webgl",kernelFunc:$k};var Ka=class{constructor(t,r,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,l,c]=t,[u]=r,[p,f]=o;this.outputShape=[u,p,f,c];let d=n==="bilinear"?1:0,[h,x]=[`${a-1}.0`,`${l-1}.0`],[g,m,y]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[v,b,S]=f>1?[`${(l-1)/(f-1)}`,"(x2-x1) * width_ratio",`x1*${x} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${x}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${v});
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

        float height_scale = ${m};
        float width_scale = ${b};

        float in_y = ${y};
        if( in_y < 0.0 || in_y > ${h} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${S};
        if( in_x < 0.0 || in_x > ${x} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${d} == 1) {
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
    `}};var Ik=e=>{let{inputs:t,backend:r,attrs:o}=e,{image:n,boxes:s,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=o,u=new Ka(n.shape,s.shape,a,l,c);return r.runWebGLProgram(u,[n,s,i],"float32")},mw={kernelName:md,backendName:"webgl",kernelFunc:Ik};var io;(function(e){e.Prod="*",e.Sum="+"})(io||(io={}));var ns=class{constructor(t,r,o,n){this.op=t,this.outputShape=r,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===io.Prod?"1.0":"0.0",a=o?i:`getX(${gw(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],c="",u="";o?(c=n?`end != ${l-1}`:"end != 0",u=n?"end + 1":"end - 1"):(c=n?`end + pow2 < ${l}`:"end >= pow2",u=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${G(s)} coords = getOutputCoords();
        int end = ${xw(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${xw(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${gw(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function gw(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function xw(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function Xa(e,t,r,o,n,s){let i=t.shape.length,a=C.getAxesPermutation([o],i),l=t;a!=null&&(l=J({inputs:{x:t},backend:r,attrs:{perm:a}}));let c=C.getInnerMostAxes(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${o}`);let u=l.shape[c],p=ct({inputs:{x:l},backend:r});for(let f=0;f<=Math.ceil(Math.log2(u))-1;f++){let d=new ns(e,l.shape,!1,s),h=[[f]],x=p;p=r.runWebGLProgram(d,[p],p.dtype,h),r.disposeIntermediateTensorInfo(x)}if(n){let f=new ns(e,l.shape,n,s),d=p;p=r.runWebGLProgram(f,[p],p.dtype),r.disposeIntermediateTensorInfo(d)}if(a!=null){let f=C.getUndoAxesPermutation(a),d=J({inputs:{x:p},backend:r,attrs:{perm:f}});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(l),d}return p}function Tk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return Xa(io.Prod,n,r,s,i,a)}var yw={kernelName:dd,backendName:"webgl",kernelFunc:Tk};function Ek(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return Xa(io.Sum,n,r,s,i,a)}var ww={kernelName:hd,backendName:"webgl",kernelFunc:Ek};function _k(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=r.readSync(n.dataId),c=r.readSync(s.dataId),u=ca(l,c,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,u)}else if(n.shape.length===2){let l=r.bufferSync(n),c=r.bufferSync(s),u=i0(l,c,i,a);return r.makeTensorInfo(u.shape,s.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var bw={kernelName:gd,backendName:"webgl",kernelFunc:_k};var ja=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=r,this.dataFormat=o,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function kk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockSize:s,dataFormat:i}=o,a=n.shape[0],l=i==="NHWC"?n.shape[1]:n.shape[2],c=i==="NHWC"?n.shape[2]:n.shape[3],u=i==="NHWC"?n.shape[3]:n.shape[1],p=l*s,f=c*s,d=u/(s*s),h=i==="NHWC"?[a,p,f,d]:[a,d,p,f],x=new ja(h,s,i);return r.runWebGLProgram(x,[n],n.dtype)}var vw={kernelName:xd,backendName:"webgl",kernelFunc:kk};var fn=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=j(this.outputShape.length);let i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels,c="",u="";o&&(n?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:c=`
          float activation(float x) {
            ${o}
          }
        `,u="result = activation(result);");let p=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

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
        ${u}
        setOutput(result);
      }
    `}};var dn=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=j(this.outputShape.length);let i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,p=t.filterWidth,f=p,d=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<p;m++)d+=`
          vec4 xTexelC${m*2};
          int xTexelC${m*2}Ready;
          vec4 xTexelC${m*2+1};
          int xTexelC${m*2+1}Ready;
          vec4 xC${m};`;d+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let m=0;m<p;m++)d+=`
          xTexelC${m*2} = vec4(0.0);
          xTexelC${m*2}Ready = 0;
          xTexelC${m*2+1} = vec4(0.0);
          xTexelC${m*2+1}Ready = 0;
          xC${m} = vec4(0.0);`;d+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let m=0;m<(f+1)/2;m++){let y=m*2;if(d+=`
          xC = xCCorner + ${y*c};
          `,l===1){if(y<p&&(a%2===1?(d+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }
              `,c===1&&y>0?d+=`
                xC${y} = vec4(xTexelC${y-2}.zw, xTexelC${y}.xy);
                `:d+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${y} = vec4(previous.zw, xTexelC${y}.xy);
                  } else {
                    xC${y} = vec4(0.0, 0.0, xTexelC${y}.xy);
                  }
                  `):d+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xC${y} = xTexelC${y};
                `,y+1<p)){let v=a%2===0?w.nearestLargerEven(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(d+=`
                  xCOffset = xC + imod(pads[1], 2) + ${v};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                    xTexelC${y+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${y+1}.zw = vec2(0.0);
                    }
                    xTexelC${y+1}Ready = 1;
                  }
                  `,c>1?d+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${y+1} = vec4(previous.zw, xTexelC${y+1}.xy);
                    } else {
                     xC${y+1} = vec4(0.0, 0.0, xTexelC${y+1}.xy);
                    }
                    `:d+=`
                    xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.xy);
                    `):v===1?d+=`
                    xC${y+1} = xTexelC${y};
                    `:d+=`
                    xCOffset = xC + ${v};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                      xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${y+1}.zw = vec2(0.0);
                      }
                      xTexelC${y+1}Ready = 1;
                    }

                    xC${y+1} = xTexelC${y+1};
                    `}}else y<p&&(a%2===1?(d+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.0);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
              `,y+1<p&&(d+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${y+1} = vec4(xTexelC${y+1}.xy, final.xy);
                `)):(d+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(
                  xTexelC${y}.xy, xTexelC${y+1}.xy);
              `,y+1<p&&(d+=`
                  xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
                `)));y<p&&(d+=`
            wTexel = getW(r, ${y}, d1, q);
            dotProd += xC${y} * vec4(wTexel.xz, wTexel.xz);
          `,y+1<p&&(d+=`
              wTexel = getW(r, ${y+1}, d1, q);
              dotProd += xC${y+1} * vec4(wTexel.xz, wTexel.xz);
            `))}d+=`
    }
  `,d+=`
      }
    `;let h="",x="";o&&(n?h=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?h=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:h=`vec4 activation(vec4 x) {
          ${o}
        }`,x="result = activation(result);");let g=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${h}

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

        ${d}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${x}
        setOutput(result);
      }
    `}};function Ak(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=o,u=l;u==null&&(u=[1,1]),w.assert(C.eitherStridesOrDilationsAreOne(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let p=C.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!0),f;$().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?f=new dn(p):f=new fn(p);let d=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return r.runWebGLProgram(f,[n,s],"float32",d)}var Cw={kernelName:yd,backendName:"webgl",kernelFunc:Ak};var Ya=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
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
    `}},Qa=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=r-1-t.padInfo.top,a=o-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
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
    `}};function Rk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=o,p=C.computeConv2DInfo(n.shape,u,i,a,l,c,!0),f=new Ya(p);return r.runWebGLProgram(f,[n,s],"float32")}var Sw={kernelName:wd,backendName:"webgl",kernelFunc:Rk};function Nk(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=o,p=C.computeConv2DInfo(u,s.shape,i,a,l,c,!0),f=new Qa(p);return r.runWebGLProgram(f,[n,s],"float32")}var $w={kernelName:bd,backendName:"webgl",kernelFunc:Nk};var Za=class{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function Fk(e){let{inputs:t,backend:r}=e,{x:o}=t,n=[...o.shape,...o.shape],s=w.sizeFromShape(o.shape),i=_({inputs:{x:o},backend:r,attrs:{shape:[s]}}),a=new Za(s),l=r.runWebGLProgram(a,[i],i.dtype),c=_({inputs:{x:l},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(l),c}var Iw={kernelName:vd,backendName:"webgl",kernelFunc:Fk};var Ja=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let{inHeight:r,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:p,left:f}=n;this.userCode=`
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
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${r}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

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
    `}};function Dk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,c=C.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",l),u,p=new Ja(c);u=r.runWebGLProgram(p,[n,s],"float32");let f=_({inputs:{x:u},backend:r,attrs:{shape:c.outShape}});return r.disposeIntermediateTensorInfo(u),f}var Tw={kernelName:Cd,backendName:"webgl",kernelFunc:Dk};function Ok(e){let{inputs:t,backend:r,attrs:o}=e,{equation:n}=o,s=t,{allDims:i,summedDims:a,idDims:l}=C.decodeEinsumEquation(n,s.length);C.checkEinsumDimSizes(i.length,l,s);let{path:c,steps:u}=C.getEinsumComputePath(a,l),p=u.length,f=null,d=i.length,h=[];for(let x=0;x<p;++x){for(let g of u[x]){let{permutationIndices:m,expandDims:y}=C.getEinsumPermutation(d,l[g]),v;C.isIdentityPermutation(m)?v=s[g]:(v=J({inputs:{x:s[g]},backend:r,attrs:{perm:m}}),h.push(v));let b=v.shape.slice();for(let S=0;S<y.length;++S)b.splice(y[S],0,1);w.arraysEqual(v.shape,b)||(v=_({inputs:{x:v},backend:r,attrs:{shape:b}}),h.push(v)),f===null?f=v:(f=rs({inputs:{a:v,b:f},backend:r}),h.push(f))}x<p-1&&(c[x]>=0&&(f=oo({inputs:{x:f},backend:r,attrs:{axis:c[x]-(i.length-d),keepDims:!1}}),h.push(f)),d--)}for(let x of h)x!==f&&r.disposeIntermediateTensorInfo(x);return f}var Ew={kernelName:Sd,backendName:"webgl",kernelFunc:Ok};var Pk="return (x >= 0.0) ? x : (exp(x) - 1.0);",Mk=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Lk=L({opSnippet:Pk,packedOpSnippet:Mk}),_w={kernelName:Hs,backendName:"webgl",kernelFunc:Lk};var Bk="return (b >= 0.0) ? a : a * (b + 1.0);",Uk=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,Vk=e=>{let{inputs:t,backend:r}=e,{dy:o,y:n}=t,s=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ye(Uk,o.shape,n.shape):new pe(Bk,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],o.dtype)},kw={kernelName:$d,backendName:"webgl",kernelFunc:Vk};var zk=`
  return vec4(equal(a, b));
`,Wk="return float(a == b);",Gk=X({opSnippet:Wk,packedOpSnippet:zk,dtype:"bool",cpuKernelImpl:u0}),Aw={kernelName:qs,backendName:"webgl",kernelFunc:Gk};var Hk=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${C.ERF_P};
  float a1 = ${C.ERF_A1};
  float a2 = ${C.ERF_A2};
  float a3 = ${C.ERF_A3};
  float a4 = ${C.ERF_A4};
  float a5 = ${C.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,qk=L({opSnippet:Hk}),Rw={kernelName:Id,backendName:"webgl",kernelFunc:qk};var Kk=we+`
  return exp(x);
`,Xk=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ip=L({opSnippet:Kk,packedOpSnippet:Xk,cpuKernelImpl:p0,dtype:"float32"}),Nw={kernelName:Ks,backendName:"webgl",kernelFunc:Ip};function tl(e){let{inputs:t,attrs:r,backend:o}=e,{dim:n}=r,{input:s}=t,i=s.shape.length,a=s.shape.slice(),l=n;return n<0&&(w.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+n+1),a.splice(l,0,1),_({inputs:{x:s},backend:o,attrs:{shape:a}})}var Fw={kernelName:Td,backendName:"webgl",kernelFunc:tl};var Dw="return exp(x) - 1.0;",jk=L({opSnippet:Dw,packedOpSnippet:Dw,cpuKernelImpl:f0}),Ow={kernelName:Xs,backendName:"webgl",kernelFunc:jk};var ss=class{constructor(t,r,o){this.variableNames=["real","imag"];let n=r[1];this.outputShape=r;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
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
    `}};function el(e,t,r){let o=r.texData.get(e.dataId),n=w.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],i=n/s,a=_({inputs:{x:e},backend:r,attrs:{shape:[i,s]}}),l=a.shape,c=new ss("real",l,t),u=new ss("imag",l,t),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:l},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:l}],f=r.runWebGLProgram(c,p,"float32"),d=r.runWebGLProgram(u,p,"float32"),h=Ht({inputs:{real:f,imag:d},backend:r});r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d);let x=_({inputs:{x:h},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(h),x}function Yk(e){let{inputs:t,backend:r}=e,{input:o}=t;return el(o,!1,r)}var Pw={kernelName:Ed,backendName:"webgl",kernelFunc:Yk};var rl=class{constructor(t,r){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function or(e){let{backend:t,attrs:r}=e,{shape:o,value:n}=r,{dtype:s}=r;if(s=s||w.inferDtype(n),s==="string"){let i=w.getArrayFromDType(s,w.sizeFromShape(o));return i.fill(n),t.makeTensorInfo(o,s,i)}else{let i=new rl(o,n),a=[[n]];return t.runWebGLProgram(i,[],s,a)}}var Mw={kernelName:js,backendName:"webgl",kernelFunc:or};var ol=class{constructor(t){this.variableNames=["Image"],this.outputShape=[];let r=t[2];this.outputShape=t,this.userCode=`
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
    `}};var Lw={kernelName:_d,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,o=t,n=new ol(r.shape);return o.runWebGLProgram(n,[r],r.dtype)}};var Bw="return floor(x);",Qk=L({opSnippet:Bw,packedOpSnippet:Bw,cpuKernelImpl:d0}),Uw={kernelName:Ys,backendName:"webgl",kernelFunc:Qk};var Zk=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,Jk=`
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
`,tA=X({opSnippet:Zk,packedOpSnippet:Jk,dtype:"int32"}),Vw={kernelName:No,backendName:"webgl",kernelFunc:tA};var nl=class{constructor(t){this.variableNames=["A"];let r=rt(),[o,n]=t;this.outputShape=t,this.userCode=`
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
    `}};var sl=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let r=rt(),[o,n]=t;this.outputShape=t,this.userCode=`
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
    `}};var zw={kernelName:Hh,backendName:"webgl",kernelFunc:eA},hn,Tp=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function eA(e){let{inputs:t,backend:r,attrs:o}=e,{pixels:n}=t,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[l,c]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],u=[c,l],p=[c,l,s];if(a||i){let x=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(hn==null||x!==Tp)&&(Tp=x,hn=document.createElement("canvas").getContext("2d",{willReadFrequently:Tp})),hn.canvas.width=l,hn.canvas.height=c,hn.drawImage(n,0,0,l,c),n=hn.canvas}let f=r.makeTensorInfo(u,"int32");r.texData.get(f.dataId).usage=kt.PIXELS,r.gpgpu.uploadPixelDataToTexture(r.getTexture(f.dataId),n);let d=$().getBool("WEBGL_PACK")?new sl(p):new nl(p),h=r.runWebGLProgram(d,[f],"int32");return r.disposeData(f.dataId),h}function rA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:p,dimRoundingMode:f,activation:d,leakyreluAlpha:h}=o,x=C.convertConv2DDataFormat(u),g=C.computeConv2DInfo(n.shape,s.shape,l,p,c,f,!1,x),m,y=[],v=i!=null,b=a!=null,S=d==="leakyrelu",I=()=>{let E=[n,s],R=(F,U)=>{if(U==="NCHW"&&F.shape.length===1&&F.shape[0]!==1){let z=_({inputs:{x:F},backend:r,attrs:{shape:[F.shape[0],1,1]}});return y.push(z),z}return F};if(v&&E.push(R(i,u)),b&&E.push(R(a,u)),S){let F=r.makeTensorInfo([],"float32",w.createScalarValue(h,"float32"));E.push(F),y.push(F)}return E};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))m=Ua({x:n,filter:s,convInfo:g,backend:r,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else if(g.strideWidth<=2&&x==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){let E=d?er(d,!0):null,R=new pn(g,v,E,b,S),F=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],U=I();m=r.runWebGLProgram(R,U,"float32",F)}else if($().getBool("WEBGL_CONV_IM2COL"))m=Va({x:n,filter:s,convInfo:g,backend:r,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else{let E=d?er(d,!1):null,R=new un(g,v,E,b,S),F=I();m=r.runWebGLProgram(R,F,"float32")}let T=_({inputs:{x:m},backend:r,attrs:{shape:g.outShape}});return y.push(m),y.forEach(E=>r.disposeIntermediateTensorInfo(E)),T}var Ww={kernelName:Xh,backendName:"webgl",kernelFunc:rA};function oA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:p,activation:f,leakyreluAlpha:d}=o,h=[],x=u;x==null&&(x=[1,1]),w.assert(C.eitherStridesOrDilationsAreOne(l,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`);let g=C.computeConv2DInfo(n.shape,s.shape,l,x,c,p,!0),m=$().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,y=f?er(f,m):null,v=[n,s],b=i!=null,S=a!=null,I=f==="leakyrelu";if(b&&v.push(i),S&&v.push(a),I){let F=r.makeTensorInfo([],"float32",w.createScalarValue(d,"float32"));v.push(F),h.push(F)}let T;m?T=new dn(g,b,y,S,I):T=new fn(g,b,y,S,I);let E=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],R=r.runWebGLProgram(T,v,"float32",E);return h.forEach(F=>r.disposeIntermediateTensorInfo(F)),R}var Gw={kernelName:jh,backendName:"webgl",kernelFunc:oA};var il=class{constructor(t,r,o,n){this.sliceDim=t,this.strides=r,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=G(o.length),i=`
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
      `}};function nA(e){let{inputs:t,backend:r}=e,{params:o,indices:n}=t,s=n.shape,i=s[s.length-1],a=w.sizeFromShape(o.shape),[l,c,u,p]=C.prepareAndValidate(o,n),f=_({inputs:{x:n},backend:r,attrs:{shape:[c,i]}}),d=_({inputs:{x:o},backend:r,attrs:{shape:[w.sizeFromShape(o.shape)/u,u]}});if(r.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let m=r.readSync(n.dataId),y=r.bufferSync(o),v=h0(m,y,o.dtype,c,i,u,p,o.shape,a);return r.makeTensorInfo(l,o.dtype,v.values)}let h=new il(i,p,[c,u],o.shape),x=r.runWebGLProgram(h,[d,f],d.dtype),g=_({inputs:{x},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(x),g}var Hw={kernelName:Rd,backendName:"webgl",kernelFunc:nA};var al=class{constructor(t,r){this.variableNames=["A","indices"],this.outputShape=r,this.rank=r.length;let o=G(this.rank),n=sA(t,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function sA(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<e.length;n++)n===2?o.push("index"):o.push(`${r[n]}`);return o.join()}function Ep(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,indices:s}=t,{axis:i,batchDims:a}=o,l=w.parseAxisParam(i,n.shape)[0];if($().get("DEBUG")){let y=r.readSync(s.dataId),v=n.shape[l];for(let b=0;b<y.length;++b){let S=y[b];w.assert(S<=v-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${v-1}]`)}}let c=C.segment_util.collectGatherOpShapeInfo(n,s,l,a),u=w.sizeFromShape(s.shape),p=[],f=_({inputs:{x:n},backend:r,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),d=_({inputs:{x:s},backend:r,attrs:{shape:[c.batchSize,u/c.batchSize]}});p.push(f),p.push(d);let h=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(r.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let y=r.bufferSync(d),v=r.bufferSync(f),b=m0(v,y,h);return p.forEach(S=>r.disposeIntermediateTensorInfo(S)),r.makeTensorInfo(c.outputShape,b.dtype,b.values)}let x=new al(f.shape,h),g=r.runWebGLProgram(x,[f,d],f.dtype);p.push(g);let m=_({inputs:{x:g},backend:r,attrs:{shape:c.outputShape}});return p.forEach(y=>r.disposeIntermediateTensorInfo(y)),m}var qw={kernelName:Ad,backendName:"webgl",kernelFunc:Ep};var iA="return float(a > b);",aA=`
  return vec4(greaterThan(a, b));
`,lA=X({opSnippet:iA,packedOpSnippet:aA,cpuKernelImpl:g0,dtype:"bool"}),Kw={kernelName:Qs,backendName:"webgl",kernelFunc:lA};var cA="return float(a >= b);",uA=`
  return vec4(greaterThanEqual(a, b));
`,pA=X({opSnippet:cA,packedOpSnippet:uA,dtype:"bool",cpuKernelImpl:x0}),Xw={kernelName:Zs,backendName:"webgl",kernelFunc:pA};function fA(e){let{inputs:t,backend:r}=e,{input:o}=t;return el(o,!0,r)}var jw={kernelName:Nd,backendName:"webgl",kernelFunc:fA};var dA="return float(!isnan(x) && !isinf(x));",hA=L({opSnippet:dA,dtype:"bool"}),Yw={kernelName:Fd,backendName:"webgl",kernelFunc:hA};var mA="return float(isinf(x));",gA=L({opSnippet:mA,dtype:"bool"}),Qw={kernelName:Dd,backendName:"webgl",kernelFunc:gA};var xA="return float(isnan(x));",yA=L({opSnippet:xA,dtype:"bool"}),Zw={kernelName:Od,backendName:"webgl",kernelFunc:yA};var wA="return float(a < b);",bA=`
  return vec4(lessThan(a, b));
`,vA=X({opSnippet:wA,packedOpSnippet:bA,cpuKernelImpl:y0,dtype:"bool"}),Jw={kernelName:ei,backendName:"webgl",kernelFunc:vA};var CA="return float(a <= b);",SA=`
  return vec4(lessThanEqual(a, b));
`,$A=X({opSnippet:CA,packedOpSnippet:SA,cpuKernelImpl:w0,dtype:"bool"}),tb={kernelName:ri,backendName:"webgl",kernelFunc:$A};function IA(e){let{backend:t,attrs:r}=e,{start:o,stop:n,num:s}=r,i=b0(o,n,s);return t.makeTensorInfo([i.length],"float32",i)}var eb={kernelName:Pd,backendName:"webgl",kernelFunc:IA};var TA=we+`
  return x < 0.0 ? 0./0. : log(x);
`,EA=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,_A=L({opSnippet:TA,packedOpSnippet:EA,cpuKernelImpl:v0}),rb={kernelName:oi,backendName:"webgl",kernelFunc:_A};var kA=we+`
  return log(1.0 + x);
`,AA=L({opSnippet:kA}),ob={kernelName:Md,backendName:"webgl",kernelFunc:AA};var RA="return float(a >= 1.0 && b >= 1.0);",NA=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,FA=X({opSnippet:RA,packedOpSnippet:NA,dtype:"bool"}),nb={kernelName:Ld,backendName:"webgl",kernelFunc:FA};var DA="return float(!(x >= 1.0));",OA=L({opSnippet:DA}),sb={kernelName:Bd,backendName:"webgl",kernelFunc:OA};var PA="return float(a >= 1.0 || b >= 1.0);",MA=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,LA=X({opSnippet:PA,packedOpSnippet:MA,dtype:"bool"}),ib={kernelName:Ud,backendName:"webgl",kernelFunc:LA};var ll=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=r,a=t[3]-1;this.outputShape=t;let l,c=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${c})`:s===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${s}));`,this.userCode=`
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
    `}};var cl=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=r,a=t[3]-1;this.outputShape=t;let l,c=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${c})`:s===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${s}));`,this.userCode=`
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
    `}};var BA=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{depthRadius:s,bias:i,alpha:a,beta:l}=o,c=$().getBool("WEBGL_PACK_NORMALIZATION")?new cl(n.shape,s,i,a,l):new ll(n.shape,s,i,a,l);return r.runWebGLProgram(c,[n],n.dtype)},ab={kernelName:Vd,backendName:"webgl",kernelFunc:BA};var ul=class{constructor(t,r,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=r,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
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
    `}};var UA=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n,y:s,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=o,p=new ul(n.shape,a,l,c,u);return r.runWebGLProgram(p,[n,s,i],n.dtype)},lb={kernelName:zd,backendName:"webgl",kernelFunc:UA};function cb(e,t,r,o){let n=w.sizeFromShape(t),i=w.sizeFromShape(e.shape)/n,a=_({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=ee(a,e.dtype,"max",o),c=_({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),c}function _p(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),c=l,u=C.getAxesPermutation(c,a),p=u!=null,f=r.shouldExecuteOnCPU([n]),d=n;if(p){if(f){let v=r.texData.get(d.dataId).values,b=new Array(a);for(let T=0;T<b.length;T++)b[T]=n.shape[u[T]];let S=eo(v,n.shape,n.dtype,u,b);d=r.makeTensorInfo(b,n.dtype);let I=r.texData.get(d.dataId);I.values=S}else d=$r(n,u,r);c=C.getInnerMostAxes(c.length,a)}C.assertAxesAreInnerMostDims("max",c,a);let[h,x]=C.computeOutAndReduceShapes(d.shape,c),g=h;i&&(g=C.expandShapeToKeepDim(h,l));let m;if(f){let v=r.texData.get(d.dataId).values,b=C0(v,w.sizeFromShape(x),g,n.dtype);m=r.makeTensorInfo(g,n.dtype);let S=r.texData.get(m.dataId);S.values=b}else m=cb(d,x,g,r);return p&&r.disposeIntermediateTensorInfo(d),m}var ub={kernelName:ni,backendName:"webgl",kernelFunc:_p};var VA=an+`
  return max(a, b);
`,zA=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+te+`
  return result;
`,WA=X({opSnippet:VA,packedOpSnippet:zA,cpuKernelImpl:S0}),pb={kernelName:Fo,backendName:"webgl",kernelFunc:WA};function GA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;Ve(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,c=1;w.assert(C.eitherStridesOrDilationsAreOne(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let u=C.computePool2DInfo(n.shape,s,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&w.arraysEqual(u.inShape,u.outShape))return ct({inputs:{x:n},backend:r});let p=new Ee(u,"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}var fb={kernelName:Wd,backendName:"webgl",kernelFunc:GA};function HA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=o,u=[1,1,1],p=C.computePool3DInfo(n.shape,s,i,u,a,c,l),f=new Ir(p,"max",!1);return r.runWebGLProgram(f,[n],n.dtype)}var db={kernelName:Hd,backendName:"webgl",kernelFunc:HA};var pl=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideHeight,o=t.strideWidth,n=t.dilationHeight,s=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=s-1-t.padInfo.top,l=i-1-t.padInfo.left,c=s*i-1;this.userCode=`
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
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},fl=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,p=l-1-t.padInfo.front,f=c-1-t.padInfo.top,d=u-1-t.padInfo.left,h=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${f}, ${d});

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

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${h} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function qA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=o,p=[1,1,1],f=C.computePool3DInfo(i.shape,a,l,p,c,u),d=new Ir(f,"max",!0),h=r.runWebGLProgram(d,[i],i.dtype),x=new fl(f),g=r.runWebGLProgram(x,[n,h],i.dtype);return r.disposeIntermediateTensorInfo(h),g}var hb={kernelName:qd,backendName:"webgl",kernelFunc:qA};function KA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s,output:i}=t,a=s;Ve([s,i],"maxPoolGrad");let{filterSize:l,strides:c,pad:u,dimRoundingMode:p}=o,f=C.computePool2DInfo(a.shape,l,c,1,u,p),d=!0,h=new Ee(f,"max",d),x=r.runWebGLProgram(h,[a],a.dtype),g=new pl(f),m=r.runWebGLProgram(g,[n,x],a.dtype);return r.disposeIntermediateTensorInfo(x),m}var mb={kernelName:Gd,backendName:"webgl",kernelFunc:KA};function gb(e,t,r,o){let n=new Ee(r,"max",!1),s=o.runWebGLProgram(n,[e],"float32");n=new Ee(r,"max",!0,!0,t);let i=o.runWebGLProgram(n,[e],"float32");return[s,i]}var xb={kernelName:Kd,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=t,l=r;w.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let c=[1,1];w.assert(C.eitherStridesOrDilationsAreOne(s,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${c}'`);let u=C.computePool2DInfo(o.shape,n,s,c,i),[p,f]=gb(o,a,u,l);return[p,f]}};function yb(e,t,r,o){let n=w.sizeFromShape(t),i=w.sizeFromShape(e.shape)/n,a=_({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=ee(a,"float32","mean",o),c=_({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),c}var wb={kernelName:Xd,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{keepDims:n,axis:s}=t,i=r,a=o.shape.length,l=w.parseAxisParam(s,o.shape),c=l,u=C.getAxesPermutation(c,a),p=u!=null,f=i.shouldExecuteOnCPU([o]),d=[],h=o;if(p){if(f){let b=i.texData.get(h.dataId).values,S=new Array(a);for(let E=0;E<S.length;E++)S[E]=o.shape[u[E]];let I=eo(b,o.shape,o.dtype,u,S);h=i.makeTensorInfo(S,o.dtype);let T=i.texData.get(h.dataId);T.values=I}else h=$r(o,u,i);d.push(h),c=C.getInnerMostAxes(c.length,a)}C.assertAxesAreInnerMostDims("sum",c,a);let[x,g]=C.computeOutAndReduceShapes(h.shape,c),m=x;n&&(m=C.expandShapeToKeepDim(x,l));let y=yb(h,g,m,i);for(let v of d)i.disposeIntermediateTensorInfo(v);return y}};function XA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),c=l,u=C.getAxesPermutation(c,a),p=n;u!=null&&(p=J({inputs:{x:n},backend:r,attrs:{perm:u}}),c=C.getInnerMostAxes(c.length,n.shape.length)),C.assertAxesAreInnerMostDims("min",c,a);let[f,d]=C.computeOutAndReduceShapes(p.shape,c),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=ee(x,x.dtype,"min",r),m;if(i){let y=C.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),u!=null&&r.disposeIntermediateTensorInfo(p),m}var bb={kernelName:si,backendName:"webgl",kernelFunc:XA};var jA=an+`
  return min(a, b);
`,YA=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+te+`
  return result;
`,QA=X({opSnippet:jA,packedOpSnippet:YA,cpuKernelImpl:$0}),vb={kernelName:ii,backendName:"webgl",kernelFunc:QA};var dl=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=r.map((u,p)=>u[0]+t[p]+u[1]);let n=t.length,s=G(n),i=r.map(u=>u[0]).join(","),a=r.map((u,p)=>u[0]+t[p]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),c=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
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
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}};var hl=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.map((h,x)=>h[0]+t[x]+h[1]);let n=t.length,s=G(n),i=r.map(h=>h[0]).join(","),a=r.map((h,x)=>h[0]+t[x]).join(","),l=lt("rc",n),c=lt("source",n),u=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${c.slice(-2).join()})`,f=o==="reflect"?0:1,d="";if(n===1){let h=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${f};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${f};
        }
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${c.join()}), ${p});
        ${l[n-1]} += 1;
        if(${u}) {
          ${h}
          result[1] = getChannel(getX(${c.join()}), ${p});
        }
      `}else{let h=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${f}) +
                gte * ((end - 1) * 2 - source + ${f});
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${c.join()}), ${p});
        ${l[n-1]} += 1;
        if(${u}) {
          ${h}
          result[1] = getChannel(getX(${c.join()}), ${p});
        }
        rc = outputLoc;
        ${l[n-2]} += 1;
        if(${l[n-2]} < ${this.outputShape[n-2]}) {
          ${h}
          result[2] = getChannel(getX(${c.join()}), ${p});
          ${l[n-1]} += 1;
          if(${u}) {
            ${h}
            result[3] = getChannel(getX(${c.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}};var ZA=({inputs:e,backend:t,attrs:r})=>{let{x:o}=e,{paddings:n,mode:s}=r,i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hl(o.shape,n,s):new dl(o.shape,n,s);return t.runWebGLProgram(i,[o],o.dtype)},Cb={kernelName:jd,backendName:"webgl",kernelFunc:ZA};var JA=`if (b == 0.0) return NAN;
  return mod(a, b);`,tR=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+te+`
  return result;
`,eR=X({opSnippet:JA,packedOpSnippet:tR}),Sb={kernelName:Yd,backendName:"webgl",kernelFunc:eR};var ml=class{constructor(t,r,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,o],this.userCode=`
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
    `}};var rR=`
if (a == b) {
  return 1.0;
};
return a / b;`,oR=`
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
`,kp=X({opSnippet:rR,packedOpSnippet:oR,checkOutOfBounds:!0}),$b={kernelName:Gs,backendName:"webgl",kernelFunc:kp};var Ib="return a - b;",Ap=X({opSnippet:Ib,packedOpSnippet:Ib,supportsComplex:!0,cpuKernelImpl:H0}),Tb={kernelName:Mo,backendName:"webgl",kernelFunc:Ap};function Rp(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{dim:s}=o,i=w.parseAxisParam([s],n.shape),a=_p({inputs:{x:n},backend:r,attrs:{reductionIndices:i,keepDims:!1}}),l=C.expandShapeToKeepDim(a.shape,i),c=_({inputs:{x:a},backend:r,attrs:{shape:l}}),u=Ap({inputs:{a:n,b:c},backend:r}),p=Ip({inputs:{x:u},backend:r}),f=oo({inputs:{x:p},backend:r,attrs:{axis:i,keepDims:!1}}),d=_({inputs:{x:f},backend:r,attrs:{shape:l}}),h=kp({inputs:{a:p,b:d},backend:r});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),h}var Eb={kernelName:Eh,backendName:"webgl",kernelFunc:Rp};function nR(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{numSamples:s,seed:i,normalized:a}=o,l=a?n:Rp({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),c=l.shape[0],u=l.shape[1],p=new ml(c,u,s),f=[[i]],d=r.runWebGLProgram(p,[l],"int32",f);return a||r.disposeIntermediateTensorInfo(l),d}var _b={kernelName:Qd,backendName:"webgl",kernelFunc:nR};var sR=dt+`
  return -x;
`,iR=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function aR(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])){let s=r.texData.get(o.dataId),[i,a]=T0(s.values,o.shape,o.dtype);return r.makeTensorInfo(a,o.dtype,i)}let n;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Gt(o.shape,iR):n=new Et(o.shape,sR),r.runWebGLProgram(n,[o],o.dtype)}var kb={kernelName:Nn,backendName:"webgl",kernelFunc:aR};var lR=Be.nonMaxSuppressionV3Impl;function cR(e){C.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o,c=r.readSync(n.dataId),u=r.readSync(s.dataId),{selectedIndices:p}=lR(c,u,i,a,l);return r.makeTensorInfo([p.length],"int32",new Int32Array(p))}var Ab={kernelName:Zd,backendName:"webgl",kernelFunc:cR};var uR=Be.nonMaxSuppressionV4Impl;function pR(e){C.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=o,u=r.readSync(n.dataId),p=r.readSync(s.dataId),{selectedIndices:f,validOutputs:d}=uR(u,p,i,a,l,c);return[r.makeTensorInfo([f.length],"int32",new Int32Array(f)),r.makeTensorInfo([],"int32",new Int32Array([d]))]}var Rb={kernelName:Jd,backendName:"webgl",kernelFunc:pR};var fR=Be.nonMaxSuppressionV5Impl;function dR(e){C.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=o,u=r.readSync(n.dataId),p=r.readSync(s.dataId),f=i,d=a,h=l,x=c,{selectedIndices:g,selectedScores:m}=fR(u,p,f,d,h,x);return[r.makeTensorInfo([g.length],"int32",new Int32Array(g)),r.makeTensorInfo([m.length],"float32",new Float32Array(m))]}var Nb={kernelName:th,backendName:"webgl",kernelFunc:dR};var gl=class{constructor(t,r,o,n){this.variableNames=["indices"],this.outputShape=[t,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var hR=e=>{let{inputs:t,backend:r,attrs:o}=e,{indices:n}=t,{dtype:s,depth:i,onValue:a,offValue:l}=o,c=w.sizeFromShape(n.shape),u=new gl(c,i,a,l),p=_({inputs:{x:n},backend:r,attrs:{shape:[c]}}),f=r.runWebGLProgram(u,[p],s);r.disposeIntermediateTensorInfo(p);let d=[...n.shape,i],h=_({inputs:{x:f},backend:r,attrs:{shape:d}});return r.disposeIntermediateTensorInfo(f),h},Fb={kernelName:rh,backendName:"webgl",kernelFunc:hR};function is(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="complex64"){let n=rr({inputs:{input:o},backend:r}),s=is({inputs:{x:n},backend:r}),i=so({inputs:{input:o},backend:r}),a=is({inputs:{x:i},backend:r}),l=Ht({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return or({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:r})}var Db={kernelName:yi,backendName:"webgl",kernelFunc:is};function Ob(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=rr({inputs:{input:o},backend:r}),s=Ob({inputs:{x:n},backend:r}),i=so({inputs:{input:o},backend:r}),a=is({inputs:{x:i},backend:r}),l=Ht({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return or({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:r})}var Pb={kernelName:eh,backendName:"webgl",kernelFunc:Ob};function mR(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o;if(t.length===1)return tl({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let s=t[0].shape,i=t[0].dtype;t.forEach(u=>{w.assertShapesMatch(s,u.shape,"All tensors passed to stack must have matching shapes"),w.assert(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=t.map(u=>{let p=tl({inputs:{input:u},backend:r,attrs:{dim:n}});return a.push(p),p}),c=$p({inputs:l,backend:r,attrs:{axis:n}});return a.forEach(u=>r.disposeIntermediateTensorInfo(u)),c}var Mb={kernelName:oh,backendName:"webgl",kernelFunc:mR};var xl=class{constructor(t,r,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((c,u)=>c[0]+t[u]+c[1]);let n=t.length,s=G(n),i=r.map(c=>c[0]).join(","),a=r.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
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
    `}};var yl=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((x,g)=>x[0]+t[g]+x[1]);let n=t.length,s=G(n),i=r.map(x=>x[0]).join(","),a=r.map((x,g)=>x[0]+t[g]).join(","),l=lt("rc",n),c=lt("source",n),u=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${c.slice(-2).join()})`,f=[`${s} rc = outputLoc;`,`${l[n-1]} += 1;
       if(${u}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${l[n-2]} += 1;
       if(${l[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${l[n-1]} += 1;
         if(${u}) {`],d=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let x=0,g=n===1?2:4;x<g;x++)h+=`
        ${f[x]}
        if (${d}) {
          result[${x}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${x}] = getChannel(getX(${c.join()}), ${p});
        }
      `;h+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}};var Np=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{paddings:s,constantValue:i}=o;if(w.sizeFromShape(n.shape)===0){let c=s.map((u,p)=>u[0]+n.shape[p]+u[1]);return or({backend:r,attrs:{shape:c,value:i,dtype:n.dtype}})}let a=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new yl(n.shape,s,i):new xl(n.shape,s,i),l=[[i]];return r.runWebGLProgram(a,[n],n.dtype,l)},Lb={kernelName:nh,backendName:"webgl",kernelFunc:Np};var gR=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,xR=`
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
  `+te+`
  return result;
`,yR=X({opSnippet:gR,packedOpSnippet:xR}),Bb={kernelName:li,backendName:"webgl",kernelFunc:yR};function wR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=[],c=w.parseAxisParam(s,n.shape),u=c,p=C.getAxesPermutation(u,a),f=n;p!=null&&(f=J({inputs:{x:n},backend:r,attrs:{perm:p}}),u=C.getInnerMostAxes(u.length,a),l.push(f)),C.assertAxesAreInnerMostDims("prod",u,a);let d;if(r.shouldExecuteOnCPU([f])){let h=r.texData.get(f.dataId).values,{outVals:x,outShape:g,outDtype:m}=_0(f.shape,f.dtype,h,u);d=r.makeTensorInfo(g,m,x)}else{let[h,x]=C.computeOutAndReduceShapes(f.shape,u),g=w.sizeFromShape(x),m=_({inputs:{x:f},backend:r,attrs:{shape:[-1,g]}}),y=Kr(n.dtype),v=ee(m,y,"prod",r);d=_({inputs:{x:v},backend:r,attrs:{shape:h}}),l.push(m),l.push(v)}if(i){l.push(d);let h=C.expandShapeToKeepDim(d.shape,c);d=_({inputs:{x:d},backend:r,attrs:{shape:h}})}return l.forEach(h=>r.disposeIntermediateTensorInfo(h)),d}var Ub={kernelName:Lc,backendName:"webgl",kernelFunc:wR};function bR(e){let{inputs:t,backend:r,attrs:o}=e,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=t,{outputRaggedRank:a}=o,l=n.map(m=>r.readSync(m.dataId)),c=n.map(m=>m.shape),u=r.readSync(s.dataId),p=r.readSync(i.dataId),[f,d,h]=k0(l,c,u,s.shape,s.dtype,p,i.shape,a),x=f.map(m=>r.makeTensorInfo([m.length],"int32",m)),g=r.makeTensorInfo(h,s.dtype,d);return x.concat([g])}var Vb={kernelName:sh,backendName:"webgl",kernelFunc:bR};function vR(e){let{inputs:t,backend:r}=e,{starts:o,limits:n,deltas:s}=t,i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[c,u]=A0(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=r.makeTensorInfo([c.length],"int32",c),f=r.makeTensorInfo([u.length],o.dtype,u);return[p,f]}var zb={kernelName:ih,backendName:"webgl",kernelFunc:vR};function CR(e){let{inputs:t,backend:r,attrs:o}=e,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=o,c=r.readSync(n.dataId),u=r.readSync(s.dataId),p=r.readSync(i.dataId),f=a.map(g=>r.readSync(g.dataId)),d=a.map(g=>g.shape),[h,x]=R0(c,n.shape,u,s.shape,s.dtype,p,i.shape,f,d,l);return r.makeTensorInfo(h,s.dtype,x)}var Wb={kernelName:ah,backendName:"webgl",kernelFunc:CR};var Fp=e=>{let{backend:t,attrs:r}=e,{start:o,stop:n,step:s,dtype:i}=r,a=N0(o,n,s,i);return t.makeTensorInfo([a.length],i,a)},Gb={kernelName:lh,backendName:"webgl",kernelFunc:Fp};var SR="return 1.0 / x;",$R=L({opSnippet:SR}),Hb={kernelName:ch,backendName:"webgl",kernelFunc:$R};var IR=dt+`
  return (x < 0.0) ? 0.0 : x;
`,TR=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ER=L({opSnippet:IR,packedOpSnippet:TR}),qb={kernelName:ui,backendName:"webgl",kernelFunc:ER};var _R=dt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,kR=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,AR=L({opSnippet:_R,packedOpSnippet:kR}),Kb={kernelName:fi,backendName:"webgl",kernelFunc:AR};var wl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,c]=t;this.outputShape=[i,r,o,c];let u=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/p[0]},
          ${u[1]/p[1]});
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
    `}};var bl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,c]=t;this.outputShape=[i,r,o,c];let u=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/p[0]},
          ${u[1]/p[1]},
          ${u[1]/p[1]});
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
        bool hasNextCol = d < ${c-1};
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
    `}};function RR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,c]=a,u=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new bl(n.shape,l,c,s,i):new wl(n.shape,l,c,s,i);return r.runWebGLProgram(u,[n],"float32")}var Xb={kernelName:fh,backendName:"webgl",kernelFunc:RR};var vl=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],c=[o&&i>1?i-1:i,o&&a>1?a-1:a],u=l[0]/c[0],p=l[1]/c[1],f=1/u,d=1/p,h=Math.ceil(f)*2+2,x=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${p});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${x});

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
    `}};function NR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new vl(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var jb={kernelName:dh,backendName:"webgl",kernelFunc:NR};var Cl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,c]=t;this.outputShape=[i,r,o,c];let u=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",d;s?d="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/p[0]},
          ${u[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var Sl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,c]=t;this.outputShape=[i,r,o,c];let u=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",d;s?d="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/p[0]},
          ${u[1]/p[1]},
          ${u[1]/p[1]});
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
        vec3 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
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
    `}};function FR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,c]=a,u=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Sl(n.shape,l,c,s,i):new Cl(n.shape,l,c,s,i);return r.runWebGLProgram(u,[n],n.dtype)}var Yb={kernelName:uh,backendName:"webgl",kernelFunc:FR};var $l=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],c=[o&&i>1?i-1:i,o&&a>1?a-1:a],u=l[0]/c[0],p=l[1]/c[1],f=1/u,d=1/p,h=Math.ceil(f)*2+2,x=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${p});

        const float invHeightScale = float(${f});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${x});

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
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

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
    `}};function DR(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new $l(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var Qb={kernelName:ph,backendName:"webgl",kernelFunc:DR};var Il=class{constructor(t,r){this.variableNames=["x"];let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=t,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}let n=a=>r.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,s=t.map((a,l)=>n(l)).join(","),i=G(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var Tl=class{constructor(t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=t;let n=lt("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=G(o);o===1?this.userCode=`
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
            result.g = ${c(n.slice())};
          }
          if(${i}) {
            result.b = ${u(n.slice())};
            if(${s}) {
              result.a = ${p(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(h){return f(h)}function c(h){return h[o-1]="("+h[o-1]+" + 1)",f(h)}function u(h){return h[o-2]="("+h[o-2]+" + 1)",f(h)}function p(h){return h[o-1]="("+h[o-1]+" + 1)",h[o-2]="("+h[o-2]+" + 1)",f(h)}function f(h){let x=t.map((y,v)=>d(v,h)),g=x.join(","),m=x.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${m}))`}function d(h,x){return r.indexOf(h)!==-1&&t[h]!==1?`${t[h]} - ${x[h]} - 1`:`${x[h]}`}}};function OR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dims:s}=o,i=n.shape.length,a=w.parseAxisParam(s,n.shape);if(i===0)return ct({inputs:{x:n},backend:r});let l=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tl(n.shape,a):new Il(n.shape,a);return r.runWebGLProgram(l,[n],n.dtype)}var Zb={kernelName:hh,backendName:"webgl",kernelFunc:OR};var El=class{constructor(t,r){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=t[1],n=t[2];this.outputShape=t;let s="";typeof r=="number"?s=`float outputValue = ${r.toFixed(2)};`:s=`
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
    `}};var Jb={kernelName:qh,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:o}=e,{radians:n,fillValue:s,center:i}=t,a=r,l=new El(o.shape,s),[c,u]=C.getImageCenter(i,o.shape[1],o.shape[2]),p=[[c,u,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(l,[o],o.dtype,p)}};var PR=`
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
`,MR=L({opSnippet:PR}),tv={kernelName:mh,backendName:"webgl",kernelFunc:MR};var LR="return inversesqrt(x);",BR=L({opSnippet:LR,cpuKernelImpl:F0}),ev={kernelName:di,backendName:"webgl",kernelFunc:BR};var Tr=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let c=G(s.length),u=G(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,d="";n===1?d="i":n===2&&(d="i, coords[1]");let h=`getUpdates(${d})`,x="";l&&(x="coords[0], coords[1]");let g=`getDefaultValue(${x})`,m=r>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${s});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${r}; j++) {
              int index = round(${f});
              flattenedIndex += index * ${m};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}};var _l=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let c=G(s.length),u=G(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,d="";n===1?d="i":n===2&&(d="i, coords[1]");let h=`getUpdates(${d})`,x="";l&&(x="coords[0], coords[1]");let g=`getDefaultValue(${x})`,m=r>1?"strides[j]":"strides",y=r>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${s});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${r}; j+=2) {
              ivec4 index = round(${f});
              flattenedIndex += index.xz * ${m};
              if (j + 1 < ${r}) {
                flattenedIndex += index.yw * ${y};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${h};
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
          setOutput(mix(${g}, sum, found));
        }
      `}};function UR(e){let{inputs:t,backend:r,attrs:o}=e,{indices:n,updates:s}=t,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:p}=C.calculateShapes(s,n,i),f=[p/c,c];if(p===0)return r.makeTensorInfo(i,n.dtype);let d=_({inputs:{x:n},backend:r,attrs:{shape:[l,a]}}),h=_({inputs:{x:s},backend:r,attrs:{shape:[l,c]}}),x=r.makeTensorInfo([],"float32",new Float32Array([0])),g;$().getBool("WEBGL_PACK")?g=new _l(l,a,d.shape.length,h.shape.length,u,f):g=new Tr(l,a,d.shape.length,h.shape.length,u,f);let m=r.runWebGLProgram(g,[h,d,x],h.dtype),y=_({inputs:{x:m},backend:r,attrs:{shape:i}});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(x),y}var rv={kernelName:gh,backendName:"webgl",kernelFunc:UR};var kl=class{constructor(t,r,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(r+1))}; ++i) { if (left >= right) break;`,a=$().getNumber("WEBGL_VERSION")===2?s:i,l=n==="left"?"<":"<=";this.userCode=`
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
     `}};function VR(e){let{inputs:t,backend:r,attrs:o}=e,{sortedSequence:n,values:s}=t,{side:i}=o,a=new kl(n.shape[0],n.shape[1],s.shape[1],i),l=[[n.shape[1]]];return r.runWebGLProgram(a,[n,s],"int32",l)}var ov={kernelName:yh,backendName:"webgl",kernelFunc:VR};var Al=class{constructor(t,r,o){this.variableNames=["c","a","b"],this.outputShape=r;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<r.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);n=l.join(),s=c.join()}let i=G(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function zR(e){let{inputs:t,backend:r}=e,{condition:o,t:n,e:s}=t,i=new Al(o.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(i,[o,n,s],Nt(n.dtype,s.dtype))}var nv={kernelName:wh,backendName:"webgl",kernelFunc:zR};var WR=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${C.SELU_SCALEALPHA};
  float scale = ${C.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,GR=L({opSnippet:WR}),sv={kernelName:bh,backendName:"webgl",kernelFunc:GR};var HR=we+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,qR=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,KR=L({opSnippet:HR,packedOpSnippet:qR,cpuKernelImpl:O0}),iv={kernelName:Oo,backendName:"webgl",kernelFunc:KR};var XR=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,jR=L({opSnippet:XR}),av={kernelName:Sh,backendName:"webgl",kernelFunc:jR};var YR=we+`
  return sin(x);
`,QR=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${te}
  return result;
`,ZR=L({opSnippet:YR,packedOpSnippet:QR}),lv={kernelName:vh,backendName:"webgl",kernelFunc:ZR};var JR=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,tN=L({opSnippet:JR}),cv={kernelName:Ch,backendName:"webgl",kernelFunc:tN};var eN=`
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
`,rN=L({opSnippet:eN}),uv={kernelName:$h,backendName:"webgl",kernelFunc:rN};var oN=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,paddings:i}=o;w.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((m,y)=>m*y),l=[[0,0]];l.push(...i);for(let m=1+s.length;m<n.shape.length;++m)l.push([0,0]);let c=[],u=Np({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),p=C.getReshaped(u.shape,s,a,!1),f=C.getPermuted(p.length,s.length,!1),d=C.getReshapedPermuted(u.shape,s,a,!1),h=_({inputs:{x:u},backend:r,attrs:{shape:p}}),x=J({inputs:{x:h},backend:r,attrs:{perm:f}}),g=_({inputs:{x},backend:r,attrs:{shape:d}});return c.push(u),c.push(h),c.push(x),c.forEach(m=>r.disposeIntermediateTensorInfo(m)),g},pv={kernelName:Ih,backendName:"webgl",kernelFunc:oN};function nN(e){let{inputs:t,backend:r}=e,{indices:o,values:n,denseShape:s,defaultValue:i}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=r.readSync(o.dataId),l=r.readSync(n.dataId),c=r.readSync(s.dataId),u=r.readSync(i.dataId)[0],[p,f,d,h,x]=M0(a,o.shape,o.dtype,l,n.dtype,c,u);return[r.makeTensorInfo(f,o.dtype,p),r.makeTensorInfo([f[0]],n.dtype,d),r.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(g=>Number(g)))),r.makeTensorInfo([x.length],o.dtype,new Int32Array(x))]}var fv={kernelName:_h,backendName:"webgl",kernelFunc:nN};function sN(e){let{inputs:t,backend:r}=e,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(r.readSync(n.dataId)),a=r.readSync(o.dataId),l=Array.from(r.readSync(s.dataId)),[c,u,p]=L0(a,o.shape,o.dtype,i,l);return[r.makeTensorInfo(u,o.dtype,c),r.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var dv={kernelName:kh,backendName:"webgl",kernelFunc:sN};function iN(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[c,u]=pa(i,o.shape,o.dtype,a,l,!0);return r.makeTensorInfo(u,o.dtype,c)}var hv={kernelName:Ah,backendName:"webgl",kernelFunc:iN};function aN(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[c,u]=pa(i,o.shape,o.dtype,a,l);return r.makeTensorInfo(u,o.dtype,c)}var mv={kernelName:Rh,backendName:"webgl",kernelFunc:aN};function lN(e){let{inputs:t,backend:r,attrs:o}=e,{sparseIndices:n,sparseValues:s,defaultValue:i}=t,{outputShape:a}=o,{sliceRank:l,numUpdates:c,sliceSize:u,strides:p,outputSize:f}=C.calculateShapes(s,n,a),d=!1;if(s.dtype==="string"){let m=r.bufferSync(n),y=r.bufferSync(s),v=w.decodeString(r.readSync(i.dataId)[0]),b=D0(m,y,a,f,u,c,l,p,v,d);return r.makeTensorInfo(a,b.dtype,b.values)}let h=new Tr(c,l,n.shape.length,s.shape.length,p,[f,1],d),x=r.runWebGLProgram(h,[s,n,i],s.dtype),g=_({inputs:{x},backend:r,attrs:{shape:a}});return r.disposeIntermediateTensorInfo(x),g}var gv={kernelName:Nh,backendName:"webgl",kernelFunc:lN};function cN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{numOrSizeSplits:s,axis:i}=o,a=w.parseAxisParam(i,n.shape)[0],l=C.prepareSplitSize(n,s,a),c=n.shape.length,u=new Array(c).fill(0),p=n.shape.slice();return l.map(f=>{let d=[...p];d[a]=f;let h=_e({inputs:{x:n},backend:r,attrs:{begin:u,size:d}});return u[a]+=f,h})}var xv={kernelName:Th,backendName:"webgl",kernelFunc:cN};var yv="return sqrt(x);",uN=L({opSnippet:yv,packedOpSnippet:yv,cpuKernelImpl:B0}),wv={kernelName:Po,backendName:"webgl",kernelFunc:uN};var pN="return x * x;",fN=L({opSnippet:pN}),bv={kernelName:Fh,backendName:"webgl",kernelFunc:fN};var vv="return (a - b) * (a - b);",dN=X({opSnippet:vv,packedOpSnippet:vv}),Cv={kernelName:mi,backendName:"webgl",kernelFunc:dN};function hN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=r.readSync(n.dataId),i=C.fromUint8ToStringArray(s),a=U0(i,"string",o);return r.makeTensorInfo(n.shape,"string",a)}var Sv={kernelName:gi,backendName:"webgl",kernelFunc:hN};function mN({inputs:e,attrs:t,backend:r}){let{x:o}=e,n=dt+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new Et(o.shape,n);return r.runWebGLProgram(s,[o],o.dtype)}var $v={kernelName:wi,backendName:"webgl",kernelFunc:mN};var Rl=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=G(o.length),i=G(o.length),a="";if(n===1)a="coords * strides + begin";else{let l=0;a=o.map((c,u)=>(l++,o.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${r});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function gN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:p,shrinkAxisMask:f}=o,{finalShapeSparse:d,finalShape:h,isIdentity:x,sliceDim0:g,isSimpleSlice:m,begin:y,end:v,strides:b}=zt.sliceInfo(n.shape,s,i,a,l,c,u,p,f),S;if(x)S=_({inputs:{x:n},backend:r,attrs:{shape:h}});else if(g||m){w.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let T=zt.computeOutShape(y,v,b),E=_e({inputs:{x:n},backend:r,attrs:{begin:y,size:T}});S=_({inputs:{x:E},backend:r,attrs:{shape:h}}),r.disposeIntermediateTensorInfo(E)}else if(r.shouldExecuteOnCPU([n])){let E=r.readSync(n.dataId),R=Y(n.shape,n.dtype,E),F=V0(d,R,b,y);S=r.makeTensorInfo(h,n.dtype,F.values)}else{let E=new Rl(y,b,d);S=r.runWebGLProgram(E,[n],n.dtype)}let I=_({inputs:{x:S},backend:r,attrs:{shape:h}});return r.disposeIntermediateTensorInfo(S),I}var Iv={kernelName:Dh,backendName:"webgl",kernelFunc:gN};function xN(e){let{inputs:t,backend:r,attrs:o}=e,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=o,{data:u,dataSplits:p}=t,f=r.readSync(u.dataId),d=r.readSync(p.dataId),[h,x]=z0(f,d,n,s,i,a,l,c);return[r.makeTensorInfo([h.length],"string",h),r.makeTensorInfo(p.shape,"int32",x)]}var Tv={kernelName:Oh,backendName:"webgl",kernelFunc:xN};function yN(e){let{inputs:t,backend:r,attrs:o}=e,{skipEmpty:n}=o,{input:s,delimiter:i}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=r.readSync(s.dataId),l=r.readSync(i.dataId)[0],[c,u,p]=W0(a,l,n),f=u.length;return[r.makeTensorInfo([f,2],"int32",c),r.makeTensorInfo([f],"string",u),r.makeTensorInfo([2],"int32",new Int32Array(p))]}var Ev={kernelName:Ph,backendName:"webgl",kernelFunc:yN};function wN(e){let{inputs:t,backend:r,attrs:o}=e,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=r.readSync(s.dataId),a=G0(i,n);return r.makeTensorInfo(s.shape,"int32",a)}var _v={kernelName:Mh,backendName:"webgl",kernelFunc:wN};var bN="return tan(x);",vN=L({opSnippet:bN}),kv={kernelName:Lh,backendName:"webgl",kernelFunc:vN};var CN=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,SN=L({opSnippet:CN}),Av={kernelName:Bh,backendName:"webgl",kernelFunc:SN};function $N(e){let{inputs:t,backend:r,attrs:o}=e,{tensor:n,indices:s,updates:i}=t,{}=o,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:p}=C.calculateShapes(i,s,n.shape),f=[p/c,c];if(p===0)return r.makeTensorInfo(n.shape,s.dtype);let d=_({inputs:{x:s},backend:r,attrs:{shape:[l,a]}}),h=_({inputs:{x:i},backend:r,attrs:{shape:[l,c]}}),x=_({inputs:{x:n},backend:r,attrs:{shape:f}}),g=new Tr(l,a,d.shape.length,h.shape.length,u,f,!1,!0),m=r.runWebGLProgram(g,[h,d,x],x.dtype),y=_({inputs:{x:m},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(m),y}var Rv={kernelName:xh,backendName:"webgl",kernelFunc:$N};var Nl=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[i]*r[i];this.outputShape=o,this.rank=o.length;let n=G(this.rank),s=IN(t);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function IN(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<e.length;n++)o.push(`imod(${r[n]}, ${e[n]})`);return o.join()}function Dp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let l=r.readSync(n.dataId),c=n.dtype==="string"?l.map(f=>w.decodeString(f)):l,u=Y(n.shape,n.dtype,c),p=q0(u,s);return r.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new Nl(n.shape,s);return r.runWebGLProgram(i,[n],n.dtype)}var Nv={kernelName:xi,backendName:"webgl",kernelFunc:Dp};var Fl=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}},Dl=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}};function ao(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function Fv(e){let t=1;for(;t<e;)t*=2;return t}function TN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{k:s,sorted:i}=o,a=$().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=$().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=n.shape,u=c[c.length-1];if(r.shouldExecuteOnCPU([n])||u<a||s>l){let F=r.readSync(n.dataId),[U,z]=K0(F,c,n.dtype,s,i);return[r.makeTensorInfo(U.shape,U.dtype,U.values),r.makeTensorInfo(z.shape,z.dtype,z.values)]}if(s===0)return c[c.length-1]=0,[r.makeTensorInfo(c,n.dtype,[]),r.makeTensorInfo(c,"int32",[])];if(u===1)return[n,or({attrs:{shape:c,dtype:"int32",value:0},backend:r})];let p=r.texData.get(n.dataId),f=p!==null&&p.isPacked,d=f?r.unpackTensor(n):n,x=w.sizeFromShape(c)/u,g=_({inputs:{x:d},attrs:{shape:[x,u]},backend:r});f&&ao(r,d);let m=Fv(s),y=Fv(u),v=null,b=()=>v===null?[g,g]:[g,v],S=(F,U,z)=>{let ft=b(),tt=new Fl(z),gt=[[u],[v===null?1:0],[Number.NEGATIVE_INFINITY],[F],[U]],xt=v;v=r.runWebGLProgram(tt,ft,"int32",gt),ao(r,xt)};for(let F=1;F<m;F*=2){let U=F*2;for(let z=F;z>=1;z/=2)S(U,z,[x,y])}for(let F=y;F>m;F/=2){let U=b(),z=new Dl([x,F/2]),tt=[[u],[v===null?1:0],[m]],mt=v;v=r.runWebGLProgram(z,U,"int32",tt),ao(r,mt);let gt=m/2,xt=gt*2;for(let yt=gt;yt>=1;yt/=2)S(xt,yt,v.shape)}let I=v;v=_e({inputs:{x:v},backend:r,attrs:{begin:0,size:[x,s]}}),ao(r,I);let T=Ep({inputs:{x:g,indices:v},backend:r,attrs:{axis:1,batchDims:1}});ao(r,g);let E=c.slice(0,-1);E.push(s),I=v,v=_({inputs:{x:v},attrs:{shape:E},backend:r}),ao(r,I);let R=T;return T=_({inputs:{x:T},attrs:{shape:E},backend:r}),ao(r,R),[T,v]}var Dv={kernelName:Uh,backendName:"webgl",kernelFunc:TN};var Ol=class{constructor(t,r,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,l;switch(n){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
        `}};function EN(e){let{inputs:t,backend:r,attrs:o}=e,{image:n,transforms:s}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=o,[u,p,f,d]=n.shape,[h,x]=c??[p,f],g=[u,h,x,d],m=new Ol(p,f,i,a,l,g);return r.runWebGLProgram(m,[n,s],"float32")}var Ov={kernelName:Vh,backendName:"webgl",kernelFunc:EN};function _N(e){let{inputs:t,attrs:r,backend:o}=e,{axis:n}=r,{x:s}=t;Ve(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:l,indices:c}=X0(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([c.length],"int32",c)]}var Pv={kernelName:zh,backendName:"webgl",kernelFunc:_N};function kN(e){let{inputs:t,backend:r,attrs:o}=e,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,l=n.shape[s],c=new Array(a-1),u=0;for(let x=0;x<a;x++)x!==s&&(c[u++]=i.shape[x]);let p=[],f=new Array(a).fill(0),d=i.shape.slice();d[s]=1;let h=new Array(l);for(let x=0;x<h.length;x++){f[s]=x;let g=_e({inputs:{x:i},backend:r,attrs:{begin:f,size:d}}),m=_({inputs:{x:g},backend:r,attrs:{shape:c}});h[x]=m,p.push(g)}return p.forEach(x=>r.disposeIntermediateTensorInfo(x)),h}var Mv={kernelName:Wh,backendName:"webgl",kernelFunc:kN};var Pl=class{constructor(t,r){this.variableNames=["x","segmentIds"];let o=t.windowSize,n=t.batchSize,s=t.inSize,i=t.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let l="0.0",c="sumValue",u=Math.floor(o/4)*4,p=o%4,f=`
        sumValue += dot(values, segFilter);
    `,d="";s%o>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${h}
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

        for (int i = 0; i < ${u}; i += 4) {
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

        int inIdx = inOffset + ${u};
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
        setOutput(${c});
      }
    `}};function AN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,segmentIds:s}=t,{numSegments:i}=o,a=n.shape.length,l=[],c=0,u=C.getAxesPermutation([c],a),p=n;u!=null&&(p=J({inputs:{x:n},backend:r,attrs:{perm:u}}),l.push(p),c=C.getInnerMostAxes(1,a)[0]);let f=C.segment_util.computeOutShape(p.shape,c,i),d=w.sizeFromShape([p.shape[c]]),h=_({inputs:{x:p},backend:r,attrs:{shape:[-1,d]}});l.push(h);let x=Kr(n.dtype),g=(b,S,I,T,E)=>{let R=b.shape[0],F=b.shape[1],U=C.segment_util.segOpComputeOptimalWindowSize(F,E),z={windowSize:U,inSize:F,batchSize:R,numSegments:E},ft=new Pl(z,S),tt=r.compileAndRun(ft,[b,I],T);if(l.push(tt),tt.shape[1]===E)return tt;let mt=Fp({backend:r,attrs:{start:0,stop:E,step:1,dtype:"float32"}}),gt=Dp({inputs:{x:mt},backend:r,attrs:{reps:[F/U]}});return l.push(mt),l.push(gt),g(tt,S,gt,T,E)},m=g(h,"unsortedSegmentSum",s,x,i),y=_({inputs:{x:m},backend:r,attrs:{shape:f}}),v=y;if(u!=null){l.push(y);let b=C.getUndoAxesPermutation(u);v=J({inputs:{x:v},backend:r,attrs:{perm:b}})}return l.forEach(b=>r.disposeIntermediateTensorInfo(b)),v}var Lv={kernelName:Gh,backendName:"webgl",kernelFunc:AN};var RN=[vy,Sy,$y,Iy,Ey,_y,ky,Ay,Fy,Dy,Oy,Py,My,Ly,By,Uy,Vy,zy,Wy,Gy,Hy,Ky,Xy,jy,Jy,ew,rw,py,nw,iw,aw,lw,cw,uw,pw,fw,dw,hw,mw,yw,ww,bw,vw,Cw,Sw,$w,Iw,Tw,Ew,_w,kw,Aw,Rw,Nw,Fw,Ow,Pw,Mw,Lw,Uw,Vw,zw,Ww,Gw,Hw,qw,Kw,Xw,uy,jw,sw,Yw,Qw,Zw,fy,Jw,tb,eb,rb,ob,nb,sb,ib,ab,lb,ub,pb,fb,db,hb,mb,xb,wb,bb,vb,Cb,Sb,_b,my,kb,Ab,Rb,Nb,Yy,Fb,Pb,Mb,Lb,Bb,dy,Ub,Vb,zb,Wb,Gb,Qy,$b,Hb,qb,Kb,xy,Xb,jb,Yb,Qb,Zb,Jb,tv,ev,rv,ov,nv,sv,iv,av,lv,cv,qy,Eb,uv,pv,fv,dv,hv,mv,gv,xv,wv,bv,Cv,Sv,$v,Iv,Tv,Ev,_v,Tb,wy,kv,Av,Rv,Nv,Dv,Ov,by,Pv,Mv,Lv,Db];for(let e of RN)Qh(e);function nr(e,t){let r=0;if(t===void 0)for(let o of e)(o=+o)&&(r+=o);else{let o=-1;for(let n of e)(n=+t(n,++o,e))&&(r+=n)}return r}var NN={value:()=>{}};function Uv(){for(var e=0,t=arguments.length,r={},o;e<t;++e){if(!(o=arguments[e]+"")||o in r||/[\s.]/.test(o))throw new Error("illegal type: "+o);r[o]=[]}return new Ml(r)}function Ml(e){this._=e}function FN(e,t){return e.trim().split(/^|\s+/).map(function(r){var o="",n=r.indexOf(".");if(n>=0&&(o=r.slice(n+1),r=r.slice(0,n)),r&&!t.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:o}})}Ml.prototype=Uv.prototype={constructor:Ml,on:function(e,t){var r=this._,o=FN(e+"",r),n,s=-1,i=o.length;if(arguments.length<2){for(;++s<i;)if((n=(e=o[s]).type)&&(n=DN(r[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<i;)if(n=(e=o[s]).type)r[n]=Bv(r[n],e.name,t);else if(t==null)for(n in r)r[n]=Bv(r[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var r in t)e[r]=t[r].slice();return new Ml(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var r=new Array(n),o=0,n,s;o<n;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],o=0,n=s.length;o<n;++o)s[o].value.apply(t,r)},apply:function(e,t,r){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,s=o.length;n<s;++n)o[n].value.apply(t,r)}};function DN(e,t){for(var r=0,o=e.length,n;r<o;++r)if((n=e[r]).name===t)return n.value}function Bv(e,t,r){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=NN,e=e.slice(0,o).concat(e.slice(o+1));break}return r!=null&&e.push({name:t,value:r}),e}var lo=Uv;var Ll="http://www.w3.org/1999/xhtml",Op={svg:"http://www.w3.org/2000/svg",xhtml:Ll,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function sr(e){var t=e+="",r=t.indexOf(":");return r>=0&&(t=e.slice(0,r))!=="xmlns"&&(e=e.slice(r+1)),Op.hasOwnProperty(t)?{space:Op[t],local:e}:e}function ON(e){return function(){var t=this.ownerDocument,r=this.namespaceURI;return r===Ll&&t.documentElement.namespaceURI===Ll?t.createElement(e):t.createElementNS(r,e)}}function PN(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Bl(e){var t=sr(e);return(t.local?PN:ON)(t)}function MN(){}function co(e){return e==null?MN:function(){return this.querySelector(e)}}function Vv(e){typeof e!="function"&&(e=co(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=new Array(i),l,c,u=0;u<i;++u)(l=s[u])&&(c=e.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new ht(o,this._parents)}function Pp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function LN(){return[]}function as(e){return e==null?LN:function(){return this.querySelectorAll(e)}}function BN(e){return function(){return Pp(e.apply(this,arguments))}}function zv(e){typeof e=="function"?e=BN(e):e=as(e);for(var t=this._groups,r=t.length,o=[],n=[],s=0;s<r;++s)for(var i=t[s],a=i.length,l,c=0;c<a;++c)(l=i[c])&&(o.push(e.call(l,l.__data__,c,i)),n.push(l));return new ht(o,n)}function ls(e){return function(){return this.matches(e)}}function Ul(e){return function(t){return t.matches(e)}}var UN=Array.prototype.find;function VN(e){return function(){return UN.call(this.children,e)}}function zN(){return this.firstElementChild}function Wv(e){return this.select(e==null?zN:VN(typeof e=="function"?e:Ul(e)))}var WN=Array.prototype.filter;function GN(){return Array.from(this.children)}function HN(e){return function(){return WN.call(this.children,e)}}function Gv(e){return this.selectAll(e==null?GN:HN(typeof e=="function"?e:Ul(e)))}function Hv(e){typeof e!="function"&&(e=ls(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,c=0;c<i;++c)(l=s[c])&&e.call(l,l.__data__,c,s)&&a.push(l);return new ht(o,this._parents)}function Vl(e){return new Array(e.length)}function qv(){return new ht(this._enter||this._groups.map(Vl),this._parents)}function cs(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}cs.prototype={constructor:cs,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Kv(e){return function(){return e}}function qN(e,t,r,o,n,s){for(var i=0,a,l=t.length,c=s.length;i<c;++i)(a=t[i])?(a.__data__=s[i],o[i]=a):r[i]=new cs(e,s[i]);for(;i<l;++i)(a=t[i])&&(n[i]=a)}function KN(e,t,r,o,n,s,i){var a,l,c=new Map,u=t.length,p=s.length,f=new Array(u),d;for(a=0;a<u;++a)(l=t[a])&&(f[a]=d=i.call(l,l.__data__,a,t)+"",c.has(d)?n[a]=l:c.set(d,l));for(a=0;a<p;++a)d=i.call(e,s[a],a,s)+"",(l=c.get(d))?(o[a]=l,l.__data__=s[a],c.delete(d)):r[a]=new cs(e,s[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(f[a])===l&&(n[a]=l)}function XN(e){return e.__data__}function Xv(e,t){if(!arguments.length)return Array.from(this,XN);var r=t?KN:qN,o=this._parents,n=this._groups;typeof e!="function"&&(e=Kv(e));for(var s=n.length,i=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=o[c],p=n[c],f=p.length,d=jN(e.call(u,u&&u.__data__,c,o)),h=d.length,x=a[c]=new Array(h),g=i[c]=new Array(h),m=l[c]=new Array(f);r(u,p,x,g,m,d,t);for(var y=0,v=0,b,S;y<h;++y)if(b=x[y]){for(y>=v&&(v=y+1);!(S=g[v])&&++v<h;);b._next=S||null}}return i=new ht(i,o),i._enter=a,i._exit=l,i}function jN(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function jv(){return new ht(this._exit||this._groups.map(Vl),this._parents)}function Yv(e,t,r){var o=this.enter(),n=this,s=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),r==null?s.remove():r(s),o&&n?o.merge(n).order():n}function Qv(e){for(var t=e.selection?e.selection():e,r=this._groups,o=t._groups,n=r.length,s=o.length,i=Math.min(n,s),a=new Array(n),l=0;l<i;++l)for(var c=r[l],u=o[l],p=c.length,f=a[l]=new Array(p),d,h=0;h<p;++h)(d=c[h]||u[h])&&(f[h]=d);for(;l<n;++l)a[l]=r[l];return new ht(a,this._parents)}function Zv(){for(var e=this._groups,t=-1,r=e.length;++t<r;)for(var o=e[t],n=o.length-1,s=o[n],i;--n>=0;)(i=o[n])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Jv(e){e||(e=YN);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var r=this._groups,o=r.length,n=new Array(o),s=0;s<o;++s){for(var i=r[s],a=i.length,l=n[s]=new Array(a),c,u=0;u<a;++u)(c=i[u])&&(l[u]=c);l.sort(t)}return new ht(n,this._parents).order()}function YN(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function t1(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function e1(){return Array.from(this)}function r1(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length;n<s;++n){var i=o[n];if(i)return i}return null}function o1(){let e=0;for(let t of this)++e;return e}function n1(){return!this.node()}function s1(e){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var n=t[r],s=0,i=n.length,a;s<i;++s)(a=n[s])&&e.call(a,a.__data__,s,n);return this}function QN(e){return function(){this.removeAttribute(e)}}function ZN(e){return function(){this.removeAttributeNS(e.space,e.local)}}function JN(e,t){return function(){this.setAttribute(e,t)}}function tF(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function eF(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttribute(e):this.setAttribute(e,r)}}function rF(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,r)}}function i1(e,t){var r=sr(e);if(arguments.length<2){var o=this.node();return r.local?o.getAttributeNS(r.space,r.local):o.getAttribute(r)}return this.each((t==null?r.local?ZN:QN:typeof t=="function"?r.local?rF:eF:r.local?tF:JN)(r,t))}function zl(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function oF(e){return function(){this.style.removeProperty(e)}}function nF(e,t,r){return function(){this.style.setProperty(e,t,r)}}function sF(e,t,r){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,r)}}function a1(e,t,r){return arguments.length>1?this.each((t==null?oF:typeof t=="function"?sF:nF)(e,t,r??"")):Er(this.node(),e)}function Er(e,t){return e.style.getPropertyValue(t)||zl(e).getComputedStyle(e,null).getPropertyValue(t)}function iF(e){return function(){delete this[e]}}function aF(e,t){return function(){this[e]=t}}function lF(e,t){return function(){var r=t.apply(this,arguments);r==null?delete this[e]:this[e]=r}}function l1(e,t){return arguments.length>1?this.each((t==null?iF:typeof t=="function"?lF:aF)(e,t)):this.node()[e]}function c1(e){return e.trim().split(/^|\s+/)}function Mp(e){return e.classList||new u1(e)}function u1(e){this._node=e,this._names=c1(e.getAttribute("class")||"")}u1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function p1(e,t){for(var r=Mp(e),o=-1,n=t.length;++o<n;)r.add(t[o])}function f1(e,t){for(var r=Mp(e),o=-1,n=t.length;++o<n;)r.remove(t[o])}function cF(e){return function(){p1(this,e)}}function uF(e){return function(){f1(this,e)}}function pF(e,t){return function(){(t.apply(this,arguments)?p1:f1)(this,e)}}function d1(e,t){var r=c1(e+"");if(arguments.length<2){for(var o=Mp(this.node()),n=-1,s=r.length;++n<s;)if(!o.contains(r[n]))return!1;return!0}return this.each((typeof t=="function"?pF:t?cF:uF)(r,t))}function fF(){this.textContent=""}function dF(e){return function(){this.textContent=e}}function hF(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function h1(e){return arguments.length?this.each(e==null?fF:(typeof e=="function"?hF:dF)(e)):this.node().textContent}function mF(){this.innerHTML=""}function gF(e){return function(){this.innerHTML=e}}function xF(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function m1(e){return arguments.length?this.each(e==null?mF:(typeof e=="function"?xF:gF)(e)):this.node().innerHTML}function yF(){this.nextSibling&&this.parentNode.appendChild(this)}function g1(){return this.each(yF)}function wF(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function x1(){return this.each(wF)}function y1(e){var t=typeof e=="function"?e:Bl(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function bF(){return null}function w1(e,t){var r=typeof e=="function"?e:Bl(e),o=t==null?bF:typeof t=="function"?t:co(t);return this.select(function(){return this.insertBefore(r.apply(this,arguments),o.apply(this,arguments)||null)})}function vF(){var e=this.parentNode;e&&e.removeChild(this)}function b1(){return this.each(vF)}function CF(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function SF(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function v1(e){return this.select(e?SF:CF)}function C1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function $F(e){return function(t){e.call(this,t,this.__data__)}}function IF(e){return e.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{type:t,name:r}})}function TF(e){return function(){var t=this.__on;if(t){for(var r=0,o=-1,n=t.length,s;r<n;++r)s=t[r],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++o]=s;++o?t.length=o:delete this.__on}}}function EF(e,t,r){return function(){var o=this.__on,n,s=$F(t);if(o){for(var i=0,a=o.length;i<a;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=s,n.options=r),n.value=t;return}}this.addEventListener(e.type,s,r),n={type:e.type,name:e.name,value:t,listener:s,options:r},o?o.push(n):this.__on=[n]}}function S1(e,t,r){var o=IF(e+""),n,s=o.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(n=0,u=a[l];n<s;++n)if((i=o[n]).type===u.type&&i.name===u.name)return u.value}return}for(a=t?EF:TF,n=0;n<s;++n)this.each(a(o[n],t,r));return this}function $1(e,t,r){var o=zl(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,r):(n=o.document.createEvent("Event"),r?(n.initEvent(t,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function _F(e,t){return function(){return $1(this,e,t)}}function kF(e,t){return function(){return $1(this,e,t.apply(this,arguments))}}function I1(e,t){return this.each((typeof t=="function"?kF:_F)(e,t))}function*T1(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length,i;n<s;++n)(i=o[n])&&(yield i)}var Lp=[null];function ht(e,t){this._groups=e,this._parents=t}function E1(){return new ht([[document.documentElement]],Lp)}function AF(){return this}ht.prototype=E1.prototype={constructor:ht,select:Vv,selectAll:zv,selectChild:Wv,selectChildren:Gv,filter:Hv,data:Xv,enter:qv,exit:jv,join:Yv,merge:Qv,selection:AF,order:Zv,sort:Jv,call:t1,nodes:e1,node:r1,size:o1,empty:n1,each:s1,attr:i1,style:a1,property:l1,classed:d1,text:h1,html:m1,raise:g1,lower:x1,append:y1,insert:w1,remove:b1,clone:v1,datum:C1,on:S1,dispatch:I1,[Symbol.iterator]:T1};var ir=E1;function ke(e){return typeof e=="string"?new ht([[document.querySelector(e)]],[document.documentElement]):new ht([[e]],Lp)}function _1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Wl(e,t){if(e=_1(e),t===void 0&&(t=e.currentTarget),t){var r=t.ownerSVGElement||t;if(r.createSVGPoint){var o=r.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var k1={passive:!1},uo={capture:!0,passive:!1};function Gl(e){e.stopImmediatePropagation()}function _r(e){e.preventDefault(),e.stopImmediatePropagation()}function A1(e){var t=e.document.documentElement,r=ke(e).on("dragstart.drag",_r,uo);"onselectstart"in t?r.on("selectstart.drag",_r,uo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function R1(e,t){var r=e.document.documentElement,o=ke(e).on("dragstart.drag",null);t&&(o.on("click.drag",_r,uo),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in r?o.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var us=e=>()=>e;function ps(e,{sourceEvent:t,subject:r,target:o,identifier:n,active:s,x:i,y:a,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}ps.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function RF(e){return!e.ctrlKey&&!e.button}function NF(){return this.parentNode}function FF(e,t){return t??{x:e.x,y:e.y}}function DF(){return navigator.maxTouchPoints||"ontouchstart"in this}function mn(){var e=RF,t=NF,r=FF,o=DF,n={},s=lo("start","drag","end"),i=0,a,l,c,u,p=0;function f(b){b.on("mousedown.drag",d).filter(o).on("touchstart.drag",g).on("touchmove.drag",m,k1).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(b,S){if(!(u||!e.call(this,b,S))){var I=v(this,t.call(this,b,S),b,S,"mouse");I&&(ke(b.view).on("mousemove.drag",h,uo).on("mouseup.drag",x,uo),A1(b.view),Gl(b),c=!1,a=b.clientX,l=b.clientY,I("start",b))}}function h(b){if(_r(b),!c){var S=b.clientX-a,I=b.clientY-l;c=S*S+I*I>p}n.mouse("drag",b)}function x(b){ke(b.view).on("mousemove.drag mouseup.drag",null),R1(b.view,c),_r(b),n.mouse("end",b)}function g(b,S){if(e.call(this,b,S)){var I=b.changedTouches,T=t.call(this,b,S),E=I.length,R,F;for(R=0;R<E;++R)(F=v(this,T,b,S,I[R].identifier,I[R]))&&(Gl(b),F("start",b,I[R]))}}function m(b){var S=b.changedTouches,I=S.length,T,E;for(T=0;T<I;++T)(E=n[S[T].identifier])&&(_r(b),E("drag",b,S[T]))}function y(b){var S=b.changedTouches,I=S.length,T,E;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),T=0;T<I;++T)(E=n[S[T].identifier])&&(Gl(b),E("end",b,S[T]))}function v(b,S,I,T,E,R){var F=s.copy(),U=Wl(R||I,S),z,ft,tt;if((tt=r.call(b,new ps("beforestart",{sourceEvent:I,target:f,identifier:E,active:i,x:U[0],y:U[1],dx:0,dy:0,dispatch:F}),T))!=null)return z=tt.x-U[0]||0,ft=tt.y-U[1]||0,function mt(gt,xt,yt){var A=U,N;switch(gt){case"start":n[E]=mt,N=i++;break;case"end":delete n[E],--i;case"drag":U=Wl(yt||xt,S),N=i;break}F.call(gt,b,new ps(gt,{sourceEvent:xt,subject:tt,target:f,identifier:E,active:N,x:U[0]+z,y:U[1]+ft,dx:U[0]-A[0],dy:U[1]-A[1],dispatch:F}),T)}}return f.filter=function(b){return arguments.length?(e=typeof b=="function"?b:us(!!b),f):e},f.container=function(b){return arguments.length?(t=typeof b=="function"?b:us(b),f):t},f.subject=function(b){return arguments.length?(r=typeof b=="function"?b:us(b),f):r},f.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:us(!!b),f):o},f.on=function(){var b=s.on.apply(s,arguments);return b===s?f:b},f.clickDistance=function(b){return arguments.length?(p=(b=+b)*b,f):Math.sqrt(p)},f}function Hl(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Bp(e,t){var r=Object.create(e.prototype);for(var o in t)r[o]=t[o];return r}function hs(){}var fs=.7,Xl=1/fs,gn="\\s*([+-]?\\d+)\\s*",ds="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",We="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",OF=/^#([0-9a-f]{3,8})$/,PF=new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`),MF=new RegExp(`^rgb\\(${We},${We},${We}\\)$`),LF=new RegExp(`^rgba\\(${gn},${gn},${gn},${ds}\\)$`),BF=new RegExp(`^rgba\\(${We},${We},${We},${ds}\\)$`),UF=new RegExp(`^hsl\\(${ds},${We},${We}\\)$`),VF=new RegExp(`^hsla\\(${ds},${We},${We},${ds}\\)$`),N1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Hl(hs,kr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:F1,formatHex:F1,formatHex8:zF,formatHsl:WF,formatRgb:D1,toString:D1});function F1(){return this.rgb().formatHex()}function zF(){return this.rgb().formatHex8()}function WF(){return U1(this).formatHsl()}function D1(){return this.rgb().formatRgb()}function kr(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=OF.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?O1(t):r===3?new re(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?ql(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?ql(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=PF.exec(e))?new re(t[1],t[2],t[3],1):(t=MF.exec(e))?new re(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=LF.exec(e))?ql(t[1],t[2],t[3],t[4]):(t=BF.exec(e))?ql(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=UF.exec(e))?L1(t[1],t[2]/100,t[3]/100,1):(t=VF.exec(e))?L1(t[1],t[2]/100,t[3]/100,t[4]):N1.hasOwnProperty(e)?O1(N1[e]):e==="transparent"?new re(NaN,NaN,NaN,0):null}function O1(e){return new re(e>>16&255,e>>8&255,e&255,1)}function ql(e,t,r,o){return o<=0&&(e=t=r=NaN),new re(e,t,r,o)}function GF(e){return e instanceof hs||(e=kr(e)),e?(e=e.rgb(),new re(e.r,e.g,e.b,e.opacity)):new re}function xn(e,t,r,o){return arguments.length===1?GF(e):new re(e,t,r,o??1)}function re(e,t,r,o){this.r=+e,this.g=+t,this.b=+r,this.opacity=+o}Hl(re,xn,Bp(hs,{brighter(e){return e=e==null?Xl:Math.pow(Xl,e),new re(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?fs:Math.pow(fs,e),new re(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new re(fo(this.r),fo(this.g),fo(this.b),jl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:P1,formatHex:P1,formatHex8:HF,formatRgb:M1,toString:M1}));function P1(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function HF(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function M1(){let e=jl(this.opacity);return`${e===1?"rgb(":"rgba("}${fo(this.r)}, ${fo(this.g)}, ${fo(this.b)}${e===1?")":`, ${e})`}`}function jl(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function fo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function po(e){return e=fo(e),(e<16?"0":"")+e.toString(16)}function L1(e,t,r,o){return o<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Ae(e,t,r,o)}function U1(e){if(e instanceof Ae)return new Ae(e.h,e.s,e.l,e.opacity);if(e instanceof hs||(e=kr(e)),!e)return new Ae;if(e instanceof Ae)return e;e=e.rgb();var t=e.r/255,r=e.g/255,o=e.b/255,n=Math.min(t,r,o),s=Math.max(t,r,o),i=NaN,a=s-n,l=(s+n)/2;return a?(t===s?i=(r-o)/a+(r<o)*6:r===s?i=(o-t)/a+2:i=(t-r)/a+4,a/=l<.5?s+n:2-s-n,i*=60):a=l>0&&l<1?0:i,new Ae(i,a,l,e.opacity)}function V1(e,t,r,o){return arguments.length===1?U1(e):new Ae(e,t,r,o??1)}function Ae(e,t,r,o){this.h=+e,this.s=+t,this.l=+r,this.opacity=+o}Hl(Ae,V1,Bp(hs,{brighter(e){return e=e==null?Xl:Math.pow(Xl,e),new Ae(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?fs:Math.pow(fs,e),new Ae(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,o=r+(r<.5?r:1-r)*t,n=2*r-o;return new re(Up(e>=240?e-240:e+120,n,o),Up(e,n,o),Up(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Ae(B1(this.h),Kl(this.s),Kl(this.l),jl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=jl(this.opacity);return`${e===1?"hsl(":"hsla("}${B1(this.h)}, ${Kl(this.s)*100}%, ${Kl(this.l)*100}%${e===1?")":`, ${e})`}`}}));function B1(e){return e=(e||0)%360,e<0?e+360:e}function Kl(e){return Math.max(0,Math.min(1,e||0))}function Up(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}function Vp(e,t,r,o,n){var s=e*e,i=s*e;return((1-3*e+3*s-i)*t+(4-6*s+3*i)*r+(1+3*e+3*s-3*i)*o+i*n)/6}function z1(e){var t=e.length-1;return function(r){var o=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),n=e[o],s=e[o+1],i=o>0?e[o-1]:2*n-s,a=o<t-1?e[o+2]:2*s-n;return Vp((r-o/t)*t,i,n,s,a)}}function W1(e){var t=e.length;return function(r){var o=Math.floor(((r%=1)<0?++r:r)*t),n=e[(o+t-1)%t],s=e[o%t],i=e[(o+1)%t],a=e[(o+2)%t];return Vp((r-o/t)*t,n,s,i,a)}}var zp=e=>()=>e;function qF(e,t){return function(r){return e+r*t}}function KF(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(o){return Math.pow(e+o*t,r)}}function G1(e){return(e=+e)==1?Yl:function(t,r){return r-t?KF(t,r,e):zp(isNaN(t)?r:t)}}function Yl(e,t){var r=t-e;return r?qF(e,r):zp(isNaN(e)?t:e)}var Ql=function e(t){var r=G1(t);function o(n,s){var i=r((n=xn(n)).r,(s=xn(s)).r),a=r(n.g,s.g),l=r(n.b,s.b),c=Yl(n.opacity,s.opacity);return function(u){return n.r=i(u),n.g=a(u),n.b=l(u),n.opacity=c(u),n+""}}return o.gamma=e,o}(1);function H1(e){return function(t){var r=t.length,o=new Array(r),n=new Array(r),s=new Array(r),i,a;for(i=0;i<r;++i)a=xn(t[i]),o[i]=a.r||0,n[i]=a.g||0,s[i]=a.b||0;return o=e(o),n=e(n),s=e(s),a.opacity=1,function(l){return a.r=o(l),a.g=n(l),a.b=s(l),a+""}}}var XF=H1(z1),jF=H1(W1);function oe(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}var Gp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wp=new RegExp(Gp.source,"g");function YF(e){return function(){return e}}function QF(e){return function(t){return e(t)+""}}function Hp(e,t){var r=Gp.lastIndex=Wp.lastIndex=0,o,n,s,i=-1,a=[],l=[];for(e=e+"",t=t+"";(o=Gp.exec(e))&&(n=Wp.exec(t));)(s=n.index)>r&&(s=t.slice(r,s),a[i]?a[i]+=s:a[++i]=s),(o=o[0])===(n=n[0])?a[i]?a[i]+=n:a[++i]=n:(a[++i]=null,l.push({i,x:oe(o,n)})),r=Wp.lastIndex;return r<t.length&&(s=t.slice(r),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?QF(l[0].x):YF(t):(t=l.length,function(c){for(var u=0,p;u<t;++u)a[(p=l[u]).i]=p.x(c);return a.join("")})}var q1=180/Math.PI,Zl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function qp(e,t,r,o,n,s){var i,a,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*r+t*o)&&(r-=e*l,o-=t*l),(a=Math.sqrt(r*r+o*o))&&(r/=a,o/=a,l/=a),e*o<t*r&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:s,rotate:Math.atan2(t,e)*q1,skewX:Math.atan(l)*q1,scaleX:i,scaleY:a}}var Jl;function K1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Zl:qp(t.a,t.b,t.c,t.d,t.e,t.f)}function X1(e){return e==null?Zl:(Jl||(Jl=document.createElementNS("http://www.w3.org/2000/svg","g")),Jl.setAttribute("transform",e),(e=Jl.transform.baseVal.consolidate())?(e=e.matrix,qp(e.a,e.b,e.c,e.d,e.e,e.f)):Zl)}function j1(e,t,r,o){function n(c){return c.length?c.pop()+" ":""}function s(c,u,p,f,d,h){if(c!==p||u!==f){var x=d.push("translate(",null,t,null,r);h.push({i:x-4,x:oe(c,p)},{i:x-2,x:oe(u,f)})}else(p||f)&&d.push("translate("+p+t+f+r)}function i(c,u,p,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:p.push(n(p)+"rotate(",null,o)-2,x:oe(c,u)})):u&&p.push(n(p)+"rotate("+u+o)}function a(c,u,p,f){c!==u?f.push({i:p.push(n(p)+"skewX(",null,o)-2,x:oe(c,u)}):u&&p.push(n(p)+"skewX("+u+o)}function l(c,u,p,f,d,h){if(c!==p||u!==f){var x=d.push(n(d)+"scale(",null,",",null,")");h.push({i:x-4,x:oe(c,p)},{i:x-2,x:oe(u,f)})}else(p!==1||f!==1)&&d.push(n(d)+"scale("+p+","+f+")")}return function(c,u){var p=[],f=[];return c=e(c),u=e(u),s(c.translateX,c.translateY,u.translateX,u.translateY,p,f),i(c.rotate,u.rotate,p,f),a(c.skewX,u.skewX,p,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,p,f),c=u=null,function(d){for(var h=-1,x=f.length,g;++h<x;)p[(g=f[h]).i]=g.x(d);return p.join("")}}}var Kp=j1(K1,"px, ","px)","deg)"),Xp=j1(X1,", ",")",")");var yn=0,gs=0,ms=0,Q1=1e3,tc,xs,ec=0,ho=0,rc=0,ys=typeof performance=="object"&&performance.now?performance:Date,Z1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function bs(){return ho||(Z1(ZF),ho=ys.now()+rc)}function ZF(){ho=0}function ws(){this._call=this._time=this._next=null}ws.prototype=wn.prototype={constructor:ws,restart:function(e,t,r){if(typeof e!="function")throw new TypeError("callback is not a function");r=(r==null?bs():+r)+(t==null?0:+t),!this._next&&xs!==this&&(xs?xs._next=this:tc=this,xs=this),this._call=e,this._time=r,jp()},stop:function(){this._call&&(this._call=null,this._time=1/0,jp())}};function wn(e,t,r){var o=new ws;return o.restart(e,t,r),o}function J1(){bs(),++yn;for(var e=tc,t;e;)(t=ho-e._time)>=0&&e._call.call(void 0,t),e=e._next;--yn}function Y1(){ho=(ec=ys.now())+rc,yn=gs=0;try{J1()}finally{yn=0,tD(),ho=0}}function JF(){var e=ys.now(),t=e-ec;t>Q1&&(rc-=t,ec=e)}function tD(){for(var e,t=tc,r,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(r=t._next,t._next=null,t=e?e._next=r:tc=r);xs=e,jp(o)}function jp(e){if(!yn){gs&&(gs=clearTimeout(gs));var t=e-ho;t>24?(e<1/0&&(gs=setTimeout(Y1,e-ys.now()-rc)),ms&&(ms=clearInterval(ms))):(ms||(ec=ys.now(),ms=setInterval(JF,Q1)),yn=1,Z1(Y1))}}function oc(e,t,r){var o=new ws;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,r),o}var eD=lo("start","end","cancel","interrupt"),rD=[],rC=0,tC=1,sc=2,nc=3,eC=4,ic=5,vs=6;function Ar(e,t,r,o,n,s){var i=e.__transition;if(!i)e.__transition={};else if(r in i)return;oD(e,r,{name:t,index:o,group:n,on:eD,tween:rD,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:rC})}function Cs(e,t){var r=_t(e,t);if(r.state>rC)throw new Error("too late; already scheduled");return r}function Dt(e,t){var r=_t(e,t);if(r.state>nc)throw new Error("too late; already running");return r}function _t(e,t){var r=e.__transition;if(!r||!(r=r[t]))throw new Error("transition not found");return r}function oD(e,t,r){var o=e.__transition,n;o[t]=r,r.timer=wn(s,0,r.time);function s(c){r.state=tC,r.timer.restart(i,r.delay,r.time),r.delay<=c&&i(c-r.delay)}function i(c){var u,p,f,d;if(r.state!==tC)return l();for(u in o)if(d=o[u],d.name===r.name){if(d.state===nc)return oc(i);d.state===eC?(d.state=vs,d.timer.stop(),d.on.call("interrupt",e,e.__data__,d.index,d.group),delete o[u]):+u<t&&(d.state=vs,d.timer.stop(),d.on.call("cancel",e,e.__data__,d.index,d.group),delete o[u])}if(oc(function(){r.state===nc&&(r.state=eC,r.timer.restart(a,r.delay,r.time),a(c))}),r.state=sc,r.on.call("start",e,e.__data__,r.index,r.group),r.state===sc){for(r.state=nc,n=new Array(f=r.tween.length),u=0,p=-1;u<f;++u)(d=r.tween[u].value.call(e,e.__data__,r.index,r.group))&&(n[++p]=d);n.length=p+1}}function a(c){for(var u=c<r.duration?r.ease.call(null,c/r.duration):(r.timer.restart(l),r.state=ic,1),p=-1,f=n.length;++p<f;)n[p].call(e,u);r.state===ic&&(r.on.call("end",e,e.__data__,r.index,r.group),l())}function l(){r.state=vs,r.timer.stop(),delete o[t];for(var c in o)return;delete e.__transition}}function ac(e,t){var r=e.__transition,o,n,s=!0,i;if(r){t=t==null?null:t+"";for(i in r){if((o=r[i]).name!==t){s=!1;continue}n=o.state>sc&&o.state<ic,o.state=vs,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete r[i]}s&&delete e.__transition}}function oC(e){return this.each(function(){ac(this,e)})}function nD(e,t){var r,o;return function(){var n=Dt(this,e),s=n.tween;if(s!==r){o=r=s;for(var i=0,a=o.length;i<a;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function sD(e,t,r){var o,n;if(typeof r!="function")throw new Error;return function(){var s=Dt(this,e),i=s.tween;if(i!==o){n=(o=i).slice();for(var a={name:t,value:r},l=0,c=n.length;l<c;++l)if(n[l].name===t){n[l]=a;break}l===c&&n.push(a)}s.tween=n}}function nC(e,t){var r=this._id;if(e+="",arguments.length<2){for(var o=_t(this.node(),r).tween,n=0,s=o.length,i;n<s;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?nD:sD)(r,e,t))}function bn(e,t,r){var o=e._id;return e.each(function(){var n=Dt(this,o);(n.value||(n.value={}))[t]=r.apply(this,arguments)}),function(n){return _t(n,o).value[t]}}function lc(e,t){var r;return(typeof t=="number"?oe:t instanceof kr?Ql:(r=kr(t))?(t=r,Ql):Hp)(e,t)}function iD(e){return function(){this.removeAttribute(e)}}function aD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function lD(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttribute(e);return i===n?null:i===o?s:s=t(o=i,r)}}function cD(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?s:s=t(o=i,r)}}function uD(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function pD(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function sC(e,t){var r=sr(e),o=r==="transform"?Xp:lc;return this.attrTween(e,typeof t=="function"?(r.local?pD:uD)(r,o,bn(this,"attr."+e,t)):t==null?(r.local?aD:iD)(r):(r.local?cD:lD)(r,o,t))}function fD(e,t){return function(r){this.setAttribute(e,t.call(this,r))}}function dD(e,t){return function(r){this.setAttributeNS(e.space,e.local,t.call(this,r))}}function hD(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&dD(e,s)),r}return n._value=t,n}function mD(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&fD(e,s)),r}return n._value=t,n}function iC(e,t){var r="attr."+e;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;var o=sr(e);return this.tween(r,(o.local?hD:mD)(o,t))}function gD(e,t){return function(){Cs(this,e).delay=+t.apply(this,arguments)}}function xD(e,t){return t=+t,function(){Cs(this,e).delay=t}}function aC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?gD:xD)(t,e)):_t(this.node(),t).delay}function yD(e,t){return function(){Dt(this,e).duration=+t.apply(this,arguments)}}function wD(e,t){return t=+t,function(){Dt(this,e).duration=t}}function lC(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?yD:wD)(t,e)):_t(this.node(),t).duration}function bD(e,t){if(typeof t!="function")throw new Error;return function(){Dt(this,e).ease=t}}function cC(e){var t=this._id;return arguments.length?this.each(bD(t,e)):_t(this.node(),t).ease}function vD(e,t){return function(){var r=t.apply(this,arguments);if(typeof r!="function")throw new Error;Dt(this,e).ease=r}}function uC(e){if(typeof e!="function")throw new Error;return this.each(vD(this._id,e))}function pC(e){typeof e!="function"&&(e=ls(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,c=0;c<i;++c)(l=s[c])&&e.call(l,l.__data__,c,s)&&a.push(l);return new qt(o,this._parents,this._name,this._id)}function fC(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,r=e._groups,o=t.length,n=r.length,s=Math.min(o,n),i=new Array(o),a=0;a<s;++a)for(var l=t[a],c=r[a],u=l.length,p=i[a]=new Array(u),f,d=0;d<u;++d)(f=l[d]||c[d])&&(p[d]=f);for(;a<o;++a)i[a]=t[a];return new qt(i,this._parents,this._name,this._id)}function CD(e){return(e+"").trim().split(/^|\s+/).every(function(t){var r=t.indexOf(".");return r>=0&&(t=t.slice(0,r)),!t||t==="start"})}function SD(e,t,r){var o,n,s=CD(t)?Cs:Dt;return function(){var i=s(this,e),a=i.on;a!==o&&(n=(o=a).copy()).on(t,r),i.on=n}}function dC(e,t){var r=this._id;return arguments.length<2?_t(this.node(),r).on.on(e):this.each(SD(r,e,t))}function $D(e){return function(){var t=this.parentNode;for(var r in this.__transition)if(+r!==e)return;t&&t.removeChild(this)}}function hC(){return this.on("end.remove",$D(this._id))}function mC(e){var t=this._name,r=this._id;typeof e!="function"&&(e=co(e));for(var o=this._groups,n=o.length,s=new Array(n),i=0;i<n;++i)for(var a=o[i],l=a.length,c=s[i]=new Array(l),u,p,f=0;f<l;++f)(u=a[f])&&(p=e.call(u,u.__data__,f,a))&&("__data__"in u&&(p.__data__=u.__data__),c[f]=p,Ar(c[f],t,r,f,c,_t(u,r)));return new qt(s,this._parents,t,r)}function gC(e){var t=this._name,r=this._id;typeof e!="function"&&(e=as(e));for(var o=this._groups,n=o.length,s=[],i=[],a=0;a<n;++a)for(var l=o[a],c=l.length,u,p=0;p<c;++p)if(u=l[p]){for(var f=e.call(u,u.__data__,p,l),d,h=_t(u,r),x=0,g=f.length;x<g;++x)(d=f[x])&&Ar(d,t,r,x,f,h);s.push(f),i.push(u)}return new qt(s,i,t,r)}var ID=ir.prototype.constructor;function xC(){return new ID(this._groups,this._parents)}function TD(e,t){var r,o,n;return function(){var s=Er(this,e),i=(this.style.removeProperty(e),Er(this,e));return s===i?null:s===r&&i===o?n:n=t(r=s,o=i)}}function yC(e){return function(){this.style.removeProperty(e)}}function ED(e,t,r){var o,n=r+"",s;return function(){var i=Er(this,e);return i===n?null:i===o?s:s=t(o=i,r)}}function _D(e,t,r){var o,n,s;return function(){var i=Er(this,e),a=r(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),Er(this,e))),i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a))}}function kD(e,t){var r,o,n,s="style."+t,i="end."+s,a;return function(){var l=Dt(this,e),c=l.on,u=l.value[s]==null?a||(a=yC(t)):void 0;(c!==r||n!==u)&&(o=(r=c).copy()).on(i,n=u),l.on=o}}function wC(e,t,r){var o=(e+="")=="transform"?Kp:lc;return t==null?this.styleTween(e,TD(e,o)).on("end.style."+e,yC(e)):typeof t=="function"?this.styleTween(e,_D(e,o,bn(this,"style."+e,t))).each(kD(this._id,e)):this.styleTween(e,ED(e,o,t),r).on("end.style."+e,null)}function AD(e,t,r){return function(o){this.style.setProperty(e,t.call(this,o),r)}}function RD(e,t,r){var o,n;function s(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&AD(e,i,r)),o}return s._value=t,s}function bC(e,t,r){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,RD(e,t,r??""))}function ND(e){return function(){this.textContent=e}}function FD(e){return function(){var t=e(this);this.textContent=t??""}}function vC(e){return this.tween("text",typeof e=="function"?FD(bn(this,"text",e)):ND(e==null?"":e+""))}function DD(e){return function(t){this.textContent=e.call(this,t)}}function OD(e){var t,r;function o(){var n=e.apply(this,arguments);return n!==r&&(t=(r=n)&&DD(n)),t}return o._value=e,o}function CC(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,OD(e))}function SC(){for(var e=this._name,t=this._id,r=cc(),o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,c=0;c<a;++c)if(l=i[c]){var u=_t(l,t);Ar(l,e,r,c,i,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new qt(o,this._parents,e,r)}function $C(){var e,t,r=this,o=r._id,n=r.size();return new Promise(function(s,i){var a={value:i},l={value:function(){--n===0&&s()}};r.each(function(){var c=Dt(this,o),u=c.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),n===0&&s()})}var PD=0;function qt(e,t,r,o){this._groups=e,this._parents=t,this._name=r,this._id=o}function IC(e){return ir().transition(e)}function cc(){return++PD}var ar=ir.prototype;qt.prototype=IC.prototype={constructor:qt,select:mC,selectAll:gC,selectChild:ar.selectChild,selectChildren:ar.selectChildren,filter:pC,merge:fC,selection:xC,transition:SC,call:ar.call,nodes:ar.nodes,node:ar.node,size:ar.size,empty:ar.empty,each:ar.each,on:dC,attr:sC,attrTween:iC,style:wC,styleTween:bC,text:vC,textTween:CC,remove:hC,tween:nC,delay:aC,duration:lC,ease:cC,easeVarying:uC,end:$C,[Symbol.iterator]:ar[Symbol.iterator]};function uc(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Yp=3,pc=function e(t){t=+t;function r(o){return Math.pow(o,t)}return r.exponent=e,r}(Yp),Qp=function e(t){t=+t;function r(o){return 1-Math.pow(1-o,t)}return r.exponent=e,r}(Yp),TC=function e(t){t=+t;function r(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return r.exponent=e,r}(Yp);function EC(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}function Ss(e){return 1-EC(e)}var LD={time:null,delay:0,duration:250,ease:uc};function BD(e,t){for(var r;!(r=e.__transition)||!(r=r[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return r}function _C(e){var t,r;e instanceof qt?(t=e._id,e=e._name):(t=cc(),(r=LD).time=bs(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,c=0;c<a;++c)(l=i[c])&&Ar(l,e,t,c,i,r||BD(l,t));return new qt(o,this._parents,e,t)}ir.prototype.interrupt=oC;ir.prototype.transition=_C;var{abs:Yht,max:Qht,min:Zht}=Math;function kC(e){return[+e[0],+e[1]]}function UD(e){return[kC(e[0]),kC(e[1])]}var Jht={name:"x",handles:["w","e"].map(Zp),input:function(e,t){return e==null?null:[[+e[0],t[0][1]],[+e[1],t[1][1]]]},output:function(e){return e&&[e[0][0],e[1][0]]}},tmt={name:"y",handles:["n","s"].map(Zp),input:function(e,t){return e==null?null:[[t[0][0],+e[0]],[t[1][0],+e[1]]]},output:function(e){return e&&[e[0][1],e[1][1]]}},emt={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Zp),input:function(e){return e==null?null:UD(e)},output:function(e){return e}};function Zp(e){return{type:e}}function AC(e){let t=+this._x.call(null,e),r=+this._y.call(null,e);return RC(this.cover(t,r),t,r,e)}function RC(e,t,r,o){if(isNaN(t)||isNaN(r))return e;var n,s=e._root,i={data:o},a=e._x0,l=e._y0,c=e._x1,u=e._y1,p,f,d,h,x,g,m,y;if(!s)return e._root=i,e;for(;s.length;)if((x=t>=(p=(a+c)/2))?a=p:c=p,(g=r>=(f=(l+u)/2))?l=f:u=f,n=s,!(s=s[m=g<<1|x]))return n[m]=i,e;if(d=+e._x.call(null,s.data),h=+e._y.call(null,s.data),t===d&&r===h)return i.next=s,n?n[m]=i:e._root=i,e;do n=n?n[m]=new Array(4):e._root=new Array(4),(x=t>=(p=(a+c)/2))?a=p:c=p,(g=r>=(f=(l+u)/2))?l=f:u=f;while((m=g<<1|x)===(y=(h>=f)<<1|d>=p));return n[y]=s,n[m]=i,e}function NC(e){var t,r,o=e.length,n,s,i=new Array(o),a=new Array(o),l=1/0,c=1/0,u=-1/0,p=-1/0;for(r=0;r<o;++r)isNaN(n=+this._x.call(null,t=e[r]))||isNaN(s=+this._y.call(null,t))||(i[r]=n,a[r]=s,n<l&&(l=n),n>u&&(u=n),s<c&&(c=s),s>p&&(p=s));if(l>u||c>p)return this;for(this.cover(l,c).cover(u,p),r=0;r<o;++r)RC(this,i[r],a[r],e[r]);return this}function FC(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,o=this._y0,n=this._x1,s=this._y1;if(isNaN(r))n=(r=Math.floor(e))+1,s=(o=Math.floor(t))+1;else{for(var i=n-r||1,a=this._root,l,c;r>e||e>=n||o>t||t>=s;)switch(c=(t<o)<<1|e<r,l=new Array(4),l[c]=a,a=l,i*=2,c){case 0:n=r+i,s=o+i;break;case 1:r=n-i,s=o+i;break;case 2:n=r+i,o=s-i;break;case 3:r=n-i,o=s-i;break}this._root&&this._root.length&&(this._root=a)}return this._x0=r,this._y0=o,this._x1=n,this._y1=s,this}function DC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function OC(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function At(e,t,r,o,n){this.node=e,this.x0=t,this.y0=r,this.x1=o,this.y1=n}function PC(e,t,r){var o,n=this._x0,s=this._y0,i,a,l,c,u=this._x1,p=this._y1,f=[],d=this._root,h,x;for(d&&f.push(new At(d,n,s,u,p)),r==null?r=1/0:(n=e-r,s=t-r,u=e+r,p=t+r,r*=r);h=f.pop();)if(!(!(d=h.node)||(i=h.x0)>u||(a=h.y0)>p||(l=h.x1)<n||(c=h.y1)<s))if(d.length){var g=(i+l)/2,m=(a+c)/2;f.push(new At(d[3],g,m,l,c),new At(d[2],i,m,g,c),new At(d[1],g,a,l,m),new At(d[0],i,a,g,m)),(x=(t>=m)<<1|e>=g)&&(h=f[f.length-1],f[f.length-1]=f[f.length-1-x],f[f.length-1-x]=h)}else{var y=e-+this._x.call(null,d.data),v=t-+this._y.call(null,d.data),b=y*y+v*v;if(b<r){var S=Math.sqrt(r=b);n=e-S,s=t-S,u=e+S,p=t+S,o=d.data}}return o}function MC(e){if(isNaN(u=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._x1,c=this._y1,u,p,f,d,h,x,g,m;if(!r)return this;if(r.length)for(;;){if((h=u>=(f=(i+l)/2))?i=f:l=f,(x=p>=(d=(a+c)/2))?a=d:c=d,t=r,!(r=r[g=x<<1|h]))return this;if(!r.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(o=t,m=g)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[g]=s:delete t[g],(r=t[0]||t[1]||t[2]||t[3])&&r===(t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[m]=r:this._root=r),this):(this._root=s,this)}function LC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function BC(){return this._root}function UC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function VC(e){var t=[],r,o=this._root,n,s,i,a,l;for(o&&t.push(new At(o,this._x0,this._y0,this._x1,this._y1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.x1,l=r.y1)&&o.length){var c=(s+a)/2,u=(i+l)/2;(n=o[3])&&t.push(new At(n,c,u,a,l)),(n=o[2])&&t.push(new At(n,s,u,c,l)),(n=o[1])&&t.push(new At(n,c,i,a,u)),(n=o[0])&&t.push(new At(n,s,i,c,u))}return this}function zC(e){var t=[],r=[],o;for(this._root&&t.push(new At(this._root,this._x0,this._y0,this._x1,this._y1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.x1,c=o.y1,u=(i+l)/2,p=(a+c)/2;(s=n[0])&&t.push(new At(s,i,a,u,p)),(s=n[1])&&t.push(new At(s,u,a,l,p)),(s=n[2])&&t.push(new At(s,i,p,u,c)),(s=n[3])&&t.push(new At(s,u,p,l,c))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.x1,o.y1);return this}function WC(e){return e[0]}function GC(e){return arguments.length?(this._x=e,this):this._x}function HC(e){return e[1]}function qC(e){return arguments.length?(this._y=e,this):this._y}function $s(e,t,r){var o=new Jp(t??WC,r??HC,NaN,NaN,NaN,NaN);return e==null?o:o.addAll(e)}function Jp(e,t,r,o,n,s){this._x=e,this._y=t,this._x0=r,this._y0=o,this._x1=n,this._y1=s,this._root=void 0}function KC(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var Kt=$s.prototype=Jp.prototype;Kt.copy=function(){var e=new Jp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=KC(t),e;for(r=[{source:t,target:e._root=new Array(4)}];t=r.pop();)for(var n=0;n<4;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(4)}):t.target[n]=KC(o));return e};Kt.add=AC;Kt.addAll=NC;Kt.cover=FC;Kt.data=DC;Kt.extent=OC;Kt.find=PC;Kt.remove=MC;Kt.removeAll=LC;Kt.root=BC;Kt.size=UC;Kt.visit=VC;Kt.visitAfter=zC;Kt.x=GC;Kt.y=qC;function Rr(e,t,r){this.k=e,this.x=t,this.y=r}Rr.prototype={constructor:Rr,scale:function(e){return e===1?this:new Rr(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Rr(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var tf=new Rr(1,0,0);ef.prototype=Rr.prototype;function ef(e){for(;!e.__zoom;)if(!(e=e.parentNode))return tf;return e.__zoom}function rf(e,t,r){var o,n=1;e==null&&(e=0),t==null&&(t=0),r==null&&(r=0);function s(){var i,a=o.length,l,c=0,u=0,p=0;for(i=0;i<a;++i)l=o[i],c+=l.x||0,u+=l.y||0,p+=l.z||0;for(c=(c/a-e)*n,u=(u/a-t)*n,p=(p/a-r)*n,i=0;i<a;++i)l=o[i],c&&(l.x-=c),u&&(l.y-=u),p&&(l.z-=p)}return s.initialize=function(i){o=i},s.x=function(i){return arguments.length?(e=+i,s):e},s.y=function(i){return arguments.length?(t=+i,s):t},s.z=function(i){return arguments.length?(r=+i,s):r},s.strength=function(i){return arguments.length?(n=+i,s):n},s}function XC(e){let t=+this._x.call(null,e);return jC(this.cover(t),t,e)}function jC(e,t,r){if(isNaN(t))return e;var o,n=e._root,s={data:r},i=e._x0,a=e._x1,l,c,u,p,f;if(!n)return e._root=s,e;for(;n.length;)if((u=t>=(l=(i+a)/2))?i=l:a=l,o=n,!(n=n[p=+u]))return o[p]=s,e;if(c=+e._x.call(null,n.data),t===c)return s.next=n,o?o[p]=s:e._root=s,e;do o=o?o[p]=new Array(2):e._root=new Array(2),(u=t>=(l=(i+a)/2))?i=l:a=l;while((p=+u)==(f=+(c>=l)));return o[f]=n,o[p]=s,e}function YC(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=1/0,n=-1/0;for(let s=0,i;s<t;++s)isNaN(i=+this._x.call(null,e[s]))||(r[s]=i,i<o&&(o=i),i>n&&(n=i));if(o>n)return this;this.cover(o).cover(n);for(let s=0;s<t;++s)jC(this,r[s],e[s]);return this}function QC(e){if(isNaN(e=+e))return this;var t=this._x0,r=this._x1;if(isNaN(t))r=(t=Math.floor(e))+1;else{for(var o=r-t||1,n=this._root,s,i;t>e||e>=r;)switch(i=+(e<t),s=new Array(2),s[i]=n,n=s,o*=2,i){case 0:r=t+o;break;case 1:t=r-o;break}this._root&&this._root.length&&(this._root=n)}return this._x0=t,this._x1=r,this}function ZC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function JC(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function be(e,t,r){this.node=e,this.x0=t,this.x1=r}function tS(e,t){var r,o=this._x0,n,s,i=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new be(l,o,i)),t==null?t=1/0:(o=e-t,i=e+t);c=a.pop();)if(!(!(l=c.node)||(n=c.x0)>i||(s=c.x1)<o))if(l.length){var p=(n+s)/2;a.push(new be(l[1],p,s),new be(l[0],n,p)),(u=+(e>=p))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var f=Math.abs(e-+this._x.call(null,l.data));f<t&&(t=f,o=e-f,i=e+f,r=l.data)}return r}function eS(e){if(isNaN(l=+this._x.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._x1,l,c,u,p,f;if(!r)return this;if(r.length)for(;;){if((u=l>=(c=(i+a)/2))?i=c:a=c,t=r,!(r=r[p=+u]))return this;if(!r.length)break;t[p+1&1]&&(o=t,f=p)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[p]=s:delete t[p],(r=t[0]||t[1])&&r===(t[1]||t[0])&&!r.length&&(o?o[f]=r:this._root=r),this):(this._root=s,this)}function rS(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function oS(){return this._root}function nS(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function sS(e){var t=[],r,o=this._root,n,s,i;for(o&&t.push(new be(o,this._x0,this._x1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.x1)&&o.length){var a=(s+i)/2;(n=o[1])&&t.push(new be(n,a,i)),(n=o[0])&&t.push(new be(n,s,a))}return this}function iS(e){var t=[],r=[],o;for(this._root&&t.push(new be(this._root,this._x0,this._x1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.x1,l=(i+a)/2;(s=n[0])&&t.push(new be(s,i,l)),(s=n[1])&&t.push(new be(s,l,a))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.x1);return this}function aS(e){return e[0]}function lS(e){return arguments.length?(this._x=e,this):this._x}function Is(e,t){var r=new of(t??aS,NaN,NaN);return e==null?r:r.addAll(e)}function of(e,t,r){this._x=e,this._x0=t,this._x1=r,this._root=void 0}function cS(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var ne=Is.prototype=of.prototype;ne.copy=function(){var e=new of(this._x,this._x0,this._x1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=cS(t),e;for(r=[{source:t,target:e._root=new Array(2)}];t=r.pop();)for(var n=0;n<2;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(2)}):t.target[n]=cS(o));return e};ne.add=XC;ne.addAll=YC;ne.cover=QC;ne.data=ZC;ne.extent=JC;ne.find=tS;ne.remove=eS;ne.removeAll=rS;ne.root=oS;ne.size=nS;ne.visit=sS;ne.visitAfter=iS;ne.x=lS;function uS(e){let t=+this._x.call(null,e),r=+this._y.call(null,e),o=+this._z.call(null,e);return pS(this.cover(t,r,o),t,r,o,e)}function pS(e,t,r,o,n){if(isNaN(t)||isNaN(r)||isNaN(o))return e;var s,i=e._root,a={data:n},l=e._x0,c=e._y0,u=e._z0,p=e._x1,f=e._y1,d=e._z1,h,x,g,m,y,v,b,S,I,T,E;if(!i)return e._root=a,e;for(;i.length;)if((b=t>=(h=(l+p)/2))?l=h:p=h,(S=r>=(x=(c+f)/2))?c=x:f=x,(I=o>=(g=(u+d)/2))?u=g:d=g,s=i,!(i=i[T=I<<2|S<<1|b]))return s[T]=a,e;if(m=+e._x.call(null,i.data),y=+e._y.call(null,i.data),v=+e._z.call(null,i.data),t===m&&r===y&&o===v)return a.next=i,s?s[T]=a:e._root=a,e;do s=s?s[T]=new Array(8):e._root=new Array(8),(b=t>=(h=(l+p)/2))?l=h:p=h,(S=r>=(x=(c+f)/2))?c=x:f=x,(I=o>=(g=(u+d)/2))?u=g:d=g;while((T=I<<2|S<<1|b)===(E=(v>=g)<<2|(y>=x)<<1|m>=h));return s[E]=i,s[T]=a,e}function fS(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=new Float64Array(t),n=new Float64Array(t),s=1/0,i=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let p=0,f,d,h,x;p<t;++p)isNaN(d=+this._x.call(null,f=e[p]))||isNaN(h=+this._y.call(null,f))||isNaN(x=+this._z.call(null,f))||(r[p]=d,o[p]=h,n[p]=x,d<s&&(s=d),d>l&&(l=d),h<i&&(i=h),h>c&&(c=h),x<a&&(a=x),x>u&&(u=x));if(s>l||i>c||a>u)return this;this.cover(s,i,a).cover(l,c,u);for(let p=0;p<t;++p)pS(this,r[p],o[p],n[p],e[p]);return this}function dS(e,t,r){if(isNaN(e=+e)||isNaN(t=+t)||isNaN(r=+r))return this;var o=this._x0,n=this._y0,s=this._z0,i=this._x1,a=this._y1,l=this._z1;if(isNaN(o))i=(o=Math.floor(e))+1,a=(n=Math.floor(t))+1,l=(s=Math.floor(r))+1;else{for(var c=i-o||1,u=this._root,p,f;o>e||e>=i||n>t||t>=a||s>r||r>=l;)switch(f=(r<s)<<2|(t<n)<<1|e<o,p=new Array(8),p[f]=u,u=p,c*=2,f){case 0:i=o+c,a=n+c,l=s+c;break;case 1:o=i-c,a=n+c,l=s+c;break;case 2:i=o+c,n=a-c,l=s+c;break;case 3:o=i-c,n=a-c,l=s+c;break;case 4:i=o+c,a=n+c,s=l-c;break;case 5:o=i-c,a=n+c,s=l-c;break;case 6:i=o+c,n=a-c,s=l-c;break;case 7:o=i-c,n=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this}function hS(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function mS(e){return arguments.length?this.cover(+e[0][0],+e[0][1],+e[0][2]).cover(+e[1][0],+e[1][1],+e[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Q(e,t,r,o,n,s,i){this.node=e,this.x0=t,this.y0=r,this.z0=o,this.x1=n,this.y1=s,this.z1=i}function gS(e,t,r,o){var n,s=this._x0,i=this._y0,a=this._z0,l,c,u,p,f,d,h=this._x1,x=this._y1,g=this._z1,m=[],y=this._root,v,b;for(y&&m.push(new Q(y,s,i,a,h,x,g)),o==null?o=1/0:(s=e-o,i=t-o,a=r-o,h=e+o,x=t+o,g=r+o,o*=o);v=m.pop();)if(!(!(y=v.node)||(l=v.x0)>h||(c=v.y0)>x||(u=v.z0)>g||(p=v.x1)<s||(f=v.y1)<i||(d=v.z1)<a))if(y.length){var S=(l+p)/2,I=(c+f)/2,T=(u+d)/2;m.push(new Q(y[7],S,I,T,p,f,d),new Q(y[6],l,I,T,S,f,d),new Q(y[5],S,c,T,p,I,d),new Q(y[4],l,c,T,S,I,d),new Q(y[3],S,I,u,p,f,T),new Q(y[2],l,I,u,S,f,T),new Q(y[1],S,c,u,p,I,T),new Q(y[0],l,c,u,S,I,T)),(b=(r>=T)<<2|(t>=I)<<1|e>=S)&&(v=m[m.length-1],m[m.length-1]=m[m.length-1-b],m[m.length-1-b]=v)}else{var E=e-+this._x.call(null,y.data),R=t-+this._y.call(null,y.data),F=r-+this._z.call(null,y.data),U=E*E+R*R+F*F;if(U<o){var z=Math.sqrt(o=U);s=e-z,i=t-z,a=r-z,h=e+z,x=t+z,g=r+z,n=y.data}}return n}function xS(e){if(isNaN(f=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e))||isNaN(h=+this._z.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,p=this._z1,f,d,h,x,g,m,y,v,b,S,I;if(!r)return this;if(r.length)for(;;){if((y=f>=(x=(i+c)/2))?i=x:c=x,(v=d>=(g=(a+u)/2))?a=g:u=g,(b=h>=(m=(l+p)/2))?l=m:p=m,t=r,!(r=r[S=b<<2|v<<1|y]))return this;if(!r.length)break;(t[S+1&7]||t[S+2&7]||t[S+3&7]||t[S+4&7]||t[S+5&7]||t[S+6&7]||t[S+7&7])&&(o=t,I=S)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[S]=s:delete t[S],(r=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&r===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[I]=r:this._root=r),this):(this._root=s,this)}function yS(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function wS(){return this._root}function bS(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function vS(e){var t=[],r,o=this._root,n,s,i,a,l,c,u;for(o&&t.push(new Q(o,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.z0,l=r.x1,c=r.y1,u=r.z1)&&o.length){var p=(s+l)/2,f=(i+c)/2,d=(a+u)/2;(n=o[7])&&t.push(new Q(n,p,f,d,l,c,u)),(n=o[6])&&t.push(new Q(n,s,f,d,p,c,u)),(n=o[5])&&t.push(new Q(n,p,i,d,l,f,u)),(n=o[4])&&t.push(new Q(n,s,i,d,p,f,u)),(n=o[3])&&t.push(new Q(n,p,f,a,l,c,d)),(n=o[2])&&t.push(new Q(n,s,f,a,p,c,d)),(n=o[1])&&t.push(new Q(n,p,i,a,l,f,d)),(n=o[0])&&t.push(new Q(n,s,i,a,p,f,d))}return this}function CS(e){var t=[],r=[],o;for(this._root&&t.push(new Q(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.z0,c=o.x1,u=o.y1,p=o.z1,f=(i+c)/2,d=(a+u)/2,h=(l+p)/2;(s=n[0])&&t.push(new Q(s,i,a,l,f,d,h)),(s=n[1])&&t.push(new Q(s,f,a,l,c,d,h)),(s=n[2])&&t.push(new Q(s,i,d,l,f,u,h)),(s=n[3])&&t.push(new Q(s,f,d,l,c,u,h)),(s=n[4])&&t.push(new Q(s,i,a,h,f,d,p)),(s=n[5])&&t.push(new Q(s,f,a,h,c,d,p)),(s=n[6])&&t.push(new Q(s,i,d,h,f,u,p)),(s=n[7])&&t.push(new Q(s,f,d,h,c,u,p))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.z0,o.x1,o.y1,o.z1);return this}function SS(e){return e[0]}function $S(e){return arguments.length?(this._x=e,this):this._x}function IS(e){return e[1]}function TS(e){return arguments.length?(this._y=e,this):this._y}function ES(e){return e[2]}function _S(e){return arguments.length?(this._z=e,this):this._z}function Ts(e,t,r,o){var n=new nf(t??SS,r??IS,o??ES,NaN,NaN,NaN,NaN,NaN,NaN);return e==null?n:n.addAll(e)}function nf(e,t,r,o,n,s,i,a,l){this._x=e,this._y=t,this._z=r,this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this._root=void 0}function kS(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var Mt=Ts.prototype=nf.prototype;Mt.copy=function(){var e=new nf(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=kS(t),e;for(r=[{source:t,target:e._root=new Array(8)}];t=r.pop();)for(var n=0;n<8;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(8)}):t.target[n]=kS(o));return e};Mt.add=uS;Mt.addAll=fS;Mt.cover=dS;Mt.data=hS;Mt.extent=mS;Mt.find=gS;Mt.remove=xS;Mt.removeAll=yS;Mt.root=wS;Mt.size=bS;Mt.visit=vS;Mt.visitAfter=CS;Mt.x=$S;Mt.y=TS;Mt.z=_S;function mo(e){return function(){return e}}function Re(e){return(e()-.5)*1e-6}function zD(e){return e.index}function AS(e,t){var r=e.get(t);if(!r)throw new Error("node not found: "+t);return r}function sf(e){var t=zD,r=f,o,n=mo(30),s,i,a,l,c,u,p=1;e==null&&(e=[]);function f(m){return 1/Math.min(l[m.source.index],l[m.target.index])}function d(m){for(var y=0,v=e.length;y<p;++y)for(var b=0,S,I,T,E=0,R=0,F=0,U,z;b<v;++b)S=e[b],I=S.source,T=S.target,E=T.x+T.vx-I.x-I.vx||Re(u),a>1&&(R=T.y+T.vy-I.y-I.vy||Re(u)),a>2&&(F=T.z+T.vz-I.z-I.vz||Re(u)),U=Math.sqrt(E*E+R*R+F*F),U=(U-s[b])/U*m*o[b],E*=U,R*=U,F*=U,T.vx-=E*(z=c[b]),a>1&&(T.vy-=R*z),a>2&&(T.vz-=F*z),I.vx+=E*(z=1-z),a>1&&(I.vy+=R*z),a>2&&(I.vz+=F*z)}function h(){if(i){var m,y=i.length,v=e.length,b=new Map(i.map((I,T)=>[t(I,T,i),I])),S;for(m=0,l=new Array(y);m<v;++m)S=e[m],S.index=m,typeof S.source!="object"&&(S.source=AS(b,S.source)),typeof S.target!="object"&&(S.target=AS(b,S.target)),l[S.source.index]=(l[S.source.index]||0)+1,l[S.target.index]=(l[S.target.index]||0)+1;for(m=0,c=new Array(v);m<v;++m)S=e[m],c[m]=l[S.source.index]/(l[S.source.index]+l[S.target.index]);o=new Array(v),x(),s=new Array(v),g()}}function x(){if(i)for(var m=0,y=e.length;m<y;++m)o[m]=+r(e[m],m,e)}function g(){if(i)for(var m=0,y=e.length;m<y;++m)s[m]=+n(e[m],m,e)}return d.initialize=function(m,...y){i=m,u=y.find(v=>typeof v=="function")||Math.random,a=y.find(v=>[1,2,3].includes(v))||2,h()},d.links=function(m){return arguments.length?(e=m,h(),d):e},d.id=function(m){return arguments.length?(t=m,d):t},d.iterations=function(m){return arguments.length?(p=+m,d):p},d.strength=function(m){return arguments.length?(r=typeof m=="function"?m:mo(+m),x(),d):r},d.distance=function(m){return arguments.length?(n=typeof m=="function"?m:mo(+m),g(),d):n},d}function RS(){let e=1;return()=>(e=(1664525*e+1013904223)%4294967296)/4294967296}var NS=3;function fc(e){return e.x}function af(e){return e.y}function FS(e){return e.z}var WD=10,GD=Math.PI*(3-Math.sqrt(5)),HD=Math.PI*20/(9+Math.sqrt(221));function lf(e,t){t=t||2;var r=Math.min(NS,Math.max(1,Math.round(t))),o,n=1,s=.001,i=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,u=wn(d),p=lo("tick","end"),f=RS();e==null&&(e=[]);function d(){h(),p.call("tick",o),n<s&&(u.stop(),p.call("end",o))}function h(m){var y,v=e.length,b;m===void 0&&(m=1);for(var S=0;S<m;++S)for(n+=(a-n)*i,c.forEach(function(I){I(n)}),y=0;y<v;++y)b=e[y],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),r>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),r>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return o}function x(){for(var m=0,y=e.length,v;m<y;++m){if(v=e[m],v.index=m,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),v.fz!=null&&(v.z=v.fz),isNaN(v.x)||r>1&&isNaN(v.y)||r>2&&isNaN(v.z)){var b=WD*(r>2?Math.cbrt(.5+m):r>1?Math.sqrt(.5+m):m),S=m*GD,I=m*HD;r===1?v.x=b:r===2?(v.x=b*Math.cos(S),v.y=b*Math.sin(S)):(v.x=b*Math.sin(S)*Math.cos(I),v.y=b*Math.cos(S),v.z=b*Math.sin(S)*Math.sin(I))}(isNaN(v.vx)||r>1&&isNaN(v.vy)||r>2&&isNaN(v.vz))&&(v.vx=0,r>1&&(v.vy=0),r>2&&(v.vz=0))}}function g(m){return m.initialize&&m.initialize(e,f,r),m}return x(),o={tick:h,restart:function(){return u.restart(d),o},stop:function(){return u.stop(),o},numDimensions:function(m){return arguments.length?(r=Math.min(NS,Math.max(1,Math.round(m))),c.forEach(g),o):r},nodes:function(m){return arguments.length?(e=m,x(),c.forEach(g),o):e},alpha:function(m){return arguments.length?(n=+m,o):n},alphaMin:function(m){return arguments.length?(s=+m,o):s},alphaDecay:function(m){return arguments.length?(i=+m,o):+i},alphaTarget:function(m){return arguments.length?(a=+m,o):a},velocityDecay:function(m){return arguments.length?(l=1-m,o):1-l},randomSource:function(m){return arguments.length?(f=m,c.forEach(g),o):f},force:function(m,y){return arguments.length>1?(y==null?c.delete(m):c.set(m,g(y)),o):c.get(m)},find:function(){var m=Array.prototype.slice.call(arguments),y=m.shift()||0,v=(r>1?m.shift():null)||0,b=(r>2?m.shift():null)||0,S=m.shift()||1/0,I=0,T=e.length,E,R,F,U,z,ft;for(S*=S,I=0;I<T;++I)z=e[I],E=y-z.x,R=v-(z.y||0),F=b-(z.z||0),U=E*E+R*R+F*F,U<S&&(ft=z,S=U);return ft},on:function(m,y){return arguments.length>1?(p.on(m,y),o):p.on(m)}}}function cf(){var e,t,r,o,n,s=mo(-30),i,a=1,l=1/0,c=.81;function u(h){var x,g=e.length,m=(t===1?Is(e,fc):t===2?$s(e,fc,af):t===3?Ts(e,fc,af,FS):null).visitAfter(f);for(n=h,x=0;x<g;++x)r=e[x],m.visit(d)}function p(){if(e){var h,x=e.length,g;for(i=new Array(x),h=0;h<x;++h)g=e[h],i[g.index]=+s(g,h,e)}}function f(h){var x=0,g,m,y=0,v,b,S,I,T=h.length;if(T){for(v=b=S=I=0;I<T;++I)(g=h[I])&&(m=Math.abs(g.value))&&(x+=g.value,y+=m,v+=m*(g.x||0),b+=m*(g.y||0),S+=m*(g.z||0));x*=Math.sqrt(4/T),h.x=v/y,t>1&&(h.y=b/y),t>2&&(h.z=S/y)}else{g=h,g.x=g.data.x,t>1&&(g.y=g.data.y),t>2&&(g.z=g.data.z);do x+=i[g.data.index];while(g=g.next)}h.value=x}function d(h,x,g,m,y){if(!h.value)return!0;var v=[g,m,y][t-1],b=h.x-r.x,S=t>1?h.y-r.y:0,I=t>2?h.z-r.z:0,T=v-x,E=b*b+S*S+I*I;if(T*T/c<E)return E<l&&(b===0&&(b=Re(o),E+=b*b),t>1&&S===0&&(S=Re(o),E+=S*S),t>2&&I===0&&(I=Re(o),E+=I*I),E<a&&(E=Math.sqrt(a*E)),r.vx+=b*h.value*n/E,t>1&&(r.vy+=S*h.value*n/E),t>2&&(r.vz+=I*h.value*n/E)),!0;if(h.length||E>=l)return;(h.data!==r||h.next)&&(b===0&&(b=Re(o),E+=b*b),t>1&&S===0&&(S=Re(o),E+=S*S),t>2&&I===0&&(I=Re(o),E+=I*I),E<a&&(E=Math.sqrt(a*E)));do h.data!==r&&(T=i[h.data.index]*n/E,r.vx+=b*T,t>1&&(r.vy+=S*T),t>2&&(r.vz+=I*T));while(h=h.next)}return u.initialize=function(h,...x){e=h,o=x.find(g=>typeof g=="function")||Math.random,t=x.find(g=>[1,2,3].includes(g))||2,p()},u.strength=function(h){return arguments.length?(s=typeof h=="function"?h:mo(+h),p(),u):s},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}var dc=window,hc=dc.ShadowRoot&&(dc.ShadyCSS===void 0||dc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,uf=Symbol(),DS=new WeakMap,Es=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==uf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(hc&&t===void 0){let o=r!==void 0&&r.length===1;o&&(t=DS.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&DS.set(r,t))}return t}toString(){return this.cssText}},OS=e=>new Es(typeof e=="string"?e:e+"",void 0,uf),pf=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Es(r,e,uf)},ff=(e,t)=>{hc?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let o=document.createElement("style"),n=dc.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},mc=hc?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let o of t.cssRules)r+=o.cssText;return OS(r)})(e):e;var df,gc=window,PS=gc.trustedTypes,KD=PS?PS.emptyScript:"",MS=gc.reactiveElementPolyfillSupport,mf={toAttribute(e,t){switch(t){case Boolean:e=e?KD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},LS=(e,t)=>t!==e&&(t==t||e==e),hf={attribute:!0,type:String,converter:mf,reflect:!1,hasChanged:LS},lr=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,o)=>{let n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=hf){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){let s=this[t];this[r]=n,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||hf}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)r.unshift(mc(n))}else t!==void 0&&r.push(mc(t));return r}static _$Ep(t,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ff(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=hf){var n;let s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){let i=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:mf).toAttribute(r,o.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var o;let n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){let i=n.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?i.converter:mf;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||LS)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};lr.finalized=!0,lr.elementProperties=new Map,lr.elementStyles=[],lr.shadowRootOptions={mode:"open"},MS?.({ReactiveElement:lr}),((df=gc.reactiveElementVersions)!==null&&df!==void 0?df:gc.reactiveElementVersions=[]).push("1.6.1");var gf,xc=window,Cn=xc.trustedTypes,BS=Cn?Cn.createPolicy("lit-html",{createHTML:e=>e}):void 0,cr=`lit$${(Math.random()+"").slice(9)}$`,xf="?"+cr,XD=`<${xf}>`,Sn=document,ks=(e="")=>Sn.createComment(e),As=e=>e===null||typeof e!="object"&&typeof e!="function",qS=Array.isArray,KS=e=>qS(e)||typeof e?.[Symbol.iterator]=="function",_s=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,US=/-->/g,VS=/>/g,go=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zS=/'/g,WS=/"/g,XS=/^(?:script|style|textarea|title)$/i,jS=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Fr=jS(1),Ge=jS(2),Ne=Symbol.for("lit-noChange"),pt=Symbol.for("lit-nothing"),GS=new WeakMap,vn=Sn.createTreeWalker(Sn,129,null,!1),YS=(e,t)=>{let r=e.length-1,o=[],n,s=t===2?"<svg>":"",i=_s;for(let l=0;l<r;l++){let c=e[l],u,p,f=-1,d=0;for(;d<c.length&&(i.lastIndex=d,p=i.exec(c),p!==null);)d=i.lastIndex,i===_s?p[1]==="!--"?i=US:p[1]!==void 0?i=VS:p[2]!==void 0?(XS.test(p[2])&&(n=RegExp("</"+p[2],"g")),i=go):p[3]!==void 0&&(i=go):i===go?p[0]===">"?(i=n??_s,f=-1):p[1]===void 0?f=-2:(f=i.lastIndex-p[2].length,u=p[1],i=p[3]===void 0?go:p[3]==='"'?WS:zS):i===WS||i===zS?i=go:i===US||i===VS?i=_s:(i=go,n=void 0);let h=i===go&&e[l+1].startsWith("/>")?" ":"";s+=i===_s?c+XD:f>=0?(o.push(u),c.slice(0,f)+"$lit$"+c.slice(f)+cr+h):c+cr+(f===-2?(o.push(void 0),l):h)}let a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[BS!==void 0?BS.createHTML(a):a,o]},xo=class{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[c,u]=YS(t,r);if(this.el=xo.createElement(c,o),vn.currentNode=this.el.content,r===2){let p=this.el.content,f=p.firstChild;f.remove(),p.append(...f.childNodes)}for(;(n=vn.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){let p=[];for(let f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(cr)){let d=u[i++];if(p.push(f),d!==void 0){let h=n.getAttribute(d.toLowerCase()+"$lit$").split(cr),x=/([.?@])?(.*)/.exec(d);l.push({type:1,index:s,name:x[2],strings:h,ctor:x[1]==="."?wc:x[1]==="?"?bc:x[1]==="@"?vc:wo})}else l.push({type:6,index:s})}for(let f of p)n.removeAttribute(f)}if(XS.test(n.tagName)){let p=n.textContent.split(cr),f=p.length-1;if(f>0){n.textContent=Cn?Cn.emptyScript:"";for(let d=0;d<f;d++)n.append(p[d],ks()),vn.nextNode(),l.push({type:2,index:++s});n.append(p[f],ks())}}}else if(n.nodeType===8)if(n.data===xf)l.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(cr,p+1))!==-1;)l.push({type:7,index:s}),p+=cr.length-1}s++}}static createElement(t,r){let o=Sn.createElement("template");return o.innerHTML=t,o}};function yo(e,t,r=e,o){var n,s,i,a;if(t===Ne)return t;let l=o!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[o]:r._$Cl,c=As(t)?void 0:t._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,o)),o!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=yo(e,l._$AS(e,t.values),l,o)),t}var yc=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;let{el:{content:o},parts:n}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:Sn).importNode(o,!0);vn.currentNode=s;let i=vn.nextNode(),a=0,l=0,c=n[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Nr(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new Cc(i,this,t)),this.u.push(u),c=n[++l]}a!==c?.index&&(i=vn.nextNode(),a++)}return s}p(t){let r=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},Nr=class{constructor(t,r,o,n){var s;this.type=2,this._$AH=pt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cm=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=yo(this,t,r),As(t)?t===pt||t==null||t===""?(this._$AH!==pt&&this._$AR(),this._$AH=pt):t!==this._$AH&&t!==Ne&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):KS(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==pt&&As(this._$AH)?this._$AA.nextSibling.data=t:this.T(Sn.createTextNode(t)),this._$AH=t}$(t){var r;let{values:o,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xo.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.p(o);else{let i=new yc(s,this),a=i.v(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let r=GS.get(t.strings);return r===void 0&&GS.set(t.strings,r=new xo(t)),r}k(t){qS(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,n=0;for(let s of t)n===r.length?r.push(o=new Nr(this.O(ks()),this.O(ks()),this,this.options)):o=r[n],o._$AI(s),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},wo=class{constructor(t,r,o,n,s){this.type=1,this._$AH=pt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=pt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){let s=this.strings,i=!1;if(s===void 0)t=yo(this,t,r,0),i=!As(t)||t!==this._$AH&&t!==Ne,i&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=yo(this,a[o+l],r,l),c===Ne&&(c=this._$AH[l]),i||(i=!As(c)||c!==this._$AH[l]),c===pt?t=pt:t!==pt&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!n&&this.j(t)}j(t){t===pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},wc=class extends wo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pt?void 0:t}},jD=Cn?Cn.emptyScript:"",bc=class extends wo{constructor(){super(...arguments),this.type=4}j(t){t&&t!==pt?this.element.setAttribute(this.name,jD):this.element.removeAttribute(this.name)}},vc=class extends wo{constructor(t,r,o,n,s){super(t,r,o,n,s),this.type=5}_$AI(t,r=this){var o;if((t=(o=yo(this,t,r,0))!==null&&o!==void 0?o:pt)===Ne)return;let n=this._$AH,s=t===pt&&n!==pt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==pt&&(n===pt||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Cc=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){yo(this,t)}},QS={P:"$lit$",A:cr,M:xf,C:1,L:YS,R:yc,D:KS,V:yo,I:Nr,H:wo,N:bc,U:vc,B:wc,F:Cc},HS=xc.litHtmlPolyfillSupport;HS?.(xo,Nr),((gf=xc.litHtmlVersions)!==null&&gf!==void 0?gf:xc.litHtmlVersions=[]).push("2.6.1");var ZS=(e,t,r)=>{var o,n;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:t,i=s._$litPart$;if(i===void 0){let a=(n=r?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=i=new Nr(t.insertBefore(ks(),a),a,void 0,r??{})}return i._$AI(e),i};var yf,wf;var Dr=class extends lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ZS(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ne}};Dr.finalized=!0,Dr._$litElement$=!0,(yf=globalThis.litElementHydrateSupport)===null||yf===void 0||yf.call(globalThis,{LitElement:Dr});var JS=globalThis.litElementPolyfillSupport;JS?.({LitElement:Dr});((wf=globalThis.litElementVersions)!==null&&wf!==void 0?wf:globalThis.litElementVersions=[]).push("3.2.2");var t$=e=>e??pt;var{I:R0t}=QS;var e$=e=>e.strings===void 0;var bo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vo=e=>(...t)=>({_$litDirective$:e,values:t}),ur=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var Rs=(e,t)=>{var r,o;let n=e._$AN;if(n===void 0)return!1;for(let s of n)(o=(r=s)._$AO)===null||o===void 0||o.call(r,t,!1),Rs(s,t);return!0},Sc=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},r$=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ZD(t)}};function YD(e){this._$AN!==void 0?(Sc(this),this._$AM=e,r$(this)):this._$AM=e}function QD(e,t=!1,r=0){let o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)Rs(o[s],!1),Sc(o[s]);else o!=null&&(Rs(o,!1),Sc(o));else Rs(this,e)}var ZD=e=>{var t,r,o,n;e.type==bo.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=QD),(r=(n=e)._$AQ)!==null&&r!==void 0||(n._$AQ=YD))},$n=class extends ur{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),r$(this),this.isConnected=t._$AU}_$AO(t,r=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),r&&(Rs(this,t),Sc(this))}setValue(t){if(e$(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var o$=()=>new vf,vf=class{},bf=new WeakMap,n$=vo(class extends $n{render(e){return pt}update(e,[t]){var r;let o=t!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=t,this.dt=(r=e.options)===null||r===void 0?void 0:r.host,this.rt(this.ct=e.element)),pt}rt(e){var t;if(typeof this.Y=="function"){let r=(t=this.dt)!==null&&t!==void 0?t:globalThis,o=bf.get(r);o===void 0&&(o=new WeakMap,bf.set(r,o)),o.get(this.Y)!==void 0&&this.Y.call(this.dt,void 0),o.set(this.Y,e),e!==void 0&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,r;return typeof this.Y=="function"?(t=bf.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.Y):(r=this.Y)===null||r===void 0?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var s$=vo(class extends ur{constructor(e){var t;if(super(e),e.type!==bo.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}let n=e.element.classList;this.nt.forEach(s=>{s in t||(n.remove(s),this.nt.delete(s))});for(let s in t){let i=!!t[s];i===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(i?(n.add(s),this.nt.add(s)):(n.remove(s),this.nt.delete(s)))}return Ne}});var Cf=class extends ur{constructor(t){if(super(t),this.partInfo=t,t.type!==bo.ELEMENT)throw new Error("`events()` can only be used in an element.");this.listeners=new Map}setValue(t){this.detachListeners();let r=o=>function(...n){o.bind(this)(...n)}.bind(this.partInfo.ELEMENT);this.listeners={},Object.entries(t).forEach(([o,n])=>this.listeners[o]=r(n)),this.attachListeners()}reconnected(){this.connect()}disconnected(){this.disconnect()}update(t,[{eventMap:r}]){r&&this.setValue(r)}attachListeners(){this.detachListeners();for(let[t,r]of Object.entries(this.listeners))this.partInfo.element.addEventListener(t,r)}detachListeners(){for(let[t,r]of Object.entries(this.listeners))this.partInfo.element.removeEventListener(t,r)}render(){return Ne}connect(){this.attachListeners()}disconnect(){this.detachListeners()}},i$=vo(Cf);var Sf=(e,t,r={})=>Fr`<svg ${i$({eventMap:r})} class="${s$({icon:!0,[e]:!0})}" height="${t}" width="${t}" viewBox="0 0 48 48">${JD[e]}</svg>`,JD={eye:Ge`<path d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z">`,noeye:Ge`<path d="m31.45 27.05-2.2-2.2q1.3-3.55-1.35-5.9-2.65-2.35-5.75-1.2l-2.2-2.2q.85-.55 1.9-.8 1.05-.25 2.15-.25 3.55 0 6.025 2.475Q32.5 19.45 32.5 23q0 1.1-.275 2.175-.275 1.075-.775 1.875Zm6.45 6.45-2-2q2.45-1.8 4.275-4.025Q42 25.25 42.85 23q-2.5-5.55-7.5-8.775Q30.35 11 24.5 11q-2.1 0-4.3.4-2.2.4-3.45.95L14.45 10q1.75-.8 4.475-1.4Q21.65 8 24.25 8q7.15 0 13.075 4.075Q43.25 16.15 46 23q-1.3 3.2-3.35 5.85-2.05 2.65-4.75 4.65Zm2.9 11.3-8.4-8.25q-1.75.7-3.95 1.075T24 38q-7.3 0-13.25-4.075T2 23q1-2.6 2.775-5.075T9.1 13.2L2.8 6.9l2.1-2.15L42.75 42.6ZM11.15 15.3q-1.85 1.35-3.575 3.55Q5.85 21.05 5.1 23q2.55 5.55 7.675 8.775Q17.9 35 24.4 35q1.65 0 3.25-.2t2.4-.6l-3.2-3.2q-.55.25-1.35.375T24 31.5q-3.5 0-6-2.45T15.5 23q0-.75.125-1.5T16 20.15Zm15.25 7.1Zm-5.8 2.9Z">`,lightMode:Ge`<path d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z">`,darkMode:Ge`<path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z">`},nyt=new class extends $n{};var $f=e=>e?.match(/[+\-*/]/)&&!If(e),If=e=>e?.match(/^".*"$/);var Tf=async(e,t)=>{let r={whitespace:/(?<whitespace>\s+)/,operator:/(?<operator>[+\-*/])/,groupStart:/(?<groupStart>\()/,groupEnd:/(?<groupEnd>\))/,quotedString:/"(?<quotedString>[^"\\]*(?:\\.[^"\\]*)*)"/,number:/(?<number>[0-9]+(?:\.[0-9]+)?(?=[^0-9]|$))/,string:/(?<string>[^\\+\-*/()"]*[^\\+\-*/() ]+)/},o=new RegExp(Object.values(r).map(h=>h.source).join("|"),"g"),s=(h=>[...h.matchAll(o)??{}].flatMap(x=>Object.entries(x?.groups??{}).filter(([,g])=>g!=null).map(([g,m])=>({type:g,val:m}))))(e),i=0,a=()=>s[i++],l=()=>s[i],c=()=>{for(;l()?.type==="whitespace";)a()},u=async()=>{c();let h=a();switch(h.type){case"groupStart":let x=await d();if(c(),a()?.type!=="groupEnd")throw new Error("Expected closing parenthesis");return x;case"quotedString":return await t.lookup(h.val.replace(/\\(.)/g,"$1"));case"number":return await parseFloat(h.val);case"string":return await t.lookup(h.val);default:throw new Error(`Unexpected token: ${h.val}`)}},p=async()=>{c();let h=l();if(h&&h.type==="operator"&&(h.val==="+"||h.val==="-")){i++;let x=await p();return h.val==="+"?x:t.neg(x)}return await u()},f=async()=>{c();let h=await p();for(;;){c();let x=l();if(x&&x.type==="operator"&&(x.val==="*"||x.val==="/")){i++;let g=await p();h=x.val==="*"?t.mul(h,g):t.div(h,g)}else return h}},d=async()=>{c();let h=await f();for(;;){c();let x=l();if(x&&x.type==="operator"&&(x.val==="+"||x.val==="-")){i++;let g=await f();h=x.val==="+"?t.add(h,g):t.sub(h,g)}else return h}};return d().then(h=>h?.array())};var a$=pf`:host{--graph-height:100vh;--graph-width:calc(var(--graph-height) * 4 / 3);--aside-width:min(600px, calc(100vw - var(--graph-width)));--font-weight:200;--color:black;--background-color:hsl(200, 15%, 90%);--disabled-color:#666;--node-fill:hsl(0, 0, calc(50% * var(--pw, 1)));--node-fill-highlight:hsl(240, 100%, calc(50% * var(--pw, 1)));--node-fill-muted:rgb(50% 50% 50%);--link-text-fill:currentColor;--link-rect-fill:var(--background-color);--link-stroke-highlight:rgba(0 0 0 / 1);--link-stroke-muted:rgb(0 0 0 / 0.1);--input-background-color:hsl(225, 40%, 98%);width:100vw;height:100vh;display:grid;grid-auto-flow:column;grid-template-columns:max(300px,var(--aside-width)) auto;font-family:sans-serif;color:var(--color);background-color:var(--background-color);font-size:var(--font-size);font-weight:var(--font-weight)}:host(.dark){--font-weight:200;--brightness:calc(80% + 20% * (1 - var(--pw, 1)));--color:#e7f0ff;--background-color:hsl(240, 15%, 22%);--disabled-color:#888;--node-fill:rgb(var(--brightness) var(--brightness) var(--brightness));--node-fill-highlight:hsl(60, 100%, var(--brightness));--node-fill-muted:rgb(50% 50% 50%);--link-stroke-highlight:rgba(100% 100% 100% / 0.7);--link-stroke-muted:rgb(100% 100% 100% / 0.1);--input-background-color:hsl(240, 10%, 24%)}aside{--label-font-size:14px;--text-area-height:300px;--input-area-height:calc(var(--label-font-size) + var(--text-area-height) + var(--gap));--gap:10px;--aside-padding:16px;position:relative;height:100vh;width:var(--aside-wdth);display:grid;grid-auto-flow:row;grid-template-rows:repeat(2,40px) repeat(2,60px) var(--input-area-height) 1fr;padding:var(--aside-padding);gap:var(--gap);overflow:hidden;border-right:1px solid var(--color)}label{display:block;font-size:var(--label-font-size);font-weight:600;line-height:24px;width:100%;white-space:nowrap}input[disabled],label[disabled]{color:var(--disabled-color)}table{font-size:14px;font-weight:300}svg.icon{fill:var(--color)}svg.icon.eye,svg.icon.noeye{position:relative;top:4px;right:32px;cursor:pointer}input{appearance:none;border:none;background-color:var(--input-background-color);border-bottom:1px solid var(--color);color:var(--color)}input[type=checkbox],input[type=number],input[type=password],input[type=radio],input[type=text]{height:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top;font-size:16px}input[type=checkbox],input[type=radio]{height:16px;width:16px;border:1px solid currentColor;background-color:var(--input-background-color)}input[type=radio]{border-radius:50%}label.inline{display:inline-block;width:auto}input[type=checkbox][checked],input[type=radio][checked]{background-color:var(--color);border:1px solid var(--color);box-shadow:var(--background-color) 0 0 0 2px inset}input[name=apiKey]{position:relative;width:210px;padding-right:20px}input[name=topWordCount]{width:80px}textarea{appearance:none;border:1px solid var(--color);background-color:var(--input-background-color);color:var(--color);display:block;width:calc(100% - var(--aside-padding));height:calc(300px - var(--gap) - var(--label-font-size))}.scroll{overflow:auto;height:auto}table thead tr{top:0;position:sticky}table tbody th{left:0;position:sticky}svg.graph{height:var(--graph-size);width:calc(var(--graph-size) * 4 / 3);display:block;margin:auto}.node circle,.node text{fill:var(--node-fill)}.node.highlight circle,.node.highlight text{fill:var(--node-fill-highlight)}.node{font-size:14px;font-weight:100;text-anchor:middle;alignment-baseline:baseline;cursor:pointer;user-select:none}.node.highlight{font-weight:400}.node.clipped{display:none}.link .label{display:none}.link text{font-size:10px;font-weight:200;fill:var(--link-text-fill);text-anchor:middle;alignment-baseline:middle;user-select:none;transform:scale(var(--pw,1))}.link rect{fill:var(--link-rect-fill);stroke:none;transform:scale(var(--pw,1))}.link.highlight .label{display:block}.link{stroke-width:.1px;pointer-events:none}.link.highlight{stroke:var(--link-stroke-highlight);stroke-width:.4px;z-index:1}.link.highlight line{animation:scaleLink .3s ease}svg.darkMode,svg.lightMode{position:absolute;top:20px;right:20px;pointer-events:all;cursor:pointer}@keyframes scaleLink{0%{transform:scale(0)}30%{transform:scale(0)}to{transform:scale(1)}}`;var Ns=Qe([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]),Ef=({eye:e,target:t,up:r})=>{let o=(u,p)=>[u[0]-p[0],u[1]-p[1],u[2]-p[2]],n=(u,p)=>[u[0]/p,u[1]/p,u[2]/p],s=u=>n(u,Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])),i=(u,p)=>[u[1]*p[2]-u[2]*p[1],u[2]*p[0]-u[0]*p[2],u[0]*p[1]-u[1]*p[0]],a=s(o(e,t)),l=s(i(r,a)),c=i(a,l);return Qe([[l[0],l[1],l[2],-l[0]*e[0]-l[1]*e[1]-l[2]*e[2]],[c[0],c[1],c[2],-c[0]*e[0]-c[1]*e[1]-c[2]*e[2]],[a[0],a[1],a[2],-a[0]*e[0]-a[1]*e[1]-a[2]*e[2]],[0,0,0,1]])},_f=({fov:e,aspect:t,near:r,far:o})=>{let n=1/Math.tan(e/2),s=1/(r-o);return Qe([[n/t,0,0,0],[0,n,0,0],[0,0,(r+o)*s,2*r*o*s],[0,0,-1,0]])};var $c=(e,t)=>q(r=>{let o=Math.sin(t),n=Math.cos(t);return le([[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]],e)}),Fs=(e,t)=>q(r=>{let o=Math.sin(t),n=Math.cos(t);return le([[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]],e)}),l$=(e,{dx:t=0,dy:r=0,dz:o=0})=>q(n=>le([[1,0,0,-t],[0,1,0,-r],[0,0,1,-o],[0,0,0,1]],e));var c$=(e,{world:t,view:r,projection:o})=>q(n=>le(le(o,le(r,t)),Qe(e,[e.length/4,4]),!1,!0).arraySync());var Ic=(e,t,r)=>Math.max(t,Math.min(r,e)),ot=(...e)=>e.find(t=>t!=null&&!isNaN(t)),tO=(e,t,r,o)=>n=>e(n??Ic((Date.now()-(o??=Date.now()))%(r?t:1/0)/t,0,1)),eO=e=>e[0]?.map((t,r)=>e.map(o=>o[r]))??[],u$=e=>eO(e).reduce(({min:t,max:r},o)=>(t.push(Math.min(...o)),r.push(Math.max(...o)),{min:t,max:r}),{min:[],max:[]}),Co=(e,t,{duration:r=750,ease:o=Qp}={})=>{let n=tO(a=>t(e(o(a))),r);n(0);let s=setInterval(n,1e3/30),i=new Af;return setTimeout(a=>{clearInterval(s),n(1),i.resolve()},r),i.promise},p$=e=>{let t=0;return r=>{let o=Math.pow(e,r)/Math.pow(e,t);return t=r,o}},In=(e,t)=>{let r,o=oe(e,t);return n=>{let s=o(n),i=r==null?0:s-r;return r=s,i}};var Xt=e=>+(e?.toFixed(2)??e),kf=class extends Error{},Af=class{done;promises=[];name;reject;resolve;constructor({signal:t,repeat:r=!1,name:o=""}={}){this.done=!r,this.name=o,t?.on("abort",n=>this.abort()),this.repeat()}get promise(){return this.promises.shift()}abort(){this.done=!0,this.reject(new kf(`Future ${this.name?`${this.name} `:""}aborted`))}async*[Symbol.asyncIterator](){do yield*this.promises,this.promises.length=0;while(!this.done)}repeat(){this.promises.push(new Promise((t,r)=>{this.resolve=o=>{this.done||this.repeat(),t(o)},this.reject=o=>{this.done||this.repeat(),r(o)}}))}},f$=(e,t,r,o=!1)=>{let n=0,s=[];return(...i)=>{if(n===t){o||s.push(i);return}e(...i),++n;let a=()=>{if(s.length){let l=s.shift();e(...l),setTimeout(a,r);return}--n};setTimeout(a,r)}};var fe=1536,So={fov:.746,aspect:4/3,near:100,far:500,width:400,height:300},Rf={left:-200,right:200,top:-150,bottom:150,near:100,far:500},d$={eye:[0,0,560],target:[0,0,0],up:[0,1,0]},Ds=class extends Dr{constructor(){super(),this.topWordCount=150,this.forces={charge:-2,link:.8,center:1},this.inputMean={x:0,y:0,w:1},this.sceneScale=1,this.zoomScale=1,this.svgRef=o$(),this.topWords=[],this.svgDefs=Ge``,this.mode="force",this.dimensions="3",this.manageColorScheme(),this.initialized=this.initialize()}shouldUpdate=t=>{t.has("input")&&(this.inputWords=this.input.split(/\n/).filter(i=>i.trim()));let o=["apiKey","inputWords","dimensions","mode"].some(i=>t.has(i)),s=["showTopWords","topWordCount"].some(i=>t.has(i));return t.get("topWordCount")&&(this.showTopWords=!0),t.has("colorSchemeOverride")&&this.manageColorScheme(),t.has("mode")&&(this.mode==="pca"&&this.forceSim&&(this.forceSim.stop(),delete this.forceSim),this.zoomScale=1),t.has("dimensions")&&(this.mode==="force"&&this.forceSim&&(this.forceSim.stop(),delete this.forceSim),this.world=Ns.clone(),this.view=+this.dimensions==2?Ns.clone():Ef(d$),this.projection=+this.dimensions==2?Ns.clone():_f(So),this.zoomScale=1),o||!this.topWords&&s?this.updateGraph():s&&this.drawGraph(),!0};initialize=async t=>{let[r,o]=await Promise.all([this.fetchWords(),this.fetchEmbeddings()]);this.words=r,this.embeddings=o,this.wordIndexes=new Map(this.words.map((n,s)=>[n,s])),this.world=Ns.clone(),this.view=Ef(d$),this.projection=_f(So),this.setupKeys()};setupKeys=t=>{let s=u=>f$(u,30,1e3,!0),i=(u,p)=>s(f=>Co(In(0,p),d=>this.world=u(this.world,d))),a=(u,p)=>s(f=>{console.log({zoom:this.zoomScale,scale2d:u,dz3d:p}),this.zoomScale*u<2&&this.zoomScale*u>.5&&(Co(p$(u),d=>this.zoomScale=Ic(this.zoomScale*d,.5,2)),Co(In(0,p),d=>this.view=l$(this.view,{dz:-d})))}),l={ArrowRight:i(Fs,-.26),ArrowLeft:i(Fs,.26),ArrowDown:i($c,.26),ArrowUp:i($c,-.26),"-":a(.8,-100),"+":a(1.25,100)},c=new Set(["textarea","input"]);window.addEventListener("keydown",u=>{let[p]=u.composedPath?.()??[u.target];if(!c.has(p?.tagName?.toLowerCase())){let f=l[u.key];f?.(u)}})};manageColorScheme=t=>{let r=t??window.matchMedia("(prefers-color-scheme: dark)");this.colorSchemeMediaListener||(this.colorSchemeMediaListener=this.manageColorScheme.bind(this),r.addEventListener("change",this.colorSchemeMediaListener)),this.colorScheme=this.colorSchemeOverride??(r.matches?"dark":"light"),this.classList[this.colorScheme==="dark"?"add":"remove"]("dark")};fetchWords=t=>fetch("./words").then(r=>r.text()).then(r=>r.split(/\n/).filter(o=>o?.trim().length));fetchEmbeddings=t=>fetch("./embeddings").then(r=>r.arrayBuffer()).then(r=>new Float32Array(r));updateGraph=async t=>{if(!this.apiKey||!this.inputWords?.length)return;let r=this.inputWords.filter(n=>!this.wordIndexes.has(n));r.length&&await this.fetchMissingEmbeddings(r),this.embeddingsTensor??=Qe(this.embeddings,[this.words.length,fe]);let o=new Float32Array(this.inputWords.length*fe);this.inputWords.forEach((n,s)=>{let i=this.wordIndexes.get(n)*fe;o.set(this.embeddings.slice(i,i+fe),s*fe)}),this.scores=q(n=>{let s=Qe(o,[this.inputWords.length,fe]);return yu(this.embeddingsTensor,ag(s)).arraySync()}),this.drawGraph()};normalizer=t=>async(...r)=>{let o=await t(...r);return It(o,jm(o))};evaluator={add:this.normalizer(async(t,r)=>K(t,r)),sub:this.normalizer(async(t,r)=>ge(t,r)),mul:this.normalizer(async(t,r)=>H(t,r)),div:this.normalizer(async(t,r)=>It(t,r)),neg:this.normalizer(async t=>zn(t)),lookup:async t=>{let r=this.wordIndexes.get(t)??-1;return r===-1?await this.fetchMissingEmbeddings([t]):this.embeddings.slice(fe*r,fe*(r+1))}};appendEmbeddings=(t,r)=>{let o=new Float32Array(this.embeddings.length+fe*t.length);o.set(this.embeddings),t.forEach((n,s)=>{this.wordIndexes.set(n,this.words.length),this.words.push(n),o.set(r[s].embedding,this.embeddings.length+fe*s)}),this.embeddingsTensor&&(this.embeddingsTensor.dispose(),this.embeddingsTensor=void 0),this.embeddings=o};fetchMissingEmbeddings=async t=>{let r=t.filter($f),o=[];await Promise.all(r.map(l=>{let c=p=>{};return Tf(l,{add:c,sub:c,mul:c,div:c,neg:c,lookup:p=>o.push(p)})}));let n=Array.from(new Set([...t.filter(l=>!$f(l)).map(l=>If(l)?l.slice(1,-1):l),...o.filter(l=>!this.wordIndexes.has(l))])),s=[];n.length&&(s=(await fetch("https://api.openai.com/v1/embeddings",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"text-embedding-ada-002",input:n})}).then(c=>c.json())).data,this.appendEmbeddings(n,s));let i=await Promise.all(r.map(l=>Tf(l,this.evaluator))).then(l=>l.map(c=>({embedding:c})));this.appendEmbeddings(r,i);let a=new Float32Array((n.length+r.length)*fe);for(let[l,c]of n.entries()){let u=t.indexOf(c);u!==-1&&a.set(s[l].embedding,u*fe)}for(let[l,c]of r.entries())a.set(i[l].embedding,t.indexOf(c)*fe);return a};drawGraph=t=>{if(!this.inputWords||!this.scores)return;let r=this.showTopWords?this.scores.map((A,N)=>N).filter(A=>!this.inputWords.includes(this.words[A])).sort((A,N)=>nr(this.scores[N])-nr(this.scores[A])).slice(0,this.topWordCount):[];this.topWords=[...this.inputWords.map(A=>this.wordIndexes.get(A)),...r].sort((A,N)=>nr(this.scores[N])-nr(this.scores[A])).map(A=>({wordIndex:A,word:this.words[A],scores:this.scores[A],inputWord:this.inputWords.indexOf(this.words[A])}));let o=({source:A,target:N})=>[(ot(N.tx,N.px,0)+ot(A.tx,A.px,0))/2,(ot(N.ty,N.py,0)+ot(A.ty,A.py,0))/2].map(Xt).join(" "),n=this.inputWords.map(A=>this.topWords.find(N=>N.word===A)),s=this.topWords.flatMap(({scores:A,word:N,wordIndex:Ct},se)=>A.flatMap((Fe,pr)=>{let ie=this.topWords[se],fr=n[pr],Tc=o({source:ie,target:fr});return ie!==fr?{source:ie,target:fr,score:Fe,midpoint:Tc}:[]})),i=this.topWords.reduce((A,{scores:N})=>N.reduce((Ct,se)=>({min:Math.min(Ct.min,se),max:Math.max(Ct.max,se)}),A),{min:1/0,max:-1/0}),a=A=>1-A,l=a(.925),c=1/(a(i.min)-l),u=A=>Ic((a(A)-l)*c,0,1),p=A=>30+160*pc(u(A.score));this.mode==="force"&&!this.forceSim&&(this.forceSim=lf(this.topWords,+this.dimensions).force("link",sf(s).strength(.8).id(A=>A.word).distance(p)).force("charge",cf().strength(-2).distanceMax(85)).force("center",rf(0,0,0).strength(1)).alpha(.75).alphaDecay(.02).tick()),Co(In(-180*(Math.PI/180),0),A=>this.world=Fs(this.world,A),{ease:Ss,duration:1e3});let f=A=>[A],d=A=>A.wordIndex,h=A=>`${A.source.wordIndex} ${A.target.wordIndex}`,x=ke(this.svgRef.value),g={"2d":{dragSvg:A=>mn(),dragNode:A=>mn().on("start",N=>{N.active||A.alphaTarget(.3).restart(),N.subject.fx=N.subject.x,N.subject.fy=N.subject.y}).on("drag",N=>{N.subject.fx=N.x,N.subject.fy=N.y}).on("end",N=>{N.active||A.alphaTarget(0),N.subject.fx=null,N.subject.fy=null})},"3d":{dragNode:A=>mn(),dragSvg:A=>mn().on("drag",({dx:N,dy:Ct,defaultPrevented:se})=>{if(N===0&&Ct===0)return;let Fe=se?.005:.0015,pr={ease:Ss,duration:1e3};Co(In(0,Ct*Fe*Math.PI),ie=>this.world=$c(this.world,ie),pr),Co(In(0,-N*Fe*Math.PI),ie=>this.world=Fs(this.world,ie),pr)})}},{dragNode:m,dragSvg:y}=g[`${this.dimensions}d`];x.call(y());let v=x.selectAll("g.link").data(s,h).join("g").classed("link",!0).attr("data-words",h),b=v.selectAll("line").data(f).join("line").attr("stroke",A=>`url(#linkGradient-${A.source.inputWord===-1?A.target.wordIndex:A.target.inputWord===-1?A.source.inputWord:[A.source.wordIndex,A.target.wordIndex].sort().join("-")}`),S=v.selectAll("g.label").data(f).join("g").classed("label",!0);S.selectAll("rect").data(f).join("rect").attr("x",-16).attr("y",-6).attr("width",32).attr("height",12),S.selectAll("text").data(f).join("text").text(A=>`${A.score}`.slice(0,6)).attr("transform","translate(0 0.25)");let I=Object.fromEntries(x.selectAll("g.node").data().map(A=>[A.wordIndex,A])),T=350,E=A=>150*Math.random(),R=A=>Xt(ot(A.pw,0)),F=A=>`${Xt(ot(A.tx,A.px,0))} ${Xt(ot(A.ty,A.py,0))}`,U=A=>A.append("g").classed("node",!0).attr("transform",N=>"scale(0) translate(0 0)").attr("transform-origin",F).attr("data-word",d).style("opacity","0").on("click",this.nodeClick.bind(this)).on("mouseenter",this.nodeOver.bind(this)).on("mouseleave",this.nodeLeave.bind(this)).transition("node enter").duration(T).delay(E).style("opacity","1").attr("transform-origin",N=>F).attr("transform",N=>`scale(${R(N)}) translate(${F(N)})`),z=A=>A.attr("transform-origin",F).attr("transform",N=>(N.tx=N.px=N.ox=I[N.wordIndex].px,N.ty=N.py=N.oy=I[N.wordIndex].py,`scale(${R(N)}) translate(${Xt(N.tx)} ${Xt(N.ty)})`)).transition("node update").duration(T).delay(E).attrTween("transform",N=>Ct=>(N.tx=N.ox+(ot(N.px,N.ox)-N.ox)*Ct,N.ty=N.oy+(ot(N.py,N.oy)-N.oy)*Ct,`scale(${R(N)}) translate(${Xt(N.tx)} ${Xt(N.ty)})`)).on("end",N=>N.ox=N.oy=N.tx=N.ty=null),ft=A=>A.transition("node exit").duration(T).delay(E).style("opacity","0").attr("transform-origin",F).attr("transform",N=>`scale(${R(N)}) translate(${N.px} ${N.py})`).remove(),tt=x.selectAll("g.node").data(this.topWords,d).join(U,z,ft).call(m(this.forceSim)).classed("highlight",A=>this.inputWords.includes(A.word));tt.selectAll("text").data(f,d).join("text").text(A=>A.word).attr("transform","translate(0 -2)");let mt=tt.selectAll("circle").data(f,d).join("circle").attr("r",A=>.75*(A.pw??1));this.mode==="force"&&this.forceSim.force("link").links(s).distance(A=>30+160*pc(u(A.score))),this.tickInterval&&clearInterval(this.tickInterval);let gt=0;this.fpsInterval&&clearInterval(this.fpsInterval),this.fpsInterval=setInterval(A=>{console.log(`${gt} frames per second`),gt=0},1e3);let xt,yt=A=>{gt++,this.svgDefs=this.renderSvgDefs();let N=W=>(this.topWords.forEach(({x:Rt,y:ve,z:$o},Ec)=>xt.set([Rt,ve,$o??0,1],Ec*4)),c$(xt,{world:this.world,view:this.view,projection:this.projection})),Ct=W=>{let Rt=this.topWords.map(Or=>Or.x),ve=this.topWords.map(Or=>Or.y),$o={x:nr(Rt)/Rt.length,y:nr(ve)/ve.length},Ec=Array(Rt.length).fill(0),h$=Array(Rt.length).fill(200);return[Rt.map(Or=>Or-$o.x),ve.map(Or=>Or-$o.y),Ec,h$]},se=W=>((!xt||xt.length!==this.topWords.length)&&(xt=new Float32Array(this.topWords.length*4)),+this.dimensions==3?N():Ct()),[Fe,pr,ie,fr]=se(),Tc=+this.dimensions==2?.95/2.5:1;for(let[W,Rt]of this.topWords.entries()){let ve=fr[W];Rt.clipped=+this.dimensions==3&&ie[W]<1,Rt.pw=Xt(Tc*So.width/ve/2),Rt.px=Xt(this.sceneScale*(Rf.left+So.width*((Fe[W]/ve+1)/2))),Rt.py=Xt(this.sceneScale*(Rf.top+So.height*((pr[W]/ve+1)/2)))}let Os=u$(this.topWords.map(W=>[W.px,W.py]));this.sceneScale=.83*(+this.dimensions==2?this.zoomScale:1)*Math.min(So.height/(Os.max[0]-Os.min[0]),So.height/(Os.max[1]-Os.min[1])),this.topWords.forEach(W=>{W.px=Xt(W.px*this.sceneScale*(this.dimensions===2?1:this.zoomScale)),W.py=Xt(W.py*this.sceneScale*(this.dimensions===2?1:this.zoomScale))}),b.classed("clipped",W=>W.source.clipped||W.target.clipped).attr("x1",W=>ot(W.source.tx,W.source.px,0)).attr("y1",W=>ot(W.source.ty,W.source.py,0)).attr("x2",W=>ot(W.target.tx,W.target.px,0)).attr("y2",W=>ot(W.target.ty,W.target.py,0)).attr("transform-origin",o),S.style("display",W=>W.source.clipped||W.target.clipped?"none":null).attr("transform",W=>`translate(${o(W)})`).style("--pw",W=>Xt(ot(W.source.pw+W.target.pw,0)/2)),tt.classed("clipped",W=>W.clipped).attr("transform-origin",W=>`${ot(W.tx,W.px,0)} ${ot(W.ty,W.py,0)}`).attr("transform",W=>`scale(${ot(W.pw,0)}) translate(${ot(W.tx,W.px,0)} ${ot(W.ty,W.py,0)})`).style("--pw",W=>1/ot(W.pw,0)),x.selectAll("g.node, g.link").sort((W,Rt)=>{let ve=W.source?(W.source?.pw+W.target?.pw)/2:W.pw,$o=Rt.source?(Rt.source?.pw+Rt.target?.pw)/2:Rt.pw;return ve-$o})};this.tickInterval=setInterval(yt,1e3/30),this.forceSim.nodes(this.topWords).alpha(1).restart(),this.mode==="force"&&this.forceSim.nodes(this.topWords).alpha(1).restart()};nodeOver=(t,r)=>{let o=ke(this.svgRef.value);o.selectAll(".link.highlight").attr("highlight",null),o.selectAll(`.link[data-words~="${r.wordIndex}"]`).filter(({source:n,target:s})=>!t.target.classList.contains("highlight")||n.inputWord!==-1&&s.inputWord!==-1).classed("highlight",!0)};nodeLeave=(t,r)=>{ke(this.svgRef.value).selectAll(".link.highlight").classed("highlight",null)};nodeClick=(t,r)=>{t.shiftKey?r.inputWord!==-1?this.input=this.input.split(/\n/).filter(o=>o!==r.word).join(`
`):this.input=`${this.input}
${r.word}`:this.input=r.word};change=t=>{let r=t.target.name;switch(t.target.type){case"checkbox":{this[r]=t.target.checked;break}default:{this[r]=t.target.value;break}}};toggleShowApiKey=t=>{this.showApiKey=!this.showApiKey,t.preventDefault(),t.stopPropagation()};viewBox=({left:t,top:r,right:o,bottom:n}={})=>`${t??0} ${r??0} ${(o??0)-(t??0)} ${(n??0)-(r??0)}`;renderSvgDefs=t=>{let r=this.topWords.filter(s=>s.inputWord!==-1),o=r.map(s=>{let{wordIndex:i,px:a,py:l,tx:c,ty:u}=s,p=ot(c,a,0),f=ot(u,l,0);return Ge`<radialGradient id="linkGradient-${i}" cx="${p}" cy="${f}" r="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="transparent"></stop><stop offset="${this.colorScheme==="dark"?30:50}%" stop-color="${this.colorScheme==="dark"?"white":"black"}"></stop></radialGradient>`}),n=r.flatMap((s,i)=>r.slice(i+1).map(a=>{let{wordIndex:l,px:c,py:u,tx:p,ty:f}=s,{wordIndex:d,px:h,py:x,tx:g,ty:m}=a;return Ge`<linearGradient id="linkGradient-${[l,d].sort().join("-")}" x1="${ot(p,c)}" y1="${ot(f,u)}" x2="${ot(g,h)}" y2="${ot(m,x)}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="transparent"></stop><stop offset="30%" stop-color="${this.colorScheme==="dark"?"white":"black"}"></stop><stop offset="80%" stop-color="${this.colorScheme==="dark"?"white":"black"}"></stop><stop offset="100%" stop-color="transparent"></stop></linearGradient>`}));return this.defs=[...o,...n],Ge`${o}${n}`};renderScores=t=>Fr`<div class="scroll"><table class="scores"><thead></thead><tr><th></th>${this.inputWords?.map(r=>Fr`<th>${r}</th>`)??""}</tr><tbody>${this.topWords?.map(r=>Fr`<tr><th>${r.word}</th>${r.scores.map(o=>Fr`<td>${o.toFixed(5)}</td>`)}</tr>`)??""}</tbody></table></div>`;render=t=>Fr`<aside><label>OpenAI API Key: <input name="apiKey" type="${this.showApiKey?"text":"password"}" @change="${this.change}"> ${Sf(this.showApiKey?"noeye":"eye",22,{click:r=>this.toggleShowApiKey(r)})}</label> <label><input name="showTopWords" type="checkbox" @change="${this.change}" ?checked="${this.showTopWords??!1}" .checked="${this.showTopWords??!1}"> Show <input name="topWordCount" type="number" value="${t$(this.topWordCount)}" .value="${this.topWordCount?.toString()??"0"}" @change="${this.change}"> nearest vocabulary words</label> <label>Mode: <label><input name="mode" value="force" type="radio" @change="${this.change}" ?checked="${this.mode==="force"}">Force directed graph</label> <label disabled="disabled"><input disabled="disabled" name="mode" value="pca" type="radio" @change="${this.change}" ?checked="${this.mode=="pca"}">Dimensionality reduction</label></label> <label>Projection: <label><input name="dimensions" value="2" type="radio" @change="${this.change}" ?checked="${+this.dimensions==2}">2 dimensional</label> <label><input name="dimensions" value="3" type="radio" @change="${this.change}" ?checked="${+this.dimensions==3}">3 dimensional</label></label> <label>Input: <textarea name="input" @change="${this.change}" .value="${this.input??""}"></textarea></label> <label>Cosine Similarity Scores ${this.renderScores()}</label></aside><main><svg ${n$(this.svgRef)} class="graph" viewBox="${this.viewBox(Rf)}"><defs>${this.svgDefs}</defs></svg></main>${Sf(this.classList.contains("dark")?"lightMode":"darkMode",36,{click:r=>this.colorSchemeOverride=this.classList.contains("dark")?"light":"dark"})}`};kc(Ds,"styles",a$),kc(Ds,"properties",{apiKey:String,input:String,inputWords:Array,showApiKey:Boolean,initialized:Object,words:Array,embeddings:Array,topWords:Array,showTopWords:Boolean,topWordCount:Number,colorSchemeOverride:String,colorScheme:String,svgDefs:Object,mode:String,dimensions:Number});customElements.define("s-o",Ds);})();
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
//# sourceMappingURL=index-FNPIO6X5.js.map
