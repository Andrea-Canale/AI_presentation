import{d as g,u as I,o as t,c as r,a as e,b as h,e as s,r as z,n as x,f as n,K as E,_ as y,g as M,h as p,w as k,i as f,j as $,s as _,k as u,F as N,l as A,m as B,p as O,q as C,t as P,v as R,x as T,y as U,z as H,A as L}from"./index-mAQWtzlH.js";import{s as b,a as w,b as V,i as j,c as D,w as F,d as G,e as K}from"./bottom-KPbGttJ7.js";import{S as W,G as q,r as X,a as Y,b as J,N as Q}from"./SlidesShow-DlWrWO7R.js";import{P as Z}from"./PrintStyle-CP0f5e-C.js";import"./DrawingPreview-D5aveeRY.js";const ee="/AI_presentation/assets/logo-BYkHSa_O.png",oe={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,o=I(i,"modelValue",a);function l(){o.value=!1}return(d,v)=>(t(),r(E,null,[e(o)?(t(),h("div",oe,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:v[0]||(v[0]=S=>l())}),s("div",{class:x(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[z(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se=y(le,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],ie=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),$("dev ")])])],-1),ne=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const o=I(c,"modelValue",a),l=M(()=>typeof p.info=="string");return(d,v)=>(t(),r(se,{modelValue:e(o),"onUpdate:modelValue":v[0]||(v[0]=S=>f(o)?o.value=S:null),class:"px-6 py-4"},{default:k(()=>[s("div",te,[l.value?(t(),h("div",{key:0,class:"mb-4",innerHTML:e(p).info},null,8,ae)):n("v-if",!0),ie])]),_:1},8,["modelValue"]))}}),re=y(ne,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),de=g({__name:"Controls",setup(c){const a=_(),i=_();return(m,o)=>(t(),h(N,null,[u(W,{modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=l=>f(b)?b.value=l:null)},null,8,["modelValue"]),u(q),a.value?(t(),r(e(a),{key:0})):n("v-if",!0),i.value?(t(),r(e(i),{key:1,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=l=>f(w)?w.value=l:null)},null,8,["modelValue"])):n("v-if",!0),e(p).info?(t(),r(re,{key:2,modelValue:e(V),"onUpdate:modelValue":o[2]||(o[2]=l=>f(V)?V.value=l:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),ue=y(de,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ce=g({__name:"Play",setup(c){X();const a=A();function i(l){var d;D.value||((d=l.target)==null?void 0:d.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?T():U())}B(a);const m=M(()=>j.value||D.value);_();const o=_();return O(()=>import("./DrawingControls-C08915zm.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(l=>o.value=l.default),(l,d)=>(t(),h(N,null,[e(C)?(t(),r(Z,{key:0})):n("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:a,class:x(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"]),style:P(e(R))},[u(Y,{class:"w-full h-full",style:P({background:"var(--slidev-slide-container-background, black)"}),width:e(C)?e(F).width.value:void 0,scale:e(G),"is-main":!0,onPointerdown:i},{default:k(()=>[u(J,{"render-context":"slide"})]),controls:k(()=>[s("div",{class:x(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(H)?"pointer-events-none":""]])},[u(Q,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(p).drawings.presenterOnly&&!e(L)&&o.value?(t(),r(e(o),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],6),u(ue)],64))}}),ge=y(ce,[["__file","/opt/hostedtoolcache/node/18.19.0/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Play.vue"]]);export{ge as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DrawingControls-C08915zm.js","assets/index-mAQWtzlH.js","assets/index-1YfO9JeY.css","assets/SlidesShow-DlWrWO7R.js","assets/bottom-KPbGttJ7.js","assets/DrawingPreview-D5aveeRY.js","assets/SlidesShow-FbyslzQW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
