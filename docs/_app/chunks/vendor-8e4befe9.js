function P(){}function ot(n,t){for(const e in t)n[e]=t[e];return n}function An(n){return n()}function Sn(){return Object.create(null)}function z(n){n.forEach(An)}function ut(n){return typeof n=="function"}function ct(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let V;function ke(n,t){return V||(V=document.createElement("a")),V.href=t,n===V.href}function lt(n){return Object.keys(n).length===0}function ve(n,t,e,r){if(n){const i=En(n,t,e,r);return n[0](i)}}function En(n,t,e,r){return n[1]&&r?ot(e.ctx.slice(),n[1](r(t))):e.ctx}function $e(n,t,e,r){if(n[2]&&r){const i=n[2](r(e));if(t.dirty===void 0)return i;if(typeof i=="object"){const o=[],a=Math.max(t.dirty.length,i.length);for(let f=0;f<a;f+=1)o[f]=t.dirty[f]|i[f];return o}return t.dirty|i}return t.dirty}function Ae(n,t,e,r,i,o){if(i){const a=En(t,e,r,o);n.p(a,i)}}function Se(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let r=0;r<e;r++)t[r]=-1;return t}return-1}let X=!1;function st(){X=!0}function ht(){X=!1}function dt(n,t,e,r){for(;n<t;){const i=n+(t-n>>1);e(i)<=r?n=i+1:t=i}return n}function mt(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const u=[];for(let c=0;c<t.length;c++){const s=t[c];s.claim_order!==void 0&&u.push(s)}t=u}const e=new Int32Array(t.length+1),r=new Int32Array(t.length);e[0]=-1;let i=0;for(let u=0;u<t.length;u++){const c=t[u].claim_order,s=(i>0&&t[e[i]].claim_order<=c?i+1:dt(1,i,h=>t[e[h]].claim_order,c))-1;r[u]=e[s]+1;const l=s+1;e[l]=u,i=Math.max(l,i)}const o=[],a=[];let f=t.length-1;for(let u=e[i]+1;u!=0;u=r[u-1]){for(o.push(t[u-1]);f>=u;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);o.reverse(),a.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<a.length;u++){for(;c<o.length&&a[u].claim_order>=o[c].claim_order;)c++;const s=c<o.length?o[c]:null;n.insertBefore(a[u],s)}}function gt(n,t){if(X){for(mt(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function Ee(n,t,e){X&&!e?gt(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function xt(n){n.parentNode.removeChild(n)}function je(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function pt(n){return document.createElement(n)}function an(n){return document.createTextNode(n)}function Re(){return an(" ")}function qe(){return an("")}function Pe(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function bt(n){return Array.from(n.childNodes)}function yt(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function jn(n,t,e,r,i=!1){yt(n);const o=(()=>{for(let a=n.claim_info.last_index;a<n.length;a++){const f=n[a];if(t(f)){const u=e(f);return u===void 0?n.splice(a,1):n[a]=u,i||(n.claim_info.last_index=a),f}}for(let a=n.claim_info.last_index-1;a>=0;a--){const f=n[a];if(t(f)){const u=e(f);return u===void 0?n.splice(a,1):n[a]=u,i?u===void 0&&n.claim_info.last_index--:n.claim_info.last_index=a,f}}return r()})();return o.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,o}function _t(n,t,e,r){return jn(n,i=>i.nodeName===t,i=>{const o=[];for(let a=0;a<i.attributes.length;a++){const f=i.attributes[a];e[f.name]||o.push(f.name)}o.forEach(a=>i.removeAttribute(a))},()=>r(t))}function ze(n,t,e){return _t(n,t,e,pt)}function wt(n,t){return jn(n,e=>e.nodeType===3,e=>{const r=""+t;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>an(t),!0)}function Ce(n){return wt(n," ")}function He(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function Ie(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function Fe(n,t=document.body){return Array.from(t.querySelectorAll(n))}let C;function H(n){C=n}function J(){if(!C)throw new Error("Function called outside component initialization");return C}function Le(n){J().$$.on_mount.push(n)}function Oe(n){J().$$.after_update.push(n)}function Te(n,t){J().$$.context.set(n,t)}function Be(n){return J().$$.context.get(n)}const I=[],Rn=[],K=[],qn=[],Pn=Promise.resolve();let fn=!1;function zn(){fn||(fn=!0,Pn.then(Cn))}function De(){return zn(),Pn}function on(n){K.push(n)}const un=new Set;let Q=0;function Cn(){const n=C;do{for(;Q<I.length;){const t=I[Q];Q++,H(t),Mt(t.$$)}for(H(null),I.length=0,Q=0;Rn.length;)Rn.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];un.has(e)||(un.add(e),e())}K.length=0}while(I.length);for(;qn.length;)qn.pop()();fn=!1,un.clear(),H(n)}function Mt(n){if(n.fragment!==null){n.update(),z(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(on)}}const U=new Set;let k;function Ge(){k={r:0,c:[],p:k}}function Ve(){k.r||z(k.c),k=k.p}function Nt(n,t){n&&n.i&&(U.delete(n),n.i(t))}function Xe(n,t,e,r){if(n&&n.o){if(U.has(n))return;U.add(n),k.c.push(()=>{U.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}}function Je(n,t){const e={},r={},i={$$scope:1};let o=n.length;for(;o--;){const a=n[o],f=t[o];if(f){for(const u in a)u in f||(r[u]=1);for(const u in f)i[u]||(e[u]=f[u],i[u]=1);n[o]=f}else for(const u in a)i[u]=1}for(const a in r)a in e||(e[a]=void 0);return e}function Ke(n){return typeof n=="object"&&n!==null?n:{}}function Qe(n){n&&n.c()}function Ue(n,t){n&&n.l(t)}function kt(n,t,e,r){const{fragment:i,on_mount:o,on_destroy:a,after_update:f}=n.$$;i&&i.m(t,e),r||on(()=>{const u=o.map(An).filter(ut);a?a.push(...u):z(u),n.$$.on_mount=[]}),f.forEach(on)}function vt(n,t){const e=n.$$;e.fragment!==null&&(z(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function $t(n,t){n.$$.dirty[0]===-1&&(I.push(n),zn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function We(n,t,e,r,i,o,a,f=[-1]){const u=C;H(n);const c=n.$$={fragment:null,ctx:null,props:o,update:P,not_equal:i,bound:Sn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Sn(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};a&&a(c.root);let s=!1;if(c.ctx=e?e(n,t.props||{},(l,h,...b)=>{const m=b.length?b[0]:h;return c.ctx&&i(c.ctx[l],c.ctx[l]=m)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](m),s&&$t(n,l)),h}):[],c.update(),s=!0,z(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){st();const l=bt(t.target);c.fragment&&c.fragment.l(l),l.forEach(xt)}else c.fragment&&c.fragment.c();t.intro&&Nt(n.$$.fragment),kt(n,t.target,t.anchor,t.customElement),ht(),Cn()}H(u)}class Ye{$destroy(){vt(this,1),this.$destroy=P}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const A=[];function Ze(n,t=P){let e;const r=new Set;function i(f){if(ct(n,f)&&(n=f,e)){const u=!A.length;for(const c of r)c[1](),A.push(c,n);if(u){for(let c=0;c<A.length;c+=2)A[c][0](A[c+1]);A.length=0}}}function o(f){i(f(n))}function a(f,u=P){const c=[f,u];return r.add(c),r.size===1&&(e=t(i)||P),f(n),()=>{r.delete(c),r.size===0&&(e(),e=null)}}return{set:i,update:o,subscribe:a}}function cn(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Hn(n){let t=n,e=n,r=n;n.length!==2&&(t=(f,u)=>n(f)-u,e=cn,r=(f,u)=>cn(n(f),u));function i(f,u,c=0,s=f.length){if(c<s){if(e(u,u)!==0)return s;do{const l=c+s>>>1;r(f[l],u)<0?c=l+1:s=l}while(c<s)}return c}function o(f,u,c=0,s=f.length){if(c<s){if(e(u,u)!==0)return s;do{const l=c+s>>>1;r(f[l],u)<=0?c=l+1:s=l}while(c<s)}return c}function a(f,u,c=0,s=f.length){const l=i(f,u,c,s-1);return l>c&&t(f[l-1],u)>-t(f[l],u)?l-1:l}return{left:i,center:a,right:o}}function At(n){return n===null?NaN:+n}const St=Hn(cn),Et=St.right;Hn(At).center;var jt=Et,ln=Math.sqrt(50),sn=Math.sqrt(10),hn=Math.sqrt(2);function Rt(n,t,e){var r,i=-1,o,a,f;if(t=+t,n=+n,e=+e,n===t&&e>0)return[n];if((r=t<n)&&(o=n,n=t,t=o),(f=In(n,t,e))===0||!isFinite(f))return[];if(f>0){let u=Math.round(n/f),c=Math.round(t/f);for(u*f<n&&++u,c*f>t&&--c,a=new Array(o=c-u+1);++i<o;)a[i]=(u+i)*f}else{f=-f;let u=Math.round(n*f),c=Math.round(t*f);for(u/f<n&&++u,c/f>t&&--c,a=new Array(o=c-u+1);++i<o;)a[i]=(u+i)/f}return r&&a.reverse(),a}function In(n,t,e){var r=(t-n)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=ln?10:o>=sn?5:o>=hn?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=ln?10:o>=sn?5:o>=hn?2:1)}function qt(n,t,e){var r=Math.abs(t-n)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=ln?i*=10:o>=sn?i*=5:o>=hn&&(i*=2),t<n?-i:i}function dn(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Fn(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function F(){}var L=.7,W=1/L,S="\\s*([+-]?\\d+)\\s*",O="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",y="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Pt=/^#([0-9a-f]{3,8})$/,zt=new RegExp("^rgb\\("+[S,S,S]+"\\)$"),Ct=new RegExp("^rgb\\("+[y,y,y]+"\\)$"),Ht=new RegExp("^rgba\\("+[S,S,S,O]+"\\)$"),It=new RegExp("^rgba\\("+[y,y,y,O]+"\\)$"),Ft=new RegExp("^hsl\\("+[O,y,y]+"\\)$"),Lt=new RegExp("^hsla\\("+[O,y,y,O]+"\\)$"),Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};dn(F,T,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:On,formatHex:On,formatHsl:Ot,formatRgb:Tn,toString:Tn});function On(){return this.rgb().formatHex()}function Ot(){return Xn(this).formatHsl()}function Tn(){return this.rgb().formatRgb()}function T(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=Pt.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Bn(t):e===3?new g(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Y(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Y(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=zt.exec(n))?new g(t[1],t[2],t[3],1):(t=Ct.exec(n))?new g(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ht.exec(n))?Y(t[1],t[2],t[3],t[4]):(t=It.exec(n))?Y(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ft.exec(n))?Vn(t[1],t[2]/100,t[3]/100,1):(t=Lt.exec(n))?Vn(t[1],t[2]/100,t[3]/100,t[4]):Ln.hasOwnProperty(n)?Bn(Ln[n]):n==="transparent"?new g(NaN,NaN,NaN,0):null}function Bn(n){return new g(n>>16&255,n>>8&255,n&255,1)}function Y(n,t,e,r){return r<=0&&(n=t=e=NaN),new g(n,t,e,r)}function Tt(n){return n instanceof F||(n=T(n)),n?(n=n.rgb(),new g(n.r,n.g,n.b,n.opacity)):new g}function mn(n,t,e,r){return arguments.length===1?Tt(n):new g(n,t,e,r==null?1:r)}function g(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}dn(g,mn,Fn(F,{brighter:function(n){return n=n==null?W:Math.pow(W,n),new g(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=n==null?L:Math.pow(L,n),new g(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Dn,formatHex:Dn,formatRgb:Gn,toString:Gn}));function Dn(){return"#"+gn(this.r)+gn(this.g)+gn(this.b)}function Gn(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(n===1?")":", "+n+")")}function gn(n){return n=Math.max(0,Math.min(255,Math.round(n)||0)),(n<16?"0":"")+n.toString(16)}function Vn(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new _(n,t,e,r)}function Xn(n){if(n instanceof _)return new _(n.h,n.s,n.l,n.opacity);if(n instanceof F||(n=T(n)),!n)return new _;if(n instanceof _)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),o=Math.max(t,e,r),a=NaN,f=o-i,u=(o+i)/2;return f?(t===o?a=(e-r)/f+(e<r)*6:e===o?a=(r-t)/f+2:a=(t-e)/f+4,f/=u<.5?o+i:2-o-i,a*=60):f=u>0&&u<1?0:a,new _(a,f,u,n.opacity)}function Bt(n,t,e,r){return arguments.length===1?Xn(n):new _(n,t,e,r==null?1:r)}function _(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}dn(_,Bt,Fn(F,{brighter:function(n){return n=n==null?W:Math.pow(W,n),new _(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=n==null?L:Math.pow(L,n),new _(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new g(xn(n>=240?n-240:n+120,i,r),xn(n,i,r),xn(n<120?n+240:n-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(n===1?")":", "+n+")")}}));function xn(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}var pn=n=>()=>n;function Dt(n,t){return function(e){return n+e*t}}function Gt(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function Vt(n){return(n=+n)==1?Jn:function(t,e){return e-t?Gt(t,e,n):pn(isNaN(t)?e:t)}}function Jn(n,t){var e=t-n;return e?Dt(n,e):pn(isNaN(n)?t:n)}var Kn=function n(t){var e=Vt(t);function r(i,o){var a=e((i=mn(i)).r,(o=mn(o)).r),f=e(i.g,o.g),u=e(i.b,o.b),c=Jn(i.opacity,o.opacity);return function(s){return i.r=a(s),i.g=f(s),i.b=u(s),i.opacity=c(s),i+""}}return r.gamma=n,r}(1);function Xt(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(o){for(i=0;i<e;++i)r[i]=n[i]*(1-o)+t[i]*o;return r}}function Jt(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kt(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),o=new Array(e),a;for(a=0;a<r;++a)i[a]=_n(n[a],t[a]);for(;a<e;++a)o[a]=t[a];return function(f){for(a=0;a<r;++a)o[a]=i[a](f);return o}}function Qt(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function Z(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function Ut(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=_n(n[i],t[i]):r[i]=t[i];return function(o){for(i in e)r[i]=e[i](o);return r}}var bn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,yn=new RegExp(bn.source,"g");function Wt(n){return function(){return n}}function Yt(n){return function(t){return n(t)+""}}function Zt(n,t){var e=bn.lastIndex=yn.lastIndex=0,r,i,o,a=-1,f=[],u=[];for(n=n+"",t=t+"";(r=bn.exec(n))&&(i=yn.exec(t));)(o=i.index)>e&&(o=t.slice(e,o),f[a]?f[a]+=o:f[++a]=o),(r=r[0])===(i=i[0])?f[a]?f[a]+=i:f[++a]=i:(f[++a]=null,u.push({i:a,x:Z(r,i)})),e=yn.lastIndex;return e<t.length&&(o=t.slice(e),f[a]?f[a]+=o:f[++a]=o),f.length<2?u[0]?Yt(u[0].x):Wt(t):(t=u.length,function(c){for(var s=0,l;s<t;++s)f[(l=u[s]).i]=l.x(c);return f.join("")})}function _n(n,t){var e=typeof t,r;return t==null||e==="boolean"?pn(t):(e==="number"?Z:e==="string"?(r=T(t))?(t=r,Kn):Zt:t instanceof T?Kn:t instanceof Date?Qt:Jt(t)?Xt:Array.isArray(t)?Kt:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ut:Z)(n,t)}function ne(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function te(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function nn(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function E(n){return n=nn(Math.abs(n)),n?n[1]:NaN}function ee(n,t){return function(e,r){for(var i=e.length,o=[],a=0,f=n[0],u=0;i>0&&f>0&&(u+f+1>r&&(f=Math.max(1,r-u)),o.push(e.substring(i-=f,i+f)),!((u+=f+1)>r));)f=n[a=(a+1)%n.length];return o.reverse().join(t)}}function re(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var ie=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function tn(n){if(!(t=ie.exec(n)))throw new Error("invalid format: "+n);var t;return new wn({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}tn.prototype=wn.prototype;function wn(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}wn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function ae(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var Qn;function fe(n,t){var e=nn(n,t);if(!e)return n+"";var r=e[0],i=e[1],o=i-(Qn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+nn(n,Math.max(0,t+o-1))[0]}function Un(n,t){var e=nn(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var Wn={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:te,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Un(n*100,t),r:Un,s:fe,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Yn(n){return n}var Zn=Array.prototype.map,nt=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function oe(n){var t=n.grouping===void 0||n.thousands===void 0?Yn:ee(Zn.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?Yn:re(Zn.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",f=n.minus===void 0?"\u2212":n.minus+"",u=n.nan===void 0?"NaN":n.nan+"";function c(l){l=tn(l);var h=l.fill,b=l.align,m=l.sign,R=l.symbol,v=l.zero,q=l.width,rn=l.comma,M=l.precision,Nn=l.trim,x=l.type;x==="n"?(rn=!0,x="g"):Wn[x]||(M===void 0&&(M=12),Nn=!0,x="g"),(v||h==="0"&&b==="=")&&(v=!0,h="0",b="=");var it=R==="$"?e:R==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",at=R==="$"?r:/[%p]/.test(x)?a:"",kn=Wn[x],ft=/[defgprs%]/.test(x);M=M===void 0?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function vn(d){var N=it,p=at,$,$n,B;if(x==="c")p=kn(d)+p,d="";else{d=+d;var D=d<0||1/d<0;if(d=isNaN(d)?u:kn(Math.abs(d),M),Nn&&(d=ae(d)),D&&+d==0&&m!=="+"&&(D=!1),N=(D?m==="("?m:f:m==="-"||m==="("?"":m)+N,p=(x==="s"?nt[8+Qn/3]:"")+p+(D&&m==="("?")":""),ft){for($=-1,$n=d.length;++$<$n;)if(B=d.charCodeAt($),48>B||B>57){p=(B===46?i+d.slice($+1):d.slice($))+p,d=d.slice(0,$);break}}}rn&&!v&&(d=t(d,1/0));var G=N.length+d.length+p.length,w=G<q?new Array(q-G+1).join(h):"";switch(rn&&v&&(d=t(w+d,w.length?q-p.length:1/0),w=""),b){case"<":d=N+d+p+w;break;case"=":d=N+w+d+p;break;case"^":d=w.slice(0,G=w.length>>1)+N+d+p+w.slice(G);break;default:d=w+N+d+p;break}return o(d)}return vn.toString=function(){return l+""},vn}function s(l,h){var b=c((l=tn(l),l.type="f",l)),m=Math.max(-8,Math.min(8,Math.floor(E(h)/3)))*3,R=Math.pow(10,-m),v=nt[8+m/3];return function(q){return b(R*q)+v}}return{format:c,formatPrefix:s}}var en,tt,et;ue({thousands:",",grouping:[3],currency:["$",""]});function ue(n){return en=oe(n),tt=en.format,et=en.formatPrefix,en}function ce(n){return Math.max(0,-E(Math.abs(n)))}function le(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(E(t)/3)))*3-E(Math.abs(n)))}function se(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,E(t)-E(n))+1}function he(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function de(n){return function(){return n}}function me(n){return+n}var rt=[0,1];function j(n){return n}function Mn(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:de(isNaN(t)?NaN:.5)}function ge(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function xe(n,t,e){var r=n[0],i=n[1],o=t[0],a=t[1];return i<r?(r=Mn(i,r),o=e(a,o)):(r=Mn(r,i),o=e(o,a)),function(f){return o(r(f))}}function pe(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=Mn(n[a],n[a+1]),o[a]=e(t[a],t[a+1]);return function(f){var u=jt(n,f,1,r)-1;return o[u](i[u](f))}}function be(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function ye(){var n=rt,t=rt,e=_n,r,i,o,a=j,f,u,c;function s(){var h=Math.min(n.length,t.length);return a!==j&&(a=ge(n[0],n[h-1])),f=h>2?pe:xe,u=c=null,l}function l(h){return h==null||isNaN(h=+h)?o:(u||(u=f(n.map(r),t,e)))(r(a(h)))}return l.invert=function(h){return a(i((c||(c=f(t,n.map(r),Z)))(h)))},l.domain=function(h){return arguments.length?(n=Array.from(h,me),s()):n.slice()},l.range=function(h){return arguments.length?(t=Array.from(h),s()):t.slice()},l.rangeRound=function(h){return t=Array.from(h),e=ne,s()},l.clamp=function(h){return arguments.length?(a=h?!0:j,s()):a!==j},l.interpolate=function(h){return arguments.length?(e=h,s()):e},l.unknown=function(h){return arguments.length?(o=h,l):o},function(h,b){return r=h,i=b,s()}}function _e(){return ye()(j,j)}function we(n,t,e,r){var i=qt(n,t,e),o;switch(r=tn(r==null?",f":r),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(o=le(i,a))&&(r.precision=o),et(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=se(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=ce(i))&&(r.precision=o-(r.type==="%")*2);break}}return tt(r)}function Me(n){var t=n.domain;return n.ticks=function(e){var r=t();return Rt(r[0],r[r.length-1],e==null?10:e)},n.tickFormat=function(e,r){var i=t();return we(i[0],i[i.length-1],e==null?10:e,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,o=r.length-1,a=r[i],f=r[o],u,c,s=10;for(f<a&&(c=a,a=f,f=c,c=i,i=o,o=c);s-- >0;){if(c=In(a,f,e),c===u)return r[i]=a,r[o]=f,t(r);if(c>0)a=Math.floor(a/c)*c,f=Math.ceil(f/c)*c;else if(c<0)a=Math.ceil(a*c)/c,f=Math.floor(f*c)/c;else break;u=c}return n},n}function Ne(){var n=_e();return n.copy=function(){return be(n,Ne())},he.apply(n,arguments),Me(n)}export{Ke as A,vt as B,ot as C,Ze as D,De as E,ve as F,Ae as G,Se as H,$e as I,gt as J,P as K,je as L,Be as M,tt as N,Ne as O,ke as P,Fe as Q,Ye as S,bt as a,Pe as b,ze as c,xt as d,pt as e,Ie as f,Ee as g,wt as h,We as i,He as j,Re as k,qe as l,Ce as m,Ge as n,Xe as o,Ve as p,Nt as q,Te as r,ct as s,an as t,Oe as u,Le as v,Qe as w,Ue as x,kt as y,Je as z};
