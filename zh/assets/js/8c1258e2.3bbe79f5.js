"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6337],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return d}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),o=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1947:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={},c="\u6e38\u620f\u670d\u4f38\u7f29",o={unversionedId:"user-manuals/gameservers-scale",id:"user-manuals/gameservers-scale",title:"\u6e38\u620f\u670d\u4f38\u7f29",description:"OpenKruiseGame\u7684\u6c34\u5e73\u4f38\u7f29\u7279\u6027",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/user-manuals/gameservers-scale.md",sourceDirName:"user-manuals",slug:"/user-manuals/gameservers-scale",permalink:"/zh/kruisegame/user-manuals/gameservers-scale",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1690448786,formattedLastUpdatedAt:"2023/7/27",frontMatter:{},sidebar:"kruisegame",previous:{title:"\u6e38\u620f\u670d\u66f4\u65b0\u7b56\u7565",permalink:"/zh/kruisegame/user-manuals/update-strategy"},next:{title:"\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u63a7\u5236",permalink:"/zh/kruisegame/user-manuals/container-startup-sequence-control"}},p={},m=[{value:"OpenKruiseGame\u7684\u6c34\u5e73\u4f38\u7f29\u7279\u6027",id:"openkruisegame\u7684\u6c34\u5e73\u4f38\u7f29\u7279\u6027",level:2},{value:"\u7f29\u5bb9\u987a\u5e8f",id:"\u7f29\u5bb9\u987a\u5e8f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u6e38\u620f\u670d ID Reserve",id:"\u6e38\u620f\u670d-id-reserve",level:3},{value:"\u7f29\u5bb9\u7b56\u7565",id:"\u7f29\u5bb9\u7b56\u7565",level:3},{value:"General",id:"general",level:4},{value:"ReserveIds",id:"reserveids",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u6e38\u620f\u670d\u7684\u6c34\u5e73\u81ea\u52a8\u4f38\u7f29",id:"\u6e38\u620f\u670d\u7684\u6c34\u5e73\u81ea\u52a8\u4f38\u7f29",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u5176\u4ed6\u8bbe\u7f6e",id:"\u5176\u4ed6\u8bbe\u7f6e",level:3}],u={toc:m};function d(e){var n=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6e38\u620f\u670d\u4f38\u7f29"},"\u6e38\u620f\u670d\u4f38\u7f29"),(0,l.kt)("h2",{id:"openkruisegame\u7684\u6c34\u5e73\u4f38\u7f29\u7279\u6027"},"OpenKruiseGame\u7684\u6c34\u5e73\u4f38\u7f29\u7279\u6027"),(0,l.kt)("h3",{id:"\u7f29\u5bb9\u987a\u5e8f"},"\u7f29\u5bb9\u987a\u5e8f"),(0,l.kt)("p",null,"OKG\u63d0\u4f9b\u6e38\u620f\u670d\u72b6\u6001\u8bbe\u7f6e\u7684\u80fd\u529b\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8/\u81ea\u52a8(\u670d\u52a1\u8d28\u91cf\u529f\u80fd)\u5730\u8bbe\u7f6e\u6e38\u620f\u670d\u7684\u8fd0\u7ef4\u72b6\u6001\u6216\u5220\u9664\u4f18\u5148\u7ea7\u3002\u5f53\u7f29\u5bb9\u65f6\uff0cGameServerSet\u8d1f\u8f7d\u4f1a\u6839\u636e\u6e38\u620f\u670d\u7684\u72b6\u6001\u8fdb\u884c\u7f29\u5bb9\u9009\u62e9\uff0c\u7f29\u5bb9\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"1\uff09\u6839\u636e\u6e38\u620f\u670d\u7684opsState\u7f29\u5bb9\u3002\u6309\u987a\u5e8f\u4f9d\u6b21\u7f29\u5bb9opsState\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"WaitToBeDeleted"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Maintaining"),"\u7684\u6e38\u620f\u670d"),(0,l.kt)("p",null,"2\uff09\u5f53opsState\u76f8\u540c\u65f6\uff0c\u6309\u7167DeletionPriority(\u5220\u9664\u4f18\u5148\u7ea7)\u7f29\u5bb9\uff0c\u4f18\u5148\u5220\u9664DeletionPriority\u5927\u7684\u6e38\u620f\u670d"),(0,l.kt)("p",null,"3\uff09\u5f53opsState\u4e0eDeletionPriority\u90fd\u76f8\u540c\u65f6\uff0c\u4f18\u5148\u5220\u9664\u540d\u79f0\u5c3e\u90e8\u5e8f\u53f7\u8f83\u5927\u7684\u6e38\u620f\u670d"),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u90e8\u7f72\u4e00\u4e2a\u526f\u672c\u4e3a5\u7684\u6e38\u620f\u670d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: minecraft\n  namespace: default\nspec:\n  replicas: 5\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n          name: minecraft\nEOF\n")),(0,l.kt)("p",null,"\u751f\u62105\u4e2aGameServer\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,l.kt)("p",null,"\u5bf9minecraft-2\u8bbe\u7f6e\u5220\u9664\u4f18\u5148\u7ea7\u4e3a10\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-2\n\n...\nspec:\n  deletionPriority: 10 #\u521d\u59cb\u4e3a0\uff0c\u8c03\u5927\u523010\n  opsState: None\n  updatePriority: 0\n...\n")),(0,l.kt)("p",null,"\u624b\u52a8\u7f29\u5bb9\u52304\u4e2a\u526f\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=4\ngameserverset.game.kruise.io/minecraft scale\n")),(0,l.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a4\uff0c\u53ef\u4ee5\u770b\u52302\u53f7\u6e38\u620f\u670d\u56e0\u4e3a\u5220\u9664\u4f18\u5148\u7ea7\u6700\u5927\u6240\u4ee5\u88ab\u5220\u9664\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE   DP    UP\nminecraft-0   Ready      None       0     0\nminecraft-1   Ready      None       0     0\nminecraft-2   Deleting   None       10    0\nminecraft-3   Ready      None       0     0\nminecraft-4   Ready      None       0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,l.kt)("p",null,"\u8bbe\u7f6eminecraft-3\u7684opsState\u4e3aWaitToBeDeleted\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-3\n\n...\nspec:\n  deletionPriority: 0 \n  opsState: WaitToBeDeleted #\u521d\u59cb\u4e3aNone, \u5c06\u5176\u6539\u4e3aWaitToBeDeleted\n  updatePriority: 0\n...\n")),(0,l.kt)("p",null,"\u624b\u52a8\u7f29\u5bb9\u52303\u4e2a\u526f\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=3\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,l.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a3\uff0c\u53ef\u4ee5\u770b\u52303\u53f7\u6e38\u620f\u670d\u56e0\u4e3a\u5904\u4e8eWaitToBeDeleted\u72b6\u6001\u6240\u4ee5\u88ab\u5220\u9664\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE          DP    UP\nminecraft-0   Ready      None              0     0\nminecraft-1   Ready      None              0     0\nminecraft-3   Deleting   WaitToBeDeleted   0     0\nminecraft-4   Ready      None              0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,l.kt)("p",null,"\u624b\u52a8\u6269\u5bb9\u56de5\u4e2a\u526f\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=5\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,l.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a5\uff0c\u6b64\u65f6\u6269\u5bb9\u51fa\u7684\u6e38\u620f\u670d\u5e8f\u53f7\u4e3a2\u4e0e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,l.kt)("h3",{id:"\u6e38\u620f\u670d-id-reserve"},"\u6e38\u620f\u670d ID Reserve"),(0,l.kt)("p",null,"GameServerSet\u63d0\u4f9b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Spec.ReserveGameServerIds"),"\u5b57\u6bb5\u3002\u901a\u8fc7\u8be5\u5b57\u6bb5\uff0c\u7528\u6237\u6307\u5b9aID\uff0c\u5c06\u5bf9\u5e94\u7684\u6e38\u620f\u670d\u5220\u9664\uff1b\u6216\u8005\u5728\u521b\u5efa\u65b0\u6e38\u620f\u670d\u65f6\u907f\u514d\u8be5\u5e8f\u53f7\u5bf9\u5e94\u7684\u6e38\u620f\u670d\u751f\u6210\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0cgss\u4e0b\u5b58\u57285\u4e2a\u6e38\u620f\u670d\uff0cID\u5206\u522b\u4e3a0\u30011\u30012\u30013\u30014\u3002\u6b64\u65f6\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"ReserveGameServerIds"),"\uff0c\u586b\u51993\u548c4\uff0c\u5728\u4e0d\u66f4\u6539\u526f\u672c\u6570\u76ee\u7684\u60c5\u51b5\u4e0b\uff0cgss\u5c06\u4f1a\u5220\u96643\u548c4\uff0c\u540c\u65f6\u751f\u62105\u548c6\u7684\u6e38\u620f\u670d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  reserveGameServerIds:\n  - 3\n  - 4\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     79s\nminecraft-1   Ready      None       0     0     79s\nminecraft-2   Ready      None       0     0     79s\nminecraft-3   Deleting   None       0     0     78s\nminecraft-4   Deleting   None       0     0     78s\nminecraft-5   Ready      None       0     0     23s\nminecraft-6   Ready      None       0     0     23s\n")),(0,l.kt)("p",null,"\u5982\u82e5\u586b\u5199\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ReserveGameServerIds"),"\u5b57\u6bb5\u589e\u52a05\u548c6\uff0c\u540c\u65f6\u51cf\u5c11\u526f\u672c\u6570\u76ee\u52303\uff0c\u5219gss\u4f1a\u5220\u96645\u548c6\u7684\u6e38\u620f\u670d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 3\n  reserveGameServerIds:\n  - 3\n  - 4\n  - 5\n  - 6\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     10m\nminecraft-1   Ready      None       0     0     10m\nminecraft-2   Ready      None       0     0     10m\nminecraft-5   Deleting   None       0     0     9m55s\nminecraft-6   Deleting   None       0     0     9m55s\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u7f29\u5bb9\u65f6\uff0cOKG\u5c06\u4f18\u5148\u8003\u8651\u88abReserve\u7684\u6e38\u620f\u670d\uff0c\u518d\u6309\u7167\u4e0a\u6587\u63d0\u5230\u7684\u7f29\u5bb9\u987a\u5e8f\u8fdb\u884c\u7f29\u5bb9")),(0,l.kt)("h3",{id:"\u7f29\u5bb9\u7b56\u7565"},"\u7f29\u5bb9\u7b56\u7565"),(0,l.kt)("p",null,"OKG \u63d0\u4f9b\u4e24\u79cd\u7f29\u5bb9\u7b56\u7565\uff1a1\uff09General\uff1b2\uff09ReserveIds\u3002\u60a8\u53ef\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"GameServerSet.Spec.ScaleStrategy.ScaleDownStrategyType"),"\u8bbe\u7f6e\u5bf9\u5e94\u7b56\u7565"),(0,l.kt)("h4",{id:"general"},"General"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u4e0d\u914d\u7f6eScaleDownStrategyType\u5b57\u6bb5\uff0cGeneral\u4e3a\u9ed8\u8ba4\u914d\u7f6e\u3002\u7f29\u5bb9\u884c\u4e3a\u5982\u4e0a\u6587\u4e2d\u6240\u8ff0\u3002"),(0,l.kt)("h4",{id:"reserveids"},"ReserveIds"),(0,l.kt)("p",null,"\u7528\u6237\u8bbe\u7f6eScaleDownStrategyType\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ReserveIds"),"\uff0c\u5f53\u6e38\u620f\u670d\u96c6\u5408\u53d1\u751f\u7f29\u5bb9\u65f6\uff0c\u88ab\u5220\u6389\u7684\u6e38\u620f\u670d\u5c3e\u90e8\u5e8f\u53f7\u4f1a\u88ab\u8bb0\u5f55\u5728reserveGameServerIds\u4e2d\uff0c\u540e\u7eed\u53d1\u751f\u6269\u5bb9\u65f6\uff0c\u8fd9\u4e9b\u5c3e\u90e8\u5e8f\u53f7\u4e0d\u4f1a\u518d\u4f7f\u7528\uff1b\u5982\u679c\u60f3\u518d\u4f7f\u7528\u8fd9\u4e9b\u5c3e\u90e8\u5e8f\u53f7\uff0c\u53ea\u9700\u8981\u5c06\u5b83\u4eec\u4ecereserveGameServerIds\u4e2d\u62ff\u51fa\u6765\u540c\u65f6\u8c03\u6574\u526f\u672c\u6570\u5373\u53ef\u3002"),(0,l.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0cgss\u4e0b\u5b58\u57285\u4e2a\u6e38\u620f\u670d\uff0cID\u5206\u522b\u4e3a0\u30011\u30012\u30013\u30014\u3002\u6b64\u65f6\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"GameServerSet.Spec.ScaleStrategy.ScaleDownStrategyType"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ReserveIds"),"\uff0c\u540c\u65f6\u51cf\u5c11\u526f\u672c\u6570\u76ee\u52303"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 3\n  scaleStrategy:\n    scaleDownStrategyType: ReserveIds\n...\n\n# After a while\nkubectl get gs\nNAME          STATE      OPSSTATE   DP    UP    AGE\nminecraft-0   Ready      None       0     0     10m\nminecraft-1   Ready      None       0     0     10m\nminecraft-2   Ready      None       0     0     10m\nminecraft-3   Deleting   None       0     0     9m55s\nminecraft-4   Deleting   None       0     0     9m55s\n...\n\nkubectl get gss minecraft -o yaml\nspec:\n  replicas: 3\n  reserveGameServerIds:\n  - 3\n  - 4\n  scaleStrategy:\n  scaleDownStrategyType: ReserveIds\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5e8f\u53f7\u4e3a3\u548c4\u7684\u6e38\u620f\u670d\u88ab\u56de\u586b\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"reserveGameServerIds"),"\u5b57\u6bb5\uff0c\u6b64\u65f6\u82e5\u5e0c\u671b\u6307\u5b9a4\u53f7\u6e38\u620f\u670d\u6269\u5bb9\uff0c\u5219\u5c064\u4ecereserveGameServerIds\u53bb\u9664\uff0c\u5e76\u589e\u52a0\u526f\u672c\u6570\u52304\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\nspec:\n  replicas: 4\n  reserveGameServerIds:\n  - 3\n  scaleStrategy:\n    scaleDownStrategyType: ReserveIds\n...\n\n# After a while\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP    AGE\nminecraft-0   Ready   None       0     0     17m\nminecraft-1   Ready   None       0     0     17m\nminecraft-2   Ready   None       0     0     17m\nminecraft-4   Ready   None       0     0     6s\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u8be5\u529f\u80fd\u53ef\u4ee5\u5b9e\u73b0\u6307\u5b9a\u5e8f\u53f7\u6e38\u620f\u670d\u6269\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u6e38\u620f\u670d\u7684\u6c34\u5e73\u81ea\u52a8\u4f38\u7f29"},"\u6e38\u620f\u670d\u7684\u6c34\u5e73\u81ea\u52a8\u4f38\u7f29"),(0,l.kt)("p",null,"\u6e38\u620f\u670d\u4e0e\u65e0\u72b6\u6001\u4e1a\u52a1\u7c7b\u578b\u4e0d\u540c\uff0c\u5bf9\u4e8e\u81ea\u52a8\u4f38\u7f29\u7279\u6027\u6709\u7740\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u5176\u8981\u6c42\u4e3b\u8981\u4f53\u73b0\u5728\u7f29\u5bb9\u65b9\u9762\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u6e38\u620f\u4e3a\u5f3a\u6709\u72b6\u6001\u4e1a\u52a1\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6e38\u620f\u670d\u4e4b\u95f4\u7684\u5dee\u5f02\u6027\u6108\u52a0\u660e\u663e\uff0c\u7f29\u5bb9\u7684\u7cbe\u786e\u5ea6\u8981\u6c42\u6781\u9ad8\uff0c\u7c97\u7cd9\u7684\u7f29\u5bb9\u673a\u5236\u5bb9\u6613\u9020\u6210\u73a9\u5bb6\u65ad\u7ebf\u7b49\u8d1f\u9762\u5f71\u54cd\uff0c\u7ed9\u4e1a\u52a1\u9020\u6210\u5de8\u5927\u635f\u5931\u3002"),(0,l.kt)("p",null,"\u539f\u751fKubernetes\u4e2d\u7684\u6c34\u5e73\u4f38\u7f29\u673a\u5236\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("img",{src:a(555).Z,style:{height:"400px",width:"700px"}}),(0,l.kt)("p",null,"\u5728\u6e38\u620f\u573a\u666f\u4e0b\uff0c\u5b83\u7684\u4e3b\u8981\u95ee\u9898\u5728\u4e8e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728pod\u5c42\u9762\uff0c\u65e0\u6cd5\u611f\u77e5\u6e38\u620f\u670d\u4e1a\u52a1\u72b6\u6001\uff0c\u8fdb\u800c\u65e0\u6cd5\u901a\u8fc7\u4e1a\u52a1\u72b6\u6001\u8bbe\u7f6e\u5220\u9664\u4f18\u5148\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u5728workload\u5c42\u9762\uff0c\u65e0\u6cd5\u6839\u636e\u4e1a\u52a1\u72b6\u6001\u9009\u62e9\u7f29\u5bb9\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u5728autoscaler\u5c42\u9762\uff0c\u65e0\u6cd5\u5b9a\u5411\u611f\u77e5\u6e38\u620f\u670d\u4e1a\u52a1\u72b6\u6001\u8ba1\u7b97\u5408\u9002\u7684\u526f\u672c\u6570\u76ee")),(0,l.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u57fa\u4e8e\u539f\u751fKubernetes\u7684\u81ea\u52a8\u4f38\u7f29\u673a\u5236\u5c06\u5728\u6e38\u620f\u573a\u666f\u4e0b\u9020\u6210\u4e24\u5927\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f29\u5bb9\u6570\u76ee\u4e0d\u7cbe\u786e\u3002\u5bb9\u6613\u5220\u9664\u8fc7\u591a\u6216\u8fc7\u5c11\u7684\u6e38\u620f\u670d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f29\u5bb9\u5bf9\u8c61\u4e0d\u7cbe\u786e\u3002\u5bb9\u6613\u5220\u9664\u4e1a\u52a1\u8d1f\u8f7d\u6c34\u5e73\u9ad8\u7684\u6e38\u620f\u670d\u3002")),(0,l.kt)("p",null,"OKG \u7684\u81ea\u52a8\u4f38\u7f29\u673a\u5236\u5982\u4e0b\u6240\u793a"),(0,l.kt)("img",{src:a(8489).Z,style:{height:"400px",width:"700px"}}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u6e38\u620f\u670d\u5c42\u9762\uff0c\u6bcf\u4e2a\u6e38\u620f\u670d\u53ef\u4ee5\u4e0a\u62a5\u81ea\u8eab\u72b6\u6001\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u670d\u52a1\u8d28\u91cf\u6216\u5916\u90e8\u7ec4\u4ef6\u6765\u66b4\u9732\u81ea\u8eab\u662f\u5426\u4e3aWaitToBeDeleted\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728workload\u5c42\u9762\uff0cGameServerSet\u53ef\u6839\u636e\u6e38\u620f\u670d\u4e0a\u62a5\u7684\u4e1a\u52a1\u72b6\u6001\u6765\u51b3\u5b9a\u7f29\u5bb9\u7684\u5bf9\u8c61\uff0c\u5982",(0,l.kt)("a",{parentName:"li",href:"/zh/kruisegame/user-manuals/gameservers-scale"},"\u6e38\u620f\u670d\u6c34\u5e73\u4f38\u7f29"),"\u4e2d\u6240\u8ff0\uff0cWaitToBeDeleted\u7684\u6e38\u620f\u670d\u662f\u5220\u9664\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u6e38\u620f\u670d\uff0c\u7f29\u5bb9\u65f6\u6700\u4f18\u5148\u5220\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728autoscaler\u5c42\u9762\uff0c\u7cbe\u51c6\u8ba1\u7b97WaitToBeDeleted\u7684\u6e38\u620f\u670d\u4e2a\u6570\uff0c\u5c06\u5176\u4f5c\u4e3a\u7f29\u5bb9\u6570\u91cf\uff0c\u4e0d\u4f1a\u9020\u6210\u8bef\u5220\u7684\u60c5\u51b5\u3002")),(0,l.kt)("p",null,"\u5982\u6b64\u4e00\u6765\uff0cOKG\u7684\u81ea\u52a8\u4f38\u7f29\u5668\u5728\u7f29\u5bb9\u7a97\u53e3\u671f\u5185\u53ea\u4f1a\u5220\u9664\u5904\u4e8eWaitToBeDeleted\u72b6\u6001\u7684\u6e38\u620f\u670d\uff0c\u771f\u6b63\u505a\u5230\u5b9a\u5411\u7f29\u5bb9\u3001\u7cbe\u51c6\u7f29\u5bb9\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"\u524d\u7f6e\u6761\u4ef6\uff1a\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"strong",href:"https://keda.sh/docs/2.10/deploy/"},"KEDA")))),(0,l.kt)("p",null,"\u90e8\u7f72ScaledObject\u5bf9\u8c61\u6765\u8bbe\u7f6e\u81ea\u52a8\u4f38\u7f29\u7b56\u7565\uff0c\u5177\u4f53\u5b57\u6bb5\u542b\u4e49\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kedacore/keda/blob/main/apis/keda/v1alpha1/scaledobject_types.go"},"ScaledObject API")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: minecraft #\u586b\u5199\u5bf9\u5e94GameServerSet\u7684\u540d\u79f0\nspec:\n  scaleTargetRef:\n    name: minecraft #\u586b\u5199\u5bf9\u5e94GameServerSet\u7684\u540d\u79f0\n    apiVersion: game.kruise.io/v1alpha1 \n    kind: GameServerSet\n  pollingInterval: 30\n  minReplicaCount: 0\n  advanced:\n    horizontalPodAutoscalerConfig: \n      behavior: #\u7ee7\u627fHPA\u7b56\u7565\uff0c\u53ef\u53c2\u8003\u6587\u6863 https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior\n        scaleDown:\n          stabilizationWindowSeconds: 45 #\u8bbe\u7f6e\u7f29\u5bb9\u7a33\u5b9a\u7a97\u53e3\u65f6\u95f4\u4e3a45\u79d2\n          policies:\n            - type: Percent\n              value: 100\n              periodSeconds: 15\n  triggers:\n    - type: external\n      metricType: AverageValue\n      metadata:\n        scalerAddress: kruise-game-external-scaler.kruise-game-system:6000\n")),(0,l.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u66f4\u6539gs minecraft-0 \u7684 opsState \u4e3a WaitToBeDeleted\uff08\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/kruisegame/user-manuals/service-qualities"},"\u81ea\u5b9a\u4e49\u670d\u52a1\u8d28\u91cf"),"\u5b9e\u73b0\u81ea\u52a8\u5316\u8bbe\u7f6e\u6e38\u620f\u670d\u72b6\u6001\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-0\n\n...\nspec:\n  deletionPriority: 0 \n  opsState: WaitToBeDeleted #\u521d\u59cb\u4e3aNone, \u5c06\u5176\u6539\u4e3aWaitToBeDeleted\n  updatePriority: 0\n...\n")),(0,l.kt)("p",null,"\u7ecf\u8fc7\u7f29\u5bb9\u7a97\u53e3\u671f\u540e\uff0c\u6e38\u620f\u670dminecraft-0\u81ea\u52a8\u88ab\u5220\u9664"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE          DP    UP\nminecraft-0   Deleting   WaitToBeDeleted   0     0\nminecraft-1   Ready      None              0     0\nminecraft-2   Ready      None              0     0\n\n# After a while\n\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\n")),(0,l.kt)("p",null,"\u9664\u4e86\u8bbe\u7f6e\u81ea\u52a8\u7f29\u5bb9\u7b56\u7565\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u52a8\u6269\u5bb9\u7b56\u7565\u3002\u81ea\u52a8\u6269\u5bb9\u7684\u65b9\u5f0f\u6709\u5f88\u591a\uff0c\u6bd4\u5982\uff0c\u5229\u7528\u8d44\u6e90\u6307\u6807\u6216\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u5bb9\u3002\u4f7f\u7528CPU\u5229\u7528\u7387\u8fdb\u884c\u6269\u5bb9\uff0c\u5176\u5b8c\u6574\u7684yaml\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: keda.sh/v1alpha1\nkind: ScaledObject\nmetadata:\n  name: minecraft #\u586b\u5199\u5bf9\u5e94GameServerSet\u7684\u540d\u79f0\nspec:\n  scaleTargetRef:\n    name: minecraft #\u586b\u5199\u5bf9\u5e94GameServerSet\u7684\u540d\u79f0\n    apiVersion: game.kruise.io/v1alpha1\n    kind: GameServerSet\n  pollingInterval: 30\n  minReplicaCount: 0\n  advanced:\n    horizontalPodAutoscalerConfig:\n      behavior: #\u7ee7\u627fHPA\u7b56\u7565\uff0c\u53ef\u53c2\u8003\u6587\u6863 https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/#configurable-scaling-behavior\n        scaleDown:\n          stabilizationWindowSeconds: 45 #\u8bbe\u7f6e\u7f29\u5bb9\u7a33\u5b9a\u7a97\u53e3\u65f6\u95f4\u4e3a45\u79d2\n          policies:\n            - type: Percent\n              value: 100\n              periodSeconds: 15\n  triggers:\n    - type: external\n      metricType: AverageValue\n      metadata:\n        scalerAddress: kruise-game-external-scaler.kruise-game-system:6000\n    - type: cpu\n      metricType: Utilization # \u5141\u8bb8\u7684\u7c7b\u578b\u662f "\u5229\u7528\u7387 "\u6216 "\u5e73\u5747\u503c"\n      metadata:\n        value: "50"\n')),(0,l.kt)("p",null,"\u5bf9\u6e38\u620f\u670d\u8fdb\u884c\u538b\u6d4b\uff0c\u53ef\u4ee5\u770b\u5230\u6e38\u620f\u670d\u5f00\u59cb\u6269\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gss\nNAME        DESIRED   CURRENT   UPDATED   READY   MAINTAINING   WAITTOBEDELETED   AGE\nminecraft   5         5         5         0       0             0                 7s\n\n# After a while\n\nkubectl get gss\nNAME        DESIRED   CURRENT   UPDATED   READY   MAINTAINING   WAITTOBEDELETED   AGE\nminecraft   20        20        20        20      0             0                 137s\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8bbe\u7f6e"},"\u5176\u4ed6\u8bbe\u7f6e"),(0,l.kt)("p",null,"Kubernetes\u5bf9\u4e8e\u81ea\u52a8\u4f38\u7f29\u884c\u4e3a\u5177\u5907\u4e00\u5b9a\u5bb9\u5fcd\u5ea6\uff0c\u8be5\u503c\u7531kube-controller-manager \u53c2\u6570 --horizontal-pod-autoscaler-tolerance \u51b3\u5b9a\uff0c\u9ed8\u8ba4\u4e3a0.1\uff0c\u8fd9\u610f\u5473\u7740\u7406\u60f3\u526f\u672c\u6570\u4e0e\u5f53\u524d\u526f\u672c\u6570\u7684\u5dee\u503c\u572810%\u4ee5\u5185\u65f6\u4e0d\u4f1a\u89e6\u53d1\u6269\u5bb9\u6216\u7f29\u5bb9\u3002\n\u5982\u679c\u505a\u5230\u66f4\u52a0\u7cbe\u51c6\u5730\u81ea\u52a8\u4f38\u7f29\uff0c\u53ef\u4ee5\u8c03\u4f4e\u8be5\u53c2\u6570\uff0c\u4f8b\u5982\u8bbe\u7f6e0.0\u65f6\uff0cOKG\u5c06\u4f1a\u7f29\u5bb9\u6240\u6709WaitToBeDeleted\u7684\u6e38\u620f\u670d\u3002"))}d.isMDXComponent=!0},555:function(e,n,a){n.Z=a.p+"assets/images/autoscaling-k8s-2f9fa58833b5fddd2ca762cd9c7d58e7.png"},8489:function(e,n,a){n.Z=a.p+"assets/images/autoscaling-okg-a45f816714e854f821386482be84e1b6.png"}}]);