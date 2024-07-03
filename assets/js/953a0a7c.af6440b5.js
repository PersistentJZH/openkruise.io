"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4224],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(5488),i=a(5162),s=["components"],p={},u="API Specifications",d={unversionedId:"user-manuals/api-specifications",id:"user-manuals/api-specifications",title:"API Specifications",description:"A basic example for Kruise Rollouts resource YAML:",source:"@site/rollouts/user-manuals/api-specifications.md",sourceDirName:"user-manuals",slug:"/user-manuals/api-specifications",permalink:"/rollouts/user-manuals/api-specifications",draft:!1,tags:[],version:"current",lastUpdatedBy:"Zhen Zhang",lastUpdatedAt:1720005123,formattedLastUpdatedAt:"7/3/2024",frontMatter:{},sidebar:"rollouts",previous:{title:"Installation",permalink:"/rollouts/installation"},next:{title:"Basic Usage Guide",permalink:"/rollouts/user-manuals/basic-usage"}},m={},c=[{value:"API Details",id:"api-details",level:2},{value:"Workload Binding API (Mandatory)",id:"workload-binding-api-mandatory",level:3},{value:"Traffic Binding API (Optional)",id:"traffic-binding-api-optional",level:3},{value:"Strategy API (Mandatory)",id:"strategy-api-mandatory",level:3},{value:"Special Annotations of Workload (Optional)",id:"special-annotations-of-workload-optional",level:3},{value:"Rollout Status You Should Know",id:"rollout-status-you-should-know",level:3}],k={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-specifications"},"API Specifications"),(0,l.kt)("p",null,"A basic example for Kruise Rollouts resource YAML:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: v1beta1 available from Kruise Rollout v0.5.0.")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  # The rollout resource needs to be in the same namespace as the corresponding workload\n  namespace: default\nspec:\n  # rollout of published workloads, currently only supports Deployment, CloneSet, StatefulSet, Advanced StatefulSet and Advanced DaemonSet\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: echoserver\n  strategy:\n    canary:\n      steps:\n      ### the 1-st batch ###\n      # routing 5% traffics to the new version\n      - traffic: 5%\n        # Need Manual confirmation before enter to next batch\n        pause: {}\n        # optional, The first step of released replicas. If not set, the default is to use 'weight', as shown above is 5%.\n        replicas: 1\n      ### the 2-nd batch ###\n      - traffic: 50%\n        replicas: 50%\n        # Automatically enter the next batch after waiting 2 hours\n        pause:\n          duration: 7200\n      ### the 3-rd batch ###\n      - traffic: 100%\n        replicas: 100%\n      trafficRoutings:\n      # service name that is related with the workload\n      - service: echoserver\n        # ingress name that is related with the service\n        ingress:\n          name: echoserver\n"))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollouts-demo\n  # The rollout resource needs to be in the same namespace as the corresponding workload\n  namespace: default\n  # This annotation can help us upgrade the Deployment using partition, just like StatefulSet/CloneSet.\n  annotations:\n    rollouts.kruise.io/rolling-style: partition\nspec:\n  objectRef:\n    # rollout of published workloads, currently only supports Deployment, CloneSet, StatefulSet, Advanced StatefulSet and Advanced DaemonSet\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: echoserver\n  strategy:\n    canary:\n      steps:\n      ### the 1-st batch ###\n      # routing 5% traffics to the new version\n      - weight: 5\n        # Need Manual confirmation before enter to next batch\n        pause: {}\n        # optional, The first step of released replicas. If not set, the default is to use 'weight', as shown above is 5%.\n        replicas: 1\n      ### the 2-nd batch ###\n      - replicas: 50%\n        # Automatically enter the next batch after waiting 2 hours\n        pause:\n          duration: 7200\n      ### the 3-rd batch ###\n      - replicas: 100%\n      trafficRoutings:\n      # service name that is related with the workload\n      - service: echoserver\n        # ingress name that is related with the service\n        ingress:\n          name: echoserver\n")))),(0,l.kt)("p",null,"There are 3 major parts of api specifications you should pay attention to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binding your workload: Tell Rollout which workload it should work on;"),(0,l.kt)("li",{parentName:"ul"},"Binding your traffic configuration: Tell Rollout which traffic configuration it should focus on."),(0,l.kt)("li",{parentName:"ul"},"Config your deployment strategy before releasing: Tell Rollout how to roll your workload and traffic.")),(0,l.kt)("h2",{id:"api-details"},"API Details"),(0,l.kt)("h3",{id:"workload-binding-api-mandatory"},"Workload Binding API (Mandatory)"),(0,l.kt)("p",null,"Tell Kruise Rollout which workload should be bounded:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: StatefulSet\n    name: <your-workload-name>\n"))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: StatefulSet\n      name: <your-workload-name>\n")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apiVersion")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload APIVersion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kind")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload Kind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Workload Name")))),(0,l.kt)("p",null,"Currently, Kruise Rollout supports Deployment, CloneSet, StatefulSet, Advanced StatefulSet and Advanced DaemonSet."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: The workload should be at the same namespace as the Rollout.")),(0,l.kt)("h3",{id:"traffic-binding-api-optional"},"Traffic Binding API (Optional)"),(0,l.kt)("p",null,'Different from "Workload Binding", Traffic Binding is not necessary. If you do not set the following specifications, the traffic configuration will keep their native behavior, for example, keeping load balance for all versioned Pods.'),(0,l.kt)("p",null,"If you need do something special for traffic routings, just tell Kruise Rollout which traffic configurations should be bound:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  strategy:\n    canary:\n      trafficRoutings:\n      - service: <service-name-that-is-related-your-workload>\n        ingress: # alternative\uff1a ingress,gateway,customNetworkRefs\n          classType: <traffic-type> # example: nginx | higress, defaults to "nginx"\n          name: <ingress-name-that-is-related-the-service>\n      - service: <service-name-that-is-related-your-workload>\n        gateway:\n          httpRouteName: <gateway-api-httpRoute-name>\n      - service: <service-name-that-is-related-your-workload>\n        customNetworkRefs:\n        - apiVersion: <your-resource-apiVersion>\n          kind: <your-resource-kind>\n          name: <your-resource-name>\n'))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  strategy:\n    canary:\n      trafficRoutings:\n      - service: <service-name-that-is-related-your-workload>\n        ingress: # alternative\uff1a ingress,gateway,customNetworkRefs\n          classType: <traffic-type> # example: nginx | higress, defaults to "nginx"\n          name: <ingress-name-that-is-related-the-service>\n      - service: <service-name-that-is-related-your-workload>\n        gateway: \n          httpRouteName: <gateway-api-httpRoute-name>\n      - service: <service-name-that-is-related-your-workload>\n        customNetworkRefs:\n        - apiVersion: <your-resource-apiVersion>\n          kind: <your-resource-kind>\n          name: <your-resource-name>\n')))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"service")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of service that select the pods of bounded workload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Description of the Ingress object you want to bind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gateway")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Description of the ",(0,l.kt)("a",{parentName:"td",href:"https://gateway-api.sigs.k8s.io/"},"Gateway API")," resources you want to bind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customNetworkRefs    ")),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Definitions of ",(0,l.kt)("a",{parentName:"td",href:"https://openkruisyye.io/rollouts/developer-manuals/custom-network-provider"},"customize API Gateway resources"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.classType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"nginx"'),(0,l.kt)("td",{parentName:"tr",align:null},'Ingress type, such as "nginx", "higress", or others')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of ingress resource that bounded the service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gateway.httpRouteName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Name of ",(0,l.kt)("a",{parentName:"td",href:"https://gateway-api.sigs.k8s.io/concepts/api-overview/#httproute"},"HTTPRoute")," resource of Gateway API")))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"Note: if you decide to use ",(0,l.kt)("inlineCode",{parentName:"em"},"trafficRoutings"),", one and only one of ",(0,l.kt)("inlineCode",{parentName:"em"},"ingress"),",",(0,l.kt)("inlineCode",{parentName:"em"},"gateway"),",",(0,l.kt)("inlineCode",{parentName:"em"},"customNetworkRefs")," can be present in one trafficRouting element")),(0,l.kt)("p",null,"Alternatively, one can also define traffic routing strategy independently. and reference declared traffic routing config in the Rollout resource. Such usage is often used in the end-to-end canary cases."),(0,l.kt)("p",null,"Here is an example of independent traffic routing definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: TrafficRouting\nmetadata:\n  name: mse-traffic\nspec:\n  objectRef:\n  # config is the same as the traffic routing element in canary.trafficRoutings\n  - service: spring-cloud-a\n    ingress:\n      classType: mse\n      name: spring-cloud-a\n  strategy:\n    matches:\n    - headers:\n      - type: Exact\n        name: User-Agent\n        value: Andriod\n    requestHeaderModifier:\n      set:\n      - name: x-mse-tag\n        value: gray\n")),(0,l.kt)("p",null,"Here is an example to reference the traffic routing in Rollout resource:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  name: rollout-b\nspec:\n  workloadRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: spring-cloud-b\n  strategy:\n    canary:\n      steps:\n        - pause: {}\n          replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          opensergo.io/canary-gray: gray\n    # refer to the traffic routing config called mse-traffic\n    trafficRoutingRef: mse-traffic\n"))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: rollout-b\n  annotations:\n    # refer to the mse-traffic traffic routing config\n    rollouts.kruise.io/trafficrouting: mse-traffic\nspec:\n  objectRef:\n    workloadRef:\n      apiVersion: apps/v1\n      kind: Deployment\n      name: spring-cloud-b\n  strategy:\n    canary:\n      steps:\n        - pause: {}\n          replicas: 1\n      patchPodTemplateMetadata:\n        labels:\n          opensergo.io/canary-gray: gray\n")))),(0,l.kt)("h3",{id:"strategy-api-mandatory"},"Strategy API (Mandatory)"),(0,l.kt)("p",null,"Describe your strategy of rollout:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"v1beta1",label:"v1beta1",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1beta1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  strategy:\n    canary:\n      enableExtraWorkloadForCanary: true\n      steps:\n      # the first step\n      - traffic: 5%\n        replicas: 1 or 10%\n        pause:\n          duration: 0\n        matches:\n        - headers:\n          - type: Exact # or "RegularExpression"\n            name: <matched-header-name>\n            value: <matched-header-value, or reg-expression>\n      # the second step\n      - traffic: 10%\n        ... ....\n      patchPodTemplateMetadata:\n        labels:\n          opensergo.io/canary-gray: gray\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableExtraWorkloadForCanary")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create extra workload for canary update,  the extra workload be deleted after rollout completions; if it is set to false, multi-batch update strategy will be used for workload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].traffic")),(0,l.kt)("td",{parentName:"tr",align:null},"*string"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Percent weight of canary traffic for new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].replicas")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"integer or "),"string"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"Absolute number or Percent of new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Manual confirmation or auto confirmation before enter the next step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause.duration")),(0,l.kt)("td",{parentName:"tr",align:null},"*integer"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Duration time before auto confirmation. if nil, means need manual confirmation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].matches")),(0,l.kt)("td",{parentName:"tr",align:null},"[]object"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) The HTTP header match rules you want to traffic to new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].requestHeaderModifier")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional)  overwrites the request with the given header (name, value)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact"'),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact" or "RegularExpression" rule to match key and value')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header name. (And-Relationship between headers","[i]"," and headers","[j]",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patchPodTemplateMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Add extra pod meta data by patch podTemplate of the canary workload"))))),(0,l.kt)(i.Z,{value:"v1alpha1",label:"v1alpha1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rollouts.kruise.io/v1alpha1\nkind: Rollout\nmetadata:\n  namespace: <your-workload-ns>\nspec:\n  strategy:\n    canary:\n      steps:\n      # the first step\n      - weight: 5\n        replicas: 1 or 10%\n        pause:\n          duration: 0\n        matches:\n        - headers:\n          - type: Exact # or "RegularExpression"\n            name: <matched-header-name>\n            value: <matched-header-value, or reg-expression>\n      # the second step\n      - weight: 10\n        ... ....\n      patchPodTemplateMetadata:\n        labels:\n          opensergo.io/canary-gray: gray\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].weight")),(0,l.kt)("td",{parentName:"tr",align:null},"*integer"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Percent weight of canary traffic for new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].replicas")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"integer or "),"string"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Absolute number or Percent of new-version Pods. If nil, the default is to use 'weight' as replicas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Manual confirmation or auto confirmation before enter the next step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].pause.duration")),(0,l.kt)("td",{parentName:"tr",align:null},"*integer"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Duration time before auto confirmation. if nil, means need manual confirmation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"steps[x].matches")),(0,l.kt)("td",{parentName:"tr",align:null},"[]object"),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) The HTTP header match rules you want to traffic to new-version Pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact"'),(0,l.kt)("td",{parentName:"tr",align:null},'"Exact" or "RegularExpression" rule to match key and value')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header name. (And-Relationship between headers","[i]"," and headers","[j]",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers[x].value")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"Matched HTTP header value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patchPodTemplateMetadata")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Add extra pod meta data by patch podTemplate of the canary workload")))))),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].replicas")," can not be nil."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].matches[i] and steps[x].matches[j]")," have ",(0,l.kt)("strong",{parentName:"li"},"Or"),"-relationship."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].matches[y].headers[i] and steps[x].matches[y].header[j]")," have ",(0,l.kt)("strong",{parentName:"li"},"And"),"-relationship. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steps[x].patchPodTemplateMetadata")," can be set only if enableExtraWorkloadForCanary=true"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enableExtraWorkloadForCanary")," is available in v1beta Rollout resource; In v1alpha1 Rollout resource, one can use the annotation of Rollout ",(0,l.kt)("inlineCode",{parentName:"li"},"rollouts.kruise.io/rolling-type"),'="canary" to enable ',(0,l.kt)("inlineCode",{parentName:"li"},"enableExtraWorkloadForCanary"))),(0,l.kt)("h3",{id:"special-annotations-of-workload-optional"},"Special Annotations of Workload (Optional)"),(0,l.kt)("p",null,"There are some special annotations in Bounded Workload to enable specific abilities."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Annotations"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rollouts.kruise.io/rollout-id")),(0,l.kt)("td",{parentName:"tr",align:null},"any string"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},"The concept is similar to the release order number. To solve the problem that users should know whether the current changes of workload is observed by Kruise Rollout controller.")))),(0,l.kt)("h3",{id:"rollout-status-you-should-know"},"Rollout Status You Should Know"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Rollout\nstatus:\n  phase: Healthy\n  observedGeneration: 2\n  canaryStatus:\n    canaryReplicas: 10\n    canaryReadyReplicas: 10\n    canaryRevision: 76fd76f75b\n    currentStepIndex: 3\n    currentStepState: Completed\n    observedRolloutID: "20230313093823"\n    observedWorkloadGeneration: 20\n    podTemplateHash: 76fd76f75b\n    stableRevision: b76b6f48f\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mode"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"phase")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},'"Initial" means no bounded workload; "Healthy" means bounded workload is promoted; "Progressing" means rollout is working.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"observedGeneration")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Observed rollout spec generation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"*object"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about rollout progressing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload updated replicas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryReadyReplicas")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload updated ready replicas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.podTemplateHash")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload update(new) revision hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.canaryRevision")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload update(new) revision hash calculated by Kruise Rollout controller.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.stableRevision")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"workload stable(old) revision hash recorded before progressing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.observedRolloutID")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"corresponding to workload ",(0,l.kt)("inlineCode",{parentName:"td"},"rollouts.kruise.io/rollout-id")," annotations. if they are equal, it means rollout controller watched workload changes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.currentStepIndex")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ready-only"),(0,l.kt)("td",{parentName:"tr",align:null},"rollout current step index. Start from 1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"canaryStatus.currentStepState")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"ready&write"),(0,l.kt)("td",{parentName:"tr",align:null},'rollout current step state. Both "StepReady" and "Complete" mean current step is ready.')))))}g.isMDXComponent=!0},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a,o=e.lazy,m=e.block,c=e.defaultValue,k=e.values,g=e.groupId,N=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,x=v.setTabGroupChoices,T=(0,r.useState)(b),R=T[0],C=T[1],S=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=w[g];null!=I&&I!==R&&h.some((function(e){return e.value===I}))&&C(I)}var A=function(e){var t=e.currentTarget,a=S.indexOf(t),n=h[a].value;n!==R&&(P(t),C(n),null!=g&&x(g,String(n)))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var l,o=S.indexOf(e.currentTarget)-1;a=null!=(l=S[o])?l:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},N)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function c(e){var t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);