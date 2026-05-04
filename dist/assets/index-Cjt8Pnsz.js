(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function JS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r_={exports:{}},Eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S=Symbol.for("react.transitional.element"),tM=Symbol.for("react.fragment");function o_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:$S,type:e,key:i,ref:t!==void 0?t:null,props:n}}Eu.Fragment=tM;Eu.jsx=o_;Eu.jsxs=o_;r_.exports=Eu;var Tt=r_.exports,l_={exports:{}},Ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=Symbol.for("react.transitional.element"),eM=Symbol.for("react.portal"),nM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),aM=Symbol.for("react.profiler"),sM=Symbol.for("react.consumer"),rM=Symbol.for("react.context"),oM=Symbol.for("react.forward_ref"),lM=Symbol.for("react.suspense"),cM=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),uM=Symbol.for("react.activity"),Am=Symbol.iterator;function fM(e){return e===null||typeof e!="object"?null:(e=Am&&e[Am]||e["@@iterator"],typeof e=="function"?e:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,h_={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=h_,this.updater=n||u_}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function d_(){}d_.prototype=Wr.prototype;function tp(e,t,n){this.props=e,this.context=t,this.refs=h_,this.updater=n||u_}var ep=tp.prototype=new d_;ep.constructor=tp;f_(ep,Wr.prototype);ep.isPureReactComponent=!0;var Rm=Array.isArray;function uh(){}var Ce={H:null,A:null,T:null,S:null},p_=Object.prototype.hasOwnProperty;function np(e,t,n){var i=n.ref;return{$$typeof:$d,type:e,key:t,ref:i!==void 0?i:null,props:n}}function hM(e,t){return np(e.type,t,e.props)}function ip(e){return typeof e=="object"&&e!==null&&e.$$typeof===$d}function dM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cm=/\/+/g;function Yu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dM(""+e.key):t.toString(36)}function pM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(uh,uh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function rr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case $d:case eM:r=!0;break;case c_:return r=e._init,rr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Yu(e,0):i,Rm(a)?(n="",r!=null&&(n=r.replace(Cm,"$&/")+"/"),rr(a,t,n,"",function(c){return c})):a!=null&&(ip(a)&&(a=hM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Cm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Rm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Yu(i,l),r+=rr(i,t,n,s,a);else if(l=fM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Yu(i,l++),r+=rr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return rr(pM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Tl(e,t,n){if(e==null)return e;var i=[],a=0;return rr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function mM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var wm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gM={map:Tl,forEach:function(e,t,n){Tl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tl(e,function(){t++}),t},toArray:function(e){return Tl(e,function(t){return t})||[]},only:function(e){if(!ip(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=uM;Ft.Children=gM;Ft.Component=Wr;Ft.Fragment=nM;Ft.Profiler=aM;Ft.PureComponent=tp;Ft.StrictMode=iM;Ft.Suspense=lM;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=f_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!p_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return np(e.type,a,i)};Ft.createContext=function(e){return e={$$typeof:rM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:sM,_context:e},e};Ft.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)p_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return np(e,s,a)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:oM,render:e}};Ft.isValidElement=ip;Ft.lazy=function(e){return{$$typeof:c_,_payload:{_status:-1,_result:e},_init:mM}};Ft.memo=function(e,t){return{$$typeof:cM,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Ce.T,n={};Ce.T=n;try{var i=e(),a=Ce.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(uh,wm)}catch(s){wm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}};Ft.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Ft.use=function(e){return Ce.H.use(e)};Ft.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Ft.useContext=function(e){return Ce.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Ft.useId=function(){return Ce.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Ft.useRef=function(e){return Ce.H.useRef(e)};Ft.useState=function(e){return Ce.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Ce.H.useTransition()};Ft.version="19.2.5";l_.exports=Ft;var nn=l_.exports,m_={exports:{}},bu={},g_={exports:{}},__={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,P){var W=L.length;L.push(P);t:for(;0<W;){var J=W-1>>>1,st=L[J];if(0<a(st,P))L[J]=P,L[W]=st,W=J;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var P=L[0],W=L.pop();if(W!==P){L[0]=W;t:for(var J=0,st=L.length,ot=st>>>1;J<ot;){var xt=2*(J+1)-1,kt=L[xt],Wt=xt+1,Lt=L[Wt];if(0>a(kt,W))Wt<st&&0>a(Lt,kt)?(L[J]=Lt,L[Wt]=W,J=Wt):(L[J]=kt,L[xt]=W,J=xt);else if(Wt<st&&0>a(Lt,W))L[J]=Lt,L[Wt]=W,J=Wt;else break t}}return P}function a(L,P){var W=L.sortIndex-P.sortIndex;return W!==0?W:L.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,p=null,u=3,d=!1,x=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function S(L){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=L)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function C(L){if(E=!1,S(L),!x)if(n(l)!==null)x=!0,b||(b=!0,F());else{var P=n(c);P!==null&&z(C,P.startTime-L)}}var b=!1,R=-1,v=5,T=-1;function D(){return g?!0:!(e.unstable_now()-T<v)}function w(){if(g=!1,b){var L=e.unstable_now();T=L;var P=!0;try{t:{x=!1,E&&(E=!1,m(R),R=-1),d=!0;var W=u;try{e:{for(S(L),p=n(l);p!==null&&!(p.expirationTime>L&&D());){var J=p.callback;if(typeof J=="function"){p.callback=null,u=p.priorityLevel;var st=J(p.expirationTime<=L);if(L=e.unstable_now(),typeof st=="function"){p.callback=st,S(L),P=!0;break e}p===n(l)&&i(l),S(L)}else i(l);p=n(l)}if(p!==null)P=!0;else{var ot=n(c);ot!==null&&z(C,ot.startTime-L),P=!1}}break t}finally{p=null,u=W,d=!1}P=void 0}}finally{P?F():b=!1}}}var F;if(typeof _=="function")F=function(){_(w)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=w,F=function(){Q.postMessage(null)}}else F=function(){f(w,0)};function z(L,P){R=f(function(){L(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(L){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var W=u;u=P;try{return L()}finally{u=W}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=u;u=L;try{return P()}finally{u=W}},e.unstable_scheduleCallback=function(L,P,W){var J=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,L){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=W+st,L={id:h++,callback:P,priorityLevel:L,startTime:W,expirationTime:st,sortIndex:-1},W>J?(L.sortIndex=W,t(c,L),n(l)===null&&L===n(c)&&(E?(m(R),R=-1):E=!0,z(C,W-J))):(L.sortIndex=st,t(l,L),x||d||(x=!0,b||(b=!0,F()))),L},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(L){var P=u;return function(){var W=u;u=P;try{return L.apply(this,arguments)}finally{u=W}}}})(__);g_.exports=__;var _M=g_.exports,v_={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=nn;function x_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ga(){}var yn={d:{f:ga,r:function(){throw Error(x_(522))},D:ga,C:ga,L:ga,m:ga,X:ga,S:ga,M:ga},p:0,findDOMNode:null},xM=Symbol.for("react.portal");function SM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var wo=vM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;En.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(x_(299));return SM(e,t,null,n)};En.flushSync=function(e){var t=wo.T,n=yn.p;try{if(wo.T=null,yn.p=2,e)return e()}finally{wo.T=t,yn.p=n,yn.d.f()}};En.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};En.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};En.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Tu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};En.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Tu(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&yn.d.M(e)};En.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Tu(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};En.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Tu(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else yn.d.m(e)};En.requestFormReset=function(e){yn.d.r(e)};En.unstable_batchedUpdates=function(e,t){return e(t)};En.useFormState=function(e,t,n){return wo.H.useFormState(e,t,n)};En.useFormStatus=function(){return wo.H.useHostTransitionStatus()};En.version="19.2.5";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),v_.exports=En;var MM=v_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=_M,M_=nn,yM=MM;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dm(e){if(cl(e)!==e)throw Error(K(188))}function EM(e){var t=e.alternate;if(!t){if(t=cl(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Dm(a),e;if(s===i)return Dm(a),t;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function T_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T_(e),t!==null)return t;e=e.sibling}return null}var we=Object.assign,bM=Symbol.for("react.element"),Al=Symbol.for("react.transitional.element"),Mo=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),R_=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),Ea=Symbol.for("react.lazy"),ph=Symbol.for("react.activity"),TM=Symbol.for("react.memo_cache_sentinel"),Um=Symbol.iterator;function no(e){return e===null||typeof e!="object"?null:(e=Um&&e[Um]||e["@@iterator"],typeof e=="function"?e:null)}var AM=Symbol.for("react.client.reference");function mh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===AM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case fh:return"Profiler";case A_:return"StrictMode";case hh:return"Suspense";case dh:return"SuspenseList";case ph:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Mo:return"Portal";case Zi:return e.displayName||"Context";case R_:return(e._context.displayName||"Context")+".Consumer";case ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sp:return t=e.displayName||null,t!==null?t:mh(e.type)||"Memo";case Ea:t=e._payload,e=e._init;try{return mh(e(t))}catch{}}return null}var yo=Array.isArray,Pt=M_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=yM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ps={pending:!1,data:null,method:null,action:null},gh=[],ur=-1;function Ni(e){return{current:e}}function en(e){0>ur||(e.current=gh[ur],gh[ur]=null,ur--)}function be(e,t){ur++,gh[ur]=e.current,e.current=t}var wi=Ni(null),Wo=Ni(null),Ia=Ni(null),Pc=Ni(null);function Ic(e,t){switch(be(Ia,t),be(Wo,e),be(wi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?z0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=z0(t),e=qx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(wi),be(wi,e)}function Dr(){en(wi),en(Wo),en(Ia)}function _h(e){e.memoizedState!==null&&be(Pc,e);var t=wi.current,n=qx(t,e.type);t!==n&&(be(Wo,e),be(wi,n))}function zc(e){Wo.current===e&&(en(wi),en(Wo)),Pc.current===e&&(en(Pc),nl._currentValue=ps)}var qu,Lm;function ss(e){if(qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qu=t&&t[1]||"",Lm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qu+e+Lm}var ju=!1;function Zu(e,t){if(!e||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ss(n):""}function RM(e,t){switch(e.tag){case 26:case 27:case 5:return ss(e.type);case 16:return ss("Lazy");case 13:return e.child!==t&&t!==null?ss("Suspense Fallback"):ss("Suspense");case 19:return ss("SuspenseList");case 0:case 15:return Zu(e.type,!1);case 11:return Zu(e.type.render,!1);case 1:return Zu(e.type,!0);case 31:return ss("Activity");default:return""}}function Nm(e){try{var t="",n=null;do t+=RM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var vh=Object.prototype.hasOwnProperty,rp=Ze.unstable_scheduleCallback,Ku=Ze.unstable_cancelCallback,CM=Ze.unstable_shouldYield,wM=Ze.unstable_requestPaint,Xn=Ze.unstable_now,DM=Ze.unstable_getCurrentPriorityLevel,C_=Ze.unstable_ImmediatePriority,w_=Ze.unstable_UserBlockingPriority,Bc=Ze.unstable_NormalPriority,UM=Ze.unstable_LowPriority,D_=Ze.unstable_IdlePriority,LM=Ze.log,NM=Ze.unstable_setDisableYieldValue,ul=null,kn=null;function Da(e){if(typeof LM=="function"&&NM(e),kn&&typeof kn.setStrictMode=="function")try{kn.setStrictMode(ul,e)}catch{}}var Wn=Math.clz32?Math.clz32:IM,OM=Math.log,PM=Math.LN2;function IM(e){return e>>>=0,e===0?32:31-(OM(e)/PM|0)|0}var Rl=256,Cl=262144,wl=4194304;function rs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Au(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=rs(i):(r&=o,r!==0?a=rs(r):n||(n=o&~e,n!==0&&(a=rs(n))))):(o=i&~s,o!==0?a=rs(o):r!==0?a=rs(r):n||(n=i&~e,n!==0&&(a=rs(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function zM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(){var e=wl;return wl<<=1,!(wl&62914560)&&(wl=4194304),e}function Qu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function BM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Wn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&L_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function L_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Wn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function N_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Wn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function O_(e,t){var n=t&-t;return n=n&42?1:op(n),n&(e.suspendedLanes|t)?0:n}function op(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lp(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function P_(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:aS(e.type))}function Om(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var Ja=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ja,Dn="__reactProps$"+Ja,Yr="__reactContainer$"+Ja,xh="__reactEvents$"+Ja,FM="__reactListeners$"+Ja,HM="__reactHandles$"+Ja,Pm="__reactResources$"+Ja,dl="__reactMarker$"+Ja;function cp(e){delete e[sn],delete e[Dn],delete e[xh],delete e[FM],delete e[HM]}function fr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yr]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=V0(e);e!==null;){if(n=e[sn])return n;e=V0(e)}return t}e=n,n=e.parentNode}return null}function qr(e){if(e=e[sn]||e[Yr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function Mr(e){var t=e[Pm];return t||(t=e[Pm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[dl]=!0}var I_=new Set,z_={};function As(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(z_[e]=t,e=0;e<t.length;e++)I_.add(t[e])}var GM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Im={},zm={};function VM(e){return vh.call(zm,e)?!0:vh.call(Im,e)?!1:GM.test(e)?zm[e]=!0:(Im[e]=!0,!1)}function pc(e,t,n){if(VM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Dl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ii(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function B_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function XM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sh(e){if(!e._valueTracker){var t=B_(e)?"checked":"value";e._valueTracker=XM(e,t,""+e[t])}}function F_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=B_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Fc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kM=/[\n"\\]/g;function ii(e){return e.replace(kM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ti(t)):e.value!==""+ti(t)&&(e.value=""+ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?yh(e,r,ti(t)):n!=null?yh(e,r,ti(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ti(o):e.removeAttribute("name")}function H_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Sh(e);return}n=n!=null?""+ti(n):"",t=t!=null?""+ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Sh(e)}function yh(e,t,n){t==="number"&&Fc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function G_(e,t,n){if(t!=null&&(t=""+ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ti(n):""}function V_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(yo(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Sh(e)}function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var WM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||WM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function X_(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Bm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Bm(e,s,t[s])}function up(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mc(e){return qM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var Eh=null;function fp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,Er=null;function Fm(e){var t=qr(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Mh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error(K(90));Mh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&F_(i)}break t;case"textarea":G_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}}}var Ju=!1;function k_(e,t,n){if(Ju)return e(t,n);Ju=!0;try{var i=e(t);return i}finally{if(Ju=!1,(hr!==null||Er!==null)&&(Bu(),hr&&(t=hr,e=Er,Er=hr=null,Fm(t),e)))for(t=0;t<e.length;t++)Fm(e[t])}}function Yo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=!1;if(sa)try{var io={};Object.defineProperty(io,"passive",{get:function(){bh=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{bh=!1}var Ua=null,hp=null,gc=null;function W_(){if(gc)return gc;var e,t=hp,n=t.length,i,a="value"in Ua?Ua.value:Ua.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return gc=a.slice(e,1<i?1-i:void 0)}function _c(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Hm(){return!1}function Un(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:Hm,this.isPropagationStopped=Hm,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=Un(Rs),pl=we({},Rs,{view:0,detail:0}),jM=Un(pl),$u,tf,ao,Cu=we({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?($u=e.screenX-ao.screenX,tf=e.screenY-ao.screenY):tf=$u=0,ao=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),Gm=Un(Cu),ZM=we({},Cu,{dataTransfer:0}),KM=Un(ZM),QM=we({},pl,{relatedTarget:0}),ef=Un(QM),JM=we({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=Un(JM),ty=we({},Rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=Un(ty),ny=we({},Rs,{data:0}),Vm=Un(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function dp(){return ry}var oy=we({},pl,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_c(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(e){return e.type==="keypress"?_c(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_c(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ly=Un(oy),cy=we({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Un(cy),uy=we({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),fy=Un(uy),hy=we({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=Un(hy),py=we({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Un(py),gy=we({},Rs,{newState:0,oldState:0}),_y=Un(gy),vy=[9,13,27,32],pp=sa&&"CompositionEvent"in window,Do=null;sa&&"documentMode"in document&&(Do=document.documentMode);var xy=sa&&"TextEvent"in window&&!Do,Y_=sa&&(!pp||Do&&8<Do&&11>=Do),km=" ",Wm=!1;function q_(e,t){switch(e){case"keyup":return vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Sy(e,t){switch(e){case"compositionend":return j_(t);case"keypress":return t.which!==32?null:(Wm=!0,km);case"textInput":return e=t.data,e===km&&Wm?null:e;default:return null}}function My(e,t){if(dr)return e==="compositionend"||!pp&&q_(e,t)?(e=W_(),gc=hp=Ua=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Y_&&t.locale!=="ko"?null:t.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yy[e.type]:t==="textarea"}function Z_(e,t,n,i){hr?Er?Er.push(i):Er=[i]:hr=i,t=iu(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Uo=null,qo=null;function Ey(e){kx(e,0)}function wu(e){var t=Eo(e);if(F_(t))return e}function qm(e,t){if(e==="change")return t}var K_=!1;if(sa){var nf;if(sa){var af="oninput"in document;if(!af){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),af=typeof jm.oninput=="function"}nf=af}else nf=!1;K_=nf&&(!document.documentMode||9<document.documentMode)}function Zm(){Uo&&(Uo.detachEvent("onpropertychange",Q_),qo=Uo=null)}function Q_(e){if(e.propertyName==="value"&&wu(qo)){var t=[];Z_(t,qo,e,fp(e)),k_(Ey,t)}}function by(e,t,n){e==="focusin"?(Zm(),Uo=t,qo=n,Uo.attachEvent("onpropertychange",Q_)):e==="focusout"&&Zm()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu(qo)}function Ay(e,t){if(e==="click")return wu(t)}function Ry(e,t){if(e==="input"||e==="change")return wu(t)}function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:Cy;function jo(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!vh.call(t,a)||!qn(e[a],t[a]))return!1}return!0}function Km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qm(e,t){var n=Km(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Km(n)}}function J_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fc(e.document)}return t}function mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wy=sa&&"documentMode"in document&&11>=document.documentMode,pr=null,Th=null,Lo=null,Ah=!1;function Jm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ah||pr==null||pr!==Fc(i)||(i=pr,"selectionStart"in i&&mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&jo(Lo,i)||(Lo=i,i=iu(Th,"onSelect"),0<i.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=pr)))}function ts(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},sf={},tv={};sa&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Cs(e){if(sf[e])return sf[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tv)return sf[e]=t[n];return e}var ev=Cs("animationend"),nv=Cs("animationiteration"),iv=Cs("animationstart"),Dy=Cs("transitionrun"),Uy=Cs("transitionstart"),Ly=Cs("transitioncancel"),av=Cs("transitionend"),sv=new Map,Rh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rh.push("scrollEnd");function xi(e,t){sv.set(e,t),As(t,[e])}var Hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Jn=[],gr=0,gp=0;function Du(){for(var e=gr,t=gp=gr=0;t<e;){var n=Jn[t];Jn[t++]=null;var i=Jn[t];Jn[t++]=null;var a=Jn[t];Jn[t++]=null;var s=Jn[t];if(Jn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&rv(n,a,s)}}function Uu(e,t,n,i){Jn[gr++]=e,Jn[gr++]=t,Jn[gr++]=n,Jn[gr++]=i,gp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function _p(e,t,n,i){return Uu(e,t,n,i),Gc(e)}function ws(e,t){return Uu(e,null,null,t),Gc(e)}function rv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Wn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Gc(e){if(50<Go)throw Go=0,jh=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function Ny(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new Ny(e,t,n,i)}function vp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ov(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")vp(e)&&(r=1);else if(typeof e=="string")r=BE(e,n,wi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case ph:return e=Hn(31,n,t,a),e.elementType=ph,e.lanes=s,e;case cr:return ms(n.children,a,s,t);case A_:r=8,a|=24;break;case fh:return e=Hn(12,n,t,a|2),e.elementType=fh,e.lanes=s,e;case hh:return e=Hn(13,n,t,a),e.elementType=hh,e.lanes=s,e;case dh:return e=Hn(19,n,t,a),e.elementType=dh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zi:r=10;break t;case R_:r=9;break t;case ap:r=11;break t;case sp:r=14;break t;case Ea:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Hn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ms(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function rf(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function lv(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function of(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $m=new WeakMap;function ai(e,t){if(typeof e=="object"&&e!==null){var n=$m.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Nm(t)},$m.set(e,t),t)}return{value:e,source:t,stack:Nm(t)}}var vr=[],xr=0,Vc=null,Zo=0,ei=[],ni=0,Ya=null,bi=1,Ti="";function Yi(e,t){vr[xr++]=Zo,vr[xr++]=Vc,Vc=e,Zo=t}function cv(e,t,n){ei[ni++]=bi,ei[ni++]=Ti,ei[ni++]=Ya,Ya=e;var i=bi;e=Ti;var a=32-Wn(i)-1;i&=~(1<<a),n+=1;var s=32-Wn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,bi=1<<32-Wn(t)+a|n<<a|i,Ti=s+e}else bi=1<<s|n<<a|i,Ti=e}function xp(e){e.return!==null&&(Yi(e,1),cv(e,1,0))}function Sp(e){for(;e===Vc;)Vc=vr[--xr],vr[xr]=null,Zo=vr[--xr],vr[xr]=null;for(;e===Ya;)Ya=ei[--ni],ei[ni]=null,Ti=ei[--ni],ei[ni]=null,bi=ei[--ni],ei[ni]=null}function uv(e,t){ei[ni++]=bi,ei[ni++]=Ti,ei[ni++]=Ya,bi=t.id,Ti=t.overflow,Ya=e}var rn=null,Re=null,ie=!1,za=null,si=!1,Ch=Error(K(519));function qa(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ko(ai(t,e)),Ch}function t0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[sn]=e,t[Dn]=i,n){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(n=0;n<tl.length;n++)Qt(tl[n],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),H_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),V_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Yx(t.textContent,n)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=Ki),t=!0):t=!1,t||qa(e,!0)}function e0(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:rn=rn.return}}function Fs(e){if(e!==rn)return!1;if(!ie)return e0(e),ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$h(e.type,e.memoizedProps)),n=!n),n&&Re&&qa(e),e0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Re=G0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Re=G0(e)}else t===27?(t=Re,$a(e.type)?(e=id,id=null,Re=e):Re=t):Re=rn?li(e.stateNode.nextSibling):null;return!0}function xs(){Re=rn=null,ie=!1}function lf(){var e=za;return e!==null&&(Rn===null?Rn=e:Rn.push.apply(Rn,e),za=null),e}function Ko(e){za===null?za=[e]:za.push(e)}var wh=Ni(null),Ds=null,Qi=null;function Ta(e,t,n){be(wh,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=wh.current,en(wh)}function Dh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Uh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Dh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(K(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Dh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function jr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=a.type;qn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Pc.current){if(r=a.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}a=a.return}e!==null&&Uh(t,e,n,i),t.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){Ds=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return fv(Ds,e)}function Ll(e,t){return Ds===null&&Ss(e),fv(e,t)}function fv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(K(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var Oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Py=Ze.unstable_scheduleCallback,Iy=Ze.unstable_NormalPriority,Ye={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mp(){return{controller:new Oy,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&Py(Iy,function(){e.controller.abort()})}var No=null,Lh=0,Nr=0,br=null;function zy(e,t){if(No===null){var n=No=[];Lh=0,Nr=Yp(),br={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Lh++,t.then(n0,n0),t}function n0(){if(--Lh===0&&No!==null){br!==null&&(br.status="fulfilled");var e=No;No=null,Nr=0,br=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function By(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var i0=Pt.S;Pt.S=function(e,t){Tx=Xn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zy(e,t),i0!==null&&i0(e,t)};var gs=Ni(null);function yp(){var e=gs.current;return e!==null?e:ye.pooledCache}function xc(e,t){t===null?be(gs,gs.current):be(gs,t.pool)}function hv(){var e=yp();return e===null?null:{parent:Ye._currentValue,pool:e}}var Zr=Error(K(460)),Ep=Error(K(474)),Lu=Error(K(542)),kc={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ki,Ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,r0(e),e;default:if(typeof t.status=="string")t.then(Ki,Ki);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,r0(e),e}throw _s=t,Zr}}function os(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_s=n,Zr):n}}var _s=null;function s0(){if(_s===null)throw Error(K(459));var e=_s;return _s=null,e}function r0(e){if(e===Zr||e===Lu)throw Error(K(483))}var Tr=null,Qo=0;function Nl(e){var t=Qo;return Qo+=1,Tr===null&&(Tr=[]),dv(Tr,e,t)}function so(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ol(e,t){throw t.$$typeof===bM?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=$i(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,S){return m===null||m.tag!==6?(m=rf(_,f.mode,S),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,S){var C=_.type;return C===cr?h(f,m,_.props.children,S,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ea&&os(C)===m.type)?(m=a(m,_.props),so(m,_),m.return=f,m):(m=vc(_.type,_.key,_.props,null,f.mode,S),so(m,_),m.return=f,m)}function c(f,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=of(_,f.mode,S),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function h(f,m,_,S,C){return m===null||m.tag!==7?(m=ms(_,f.mode,S,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function p(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=rf(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Al:return _=vc(m.type,m.key,m.props,null,f.mode,_),so(_,m),_.return=f,_;case Mo:return m=of(m,f.mode,_),m.return=f,m;case Ea:return m=os(m),p(f,m,_)}if(yo(m)||no(m))return m=ms(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return p(f,Nl(m),_);if(m.$$typeof===Zi)return p(f,Ll(f,m),_);Ol(f,m)}return null}function u(f,m,_,S){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:return _.key===C?l(f,m,_,S):null;case Mo:return _.key===C?c(f,m,_,S):null;case Ea:return _=os(_),u(f,m,_,S)}if(yo(_)||no(_))return C!==null?null:h(f,m,_,S,null);if(typeof _.then=="function")return u(f,m,Nl(_),S);if(_.$$typeof===Zi)return u(f,m,Ll(f,_),S);Ol(f,_)}return null}function d(f,m,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(_)||null,o(m,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Al:return f=f.get(S.key===null?_:S.key)||null,l(m,f,S,C);case Mo:return f=f.get(S.key===null?_:S.key)||null,c(m,f,S,C);case Ea:return S=os(S),d(f,m,_,S,C)}if(yo(S)||no(S))return f=f.get(_)||null,h(m,f,S,C,null);if(typeof S.then=="function")return d(f,m,_,Nl(S),C);if(S.$$typeof===Zi)return d(f,m,_,Ll(m,S),C);Ol(m,S)}return null}function x(f,m,_,S){for(var C=null,b=null,R=m,v=m=0,T=null;R!==null&&v<_.length;v++){R.index>v?(T=R,R=null):T=R.sibling;var D=u(f,R,_[v],S);if(D===null){R===null&&(R=T);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,v),b===null?C=D:b.sibling=D,b=D,R=T}if(v===_.length)return n(f,R),ie&&Yi(f,v),C;if(R===null){for(;v<_.length;v++)R=p(f,_[v],S),R!==null&&(m=s(R,m,v),b===null?C=R:b.sibling=R,b=R);return ie&&Yi(f,v),C}for(R=i(R);v<_.length;v++)T=d(R,f,v,_[v],S),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?v:T.key),m=s(T,m,v),b===null?C=T:b.sibling=T,b=T);return e&&R.forEach(function(w){return t(f,w)}),ie&&Yi(f,v),C}function E(f,m,_,S){if(_==null)throw Error(K(151));for(var C=null,b=null,R=m,v=m=0,T=null,D=_.next();R!==null&&!D.done;v++,D=_.next()){R.index>v?(T=R,R=null):T=R.sibling;var w=u(f,R,D.value,S);if(w===null){R===null&&(R=T);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,v),b===null?C=w:b.sibling=w,b=w,R=T}if(D.done)return n(f,R),ie&&Yi(f,v),C;if(R===null){for(;!D.done;v++,D=_.next())D=p(f,D.value,S),D!==null&&(m=s(D,m,v),b===null?C=D:b.sibling=D,b=D);return ie&&Yi(f,v),C}for(R=i(R);!D.done;v++,D=_.next())D=d(R,f,v,D.value,S),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?v:D.key),m=s(D,m,v),b===null?C=D:b.sibling=D,b=D);return e&&R.forEach(function(F){return t(f,F)}),ie&&Yi(f,v),C}function g(f,m,_,S){if(typeof _=="object"&&_!==null&&_.type===cr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===cr){if(m.tag===7){n(f,m.sibling),S=a(m,_.props.children),S.return=f,f=S;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ea&&os(C)===m.type){n(f,m.sibling),S=a(m,_.props),so(S,_),S.return=f,f=S;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===cr?(S=ms(_.props.children,f.mode,S,_.key),S.return=f,f=S):(S=vc(_.type,_.key,_.props,null,f.mode,S),so(S,_),S.return=f,f=S)}return r(f);case Mo:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),S=a(m,_.children||[]),S.return=f,f=S;break t}else{n(f,m);break}else t(f,m);m=m.sibling}S=of(_,f.mode,S),S.return=f,f=S}return r(f);case Ea:return _=os(_),g(f,m,_,S)}if(yo(_))return x(f,m,_,S);if(no(_)){if(C=no(_),typeof C!="function")throw Error(K(150));return _=C.call(_),E(f,m,_,S)}if(typeof _.then=="function")return g(f,m,Nl(_),S);if(_.$$typeof===Zi)return g(f,m,Ll(f,_),S);Ol(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),S=a(m,_),S.return=f,f=S):(n(f,m),S=rf(_,f.mode,S),S.return=f,f=S),r(f)):n(f,m)}return function(f,m,_,S){try{Qo=0;var C=g(f,m,_,S);return Tr=null,C}catch(R){if(R===Zr||R===Lu)throw R;var b=Hn(29,R,null,f.mode);return b.lanes=S,b.return=f,b}finally{}}}var Ms=pv(!0),mv=pv(!1),ba=!1;function bp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,oe&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Gc(e),rv(e,null,n),t}return Uu(e,i,t,n),Gc(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,N_(e,n)}}function cf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oh=!1;function Po(){if(Oh){var e=br;if(e!==null)throw e}}function Io(e,t,n,i){Oh=!1;var a=e.updateQueue;ba=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(te&u)===u:(i&u)===u){u!==0&&u===Nr&&(Oh=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(g,p,u);break t}p=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,u=typeof x=="function"?x.call(g,p,u):x,u==null)break t;p=we({},p,u);break t;case 2:ba=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Za|=r,e.lanes=r,e.memoizedState=p}}function gv(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function _v(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gv(n[e],t)}var Or=Ni(null),Wc=Ni(0);function o0(e,t){e=ca,be(Wc,e),be(Or,t),ca=e|t.baseLanes}function Ph(){be(Wc,ca),be(Or,Or.current)}function Tp(){ca=Wc.current,en(Or),en(Wc)}var jn=Ni(null),oi=null;function Aa(e){var t=e.alternate;be(Ge,Ge.current&1),be(jn,e),oi===null&&(t===null||Or.current!==null||t.memoizedState!==null)&&(oi=e)}function Ih(e){be(Ge,Ge.current),be(jn,e),oi===null&&(oi=e)}function vv(e){e.tag===22?(be(Ge,Ge.current),be(jn,e),oi===null&&(oi=e)):Ra()}function Ra(){be(Ge,Ge.current),be(jn,jn.current)}function Bn(e){en(jn),oi===e&&(oi=null),en(Ge)}var Ge=Ni(0);function Yc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ed(n)||nd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,Xt=null,_e=null,ke=null,qc=!1,Ar=!1,ys=!1,jc=0,Jo=0,Rr=null,Fy=0;function Pe(){throw Error(K(321))}function Ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function Rp(e,t,n,i,a,s){return ra=s,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?Zv:Bp,ys=!1,s=n(i,a),ys=!1,Ar&&(s=Sv(t,n,i,a)),xv(e),s}function xv(e){Pt.H=$o;var t=_e!==null&&_e.next!==null;if(ra=0,ke=_e=Xt=null,qc=!1,Jo=0,Rr=null,t)throw Error(K(300));e===null||qe||(e=e.dependencies,e!==null&&Xc(e)&&(qe=!0))}function Sv(e,t,n,i){Xt=e;var a=0;do{if(Ar&&(Rr=null),Jo=0,Ar=!1,25<=a)throw Error(K(301));if(a+=1,ke=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Pt.H=Kv,s=t(n,i)}while(Ar);return s}function Hy(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Xt.flags|=1024),t}function Cp(){var e=jc!==0;return jc=0,e}function wp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Dp(e){if(qc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qc=!1}ra=0,ke=_e=Xt=null,Ar=!1,Jo=jc=0,Rr=null}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Xt.memoizedState=ke=e:ke=ke.next=e,ke}function Ve(){if(_e===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ke===null?Xt.memoizedState:ke.next;if(t!==null)ke=t,_e=e;else{if(e===null)throw Xt.alternate===null?Error(K(467)):Error(K(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?Xt.memoizedState=ke=e:ke=ke.next=e}return ke}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=Jo;return Jo+=1,Rr===null&&(Rr=[]),e=dv(Rr,e,t),t=Xt,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?Zv:Bp),e}function Ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===Zi)return on(e)}throw Error(K(438,String(e)))}function Up(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nu(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=TM;return t.index++,n}function oa(e,t){return typeof t=="function"?t(e):t}function Sc(e){var t=Ve();return Lp(t,_e,e)}function Lp(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(te&p)===p:(ra&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Nr&&(h=!0);else if((ra&u)===u){c=c.next,u===Nr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Xt.lanes|=u,Za|=u;p=c.action,ys&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Xt.lanes|=p,Za|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!qn(s,e.memoizedState)&&(qe=!0,h&&(n=br,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function uf(e){var t=Ve(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);qn(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Mv(e,t,n){var i=Xt,a=Ve(),s=ie;if(s){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!qn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,qe=!0),a=a.queue,Np(bv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||ke!==null&&ke.memoizedState.tag&1){if(i.flags|=2048,Pr(9,{destroy:void 0},Ev.bind(null,i,a,n,t),null),ye===null)throw Error(K(349));s||ra&127||yv(i,t,n)}return n}function yv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=Nu(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ev(e,t,n,i){t.value=n,t.getSnapshot=i,Tv(t)&&Av(e)}function bv(e,t,n){return n(function(){Tv(t)&&Av(e)})}function Tv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function Av(e){var t=ws(e,2);t!==null&&Cn(t,e,2)}function zh(e){var t=Mn();if(typeof e=="function"){var n=e;if(e=n(),ys){Da(!0);try{n()}finally{Da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function Rv(e,t,n,i){return e.baseState=n,Lp(e,_e,typeof i=="function"?i:oa)}function Gy(e,t,n,i,a){if(Iu(e))throw Error(K(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Pt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Cv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Cv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Pt.T,r={};Pt.T=r;try{var o=n(a,i),l=Pt.S;l!==null&&l(r,o),l0(e,t,o)}catch(c){Bh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Pt.T=s}}else try{s=n(a,i),l0(e,t,s)}catch(c){Bh(e,t,c)}}function l0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){c0(e,t,i)},function(i){return Bh(e,t,i)}):c0(e,t,n)}function c0(e,t,n){t.status="fulfilled",t.value=n,wv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cv(e,n)))}function Bh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wv(t),t=t.next;while(t!==i)}e.action=null}function wv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dv(e,t){return t}function u0(e,t){if(ie){var n=ye.formState;if(n!==null){t:{var i=Xt;if(ie){if(Re){e:{for(var a=Re,s=si;a.nodeType!==8;){if(!s){a=null;break e}if(a=li(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Re=li(a.nextSibling),i=a.data==="F!";break t}}qa(i)}i=!1}i&&(t=n[0])}}return n=Mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:t},n.queue=i,n=Yv.bind(null,Xt,i),i.dispatch=n,i=zh(!1),s=zp.bind(null,Xt,!1,i.queue),i=Mn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Gy.bind(null,Xt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function f0(e){var t=Ve();return Uv(t,_e,e)}function Uv(e,t,n){if(t=Lp(e,t,Dv)[0],e=Sc(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=gl(t)}catch(r){throw r===Zr?Lu:r}else i=t;t=Ve();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,Pr(9,{destroy:void 0},Vy.bind(null,a,n),null)),[i,s,e]}function Vy(e,t){e.action=t}function h0(e){var t=Ve(),n=_e;if(n!==null)return Uv(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Pr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=Nu(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Lv(){return Ve().memoizedState}function Mc(e,t,n,i){var a=Mn();Xt.flags|=e,a.memoizedState=Pr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Pu(e,t,n,i){var a=Ve();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&Ap(i,_e.memoizedState.deps)?a.memoizedState=Pr(t,s,n,i):(Xt.flags|=e,a.memoizedState=Pr(1|t,s,n,i))}function d0(e,t){Mc(8390656,8,e,t)}function Np(e,t){Pu(2048,8,e,t)}function Xy(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=Nu(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Nv(e){var t=Ve().memoizedState;return Xy({ref:t,nextImpl:e}),function(){if(oe&2)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function Ov(e,t){return Pu(4,2,e,t)}function Pv(e,t){return Pu(4,4,e,t)}function Iv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zv(e,t,n){n=n!=null?n.concat([e]):null,Pu(4,4,Iv.bind(null,t,e),n)}function Op(){}function Bv(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ap(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fv(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ap(t,i[1]))return i[0];if(i=e(),ys){Da(!0);try{e()}finally{Da(!1)}}return n.memoizedState=[i,t],i}function Pp(e,t,n){return n===void 0||ra&1073741824&&!(te&261930)?e.memoizedState=t:(e.memoizedState=n,e=Rx(),Xt.lanes|=e,Za|=e,n)}function Hv(e,t,n,i){return qn(n,t)?n:Or.current!==null?(e=Pp(e,n,i),qn(e,t)||(qe=!0),e):!(ra&42)||ra&1073741824&&!(te&261930)?(qe=!0,e.memoizedState=n):(e=Rx(),Xt.lanes|=e,Za|=e,t)}function Gv(e,t,n,i,a){var s=le.p;le.p=s!==0&&8>s?s:8;var r=Pt.T,o={};Pt.T=o,zp(e,!1,t,n);try{var l=a(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=By(l,i);zo(e,t,h,Yn(e))}else zo(e,t,i,Yn(e))}catch(p){zo(e,t,{then:function(){},status:"rejected",reason:p},Yn())}finally{le.p=s,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function ky(){}function Fh(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=Vv(e).queue;Gv(e,a,t,ps,n===null?ky:function(){return Xv(e),n(i)})}function Vv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ps,baseState:ps,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ps},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xv(e){var t=Vv(e);t.next===null&&(t=e.alternate.memoizedState),zo(e,t.next.queue,{},Yn())}function Ip(){return on(nl)}function kv(){return Ve().memoizedState}function Wv(){return Ve().memoizedState}function Wy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yn();e=Ba(n);var i=Fa(t,e,n);i!==null&&(Cn(i,t,n),Oo(i,t,n)),t={cache:Mp()},e.payload=t;return}t=t.return}}function Yy(e,t,n){var i=Yn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e)?qv(t,n):(n=_p(e,t,n,i),n!==null&&(Cn(n,e,i),jv(n,t,i)))}function Yv(e,t,n){var i=Yn();zo(e,t,n,i)}function zo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))qv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,qn(o,r))return Uu(e,t,a,0),ye===null&&Du(),!1}catch{}finally{}if(n=_p(e,t,a,i),n!==null)return Cn(n,e,i),jv(n,t,i),!0}return!1}function zp(e,t,n,i){if(i={lane:2,revertLane:Yp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Iu(e)){if(t)throw Error(K(479))}else t=_p(e,n,i,2),t!==null&&Cn(t,e,2)}function Iu(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function qv(e,t){Ar=qc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,N_(e,n)}}var $o={readContext:on,use:Ou,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};$o.useEffectEvent=Pe;var Zv={readContext:on,use:Ou,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:d0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mc(4194308,4,Iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mc(4194308,4,e,t)},useInsertionEffect:function(e,t){Mc(4,2,e,t)},useMemo:function(e,t){var n=Mn();t=t===void 0?null:t;var i=e();if(ys){Da(!0);try{e()}finally{Da(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Mn();if(n!==void 0){var a=n(t);if(ys){Da(!0);try{n(t)}finally{Da(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Yy.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:function(e){e=zh(e);var t=e.queue,n=Yv.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Op,useDeferredValue:function(e,t){var n=Mn();return Pp(n,e,t)},useTransition:function(){var e=zh(!1);return e=Gv.bind(null,Xt,e.queue,!0,!1),Mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,a=Mn();if(ie){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),ye===null)throw Error(K(349));te&127||yv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,d0(bv.bind(null,i,s,e),[e]),i.flags|=2048,Pr(9,{destroy:void 0},Ev.bind(null,i,s,n,t),null),n},useId:function(){var e=Mn(),t=ye.identifierPrefix;if(ie){var n=Ti,i=bi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Fy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ip,useFormState:u0,useActionState:u0,useOptimistic:function(e){var t=Mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zp.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Up,useCacheRefresh:function(){return Mn().memoizedState=Wy.bind(null,Xt)},useEffectEvent:function(e){var t=Mn(),n={impl:e};return t.memoizedState=n,function(){if(oe&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},Bp={readContext:on,use:Ou,useCallback:Bv,useContext:on,useEffect:Np,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:Fv,useReducer:Sc,useRef:Lv,useState:function(){return Sc(oa)},useDebugValue:Op,useDeferredValue:function(e,t){var n=Ve();return Hv(n,_e.memoizedState,e,t)},useTransition:function(){var e=Sc(oa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Mv,useId:kv,useHostTransitionStatus:Ip,useFormState:f0,useActionState:f0,useOptimistic:function(e,t){var n=Ve();return Rv(n,_e,e,t)},useMemoCache:Up,useCacheRefresh:Wv};Bp.useEffectEvent=Nv;var Kv={readContext:on,use:Ou,useCallback:Bv,useContext:on,useEffect:Np,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Pv,useMemo:Fv,useReducer:uf,useRef:Lv,useState:function(){return uf(oa)},useDebugValue:Op,useDeferredValue:function(e,t){var n=Ve();return _e===null?Pp(n,e,t):Hv(n,_e.memoizedState,e,t)},useTransition:function(){var e=uf(oa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Mv,useId:kv,useHostTransitionStatus:Ip,useFormState:h0,useActionState:h0,useOptimistic:function(e,t){var n=Ve();return _e!==null?Rv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Up,useCacheRefresh:Wv};Kv.useEffectEvent=Nv;function ff(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Yn(),a=Ba(i);a.payload=t,n!=null&&(a.callback=n),t=Fa(e,a,i),t!==null&&(Cn(t,e,i),Oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Yn(),a=Ba(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Fa(e,a,i),t!==null&&(Cn(t,e,i),Oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yn(),i=Ba(n);i.tag=2,t!=null&&(i.callback=t),t=Fa(e,i,n),t!==null&&(Cn(t,e,n),Oo(t,e,n))}};function p0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!jo(n,i)||!jo(a,s):!0}function m0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Hh.enqueueReplaceState(t,t.state,null)}function Es(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=we({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Qv(e){Hc(e)}function Jv(e){console.error(e)}function $v(e){Hc(e)}function Zc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function g0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Gh(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Zc(e,t)},n}function tx(e){return e=Ba(e),e.tag=3,e}function ex(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){g0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){g0(t,n,i),typeof a!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function qy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&jr(t,n,a,!0),n=jn.current,n!==null){switch(n.tag){case 31:case 13:return oi===null?tu():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===kc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),yf(e,i,a)),!1;case 22:return n.flags|=65536,i===kc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),yf(e,i,a)),!1}throw Error(K(435,n.tag))}return yf(e,i,a),tu(),!1}if(ie)return t=jn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Ch&&(e=Error(K(422),{cause:i}),Ko(ai(e,n)))):(i!==Ch&&(t=Error(K(423),{cause:i}),Ko(ai(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ai(i,n),a=Gh(e.stateNode,i,a),cf(e,a),Ie!==4&&(Ie=2)),!1;var s=Error(K(520),{cause:i});if(s=ai(s,n),Ho===null?Ho=[s]:Ho.push(s),Ie!==4&&(Ie=2),t===null)return!0;i=ai(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Gh(n.stateNode,i,e),cf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tx(a),ex(a,e,n,i),cf(n,a),!1}n=n.return}while(n!==null);return!1}var Fp=Error(K(461)),qe=!1;function an(e,t,n,i){t.child=e===null?mv(t,null,n,i):Ms(t,e.child,n,i)}function _0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ss(t),i=Rp(e,t,n,r,s,a),o=Cp(),e!==null&&!qe?(wp(e,t,a),la(e,t,a)):(ie&&o&&xp(t),t.flags|=1,an(e,t,i,a),t.child)}function v0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!vp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,nx(e,t,s,i,a)):(e=vc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Hp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(r,i)&&e.ref===t.ref)return la(e,t,a)}return t.flags|=1,e=$i(s,i),e.ref=t.ref,e.return=t,t.child=e}function nx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(jo(s,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=s,Hp(e,a))e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,la(e,t,a)}return Vh(e,t,n,i,a)}function ix(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return x0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xc(t,s!==null?s.cachePool:null),s!==null?o0(t,s):Ph(),vv(t);else return i=t.lanes=536870912,x0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(xc(t,s.cachePool),o0(t,s),Ra(),t.memoizedState=null):(e!==null&&xc(t,null),Ph(),Ra());return an(e,t,a,n),t.child}function bo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function x0(e,t,n,i,a){var s=yp();return s=s===null?null:{parent:Ye._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&xc(t,null),Ph(),vv(t),e!==null&&jr(e,t,i,!0),t.childLanes=a,null}function yc(e,t){return t=Kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function S0(e,t,n){return Ms(t,e.child,null,n),e=yc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function jy(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ie){if(i.mode==="hidden")return e=yc(t,i),t.lanes=536870912,bo(null,e);if(Ih(t),(e=Re)?(e=Zx(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=lv(e),n.return=t,t.child=n,rn=t,Re=null)):e=null,e===null)throw qa(t);return t.lanes=536870912,null}return yc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Ih(t),a)if(t.flags&256)t.flags&=-257,t=S0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(qe||jr(e,t,n,!1),a=(n&e.childLanes)!==0,qe||a){if(i=ye,i!==null&&(r=O_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,ws(e,r),Cn(i,e,r),Fp;tu(),t=S0(e,t,n)}else e=s.treeContext,Re=li(r.nextSibling),rn=t,ie=!0,za=null,si=!1,e!==null&&uv(t,e),t=yc(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ec(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vh(e,t,n,i,a){return Ss(t),n=Rp(e,t,n,i,void 0,a),i=Cp(),e!==null&&!qe?(wp(e,t,a),la(e,t,a)):(ie&&i&&xp(t),t.flags|=1,an(e,t,n,a),t.child)}function M0(e,t,n,i,a,s){return Ss(t),t.updateQueue=null,n=Sv(t,i,n,a),xv(e),i=Cp(),e!==null&&!qe?(wp(e,t,s),la(e,t,s)):(ie&&i&&xp(t),t.flags|=1,an(e,t,n,s),t.child)}function y0(e,t,n,i,a){if(Ss(t),t.stateNode===null){var s=_r,r=n.contextType;typeof r=="object"&&r!==null&&(s=on(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Hh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},bp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?on(r):_r,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ff(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Hh.enqueueReplaceState(s,s.state,null),Io(t,i,s,a),Po(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Es(n,o);s.props=l;var c=s.context,h=n.contextType;r=_r,typeof h=="object"&&h!==null&&(r=on(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&m0(t,s,i,r),ba=!1;var u=t.memoizedState;s.state=u,Io(t,i,s,a),Po(),c=t.memoizedState,o||u!==c||ba?(typeof p=="function"&&(ff(t,n,p,i),c=t.memoizedState),(l=ba||p0(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Nh(e,t),r=t.memoizedProps,h=Es(n,r),s.props=h,p=t.pendingProps,u=s.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&m0(t,s,i,l),ba=!1,u=t.memoizedState,s.state=u,Io(t,i,s,a),Po();var d=t.memoizedState;r!==p||u!==d||ba||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof o=="function"&&(ff(t,n,o,i),d=t.memoizedState),(h=ba||p0(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Ec(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ms(t,e.child,null,a),t.child=Ms(t,null,n,a)):an(e,t,n,a),t.memoizedState=s.state,e=t.child):e=la(e,t,a),e}function E0(e,t,n,i){return xs(),t.flags|=256,an(e,t,n,i),t.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:hv()}}function pf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function ax(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(a?Aa(t):Ra(),(e=Re)?(e=Zx(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=lv(e),n.return=t,t.child=n,rn=t,Re=null)):e=null,e===null)throw qa(t);return nd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ra(),a=t.mode,o=Kc({mode:"hidden",children:o},a),i=ms(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=df(n),i.childLanes=pf(e,r,n),t.memoizedState=hf,bo(null,i)):(Aa(t),Xh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Aa(t),t.flags&=-257,t=mf(e,t,n)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),o=i.fallback,a=t.mode,i=Kc({mode:"visible",children:i.children},a),o=ms(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ms(t,e.child,null,n),i=t.child,i.memoizedState=df(n),i.childLanes=pf(e,r,n),t.memoizedState=hf,t=bo(null,i));else if(Aa(t),nd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,Ko({value:i,source:null,stack:null}),t=mf(e,t,n)}else if(qe||jr(e,t,n,!1),r=(n&e.childLanes)!==0,qe||r){if(r=ye,r!==null&&(i=O_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ws(e,i),Cn(r,e,i),Fp;ed(o)||tu(),t=mf(e,t,n)}else ed(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=li(o.nextSibling),rn=t,ie=!0,za=null,si=!1,e!==null&&uv(t,e),t=Xh(t,i.children),t.flags|=4096);return t}return a?(Ra(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=ms(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,bo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=df(n):(a=o.cachePool,a!==null?(l=Ye._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=hv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=pf(e,r,n),t.memoizedState=hf,bo(e.child,i)):(Aa(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xh(e,t){return t=Kc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kc(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function mf(e,t,n){return Ms(t,e.child,null,n),e=Xh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Dh(e.return,t,n)}function gf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function sx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ge.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,be(Ge,r),an(e,t,i,n),i=ie?Zo:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,n,t);else if(e.tag===19)b0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Yc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),gf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Yc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}gf(t,!0,n,null,s,i);break;case"together":gf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function la(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Za|=t.lanes,!(n&t.childLanes))if(e!==null){if(jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function Zy(e,t,n){switch(t.tag){case 3:Ic(t,t.stateNode.containerInfo),Ta(t,Ye,e.memoizedState.cache),xs();break;case 27:case 5:_h(t);break;case 4:Ic(t,t.stateNode.containerInfo);break;case 10:Ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ih(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Aa(t),t.flags|=128,null):n&t.child.childLanes?ax(e,t,n):(Aa(t),e=la(e,t,n),e!==null?e.sibling:null);Aa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(jr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return sx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Ge,Ge.current),i)break;return null;case 22:return t.lanes=0,ix(e,t,n,t.pendingProps);case 24:Ta(t,Ye,e.memoizedState.cache)}return la(e,t,n)}function rx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Hp(e,n)&&!(t.flags&128))return qe=!1,Zy(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ie&&t.flags&1048576&&cv(t,Zo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=os(t.elementType),t.type=e,typeof e=="function")vp(e)?(i=Es(e,i),t.tag=1,t=y0(null,t,e,i,n)):(t.tag=0,t=Vh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===ap){t.tag=11,t=_0(null,t,e,i,n);break t}else if(a===sp){t.tag=14,t=v0(null,t,e,i,n);break t}}throw t=mh(e)||e,Error(K(306,t,""))}}return t;case 0:return Vh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Es(i,t.pendingProps),y0(e,t,i,a,n);case 3:t:{if(Ic(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Nh(e,t),Io(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ta(t,Ye,i),i!==s.cache&&Uh(t,[Ye],n,!0),Po(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=E0(e,t,i,n);break t}else if(i!==a){a=ai(Error(K(424)),t),Ko(a),t=E0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=li(e.firstChild),rn=t,ie=!0,za=null,si=!0,n=mv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xs(),i===a){t=la(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return Ec(e,t),e===null?(n=k0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,i=au(Ia.current).createElement(n),i[sn]=t,i[Dn]=e,cn(i,n,e),tn(i),t.stateNode=i):t.memoizedState=k0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _h(t),e===null&&ie&&(i=t.stateNode=Kx(t.type,t.pendingProps,Ia.current),rn=t,si=!0,a=Re,$a(t.type)?(id=a,Re=li(i.firstChild)):Re=a),an(e,t,t.pendingProps.children,n),Ec(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ie&&((a=i=Re)&&(i=TE(i,t.type,t.pendingProps,si),i!==null?(t.stateNode=i,rn=t,Re=li(i.firstChild),si=!1,a=!0):a=!1),a||qa(t)),_h(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,$h(a,s)?i=null:r!==null&&$h(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Rp(e,t,Hy,null,null,n),nl._currentValue=a),Ec(e,t),an(e,t,i,n),t.child;case 6:return e===null&&ie&&((e=n=Re)&&(n=AE(n,t.pendingProps,si),n!==null?(t.stateNode=n,rn=t,Re=null,e=!0):e=!1),e||qa(t)),null;case 13:return ax(e,t,n);case 4:return Ic(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ms(t,null,i,n):an(e,t,i,n),t.child;case 11:return _0(e,t,t.type,t.pendingProps,n);case 7:return an(e,t,t.pendingProps,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ta(t,t.type,i.value),an(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ss(t),a=on(a),i=i(a),t.flags|=1,an(e,t,i,n),t.child;case 14:return v0(e,t,t.type,t.pendingProps,n);case 15:return nx(e,t,t.type,t.pendingProps,n);case 19:return sx(e,t,n);case 31:return jy(e,t,n);case 22:return ix(e,t,n,t.pendingProps);case 24:return Ss(t),i=on(Ye),e===null?(a=yp(),a===null&&(a=ye,s=Mp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},bp(t),Ta(t,Ye,a)):(e.lanes&n&&(Nh(e,t),Io(t,null,null,n),Po()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ta(t,Ye,i)):(i=s.cache,Ta(t,Ye,i),i!==a.cache&&Uh(t,[Ye],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function zi(e){e.flags|=4}function _f(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Dx())e.flags|=8192;else throw _s=kc,Ep}else e.flags&=-16777217}function T0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$x(t))if(Dx())e.flags|=8192;else throw _s=kc,Ep}function Pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?U_():536870912,e.lanes|=t,Ir|=t)}function ro(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ky(e,t,n){var i=t.pendingProps;switch(Sp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(Ye),Dr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fs(t)?zi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lf())),Ae(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(zi(t),s!==null?(Ae(t),T0(t,s)):(Ae(t),_f(t,a,null,i,n))):s?s!==e.memoizedState?(zi(t),Ae(t),T0(t,s)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&zi(t),Ae(t),_f(t,a,e,i,n)),null;case 27:if(zc(t),n=Ia.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ae(t),null}e=wi.current,Fs(t)?t0(t):(e=Kx(a,i,n),t.stateNode=e,zi(t))}return Ae(t),null;case 5:if(zc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ae(t),null}if(s=wi.current,Fs(t))t0(t);else{var r=au(Ia.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[sn]=t,s[Dn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(cn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&zi(t)}}return Ae(t),_f(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Ia.current,Fs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Yx(e.nodeValue,n)),e||qa(t,!0)}else e=au(e).createTextNode(i),e[sn]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fs(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[sn]=t}else xs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if(t.flags&128)throw Error(K(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[sn]=t}else xs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else a=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pl(t,t.updateQueue),Ae(t),null);case 4:return Dr(),e===null&&qp(t.stateNode.containerInfo),Ae(t),null;case 10:return ta(t.type),Ae(t),null;case 19:if(en(Ge),i=t.memoizedState,i===null)return Ae(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)ro(i,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Yc(e),s!==null){for(t.flags|=128,ro(i,!1),e=s.updateQueue,t.updateQueue=e,Pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ov(n,e),n=n.sibling;return be(Ge,Ge.current&1|2),ie&&Yi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Xn()>Jc&&(t.flags|=128,a=!0,ro(i,!1),t.lanes=4194304)}else{if(!a)if(e=Yc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pl(t,e),ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ie)return Ae(t),null}else 2*Xn()-i.renderingStartTime>Jc&&n!==536870912&&(t.flags|=128,a=!0,ro(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Xn(),e.sibling=null,n=Ge.current,be(Ge,a?n&1|2:n&1),ie&&Yi(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return Bn(t),Tp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(gs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Ye),Ae(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function Qy(e,t){switch(Sp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Ye),Dr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(K(340));xs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));xs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(Ge),null;case 4:return Dr(),null;case 10:return ta(t.type),null;case 22:case 23:return Bn(t),Tp(),e!==null&&en(gs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Ye),null;case 25:return null;default:return null}}function ox(e,t){switch(Sp(t),t.tag){case 3:ta(Ye),Dr();break;case 26:case 27:case 5:zc(t);break;case 4:Dr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:en(Ge);break;case 10:ta(t.type);break;case 22:case 23:Bn(t),Tp(),e!==null&&en(gs);break;case 24:ta(Ye)}}function _l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){de(t,t.return,o)}}function ja(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){de(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){de(t,t.return,h)}}function lx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_v(t,n)}catch(i){de(e,e.return,i)}}}function cx(e,t,n){n.props=Es(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function Bo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){de(e,t,a)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function ux(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function vf(e,t,n){try{var i=e.stateNode;xE(i,e.type,n,t),i[Dn]=t}catch(a){de(e,e.return,a)}}function fx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(i!==4&&(i===27&&$a(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kh(e,t,n),e=e.sibling;e!==null;)kh(e,t,n),e=e.sibling}function Qc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&$a(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function hx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);cn(t,i,n),t[sn]=e,t[Dn]=n}catch(s){de(e,e.return,s)}}var qi=!1,We=!1,Sf=!1,A0=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Jy(e,t){if(e=e.containerInfo,Qh=lu,e=$_(e),mp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,p=e,u=null;e:for(;;){for(var d;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jh={focusedElem:e,selectionRange:n},lu=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var x=Es(n.type,a);e=i.getSnapshotBeforeUpdate(x,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){de(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)td(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":td(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function dx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(e,n),i&4&&_l(5,n);break;case 1:if(Fi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){de(n,n.return,r)}else{var a=Es(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){de(n,n.return,r)}}i&64&&lx(n),i&512&&Bo(n,n.return);break;case 3:if(Fi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_v(e,t)}catch(r){de(n,n.return,r)}}break;case 27:t===null&&i&4&&hx(n);case 26:case 5:Fi(e,n),t===null&&i&4&&ux(n),i&512&&Bo(n,n.return);break;case 12:Fi(e,n);break;case 31:Fi(e,n),i&4&&gx(e,n);break;case 13:Fi(e,n),i&4&&_x(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=oE.bind(null,n),RE(e,n))));break;case 22:if(i=n.memoizedState!==null||qi,!i){t=t!==null&&t.memoizedState!==null||We,a=qi;var s=We;qi=i,(We=t)&&!s?Wi(e,n,(n.subtreeFlags&8772)!==0):Fi(e,n),qi=a,We=s}break;case 30:break;default:Fi(e,n)}}function px(e){var t=e.alternate;t!==null&&(e.alternate=null,px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,An=!1;function Bi(e,t,n){for(n=n.child;n!==null;)mx(e,t,n),n=n.sibling}function mx(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 26:We||Ai(n,t),Bi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:We||Ai(n,t);var i=Ue,a=An;$a(n.type)&&(Ue=n.stateNode,An=!1),Bi(e,t,n),Vo(n.stateNode),Ue=i,An=a;break;case 5:We||Ai(n,t);case 6:if(i=Ue,a=An,Ue=null,Bi(e,t,n),Ue=i,An=a,Ue!==null)if(An)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(s){de(n,t,s)}else try{Ue.removeChild(n.stateNode)}catch(s){de(n,t,s)}break;case 18:Ue!==null&&(An?(e=Ue,F0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Hr(e)):F0(Ue,n.stateNode));break;case 4:i=Ue,a=An,Ue=n.stateNode.containerInfo,An=!0,Bi(e,t,n),Ue=i,An=a;break;case 0:case 11:case 14:case 15:ja(2,n,t),We||ja(4,n,t),Bi(e,t,n);break;case 1:We||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cx(n,t,i)),Bi(e,t,n);break;case 21:Bi(e,t,n);break;case 22:We=(i=We)||n.memoizedState!==null,Bi(e,t,n),We=i;break;default:Bi(e,t,n)}}function gx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hr(e)}catch(n){de(t,t.return,n)}}}function _x(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(n){de(t,t.return,n)}}function $y(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new A0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new A0),t;default:throw Error(K(435,e.tag))}}function Il(e,t){var n=$y(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=lE.bind(null,e,i);i.then(a,a)}})}function bn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if($a(o.type)){Ue=o.stateNode,An=!1;break t}break;case 5:Ue=o.stateNode,An=!1;break t;case 3:case 4:Ue=o.stateNode.containerInfo,An=!0;break t}o=o.return}if(Ue===null)throw Error(K(160));mx(s,r,a),Ue=null,An=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vx(t,e),t=t.sibling}var mi=null;function vx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),Tn(e),i&4&&(ja(3,e,e.return),_l(3,e),ja(5,e,e.return));break;case 1:bn(t,e),Tn(e),i&512&&(We||n===null||Ai(n,n.return)),i&64&&qi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=mi;if(bn(t,e),Tn(e),i&512&&(We||n===null||Ai(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[dl]||s[sn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),cn(s,i,n),s[sn]=e,tn(s),i=s;break t;case"link":var r=Y0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Y0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;default:throw Error(K(468,i))}s[sn]=e,tn(s),i=s}e.stateNode=i}else q0(a,e.type,e.stateNode);else e.stateNode=W0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?q0(a,e.type,e.stateNode):W0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&vf(e,e.memoizedProps,n.memoizedProps)}break;case 27:bn(t,e),Tn(e),i&512&&(We||n===null||Ai(n,n.return)),n!==null&&i&4&&vf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bn(t,e),Tn(e),i&512&&(We||n===null||Ai(n,n.return)),e.flags&32){a=e.stateNode;try{Lr(a,"")}catch(x){de(e,e.return,x)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,vf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Sf=!0);break;case 6:if(bn(t,e),Tn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(x){de(e,e.return,x)}}break;case 3:if(Ac=null,a=mi,mi=su(t.containerInfo),bn(t,e),mi=a,Tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){de(e,e.return,x)}Sf&&(Sf=!1,xx(e));break;case 4:i=mi,mi=su(e.stateNode.containerInfo),bn(t,e),Tn(e),mi=i;break;case 12:bn(t,e),Tn(e);break;case 31:bn(t,e),Tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Il(e,i)));break;case 13:bn(t,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zu=Xn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Il(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=qi,h=We;if(qi=c||a,We=h||l,bn(t,e),We=h,qi=c,Tn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||qi||We||ls(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(x){de(l,l.return,x)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(x){de(l,l.return,x)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;a?H0(d,!0):H0(l.stateNode,!1)}catch(x){de(l,l.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Il(e,n))));break;case 19:bn(t,e),Tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Il(e,i)));break;case 30:break;case 21:break;default:bn(t,e),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(fx(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,s=xf(e);Qc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Lr(r,""),n.flags&=-33);var o=xf(e);Qc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=xf(e);kh(e,c,l);break;default:throw Error(K(161))}}catch(h){de(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dx(e,t.alternate,t),t=t.sibling}function ls(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),ls(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&cx(t,t.return,n),ls(t);break;case 27:Vo(t.stateNode);case 26:case 5:Ai(t,t.return),ls(t);break;case 22:t.memoizedState===null&&ls(t);break;case 30:ls(t);break;default:ls(t)}e=e.sibling}}function Wi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Wi(a,s,n),_l(4,s);break;case 1:if(Wi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){de(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)gv(l[a],o)}catch(c){de(i,i.return,c)}}n&&r&64&&lx(s),Bo(s,s.return);break;case 27:hx(s);case 26:case 5:Wi(a,s,n),n&&i===null&&r&4&&ux(s),Bo(s,s.return);break;case 12:Wi(a,s,n);break;case 31:Wi(a,s,n),n&&r&4&&gx(a,s);break;case 13:Wi(a,s,n),n&&r&4&&_x(a,s);break;case 22:s.memoizedState===null&&Wi(a,s,n),Bo(s,s.return);break;case 30:break;default:Wi(a,s,n)}t=t.sibling}}function Gp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ml(n))}function Vp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e))}function fi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sx(e,t,n,i),t=t.sibling}function Sx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:fi(e,t,n,i),a&2048&&_l(9,t);break;case 1:fi(e,t,n,i);break;case 3:fi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e)));break;case 12:if(a&2048){fi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){de(t,t.return,l)}}else fi(e,t,n,i);break;case 31:fi(e,t,n,i);break;case 13:fi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?fi(e,t,n,i):Fo(e,t):s._visibility&2?fi(e,t,n,i):(s._visibility|=2,or(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Gp(r,t);break;case 24:fi(e,t,n,i),a&2048&&Vp(t.alternate,t);break;default:fi(e,t,n,i)}}function or(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:or(s,r,o,l,a),_l(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?or(s,r,o,l,a):Fo(s,r):(h._visibility|=2,or(s,r,o,l,a)),a&&c&2048&&Gp(r.alternate,r);break;case 24:or(s,r,o,l,a),a&&c&2048&&Vp(r.alternate,r);break;default:or(s,r,o,l,a)}t=t.sibling}}function Fo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Fo(n,i),a&2048&&Gp(i.alternate,i);break;case 24:Fo(n,i),a&2048&&Vp(i.alternate,i);break;default:Fo(n,i)}t=t.sibling}}var To=8192;function Hs(e,t,n){if(e.subtreeFlags&To)for(e=e.child;e!==null;)Mx(e,t,n),e=e.sibling}function Mx(e,t,n){switch(e.tag){case 26:Hs(e,t,n),e.flags&To&&e.memoizedState!==null&&FE(n,mi,e.memoizedState,e.memoizedProps);break;case 5:Hs(e,t,n);break;case 3:case 4:var i=mi;mi=su(e.stateNode.containerInfo),Hs(e,t,n),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=To,To=16777216,Hs(e,t,n),To=i):Hs(e,t,n));break;default:Hs(e,t,n)}}function yx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,bx(i,e)}yx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ex(e),e=e.sibling}function Ex(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&ja(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bc(e)):oo(e);break;default:oo(e)}}function bc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,bx(i,e)}yx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),bc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,bc(t));break;default:bc(t)}e=e.sibling}}function bx(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var a=i.sibling,s=i.return;if(px(i),i===n){$e=null;break t}if(a!==null){a.return=s,$e=a;break t}$e=s}}}var tE={getCacheForType:function(e){var t=on(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return on(Ye).controller.signal}},eE=typeof WeakMap=="function"?WeakMap:Map,oe=0,ye=null,Jt=null,te=0,fe=0,zn=null,La=!1,Kr=!1,Xp=!1,ca=0,Ie=0,Za=0,vs=0,kp=0,Vn=0,Ir=0,Ho=null,Rn=null,Wh=!1,zu=0,Tx=0,Jc=1/0,$c=null,Ha=null,je=0,Ga=null,zr=null,ea=0,Yh=0,qh=null,Ax=null,Go=0,jh=null;function Yn(){return oe&2&&te!==0?te&-te:Pt.T!==null?Yp():P_()}function Rx(){if(Vn===0)if(!(te&536870912)||ie){var e=Cl;Cl<<=1,!(Cl&3932160)&&(Cl=262144),Vn=e}else Vn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Vn}function Cn(e,t,n){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Na(e,te,Vn,!1)),hl(e,n),(!(oe&2)||e!==ye)&&(e===ye&&(!(oe&2)&&(vs|=n),Ie===4&&Na(e,te,Vn,!1)),Oi(e))}function Cx(e,t,n){if(oe&6)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fl(e,t),a=i?aE(e,t):Mf(e,t,!0),s=i;do{if(a===0){Kr&&!i&&Na(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!nE(n)){a=Mf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Ho;var l=o.current.memoizedState.isDehydrated;if(l&&(Br(o,r).flags|=256),r=Mf(o,r,!1),r!==2){if(Xp&&!l){o.errorRecoveryDisabledLanes|=s,vs|=s,a=4;break t}s=Rn,Rn=a,s!==null&&(Rn===null?Rn=s:Rn.push.apply(Rn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Br(e,0),Na(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:Na(i,t,Vn,!La);break t;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(a=zu+300-Xn(),10<a)){if(Na(i,t,Vn,!La),Au(i,0,!0)!==0)break t;ea=t,i.timeoutHandle=jx(R0.bind(null,i,n,Rn,$c,Wh,t,Vn,vs,Ir,La,s,"Throttled",-0,0),a);break t}R0(i,n,Rn,$c,Wh,t,Vn,vs,Ir,La,s,null,-0,0)}}break}while(!0);Oi(e)}function R0(e,t,n,i,a,s,r,o,l,c,h,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},Mx(t,s,p);var x=(s&62914560)===s?zu-Xn():(s&4194048)===s?Tx-Xn():0;if(x=HE(p,x),x!==null){ea=s,e.cancelPendingCommit=x(w0.bind(null,e,t,s,n,i,a,r,o,l,h,p,null,u,d)),Na(e,s,r,!c);return}}w0(e,t,s,n,i,a,r,o,l)}function nE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!qn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,n,i){t&=~kp,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Wn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&L_(e,n,t)}function Bu(){return oe&6?!0:(vl(0),!1)}function Wp(){if(Jt!==null){if(fe===0)var e=Jt.return;else e=Jt,Qi=Ds=null,Dp(e),Tr=null,Qo=0,e=Jt;for(;e!==null;)ox(e.alternate,e),e=e.return;Jt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,yE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ea=0,Wp(),ye=e,Jt=n=$i(e.current,null),te=t,fe=0,zn=null,La=!1,Kr=fl(e,t),Xp=!1,Ir=Vn=kp=vs=Za=Ie=0,Rn=Ho=null,Wh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Wn(i),s=1<<a;t|=e[a],i&=~s}return ca=t,Du(),n}function wx(e,t){Xt=null,Pt.H=$o,t===Zr||t===Lu?(t=s0(),fe=3):t===Ep?(t=s0(),fe=4):fe=t===Fp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zn=t,Jt===null&&(Ie=1,Zc(e,ai(t,e.current)))}function Dx(){var e=jn.current;return e===null?!0:(te&4194048)===te?oi===null:(te&62914560)===te||te&536870912?e===oi:!1}function Ux(){var e=Pt.H;return Pt.H=$o,e===null?$o:e}function Lx(){var e=Pt.A;return Pt.A=tE,e}function tu(){Ie=4,La||(te&4194048)!==te&&jn.current!==null||(Kr=!0),!(Za&134217727)&&!(vs&134217727)||ye===null||Na(ye,te,Vn,!1)}function Mf(e,t,n){var i=oe;oe|=2;var a=Ux(),s=Lx();(ye!==e||te!==t)&&($c=null,Br(e,t)),t=!1;var r=Ie;t:do try{if(fe!==0&&Jt!==null){var o=Jt,l=zn;switch(fe){case 8:Wp(),r=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(t=!0);var c=fe;if(fe=0,zn=null,Sr(e,o,l,c),n&&Kr){r=0;break t}break;default:c=fe,fe=0,zn=null,Sr(e,o,l,c)}}iE(),r=Ie;break}catch(h){wx(e,h)}while(!0);return t&&e.shellSuspendCounter++,Qi=Ds=null,oe=i,Pt.H=a,Pt.A=s,Jt===null&&(ye=null,te=0,Du()),r}function iE(){for(;Jt!==null;)Nx(Jt)}function aE(e,t){var n=oe;oe|=2;var i=Ux(),a=Lx();ye!==e||te!==t?($c=null,Jc=Xn()+500,Br(e,t)):Kr=fl(e,t);t:do try{if(fe!==0&&Jt!==null){t=Jt;var s=zn;e:switch(fe){case 1:fe=0,zn=null,Sr(e,t,s,1);break;case 2:case 9:if(a0(s)){fe=0,zn=null,C0(t);break}t=function(){fe!==2&&fe!==9||ye!==e||(fe=7),Oi(e)},s.then(t,t);break t;case 3:fe=7;break t;case 4:fe=5;break t;case 7:a0(s)?(fe=0,zn=null,C0(t)):(fe=0,zn=null,Sr(e,t,s,7));break;case 5:var r=null;switch(Jt.tag){case 26:r=Jt.memoizedState;case 5:case 27:var o=Jt;if(r?$x(r):o.stateNode.complete){fe=0,zn=null;var l=o.sibling;if(l!==null)Jt=l;else{var c=o.return;c!==null?(Jt=c,Fu(c)):Jt=null}break e}}fe=0,zn=null,Sr(e,t,s,5);break;case 6:fe=0,zn=null,Sr(e,t,s,6);break;case 8:Wp(),Ie=6;break t;default:throw Error(K(462))}}sE();break}catch(h){wx(e,h)}while(!0);return Qi=Ds=null,Pt.H=i,Pt.A=a,oe=n,Jt!==null?0:(ye=null,te=0,Du(),Ie)}function sE(){for(;Jt!==null&&!CM();)Nx(Jt)}function Nx(e){var t=rx(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?Fu(e):Jt=t}function C0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=M0(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=M0(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:Dp(t);default:ox(n,t),t=Jt=ov(t,ca),t=rx(n,t,ca)}e.memoizedProps=e.pendingProps,t===null?Fu(e):Jt=t}function Sr(e,t,n,i){Qi=Ds=null,Dp(t),Tr=null,Qo=0;var a=t.return;try{if(qy(e,a,t,n,te)){Ie=1,Zc(e,ai(n,e.current)),Jt=null;return}}catch(s){if(a!==null)throw Jt=a,s;Ie=1,Zc(e,ai(n,e.current)),Jt=null;return}t.flags&32768?(ie||i===1?e=!0:Kr||te&536870912?e=!1:(La=e=!0,(i===2||i===9||i===3||i===6)&&(i=jn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ox(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Ox(t,La);return}e=t.return;var n=Ky(t.alternate,t,ca);if(n!==null){Jt=n;return}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);Ie===0&&(Ie=5)}function Ox(e,t){do{var n=Qy(e.alternate,e);if(n!==null){n.flags&=32767,Jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Jt=e;return}Jt=e=n}while(e!==null);Ie=6,Jt=null}function w0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Hu();while(je!==0);if(oe&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(s=t.lanes|t.childLanes,s|=gp,BM(e,n,s,r,o,l),e===ye&&(Jt=ye=null,te=0),zr=t,Ga=e,ea=n,Yh=s,qh=a,Ax=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,cE(Bc,function(){return Fx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Pt.T,Pt.T=null,a=le.p,le.p=2,r=oe,oe|=4;try{Jy(e,t,n)}finally{oe=r,le.p=a,Pt.T=i}}je=1,Px(),Ix(),zx()}}function Px(){if(je===1){je=0;var e=Ga,t=zr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Pt.T,Pt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{vx(t,e);var s=Jh,r=$_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&J_(o.ownerDocument.documentElement,o)){if(l!==null&&mp(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),x=o.textContent.length,E=Math.min(l.start,x),g=l.end===void 0?E:Math.min(l.end,x);!d.extend&&E>g&&(r=g,g=E,E=r);var f=Qm(o,E),m=Qm(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var _=p.createRange();_.setStart(f.node,f.offset),d.removeAllRanges(),E>g?(d.addRange(_),d.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),d.addRange(_))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}lu=!!Qh,Jh=Qh=null}finally{oe=a,le.p=i,Pt.T=n}}e.current=t,je=2}}function Ix(){if(je===2){je=0;var e=Ga,t=zr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Pt.T,Pt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{dx(e,t.alternate,t)}finally{oe=a,le.p=i,Pt.T=n}}je=3}}function zx(){if(je===4||je===3){je=0,wM();var e=Ga,t=zr,n=ea,i=Ax;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,zr=Ga=null,Bx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ha=null),lp(n),t=t.stateNode,kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,a=le.p,le.p=2,Pt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Pt.T=t,le.p=a}}ea&3&&Hu(),Oi(e),a=e.pendingLanes,n&261930&&a&42?e===jh?Go++:(Go=0,jh=e):Go=0,vl(0)}}function Bx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ml(t)))}function Hu(){return Px(),Ix(),zx(),Fx()}function Fx(){if(je!==5)return!1;var e=Ga,t=Yh;Yh=0;var n=lp(ea),i=Pt.T,a=le.p;try{le.p=32>n?32:n,Pt.T=null,n=qh,qh=null;var s=Ga,r=ea;if(je=0,zr=Ga=null,ea=0,oe&6)throw Error(K(331));var o=oe;if(oe|=4,Ex(s.current),Sx(s,s.current,r,n),oe=o,vl(0,!1),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(ul,s)}catch{}return!0}finally{le.p=a,Pt.T=i,Bx(e,t)}}function D0(e,t,n){t=ai(n,t),t=Gh(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(hl(e,2),Oi(e))}function de(e,t,n){if(e.tag===3)D0(e,e,n);else for(;t!==null;){if(t.tag===3){D0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ha===null||!Ha.has(i))){e=ai(n,e),n=tx(2),i=Fa(t,n,2),i!==null&&(ex(n,i,t,e),hl(i,2),Oi(i));break}}t=t.return}}function yf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new eE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Xp=!0,a.add(n),e=rE.bind(null,e,t,n),t.then(e,e))}function rE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(te&n)===n&&(Ie===4||Ie===3&&(te&62914560)===te&&300>Xn()-zu?!(oe&2)&&Br(e,0):kp|=n,Ir===te&&(Ir=0)),Oi(e)}function Hx(e,t){t===0&&(t=U_()),e=ws(e,t),e!==null&&(hl(e,t),Oi(e))}function oE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hx(e,n)}function lE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),Hx(e,n)}function cE(e,t){return rp(e,t)}var eu=null,lr=null,Zh=!1,nu=!1,Ef=!1,Oa=0;function Oi(e){e!==lr&&e.next===null&&(lr===null?eu=lr=e:lr=lr.next=e),nu=!0,Zh||(Zh=!0,fE())}function vl(e,t){if(!Ef&&nu){Ef=!0;do for(var n=!1,i=eu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Wn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,U0(i,s))}else s=te,s=Au(i,i===ye?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||fl(i,s)||(n=!0,U0(i,s));i=i.next}while(n);Ef=!1}}function uE(){Gx()}function Gx(){nu=Zh=!1;var e=0;Oa!==0&&ME()&&(e=Oa);for(var t=Xn(),n=null,i=eu;i!==null;){var a=i.next,s=Vx(i,t);s===0?(i.next=null,n===null?eu=a:n.next=a,a===null&&(lr=n)):(n=i,(e!==0||s&3)&&(nu=!0)),i=a}je!==0&&je!==5||vl(e),Oa!==0&&(Oa=0)}function Vx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Wn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=zM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=ye,n=te,n=Au(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ku(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ku(i),lp(n)){case 2:case 8:n=w_;break;case 32:n=Bc;break;case 268435456:n=D_;break;default:n=Bc}return i=Xx.bind(null,e),n=rp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ku(i),e.callbackPriority=2,e.callbackNode=null,2}function Xx(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var i=te;return i=Au(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Cx(e,i,t),Vx(e,Xn()),e.callbackNode!=null&&e.callbackNode===n?Xx.bind(null,e):null)}function U0(e,t){if(Hu())return null;Cx(e,t,!0)}function fE(){EE(function(){oe&6?rp(C_,uE):Gx()})}function Yp(){if(Oa===0){var e=Nr;e===0&&(e=Rl,Rl<<=1,!(Rl&261888)&&(Rl=256)),Oa=e}return Oa}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mc(""+e)}function N0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=L0((a[Dn]||null).action),r=i.submitter;r&&(t=(t=r[Dn]||null)?L0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Ru("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Oa!==0){var l=r?N0(a,r):new FormData(a);Fh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?N0(a,r):new FormData(a),Fh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var bf=0;bf<Rh.length;bf++){var Tf=Rh[bf],dE=Tf.toLowerCase(),pE=Tf[0].toUpperCase()+Tf.slice(1);xi(dE,"on"+pE)}xi(ev,"onAnimationEnd");xi(nv,"onAnimationIteration");xi(iv,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(Dy,"onTransitionRun");xi(Uy,"onTransitionStart");xi(Ly,"onTransitionCancel");xi(av,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function kx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Hc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Hc(h)}a.currentTarget=null,s=l}}}}function Qt(e,t){var n=t[xh];n===void 0&&(n=t[xh]=new Set);var i=e+"__bubble";n.has(i)||(Wx(t,e,2,!1),n.add(i))}function Af(e,t,n){var i=0;t&&(i|=4),Wx(n,e,i,t)}var zl="_reactListening"+Math.random().toString(36).slice(2);function qp(e){if(!e[zl]){e[zl]=!0,I_.forEach(function(n){n!=="selectionchange"&&(mE.has(n)||Af(n,!1,e),Af(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zl]||(t[zl]=!0,Af("selectionchange",!1,t))}}function Wx(e,t,n,i){switch(aS(t)){case 2:var a=XE;break;case 8:a=kE;break;default:a=Qp}n=a.bind(null,t,n,e),a=void 0,!bh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=fr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}k_(function(){var c=s,h=fp(n),p=[];t:{var u=sv.get(e);if(u!==void 0){var d=Ru,x=e;switch(e){case"keypress":if(_c(n)===0)break t;case"keydown":case"keyup":d=ly;break;case"focusin":x="focus",d=ef;break;case"focusout":x="blur",d=ef;break;case"beforeblur":case"afterblur":d=ef;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=KM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=fy;break;case ev:case nv:case iv:d=$M;break;case av:d=dy;break;case"scroll":case"scrollend":d=jM;break;case"wheel":d=my;break;case"copy":case"cut":case"paste":d=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Xm;break;case"toggle":case"beforetoggle":d=_y}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){var S=m;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||f===null||(S=Yo(m,f),S!=null&&E.push(el(m,S,_))),g)break;m=m.return}0<E.length&&(u=new d(u,x,null,n,h),p.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Eh&&(x=n.relatedTarget||n.fromElement)&&(fr(x)||x[Yr]))break t;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(x=n.relatedTarget||n.toElement,d=c,x=x?fr(x):null,x!==null&&(g=cl(x),E=x.tag,x!==g||E!==5&&E!==27&&E!==6)&&(x=null)):(d=null,x=c),d!==x)){if(E=Gm,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Xm,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=d==null?u:Eo(d),_=x==null?u:Eo(x),u=new E(S,m+"leave",d,n,h),u.target=g,u.relatedTarget=_,S=null,fr(h)===c&&(E=new E(f,m+"enter",x,n,h),E.target=_,E.relatedTarget=g,S=E),g=S,d&&x)e:{for(E=gE,f=d,m=x,_=0,S=f;S;S=E(S))_++;S=0;for(var C=m;C;C=E(C))S++;for(;0<_-S;)f=E(f),_--;for(;0<S-_;)m=E(m),S--;for(;_--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;d!==null&&O0(p,u,d,E,!1),x!==null&&g!==null&&O0(p,g,x,E,!0)}}t:{if(u=c?Eo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var b=qm;else if(Ym(u))if(K_)b=Ry;else{b=Ty;var R=by}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&up(c.elementType)&&(b=qm):b=Ay;if(b&&(b=b(e,c))){Z_(p,b,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&yh(u,"number",u.value)}switch(R=c?Eo(c):window,e){case"focusin":(Ym(R)||R.contentEditable==="true")&&(pr=R,Th=c,Lo=null);break;case"focusout":Lo=Th=pr=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,Jm(p,n,h);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":Jm(p,n,h)}var v;if(pp)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else dr?q_(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Y_&&n.locale!=="ko"&&(dr||T!=="onCompositionStart"?T==="onCompositionEnd"&&dr&&(v=W_()):(Ua=h,hp="value"in Ua?Ua.value:Ua.textContent,dr=!0)),R=iu(c,T),0<R.length&&(T=new Vm(T,e,null,n,h),p.push({event:T,listeners:R}),v?T.data=v:(v=j_(n),v!==null&&(T.data=v)))),(v=xy?Sy(e,n):My(e,n))&&(T=iu(c,"onBeforeInput"),0<T.length&&(R=new Vm("onBeforeInput","beforeinput",null,n,h),p.push({event:R,listeners:T}),R.data=v)),hE(p,e,c,n,h)}kx(p,t)})}function el(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Yo(e,n),a!=null&&i.unshift(el(e,a,s)),a=Yo(e,t),a!=null&&i.push(el(e,a,s))),e.tag===3)return i;e=e.return}return[]}function gE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Yo(n,s),c!=null&&r.unshift(el(n,c,l))):a||(c=Yo(n,s),c!=null&&r.push(el(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var _E=/\r\n?/g,vE=/\u0000|\uFFFD/g;function P0(e){return(typeof e=="string"?e:""+e).replace(_E,`
`).replace(vE,"")}function Yx(e,t){return t=P0(t),P0(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Lr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Lr(e,""+i);break;case"className":Dl(e,"class",i);break;case"tabIndex":Dl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(e,n,i);break;case"style":X_(e,i,s);break;case"data":if(t!=="object"){Dl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=mc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ki);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=mc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Qt("beforetoggle",e),Qt("toggle",e),pc(e,"popover",i);break;case"xlinkActuate":Ii(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ii(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ii(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ii(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ii(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ii(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ii(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":pc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=YM.get(n)||n,pc(e,n,i))}}function Kh(e,t,n,i,a,s){switch(n){case"style":X_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Lr(e,i):(typeof i=="number"||typeof i=="bigint")&&Lr(e,""+i);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!z_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Dn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):pc(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",e),Qt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":Qt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:ge(e,t,i,h,n,null)}}H_(e,s,o,l,c,r,a,!1);return;case"select":Qt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?yr(e,!!i,t,!1):n!=null&&yr(e,!!i,n,!0);return;case"textarea":Qt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ge(e,t,r,o,n,null)}V_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":Qt("beforetoggle",e),Qt("toggle",e),Qt("cancel",e),Qt("close",e);break;case"iframe":case"object":Qt("load",e);break;case"video":case"audio":for(i=0;i<tl.length;i++)Qt(tl[i],e);break;case"image":Qt("error",e),Qt("load",e);break;case"details":Qt("toggle",e);break;case"embed":case"source":case"link":Qt("error",e),Qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,c,i,n,null)}return;default:if(up(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Kh(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function xE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ge(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":s=d;break;case"name":a=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,t));break;default:d!==p&&ge(e,t,u,d,i,p)}}Mh(e,r,o,l,c,h,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=d,u!=null?yr(e,!!n,u,!1):!!i!=!!n&&(t!=null?yr(e,!!n,t,!0):yr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==s&&ge(e,t,r,a,i,s)}G_(e,u,d);return;case"option":for(var x in n)if(u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ge(e,t,x,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ge(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ge(e,t,E,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,t));break;default:ge(e,t,c,u,i,d)}return;default:if(up(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Kh(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||Kh(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ge(e,t,p,u,i,d)}function I0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&I0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&I0(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qh=null,Jh=null;function au(e){return e.nodeType===9?e:e.ownerDocument}function z0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $h(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cf=null;function ME(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var jx=typeof setTimeout=="function"?setTimeout:void 0,yE=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(e){return B0.resolve(null).then(e).catch(bE)}:jx;function bE(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function F0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Hr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Vo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[dl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Vo(e.ownerDocument.body);n=a}while(n);Hr(t)}function H0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function td(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":td(n),cp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function TE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function AE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Zx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=li(e.nextSibling),e===null))return null;return e}function ed(e){return e.data==="$?"||e.data==="$~"}function nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var id=null;function G0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return li(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function V0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kx(e,t,n){switch(t=au(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function Vo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cp(e)}var ui=new Map,X0=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=le.d;le.d={f:CE,r:wE,D:DE,C:UE,L:LE,m:NE,X:PE,S:OE,M:IE};function CE(){var e=ha.f(),t=Bu();return e||t}function wE(e){var t=qr(e);t!==null&&t.tag===5&&t.type==="form"?Xv(t):ha.r(e)}var Qr=typeof document>"u"?null:document;function Qx(e,t,n){var i=Qr;if(i&&typeof t=="string"&&t){var a=ii(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),X0.has(a)||(X0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),cn(t,"link",e),tn(t),i.head.appendChild(t)))}}function DE(e){ha.D(e),Qx("dns-prefetch",e,null)}function UE(e,t){ha.C(e,t),Qx("preconnect",e,t)}function LE(e,t,n){ha.L(e,t,n);var i=Qr;if(i&&e&&t){var a='link[rel="preload"][as="'+ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ii(n.imageSizes)+'"]')):a+='[href="'+ii(e)+'"]';var s=a;switch(t){case"style":s=Fr(e);break;case"script":s=Jr(e)}ui.has(s)||(e=we({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ui.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(xl(s))||t==="script"&&i.querySelector(Sl(s))||(t=i.createElement("link"),cn(t,"link",e),tn(t),i.head.appendChild(t)))}}function NE(e,t){ha.m(e,t);var n=Qr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ii(i)+'"][href="'+ii(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Jr(e)}if(!ui.has(s)&&(e=we({rel:"modulepreload",href:e},t),ui.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(s)))return}i=n.createElement("link"),cn(i,"link",e),tn(i),n.head.appendChild(i)}}}function OE(e,t,n){ha.S(e,t,n);var i=Qr;if(i&&e){var a=Mr(i).hoistableStyles,s=Fr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xl(s)))o.loading=5;else{e=we({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ui.get(s))&&jp(e,n);var l=r=i.createElement("link");tn(l),cn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Tc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function PE(e,t){ha.X(e,t);var n=Qr;if(n&&e){var i=Mr(n).hoistableScripts,a=Jr(e),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(e=we({src:e,async:!0},t),(t=ui.get(a))&&Zp(e,t),s=n.createElement("script"),tn(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function IE(e,t){ha.M(e,t);var n=Qr;if(n&&e){var i=Mr(n).hoistableScripts,a=Jr(e),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(e=we({src:e,async:!0,type:"module"},t),(t=ui.get(a))&&Zp(e,t),s=n.createElement("script"),tn(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function k0(e,t,n,i){var a=(a=Ia.current)?su(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fr(n.href),n=Mr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fr(n.href);var s=Mr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(xl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ui.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ui.set(e,n),s||zE(a,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Jr(n),n=Mr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function Fr(e){return'href="'+ii(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Jx(e){return we({},e,{"data-precedence":e.precedence,precedence:null})}function zE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),tn(t),e.head.appendChild(t))}function Jr(e){return'[src="'+ii(e)+'"]'}function Sl(e){return"script[async]"+e}function W0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ii(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var a=we({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),cn(i,"style",a),Tc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Fr(n.href);var s=e.querySelector(xl(a));if(s)return t.state.loading|=4,t.instance=s,tn(s),s;i=Jx(n),(a=ui.get(a))&&jp(i,a),s=(e.ownerDocument||e).createElement("link"),tn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),t.state.loading|=4,Tc(s,n.precedence,e),t.instance=s;case"script":return s=Jr(n.src),(a=e.querySelector(Sl(s)))?(t.instance=a,tn(a),a):(i=n,(a=ui.get(s))&&(i=we({},n),Zp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),tn(a),cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Tc(i,n.precedence,e));return t.instance}function Tc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ac=null;function Y0(e,t,n){if(Ac===null){var i=new Map,a=Ac=new Map;a.set(n,i)}else a=Ac,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[dl]||s[sn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function q0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function BE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $x(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function FE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Fr(i.href),s=t.querySelector(xl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ru.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,tn(s);return}s=t.ownerDocument||t,i=Jx(i),(a=ui.get(a))&&jp(i,a),s=s.createElement("link"),tn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ru.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wf=0;function HE(e,t){return e.stylesheets&&e.count===0&&Rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&wf===0&&(wf=62500*SE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>wf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function Rc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(GE,e),ou=null,ru.call(e))}function GE(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var i=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=ru.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var nl={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:ps,_currentValue2:ps,_threadCount:0};function VE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function tS(e,t,n,i,a,s,r,o,l,c,h,p){return e=new VE(e,t,n,r,l,c,h,p,o),t=1,s===!0&&(t|=24),s=Hn(3,null,null,t),e.current=s,s.stateNode=e,t=Mp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},bp(s),e}function eS(e){return e?(e=_r,e):_r}function nS(e,t,n,i,a,s){a=eS(a),i.context===null?i.context=a:i.pendingContext=a,i=Ba(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Fa(e,i,t),n!==null&&(Cn(n,e,t),Oo(n,e,t))}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kp(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function iS(e){if(e.tag===13||e.tag===31){var t=ws(e,67108864);t!==null&&Cn(t,e,67108864),Kp(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var t=Yn();t=op(t);var n=ws(e,t);n!==null&&Cn(n,e,t),Kp(e,t)}}var lu=!0;function XE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=le.p;try{le.p=2,Qp(e,t,n,i)}finally{le.p=s,Pt.T=a}}function kE(e,t,n,i){var a=Pt.T;Pt.T=null;var s=le.p;try{le.p=8,Qp(e,t,n,i)}finally{le.p=s,Pt.T=a}}function Qp(e,t,n,i){if(lu){var a=ad(i);if(a===null)Rf(e,t,i,cu,n),K0(e,i);else if(YE(a,e,t,n,i))i.stopPropagation();else if(K0(e,i),t&4&&-1<WE.indexOf(e)){for(;a!==null;){var s=qr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=rs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Wn(r);o.entanglements[1]|=l,r&=~l}Oi(s),!(oe&6)&&(Jc=Xn()+500,vl(0))}}break;case 31:case 13:o=ws(s,2),o!==null&&Cn(o,s,2),Bu(),Kp(s,2)}if(s=ad(i),s===null&&Rf(e,t,i,cu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Rf(e,t,i,null,n)}}function ad(e){return e=fp(e),Jp(e)}var cu=null;function Jp(e){if(cu=null,e=fr(e),e!==null){var t=cl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E_(t),e!==null)return e;e=null}else if(n===31){if(e=b_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cu=e,null}function aS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DM()){case C_:return 2;case w_:return 8;case Bc:case UM:return 32;case D_:return 268435456;default:return 32}default:return 32}}var sd=!1,Va=null,Xa=null,ka=null,il=new Map,al=new Map,Ca=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(e,t){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(t.pointerId)}}function lo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=qr(t),t!==null&&iS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function YE(e,t,n,i,a){switch(t){case"focusin":return Va=lo(Va,e,t,n,i,a),!0;case"dragenter":return Xa=lo(Xa,e,t,n,i,a),!0;case"mouseover":return ka=lo(ka,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return il.set(s,lo(il.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,al.set(s,lo(al.get(s)||null,e,t,n,i,a)),!0}return!1}function sS(e){var t=fr(e.target);if(t!==null){var n=cl(t);if(n!==null){if(t=n.tag,t===13){if(t=E_(n),t!==null){e.blockedOn=t,Om(e.priority,function(){Z0(n)});return}}else if(t===31){if(t=b_(n),t!==null){e.blockedOn=t,Om(e.priority,function(){Z0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ad(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Eh=i,n.target.dispatchEvent(i),Eh=null}else return t=qr(n),t!==null&&iS(t),e.blockedOn=n,!1;t.shift()}return!0}function Q0(e,t,n){Cc(e)&&n.delete(t)}function qE(){sd=!1,Va!==null&&Cc(Va)&&(Va=null),Xa!==null&&Cc(Xa)&&(Xa=null),ka!==null&&Cc(ka)&&(ka=null),il.forEach(Q0),al.forEach(Q0)}function Bl(e,t){e.blockedOn===t&&(e.blockedOn=null,sd||(sd=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,qE)))}var Fl=null;function J0(e){Fl!==e&&(Fl=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){Fl===e&&(Fl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Jp(i||n)===null)continue;break}var s=qr(n);s!==null&&(e.splice(t,3),t-=3,Fh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Hr(e){function t(l){return Bl(l,e)}Va!==null&&Bl(Va,e),Xa!==null&&Bl(Xa,e),ka!==null&&Bl(ka,e),il.forEach(t),al.forEach(t);for(var n=0;n<Ca.length;n++){var i=Ca[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ca.length&&(n=Ca[0],n.blockedOn===null);)sS(n),n.blockedOn===null&&Ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Dn]||null;if(typeof s=="function")r||J0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Dn]||null)o=r.formAction;else if(Jp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),J0(n)}}}function rS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function $p(e){this._internalRoot=e}Gu.prototype.render=$p.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=Yn();nS(n,i,e,t,null,null)};Gu.prototype.unmount=$p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nS(e.current,2,null,e,null,null),Bu(),t[Yr]=null}};function Gu(e){this._internalRoot=e}Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=P_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ca.length&&t!==0&&t<Ca[n].priority;n++);Ca.splice(n,0,e),n===0&&sS(e)}};var $0=M_.version;if($0!=="19.2.5")throw Error(K(527,$0,"19.2.5"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=EM(t),e=e!==null?T_(e):null,e=e===null?null:e.stateNode,e};var jE={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{ul=Hl.inject(jE),kn=Hl}catch{}}bu.createRoot=function(e,t){if(!y_(e))throw Error(K(299));var n=!1,i="",a=Qv,s=Jv,r=$v;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=tS(e,1,!1,null,null,n,i,null,a,s,r,rS),e[Yr]=t.current,qp(e),new $p(t)};bu.hydrateRoot=function(e,t,n){if(!y_(e))throw Error(K(299));var i=!1,a="",s=Qv,r=Jv,o=$v,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=tS(e,1,!0,t,n??null,i,a,l,s,r,o,rS),t.context=eS(null),n=t.current,i=Yn(),i=op(i),a=Ba(i),a.callback=null,Fa(n,a,i),n=i,t.current.lanes=n,hl(t,n),Oi(t),e[Yr]=t.current,qp(e),new Gu(t)};bu.version="19.2.5";function oS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oS)}catch(e){console.error(e)}}oS(),m_.exports=bu;var ZE=m_.exports;const KE=JS(ZE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="184",QE=0,tg=1,JE=2,wc=1,$E=2,Ao=3,Ka=0,wn=1,ji=2,na=0,Cr=1,uu=2,eg=3,ng=4,tb=5,us=100,eb=101,nb=102,ib=103,ab=104,sb=200,rb=201,ob=202,lb=203,rd=204,od=205,cb=206,ub=207,fb=208,hb=209,db=210,pb=211,mb=212,gb=213,_b=214,ld=0,cd=1,ud=2,Gr=3,fd=4,hd=5,dd=6,pd=7,lS=0,vb=1,xb=2,Di=0,cS=1,uS=2,fS=3,hS=4,dS=5,pS=6,mS=7,gS=300,bs=301,Vr=302,Df=303,Uf=304,Vu=306,md=1e3,Ji=1001,gd=1002,ln=1003,Sb=1004,Gl=1005,gn=1006,Lf=1007,hs=1008,Gn=1009,_S=1010,vS=1011,sl=1012,em=1013,Li=1014,Ri=1015,ua=1016,nm=1017,im=1018,rl=1020,xS=35902,SS=35899,MS=1021,yS=1022,_i=1023,fa=1026,ds=1027,ES=1028,am=1029,Ts=1030,sm=1031,rm=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,_d=35840,vd=35841,xd=35842,Sd=35843,Md=36196,yd=37492,Ed=37496,bd=37488,Td=37489,fu=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,Id=37817,zd=37818,Bd=37819,Fd=37820,Hd=37821,Gd=36492,Vd=36494,Xd=36495,kd=36283,Wd=36284,hu=36285,Yd=36286,Mb=3200,qd=0,yb=1,wa="",$n="srgb",du="srgb-linear",pu="linear",ue="srgb",Gs=7680,ig=519,Eb=512,bb=513,Tb=514,om=515,Ab=516,Rb=517,lm=518,Cb=519,jd=35044,ag="300 es",Ci=2e3,ol=2001;function wb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Db(){const e=mu("canvas");return e.style.display="block",e}const sg={};function gu(...e){const t="THREE."+e.shift();console.log(t,...e)}function bS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=bS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ee(...e){e=bS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Zd(...e){const t=e.join(" ");t in sg||(sg[t]=!0,Nt(...e))}function Ub(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lb={[ld]:cd,[ud]:dd,[fd]:pd,[Gr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Gr};class Us{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const Xo=Math.PI/180,ll=180/Math.PI;function ia(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[e&255]+dn[e>>8&255]+dn[e>>16&255]+dn[e>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function cm(e,t){return(e%t+t)%t}function Nb(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function Ob(e,t,n){return e!==t?(n-e)/(t-e):0}function ko(e,t,n){return(1-n)*e+n*t}function Pb(e,t,n,i){return ko(e,t,1-Math.exp(-n*i))}function Ib(e,t=1){return t-Math.abs(cm(e,t*2)-t)}function zb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Bb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Fb(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Hb(e,t){return e+Math.random()*(t-e)}function Gb(e){return e*(.5-Math.random())}function Vb(e){e!==void 0&&(rg=e);let t=rg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xb(e){return e*Xo}function kb(e){return e*ll}function Wb(e){return(e&e-1)===0&&e!==0}function Yb(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function qb(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function jb(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),p=s((t-i)/2),u=r((t-i)/2),d=s((i-t)/2),x=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*x,l*d,o*c);break;case"YXY":e.set(l*d,o*h,l*x,o*c);break;case"ZYZ":e.set(l*x,l*d,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function gi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function he(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Vs={DEG2RAD:Xo,RAD2DEG:ll,generateUUID:ia,clamp:$t,euclideanModulo:cm,mapLinear:Nb,inverseLerp:Ob,lerp:ko,damp:Pb,pingpong:Ib,smoothstep:zb,smootherstep:Bb,randInt:Fb,randFloat:Hb,randFloatSpread:Gb,seededRandom:Vb,degToRad:Xb,radToDeg:kb,isPowerOfTwo:Wb,ceilPowerOfTwo:Yb,floorPowerOfTwo:qb,setQuaternionFromProperEuler:jb,normalize:he,denormalize:gi},_m=class _m{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_m.prototype.isVector2=!0;let Bt=_m;class $r{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],x=s[r+2],E=s[r+3];if(p!==E||l!==u||c!==d||h!==x){let g=l*u+c*d+h*x+p*E;g<0&&(u=-u,d=-d,x=-x,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+d*o,h=h*f+x*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+x*o,p=p*f+E*o;const m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],d=s[r+2],x=s[r+3];return t[n]=o*x+h*p+l*d-c*u,t[n+1]=l*x+h*u+c*p-o*d,t[n+2]=c*x+h*d+o*u-l*p,t[n+3]=h*x-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),x=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p-u*d*x;break;case"YXZ":this._x=u*h*p+c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p+u*d*x;break;case"ZXY":this._x=u*h*p-c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p-u*d*x;break;case"ZYX":this._x=u*h*p-c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p+u*d*x;break;case"YZX":this._x=u*h*p+c*d*x,this._y=c*d*p+u*h*x,this._z=c*h*x-u*d*p,this._w=c*h*p-u*d*x;break;case"XZY":this._x=u*h*p-c*d*x,this._y=c*d*p-u*h*x,this._z=c*h*x+u*d*p,this._w=c*h*p+u*d*x;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vm=class vm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(og.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(og.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nf.copy(this).projectOnVector(t),this.sub(Nf)}reflect(t){return this.sub(Nf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vm.prototype.isVector3=!0;let O=vm;const Nf=new O,og=new $r,xm=class xm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],x=i[8],E=a[0],g=a[3],f=a[6],m=a[1],_=a[4],S=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*E+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*S+l*R,s[1]=c*E+h*m+p*C,s[4]=c*g+h*_+p*b,s[7]=c*f+h*S+p*R,s[2]=u*E+d*m+x*C,s[5]=u*g+d*_+x*b,s[8]=u*f+d*S+x*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*s,d=c*s-r*l,x=n*p+i*u+a*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return t[0]=p*E,t[1]=(a*c-h*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(h*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=d*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Of.makeScale(t,n)),this}rotate(t){return this.premultiply(Of.makeRotation(-t)),this}translate(t,n){return this.premultiply(Of.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xm.prototype.isMatrix3=!0;let zt=xm;const Of=new zt,lg=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zb(){const e={enabled:!0,workingColorSpace:du,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ue&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(a.r=wr(a.r),a.g=wr(a.g),a.b=wr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wa?pu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Zd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Zd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[du]:{primaries:t,whitePoint:i,transfer:pu,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),e}const ne=Zb();function aa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function wr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Xs;class Kb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=mu("canvas")),Xs.width=t.width,Xs.height=t.height;const a=Xs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Xs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=mu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=aa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(aa(n[i]/255)*255):n[i]=aa(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qb=0;class um{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=ia(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Pf(a[r].image)):s.push(Pf(a[r]))}else s=Pf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Pf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Kb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Jb=0;const If=new O;class _n extends Us{constructor(t=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Ji,a=Ji,s=gn,r=hs,o=_i,l=Gn,c=_n.DEFAULT_ANISOTROPY,h=wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=ia(),this.name="",this.source=new um(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(If).x}get height(){return this.source.getSize(If).y}get depth(){return this.source.getSize(If).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=gS;_n.DEFAULT_ANISOTROPY=1;const Sm=class Sm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],x=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(d+1)/2,C=(f+1)/2,b=(h+u)/4,R=(p+E)/4,v=(x+g)/4;return _>S&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):S>C?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=b/a,s=v/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=v/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(p-E)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;let ze=Sm;class $b extends Us{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ze(0,0,t,n),this.scissorTest=!1,this.viewport=new ze(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new _n(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new um(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends $b{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class TS extends _n{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tT extends _n{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=class yu{constructor(t,n,i,a,s,r,o,l,c,h,p,u,d,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,p,u,d,x,E,g)}set(t,n,i,a,s,r,o,l,c,h,p,u,d,x,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=x,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/ks.setFromMatrixColumn(t,0).length(),s=1/ks.setFromMatrixColumn(t,1).length(),r=1/ks.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const u=r*h,d=r*p,x=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+x*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=x+d*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*p,x=c*h,E=c*p;n[0]=u+E*o,n[4]=x*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-x,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*p,x=c*h,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=x+d*o,n[1]=d+x*o,n[5]=r*h,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*p,x=o*h,E=o*p;n[0]=l*h,n[4]=x*c-d,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=d*c-x,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,x=o*l,E=o*c;n[0]=l*h,n[4]=E-u*p,n[8]=x*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+x,n[10]=u-E*p}else if(t.order==="XZY"){const u=r*l,d=r*c,x=o*l,E=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+E,n[5]=r*h,n[9]=d*p-x,n[2]=x*p-d,n[6]=o*h,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eT,t,nT)}lookAt(t,n,i){const a=this.elements;return Pn.subVectors(t,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),_a.crossVectors(i,Pn),_a.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),_a.crossVectors(i,Pn)),_a.normalize(),Vl.crossVectors(Pn,_a),a[0]=_a.x,a[4]=Vl.x,a[8]=Pn.x,a[1]=_a.y,a[5]=Vl.y,a[9]=Pn.y,a[2]=_a.z,a[6]=Vl.z,a[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],x=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],S=i[11],C=i[15],b=a[0],R=a[4],v=a[8],T=a[12],D=a[1],w=a[5],F=a[9],q=a[13],Q=a[2],z=a[6],L=a[10],P=a[14],W=a[3],J=a[7],st=a[11],ot=a[15];return s[0]=r*b+o*D+l*Q+c*W,s[4]=r*R+o*w+l*z+c*J,s[8]=r*v+o*F+l*L+c*st,s[12]=r*T+o*q+l*P+c*ot,s[1]=h*b+p*D+u*Q+d*W,s[5]=h*R+p*w+u*z+d*J,s[9]=h*v+p*F+u*L+d*st,s[13]=h*T+p*q+u*P+d*ot,s[2]=x*b+E*D+g*Q+f*W,s[6]=x*R+E*w+g*z+f*J,s[10]=x*v+E*F+g*L+f*st,s[14]=x*T+E*q+g*P+f*ot,s[3]=m*b+_*D+S*Q+C*W,s[7]=m*R+_*w+S*z+C*J,s[11]=m*v+_*F+S*L+C*st,s[15]=m*T+_*q+S*P+C*ot,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],x=t[3],E=t[7],g=t[11],f=t[15],m=l*d-c*u,_=o*d-c*p,S=o*u-l*p,C=r*d-c*h,b=r*u-l*h,R=r*p-o*h;return n*(E*m-g*_+f*S)-i*(x*m-g*C+f*b)+a*(x*_-E*C+f*R)-s*(x*S-E*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],x=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,S=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,v=h*E-p*x,T=h*g-u*x,D=h*f-d*x,w=p*g-u*E,F=p*f-d*E,q=u*f-d*g,Q=m*q-_*F+S*w+C*D-b*T+R*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Q;return t[0]=(o*q-l*F+c*w)*z,t[1]=(a*F-i*q-s*w)*z,t[2]=(E*R-g*b+f*C)*z,t[3]=(u*b-p*R-d*C)*z,t[4]=(l*D-r*q-c*T)*z,t[5]=(n*q-a*D+s*T)*z,t[6]=(g*S-x*R-f*_)*z,t[7]=(h*R-u*S+d*_)*z,t[8]=(r*F-o*D+c*v)*z,t[9]=(i*D-n*F-s*v)*z,t[10]=(x*b-E*S+f*m)*z,t[11]=(p*S-h*b-d*m)*z,t[12]=(o*T-r*w-l*v)*z,t[13]=(n*w-i*T+a*v)*z,t[14]=(E*_-x*C-g*m)*z,t[15]=(h*C-p*_+u*m)*z,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,d=s*h,x=s*p,E=r*h,g=r*p,f=o*p,m=l*c,_=l*h,S=l*p,C=i.x,b=i.y,R=i.z;return a[0]=(1-(E+f))*C,a[1]=(d+S)*C,a[2]=(x-_)*C,a[3]=0,a[4]=(d-S)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(x+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=ks.set(a[0],a[1],a[2]).length();const o=ks.set(a[4],a[5],a[6]).length(),l=ks.set(a[8],a[9],a[10]).length();s<0&&(r=-r),hi.copy(this);const c=1/r,h=1/o,p=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=p,hi.elements[9]*=p,hi.elements[10]*=p,n.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Ci,l=!1){const c=this.elements,h=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a);let x,E;if(l)x=s/(r-s),E=r*s/(r-s);else if(o===Ci)x=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===ol)x=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Ci,l=!1){const c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a);let x,E;if(l)x=1/(r-s),E=r/(r-s);else if(o===Ci)x=-2/(r-s),E=-(r+s)/(r-s);else if(o===ol)x=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};yu.prototype.isMatrix4=!0;let Le=yu;const ks=new O,hi=new Le,eT=new O(0,0,0),nT=new O(1,1,1),_a=new O,Vl=new O,Pn=new O,ug=new Le,fg=new $r;class Qa{constructor(t=0,n=0,i=0,a=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ug.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ug,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return fg.setFromEuler(this),this.setFromQuaternion(fg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class fm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iT=0;const hg=new O,Ws=new $r,Hi=new Le,Xl=new O,co=new O,aT=new O,sT=new $r,dg=new O(1,0,0),pg=new O(0,1,0),mg=new O(0,0,1),gg={type:"added"},rT={type:"removed"},Ys={type:"childadded",child:null},zf={type:"childremoved",child:null};class un extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new O,n=new Qa,i=new $r,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Le},normalMatrix:{value:new zt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(dg,t)}rotateY(t){return this.rotateOnAxis(pg,t)}rotateZ(t){return this.rotateOnAxis(mg,t)}translateOnAxis(t,n){return hg.copy(t).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(dg,t)}translateY(t){return this.translateOnAxis(pg,t)}translateZ(t){return this.translateOnAxis(mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Xl.copy(t):Xl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(co,Xl,this.up):Hi.lookAt(Xl,co,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Ws.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gg),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rT),zf.child=t,this.dispatchEvent(zf),zf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gg),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,aT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,sT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),x=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}un.DEFAULT_UP=new O(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ro extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class Bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const AS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ff(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Yt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ne.workingColorSpace){return this.r=t,this.g=n,this.b=i,ne.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ne.workingColorSpace){if(t=cm(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Ff(r,s,t+1/3),this.g=Ff(r,s,t),this.b=Ff(r,s,t-1/3)}return ne.colorSpaceToWorking(this,a),this}setStyle(t,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=$n){const i=AS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return ne.workingToColorSpace(pn.copy(this),t),Math.round($t(pn.r*255,0,255))*65536+Math.round($t(pn.g*255,0,255))*256+Math.round($t(pn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ne.workingColorSpace){ne.workingToColorSpace(pn.copy(this),n);const i=pn.r,a=pn.g,s=pn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ne.workingColorSpace){return ne.workingToColorSpace(pn.copy(this),n),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=$n){ne.workingToColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,a=pn.b;return t!==$n?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(va),this.setHSL(va.h+t,va.s+n,va.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(va),t.getHSL(kl);const i=ko(va.h,kl.h,n),a=ko(va.s,kl.s,n),s=ko(va.l,kl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Yt;Yt.NAMES=AS;class hm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=n}clone(){return new hm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lT extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const di=new O,Gi=new O,Hf=new O,Vi=new O,qs=new O,js=new O,_g=new O,Gf=new O,Vf=new O,Xf=new O,kf=new ze,Wf=new ze,Yf=new ze;class ri{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),di.subVectors(t,n),a.cross(di);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){di.subVectors(a,n),Gi.subVectors(i,n),Hf.subVectors(t,n);const r=di.dot(di),o=di.dot(Gi),l=di.dot(Hf),c=Gi.dot(Gi),h=Gi.dot(Hf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,x=(r*h-o*l)*u;return s.set(1-d-x,x,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(r,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return kf.setScalar(0),Wf.setScalar(0),Yf.setScalar(0),kf.fromBufferAttribute(t,n),Wf.fromBufferAttribute(t,i),Yf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(kf,s.x),r.addScaledVector(Wf,s.y),r.addScaledVector(Yf,s.z),r}static isFrontFacing(t,n,i,a){return di.subVectors(i,n),Gi.subVectors(t,n),di.cross(Gi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),di.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ri.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ri.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;qs.subVectors(a,i),js.subVectors(s,i),Gf.subVectors(t,i);const l=qs.dot(Gf),c=js.dot(Gf);if(l<=0&&c<=0)return n.copy(i);Vf.subVectors(t,a);const h=qs.dot(Vf),p=js.dot(Vf);if(h>=0&&p<=h)return n.copy(a);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(qs,r);Xf.subVectors(t,s);const d=qs.dot(Xf),x=js.dot(Xf);if(x>=0&&d<=x)return n.copy(s);const E=d*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(js,o);const g=h*x-d*p;if(g<=0&&p-h>=0&&d-x>=0)return _g.subVectors(s,a),o=(p-h)/(p-h+(d-x)),n.copy(a).addScaledVector(_g,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(qs,r).addScaledVector(js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ml{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(s,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(t.matrixWorld),this.union(Wl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uo),Yl.subVectors(this.max,uo),Zs.subVectors(t.a,uo),Ks.subVectors(t.b,uo),Qs.subVectors(t.c,uo),xa.subVectors(Ks,Zs),Sa.subVectors(Qs,Ks),es.subVectors(Zs,Qs);let n=[0,-xa.z,xa.y,0,-Sa.z,Sa.y,0,-es.z,es.y,xa.z,0,-xa.x,Sa.z,0,-Sa.x,es.z,0,-es.x,-xa.y,xa.x,0,-Sa.y,Sa.x,0,-es.y,es.x,0];return!qf(n,Zs,Ks,Qs,Yl)||(n=[1,0,0,0,1,0,0,0,1],!qf(n,Zs,Ks,Qs,Yl))?!1:(ql.crossVectors(xa,Sa),n=[ql.x,ql.y,ql.z],qf(n,Zs,Ks,Qs,Yl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xi=[new O,new O,new O,new O,new O,new O,new O,new O],pi=new O,Wl=new Ml,Zs=new O,Ks=new O,Qs=new O,xa=new O,Sa=new O,es=new O,uo=new O,Yl=new O,ql=new O,ns=new O;function qf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){ns.fromArray(e,s);const o=a.x*Math.abs(ns.x)+a.y*Math.abs(ns.y)+a.z*Math.abs(ns.z),l=t.dot(ns),c=n.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xe=new O,jl=new Bt;let cT=0;class ci extends Us{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=jd,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jl.fromBufferAttribute(this,n),jl.applyMatrix3(t),this.setXY(n,jl.x,jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix3(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyMatrix4(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.applyNormalMatrix(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Xe.fromBufferAttribute(this,n),Xe.transformDirection(t),this.setXYZ(n,Xe.x,Xe.y,Xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gi(n,this.array)),n}setX(t,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gi(n,this.array)),n}setY(t,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gi(n,this.array)),n}setW(t,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=he(n,this.array),i=he(i,this.array),a=he(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=he(n,this.array),i=he(i,this.array),a=he(a,this.array),s=he(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jd&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class RS extends ci{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class CS extends ci{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class fn extends ci{constructor(t,n,i){super(new Float32Array(t),n,i)}}const uT=new Ml,fo=new O,jf=new O;class Xu{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):uT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(fo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(jf)),this.expandByPoint(fo.copy(t.center).sub(jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fT=0;const Qn=new Le,Zf=new un,Js=new O,In=new Ml,ho=new Ml,Je=new O;class Ln extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wb(t)?CS:RS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,n,i){return Qn.makeTranslation(t,n,i),this.applyMatrix4(Qn),this}scale(t,n,i){return Qn.makeScale(t,n,i),this.applyMatrix4(Qn),this}lookAt(t){return Zf.lookAt(t),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(In.min,ho.min),In.expandByPoint(Je),Je.addVectors(In.max,ho.max),In.expandByPoint(Je)):(In.expandByPoint(ho.min),In.expandByPoint(ho.max))}In.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Je.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Je));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(t,c),Je.add(Js)),a=Math.max(a,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new O,l[v]=new O;const c=new O,h=new O,p=new O,u=new Bt,d=new Bt,x=new Bt,E=new O,g=new O;function f(v,T,D){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,D),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),x.fromBufferAttribute(s,D),h.sub(c),p.sub(c),d.sub(u),x.sub(u);const w=1/(d.x*x.y-x.x*d.y);isFinite(w)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(p,-d.y).multiplyScalar(w),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(w),o[v].add(E),o[T].add(E),o[D].add(E),l[v].add(g),l[T].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let v=0,T=m.length;v<T;++v){const D=m[v],w=D.start,F=D.count;for(let q=w,Q=w+F;q<Q;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const _=new O,S=new O,C=new O,b=new O;function R(v){C.fromBufferAttribute(a,v),b.copy(C);const T=o[v];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(b,T);const w=S.dot(l[v])<0?-1:1;r.setXYZW(v,_.x,_.y,_.z,w)}for(let v=0,T=m.length;v<T;++v){const D=m[v],w=D.start,F=D.count;for(let q=w,Q=w+F;q<Q;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){const x=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Je.fromBufferAttribute(t,n),Je.normalize(),t.setXYZ(n,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,x=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?d=l[E]*o.data.stride+o.offset:d=l[E]*h;for(let f=0;f<h;f++)u[x++]=c[d++]}return new ci(u,h,p)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=ia()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new O;class _u{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=he(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=gi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=gi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=gi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=gi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=he(n,this.array),i=he(i,this.array),a=he(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=he(n,this.array),i=he(i,this.array),a=he(a,this.array),s=he(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){gu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new ci(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let dT=0;class Ls extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Cr,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wS extends Ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $s;const po=new O,tr=new O,er=new O,nr=new Bt,mo=new Bt,DS=new Le,Zl=new O,go=new O,Kl=new O,vg=new Bt,Kf=new Bt,xg=new Bt;class pT extends un{constructor(t=new wS){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Ln;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hT(n,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new _u(i,3,0,!1)),$s.setAttribute("uv",new _u(i,2,3,!1))}this.geometry=$s,this.material=t,this.center=new Bt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),DS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;Ql(Zl.set(-.5,-.5,0),er,r,tr,a,s),Ql(go.set(.5,-.5,0),er,r,tr,a,s),Ql(Kl.set(.5,.5,0),er,r,tr,a,s),vg.set(0,0),Kf.set(1,0),xg.set(1,1);let o=t.ray.intersectTriangle(Zl,go,Kl,!1,po);if(o===null&&(Ql(go.set(-.5,.5,0),er,r,tr,a,s),Kf.set(0,1),o=t.ray.intersectTriangle(Zl,Kl,go,!1,po),o===null))return;const l=t.ray.origin.distanceTo(po);l<t.near||l>t.far||n.push({distance:l,point:po.clone(),uv:ri.getInterpolation(po,Zl,go,Kl,vg,Kf,xg,new Bt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ql(e,t,n,i,a,s){nr.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(mo.x=s*nr.x-a*nr.y,mo.y=a*nr.x+s*nr.y):mo.copy(nr),e.copy(t),e.x+=mo.x,e.y+=mo.y,e.applyMatrix4(DS)}const ki=new O,Qf=new O,Jl=new O,Ma=new O,Jf=new O,$l=new O,$f=new O;class dm{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Qf.copy(t).add(n).multiplyScalar(.5),Jl.copy(n).sub(t).normalize(),Ma.copy(this.origin).sub(Qf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Jl),o=Ma.dot(this.direction),l=-Ma.dot(Jl),c=Ma.lengthSq(),h=Math.abs(1-r*r);let p,u,d,x;if(h>0)if(p=r*l-o,u=r*o-l,x=s*h,p>=0)if(u>=-x)if(u<=x){const E=1/h;p*=E,u*=E,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Qf).addScaledVector(Jl,u),d}intersectSphere(t,n){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),a=ki.dot(ki)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,n,i,a,s){Jf.subVectors(n,t),$l.subVectors(i,t),$f.crossVectors(Jf,$l);let r=this.direction.dot($f),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ma.subVectors(this.origin,t);const l=o*this.direction.dot($l.crossVectors(Ma,$l));if(l<0)return null;const c=o*this.direction.dot(Jf.cross(Ma));if(c<0||l+c>r)return null;const h=-o*Ma.dot($f);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vu extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=lS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sg=new Le,is=new dm,tc=new Xu,Mg=new O,ec=new O,nc=new O,ic=new O,th=new O,ac=new O,yg=new O,sc=new O;class mn extends un{constructor(t=new Ln,n=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(th.fromBufferAttribute(p,t),r?ac.addScaledVector(th,h):ac.addScaledVector(th.sub(n),h))}n.add(ac)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(s),is.copy(t.ray).recast(t.near),!(tc.containsPoint(is.origin)===!1&&(is.intersectSphere(tc,Mg)===null||is.origin.distanceToSquared(Mg)>(t.far-t.near)**2))&&(Sg.copy(s).invert(),is.copy(t.ray).applyMatrix4(Sg),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,is)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,E=u.length;x<E;x++){const g=u[x],f=r[g.materialIndex],m=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,C=_;S<C;S+=3){const b=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);a=rc(this,f,t,i,c,h,p,b,R,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const x=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let g=x,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);a=rc(this,r,t,i,c,h,p,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,E=u.length;x<E;x++){const g=u[x],f=r[g.materialIndex],m=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,C=_;S<C;S+=3){const b=S,R=S+1,v=S+2;a=rc(this,f,t,i,c,h,p,b,R,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const x=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let g=x,f=E;g<f;g+=3){const m=g,_=g+1,S=g+2;a=rc(this,r,t,i,c,h,p,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function mT(e,t,n,i,a,s,r,o){let l;if(t.side===wn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ka,o),l===null)return null;sc.copy(o),sc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(sc);return c<n.near||c>n.far?null:{distance:c,point:sc.clone(),object:e}}function rc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,ec),e.getVertexPosition(l,nc),e.getVertexPosition(c,ic);const h=mT(e,t,n,i,ec,nc,ic,yg);if(h){const p=new O;ri.getBarycoord(yg,ec,nc,ic,p),a&&(h.uv=ri.getInterpolatedAttribute(a,o,l,c,p,new Bt)),s&&(h.uv1=ri.getInterpolatedAttribute(s,o,l,c,p,new Bt)),r&&(h.normal=ri.getInterpolatedAttribute(r,o,l,c,p,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};ri.getNormal(ec,nc,ic,u.normal),h.face=u,h.barycoord=p}return h}class gT extends _n{constructor(t=null,n=1,i=1,a,s,r,o,l,c=ln,h=ln,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new O,_T=new O,vT=new zt;class cs{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=eh.subVectors(i,n).cross(_T.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(eh),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||vT.getNormalMatrix(t),a=this.coplanarPoint(eh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Xu,xT=new Bt(.5,.5),oc=new O;class pm{constructor(t=new cs,n=new cs,i=new cs,a=new cs,s=new cs,r=new cs){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ci,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],x=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],S=s[14],C=s[15];if(a[0].setComponents(c-r,d-h,f-x,C-m).normalize(),a[1].setComponents(c+r,d+h,f+x,C+m).normalize(),a[2].setComponents(c+o,d+p,f+E,C+_).normalize(),a[3].setComponents(c-o,d-p,f-E,C-_).normalize(),i)a[4].setComponents(l,u,g,S).normalize(),a[5].setComponents(c-l,d-u,f-g,C-S).normalize();else if(a[4].setComponents(c-l,d-u,f-g,C-S).normalize(),n===Ci)a[5].setComponents(c+l,d+u,f+g,C+S).normalize();else if(n===ol)a[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const n=xT.distanceTo(t.center);return as.radius=.7071067811865476+n,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(oc.x=a.normal.x>0?t.max.x:t.min.x,oc.y=a.normal.y>0?t.max.y:t.min.y,oc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(oc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ST extends Ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xu=new O,Su=new O,Eg=new Le,_o=new dm,lc=new Xu,nh=new O,bg=new O;class MT extends un{constructor(t=new Ln,n=new ST){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)xu.fromBufferAttribute(n,a-1),Su.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=xu.distanceTo(Su);t.setAttribute("lineDistance",new fn(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(a),lc.radius+=s,t.ray.intersectsSphere(lc)===!1)return;Eg.copy(a).invert(),_o.copy(t.ray).applyMatrix4(Eg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let E=d,g=x-1;E<g;E+=c){const f=h.getX(E),m=h.getX(E+1),_=cc(this,t,_o,l,f,m,E);_&&n.push(_)}if(this.isLineLoop){const E=h.getX(x-1),g=h.getX(d),f=cc(this,t,_o,l,E,g,x-1);f&&n.push(f)}}else{const d=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let E=d,g=x-1;E<g;E+=c){const f=cc(this,t,_o,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=cc(this,t,_o,l,x-1,d,x-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(xu.fromBufferAttribute(o,a),Su.fromBufferAttribute(o,s),n.distanceSqToSegment(xu,Su,nh,bg)>i)return;nh.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(nh);if(!(c<t.near||c>t.far))return{distance:c,point:bg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class US extends _n{constructor(t=[],n=bs,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yT extends _n{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends _n{constructor(t,n,i=Li,a,s,r,o=ln,l=ln,c,h=fa,p=1){if(h!==fa&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new um(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ET extends Xr{constructor(t,n=Li,i=bs,a,s,r=ln,o=ln,l,c=fa){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class LS extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wa extends Ln{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],p=[];let u=0,d=0;x("z","y","x",-1,-1,i,n,t,r,s,0),x("z","y","x",1,-1,i,n,-t,r,s,1),x("x","z","y",1,1,t,i,n,a,r,2),x("x","z","y",1,-1,t,i,-n,a,r,3),x("x","y","z",1,-1,t,n,i,a,s,4),x("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(p,2));function x(E,g,f,m,_,S,C,b,R,v,T){const D=S/R,w=C/v,F=S/2,q=C/2,Q=b/2,z=R+1,L=v+1;let P=0,W=0;const J=new O;for(let st=0;st<L;st++){const ot=st*w-q;for(let xt=0;xt<z;xt++){const kt=xt*D-F;J[E]=kt*m,J[g]=ot*_,J[f]=Q,c.push(J.x,J.y,J.z),J[E]=0,J[g]=0,J[f]=b>0?1:-1,h.push(J.x,J.y,J.z),p.push(xt/R),p.push(1-st/v),P+=1}}for(let st=0;st<v;st++)for(let ot=0;ot<R;ot++){const xt=u+ot+z*st,kt=u+ot+z*(st+1),Wt=u+(ot+1)+z*(st+1),Lt=u+(ot+1)+z*st;l.push(xt,kt,Lt),l.push(kt,Wt,Lt),W+=6}o.addGroup(d,W,T),d+=W,u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class mm extends Ln{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new fn(s,3)),this.setAttribute("normal",new fn(s.slice(),3)),this.setAttribute("uv",new fn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new O,S=new O,C=new O;for(let b=0;b<n.length;b+=3)d(n[b+0],_),d(n[b+1],S),d(n[b+2],C),l(_,S,C,m)}function l(m,_,S,C){const b=C+1,R=[];for(let v=0;v<=b;v++){R[v]=[];const T=m.clone().lerp(S,v/b),D=_.clone().lerp(S,v/b),w=b-v;for(let F=0;F<=w;F++)F===0&&v===b?R[v][F]=T:R[v][F]=T.clone().lerp(D,F/w)}for(let v=0;v<b;v++)for(let T=0;T<2*(b-v)-1;T++){const D=Math.floor(T/2);T%2===0?(u(R[v][D+1]),u(R[v+1][D]),u(R[v][D])):(u(R[v][D+1]),u(R[v+1][D+1]),u(R[v+1][D]))}}function c(m){const _=new O;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function h(){const m=new O;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(S,1-C)}x(),p()}function p(){for(let m=0;m<r.length;m+=6){const _=r[m+0],S=r[m+2],C=r[m+4],b=Math.max(_,S,C),R=Math.min(_,S,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),S<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function d(m,_){const S=m*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function x(){const m=new O,_=new O,S=new O,C=new O,b=new Bt,R=new Bt,v=new Bt;for(let T=0,D=0;T<s.length;T+=9,D+=6){m.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),b.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),v.set(r[D+4],r[D+5]),C.copy(m).add(_).add(S).divideScalar(3);const w=g(C);E(b,D+0,m,w),E(R,D+2,_,w),E(v,D+4,S,w)}}function E(m,_,S,C){C<0&&m.x===1&&(r[_]=m.x-1),S.x===0&&S.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mm(t.vertices,t.indices,t.radius,t.detail)}}class gm extends mm{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new gm(t.radius,t.detail)}}class yl extends Ln{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],x=[],E=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let _=0;_<c;_++){const S=_*p-s;x.push(S,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,S=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;d.push(_,S,b),d.push(S,C,b)}this.setIndex(d),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(E,3)),this.setAttribute("uv",new fn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mu extends Ln{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new O,u=new O,d=[],x=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let S=0;f===0&&r===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const b=C/n;p.x=-t*Math.cos(a+b*s)*Math.sin(r+_*o),p.y=t*Math.cos(r+_*o),p.z=t*Math.sin(a+b*s)*Math.sin(r+_*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),E.push(u.x,u.y,u.z),g.push(b+S,1-_),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=h[f][m+1],S=h[f][m],C=h[f+1][m],b=h[f+1][m+1];(f!==0||r>0)&&d.push(_,S,b),(f!==i-1||l<Math.PI)&&d.push(S,C,b)}this.setIndex(d),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(E,3)),this.setAttribute("uv",new fn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function kr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(Tg(a))a.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(Tg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Sn(e){const t={};for(let n=0;n<e.length;n++){const i=kr(e[n]);for(const a in i)t[a]=i[a]}return t}function Tg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function bT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function NS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const TT={clone:kr,merge:Sn};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=bT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class CT extends vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vo extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wT extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DT extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class OS extends un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class UT extends OS{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const ih=new Le,Ag=new O,Rg=new O;class LT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Ag.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ag),Rg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Rg),n.updateMatrixWorld(),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ol||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uc=new O,fc=new $r,Mi=new O;class PS extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uc,fc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,fc,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(uc,fc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,fc,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ya=new O,Cg=new Bt,wg=new Bt;class Fn extends PS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ll*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ya.x,ya.y).multiplyScalar(-t/ya.z),ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ya.x,ya.y).multiplyScalar(-t/ya.z)}getViewSize(t,n){return this.getViewBounds(t,Cg,wg),n.subVectors(wg,Cg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class NT extends LT{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}}class OT extends OS{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new NT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class IS extends PS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ir=-90,ar=1;class PT extends un{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Fn(ir,ar,t,n);a.layers=this.layers,this.add(a);const s=new Fn(ir,ar,t,n);s.layers=this.layers,this.add(s);const r=new Fn(ir,ar,t,n);r.layers=this.layers,this.add(r);const o=new Fn(ir,ar,t,n);o.layers=this.layers,this.add(o);const l=new Fn(ir,ar,t,n);l.layers=this.layers,this.add(l);const c=new Fn(ir,ar,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class IT extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Dg=new Le;class Ug{constructor(t,n,i=0,a=1/0){this.ray=new dm(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new fm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ee("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Dg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dg),this}intersectObject(t,n=!0,i=[]){return Kd(t,this,i,n),i.sort(Lg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Kd(t[a],this,i,n);return i.sort(Lg),i}}function Lg(e,t){return e.distance-t.distance}function Kd(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)Kd(s[r],t,n,!0)}}const Mm=class Mm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};Mm.prototype.isMatrix2=!0;let Ng=Mm;function Og(e,t,n,i){const a=zT(i);switch(n){case MS:return e*t;case ES:return e*t/a.components*a.byteLength;case am:return e*t/a.components*a.byteLength;case Ts:return e*t*2/a.components*a.byteLength;case sm:return e*t*2/a.components*a.byteLength;case yS:return e*t*3/a.components*a.byteLength;case _i:return e*t*4/a.components*a.byteLength;case rm:return e*t*4/a.components*a.byteLength;case Dc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Nc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vd:case Sd:return Math.max(e,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(e,8)*Math.max(t,8)/2;case Md:case yd:case bd:case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ed:case fu:case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kd:case Wd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case hu:case Yd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zT(e){switch(e){case Gn:case _S:return{byteLength:1,components:1};case sl:case vS:case ua:return{byteLength:2,components:1};case nm:case im:return{byteLength:2,components:4};case Li:case em:case Ri:return{byteLength:4,components:1};case xS:case SS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function BT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<p.length;d++){const x=p[u],E=p[d];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++u,p[u]=E)}p.length=u+1;for(let d=0,x=p.length;d<x;d++){const E=p[d];e.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var FT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$T=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_R=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:FT,alphahash_pars_fragment:HT,alphamap_fragment:GT,alphamap_pars_fragment:VT,alphatest_fragment:XT,alphatest_pars_fragment:kT,aomap_fragment:WT,aomap_pars_fragment:YT,batching_pars_vertex:qT,batching_vertex:jT,begin_vertex:ZT,beginnormal_vertex:KT,bsdfs:QT,iridescence_fragment:JT,bumpmap_pars_fragment:$T,clipping_planes_fragment:t1,clipping_planes_pars_fragment:e1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:a1,color_pars_fragment:s1,color_pars_vertex:r1,color_vertex:o1,common:l1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:d1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:_1,envmap_common_pars_fragment:v1,envmap_pars_fragment:x1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:U1,envmap_vertex:M1,fog_vertex:y1,fog_pars_vertex:E1,fog_fragment:b1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:R1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:w1,lights_pars_begin:D1,lights_toon_fragment:L1,lights_toon_pars_fragment:N1,lights_phong_fragment:O1,lights_phong_pars_fragment:P1,lights_physical_fragment:I1,lights_physical_pars_fragment:z1,lights_fragment_begin:B1,lights_fragment_maps:F1,lights_fragment_end:H1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:W1,map_fragment:Y1,map_pars_fragment:q1,map_particle_fragment:j1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:$1,morphnormal_vertex:tA,morphtarget_pars_vertex:eA,morphtarget_vertex:nA,normal_fragment_begin:iA,normal_fragment_maps:aA,normal_pars_fragment:sA,normal_pars_vertex:rA,normal_vertex:oA,normalmap_pars_fragment:lA,clearcoat_normal_fragment_begin:cA,clearcoat_normal_fragment_maps:uA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:hA,opaque_fragment:dA,packing:pA,premultiplied_alpha_fragment:mA,project_vertex:gA,dithering_fragment:_A,dithering_pars_fragment:vA,roughnessmap_fragment:xA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:yA,shadowmap_vertex:EA,shadowmask_pars_fragment:bA,skinbase_vertex:TA,skinning_pars_vertex:AA,skinning_vertex:RA,skinnormal_vertex:CA,specularmap_fragment:wA,specularmap_pars_fragment:DA,tonemapping_fragment:UA,tonemapping_pars_fragment:LA,transmission_fragment:NA,transmission_pars_fragment:OA,uv_pars_fragment:PA,uv_pars_vertex:IA,uv_vertex:zA,worldpos_vertex:BA,background_vert:FA,background_frag:HA,backgroundCube_vert:GA,backgroundCube_frag:VA,cube_vert:XA,cube_frag:kA,depth_vert:WA,depth_frag:YA,distance_vert:qA,distance_frag:jA,equirect_vert:ZA,equirect_frag:KA,linedashed_vert:QA,linedashed_frag:JA,meshbasic_vert:$A,meshbasic_frag:tR,meshlambert_vert:eR,meshlambert_frag:nR,meshmatcap_vert:iR,meshmatcap_frag:aR,meshnormal_vert:sR,meshnormal_frag:rR,meshphong_vert:oR,meshphong_frag:lR,meshphysical_vert:cR,meshphysical_frag:uR,meshtoon_vert:fR,meshtoon_frag:hR,points_vert:dR,points_frag:pR,shadow_vert:mR,shadow_frag:gR,sprite_vert:_R,sprite_frag:vR},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ei={basic:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Sn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Sn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Sn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Sn([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Sn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Sn([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Sn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Sn([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Sn([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Sn([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ei.physical={uniforms:Sn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const hc={r:0,b:0,g:0},xR=new Le,BS=new zt;BS.set(-1,0,0,0,1,0,0,0,1);function SR(e,t,n,i,a,s){const r=new Yt(0);let o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const S=m.backgroundBlurriness>0;_=t.get(_,S)}return _}function x(m){let _=!1;const S=d(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,_){const S=d(_);S&&(S.isCubeTexture||S.mapping===Vu)?(c===void 0&&(c=new mn(new Wa(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:kr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xR.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(BS),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,(h!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new mn(new yl(2,2),new vi({name:"BackgroundMaterial",uniforms:kr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(hc,NS(e)),n.buffers.color.setClear(hc.r,hc.g,hc.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:x,addToRenderList:E,dispose:f}}function MR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(w,F,q,Q,z){let L=!1;const P=p(w,Q,q,F);s!==P&&(s=P,c(s.object)),L=d(w,Q,q,z),L&&x(w,Q,q,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,S(w,F,q,Q),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function h(w){return e.deleteVertexArray(w)}function p(w,F,q,Q){const z=Q.wireframe===!0;let L=i[F.id];L===void 0&&(L={},i[F.id]=L);const P=w.isInstancedMesh===!0?w.id:0;let W=L[P];W===void 0&&(W={},L[P]=W);let J=W[q.id];J===void 0&&(J={},W[q.id]=J);let st=J[z];return st===void 0&&(st=u(l()),J[z]=st),st}function u(w){const F=[],q=[],Q=[];for(let z=0;z<n;z++)F[z]=0,q[z]=0,Q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Q,object:w,attributes:{},index:null}}function d(w,F,q,Q){const z=s.attributes,L=F.attributes;let P=0;const W=q.getAttributes();for(const J in W)if(W[J].location>=0){const ot=z[J];let xt=L[J];if(xt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),ot===void 0||ot.attribute!==xt||xt&&ot.data!==xt.data)return!0;P++}return s.attributesNum!==P||s.index!==Q}function x(w,F,q,Q){const z={},L=F.attributes;let P=0;const W=q.getAttributes();for(const J in W)if(W[J].location>=0){let ot=L[J];ot===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor));const xt={};xt.attribute=ot,ot&&ot.data&&(xt.data=ot.data),z[J]=xt,P++}s.attributes=z,s.attributesNum=P,s.index=Q}function E(){const w=s.newAttributes;for(let F=0,q=w.length;F<q;F++)w[F]=0}function g(w){f(w,0)}function f(w,F){const q=s.newAttributes,Q=s.enabledAttributes,z=s.attributeDivisors;q[w]=1,Q[w]===0&&(e.enableVertexAttribArray(w),Q[w]=1),z[w]!==F&&(e.vertexAttribDivisor(w,F),z[w]=F)}function m(){const w=s.newAttributes,F=s.enabledAttributes;for(let q=0,Q=F.length;q<Q;q++)F[q]!==w[q]&&(e.disableVertexAttribArray(q),F[q]=0)}function _(w,F,q,Q,z,L,P){P===!0?e.vertexAttribIPointer(w,F,q,z,L):e.vertexAttribPointer(w,F,q,Q,z,L)}function S(w,F,q,Q){E();const z=Q.attributes,L=q.getAttributes(),P=F.defaultAttributeValues;for(const W in L){const J=L[W];if(J.location>=0){let st=z[W];if(st===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),st!==void 0){const ot=st.normalized,xt=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const Wt=kt.buffer,Lt=kt.type,tt=kt.bytesPerElement,mt=Lt===e.INT||Lt===e.UNSIGNED_INT||st.gpuType===em;if(st.isInterleavedBufferAttribute){const ut=st.data,wt=ut.stride,It=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Ct=0;Ct<J.locationSize;Ct++)f(J.location+Ct,ut.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ct=0;Ct<J.locationSize;Ct++)g(J.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let Ct=0;Ct<J.locationSize;Ct++)_(J.location+Ct,xt/J.locationSize,Lt,ot,wt*tt,(It+xt/J.locationSize*Ct)*tt,mt)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<J.locationSize;ut++)f(J.location+ut,st.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<J.locationSize;ut++)g(J.location+ut);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let ut=0;ut<J.locationSize;ut++)_(J.location+ut,xt/J.locationSize,Lt,ot,xt*tt,xt/J.locationSize*ut*tt,mt)}}else if(P!==void 0){const ot=P[W];if(ot!==void 0)switch(ot.length){case 2:e.vertexAttrib2fv(J.location,ot);break;case 3:e.vertexAttrib3fv(J.location,ot);break;case 4:e.vertexAttrib4fv(J.location,ot);break;default:e.vertexAttrib1fv(J.location,ot)}}}}m()}function C(){T();for(const w in i){const F=i[w];for(const q in F){const Q=F[q];for(const z in Q){const L=Q[z];for(const P in L)h(L[P].object),delete L[P];delete Q[z]}}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const F=i[w.id];for(const q in F){const Q=F[q];for(const z in Q){const L=Q[z];for(const P in L)h(L[P].object),delete L[P];delete Q[z]}}delete i[w.id]}function R(w){for(const F in i){const q=i[F];for(const Q in q){const z=q[Q];if(z[w.id]===void 0)continue;const L=z[w.id];for(const P in L)h(L[P].object),delete L[P];delete z[w.id]}}}function v(w){for(const F in i){const q=i[F],Q=w.isInstancedMesh===!0?w.id:0,z=q[Q];if(z!==void 0){for(const L in z){const P=z[L];for(const W in P)h(P[W].object),delete P[W];delete z[L]}delete q[Q],Object.keys(q).length===0&&delete i[F]}}}function T(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function yR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function ER(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==_i&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Gn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ri&&!v)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:C,samples:b}}function bR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new cs,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){const x=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||x===null||x.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,_=m*4;let S=f.clippingState||null;l.value=S,S=h(x,u,_,d);for(let C=0;C!==_;++C)S[C]=n[C];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,x){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,x!==!0||g===null){const f=d+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,S=d;_!==E;++_,S+=4)r.copy(p[_]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const Pa=4,Pg=[.125,.215,.35,.446,.526,.582],fs=20,TR=256,xo=new IS,Ig=new Yt;let ah=null,sh=0,rh=0,oh=!1;const AR=new O;class zg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=AR}=s;ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ah,sh,rh),this._renderer.xr.enabled=oh,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===bs||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ua,format:_i,colorSpace:du,depthBuffer:!1},a=Bg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RR(s)),this._blurMaterial=wR(s,t,n),this._ggxMaterial=CR(s,t,n)}return a}_compileMaterial(t){const n=new mn(new Ln,t);this._renderer.compile(n,xo)}_sceneToCubeUV(t,n,i,a,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Ig),p.toneMapping=Di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Wa,new vu({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(Ig),f=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;sr(a,S*C,_>2?C:0,C,C),p.setRenderTarget(a),f&&p.render(E,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===bs||t.mapping===Vr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;sr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,xo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-Pa?i-x+Pa:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-n,sr(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,sr(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,xo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fs-1),E=s/x,g=isFinite(s)?1+Math.floor(h*E):fs;g>fs&&Nt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const f=[];let m=0;for(let R=0;R<fs;++R){const v=R/E,T=Math.exp(-v*v/2);f.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-i;const S=this._sizeLods[a],C=3*S*(a>_-Pa?a-_+Pa:0),b=4*(this._cubeSize-S);sr(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(p,xo)}}function RR(e){const t=[],n=[],i=[];let a=e;const s=e-Pa+1+Pg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Pa?l=Pg[r-e+Pa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,x=6,E=3,g=2,f=1,m=new Float32Array(E*x*d),_=new Float32Array(g*x*d),S=new Float32Array(f*x*d);for(let b=0;b<d;b++){const R=b%3*2/3-1,v=b>2?0:-1,T=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];m.set(T,E*x*b),_.set(u,g*x*b);const D=[b,b,b,b,b,b];S.set(D,f*x*b)}const C=new Ln;C.setAttribute("position",new ci(m,E)),C.setAttribute("uv",new ci(_,g)),C.setAttribute("faceIndex",new ci(S,f)),i.push(new mn(C,null)),a>Pa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Bg(e,t,n){const i=new Ui(e,t,n);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function CR(e,t,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function wR(e,t,n){const i=new Float32Array(fs),a=new O(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Fg(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Hg(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class FS extends Ui{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new US(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Wa(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:na});s.uniforms.tEquirect.value=n;const r=new mn(a,s),o=n.minFilter;return n.minFilter===hs&&(n.minFilter=gn),new PT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function DR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Df||d===Uf)if(t.has(u)){const x=t.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const E=new FS(x.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,x=d===Df||d===Uf,E=d===bs||d===Vr;if(x||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new zg(e)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return x&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new zg(e)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Df?u.mapping=bs:d===Uf&&(u.mapping=Vr),u}function l(u){let d=0;const x=6;for(let E=0;E<x;E++)u[E]!==void 0&&d++;return d===x}function c(u){const d=u.target;d.removeEventListener("dispose",c);const x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const x=n.get(d);x!==void 0&&(n.delete(d),x.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function UR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Zd("WebGLRenderer: "+i+" extension not supported."),a}}}function LR(e,t,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",r),delete a[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,x=p.attributes.position;let E=0;if(x===void 0)return;if(d!==null){const m=d.array;E=d.version;for(let _=0,S=m.length;_<S;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=x.array;E=x.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(x.count>=65535?CS:RS)(u,1);g.version=E;const f=s.get(p);f&&t.remove(f),s.set(p,g)}function h(p){const u=s.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function NR(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let E=0;for(let g=0;g<d;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function OR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function PR(e,t,n){const i=new WeakMap,a=new ze;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let D=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var d=D;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*b*4*p),v=new TS(R,C,b,p);v.type=Ri,v.needsUpdate=!0;const T=S*4;for(let w=0;w<p;w++){const F=f[w],q=m[w],Q=_[w],z=C*b*4*w;for(let L=0;L<F.count;L++){const P=L*T;x===!0&&(a.fromBufferAttribute(F,L),R[z+P+0]=a.x,R[z+P+1]=a.y,R[z+P+2]=a.z,R[z+P+3]=0),E===!0&&(a.fromBufferAttribute(q,L),R[z+P+4]=a.x,R[z+P+5]=a.y,R[z+P+6]=a.z,R[z+P+7]=0),g===!0&&(a.fromBufferAttribute(Q,L),R[z+P+8]=a.x,R[z+P+9]=a.y,R[z+P+10]=a.z,R[z+P+11]=Q.itemSize===4?a.w:1)}}u={count:p,texture:v,size:new Bt(C,b)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function IR(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const zR={[cS]:"LINEAR_TONE_MAPPING",[uS]:"REINHARD_TONE_MAPPING",[fS]:"CINEON_TONE_MAPPING",[hS]:"ACES_FILMIC_TONE_MAPPING",[pS]:"AGX_TONE_MAPPING",[mS]:"NEUTRAL_TONE_MAPPING",[dS]:"CUSTOM_TONE_MAPPING"};function BR(e,t,n,i,a){const s=new Ui(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Xr(t,n):void 0}),r=new Ui(t,n,{type:ua,depthBuffer:!1,stencilBuffer:!1}),o=new Ln;o.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new fn([0,2,0,0,2,0],2));const l=new CT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new mn(o,l),h=new IS(-1,1,1,-1,0,1);let p=null,u=null,d=!1,x,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let S=0;S<g.length;S++){const C=g[S];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,S=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,S)}},this.begin=function(m,_){if(d||m.toneMapping===Di&&g.length===0)return!1;if(E=_,_!==null){const S=_.width,C=_.height;(s.width!==S||s.height!==C)&&this.setSize(S,C)}return f===!1&&m.setRenderTarget(s),x=m.toneMapping,m.toneMapping=Di,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=x,d=!0;let S=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,S,_),R.needsSwap!==!1)){const v=S;S=C,C=v}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},ne.getTransfer(p)===ue&&(l.defines.SRGB_TRANSFER="");const b=zR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(E),m.render(c,h),E=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const HS=new _n,Qd=new Xr(1,1),GS=new TS,VS=new tT,XS=new US,Gg=[],Vg=[],Xg=new Float32Array(16),kg=new Float32Array(9),Wg=new Float32Array(4);function to(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=Gg[a];if(s===void 0&&(s=new Float32Array(a),Gg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Wu(e,t){let n=Vg[t];n===void 0&&(n=new Int32Array(t),Vg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function FR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function HR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function GR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ke(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function VR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function XR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;Wg.set(i),e.uniformMatrix2fv(this.addr,!1,Wg),Qe(n,i)}}function kR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;kg.set(i),e.uniformMatrix3fv(this.addr,!1,kg),Qe(n,i)}}function WR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;Xg.set(i),e.uniformMatrix4fv(this.addr,!1,Xg),Qe(n,i)}}function YR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function jR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function ZR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function KR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function QR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function JR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function $R(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function t3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Qd.compareFunction=n.isReversedDepthBuffer()?lm:om,s=Qd):s=HS,n.setTexture2D(t||s,a)}function e3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||VS,a)}function n3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||XS,a)}function i3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||GS,a)}function a3(e){switch(e){case 5126:return FR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return XR;case 35675:return kR;case 35676:return WR;case 5124:case 35670:return YR;case 35667:case 35671:return qR;case 35668:case 35672:return jR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return QR;case 36295:return JR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function s3(e,t){e.uniform1fv(this.addr,t)}function r3(e,t){const n=to(t,this.size,2);e.uniform2fv(this.addr,n)}function o3(e,t){const n=to(t,this.size,3);e.uniform3fv(this.addr,n)}function l3(e,t){const n=to(t,this.size,4);e.uniform4fv(this.addr,n)}function c3(e,t){const n=to(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function u3(e,t){const n=to(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function f3(e,t){const n=to(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function h3(e,t){e.uniform1iv(this.addr,t)}function d3(e,t){e.uniform2iv(this.addr,t)}function p3(e,t){e.uniform3iv(this.addr,t)}function m3(e,t){e.uniform4iv(this.addr,t)}function g3(e,t){e.uniform1uiv(this.addr,t)}function _3(e,t){e.uniform2uiv(this.addr,t)}function v3(e,t){e.uniform3uiv(this.addr,t)}function x3(e,t){e.uniform4uiv(this.addr,t)}function S3(e,t,n){const i=this.cache,a=t.length,s=Wu(n,a);Ke(i,s)||(e.uniform1iv(this.addr,s),Qe(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Qd:r=HS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function M3(e,t,n){const i=this.cache,a=t.length,s=Wu(n,a);Ke(i,s)||(e.uniform1iv(this.addr,s),Qe(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||VS,s[r])}function y3(e,t,n){const i=this.cache,a=t.length,s=Wu(n,a);Ke(i,s)||(e.uniform1iv(this.addr,s),Qe(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||XS,s[r])}function E3(e,t,n){const i=this.cache,a=t.length,s=Wu(n,a);Ke(i,s)||(e.uniform1iv(this.addr,s),Qe(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||GS,s[r])}function b3(e){switch(e){case 5126:return s3;case 35664:return r3;case 35665:return o3;case 35666:return l3;case 35674:return c3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return h3;case 35667:case 35671:return d3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return x3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return E3}}class T3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=a3(n.type)}}class A3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=b3(n.type)}}class R3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function Yg(e,t){e.seq.push(t),e.map[t.id]=t}function C3(e,t,n){const i=e.name,a=i.length;for(lh.lastIndex=0;;){const s=lh.exec(i),r=lh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Yg(n,c===void 0?new T3(o,e,t):new A3(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new R3(o),Yg(n,p)),n=p}}}class Oc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);C3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function qg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const w3=37297;let D3=0;function U3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const jg=new zt;function L3(e){ne._getMatrix(jg,ne.workingColorSpace,e);const t=`mat3( ${jg.elements.map(n=>n.toFixed(4))} )`;switch(ne.getTransfer(e)){case pu:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Zg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+U3(e.getShaderSource(t),o)}else return s}function N3(e,t){const n=L3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const O3={[cS]:"Linear",[uS]:"Reinhard",[fS]:"Cineon",[hS]:"ACESFilmic",[pS]:"AgX",[mS]:"Neutral",[dS]:"Custom"};function P3(e,t){const n=O3[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dc=new O;function I3(){ne.getLuminanceCoefficients(dc);const e=dc.x.toFixed(4),t=dc.y.toFixed(4),n=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function B3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function F3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Co(e){return e!==""}function Kg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(e){return e.replace(H3,V3)}const G3=new Map;function V3(e,t){let n=jt[t];if(n===void 0){const i=G3.get(t);if(i!==void 0)n=jt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jd(n)}const X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(e){return e.replace(X3,k3)}function k3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function $g(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const W3={[wc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function Y3(e){return W3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q3={[bs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function j3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":q3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z3={[Vr]:"ENVMAP_MODE_REFRACTION"};function K3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Z3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q3={[lS]:"ENVMAP_BLENDING_MULTIPLY",[vb]:"ENVMAP_BLENDING_MIX",[xb]:"ENVMAP_BLENDING_ADD"};function J3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Q3[e.combine]||"ENVMAP_BLENDING_NONE"}function $3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function t2(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=Y3(n),c=j3(n),h=K3(n),p=J3(n),u=$3(n),d=z3(n),x=B3(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Co).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Co).join(`
`),f.length>0&&(f+=`
`)):(g=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),f=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?jt.tonemapping_pars_fragment:"",n.toneMapping!==Di?P3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,N3("linearToOutputTexel",n.outputColorSpace),I3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),r=Jd(r),r=Kg(r,n),r=Qg(r,n),o=Jd(o),o=Kg(o,n),o=Qg(o,n),r=Jg(r),o=Jg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,S=m+f+o,C=qg(a,a.VERTEX_SHADER,_),b=qg(a,a.FRAGMENT_SHADER,S);a.attachShader(E,C),a.attachShader(E,b),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(w){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(E)||"",q=a.getShaderInfoLog(C)||"",Q=a.getShaderInfoLog(b)||"",z=F.trim(),L=q.trim(),P=Q.trim();let W=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,C,b);else{const st=Zg(a,C,"vertex"),ot=Zg(a,b,"fragment");ee("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+st+`
`+ot)}else z!==""?Nt("WebGLProgram: Program Info Log:",z):(L===""||P==="")&&(J=!1);J&&(w.diagnostics={runnable:W,programLog:z,vertexShader:{log:L,prefix:g},fragmentShader:{log:P,prefix:f}})}a.deleteShader(C),a.deleteShader(b),v=new Oc(a,E),T=F3(a,E)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,w3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=D3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=b,this}let e2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new i2(t),n.set(t,i)),i}}class i2{constructor(t){this.id=e2++,this.code=t,this.usedTimes=0}}function a2(e){return e===Ts||e===fu||e===hu}function s2(e,t,n,i,a,s){const r=new fm,o=new n2,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,T,D,w,F,q){const Q=w.fog,z=F.geometry,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=t.get(v.envMap||L,P),J=W&&W.mapping===Vu?W.image.height:null,st=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=ot!==void 0?ot.length:0;let kt=0;z.morphAttributes.position!==void 0&&(kt=1),z.morphAttributes.normal!==void 0&&(kt=2),z.morphAttributes.color!==void 0&&(kt=3);let Wt,Lt,tt,mt;if(st){const Dt=Ei[st];Wt=Dt.vertexShader,Lt=Dt.fragmentShader}else Wt=v.vertexShader,Lt=v.fragmentShader,o.update(v),tt=o.getVertexShaderID(v),mt=o.getFragmentShaderID(v);const ut=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,Ht=!!v.map,Ut=!!v.matcap,Gt=!!W,ve=!!v.aoMap,qt=!!v.lightMap,Be=!!v.bumpMap,xe=!!v.normalMap,vn=!!v.displacementMap,I=!!v.emissiveMap,Ne=!!v.metalnessMap,Zt=!!v.roughnessMap,se=v.anisotropy>0,pt=v.clearcoat>0,Te=v.dispersion>0,A=v.iridescence>0,M=v.sheen>0,G=v.transmission>0,Z=se&&!!v.anisotropyMap,at=pt&&!!v.clearcoatMap,lt=pt&&!!v.clearcoatNormalMap,ft=pt&&!!v.clearcoatRoughnessMap,U=A&&!!v.iridescenceMap,B=A&&!!v.iridescenceThicknessMap,et=M&&!!v.sheenColorMap,$=M&&!!v.sheenRoughnessMap,j=!!v.specularMap,it=!!v.specularColorMap,Et=!!v.specularIntensityMap,yt=G&&!!v.transmissionMap,Ot=G&&!!v.thicknessMap,N=!!v.gradientMap,rt=!!v.alphaMap,Y=v.alphaTest>0,ht=!!v.alphaHash,ct=!!v.extensions;let nt=Di;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(nt=e.toneMapping);const dt={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:Lt,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,outputColorSpace:ut===null?e.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:Ut,envMap:Gt,envMapMode:Gt&&W.mapping,envMapCubeUVHeight:J,aoMap:ve,lightMap:qt,bumpMap:Be,normalMap:xe,displacementMap:vn,emissiveMap:I,normalMapObjectSpace:xe&&v.normalMapType===yb,normalMapTangentSpace:xe&&v.normalMapType===qd,packedNormalMap:xe&&v.normalMapType===qd&&a2(v.normalMap.format),metalnessMap:Ne,roughnessMap:Zt,anisotropy:se,anisotropyMap:Z,clearcoat:pt,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:ft,dispersion:Te,iridescence:A,iridescenceMap:U,iridescenceThicknessMap:B,sheen:M,sheenColorMap:et,sheenRoughnessMap:$,specularMap:j,specularColorMap:it,specularIntensityMap:Et,transmission:G,transmissionMap:yt,thicknessMap:Ot,gradientMap:N,opaque:v.transparent===!1&&v.blending===Cr&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:Y,alphaHash:ht,combine:v.combine,mapUv:Ht&&x(v.map.channel),aoMapUv:ve&&x(v.aoMap.channel),lightMapUv:qt&&x(v.lightMap.channel),bumpMapUv:Be&&x(v.bumpMap.channel),normalMapUv:xe&&x(v.normalMap.channel),displacementMapUv:vn&&x(v.displacementMap.channel),emissiveMapUv:I&&x(v.emissiveMap.channel),metalnessMapUv:Ne&&x(v.metalnessMap.channel),roughnessMapUv:Zt&&x(v.roughnessMap.channel),anisotropyMapUv:Z&&x(v.anisotropyMap.channel),clearcoatMapUv:at&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:B&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:et&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:$&&x(v.sheenRoughnessMap.channel),specularMapUv:j&&x(v.specularMap.channel),specularColorMapUv:it&&x(v.specularColorMap.channel),specularIntensityMapUv:Et&&x(v.specularIntensityMap.channel),transmissionMapUv:yt&&x(v.transmissionMap.channel),thicknessMapUv:Ot&&x(v.thicknessMap.channel),alphaMapUv:rt&&x(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||se),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ht||rt),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&xe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:kt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:I&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ji,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(f(T,v),m(T,v),T.push(e.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function f(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function m(v,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),v.push(r.mask)}function _(v){const T=d[v.type];let D;if(T){const w=Ei[T];D=TT.clone(w.uniforms)}else D=v.uniforms;return D}function S(v,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new t2(e,T,v,a),c.push(D),h.set(T,D)),D}function C(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function r2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function o2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function t_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function e_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:x,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=x,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,x,E,g,f){const m=o(u,d,x,E,g,f);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):n.push(m)}function c(u,d,x,E,g,f){const m=o(u,d,x,E,g,f);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||o2),i.length>1&&i.sort(d||t_),a.length>1&&a.sort(d||t_)}function p(){for(let u=t,d=e.length;u<d;u++){const x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function l2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new e_,e.set(i,[r])):a>=s.length?(r=new e_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function c2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Yt};break;case"SpotLight":n={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function u2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let f2=0;function h2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function d2(e){const t=new c2,n=u2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new Le,r=new Le;function o(c){let h=0,p=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,x=0,E=0,g=0,f=0,m=0,_=0,S=0,C=0,b=0,R=0;c.sort(h2);for(let T=0,D=c.length;T<D;T++){const w=c[T],F=w.color,q=w.intensity,Q=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ts?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=F.r*q,p+=F.g*q,u+=F.b*q;else if(w.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(w.sh.coefficients[L],q);R++}else if(w.isDirectionalLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const P=w.shadow,W=n.get(w);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=w.shadow.matrix,m++}i.directional[d]=L,d++}else if(w.isSpotLight){const L=t.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(F).multiplyScalar(q),L.distance=Q,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,i.spot[E]=L;const P=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,P.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[E]=P.matrix,w.castShadow){const W=n.get(w);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=z,S++}E++}else if(w.isRectAreaLight){const L=t.get(w);L.color.copy(F).multiplyScalar(q),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=L,g++}else if(w.isPointLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),L.distance=w.distance,L.decay=w.decay,w.castShadow){const P=w.shadow,W=n.get(w);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,W.shadowCameraNear=P.camera.near,W.shadowCameraFar=P.camera.far,i.pointShadow[x]=W,i.pointShadowMap[x]=z,i.pointShadowMatrix[x]=w.shadow.matrix,_++}i.point[x]=L,x++}else if(w.isHemisphereLight){const L=t.get(w);L.skyColor.copy(w.color).multiplyScalar(q),L.groundColor.copy(w.groundColor).multiplyScalar(q),i.hemi[f]=L,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==d||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==m||v.numPointShadows!==_||v.numSpotShadows!==S||v.numSpotMaps!==C||v.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,v.directionalLength=d,v.pointLength=x,v.spotLength=E,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=m,v.numPointShadows=_,v.numSpotShadows=S,v.numSpotMaps=C,v.numLightProbes=R,i.version=f2++)}function l(c,h){let p=0,u=0,d=0,x=0,E=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(_.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),x++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function n_(e){const t=new d2(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function p2(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new n_(e),t.set(a,[o])):s>=r.length?(o=new n_(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const m2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_2=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],v2=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],i_=new Le,So=new O,ch=new O;function x2(e,t,n){let i=new pm;const a=new Bt,s=new Bt,r=new ze,o=new wT,l=new DT,c={},h=n.maxTextureSize,p={[Ka]:wn,[wn]:Ka,[ji]:ji},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:m2,fragmentShader:g2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const x=new Ln;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mn(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let f=this.type;this.render=function(b,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===$E&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const T=e.getRenderTarget(),D=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),F=e.state;F.setBlending(na),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(z=>z.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,z=b.length;Q<z;Q++){const L=b[Q],P=L.shadow;if(P===void 0){Nt("WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const W=P.getFrameExtents();a.multiply(W),s.copy(P.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/W.x),a.x=s.x*W.x,P.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/W.y),a.y=s.y*W.y,P.mapSize.y=s.y));const J=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=J,P.map===null||q===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Ao){if(L.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ui(a.x,a.y,{format:Ts,type:ua,minFilter:gn,magFilter:gn,generateMipmaps:!1}),P.map.texture.name=L.name+".shadowMap",P.map.depthTexture=new Xr(a.x,a.y,Ri),P.map.depthTexture.name=L.name+".shadowMapDepth",P.map.depthTexture.format=fa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ln,P.map.depthTexture.magFilter=ln}else L.isPointLight?(P.map=new FS(a.x),P.map.depthTexture=new ET(a.x,Li)):(P.map=new Ui(a.x,a.y),P.map.depthTexture=new Xr(a.x,a.y,Li)),P.map.depthTexture.name=L.name+".shadowMap",P.map.depthTexture.format=fa,this.type===wc?(P.map.depthTexture.compareFunction=J?lm:om,P.map.depthTexture.minFilter=gn,P.map.depthTexture.magFilter=gn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=ln,P.map.depthTexture.magFilter=ln);P.camera.updateProjectionMatrix()}const st=P.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<st;ot++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,ot),e.clear();else{ot===0&&(e.setRenderTarget(P.map),e.clear());const xt=P.getViewport(ot);r.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),F.viewport(r)}if(L.isPointLight){const xt=P.camera,kt=P.matrix,Wt=L.distance||xt.far;Wt!==xt.far&&(xt.far=Wt,xt.updateProjectionMatrix()),So.setFromMatrixPosition(L.matrixWorld),xt.position.copy(So),ch.copy(xt.position),ch.add(_2[ot]),xt.up.copy(v2[ot]),xt.lookAt(ch),xt.updateMatrixWorld(),kt.makeTranslation(-So.x,-So.y,-So.z),i_.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),P._frustum.setFromProjectionMatrix(i_,xt.coordinateSystem,xt.reversedDepth)}else P.updateMatrices(L);i=P.getFrustum(),S(R,v,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===Ao&&m(P,v),P.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(T,D,w)};function m(b,R){const v=t.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ui(a.x,a.y,{format:Ts,type:ua})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,v,u,E,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,v,d,E,null)}function _(b,R,v,T){let D=null;const w=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)D=w;else if(D=v.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=D.uuid,q=R.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let z=Q[q];z===void 0&&(z=D.clone(),Q[q]=z,R.addEventListener("dispose",C)),D=z}if(D.visible=R.visible,D.wireframe=R.wireframe,T===Ao?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:p[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=e.properties.get(D);F.light=v}return D}function S(b,R,v,T,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Ao)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const q=t.update(b),Q=b.material;if(Array.isArray(Q)){const z=q.groups;for(let L=0,P=z.length;L<P;L++){const W=z[L],J=Q[W.materialIndex];if(J&&J.visible){const st=_(b,J,T,D);b.onBeforeShadow(e,b,R,v,q,st,W),e.renderBufferDirect(v,null,q,st,b,W),b.onAfterShadow(e,b,R,v,q,st,W)}}}else if(Q.visible){const z=_(b,Q,T,D);b.onBeforeShadow(e,b,R,v,q,z,null),e.renderBufferDirect(v,null,q,z,b,null),b.onAfterShadow(e,b,R,v,q,z,null)}}const F=b.children;for(let q=0,Q=F.length;q<Q;q++)S(F[q],R,v,T,D)}function C(b){b.target.removeEventListener("dispose",C);for(const v in c){const T=c[v],D=b.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function S2(e,t){function n(){let N=!1;const rt=new ze;let Y=null;const ht=new ze(0,0,0,0);return{setMask:function(ct){Y!==ct&&!N&&(e.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){N=ct},setClear:function(ct,nt,dt,Dt,pe){pe===!0&&(ct*=Dt,nt*=Dt,dt*=Dt),rt.set(ct,nt,dt,Dt),ht.equals(rt)===!1&&(e.clearColor(ct,nt,dt,Dt),ht.copy(rt))},reset:function(){N=!1,Y=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,rt=!1,Y=null,ht=null,ct=null;return{setReversed:function(nt){if(rt!==nt){const dt=t.get("EXT_clip_control");nt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),rt=nt;const Dt=ct;ct=null,this.setClear(Dt)}},getReversed:function(){return rt},setTest:function(nt){nt?ut(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(nt){Y!==nt&&!N&&(e.depthMask(nt),Y=nt)},setFunc:function(nt){if(rt&&(nt=Lb[nt]),ht!==nt){switch(nt){case ld:e.depthFunc(e.NEVER);break;case cd:e.depthFunc(e.ALWAYS);break;case ud:e.depthFunc(e.LESS);break;case Gr:e.depthFunc(e.LEQUAL);break;case fd:e.depthFunc(e.EQUAL);break;case hd:e.depthFunc(e.GEQUAL);break;case dd:e.depthFunc(e.GREATER);break;case pd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ct!==nt&&(ct=nt,rt&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,Y=null,ht=null,ct=null,rt=!1}}}function a(){let N=!1,rt=null,Y=null,ht=null,ct=null,nt=null,dt=null,Dt=null,pe=null;return{setTest:function(re){N||(re?ut(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(re){rt!==re&&!N&&(e.stencilMask(re),rt=re)},setFunc:function(re,Zn,Nn){(Y!==re||ht!==Zn||ct!==Nn)&&(e.stencilFunc(re,Zn,Nn),Y=re,ht=Zn,ct=Nn)},setOp:function(re,Zn,Nn){(nt!==re||dt!==Zn||Dt!==Nn)&&(e.stencilOp(re,Zn,Nn),nt=re,dt=Zn,Dt=Nn)},setLocked:function(re){N=re},setClear:function(re){pe!==re&&(e.clearStencil(re),pe=re)},reset:function(){N=!1,rt=null,Y=null,ht=null,ct=null,nt=null,dt=null,Dt=null,pe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},p={},u={},d=new WeakMap,x=[],E=null,g=!1,f=null,m=null,_=null,S=null,C=null,b=null,R=null,v=new Yt(0,0,0),T=0,D=!1,w=null,F=null,q=null,Q=null,z=null;const L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const J=e.getParameter(e.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),P=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),P=W>=2);let st=null,ot={};const xt=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),Wt=new ze().fromArray(xt),Lt=new ze().fromArray(kt);function tt(N,rt,Y,ht){const ct=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let dt=0;dt<Y;dt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(rt+dt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return nt}const mt={};mt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),mt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),mt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(e.DEPTH_TEST),r.setFunc(Gr),Be(!1),xe(tg),ut(e.CULL_FACE),ve(na);function ut(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function wt(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function It(N,rt){return u[N]!==rt?(e.bindFramebuffer(N,rt),u[N]=rt,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=rt),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ct(N,rt){let Y=x,ht=!1;if(N){Y=d.get(rt),Y===void 0&&(Y=[],d.set(rt,Y));const ct=N.textures;if(Y.length!==ct.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,dt=ct.length;nt<dt;nt++)Y[nt]=e.COLOR_ATTACHMENT0+nt;Y.length=ct.length,ht=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,ht=!0);ht&&e.drawBuffers(Y)}function Ht(N){return E!==N?(e.useProgram(N),E=N,!0):!1}const Ut={[us]:e.FUNC_ADD,[eb]:e.FUNC_SUBTRACT,[nb]:e.FUNC_REVERSE_SUBTRACT};Ut[ib]=e.MIN,Ut[ab]=e.MAX;const Gt={[sb]:e.ZERO,[rb]:e.ONE,[ob]:e.SRC_COLOR,[rd]:e.SRC_ALPHA,[db]:e.SRC_ALPHA_SATURATE,[fb]:e.DST_COLOR,[cb]:e.DST_ALPHA,[lb]:e.ONE_MINUS_SRC_COLOR,[od]:e.ONE_MINUS_SRC_ALPHA,[hb]:e.ONE_MINUS_DST_COLOR,[ub]:e.ONE_MINUS_DST_ALPHA,[pb]:e.CONSTANT_COLOR,[mb]:e.ONE_MINUS_CONSTANT_COLOR,[gb]:e.CONSTANT_ALPHA,[_b]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(N,rt,Y,ht,ct,nt,dt,Dt,pe,re){if(N===na){g===!0&&(wt(e.BLEND),g=!1);return}if(g===!1&&(ut(e.BLEND),g=!0),N!==tb){if(N!==f||re!==D){if((m!==us||C!==us)&&(e.blendEquation(e.FUNC_ADD),m=us,C=us),re)switch(N){case Cr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case uu:e.blendFunc(e.ONE,e.ONE);break;case eg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ng:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ee("WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case uu:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case eg:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",N);break}_=null,S=null,b=null,R=null,v.set(0,0,0),T=0,f=N,D=re}return}ct=ct||rt,nt=nt||Y,dt=dt||ht,(rt!==m||ct!==C)&&(e.blendEquationSeparate(Ut[rt],Ut[ct]),m=rt,C=ct),(Y!==_||ht!==S||nt!==b||dt!==R)&&(e.blendFuncSeparate(Gt[Y],Gt[ht],Gt[nt],Gt[dt]),_=Y,S=ht,b=nt,R=dt),(Dt.equals(v)===!1||pe!==T)&&(e.blendColor(Dt.r,Dt.g,Dt.b,pe),v.copy(Dt),T=pe),f=N,D=!1}function qt(N,rt){N.side===ji?wt(e.CULL_FACE):ut(e.CULL_FACE);let Y=N.side===wn;rt&&(Y=!Y),Be(Y),N.blending===Cr&&N.transparent===!1?ve(na):ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),I(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){w!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),w=N)}function xe(N){N!==QE?(ut(e.CULL_FACE),N!==F&&(N===tg?e.cullFace(e.BACK):N===JE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),F=N}function vn(N){N!==q&&(P&&e.lineWidth(N),q=N)}function I(N,rt,Y){N?(ut(e.POLYGON_OFFSET_FILL),(Q!==rt||z!==Y)&&(Q=rt,z=Y,r.getReversed()&&(rt=-rt),e.polygonOffset(rt,Y))):wt(e.POLYGON_OFFSET_FILL)}function Ne(N){N?ut(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function Zt(N){N===void 0&&(N=e.TEXTURE0+L-1),st!==N&&(e.activeTexture(N),st=N)}function se(N,rt,Y){Y===void 0&&(st===null?Y=e.TEXTURE0+L-1:Y=st);let ht=ot[Y];ht===void 0&&(ht={type:void 0,texture:void 0},ot[Y]=ht),(ht.type!==N||ht.texture!==rt)&&(st!==Y&&(e.activeTexture(Y),st=Y),e.bindTexture(N,rt||mt[N]),ht.type=N,ht.texture=rt)}function pt(){const N=ot[st];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function M(){try{e.texSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function G(){try{e.texSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function at(){try{e.compressedTexSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function lt(){try{e.texStorage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function ft(){try{e.texStorage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function U(){try{e.texImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function B(){try{e.texImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function et(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function $(N,rt){p[N]!==rt&&(e.pixelStorei(N,rt),p[N]=rt)}function j(N){Wt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Wt.copy(N))}function it(N){Lt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Lt.copy(N))}function Et(N,rt){let Y=c.get(rt);Y===void 0&&(Y=new WeakMap,c.set(rt,Y));let ht=Y.get(N);ht===void 0&&(ht=e.getUniformBlockIndex(rt,N.name),Y.set(N,ht))}function yt(N,rt){const ht=c.get(rt).get(N);l.get(rt)!==ht&&(e.uniformBlockBinding(rt,ht,N.__bindingPointIndex),l.set(rt,ht))}function Ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},st=null,ot={},u={},d=new WeakMap,x=[],E=null,g=!1,f=null,m=null,_=null,S=null,C=null,b=null,R=null,v=new Yt(0,0,0),T=0,D=!1,w=null,F=null,q=null,Q=null,z=null,Wt.set(0,0,e.canvas.width,e.canvas.height),Lt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ut,disable:wt,bindFramebuffer:It,drawBuffers:Ct,useProgram:Ht,setBlending:ve,setMaterial:qt,setFlipSided:Be,setCullFace:xe,setLineWidth:vn,setPolygonOffset:I,setScissorTest:Ne,activeTexture:Zt,bindTexture:se,unbindTexture:pt,compressedTexImage2D:Te,compressedTexImage3D:A,texImage2D:U,texImage3D:B,pixelStorei:$,getParameter:et,updateUBOMapping:Et,uniformBlockBinding:yt,texStorage2D:lt,texStorage3D:ft,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:at,scissor:j,viewport:it,reset:Ot}}function M2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,p=new Set;let u;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,M){return x?new OffscreenCanvas(A,M):mu("canvas")}function g(A,M,G){let Z=1;const at=Te(A);if((at.width>G||at.height>G)&&(Z=G/Math.max(at.width,at.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const lt=Math.floor(Z*at.width),ft=Math.floor(Z*at.height);u===void 0&&(u=E(lt,ft));const U=M?E(lt,ft):u;return U.width=lt,U.height=ft,U.getContext("2d").drawImage(A,0,0,lt,ft),Nt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+lt+"x"+ft+")."),U}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function f(A){return A.generateMipmaps}function m(A){e.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(A,M,G,Z,at,lt=!1){if(A!==null){if(e[A]!==void 0)return e[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;Z&&(ft=t.get("EXT_texture_norm16"),ft||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=M;if(M===e.RED&&(G===e.FLOAT&&(U=e.R32F),G===e.HALF_FLOAT&&(U=e.R16F),G===e.UNSIGNED_BYTE&&(U=e.R8),G===e.UNSIGNED_SHORT&&ft&&(U=ft.R16_EXT),G===e.SHORT&&ft&&(U=ft.R16_SNORM_EXT)),M===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.R8UI),G===e.UNSIGNED_SHORT&&(U=e.R16UI),G===e.UNSIGNED_INT&&(U=e.R32UI),G===e.BYTE&&(U=e.R8I),G===e.SHORT&&(U=e.R16I),G===e.INT&&(U=e.R32I)),M===e.RG&&(G===e.FLOAT&&(U=e.RG32F),G===e.HALF_FLOAT&&(U=e.RG16F),G===e.UNSIGNED_BYTE&&(U=e.RG8),G===e.UNSIGNED_SHORT&&ft&&(U=ft.RG16_EXT),G===e.SHORT&&ft&&(U=ft.RG16_SNORM_EXT)),M===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RG8UI),G===e.UNSIGNED_SHORT&&(U=e.RG16UI),G===e.UNSIGNED_INT&&(U=e.RG32UI),G===e.BYTE&&(U=e.RG8I),G===e.SHORT&&(U=e.RG16I),G===e.INT&&(U=e.RG32I)),M===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGB8UI),G===e.UNSIGNED_SHORT&&(U=e.RGB16UI),G===e.UNSIGNED_INT&&(U=e.RGB32UI),G===e.BYTE&&(U=e.RGB8I),G===e.SHORT&&(U=e.RGB16I),G===e.INT&&(U=e.RGB32I)),M===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),G===e.UNSIGNED_INT&&(U=e.RGBA32UI),G===e.BYTE&&(U=e.RGBA8I),G===e.SHORT&&(U=e.RGBA16I),G===e.INT&&(U=e.RGBA32I)),M===e.RGB&&(G===e.UNSIGNED_SHORT&&ft&&(U=ft.RGB16_EXT),G===e.SHORT&&ft&&(U=ft.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),M===e.RGBA){const B=lt?pu:ne.getTransfer(at);G===e.FLOAT&&(U=e.RGBA32F),G===e.HALF_FLOAT&&(U=e.RGBA16F),G===e.UNSIGNED_BYTE&&(U=B===ue?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&ft&&(U=ft.RGBA16_EXT),G===e.SHORT&&ft&&(U=ft.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function C(A,M){let G;return A?M===null||M===Li||M===rl?G=e.DEPTH24_STENCIL8:M===Ri?G=e.DEPTH32F_STENCIL8:M===sl&&(G=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===rl?G=e.DEPTH_COMPONENT24:M===Ri?G=e.DEPTH_COMPONENT32F:M===sl&&(G=e.DEPTH_COMPONENT16),G}function b(A,M){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&p.delete(M)}function v(A){const M=A.target;M.removeEventListener("dispose",v),w(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,Z=d.get(G);if(Z){const at=Z[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&D(A),Object.keys(Z).length===0&&d.delete(G)}i.remove(A)}function D(A){const M=i.get(A);e.deleteTexture(M.__webglTexture);const G=A.source,Z=d.get(G);delete Z[M.__cacheKey],r.memory.textures--}function w(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let at=0;at<M.__webglFramebuffer[Z].length;at++)e.deleteFramebuffer(M.__webglFramebuffer[Z][at]);else e.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)e.deleteFramebuffer(M.__webglFramebuffer[Z]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=A.textures;for(let Z=0,at=G.length;Z<at;Z++){const lt=i.get(G[Z]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(G[Z])}i.remove(A)}let F=0;function q(){F=0}function Q(){return F}function z(A){F=A}function L(){const A=F;return A>=a.maxTextures&&Nt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),F+=1,A}function P(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const G=i.get(A);if(A.isVideoTexture&&se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const Z=A.image;if(Z===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+M)}function J(A,M){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){wt(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+M)}function st(A,M){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){wt(G,A,M);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+M)}function ot(A,M){const G=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&G.__version!==A.version){It(G,A,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+M)}const xt={[md]:e.REPEAT,[Ji]:e.CLAMP_TO_EDGE,[gd]:e.MIRRORED_REPEAT},kt={[ln]:e.NEAREST,[Sb]:e.NEAREST_MIPMAP_NEAREST,[Gl]:e.NEAREST_MIPMAP_LINEAR,[gn]:e.LINEAR,[Lf]:e.LINEAR_MIPMAP_NEAREST,[hs]:e.LINEAR_MIPMAP_LINEAR},Wt={[Eb]:e.NEVER,[Cb]:e.ALWAYS,[bb]:e.LESS,[om]:e.LEQUAL,[Tb]:e.EQUAL,[lm]:e.GEQUAL,[Ab]:e.GREATER,[Rb]:e.NOTEQUAL};function Lt(A,M){if(M.type===Ri&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===Lf||M.magFilter===Gl||M.magFilter===hs||M.minFilter===gn||M.minFilter===Lf||M.minFilter===Gl||M.minFilter===hs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,xt[M.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,xt[M.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,xt[M.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,kt[M.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,kt[M.minFilter]),M.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==Gl&&M.minFilter!==hs||M.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function tt(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let at=d.get(Z);at===void 0&&(at={},d.set(Z,at));const lt=P(M);if(lt!==A.__cacheKey){at[lt]===void 0&&(at[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),at[lt].usedTimes++;const ft=at[A.__cacheKey];ft!==void 0&&(at[A.__cacheKey].usedTimes--,ft.usedTimes===0&&D(M)),A.__cacheKey=lt,A.__webglTexture=at[lt].texture}return G}function mt(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ut(A,M,G,Z){const lt=A.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,G,Z,M.data);else{lt.sort(($,j)=>$.start-j.start);let ft=0;for(let $=1;$<lt.length;$++){const j=lt[ft],it=lt[$],Et=j.start+j.count,yt=mt(it.start,M.width,4),Ot=mt(j.start,M.width,4);it.start<=Et+1&&yt===Ot&&mt(it.start+it.count-1,M.width,4)===yt?j.count=Math.max(j.count,it.start+it.count-j.start):(++ft,lt[ft]=it)}lt.length=ft+1;const U=n.getParameter(e.UNPACK_ROW_LENGTH),B=n.getParameter(e.UNPACK_SKIP_PIXELS),et=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let $=0,j=lt.length;$<j;$++){const it=lt[$],Et=Math.floor(it.start/4),yt=Math.ceil(it.count/4),Ot=Et%M.width,N=Math.floor(Et/M.width),rt=yt,Y=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Ot,N,rt,Y,G,Z,M.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,U),n.pixelStorei(e.UNPACK_SKIP_PIXELS,B),n.pixelStorei(e.UNPACK_SKIP_ROWS,et)}}function wt(A,M,G){let Z=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=e.TEXTURE_3D);const at=tt(A,M),lt=M.source;n.bindTexture(Z,A.__webglTexture,e.TEXTURE0+G);const ft=i.get(lt);if(lt.version!==ft.__version||at===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Y=ne.getPrimaries(ne.workingColorSpace),ht=M.colorSpace===wa?null:ne.getPrimaries(M.colorSpace),ct=M.colorSpace===wa||Y===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment);let B=g(M.image,!1,a.maxTextureSize);B=pt(M,B);const et=s.convert(M.format,M.colorSpace),$=s.convert(M.type);let j=S(M.internalFormat,et,$,M.normalized,M.colorSpace,M.isVideoTexture);Lt(Z,M);let it;const Et=M.mipmaps,yt=M.isVideoTexture!==!0,Ot=ft.__version===void 0||at===!0,N=lt.dataReady,rt=b(M,B);if(M.isDepthTexture)j=C(M.format===ds,M.type),Ot&&(yt?n.texStorage2D(e.TEXTURE_2D,1,j,B.width,B.height):n.texImage2D(e.TEXTURE_2D,0,j,B.width,B.height,0,et,$,null));else if(M.isDataTexture)if(Et.length>0){yt&&Ot&&n.texStorage2D(e.TEXTURE_2D,rt,j,Et[0].width,Et[0].height);for(let Y=0,ht=Et.length;Y<ht;Y++)it=Et[Y],yt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,et,$,it.data):n.texImage2D(e.TEXTURE_2D,Y,j,it.width,it.height,0,et,$,it.data);M.generateMipmaps=!1}else yt?(Ot&&n.texStorage2D(e.TEXTURE_2D,rt,j,B.width,B.height),N&&ut(M,B,et,$)):n.texImage2D(e.TEXTURE_2D,0,j,B.width,B.height,0,et,$,B.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){yt&&Ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,j,Et[0].width,Et[0].height,B.depth);for(let Y=0,ht=Et.length;Y<ht;Y++)if(it=Et[Y],M.format!==_i)if(et!==null)if(yt){if(N)if(M.layerUpdates.size>0){const ct=Og(it.width,it.height,M.format,M.type);for(const nt of M.layerUpdates){const dt=it.data.subarray(nt*ct/it.data.BYTES_PER_ELEMENT,(nt+1)*ct/it.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,nt,it.width,it.height,1,et,dt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,B.depth,et,it.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,j,it.width,it.height,B.depth,0,it.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,B.depth,et,$,it.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Y,j,it.width,it.height,B.depth,0,et,$,it.data)}else{yt&&Ot&&n.texStorage2D(e.TEXTURE_2D,rt,j,Et[0].width,Et[0].height);for(let Y=0,ht=Et.length;Y<ht;Y++)it=Et[Y],M.format!==_i?et!==null?yt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,et,it.data):n.compressedTexImage2D(e.TEXTURE_2D,Y,j,it.width,it.height,0,it.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,et,$,it.data):n.texImage2D(e.TEXTURE_2D,Y,j,it.width,it.height,0,et,$,it.data)}else if(M.isDataArrayTexture)if(yt){if(Ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,j,B.width,B.height,B.depth),N)if(M.layerUpdates.size>0){const Y=Og(B.width,B.height,M.format,M.type);for(const ht of M.layerUpdates){const ct=B.data.subarray(ht*Y/B.data.BYTES_PER_ELEMENT,(ht+1)*Y/B.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,B.width,B.height,1,et,$,ct)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,et,$,B.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,j,B.width,B.height,B.depth,0,et,$,B.data);else if(M.isData3DTexture)yt?(Ot&&n.texStorage3D(e.TEXTURE_3D,rt,j,B.width,B.height,B.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,et,$,B.data)):n.texImage3D(e.TEXTURE_3D,0,j,B.width,B.height,B.depth,0,et,$,B.data);else if(M.isFramebufferTexture){if(Ot)if(yt)n.texStorage2D(e.TEXTURE_2D,rt,j,B.width,B.height);else{let Y=B.width,ht=B.height;for(let ct=0;ct<rt;ct++)n.texImage2D(e.TEXTURE_2D,ct,j,Y,ht,0,et,$,null),Y>>=1,ht>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in e){const Y=e.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),B.parentNode!==Y){Y.appendChild(B),p.add(M),Y.onpaint=Dt=>{const pe=Dt.changedElements;for(const re of p)pe.includes(re.image)&&(re.needsUpdate=!0)},Y.requestPaint();return}const ht=0,ct=e.RGBA,nt=e.RGBA,dt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,ht,ct,nt,dt,B),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Et.length>0){if(yt&&Ot){const Y=Te(Et[0]);n.texStorage2D(e.TEXTURE_2D,rt,j,Y.width,Y.height)}for(let Y=0,ht=Et.length;Y<ht;Y++)it=Et[Y],yt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,et,$,it):n.texImage2D(e.TEXTURE_2D,Y,j,et,$,it);M.generateMipmaps=!1}else if(yt){if(Ot){const Y=Te(B);n.texStorage2D(e.TEXTURE_2D,rt,j,Y.width,Y.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,et,$,B)}else n.texImage2D(e.TEXTURE_2D,0,j,et,$,B);f(M)&&m(Z),ft.__version=lt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function It(A,M,G){if(M.image.length!==6)return;const Z=tt(A,M),at=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+G);const lt=i.get(at);if(at.version!==lt.__version||Z===!0){n.activeTexture(e.TEXTURE0+G);const ft=ne.getPrimaries(ne.workingColorSpace),U=M.colorSpace===wa?null:ne.getPrimaries(M.colorSpace),B=M.colorSpace===wa||ft===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const et=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!et&&!$?j[nt]=g(M.image[nt],!0,a.maxCubemapSize):j[nt]=$?M.image[nt].image:M.image[nt],j[nt]=pt(M,j[nt]);const it=j[0],Et=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),Ot=S(M.internalFormat,Et,yt,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,rt=lt.__version===void 0||Z===!0,Y=at.dataReady;let ht=b(M,it);Lt(e.TEXTURE_CUBE_MAP,M);let ct;if(et){N&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Ot,it.width,it.height);for(let nt=0;nt<6;nt++){ct=j[nt].mipmaps;for(let dt=0;dt<ct.length;dt++){const Dt=ct[dt];M.format!==_i?Et!==null?N?Y&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,0,0,Dt.width,Dt.height,Et,Dt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,Ot,Dt.width,Dt.height,0,Dt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,0,0,Dt.width,Dt.height,Et,yt,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,Ot,Dt.width,Dt.height,0,Et,yt,Dt.data)}}}else{if(ct=M.mipmaps,N&&rt){ct.length>0&&ht++;const nt=Te(j[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if($){N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,Et,yt,j[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,j[nt].width,j[nt].height,0,Et,yt,j[nt].data);for(let dt=0;dt<ct.length;dt++){const pe=ct[dt].image[nt].image;N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,0,0,pe.width,pe.height,Et,yt,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,Ot,pe.width,pe.height,0,Et,yt,pe.data)}}else{N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et,yt,j[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Et,yt,j[nt]);for(let dt=0;dt<ct.length;dt++){const Dt=ct[dt];N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,0,0,Et,yt,Dt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,Ot,Et,yt,Dt.image[nt])}}}f(M)&&m(e.TEXTURE_CUBE_MAP),lt.__version=at.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ct(A,M,G,Z,at,lt){const ft=s.convert(G.format,G.colorSpace),U=s.convert(G.type),B=S(G.internalFormat,ft,U,G.normalized,G.colorSpace),et=i.get(M),$=i.get(G);if($.__renderTarget=M,!et.__hasExternalTextures){const j=Math.max(1,M.width>>lt),it=Math.max(1,M.height>>lt);at===e.TEXTURE_3D||at===e.TEXTURE_2D_ARRAY?n.texImage3D(at,lt,B,j,it,M.depth,0,ft,U,null):n.texImage2D(at,lt,B,j,it,0,ft,U,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Zt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,at,$.__webglTexture,0,Ne(M)):(at===e.TEXTURE_2D||at>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,at,$.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(A,M,G){if(e.bindRenderbuffer(e.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,at=Z&&Z.isDepthTexture?Z.type:null,lt=C(M.stencilBuffer,at),ft=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Zt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(M),lt,M.width,M.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(M),lt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,lt,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,A)}else{const Z=M.textures;for(let at=0;at<Z.length;at++){const lt=Z[at],ft=s.convert(lt.format,lt.colorSpace),U=s.convert(lt.type),B=S(lt.internalFormat,ft,U,lt.normalized,lt.colorSpace);Zt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(M),B,M.width,M.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(M),B,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,B,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ut(A,M,G){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=i.get(M.depthTexture);if(at.__renderTarget=M,(!at.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(at.__webglInit===void 0&&(at.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),at.__webglTexture===void 0){at.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,at.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,M.depthTexture);const et=s.convert(M.depthTexture.format),$=s.convert(M.depthTexture.type);let j;M.depthTexture.format===fa?j=e.DEPTH_COMPONENT24:M.depthTexture.format===ds&&(j=e.DEPTH24_STENCIL8);for(let it=0;it<6;it++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,j,M.width,M.height,0,et,$,null)}}else W(M.depthTexture,0);const lt=at.__webglTexture,ft=Ne(M),U=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,B=M.depthTexture.format===ds?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(M.depthTexture.format===fa)Zt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,B,U,lt,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,B,U,lt,0);else if(M.depthTexture.format===ds)Zt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,B,U,lt,0,ft):e.framebufferTexture2D(e.FRAMEBUFFER,B,U,lt,0);else throw new Error("Unknown depthTexture format")}function Gt(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",at)};Z.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Ut(M.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?Ut(M.__webglFramebuffer[0],A,0):Ut(M.__webglFramebuffer,A,0)}else if(G){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=e.createRenderbuffer(),Ht(M.__webglDepthbuffer[Z],A,!1);else{const at=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,lt)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Ht(M.__webglDepthbuffer,A,!1);else{const at=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(A,M,G){const Z=i.get(A);M!==void 0&&Ct(Z.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Gt(A)}function qt(A){const M=A.texture,G=i.get(A),Z=i.get(M);A.addEventListener("dispose",v);const at=A.textures,lt=A.isWebGLCubeRenderTarget===!0,ft=at.length>1;if(ft||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=M.version,r.memory.textures++),lt){G.__webglFramebuffer=[];for(let U=0;U<6;U++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[U]=[];for(let B=0;B<M.mipmaps.length;B++)G.__webglFramebuffer[U][B]=e.createFramebuffer()}else G.__webglFramebuffer[U]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let U=0;U<M.mipmaps.length;U++)G.__webglFramebuffer[U]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(ft)for(let U=0,B=at.length;U<B;U++){const et=i.get(at[U]);et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Zt(A)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let U=0;U<at.length;U++){const B=at[U];G.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[U]);const et=s.convert(B.format,B.colorSpace),$=s.convert(B.type),j=S(B.internalFormat,et,$,B.normalized,B.colorSpace,A.isXRRenderTarget===!0),it=Ne(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,j,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,G.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,M);for(let U=0;U<6;U++)if(M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)Ct(G.__webglFramebuffer[U][B],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,B);else Ct(G.__webglFramebuffer[U],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);f(M)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ft){for(let U=0,B=at.length;U<B;U++){const et=at[U],$=i.get(et);let j=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(j,$.__webglTexture),Lt(j,et),Ct(G.__webglFramebuffer,A,et,e.COLOR_ATTACHMENT0+U,j,0),f(et)&&m(j)}n.unbindTexture()}else{let U=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(U=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(U,Z.__webglTexture),Lt(U,M),M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)Ct(G.__webglFramebuffer[B],A,M,e.COLOR_ATTACHMENT0,U,B);else Ct(G.__webglFramebuffer,A,M,e.COLOR_ATTACHMENT0,U,0);f(M)&&m(U),n.unbindTexture()}A.depthBuffer&&Gt(A)}function Be(A){const M=A.textures;for(let G=0,Z=M.length;G<Z;G++){const at=M[G];if(f(at)){const lt=_(A),ft=i.get(at).__webglTexture;n.bindTexture(lt,ft),m(lt),n.unbindTexture()}}}const xe=[],vn=[];function I(A){if(A.samples>0){if(Zt(A)===!1){const M=A.textures,G=A.width,Z=A.height;let at=e.COLOR_BUFFER_BIT;const lt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=i.get(A),U=M.length>1;if(U)for(let et=0;et<M.length;et++)n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+et,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+et,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const B=A.texture.mipmaps;B&&B.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let et=0;et<M.length;et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ft.__webglColorRenderbuffer[et]);const $=i.get(M[et]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,G,Z,0,0,G,Z,at,e.NEAREST),l===!0&&(xe.length=0,vn.length=0,xe.push(e.COLOR_ATTACHMENT0+et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(lt),vn.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,vn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let et=0;et<M.length;et++){n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+et,e.RENDERBUFFER,ft.__webglColorRenderbuffer[et]);const $=i.get(M[et]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+et,e.TEXTURE_2D,$,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function Ne(A){return Math.min(a.maxSamples,A.samples)}function Zt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function pt(A,M){const G=A.colorSpace,Z=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==du&&G!==wa&&(ne.getTransfer(G)===ue?(Z!==_i||at!==Gn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",G)),M}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.getTextureUnits=Q,this.setTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=st,this.setTextureCube=ot,this.rebindTextures=ve,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function y2(e,t){function n(i,a=wa){let s;const r=ne.getTransfer(a);if(i===Gn)return e.UNSIGNED_BYTE;if(i===nm)return e.UNSIGNED_SHORT_4_4_4_4;if(i===im)return e.UNSIGNED_SHORT_5_5_5_1;if(i===xS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===SS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_S)return e.BYTE;if(i===vS)return e.SHORT;if(i===sl)return e.UNSIGNED_SHORT;if(i===em)return e.INT;if(i===Li)return e.UNSIGNED_INT;if(i===Ri)return e.FLOAT;if(i===ua)return e.HALF_FLOAT;if(i===MS)return e.ALPHA;if(i===yS)return e.RGB;if(i===_i)return e.RGBA;if(i===fa)return e.DEPTH_COMPONENT;if(i===ds)return e.DEPTH_STENCIL;if(i===ES)return e.RED;if(i===am)return e.RED_INTEGER;if(i===Ts)return e.RG;if(i===sm)return e.RG_INTEGER;if(i===rm)return e.RGBA_INTEGER;if(i===Dc||i===Uc||i===Lc||i===Nc)if(r===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===vd||i===xd||i===Sd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===yd||i===Ed||i===bd||i===Td||i===fu||i===Ad)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===yd)return r===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bd)return s.COMPRESSED_R11_EAC;if(i===Td)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fu)return s.COMPRESSED_RG11_EAC;if(i===Ad)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rd||i===Cd||i===wd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===Id||i===zd||i===Bd||i===Fd||i===Hd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===Vd||i===Xd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Gd)return r===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kd||i===Wd||i===hu||i===Yd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===kd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const E2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new LS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new vi({vertexShader:E2,fragmentShader:b2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mn(new yl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A2 extends Us{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,x=null;const E=typeof XRWebGLBinding<"u",g=new T2,f={},m=n.getContextAttributes();let _=null,S=null;const C=[],b=[],R=new Bt;let v=null;const T=new Fn;T.viewport=new ze;const D=new Fn;D.viewport=new ze;const w=[T,D],F=new IT;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=C[tt];return mt===void 0&&(mt=new Bf,C[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=C[tt];return mt===void 0&&(mt=new Bf,C[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=C[tt];return mt===void 0&&(mt=new Bf,C[tt]=mt),mt.getHandSpace()};function z(tt){const mt=b.indexOf(tt.inputSource);if(mt===-1)return;const ut=C[mt];ut!==void 0&&(ut.update(tt.inputSource,tt.frame,c||r),ut.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",P);for(let tt=0;tt<C.length;tt++){const mt=b[tt];mt!==null&&(b[tt]=null,C[tt].disconnect(mt))}q=null,Q=null,g.reset();for(const tt in f)delete f[tt];t.setRenderTarget(_),d=null,u=null,p=null,a=null,S=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(tt){if(a=tt,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",L),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,wt=null,It=null;m.depth&&(It=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ut=m.stencil?ds:fa,wt=m.stencil?rl:Li);const Ct={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ct),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ui(u.textureWidth,u.textureHeight,{format:_i,type:Gn,depthTexture:new Xr(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,ut),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ui(d.framebufferWidth,d.framebufferHeight,{format:_i,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Lt.setContext(a),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P(tt){for(let mt=0;mt<tt.removed.length;mt++){const ut=tt.removed[mt],wt=b.indexOf(ut);wt>=0&&(b[wt]=null,C[wt].disconnect(ut))}for(let mt=0;mt<tt.added.length;mt++){const ut=tt.added[mt];let wt=b.indexOf(ut);if(wt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=b.length){b.push(ut),wt=Ct;break}else if(b[Ct]===null){b[Ct]=ut,wt=Ct;break}if(wt===-1)break}const It=C[wt];It&&It.connect(ut)}}const W=new O,J=new O;function st(tt,mt,ut){W.setFromMatrixPosition(mt.matrixWorld),J.setFromMatrixPosition(ut.matrixWorld);const wt=W.distanceTo(J),It=mt.projectionMatrix.elements,Ct=ut.projectionMatrix.elements,Ht=It[14]/(It[10]-1),Ut=It[14]/(It[10]+1),Gt=(It[9]+1)/It[5],ve=(It[9]-1)/It[5],qt=(It[8]-1)/It[0],Be=(Ct[8]+1)/Ct[0],xe=Ht*qt,vn=Ht*Be,I=wt/(-qt+Be),Ne=I*-qt;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ne),tt.translateZ(I),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Zt=Ht+I,se=Ut+I,pt=xe-Ne,Te=vn+(wt-Ne),A=Gt*Ut/se*Zt,M=ve*Ut/se*Zt;tt.projectionMatrix.makePerspective(pt,Te,A,M,Zt,se),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ot(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(a===null)return;let mt=tt.near,ut=tt.far;g.texture!==null&&(g.depthNear>0&&(mt=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),F.near=D.near=T.near=mt,F.far=D.far=T.far=ut,(q!==F.near||Q!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,Q=F.far),F.layers.mask=tt.layers.mask|6,T.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const wt=tt.parent,It=F.cameras;ot(F,wt);for(let Ct=0;Ct<It.length;Ct++)ot(It[Ct],wt);It.length===2?st(F,T,D):F.projectionMatrix.copy(T.projectionMatrix),xt(tt,F,wt)};function xt(tt,mt,ut){ut===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(ut.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ll*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(tt){return f[tt]};let kt=null;function Wt(tt,mt){if(h=mt.getViewerPose(c||r),x=mt,h!==null){const ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let wt=!1;ut.length!==F.cameras.length&&(F.cameras.length=0,wt=!0);for(let Ut=0;Ut<ut.length;Ut++){const Gt=ut[Ut];let ve=null;if(d!==null)ve=d.getViewport(Gt);else{const Be=p.getViewSubImage(u,Gt);ve=Be.viewport,Ut===0&&(t.setRenderTargetTextures(S,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(S))}let qt=w[Ut];qt===void 0&&(qt=new Fn,qt.layers.enable(Ut),qt.viewport=new ze,w[Ut]=qt),qt.matrix.fromArray(Gt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Gt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ve.x,ve.y,ve.width,ve.height),Ut===0&&(F.matrix.copy(qt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),wt===!0&&F.cameras.push(qt)}const It=a.enabledFeatures;if(It&&It.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Ut=p.getDepthInformation(ut[0]);Ut&&Ut.isValid&&Ut.texture&&g.init(Ut,a.renderState)}if(It&&It.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let Ut=0;Ut<ut.length;Ut++){const Gt=ut[Ut].camera;if(Gt){let ve=f[Gt];ve||(ve=new LS,f[Gt]=ve);const qt=p.getCameraImage(Gt);ve.sourceTexture=qt}}}}for(let ut=0;ut<C.length;ut++){const wt=b[ut],It=C[ut];wt!==null&&It!==void 0&&It.update(wt,mt,c||r)}kt&&kt(tt,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),x=null}const Lt=new zS;Lt.setAnimationLoop(Wt),this.setAnimationLoop=function(tt){kt=tt},this.dispose=function(){}}}const R2=new Le,kS=new zt;kS.set(-1,0,0,0,1,0,0,0,1);function C2(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,NS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===wn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===wn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,S=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(R2.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function w2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=a[m.id];S===void 0&&(x(m),S=h(m),a[m.id]=S,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function h(m){const _=p();m.__bindingPointIndex=_;const S=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],S=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=S.length;b<R;b++){const v=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,D=v.length;T<D;T++){const w=v[T];if(d(w,b,T,C)===!0){const F=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let Q=0;for(let z=0;z<q.length;z++){const L=q[z],P=E(L);typeof L=="number"||typeof L=="boolean"?(w.__data[0]=L,e.bufferSubData(e.UNIFORM_BUFFER,F+Q,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=0,w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=0,w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=0):ArrayBuffer.isView(L)?w.__data.set(new L.constructor(L.buffer,L.byteOffset,w.__data.length)):(L.toArray(w.__data,Q),Q+=P.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,_,S,C){const b=m.value,R=_+"_"+S;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const v=C[R];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function x(m){const _=m.uniforms;let S=0;const C=16;for(let R=0,v=_.length;R<v;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,w=T.length;D<w;D++){const F=T[D],q=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,z=q.length;Q<z;Q++){const L=q[Q],P=E(L),W=S%C,J=W%P.boundary,st=W+J;S+=J,st!==0&&C-st<P.storage&&(S+=C-st),F.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=P.storage}}}const b=S%C;return b>0&&(S+=C-b),m.__size=S,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const D2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function U2(){return yi===null&&(yi=new gT(D2,16,16,Ts,ua),yi.name="DFG_LUT",yi.minFilter=gn,yi.magFilter=gn,yi.wrapS=Ji,yi.wrapT=Ji,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class L2{constructor(t={}){const{canvas:n=Db(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Gn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=r;const E=d,g=new Set([rm,sm,am]),f=new Set([Gn,Li,sl,rl,nm,im]),m=new Uint32Array(4),_=new Int32Array(4),S=new O;let C=null,b=null;const R=[],v=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let w=!1,F=null;this._outputColorSpace=$n;let q=0,Q=0,z=null,L=-1,P=null;const W=new ze,J=new ze;let st=null;const ot=new Yt(0);let xt=0,kt=n.width,Wt=n.height,Lt=1,tt=null,mt=null;const ut=new ze(0,0,kt,Wt),wt=new ze(0,0,kt,Wt);let It=!1;const Ct=new pm;let Ht=!1,Ut=!1;const Gt=new Le,ve=new O,qt=new ze,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function vn(){return z===null?Lt:1}let I=i;function Ne(y,H){return n.getContext(y,H)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const H="webgl2";if(I=Ne(H,y),I===null)throw Ne(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw ee("WebGLRenderer: "+y.message),y}let Zt,se,pt,Te,A,M,G,Z,at,lt,ft,U,B,et,$,j,it,Et,yt,Ot,N,rt,Y;function ht(){Zt=new UR(I),Zt.init(),N=new y2(I,Zt),se=new ER(I,Zt,t,N),pt=new S2(I,Zt),se.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),Te=new OR(I),A=new r2,M=new M2(I,Zt,pt,A,se,N,Te),G=new DR(D),Z=new BT(I),rt=new MR(I,Z),at=new LR(I,Z,Te,rt),lt=new IR(I,at,Z,rt,Te),Et=new PR(I,se,M),$=new bR(A),ft=new s2(D,G,Zt,se,rt,$),U=new C2(D,A),B=new l2,et=new p2(Zt),it=new SR(D,G,pt,lt,x,l),j=new x2(D,lt,se),Y=new w2(I,Te,se,pt),yt=new yR(I,Zt,Te),Ot=new NR(I,Zt,Te),Te.programs=ft.programs,D.capabilities=se,D.extensions=Zt,D.properties=A,D.renderLists=B,D.shadowMap=j,D.state=pt,D.info=Te}ht(),E!==Gn&&(T=new BR(E,n.width,n.height,a,s));const ct=new A2(D,I);this.xr=ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(y){y!==void 0&&(Lt=y,this.setSize(kt,Wt,!1))},this.getSize=function(y){return y.set(kt,Wt)},this.setSize=function(y,H,k=!0){if(ct.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=y,Wt=H,n.width=Math.floor(y*Lt),n.height=Math.floor(H*Lt),k===!0&&(n.style.width=y+"px",n.style.height=H+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(kt*Lt,Wt*Lt).floor()},this.setDrawingBufferSize=function(y,H,k){kt=y,Wt=H,Lt=k,n.width=Math.floor(y*k),n.height=Math.floor(H*k),this.setViewport(0,0,y,H)},this.setEffects=function(y){if(E===Gn){ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let H=0;H<y.length;H++)if(y[H].isOutputPass===!0){Nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(W)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,H,k,V){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,H,k,V),pt.viewport(W.copy(ut).multiplyScalar(Lt).round())},this.getScissor=function(y){return y.copy(wt)},this.setScissor=function(y,H,k,V){y.isVector4?wt.set(y.x,y.y,y.z,y.w):wt.set(y,H,k,V),pt.scissor(J.copy(wt).multiplyScalar(Lt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(y){pt.setScissorTest(It=y)},this.setOpaqueSort=function(y){tt=y},this.setTransparentSort=function(y){mt=y},this.getClearColor=function(y){return y.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(y=!0,H=!0,k=!0){let V=0;if(y){let X=!1;if(z!==null){const vt=z.texture.format;X=g.has(vt)}if(X){const vt=z.texture.type,Mt=f.has(vt),_t=it.getClearColor(),bt=it.getClearAlpha(),At=_t.r,Vt=_t.g,Kt=_t.b;Mt?(m[0]=At,m[1]=Vt,m[2]=Kt,m[3]=bt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=At,_[1]=Vt,_[2]=Kt,_[3]=bt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}H&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Dt,!1),it.dispose(),B.dispose(),et.dispose(),A.dispose(),G.dispose(),lt.dispose(),rt.dispose(),Y.dispose(),ft.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ce),ct.removeEventListener("sessionend",eo),Pi.stop()};function nt(y){y.preventDefault(),gu("WebGLRenderer: Context Lost."),w=!0}function dt(){gu("WebGLRenderer: Context Restored."),w=!1;const y=Te.autoReset,H=j.enabled,k=j.autoUpdate,V=j.needsUpdate,X=j.type;ht(),Te.autoReset=y,j.enabled=H,j.autoUpdate=k,j.needsUpdate=V,j.type=X}function Dt(y){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pe(y){const H=y.target;H.removeEventListener("dispose",pe),re(H)}function re(y){Zn(y),A.remove(y)}function Zn(y){const H=A.get(y).programs;H!==void 0&&(H.forEach(function(k){ft.releaseProgram(k)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,k,V,X,vt){H===null&&(H=Be);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,_t=YS(y,H,k,V,X);pt.setMaterial(V,Mt);let bt=k.index,At=1;if(V.wireframe===!0){if(bt=at.getWireframeAttribute(k),bt===void 0)return;At=2}const Vt=k.drawRange,Kt=k.attributes.position;let Rt=Vt.start*At,me=(Vt.start+Vt.count)*At;vt!==null&&(Rt=Math.max(Rt,vt.start*At),me=Math.min(me,(vt.start+vt.count)*At)),bt!==null?(Rt=Math.max(Rt,0),me=Math.min(me,bt.count)):Kt!=null&&(Rt=Math.max(Rt,0),me=Math.min(me,Kt.count));const Fe=me-Rt;if(Fe<0||Fe===1/0)return;rt.setup(X,V,_t,k,bt);let Oe,Se=yt;if(bt!==null&&(Oe=Z.get(bt),Se=Ot,Se.setIndex(Oe)),X.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*vn()),Se.setMode(I.LINES)):Se.setMode(I.TRIANGLES);else if(X.isLine){let hn=V.linewidth;hn===void 0&&(hn=1),pt.setLineWidth(hn*vn()),X.isLineSegments?Se.setMode(I.LINES):X.isLineLoop?Se.setMode(I.LINE_LOOP):Se.setMode(I.LINE_STRIP)}else X.isPoints?Se.setMode(I.POINTS):X.isSprite&&Se.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))Se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const hn=X._multiDrawStarts,St=X._multiDrawCounts,On=X._multiDrawCount,ae=bt?Z.get(bt).bytesPerElement:1,Kn=A.get(V).currentProgram.getUniforms();for(let Si=0;Si<On;Si++)Kn.setValue(I,"_gl_DrawID",Si),Se.render(hn[Si]/ae,St[Si])}else if(X.isInstancedMesh)Se.renderInstances(Rt,Fe,X.count);else if(k.isInstancedBufferGeometry){const hn=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,St=Math.min(k.instanceCount,hn);Se.renderInstances(Rt,Fe,St)}else Se.render(Rt,Fe)};function Nn(y,H,k){y.transparent===!0&&y.side===ji&&y.forceSinglePass===!1?(y.side=wn,y.needsUpdate=!0,bl(y,H,k),y.side=Ka,y.needsUpdate=!0,bl(y,H,k),y.side=ji):bl(y,H,k)}this.compile=function(y,H,k=null){k===null&&(k=y),b=et.get(k),b.init(H),v.push(b),k.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),y!==k&&y.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const V=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const vt=X.material;if(vt)if(Array.isArray(vt))for(let Mt=0;Mt<vt.length;Mt++){const _t=vt[Mt];Nn(_t,k,X),V.add(_t)}else Nn(vt,k,X),V.add(vt)}),b=v.pop(),V},this.compileAsync=function(y,H,k=null){const V=this.compile(y,H,k);return new Promise(X=>{function vt(){if(V.forEach(function(Mt){A.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){X(y);return}setTimeout(vt,10)}Zt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ns=null;function De(y){Ns&&Ns(y)}function ce(){Pi.stop()}function eo(){Pi.start()}const Pi=new zS;Pi.setAnimationLoop(De),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(y){Ns=y,ct.setAnimationLoop(y),y===null?Pi.stop():Pi.start()},ct.addEventListener("sessionstart",ce),ct.addEventListener("sessionend",eo),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F!==null&&F.renderStart(y,H);const k=ct.enabled===!0&&ct.isPresenting===!0,V=T!==null&&(z===null||k)&&T.begin(D,z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(H),H=ct.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,H,z),b=et.get(y,v.length),b.init(H),b.state.textureUnits=M.getTextureUnits(),v.push(b),Gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ct.setFromProjectionMatrix(Gt,Ci,H.reversedDepth),Ut=this.localClippingEnabled,Ht=$.init(this.clippingPlanes,Ut),C=B.get(y,R.length),C.init(),R.push(C),ct.enabled===!0&&ct.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Os(Mt,H,-1/0,D.sortObjects)}Os(y,H,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(tt,mt),xe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,xe&&it.addToRenderList(C,y),this.info.render.frame++,Ht===!0&&$.beginShadows();const X=b.state.shadowsArray;if(j.render(X,y,H),Ht===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&T.hasRenderPass())===!1){const Mt=C.opaque,_t=C.transmissive;if(b.setupLights(),H.isArrayCamera){const bt=H.cameras;if(_t.length>0)for(let At=0,Vt=bt.length;At<Vt;At++){const Kt=bt[At];Is(Mt,_t,y,Kt)}xe&&it.render(y);for(let At=0,Vt=bt.length;At<Vt;At++){const Kt=bt[At];Ps(C,y,Kt,Kt.viewport)}}else _t.length>0&&Is(Mt,_t,y,H),xe&&it.render(y),Ps(C,y,H)}z!==null&&Q===0&&(M.updateMultisampleRenderTarget(z),M.updateRenderTargetMipmap(z)),V&&T.end(D),y.isScene===!0&&y.onAfterRender(D,y,H),rt.resetDefaultState(),L=-1,P=null,v.pop(),v.length>0?(b=v[v.length-1],M.setTextureUnits(b.state.textureUnits),Ht===!0&&$.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,F!==null&&F.renderEnd()};function Os(y,H,k,V){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ct.intersectsSprite(y)){V&&qt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);const Mt=lt.update(y),_t=y.material;_t.visible&&C.push(y,Mt,_t,k,qt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ct.intersectsObject(y))){const Mt=lt.update(y),_t=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qt.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),qt.copy(Mt.boundingSphere.center)),qt.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)),Array.isArray(_t)){const bt=Mt.groups;for(let At=0,Vt=bt.length;At<Vt;At++){const Kt=bt[At],Rt=_t[Kt.materialIndex];Rt&&Rt.visible&&C.push(y,Mt,Rt,k,qt.z,Kt)}}else _t.visible&&C.push(y,Mt,_t,k,qt.z,null)}}const vt=y.children;for(let Mt=0,_t=vt.length;Mt<_t;Mt++)Os(vt[Mt],H,k,V)}function Ps(y,H,k,V){const{opaque:X,transmissive:vt,transparent:Mt}=y;b.setupLightsView(k),Ht===!0&&$.setGlobalState(D.clippingPlanes,k),V&&pt.viewport(W.copy(V)),X.length>0&&El(X,H,k),vt.length>0&&El(vt,H,k),Mt.length>0&&El(Mt,H,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Is(y,H,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Rt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Ui(1,1,{generateMipmaps:!0,type:Rt?ua:Gn,minFilter:hs,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const vt=b.state.transmissionRenderTarget[V.id],Mt=V.viewport||W;vt.setSize(Mt.z*D.transmissionResolutionScale,Mt.w*D.transmissionResolutionScale);const _t=D.getRenderTarget(),bt=D.getActiveCubeFace(),At=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(ot),xt=D.getClearAlpha(),xt<1&&D.setClearColor(16777215,.5),D.clear(),xe&&it.render(k);const Vt=D.toneMapping;D.toneMapping=Di;const Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Ht===!0&&$.setGlobalState(D.clippingPlanes,V),El(y,k,V),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let me=0,Fe=H.length;me<Fe;me++){const Oe=H[me],{object:Se,geometry:hn,material:St,group:On}=Oe;if(St.side===ji&&Se.layers.test(V.layers)){const ae=St.side;St.side=wn,St.needsUpdate=!0,ym(Se,k,V,hn,St,On),St.side=ae,St.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt))}D.setRenderTarget(_t,bt,At),D.setClearColor(ot,xt),Kt!==void 0&&(V.viewport=Kt),D.toneMapping=Vt}function El(y,H,k){const V=H.isScene===!0?H.overrideMaterial:null;for(let X=0,vt=y.length;X<vt;X++){const Mt=y[X],{object:_t,geometry:bt,group:At}=Mt;let Vt=Mt.material;Vt.allowOverride===!0&&V!==null&&(Vt=V),_t.layers.test(k.layers)&&ym(_t,H,k,bt,Vt,At)}}function ym(y,H,k,V,X,vt){y.onBeforeRender(D,H,k,V,X,vt),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(D,H,k,V,y,vt),X.transparent===!0&&X.side===ji&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,D.renderBufferDirect(k,H,V,X,y,vt),X.side=Ka,X.needsUpdate=!0,D.renderBufferDirect(k,H,V,X,y,vt),X.side=ji):D.renderBufferDirect(k,H,V,X,y,vt),y.onAfterRender(D,H,k,V,X,vt)}function bl(y,H,k){H.isScene!==!0&&(H=Be);const V=A.get(y),X=b.state.lights,vt=b.state.shadowsArray,Mt=X.state.version,_t=ft.getParameters(y,X.state,vt,H,k,b.state.lightProbeGridArray),bt=ft.getProgramCacheKey(_t);let At=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,V.fog=H.fog;const Vt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=G.get(y.envMap||V.environment,Vt),V.envMapRotation=V.environment!==null&&y.envMap===null?H.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",pe),At=new Map,V.programs=At);let Kt=At.get(bt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===Mt)return bm(y,_t),Kt}else _t.uniforms=ft.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,k,_t),y.onBeforeCompile(_t,D),Kt=ft.acquireProgram(_t,bt),At.set(bt,Kt),V.uniforms=_t.uniforms;const Rt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=$.uniform),bm(y,_t),V.needsLights=jS(y),V.lightsStateVersion=Mt,V.needsLights&&(Rt.ambientLightColor.value=X.state.ambient,Rt.lightProbe.value=X.state.probe,Rt.directionalLights.value=X.state.directional,Rt.directionalLightShadows.value=X.state.directionalShadow,Rt.spotLights.value=X.state.spot,Rt.spotLightShadows.value=X.state.spotShadow,Rt.rectAreaLights.value=X.state.rectArea,Rt.ltc_1.value=X.state.rectAreaLTC1,Rt.ltc_2.value=X.state.rectAreaLTC2,Rt.pointLights.value=X.state.point,Rt.pointLightShadows.value=X.state.pointShadow,Rt.hemisphereLights.value=X.state.hemi,Rt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Rt.spotLightMatrix.value=X.state.spotLightMatrix,Rt.spotLightMap.value=X.state.spotLightMap,Rt.pointShadowMatrix.value=X.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Kt,V.uniformsList=null,Kt}function Em(y){if(y.uniformsList===null){const H=y.currentProgram.getUniforms();y.uniformsList=Oc.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function bm(y,H){const k=A.get(y);k.outputColorSpace=H.outputColorSpace,k.batching=H.batching,k.batchingColor=H.batchingColor,k.instancing=H.instancing,k.instancingColor=H.instancingColor,k.instancingMorph=H.instancingMorph,k.skinning=H.skinning,k.morphTargets=H.morphTargets,k.morphNormals=H.morphNormals,k.morphColors=H.morphColors,k.morphTargetsCount=H.morphTargetsCount,k.numClippingPlanes=H.numClippingPlanes,k.numIntersection=H.numClipIntersection,k.vertexAlphas=H.vertexAlphas,k.vertexTangents=H.vertexTangents,k.toneMapping=H.toneMapping}function WS(y,H){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let k=0,V=y.length;k<V;k++){const X=y[k];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function YS(y,H,k,V,X){H.isScene!==!0&&(H=Be),M.resetTextureUnits();const vt=H.fog,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?H.environment:null,_t=z===null?D.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ne.workingColorSpace,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=G.get(V.envMap||Mt,bt),Vt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Kt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!k.morphAttributes.position,me=!!k.morphAttributes.normal,Fe=!!k.morphAttributes.color;let Oe=Di;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Oe=D.toneMapping);const Se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,hn=Se!==void 0?Se.length:0,St=A.get(V),On=b.state.lights;if(Ht===!0&&(Ut===!0||y!==P)){const Ee=y===P&&V.id===L;$.setState(V,y,Ee)}let ae=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==On.state.version||St.outputColorSpace!==_t||X.isBatchedMesh&&St.batching===!1||!X.isBatchedMesh&&St.batching===!0||X.isBatchedMesh&&St.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&St.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&St.instancing===!1||!X.isInstancedMesh&&St.instancing===!0||X.isSkinnedMesh&&St.skinning===!1||!X.isSkinnedMesh&&St.skinning===!0||X.isInstancedMesh&&St.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&St.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&St.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&St.instancingMorph===!1&&X.morphTexture!==null||St.envMap!==At||V.fog===!0&&St.fog!==vt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==$.numPlanes||St.numIntersection!==$.numIntersection)||St.vertexAlphas!==Vt||St.vertexTangents!==Kt||St.morphTargets!==Rt||St.morphNormals!==me||St.morphColors!==Fe||St.toneMapping!==Oe||St.morphTargetsCount!==hn||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,St.__version=V.version);let Kn=St.currentProgram;ae===!0&&(Kn=bl(V,H,X),F&&V.isNodeMaterial&&F.onUpdateProgram(V,Kn,St));let Si=!1,da=!1,zs=!1;const Me=Kn.getUniforms(),He=St.uniforms;if(pt.useProgram(Kn.program)&&(Si=!0,da=!0,zs=!0),V.id!==L&&(L=V.id,da=!0),St.needsLights){const Ee=WS(b.state.lightProbeGridArray,X);St.lightProbeGrid!==Ee&&(St.lightProbeGrid=Ee,da=!0)}if(Si||P!==y){pt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",y.projectionMatrix),Me.setValue(I,"viewMatrix",y.matrixWorldInverse);const ma=Me.map.cameraPosition;ma!==void 0&&ma.setValue(I,ve.setFromMatrixPosition(y.matrixWorld)),se.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),P!==y&&(P=y,da=!0,zs=!0)}if(St.needsLights&&(On.state.directionalShadowMap.length>0&&Me.setValue(I,"directionalShadowMap",On.state.directionalShadowMap,M),On.state.spotShadowMap.length>0&&Me.setValue(I,"spotShadowMap",On.state.spotShadowMap,M),On.state.pointShadowMap.length>0&&Me.setValue(I,"pointShadowMap",On.state.pointShadowMap,M)),X.isSkinnedMesh){Me.setOptional(I,X,"bindMatrix"),Me.setOptional(I,X,"bindMatrixInverse");const Ee=X.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Me.setValue(I,"boneTexture",Ee.boneTexture,M))}X.isBatchedMesh&&(Me.setOptional(I,X,"batchingTexture"),Me.setValue(I,"batchingTexture",X._matricesTexture,M),Me.setOptional(I,X,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",X._indirectTexture,M),Me.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",X._colorsTexture,M));const pa=k.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&Et.update(X,k,Kn),(da||St.receiveShadow!==X.receiveShadow)&&(St.receiveShadow=X.receiveShadow,Me.setValue(I,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=U2()),da){if(Me.setValue(I,"toneMappingExposure",D.toneMappingExposure),St.needsLights&&qS(He,zs),vt&&V.fog===!0&&U.refreshFogUniforms(He,vt),U.refreshMaterialUniforms(He,V,Lt,Wt,b.state.transmissionRenderTarget[y.id]),St.needsLights&&St.lightProbeGrid){const Ee=St.lightProbeGrid;He.probesSH.value=Ee.texture,He.probesMin.value.copy(Ee.boundingBox.min),He.probesMax.value.copy(Ee.boundingBox.max),He.probesResolution.value.copy(Ee.resolution)}Oc.upload(I,Em(St),He,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Oc.upload(I,Em(St),He,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(I,"center",X.center),Me.setValue(I,"modelViewMatrix",X.modelViewMatrix),Me.setValue(I,"normalMatrix",X.normalMatrix),Me.setValue(I,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const Ee=V.uniformsGroups;for(let ma=0,Bs=Ee.length;ma<Bs;ma++){const Tm=Ee[ma];Y.update(Tm,Kn),Y.bind(Tm,Kn)}}return Kn}function qS(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function jS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,H,k){const V=A.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(y.texture).__webglTexture=H,A.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,H){const k=A.get(y);k.__webglFramebuffer=H,k.__useDefaultFramebuffer=H===void 0};const ZS=I.createFramebuffer();this.setRenderTarget=function(y,H=0,k=0){z=y,q=H,Q=k;let V=null,X=!1,vt=!1;if(y){const _t=A.get(y);if(_t.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(I.FRAMEBUFFER,_t.__webglFramebuffer),W.copy(y.viewport),J.copy(y.scissor),st=y.scissorTest,pt.viewport(W),pt.scissor(J),pt.setScissorTest(st),L=-1;return}else if(_t.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(_t.__hasExternalTextures)M.rebindTextures(y,A.get(y.texture).__webglTexture,A.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Vt=y.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&A.has(Vt)&&(y.width!==Vt.image.width||y.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(vt=!0);const At=A.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[H])?V=At[H][k]:V=At[H],X=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?V=A.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[k]:V=At,W.copy(y.viewport),J.copy(y.scissor),st=y.scissorTest}else W.copy(ut).multiplyScalar(Lt).floor(),J.copy(wt).multiplyScalar(Lt).floor(),st=It;if(k!==0&&(V=ZS),pt.bindFramebuffer(I.FRAMEBUFFER,V)&&pt.drawBuffers(y,V),pt.viewport(W),pt.scissor(J),pt.setScissorTest(st),X){const _t=A.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,k)}else if(vt){const _t=H;for(let bt=0;bt<y.textures.length;bt++){const At=A.get(y.textures[bt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+bt,At.__webglTexture,k,_t)}}else if(y!==null&&k!==0){const _t=A.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,k)}L=-1},this.readRenderTargetPixels=function(y,H,k,V,X,vt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=A.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){pt.bindFramebuffer(I.FRAMEBUFFER,bt);try{const At=y.textures[_t],Vt=At.format,Kt=At.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),!se.textureFormatReadable(Vt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Kt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-V&&k>=0&&k<=y.height-X&&I.readPixels(H,k,V,X,N.convert(Vt),N.convert(Kt),vt)}finally{const At=z!==null?A.get(z).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,H,k,V,X,vt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=A.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt)if(H>=0&&H<=y.width-V&&k>=0&&k<=y.height-X){pt.bindFramebuffer(I.FRAMEBUFFER,bt);const At=y.textures[_t],Vt=At.format,Kt=At.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t),!se.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),I.readPixels(H,k,V,X,N.convert(Vt),N.convert(Kt),0);const me=z!==null?A.get(z).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,me);const Fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ub(I,Fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(Rt),I.deleteSync(Fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,H=null,k=0){const V=Math.pow(2,-k),X=Math.floor(y.image.width*V),vt=Math.floor(y.image.height*V),Mt=H!==null?H.x:0,_t=H!==null?H.y:0;M.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,Mt,_t,X,vt),pt.unbindTexture()};const KS=I.createFramebuffer(),QS=I.createFramebuffer();this.copyTextureToTexture=function(y,H,k=null,V=null,X=0,vt=0){let Mt,_t,bt,At,Vt,Kt,Rt,me,Fe;const Oe=y.isCompressedTexture?y.mipmaps[vt]:y.image;if(k!==null)Mt=k.max.x-k.min.x,_t=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,At=k.min.x,Vt=k.min.y,Kt=k.isBox3?k.min.z:0;else{const He=Math.pow(2,-X);Mt=Math.floor(Oe.width*He),_t=Math.floor(Oe.height*He),y.isDataArrayTexture?bt=Oe.depth:y.isData3DTexture?bt=Math.floor(Oe.depth*He):bt=1,At=0,Vt=0,Kt=0}V!==null?(Rt=V.x,me=V.y,Fe=V.z):(Rt=0,me=0,Fe=0);const Se=N.convert(H.format),hn=N.convert(H.type);let St;H.isData3DTexture?(M.setTexture3D(H,0),St=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(M.setTexture2DArray(H,0),St=I.TEXTURE_2D_ARRAY):(M.setTexture2D(H,0),St=I.TEXTURE_2D),pt.activeTexture(I.TEXTURE0),pt.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),pt.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),pt.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const On=pt.getParameter(I.UNPACK_ROW_LENGTH),ae=pt.getParameter(I.UNPACK_IMAGE_HEIGHT),Kn=pt.getParameter(I.UNPACK_SKIP_PIXELS),Si=pt.getParameter(I.UNPACK_SKIP_ROWS),da=pt.getParameter(I.UNPACK_SKIP_IMAGES);pt.pixelStorei(I.UNPACK_ROW_LENGTH,Oe.width),pt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe.height),pt.pixelStorei(I.UNPACK_SKIP_PIXELS,At),pt.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),pt.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);const zs=y.isDataArrayTexture||y.isData3DTexture,Me=H.isDataArrayTexture||H.isData3DTexture;if(y.isDepthTexture){const He=A.get(y),pa=A.get(H),Ee=A.get(He.__renderTarget),ma=A.get(pa.__renderTarget);pt.bindFramebuffer(I.READ_FRAMEBUFFER,Ee.__webglFramebuffer),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Bs=0;Bs<bt;Bs++)zs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(y).__webglTexture,X,Kt+Bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(H).__webglTexture,vt,Fe+Bs)),I.blitFramebuffer(At,Vt,Mt,_t,Rt,me,Mt,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||A.has(y)){const He=A.get(y),pa=A.get(H);pt.bindFramebuffer(I.READ_FRAMEBUFFER,KS),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,QS);for(let Ee=0;Ee<bt;Ee++)zs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,X,Kt+Ee):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,X),Me?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pa.__webglTexture,vt,Fe+Ee):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pa.__webglTexture,vt),X!==0?I.blitFramebuffer(At,Vt,Mt,_t,Rt,me,Mt,_t,I.COLOR_BUFFER_BIT,I.NEAREST):Me?I.copyTexSubImage3D(St,vt,Rt,me,Fe+Ee,At,Vt,Mt,_t):I.copyTexSubImage2D(St,vt,Rt,me,At,Vt,Mt,_t);pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Me?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(St,vt,Rt,me,Fe,Mt,_t,bt,Se,hn,Oe.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(St,vt,Rt,me,Fe,Mt,_t,bt,Se,Oe.data):I.texSubImage3D(St,vt,Rt,me,Fe,Mt,_t,bt,Se,hn,Oe):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,Rt,me,Mt,_t,Se,hn,Oe.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,Rt,me,Oe.width,Oe.height,Se,Oe.data):I.texSubImage2D(I.TEXTURE_2D,vt,Rt,me,Mt,_t,Se,hn,Oe);pt.pixelStorei(I.UNPACK_ROW_LENGTH,On),pt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae),pt.pixelStorei(I.UNPACK_SKIP_PIXELS,Kn),pt.pixelStorei(I.UNPACK_SKIP_ROWS,Si),pt.pixelStorei(I.UNPACK_SKIP_IMAGES,da),vt===0&&H.generateMipmaps&&I.generateMipmap(St),pt.unbindTexture()},this.initRenderTarget=function(y){A.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){q=0,Q=0,z=null,pt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=ne._getUnpackColorSpace()}}const a_={shrineAirLift:12,startShrineAirLift:10,orbitRadius:10.5,orbitVerticalSpan:2.6,orbitSpeed:.001,orbitHoldDistance:48,perceptionRadius:22,minSpeed:.18,maxSpeed:.38,cohesionWeight:.024,alignmentWeight:.032,separationWeight:.088,targetWeight:.068,noiseWeight:.01,groundClearance:8},s_={intensity:.32,distance:18,decay:2,pulse:.12},N2=()=>{const e=nn.useRef(),[t,n]=nn.useState(0),[i,a]=nn.useState(0),[s,r]=nn.useState(!1),[o,l]=nn.useState(!1),[c,h]=nn.useState(!1),[p,u]=nn.useState(a_),[d,x]=nn.useState(s_),[E,g]=nn.useState(!1),f=nn.useRef(a_),m=nn.useRef(s_),_={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},S={skyTwilight:988970,fogColor:132631,snow:new Yt(2236966),pink:new Yt(16756684),blue:new Yt(10670847),glow:6333946,fire:15680580},C=!1;return nn.useEffect(()=>{f.current=p},[p]),nn.useEffect(()=>{m.current=d},[d]),nn.useEffect(()=>{var v;const b=window.matchMedia("(pointer: coarse)"),R=()=>{h(b.matches||navigator.maxTouchPoints>0)};return R(),(v=b.addEventListener)==null||v.call(b,"change",R),()=>{var T;(T=b.removeEventListener)==null||T.call(b,"change",R)}},[]),nn.useEffect(()=>{if(!e.current)return;let b=0,R=!1;const v=(U,B,et)=>Math.max(B,Math.min(et,U)),T=new lT;T.background=new Yt(S.skyTwilight),T.fog=new hm(S.fogColor,.006);const D=new UT(16777215,1118498,1.1);T.add(D);const w=new Fn(75,window.innerWidth/window.innerHeight,.1,3e3),F=new L2({antialias:!0});F.setSize(window.innerWidth,window.innerHeight),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(F.domElement);const Q=(()=>{const U=document.createElement("canvas");U.width=64,U.height=64;const B=U.getContext("2d"),et=B.createRadialGradient(32,32,0,32,32,32);return et.addColorStop(0,"rgba(255, 255, 255, 1)"),et.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),et.addColorStop(1,"rgba(255, 255, 255, 0)"),B.fillStyle=et,B.fillRect(0,0,64,64),new yT(U)})(),z=(U,B)=>{const et=Math.sin(U*.045)*Math.cos(B*.045)*2.8,$=Math.cos(U*.02+B*.03)*3.5;return et+$},L=new yl(1200,1200,_.segments,_.segments);L.rotateX(-Math.PI/2);const P=L.attributes.position.array,W=[];for(let U=0;U<P.length/3;U++){const B=P[U*3],et=P[U*3+2],$=z(B,et);P[U*3+1]=$;const j=S.snow.clone().multiplyScalar(.4+$*.1);W.push(j.r,j.g,j.b)}L.setAttribute("color",new fn(W,3));const J=new vo({vertexColors:!0,roughness:1}),st=new mn(L,J);T.add(st);const ot={pos:new O(0,10,20),vel:new O,yaw:0,pitch:0},xt=[],kt=[],Wt=[],Lt=(U,B)=>{const et=new wS({map:Q,color:U,transparent:!0,opacity:0,blending:uu}),$=new pT(et);return $.scale.set(B,B,1),$},tt=()=>{const U=[];for(let B=0;B<_.obeliskCount;B++){let et,$;do et=(Math.random()-.5)*_.worldSize,$=(Math.random()-.5)*_.worldSize;while(Math.hypot(et,$)<100||U.some(j=>Math.hypot(j.x-et,j.z-$)<130));U.push({x:et,z:$})}return a(_.obeliskCount),U},mt=(U,B,et=!1)=>{const $=z(U,B),j=new Ro;if(j.position.set(U,$,B),et){const it=new mn(new Wa(3.5,3.5,3.5),new vo({color:16777215,emissive:16777215,emissiveIntensity:2}));it.position.set(0,1.75,0),j.add(it);const Et=Lt(16777215,20);Et.position.y=3,Et.material.opacity=.5,j.add(Et),T.add(j);const yt=new O(U,$+1.75,B),Ot=yt.clone().add(new O(0,f.current.startShrineAirLift,0));xt.push({pillar:null,shrine:it,tipGlow:Et,shrineGlow:Et,pos:new O(U,$,B),tipPos:new O(U,$+5,B),shrinePos:yt,shrineAirPos:Ot,activated:!0})}else{const it=new mn(new Wa(5.5,_.obeliskHeight,5.5),new vo({color:65793}));it.position.y=_.obeliskHeight/2-2,j.add(it);const Et=new mn(new gm(2.5),new vo({color:1118481}));Et.position.y=_.obeliskHeight+2,j.add(Et);const yt=Lt(S.blue,15);yt.position.y=_.obeliskHeight+2,j.add(yt);const Ot=new mn(new Wa(3,3,3),new vo({color:526344}));Ot.position.set(0,1.5,12),Ot.userData={id:xt.length},j.add(Ot),kt.push(Ot);const N=f.current,rt=new O(U,$+1.5,B+12),Y=rt.clone().add(new O(0,N.shrineAirLift,0)),ht=Lt(S.pink,12);ht.position.set(0,3,12),j.add(ht),T.add(j),xt.push({pillar:it,shrine:Ot,tipGlow:yt,shrineGlow:ht,pos:new O(U,$,B),tipPos:new O(U,$+_.obeliskHeight+2,B),shrinePos:rt,shrineAirPos:Y,activated:!1})}};mt(0,0,!0),tt().forEach(U=>mt(U.x,U.z));class ut{constructor(B,et){const $=f.current,j=m.current;this.mesh=new mn(new Mu(.25,8,8),new vu({color:16777215})),this.index=et,this.orbitOffset=Math.random()*Math.PI*2,this.orbitRadius=$.orbitRadius+(Math.random()-.5)*2.4,this.orbitDirection=Math.random()>.5?1:-1,this.turnRate=.032+Math.random()*.018,this.cruiseSpeed=Vs.lerp($.minSpeed,$.maxSpeed,.36+Math.random()*.28),this.speed=this.cruiseSpeed,this.noiseSeed=Math.random()*1e3,this.lightPhase=Math.random()*Math.PI*2;const it=new O((Math.random()-.5)*6.5,(Math.random()-.5)*3,(Math.random()-.5)*6.5);this.pos=B.clone().add(it),this.forward=new O(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),this.vel=this.forward.clone().multiplyScalar(this.speed),this.trailPoints=[];for(let yt=0;yt<_.trailLength;yt++)this.trailPoints.push(this.pos.clone());const Et=new Float32Array(_.trailLength);for(let yt=0;yt<_.trailLength;yt++)Et[yt]=1-yt/_.trailLength;this.trailGeo=new Ln().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new ci(Et,1)),this.trailMat=new vi({transparent:!0,uniforms:{color:{value:new Yt(S.glow)}},vertexShader:`
            attribute float alpha;
            varying float vAlpha;
            void main() {
              vAlpha = alpha;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            varying float vAlpha;
            uniform vec3 color;
            void main() {
              gl_FragColor = vec4(color, vAlpha * 0.8);
            }
          `,blending:uu}),this.line=new MT(this.trailGeo,this.trailMat),this.localLight=new OT(S.blue,j.intensity,j.distance,j.decay),this.localLight.position.copy(this.pos),this.mesh.position.copy(this.pos),T.add(this.mesh),T.add(this.line),T.add(this.localLight)}update(B,et,$){const j=f.current,it=m.current,Et=new O,yt=new O,Ot=new O;let N=0;et.forEach(dt=>{const Dt=this.pos.distanceTo(dt.pos);if(Dt>0&&Dt<j.perceptionRadius){const pe=1-Dt/j.perceptionRadius;Et.add(dt.pos),Ot.add(dt.forward),yt.add(this.pos.clone().sub(dt.pos).normalize().multiplyScalar(pe)),N++}}),N>0&&(Et.divideScalar(N).sub(this.pos).multiplyScalar(j.cohesionWeight),Ot.divideScalar(N).sub(this.forward).multiplyScalar(j.alignmentWeight),yt.divideScalar(N).multiplyScalar(j.separationWeight));let rt=new O;if(B.mode==="orbit"){const dt=$*j.orbitSpeed*this.orbitDirection+this.orbitOffset,Dt=B.center.clone().add(new O(Math.cos(dt)*this.orbitRadius,Math.sin($*.0017+this.orbitOffset)*B.verticalSpan,Math.sin(dt)*this.orbitRadius)),pe=new O(-Math.sin(dt)*this.orbitDirection,0,Math.cos(dt)*this.orbitDirection).multiplyScalar(this.orbitRadius*.4);rt.copy(Dt.add(pe).sub(this.pos)).multiplyScalar(j.targetWeight)}else rt.copy(B.destination).sub(this.pos).multiplyScalar(j.targetWeight);const Y=new O(Math.sin($*.0012+this.noiseSeed),Math.sin($*.0017+this.noiseSeed*1.7)*.35,Math.cos($*.001+this.noiseSeed*.7)).multiplyScalar(j.noiseWeight),ht=this.forward.clone().add(rt).add(Et).add(Ot).add(yt).add(Y);ht.lengthSq()>0&&(ht.normalize(),this.forward.lerp(ht,this.turnRate).normalize());const ct=B.mode==="orbit"?this.cruiseSpeed*.92:this.cruiseSpeed*1.06;this.speed=Vs.lerp(this.speed,v(ct,j.minSpeed,j.maxSpeed),.04),this.vel.copy(this.forward).multiplyScalar(this.speed),this.pos.add(this.vel);const nt=z(this.pos.x,this.pos.z)+j.groundClearance;this.pos.y<nt&&(this.pos.y=Vs.lerp(this.pos.y,nt,.28),this.forward.y=Math.abs(this.forward.y)+.18,this.forward.normalize()),this.mesh.position.copy(this.pos),this.localLight.position.copy(this.pos),this.localLight.intensity=it.intensity*(.82+Math.sin($*.006+this.lightPhase)*it.pulse),this.localLight.distance=it.distance,this.localLight.decay=it.decay;for(let dt=_.trailLength-1;dt>0;dt--)this.trailPoints[dt].copy(this.trailPoints[dt-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}dispose(){T.remove(this.mesh),T.remove(this.line),T.remove(this.localLight),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trailGeo.dispose(),this.trailMat.dispose()}}const wt=[],It=xt[0].shrineAirPos;for(let U=0;U<_.fireflyCount;U++)wt.push(new ut(It,U));const Ct={moveX:0,moveY:0},Ht={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},Ut={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,KeyQ:!1,KeyE:!1},Gt={locked:!1,dragging:!1,lastX:0,lastY:0},ve=.0024,qt=.005,Be=.032,xe=(U,B,et)=>{ot.yaw-=U*et,ot.pitch=v(ot.pitch-B*et,-1.4,1.4)},vn=()=>({moveX:(Ut.KeyD||Ut.ArrowRight?1:0)-(Ut.KeyA||Ut.ArrowLeft?1:0),moveY:(Ut.KeyW||Ut.ArrowUp?1:0)-(Ut.KeyS||Ut.ArrowDown?1:0),turn:(Ut.KeyQ?1:0)-(Ut.KeyE?1:0)}),I=()=>{const U=new Ug;U.setFromCamera(new Bt(0,0),w);const B=U.intersectObjects(kt);if(B.length>0){const et=B[0].object.userData.id,$=xt[et];ot.pos.distanceTo($.pos)<_.interactDist&&!$.activated&&($.activated=!0,$.pillar.material.color.set(16777215),$.pillar.material.emissive.set(16777215),$.pillar.material.emissiveIntensity=2,$.shrine.material.color.set(16777215),$.shrine.material.emissive.set(16777215),$.shrine.material.emissiveIntensity=2,$.tipGlow.material.opacity=.6,$.shrineGlow.material.opacity=.6,n(j=>(j+1===_.obeliskCount&&r(!0),j+1)))}},Ne=U=>{U.preventDefault();for(let B of U.changedTouches)B.clientX<window.innerWidth/2?(Ht.left=B.identifier,Ht.lx=B.clientX,Ht.ly=B.clientY):(Ht.right=B.identifier,Ht.rx=B.clientX,Ht.ry=B.clientY,I())},Zt=U=>{U.preventDefault();for(let B of U.changedTouches)B.identifier===Ht.left?(Ct.moveX=v((B.clientX-Ht.lx)/50,-1,1),Ct.moveY=v(-(B.clientY-Ht.ly)/50,-1,1)):B.identifier===Ht.right&&(xe(B.clientX-Ht.rx,B.clientY-Ht.ry,qt),Ht.rx=B.clientX,Ht.ry=B.clientY)},se=U=>{for(let B of U.changedTouches)B.identifier===Ht.left?(Ht.left=-1,Ct.moveX=0,Ct.moveY=0):B.identifier===Ht.right&&(Ht.right=-1)},pt=U=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(U.code)&&U.preventDefault(),Object.hasOwn(Ut,U.code)&&(Ut[U.code]=!0),U.code==="Space"&&!U.repeat&&I()},Te=U=>{Object.hasOwn(Ut,U.code)&&(Ut[U.code]=!1)},A=()=>{Gt.locked=document.pointerLockElement===F.domElement,Gt.locked||(Gt.dragging=!1)},M=U=>{var B,et;U.button===0&&(Gt.dragging=!0,Gt.lastX=U.clientX,Gt.lastY=U.clientY,(et=(B=F.domElement).requestPointerLock)==null||et.call(B))},G=U=>{if(Gt.locked){xe(U.movementX,U.movementY,ve);return}Gt.dragging&&(xe(U.clientX-Gt.lastX,U.clientY-Gt.lastY,qt),Gt.lastX=U.clientX,Gt.lastY=U.clientY)},Z=()=>{Gt.dragging=!1},at=U=>{U.button===0&&I()},lt=U=>{U.preventDefault()};window.addEventListener("touchstart",Ne,{passive:!1}),window.addEventListener("touchmove",Zt,{passive:!1}),window.addEventListener("touchend",se),window.addEventListener("touchcancel",se),window.addEventListener("keydown",pt),window.addEventListener("keyup",Te),window.addEventListener("mousemove",G),window.addEventListener("mouseup",Z),document.addEventListener("pointerlockchange",A),F.domElement.addEventListener("mousedown",M),F.domElement.addEventListener("click",at),F.domElement.addEventListener("contextmenu",lt);const ft=()=>{if(R)return;b=requestAnimationFrame(ft);const U=vn();U.turn!==0&&(ot.yaw+=U.turn*Be);const B=new O(-Math.sin(ot.yaw),0,-Math.cos(ot.yaw)),et=new O(-Math.cos(ot.yaw),0,Math.sin(ot.yaw)),$=v(Ct.moveX+U.moveX,-1,1),j=v(Ct.moveY+U.moveY,-1,1),it=new O().addScaledVector(B,j).addScaledVector(et,-$);it.length()>0&&ot.pos.addScaledVector(it.normalize(),_.moveSpeed);const Et=z(ot.pos.x,ot.pos.z)+_.playerHeight;ot.vel.y-=_.gravity,ot.pos.y+=ot.vel.y,ot.pos.y<Et&&(ot.pos.y=Et,ot.vel.y=0),w.position.copy(ot.pos),w.rotation.set(ot.pitch,ot.yaw,0,"YXZ");let yt=xt[0],Ot=null,N=1/0;xt.forEach(De=>{if(De.activated)yt=De;else{const ce=ot.pos.distanceTo(De.pos);ce<N&&(N=ce,Ot=De)}});const rt=Date.now(),Y=f.current,ht=ot.pos.distanceTo(yt.shrinePos)<Y.orbitHoldDistance,ct=!Ot||ht?{mode:"orbit",center:yt.shrineAirPos,verticalSpan:Y.orbitVerticalSpan}:{mode:"travel",destination:Ot.tipPos};wt.forEach(De=>De.update(ct,wt,rt));let nt=.6;const dt=L.attributes.color,Dt=L.attributes.position;let pe=!1;xt.forEach(De=>{if(De.activated){if(Math.random()>.86){const ce=new mn(new Mu(.12),new vu({color:S.fire,transparent:!0}));ce.position.copy(De.shrinePos).add(new O((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),ce.userData={v:new O((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},T.add(ce),Wt.push(ce)}nt+=Math.max(0,1-ot.pos.distanceTo(De.pos)/160)*.7,De.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,De.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let ce=0;ce<Dt.count;ce++){const eo=Dt.getX(ce),Pi=Dt.getZ(ce),Os=Math.hypot(eo-De.pos.x,Pi-De.pos.z);if(Os<65){const Ps=Math.max(0,1-Os/65),Is=S.pink.clone().lerp(S.blue,Math.sin(eo*.1)*.5+.5);dt.setXYZ(ce,Vs.lerp(dt.getX(ce),Is.r,Ps*.06),Vs.lerp(dt.getY(ce),Is.g,Ps*.06),Vs.lerp(dt.getZ(ce),Is.b,Ps*.06)),pe=!0}}}}),pe&&(dt.needsUpdate=!0);for(let De=Wt.length-1;De>=0;De--){const ce=Wt[De];ce.position.add(ce.userData.v),ce.userData.l-=.015,ce.material.opacity=ce.userData.l,ce.scale.setScalar(ce.userData.l),ce.userData.l<=0&&(T.remove(ce),Wt.splice(De,1))}const re=new Yt(S.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,nt)));T.background.lerp(re,.04),T.fog.color.lerp(re,.04);const Zn=new Ug;Zn.setFromCamera(new Bt(0,0),w);const Nn=Zn.intersectObjects(kt),Ns=Nn.length>0&&ot.pos.distanceTo(Nn[0].object.parent.position)<_.interactDist;l(De=>De===Ns?De:Ns),F.render(T,w)};return ft(),()=>{var U,B;R=!0,b&&cancelAnimationFrame(b),wt.forEach(et=>et.dispose()),window.removeEventListener("touchstart",Ne),window.removeEventListener("touchmove",Zt),window.removeEventListener("touchend",se),window.removeEventListener("touchcancel",se),window.removeEventListener("keydown",pt),window.removeEventListener("keyup",Te),window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",Z),document.removeEventListener("pointerlockchange",A),F.domElement.removeEventListener("mousedown",M),F.domElement.removeEventListener("click",at),F.domElement.removeEventListener("contextmenu",lt),document.pointerLockElement===F.domElement&&((U=document.exitPointerLock)==null||U.call(document)),(B=e.current)==null||B.removeChild(F.domElement)}},[]),Tt.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[Tt.jsx("div",{ref:e,className:"w-full h-full"}),Tt.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[Tt.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),Tt.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),Tt.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),Tt.jsxs("div",{className:"absolute top-14 right-8 z-20 flex flex-col items-end gap-2",children:[C,Tt.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 text-white flex items-center gap-3",children:[Tt.jsx("span",{className:"text-[9px] opacity-25 tracking-widest",children:"SIGILS"}),Tt.jsxs("span",{className:"text-xl font-bold",children:[t," / ",i]})]}),C]}),Tt.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[Tt.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),Tt.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),Tt.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),Tt.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:Tt.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[c?Tt.jsxs("span",{className:"flex items-center gap-3",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Tt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Tap Right Half"})]}):Tt.jsxs("span",{className:"flex items-center gap-3",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Tt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Space / Click"})]}),Tt.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),Tt.jsx("div",{className:`absolute bottom-8 left-8 right-8 flex ${c?"justify-end":"justify-start"} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`,children:Tt.jsxs("div",{className:`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${c?"text-right":""}`,children:[Tt.jsx("p",{className:"text-white/35",children:c?"Touch":"Desktop"}),c?Tt.jsxs(Tt.Fragment,{children:[Tt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Left Half"})]}),Tt.jsxs("p",{className:"leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Right Half"})]}),Tt.jsxs("p",{className:"leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Tap Right Half"})]})]}):Tt.jsxs(Tt.Fragment,{children:[Tt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"WASD / Arrows"})]}),Tt.jsxs("p",{className:"leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Rotate"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Q / E"})]}),Tt.jsxs("p",{className:"leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Mouse"})]}),Tt.jsxs("p",{className:"leading-relaxed",children:[Tt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Tt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Space / Click"})]})]})]})}),s&&Tt.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[Tt.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),Tt.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),Tt.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),Tt.jsx("button",{onPointerDown:b=>{b.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),Tt.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};KE.createRoot(document.getElementById("root")).render(Tt.jsx(N2,{}));
