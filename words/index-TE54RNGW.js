(()=>{var VS=Object.create;var gs=Object.defineProperty;var WS=Object.getOwnPropertyDescriptor;var zS=Object.getOwnPropertyNames;var GS=Object.getPrototypeOf,HS=Object.prototype.hasOwnProperty;var qS=(e,t,r)=>t in e?gs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var su=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),er=(e,t)=>{for(var r in t)gs(e,r,{get:t[r],enumerable:!0})},KS=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of zS(t))!HS.call(e,n)&&n!==r&&gs(e,n,{get:()=>t[n],enumerable:!(o=WS(t,n))||o.enumerable});return e};var XS=(e,t,r)=>(r=e!=null?VS(GS(e)):{},KS(t||!e||!e.__esModule?gs(r,"default",{value:e,enumerable:!0}):r,e));var iu=(e,t,r)=>(qS(e,typeof t!="symbol"?t+"":t,r),r);var Uh=su((PD,Bh)=>{Bh.exports=ot;var ie=null;try{ie=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function ot(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}ot.prototype.__isLong__;Object.defineProperty(ot.prototype,"__isLong__",{value:!0});function Kt(e){return(e&&e.__isLong__)===!0}ot.isLong=Kt;var Rh={},Nh={};function Ar(e,t){var r,o,n;return t?(e>>>=0,(n=0<=e&&e<256)&&(o=Nh[e],o)?o:(r=nt(e,(e|0)<0?-1:0,!0),n&&(Nh[e]=r),r)):(e|=0,(n=-128<=e&&e<128)&&(o=Rh[e],o)?o:(r=nt(e,e<0?-1:0,!1),n&&(Rh[e]=r),r))}ot.fromInt=Ar;function ae(e,t){if(isNaN(e))return t?_r:le;if(t){if(e<0)return _r;if(e>=Oh)return Lh}else{if(e<=-Fh)return qt;if(e+1>=Fh)return Mh}return e<0?ae(-e,t).neg():nt(e%$o|0,e/$o|0,t)}ot.fromNumber=ae;function nt(e,t,r){return new ot(e,t,r)}ot.fromBits=nt;var ei=Math.pow;function vu(e,t,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return le;if(typeof t=="number"?(r=t,t=!1):t=!!t,r=r||10,r<2||36<r)throw RangeError("radix");var o;if((o=e.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return vu(e.substring(1),t,r).neg();for(var n=ae(ei(r,8)),s=le,i=0;i<e.length;i+=8){var a=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+a),r);if(a<8){var u=ae(ei(r,a));s=s.mul(u).add(ae(l))}else s=s.mul(n),s=s.add(ae(l))}return s.unsigned=t,s}ot.fromString=vu;function ge(e,t){return typeof e=="number"?ae(e,t):typeof e=="string"?vu(e,t):nt(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}ot.fromValue=ge;var kh=1<<16,bI=1<<24,$o=kh*kh,Oh=$o*$o,Fh=Oh/2,Dh=Ar(bI),le=Ar(0);ot.ZERO=le;var _r=Ar(0,!0);ot.UZERO=_r;var Io=Ar(1);ot.ONE=Io;var Ph=Ar(1,!0);ot.UONE=Ph;var bu=Ar(-1);ot.NEG_ONE=bu;var Mh=nt(-1,2147483647,!1);ot.MAX_VALUE=Mh;var Lh=nt(-1,-1,!0);ot.MAX_UNSIGNED_VALUE=Lh;var qt=nt(0,-2147483648,!1);ot.MIN_VALUE=qt;var F=ot.prototype;F.toInt=function(){return this.unsigned?this.low>>>0:this.low};F.toNumber=function(){return this.unsigned?(this.high>>>0)*$o+(this.low>>>0):this.high*$o+(this.low>>>0)};F.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(qt)){var r=ae(t),o=this.div(r),n=o.mul(r).sub(this);return o.toString(t)+n.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=ae(ei(t,6),this.unsigned),i=this,a="";;){var l=i.div(s),u=i.sub(l.mul(s)).toInt()>>>0,c=u.toString(t);if(i=l,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};F.getHighBits=function(){return this.high};F.getHighBitsUnsigned=function(){return this.high>>>0};F.getLowBits=function(){return this.low};F.getLowBitsUnsigned=function(){return this.low>>>0};F.getNumBitsAbs=function(){if(this.isNegative())return this.eq(qt)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,r=31;r>0&&!(t&1<<r);r--);return this.high!=0?r+33:r+1};F.isZero=function(){return this.high===0&&this.low===0};F.eqz=F.isZero;F.isNegative=function(){return!this.unsigned&&this.high<0};F.isPositive=function(){return this.unsigned||this.high>=0};F.isOdd=function(){return(this.low&1)===1};F.isEven=function(){return(this.low&1)===0};F.equals=function(t){return Kt(t)||(t=ge(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};F.eq=F.equals;F.notEquals=function(t){return!this.eq(t)};F.neq=F.notEquals;F.ne=F.notEquals;F.lessThan=function(t){return this.comp(t)<0};F.lt=F.lessThan;F.lessThanOrEqual=function(t){return this.comp(t)<=0};F.lte=F.lessThanOrEqual;F.le=F.lessThanOrEqual;F.greaterThan=function(t){return this.comp(t)>0};F.gt=F.greaterThan;F.greaterThanOrEqual=function(t){return this.comp(t)>=0};F.gte=F.greaterThanOrEqual;F.ge=F.greaterThanOrEqual;F.compare=function(t){if(Kt(t)||(t=ge(t)),this.eq(t))return 0;var r=this.isNegative(),o=t.isNegative();return r&&!o?-1:!r&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};F.comp=F.compare;F.negate=function(){return!this.unsigned&&this.eq(qt)?qt:this.not().add(Io)};F.neg=F.negate;F.add=function(t){Kt(t)||(t=ge(t));var r=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=t.high>>>16,a=t.high&65535,l=t.low>>>16,u=t.low&65535,c=0,p=0,f=0,d=0;return d+=s+u,f+=d>>>16,d&=65535,f+=n+l,p+=f>>>16,f&=65535,p+=o+a,c+=p>>>16,p&=65535,c+=r+i,c&=65535,nt(f<<16|d,c<<16|p,this.unsigned)};F.subtract=function(t){return Kt(t)||(t=ge(t)),this.add(t.neg())};F.sub=F.subtract;F.multiply=function(t){if(this.isZero())return le;if(Kt(t)||(t=ge(t)),ie){var r=ie.mul(this.low,this.high,t.low,t.high);return nt(r,ie.get_high(),this.unsigned)}if(t.isZero())return le;if(this.eq(qt))return t.isOdd()?qt:le;if(t.eq(qt))return this.isOdd()?qt:le;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Dh)&&t.lt(Dh))return ae(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=t.high>>>16,l=t.high&65535,u=t.low>>>16,c=t.low&65535,p=0,f=0,d=0,h=0;return h+=i*c,d+=h>>>16,h&=65535,d+=s*c,f+=d>>>16,d&=65535,d+=i*u,f+=d>>>16,d&=65535,f+=n*c,p+=f>>>16,f&=65535,f+=s*u,p+=f>>>16,f&=65535,f+=i*l,p+=f>>>16,f&=65535,p+=o*c+n*u+s*l+i*a,p&=65535,nt(d<<16|h,p<<16|f,this.unsigned)};F.mul=F.multiply;F.divide=function(t){if(Kt(t)||(t=ge(t)),t.isZero())throw Error("division by zero");if(ie){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var r=(this.unsigned?ie.div_u:ie.div_s)(this.low,this.high,t.low,t.high);return nt(r,ie.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?_r:le;var o,n,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return _r;if(t.gt(this.shru(1)))return Ph;s=_r}else{if(this.eq(qt)){if(t.eq(Io)||t.eq(bu))return qt;if(t.eq(qt))return Io;var i=this.shr(1);return o=i.div(t).shl(1),o.eq(le)?t.isNegative()?Io:bu:(n=this.sub(t.mul(o)),s=o.add(n.div(t)),s)}else if(t.eq(qt))return this.unsigned?_r:le;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=le}for(n=this;n.gte(t);){o=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),l=a<=48?1:ei(2,a-48),u=ae(o),c=u.mul(t);c.isNegative()||c.gt(n);)o-=l,u=ae(o,this.unsigned),c=u.mul(t);u.isZero()&&(u=Io),s=s.add(u),n=n.sub(c)}return s};F.div=F.divide;F.modulo=function(t){if(Kt(t)||(t=ge(t)),ie){var r=(this.unsigned?ie.rem_u:ie.rem_s)(this.low,this.high,t.low,t.high);return nt(r,ie.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};F.mod=F.modulo;F.rem=F.modulo;F.not=function(){return nt(~this.low,~this.high,this.unsigned)};F.and=function(t){return Kt(t)||(t=ge(t)),nt(this.low&t.low,this.high&t.high,this.unsigned)};F.or=function(t){return Kt(t)||(t=ge(t)),nt(this.low|t.low,this.high|t.high,this.unsigned)};F.xor=function(t){return Kt(t)||(t=ge(t)),nt(this.low^t.low,this.high^t.high,this.unsigned)};F.shiftLeft=function(t){return Kt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?nt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):nt(0,this.low<<t-32,this.unsigned)};F.shl=F.shiftLeft;F.shiftRight=function(t){return Kt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?nt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):nt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};F.shr=F.shiftRight;F.shiftRightUnsigned=function(t){if(Kt(t)&&(t=t.toInt()),t&=63,t===0)return this;var r=this.high;if(t<32){var o=this.low;return nt(o>>>t|r<<32-t,r>>>t,this.unsigned)}else return t===32?nt(r,0,this.unsigned):nt(r>>>t-32,0,this.unsigned)};F.shru=F.shiftRightUnsigned;F.shr_u=F.shiftRightUnsigned;F.toSigned=function(){return this.unsigned?nt(this.low,this.high,!1):this};F.toUnsigned=function(){return this.unsigned?this:nt(this.low,this.high,!0)};F.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};F.toBytesLE=function(){var t=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};F.toBytesBE=function(){var t=this.high,r=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};ot.fromBytes=function(t,r,o){return o?ot.fromBytesLE(t,r):ot.fromBytesBE(t,r)};ot.fromBytesLE=function(t,r){return new ot(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,r)};ot.fromBytesBE=function(t,r){return new ot(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],r)}});var fm=su(()=>{});var dm=su(()=>{});var cn=class{constructor(t,r){this.backend=t,this.dataMover=r,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,r){this.dataIdsCount++,this.data.set(t,r)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Cr=class{refCount(t){return Ht("refCount")}incRef(t){return Ht("incRef")}timerAvailable(){return!0}time(t){return Ht("time")}read(t){return Ht("read")}readSync(t){return Ht("readSync")}readToGPU(t,r){return Ht("readToGPU")}numDataIds(){return Ht("numDataIds")}disposeData(t,r){return Ht("disposeData")}write(t,r,o){return Ht("write")}move(t,r,o,n,s){return Ht("move")}createTensorFromGPUData(t,r,o){return Ht("createTensorFromGPUData")}memory(){return Ht("memory")}floatPrecision(){return Ht("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Ht("dispose")}};function Ht(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function uf(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,t--,xs(e,t,r)}function jS(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,o=0;for(;r>0;)o=Math.random()*r|0,r--,xs(e,r,o),xs(t,r,o)}function uo(e,t,r){return Math.max(e,Math.min(t,r))}function YS(e){return e%2===0?e:e+1}function xs(e,t,r){let o=e[t];e[t]=e[r],e[r]=o}function QS(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function ZS(e,t){let r=Math.random();return t*r+(1-r)*e}function JS(e,t){let r=0;for(let o=0;o<e.length;o++){let n=Number(e[o])-Number(t[o]);r+=n*n}return r}function k(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function ys(e,t,r=""){k(co(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function au(e){k(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ct(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function tI(e){return e.length===0}function co(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function pn(e){return e%1===0}function eI(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function rI(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function oI(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return uf(t),t}function Ir(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function nI(e,t=n=>0,r,o){return new Promise((n,s)=>{let i=0,a=()=>{if(e()){n();return}i++;let l=t(i);if(r!=null&&i>=r){s();return}o!=null?o(a,l):setTimeout(a,l)};a()})}function sI(e,t){let r=1,o=-1;for(let s=0;s<e.length;++s)if(e[s]>=0)r*=e[s];else if(e[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(e[s]<0)throw Error(`Shapes can not be < 0. Found ${e[s]} at dim ${s}`);if(o===-1){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(r===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let n=e.slice();return n[o]=t/r,n}function ws(e,t){let r=t.length;return e=e==null?t.map((o,n)=>n):[].concat(e),k(e.every(o=>o>=-r&&o<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),k(e.every(o=>pn(o)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(o=>o<0?r+o:o)}function iI(e,t){let r=[],o=[],n=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||n?null:ws(t,e).sort(),i=0;for(let a=0;a<e.length;++a){if(s!=null){if(s[i]===a&&e[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${e[a]}' is not 1`);(s[i]==null||s[i]>a)&&e[a]===1&&(r.push(e[a]),o.push(a)),s[i]<=a&&i++}e[a]!==1&&(r.push(e[a]),o.push(a))}return{newShape:r,keptDims:o}}function aI(e,t){return bs(e,t)}function bs(e,t){let r=null;if(e==null||e==="float32")r=new Float32Array(t);else if(e==="int32")r=new Int32Array(t);else if(e==="bool")r=new Uint8Array(t);else if(e==="string")r=new Array(t);else throw new Error(`Unknown data type ${e}`);return r}function lu(e,t){for(let r=0;r<e.length;r++){let o=e[r];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function uu(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function lI(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function po(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function cu(e){if(e==null)return 0;let t=0;return e.forEach(r=>t+=r.length),t}function fo(e){return typeof e=="string"||e instanceof String}function cf(e){return typeof e=="boolean"}function pf(e){return typeof e=="number"}function rr(e){return Array.isArray(e)?rr(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":pf(e)?"float32":fo(e)?"string":cf(e)?"bool":"float32"}function ho(e){return!!(e&&e.constructor&&e.call&&e.apply)}function mo(e,t){for(let r=t;r<e;++r)if(e%r===0)return r;return e}function $e(e){let t=e.length;if(t<2)return[];let r=new Array(t-1);r[t-2]=e[t-1];for(let o=t-3;o>=0;--o)r[o]=r[o+1]*e[o+1];return r}function ff(e,t,r,o=!1){let n=new Array;if(t.length===1){let s=t[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=r[e+i]}else{let s=t[0],i=t.slice(1),a=i.reduce((l,u)=>l*u)*(o?2:1);for(let l=0;l<s;l++)n[l]=ff(e+l*a,i,r,o)}return n}function Sr(e,t,r=!1){if(e.length===0)return t[0];let o=e.reduce((n,s)=>n*s)*(r?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return ff(0,e,t,r)}function uI(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function pu(e,t){let r=go(e,t);for(let o=0;o<r.length;o++)r[o]=1;return r}function go(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function cI(e,t){let r=e.reduce((o,n)=>o*n,1);if(t==null||t==="float32")return Sr(e,new Float32Array(r));if(t==="int32")return Sr(e,new Int32Array(r));if(t==="bool")return Sr(e,new Uint8Array(r));throw new Error(`Unknown data type ${t}`)}function me(e){e.forEach(t=>{k(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function pI(e,t,r){if(t===0)return 0;if(t===1)return e[0];let o=e[e.length-1];for(let n=0;n<e.length-1;++n)o+=r[n]*e[n];return o}function fI(e,t,r){if(t===0)return[];if(t===1)return[e];let o=new Array(t);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(e/r[n]),e-=o[n]*r[n];return o[o.length-1]=e,o}function $r(e){return e&&e.then&&typeof e.then=="function"}var df="tfjsflags",fn=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=hI,this.populateURLFlags()}setPlatform(t,r){this.platform!=null&&($().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=r}registerFlag(t,r,o){if(this.flagRegistry[t]={evaluationFn:r,setHook:o},this.urlFlags[t]!=null){let n=this.urlFlags[t];$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let r=this.evaluateFlag(t);if($r(r))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=r,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,r){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=r,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(r)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);df in t&&t[df].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=gI(n,s)})}};function hI(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(r,...o)=>(mI(t,o[0],o[1]),o.join("="))),t}function mI(e,t,r){e[decodeURIComponent(t)]=decodeURIComponent(r||"")}function gI(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function $(){return fu}var fu=null;function hf(e){fu=e}var du;function hu(){if(du==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");du=e}return du}function xI(){let e=hu();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function dn(e,t){let r=xI();if(r.has(e))return r.get(e);{let o=t();return r.set(e,o),r.get(e)}}var hn="Abs",mf="Acos",gf="Acosh",or="Add",xf="AddN",yf="All",wf="Any",bf="ArgMax",vf="ArgMin",Cf="Asin",Sf="Asinh",If="Atan",$f="Atanh",Tf="Atan2",Ef="AvgPool",_f="AvgPoolGrad",Af="AvgPool3D",Rf="AvgPool3DGrad",vs="BatchMatMul",Nf="BatchToSpaceND",kf="Bincount";var Ff="BroadcastArgs",Tr="Cast",Cs="Ceil",Df="ClipByValue",mn="Complex",Ss="ComplexAbs",Of="Concat",Pf="Conv2D",Mf="Conv2DBackpropFilter",Lf="Conv2DBackpropInput",Bf="Conv3D",Uf="Conv3DBackpropFilterV2",Vf="Conv3DBackpropInputV2",Wf="Cos",zf="Cosh",Gf="Cumprod",Hf="Cumsum",qf="CropAndResize",Kf="DenseBincount",Xf="DepthToSpace",jf="DepthwiseConv2dNative",Yf="DepthwiseConv2dNativeBackpropFilter",Qf="DepthwiseConv2dNativeBackpropInput",Zf="Diag",Jf="Dilation2D";var Is="RealDiv",td="Einsum",$s="Elu",ed="EluGrad",rd="Erf",Ts="Equal",Es="Exp",od="ExpandDims",_s="Expm1",nd="FFT",As="Fill",sd="FlipLeftRight",Rs="Floor",xo="FloorDiv",id="FusedBatchNorm",ad="GatherV2",ld="GatherNd",Ns="Greater",ks="GreaterEqual",Er="Identity",ud="IFFT",Fs="Imag",cd="IsFinite",pd="IsInf",fd="IsNan",Ds="LeakyRelu",Os="Less",Ps="LessEqual",dd="LinSpace",Ms="Log",hd="Log1p",md="LogicalAnd",gd="LogicalNot",xd="LogicalOr";var yd="LRN",wd="LRNGrad";var Ls="Max",yo="Maximum",bd="MaxPool",vd="MaxPoolGrad",Cd="MaxPool3D",Sd="MaxPool3DGrad",Id="MaxPoolWithArgmax",$d="Mean",Bs="Min",Us="Minimum",Td="MirrorPad",Ed="Mod",_d="Multinomial",wo="Multiply",gn="Neg",Vs="NotEqual",Ad="NonMaxSuppressionV3",Rd="NonMaxSuppressionV4",Nd="NonMaxSuppressionV5",kd="OnesLike",Fd="OneHot",Dd="Pack",Od="PadV2";var Ws="Pow",zs="Prelu",mu="Prod",Pd="RaggedGather",Md="RaggedRange",Ld="RaggedTensorToTensor",Bd="Range",xn="Real",Ud="Reciprocal",Gs="Relu",Hs="Reshape",Vd="ResizeNearestNeighbor",Wd="ResizeNearestNeighborGrad",zd="ResizeBilinear",Gd="ResizeBilinearGrad",qs="Relu6",Hd="Reverse",qd="Round",Ks="Rsqrt",Kd="ScatterNd",Xd="TensorScatterUpdate",jd="SearchSorted",Yd="Select",Qd="Selu",gu="Slice",Zd="Sin",Jd="Sinh",th="Sign",bo="Sigmoid",eh="Softplus",vo="Sqrt",Xs="Sum",rh="SpaceToBatchND",oh="SplitV",nh="Softmax",sh="SparseFillEmptyRows",ih="SparseReshape",ah="SparseSegmentMean",lh="SparseSegmentSum",uh="SparseToDense",js="SquaredDifference",ch="Square",Ys="StaticRegexReplace",ph="StridedSlice",fh="StringNGrams",dh="StringSplit",hh="StringToHashBucketFast",Co="Sub",mh="Tan",gh="Tanh",Qs="Tile",xh="TopK",yh="Transform",So="Transpose",wh="Unique",bh="Unpack",vh="UnsortedSegmentSum";var Zs="ZerosLike",Js="Step",Ch="FromPixels",Sh="RotateWithOffset",Ih="_FusedMatMul",$h="FusedConv2D",Th="FusedDepthwiseConv2D";function Oe(...e){$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(...e)}function yI(...e){$().getBool("IS_TEST")||$().getBool("PROD")||console.log(...e)}var ti=dn("kernelRegistry",()=>new Map),wI=dn("gradRegistry",()=>new Map);function xu(e,t){let r=Ah(e,t);return ti.get(r)}function yu(e){return wI.get(e)}function wu(e){let t=ti.entries(),r=[];for(;;){let{done:o,value:n}=t.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===e&&r.push(i)}return r}function _h(e){let{kernelName:t,backendName:r}=e,o=Ah(t,r);ti.has(o)&&Oe(`The kernel '${t}' for backend '${r}' is already registered`),ti.set(o,e)}function Ah(e,t){return`${t}_${e}`}var w={};er(w,{arraysEqual:()=>co,assert:()=>k,assertNonNegativeIntegerDimensions:()=>me,assertNonNull:()=>au,assertShapesMatch:()=>ys,bytesFromStringArray:()=>cu,bytesPerElement:()=>po,checkConversionForErrors:()=>lu,clamp:()=>uo,computeStrides:()=>$e,convertBackendValuesAndArrayBuffer:()=>uI,createScalarValue:()=>TI,createShuffledIndices:()=>oI,decodeString:()=>_o,distSquared:()=>JS,encodeString:()=>Eo,fetch:()=>_I,fingerPrint64:()=>$I,flatten:()=>sr,getArrayFromDType:()=>bs,getTypedArrayFromDType:()=>aI,hasEncodingLoss:()=>lI,hexToLong:()=>yn,indexToLoc:()=>fI,inferDtype:()=>rr,inferFromImplicitShape:()=>sI,isBoolean:()=>cf,isFunction:()=>ho,isInt:()=>pn,isNumber:()=>pf,isPromise:()=>$r,isScalarShape:()=>tI,isString:()=>fo,isTypedArray:()=>Ft,isValidDtype:()=>uu,locToIndex:()=>pI,makeOnesTypedArray:()=>pu,makeZerosNestedTypedArray:()=>cI,makeZerosTypedArray:()=>go,nearestDivisor:()=>mo,nearestLargerEven:()=>YS,now:()=>kr,parseAxisParam:()=>ws,randUniform:()=>ZS,repeatedTry:()=>nI,rightPad:()=>Ir,shuffle:()=>uf,shuffleCombo:()=>jS,sizeFromShape:()=>ct,sizeToSquarishShape:()=>rI,squeezeShape:()=>iI,sum:()=>QS,swap:()=>xs,tanh:()=>eI,toNestedArray:()=>Sr,toTypedArray:()=>To});var Su=XS(Uh());var Nr=Su.default||Su;function yn(e){return Nr.fromString(e,!0,16)}var Wh=yn("c3a5c85c97cb3127"),Rr=yn("b492b66fbe98f273"),Rt=yn("9ae16a3b2f90404f");function Cu(e){return e.xor(e.shru(47))}function zh(e,t,r){let o=e.slice(t,t+r);return Nr.fromBytes(Array.from(o),!0,!0)}function tt(e,t){return zh(e,t,8)}function Vh(e,t){return zh(e,t,4)}function xt(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function nr(e,t,r=yn("9ddfea08eb382d69")){let o=e.xor(t).mul(r);o=o.xor(o.shru(47));let n=t.xor(o).mul(r);return n=n.xor(n.shru(47)),n=n.mul(r),n}function vI(e,t,r,o,n,s){n=n.add(e),s=xt(s.add(n).add(o),21);let i=n;return n=n.add(t),n=n.add(r),s=s.add(xt(n,44)),[n.add(o),s.add(i)]}function ri(e,t,r,o){return vI(tt(e,t),tt(e,t+8),tt(e,t+16),tt(e,t+24),r,o)}function CI(e,t=e.length){if(t>=8){let r=Rt.add(t*2),o=tt(e,0).add(Rt),n=tt(e,t-8),s=xt(n,37).mul(r).add(o),i=xt(o,25).add(n).mul(r);return nr(s,i,r)}if(t>=4){let r=Rt.add(t*2),o=Vh(e,0);return nr(o.shl(3).add(t),Vh(e,t-4),r)}if(t>0){let r=e[0],o=e[t>>1],n=e[t-1],s=r+(o<<8),i=t+(n<<2);return Cu(Rt.mul(s).xor(Wh.mul(i))).mul(Rt)}return Rt}function SI(e,t=e.length){let r=Rt.add(t*2),o=tt(e,0).mul(Rr),n=tt(e,8),s=tt(e,t-8).mul(r),i=tt(e,t-16).mul(Rt);return nr(xt(o.add(n),43).add(xt(s,30)).add(i),o.add(xt(n.add(Rt),18)).add(s),r)}function II(e,t=e.length){let r=Rt.add(t*2),o=tt(e,0).mul(Rt),n=tt(e,8),s=tt(e,t-8).mul(r),i=tt(e,t-16).mul(Rt),a=xt(o.add(n),43).add(xt(s,30)).add(i),l=nr(a,o.add(xt(n.add(Rt),18)).add(s),r),u=tt(e,16).mul(r),c=tt(e,24),p=a.add(tt(e,t-32)).mul(r),f=l.add(tt(e,t-24)).mul(r);return nr(xt(u.add(c),43).add(xt(p,30)).add(f),u.add(xt(c.add(o),18)).add(p),r)}function $I(e,t=e.length){let r=Nr.fromNumber(81,!0);if(t<=32)return t<=16?CI(e,t):SI(e,t);if(t<=64)return II(e,t);let o=r,n=r.mul(Rr).add(113),s=Cu(n.mul(Rt).add(113)).mul(Rt),i=[Nr.UZERO,Nr.UZERO],a=[Nr.UZERO,Nr.UZERO];o=o.mul(Rt).add(tt(e,0));let l=0,u=(t-1>>6)*64,c=u+(t-1&63)-63;do o=xt(o.add(n).add(i[0]).add(tt(e,l+8)),37).mul(Rr),n=xt(n.add(i[1]).add(tt(e,l+48)),42).mul(Rr),o=o.xor(a[1]),n=n.add(i[0]).add(tt(e,l+40)),s=xt(s.add(a[0]),33).mul(Rr),i=ri(e,l,i[1].mul(Rr),o.add(a[0])),a=ri(e,l+32,s.add(a[1]),n.add(tt(e,l+16))),[s,o]=[o,s],l+=64;while(l!==u);let p=Rr.add(s.and(255).shl(1));return l=c,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=xt(o.add(n).add(i[0]).add(tt(e,l+8)),37).mul(p),n=xt(n.add(i[1]).add(tt(e,l+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(tt(e,l+40))),s=xt(s.add(a[0]),33).mul(p),i=ri(e,l,i[1].mul(p),o.add(a[0])),a=ri(e,l+32,s.add(a[1]),n.add(tt(e,l+16))),[s,o]=[o,s],nr(nr(i[0],a[0],p).add(Cu(n).mul(Wh)).add(s),nr(i[1],a[1],p).add(o),p)}function TI(e,t){return t==="string"?Eo(e):To([e],t)}function EI(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function To(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=sr(e)),$().getBool("DEBUG")&&lu(e,t),EI(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){let r=new Uint8Array(e.length);for(let o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}else throw new Error(`Unknown data type ${t}`)}function kr(){return $().platform.now()}function _I(e,t){return $().platform.fetch(e,t)}function Eo(e,t="utf-8"){return t=t||"utf-8",$().platform.encode(e,t)}function _o(e,t="utf-8"){return t=t||"utf-8",$().platform.decode(e,t)}function Ft(e){return $().platform.isTypedArray(e)}function sr(e,t=[],r=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||$r(e)||e==null||Ft(e)&&r)t.push(e);else if(Array.isArray(e)||Ft(e))for(let o=0;o<e.length;++o)sr(e[o],t,r);else{let o=-1;for(let n of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)sr(e[n],t,r)}return t}var oi=class{constructor(t,r){this.backendTimer=t,this.logger=r,r==null&&(this.logger=new Iu)}profileKernel(t,r,o){let n,s=()=>{n=o()},i,a=kr();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let u of n)u.dataSync();i=Promise.resolve({kernelMs:kr()-a})}if($().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<n.length;u++){let c=n[u];c.data().then(p=>{AI(p,c.dtype,t)})}return{kernelName:t,outputs:n,inputs:r,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:r,outputs:o,timeMs:n,inputs:s,extraInfo:i}=t;o.forEach(a=>{Promise.all([a.data(),n,i]).then(l=>{this.logger.logKernelProfile(r,a,l[0],l[1],s,l[2])})})}};function AI(e,t,r){if(t!=="float32")return!1;for(let o=0;o<e.length;o++){let n=e[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${r}'`),!0}return!1}var Iu=class{logKernelProfile(t,r,o,n,s,i){let a=typeof n=="number"?Ir(`${n}ms`,9):n.error,l=Ir(t,25),u=r.rank,c=r.size,p=Ir(r.shape.toString(),14),f="";for(let d in s){let h=s[d];if(h!=null){let x=h.shape||r.shape,g=x.length;f+=`${d}: ${g}D ${g>0?x:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${p}	%c${c}	%c${f}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function Gh(e,t,r){let o={},n={};for(let l=0;l<t.length;l++)o[t[l].id]=!0;for(let l=0;l<e.length;l++){let u=e[l],c=u.inputs;for(let p in c){let f=c[p],d=!1;for(let h=0;h<t.length;h++)if(o[f.id]){u.outputs.forEach(x=>o[x.id]=!0),d=!0,n[u.id]=!0;break}if(d)break}}let s={};s[r.id]=!0;let i={};for(let l=e.length-1;l>=0;l--){let u=e[l],c=u.inputs;for(let p=0;p<u.outputs.length;p++)if(s[u.outputs[p].id]){for(let f in c)s[c[f].id]=!0,i[u.id]=!0;break}}let a=[];for(let l=0;l<e.length;l++){let u=e[l];if(n[u.id]&&i[u.id]){let c={};for(let f in u.inputs){let d=u.inputs[f];o[d.id]&&(c[f]=d)}let p=Object.assign({},u);p.inputs=c,p.outputs=u.outputs,a.push(p)}}return a}function Hh(e,t,r,o){for(let n=t.length-1;n>=0;n--){let s=t[n],i=[];if(s.outputs.forEach(l=>{let u=e[l.id];u!=null?i.push(u):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let u=r(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);let c=s.inputs[l];if(!co(u.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(e[c.id]==null)e[c.id]=u;else{let p=e[c.id];e[c.id]=o(p,u),p.dispose()}}}}var qh=20,wn=3,$u=7;function Kh(e,t,r,o){let n=$e(t),s=RI(e,t,r,n),i=t.length,a=ni(e,t,r,n,s),l=["Tensor"];return o&&(l.push(`  dtype: ${r}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function RI(e,t,r,o){let n=ct(t),s=o[o.length-1],i=new Array(s).fill(0),a=t.length,l=r==="complex64"?vn(e):e;if(a>1)for(let u=0;u<n/s;u++){let c=u*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],bn(l[c+p],0,r).length)}return i}function bn(e,t,r){let o;return Array.isArray(e)?o=`${parseFloat(e[0].toFixed($u))} + ${parseFloat(e[1].toFixed($u))}j`:fo(e)?o=`'${e}'`:r==="bool"?o=Xh(e):o=parseFloat(e.toFixed($u)).toString(),Ir(o,t)}function Xh(e){return e===0?"false":"true"}function ni(e,t,r,o,n,s=!0){let i=r==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(r==="complex64"){let x=vn(e);return[bn(x[0],0,r)]}return r==="bool"?[Xh(e[0])]:[e[0].toString()]}if(l===1){if(a>qh){let g=wn*i,m=Array.from(e.slice(0,g)),y=Array.from(e.slice((a-wn)*i,a*i));return r==="complex64"&&(m=vn(m),y=vn(y)),["["+m.map((C,b)=>bn(C,n[b],r)).join(", ")+", ..., "+y.map((C,b)=>bn(C,n[a-wn+b],r)).join(", ")+"]"]}return["["+(r==="complex64"?vn(e):Array.from(e)).map((g,m)=>bn(g,n[m],r)).join(", ")+"]"]}let u=t.slice(1),c=o.slice(1),p=o[0]*i,f=[];if(a>qh){for(let x=0;x<wn;x++){let g=x*p,m=g+p;f.push(...ni(e.slice(g,m),u,r,c,n,!1))}f.push("...");for(let x=a-wn;x<a;x++){let g=x*p,m=g+p;f.push(...ni(e.slice(g,m),u,r,c,n,x===a-1))}}else for(let x=0;x<a;x++){let g=x*p,m=g+p;f.push(...ni(e.slice(g,m),u,r,c,n,x===a-1))}let d=l===2?",":"";f[0]="["+(a>0?f[0]+d:"");for(let x=1;x<f.length-1;x++)f[x]=" "+f[x]+d;let h=`,
`;for(let x=2;x<l;x++)h+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(s?"":h),f}function vn(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var Te=class{constructor(t,r,o){if(this.dtype=r,this.shape=t.slice(),this.size=ct(t),o!=null){let n=o.length;k(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(r==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||bs(r,this.size),this.strides=$e(t)}set(t,...r){r.length===0&&(r=[0]),k(r.length===this.rank,()=>`The number of provided coordinates (${r.length}) must match the rank (${this.rank})`);let o=this.locToIndex(r);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let r=0;for(let n of t){if(n<0||n>=this.shape[r]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}r++}let o=t[t.length-1];for(let n=0;n<t.length-1;++n)o+=this.strides[n]*t[n];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let r=t[t.length-1];for(let o=0;o<t.length-1;++o)r+=this.strides[o]*t[o];return r}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let r=new Array(this.shape.length);for(let o=0;o<r.length-1;++o)r[o]=Math.floor(t/this.strides[o]),t-=r[o]*this.strides[o];return r[r.length-1]=t,r}get rank(){return this.shape.length}toTensor(){return xe().makeTensor(this.values,this.shape,this.dtype)}},xe=null,Ao=null,NI=null;function jh(e){xe=e}function Yh(e){Ao=e}function Qh(e){NI=e}var yt=class{constructor(t,r,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=r||"float32",this.size=ct(t),this.strides=$e(t),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Ao.buffer(this.shape,this.dtype,t)}bufferSync(){return Ao.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Sr(this.shape,t,this.dtype==="complex64")}arraySync(){return Sr(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=xe().read(this.dataId);if(this.dtype==="string"){let r=await t;try{return r.map(o=>_o(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),xe().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=xe().readSync(this.dataId);if(this.dtype==="string")try{return t.map(r=>_o(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await xe().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(xe().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Ao.print(this,t)}clone(){return this.throwIfDisposed(),Ao.clone(this)}toString(t=!1){let r=this.dataSync();return Kh(r,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Ao.cast(this,t)}variable(t=!0,r,o){return this.throwIfDisposed(),xe().makeVariable(this,t,r,o)}};Object.defineProperty(yt,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function kI(){return dn("Tensor",()=>yt)}kI();var Pe=class extends yt{constructor(t,r,o,n){super(t.shape,t.dtype,t.dataId,n),this.trainable=r,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!co(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);xe().disposeTensor(this),this.dataId=t.dataId,xe().incRef(this,null)}dispose(){xe().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Pe,Symbol.hasInstance,{value:e=>e instanceof yt&&e.assign!=null&&e.assign instanceof Function});var Tu;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(Tu||(Tu={}));var Eu;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(Eu||(Eu={}));var _u;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(_u||(_u={}));var Au;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Au||(Au={}));var Ru;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(Ru||(Ru={}));var FI={float32:Au,int32:Eu,bool:_u,complex64:Ru};function Et(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return FI[e][t]}function Fr(e){return Et(e,"int32")}function si(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function ii(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}function Nt(e,t){if(e.dtype===t.dtype)return[e,t];let r=Et(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function ai(e){let t=[];return Zh(e,t,new Set),t}function Zh(e,t,r){if(e==null)return;if(e instanceof yt){t.push(e);return}if(!DI(e))return;let o=e;for(let n in o){let s=o[n];r.has(s)||(r.add(s),Zh(s,t,r))}}function DI(e){return Array.isArray(e)||typeof e=="object"}function Nu(e){return e.kernelName!=null}var li=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},ir=class{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new li}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:r}=this.initializeBackendsAndReturnBest();if(r)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:r}=this.initializeBackend(t);if(r)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,r,o=1){return t in this.registryFactory?(Oe(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:r,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:r,asyncInit:o}=this.initializeBackend(t);if(!(o?await r:r))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new oi(this.backendInstance),!0}setupRegisteredKernels(){wu(this.backendName).forEach(r=>{r.setupFunc!=null&&r.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){wu(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){let r=this.registryFactory[t];if(r==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let o=r.factory();if(o&&!(o instanceof Cr)&&typeof o.then=="function"){let n=++this.pendingBackendInitId,s=o.then(i=>n<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,Oe(`Initialization of backend ${t} failed`),Oe(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return Oe(`Initialization of backend ${t} failed`),Oe(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,r)=>this.registryFactory[r].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let o=t[r],{success:n,asyncInit:s}=this.initializeBackend(o);if(s||n)return{name:o,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,r){let o=this.state.tensorInfo.get(r),n=o.backend,s=this.readSync(r),i=n.refCount(r);n.disposeData(r,!0),o.backend=t,t.move(r,s,o.shape,o.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,r){let o=null;if(r==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");r=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof r!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let n;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(n),()=>(n=r(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,r,o){t();try{let n=o();return r(),n}catch(n){throw r(),n}}nextTensorId(){return ir.nextTensorId++}nextVariableId(){return ir.nextVariableId++}clone(t){let r=A.runKernel(Er,{x:t}),o={x:t},n=i=>({x:()=>{let a="float32",l={x:i},u={dtype:a};return A.runKernel(Tr,l,u)}}),s=[];return this.addTapeNode(this.state.activeScope.name,o,[r],n,s,{}),r}runKernel(t,r,o){if(this.backendName==null&&this.backend,!(xu(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:r,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,r,o){let n=this.backend.numDataIds(),s=0;o.forEach(l=>{s+=l.dtype==="complex64"?3:1});let i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=n-r-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let r,o=[],n=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l,u=Nu(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Nu(t)){let{kernelName:h,inputs:x,attrs:g}=t;this.backendName==null&&this.backend;let m=xu(h,this.backendName);k(m!=null,()=>`Cannot find registered kernel '${h}' for backend '${this.backendName}'`),a=()=>{let y=this.backend.numDataIds();l=m.kernelFunc({inputs:x,attrs:g,backend:this.backend});let C=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(h,y,C);let b=C.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(n){let v=this.getTensorsForGradient(h,x,b);o=this.saveTensorsForBackwardMode(v)}return b}}else{let{forwardFunc:h}=t,x=g=>{n&&(o=g.map(m=>this.keep(this.clone(m))))};a=()=>{let g=this.backend.numDataIds();l=this.tidy(()=>h(this.backend,x));let m=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,g,m),m}}let{inputs:c,attrs:p}=t,f=Nu(t)?null:t.backwardsFunc,d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?r=a():(d=this.profiler.profileKernel(u,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),r=d.outputs)}),n&&this.addTapeNode(u,c,r,f,o,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(h=>c[h]!=null?c[h].shape:null),outputShapes:r.map(h=>h.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(l)?r:r[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,r,o){let n=yu(t);if(n!=null){let s=n.inputsToSave||[],i=n.outputsToSave||[],a;n.saveAllInputs?(k(Array.isArray(r),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(r).map(u=>r[u])):a=s.map(u=>r[u]);let l=o.filter((u,c)=>i[c]);return a.concat(l)}return[]}makeTensor(t,r,o,n){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",n=n||this.backend;let s=t;o==="string"&&fo(t[0])&&(s=t.map(l=>Eo(l)));let i=n.write(s,r,o),a=new yt(r,o,i,this.nextTensorId());if(this.trackTensor(a,n),o==="string"){let l=this.state.tensorInfo.get(i),u=cu(s);this.state.numBytes+=u-l.bytes,l.bytes=u}return a}makeTensorFromDataId(t,r,o,n){o=o||"float32";let s={dataId:t,shape:r,dtype:o};return this.makeTensorFromTensorInfo(s,n)}makeTensorFromTensorInfo(t,r){let{dataId:o,shape:n,dtype:s}=t,i=new yt(n,s,o,this.nextTensorId());return this.trackTensor(i,r),i}makeVariable(t,r=!0,o,n){o=o||this.nextVariableId().toString(),n!=null&&n!==t.dtype&&(t=t.cast(n));let s=new Pe(t,r,o,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,r){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*po(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:r||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof Pe||this.track(t)}incRef(t,r){this.trackTensor(t,r),this.backend.incRef(t.dataId)}removeDataId(t,r){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===r&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let r=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=r.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let o=t.size*po(t.dtype);this.state.numBytes-=o}r.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,r.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let r=this.state.registeredVariables[t];this.disposeVariable(r)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let r=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(n=>n.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-r,this.state.activeProfile.newTensors=this.state.numTensors-o;for(let n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,r,o,n,s,i){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:r,outputs:o,saved:s},l=yu(t);l!=null&&(n=l.gradFunc),n!=null&&(a.gradient=u=>(u=u.map((c,p)=>{if(c==null){let f=o[p],d=go(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return c}),n(u.length>1?u:u[0],s,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let r={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(r.name=t),this.state.scopeStack.push(r),this.state.activeScope=r}endScope(t){let r=ai(t),o=new Set(r.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let i=this.state.activeScope.track[s];!i.kept&&!o.has(i.id)&&i.dispose()}let n=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(s=>{!s.kept&&s.scopeId===n.id&&this.track(s)})}gradients(t,r,o,n=!1){if(k(r.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));k(s instanceof yt,()=>"The result y returned by f() must be a tensor.");let i=Gh(this.state.activeTape,r,s);if(!n&&i.length===0&&r.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=o??OI(s.shape),Hh(a,i,u=>this.tidy(u),PI);let l=r.map(u=>a[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(let c of u.saved)c.dispose()}),this.state.activeTape=null),{value:s,grads:l}})}customGrad(t){return k(ho(t),()=>"The f passed in customGrad(f) must be a function."),(...r)=>{k(r.every(a=>a instanceof yt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o,n={};r.forEach((a,l)=>{n[l]=a});let s=(a,l)=>(o=t(...r,l),k(o.value instanceof yt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(ho(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),i=(a,l)=>{let u=o.gradFunc(a,l),c=Array.isArray(u)?u:[u];k(c.length===r.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(c.every(f=>f instanceof yt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let p={};return c.forEach((f,d)=>{p[d]=()=>f}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:n})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,r){return this.state.tensorInfo.get(t).backend.readToGPU(t,r)}async time(t){let r=kr(),o=await this.backend.time(t);return o.wallMs=kr()-r,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new li;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};ir.nextTensorId=0;ir.nextVariableId=0;function OI(e){let t=pu(ct(e),"float32");return A.makeTensor(t,e,"float32")}function ku(){let e=hu();if(e._tfengine==null){let t=new fn(e);e._tfengine=new ir(t)}return hf(e._tfengine.ENV),jh(()=>e._tfengine),e._tfengine}var A=ku();function PI(e,t){let r={a:e,b:t};return A.runKernel(or,r)}var ar={};er(ar,{isBrowser:()=>Du,isMobile:()=>BI,mockIsMobile:()=>LI});function MI(){return typeof navigator<"u"&&navigator!=null}var Fu;function LI(e){Fu=e}function BI(e){if(Fu!==void 0)return Fu;if(e||MI()){if(e||(e=navigator),e.product==="ReactNative")return!0;let t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){let r=e;return r.userAgentData&&r.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Du(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Dt=$();Dt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Dt.registerFlag("IS_BROWSER",()=>Du());Dt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Dt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Dt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Dt.registerFlag("PROD",()=>!1);Dt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Dt.getBool("DEBUG"));Dt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Dt.registerFlag("IS_TEST",()=>!1);Dt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Dt.getBool("DEBUG"));Dt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Dt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Dt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Ou(e,t){let r=e;if(Ft(e))return t==="string"?[]:[e.length];if(si(e)){let n=e.channels||"RGBA";return[e.height,e.width*n.length]}else if(ii(e))return[e.buffer.size/(t==null?4:po(t))];if(!Array.isArray(e))return[];let o=[];for(;Array.isArray(r)||Ft(r)&&t!=="string";)o.push(r.length),r=r[0];return Array.isArray(e)&&$().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&tm(e,o,[]),o}function tm(e,t,r){if(r=r||[],!Array.isArray(e)&&!Ft(e)){k(t.length===0,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}k(t.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),k(e.length===t[0],()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);let o=t.slice(1);for(let n=0;n<e.length;++n)tm(e[n],o,r.concat(n))}function Jh(e,t,r,o){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${r}' passed to '${o}' must be ${e} tensor, but got ${t} tensor`)}}function D(e,t,r,o="numeric"){if(e instanceof yt)return Jh(o,e.dtype,t,r),e;let n=rr(e);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),Jh(o,n,t,r),e==null||!Ft(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){let l=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${l}'`)}let s=Ou(e,n);!Ft(e)&&!Array.isArray(e)&&(e=[e]);let a=n!=="string"?To(e,n):sr(e,[],!0);return A.makeTensor(a,s,n)}var UI="__op";function B(e){let t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0],o=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r=r+UI;let n=(...s)=>{A.startScope(r);try{let i=o(...s);return $r(i)&&console.error("Cannot return a Promise inside of tidy."),A.endScope(i),i}catch(i){throw A.endScope(null),i}};return Object.defineProperty(n,"name",{value:r,configurable:!0}),n}function VI(e,t){let r=D(e,"real","complex"),o=D(t,"imag","complex");ys(r.shape,o.shape,`real and imag shapes, ${r.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:r,imag:o};return A.runKernel(mn,n)}var ui=B({complex_:VI});function ci(e,t,r,o){if(o==null)o=rr(e);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(ii(e)||si(e)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return A.backend.createTensorFromGPUData(e,t||r,o)}if(!Ft(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){me(t);let n=ct(t),s=ct(r);k(n===s,()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<r.length;++i){let a=r[i],l=i===r.length-1?a!==ct(t.slice(i)):!0;k(r[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `)}}return!Ft(e)&&!Array.isArray(e)&&(e=[e]),t=t||r,e=o!=="string"?To(e,o):sr(e,[],!0),A.makeTensor(e,t,o)}var Pu=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function em(e){return Pu?Buffer.byteLength(e):new Blob([e]).size}function rm(e){if(Pu)return Buffer.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let o=0,n=t.length;o<n;o++)r+=String.fromCharCode(t[o]);return btoa(r)}function om(e){if(Pu){let o=Buffer.from(e,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;++o)r.set([t.charCodeAt(o)],o);return r.buffer}function pi(e){if(e.length===1)return e[0];let t=0;e.forEach(n=>{t+=n.byteLength});let r=new Uint8Array(t),o=0;return e.forEach(n=>{r.set(new Uint8Array(n),o),o+=n.byteLength}),r.buffer}function fi(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),r}function nm(e,t,r){let o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(o.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=t,o.weightData=r}return e.signature!=null&&(o.signature=e.signature),e.userDefinedMetadata!=null&&(o.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(o.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(o.initializerSignature=e.initializerSignature),o}async function di(e,t){let r,o;return e.weightsManifest!=null&&([r,o]=await t(e.weightsManifest)),nm(e,r,o)}function Me(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:em(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:em(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function Mu(e){let t=[];for(let r of e)t.push(...r.weights);return t}var it=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return it.instance==null&&(it.instance=new it),it.instance}static registerSaveRouter(t){it.getInstance().saveRouters.push(t)}static registerLoadRouter(t){it.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return it.getHandlers(t,"save")}static getLoadHandlers(t,r){return it.getHandlers(t,"load",r)}static getHandlers(t,r,o){let n=[];return(r==="load"?it.getInstance().loadRouters:it.getInstance().saveRouters).forEach(i=>{let a=i(t,o);a!==null&&n.push(a)}),n}};var Lu="tensorflowjs",Bu=1,Dr="models_store",lr="model_info_store";function sm(){if(!$().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Uu(e){let t=e.result;t.createObjectStore(Dr,{keyPath:"modelPath"}),t.createObjectStore(lr,{keyPath:"modelPath"})}var Ee=class{constructor(t){if(this.indexedDB=sm(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,r){return new Promise((o,n)=>{let s=this.indexedDB.open(Lu,Bu);s.onupgradeneeded=()=>Uu(s),s.onsuccess=()=>{let i=s.result;if(r==null){let a=i.transaction(Dr,"readonly"),u=a.objectStore(Dr).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return i.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(u.result.modelArtifacts)},u.onerror=c=>(i.close(),n(u.error)),a.oncomplete=()=>i.close()}else{let a=Me(r),l=i.transaction(lr,"readwrite"),u=l.objectStore(lr),c;try{c=u.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(f){return n(f)}let p;c.onsuccess=()=>{p=i.transaction(Dr,"readwrite");let f=p.objectStore(Dr),d;try{d=f.put({modelPath:this.modelPath,modelArtifacts:r,modelArtifactsInfo:a})}catch(h){return n(h)}d.onsuccess=()=>o({modelArtifactsInfo:a}),d.onerror=h=>{u=l.objectStore(lr);let x=u.delete(this.modelPath);x.onsuccess=()=>(i.close(),n(d.error)),x.onerror=g=>(i.close(),n(d.error))}},c.onerror=f=>(i.close(),n(c.error)),l.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>n(s.error)})}};Ee.URL_SCHEME="indexeddb://";var im=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ee.URL_SCHEME)?zI(e.slice(Ee.URL_SCHEME.length)):null;it.registerSaveRouter(im);it.registerLoadRouter(im);function zI(e){return new Ee(e)}function GI(e){return e.startsWith(Ee.URL_SCHEME)?e.slice(Ee.URL_SCHEME.length):e}var hi=class{constructor(){this.indexedDB=sm()}async listModels(){return new Promise((t,r)=>{let o=this.indexedDB.open(Lu,Bu);o.onupgradeneeded=()=>Uu(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(lr,"readonly"),a=s.objectStore(lr).getAll();a.onsuccess=()=>{let l={};for(let u of a.result)l[u.modelPath]=u.modelArtifactsInfo;t(l)},a.onerror=l=>(n.close(),r(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>r(o.error)})}async removeModel(t){return t=GI(t),new Promise((r,o)=>{let n=this.indexedDB.open(Lu,Bu);n.onupgradeneeded=()=>Uu(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(lr,"readwrite"),a=i.objectStore(lr),l=a.get(t),u;l.onsuccess=()=>{if(l.result==null)return s.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let c=a.delete(t),p=()=>{u=s.transaction(Dr,"readwrite");let d=u.objectStore(Dr).delete(t);d.onsuccess=()=>r(l.result.modelArtifactsInfo),d.onerror=h=>o(l.error)};c.onsuccess=p,c.onerror=f=>(p(),s.close(),o(l.error))}},l.onerror=c=>(s.close(),o(l.error)),i.oncomplete=()=>{u==null?s.close():u.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})}};var Le="/",Ro="tensorflowjs_models",am="info",HI="model_topology",qI="weight_specs",KI="weight_data",XI="model_metadata";function lm(e){return{info:[Ro,e,am].join(Le),topology:[Ro,e,HI].join(Le),weightSpecs:[Ro,e,qI].join(Le),weightData:[Ro,e,KI].join(Le),modelMetadata:[Ro,e,XI].join(Le)}}function um(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function jI(e){let t=e.split(Le);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Le)}function YI(e){return e.startsWith(_e.URL_SCHEME)?e.slice(_e.URL_SCHEME.length):e}var _e=class{constructor(t){if(!$().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=lm(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let r=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),n=Me(t);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,r),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,rm(t.weightData));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:n}}catch{throw um(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let r={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);r.modelTopology=o;let n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(n==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);r.weightSpecs=n;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);r.format=a.format,r.generatedBy=a.generatedBy,r.convertedBy=a.convertedBy,a.signature!=null&&(r.signature=a.signature),a.userDefinedMetadata!=null&&(r.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(r.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(r.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(r.trainingConfig=a.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return r.weightData=om(i),r}};_e.URL_SCHEME="localstorage://";var cm=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(_e.URL_SCHEME)?QI(e.slice(_e.URL_SCHEME.length)):null;it.registerSaveRouter(cm);it.registerLoadRouter(cm);function QI(e){return new _e(e)}var mi=class{constructor(){k($().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},r=Ro+Le,o=Le+am;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(r)&&s.endsWith(o)){let i=jI(s);t[i]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=YI(t);let r=lm(t);if(this.LS.getItem(r.info)==null)throw new Error(`Cannot find model at path '${t}'`);let o=JSON.parse(this.LS.getItem(r.info));return um(r),o}};var pm="://",ee=class{constructor(){this.managers={}}static getInstance(){return ee.instance==null&&(ee.instance=new ee),ee.instance}static registerManager(t,r){k(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(pm)&&(t=t.slice(0,t.indexOf(pm))),k(t.length>0,()=>"scheme must not be an empty string.");let o=ee.getInstance();k(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=r}static getManager(t){let r=ee.getInstance().managers[t];if(r==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return r}static getSchemes(){return Object.keys(ee.getInstance().managers)}};var Vu=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,r){return fetch(t,r)}now(){return performance.now()}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${r}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,r){return new TextDecoder(r).decode(t)}setTimeoutCustom(t,r){if(typeof window>"u"||!$().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,r);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},r),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}};if($().get("IS_BROWSER")){$().setPlatform("browser",new Vu);try{ee.registerManager(_e.URL_SCHEME,new mi)}catch{}try{ee.registerManager(Ee.URL_SCHEME,new hi)}catch{}}var ZI={importFetch:()=>fm()},Wu;var zu=class{constructor(){this.util=dm(),this.textEncoder=new this.util.TextEncoder}fetch(t,r){return $().global.fetch!=null?$().global.fetch(t,r):(Wu==null&&(Wu=ZI.importFetch()),Wu(t,r))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${r}`);return this.textEncoder.encode(t)}decode(t,r){return t.length===0?"":new this.util.TextDecoder(r).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};$().get("IS_NODE")&&!$().get("IS_BROWSER")&&$().setPlatform("node",new zu);function X(e,t="float32",r){return t=t||"float32",me(e),new Te(e,t,r)}function JI(e,t){let r=D(e,"x","cast");if(!uu(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&r.dtype!=="string"||t!=="string"&&r.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:r},n={dtype:t};return A.runKernel(Tr,o,n)}var Or=B({cast_:JI});function t$(e){let r={x:D(e,"x","clone","string_or_numeric")};return A.runKernel(Er,r)}var gi=B({clone_:t$});function hm(e,t=!1){console.log(e.toString(t))}ku();var e$={buffer:X,cast:Or,clone:gi,print:hm};Yh(e$);function r$(e){$().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}Qh(r$);function Be(){return A}function G(e,t){return A.tidy(e,t)}function dt(e){ai(e).forEach(r=>r.dispose())}function mm(e){return A.keep(e)}function gm(e,t,r=1){return A.registerBackend(e,t,r)}function o$(e,t){let r=D(e,"a","add"),o=D(t,"b","add");[r,o]=Nt(r,o);let n={a:r,b:o};return A.runKernel(or,n)}var H=B({add_:o$});function n$(e,t){let r=D(e,"a","floorDiv"),o=D(t,"b","floorDiv");[r,o]=Nt(r,o);let n={a:r,b:o};return A.runKernel(xo,n)}var xm=B({floorDiv_:n$});function s$(e,t){let r=D(e,"a","div"),o=D(t,"b","div");if([r,o]=Nt(r,o),r.dtype==="int32"&&o.dtype==="int32")return xm(r,o);let n={a:r,b:o},s={};return A.runKernel(Is,n,s)}var wt=B({div_:s$});function i$(e,t){let r=D(e,"a","mul"),o=D(t,"b","mul");[r,o]=Nt(r,o);let n={a:r,b:o};return A.runKernel(wo,n)}var z=B({mul_:i$});function a$(e){let t=D(e,"x","abs");if(t.dtype==="complex64"){let r={x:t};return A.runKernel(Ss,r)}else{let r={x:t};return A.runKernel(hn,r)}}var ye=B({abs_:a$});function l$(e,t,r,o,n="NHWC",s){let i=e[3],a=[...t,i],l=wm(n);return qu(e,a,r,s,o,null,null,l)}function u$(e,t,r,o,n,s,i="channelsLast"){let[a,l]=Cn(t),u;if(i==="channelsLast")u=[a,l,e[3],e[3]];else if(i==="channelsFirst")u=[a,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return qu(e,u,r,o,n,s,!1,i)}function c$(e,t,r,o,n,s,i="NDHWC"){let[a,l,u]=Gu(t),c,p;if(i==="NDHWC")p="channelsLast",c=[a,l,u,e[4],e[4]];else if(i==="NCDHW")p="channelsFirst",c=[a,l,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${i}`);return ym(e,c,r,o,n,!1,p,s)}function qu(e,t,r,o,n,s,i=!1,a="channelsLast"){let[l,u,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,p]=e;else if(a==="channelsFirst")[l,p,u,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,d,,h]=t,[x,g]=Cn(r),[m,y]=Cn(o),C=No(f,m),b=No(d,y),{padInfo:v,outHeight:I,outWidth:T}=d$(n,u,c,x,g,C,b,s,a),E=i?h*p:h,R;return a==="channelsFirst"?R=[l,E,I,T]:a==="channelsLast"&&(R=[l,I,T,E]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:p,outHeight:I,outWidth:T,outChannels:E,padInfo:v,strideHeight:x,strideWidth:g,filterHeight:f,filterWidth:d,effectiveFilterHeight:C,effectiveFilterWidth:b,dilationHeight:m,dilationWidth:y,inShape:e,outShape:R,filterShape:t}}function ym(e,t,r,o,n,s=!1,i="channelsLast",a){let[l,u,c,p,f]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,p,f]=e;else if(i==="channelsFirst")[l,f,u,c,p]=e;else throw new Error(`Unknown dataFormat ${i}`);let[d,h,x,,g]=t,[m,y,C]=Gu(r),[b,v,I]=Gu(o),T=No(d,b),E=No(h,v),R=No(x,I),{padInfo:N,outDepth:M,outHeight:L,outWidth:ut}=h$(n,u,c,p,m,y,C,T,E,R,a),rt=s?g*f:g,U;return i==="channelsFirst"?U=[l,rt,M,L,ut]:i==="channelsLast"&&(U=[l,M,L,ut,rt]),{batchSize:l,dataFormat:i,inDepth:u,inHeight:c,inWidth:p,inChannels:f,outDepth:M,outHeight:L,outWidth:ut,outChannels:rt,padInfo:N,strideDepth:m,strideHeight:y,strideWidth:C,filterDepth:d,filterHeight:h,filterWidth:x,effectiveFilterDepth:T,effectiveFilterHeight:E,effectiveFilterWidth:R,dilationDepth:b,dilationHeight:v,dilationWidth:I,inShape:e,outShape:U,filterShape:t}}function p$(e,t,r,o,n){o==null&&(o=Ku(e,t,r));let s=e[0],i=e[1],a=Sn((s-t+2*o)/r+1,n),l=Sn((i-t+2*o)/r+1,n);return[a,l]}function f$(e,t,r,o,n,s){n==null&&(n=Ku(e,t[0],o[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(i[a]=Sn((e[a]-t[a]+2*n)/o[a]+1,s));return i}function Ku(e,t,r,o=1){let n=No(t,o);return Math.floor((e[0]*(r-1)-r+n)/2)}function Cn(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Gu(e){return typeof e=="number"?[e,e,e]:e}function No(e,t){return t<=1?e:e+(e-1)*(t-1)}function d$(e,t,r,o,n,s,i,a,l){let u,c,p;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};let d=p$([t,r],s,o,e,a);c=d[0],p=d[1]}else if(e==="same"){c=Math.ceil(t/o),p=Math.ceil(r/n);let f=Math.max(0,(c-1)*o+s-t),d=Math.max(0,(p-1)*n+i-r),h=Math.floor(f/2),x=f-h,g=Math.floor(d/2),m=d-g;u={top:h,bottom:x,left:g,right:m,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/o),p=Math.ceil((r-i+1)/n);else if(typeof e=="object"){let f=l==="channelsLast"?e[1][0]:e[2][0],d=l==="channelsLast"?e[1][1]:e[2][1],h=l==="channelsLast"?e[2][0]:e[3][0],x=l==="channelsLast"?e[2][1]:e[3][1];u={top:f,bottom:d,left:h,right:x,type:f===0&&d===0&&h===0&&x===0?"VALID":"EXPLICIT"},c=Sn((t-s+f+d)/o+1,a),p=Sn((r-i+h+x)/n+1,a)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:c,outWidth:p}}function h$(e,t,r,o,n,s,i,a,l,u,c){let p,f,d,h;if(e==="valid"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};let g=f$([t,r,o,1],[a,l,u],1,[n,s,i],e,c);f=g[0],d=g[1],h=g[2]}else if(e==="same"){f=Math.ceil(t/n),d=Math.ceil(r/s),h=Math.ceil(o/i);let x=(f-1)*n+a-t,g=(d-1)*s+l-r,m=(h-1)*i+u-o,y=Math.floor(x/2),C=x-y,b=Math.floor(g/2),v=g-b,I=Math.floor(m/2),T=m-I;p={top:b,bottom:v,left:I,right:T,front:y,back:C,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:d,outWidth:h}}function Sn(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Hu(e){let[t,r,o]=Cn(e);return t===1&&r===1&&o===1}function m$(e,t){return Hu(e)||Hu(t)}function g$(e){return Cn(e).every(t=>t>0)}function wm(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function x$(e,t,r){if(r!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if(typeof t=="number")k(pn(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);else if(typeof t=="object")t.forEach(o=>{o.forEach(n=>{k(pn(n),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${n}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function y$(e,t){let o={x:D(e,"x","reshape","string_or_numeric")},n={shape:t};return A.runKernel(Hs,o,n)}var ht=B({reshape_:y$});function w$(e,t,r=!1,o=!1){let n=D(e,"a","matMul"),s=D(t,"b","matMul");[n,s]=Nt(n,s);let i={a:n,b:s},a={transposeA:r,transposeB:o};return A.runKernel(vs,i,a)}var Ot=B({matMul_:w$});function b$(e){let r={x:D(e,"x","sigmoid","float32")};return A.runKernel(bo,r)}var bm=B({sigmoid_:b$});function v$(e,t){let r=D(e,"broadcastTo","x"),o=r.shape;if(me(t),t.length<r.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){let u=r.shape.slice();for(;u.length<t.length;)u.unshift(1);r=ht(r,u)}let n=r.shape,s=Array.from(t);for(let u=t.length-1;u>=0;u--)if(n[u]===t[u])s[u]=1;else if(r.shape[u]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(s.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return gi(r);let a={x:r},l={reps:s};return A.runKernel(Qs,a,l)}var Xu=B({broadcastTo_:v$});function vm(e,t,r){me(e),r=r||rr(t);let o={shape:e,value:t,dtype:r};return A.runKernel(As,{},o)}var In={};er(In,{assertAndGetBroadcastShape:()=>yi,getBroadcastDims:()=>Cm,getReductionAxes:()=>xi});function Cm(e,t){let r=e.length,o=[];for(let n=0;n<r;n++){let s=r-1-n,i=e[s]||1;(t[t.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function xi(e,t){let r=[];for(let o=0;o<t.length;o++){let n=e[e.length-o-1],s=t.length-o-1,i=t[s];(n==null||n===1&&i>1)&&r.unshift(s)}return r}function yi(e,t){let r=Math.max(e.length,t.length),o=new Array(r);for(let n=0;n<r;n++){let s=e[e.length-n-1];s==null&&(s=1);let i=t[t.length-n-1];if(i==null&&(i=1),s===1)o[r-n-1]=i;else if(i===1)o[r-n-1]=s;else if(s!==i){let a=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(a)}else o[r-n-1]=s}return o}function C$(e){let r={x:D(e,"x","zerosLike")};return A.runKernel(Zs,r)}var Pt=B({zerosLike_:C$});function S$(e,t){let r=D(e,"t1","dot"),o=D(t,"t2","dot");k((r.rank===1||r.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${r.rank} and ${o.rank}.`);let n=r.rank===1?r.size:r.shape[1],s=o.rank===1?o.size:o.shape[0];if(k(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),r.rank===1&&o.rank===1){let i=ht(r,[1,-1]),a=ht(o,[-1,1]),l=Ot(i,a);return ht(l,[])}else if(r.rank===1&&o.rank===2){let i=ht(r,[1,-1]),a=ht(o,[o.shape[0],o.shape[1]]),l=Ot(i,a);return ht(l,[l.size])}else if(r.rank===2&&o.rank===1){let i=ht(o,[-1,1]),a=Ot(r,i);return ht(a,[a.size])}else{let i=ht(o,[o.shape[0],o.shape[1]]);return Ot(r,i)}}var ju=B({dot_:S$});function I$(e){let r={x:D(e,"x","elu","float32")};return A.runKernel($s,r)}var Sm=B({elu_:I$});function Yu(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function Im(e,t,r){let o=e.length+t.length,n=[],s=0,i=0;for(let a=0;a<o;a++)r.indexOf(a)===-1?n.push(e[s++]):n.push(t[i++]);return n}function $$(e,t){let r=[],o=e.length;for(let s=0;s<o;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]}function Qu(e,t){let r=t.map(o=>1);return Im(e,r,t)}function T$(e,t,r){k(Yu(t,r),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${r} input.`)}function E$(e,t){if(Yu(e,t))return null;let r=[];for(let o=0;o<t;++o)e.indexOf(o)===-1&&r.push(o);return e.forEach(o=>r.push(o)),r}function _$(e){return e.map((t,r)=>[r,t]).sort((t,r)=>t[1]-r[1]).map(t=>t[0])}function A$(e,t){let r=[];for(let o=t-e;o<t;++o)r.push(o);return r}function N$(e,t=null,r=!1){let n={x:D(e,"x","max")},s={reductionIndices:t,keepDims:r};return A.runKernel(Ls,n,s)}var wi=B({max_:N$});function k$(e,t=null,r=!1){let n={x:D(e,"x","min")},s={axis:t,keepDims:r};return A.runKernel(Bs,n,s)}var Zu=B({min_:k$});function F$(e,t){let r=D(e,"base","pow"),o=D(t,"exp","pow");[r,o]=Nt(r,o);let n={a:r,b:o};return A.runKernel(Ws,n)}var $n=B({pow_:F$});function _t(e,t){if((Ft(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ft(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ci(e,[],[],t)}function D$(e){let r={x:D(e,"x","sqrt","float32")};return A.runKernel(vo,r)}var Xt=B({sqrt_:D$});function O$(e){let t=D(e,"x","square"),r={};return A.runKernel("Square",{x:t},r)}var re=B({square_:O$});function P$(e,t=null,r=!1){let o=D(e,"x","sum");o.dtype==="bool"&&(o=Or(o,"int32"));let n={x:o},s={axis:t,keepDims:r};return A.runKernel(Xs,n,s)}var Ue=B({sum_:P$});function M$(e,t="euclidean",r=null,o=!1){e=D(e,"x","norm");let n=$m(e,t,r),s=n.shape;if(o){let i=ws(r,e.shape);s=Qu(n.shape,i)}return ht(n,s)}function $m(e,t,r=null){if(e.rank===0)return ye(e);if(e.rank!==1&&r===null)return $m(ht(e,[-1]),t,r);if(e.rank===1||typeof r=="number"||Array.isArray(r)&&r.length===1){if(t===1)return Ue(ye(e),r);if(t===1/0)return wi(ye(e),r);if(t===-1/0)return Zu(ye(e),r);if(t==="euclidean"||t===2)return Xt(Ue($n(ye(e),_t(2,"int32")),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(r)&&r.length===2){if(t===1)return wi(Ue(ye(e),r[0]),r[1]-1);if(t===1/0)return wi(Ue(ye(e),r[1]),r[0]);if(t===-1/0)return Zu(Ue(ye(e),r[1]),r[0]);if(t==="fro"||t==="euclidean")return Xt(Ue(re(e),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${r}`)}var Tm=B({norm_:M$});function L$(e){let r={input:D(e,"input","imag")};return A.runKernel(Fs,r)}var Em=B({imag_:L$});function B$(e,t=.2){let o={x:D(e,"x","leakyRelu")},n={alpha:t};return A.runKernel(Ds,o,n)}var _m=B({leakyRelu_:B$});function Am(e,t){k(ho(e),()=>"The f passed in variableGrads(f) must be a function"),k(t==null||Array.isArray(t)&&t.every(u=>u instanceof Pe),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let r=t!=null;if(!r){t=[];for(let u in A.registeredVariables)t.push(A.registeredVariables[u])}let o=r?t.filter(u=>!u.trainable):null,n=t.length;t=t.filter(u=>u.trainable),k(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:i,grads:a}=A.gradients(e,t,null,s);k(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),k(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let l={};return t.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),o?.forEach(u=>l[u.name]=null),{value:i,grads:l}}function U$(e){let r={x:D(e,"x","neg")};return A.runKernel(gn,r)}var Tn=B({neg_:U$});function V$(e,t){let r=D(e,"a","sub"),o=D(t,"b","sub");[r,o]=Nt(r,o);let n={a:r,b:o};return A.runKernel(Co,n)}var ue=B({sub_:V$});function W$(e,t){let r=D(e,"a","maximum"),o=D(t,"b","maximum");[r,o]=Nt(r,o),r.dtype==="bool"&&(r=Or(r,"int32"),o=Or(o,"int32")),yi(r.shape,o.shape);let n={a:r,b:o};return A.runKernel(yo,n)}var Rm=B({maximum_:W$});function En(e,t="float32"){if(me(e),t==="complex64"){let o=En(e,"float32"),n=En(e,"float32");return ui(o,n)}let r=go(ct(e),t);return A.makeTensor(r,e,t)}function z$(e,t){let r=D(e,"x","prelu"),o=D(t,"alpha","prelu"),n={x:r,alpha:o};return A.runKernel(zs,n)}var Nm=B({prelu_:z$});function G$(e){let r={input:D(e,"input","real")};return A.runKernel(xn,r)}var km=B({real_:G$});function H$(e){let r={x:D(e,"x","relu")};return A.runKernel(Gs,r)}var Fm=B({relu_:H$});function q$(e){let r={x:D(e,"x","relu6")};return A.runKernel(qs,r)}var Dm=B({relu6_:q$});function K$(e,t=0){let o={x:D(e,"x","step")},n={alpha:t};return A.runKernel(Js,o,n)}var Om=B({step_:K$});function Ve(e,t,r){if(au(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=Ou(e,r);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ci(e,t,o,r)}function Pm(e,t,r){let o=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${o}, and batchDim: ${n}.`;if(r.rank<n)throw new Error(s+` update.rank < ${n}. `);if(e.length<o+(r.rank-n))throw new Error(s+` Output shape length < ${o+(r.rank-n)}`);if(r.rank!==n+e.length-o)throw new Error(s+` update.rank != ${n+e.length-o}`);for(let i=0;i<n;++i)if(r.shape[i]!==t.shape[i])throw new Error(s+` updates.shape[${i}] (${r.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<r.rank-n;++i)if(r.shape[i+n]!==e[i+o])throw new Error(s+` updates.shape[${i+n}] (${r.shape[i+n]}) != shape[${i+n}] (${e[i+n]})`)}function X$(e,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(r.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Pm(r,t,e)}function j$(e,t,r){let o=t.shape.length,n=o>1?t.shape[o-1]:1,s=r.length,i=1;for(let p=n;p<s;++p)i*=r[p];let a=n<1?1:n,l=ct(t.shape)/a,u=[...$e(r.slice(0,n)),1],c=ct(r);return{sliceRank:n,numUpdates:l,sliceSize:i,strides:u,outputSize:c}}function Mm(e,t){let r=[];for(let s=0;s<t.length;s++)t[s]&&r.push(s);let o=X(e,"int32"),n=X([r.length,e.length],"int32");for(let s=0;s<r.length;s++){let i=o.indexToLoc(r[s]),a=s*e.length;n.values.set(i,a)}return n.toTensor()}function Y$(e,t,r){let o=D(e,"x","transpose");if(t==null&&(t=o.shape.map((i,a)=>a).reverse()),k(o.rank===t.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${t}.`),t.forEach(i=>{k(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${t}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:t};return o.dtype==="complex64"?G(()=>{let i=km(o),a=Em(o);return i=A.runKernel(So,{x:i},s),a=A.runKernel(So,{x:a},s),r&&(a=Tn(a)),ui(i,a)}):A.runKernel(So,n,s)}var Lm=B({transpose_:Y$});function Q$(e,t,r){if(r==null||r==="linear")return e;if(r==="relu")return z(e,Om(t));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function Z$(e,t){let r=t,o=xi(e.shape,t.shape);return o.length>0&&(r=Ue(r,o)),ht(r,e.shape)}function J$(e,t,r,o){if(t==="linear")return e;if(t==="relu")return Fm(e);if(t==="elu")return Sm(e);if(t==="relu6")return Dm(e);if(t==="prelu")return Nm(e,r);if(t==="leakyrelu")return _m(e,o);if(t==="sigmoid")return bm(e);throw new Error(`Unknown fused activation ${t}.`)}var tT=(e,t)=>!(e>0)||t==="linear";function Bm(e,t,r){let o=eT(e,t,r),n=o<0?-(o+1):o;e.splice(n,0,t)}function eT(e,t,r){return oT(e,t,r||rT)}function rT(e,t){return e>t?1:e<t?-1:0}function oT(e,t,r){let o=0,n=e.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=r(t,e[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function Vm(e,t,r,o,n){return Ju(e,t,r,o,n,0)}function Wm(e,t,r,o,n,s){return Ju(e,t,r,o,n,0,!1,s,!0)}function zm(e,t,r,o,n,s){return Ju(e,t,r,o,n,s,!0)}function Ju(e,t,r,o,n,s,i=!1,a=!1,l=!1){let u=[];for(let g=0;g<t.length;g++)t[g]>n&&u.push({score:t[g],boxIndex:g,suppressBeginIndex:0});u.sort(Um);let c=s>0?-.5/s:0,p=[],f=[];for(;p.length<r&&u.length>0;){let g=u.pop(),{score:m,boxIndex:y,suppressBeginIndex:C}=g;if(m<n)break;let b=!1;for(let v=p.length-1;v>=C;--v){let I=nT(e,y,p[v]);if(I>=o){b=!0;break}if(g.score=g.score*sT(o,c,I),g.score<=n)break}g.suppressBeginIndex=p.length,b||(g.score===m?(p.push(y),f.push(g.score)):g.score>n&&Bm(u,g,Um))}let d=p.length,h=r-d;a&&h>0&&(p.push(...new Array(h).fill(0)),f.push(...new Array(h).fill(0)));let x={selectedIndices:p};return i&&(x.selectedScores=f),l&&(x.validOutputs=d),x}function nT(e,t,r){let o=e.subarray(t*4,t*4+4),n=e.subarray(r*4,r*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),u=Math.min(n[0],n[2]),c=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),f=Math.max(n[1],n[3]),d=(a-s)*(l-i),h=(p-u)*(f-c);if(d<=0||h<=0)return 0;let x=Math.max(s,u),g=Math.max(i,c),m=Math.min(a,p),y=Math.min(l,f),C=Math.max(m-x,0)*Math.max(y-g,0);return C/(d+h-C)}function sT(e,t,r){let o=Math.exp(t*r*r);return r<=e?o:0}function Um(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var bi=class{getClassName(){return this.constructor.className}static fromConfig(t,r){return new t(r)}},We=class{constructor(){this.classNameMap={}}static getMap(){return We.instance==null&&(We.instance=new We),We.instance}static register(t){We.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function Gm(e){k(e.className!=null,()=>"Class being registered does not have the static className property defined."),k(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),k(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),We.register(e)}var Mt=class extends bi{minimize(t,r=!1,o){let{value:n,grads:s}=this.computeGradients(t,o);if(o!=null){let i=o.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return dt(s),r?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,r){return Am(t,r)}dispose(){this.iterations_!=null&&dt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:_t(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(Mt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var vi=class extends Mt{static get className(){return"Adadelta"}constructor(t,r,o=null){super(),this.learningRate=t,this.rho=r,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=A.registeredVariables[o],i=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:G(()=>Pt(s).variable(i))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:G(()=>Pt(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedGrads[n].variable,u=this.accumulatedUpdates[n].variable;G(()=>{let c=H(z(l,this.rho),z(re(a),1-this.rho)),p=z(wt(Xt(H(u,this.epsilon)),Xt(H(l,this.epsilon))),a),f=H(z(u,this.rho),z(re(p),1-this.rho));l.assign(c),u.assign(f);let d=H(z(p,-this.learningRate),s);s.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(dt(this.accumulatedGrads.map(t=>t.variable)),dt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=t.length/2,o=!1;this.accumulatedGrads=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.rho,r.epsilon)}};var Ci=class extends Mt{static get className(){return"Adagrad"}constructor(t,r=.1){super(),this.learningRate=t,this.initialAccumulatorValue=r,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=A.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:G(()=>vm(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(t)?t[n].tensor:t[o];if(i==null)return;let a=this.accumulatedGrads[n].variable;G(()=>{let l=H(a,re(i));a.assign(l);let u=H(z(wt(i,Xt(H(l,A.backend.epsilon()))),-this.learningRate),s);s.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&dt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulatedGrads=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,r){return new t(r.learningRate,r.initialAccumulatorValue)}};var Si=class extends Mt{static get className(){return"Adam"}constructor(t,r,o,n=null){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],G(()=>{this.accBeta1=_t(r).variable(),this.accBeta2=_t(o).variable()}),n==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);G(()=>{let o=ue(1,this.accBeta1),n=ue(1,this.accBeta2);r.forEach((s,i)=>{let a=A.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:G(()=>Pt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:G(()=>Pt(a).variable(l))});let u=Array.isArray(t)?t[i].tensor:t[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,f=H(z(c,this.beta1),z(u,1-this.beta1)),d=H(z(p,this.beta2),z(re(u),1-this.beta2)),h=wt(f,o),x=wt(d,n);c.assign(f),p.assign(d);let g=H(z(wt(h,H(Xt(x),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(z(this.accBeta1,this.beta1)),this.accBeta2.assign(z(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&dt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t),G(()=>{this.accBeta1.assign($n(this.beta1,this.iterations_+1)),this.accBeta2.assign($n(this.beta2,this.iterations_+1))});let r=t.length/2,o=!1;this.accumulatedFirstMoment=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon)}};var Ii=class extends Mt{static get className(){return"Adamax"}constructor(t,r,o,n=null,s=0){super(),this.learningRate=t,this.beta1=r,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],G(()=>{this.iteration=_t(0).variable(),this.accBeta1=_t(r).variable()}),n==null&&(this.epsilon=A.backend.epsilon())}applyGradients(t){let r=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);G(()=>{let o=ue(1,this.accBeta1),n=wt(-this.learningRate,H(z(this.iteration,this.decay),1));r.forEach((s,i)=>{let a=A.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:Pt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:Pt(a).variable(l)});let u=Array.isArray(t)?t[i].tensor:t[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,f=H(z(c,this.beta1),z(u,1-this.beta1)),d=z(p,this.beta2),h=ye(u),x=Rm(d,h);c.assign(f),p.assign(x);let g=H(z(wt(n,o),wt(f,H(x,this.epsilon))),a);a.assign(g)}),this.iteration.assign(H(this.iteration,1)),this.accBeta1.assign(z(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&dt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)}};var ko=class extends Mt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=Array.isArray(t)?t[n].tensor:t[o];if(s==null)return;let i=A.registeredVariables[o];G(()=>{let a=H(z(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=mm(_t(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,r){return new t(r.learningRate)}};var $i=class extends ko{static get className(){return"Momentum"}constructor(t,r,o=!1){super(t),this.learningRate=t,this.momentum=r,this.useNesterov=o,this.accumulations=[],this.m=_t(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=A.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:G(()=>Pt(s).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(t)?t[n].tensor:t[o];a!=null&&G(()=>{let l,u=H(z(this.m,i),a);this.useNesterov?l=H(z(this.c,H(a,z(u,this.m))),s):l=H(z(this.c,u),s),i.assign(u),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&dt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulations=t.map(o=>({originalName:o.name,variable:o.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,r){return new t(r.learningRate,r.momentum,r.useNesterov)}};var Ti=class extends Mt{static get className(){return"RMSProp"}constructor(t,r=.9,o=0,n=null,s=!1){if(super(),this.learningRate=t,this.decay=r,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=A.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=A.registeredVariables[o],i=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:G(()=>Pt(s).variable(i))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:G(()=>Pt(s).variable(i))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:G(()=>Pt(s).variable(i))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let l=this.accumulatedMeanSquares[n].variable,u=this.accumulatedMoments[n].variable;G(()=>{let c=H(z(l,this.decay),z(re(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[n].variable,f=H(z(p,this.decay),z(a,1-this.decay)),d=wt(z(a,this.learningRate),Xt(ue(c,H(re(f),this.epsilon)))),h=H(z(u,this.momentum),d);l.assign(c),p.assign(f),u.assign(h);let x=ue(s,h);s.assign(x)}else{let p=H(z(l,this.decay),z(re(a),1-this.decay)),f=H(z(u,this.momentum),wt(z(a,this.learningRate),Xt(H(p,this.epsilon))));l.assign(p),u.assign(f);let d=ue(s,f);s.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&dt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&dt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&dt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=this.centered?t.length/3:t.length/2,o=!1;this.accumulatedMeanSquares=t.slice(0,r).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=t.slice(r,r*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=t.slice(r*2,r*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,r){return new t(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)}};var iT=[vi,Ci,Si,Ii,$i,Ti,ko];function Hm(){for(let e of iT)Gm(e)}var aT="model",lT=".json",uT=".weights.bin";function qm(e){return new Promise(t=>setTimeout(t)).then(e)}var ze=class{constructor(t){if(!$().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ze.URL_SCHEME)&&(t=t.slice(ze.URL_SCHEME.length)),(t==null||t.length===0)&&(t=aT),this.modelJsonFileName=t+lT,this.weightDataFileName=t+uT}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let r=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],n=fi(t,o),s=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await qm(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=r,await qm(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Me(t)}}}};ze.URL_SCHEME="downloads://";var cT=e=>$().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ze.URL_SCHEME)?pT(e.slice(ze.URL_SCHEME.length)):null;it.registerSaveRouter(cT);function pT(e="model"){return new ze(e)}function tc(e,t,r,o){i(e),r=r??0,o=o??1,a(r,o);let n=0,s=l=>(l.then(u=>{let c=r+ ++n/e.length*(o-r);return t(c),u}),l);function i(l){k(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),k(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),k(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(e.map(s))}async function Km(e,t){t==null&&(t={});let r=t.fetchFunc==null?$().platform.fetch:t.fetchFunc,o=e.map(p=>r(p,t.requestInit,{isBinary:!0})),n=0,s=.5,a=(t.onProgress==null?await Promise.all(o):await tc(o,t.onProgress,n,s)).map(p=>p.arrayBuffer()),l=.5,u=1;return t.onProgress==null?await Promise.all(a):await tc(a,t.onProgress,l,u)}var dT="application/octet-stream",hT="application/json",_n=class{constructor(t,r){if(this.DEFAULT_METHOD="POST",r==null&&(r={}),this.weightPathPrefix=r.weightPathPrefix,this.onProgress=r.onProgress,this.weightUrlConverter=r.weightUrlConverter,r.fetchFunc!=null?(k(typeof r.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=r.fetchFunc):this.fetch=$().platform.fetch,k(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&k(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,r.requestInit!=null&&r.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=r.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let r=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);r.body=new FormData;let o=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],n=fi(t,o);r.body.append("model.json",new Blob([JSON.stringify(n)],{type:hT}),"model.json"),t.weightData!=null&&r.body.append("model.weights.bin",new Blob([t.weightData],{type:dT}),"model.weights.bin");let s=await this.fetch(this.path,r);if(s.ok)return{modelArtifactsInfo:Me(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let r;try{r=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}let o=r.modelTopology,n=r.weightsManifest;if(o==null&&n==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return di(r,s=>this.loadWeights(s))}async loadWeights(t){let r=Array.isArray(this.path)?this.path[1]:this.path,[o,n]=mT(r),s=this.weightPathPrefix||o,i=Mu(t),a=[],l=[];for(let c of t)for(let p of c.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(p)):a.push(s+p+n);this.weightUrlConverter&&a.push(...await Promise.all(l));let u=await Km(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,pi(u)]}};_n.URL_SCHEME_REGEX=/^https?:\/\//;function mT(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?"),o=e.substring(0,t),n=r>t?e.substring(r):"";return[o+"/",n]}function ec(e){return e.match(_n.URL_SCHEME_REGEX)!=null}var Xm=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let r=!0;if(Array.isArray(e)?r=e.every(o=>ec(o)):r=ec(e),r)return jm(e,t)}return null};it.registerSaveRouter(Xm);it.registerLoadRouter(Xm);function jm(e,t){return new _n(e,t)}function xT(e,t){let r=e.shape.length,o=t.shape.length;if(r<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${r}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>r)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${r}`);if(ct(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let n=t.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=e.shape,l=n.slice();l.pop();let u=1;for(let p=s;p<r;++p)u*=a[p],l.push(a[p]);let c=[...$e(e.shape).map(p=>p/u),1].slice(0,s);return[l,i,u,c]}var Lt={};er(Lt,{assertParamsValid:()=>wT,computeFlatOffset:()=>IT,computeOutShape:()=>vT,getNormalizedAxes:()=>CT,isSliceContinous:()=>ST,maskToAxes:()=>bT,parseSliceParams:()=>$T,sliceInfo:()=>TT,startForAxis:()=>og,startIndicesWithElidedDims:()=>tg,stopForAxis:()=>ng,stopIndicesWithElidedDims:()=>eg,stridesForAxis:()=>rg,stridesWithElidedDims:()=>Qm});var rc=-2,yT=-1;function wT(e,t,r){let o=e.shape.length;k(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),k(o===r.length,()=>`Error in slice${o}D: Length of size ${r} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)k(t[n]+r[n]<=e.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${t[n]+r[n]}) would overflow input.shape[${n}] (${e.shape[n]})`)}function bT(e){let t=[],r=0;for(;e>0;)e&1&&t.push(r),e/=2,r++;return t}function vT(e,t,r){let o=[];for(let n=0;n<e.length;n++)o[n]=Math.ceil((t[n]-e[n])/r[n]);return o}function Qm(e,t,r,o){let n=[...e];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<r;s++)s===0?n[t]=1:(n.splice(t,0,1),n.pop());return n}function Zm(e,t,r){return r<=e?r:r-(t-1)}function Jm(e,t){let r=[];for(let o=0;o<e;o++)r.push(t+o);return r}function CT(e,t,r,o,n,s,i,a,l){let u=e.length,c=new Array(u),p=new Array(u),f=new Array(u);if(t.length&&r>0){let d=t[0],h=r+1;c=tg(i,d,h,o,e),p=eg(a,d,h,n,e),f=Qm(s,d,h,e)}else for(let d=0;d<u;d++)c[d]=og(i,o,s,e,d,l),p[d]=ng(a,n,s,e,d,l),f[d]=rg(s,d,l);return{begin:c,end:p,strides:f}}function tg(e,t,r,o,n){let s=[...n],i=Jm(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let l=Zm(t,r,a),u=o[l];e&1<<l&&(u=0),s[a]=u}return s}function eg(e,t,r,o,n){let s=[...n],i=Jm(r,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=Zm(t,r,a),u=o[l];e&1<<l&&(u=Number.MAX_SAFE_INTEGER),s[a]=u}for(let a=0;a<s.length;a++){let l=n[a];s[a]<0&&(s[a]+=l),s[a]=uo(0,s[a],n[a])}return s}function rg(e,t,r){let o=e[t];return(r&1<<t||o==null)&&(o=1),o}function og(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),i=uo(0,i,l-1),i}function ng(e,t,r,o,n,s){let i=t[n],a=r[n]||1;(e&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),a>0?i=uo(0,i,l):i=uo(-1,i,l-1),i}function ST(e,t,r){let o=r.length;for(let n=0;n<r.length;n++)if(r[n]>1){o=n;break}for(let n=o+1;n<r.length;n++)if(t[n]>0||r[n]!==e[n])return!1;return!0}function IT(e,t){let r=e.length>0?e[e.length-1]:1;for(let o=0;o<e.length-1;o++)r+=e[o]*t[o];return r}function $T(e,t,r){let o,n=e.shape.length;typeof t=="number"?o=[t,...new Array(n-1).fill(0)]:t.length<n?o=t.concat(new Array(n-t.length).fill(0)):o=t.slice(),o.forEach(i=>{k(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return r==null?s=new Array(n).fill(-1):typeof r=="number"?s=[r,...new Array(n-1).fill(-1)]:r.length<n?s=r.concat(new Array(n-r.length).fill(-1)):s=r,s=s.map((i,a)=>i>=0?i:(k(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),e.shape[a]-o[a])),[o,s]}function TT(e,t,r,o,n,s,i,a,l){let u;if(o==null?(u=new Array(t.length),u.fill(1)):u=o,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1,p={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:u.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let C=0;C<p.dims;C++)c&&1<<C&a&&p.numAddAxisAfterEllipsis++,1<<C&i&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};ET(p,f);let d=!0,h=!0,x=!0,g=[],m=[];for(let C=0;C<e.length;++C){if(f.strides[C]===0)throw Error(`strides[${C}] must be non-zero`);let b=!!(f.shrinkAxisMask&1<<C),v=e[C];if(v===-1){g.push(b?1:-1);continue}let I=[f.beginMask&1<<C,f.endMask&1<<C],T=[f.strides[C]>0?0:-1,f.strides[C]>0?v:v-1];if(b&&f.strides[C]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&f.strides[C]===1;let E=!!(f.beginMask&1<<C&&f.endMask&1<<C);if(f.beginValid&&f.endValid){if(b){let L=f.begin[C]<0?v+f.begin[C]:f.begin[C];if(f.begin[C]=L,f.end[C]=f.begin[C]+1,L<0||L>=v)throw Error(`slice index ${f.begin[C]} of dimension ${C} out of bounds.`)}else f.begin[C]=Ym(f.begin[C],0,f.strides[C],v,I,T),f.end[C]=Ym(f.end[C],1,f.strides[C],v,I,T);let M=f.strides[C]===1&&f.begin[C]===0&&f.end[C]===v;d=d&&M,h=h&&(C===0&&f.strides[C]===1||M)}else d=d&&f.strides[C]===1&&E,h=h&&(C===0&&f.strides[C]===1||E);let R,N=!1;if(f.beginValid&&f.endValid?(R=f.end[C]-f.begin[C],N=!0):b?(R=1,N=!0):E&&v>=0&&(f.strides[C]<0?R=-v:R=v,N=!0),N){let M;R===0||R<0!=f.strides[C]<0?M=0:M=Math.trunc(R/f.strides[C])+(R%f.strides[C]!==0?1:0),g.push(M)}else g.push(-1)}for(let C=0;C<f.finalShapeGatherIndices.length;++C){let b=f.finalShapeGatherIndices[C];b>=0?m.push(g[b]):b===rc&&m.push(1)}return{finalShapeSparse:m.filter((C,b)=>f.finalShapeGatherIndices[b]!==rc),finalShape:m,isIdentity:d,sliceDim0:h,isSimpleSlice:x,begin:f.begin,end:f.end,strides:f.strides}}function ET(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let r=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<e.dims;o++)if(1<<o&e.ellipsisMask){let n=Math.min(t.dims-(e.dims-o)+1+e.numAddAxisAfterEllipsis,t.dims);for(;r<n;r++)t.begin[r]=0,t.end[r]=0,t.strides[r]=1,t.beginMask|=1<<r,t.endMask|=1<<r,t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[r]=o}else if(1<<o&e.newAxisMask)t.finalShapeGatherIndices.push(rc),t.finalShapeGatherIndicesSparse.push(-1);else{if(r===t.begin.length)throw Error(`Index out of range using input dim ${r}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[r]=e.begin[o]),e.end!=null&&(t.end[r]=e.end[o]),t.strides[r]=e.strides[o],e.beginMask&1<<o&&(t.beginMask|=1<<r),e.endMask&1<<o&&(t.endMask|=1<<r),e.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(yT),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<r):(t.finalShapeGatherIndices.push(r),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[r]=o,r++}}function Ym(e,t,r,o,n,s){if(n[t])return r>0?s[t]:s[t+1&1];{let i=e<0?o+e:e;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var _T=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function oc(){return new Promise(e=>_T(()=>e()))}var S={};er(S,{ERF_A1:()=>HT,ERF_A2:()=>qT,ERF_A3:()=>KT,ERF_A4:()=>XT,ERF_A5:()=>jT,ERF_P:()=>GT,PARALLELIZE_THRESHOLD:()=>Ei,RowPartitionType:()=>Ae,SELU_SCALE:()=>zT,SELU_SCALEALPHA:()=>WT,applyActivation:()=>J$,assertAndGetBroadcastShape:()=>yi,assertAxesAreInnerMostDims:()=>T$,assertParamsConsistent:()=>AT,assignToTypedArray:()=>eE,axesAreInnerMostDims:()=>Yu,calculateShapes:()=>j$,checkEinsumDimSizes:()=>aE,checkPadOnDimRoundingMode:()=>x$,combineLocations:()=>Im,combineRaggedTensorToTensorShapes:()=>NT,complexWithEvenIndex:()=>ZT,complexWithOddIndex:()=>JT,computeConv2DInfo:()=>qu,computeConv3DInfo:()=>ym,computeDefaultPad:()=>Ku,computeDilation2DInfo:()=>l$,computeOptimalWindowSize:()=>OT,computeOutAndReduceShapes:()=>$$,computeOutShape:()=>RT,computePool2DInfo:()=>u$,computePool3DInfo:()=>c$,convertConv2DDataFormat:()=>wm,decodeEinsumEquation:()=>sE,eitherStridesOrDilationsAreOne:()=>m$,expandShapeToKeepDim:()=>Qu,exponent:()=>oE,exponents:()=>rE,fromStringArrayToUint8:()=>_E,fromUint8ToStringArray:()=>EE,getAxesPermutation:()=>E$,getBroadcastDims:()=>Cm,getComplexWithIndex:()=>tE,getEinsumComputePath:()=>lE,getEinsumPermutation:()=>iE,getFusedBiasGradient:()=>Z$,getFusedDyActivation:()=>Q$,getImageCenter:()=>PT,getInnerMostAxes:()=>A$,getPermuted:()=>LT,getRaggedRank:()=>FT,getReductionAxes:()=>xi,getReshaped:()=>MT,getReshapedPermuted:()=>BT,getRowPartitionTypesHelper:()=>kT,getSliceBeginCoords:()=>UT,getSliceSize:()=>VT,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>fE,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>dE,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>hE,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>xE,getSparseReshapeInputOutputMismatchErrorMessage:()=>wE,getSparseReshapeInputOutputMultipleErrorMessage:()=>yE,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>mE,getSparseReshapeNegativeOutputDimErrorMessage:()=>gE,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>SE,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>bE,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>vE,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>CE,getUndoAxesPermutation:()=>_$,isIdentityPermutation:()=>uE,log:()=>yI,mergeRealAndImagArrays:()=>YT,prepareAndValidate:()=>xT,prepareSplitSize:()=>pE,segment_util:()=>sc,shouldFuse:()=>tT,slice_util:()=>Lt,splitRealAndImagArrays:()=>QT,stridesOrDilationsArePositive:()=>g$,tupleValuesAreOne:()=>Hu,upcastType:()=>Et,validateDefaultValueShape:()=>DT,validateInput:()=>X$,validateUpdateShape:()=>Pm,warn:()=>Oe});function AT(e,t){let r=e[0].length;e.forEach((n,s)=>{k(n.length===r,()=>`Error in concat${r}D: rank of tensors[${s}] must be the same as the rank of the rest (${r})`)}),k(t>=0&&t<r,()=>`Error in concat${r}D: axis must be between 0 and ${r-1}.`);let o=e[0];e.forEach((n,s)=>{for(let i=0;i<r;i++)k(i===t||n[i]===o[i],()=>`Error in concat${r}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function RT(e,t){let r=e[0].slice();for(let o=1;o<e.length;o++)r[t]+=e[o][t];return r}var Ae;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(Ae||(Ae={}));function NT(e,t,r){let o=new Array;if(r==null&&t==null)return o;if(t==null)for(;o.length<e+r.length;)o.push(-1);else o=t.slice();if(r==null)return o;if(e+r.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+r.length}, but shape.rank = ${o.length}`);for(let n=1;n<r.length;++n){let s=r[n],i=o[o.length-r.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+e}] = ${s} but shape[${n+e}] = ${a}`)}else o[i]=s}return o}function kT(e){let t={FIRST_DIM_SIZE:Ae.FIRST_DIM_SIZE,VALUE_ROWIDS:Ae.VALUE_ROWIDS,ROW_LENGTHS:Ae.ROW_LENGTHS,ROW_SPLITS:Ae.ROW_SPLITS,ROW_LIMITS:Ae.ROW_LIMITS,ROW_STARTS:Ae.ROW_STARTS},r=[];for(let o of e)if(o in t)r.push(t[o]);else break;return r}function FT(e){return e.length===0?0:e[0]===Ae.FIRST_DIM_SIZE?e.length-1:e.length}function DT(e,t){if(e==null||t==null)return;let r=e.length,o=t.length;if(r>=o)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${r} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(r,o-1);++n){let s=e[n],i=t[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-e.length}] = ${s} but ragged tensor input.flatValues.shape[${n-e.length}] = ${i}`)}}var Ei=30;function OT(e){return e<=Ei?e:mo(e,Math.floor(Math.sqrt(e)))}function PT(e,t,r){let o=r*(typeof e=="number"?e:e[0]),n=t*(typeof e=="number"?e:e[1]);return[o,n]}function MT(e,t,r,o=!0){let n=[];if(o)n=n.concat(t.slice(0)),n.push(e[0]/r),n=n.concat(e.slice(1));else{n=n.concat(e[0]);let s=t.length;for(let i=0;i<s;++i)n=n.concat([e[i+1]/t[i],t[i]]);n=n.concat(e.slice(s+1))}return n}function LT(e,t,r=!0){let o=[];if(r){o.push(t);for(let n=t+1;n<e;++n)n<=2*t?(o.push(n),o.push(n-(t+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<e;++i)i>=t*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function BT(e,t,r,o=!0){let n=[];o?n.push(e[0]/r):n.push(e[0]*r);for(let s=1;s<e.length;++s)s<=t.length?o?n.push(t[s-1]*e[s]):n.push(e[s]/t[s-1]):n.push(e[s]);return n}function UT(e,t){let r=[0];for(let o=0;o<t;++o)r.push(e[o][0]);return r}function VT(e,t,r){let o=e.slice(0,1);for(let n=0;n<r;++n)o.push(e[n+1]-t[n][0]-t[n][1]);return o}var WT=1.7580993408473768,zT=1.0507009873554805;var GT=.3275911,HT=.254829592,qT=-.284496736,KT=1.421413741,XT=-1.453152027,jT=1.061405429;function YT(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let r=new Float32Array(e.length*2);for(let o=0;o<r.length;o+=2)r[o]=e[o/2],r[o+1]=t[o/2];return r}function QT(e){let t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let o=0;o<e.length;o+=2)t[o/2]=e[o],r[o/2]=e[o+1];return{real:t,imag:r}}function ZT(e){let t=Math.ceil(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=0;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function JT(e){let t=Math.floor(e.length/4),r=new Float32Array(t),o=new Float32Array(t);for(let n=2;n<e.length;n+=4)r[Math.floor(n/4)]=e[n],o[Math.floor(n/4)]=e[n+1];return{real:r,imag:o}}function tE(e,t){let r=e[t*2],o=e[t*2+1];return{real:r,imag:o}}function eE(e,t,r,o){e[o*2]=t,e[o*2+1]=r}function rE(e,t){let r=new Float32Array(e/2),o=new Float32Array(e/2);for(let n=0;n<Math.ceil(e/2);n++){let s=(t?2:-2)*Math.PI*(n/e);r[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:r,imag:o}}function oE(e,t,r){let o=(r?2:-2)*Math.PI*(e/t),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var nc="->",nE=/->/g,sg=",",ig="...";function sE(e,t){e=e.replace(/\s/g,"");let r=(e.length-e.replace(nE,"").length)/nc.length;if(r<1)throw new Error("Equations without an arrow are not supported.");if(r>1)throw new Error(`Equation must contain exactly one arrow ("${nc}").`);let[o,n]=e.split(nc);k(o.indexOf(ig)===-1,()=>`The ellipsis notation ("${ig}") is not supported yet.`);let s=o.split(sg),i=s.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let f=0;f<n.length;++f){let d=n[f];if(!s.some(h=>h.indexOf(d)!==-1))throw new Error(`Output subscripts contain the label ${d} not present in the input subscripts.`);a.indexOf(d)===-1&&a.push(d)}for(let f=0;f<o.length;++f){let d=o[f];a.indexOf(d)===-1&&d!==sg&&a.push(d)}let l=new Array(s.length);for(let f=0;f<i;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let d=0;d<s[f].length;++d)l[f].push(a.indexOf(s[f][d]))}let u=a.length,c=n.length,p=[];for(let f=c;f<u;++f)p.push(f);return{allDims:a,summedDims:p,idDims:l}}function iE(e,t){let r=new Array(e);r.fill(-1);for(let n=0;n<t.length;++n)r[t[n]]=n;let o=[];for(let n=0;n<e;++n)r[n]===-1&&o.push(n);return r=r.filter(n=>n!==-1),{permutationIndices:r,expandDims:o}}function aE(e,t,r){let o=new Array(e);for(let n=0;n<r.length;++n){let s=r[n].shape;for(let i=0;i<t[n].length;++i)o[t[n][i]]===void 0?o[t[n][i]]=s[i]:k(o[t[n][i]]===s[i],()=>`Expected dimension ${o[t[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function lE(e,t){let r=e,o=[],n=0;e.length===0&&r.push(-1),n=e.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<r.length;++i){let a=r[i],l=cE(t,a);for(let u of l)s.indexOf(u)===-1&&(o[i].push(u),s.push(u))}return{path:r,steps:o}}function uE(e){return e.every((t,r)=>t===r)}function cE(e,t){let r=[];for(let o=0;o<e.length;++o)(e[o].length===0||e[o].indexOf(t)!==-1||t===-1)&&r.push(o);return r}function pE(e,t,r=0){let o=[];if(typeof t=="number")k(e.shape[r]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(e.shape[r]/t);else{let n=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);k(n<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let i=t.reduce((a,l)=>l>0?a+l:a);t[s]=e.shape[r]-i}k(e.shape[r]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}function fE(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function dE(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function hE(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`}function mE(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function gE(e,t){return`size ${e} must be non-negative, not ${t}`}function xE(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function yE(e,t){let r=ct(e),o=ct(t);return`Input to reshape is a SparseTensor with ${r}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${e} outputShape= ${t}`}function wE(e,t){let r=ct(e),o=ct(t);return`Input to reshape is a tensor with ${r} dense values, but the requested shape has ${o}. inputShape=${e} outputShape=${t}`}function bE(){return"segment ids must be >= 0"}function vE(){return"segment ids are not increasing"}function CE(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function SE(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`}var sc={};er(sc,{collectGatherOpShapeInfo:()=>TE,computeOutShape:()=>$E,segOpComputeOptimalWindowSize:()=>IE});function IE(e,t){let r=!1,o;for(e<=Ei?(o=e,r=!0):o=mo(e,Math.floor(Math.sqrt(e)));!r;)o>t||o===e?r=!0:o=mo(e,o+1);return o}function $E(e,t,r){let o=[],n=e.length;for(let s=0;s<n;s++)s!==t?o.push(e[s]):o.push(r);return o}function TE(e,t,r,o){let n=t.shape.length,s=e.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(r<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${r}).`);for(let p=0;p<o;++p)if(e.shape[p]!==t.shape[p])throw new Error(`x.shape[${p}]: ${e.shape[p]} should be equal to indices.shape[${p}]: ${t.shape[p]}.`);let i=e.shape[r],a=[],l=1,u=1,c=1;for(let p=0;p<o;++p)a.push(e.shape[p]),l*=e.shape[p];for(let p=o;p<r;p++)a.push(e.shape[p]),u*=e.shape[p];for(let p=o;p<n;p++)a.push(t.shape[p]);for(let p=r+1;p<s;p++)a.push(e.shape[p]),c*=e.shape[p];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:i,outputShape:a}}function EE(e){try{return e.map(t=>_o(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function _E(e){return e.map(t=>Eo(t))}var Re={};er(Re,{nonMaxSuppressionV3Impl:()=>Vm,nonMaxSuppressionV4Impl:()=>Wm,nonMaxSuppressionV5Impl:()=>zm,whereImpl:()=>Mm});Hm();var Pr={},_i={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function ag(e,t){Pr[e]=t}function jt(e,t){if(!(e in Pr)||t!=null){let o=RE(e,t);if(o!==null)Pr[e]=o;else return console.log("Could not get context for WebGL version",e),null}let r=Pr[e];return r==null||r.isContextLost()?(delete Pr[e],jt(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),Pr[e])}function AE(e){if(!$().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&e===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function RE(e,t){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=t??AE(e);return r.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete Pr[e]},!1),$().getBool("SOFTWARE_WEBGL_ENABLED")&&(_i.failIfMajorPerformanceCaveat=!1),e===1?r.getContext("webgl",_i)||r.getContext("experimental-webgl",_i):r.getContext("webgl2",_i)}var ur;(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(ur||(ur={}));var $t;(function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"})($t||($t={}));var bt;(function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(bt||(bt={}));function Mr(e,t){return[t,e]}function lg(e,t){return e*t}function An(e){let t=w.sizeFromShape(e),r=Math.ceil(t/4);return w.sizeToSquarishShape(r)}function Ne(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function ug(e,t){let[r,o]=Ne(e,t);return r*o*4}function Rn(e,t){let r=e,o,n,s,i,a,l,u,c,p,f;return $().getNumber("WEBGL_VERSION")===2?(o=r.R32F,n=r.R16F,s=r.RGBA16F,i=r.RGBA32F,a=r.RED,u=4,c=1,p=r.HALF_FLOAT,f=r.FLOAT,l=r.RGBA8):(o=e.RGBA,n=e.RGBA,s=e.RGBA,i=r.RGBA,a=e.RGBA,u=4,c=4,p=t!=null?t.HALF_FLOAT_OES:null,f=e.FLOAT,l=e.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:f}}function O(e,t){let r=t();return $().getBool("DEBUG")&&NE(e),r}function NE(e){let t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+DE(e,t))}var kE=596e-10,FE=65504;function cg(e){return!!($().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||kE<Math.abs(e)&&Math.abs(e)<FE)}function DE(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Nn(e,t){return Ge(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function pg(e,t){let r=Ge(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(O(e,()=>e.shaderSource(r,t)),O(e,()=>e.compileShader(r)),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function fg(e,t){let r=Ge(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(O(e,()=>e.shaderSource(r,t)),O(e,()=>e.compileShader(r)),$().get("ENGINE_COMPILE_ONLY"))return r;if(e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw pc(t,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var OE=/ERROR: [0-9]+:([0-9]+):/g;function pc(e,t){let r=OE.exec(t);if(r==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let o=+r[1],n=e.split(`
`),s=n.length.toString().length+2,i=n.map((p,f)=>w.rightPad((f+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let l=i.slice(0,o-1),u=i.slice(o-1,o),c=i.slice(o);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${w.rightPad(u[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function dg(e){return Ge(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function hg(e,t){if(O(e,()=>e.linkProgram(t)),!$().get("ENGINE_COMPILE_ONLY")&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Ri(e,t){if(O(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function mg(e,t){let r=Ge(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return O(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),O(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function gg(e,t){let r=Ge(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return O(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),O(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}function xg(e){return Ge(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function yg(e,t){let r=$().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){let o=`[${e}x${t}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(e>r||t>r){let o=`[${e}x${t}]`,n=`[${r}x${r}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function wg(e){return Ge(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function fc(e,t,r,o,n,s,i){let a=e.getAttribLocation(t,r);return a===-1?!1:(O(e,()=>e.bindBuffer(e.ARRAY_BUFFER,o)),O(e,()=>e.vertexAttribPointer(a,n,e.FLOAT,!1,s,i)),O(e,()=>e.enableVertexAttribArray(a)),!0)}function PE(e,t,r){LE(e,r),O(e,()=>e.activeTexture(e.TEXTURE0+r)),O(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function bg(e,t,r){return Ge(e,()=>e.getUniformLocation(t,r),'uniform "'+r+'" not present in program.')}function vg(e,t,r){return e.getUniformLocation(t,r)}function Cg(e,t,r,o){O(e,()=>PE(e,t,o)),O(e,()=>e.uniform1i(r,o))}function Ni(e,t,r){O(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),O(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function dc(e,t){O(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),O(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function kn(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+ME(e,t))}function ME(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Ge(e,t,r){let o=O(e,()=>t());if(o==null)throw new Error(r);return o}function LE(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=t+e.TEXTURE0;if(o<e.TEXTURE0||o>r){let n=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw new Error(`textureUnit must be in ${n}.`)}}function cr(e,t=2){return w.sizeFromShape(e.slice(0,e.length-t))}function pr(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Fn(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[cr(e),...pr(e)]),t}function Sg(e,t=!1){let r=$().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=$().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&$().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=r/2),t&&(r=r*2,o=o*2,e=e.map((a,l)=>l>=e.length-2?w.nearestLargerEven(e[l]):e[l]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=w.squeezeShape(e).newShape);let n=w.sizeFromShape(e),s=null;e.length<=1&&n<=r?s=[1,n]:e.length===2&&e[0]<=r&&e[1]<=r?s=e:e.length===3&&e[0]*e[1]<=r&&e[2]<=r?s=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=r&&e[1]*e[2]<=r?s=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r?s=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(s=[e[0],e[1]*e[2]*e[3]]);let i=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(s==null||i)if(t){let a=cr(e),l=2,u=2;e.length&&([l,u]=pr(e)),n=a*(l/2)*(u/2),s=w.sizeToSquarishShape(n).map(c=>c*2)}else s=w.sizeToSquarishShape(n);return s}function Ai(e){return e%2===0}function Lr(e,t){if(e=e.slice(-2),t=t.slice(-2),w.arraysEqual(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let r=e[e.length-1],o=t[t.length-1];if(r===o||Ai(r)&&Ai(o)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Ai(e[0])&&Ai(t[0])}var lc,uc;function Ig(e){if(lc==null){let t=jt(e);lc=t.getParameter(t.MAX_TEXTURE_SIZE)}return lc}function $g(e){if(uc==null){let t=jt(e);uc=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,uc)}function Tg(e){if(e===0)return 0;let t,r=jt(e);return oe(r,"EXT_disjoint_timer_query_webgl2")&&e===2?t=2:oe(r,"EXT_disjoint_timer_query")?t=1:t=0,t}function oe(e,t){return e.getExtension(t)!=null}function hc(e){try{if(jt(e)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function Eg(e){if(e===0)return!1;let t=jt(e);if(e===1){if(!oe(t,"OES_texture_float"))return!1}else if(!oe(t,"EXT_color_buffer_float"))return!1;return cc(t)}function _g(e){if(e===0)return!1;let t=jt(e);if(e===1){if(!oe(t,"OES_texture_float")||!oe(t,"WEBGL_color_buffer_float"))return!1}else{if(oe(t,"EXT_color_buffer_float"))return cc(t);let o="EXT_color_buffer_half_float";if(oe(t,o)){let n=t.getExtension(o);return BE(t,n)}return!1}return cc(t)}function cc(e){let t=Rn(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let o=1,n=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,o,n,0,t.textureFormatFloat,t.textureTypeFloat,null);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(s),i}function BE(e,t){let r=Rn(e,t),o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o);let n=1,s=1;e.texImage2D(e.TEXTURE_2D,0,r.internalFormatHalfFloat,n,s,0,r.textureFormatFloat,r.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(o),e.deleteFramebuffer(i),a}function Ag(e){return e!==2?!1:jt(e).fenceSync!=null}function ke(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&w.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var V=$();V.registerFlag("HAS_WEBGL",()=>V.getNumber("WEBGL_VERSION")>0);V.registerFlag("WEBGL_VERSION",()=>hc(2)?2:hc(1)?1:0);V.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);V.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>V.get("WEBGL_VERSION")===2);V.registerFlag("WEBGL_CPU_FORWARD",()=>!0);V.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);V.registerFlag("WEBGL_PACK",()=>V.getBool("HAS_WEBGL"));V.registerFlag("WEBGL_PACK_NORMALIZATION",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_CLIP",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_PACK_REDUCE",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_LAZILY_UNPACK",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_CONV_IM2COL",()=>V.getBool("WEBGL_PACK"));V.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Ig(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>$g(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=V.getNumber("WEBGL_VERSION");return e===0?0:Tg(e)});V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>V.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!ar.isMobile());V.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Eg(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>V.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:V.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));V.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>_g(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Ag(V.getNumber("WEBGL_VERSION")));V.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>V.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);V.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)});V.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>ar.isMobile()?1:-1,e=>{if(e<0&&e!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)});V.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);V.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);V.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);V.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);V.registerFlag("WEBGL_EXP_CONV",()=>!1);V.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>V.getBool("IS_TEST"));V.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);V.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);V.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);V.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function et(){let e,t,r,o,n,s,i,a,l,u;return $().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",r="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=$().getBool("WEBGL2_ISNAN_CUSTOM")?`
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
    `),{version:e,attribute:t,varyingVs:r,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:u}}function we(e,t,r="index"){let o=w.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / ${n}`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * ${n}`:`index -= ${e[s]} * ${n}`;return`${i}; ${a};`}).join("")}function Br(e,t,r="index"){let o=w.computeStrides(t);return o.map((n,s)=>{let i=`int ${e[s]} = ${r} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${e[s+1]} = ${r} - ${e[s]} * outShapeStrides[${s}]`:`index -= ${e[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function UE(e,t){let r=e.length,o=e.map(s=>`${t}[${s}]`),n=new Array(r-1);n[r-2]=o[r-1];for(let s=r-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function Rg(e,t,r="index"){let o=e.map((s,i)=>i),n=UE(o,t);return n.map((s,i)=>{let a=`int ${e[i]} = ${r} / ${n[i]}`,l=i===n.length-1?`int ${e[i+1]} = ${r} - ${e[i]} * ${n[i]}`:`index -= ${e[i]} * ${n[i]}`;return`${a}; ${l};`}).join("")}function Fo(e){let t=w.computeStrides(e).map(r=>r.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Do(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var Fi=`
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
`;var{getBroadcastDims:Ng}=S;function kg(e,t,r){let o=[];if(e.forEach(d=>{let h=w.sizeFromShape(d.shapeInfo.logicalShape);if(d.shapeInfo.isUniform?o.push(`uniform float ${d.name}${h>1?`[${h}]`:""};`):(o.push(`uniform sampler2D ${d.name};`),o.push(`uniform int offset${d.name};`)),r.enableShapeUniforms){let{uniformShape:x}=Di(r.packedInputs,d.shapeInfo.logicalShape,d.shapeInfo.texShape);switch(x.length){case 1:o.push(`uniform int ${d.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${d.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${d.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${d.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${d.name}TexShape;`)}}),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach(d=>{o.push(`uniform ${d.type} ${d.name}${d.arrayIndex?`[${d.arrayIndex}]`:""};`)});let n=o.join(`
`),s=e.map(d=>VE(d,t,r.packedInputs,r.enableShapeUniforms)).join(`
`),i=t.texShape,a=et(),l=GE(a),u,c,p=KE(a);return t.isPacked?(u=WE(t.logicalShape,i,r.enableShapeUniforms),c=qE(a)):(u=zE(t.logicalShape,i,r.enableShapeUniforms),c=HE(a)),r.packedInputs&&(p+=QE),[p,l,c,n,u,s,r.userCode].join(`
`)}function Po(e,t=!1){let r=e.shapeInfo.logicalShape;switch(r.length){case 0:return u2(e,t);case 1:return p2(e,t);case 2:return d2(e,t);case 3:return m2(e,t);case 4:return x2(e,t);case 5:return y2(e);case 6:return w2(e);default:throw new Error(`${r.length}-D input sampling is not yet supported`)}}function Fg(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return l2(e);case 1:return c2(e,t);case 2:return f2(e,t);case 3:return h2(e,t);default:return g2(e,t)}}function VE(e,t,r=!1,o){let n="";r?n+=Fg(e,o):n+=Po(e,o);let s=e.shapeInfo.logicalShape,i=t.logicalShape;return s.length<=i.length&&(r?n+=b2(e,t):n+=v2(e,t)),n}function WE(e,t,r){switch(e.length){case 0:return Dg();case 1:return ZE(e,t,r);case 2:return i2(e,t,r);case 3:return t2(e,t,r);default:return r2(e,t,r)}}function zE(e,t,r){switch(e.length){case 0:return Dg();case 1:return JE(e,t,r);case 2:return a2(e,t,r);case 3:return e2(e,t,r);case 4:return o2(e,t,r);case 5:return n2(e,t);case 6:return s2(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function GE(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function HE(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function qE(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function KE(e){return`${e.version}
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

    ${XE}
    ${jE}
    ${YE}
  `}var XE=`
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
`,jE=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,YE=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,QE=`
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
`;function Dg(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function ZE(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return o[0]===1?r?`
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
  `}function JE(e,t,r){return t[0]===1?r?`
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
  `}function t2(e,t,r){if(r)return`
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
  `}function e2(e,t,r){if(r)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Br(["r","c","d"],e)}
    return ivec3(r, c, d);
  }
`;let o=we(["r","c","d"],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function r2(e,t,r){if(r)return`
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
  `}function o2(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Br(["r","c","d","d2"],e)}
      return ivec4(r, c, d, d2);
    }
  `;let o=we(["r","c","d","d2"],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function n2(e,t){let r=we(["r","c","d","d2","d3"],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function s2(e,t){let r=we(["r","c","d","d2","d3","d4"],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${r}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function i2(e,t,r){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(w.arraysEqual(e,t))return r?`
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
  `}function a2(e,t,r){return w.arraysEqual(e,t)?r?`
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
  `}function Ur(e){return`offset${e}`}function l2(e){let t=e.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),o=et();return`
    vec4 ${r}() {
      return ${o.texture2D}(${t}, halfCR);
    }
  `}function u2(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${o}() {return ${r};}`;let[n,s]=e.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${r}, halfCR);
      }
    `;let i=Ur(r);if(t)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${i});
      return sampleTexture(${r}, uv);
    }
  `;let[a,l]=e.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${r}, uv);
    }
  `}function c2(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=e.shapeInfo.texShape,s=et();if(t)return`
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
  `}function p2(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${Mo(e)}
      }
    `;let n=e.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${r}, halfCR);
      }
    `;let a=Ur(r);return i===1?t?`
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
  `}function f2(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=s[0],a=s[1],l=et();if(s!=null&&w.arraysEqual(r,s))return t?`
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
  `}function d2(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape;if(s!=null&&w.arraysEqual(r,s)){if(t)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let f=s[0],d=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${f}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=w.squeezeShape(r),l=i;if(l.length<r.length){let f=Lo(e,l),d=["row","col"];return`
      ${Po(f,t)}
      float ${n}(int row, int col) {
        return ${n}(${Bo(d,a)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${r[1]}, 1)));
        ${Mo(e)}
      }
    `;let u=s[0],c=s[1],p=Ur(o);return c===1?t?`
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
`}function h2(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(r[0]===1){let f=r.slice(1),d=[1,2],h=Lo(e,f),x=["b","row","col"];return`
        ${Fg(h,t)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${Bo(x,d)});
        }
      `}let a=et();if(t)return`
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
  `}function m2(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[1]*r[2],i=r[2],{newShape:a,keptDims:l}=w.squeezeShape(r),u=a;if(u.length<r.length){let x=Lo(e,u),g=["row","col","depth"];return`
        ${Po(x,t)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${Bo(g,l)});
        }
      `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${Mo(e)}
      }
    `;let c=e.shapeInfo.texShape,p=c[0],f=c[1],d=e.shapeInfo.flatOffset;if(f===s&&d==null)return t?`
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
  `;let h=Ur(o);return t?`
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
  `}function g2(e,t){let r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=et();if(t)return`
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
  `;let s=e.shapeInfo.logicalShape,i=s.length,a=e.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=l[0],c=l[1],p=Math.ceil(s[i-1]/2),f=p*Math.ceil(s[i-2]/2),d="int b, int row, int col",h=`b * ${f} + (row / 2) * ${p} + (col / 2)`;for(let x=2;x<i-1;x++)d=`int b${x}, `+d,f*=s[i-x-1],h=`b${x} * ${f} + `+h;return`
    vec4 ${o}(${d}) {
      int index = ${h};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${u});
      return ${n.texture2D}(${r}, uv);
    }
  `}function x2(e,t){let r=e.shapeInfo.logicalShape,o=e.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r[3],i=r[2]*s,a=r[1]*i,{newShape:l,keptDims:u}=w.squeezeShape(r);if(l.length<r.length){let y=Lo(e,l),C=["row","col","depth","depth2"];return`
      ${Po(y,t)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${Bo(C,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${Mo(e)}
      }
    `;let c=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],d=p[1],h=`int stride2 = ${o}Shape[3];`,x=`int stride1 = ${o}Shape[2] * stride2;`,g=`int stride0 = ${o}Shape[1] * stride1;`;if(d===a&&c==null)return t?`
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
    `;if(d===s&&c==null)return t?`
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
    `;let m=Ur(o);return t?`
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
  `}function y2(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),n=t[4],s=t[3]*n,i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:u}=w.squeezeShape(t);if(l.length<t.length){let x=Lo(e,l),g=["row","col","depth","depth2","depth3"];return`
      ${Po(x)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${Bo(g,u)});
      }
    `}if(e.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${Mo(e)}
      }
    `;let c=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,f=p[0],d=p[1];if(d===a&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(d===n&&c==null)return`
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
    `;let h=Ur(r);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${h};
      vec2 uv = uvFromFlat(${f}, ${d}, index);
      return sampleTexture(${r}, uv);
    }
  `}function w2(e){let t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),{newShape:n,keptDims:s}=w.squeezeShape(t);if(n.length<t.length){let g=Lo(e,n),m=["row","col","depth","depth2","depth3","depth4"];return`
      ${Po(g)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${Bo(m,s)});
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
        ${Mo(e)}
      }
    `;let p=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,d=f[0],h=f[1];if(h===c&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${l}, ${a}, ${i})) +
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
    `;let x=Ur(r);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${u} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${x};
      vec2 uv = uvFromFlat(${d}, ${h}, index);
      return sampleTexture(${r}, uv);
    }
  `}function Mo(e){let t=e.name,r=w.sizeFromShape(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`
    for (int i = 0; i < ${r}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function b2(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=Ng(e.shapeInfo.logicalShape,t.logicalShape),l=W(i),u=i-s,c,p=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map(y=>`coords.${p[y+u]} = 0;`).join(`
`);let f="";i<2&&s>0?f="coords":f=e.shapeInfo.logicalShape.map((y,C)=>`coords.${p[C+u]}`).join(", ");let d="return outputValue;",x=w.sizeFromShape(e.shapeInfo.logicalShape)===1,m=w.sizeFromShape(t.logicalShape)===1;if(s===1&&!x&&!m)d=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(x&&!m)i===1?d=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:d=`
        return vec4(outputValue.x);
      `;else if(a.length){let y=s-2,C=s-1;a.indexOf(y)>-1&&a.indexOf(C)>-1?d="return vec4(outputValue.x);":a.indexOf(y)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(C)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${l} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${o}(${f});
      ${d}
    }
  `}function v2(e,t){let r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),n="get"+o+"AtOutCoords",s=t.texShape,i=e.shapeInfo.texShape,a=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&a===l&&e.shapeInfo.flatOffset==null&&w.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${r}, resultUV);
      }
    `;let u=W(l),c=Ng(e.shapeInfo.logicalShape,t.logicalShape),p=l-a,f,d=["x","y","z","w","u","v"];a===0?f="":l<2&&c.length>=1?f="coords = 0;":f=c.map(x=>`coords.${d[x+p]} = 0;`).join(`
`);let h="";return l<2&&a>0?h="coords":h=e.shapeInfo.logicalShape.map((x,g)=>`coords.${d[g+p]}`).join(", "),`
    float ${n}() {
      ${u} coords = getOutputCoords();
      ${f}
      return get${o}(${h});
    }
  `}function W(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function Di(e,t,r){let{newShape:o,keptDims:n}=w.squeezeShape(t),s=t.length,i=e&&s===3&&t[0]===1,a=i?t.slice(1):o,l=!e&&s>1&&!w.arraysEqual(t,r)&&o.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:n}}function Lo(e,t){let r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function Bo(e,t){return t.map(r=>e[r]).join(", ")}function Pg(e,t,r,o){let n=r.map((c,p)=>{let f={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(f.flatOffset=c.texData.slice.flatOffset),{name:t.variableNames[p],shapeInfo:f}}),s=n.map(c=>c.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=kg(n,i,t),l=fg(e.gl,a),u=e.createProgram(l);return $().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i},mc(e,t,u))}function mc(e,t,r){let o=[],n=[],s,i,a,l=null,u=null;u=e.getUniformLocation(r,"NAN",!1),$().getNumber("WEBGL_VERSION")===1&&(l=e.getUniformLocation(r,"INFINITY",!1));let c=!1;for(let p of t.variableNames){let f={name:p,uniform:e.getUniformLocation(r,p,c),offset:e.getUniformLocation(r,`offset${p}`,c)};t.enableShapeUniforms&&(f.shape=e.getUniformLocation(r,`${p}Shape`,c),f.texShape=e.getUniformLocation(r,`${p}TexShape`,c)),o.push(f)}if(t.enableShapeUniforms&&(s=e.getUniformLocation(r,"outShape",c),a=e.getUniformLocation(r,"outShapeStrides",c),i=e.getUniformLocation(r,"outTexShape",c)),t.customUniforms)for(let p of t.customUniforms)n.push(e.getUniformLocation(r,p.name,c));return{variablesLocations:o,customUniformLocations:n,infLoc:l,nanLoc:u,outShapeLocation:s,outShapeStridesLocation:a,outTexShapeLocation:i}}function Og(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((r,o)=>{let n=r.logicalShape,s=t[o],i=s.shape;if(!w.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(r.isUniform&&s.isUniform)return;let a=r.texShape,l=s.isUniform?null:s.texData.texShape;if(!w.arraysEqual(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function Mg(e,t,r,o,n){t.program.enableShapeUniforms||(Og(t.inShapeInfos,r),Og([t.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):e.setOutputMatrixTexture(s.texture,i[0],i[1]),e.setProgram(t.webGLProgram),$().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<r.length;++l){let u=r[l],{uniform:c,offset:p,shape:f,texShape:d}=t.variablesLocations[l];if(f){let{uniformShape:h}=Di(t.program.packedInputs,u.shape,u.texData.texShape);switch(h.length){case 1:e.gl.uniform1iv(f,new Int32Array(h));break;case 2:e.gl.uniform2iv(f,new Int32Array(h));break;case 3:e.gl.uniform3iv(f,new Int32Array(h));break;case 4:e.gl.uniform4iv(f,new Int32Array(h));break;default:break}}if(d&&e.gl.uniform2i(d,u.texData.texShape[0],u.texData.texShape[1]),c!=null){if(u.isUniform){if(w.sizeFromShape(u.shape)<2)e.gl.uniform1f(c,u.uniformValues[0]);else{let h=u.uniformValues;h instanceof Float32Array||(h=new Float32Array(h)),e.gl.uniform1fv(c,h)}continue}u.texData.slice!=null&&p!=null&&e.gl.uniform1i(p,u.texData.slice.flatOffset),e.setInputMatrixTexture(u.texData.texture.texture,c,l)}}let a=t.outShapeLocation;if(a)switch(o.shape.length){case 1:e.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:e.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:e.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:e.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(t.outShapeStridesLocation){let l=w.computeStrides(o.shape);switch(o.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&n)for(let l=0;l<t.program.customUniforms.length;++l){let u=t.program.customUniforms[l],c=t.customUniformLocations[l],p=n[l];if(u.type==="float")e.gl.uniform1fv(c,p);else if(u.type==="vec2")e.gl.uniform2fv(c,p);else if(u.type==="vec3")e.gl.uniform3fv(c,p);else if(u.type==="vec4")e.gl.uniform4fv(c,p);else if(u.type==="int")e.gl.uniform1iv(c,p);else if(u.type==="ivec2")e.gl.uniform2iv(c,p);else if(u.type==="ivec3")e.gl.uniform3iv(c,p);else if(u.type==="ivec4")e.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}e.executeProgram()}function Lg(e,t,r){let o="";t.concat(r).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!i.isUniform){let l=i.texData.texShape,{useSqueezeShape:u,uniformShape:c,keptDims:p}=Di(e.packedInputs,i.shape,l),f="",d="",h="";if(c.length===1&&e.packedInputs){let v=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];f=`${v[0]>1}_${v[1]>1}`}else if(c.length===2&&!e.packedInputs)d=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!e.packedInputs){let v=w.computeStrides(c);h=`${v[0]===l[1]}_${v[v.length-1]===l[1]}`}let x=i.shape.length,g=c.length===2&&w.arraysEqual(i.shape,l),m=w.sizeFromShape(i.shape)===1,y=S.getBroadcastDims(i.shape,r.shape),C=!e.packedInputs&&x===r.shape.length&&w.arraysEqual(l,r.texData.texShape),b=e.packedInputs||c.length>2?"":`${l[0]>1}_${l[1]>1}`;o+=`${x}_${C}_${u?p:""}_${c.length}_${m}_${y}_${g}_${f}_${d}_${h}_${b}_${a}`}else{let l=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${l}_${a}`}});let n=e.userCode,s=e.constructor.name;return s+="_"+o+"_"+n+`${$().getNumber("WEBGL_VERSION")}`,s}function K(e){return $().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}var Oi=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ur.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=et();this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Br(["r","c","d"],t):we(["r","c","d"],t)}
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
    `}};var Pi=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ur.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=et();this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Br(["r","c","d"],t):we(["r","c","d"],t)}
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
    `}};var Mi=class{constructor(t){this.variableNames=["A"],this.outTexUsage=$t.DOWNLOAD;let r=et();this.outputShape=t,this.userCode=`
      ${Fi}

      void main() {
        float x = getAAtOutCoords();
        ${r.output} = encode_float(x);
      }
    `}};var Li=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=$t.DOWNLOAD;let r=et();this.outputShape=t,this.userCode=`
      ${Fi}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${r.output} = encode_float(x);
      }
    `}};var I2={R:0,G:1,B:2,A:3},Dn=class{constructor(t,r=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=et();this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length);let s="result";r&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<o.length;a++){let l=o[a];i+=`
          if(offset == ${a}) {
            result = values[${I2[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Do():Fo(t)}

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
    `}};var Bi=class{constructor(t,r=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=et();this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length);let n="",s="result";r&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let l=i*2+a;n+=`
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
        ${this.enableShapeUniforms?Do():Fo(t)}

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
    `}};function Bg(e){let t=et(),r=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return pg(e,r)}function Ug(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return mg(e,t)}function Vg(e){let t=new Uint16Array([0,1,2,2,1,3]);return gg(e,t)}function On(e,t,r,o,n,s){yg(t,r);let i=xg(e),a=e.TEXTURE_2D;return O(e,()=>e.bindTexture(a,i)),O(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),O(e,()=>e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),O(e,()=>e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST)),O(e,()=>e.texParameteri(a,e.TEXTURE_MAG_FILTER,e.NEAREST)),$().getNumber("WEBGL_VERSION")===1?O(e,()=>e.texImage2D(a,0,o,t,r,0,n,s,null)):O(e,()=>e.texStorage2D(a,1,o,t,r)),O(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[r,t]}}function gc(e){return e.internalFormatFloat}function Wg(e,t,r,o){let[n,s]=Mr(t,r);return On(e,n,s,gc(o),o.textureFormatFloat,e.FLOAT)}function xc(e){return e.internalFormatHalfFloat}function zg(e,t,r,o){let[n,s]=Mr(t,r);return On(e,n,s,xc(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function yc(e){return e.downloadTextureFormat}function Gg(e,t,r,o){let[n,s]=Mr(t,r);return On(e,n,s,yc(o),e.RGBA,e.UNSIGNED_BYTE)}function wc(e){return e.internalFormatPackedFloat}function Hg(e,t,r,o){let[n,s]=Ne(t,r);return On(e,n,s,wc(o),e.RGBA,e.FLOAT)}function bc(e){return e.internalFormatPackedHalfFloat}function qg(e,t,r,o){let[n,s]=Ne(t,r);return On(e,n,s,bc(o),e.RGBA,o.textureTypeHalfFloat)}function Kg(e,t,r){return O(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),fc(e,t,"clipSpacePos",r,3,20,0)&&fc(e,t,"uv",r,2,20,12)}function Xg(e,t,r,o,n,s){O(e,()=>e.bindTexture(e.TEXTURE_2D,t));let i,a,l;n instanceof Uint8Array?(i=new Uint8Array(r*o*4),a=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(r*o*4),a=e.FLOAT,l=s.internalFormatPackedFloat),i.set(n),$().getNumber("WEBGL_VERSION")===2?O(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r,o,e.RGBA,a,i)):O(e,()=>e.texImage2D(e.TEXTURE_2D,0,l,r,o,0,e.RGBA,a,i)),O(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function jg(e,t,r){O(e,()=>e.bindTexture(e.TEXTURE_2D,t)),r.data instanceof Uint8Array?$().getNumber("WEBGL_VERSION")===2?O(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,e.RGBA,e.UNSIGNED_BYTE,r.data)):O(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)):$().getNumber("WEBGL_VERSION")===2?O(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,r)):O(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)),O(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function Yg(e,t,r,o){let n=e.createBuffer();O(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let a=4*4*t*r;return O(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),O(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),O(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}function Qg(e,t,r){let o=e,n=new Float32Array(r);return o.bindBuffer(o.PIXEL_PACK_BUFFER,t),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function Zg(e,t,r,o){let[n,s]=Mr(t,r),i=4,a=new Uint8Array(lg(t*r,i));return O(e,()=>e.readPixels(0,0,n,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Jg(e,t,r,o,n,s,i,a){let l=e,u=new Float32Array(ug(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function tx(e,t,r){let o=new Float32Array(t*r*4);return O(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,o)),o}var Uo=class{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let r=$().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,ag(r,t)):this.gl=jt(r),t=this.gl,$().getNumber("WEBGL_VERSION")===2){let s=t;this.createVertexArray=()=>O(s,()=>s.createVertexArray()),this.bindVertexArray=i=>O(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>O(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>O(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(t!=null){let s=t.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>O(t,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>O(t,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>O(t,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>O(t,()=>t.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),$().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Nn(this.gl,s),oe(this.gl,i))this.textureHalfFloatExtension=Nn(this.gl,i);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),oe(this.gl,n))this.colorBufferHalfFloatExtension=Nn(this.gl,n);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",oe(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(oe(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Ug(this.gl),this.indexBuffer=Vg(this.gl),this.framebuffer=wg(this.gl),this.textureConfig=Rn(this.gl,this.textureHalfFloatExtension)}get debug(){return $().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let t=this.gl;O(t,()=>t.finish()),O(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),O(t,()=>t.deleteFramebuffer(this.framebuffer)),O(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),O(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),O(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,r){return this.throwIfDisposed(),Wg(this.gl,t,r,this.textureConfig)}createFloat16MatrixTexture(t,r){return this.throwIfDisposed(),zg(this.gl,t,r,this.textureConfig)}createUnsignedBytesMatrixTexture(t,r){return this.throwIfDisposed(),Gg(this.gl,t,r,this.textureConfig)}uploadPixelDataToTexture(t,r){this.throwIfDisposed(),jg(this.gl,t,r)}uploadDenseMatrixToTexture(t,r,o,n){this.throwIfDisposed(),Xg(this.gl,t,r,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(t,r){return this.throwIfDisposed(),qg(this.gl,t,r,this.textureConfig)}createPackedMatrixTexture(t,r){return this.throwIfDisposed(),Hg(this.gl,t,r,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(dc(this.gl,this.framebuffer),this.outputTexture=null),O(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,r,o){return this.downloadMatrixDriver(t,()=>Zg(this.gl,r,o,this.textureConfig))}downloadPackedMatrixFromBuffer(t,r,o,n,s,i){return Jg(this.gl,t,r,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,r){return Qg(this.gl,t,r)}createBufferFromTexture(t,r,o){this.bindTextureToFrameBuffer(t);let n=Yg(this.gl,r,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let r,o;if($().getBool("WEBGL_FENCE_API_ENABLED")){let n=t,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},r=s}else $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(r=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(r,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:r,isFencePassed:o}}downloadMatrixFromPackedTexture(t,r,o){return this.downloadMatrixDriver(t,()=>tx(this.gl,r,o))}createProgram(t){this.throwIfDisposed();let r=this.gl;this.vertexShader==null&&(this.vertexShader=Bg(r));let o=dg(r);O(r,()=>r.attachShader(o,this.vertexShader)),O(r,()=>r.attachShader(o,t)),hg(r,o);let n;return n=Object.assign(o,{vao:this.createVertexArray()}),this.bindVertexArray(n.vao),O(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(Kg(r,n,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&Ri(r,n),this.setProgram(n),n}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(O(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&Ri(this.gl,this.program)),O(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,r,o=!0){return this.throwIfDisposed(),o?bg(this.gl,t,r):vg(this.gl,t,r)}getAttributeLocation(t,r){return this.throwIfDisposed(),O(this.gl,()=>this.gl.getAttribLocation(t,r))}getUniformLocationNoThrow(t,r){return this.throwIfDisposed(),this.gl.getUniformLocation(t,r)}setInputMatrixTexture(t,r,o){this.throwIfDisposed(),this.throwIfNoProgram(),Cg(this.gl,t,r,o)}setOutputMatrixTexture(t,r,o){this.setOutputMatrixTextureDriver(t,o,r)}setOutputPackedMatrixTexture(t,r,o){this.throwIfDisposed();let[n,s]=Ne(r,o);this.setOutputMatrixTextureDriver(t,n,s)}setOutputMatrixWriteRegion(t,r,o,n){this.setOutputMatrixWriteRegionDriver(o,t,n,r)}setOutputPackedMatrixWriteRegion(t,r,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Ri(this.gl,this.program),kn(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let t=this.gl;if(this.debug){let r=this.getVertexArray();console.assert(r===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}O(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),O(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Nn(this.gl,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let t=this.getQueryTimerExtensionWebGL1(),r=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,r),r}endQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let r=this.gl,o=this.getQueryTimerExtensionWebGL2();r.endQuery(o.TIME_ELAPSED_EXT);return}let t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await w.repeatedTry(()=>this.disposed||this.isQueryAvailable(t,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,r){if(r===0)return null;if(r===2){let o=this.gl;return o.getQueryParameter(t,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,r){if(r===0)return!0;if(r===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(t,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(t){return new Promise(r=>{this.addItemToPoll(()=>t.isFencePassed(),()=>r())})}pollItems(){let t=T2(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=t;++r){let{resolveFn:o}=this.itemsToPoll[r];o()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,r){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:r}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in $().platform&&(o=$().platform.setTimeoutCustom.bind($().platform)),w.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),Ni(this.gl,t,this.framebuffer),this.debug&&kn(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Ni(this.gl,this.outputTexture,this.framebuffer),this.debug&&kn(this.gl)):dc(this.gl,this.framebuffer)}downloadMatrixDriver(t,r){this.bindTextureToFrameBuffer(t);let o=r();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(t,r,o){this.throwIfDisposed();let n=this.gl;Ni(n,t,this.framebuffer),this.debug&&kn(n),this.outputTexture=t,O(n,()=>n.viewport(0,0,r,o)),O(n,()=>n.scissor(0,0,r,o))}setOutputMatrixWriteRegionDriver(t,r,o,n){this.throwIfDisposed(),O(this.gl,()=>this.gl.scissor(t,r,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function T2(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var zc={};er(zc,{addImpl:()=>Sc,bincountImpl:()=>ox,bincountReduceImpl:()=>nx,castImpl:()=>Cc,ceilImpl:()=>Ic,concatImpl:()=>sx,equalImpl:()=>$c,expImpl:()=>Tc,expm1Impl:()=>Ec,floorDivImpl:()=>Ac,floorImpl:()=>_c,gatherNdImpl:()=>ix,gatherV2Impl:()=>ax,greaterEqualImpl:()=>Nc,greaterImpl:()=>Rc,lessEqualImpl:()=>Fc,lessImpl:()=>kc,linSpaceImpl:()=>lx,logImpl:()=>Dc,maxImpl:()=>ux,maximumImpl:()=>Oc,minimumImpl:()=>Pc,multiplyImpl:()=>Mn,negImpl:()=>cx,notEqualImpl:()=>Mc,prodImpl:()=>fx,raggedGatherImpl:()=>hx,raggedRangeImpl:()=>gx,raggedTensorToTensorImpl:()=>wx,rangeImpl:()=>bx,rsqrtImpl:()=>Lc,scatterImpl:()=>vx,sigmoidImpl:()=>Cx,simpleAbsImpl:()=>ex,sliceImpl:()=>Sx,sparseFillEmptyRowsImpl:()=>Ix,sparseReshapeImpl:()=>$x,sparseSegmentReductionImpl:()=>Tx,sqrtImpl:()=>Ex,squaredDifferenceImpl:()=>Bc,staticRegexReplaceImpl:()=>Uc,stridedSliceImpl:()=>_x,stringNGramsImpl:()=>Ax,stringSplitImpl:()=>Rx,stringToHashBucketFastImpl:()=>Nx,subImpl:()=>Wc,tileImpl:()=>kx,topKImpl:()=>Dx,transposeImpl:()=>px,uniqueImpl:()=>Ox});function Ui(e,t){Array.isArray(e)||(e=[e]),e.forEach(r=>{r!=null&&w.assert(r.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function ex(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}function Q(e){return(t,r,o,n,s)=>{let i=S.assertAndGetBroadcastShape(t,r),a=i.length,l=w.computeStrides(i),u=w.sizeFromShape(i),c=w.getTypedArrayFromDType(s,u),p=t.length,f=r.length,d=w.computeStrides(t),h=w.computeStrides(r),x=S.getBroadcastDims(t,i),g=S.getBroadcastDims(r,i);if(x.length+g.length===0)for(let m=0;m<c.length;++m)c[m]=e(o[m%o.length],n[m%n.length]);else for(let m=0;m<c.length;++m){let y=w.indexToLoc(m,a,l),C=y.slice(-p);x.forEach(T=>C[T]=0);let b=w.locToIndex(C,p,d),v=y.slice(-f);g.forEach(T=>v[T]=0);let I=w.locToIndex(v,f,h);c[m]=e(o[b],n[I])}return[c,i]}}function Vo(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.data.get(o.dataId).values,i=r.data.get(n.dataId).values,a=r.makeTensorInfo(o.shape,"complex64"),l=r.data.get(a.dataId);return l.complexTensorInfos={real:r.makeTensorInfo(o.shape,"float32",s),imag:r.makeTensorInfo(n.shape,"float32",i)},a}function Vi(e,t,r="float32"){if(r==="complex64"){let n=Vi(e,t,"float32"),s=Vi(e,t,"float32");return Vo({inputs:{real:n,imag:s},backend:e})}let o=w.makeZerosTypedArray(w.sizeFromShape(t),r);return e.makeTensorInfo(t,r,o)}function vc(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function rx(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.data.get(o.dataId).complexTensorInfos.real,s=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,s)}function Cc(e,t,r,o){if(o==="int32"){let n=Int32Array.from(e);return[t,"int32",n]}if(o==="bool"){let n=w.toTypedArray([0],r),[s,i]=Q((a,l)=>a!==l?1:0)(t,[],e,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${r} to ${o}`)}function Pn(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return vc({inputs:{x:n},backend:r});let c=Vi(r,n.shape,n.dtype),p=Pn({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),f=Vo({inputs:{real:p,imag:c},backend:r});return r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p),f}if(n.dtype==="complex64"){let c=rx({inputs:{input:n},backend:r}),p=Pn({inputs:{x:c},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(c),p}if(!w.hasEncodingLoss(n.dtype,s)){let c=vc({inputs:{x:n},backend:r});return{dataId:c.dataId,shape:c.shape,dtype:s}}let i=r.data.get(n.dataId).values,[a,l,u]=Cc(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,u)}function st(e,t,r,o){return r==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;Ui([i,a],e);let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=i.dtype==="string"?S.fromUint8ToStringArray(u):u,f=i.dtype==="string"?S.fromUint8ToStringArray(c):c,d=o||i.dtype,[h,x]=t(i.shape,a.shape,p,f,d);return l.makeTensorInfo(x,d,h)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let u=Pn({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),c=l.data.get(u.dataId),p=c.complexTensorInfos.real,f=c.complexTensorInfos.imag,d=l.data.get(p.dataId).values,h=l.data.get(f.dataId).values,x=Pn({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(x.dataId),m=g.complexTensorInfos.real,y=g.complexTensorInfos.imag,C=l.data.get(m.dataId).values,b=l.data.get(y.dataId).values,[v,I,T]=r(i.shape,a.shape,d,h,C,b),E=l.makeTensorInfo(T,"float32",v),R=l.makeTensorInfo(T,"float32",I),N=Vo({inputs:{real:E,imag:R},backend:l});return l.disposeIntermediateTensorInfo(u),l.disposeIntermediateTensorInfo(x),l.disposeIntermediateTensorInfo(E),l.disposeIntermediateTensorInfo(R),N}else{let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=o||i.dtype,[f,d]=t(i.shape,a.shape,u,c,p);return l.makeTensorInfo(d,p,f)}}}function Wo(e){return(t,r,o,n,s,i)=>{let a=S.assertAndGetBroadcastShape(t,r),l=w.sizeFromShape(a),u=a.length,c=w.computeStrides(a),p=w.getTypedArrayFromDType("float32",l),f=w.getTypedArrayFromDType("float32",l),d=S.getBroadcastDims(t,a),h=S.getBroadcastDims(r,a),x=S.mergeRealAndImagArrays(o,n),g=S.mergeRealAndImagArrays(s,i),m=t.length,y=w.computeStrides(t),C=r.length,b=w.computeStrides(r);if(d.length+h.length===0)for(let v=0;v<p.length;v++){let I=v%x.length,T=v%g.length,E=e(x[I*2],x[I*2+1],g[T*2],g[T*2+1]);p[v]=E.real,f[v]=E.imag}else for(let v=0;v<p.length;v++){let I=w.indexToLoc(v,u,c),T=I.slice(-m);d.forEach(L=>T[L]=0);let E=w.locToIndex(T,m,y),R=I.slice(-C);h.forEach(L=>R[L]=0);let N=w.locToIndex(R,C,b),M=e(x[E*2],x[E*2+1],g[N*2],g[N*2+1]);p[v]=M.real,f[v]=M.imag}return[p,f,a]}}var Sc=Q((e,t)=>e+t),E2=Wo((e,t,r,o)=>({real:e+r,imag:t+o})),oG=st(or,Sc,E2);function ox(e,t,r,o,n){let s=w.sizeFromShape(o),i=w.makeZerosTypedArray(n,r);for(let a=0;a<e.length;a++){let l=e[a];if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s>0?i[l]+=t[a]:i[l]+=1)}return i}function nx(e,t,r,o=!1){let n=e.shape[0],s=e.shape[1],i=X([n,r],t.dtype);for(let a=0;a<n;a++)for(let l=0;l<s;l++){let u=e.get(a,l);if(u<0)throw new Error("Input x must be non-negative!");u>=r||(o?i.set(1,a,u):t.size>0?i.set(i.get(a,u)+t.get(a,l),a,u):i.set(i.get(a,u)+1,a,u))}return i}function mt(e){return(t,r,o)=>{let n=w.getArrayFromDType(r,t.length);for(let s=0;s<t.length;++s)n[s]=e(t[s],o);return n}}function Wi(e,t,r){let o=mt(t);return Bt(e,o,r)}function Bt(e,t,r){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;Ui(i,e);let a=s,l=a.data.get(i.dataId).values,u;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");u=S.fromUint8ToStringArray(l)}else u=l;let c=r||i.dtype,p=t(u,c,n);return a.makeTensorInfo(i.shape,c,p)}}var Ic=mt(e=>Math.ceil(e)),gG=Bt(Cs,Ic);function sx(e,t,r,o){let n=w.getArrayFromDType(r,w.sizeFromShape(t));if(o&&r!=="string"){let s=0;e.forEach(i=>{let a=w.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;e.forEach(i=>{let a=r==="string"?S.fromUint8ToStringArray(i.vals):i.vals,l=0;for(let u=0;u<i.shape[0];++u){let c=u*t[1]+s;for(let p=0;p<i.shape[1];++p)n[c+p]=a[l++]}s+=i.shape[1]})}return n}var $c=Q((e,t)=>e===t?1:0),SG=st(Ts,$c,null,"bool");var Tc=mt(e=>Math.exp(e)),_G=Bt(Es,Tc,"float32");var Ec=mt(e=>Math.expm1(e)),FG=Bt(_s,Ec);var _c=mt(e=>Math.floor(e)),LG=Bt(Rs,_c);var Ac=Q((e,t)=>Math.floor(e/t)),zG=st(xo,Ac,null,"int32");function ix(e,t,r,o,n,s,i,a,l){let u=X([o,s],r);for(let c=0;c<o;c++){let p=[],f=0;for(let d=0;d<n;d++){let h=e[c*n+d];f+=h*i[d],p.push(h)}if(f<0||f>=l/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let d=0;d<s;d++)u.values[c*s+d]=t.get(...t.indexToLoc(f*s+d))}return u}function ax(e,t,r){let o=X(r,e.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],l=i[2],u=t.locToIndex([a,l]);i[2]=t.values[u];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(o.values[n]=e.values[c])}return o}var Rc=Q((e,t)=>e>t?1:0),ZG=st(Ns,Rc,null,"bool");var Nc=Q((e,t)=>e>=t?1:0),oH=st(ks,Nc,null,"bool");var kc=Q((e,t)=>e<t?1:0),lH=st(Os,kc,null,"bool");var Fc=Q((e,t)=>e<=t?1:0),dH=st(Ps,Fc,null,"bool");function lx(e,t,r){let o=(t-e)/(r-1),n=w.makeZerosTypedArray(r,"float32");n[0]=e;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var Dc=mt(e=>Math.log(e)),bH=Bt(Ms,Dc);function ux(e,t,r,o){let n=w.getTypedArrayFromDType(o,w.sizeFromShape(r));for(let s=0;s<n.length;++s){let i=s*t,a=e[i];for(let l=0;l<t;++l){let u=e[i+l];(Number.isNaN(u)||u>a)&&(a=u)}n[s]=a}return n}var Oc=Q((e,t)=>Math.max(e,t)),EH=st(yo,Oc);var Pc=Q((e,t)=>Math.min(e,t)),kH=st(Us,Pc);var Mn=Q((e,t)=>e*t),_2=Wo((e,t,r,o)=>({real:e*r-t*o,imag:e*o+t*r})),MH=st(wo,Mn,_2);function cx(e,t,r){let o=w.createScalarValue(-1,r);return Mn([],t,o,e,r)}var Mc=Q((e,t)=>e!==t?1:0),HH=st(Vs,Mc,null,"bool");function px(e,t,r,o,n){let s=t.length,i=w.sizeFromShape(t),a=w.computeStrides(t),l=w.computeStrides(n),u=w.getTypedArrayFromDType(r,w.sizeFromShape(n));for(let c=0;c<i;++c){let p=w.indexToLoc(c,s,a),f=new Array(p.length);for(let h=0;h<f.length;h++)f[h]=p[o[h]];let d=w.locToIndex(f,s,l);u[d]=e[c]}return u}function fx(e,t,r,o){let[n,s]=S.computeOutAndReduceShapes(e,o),i=Et(t,"int32"),a=w.makeZerosTypedArray(w.sizeFromShape(n),i),l=w.sizeFromShape(s);for(let u=0;u<a.length;++u){let c=u*l,p=1;for(let f=0;f<l;++f)p*=r[c+f];a[u]=p}return{outVals:a,outShape:n,outDtype:i}}function A2(e,t,r){e.forEach((o,n)=>{if(o<0||o>=r){let s=w.indexToLoc(n,t.length,w.computeStrides(t)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${r})`)}})}function R2(e,t){for(let r=0;r<e.length;++r){let o=e[r],n=r===e.length-1?t:e[r+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function N2(e,t,r,o){let n=[],s=0,i=t.length-1+r.length,a=new Array(i).fill(null).map(()=>[0]);R2(r,o);let l=1;for(let u=0;u<t.length-1;++u){l*=t[u];let c=t[u+1];for(let p=1;p<l+1;++p)a[u].push(p*c)}for(let u=0;u<e.length;++u){let c=e[u],p=e[u]+1;for(let f=0;f<r.length;++f){let d=r[f],h=f+t.length-1;if(h>=0){let x=a[h],g=x[x.length-1]-d[c];for(let m=c;m<p;++m)a[h].push(d[m+1]+g)}c=d[c],p=d[p]}p!==c&&(n.push([c,p]),s+=p-c)}return{outSplits:a,valueSlices:n,numValues:s}}function k2(e){let t=[];for(let r=0;r<e.length;++r){let o=e[r].length,n=w.getArrayFromDType("int32",o);t.push(n),e[r].forEach((s,i)=>n[i]=s)}return t}function dx(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let o=t;o<e.length;o++)r[t-1]*=e[o];return r}function F2(e,t,r,o,n,s){let i=dx(t,2)[1],a=dx(s,2)[1],l=0;for(let u of r)for(let c=u[0];c<u[1];++c){for(let p=0;p<o;++p)n[l*a+p]=e[c*i+p];++l}}function D2(e,t,r,o,n){let s=t.slice();s[0]=n;let i=w.getArrayFromDType(r,w.sizeFromShape(s)),a=e.length,l=a===0?0:a/t[0];return F2(e,t,o,l,i,s),[i,s]}function hx(e,t,r,o,n,s,i,a){if(e.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let l=t[0][0]-1;if(A2(s,i,l),o.length===0)throw new Error("params.rank must be nonzero");let u=o[0],{outSplits:c,valueSlices:p,numValues:f}=N2(s,i,e,u),d=k2(c),h=D2(r,o,n,p,f);return[d,h[0],h[1]]}var mx=2147483647;function gx(e,t,r,o,n,s,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=t.length===0,l=n.length===0,u=i.length===0,c=[];a||c.push(t[0]),l||c.push(n[0]),u||c.push(i[0]);for(let g=1;g<c.length;++g)if(c[g]!==c[g-1])throw new Error("starts, limits, and deltas must have the same shape");let p=c.length===0?1:c[0],f=w.getArrayFromDType("int32",p+1);f[0]=0;for(let g=0;g<p;++g){let m=a?e[0]:e[g],y=l?o[0]:o[g],C=u?s[0]:s[g];if(C===0)throw new Error("Requires delta != 0");let b;if(C>0&&y<m||C<0&&y>m)b=0;else if(b=Math.ceil(Math.abs((y-m)/C)),b>mx)throw new Error(`Requires ((limit - start) / delta) <= ${mx}`);f[g+1]=f[g]+b}let d=f[p],h=w.getArrayFromDType(r,d),x=0;for(let g=0;g<p;++g){let m=f[g+1]-f[g],y=a?e[0]:e[g],C=u?s[0]:s[g];for(let b=0;b<m;++b)h[x++]=y,y+=C}return[f,h]}var ce=S.RowPartitionType,zo=class{constructor(t,r,o,n,s,i,a,l,u,c){this.shape=t,this.shapeShape=r,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=S.getRowPartitionTypesHelper(c),this.raggedRank=S.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===ce.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===ce.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let r=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case ce.VALUE_ROWIDS:return zo.getMaxWidthValueRowID(r);case ce.ROW_SPLITS:return zo.getMaxWidthRowSplit(r);default:throw new Error(`Cannot handle partition type ${ce[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let r=t.length;if(r===0||r===1)return 0;let o=0;for(let n=0;n<r-1;++n){let s=t[n+1]-t[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(t){let r=t.length;if(r===0)return 0;let o=0,n=t[0],s=0;for(let i=1;i<r;++i){let a=t[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(r-o,s)}tensorShapeFromTensor(t,r,o=!0){if(r.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return yx(t,o)}calculateOutputSize(t){let r=this.valuesShape,o=this.defaultValueShape;S.validateDefaultValueShape(o,r);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=S.combineRaggedTensorToTensorShapes(this.raggedRank,n,r);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,r,o){let n=Math.min(t,o),s=[],i=0;for(let a=0;a<n;++a,i+=r)s.push(i);for(let a=n;a<t;++a)s.push(-1);return w.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,r,o,n){let s=t.length,i=[];for(let a=0;a<s-1;++a){let l=t[a+1]-t[a],u=Math.min(n,l),c=r[a];c===-1&&(u=0);for(let p=0;p<u;++p)i.push(c),c+=o;for(let p=0;p<l-u;++p)i.push(-1)}if(s>0&&i.length!==t[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,r,o,n){let s=t.length,i=[];if(s===0)return[];let a=0,l=t[0];if(l>=r.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${r.length}`);let u=r[l];i.push(u);for(let c=1;c<s;++c){let p=t[c];if(p===l)u>=0&&(++a,a<n?u+=o:u=-1);else{if(a=0,l=p,p>=r.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${r.length}`);u=r[p]}i.push(u)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,r,o,n){let s=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case ce.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,r,o,n);case ce.ROW_SPLITS:if(s.length-1>r.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${r.length}`);return this.calculateOutputIndexRowSplit(s,r,o,n);default:throw new Error(`Unsupported partition type: ${ce[i]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let r=this.rowPartitionTypes[0];switch(r){case ce.FIRST_DIM_SIZE:return t[0];case ce.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case ce.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${ce[r]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let r=this.getFirstDimensionSize(),o=this.calculateOutputSize(r),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let l=n.length-2;l>=0;--l)n[l]=n[l+1]*o[l+1];let s=yx(o,!1),i=w.getArrayFromDType(this.valuesDType,w.sizeFromShape(s));if(n[0]*o[0]>0){let l=this.calculateFirstParentOutputIndex(r,n[0],o[0]);for(let u=1;u<=this.raggedRank;++u)l=this.calculateOutputIndex(u-1,l,n[u],o[u]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(t,r,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(t+1);let l=w.sizeFromShape(a),u=r.length,c=this.defaultValue;if(c.length!==l&&c.length!==1){let h=this.defaultValueShape;G(()=>{let x=ht(c,h);c=Xu(x,a).dataSync()})}let p=0,f=0,d=0;for(let h=0;h<=u;++h){let x=h<u?r[h]:-1;if(x===d){++d;continue}if(f<d){let g=s.subarray(p*l),m=i.subarray(f*l),y=(d-f)*l;xx(m,g,y)}if(h>=u){let g=o.length;x=Math.floor(g/l)}if(x>d)if(this.defaultValue.length===1)i.subarray(d*l,x*l).fill(this.defaultValue[0]),d=x;else for(;x>d;){let g=i.slice(d*l);xx(g,c,l),++d}x<0?(p=h+1,f=d):(p=h,f=d,d=f+1)}}};function xx(e,t,r){for(let o=0;o<r;o++)e[o]=t[o]}function yx(e,t){let r=[];for(let o of e){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}r.push(o)}return r}function wx(e,t,r,o,n,s,i,a,l,u){return new zo(e,t,r,o,n,s,i,a,l,u).compute()}function bx(e,t,r,o){let n=e===t,s=e<t&&r<0,i=t<e&&r>1;if(n||s||i)return w.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((t-e)/r)),l=w.makeZerosTypedArray(a,o);t<e&&r===1&&(r=-1),l[0]=e;for(let u=1;u<l.length;u++)l[u]=l[u-1]+r;return l}var Lc=mt(e=>1/Math.sqrt(e)),l5=Bt(Ks,Lc);function vx(e,t,r,o,n,s,i,a,l,u){let c=[o/n,n],p=e.values,f=t.values;if(o===0)return X(r,t.dtype);let d=l instanceof Te?l:X(c,t.dtype);typeof l=="string"||typeof l=="number"?d.values.fill(l):typeof l=="boolean"&&d.values.fill(+l);for(let h=0;h<s;h++){let x=[],g=0;for(let m=0;m<i;m++){let y=p[h*i+m];x.push(y),g+=y*a[m]}if(g<0||g>=o/n)throw new Error(`Invalid indices: ${x} does not index into ${r}`);for(let m=0;m<n;m++)u?d.values[g*n+m]+=f[h*n+m]:d.values[g*n+m]=t.rank===0?f[0]:f[h*n+m]}return d}var Cx=mt(e=>1/(1+Math.exp(-e))),m5=Wi(bo,e=>1/(1+Math.exp(-e)));function Sx(e,t,r,o,n){let s=Lt.isSliceContinous(o,t,r),i=w.sizeFromShape(r),a=w.computeStrides(o);if(s){let p=Lt.computeFlatOffset(t,a);return n==="string"?e.slice(p,p+i):e.subarray(p,p+i)}let l=n==="string"?S.fromUint8ToStringArray(e):e,u=X(o,n,l),c=X(r,n);for(let p=0;p<c.size;++p){let f=c.indexToLoc(p),d=f.map((h,x)=>h+t[x]);c.set(u.get(...d),...f)}return n==="string"?S.fromStringArrayToUint8(c.values):c.values}function Ix(e,t,r,o,n,s,i){let a=t[0],l=s[0],u=new Array(l),c=new Array(a),p=t[1];if(l===0){if(a!==0)throw new Error(S.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let g=w.getArrayFromDType(r,0),m=w.getArrayFromDType(n,0);return[g,[0,p],m,u,c]}let f=!0,d=0,h=new Array(l).fill(0);for(let g=0;g<a;++g){let m=e[g*p];if(m<0)throw new Error(S.getSparseFillEmptyRowsNegativeIndexErrorMessage(g,m));if(m>=l)throw new Error(S.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(g,m,l));++h[m],f=f&&m>=d,d=m}let x=!0;for(let g=0;g<l;++g){let m=h[g]===0;u[g]=m,x=x&&!m,h[g]=Math.max(h[g],1),g>0&&(h[g]+=h[g-1])}if(x&&f){let g=e,m=o;for(let y=0;y<a;++y)c[y]=y;return[g,[a,p],m,u,c]}else{let g=h[l-1],m=w.getArrayFromDType(r,g*p),y=w.getArrayFromDType(n,g),C=new Array(l).fill(0);for(let b=0;b<a;++b){let v=e[b*p],I=C[v],T=(v===0?0:h[v-1])+I;C[v]++;for(let E=0;E<p;++E)m[T*p+E]=e[b*p+E];y[T]=o[b],c[b]=T}for(let b=0;b<l;++b)if(C[b]===0){let I=b===0?0:h[b-1];m[I*p+0]=b;for(let T=1;T<p;++T)m[I*p+T]=0;y[I]=i}return[m,[g,p],y,u,c]}}function $x(e,t,r,o,n){let s=w.sizeFromShape(o),i=t[0],a=n.length,l=[],u=1,c=-1;for(let g=0;g<a;++g){let m=n[g];if(m===-1){if(c!==-1)throw new Error(S.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(c,g));c=g,l.push(1)}else{if(m<0)throw new Error(S.getSparseReshapeNegativeOutputDimErrorMessage(g,m));u*=m,l.push(m)}}if(c!==-1){if(u<=0)throw new Error(S.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let g=Math.trunc(s/u);if(u*g!==s)throw new Error(S.getSparseReshapeInputOutputMultipleErrorMessage(o,l));l[c]=g}if(w.sizeFromShape(l)!==s)throw new Error(S.getSparseReshapeInputOutputMismatchErrorMessage(o,l));let f=o.length,d=[];if(f>0){d[f-1]=1;for(let g=f-2;g>=0;--g)d[g]=d[g+1]*o[g+1]}let h=[];if(a>0){h[a-1]=1;for(let g=a-2;g>=0;--g)h[g]=h[g+1]*l[g+1]}let x=w.getArrayFromDType(r,i*a);for(let g=0;g<i;++g){let m=0;for(let y=0;y<f;++y)m+=e[g*f+y]*d[y];for(let y=0;y<a;++y)x[g*a+y]=Math.trunc(m/h[y]),m%=h[y]}return[x,[i,a],l]}function Tx(e,t,r,o,n,s=!1,i=0){let a=o.length,l=[t[0],e.length/t[0]],u=l[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(S.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=t.slice();f[0]=p;let d=f.reduce((C,b)=>C*b,1),h=w.getArrayFromDType(r,d);if(a===0)return p>0&&h.fill(i),[h,f];if(p<=0)throw new Error(S.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let x=0,g=1,m=0,y=n[x];for(;;){let C=0;if(g<a){if(C=n[g],y===C){++g;continue}if(y>=C)throw new Error(S.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=p)throw new Error(S.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,p));y>m&&h.fill(i,m*u,y*u);for(let b=x;b<g;++b){let v=o[b];if(v<0||v>=l[0])throw new Error(S.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(b,o[b],l[0]));for(let I=0;I<u;I++)h[y*u+I]+=e[v*u+I]}if(s)for(let b=0;b<u;b++)h[y*u+b]/=g-x;if(x=g,++g,m=y+1,y=C,g>a)break}return m<p&&h.fill(i,m*u,p*u),[h,f]}var Ex=mt(e=>Math.sqrt(e)),_5=Wi(vo,e=>Math.sqrt(e));var Bc=Q((e,t)=>{let r=e-t;return r*r}),F5=st(js,Bc);var Uc=mt((e,t)=>{let{pattern:r,replaceGlobal:o,rewrite:n}=t;return e.replace(new RegExp(r,o?"g":""),n)}),L5=Bt(Ys,Uc);function _x(e,t,r,o){let n=X(e,t.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*r[l]+o[l];n.set(t.get(...a),...i)}return n}var Vc=class{constructor(t,r,o,n,s,i){this.separator=w.encodeString(t),this.nGramWidths=r,this.leftPad=w.encodeString(o),this.rightPad=w.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,r){let o=this.getPadWidth(r);return Math.max(0,t+2*o-r+1)}createNGrams(t,r,o,n,s,i){for(let a=0;a<s;++a){let l=this.getPadWidth(i),u=Math.max(0,l-a),c=Math.max(0,l-(s-(a+1))),p=i-(u+c),f=r+(u>0?0:a-l),d=0;d+=u*this.leftPad.length;for(let y=0;y<p;++y)d+=t[f+y].length;d+=c*this.rightPad.length;let h=u+c+p-1;d+=h*this.separator.length,o[n+a]=new Uint8Array(d);let x=o[n+a],g=0,m=y=>y.forEach(C=>x[g++]=C);for(let y=0;y<u;++y)m(this.leftPad),m(this.separator);for(let y=0;y<p-1;++y)m(t[f+y]),m(this.separator);if(p>0){m(t[f+p-1]);for(let y=0;y<c;++y)m(this.separator),m(this.rightPad)}else{for(let y=0;y<c-1;++y)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(t,r){let o=t.length,n=r.length;if(n>0){let l=r[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let u=1;u<n;++u){let c=r[u]>=l;if(c=c&&r[u]<=o,!c)throw new Error(`Invalid split value ${r[u]}, must be in [${l}, ${o}]`);l=r[u]}if(l!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${l}`)}let s=n-1,i=w.getArrayFromDType("int32",n);if(o===0||n===0){let l=new Array(o);for(let u=0;u<=s;++u)i[u]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){let u=r[l]-r[l-1],c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(u,p)}),this.preserveShort&&u>0&&c===0&&(c=1),i[l]=i[l-1]+c}let a=new Array(i[s]);for(let l=0;l<s;++l){let u=r[l],c=i[l];if(this.nGramWidths.forEach(p=>{let f=r[l+1]-r[l],d=this.getNumNGrams(f,p);this.createNGrams(t,u,a,c,d,p),c+=d}),this.preserveShort&&c===i[l]){let p=r[l+1]-r[l];if(p===0)continue;let f=p+2*this.padWidth,d=1;this.createNGrams(t,u,a,c,d,f)}}return[a,i]}};function Ax(e,t,r,o,n,s,i,a){return new Vc(r,o,n,s,i,a).compute(e,t)}function O2(e,t,r,o){if(!e.length)return;if(t.length===0){for(let s=0;s<e.length;++s)o.push(e.subarray(s,s+1));return}if(t.length===1){let s=t[0],i=e.indexOf(s);for(;i!==-1;){let a=e.subarray(0,i);(!r||a.length!==0)&&o.push(a),e=e.subarray(i+1),i=e.indexOf(s)}(!r||e.length!==0)&&o.push(e);return}let n=0;for(let s=0;s<e.length+1;s++)if(s===e.length||t.indexOf(e[s])!==-1){let i=e.subarray(n,s);(!r||i.length!==0)&&o.push(i),n=s+1}}function Rx(e,t,r){let o=e.length,n=[],s=0,i=0,a=new Array(o);for(let f=0;f<o;++f){let d=n.length;O2(e[f],t,r,n);let h=n.length-d;a[f]=h,s+=h,i=Math.max(i,h)}let l=w.getArrayFromDType("int32",s*2),u=new Array(s),c=[o,i],p=0;for(let f=0;f<o;++f)for(let d=0;d<a[f];++d)l[p*2]=f,l[p*2+1]=d,u[p]=n[p],++p;return[l,u,c]}function Nx(e,t){let r=w.getArrayFromDType("int32",e.length);for(let o=0;o<e.length;++o)r[o]=w.fingerPrint64(e[o]).modulo(t).getLowBitsUnsigned();return r}var Wc=Q((e,t)=>e-t),P2=Wo((e,t,r,o)=>({real:e-r,imag:t-o})),Q5=st(Co,Wc,P2);function kx(e,t){let r=new Array(e.rank);for(let n=0;n<r.length;n++)r[n]=e.shape[n]*t[n];let o=X(r,e.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(e.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%e.shape[l];let a=e.locToIndex(i);o.values[n]=e.values[a]}return o}var Ln=(e,t)=>{let r=t.value-e.value;return r===0?e.index-t.index:r};function Fx(e,t,r=0,o=e.length-1){for(;o>r;){if(o-r>600){let a=o-r+1,l=t-r+1,u=Math.log(a),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(a-c)/a)*Math.sign(l-a/2),f=Math.max(r,Math.floor(t-l*c/a+p)),d=Math.min(o,Math.floor(t+(a-l)*c/a+p));Fx(e,t,f,d)}let n=e[t],s=r,i=o;for(w.swap(e,r,t),Ln(e[o],n)>0&&w.swap(e,r,o);s<i;){for(w.swap(e,s,i),s++,i--;Ln(e[s],n)<0;)s=s+1;for(;Ln(e[i],n)>0;)i=i-1}Ln(e[r],n)===0?w.swap(e,r,i):(i=i+1,w.swap(e,i,o)),i<=t&&(r=i+1),t<=i&&(o=i-1)}}function Dx(e,t,r,o,n){let s=t[t.length-1],[i,a]=[e.length/s,s],l=w.getTypedArrayFromDType(r,i*o),u=w.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let f=p*a,d=e.subarray(f,f+a),h=new Array(d.length);d.forEach((y,C)=>h[C]={value:y,index:C}),o<h.length&&(Fx(h,o),h=h.slice(0,o)),n&&h.sort(Ln);let x=p*o,g=l.subarray(x,x+o),m=u.subarray(x,x+o);for(let y=0;y<o;y++)g[y]=h[y].value,m[y]=h[y].index}let c=t.slice();return c[c.length-1]=o,[X(c,r,l),X(c,"int32",u)]}function Ox(e,t,r,o){let n=w.parseAxisParam(t,r)[0],s=[1,r[0],1];for(let h=0;h<n;h++)s[0]*=r[h];s[1]=r[n];for(let h=n+1;h<r.length;h++)s[2]*=r[h];let i=new Map,a=new Int32Array(r[n]),l=new Te(s,o,e),u=[],c=s[0]===1&&s[2]===1;for(let h=0;h<r[n];h++){let x;if(c)x=e[h].toString();else{let m=[];for(let y=0;y<s[0];y++)for(let C=0;C<s[2];C++)m.push(l.get(y,h,C));x=m.join(",")}let g=i.get(x);if(g!=null)a[h]=g;else{let m=i.size;i.set(x,m),a[h]=m,u.push(h)}}let p=s.slice();p[1]=i.size;let f=new Te(p,o);u.forEach((h,x)=>{for(let g=0;g<s[0];g++)for(let m=0;m<s[2];m++)f.set(l.get(g,h,m),g,x,m)});let d=r.slice();return d[n]=p[1],{outputValues:f.values,outputShape:d,indices:a}}var{addImpl:Px,bincountImpl:zi,bincountReduceImpl:Mx,castImpl:Lx,ceilImpl:Bx,concatImpl:Ux,equalImpl:Vx,expImpl:Wx,expm1Impl:zx,floorImpl:Gx,gatherNdImpl:Hx,gatherV2Impl:qx,greaterImpl:Kx,greaterEqualImpl:Xx,lessImpl:jx,lessEqualImpl:Yx,linSpaceImpl:Qx,logImpl:Zx,maxImpl:Jx,maximumImpl:t0,minimumImpl:e0,multiplyImpl:r0,negImpl:o0,notEqualImpl:n0,prodImpl:s0,raggedGatherImpl:i0,raggedRangeImpl:a0,raggedTensorToTensorImpl:l0,rangeImpl:u0,rsqrtImpl:c0,scatterImpl:p0,sigmoidImpl:f0,simpleAbsImpl:Gi,sliceImpl:d0,sparseFillEmptyRowsImpl:h0,sparseReshapeImpl:m0,sparseSegmentReductionImpl:Hi,sqrtImpl:g0,staticRegexReplaceImpl:x0,stridedSliceImpl:y0,stringNGramsImpl:w0,stringSplitImpl:b0,stringToHashBucketFastImpl:v0,subImpl:C0,tileImpl:S0,topKImpl:I0,transposeImpl:Vr,uniqueImpl:$0}=zc;function Gc(e,t){return["x","y","z","w","u","v"].slice(0,t).map(r=>`${e}.${r}`)}function at(e,t){return t===1?[e]:Gc(e,t)}function T0(e,t){if(e===1)return"rc";let r="";for(let o=0;o<e;o++)r+=t[o],o<e-1&&(r+=",");return r}var qi=class{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=K(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let r=at("rc",this.rank),o=W(this.rank),n=this.getOutOfBoundsCondition(r),s=this.getSetup(r),i=this.getOutput(r);this.userCode=`
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
            rEdge || cEdge ? 0. : getA(${r[3]})`}};var Go=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${M2(r,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Do():Fo(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${o}

        setOutput(result);
      }
    `}};function M2(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?Rg(["r","c","d"],"inputShape"):we(["r","c","d"],e)}
      return ivec3(r, c, d);
    }
  `}var Ki=class{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,r,o){let n=_0(r,o),s=A0(t,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=E0(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let l=this.freeTextures[s].pop();return this.usedTextures[s].push(l),l}let a;return n===bt.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):n===bt.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):n===bt.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):n===bt.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):n===bt.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,r,o,n){if(this.freeTextures==null)return;let s=_0(o,n),i=A0(r,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=E0(r,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=$().get("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let u=this.usedTextures[i],c=u&&u.indexOf(t);if(c==null||c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u[c]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;let t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);let r=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*r)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let t in this.freeTextures)this.freeTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(r=>{this.gpgpu.deleteMatrixTexture(r.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function L2(e,t){let r=e;if(t===r.R32F)return 4;if(t===r.R16F)return 2;if(t===r.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===r.RGBA16F)return 8;if(t===r.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function E0(e,t,r,o,n){let s=B2(t,o),i;if(n){let[l,u]=Ne(e[0],e[1]);i=l*u}else{let[l,u]=Mr(e[0],e[1]);i=l*u}let a=L2(r,s);return i*a}function B2(e,t){switch(e){case bt.PACKED_2X2_FLOAT32:return wc(t);case bt.PACKED_2X2_FLOAT16:return bc(t);case bt.UNPACKED_FLOAT32:return gc(t);case bt.UNPACKED_FLOAT16:return xc(t);case bt.PACKED_4X1_UNSIGNED_BYTE:return yc(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function U2(e){return $().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?bt.PACKED_2X2_FLOAT32:bt.UNPACKED_FLOAT32:e?bt.PACKED_2X2_FLOAT16:bt.UNPACKED_FLOAT16}function _0(e,t){if(e===$t.UPLOAD)return bt.PACKED_2X2_FLOAT32;if(e===$t.RENDER||e==null)return U2(t);if(e===$t.DOWNLOAD||e===$t.PIXELS)return bt.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function A0(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}var vt=class{constructor(t,r){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${r}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},pt="if (isnan(x)) return x;",R0="return x;",Hc="return abs(x);";var N0="return (x >= 0.0) ? x : (exp(x) - 1.0);",k0=pt+`
  return (x < 0.0) ? 0.0 : x;
`,F0=pt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Fe="return x;",D0="return 1.0 / (1.0 + exp(-1.0 * x));";var P0="return x;",M0=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,L0=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,B0=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,U0="return 1.0 / (1.0 + exp(-1.0 * x));",Ut=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${r}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var Xi=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length);let r=t.length,o=at("rc",r),n=W(r),s=T0(r,o),i=o.slice(-2),a=r<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var W2=Re.whereImpl,z2=1e-7,G2=1e-4,ji={};function H2(e){return e in ji||(ji[e]={}),ji[e]}var q2=$().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),K2=600;function X2(){return $().global.screen==null?1024:$().global.screen.height*$().global.screen.width*window.devicePixelRatio*K2/1024/1024}var Wr=class extends Cr{nextDataId(){return Wr.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!$().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let r;if(t!=null){if(t instanceof Uo)r=t;else{let o=jt($().getNumber("WEBGL_VERSION"),t);r=new Uo(o)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let o=jt($().getNumber("WEBGL_VERSION"));r=new Uo(o),this.binaryCache=H2($().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=r,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Ki(this.gpgpu),this.numMBBeforeWarning=X2(),this.texData=new cn(this,Be())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,r,o,n,s,i){let a=this.makeTensorInfo(r,o),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[n,s]},l.texShape=[n,s];let u=Fn(r),c=new Dn(u,!1,i),p=this.runWebGLProgram(c,[a],o,[[n,s]]);return p.shape=r,l.texture=null,this.disposeIntermediateTensorInfo(a),p.dataId}write(t,r,o){if(($().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||$().getBool("DEBUG"))&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let n={id:this.nextDataId()};return this.texData.set(n,{shape:r,dtype:o,values:t,usage:$t.UPLOAD,refCount:1}),n}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let r=this.texData.get(t);r.refCount++}decRef(t){if(this.texData.has(t)){let r=this.texData.get(t);r.refCount--}}move(t,r,o,n,s){if($().getBool("DEBUG")&&this.checkNumericalProblems(r),n==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:n,values:r,usage:$t.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let r=this.texData.get(t),{values:o,dtype:n,complexTensorInfos:s,slice:i,shape:a,isPacked:l}=r;if(i!=null){let f;l?f=new Ut(a,Fe):f=new vt(a,Fe);let d=this.runWebGLProgram(f,[{dataId:t,shape:a,dtype:n}],n),h=this.readSync(d.dataId);return this.disposeIntermediateTensorInfo(d),h}if(o!=null)return this.convertAndCacheOnCPU(t);if(n==="string")return o;let u=this.activeTimers!=null,c;u&&(c=w.now());let p;if(n==="complex64"){let f=this.readSync(s.real.dataId),d=this.readSync(s.imag.dataId);p=S.mergeRealAndImagArrays(f,d)}else p=this.getValuesFromTexture(t);return u&&(this.downloadWaitMs+=w.now()-c),this.convertAndCacheOnCPU(t,p)}async read(t){if(this.pendingRead.has(t)){let h=this.pendingRead.get(t);return new Promise(x=>h.push(x))}let r=this.texData.get(t),{values:o,shape:n,slice:s,dtype:i,complexTensorInfos:a,isPacked:l}=r;if(s!=null){let h;l?h=new Ut(n,Fe):h=new vt(n,Fe);let x=this.runWebGLProgram(h,[{dataId:t,shape:n,dtype:i}],i),g=this.read(x.dataId);return this.disposeIntermediateTensorInfo(x),g}if(o!=null)return this.convertAndCacheOnCPU(t);if($().getBool("DEBUG")&&!$().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&$().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null,c;if(i!=="complex64"&&$().get("WEBGL_BUFFER_SUPPORTED")){c=this.decode(t);let h=this.texData.get(c.dataId);u=this.gpgpu.createBufferFromTexture(h.texture.texture,...An(n))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(i==="complex64"){let h=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),x=h[0],g=h[1];p=S.mergeRealAndImagArrays(x,g)}else if(u==null)p=this.getValuesFromTexture(t);else{let h=w.sizeFromShape(n);p=this.gpgpu.downloadFloat32MatrixFromBuffer(u,h)}if(c!=null&&this.disposeIntermediateTensorInfo(c),u!=null){let h=this.gpgpu.gl;O(h,()=>h.deleteBuffer(u))}let f=this.convertAndCacheOnCPU(t,p),d=this.pendingRead.get(t);return this.pendingRead.delete(t),d.forEach(h=>h(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&Be().removeDataId(t,this),this.pendingDeletes--),f}readToGPU(t,r={}){let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,isPacked:l,texture:u}=o;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let d;l?d=new Ut(s,Fe):d=new vt(s,Fe);let h=this.runWebGLProgram(d,[{dataId:t,shape:s,dtype:a}],a),x=this.readToGPU(h,r);return this.disposeIntermediateTensorInfo(h),x}if(u==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let c=this.decode(t,r.customTexShape),p=Be().makeTensorFromTensorInfo(c),f=this.texData.get(c.dataId);return Object.assign({tensorRef:p},f.texture)}bufferSync(t){let r=this.readSync(t.dataId);if(t.dtype==="string")try{let o=r.map(n=>w.decodeString(n));return X(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return X(t.shape,t.dtype,r)}checkNumericalProblems(t){if(t!=null)for(let r=0;r<t.length;r++){let o=t[r];if(!cg(o))throw $().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${o} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${o} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:r,dtype:o,isPacked:n}=this.texData.get(t),s=w.sizeFromShape(r);if($().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let f=this.decode(t),d=this.texData.get(f.dataId),h=this.gpgpu.downloadMatrixFromPackedTexture(d.texture.texture,...An(r)).subarray(0,s);return this.disposeIntermediateTensorInfo(f),h}let i=$().getBool("WEBGL_PACK")&&n===!0,a=i?Fn(r):r,l=i?new Li(a):new Mi(a),u=this.runWebGLProgram(l,[{shape:a,dtype:o,dataId:t}],"float32"),c=this.texData.get(u.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(u),p}timerAvailable(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let r=this.activeTimers,o=[],n=!1;this.programTimersStack==null?(this.programTimersStack=o,n=!0):this.activeTimers.push(o),this.activeTimers=o,t();let s=w.flatten(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=w.flatten(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=r,n&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let l=await Promise.all(s);a.kernelMs=w.sum(l),a.getExtraProfileInfo=()=>l.map((u,c)=>({name:i[c],ms:u})).map(u=>`${u.name}: ${u.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:w.now(),endMs:null}}endTimer(t){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=w.now(),t)}async getQueryTime(t){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let r=t;return r.endMs-r.startMs}disposeData(t,r=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(r?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!r&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:o}=this.texData.get(t);return o!=null&&(this.disposeData(o.real.dataId,r),this.disposeData(o.imag.dataId,r)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:r,dtype:o,texShape:n,usage:s,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,u=this.dataRefCount.get(l);u>1?this.dataRefCount.set(l,u-1):(this.dataRefCount.delete(l),r!=null&&(this.numBytesInGPU-=this.computeBytes(n,o),this.textureManager.releaseTexture(r,n,s,i)));let c=this.texData.get(t);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,r=q2){return $().getBool("WEBGL_CPU_FORWARD")&&t.every(o=>this.texData.get(o.dataId).texture==null&&w.sizeFromShape(o.shape)<r)}getGPGPUContext(){return this.gpgpu}where(t){S.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let r=t.dataSync();return W2(t.shape,r)}packedUnaryOp(t,r,o){let n=new Ut(t.shape,r),s=this.compileAndRun(n,[t],o);return Be().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let n=Gi(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,n)}if($().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Hc,t.dtype);let r=new vt(t.shape,Hc),o=this.compileAndRun(r,[t]);return Be().makeTensorFromTensorInfo(o)}makeTensorInfo(t,r,o){let n;if(r==="string"&&o!=null&&o.length>0&&w.isString(o[0])){let s=o.map(i=>w.encodeString(i));n=this.write(s,t,r)}else n=this.write(o,t,r);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:r}}makeOutput(t,r,o){return Be().makeTensorFromTensorInfo(this.makeTensorInfo(t,r,o),this)}unpackTensor(t){let r=new Xi(t.shape);return this.runWebGLProgram(r,[t],t.dtype)}packTensor(t){let r=new qi(t.shape),o=!0;return this.runWebGLProgram(r,[t],t.dtype,null,o)}packedReshape(t,r){let o=[cr(t.shape),...pr(t.shape)],n={dtype:t.dtype,shape:o,dataId:t.dataId},s=[cr(r),...pr(r)],i=new Go(s,o),a=!0,l=[o],u=this.runWebGLProgram(i,[n],t.dtype,l,a);return{dataId:u.dataId,shape:r,dtype:u.dtype}}decode(t,r){let o=this.texData.get(t),{isPacked:n,shape:s,dtype:i}=o;if(r!=null){let f=w.sizeFromShape(s),d=r[0]*r[1]*4;w.assert(f<=d,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let a=Fn(s),l;n?l=new Pi(a):l=new Oi(a);let u=!0,c=[r??An(a)],p=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,c,u,r);return{dtype:i,shape:s,dataId:p.dataId}}runWebGLProgram(t,r,o,n,s=!1,i){let a=this.makeTensorInfo(t.outputShape,o),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===ur.DENSE){let m=i??An(t.outputShape);l.texShape=m.map(y=>y*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),w.sizeFromShape(a.shape)===0)return l.values=w.getTypedArrayFromDType(a.dtype,0),a;let u=[],c=r.map(m=>{if(m.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let y=this.texData.get(m.dataId);if(y.texture==null){if(!t.packedInputs&&w.sizeFromShape(m.shape)<=$().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:m.shape,texData:null,isUniform:!0,uniformValues:y.values};t.packedInputs&&(y.isPacked=!0,y.shape=m.shape)}if(this.uploadToGPU(m.dataId),!!y.isPacked!=!!t.packedInputs)m=y.isPacked?this.unpackTensor(m):this.packTensor(m),u.push(m),y=this.texData.get(m.dataId);else if(y.isPacked&&!Lr(y.shape,m.shape)){let C=m,b=m.shape;m.shape=y.shape,m=this.packedReshape(m,b),u.push(m),y=this.texData.get(m.dataId),C.shape=b}return{shape:m.shape,texData:y,isUniform:!1}});this.uploadToGPU(a.dataId);let p={shape:a.shape,texData:l,isUniform:!1},f=Lg(t,c,p),d=this.getAndSaveBinary(f,()=>Pg(this.gpgpu,t,c,p)),h=this.activeTimers!=null,x;h&&(x=this.startTimer()),$().get("ENGINE_COMPILE_ONLY")||Mg(this.gpgpu,d,c,p,n),u.forEach(m=>this.disposeIntermediateTensorInfo(m)),h&&(x=this.endTimer(x),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(x)}));let g=$().get("WEBGL_FLUSH_THRESHOLD");if(g>0){let m=w.now();m-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=m)}if(!$().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&s===!1){let m=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),m}return a}compileAndRun(t,r,o,n,s=!1){return o=o||r[0].dtype,this.runWebGLProgram(t,r,o,n,s)}getAndSaveBinary(t,r){return t in this.binaryCache||(this.binaryCache[t]=r()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||($().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(r=>{this.gpgpu.deleteProgram(this.binaryCache[r].webGLProgram),delete this.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=G(()=>{if(!$().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=$().getBool("DEBUG");$().set("DEBUG",!1);let r=this.abs(_t(1e-8)).dataSync()[0];if($().set("DEBUG",t),r>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?z2:G2}uploadToGPU(t){let r=this.texData.get(t),{shape:o,dtype:n,values:s,texture:i,usage:a,isPacked:l}=r;if(i!=null)return;let u=this.activeTimers!=null,c;u&&(c=w.now());let p=r.texShape;if(p==null&&(p=Sg(o,l),r.texShape=p),s!=null){let f=Fn(o),d,h=p[1],x=p[0],g=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(l||!g)&&([h,x]=Ne(p[0],p[1])),l?d=new Bi(f,g):d=new Dn(f,g);let m=g?[x,h]:p,y=this.makeTensorInfo(m,n),C=this.texData.get(y.dataId);g?C.usage=$t.PIXELS:C.usage=$t.UPLOAD,C.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(y.dataId),h,x,s);let b=[[x,h]],v=!0,I=this.runWebGLProgram(d,[y],n,b,v),T=this.texData.get(I.dataId);r.texShape=T.texShape,r.isPacked=T.isPacked,r.usage=T.usage,$().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(r.texture=T.texture,r.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(y),u&&(this.uploadWaitMs+=w.now()-c)}else{let f=this.acquireTexture(p,a,n,l);r.texture=f}}convertAndCacheOnCPU(t,r){let o=this.texData.get(t),{dtype:n}=o;return r!=null&&(o.values=j2(r,n)),o.values}acquireTexture(t,r,o,n){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,r,n)}computeBytes(t,r){return t[0]*t[1]*w.bytesPerElement(r)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,r]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(r));return Promise.all(t)}else{for(let[,r]of Object.entries(this.binaryCache)){let o=new Promise(n=>{try{this.checkCompletion_(r),n(!0)}catch(s){throw s}});t.push(o)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await oc(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(pc(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){let{variablesLocations:r,customUniformLocations:o,infLoc:n,nanLoc:s,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=mc(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=r,t.customUniformLocations=o,t.infLoc=n,t.nanLoc=s,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,r,o){t.channels=t.channels||"RGBA";let{texture:n,height:s,width:i,channels:a}=t,l=Be().backend;if(!l.gpgpu.gl.isTexture(n))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let u=l.writeTexture(n,r,o,s,i,a);return Be().makeTensorFromDataId(u,r,o,l)}};Wr.nextDataId=0;function j2(e,t){if(t==="float32"||t==="complex64")return e;if(t==="int32"||t==="bool"){let r=t==="int32"?new Int32Array(e.length):new Uint8Array(e.length);for(let o=0;o<r.length;++o)r[o]=Math.round(e[o]);return r}else throw new Error(`Unknown dtype ${t}`)}ar.isBrowser()&&gm("webgl",()=>new Wr,2);var Ho=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var ne=class{constructor(t,r,o){this.variableNames=["A","B"],this.outputShape=S.assertAndGetBroadcastShape(r,o),this.enableShapeUniforms=K(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var Yt=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var pe=class{constructor(t,r,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=S.assertAndGetBroadcastShape(r,o);let s=this.outputShape.length;this.enableShapeUniforms=K(s);let i="";if(n)if(s===0||w.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${W(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let l=at("coords",s);this.enableShapeUniforms?i+=`
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
    `}};function lt(e){let{inputs:t,backend:r}=e,{x:o}=t;return r.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var V0={kernelName:Er,backendName:"webgl",kernelFunc:lt};function Vt(e){let{inputs:t,backend:r}=e,{real:o,imag:n}=t,s=r.makeTensorInfo(o.shape,"complex64"),i=r.texData.get(s.dataId),a=lt({inputs:{x:o},backend:r}),l=lt({inputs:{x:n},backend:r});return i.complexTensorInfos={real:a,imag:l},s}var W0={kernelName:mn,backendName:"webgl",kernelFunc:Vt};var qc="return (a < 0.) ? b * a : a;",Kc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Y2(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{alpha:s}=o,i=r.makeTensorInfo([],"float32",w.createScalarValue(s,"float32")),a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pe(Kc,n.shape,i.shape):new ne(qc,n.shape,i.shape),l=r.runWebGLProgram(a,[n,i],"float32");return r.disposeIntermediateTensorInfo(i),l}var z0={kernelName:Ds,backendName:"webgl",kernelFunc:Y2};var Xc="return (a < 0.) ? b * a : a;",jc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Q2(e){let{inputs:t,backend:r}=e,{x:o,alpha:n}=t,s=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pe(jc,o.shape,n.shape):new ne(Xc,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],"float32")}var G0={kernelName:zs,backendName:"webgl",kernelFunc:Q2};var fe="if (isnan(x)) return x;";function P({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,l=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&r!=null){let p=a.texData.get(i.dataId),f=r(p.values,l);return a.makeTensorInfo(i.shape,l,f)}let u=$().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null,c;return u?c=new Ut(i.shape,t):c=new vt(i.shape,e),a.runWebGLProgram(c,[i],l)}}function q({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:l,b:u}=i,c=a;if(o&&l.dtype==="complex64"){let h=c.texData.get(l.dataId),x=c.texData.get(u.dataId),[g,m]=[[h.complexTensorInfos.real,x.complexTensorInfos.real],[h.complexTensorInfos.imag,x.complexTensorInfos.imag]].map(C=>{let[b,v]=C,I={dataId:b.dataId,dtype:b.dtype,shape:l.shape},T={dataId:v.dataId,dtype:v.dtype,shape:u.shape},E=new ne(e,l.shape,u.shape);return c.runWebGLProgram(E,[I,T],Et(b.dtype,v.dtype))}),y=Vt({inputs:{real:g,imag:m},backend:c});return c.disposeIntermediateTensorInfo(g),c.disposeIntermediateTensorInfo(m),y}let p=s||Et(l.dtype,u.dtype);if((l.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([l,u]))&&n!=null){let h=c.texData.get(l.dataId).values,x=c.texData.get(u.dataId).values,g=l.dtype==="string"?S.fromUint8ToStringArray(h):h,m=l.dtype==="string"?S.fromUint8ToStringArray(x):x,[y,C]=n(l.shape,u.shape,g,m,p),b=c.makeTensorInfo(C,p),v=c.texData.get(b.dataId);return v.values=y,b}let f=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null,d;return f?d=new pe(t,l.shape,u.shape,r):d=new ne(e,l.shape,u.shape),c.runWebGLProgram(d,[l,u],p)}}function He(e,t=!1){if(e==="linear")return t?P0:R0;if(e==="relu")return t?L0:k0;if(e==="elu")return t?M0:N0;if(e==="relu6")return t?B0:F0;if(e==="prelu")return t?jc:Xc;if(e==="leakyrelu")return t?Kc:qc;if(e==="sigmoid")return t?U0:D0;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var qo=class{constructor(t,r,o,n=!1,s=!1,i=!1,a=null,l=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=K(this.outputShape.length);let c=n?t[1]:t[2],p=Math.ceil(c/2),f=n?"i * 2, rc.y":"rc.y, i * 2",d=s?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],x=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],g="",m="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,m="result = activation(result);");let y=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let C="rc.x",b="rc.x";t[0]<r[0]?C=`imod(rc.x, ${t[0]})`:r[0]<t[0]&&(b=`imod(rc.x, ${r[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${C};
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
    `}};var Yc={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},Bn=class{constructor(t,r,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=S.assertAndGetBroadcastShape(r,o),this.userCode=`
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
    `}};var H0="return a * b;";function Un(e){let{inputs:t,backend:r}=e,{a:o,b:n}=t,s=S.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),u=new Bn(Yc.REAL,o.shape,n.shape),c=new Bn(Yc.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:n.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:n.shape}],f=r.runWebGLProgram(u,p,"float32"),d=r.runWebGLProgram(c,p,"float32"),h=Vt({inputs:{real:f,imag:d},backend:r});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),h}if(r.shouldExecuteOnCPU([o,n])){let a=r.texData.get(o.dataId),l=r.texData.get(n.dataId),[u,c]=r0(o.shape,n.shape,a.values,l.values,s),p=r.makeTensorInfo(c,s),f=r.texData.get(p.dataId);return f.values=u,p}let i;return $().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new pe(H0,o.shape,n.shape):i=new ne(H0,o.shape,n.shape),r.runWebGLProgram(i,[o,n],s)}var q0={kernelName:wo,backendName:"webgl",kernelFunc:Un};function K0(e,t,r){let o=[cr(e.shape),...pr(e.shape)],n={dtype:e.dtype,shape:o,dataId:e.dataId},s=[cr(t),...pr(t)],i=new Go(s,o),a=!0,l=[o],u=r.runWebGLProgram(i,[n],e.dtype,l,a);return{dataId:u.dataId,shape:t,dtype:u.dtype}}function _(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{shape:s}=o,i=r,a=w.sizeFromShape(n.shape),l=w.inferFromImplicitShape(s,a),u=w.sizeFromShape(l);w.assert(a===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let c=i.texData.get(n.dataId);return c.isPacked&&!Lr(n.shape,l)&&!(c.texture!==null&&Lr(c.shape,l))?K0(n,l,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype})}var X0={kernelName:Hs,backendName:"webgl",kernelFunc:_};var Vn=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a=Math.floor(o/4)*4,l=o%4,u="sumValue += dot(values, ones);";if(r!=null){let p=1/r;u=`sumValue += dot(values * ${w.isInt(p)?p.toPrecision(2):p}, ones);`}let c="";s%o>0&&(c=`
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
    `}};var Yi=class{constructor(t,r){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a="0.0",l="";r==="prod"?a="1.0":r==="min"?(a="1.0 / 1e-20",l="min"):r==="max"&&(a="-1.0 / 1e-20",l="max");let u=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="sum"?u="sumValue":r==="prod"?u="prodValue":r==="all"?u="allValue":r==="any"&&(u="anyValue");let c=Math.floor(o/4)*4,p=o%4,f=`
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

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${f}
        }

        int inIdx = inOffset + ${c};
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
        setOutput(${u});
      }
    `}};function J2(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let r=t.length?t[t.length-1].outSize:e[1],o=S.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:o,outSize:Math.ceil(r/o)})}return t}function Qt(e,t,r,o){let n=J2(e.shape),s=e;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:l,outSize:u}=n[i],c,p;r==="mean"?c=i===0?new Vn({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},a):new Vn({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u}):c=new Yi({windowSize:l,inSize:a,batchSize:e.shape[0],outSize:u},r),p=s,s=o.runWebGLProgram(c,[s],t),p.dataId!==e.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var Qi=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[r[i]];this.outputShape=o,this.rank=o.length;let n=W(this.rank),s=t_(r);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function t_(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(t);for(let n=0;n<e.length;n++)o[e[n]]=r[n];return o.join()}var Zi=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(t.length);for(let c=0;c<o.length;c++)o[c]=t[r[c]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=W(this.rank),s=Gc("rc",this.rank),i=new Array(this.rank);for(let c=0;c<r.length;c++)i[r[c]]=s[c];let a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${o[this.rank-1]}`,u=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
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
    `}};function fr(e,t,r){let o=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Zi(e.shape,t):new Qi(e.shape,t);return r.runWebGLProgram(o,[e],e.dtype)}function j0(e,t,r,o){let n=t,s=e.shape.length,i=w.parseAxisParam(n,e.shape),a=i,l=S.getAxesPermutation(a,s),u=l!=null,c=e;u&&(c=fr(e,l,o),a=S.getInnerMostAxes(a.length,s)),S.assertAxesAreInnerMostDims("sum",a,s);let[p,f]=S.computeOutAndReduceShapes(c.shape,a),d=p;r&&(d=S.expandShapeToKeepDim(p,i));let h=w.sizeFromShape(f),g=w.sizeFromShape(e.shape)/h,m=_({inputs:{x:c},attrs:{shape:[g,h]},backend:o}),y=Fr(e.dtype),C=Qt(m,y,"sum",o),b=_({inputs:{x:C},attrs:{shape:d},backend:o});return o.disposeIntermediateTensorInfo(m),o.disposeIntermediateTensorInfo(C),u&&o.disposeIntermediateTensorInfo(c),b}function zr(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o;return j0(n,s,i,r)}var Y0={kernelName:Xs,backendName:"webgl",kernelFunc:zr};function Z(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{perm:s}=o,i=r,a=n.shape.length,l=new Array(a);for(let c=0;c<l.length;c++)l[c]=n.shape[s[c]];let u;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,f=Vr(p,n.shape,n.dtype,s,l);u=i.makeTensorInfo(l,n.dtype);let d=i.texData.get(u.dataId);d.values=f}else u=fr(n,s,i);return u}var Q0={kernelName:So,backendName:"webgl",kernelFunc:Z};var Qc=1e3;function Gr({a:e,b:t,transposeA:r,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){let u=e.shape.length,c=t.shape.length,p=r?e.shape[u-2]:e.shape[u-1],f=o?t.shape[c-1]:t.shape[c-2],d=r?e.shape[u-1]:e.shape[u-2],h=o?t.shape[c-2]:t.shape[c-1],x=e.shape.slice(0,-2),g=t.shape.slice(0,-2),m=w.sizeFromShape(x),y=w.sizeFromShape(g),b=In.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([d,h]);w.assert(p===f,()=>`Error in matMul: inner shapes (${p}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${o} must match.`);let v=r?[m,p,d]:[m,d,p],I=o?[y,h,f]:[y,f,h],T=_({inputs:{x:e},backend:n,attrs:{shape:v}}),E=_({inputs:{x:t},backend:n,attrs:{shape:I}}),R=[T,E],N=Math.max(m,y),M=r?T.shape[1]:T.shape[2],L=s!=null,ut=i!=null,rt=l==="leakyrelu",U=l!=null?He(l,!0):null,J=L||ut||rt||U!=null,St;if((d===1||h===1)&&M>Qc&&J===!1){let he=T,Ie=E;r&&(he=Z({inputs:{x:T},backend:n,attrs:{perm:[0,2,1]}}),R.push(he)),o&&(Ie=Z({inputs:{x:E},backend:n,attrs:{perm:[0,2,1]}}),R.push(Ie));let lo=h!==1,ms=h===1,ou=he;lo&&(ou=_({inputs:{x:he},backend:n,attrs:{shape:[N,M,1]}}),R.push(ou));let US=h===1?2:1,nu=Ie;ms&&(nu=_({inputs:{x:Ie},backend:n,attrs:{shape:[N,1,M]}}),R.push(nu));let lf=Un({inputs:{a:ou,b:nu},backend:n});St=zr({inputs:{x:lf},backend:n,attrs:{axis:US,keepDims:!0}}),R.push(lf)}else{let he=Et(e.dtype,t.dtype),Ie=new qo(v,I,[N,d,h],r,o,L,U,ut,rt),lo=[T,E];if(s!=null&&lo.push(s),ut&&lo.push(i),rt){let ms=n.makeTensorInfo([],"float32",w.createScalarValue(a,"float32"));lo.push(ms),R.push(ms)}St=n.runWebGLProgram(Ie,lo,he)}let It=_({inputs:{x:St},backend:n,attrs:{shape:b}});R.push(St);for(let he of R)n.disposeIntermediateTensorInfo(he);return It}function e_(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:p}=o;return Gr({a:n,b:s,transposeA:l,transposeB:u,backend:r,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:c})}var Z0={kernelName:Ih,backendName:"webgl",kernelFunc:e_};var J0="return abs(x);";function r_(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=r.texData.get(o.dataId),i=Gi(s.values);return r.makeTensorInfo(o.shape,o.dtype,i)}let n;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Ut(o.shape,J0):n=new vt(o.shape,J0),r.runWebGLProgram(n,[o],o.dtype)}var ty={kernelName:hn,backendName:"webgl",kernelFunc:r_};var o_=pt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,n_=P({opSnippet:o_}),ey={kernelName:mf,backendName:"webgl",kernelFunc:n_};var s_=pt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,i_=P({opSnippet:s_}),ry={kernelName:gf,backendName:"webgl",kernelFunc:i_};var oy="return a + b;",a_=q({opSnippet:oy,packedOpSnippet:oy,supportsComplex:!0,cpuKernelImpl:Px}),ny={kernelName:or,backendName:"webgl",kernelFunc:a_};var Ji=class{constructor(t,r){this.outputShape=[],this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var ta=class{constructor(t,r){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=r.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function ea(e){let{inputs:t,backend:r}=e,o=t;if(o.length===1)return lt({inputs:{x:o[0]},backend:r});if(o.length>$().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let l=Math.floor(o.length/2),u=ea({inputs:o.slice(0,l),backend:r}),c=ea({inputs:o.slice(l),backend:r});return ea({inputs:[u,c],backend:r})}let n=o.map(l=>l.dtype).reduce((l,u)=>Et(l,u)),s=o.map(l=>l.shape),a=$().getBool("WEBGL_PACK")?new ta(o[0].shape,s):new Ji(o[0].shape,s);return r.runWebGLProgram(a,o,n)}var sy={kernelName:xf,backendName:"webgl",kernelFunc:ea};function l_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=Z({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,a)),S.assertAxesAreInnerMostDims("all",u,a);let[f,d]=S.computeOutAndReduceShapes(p.shape,u),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=Qt(x,x.dtype,"all",r),m;if(i){let y=S.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),c!=null&&r.disposeIntermediateTensorInfo(p),m}var iy={kernelName:yf,backendName:"webgl",kernelFunc:l_};function u_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=Z({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,a)),S.assertAxesAreInnerMostDims("any",u,a);let[f,d]=S.computeOutAndReduceShapes(p.shape,u),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=Qt(x,x.dtype,"any",r),m;if(i){let y=S.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),c!=null&&r.disposeIntermediateTensorInfo(p),m}var ay={kernelName:wf,backendName:"webgl",kernelFunc:u_};var ra=class{constructor(t,r,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=t;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=r==="max"?">":"<",l=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `}};var oa=class{constructor(t,r,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,w.assert(t.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=t[t.length-1],i=Math.ceil(s/r);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,l=a.length,u=W(l),c=at("coords",l),p,f;if(i===1){f=l+1;let E=W(f);p=`
        ${E} sourceLocR = ${E}(${c.join()}, 0);
        ++${c[l-1]};
        ${E} sourceLocG = ${E}(${c.join()}, 0);
        ++${c[l-2]};
        ${E} sourceLocA = ${E}(${c.join()}, 0);
        --${c[l-1]};
        ${E} sourceLocB = ${E}(${c.join()}, 0);
        --${c[l-2]};`}else f=l,p=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;let d=["x","y","z","w","u","v"].slice(0,f),h="."+d[f-1],x=d.map(E=>"int "+E),g=at("sourceLocR",f-1).concat("inIdx.r"),m=at("sourceLocG",f-1).concat("inIdx.g"),y=at("sourceLocB",f-1).concat("inIdx.b"),C=at("sourceLocA",f-1).concat("inIdx.a"),b=o==="max"?"greaterThan":"lessThan",v=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${C.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${y.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${C.join()}) : 0.)`,T=n?"":`
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
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${a[l-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${h}, sourceLocG${h},
          sourceLocB${h}, sourceLocA${h}) * ${r};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${r}; i++) {
          inIdx = srcIdx;
          ${v}
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
    `}};function ly(e,t,r,o=null){let n=t.shape[0],s=t.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=S.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},l=new ra(a,r,o==null),u=[t];o!=null&&u.push(o);let c=e.runWebGLProgram(l,u,"int32");if(c.shape[1]===1)return c;let p=ly(e,t,r,c);return e.disposeIntermediateTensorInfo(c),p}function uy(e,t,r,o=null){let n=o!=null?o.shape:t.shape,s=n[n.length-1],i=S.computeOptimalWindowSize(s),a=new oa(n,i,r,o==null),l=o==null?[t]:[t,o],u=e.runWebGLProgram(a,l,"int32");if(u.shape.length===t.shape.length){let c=uy(e,t,r,u);return e.disposeIntermediateTensorInfo(u),c}return u}function na(e,t,r,o){let n=[r];if(S.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,t.shape.length),!$().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let s=[],i=e.texData.get(t.dataId),a=i!==null&&i.isPacked,l=t;a&&(l=e.unpackTensor(t),s.push(l));let[u,c]=S.computeOutAndReduceShapes(l.shape,n),p=w.sizeFromShape(c),f=_({inputs:{x:l},backend:e,attrs:{shape:[-1,p]}});s.push(f);let d=ly(e,f,o);s.push(d);let h=_({inputs:{x:d},backend:e,attrs:{shape:u}});return s.forEach(x=>e.disposeIntermediateTensorInfo(x)),h}return uy(e,t,o)}function c_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=w.parseAxisParam(s,n.shape),a=S.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=Z({inputs:{x:n},backend:r,attrs:{perm:a}}),u.push(l),i=S.getInnerMostAxes(i.length,l.shape.length)),S.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);let c=na(r,l,i[0],"max");return u.forEach(p=>r.disposeIntermediateTensorInfo(p)),c}var cy={kernelName:bf,backendName:"webgl",kernelFunc:c_};function p_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s}=o,i=w.parseAxisParam(s,n.shape),a=S.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=Z({inputs:{x:n},backend:r,attrs:{perm:a}}),u.push(l),i=S.getInnerMostAxes(i.length,l.shape.length)),S.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);let c=na(r,l,i[0],"min");return u.forEach(p=>r.disposeIntermediateTensorInfo(p)),c}var py={kernelName:vf,backendName:"webgl",kernelFunc:p_};var f_=pt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,d_=P({opSnippet:f_}),fy={kernelName:Cf,backendName:"webgl",kernelFunc:d_};var h_=pt+"return log(x + sqrt(x * x + 1.0));",m_=P({opSnippet:h_}),dy={kernelName:Sf,backendName:"webgl",kernelFunc:m_};var g_=pt+`
  return atan(x);
`,x_=P({opSnippet:g_}),hy={kernelName:If,backendName:"webgl",kernelFunc:x_};var y_=Ho+`
  return atan(a, b);
`,w_=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Yt+`
  return result;
`,b_=q({opSnippet:y_,packedOpSnippet:w_}),my={kernelName:Tf,backendName:"webgl",kernelFunc:b_};var v_=pt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,C_=P({opSnippet:v_}),gy={kernelName:$f,backendName:"webgl",kernelFunc:C_};var be=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,u=t.dilationHeight,c=t.dilationWidth,p=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;let x=r==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,m=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`,y="0.0";if(x||(y="-1.0 / 1e-20"),o){let E=">=";this.userCode=`
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
              if (value ${E} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?g:m:`wR * ${f} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let C="max",b=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(b="avgValue / max(count, 1.0)");let v=Math.floor(i/4)*4,I=i%4,T=`
      if (${x}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
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
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${T}
          }

          int xC = xCCorner + ${v};
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
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${T}
          }
        }
        setOutput(${b});
      }
    `}},dr=class{constructor(t,r,o,n=!1,s=!1){if(this.variableNames=["x"],r==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,u=t.strideWidth,c=t.dilationDepth,p=t.dilationHeight,f=t.dilationWidth,d=t.effectiveFilterDepth,h=t.effectiveFilterHeight,x=t.effectiveFilterWidth,g=t.padInfo.front,m=t.padInfo.top,y=t.padInfo.left;this.outputShape=t.outShape;let C=r==="avg",b="0.0";if(C||(b="-1.0 / 1e-20"),o){let N=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${u});
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
              wD += ${c}) {
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
                if (value ${N} currMinMaxValue) {
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
      `;return}let v="max",I=`${r}(${r}(${r}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;r==="avg"&&(I="avgValue / max(count, 1.0)");let T=Math.floor(i/4)*4,E=i%4,R=`
      if (${C}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${u});
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
            wD += ${c}) {
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
    `}};function S_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;ke(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;w.assert(S.eitherStridesOrDilationsAreOne(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=S.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&w.arraysEqual(c.inShape,c.outShape))return lt({inputs:{x:n},backend:r});let p=new be(c,"avg",!1);return r.runWebGLProgram(p,[n],"float32")}var xy={kernelName:Ef,backendName:"webgl",kernelFunc:S_};function I_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o,c=[1,1,1],p=S.computePool3DInfo(n.shape,s,i,c,a,l,u),f=new dr(p,"avg",!1);return r.runWebGLProgram(f,[n],"float32")}var yy={kernelName:Af,backendName:"webgl",kernelFunc:I_};var sa=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,u=t.effectiveFilterWidth,c=l-1-t.padInfo.top,p=u-1-t.padInfo.left,f=1/(r*o);this.userCode=`
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
    `}},ia=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,d=t.effectiveFilterWidth,h=p-1-t.padInfo.front,x=f-1-t.padInfo.top,g=d-1-t.padInfo.left,m=1/(r*o*n);this.userCode=`
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
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
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
    `}};function $_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],f=S.computePool3DInfo(i.shape,a,l,p,u,c),d=new ia(f);return r.runWebGLProgram(d,[n],i.dtype)}var wy={kernelName:Rf,backendName:"webgl",kernelFunc:$_};function T_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s;ke([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:u}=o,c=S.computePool2DInfo(i.shape,a,l,1,u),p=new sa(c);return r.runWebGLProgram(p,[n],i.dtype)}var by={kernelName:_f,backendName:"webgl",kernelFunc:T_};function E_(e){let{inputs:t,backend:r,attrs:o}=e,{a:n,b:s}=t,{transposeA:i,transposeB:a}=o;return Gr({a:n,b:s,transposeA:i,transposeB:a,backend:r})}var vy={kernelName:vs,backendName:"webgl",kernelFunc:E_};var aa=class{constructor(t,r,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],S.assertAndGetBroadcastShape(t,r),S.assertAndGetBroadcastShape(t,o);let a="0.0";n!=null&&(S.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(S.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var la=class{constructor(t,r,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],S.assertAndGetBroadcastShape(t,r),S.assertAndGetBroadcastShape(t,o);let a="vec4(0.0)";n!=null&&(S.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(S.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var __=({inputs:e,backend:t,attrs:r})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=e;w.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),w.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),w.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=r;l==null&&(l=.001);let u=[o,n,s],c=null;i!=null&&(c=i.shape,u.push(i));let p=null;a!=null&&(p=a.shape,u.push(a));let f=$().getBool("WEBGL_PACK_NORMALIZATION")?new la(o.shape,n.shape,s.shape,c,p,l):new aa(o.shape,n.shape,s.shape,c,p,l);return t.runWebGLProgram(f,u,u[0].dtype)},Cy={kernelName:id,backendName:"webgl",kernelFunc:__};var ua=class{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;let r=W(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=A_(this.rank),n,s=t.map((i,a)=>`sourceLoc.${Zc[a]} = start[${a}] + coords.${Zc[a]};`);n=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},Zc=["x","y","z","w","u","v"];function A_(e){if(e===1)return"sourceLoc";if(e<=6)return Zc.slice(0,e).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}var ca=class{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let r=W(this.rank),o=at("coords",this.rank),n=at("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
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
    `}};function R_(e,t,r,o){let n=o.texData.get(e.dataId),s=o.makeTensorInfo(r,e.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=r,i.dtype=e.dtype;let a=Lt.computeFlatOffset(t,w.computeStrides(e.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||e.dataId};let l=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,l+1),s}function ve(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,size:i}=o,[a,l]=Lt.parseSliceParams(n,s,i);if(Lt.assertParamsValid(n,a,l),w.sizeFromShape(l)===0)return r.makeTensorInfo(l,n.dtype,[]);if(r.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=r.texData.get(n.dataId),f=d0(p.values,a,l,n.shape,n.dtype);return r.makeTensorInfo(l,n.dtype,f)}let{isPacked:u}=r.texData.get(n.dataId),c=Lt.isSliceContinous(n.shape,a,l);if(u||!c){let p=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ca(l):new ua(l),f=[a];return r.runWebGLProgram(p,[n],n.dtype,f)}return r.uploadToGPU(n.dataId),R_(n,a,l,r)}var Sy={kernelName:gu,backendName:"webgl",kernelFunc:ve};var N_=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,crops:i}=o;w.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((y,C)=>y*C),l=S.getReshaped(n.shape,s,a),u=S.getPermuted(l.length,s.length),c=S.getReshapedPermuted(n.shape,s,a),p=S.getSliceBeginCoords(i,s.length),f=S.getSliceSize(c,i,s.length),d=[],h=_({inputs:{x:n},backend:r,attrs:{shape:l}}),x=Z({inputs:{x:h},backend:r,attrs:{perm:u}}),g=_({inputs:{x},backend:r,attrs:{shape:c}}),m=ve({inputs:{x:g},backend:r,attrs:{begin:p,size:f}});return d.push(h),d.push(x),d.push(g),d.forEach(y=>r.disposeIntermediateTensorInfo(y)),m},Iy={kernelName:Nf,backendName:"webgl",kernelFunc:N_};function k_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i}=o,a=r.readSync(n.dataId),l=r.readSync(s.dataId),u=zi(a,l,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,u)}var $y={kernelName:kf,backendName:"webgl",kernelFunc:k_};function F_(e){let{inputs:t,backend:r}=e,{s0:o,s1:n}=t,s=r.readSync(o.dataId),i=r.readSync(n.dataId),a=S.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return r.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var Ty={kernelName:Ff,backendName:"webgl",kernelFunc:F_};var D_="return float(a != b);",Jc=q({opSnippet:D_,cpuKernelImpl:n0,dtype:"bool"}),Ey={kernelName:Vs,backendName:"webgl",kernelFunc:Jc};function qe(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return lt({inputs:{x:n.complexTensorInfos.real},backend:r})}var _y={kernelName:xn,backendName:"webgl",kernelFunc:qe};var O_="return float(int(x));";function Ay(e,t){let r=new vt(e.shape,O_),o=t.runWebGLProgram(r,[e],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function tp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return lt({inputs:{x:n},backend:r});let i=En(n.shape),a=tp({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),l=Vt({inputs:{real:a,imag:i},backend:r});return i.dispose(),r.disposeIntermediateTensorInfo(a),l}if(n.dtype==="complex64"){let i=qe({inputs:{input:n},backend:r}),a=tp({inputs:{x:i},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(i),a}if(!w.hasEncodingLoss(n.dtype,s)){let i=lt({inputs:{x:n},backend:r});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(r.shouldExecuteOnCPU([n])){let i=r.texData.get(n.dataId).values,[a,l,u]=Lx(i,n.shape,n.dtype,s);return r.makeTensorInfo(a,l,u)}if(s==="int32")return Ay(n,r);if(s==="bool"){let i=r.makeTensorInfo([],"bool",w.getTypedArrayFromDType("bool",1)),l=Jc({inputs:{a:n,b:i},backend:r});return r.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Ry={kernelName:Tr,backendName:"webgl",kernelFunc:tp};var Ny="return ceil(x);",P_=P({opSnippet:Ny,packedOpSnippet:Ny,cpuKernelImpl:Bx}),ky={kernelName:Cs,backendName:"webgl",kernelFunc:P_};var pa=class{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var fa=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function M_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{clipValueMin:s,clipValueMax:i}=o,a;$().getBool("WEBGL_PACK_CLIP")?a=new fa(n.shape):a=new pa(n.shape);let l=[[s],[i]];return r.runWebGLProgram(a,[n],n.dtype,l)}var Fy={kernelName:Df,backendName:"webgl",kernelFunc:M_};var da=class{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
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
    `}};function Dy(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function L_(e){let{inputs:t,backend:r}=e,{x:o}=t,n=r.texData.get(o.dataId),s=new da(o.shape),i=[Dy(o,n.complexTensorInfos.real),Dy(o,n.complexTensorInfos.imag)];return r.runWebGLProgram(s,i,i[0].dtype)}var Oy={kernelName:Ss,backendName:"webgl",kernelFunc:L_};var ha=class{constructor(t){this.outputShape=[],this.outputShape=S.computeOutShape(t,1),this.variableNames=t.map((i,a)=>`T${a}`);let r=new Array(t.length-1);r[0]=t[0][1];for(let i=1;i<r.length;i++)r[i]=r[i-1]+t[i][1];let o=[`if (yC < ${r[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<r.length;i++){let a=r[i-1];o.push(`else if (yC < ${r[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=r.length,s=r[r.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var ga=class{constructor(t,r){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=S.computeOutShape(t,r);let o=this.outputShape,n=o.length,s=W(n),i=at("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=t.map((x,g)=>`T${g}`);let l=new Array(t.length-1);l[0]=t[0][r];for(let x=1;x<l.length;x++)l[x]=l[x-1]+t[x][r];let u=a[r],c=a.slice(-2),p=a.join(),f=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let x=1;x<l.length;x++){let g=l[x-1];f+=`
        if (${u} < ${l[x]}  && ${u} >= ${l[x-1]}) {
          return getChannel(
            getT${x}(${ma(a,u,g)}),
            vec2(${ma(c,u,g)}));
        }`}let d=l.length,h=l[l.length-1];f+=`
        return getChannel(
          getT${d}(${ma(a,u,h)}),
          vec2(${ma(c,u,h)}));`,this.userCode=`
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
    `}};function ma(e,t,r){let o=e.indexOf(t);return e.map((s,i)=>i===o?`${s} - ${r}`:s).join()}function Hr(e){let{inputs:t,backend:r}=e,{input:o}=t,n=r.texData.get(o.dataId);return lt({inputs:{x:n.complexTensorInfos.imag},backend:r})}var Py={kernelName:Fs,backendName:"webgl",kernelFunc:Hr};function Ko(e,t,r){let o=e[0].dtype;if(o==="complex64"){let d=e.map(y=>qe({inputs:{input:y},backend:r})),h=e.map(y=>Hr({inputs:{input:y},backend:r})),x=Ko(d,t,r),g=Ko(h,t,r),m=Vt({inputs:{real:x,imag:g},backend:r});return d.forEach(y=>r.disposeIntermediateTensorInfo(y)),h.forEach(y=>r.disposeIntermediateTensorInfo(y)),r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),m}let n=r.shouldExecuteOnCPU(e);if(o==="string"&&(n=!0),n){let d=e.map(b=>{let I=[-1,w.sizeFromShape(b.shape.slice(t))];return _({inputs:{x:b},backend:r,attrs:{shape:I}})}),h=d.map(b=>({vals:r.readSync(b.dataId),shape:b.shape})),x=S.computeOutShape(d.map(b=>b.shape),1),g=d[0].shape[0]===1,m=Ux(h,x,o,g),y=S.computeOutShape(e.map(b=>b.shape),t),C=r.makeTensorInfo(y,o,m);return d.forEach(b=>r.disposeIntermediateTensorInfo(b)),C}let s=e.filter(d=>w.sizeFromShape(d.shape)>0),i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let d=i?new vt(e[0].shape,Fe):new Ut(e[0].shape,Fe);return r.runWebGLProgram(d,e,o)}let a=$().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let d=[];for(let x=0;x<s.length;x+=a){let g=s.slice(x,x+a);d.push(Ko(g,t,r))}let h=Ko(d,t,r);for(let x of d)r.disposeIntermediateTensorInfo(x);return h}if(i){let d=new ga(s.map(h=>h.shape),t);return r.runWebGLProgram(d,s,o)}let{tensors2D:l,outShape:u}=B_(s,t,r),c=new ha(l.map(d=>d.shape)),p=r.runWebGLProgram(c,l,o);l.forEach(d=>r.disposeIntermediateTensorInfo(d));let f=_({inputs:{x:p},attrs:{shape:u},backend:r});return r.disposeIntermediateTensorInfo(p),f}function B_(e,t,r){let o=S.computeOutShape(e.map(s=>s.shape),t);return{tensors2D:e.map(s=>_({inputs:{x:s},attrs:{shape:[-1,w.sizeFromShape(s.shape.slice(t))]},backend:r})),outShape:o}}function ep(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o,s=w.parseAxisParam(n,t[0].shape)[0],i=t.map(u=>u.shape);S.assertParamsConsistent(i,s);let a=S.computeOutShape(t.map(u=>u.shape),s);if(w.sizeFromShape(a)===0)return r.makeTensorInfo(a,t[0].dtype,[]);let l=t.filter(u=>w.sizeFromShape(u.shape)>0);return l.length===1?lt({inputs:{x:l[0]},backend:r}):Ko(l,s,r)}var My={kernelName:Of,backendName:"webgl",kernelFunc:ep};var Xo=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;let i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,u=t.strideWidth,c=t.dilationHeight,p=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,x=t.inChannels%4,g=t.dataFormat==="channelsLast",m=g?1:2,y=g?2:3,C=g?3:1,b="",v="";o&&(n?b=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?b=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:b=`
          float activation(float x) {
            ${o}
          }
        `,v="result = activation(result);");let I=r?"result += getBiasAtOutCoords();":"";r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${b}

      const ivec2 strides = ivec2(${l}, ${u});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${C}];

        ivec2 xRCCorner =
            ivec2(coords[${m}], coords[${y}]) * strides - pads;
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
        ${v}
        setOutput(result);
      }
    `}},xa=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let r=t.padInfo.front,o=t.padInfo.top,n=t.padInfo.left,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,p=t.filterDepth,f=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,x=t.inChannels%4;this.userCode=`
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

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${c};

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
    `}};var jo=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=K(this.outputShape.length);let i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,u=t.filterHeight,c=t.filterWidth,p=c,f=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<c;g++)f+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;f+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<c;g++)f+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;f+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(p+1)/2;g++){let m=g*2;if(f+=`
           xC = xCCorner + ${m*l};
           `,a===1){if(m<c&&(i%2===1?(f+=`
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
                 `,m+1<c)){let y=i%2===0?w.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
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
                     `}}else m<c&&(i%2===1?(f+=`
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
               `,m+1<c&&(f+=`
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
               `,m+1<c&&(f+=`
                   xC${m+1} = vec4(xTexelC${m}.zw, xTexelC${m+1}.zw);
                 `)));m<c&&(f+=`
             wTexel = getW(r, ${m}, d1, d2);
             dotProd += xC${m}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${m}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,m+1<c&&(f+=`
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
     `}};var ya=class{constructor(t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=K(this.outputShape.length);let{dataFormat:o}=r,n=et(),s=o==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`,u="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)u+=`
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
    `}};function wa(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&r===1&&e[0]>1?[e[0],1]:null}function ba({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let l=e.shape,u=o.texData.get(e.dataId),c=r.inChannels,p=l[0]*l[1]*l[2],f=r.outChannels,d=r.dataFormat==="channelsLast",h=!1,x=!1,g,m=[];if(s!=null){let b=wa(s.shape,d);b!=null&&(s=_({inputs:{x:s},backend:o,attrs:{shape:b}}),m.push(s))}if(n!=null){let b=wa(n.shape,d);b!=null&&(n=_({inputs:{x:n},backend:o,attrs:{shape:b}}),m.push(n))}if(!((p===1||f===1)&&c>Qc)&&u.isPacked&&d&&u.texture!=null&&l[2]%2!==0&&w.arraysEqual(u.shape.slice(-3),l.slice(-3))){let b=l[0]*l[1]*(l[2]+1),v={dataId:e.dataId,shape:[1,b,r.inChannels],dtype:e.dtype},I=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,w.assert(Lr(u.shape,v.shape),()=>`packed reshape ${u.shape} to ${v.shape} isn't free`);let T=_({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}});m.push(T);let E=Gr({a:v,b:T,backend:o,transposeA:h,transposeB:x,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),R=o.texData.get(E.dataId);w.assert(R.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=I,R.shape=r.outShape,g=lt({inputs:{x:E},backend:o}),g.shape=r.outShape,m.push(E)}else{let b=r.outHeight*r.outWidth,v=_({inputs:{x:e},backend:o,attrs:{shape:d?[r.batchSize,b,r.inChannels]:[r.batchSize,r.inChannels,b]}}),I=_({inputs:{x:t},backend:o,attrs:{shape:[1,r.inChannels,r.outChannels]}}),T=Gr({a:d?v:I,b:d?I:v,transposeA:!d,transposeB:x,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});g=_({inputs:{x:T},backend:o,attrs:{shape:r.outShape}}),m.push(v),m.push(I),m.push(T)}for(let b of m)o.disposeIntermediateTensorInfo(b);return g}function va({x:e,filter:t,convInfo:r,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:l,filterHeight:u,inChannels:c,outWidth:p,outHeight:f,dataFormat:d}=r,h=d==="channelsLast",x=l*u*c,g=f*p,m=[r.batchSize,x,g],y=!0,C=!1,b=[];if(s!=null){let It=wa(s.shape,h);It!=null&&(s=_({inputs:{x:s},backend:o,attrs:{shape:It}}),b.push(s))}if(n!=null){let It=wa(n.shape,h);It!=null&&(n=_({inputs:{x:n},backend:o,attrs:{shape:It}}),b.push(n))}let v=_({inputs:{x:t},backend:o,attrs:{shape:[1,x,w.sizeFromShape(t.shape)/x]}});b.push(v);let I=new ya(m,r),T=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],E=o.runWebGLProgram(I,[e],"float32",T),R=_({inputs:{x:E},backend:o,attrs:{shape:m}});b.push(E),b.push(R);let N=n!=null,M=s!=null,L=a==="leakyrelu",ut=a?He(a,!0):null,rt=new qo(h?R.shape:v.shape,h?v.shape:R.shape,h?[r.batchSize,g,r.outChannels]:[r.batchSize,r.outChannels,g],y,C,N,ut,M,L),U=h?[R,v]:[v,R];if(n&&U.push(n),M&&U.push(s),L){let It=o.makeTensorInfo([],"float32",w.createScalarValue(i,"float32"));U.push(It),b.push(It)}let J=o.runWebGLProgram(rt,U,"float32"),St=_({inputs:{x:J},backend:o,attrs:{shape:r.outShape}});b.push(J);for(let It of b)o.disposeIntermediateTensorInfo(It);return St}function U_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=o,p=S.convertConv2DDataFormat(l),f=S.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!1,p),d;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type==="SAME"||f.padInfo.type==="VALID"))d=ba({x:n,filter:s,convInfo:f,backend:r});else if(f.strideWidth<=2&&p==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){let x=new jo(f),g=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];d=r.runWebGLProgram(x,[n,s],"float32",g)}else if($().getBool("WEBGL_CONV_IM2COL"))d=va({x:n,filter:s,convInfo:f,backend:r});else{let x=new Xo(f);d=r.runWebGLProgram(x,[n,s],"float32")}let h=_({inputs:{x:d},backend:r,attrs:{shape:f.outShape}});return r.disposeIntermediateTensorInfo(d),h}var Ly={kernelName:Pf,backendName:"webgl",kernelFunc:U_};var Ca=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
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
    `}},Sa=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dataFormat==="channelsLast",a=r-1-t.padInfo.top,l=o-1-t.padInfo.left,u=i?1:2,c=i?2:3,p=i?3:1;this.userCode=`
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
    `}},Ia=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
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
    `}},$a=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=r-1-t.padInfo.front,u=o-1-t.padInfo.top,c=n-1-t.padInfo.left;this.userCode=`
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
    `}};function V_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=o,p=S.convertConv2DDataFormat(l),f=S.computeConv2DInfo(n.shape,c,i,1,a,u,!1,p),d=new Ca(f);return r.runWebGLProgram(d,[n,s],"float32")}var By={kernelName:Mf,backendName:"webgl",kernelFunc:V_};var Ta=class{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=K(this.outputShape.length);let r=t.filterHeight,o=t.filterWidth,n=r-1-t.padInfo.top,s=o-1-t.padInfo.left;this.userCode=`
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
    `}};function W_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=o,p=S.convertConv2DDataFormat(u),f=S.computeConv2DInfo(i,s.shape,a,1,l,c,!1,p);if($().getBool("WEBGL_PACK")&&p==="channelsLast"){let d=[[f.strideHeight,f.strideWidth]],h=new Ta(f);return r.runWebGLProgram(h,[n,s],"float32",d)}else{let d=new Sa(f);return r.runWebGLProgram(d,[n,s],"float32")}}var Uy={kernelName:Lf,backendName:"webgl",kernelFunc:W_};function z_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,u=S.computeConv3DInfo(n.shape,s.shape,i,l,a),c=new xa(u);return r.runWebGLProgram(c,[n,s],"float32")}var Vy={kernelName:Bf,backendName:"webgl",kernelFunc:z_};function G_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,pad:a,filterShape:l}=o,u=S.computeConv3DInfo(n.shape,l,i,1,a),c=new Ia(u);return r.runWebGLProgram(c,[n,s],"float32")}var Wy={kernelName:Uf,backendName:"webgl",kernelFunc:G_};function H_(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{pad:i,strides:a,inputShape:l}=o,u=S.computeConv3DInfo(l,s.shape,a,1,i),c=new $a(u);return r.runWebGLProgram(c,[n,s],"float32")}var zy={kernelName:Vf,backendName:"webgl",kernelFunc:H_};var q_=fe+`
  return cos(x);
`,K_=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Yt}
  return result;
`,X_=P({opSnippet:q_,packedOpSnippet:K_}),Gy={kernelName:Wf,backendName:"webgl",kernelFunc:X_};var j_=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,Y_=P({opSnippet:j_}),Hy={kernelName:zf,backendName:"webgl",kernelFunc:Y_};var Ea=class{constructor(t,r,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,l,u]=t,[c]=r,[p,f]=o;this.outputShape=[c,p,f,u];let d=n==="bilinear"?1:0,[h,x]=[`${a-1}.0`,`${l-1}.0`],[g,m,y]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[C,b,v]=f>1?[`${(l-1)/(f-1)}`,"(x2-x1) * width_ratio",`x1*${x} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${x}`];this.userCode=`
      const float height_ratio = float(${g});
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

        float height_scale = ${m};
        float width_scale = ${b};

        float in_y = ${y};
        if( in_y < 0.0 || in_y > ${h} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${v};
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
    `}};var Q_=e=>{let{inputs:t,backend:r,attrs:o}=e,{image:n,boxes:s,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:u}=o,c=new Ea(n.shape,s.shape,a,l,u);return r.runWebGLProgram(c,[n,s,i],"float32")},qy={kernelName:qf,backendName:"webgl",kernelFunc:Q_};var qr;(function(e){e.Prod="*",e.Sum="+"})(qr||(qr={}));var Wn=class{constructor(t,r,o,n){this.op=t,this.outputShape=r,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===qr.Prod?"1.0":"0.0",a=o?i:`getX(${Ky(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";o?(u=n?`end != ${l-1}`:"end != 0",c=n?"end + 1":"end - 1"):(u=n?`end + pow2 < ${l}`:"end >= pow2",c=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${W(s)} coords = getOutputCoords();
        int end = ${Xy(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${Xy(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${Ky(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function Ky(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function Xy(e,t,r){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw new Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function _a(e,t,r,o,n,s){let i=t.shape.length,a=S.getAxesPermutation([o],i),l=t;a!=null&&(l=Z({inputs:{x:t},backend:r,attrs:{perm:a}}));let u=S.getInnerMostAxes(1,i)[0];if(u!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${o}`);let c=l.shape[u],p=lt({inputs:{x:l},backend:r});for(let f=0;f<=Math.ceil(Math.log2(c))-1;f++){let d=new Wn(e,l.shape,!1,s),h=[[f]],x=p;p=r.runWebGLProgram(d,[p],p.dtype,h),r.disposeIntermediateTensorInfo(x)}if(n){let f=new Wn(e,l.shape,n,s),d=p;p=r.runWebGLProgram(f,[p],p.dtype),r.disposeIntermediateTensorInfo(d)}if(a!=null){let f=S.getUndoAxesPermutation(a),d=Z({inputs:{x:p},backend:r,attrs:{perm:f}});return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(l),d}return p}function Z_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return _a(qr.Prod,n,r,s,i,a)}var jy={kernelName:Gf,backendName:"webgl",kernelFunc:Z_};function J_(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return _a(qr.Sum,n,r,s,i,a)}var Yy={kernelName:Hf,backendName:"webgl",kernelFunc:J_};function tA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,weights:s}=t,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=r.readSync(n.dataId),u=r.readSync(s.dataId),c=zi(l,u,s.dtype,s.shape,i);return r.makeTensorInfo([i],s.dtype,c)}else if(n.shape.length===2){let l=r.bufferSync(n),u=r.bufferSync(s),c=Mx(l,u,i,a);return r.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var Qy={kernelName:Kf,backendName:"webgl",kernelFunc:tA};var Aa=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=r,this.dataFormat=o,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function eA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockSize:s,dataFormat:i}=o,a=n.shape[0],l=i==="NHWC"?n.shape[1]:n.shape[2],u=i==="NHWC"?n.shape[2]:n.shape[3],c=i==="NHWC"?n.shape[3]:n.shape[1],p=l*s,f=u*s,d=c/(s*s),h=i==="NHWC"?[a,p,f,d]:[a,d,p,f],x=new Aa(h,s,i);return r.runWebGLProgram(x,[n],n.dtype)}var Zy={kernelName:Xf,backendName:"webgl",kernelFunc:eA};var Yo=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=K(this.outputShape.length);let i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels,u="",c="";o&&(n?u=`float activation(float a) {
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
    `}};var Qo=class{constructor(t,r=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=K(this.outputShape.length);let i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,u=t.dilationWidth,c=t.filterHeight,p=t.filterWidth,f=p,d=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<p;m++)d+=`
          vec4 xTexelC${m*2};
          int xTexelC${m*2}Ready;
          vec4 xTexelC${m*2+1};
          int xTexelC${m*2+1}Ready;
          vec4 xC${m};`;d+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let m=0;m<p;m++)d+=`
          xTexelC${m*2} = vec4(0.0);
          xTexelC${m*2}Ready = 0;
          xTexelC${m*2+1} = vec4(0.0);
          xTexelC${m*2+1}Ready = 0;
          xC${m} = vec4(0.0);`;d+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let m=0;m<(f+1)/2;m++){let y=m*2;if(d+=`
          xC = xCCorner + ${y*u};
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
              `,u===1&&y>0?d+=`
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
                `,y+1<p)){let C=a%2===0?w.nearestLargerEven(u):u;u%2===0&&a%2===1||u%2!==0&&a%2!==1?(d+=`
                  xCOffset = xC + imod(pads[1], 2) + ${C};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                    xTexelC${y+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${y+1}.zw = vec2(0.0);
                    }
                    xTexelC${y+1}Ready = 1;
                  }
                  `,u>1?d+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${y+1} = vec4(previous.zw, xTexelC${y+1}.xy);
                    } else {
                     xC${y+1} = vec4(0.0, 0.0, xTexelC${y+1}.xy);
                    }
                    `:d+=`
                    xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.xy);
                    `):C===1?d+=`
                    xC${y+1} = xTexelC${y};
                    `:d+=`
                    xCOffset = xC + ${C};

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
    `}};function rA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=o,c=l;c==null&&(c=[1,1]),w.assert(S.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let p=S.computeConv2DInfo(n.shape,s.shape,i,c,a,u,!0),f;$().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?f=new Qo(p):f=new Yo(p);let d=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return r.runWebGLProgram(f,[n,s],"float32",d)}var Jy={kernelName:jf,backendName:"webgl",kernelFunc:rA};var Ra=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let r=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
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
    `}},Na=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let r=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=r-1-t.padInfo.top,a=o-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
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
    `}};function oA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,dy:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=o,p=S.computeConv2DInfo(n.shape,c,i,a,l,u,!0),f=new Ra(p);return r.runWebGLProgram(f,[n,s],"float32")}var tw={kernelName:Yf,backendName:"webgl",kernelFunc:oA};function nA(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,filter:s}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=o,p=S.computeConv2DInfo(c,s.shape,i,a,l,u,!0),f=new Na(p);return r.runWebGLProgram(f,[n,s],"float32")}var ew={kernelName:Qf,backendName:"webgl",kernelFunc:nA};var ka=class{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function sA(e){let{inputs:t,backend:r}=e,{x:o}=t,n=[...o.shape,...o.shape],s=w.sizeFromShape(o.shape),i=_({inputs:{x:o},backend:r,attrs:{shape:[s]}}),a=new ka(s),l=r.runWebGLProgram(a,[i],i.dtype),u=_({inputs:{x:l},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(l),u}var rw={kernelName:Zf,backendName:"webgl",kernelFunc:sA};var Fa=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let{inHeight:r,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:u,dilationWidth:c}=t,{top:p,left:f}=n;this.userCode=`
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
    `}};function iA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s}=t,{strides:i,pad:a,dilations:l}=o,u=S.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",l),c,p=new Fa(u);c=r.runWebGLProgram(p,[n,s],"float32");let f=_({inputs:{x:c},backend:r,attrs:{shape:u.outShape}});return r.disposeIntermediateTensorInfo(c),f}var ow={kernelName:Jf,backendName:"webgl",kernelFunc:iA};function aA(e){let{inputs:t,backend:r,attrs:o}=e,{equation:n}=o,s=t,{allDims:i,summedDims:a,idDims:l}=S.decodeEinsumEquation(n,s.length);S.checkEinsumDimSizes(i.length,l,s);let{path:u,steps:c}=S.getEinsumComputePath(a,l),p=c.length,f=null,d=i.length,h=[];for(let x=0;x<p;++x){for(let g of c[x]){let{permutationIndices:m,expandDims:y}=S.getEinsumPermutation(d,l[g]),C;S.isIdentityPermutation(m)?C=s[g]:(C=Z({inputs:{x:s[g]},backend:r,attrs:{perm:m}}),h.push(C));let b=C.shape.slice();for(let v=0;v<y.length;++v)b.splice(y[v],0,1);w.arraysEqual(C.shape,b)||(C=_({inputs:{x:C},backend:r,attrs:{shape:b}}),h.push(C)),f===null?f=C:(f=Un({inputs:{a:C,b:f},backend:r}),h.push(f))}x<p-1&&(u[x]>=0&&(f=zr({inputs:{x:f},backend:r,attrs:{axis:u[x]-(i.length-d),keepDims:!1}}),h.push(f)),d--)}for(let x of h)x!==f&&r.disposeIntermediateTensorInfo(x);return f}var nw={kernelName:td,backendName:"webgl",kernelFunc:aA};var lA="return (x >= 0.0) ? x : (exp(x) - 1.0);",uA=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,cA=P({opSnippet:lA,packedOpSnippet:uA}),sw={kernelName:$s,backendName:"webgl",kernelFunc:cA};var pA="return (b >= 0.0) ? a : a * (b + 1.0);",fA=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,dA=e=>{let{inputs:t,backend:r}=e,{dy:o,y:n}=t,s=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pe(fA,o.shape,n.shape):new ne(pA,o.shape,n.shape);return r.runWebGLProgram(s,[o,n],o.dtype)},iw={kernelName:ed,backendName:"webgl",kernelFunc:dA};var hA=`
  return vec4(equal(a, b));
`,mA="return float(a == b);",gA=q({opSnippet:mA,packedOpSnippet:hA,dtype:"bool",cpuKernelImpl:Vx}),aw={kernelName:Ts,backendName:"webgl",kernelFunc:gA};var xA=`
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
`,yA=P({opSnippet:xA}),lw={kernelName:rd,backendName:"webgl",kernelFunc:yA};var wA=fe+`
  return exp(x);
`,bA=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,rp=P({opSnippet:wA,packedOpSnippet:bA,cpuKernelImpl:Wx,dtype:"float32"}),uw={kernelName:Es,backendName:"webgl",kernelFunc:rp};function Da(e){let{inputs:t,attrs:r,backend:o}=e,{dim:n}=r,{input:s}=t,i=s.shape.length,a=s.shape.slice(),l=n;return n<0&&(w.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+n+1),a.splice(l,0,1),_({inputs:{x:s},backend:o,attrs:{shape:a}})}var cw={kernelName:od,backendName:"webgl",kernelFunc:Da};var pw="return exp(x) - 1.0;",vA=P({opSnippet:pw,packedOpSnippet:pw,cpuKernelImpl:zx}),fw={kernelName:_s,backendName:"webgl",kernelFunc:vA};var zn=class{constructor(t,r,o){this.variableNames=["real","imag"];let n=r[1];this.outputShape=r;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
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
    `}};function Oa(e,t,r){let o=r.texData.get(e.dataId),n=w.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],i=n/s,a=_({inputs:{x:e},backend:r,attrs:{shape:[i,s]}}),l=a.shape,u=new zn("real",l,t),c=new zn("imag",l,t),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:l},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:l}],f=r.runWebGLProgram(u,p,"float32"),d=r.runWebGLProgram(c,p,"float32"),h=Vt({inputs:{real:f,imag:d},backend:r});r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d);let x=_({inputs:{x:h},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(h),x}function CA(e){let{inputs:t,backend:r}=e,{input:o}=t;return Oa(o,!1,r)}var dw={kernelName:nd,backendName:"webgl",kernelFunc:CA};var Pa=class{constructor(t,r){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function Ke(e){let{backend:t,attrs:r}=e,{shape:o,value:n}=r,{dtype:s}=r;if(s=s||w.inferDtype(n),s==="string"){let i=w.getArrayFromDType(s,w.sizeFromShape(o));return i.fill(n),t.makeTensorInfo(o,s,i)}else{let i=new Pa(o,n),a=[[n]];return t.runWebGLProgram(i,[],s,a)}}var hw={kernelName:As,backendName:"webgl",kernelFunc:Ke};var Ma=class{constructor(t){this.variableNames=["Image"],this.outputShape=[];let r=t[2];this.outputShape=t,this.userCode=`
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
    `}};var mw={kernelName:sd,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,o=t,n=new Ma(r.shape);return o.runWebGLProgram(n,[r],r.dtype)}};var gw="return floor(x);",SA=P({opSnippet:gw,packedOpSnippet:gw,cpuKernelImpl:Gx}),xw={kernelName:Rs,backendName:"webgl",kernelFunc:SA};var IA=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,$A=`
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
`,TA=q({opSnippet:IA,packedOpSnippet:$A,dtype:"int32"}),yw={kernelName:xo,backendName:"webgl",kernelFunc:TA};var La=class{constructor(t){this.variableNames=["A"];let r=et(),[o,n]=t;this.outputShape=t,this.userCode=`
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
    `}};var Ba=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let r=et(),[o,n]=t;this.outputShape=t,this.userCode=`
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
    `}};var ww={kernelName:Ch,backendName:"webgl",kernelFunc:EA},Zo,op=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function EA(e){let{inputs:t,backend:r,attrs:o}=e,{pixels:n}=t,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[l,u]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],c=[u,l],p=[u,l,s];if(a||i){let x=$().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Zo==null||x!==op)&&(op=x,Zo=document.createElement("canvas").getContext("2d",{willReadFrequently:op})),Zo.canvas.width=l,Zo.canvas.height=u,Zo.drawImage(n,0,0,l,u),n=Zo.canvas}let f=r.makeTensorInfo(c,"int32");r.texData.get(f.dataId).usage=$t.PIXELS,r.gpgpu.uploadPixelDataToTexture(r.getTexture(f.dataId),n);let d=$().getBool("WEBGL_PACK")?new Ba(p):new La(p),h=r.runWebGLProgram(d,[f],"int32");return r.disposeData(f.dataId),h}function _A(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:f,activation:d,leakyreluAlpha:h}=o,x=S.convertConv2DDataFormat(c),g=S.computeConv2DInfo(n.shape,s.shape,l,p,u,f,!1,x),m,y=[],C=i!=null,b=a!=null,v=d==="leakyrelu",I=()=>{let E=[n,s],R=(N,M)=>{if(M==="NCHW"&&N.shape.length===1&&N.shape[0]!==1){let L=_({inputs:{x:N},backend:r,attrs:{shape:[N.shape[0],1,1]}});return y.push(L),L}return N};if(C&&E.push(R(i,c)),b&&E.push(R(a,c)),v){let N=r.makeTensorInfo([],"float32",w.createScalarValue(h,"float32"));E.push(N),y.push(N)}return E};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))m=ba({x:n,filter:s,convInfo:g,backend:r,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else if(g.strideWidth<=2&&x==="channelsLast"&&$().getBool("WEBGL_EXP_CONV")){let E=d?He(d,!0):null,R=new jo(g,C,E,b,v),N=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],M=I();m=r.runWebGLProgram(R,M,"float32",N)}else if($().getBool("WEBGL_CONV_IM2COL"))m=va({x:n,filter:s,convInfo:g,backend:r,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else{let E=d?He(d,!1):null,R=new Xo(g,C,E,b,v),N=I();m=r.runWebGLProgram(R,N,"float32")}let T=_({inputs:{x:m},backend:r,attrs:{shape:g.outShape}});return y.push(m),y.forEach(E=>r.disposeIntermediateTensorInfo(E)),T}var bw={kernelName:$h,backendName:"webgl",kernelFunc:_A};function AA(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:l,pad:u,dilations:c,dimRoundingMode:p,activation:f,leakyreluAlpha:d}=o,h=[],x=c;x==null&&(x=[1,1]),w.assert(S.eitherStridesOrDilationsAreOne(l,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`);let g=S.computeConv2DInfo(n.shape,s.shape,l,x,u,p,!0),m=$().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,y=f?He(f,m):null,C=[n,s],b=i!=null,v=a!=null,I=f==="leakyrelu";if(b&&C.push(i),v&&C.push(a),I){let N=r.makeTensorInfo([],"float32",w.createScalarValue(d,"float32"));C.push(N),h.push(N)}let T;m?T=new Qo(g,b,y,v,I):T=new Yo(g,b,y,v,I);let E=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],R=r.runWebGLProgram(T,C,"float32",E);return h.forEach(N=>r.disposeIntermediateTensorInfo(N)),R}var vw={kernelName:Th,backendName:"webgl",kernelFunc:AA};var Ua=class{constructor(t,r,o,n){this.sliceDim=t,this.strides=r,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=W(o.length),i=`
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
      `}};function RA(e){let{inputs:t,backend:r}=e,{params:o,indices:n}=t,s=n.shape,i=s[s.length-1],a=w.sizeFromShape(o.shape),[l,u,c,p]=S.prepareAndValidate(o,n),f=_({inputs:{x:n},backend:r,attrs:{shape:[u,i]}}),d=_({inputs:{x:o},backend:r,attrs:{shape:[w.sizeFromShape(o.shape)/c,c]}});if(r.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let m=r.readSync(n.dataId),y=r.bufferSync(o),C=Hx(m,y,o.dtype,u,i,c,p,o.shape,a);return r.makeTensorInfo(l,o.dtype,C.values)}let h=new Ua(i,p,[u,c],o.shape),x=r.runWebGLProgram(h,[d,f],d.dtype),g=_({inputs:{x},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(x),g}var Cw={kernelName:ld,backendName:"webgl",kernelFunc:RA};var Va=class{constructor(t,r){this.variableNames=["A","indices"],this.outputShape=r,this.rank=r.length;let o=W(this.rank),n=NA(t,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function NA(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<e.length;n++)n===2?o.push("index"):o.push(`${r[n]}`);return o.join()}function np(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,indices:s}=t,{axis:i,batchDims:a}=o,l=w.parseAxisParam(i,n.shape)[0];if($().get("DEBUG")){let y=r.readSync(s.dataId),C=n.shape[l];for(let b=0;b<y.length;++b){let v=y[b];w.assert(v<=C-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${C-1}]`)}}let u=S.segment_util.collectGatherOpShapeInfo(n,s,l,a),c=w.sizeFromShape(s.shape),p=[],f=_({inputs:{x:n},backend:r,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),d=_({inputs:{x:s},backend:r,attrs:{shape:[u.batchSize,c/u.batchSize]}});p.push(f),p.push(d);let h=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(r.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let y=r.bufferSync(d),C=r.bufferSync(f),b=qx(C,y,h);return p.forEach(v=>r.disposeIntermediateTensorInfo(v)),r.makeTensorInfo(u.outputShape,b.dtype,b.values)}let x=new Va(f.shape,h),g=r.runWebGLProgram(x,[f,d],f.dtype);p.push(g);let m=_({inputs:{x:g},backend:r,attrs:{shape:u.outputShape}});return p.forEach(y=>r.disposeIntermediateTensorInfo(y)),m}var Sw={kernelName:ad,backendName:"webgl",kernelFunc:np};var kA="return float(a > b);",FA=`
  return vec4(greaterThan(a, b));
`,DA=q({opSnippet:kA,packedOpSnippet:FA,cpuKernelImpl:Kx,dtype:"bool"}),Iw={kernelName:Ns,backendName:"webgl",kernelFunc:DA};var OA="return float(a >= b);",PA=`
  return vec4(greaterThanEqual(a, b));
`,MA=q({opSnippet:OA,packedOpSnippet:PA,dtype:"bool",cpuKernelImpl:Xx}),$w={kernelName:ks,backendName:"webgl",kernelFunc:MA};function LA(e){let{inputs:t,backend:r}=e,{input:o}=t;return Oa(o,!0,r)}var Tw={kernelName:ud,backendName:"webgl",kernelFunc:LA};var BA="return float(!isnan(x) && !isinf(x));",UA=P({opSnippet:BA,dtype:"bool"}),Ew={kernelName:cd,backendName:"webgl",kernelFunc:UA};var VA="return float(isinf(x));",WA=P({opSnippet:VA,dtype:"bool"}),_w={kernelName:pd,backendName:"webgl",kernelFunc:WA};var zA="return float(isnan(x));",GA=P({opSnippet:zA,dtype:"bool"}),Aw={kernelName:fd,backendName:"webgl",kernelFunc:GA};var HA="return float(a < b);",qA=`
  return vec4(lessThan(a, b));
`,KA=q({opSnippet:HA,packedOpSnippet:qA,cpuKernelImpl:jx,dtype:"bool"}),Rw={kernelName:Os,backendName:"webgl",kernelFunc:KA};var XA="return float(a <= b);",jA=`
  return vec4(lessThanEqual(a, b));
`,YA=q({opSnippet:XA,packedOpSnippet:jA,cpuKernelImpl:Yx,dtype:"bool"}),Nw={kernelName:Ps,backendName:"webgl",kernelFunc:YA};function QA(e){let{backend:t,attrs:r}=e,{start:o,stop:n,num:s}=r,i=Qx(o,n,s);return t.makeTensorInfo([i.length],"float32",i)}var kw={kernelName:dd,backendName:"webgl",kernelFunc:QA};var ZA=fe+`
  return x < 0.0 ? 0./0. : log(x);
`,JA=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,tR=P({opSnippet:ZA,packedOpSnippet:JA,cpuKernelImpl:Zx}),Fw={kernelName:Ms,backendName:"webgl",kernelFunc:tR};var eR=fe+`
  return log(1.0 + x);
`,rR=P({opSnippet:eR}),Dw={kernelName:hd,backendName:"webgl",kernelFunc:rR};var oR="return float(a >= 1.0 && b >= 1.0);",nR=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,sR=q({opSnippet:oR,packedOpSnippet:nR,dtype:"bool"}),Ow={kernelName:md,backendName:"webgl",kernelFunc:sR};var iR="return float(!(x >= 1.0));",aR=P({opSnippet:iR}),Pw={kernelName:gd,backendName:"webgl",kernelFunc:aR};var lR="return float(a >= 1.0 || b >= 1.0);",uR=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,cR=q({opSnippet:lR,packedOpSnippet:uR,dtype:"bool"}),Mw={kernelName:xd,backendName:"webgl",kernelFunc:cR};var Wa=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=r,a=t[3]-1;this.outputShape=t;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
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
    `}};var za=class{constructor(t,r,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=r,a=t[3]-1;this.outputShape=t;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
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
    `}};var pR=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{depthRadius:s,bias:i,alpha:a,beta:l}=o,u=$().getBool("WEBGL_PACK_NORMALIZATION")?new za(n.shape,s,i,a,l):new Wa(n.shape,s,i,a,l);return r.runWebGLProgram(u,[n],n.dtype)},Lw={kernelName:yd,backendName:"webgl",kernelFunc:pR};var Ga=class{constructor(t,r,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=r,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
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
    `}};var fR=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n,y:s,dy:i}=t,{depthRadius:a,bias:l,alpha:u,beta:c}=o,p=new Ga(n.shape,a,l,u,c);return r.runWebGLProgram(p,[n,s,i],n.dtype)},Bw={kernelName:wd,backendName:"webgl",kernelFunc:fR};function Uw(e,t,r,o){let n=w.sizeFromShape(t),i=w.sizeFromShape(e.shape)/n,a=_({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=Qt(a,e.dtype,"max",o),u=_({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}function sp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=c!=null,f=r.shouldExecuteOnCPU([n]),d=n;if(p){if(f){let C=r.texData.get(d.dataId).values,b=new Array(a);for(let T=0;T<b.length;T++)b[T]=n.shape[c[T]];let v=Vr(C,n.shape,n.dtype,c,b);d=r.makeTensorInfo(b,n.dtype);let I=r.texData.get(d.dataId);I.values=v}else d=fr(n,c,r);u=S.getInnerMostAxes(u.length,a)}S.assertAxesAreInnerMostDims("max",u,a);let[h,x]=S.computeOutAndReduceShapes(d.shape,u),g=h;i&&(g=S.expandShapeToKeepDim(h,l));let m;if(f){let C=r.texData.get(d.dataId).values,b=Jx(C,w.sizeFromShape(x),g,n.dtype);m=r.makeTensorInfo(g,n.dtype);let v=r.texData.get(m.dataId);v.values=b}else m=Uw(d,x,g,r);return p&&r.disposeIntermediateTensorInfo(d),m}var Vw={kernelName:Ls,backendName:"webgl",kernelFunc:sp};var dR=Ho+`
  return max(a, b);
`,hR=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Yt+`
  return result;
`,mR=q({opSnippet:dR,packedOpSnippet:hR,cpuKernelImpl:t0}),Ww={kernelName:yo,backendName:"webgl",kernelFunc:mR};function gR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;ke(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;w.assert(S.eitherStridesOrDilationsAreOne(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=S.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&w.arraysEqual(c.inShape,c.outShape))return lt({inputs:{x:n},backend:r});let p=new be(c,"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}var zw={kernelName:bd,backendName:"webgl",kernelFunc:gR};function xR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:u}=o,c=[1,1,1],p=S.computePool3DInfo(n.shape,s,i,c,a,u,l),f=new dr(p,"max",!1);return r.runWebGLProgram(f,[n],n.dtype)}var Gw={kernelName:Cd,backendName:"webgl",kernelFunc:xR};var Ha=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideHeight,o=t.strideWidth,n=t.dilationHeight,s=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=s-1-t.padInfo.top,l=i-1-t.padInfo.left,u=s*i-1;this.userCode=`
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
    `}},qa=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let r=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,p=l-1-t.padInfo.front,f=u-1-t.padInfo.top,d=c-1-t.padInfo.left,h=l*u*c-1;this.userCode=`
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
              int maxPosValue = ${h} -
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
    `}};function yR(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s}=t,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],f=S.computePool3DInfo(i.shape,a,l,p,u,c),d=new dr(f,"max",!0),h=r.runWebGLProgram(d,[i],i.dtype),x=new qa(f),g=r.runWebGLProgram(x,[n,h],i.dtype);return r.disposeIntermediateTensorInfo(h),g}var Hw={kernelName:Sd,backendName:"webgl",kernelFunc:yR};function wR(e){let{inputs:t,backend:r,attrs:o}=e,{dy:n,input:s,output:i}=t,a=s;ke([s,i],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:p}=o,f=S.computePool2DInfo(a.shape,l,u,1,c,p),d=!0,h=new be(f,"max",d),x=r.runWebGLProgram(h,[a],a.dtype),g=new Ha(f),m=r.runWebGLProgram(g,[n,x],a.dtype);return r.disposeIntermediateTensorInfo(x),m}var qw={kernelName:vd,backendName:"webgl",kernelFunc:wR};function Kw(e,t,r,o){let n=new be(r,"max",!1),s=o.runWebGLProgram(n,[e],"float32");n=new be(r,"max",!0,!0,t);let i=o.runWebGLProgram(n,[e],"float32");return[s,i]}var Xw={kernelName:Id,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=t,l=r;w.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let u=[1,1];w.assert(S.eitherStridesOrDilationsAreOne(s,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${u}'`);let c=S.computePool2DInfo(o.shape,n,s,u,i),[p,f]=Kw(o,a,c,l);return[p,f]}};function jw(e,t,r,o){let n=w.sizeFromShape(t),i=w.sizeFromShape(e.shape)/n,a=_({inputs:{x:e},attrs:{shape:[i,n]},backend:o}),l=Qt(a,"float32","mean",o),u=_({inputs:{x:l},attrs:{shape:r},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}var Yw={kernelName:$d,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:o}=e,{keepDims:n,axis:s}=t,i=r,a=o.shape.length,l=w.parseAxisParam(s,o.shape),u=l,c=S.getAxesPermutation(u,a),p=c!=null,f=i.shouldExecuteOnCPU([o]),d=[],h=o;if(p){if(f){let b=i.texData.get(h.dataId).values,v=new Array(a);for(let E=0;E<v.length;E++)v[E]=o.shape[c[E]];let I=Vr(b,o.shape,o.dtype,c,v);h=i.makeTensorInfo(v,o.dtype);let T=i.texData.get(h.dataId);T.values=I}else h=fr(o,c,i);d.push(h),u=S.getInnerMostAxes(u.length,a)}S.assertAxesAreInnerMostDims("sum",u,a);let[x,g]=S.computeOutAndReduceShapes(h.shape,u),m=x;n&&(m=S.expandShapeToKeepDim(x,l));let y=jw(h,g,m,i);for(let C of d)i.disposeIntermediateTensorInfo(C);return y}};function bR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=w.parseAxisParam(s,n.shape),u=l,c=S.getAxesPermutation(u,a),p=n;c!=null&&(p=Z({inputs:{x:n},backend:r,attrs:{perm:c}}),u=S.getInnerMostAxes(u.length,n.shape.length)),S.assertAxesAreInnerMostDims("min",u,a);let[f,d]=S.computeOutAndReduceShapes(p.shape,u),h=w.sizeFromShape(d),x=_({inputs:{x:p},backend:r,attrs:{shape:[-1,h]}}),g=Qt(x,x.dtype,"min",r),m;if(i){let y=S.expandShapeToKeepDim(f,l);m=_({inputs:{x:g},backend:r,attrs:{shape:y}})}else m=_({inputs:{x:g},backend:r,attrs:{shape:f}});return r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(g),c!=null&&r.disposeIntermediateTensorInfo(p),m}var Qw={kernelName:Bs,backendName:"webgl",kernelFunc:bR};var vR=Ho+`
  return min(a, b);
`,CR=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Yt+`
  return result;
`,SR=q({opSnippet:vR,packedOpSnippet:CR,cpuKernelImpl:e0}),Zw={kernelName:Us,backendName:"webgl",kernelFunc:SR};var Ka=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=r.map((c,p)=>c[0]+t[p]+c[1]);let n=t.length,s=W(n),i=r.map(c=>c[0]).join(","),a=r.map((c,p)=>c[0]+t[p]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),u=o==="reflect"?0:1;if(n===1){this.userCode=`
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
    `}};var Xa=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.map((h,x)=>h[0]+t[x]+h[1]);let n=t.length,s=W(n),i=r.map(h=>h[0]).join(","),a=r.map((h,x)=>h[0]+t[x]).join(","),l=at("rc",n),u=at("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,f=o==="reflect"?0:1,d="";if(n===1){let h=`
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
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
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
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
        rc = outputLoc;
        ${l[n-2]} += 1;
        if(${l[n-2]} < ${this.outputShape[n-2]}) {
          ${h}
          result[2] = getChannel(getX(${u.join()}), ${p});
          ${l[n-1]} += 1;
          if(${c}) {
            ${h}
            result[3] = getChannel(getX(${u.join()}), ${p});
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
    `}};var IR=({inputs:e,backend:t,attrs:r})=>{let{x:o}=e,{paddings:n,mode:s}=r,i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Xa(o.shape,n,s):new Ka(o.shape,n,s);return t.runWebGLProgram(i,[o],o.dtype)},Jw={kernelName:Td,backendName:"webgl",kernelFunc:IR};var $R=`if (b == 0.0) return NAN;
  return mod(a, b);`,TR=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Yt+`
  return result;
`,ER=q({opSnippet:$R,packedOpSnippet:TR}),tb={kernelName:Ed,backendName:"webgl",kernelFunc:ER};var ja=class{constructor(t,r,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,o],this.userCode=`
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
    `}};var _R=`
if (a == b) {
  return 1.0;
};
return a / b;`,AR=`
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
`,ip=q({opSnippet:_R,packedOpSnippet:AR,checkOutOfBounds:!0}),eb={kernelName:Is,backendName:"webgl",kernelFunc:ip};var rb="return a - b;",ap=q({opSnippet:rb,packedOpSnippet:rb,supportsComplex:!0,cpuKernelImpl:C0}),ob={kernelName:Co,backendName:"webgl",kernelFunc:ap};function lp(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{dim:s}=o,i=w.parseAxisParam([s],n.shape),a=sp({inputs:{x:n},backend:r,attrs:{reductionIndices:i,keepDims:!1}}),l=S.expandShapeToKeepDim(a.shape,i),u=_({inputs:{x:a},backend:r,attrs:{shape:l}}),c=ap({inputs:{a:n,b:u},backend:r}),p=rp({inputs:{x:c},backend:r}),f=zr({inputs:{x:p},backend:r,attrs:{axis:i,keepDims:!1}}),d=_({inputs:{x:f},backend:r,attrs:{shape:l}}),h=ip({inputs:{a:p,b:d},backend:r});return r.disposeIntermediateTensorInfo(a),r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),h}var nb={kernelName:nh,backendName:"webgl",kernelFunc:lp};function RR(e){let{inputs:t,backend:r,attrs:o}=e,{logits:n}=t,{numSamples:s,seed:i,normalized:a}=o,l=a?n:lp({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),u=l.shape[0],c=l.shape[1],p=new ja(u,c,s),f=[[i]],d=r.runWebGLProgram(p,[l],"int32",f);return a||r.disposeIntermediateTensorInfo(l),d}var sb={kernelName:_d,backendName:"webgl",kernelFunc:RR};var NR=pt+`
  return -x;
`,kR=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function FR(e){let{inputs:t,backend:r}=e,{x:o}=t;if(r.shouldExecuteOnCPU([o])){let s=r.texData.get(o.dataId),[i,a]=o0(s.values,o.shape,o.dtype);return r.makeTensorInfo(a,o.dtype,i)}let n;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Ut(o.shape,kR):n=new vt(o.shape,NR),r.runWebGLProgram(n,[o],o.dtype)}var ib={kernelName:gn,backendName:"webgl",kernelFunc:FR};var DR=Re.nonMaxSuppressionV3Impl;function OR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o,u=r.readSync(n.dataId),c=r.readSync(s.dataId),{selectedIndices:p}=DR(u,c,i,a,l);return r.makeTensorInfo([p.length],"int32",new Int32Array(p))}var ab={kernelName:Ad,backendName:"webgl",kernelFunc:OR};var PR=Re.nonMaxSuppressionV4Impl;function MR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=o,c=r.readSync(n.dataId),p=r.readSync(s.dataId),{selectedIndices:f,validOutputs:d}=PR(c,p,i,a,l,u);return[r.makeTensorInfo([f.length],"int32",new Int32Array(f)),r.makeTensorInfo([],"int32",new Int32Array([d]))]}var lb={kernelName:Rd,backendName:"webgl",kernelFunc:MR};var LR=Re.nonMaxSuppressionV5Impl;function BR(e){S.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:o}=e,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=o,c=r.readSync(n.dataId),p=r.readSync(s.dataId),f=i,d=a,h=l,x=u,{selectedIndices:g,selectedScores:m}=LR(c,p,f,d,h,x);return[r.makeTensorInfo([g.length],"int32",new Int32Array(g)),r.makeTensorInfo([m.length],"float32",new Float32Array(m))]}var ub={kernelName:Nd,backendName:"webgl",kernelFunc:BR};var Ya=class{constructor(t,r,o,n){this.variableNames=["indices"],this.outputShape=[t,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var UR=e=>{let{inputs:t,backend:r,attrs:o}=e,{indices:n}=t,{dtype:s,depth:i,onValue:a,offValue:l}=o,u=w.sizeFromShape(n.shape),c=new Ya(u,i,a,l),p=_({inputs:{x:n},backend:r,attrs:{shape:[u]}}),f=r.runWebGLProgram(c,[p],s);r.disposeIntermediateTensorInfo(p);let d=[...n.shape,i],h=_({inputs:{x:f},backend:r,attrs:{shape:d}});return r.disposeIntermediateTensorInfo(f),h},cb={kernelName:Fd,backendName:"webgl",kernelFunc:UR};function Gn(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="complex64"){let n=qe({inputs:{input:o},backend:r}),s=Gn({inputs:{x:n},backend:r}),i=Hr({inputs:{input:o},backend:r}),a=Gn({inputs:{x:i},backend:r}),l=Vt({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return Ke({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:r})}var pb={kernelName:Zs,backendName:"webgl",kernelFunc:Gn};function fb(e){let{inputs:t,backend:r}=e,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=qe({inputs:{input:o},backend:r}),s=fb({inputs:{x:n},backend:r}),i=Hr({inputs:{input:o},backend:r}),a=Gn({inputs:{x:i},backend:r}),l=Vt({inputs:{real:s,imag:a},backend:r});return r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(a),l}else return Ke({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:r})}var db={kernelName:kd,backendName:"webgl",kernelFunc:fb};function VR(e){let{inputs:t,backend:r,attrs:o}=e,{axis:n}=o;if(t.length===1)return Da({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let s=t[0].shape,i=t[0].dtype;t.forEach(c=>{w.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),w.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=t.map(c=>{let p=Da({inputs:{input:c},backend:r,attrs:{dim:n}});return a.push(p),p}),u=ep({inputs:l,backend:r,attrs:{axis:n}});return a.forEach(c=>r.disposeIntermediateTensorInfo(c)),u}var hb={kernelName:Dd,backendName:"webgl",kernelFunc:VR};var Qa=class{constructor(t,r,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((u,c)=>u[0]+t[c]+u[1]);let n=t.length,s=W(n),i=r.map(u=>u[0]).join(","),a=r.map((u,c)=>u[0]+t[c]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
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
    `}};var Za=class{constructor(t,r,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=r.map((x,g)=>x[0]+t[g]+x[1]);let n=t.length,s=W(n),i=r.map(x=>x[0]).join(","),a=r.map((x,g)=>x[0]+t[g]).join(","),l=at("rc",n),u=at("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,f=[`${s} rc = outputLoc;`,`${l[n-1]} += 1;
       if(${c}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${l[n-2]} += 1;
       if(${l[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${l[n-1]} += 1;
         if(${c}) {`],d=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let x=0,g=n===1?2:4;x<g;x++)h+=`
        ${f[x]}
        if (${d}) {
          result[${x}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${x}] = getChannel(getX(${u.join()}), ${p});
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
    `}};var up=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{paddings:s,constantValue:i}=o;if(w.sizeFromShape(n.shape)===0){let u=s.map((c,p)=>c[0]+n.shape[p]+c[1]);return Ke({backend:r,attrs:{shape:u,value:i,dtype:n.dtype}})}let a=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Za(n.shape,s,i):new Qa(n.shape,s,i),l=[[i]];return r.runWebGLProgram(a,[n],n.dtype,l)},mb={kernelName:Od,backendName:"webgl",kernelFunc:up};var WR=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,zR=`
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
  `+Yt+`
  return result;
`,GR=q({opSnippet:WR,packedOpSnippet:zR}),gb={kernelName:Ws,backendName:"webgl",kernelFunc:GR};function HR(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,l=[],u=w.parseAxisParam(s,n.shape),c=u,p=S.getAxesPermutation(c,a),f=n;p!=null&&(f=Z({inputs:{x:n},backend:r,attrs:{perm:p}}),c=S.getInnerMostAxes(c.length,a),l.push(f)),S.assertAxesAreInnerMostDims("prod",c,a);let d;if(r.shouldExecuteOnCPU([f])){let h=r.texData.get(f.dataId).values,{outVals:x,outShape:g,outDtype:m}=s0(f.shape,f.dtype,h,c);d=r.makeTensorInfo(g,m,x)}else{let[h,x]=S.computeOutAndReduceShapes(f.shape,c),g=w.sizeFromShape(x),m=_({inputs:{x:f},backend:r,attrs:{shape:[-1,g]}}),y=Fr(n.dtype),C=Qt(m,y,"prod",r);d=_({inputs:{x:C},backend:r,attrs:{shape:h}}),l.push(m),l.push(C)}if(i){l.push(d);let h=S.expandShapeToKeepDim(d.shape,u);d=_({inputs:{x:d},backend:r,attrs:{shape:h}})}return l.forEach(h=>r.disposeIntermediateTensorInfo(h)),d}var xb={kernelName:mu,backendName:"webgl",kernelFunc:HR};function qR(e){let{inputs:t,backend:r,attrs:o}=e,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=t,{outputRaggedRank:a}=o,l=n.map(m=>r.readSync(m.dataId)),u=n.map(m=>m.shape),c=r.readSync(s.dataId),p=r.readSync(i.dataId),[f,d,h]=i0(l,u,c,s.shape,s.dtype,p,i.shape,a),x=f.map(m=>r.makeTensorInfo([m.length],"int32",m)),g=r.makeTensorInfo(h,s.dtype,d);return x.concat([g])}var yb={kernelName:Pd,backendName:"webgl",kernelFunc:qR};function KR(e){let{inputs:t,backend:r}=e,{starts:o,limits:n,deltas:s}=t,i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=a0(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=r.makeTensorInfo([u.length],"int32",u),f=r.makeTensorInfo([c.length],o.dtype,c);return[p,f]}var wb={kernelName:Md,backendName:"webgl",kernelFunc:KR};function XR(e){let{inputs:t,backend:r,attrs:o}=e,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=o,u=r.readSync(n.dataId),c=r.readSync(s.dataId),p=r.readSync(i.dataId),f=a.map(g=>r.readSync(g.dataId)),d=a.map(g=>g.shape),[h,x]=l0(u,n.shape,c,s.shape,s.dtype,p,i.shape,f,d,l);return r.makeTensorInfo(h,s.dtype,x)}var bb={kernelName:Ld,backendName:"webgl",kernelFunc:XR};var cp=e=>{let{backend:t,attrs:r}=e,{start:o,stop:n,step:s,dtype:i}=r,a=u0(o,n,s,i);return t.makeTensorInfo([a.length],i,a)},vb={kernelName:Bd,backendName:"webgl",kernelFunc:cp};var jR="return 1.0 / x;",YR=P({opSnippet:jR}),Cb={kernelName:Ud,backendName:"webgl",kernelFunc:YR};var QR=pt+`
  return (x < 0.0) ? 0.0 : x;
`,ZR=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,JR=P({opSnippet:QR,packedOpSnippet:ZR}),Sb={kernelName:Gs,backendName:"webgl",kernelFunc:JR};var tN=pt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,eN=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,rN=P({opSnippet:tN,packedOpSnippet:eN}),Ib={kernelName:qs,backendName:"webgl",kernelFunc:rN};var Ja=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}};var tl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f;s?f="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}};function oN(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new tl(n.shape,l,u,s,i):new Ja(n.shape,l,u,s,i);return r.runWebGLProgram(c,[n],"float32")}var $b={kernelName:zd,backendName:"webgl",kernelFunc:oN};var el=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],f=1/c,d=1/p,h=Math.ceil(f)*2+2,x=Math.ceil(d)*2+2;this.userCode=`
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
    `}};function nN(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new el(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var Tb={kernelName:Gd,backendName:"webgl",kernelFunc:nN};var rl=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",d;s?d="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
        vec2 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${f})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var ol=class{constructor(t,r,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=t;this.outputShape=[i,r,o,u];let c=[n&&r>1?a-1:a,n&&o>1?l-1:l],p=[n&&r>1?r-1:r,n&&o>1?o-1:o],f=n?"0.5":"0.0",d;s?d="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
        vec3 sourceFracIndexRC = ${d};

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
    `}};function sN(e){let{inputs:t,backend:r,attrs:o}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ol(n.shape,l,u,s,i):new rl(n.shape,l,u,s,i);return r.runWebGLProgram(c,[n],n.dtype)}var Eb={kernelName:Vd,backendName:"webgl",kernelFunc:sN};var nl=class{constructor(t,r,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=r;let[,n,s]=r,[,i,a]=t,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],f=1/c,d=1/p,h=Math.ceil(f)*2+2,x=Math.ceil(d)*2+2;this.userCode=`
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
    `}};function iN(e){let{inputs:t,backend:r,attrs:o}=e,{images:n,dy:s}=t,{alignCorners:i}=o,a=new nl(s.shape,n.shape,i);return r.runWebGLProgram(a,[s],s.dtype)}var _b={kernelName:Wd,backendName:"webgl",kernelFunc:iN};var sl=class{constructor(t,r){this.variableNames=["x"];let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=t,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}let n=a=>r.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,s=t.map((a,l)=>n(l)).join(","),i=W(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var il=class{constructor(t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=t;let n=at("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=W(o);o===1?this.userCode=`
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
    `;function l(h){return f(h)}function u(h){return h[o-1]="("+h[o-1]+" + 1)",f(h)}function c(h){return h[o-2]="("+h[o-2]+" + 1)",f(h)}function p(h){return h[o-1]="("+h[o-1]+" + 1)",h[o-2]="("+h[o-2]+" + 1)",f(h)}function f(h){let x=t.map((y,C)=>d(C,h)),g=x.join(","),m=x.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${m}))`}function d(h,x){return r.indexOf(h)!==-1&&t[h]!==1?`${t[h]} - ${x[h]} - 1`:`${x[h]}`}}};function aN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{dims:s}=o,i=n.shape.length,a=w.parseAxisParam(s,n.shape);if(i===0)return lt({inputs:{x:n},backend:r});let l=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new il(n.shape,a):new sl(n.shape,a);return r.runWebGLProgram(l,[n],n.dtype)}var Ab={kernelName:Hd,backendName:"webgl",kernelFunc:aN};var al=class{constructor(t,r){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=t[1],n=t[2];this.outputShape=t;let s="";typeof r=="number"?s=`float outputValue = ${r.toFixed(2)};`:s=`
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
    `}};var Rb={kernelName:Sh,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:o}=e,{radians:n,fillValue:s,center:i}=t,a=r,l=new al(o.shape,s),[u,c]=S.getImageCenter(i,o.shape[1],o.shape[2]),p=[[u,c,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(l,[o],o.dtype,p)}};var lN=`
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
`,uN=P({opSnippet:lN}),Nb={kernelName:qd,backendName:"webgl",kernelFunc:uN};var cN="return inversesqrt(x);",pN=P({opSnippet:cN,cpuKernelImpl:c0}),kb={kernelName:Ks,backendName:"webgl",kernelFunc:pN};var hr=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=W(s.length),c=W(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,d="";n===1?d="i":n===2&&(d="i, coords[1]");let h=`getUpdates(${d})`,x="";l&&(x="coords[0], coords[1]");let g=`getDefaultValue(${x})`,m=r>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
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
      `}};var ll=class{constructor(t,r,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let u=W(s.length),c=W(i.length),p="";o===1?p="i":o===2&&(p="i, j");let f=`getIndices(${p})`,d="";n===1?d="i":n===2&&(d="i, coords[1]");let h=`getUpdates(${d})`,x="";l&&(x="coords[0], coords[1]");let g=`getDefaultValue(${x})`,m=r>1?"strides[j]":"strides",y=r>1?"strides[j + 1]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
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
      `}};function fN(e){let{inputs:t,backend:r,attrs:o}=e,{indices:n,updates:s}=t,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=S.calculateShapes(s,n,i),f=[p/u,u];if(p===0)return r.makeTensorInfo(i,n.dtype);let d=_({inputs:{x:n},backend:r,attrs:{shape:[l,a]}}),h=_({inputs:{x:s},backend:r,attrs:{shape:[l,u]}}),x=r.makeTensorInfo([],"float32",new Float32Array([0])),g;$().getBool("WEBGL_PACK")?g=new ll(l,a,d.shape.length,h.shape.length,c,f):g=new hr(l,a,d.shape.length,h.shape.length,c,f);let m=r.runWebGLProgram(g,[h,d,x],h.dtype),y=_({inputs:{x:m},backend:r,attrs:{shape:i}});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(x),y}var Fb={kernelName:Kd,backendName:"webgl",kernelFunc:fN};var ul=class{constructor(t,r,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(r+1))}; ++i) { if (left >= right) break;`,a=$().getNumber("WEBGL_VERSION")===2?s:i,l=n==="left"?"<":"<=";this.userCode=`
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
     `}};function dN(e){let{inputs:t,backend:r,attrs:o}=e,{sortedSequence:n,values:s}=t,{side:i}=o,a=new ul(n.shape[0],n.shape[1],s.shape[1],i),l=[[n.shape[1]]];return r.runWebGLProgram(a,[n,s],"int32",l)}var Db={kernelName:jd,backendName:"webgl",kernelFunc:dN};var cl=class{constructor(t,r,o){this.variableNames=["c","a","b"],this.outputShape=r;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],u=[];for(let c=0;c<r.length;c++)u.push(`${a[c]}`),c<t&&l.push(`${a[c]}`);n=l.join(),s=u.join()}let i=W(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function hN(e){let{inputs:t,backend:r}=e,{condition:o,t:n,e:s}=t,i=new cl(o.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(i,[o,n,s],Et(n.dtype,s.dtype))}var Ob={kernelName:Yd,backendName:"webgl",kernelFunc:hN};var mN=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${S.SELU_SCALEALPHA};
  float scale = ${S.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,gN=P({opSnippet:mN}),Pb={kernelName:Qd,backendName:"webgl",kernelFunc:gN};var xN=fe+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,yN=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wN=P({opSnippet:xN,packedOpSnippet:yN,cpuKernelImpl:f0}),Mb={kernelName:bo,backendName:"webgl",kernelFunc:wN};var bN=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,vN=P({opSnippet:bN}),Lb={kernelName:th,backendName:"webgl",kernelFunc:vN};var CN=fe+`
  return sin(x);
`,SN=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Yt}
  return result;
`,IN=P({opSnippet:CN,packedOpSnippet:SN}),Bb={kernelName:Zd,backendName:"webgl",kernelFunc:IN};var $N=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,TN=P({opSnippet:$N}),Ub={kernelName:Jd,backendName:"webgl",kernelFunc:TN};var EN=`
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
`,_N=P({opSnippet:EN}),Vb={kernelName:eh,backendName:"webgl",kernelFunc:_N};var AN=e=>{let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{blockShape:s,paddings:i}=o;w.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((m,y)=>m*y),l=[[0,0]];l.push(...i);for(let m=1+s.length;m<n.shape.length;++m)l.push([0,0]);let u=[],c=up({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),p=S.getReshaped(c.shape,s,a,!1),f=S.getPermuted(p.length,s.length,!1),d=S.getReshapedPermuted(c.shape,s,a,!1),h=_({inputs:{x:c},backend:r,attrs:{shape:p}}),x=Z({inputs:{x:h},backend:r,attrs:{perm:f}}),g=_({inputs:{x},backend:r,attrs:{shape:d}});return u.push(c),u.push(h),u.push(x),u.forEach(m=>r.disposeIntermediateTensorInfo(m)),g},Wb={kernelName:rh,backendName:"webgl",kernelFunc:AN};function RN(e){let{inputs:t,backend:r}=e,{indices:o,values:n,denseShape:s,defaultValue:i}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=r.readSync(o.dataId),l=r.readSync(n.dataId),u=r.readSync(s.dataId),c=r.readSync(i.dataId)[0],[p,f,d,h,x]=h0(a,o.shape,o.dtype,l,n.dtype,u,c);return[r.makeTensorInfo(f,o.dtype,p),r.makeTensorInfo([f[0]],n.dtype,d),r.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(g=>Number(g)))),r.makeTensorInfo([x.length],o.dtype,new Int32Array(x))]}var zb={kernelName:sh,backendName:"webgl",kernelFunc:RN};function NN(e){let{inputs:t,backend:r}=e,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(r.readSync(n.dataId)),a=r.readSync(o.dataId),l=Array.from(r.readSync(s.dataId)),[u,c,p]=m0(a,o.shape,o.dtype,i,l);return[r.makeTensorInfo(c,o.dtype,u),r.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var Gb={kernelName:ih,backendName:"webgl",kernelFunc:NN};function kN(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=Hi(i,o.shape,o.dtype,a,l,!0);return r.makeTensorInfo(c,o.dtype,u)}var Hb={kernelName:ah,backendName:"webgl",kernelFunc:kN};function FN(e){let{inputs:t,backend:r}=e,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=r.readSync(o.dataId),a=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,c]=Hi(i,o.shape,o.dtype,a,l);return r.makeTensorInfo(c,o.dtype,u)}var qb={kernelName:lh,backendName:"webgl",kernelFunc:FN};function DN(e){let{inputs:t,backend:r,attrs:o}=e,{sparseIndices:n,sparseValues:s,defaultValue:i}=t,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:f}=S.calculateShapes(s,n,a),d=!1;if(s.dtype==="string"){let m=r.bufferSync(n),y=r.bufferSync(s),C=w.decodeString(r.readSync(i.dataId)[0]),b=p0(m,y,a,f,c,u,l,p,C,d);return r.makeTensorInfo(a,b.dtype,b.values)}let h=new hr(u,l,n.shape.length,s.shape.length,p,[f,1],d),x=r.runWebGLProgram(h,[s,n,i],s.dtype),g=_({inputs:{x},backend:r,attrs:{shape:a}});return r.disposeIntermediateTensorInfo(x),g}var Kb={kernelName:uh,backendName:"webgl",kernelFunc:DN};function ON(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{numOrSizeSplits:s,axis:i}=o,a=w.parseAxisParam(i,n.shape)[0],l=S.prepareSplitSize(n,s,a),u=n.shape.length,c=new Array(u).fill(0),p=n.shape.slice();return l.map(f=>{let d=[...p];d[a]=f;let h=ve({inputs:{x:n},backend:r,attrs:{begin:c,size:d}});return c[a]+=f,h})}var Xb={kernelName:oh,backendName:"webgl",kernelFunc:ON};var jb="return sqrt(x);",PN=P({opSnippet:jb,packedOpSnippet:jb,cpuKernelImpl:g0}),Yb={kernelName:vo,backendName:"webgl",kernelFunc:PN};var MN="return x * x;",LN=P({opSnippet:MN}),Qb={kernelName:ch,backendName:"webgl",kernelFunc:LN};var Zb="return (a - b) * (a - b);",BN=q({opSnippet:Zb,packedOpSnippet:Zb}),Jb={kernelName:js,backendName:"webgl",kernelFunc:BN};function UN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=r.readSync(n.dataId),i=S.fromUint8ToStringArray(s),a=x0(i,"string",o);return r.makeTensorInfo(n.shape,"string",a)}var tv={kernelName:Ys,backendName:"webgl",kernelFunc:UN};function VN({inputs:e,attrs:t,backend:r}){let{x:o}=e,n=pt+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new vt(o.shape,n);return r.runWebGLProgram(s,[o],o.dtype)}var ev={kernelName:Js,backendName:"webgl",kernelFunc:VN};var pl=class{constructor(t,r,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=W(o.length),i=W(o.length),a="";if(n===1)a="coords * strides + begin";else{let l=0;a=o.map((u,c)=>(l++,o.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${l-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${r});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function WN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:f}=o,{finalShapeSparse:d,finalShape:h,isIdentity:x,sliceDim0:g,isSimpleSlice:m,begin:y,end:C,strides:b}=Lt.sliceInfo(n.shape,s,i,a,l,u,c,p,f),v;if(x)v=_({inputs:{x:n},backend:r,attrs:{shape:h}});else if(g||m){w.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let T=Lt.computeOutShape(y,C,b),E=ve({inputs:{x:n},backend:r,attrs:{begin:y,size:T}});v=_({inputs:{x:E},backend:r,attrs:{shape:h}}),r.disposeIntermediateTensorInfo(E)}else if(r.shouldExecuteOnCPU([n])){let E=r.readSync(n.dataId),R=X(n.shape,n.dtype,E),N=y0(d,R,b,y);v=r.makeTensorInfo(h,n.dtype,N.values)}else{let E=new pl(y,b,d);v=r.runWebGLProgram(E,[n],n.dtype)}let I=_({inputs:{x:v},backend:r,attrs:{shape:h}});return r.disposeIntermediateTensorInfo(v),I}var rv={kernelName:ph,backendName:"webgl",kernelFunc:WN};function zN(e){let{inputs:t,backend:r,attrs:o}=e,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=t,f=r.readSync(c.dataId),d=r.readSync(p.dataId),[h,x]=w0(f,d,n,s,i,a,l,u);return[r.makeTensorInfo([h.length],"string",h),r.makeTensorInfo(p.shape,"int32",x)]}var ov={kernelName:fh,backendName:"webgl",kernelFunc:zN};function GN(e){let{inputs:t,backend:r,attrs:o}=e,{skipEmpty:n}=o,{input:s,delimiter:i}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=r.readSync(s.dataId),l=r.readSync(i.dataId)[0],[u,c,p]=b0(a,l,n),f=c.length;return[r.makeTensorInfo([f,2],"int32",u),r.makeTensorInfo([f],"string",c),r.makeTensorInfo([2],"int32",new Int32Array(p))]}var nv={kernelName:dh,backendName:"webgl",kernelFunc:GN};function HN(e){let{inputs:t,backend:r,attrs:o}=e,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=r.readSync(s.dataId),a=v0(i,n);return r.makeTensorInfo(s.shape,"int32",a)}var sv={kernelName:hh,backendName:"webgl",kernelFunc:HN};var qN="return tan(x);",KN=P({opSnippet:qN}),iv={kernelName:mh,backendName:"webgl",kernelFunc:KN};var XN=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,jN=P({opSnippet:XN}),av={kernelName:gh,backendName:"webgl",kernelFunc:jN};function YN(e){let{inputs:t,backend:r,attrs:o}=e,{tensor:n,indices:s,updates:i}=t,{}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=S.calculateShapes(i,s,n.shape),f=[p/u,u];if(p===0)return r.makeTensorInfo(n.shape,s.dtype);let d=_({inputs:{x:s},backend:r,attrs:{shape:[l,a]}}),h=_({inputs:{x:i},backend:r,attrs:{shape:[l,u]}}),x=_({inputs:{x:n},backend:r,attrs:{shape:f}}),g=new hr(l,a,d.shape.length,h.shape.length,c,f,!1,!0),m=r.runWebGLProgram(g,[h,d,x],x.dtype),y=_({inputs:{x:m},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(x),r.disposeIntermediateTensorInfo(m),y}var lv={kernelName:Xd,backendName:"webgl",kernelFunc:YN};var fl=class{constructor(t,r){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[i]*r[i];this.outputShape=o,this.rank=o.length;let n=W(this.rank),s=QN(t);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function QN(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<e.length;n++)o.push(`imod(${r[n]}, ${e[n]})`);return o.join()}function pp(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let l=r.readSync(n.dataId),u=n.dtype==="string"?l.map(f=>w.decodeString(f)):l,c=X(n.shape,n.dtype,u),p=S0(c,s);return r.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new fl(n.shape,s);return r.runWebGLProgram(i,[n],n.dtype)}var uv={kernelName:Qs,backendName:"webgl",kernelFunc:pp};var dl=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}},hl=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}};function Kr(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function cv(e){let t=1;for(;t<e;)t*=2;return t}function ZN(e){let{inputs:t,backend:r,attrs:o}=e,{x:n}=t,{k:s,sorted:i}=o,a=$().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=$().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,c=u[u.length-1];if(r.shouldExecuteOnCPU([n])||c<a||s>l){let N=r.readSync(n.dataId),[M,L]=I0(N,u,n.dtype,s,i);return[r.makeTensorInfo(M.shape,M.dtype,M.values),r.makeTensorInfo(L.shape,L.dtype,L.values)]}if(s===0)return u[u.length-1]=0,[r.makeTensorInfo(u,n.dtype,[]),r.makeTensorInfo(u,"int32",[])];if(c===1)return[n,Ke({attrs:{shape:u,dtype:"int32",value:0},backend:r})];let p=r.texData.get(n.dataId),f=p!==null&&p.isPacked,d=f?r.unpackTensor(n):n,x=w.sizeFromShape(u)/c,g=_({inputs:{x:d},attrs:{shape:[x,c]},backend:r});f&&Kr(r,d);let m=cv(s),y=cv(c),C=null,b=()=>C===null?[g,g]:[g,C],v=(N,M,L)=>{let ut=b(),rt=new dl(L),J=[[c],[C===null?1:0],[Number.NEGATIVE_INFINITY],[N],[M]],St=C;C=r.runWebGLProgram(rt,ut,"int32",J),Kr(r,St)};for(let N=1;N<m;N*=2){let M=N*2;for(let L=N;L>=1;L/=2)v(M,L,[x,y])}for(let N=y;N>m;N/=2){let M=b(),L=new hl([x,N/2]),rt=[[c],[C===null?1:0],[m]],U=C;C=r.runWebGLProgram(L,M,"int32",rt),Kr(r,U);let J=m/2,St=J*2;for(let It=J;It>=1;It/=2)v(St,It,C.shape)}let I=C;C=ve({inputs:{x:C},backend:r,attrs:{begin:0,size:[x,s]}}),Kr(r,I);let T=np({inputs:{x:g,indices:C},backend:r,attrs:{axis:1,batchDims:1}});Kr(r,g);let E=u.slice(0,-1);E.push(s),I=C,C=_({inputs:{x:C},attrs:{shape:E},backend:r}),Kr(r,I);let R=T;return T=_({inputs:{x:T},attrs:{shape:E},backend:r}),Kr(r,R),[T,C]}var pv={kernelName:xh,backendName:"webgl",kernelFunc:ZN};var ml=class{constructor(t,r,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,l;switch(n){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
        `}};function JN(e){let{inputs:t,backend:r,attrs:o}=e,{image:n,transforms:s}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=o,[c,p,f,d]=n.shape,[h,x]=u??[p,f],g=[c,h,x,d],m=new ml(p,f,i,a,l,g);return r.runWebGLProgram(m,[n,s],"float32")}var fv={kernelName:yh,backendName:"webgl",kernelFunc:JN};function tk(e){let{inputs:t,attrs:r,backend:o}=e,{axis:n}=r,{x:s}=t;ke(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:l,indices:u}=$0(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var dv={kernelName:wh,backendName:"webgl",kernelFunc:tk};function ek(e){let{inputs:t,backend:r,attrs:o}=e,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,l=n.shape[s],u=new Array(a-1),c=0;for(let x=0;x<a;x++)x!==s&&(u[c++]=i.shape[x]);let p=[],f=new Array(a).fill(0),d=i.shape.slice();d[s]=1;let h=new Array(l);for(let x=0;x<h.length;x++){f[s]=x;let g=ve({inputs:{x:i},backend:r,attrs:{begin:f,size:d}}),m=_({inputs:{x:g},backend:r,attrs:{shape:u}});h[x]=m,p.push(g)}return p.forEach(x=>r.disposeIntermediateTensorInfo(x)),h}var hv={kernelName:bh,backendName:"webgl",kernelFunc:ek};var gl=class{constructor(t,r){this.variableNames=["x","segmentIds"];let o=t.windowSize,n=t.batchSize,s=t.inSize,i=t.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let l="0.0",u="sumValue",c=Math.floor(o/4)*4,p=o%4,f=`
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
    `}};function rk(e){let{inputs:t,backend:r,attrs:o}=e,{x:n,segmentIds:s}=t,{numSegments:i}=o,a=n.shape.length,l=[],u=0,c=S.getAxesPermutation([u],a),p=n;c!=null&&(p=Z({inputs:{x:n},backend:r,attrs:{perm:c}}),l.push(p),u=S.getInnerMostAxes(1,a)[0]);let f=S.segment_util.computeOutShape(p.shape,u,i),d=w.sizeFromShape([p.shape[u]]),h=_({inputs:{x:p},backend:r,attrs:{shape:[-1,d]}});l.push(h);let x=Fr(n.dtype),g=(b,v,I,T,E)=>{let R=b.shape[0],N=b.shape[1],M=S.segment_util.segOpComputeOptimalWindowSize(N,E),L={windowSize:M,inSize:N,batchSize:R,numSegments:E},ut=new gl(L,v),rt=r.compileAndRun(ut,[b,I],T);if(l.push(rt),rt.shape[1]===E)return rt;let U=cp({backend:r,attrs:{start:0,stop:E,step:1,dtype:"float32"}}),J=pp({inputs:{x:U},backend:r,attrs:{reps:[N/M]}});return l.push(U),l.push(J),g(rt,v,J,T,E)},m=g(h,"unsortedSegmentSum",s,x,i),y=_({inputs:{x:m},backend:r,attrs:{shape:f}}),C=y;if(c!=null){l.push(y);let b=S.getUndoAxesPermutation(c);C=Z({inputs:{x:C},backend:r,attrs:{perm:b}})}return l.forEach(b=>r.disposeIntermediateTensorInfo(b)),C}var mv={kernelName:vh,backendName:"webgl",kernelFunc:rk};var ok=[Z0,ty,ey,ry,ny,sy,iy,ay,cy,py,fy,dy,hy,my,gy,xy,yy,wy,by,vy,Cy,Iy,$y,Ty,Ry,ky,Fy,W0,Oy,My,Ly,By,Uy,Vy,Wy,zy,Gy,Hy,qy,jy,Yy,Qy,Zy,Jy,tw,ew,rw,ow,nw,sw,iw,aw,lw,uw,cw,fw,dw,hw,mw,xw,yw,ww,bw,vw,Cw,Sw,Iw,$w,V0,Tw,Py,Ew,_w,Aw,z0,Rw,Nw,kw,Fw,Dw,Ow,Pw,Mw,Lw,Bw,Vw,Ww,zw,Gw,Hw,qw,Xw,Yw,Qw,Zw,Jw,tb,sb,q0,ib,ab,lb,ub,Ey,cb,db,hb,mb,gb,G0,xb,yb,wb,bb,vb,_y,eb,Cb,Sb,Ib,X0,$b,Tb,Eb,_b,Ab,Rb,Nb,kb,Fb,Db,Ob,Pb,Mb,Lb,Bb,Ub,Sy,nb,Vb,Wb,zb,Gb,Hb,qb,Kb,Xb,Yb,Qb,Jb,tv,ev,rv,ov,nv,sv,ob,Y0,iv,av,lv,uv,pv,fv,Q0,dv,hv,mv,pb];for(let e of ok)_h(e);function Xr(e,t){let r=0;if(t===void 0)for(let o of e)(o=+o)&&(r+=o);else{let o=-1;for(let n of e)(n=+t(n,++o,e))&&(r+=n)}return r}var nk={value:()=>{}};function xv(){for(var e=0,t=arguments.length,r={},o;e<t;++e){if(!(o=arguments[e]+"")||o in r||/[\s.]/.test(o))throw new Error("illegal type: "+o);r[o]=[]}return new xl(r)}function xl(e){this._=e}function sk(e,t){return e.trim().split(/^|\s+/).map(function(r){var o="",n=r.indexOf(".");if(n>=0&&(o=r.slice(n+1),r=r.slice(0,n)),r&&!t.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:o}})}xl.prototype=xv.prototype={constructor:xl,on:function(e,t){var r=this._,o=sk(e+"",r),n,s=-1,i=o.length;if(arguments.length<2){for(;++s<i;)if((n=(e=o[s]).type)&&(n=ik(r[n],e.name)))return n;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<i;)if(n=(e=o[s]).type)r[n]=gv(r[n],e.name,t);else if(t==null)for(n in r)r[n]=gv(r[n],e.name,null);return this},copy:function(){var e={},t=this._;for(var r in t)e[r]=t[r].slice();return new xl(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var r=new Array(n),o=0,n,s;o<n;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],o=0,n=s.length;o<n;++o)s[o].value.apply(t,r)},apply:function(e,t,r){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],n=0,s=o.length;n<s;++n)o[n].value.apply(t,r)}};function ik(e,t){for(var r=0,o=e.length,n;r<o;++r)if((n=e[r]).name===t)return n.value}function gv(e,t,r){for(var o=0,n=e.length;o<n;++o)if(e[o].name===t){e[o]=nk,e=e.slice(0,o).concat(e.slice(o+1));break}return r!=null&&e.push({name:t,value:r}),e}var jr=xv;var yl="http://www.w3.org/1999/xhtml",fp={svg:"http://www.w3.org/2000/svg",xhtml:yl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Xe(e){var t=e+="",r=t.indexOf(":");return r>=0&&(t=e.slice(0,r))!=="xmlns"&&(e=e.slice(r+1)),fp.hasOwnProperty(t)?{space:fp[t],local:e}:e}function ak(e){return function(){var t=this.ownerDocument,r=this.namespaceURI;return r===yl&&t.documentElement.namespaceURI===yl?t.createElement(e):t.createElementNS(r,e)}}function lk(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function wl(e){var t=Xe(e);return(t.local?lk:ak)(t)}function uk(){}function Yr(e){return e==null?uk:function(){return this.querySelector(e)}}function yv(e){typeof e!="function"&&(e=Yr(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=new Array(i),l,u,c=0;c<i;++c)(l=s[c])&&(u=e.call(l,l.__data__,c,s))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new ft(o,this._parents)}function dp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ck(){return[]}function Hn(e){return e==null?ck:function(){return this.querySelectorAll(e)}}function pk(e){return function(){return dp(e.apply(this,arguments))}}function wv(e){typeof e=="function"?e=pk(e):e=Hn(e);for(var t=this._groups,r=t.length,o=[],n=[],s=0;s<r;++s)for(var i=t[s],a=i.length,l,u=0;u<a;++u)(l=i[u])&&(o.push(e.call(l,l.__data__,u,i)),n.push(l));return new ft(o,n)}function qn(e){return function(){return this.matches(e)}}function bl(e){return function(t){return t.matches(e)}}var fk=Array.prototype.find;function dk(e){return function(){return fk.call(this.children,e)}}function hk(){return this.firstElementChild}function bv(e){return this.select(e==null?hk:dk(typeof e=="function"?e:bl(e)))}var mk=Array.prototype.filter;function gk(){return Array.from(this.children)}function xk(e){return function(){return mk.call(this.children,e)}}function vv(e){return this.selectAll(e==null?gk:xk(typeof e=="function"?e:bl(e)))}function Cv(e){typeof e!="function"&&(e=qn(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,u=0;u<i;++u)(l=s[u])&&e.call(l,l.__data__,u,s)&&a.push(l);return new ft(o,this._parents)}function vl(e){return new Array(e.length)}function Sv(){return new ft(this._enter||this._groups.map(vl),this._parents)}function Kn(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Kn.prototype={constructor:Kn,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Iv(e){return function(){return e}}function yk(e,t,r,o,n,s){for(var i=0,a,l=t.length,u=s.length;i<u;++i)(a=t[i])?(a.__data__=s[i],o[i]=a):r[i]=new Kn(e,s[i]);for(;i<l;++i)(a=t[i])&&(n[i]=a)}function wk(e,t,r,o,n,s,i){var a,l,u=new Map,c=t.length,p=s.length,f=new Array(c),d;for(a=0;a<c;++a)(l=t[a])&&(f[a]=d=i.call(l,l.__data__,a,t)+"",u.has(d)?n[a]=l:u.set(d,l));for(a=0;a<p;++a)d=i.call(e,s[a],a,s)+"",(l=u.get(d))?(o[a]=l,l.__data__=s[a],u.delete(d)):r[a]=new Kn(e,s[a]);for(a=0;a<c;++a)(l=t[a])&&u.get(f[a])===l&&(n[a]=l)}function bk(e){return e.__data__}function $v(e,t){if(!arguments.length)return Array.from(this,bk);var r=t?wk:yk,o=this._parents,n=this._groups;typeof e!="function"&&(e=Iv(e));for(var s=n.length,i=new Array(s),a=new Array(s),l=new Array(s),u=0;u<s;++u){var c=o[u],p=n[u],f=p.length,d=vk(e.call(c,c&&c.__data__,u,o)),h=d.length,x=a[u]=new Array(h),g=i[u]=new Array(h),m=l[u]=new Array(f);r(c,p,x,g,m,d,t);for(var y=0,C=0,b,v;y<h;++y)if(b=x[y]){for(y>=C&&(C=y+1);!(v=g[C])&&++C<h;);b._next=v||null}}return i=new ft(i,o),i._enter=a,i._exit=l,i}function vk(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Tv(){return new ft(this._exit||this._groups.map(vl),this._parents)}function Ev(e,t,r){var o=this.enter(),n=this,s=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(n=t(n),n&&(n=n.selection())),r==null?s.remove():r(s),o&&n?o.merge(n).order():n}function _v(e){for(var t=e.selection?e.selection():e,r=this._groups,o=t._groups,n=r.length,s=o.length,i=Math.min(n,s),a=new Array(n),l=0;l<i;++l)for(var u=r[l],c=o[l],p=u.length,f=a[l]=new Array(p),d,h=0;h<p;++h)(d=u[h]||c[h])&&(f[h]=d);for(;l<n;++l)a[l]=r[l];return new ft(a,this._parents)}function Av(){for(var e=this._groups,t=-1,r=e.length;++t<r;)for(var o=e[t],n=o.length-1,s=o[n],i;--n>=0;)(i=o[n])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Rv(e){e||(e=Ck);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var r=this._groups,o=r.length,n=new Array(o),s=0;s<o;++s){for(var i=r[s],a=i.length,l=n[s]=new Array(a),u,c=0;c<a;++c)(u=i[c])&&(l[c]=u);l.sort(t)}return new ft(n,this._parents).order()}function Ck(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Nv(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function kv(){return Array.from(this)}function Fv(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length;n<s;++n){var i=o[n];if(i)return i}return null}function Dv(){let e=0;for(let t of this)++e;return e}function Ov(){return!this.node()}function Pv(e){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var n=t[r],s=0,i=n.length,a;s<i;++s)(a=n[s])&&e.call(a,a.__data__,s,n);return this}function Sk(e){return function(){this.removeAttribute(e)}}function Ik(e){return function(){this.removeAttributeNS(e.space,e.local)}}function $k(e,t){return function(){this.setAttribute(e,t)}}function Tk(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Ek(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttribute(e):this.setAttribute(e,r)}}function _k(e,t){return function(){var r=t.apply(this,arguments);r==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,r)}}function Mv(e,t){var r=Xe(e);if(arguments.length<2){var o=this.node();return r.local?o.getAttributeNS(r.space,r.local):o.getAttribute(r)}return this.each((t==null?r.local?Ik:Sk:typeof t=="function"?r.local?_k:Ek:r.local?Tk:$k)(r,t))}function Cl(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Ak(e){return function(){this.style.removeProperty(e)}}function Rk(e,t,r){return function(){this.style.setProperty(e,t,r)}}function Nk(e,t,r){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,r)}}function Lv(e,t,r){return arguments.length>1?this.each((t==null?Ak:typeof t=="function"?Nk:Rk)(e,t,r??"")):mr(this.node(),e)}function mr(e,t){return e.style.getPropertyValue(t)||Cl(e).getComputedStyle(e,null).getPropertyValue(t)}function kk(e){return function(){delete this[e]}}function Fk(e,t){return function(){this[e]=t}}function Dk(e,t){return function(){var r=t.apply(this,arguments);r==null?delete this[e]:this[e]=r}}function Bv(e,t){return arguments.length>1?this.each((t==null?kk:typeof t=="function"?Dk:Fk)(e,t)):this.node()[e]}function Uv(e){return e.trim().split(/^|\s+/)}function hp(e){return e.classList||new Vv(e)}function Vv(e){this._node=e,this._names=Uv(e.getAttribute("class")||"")}Vv.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Wv(e,t){for(var r=hp(e),o=-1,n=t.length;++o<n;)r.add(t[o])}function zv(e,t){for(var r=hp(e),o=-1,n=t.length;++o<n;)r.remove(t[o])}function Ok(e){return function(){Wv(this,e)}}function Pk(e){return function(){zv(this,e)}}function Mk(e,t){return function(){(t.apply(this,arguments)?Wv:zv)(this,e)}}function Gv(e,t){var r=Uv(e+"");if(arguments.length<2){for(var o=hp(this.node()),n=-1,s=r.length;++n<s;)if(!o.contains(r[n]))return!1;return!0}return this.each((typeof t=="function"?Mk:t?Ok:Pk)(r,t))}function Lk(){this.textContent=""}function Bk(e){return function(){this.textContent=e}}function Uk(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Hv(e){return arguments.length?this.each(e==null?Lk:(typeof e=="function"?Uk:Bk)(e)):this.node().textContent}function Vk(){this.innerHTML=""}function Wk(e){return function(){this.innerHTML=e}}function zk(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function qv(e){return arguments.length?this.each(e==null?Vk:(typeof e=="function"?zk:Wk)(e)):this.node().innerHTML}function Gk(){this.nextSibling&&this.parentNode.appendChild(this)}function Kv(){return this.each(Gk)}function Hk(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Xv(){return this.each(Hk)}function jv(e){var t=typeof e=="function"?e:wl(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function qk(){return null}function Yv(e,t){var r=typeof e=="function"?e:wl(e),o=t==null?qk:typeof t=="function"?t:Yr(t);return this.select(function(){return this.insertBefore(r.apply(this,arguments),o.apply(this,arguments)||null)})}function Kk(){var e=this.parentNode;e&&e.removeChild(this)}function Qv(){return this.each(Kk)}function Xk(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function jk(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Zv(e){return this.select(e?jk:Xk)}function Jv(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Yk(e){return function(t){e.call(this,t,this.__data__)}}function Qk(e){return e.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{type:t,name:r}})}function Zk(e){return function(){var t=this.__on;if(t){for(var r=0,o=-1,n=t.length,s;r<n;++r)s=t[r],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++o]=s;++o?t.length=o:delete this.__on}}}function Jk(e,t,r){return function(){var o=this.__on,n,s=Yk(t);if(o){for(var i=0,a=o.length;i<a;++i)if((n=o[i]).type===e.type&&n.name===e.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=s,n.options=r),n.value=t;return}}this.addEventListener(e.type,s,r),n={type:e.type,name:e.name,value:t,listener:s,options:r},o?o.push(n):this.__on=[n]}}function t1(e,t,r){var o=Qk(e+""),n,s=o.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(n=0,c=a[l];n<s;++n)if((i=o[n]).type===c.type&&i.name===c.name)return c.value}return}for(a=t?Jk:Zk,n=0;n<s;++n)this.each(a(o[n],t,r));return this}function e1(e,t,r){var o=Cl(e),n=o.CustomEvent;typeof n=="function"?n=new n(t,r):(n=o.document.createEvent("Event"),r?(n.initEvent(t,r.bubbles,r.cancelable),n.detail=r.detail):n.initEvent(t,!1,!1)),e.dispatchEvent(n)}function tF(e,t){return function(){return e1(this,e,t)}}function eF(e,t){return function(){return e1(this,e,t.apply(this,arguments))}}function r1(e,t){return this.each((typeof t=="function"?eF:tF)(e,t))}function*o1(){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],n=0,s=o.length,i;n<s;++n)(i=o[n])&&(yield i)}var mp=[null];function ft(e,t){this._groups=e,this._parents=t}function n1(){return new ft([[document.documentElement]],mp)}function rF(){return this}ft.prototype=n1.prototype={constructor:ft,select:yv,selectAll:wv,selectChild:bv,selectChildren:vv,filter:Cv,data:$v,enter:Sv,exit:Tv,join:Ev,merge:_v,selection:rF,order:Av,sort:Rv,call:Nv,nodes:kv,node:Fv,size:Dv,empty:Ov,each:Pv,attr:Mv,style:Lv,property:Bv,classed:Gv,text:Hv,html:qv,raise:Kv,lower:Xv,append:jv,insert:Yv,remove:Qv,clone:Zv,datum:Jv,on:t1,dispatch:r1,[Symbol.iterator]:o1};var je=n1;function Ye(e){return typeof e=="string"?new ft([[document.querySelector(e)]],[document.documentElement]):new ft([[e]],mp)}function s1(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Sl(e,t){if(e=s1(e),t===void 0&&(t=e.currentTarget),t){var r=t.ownerSVGElement||t;if(r.createSVGPoint){var o=r.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();return[e.clientX-n.left-t.clientLeft,e.clientY-n.top-t.clientTop]}}return[e.pageX,e.pageY]}var i1={passive:!1},Qr={capture:!0,passive:!1};function Il(e){e.stopImmediatePropagation()}function gr(e){e.preventDefault(),e.stopImmediatePropagation()}function a1(e){var t=e.document.documentElement,r=Ye(e).on("dragstart.drag",gr,Qr);"onselectstart"in t?r.on("selectstart.drag",gr,Qr):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function l1(e,t){var r=e.document.documentElement,o=Ye(e).on("dragstart.drag",null);t&&(o.on("click.drag",gr,Qr),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in r?o.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect)}var Xn=e=>()=>e;function jn(e,{sourceEvent:t,subject:r,target:o,identifier:n,active:s,x:i,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}jn.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function oF(e){return!e.ctrlKey&&!e.button}function nF(){return this.parentNode}function sF(e,t){return t??{x:e.x,y:e.y}}function iF(){return navigator.maxTouchPoints||"ontouchstart"in this}function gp(){var e=oF,t=nF,r=sF,o=iF,n={},s=jr("start","drag","end"),i=0,a,l,u,c,p=0;function f(b){b.on("mousedown.drag",d).filter(o).on("touchstart.drag",g).on("touchmove.drag",m,i1).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(b,v){if(!(c||!e.call(this,b,v))){var I=C(this,t.call(this,b,v),b,v,"mouse");I&&(Ye(b.view).on("mousemove.drag",h,Qr).on("mouseup.drag",x,Qr),a1(b.view),Il(b),u=!1,a=b.clientX,l=b.clientY,I("start",b))}}function h(b){if(gr(b),!u){var v=b.clientX-a,I=b.clientY-l;u=v*v+I*I>p}n.mouse("drag",b)}function x(b){Ye(b.view).on("mousemove.drag mouseup.drag",null),l1(b.view,u),gr(b),n.mouse("end",b)}function g(b,v){if(e.call(this,b,v)){var I=b.changedTouches,T=t.call(this,b,v),E=I.length,R,N;for(R=0;R<E;++R)(N=C(this,T,b,v,I[R].identifier,I[R]))&&(Il(b),N("start",b,I[R]))}}function m(b){var v=b.changedTouches,I=v.length,T,E;for(T=0;T<I;++T)(E=n[v[T].identifier])&&(gr(b),E("drag",b,v[T]))}function y(b){var v=b.changedTouches,I=v.length,T,E;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),T=0;T<I;++T)(E=n[v[T].identifier])&&(Il(b),E("end",b,v[T]))}function C(b,v,I,T,E,R){var N=s.copy(),M=Sl(R||I,v),L,ut,rt;if((rt=r.call(b,new jn("beforestart",{sourceEvent:I,target:f,identifier:E,active:i,x:M[0],y:M[1],dx:0,dy:0,dispatch:N}),T))!=null)return L=rt.x-M[0]||0,ut=rt.y-M[1]||0,function U(J,St,It){var he=M,Ie;switch(J){case"start":n[E]=U,Ie=i++;break;case"end":delete n[E],--i;case"drag":M=Sl(It||St,v),Ie=i;break}N.call(J,b,new jn(J,{sourceEvent:St,subject:rt,target:f,identifier:E,active:Ie,x:M[0]+L,y:M[1]+ut,dx:M[0]-he[0],dy:M[1]-he[1],dispatch:N}),T)}}return f.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Xn(!!b),f):e},f.container=function(b){return arguments.length?(t=typeof b=="function"?b:Xn(b),f):t},f.subject=function(b){return arguments.length?(r=typeof b=="function"?b:Xn(b),f):r},f.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Xn(!!b),f):o},f.on=function(){var b=s.on.apply(s,arguments);return b===s?f:b},f.clickDistance=function(b){return arguments.length?(p=(b=+b)*b,f):Math.sqrt(p)},f}function $l(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function xp(e,t){var r=Object.create(e.prototype);for(var o in t)r[o]=t[o];return r}function Zn(){}var Yn=.7,_l=1/Yn,Jo="\\s*([+-]?\\d+)\\s*",Qn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",De="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",aF=/^#([0-9a-f]{3,8})$/,lF=new RegExp(`^rgb\\(${Jo},${Jo},${Jo}\\)$`),uF=new RegExp(`^rgb\\(${De},${De},${De}\\)$`),cF=new RegExp(`^rgba\\(${Jo},${Jo},${Jo},${Qn}\\)$`),pF=new RegExp(`^rgba\\(${De},${De},${De},${Qn}\\)$`),fF=new RegExp(`^hsl\\(${Qn},${De},${De}\\)$`),dF=new RegExp(`^hsla\\(${Qn},${De},${De},${Qn}\\)$`),u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$l(Zn,xr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:c1,formatHex:c1,formatHex8:hF,formatHsl:mF,formatRgb:p1,toString:p1});function c1(){return this.rgb().formatHex()}function hF(){return this.rgb().formatHex8()}function mF(){return x1(this).formatHsl()}function p1(){return this.rgb().formatRgb()}function xr(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=aF.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?f1(t):r===3?new Zt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?Tl(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?Tl(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=lF.exec(e))?new Zt(t[1],t[2],t[3],1):(t=uF.exec(e))?new Zt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=cF.exec(e))?Tl(t[1],t[2],t[3],t[4]):(t=pF.exec(e))?Tl(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=fF.exec(e))?m1(t[1],t[2]/100,t[3]/100,1):(t=dF.exec(e))?m1(t[1],t[2]/100,t[3]/100,t[4]):u1.hasOwnProperty(e)?f1(u1[e]):e==="transparent"?new Zt(NaN,NaN,NaN,0):null}function f1(e){return new Zt(e>>16&255,e>>8&255,e&255,1)}function Tl(e,t,r,o){return o<=0&&(e=t=r=NaN),new Zt(e,t,r,o)}function gF(e){return e instanceof Zn||(e=xr(e)),e?(e=e.rgb(),new Zt(e.r,e.g,e.b,e.opacity)):new Zt}function tn(e,t,r,o){return arguments.length===1?gF(e):new Zt(e,t,r,o??1)}function Zt(e,t,r,o){this.r=+e,this.g=+t,this.b=+r,this.opacity=+o}$l(Zt,tn,xp(Zn,{brighter(e){return e=e==null?_l:Math.pow(_l,e),new Zt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Yn:Math.pow(Yn,e),new Zt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Zt(Jr(this.r),Jr(this.g),Jr(this.b),Al(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:d1,formatHex:d1,formatHex8:xF,formatRgb:h1,toString:h1}));function d1(){return`#${Zr(this.r)}${Zr(this.g)}${Zr(this.b)}`}function xF(){return`#${Zr(this.r)}${Zr(this.g)}${Zr(this.b)}${Zr((isNaN(this.opacity)?1:this.opacity)*255)}`}function h1(){let e=Al(this.opacity);return`${e===1?"rgb(":"rgba("}${Jr(this.r)}, ${Jr(this.g)}, ${Jr(this.b)}${e===1?")":`, ${e})`}`}function Al(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Jr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Zr(e){return e=Jr(e),(e<16?"0":"")+e.toString(16)}function m1(e,t,r,o){return o<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Ce(e,t,r,o)}function x1(e){if(e instanceof Ce)return new Ce(e.h,e.s,e.l,e.opacity);if(e instanceof Zn||(e=xr(e)),!e)return new Ce;if(e instanceof Ce)return e;e=e.rgb();var t=e.r/255,r=e.g/255,o=e.b/255,n=Math.min(t,r,o),s=Math.max(t,r,o),i=NaN,a=s-n,l=(s+n)/2;return a?(t===s?i=(r-o)/a+(r<o)*6:r===s?i=(o-t)/a+2:i=(t-r)/a+4,a/=l<.5?s+n:2-s-n,i*=60):a=l>0&&l<1?0:i,new Ce(i,a,l,e.opacity)}function y1(e,t,r,o){return arguments.length===1?x1(e):new Ce(e,t,r,o??1)}function Ce(e,t,r,o){this.h=+e,this.s=+t,this.l=+r,this.opacity=+o}$l(Ce,y1,xp(Zn,{brighter(e){return e=e==null?_l:Math.pow(_l,e),new Ce(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Yn:Math.pow(Yn,e),new Ce(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,o=r+(r<.5?r:1-r)*t,n=2*r-o;return new Zt(yp(e>=240?e-240:e+120,n,o),yp(e,n,o),yp(e<120?e+240:e-120,n,o),this.opacity)},clamp(){return new Ce(g1(this.h),El(this.s),El(this.l),Al(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Al(this.opacity);return`${e===1?"hsl(":"hsla("}${g1(this.h)}, ${El(this.s)*100}%, ${El(this.l)*100}%${e===1?")":`, ${e})`}`}}));function g1(e){return e=(e||0)%360,e<0?e+360:e}function El(e){return Math.max(0,Math.min(1,e||0))}function yp(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}function wp(e,t,r,o,n){var s=e*e,i=s*e;return((1-3*e+3*s-i)*t+(4-6*s+3*i)*r+(1+3*e+3*s-3*i)*o+i*n)/6}function w1(e){var t=e.length-1;return function(r){var o=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),n=e[o],s=e[o+1],i=o>0?e[o-1]:2*n-s,a=o<t-1?e[o+2]:2*s-n;return wp((r-o/t)*t,i,n,s,a)}}function b1(e){var t=e.length;return function(r){var o=Math.floor(((r%=1)<0?++r:r)*t),n=e[(o+t-1)%t],s=e[o%t],i=e[(o+1)%t],a=e[(o+2)%t];return wp((r-o/t)*t,n,s,i,a)}}var Rl=e=>()=>e;function v1(e,t){return function(r){return e+r*t}}function yF(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(o){return Math.pow(e+o*t,r)}}function C1(e,t){var r=t-e;return r?v1(e,r>180||r<-180?r-360*Math.round(r/360):r):Rl(isNaN(e)?t:e)}function S1(e){return(e=+e)==1?Nl:function(t,r){return r-t?yF(t,r,e):Rl(isNaN(t)?r:t)}}function Nl(e,t){var r=t-e;return r?v1(e,r):Rl(isNaN(e)?t:e)}var kl=function e(t){var r=S1(t);function o(n,s){var i=r((n=tn(n)).r,(s=tn(s)).r),a=r(n.g,s.g),l=r(n.b,s.b),u=Nl(n.opacity,s.opacity);return function(c){return n.r=i(c),n.g=a(c),n.b=l(c),n.opacity=u(c),n+""}}return o.gamma=e,o}(1);function I1(e){return function(t){var r=t.length,o=new Array(r),n=new Array(r),s=new Array(r),i,a;for(i=0;i<r;++i)a=tn(t[i]),o[i]=a.r||0,n[i]=a.g||0,s[i]=a.b||0;return o=e(o),n=e(n),s=e(s),a.opacity=1,function(l){return a.r=o(l),a.g=n(l),a.b=s(l),a+""}}}var wF=I1(w1),bF=I1(b1);function Wt(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}var vp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,bp=new RegExp(vp.source,"g");function vF(e){return function(){return e}}function CF(e){return function(t){return e(t)+""}}function Cp(e,t){var r=vp.lastIndex=bp.lastIndex=0,o,n,s,i=-1,a=[],l=[];for(e=e+"",t=t+"";(o=vp.exec(e))&&(n=bp.exec(t));)(s=n.index)>r&&(s=t.slice(r,s),a[i]?a[i]+=s:a[++i]=s),(o=o[0])===(n=n[0])?a[i]?a[i]+=n:a[++i]=n:(a[++i]=null,l.push({i,x:Wt(o,n)})),r=bp.lastIndex;return r<t.length&&(s=t.slice(r),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?CF(l[0].x):vF(t):(t=l.length,function(u){for(var c=0,p;c<t;++c)a[(p=l[c]).i]=p.x(u);return a.join("")})}function Sp(e,t){var r=C1(+e,+t);return function(o){var n=r(o);return n-360*Math.floor(n/360)}}var $1=180/Math.PI,Fl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ip(e,t,r,o,n,s){var i,a,l;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(l=e*r+t*o)&&(r-=e*l,o-=t*l),(a=Math.sqrt(r*r+o*o))&&(r/=a,o/=a,l/=a),e*o<t*r&&(e=-e,t=-t,l=-l,i=-i),{translateX:n,translateY:s,rotate:Math.atan2(t,e)*$1,skewX:Math.atan(l)*$1,scaleX:i,scaleY:a}}var Dl;function T1(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Fl:Ip(t.a,t.b,t.c,t.d,t.e,t.f)}function E1(e){return e==null?Fl:(Dl||(Dl=document.createElementNS("http://www.w3.org/2000/svg","g")),Dl.setAttribute("transform",e),(e=Dl.transform.baseVal.consolidate())?(e=e.matrix,Ip(e.a,e.b,e.c,e.d,e.e,e.f)):Fl)}function _1(e,t,r,o){function n(u){return u.length?u.pop()+" ":""}function s(u,c,p,f,d,h){if(u!==p||c!==f){var x=d.push("translate(",null,t,null,r);h.push({i:x-4,x:Wt(u,p)},{i:x-2,x:Wt(c,f)})}else(p||f)&&d.push("translate("+p+t+f+r)}function i(u,c,p,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:p.push(n(p)+"rotate(",null,o)-2,x:Wt(u,c)})):c&&p.push(n(p)+"rotate("+c+o)}function a(u,c,p,f){u!==c?f.push({i:p.push(n(p)+"skewX(",null,o)-2,x:Wt(u,c)}):c&&p.push(n(p)+"skewX("+c+o)}function l(u,c,p,f,d,h){if(u!==p||c!==f){var x=d.push(n(d)+"scale(",null,",",null,")");h.push({i:x-4,x:Wt(u,p)},{i:x-2,x:Wt(c,f)})}else(p!==1||f!==1)&&d.push(n(d)+"scale("+p+","+f+")")}return function(u,c){var p=[],f=[];return u=e(u),c=e(c),s(u.translateX,u.translateY,c.translateX,c.translateY,p,f),i(u.rotate,c.rotate,p,f),a(u.skewX,c.skewX,p,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,p,f),u=c=null,function(d){for(var h=-1,x=f.length,g;++h<x;)p[(g=f[h]).i]=g.x(d);return p.join("")}}}var $p=_1(T1,"px, ","px)","deg)"),Tp=_1(E1,", ",")",")");var en=0,ts=0,Jn=0,R1=1e3,Ol,es,Pl=0,to=0,Ml=0,rs=typeof performance=="object"&&performance.now?performance:Date,N1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ns(){return to||(N1(SF),to=rs.now()+Ml)}function SF(){to=0}function os(){this._call=this._time=this._next=null}os.prototype=rn.prototype={constructor:os,restart:function(e,t,r){if(typeof e!="function")throw new TypeError("callback is not a function");r=(r==null?ns():+r)+(t==null?0:+t),!this._next&&es!==this&&(es?es._next=this:Ol=this,es=this),this._call=e,this._time=r,Ep()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ep())}};function rn(e,t,r){var o=new os;return o.restart(e,t,r),o}function k1(){ns(),++en;for(var e=Ol,t;e;)(t=to-e._time)>=0&&e._call.call(void 0,t),e=e._next;--en}function A1(){to=(Pl=rs.now())+Ml,en=ts=0;try{k1()}finally{en=0,$F(),to=0}}function IF(){var e=rs.now(),t=e-Pl;t>R1&&(Ml-=t,Pl=e)}function $F(){for(var e,t=Ol,r,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(r=t._next,t._next=null,t=e?e._next=r:Ol=r);es=e,Ep(o)}function Ep(e){if(!en){ts&&(ts=clearTimeout(ts));var t=e-to;t>24?(e<1/0&&(ts=setTimeout(A1,e-rs.now()-Ml)),Jn&&(Jn=clearInterval(Jn))):(Jn||(Pl=rs.now(),Jn=setInterval(IF,R1)),en=1,N1(A1))}}function Ll(e,t,r){var o=new os;return t=t==null?0:+t,o.restart(n=>{o.stop(),e(n+t)},t,r),o}var TF=jr("start","end","cancel","interrupt"),EF=[],O1=0,F1=1,Ul=2,Bl=3,D1=4,Vl=5,ss=6;function yr(e,t,r,o,n,s){var i=e.__transition;if(!i)e.__transition={};else if(r in i)return;_F(e,r,{name:t,index:o,group:n,on:TF,tween:EF,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:O1})}function is(e,t){var r=Ct(e,t);if(r.state>O1)throw new Error("too late; already scheduled");return r}function At(e,t){var r=Ct(e,t);if(r.state>Bl)throw new Error("too late; already running");return r}function Ct(e,t){var r=e.__transition;if(!r||!(r=r[t]))throw new Error("transition not found");return r}function _F(e,t,r){var o=e.__transition,n;o[t]=r,r.timer=rn(s,0,r.time);function s(u){r.state=F1,r.timer.restart(i,r.delay,r.time),r.delay<=u&&i(u-r.delay)}function i(u){var c,p,f,d;if(r.state!==F1)return l();for(c in o)if(d=o[c],d.name===r.name){if(d.state===Bl)return Ll(i);d.state===D1?(d.state=ss,d.timer.stop(),d.on.call("interrupt",e,e.__data__,d.index,d.group),delete o[c]):+c<t&&(d.state=ss,d.timer.stop(),d.on.call("cancel",e,e.__data__,d.index,d.group),delete o[c])}if(Ll(function(){r.state===Bl&&(r.state=D1,r.timer.restart(a,r.delay,r.time),a(u))}),r.state=Ul,r.on.call("start",e,e.__data__,r.index,r.group),r.state===Ul){for(r.state=Bl,n=new Array(f=r.tween.length),c=0,p=-1;c<f;++c)(d=r.tween[c].value.call(e,e.__data__,r.index,r.group))&&(n[++p]=d);n.length=p+1}}function a(u){for(var c=u<r.duration?r.ease.call(null,u/r.duration):(r.timer.restart(l),r.state=Vl,1),p=-1,f=n.length;++p<f;)n[p].call(e,c);r.state===Vl&&(r.on.call("end",e,e.__data__,r.index,r.group),l())}function l(){r.state=ss,r.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function Wl(e,t){var r=e.__transition,o,n,s=!0,i;if(r){t=t==null?null:t+"";for(i in r){if((o=r[i]).name!==t){s=!1;continue}n=o.state>Ul&&o.state<Vl,o.state=ss,o.timer.stop(),o.on.call(n?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete r[i]}s&&delete e.__transition}}function P1(e){return this.each(function(){Wl(this,e)})}function AF(e,t){var r,o;return function(){var n=At(this,e),s=n.tween;if(s!==r){o=r=s;for(var i=0,a=o.length;i<a;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}n.tween=o}}function RF(e,t,r){var o,n;if(typeof r!="function")throw new Error;return function(){var s=At(this,e),i=s.tween;if(i!==o){n=(o=i).slice();for(var a={name:t,value:r},l=0,u=n.length;l<u;++l)if(n[l].name===t){n[l]=a;break}l===u&&n.push(a)}s.tween=n}}function M1(e,t){var r=this._id;if(e+="",arguments.length<2){for(var o=Ct(this.node(),r).tween,n=0,s=o.length,i;n<s;++n)if((i=o[n]).name===e)return i.value;return null}return this.each((t==null?AF:RF)(r,e,t))}function on(e,t,r){var o=e._id;return e.each(function(){var n=At(this,o);(n.value||(n.value={}))[t]=r.apply(this,arguments)}),function(n){return Ct(n,o).value[t]}}function zl(e,t){var r;return(typeof t=="number"?Wt:t instanceof xr?kl:(r=xr(t))?(t=r,kl):Cp)(e,t)}function NF(e){return function(){this.removeAttribute(e)}}function kF(e){return function(){this.removeAttributeNS(e.space,e.local)}}function FF(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttribute(e);return i===n?null:i===o?s:s=t(o=i,r)}}function DF(e,t,r){var o,n=r+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===n?null:i===o?s:s=t(o=i,r)}}function OF(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttribute(e):(i=this.getAttribute(e),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function PF(e,t,r){var o,n,s;return function(){var i,a=r(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),l=a+"",i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a)))}}function L1(e,t){var r=Xe(e),o=r==="transform"?Tp:zl;return this.attrTween(e,typeof t=="function"?(r.local?PF:OF)(r,o,on(this,"attr."+e,t)):t==null?(r.local?kF:NF)(r):(r.local?DF:FF)(r,o,t))}function MF(e,t){return function(r){this.setAttribute(e,t.call(this,r))}}function LF(e,t){return function(r){this.setAttributeNS(e.space,e.local,t.call(this,r))}}function BF(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&LF(e,s)),r}return n._value=t,n}function UF(e,t){var r,o;function n(){var s=t.apply(this,arguments);return s!==o&&(r=(o=s)&&MF(e,s)),r}return n._value=t,n}function B1(e,t){var r="attr."+e;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;var o=Xe(e);return this.tween(r,(o.local?BF:UF)(o,t))}function VF(e,t){return function(){is(this,e).delay=+t.apply(this,arguments)}}function WF(e,t){return t=+t,function(){is(this,e).delay=t}}function U1(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?VF:WF)(t,e)):Ct(this.node(),t).delay}function zF(e,t){return function(){At(this,e).duration=+t.apply(this,arguments)}}function GF(e,t){return t=+t,function(){At(this,e).duration=t}}function V1(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?zF:GF)(t,e)):Ct(this.node(),t).duration}function HF(e,t){if(typeof t!="function")throw new Error;return function(){At(this,e).ease=t}}function W1(e){var t=this._id;return arguments.length?this.each(HF(t,e)):Ct(this.node(),t).ease}function qF(e,t){return function(){var r=t.apply(this,arguments);if(typeof r!="function")throw new Error;At(this,e).ease=r}}function z1(e){if(typeof e!="function")throw new Error;return this.each(qF(this._id,e))}function G1(e){typeof e!="function"&&(e=qn(e));for(var t=this._groups,r=t.length,o=new Array(r),n=0;n<r;++n)for(var s=t[n],i=s.length,a=o[n]=[],l,u=0;u<i;++u)(l=s[u])&&e.call(l,l.__data__,u,s)&&a.push(l);return new zt(o,this._parents,this._name,this._id)}function H1(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,r=e._groups,o=t.length,n=r.length,s=Math.min(o,n),i=new Array(o),a=0;a<s;++a)for(var l=t[a],u=r[a],c=l.length,p=i[a]=new Array(c),f,d=0;d<c;++d)(f=l[d]||u[d])&&(p[d]=f);for(;a<o;++a)i[a]=t[a];return new zt(i,this._parents,this._name,this._id)}function KF(e){return(e+"").trim().split(/^|\s+/).every(function(t){var r=t.indexOf(".");return r>=0&&(t=t.slice(0,r)),!t||t==="start"})}function XF(e,t,r){var o,n,s=KF(t)?is:At;return function(){var i=s(this,e),a=i.on;a!==o&&(n=(o=a).copy()).on(t,r),i.on=n}}function q1(e,t){var r=this._id;return arguments.length<2?Ct(this.node(),r).on.on(e):this.each(XF(r,e,t))}function jF(e){return function(){var t=this.parentNode;for(var r in this.__transition)if(+r!==e)return;t&&t.removeChild(this)}}function K1(){return this.on("end.remove",jF(this._id))}function X1(e){var t=this._name,r=this._id;typeof e!="function"&&(e=Yr(e));for(var o=this._groups,n=o.length,s=new Array(n),i=0;i<n;++i)for(var a=o[i],l=a.length,u=s[i]=new Array(l),c,p,f=0;f<l;++f)(c=a[f])&&(p=e.call(c,c.__data__,f,a))&&("__data__"in c&&(p.__data__=c.__data__),u[f]=p,yr(u[f],t,r,f,u,Ct(c,r)));return new zt(s,this._parents,t,r)}function j1(e){var t=this._name,r=this._id;typeof e!="function"&&(e=Hn(e));for(var o=this._groups,n=o.length,s=[],i=[],a=0;a<n;++a)for(var l=o[a],u=l.length,c,p=0;p<u;++p)if(c=l[p]){for(var f=e.call(c,c.__data__,p,l),d,h=Ct(c,r),x=0,g=f.length;x<g;++x)(d=f[x])&&yr(d,t,r,x,f,h);s.push(f),i.push(c)}return new zt(s,i,t,r)}var YF=je.prototype.constructor;function Y1(){return new YF(this._groups,this._parents)}function QF(e,t){var r,o,n;return function(){var s=mr(this,e),i=(this.style.removeProperty(e),mr(this,e));return s===i?null:s===r&&i===o?n:n=t(r=s,o=i)}}function Q1(e){return function(){this.style.removeProperty(e)}}function ZF(e,t,r){var o,n=r+"",s;return function(){var i=mr(this,e);return i===n?null:i===o?s:s=t(o=i,r)}}function JF(e,t,r){var o,n,s;return function(){var i=mr(this,e),a=r(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),mr(this,e))),i===l?null:i===o&&l===n?s:(n=l,s=t(o=i,a))}}function tD(e,t){var r,o,n,s="style."+t,i="end."+s,a;return function(){var l=At(this,e),u=l.on,c=l.value[s]==null?a||(a=Q1(t)):void 0;(u!==r||n!==c)&&(o=(r=u).copy()).on(i,n=c),l.on=o}}function Z1(e,t,r){var o=(e+="")=="transform"?$p:zl;return t==null?this.styleTween(e,QF(e,o)).on("end.style."+e,Q1(e)):typeof t=="function"?this.styleTween(e,JF(e,o,on(this,"style."+e,t))).each(tD(this._id,e)):this.styleTween(e,ZF(e,o,t),r).on("end.style."+e,null)}function eD(e,t,r){return function(o){this.style.setProperty(e,t.call(this,o),r)}}function rD(e,t,r){var o,n;function s(){var i=t.apply(this,arguments);return i!==n&&(o=(n=i)&&eD(e,i,r)),o}return s._value=t,s}function J1(e,t,r){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,rD(e,t,r??""))}function oD(e){return function(){this.textContent=e}}function nD(e){return function(){var t=e(this);this.textContent=t??""}}function tC(e){return this.tween("text",typeof e=="function"?nD(on(this,"text",e)):oD(e==null?"":e+""))}function sD(e){return function(t){this.textContent=e.call(this,t)}}function iD(e){var t,r;function o(){var n=e.apply(this,arguments);return n!==r&&(t=(r=n)&&sD(n)),t}return o._value=e,o}function eC(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,iD(e))}function rC(){for(var e=this._name,t=this._id,r=Gl(),o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,u=0;u<a;++u)if(l=i[u]){var c=Ct(l,t);yr(l,e,r,u,i,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new zt(o,this._parents,e,r)}function oC(){var e,t,r=this,o=r._id,n=r.size();return new Promise(function(s,i){var a={value:i},l={value:function(){--n===0&&s()}};r.each(function(){var u=At(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),u.on=t}),n===0&&s()})}var aD=0;function zt(e,t,r,o){this._groups=e,this._parents=t,this._name=r,this._id=o}function nC(e){return je().transition(e)}function Gl(){return++aD}var Qe=je.prototype;zt.prototype=nC.prototype={constructor:zt,select:X1,selectAll:j1,selectChild:Qe.selectChild,selectChildren:Qe.selectChildren,filter:G1,merge:H1,selection:Y1,transition:rC,call:Qe.call,nodes:Qe.nodes,node:Qe.node,size:Qe.size,empty:Qe.empty,each:Qe.each,on:q1,attr:L1,attrTween:B1,style:Z1,styleTween:J1,text:tC,textTween:eC,remove:K1,tween:M1,delay:U1,duration:V1,ease:W1,easeVarying:z1,end:oC,[Symbol.iterator]:Qe[Symbol.iterator]};function Hl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var _p=3,Ap=function e(t){t=+t;function r(o){return Math.pow(o,t)}return r.exponent=e,r}(_p),Rp=function e(t){t=+t;function r(o){return 1-Math.pow(1-o,t)}return r.exponent=e,r}(_p),sC=function e(t){t=+t;function r(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return r.exponent=e,r}(_p);var lD={time:null,delay:0,duration:250,ease:Hl};function uD(e,t){for(var r;!(r=e.__transition)||!(r=r[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return r}function iC(e){var t,r;e instanceof zt?(t=e._id,e=e._name):(t=Gl(),(r=lD).time=ns(),e=e==null?null:e+"");for(var o=this._groups,n=o.length,s=0;s<n;++s)for(var i=o[s],a=i.length,l,u=0;u<a;++u)(l=i[u])&&yr(l,e,t,u,i,r||uD(l,t));return new zt(o,this._parents,e,t)}je.prototype.interrupt=P1;je.prototype.transition=iC;var{abs:wht,max:bht,min:vht}=Math;function aC(e){return[+e[0],+e[1]]}function cD(e){return[aC(e[0]),aC(e[1])]}var Cht={name:"x",handles:["w","e"].map(Np),input:function(e,t){return e==null?null:[[+e[0],t[0][1]],[+e[1],t[1][1]]]},output:function(e){return e&&[e[0][0],e[1][0]]}},Sht={name:"y",handles:["n","s"].map(Np),input:function(e,t){return e==null?null:[[t[0][0],+e[0]],[t[1][0],+e[1]]]},output:function(e){return e&&[e[0][1],e[1][1]]}},Iht={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Np),input:function(e){return e==null?null:cD(e)},output:function(e){return e}};function Np(e){return{type:e}}function lC(e){let t=+this._x.call(null,e),r=+this._y.call(null,e);return uC(this.cover(t,r),t,r,e)}function uC(e,t,r,o){if(isNaN(t)||isNaN(r))return e;var n,s=e._root,i={data:o},a=e._x0,l=e._y0,u=e._x1,c=e._y1,p,f,d,h,x,g,m,y;if(!s)return e._root=i,e;for(;s.length;)if((x=t>=(p=(a+u)/2))?a=p:u=p,(g=r>=(f=(l+c)/2))?l=f:c=f,n=s,!(s=s[m=g<<1|x]))return n[m]=i,e;if(d=+e._x.call(null,s.data),h=+e._y.call(null,s.data),t===d&&r===h)return i.next=s,n?n[m]=i:e._root=i,e;do n=n?n[m]=new Array(4):e._root=new Array(4),(x=t>=(p=(a+u)/2))?a=p:u=p,(g=r>=(f=(l+c)/2))?l=f:c=f;while((m=g<<1|x)===(y=(h>=f)<<1|d>=p));return n[y]=s,n[m]=i,e}function cC(e){var t,r,o=e.length,n,s,i=new Array(o),a=new Array(o),l=1/0,u=1/0,c=-1/0,p=-1/0;for(r=0;r<o;++r)isNaN(n=+this._x.call(null,t=e[r]))||isNaN(s=+this._y.call(null,t))||(i[r]=n,a[r]=s,n<l&&(l=n),n>c&&(c=n),s<u&&(u=s),s>p&&(p=s));if(l>c||u>p)return this;for(this.cover(l,u).cover(c,p),r=0;r<o;++r)uC(this,i[r],a[r],e[r]);return this}function pC(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,o=this._y0,n=this._x1,s=this._y1;if(isNaN(r))n=(r=Math.floor(e))+1,s=(o=Math.floor(t))+1;else{for(var i=n-r||1,a=this._root,l,u;r>e||e>=n||o>t||t>=s;)switch(u=(t<o)<<1|e<r,l=new Array(4),l[u]=a,a=l,i*=2,u){case 0:n=r+i,s=o+i;break;case 1:r=n-i,s=o+i;break;case 2:n=r+i,o=s-i;break;case 3:r=n-i,o=s-i;break}this._root&&this._root.length&&(this._root=a)}return this._x0=r,this._y0=o,this._x1=n,this._y1=s,this}function fC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function dC(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Tt(e,t,r,o,n){this.node=e,this.x0=t,this.y0=r,this.x1=o,this.y1=n}function hC(e,t,r){var o,n=this._x0,s=this._y0,i,a,l,u,c=this._x1,p=this._y1,f=[],d=this._root,h,x;for(d&&f.push(new Tt(d,n,s,c,p)),r==null?r=1/0:(n=e-r,s=t-r,c=e+r,p=t+r,r*=r);h=f.pop();)if(!(!(d=h.node)||(i=h.x0)>c||(a=h.y0)>p||(l=h.x1)<n||(u=h.y1)<s))if(d.length){var g=(i+l)/2,m=(a+u)/2;f.push(new Tt(d[3],g,m,l,u),new Tt(d[2],i,m,g,u),new Tt(d[1],g,a,l,m),new Tt(d[0],i,a,g,m)),(x=(t>=m)<<1|e>=g)&&(h=f[f.length-1],f[f.length-1]=f[f.length-1-x],f[f.length-1-x]=h)}else{var y=e-+this._x.call(null,d.data),C=t-+this._y.call(null,d.data),b=y*y+C*C;if(b<r){var v=Math.sqrt(r=b);n=e-v,s=t-v,c=e+v,p=t+v,o=d.data}}return o}function mC(e){if(isNaN(c=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._x1,u=this._y1,c,p,f,d,h,x,g,m;if(!r)return this;if(r.length)for(;;){if((h=c>=(f=(i+l)/2))?i=f:l=f,(x=p>=(d=(a+u)/2))?a=d:u=d,t=r,!(r=r[g=x<<1|h]))return this;if(!r.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(o=t,m=g)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[g]=s:delete t[g],(r=t[0]||t[1]||t[2]||t[3])&&r===(t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[m]=r:this._root=r),this):(this._root=s,this)}function gC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function xC(){return this._root}function yC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function wC(e){var t=[],r,o=this._root,n,s,i,a,l;for(o&&t.push(new Tt(o,this._x0,this._y0,this._x1,this._y1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.x1,l=r.y1)&&o.length){var u=(s+a)/2,c=(i+l)/2;(n=o[3])&&t.push(new Tt(n,u,c,a,l)),(n=o[2])&&t.push(new Tt(n,s,c,u,l)),(n=o[1])&&t.push(new Tt(n,u,i,a,c)),(n=o[0])&&t.push(new Tt(n,s,i,u,c))}return this}function bC(e){var t=[],r=[],o;for(this._root&&t.push(new Tt(this._root,this._x0,this._y0,this._x1,this._y1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.x1,u=o.y1,c=(i+l)/2,p=(a+u)/2;(s=n[0])&&t.push(new Tt(s,i,a,c,p)),(s=n[1])&&t.push(new Tt(s,c,a,l,p)),(s=n[2])&&t.push(new Tt(s,i,p,c,u)),(s=n[3])&&t.push(new Tt(s,c,p,l,u))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.x1,o.y1);return this}function vC(e){return e[0]}function CC(e){return arguments.length?(this._x=e,this):this._x}function SC(e){return e[1]}function IC(e){return arguments.length?(this._y=e,this):this._y}function as(e,t,r){var o=new kp(t??vC,r??SC,NaN,NaN,NaN,NaN);return e==null?o:o.addAll(e)}function kp(e,t,r,o,n,s){this._x=e,this._y=t,this._x0=r,this._y0=o,this._x1=n,this._y1=s,this._root=void 0}function $C(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var Gt=as.prototype=kp.prototype;Gt.copy=function(){var e=new kp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=$C(t),e;for(r=[{source:t,target:e._root=new Array(4)}];t=r.pop();)for(var n=0;n<4;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(4)}):t.target[n]=$C(o));return e};Gt.add=lC;Gt.addAll=cC;Gt.cover=pC;Gt.data=fC;Gt.extent=dC;Gt.find=hC;Gt.remove=mC;Gt.removeAll=gC;Gt.root=xC;Gt.size=yC;Gt.visit=wC;Gt.visitAfter=bC;Gt.x=CC;Gt.y=IC;function wr(e,t,r){this.k=e,this.x=t,this.y=r}wr.prototype={constructor:wr,scale:function(e){return e===1?this:new wr(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new wr(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Fp=new wr(1,0,0);Dp.prototype=wr.prototype;function Dp(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Fp;return e.__zoom}function Op(e,t,r){var o,n=1;e==null&&(e=0),t==null&&(t=0),r==null&&(r=0);function s(){var i,a=o.length,l,u=0,c=0,p=0;for(i=0;i<a;++i)l=o[i],u+=l.x||0,c+=l.y||0,p+=l.z||0;for(u=(u/a-e)*n,c=(c/a-t)*n,p=(p/a-r)*n,i=0;i<a;++i)l=o[i],u&&(l.x-=u),c&&(l.y-=c),p&&(l.z-=p)}return s.initialize=function(i){o=i},s.x=function(i){return arguments.length?(e=+i,s):e},s.y=function(i){return arguments.length?(t=+i,s):t},s.z=function(i){return arguments.length?(r=+i,s):r},s.strength=function(i){return arguments.length?(n=+i,s):n},s}function TC(e){let t=+this._x.call(null,e);return EC(this.cover(t),t,e)}function EC(e,t,r){if(isNaN(t))return e;var o,n=e._root,s={data:r},i=e._x0,a=e._x1,l,u,c,p,f;if(!n)return e._root=s,e;for(;n.length;)if((c=t>=(l=(i+a)/2))?i=l:a=l,o=n,!(n=n[p=+c]))return o[p]=s,e;if(u=+e._x.call(null,n.data),t===u)return s.next=n,o?o[p]=s:e._root=s,e;do o=o?o[p]=new Array(2):e._root=new Array(2),(c=t>=(l=(i+a)/2))?i=l:a=l;while((p=+c)==(f=+(u>=l)));return o[f]=n,o[p]=s,e}function _C(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=1/0,n=-1/0;for(let s=0,i;s<t;++s)isNaN(i=+this._x.call(null,e[s]))||(r[s]=i,i<o&&(o=i),i>n&&(n=i));if(o>n)return this;this.cover(o).cover(n);for(let s=0;s<t;++s)EC(this,r[s],e[s]);return this}function AC(e){if(isNaN(e=+e))return this;var t=this._x0,r=this._x1;if(isNaN(t))r=(t=Math.floor(e))+1;else{for(var o=r-t||1,n=this._root,s,i;t>e||e>=r;)switch(i=+(e<t),s=new Array(2),s[i]=n,n=s,o*=2,i){case 0:r=t+o;break;case 1:t=r-o;break}this._root&&this._root.length&&(this._root=n)}return this._x0=t,this._x1=r,this}function RC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function NC(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function de(e,t,r){this.node=e,this.x0=t,this.x1=r}function kC(e,t){var r,o=this._x0,n,s,i=this._x1,a=[],l=this._root,u,c;for(l&&a.push(new de(l,o,i)),t==null?t=1/0:(o=e-t,i=e+t);u=a.pop();)if(!(!(l=u.node)||(n=u.x0)>i||(s=u.x1)<o))if(l.length){var p=(n+s)/2;a.push(new de(l[1],p,s),new de(l[0],n,p)),(c=+(e>=p))&&(u=a[a.length-1],a[a.length-1]=a[a.length-1-c],a[a.length-1-c]=u)}else{var f=Math.abs(e-+this._x.call(null,l.data));f<t&&(t=f,o=e-f,i=e+f,r=l.data)}return r}function FC(e){if(isNaN(l=+this._x.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._x1,l,u,c,p,f;if(!r)return this;if(r.length)for(;;){if((c=l>=(u=(i+a)/2))?i=u:a=u,t=r,!(r=r[p=+c]))return this;if(!r.length)break;t[p+1&1]&&(o=t,f=p)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[p]=s:delete t[p],(r=t[0]||t[1])&&r===(t[1]||t[0])&&!r.length&&(o?o[f]=r:this._root=r),this):(this._root=s,this)}function DC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function OC(){return this._root}function PC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function MC(e){var t=[],r,o=this._root,n,s,i;for(o&&t.push(new de(o,this._x0,this._x1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.x1)&&o.length){var a=(s+i)/2;(n=o[1])&&t.push(new de(n,a,i)),(n=o[0])&&t.push(new de(n,s,a))}return this}function LC(e){var t=[],r=[],o;for(this._root&&t.push(new de(this._root,this._x0,this._x1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.x1,l=(i+a)/2;(s=n[0])&&t.push(new de(s,i,l)),(s=n[1])&&t.push(new de(s,l,a))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.x1);return this}function BC(e){return e[0]}function UC(e){return arguments.length?(this._x=e,this):this._x}function ls(e,t){var r=new Pp(t??BC,NaN,NaN);return e==null?r:r.addAll(e)}function Pp(e,t,r){this._x=e,this._x0=t,this._x1=r,this._root=void 0}function VC(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var Jt=ls.prototype=Pp.prototype;Jt.copy=function(){var e=new Pp(this._x,this._x0,this._x1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=VC(t),e;for(r=[{source:t,target:e._root=new Array(2)}];t=r.pop();)for(var n=0;n<2;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(2)}):t.target[n]=VC(o));return e};Jt.add=TC;Jt.addAll=_C;Jt.cover=AC;Jt.data=RC;Jt.extent=NC;Jt.find=kC;Jt.remove=FC;Jt.removeAll=DC;Jt.root=OC;Jt.size=PC;Jt.visit=MC;Jt.visitAfter=LC;Jt.x=UC;function WC(e){let t=+this._x.call(null,e),r=+this._y.call(null,e),o=+this._z.call(null,e);return zC(this.cover(t,r,o),t,r,o,e)}function zC(e,t,r,o,n){if(isNaN(t)||isNaN(r)||isNaN(o))return e;var s,i=e._root,a={data:n},l=e._x0,u=e._y0,c=e._z0,p=e._x1,f=e._y1,d=e._z1,h,x,g,m,y,C,b,v,I,T,E;if(!i)return e._root=a,e;for(;i.length;)if((b=t>=(h=(l+p)/2))?l=h:p=h,(v=r>=(x=(u+f)/2))?u=x:f=x,(I=o>=(g=(c+d)/2))?c=g:d=g,s=i,!(i=i[T=I<<2|v<<1|b]))return s[T]=a,e;if(m=+e._x.call(null,i.data),y=+e._y.call(null,i.data),C=+e._z.call(null,i.data),t===m&&r===y&&o===C)return a.next=i,s?s[T]=a:e._root=a,e;do s=s?s[T]=new Array(8):e._root=new Array(8),(b=t>=(h=(l+p)/2))?l=h:p=h,(v=r>=(x=(u+f)/2))?u=x:f=x,(I=o>=(g=(c+d)/2))?c=g:d=g;while((T=I<<2|v<<1|b)===(E=(C>=g)<<2|(y>=x)<<1|m>=h));return s[E]=i,s[T]=a,e}function GC(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,r=new Float64Array(t),o=new Float64Array(t),n=new Float64Array(t),s=1/0,i=1/0,a=1/0,l=-1/0,u=-1/0,c=-1/0;for(let p=0,f,d,h,x;p<t;++p)isNaN(d=+this._x.call(null,f=e[p]))||isNaN(h=+this._y.call(null,f))||isNaN(x=+this._z.call(null,f))||(r[p]=d,o[p]=h,n[p]=x,d<s&&(s=d),d>l&&(l=d),h<i&&(i=h),h>u&&(u=h),x<a&&(a=x),x>c&&(c=x));if(s>l||i>u||a>c)return this;this.cover(s,i,a).cover(l,u,c);for(let p=0;p<t;++p)zC(this,r[p],o[p],n[p],e[p]);return this}function HC(e,t,r){if(isNaN(e=+e)||isNaN(t=+t)||isNaN(r=+r))return this;var o=this._x0,n=this._y0,s=this._z0,i=this._x1,a=this._y1,l=this._z1;if(isNaN(o))i=(o=Math.floor(e))+1,a=(n=Math.floor(t))+1,l=(s=Math.floor(r))+1;else{for(var u=i-o||1,c=this._root,p,f;o>e||e>=i||n>t||t>=a||s>r||r>=l;)switch(f=(r<s)<<2|(t<n)<<1|e<o,p=new Array(8),p[f]=c,c=p,u*=2,f){case 0:i=o+u,a=n+u,l=s+u;break;case 1:o=i-u,a=n+u,l=s+u;break;case 2:i=o+u,n=a-u,l=s+u;break;case 3:o=i-u,n=a-u,l=s+u;break;case 4:i=o+u,a=n+u,s=l-u;break;case 5:o=i-u,a=n+u,s=l-u;break;case 6:i=o+u,n=a-u,s=l-u;break;case 7:o=i-u,n=a-u,s=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this}function qC(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function KC(e){return arguments.length?this.cover(+e[0][0],+e[0][1],+e[0][2]).cover(+e[1][0],+e[1][1],+e[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function j(e,t,r,o,n,s,i){this.node=e,this.x0=t,this.y0=r,this.z0=o,this.x1=n,this.y1=s,this.z1=i}function XC(e,t,r,o){var n,s=this._x0,i=this._y0,a=this._z0,l,u,c,p,f,d,h=this._x1,x=this._y1,g=this._z1,m=[],y=this._root,C,b;for(y&&m.push(new j(y,s,i,a,h,x,g)),o==null?o=1/0:(s=e-o,i=t-o,a=r-o,h=e+o,x=t+o,g=r+o,o*=o);C=m.pop();)if(!(!(y=C.node)||(l=C.x0)>h||(u=C.y0)>x||(c=C.z0)>g||(p=C.x1)<s||(f=C.y1)<i||(d=C.z1)<a))if(y.length){var v=(l+p)/2,I=(u+f)/2,T=(c+d)/2;m.push(new j(y[7],v,I,T,p,f,d),new j(y[6],l,I,T,v,f,d),new j(y[5],v,u,T,p,I,d),new j(y[4],l,u,T,v,I,d),new j(y[3],v,I,c,p,f,T),new j(y[2],l,I,c,v,f,T),new j(y[1],v,u,c,p,I,T),new j(y[0],l,u,c,v,I,T)),(b=(r>=T)<<2|(t>=I)<<1|e>=v)&&(C=m[m.length-1],m[m.length-1]=m[m.length-1-b],m[m.length-1-b]=C)}else{var E=e-+this._x.call(null,y.data),R=t-+this._y.call(null,y.data),N=r-+this._z.call(null,y.data),M=E*E+R*R+N*N;if(M<o){var L=Math.sqrt(o=M);s=e-L,i=t-L,a=r-L,h=e+L,x=t+L,g=r+L,n=y.data}}return n}function jC(e){if(isNaN(f=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e))||isNaN(h=+this._z.call(null,e)))return this;var t,r=this._root,o,n,s,i=this._x0,a=this._y0,l=this._z0,u=this._x1,c=this._y1,p=this._z1,f,d,h,x,g,m,y,C,b,v,I;if(!r)return this;if(r.length)for(;;){if((y=f>=(x=(i+u)/2))?i=x:u=x,(C=d>=(g=(a+c)/2))?a=g:c=g,(b=h>=(m=(l+p)/2))?l=m:p=m,t=r,!(r=r[v=b<<2|C<<1|y]))return this;if(!r.length)break;(t[v+1&7]||t[v+2&7]||t[v+3&7]||t[v+4&7]||t[v+5&7]||t[v+6&7]||t[v+7&7])&&(o=t,I=v)}for(;r.data!==e;)if(n=r,!(r=r.next))return this;return(s=r.next)&&delete r.next,n?(s?n.next=s:delete n.next,this):t?(s?t[v]=s:delete t[v],(r=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&r===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!r.length&&(o?o[I]=r:this._root=r),this):(this._root=s,this)}function YC(e){for(var t=0,r=e.length;t<r;++t)this.remove(e[t]);return this}function QC(){return this._root}function ZC(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function JC(e){var t=[],r,o=this._root,n,s,i,a,l,u,c;for(o&&t.push(new j(o,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=t.pop();)if(!e(o=r.node,s=r.x0,i=r.y0,a=r.z0,l=r.x1,u=r.y1,c=r.z1)&&o.length){var p=(s+l)/2,f=(i+u)/2,d=(a+c)/2;(n=o[7])&&t.push(new j(n,p,f,d,l,u,c)),(n=o[6])&&t.push(new j(n,s,f,d,p,u,c)),(n=o[5])&&t.push(new j(n,p,i,d,l,f,c)),(n=o[4])&&t.push(new j(n,s,i,d,p,f,c)),(n=o[3])&&t.push(new j(n,p,f,a,l,u,d)),(n=o[2])&&t.push(new j(n,s,f,a,p,u,d)),(n=o[1])&&t.push(new j(n,p,i,a,l,f,d)),(n=o[0])&&t.push(new j(n,s,i,a,p,f,d))}return this}function tS(e){var t=[],r=[],o;for(this._root&&t.push(new j(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));o=t.pop();){var n=o.node;if(n.length){var s,i=o.x0,a=o.y0,l=o.z0,u=o.x1,c=o.y1,p=o.z1,f=(i+u)/2,d=(a+c)/2,h=(l+p)/2;(s=n[0])&&t.push(new j(s,i,a,l,f,d,h)),(s=n[1])&&t.push(new j(s,f,a,l,u,d,h)),(s=n[2])&&t.push(new j(s,i,d,l,f,c,h)),(s=n[3])&&t.push(new j(s,f,d,l,u,c,h)),(s=n[4])&&t.push(new j(s,i,a,h,f,d,p)),(s=n[5])&&t.push(new j(s,f,a,h,u,d,p)),(s=n[6])&&t.push(new j(s,i,d,h,f,c,p)),(s=n[7])&&t.push(new j(s,f,d,h,u,c,p))}r.push(o)}for(;o=r.pop();)e(o.node,o.x0,o.y0,o.z0,o.x1,o.y1,o.z1);return this}function eS(e){return e[0]}function rS(e){return arguments.length?(this._x=e,this):this._x}function oS(e){return e[1]}function nS(e){return arguments.length?(this._y=e,this):this._y}function sS(e){return e[2]}function iS(e){return arguments.length?(this._z=e,this):this._z}function us(e,t,r,o){var n=new Mp(t??eS,r??oS,o??sS,NaN,NaN,NaN,NaN,NaN,NaN);return e==null?n:n.addAll(e)}function Mp(e,t,r,o,n,s,i,a,l){this._x=e,this._y=t,this._z=r,this._x0=o,this._y0=n,this._z0=s,this._x1=i,this._y1=a,this._z1=l,this._root=void 0}function aS(e){for(var t={data:e.data},r=t;e=e.next;)r=r.next={data:e.data};return t}var kt=us.prototype=Mp.prototype;kt.copy=function(){var e=new Mp(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,r,o;if(!t)return e;if(!t.length)return e._root=aS(t),e;for(r=[{source:t,target:e._root=new Array(8)}];t=r.pop();)for(var n=0;n<8;++n)(o=t.source[n])&&(o.length?r.push({source:o,target:t.target[n]=new Array(8)}):t.target[n]=aS(o));return e};kt.add=WC;kt.addAll=GC;kt.cover=HC;kt.data=qC;kt.extent=KC;kt.find=XC;kt.remove=jC;kt.removeAll=YC;kt.root=QC;kt.size=ZC;kt.visit=JC;kt.visitAfter=tS;kt.x=rS;kt.y=nS;kt.z=iS;function eo(e){return function(){return e}}function Se(e){return(e()-.5)*1e-6}function fD(e){return e.index}function lS(e,t){var r=e.get(t);if(!r)throw new Error("node not found: "+t);return r}function Lp(e){var t=fD,r=f,o,n=eo(30),s,i,a,l,u,c,p=1;e==null&&(e=[]);function f(m){return 1/Math.min(l[m.source.index],l[m.target.index])}function d(m){for(var y=0,C=e.length;y<p;++y)for(var b=0,v,I,T,E=0,R=0,N=0,M,L;b<C;++b)v=e[b],I=v.source,T=v.target,E=T.x+T.vx-I.x-I.vx||Se(c),a>1&&(R=T.y+T.vy-I.y-I.vy||Se(c)),a>2&&(N=T.z+T.vz-I.z-I.vz||Se(c)),M=Math.sqrt(E*E+R*R+N*N),M=(M-s[b])/M*m*o[b],E*=M,R*=M,N*=M,T.vx-=E*(L=u[b]),a>1&&(T.vy-=R*L),a>2&&(T.vz-=N*L),I.vx+=E*(L=1-L),a>1&&(I.vy+=R*L),a>2&&(I.vz+=N*L)}function h(){if(i){var m,y=i.length,C=e.length,b=new Map(i.map((I,T)=>[t(I,T,i),I])),v;for(m=0,l=new Array(y);m<C;++m)v=e[m],v.index=m,typeof v.source!="object"&&(v.source=lS(b,v.source)),typeof v.target!="object"&&(v.target=lS(b,v.target)),l[v.source.index]=(l[v.source.index]||0)+1,l[v.target.index]=(l[v.target.index]||0)+1;for(m=0,u=new Array(C);m<C;++m)v=e[m],u[m]=l[v.source.index]/(l[v.source.index]+l[v.target.index]);o=new Array(C),x(),s=new Array(C),g()}}function x(){if(i)for(var m=0,y=e.length;m<y;++m)o[m]=+r(e[m],m,e)}function g(){if(i)for(var m=0,y=e.length;m<y;++m)s[m]=+n(e[m],m,e)}return d.initialize=function(m,...y){i=m,c=y.find(C=>typeof C=="function")||Math.random,a=y.find(C=>[1,2,3].includes(C))||2,h()},d.links=function(m){return arguments.length?(e=m,h(),d):e},d.id=function(m){return arguments.length?(t=m,d):t},d.iterations=function(m){return arguments.length?(p=+m,d):p},d.strength=function(m){return arguments.length?(r=typeof m=="function"?m:eo(+m),x(),d):r},d.distance=function(m){return arguments.length?(n=typeof m=="function"?m:eo(+m),g(),d):n},d}function uS(){let e=1;return()=>(e=(1664525*e+1013904223)%4294967296)/4294967296}var cS=3;function ql(e){return e.x}function Bp(e){return e.y}function pS(e){return e.z}var dD=10,hD=Math.PI*(3-Math.sqrt(5)),mD=Math.PI*20/(9+Math.sqrt(221));function Up(e,t){t=t||2;var r=Math.min(cS,Math.max(1,Math.round(t))),o,n=1,s=.001,i=1-Math.pow(s,1/300),a=0,l=.6,u=new Map,c=rn(d),p=jr("tick","end"),f=uS();e==null&&(e=[]);function d(){h(),p.call("tick",o),n<s&&(c.stop(),p.call("end",o))}function h(m){var y,C=e.length,b;m===void 0&&(m=1);for(var v=0;v<m;++v)for(n+=(a-n)*i,u.forEach(function(I){I(n)}),y=0;y<C;++y)b=e[y],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),r>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),r>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return o}function x(){for(var m=0,y=e.length,C;m<y;++m){if(C=e[m],C.index=m,C.fx!=null&&(C.x=C.fx),C.fy!=null&&(C.y=C.fy),C.fz!=null&&(C.z=C.fz),isNaN(C.x)||r>1&&isNaN(C.y)||r>2&&isNaN(C.z)){var b=dD*(r>2?Math.cbrt(.5+m):r>1?Math.sqrt(.5+m):m),v=m*hD,I=m*mD;r===1?C.x=b:r===2?(C.x=b*Math.cos(v),C.y=b*Math.sin(v)):(C.x=b*Math.sin(v)*Math.cos(I),C.y=b*Math.cos(v),C.z=b*Math.sin(v)*Math.sin(I))}(isNaN(C.vx)||r>1&&isNaN(C.vy)||r>2&&isNaN(C.vz))&&(C.vx=0,r>1&&(C.vy=0),r>2&&(C.vz=0))}}function g(m){return m.initialize&&m.initialize(e,f,r),m}return x(),o={tick:h,restart:function(){return c.restart(d),o},stop:function(){return c.stop(),o},numDimensions:function(m){return arguments.length?(r=Math.min(cS,Math.max(1,Math.round(m))),u.forEach(g),o):r},nodes:function(m){return arguments.length?(e=m,x(),u.forEach(g),o):e},alpha:function(m){return arguments.length?(n=+m,o):n},alphaMin:function(m){return arguments.length?(s=+m,o):s},alphaDecay:function(m){return arguments.length?(i=+m,o):+i},alphaTarget:function(m){return arguments.length?(a=+m,o):a},velocityDecay:function(m){return arguments.length?(l=1-m,o):1-l},randomSource:function(m){return arguments.length?(f=m,u.forEach(g),o):f},force:function(m,y){return arguments.length>1?(y==null?u.delete(m):u.set(m,g(y)),o):u.get(m)},find:function(){var m=Array.prototype.slice.call(arguments),y=m.shift()||0,C=(r>1?m.shift():null)||0,b=(r>2?m.shift():null)||0,v=m.shift()||1/0,I=0,T=e.length,E,R,N,M,L,ut;for(v*=v,I=0;I<T;++I)L=e[I],E=y-L.x,R=C-(L.y||0),N=b-(L.z||0),M=E*E+R*R+N*N,M<v&&(ut=L,v=M);return ut},on:function(m,y){return arguments.length>1?(p.on(m,y),o):p.on(m)}}}function Vp(){var e,t,r,o,n,s=eo(-30),i,a=1,l=1/0,u=.81;function c(h){var x,g=e.length,m=(t===1?ls(e,ql):t===2?as(e,ql,Bp):t===3?us(e,ql,Bp,pS):null).visitAfter(f);for(n=h,x=0;x<g;++x)r=e[x],m.visit(d)}function p(){if(e){var h,x=e.length,g;for(i=new Array(x),h=0;h<x;++h)g=e[h],i[g.index]=+s(g,h,e)}}function f(h){var x=0,g,m,y=0,C,b,v,I,T=h.length;if(T){for(C=b=v=I=0;I<T;++I)(g=h[I])&&(m=Math.abs(g.value))&&(x+=g.value,y+=m,C+=m*(g.x||0),b+=m*(g.y||0),v+=m*(g.z||0));x*=Math.sqrt(4/T),h.x=C/y,t>1&&(h.y=b/y),t>2&&(h.z=v/y)}else{g=h,g.x=g.data.x,t>1&&(g.y=g.data.y),t>2&&(g.z=g.data.z);do x+=i[g.data.index];while(g=g.next)}h.value=x}function d(h,x,g,m,y){if(!h.value)return!0;var C=[g,m,y][t-1],b=h.x-r.x,v=t>1?h.y-r.y:0,I=t>2?h.z-r.z:0,T=C-x,E=b*b+v*v+I*I;if(T*T/u<E)return E<l&&(b===0&&(b=Se(o),E+=b*b),t>1&&v===0&&(v=Se(o),E+=v*v),t>2&&I===0&&(I=Se(o),E+=I*I),E<a&&(E=Math.sqrt(a*E)),r.vx+=b*h.value*n/E,t>1&&(r.vy+=v*h.value*n/E),t>2&&(r.vz+=I*h.value*n/E)),!0;if(h.length||E>=l)return;(h.data!==r||h.next)&&(b===0&&(b=Se(o),E+=b*b),t>1&&v===0&&(v=Se(o),E+=v*v),t>2&&I===0&&(I=Se(o),E+=I*I),E<a&&(E=Math.sqrt(a*E)));do h.data!==r&&(T=i[h.data.index]*n/E,r.vx+=b*T,t>1&&(r.vy+=v*T),t>2&&(r.vz+=I*T));while(h=h.next)}return c.initialize=function(h,...x){e=h,o=x.find(g=>typeof g=="function")||Math.random,t=x.find(g=>[1,2,3].includes(g))||2,p()},c.strength=function(h){return arguments.length?(s=typeof h=="function"?h:eo(+h),p(),c):s},c.distanceMin=function(h){return arguments.length?(a=h*h,c):Math.sqrt(a)},c.distanceMax=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c.theta=function(h){return arguments.length?(u=h*h,c):Math.sqrt(u)},c}var Kl=window,Xl=Kl.ShadowRoot&&(Kl.ShadyCSS===void 0||Kl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wp=Symbol(),fS=new WeakMap,cs=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Wp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Xl&&t===void 0){let o=r!==void 0&&r.length===1;o&&(t=fS.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&fS.set(r,t))}return t}toString(){return this.cssText}},dS=e=>new cs(typeof e=="string"?e:e+"",void 0,Wp),zp=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new cs(r,e,Wp)},Gp=(e,t)=>{Xl?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let o=document.createElement("style"),n=Kl.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},jl=Xl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let o of t.cssRules)r+=o.cssText;return dS(r)})(e):e;var Hp,Yl=window,hS=Yl.trustedTypes,xD=hS?hS.emptyScript:"",mS=Yl.reactiveElementPolyfillSupport,Kp={toAttribute(e,t){switch(t){case Boolean:e=e?xD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},gS=(e,t)=>t!==e&&(t==t||e==e),qp={attribute:!0,type:String,converter:Kp,reflect:!1,hasChanged:gS},Ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,o)=>{let n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=qp){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){let s=this[t];this[r]=n,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qp}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)r.unshift(jl(n))}else t!==void 0&&r.push(jl(t));return r}static _$Ep(t,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gp(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=qp){var n;let s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){let i=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:Kp).toAttribute(r,o.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var o;let n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){let i=n.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?i.converter:Kp;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||gS)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ze.finalized=!0,Ze.elementProperties=new Map,Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},mS?.({ReactiveElement:Ze}),((Hp=Yl.reactiveElementVersions)!==null&&Hp!==void 0?Hp:Yl.reactiveElementVersions=[]).push("1.6.1");var Xp,Ql=window,sn=Ql.trustedTypes,xS=sn?sn.createPolicy("lit-html",{createHTML:e=>e}):void 0,br=`lit$${(Math.random()+"").slice(9)}$`,IS="?"+br,yD=`<${IS}>`,an=document,fs=(e="")=>an.createComment(e),ds=e=>e===null||typeof e!="object"&&typeof e!="function",$S=Array.isArray,wD=e=>$S(e)||typeof e?.[Symbol.iterator]=="function",ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yS=/-->/g,wS=/>/g,ro=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bS=/'/g,vS=/"/g,TS=/^(?:script|style|textarea|title)$/i,ES=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),so=ES(1),tf=ES(2),Je=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),CS=new WeakMap,nn=an.createTreeWalker(an,129,null,!1),bD=(e,t)=>{let r=e.length-1,o=[],n,s=t===2?"<svg>":"",i=ps;for(let l=0;l<r;l++){let u=e[l],c,p,f=-1,d=0;for(;d<u.length&&(i.lastIndex=d,p=i.exec(u),p!==null);)d=i.lastIndex,i===ps?p[1]==="!--"?i=yS:p[1]!==void 0?i=wS:p[2]!==void 0?(TS.test(p[2])&&(n=RegExp("</"+p[2],"g")),i=ro):p[3]!==void 0&&(i=ro):i===ro?p[0]===">"?(i=n??ps,f=-1):p[1]===void 0?f=-2:(f=i.lastIndex-p[2].length,c=p[1],i=p[3]===void 0?ro:p[3]==='"'?vS:bS):i===vS||i===bS?i=ro:i===yS||i===wS?i=ps:(i=ro,n=void 0);let h=i===ro&&e[l+1].startsWith("/>")?" ":"";s+=i===ps?u+yD:f>=0?(o.push(c),u.slice(0,f)+"$lit$"+u.slice(f)+br+h):u+br+(f===-2?(o.push(void 0),l):h)}let a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xS!==void 0?xS.createHTML(a):a,o]},oo=class{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[u,c]=bD(t,r);if(this.el=oo.createElement(u,o),nn.currentNode=this.el.content,r===2){let p=this.el.content,f=p.firstChild;f.remove(),p.append(...f.childNodes)}for(;(n=nn.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){let p=[];for(let f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(br)){let d=c[i++];if(p.push(f),d!==void 0){let h=n.getAttribute(d.toLowerCase()+"$lit$").split(br),x=/([.?@])?(.*)/.exec(d);l.push({type:1,index:s,name:x[2],strings:h,ctor:x[1]==="."?Yp:x[1]==="?"?Qp:x[1]==="@"?Zp:un})}else l.push({type:6,index:s})}for(let f of p)n.removeAttribute(f)}if(TS.test(n.tagName)){let p=n.textContent.split(br),f=p.length-1;if(f>0){n.textContent=sn?sn.emptyScript:"";for(let d=0;d<f;d++)n.append(p[d],fs()),nn.nextNode(),l.push({type:2,index:++s});n.append(p[f],fs())}}}else if(n.nodeType===8)if(n.data===IS)l.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(br,p+1))!==-1;)l.push({type:7,index:s}),p+=br.length-1}s++}}static createElement(t,r){let o=an.createElement("template");return o.innerHTML=t,o}};function ln(e,t,r=e,o){var n,s,i,a;if(t===Je)return t;let l=o!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[o]:r._$Cl,u=ds(t)?void 0:t._$litDirective$;return l?.constructor!==u&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(e),l._$AT(e,r,o)),o!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=ln(e,l._$AS(e,t.values),l,o)),t}var jp=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;let{el:{content:o},parts:n}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:an).importNode(o,!0);nn.currentNode=s;let i=nn.nextNode(),a=0,l=0,u=n[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new no(i,i.nextSibling,this,t):u.type===1?c=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(c=new Jp(i,this,t)),this.u.push(c),u=n[++l]}a!==u?.index&&(i=nn.nextNode(),a++)}return s}p(t){let r=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},no=class{constructor(t,r,o,n){var s;this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cm=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ln(this,t,r),ds(t)?t===gt||t==null||t===""?(this._$AH!==gt&&this._$AR(),this._$AH=gt):t!==this._$AH&&t!==Je&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wD(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==gt&&ds(this._$AH)?this._$AA.nextSibling.data=t:this.T(an.createTextNode(t)),this._$AH=t}$(t){var r;let{values:o,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=oo.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.p(o);else{let i=new jp(s,this),a=i.v(this.options);i.p(o),this.T(a),this._$AH=i}}_$AC(t){let r=CS.get(t.strings);return r===void 0&&CS.set(t.strings,r=new oo(t)),r}k(t){$S(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,n=0;for(let s of t)n===r.length?r.push(o=new no(this.O(fs()),this.O(fs()),this,this.options)):o=r[n],o._$AI(s),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},un=class{constructor(t,r,o,n,s){this.type=1,this._$AH=gt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=gt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){let s=this.strings,i=!1;if(s===void 0)t=ln(this,t,r,0),i=!ds(t)||t!==this._$AH&&t!==Je,i&&(this._$AH=t);else{let a=t,l,u;for(t=s[0],l=0;l<s.length-1;l++)u=ln(this,a[o+l],r,l),u===Je&&(u=this._$AH[l]),i||(i=!ds(u)||u!==this._$AH[l]),u===gt?t=gt:t!==gt&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}i&&!n&&this.j(t)}j(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Yp=class extends un{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===gt?void 0:t}},vD=sn?sn.emptyScript:"",Qp=class extends un{constructor(){super(...arguments),this.type=4}j(t){t&&t!==gt?this.element.setAttribute(this.name,vD):this.element.removeAttribute(this.name)}},Zp=class extends un{constructor(t,r,o,n,s){super(t,r,o,n,s),this.type=5}_$AI(t,r=this){var o;if((t=(o=ln(this,t,r,0))!==null&&o!==void 0?o:gt)===Je)return;let n=this._$AH,s=t===gt&&n!==gt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==gt&&(n===gt||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Jp=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ln(this,t)}};var SS=Ql.litHtmlPolyfillSupport;SS?.(oo,no),((Xp=Ql.litHtmlVersions)!==null&&Xp!==void 0?Xp:Ql.litHtmlVersions=[]).push("2.6.1");var _S=(e,t,r)=>{var o,n;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:t,i=s._$litPart$;if(i===void 0){let a=(n=r?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=i=new no(t.insertBefore(fs(),a),a,void 0,r??{})}return i._$AI(e),i};var ef,rf;var vr=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_S(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Je}};vr.finalized=!0,vr._$litElement$=!0,(ef=globalThis.litElementHydrateSupport)===null||ef===void 0||ef.call(globalThis,{LitElement:vr});var AS=globalThis.litElementPolyfillSupport;AS?.({LitElement:vr});((rf=globalThis.litElementVersions)!==null&&rf!==void 0?rf:globalThis.litElementVersions=[]).push("3.2.2");var RS=e=>e??gt;var NS=zp`
    :host {
        --graph-size: 100vh;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: max(300px, calc(100vw - var(--graph-size))) min(var(--graph-size), calc(100vw - 300px));
        font-family: sans-serif;
    }
    label {
        display: block;
    }
    aside {
        height: 100vh;
        width: calc(100vw - var(--graph-size));
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: repeat(4, 40px) 1fr;
        background-color: #aaaaaa;
    }
    label {
        font-size: 18px;
        font-weight: 400;
    }
    table {
        font-size: 14px;
        font-weight: 200;
    }
`;var of=Ve([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]),kS=({eye:e,target:t,up:r})=>{let o=(c,p)=>[c[0]-p[0],c[1]-p[1],c[2]-p[2]],n=(c,p)=>[c[0]/p,c[1]/p,c[2]/p],s=c=>n(c,Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])),i=(c,p)=>[c[1]*p[2]-c[2]*p[1],c[2]*p[0]-c[0]*p[2],c[0]*p[1]-c[1]*p[0]],a=s(o(t,e)),l=s(i(r,a)),u=i(a,l);return Ve([[l[0],l[1],l[2],-l[0]*e[0]-l[1]*e[1]-l[2]*e[2]],[u[0],u[1],u[2],-u[0]*e[0]-u[1]*e[1]-u[2]*e[2]],[a[0],a[1],a[2],-a[0]*e[0]-a[1]*e[1]-a[2]*e[2]],[0,0,0,1]])},Zl=({fov:e,aspect:t,near:r,far:o})=>{let n=1/Math.tan(e/2),s=1/(r-o);return Ve([[n/t,0,0,0],[0,n,0,0],[0,0,(r+o)*s,2*r*o*s],[0,0,-1,0]])};var Jl=(e,t)=>G(r=>{let o=Math.sin(t),n=Math.cos(t);return Ot([[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]],e)}),tu=(e,t)=>G(r=>{let o=Math.sin(t),n=Math.cos(t);return Ot([[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]],e)}),FS=(e,{dx:t=0,dy:r=0})=>G(o=>Ot([[1,0,0,-t],[0,1,0,-r],[0,0,1,0],[0,0,0,1]],e));var DS=(e,{world:t,view:r,projection:o})=>Ot(Ot(o,Ot(r,t)),Ve(e,[e.length/4,4]),!1,!0);var io=e=>e*Math.PI/180,CD=e=>e*180/Math.PI,SD=(e,t,r)=>Math.max(t,Math.min(r,e)),Y=(...e)=>e.find(t=>t!=null&&!isNaN(t)),ID=(e,t,r,o)=>n=>e(n??SD((Date.now()-(o??=Date.now()))%(r?t:1/0)/t,0,1));var tr=(e,t)=>{let r=Date.now(),o=1e3,n=ID(i=>t(e(Rp(i))),1500),s=setInterval(n,1e3/30);n(0),setTimeout(i=>{clearInterval(s),n(1)},o)};var eu=e=>{let t;return r=>{let o=e(r),n=t==null?0:o-t;return t=o,n}},ao=e=>eu(Sp(0,CD(e)));var OS={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},PS=e=>(...t)=>({_$litDirective$:e,values:t}),ru=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var MS=PS(class extends ru{constructor(e){var t;if(super(e),e.type!==OS.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}let n=e.element.classList;this.nt.forEach(s=>{s in t||(n.remove(s),this.nt.delete(s))});for(let s in t){let i=!!t[s];i===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(i?(n.add(s),this.nt.add(s)):(n.remove(s),this.nt.delete(s)))}return Je}});var LS=(e,t)=>so`<svg
    class="${MS({icon:!0,[e]:!0})}"
    height="${t}"
    width="${t}"
    viewBox="0 0 48 48"
>
    ${$D[e]}
</svg>`,$D={eye:tf`<path d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z"/>`,noeye:tf`<path d="m31.45 27.05-2.2-2.2q1.3-3.55-1.35-5.9-2.65-2.35-5.75-1.2l-2.2-2.2q.85-.55 1.9-.8 1.05-.25 2.15-.25 3.55 0 6.025 2.475Q32.5 19.45 32.5 23q0 1.1-.275 2.175-.275 1.075-.775 1.875Zm6.45 6.45-2-2q2.45-1.8 4.275-4.025Q42 25.25 42.85 23q-2.5-5.55-7.5-8.775Q30.35 11 24.5 11q-2.1 0-4.3.4-2.2.4-3.45.95L14.45 10q1.75-.8 4.475-1.4Q21.65 8 24.25 8q7.15 0 13.075 4.075Q43.25 16.15 46 23q-1.3 3.2-3.35 5.85-2.05 2.65-4.75 4.65Zm2.9 11.3-8.4-8.25q-1.75.7-3.95 1.075T24 38q-7.3 0-13.25-4.075T2 23q1-2.6 2.775-5.075T9.1 13.2L2.8 6.9l2.1-2.15L42.75 42.6ZM11.15 15.3q-1.85 1.35-3.575 3.55Q5.85 21.05 5.1 23q2.55 5.55 7.675 8.775Q17.9 35 24.4 35q1.65 0 3.25-.2t2.4-.6l-3.2-3.2q-.55.25-1.35.375T24 31.5q-3.5 0-6-2.45T15.5 23q0-.75.125-1.5T16 20.15Zm15.25 7.1Zm-5.8 2.9Z"/>`};var nf=e=>e?.match(/[+\-*/]/)&&!sf(e),sf=e=>e?.match(/^".*"$/);var af=async(e,t)=>{let r=/(?<space>\s+)|(?<operator>[+\-*/])|(?<groupStart>\()|(?<groupEnd>\))|"(?<quoted_string>[^"\\]*(?:\\.[^"\\]*)*)"|(?<number>[0-9]+(?:\.[0-9]+)?(?=[^0-9]|$))|(?<string>[^\\+\-*/()"]*[^\\+\-*/() ]+)/g,n=(d=>[...d.matchAll(r)??{}].flatMap(h=>Object.entries(h?.groups??{}).filter(([,x])=>x!=null).map(([x,g])=>({type:x,val:g}))))(e),s=0,i=()=>n[s++],a=()=>n[s],l=()=>{for(;a()?.type==="space";)i()},u=async()=>{l();let d=i();switch(d.type){case"groupStart":let h=await f();if(l(),i()?.type!=="groupEnd")throw new Error("Expected closing parenthesis");return h;case"quoted_string":return await t.lookup(d.val.replace(/\\(.)/g,"$1"));case"number":return await parseFloat(d.val);case"string":return await t.lookup(d.val);default:throw new Error(`Unexpected token: ${d.val}`)}},c=async()=>{l();let d=a();if(d&&d.type==="operator"&&(d.val==="+"||d.val==="-")){s++;let h=await c();return d.val==="+"?h:t.neg(h)}return await u()},p=async()=>{l();let d=await c();for(;;){l();let h=a();if(h&&h.type==="operator"&&(h.val==="*"||h.val==="/")){s++;let x=await c();d=h.val==="*"?t.mul(d,x):t.div(d,x)}else return d}},f=async()=>{l();let d=await p();for(;;){l();let h=a();if(h&&h.type==="operator"&&(h.val==="+"||h.val==="-")){s++;let x=await p();d=h.val==="+"?t.add(d,x):t.sub(d,x)}else return d}};return f().then(d=>d?.array())};var se=1536,te={fov:.746,aspect:1,near:100,far:500,width:400,height:400},BS={left:-200,right:200,top:-200,bottom:200,near:100,far:500},TD={eye:[0,0,-600],target:[0,0,0],up:[0,1,0]},hs=class extends vr{constructor(){super(),this.initialized=this.initialize()}initialize=t=>Promise.all([this.fetchWords(),this.fetchEmbeddings()]).then(async([r,o])=>{this.similarWordCount=300,this.words=r,this.embeddings=o,this.wordIndexes=new Map(this.words.map((s,i)=>[s,i])),this.center={x:0,y:0,w:1},this.world=of.clone(),this.view=kS(TD),this.projection=Zl(te);let n={ArrowUp:s=>tr(ao(-.2),i=>this.world=Jl(this.world,io(i))),ArrowDown:s=>tr(ao(.2),i=>this.world=Jl(this.world,io(i))),ArrowLeft:s=>tr(ao(.2),i=>this.world=tu(this.world,io(i))),ArrowRight:s=>tr(ao(-.2),i=>this.world=tu(this.world,io(i))),"+":s=>tr(eu(Wt(te.fov,te.fov/1.2)),i=>{te.fov+=i,console.log(i,te.fov),this.projection=Zl(te)}),"-":s=>tr(eu(Wt(te.fov,te.fov*1.2)),i=>{te.fov+=i,console.log(i,te.fov),this.projection=Zl(te)})};window.addEventListener("keydown",s=>n[s.key]?.(s))});fetchWords=t=>fetch("./words").then(r=>r.text()).then(r=>r.split(/\n/).filter(o=>o?.trim().length));fetchEmbeddings=t=>fetch("./embeddings").then(r=>r.arrayBuffer()).then(r=>new Float32Array(r));updateGraph=async t=>{if(!this.apiKey||!this.inputWords?.length)return;let r=this.inputWords.filter(s=>!this.wordIndexes.has(s));r.length&&await this.fetchMissingEmbeddings(r),this.embeddingsTensor??=Ve(this.embeddings,[this.words.length,se]);let o=new Float32Array(this.inputWords.length*se);this.inputWords.forEach((s,i)=>{let a=this.wordIndexes.get(s)*se;o.set(this.embeddings.slice(a,a+se),i*se)}),this.scores=G(s=>{let i=Ve(o,[this.inputWords.length,se]);return ju(this.embeddingsTensor,Lm(i)).arraySync()});let n=this.scores.map((s,i)=>i).sort((s,i)=>Xr(this.scores[i])-Xr(this.scores[s]));this.similarWords=[...this.inputWords.map(s=>this.wordIndexes.get(s)),...n.filter(s=>!this.inputWords.includes(this.words[s])).slice(0,this.showSimilarWords?this.similarWordCount:0)].sort((s,i)=>Xr(this.scores[i])-Xr(this.scores[s])).map(s=>({wordIndex:s,word:this.words[s],scores:this.scores[s]})),this.drawGraph()};normalizer=t=>async(...r)=>{let o=await t(...r);return wt(o,Tm(o))};evaluator={add:this.normalizer(async(t,r)=>H(t,r)),sub:this.normalizer(async(t,r)=>ue(t,r)),mul:this.normalizer(async(t,r)=>z(t,r)),div:this.normalizer(async(t,r)=>wt(t,r)),neg:this.normalizer(async t=>Tn(t)),lookup:async t=>{let r=this.wordIndexes.get(t)??-1;return r===-1?this.fetchMissingEmbeddings([t]):this.embeddings.slice(se*r,se*(r+1))}};appendEmbeddings=(t,r)=>{let o=new Float32Array(this.embeddings.length+se*t.length);o.set(this.embeddings),t.forEach((n,s)=>{this.wordIndexes.set(n,this.words.length),this.words.push(n),o.set(r[s].embedding,this.embeddings.length+se*s)}),this.embeddingsTensor&&(this.embeddingsTensor.dispose(),this.embeddingsTensor=void 0),this.embeddings=o};fetchMissingEmbeddings=async t=>{let r=t.filter(nf),o=[];await Promise.all(r.map(l=>{let u=p=>{};return af(l,{add:u,sub:u,mul:u,div:u,neg:u,lookup:p=>o.push(p)})}));let n=Array.from(new Set([...t.filter(l=>!nf(l)).map(l=>sf(l)?l.slice(1,-1):l),...o.filter(l=>!this.wordIndexes.has(l))])),s=[];n.length&&(s=(await fetch("https://api.openai.com/v1/embeddings",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:"text-embedding-ada-002",input:n})}).then(u=>u.json())).data,this.appendEmbeddings(n,s));let i=[];r.length&&(i=(await Promise.all(r.map(l=>af(l,this.evaluator)))).map(l=>({embedding:l})),this.appendEmbeddings(r,i));let a=new Float32Array((n.length+r.length)*se);for(let[l,u]of n.entries()){let c=t.indexOf(u);c!==-1&&a.set(s[l].embedding,c*se)}for(let[l,u]of r.entries())a.set(i[l].embedding,t.indexOf(u)*se);return a};drawGraph=t=>{let r=this.inputWords.map(v=>this.similarWords.find(I=>I.word===v)),o=this.similarWords.flatMap(({scores:v,word:I,wordIndex:T},E)=>v.flatMap((R,N)=>I===this.inputWords[N]?[]:{source:this.similarWords[E],target:r[N],score:R})),n=this.similarWords.reduce((v,{scores:I})=>I.reduce((T,E)=>({min:Math.min(T.min,E),max:Math.max(T.max,E)}),v),{min:1/0,max:-1/0}),s=v=>Math.log10(v*-.75+1)/Math.log10(.25),i=v=>1-v,a=i(.925),l=1/(i(n.min)-a),u=v=>Math.min(1,Math.max(0,(i(v)-a)*l));this.forceSim||(this.forceSim=Up(this.similarWords,3).force("link",Lp(o).id(v=>v.word).strength(.5).distance(v=>10+180*Ap(u(v.score)))).force("charge",Vp().strength(-10).distanceMax(75)).force("center",Op(0,0,0).strength(.5)).tick());let c=Ye("svg"),p=gp();p.on("drag",({dx:v,dy:I,defaultPrevented:T})=>{let E=T?200:100;tr(ao(I/(E*Math.PI)),R=>this.world=Jl(this.world,io(R))),tr(ao(-v/(E*Math.PI)),R=>this.world=tu(this.world,io(R)))}),c.call(p);let f=c.select("g.links").selectAll("g.link").data(o,v=>`${v.source.wordIndex} ${v.target.wordIndex}`).join("g").classed("link",!0).attr("data-words",v=>`${v.source.wordIndex} ${v.target.wordIndex}`),d=f.selectAll("line").data(v=>[v]).join("line"),h=f.selectAll("g.labels").data(v=>[v]).join("g").classed("labels",!0);h.selectAll("rect").data(v=>[v]).join("rect").attr("x",-12).attr("y",-4).attr("width",24).attr("height",8),h.selectAll("text").data(v=>[v]).join("text").text(v=>`${v.score}`.slice(0,6)).attr("transform","translate(0 0.25)");let x=Object.fromEntries(c.select("g.nodes").selectAll("g.node").data().map(v=>[v.wordIndex,v])),g=c.select("g.nodes").selectAll("g.node").data(this.similarWords,v=>v.wordIndex).join(v=>v.append("g").classed("node",!0).attr("data-word",I=>I.wordIndex).style("opacity","0").on("click",this.nodeClick.bind(this)).on("mouseenter",this.nodeEnter.bind(this)).on("mouseleave",this.nodeLeave.bind(this)).attr("transform-origin",I=>`${Y(I.tx,I.px,0)} ${Y(I.ty,I.py,0)}`).transition("node enter").duration(200).delay(I=>Math.random()*50).style("opacity","1"),v=>v.attr("transform-origin",I=>`${Y(I.tx,I.px,0)} ${Y(I.ty,I.py,0)}`).attr("transform",I=>(I.tx=I.px=I.ox=x[I.wordIndex].px,I.ty=I.py=I.oy=x[I.wordIndex].py,`translate(${I.tx} ${I.ty})`)).transition("node update").duration(200).delay(I=>Math.random()*50).attrTween("transform",I=>T=>(I.tx=I.ox+(Y(I.px,I.ox)-I.ox)*T,I.ty=I.oy+(Y(I.py,I.oy)-I.oy)*T,`scale(${Y(I.pw,0)}) translate(${I.tx} ${I.ty})`)).on("end",I=>I.ox=I.oy=I.tx=I.ty=null),v=>v.transition("node exit").duration(200).delay(I=>Math.random()*50).style("opacity","0").attr("transform-origin",I=>`${Y(I.tx,I.px,0)} ${Y(I.ty,I.py,0)}`).attr("transform",I=>`scale(${Y(I.pw,0)}) translate(${I.px} ${I.py})`).remove()).classed("highlight",v=>this.inputWords.includes(v.word));g.selectAll("text").data(v=>[v],v=>v.wordIndex).join("text").text(v=>v.word).attr("transform","translate(0 -2)");let m=g.selectAll("circle").data(v=>[v],v=>v.wordIndex).join("circle").attr("r",v=>.75);this.forceSim.force("link").links(o).distance(v=>10+180*s(u(v.score))),this.tickInterval&&clearInterval(this.tickInterval);let y=0;this.fpsInterval&&clearInterval(this.fpsInterval),this.fpsInterval=setInterval(v=>{console.log(`${y} frames per second`),y=0},1e3);let C,b=v=>{y++;let I=this.inputWords.reduce(({x:E,y:R,w:N},M)=>{let L=this.similarWords.find(ut=>ut.word===M);return E+=Y(L.tx,L.px,L.x,0),R+=Y(L.ty,L.py,L.y,0),N+=Y(L.pw,1),{x:E,y:R,w:N}},{x:0,y:0,w:0});this.center={x:I.x/this.inputWords.length,y:I.y/this.inputWords.length,w:I.w/this.inputWords.length},this.forceSim.force("center").x(0).y(0).z(0),(!C||C.length!==this.similarWords.length)&&(C=new Float32Array(this.similarWords.length*4)),this.similarWords.forEach(({x:E,y:R,z:N},M)=>C.set([E,R,N,1],M*4));let T=FS(of.clone(),{dx:-(this.center?.x??0),dy:-this.center?.y});G(E=>{let R=Ot(T,this.view),[N,M,L,ut]=DS(C,{world:this.world,view:this.view,projection:this.projection}).arraySync();for(let[U,J]of this.similarWords.entries()){let St=ut[U];J.pw=-(te.width/St).toFixed(2),J.px=+(BS.left+te.width*((N[U]/St+1)/2)).toFixed(2),J.py=+(BS.top+te.height*((M[U]/St+1)/2)).toFixed(2)}let rt=({source:U,target:J})=>[(Y(J.tx,J.px,0)+Y(U.tx,U.px,0))/2,(Y(J.ty,J.py,0)+Y(U.ty,U.py,0))/2];d.attr("x1",U=>Y(U.source.tx,U.source.px,0)).attr("y1",U=>Y(U.source.ty,U.source.py,0)).attr("x2",U=>Y(U.target.tx,U.target.px,0)).attr("y2",U=>Y(U.target.ty,U.target.py,0)).attr("transform-origin",U=>rt(U).join(" ")),h.attr("transform",U=>`translate(${rt(U).join(" ")})`).style("--pw",U=>(Y(U.source.pw+U.target.pw,0)/2).toFixed(2)),g.attr("transform-origin",U=>`${Y(U.tx,U.px,0)} ${Y(U.ty,U.py,0)}`).attr("transform",U=>`scale(${Y(U.pw,0)}) translate(${Y(U.tx,U.px,0)} ${Y(U.ty,U.py,0)})`).style("--pw",U=>Y(U.pw,0)).sort((U,J)=>U.pw-J.pw)})};this.tickInterval=setInterval(b,1e3/30),this.forceSim.nodes(this.similarWords).alpha(1).restart()};nodeEnter=(t,r)=>{this.querySelectorAll(".link.highlight").forEach(n=>n.classList.remove("highlight"));let o=[...this.querySelectorAll(`.link[data-words~="${r.wordIndex}"]`)].filter(n=>!t.target.classList.contains("highlight")||n.attributes["data-words"].value.split(/ /).every(s=>this.inputWords.includes(this.words[s])));o.length&&(this.style.setProperty("--link-stroke","var(--link-stroke-muted, --link-stroke)"),this.style.setProperty("--node-fill","var(--node-fill-muted, --node-fill)"),this.overWord=r.word,o.forEach(n=>n.classList.add("highlight")))};nodeLeave=(t,r)=>{this.style.setProperty("--link-stroke",null),this.style.setProperty("--node-fill",null),document.querySelectorAll(".link.highlight").forEach(o=>o.classList.remove("highlight")),this.overWord=null};nodeClick=(t,r)=>{t.shiftKey?this.inputWords.includes(r.word)?this.input=this.input.replace(new RegExp(`^${r.word}
?$`,"m"),""):this.input=`${this.input}
${r.word}`:this.input=r.word};change=t=>{let r=t.target.name;switch(t.target.type){case"checkbox":{this[r]=t.target.checked;break}default:{this[r]=t.target.value;break}}};shouldUpdate=t=>(t.has("input")&&(this.inputWords=this.input.split(/\n/).filter(o=>o.trim())),["apiKey","showSimilarWords","similarWordCount","inputWords","layout","dimensions","projection"].some(o=>t.has(o))&&this.updateGraph(),!0);render=t=>so`
        <aside>
            <label>
                OpenAI API Key:
                <input name="apiKey" type="${this.showApiKey?"text":"password"}" @change=${this.change} />
                ${LS(this.showApiKey?"noeye":"eye",22)}
            </label>
            <label>
                <input name="showApiKey" type="checkbox" ?checked=${this.showApiKey} @change=${this.change} />
                Show API Key
            </label>
            <!-- <label>Dictionary: ...</label> -->
            <label>
                <input name="showSimilarWords" type="checkbox" @change=${this.change} value=${this.showSimilarWords} />
                Show
                <input
                    name="similarWordCount"
                    type="number"
                    value=${RS(this.similarWordCount)}
                    @change=${this.change}
                />
                nearest vocabulary words
            </label>
            <label>
                Input:
                <textarea name="input" @change=${this.change} .value=${this.input??""}></textarea>
            </label>
            <label>
                Cosine Similarity Scores (higher = more similar)
                <table class="scores">
                    <thead></thead>
                    <tr>
                        <th></th>
                        ${this.inputWords?.map(r=>so`<th>${r}</th>`)??""}
                    </tr>
                    <tbody>
                        ${this.similarWords?.map(r=>so`<tr>
                                <th>${r.word}</th>
                                ${r.scores.map(o=>so`<td>${o}</td>`)}
                            </tr>`)??""}
                    </tbody>
                </table>
            </label>
        </aside>
        <main><slot></slot></main>
    `};iu(hs,"styles",NS),iu(hs,"properties",{apiKey:String,input:String,inputWords:Array,showApiKey:Boolean,initialized:Object,words:Array,embeddings:Array,similarWords:Array,showSimilarWords:Boolean,similarWordCount:Number});customElements.define("word-stew",hs);})();
/*! Bundled license information:

@tensorflow/tfjs-core/dist/backends/backend.js:
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

@tensorflow/tfjs-core/dist/util_base.js:
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

@tensorflow/tfjs-core/dist/global_util.js:
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

@tensorflow/tfjs-core/dist/log.js:
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

@tensorflow/tfjs-core/dist/util.js:
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

@tensorflow/tfjs-core/dist/profiler.js:
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

@tensorflow/tfjs-core/dist/tape.js:
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

@tensorflow/tfjs-core/dist/tensor_format.js:
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

@tensorflow/tfjs-core/dist/tensor.js:
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

@tensorflow/tfjs-core/dist/types.js:
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

@tensorflow/tfjs-core/dist/tensor_util.js:
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

@tensorflow/tfjs-core/dist/engine.js:
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

@tensorflow/tfjs-core/dist/device_util.js:
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

@tensorflow/tfjs-core/dist/flags.js:
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

@tensorflow/tfjs-core/dist/tensor_util_env.js:
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

@tensorflow/tfjs-core/dist/ops/operation.js:
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

@tensorflow/tfjs-core/dist/ops/complex.js:
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

@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js:
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

@tensorflow/tfjs-core/dist/io/types.js:
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

@tensorflow/tfjs-core/dist/io/io_utils.js:
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

@tensorflow/tfjs-core/dist/io/router_registry.js:
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

@tensorflow/tfjs-core/dist/io/indexed_db.js:
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

@tensorflow/tfjs-core/dist/io/local_storage.js:
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

@tensorflow/tfjs-core/dist/io/model_management.js:
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

@tensorflow/tfjs-core/dist/platforms/platform_browser.js:
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

@tensorflow/tfjs-core/dist/platforms/platform_node.js:
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

@tensorflow/tfjs-core/dist/ops/buffer.js:
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

@tensorflow/tfjs-core/dist/ops/cast.js:
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

@tensorflow/tfjs-core/dist/ops/clone.js:
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

@tensorflow/tfjs-core/dist/ops/print.js:
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

@tensorflow/tfjs-core/dist/base_side_effects.js:
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

@tensorflow/tfjs-core/dist/globals.js:
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

@tensorflow/tfjs-core/dist/ops/add.js:
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

@tensorflow/tfjs-core/dist/ops/floorDiv.js:
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

@tensorflow/tfjs-core/dist/ops/div.js:
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

@tensorflow/tfjs-core/dist/ops/mul.js:
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

@tensorflow/tfjs-core/dist/ops/abs.js:
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

@tensorflow/tfjs-core/dist/ops/conv_util.js:
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

@tensorflow/tfjs-core/dist/ops/reshape.js:
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

@tensorflow/tfjs-core/dist/ops/mat_mul.js:
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

@tensorflow/tfjs-core/dist/ops/sigmoid.js:
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

@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
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

@tensorflow/tfjs-core/dist/ops/fill.js:
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

@tensorflow/tfjs-core/dist/ops/broadcast_util.js:
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

@tensorflow/tfjs-core/dist/ops/zeros_like.js:
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

@tensorflow/tfjs-core/dist/ops/dot.js:
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

@tensorflow/tfjs-core/dist/ops/elu.js:
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

@tensorflow/tfjs-core/dist/ops/axis_util.js:
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

@tensorflow/tfjs-core/dist/ops/max.js:
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

@tensorflow/tfjs-core/dist/ops/min.js:
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

@tensorflow/tfjs-core/dist/ops/pow.js:
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

@tensorflow/tfjs-core/dist/ops/scalar.js:
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

@tensorflow/tfjs-core/dist/ops/sqrt.js:
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

@tensorflow/tfjs-core/dist/ops/square.js:
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

@tensorflow/tfjs-core/dist/ops/sum.js:
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

@tensorflow/tfjs-core/dist/ops/norm.js:
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

@tensorflow/tfjs-core/dist/ops/imag.js:
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

@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
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

@tensorflow/tfjs-core/dist/gradients.js:
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

@tensorflow/tfjs-core/dist/ops/neg.js:
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

@tensorflow/tfjs-core/dist/ops/sub.js:
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

@tensorflow/tfjs-core/dist/ops/maximum.js:
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

@tensorflow/tfjs-core/dist/ops/zeros.js:
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

@tensorflow/tfjs-core/dist/ops/prelu.js:
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

@tensorflow/tfjs-core/dist/ops/real.js:
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

@tensorflow/tfjs-core/dist/ops/relu.js:
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

@tensorflow/tfjs-core/dist/ops/relu6.js:
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

@tensorflow/tfjs-core/dist/ops/step.js:
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

@tensorflow/tfjs-core/dist/ops/tensor2d.js:
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

@tensorflow/tfjs-core/dist/backends/where_impl.js:
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

@tensorflow/tfjs-core/dist/ops/transpose.js:
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

@tensorflow/tfjs-core/dist/ops/fused_util.js:
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

@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js:
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

@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js:
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

@tensorflow/tfjs-core/dist/ops/ops.js:
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

@tensorflow/tfjs-core/dist/serialization.js:
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

@tensorflow/tfjs-core/dist/optimizers/optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js:
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

@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js:
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

@tensorflow/tfjs-core/dist/io/browser_files.js:
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

@tensorflow/tfjs-core/dist/io/progress.js:
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

@tensorflow/tfjs-core/dist/io/weights_loader.js:
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

@tensorflow/tfjs-core/dist/io/http.js:
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

@tensorflow/tfjs-core/dist/io/passthrough.js:
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

@tensorflow/tfjs-core/dist/io/io.js:
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

@tensorflow/tfjs-core/dist/ops/slice_util.js:
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

@tensorflow/tfjs-core/dist/browser_util.js:
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

@tensorflow/tfjs-core/dist/ops/concat_util.js:
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

@tensorflow/tfjs-core/dist/ops/ragged_to_dense_util.js:
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

@tensorflow/tfjs-core/dist/ops/reduce_util.js:
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

@tensorflow/tfjs-core/dist/ops/rotate_util.js:
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

@tensorflow/tfjs-core/dist/ops/array_ops_util.js:
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

@tensorflow/tfjs-core/dist/ops/selu_util.js:
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

@tensorflow/tfjs-core/dist/ops/erf_util.js:
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

@tensorflow/tfjs-core/dist/backends/complex_util.js:
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

@tensorflow/tfjs-core/dist/backends/einsum_util.js:
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

@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js:
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

@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js:
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

@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js:
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

@tensorflow/tfjs-core/dist/ops/segment_util.js:
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

@tensorflow/tfjs-core/dist/backends/backend_util.js:
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

@tensorflow/tfjs-core/dist/backends/kernel_impls.js:
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

@tensorflow/tfjs-core/dist/base.js:
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

@tensorflow/tfjs-core/dist/index.js:
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

@tensorflow/tfjs-backend-webgl/dist/canvas_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/tex_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/webgl_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js:
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

@tensorflow/tfjs-backend-webgl/dist/glsl_version.js:
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

@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js:
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js:
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

@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js:
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

@tensorflow/tfjs-backend-cpu/dist/cpu_util.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/shared.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js:
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

@tensorflow/tfjs-backend-webgl/dist/packing_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/texture_manager.js:
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

@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js:
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

@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LeakyRelu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Prelu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js:
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

@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js:
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

@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sum_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/_FusedMatMul.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Abs.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Acos.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Acosh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js:
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

@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AddN.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/All.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Any.js:
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

@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/arg_min_max.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Asin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Asinh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atan.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atanh.js:
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

@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3DGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul.js:
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

@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js:
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

@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Slice.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchToSpaceND.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Bincount.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BroadcastArgs.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Ceil.js:
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

@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ClipByValue.js:
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

@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ComplexAbs.js:
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

@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropFilter.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropInput.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropFilterV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropInputV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cosh.js:
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

@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cum_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cumprod.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cumsum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DenseBincount.js:
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

@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthToSpace.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNative.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
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

@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Diag.js:
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

@tensorflow/tfjs-backend-webgl/dist/dilation_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Dilation2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Einsum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Elu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/EluGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Equal.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Erf.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Exp.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ExpandDims.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Expm1.js:
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

@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js:
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

@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Fill.js:
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

@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Floor.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FloorDiv.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FusedConv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FusedDepthwiseConv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GatherNd.js:
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

@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GatherV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Greater.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GreaterEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsFinite.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsInf.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsNaN.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Less.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LinSpace.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Log.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Log1p.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalAnd.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalNot.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalOr.js:
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

@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LRN.js:
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

@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LRNGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3DGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Min.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Minimum.js:
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

@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mod.js:
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

@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Softmax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Multinomial.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Neg.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js:
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

@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/OneHot.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ZerosLike.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/OnesLike.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Pack.js:
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

@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/PadV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Pow.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Prod.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedGather.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedTensorToTensor.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Range.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reciprocal.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Relu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Relu6.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinear.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinearGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighbor.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighborGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reverse.js:
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

@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Round.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Rsqrt.js:
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

@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/scatter_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ScatterNd.js:
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

@tensorflow/tfjs-backend-webgl/dist/search_sorted_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SearchSorted.js:
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

@tensorflow/tfjs-backend-webgl/dist/select_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Select.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Selu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sigmoid.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sign.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sinh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Softplus.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SpaceToBatchND.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseFillEmptyRows.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseReshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentMean.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentSum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseToDense.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SplitV.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sqrt.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Step.js:
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

@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StridedSlice.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringNGrams.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringSplit.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringToHashBucketFast.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tanh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tile.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/TopK.js:
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

@tensorflow/tfjs-backend-webgl/dist/transform_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Unpack.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/UnsortedSegmentSum.js:
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

@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js:
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

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
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
*/
//# sourceMappingURL=index-TE54RNGW.js.map
