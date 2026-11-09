(()=>{var Hv=Object.defineProperty;var Ot=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Gv=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Fh=(i,e)=>{for(var t in e)Hv(i,t,{get:e[t],enumerable:!0})};function Vv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i,e){return new Wv[i](e)}function d_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vm(){let i=Yo("canvas");return i.style.display="block",i}function f_(i){zs=i}function p_(){return zs}function $o(...i){let e="THREE."+i.shift();zs?zs("log",e,...i):console.log(e,...i)}function m_(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function be(...i){i=m_(i);let e="THREE."+i.shift();if(zs)zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=m_(i);let e="THREE."+i.shift();if(zs)zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hi(...i){let e=i.join(" ");e in rg||(rg[e]=!0,be(...i))}function g_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Mm(i,e){return(i%e+e)%e}function Xv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qv(i,e,t){return i!==e?(t-i)/(e-i):0}function pl(i,e,t){return(1-t)*i+t*e}function Yv(i,e,t,n){return pl(i,e,1-Math.exp(-t*n))}function $v(i,e=1){return e-Math.abs(Mm(i,e*2)-e)}function Zv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jv(i,e){return i+Math.random()*(e-i)}function Qv(i){return i*(.5-Math.random())}function eM(i){i!==void 0&&(og=i);let e=og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(i){return i*Lr}function nM(i){return i*Nr}function iM(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rM(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function of(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ir(i,e){if(e.constructor===Float32Array)return i;let t=of(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wn(i,e){if(e.constructor===Float32Array)return i;let t=of(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function oM(){let i={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Ho(s.r),s.g=Ho(s.g),s.b=Ho(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xo]:{primaries:e,whitePoint:n,transfer:qo,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Xf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}function $f(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function np(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);let a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function gM(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Wn(i){Math.abs(i)>65504&&be("DataUtils.toHalfFloat(): Value out of range."),i=Ze(i,-65504,65504),ds.floatView[0]=i;let e=ds.uint32View[0],t=e>>23&511;return ds.baseTable[t]+((e&8388607)>>ds.shiftTable[t])}function hl(i){let e=i>>10;return ds.uint32View[0]=ds.mantissaTable[ds.offsetTable[e]+(i&1023)]+ds.exponentTable[e],ds.floatView[0]}function _g(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=pi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function qh(i,e,t,n,s,r){Lo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(sl.x=r*Lo.x-s*Lo.y,sl.y=s*Lo.x+r*Lo.y):sl.copy(Lo),i.copy(e),i.x+=sl.x,i.y+=sl.y,i.applyMatrix4(v_)}function bM(i,e,t,n,s,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ys,a),l===null)return null;tu.copy(a),tu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tu);return c<t.near||c>t.far?null:{distance:c,point:tu.clone(),object:i}}function nu(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Jh),i.getVertexPosition(l,jh),i.getVertexPosition(c,Qh);let h=bM(i,e,t,n,Jh,jh,Qh,Tg);if(h){let d=new R;Ei.getBarycoord(Tg,Jh,jh,Qh,d),s&&(h.uv=Ei.getInterpolatedAttribute(s,a,l,c,d,new re)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,a,l,c,d,new re)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Ei.getNormal(Jh,jh,Qh,u.normal),h.face=u,h.barycoord=d}return h}function up(i,e){return i-e}function RM(i,e){return i.z-e.z}function CM(i,e){return e.z-i.z}function NM(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ki(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}function cu(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Bu.fromBufferAttribute(a,s),ku.fromBufferAttribute(a,r),t.distanceSqToSegment(Bu,ku,pp,Fg)>n)return;pp.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pp);if(!(c<e.near||c>e.far))return{distance:c,point:Fg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function zg(i,e,t,n,s,r,o){let a=Ap.distanceSqToPoint(i);if(a<t){let l=new R;Ap.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function bm(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Vg(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function UM(i,e){let t=1-i;return t*t*e}function FM(i,e){return 2*(1-i)*i*e}function OM(i,e){return i*i*e}function ml(i,e,t,n){return UM(i,e)+FM(i,t)+OM(i,n)}function BM(i,e){let t=1-i;return t*t*t*e}function kM(i,e){let t=1-i;return 3*t*t*i*e}function zM(i,e){return 3*(1-i)*i*i*e}function HM(i,e){return i*i*i*e}function gl(i,e,t,n,s){return BM(i,e)+kM(i,t)+zM(i,n)+HM(i,s)}function GM(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=M_(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=YM(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Vl(r,o,t,a,l,c,0),o}function M_(i,e,t,n,s){let r;if(s===sS(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Wg(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Wg(o/n|0,i[o],i[o+1],r);return r&&ha(r,r.next)&&(Xl(r),r=r.next),r}function qr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ha(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Xl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vl(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jM(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?WM(i,n,s,r):VM(i)){e.push(l.i,i.i,c.i),Xl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=XM(qr(i),e),Vl(i,e,t,n,s,r,2)):o===2&&qM(i,e,t,n,s,r):Vl(qr(i),e,t,n,s,r,1);break}}}function VM(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ul(s,a,r,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function WM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=Rp(f,p,e,t,n),y=Rp(x,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ul(a,h,l,d,c,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ul(a,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ul(a,h,l,d,c,u,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ul(a,h,l,d,c,u,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function XM(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ha(n,s)&&b_(n,t,t.next,s)&&Wl(n,s)&&Wl(s,n)&&(e.push(n.i,t.i,s.i),Xl(t),Xl(t.next),t=i=s),t=t.next}while(t!==i);return qr(t)}function qM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tS(o,a)){let l=T_(o,a);o=qr(o,o.next),l=qr(l,l.next),Vl(o,e,t,n,s,r,0),Vl(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function YM(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=M_(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(eS(c))}s.sort($M);for(let r=0;r<s.length;r++)t=ZM(s[r],t);return t}function $M(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ZM(i,e){let t=KM(i,e);if(!t)return e;let n=T_(t,i);return qr(n,n.next),qr(t,t.next)}function KM(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ha(i,t))return t;do{if(ha(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&S_(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Wl(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&JM(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function JM(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function jM(i,e,t,n){let s=i;do s.z===0&&(s.z=Rp(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,QM(s)}function QM(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Rp(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function eS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function S_(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ul(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&S_(i,e,t,n,s,r,o,a)}function tS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!nS(i,e)&&(Wl(i,e)&&Wl(e,i)&&iS(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||ha(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ha(i,e){return i.x===e.x&&i.y===e.y}function b_(i,e,t,n){let s=gu(Ht(i,e,t)),r=gu(Ht(i,e,n)),o=gu(Ht(t,n,i)),a=gu(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&mu(i,t,e)||r===0&&mu(i,n,e)||o===0&&mu(t,i,n)||a===0&&mu(t,e,n))}function mu(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gu(i){return i>0?1:i<0?-1:0}function nS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&b_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wl(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function iS(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function T_(i,e){let t=Cp(i.i,i.x,i.y),n=Cp(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wg(i,e,t,n){let s=Cp(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cp(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sS(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Xg(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function oS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function aS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Yg(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function ao(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Zg(s))s.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=ao(i[t]);for(let s in n)e[s]=n[s]}return e}function Zg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tm(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}function Ti(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function E_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ip(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function w_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function uS(i,e,t,n,s=30){let r=i.clone();r.name=e;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=Ti(d,c.times.constructor),c.values=Ti(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function dS(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=a.times.length-1,x;if(r<=a.times[0]){let g=h,y=d-h;x=a.values.slice(g,y)}else if(r>=a.times[p]){let g=p*d+h,y=g+d-h;x=a.values.slice(g,y)}else{let g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new mn().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let g=0;g<m;++g){let y=g*f+u;if(l==="quaternion")mn.multiplyQuaternionsFlat(c.values,y,x,0,c.values,y);else{let M=f-u*2;for(let v=0;v<M;++v)c.values[y+v]-=x[v]}}}return i.blendMode=ef,i}function A_(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function fS(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function pS(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=A_(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=fS(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Kg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Jg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function mS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return _a;case"color":return xa;case"quaternion":return Kr;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mS(i.type);if(i.times===void 0){let n=[],s=[];w_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),zo(i.settings)&&(t.settings={inTangents:Ti(i.settings.inTangents,Float32Array),outTangents:Ti(i.settings.outTangents,Float32Array)}),t}function jg(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function _S(){this._document.hidden===!1&&this.reset()}function hx(i,e){return i.distance-e.distance}function Op(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Op(r[o],e,t,!0)}}function R_(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...R_(i.children[t]));return e}function Zt(i,e,t,n,s,r,o){bu.set(s,r,o).unproject(n);let a=e[i];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],bu.x,bu.y,bu.z)}}function NS(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function US(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function FS(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function af(i,e,t,n){let s=OS(n);switch(t){case jd:return i*e;case Cc:return i*e/s.components*s.byteLength;case Ra:return i*e/s.components*s.byteLength;case vs:return i*e*2/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case Qd:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case Ic:return i*e*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Uc:return Math.max(i,16)*Math.max(e,8)/4;case Lc:case Nc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Oc:case kc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Da:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rh:case oh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Na:case ah:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OS(i){switch(i){case Bn:case $d:return{byteLength:1,components:1};case oo:case Zd:case fi:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case ii:case wc:case An:return{byteLength:4,components:1};case Kd:case Jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Bp,yx,vx,kp,Ud,zp,Mx,Sx,$s,Hp,io,ys,gn,Gt,Zs,so,ba,Fd,Od,Gp,bx,Ks,Vp,Wp,Xp,qp,Yp,$p,Zp,Kp,Bd,kd,Jp,jp,Qp,em,tm,nm,im,sm,rm,xl,_l,yl,Dr,vl,Ml,Sl,bl,Ta,om,am,Ii,zd,Hd,Gd,Vd,Wd,Xd,qd,wu,lm,Ec,Yi,Js,Ea,wa,Bs,Nn,Go,qt,Yd,Tx,ro,Ex,kt,Aa,wx,di,Ax,Bn,$d,Zd,oo,wc,ii,An,fi,Ac,Rc,js,Kd,Jd,jd,Qd,Fn,Gi,$i,Cc,Ra,vs,Pc,Rx,Ic,Ca,Pa,Ia,La,Lc,Dc,Nc,Uc,Fc,Oc,Bc,kc,zc,Da,Hc,Gc,Vc,Wc,Xc,qc,Yc,$c,Zc,Kc,Jc,jc,Qc,eh,th,nh,ih,sh,rh,oh,Na,ah,cm,hm,um,Vo,Tl,dl,Au,Fs,Os,Wo,lh,ef,Cx,Px,Ix,dm,Lx,Dx,Nx,Zi,fm,Ki,_n,Xo,qo,Tt,Ux,Fx,Ox,Bx,fl,kx,zx,Hx,Gx,Vx,Wx,Xx,qx,Yx,$x,Zx,Kx,Jx,pm,mm,gm,xm,tf,_m,ym,nf,sf,ch,jx,Qx,e_,t_,n_,i_,s_,r_,o_,rf,Xn,ks,a_,l_,c_,h_,u_,Wv,rg,zs,x_,qn,bn,og,Lr,Nr,__,Cm,re,mn,Pm,R,Vf,ag,Im,Qe,Wf,lg,cg,mt,yo,El,aM,ti,Ru,lM,qf,Yt,Lm,At,Zo,Rn,Ur,Cu,Fr,Pu,Nd,Je,vo,Mi,cM,hM,Ps,Oh,Qn,hg,ug,hi,Or,uM,dg,Mo,os,Bh,Qa,dM,fM,fg,pg,mg,gg,pM,So,Yf,yt,Pt,mM,Br,y_,Is,kh,fe,Tn,wl,kr,zr,Si,as,Zf,ls,bo,To,xg,Kf,Jf,jf,Qf,ep,tp,Ei,an,cs,bi,zh,Eo,wo,Ao,Ls,Ds,vr,el,Hh,Gh,Mr,ds,Iu,en,Vh,xM,It,Lu,Du,Nu,Uu,Ko,Fu,Jo,Ou,Ae,_M,tl,ip,tn,yM,ai,sp,Ro,ei,nl,pn,$e,Hr,Dn,Hs,rp,vM,MM,li,SM,nn,jo,Co,il,Po,Io,Lo,sl,v_,Wh,rl,Xh,yg,op,vg,Al,Yh,Mg,Rl,hs,ap,$h,Zh,ps,Ft,Sg,Sr,Kh,bg,Jh,jh,Qh,lp,eu,Tg,tu,qe,ol,Eg,wg,TM,Ag,iu,cp,Rg,hp,Cl,Qo,Un,Cg,EM,Pl,ms,Do,Pg,su,Ig,wM,al,ll,Gr,br,AM,ru,Vi,Lg,ea,wp,Vn,PM,IM,LM,ou,Tr,dp,Dg,Ng,DM,fp,En,au,Il,sn,Bu,ku,Ug,cl,lu,pp,Fg,Ai,Og,Bg,ni,Vr,ta,kg,Ap,hu,uu,Ll,Dl,zu,Hu,Wr,Gu,Vu,Gs,na,Wu,Wi,ia,sa,Ri,Nl,Ul,gs,Vs,xs,Fl,du,fu,mp,pu,Ol,Yn,Xr,Bl,Hg,Gg,gp,xp,_p,kl,ra,zl,oa,Hl,aa,la,ca,Xu,Gl,Ws,Xs,Pp,ci,ql,rS,Yr,Yl,ua,yn,$r,$l,Ci,Zl,Kl,Jl,jl,Ql,$g,ec,Em,cS,hS,$n,da,fa,tc,nc,ic,sc,Cn,pa,ma,rc,oc,qu,_s,ac,ga,lc,cc,On,Xi,xa,Zr,hc,Kr,qi,_a,qs,wi,ya,wm,vn,us,Lp,ui,Yu,$u,No,Ys,Zu,Ku,Ju,Pi,Jr,yp,Qg,ex,jr,xu,_u,zi,Qr,Ns,tx,nx,Kt,Dp,uc,Np,dc,eo,Up,to,fc,pc,va,mc,ix,gc,Ma,xc,_c,vp,ju,xS,sx,rx,Mp,Qu,yu,Sa,ed,ox,ax,Er,td,Uo,Fo,no,yc,vc,wr,Sp,yS,Ar,Rr,nd,Mc,Cr,lx,vS,Pr,id,sd,Sc,Am,MS,Rm,SS,bS,TS,ES,wS,AS,RS,Fp,wt,rd,bc,CS,od,ad,ld,PS,cd,hd,ud,cx,dd,fd,pd,md,Dm,gd,ux,Tc,dx,vu,Oo,Bo,bp,IS,LS,xd,fx,_d,Us,Mu,Tp,yd,vd,DS,px,mx,Md,Sd,bd,gx,Su,xx,Td,bu,Xt,Ed,Tu,wd,Ad,Rd,_x,Eu,Ep,Cd,Pd,Id,Ld,Dd,Nm=Ot(()=>{Bp="187",yx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kp=0,Ud=1,zp=2,Mx=3,Sx=0,$s=1,Hp=2,io=3,ys=0,gn=1,Gt=2,Zs=0,so=1,ba=2,Fd=3,Od=4,Gp=5,bx=6,Ks=100,Vp=101,Wp=102,Xp=103,qp=104,Yp=200,$p=201,Zp=202,Kp=203,Bd=204,kd=205,Jp=206,jp=207,Qp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,xl=0,_l=1,yl=2,Dr=3,vl=4,Ml=5,Sl=6,bl=7,Ta=0,om=1,am=2,Ii=0,zd=1,Hd=2,Gd=3,Vd=4,Wd=5,Xd=6,qd=7,wu="attached",lm="detached",Ec=300,Yi=301,Js=302,Ea=303,wa=304,Bs=1e3,Nn=1001,Go=1002,qt=1003,Yd=1004,Tx=1004,ro=1005,Ex=1005,kt=1006,Aa=1007,wx=1007,di=1008,Ax=1008,Bn=1009,$d=1010,Zd=1011,oo=1012,wc=1013,ii=1014,An=1015,fi=1016,Ac=1017,Rc=1018,js=1020,Kd=35902,Jd=35899,jd=1021,Qd=1022,Fn=1023,Gi=1026,$i=1027,Cc=1028,Ra=1029,vs=1030,Pc=1031,Rx=1032,Ic=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,Lc=35840,Dc=35841,Nc=35842,Uc=35843,Fc=36196,Oc=37492,Bc=37496,kc=37488,zc=37489,Da=37490,Hc=37491,Gc=37808,Vc=37809,Wc=37810,Xc=37811,qc=37812,Yc=37813,$c=37814,Zc=37815,Kc=37816,Jc=37817,jc=37818,Qc=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,oh=36284,Na=36285,ah=36286,cm=2200,hm=2201,um=2202,Vo=2300,Tl=2301,dl=2302,Au=2303,Fs=2400,Os=2401,Wo=2402,lh=2500,ef=2501,Cx=0,Px=1,Ix=2,dm=3200,Lx=3201,Dx=3202,Nx=3203,Zi=0,fm=1,Ki="",_n="srgb",Xo="srgb-linear",qo="linear",Tt="srgb",Ux="",Fx="rg",Ox="ga",Bx=0,fl=7680,kx=7681,zx=7682,Hx=7683,Gx=34055,Vx=34056,Wx=5386,Xx=512,qx=513,Yx=514,$x=515,Zx=516,Kx=517,Jx=518,pm=519,mm=512,gm=513,xm=514,tf=515,_m=516,ym=517,nf=518,sf=519,ch=35044,jx=35048,Qx=35040,e_=35045,t_=35049,n_=35041,i_=35046,s_=35050,r_=35042,o_="100",rf="300 es",Xn=2e3,ks=2001,a_={COMPUTE:"compute",RENDER:"render"},l_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},c_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},h_={TEXTURE_COMPARE:"depthTextureCompare"},u_={NONE:0,SHARED:1,FULL:2};Wv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};rg={},zs=null;x_={[xl]:xl,[yl]:Sl,[vl]:vl,[Dr]:Ml,[_l]:_l,[Sl]:yl,[bl]:bl,[Ml]:Dr},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],og=1234567,Lr=Math.PI/180,Nr=180/Math.PI;__={DEG2RAD:Lr,RAD2DEG:Nr,generateUUID:pi,clamp:Ze,euclideanModulo:Mm,mapLinear:Xv,inverseLerp:qv,lerp:pl,damp:Yv,pingpong:$v,smoothstep:Zv,smootherstep:Kv,randInt:Jv,randFloat:jv,randFloatSpread:Qv,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:sM,floorPowerOfTwo:Sm,setQuaternionFromProperEuler:rM,normalize:wn,denormalize:Ir},Cm=class Cm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cm.prototype.isVector2=!0;re=Cm,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pm=class Pm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ag.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pm.prototype.isVector3=!0;R=Pm,Vf=new R,ag=new mn,Im=class Im{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],M=s[4],v=s[7],b=s[2],T=s[5],_=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*M+l*T,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+d*b,r[4]=c*m+h*M+d*T,r[7]=c*g+h*v+d*_,r[2]=u*x+f*y+p*b,r[5]=u*m+f*M+p*T,r[8]=u*g+f*v+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wf.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wf.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;Qe=Im,Wf=new Qe,lg=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt=oM();El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yo===void 0&&(yo=Yo("canvas")),yo.width=e.width,yo.height=e.height;let s=yo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},aM=0,ti=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xf(s[o].image)):r.push(Xf(s[o]))}else r=Xf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Ru=class extends ti{constructor(e=null){Hi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},lM=0,qf=new R,Yt=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=kt,o=di,a=Fn,l=Bn,c=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=pi(),this.name="",this.source=new ti(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Ec;Yt.DEFAULT_ANISOTROPY=1;Lm=class Lm{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,T=(h+u)/4,_=(d+x)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=_/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;At=Lm,Zo=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ti(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Cu=class extends Rn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ur(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Fr=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Pu=class extends Rn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Fr(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Nd=class Nd{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nd().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vo.setFromMatrixColumn(e,0).length(),r=1/vo.setFromMatrixColumn(e,1).length(),o=1/vo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,hM)}lookAt(e,t,n){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ps.crossVectors(n,Qn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ps.crossVectors(n,Qn)),Ps.normalize(),Oh.crossVectors(Qn,Ps),s[0]=Ps.x,s[4]=Oh.x,s[8]=Qn.x,s[1]=Ps.y,s[5]=Oh.y,s[9]=Qn.y,s[2]=Ps.z,s[6]=Oh.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],b=n[15],T=s[0],_=s[4],S=s[8],P=s[12],A=s[1],I=s[5],U=s[9],k=s[13],L=s[2],B=s[6],V=s[10],z=s[14],ie=s[3],X=s[7],J=s[11],se=s[15];return r[0]=o*T+a*A+l*L+c*ie,r[4]=o*_+a*I+l*B+c*X,r[8]=o*S+a*U+l*V+c*J,r[12]=o*P+a*k+l*z+c*se,r[1]=h*T+d*A+u*L+f*ie,r[5]=h*_+d*I+u*B+f*X,r[9]=h*S+d*U+u*V+f*J,r[13]=h*P+d*k+u*z+f*se,r[2]=p*T+x*A+m*L+g*ie,r[6]=p*_+x*I+m*B+g*X,r[10]=p*S+x*U+m*V+g*J,r[14]=p*P+x*k+m*z+g*se,r[3]=y*T+M*A+v*L+b*ie,r[7]=y*_+M*I+v*B+b*X,r[11]=y*S+M*U+v*V+b*J,r[15]=y*P+M*k+v*z+b*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*u,M=a*f-c*d,v=a*u-l*d,b=o*f-c*h,T=o*u-l*h,_=o*d-a*h;return t*(x*y-m*M+g*v)-n*(p*y-m*b+g*T)+s*(p*M-x*b+g*_)-r*(p*v-x*T+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,M=t*l-s*o,v=t*c-r*o,b=n*l-s*a,T=n*c-r*a,_=s*c-r*l,S=h*x-d*p,P=h*m-u*p,A=h*g-f*p,I=d*m-u*x,U=d*g-f*x,k=u*g-f*m,L=y*k-M*U+v*I+b*A-T*P+_*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(a*k-l*U+c*I)*B,e[1]=(s*U-n*k-r*I)*B,e[2]=(x*_-m*T+g*b)*B,e[3]=(u*T-d*_-f*b)*B,e[4]=(l*A-o*k-c*P)*B,e[5]=(t*k-s*A+r*P)*B,e[6]=(m*v-p*_-g*M)*B,e[7]=(h*_-u*v+f*M)*B,e[8]=(o*U-a*A+c*S)*B,e[9]=(n*A-t*U-r*S)*B,e[10]=(p*T-x*v+g*y)*B,e[11]=(d*v-h*T-f*y)*B,e[12]=(a*P-o*I-l*S)*B,e[13]=(t*I-n*P+s*S)*B,e[14]=(x*M-p*b-m*y)*B,e[15]=(h*b-d*M+u*y)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,M=l*h,v=l*d,b=n.x,T=n.y,_=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+v)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+M)*_,s[9]=(m-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vo.set(s[0],s[1],s[2]).length(),a=vo.set(s[4],s[5],s[6]).length(),l=vo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mi.copy(this);let c=1/o,h=1/a,d=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ks)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ks)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nd.prototype.isMatrix4=!0;Je=Nd,vo=new R,Mi=new Je,cM=new R(0,0,0),hM=new R(1,1,1),Ps=new R,Oh=new R,Qn=new R,hg=new Je,ug=new mn,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uM=0,dg=new R,Mo=new mn,os=new Je,Bh=new R,Qa=new R,dM=new R,fM=new mn,fg=new R(1,0,0),pg=new R(0,1,0),mg=new R(0,0,1),gg={type:"added"},pM={type:"removed"},So={type:"childadded",child:null},Yf={type:"childremoved",child:null},yt=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new hi,n=new mn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,t){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bh.copy(e):Bh.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Qa,Bh,this.up):os.lookAt(Bh,Qa,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(os),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),So.child=e,this.dispatchEvent(So),So.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pM),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mM={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},kh={h:0,s:0,l:0};fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Mm(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$f(o,r,e+1/3),this.g=$f(o,r,e),this.b=$f(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=y_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return mt.workingToColorSpace(Tn.copy(this),e),Math.round(Ze(Tn.r*255,0,255))*65536+Math.round(Ze(Tn.g*255,0,255))*256+Math.round(Ze(Tn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=_n){mt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(kh);let n=pl(Is.h,kh.h,t),s=pl(Is.s,kh.s,t),r=pl(Is.l,kh.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new fe;fe.NAMES=y_;wl=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},kr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zr=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new R,as=new R,Zf=new R,ls=new R,bo=new R,To=new R,xg=new R,Kf=new R,Jf=new R,jf=new R,Qf=new At,ep=new At,tp=new At,Ei=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Si.subVectors(e,t),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Si.subVectors(s,t),as.subVectors(n,t),Zf.subVectors(e,t);let o=Si.dot(Si),a=Si.dot(as),l=Si.dot(Zf),c=as.dot(as),h=as.dot(Zf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Qf.setScalar(0),ep.setScalar(0),tp.setScalar(0),Qf.fromBufferAttribute(e,t),ep.fromBufferAttribute(e,n),tp.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Qf,r.x),o.addScaledVector(ep,r.y),o.addScaledVector(tp,r.z),o}static isFrontFacing(e,t,n,s){return Si.subVectors(n,t),as.subVectors(e,t),Si.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Si.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;bo.subVectors(s,n),To.subVectors(r,n),Kf.subVectors(e,n);let l=bo.dot(Kf),c=To.dot(Kf);if(l<=0&&c<=0)return t.copy(n);Jf.subVectors(e,s);let h=bo.dot(Jf),d=To.dot(Jf);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(bo,o);jf.subVectors(e,r);let f=bo.dot(jf),p=To.dot(jf);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(To,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return xg.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(xg,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(bo,o).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zh.copy(n.boundingBox)),zh.applyMatrix4(e.matrixWorld),this.union(zh)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Hh.subVectors(this.max,el),Eo.subVectors(e.a,el),wo.subVectors(e.b,el),Ao.subVectors(e.c,el),Ls.subVectors(wo,Eo),Ds.subVectors(Ao,wo),vr.subVectors(Eo,Ao);let t=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-vr.z,vr.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,vr.z,0,-vr.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-vr.y,vr.x,0];return!np(t,Eo,wo,Ao,Hh)||(t=[1,0,0,0,1,0,0,0,1],!np(t,Eo,wo,Ao,Hh))?!1:(Gh.crossVectors(Ls,Ds),t=[Gh.x,Gh.y,Gh.z],np(t,Eo,wo,Ao,Hh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cs=[new R,new R,new R,new R,new R,new R,new R,new R],bi=new R,zh=new an,Eo=new R,wo=new R,Ao=new R,Ls=new R,Ds=new R,vr=new R,el=new R,Hh=new R,Gh=new R,Mr=new R;ds=gM();Iu=class{static toHalfFloat(e){return Wn(e)}static fromHalfFloat(e){return hl(e)}},en=new R,Vh=new re,xM=0,It=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=e!==void 0?of(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vh.fromBufferAttribute(this,t),Vh.applyMatrix3(e),this.setXY(t,Vh.x,Vh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ir(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wn(e,this.array)}},Lu=class extends It{constructor(e,t,n){super(new Int8Array(e),t,n)}},Du=class extends It{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Nu=class extends It{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Uu=class extends It{constructor(e,t,n){super(new Int16Array(e),t,n)}},Ko=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fu=class extends It{constructor(e,t,n){super(new Int32Array(e),t,n)}},Jo=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ou=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=hl(this.array[e*this.itemSize]);return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=Wn(t),this}getY(e){let t=hl(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=Wn(t),this}getZ(e){let t=hl(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=Wn(t),this}getW(e){let t=hl(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=Wn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=Wn(t),this.array[e+1]=Wn(n),this.array[e+2]=Wn(s),this.array[e+3]=Wn(r),this}},Ae=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},_M=new an,tl=new R,ip=new R,tn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_M.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);let t=tl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(tl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ip.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(ip)),this.expandByPoint(tl.copy(e.center).sub(ip))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yM=0,ai=new Je,sp=new yt,Ro=new R,ei=new an,nl=new an,pn=new R,$e=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?Jo:Ko)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return sp.lookAt(e),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];nl.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(ei.min,nl.min),ei.expandByPoint(pn),pn.addVectors(ei.max,nl.max),ei.expandByPoint(pn)):(ei.expandByPoint(nl.min),ei.expandByPoint(nl.max))}ei.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),pn.add(Ro)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new It(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;let h=new R,d=new R,u=new R,f=new re,p=new re,x=new re,m=new R,g=new R;function y(P,A,I){c[P]=c[A]=c[I]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(U),a[P].add(m),a[A].add(m),a[I].add(m),l[P].add(g),l[A].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,A=M.length;P<A;++P){let I=M[P],U=I.start,k=I.count;for(let L=U,B=U+k;L<B;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new R,b=new R,T=new R,_=new R;function S(P){T.fromBufferAttribute(s,P),_.copy(T);let A=a[P];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(_,A);let U=b.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,U)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new It(u,h,d)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_g(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_g(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Dn=new R,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?of(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ir(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wn(e,this.data.array)}},rp=new R,vM=new R,MM=new Qe,li=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rp.subVectors(n,t).cross(vM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(rp),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||MM.getNormalMatrix(e),s=this.coplanarPoint(rp).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},SM=0,nn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=so,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fl,this.stencilZFail=fl,this.stencilZPass=fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new li().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jo=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},il=new R,Po=new R,Io=new R,Lo=new re,sl=new re,v_=new Je,Wh=new R,rl=new R,Xh=new R,yg=new re,op=new re,vg=new re,Al=class extends yt{constructor(e=new jo){if(super(),this.isSprite=!0,this.type="Sprite",Co===void 0){Co=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hr(t,5);Co.setIndex([0,1,2,0,2,3]),Co.setAttribute("position",new Hs(n,3,0,!1)),Co.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Co,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Po.setFromMatrixScale(this.matrixWorld),v_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Po.multiplyScalar(-Io.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qh(Wh.set(-.5,-.5,0),Io,o,Po,s,r),qh(rl.set(.5,-.5,0),Io,o,Po,s,r),qh(Xh.set(.5,.5,0),Io,o,Po,s,r),yg.set(0,0),op.set(1,0),vg.set(1,1);let a=e.ray.intersectTriangle(Wh,rl,Xh,!1,il);if(a===null&&(qh(rl.set(-.5,.5,0),Io,o,Po,s,r),op.set(0,1),a=e.ray.intersectTriangle(Wh,Xh,rl,!1,il),a===null))return;let l=e.ray.origin.distanceTo(il);l<e.near||l>e.far||t.push({distance:l,point:il.clone(),uv:Ei.getInterpolation(il,Wh,rl,Xh,yg,op,vg,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};Yh=new R,Mg=new R,Rl=class extends yt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Yh.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Yh);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Yh.setFromMatrixPosition(e.matrixWorld),Mg.setFromMatrixPosition(this.matrixWorld);let n=Yh.distanceTo(Mg)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},hs=new R,ap=new R,$h=new R,Zh=new R,ps=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ap.copy(e).add(t).multiplyScalar(.5),$h.copy(t).sub(e).normalize(),Zh.copy(this.origin).sub(ap);let r=e.distanceTo(t)*.5,o=-this.direction.dot($h),a=Zh.dot(this.direction),l=-Zh.dot($h),c=Zh.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ap).addScaledVector($h,u),f}intersectSphere(e,t){if(e.radius<0)return null;hs.subVectors(e.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(h),_,S,P,A,I,U,k,L,B,V,z,ie;if(v>=b&&v>=T?(P=l,U=d,B=p,ie=g,l>=0?(_=c,S=h,A=u,I=f,k=x,L=m,V=y,z=M):(_=h,S=c,A=f,I=u,k=m,L=x,V=M,z=y)):b>=T?(P=c,U=u,B=x,ie=y,c>=0?(_=h,S=l,A=f,I=d,k=m,L=p,V=M,z=g):(_=l,S=h,A=d,I=f,k=p,L=m,V=g,z=M)):(P=h,U=f,B=m,ie=M,h>=0?(_=l,S=c,A=d,I=u,k=p,L=x,V=g,z=y):(_=c,S=l,A=u,I=d,k=x,L=p,V=y,z=g)),P===0)return null;let X=_/P,J=S/P,se=1/P,Ce=A-X*U,Ie=I-J*U,Z=k-X*B,he=L-J*B,Pe=V-X*ie,He=z-J*ie,me=Pe*he-He*Z,Fe=Ce*He-Ie*Pe,Mt=Z*Ie-he*Ce;if(s){if(me<0||Fe<0||Mt<0)return null}else if((me<0||Fe<0||Mt<0)&&(me>0||Fe>0||Mt>0))return null;let Be=me+Fe+Mt;if(Be===0)return null;let it=se*(me*U+Fe*B+Mt*ie);return(Be>0?it<0:it>0)?null:this.at(it/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sg=new Je,Sr=new ps,Kh=new tn,bg=new R,Jh=new R,jh=new R,Qh=new R,lp=new R,eu=new R,Tg=new R,tu=new R,qe=class extends yt{constructor(e=new $e,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){eu.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(lp.fromBufferAttribute(d,e),o?eu.addScaledVector(lp,h):eu.addScaledVector(lp.sub(t),h))}t.add(eu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kh.copy(n.boundingSphere),Kh.applyMatrix4(r),Sr.copy(e.ray).recast(e.near),!(Kh.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Kh,bg)===null||Sr.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Sg.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(Sg),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=M;v<b;v+=3){let T=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);s=nu(this,g,e,n,c,h,d,T,_,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=nu(this,o,e,n,c,h,d,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=M;v<b;v+=3){let T=v,_=v+1,S=v+2;s=nu(this,g,e,n,c,h,d,T,_,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,v=m+2;s=nu(this,o,e,n,c,h,d,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};ol=new At,Eg=new At,wg=new At,TM=new At,Ag=new Je,iu=new R,cp=new tn,Rg=new Je,hp=new ps,Cl=class extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,iu),this.boundingBox.expandByPoint(iu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,iu),this.boundingSphere.expandByPoint(iu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cp.copy(this.boundingSphere),cp.applyMatrix4(s),e.ray.intersectsSphere(cp)!==!1&&(Rg.copy(s).invert(),hp.copy(e.ray).applyMatrix4(Rg),!(this.boundingBox!==null&&hp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Eg.fromBufferAttribute(s.attributes.skinIndex,e),wg.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ol.copy(t),t.set(0,0,0,0)):(ol.set(t.x,t.y,t.z,1),t.set(0,0,0)),ol.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=wg.getComponent(r);if(o!==0){let a=Eg.getComponent(r);Ag.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TM.copy(ol).applyMatrix4(Ag),o)}}return t.isVector4&&(t.w=ol.w),t.applyMatrix4(this.bindMatrixInverse)}},Qo=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Un=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cg=new Je,EM=new Je,Pl=class i{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:EM;Cg.multiplyMatrices(a,t[r]),Cg.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Un(t,e,e,Fn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(be("Skeleton: No bone found with UUID:",r),o=new Qo),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ms=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Do=new Je,Pg=new Je,su=[],Ig=new an,wM=new Je,al=new qe,ll=new tn,Gr=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Do),Ig.copy(e.boundingBox).applyMatrix4(Do),this.boundingBox.union(Ig)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Do),ll.copy(e.boundingSphere).applyMatrix4(Do),this.boundingSphere.union(ll)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(al.geometry=this.geometry,al.material=this.material,al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(n),e.ray.intersectsSphere(ll)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Do),Pg.multiplyMatrices(n,Do),al.matrixWorld=Pg,al.raycast(e,su);for(let o=0,a=su.length;o<a;o++){let l=su[o];l.instanceId=r,l.object=this,t.push(l)}su.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Un(new Float32Array(s*this.count),s,this.count,Cc,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new tn,AM=new re(.5,.5),ru=new R,Vi=class{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-y).normalize(),s[1].setComponents(c+o,f+h,g+p,b+y).normalize(),s[2].setComponents(c+a,f+d,g+x,b+M).normalize(),s[3].setComponents(c-a,f-d,g-x,b-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(s[4].setComponents(c-l,f-u,g-m,b-v).normalize(),t===Xn)s[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(t===ks)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);let t=AM.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ru.x=s.normal.x>0?e.max.x:e.min.x,ru.y=s.normal.y>0?e.max.y:e.min.y,ru.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lg=new Je,ea=class i{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Lg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Vi),n[s].setFromProjectionMatrix(Lg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Vi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};wp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},Vn=new Je,PM=new fe(1,1,1),IM=new Vi,LM=new ea,ou=new an,Tr=new tn,dp=new R,Dg=new R,Ng=new R,DM=new R,fp=new wp,En=new qe,au=[];Il=class extends qe{constructor(e,t,n=t*2,s){super(new $e,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(e),this._mergedDrawStarts=new Int32Array(e),this._mergedDrawInstanceCounts=new Int32Array(e),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Un(t,e,e,Fn,An);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Un(t,e,e,Ra,ii);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Un(t,e,e,Fn,An);n.colorSpace=mt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new It(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new It(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,ou).applyMatrix4(Vn),e.union(ou)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Tr).applyMatrix4(Vn),e.union(Tr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(up),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Vn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(PM.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(up),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let d=t.getAttribute(h),u=n.getAttribute(h);NM(d,u,l);let f=d.itemSize;for(let p=d.count,x=c;p<x;p++){let m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){let h=a.indexStart,d=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=e-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:x,itemSize:m}=p;x.copyWithin(e*m,h*m,(h+d)*m),p.addUpdateRange(e*m,d*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new an,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(dp.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new tn;this.getBoundingBoxAt(e,ou),ou.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;o&&(d=o.getX(d)),dp.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(dp))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(up);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);ki(this._multiDrawCounts,s),ki(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r;let o=new Int32Array(e),a=new Int32Array(e),l=new Int32Array(e);ki(this._mergedDrawCounts,o),ki(this._mergedDrawStarts,a),ki(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=e;let c=this._indirectTexture,h=this._matricesTexture,d=this._colorsTexture;c.dispose(),this._initIndirectTexture(),ki(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),ki(h.image.data,this._matricesTexture.image.data),d&&(d.dispose(),this._initColorsTexture(),ki(d.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $e,this._initializeGeometry(r));let o=this.geometry;r.index&&ki(r.index.array,o.index.array);for(let a in r.attributes)ki(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;En.material=this.material,En.geometry.index=o.index,En.geometry.attributes=o.attributes,En.geometry.boundingBox===null&&(En.geometry.boundingBox=new an),En.geometry.boundingSphere===null&&(En.geometry.boundingSphere=new tn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=s[c];En.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,En.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,En.geometry.boundingBox),this.getBoundingSphereAt(c,En.geometry.boundingSphere),En.raycast(e,au);for(let d=0,u=au.length;d<u;d++){let f=au[d];f.object=this,f.batchId=a,t.push(f)}au.length=0}En.material=null,En.geometry.index=null,En.geometry.attributes={},En.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._mergedDrawCounts=e._mergedDrawCounts.slice(),this._mergedDrawStarts=e._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=e._mergedDrawInstanceCounts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),e._colorsTexture!==null?(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(e,t,n,s="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=t.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=t.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._mergedDrawStarts,u=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,y=e.isArrayCamera?LM:IM;x&&(e.isArrayCamera?y.setFromArrayCamera(e):(Vn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),y.setFromProjectionMatrix(Vn,e.coordinateSystem,e.reversedDepth)));let M=0,v=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),Dg.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Vn),Ng.set(0,0,-1).transformDirection(e.matrixWorld).transformDirection(Vn);for(let _=0,S=l.length;_<S;_++)if(l[_].visible&&l[_].active){let P=l[_].geometryIndex;this.getMatrixAt(_,Vn),this.getBoundingSphereAt(P,Tr).applyMatrix4(Vn);let A=!1;if(x&&(A=!y.intersectsSphere(Tr)),!A){let I=p[P],U=DM.subVectors(Tr.center,Dg).dot(Ng);fp.push(I.start,I.count,U,_)}}let b=fp.list,T=this.customSort;T===null?b.sort(n.transparent?CM:RM):T.call(this,b,e);for(let _=0,S=b.length;_<S;_++){let P=b[_],A=P.start*o*a,I=P.count*a;s==="merged"?v>0&&d[v-1]===A&&u[v-1]===I?f[v-1]++:(d[v]=A,u[v]=I,f[v]=1,v++):(c[M]=A,h[M]=I),g[M]=P.index,M++}fp.reset()}else for(let b=0,T=l.length;b<T;b++)if(l[b].visible&&l[b].active){let _=l[b].geometryIndex,S=!1;if(x&&(this.getMatrixAt(b,Vn),this.getBoundingSphereAt(_,Tr).applyMatrix4(Vn),S=!y.intersectsSphere(Tr)),!S){let P=p[_],A=P.start*o*a,I=P.count*a;s==="merged"?v>0&&d[v-1]===A&&u[v-1]===I?f[v-1]++:(d[v]=A,u[v]=I,f[v]=1,v++):(c[M]=A,h[M]=I),g[M]=b,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=v,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(e,t,n,s,r){e.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,s,r)}onBeforeShadow(e,t,n,s,r,o){e.isWebGPURenderer!==!0&&this._updateDrawParameters(s,r,o)}},sn=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bu=new R,ku=new R,Ug=new Je,cl=new ps,lu=new tn,pp=new R,Fg=new R,Ai=class extends yt{constructor(e=new $e,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bu.fromBufferAttribute(t,s-1),ku.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bu.distanceTo(ku);e.setAttribute("lineDistance",new Ae(n,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lu.copy(n.boundingSphere),lu.applyMatrix4(s),lu.radius+=r,e.ray.intersectsSphere(lu)===!1)return;Ug.copy(s).invert(),cl.copy(e.ray).applyMatrix4(Ug);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),M=cu(this,e,cl,l,g,y,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=cu(this,e,cl,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=cu(this,e,cl,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=cu(this,e,cl,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Og=new R,Bg=new R,ni=class extends Ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Og.fromBufferAttribute(t,s),Bg.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Og.distanceTo(Bg);e.setAttribute("lineDistance",new Ae(n,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vr=class extends Ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ta=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kg=new Je,Ap=new ps,hu=new tn,uu=new R,Ll=class extends yt{constructor(e=new $e,t=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hu.copy(n.boundingSphere),hu.applyMatrix4(s),hu.radius+=r,e.ray.intersectsSphere(hu)===!1)return;kg.copy(s).invert(),Ap.copy(e.ray).applyMatrix4(kg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);uu.fromBufferAttribute(d,m),zg(uu,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)uu.fromBufferAttribute(d,p),zg(uu,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Dl=class extends Yt{constructor(e,t,n,s,r=kt,o=kt,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},zu=class extends Dl{constructor(e,t,n,s,r,o,a,l){super({},e,t,n,s,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Hu=class extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=qt,this.minFilter=qt,this.generateMipmaps=!1,this.needsUpdate=!0}copy(e){return super.copy(e),this.source=new ti(Object.assign({},e.image)),this}},Wr=class extends Yt{constructor(e=[],t,n,s,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Gu=class extends Wr{constructor(e,t,n,s,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Nn,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vu=class extends Wr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Yi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Gs=class extends Yt{constructor(e=[],t=Yi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends Yt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wu=class extends Yt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Wi=class extends Yt{constructor(e,t,n=ii,s,r,o,a=qt,l=qt,c,h=Gi,d=1){if(h!==Gi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ti(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ia=class extends Wi{constructor(e,t=ii,n=Yi,s,r,o=qt,a=qt,l,c=Gi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class i extends $e{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2));function p(x,m,g,y,M,v,b,T,_,S,P){let A=v/_,I=b/S,U=v/2,k=b/2,L=T/2,B=_+1,V=S+1,z=0,ie=0,X=new R;for(let J=0;J<V;J++){let se=J*I-k;for(let Ce=0;Ce<B;Ce++){let Ie=Ce*A-U;X[x]=Ie*y,X[m]=se*M,X[g]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ce/_),d.push(1-J/S),z+=1}}for(let J=0;J<S;J++)for(let se=0;se<_;se++){let Ce=u+se+B*J,Ie=u+se+B*(J+1),Z=u+(se+1)+B*(J+1),he=u+(se+1)+B*J;l.push(Ce,Ie,he),l.push(Ie,Z,he),ie+=6}a.addGroup(f,ie,P),f+=ie,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Nl=class i extends $e{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,x=s+1,m=new R,g=new R;for(let y=0;y<=p;y++){let M=0,v=0,b=0,T=0;if(y<=n){let P=y/n,A=P*Math.PI/2;v=-h-e*Math.cos(A),b=e*Math.sin(A),T=-e*Math.cos(A),M=P*d}else if(y<=n+r){let P=(y-n)/r;v=-h+P*t,b=e,T=0,M=d+P*u}else{let P=(y-n-r)/n,A=P*Math.PI/2;v=h+e*Math.sin(A),b=e*Math.cos(A),T=e*Math.sin(A),M=d+u+P*d}let _=Math.max(0,Math.min(1,M/f)),S=0;y===0?S=.5/s:y===p&&(S=-.5/s);for(let P=0;P<=s;P++){let A=P/s,I=A*Math.PI*2,U=Math.sin(I),k=Math.cos(I);g.x=-b*k,g.y=v,g.z=b*U,a.push(g.x,g.y,g.z),m.set(-b*k,T,b*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,_)}if(y>0){let P=(y-1)*x;for(let A=0;A<s;A++){let I=P+A,U=P+A+1,k=y*x+A,L=y*x+A+1;o.push(I,U,k),o.push(U,L,k)}}}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ul=class i extends $e{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gs=class i extends $e{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function y(){let v=new R,b=new R,T=0,_=(t-e)/n;for(let S=0;S<=r;S++){let P=[],A=S/r,I=A*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,L=k*l+a,B=Math.sin(L),V=Math.cos(L);b.x=I*B,b.y=-A*n+m,b.z=I*V,d.push(b.x,b.y,b.z),v.set(B,_,V).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-A),P.push(p++)}x.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let A=x[P][S],I=x[P+1][S],U=x[P+1][S+1],k=x[P][S+1];(e>0||P!==0)&&(h.push(A,I,k),T+=3),(t>0||P!==r-1)&&(h.push(I,U,k),T+=3)}c.addGroup(g,T,0),g+=T}function M(v){let b=p,T=new re,_=new R,S=0,P=v===!0?e:t,A=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),p++;let I=p;for(let U=0;U<=s;U++){let L=U/s*l+a,B=Math.cos(L),V=Math.sin(L);_.x=P*V,_.y=m*A,_.z=P*B,d.push(_.x,_.y,_.z),u.push(0,A,0),T.x=B*.5+.5,T.y=V*.5*A+.5,f.push(T.x,T.y),p++}for(let U=0;U<s;U++){let k=b+U,L=I+U;v===!0?h.push(L,L+1,k):h.push(L+1,L,k),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vs=class i extends gs{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xs=class i extends $e{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new R,v=new R,b=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],v),f(t[T+2],b),l(M,v,b,y)}function l(y,M,v,b){let T=b+1,_=[];for(let S=0;S<=T;S++){_[S]=[];let P=y.clone().lerp(v,S/T),A=M.clone().lerp(v,S/T),I=T-S;for(let U=0;U<=I;U++)U===0&&S===T?_[S][U]=P:_[S][U]=P.clone().lerp(A,U/I)}for(let S=0;S<T;S++)for(let P=0;P<2*(T-S)-1;P++){let A=Math.floor(P/2);P%2===0?(u(_[S][A+1]),u(_[S+1][A]),u(_[S][A])):(u(_[S][A+1]),u(_[S+1][A+1]),u(_[S+1][A]))}}function c(y){let M=new R;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new R;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(v,1-b)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],b=o[y+4],T=Math.max(M,v,b),_=Math.min(M,v,b);T>.9&&_<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function p(){let y=new R,M=new R,v=new R,b=new R,T=new re,_=new re,S=new re;for(let P=0,A=0;P<r.length;P+=9,A+=6){y.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),T.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),b.copy(y).add(M).add(v).divideScalar(3);let I=m(b);x(T,A+0,y,I),x(_,A+2,M,I),x(S,A+4,v,I)}}function x(y,M,v,b){b<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Fl=class i extends xs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},du=new R,fu=new R,mp=new R,pu=new Ei,Ol=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Lr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:m,c:g}=pu;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),pu.getNormal(mp),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let M=(y+1)%3,v=d[y],b=d[M],T=pu[h[y]],_=pu[h[M]],S=`${v}_${b}`,P=`${b}_${v}`,A=u.get(P);A?(mp.dot(A.normal)<=r&&(f.push(T.x,T.y,T.z),f.push(_.x,_.y,_.z)),u.set(P,null)):u.has(S)||u.set(S,{index0:c[y],index1:c[M],normal:mp.clone()})}}for(let p of u.values())if(p){let{index0:x,index1:m}=p;du.fromBufferAttribute(a,x),fu.fromBufferAttribute(a,m),f.push(du.x,du.y,du.z),f.push(fu.x,fu.y,fu.z)}this.setAttribute("position",new Ae(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new Je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Xr=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bl=class extends Xr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Hg=new R,Gg=new R,gp=new bm,xp=new bm,_p=new bm,kl=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gg.subVectors(s[0],s[1]).add(s[0]),c=Gg);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hg.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),gp.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),xp.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),_p.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(gp.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xp.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_p.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gp.calc(l),xp.calc(l),_p.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ra=class extends Yn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gl(e,s.x,r.x,o.x,a.x),gl(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zl=class extends Yn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gl(e,s.x,r.x,o.x,a.x),gl(e,s.y,r.y,o.y,a.y),gl(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Yn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends Yn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Yn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ml(e,s.x,r.x,o.x),ml(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Yn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ml(e,s.x,r.x,o.x),ml(e,s.y,r.y,o.y),ml(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Vg(a,l.x,c.x,h.x,d.x),Vg(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Xu=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:kl,CubicBezierCurve:ra,CubicBezierCurve3:zl,EllipseCurve:Xr,LineCurve:oa,LineCurve3:Hl,QuadraticBezierCurve:aa,QuadraticBezierCurve3:la,SplineCurve:ca}),Gl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ws=class extends Gl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oa(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ra(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Xr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xs=class extends Ws{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ws().fromJSON(s))}return this}};Pp=class{static triangulate(e,t,n=2){return GM(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xg(e),qg(n,e);let o=e.length;t.forEach(Xg);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qg(n,t[l]);let a=Pp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};ql=class i extends $e{constructor(e=new Xs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:rS,M,v=!1,b,T,_,S;if(g){M=g.getSpacedPoints(h),v=!0,u=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,ne),T=new R,_=new R,S=new R}u||(m=0,f=0,p=0,x=0);let P=a.extractPoints(c),A=P.shape,I=P.holes;if(!ci.isClockWise(A)){A=A.reverse();for(let ne=0,pe=I.length;ne<pe;ne++){let oe=I[ne];ci.isClockWise(oe)&&(I[ne]=oe.reverse())}}function k(ne){let oe=10000000000000001e-36,Te=ne[0];for(let ue=1;ue<=ne.length;ue++){let Ge=ue%ne.length,Ue=ne[Ge],Ke=Ue.x-Te.x,et=Ue.y-Te.y,pt=Ke*Ke+et*et,O=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Te.x),Math.abs(Te.y)),Vt=oe*O*O;if(pt<=Vt){ne.splice(Ge,1),ue--;continue}Te=Ue}}k(A),I.forEach(k);let L=I.length,B=A;for(let ne=0;ne<L;ne++){let pe=I[ne];A=A.concat(pe)}function V(ne,pe,oe){return pe||ke("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(pe,oe)}let z=A.length;function ie(ne,pe,oe){let Te,ue,Ge,Ue=ne.x-pe.x,Ke=ne.y-pe.y,et=oe.x-ne.x,pt=oe.y-ne.y,O=Ue*Ue+Ke*Ke,Vt=Ue*pt-Ke*et;if(Math.abs(Vt)>Number.EPSILON){let ct=Math.sqrt(O),nt=Math.sqrt(et*et+pt*pt),ae=pe.x-Ke/ct,Wt=pe.y+Ue/ct,Xe=oe.x-pt/nt,je=oe.y+et/nt,C=((Xe-ae)*pt-(je-Wt)*et)/(Ue*pt-Ke*et);Te=ae+Ue*C-ne.x,ue=Wt+Ke*C-ne.y;let E=Te*Te+ue*ue;if(E<=2)return new re(Te,ue);Ge=Math.sqrt(E/2)}else{let ct=!1;Ue>Number.EPSILON?et>Number.EPSILON&&(ct=!0):Ue<-Number.EPSILON?et<-Number.EPSILON&&(ct=!0):Math.sign(Ke)===Math.sign(pt)&&(ct=!0),ct?(Te=-Ke,ue=Ue,Ge=Math.sqrt(O)):(Te=Ue,ue=Ke,Ge=Math.sqrt(O/2))}return new re(Te/Ge,ue/Ge)}let X=[];for(let ne=0,pe=B.length,oe=pe-1,Te=ne+1;ne<pe;ne++,oe++,Te++)oe===pe&&(oe=0),Te===pe&&(Te=0),X[ne]=ie(B[ne],B[oe],B[Te]);let J=[],se,Ce=X.concat();for(let ne=0,pe=L;ne<pe;ne++){let oe=I[ne];se=[];for(let Te=0,ue=oe.length,Ge=ue-1,Ue=Te+1;Te<ue;Te++,Ge++,Ue++)Ge===ue&&(Ge=0),Ue===ue&&(Ue=0),se[Te]=ie(oe[Te],oe[Ge],oe[Ue]);J.push(se),Ce=Ce.concat(se)}let Ie;if(m===0)Ie=ci.triangulateShape(B,I);else{let ne=[],pe=[];for(let oe=0;oe<m;oe++){let Te=oe/m,ue=f*Math.cos(Te*Math.PI/2),Ge=p*Math.sin(Te*Math.PI/2)+x;for(let Ue=0,Ke=B.length;Ue<Ke;Ue++){let et=V(B[Ue],X[Ue],Ge);Fe(et.x,et.y,-ue),Te===0&&ne.push(et)}for(let Ue=0,Ke=L;Ue<Ke;Ue++){let et=I[Ue];se=J[Ue];let pt=[];for(let O=0,Vt=et.length;O<Vt;O++){let ct=V(et[O],se[O],Ge);Fe(ct.x,ct.y,-ue),Te===0&&pt.push(ct)}Te===0&&pe.push(pt)}}Ie=ci.triangulateShape(ne,pe)}let Z=Ie.length,he=p+x;for(let ne=0;ne<z;ne++){let pe=u?V(A[ne],Ce[ne],he):A[ne];v?(_.copy(b.normals[0]).multiplyScalar(pe.x),T.copy(b.binormals[0]).multiplyScalar(pe.y),S.copy(M[0]).add(_).add(T),Fe(S.x,S.y,S.z)):Fe(pe.x,pe.y,0)}for(let ne=1;ne<=h;ne++)for(let pe=0;pe<z;pe++){let oe=u?V(A[pe],Ce[pe],he):A[pe];v?(_.copy(b.normals[ne]).multiplyScalar(oe.x),T.copy(b.binormals[ne]).multiplyScalar(oe.y),S.copy(M[ne]).add(_).add(T),Fe(S.x,S.y,S.z)):Fe(oe.x,oe.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let pe=ne/m,oe=f*Math.cos(pe*Math.PI/2),Te=p*Math.sin(pe*Math.PI/2)+x;for(let ue=0,Ge=B.length;ue<Ge;ue++){let Ue=V(B[ue],X[ue],Te);Fe(Ue.x,Ue.y,d+oe)}for(let ue=0,Ge=I.length;ue<Ge;ue++){let Ue=I[ue];se=J[ue];for(let Ke=0,et=Ue.length;Ke<et;Ke++){let pt=V(Ue[Ke],se[Ke],Te);v?Fe(pt.x,pt.y+M[h-1].y,M[h-1].x+oe):Fe(pt.x,pt.y,d+oe)}}}Pe(),He();function Pe(){let ne=s.length/3;if(u){let pe=0,oe=z*pe;for(let Te=0;Te<Z;Te++){let ue=Ie[Te];Mt(ue[2]+oe,ue[1]+oe,ue[0]+oe)}pe=h+m*2,oe=z*pe;for(let Te=0;Te<Z;Te++){let ue=Ie[Te];Mt(ue[0]+oe,ue[1]+oe,ue[2]+oe)}}else{for(let pe=0;pe<Z;pe++){let oe=Ie[pe];Mt(oe[2],oe[1],oe[0])}for(let pe=0;pe<Z;pe++){let oe=Ie[pe];Mt(oe[0]+z*h,oe[1]+z*h,oe[2]+z*h)}}n.addGroup(ne,s.length/3-ne,0)}function He(){let ne=s.length/3,pe=0;me(B,pe),pe+=B.length;for(let oe=0,Te=I.length;oe<Te;oe++){let ue=I[oe];me(ue,pe),pe+=ue.length}n.addGroup(ne,s.length/3-ne,1)}function me(ne,pe){let oe=ne.length;for(;--oe>=0;){let Te=oe,ue=oe-1;ue<0&&(ue=ne.length-1);for(let Ge=0,Ue=h+m*2;Ge<Ue;Ge++){let Ke=z*Ge,et=z*(Ge+1),pt=pe+Te+Ke,O=pe+ue+Ke,Vt=pe+ue+et,ct=pe+Te+et;Be(pt,O,Vt,ct)}}}function Fe(ne,pe,oe){l.push(ne),l.push(pe),l.push(oe)}function Mt(ne,pe,oe){it(ne),it(pe),it(oe);let Te=s.length/3,ue=y.generateTopUV(n,s,Te-3,Te-2,Te-1);st(ue[0]),st(ue[1]),st(ue[2])}function Be(ne,pe,oe,Te){it(ne),it(pe),it(Te),it(pe),it(oe),it(Te);let ue=s.length/3,Ge=y.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);st(Ge[0]),st(Ge[1]),st(Ge[3]),st(Ge[1]),st(Ge[2]),st(Ge[3])}function it(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function st(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return oS(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xu[s.type]().fromJSON(s)),new i(n,e.options)}},rS={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-d),new re(u,1-p),new re(x,1-g)]:[new re(a,1-l),new re(h,1-d),new re(f,1-p),new re(m,1-g)]}};Yr=class i extends xs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Yl=class i extends $e{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new R,u=new re,f=new R,p=new R,x=new R,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=t;y++){let M=n+y*h*s,v=Math.sin(M),b=Math.cos(M);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*v,d.y=e[T].y,d.z=e[T].x*b,o.push(d.x,d.y,d.z),u.x=y/t,u.y=T/(e.length-1),a.push(u.x,u.y);let _=l[3*T+0]*v,S=l[3*T+1],P=l[3*T+0]*b;c.push(_,S,P)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,b=v,T=v+e.length,_=v+e.length+1,S=v+1;r.push(b,T,S),r.push(_,S,T)}this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("uv",new Ae(a,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ua=class i extends xs{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yn=class i extends $e{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),T=y+1+c*g;f.push(M,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$r=class i extends $e{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new R,p=new re;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let y=g+m,M=y,v=y+n+1,b=y+n+2,T=y+1;a.push(M,v,T),a.push(v,b,T)}}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$l=class i extends $e{constructor(e=new Xs([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];ci.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=ci.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],M=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(M,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return aS(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};Ci=class i extends $e{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=o+M*a,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let P=S/t,A=s+P*r;d.x=-T*Math.cos(A),d.y=b,d.z=T*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(P+_,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=h[g][y+1],v=h[g][y],b=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&f.push(M,v,T),(g!==n-1||l<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Zl=class i extends xs{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Kl=class i extends $e{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Jl=class i extends $e{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],h=[],d=new R,u=new R,f=new R,p=new R,x=new R,m=new R,g=new R;for(let M=0;M<=n;++M){let v=M/n*r*Math.PI*2;y(v,r,o,e,f),y(v+.01,r,o,e,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=s;++b){let T=b/s*Math.PI*2,_=-t*Math.cos(T),S=t*Math.sin(T);d.x=f.x+(_*g.x+S*x.x),d.y=f.y+(_*g.y+S*x.y),d.z=f.z+(_*g.z+S*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(b/s)}}for(let M=1;M<=n;M++)for(let v=1;v<=s;v++){let b=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),_=(s+1)*M+v,S=(s+1)*(M-1)+v;a.push(b,T,S),a.push(T,_,S)}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2));function y(M,v,b,T,_){let S=Math.cos(M),P=Math.sin(M),A=b/v*M,I=Math.cos(A);_.x=T*(2+I)*.5*S,_.y=T*(2+I)*P*.5,_.z=T*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},jl=class i extends $e{constructor(e=new la(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new re,h=new R,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),g()}function m(M){h=e.getPointAt(M/t,h);let v=o.normals[M],b=o.binormals[M];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,S=Math.sin(_),P=-Math.cos(_);l.x=P*v.x+S*b.x,l.y=P*v.y+S*b.y,l.z=P*v.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let b=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),_=(s+1)*M+v,S=(s+1)*(M-1)+v;p.push(b,T,S),p.push(T,_,S)}}function y(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ql=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new R,r=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),y=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,y),Yg(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),Yg(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};$g=Object.freeze({__proto__:null,BoxGeometry:Ri,CapsuleGeometry:Nl,CircleGeometry:Ul,ConeGeometry:Vs,CylinderGeometry:gs,DodecahedronGeometry:Fl,EdgesGeometry:Ol,ExtrudeGeometry:ql,IcosahedronGeometry:Yr,LatheGeometry:Yl,OctahedronGeometry:ua,PlaneGeometry:yn,PolyhedronGeometry:xs,RingGeometry:$r,ShapeGeometry:$l,SphereGeometry:Ci,TetrahedronGeometry:Zl,TorusGeometry:Kl,TorusKnotGeometry:Jl,TubeGeometry:jl,WireframeGeometry:Ql}),ec=class extends nn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};Em={clone:ao,merge:Pn},cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=hS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},da=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fa=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tc=class extends fa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},nc=class extends nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ic=class extends nn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sc=class extends nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Cn=class extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ma=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rc=class extends nn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},oc=class extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};qu=class{static convertArray(e,t){return Ti(e,t)}static isTypedArray(e){return d_(e)}static hasTangents(e){return zo(e)}static getKeyframeOrder(e){return E_(e)}static sortedArray(e,t,n){return Ip(e,t,n)}static flattenJSON(e,t,n,s){w_(e,t,n,s)}static subclip(e,t,n,s,r=30){return uS(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return dS(e,t,n,s)}},_s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ac=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fs,endingEnd:Fs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Os:r=e,a=2*t-n;break;case Wo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Os:o=e,l=2*n-t;break;case Wo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+M*o[l+b]+v*o[d+b];return r}},ga=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},lc=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cc=class extends _s{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,y=d[g],M=d[g+1],v=e*u+p*2,b=h[v],T=h[v+1],_=pS(n,t,y,b,s);r[p]=A_(_,x,M,T,m)}return r}};On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ti(t,this.TimeBufferType),this.values=Ti(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ti(e.times,Array),values:Ti(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),zo(e.settings)&&(n.settings={inTangents:Ti(e.settings.inTangents,Array),outTangents:Ti(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break;case Au:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return dl;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;zo(this.settings)&&(Kg(this.settings.inTangents,e),Kg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;zo(this.settings)&&(Jg(this.settings.inTangents,e),Jg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&d_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Tl;Xi=class extends On{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Vo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;xa=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="color";Zr=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="number";hc=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Kr=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends On{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Vo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;_a=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="vector";qs=class{constructor(e="",t=-1,n=[],s=lh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gS(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=E_(l);l=Ip(l,1,h),c=Ip(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jg(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jg(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};ya=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wm=new ya,vn=class{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};vn.DEFAULT_MATERIAL_NAME="__DEFAULT";us={},Lp=class extends Error{constructor(e,t){super(e),this.response=t}},ui=class extends vn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:n,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=us[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,m=new ReadableStream({start(g){y();function y(){d.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,_=h.length;T<_;T++){let S=h[T];S.onProgress&&S.onProgress(b)}g.enqueue(v),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Lp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{wi.add(`file:${e}`,c);let h=us[e];delete us[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=us[e];if(h===void 0)throw this.manager.itemError(e),c;delete us[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Yu=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ui(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t=[];for(let n=0;n<e.length;n++){let s=qs.parse(e[n]);t.push(s)}return t}},$u=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=[],a=new Wr,l=new ui(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(e[d],function(u){let f=r.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=kt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,s)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=kt),a.format=u.format,a.needsUpdate=!0,t&&t(a)},n,s);return a}},No=new WeakMap,Ys=class extends vn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=No.get(o);d===void 0&&(d=[],No.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Yo("img");function l(){h(),t&&t(this);let d=No.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}No.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),wi.remove(`image:${e}`);let u=No.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}No.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},Zu=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=new Gs;r.colorSpace=_n;let o=new Ys(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}},Ku=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Un,a=new ui(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):ke(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new Un;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Nn,e.wrapT=t.wrapT!==void 0?t.wrapT:Nn,e.magFilter=t.magFilter!==void 0?t.magFilter:kt,e.minFilter=t.minFilter!==void 0?t.minFilter:kt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=di),t.mipmapCount===1&&(e.minFilter=kt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Ju=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new Ys(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Pi=class extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jr=class extends Pi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yp=new Je,Qg=new R,ex=new R,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qg),ex.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ex),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yp,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xu=new R,_u=new mn,zi=new R,Qr=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xu,_u,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,_u,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xu,_u,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,_u,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new R,tx=new re,nx=new re,Kt=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,tx,nx),t.subVectors(nx,tx)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dp=class extends jr{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},uc=class extends Pi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Np=class extends jr{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},dc=class extends Pi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},eo=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Up=class extends jr{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends Pi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Up}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fc=class extends Pi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},pc=class extends Pi{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},va=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*s),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*s)),t.addScaledVector(o[5],1.092548*(s*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){let n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*s),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*s),t.addScaledVector(o[5],2*.429043*s*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){let n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}},mc=class extends Pi{constructor(e=new va,t=1){super(void 0,t),this.isLightProbe=!0,this.type="LightProbe",this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ix={},gc=class i extends vn{constructor(e){super(e),this.textures={}}load(e,t,n,s){let r=this,o=new ui(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return i.createMaterialFromType(e)}static createMaterialFromType(e){let n={ShadowMaterial:ec,SpriteMaterial:jo,RawShaderMaterial:da,ShaderMaterial:$n,PointsMaterial:ta,MeshPhysicalMaterial:tc,MeshStandardMaterial:fa,MeshPhongMaterial:nc,MeshToonMaterial:ic,MeshNormalMaterial:sc,MeshLambertMaterial:Cn,MeshDepthMaterial:pa,MeshDistanceMaterial:ma,MeshBasicMaterial:Ft,MeshMatcapMaterial:rc,LineDashedMaterial:oc,LineBasicMaterial:sn,Material:nn,...ix}[e],s;return n===void 0?(Hi(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new nn):s=new n,s}static registerMaterial(e,t){ix[e]=t}},Ma=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xc=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},_c=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ui(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),y=ko(m.type,g),M=new Hr(y,m.stride);return M.uuid=m.uuid,m.usage!==void 0&&M.setUsage(m.usage),t[p]=M,M}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let o=e.isInstancedBufferGeometry?new xc:new $e,a=e.data.index;if(a!==void 0){let f=ko(a.type,a.array);o.setIndex(new It(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],x;if(p.isInterleavedBufferAttribute){let m=s(e.data,p.data);x=new Hs(m,p.itemSize,p.offset,p.normalized)}else{let m=ko(p.type,p.array),g=p.isInstancedBufferAttribute?ms:It;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),o.setAttribute(f,x)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){let y=p[m],M;if(y.isInterleavedBufferAttribute){let v=s(e.data,y.data);M=new Hs(v,y.itemSize,y.offset,y.normalized)}else{let v=ko(y.type,y.array);M=new It(v,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),y.gpuType!==void 0&&(M.gpuType=y.gpuType),x.push(M)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let x=d[f];o.addGroup(x.start,x.count,x.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new tn().fromJSON(u)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},vp={},ju=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=this.path===""?Ma.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new ui(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),ke("ObjectLoader: Can't parse "+e+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),ke("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){let n=this,s=this.path===""?Ma.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let r=new ui(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(e,t),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){let n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(let u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){vp[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){let r=new Xs().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=new Pl().fromJSON(e[r],s);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let s=new _c;for(let r=0,o=e.length;r<o;r++){let a,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(l);break;default:l.type in $g?a=$g[l.type].fromJSON(l,t):l.type in vp?a=vp[l.type].fromJSON(l,t):be(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){let n={},s={};if(e!==void 0){let r=new gc;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let s=e[n],r=qs.parse(s);t[r.uuid]=r}return t}parseImages(e,t){let n=this,s={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:ko(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new ya(t);r=new Ys(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let d=e[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new Un(g.data,g.width,g.height)))}s[d.uuid]=new ti(f)}else{let f=a(d.url);s[d.uuid]=new ti(f)}}}return s}async parseImagesAsync(e){let t=this,n={},s;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await s.loadAsync(l)}else return o.data?{data:ko(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){s=new Ys(this.manager),s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Un(p.data,p.width,p.height)))}n[l.uuid]=new ti(h)}else{let h=await r(l.url);n[l.uuid]=new ti(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(be("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let s={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=e[r];a.image===void 0&&be('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&be("ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,h;Array.isArray(c)?(h=new Gs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Un:h=new Yt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,xS)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],sx),h.wrapT=n(a.wrap[1],sx)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,rx)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,rx)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),s[a.uuid]=h}return s}parseObject(e,t,n,s,r){let o;function a(u){return t[u]===void 0&&be("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,x=u.length;p<x;p++){let m=u[p];n[m]===void 0&&be("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&be("ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&be("ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(e.type){case"Scene":o=new zr,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new fe(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new kr(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new wl(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new eo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new fc(e.color,e.intensity);break;case"DirectionalLight":o=new to(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new dc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new pc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new uc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"",e.map!==void 0&&(o.map=c(e.map));break;case"HemisphereLight":o=new Jr(e.color,e.groundColor,e.intensity);break;case"LightProbe":let u=new va().fromArray(e.sh);o=new mc(u,e.intensity);break;case"SkinnedMesh":h=a(e.geometry),d=l(e.material),o=new Cl(h,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),d=l(e.material),o=new qe(h,d);break;case"InstancedMesh":h=a(e.geometry),d=l(e.material);let f=e.count,p=e.instanceMatrix,x=e.instanceColor;o=new Gr(h,d,f),o.instanceMatrix=new ms(new Float32Array(p.array),16),x!==void 0&&(o.instanceColor=new ms(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(e.geometry),d=l(e.material),o=new Il(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new an().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new tn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e.availableInstanceIds,o._availableGeometryIds=e.availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new tn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new an().fromJSON(e.boundingBox));break;case"LOD":o=new Rl;break;case"Line":o=new Ai(a(e.geometry),l(e.material));break;case"LineLoop":o=new Vr(a(e.geometry),l(e.material));break;case"LineSegments":o=new ni(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Ll(a(e.geometry),l(e.material));break;case"Sprite":o=new Al(l(e.material)),e.center!==void 0&&o.center.fromArray(e.center);break;case"Group":o=new Pt;break;case"Bone":o=new Qo;break;default:o=new yt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.pivot!==void 0&&(o.pivot=new R().fromArray(e.pivot)),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(o.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(o.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.mapType!==void 0&&(o.shadow.mapType=e.shadow.mapType),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let u=e.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],t,n,s,r))}if(e.animations!==void 0){let u=e.animations;for(let f=0;f<u.length;f++){let p=u[f];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let u=e.levels;for(let f=0;f<u.length;f++){let p=u[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let s=t[n.skeleton];s===void 0?be("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new yt}})}},xS={UVMapping:Ec,CubeReflectionMapping:Yi,CubeRefractionMapping:Js,EquirectangularReflectionMapping:Ea,EquirectangularRefractionMapping:wa},sx={RepeatWrapping:Bs,ClampToEdgeWrapping:Nn,MirroredRepeatWrapping:Go},rx={NearestFilter:qt,NearestMipmapNearestFilter:Yd,NearestMipmapLinearFilter:ro,LinearFilter:kt,LinearMipmapNearestFilter:Aa,LinearMipmapLinearFilter:di},Mp=new WeakMap,Qu=class extends vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=wi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Mp.has(o)===!0?(s&&s(Mp.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Mp.set(l,c),wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Sa=class{static getContext(){return yu===void 0&&(yu=new(window.AudioContext||window.webkitAudioContext)),yu}static setContext(e){yu=e}},ed=class extends vn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ui(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0),h=Sa.getContext(),d=e+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){t(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,s);function a(l){s?s(l):ke(l),r.manager.itemError(e)}}},ox=new Je,ax=new Je,Er=new Je,td=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Er.copy(e.projectionMatrix);let s=t.eyeSep/2,r=s*t.near/t.focus,o=t.near*Math.tan(Lr*t.fov*.5)/t.zoom,a,l;ax.elements[12]=-s,ox.elements[12]=s,a=-o*t.aspect+r,l=o*t.aspect+r,Er.elements[0]=2*t.near/(l-a),Er.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Er),a=-o*t.aspect-r,l=o*t.aspect-r,Er.elements[0]=2*t.near/(l-a),Er.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Er)}this.cameraL.matrix.copy(e.matrixWorld).multiply(ax),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(ox),this.cameraR.matrixWorldNeedsUpdate=!0}},Uo=-90,Fo=1,no=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Uo,Fo,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Uo,Fo,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Uo,Fo,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Uo,Fo,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Uo,Fo,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Uo,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yc=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},vc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_S.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};wr=new R,Sp=new mn,yS=new R,Ar=new R,Rr=new R,nd=class extends yt{constructor(){super(),this.type="AudioListener",this.context=Sa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new vc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(wr,Sp,yS),Ar.set(0,0,-1).applyQuaternion(Sp),Rr.set(0,1,0).applyQuaternion(Sp),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(wr.x,n),t.positionY.linearRampToValueAtTime(wr.y,n),t.positionZ.linearRampToValueAtTime(wr.z,n),t.forwardX.linearRampToValueAtTime(Ar.x,n),t.forwardY.linearRampToValueAtTime(Ar.y,n),t.forwardZ.linearRampToValueAtTime(Ar.z,n),t.upX.linearRampToValueAtTime(Rr.x,n),t.upY.linearRampToValueAtTime(Rr.y,n),t.upZ.linearRampToValueAtTime(Rr.z,n)}else t.setPosition(wr.x,wr.y,wr.z),t.setOrientation(Ar.x,Ar.y,Ar.z,Rr.x,Rr.y,Rr.z)}},Mc=class extends yt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){be("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(be("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(be("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},Cr=new R,lx=new mn,vS=new R,Pr=new R,id=class extends Mc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cr,lx,vS),Pr.set(0,0,1).applyQuaternion(lx);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cr.x,n),t.positionY.linearRampToValueAtTime(Cr.y,n),t.positionZ.linearRampToValueAtTime(Cr.z,n),t.orientationX.linearRampToValueAtTime(Pr.x,n),t.orientationY.linearRampToValueAtTime(Pr.y,n),t.orientationZ.linearRampToValueAtTime(Pr.z,n)}else t.setPosition(Cr.x,Cr.y,Cr.z),t.setOrientation(Pr.x,Pr.y,Pr.z)}},sd=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Sc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){mn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;mn.multiplyQuaternionsFlat(e,o,e,t,e,n),mn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Am="\\[\\]\\.:\\/",MS=new RegExp("["+Am+"]","g"),Rm="[^"+Am+"]",SS="[^"+Am.replace("\\.","")+"]",bS=/((?:WC+[\/:])*)/.source.replace("WC",Rm),TS=/(WCOD+)?/.source.replace("WCOD",SS),ES=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rm),wS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rm),AS=new RegExp("^"+bS+TS+ES+wS+"$"),RS=["material","materials","bones","map"],Fp=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(MS,"")}static parseTrackName(e){let t=AS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);RS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Fp;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];rd=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=pi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let x=0,m=o;x!==m;++x)r[x].push(new wt(u,n[x],s[x]))}else if(p<c){a=e[p];let x=--c,m=e[x];t[m.uuid]=p,e[p]=m,t[f]=x,e[x]=u;for(let g=0,y=o;g!==y;++g){let M=r[g],v=M[x],b=M[p];M[p]=v,b===void 0&&(b=new wt(u,n[g],s[g])),M[x]=b}}else e[p]!==a&&ke("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let d=r++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){let x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<r){let u=--r,f=e[u],p=--o,x=e[p];d!==u&&(t[f.uuid]=d),e[d]=f,u!==p&&(t[x.uuid]=u),e[u]=x,e.pop();for(let m=0,g=s;m!==g;++m){let y=n[m],M=y[u],v=y[p];y[d]=M,y[u]=v,y.pop()}}else{let u=--o,f=e[u];d!==u&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,x=s;p!==x;++p){let m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,s=n[e],r=this._bindings;if(s!==void 0)return r[s];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,o.push(e),a.push(t),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new wt(p,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=s[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}},bc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Fs,endingEnd:Fs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=hm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ef:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case lh:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===um;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===cm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Os,s.endingEnd=Os):(e?s.endingStart=this.zeroSlopeAtStart?Os:Fs:s.endingStart=Wo,t?s.endingEnd=this.zeroSlopeAtEnd?Os:Fs:s.endingEnd=Wo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},CS=new Float32Array(1),od=class extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;p=new Sc(wt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ga(new Float32Array(2),new Float32Array(2),1,CS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?qs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lh),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new bc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?qs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},ad=class extends Zo{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let o=new Fr(null,e,t,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(s)}},ld=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},PS=0,cd=class extends qn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.usage=ch,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){let r=t[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},hd=class extends Hr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},ud=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},cx=new Je,dd=class{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cx),this}intersectObject(e,t=!0,n=[]){return Op(e,this,n,t),n.sort(hx),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Op(e[s],this,n,t);return n.sort(hx),n}};fd=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},pd=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},md=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Dm=class Dm{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Dm.prototype.isMatrix2=!0;gd=Dm,ux=new re,Tc=class{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ux.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ux).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dx=new R,vu=new R,Oo=new R,Bo=new R,bp=new R,IS=new R,LS=new R,xd=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dx.subVectors(e,this.start),vu.subVectors(this.end,this.start);let n=vu.dot(vu);if(n===0)return 0;let r=vu.dot(dx)/n;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=IS,n=LS){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;Oo.subVectors(c,a),Bo.subVectors(h,l),bp.subVectors(a,l);let d=Oo.dot(Oo),u=Bo.dot(Bo),f=Bo.dot(bp);if(d<=s&&u<=s)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(d<=s)r=0,o=f/u,o=Ze(o,0,1);else{let p=Oo.dot(bp);if(u<=s)o=0,r=Ze(-p/d,0,1);else{let x=Oo.dot(Bo),m=d*u-x*x;m!==0?r=Ze((x*f-p*u)/m,0,1):r=0,o=(x*r+f)/u,o<0?(o=0,r=Ze(-p/d,0,1)):o>1&&(o=1,r=Ze((x-p)/d,0,1))}}return t.copy(a).addScaledVector(Oo,r),n.copy(l).addScaledVector(Bo,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},fx=new R,_d=class extends yt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new $e,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ae(s,3));let r=new sn({fog:!1,toneMapped:!1});this.cone=new ni(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),fx.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(fx),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Us=new R,Mu=new Je,Tp=new Je,yd=class extends ni{constructor(e){let t=R_(e),n=new $e,s=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ae(s,3)),n.setAttribute("color",new Ae(r,3));let o=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let a=new fe(255),l=new fe(65280);this.setColors(a,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,s=n.getAttribute("position");Tp.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(Mu.multiplyMatrices(Tp,a.matrixWorld),Us.setFromMatrixPosition(Mu),s.setXYZ(o,Us.x,Us.y,Us.z),Mu.multiplyMatrices(Tp,a.parent.matrixWorld),Us.setFromMatrixPosition(Mu),s.setXYZ(o+1,Us.x,Us.y,Us.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};vd=class extends qe{constructor(e,t,n){let s=new Ci(t,4,2),r=new Ft({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},DS=new R,px=new fe,mx=new fe,Md=class extends yt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let s=new ua(t);s.rotateY(Math.PI*.5),this.material=new Ft({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new It(o,3)),this.add(new qe(s,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");px.copy(this.light.color),mx.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){let r=n<s/2?px:mx;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(DS.setFromMatrixPosition(this.light.matrixWorld).negate())}},Sd=class extends ni{constructor(e=10,t=10,n=4473924,s=8947848){n=new fe(n),s=new fe(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=t;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=u===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new $e;h.setAttribute("position",new Ae(l,3)),h.setAttribute("color",new Ae(c,3));let d=new sn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},bd=class extends ni{constructor(e=10,t=16,n=8,s=64,r=4473924,o=8947848){r=new fe(r),o=new fe(o);let a=[],l=[];if(t>1)for(let d=0;d<t;d++){let u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;a.push(0,0,0),a.push(f,0,p);let x=d&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){let u=d&1?r:o,f=e-e/n*d;for(let p=0;p<s;p++){let x=p/s*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/s*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}let c=new $e;c.setAttribute("position",new Ae(a,3)),c.setAttribute("color",new Ae(l,3));let h=new sn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},gx=new R,Su=new R,xx=new R,Td=class extends yt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new $e;s.setAttribute("position",new Ae([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new sn({fog:!1,toneMapped:!1});this.lightPlane=new Ai(s,r),this.add(this.lightPlane),s=new $e,s.setAttribute("position",new Ae([0,0,0,0,0,1],3)),this.targetLine=new Ai(s,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),gx.setFromMatrixPosition(this.light.matrixWorld),Su.setFromMatrixPosition(this.light.target.matrixWorld),xx.subVectors(Su,gx),this.lightPlane.lookAt(Su),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Su),this.targetLine.scale.z=xx.length()}},bu=new R,Xt=new Qr,Ed=class extends ni{constructor(e){let t=new $e,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){s.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(s.length/3-1)}t.setAttribute("position",new Ae(s,3)),t.setAttribute("color",new Ae(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new fe(16755200),h=new fe(16711680),d=new fe(43775),u=new fe(16777215),f=new fe(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,s,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,s=1,r,o;if(Xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Xn)r=-1,o=1;else if(this.camera.coordinateSystem===ks)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Zt("c",t,e,Xt,0,0,r),Zt("t",t,e,Xt,0,0,o),Zt("n1",t,e,Xt,-n,-s,r),Zt("n2",t,e,Xt,n,-s,r),Zt("n3",t,e,Xt,-n,s,r),Zt("n4",t,e,Xt,n,s,r),Zt("f1",t,e,Xt,-n,-s,o),Zt("f2",t,e,Xt,n,-s,o),Zt("f3",t,e,Xt,-n,s,o),Zt("f4",t,e,Xt,n,s,o),Zt("u1",t,e,Xt,n*.7,s*1.1,r),Zt("u2",t,e,Xt,-n*.7,s*1.1,r),Zt("u3",t,e,Xt,0,s*2,r),Zt("cf1",t,e,Xt,-n,0,o),Zt("cf2",t,e,Xt,n,0,o),Zt("cf3",t,e,Xt,0,-s,o),Zt("cf4",t,e,Xt,0,s,o),Zt("cn1",t,e,Xt,-n,0,r),Zt("cn2",t,e,Xt,n,0,r),Zt("cn3",t,e,Xt,0,-s,r),Zt("cn4",t,e,Xt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};Tu=new an,wd=class extends ni{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new $e;r.setIndex(new It(n,1)),r.setAttribute("position",new It(s,3)),super(r,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Tu.setFromObject(this.object),Tu.isEmpty())return;let e=Tu.min,t=Tu.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ad=class extends ni{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $e;r.setIndex(new It(n,1)),r.setAttribute("position",new Ae(s,3)),super(r,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Rd=class extends Ai{constructor(e,t=1,n=16776960){let s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new $e;o.setAttribute("position",new Ae(r,3)),o.computeBoundingSphere(),super(o,new sn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $e;l.setAttribute("position",new Ae(a,3)),l.computeBoundingSphere(),this.add(new qe(l,new Ft({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},_x=new R,Cd=class extends yt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Eu===void 0&&(Eu=new $e,Eu.setAttribute("position",new Ae([0,0,0,0,1,0],3)),Ep=new Vs(.5,1,5,1),Ep.translate(0,-.5,0)),this.position.copy(t),this.line=new Ai(Eu,new sn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new qe(Ep,new Ft({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{_x.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(_x,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Pd=class extends ni{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new $e;s.setAttribute("position",new Ae(t,3)),s.setAttribute("color",new Ae(n,3));let r=new sn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new fe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Id=class{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ws,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new re);if(e(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let x=l[p],m=l[(p+1)%f];if(x.y>d!=m.y>d){let g=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);u.push(g)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(be('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=ci.area(c);if(h===0)continue;let d=new Tc;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Xs;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new Ws;h.curves=l.subPath.curves,c.holes.push(h)}return o}},Ld=class extends qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};Dd=class{static contain(e,t){return NS(e,t)}static cover(e,t){return US(e,t)}static fill(e){return FS(e)}static getByteLength(e,t,n,s){return af(e,t,n,s)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});var Zn={};Fh(Zn,{ACESFilmicToneMapping:()=>Vd,AddEquation:()=>Ks,AddOperation:()=>am,AdditiveAnimationBlendMode:()=>ef,AdditiveBlending:()=>ba,AgXToneMapping:()=>Xd,AlphaFormat:()=>jd,AlwaysCompare:()=>sf,AlwaysDepth:()=>_l,AlwaysStencilFunc:()=>pm,AmbientLight:()=>fc,AnimationAction:()=>bc,AnimationClip:()=>qs,AnimationLoader:()=>Yu,AnimationMixer:()=>od,AnimationObjectGroup:()=>rd,AnimationUtils:()=>qu,ArcCurve:()=>Bl,ArrayCamera:()=>yc,ArrowHelper:()=>Cd,AttachedBindMode:()=>wu,Audio:()=>Mc,AudioAnalyser:()=>sd,AudioContext:()=>Sa,AudioListener:()=>nd,AudioLoader:()=>ed,AxesHelper:()=>Pd,BackSide:()=>gn,BasicDepthPacking:()=>dm,BasicShadowMap:()=>Sx,BatchedMesh:()=>Il,BezierInterpolant:()=>cc,Bone:()=>Qo,BooleanKeyframeTrack:()=>Xi,Box2:()=>Tc,Box3:()=>an,Box3Helper:()=>Ad,BoxGeometry:()=>Ri,BoxHelper:()=>wd,BufferAttribute:()=>It,BufferGeometry:()=>$e,BufferGeometryLoader:()=>_c,ByteType:()=>$d,Cache:()=>wi,Camera:()=>Qr,CameraHelper:()=>Ed,CanvasTexture:()=>na,CapsuleGeometry:()=>Nl,CatmullRomCurve3:()=>kl,CineonToneMapping:()=>Gd,CircleGeometry:()=>Ul,ClampToEdgeWrapping:()=>Nn,Clock:()=>fd,Color:()=>fe,ColorKeyframeTrack:()=>xa,ColorManagement:()=>mt,Compatibility:()=>h_,CompressedArrayTexture:()=>Gu,CompressedCubeTexture:()=>Vu,CompressedTexture:()=>Wr,CompressedTextureLoader:()=>$u,ConeGeometry:()=>Vs,ConstantAlphaFactor:()=>sm,ConstantColorFactor:()=>nm,Controls:()=>Ld,CubeCamera:()=>no,CubeDepthTexture:()=>ia,CubeReflectionMapping:()=>Yi,CubeRefractionMapping:()=>Js,CubeTexture:()=>Gs,CubeTextureLoader:()=>Zu,CubicBezierCurve:()=>ra,CubicBezierCurve3:()=>zl,CubicInterpolant:()=>ac,CullFaceBack:()=>Ud,CullFaceFront:()=>zp,CullFaceFrontBack:()=>Mx,CullFaceNone:()=>kp,Curve:()=>Yn,CurvePath:()=>Gl,CustomBlending:()=>Gp,CustomToneMapping:()=>Wd,CylinderGeometry:()=>gs,Cylindrical:()=>md,Data3DTexture:()=>Fr,DataArrayTexture:()=>Ur,DataTexture:()=>Un,DataTextureLoader:()=>Ku,DataUtils:()=>Iu,DecrementStencilOp:()=>Hx,DecrementWrapStencilOp:()=>Vx,DefaultLoadingManager:()=>wm,DepthFormat:()=>Gi,DepthStencilFormat:()=>$i,DepthTexture:()=>Wi,DetachedBindMode:()=>lm,DirectionalLight:()=>to,DirectionalLightHelper:()=>Td,DiscreteInterpolant:()=>lc,DodecahedronGeometry:()=>Fl,DoubleSide:()=>Gt,DstAlphaFactor:()=>Jp,DstColorFactor:()=>Qp,DynamicCopyUsage:()=>s_,DynamicDrawUsage:()=>jx,DynamicReadUsage:()=>t_,EdgesGeometry:()=>Ol,EllipseCurve:()=>Xr,EqualCompare:()=>xm,EqualDepth:()=>vl,EqualStencilFunc:()=>Yx,EquirectangularReflectionMapping:()=>Ea,EquirectangularRefractionMapping:()=>wa,Euler:()=>hi,EventDispatcher:()=>qn,ExternalTexture:()=>sa,ExtrudeGeometry:()=>ql,FileLoader:()=>ui,Float16BufferAttribute:()=>Ou,Float32BufferAttribute:()=>Ae,FloatType:()=>An,Fog:()=>kr,FogExp2:()=>wl,FramebufferTexture:()=>Hu,FrontSide:()=>ys,Frustum:()=>Vi,FrustumArray:()=>ea,GLBufferAttribute:()=>ud,GLSL1:()=>o_,GLSL3:()=>rf,GreaterCompare:()=>_m,GreaterDepth:()=>Sl,GreaterEqualCompare:()=>nf,GreaterEqualDepth:()=>Ml,GreaterEqualStencilFunc:()=>Jx,GreaterStencilFunc:()=>Zx,GridHelper:()=>Sd,Group:()=>Pt,HTMLTexture:()=>Wu,HalfFloatType:()=>fi,HemisphereLight:()=>Jr,HemisphereLightHelper:()=>Md,IcosahedronGeometry:()=>Yr,ImageBitmapLoader:()=>Qu,ImageLoader:()=>Ys,ImageUtils:()=>El,IncrementStencilOp:()=>zx,IncrementWrapStencilOp:()=>Gx,InstancedBufferAttribute:()=>ms,InstancedBufferGeometry:()=>xc,InstancedInterleavedBuffer:()=>hd,InstancedMesh:()=>Gr,Int16BufferAttribute:()=>Uu,Int32BufferAttribute:()=>Fu,Int8BufferAttribute:()=>Lu,IntType:()=>wc,InterleavedBuffer:()=>Hr,InterleavedBufferAttribute:()=>Hs,Interpolant:()=>_s,InterpolateBezier:()=>Au,InterpolateDiscrete:()=>Vo,InterpolateLinear:()=>Tl,InterpolateSmooth:()=>dl,InterpolationSamplingMode:()=>c_,InterpolationSamplingType:()=>l_,InvertStencilOp:()=>Wx,KeepStencilOp:()=>fl,KeyframeTrack:()=>On,LOD:()=>Rl,LatheGeometry:()=>Yl,Layers:()=>Or,LessCompare:()=>gm,LessDepth:()=>yl,LessEqualCompare:()=>tf,LessEqualDepth:()=>Dr,LessEqualStencilFunc:()=>$x,LessStencilFunc:()=>qx,Light:()=>Pi,LightProbe:()=>mc,LightShadow:()=>jr,Line:()=>Ai,Line3:()=>xd,LineBasicMaterial:()=>sn,LineCurve:()=>oa,LineCurve3:()=>Hl,LineDashedMaterial:()=>oc,LineLoop:()=>Vr,LineSegments:()=>ni,LinearFilter:()=>kt,LinearInterpolant:()=>ga,LinearMipMapLinearFilter:()=>Ax,LinearMipMapNearestFilter:()=>wx,LinearMipmapLinearFilter:()=>di,LinearMipmapNearestFilter:()=>Aa,LinearSRGBColorSpace:()=>Xo,LinearToneMapping:()=>zd,LinearTransfer:()=>qo,Loader:()=>vn,LoaderUtils:()=>Ma,LoadingManager:()=>ya,LoopOnce:()=>cm,LoopPingPong:()=>um,LoopRepeat:()=>hm,MOUSE:()=>yx,Material:()=>nn,MaterialBlending:()=>bx,MaterialLoader:()=>gc,MathUtils:()=>__,Matrix2:()=>gd,Matrix3:()=>Qe,Matrix4:()=>Je,MaxEquation:()=>qp,Mesh:()=>qe,MeshBasicMaterial:()=>Ft,MeshDepthMaterial:()=>pa,MeshDistanceMaterial:()=>ma,MeshLambertMaterial:()=>Cn,MeshMatcapMaterial:()=>rc,MeshNormalMaterial:()=>sc,MeshPhongMaterial:()=>nc,MeshPhysicalMaterial:()=>tc,MeshStandardMaterial:()=>fa,MeshToonMaterial:()=>ic,MinEquation:()=>Xp,MirroredRepeatWrapping:()=>Go,MixOperation:()=>om,MultiplyBlending:()=>Od,MultiplyOperation:()=>Ta,NearestFilter:()=>qt,NearestMipMapLinearFilter:()=>Ex,NearestMipMapNearestFilter:()=>Tx,NearestMipmapLinearFilter:()=>ro,NearestMipmapNearestFilter:()=>Yd,NeutralToneMapping:()=>qd,NeverCompare:()=>mm,NeverDepth:()=>xl,NeverStencilFunc:()=>Xx,NoBlending:()=>Zs,NoColorSpace:()=>Ki,NoNormalPacking:()=>Ux,NoToneMapping:()=>Ii,NormalAnimationBlendMode:()=>lh,NormalBlending:()=>so,NormalGAPacking:()=>Ox,NormalRGPacking:()=>Fx,NotEqualCompare:()=>ym,NotEqualDepth:()=>bl,NotEqualStencilFunc:()=>Kx,NumberKeyframeTrack:()=>Zr,Object3D:()=>yt,ObjectLoader:()=>ju,ObjectSpaceNormalMap:()=>fm,OctahedronGeometry:()=>ua,OneFactor:()=>$p,OneMinusConstantAlphaFactor:()=>rm,OneMinusConstantColorFactor:()=>im,OneMinusDstAlphaFactor:()=>jp,OneMinusDstColorFactor:()=>em,OneMinusSrcAlphaFactor:()=>kd,OneMinusSrcColorFactor:()=>Kp,OrthographicCamera:()=>eo,PCFShadowMap:()=>$s,PCFSoftShadowMap:()=>Hp,PMREMGenerator:()=>dh,Path:()=>Ws,PerspectiveCamera:()=>Kt,Plane:()=>li,PlaneGeometry:()=>yn,PlaneHelper:()=>Rd,PointLight:()=>dc,PointLightHelper:()=>vd,Points:()=>Ll,PointsMaterial:()=>ta,PolarGridHelper:()=>bd,PolyhedronGeometry:()=>xs,PositionalAudio:()=>id,PropertyBinding:()=>wt,PropertyMixer:()=>Sc,QuadraticBezierCurve:()=>aa,QuadraticBezierCurve3:()=>la,Quaternion:()=>mn,QuaternionKeyframeTrack:()=>Kr,QuaternionLinearInterpolant:()=>hc,R11_EAC_Format:()=>kc,RED_GREEN_RGTC2_Format:()=>Na,RED_RGTC1_Format:()=>rh,REVISION:()=>Bp,RG11_EAC_Format:()=>Da,RGBADepthPacking:()=>Lx,RGBAFormat:()=>Fn,RGBAIntegerFormat:()=>Ic,RGBA_ASTC_10x10_Format:()=>Qc,RGBA_ASTC_10x5_Format:()=>Kc,RGBA_ASTC_10x6_Format:()=>Jc,RGBA_ASTC_10x8_Format:()=>jc,RGBA_ASTC_12x10_Format:()=>eh,RGBA_ASTC_12x12_Format:()=>th,RGBA_ASTC_4x4_Format:()=>Gc,RGBA_ASTC_5x4_Format:()=>Vc,RGBA_ASTC_5x5_Format:()=>Wc,RGBA_ASTC_6x5_Format:()=>Xc,RGBA_ASTC_6x6_Format:()=>qc,RGBA_ASTC_8x5_Format:()=>Yc,RGBA_ASTC_8x6_Format:()=>$c,RGBA_ASTC_8x8_Format:()=>Zc,RGBA_BPTC_Format:()=>nh,RGBA_ETC2_EAC_Format:()=>Bc,RGBA_PVRTC_2BPPV1_Format:()=>Uc,RGBA_PVRTC_4BPPV1_Format:()=>Nc,RGBA_S3TC_DXT1_Format:()=>Pa,RGBA_S3TC_DXT3_Format:()=>Ia,RGBA_S3TC_DXT5_Format:()=>La,RGBDepthPacking:()=>Dx,RGBFormat:()=>Qd,RGBIntegerFormat:()=>Rx,RGB_BPTC_SIGNED_Format:()=>ih,RGB_BPTC_UNSIGNED_Format:()=>sh,RGB_ETC1_Format:()=>Fc,RGB_ETC2_Format:()=>Oc,RGB_PVRTC_2BPPV1_Format:()=>Dc,RGB_PVRTC_4BPPV1_Format:()=>Lc,RGB_S3TC_DXT1_Format:()=>Ca,RGDepthPacking:()=>Nx,RGFormat:()=>vs,RGIntegerFormat:()=>Pc,RawShaderMaterial:()=>da,Ray:()=>ps,Raycaster:()=>dd,RectAreaLight:()=>pc,RedFormat:()=>Cc,RedIntegerFormat:()=>Ra,ReinhardToneMapping:()=>Hd,RenderObjectRefreshType:()=>u_,RenderTarget:()=>Zo,RenderTarget3D:()=>ad,RepeatWrapping:()=>Bs,ReplaceStencilOp:()=>kx,ReverseSubtractEquation:()=>Wp,RingGeometry:()=>$r,SIGNED_R11_EAC_Format:()=>zc,SIGNED_RED_GREEN_RGTC2_Format:()=>ah,SIGNED_RED_RGTC1_Format:()=>oh,SIGNED_RG11_EAC_Format:()=>Hc,SRGBColorSpace:()=>_n,SRGBTransfer:()=>Tt,Scene:()=>zr,ShaderChunk:()=>lt,ShaderLib:()=>Li,ShaderMaterial:()=>$n,ShadowMaterial:()=>ec,Shape:()=>Xs,ShapeGeometry:()=>$l,ShapePath:()=>Id,ShapeUtils:()=>ci,ShortType:()=>Zd,Skeleton:()=>Pl,SkeletonHelper:()=>yd,SkinnedMesh:()=>Cl,Source:()=>Ru,Sphere:()=>tn,SphereGeometry:()=>Ci,Spherical:()=>pd,SphericalHarmonics3:()=>va,SplineCurve:()=>ca,SpotLight:()=>uc,SpotLightHelper:()=>_d,Sprite:()=>Al,SpriteMaterial:()=>jo,SrcAlphaFactor:()=>Bd,SrcAlphaSaturateFactor:()=>tm,SrcColorFactor:()=>Zp,StaticCopyUsage:()=>i_,StaticDrawUsage:()=>ch,StaticReadUsage:()=>e_,StereoCamera:()=>td,StreamCopyUsage:()=>r_,StreamDrawUsage:()=>Qx,StreamReadUsage:()=>n_,StringKeyframeTrack:()=>qi,SubtractEquation:()=>Vp,SubtractiveBlending:()=>Fd,TOUCH:()=>vx,TangentSpaceNormalMap:()=>Zi,TetrahedronGeometry:()=>Zl,Texture:()=>Yt,TextureLoader:()=>Ju,TextureSource:()=>ti,TextureUtils:()=>Dd,Timer:()=>vc,TimestampQuery:()=>a_,TorusGeometry:()=>Kl,TorusKnotGeometry:()=>Jl,Triangle:()=>Ei,TriangleFanDrawMode:()=>Ix,TriangleStripDrawMode:()=>Px,TrianglesDrawMode:()=>Cx,TubeGeometry:()=>jl,UVMapping:()=>Ec,Uint16BufferAttribute:()=>Ko,Uint32BufferAttribute:()=>Jo,Uint8BufferAttribute:()=>Du,Uint8ClampedBufferAttribute:()=>Nu,Uniform:()=>ld,UniformsGroup:()=>cd,UniformsLib:()=>Ee,UniformsUtils:()=>Em,UnsignedByteType:()=>Bn,UnsignedInt101111Type:()=>Jd,UnsignedInt248Type:()=>js,UnsignedInt5999Type:()=>Kd,UnsignedIntType:()=>ii,UnsignedShort4444Type:()=>Ac,UnsignedShort5551Type:()=>Rc,UnsignedShortType:()=>oo,VSMShadowMap:()=>io,Vector2:()=>re,Vector3:()=>R,Vector4:()=>At,VectorKeyframeTrack:()=>_a,VideoFrameTexture:()=>zu,VideoTexture:()=>Dl,WebGL3DRenderTarget:()=>Pu,WebGLArrayRenderTarget:()=>Cu,WebGLCoordinateSystem:()=>Xn,WebGLCubeRenderTarget:()=>Fa,WebGLRenderTarget:()=>Rn,WebGLRenderer:()=>fh,WebGLUtils:()=>oy,WebGPUCoordinateSystem:()=>ks,WebXRController:()=>Br,WireframeGeometry:()=>Ql,WrapAroundEnding:()=>Wo,ZeroCurvatureEnding:()=>Fs,ZeroFactor:()=>Yp,ZeroSlopeEnding:()=>Os,ZeroStencilOp:()=>Bx,createCanvasElement:()=>vm,error:()=>ke,getConsoleFunction:()=>p_,log:()=>$o,setConsoleFunction:()=>f_,warn:()=>be,warnOnce:()=>Hi});function K_(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function BS(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function yT(i,e,t,n,s,r){let o=new fe(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function p(y){let M=!1,v=f(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new qe(new Ri(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ao(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(J_),c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Tt,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qe(new yn(2,2),new $n({name:"BackgroundMaterial",uniforms:ao(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=mt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(lf,Tm(i)),t.buffers.color.setClear(lf.r,lf.g,lf.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function vT(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(I,U,k,L,B){let V=!1,z=d(I,L,k,U);r!==z&&(r=z,c(r.object)),V=f(I,L,k,B),V&&p(I,L,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(I,U,k,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,U,k,L){let B=L.wireframe===!0,V=n[U.id];V===void 0&&(V={},n[U.id]=V);let z=I.isInstancedMesh===!0?I.id:0,ie=V[z];ie===void 0&&(ie={},V[z]=ie);let X=ie[k.id];X===void 0&&(X={},ie[k.id]=X);let J=X[B];return J===void 0&&(J=u(l()),X[B]=J),J}function u(I){let U=[],k=[],L=[];for(let B=0;B<t;B++)U[B]=0,k[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,U,k,L){let B=r.attributes,V=U.attributes,z=0,ie=k.getAttributes();for(let X in ie)if(ie[X].location>=0){let se=B[X],Ce=V[X];if(Ce===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Ce=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Ce=I.instanceColor)),se===void 0||se.attribute!==Ce||Ce&&se.data!==Ce.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function p(I,U,k,L){let B={},V=U.attributes,z=0,ie=k.getAttributes();for(let X in ie)if(ie[X].location>=0){let se=V[X];se===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));let Ce={};Ce.attribute=se,se&&se.data&&(Ce.data=se.data),B[X]=Ce,z++}r.attributes=B,r.attributesNum=z,r.index=L}function x(){let I=r.newAttributes;for(let U=0,k=I.length;U<k;U++)I[U]=0}function m(I){g(I,0)}function g(I,U){let k=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;k[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==U&&(i.vertexAttribDivisor(I,U),B[I]=U)}function y(){let I=r.newAttributes,U=r.enabledAttributes;for(let k=0,L=U.length;k<L;k++)U[k]!==I[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function M(I,U,k,L,B,V,z){z===!0?i.vertexAttribIPointer(I,U,k,B,V):i.vertexAttribPointer(I,U,k,L,B,V)}function v(I,U,k,L){x();let B=L.attributes,V=k.getAttributes(),z=U.defaultAttributeValues;for(let ie in V){let X=V[ie];if(X.location>=0){let J=B[ie];if(J===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let se=J.normalized,Ce=J.itemSize,Ie=e.get(J);if(Ie===void 0)continue;let Z=Ie.buffer,he=Ie.type,Pe=Ie.bytesPerElement,He=he===i.INT||he===i.UNSIGNED_INT||J.gpuType===wc;if(J.isInterleavedBufferAttribute){let me=J.data,Fe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Mt=J.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Be=0;Be<X.locationSize;Be++)g(X.location+Be,me.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Be=0;Be<X.locationSize;Be++)m(X.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Be=0;Be<X.locationSize;Be++)M(X.location+Be,Ce/X.locationSize,he,se,Fe*Pe,(Mt+Ce/X.locationSize*Be)*Pe,He)}else{if(J.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)g(X.location+me,J.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let me=0;me<X.locationSize;me++)M(X.location+me,Ce/X.locationSize,he,se,Ce*Pe,Ce/X.locationSize*me*Pe,He)}}else if(z!==void 0){let se=z[ie];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}y()}function b(){P();for(let I in n){let U=n[I];for(let k in U){let L=U[k];for(let B in L){let V=L[B];for(let z in V)h(V[z].object),delete V[z];delete L[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let k in U){let L=U[k];for(let B in L){let V=L[B];for(let z in V)h(V[z].object),delete V[z];delete L[B]}}delete n[I.id]}function _(I){for(let U in n){let k=n[U];for(let L in k){let B=k[L];if(B[I.id]===void 0)continue;let V=B[I.id];for(let z in V)h(V[z].object),delete V[z];delete B[I.id]}}}function S(I){for(let U in n){let k=n[U],L=I.isInstancedMesh===!0?I.id:0,B=k[L];if(B!==void 0){for(let V in B){let z=B[V];for(let ie in z)h(z[ie].object),delete z[ie];delete B[V]}delete k[L],Object.keys(k).length===0&&delete n[U]}}}function P(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function MT(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ST(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Bn&&_!==An&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:T}}function bT(i){let e=this,t=null,n=0,s=!1,r=!1,o=new li,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,f);for(let b=0;b!==M;++b)v[b]=t[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function P_(i,e,t){return new Fa(i,{minFilter:di,generateMipmaps:e,type:fi,colorSpace:Xo,depthBuffer:t})}function ph(i,e,t){return new $n({name:i,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:gn,blending:Zs,depthTest:!1,depthWrite:!1})}function CT(){return ph("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${j_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function PT(){return ph("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Q_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function IT(){return ph("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ET}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function I_(){return ph("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function L_(){return ph("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function LT(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ea||f===wa)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Fa(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ea||f===wa,x=f===Yi||f===Js;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new dh(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new dh(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ea?u.mapping=Yi:f===wa&&(u.mapping=Js),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function DT(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function NT(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Jo:Ko,v=new M(Math.ceil(y/3)*6,1),b=v.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,P=0;S<y;S+=3){let A=_[S+0],I=_[S+1],U=_[S+2];b[P++]=A,b[P++]=I,b[P++]=I,b[P++]=U,b[P++]=U,b[P++]=A}}else{g=m.version;for(let _=0,S=0;_<y;_+=3){let P=_+0,A=_+1,I=_+2;b[S++]=P,b[S++]=A,b[S++]=A,b[S++]=I,b[S++]=I,b[S++]=P}}v.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function UT(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function FT(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function OT(i,e,t){let n=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*d),_=new Ur(T,v,b,d);_.type=An,_.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let I=m[A],U=g[A],k=y[A],L=v*b*4*A;for(let B=0;B<I.count;B++){let V=B*S;f===!0&&(s.fromBufferAttribute(I,B),T[L+V+0]=s.x,T[L+V+1]=s.y,T[L+V+2]=s.z,T[L+V+3]=0),p===!0&&(s.fromBufferAttribute(U,B),T[L+V+4]=s.x,T[L+V+5]=s.y,T[L+V+6]=s.z,T[L+V+7]=0),x===!0&&(s.fromBufferAttribute(k,B),T[L+V+8]=s.x,T[L+V+9]=s.y,T[L+V+10]=s.z,T[L+V+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new re(v,b)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function BT(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function zT(i,e,t,n,s,r){let o=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new $e;h.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let d=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qe(h,d),f=new eo(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let T=o.width,_=o.height;M.length>0&&a===null&&(a=new Rn(T,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(T,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Wi(T,_),r===!0&&(c.format=$i,c.type=js)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<M.length;P++){let A=M[P];A.setSize&&A.setSize(T,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===Ii&&M.length===0)return!1;if(y=T,T!==null){let _=T.width,S=T.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Ii,!0},this.hasRenderPass=function(){return v},this.end=function(b,T){b.toneMapping=g,m=!0;let _=o,S=a;for(let P=0;P<M.length;P++){let A=M[P];A.enabled!==!1&&(A.render(b,S,_,T),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},mt.getTransfer(p)===Tt&&(d.defines.SRGB_TRANSFER="");let P=kT[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(y),b.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function Oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=D_[s];if(r===void 0&&(r=new Float32Array(s),D_[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hf(i,e){let t=N_[e];t===void 0&&(t=new Int32Array(e),N_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function VT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function WT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function XT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;O_.set(n),i.uniformMatrix2fv(this.addr,!1,O_),cn(t,n)}}function qT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;F_.set(n),i.uniformMatrix3fv(this.addr,!1,F_),cn(t,n)}}function YT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;U_.set(n),i.uniformMatrix4fv(this.addr,!1,U_),cn(t,n)}}function $T(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ZT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function KT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function JT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function jT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function eE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function tE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function uf(i){return i.version===0&&(i.compareFunction=sf,i.needsUpdate=!0),i}function nE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=uf(ty):r=ey,t.setTexture2D(e||r,s)}function iE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sy,s)}function sE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=uf(ny):r=ry,t.setTextureCube(e||r,s)}function rE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||iy,s)}function oE(i){switch(i){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return WT;case 35674:return XT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return $T;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return JT;case 5125:return jT;case 36294:return QT;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return rE}}function aE(i,e){i.uniform1fv(this.addr,e)}function lE(i,e){let t=Oa(e,this.size,2);i.uniform2fv(this.addr,t)}function cE(i,e){let t=Oa(e,this.size,3);i.uniform3fv(this.addr,t)}function hE(i,e){let t=Oa(e,this.size,4);i.uniform4fv(this.addr,t)}function uE(i,e){let t=Oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dE(i,e){let t=Oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fE(i,e){let t=Oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pE(i,e){i.uniform1iv(this.addr,e)}function mE(i,e){i.uniform2iv(this.addr,e)}function gE(i,e){i.uniform3iv(this.addr,e)}function xE(i,e){i.uniform4iv(this.addr,e)}function _E(i,e){i.uniform1uiv(this.addr,e)}function yE(i,e){i.uniform2uiv(this.addr,e)}function vE(i,e){i.uniform3uiv(this.addr,e)}function ME(i,e){i.uniform4uiv(this.addr,e)}function SE(i,e,t){let n=this.cache,s=e.length,r=hf(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uf(ty):o=ey;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function bE(i,e,t){let n=this.cache,s=e.length,r=hf(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sy,r[o])}function TE(i,e,t){let n=this.cache,s=e.length,r=hf(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=uf(ny):o=ry;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function EE(i,e,t){let n=this.cache,s=e.length,r=hf(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||iy,r[o])}function wE(i){switch(i){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return hE;case 35674:return uE;case 35675:return dE;case 35676:return fE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return xE;case 5125:return _E;case 36294:return yE;case 36295:return vE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return EE}}function B_(i,e){i.seq.push(e),i.map[e.id]=e}function AE(i,e,t){let n=i.name,s=n.length;for(Um.lastIndex=0;;){let r=Um.exec(n),o=Um.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){B_(t,c===void 0?new Om(a,i,e):new Bm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new km(a),B_(t,d)),t=d}}}function k_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function PE(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function IE(i){mt._getMatrix(z_,mt.workingColorSpace,i);let e=`mat3( ${z_.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case qo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function H_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+PE(i.getShaderSource(e),a)}else return r}function LE(i,e){let t=IE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function NE(i,e){let t=DE[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function UE(){mt.getLuminanceCoefficients(cf);let i=cf.x.toFixed(4),e=cf.y.toFixed(4),t=cf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uh).join(`
`)}function OE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function uh(i){return i!==""}function G_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function V_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function zm(i){return i.replace(kE,zE)}function zE(i,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zm(t)}function W_(i){return i.replace(HE,GE)}function GE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function X_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WE(i){return VE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function qE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":XE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function $E(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":YE[i.combine]||"ENVMAP_BLENDING_NONE"}function ZE(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=WE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qE(t),d=$E(t),u=FE(t),f=OE(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(uh).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(uh).join(`
`),m.length>0&&(m+=`
`)):(x=[X_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uh).join(`
`),m=[X_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?NE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,LE("linearToOutputTexel",t.outputColorSpace),UE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uh).join(`
`)),o=zm(o),o=G_(o,t),o=V_(o,t),a=zm(a),a=G_(a,t),a=V_(a,t),o=W_(o),a=W_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,M=g+m+a,v=k_(s,s.VERTEX_SHADER,y),b=k_(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(b)||"",L=I.trim(),B=U.trim(),V=k.trim(),z=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,b);else{let X=H_(s,v,"vertex"),J=H_(s,b,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+X+`
`+J)}else L!==""?be("WebGLProgram: Program Info Log:",L):(B===""||V==="")&&(ie=!1);ie&&(A.diagnostics={runnable:z,programLog:L,vertexShader:{log:B,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(v),s.deleteShader(b),_=new Ua(s,p),S=BE(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,RE)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}function JE(i){return i===vs||i===Da||i===Na}function jE(i,e,t,n,s,r){let o=new Or,a=new Hm,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,P,A,I,U){let k=A.fog,L=I.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||B,V),ie=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&be("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=J!==void 0?J.length:0,Ce=0;L.morphAttributes.position!==void 0&&(Ce=1),L.morphAttributes.normal!==void 0&&(Ce=2),L.morphAttributes.color!==void 0&&(Ce=3);let Ie,Z,he,Pe;if(ie){let we=Li[ie];Ie=we.vertexShader,Z=we.fragmentShader}else{Ie=_.vertexShader,Z=_.fragmentShader;let we=a.getVertexShaderStage(_),Ct=a.getFragmentShaderStage(_);a.update(_,we,Ct),he=we.id,Pe=Ct.id}let He=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Mt=I.isBatchedMesh===!0,Be=!!_.map,it=!!_.matcap,st=!!z,ne=st&&z.isPMREMTexture===!0,pe=!!_.aoMap,oe=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,Ge=!!_.displacementMap,Ue=!!_.emissiveMap,Ke=!!_.metalnessMap,et=!!_.roughnessMap,pt=_.anisotropy>0,O=_.clearcoat>0,Vt=_.diffuseRoughness>0,ct=_.dispersion>0,nt=_.retroreflectivity>0,ae=_.iridescence>0,Wt=_.sheen>0,Xe=_.transmission>0,je=pt&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,E=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,le=Vt&&!!_.diffuseRoughnessMap,te=ae&&!!_.iridescenceMap,ge=ae&&!!_.iridescenceThicknessMap,Me=Wt&&!!_.sheenColorMap,K=Wt&&!!_.sheenRoughnessMap,j=!!_.specularMap,_e=!!_.specularColorMap,N=!!_.specularIntensityMap,ee=Xe&&!!_.transmissionMap,$=Xe&&!!_.thicknessMap,ye=!!_.gradientMap,de=!!_.alphaMap,xe=_.alphaTest>0,ze=!!_.alphaHash,ht=!!_.extensions,ce=Ii;_.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ce=i.toneMapping);let We=ne?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,at={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:Z,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:Pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Mt,batchingColor:Mt&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:it,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:ne,envMapMaxLod:ne?We.length-1:null,envMapSize:ne?We[0].width:null,aoMap:pe,lightMap:oe,bumpMap:Te,normalMap:ue,displacementMap:Ge,emissiveMap:Ue,normalMapObjectSpace:ue&&_.normalMapType===fm,normalMapTangentSpace:ue&&_.normalMapType===Zi,packedNormalMap:ue&&_.normalMapType===Zi&&JE(_.normalMap.format),metalnessMap:Ke,roughnessMap:et,anisotropy:pt,anisotropyMap:je,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Vt,diffuseRoughnessMap:le,dispersion:ct,retroreflection:nt,iridescence:ae,iridescenceMap:te,iridescenceThicknessMap:ge,sheen:Wt,sheenColorMap:Me,sheenRoughnessMap:K,specularMap:j,specularColorMap:_e,specularIntensityMap:N,transmission:Xe,transmissionMap:ee,thicknessMap:$,gradientMap:ye,opaque:_.transparent===!1&&_.blending===so&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:xe,alphaHash:ze,combine:_.combine,mapUv:Be&&f(_.map.channel),aoMapUv:pe&&f(_.aoMap.channel),lightMapUv:oe&&f(_.lightMap.channel),bumpMapUv:Te&&f(_.bumpMap.channel),normalMapUv:ue&&f(_.normalMap.channel),displacementMapUv:Ge&&f(_.displacementMap.channel),emissiveMapUv:Ue&&f(_.emissiveMap.channel),metalnessMapUv:Ke&&f(_.metalnessMap.channel),roughnessMapUv:et&&f(_.roughnessMap.channel),anisotropyMapUv:je&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:_e&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:de&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ue||pt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Be||de),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=u[_.type],P;if(S){let A=Li[S];P=Em.clone(A.uniforms)}else P=_.uniforms;return P}function M(_,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new ZE(i,S,_,s),c.push(P),h.set(S,P)),P}function v(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function QE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ew(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Y_(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(u,f,p,x,m,g){let y=a(u,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||ew),n.length>1&&n.sort(f||q_),s.length>1&&s.sort(f||q_)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function tw(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Y_,i.set(n,[o])):s>=r.length?(o=new Y_,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new fe};break;case"SpotLight":t={position:new R,direction:new R,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function iw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function rw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ow(i){let e=new nw,t=iw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Je,o=new Je;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,M=0,v=0,b=0,T=0,_=0,S=0,P=0,A=0;c.sort(rw);for(let U=0,k=c.length;U<k;U++){let L=c[U],B=L.color,V=L.intensity,z=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===vs?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*V,d+=B.g*V,u+=B.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);A++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,se=t.get(L);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=se,n.sunShadowMap[p]=ie;let Ce=J.getViewportCount();for(let Ie=0;Ie<Ce;Ie++)n.sunShadowMatrix[x+Ie]=J.getMatrix(Ie),n.sunShadowCascade[x+Ie]=J._cascadeData[Ie];x+=Ce,p++}n.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,se=t.get(L);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(V),X.distance=z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[y]=X;let J=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,J.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[y]=J.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,n.spotShadow[y]=se,n.spotShadowMap[y]=ie,_++}y++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=X,M++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let J=L.shadow,se=t.get(L);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,se.shadowCameraNear=J.camera.near,se.shadowCameraFar=J.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[v]=X,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=A,n.version=sw++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function $_(i){let e=new ow(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aw(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $_(i),e.set(s,[a])):r>=o.length?(a=new $_(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function dw(i,e,t){let n=new Vi,s=new re,r=new re,o=new At,a=new pa,l=new ma,c={},h=t.maxTextureSize,d={[ys]:gn,[gn]:ys,[Gt]:Gt},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:lw,fragmentShader:cw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let g=this.type;this.render=function(T,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Hp&&(be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let P=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Zs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let V=T[L],z=V.shadow;if(z===void 0){be("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ie=z.getFrameExtents();s.multiply(ie),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===io){if(V.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Rn(s.x,s.y,{format:vs,type:fi,minFilter:kt,magFilter:kt,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Wi(s.x,s.y,An),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Gi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt}else V.isPointLight?(z.map=new Fa(s.x),z.map.depthTexture=new ia(s.x,ii)):(z.map=new Rn(s.x,s.y),z.map.depthTexture=new Wi(s.x,s.y,ii)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Gi,this.type===$s?(z.map.depthTexture.compareFunction=X?nf:tf,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();V.isPointLight!==!0&&z.updateMatrices(V,S);let se=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Ce=0;Ce<J;Ce++){let Ie=z.getCamera(Ce);if(V.isPointLight){let Z=z.camera,he=z.matrix,Pe=V.distance||Z.far;Pe!==Z.far&&(Z.far=Pe,Z.updateProjectionMatrix()),hh.setFromMatrixPosition(V.matrixWorld),Z.position.copy(hh),Fm.copy(Z.position),Fm.add(hw[Ce]),Z.up.copy(uw[Ce]),Z.lookAt(Fm),Z.updateMatrixWorld(),he.makeTranslation(-hh.x,-hh.y,-hh.z),Z_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Z_,Z.coordinateSystem,Z.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ce),i.clear();else{Ce===0&&(i.setRenderTarget(z.map),i.clear());let Z=z.getViewport(Ce);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(o)}n=z.getFrustum(Ce),v(_,S,Ie,V,se,this.type)}z.isPointLightShadow!==!0&&this.type===io&&y(z,S),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,A,I)};function y(T,_){let S=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Rn(s.x,s.y,{format:vs,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,S,f,x,null)}function M(T,_,S,P){let A=null,I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)A=I;else if(A=S.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=A.uuid,k=_.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let B=L[k];B===void 0&&(B=A.clone(),L[k]=B,_.addEventListener("dispose",b)),A=B}if(A.visible=_.visible,A.wireframe=_.wireframe,P===io?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=i.properties.get(A);U.light=S}return A}function v(T,_,S,P,A,I){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===io)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let L=e.update(T),B=T.material;if(Array.isArray(B)){let V=L.groups;for(let z=0,ie=V.length;z<ie;z++){let X=V[z],J=B[X.materialIndex];if(J&&J.visible){let se=M(T,J,P,I);T.onBeforeShadow(i,T,_,S,L,se,X),i.renderBufferDirect(S,null,L,se,T,X),T.onAfterShadow(i,T,_,S,L,se,X)}}}else if(B.visible){let V=M(T,B,P,I);T.onBeforeShadow(i,T,_,S,L,V,null),i.renderBufferDirect(S,null,L,V,T,null),T.onAfterShadow(i,T,_,S,L,V,null)}}let k=T.children;for(let L=0,B=k.length;L<B;L++)v(k[L],_,S,P,A,I)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let P=c[S],A=T.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function fw(i,e){function t(){let N=!1,ee=new At,$=null,ye=new At(0,0,0,0);return{setMask:function(de){$!==de&&!N&&(i.colorMask(de,de,de,de),$=de)},setLocked:function(de){N=de},setClear:function(de,xe,ze,ht,ce){ce===!0&&(de*=ht,xe*=ht,ze*=ht),ee.set(de,xe,ze,ht),ye.equals(ee)===!1&&(i.clearColor(de,xe,ze,ht),ye.copy(ee))},reset:function(){N=!1,$=null,ye.set(-1,0,0,0)}}}function n(){let N=!1,ee=!1,$=null,ye=null,de=null;return{setReversed:function(xe){if(ee!==xe){let ze=e.get("EXT_clip_control");xe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ee=xe;let ht=de;de=null,this.setClear(ht)}},getReversed:function(){return ee},setTest:function(xe){xe?me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(xe){$!==xe&&!N&&(i.depthMask(xe),$=xe)},setFunc:function(xe){if(ee&&(xe=x_[xe]),ye!==xe){switch(xe){case xl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=xe}},setLocked:function(xe){N=xe},setClear:function(xe){de!==xe&&(de=xe,ee&&(xe=1-xe),i.clearDepth(xe))},reset:function(){N=!1,$=null,ye=null,de=null,ee=!1}}}function s(){let N=!1,ee=null,$=null,ye=null,de=null,xe=null,ze=null,ht=null,ce=null;return{setTest:function(We){N||(We?me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(We){ee!==We&&!N&&(i.stencilMask(We),ee=We)},setFunc:function(We,at,we){($!==We||ye!==at||de!==we)&&(i.stencilFunc(We,at,we),$=We,ye=at,de=we)},setOp:function(We,at,we){(xe!==We||ze!==at||ht!==we)&&(i.stencilOp(We,at,we),xe=We,ze=at,ht=we)},setLocked:function(We){N=We},setClear:function(We){ce!==We&&(i.clearStencil(We),ce=We)},reset:function(){N=!1,ee=null,$=null,ye=null,de=null,xe=null,ze=null,ht=null,ce=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new fe(0,0,0),P=0,A=!1,I=null,U=null,k=null,L=null,B=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=ie>=2);let J=null,se={},Ce=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Z=new At().fromArray(Ce),he=new At().fromArray(Ie);function Pe(N,ee,$,ye){let de=new Uint8Array(4),xe=i.createTexture();i.bindTexture(N,xe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<$;ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ee+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return xe}let He={};He[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(Dr),Te(!1),ue(Ud),me(i.CULL_FACE),pe(Zs);function me(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Fe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Mt(N,ee){return u[N]!==ee?(i.bindFramebuffer(N,ee),u[N]=ee,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Be(N,ee){let $=p,ye=!1;if(N){$=f.get(ee),$===void 0&&($=[],f.set(ee,$));let de=N.textures;if($.length!==de.length||$[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,ze=de.length;xe<ze;xe++)$[xe]=i.COLOR_ATTACHMENT0+xe;$.length=de.length,ye=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ye=!0);ye&&i.drawBuffers($)}function it(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let st={[Ks]:i.FUNC_ADD,[Vp]:i.FUNC_SUBTRACT,[Wp]:i.FUNC_REVERSE_SUBTRACT};st[Xp]=i.MIN,st[qp]=i.MAX;let ne={[Yp]:i.ZERO,[$p]:i.ONE,[Zp]:i.SRC_COLOR,[Bd]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[Qp]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[kd]:i.ONE_MINUS_SRC_ALPHA,[em]:i.ONE_MINUS_DST_COLOR,[jp]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[rm]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(N,ee,$,ye,de,xe,ze,ht,ce,We){if(N===Zs){m===!0&&(Fe(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),N!==Gp){if(N!==g||We!==A){if((y!==Ks||b!==Ks)&&(i.blendEquation(i.FUNC_ADD),y=Ks,b=Ks),We)switch(N){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",N);break}else switch(N){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fd:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Od:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",N);break}M=null,v=null,T=null,_=null,S.set(0,0,0),P=0,g=N,A=We}return}de=de||ee,xe=xe||$,ze=ze||ye,(ee!==y||de!==b)&&(i.blendEquationSeparate(st[ee],st[de]),y=ee,b=de),($!==M||ye!==v||xe!==T||ze!==_)&&(i.blendFuncSeparate(ne[$],ne[ye],ne[xe],ne[ze]),M=$,v=ye,T=xe,_=ze),(ht.equals(S)===!1||ce!==P)&&(i.blendColor(ht.r,ht.g,ht.b,ce),S.copy(ht),P=ce),g=N,A=!1}function oe(N,ee){N.side===Gt?Fe(i.CULL_FACE):me(i.CULL_FACE);let $=N.side===gn;ee&&($=!$),Te($),N.blending===so&&N.transparent===!1?pe(Zs):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ye=N.stencilWrite;a.setTest(ye),ye&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function ue(N){N!==kp?(me(i.CULL_FACE),N!==U&&(N===Ud?i.cullFace(i.BACK):N===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),U=N}function Ge(N){N!==k&&(z&&i.lineWidth(N),k=N)}function Ue(N,ee,$){N?(me(i.POLYGON_OFFSET_FILL),(L!==ee||B!==$)&&(L=ee,B=$,o.getReversed()&&(ee=-ee,$=-$),i.polygonOffset(ee,$))):Fe(i.POLYGON_OFFSET_FILL)}function Ke(N){N?me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function et(N){N===void 0&&(N=i.TEXTURE0+V-1),J!==N&&(i.activeTexture(N),J=N)}function pt(N,ee,$){$===void 0&&(J===null?$=i.TEXTURE0+V-1:$=J);let ye=se[$];ye===void 0&&(ye={type:void 0,texture:void 0},se[$]=ye),(ye.type!==N||ye.texture!==ee)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(N,ee||He[N]),ye.type=N,ye.texture=ee)}function O(){let N=se[J];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function nt(){try{i.texSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function ae(){try{i.texSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function Wt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function je(){try{i.texStorage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function G(){try{i.texImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function le(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function te(N,ee){d[N]!==ee&&(i.pixelStorei(N,ee),d[N]=ee)}function ge(N){Z.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function Me(N){he.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function K(N,ee){let $=c.get(ee);$===void 0&&($=new WeakMap,c.set(ee,$));let ye=$.get(N);ye===void 0&&(ye=i.getUniformBlockIndex(ee,N.name),i.uniformBlockBinding(ee,ye,ye),$.set(N,ye))}function j(N,ee,$){let de=c.get(ee).get(N);l[de]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,$),l[de]=$)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,se={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new fe(0,0,0),P=0,A=!1,I=null,U=null,k=null,L=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Fe,bindFramebuffer:Mt,drawBuffers:Be,useProgram:it,setBlending:pe,setMaterial:oe,setFlipSided:Te,setCullFace:ue,setLineWidth:Ge,setPolygonOffset:Ue,setScissorTest:Ke,activeTexture:et,bindTexture:pt,unbindTexture:O,compressedTexImage2D:Vt,compressedTexImage3D:ct,texImage2D:E,texImage3D:G,pixelStorei:te,getParameter:le,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:je,texStorage3D:C,texSubImage2D:nt,texSubImage3D:ae,compressedTexSubImage2D:Wt,compressedTexSubImage3D:Xe,scissor:ge,viewport:Me,reset:_e}}function pw(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):Yo("canvas")}function y(C,E,G){let le=1,te=je(C);if((te.width>G||te.height>G)&&(le=G/Math.max(te.width,te.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ge=Math.floor(le*te.width),Me=Math.floor(le*te.height);u===void 0&&(u=g(ge,Me));let K=E?g(ge,Me):u;return K.width=ge,K.height=Me,K.getContext("2d").drawImage(C,0,0,ge,Me),be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ge+"x"+Me+")."),K}else return"data"in C&&be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,E,G,le,te,ge=!1){if(C!==null){if(i[C]!==void 0)return i[C];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Me;le&&(Me=e.get("EXT_texture_norm16"),Me||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8),G===i.UNSIGNED_SHORT&&Me&&(K=Me.R16_EXT),G===i.SHORT&&Me&&(K=Me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),E===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8),G===i.UNSIGNED_SHORT&&Me&&(K=Me.RG16_EXT),G===i.SHORT&&Me&&(K=Me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(G===i.UNSIGNED_SHORT&&Me&&(K=Me.RGB16_EXT),G===i.SHORT&&Me&&(K=Me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){let j=ge?qo:mt.getTransfer(te);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=j===Tt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Me&&(K=Me.RGBA16_EXT),G===i.SHORT&&Me&&(K=Me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(C,E){let G;return C?E===null||E===ii||E===js?G=i.DEPTH24_STENCIL8:E===An?G=i.DEPTH32F_STENCIL8:E===oo&&(G=i.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===js?G=i.DEPTH_COMPONENT24:E===An?G=i.DEPTH_COMPONENT32F:E===oo&&(G=i.DEPTH_COMPONENT16),G}function S(C,E){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==kt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){let E=new WeakRef(C);n.get(C).__ref=E,p.add(E),x.register(C,E,E)}function A(C){let E=n.get(C).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function I(C){k(C.target)}function U(C){L(C.target)}function k(C){C.removeEventListener("dispose",I),A(C),V(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",U),A(C),ie(C)}function B(){for(let C of p){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):k(E))}p.clear(),d.clear()}function V(C){let E=n.get(C);if(E.__webglInit===void 0)return;let G=C.source,le=f.get(G);if(le){let te=le[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(C),Object.keys(le).length===0&&f.delete(G)}n.remove(C)}function z(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let G=C.source,le=f.get(G);delete le[E.__cacheKey],o.memory.textures--}function ie(C){let E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&k(G),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ge=0;ge<E.__webglFramebuffer[te].length;ge++)i.deleteFramebuffer(E.__webglFramebuffer[te][ge]);else i.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)i.deleteFramebuffer(E.__webglFramebuffer[te]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let le=C.textures;for(let te=0,ge=le.length;te<ge;te++){let Me=n.get(le[te]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(le[te])}n.remove(C)}let X=0;function J(){X=0}function se(){return X}function Ce(C){X=C}function Ie(){let C=X;return C>=s.maxTextures&&be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function Z(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function he(C,E){let G=n.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let le=C.image;if(le===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,C,E);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function Pe(C,E){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){oe(G,C,E);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function He(C,E){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){oe(G,C,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function me(C,E){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Te(G,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let Fe={[Bs]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},Mt={[qt]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Be={[mm]:i.NEVER,[sf]:i.ALWAYS,[gm]:i.LESS,[tf]:i.LEQUAL,[xm]:i.EQUAL,[nf]:i.GEQUAL,[_m]:i.GREATER,[ym]:i.NOTEQUAL};function it(C,E){if(E.type===An&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kt||E.magFilter===Aa||E.magFilter===ro||E.magFilter===di||E.minFilter===kt||E.minFilter===Aa||E.minFilter===ro||E.minFilter===di)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Fe[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Fe[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Fe[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Mt[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==ro&&E.minFilter!==di||E.type===An&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function st(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I),P(E));let le=E.source,te=f.get(le);te===void 0&&(te={},f.set(le,te));let ge=Z(E);if(ge!==C.__cacheKey){te[ge]===void 0&&(te[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[ge].usedTimes++;let Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&z(E)),C.__cacheKey=ge,C.__webglTexture=te[ge].texture}return G}function ne(C,E,G){return Math.floor(Math.floor(C/G)/E)}function pe(C,E,G,le){let ge=C.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,G,le,E.data);else{ge.sort((N,ee)=>N.start-ee.start);let Me=0;for(let N=1;N<ge.length;N++){let ee=ge[Me],$=ge[N],ye=ee.start+ee.count,de=ne($.start,E.width,4),xe=ne(ee.start,E.width,4);$.start<=ye+1&&de===xe&&ne($.start+$.count-1,E.width,4)===de?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++Me,ge[Me]=$)}ge.length=Me+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,ee=ge.length;N<ee;N++){let $=ge[N],ye=Math.floor($.start/4),de=Math.ceil($.count/4),xe=ye%E.width,ze=Math.floor(ye/E.width),ht=de,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,xe,ze,ht,ce,G,le,E.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function oe(C,E,G){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);let te=st(C,E),ge=E.source;t.bindTexture(le,C.__webglTexture,i.TEXTURE0+G);let Me=n.get(ge);if(ge.version!==Me.__version||te===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ce=mt.getPrimaries(mt.workingColorSpace),We=E.colorSpace===Ki?null:mt.getPrimaries(E.colorSpace),at=E.colorSpace===Ki||ce===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let j=y(E.image,!1,s.maxTextureSize);j=Xe(E,j);let _e=r.convert(E.format,E.colorSpace),N=r.convert(E.type),ee=T(E.internalFormat,_e,N,E.normalized,E.colorSpace,E.isVideoTexture);it(le,E);let $,ye=E.mipmaps,de=E.isVideoTexture!==!0,xe=Me.__version===void 0||te===!0,ze=ge.dataReady,ht=S(E,j);if(E.isDepthTexture)ee=_(E.format===$i,E.type),xe&&(de?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,_e,N,null));else if(E.isDataTexture)if(ye.length>0){de&&xe&&t.texStorage2D(i.TEXTURE_2D,ht,ee,ye[0].width,ye[0].height);for(let ce=0,We=ye.length;ce<We;ce++)$=ye[ce],de?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,$.width,$.height,_e,N,$.data):t.texImage2D(i.TEXTURE_2D,ce,ee,$.width,$.height,0,_e,N,$.data);E.generateMipmaps=!1}else de?(xe&&t.texStorage2D(i.TEXTURE_2D,ht,ee,j.width,j.height),ze&&pe(E,j,_e,N)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,_e,N,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ee,ye[0].width,ye[0].height,j.depth);for(let ce=0,We=ye.length;ce<We;ce++)if($=ye[ce],E.format!==Fn)if(_e!==null)if(de){if(ze)if(E.layerUpdates.size>0){let at=af($.width,$.height,E.format,E.type);for(let we of E.layerUpdates){let Ct=$.data.subarray(we*at/$.data.BYTES_PER_ELEMENT,(we+1)*at/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,we,$.width,$.height,1,_e,Ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,$.width,$.height,j.depth,_e,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,ee,$.width,$.height,j.depth,0,$.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,$.width,$.height,j.depth,_e,N,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,ee,$.width,$.height,j.depth,0,_e,N,$.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{de&&xe&&t.texStorage2D(i.TEXTURE_2D,ht,ee,ye[0].width,ye[0].height);for(let ce=0,We=ye.length;ce<We;ce++)$=ye[ce],E.format!==Fn?_e!==null?de?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,$.width,$.height,_e,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,ee,$.width,$.height,0,$.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,$.width,$.height,_e,N,$.data):t.texImage2D(i.TEXTURE_2D,ce,ee,$.width,$.height,0,_e,N,$.data)}else if(E.isDataArrayTexture)if(de){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ee,j.width,j.height,j.depth),ze)if(E.layerUpdates.size>0){let ce=af(j.width,j.height,E.format,E.type);for(let We of E.layerUpdates){let at=j.data.subarray(We*ce/j.data.BYTES_PER_ELEMENT,(We+1)*ce/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,j.width,j.height,1,_e,N,at)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,N,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,_e,N,j.data);else if(E.isData3DTexture)de?(xe&&t.texStorage3D(i.TEXTURE_3D,ht,ee,j.width,j.height,j.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,N,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,_e,N,j.data);else if(E.isFramebufferTexture){if(xe)if(de)t.texStorage2D(i.TEXTURE_2D,ht,ee,j.width,j.height);else{let ce=j.width,We=j.height;for(let at=0;at<ht;at++)t.texImage2D(i.TEXTURE_2D,at,ee,ce,We,0,_e,N,null),ce>>=1,We>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),j.parentNode!==ce){ce.appendChild(j),d.add(E),ce.onpaint=We=>{let at=We.changedElements;for(let we of d)at.includes(we.image)&&(we.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let at=i.RGBA,we=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,we,Ct,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(de&&xe){let ce=je(ye[0]);t.texStorage2D(i.TEXTURE_2D,ht,ee,ce.width,ce.height)}for(let ce=0,We=ye.length;ce<We;ce++)$=ye[ce],de?ze&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,_e,N,$):t.texImage2D(i.TEXTURE_2D,ce,ee,_e,N,$);E.generateMipmaps=!1}else if(de){if(xe){let ce=je(j);t.texStorage2D(i.TEXTURE_2D,ht,ee,ce.width,ce.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,N,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,_e,N,j);M(E)&&E.mipmapsAutoUpdate===!0&&v(le),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Te(C,E,G){if(E.image.length!==6)return;let le=st(C,E),te=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let ge=n.get(te);if(te.version!==ge.__version||le===!0){t.activeTexture(i.TEXTURE0+G);let Me=mt.getPrimaries(mt.workingColorSpace),K=E.colorSpace===Ki?null:mt.getPrimaries(E.colorSpace),j=E.colorSpace===Ki||Me===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _e=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let we=0;we<6;we++)!_e&&!N?ee[we]=y(E.image[we],!0,s.maxCubemapSize):ee[we]=N?E.image[we].image:E.image[we],ee[we]=Xe(E,ee[we]);let $=ee[0],ye=r.convert(E.format,E.colorSpace),de=r.convert(E.type),xe=T(E.internalFormat,ye,de,E.normalized,E.colorSpace),ze=E.isVideoTexture!==!0,ht=ge.__version===void 0||le===!0,ce=te.dataReady,We=S(E,$);it(i.TEXTURE_CUBE_MAP,E);let at;if(E.isDepthTexture){if(xe=_(E.format===$i,E.type),ht)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,xe,$.width,$.height);else for(let we=0;we<6;we++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,$.width,$.height,0,ye,de,null)}else if(_e){ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,xe,$.width,$.height);for(let we=0;we<6;we++){at=ee[we].mipmaps;for(let Ct=0;Ct<at.length;Ct++){let dn=at[Ct];E.format!==Fn?ye!==null?ze?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct,0,0,dn.width,dn.height,ye,dn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct,xe,dn.width,dn.height,0,dn.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct,0,0,dn.width,dn.height,ye,de,dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct,xe,dn.width,dn.height,0,ye,de,dn.data)}}}else{if(at=E.mipmaps,ze&&ht){at.length>0&&We++;let we=je(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,xe,we.width,we.height)}for(let we=0;we<6;we++)if(N){ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ee[we].width,ee[we].height,ye,de,ee[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,ee[we].width,ee[we].height,0,ye,de,ee[we].data);for(let Ct=0;Ct<at.length;Ct++){let Rs=at[Ct].image[we].image;ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct+1,0,0,Rs.width,Rs.height,ye,de,Rs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct+1,xe,Rs.width,Rs.height,0,ye,de,Rs.data)}}else{ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ye,de,ee[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,ye,de,ee[we]);for(let Ct=0;Ct<at.length;Ct++){let dn=at[Ct];ze?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct+1,0,0,ye,de,dn.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ct+1,xe,ye,de,dn.image[we])}}}M(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ge.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,G,le,te,ge){let Me=r.convert(G.format,G.colorSpace),K=r.convert(G.type),j=T(G.internalFormat,Me,K,G.normalized,G.colorSpace),_e=n.get(E),N=n.get(G);if(N.__renderTarget=E,!_e.__hasExternalTextures){let ee=Math.max(1,E.width>>ge),$=Math.max(1,E.height>>ge);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ge,j,ee,$,E.depth,0,Me,K,null):t.texImage2D(te,ge,j,ee,$,0,Me,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ae(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,N.__webglTexture,0,nt(E)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,te,N.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(C,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){let le=E.depthTexture,te=le&&le.isDepthTexture?le.type:null,ge=_(E.stencilBuffer,te),Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(E),ge,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(E),ge,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,C)}else{let le=E.textures;for(let te=0;te<le.length;te++){let ge=le[te],Me=r.convert(ge.format,ge.colorSpace),K=r.convert(ge.type),j=T(ge.internalFormat,Me,K,ge.normalized,ge.colorSpace);ae(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(E),j,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(E),j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(C,E,G){let le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(E.depthTexture);te.__renderTarget=E;let ge=le?E.depthTexture.image[0]:E.depthTexture.image;(!te.__webglTexture||ge.width!==E.width||ge.height!==E.height)&&(ge.width=E.width,ge.height=E.height,E.depthTexture.needsUpdate=!0),le?me(E.depthTexture,0):he(E.depthTexture,0);let Me=te.__webglTexture,K=nt(E),j=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,_e=E.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Gi)ae(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,j,Me,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,_e,j,Me,0);else if(E.depthTexture.format===$i)ae(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,j,Me,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,_e,j,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(C){let E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let le=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",te)};le.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=le}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)Ue(E.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?Ue(E.__webglFramebuffer[0],C,0):Ue(E.__webglFramebuffer,C,0);else if(G){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),Ge(E.__webglDepthbuffer[le],C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ge(E.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,E,G){let le=n.get(C);E!==void 0&&ue(le.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ke(C)}function pt(C){let E=C.texture,G=n.get(C),le=n.get(E);C.addEventListener("dispose",U),P(C);let te=C.textures,ge=C.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,o.memory.textures++),ge){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let j=0;j<E.mipmaps.length;j++)G.__webglFramebuffer[K][j]=i.createFramebuffer()}else G.__webglFramebuffer[K]=i.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)G.__webglFramebuffer[K]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Me)for(let K=0,j=te.length;K<j;K++){let _e=n.get(te[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ae(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){let j=te[K];G.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let _e=r.convert(j.format,j.colorSpace),N=r.convert(j.type),ee=T(j.internalFormat,_e,N,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),$=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,G.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),it(i.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)ue(G.__webglFramebuffer[K][j],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ue(G.__webglFramebuffer[K],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let K=0,j=te.length;K<j;K++){let _e=te[K],N=n.get(_e),ee=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),it(ee,_e),ue(G.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+K,ee,0),M(_e)&&v(ee)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,le.__webglTexture),it(K,E),E.mipmaps.length>0)for(let j=0;j<E.mipmaps.length;j++)ue(G.__webglFramebuffer[j],C,E,i.COLOR_ATTACHMENT0,K,j);else ue(G.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,K,0);M(E)?v(K):E.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ke(C)}function O(C){let E=C.textures;for(let G=0,le=E.length;G<le;G++){let te=E[G];if(M(te)&&te.mipmapsAutoUpdate===!0){let ge=b(C),Me=n.get(te).__webglTexture;t.bindTexture(ge,Me),v(ge),t.unbindTexture()}}}let Vt=[];function ct(C){if(C.samples>0){if(ae(C)===!1){let E=C.textures,G=C.width,le=C.height,te=i.COLOR_BUFFER_BIT,ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(C),K=E.length>1;if(K)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let N=n.get(E[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,G,le,0,0,G,le,te,i.NEAREST),l===!0&&(Vt.length=0,Vt.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Vt.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let N=n.get(E[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function ae(C){let E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Xe(C,E){let G=C.colorSpace,le=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Xo&&G!==Ki&&(mt.getTransfer(G)===Tt?(le!==Fn||te!==Bn)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",G)),E}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=J,this.getTextureUnits=se,this.setTextureUnits=Ce,this.setTexture2D=he,this.setTexture2DArray=Pe,this.setTexture3D=He,this.setTextureCube=me,this.rebindTextures=et,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ae,this.dispose=B}function oy(i,e){function t(n,s=Ki){let r,o=mt.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$d)return i.BYTE;if(n===Zd)return i.SHORT;if(n===oo)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===jd)return i.ALPHA;if(n===Qd)return i.RGB;if(n===Fn)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===La)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Da||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fc||n===Oc)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kc)return r.COMPRESSED_R11_EAC;if(n===zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===Kc||n===Jc||n===jc||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nh)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===oh||n===Na||n===ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function _w(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Tm(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ay),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yw(i,e,t,n){let s={},r={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,s[y.id])}function a(y,M){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(y,b);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let M=i.createBuffer(),v=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],v=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,_=v.length;T<_;T++){let S=v[T];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],T,P,b);else h(S,T,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,M,v,b){if(u(y,M,v,b)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let P=0;P<_.length;P++){let A=_[P],I=x(A,!0);d(A,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function d(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function u(y,M,v,b){let T=y.value,_=M+"_"+v;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);let S=b[_],P=!1;for(let A=0;A<T.length;A++)f(T[A],S,A)===!0&&(P=!0);return P}return f(T,b,_)}function f(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let b=M[v];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,b=16;for(let _=0,S=M.length;_<S;_++){let P=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,I=P.length;A<I;A++){let U=P[A],k=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(M[_])||Array.isArray(U.value),B=v;for(let z=0,ie=k.length;z<ie;z++){let X=k[z],J=x(X,L),se=v%b,Ce=se%J.boundary,Ie=se+Ce;v+=Ce,Ie!==0&&b-Ie<J.storage&&(v+=b-Ie),z===0&&(B=v),v+=J.storage}let V=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new V((v-B)/Float32Array.BYTES_PER_ELEMENT),U.__offset=B}}let T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function x(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):be("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}function Mw(){return Ji===null&&(Ji=new Un(vw,16,16,vs,fi),Ji.name="DFG_LUT",Ji.minFilter=kt,Ji.magFilter=kt,Ji.wrapS=Nn,Ji.wrapT=Nn,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var kS,zS,HS,GS,VS,WS,XS,qS,YS,$S,ZS,KS,JS,jS,QS,eb,tb,nb,ib,sb,rb,ob,ab,lb,cb,hb,ub,db,fb,pb,mb,gb,xb,_b,yb,vb,Mb,Sb,bb,Tb,Eb,wb,Ab,Rb,Cb,Pb,Ib,Lb,Db,Nb,Ub,Fb,Ob,Bb,kb,zb,Hb,Gb,Vb,Wb,Xb,qb,Yb,$b,Zb,Kb,Jb,jb,Qb,e1,t1,n1,i1,s1,r1,o1,a1,l1,c1,h1,u1,d1,f1,p1,m1,g1,x1,_1,y1,v1,M1,S1,b1,T1,E1,w1,A1,R1,C1,P1,I1,L1,D1,N1,U1,F1,O1,B1,k1,z1,H1,G1,V1,W1,X1,q1,Y1,$1,Z1,K1,J1,j1,Q1,eT,tT,nT,iT,sT,rT,oT,aT,lT,cT,hT,uT,dT,fT,pT,mT,gT,xT,lt,Ee,Li,lf,_T,J_,Fa,C_,TT,ET,j_,Q_,wT,AT,RT,dh,kT,ey,ty,ny,iy,sy,ry,D_,N_,U_,F_,O_,Om,Bm,km,Um,Ua,RE,CE,z_,DE,cf,kE,HE,VE,XE,YE,KE,Hm,Gm,sw,lw,cw,hw,uw,Z_,hh,Fm,mw,gw,Vm,Wm,xw,ay,vw,Ji,fh,si=Ot(()=>{Nm();Nm();kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:kS,alphahash_pars_fragment:zS,alphamap_fragment:HS,alphamap_pars_fragment:GS,alphatest_fragment:VS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:qS,batching_pars_vertex:YS,batching_vertex:$S,begin_vertex:ZS,beginnormal_vertex:KS,bsdfs:JS,iridescence_fragment:jS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:sb,color_pars_fragment:rb,color_pars_vertex:ob,color_vertex:ab,common:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:hb,displacementmap_vertex:ub,emissivemap_fragment:db,emissivemap_pars_fragment:fb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:xb,envmap_pars_fragment:_b,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Pb,envmap_vertex:vb,fog_vertex:Mb,fog_pars_vertex:Sb,fog_fragment:bb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Eb,lightmap_pars_fragment:wb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Lb,lights_phong_fragment:Db,lights_phong_pars_fragment:Nb,lights_physical_fragment:Ub,lights_physical_pars_fragment:Fb,lights_fragment_begin:Ob,lights_fragment_maps:Bb,lights_fragment_end:kb,lightprobes_pars_fragment:zb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Wb,map_fragment:Xb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:$b,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Jb,morphcolor_vertex:jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:s1,normal_pars_vertex:r1,normal_vertex:o1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:u1,opaque_fragment:d1,packing:f1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:x1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:M1,shadowmap_vertex:S1,shadowmask_pars_fragment:b1,skinbase_vertex:T1,skinning_pars_vertex:E1,skinning_vertex:w1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:P1,tonemapping_pars_fragment:I1,transmission_fragment:L1,transmission_pars_fragment:D1,uv_pars_fragment:N1,uv_pars_vertex:U1,uv_vertex:F1,worldpos_vertex:O1,background_vert:B1,background_frag:k1,backgroundCube_vert:z1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:W1,depth_frag:X1,distance_vert:q1,distance_frag:Y1,equirect_vert:$1,equirect_frag:Z1,linedashed_vert:K1,linedashed_frag:J1,meshbasic_vert:j1,meshbasic_frag:Q1,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:aT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:hT,meshtoon_frag:uT,points_vert:dT,points_frag:fT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:xT},Ee={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Li={basic:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Pn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Pn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new fe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Pn([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Pn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Pn([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Pn([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Pn([Ee.common,Ee.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Pn([Ee.lights,Ee.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Li.physical={uniforms:Pn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};lf={r:0,b:0,g:0},_T=new Je,J_=new Qe;J_.set(-1,0,0,0,1,0,0,0,1);Fa=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ri(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Zs});r.uniforms.tEquirect.value=t;let o=new qe(s,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=kt),new no(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},C_=256,TT=3,ET=20,j_=256,Q_=16,wT=3,AT=new R,RT=new fe,dh=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new qe(new Ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=AT}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(RT));let m=new no(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(C_,Sm(e))}_fromTexture(e,t){e.mapping===Yi||e.mapping===Js?this._setSize(e.image.length===0?C_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=P_(e,!1,!1),n=Math.log2(e)-TT;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=P_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Yi||e.mapping===Js?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=I_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=CT(),this._integrationMaterial=PT());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Q_);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-wT)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(j_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=IT());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};kT={[zd]:"LINEAR_TONE_MAPPING",[Hd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Vd]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[qd]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};ey=new Yt,ty=new Wi(1,1),ny=new ia(1),iy=new Ur,sy=new Fr,ry=new Gs,D_=[],N_=[],U_=new Float32Array(16),F_=new Float32Array(9),O_=new Float32Array(4);Om=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oE(t.type)}},Bm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wE(t.type)}},km=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Um=/(\w+)(\])?(\[|\.)?/g;Ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);AE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};RE=37297,CE=0;z_=new Qe;DE={[zd]:"Linear",[Hd]:"Reinhard",[Gd]:"Cineon",[Vd]:"ACESFilmic",[Xd]:"AgX",[qd]:"Neutral",[Wd]:"Custom"};cf=new R;kE=/^[ \t]*#include +<([\w\d./]+)>/gm;HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;VE={[$s]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};XE={[Js]:"ENVMAP_MODE_REFRACTION"};YE={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[om]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};KE=0,Hm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gm(e),t.set(e,n)),n}},Gm=class{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}};sw=0;lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hw=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],uw=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Z_=new Je,hh=new R,Fm=new R;mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $n({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wm=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Vm,g={},y=t.getContextAttributes(),M=null,v=null,b=[],T=[],_=new re,S=null,P=null,A=new Kt;A.viewport=new At;let I=new Kt;I.viewport=new At;let U=[A,I],k=new yc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=b[Z];return he===void 0&&(he=new Br,b[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=b[Z];return he===void 0&&(he=new Br,b[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=b[Z];return he===void 0&&(he=new Br,b[Z]=he),he.getHandSpace()};function V(Z){let he=T.indexOf(Z.inputSource);if(he===-1)return;let Pe=b[he];Pe!==void 0&&(Pe.update(Z.inputSource,Z.frame,c||o),Pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<b.length;Z++){let he=T[Z];he!==null&&(T[Z]=null,b[Z].disconnect(he))}L=null,B=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,v=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,He=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=y.stencil?$i:Gi,He=y.stencil?js:ii);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Rn(u.textureWidth,u.textureHeight,{format:Fn,type:Bn,depthTexture:new Wi(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let he=0;he<Z.removed.length;he++){let Pe=Z.removed[he],He=T.indexOf(Pe);He>=0&&(T[He]=null,b[He].disconnect(Pe))}for(let he=0;he<Z.added.length;he++){let Pe=Z.added[he],He=T.indexOf(Pe);if(He===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=T.length){T.push(Pe),He=Fe;break}else if(T[Fe]===null){T[Fe]=Pe,He=Fe;break}if(He===-1)break}let me=b[He];me&&me.connect(Pe)}}function X(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let he=Z.near,Pe=Z.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),k.near=I.near=A.near=he,k.far=I.far=A.far=Pe,(L!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,B=k.far),k.layers.mask=Z.layers.mask|6,A.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let He=Z.parent,me=k.cameras;X(k,He);for(let Fe=0;Fe<me.length;Fe++)X(me[Fe],He);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),J(Z,k,He)};function J(Z,he,Pe){Pe===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return g[Z]};let se=null;function Ce(Z,he){if(h=he.getViewerPose(c||o),p=he,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let He=!1;Pe.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let Be=0;Be<Pe.length;Be++){let it=Pe[Be],st=null;if(f!==null)st=f.getViewport(it);else{let pe=d.getViewSubImage(u,it);st=pe.viewport,Be===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ne=U[Be];ne===void 0&&(ne=new Kt,ne.layers.enable(Be),ne.viewport=new At,U[Be]=ne),ne.matrix.fromArray(it.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(it.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(k.matrix.copy(ne.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(ne)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Be=d.getDepthInformation(Pe[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<Pe.length;Be++){let it=Pe[Be].camera;if(it){let st=g[it];st||(st=new sa,g[it]=st);let ne=d.getCameraImage(it);st.sourceTexture=ne}}}}for(let Pe=0;Pe<b.length;Pe++){let He=T[Pe],me=b[Pe];He!==null&&me!==void 0&&me.update(He,he,c||o)}se&&se(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),p=null}let Ie=new K_;Ie.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}},xw=new Je,ay=new Qe;ay.set(-1,0,0,0,1,0,0,0,1);vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;fh=class{constructor(e={}){let{canvas:t=vm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Ic,Pc,Ra]),g=new Set([Bn,ii,oo,js,Ac,Rc]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,T=null,_=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,U=null,k=null,L=null,B=null;this._outputColorSpace=_n;let V=0,z=0,ie=null,X=-1,J=null,se=new At,Ce=new At,Ie=null,Z=new fe(0),he=0,Pe=t.width,He=t.height,me=1,Fe=null,Mt=null,Be=new At(0,0,Pe,He),it=new At(0,0,Pe,He),st=!1,ne=new Vi,pe=new ea,oe=!1,Te=!1,ue=new Je,Ge=new R,Ue=new At,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function pt(){return ie===null?me:1}let O=n;function Vt(w,F){return t.getContext(w,F)}let ct,nt,ae,Wt,Xe,je,C,E,G,le,te,ge,Me,K,j,_e,N,ee,$,ye,de,xe,ze;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",we,!1),O===null){let F="webgl2";if(O=Vt(F,w),O===null)throw Vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(w){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",we,!1),ke("WebGLRenderer: "+w.message),w}function ht(){ct=new DT(O),ct.init(),de=new oy(O,ct),nt=new ST(O,ct,e,de),ae=new fw(O,ct),nt.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),k=O.createFramebuffer(),L=O.createFramebuffer(),B=O.createFramebuffer(),Wt=new FT(O),Xe=new QE,je=new pw(O,ct,ae,Xe,nt,de,Wt),C=new LT(A),E=new BS(O),xe=new vT(O,E),G=new NT(O,E,Wt,xe),le=new BT(O,G,E,xe,Wt),ee=new OT(O,nt,je),j=new bT(Xe),te=new jE(A,C,ct,nt,xe,j),ge=new _w(A,Xe),Me=new tw,K=new aw(ct),N=new yT(A,C,ae,le,p,l),_e=new dw(A,le,nt),ze=new yw(O,Wt,nt,ae),$=new MT(O,ct,Wt),ye=new UT(O,ct,Wt),Wt.programs=te.programs,A.capabilities=nt,A.extensions=ct,A.properties=Xe,A.renderLists=Me,A.shadowMap=_e,A.state=ae,A.info=Wt}x!==Bn&&(P=new zT(x,t.width,t.height,a,s,r));let ce=new Wm(A,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(Pe,He,!1))},this.getSize=function(w){return w.set(Pe,He)},this.setSize=function(w,F,Y=!0){if(ce.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=w,He=F,t.width=Math.floor(w*me),t.height=Math.floor(F*me),Y===!0&&(t.style.width=w+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Pe*me,He*me).floor()},this.setDrawingBufferSize=function(w,F,Y){Pe=w,He=F,me=Y,t.width=Math.floor(w*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===Bn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(se)},this.getViewport=function(w){return w.copy(Be)},this.setViewport=function(w,F,Y,H){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,F,Y,H),ae.viewport(se.copy(Be).multiplyScalar(pt()).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,F,Y,H){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,F,Y,H),ae.scissor(Ce.copy(it).multiplyScalar(pt()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){ae.setScissorTest(st=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Y=!0){let H=0;if(w){let W=!1;if(ie!==null){let Se=ie.texture.format;W=m.has(Se)}if(W){let Se=ie.texture.type,Le=g.has(Se),ve=N.getClearColor(),Re=N.getClearAlpha(),Oe=ve.r,tt=ve.g,xt=ve.b;Le?(y[0]=Oe,y[1]=tt,y[2]=xt,y[3]=Re,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=Oe,M[1]=tt,M[2]=xt,M[3]=Re,O.clearBufferiv(O.COLOR,0,M))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",we,!1),N.dispose(),Me.dispose(),K.dispose(),je.dispose(),Xe.dispose(),C.dispose(),le.dispose(),G.dispose(),xe.dispose(),ze.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Z0),ce.removeEventListener("sessionend",K0),xr.stop()};function We(w){w.preventDefault(),$o("WebGLRenderer: Context Lost."),I=!0}function at(){$o("WebGLRenderer: Context Restored."),I=!1;let w=Wt.autoReset,F=_e.enabled,Y=_e.autoUpdate,H=_e.needsUpdate,W=_e.type;ht(),Wt.autoReset=w,_e.enabled=F,_e.autoUpdate=Y,_e.needsUpdate=H,_e.type=W}function we(w){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){let F=w.target;F.removeEventListener("dispose",Ct),dn(F)}function dn(w){Rs(w),Xe.remove(w)}function Rs(w){let F=Xe.get(w).programs;F!==void 0&&(F.forEach(function(Y){te.releaseProgram(Y)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Y,H,W,Se){F===null&&(F=Ke);let Le=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=Bv(w,F,Y,H,W);ae.setMaterial(H,Le);let Re=Y.index,Oe=1;if(H.wireframe===!0){if(Re=G.getWireframeAttribute(Y),Re===void 0)return;Oe=2}let tt=Y.drawRange,xt=Y.attributes.position,De=tt.start*Oe,_t=(tt.start+tt.count)*Oe;Se!==null&&(De=Math.max(De,Se.start*Oe),_t=Math.min(_t,(Se.start+Se.count)*Oe)),Re!==null?(De=Math.max(De,0),_t=Math.min(_t,Re.count)):xt!=null&&(De=Math.max(De,0),_t=Math.min(_t,xt.count));let Qt=_t-De;if(Qt<0||Qt===1/0)return;xe.setup(W,H,ve,Y,Re);let Ut,Nt=$;if(Re!==null&&(Ut=E.get(Re),Nt=ye,Nt.setIndex(Ut)),W.isMesh)H.wireframe===!0?(ae.setLineWidth(H.wireframeLinewidth*pt()),Nt.setMode(O.LINES)):Nt.setMode(O.TRIANGLES);else if(W.isLine){let Mn=H.linewidth;Mn===void 0&&(Mn=1),ae.setLineWidth(Mn*pt()),W.isLineSegments?Nt.setMode(O.LINES):W.isLineLoop?Nt.setMode(O.LINE_LOOP):Nt.setMode(O.LINE_STRIP)}else W.isPoints?Nt.setMode(O.POINTS):W.isSprite&&Nt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Mn=W._multiDrawStarts,Ne=W._multiDrawCounts,Ln=W._multiDrawCount,bt=Re?E.get(Re).bytesPerElement:1,_r=Xe.get(H).currentProgram.getUniforms();for(let Sn=0;Sn<Ln;Sn++)_r.setValue(O,"_gl_DrawID",Sn),Nt.render(Mn[Sn]/bt,Ne[Sn])}else if(W.isInstancedMesh)Nt.renderInstances(De,Qt,W.count);else if(Y.isInstancedBufferGeometry){let Mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,Mn);Nt.renderInstances(De,Qt,Ne)}else Nt.render(De,Qt)};function $0(w,F,Y,H){U!==null&&w.isNodeMaterial&&U.setObject(H,w),oe===!0&&j.setState(w,Y,!1),w.transparent===!0&&w.side===Gt&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,ja(w,F,H),w.side=ys,w.needsUpdate=!0,ja(w,F,H),w.side=Gt):ja(w,F,H)}this.compile=function(w,F,Y=null){Y===null&&(Y=w),U!==null&&U.renderStart(w,F,Y),T=K.get(Y),T.init(F),S.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,oe=j.init(this.clippingPlanes,Te),oe===!0&&j.setGlobalState(this.clippingPlanes,F),U!==null&&_e.render(T.state.shadowsArray,Y,F);let H=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Se=W.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){let ve=Se[Le];$0(ve,Y,F,W),H.add(ve)}else $0(Se,Y,F,W),H.add(Se)}),T=S.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(w,F,Y=null){let H=this.compile(w,F,Y);return new Promise(W=>{function Se(){if(H.forEach(function(Le){let Re=Xe.get(Le).currentProgram;(Re===void 0||Re.isReady())&&H.delete(Le)}),H.size===0){W(w);return}setTimeout(Se,10)}ct.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Hf=null;function Fv(w){Hf&&Hf(w)}function Z0(){xr.stop()}function K0(){xr.start()}let xr=new K_;xr.setAnimationLoop(Fv),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(w){Hf=w,ce.setAnimationLoop(w),w===null?xr.stop():xr.start()},ce.addEventListener("sessionstart",Z0),ce.addEventListener("sessionend",K0),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(w,F);let Y=ce.enabled===!0&&ce.isPresenting===!0,H=P!==null&&(ie===null||Y)&&P.begin(A,ie);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,F,ie),T=K.get(w,S.length),T.init(F),T.state.textureUnits=je.getTextureUnits(),S.push(T),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pe.setFromArrayCamera(F):ne.setFromProjectionMatrix(ue,Xn,F.reversedDepth),Te=this.localClippingEnabled,oe=j.init(this.clippingPlanes,Te),b=Me.get(w,_.length),b.init(),_.push(b),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&Gf(Le,F,-1/0,A.sortObjects)}Gf(w,F,0,A.sortObjects),b.finish(),U!==null&&U.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Fe,Mt),et=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,et&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),oe===!0&&j.beginShadows();let W=T.state.shadowsArray;if(_e.render(W,w,F),oe===!0&&j.endShadows(),(H&&P.hasRenderPass())===!1){let Le=b.opaque,ve=b.transmissive;if(T.setupLights(),F.isArrayCamera){let Re=F.cameras;if(ve.length>0)for(let Oe=0,tt=Re.length;Oe<tt;Oe++){let xt=Re[Oe];j0(Le,ve,w,xt)}et&&N.render(w);for(let Oe=0,tt=Re.length;Oe<tt;Oe++){let xt=Re[Oe];J0(b,w,xt,xt.viewport)}}else ve.length>0&&j0(Le,ve,w,F),et&&N.render(w),J0(b,w,F)}ie!==null&&z===0&&(je.updateMultisampleRenderTarget(ie),je.updateRenderTargetMipmap(ie)),H&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,F),xe.resetDefaultState(),X=-1,J=null,S.pop(),S.length>0?(T=S[S.length-1],je.setTextureUnits(T.state.textureUnits),oe===!0&&j.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,U!==null&&U.renderEnd()};function Gf(w,F,Y,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Le=F.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Le)){H&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);let ve=le.update(w),Re=w.material;Re.visible&&b.push(w,ve,Re,Y,Ue.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=F.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Le)){let ve=le.update(w),Re=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(Re)){let Oe=ve.groups;for(let tt=0,xt=Oe.length;tt<xt;tt++){let De=Oe[tt],_t=Re[De.materialIndex];_t&&_t.visible&&b.push(w,ve,_t,Y,Ue.z,De,F)}}else Re.visible&&b.push(w,ve,Re,Y,Ue.z,null,F)}}}let Se=w.children;for(let Le=0,ve=Se.length;Le<ve;Le++)Gf(Se[Le],F,Y,H)}function J0(w,F,Y,H){let{opaque:W,transmissive:Se,transparent:Le}=w;T.setupLightsView(Y),oe===!0&&j.setGlobalState(A.clippingPlanes,Y),H&&ae.viewport(se.copy(H)),W.length>0&&Nh(W,F,Y),Se.length>0&&Nh(Se,F,Y),Le.length>0&&Nh(Le,F,Y),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function j0(w,F,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let De=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Rn(1,1,{generateMipmaps:!0,type:De?fi:Bn,minFilter:di,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Se=T.state.transmissionRenderTarget[H.id],Le=H.viewport||se;Se.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let ve=A.getRenderTarget(),Re=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor(Z),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),et&&N.render(Y);let tt=A.toneMapping;A.toneMapping=Ii;let xt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),oe===!0&&j.setGlobalState(A.clippingPlanes,H),Nh(w,Y,H),je.updateMultisampleRenderTarget(Se),je.updateRenderTargetMipmap(Se),ct.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _t=0,Qt=F.length;_t<Qt;_t++){let Ut=F[_t],{object:Nt,geometry:Mn,material:Ne,group:Ln}=Ut;if(Ne.side===Gt&&Nt.layers.test(H.layers)){let bt=Ne.side;Ne.side=gn,Ne.needsUpdate=!0,Q0(Nt,Y,H,Mn,Ne,Ln),Ne.side=bt,Ne.needsUpdate=!0,De=!0}}De===!0&&(je.updateMultisampleRenderTarget(Se),je.updateRenderTargetMipmap(Se))}A.setRenderTarget(ve,Re,Oe),A.setClearColor(Z,he),xt!==void 0&&(H.viewport=xt),A.toneMapping=tt}function Nh(w,F,Y){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Se=w.length;W<Se;W++){let Le=w[W],{object:ve,geometry:Re,group:Oe}=Le,tt=Le.material;tt.allowOverride===!0&&H!==null&&(tt=H),ve.layers.test(Y.layers)&&Q0(ve,F,Y,Re,tt,Oe)}}function Q0(w,F,Y,H,W,Se){U!==null&&W.isNodeMaterial&&U.setObject(w,W),w.onBeforeRender(A,F,Y,H,W,Se),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(A,F,Y,H,w,Se),W.transparent===!0&&W.side===Gt&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,A.renderBufferDirect(Y,F,H,W,w,Se),W.side=ys,W.needsUpdate=!0,A.renderBufferDirect(Y,F,H,W,w,Se),W.side=Gt):A.renderBufferDirect(Y,F,H,W,w,Se),w.onAfterRender(A,F,Y,H,W,Se)}function eg(w){let F=0;for(let Y of w)Y.texture!==null&&F++;return F}function ja(w,F,Y){F.isScene!==!0&&(F=Ke);let H=Xe.get(w),W=T.state.lights,Se=T.state.shadowsArray,Le=W.state.version,ve=te.getParameters(w,W.state,Se,F,Y,T.state.lightProbeGridArray),Re=te.getProgramCacheKey(ve),Oe=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=C.get(w.envMap||H.environment,tt),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Ct),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let xt=Oe.get(Re);if(xt!==void 0){if(H.currentProgram===xt&&H.lightsStateVersion===Le)return ng(w,ve),xt}else ve.uniforms=te.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,Y,ve),w.onBeforeCompile(ve,A),xt=te.acquireProgram(ve,Re),Oe.set(Re,xt),H.uniforms=ve.uniforms;let De=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=j.uniform),ng(w,ve),H.needsLights=zv(w),H.lightsStateVersion=Le,H.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=eg(T.state.lightProbeGridArray),H.currentProgram=xt,H.uniformsList=null,xt}function Ov(w,F,Y,H,W){let Se=Xe.get(w),Le=Se.currentProgram.id+","+H+","+W,ve=Se.programVariants.get(Le);return ve===void 0?(ve=ja(w,F,Y),Se.programVariants.set(Le,ve)):(Se.currentProgram=ve,Se.uniformsList=null,Se.outputColorSpace=H,Se.toneMapping=W),ve}function tg(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ua.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ng(w,F){let Y=Xe.get(w);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Bv(w,F,Y,H,W){F.isScene!==!0&&(F=Ke),je.resetTextureUnits();let Se=F.fog,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ve=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:mt.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=C.get(H.envMap||Le,Re),tt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,xt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Qt=!!Y.morphAttributes.color,Ut=Ii;H.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let Nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mn=Nt!==void 0?Nt.length:0,Ne=Xe.get(H),Ln=T.state.lights;if(oe===!0&&(Te===!0||w!==J)){let zt=w===J&&H.id===X;j.setState(H,w,zt)}let bt=!1,_r=!1;H.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Ln.state.version||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==Oe||H.fog===!0&&Ne.fog!==Se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==j.numPlanes||Ne.numIntersection!==j.numIntersection)||Ne.vertexAlphas!==tt||Ne.vertexTangents!==xt||Ne.morphTargets!==De||Ne.morphNormals!==_t||Ne.morphColors!==Qt||Ne.morphTargetsCount!==Mn||Ne.numLightProbeGrids!==eg(T.state.lightProbeGridArray)?bt=!0:(Ne.outputColorSpace!==ve||Ne.toneMapping!==Ut)&&(_r=!0):(bt=!0,Ne.__version=H.version);let Sn=Ne.currentProgram;(bt===!0||_r===!0)&&(Sn=_r===!0?Ov(H,F,W,ve,Ut):ja(H,F,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Sn,Ne));let Uh=!1,Cs=!1,yr=!1,St=Sn.getUniforms(),xn=Ne.uniforms;if(ae.useProgram(Sn.program)&&(Uh=!0,Cs=!0,yr=!0),H.id!==X&&(X=H.id,Cs=!0),Uh||J!==w){ae.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",w.projectionMatrix),St.setValue(O,"viewMatrix",w.matrixWorldInverse);let fn=St.map.cameraPosition;fn!==void 0&&fn.setValue(O,Ge.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Cs=!0,yr=!0)}if(Ne.needsLights&&(Ln.state.sunShadowMap.length>0&&St.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,je),Ln.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,je),Ln.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,je),Ln.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,je)),W.isSkinnedMesh){St.setOptional(O,W,"bindMatrix"),St.setOptional(O,W,"bindMatrixInverse");let zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),St.setValue(O,"boneTexture",zt.boneTexture,je))}W.isBatchedMesh&&(St.setOptional(O,W,"batchingTexture"),St.setValue(O,"batchingTexture",W._matricesTexture,je),St.setOptional(O,W,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",W._indirectTexture,je),St.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",W._colorsTexture,je));let vi=Y.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&ee.update(W,Y,Sn),(Cs||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,St.setValue(O,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=Mw()),Cs){if(St.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&kv(xn,yr),Se&&H.fog===!0&&ge.refreshFogUniforms(xn,Se),ge.refreshMaterialUniforms(xn,H,me,He,T.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let zt=v,fn=0;for(let rs of T.state.lightProbeGridArray)rs.texture!==null&&(zt.textures[fn]=rs.texture,zt.min[fn]=rs.boundingBox.min,zt.max[fn]=rs.boundingBox.max,zt.resolution[fn]=rs.resolution,fn++);for(let rs in zt)zt[rs].length=fn;xn.probesSH.value=zt.textures,xn.probesMin.value=zt.min,xn.probesMax.value=zt.max,xn.probesResolution.value=zt.resolution}Ua.upload(O,tg(Ne),xn,je)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ua.upload(O,tg(Ne),xn,je),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(O,"center",W.center),St.setValue(O,"modelViewMatrix",W.modelViewMatrix),St.setValue(O,"normalMatrix",W.normalMatrix),St.setValue(O,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let zt=H.uniformsGroups;for(let fn=0,rs=zt.length;fn<rs;fn++){let sg=zt[fn];ze.update(sg,Sn),ze.bind(sg,Sn)}}return Sn}function kv(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function zv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(w,F,Y){let H=Xe.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Xe.get(w.texture).__webglTexture=F,Xe.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Y=Xe.get(w);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Y=0){ie=w,V=F,z=Y;let H=null,W=!1,Se=!1;if(w){let ve=Xe.get(w);if(ve.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),se.copy(w.viewport),Ce.copy(w.scissor),Ie=w.scissorTest,ae.viewport(se),ae.scissor(Ce),ae.setScissorTest(Ie),X=-1;return}else if(ve.__webglFramebuffer===void 0)je.setupRenderTarget(w);else if(ve.__hasExternalTextures)je.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let tt=w.depthTexture;if(ve.__boundDepthTexture!==tt){if(tt!==null&&Xe.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(w)}}let Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Oe=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?H=Oe[F][Y]:H=Oe[F],W=!0):w.samples>0&&je.useMultisampledRTT(w)===!1?H=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[Y]:H=Oe,se.copy(w.viewport),Ce.copy(w.scissor),Ie=w.scissorTest}else se.copy(Be).multiplyScalar(me).floor(),Ce.copy(it).multiplyScalar(me).floor(),Ie=st;if(Y!==0&&(H=k),ae.bindFramebuffer(O.FRAMEBUFFER,H)&&ae.drawBuffers(w,H),ae.viewport(se),ae.scissor(Ce),ae.setScissorTest(Ie),W){let ve=Xe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,Y)}else if(Se){let ve=F;for(let Re=0;Re<w.textures.length;Re++){let Oe=Xe.get(w.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,Y,ve)}}else if(w!==null&&Y!==0){let ve=Xe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,Y)}X=-1};function ig(w){let F=Xe.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=nt.textureFormatReadable(w.format),F.__typeReadable=nt.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Y,H,W,Se,Le,ve=0){if(!(w&&w.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re){ae.bindFramebuffer(O.FRAMEBUFFER,Re);try{let Oe=w.textures[ve],tt=Oe.format,xt=Oe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let De=ig(Oe);if(De.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&Y>=0&&Y<=w.height-W&&O.readPixels(F,Y,H,W,de.convert(tt),de.convert(xt),Se)}finally{let Oe=ie!==null?Xe.get(ie).__webglFramebuffer:null;ae.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,F,Y,H,W,Se,Le,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re)if(F>=0&&F<=w.width-H&&Y>=0&&Y<=w.height-W){ae.bindFramebuffer(O.FRAMEBUFFER,Re);let Oe=w.textures[ve],tt=Oe.format,xt=Oe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let De=ig(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(F,Y,H,W,de.convert(tt),de.convert(xt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qt=ie!==null?Xe.get(ie).__webglFramebuffer:null;ae.bindFramebuffer(O.FRAMEBUFFER,Qt);let Ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await g_(O,Ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(_t),O.deleteSync(Ut),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(w.image.width*H),Se=Math.floor(w.image.height*H),Le=F!==null?F.x:0,ve=F!==null?F.y:0;je.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Le,ve,W,Se),ae.unbindTexture()},this.copyTextureToTexture=function(w,F,Y=null,H=null,W=0,Se=0){let Le,ve,Re,Oe,tt,xt,De,_t,Qt,Ut=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(Y!==null)Le=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,tt=Y.min.y,xt=Y.isBox3?Y.min.z:0;else{let St=Math.pow(2,-W);Le=Math.floor(Ut.width*St),ve=Math.floor(Ut.height*St),w.isDataArrayTexture?Re=Ut.depth:w.isData3DTexture?Re=Math.floor(Ut.depth*St):Re=1,Oe=0,tt=0,xt=0}H!==null?(De=H.x,_t=H.y,Qt=H.z):(De=0,_t=0,Qt=0);let Nt=de.convert(F.format),Mn=de.convert(F.type),Ne;F.isData3DTexture?(je.setTexture3D(F,0),Ne=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(je.setTexture2DArray(F,0),Ne=O.TEXTURE_2D_ARRAY):(je.setTexture2D(F,0),Ne=O.TEXTURE_2D),ae.activeTexture(O.TEXTURE0),ae.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ae.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ae.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Ln=ae.getParameter(O.UNPACK_ROW_LENGTH),bt=ae.getParameter(O.UNPACK_IMAGE_HEIGHT),_r=ae.getParameter(O.UNPACK_SKIP_PIXELS),Sn=ae.getParameter(O.UNPACK_SKIP_ROWS),Uh=ae.getParameter(O.UNPACK_SKIP_IMAGES);ae.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),ae.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),ae.pixelStorei(O.UNPACK_SKIP_ROWS,tt),ae.pixelStorei(O.UNPACK_SKIP_IMAGES,xt);let Cs=w.isDataArrayTexture||w.isData3DTexture,yr=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let St=Xe.get(w),xn=Xe.get(F),vi=Xe.get(St.__renderTarget),zt=Xe.get(xn.__renderTarget);ae.bindFramebuffer(O.READ_FRAMEBUFFER,vi.__webglFramebuffer),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let fn=0;fn<Re;fn++)Cs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,W,xt+fn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(F).__webglTexture,Se,Qt+fn)),O.blitFramebuffer(Oe,tt,Oe+Le,tt+ve,De,_t,De+Le,_t+ve,O.DEPTH_BUFFER_BIT,O.NEAREST);ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Xe.has(w)){let St=Xe.get(w),xn=Xe.get(F);ae.bindFramebuffer(O.READ_FRAMEBUFFER,L),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let vi=0;vi<Re;vi++)Cs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,W,xt+vi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,St.__webglTexture,W),yr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,Se,Qt+vi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,Se),W!==0?O.blitFramebuffer(Oe,tt,Oe+Le,tt+ve,De,_t,De+Le,_t+ve,O.COLOR_BUFFER_BIT,O.NEAREST):yr?O.copyTexSubImage3D(Ne,Se,De,_t,Qt+vi,Oe,tt,Le,ve):O.copyTexSubImage2D(Ne,Se,De,_t,Oe,tt,Le,ve);ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yr?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ne,Se,De,_t,Qt,Le,ve,Re,Nt,Mn,Ut.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,Se,De,_t,Qt,Le,ve,Re,Nt,Ut.data):O.texSubImage3D(Ne,Se,De,_t,Qt,Le,ve,Re,Nt,Mn,Ut):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,De,_t,Le,ve,Nt,Mn,Ut.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,De,_t,Ut.width,Ut.height,Nt,Ut.data):O.texSubImage2D(O.TEXTURE_2D,Se,De,_t,Le,ve,Nt,Mn,Ut);ae.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),ae.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt),ae.pixelStorei(O.UNPACK_SKIP_PIXELS,_r),ae.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),ae.pixelStorei(O.UNPACK_SKIP_IMAGES,Uh),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Ne),ae.unbindTexture()},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?je.setTextureCube(w,0):w.isData3DTexture?je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?je.setTexture2DArray(w,0):je.setTexture2D(w,0),ae.unbindTexture()},this.resetState=function(){V=0,z=0,ie=null,ae.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}});var q,ri=Ot(()=>{q={scene:null,camera:null,renderer:null,sun:null,player:null,actors:[],bots:[],time:0,dt:0,phase:"menu",paused:!0,settings:{name:"Jogador",quality:"high",sens:1,volume:.7},alive:0,total:0,matchTime:0,shake:0}});var lo,Jt,ly,Qs,ji,mi=Ot(()=>{lo=[{name:"Comum",color:"#c4c8cc",dmg:1},{name:"Incomum",color:"#5fd04b",dmg:1.04},{name:"Raro",color:"#3f9bff",dmg:1.08},{name:"\xC9pico",color:"#b657ff",dmg:1.12},{name:"Lend\xE1rio",color:"#ffb52e",dmg:1.16}],Jt={pistol:{name:"Pistola",ammo:"light",dmg:24,rate:.26,mag:16,reload:1.5,spread:.007,range:140,auto:!1,pellets:1,head:2,kick:.012,zoom:.85,len:.3,struct:20},smg:{name:"Submetralhadora",ammo:"light",dmg:16,rate:.082,mag:30,reload:1.8,spread:.024,range:100,auto:!0,pellets:1,head:1.8,kick:.007,zoom:.85,len:.42,struct:14},ar:{name:"Rifle de Assalto",ammo:"medium",dmg:28,rate:.15,mag:30,reload:2.3,spread:.012,range:240,auto:!0,pellets:1,head:2,kick:.009,zoom:.8,len:.66,struct:26},shotgun:{name:"Escopeta",ammo:"shells",dmg:12,rate:.95,mag:5,reload:3.2,spread:.055,range:55,auto:!1,pellets:10,head:1.5,kick:.05,zoom:.85,len:.8,struct:12},sniper:{name:"Rifle Sniper",ammo:"heavy",dmg:108,rate:1.5,mag:1,reload:2.8,spread:.02,range:700,auto:!1,pellets:1,head:2,kick:.06,zoom:.2,len:1.05,struct:90,scope:!0},rocket:{name:"Lan\xE7a-Foguetes",ammo:"rockets",dmg:110,rate:1.7,mag:1,reload:3.8,spread:0,range:400,auto:!1,pellets:1,head:1,kick:.07,zoom:.85,len:.9,struct:400,projectile:!0}},ly={light:{name:"Muni\xE7\xE3o Leve",color:"#ffd24a",max:999},medium:{name:"Muni\xE7\xE3o M\xE9dia",color:"#ff9a3c",max:999},shells:{name:"Cartuchos",color:"#ff5a4a",max:999},heavy:{name:"Muni\xE7\xE3o Pesada",color:"#5ac8ff",max:999},rockets:{name:"Foguetes",color:"#c0ff5a",max:999}},Qs={bandage:{name:"Bandagem",heal:15,shield:0,capHp:75,time:3.5,max:15,color:"#f5f5f5",short:"BAND"},medkit:{name:"Kit M\xE9dico",heal:100,shield:0,capHp:100,time:8,max:3,color:"#ff5a5a",short:"KIT"},shield_small:{name:"Po\xE7\xE3o Pequena",heal:0,shield:25,capSh:50,time:2.5,max:6,color:"#7fd6ff",short:"PO\xC7+"},shield_big:{name:"Po\xE7\xE3o de Escudo",heal:0,shield:50,capSh:100,time:5,max:3,color:"#3b6cff",short:"PO\xC7\xC3O"}},ji={wood:{name:"Madeira",color:"#d9a460",trim:"#a8692e",hp:150},stone:{name:"Pedra",color:"#bdbbb4",trim:"#8d8b85",hp:300},metal:{name:"Metal",color:"#a9bfd4",trim:"#6c819a",hp:450}}});function Sw(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=["#7fd24f","#72c746"];for(let r=0;r<2;r++)for(let o=0;o<2;o++)t.fillStyle=n[(r+o)%2],t.fillRect(r*128,o*128,128,128);t.strokeStyle="rgba(255,255,255,0.28)",t.lineWidth=3;for(let r=0;r<2;r++)for(let o=0;o<2;o++)t.strokeRect(r*128+1.5,o*128+1.5,125,125);let s=new na(e);return s.wrapS=s.wrapT=Bs,s.repeat.set(400*2/8,400*2/8),s.colorSpace=_n,s.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),s}function cy(i,e){let t=new yn(400*2,400*2,1,1);t.rotateX(-Math.PI/2);let n=new Cn({map:Sw(e),polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),s=new qe(t,n);s.receiveShadow=!0,s.position.y=-.02,i.add(s);let r=new Pt,o=7,a=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<34;l++){let c=l/34*Math.PI*2+a()*.1,h=760+a()*260,d=60+a()*140,u=90+a()*130,f=new qe(new Vs(u,d,6),new Cn({color:new fe().setHSL(.27+a()*.08,.35,.38+a()*.12),flatShading:!0}));f.position.set(Math.cos(c)*h,d/2-6,Math.sin(c)*h),f.rotation.y=a()*3,r.add(f)}i.add(r)}function hy(i,e){co&&(i.remove(co),co.traverse(r=>{r.geometry&&r.geometry.dispose()})),co=new Pt;let t=new Ft({color:"#3fb6ff",transparent:!0,opacity:.1,side:Gt,depthWrite:!1}),n=40;for(let r=0;r<4;r++){let o=new qe(new yn(e*2,n),t),a=r*Math.PI/2;o.position.set(Math.sin(a)*e,n/2,Math.cos(a)*e),o.rotation.y=a,co.add(o)}let s=[new R(-e,.06,-e),new R(e,.06,-e),new R(e,.06,e),new R(-e,.06,e)];co.add(new Vr(new $e().setFromPoints(s),new sn({color:"#7fd8ff"}))),i.add(co)}function Xm(i,e,t,n){let s=new qe(new $r(1.1,1.6,40),new Ft({color:n,side:Gt,transparent:!0,opacity:.8}));return s.rotation.x=-Math.PI/2,s.position.set(e,.05,t),i.add(s),s}var Ms,co,ka=Ot(()=>{si();mi();Ms=()=>0;co=null});function dy(i,e){i.background=qm.clone(),i.fog=new kr(qm.clone(),220,1100);let t=new $n({side:gn,depthWrite:!1,fog:!1,uniforms:{top:{value:bw},hor:{value:qm},sunDir:{value:new R(.5,.7,.35).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vDir; uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir;
      void main(){
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 col = mix(hor, top, pow(h, 0.55));
        float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
        col += vec3(1.0, 0.95, 0.8) * (pow(s, 600.0) * 1.4 + pow(s, 12.0) * 0.18);
        if (vDir.y < 0.0) col = hor;
        gl_FragColor = vec4(col, 1.0);
      }`});za=new qe(new Ci(1800,32,16),t),za.renderOrder=-10,za.frustumCulled=!1,i.add(za);let n=new Jr("#cfe8ff","#7a8f5a",1.25);i.add(n);let s=new to("#fff3d6",2.5);s.position.set(90,140,60),s.castShadow=e!=="low";let r=s.shadow;r.mapSize.set(e==="high"?2048:1024,e==="high"?2048:1024),r.camera.left=-70,r.camera.right=70,r.camera.top=70,r.camera.bottom=-70,r.camera.near=10,r.camera.far=420,r.bias=-8e-4,r.normalBias=.5,i.add(s,s.target),q.sun=s,q.sunOffset=new R(90,140,60);let o=new Cn({color:"#ffffff",flatShading:!0,transparent:!0,opacity:.95}),a=new Yr(1,1);for(let l=0;l<26;l++){let c=new Pt,h=4+(Math.random()*4|0);for(let d=0;d<h;d++){let u=new qe(a,o),f=14+Math.random()*16;u.scale.set(f*1.4,f*.7,f),u.position.set((d-h/2)*20+Math.random()*8,Math.random()*6,(Math.random()-.5)*18),c.add(u)}c.position.set((Math.random()-.5)*1300,230+Math.random()*120,(Math.random()-.5)*1300),c.userData.speed=2+Math.random()*3,i.add(c),uy.push(c)}}function Ym(i,e){za&&za.position.copy(e);for(let t of uy)t.position.x+=t.userData.speed*i,t.position.x>700&&(t.position.x=-700);if(q.sun&&q.shadowFocus){let t=q.shadowFocus;q.sun.position.set(t.x+q.sunOffset.x,t.y+q.sunOffset.y,t.z+q.sunOffset.z),q.sun.target.position.set(t.x,t.y,t.z),q.sun.target.updateMatrixWorld()}}var bw,qm,za,uy,fy=Ot(()=>{si();ri();bw=new fe("#3d8fe8"),qm=new fe("#bfe4ff"),uy=[]});function mh(i,e){let t=e-i;for(;t>Math.PI;)t-=Ha;for(;t<-Math.PI;)t+=Ha;return t}var Ss,er,gi,tr,Ha,Tw,JA,oi,Ga=Ot(()=>{si();Ss=(i,e,t)=>i<e?e:i>t?t:i,er=(i,e,t)=>i+(e-i)*t,gi=(i,e)=>i+Math.random()*(e-i),tr=i=>i[Math.random()*i.length|0],Ha=Math.PI*2;Tw=new fe,JA=new fe,oi=class{constructor(){this.pos=[],this.nor=[],this.col=[]}_v(e,t,n,s,r,o,a){this.pos.push(e,t,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b)}_quad(e,t,n,s,r,o,a,l,c){let h=x=>{let m=a>o?Ss((x[1]-o)/(a-o),0,1):1;return Tw.copy(c).lerp(l,m).clone()},d=h(e),u=h(t),f=h(n),p=h(s);this._v(e[0],e[1],e[2],r[0],r[1],r[2],d),this._v(t[0],t[1],t[2],r[0],r[1],r[2],u),this._v(n[0],n[1],n[2],r[0],r[1],r[2],f),this._v(e[0],e[1],e[2],r[0],r[1],r[2],d),this._v(n[0],n[1],n[2],r[0],r[1],r[2],f),this._v(s[0],s[1],s[2],r[0],r[1],r[2],p)}addBox(e,t,n,s,r,o,a,l=a){let c=(h,d,u,f,p)=>this._quad(h,d,u,f,p,t,r,a,l);c([s,t,o],[s,t,n],[s,r,n],[s,r,o],[1,0,0]),c([e,t,n],[e,t,o],[e,r,o],[e,r,n],[-1,0,0]),c([e,r,o],[s,r,o],[s,r,n],[e,r,n],[0,1,0]),c([e,t,n],[s,t,n],[s,t,o],[e,t,o],[0,-1,0]),c([e,t,o],[s,t,o],[s,r,o],[e,r,o],[0,0,1]),c([s,t,n],[e,t,n],[e,r,n],[s,r,n],[0,0,-1])}addFace(e,t,n){let[s,r,o]=e,a=r[0]-s[0],l=r[1]-s[1],c=r[2]-s[2],h=o[0]-s[0],d=o[1]-s[1],u=o[2]-s[2],f=l*u-c*d,p=c*h-a*u,x=a*d-l*h,m=Math.hypot(f,p,x)||1;f/=m,p/=m,x/=m;let g=0,y=0,M=0;for(let b of e)g+=b[0],y+=b[1],M+=b[2];g/=e.length,y/=e.length,M/=e.length;let v=e;(g-n[0])*f+(y-n[1])*p+(M-n[2])*x<0&&(v=e.slice().reverse(),f=-f,p=-p,x=-x);for(let b=1;b<v.length-1;b++)for(let T of[v[0],v[b],v[b+1]])this._v(T[0],T[1],T[2],f,p,x,t)}build(){let e=new $e;return e.setAttribute("position",new Ae(this.pos,3)),e.setAttribute("normal",new Ae(this.nor,3)),e.setAttribute("color",new Ae(this.col,3)),e.computeBoundingSphere(),e.computeBoundingBox(),e}}});var r0={};Fh(r0,{RAY:()=>gh,ROOF_PEAK:()=>Qi,ROOF_TH:()=>jm,STAIR_TH:()=>Jm,addCollider:()=>df,boxCollider:()=>t0,lineOfSight:()=>vh,moveActor:()=>yh,queryAABB:()=>mf,rampCollider:()=>n0,rampU:()=>s0,raycast:()=>es,removeCollider:()=>ff,roofCollider:()=>i0,setWorldLimit:()=>Qm,slabSurface:()=>pf,supportAt:()=>Di,surfaceTop:()=>Aw});function Qm(i){my=i}function df(i){i.id=++ww,i.stamp=0,i.cellList=[];let e=Math.floor(i.x0/In)+Kn,t=Math.floor(i.x1/In)+Kn,n=Math.floor(i.z0/In)+Kn,s=Math.floor(i.z1/In)+Kn;for(let r=n;r<=s;r++)for(let o=e;o<=t;o++){let a=e0(o,r);a<0||((_h[a]||(_h[a]=[])).push(i),i.cellList.push(a))}return i}function ff(i){if(!(!i||!i.cellList)){for(let e of i.cellList){let t=_h[e];if(!t)continue;let n=t.indexOf(i);n>=0&&(t[n]=t[t.length-1],t.pop())}i.cellList=null,i.removed=!0}}function t0(i,e,t,n,s,r,o){return df({kind:0,x0:i,y0:e,z0:t,x1:n,y1:s,z1:r,owner:o})}function n0(i,e,t,n,s,r){let o=r?r[0]:i,a=r?r[1]:e,l=r?r[2]:i+4,c=r?r[3]:e+4;return df({kind:1,x0:o,z0:a,x1:l,z1:c,bx0:i,bz0:e,bx1:i+4,bz1:e+4,y0:n-Jm,y1:n+3,yb:n,dir:t,th:Jm,owner:s})}function i0(i,e,t,n,s){let r=s?s[0]:i,o=s?s[1]:e,a=s?s[2]:i+4,l=s?s[3]:e+4;return df({kind:2,x0:r,z0:o,x1:a,z1:l,bx0:i,bz0:e,bx1:i+4,bz1:e+4,y0:t-jm,y1:t+Qi,yb:t,peak:Qi,th:jm,owner:n})}function pf(i,e,t){if(i.kind===1){let a=s0(i,e,t);return a=a<0?0:a>4?4:a,i.yb+.75*a}let n=4/2,s=(i.bx0+i.bx1)/2,r=(i.bz0+i.bz1)/2,o=Math.min(Math.max(Math.abs(e-s),Math.abs(t-r)),n);return i.yb+i.peak*(1-o/n)}function s0(i,e,t){switch(i.dir){case 0:return e-i.bx0;case 1:return t-i.bz0;case 2:return i.bx1-e;default:return i.bz1-t}}function mf(i,e,t,n,s){s.length=0,xh++;let r=Math.floor(i/In)+Kn,o=Math.floor(t/In)+Kn,a=Math.floor(e/In)+Kn,l=Math.floor(n/In)+Kn;for(let c=a;c<=l;c++)for(let h=r;h<=o;h++){let d=e0(h,c);if(d<0)continue;let u=_h[d];if(u)for(let f=0;f<u.length;f++){let p=u[f];p.stamp!==xh&&(p.stamp=xh,s.push(p))}}return s}function Di(i,e,t,n=.3){let s=Ms(i,e);mf(i-n,e-n,i+n,e+n,$m);for(let r=0;r<$m.length;r++){let o=$m[r];if(o.kind===0)o.y1<=t&&o.y1>s&&i>=o.x0-n&&i<=o.x1+n&&e>=o.z0-n&&e<=o.z1+n&&(s=o.y1);else if(i>=o.x0&&i<=o.x1&&e>=o.z0&&e<=o.z1){let a=pf(o,i,e);a<=t&&a>s&&(s=a)}}return s}function Aw(i,e){return Di(i,e,1e9,.1)}function Rw(i,e,t){let n=s0(e,i.x,i.z);n=n<0?0:n>4?4:n;let s=(t-.05+e.th-e.yb)/.75;if(s<=n||s>=4)return!1;let r=s-n+.01;return e.dir===0?i.x+=r:e.dir===2?i.x-=r:e.dir===1?i.z+=r:i.z-=r,!0}function py(i){let e=i.radius,t=i.y,n=i.y+i.height;mf(i.x-e,i.z-e,i.x+e,i.z+e,Zm);for(let s=0;s<2;s++){let r=!1;for(let o=0;o<Zm.length;o++){let a=Zm[o];if(a.y0>=n-.05||a.kind===0&&a.y1<=t+.7)continue;let l=i.x<a.x0?a.x0:i.x>a.x1?a.x1:i.x,c=i.z<a.z0?a.z0:i.z>a.z1?a.z1:i.z,h=i.x-l,d=i.z-c,u=h*h+d*d;if(!(u>=e*e)){if(a.kind!==0){let f=pf(a,l,c);if(f<=t+.7||f-a.th>=n-.05)continue}if(u>1e-9){let f=Math.sqrt(u),p=(e-f)/f;i.x+=h*p,i.z+=d*p}else if(!(a.kind===1&&Rw(i,a,n))){let f=i.x-a.x0,p=a.x1-i.x,x=i.z-a.z0,m=a.z1-i.z,g=Math.min(f,p,x,m);g===f?i.x=a.x0-e:g===p?i.x=a.x1+e:g===x?i.z=a.z0-e:i.z=a.z1+e}r=!0}}if(!r)break}}function Cw(i,e){let t=i.radius*.8,n=1/0;mf(i.x-t,i.z-t,i.x+t,i.z+t,Km);for(let s=0;s<Km.length;s++){let r=Km[s];if(!(i.x>=r.x0-t&&i.x<=r.x1+t&&i.z>=r.z0-t&&i.z<=r.z1+t))continue;let o=r.kind===0?r.y0:pf(r,i.x,i.z)-r.th;o>=e-.1&&o<n&&(n=o)}return n}function Pw(i,e){let n=Di(i.x,i.z,i.y+.7);if(i.inWater=!1,n<-.9&&(n=-.9,i.inWater=!0),i.grounded&&i.vy<=0){if(n>=i.y-.65){i.y=n,i.vy=0;return}i.grounded=!1}let s=i.y+i.vy*e;if(i.vy<=0&&s<=n){i.y=n,i.vy=0,i.grounded=!0;return}if(i.vy>0){let r=Cw(i,i.y+i.height);s+i.height>r&&(s=r-i.height,i.vy=0)}i.y=s,i.grounded=!1}function yh(i,e){let t=Math.hypot(i.vx*e,i.vz*e),n=Math.max(1,Math.ceil(Math.max(t/.25,Math.abs(i.vy*e)/.25))),s=e/n,r=my;for(let o=0;o<n;o++)(i.vx!==0||i.vz!==0)&&(i.x+=i.vx*s,py(i),i.z+=i.vz*s,py(i),i.x>r?i.x=r:i.x<-r&&(i.x=-r),i.z>r?i.z=r:i.z<-r&&(i.z=-r)),Pw(i,s)}function Iw(i,e,t,n,s,r,o){let a=(i.x0-e)*s,l=(i.x1-e)*s,c=Math.min(a,l),h=Math.max(a,l);return a=(i.y0-t)*r,l=(i.y1-t)*r,c=Math.max(c,Math.min(a,l)),h=Math.min(h,Math.max(a,l)),a=(i.z0-n)*o,l=(i.z1-n)*o,c=Math.max(c,Math.min(a,l)),h=Math.min(h,Math.max(a,l)),c>h||h<0?-1:c>=0?c:-1}function jt(i,e,t,n,s,r,o,a,l,c,h){let d=i*a+e*l+t*c,u=n-(i*s+e*r+t*o);if(Math.abs(d)<1e-12){u<0&&(h.miss=!0);return}let f=u/d;d<0?f>h.near&&(h.near=f):f<h.far&&(h.far=f)}function Lw(i,e,t,n,s,r,o){let a=gy;a.near=-1/0,a.far=1/0,a.miss=!1,jt(-1,0,0,-i.x0,e,t,n,s,r,o,a),jt(1,0,0,i.x1,e,t,n,s,r,o,a),jt(0,0,-1,-i.z0,e,t,n,s,r,o,a),jt(0,0,1,i.z1,e,t,n,s,r,o,a);let l=i.th;switch(i.dir){case 0:jt(-.75,1,0,i.yb-.75*i.bx0,e,t,n,s,r,o,a),jt(.75,-1,0,.75*i.bx0-i.yb+l,e,t,n,s,r,o,a);break;case 1:jt(0,1,-.75,i.yb-.75*i.bz0,e,t,n,s,r,o,a),jt(0,-1,.75,.75*i.bz0-i.yb+l,e,t,n,s,r,o,a);break;case 2:jt(.75,1,0,i.yb+.75*i.bx1,e,t,n,s,r,o,a),jt(-.75,-1,0,-i.yb-.75*i.bx1+l,e,t,n,s,r,o,a);break;default:jt(0,1,.75,i.yb+.75*i.bz1,e,t,n,s,r,o,a),jt(0,-1,-.75,-i.yb-.75*i.bz1+l,e,t,n,s,r,o,a);break}return a.miss||a.near>a.far||a.near<0?-1:a.near}function Dw(i,e,t,n,s,r,o){let a=gy;a.near=-1/0,a.far=1/0,a.miss=!1,jt(-1,0,0,-i.x0,e,t,n,s,r,o,a),jt(1,0,0,i.x1,e,t,n,s,r,o,a),jt(0,0,-1,-i.z0,e,t,n,s,r,o,a),jt(0,0,1,i.z1,e,t,n,s,r,o,a),jt(0,-1,0,-(i.yb-i.th),e,t,n,s,r,o,a);let l=4/2,c=(i.bx0+i.bx1)/2,h=(i.bz0+i.bz1)/2,d=i.peak/l;return jt(d,1,0,i.yb+i.peak+d*c,e,t,n,s,r,o,a),jt(-d,1,0,i.yb+i.peak-d*c,e,t,n,s,r,o,a),jt(0,1,d,i.yb+i.peak+d*h,e,t,n,s,r,o,a),jt(0,1,-d,i.yb+i.peak-d*h,e,t,n,s,r,o,a),a.miss||a.near>a.far||a.near<0?-1:a.near}function es(i,e,t,n,s,r,o){Math.abs(n)<bs&&(n=n<0?-bs:bs),Math.abs(s)<bs&&(s=s<0?-bs:bs),Math.abs(r)<bs&&(r=r<0?-bs:bs);let a=1/n,l=1/s,c=1/r,h=o,d=null,u="";xh++;let f=xh,p=Math.floor(i/In),x=Math.floor(t/In),m=n>0?1:-1,g=r>0?1:-1,y=In/Math.abs(n),M=In/Math.abs(r),v=(n>0?(p+1)*In-i:i-p*In)/Math.abs(n),b=(r>0?(x+1)*In-t:t-x*In)/Math.abs(r),T=0,_=0;for(;T<h&&_++<400;){let A=e0(p+Kn,x+Kn);if(A>=0){let I=_h[A];if(I)for(let U=0;U<I.length;U++){let k=I[U];if(k.stamp===f)continue;k.stamp=f;let L=k.kind===0?Iw(k,i,e,t,a,l,c):k.kind===1?Lw(k,i,e,t,n,s,r):Dw(k,i,e,t,n,s,r);L>=0&&L<h&&(h=L,d=k,u=k.kind===0?"box":"slab")}}else if(p+Kn<-1||x+Kn<-1||p+Kn>nr||x+Kn>nr)break;v<b?(T=v,v+=y,p+=m):(T=b,b+=M,x+=g)}let S=0,P=0;for(;S<h;){S+=Math.min(.5+S*.012,3),S>h&&(S=h);let A=i+n*S,I=e+s*S,U=t+r*S;if(I<Ms(A,U)){let k=P,L=S;for(let B=0;B<6;B++){let V=(k+L)*.5;e+s*V<Ms(i+n*V,t+r*V)?L=V:k=V}h=L,d=null,u="terrain";break}if(P=S,I>80&&s>=0)break}return h>=o&&u===""?null:(gh.t=h,gh.kind=u,gh.c=d,gh)}function vh(i,e,t,n,s,r){let o=n-i,a=s-e,l=r-t,c=Math.hypot(o,a,l);return c<.01?!0:(o/=c,a/=c,l/=c,es(i,e,t,o,a,l,c-.3)===null)}var In,nr,Kn,_h,xh,ww,Jm,Qi,jm,my,e0,$m,Zm,Km,gh,bs,gy,Ts=Ot(()=>{mi();ka();In=8,nr=140,Kn=nr/2,_h=new Array(nr*nr),xh=0,ww=0,Jm=.4,Qi=1.7,jm=.35,my=398;e0=(i,e)=>i<0||e<0||i>=nr||e>=nr?-1:e*nr+i;$m=[];Zm=[];Km=[];gh={t:0,kind:"",c:null},bs=1e-9;gy={near:0,far:0,miss:!1}});var f0={};Fh(f0,{FULL_MASK:()=>gf,GRID:()=>ho,PIECE_MAT:()=>xy,Piece:()=>Eh,T:()=>ts,TYPES:()=>_y,allPieces:()=>Va,clearAllPieces:()=>wh,createPiece:()=>a0,damagePiece:()=>rr,destroyPiece:()=>c0,findAnchor:()=>h0,flushChunks:()=>Fw,ghostGeometry:()=>d0,hasPieceBelow:()=>My,hooks:()=>Th,isPiece:()=>Es,pieceAt:()=>Uw,pieceExists:()=>sr,pieceKey:()=>_f,setMask:()=>l0,skirtFor:()=>u0});function Mh(i,e,t){if(i.every(Boolean))return[{c0:0,c1:e-1,r0:0,r1:t-1}];let n=[];for(let s=0;s<t;s++){let r=0;for(;r<e;){if(!i[s*e+r]){r++;continue}let o=r;for(;o+1<e&&i[s*e+o+1];)o++;n.push({c0:r,c1:o,r0:s,r1:s}),r=o+1}}return n}function o0(i,e,t){let n=(r,o)=>r>=0&&r<e&&o>=0&&o<t&&i[o*e+r],s=[];for(let r of["h","v"]){let o=r==="h"?t:e,a=r==="h"?e:t;for(let l=0;l<=o;l++){let c=null;for(let h=0;h<a;h++){let d=r==="h"?n(h,l-1):n(l-1,h),u=r==="h"?n(h,l):n(l,h),f=d===u?0:u?1:-1;if(c&&f===c.side){c.i1=h;continue}c&&(s.push(c),c=null),f!==0&&(c={kind:r,line:l,i0:h,i1:h,side:f})}c&&s.push(c)}}return s}function _f(i){return`${i.type}|${i.axis||""}|${i.i}|${i.j}|${Math.round(i.y*4)}|${i.dir??""}`}function sr(i){return Sh.has(_f(i))}function Uw(i){return Sh.get(_f(i))||null}function yy(i){if(i.type==="ramp"||i.type==="roof"){let e=ho[i.type],t=e[0],n=e[1],s=i.i*4,r=i.j*4;for(let o of Mh(i.mask,t,n)){let a;if(i.type==="ramp"){let c=4/t,h=4/n;a=i.uvRect(o.r0*h,(o.r1+1)*h,o.c0*c,(o.c1+1)*c)}else{let c=4/t;a=[s+o.c0*c,r+o.r0*c,s+(o.c1+1)*c,r+(o.r1+1)*c]}let l=i.type==="ramp"?n0(s,r,i.dir,i.y,i,a):i0(s,r,i.y,i,a);i.colliders.push(l)}}else for(let e of i.colBoxes())i.colliders.push(t0(e[0],e[1],e[2],e[3],e[4],e[5],i))}function vy(i){let e=new oi;if(i.fill(e),i.mesh){i.mesh.geometry.dispose(),i.mesh.geometry=e.build();return}i.mesh=new qe(e.build(),xy),i.mesh.castShadow=!0,i.mesh.receiveShadow=!0,q.scene.add(i.mesh)}function a0(i){let e=i.mat&&ji[i.mat]?ji[i.mat]:null;i.maxHp===void 0&&(i.maxHp=e?e.hp:400),i.color||(i.color=new fe(e?e.color:"#cccccc").multiplyScalar(.97+Math.random()*.06)),i.trim||(i.trim=new fe(e?e.trim||e.color:"#999999"));let t=new Eh(i);if(t.key=_f(t),Sh.has(t.key))return null;Sh.set(t.key,t),Va.add(t);let n=xf(t.i,t.j),s=bh.get(n);return s||bh.set(n,s=new Set),s.add(t),yy(t),vy(t),t}function l0(i,e){if(!i.dead){i.mask=e.slice();for(let t of i.colliders)ff(t);i.colliders=[],yy(i),vy(i)}}function wh(){for(let i of Array.from(Va))c0(i,!0)}function Fw(){}function c0(i,e=!1){if(i.dead)return;i.dead=!0;for(let n of i.colliders)ff(n);Va.delete(i),Sh.delete(i.key);let t=bh.get(xf(i.i,i.j));t&&t.delete(i),i.mesh&&(q.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh=null),!e&&Th.onDestroy&&Th.onDestroy(i)}function rr(i,e){return i.dead?!1:(i.hp-=e,i.hp<=0?(c0(i),!0):!1)}function h0(i,e,t){let n=null,s=1e9;for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=bh.get(xf(i+r,e+o));if(a)for(let l of a){let c=Math.abs(l.y-t);c<s&&(s=c,n=l)}}return n}function My(i,e,t){for(let n=-1;n<=0;n++)for(let s=-1;s<=0;s++){let r=bh.get(xf(i+n,e+s));if(r){for(let o of r)if(Math.abs(o.y-(t-3))<.6)return!0}}return!1}function u0(i,e,t){if(My(i,e,t))return 0;let n=Math.min(Ms(i*4,e*4),Ms((i+1)*4,e*4),Ms(i*4,(e+1)*4),Ms((i+1)*4,(e+1)*4));return Ss(t-n+.15,0,3)}function d0(i){let e=new Eh({...i,maxHp:1}),t=new oi,n=new fe("#ffffff");return e.color=n,e.trim=n,e.fill(t),t.build()}var xy,Va,Sh,bh,Th,ts,xi,_y,ho,Es,gf,Nw,Eh,xf,or=Ot(()=>{si();mi();Ga();Ts();ka();ri();xy=new Cn({vertexColors:!0}),Va=new Set,Sh=new Map,bh=new Map,Th={onDestroy:null},ts=.3,xi=.18,_y=["wall","floor","ramp","roof"],ho={wall:[3,3],floor:[3,3],ramp:[2,2],roof:[3,3]},Es=i=>!!i&&_y.includes(i.type)&&!!i.colliders,gf=(i="wall")=>new Array(ho[i][0]*ho[i][1]).fill(!0),Nw=0;Eh=class{constructor(e){Object.assign(this,e),this.id=++Nw,this.hp=this.maxHp,this.colliders=[],this.dead=!1,this.mesh=null,this.mask=e.mask?e.mask.slice():gf(e.type)}get grid(){return ho[this.type]}uvRect(e,t,n,s){let r=this.i*4,o=this.j*4,a=r+4,l=o+4;switch(this.dir){case 0:return[r+e,o+n,r+t,o+s];case 2:return[a-t,o+n,a-e,o+s];case 1:return[r+n,o+e,r+s,o+t];default:return[r+n,l-t,r+s,l-e]}}colBoxes(){let e=[],t=this.skirt||0,n=4/3;if(this.type==="wall")for(let s of Mh(this.mask,3,3)){let r=s.c0*n,o=(s.c1+1)*n,a=this.y+s.r0-(s.r0===0?t:0),l=this.y+s.r1+1;this.axis==="x"?e.push([this.i*4+r,a,this.j*4-ts/2,this.i*4+o,l,this.j*4+ts/2]):e.push([this.i*4-ts/2,a,this.j*4+r,this.i*4+ts/2,l,this.j*4+o])}else if(this.type==="floor")for(let s of Mh(this.mask,3,3))e.push([this.i*4+s.c0*n,this.y-ts-t,this.j*4+s.r0*n,this.i*4+(s.c1+1)*n,this.y,this.j*4+(s.r1+1)*n]);return e}center(){return this.type==="wall"?this.axis==="x"?[this.i*4+4/2,this.y+3/2,this.j*4]:[this.i*4,this.y+3/2,this.j*4+4/2]:[this.i*4+4/2,this.y+(this.type==="ramp"?3/2:this.type==="roof"?Qi/2:0),this.j*4+4/2]}fill(e){this.type==="wall"?this.fillWall(e):this.type==="floor"?this.fillFloor(e):this.type==="ramp"?this.fillStairs(e):this.fillRoof(e)}fillWall(e){let t=4/3,n=this.mask,s=this.color,r=this.trim,o=(a,l,c,h,d,u)=>{let f=this.y+c,p=this.y+h;this.axis==="x"?e.addBox(this.i*4+a,f,this.j*4-d,this.i*4+l,p,this.j*4+d,u,u):e.addBox(this.i*4-d,f,this.j*4+a,this.i*4+d,p,this.j*4+l,u,u)};for(let a of Mh(n,3,3))o(a.c0*t,(a.c1+1)*t,a.r0,a.r1+1,.08,s);for(let a of o0(n,3,3))if(a.kind==="h"){let l=a.side>0?a.line:a.line-xi*1.4,c=a.side>0?a.line+xi*1.4:a.line;o(a.i0*t,(a.i1+1)*t,l,c,ts/2,r)}else{let l=a.side>0?a.line*t:a.line*t-xi,c=a.side>0?a.line*t+xi:a.line*t;o(l,c,a.i0,a.i1+1,ts/2,r)}}fillFloor(e){let t=4/3,n=this.mask,s=this.color,r=this.trim,o=this.skirt||0,a=this.i*4,l=this.j*4;for(let h of Mh(n,3,3))e.addBox(a+h.c0*t,this.y-ts-o,l+h.r0*t,a+(h.c1+1)*t,this.y,l+(h.r1+1)*t,s,r);let c=this.y-ts-.2-o;for(let h of o0(n,3,3))if(h.kind==="h"){let d=h.side>0?l+h.line*t:l+h.line*t-xi,u=h.side>0?l+h.line*t+xi:l+h.line*t;e.addBox(a+h.i0*t,c,d,a+(h.i1+1)*t,this.y,u,r,r)}else{let d=h.side>0?a+h.line*t:a+h.line*t-xi,u=h.side>0?a+h.line*t+xi:a+h.line*t;e.addBox(d,c,l+h.i0*t,u,this.y,l+(h.i1+1)*t,r,r)}}fillStairs(e){let n=4/12,s=.75*n,r=this.y,o=this.color,a=this.trim,l=o.clone().multiplyScalar(1.08),c=.24,h=2,d=2,u=4/h,f=4/d,p=(m,g,y,M,v,b,T,_)=>{let S=this.uvRect(m,g,y,M);e.addBox(S[0],v,S[1],S[2],b,S[3],T,_||T)},x=[];for(let m=0;m<d;m++){let g=[],y=0;for(;y<h;){if(!this.mask[m*h+y]){y++;continue}let M=y;for(;M+1<h&&this.mask[m*h+M+1];)M++;g.push([y*u,(M+1)*u]),y=M+1}x.push(g)}for(let m=0;m<12;m++){let g=m*n,y=(m+1)*n,M=Math.min(d-1,Math.floor((m+.5)*n/f)),v=r+.75*(m+.5)*n;for(let[b,T]of x[M])p(g,y,b+c,T-c,v-.12,v,m%2?l:o,a),p(g,g+.07,b+c,T-c,v-s,v-.1,a,a),p(g,y,b,b+c,v-.42,v,a,a),p(g,y,T-c,T,v-.42,v,a,a)}}fillRoof(e){let t=this.i*4,n=this.j*4,s=t+4,r=n+4,o=this.y,a=t+4/2,l=n+4/2,c=o+Qi,h=this.color,d=this.trim,u=.28;if(this.mask.every(Boolean)){let y=[[t,n],[s,n],[s,r],[t,r]],M=[a,o+.3,l];for(let b=0;b<4;b++){let T=y[b],_=y[(b+1)%4],S=h.clone().multiplyScalar(b%2?.92:1.05);e.addFace([[T[0],o,T[1]],[_[0],o,_[1]],[a,c,l]],S,M),e.addFace([[T[0],o-u,T[1]],[_[0],o-u,_[1]],[a,c-u*1.6,l]],d,[a,c+9,l])}let v=.22;e.addBox(t,o-u,n,s,o+.12,n+v,d,d),e.addBox(t,o-u,r-v,s,o+.12,r,d,d),e.addBox(t,o-u,n+v,t+v,o+.12,r-v,d,d),e.addBox(s-v,o-u,n+v,s,o+.12,r-v,d,d);return}let p=4/2,x=4/3,m=(y,M)=>o+Qi*(1-Math.min(Math.max(Math.abs(y-a),Math.abs(M-l)),p)/p),g=[a,o+.2,l];for(let y=0;y<3;y++)for(let M=0;M<3;M++){if(!this.mask[y*3+M])continue;let v=t+M*x,b=v+x,T=n+y*x,_=T+x,S=(v+b)/2,P=(T+_)/2,A=[v,m(v,T),T],I=[b,m(b,T),T],U=[b,m(b,_),_],k=[v,m(v,_),_],L=[S,m(S,P),P],B=(z,ie,X,J)=>{e.addFace([z,ie,X],J,g),e.addFace([[z[0],z[1]-u,z[2]],[ie[0],ie[1]-u,ie[2]],[X[0],X[1]-u,X[2]]],d,[a,c+9,l])},V=h.clone().multiplyScalar((y+M)%2?.94:1.04);B(A,I,L,V),B(I,U,L,V),B(U,k,L,V),B(k,A,L,V)}for(let y of o0(this.mask,3,3))if(y.kind==="h"){let M=n+y.line*x,v=t+y.i0*x,b=t+(y.i1+1)*x,T=Math.max(m(v,M),m(b,M),m((v+b)/2,M)),_=Math.min(m(v,M),m(b,M));e.addBox(v,_-u,y.side>0?M:M-xi,b,T+.05,y.side>0?M+xi:M,d,d)}else{let M=t+y.line*x,v=n+y.i0*x,b=n+(y.i1+1)*x,T=Math.max(m(M,v),m(M,b),m(M,(v+b)/2)),_=Math.min(m(M,v),m(M,b));e.addBox(y.side>0?M:M-xi,_-u,v,y.side>0?M+xi:M,T+.05,b,d,d)}}},xf=(i,e)=>i+","+e});function Ay(i){let e=new Ri(1,1,1);Ni=new Gr(e,new Ft({color:"#ffffff"}),Jn),Ni.frustumCulled=!1,_i.scale.set(0,0,0),_i.updateMatrix();for(let s=0;s<Jn;s++)Ni.setMatrixAt(s,_i.matrix),Ni.setColorAt(s,y0.set("#ffffff"));i.add(Ni);let t=new Ri(1,1,1);for(let s=0;s<40;s++){let r=new qe(t,new Ft({color:"#fff3b0",transparent:!0,opacity:.9,depthWrite:!1}));r.visible=!1,r.frustumCulled=!1,r.userData.t=0,i.add(r),yf.push(r)}let n=new Ci(1,14,10);for(let s=0;s<6;s++){let r=new qe(n,new Ft({color:"#ff9a2a",transparent:!0,opacity:.8,depthWrite:!1}));r.visible=!1,r.userData.t=0,r.userData.r=1,i.add(r),vf.push(r)}}function ar(i,e,t,n,s,r,o,a,l=12,c=.6){y0.set(n);for(let h=0;h<s;h++){let d=p0;p0=(p0+1)%Jn,m0[d]=i,g0[d]=e,x0[d]=t;let u=Math.random()*6.283,f=(Math.random()-.3)*2*c,p=r*(.35+Math.random()*.65),x=Math.sqrt(Math.max(0,1-f*f));Sy[d]=Math.cos(u)*x*p,by[d]=Math.sin(u)*x*p,_0[d]=f*p+r*.25,uo[d]=Ty[d]=o*(.6+Math.random()*.4),Ey[d]=a*(.6+Math.random()*.8),wy[d]=l,Ni.setColorAt(d,y0)}Ni.instanceColor.needsUpdate=!0}function Ui(i,e,t,n="dust",s="#cfc6a8"){n==="spark"?ar(i,e,t,"#ffd36a",6,5,.25,.07,10):n==="flesh"?ar(i,e,t,"#ff4d4d",7,3.5,.4,.09,12):ar(i,e,t,s,7,3,.45,.12,8)}function Ry(i,e,t,n,s,r,o="#fff3b0",a=.035,l=.07){let c=n-i,h=s-e,d=r-t,u=Math.hypot(c,h,d);if(u<.5)return;let f=null;for(let p of yf)if(!p.visible){f=p;break}f||(f=yf[0]),f.visible=!0,f.userData.t=l,f.userData.max=l,f.material.color.set(o),f.position.set((i+n)/2,(e+s)/2,(t+r)/2),f.scale.set(a,a,u),f.lookAt(n,s,r)}function Cy(i,e,t,n){let s=vf.find(r=>!r.visible)||vf[0];s.visible=!0,s.userData.t=.45,s.userData.r=n,s.position.set(i,e,t),s.scale.setScalar(.5),ar(i,e,t,"#ff7a1f",40,n*2.2,.8,.5,-1,.9),ar(i,e,t,"#ffd24a",30,n*2.8,.55,.35,2,.9),ar(i,e,t,"#4a4a4a",28,n*1.4,1.4,.7,-2,.9),ar(i,e,t,"#8a7a5a",20,n*2.4,.9,.3,14,.6),q.shake=Math.max(q.shake,Math.min(1,14/(1+Ow(i,e,t))))}function Ow(i,e,t){let n=q.player;return n?Math.hypot(n.x-i,n.y-e,n.z-t):100}function Mf(i,e,t,n,s=14){ar(i,e,t,n,s,5,.9,.2,18,.9)}function Py(i){if(Ni){for(let e=0;e<Jn;e++)if(uo[e]>0){if(uo[e]-=i,uo[e]<=0){_i.scale.set(0,0,0),_i.position.set(0,-999,0),_i.updateMatrix(),Ni.setMatrixAt(e,_i.matrix);continue}_0[e]-=wy[e]*i,m0[e]+=Sy[e]*i,g0[e]+=_0[e]*i,x0[e]+=by[e]*i;let t=Ey[e]*(.25+.75*(uo[e]/Ty[e]));_i.position.set(m0[e],g0[e],x0[e]),_i.scale.set(t,t,t),_i.rotation.set(uo[e]*5,uo[e]*3,0),_i.updateMatrix(),Ni.setMatrixAt(e,_i.matrix)}Ni.instanceMatrix.needsUpdate=!0;for(let e of yf)e.visible&&(e.userData.t-=i,e.userData.t<=0?e.visible=!1:e.material.opacity=.9*(e.userData.t/e.userData.max));for(let e of vf){if(!e.visible)continue;if(e.userData.t-=i,e.userData.t<=0){e.visible=!1;continue}let t=1-e.userData.t/.45;e.scale.setScalar(.5+e.userData.r*Math.sqrt(t)),e.material.opacity=.8*(1-t)}}}var Jn,Ni,yf,vf,m0,g0,x0,Sy,_0,by,uo,Ty,Ey,wy,p0,_i,y0,Sf=Ot(()=>{si();ri();Jn=700,yf=[],vf=[],m0=new Float32Array(Jn),g0=new Float32Array(Jn),x0=new Float32Array(Jn),Sy=new Float32Array(Jn),_0=new Float32Array(Jn),by=new Float32Array(Jn),uo=new Float32Array(Jn),Ty=new Float32Array(Jn),Ey=new Float32Array(Jn),wy=new Float32Array(Jn),p0=0,_i=new yt,y0=new fe});function Dy(i=.7){if(Ly=i,Ye){ut.gain.value=i,Ye.state==="suspended"&&Ye.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;Ye=new e,ut=Ye.createGain(),ut.gain.value=i;let t=Ye.createDynamicsCompressor();ut.connect(t),t.connect(Ye.destination);let n=Ye.sampleRate*2;wf=Ye.createBuffer(1,n,Ye.sampleRate);let s=wf.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;let r=Ye.createBufferSource();r.buffer=wf,r.loop=!0;let o=Ye.createBiquadFilter();o.type="bandpass",o.frequency.value=600,o.Q.value=.5,bf=Ye.createGain(),bf.gain.value=0,r.connect(o),o.connect(bf),bf.connect(ut),r.start();let a=Ye.createOscillator();a.type="sawtooth",a.frequency.value=62;let l=Ye.createBiquadFilter();l.type="lowpass",l.frequency.value=220,Tf=Ye.createGain(),Tf.gain.value=0,a.connect(l),l.connect(Tf),Tf.connect(ut),a.start()}function Ny(i){Ly=i,ut&&(ut.gain.value=i)}function Uy(){Ye&&Ye.state==="suspended"&&Ye.resume()}function Ef(i){if(!Ye)return null;if(!i)return ut;let e=Ye.createStereoPanner();return e.pan.value=Math.max(-1,Math.min(1,i)),e.connect(ut),e}function rn(i,{dur:e=.15,f0:t=3e3,f1:n=600,q:s=.7,gain:r=.5,type:o="lowpass",delay:a=0}){let l=Ye.currentTime+a,c=Ye.createBufferSource();c.buffer=wf,c.loop=!0;let h=Ye.createBiquadFilter();h.type=o,h.Q.value=s,h.frequency.setValueAtTime(t,l),h.frequency.exponentialRampToValueAtTime(Math.max(30,n),l+e);let d=Ye.createGain();d.gain.setValueAtTime(r,l),d.gain.exponentialRampToValueAtTime(.001,l+e),c.connect(h),h.connect(d),d.connect(i),c.start(l,Math.random()*1.5),c.stop(l+e+.05)}function Rt(i,{f0:e=440,f1:t=440,dur:n=.1,type:s="sine",gain:r=.3,delay:o=0}){let a=Ye.currentTime+o,l=Ye.createOscillator();l.type=s,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+n);let c=Ye.createGain();c.gain.setValueAtTime(r,a),c.gain.exponentialRampToValueAtTime(.001,a+n),l.connect(c),c.connect(i),l.start(a),l.stop(a+n+.05)}var Ye,ut,wf,bf,Tf,Ly,Iy,vt,lr=Ot(()=>{Ye=null,ut=null,wf=null,bf=null,Tf=null,Ly=.7;Iy={pistol:(i,e)=>{rn(i,{dur:.12,f0:4200,f1:700,gain:.55*e}),Rt(i,{f0:220,f1:70,dur:.1,gain:.5*e})},smg:(i,e)=>{rn(i,{dur:.09,f0:5e3,f1:900,gain:.45*e}),Rt(i,{f0:260,f1:90,dur:.07,gain:.35*e})},ar:(i,e)=>{rn(i,{dur:.15,f0:3400,f1:500,gain:.6*e}),Rt(i,{f0:170,f1:55,dur:.12,gain:.55*e})},shotgun:(i,e)=>{rn(i,{dur:.32,f0:2600,f1:200,gain:.9*e}),Rt(i,{f0:140,f1:38,dur:.22,gain:.8*e})},sniper:(i,e)=>{rn(i,{dur:.55,f0:3e3,f1:150,gain:.95*e}),Rt(i,{f0:120,f1:28,dur:.4,gain:.9*e}),rn(i,{dur:.6,f0:900,f1:120,gain:.25*e,delay:.12})},rocket:(i,e)=>{rn(i,{dur:.5,f0:1800,f1:200,gain:.7*e,type:"bandpass"}),Rt(i,{f0:100,f1:40,dur:.3,gain:.7*e})}},vt={shot(i,e=1,t=0){if(!Ye||e<.02)return;let n=Ef(t);(Iy[i]||Iy.ar)(n,e)},explosion(i=1,e=0){if(!Ye||i<.02)return;let t=Ef(e);rn(t,{dur:1.3,f0:1800,f1:60,gain:1.1*i}),Rt(t,{f0:90,f1:22,dur:.9,gain:1*i}),rn(t,{dur:.5,f0:6e3,f1:800,gain:.5*i,type:"highpass"})},hit(){Ye&&Rt(ut,{f0:1500,f1:1200,dur:.05,type:"square",gain:.18})},headshot(){Ye&&(Rt(ut,{f0:2200,f1:1800,dur:.07,type:"square",gain:.25}),Rt(ut,{f0:1100,f1:900,dur:.1,type:"triangle",gain:.2}))},kill(){Ye&&(Rt(ut,{f0:600,f1:900,dur:.12,type:"triangle",gain:.35}),Rt(ut,{f0:900,f1:1400,dur:.18,type:"triangle",gain:.35,delay:.1}))},hurt(){Ye&&(Rt(ut,{f0:180,f1:90,dur:.18,type:"sawtooth",gain:.3}),rn(ut,{dur:.15,f0:900,f1:200,gain:.25}))},pickup(){Ye&&(Rt(ut,{f0:700,f1:1e3,dur:.08,type:"triangle",gain:.25}),Rt(ut,{f0:1e3,f1:1500,dur:.1,type:"triangle",gain:.25,delay:.07}))},ammo(){Ye&&Rt(ut,{f0:500,f1:560,dur:.05,type:"square",gain:.1})},chest(){if(Ye)for(let i=0;i<5;i++)Rt(ut,{f0:600+i*160,f1:700+i*170,dur:.18,type:"triangle",gain:.22,delay:i*.07})},build(i=0){if(!Ye)return;let e=Ef(i);rn(e,{dur:.12,f0:1200,f1:200,gain:.5}),Rt(e,{f0:180,f1:110,dur:.1,gain:.35,type:"triangle"})},breakPiece(i=1,e=0){if(!Ye||i<.03)return;let t=Ef(e);rn(t,{dur:.5,f0:2600,f1:150,gain:.7*i}),Rt(t,{f0:120,f1:50,dur:.3,gain:.5*i,type:"triangle"})},pickaxe(i="wood"){Ye&&(i==="metal"?(Rt(ut,{f0:1800,f1:1400,dur:.14,type:"square",gain:.18}),rn(ut,{dur:.08,f0:6e3,f1:2e3,gain:.25,type:"highpass"})):(rn(ut,{dur:.14,f0:1600,f1:250,gain:.55}),Rt(ut,{f0:200,f1:100,dur:.1,type:"triangle",gain:.4})))},swing(){Ye&&rn(ut,{dur:.15,f0:1500,f1:600,gain:.12,type:"bandpass"})},reload(){Ye&&(Rt(ut,{f0:300,f1:200,dur:.05,type:"square",gain:.12}),Rt(ut,{f0:500,f1:400,dur:.06,type:"square",gain:.12,delay:.5}))},empty(){Ye&&Rt(ut,{f0:800,f1:700,dur:.04,type:"square",gain:.1})},heal(){Ye&&(Rt(ut,{f0:500,f1:900,dur:.25,type:"sine",gain:.25}),Rt(ut,{f0:750,f1:1300,dur:.3,type:"sine",gain:.2,delay:.1}))},step(i=1){Ye&&rn(ut,{dur:.06,f0:700,f1:200,gain:.07*i})},land(){Ye&&rn(ut,{dur:.15,f0:600,f1:120,gain:.25})},storm(){Ye&&(Rt(ut,{f0:330,f1:330,dur:.4,type:"sine",gain:.2}),Rt(ut,{f0:262,f1:262,dur:.5,type:"sine",gain:.2,delay:.35}))},victory(){Ye&&[523,659,784,1047,1319].forEach((i,e)=>Rt(ut,{f0:i,f1:i,dur:.5,type:"triangle",gain:.3,delay:e*.14}))},eliminated(){Ye&&[392,330,262,196].forEach((i,e)=>Rt(ut,{f0:i,f1:i*.98,dur:.4,type:"sawtooth",gain:.18,delay:e*.18}))},slide(){Ye&&rn(ut,{dur:.45,f0:1400,f1:250,gain:.3,type:"bandpass"})},jump(){Ye&&rn(ut,{dur:.12,f0:800,f1:300,gain:.1,type:"bandpass"})},glider(){Ye&&rn(ut,{dur:.35,f0:2e3,f1:500,gain:.35,type:"bandpass"})}}});function ns(i,e){(v0[i]||(v0[i]=[])).push(e)}function jn(i,e,t,n){let s=v0[i];if(s)for(let r=0;r<s.length;r++)s[r](e,t,n)}var v0,fo=Ot(()=>{v0={}});var T0={};Fh(T0,{HIT:()=>Fi,damageActor:()=>Ah,explode:()=>ky,initCombatHooks:()=>b0,killActor:()=>By,shoot:()=>Rh,traceShot:()=>Wa,updateRockets:()=>S0});function Bw(i,e,t,n,s,r,o,a,l,c){let h=i-o,d=e-a,u=t-l,f=h*n+d*s+u*r,p=h*h+d*d+u*u-c*c,x=f*f-p;if(x<0)return-1;let m=Math.sqrt(x),g=-f-m;return g<0&&(g=-f+m),g}function kw(i,e,t,n,s,r,o,a,l,c,h){let d=n*n+r*r;if(d<1e-9)return-1;let u=i-o,f=t-a,p=u*n+f*r,x=u*u+f*f-l*l,m=p*p-d*x;if(m<0)return-1;let g=Math.sqrt(m),y=(-p-g)/d;if(y<0&&(y=(-p+g)/d),y<0)return-1;let M=e+s*y;return M<c||M>h?-1:y}function Wa(i,e,t,n,s,r,o,a){let l=o,c="none",h=null,d=!1,u=null,f="",p=es(i,e,t,n,s,r,o);p&&(l=p.t,c="world",f=p.kind,u=p.c);let x=q.actors;for(let m=0;m<x.length;m++){let g=x[m];if(g===a||!g.alive||g.mode==="bus"||g.mode==="dead")continue;let y=g.x-i,M=g.y+.9-e,v=g.z-t,b=y*n+M*s+v*r;if(b<-1.5||b>l+1.5)continue;let T=y-n*b,_=M-s*b,S=v-r*b;if(T*T+_*_+S*S>6)continue;let P=g.y+g.height-.2,A=Bw(i,e,t,n,s,r,g.x,P,g.z,.27),I=kw(i,e,t,n,s,r,g.x,g.z,.44,g.y,g.y+g.height-.4),U=-1,k=!1;A>=0&&(I<0||A<=I+.15)?(U=A,k=!0):I>=0&&(U=I),U>=0&&U<l&&(l=U,c="actor",h=g,d=k,u=null)}return Fi.t=l,Fi.kind=c,Fi.actor=h,Fi.head=d,Fi.c=u,Fi.wkind=f,Fi.x=i+n*l,Fi.y=e+s*l,Fi.z=t+r*l,Fi}function Ah(i,e,t,n,s){if(!i.alive||i.mode==="bus"||i.mode==="dead")return;if(i.god){t&&t.isPlayer&&t!==i&&jn("hitmarker",{head:n,dmg:e,killed:!1,x:i.x,y:i.y+1.8,z:i.z}),i.isPlayer&&jn("playerHurt",{dmg:e,attacker:t});return}let r=e;if(i.shield>0){let o=Math.min(i.shield,r);i.shield-=o,r-=o}i.hp-=r,i.lastHurtBy=t,i.lastHurtAt=q.time,i.isPlayer&&jn("playerHurt",{dmg:e,attacker:t}),t&&t.isPlayer&&t!==i&&jn("hitmarker",{head:n,dmg:e,killed:i.hp<=0,x:i.x,y:i.y+1.8,z:i.z}),i.hp<=0&&(i.hp=0,By(i,t,s))}function By(i,e,t){i.alive&&(i.alive=!1,i.mode="dead",i.deadAt=q.time,e&&e!==i&&e.kills++,jn("kill",{victim:i,attacker:e,weapon:t}),e&&e.isPlayer&&vt.kill())}function Rh(i,e,t,n,s,r,o,a,l,c){let h=Jt[e];if(h.projectile){Hw(i,e,t,n,s,r,o,c);return}M0.crossVectors(o,zw).normalize(),Fy.crossVectors(M0,o).normalize();let d=lo[t].dmg,u=i.isPlayer;for(let f=0;f<h.pellets;f++){let p=(Math.random()+Math.random()-1)*a*1.6,x=(Math.random()+Math.random()-1)*a*1.6;Af.copy(o).addScaledVector(M0,p).addScaledVector(Fy,x).normalize();let m=Wa(n,s,r,Af.x,Af.y,Af.z,h.range,i);if(c&&Ry(c.x,c.y,c.z,m.x,m.y,m.z,f===0||h.pellets===1?"#fff3b0":"#ffe9a0",h.pellets>1?.018:.035),m.kind==="actor"){let g=h.dmg*d*l;h.pellets>1&&(g*=1-Math.min(1,Math.max(0,(m.t-8)/(h.range-8)))*.65),m.head&&(g*=h.head),Ui(m.x,m.y,m.z,"flesh"),Ah(m.actor,g,i,m.head,h.name),u&&vt.hit()}else if(m.kind==="world"){let g=m.c&&m.c.owner;g?Es(g)?(rr(g,h.struct*d*(u?1:.5)),Ui(m.x,m.y,m.z,"dust","#d9b98a")):Ui(m.x,m.y,m.z,"dust","#8a6a3a"):Ui(m.x,m.y,m.z,"spark")}else m.kind}}function Hw(i,e,t,n,s,r,o,a){Rf||(Rf=new gs(.08,.1,.7,8),Rf.rotateX(Math.PI/2),Oy=new Cn({color:"#c9d2dc"}));let l=Wa(n,s,r,o.x,o.y,o.z,400,i),c=a?a.x:n,h=a?a.y:s,d=a?a.z:r,u=new R(l.x-c,l.y-h,l.z-d);u.lengthSq()<4&&u.copy(o),u.normalize();let f=new qe(Rf,Oy);f.position.set(c,h,d),f.lookAt(c+u.x,h+u.y,d+u.z),q.scene.add(f),Cf.push({m:f,x:c,y:h,z:d,dx:u.x,dy:u.y,dz:u.z,owner:i,rarity:t,t:0,speed:62}),q.shake=Math.max(q.shake,i.isPlayer?.25:0)}function S0(i){for(let e=Cf.length-1;e>=0;e--){let t=Cf[e],n=t.speed*i,s=Wa(t.x,t.y,t.z,t.dx,t.dy,t.dz,n+.4,t.owner);if(t.t+=i,s.kind!=="none"||t.t>7){let r=s.kind!=="none"?s.x-t.dx*.3:t.x,o=s.kind!=="none"?s.y-t.dy*.3:t.y,a=s.kind!=="none"?s.z-t.dz*.3:t.z;ky(r,o,a,7,Jt.rocket.dmg*lo[t.rarity].dmg,t.owner,"Lan\xE7a-Foguetes"),q.scene.remove(t.m),Cf.splice(e,1);continue}t.x+=t.dx*n,t.y+=t.dy*n,t.z+=t.dz*n,t.m.position.set(t.x,t.y,t.z),Ui(t.x-t.dx*.5,t.y-t.dy*.5,t.z-t.dz*.5,"dust","#bbbbbb"),Math.random()<.7&&Ui(t.x-t.dx*.6,t.y-t.dy*.6,t.z-t.dz*.6,"spark")}}function ky(i,e,t,n,s,r,o){Cy(i,e,t,n);let a=q.player,l=a?Math.hypot(a.x-i,a.z-t):999,c=Math.max(0,1-l/300);vt.explosion(c*1.2,0);for(let d of q.actors){if(!d.alive||d.mode==="bus")continue;let u=Math.hypot(d.x-i,d.y+.9-e,d.z-t);if(u>n+.5)continue;let f=1-u/(n+.5)*.75;vh(i,e+.2,t,d.x,d.y+1,d.z)||(f*=.45),d===r&&(f*=.55),Ah(d,s*f,r,!1,o),d.isPlayer&&(d.vy+=6*f,q.shake=Math.max(q.shake,.6))}let h=[];for(let d of Va){let u=d.center(),f=Math.hypot(u[0]-i,u[1]-e,u[2]-t);f<n+2.2&&h.push([d,450*(1-f/(n+2.6))])}for(let[d,u]of h)rr(d,u)}function b0(){Th.onDestroy=i=>{let e=i.center();Mf(e[0],e[1],e[2],"#"+i.color.getHexString(),16);let t=q.player,n=t?Math.hypot(t.x-e[0],t.z-e[2]):999;vt.breakPiece(Math.max(0,1-n/120),0)}}var Fi,Af,M0,Fy,zw,vR,Cf,Rf,Oy,Ch=Ot(()=>{si();mi();Ts();or();ka();Sf();lr();fo();ri();Fi={t:0,kind:"none",actor:null,head:!1,c:null,wkind:"",x:0,y:0,z:0};Af=new R,M0=new R,Fy=new R,zw=new R(0,1,0),vR=new R;Cf=[],Rf=null,Oy=null});function Gw(i,e=0){let t=i+e;if(E0[t])return E0[t];let n=new oi,s=Et("#2a2e36"),r=Et("#454b56"),o=Et("#7a4f2b"),a=Et("#9aa3ad"),l=Et(lo[e].color);switch(i){case"pistol":n.addBox(-.03,0,-.3,.03,.075,.04,r),n.addBox(-.025,-.11,0,.025,0,.07,s),n.addBox(-.032,.03,-.2,.032,.048,-.04,l),n.addBox(-.012,.075,-.28,.012,.09,-.26,a);break;case"smg":n.addBox(-.032,-.01,-.3,.032,.08,.12,r),n.addBox(-.014,.02,-.44,.014,.05,-.3,s),n.addBox(-.02,-.25,-.1,.02,-.01,-.03,s),n.addBox(-.025,-.12,.05,.025,-.01,.11,s),n.addBox(-.025,0,.12,.025,.06,.3,r),n.addBox(-.034,.03,-.26,.034,.05,-.06,l);break;case"ar":n.addBox(-.035,-.02,-.42,.035,.085,.12,r),n.addBox(-.014,.02,-.68,.014,.05,-.42,s),n.addBox(-.03,-.04,.12,.03,.07,.34,s),n.addBox(-.025,-.2,-.17,.025,-.02,-.07,s),n.addBox(-.025,-.12,.04,.025,-.02,.1,s),n.addBox(-.016,.085,-.3,.016,.115,-.18,a),n.addBox(-.037,.02,-.34,.037,.048,-.12,l);break;case"shotgun":n.addBox(-.032,-.02,-.22,.032,.08,.12,r),n.addBox(-.02,.02,-.82,.02,.07,-.22,s),n.addBox(-.036,-.03,-.52,.036,.04,-.34,o),n.addBox(-.03,-.05,.12,.03,.08,.4,o),n.addBox(-.034,.03,-.2,.034,.055,-.04,l);break;case"sniper":n.addBox(-.03,-.02,-.3,.03,.075,.16,r),n.addBox(-.012,.02,-1.08,.012,.05,-.3,s),n.addBox(-.032,.085,-.4,.032,.15,-.02,s),n.addBox(-.036,.09,-.42,.036,.145,-.4,l),n.addBox(-.028,-.04,.16,.028,.08,.46,o),n.addBox(-.02,-.12,-.04,.02,-.02,.02,s);break;case"rocket":n.addBox(-.07,-.03,-.9,.07,.11,.1,Et("#5b6b3a")),n.addBox(-.09,-.05,-.98,.09,.13,-.86,s),n.addBox(-.075,-.03,.08,.075,.11,.2,s),n.addBox(-.025,-.14,-.12,.025,-.03,-.04,s),n.addBox(-.025,-.14,.02,.025,-.03,.08,s),n.addBox(-.072,.03,-.55,.072,.06,-.3,l),n.addBox(-.015,.11,-.4,.015,.16,-.3,a);break;case"pickaxe":n.addBox(-.022,-.022,-.62,.022,.022,.1,o),n.addBox(-.26,-.035,-.7,.26,.05,-.58,Et("#b9c2cc")),n.addBox(-.27,-.12,-.7,-.21,.05,-.58,Et("#d94a3a")),n.addBox(.21,-.12,-.7,.27,.05,-.58,Et("#d94a3a"));break}let c=n.build();return E0[t]=c,c}function Hy(i){return i==="pickaxe"?.7:Jt[i].len}function Vw(i,e=0){let t=new qe(Gw(i,e),mo);return t.castShadow=!0,t}function w0(){return{shirt:tr(Gy),pants:tr(Ww),hair:tr(Xw),skin:tr(qw),hat:tr(Yw),hatColor:tr(Gy),pack:tr(["#3b3b44","#7a5a3a","#2f4f6f","#6a2f3f"])}}function $w(i){let e=new oi,t=Et(i.shirt);return e.addBox(-.25,0,-.14,.25,.62,.14,t,t.clone().multiplyScalar(.8)),e.addBox(-.255,0,-.145,.255,.09,.145,Et("#2b2b2f")),e.addBox(-.2,.06,.14,.2,.52,.32,Et(i.pack)),e.addBox(-.15,.1,.32,.15,.25,.36,Et(i.pack).multiplyScalar(.7)),e.build()}function Zw(i){let e=new oi,t=Et(i.skin),n=Et(i.hair);return e.addBox(-.06,-.02,-.06,.06,.06,.06,t),e.addBox(-.17,.04,-.17,.17,.38,.17,t),e.addBox(-.11,.18,-.175,-.05,.24,-.17,Et("#1b1b1b")),e.addBox(.05,.18,-.175,.11,.24,-.17,Et("#1b1b1b")),e.addBox(-.05,.09,-.175,.05,.11,-.17,Et("#a0524a")),i.hat==="cap"?(e.addBox(-.18,.31,-.18,.18,.42,.18,Et(i.hatColor)),e.addBox(-.18,.31,-.3,.18,.34,-.18,Et(i.hatColor)),e.addBox(-.175,.14,.12,.175,.31,.18,n)):i.hat==="helmet"?(e.addBox(-.19,.22,-.19,.19,.44,.19,Et("#4b5a3a"),Et("#3a4a2c")),e.addBox(-.2,.22,-.2,.2,.26,.2,Et("#2a331f"))):i.hat==="beanie"?(e.addBox(-.185,.28,-.185,.185,.42,.185,Et(i.hatColor)),e.addBox(-.04,.42,-.04,.04,.48,.04,Et("#ffffff"))):(e.addBox(-.18,.31,-.18,.18,.42,.18,n),e.addBox(-.18,.14,.12,.18,.33,.18,n),e.addBox(-.18,.28,-.18,.18,.34,-.12,n)),e.build()}function Vy(i=w0()){let e=new Pt,t=new Pt;t.position.y=.8,e.add(t);let n=new Pt;t.add(n);let s=new qe($w(i),mo);s.castShadow=!0,n.add(s);let r=new Pt;r.position.y=.62;let o=new qe(Zw(i),mo);o.castShadow=!0,r.add(o),n.add(r);let a=_=>{let S=new Pt;S.position.set(_,.55,0);let P=new qe(Kw(i),mo);P.castShadow=!0,S.add(P);let A=new Pt;A.position.y=-.3;let I=new qe(Jw(i),mo);return I.castShadow=!0,A.add(I),S.add(A),n.add(S),{upper:S,fore:A}},l=_=>{let S=new Pt;S.position.set(_,0,0);let P=new qe(jw(i),mo);P.castShadow=!0,S.add(P);let A=new Pt;A.position.y=-.42;let I=new qe(Qw(i),mo);return I.castShadow=!0,A.add(I),S.add(A),t.add(S),{thigh:S,shin:A}},c=a(-.33),h=a(.33),d=l(-.13),u=l(.13),f=new Pt;f.position.set(0,-.3,0),h.fore.add(f);let p=new Pt;f.add(p);let x=new yt;p.add(x);let m=new Pt,g=new qe(new yn(.34,.34),zy),y=g.clone();y.rotation.z=Math.PI/4;let M=new qe(new yn(.34,.34),zy);M.rotation.y=Math.PI/2,m.add(g,y,M),m.visible=!1,p.add(m);let v=new Pt;v.visible=!1,e.add(v);let b={amp:0,phase:0,lean:0,crouchK:0,slideK:0,airK:0,landDip:0,wasGrounded:!0,t:Math.random()*10,recoil:0,gunPitch:0},T={root:e,hip:t,spine:n,head:r,armL:c.upper,armR:h.upper,foreL:c.fore,foreR:h.fore,legL:d.thigh,legR:u.thigh,hand:f,gunGroup:p,muzzle:x,flash:m,glider:v,outfit:i,held:null,heldKind:null,flashT:0,swingT:0,hold(_,S=0){if(this.heldKind!==_+S){if(this.held&&(p.remove(this.held),this.held=null),this.heldKind=_?_+S:null,this.kind=_,!_){x.position.set(0,0,0);return}this.held=Vw(_,S),p.add(this.held),x.position.set(0,.05,-Hy(_)-.04),m.position.set(0,.05,-Hy(_)-.12)}},doFlash(){this.flashT=.05,b.recoil=1,m.visible=!0,m.rotation.z=Math.random()*3;let _=.7+Math.random()*.7;m.scale.set(_,_,_)},muzzleWorld(_){return e.updateWorldMatrix(!0,!0),x.getWorldPosition(_),_},animate(_,S){let P=1-Math.exp(-18*_),A=1-Math.exp(-9*_);b.t+=_,this.flashT>0&&(this.flashT-=_,this.flashT<=0&&(m.visible=!1)),b.recoil=Math.max(0,b.recoil-_*9);let I=this.kind,U=I&&I!=="pickaxe",k=I==="pickaxe",L=S.grounded!==!1,B=S.slide?0:S.speed||0,z=(S.vfwd!==void 0?S.vfwd:B)<-.25*B?-1:1,ie=!!S.run&&B>6.5,X=S.pitch||0;L&&!b.wasGrounded&&(b.landDip=Math.min(1,.35+Math.abs(S.vyPrev||0)*.04)),b.wasGrounded=L,b.landDip=Math.max(0,b.landDip-_*5),b.crouchK=rt(b.crouchK,S.crouch?1:0,P),b.slideK=rt(b.slideK,S.slide?1:0,1-Math.exp(-16*_)),b.airK=rt(b.airK,L?0:1,1-Math.exp(-14*_));let J=Math.min(1,B/4.5);b.amp=rt(b.amp,L?J:0,A);let se=2.6+B*(ie?1.05:1.25);b.phase+=_*se*(B>.3?1:0);let Ce=b.phase,Ie=Math.sin(Ce),Z=Math.cos(Ce),he=b.amp*(1-b.crouchK*.45)*(1-b.airK),Pe=(ie?.95:.62)*he*z,He=(ie?1.45:1)*he,me=Ie*Pe,Fe=-Ie*Pe,Mt=-(Math.max(0,Z)*He+.04),Be=-(Math.max(0,-Z)*He+.04);if(me+=b.crouchK*.95,Fe+=b.crouchK*.85,Mt-=b.crouchK*1.55,Be-=b.crouchK*1.45,b.airK>.01){let nt=(S.vy||0)>.5;me=rt(me,nt?.7:.35,b.airK),Mt=rt(Mt,nt?-1.2:-.5,b.airK),Fe=rt(Fe,nt?-.15:-.3,b.airK),Be=rt(Be,nt?-.6:-.2,b.airK)}me+=b.landDip*.7,Fe+=b.landDip*.7,Mt-=b.landDip*1.2,Be-=b.landDip*1.2,b.slideK>.01&&(me=rt(me,1.35,b.slideK),Mt=rt(Mt,-.12,b.slideK),Fe=rt(Fe,.55,b.slideK),Be=rt(Be,-1.55,b.slideK));let it=.8-b.crouchK*.3-b.landDip*.18-b.slideK*.34;it+=-Math.abs(Ie)*.045*he*(ie?1.5:1)+Math.sin(b.t*1.7)*.006*(1-he);let st=-(.03+B*.012*z)*he-b.crouchK*.26-b.landDip*.2;ie&&(st-=.12),st=rt(st,.95,b.slideK);let ne=Ie*.14*he*(U?.4:1),pe=Ie*.035*he,oe,Te=0,ue,Ge,Ue=0,Ke,et=X,pt=Ie*.75*he*z;if(U){let nt=S.reloading?1:0,ae=b.recoil*.14;S.aim?(Ge=1.22+X*.55+ae,Ke=.4,oe=1.2+X*.55,Te=.5,ue=.62,et=X):ie?(Ge=.55+pt*.1,Ke=1.25,oe=.75,Te=.5,ue=1.3,et=-.45):(Ge=.85+X*.35+ae,Ke=.85,oe=.95+X*.35,Te=.55,ue=.95,et=X*.7-.05),nt&&(et-=.5,ue=1.9,oe=.6,Te=.6,Ge-=.15)}else if(k){if(oe=-pt,ue=.2+Math.max(0,-Ie)*.5*he,Ge=.45+pt*.45,Ke=.9+Math.max(0,Ie)*.2*he,et=.9+X*.2,S.swing>=0){let nt=S.swing;if(nt<.34){let ae=po(nt/.34);Ge=rt(.6,2.95,ae),Ke=rt(.9,1.5,ae),oe=rt(oe,1.2,ae)}else if(nt<.55){let ae=po((nt-.34)/.21);Ge=rt(2.95,.55,ae),Ke=rt(1.5,.25,ae),oe=1}else{let ae=po((nt-.55)/.45);Ge=rt(.55,.6,ae),Ke=rt(.25,.9,ae),oe=rt(1,oe,ae)}et=nt<.34?rt(.9,1.5,po(nt/.34)):rt(1.5,.6,po(Math.min(1,(nt-.34)/.3)))}}else oe=-pt,Ge=pt,ue=.25+Math.max(0,-Ie)*.55*he,Ke=.25+Math.max(0,Ie)*.55*he;S.swing>=0;let O=ne;S.swing>=0&&k&&(O+=S.swing<.34?rt(0,-.35,po(S.swing/.34)):rt(-.35,.3,po(Math.min(1,(S.swing-.34)/.25)))),b.airK>.5&&!U&&(oe=.4,Ge=.4,Te=-.5,Ue=.5),b.slideK>.3&&!U&&(oe=.9,Ge=.9,ue=.5,Ke=.5),Ue=k||U?-.12:-.1,U||(Te=.1),t.position.y=rt(t.position.y,it,P),n.rotation.x=rt(n.rotation.x,st,P),n.rotation.y=rt(n.rotation.y,O,P),n.rotation.z=rt(n.rotation.z,pe,P),d.thigh.rotation.x=rt(d.thigh.rotation.x,me,P),u.thigh.rotation.x=rt(u.thigh.rotation.x,Fe,P),d.shin.rotation.x=rt(d.shin.rotation.x,Mt,P),u.shin.rotation.x=rt(u.shin.rotation.x,Be,P),c.upper.rotation.x=rt(c.upper.rotation.x,oe,P),c.upper.rotation.z=rt(c.upper.rotation.z,Te,P),c.fore.rotation.x=rt(c.fore.rotation.x,ue,P),h.upper.rotation.x=rt(h.upper.rotation.x,Ge,P),h.upper.rotation.z=rt(h.upper.rotation.z,Ue,P),h.fore.rotation.x=rt(h.fore.rotation.x,Ke,P);let Vt=Ss(X,-.8,.8)*.85-n.rotation.x-t.rotation.x*0;r.rotation.x=rt(r.rotation.x,Vt,P),r.rotation.y=rt(r.rotation.y,-n.rotation.y*.8,P),b.gunPitch=rt(b.gunPitch,et,P);let ct=t.rotation.x+n.rotation.x+h.upper.rotation.x+h.fore.rotation.x;p.rotation.x=k?-.45+(b.gunPitch-.9)*.6:b.gunPitch-ct,p.rotation.y=0,v.visible=!1}};return T.hold("pickaxe",0),T}var mo,zy,Et,E0,Gy,Ww,Xw,qw,Yw,Kw,Jw,jw,Qw,po,rt,Wy=Ot(()=>{si();Ga();mi();mo=new Cn({vertexColors:!0}),zy=new Ft({color:"#ffe7a3",transparent:!0,opacity:.95,depthWrite:!1,blending:ba,side:Gt}),Et=i=>new fe(i),E0={};Gy=["#e84a5f","#2a9d8f","#e9c46a","#6a4c93","#1982c4","#ff924c","#8ac926","#f72585","#4cc9f0","#ef476f"],Ww=["#264653","#3d405b","#5c4033","#2b2d42","#1b4332","#41337a","#4a4e69"],Xw=["#2b1b10","#5a3a1a","#c9a227","#161616","#7a2a1a","#cfcfcf","#2d6cdf","#d6409f"],qw=["#f2c9a0","#e0ac80","#c68642","#8d5524","#ffdbac"],Yw=[null,"cap","helmet","beanie",null];Kw=i=>{let e=new oi;return e.addBox(-.075,-.3,-.085,.075,.06,.085,Et(i.shirt)),e.build()},Jw=i=>{let e=new oi;return e.addBox(-.065,-.3,-.075,.065,0,.075,Et(i.skin)),e.addBox(-.07,-.34,-.08,.07,-.28,.08,Et(i.skin).multiplyScalar(.92)),e.build()},jw=i=>{let e=new oi;return e.addBox(-.1,-.42,-.11,.1,0,.11,Et(i.pants)),e.build()},Qw=i=>{let e=new oi;return e.addBox(-.095,-.3,-.1,.095,0,.1,Et(i.pants)),e.addBox(-.105,-.38,-.15,.105,-.3,.11,Et("#2a2a30")),e.build()},po=i=>i*i*(3-2*i),rt=(i,e,t)=>i+(e-i)*t});function Ph({name:i,isPlayer:e=!1}){let t={id:++eA,name:i,isPlayer:e,x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,pitch:0,radius:.4,height:1.8,hp:100,shield:0,alive:!0,grounded:!1,inWater:!1,mode:"bus",kills:0,crouch:!1,weapon:null,model:Vy(w0()),lastHurtBy:null};return t.model.root.visible=!1,t}var eA,A0=Ot(()=>{Wy();ri();eA=0});var Ih,Xy=Ot(()=>{mi();Ih=class{constructor(){this.slots=[{kind:"pickaxe"},null,null,null,null,null],this.sel=0,this.ammo={light:0,medium:0,shells:0,heavy:0,rockets:0},this.mats={wood:100,stone:0,metal:0}}current(){return this.slots[this.sel]}addAmmo(e,t){let n=ly[e].max,s=this.ammo[e];return this.ammo[e]=Math.min(n,s+t),this.ammo[e]-s}addMats(e,t){let n=this.mats[e];return this.mats[e]=Math.min(999,n+t),this.mats[e]-n}_emptySlot(){for(let e=1;e<6;e++)if(!this.slots[e])return e;return-1}_replaceSlot(){return this.sel>=1?this.sel:1}pickup(e){if(e.kind==="weapon"){let t=this._emptySlot(),n=null;if(t<0){t=this._replaceSlot();let s=this.slots[t];n=s.kind==="weapon"?{kind:"weapon",wkey:s.wkey,rarity:s.rarity,mag:s.mag}:{kind:"cons",ckey:s.ckey,count:s.count}}return this.slots[t]={kind:"weapon",wkey:e.wkey,rarity:e.rarity,mag:e.mag},this.sel=t,{ok:!0,dropped:n,slot:t}}if(e.kind==="cons"){let t=Qs[e.ckey];for(let r=1;r<6;r++){let o=this.slots[r];if(o&&o.kind==="cons"&&o.ckey===e.ckey){if(o.count>=t.max)return{ok:!1};let a=Math.min(t.max-o.count,e.count);return o.count+=a,{ok:!0,dropped:a<e.count?{...e,count:e.count-a}:null,slot:r}}}let n=this._emptySlot(),s=null;if(n<0){n=this._replaceSlot();let r=this.slots[n];s=r.kind==="weapon"?{kind:"weapon",wkey:r.wkey,rarity:r.rarity,mag:r.mag}:{kind:"cons",ckey:r.ckey,count:r.count}}return this.slots[n]={kind:"cons",ckey:e.ckey,count:Math.min(t.max,e.count)},{ok:!0,dropped:s,slot:n}}return{ok:!1}}removeSlot(e){this.slots[e]=null,this.sel===e&&(this.sel=0)}reloadAmount(e){let t=Jt[e.wkey],n=t.mag-e.mag;return Math.min(n,this.ammo[t.ammo])}}});function qy(i){let e=-Math.sin(i),t=-Math.cos(i);return Math.abs(e)>Math.abs(t)?e>0?0:2:t>0?1:3}function cr(i,e,t,n){let s=h0(i,e,t),r=s?s.y:Di((i+.5)*4,(e+.5)*4,t+.7,.1),o=n==="floor"?Math.floor((t-r+.12)/3):Math.round((t-r)/3);return r+Math.max(-1,o)*3}function Yy(i,e,t,n,s,r){let o=i.grounded?i.y:Di(i.x,i.z,i.y+.7),a=Math.floor(i.x/4),l=Math.floor(i.z/4),c,h,d,u=null,f=!1,p=!1,x=!1,m=es(e.x,e.y,e.z,t.x,t.y,t.z,18);if(m)if(x=!0,c=e.x+t.x*m.t,h=e.y+t.y*m.t,d=e.z+t.z*m.t,m.kind==="terrain")p=!0;else{let L=m.c&&m.c.owner;Es(L)&&(u=L),m.kind==="box"&&m.c&&Math.abs(h-m.c.y1)<.07&&(f=!0)}else if(t.y<-.02){let L=(o-e.y)/t.y,B=L>0&&L<26?L:10;c=e.x+t.x*B,h=e.y+t.y*B,d=e.z+t.z*B,L>0&&L<26&&(p=!0)}else c=e.x+t.x*10,h=e.y+t.y*10,d=e.z+t.z*10;let g=c-t.x*.12,y=h-t.y*.12,M=d-t.z*.12,v;p?v=o:u&&f?v=m.c.y1:u&&(u.type==="ramp"||u.type==="roof")?v=u.y:v=x?y:Math.max(y,o),v=R0(v,o-3,o+6+.5);let b=R0(Math.floor(g/4),a-3,a+3),T=R0(Math.floor(M/4),l-3,l+3),_=g-b*4,S=M-T*4;if(s==="wall"){let L=cr(b,T,v,"floor"),B=[{d:_,axis:"z",i:b,j:T},{d:4-_,axis:"z",i:b+1,j:T},{d:S,axis:"x",i:b,j:T},{d:4-S,axis:"x",i:b,j:T+1}].sort((z,ie)=>z.d-ie.d),V=B[0];for(let z of B)if(!sr({type:"wall",axis:z.axis,i:z.i,j:z.j,y:L})){V=z;break}return{type:"wall",axis:V.axis,i:V.i,j:V.j,y:L,mat:r}}if(s==="floor"||s==="roof"){let L=b,B=T,V=(ie,X,J)=>sr({type:s,i:ie,j:X,y:J}),z=cr(L,B,v,"round");if(V(L,B,z)){let ie=[[_,-1,0],[4-_,1,0],[S,0,-1],[4-S,0,1]].sort((X,J)=>X[0]-J[0]);for(let[,X,J]of ie){let se=L+X,Ce=B+J,Ie=cr(se,Ce,z,"round");if(!V(se,Ce,Ie)){L=se,B=Ce,z=Ie;break}}}return{type:s,i:L,j:B,y:z,mat:r}}let P=qy(n),A=b,I=T,U=cr(A,I,v,"round"),k=(L,B,V)=>sr({type:"ramp",i:L,j:B,y:V,dir:P});if(k(A,I,U)){let L=A+C0[P],B=I+P0[P],V=U+3;k(L,B,V)||(A=L,I=B,U=V)}return{type:"ramp",i:A,j:I,dir:P,y:U,mat:r}}function $y(i,e,t,n,s,r={}){let o=Math.floor(i.x/4),a=Math.floor(i.z/4),l=r.dir!==void 0?r.dir:qy(e),c=i.grounded?i.y:Di(i.x,i.z,i.y+.7),h;if(n==="wall"){let d,u,f;l===0?(f="z",d=o+1,u=a):l===2?(f="z",d=o,u=a):l===1?(f="x",d=o,u=a+1):(f="x",d=o,u=a),h={type:"wall",axis:f,i:d,j:u,y:cr(o,a,c+(t>.75?3:0),"round"),variant:"solid"}}else if(n==="floor")if(r.ceiling)h={type:"floor",i:o,j:a,y:cr(o,a,c+3,"round")};else{let d=o+C0[l],u=a+P0[l];h={type:"floor",i:d,j:u,y:cr(d,u,c,"round")}}else{let d=o+C0[l],u=a+P0[l];h={type:"ramp",i:d,j:u,dir:l,y:cr(d,u,c,"round")}}return h.mat=s,h}function Pf(i,e="player"){return sr(i)?null:a0({...i,owner:e,skirt:i.type==="roof"||i.type==="ramp"?0:u0(i.i,i.j,i.y)})}var C0,P0,R0,I0=Ot(()=>{mi();Ts();or();C0=[1,0,-1,0],P0=[0,1,0,-1];R0=(i,e,t)=>i<e?e:i>t?t:i});function Zy(i,e){window.addEventListener("keydown",t=>{if(Dt.capture){t.preventDefault(),t.stopImmediatePropagation();let n=Dt.capture;Dt.capture=null,n(t.code);return}Dt.locked&&(tA.has(t.code)||t.code.startsWith("Digit")||t.code.startsWith("Key")||t.ctrlKey)&&t.preventDefault(),t.repeat||(is[t.code]=!0),yi[t.code]=!0},!0),window.addEventListener("keyup",t=>{yi[t.code]=!1}),window.addEventListener("blur",()=>{for(let t in yi)yi[t]=!1;dt.l=dt.r=!1}),window.addEventListener("mousemove",t=>{Dt.locked&&(dt.dx+=t.movementX||0,dt.dy+=t.movementY||0)}),window.addEventListener("mousedown",t=>{let n=t.button===1||t.button===3||t.button===4;if(Dt.capture&&n){t.preventDefault(),t.stopImmediatePropagation();let s=Dt.capture;Dt.capture=null,s("Mouse"+t.button);return}Dt.locked&&(t.preventDefault(),t.button===0?(dt.l=!0,dt.lp=!0):t.button===2?(dt.r=!0,dt.rp=!0):n&&(yi["Mouse"+t.button]=!0,is["Mouse"+t.button]=!0))}),window.addEventListener("mouseup",t=>{t.button===0?dt.l=!1:t.button===2?dt.r=!1:(t.button===1||t.button===3||t.button===4)&&(yi["Mouse"+t.button]=!1,Dt.locked&&t.preventDefault())}),window.addEventListener("auxclick",t=>{Dt.locked&&t.preventDefault()}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("wheel",t=>{let n=Math.sign(t.deltaY);if(Dt.capture){t.preventDefault();let s=Dt.capture;Dt.capture=null,s(n<0?"WheelUp":"WheelDown");return}!Dt.locked||!n||(dt.wheel+=n,is.Wheel=!0,is[n<0?"WheelUp":"WheelDown"]=!0)},{passive:!1}),document.addEventListener("pointerlockchange",()=>{if(Dt.locked=document.pointerLockElement===i,!Dt.locked){dt.l=dt.r=!1;for(let t in yi)yi[t]=!1}e(Dt.locked)})}function If(i){try{let e=i.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}function L0(){for(let i in is)is[i]=!1;dt.dx=0,dt.dy=0,dt.lp=!1,dt.rp=!1,dt.wheel=0}var yi,is,dt,Dt,tA,Xa=Ot(()=>{yi={},is={},dt={dx:0,dy:0,l:!1,r:!1,lp:!1,rp:!1,wheel:0},Dt={locked:!1,capture:null},tA=new Set(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","F1","F3","F5"])});function Jy(){let i={};try{i=JSON.parse(localStorage.getItem(Ky)||"{}")}catch{i={}}i.editReset==="KeyH"&&delete i.editReset;for(let e of qa)Lt[e.id]=e.id in i?i[e.id]:e.def}function jy(){let i={};for(let e of qa)Lt[e.id]!==e.def&&(i[e.id]=Lt[e.id]);try{localStorage.setItem(Ky,JSON.stringify(i))}catch{}}function Lf(i,e){let t=null;for(let n of qa)n.id!==i&&Lt[n.id]===e&&(Lt[n.id]="",t=n.label);return Lt[i]=e,jy(),t}function Qy(){for(let i of qa)Lt[i.id]=i.def;jy()}function hn(i){return i?i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?"NUM "+i.slice(6):{Space:"ESPA\xC7O",ShiftLeft:"SHIFT",ShiftRight:"SHIFT DIR",ControlLeft:"CTRL",ControlRight:"CTRL DIR",AltLeft:"ALT",AltRight:"ALT GR",Tab:"TAB",CapsLock:"CAPS",Backspace:"BACKSPACE",Enter:"ENTER",Escape:"ESC",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Backquote:"`",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Wheel:"SCROLL \u2195",WheelUp:"SCROLL \u2191",WheelDown:"SCROLL \u2193",Mouse1:"MOUSE MEIO",Mouse3:"MOUSE 4",Mouse4:"MOUSE 5",Delete:"DEL",Insert:"INS",Home:"HOME",End:"END",PageUp:"PGUP",PageDown:"PGDN"}[i]||i.toUpperCase():"\u2014"}var qa,Lt,Ky,Oi,on,Ya=Ot(()=>{Xa();qa=[{id:"forward",label:"Andar para frente",group:"Movimento",def:"KeyW"},{id:"back",label:"Andar para tr\xE1s",group:"Movimento",def:"KeyS"},{id:"left",label:"Esquerda",group:"Movimento",def:"KeyA"},{id:"right",label:"Direita",group:"Movimento",def:"KeyD"},{id:"jump",label:"Pular",group:"Movimento",def:"Space"},{id:"slide",label:"Deslizar (correndo)",group:"Movimento",def:"ShiftLeft"},{id:"crouch",label:"Agachar",group:"Movimento",def:"KeyF"},{id:"sprint",label:"Correr (se a corrida autom\xE1tica estiver desligada)",group:"Movimento",def:"KeyE"},{id:"reload",label:"Recarregar",group:"Combate",def:"KeyR"},{id:"slot1",label:"Picareta (item 1)",group:"Combate",def:"Digit1"},{id:"slot2",label:"Item 2",group:"Combate",def:"Digit2"},{id:"slot3",label:"Item 3",group:"Combate",def:"Digit3"},{id:"slot4",label:"Item 4",group:"Combate",def:"Digit4"},{id:"slot5",label:"Item 5",group:"Combate",def:"Digit5"},{id:"slot6",label:"Item 6",group:"Combate",def:"Digit6"},{id:"buildToggle",label:"Modo constru\xE7\xE3o (liga/desliga)",group:"Constru\xE7\xE3o",def:"KeyQ"},{id:"wall",label:"Parede",group:"Constru\xE7\xE3o",def:"KeyZ"},{id:"floor",label:"Piso",group:"Constru\xE7\xE3o",def:"KeyX"},{id:"stairs",label:"Escada",group:"Constru\xE7\xE3o",def:"KeyC"},{id:"roof",label:"Cone (telhado)",group:"Constru\xE7\xE3o",def:"KeyV"},{id:"material",label:"Trocar material",group:"Constru\xE7\xE3o",def:"KeyT"},{id:"edit",label:"Editar constru\xE7\xE3o",group:"Edi\xE7\xE3o",def:"KeyG"},{id:"editReset",label:"Redefinir edi\xE7\xE3o (desfaz as partes tiradas)",group:"Edi\xE7\xE3o",def:"Wheel",quick:[{label:"SCROLL \u2195",code:"Wheel"}]},{id:"clearAll",label:"Limpar constru\xE7\xF5es (Freebuild)",group:"Modo livre",def:"KeyY"},{id:"dummy",label:"Boneco de treino (Freebuild)",group:"Modo livre",def:"KeyB"}],Lt={},Ky="fortbuild_binds";Oi=i=>!!Lt[i]&&!!yi[Lt[i]],on=i=>!!Lt[i]&&!!is[Lt[i]]});function ur(){return Ve.active}function nA(i,e,t,n){let s=new $e;return s.setAttribute("position",new Ae([...i,...e,...t,...n],3)),s.setIndex([0,1,2,0,2,3]),s}function Df(i,e,t,n){let s=i.uvRect(e,e,t,t);return[s[0],i.y+.75*e+n,s[1]]}function iA(){ev(),go=new Pt;let i=Ve.piece,[e,t]=ho[i.type];Ve.nc=e,Ve.nr=t;let n=q.camera.position;Lh=[];let s=4/e,r=4/t,o=.06;for(let a=0;a<t;a++)for(let l=0;l<e;l++){let c;if(i.type==="wall"){let h=3/t,d=new yn(s-.1,h-.1);if(c=new qe(d,xo.on),i.axis==="x"){let u=i.j*4,f=Math.sign(n.z-u)||1;c.position.set(i.i*4+(l+.5)*s,i.y+(a+.5)*h,u+f*.07)}else{let u=i.i*4,f=Math.sign(n.x-u)||1;c.rotation.y=Math.PI/2,c.position.set(u+f*.07,i.y+(a+.5)*h,i.j*4+(l+.5)*s)}}else if(i.type==="floor")c=new qe(new yn(s-.1,r-.1),xo.on),c.rotation.x=-Math.PI/2,c.position.set(i.i*4+(l+.5)*s,i.y+.07,i.j*4+(a+.5)*r);else if(i.type==="roof")c=new qe(new yn(s-.1,r-.1),xo.on),c.rotation.x=-Math.PI/2,c.position.set(i.i*4+(l+.5)*s,i.y+Qi*.62,i.j*4+(a+.5)*r);else{let h=a*r+o,d=(a+1)*r-o,u=l*s+o,f=(l+1)*s-o;c=new qe(nA(Df(i,h,u,.12),Df(i,d,u,.12),Df(i,d,f,.12),Df(i,h,f,.12)),xo.on)}c.renderOrder=9,c.frustumCulled=!1,go.add(c),Lh.push(c)}q.scene.add(go)}function ev(){go&&(q.scene.remove(go),go.children.forEach(i=>{i.geometry&&i.geometry.dispose()}),go=null,Lh=[])}function tv(){let i=q.camera;i.getWorldDirection($t);let e=es(i.position.x,i.position.y,i.position.z,$t.x,$t.y,$t.z,18),t=e&&e.c&&e.c.owner;return!Es(t)||t.owner!=="player"?(jn("toast","Mire em uma constru\xE7\xE3o sua para editar"),!1):(Ve.active=!0,Ve.piece=t,Ve.mask=t.mask.slice(),Ve.hover=-1,Ve.paint=null,Ve.skip=!0,Ve.dirty=!1,Ve.wasDown=!1,iA(),vt.empty(),!0)}function hr(i){Ve.active&&(i&&(Ve.mask.some(Boolean)?Ve.mask.some((e,t)=>e!==Ve.piece.mask[t])&&(l0(Ve.piece,Ve.mask),vt.build()):jn("toast","Deixe ao menos uma parte")),Ve.active=!1,Ve.piece=null,Ve.paint=null,Ve.dirty=!1,ev())}function sA(){let i=Ve.piece,e=q.camera,t=e.position;e.getWorldDirection($t);let{nc:n,nr:s}=Ve,r,o,a;if(i.type==="wall"){let l=3/s,c,h;if(i.axis==="x"){if(Math.abs($t.z)<1e-5||(r=(i.j*4-t.z)/$t.z,r<0||r>40))return-1;c=t.x+$t.x*r-i.i*4,h=t.y+$t.y*r-i.y}else{if(Math.abs($t.x)<1e-5||(r=(i.i*4-t.x)/$t.x,r<0||r>40))return-1;c=t.z+$t.z*r-i.j*4,h=t.y+$t.y*r-i.y}o=Math.floor(c/(4/n)),a=Math.floor(h/l)}else if(i.type==="floor"||i.type==="roof"){let l=i.type==="floor"?i.y:i.y+Qi*.62;if(Math.abs($t.y)<1e-5||(r=(l-t.y)/$t.y,r<0||r>40))return-1;o=Math.floor((t.x+$t.x*r-i.i*4)/(4/n)),a=Math.floor((t.z+$t.z*r-i.j*4)/(4/s))}else{let l=i.dir===0?1:i.dir===2?-1:0,c=i.dir===1?1:i.dir===3?-1:0,h=i.dir===2?i.i*4+4:i.i*4,d=i.dir===3?i.j*4+4:i.j*4,u=$t.y-.75*(l*$t.x+c*$t.z);if(Math.abs(u)<1e-5||(r=(i.y+.75*(l*(t.x-h)+c*(t.z-d))-t.y)/u,r<0||r>40))return-1;let f=t.x+$t.x*r,p=t.z+$t.z*r,x=l*(f-h)+c*(p-d),m=i.dir===0||i.dir===2?p-i.j*4:f-i.i*4;a=Math.floor(x/(4/s)),o=Math.floor(m/(4/n))}return o<0||o>=n||a<0||a>=s?-1:a*n+o}function nv(i=.016){if(!Ve.active)return;if(Ve.piece.dead){hr(!1);return}let e=q.settings.editConfirm||"auto";if(Ve.skip){Ve.skip=!1;return}if(dt.rp){hr(!1);return}if(e==="press"&&on("edit")){hr(!0);return}if(e==="auto"&&on("edit")){hr(!0);return}if(e==="release"&&!Oi("edit")){hr(!0);return}on("editReset")&&(Ve.mask=gf(Ve.piece.type),Ve.dirty=!1,Ve.paint=null,Ve.autoT=0,vt.empty());let t=sA();t>=0&&(dt.lp?(Ve.paint=!Ve.mask[t],Ve.mask[t]=Ve.paint,Ve.dirty=!0,vt.ammo()):dt.l&&Ve.paint!==null&&Ve.mask[t]!==Ve.paint&&(Ve.mask[t]=Ve.paint,Ve.dirty=!0,vt.ammo())),dt.l||(Ve.paint=null),Ve.hover=t;for(let n=0;n<Lh.length;n++)Lh[n].material=n===t?xo.hover:Ve.mask[n]?xo.on:xo.off;if(e==="auto"&&(dt.l?Ve.autoT=0:Ve.wasDown&&Ve.dirty&&(Ve.autoT=.3),Ve.autoT>0&&(Ve.autoT-=i,Ve.autoT<=0))){hr(!0);return}Ve.wasDown=dt.l}var Ve,go,Lh,$t,xo,D0=Ot(()=>{si();mi();ri();Ts();or();Xa();Ya();fo();lr();Ve={active:!1,piece:null,mask:[],hover:-1,paint:null,skip:!1,dirty:!1,wasDown:!1,nc:3,nr:3},go=null,Lh=[],$t=new R,xo={on:new Ft({color:"#3da5ff",transparent:!0,opacity:.38,side:Gt,depthTest:!1,depthWrite:!1}),off:new Ft({color:"#ff4d5a",transparent:!0,opacity:.55,side:Gt,depthTest:!1,depthWrite:!1}),hover:new Ft({color:"#ffffff",transparent:!0,opacity:.6,side:Gt,depthTest:!1,depthWrite:!1})}});function B0(i){let e=new Ih,t=s=>({kind:"weapon",wkey:s,rarity:3,mag:Jt[s].mag});i==="freebuild"?e.slots=[{kind:"pickaxe"},t("ar"),t("shotgun"),t("sniper"),t("smg"),t("rocket")]:e.slots=[{kind:"pickaxe"},t("ar"),t("shotgun"),t("smg"),t("sniper"),{kind:"cons",ckey:"shield_big",count:3}];for(let s in e.ammo)e.ammo[s]=999;let n=i==="freebuild"?9999:999;e.mats={wood:n,stone:n,metal:n},e.sel=i==="freebuild"?0:1,ft.inv=e}function k0(i,e,t){let n=ft;n.x=i,n.y=0,n.z=e,n.vx=n.vy=n.vz=0,n.alive=!0,n.mode="ground",n.grounded=!0,n.hp=100,n.shield=q.mode==="duel"?100:0,n.crouch=!1,n.height=1.8,n.kills=0,n.god=q.mode==="freebuild",n.model.root.visible=!0,n.model.root.rotation.set(0,t,0),n.model.root.scale.set(1,1,1),D.camYaw=t,D.camPitch=0,D.reloadT=0,D.useT=0,D.swingT=-1,D.aiming=!1,D.aimK=0,D.scoped=!1,D.fireCd=0,D.switchT=0,D.bloom=0,D.recoil=0,D.camDist=3.8,D.sliding=!1,D.sprinting=!1,hr(!1),ws(!1);for(let s of ft.inv.slots)s&&s.kind==="weapon"&&(s.mag=Jt[s.wkey].mag)}function oA(i,e,t){let n=Math.cos(e);return t.set(-Math.sin(i)*n,Math.sin(e),-Math.cos(i)*n)}function Nf(){return ft.inv.slots[ft.inv.sel]}function Uf(){let i=Nf();return i&&i.kind==="weapon"?i:null}function iv(i){let e=ft,t=q.camera,n=Uf(),s=n?Jt[n.wkey]:null,r=D.camYaw,o=D.camPitch,a=q.settings.fov||80;if(D.scoped=!1,e.mode==="dead"){let U=q.time*.35;t.position.set(e.x+Math.sin(U)*7,e.y+4,e.z+Math.cos(U)*7),t.lookAt(e.x,e.y+.6,e.z),q.shadowFocus={x:e.x,y:e.y,z:e.z};return}D.aimK=er(D.aimK,D.aiming?1:0,Math.min(1,i*12));let l=D.sliding?.95:e.crouch?1.2:1.55,c=e.x,h=e.y+l,d=e.z;oA(r,o,zn);let u=Math.cos(r),f=-Math.sin(r),p=q.settings.camDist||2.9,x=D.buildMode||ur()?p+1:er(p,p*.82,D.aimK),m=er(.68,.85,D.aimK),g=c+u*m,y=h,M=d+f*m,v=-zn.x*x,b=-zn.y*x+.2,T=-zn.z*x,_=Math.hypot(v,b,T);v/=_,b/=_,T/=_;let S=_,P=es(g,y,M,v,b,T,_);P&&(S=Math.max(.5,P.t-.3)),D.camDist=S<D.camDist?S:er(D.camDist,S,Math.min(1,i*5));let A=Math.min(D.camDist,_);if(dr.set(g+v*A,y+b*A,M+T*A),dr.y<.25&&(dr.y=.25),s&&s.scope&&D.aimK>.9&&D.aiming&&(D.scoped=!0,dr.set(c+zn.x*.25,h+zn.y*.25,d+zn.z*.25)),q.shake>0){let U=q.shake*.25;dr.x+=(Math.random()-.5)*U,dr.y+=(Math.random()-.5)*U,dr.z+=(Math.random()-.5)*U,q.shake=Math.max(0,q.shake-i*2.2)}t.position.copy(dr),t.rotation.set(o,r,0,"YXZ");let I=a;s&&D.aimK>.01&&(I=er(a,a*s.zoom,D.aimK)),D.sprinting&&Math.hypot(e.vx,e.vz)>7&&(I+=4),D.sliding&&(I+=6),s&&s.scope&&D.aiming&&(I=er(a,24,D.aimK)),D.fov=er(D.fov,I,Math.min(1,i*10)),Math.abs(t.fov-D.fov)>.01&&(t.fov=D.fov,t.updateProjectionMatrix()),q.shadowFocus={x:e.x,y:0,z:e.z}}function aA(){if(!Dt.locked)return;let i=Uf(),e=i?Jt[i.wkey]:null,t=q.settings,n=.0022*t.sens;D.aiming&&e&&(n*=e.scope?.3*t.scopeSens:.7*t.adsSens),D.camYaw-=dt.dx*n,D.camPitch=Ss(D.camPitch+(t.invertY?1:-1)*dt.dy*n,-1.45,1.45),D.camYaw>Math.PI?D.camYaw-=Ha:D.camYaw<-Math.PI&&(D.camYaw+=Ha)}function lA(){if(!D.sliding)return;D.sliding=!1;let i=ft;i.crouch=Oi("crouch"),i.height=i.crouch?1.3:1.8}function cA(i){let e=ft;D.sliding=!0,D.slideT=0,D.airT=0;let t=i||1;D.slideX=e.vx/t,D.slideZ=e.vz/t,D.slideSpeed=Math.max(i,8.2)*1.4,e.crouch=!0,e.height=1.1,vt.slide&&vt.slide()}function hA(i,e){let t=ft,n=D.camYaw,s=-Math.sin(n),r=-Math.cos(n),o=Math.cos(n),a=-Math.sin(n),l=0,c=0;e||(Oi("forward")&&(c+=1),Oi("back")&&(c-=1),Oi("right")&&(l+=1),Oi("left")&&(l-=1));let h=l!==0||c!==0,d=Math.hypot(t.vx,t.vz);if(!D.sliding){let x=Oi("crouch")&&!e;x!==t.crouch&&(t.crouch=x,t.height=x?1.3:1.8)}let u=q.settings.autoSprint?!0:Oi("sprint");if(D.sprinting=u&&c>0&&!D.aiming&&!t.crouch&&!D.sliding&&D.sinceShot>.35&&D.useT<=0&&!e,!e&&!D.sliding&&t.grounded&&d>6.2&&(on("slide")||on("crouch")&&D.sprinting)&&cA(d),D.sliding){if(D.slideT+=i,l!==0&&t.grounded){let x=-l*.9*i,m=Math.cos(x),g=Math.sin(x),y=D.slideX*m-D.slideZ*g,M=D.slideX*g+D.slideZ*m;D.slideX=y,D.slideZ=M}if(t.grounded){D.airT=0;let x=Di(t.x+D.slideX*.8,t.z+D.slideZ*.8,t.y+.7);t.y-x>.15?D.slideSpeed=Math.min(20,D.slideSpeed+15*i):D.slideSpeed-=6.2*i,t.vx=D.slideX*D.slideSpeed,t.vz=D.slideZ*D.slideSpeed}else D.airT+=i;(D.slideSpeed<4.4||D.airT>.35||sv()&&t.grounded||on("slide")&&D.slideT>.25)&&lA()}if(!D.sliding){let x=5.6;D.sprinting&&(x=8.2),t.crouch&&(x*=.55),D.aiming&&(x*=.7),D.useT>0&&(x*=.6);let m=0,g=0;if(h){let M=Math.hypot(l,c);m=(s*c+o*l)/M*x,g=(r*c+a*l)/M*x}let y=t.grounded?13:2.5;t.vx+=(m-t.vx)*Math.min(1,y*i),t.vz+=(g-t.vz)*Math.min(1,y*i)}t.grounded||(t.vy-=26*i),!e&&sv()&&t.grounded&&(!t.crouch||D.sliding)&&(t.vy=8.7,t.grounded=!1,vt.jump()),t.yaw=n;let f=t.grounded;yh(t,i),!f&&t.grounded&&vt.land();let p=Math.hypot(t.vx,t.vz);t.grounded&&p>1&&!D.sliding&&(D.stepDist+=p*i,D.stepDist>2.3&&(D.stepDist=0,vt.step(t.crouch?.4:1))),t.speed2d=p}function N0(){let i=Uf();if(!i||D.reloadT>0)return;let e=Jt[i.wkey];i.mag>=e.mag||(D.reloadT=D.reloadTotal=e.reload,vt.reload())}function uA(){let i=Uf();i&&(i.mag=Jt[i.wkey].mag)}function dA(i){let e=ft,t=Jt[i.wkey],n=q.camera;n.getWorldDirection(zn);let s=t.spread;D.aiming&&(s*=t.scope?.02:.45),Math.hypot(e.vx,e.vz)>2&&(s*=1.35),e.crouch&&!D.sliding&&(s*=.7),e.grounded||(s*=1.5),s+=D.bloom;let r=e.model.muzzleWorld(rA);Rh(e,i.wkey,i.rarity,n.position.x,n.position.y,n.position.z,zn,s,1,r),D.bloom=Math.min(.05,D.bloom+t.spread*.18+.002);let o=t.kick*(D.aiming?.6:1)*(.8+Math.random()*.4);D.camPitch+=o,D.recoil+=o,D.camYaw+=(Math.random()-.5)*o*.8,e.model.doFlash(),vt.shot(i.wkey,1,0),q.shake=Math.max(q.shake,t.kick*6),D.sinceShot=0}function fA(){let i=ft;q.camera.getWorldDirection(zn);let t=Wa(i.x,i.y+1.5,i.z,zn.x,zn.y,zn.z,3.1,i);if(t.kind==="actor"){Ah(t.actor,20,i,t.head,"Picareta"),Ui(t.x,t.y,t.z,"flesh"),vt.pickaxe("wood");return}if(t.kind==="world"){let n=t.c&&t.c.owner;if(Es(n)){if(!q.infMats&&n.mat){let s=ft.inv.mats[n.mat];ft.inv.addMats(n.mat,10);let r=ft.inv.mats[n.mat]-s;r>0&&jn("gain",{mat:n.mat,n:r})}rr(n,q.mode==="freebuild"?160:55),Ui(t.x,t.y,t.z,"dust","#c9a070"),vt.pickaxe(n.mat==="metal"?"metal":"wood")}else Ui(t.x,t.y,t.z,"dust","#a89a70"),vt.pickaxe("wood")}}function pA(i){let e=ft,t=Qs[i.ckey];t.heal&&(e.hp=Math.min(Math.max(e.hp,t.capHp),e.hp+t.heal)),t.shield&&(e.shield=Math.min(Math.max(e.shield,t.capSh),e.shield+t.shield)),vt.heal(),i.count--,i.count<=0&&ft.inv.removeSlot(ft.inv.sel)}function rv(i){let e=ft.inv;i<0||i>5||!e.slots[i]||(D.buildMode&&ws(!1),e.sel!==i&&(e.sel=i,D.reloadT=0,D.useT=0,D.swingT=-1,D.switchT=.28,D.fireBuf=0))}function mA(i){let e=ft,t=Nf();if(D.fireCd-=i,D.switchT-=i,D.sinceShot+=i,D.bloom=Math.max(0,D.bloom-i*.05),D.sinceShot>.12&&D.recoil>0){let n=Math.min(D.recoil,D.recoil*i*5+5e-4);D.recoil-=n,D.camPitch-=n*.7}if(D.aiming=!1,!(D.buildMode||!t)){if(t.kind==="weapon"){let n=Jt[t.wkey];D.aiming=dt.r&&D.reloadT<=0&&D.switchT<=0,D.reloadT>0&&(D.reloadT-=i,D.reloadT<=0&&uA()),dt.lp&&(D.fireBuf=.2),D.fireBuf-=i,(n.auto?dt.l:D.fireBuf>0)&&D.fireCd<=0&&D.reloadT<=0&&D.switchT<=0&&(t.mag>0?(dA(t),t.mag--,D.fireCd=n.rate,D.fireBuf=0):(N0(),D.fireCd=.2)),on("reload")&&N0(),t.mag===0&&D.reloadT<=0&&D.fireCd<=0&&N0()}else if(t.kind==="pickaxe")D.swingT>=0?(D.swingT+=i/.55,!D.hitDone&&D.swingT>=.4&&(D.hitDone=!0,fA()),D.swingT>=1&&(D.swingT=-1)):dt.l&&D.switchT<=0&&(D.swingT=0,D.hitDone=!1,vt.swing());else if(t.kind==="cons"){let n=Qs[t.ckey],s=n.heal&&e.hp<n.capHp||n.shield&&e.shield<n.capSh;dt.l&&s&&D.switchT<=0?(D.useT<=0&&(D.useTotal=n.time),D.useT+=i,D.useT>=n.time&&(D.useT=0,pA(t))):D.useT=0}}}function av(){Bi||(F0=new Ft({color:"#4dff88",transparent:!0,opacity:.4,depthWrite:!1,side:Gt}),ov=new Ft({color:"#ff4d4d",transparent:!0,opacity:.4,depthWrite:!1,side:Gt}),Bi=new qe(new $e,F0),Bi.frustumCulled=!1,Bi.renderOrder=8,q.scene.add(Bi))}function ws(i){i!==D.buildMode&&(D.buildMode=i,D.swingT=-1,D.useT=0,D.aiming=!1,i?av():Bi&&(Bi.visible=!1))}function gA(i){let e=ft,t=e.inv;D.buildCd-=i,q.camera.getWorldDirection(zn);let n=Yy(e,q.camera.position,zn,D.camYaw,D.buildType,D.buildMat),s=10;D.buildValid=!sr(n)&&(q.infMats||t.mats[D.buildMat]>=s),D.buildTarget=n,av();let r=`${n.type}|${n.axis||""}|${n.i}|${n.j}|${Math.round(n.y*4)}|${n.dir??""}`;if(r!==U0&&(Bi.geometry.dispose(),Bi.geometry=d0(n),U0=r),Bi.visible=!0,Bi.material=D.buildValid?F0:ov,dt.l&&D.buildCd<=0)if(D.buildCd=.09,D.buildValid){let o=Pf(n,"player");if(o){q.infMats||(t.mats[D.buildMat]-=s),vt.build();let a=o.center();Mf(a[0],Math.max(.3,a[1]-.8),a[2],ji[D.buildMat].color,4)}}else dt.lp&&vt.empty()}function xA(){let i=ft.inv;for(let e=0;e<6;e++)on("slot"+(e+1))&&rv(e);if(dt.wheel!==0){let e=i.sel;for(let t=0;t<6;t++)if(e=(e+dt.wheel+6)%6,i.slots[e]){rv(e);break}}on("buildToggle")&&ws(!D.buildMode),on("wall")&&(D.buildType="wall",ws(!0)),on("floor")&&(D.buildType="floor",ws(!0)),on("stairs")&&(D.buildType="ramp",ws(!0)),on("roof")&&(D.buildType="roof",ws(!0)),on("material")&&(D.buildMat=D.buildMat==="wood"?"stone":D.buildMat==="stone"?"metal":"wood",U0=""),D.buildMode&&dt.rp&&ws(!1)}function _A(i){let e=ft,t=e.model;t.root.position.set(e.x,e.y,e.z),t.root.rotation.y=D.sliding?Math.atan2(-D.slideX,-D.slideZ):e.yaw;let n=Nf(),s=null,r=0;D.buildMode||ur()||n&&n.kind==="cons"?s=null:n&&n.kind==="weapon"?(s=n.wkey,r=n.rarity):s="pickaxe",t.hold(s,r);let o=Math.hypot(e.vx,e.vz),a=e.vx*-Math.sin(e.yaw)+e.vz*-Math.cos(e.yaw);t.animate(i,{speed:o,vfwd:D.sliding?o:a,grounded:e.grounded,vy:e.vy,aim:D.aiming,pitch:D.camPitch,swing:D.swingT,crouch:e.crouch&&!D.sliding,slide:D.sliding,run:D.sprinting,reloading:D.reloadT>0}),t.root.visible=!D.scoped}function lv(i){let e=ft;if(e.mode==="dead"){let r=q.time-(e.deadAt||0);e.model.root.rotation.x=-Math.PI/2*Math.min(1,r/.5),e.model.hold(null),D.sliding=!1,iv(i);return}let t=!!q.freeze;if(aA(),hA(i,t),iv(i),t)D.aiming=!1;else{on("edit")&&!ur()&&(ws(!1),tv()),ur()?(D.aiming=!1,D.swingT=-1,nv(i),D.sinceShot+=i):(xA(),mA(i),D.buildMode&&gA(i));let r=Nf();e.weapon=r&&r.kind==="weapon"?r:null}e.god&&(e.hp=100);let n=Math.hypot(e.vx,e.vz),s=D.bloom*650+(n>2?5:0)+(e.grounded?0:7);D.aiming&&(s*=.4),D.crossSpread+=(Math.min(36,s)-D.crossSpread)*Math.min(1,i*14),_A(i)}var ft,D,zn,rA,dr,sv,Bi,U0,F0,ov,Ff=Ot(()=>{si();mi();Ga();A0();Xy();Ts();or();I0();Ch();D0();Sf();lr();Xa();Ya();fo();ri();ft=Ph({name:"Voc\xEA",isPlayer:!0});ft.inv=new Ih;D={camYaw:0,camPitch:0,fireCd:0,fireBuf:0,reloadT:0,reloadTotal:0,switchT:0,bloom:0,recoil:0,sinceShot:9,swingT:-1,hitDone:!1,useT:0,useTotal:0,aiming:!1,aimK:0,scoped:!1,buildMode:!1,buildType:"wall",buildMat:"wood",buildTarget:null,buildValid:!1,stepDist:0,fov:80,camDist:3.8,buildCd:0,sprinting:!1,crossSpread:0,sliding:!1,slideT:0,slideSpeed:0,slideX:0,slideZ:0,airT:0},zn=new R,rA=new R;dr=new R;sv=()=>Oi("jump");Bi=null,U0=""});function uv(i){return{kind:"weapon",wkey:i,rarity:3,mag:Jt[i].mag}}function Of(){return Gn=Ph({name:"Bot"}),Gn.ai={},q.scene.add(Gn.model.root),q.actors.push(Gn),Gn.model.root.visible=!1,Gn.alive=!1,Gn.mode="dead",Gn}function dv(i,e,t,n="normal"){let s=Gn;s.x=i,s.y=0,s.z=e,s.vx=s.vy=s.vz=0,s.yaw=t,s.alive=!0,s.mode="ground",s.grounded=!0,s.hp=100,s.shield=100,s.crouch=!1,s.height=1.8,s.kills=0,s.god=!1,s.weapon=uv("ar"),s.model.root.visible=!0,s.model.root.rotation.set(0,t,0),s.model.hold("ar",3),s.ai={d:cv[n]||cv.normal,fireCd:0,reloadT:0,switchT:0,strafeDir:1,strafeT:0,buildCd:0,hurtT:0,lastHp:200,orders:[],boxed:!1,healT:0,heals:2,boxPieces:[],mats:999,scanT:0,visible:!1,lastSeen:-9,reactT:0,jumpT:gi(1,3),stuckT:0,lastX:i,lastZ:e,checkT:0,unstuck:0,burst:0,pause:0,wallCd:0}}function vA(i,e){let t=i.ai,n="ar";e<11?n="shotgun":e<20?n="smg":e>75&&(n="sniper"),i.weapon.wkey!==n&&(i.weapon=uv(n),i.model.hold(n,3),t.switchT=.55,t.reloadT=0)}function MA(i){return i==="shotgun"?8:i==="smg"?13:i==="sniper"?45:20}function SA(i,e){let t=q.player,n=Math.hypot(i.x-t.x,i.z-t.z),s=Math.pow(Math.max(0,1-n/160),1.4)*.9,r=q.camera.rotation.y,o=n>1?((i.x-t.x)*Math.cos(r)-(i.z-t.z)*Math.sin(r))/n:0;vt.shot(e,s,o*.8)}function bA(i){let e=i.ai;e.boxed=!0,e.healT=3.2,e.boxPieces=[];for(let t=0;t<4;t++)e.orders.push({type:"wall",dir:t,tag:t});e.orders.push({type:"floor",ceiling:!0})}function TA(i,e,t){let n=i.ai;if(n.buildCd-=e,n.buildCd>0||n.mats<10)return;let s=n.orders.shift();if(!s)return;let r=$y(i,t,0,s.type,"wood",{dir:s.dir,ceiling:s.ceiling}),o=Pf(r,"bot");if(o){n.mats-=10,n.buildCd=.12,s.tag!==void 0&&n.boxPieces.push({piece:o,dir:s.dir});let a=q.player,l=Math.hypot(i.x-a.x,i.z-a.z);l<120&&vt.build((i.x-a.x)/Math.max(1,l)*.5)}}function EA(i,e,t,n,s){let r=i.ai,o=i.weapon,a=Jt[o.wkey];if(r.reloadT>0){r.reloadT-=t,r.reloadT<=0&&(o.mag=a.mag);return}if(r.fireCd-=t,r.switchT-=t,o.mag<=0){r.reloadT=a.reload*1.1;return}if(r.reactT>0){r.reactT-=t;return}if(r.pause>0){r.pause-=t;return}if(r.fireCd>0||r.switchT>0||n>a.range*.8)return;let l=Math.atan2(-(e.x-i.x),-(e.z-i.z));if(Math.abs(mh(i.yaw,l))>.14)return;let c=i.x,h=i.y+1.55,d=i.z,u=r.d.aimErr,f=e.x+gi(-u,u),p=e.y+e.height*.62+gi(-u,u),x=e.z+gi(-u,u);hv.set(f-c,p-h,x-d).normalize();let m=a.spread*.8+r.d.spread+n*3e-4,g=i.model.muzzleWorld(yA);Rh(i,o.wkey,o.rarity,c,h,d,hv,m,r.d.dmg,g),i.model.doFlash(),o.mag--,r.fireCd=a.rate*(a.auto?1.2:1.45)+gi(0,.05),a.auto&&(r.burst++,r.burst>=(a.rate<.1?9:5)+(Math.random()*3|0)&&(r.burst=0,r.pause=gi(.25,.7))),SA(i,o.wkey)}function fv(i){let e=Gn;if(!e||!e.alive){wA(e);return}let t=e.ai,n=q.player,s=q.freeze||q.freezeAI||!n.alive,r=0,o=0,a=t.d.speed,l=!1,c=0,h=!1;if(s)t&&t.orders&&(t.orders.length=0);else{let x=n.x-e.x,m=n.z-e.z,g=Math.hypot(x,m)||1,y=Math.atan2(-x,-m),M=x/g,v=m/g,b=v,T=-M;if(t.scanT-=i,t.scanT<=0){t.scanT=.12;let I=t.visible;t.visible=vh(e.x,e.y+1.55,e.z,n.x,n.y+1,n.z),t.visible&&(t.lastSeen=q.time,I||(t.reactT=t.d.react*gi(.6,1.2)))}let _=e.hp+e.shield;_<t.lastHp-.5&&(t.hurtT=1.2),t.lastHp=_,t.hurtT-=i,t.wallCd-=i,e.yaw+=Ss(mh(e.yaw,y),-9*i,9*i),l=!0,c=Math.atan2(n.y+1-(e.y+1.5),g),vA(e,g);let S=n.y-e.y;if(t.boxed){if(t.healT-=i,t.healT<=0&&t.orders.length===0){t.boxed=!1,t.heals--,e.shield=Math.min(100,e.shield+50);let I=Math.abs(x)>Math.abs(m)?x>0?0:2:m>0?1:3;for(let U of t.boxPieces)U.dir===I&&rr(U.piece,9999);t.boxPieces=[]}}else{let I=MA(e.weapon.wkey);t.visible?(g>I*1.3?(r+=M,o+=v):g<I*.55&&(r-=M,o-=v),t.strafeT-=i,t.strafeT<=0&&(t.strafeDir=Math.random()<.5?-1:1,t.strafeT=gi(.6,1.8)),r+=b*t.strafeDir*.9,o+=T*t.strafeDir*.9,t.jumpT-=i,t.jumpT<=0&&(h=!0,t.jumpT=gi(1,3))):(r+=M,o+=v),S>2&&g<50&&e.grounded&&t.orders.length===0&&t.mats>=10&&t.d.build>.2&&(t.orders.push({type:"ramp"}),r=M,o=v),t.visible&&t.hurtT>0&&t.wallCd<=0&&Math.random()<t.d.build*i*2.5&&S<2&&(t.orders.push({type:"wall"}),t.wallCd=gi(1.2,2.5)/t.d.build),_<70&&t.hurtT>0&&t.heals>0&&t.d.build>=.6&&t.orders.length===0&&bA(e)}TA(e,i,y);let P=t.visible,A=!P&&g<42&&q.time-t.lastSeen<6&&!t.boxed;if(!t.boxed&&(P||A)&&(A&&t.reactT<=0&&(t.reactT=0),EA(e,n,i,g,P)),t.checkT-=i,t.checkT<=0&&(t.checkT=.6,(r!==0||o!==0)&&Math.hypot(e.x-t.lastX,e.z-t.lastZ)<.35&&(t.unstuck=gi(.6,1.2),t.strafeDir=Math.random()<.5?-1:1),t.lastX=e.x,t.lastZ=e.z),t.unstuck>0){t.unstuck-=i;let I=Math.hypot(r,o)||1,U=r/I,k=o/I;r=U*.3+k*t.strafeDir,o=k*.3-U*t.strafeDir,h=Math.random()<.06}}let d=Math.hypot(r,o);d>.001&&(r=r/d*a,o=o/d*a);let u=e.grounded?10:2;e.vx+=(r-e.vx)*Math.min(1,u*i),e.vz+=(o-e.vz)*Math.min(1,u*i),e.grounded||(e.vy-=26*i),h&&e.grounded&&(e.vy=8.5,e.grounded=!1),yh(e,i),e.speed2d=Math.hypot(e.vx,e.vz);let f=e.model;f.root.position.set(e.x,e.y,e.z),f.root.rotation.y=e.yaw;let p=e.vx*-Math.sin(e.yaw)+e.vz*-Math.cos(e.yaw);f.animate(i,{speed:e.speed2d,vfwd:p,grounded:e.grounded,vy:e.vy,aim:l,pitch:c,swing:-1,crouch:!1,run:e.speed2d>6.2&&!l,reloading:t.reloadT>0})}function wA(i){if(!i||!i.model)return;let e=i.model,t=q.time-(i.deadAt||0);i.mode==="dead"&&i.deadAt!==void 0&&t<.6&&(e.root.rotation.x=-Math.PI/2*Math.min(1,t/.5))}function Bf(){return Hn=Ph({name:"Boneco"}),Hn.isDummy=!0,q.scene.add(Hn.model.root),q.actors.push(Hn),Hn.model.root.visible=!1,Hn.alive=!1,Hn.mode="dead",Hn.model.hold("pickaxe",0),Hn}function z0(i,e,t){let n=Hn;n.x=i,n.z=e,n.y=Di(i,e,50,.1),n.yaw=t,n.vx=n.vy=n.vz=0,n.grounded=!0,n.alive=!0,n.mode="ground",n.hp=150,n.shield=0,n.god=!1,n.model.root.visible=!0,n.model.root.rotation.set(0,t,0),n.model.root.position.set(i,n.y,e),n.spawn={x:i,z:e,yaw:t},n.enabled=!0}function H0(){let i=Hn;i.enabled=!1,i.alive=!1,i.mode="dead",i.deadAt=void 0,i.model.root.visible=!1}function pv(i){let e=Hn;if(!(!e||!e.enabled)){if(!e.alive){let t=q.time-e.deadAt;t<.5&&(e.model.root.rotation.x=-Math.PI/2*Math.min(1,t/.4)),t>2.2&&z0(e.spawn.x,e.spawn.z,e.spawn.yaw);return}e.shield=0,e.hp<150&&(e.hp=Math.min(150,e.hp+12*i)),e.model.animate(i,{speed:0,mode:"ground",aim:!1,pitch:0,swing:-1,crouch:!1})}}var cv,Gn,Hn,yA,hv,G0=Ot(()=>{si();mi();A0();Ts();Ch();or();I0();lr();Ga();ri();cv={easy:{react:.9,spread:.05,dmg:.4,build:.3,speed:4.3,aimErr:.45},normal:{react:.5,spread:.032,dmg:.6,build:.7,speed:5,aimErr:.25},hard:{react:.28,spread:.02,dmg:.85,build:1,speed:5.6,aimErr:.12}},Gn=null,Hn=null,yA=new R,hv=new R});function gv(){for(let i of["crosshair","hitmarker","progress","progText","progBar","toasts","gain","buildHelp","shBar","shNum","hpBar","hpNum","mats","ammo","hotbar","fps","dmgFlash","dmgdir","scope","hud","score","scoreMe","scoreBot","scoreSub","hints"])ot[i]=fr(i);ns("hitmarker",({head:i,killed:e,dmg:t,x:n,y:s,z:r})=>{let o=ot.hitmarker;o.className="show"+(e?" kill":i?" head":""),clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},90),RA(n,s,r,Math.round(t),i)}),ns("playerHurt",({attacker:i})=>{if(ot.dmgFlash.classList.add("on"),setTimeout(()=>ot.dmgFlash.classList.remove("on"),90),i&&i!==ft){let e=Math.atan2(-(i.x-ft.x),-(i.z-ft.z));ot.dmgdir.style.transform=`rotate(${-mh(D.camYaw,e)}rad)`,ot.dmgdir.classList.add("on"),clearTimeout(ot.dmgdir._t),ot.dmgdir._t=setTimeout(()=>ot.dmgdir.classList.remove("on"),120)}}),ns("toast",i=>ss(i,!1,2200)),ns("gain",({mat:i,n:e})=>{let t=ot.gain;t.textContent=`+${e} ${ji[i].name}`,t.style.color=ji[i].color,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),700)})}function ss(i,e=!1,t=2200){let n=document.createElement("div");for(n.className="toast"+(e?" big":""),n.textContent=i,ot.toasts.appendChild(n);ot.toasts.children.length>4;)ot.toasts.removeChild(ot.toasts.firstChild);setTimeout(()=>n.remove(),t)}function RA(i,e,t,n,s){if(zf.set(i+(Math.random()-.5)*.5,e+.3,t).project(q.camera),zf.z>1)return;let r=document.createElement("div");r.className="dnum"+(s?" head":""),r.textContent=n,r.style.left=(zf.x*.5+.5)*innerWidth+"px",r.style.top=(-zf.y*.5+.5)*innerHeight+"px",ot.hud.appendChild(r),requestAnimationFrame(()=>{r.style.transform="translateY(-50px)",r.style.opacity="0"}),setTimeout(()=>r.remove(),850)}function CA(i,e,t){let n=`<span class="n">${i+1}</span>`;if(!e)return`<div class="slot empty">${n}</div>`;if(e.kind==="pickaxe")return`<div class="slot ${t?"sel":""}">${n}<span class="ico">\u26CF</span></div>`;if(e.kind==="weapon"){let r=lo[e.rarity].color;return`<div class="slot ${t?"sel":""}" style="border-color:${r};background:linear-gradient(180deg,rgba(10,10,40,.85),${r}55)">${n}<span style="color:${r}">${AA[e.wkey]}</span><span class="c">${e.mag}</span></div>`}let s=Qs[e.ckey];return`<div class="slot ${t?"sel":""}" style="border-color:${s.color}">${n}<span style="color:${s.color}">${s.short}</span><span class="c">${e.count}</span></div>`}function _v(i){let e=ft,t=e.inv;if(!ot.hud)return;ot.hpBar.style.width=Math.max(0,e.hp)+"%",ot.hpNum.textContent=Math.ceil(Math.max(0,e.hp)),ot.shBar.style.width=Math.max(0,e.shield)+"%",ot.shNum.textContent=Math.ceil(Math.max(0,e.shield));let n=t.slots.map(u=>u?`${u.kind}${u.wkey||u.ckey||""}${u.rarity??""}${u.mag??""}${u.count??""}`:"-").join("|")+t.sel;n!==mv&&(mv=n,ot.hotbar.innerHTML=t.slots.map((u,f)=>CA(f,u,f===t.sel)).join(""));let s=t.slots[t.sel];if(s&&s.kind==="weapon"&&!D.buildMode){let u=Jt[s.wkey];ot.ammo.innerHTML=`${s.mag} <small>/ ${t.ammo[u.ammo]>900?"\u221E":t.ammo[u.ammo]}</small>`}else ot.ammo.innerHTML="";ot.mats.innerHTML=["wood","stone","metal"].map(u=>`<div class="mat ${D.buildMat===u?"sel":""}"><i style="background:${ji[u].color}"></i>${q.infMats?"\u221E":t.mats[u]}</div>`).join("");let r=e.mode!=="dead",o="xh-pickaxe";!r||D.scoped?o="none":ur()?o="xh-edit":D.buildMode?o="xh-build":s&&s.kind==="weapon"?o="xh-"+s.wkey:s&&s.kind==="cons"&&(o="xh-cons"),ot.crosshair.className!==o&&(ot.crosshair.className=o),ot.crosshair.style.setProperty("--sp",D.crossSpread.toFixed(1)+"px"),ot.scope.classList.toggle("hidden",!D.scoped);let a=-1,l="";D.reloadT>0?(a=1-D.reloadT/D.reloadTotal,l="RECARREGANDO"):D.useT>0&&(a=D.useT/D.useTotal,l="USANDO "+(s&&s.ckey?Qs[s.ckey].name.toUpperCase():"")),ot.progress.classList.toggle("hidden",a<0),a>=0&&(ot.progText.textContent=l,ot.progBar.style.width=Math.round(a*100)+"%");let c=ot.buildHelp,h="";if(ur()&&r){let u=q.settings.editConfirm||"auto";h=`<div class="bp sel">EDITANDO</div><div class="bp"><b>CLIQUE</b>tirar / devolver parte</div>${u==="auto"?'<div class="bp"><b>SOLTAR O CLIQUE</b>aplica</div>':u==="release"?`<div class="bp"><b>SOLTAR ${hn(Lt.edit)}</b>aplica</div>`:`<div class="bp"><b>${hn(Lt.edit)}</b>confirmar</div>`}<div class="bp"><b>${hn(Lt.editReset)}</b>redefinir</div><div class="bp"><b>BOT\xC3O DIR.</b>cancelar</div>`}else D.buildMode&&r&&(h=[["wall","wall","Parede"],["floor","floor","Piso"],["stairs","ramp","Escada"],["roof","roof","Cone"]].map(([u,f,p])=>`<div class="bp ${D.buildType===f?"sel":""}"><b>${hn(Lt[u])}</b>${p}</div>`).join("")+`<div class="bp"><b>${hn(Lt.material)}</b>${ji[D.buildMat].name}</div>`);h!==c._html&&(c._html=h,c.innerHTML=h),c.classList.toggle("hidden",!h);let d=q.mode==="duel"&&q.duel;if(ot.score.classList.toggle("hidden",!d),ot.hints.classList.toggle("hidden",q.mode!=="freebuild"),q.mode==="freebuild"){let u=p=>`<i>${hn(Lt[p])}</i>`,f=`<b>FREEBUILD</b><br>${u("buildToggle")} construir &nbsp; ${u("wall")} parede &nbsp; ${u("floor")} piso &nbsp; ${u("stairs")} escada &nbsp; ${u("roof")} cone<br>${u("edit")} editar &nbsp; ${u("material")} material &nbsp; ${u("slide")} deslizar &nbsp; ${u("clearAll")} limpar &nbsp; ${u("dummy")} boneco`;f!==ot.hints._html&&(ot.hints._html=f,ot.hints.innerHTML=f)}d&&(ot.scoreMe.textContent=q.duel.score[0],ot.scoreBot.textContent=q.duel.score[1],ot.scoreSub.textContent=`Rodada ${q.duel.round} \u2022 primeiro a ${q.duel.goal} \u2022 ${xv(q.matchTime)}`),kf+=i,V0++,kf>.5&&(ot.fps.textContent=Math.round(V0/kf)+" FPS",kf=0,V0=0)}function yv(i){ot.hud.classList.toggle("hidden",!i)}function vv({victory:i,score:e,time:t}){fr("endTitle").textContent=i?"VIT\xD3RIA!":"DERROTA",fr("endTitle").className=i?"win":"lose",fr("endSub").textContent=i?"Voc\xEA venceu o duelo!":"O bot venceu desta vez. Treine mais no Freebuild!",fr("endPlace").textContent=`${e[0]} x ${e[1]}`,fr("endKills").textContent=e[0],fr("endTime").textContent=xv(t),fr("end").classList.remove("hidden")}var fr,ot,mv,kf,V0,AA,zf,xv,W0=Ot(()=>{mi();Ff();ri();fo();Ga();Ya();D0();si();fr=i=>document.getElementById(i),ot={},mv="",kf=0,V0=0,AA={pistol:"PISTOLA",smg:"SUBMET.",ar:"RIFLE",shotgun:"ESCOP.",sniper:"SNIPER",rocket:"FOGUETE"},zf=new R;xv=i=>(i=Math.max(0,Math.floor(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`)});function Mv(i,e){gt.type=i,gt.diff=e||"normal",q.mode=i,q.infMats=i==="freebuild",q.freeze=!1,q.freezeAI=!1,q.matchTime=0,q.phase="playing";let t=PA[i];Qm(t-1.5),hy(q.scene,t);for(let n of X0)q.scene.remove(n);X0=[],wh(),B0(i),Gn||Of(),Hn||Bf(),i==="freebuild"?(k0(0,0,0),H0(),Gn.alive=!1,Gn.mode="dead",Gn.model.root.visible=!1,ss("FREEBUILD \u2014 materiais e muni\xE7\xE3o infinitos",!1,4e3),ss(`${hn(Lt.wall)}/${hn(Lt.floor)}/${hn(Lt.stairs)}/${hn(Lt.roof)}: parede/piso/escada/cone  \u2022  ${hn(Lt.edit)}: editar  \u2022  ${hn(Lt.dummy)}: boneco`,!1,6500)):(gt.score=[0,0],gt.round=0,X0.push(Xm(q.scene,0,38,"#3fb6ff"),Xm(q.scene,0,-38,"#ff5470")),Sv())}function Sv(){gt.round++,wh(),B0("duel"),k0(0,38,0),dv(0,-38,Math.PI,gt.diff),q.freeze=!0,q.freezeAI=!1,gt.state="countdown",gt.timer=3.5,gt.lastCount=4,jn("roundStart",gt.round)}function IA(){if(on("clearAll")&&(wh(),ss("Constru\xE7\xF5es removidas",!1,1500)),on("dummy"))if(Hn.enabled)H0(),ss("Boneco removido",!1,1200);else{let i=D.camYaw;z0(ft.x-Math.sin(i)*14,ft.z-Math.cos(i)*14,i+Math.PI),ss(`Boneco de treino colocado (${hn(Lt.clearAll)} limpa constru\xE7\xF5es)`,!1,2200)}}function bv(i){if(gt.type==="freebuild"){IA(),pv(i);return}if(gt.state==="countdown"){gt.timer-=i;let e=Math.ceil(gt.timer);e!==gt.lastCount&&e>0&&e<=3&&(gt.lastCount=e,ss(String(e),!0,900),vt.empty()),gt.timer<=0&&(gt.state="fight",q.freeze=!1,ss("LUTE!",!0,1100),vt.chest())}else gt.state==="between"&&(gt.timer-=i,gt.timer<=0&&Sv());fv(i)}var gt,PA,X0,Tv=Ot(()=>{ri();Ff();G0();or();Ts();ka();fo();W0();lr();Ya();gt={type:"freebuild",score:[0,0],goal:5,state:"idle",timer:0,round:0,diff:"normal",lastCount:0};q.duel=gt;PA={freebuild:280,duel:75},X0=[];ns("kill",({victim:i,attacker:e})=>{if(gt.type!=="duel"||gt.state!=="fight")return;let t=i===ft?1:0;gt.score[i===ft?1:0]++,gt.state="between",gt.timer=2.6,q.freezeAI=!0,ss(i===ft?"Voc\xEA foi eliminado":"Voc\xEA eliminou o bot!",!0,2e3),(gt.score[0]>=gt.goal||gt.score[1]>=gt.goal)&&(gt.state="over",q.phase="over",jn("duelOver",{win:gt.score[0]>=gt.goal,score:[...gt.score]}))})});function wv(){let i={};try{i=JSON.parse(localStorage.getItem(Ev)||"{}")}catch{i={}}Object.assign(q.settings,LA,i),Jy()}function Ka(){try{localStorage.setItem(Ev,JSON.stringify(q.settings))}catch{}}function Za(i,e,t,n,s,r,o=""){let a=document.createElement("div");a.className="srow",a.innerHTML=`<div class="sl"><span>${e}</span>${o?`<small>${o}</small>`:""}</div><input type="range" min="${n}" max="${s}" step="${r}"><input type="number" min="${n}" max="${s}" step="${r}">`;let[l,c]=a.querySelectorAll("input"),h=(d,u)=>{d=Math.min(s,Math.max(n,parseFloat(d))),!Number.isNaN(d)&&(q.settings[t]=d,l.value=d,u||(c.value=(Math.round(d*100)/100).toString()),Ka(),t==="volume"&&Ny(d))};l.value=q.settings[t],c.value=(Math.round(q.settings[t]*100)/100).toString(),l.addEventListener("input",()=>h(l.value,!1)),c.addEventListener("change",()=>{h(c.value,!1)}),i.appendChild(a)}function Av(i,e,t,n=""){let s=document.createElement("label");s.className="srow chk",s.innerHTML=`<div class="sl"><span>${e}</span>${n?`<small>${n}</small>`:""}</div><input type="checkbox">`;let r=s.querySelector("input");r.checked=!!q.settings[t],r.addEventListener("change",()=>{q.settings[t]=r.checked,Ka()}),i.appendChild(s)}function $a(){let i=_o("tab-controls");i.innerHTML="",pr=document.createElement("div"),pr.className="snote",pr.textContent="Clique em uma tecla e aperte a nova tecla (ou um bot\xE3o lateral do mouse). Esc cancela, Backspace remove a tecla.",i.appendChild(pr);let e=document.createElement("button");e.className="btn sec small",e.textContent="RESTAURAR PADR\xD5ES",e.addEventListener("click",()=>{Qy(),$a()}),i.appendChild(e);let t="";for(let n of qa){if(n.group!==t){t=n.group;let l=document.createElement("h3");l.textContent=t,i.appendChild(l)}let s=document.createElement("div");s.className="krow";let r=document.createElement("span");r.textContent=n.label;let o=document.createElement("button");o.className="kbtn"+(Lt[n.id]?"":" empty"),o.textContent=hn(Lt[n.id]),o.addEventListener("click",()=>{document.querySelectorAll(".kbtn.wait").forEach(l=>l.classList.remove("wait")),o.classList.add("wait"),o.textContent="PRESSIONE\u2026",Dt.capture=l=>{if(l==="Escape"){$a();return}if(l==="Backspace"){Lf(n.id,""),$a();return}let c=Lf(n.id,l);$a(),c&&(pr.textContent=`${hn(l)} j\xE1 estava em \u201C${c}\u201D \u2014 essa a\xE7\xE3o ficou sem tecla.`,pr.classList.add("warn"))}});let a=document.createElement("div");a.className="kbox";for(let l of n.quick||[]){let c=document.createElement("button");c.className="kbtn quick",c.textContent=l.label,c.title="Usar "+l.label,c.addEventListener("click",()=>{let h=Lf(n.id,l.code);$a(),h&&(pr.textContent=`${hn(l.code)} j\xE1 estava em \u201C${h}\u201D \u2014 essa a\xE7\xE3o ficou sem tecla.`,pr.classList.add("warn"))}),a.appendChild(c)}a.appendChild(o),s.append(r,a),i.appendChild(s)}}function DA(){let i=_o("tab-mouse");i.innerHTML="",Za(i,"Sensibilidade do mouse","sens",.1,5,.05,"Valor maior = a c\xE2mera gira mais r\xE1pido"),Za(i,"Sensibilidade ao mirar (bot\xE3o direito)","adsSens",.2,3,.05,"Multiplicador aplicado ao mirar"),Za(i,"Sensibilidade da luneta (sniper)","scopeSens",.2,3,.05,"Multiplicador aplicado na luneta"),Av(i,"Inverter eixo Y","invertY")}function NA(){let i=_o("tab-game");i.innerHTML="",Av(i,"Corrida autom\xE1tica","autoSprint","Ligada: voc\xEA corre ao andar para frente e a tecla de deslizar faz o slide. Desligada: segure a tecla de correr."),Za(i,"Campo de vis\xE3o (FOV)","fov",60,110,1),Za(i,"Dist\xE2ncia da c\xE2mera","camDist",1.4,4.5,.1,"Menor = c\xE2mera mais perto do personagem");let e=document.createElement("div");e.className="srow",e.innerHTML='<div class="sl"><span>Como confirmar a edi\xE7\xE3o</span><small>Autom\xE1tico: aplica assim que voc\xEA solta o clique, sem apertar a tecla de editar de novo</small></div><select><option value="auto">Autom\xE1tico (ao soltar o clique)</option><option value="release">Ao soltar a tecla de editar (segurar)</option><option value="press">Apertando a tecla de editar de novo</option></select>';let t=e.querySelector("select");t.value=q.settings.editConfirm||"auto",t.addEventListener("change",()=>{q.settings.editConfirm=t.value,Ka()}),i.appendChild(e),Za(i,"Volume","volume",0,1,.05);let n=document.createElement("div");n.className="srow",n.innerHTML='<div class="sl"><span>Qualidade gr\xE1fica</span><small>Baixa desliga as sombras (mais FPS)</small></div><select><option value="high">Alta</option><option value="medium">M\xE9dia</option><option value="low">Baixa</option></select>';let s=n.querySelector("select");s.value=q.settings.quality,s.addEventListener("change",()=>{q.settings.quality=s.value,Ka(),q0.onQuality&&q0.onQuality(s.value)}),i.appendChild(n)}function UA(){$a(),DA(),NA(),_o("settings").classList.remove("hidden")}function FA(){Dt.capture=null,_o("settings").classList.add("hidden")}function Rv(i){q0.onQuality=i,document.querySelectorAll("#settings .tabs button").forEach(e=>e.addEventListener("click",()=>{document.querySelectorAll("#settings .tabs button").forEach(t=>t.classList.toggle("on",t===e));for(let t of["controls","mouse","game"])_o("tab-"+t).classList.toggle("hidden",t!==e.dataset.tab);Dt.capture=null})),_o("setClose").addEventListener("click",FA),document.querySelectorAll(".openSettings").forEach(e=>e.addEventListener("click",t=>{t.stopPropagation(),UA()}))}var Ev,LA,q0,_o,pr,Cv=Ot(()=>{Ya();Xa();ri();lr();Ev="fortbuild_settings",LA={sens:1,adsSens:1,scopeSens:1,invertY:!1,autoSprint:!0,fov:80,camDist:2.9,editConfirm:"auto",quality:"medium",volume:.7,diff:"normal"},q0={onQuality:null},_o=i=>document.getElementById(i);pr=null});var zA=Gv(()=>{si();ri();ka();fy();or();Ts();Ch();Sf();Ch();Ff();G0();Tv();W0();Xa();lr();Cv();fo();var un=i=>document.getElementById(i),Dh=un("c"),As,mr,gr,Ja=!1,Dv=!1,Pv=performance.now(),OA=new URLSearchParams(location.search),Iv=()=>new Promise(i=>setTimeout(i,0));function Lv(i){let e=window.devicePixelRatio||1;if(As.setPixelRatio(i==="high"?Math.min(e,2):i==="medium"?Math.min(e,1.5):1),As.setSize(innerWidth,innerHeight,!1),As.shadowMap.enabled=i!=="low",q.sun){q.sun.castShadow=i!=="low";let t=i==="high"?2048:1024;q.sun.shadow.mapSize.x!==t&&(q.sun.shadow.mapSize.set(t,t),q.sun.shadow.map&&(q.sun.shadow.map.dispose(),q.sun.shadow.map=null))}}async function BA(){wv();let i=q.settings.quality;un("diffIn").value=q.settings.diff||"normal",As=new fh({canvas:Dh,antialias:i!=="low",powerPreference:"high-performance"}),As.shadowMap.type=$s,mr=new zr,gr=new Kt(q.settings.fov||80,innerWidth/innerHeight,.15,2600),q.renderer=As,q.scene=mr,q.camera=gr,q.player=ft,un("loadBar").style.width="30%",await Iv(),dy(mr,i),cy(mr,As),Ay(mr),b0(),q.actors.push(ft),mr.add(ft.model.root),Of(),Bf(),gv(),Zy(Dh,kA),Rv(t=>Lv(t)),Lv(i),un("loadBar").style.width="100%",await Iv(),ns("playerHurt",()=>vt.hurt()),ns("duelOver",({win:t,score:n})=>{t&&vt.victory(),setTimeout(()=>{try{document.exitPointerLock()}catch{}un("pause").classList.add("hidden"),vv({victory:t,score:n,time:q.matchTime})},2300)}),window.addEventListener("resize",()=>{gr.aspect=innerWidth/innerHeight,gr.updateProjectionMatrix(),As.setSize(innerWidth,innerHeight,!1)}),un("loading").classList.add("hidden"),Dv=!0,window.__g={S:q,player:ft,M:gt,THREE:Zn,keys:yi,pressed:is,mouse:dt,input:Dt,scene:mr,camera:gr,pieces:f0,physics:r0,ps:D,combat:T0};let e=OA.get("autostart");e&&(q.noLock=!0,Y0(e==="duel"?"duel":"freebuild")),requestAnimationFrame(Uv)}function Y0(i){!Dv||Ja||(q.settings.diff=un("diffIn").value,Ka(),Dy(q.settings.volume),un("menu").classList.add("hidden"),yv(!0),Mv(i,q.settings.diff),q.paused=!1,Ja=!0,q.noLock||(If(Dh),setTimeout(()=>{!Dt.locked&&Ja&&q.phase!=="over"&&un("pause").classList.remove("hidden")},900)))}function kA(i){if(i){un("pause").classList.add("hidden"),un("settings").classList.add("hidden"),Uy();return}Ja&&q.phase!=="over"&&un("pause").classList.remove("hidden")}function Nv(i){q.time+=i,q.dt=i,q.phase==="playing"&&(q.matchTime+=i),lv(i),bv(i),S0(i),Py(i),Ym(i,gr.position),_v(i),L0()}window.__step=(i=1,e=1/60)=>{for(let t=0;t<i;t++)Nv(e)};function Uv(i){requestAnimationFrame(Uv);let e=(i-Pv)/1e3;Pv=i,e>.05&&(e=.05),Ja&&(Dt.locked||q.noLock)?Nv(e):Ja&&(Ym(0,gr.position),L0()),As.render(mr,gr)}un("freeBtn").addEventListener("click",()=>Y0("freebuild"));un("duelBtn").addEventListener("click",()=>Y0("duel"));un("resumeBtn").addEventListener("click",()=>If(Dh));un("pause").addEventListener("click",i=>{i.target.id==="pause"&&If(Dh)});un("menuBtn").addEventListener("click",i=>{i.stopPropagation(),location.reload()});un("againBtn").addEventListener("click",()=>location.reload());BA().catch(i=>{console.error(i),un("loading").innerHTML='<div style="font-size:22px;padding:20px">Erro ao carregar: '+(i&&i.message?i.message:i)+"</div>"})});zA();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
