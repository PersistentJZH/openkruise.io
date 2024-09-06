"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6157],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Java client"},c=void 0,u={unversionedId:"developer-manuals/java-client",id:"version-v1.7/developer-manuals/java-client",title:"Java client",description:"We do have a client-java repository,",source:"@site/versioned_docs/version-v1.7/developer-manuals/java-client.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/java-client",permalink:"/docs/developer-manuals/java-client",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/developer-manuals/java-client.md",tags:[],version:"v1.7",lastUpdatedBy:"berg",lastUpdatedAt:1724814279,formattedLastUpdatedAt:"8/28/2024",frontMatter:{title:"Java client"},sidebar:"docs",previous:{title:"Golang client",permalink:"/docs/developer-manuals/go-client"},next:{title:"Other languages",permalink:"/docs/developer-manuals/other-languages"}},s={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We do have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/client-java"},"client-java")," repository,\nwhich only includes schema definition and clientsets of Kruise."),(0,o.kt)("p",null,"However, it is someway deprecated. We strongly recommend you to use the ",(0,o.kt)("a",{parentName:"p",href:"./go-client"},"Golang Client"),"."),(0,o.kt)("p",null,"If you have to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/client-java"},"client-java"),", please note that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The schema definition in it may be an older version of Kruise, which means we will not dump each release version for it."),(0,o.kt)("li",{parentName:"ol"},"This package has not been uploaded to the official maven repository, which means you should manually download this repo and package it to use.")))}f.isMDXComponent=!0}}]);