"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5183],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39788:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},s="GameServer Monitor",u={unversionedId:"user-manuals/gameserver-monitor",id:"user-manuals/gameserver-monitor",title:"GameServer Monitor",description:"Metrics available",source:"@site/kruisegame/user-manuals/gameserver-monitor.md",sourceDirName:"user-manuals",slug:"/user-manuals/gameserver-monitor",permalink:"/kruisegame/user-manuals/gameserver-monitor",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1685069311,formattedLastUpdatedAt:"5/26/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Custom Lifecycle Management",permalink:"/kruisegame/user-manuals/lifecycle"},next:{title:"Game MatchMaking",permalink:"/kruisegame/user-manuals/game-matchmaking"}},m={},p=[{value:"Metrics available",id:"metrics-available",level:2},{value:"Monitoring Dashboard",id:"monitoring-dashboard",level:2},{value:"Dashboard Import",id:"dashboard-import",level:3},{value:"Dashboard Introduction",id:"dashboard-introduction",level:3}],c={toc:p};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gameserver-monitor"},"GameServer Monitor"),(0,o.kt)("h2",{id:"metrics-available"},"Metrics available"),(0,o.kt)("p",null,"OKG by default exposes game server related Prometheus metrics, including:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServersStateCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of game servers in different states"),(0,o.kt)("td",{parentName:"tr",align:null},"gauge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServersOpsStateCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of game servers in different ops states"),(0,o.kt)("td",{parentName:"tr",align:null},"gauge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServersTotal"),(0,o.kt)("td",{parentName:"tr",align:null},"Total number of game servers that have existed"),(0,o.kt)("td",{parentName:"tr",align:null},"counter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServerSetsReplicasCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of replicas for each GameServerSet"),(0,o.kt)("td",{parentName:"tr",align:null},"gauge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServerDeletionPriority"),(0,o.kt)("td",{parentName:"tr",align:null},"Deletion priority for game servers"),(0,o.kt)("td",{parentName:"tr",align:null},"gauge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GameServerUpdatePriority"),(0,o.kt)("td",{parentName:"tr",align:null},"Update priority for game servers"),(0,o.kt)("td",{parentName:"tr",align:null},"gauge")))),(0,o.kt)("h2",{id:"monitoring-dashboard"},"Monitoring Dashboard"),(0,o.kt)("h3",{id:"dashboard-import"},"Dashboard Import"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise-game/blob/master/config/prometheus/grafana.json"},"grafana.json")," to Grafana"),(0,o.kt)("li",{parentName:"ol"},"Choose data source"),(0,o.kt)("li",{parentName:"ol"},"Replace UID and complete the import")),(0,o.kt)("h3",{id:"dashboard-introduction"},"Dashboard Introduction"),(0,o.kt)("p",null,"The imported dashboard is shown below:"),(0,o.kt)("img",{src:r(51169).Z,width:"90%"}),(0,o.kt)("p",null,"From top to bottom, it includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First row: number of GameServers in each current state, and a pie chart showing the proportion of GameServers in each current state"),(0,o.kt)("li",{parentName:"ul"},"Second row: line chart showing the number of GameServers in each state over time"),(0,o.kt)("li",{parentName:"ul"},"Third row: line chart showing the changes in deletion and update priorities for GameServers (can be filtered by namespace and gsName in the top-left corner)"),(0,o.kt)("li",{parentName:"ul"},"Fourth and fifth rows: line charts showing the number of GameServers in different states for each GameServerSet (can be filtered by namespace and gssName in the top-left corner)")))}d.isMDXComponent=!0},51169:function(e,t,r){t.Z=r.p+"assets/images/gra-dash-7bc17dc25d70d2b5d01a73f98d1cf290.png"}}]);