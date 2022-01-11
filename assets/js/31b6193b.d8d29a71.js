"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[18],{5139:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"v0.10","label":"v0.10","banner":"unmaintained","badge":true,"className":"docs-version-v0.10","isLast":false,"docsSidebars":{"version-v0.10/docs":[{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/docs/v0.10/","docId":"introduction"},{"type":"link","label":"Installation","href":"/docs/v0.10/installation","docId":"installation"}],"collapsible":true},{"type":"category","label":"Core Concepts","collapsed":false,"items":[{"type":"link","label":"Architecture","href":"/docs/v0.10/core-concepts/architecture","docId":"core-concepts/architecture"}],"collapsible":true},{"type":"category","label":"User Manuals","collapsed":true,"items":[{"type":"category","collapsed":true,"collapsible":true,"label":"Typical Workloads","items":[{"type":"link","label":"CloneSet","href":"/docs/v0.10/user-manuals/cloneset","docId":"user-manuals/cloneset"},{"type":"link","label":"Advanced StatefulSet","href":"/docs/v0.10/user-manuals/advancedstatefulset","docId":"user-manuals/advancedstatefulset"},{"type":"link","label":"Advanced DaemonSet","href":"/docs/v0.10/user-manuals/advanceddaemonset","docId":"user-manuals/advanceddaemonset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Job Workloads","items":[{"type":"link","label":"BroadcastJob","href":"/docs/v0.10/user-manuals/broadcastjob","docId":"user-manuals/broadcastjob"},{"type":"link","label":"AdvancedCronJob","href":"/docs/v0.10/user-manuals/advancedcronjob","docId":"user-manuals/advancedcronjob"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Sidecar container Management","items":[{"type":"link","label":"SidecarSet","href":"/docs/v0.10/user-manuals/sidecarset","docId":"user-manuals/sidecarset"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Multi-domain Management","items":[{"type":"link","label":"WorkloadSpread","href":"/docs/v0.10/user-manuals/workloadspread","docId":"user-manuals/workloadspread"},{"type":"link","label":"UnitedDeployment","href":"/docs/v0.10/user-manuals/uniteddeployment","docId":"user-manuals/uniteddeployment"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Enhanced Operations","items":[{"type":"link","label":"Container Restart","href":"/docs/v0.10/user-manuals/containerrecreaterequest","docId":"user-manuals/containerrecreaterequest"},{"type":"link","label":"ImagePullJob","href":"/docs/v0.10/user-manuals/imagepulljob","docId":"user-manuals/imagepulljob"}]},{"type":"category","collapsed":true,"collapsible":true,"label":"Application Protection","items":[{"type":"link","label":"Deletion Protection","href":"/docs/v0.10/user-manuals/deletionprotection","docId":"user-manuals/deletionprotection"},{"type":"link","label":"PodUnavailableBudget","href":"/docs/v0.10/user-manuals/podunavailablebudget","docId":"user-manuals/podunavailablebudget"}]}],"collapsible":true},{"type":"category","label":"Best Practices","collapsed":true,"items":[{"type":"link","label":"HPA configuration","href":"/docs/v0.10/best-practices/hpa-configuration","docId":"best-practices/hpa-configuration"},{"type":"link","label":"Extreme Elastic Schedule Solution Based on HPA","href":"/docs/v0.10/best-practices/elastic-deployment","docId":"best-practices/elastic-deployment"}],"collapsible":true},{"type":"category","label":"Developer Manuals","collapsed":true,"items":[{"type":"link","label":"Golang client","href":"/docs/v0.10/developer-manuals/go-client","docId":"developer-manuals/go-client"},{"type":"link","label":"Java client","href":"/docs/v0.10/developer-manuals/java-client","docId":"developer-manuals/java-client"},{"type":"link","label":"Other languages","href":"/docs/v0.10/developer-manuals/other-languages","docId":"developer-manuals/other-languages"}],"collapsible":true},{"type":"link","label":"FAQ","href":"/docs/v0.10/faq","docId":"faq"}]},"docs":{"best-practices/elastic-deployment":{"id":"best-practices/elastic-deployment","title":"Extreme Elastic Schedule Solution Based on HPA","description":"Since 0.10.0 version\uff0cOpenKruise have proposed a multi-domain CRD with by-pass architecture, namely, WorkloadSpread. WorkloadSpread allows a Workload to distribute its Pods to different node, zone, even different clusters and providers, as well as to apply differential configurations in different domains.This CRD can give Workloads the ability of multi-domain scatter, elastic schedule and fine management in a non-intrusive manner.","sidebar":"version-v0.10/docs"},"best-practices/hpa-configuration":{"id":"best-practices/hpa-configuration","title":"HPA configuration","description":"Kruise workloads, such as CloneSet, Advanced StatefulSet, UnitedDeployment, are all implemented scale subresource,","sidebar":"version-v0.10/docs"},"core-concepts/architecture":{"id":"core-concepts/architecture","title":"Architecture","description":"The overall architecture of OpenKruise is shown as below:","sidebar":"version-v0.10/docs"},"developer-manuals/go-client":{"id":"developer-manuals/go-client","title":"Golang client","description":"If you want to create/get/update/delete those OpenKruise resources in a Golang project or list-watch them using informer,","sidebar":"version-v0.10/docs"},"developer-manuals/java-client":{"id":"developer-manuals/java-client","title":"Java client","description":"We do have a client-java repository,","sidebar":"version-v0.10/docs"},"developer-manuals/other-languages":{"id":"developer-manuals/other-languages","title":"Other languages","description":"Currently, Kruise has not supported SDK for languages other than Golang and Java.","sidebar":"version-v0.10/docs"},"faq":{"id":"faq","title":"FAQ","description":"","sidebar":"version-v0.10/docs"},"installation":{"id":"installation","title":"Installation","description":"Although OpenKruise now can work with Kubernetes version >= 1.13, we strongly recommend you to use Kruise with Kubernetes version >= 1.16.","sidebar":"version-v0.10/docs"},"introduction":{"id":"introduction","title":"Introduction","description":"Welcome to OpenKruise!","sidebar":"version-v0.10/docs"},"user-manuals/advancedcronjob":{"id":"user-manuals/advancedcronjob","title":"AdvancedCronJob","description":"AdvancedCronJob is an enhanced version of CronJob.","sidebar":"version-v0.10/docs"},"user-manuals/advanceddaemonset":{"id":"user-manuals/advanceddaemonset","title":"Advanced DaemonSet","description":"This controller enhances the rolling update workflow of default DaemonSet","sidebar":"version-v0.10/docs"},"user-manuals/advancedstatefulset":{"id":"user-manuals/advancedstatefulset","title":"Advanced StatefulSet","description":"This controller enhances the rolling update workflow of default StatefulSet","sidebar":"version-v0.10/docs"},"user-manuals/broadcastjob":{"id":"user-manuals/broadcastjob","title":"BroadcastJob","description":"This controller distributes a Pod on every node in the cluster.","sidebar":"version-v0.10/docs"},"user-manuals/cloneset":{"id":"user-manuals/cloneset","title":"CloneSet","description":"This controller provides advanced features to efficiently manage stateless applications that","sidebar":"version-v0.10/docs"},"user-manuals/containerrecreaterequest":{"id":"user-manuals/containerrecreaterequest","title":"Container Restart","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"version-v0.10/docs"},"user-manuals/deletionprotection":{"id":"user-manuals/deletionprotection","title":"Deletion Protection","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"version-v0.10/docs"},"user-manuals/imagepulljob":{"id":"user-manuals/imagepulljob","title":"ImagePullJob","description":"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version.","sidebar":"version-v0.10/docs"},"user-manuals/podunavailablebudget":{"id":"user-manuals/podunavailablebudget","title":"PodUnavailableBudget","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"version-v0.10/docs"},"user-manuals/sidecarset":{"id":"user-manuals/sidecarset","title":"SidecarSet","description":"This controller leverages the admission webhook to automatically","sidebar":"version-v0.10/docs"},"user-manuals/uniteddeployment":{"id":"user-manuals/uniteddeployment","title":"UnitedDeployment","description":"This controller provides a new way to manage pods in multi-domain by using multiple workloads.","sidebar":"version-v0.10/docs"},"user-manuals/workloadspread":{"id":"user-manuals/workloadspread","title":"WorkloadSpread","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"version-v0.10/docs"}}}')}}]);