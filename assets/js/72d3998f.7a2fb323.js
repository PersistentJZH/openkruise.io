"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2047],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={title:"BroadcastJob"},s=void 0,d={unversionedId:"user-manuals/broadcastjob",id:"version-v1.3/user-manuals/broadcastjob",title:"BroadcastJob",description:"This controller distributes a Pod on every node in the cluster.",source:"@site/versioned_docs/version-v1.3/user-manuals/broadcastjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/broadcastjob",permalink:"/docs/v1.3/user-manuals/broadcastjob",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/broadcastjob.md",tags:[],version:"v1.3",lastUpdatedBy:"ls-2018",lastUpdatedAt:1694497989,formattedLastUpdatedAt:"9/12/2023",frontMatter:{title:"BroadcastJob"},sidebar:"docs",previous:{title:"Advanced DaemonSet",permalink:"/docs/v1.3/user-manuals/advanceddaemonset"},next:{title:"AdvancedCronJob",permalink:"/docs/v1.3/user-manuals/advancedcronjob"}},c={},p=[{value:"Spec definition",id:"spec-definition",level:2},{value:"Template",id:"template",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"CompletionPolicy",id:"completionpolicy",level:3},{value:"Always (default)",id:"always-default",level:4},{value:"Never",id:"never",level:4},{value:"FailurePolicy",id:"failurepolicy",level:3},{value:"Type",id:"type",level:4},{value:"RestartLimit",id:"restartlimit",level:4},{value:"Examples",id:"examples",level:2},{value:"Monitor BroadcastJob status",id:"monitor-broadcastjob-status",level:3},{value:"ttlSecondsAfterFinished",id:"ttlsecondsafterfinished",level:3},{value:"activeDeadlineSeconds",id:"activedeadlineseconds",level:3},{value:"completionPolicy",id:"completionpolicy-1",level:3},{value:"failurePolicy",id:"failurepolicy-1",level:3},{value:"restartLimit",id:"restartlimit-1",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This controller distributes a Pod on every node in the cluster.\nLike a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),",\na BroadcastJob makes sure a Pod is created and run on all selected nodes once in a cluster.\nLike a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Job"),",\na BroadcastJob is expected to run to completion.  "),(0,o.kt)("p",null,"In the end, BroadcastJob does not consume any resources after each Pod succeeds on every node.\nThis controller is particularly useful when upgrading a software, e.g., Kubelet, or validation check\nin every node, which is typically needed only once within a long period of time or\nrunning an adhoc full cluster inspection script."),(0,o.kt)("p",null,"Optionally, a BroadcastJob can keep alive after all Pods on desired nodes complete\nso that a Pod will be automatically launched for every new node after it is added to the cluster."),(0,o.kt)("h2",{id:"spec-definition"},"Spec definition"),(0,o.kt)("h3",{id:"template"},"Template"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Template")," describes the Pod template used to run the job.\nNote that for the Pod restart policy, only ",(0,o.kt)("inlineCode",{parentName:"p"},"Never")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"OnFailure")," is allowed for BroadcastJob."),(0,o.kt)("h3",{id:"parallelism"},"Parallelism"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parallelism")," specifies the maximal desired number of Pods that should be run at\nany given time. By default, there's no limit."),(0,o.kt)("p",null,"For example, if a cluster has ten nodes and ",(0,o.kt)("inlineCode",{parentName:"p"},"Parallelism")," is set to three, there can only be\nthree pods running in parallel. A new Pod is created only after one running Pod finishes."),(0,o.kt)("h3",{id:"completionpolicy"},"CompletionPolicy"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CompletionPolicy")," specifies the controller behavior when reconciling the BroadcastJob."),(0,o.kt)("h4",{id:"always-default"},"Always (default)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Always")," policy means the job will eventually complete with either failed or succeeded\ncondition. The following parameters take effect with this policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds")," specifies the duration in seconds relative to the startTime\nthat the job may be active before the system tries to terminate it.\nFor example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds")," is set to 60 seconds, after the BroadcastJob starts\nrunning for 60 seconds, all the running pods will be deleted and the job will be marked\nas Failed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," limits the lifetime of a BroadcastJob that has finished execution\n(either Complete or Failed). For example, if TTLSecondsAfterFinished is set to 10 seconds,\nthe job will be kept for 10 seconds after it finishes. Then the job along with all the Pods\nwill be deleted."))),(0,o.kt)("h4",{id:"never"},"Never"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Never")," policy means the BroadcastJob will never be marked as Failed or Succeeded even if\nall Pods run to completion. This also means above ",(0,o.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"FailurePolicy.RestartLimit")," parameters takes no effect if ",(0,o.kt)("inlineCode",{parentName:"p"},"Never")," policy is used.\nFor example, if user wants to perform an initial configuration validation for every newly\nadded node in the cluster, he can deploy a BroadcastJob with ",(0,o.kt)("inlineCode",{parentName:"p"},"Never")," policy."),(0,o.kt)("h3",{id:"failurepolicy"},"FailurePolicy"),(0,o.kt)("h4",{id:"type"},"Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Type")," indicates the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"FailurePolicyType"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Continue")," means the job will be still running, when failed pod is found."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FailFast"),"(default) means the job will be failed, when failed pod is found."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pause")," means the job will be paused, when failed pod is found.")),(0,o.kt)("h4",{id:"restartlimit"},"RestartLimit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RestartLimit")," specifies the number of retries before marking the pod failed.\nCurrently, the number of retries are defined as the aggregated number of restart\ncounts across all Pods created by the job, i.e., the sum of the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kruiseio/kruise/blob/d61c12451d6a662736c4cfc48682fa75c73adcbc/vendor/k8s.io/api/core/v1/types.go#L2314"},"ContainerStatus.RestartCount"),"\nfor all containers in every Pod.  If this value exceeds ",(0,o.kt)("inlineCode",{parentName:"li"},"RestartLimit"),", the job is marked\nas Failed and all running Pods are deleted. No limit is enforced if ",(0,o.kt)("inlineCode",{parentName:"li"},"RestartLimit")," is\nnot set.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"monitor-broadcastjob-status"},"Monitor BroadcastJob status"),(0,o.kt)("p",null," Assuming the cluster has only one node, run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get bcj")," (shortcut name for BroadcastJob) and\nwe will see the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," NAME                 DESIRED   ACTIVE   SUCCEEDED   FAILED\n broadcastjob-sample  1         0        1           0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Desired")," : The number of desired Pods. This equals to the number of matched nodes in the cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Active"),": The number of active Pods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUCCEEDED"),": The number of succeeded Pods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FAILED"),": The number of failed Pods.")),(0,o.kt)("h3",{id:"ttlsecondsafterfinished"},"ttlSecondsAfterFinished"),(0,o.kt)("p",null,"Run a BroadcastJob that each Pod computes a pi, with ",(0,o.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterFinished")," set to 30.\nThe job will be deleted in 30 seconds after it is finished."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-ttl\nspec:\n  template:\n    spec:\n      containers:\n        - name: pi\n          image: perl\n          command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    ttlSecondsAfterFinished: 30\n')),(0,o.kt)("h3",{id:"activedeadlineseconds"},"activeDeadlineSeconds"),(0,o.kt)("p",null,"Run a BroadcastJob that each Pod sleeps for 50 seconds, with ",(0,o.kt)("inlineCode",{parentName:"p"},"activeDeadlineSeconds")," set to 10 seconds.\nThe job will be marked as Failed after it runs for 10 seconds, and the running Pods will be deleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-active-deadline\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep", "50000"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    activeDeadlineSeconds: 10\n')),(0,o.kt)("h3",{id:"completionpolicy-1"},"completionPolicy"),(0,o.kt)("p",null,"Run a BroadcastJob with ",(0,o.kt)("inlineCode",{parentName:"p"},"Never")," completionPolicy. The job will continue to run even if all Pods have completed on all nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-never-complete\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep", "5"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Never\n')),(0,o.kt)("h3",{id:"failurepolicy-1"},"failurePolicy"),(0,o.kt)("h4",{id:"restartlimit-1"},"restartLimit"),(0,o.kt)("p",null,"Run a BroadcastJob with ",(0,o.kt)("inlineCode",{parentName:"p"},"FailFast")," failurePolicy. The job will be failed, when failed pod is found."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-restart-limit\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["cat", "/path/not/exist"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Never\n  failurePolicy:\n    type: FailFast\n    restartLimit: 3\n')))}m.isMDXComponent=!0}}]);