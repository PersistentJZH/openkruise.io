"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2762],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return f}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6328:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(5488),l=a(5162),s=["components"],u={},c="End to End Canary Release",p={unversionedId:"user-manuals/strategy-end2end-canary-update",id:"user-manuals/strategy-end2end-canary-update",title:"End to End Canary Release",description:"End to End Canary Release Process",source:"@site/rollouts/user-manuals/strategy-end2end-canary-update.md",sourceDirName:"user-manuals",slug:"/user-manuals/strategy-end2end-canary-update",permalink:"/rollouts/user-manuals/strategy-end2end-canary-update",draft:!1,tags:[],version:"current",lastUpdatedBy:"Zhen Zhang",lastUpdatedAt:1719897482,formattedLastUpdatedAt:"7/2/2024",frontMatter:{}},d={},f=[{value:"End to End Canary Release Process",id:"end-to-end-canary-release-process",level:2},{value:"Common gateway Configuration",id:"common-gateway-configuration",level:2},{value:"Rollout Configuration",id:"rollout-configuration",level:2},{value:"Behavior Explanation",id:"behavior-explanation",level:3}],m={toc:f};function g(e){var n=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"end-to-end-canary-release"},"End to End Canary Release"),(0,o.kt)("h2",{id:"end-to-end-canary-release-process"},"End to End Canary Release Process"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ab",src:a(8440).Z,width:"475",height:"512"})),(0,o.kt)("p",null,"End to end canary release is a special kind of canary release. In such canary release, multiple applications in a micro-service system share a common traffic gateway, and the canary replicas of upstream application will pass the traffic to the downstream applications, so that the request will remain in the canary enviroment if available. The end to end canary enviroment is often called traffic swimlane. In such traffic swimlane, requests will go to the replicas of stable version if no canary replicas is available, and go back to canary environment if canary replicas are available again. End to end canary release is often utilized to conduct business evaluation that requires the cooperation of multiple applications.  "),(0,o.kt)("p",null,"The usage of end to end canary release can be illustrated using a simple sample system (gateway -> spring-cloud-a -> spring-cloud-b), that is, the requests will be admited by the gateway, and the gateway will pass the traffic first to ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-a"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-a")," will invoke the downstream ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-b"),". "),(0,o.kt)("h2",{id:"common-gateway-configuration"},"Common gateway Configuration"),(0,o.kt)("p",null,"Since gateway configuration is shared by multiple applications. The gateway is configured outside of the rollout. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"\napiVersion: rollouts.kruise.io/v1alpha1\nkind: TrafficRouting\nmetadata:\n  name: mse-traffic\nspec:\n  objectRef:\n  - service: spring-cloud-a\n    ingress:\n      classType: mse\n      name: spring-cloud-a\n  strategy:\n    matches:\n   # optional A/B Testing setting\n    - headers:\n      - type: Exact\n        name: User-Agent\n        value: foo\n   # gray environment will receive 30% traffic \n   #  weight: 20\n    # optional request head modification\n    requestHeaderModifier:\n      set:\n      - name: x-mse-tag\n        value: gray\n")),(0,o.kt)("h2",{id:"rollout-configuration"},"Rollout Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: v1beta1 available from Kruise Rollout v0.5.0.")),(0,o.kt)("p",null,"Rollout configuration of multiple applications can share the same traffic routing by referring the traffic routing config name using ",(0,o.kt)("inlineCode",{parentName:"p"},"trafficRoutingRef")," field or the ",(0,o.kt)("inlineCode",{parentName:"p"},"rollouts.kruise.io/trafficrouting")," annotation. In addition, the canary replicas can have different configuration with the normal replicas by changing the metadata of canary replicas using patchPodTemplateMetadata field. The service discovery implementation e.g. micro-service engine or service mesh can utilize the metadata information to guide traffic to different downstream applications accordingly."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"# a rollout configuration\napiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollout-a\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: spring-cloud-a\n  strategy:\n    canary:\n      steps:\n      - pause: {}\n        replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          alicloud.service.tag: gray\n          opensergo.io/canary-gray: gray\n      trafficRoutingRef: mse-traffic      \n---\n# b rollout configuration\napiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollout-b\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: spring-cloud-b\n  strategy:\n    canary:\n      steps:\n        - pause: {}\n          replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          alicloud.service.tag: gray\n          opensergo.io/canary-gray: gray\n      trafficRoutingRef: mse-traffic\n"))),(0,o.kt)(l.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"# a rollout configuration\napiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollout-a\n  annotations:\n    rollouts.kruise.io/trafficrouting: mse-traffic\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: spring-cloud-a\n  strategy:\n    canary:\n      steps:\n      - pause: {}\n        replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          alicloud.service.tag: gray\n          opensergo.io/canary-gray: gray\n---\n# b rollout configuration\napiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollout-b\n  annotations:\n    rollouts.kruise.io/trafficrouting: mse-traffic\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: spring-cloud-b\n  strategy:\n    canary:\n      steps:\n        - pause: {}\n          replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          alicloud.service.tag: gray\n          opensergo.io/canary-gray: gray\n")))),(0,o.kt)("h3",{id:"behavior-explanation"},"Behavior Explanation"),(0,o.kt)("p",null,"When you apply a new revision for ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-a"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The native rolling update of workload ",(0,o.kt)("inlineCode",{parentName:"li"},"spring-cloud-a")," will be paused to ensure the stable replicas is still available during the canary release."),(0,o.kt)("li",{parentName:"ul"},"A new canary Deployment will be created with 1 replica, and the replica will have additional labels ",(0,o.kt)("inlineCode",{parentName:"li"},"alicloud.service.tag: gray")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"opensergo.io/canary-gray: gray")),(0,o.kt)("li",{parentName:"ul"},"Traffic with header ",(0,o.kt)("inlineCode",{parentName:"li"},"User-Agent=foo")," will be routed to the new canary Deployment pod, in addition an extra header ",(0,o.kt)("inlineCode",{parentName:"li"},"x-mse-tag=gray")," is added to help. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spring-cloud-a")," will invoke the canary replicas of downstream application spring-cloud-b if available, and will invoke the stable replicas if no canary spring-cloud-b exists. Note that, this step requires the support of service discovery implementation. ")),(0,o.kt)("p",null,"When you thought the verification of canary is ok, and confirmed to next step:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The workload ",(0,o.kt)("inlineCode",{parentName:"li"},"spring-cloud-a")," will be upgraded using native rolling update strategy;"),(0,o.kt)("li",{parentName:"ul"},"The traffic will be restored to native load balance strategy."),(0,o.kt)("li",{parentName:"ul"},"The canary Deployment and Pods will be deleted.")))}g.isMDXComponent=!0},5162:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),r=a(6010),o="tabItem_Ymn6";function i(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},n)}},5488:function(e,n,a){a.d(n,{Z:function(){return f}});var t=a(7462),r=a(7294),o=a(6010),i=a(2389),l=a(7392),s=a(7094),u=a(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,a,i=e.lazy,d=e.block,f=e.defaultValue,m=e.values,g=e.groupId,y=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(n=null!=f?f:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?n:v[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,E=(0,r.useState)(k),C=E[0],R=E[1],O=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=N[g];null!=P&&P!==C&&h.some((function(e){return e.value===P}))&&R(P)}var j=function(e){var n=e.currentTarget,a=O.indexOf(n),t=h[a].value;t!==C&&(x(n),R(t),null!=g&&T(g,String(t)))},D=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=O.indexOf(e.currentTarget)+1;a=null!=(t=O[r])?t:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;a=null!=(o=O[i])?o:O[O.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var n=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function f(e){var n=(0,i.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},8440:function(e,n,a){n.Z=a.p+"assets/images/e2e-a3b7ceca7d351bf273d13c68e308d374.png"}}]);