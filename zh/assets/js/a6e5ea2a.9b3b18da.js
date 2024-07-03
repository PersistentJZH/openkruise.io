"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[763],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={},u="\u4f7f\u7528Lua\u811a\u672c\u81ea\u5b9a\u4e49\u6d41\u91cf\u8def\u7531",s={unversionedId:"developer-manuals/custom-network-provider",id:"developer-manuals/custom-network-provider",title:"\u4f7f\u7528Lua\u811a\u672c\u81ea\u5b9a\u4e49\u6d41\u91cf\u8def\u7531",description:"FEATURE STATE: Kruise Rollout v0.5.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs-rollouts/current/developer-manuals/custom-network-provider.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/custom-network-provider",permalink:"/zh/rollouts/developer-manuals/custom-network-provider",draft:!1,tags:[],version:"current",lastUpdatedBy:"Zhen Zhang",lastUpdatedAt:1708579440,formattedLastUpdatedAt:"2024/2/22",frontMatter:{},sidebar:"rollouts",previous:{title:"\u5168\u94fe\u8def\u7070\u5ea6",permalink:"/zh/rollouts/user-manuals/strategy-end2end-canary-update"},next:{title:"\u4f7f\u7528Istio\u4f5c\u6d41\u91cf\u8def\u7531",permalink:"/zh/rollouts/best-practices/traffic-routing-istio-api"}},p={},c=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5982\u4f55\u5b9a\u4e49\u60a8\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173Lua \u811a\u672c",id:"\u5982\u4f55\u5b9a\u4e49\u60a8\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173lua-\u811a\u672c",level:2},{value:"\u65b9\u6cd51\uff1a\u4f7f\u7528Kruise Rollout\u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c",id:"\u65b9\u6cd51\u4f7f\u7528kruise-rollout\u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c",level:3},{value:"\u6d4b\u8bd5\u6848\u4f8b\u9700\u8981\u8986\u76d6\u7684\u573a\u666f",id:"\u6d4b\u8bd5\u6848\u4f8b\u9700\u8981\u8986\u76d6\u7684\u573a\u666f",level:4},{value:"\u65b9\u6cd52: \u5728ConfigMap\u4e2d\u5b9a\u4e49Lua\u811a\u672c",id:"\u65b9\u6cd52-\u5728configmap\u4e2d\u5b9a\u4e49lua\u811a\u672c",level:3},{value:"\u7f16\u5199\u81ea\u5df1\u7684\u6d41\u91cf\u7f51\u5173Lua\u811a\u672c\u6765\u63a7\u5236\u6d41\u91cf\u8def\u7531",id:"\u7f16\u5199\u81ea\u5df1\u7684\u6d41\u91cf\u7f51\u5173lua\u811a\u672c\u6765\u63a7\u5236\u6d41\u91cf\u8def\u7531",level:2},{value:"Lua \u8bed\u6cd5",id:"lua-\u8bed\u6cd5",level:3},{value:"Lua \u6570\u636e\u7c7b\u578bs",id:"lua-\u6570\u636e\u7c7b\u578bs",level:4},{value:"Lua Table",id:"lua-table",level:4},{value:"\u516c\u5171\u51fd\u6570",id:"\u516c\u5171\u51fd\u6570",level:4},{value:"\u5904\u7406\u7f51\u5173\u8d44\u6e90",id:"\u5904\u7406\u7f51\u5173\u8d44\u6e90",level:3},{value:"\u8c03\u8bd5\u60a8\u7684Lua Script",id:"\u8c03\u8bd5\u60a8\u7684lua-script",level:3}],m={toc:c};function d(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528lua\u811a\u672c\u81ea\u5b9a\u4e49\u6d41\u91cf\u8def\u7531"},"\u4f7f\u7528Lua\u811a\u672c\u81ea\u5b9a\u4e49\u6d41\u91cf\u8def\u7531"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise Rollout v0.5.0"),(0,r.kt)("p",null,"Kruise Rollout \u5229\u7528\u4e00\u79cd\u57fa\u4e8eLua\u811a\u672c\u7684\u5b9a\u5236\u65b9\u6cd5\uff0c\u7528\u6765\u63a7\u5236",(0,r.kt)("strong",{parentName:"p"},"\u6d41\u91cf\u7f51\u5173\u8d44\u6e90(\u4f8b\u5982Istio\u7684VirtualService, Apisix\u7684ApisixRoute, Kuma\u7684Traffic Route\u7b49)"),"\u3002Kruise Rollout \u4f1a\u6839\u636e\u53d1\u5e03\u7b56\u7565\u4ee5\u53ca\u6d41\u91cf\u7f51\u5173\u7684\u539f\u59cb\u914d\u7f6e\uff0c\u901a\u8fc7\u8c03\u7528Lua\u811a\u672c\u6765\u83b7\u53d6\u548c\u66f4\u65b0\u671f\u671b\u7684\u6d41\u91cf\u8def\u7531\u914d\u7f6e\u3002\u8fd9\u79cd\u673a\u5236\u8ba9\u7528\u6237\u53ef\u4ee5\u5c06\u5404\u79cd\u6d41\u91cf\u7f51\u5173\u5b9e\u73b0\u9002\u914d\u5230Kruise Rollout\u4e2d, \u800c\u4e0d\u9700\u8981\u4fee\u6539\u73b0\u6709\u7684Kruise\u4ee3\u7801\u3002 "),(0,r.kt)("p",null,"\u56e0\u4e3aKruise Rollout \u4e5f\u652f\u6301\u4f7f\u7528Gateway API \u6765\u6307\u5b9a\u6d41\u91cf\u8def\u7531\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6d41\u91cf\u7f51\u5173\u5bf9\u5e94\u7684Gateway API\u3002 \u7136\u800c\uff0c\u5b9e\u73b0\u4e00\u4e2a\u5b8c\u6574\u7684Gateway API\u5de5\u4f5c\u91cf\u5f88\u5927\uff0c \u5373\u4f7f\u5bf9\u4e8e\u63d0\u4f9b\u4e86K8s CRD\u7684\u63a5\u53e3Gateway API \u63d0\u4f9b\u5546\uff0c\u5f88\u591a\u4e5f\u6ca1\u6709\u63d0\u4f9b\u5bf9\u5e94\u7684Gateway API \u5b9e\u73b0\u7248\u672c\u3002\u901a\u8fc7Lua\u811a\u672c\uff0c \u7528\u6237\u53ef\u4ee5\u4e3a\u4efb\u610f\u7684\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u6765\u6765\u914d\u7f6e\u6d41\u91cf\u8def\u7531\uff0c \u907f\u514d\u4e86\u5f15\u5165Gateway API \u5b9e\u73b0\u7684\u590d\u6742\u6027\u3002 "),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("img",{src:n(664).Z}),(0,r.kt)("p",null,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u7684\u53d1\u5e03\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u5b9a\u4e49\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u6d41\u91cf\u8def\u7531\u89c4\u5219\uff0c \u4ee5\u53ca\u9700\u8981\u4fee\u6539\u7684\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\uff0c\u4ece\u800c\u53d1\u8d77\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ol"},"Kruise Rollout \u6839\u636eRollout\u5bf9\u8c61\u7684\u914d\u7f6e\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684\u6d41\u91cf\u7f51\u5173\u8d44\u6e90, \u4ee5\u53ca\u5173\u8054\u7684Lua\u811a\u672c"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u53d1\u5e03\u5f00\u59cb\u65f6\uff0c Kruise Rollout\u9996\u5148\u628a\u5f53\u524d\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684\u914d\u7f6e\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff0c \u5e76\u4fdd\u5b58\u5728\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"rollouts.kruise.io/original-spec-configuration")),(0,r.kt)("li",{parentName:"ol"},"\u628aRollout\u914d\u7f6e\u4ee5\u53ca\u5bf9\u5e94\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684\u914d\u7f6e\u4f5c\u4e3a\u8f93\u5165\uff0c \u4f20\u9012\u7ed9\u7528\u6237\u914d\u7f6e\u7684Lua\u811a\u672c\uff0cLua\u811a\u672c\u4f1a\u4ea7\u751f\u65b0\u7684\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u914d\u7f6e, \u5e76\u7531Kruise Rolout\u66f4\u65b0\u5230k8s\u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u53d1\u5e03\u5b8c\u6210\u540e\uff0c \u4ece\u7f51\u5173\u8d44\u6e90\u7684annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"rollouts.kruise.io/original-spec-configuration")," \u4e2d\u83b7\u53d6\u539f\u6709\u7684\u7f51\u5173\u8d44\u6e90\u914d\u7f6e\uff0c \u5e76\u6062\u590d\u914d\u7f6e\u5230k8s\u4e2d\u3002 ")),(0,r.kt)("p",null,"\u5728Rollout\u8d44\u6e90\u4e2d\uff0c \u81ea\u5b9a\u4e49\u6d41\u91cf\u8def\u7531\u89c4\u5219\u53ef\u4ee5\u6309\u5982\u4e0b\u683c\u5f0f\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\n...\nspec:\n  strategy:\n    canary:\n      trafficRoutings:\n      - service: <stable-service>\n        customNetworkRefs:\n        - apiVersion: <your-resource-apiVersion>\n          kind: <your-resource-kind>\n          name: <your-resource-name>\n")),(0,r.kt)("p",null,"API \u5b57\u6bb5\u7684\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4e0b::"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customNetworkRefs")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.apiVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684API\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.kind")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684API\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customNetworkRefs.name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684\u540d\u5b57")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u5b9a\u4e49\u60a8\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173lua-\u811a\u672c"},"\u5982\u4f55\u5b9a\u4e49\u60a8\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173Lua \u811a\u672c"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c:"),(0,r.kt)("h3",{id:"\u65b9\u6cd51\u4f7f\u7528kruise-rollout\u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c"},"\u65b9\u6cd51\uff1a\u4f7f\u7528Kruise Rollout\u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u8d21\u732e\u60a8\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u7684Lua\u811a\u672c\u5230\u793e\u533a\uff0c \u4e00\u65e6\u901a\u8fc7\u4e86\u76f8\u5173\u6d4b\u8bd5\u5e76\u88ab\u793e\u533a\u63a5\u53d7\u4e3a\u5185\u7f6e\u7684\u6d41\u91cf\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c\uff0c Lua\u811a\u672c\u4f1a\u548cKruise Rollout\u6253\u5305\u5728\u4e00\u8d77\u3002\u8fd9\u79cd\u811a\u672c\u53ef\u4ee5\u76f4\u63a5\u5728Rollout\u4e2d\u4f7f\u7528\uff1a"),(0,r.kt)("p",null,"Kruise Rollout \u9ed8\u8ba4\u4f1a\u8c03\u7528\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"rollouts/lua_configuration")," \u76ee\u5f55\u7684Lua\u811a\u672c\u3002 \u8fd9\u4e9b\u5185\u7f6e\u7684Lua\u811a\u672c\u9700\u8981\u9075\u5faa\u5982\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"rollouts\n|-- lua_configuration\n|    |-- your.crd.group.io                    # CRD group\n|    |    |-- MyKind                          # Resource kind\n|    |    |    |-- trafficRouting.lua         # Custom traffic routing Lua script\n|    |    |    |-- testdata                   # Directory with test resource YAML definitions\n|        |      |        |      |-- test_case1.yaml       # Lua script test case\n|        |      |        |      |-- test_case2.yaml       # Lua script test case\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trafficRouting.lua")," \u5b9a\u4e49\u4e86\u5904\u7406\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u7684Lua\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testdata")," \u76ee\u5f55\u5b9a\u4e49\u4e86\u6d4b\u8bd5\u7684\u76ee\u5f55\uff0c\u6d4b\u8bd5\u76ee\u5f55\u4e2d\u6bcf\u4e2ayaml\u6587\u4ef6\u5305\u542b\u4e86\u5177\u4f53\u7684\u6d4b\u8bd5\u6848\u4f8b\uff0c YAML\u6587\u4ef6\u7684\u683c\u5f0f\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rollout:\n    # Rollout\u8d44\u6e90\u914d\u7f6e\ntrafficRouting:\n        # \u5355\u72ec\u7684trafficRouting\u8d44\u6e90\u914d\u7f6e\u3010\u53ef\u9009\u3011\noriginal:\n    # \u539f\u6709\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u914d\u7f6e\nexpected:\n    # \u91d1\u4e1d\u96c0\u8fc7\u7a0b\u4e2d\uff0c\u6d41\u91cf\u8def\u7531\u4fee\u6539\u540e\uff0c\u671f\u671b\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u914d\u7f6e\uff08\u6bcf\u4e2a\u91d1\u4e1d\u96c0\u6b65\u9aa4\u4e00\u4e2a\u914d\u7f6e\uff09\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u811a\u672c\u5fc5\u987b\u63d0\u4f9b\u6d4b\u8bd5\u6848\u4f8b\uff0c\u5e76\u901a\u8fc7\u6d4b\u8bd5\u6765\u8bc1\u660e\u5176\u53ef\u5de5\u4f5c")," \u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5904\u7406Istio\u6d41\u91cf\u7f51\u5173\u8d44\u6e90(",(0,r.kt)("inlineCode",{parentName:"p"},"networking.istio.io/VirtualService"),")\u7684\u811a\u672c\u6d4b\u8bd5\u6848\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rollout:\n  apiVersion: rollouts.kruise.io/v1beta1\n  kind: Rollout\n  metadata:\n    name: rollouts-demo\n  spec:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: deploy-demo\n    strategy:\n      canary:\n        enableExtraWorkloadForCanary: true\n        steps:\n        - matches:\n          - headers:\n            - type: Exact\n              name: user-agent\n              value: pc\n            - type: RegularExpression\n              name: name\n              value: ".*demo"\n        - matches:\n          - headers:\n            - type: Exact\n              name: user-agent\n              value: pc\n          - headers:\n            - type: RegularExpression\n              name: name\n              value: ".*demo"\n        - traffic: 50%\n          replicas: 50%\n        trafficRoutings:\n        - service: svc-demo\n          customNetworkRefs:\n          - apiVersion: networking.istio.io/v1alpha3\n            kind: VirtualService\n            name: vs-demo\noriginal:\n  apiVersion: networking.istio.io/v1alpha3\n  kind: VirtualService\n  metadata:\n    name: vs-demo\n  spec:\n    hosts:\n    - "*"\n    gateways:\n    - nginx-gateway\n    http:\n    - route:\n      - destination:\n          host: svc-demo\nexpected:\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - match:\n        - headers:\n            user-agent:\n              exact: pc\n            name:\n              regex: .*demo\n        route:\n        - destination:\n            host: svc-demo-canary\n      - route:\n        - destination:\n            host: svc-demo\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - match:\n        - headers:\n            name:\n              regex: .*demo\n        route:\n        - destination:\n            host: svc-demo-canary\n      - match:\n        - headers:\n            user-agent:\n              exact: pc\n        route:\n        - destination:\n            host: svc-demo-canary\n      - route:\n        - destination:\n            host: svc-demo\n  - apiVersion: networking.istio.io/v1alpha3\n    kind: VirtualService\n    metadata:\n      name: vs-demo\n    spec:\n      hosts:\n      - "*"\n      gateways:\n      - nginx-gateway\n      http:\n      - route:\n        - destination:\n            host: svc-demo\n          weight: 50\n        - destination:\n            host: svc-demo-canary\n          weight: 50\n')),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -v ./pkg/trafficrouting/network/customNetworkProvider/")," \u6765\u9a8c\u8bc1\u5185\u7f6e\u7684Lua\u811a\u672c\u662f\u5426\u6309\u9884\u671f\u6765\u5de5\u4f5c\u3002 \u5177\u4f53\u7684\uff0c Kruise Rollout\u4f1a\u904d\u5386",(0,r.kt)("inlineCode",{parentName:"p"},"./lua_configuration")," \u76ee\u5f55\u6765\u83b7\u53d6\u81ea\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u7684Lua\u811a\u672c\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u6d4b\u8bd5\u6848\u4f8b\u3002 Kruise Rollout \u4f1a\u5c06Rollout\u914d\u7f6e\uff0c\u4ee5\u53ca\u6d41\u91cf\u7f51\u5173\u7684\u914d\u7f6e\u4f20\u9012\u7ed9Lua\u811a\u672c\uff0c\u5e76\u9a8c\u8bc1Lua\u811a\u672c\u7684\u8f93\u51fa\u7b26\u5408\u5b9a\u4e49\u7684\u9884\u671f\u7ed3\u679c(expected)"),(0,r.kt)("img",{src:n(8526).Z}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkruise/rollouts/pull/178"},"PR#178"),"\u4e2d\u5305\u62ec\u4e86Istio VirtualService\u7684\u5177\u4f53\u4f8b\u5b50"),(0,r.kt)("h4",{id:"\u6d4b\u8bd5\u6848\u4f8b\u9700\u8981\u8986\u76d6\u7684\u573a\u666f"},"\u6d4b\u8bd5\u6848\u4f8b\u9700\u8981\u8986\u76d6\u7684\u573a\u666f"),(0,r.kt)("p",null,"\u5728\u8bbe\u8ba1\u5355\u6d4b\u6848\u4f8b\u65f6, \u81f3\u5c11\u9700\u8981\u8003\u8651\u5982\u4e0b\u4e09\u79cd\u53d1\u5e03\u573a\u666f:"),(0,r.kt)("p",null,"When designing test cases, at least the release strategies listed below are supposed to be considered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A/B \u6d4b\u8bd5\uff0c\u4e5f\u5c31\u662f\u7070\u5ea6\u89c4\u5219\u4e2d\u5305\u62ec\u4e86http\u5934\u7684\u5339\u914d\u89c4\u5219, \u4e14\u5339\u914d\u89c4\u5219\u5b9a\u4e49\u5728\u4e00\u4e2aheaders\u5b57\u6bb5\u4e2d\uff08\u89c4\u5219\u9700\u8981ANDed)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# spec.strategy.canary.steps:\n- matches:\n  - headers:\n    - type: Exact\n      name: user-agent\n      value: pc\n    - type: RegularExpression\n      name: name\n      value: ".*demo"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A/B \u6d4b\u8bd5\uff0c\u4e5f\u5c31\u662f\u7070\u5ea6\u89c4\u5219\u4e2d\u5305\u62ec\u4e86http\u5934\u7684\u5339\u914d\u89c4\u5219, \u4e14\u5339\u914d\u89c4\u5219\u5b9a\u4e49\u5728\u591a\u4e2aheaders\u5b57\u6bb5\u4e2d\uff08\u89c4\u5219\u9700\u8981ORed)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# spec.strategy.canary.steps:\n- matches:\n  - headers:\n    - type: Exact\n      name: user-agent\n      value: pc\n  - headers:\n    - type: RegularExpression\n      name: name\n      value: ".*demo"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u89c1")," ",(0,r.kt)("a",{parentName:"p",href:"https://openkruise.io/zh/rollouts/user-manuals/api-specifications"},"API\u5b9a\u4e49")," ",(0,r.kt)("strong",{parentName:"p"},"\u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8fd9\u4e24\u79cd\u53d1\u5e03\u573a\u666f\u7684\u5dee\u5f02")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91d1\u4e1d\u96c0\u53d1\u5e03\uff0c\u4e14\u4e0d\u5305\u542bhttp\u5934\u5339\u914d\u89c4\u5219\uff0c \u6d41\u91cf\u6309\u4e00\u5b9a\u7684\u6bd4\u4f8b\u8def\u7531\u5230\u91d1\u4e1d\u96c0\u670d\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# spec.strategy.canary.steps:\n- traffic: 20%\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Special Note:")," By default, traffic routing strategies defined in Rollout will create a new canary for new pods, while TrafficRouting will not.")),(0,r.kt)("h3",{id:"\u65b9\u6cd52-\u5728configmap\u4e2d\u5b9a\u4e49lua\u811a\u672c"},"\u65b9\u6cd52: \u5728ConfigMap\u4e2d\u5b9a\u4e49Lua\u811a\u672c"),(0,r.kt)("p",null,"\u5f53\u6d41\u91cf\u7f51\u5173\u5bf9\u5e94\u7684Lua\u811a\u672c\u6ca1\u6709\u5185\u7f6e\u5728Kruise Rollout\u4e2d\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5229\u7528ConfigMap\u6765\u5b9a\u4e49\u6d41\u91cf\u7f51\u5173\u7684Lua\u811a\u672c\u3002 \u7279\u522b\u7684\uff0c \u6d41\u91cf\u7f51\u5173\u7684Lua\u811a\u672c\u53ef\u4ee5\u5728 ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"kruise-rollout/kruise-rollout-configuration")," \u7684\u5982\u4e0b\u5b57\u6bb5\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"<lua.traffic.routing.Kind.CRDGroup>: |\n# \u8fd9\u91cc\u5199\u81ea\u5b9a\u4e49Lua\u811a\u672c\u7684\u5b57\u7b26\u4e32\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5b9a\u4e49Istio\u6d41\u91cf\u7f51\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"networking.istio.io/DestinationRule"),"\u7684\u5bf9\u5e94Lua\u811a\u672c\uff0c\u7c7b\u4f3c\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728Configmap\u4e2d\uff0c \u7ed9\u5176\u4ed6\u6d41\u91cf\u7f51\u5173\u8d44\u6e90\u6765\u5b9a\u4e49Lua\u811a\u672c\uff0c\u4f8b\u5982Apisix\u3001Kuma.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  "lua.traffic.routing.DestinationRule.networking.istio.io": |\n    local spec = obj.data.spec\n    local canary = {}\n    canary.labels = {}\n    canary.name = "canary"\n    local podLabelKey = "istio.service.tag"\n    canary.labels[podLabelKey] = "gray\n    table.insert(spec.subsets, canary)\n    return obj.data\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679cKruise Rollout\u5728\u5185\u7f6e\u7684\u6d41\u91cf\u7f51\u5173\u4e2d\u627e\u4e0d\u5230\u5bf9\u5e94\u7684Lua\u811a\u672c\uff0c\u5c31\u4f1a\u8bd5\u56fe\u4eceConfigmap\u4e2d\u8bfb\u53d6\u5bf9\u5e94\u811a\u672c")),(0,r.kt)("h2",{id:"\u7f16\u5199\u81ea\u5df1\u7684\u6d41\u91cf\u7f51\u5173lua\u811a\u672c\u6765\u63a7\u5236\u6d41\u91cf\u8def\u7531"},"\u7f16\u5199\u81ea\u5df1\u7684\u6d41\u91cf\u7f51\u5173Lua\u811a\u672c\u6765\u63a7\u5236\u6d41\u91cf\u8def\u7531"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u90e8\u5206\u4f1a\u4ecb\u7ecdLua\u7684\u4e00\u4e9b\u76f8\u5173\u8bed\u6cd5\uff0c\u4ee5\u53ca\u5982\u4f55\u7f16\u5199\u548c\u8c03\u8bd5\u63a7\u5236\u6d41\u91cf\u8def\u7531\u7684Lua\u811a\u672c"),(0,r.kt)("h3",{id:"lua-\u8bed\u6cd5"},"Lua \u8bed\u6cd5"),(0,r.kt)("h4",{id:"lua-\u6570\u636e\u7c7b\u578bs"},"Lua \u6570\u636e\u7c7b\u578bs"),(0,r.kt)("p",null,"Lua \u4e2d\u6709\u51e0\u79cd\u5e38\u89c1\u7684\u6570\u636e\u7c7b\u578b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),": \u4ee3\u8868\u5e03\u5c14\u7c7b\u578b\u7684\u6570\u636e\uff0c \u4f8b\u5982 true \u6216\u8005 false\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number"),": \u4ee3\u8868\u6574\u6570\u6216\u6574\u6570\u7684\u6570\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String"),": \u4ee3\u8868\u6587\u672c\u6570\u636e\uff0c \u8be5\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u5355\u5f15\u53f7\u6216\u8005\u53cc\u5f15\u53f7\u6765\u5305\u62ec\u3002  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Table"),": Lua\u4e2d\u6700\u91cd\u8981\u7684\u6570\u636e\u7ed3\u679c\uff0c \u53ef\u4ee5\u7528\u6765\u8868\u793a\u5173\u8054\u6570\u7ec4\u3001\u5217\u8868\u3001\u96c6\u5408\u4ee5\u53ca\u5176\u4ed6\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Function"),": \u4ee3\u8868\u53ef\u6267\u884c\u7684\u4ee3\u7801\u5757\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u6570\u503c\u53ef\u4ee5\u88ab\u8c03\u7528\uff0c\u6216\u8005\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5176\u4ed6\u51fd\u6570\u3002")),(0,r.kt)("h4",{id:"lua-table"},"Lua Table"),(0,r.kt)("p",null,"Lua\u4e2d\u7684table\u7c7b\u578b\u7528\u6765\u5b58\u50a8\u548c\u7ec4\u7ec7\u6570\u636e\uff0c \u5b83\u53ef\u4ee5\u5b58\u50a8\u5404\u79cd\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u4f8b\u5982\u6570\u503c\u3001\u6587\u672c\u751a\u81f3\u5d4c\u5957\u5b58\u50a8\u5176\u4ed6\u7684table\u3002 Lua table\u8868\u793a\u7684\u662f\u5173\u8054\u6570\u7ec4\uff0c \u53ef\u4ee5\u7528\u6570\u7ec4\u7684\u952e\u6765\u8bbf\u95ee\u6570\u7ec4\u5bf9\u5e94\u7684\u5143\u7d20\u7684\u503c\u3002 \u5982\u4e0b\u662ftable\u7c7b\u578b\u7684\u5e38\u89c1\u7279\u6027\u548c\u516c\u5171\u64cd\u4f5c\u3002 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efatable:"))),(0,r.kt)("p",null,"\u4f7f\u7528\u82b1\u62ec\u53f7\u6765\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684table: ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable = {}")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable = table.create()")," \u6784\u9020\u51fd\u6570\u6765\u521b\u5efa\u7a7atable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65b0\u589e\u6216\u8005\u8bbf\u95eetable\u4e2d\u5143\u7d20:"))),(0,r.kt)("p",null,"\u901a\u8fc7\u952e\u540d\u6dfb\u52a0\u5143\u7d20: ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable[key] = value")),(0,r.kt)("p",null,"\u901a\u8fc7\u952e\u540d\u6765\u8bbf\u95ee\u5143\u7d20: ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable[key]")),(0,r.kt)("p",null,"\u901a\u8fc7\u70b9\u8bb0\u53f7\u6765\u8bbf\u95ee\u5143\u7d20: ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable.key")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u904d\u5386table:"))),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"pairs()"),"\u51fd\u6570\u6765\u904d\u5386table\u4e2d\u7684\u6240\u6709\u952e\u503c\u5bf9\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"for key, value in pairs(myTable) do ... end\n")),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ipairs()"),"\u51fd\u6570\u6765\u904d\u5386table\u4e2d\u7684\u6570\u7ec4\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"for index, value in ipairs(myTable) do ... end\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5220\u9664\u5143\u7d20:"))),(0,r.kt)("p",null,"\u4f7f\u7528\u952e\u540d\u6765\u5220\u9664\u4e00\u4e2a\u5143\u7d20: ",(0,r.kt)("inlineCode",{parentName:"p"},"myTable[key] = nil")),(0,r.kt)("h4",{id:"\u516c\u5171\u51fd\u6570"},"\u516c\u5171\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table.insert()"),": \u63d2\u5165\u4e00\u4e2a\u5143\u7d20\u5230table\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table.remove()"),": \u5728table\u4e2d\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table.concat()"),": \u628atable\u4e2d\u6240\u6709\u5b57\u7b26\u4e32\u62fc\u63a5\u6210\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002 "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ipairs()"),": \u83b7\u5f97\u4e00\u4e2a\u904d\u5386\u5668\uff0c\u7528\u6765\u904d\u5386table\u4e2d\u7684\u6570\u7ec4\u90e8\u5206\u3002 "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pairs()"),": \u83b7\u5f97\u4e00\u4e2a\u904d\u5386\u5668\uff0c\u7528\u6765\u904d\u5386talbe\u4e2d\u7684\u952e\u503c\u90e8\u5206\u3002 ")),(0,r.kt)("h3",{id:"\u5904\u7406\u7f51\u5173\u8d44\u6e90"},"\u5904\u7406\u7f51\u5173\u8d44\u6e90"),(0,r.kt)("p",null,"\u7f51\u5173\u8d44\u6e90\u7684\u72b6\u6001\u548c\u53d1\u5e03\u7b56\u7565\u76f8\u5173\u6570\u636e\u5728\u4e00\u4e2a\u540d\u53ebLuaData\u7684\u7ed3\u6784\u4e2d\u8bb0\u5f55\uff0c \u5e76\u4e14\u4f1a\u88ab\u8f6c\u5316\u6210\u4e00\u4e2aLua table, \u5e76\u4f5c\u4e3a\u4e00\u4e2a\u5168\u5c40\u7684\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," \u6765\u4f9bLua\u811a\u672c\u6765\u8fdb\u4e00\u6b65\u5904\u7406\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LuaData struct {\n    Data             Data\n    CanaryWeight     int32\n    StableWeight     int32\n    Matches          []rolloutv1alpha1.HttpRouteMatch\n    CanaryService    string\n    StableService    string\n}\n// Data \u7ed3\u6784\u5305\u542b\u4e86\u5f53\u524d\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u7684\u914d\u7f6e\ntype Data struct {\n    Spec        interface{}       `json:"spec,omitempty"`\n    Labels      map[string]string `json:"labels,omitempty"`\n    Annotations map[string]string `json:"annotations,omitempty"`\n}\n')),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49Lua\u811a\u672c\u9700\u8981\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\uff0c\u6309\u7167\u91d1\u4e1d\u96c0\u53d1\u5e03\u7684\u903b\u8f91\uff0c \u5904\u7406\u81ea\u5b9a\u4e49\u7684\u6d41\u91cf\u8def\u7531\u7b56\u7565\uff0c \u6765\u8fd4\u56de\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u7684\u5bf9\u8c61\uff0c \u8fd9\u4e2a\u5bf9\u8c61\u9700\u8981\u5305\u62ec\u4fee\u6539\u540e\u7f51\u5173\u8d44\u6e90\u7684\u65b0spec\u3001labels\u548cannotations\u3002 \u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4fee\u6539obj.data\u5e76\u4e14\u5728\u811a\u672c\u4e2d\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua \u53d8\u91cf\u662f\u6309\u5f15\u7528\u6765\u4f20\u9012\u7684\uff0c \u56e0\u6b64\u4fee\u6539 'spec' \u53ef\u4ee5\u540c\u6b65\u5730\u4fee\u6539'obj.data.spec'\nspec = obj.data.spec -- get resource 'spec'\nhosts = spec.hosts\ncanaryService = obj.canaryService\n-- \u4e00\u822c\u8981\u904d\u5386Rollout strategy\u4e2d\u7684http\u5934\u76f8\u5173\u5b57\u6bb5'matches'\nfor _, match in ipairs(obj.matches) do\n    ... -- \u5728\u8fd9\u91cc\u5b9e\u73b0\u4e0d\u540c\u7684matches\u7684\u5904\u7406\u903b\u8f91\nend\n-- \u8fd4\u56de'obj.data'\uff0c Kruise Rollout\u4f1a\u5c06\u4fee\u6539\u540e\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u66f4\u65b0\u5230\u96c6\u7fa4\u4e2d\nreturn obj.data\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5e76\u8fd4\u56de\u81ea\u5df1\u7684\u53d8\u91cf\uff0c\u53ea\u8981\u8fd9\u8fb9\u53d8\u91cf\u5305\u62ec\u4e86\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u7684\u8def\u7531\u64cd\u4f5c\u540e\u7684\u65b0spec\u3001labels\u548cannotations\uff0c\u4f8b\u5982:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"...\n-- \u5b9a\u4e49\u81ea\u5df1\u7684\u8fd4\u56de\u53d8\u91cfret\nret = {}\n-- \u8bbe\u7f6eret\u7684annotations, labels \u548c spec\nret.annotations = annotations\nret.labels = labels\nret.spec = spec\nreturn ret\n")),(0,r.kt)("h3",{id:"\u8c03\u8bd5\u60a8\u7684lua-script"},"\u8c03\u8bd5\u60a8\u7684Lua Script"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u8c03\u8bd5Lua\u811a\u672c\uff0c\u53ef\u4ee5\u5728lua\u811a\u672c\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\uff0c \u5e76\u9010\u884c\u8c03\u8bd5\u6765\u68c0\u67e5Lua\u811a\u672c\u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c\u3002\u7279\u522b\u7684\u4e00\u79cd\u529e\u6cd5\u662f\u5b89\u88c5VSCode\u7684",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug"},"Lua Debug")," \u63d2\u4ef6\u3002 \u5b89\u88c5\u540e\uff0c \u5728\u8c03\u8bd5\u6a21\u5f0f\u5c31\u53ef\u4ee5\u9010\u884c\u6267\u884cLua\u811a\u672c\uff0c\u5e76\u4e14\u68c0\u67e5\u76f8\u5e94\u7684\u53d8\u91cf\u8d4b\u503c\u60c5\u51b5\uff0c \u5177\u4f53\u65b9\u5f0f\u662f\u5728",(0,r.kt)("strong",{parentName:"p"},"Run and Debug"),"\u76ee\u5f55\u4e2d\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"Lua Debug -> Debug Current File")),(0,r.kt)("img",{src:n(3132).Z,width:"50%"}),(0,r.kt)("p",null,"\u7279\u522b\u7684\uff0c \u4f60\u53ef\u4ee5\u6309\u4e0a\u8ff0\u7684Yaml\u683c\u5f0f\u7f16\u5199\u6d4b\u8bd5\u6848\u4f8b\uff0c \u5e76\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"go run ./lua_configuration/convert_test_case_to_lua_object.go")," \u6765\u751f\u6210\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\u3002 \u8fd9\u4e2a\u7a0b\u5e8f\u4f1a\u83b7\u53d6\u5185\u7f6e\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"lua_configuration"),"\uff09\u4e2d\u6d4b\u8bd5\u6848\u4f8b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"testdata"),"\uff09\u76ee\u5f55\uff0c \u5e76\u8f6c\u5316\u6d4b\u8bd5\u6848\u4f8b\u4e3a\u5168\u5c40\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," \u7684\u5f62\u5f0f\uff0c \u5e76\u4fdd\u5b58\u5230\u76f8\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"*_case_obj.lua"),"\u811a\u672c\u4e2d\u3002 \u5f00\u53d1\u8005\u53ef\u4ee5\u62f7\u8d1d",(0,r.kt)("inlineCode",{parentName:"p"},"*_case_obj.lua"),"\u7684\u5bf9\u8c61\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\uff0c \u5e76\u4f20\u9012\u7ed9\u81ea\u5b9a\u4e49\u7f51\u5173\u7684Lua\u811a\u672c\uff0c \u4ece\u800c\u7528\u6765\u9010\u884c\u8c03\u8bd5\u811a\u672c\u3002 "),(0,r.kt)("p",null,"\u5982\u4e0b\u662f\u4e00\u4e2a\u7531\u793a\u4f8b\u7684\u6d4b\u8bd5\u6848\u4f8b\u8f93\u51fa\u7684\u5bf9\u8c61\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"test_case_obj.lua"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'steps = {\n    -- obj of release step_0\n    step_0 = { canaryWeight = -1, stableWeight = 101,\n        matches = { { headers = { { value = "demo", type = "Exact", name = "destination", }, }, }, },\n        canaryService = "mocka", stableService = "mocka",\n        data = {\n            spec = { subsets = { { labels = { version = "base", }, name = "version-base", }, },\n                trafficPolicy = { loadBalancer = { simple = "ROUND_ROBIN", }, }, host = "svc-a", }, }, }, }\n')),(0,r.kt)("p",null,"\u53ea\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"test_case_obj.lua")," \u4e2d\u5b9a\u4e49\u7684Lua table\u53d8\u91cf(\u4f8b\u5982step_0) \u5728\u60a8\u7684Lua\u811a\u672c\u4e2d\u62f7\u8d1d\u4e3a\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\uff0c \u5c31\u53ef\u4ee5\u5f00\u59cb\u8c03\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- \u4ecetest_case_obj.lua\u4e2d\u62f7\u8d1d\u53d8\u91cfstep_0\u4e3aobj\u53d8\u91cf\nobj = { canaryWeight = -1, stableWeight = 101,\n        matches = { { headers = { { value = "demo", type = "Exact", name = "destination", }, }, }, },\n        canaryService = "mocka", stableService = "mocka", },\n        data = {\n            spec = { subsets = { { labels = { version = "base", }, name = "version-base", }, },\n                trafficPolicy = { loadBalancer = { simple = "ROUND_ROBIN", }, }, host = "svc-a", }, }, }\nspec = obj.data.spec\n--- \u4ee5\u4e0b\u5b9a\u4e49\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u7f51\u5173\u7684Lua\u811a\u672c\n')),(0,r.kt)("img",{src:n(3257).Z}),"### \u6388\u6743Kruise Rollout \u8bbf\u95ee\u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90 \u4e3a\u4e86\u8ba9Kruise Rollout\u53ef\u4ee5\u8bbf\u95ee\u5e76\u66f4\u65b0\u81ea\u5b9a\u4e49\u7f51\u5173\u7684\u8d44\u6e90\uff0c \u9700\u8981\u914d\u7f6e\u76f8\u5e94\u7684RBAC\u89c4\u5219\uff0c\u4ece\u800c\u5bf9Kruise Rollout \u8fdb\u884c\u6388\u6743",(0,r.kt)("p",null,"\u63a8\u8350\u5728kruise-rollout\u547d\u540d\u7a7a\u95f4\u4e0b\u65b0\u5efa\u4e00\u4e2arole\uff0c\uff0c \u5e76\u6dfb\u52a0\u4e00\u4e2a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"get, list, patch, update, watch")," \u81ea\u5b9a\u4e49\u7f51\u5173\u8d44\u6e90\u6743\u9650\u7684\u89d2\u8272\uff0c \u5e76\u6388\u6743\u8be5\u89d2\u8272\u7ed9Kruise Rollout\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2aIstio VirtualService \u548cDestinationRule \u7684RBAC \u89c4\u5219\u7684\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: kruise-rollout-istio-role\n  namespace: kruise-rollout\nrules:\n  - apiGroups:\n    - networking.istio.io\n    resources:\n    - destinationrules\n    - virtualservices\n    verbs:\n    - get\n    - list\n    - patch\n    - update\n    - watch\n  ...\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: kruise-rollout-istio-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: kruise-rollout-istio-role\nsubjects:\n- kind: ServiceAccount\n  name: controller-manager\n  namespace: kruise-rollout\n")))}d.isMDXComponent=!0},664:function(e,t,n){t.Z=n.p+"assets/images/custom-workflow-50d262e1c57f2046adddd81b26f0b827.png"},3257:function(e,t,n){t.Z=n.p+"assets/images/debug-lua-941e65f925603f43ed7c241c7615cf40.gif"},8526:function(e,t,n){t.Z=n.p+"assets/images/test-lua-886b3c9ee4711a35e7bea651128e31fb.gif"},3132:function(e,t,n){t.Z=n.p+"assets/images/vscode-conf-402152c12f5ad907063732b4f52941d3.png"}}]);