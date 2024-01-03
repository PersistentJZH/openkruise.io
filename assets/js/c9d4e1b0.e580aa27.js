"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5648],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,y=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="CRD Field Description",d={unversionedId:"user-manuals/crd-field-description",id:"user-manuals/crd-field-description",title:"CRD Field Description",description:"GameServerSet",source:"@site/kruisegame/user-manuals/crd-field-description.md",sourceDirName:"user-manuals",slug:"/user-manuals/crd-field-description",permalink:"/kruisegame/user-manuals/crd-field-description",draft:!1,tags:[],version:"current",lastUpdatedBy:"ChrisLiu",lastUpdatedAt:1704269296,formattedLastUpdatedAt:"1/3/2024",frontMatter:{},sidebar:"kruisegame",previous:{title:"OKG Dashboard",permalink:"/kruisegame/user-manuals/game-dashboard"},next:{title:"Best Practice for Session-Based Games(PvP room)",permalink:"/kruisegame/best-practices/session-based-game"}},m={},c=[{value:"GameServerSet",id:"gameserverset",level:2},{value:"GameServerSetSpec",id:"gameserversetspec",level:3},{value:"GameServerTemplate",id:"gameservertemplate",level:4},{value:"UpdateStrategy",id:"updatestrategy",level:4},{value:"ScaleStrategy",id:"scalestrategy",level:4},{value:"ServiceQualities",id:"servicequalities",level:4},{value:"Network",id:"network",level:4},{value:"GameServerSetStatus",id:"gameserversetstatus",level:3},{value:"GameServer",id:"gameserver",level:2},{value:"GameServerSpec",id:"gameserverspec",level:3},{value:"GameServerStatus",id:"gameserverstatus",level:3}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crd-field-description"},"CRD Field Description"),(0,i.kt)("h2",{id:"gameserverset"},"GameServerSet"),(0,i.kt)("h3",{id:"gameserversetspec"},"GameServerSetSpec"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type GameServerSetSpec struct {\n    // The number of game servers. Must be specified, with a minimum value of 0.\n    Replicas *int32 `json:"replicas"`\n\n    // Game server template. The new game server will be created with the parameters defined in GameServerTemplate.\n    GameServerTemplate   GameServerTemplate `json:"gameServerTemplate,omitempty"`\n    \n    // serviceName is the name of the service that governs this GameServerSet.\n    // This service must exist before the GameServerSet, and is responsible for\n    // the network identity of the set. Pods get DNS/hostnames that follow the\n    // pattern: pod-specific-string.serviceName.default.svc.cluster.local\n    // where "pod-specific-string" is managed by the GameServerSet controller.\n    ServiceName string `json:"serviceName,omitempty"`\n\n    // Reserved game server IDs, optional. If specified, existing game servers with those IDs will be deleted,\n    // and new game servers will not be created with those IDs.\n    ReserveGameServerIds []int              `json:"reserveGameServerIds,omitempty"`\n\n    // Custom service qualities for game servers.\n    ServiceQualities     []ServiceQuality   `json:"serviceQualities,omitempty"`\n\n    // Batch update strategy for game servers.\n    UpdateStrategy       UpdateStrategy     `json:"updateStrategy,omitempty"`\n \n    // Horizontal scaling strategy for game servers.\n    ScaleStrategy        ScaleStrategy      `json:"scaleStrategy,omitempty"`\n\n    // Network settings for game server access layer.\n    Network              *Network           `json:"network,omitempty"`\n}\n\n')),(0,i.kt)("h4",{id:"gameservertemplate"},"GameServerTemplate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'type GameServerTemplate struct {\n    // All fields inherited from PodTemplateSpec.\n    corev1.PodTemplateSpec `json:",inline"`\n    \n    // Requests and claims for persistent volumes.\n    VolumeClaimTemplates   []corev1.PersistentVolumeClaim `json:"volumeClaimTemplates,omitempty"`\n    \n    // ReclaimPolicy indicates the reclaim policy for GameServer.\n    // Default is Cascade.\n    ReclaimPolicy GameServerReclaimPolicy `json:"reclaimPolicy,omitempty"`\n}\n\ntype GameServerReclaimPolicy string\n\nconst (\n    // CascadeGameServerReclaimPolicy indicates that GameServer is deleted when the pod is deleted.\n    // The age of GameServer is exactly the same as that of the pod.\n    CascadeGameServerReclaimPolicy GameServerReclaimPolicy = "Cascade"\n    \n    // DeleteGameServerReclaimPolicy indicates that GameServers will be deleted when replicas of GameServerSet decreases.\n    // The GameServer will not be deleted when the corresponding pod is deleted due to manual deletion, update, eviction, etc.\n    DeleteGameServerReclaimPolicy GameServerReclaimPolicy = "Delete"\n)\n')),(0,i.kt)("h4",{id:"updatestrategy"},"UpdateStrategy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type UpdateStrategy struct {\n    // Type indicates the type of the StatefulSetUpdateStrategy.\n    // Default is RollingUpdate.\n    // +optional\n    Type apps.StatefulSetUpdateStrategyType `json:"type,omitempty"`\n\n    // RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.\n    // +optional\n    RollingUpdate *RollingUpdateStatefulSetStrategy `json:"rollingUpdate,omitempty"`\n}\n\ntype RollingUpdateStatefulSetStrategy struct {\n    // Partition indicates the ordinal at which the StatefulSet should be partitioned by default.\n    // But if unorderedUpdate has been set:\n    //   - Partition indicates the number of pods with non-updated revisions when rolling update.\n    //   - It means controller will update $(replicas - partition) number of pod.\n    // Default value is 0.\n    // +optional\n    Partition *int32 `json:"partition,omitempty"`\n    \n    // The maximum number of pods that can be unavailable during the update.\n    // Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\n    // Absolute number is calculated from percentage by rounding down.\n    // Also, maxUnavailable can just be allowed to work with Parallel podManagementPolicy.\n    // Defaults to 1.\n    // +optional\n    MaxUnavailable *intstr.IntOrString `json:"maxUnavailable,omitempty"`\n    \n    // PodUpdatePolicy indicates how pods should be updated\n    // Default value is "ReCreate"\n    // +optional\n    PodUpdatePolicy kruiseV1beta1.PodUpdateStrategyType `json:"podUpdatePolicy,omitempty"`\n    \n    // Paused indicates that the StatefulSet is paused.\n    // Default value is false\n    // +optional\n    Paused bool `json:"paused,omitempty"`\n    \n    // UnorderedUpdate contains strategies for non-ordered update.\n    // If it is not nil, pods will be updated with non-ordered sequence.\n    // Noted that UnorderedUpdate can only be allowed to work with Parallel podManagementPolicy\n    // +optional\n    // UnorderedUpdate *kruiseV1beta1.UnorderedUpdateStrategy `json:"unorderedUpdate,omitempty"`\n    \n    // InPlaceUpdateStrategy contains strategies for in-place update.\n    // +optional\n    InPlaceUpdateStrategy *appspub.InPlaceUpdateStrategy `json:"inPlaceUpdateStrategy,omitempty"`\n    \n    // MinReadySeconds indicates how long will the pod be considered ready after it\'s updated.\n    // MinReadySeconds works with both OrderedReady and Parallel podManagementPolicy.\n    // It affects the pod scale up speed when the podManagementPolicy is set to be OrderedReady.\n    // Combined with MaxUnavailable, it affects the pod update speed regardless of podManagementPolicy.\n    // Default value is 0, max is 300.\n    // +optional\n    MinReadySeconds *int32 `json:"minReadySeconds,omitempty"`\n}\n\ntype InPlaceUpdateStrategy struct {\n    // GracePeriodSeconds is the timespan between set Pod status to not-ready and update images in Pod spec\n    // when in-place update a Pod.\n    GracePeriodSeconds int32 `json:"gracePeriodSeconds,omitempty"`\n}\n')),(0,i.kt)("h4",{id:"scalestrategy"},"ScaleStrategy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\ntype ScaleStrategy struct {\n    // The maximum number of pods that can be unavailable during scaling.\n    // Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\n    // Absolute number is calculated from percentage by rounding down.\n    // It can just be allowed to work with Parallel podManagementPolicy.\n    MaxUnavailable *intstr.IntOrString `json:"maxUnavailable,omitempty"`\n\n    // ScaleDownStrategyType indicates the scaling down strategy, include two types: General & ReserveIds\n    // General will first consider the ReserveGameServerIds field when game server scaling down. \n    // When the number of reserved game servers does not meet the scale down number, continue to \n    // select and delete the game servers from the current game server list.\n    // ReserveIds will backfill the sequence numbers into ReserveGameServerIds field when\n    // GameServers scale down, whether set by ReserveGameServerIds field or the GameServerSet \n    // controller chooses to remove it.\n    // Default is General\n    // +optional\n    ScaleDownStrategyType ScaleDownStrategyType `json:"scaleDownStrategyType,omitempty"`\n}\n')),(0,i.kt)("h4",{id:"servicequalities"},"ServiceQualities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type ServiceQuality struct {\n    // Inherits all fields from corev1.Probe\n    corev1.Probe  `json:",inline"`\n    \n    // Custom name for the service quality, distinguishes different service qualities that are defined.\n    Name          string `json:"name"`\n    \n    // Name of the container to be probed.\n    ContainerName string `json:"containerName,omitempty"`\n\n    // Whether to make GameServerSpec not change after the ServiceQualityAction is executed.\n    // When Permanent is true, regardless of the detection results, ServiceQualityAction will only be executed once.\n    // When Permanent is false, ServiceQualityAction can be executed again even though ServiceQualityAction has been executed.\n    Permanent            bool                   `json:"permanent"`\n    \n    // Corresponding actions to be executed for the service quality.\n    ServiceQualityAction []ServiceQualityAction `json:"serviceQualityAction,omitempty"`\n}\n\ntype ServiceQualityAction struct {\n    // Defines to change the GameServerSpec field when the detection is true/false.\n    State          bool `json:"state"`\n    \n    // Result indicate the probe message returned by the script.\n    // When Result is defined, it would exec action only when the according Result is actually returns.\n    Result         string `json:"result,omitempty"`\n    \n    GameServerSpec `json:",inline"`\n}\n')),(0,i.kt)("h4",{id:"network"},"Network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type Network struct {\n    // Different network types correspond to different network plugins.\n    NetworkType string              `json:"networkType,omitempty"`\n\n    // Different network types need to fill in different network parameters.\n    NetworkConf []NetworkConfParams `json:"networkConf,omitempty"`\n}\n\ntype NetworkConfParams KVParams\n\ntype KVParams struct {\n    // Parameter name, the name is determined by the network plugin\n    Name  string `json:"name,omitempty"`\n\n    // Parameter value, the format is determined by the network plugin\n    Value string `json:"value,omitempty"`\n}\n')),(0,i.kt)("h3",{id:"gameserversetstatus"},"GameServerSetStatus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'type GameServerSetStatus struct {\n    // The iteration version of the GameServerSet observed by the controller.\n    ObservedGeneration int64 `json:"observedGeneration,omitempty"`\n\n    // The number of game servers.\n    Replicas                int32  `json:"replicas"`\n\n    // The number of game servers that are ready.\n    ReadyReplicas           int32  `json:"readyReplicas"`\n\n    // The number of game servers that are available.\n    AvailableReplicas       int32  `json:"availableReplicas"`\n\n    // The current number of game servers.\n    CurrentReplicas         int32  `json:"currentReplicas"`\n\n    // The number of game servers that have been updated.\n    UpdatedReplicas         int32  `json:"updatedReplicas"`\n\n    // The number of game servers that have been updated and are ready.\n    UpdatedReadyReplicas    int32  `json:"updatedReadyReplicas,omitempty"`\n\n    // The number of game servers that are in Maintaining state.\n    MaintainingReplicas     *int32 `json:"maintainingReplicas,omitempty"`\n\n    // The number of game servers that are in WaitToBeDeleted state.\n    WaitToBeDeletedReplicas *int32 `json:"waitToBeDeletedReplicas,omitempty"`\n\n    // The label selector used to query game servers that should match the replica count used by HPA.\n    LabelSelector string `json:"labelSelector,omitempty"`\n}\n\n')),(0,i.kt)("h2",{id:"gameserver"},"GameServer"),(0,i.kt)("h3",{id:"gameserverspec"},"GameServerSpec"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type GameServerSpec struct {\n   // The O&M state of the game server, not pod runtime state, more biased towards the state of the game itself.\n   // Currently, the states that can be specified are: None / WaitToBeDeleted / Maintaining. \n   // Default is None\n   OpsState         OpsState            `json:"opsState,omitempty"`\n\n   // Update priority. If the priority is higher, it will be updated first.\n   UpdatePriority   *intstr.IntOrString `json:"updatePriority,omitempty"`\n\n   // Deletion priority. If the priority is higher, it will be deleted first.\n   DeletionPriority *intstr.IntOrString `json:"deletionPriority,omitempty"`\n\n   // Whether to perform network isolation and cut off the access layer network\n   // Default is false\n   NetworkDisabled  bool                `json:"networkDisabled,omitempty"`\n   \n   // Containers can be used to make the corresponding GameServer container fields\n   // different from the fields defined by GameServerTemplate in GameServerSetSpec.\n   Containers []GameServerContainer `json:"containers,omitempty"`\n}\n\ntype GameServerContainer struct {\n    // Name indicates the name of the container to update.\n    Name string `json:"name"`\n    \n    // Image indicates the image of the container to update.\n    // When Image updated, pod.spec.containers[*].image will be updated immediately.\n    Image string `json:"image,omitempty"`\n    \n    // Resources indicates the resources of the container to update.\n    // When Resources updated, pod.spec.containers[*].Resources will be not updated immediately,\n    // which will be updated when pod recreate.\n    Resources corev1.ResourceRequirements `json:"resources,omitempty"`\n}\n')),(0,i.kt)("h3",{id:"gameserverstatus"},"GameServerStatus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type GameServerStatus struct {\n    // Expected game server status\n    DesiredState              GameServerState           `json:"desiredState,omitempty"`\n\n    // The actual status of the current game server\n    CurrentState              GameServerState           `json:"currentState,omitempty"`\n\n    // network status information\n    NetworkStatus             NetworkStatus             `json:"networkStatus,omitempty"`\n\n    // The game server corresponds to the pod status\n    PodStatus                 corev1.PodStatus          `json:"podStatus,omitempty"`\n\n    // Service quality status of game server\n    ServiceQualitiesCondition []ServiceQualityCondition `json:"serviceQualitiesConditions,omitempty"`\n    \n    // Conditions is an array of current observed conditions related with GameServer.\n    // Currently support pod Conditions / node Conditions / pv Conditions\n    Conditions []GameServerCondition `json:"conditions,omitempty" `\n\n    // Current update priority\n    UpdatePriority     *intstr.IntOrString `json:"updatePriority,omitempty"`\n\n    // Current deletion priority\n    DeletionPriority   *intstr.IntOrString `json:"deletionPriority,omitempty"`\n\n    // Last change time\n    LastTransitionTime metav1.Time         `json:"lastTransitionTime,omitempty"`\n}\n')))}u.isMDXComponent=!0}}]);