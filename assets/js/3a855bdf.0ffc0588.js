"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2309],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,p=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return a?n.createElement(p,r(r({ref:t},m),{},{components:a})):n.createElement(p,r({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87075:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),r=["components"],i={},l="Best Practice for Session-Based Games(PvP room)",c={unversionedId:"best-practices/session-based-game",id:"best-practices/session-based-game",title:"Best Practice for Session-Based Games(PvP room)",description:'Session-based games refer to a type of game where players are gathered in a specific game scenario within a limited time frame. In general, a session is equivalent to a match, and after the match ends, the game relationship between players also ends, and the session terminates as well. Therefore, in the industry, session-based games are commonly understood as "room-based games," where a room hosts the corresponding game session. These types of games often have the following characteristics:',source:"@site/kruisegame/best-practices/session-based-game.md",sourceDirName:"best-practices",slug:"/best-practices/session-based-game",permalink:"/kruisegame/best-practices/session-based-game",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1704365477,formattedLastUpdatedAt:"1/4/2024",frontMatter:{},sidebar:"kruisegame",previous:{title:"CRD Field Description",permalink:"/kruisegame/user-manuals/crd-field-description"},next:{title:"Best Practices for Traditional PvE Games",permalink:"/kruisegame/best-practices/pve-game"}},m={},h=[{value:"Direct Network Connectivity",id:"direct-network-connectivity",level:2},{value:"Choosing the OpenKruiseGame Networking Model",id:"choosing-the-openkruisegame-networking-model",level:3},{value:"Obtaining Room Server Network Information",id:"obtaining-room-server-network-information",level:3},{value:"Game Matching",id:"game-matching",level:2},{value:"Implementing Game Matching Service with OpenMatch",id:"implementing-game-matching-service-with-openmatch",level:3},{value:"Custom Game Matching Service",id:"custom-game-matching-service",level:3},{value:"State Management",id:"state-management",level:2},{value:"State Type for Session-Based Games",id:"state-type-for-session-based-games",level:3},{value:"Reveal the status of room service through service quality",id:"reveal-the-status-of-room-service-through-service-quality",level:3},{value:"Elastic scaling",id:"elastic-scaling",level:2},{value:"Room service is automatically reduced",id:"room-service-is-automatically-reduced",level:3},{value:"Room service automatically added",id:"room-service-automatically-added",level:3},{value:"Resource automatic scaling",id:"resource-automatic-scaling",level:3},{value:"Game Room Hot-Update",id:"game-room-hot-update",level:2},{value:"Existing game rooms will not be updated",id:"existing-game-rooms-will-not-be-updated",level:3},{value:"Linkage with matching system",id:"linkage-with-matching-system",level:3},{value:"Complete smooth upgrade through automatic scaling",id:"complete-smooth-upgrade-through-automatic-scaling",level:3}],d={toc:h};function u(e){var t=e.components,i=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practice-for-session-based-gamespvp-room"},"Best Practice for Session-Based Games(PvP room)"),(0,o.kt)("p",null,'Session-based games refer to a type of game where players are gathered in a specific game scenario within a limited time frame. In general, a session is equivalent to a match, and after the match ends, the game relationship between players also ends, and the session terminates as well. Therefore, in the industry, session-based games are commonly understood as "room-based games," where a room hosts the corresponding game session. These types of games often have the following characteristics:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Game time is non-continuous, with distinct start and stop time points."),(0,o.kt)("li",{parentName:"ul"},"Commonly found in MOBA, FPS games with high latency requirements."),(0,o.kt)("li",{parentName:"ul"},"At least 2 or more players interacting and battling with each other within a session."),(0,o.kt)("li",{parentName:"ul"},"During peak and off-peak times, there is a significant difference in the number of matches."),(0,o.kt)("li",{parentName:"ul"},"Based on these characteristics, an ideal cloud-native architecture diagram for session-based games is as follows:")),(0,o.kt)("img",{src:a(2070).Z,style:{width:"500px"}}),(0,o.kt)("p",null,"It should have the following capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide direct network connectivity by assigning independent public network access addresses for each room, allowing players to connect directly."),(0,o.kt)("li",{parentName:"ul"},"Provide game matchmaking functionality to find suitable teammates and opponents for players to form a session match and allocate appropriate game rooms."),(0,o.kt)("li",{parentName:"ul"},"Provide state management functionality to automate the management of the business state and lifecycle of game rooms."),(0,o.kt)("li",{parentName:"ul"},"Provide elastic scaling capabilities to automatically request and release infrastructure resources based on peak and off-peak business demands to control costs."),(0,o.kt)("li",{parentName:"ul"},"Efficient game delivery and operational management with a high degree of automation.")),(0,o.kt)("h2",{id:"direct-network-connectivity"},"Direct Network Connectivity"),(0,o.kt)("p",null,"Session-based games require direct network connectivity, and there are usually the following considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduce game latency and enhance player gaming experience."),(0,o.kt)("li",{parentName:"ul"},"Remove unnecessary gateways or proxies to save resource costs and simplify technical architecture.")),(0,o.kt)("h3",{id:"choosing-the-openkruisegame-networking-model"},"Choosing the OpenKruiseGame Networking Model"),(0,o.kt)("p",null,"In the era of traditional game operations, game server business and infrastructure were tightly coupled. Often, when developing server-side programs, an additional port allocation manager was required to avoid port conflicts between different rooms on the same machine. In an ideal state, after cloud-native transformation, game developers no longer need to worry about port allocation for game rooms. Room servers can be horizontally scaled, so each room server should have its own public network access address. However, the native service load balancing model in Kubernetes cannot meet this requirement."),(0,o.kt)("p",null,"OpenKruiseGame (OKG) provides various networking models to automate the management of public network addresses (EIP + port) for room servers. From then on, game developers do not need to worry about network configuration of the infrastructure, and game operators only need to provide simple parameters to efficiently deploy and automate the management of room server networks. In the OKG mode, each room server corresponds to a pod. For session-based games, the currently available networking models include Kubernetes-HostPort, AlibabaCloud-NATGW, AlibabaCloud-SLB, and AlibabaCloud-EIP. Each networking model has its own characteristics and is suitable for different scenarios."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubernetes-HostPort:")),(0,o.kt)("p",null,"This model uses the host node's EIP + port as the public network address. This mode is suitable for scenarios where pods are densely deployed on nodes. When the number of small room servers is high, and each node hosts multiple pods, this mode fully utilizes the bandwidth of the EIP on that node, thus maximizing the cost savings of EIP resources."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AlibabaCloud-SLB:")),(0,o.kt)("p",null,"This model maps different ports of the same SLB to different room servers, allowing each room server to have an independent public network address. This mode has the simplest configuration and requires very few EIPs. However, note that SLB is limited by the maximum number of backend instances. Each SLB can associate a maximum of 200 room servers. When the number of room servers under GameServerSet is about to exceed 200, additional SLB instances need to be added to meet scaling requirements."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AlibabaCloud-NATGW:")),(0,o.kt)("p",null,"This model automates the management of Dnat mapping rules associated with room servers. Users need to install the ack-extend-network-controller component and configure NAT gateway-related parameters. The NATGW model has greater scalability and flexibility compared to the SLB model, but it is also more complex to configure."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AlibabaCloud-EIP:")),(0,o.kt)("p",null,"This model assigns a separate EIP for each room server pod. This mode consumes more EIPs and is suitable for scenarios where game servers already have a port manager. The exposed port range of the container is the same as the accessed port range, and there is no mapping behavior."),(0,o.kt)("p",null,"For detailed explanations and examples, refer to the OKG Networking Model documentation."),(0,o.kt)("h3",{id:"obtaining-room-server-network-information"},"Obtaining Room Server Network Information"),(0,o.kt)("p",null,"Once the game rooms have their own independent public network access addresses, the remaining question is how to provide this address to the player's client. Generally, session-based games have a matching service role, and the matching service commonly perceives the network address of room servers in two ways: 1) Active retrieval; 2) Room server self-registration and reporting."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active Retrieval")),(0,o.kt)("p",null,"The matching service actively retrieves the available room servers in the current cluster and obtains their corresponding public network addresses. It selects the appropriate room server and returns it to the client. In this case, the matching service needs to call the Kubernetes API to retrieve the NetworkStatus of the GameServer object. For GameServer CRUD operations, you can refer to the e2e test cases in the official Kruise-Game repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Registration and Reporting")),(0,o.kt)("p",null,"Alternatively, the room server business can report its network information. In this case, the network information is passed down to the container using the Kubernetes Downward API mechanism and can be accessed by the business logic within the container. Once the business logic obtains the corresponding address, it can be reported. For specific examples, refer to the documentation."),(0,o.kt)("h2",{id:"game-matching"},"Game Matching"),(0,o.kt)("p",null,"The process of game matching in session-based games can be roughly divided into two stages: 1) Players finding teammates/opponents to form a match; 2) Finding a suitable room server for the match and returning the network address to the players."),(0,o.kt)("h3",{id:"implementing-game-matching-service-with-openmatch"},"Implementing Game Matching Service with OpenMatch"),(0,o.kt)("p",null,"In the open-source community, there are game matching frameworks like Open Match, where users only need to implement the matching logic according to the framework's standards.\nOKG provides the kruise-game-open-match-director component based on Open Match, which mainly helps implement the second stage of the matching process mentioned above - finding a game server for the match and returning the address.\nThis way, users only need to focus on the matching logic in the first stage. For a guide on developing matching services using Open Match and OKG, you can watch the Cloud-Native Game series courses.\nYou can also join the Cloud-Native Game community group (DingTalk ID: 44862615) to participate in discussions or ask questions."),(0,o.kt)("h3",{id:"custom-game-matching-service"},"Custom Game Matching Service"),(0,o.kt)("p",null,"Of course, if there is a custom matching framework/system, you can also integrate it with OKG through simple secondary development.\nAs mentioned in the section on obtaining network information, there are two ways for the matching service to interact with the room servers: actively retrieving the status and network information of the room servers or having the room servers self-register and report.\nHowever, for the second method, it is important to confirm the status of the corresponding room server before assigning the address to the player's client. This is because the retrieval and assignment of network addresses are asynchronous, and there may be situations where the room server is not available during the process.\nAs for the first method, the recommended approach is to use the Kubernetes Informer mechanism to listen to the GameServer objects. When there is a need to assign a room server for a match, you can retrieve the currently available GameServer and return the corresponding network information.\nIn this case, the retrieval and assignment of network information are synchronous. For the specific implementation, you can refer to the allocator code in kruise-game-open-match-director."),(0,o.kt)("h2",{id:"state-management"},"State Management"),(0,o.kt)("h3",{id:"state-type-for-session-based-games"},"State Type for Session-Based Games"),(0,o.kt)("p",null,"In the previous section on game matchmaking, we mentioned that the matchmaking service needs to retrieve the status of the game server when assigning the server address to each player's client to ensure that the assigned server is available. So, how should we define the availability of a game server? According to the design principles of OKG, an available game server should be = Infrastructure Runtime State Ready + Infrastructure Network Ready + Business State Ready."),(0,o.kt)("p",null,'What does "Business State Ready" mean? This involves the definition of the server state based on the game\'s requirements. We recommend that the game server business state includes at least the following states:'),(0,o.kt)("p",null,"None (No abnormal or special state exists, indicating availability, and this is the default state after the server initialization)\nAllocated (Already assigned, indicating that players are currently or about to play the game)\nWaitToBeDeleted (About to be deleted, waiting for OKG to recycle the pod)\nThese three states can be recorded in the GameServer Spec using OpsState. OKG provides two ways to mark the server state:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modifying GameServer.Spec.OpsState directly by calling the Kubernetes API (usually after the matchmaking system assigns the game server, it can be marked as Allocated)."),(0,o.kt)("li",{parentName:"ol"},"Exposing and converting the business state in a container to the corresponding GameServer.Spec.OpsState by ",(0,o.kt)("a",{parentName:"li",href:"https://openkruise.io/zh/kruisegame/user-manuals/service-qualities"},"Service Quality"),".")),(0,o.kt)("p",null,"The simplest state transition model is shown in the figure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The default state after the room server is pulled up is available. At this time, OpsState is ",(0,o.kt)("strong",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ol"},"When matching requirements are generated, the matching service searches for available (Infrastructure Ready & OpsState is None) room servers, and after allocation, sets its OpsState to ",(0,o.kt)("strong",{parentName:"li"},"Allocated")," (set through Kubernetes API, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CloudNativeGame/kruise-game-open-match-director/blob/main/pkg/allocator.go"},"kruise-game -allocator code for open-match-director"),". Not required if using OKG + Open Match Settings, Director has already done the above work)"),(0,o.kt)("li",{parentName:"ol"},"Setting OpsState as ",(0,o.kt)("strong",{parentName:"li"},"WaitToBeDeleted")," when game over by ",(0,o.kt)("a",{parentName:"li",href:"https://openkruise.io/zh/kruisegame/user-manuals/service-qualities"},"Service Quality"),". \u8fd9\u6837\u5bf9\u5e94\u7684pod\u5c06\u88abOKG\u81ea\u52a8\u8fdb\u884c\u56de\u6536\u5220\u9664\uff0c\u540e\u7eed\u5f39\u6027\u4f38\u7f29\u90e8\u5206\u5c06\u5c55\u5f00\u4ecb\u7ecd\u3002")),(0,o.kt)("img",{src:a(23686).Z,style:{width:"150px"}}),(0,o.kt)("p",null,"Of course, if you want to start and stop pods less frequently, you can also change OpsState to None after the game. The overall state transformation model is shown in the figure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Same as above, the default state after the room server is pulled up is available, at this time OpsState is ",(0,o.kt)("strong",{parentName:"li"},"None")),(0,o.kt)("li",{parentName:"ol"},"Same as above, after assigning the room server, the matching system will set it to ",(0,o.kt)("strong",{parentName:"li"},"Allocated")),(0,o.kt)("li",{parentName:"ol"},"When the game ends, set OpsState to ",(0,o.kt)("strong",{parentName:"li"},"None")," through ",(0,o.kt)("a",{parentName:"li",href:"https://openkruise.io/zh/kruisegame/user-manuals/service-qualities"},"Customized Service Quality")),(0,o.kt)("li",{parentName:"ol"},"When the room server status is judged to be None for a long time through the coroutine, the OpsState will be set to ",(0,o.kt)("strong",{parentName:"li"}," through ",(0,o.kt)("a",{parentName:"strong",href:"https://openkruise.io/zh/kruisegame/user-manuals/service-qualities"},"Customized Service Quality")," WaitToBeDeleted. "))),(0,o.kt)("img",{src:a(65066).Z,style:{width:"200px"}}),(0,o.kt)("h3",{id:"reveal-the-status-of-room-service-through-service-quality"},"Reveal the status of room service through service quality"),(0,o.kt)("p",null,"After completing the room server state flow design, we will find that some states are determined by the room server business, and these states also need to be exposed to the Kubernetes level so that they can be linked to the automatic scaler, matching system, etc. Therefore, a mechanism is needed to mark the business status on the Kubernetes object, that is, GameServer, and this is the ",(0,o.kt)("strong",{parentName:"p"},"Customized Service Quality")," function."),(0,o.kt)("p",null,"Customized service quality automatically marks the room server status on the GameServer through the results of ",(0,o.kt)("strong",{parentName:"p"},"executing the detection script")," and the ",(0,o.kt)("strong",{parentName:"p"},"detection result corresponding status")," set by the user."),(0,o.kt)("p",null,"The following is a status detection script named waitToBeDeleted.sh, which detects whether the value of the GS_STATE environment variable in the container is WaitToBeDeleted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nif [ -z "$GS_STATE" ]; then\n  exit 1\nelif [ "$GS_STATE" = "WaitToBeDeleted" ]; then\n  echo "$GS_STATE"\nelse\n  exit 1\nfi\n')),(0,o.kt)("p",null,"The corresponding GameServerSet yaml should be as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\nspec:\n  ...\n  serviceQualities: \n    - name: waitToBeDeleted\n      containerName: battle \n      permanent: false\n      exec:\n        command: ["bash", "./waitToBeDeleted.sh"]\n      serviceQualityAction:\n        - state: true\n          opsState: WaitToBeDeleted\n')),(0,o.kt)("p",null,"Of course, there can be multiple custom service qualities. For example, when the room server needs to reveal its None status, the script named none.sh is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nif [ -z "$GS_STATE" ]; then\n  exit 1\nelif [ "$GS_STATE" = "None" ]; then\n  echo "$GS_STATE"\nelse\n  exit 1\nfi\n')),(0,o.kt)("p",null,"The corresponding GameServerSet yaml should be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\nspec:\n  ...\n  serviceQualities: \n    - name: waitToBeDeleted\n      containerName: battle \n      permanent: false\n      exec:\n        command: ["bash", "./waitToBeDeleted.sh"]\n      serviceQualityAction:\n        - state: true\n          opsState: WaitToBeDeleted\n    - name: none\n      containerName: battle \n      permanent: false\n      exec:\n        command: ["bash", "./none.sh"]\n      serviceQualityAction:\n        - state: true\n          opsState: None\n')),(0,o.kt)("p",null,"So far, we have found that the room service business program only needs to set the corresponding GS_STATE environment variable value at the appropriate time node. for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the room server has just been launched, set GS_STATE=None;"),(0,o.kt)("li",{parentName:"ul"},"When a player enters the room server, set GS_STATE=Allocated (although it does not need to be exposed to opsState, you can still make state changes to avoid inconsistency between your own state and what is displayed in Kubernetes);"),(0,o.kt)("li",{parentName:"ul"},"When the room server game ends, set GS_STATE=None;"),(0,o.kt)("li",{parentName:"ul"},"When the room server is idle for a long time, set GS_STATE=WaitToBeDeleted.")),(0,o.kt)("h2",{id:"elastic-scaling"},"Elastic scaling"),(0,o.kt)("p",null,"In the previous section, we designed three room server states: None / Allocated / WaitToBeDeleted. In this section, we will perform corresponding elastic scaling configuration based on the above room server status."),(0,o.kt)("p",null,"The ideal state for elastic scaling of conversational games is that during peak business periods, the number of room servers is sufficient to allow players to access the game in seconds; during low business periods, the number of room servers is reduced to save resource costs. OKG provides an automatic scaler that can sense the status of the room server and automatically adjust the replicas value of GameServerSet to achieve the ideal effect of scaling according to the game business status."),(0,o.kt)("h3",{id:"room-service-is-automatically-reduced"},"Room service is automatically reduced"),(0,o.kt)("p",null,"In the state management section, we also mentioned that the GameServer whose opsState is WaitToBeDeleted will be automatically recycled by OKG. In this way, as long as the business decides that it will no longer provide services, it can set WaitToBeDeleted through custom service quality. For specific configuration of the scaling strategy, please refer to ","[https://openkruise.io/zh/kruisegame/user-manuals/gameservers-scale#Usage Example]","(",(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io/zh/kruisegame/user-manuals"},"https://openkruise.io/zh/kruisegame/user-manuals")," /gameservers-scale#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)"),(0,o.kt)("h3",{id:"room-service-automatically-added"},"Room service automatically added"),(0,o.kt)("p",null,"OKG's core strategy for providing automatic expansion is to ensure that there is an available and sufficient number of room servers. This number is equivalent to buffer and is determined by the user. In OKG, this parameter is called ",(0,o.kt)("strong",{parentName:"p"},"minAvailable"),"."),(0,o.kt)("p",null,"When the current number of game servers with opsState of None is less than the set ",(0,o.kt)("strong",{parentName:"p"},"minAvailable")," value, OKG will automatically expand new game servers so that the number of game servers with opsState of None meets the set minimum number."),(0,o.kt)("h3",{id:"resource-automatic-scaling"},"Resource automatic scaling"),(0,o.kt)("p",null,"Kubernetes elastic scaling covers two levels, application layer elasticity and resource layer elasticity. Among them, OKG provides the flexibility of the room server application layer and automatically adjusts the number of pods corresponding to the room server. Only adjusting the number of pods cannot save resource costs. The number of nodes needs to be automatically adjusted. This is how Kubernetes cluster-autoscaler achieves resource layer elasticity. The core principle of cluster-autoscaler is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a pod is in the pending state due to insufficient resources, the node is automatically ejected."),(0,o.kt)("li",{parentName:"ul"},"Automatically recycle nodes when node utilization is too low/nodes are idle.")),(0,o.kt)("p",null,"For game scenarios, the best practices for automatic scaling are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set OKG ",(0,o.kt)("strong",{parentName:"p"},"minAvailable"),' size according to node specifications. The startup of the node takes time, so free and available room servers need to be prepared in advance for players to connect. The idle room server essentially advances the triggering time of node horizontal expansion, making up for the time difference in starting the machine. In this way, the node specification and minAvailable are closely related. For example: the node specification used in the cluster is 8 cores and 16G, and the room service pod running on it requires 1 core and 2G resources, so theoretically the node can Run 7 room servers (nodes will have reserved resources, so not 8). In this case, if minAvailable is set to 7 or more, there will always be an "idle" node in the cluster (idle here does not mean no pods, but no players); if it is set to 14 or more, there will always be an "idle" node in the cluster. With two "idle" nodes, this also converts the ',(0,o.kt)("strong",{parentName:"p"},"room server spare quantity")," into the ",(0,o.kt)("strong",{parentName:"p"},"node spare quantity"),". Users can set specific settings according to business scenarios and cost control perspectives.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the cluster autoscaler to automatically recycle nodes only when the nodes are completely idle to ensure normal game operation. Shrinking based on resource thresholds is not friendly to the game. Since the game is a stateful service, there is a great possibility that the resource load on the node is small but the player is still playing the game, and it cannot be easily deleted."))),(0,o.kt)("h2",{id:"game-room-hot-update"},"Game Room Hot-Update"),(0,o.kt)("p",null,"In order to smoothly upgrade the room server and simplify operation and maintenance operations, there is often a demand: it is hoped that the room server version can be updated with one click without affecting the player's gaming experience and without shutting down the server for maintenance. This process is also called hot update of the room server.\nThe hot update of the room server is different from the in-place update required by traditional PvE games. Due to the short time of a single game, the service logic of the room is often not changed after the game is started. Instead, the newly opened service logic is opened after the one-click update is released. The rooms use the latest version, and the existing room servers do not make any changes; at the same time, the matching system is used to import new players into the new version of the room; and the automatic scaling mechanism is used to make the number of rooms in the old version continue to decrease as the number of people is lost. The number of rooms in the new version continues to increase as the number of people increases, and the version switch is finally completed.\nThe entire process only requires changing the room server container image, which is automatically updated without stopping the server, greatly reducing the complexity of operation and maintenance."),(0,o.kt)("h3",{id:"existing-game-rooms-will-not-be-updated"},"Existing game rooms will not be updated"),(0,o.kt)("p",null,'When using the GameServerSet workload, you can select the "OnDelete" update type to achieve the effect of not updating the existing room server, but using the new version for the new room server.'),(0,o.kt)("p",null,"For example, if you initially deploy a GameServerSet with 3 replicas, the image tags are all 1.12.2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: minecraft\n  namespace: default\nspec:\n  replicas: 3\n  updateStrategy:\n    type: OnDelete\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n          name: minecraft\n")),(0,o.kt)("p",null,"At this time, the image is updated and the image tag is changed to 1.12.2-new"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n\n...\nspec:\n  gameServerTemplate:\n    spec:\n      containers:\n      - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2-new\n        name: minecraft\n...\n")),(0,o.kt)("p",null,"It can be seen that the existing GameServers has not been updated, and the image tag is still 1.12.2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -oyaml | grep minecraft-demo\n    - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      imageID: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo@sha256:8aa4177a19b15d7336162c6ca4d833a74c3cb23d85eab2ef2a63f7a2a682b8fb\n    - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      imageID: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo@sha256:8aa4177a19b15d7336162c6ca4d833a74c3cb23d85eab2ef2a63f7a2a682b8fb\n    - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n      imageID: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo@sha256:8aa4177a19b15d7336162c6ca4d833a74c3cb23d85eab2ef2a63f7a2a682b8fb\n")),(0,o.kt)("p",null,"At this time, scale GameServerSet and create a new game server minecraft-3, and find that its image tag is 1.12.2-new"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=4\ngameserverset.game.kruise.io/minecraft scaled\n\n\nkubectl get po minecraft-3 -oyaml | grep minecraft-demo\n  - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2-new\n    image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2-new\n    imageID: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo@sha256:f68fd7d5e6133c511b374a38f7dbc35acedce1d177dd78fba1d62d6264d5cba0\n")),(0,o.kt)("h3",{id:"linkage-with-matching-system"},"Linkage with matching system"),(0,o.kt)("p",null,"When a new version of the image exists in the GameServerSet, the matching system needs to decide which version of the room server the player will enter."),(0,o.kt)("p",null,"There are two ways for the matching system to sense the version under the current workload:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When the room server is started, its own version will be automatically registered and reported, and it will be de-registered and destructed when deleted."),(0,o.kt)("li",{parentName:"ol"},"When matching, the matching system calls the Kubernetes API to query the version currently suitable for the player.")),(0,o.kt)("p",null,"These two methods are similar to the method of obtaining the room server address mentioned above, and they can be implemented in the same way.\nIf you press method 1, when the room server is started, the access address information will be reported together with the version information; if you press method 2, additional logic will be added to filter the room server version when searching for a suitable room server."),(0,o.kt)("p",null,"It should be noted that even if the matching system detects the latest version, it does not allow players to enter only the latest version at this time. Since the version update has just been completed, the number of rooms in the new version is not sufficient. There needs to be a transition period for a certain period of time so that players who cannot find the latest version of the room server can still enter the old version of the game."),(0,o.kt)("h3",{id:"complete-smooth-upgrade-through-automatic-scaling"},"Complete smooth upgrade through automatic scaling"),(0,o.kt)("p",null,"When the GameServerSet image version has been updated and the matching system can sense the latest version, we hope that there will be more and more room servers in the new version and fewer and fewer room servers in the old version, and this is achieved through automatic scaling."),(0,o.kt)("p",null,"First of all, at the beginning of the version switch, only the old version of the room server existed under GameServerSet, and the room server of this version existed in the following states: Allocated, WaitToBeDeleted, and None.\nIf the Allocated room server changes directly to WaitToBeDeleted after the game ends, the old version of None will first change to Allocated and then to WaitToBeDeleted if there is no increase in players, and then the overall number will gradually decrease over time, and The number of new room servers will continue to increase due to the setting of the minAvailable parameter;\nHowever, if the Allocated room server is reused and changed to None after the game is over, there will be a long period of time when the number of players does not increase. Therefore, it is recommended to manually update the GameServerSet image. Increase the number of copies and directly expand the latest version of the room server. The old version of the room server in the None state will enter the WaitToBeDeleted state due to a long wait for no players to enter, and will eventually be deleted."))}u.isMDXComponent=!0},2070:function(e,t,a){t.Z=a.p+"assets/images/session-based-game-arch-152be05029dfe164f5e02f335d05f3ab.png"},23686:function(e,t,a){t.Z=a.p+"assets/images/session-based-game-state-1-cd5e0de44beab5eda274fe6bd1673875.png"},65066:function(e,t,a){t.Z=a.p+"assets/images/session-based-game-state-2-1818d91ca3bec39a53aae9123c03875f.png"}}]);