(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),o=(r(0),r(253)),a={title:"Config Checks between Markers",description:"[EXPERIMENTAL] Collects config checks between marker start and end."},i={unversionedId:"checker-config-checks-between-markers",id:"checker-config-checks-between-markers",isDocsHomePage:!1,title:"Config Checks between Markers",description:"[EXPERIMENTAL] Collects config checks between marker start and end.",source:"@site/docs/checker-config-checks-between-markers.md",slug:"/checker-config-checks-between-markers",permalink:"/docs/next/checker-config-checks-between-markers",version:"current",sidebar:"docs",previous:{title:"Buffer Overrun Analysis (InferBO)",permalink:"/docs/next/checker-bufferoverrun"},next:{title:"Config Impact Analysis",permalink:"/docs/next/checker-config-impact-analysis"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"[EXPERIMENTAL]"," Collects config checks between marker start and end."),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--config-checks-between-markers"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(o.b)("li",{parentName:"ul"},"Java: Experimental"),Object(o.b)("li",{parentName:"ul"},"C#/.Net: Experimental")),Object(o.b)("p",null,"This checker collects config checkings in some program regions determined by pairs of marker-starts and marker-ends. The set of config checking functions, marker-start functions, and marker-end functions is hardcoded and empty by default for now, so to use this checker, please modify the code directly in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/master/infer/src/opensource"},"FbGKInteraction.ml"),"."),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#config_checks_between_markers"},"CONFIG_CHECKS_BETWEEN_MARKERS"))))}u.isMDXComponent=!0},253:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return r?c.a.createElement(m,i(i({ref:t},l),{},{components:r})):c.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);