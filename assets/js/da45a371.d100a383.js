"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6026],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=l,g=d["".concat(r,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83543:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"ImagePullJob"},r=void 0,u={unversionedId:"user-manuals/imagepulljob",id:"version-v1.6/user-manuals/imagepulljob",title:"ImagePullJob",description:"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version.",source:"@site/versioned_docs/version-v1.6/user-manuals/imagepulljob.md",sourceDirName:"user-manuals",slug:"/user-manuals/imagepulljob",permalink:"/docs/v1.6/user-manuals/imagepulljob",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/imagepulljob.md",tags:[],version:"v1.6",lastUpdatedBy:"berg",lastUpdatedAt:1711105168,formattedLastUpdatedAt:"3/22/2024",frontMatter:{title:"ImagePullJob"},sidebar:"docs",previous:{title:"Container Restart",permalink:"/docs/v1.6/user-manuals/containerrecreaterequest"},next:{title:"ResourceDistribution",permalink:"/docs/v1.6/user-manuals/resourcedistribution"}},p={},m=[{value:"Feature-gate",id:"feature-gate",level:2},{value:"ImagePullJob (high-level)",id:"imagepulljob-high-level",level:2},{value:"configure secrets",id:"configure-secrets",level:3},{value:"Attach metadata into cri interface",id:"attach-metadata-into-cri-interface",level:3},{value:"Image Pull Policy support &#39;Always&#39;",id:"image-pull-policy-support-always",level:3},{value:"ImageListPullJob",id:"imagelistpulljob",level:2},{value:"NodeImage (low-level)",id:"nodeimage-low-level",level:2}],d={toc:m};function c(e){var t=e.components,s=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version."),(0,o.kt)("p",null,"Kruise will create a NodeImage for each Node, and it contains images that should be downloaded on this Node."),(0,o.kt)("p",null,"Users can create an ImagePullJob to declare an image should be downloaded on which nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image Pulling",src:a(82587).Z,width:"3053",height:"1653"})),(0,o.kt)("p",null,"Note that the NodeImage is quite ",(0,o.kt)("strong",{parentName:"p"},"a low-level API"),". You should only use it when you prepare to pull an image on a definite Node.\nOtherwise, you should ",(0,o.kt)("strong",{parentName:"p"},"use the ImagePullJob to pull an image on a batch of Nodes.")),(0,o.kt)("h2",{id:"feature-gate"},"Feature-gate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Since kruise v1.5.0")," ImagePullJob/ImageListPullJob feature is turned off by default to reduce the privilege of default installation. One can turn it on by setting feature-gate ImagePullJobGate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install/upgrade kruise https://... --set featureGates="ImagePullJobGate=true"\n')),(0,o.kt)("h2",{id:"imagepulljob-high-level"},"ImagePullJob (high-level)"),(0,o.kt)("p",null,"ImagePullJob is a ",(0,o.kt)("strong",{parentName:"p"},"namespaced-scope")," resource."),(0,o.kt)("p",null,"API definition: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nmetadata:\n  name: job-with-always\nspec:\n  image: nginx:1.9.1   # [required] image to pull\n  parallelism: 10      # [optional] the maximal number of Nodes that pull this image at the same time, defaults to 1\n  selector:            # [optional] the names or label selector to assign Nodes (only one of them can be set)\n    names:\n    - node-1\n    - node-2\n    matchLabels:\n      node-type: xxx\n# podSelector:         # [optional] label selector over pods that should pull image on nodes of these pods. Mutually exclusive with selector.\n#   matchLabels:\n#     pod-label: xxx\n#   matchExpressions:\n#   - key: pod-label\n#     operator: In\n#     values:\n#     - xxx\n  completionPolicy:\n    type: Always                  # [optional] defaults to Always\n    activeDeadlineSeconds: 1200   # [optional] no default, only work for Always type\n    ttlSecondsAfterFinished: 300  # [optional] no default, only work for Always type\n  pullPolicy:                     # [optional] defaults to backoffLimit=3, timeoutSeconds=600\n    backoffLimit: 3\n    timeoutSeconds: 300\n")),(0,o.kt)("p",null,"You can write the names or label selector in the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," field to assign Nodes ",(0,o.kt)("strong",{parentName:"p"},"(only one of them can be set)"),".\nIf no ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," is set, the image will be pulled on all Nodes in the cluster."),(0,o.kt)("p",null,"Or you can write the podSelector to pull image on nodes of these pods. ",(0,o.kt)("inlineCode",{parentName:"p"},"podSelector")," is mutually exclusive with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,o.kt)("p",null,"Also, ImagePullJob has two completionPolicy types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Always")," means this job will eventually complete with either failed or succeeded.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activeDeadlineSeconds"),": timeout duration for this job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ttlSecondsAfterFinished"),": after this job finished (including success or failure) over this time, this job will be removed"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Never")," means this job will never complete, it will continuously pull image on the desired Nodes every day.")),(0,o.kt)("h3",{id:"configure-secrets"},"configure secrets"),(0,o.kt)("p",null,"If the image is in a private registry, you may want to configure the pull secrets for the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  pullSecrets:\n  - secret-name1\n  - secret-name2\n")),(0,o.kt)("p",null,"Because of ImagePullJob is a namespaced-scope resource, the secrets should be in the same namespace of this ImagePullJob,\nand you should only put the secret names into ",(0,o.kt)("inlineCode",{parentName:"p"},"pullSecrets")," field."),(0,o.kt)("h3",{id:"attach-metadata-into-cri-interface"},"Attach metadata into cri interface"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.4.0"),(0,o.kt)("p",null,"When kubelet creates pods, kubelet will attach pod metadata as podSandboxConfig params in the PullImage CRI interface.\nThe OpenKruise ImagePullJob also supports the similar capability, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  sandboxConfig:\n    annotations:\n      io.kubernetes.image.metrics.tags: "cluster=cn-shanghai"\n    labels:\n      io.kubernetes.image.app: "foo"\n')),(0,o.kt)("h3",{id:"image-pull-policy-support-always"},"Image Pull Policy support 'Always'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.6.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spec.imagePullPolicy=Always")," means that kruise always attempts to pull the latest image, even if with the name as previous one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"spec.imagePullPolicy=IfNotPresent")," means that kruise only pull the image if it isn't present on node."),(0,o.kt)("li",{parentName:"ul"},"Defaults is IfNotPresent.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nspec:\n  ...\n  image: nginx:1.9.1\n  imagePullPolicy: Always | IfNotPresent\n")),(0,o.kt)("h2",{id:"imagelistpulljob"},"ImageListPullJob"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.5.0"),(0,o.kt)("p",null,"ImagePullJob can only support a single image pre-download, one can use multiple ImagePullJob to download multiple images, or use ImageListPullJob to pre-download multiple images in a single job, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImageListPullJob\nmetadata:\n  name: job-with-always\nspec:\n  images:\n  - nginx:1.9.1   # [required] image to pull\n  - busybox:1.29.2\n  parallelism: 10      # [optional] the maximal number of Nodes that pull this image at the same time, defaults to 1\n  selector:            # [optional] the names or label selector to assign Nodes (only one of them can be set)\n    names:\n    - node-1\n    - node-2\n    matchLabels:\n      node-type: xxx\n  completionPolicy:\n    type: Always                  # [optional] defaults to Always\n    activeDeadlineSeconds: 1200   # [optional] no default, only work for Always type\n    ttlSecondsAfterFinished: 300  # [optional] no default, only work for Always type\n  pullPolicy:                     # [optional] defaults to backoffLimit=3, timeoutSeconds=600\n    backoffLimit: 3\n    timeoutSeconds: 300\n")),(0,o.kt)("h2",{id:"nodeimage-low-level"},"NodeImage (low-level)"),(0,o.kt)("p",null,"NodeImage is a ",(0,o.kt)("strong",{parentName:"p"},"cluster-scope")," resource."),(0,o.kt)("p",null,"API definition: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go")),(0,o.kt)("p",null,"When Kruise has been installed, nodeimage-controller will create NodeImages for Nodes with the same names immediately.\nAnd when a Node has been added or removed, nodeimage-controller will also create or delete NodeImage for this Node."),(0,o.kt)("p",null,"What's more, nodeimage-controller will also synchronize labels from Node to NodeImage. So the NodeImage and Node always have\nthe same name and labels. You can get NodeImage with the Node name, or list NodeImage with the Node labels as selector."),(0,o.kt)("p",null,"Typically, an empty NodeImage looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: NodeImage\nmetadata:\n  labels:\n    kubernetes.io/arch: amd64\n    kubernetes.io/os: linux\n    # ...\n  name: node-xxx\n  # ...\nspec: {}\nstatus:\n  desired: 0\n  failed: 0\n  pulling: 0\n  succeeded: 0\n")),(0,o.kt)("p",null,"If you want to pull an image such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu:latest")," on this Node, you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"kubectl edit nodeimage node-xxx")," and write below into it (ignore the comments):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  images:\n    ubuntu:  # image name\n      tags:\n      - tag: latest  # image tag\n        pullPolicy:\n          ttlSecondsAfterFinished: 300  # [required] after this image pulling finished (including success or failure) over 300s, this task will be removed\n          timeoutSeconds: 600           # [optional] timeout duration for once pulling, defaults to 600\n          backoffLimit: 3               # [optional] retry times for pulling, defaults to 3\n          activeDeadlineSeconds: 1200   # [optional] timeout duration for this task, no default\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},'kubectl patch nodeimage node-xxx --type=merge -p \'{"spec":{"images":{"ubuntu":{"tags":[{"tag":"latest","pullPolicy":{"ttlSecondsAfterFinished":300}}]}}}}\''))),(0,o.kt)("p",null,"You can read the NodeImage status using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get nodeimage node-xxx -o yaml"),",\nand you will find the task removed from spec and status after it has finished over 300s."))}c.isMDXComponent=!0},82587:function(e,t,a){t.Z=a.p+"assets/images/imagepulling-1963144d8f1b12d5603c3606585a0b00.png"}}]);