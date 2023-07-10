"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2964],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6445:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Hot Update",c={unversionedId:"user-manuals/hot-update",id:"user-manuals/hot-update",title:"Hot Update",description:"Game server update is a crucial part of game server application delivery.",source:"@site/kruisegame/user-manuals/hot-update.md",sourceDirName:"user-manuals",slug:"/user-manuals/hot-update",permalink:"/kruisegame/user-manuals/hot-update",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1688954771,formattedLastUpdatedAt:"7/10/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Deploy Gameservers",permalink:"/kruisegame/user-manuals/deploy-gameservers"},next:{title:"Update Strategy",permalink:"/kruisegame/user-manuals/update-strategy"}},d={},p=[{value:"GameServer &amp; Container",id:"gameserver--container",level:2},{value:"Hot updates of game servers based on in-place update",id:"hot-updates-of-game-servers-based-on-in-place-update",level:2},{value:"In-place update",id:"in-place-update",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Reload methods after file hot update",id:"reload-methods-after-file-hot-update",level:3},{value:"Manual batch reload",id:"manual-batch-reload",level:4},{value:"Track the hot update file directory through inotify",id:"track-the-hot-update-file-directory-through-inotify",level:4},{value:"Triggering HTTP requests in the sidecar",id:"triggering-http-requests-in-the-sidecar",level:4},{value:"Fully managed hot reload",id:"fully-managed-hot-reload",level:4},{value:"In-place hot update during server downtime",id:"in-place-hot-update-during-server-downtime",level:3},{value:"Network metadata remains unchanged",id:"network-metadata-remains-unchanged",level:4},{value:"Shared memory is not lost",id:"shared-memory-is-not-lost",level:4}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hot-update"},"Hot Update"),(0,i.kt)("p",null,"Game server update is a crucial part of game server application delivery.\nAs a stateful type of service, game server updates often require higher demands on cloud-native infrastructure.\nThis article mainly introduces how to use OKG's in-place update capability to achieve hot updates of game servers."),(0,i.kt)("h2",{id:"gameserver--container"},"GameServer & Container"),(0,i.kt)("p",null,"Before introducing the hot update method, we may need to clarify the relationship between game servers and containers.\nIn the concept of OKG, a game server (GameServer) can contain multiple containers, each container serving a different function and corresponding to different container images.\nOf course, a game server can also contain only one container.\nWhether a game server contains one or multiple containers corresponds to two different architectural concepts."),(0,i.kt)("p",null,"For game servers with only one container, they are closer to the management approach of virtual machines.\nWhether it is state management or hot updates of small versions, they do not rely on the capabilities of Kubernetes, but follow the traditional management approach.\nFor example, in the single container of a game server, there may be multiple processes, scripts or configuration files.\nThe game engine's resident process is usually implemented by building a new container for new version releases, and updates to new scripts, resources, or configurations often rely on object storage volumes or dynamic pulling of self-developed programs.\nAnd the update situation is judged by the business itself, and the entire process is carried out in a non-cloud-native manner.\nWe call this type of game server a rich container. The problem with hot updates of rich containers is that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is impossible to perform cloud-native version management on scripts/resources/configuration files. Since the container image has not changed, the version of the script files running in the current container is unknown to the operations personnel. After the game is launched, the iteration of small versions is very frequent. When a fault occurs, a system without version management will be difficult to locate the problem, which greatly increases the complexity of operations."),(0,i.kt)("li",{parentName:"ul"},"It is difficult to locate the update status. Even if the files in the container have been updated and replaced, it is difficult to determine whether the current hot update file has been mounted when executing the reload command. The maintenance of the success or failure of this update status needs to be managed by the operations personnel, which also increases the complexity of operations to a certain extent."),(0,i.kt)("li",{parentName:"ul"},"It is impossible to perform gradual upgrades. When updating, in order to control the scope of impact, it is often necessary to update the game servers with low importance first, and then gradually update the remaining game servers after confirmation. However, it is difficult to achieve gradual release, whether it is through object storage mounts or program pulling. Once there is a problem with a full release, the impact will be significant."),(0,i.kt)("li",{parentName:"ul"},"When the container is abnormal, the pod rebuilds and pulls up the old version image, and the hot update file is not continuously saved.")),(0,i.kt)("p",null,"For the hot update scenario of game servers, a more ideal approach is to use a multi-container game server architecture, where the hot update part is deployed as a sidecar container along with the main container in the same game server (GameServer), and the two share the hot update files through emptyDir. Only the sidecar container needs to be updated during updates. In this way, the hot update of game servers will be carried out in a cloud-native manner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The sidecar container image has version attributes, solving the version management problem."),(0,i.kt)("li",{parentName:"ul"},"After the Kubernetes container update is successful, it is in the Ready state and can perceive whether the sidecar update is successful."),(0,i.kt)("li",{parentName:"ul"},"OKG provides various update strategies, and the release objects can be controlled according to the release requirements to complete the gradual release."),(0,i.kt)("li",{parentName:"ul"},"Even if the container is abnormally restarted, the hot update file is continuously saved along with the solidification of the image.")),(0,i.kt)("h2",{id:"hot-updates-of-game-servers-based-on-in-place-update"},"Hot updates of game servers based on in-place update"),(0,i.kt)("h3",{id:"in-place-update"},"In-place update"),(0,i.kt)("p",null,"In standard Kubernetes, application updates are implemented by changing the Image field in the resource object.\nHowever, in the native workload managed by Deployment or StatefulSet, the pod will be rebuilt after updating the Image, and the lifecycle of the pod is coupled with the lifecycle of the container.\nThe multi-container architecture of game server hot updates mentioned earlier becomes a joke under the native workload of Kubernetes."),(0,i.kt)("p",null,"OKG's GameServerSet provides the ability of in-place upgrade, which can update a specific container without recreating the entire game server while ensuring that the entire game server lifecycle remains unchanged.\nDuring the update process of the sidecar container, the game server runs normally, and the players will not be affected."),(0,i.kt)("p",null,"As shown in the figure below, the blue part is the hot update part, and the orange part is the non-hot update part.\nAfter we update the Game Script container from version V1 to version V2, the entire pod will not be rebuilt, and the orange part will not be affected.\nThe Game Engine runs smoothly and normally."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hot-update.png",src:a(2200).Z,width:"712",height:"266"})),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,"In this article, we will use the 2048 web version as an example.\nIn the example, we will see how to update game scripts without affecting the lifecycle of the game server."),(0,i.kt)("p",null,"Deploy the game server with a sidecar container using GameServerSet as the game server workload, and set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose in-place upgrade as the pod update strategy"),(0,i.kt)("li",{parentName:"ul"},"Use AlibabaCloud-SLB network model to expose services"),(0,i.kt)("li",{parentName:"ul"},"There are two containers, where app-2048 is the main container that carries the main game logic, and the sidecar is the companion container that stores the hot update files. The two containers share a file directory through emptyDir.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the sidecar starts, it synchronizes the files in the directory that stores the hot update files (/app/js) to the shared directory (/app/scripts), and sleeps without exiting after synchronization."),(0,i.kt)("li",{parentName:"ul"},"The app-2048 container uses the game scripts under the /var/www/html/js directory.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: gss-2048\n  namespace: default\nspec:\n  replicas: 1\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  network:\n    networkType: AlibabaCloud-SLB\n    networkConf:\n      - name: SlbIds\n        value: lb-bp1oqahx3jnr7j3f6vyp8\n      - name: PortProtocols\n        value: 80/TCP\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048:v1.0\n          name: app-2048\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /var/www/html/js\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v1.0\n          name: sidecar\n          args:\n            - bash\n            - -c\n            - rsync -aP /app/js/* /app/scripts/ && while true; do echo 11;sleep 2; done\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /app/scripts\n      volumes:\n        - name: shared-dir\n          emptyDir: {}\nEOF\n")),(0,i.kt)("p",null,"Create one GameServer and its corresponding Pod."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME          STATE   OPSSTATE   DP    UP   AGE\ngss-2048-0    Ready   None       0     0    13s\n\nkubectl get pod\nNAME          READY   STATUS    RESTARTS   AGE\ngss-2048-0    2/2     Running   0          13s\n")),(0,i.kt)("p",null,"At this point, access the game webpage (the game server network-related content can refer to the network model documentation), and when the game ends, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Game over!")," message will be displayed."),(0,i.kt)("img",{src:a(1078).Z,style:{height:"600px",width:"400px"}}),(0,i.kt)("p",null,"Next, we want to update the game server script to change the display message when the game ends to ",(0,i.kt)("inlineCode",{parentName:"p"},"*_* Game over!")),(0,i.kt)("p",null,"Modify the corresponding script file html_actuator.js, and build a new sidecar image, naming the image tag as v2.0. (In actual production, this process can be completed through the CI process.)"),(0,i.kt)("p",null,"After building & pushing the image, only need to update the container image tag corresponding to the GameServerSet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss gss-2048\n...\n      - image: registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v2.0\n        name: sidecar\n...\n")),(0,i.kt)("p",null,"After a period of time, it was noticed that the gs has changed from Updating to Ready, the Pod has been updated, the restarts count has changed to 1, but the Age has not decreased."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\nNAME             READY   STATUS    RESTARTS      AGE\ngss-2048-0       2/2     Running   1 (33s ago)   8m55s\n")),(0,i.kt)("p",null,"At this point, execute the reload command on the app-2048 container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec gss-2048-0 -c app-2048 -- /usr/sbin/nginx -s reload\n")),(0,i.kt)("p",null,"Open an incognito browser, play the game, and the updated message will be displayed when the game ends."),(0,i.kt)("img",{src:a(7067).Z,style:{height:"600px",width:"400px"}}),(0,i.kt)("h3",{id:"reload-methods-after-file-hot-update"},"Reload methods after file hot update"),(0,i.kt)("p",null,"In the example above, the exec command was used to reload a single pod.\nHowever, when managing in batches, the reload operation becomes too cumbersome and complex.\nBelow are a few file hot reload methods for reference."),(0,i.kt)("h4",{id:"manual-batch-reload"},"Manual batch reload"),(0,i.kt)("p",null,"When all game servers are updated to Ready, use the batch management tool ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl-pexec")," to execute the exec reload command in the container in batches."),(0,i.kt)("h4",{id:"track-the-hot-update-file-directory-through-inotify"},"Track the hot update file directory through inotify"),(0,i.kt)("p",null,"inotify is a Linux file monitoring system framework. Through inotify, the main game server business container can listen for changes in files in the hot update file directory, triggering an update."),(0,i.kt)("p",null,"To use inotify, you need to install inotify-tools in the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install inotify-tools\n")),(0,i.kt)("p",null,"Taking the 2048 game as an example, on top of the original image, the app-2048 container listens to the /var/www/html/js/ directory, and automatically executes the reload command when it detects changes in the file."),(0,i.kt)("p",null,"The script is shown below and can be executed when the container starts.\nIt is worth noting that the reload command should be idempotent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%T %w%f%e' -e modify,delete,create,attrib /var/www/html/js/ |  while read file\ndo\n    /usr/sbin/nginx -s reload\n    echo \"reload successfully\"\ndone\n")),(0,i.kt)("p",null,"The above program is integrated into the image and a new image ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.cn-beijing.aliyuncs.com/acs/2048:v1.0-inotify")," is built.\nIn the subsequent experiment (with other fields unchanged), it can be observed that the entire hot update process no longer requires manual input of the reload command after the sidecar image is replaced with v2.0.\nThe complete YAML is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: GameServerSet\nmetadata:\n  name: gss-2048\n  namespace: default\nspec:\n  replicas: 1\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  network:\n    networkType: AlibabaCloud-SLB\n    networkConf:\n      - name: SlbIds\n        value: lb-bp1oqahx3jnr7j3f6vyp8\n      - name: PortProtocols\n        value: 80/TCP\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048:v1.0-inotify\n          name: app-2048\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /var/www/html/js\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v1.0 #Replace with v2.0 during hot update\n          name: sidecar\n          args:\n            - bash\n            - -c\n            - rsync -aP /app/js/* /app/scripts/ && while true; do echo 11;sleep 2; done\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /app/scripts\n      volumes:\n        - name: shared-dir\n          emptyDir: {}\n")),(0,i.kt)("h4",{id:"triggering-http-requests-in-the-sidecar"},"Triggering HTTP requests in the sidecar"),(0,i.kt)("p",null,"The main game server business container exposes an HTTP interface, and the sidecar sends a reload request to 127.0.0.1 after it successfully starts.\nDue to the fact that the containers in the pod share the same network namespace, the main container will perform file reloads upon receiving the request."),(0,i.kt)("p",null,"Taking the 2048 game as an example, on top of the original image:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The app-2048 container adds a reload interface. Below is an example of the JS code:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var http = require('http');\nvar exec = require('child_process').exec;\n\nvar server = http.createServer(function(req, res) {\n  if (req.url === '/reload') {\n    exec('/usr/sbin/nginx -s reload', function(error, stdout, stderr) {\n      if (error) {\n        console.error('exec error: ' + error);\n        res.statusCode = 500;\n        res.end('Error: ' + error.message);\n        return;\n      }\n      console.log('stdout: ' + stdout);\n      console.error('stderr: ' + stderr);\n      res.statusCode = 200;\n      res.end();\n    });\n  } else {\n    res.statusCode = 404;\n    res.end('Not found');\n  }\n});\n\nserver.listen(3000, function() {\n  console.log('Server is running on port 3000');\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the same time, the sidecar container adds a request script request.sh. After the container is started, the postStart hook is used to add the command to send the request, as shown below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n          name: sidecar\n          lifecycle:\n            postStart:\n              exec:\n                command:\n                  - bash\n                  - -c\n                  - ./request.sh\n...\n")),(0,i.kt)("p",{parentName:"li"},"The corresponding request.sh script is shown below, which has a retry mechanism and will exit only after confirming that the reload was successful."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# \u5faa\u73af\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u76f4\u5230\u670d\u52a1\u5668\u8fd4\u56de\u6210\u529f\u54cd\u5e94\u4e3a\u6b62\nwhile true; do\n  response=$(curl -s -w "%{http_code}" http://localhost:3000/reload)\n  if [[ $response -eq 200 ]]; then\n    echo "Server reloaded successfully!"\n    break\n  else\n    echo "Server reload failed, response code: $response"\n  fi\n  sleep 1\ndone\n')))),(0,i.kt)("p",null,"In this way, automatic reload can be achieved after file updates."),(0,i.kt)("p",null,"The above program is integrated into the image and a new image is built as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry.cn-beijing.aliyuncs.com/acs/2048:v1.0-http")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v1.0-http")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v2.0-http"))),(0,i.kt)("p",null,"Replace the new image and run the experiment again (note that the sidecar in the YAML needs to add the lifecycle field).\nAfter replacing the v1.0-http sidecar image with v2.0-http, it can be observed that the entire hot update process no longer requires manual input of the reload command.\nThe complete YAML is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: GameServerSet\nmetadata:\n  name: gss-2048\n  namespace: default\nspec:\n  replicas: 1\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  network:\n    networkType: AlibabaCloud-SLB\n    networkConf:\n      - name: SlbIds\n        value: lb-bp1oqahx3jnr7j3f6vyp8\n      - name: PortProtocols\n        value: 80/TCP\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048:v1.0-http\n          name: app-2048\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /var/www/html/js\n        - image: registry.cn-beijing.aliyuncs.com/acs/2048-sidecar:v1.0-http #Replace with v2.0-http during hot update\n          name: sidecar\n          lifecycle:\n            postStart:\n              exec:\n                command:\n                  - bash\n                  - -c\n                  - ./request.sh\n          args:\n            - bash\n            - -c\n            - rsync -aP /app/js/* /app/scripts/ && while true; do echo 11;sleep 2; done\n          volumeMounts:\n            - name: shared-dir\n              mountPath: /app/scripts\n      volumes:\n        - name: shared-dir\n          emptyDir: {}\n")),(0,i.kt)("h4",{id:"fully-managed-hot-reload"},"Fully managed hot reload"),(0,i.kt)("p",null,"OKG has the ability to trigger the execution of commands in containers.\nBased on this feature, OKG can provide fully automated hot update capabilities, allowing users to no longer overly concern themselves with hot reload issues.\nIf you have such requirements, you can submit an issue on GitHub and discuss the OKG hot reload feature development roadmap with community developers."),(0,i.kt)("h3",{id:"in-place-hot-update-during-server-downtime"},"In-place hot update during server downtime"),(0,i.kt)("p",null,"In a gaming scenario, hot update in a narrow sense refers to updates that do not affect players' normal gameplay without stopping the server.\nHowever, in some scenarios, game server downtime updates also require in-place upgrade capabilities."),(0,i.kt)("h4",{id:"network-metadata-remains-unchanged"},"Network metadata remains unchanged"),(0,i.kt)("p",null,"The stateful nature of game servers is often reflected in network information.\nSince each game server is unique and cannot use the concept of k8s service load balancing, game developers often implement routing and distribution mechanisms based on IP.\nIn this case, when updating the game, we need to avoid changes in the game server IP information.\nOKG's in-place upgrade capability can meet the above requirements."),(0,i.kt)("h4",{id:"shared-memory-is-not-lost"},"Shared memory is not lost"),(0,i.kt)("p",null,"After the game server is created, it is scheduled to a certain host, and the game business uses shared memory to reduce data write latency, so that the game server adds a layer of cache locally.\nDuring game server updates, although there may be a short service interruption, due to the existence of the cache, the game server has a fast termination and startup speed, and the downtime is greatly reduced.\nThe implementation of shared memory also depends on OKG's in-place upgrade capabilities to ensure that the corresponding cache data is not lost."))}h.isMDXComponent=!0},1078:function(e,t,a){t.Z=a.p+"assets/images/2048-v1-1be743c38e1adf20a9d80b02de03ba65.png"},7067:function(e,t,a){t.Z=a.p+"assets/images/2048-v2-11052c4849ab4eda2bf0136ab1deb408.png"},2200:function(e,t,a){t.Z=a.p+"assets/images/hot-update-1dd12ed5397ac13cd11a381d2358855c.png"}}]);