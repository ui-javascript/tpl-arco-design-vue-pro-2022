var E=Object.defineProperty,D=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var T=(p,s,n)=>s in p?E(p,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[s]=n,g=(p,s)=>{for(var n in s||(s={}))z.call(s,n)&&T(p,n,s[n]);if(C)for(var n of C(s))G.call(s,n)&&T(p,n,s[n]);return p},N=(p,s)=>D(p,O(s));import{c as Y,_ as S,a as Z}from"./index.96661100.js";/* empty css               *//* empty css               */import{d as V,e as y,A as b,aC as h,aF as a,aG as t,E as A,aM as m,aL as i,bE as q,bH as I,bU as L,bV as B,bZ as H,b0 as w,bG as U,bv as J,bY as K,aU as M,B as j,a_ as Q,b5 as W,aY as X,aV as x,b_ as ee,bO as te,b2 as oe,aD as ae,bn as re,u as le,aJ as se,b$ as ne}from"./arco.7d076223.js";/* empty css               *//* empty css              *//* empty css               */import"./chart.36e67b76.js";import"./vue.900c7ef7.js";function pe(p){return Y.post("/api/channel-form/submit",{data:p})}const ue=i("APP\u901A\u7528\u6E20\u9053"),ie=V({emits:["changeStep"],setup(p,{emit:s}){const n=y(),e=y({activityName:"",channelType:"",promotionTime:[],promoteLink:"https://arco.design"}),_=async()=>{var o;await((o=n.value)==null?void 0:o.validate())||s("changeStep","forward",g({},e.value))};return(l,o)=>{const r=q,u=I,d=L,f=B,$=H,F=w,k=U;return b(),h(k,{ref_key:"formRef",ref:n,model:e.value,class:"form","label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:a(()=>[t(u,{field:"activityName",label:l.$t("stepForm.form.label.activityName"),rules:[{required:!0,message:l.$t("stepForm.form.error.activityName.required")},{match:/^[a-zA-Z0-9\u4e00-\u9fa5]{1,20}$/,message:l.$t("stepForm.form.error.activityName.pattern")}]},{default:a(()=>[t(r,{modelValue:e.value.activityName,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value.activityName=c),placeholder:l.$t("stepForm.placeholder.activityName")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(u,{field:"channelType",label:l.$t("stepForm.form.label.channelType"),rules:[{required:!0,message:l.$t("stepForm.form.error.channelType.required")}]},{default:a(()=>[t(f,{modelValue:e.value.channelType,"onUpdate:modelValue":o[1]||(o[1]=c=>e.value.channelType=c),placeholder:l.$t("stepForm.placeholder.channelType")},{default:a(()=>[t(d,null,{default:a(()=>[ue]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(u,{field:"promotionTime",label:l.$t("stepForm.form.label.promotionTime"),rules:[{required:!0,message:l.$t("stepForm.form.error.promotionTime.required")}]},{default:a(()=>[t($,{modelValue:e.value.promotionTime,"onUpdate:modelValue":o[2]||(o[2]=c=>e.value.promotionTime=c)},null,8,["modelValue"])]),_:1},8,["label","rules"]),t(u,{field:"promoteLink",label:l.$t("stepForm.form.label.promoteLink"),rules:[{required:!0,message:l.$t("stepForm.form.error.promoteLink.required")},{type:"url",message:l.$t("stepForm.form.error.promoteLink.pattern")}],"row-class":"keep-margin"},{help:a(()=>[A("span",null,m(l.$t("stepForm.form.tip.promoteLink")),1)]),default:a(()=>[t(r,{modelValue:e.value.promoteLink,"onUpdate:modelValue":o[3]||(o[3]=c=>e.value.promoteLink=c),placeholder:l.$t("stepForm.placeholder.promoteLink")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(u,null,{default:a(()=>[t(F,{type:"primary",onClick:_},{default:a(()=>[i(m(l.$t("stepForm.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});var me=S(ie,[["__scopeId","data-v-3fedcb7e"]]);const de=i("\u4ECA\u65E5\u5934\u6761"),ce=i("\u706B\u5C71"),fe=V({emits:["changeStep"],setup(p,{emit:s}){const n=y(),e=y({advertisingSource:"",advertisingMedia:"",keyword:[],pushNotify:!0,advertisingContent:""}),_=async()=>{var r;await((r=n.value)==null?void 0:r.validate())||s("changeStep","submit",g({},e.value))},l=()=>{s("changeStep","backward")};return(o,r)=>{const u=q,d=I,f=L,$=B,F=J,k=K,c=w,R=M,P=U;return b(),h(P,{ref_key:"formRef",ref:n,model:e.value,class:"form","label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:a(()=>[t(d,{field:"advertisingSource",label:o.$t("stepForm.form.label.advertisingSource"),rules:[{required:!0,message:o.$t("stepForm.form.error.advertisingSource.required")}]},{default:a(()=>[t(u,{modelValue:e.value.advertisingSource,"onUpdate:modelValue":r[0]||(r[0]=v=>e.value.advertisingSource=v),placeholder:o.$t("stepForm.placeholder.advertisingSource")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(d,{field:"advertisingMedia",label:o.$t("stepForm.form.label.advertisingMedia"),rules:[{required:!0,message:o.$t("stepForm.form.error.advertisingMedia.required")}]},{default:a(()=>[t(u,{modelValue:e.value.advertisingMedia,"onUpdate:modelValue":r[1]||(r[1]=v=>e.value.advertisingMedia=v),placeholder:o.$t("stepForm.placeholder.advertisingMedia")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(d,{field:"keyword",label:o.$t("stepForm.form.label.keyword"),rules:[{required:!0,message:o.$t("stepForm.form.error.keyword.required")}]},{default:a(()=>[t($,{modelValue:e.value.keyword,"onUpdate:modelValue":r[2]||(r[2]=v=>e.value.keyword=v),placeholder:o.$t("stepForm.placeholder.keyword"),multiple:""},{default:a(()=>[t(f,null,{default:a(()=>[de]),_:1}),t(f,null,{default:a(()=>[ce]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(d,{field:"pushNotify",label:o.$t("stepForm.form.label.pushNotify"),rules:[{required:!0}]},{default:a(()=>[t(F,{modelValue:e.value.pushNotify,"onUpdate:modelValue":r[3]||(r[3]=v=>e.value.pushNotify=v)},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{field:"advertisingContent",label:o.$t("stepForm.form.label.advertisingContent"),rules:[{required:!0,message:o.$t("stepForm.form.error.advertisingContent.required")},{maxLength:200,message:o.$t("stepForm.form.error.advertisingContent.maxLength")}],"row-class":"keep-margin"},{default:a(()=>[t(k,{modelValue:e.value.advertisingContent,"onUpdate:modelValue":r[4]||(r[4]=v=>e.value.advertisingContent=v),placeholder:o.$t("stepForm.placeholder.advertisingContent")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(d,null,{default:a(()=>[t(R,null,{default:a(()=>[t(c,{type:"secondary",onClick:l},{default:a(()=>[i(m(o.$t("stepForm.button.prev")),1)]),_:1}),t(c,{type:"primary",onClick:_},{default:a(()=>[i(m(o.$t("stepForm.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});var _e=S(fe,[["__scopeId","data-v-1e0ece46"]]);const ve={class:"success-wrap"},be={class:"details-wrapper"},ge=V({emits:["changeStep"],setup(p,{emit:s}){const n=()=>{s("changeStep",1)};return(e,_)=>{const l=Q,o=w,r=M,u=W,d=X,f=x;return b(),j("div",ve,[t(l,{status:"success",title:e.$t("stepForm.success.title"),subtitle:e.$t("stepForm.success.subTitle")},null,8,["title","subtitle"]),t(r,{size:16},{default:a(()=>[t(o,{key:"view",type:"primary"},{default:a(()=>[i(m(e.$t("stepForm.button.view")),1)]),_:1}),t(o,{key:"again",type:"secondary",onClick:n},{default:a(()=>[i(m(e.$t("stepForm.button.again")),1)]),_:1})]),_:1}),A("div",be,[t(u,{heading:6,style:{"margin-top":"0"}},{default:a(()=>[i(m(e.$t("stepForm.form.description.title")),1)]),_:1}),t(f,{style:{"margin-bottom":"0"}},{default:a(()=>[i(m(e.$t("stepForm.form.description.text"))+" ",1),t(d,{href:"link"},{default:a(()=>[i(m(e.$t("stepForm.button.view")),1)]),_:1})]),_:1})])])}}});var ye=S(ge,[["__scopeId","data-v-25e73cea"]]);const he={class:"container"},$e={class:"wrapper"},Fe={name:"Step"},ke=V(N(g({},Fe),{setup(p){const{loading:s,setLoading:n}=Z(!1),e=y(1),_=y({}),l=async()=>{n(!0);try{await pe(_.value),e.value=3,_.value={}}catch{}finally{n(!1)}},o=(r,u)=>{if(typeof r=="number"){e.value=r;return}if(r==="forward"||r==="submit"){if(_.value=g(g({},_.value),u),r==="submit"){l();return}e.value+=1}else r==="backward"&&(e.value-=1)};return(r,u)=>{const d=se("Breadcrumb"),f=ne,$=ee,F=te,k=oe;return b(),j("div",he,[t(d,{items:["menu.form","menu.form.step"]},null,8,["items"]),t(k,{loading:le(s),style:{width:"100%"}},{default:a(()=>[t(F,{class:"general-card"},{title:a(()=>[i(m(r.$t("stepForm.step.title")),1)]),default:a(()=>[A("div",$e,[t($,{current:e.value,"onUpdate:current":u[0]||(u[0]=c=>e.value=c),style:{width:"580px"},"line-less":"",class:"steps"},{default:a(()=>[t(f,{description:r.$t("stepForm.step.subTitle.baseInfo")},{default:a(()=>[i(m(r.$t("stepForm.step.title.baseInfo")),1)]),_:1},8,["description"]),t(f,{description:r.$t("stepForm.step.subTitle.channel")},{default:a(()=>[i(m(r.$t("stepForm.step.title.channel")),1)]),_:1},8,["description"]),t(f,{description:r.$t("stepForm.step.subTitle.finish")},{default:a(()=>[i(m(r.$t("stepForm.step.title.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(b(),h(re,null,[e.value===1?(b(),h(me,{key:0,onChangeStep:o})):e.value===2?(b(),h(_e,{key:1,onChangeStep:o})):e.value===3?(b(),h(ye,{key:2,onChangeStep:o})):ae("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}}));var Be=S(ke,[["__scopeId","data-v-42294eca"]]);export{Be as default};
