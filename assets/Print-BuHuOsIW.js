import{d as k,g as p,B as H,C as E,s as W,p as X,D as R,E as J,h as A,G as Q,o as u,b as v,k as g,a as c,n as U,c as N,f as I,t as F,_ as S,H as ee,I as P,F as w,J as $,L as b,M as j,e as V,r as te,N as re,O as ne,P as ie,q as L,v as le}from"./index-mAQWtzlH.js";import{G as se,g as ae,S as oe,f as ce,w as ue}from"./bottom-KPbGttJ7.js";import{P as fe}from"./PrintStyle-CP0f5e-C.js";/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function G(e){return typeof e>"u"||e===null}function pe(e){return typeof e=="object"&&e!==null}function me(e){return Array.isArray(e)?e:G(e)?[]:[e]}function he(e,t){var r,i,n,l;if(t)for(l=Object.keys(t),r=0,i=l.length;r<i;r+=1)n=l[r],e[n]=t[n];return e}function de(e,t){var r="",i;for(i=0;i<t;i+=1)r+=e;return r}function ve(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var xe=G,ge=pe,ye=me,_e=de,we=ve,ke=he,T={isNothing:xe,isObject:ge,toArray:ye,repeat:_e,isNegativeZero:we,extend:ke};function K(e,t){var r="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+=`

`+e.mark.snippet),i+" "+r):i}function y(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=K(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}y.prototype=Object.create(Error.prototype);y.prototype.constructor=y;y.prototype.toString=function(t){return this.name+": "+K(this,t)};var h=y,Ne=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Se=["scalar","sequence","mapping"];function be(e){var t={};return e!==null&&Object.keys(e).forEach(function(r){e[r].forEach(function(i){t[String(i)]=r})}),t}function Ee(e,t){if(t=t||{},Object.keys(t).forEach(function(r){if(Ne.indexOf(r)===-1)throw new h('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(r){return r},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=be(t.styleAliases||null),Se.indexOf(this.kind)===-1)throw new h('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var o=Ee;function M(e,t){var r=[];return e[t].forEach(function(i){var n=r.length;r.forEach(function(l,s){l.tag===i.tag&&l.kind===i.kind&&l.multi===i.multi&&(n=s)}),r[n]=i}),r}function Ae(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,r;function i(n){n.multi?(e.multi[n.kind].push(n),e.multi.fallback.push(n)):e[n.kind][n.tag]=e.fallback[n.tag]=n}for(t=0,r=arguments.length;t<r;t+=1)arguments[t].forEach(i);return e}function O(e){return this.extend(e)}O.prototype.extend=function(t){var r=[],i=[];if(t instanceof o)i.push(t);else if(Array.isArray(t))i=i.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(r=r.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit));else throw new h("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");r.forEach(function(l){if(!(l instanceof o))throw new h("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new h("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new h("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(l){if(!(l instanceof o))throw new h("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(O.prototype);return n.implicit=(this.implicit||[]).concat(r),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=M(n,"implicit"),n.compiledExplicit=M(n,"explicit"),n.compiledTypeMap=Ae(n.compiledImplicit,n.compiledExplicit),n};var Fe=O,Oe=new o("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Ie=new o("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Te=new o("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Ye=new Fe({explicit:[Oe,Ie,Te]});function Ce(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Pe(){return null}function je(e){return e===null}var Le=new o("tag:yaml.org,2002:null",{kind:"scalar",resolve:Ce,construct:Pe,predicate:je,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Me(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Be(e){return e==="true"||e==="True"||e==="TRUE"}function De(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var qe=new o("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Me,construct:Be,predicate:De,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Re(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ue(e){return 48<=e&&e<=55}function $e(e){return 48<=e&&e<=57}function Ve(e){if(e===null)return!1;var t=e.length,r=0,i=!1,n;if(!t)return!1;if(n=e[r],(n==="-"||n==="+")&&(n=e[++r]),n==="0"){if(r+1===t)return!0;if(n=e[++r],n==="b"){for(r++;r<t;r++)if(n=e[r],n!=="_"){if(n!=="0"&&n!=="1")return!1;i=!0}return i&&n!=="_"}if(n==="x"){for(r++;r<t;r++)if(n=e[r],n!=="_"){if(!Re(e.charCodeAt(r)))return!1;i=!0}return i&&n!=="_"}if(n==="o"){for(r++;r<t;r++)if(n=e[r],n!=="_"){if(!Ue(e.charCodeAt(r)))return!1;i=!0}return i&&n!=="_"}}if(n==="_")return!1;for(;r<t;r++)if(n=e[r],n!=="_"){if(!$e(e.charCodeAt(r)))return!1;i=!0}return!(!i||n==="_")}function Ge(e){var t=e,r=1,i;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),i=t[0],(i==="-"||i==="+")&&(i==="-"&&(r=-1),t=t.slice(1),i=t[0]),t==="0")return 0;if(i==="0"){if(t[1]==="b")return r*parseInt(t.slice(2),2);if(t[1]==="x")return r*parseInt(t.slice(2),16);if(t[1]==="o")return r*parseInt(t.slice(2),8)}return r*parseInt(t,10)}function Ke(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!T.isNegativeZero(e)}var Ze=new o("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ve,construct:Ge,predicate:Ke,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ze=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function He(e){return!(e===null||!ze.test(e)||e[e.length-1]==="_")}function We(e){var t,r;return t=e.replace(/_/g,"").toLowerCase(),r=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:r*parseFloat(t,10)}var Xe=/^[-+]?[0-9]+e/;function Je(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(T.isNegativeZero(e))return"-0.0";return r=e.toString(10),Xe.test(r)?r.replace("e",".e"):r}function Qe(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||T.isNegativeZero(e))}var et=new o("tag:yaml.org,2002:float",{kind:"scalar",resolve:He,construct:We,predicate:Qe,represent:Je,defaultStyle:"lowercase"}),tt=Ye.extend({implicit:[Le,qe,Ze,et]}),rt=tt,Z=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),z=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function nt(e){return e===null?!1:Z.exec(e)!==null||z.exec(e)!==null}function it(e){var t,r,i,n,l,s,a,f=0,m=null,x,C,_;if(t=Z.exec(e),t===null&&(t=z.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],i=+t[2]-1,n=+t[3],!t[4])return new Date(Date.UTC(r,i,n));if(l=+t[4],s=+t[5],a=+t[6],t[7]){for(f=t[7].slice(0,3);f.length<3;)f+="0";f=+f}return t[9]&&(x=+t[10],C=+(t[11]||0),m=(x*60+C)*6e4,t[9]==="-"&&(m=-m)),_=new Date(Date.UTC(r,i,n,l,s,a,f)),m&&_.setTime(_.getTime()-m),_}function lt(e){return e.toISOString()}var st=new o("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:nt,construct:it,instanceOf:Date,represent:lt});function at(e){return e==="<<"||e===null}var ot=new o("tag:yaml.org,2002:merge",{kind:"scalar",resolve:at}),Y=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function ct(e){if(e===null)return!1;var t,r,i=0,n=e.length,l=Y;for(r=0;r<n;r++)if(t=l.indexOf(e.charAt(r)),!(t>64)){if(t<0)return!1;i+=6}return i%8===0}function ut(e){var t,r,i=e.replace(/[\r\n=]/g,""),n=i.length,l=Y,s=0,a=[];for(t=0;t<n;t++)t%4===0&&t&&(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)),s=s<<6|l.indexOf(i.charAt(t));return r=n%4*6,r===0?(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)):r===18?(a.push(s>>10&255),a.push(s>>2&255)):r===12&&a.push(s>>4&255),new Uint8Array(a)}function ft(e){var t="",r=0,i,n,l=e.length,s=Y;for(i=0;i<l;i++)i%3===0&&i&&(t+=s[r>>18&63],t+=s[r>>12&63],t+=s[r>>6&63],t+=s[r&63]),r=(r<<8)+e[i];return n=l%3,n===0?(t+=s[r>>18&63],t+=s[r>>12&63],t+=s[r>>6&63],t+=s[r&63]):n===2?(t+=s[r>>10&63],t+=s[r>>4&63],t+=s[r<<2&63],t+=s[64]):n===1&&(t+=s[r>>2&63],t+=s[r<<4&63],t+=s[64],t+=s[64]),t}function pt(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var mt=new o("tag:yaml.org,2002:binary",{kind:"scalar",resolve:ct,construct:ut,predicate:pt,represent:ft}),ht=Object.prototype.hasOwnProperty,dt=Object.prototype.toString;function vt(e){if(e===null)return!0;var t=[],r,i,n,l,s,a=e;for(r=0,i=a.length;r<i;r+=1){if(n=a[r],s=!1,dt.call(n)!=="[object Object]")return!1;for(l in n)if(ht.call(n,l))if(!s)s=!0;else return!1;if(!s)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function xt(e){return e!==null?e:[]}var gt=new o("tag:yaml.org,2002:omap",{kind:"sequence",resolve:vt,construct:xt}),yt=Object.prototype.toString;function _t(e){if(e===null)return!0;var t,r,i,n,l,s=e;for(l=new Array(s.length),t=0,r=s.length;t<r;t+=1){if(i=s[t],yt.call(i)!=="[object Object]"||(n=Object.keys(i),n.length!==1))return!1;l[t]=[n[0],i[n[0]]]}return!0}function wt(e){if(e===null)return[];var t,r,i,n,l,s=e;for(l=new Array(s.length),t=0,r=s.length;t<r;t+=1)i=s[t],n=Object.keys(i),l[t]=[n[0],i[n[0]]];return l}var kt=new o("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:_t,construct:wt}),Nt=Object.prototype.hasOwnProperty;function St(e){if(e===null)return!0;var t,r=e;for(t in r)if(Nt.call(r,t)&&r[t]!==null)return!1;return!0}function bt(e){return e!==null?e:{}}var Et=new o("tag:yaml.org,2002:set",{kind:"mapping",resolve:St,construct:bt});rt.extend({implicit:[st,ot],explicit:[mt,gt,kt,Et]});function B(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var At=new Array(256),Ft=new Array(256);for(var d=0;d<256;d++)At[d]=B(d)?1:0,Ft[d]=B(d);function Ot(e){return Array.from(new Set(e))}function D(...e){let t,r,i;e.length===1?(t=0,i=1,[r]=e):[t,r,i=1]=e;const n=[];let l=t;for(;l<r;)n.push(l),l+=i||1;return n}function It(e,t){if(!t||t==="all"||t==="*")return D(1,e+1);if(t==="none")return[];const r=[];for(const i of t.split(/[,;]/g))if(!i.includes("-"))r.push(+i);else{const[n,l]=i.split("-",2);r.push(...D(+n,l?+l+1:e+1))}return Ot(r).filter(i=>i<=e).sort((i,n)=>i-n)}const Tt=["id"],Yt=k({__name:"PrintSlideClick",props:{clicksContext:{type:null,required:!0},nav:{type:Object,required:!0},route:{type:Object,required:!0}},setup(e){const t=e,r=p(()=>({height:`${H}px`,width:`${E}px`})),i=W();X(()=>import("./DrawingPreview-D5aveeRY.js"),__vite__mapDeps([0,1,2])).then(l=>i.value=l.default);const n=p(()=>`${t.route.path.toString().padStart(3,"0")}-${(t.nav.clicks.value+1).toString().padStart(2,"0")}`);return R(Q,J({nav:t.nav,configs:A,themeConfigs:p(()=>A.themeConfig)})),(l,s)=>{var a;return u(),v("div",{id:n.value,class:"print-slide-container",style:F(r.value)},[g(c(se)),g(c(oe),{is:(a=l.route)==null?void 0:a.component,"clicks-context":l.clicksContext,class:U(c(ae)(l.route)),route:l.route},null,8,["is","clicks-context","class","route"]),i.value?(u(),N(c(i),{key:0,page:+l.route.path},null,8,["page"])):I("v-if",!0),g(c(ce))],12,Tt)}}}),q=S(Yt,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Ct=k({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(e){const t=e,r=p(()=>t.route),i=ee(r),n=P(r.value,0)[1];return(l,s)=>(u(),v(w,null,[g(q,{"clicks-context":c(n),nav:c(i),route:r.value},null,8,["clicks-context","nav","route"]),c(n).disabled?I("v-if",!0):(u(!0),v(w,{key:0},$(c(n).total,a=>(u(),N(q,{key:a,"clicks-context":c(P)(r.value,a)[1],nav:c(i),route:r.value},null,8,["clicks-context","nav","route"]))),128))],64))}}),Pt=S(Ct,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlide.vue"]]),jt={id:"print-content"},Lt=k({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e,r=p(()=>t.width),i=p(()=>t.width/b),n=p(()=>r.value/i.value),l=p(()=>n.value<b?r.value/E:i.value*b/E);let s=re;j.value.query.range&&(s=It(s.length,j.value.query.range).map(m=>s[m-1]));const a=p(()=>({"select-none":!A.selectable}));return R(ne,l),(f,m)=>(u(),v("div",{id:"print-container",class:U(a.value)},[V("div",jt,[(u(!0),v(w,null,$(c(s),x=>(u(),N(Pt,{key:x.path,route:x},null,8,["route"]))),128))]),te(f.$slots,"controls")],2))}}),Mt=S(Lt,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Bt=k({__name:"Print",setup(e){return ie(()=>{L?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,r)=>(u(),v(w,null,[c(L)?(u(),N(fe,{key:0})):I("v-if",!0),V("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:F(c(le))},[g(Mt,{class:"w-full h-full",style:F({background:"var(--slidev-slide-container-background, black)"}),width:c(ue).width.value},null,8,["style","width"])],4)],64))}}),Ut=S(Bt,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Print.vue"]]);export{Ut as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DrawingPreview-D5aveeRY.js","assets/index-mAQWtzlH.js","assets/index-1YfO9JeY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}