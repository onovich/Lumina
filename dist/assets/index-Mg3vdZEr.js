(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function $g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t_={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=Symbol.for("react.transitional.element"),jS=Symbol.for("react.fragment");function e_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:qS,type:e,key:i,ref:t!==void 0?t:null,props:n}}mu.Fragment=jS;mu.jsx=e_;mu.jsxs=e_;t_.exports=mu;var Rt=t_.exports,n_={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=Symbol.for("react.transitional.element"),ZS=Symbol.for("react.portal"),KS=Symbol.for("react.fragment"),QS=Symbol.for("react.strict_mode"),JS=Symbol.for("react.profiler"),$S=Symbol.for("react.consumer"),tM=Symbol.for("react.context"),eM=Symbol.for("react.forward_ref"),nM=Symbol.for("react.suspense"),iM=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),aM=Symbol.for("react.activity"),Em=Symbol.iterator;function sM(e){return e===null||typeof e!="object"?null:(e=Em&&e[Em]||e["@@iterator"],typeof e=="function"?e:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s_=Object.assign,r_={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=r_,this.updater=n||a_}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function o_(){}o_.prototype=Ir.prototype;function jd(e,t,n){this.props=e,this.context=t,this.refs=r_,this.updater=n||a_}var Zd=jd.prototype=new o_;Zd.constructor=jd;s_(Zd,Ir.prototype);Zd.isPureReactComponent=!0;var bm=Array.isArray;function ah(){}var Re={H:null,A:null,T:null,S:null},l_=Object.prototype.hasOwnProperty;function Kd(e,t,n){var i=n.ref;return{$$typeof:qd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function rM(e,t){return Kd(e.type,t,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd}function oM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tm=/\/+/g;function Hu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?oM(""+e.key):t.toString(36)}function lM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ah,ah):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $s(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case qd:case ZS:r=!0;break;case i_:return r=e._init,$s(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Hu(e,0):i,bm(a)?(n="",r!=null&&(n=r.replace(Tm,"$&/")+"/"),$s(a,t,n,"",function(c){return c})):a!=null&&(Qd(a)&&(a=rM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Tm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(bm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Hu(i,l),r+=$s(i,t,n,s,a);else if(l=sM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Hu(i,l++),r+=$s(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return $s(lM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function gl(e,t,n){if(e==null)return e;var i=[],a=0;return $s(e,i,"","",function(s){return t.call(n,s,a++)}),i}function cM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Am=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},uM={map:gl,forEach:function(e,t,n){gl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gl(e,function(){t++}),t},toArray:function(e){return gl(e,function(t){return t})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=aM;It.Children=uM;It.Component=Ir;It.Fragment=KS;It.Profiler=JS;It.PureComponent=jd;It.StrictMode=QS;It.Suspense=nM;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Re.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=s_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!l_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Kd(e.type,a,i)};It.createContext=function(e){return e={$$typeof:tM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:$S,_context:e},e};It.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)l_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Kd(e,s,a)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:eM,render:e}};It.isValidElement=Qd;It.lazy=function(e){return{$$typeof:i_,_payload:{_status:-1,_result:e},_init:cM}};It.memo=function(e,t){return{$$typeof:iM,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=Re.T,n={};Re.T=n;try{var i=e(),a=Re.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ah,Am)}catch(s){Am(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Re.T=t}};It.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};It.use=function(e){return Re.H.use(e)};It.useActionState=function(e,t,n){return Re.H.useActionState(e,t,n)};It.useCallback=function(e,t){return Re.H.useCallback(e,t)};It.useContext=function(e){return Re.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return Re.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return Re.H.useEffect(e,t)};It.useEffectEvent=function(e){return Re.H.useEffectEvent(e)};It.useId=function(){return Re.H.useId()};It.useImperativeHandle=function(e,t,n){return Re.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return Re.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return Re.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return Re.H.useMemo(e,t)};It.useOptimistic=function(e,t){return Re.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return Re.H.useReducer(e,t,n)};It.useRef=function(e){return Re.H.useRef(e)};It.useState=function(e){return Re.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return Re.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return Re.H.useTransition()};It.version="19.2.5";n_.exports=It;var ui=n_.exports;const fM=$g(ui);var c_={exports:{}},gu={},u_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,O){var X=L.length;L.push(O);t:for(;0<X;){var W=X-1>>>1,$=L[W];if(0<a($,O))L[W]=O,L[X]=$,X=W;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],X=L.pop();if(X!==O){L[0]=X;t:for(var W=0,$=L.length,ft=$>>>1;W<ft;){var Tt=2*(W+1)-1,kt=L[Tt],Zt=Tt+1,Nt=L[Zt];if(0>a(kt,X))Zt<$&&0>a(Nt,kt)?(L[W]=Nt,L[Zt]=X,W=Zt):(L[W]=kt,L[Tt]=X,W=Tt);else if(Zt<$&&0>a(Nt,X))L[W]=Nt,L[Zt]=X,W=Zt;else break t}}return O}function a(L,O){var X=L.sortIndex-O.sortIndex;return X!==0?X:L.id-O.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function M(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function w(L){if(E=!1,M(L),!v)if(n(l)!==null)v=!0,A||(A=!0,F());else{var O=n(c);O!==null&&B(w,O.startTime-L)}}var A=!1,R=-1,S=5,T=-1;function D(){return g?!0:!(e.unstable_now()-T<S)}function U(){if(g=!1,A){var L=e.unstable_now();T=L;var O=!0;try{t:{v=!1,E&&(E=!1,m(R),R=-1),p=!0;var X=u;try{e:{for(M(L),h=n(l);h!==null&&!(h.expirationTime>L&&D());){var W=h.callback;if(typeof W=="function"){h.callback=null,u=h.priorityLevel;var $=W(h.expirationTime<=L);if(L=e.unstable_now(),typeof $=="function"){h.callback=$,M(L),O=!0;break e}h===n(l)&&i(l),M(L)}else i(l);h=n(l)}if(h!==null)O=!0;else{var ft=n(c);ft!==null&&B(w,ft.startTime-L),O=!1}}break t}finally{h=null,u=X,p=!1}O=void 0}}finally{O?F():A=!1}}}var F;if(typeof _=="function")F=function(){_(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=U,F=function(){Q.postMessage(null)}}else F=function(){f(U,0)};function B(L,O){R=f(function(){L(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(L){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var X=u;u=O;try{return L()}finally{u=X}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=u;u=L;try{return O()}finally{u=X}},e.unstable_scheduleCallback=function(L,O,X){var W=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?W+X:W):X=W,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=X+$,L={id:d++,callback:O,priorityLevel:L,startTime:X,expirationTime:$,sortIndex:-1},X>W?(L.sortIndex=X,t(c,L),n(l)===null&&L===n(c)&&(E?(m(R),R=-1):E=!0,B(w,X-W))):(L.sortIndex=$,t(l,L),v||p||(v=!0,A||(A=!0,F()))),L},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(L){var O=u;return function(){var X=u;u=O;try{return L.apply(this,arguments)}finally{u=X}}}})(f_);u_.exports=f_;var hM=u_.exports,h_={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dM=ui;function d_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function da(){}var xn={d:{f:da,r:function(){throw Error(d_(522))},D:da,C:da,L:da,m:da,X:da,S:da,M:da},p:0,findDOMNode:null},pM=Symbol.for("react.portal");function mM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Mo=dM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _u(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(d_(299));return mM(e,t,null,n)};Sn.flushSync=function(e){var t=Mo.T,n=xn.p;try{if(Mo.T=null,xn.p=2,e)return e()}finally{Mo.T=t,xn.p=n,xn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=_u(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=_u(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};Sn.requestFormReset=function(e){xn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return Mo.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return Mo.H.useHostTransitionStatus()};Sn.version="19.2.5";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(e){console.error(e)}}p_(),h_.exports=Sn;var gM=h_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=hM,m_=ui,_M=gM;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function __(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rm(e){if(tl(e)!==e)throw Error(K(188))}function vM(e){var t=e.alternate;if(!t){if(t=tl(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Rm(a),e;if(s===i)return Rm(a),t;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function x_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x_(e),t!==null)return t;e=e.sibling}return null}var Ce=Object.assign,xM=Symbol.for("react.element"),_l=Symbol.for("react.transitional.element"),ho=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),M_=Symbol.for("react.consumer"),Yi=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Sa=Symbol.for("react.lazy"),lh=Symbol.for("react.activity"),SM=Symbol.for("react.memo_cache_sentinel"),Cm=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=Cm&&e[Cm]||e["@@iterator"],typeof e=="function"?e:null)}var MM=Symbol.for("react.client.reference");function ch(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===MM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case sh:return"Profiler";case S_:return"StrictMode";case rh:return"Suspense";case oh:return"SuspenseList";case lh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ho:return"Portal";case Yi:return e.displayName||"Context";case M_:return(e._context.displayName||"Context")+".Consumer";case Jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $d:return t=e.displayName||null,t!==null?t:ch(e.type)||"Memo";case Sa:t=e._payload,e=e._init;try{return ch(e(t))}catch{}}return null}var po=Array.isArray,zt=m_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=_M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hs={pending:!1,data:null,method:null,action:null},uh=[],ir=-1;function Di(e){return{current:e}}function $e(e){0>ir||(e.current=uh[ir],uh[ir]=null,ir--)}function be(e,t){ir++,uh[ir]=e.current,e.current=t}var Ai=Di(null),Bo=Di(null),Na=Di(null),Ac=Di(null);function Rc(e,t){switch(be(Na,t),be(Bo,e),be(Ai,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?O0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=O0(t),e=Gx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Ai),be(Ai,e)}function Er(){$e(Ai),$e(Bo),$e(Na)}function fh(e){e.memoizedState!==null&&be(Ac,e);var t=Ai.current,n=Gx(t,e.type);t!==n&&(be(Bo,e),be(Ai,n))}function Cc(e){Bo.current===e&&($e(Ai),$e(Bo)),Ac.current===e&&($e(Ac),jo._currentValue=hs)}var Gu,wm;function is(e){if(Gu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gu=t&&t[1]||"",wm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gu+e+wm}var Vu=!1;function Xu(e,t){if(!e||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var u=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){u=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){u=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?is(n):""}function yM(e,t){switch(e.tag){case 26:case 27:case 5:return is(e.type);case 16:return is("Lazy");case 13:return e.child!==t&&t!==null?is("Suspense Fallback"):is("Suspense");case 19:return is("SuspenseList");case 0:case 15:return Xu(e.type,!1);case 11:return Xu(e.type.render,!1);case 1:return Xu(e.type,!0);case 31:return is("Activity");default:return""}}function Dm(e){try{var t="",n=null;do t+=yM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var hh=Object.prototype.hasOwnProperty,tp=qe.unstable_scheduleCallback,ku=qe.unstable_cancelCallback,EM=qe.unstable_shouldYield,bM=qe.unstable_requestPaint,Bn=qe.unstable_now,TM=qe.unstable_getCurrentPriorityLevel,y_=qe.unstable_ImmediatePriority,E_=qe.unstable_UserBlockingPriority,wc=qe.unstable_NormalPriority,AM=qe.unstable_LowPriority,b_=qe.unstable_IdlePriority,RM=qe.log,CM=qe.unstable_setDisableYieldValue,el=null,In=null;function Ra(e){if(typeof RM=="function"&&CM(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(el,e)}catch{}}var Fn=Math.clz32?Math.clz32:UM,wM=Math.log,DM=Math.LN2;function UM(e){return e>>>=0,e===0?32:31-(wM(e)/DM|0)|0}var vl=256,xl=262144,Sl=4194304;function as(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=as(i):(r&=o,r!==0?a=as(r):n||(n=o&~e,n!==0&&(a=as(n))))):(o=i&~s,o!==0?a=as(o):r!==0?a=as(r):n||(n=i&~e,n!==0&&(a=as(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function nl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function LM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T_(){var e=Sl;return Sl<<=1,!(Sl&62914560)&&(Sl=4194304),e}function Wu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function NM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Fn(n),h=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var p=u[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&A_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function A_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function R_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function C_(e,t){var n=t&-t;return n=n&42?1:ep(n),n&(e.suspendedLanes|t)?0:n}function ep(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function np(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function w_(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Jx(e.type))}function Um(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var Za=Math.random().toString(36).slice(2),en="__reactFiber$"+Za,Rn="__reactProps$"+Za,Fr="__reactContainer$"+Za,dh="__reactEvents$"+Za,OM="__reactListeners$"+Za,PM="__reactHandles$"+Za,Lm="__reactResources$"+Za,al="__reactMarker$"+Za;function ip(e){delete e[en],delete e[Rn],delete e[dh],delete e[OM],delete e[PM]}function ar(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=F0(e);e!==null;){if(n=e[en])return n;e=F0(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[en]||e[Fr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function pr(e){var t=e[Lm];return t||(t=e[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[al]=!0}var D_=new Set,U_={};function bs(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(U_[e]=t,e=0;e<t.length;e++)D_.add(t[e])}var zM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nm={},Om={};function BM(e){return hh.call(Om,e)?!0:hh.call(Nm,e)?!1:zM.test(e)?Om[e]=!0:(Nm[e]=!0,!1)}function sc(e,t,n){if(BM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ml(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ni(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ph(e){if(!e._valueTracker){var t=L_(e)?"checked":"value";e._valueTracker=IM(e,t,""+e[t])}}function N_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=L_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var FM=/[\n"\\]/g;function Qn(e){return e.replace(FM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?gh(e,r,qn(t)):n!=null?gh(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function O_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ph(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ph(e)}function gh(e,t,n){t==="number"&&Dc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function P_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function z_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(po(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ph(e)}function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var HM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||HM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function B_(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Pm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Pm(e,s,t[s])}function ap(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(e){return VM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var _h=null;function sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,gr=null;function zm(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[Rn]||null;t:switch(e=t.stateNode,t.type){case"input":if(mh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Rn]||null;if(!a)throw Error(K(90));mh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&N_(i)}break t;case"textarea":P_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var Yu=!1;function I_(e,t,n){if(Yu)return e(t,n);Yu=!0;try{var i=e(t);return i}finally{if(Yu=!1,(sr!==null||gr!==null)&&(Du(),sr&&(t=sr,e=gr,gr=sr=null,zm(t),e)))for(t=0;t<e.length;t++)zm(e[t])}}function Io(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=!1;if(na)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){vh=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{vh=!1}var Ca=null,rp=null,oc=null;function F_(){if(oc)return oc;var e,t=rp,n=t.length,i,a="value"in Ca?Ca.value:Ca.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return oc=a.slice(e,1<i?1-i:void 0)}function lc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Bm(){return!1}function Cn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:Bm,this.isPropagationStopped=Bm,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),t}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Cn(Ts),sl=Ce({},Ts,{view:0,detail:0}),XM=Cn(sl),qu,ju,Kr,Su=Ce({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(qu=e.screenX-Kr.screenX,ju=e.screenY-Kr.screenY):ju=qu=0,Kr=e),qu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),Im=Cn(Su),kM=Ce({},Su,{dataTransfer:0}),WM=Cn(kM),YM=Ce({},sl,{relatedTarget:0}),Zu=Cn(YM),qM=Ce({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),jM=Cn(qM),ZM=Ce({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),KM=Cn(ZM),QM=Ce({},Ts,{data:0}),Fm=Cn(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function op(){return ey}var ny=Ce({},sl,{key:function(e){if(e.key){var t=JM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$M[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(e){return e.type==="keypress"?lc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iy=Cn(ny),ay=Ce({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Cn(ay),sy=Ce({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),ry=Cn(sy),oy=Ce({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Cn(oy),cy=Ce({},Su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=Cn(cy),fy=Ce({},Ts,{newState:0,oldState:0}),hy=Cn(fy),dy=[9,13,27,32],lp=na&&"CompositionEvent"in window,yo=null;na&&"documentMode"in document&&(yo=document.documentMode);var py=na&&"TextEvent"in window&&!yo,H_=na&&(!lp||yo&&8<yo&&11>=yo),Gm=" ",Vm=!1;function G_(e,t){switch(e){case"keyup":return dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function my(e,t){switch(e){case"compositionend":return V_(t);case"keypress":return t.which!==32?null:(Vm=!0,Gm);case"textInput":return e=t.data,e===Gm&&Vm?null:e;default:return null}}function gy(e,t){if(rr)return e==="compositionend"||!lp&&G_(e,t)?(e=F_(),oc=rp=Ca=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return H_&&t.locale!=="ko"?null:t.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_y[e.type]:t==="textarea"}function X_(e,t,n,i){sr?gr?gr.push(i):gr=[i]:sr=i,t=jc(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Eo=null,Fo=null;function vy(e){Ix(e,0)}function Mu(e){var t=mo(e);if(N_(t))return e}function km(e,t){if(e==="change")return t}var k_=!1;if(na){var Ku;if(na){var Qu="oninput"in document;if(!Qu){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Qu=typeof Wm.oninput=="function"}Ku=Qu}else Ku=!1;k_=Ku&&(!document.documentMode||9<document.documentMode)}function Ym(){Eo&&(Eo.detachEvent("onpropertychange",W_),Fo=Eo=null)}function W_(e){if(e.propertyName==="value"&&Mu(Fo)){var t=[];X_(t,Fo,e,sp(e)),I_(vy,t)}}function xy(e,t,n){e==="focusin"?(Ym(),Eo=t,Fo=n,Eo.attachEvent("onpropertychange",W_)):e==="focusout"&&Ym()}function Sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mu(Fo)}function My(e,t){if(e==="click")return Mu(t)}function yy(e,t){if(e==="input"||e==="change")return Mu(t)}function Ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:Ey;function Ho(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!hh.call(t,a)||!Gn(e[a],t[a]))return!1}return!0}function qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jm(e,t){var n=qm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=qm(n)}}function Y_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Y_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function q_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dc(e.document)}return t}function cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var by=na&&"documentMode"in document&&11>=document.documentMode,or=null,xh=null,bo=null,Sh=!1;function Zm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||or==null||or!==Dc(i)||(i=or,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Ho(bo,i)||(bo=i,i=jc(xh,"onSelect"),0<i.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=or)))}function Ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Ju={},j_={};na&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function As(e){if(Ju[e])return Ju[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in j_)return Ju[e]=t[n];return e}var Z_=As("animationend"),K_=As("animationiteration"),Q_=As("animationstart"),Ty=As("transitionrun"),Ay=As("transitionstart"),Ry=As("transitioncancel"),J_=As("transitionend"),$_=new Map,Mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mh.push("scrollEnd");function mi(e,t){$_.set(e,t),bs(t,[e])}var Uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],cr=0,up=0;function yu(){for(var e=cr,t=up=cr=0;t<e;){var n=Wn[t];Wn[t++]=null;var i=Wn[t];Wn[t++]=null;var a=Wn[t];Wn[t++]=null;var s=Wn[t];if(Wn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&tv(n,a,s)}}function Eu(e,t,n,i){Wn[cr++]=e,Wn[cr++]=t,Wn[cr++]=n,Wn[cr++]=i,up|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fp(e,t,n,i){return Eu(e,t,n,i),Lc(e)}function Rs(e,t){return Eu(e,null,null,t),Lc(e)}function tv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Fn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Lc(e){if(50<No)throw No=0,Vh=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ur={};function Cy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new Cy(e,t,n,i)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ev(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")hp(e)&&(r=1);else if(typeof e=="string")r=NE(e,n,Ai.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case lh:return e=Pn(31,n,t,a),e.elementType=lh,e.lanes=s,e;case nr:return ds(n.children,a,s,t);case S_:r=8,a|=24;break;case sh:return e=Pn(12,n,t,a|2),e.elementType=sh,e.lanes=s,e;case rh:return e=Pn(13,n,t,a),e.elementType=rh,e.lanes=s,e;case oh:return e=Pn(19,n,t,a),e.elementType=oh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yi:r=10;break t;case M_:r=9;break t;case Jd:r=11;break t;case $d:r=14;break t;case Sa:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ds(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function $u(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function nv(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function tf(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Km=new WeakMap;function Jn(e,t){if(typeof e=="object"&&e!==null){var n=Km.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Dm(t)},Km.set(e,t),t)}return{value:e,source:t,stack:Dm(t)}}var fr=[],hr=0,Nc=null,Go=0,jn=[],Zn=0,Xa=null,Mi=1,yi="";function Xi(e,t){fr[hr++]=Go,fr[hr++]=Nc,Nc=e,Go=t}function iv(e,t,n){jn[Zn++]=Mi,jn[Zn++]=yi,jn[Zn++]=Xa,Xa=e;var i=Mi;e=yi;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Mi=1<<32-Fn(t)+a|n<<a|i,yi=s+e}else Mi=1<<s|n<<a|i,yi=e}function dp(e){e.return!==null&&(Xi(e,1),iv(e,1,0))}function pp(e){for(;e===Nc;)Nc=fr[--hr],fr[hr]=null,Go=fr[--hr],fr[hr]=null;for(;e===Xa;)Xa=jn[--Zn],jn[Zn]=null,yi=jn[--Zn],jn[Zn]=null,Mi=jn[--Zn],jn[Zn]=null}function av(e,t){jn[Zn++]=Mi,jn[Zn++]=yi,jn[Zn++]=Xa,Mi=t.id,yi=t.overflow,Xa=e}var nn=null,Ae=null,ae=!1,Oa=null,$n=!1,yh=Error(K(519));function ka(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Jn(t,e)),yh}function Qm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[en]=e,t[Rn]=i,n){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(n=0;n<Yo.length;n++)Qt(Yo[n],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),O_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),z_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Hx(t.textContent,n)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||ka(e,!0)}function Jm(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:nn=nn.return}}function Ns(e){if(e!==nn)return!1;if(!ae)return Jm(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qh(e.type,e.memoizedProps)),n=!n),n&&Ae&&ka(e),Jm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Ae=I0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Ae=I0(e)}else t===27?(t=Ae,Ka(e.type)?(e=Qh,Qh=null,Ae=e):Ae=t):Ae=nn?ii(e.stateNode.nextSibling):null;return!0}function _s(){Ae=nn=null,ae=!1}function ef(){var e=Oa;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Oa=null),e}function Vo(e){Oa===null?Oa=[e]:Oa.push(e)}var Eh=Di(null),Cs=null,ji=null;function ya(e,t,n){be(Eh,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Eh.current,$e(Eh)}function bh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Th(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),bh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(K(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),bh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Gr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=a.type;Gn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Ac.current){if(r=a.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}a=a.return}e!==null&&Th(t,e,n,i),t.flags|=262144}function Oc(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){Cs=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function an(e){return sv(Cs,e)}function El(e,t){return Cs===null&&vs(e),sv(e,t)}function sv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ji===null){if(e===null)throw Error(K(308));ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ji=ji.next=t;return n}var wy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Dy=qe.unstable_scheduleCallback,Uy=qe.unstable_NormalPriority,ke={$$typeof:Yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new wy,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&Dy(Uy,function(){e.controller.abort()})}var To=null,Ah=0,Ar=0,_r=null;function Ly(e,t){if(To===null){var n=To=[];Ah=0,Ar=Hp(),_r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ah++,t.then($m,$m),t}function $m(){if(--Ah===0&&To!==null){_r!==null&&(_r.status="fulfilled");var e=To;To=null,Ar=0,_r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ny(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var t0=zt.S;zt.S=function(e,t){xx=Bn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ly(e,t),t0!==null&&t0(e,t)};var ps=Di(null);function gp(){var e=ps.current;return e!==null?e:Se.pooledCache}function uc(e,t){t===null?be(ps,ps.current):be(ps,t.pool)}function rv(){var e=gp();return e===null?null:{parent:ke._currentValue,pool:e}}var Vr=Error(K(460)),_p=Error(K(474)),bu=Error(K(542)),Pc={then:function(){}};function e0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ov(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qi,qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e;default:if(typeof t.status=="string")t.then(qi,qi);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e}throw ms=t,Vr}}function ss(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ms=n,Vr):n}}var ms=null;function n0(){if(ms===null)throw Error(K(459));var e=ms;return ms=null,e}function i0(e){if(e===Vr||e===bu)throw Error(K(483))}var vr=null,Xo=0;function bl(e){var t=Xo;return Xo+=1,vr===null&&(vr=[]),ov(vr,e,t)}function Qr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tl(e,t){throw t.$$typeof===xM?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=Ki(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,M){return m===null||m.tag!==6?(m=$u(_,f.mode,M),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,M){var w=_.type;return w===nr?d(f,m,_.props.children,M,_.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Sa&&ss(w)===m.type)?(m=a(m,_.props),Qr(m,_),m.return=f,m):(m=cc(_.type,_.key,_.props,null,f.mode,M),Qr(m,_),m.return=f,m)}function c(f,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=tf(_,f.mode,M),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function d(f,m,_,M,w){return m===null||m.tag!==7?(m=ds(_,f.mode,M,w),m.return=f,m):(m=a(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=$u(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _l:return _=cc(m.type,m.key,m.props,null,f.mode,_),Qr(_,m),_.return=f,_;case ho:return m=tf(m,f.mode,_),m.return=f,m;case Sa:return m=ss(m),h(f,m,_)}if(po(m)||jr(m))return m=ds(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return h(f,bl(m),_);if(m.$$typeof===Yi)return h(f,El(f,m),_);Tl(f,m)}return null}function u(f,m,_,M){var w=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return w!==null?null:o(f,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:return _.key===w?l(f,m,_,M):null;case ho:return _.key===w?c(f,m,_,M):null;case Sa:return _=ss(_),u(f,m,_,M)}if(po(_)||jr(_))return w!==null?null:d(f,m,_,M,null);if(typeof _.then=="function")return u(f,m,bl(_),M);if(_.$$typeof===Yi)return u(f,m,El(f,_),M);Tl(f,_)}return null}function p(f,m,_,M,w){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(_)||null,o(m,f,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _l:return f=f.get(M.key===null?_:M.key)||null,l(m,f,M,w);case ho:return f=f.get(M.key===null?_:M.key)||null,c(m,f,M,w);case Sa:return M=ss(M),p(f,m,_,M,w)}if(po(M)||jr(M))return f=f.get(_)||null,d(m,f,M,w,null);if(typeof M.then=="function")return p(f,m,_,bl(M),w);if(M.$$typeof===Yi)return p(f,m,_,El(m,M),w);Tl(m,M)}return null}function v(f,m,_,M){for(var w=null,A=null,R=m,S=m=0,T=null;R!==null&&S<_.length;S++){R.index>S?(T=R,R=null):T=R.sibling;var D=u(f,R,_[S],M);if(D===null){R===null&&(R=T);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,S),A===null?w=D:A.sibling=D,A=D,R=T}if(S===_.length)return n(f,R),ae&&Xi(f,S),w;if(R===null){for(;S<_.length;S++)R=h(f,_[S],M),R!==null&&(m=s(R,m,S),A===null?w=R:A.sibling=R,A=R);return ae&&Xi(f,S),w}for(R=i(R);S<_.length;S++)T=p(R,f,S,_[S],M),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?S:T.key),m=s(T,m,S),A===null?w=T:A.sibling=T,A=T);return e&&R.forEach(function(U){return t(f,U)}),ae&&Xi(f,S),w}function E(f,m,_,M){if(_==null)throw Error(K(151));for(var w=null,A=null,R=m,S=m=0,T=null,D=_.next();R!==null&&!D.done;S++,D=_.next()){R.index>S?(T=R,R=null):T=R.sibling;var U=u(f,R,D.value,M);if(U===null){R===null&&(R=T);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,S),A===null?w=U:A.sibling=U,A=U,R=T}if(D.done)return n(f,R),ae&&Xi(f,S),w;if(R===null){for(;!D.done;S++,D=_.next())D=h(f,D.value,M),D!==null&&(m=s(D,m,S),A===null?w=D:A.sibling=D,A=D);return ae&&Xi(f,S),w}for(R=i(R);!D.done;S++,D=_.next())D=p(R,f,S,D.value,M),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?S:D.key),m=s(D,m,S),A===null?w=D:A.sibling=D,A=D);return e&&R.forEach(function(F){return t(f,F)}),ae&&Xi(f,S),w}function g(f,m,_,M){if(typeof _=="object"&&_!==null&&_.type===nr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:t:{for(var w=_.key;m!==null;){if(m.key===w){if(w=_.type,w===nr){if(m.tag===7){n(f,m.sibling),M=a(m,_.props.children),M.return=f,f=M;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Sa&&ss(w)===m.type){n(f,m.sibling),M=a(m,_.props),Qr(M,_),M.return=f,f=M;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===nr?(M=ds(_.props.children,f.mode,M,_.key),M.return=f,f=M):(M=cc(_.type,_.key,_.props,null,f.mode,M),Qr(M,_),M.return=f,f=M)}return r(f);case ho:t:{for(w=_.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),M=a(m,_.children||[]),M.return=f,f=M;break t}else{n(f,m);break}else t(f,m);m=m.sibling}M=tf(_,f.mode,M),M.return=f,f=M}return r(f);case Sa:return _=ss(_),g(f,m,_,M)}if(po(_))return v(f,m,_,M);if(jr(_)){if(w=jr(_),typeof w!="function")throw Error(K(150));return _=w.call(_),E(f,m,_,M)}if(typeof _.then=="function")return g(f,m,bl(_),M);if(_.$$typeof===Yi)return g(f,m,El(f,_),M);Tl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),M=a(m,_),M.return=f,f=M):(n(f,m),M=$u(_,f.mode,M),M.return=f,f=M),r(f)):n(f,m)}return function(f,m,_,M){try{Xo=0;var w=g(f,m,_,M);return vr=null,w}catch(R){if(R===Vr||R===bu)throw R;var A=Pn(29,R,null,f.mode);return A.lanes=M,A.return=f,A}finally{}}}var xs=lv(!0),cv=lv(!1),Ma=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,oe&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Lc(e),tv(e,null,n),t}return Eu(e,i,t,n),Lc(e)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,R_(e,n)}}function nf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ch=!1;function Ro(){if(Ch){var e=_r;if(e!==null)throw e}}function Co(e,t,n,i){Ch=!1;var a=e.updateQueue;Ma=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(te&u)===u:(i&u)===u){u!==0&&u===Ar&&(Ch=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(g,h,u);break t}h=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(g,h,u):v,u==null)break t;h=Ce({},h,u);break t;case 2:Ma=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Ya|=r,e.lanes=r,e.memoizedState=h}}function uv(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function fv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)uv(n[e],t)}var Rr=Di(null),zc=Di(0);function a0(e,t){e=ra,be(zc,e),be(Rr,t),ra=e|t.baseLanes}function wh(){be(zc,ra),be(Rr,Rr.current)}function xp(){ra=zc.current,$e(Rr),$e(zc)}var Vn=Di(null),ni=null;function Ea(e){var t=e.alternate;be(Ie,Ie.current&1),be(Vn,e),ni===null&&(t===null||Rr.current!==null||t.memoizedState!==null)&&(ni=e)}function Dh(e){be(Ie,Ie.current),be(Vn,e),ni===null&&(ni=e)}function hv(e){e.tag===22?(be(Ie,Ie.current),be(Vn,e),ni===null&&(ni=e)):ba()}function ba(){be(Ie,Ie.current),be(Vn,Vn.current)}function On(e){$e(Vn),ni===e&&(ni=null),$e(Ie)}var Ie=Di(0);function Bc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zh(n)||Kh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Gt=null,_e=null,Ve=null,Ic=!1,xr=!1,Ss=!1,Fc=0,ko=0,Sr=null,Oy=0;function Le(){throw Error(K(321))}function Sp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Mp(e,t,n,i,a,s){return ia=s,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zt.H=e===null||e.memoizedState===null?Xv:Lp,Ss=!1,s=n(i,a),Ss=!1,xr&&(s=pv(t,n,i,a)),dv(e),s}function dv(e){zt.H=Wo;var t=_e!==null&&_e.next!==null;if(ia=0,Ve=_e=Gt=null,Ic=!1,ko=0,Sr=null,t)throw Error(K(300));e===null||We||(e=e.dependencies,e!==null&&Oc(e)&&(We=!0))}function pv(e,t,n,i){Gt=e;var a=0;do{if(xr&&(Sr=null),ko=0,xr=!1,25<=a)throw Error(K(301));if(a+=1,Ve=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}zt.H=kv,s=t(n,i)}while(xr);return s}function Py(){var e=zt.H,t=e.useState()[0];return t=typeof t.then=="function"?ol(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Gt.flags|=1024),t}function yp(){var e=Fc!==0;return Fc=0,e}function Ep(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bp(e){if(Ic){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ic=!1}ia=0,Ve=_e=Gt=null,xr=!1,ko=Fc=0,Sr=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Gt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function He(){if(_e===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ve===null?Gt.memoizedState:Ve.next;if(t!==null)Ve=t,_e=e;else{if(e===null)throw Gt.alternate===null?Error(K(467)):Error(K(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ve===null?Gt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(e){var t=ko;return ko+=1,Sr===null&&(Sr=[]),e=ov(Sr,e,t),t=Gt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,zt.H=t===null||t.memoizedState===null?Xv:Lp),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ol(e);if(e.$$typeof===Yi)return an(e)}throw Error(K(438,String(e)))}function Tp(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tu(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=SM;return t.index++,n}function aa(e,t){return typeof t=="function"?t(e):t}function fc(e){var t=He();return Ap(t,_e,e)}function Ap(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(te&h)===h:(ia&h)===h){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Ar&&(d=!0);else if((ia&u)===u){c=c.next,u===Ar&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Gt.lanes|=u,Ya|=u;h=c.action,Ss&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else u={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Gt.lanes|=h,Ya|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Gn(s,e.memoizedState)&&(We=!0,d&&(n=_r,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function af(e){var t=He(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Gn(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function mv(e,t,n){var i=Gt,a=He(),s=ae;if(s){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!Gn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,We=!0),a=a.queue,Rp(vv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ve!==null&&Ve.memoizedState.tag&1){if(i.flags|=2048,Cr(9,{destroy:void 0},_v.bind(null,i,a,n,t),null),Se===null)throw Error(K(349));s||ia&127||gv(i,t,n)}return n}function gv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Tu(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _v(e,t,n,i){t.value=n,t.getSnapshot=i,xv(t)&&Sv(e)}function vv(e,t,n){return n(function(){xv(t)&&Sv(e)})}function xv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function Sv(e){var t=Rs(e,2);t!==null&&Tn(t,e,2)}function Uh(e){var t=vn();if(typeof e=="function"){var n=e;if(e=n(),Ss){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function Mv(e,t,n,i){return e.baseState=n,Ap(e,_e,typeof i=="function"?i:aa)}function zy(e,t,n,i,a){if(Cu(e))throw Error(K(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};zt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,yv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function yv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=zt.T,r={};zt.T=r;try{var o=n(a,i),l=zt.S;l!==null&&l(r,o),s0(e,t,o)}catch(c){Lh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),zt.T=s}}else try{s=n(a,i),s0(e,t,s)}catch(c){Lh(e,t,c)}}function s0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){r0(e,t,i)},function(i){return Lh(e,t,i)}):r0(e,t,n)}function r0(e,t,n){t.status="fulfilled",t.value=n,Ev(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,yv(e,n)))}function Lh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ev(t),t=t.next;while(t!==i)}e.action=null}function Ev(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bv(e,t){return t}function o0(e,t){if(ae){var n=Se.formState;if(n!==null){t:{var i=Gt;if(ae){if(Ae){e:{for(var a=Ae,s=$n;a.nodeType!==8;){if(!s){a=null;break e}if(a=ii(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ae=ii(a.nextSibling),i=a.data==="F!";break t}}ka(i)}i=!1}i&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bv,lastRenderedState:t},n.queue=i,n=Hv.bind(null,Gt,i),i.dispatch=n,i=Uh(!1),s=Up.bind(null,Gt,!1,i.queue),i=vn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=zy.bind(null,Gt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function l0(e){var t=He();return Tv(t,_e,e)}function Tv(e,t,n){if(t=Ap(e,t,bv)[0],e=fc(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ol(t)}catch(r){throw r===Vr?bu:r}else i=t;t=He();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,Cr(9,{destroy:void 0},By.bind(null,a,n),null)),[i,s,e]}function By(e,t){e.action=t}function c0(e){var t=He(),n=_e;if(n!==null)return Tv(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Cr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Tu(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Av(){return He().memoizedState}function hc(e,t,n,i){var a=vn();Gt.flags|=e,a.memoizedState=Cr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ru(e,t,n,i){var a=He();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&Sp(i,_e.memoizedState.deps)?a.memoizedState=Cr(t,s,n,i):(Gt.flags|=e,a.memoizedState=Cr(1|t,s,n,i))}function u0(e,t){hc(8390656,8,e,t)}function Rp(e,t){Ru(2048,8,e,t)}function Iy(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=Tu(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rv(e){var t=He().memoizedState;return Iy({ref:t,nextImpl:e}),function(){if(oe&2)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function Cv(e,t){return Ru(4,2,e,t)}function wv(e,t){return Ru(4,4,e,t)}function Dv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uv(e,t,n){n=n!=null?n.concat([e]):null,Ru(4,4,Dv.bind(null,t,e),n)}function Cp(){}function Lv(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Nv(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sp(t,i[1]))return i[0];if(i=e(),Ss){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i}function wp(e,t,n){return n===void 0||ia&1073741824&&!(te&261930)?e.memoizedState=t:(e.memoizedState=n,e=Mx(),Gt.lanes|=e,Ya|=e,n)}function Ov(e,t,n,i){return Gn(n,t)?n:Rr.current!==null?(e=wp(e,n,i),Gn(e,t)||(We=!0),e):!(ia&42)||ia&1073741824&&!(te&261930)?(We=!0,e.memoizedState=n):(e=Mx(),Gt.lanes|=e,Ya|=e,t)}function Pv(e,t,n,i,a){var s=le.p;le.p=s!==0&&8>s?s:8;var r=zt.T,o={};zt.T=o,Up(e,!1,t,n);try{var l=a(),c=zt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Ny(l,i);wo(e,t,d,Hn(e))}else wo(e,t,i,Hn(e))}catch(h){wo(e,t,{then:function(){},status:"rejected",reason:h},Hn())}finally{le.p=s,r!==null&&o.types!==null&&(r.types=o.types),zt.T=r}}function Fy(){}function Nh(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=zv(e).queue;Pv(e,a,t,hs,n===null?Fy:function(){return Bv(e),n(i)})}function zv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:hs,baseState:hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:hs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bv(e){var t=zv(e);t.next===null&&(t=e.alternate.memoizedState),wo(e,t.next.queue,{},Hn())}function Dp(){return an(jo)}function Iv(){return He().memoizedState}function Fv(){return He().memoizedState}function Hy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=Pa(n);var i=za(t,e,n);i!==null&&(Tn(i,t,n),Ao(i,t,n)),t={cache:mp()},e.payload=t;return}t=t.return}}function Gy(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e)?Gv(t,n):(n=fp(e,t,n,i),n!==null&&(Tn(n,e,i),Vv(n,t,i)))}function Hv(e,t,n){var i=Hn();wo(e,t,n,i)}function wo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Gv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Gn(o,r))return Eu(e,t,a,0),Se===null&&yu(),!1}catch{}finally{}if(n=fp(e,t,a,i),n!==null)return Tn(n,e,i),Vv(n,t,i),!0}return!1}function Up(e,t,n,i){if(i={lane:2,revertLane:Hp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(t)throw Error(K(479))}else t=fp(e,n,i,2),t!==null&&Tn(t,e,2)}function Cu(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function Gv(e,t){xr=Ic=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,R_(e,n)}}var Wo={readContext:an,use:Au,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Wo.useEffectEvent=Le;var Xv={readContext:an,use:Au,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:u0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hc(4194308,4,Dv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hc(4194308,4,e,t)},useInsertionEffect:function(e,t){hc(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var i=e();if(Ss){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vn();if(n!==void 0){var a=n(t);if(Ss){Ra(!0);try{n(t)}finally{Ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Gy.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=Uh(e);var t=e.queue,n=Hv.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cp,useDeferredValue:function(e,t){var n=vn();return wp(n,e,t)},useTransition:function(){var e=Uh(!1);return e=Pv.bind(null,Gt,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,a=vn();if(ae){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),Se===null)throw Error(K(349));te&127||gv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,u0(vv.bind(null,i,s,e),[e]),i.flags|=2048,Cr(9,{destroy:void 0},_v.bind(null,i,s,n,t),null),n},useId:function(){var e=vn(),t=Se.identifierPrefix;if(ae){var n=yi,i=Mi;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Oy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dp,useFormState:o0,useActionState:o0,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Up.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tp,useCacheRefresh:function(){return vn().memoizedState=Hy.bind(null,Gt)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if(oe&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},Lp={readContext:an,use:Au,useCallback:Lv,useContext:an,useEffect:Rp,useImperativeHandle:Uv,useInsertionEffect:Cv,useLayoutEffect:wv,useMemo:Nv,useReducer:fc,useRef:Av,useState:function(){return fc(aa)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=He();return Ov(n,_e.memoizedState,e,t)},useTransition:function(){var e=fc(aa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:mv,useId:Iv,useHostTransitionStatus:Dp,useFormState:l0,useActionState:l0,useOptimistic:function(e,t){var n=He();return Mv(n,_e,e,t)},useMemoCache:Tp,useCacheRefresh:Fv};Lp.useEffectEvent=Rv;var kv={readContext:an,use:Au,useCallback:Lv,useContext:an,useEffect:Rp,useImperativeHandle:Uv,useInsertionEffect:Cv,useLayoutEffect:wv,useMemo:Nv,useReducer:af,useRef:Av,useState:function(){return af(aa)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=He();return _e===null?wp(n,e,t):Ov(n,_e.memoizedState,e,t)},useTransition:function(){var e=af(aa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:mv,useId:Iv,useHostTransitionStatus:Dp,useFormState:c0,useActionState:c0,useOptimistic:function(e,t){var n=He();return _e!==null?Mv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tp,useCacheRefresh:Fv};kv.useEffectEvent=Rv;function sf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),a=Pa(i);a.payload=t,n!=null&&(a.callback=n),t=za(e,a,i),t!==null&&(Tn(t,e,i),Ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),a=Pa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=za(e,a,i),t!==null&&(Tn(t,e,i),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=Pa(n);i.tag=2,t!=null&&(i.callback=t),t=za(e,i,n),t!==null&&(Tn(t,e,n),Ao(t,e,n))}};function f0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,i)||!Ho(a,s):!0}function h0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Oh.enqueueReplaceState(t,t.state,null)}function Ms(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Wv(e){Uc(e)}function Yv(e){console.error(e)}function qv(e){Uc(e)}function Hc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function d0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ph(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Hc(e,t)},n}function jv(e){return e=Pa(e),e.tag=3,e}function Zv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){d0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){d0(t,n,i),typeof a!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Vy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Gr(t,n,a,!0),n=Vn.current,n!==null){switch(n.tag){case 31:case 13:return ni===null?Wc():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Pc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),gf(e,i,a)),!1;case 22:return n.flags|=65536,i===Pc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),gf(e,i,a)),!1}throw Error(K(435,n.tag))}return gf(e,i,a),Wc(),!1}if(ae)return t=Vn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==yh&&(e=Error(K(422),{cause:i}),Vo(Jn(e,n)))):(i!==yh&&(t=Error(K(423),{cause:i}),Vo(Jn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Jn(i,n),a=Ph(e.stateNode,i,a),nf(e,a),Ne!==4&&(Ne=2)),!1;var s=Error(K(520),{cause:i});if(s=Jn(s,n),Lo===null?Lo=[s]:Lo.push(s),Ne!==4&&(Ne=2),t===null)return!0;i=Jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ph(n.stateNode,i,e),nf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=jv(a),Zv(a,e,n,i),nf(n,a),!1}n=n.return}while(n!==null);return!1}var Np=Error(K(461)),We=!1;function tn(e,t,n,i){t.child=e===null?cv(t,null,n,i):xs(t,e.child,n,i)}function p0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return vs(t),i=Mp(e,t,n,r,s,a),o=yp(),e!==null&&!We?(Ep(e,t,a),sa(e,t,a)):(ae&&o&&dp(t),t.flags|=1,tn(e,t,i,a),t.child)}function m0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Kv(e,t,s,i,a)):(e=cc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Op(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(r,i)&&e.ref===t.ref)return sa(e,t,a)}return t.flags|=1,e=Ki(s,i),e.ref=t.ref,e.return=t,t.child=e}function Kv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Ho(s,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=s,Op(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,sa(e,t,a)}return zh(e,t,n,i,a)}function Qv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return g0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&uc(t,s!==null?s.cachePool:null),s!==null?a0(t,s):wh(),hv(t);else return i=t.lanes=536870912,g0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(uc(t,s.cachePool),a0(t,s),ba(),t.memoizedState=null):(e!==null&&uc(t,null),wh(),ba());return tn(e,t,a,n),t.child}function go(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function g0(e,t,n,i,a){var s=gp();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&uc(t,null),wh(),hv(t),e!==null&&Gr(e,t,i,!0),t.childLanes=a,null}function dc(e,t){return t=Gc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _0(e,t,n){return xs(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,On(t),t.memoizedState=null,e}function Xy(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=dc(t,i),t.lanes=536870912,go(null,e);if(Dh(t),(e=Ae)?(e=Xx(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},n=nv(e),n.return=t,t.child=n,nn=t,Ae=null)):e=null,e===null)throw ka(t);return t.lanes=536870912,null}return dc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Dh(t),a)if(t.flags&256)t.flags&=-257,t=_0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(We||Gr(e,t,n,!1),a=(n&e.childLanes)!==0,We||a){if(i=Se,i!==null&&(r=C_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Rs(e,r),Tn(i,e,r),Np;Wc(),t=_0(e,t,n)}else e=s.treeContext,Ae=ii(r.nextSibling),nn=t,ae=!0,Oa=null,$n=!1,e!==null&&av(t,e),t=dc(t,i),t.flags|=4096;return t}return e=Ki(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zh(e,t,n,i,a){return vs(t),n=Mp(e,t,n,i,void 0,a),i=yp(),e!==null&&!We?(Ep(e,t,a),sa(e,t,a)):(ae&&i&&dp(t),t.flags|=1,tn(e,t,n,a),t.child)}function v0(e,t,n,i,a,s){return vs(t),t.updateQueue=null,n=pv(t,i,n,a),dv(e),i=yp(),e!==null&&!We?(Ep(e,t,s),sa(e,t,s)):(ae&&i&&dp(t),t.flags|=1,tn(e,t,n,s),t.child)}function x0(e,t,n,i,a){if(vs(t),t.stateNode===null){var s=ur,r=n.contextType;typeof r=="object"&&r!==null&&(s=an(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Oh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},vp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?an(r):ur,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(sf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Oh.enqueueReplaceState(s,s.state,null),Co(t,i,s,a),Ro(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ms(n,o);s.props=l;var c=s.context,d=n.contextType;r=ur,typeof d=="object"&&d!==null&&(r=an(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&h0(t,s,i,r),Ma=!1;var u=t.memoizedState;s.state=u,Co(t,i,s,a),Ro(),c=t.memoizedState,o||u!==c||Ma?(typeof h=="function"&&(sf(t,n,h,i),c=t.memoizedState),(l=Ma||f0(t,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Rh(e,t),r=t.memoizedProps,d=Ms(n,r),s.props=d,h=t.pendingProps,u=s.context,c=n.contextType,l=ur,typeof c=="object"&&c!==null&&(l=an(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||u!==l)&&h0(t,s,i,l),Ma=!1,u=t.memoizedState,s.state=u,Co(t,i,s,a),Ro();var p=t.memoizedState;r!==h||u!==p||Ma||e!==null&&e.dependencies!==null&&Oc(e.dependencies)?(typeof o=="function"&&(sf(t,n,o,i),p=t.memoizedState),(d=Ma||f0(t,n,d,i,u,p,l)||e!==null&&e.dependencies!==null&&Oc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,pc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=xs(t,e.child,null,a),t.child=xs(t,null,n,a)):tn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=sa(e,t,a),e}function S0(e,t,n,i){return _s(),t.flags|=256,tn(e,t,n,i),t.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:rv()}}function lf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zn),e}function Jv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(a?Ea(t):ba(),(e=Ae)?(e=Xx(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},n=nv(e),n.return=t,t.child=n,nn=t,Ae=null)):e=null,e===null)throw ka(t);return Kh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(ba(),a=t.mode,o=Gc({mode:"hidden",children:o},a),i=ds(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,go(null,i)):(Ea(t),Bh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ea(t),t.flags&=-257,t=cf(e,t,n)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),o=i.fallback,a=t.mode,i=Gc({mode:"visible",children:i.children},a),o=ds(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,xs(t,e.child,null,n),i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,t=go(null,i));else if(Ea(t),Kh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,Vo({value:i,source:null,stack:null}),t=cf(e,t,n)}else if(We||Gr(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(r=Se,r!==null&&(i=C_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Rs(e,i),Tn(r,e,i),Np;Zh(o)||Wc(),t=cf(e,t,n)}else Zh(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=ii(o.nextSibling),nn=t,ae=!0,Oa=null,$n=!1,e!==null&&av(t,e),t=Bh(t,i.children),t.flags|=4096);return t}return a?(ba(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Ki(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ki(c,o):(o=ds(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,go(null,i),i=t.child,o=e.child.memoizedState,o===null?o=of(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=rv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=lf(e,r,n),t.memoizedState=rf,go(e.child,i)):(Ea(t),n=e.child,e=n.sibling,n=Ki(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Bh(e,t){return t=Gc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gc(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function cf(e,t,n){return xs(t,e.child,null,n),e=Bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bh(e.return,t,n)}function uf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function $v(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ie.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,be(Ie,r),tn(e,t,i,n),i=ae?Go:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,n,t);else if(e.tag===19)M0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Bc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),uf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Bc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}uf(t,!0,n,null,s,i);break;case"together":uf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function sa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,!(n&t.childLanes))if(e!==null){if(Gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Oc(e)))}function ky(e,t,n){switch(t.tag){case 3:Rc(t,t.stateNode.containerInfo),ya(t,ke,e.memoizedState.cache),_s();break;case 27:case 5:fh(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ea(t),t.flags|=128,null):n&t.child.childLanes?Jv(e,t,n):(Ea(t),e=sa(e,t,n),e!==null?e.sibling:null);Ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Gr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return $v(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,Qv(e,t,n,t.pendingProps);case 24:ya(t,ke,e.memoizedState.cache)}return sa(e,t,n)}function tx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Op(e,n)&&!(t.flags&128))return We=!1,ky(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&iv(t,Go,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ss(t.elementType),t.type=e,typeof e=="function")hp(e)?(i=Ms(e,i),t.tag=1,t=x0(null,t,e,i,n)):(t.tag=0,t=zh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Jd){t.tag=11,t=p0(null,t,e,i,n);break t}else if(a===$d){t.tag=14,t=m0(null,t,e,i,n);break t}}throw t=ch(e)||e,Error(K(306,t,""))}}return t;case 0:return zh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ms(i,t.pendingProps),x0(e,t,i,a,n);case 3:t:{if(Rc(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Rh(e,t),Co(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ya(t,ke,i),i!==s.cache&&Th(t,[ke],n,!0),Ro(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=S0(e,t,i,n);break t}else if(i!==a){a=Jn(Error(K(424)),t),Vo(a),t=S0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=ii(e.firstChild),nn=t,ae=!0,Oa=null,$n=!0,n=cv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_s(),i===a){t=sa(e,t,n);break t}tn(e,t,i,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=G0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=Zc(Na.current).createElement(n),i[en]=t,i[Rn]=e,rn(i,n,e),Je(i),t.stateNode=i):t.memoizedState=G0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fh(t),e===null&&ae&&(i=t.stateNode=kx(t.type,t.pendingProps,Na.current),nn=t,$n=!0,a=Ae,Ka(t.type)?(Qh=a,Ae=ii(i.firstChild)):Ae=a),tn(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((a=i=Ae)&&(i=SE(i,t.type,t.pendingProps,$n),i!==null?(t.stateNode=i,nn=t,Ae=ii(i.firstChild),$n=!1,a=!0):a=!1),a||ka(t)),fh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,qh(a,s)?i=null:r!==null&&qh(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Mp(e,t,Py,null,null,n),jo._currentValue=a),pc(e,t),tn(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Ae)&&(n=ME(n,t.pendingProps,$n),n!==null?(t.stateNode=n,nn=t,Ae=null,e=!0):e=!1),e||ka(t)),null;case 13:return Jv(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xs(t,null,i,n):tn(e,t,i,n),t.child;case 11:return p0(e,t,t.type,t.pendingProps,n);case 7:return tn(e,t,t.pendingProps,n),t.child;case 8:return tn(e,t,t.pendingProps.children,n),t.child;case 12:return tn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ya(t,t.type,i.value),tn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,vs(t),a=an(a),i=i(a),t.flags|=1,tn(e,t,i,n),t.child;case 14:return m0(e,t,t.type,t.pendingProps,n);case 15:return Kv(e,t,t.type,t.pendingProps,n);case 19:return $v(e,t,n);case 31:return Xy(e,t,n);case 22:return Qv(e,t,n,t.pendingProps);case 24:return vs(t),i=an(ke),e===null?(a=gp(),a===null&&(a=Se,s=mp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},vp(t),ya(t,ke,a)):(e.lanes&n&&(Rh(e,t),Co(t,null,null,n),Ro()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,ke,i)):(i=s.cache,ya(t,ke,i),i!==a.cache&&Th(t,[ke],n,!0))),tn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Oi(e){e.flags|=4}function ff(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(bx())e.flags|=8192;else throw ms=Pc,_p}else e.flags&=-16777217}function y0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qx(t))if(bx())e.flags|=8192;else throw ms=Pc,_p}function Al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?T_():536870912,e.lanes|=t,wr|=t)}function Jr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Wy(e,t,n){var i=t.pendingProps;switch(pp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Qi(ke),Er(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?Oi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ef())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Oi(t),s!==null?(Te(t),y0(t,s)):(Te(t),ff(t,a,null,i,n))):s?s!==e.memoizedState?(Oi(t),Te(t),y0(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Oi(t),Te(t),ff(t,a,e,i,n)),null;case 27:if(Cc(t),n=Na.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Te(t),null}e=Ai.current,Ns(t)?Qm(t):(e=kx(a,i,n),t.stateNode=e,Oi(t))}return Te(t),null;case 5:if(Cc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Te(t),null}if(s=Ai.current,Ns(t))Qm(t);else{var r=Zc(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[en]=t,s[Rn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(rn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Oi(t)}}return Te(t),ff(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Oi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Na.current,Ns(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=nn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[en]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Hx(e.nodeValue,n)),e||ka(t,!0)}else e=Zc(e).createTextNode(i),e[en]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ns(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[en]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(On(t),t):(On(t),null);if(t.flags&128)throw Error(K(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ns(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[en]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(On(t),t):(On(t),null)}return On(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Al(t,t.updateQueue),Te(t),null);case 4:return Er(),e===null&&Gp(t.stateNode.containerInfo),Te(t),null;case 10:return Qi(t.type),Te(t),null;case 19:if($e(Ie),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Jr(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bc(e),s!==null){for(t.flags|=128,Jr(i,!1),e=s.updateQueue,t.updateQueue=e,Al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ev(n,e),n=n.sibling;return be(Ie,Ie.current&1|2),ae&&Xi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bn()>Xc&&(t.flags|=128,a=!0,Jr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Bc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Al(t,e),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Te(t),null}else 2*Bn()-i.renderingStartTime>Xc&&n!==536870912&&(t.flags|=128,a=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bn(),e.sibling=null,n=Ie.current,be(Ie,a?n&1|2:n&1),ae&&Xi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return On(t),xp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(ps),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function Yy(e,t){switch(pp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ke),Er(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cc(t),null;case 31:if(t.memoizedState!==null){if(On(t),t.alternate===null)throw Error(K(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(On(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ie),null;case 4:return Er(),null;case 10:return Qi(t.type),null;case 22:case 23:return On(t),xp(),e!==null&&$e(ps),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ke),null;case 25:return null;default:return null}}function ex(e,t){switch(pp(t),t.tag){case 3:Qi(ke),Er();break;case 26:case 27:case 5:Cc(t);break;case 4:Er();break;case 31:t.memoizedState!==null&&On(t);break;case 13:On(t);break;case 19:$e(Ie);break;case 10:Qi(t.type);break;case 22:case 23:On(t),xp(),e!==null&&$e(ps);break;case 24:Qi(ke)}}function ll(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){he(t,t.return,o)}}function Wa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){he(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){he(t,t.return,d)}}function nx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fv(t,n)}catch(i){he(e,e.return,i)}}}function ix(e,t,n){n.props=Ms(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function Do(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){he(e,t,a)}}function Ei(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){he(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){he(e,t,a)}else n.current=null}function ax(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){he(e,e.return,a)}}function hf(e,t,n){try{var i=e.stateNode;pE(i,e.type,n,t),i[Rn]=t}catch(a){he(e,e.return,a)}}function sx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ih(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(i===27&&Ka(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ih(e,t,n),e=e.sibling;e!==null;)Ih(e,t,n),e=e.sibling}function Vc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ka(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function rx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);rn(t,i,n),t[en]=e,t[Rn]=n}catch(s){he(e,e.return,s)}}var ki=!1,Xe=!1,pf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function qy(e,t){if(e=e.containerInfo,Wh=$c,e=q_(e),cp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,d=0,h=e,u=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:e,selectionRange:n},$c=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Ms(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){he(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)jh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ox(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n),i&4&&ll(5,n);break;case 1:if(zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){he(n,n.return,r)}else{var a=Ms(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){he(n,n.return,r)}}i&64&&nx(n),i&512&&Do(n,n.return);break;case 3:if(zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fv(e,t)}catch(r){he(n,n.return,r)}}break;case 27:t===null&&i&4&&rx(n);case 26:case 5:zi(e,n),t===null&&i&4&&ax(n),i&512&&Do(n,n.return);break;case 12:zi(e,n);break;case 31:zi(e,n),i&4&&ux(e,n);break;case 13:zi(e,n),i&4&&fx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nE.bind(null,n),yE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||Xe,a=ki;var s=Xe;ki=i,(Xe=t)&&!s?Vi(e,n,(n.subtreeFlags&8772)!==0):zi(e,n),ki=a,Xe=s}break;case 30:break;default:zi(e,n)}}function lx(e){var t=e.alternate;t!==null&&(e.alternate=null,lx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ip(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,En=!1;function Pi(e,t,n){for(n=n.child;n!==null;)cx(e,t,n),n=n.sibling}function cx(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 26:Xe||Ei(n,t),Pi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Ei(n,t);var i=we,a=En;Ka(n.type)&&(we=n.stateNode,En=!1),Pi(e,t,n),Oo(n.stateNode),we=i,En=a;break;case 5:Xe||Ei(n,t);case 6:if(i=we,a=En,we=null,Pi(e,t,n),we=i,En=a,we!==null)if(En)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(s){he(n,t,s)}else try{we.removeChild(n.stateNode)}catch(s){he(n,t,s)}break;case 18:we!==null&&(En?(e=we,z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Nr(e)):z0(we,n.stateNode));break;case 4:i=we,a=En,we=n.stateNode.containerInfo,En=!0,Pi(e,t,n),we=i,En=a;break;case 0:case 11:case 14:case 15:Wa(2,n,t),Xe||Wa(4,n,t),Pi(e,t,n);break;case 1:Xe||(Ei(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ix(n,t,i)),Pi(e,t,n);break;case 21:Pi(e,t,n);break;case 22:Xe=(i=Xe)||n.memoizedState!==null,Pi(e,t,n),Xe=i;break;default:Pi(e,t,n)}}function ux(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nr(e)}catch(n){he(t,t.return,n)}}}function fx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nr(e)}catch(n){he(t,t.return,n)}}function jy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new E0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new E0),t;default:throw Error(K(435,e.tag))}}function Rl(e,t){var n=jy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=iE.bind(null,e,i);i.then(a,a)}})}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ka(o.type)){we=o.stateNode,En=!1;break t}break;case 5:we=o.stateNode,En=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,En=!0;break t}o=o.return}if(we===null)throw Error(K(160));cx(s,r,a),we=null,En=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}var fi=null;function hx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mn(t,e),yn(e),i&4&&(Wa(3,e,e.return),ll(3,e),Wa(5,e,e.return));break;case 1:Mn(t,e),yn(e),i&512&&(Xe||n===null||Ei(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=fi;if(Mn(t,e),yn(e),i&512&&(Xe||n===null||Ei(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[al]||s[en]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),rn(s,i,n),s[en]=e,Je(s),i=s;break t;case"link":var r=X0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),rn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=X0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),rn(s,i,n),a.head.appendChild(s);break;default:throw Error(K(468,i))}s[en]=e,Je(s),i=s}e.stateNode=i}else k0(a,e.type,e.stateNode);else e.stateNode=V0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?k0(a,e.type,e.stateNode):V0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hf(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mn(t,e),yn(e),i&512&&(Xe||n===null||Ei(n,n.return)),n!==null&&i&4&&hf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mn(t,e),yn(e),i&512&&(Xe||n===null||Ei(n,n.return)),e.flags&32){a=e.stateNode;try{Tr(a,"")}catch(v){he(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,hf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(pf=!0);break;case 6:if(Mn(t,e),yn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){he(e,e.return,v)}}break;case 3:if(_c=null,a=fi,fi=Kc(t.containerInfo),Mn(t,e),fi=a,yn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(v){he(e,e.return,v)}pf&&(pf=!1,dx(e));break;case 4:i=fi,fi=Kc(e.stateNode.containerInfo),Mn(t,e),yn(e),fi=i;break;case 12:Mn(t,e),yn(e);break;case 31:Mn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 13:Mn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wu=Bn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,d=Xe;if(ki=c||a,Xe=d||l,Mn(t,e),Xe=d,ki=c,yn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||Xe||rs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){he(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){he(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?B0(p,!0):B0(l.stateNode,!1)}catch(v){he(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rl(e,n))));break;case 19:Mn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 30:break;case 21:break;default:Mn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sx(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,s=df(e);Vc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Tr(r,""),n.flags&=-33);var o=df(e);Vc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=df(e);Ih(e,c,l);break;default:throw Error(K(161))}}catch(d){he(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ox(e,t.alternate,t),t=t.sibling}function rs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wa(4,t,t.return),rs(t);break;case 1:Ei(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ix(t,t.return,n),rs(t);break;case 27:Oo(t.stateNode);case 26:case 5:Ei(t,t.return),rs(t);break;case 22:t.memoizedState===null&&rs(t);break;case 30:rs(t);break;default:rs(t)}e=e.sibling}}function Vi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Vi(a,s,n),ll(4,s);break;case 1:if(Vi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){he(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)uv(l[a],o)}catch(c){he(i,i.return,c)}}n&&r&64&&nx(s),Do(s,s.return);break;case 27:rx(s);case 26:case 5:Vi(a,s,n),n&&i===null&&r&4&&ax(s),Do(s,s.return);break;case 12:Vi(a,s,n);break;case 31:Vi(a,s,n),n&&r&4&&ux(a,s);break;case 13:Vi(a,s,n),n&&r&4&&fx(a,s);break;case 22:s.memoizedState===null&&Vi(a,s,n),Do(s,s.return);break;case 30:break;default:Vi(a,s,n)}t=t.sibling}}function Pp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rl(n))}function zp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function ri(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)px(e,t,n,i),t=t.sibling}function px(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ri(e,t,n,i),a&2048&&ll(9,t);break;case 1:ri(e,t,n,i);break;case 3:ri(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(a&2048){ri(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ri(e,t,n,i);break;case 31:ri(e,t,n,i);break;case 13:ri(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ri(e,t,n,i):Uo(e,t):s._visibility&2?ri(e,t,n,i):(s._visibility|=2,tr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Pp(r,t);break;case 24:ri(e,t,n,i),a&2048&&zp(t.alternate,t);break;default:ri(e,t,n,i)}}function tr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:tr(s,r,o,l,a),ll(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?tr(s,r,o,l,a):Uo(s,r):(d._visibility|=2,tr(s,r,o,l,a)),a&&c&2048&&Pp(r.alternate,r);break;case 24:tr(s,r,o,l,a),a&&c&2048&&zp(r.alternate,r);break;default:tr(s,r,o,l,a)}t=t.sibling}}function Uo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Uo(n,i),a&2048&&Pp(i.alternate,i);break;case 24:Uo(n,i),a&2048&&zp(i.alternate,i);break;default:Uo(n,i)}t=t.sibling}}var _o=8192;function Os(e,t,n){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)mx(e,t,n),e=e.sibling}function mx(e,t,n){switch(e.tag){case 26:Os(e,t,n),e.flags&_o&&e.memoizedState!==null&&OE(n,fi,e.memoizedState,e.memoizedProps);break;case 5:Os(e,t,n);break;case 3:case 4:var i=fi;fi=Kc(e.stateNode.containerInfo),Os(e,t,n),fi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=_o,_o=16777216,Os(e,t,n),_o=i):Os(e,t,n));break;default:Os(e,t,n)}}function gx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $r(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,vx(i,e)}gx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_x(e),e=e.sibling}function _x(e){switch(e.tag){case 0:case 11:case 15:$r(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:$r(e);break;case 12:$r(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mc(e)):$r(e);break;default:$r(e)}}function mc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,vx(i,e)}gx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wa(8,t,t.return),mc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mc(t));break;default:mc(t)}e=e.sibling}}function vx(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Wa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(lx(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var Zy={getCacheForType:function(e){var t=an(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return an(ke).controller.signal}},Ky=typeof WeakMap=="function"?WeakMap:Map,oe=0,Se=null,Jt=null,te=0,ue=0,Nn=null,wa=!1,Xr=!1,Bp=!1,ra=0,Ne=0,Ya=0,gs=0,Ip=0,zn=0,wr=0,Lo=null,bn=null,Fh=!1,wu=0,xx=0,Xc=1/0,kc=null,Ba=null,Ye=0,Ia=null,Dr=null,Ji=0,Hh=0,Gh=null,Sx=null,No=0,Vh=null;function Hn(){return oe&2&&te!==0?te&-te:zt.T!==null?Hp():w_()}function Mx(){if(zn===0)if(!(te&536870912)||ae){var e=xl;xl<<=1,!(xl&3932160)&&(xl=262144),zn=e}else zn=536870912;return e=Vn.current,e!==null&&(e.flags|=32),zn}function Tn(e,t,n){(e===Se&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Ur(e,0),Da(e,te,zn,!1)),il(e,n),(!(oe&2)||e!==Se)&&(e===Se&&(!(oe&2)&&(gs|=n),Ne===4&&Da(e,te,zn,!1)),Ui(e))}function yx(e,t,n){if(oe&6)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||nl(e,t),a=i?$y(e,t):mf(e,t,!0),s=i;do{if(a===0){Xr&&!i&&Da(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Qy(n)){a=mf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Lo;var l=o.current.memoizedState.isDehydrated;if(l&&(Ur(o,r).flags|=256),r=mf(o,r,!1),r!==2){if(Bp&&!l){o.errorRecoveryDisabledLanes|=s,gs|=s,a=4;break t}s=bn,bn=a,s!==null&&(bn===null?bn=s:bn.push.apply(bn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Ur(e,0),Da(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:Da(i,t,zn,!wa);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(a=wu+300-Bn(),10<a)){if(Da(i,t,zn,!wa),vu(i,0,!0)!==0)break t;Ji=t,i.timeoutHandle=Vx(b0.bind(null,i,n,bn,kc,Fh,t,zn,gs,wr,wa,s,"Throttled",-0,0),a);break t}b0(i,n,bn,kc,Fh,t,zn,gs,wr,wa,s,null,-0,0)}}break}while(!0);Ui(e)}function b0(e,t,n,i,a,s,r,o,l,c,d,h,u,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},mx(t,s,h);var v=(s&62914560)===s?wu-Bn():(s&4194048)===s?xx-Bn():0;if(v=PE(h,v),v!==null){Ji=s,e.cancelPendingCommit=v(A0.bind(null,e,t,s,n,i,a,r,o,l,d,h,null,u,p)),Da(e,s,r,!c);return}}A0(e,t,s,n,i,a,r,o,l)}function Qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Gn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,n,i){t&=~Ip,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&A_(e,n,t)}function Du(){return oe&6?!0:(cl(0),!1)}function Fp(){if(Jt!==null){if(ue===0)var e=Jt.return;else e=Jt,ji=Cs=null,bp(e),vr=null,Xo=0,e=Jt;for(;e!==null;)ex(e.alternate,e),e=e.return;Jt=null}}function Ur(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_E(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ji=0,Fp(),Se=e,Jt=n=Ki(e.current,null),te=t,ue=0,Nn=null,wa=!1,Xr=nl(e,t),Bp=!1,wr=zn=Ip=gs=Ya=Ne=0,bn=Lo=null,Fh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Fn(i),s=1<<a;t|=e[a],i&=~s}return ra=t,yu(),n}function Ex(e,t){Gt=null,zt.H=Wo,t===Vr||t===bu?(t=n0(),ue=3):t===_p?(t=n0(),ue=4):ue=t===Np?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nn=t,Jt===null&&(Ne=1,Hc(e,Jn(t,e.current)))}function bx(){var e=Vn.current;return e===null?!0:(te&4194048)===te?ni===null:(te&62914560)===te||te&536870912?e===ni:!1}function Tx(){var e=zt.H;return zt.H=Wo,e===null?Wo:e}function Ax(){var e=zt.A;return zt.A=Zy,e}function Wc(){Ne=4,wa||(te&4194048)!==te&&Vn.current!==null||(Xr=!0),!(Ya&134217727)&&!(gs&134217727)||Se===null||Da(Se,te,zn,!1)}function mf(e,t,n){var i=oe;oe|=2;var a=Tx(),s=Ax();(Se!==e||te!==t)&&(kc=null,Ur(e,t)),t=!1;var r=Ne;t:do try{if(ue!==0&&Jt!==null){var o=Jt,l=Nn;switch(ue){case 8:Fp(),r=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(t=!0);var c=ue;if(ue=0,Nn=null,dr(e,o,l,c),n&&Xr){r=0;break t}break;default:c=ue,ue=0,Nn=null,dr(e,o,l,c)}}Jy(),r=Ne;break}catch(d){Ex(e,d)}while(!0);return t&&e.shellSuspendCounter++,ji=Cs=null,oe=i,zt.H=a,zt.A=s,Jt===null&&(Se=null,te=0,yu()),r}function Jy(){for(;Jt!==null;)Rx(Jt)}function $y(e,t){var n=oe;oe|=2;var i=Tx(),a=Ax();Se!==e||te!==t?(kc=null,Xc=Bn()+500,Ur(e,t)):Xr=nl(e,t);t:do try{if(ue!==0&&Jt!==null){t=Jt;var s=Nn;e:switch(ue){case 1:ue=0,Nn=null,dr(e,t,s,1);break;case 2:case 9:if(e0(s)){ue=0,Nn=null,T0(t);break}t=function(){ue!==2&&ue!==9||Se!==e||(ue=7),Ui(e)},s.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:e0(s)?(ue=0,Nn=null,T0(t)):(ue=0,Nn=null,dr(e,t,s,7));break;case 5:var r=null;switch(Jt.tag){case 26:r=Jt.memoizedState;case 5:case 27:var o=Jt;if(r?qx(r):o.stateNode.complete){ue=0,Nn=null;var l=o.sibling;if(l!==null)Jt=l;else{var c=o.return;c!==null?(Jt=c,Uu(c)):Jt=null}break e}}ue=0,Nn=null,dr(e,t,s,5);break;case 6:ue=0,Nn=null,dr(e,t,s,6);break;case 8:Fp(),Ne=6;break t;default:throw Error(K(462))}}tE();break}catch(d){Ex(e,d)}while(!0);return ji=Cs=null,zt.H=i,zt.A=a,oe=n,Jt!==null?0:(Se=null,te=0,yu(),Ne)}function tE(){for(;Jt!==null&&!EM();)Rx(Jt)}function Rx(e){var t=tx(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Uu(e):Jt=t}function T0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=v0(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=v0(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:bp(t);default:ex(n,t),t=Jt=ev(t,ra),t=tx(n,t,ra)}e.memoizedProps=e.pendingProps,t===null?Uu(e):Jt=t}function dr(e,t,n,i){ji=Cs=null,bp(t),vr=null,Xo=0;var a=t.return;try{if(Vy(e,a,t,n,te)){Ne=1,Hc(e,Jn(n,e.current)),Jt=null;return}}catch(s){if(a!==null)throw Jt=a,s;Ne=1,Hc(e,Jn(n,e.current)),Jt=null;return}t.flags&32768?(ae||i===1?e=!0:Xr||te&536870912?e=!1:(wa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Vn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Cx(t,e)):Uu(t)}function Uu(e){var t=e;do{if(t.flags&32768){Cx(t,wa);return}e=t.return;var n=Wy(t.alternate,t,ra);if(n!==null){Jt=n;return}if(t=t.sibling,t!==null){Jt=t;return}Jt=t=e}while(t!==null);Ne===0&&(Ne=5)}function Cx(e,t){do{var n=Yy(e.alternate,e);if(n!==null){n.flags&=32767,Jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Jt=e;return}Jt=e=n}while(e!==null);Ne=6,Jt=null}function A0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Lu();while(Ye!==0);if(oe&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(s=t.lanes|t.childLanes,s|=up,NM(e,n,s,r,o,l),e===Se&&(Jt=Se=null,te=0),Dr=t,Ia=e,Ji=n,Hh=s,Gh=a,Sx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,aE(wc,function(){return Nx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=zt.T,zt.T=null,a=le.p,le.p=2,r=oe,oe|=4;try{qy(e,t,n)}finally{oe=r,le.p=a,zt.T=i}}Ye=1,wx(),Dx(),Ux()}}function wx(){if(Ye===1){Ye=0;var e=Ia,t=Dr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=zt.T,zt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{hx(t,e);var s=Yh,r=q_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Y_(o.ownerDocument.documentElement,o)){if(l!==null&&cp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,u=h&&h.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,E=Math.min(l.start,v),g=l.end===void 0?E:Math.min(l.end,v);!p.extend&&E>g&&(r=g,g=E,E=r);var f=jm(o,E),m=jm(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=h.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),E>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var M=h[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$c=!!Wh,Yh=Wh=null}finally{oe=a,le.p=i,zt.T=n}}e.current=t,Ye=2}}function Dx(){if(Ye===2){Ye=0;var e=Ia,t=Dr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=zt.T,zt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{ox(e,t.alternate,t)}finally{oe=a,le.p=i,zt.T=n}}Ye=3}}function Ux(){if(Ye===4||Ye===3){Ye=0,bM();var e=Ia,t=Dr,n=Ji,i=Sx;t.subtreeFlags&10256||t.flags&10256?Ye=5:(Ye=0,Dr=Ia=null,Lx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ba=null),np(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=zt.T,a=le.p,le.p=2,zt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{zt.T=t,le.p=a}}Ji&3&&Lu(),Ui(e),a=e.pendingLanes,n&261930&&a&42?e===Vh?No++:(No=0,Vh=e):No=0,cl(0)}}function Lx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function Lu(){return wx(),Dx(),Ux(),Nx()}function Nx(){if(Ye!==5)return!1;var e=Ia,t=Hh;Hh=0;var n=np(Ji),i=zt.T,a=le.p;try{le.p=32>n?32:n,zt.T=null,n=Gh,Gh=null;var s=Ia,r=Ji;if(Ye=0,Dr=Ia=null,Ji=0,oe&6)throw Error(K(331));var o=oe;if(oe|=4,_x(s.current),px(s,s.current,r,n),oe=o,cl(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(el,s)}catch{}return!0}finally{le.p=a,zt.T=i,Lx(e,t)}}function R0(e,t,n){t=Jn(n,t),t=Ph(e.stateNode,t,2),e=za(e,t,2),e!==null&&(il(e,2),Ui(e))}function he(e,t,n){if(e.tag===3)R0(e,e,n);else for(;t!==null;){if(t.tag===3){R0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))){e=Jn(n,e),n=jv(2),i=za(t,n,2),i!==null&&(Zv(n,i,t,e),il(i,2),Ui(i));break}}t=t.return}}function gf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ky;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Bp=!0,a.add(n),e=eE.bind(null,e,t,n),t.then(e,e))}function eE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(te&n)===n&&(Ne===4||Ne===3&&(te&62914560)===te&&300>Bn()-wu?!(oe&2)&&Ur(e,0):Ip|=n,wr===te&&(wr=0)),Ui(e)}function Ox(e,t){t===0&&(t=T_()),e=Rs(e,t),e!==null&&(il(e,t),Ui(e))}function nE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ox(e,n)}function iE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),Ox(e,n)}function aE(e,t){return tp(e,t)}var Yc=null,er=null,Xh=!1,qc=!1,_f=!1,Ua=0;function Ui(e){e!==er&&e.next===null&&(er===null?Yc=er=e:er=er.next=e),qc=!0,Xh||(Xh=!0,rE())}function cl(e,t){if(!_f&&qc){_f=!0;do for(var n=!1,i=Yc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Fn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,C0(i,s))}else s=te,s=vu(i,i===Se?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||nl(i,s)||(n=!0,C0(i,s));i=i.next}while(n);_f=!1}}function sE(){Px()}function Px(){qc=Xh=!1;var e=0;Ua!==0&&gE()&&(e=Ua);for(var t=Bn(),n=null,i=Yc;i!==null;){var a=i.next,s=zx(i,t);s===0?(i.next=null,n===null?Yc=a:n.next=a,a===null&&(er=n)):(n=i,(e!==0||s&3)&&(qc=!0)),i=a}Ye!==0&&Ye!==5||cl(e),Ua!==0&&(Ua=0)}function zx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Fn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=LM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Se,n=te,n=vu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ku(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ku(i),np(n)){case 2:case 8:n=E_;break;case 32:n=wc;break;case 268435456:n=b_;break;default:n=wc}return i=Bx.bind(null,e),n=tp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ku(i),e.callbackPriority=2,e.callbackNode=null,2}function Bx(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Lu()&&e.callbackNode!==n)return null;var i=te;return i=vu(e,e===Se?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(yx(e,i,t),zx(e,Bn()),e.callbackNode!=null&&e.callbackNode===n?Bx.bind(null,e):null)}function C0(e,t){if(Lu())return null;yx(e,t,!0)}function rE(){vE(function(){oe&6?tp(y_,sE):Px()})}function Hp(){if(Ua===0){var e=Ar;e===0&&(e=vl,vl<<=1,!(vl&261888)&&(vl=256)),Ua=e}return Ua}function w0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rc(""+e)}function D0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function oE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=w0((a[Rn]||null).action),r=i.submitter;r&&(t=(t=r[Rn]||null)?w0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new xu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ua!==0){var l=r?D0(a,r):new FormData(a);Nh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?D0(a,r):new FormData(a),Nh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var vf=0;vf<Mh.length;vf++){var xf=Mh[vf],lE=xf.toLowerCase(),cE=xf[0].toUpperCase()+xf.slice(1);mi(lE,"on"+cE)}mi(Z_,"onAnimationEnd");mi(K_,"onAnimationIteration");mi(Q_,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(Ty,"onTransitionRun");mi(Ay,"onTransitionStart");mi(Ry,"onTransitionCancel");mi(J_,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function Ix(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Uc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(d){Uc(d)}a.currentTarget=null,s=l}}}}function Qt(e,t){var n=t[dh];n===void 0&&(n=t[dh]=new Set);var i=e+"__bubble";n.has(i)||(Fx(t,e,2,!1),n.add(i))}function Sf(e,t,n){var i=0;t&&(i|=4),Fx(n,e,i,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Gp(e){if(!e[Cl]){e[Cl]=!0,D_.forEach(function(n){n!=="selectionchange"&&(uE.has(n)||Sf(n,!1,e),Sf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,Sf("selectionchange",!1,t))}}function Fx(e,t,n,i){switch(Jx(t)){case 2:var a=IE;break;case 8:a=FE;break;default:a=Wp}n=a.bind(null,t,n,e),a=void 0,!vh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Mf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=ar(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}I_(function(){var c=s,d=sp(n),h=[];t:{var u=$_.get(e);if(u!==void 0){var p=xu,v=e;switch(e){case"keypress":if(lc(n)===0)break t;case"keydown":case"keyup":p=iy;break;case"focusin":v="focus",p=Zu;break;case"focusout":v="blur",p=Zu;break;case"beforeblur":case"afterblur":p=Zu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=WM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ry;break;case Z_:case K_:case Q_:p=jM;break;case J_:p=ly;break;case"scroll":case"scrollend":p=XM;break;case"wheel":p=uy;break;case"copy":case"cut":case"paste":p=KM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hm;break;case"toggle":case"beforetoggle":p=hy}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){var M=m;if(_=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||_===null||f===null||(M=Io(m,f),M!=null&&E.push(qo(m,M,_))),g)break;m=m.return}0<E.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==_h&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[Fr]))break t;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ar(v):null,v!==null&&(g=tl(v),E=v.tag,v!==g||E!==5&&E!==27&&E!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=Im,M="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Hm,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:mo(p),_=v==null?u:mo(v),u=new E(M,m+"leave",p,n,d),u.target=g,u.relatedTarget=_,M=null,ar(d)===c&&(E=new E(f,m+"enter",v,n,d),E.target=_,E.relatedTarget=g,M=E),g=M,p&&v)e:{for(E=fE,f=p,m=v,_=0,M=f;M;M=E(M))_++;M=0;for(var w=m;w;w=E(w))M++;for(;0<_-M;)f=E(f),_--;for(;0<M-_;)m=E(m),M--;for(;_--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;p!==null&&U0(h,u,p,E,!1),v!==null&&g!==null&&U0(h,g,v,E,!0)}}t:{if(u=c?mo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=km;else if(Xm(u))if(k_)A=yy;else{A=Sy;var R=xy}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&ap(c.elementType)&&(A=km):A=My;if(A&&(A=A(e,c))){X_(h,A,n,d);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&gh(u,"number",u.value)}switch(R=c?mo(c):window,e){case"focusin":(Xm(R)||R.contentEditable==="true")&&(or=R,xh=c,bo=null);break;case"focusout":bo=xh=or=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,Zm(h,n,d);break;case"selectionchange":if(by)break;case"keydown":case"keyup":Zm(h,n,d)}var S;if(lp)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else rr?G_(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(H_&&n.locale!=="ko"&&(rr||T!=="onCompositionStart"?T==="onCompositionEnd"&&rr&&(S=F_()):(Ca=d,rp="value"in Ca?Ca.value:Ca.textContent,rr=!0)),R=jc(c,T),0<R.length&&(T=new Fm(T,e,null,n,d),h.push({event:T,listeners:R}),S?T.data=S:(S=V_(n),S!==null&&(T.data=S)))),(S=py?my(e,n):gy(e,n))&&(T=jc(c,"onBeforeInput"),0<T.length&&(R=new Fm("onBeforeInput","beforeinput",null,n,d),h.push({event:R,listeners:T}),R.data=S)),oE(h,e,c,n,d)}Ix(h,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Io(e,n),a!=null&&i.unshift(qo(e,a,s)),a=Io(e,t),a!=null&&i.push(qo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function fE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Io(n,s),c!=null&&r.unshift(qo(n,c,l))):a||(c=Io(n,s),c!=null&&r.push(qo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var hE=/\r\n?/g,dE=/\u0000|\uFFFD/g;function L0(e){return(typeof e=="string"?e:""+e).replace(hE,`
`).replace(dE,"")}function Hx(e,t){return t=L0(t),L0(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Tr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Tr(e,""+i);break;case"className":Ml(e,"class",i);break;case"tabIndex":Ml(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(e,n,i);break;case"style":B_(e,i,s);break;case"data":if(t!=="object"){Ml(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qi);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=rc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Qt("beforetoggle",e),Qt("toggle",e),sc(e,"popover",i);break;case"xlinkActuate":Ni(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ni(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ni(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ni(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ni(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ni(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ni(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":sc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=GM.get(n)||n,sc(e,n,i))}}function kh(e,t,n,i,a,s){switch(n){case"style":B_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Tr(e,i):(typeof i=="number"||typeof i=="bigint")&&Tr(e,""+i);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!U_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Rn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):sc(e,n,i)}}}function rn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",e),Qt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":Qt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,t));break;default:ge(e,t,i,d,n,null)}}O_(e,s,o,l,c,r,a,!1);return;case"select":Qt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":Qt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ge(e,t,r,o,n,null)}z_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":Qt("beforetoggle",e),Qt("toggle",e),Qt("cancel",e),Qt("close",e);break;case"iframe":case"object":Qt("load",e);break;case"video":case"audio":for(i=0;i<Yo.length;i++)Qt(Yo[i],e);break;case"image":Qt("error",e),Qt("load",e);break;case"details":Qt("toggle",e);break;case"embed":case"source":case"link":Qt("error",e),Qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,c,i,n,null)}return;default:if(ap(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&kh(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function pE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,h)}}for(var u in i){var p=i[u];if(h=n[u],i.hasOwnProperty(u)&&(p!=null||h!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==h&&ge(e,t,u,p,i,h)}}mh(e,r,o,l,c,d,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==s&&ge(e,t,r,a,i,s)}P_(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ge(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ge(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ge(e,t,E,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,t));break;default:ge(e,t,c,u,i,p)}return;default:if(ap(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&kh(e,t,g,void 0,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u===void 0&&p===void 0||kh(e,t,d,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u==null&&p==null||ge(e,t,h,u,i,p)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&N0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,h=l.initiatorType;d&&N0(h)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wh=null,Yh=null;function Zc(e){return e.nodeType===9?e:e.ownerDocument}function O0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=null;function gE(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var Vx=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(e){return P0.resolve(null).then(e).catch(xE)}:Vx;function xE(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function z0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Nr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Oo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Oo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[al]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Oo(e.ownerDocument.body);n=a}while(n);Nr(t)}function B0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function jh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":jh(n),ip(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function SE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[al])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ii(e.nextSibling),e===null)break}return null}function ME(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ii(e.nextSibling),e===null))return null;return e}function Xx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ii(e.nextSibling),e===null))return null;return e}function Zh(e){return e.data==="$?"||e.data==="$~"}function Kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qh=null;function I0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ii(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function F0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kx(e,t,n){switch(t=Zc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function Oo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ip(e)}var si=new Map,H0=new Set;function Kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=le.d;le.d={f:EE,r:bE,D:TE,C:AE,L:RE,m:CE,X:DE,S:wE,M:UE};function EE(){var e=ca.f(),t=Du();return e||t}function bE(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Bv(t):ca.r(e)}var kr=typeof document>"u"?null:document;function Wx(e,t,n){var i=kr;if(i&&typeof t=="string"&&t){var a=Qn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),H0.has(a)||(H0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),rn(t,"link",e),Je(t),i.head.appendChild(t)))}}function TE(e){ca.D(e),Wx("dns-prefetch",e,null)}function AE(e,t){ca.C(e,t),Wx("preconnect",e,t)}function RE(e,t,n){ca.L(e,t,n);var i=kr;if(i&&e&&t){var a='link[rel="preload"][as="'+Qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Qn(n.imageSizes)+'"]')):a+='[href="'+Qn(e)+'"]';var s=a;switch(t){case"style":s=Lr(e);break;case"script":s=Wr(e)}si.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),si.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(ul(s))||t==="script"&&i.querySelector(fl(s))||(t=i.createElement("link"),rn(t,"link",e),Je(t),i.head.appendChild(t)))}}function CE(e,t){ca.m(e,t);var n=kr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Qn(i)+'"][href="'+Qn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Wr(e)}if(!si.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),si.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fl(s)))return}i=n.createElement("link"),rn(i,"link",e),Je(i),n.head.appendChild(i)}}}function wE(e,t,n){ca.S(e,t,n);var i=kr;if(i&&e){var a=pr(i).hoistableStyles,s=Lr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ul(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=si.get(s))&&Vp(e,n);var l=r=i.createElement("link");Je(l),rn(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,gc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function DE(e,t){ca.X(e,t);var n=kr;if(n&&e){var i=pr(n).hoistableScripts,a=Wr(e),s=i.get(a);s||(s=n.querySelector(fl(a)),s||(e=Ce({src:e,async:!0},t),(t=si.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),rn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function UE(e,t){ca.M(e,t);var n=kr;if(n&&e){var i=pr(n).hoistableScripts,a=Wr(e),s=i.get(a);s||(s=n.querySelector(fl(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=si.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),rn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function G0(e,t,n,i){var a=(a=Na.current)?Kc(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lr(n.href),n=pr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lr(n.href);var s=pr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(ul(e)))&&!s._p&&(r.instance=s,r.state.loading=5),si.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},si.set(e,n),s||LE(a,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wr(n),n=pr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function Lr(e){return'href="'+Qn(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function Yx(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function LE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),rn(t,"link",n),Je(t),e.head.appendChild(t))}function Wr(e){return'[src="'+Qn(e)+'"]'}function fl(e){return"script[async]"+e}function V0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qn(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),rn(i,"style",a),gc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Lr(n.href);var s=e.querySelector(ul(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=Yx(n),(a=si.get(a))&&Vp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),rn(s,"link",i),t.state.loading|=4,gc(s,n.precedence,e),t.instance=s;case"script":return s=Wr(n.src),(a=e.querySelector(fl(s)))?(t.instance=a,Je(a),a):(i=n,(a=si.get(s))&&(i=Ce({},n),Xp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),rn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,gc(i,n.precedence,e));return t.instance}function gc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _c=null;function X0(e,t,n){if(_c===null){var i=new Map,a=_c=new Map;a.set(n,i)}else a=_c,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[al]||s[en]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function k0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function NE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function OE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Lr(i.href),s=t.querySelector(ul(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=Yx(i),(a=si.get(a))&&Vp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),rn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ef=0;function PE(e,t){return e.stylesheets&&e.count===0&&vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ef===0&&(Ef=62500*mE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ef?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jc=null;function vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jc=new Map,t.forEach(zE,e),Jc=null,Qc.call(e))}function zE(e,t){if(!(t.state.loading&4)){var n=Jc.get(e);if(n)var i=n.get(null);else{n=new Map,Jc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Qc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var jo={$$typeof:Yi,Provider:null,Consumer:null,_currentValue:hs,_currentValue2:hs,_threadCount:0};function BE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function jx(e,t,n,i,a,s,r,o,l,c,d,h){return e=new BE(e,t,n,r,l,c,d,h,o),t=1,s===!0&&(t|=24),s=Pn(3,null,null,t),e.current=s,s.stateNode=e,t=mp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},vp(s),e}function Zx(e){return e?(e=ur,e):ur}function Kx(e,t,n,i,a,s){a=Zx(a),i.context===null?i.context=a:i.pendingContext=a,i=Pa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=za(e,i,t),n!==null&&(Tn(n,e,t),Ao(n,e,t))}function W0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kp(e,t){W0(e,t),(e=e.alternate)&&W0(e,t)}function Qx(e){if(e.tag===13||e.tag===31){var t=Rs(e,67108864);t!==null&&Tn(t,e,67108864),kp(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var t=Hn();t=ep(t);var n=Rs(e,t);n!==null&&Tn(n,e,t),kp(e,t)}}var $c=!0;function IE(e,t,n,i){var a=zt.T;zt.T=null;var s=le.p;try{le.p=2,Wp(e,t,n,i)}finally{le.p=s,zt.T=a}}function FE(e,t,n,i){var a=zt.T;zt.T=null;var s=le.p;try{le.p=8,Wp(e,t,n,i)}finally{le.p=s,zt.T=a}}function Wp(e,t,n,i){if($c){var a=Jh(i);if(a===null)Mf(e,t,i,tu,n),q0(e,i);else if(GE(a,e,t,n,i))i.stopPropagation();else if(q0(e,i),t&4&&-1<HE.indexOf(e)){for(;a!==null;){var s=Hr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=as(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Ui(s),!(oe&6)&&(Xc=Bn()+500,cl(0))}}break;case 31:case 13:o=Rs(s,2),o!==null&&Tn(o,s,2),Du(),kp(s,2)}if(s=Jh(i),s===null&&Mf(e,t,i,tu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Mf(e,t,i,null,n)}}function Jh(e){return e=sp(e),Yp(e)}var tu=null;function Yp(e){if(tu=null,e=ar(e),e!==null){var t=tl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=__(t),e!==null)return e;e=null}else if(n===31){if(e=v_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tu=e,null}function Jx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(TM()){case y_:return 2;case E_:return 8;case wc:case AM:return 32;case b_:return 268435456;default:return 32}default:return 32}}var $h=!1,Fa=null,Ha=null,Ga=null,Zo=new Map,Ko=new Map,Ta=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function to(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Hr(t),t!==null&&Qx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function GE(e,t,n,i,a){switch(t){case"focusin":return Fa=to(Fa,e,t,n,i,a),!0;case"dragenter":return Ha=to(Ha,e,t,n,i,a),!0;case"mouseover":return Ga=to(Ga,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Zo.set(s,to(Zo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ko.set(s,to(Ko.get(s)||null,e,t,n,i,a)),!0}return!1}function $x(e){var t=ar(e.target);if(t!==null){var n=tl(t);if(n!==null){if(t=n.tag,t===13){if(t=__(n),t!==null){e.blockedOn=t,Um(e.priority,function(){Y0(n)});return}}else if(t===31){if(t=v_(n),t!==null){e.blockedOn=t,Um(e.priority,function(){Y0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_h=i,n.target.dispatchEvent(i),_h=null}else return t=Hr(n),t!==null&&Qx(t),e.blockedOn=n,!1;t.shift()}return!0}function j0(e,t,n){xc(e)&&n.delete(t)}function VE(){$h=!1,Fa!==null&&xc(Fa)&&(Fa=null),Ha!==null&&xc(Ha)&&(Ha=null),Ga!==null&&xc(Ga)&&(Ga=null),Zo.forEach(j0),Ko.forEach(j0)}function wl(e,t){e.blockedOn===t&&(e.blockedOn=null,$h||($h=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,VE)))}var Dl=null;function Z0(e){Dl!==e&&(Dl=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){Dl===e&&(Dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Yp(i||n)===null)continue;break}var s=Hr(n);s!==null&&(e.splice(t,3),t-=3,Nh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Nr(e){function t(l){return wl(l,e)}Fa!==null&&wl(Fa,e),Ha!==null&&wl(Ha,e),Ga!==null&&wl(Ga,e),Zo.forEach(t),Ko.forEach(t);for(var n=0;n<Ta.length;n++){var i=Ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)$x(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Rn]||null;if(typeof s=="function")r||Z0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Rn]||null)o=r.formAction;else if(Yp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Z0(n)}}}function tS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function qp(e){this._internalRoot=e}Nu.prototype.render=qp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=Hn();Kx(n,i,e,t,null,null)};Nu.prototype.unmount=qp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kx(e.current,2,null,e,null,null),Du(),t[Fr]=null}};function Nu(e){this._internalRoot=e}Nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=w_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&$x(e)}};var K0=m_.version;if(K0!=="19.2.5")throw Error(K(527,K0,"19.2.5"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=vM(t),e=e!==null?x_(e):null,e=e===null?null:e.stateNode,e};var XE={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:zt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{el=Ul.inject(XE),In=Ul}catch{}}gu.createRoot=function(e,t){if(!g_(e))throw Error(K(299));var n=!1,i="",a=Wv,s=Yv,r=qv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=jx(e,1,!1,null,null,n,i,null,a,s,r,tS),e[Fr]=t.current,Gp(e),new qp(t)};gu.hydrateRoot=function(e,t,n){if(!g_(e))throw Error(K(299));var i=!1,a="",s=Wv,r=Yv,o=qv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=jx(e,1,!0,t,n??null,i,a,l,s,r,o,tS),t.context=Zx(null),n=t.current,i=Hn(),i=ep(i),a=Pa(i),a.callback=null,za(n,a,i),n=i,t.current.lanes=n,il(t,n),Ui(t),e[Fr]=t.current,Gp(e),new Nu(t)};gu.version="19.2.5";function eS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eS)}catch(e){console.error(e)}}eS(),c_.exports=gu;var kE=c_.exports;const WE=$g(kE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="184",YE=0,Q0=1,qE=2,Sc=1,jE=2,vo=3,qa=0,An=1,Wi=2,$i=0,Mr=1,eu=2,J0=3,$0=4,ZE=5,ls=100,KE=101,QE=102,JE=103,$E=104,tb=200,eb=201,nb=202,ib=203,td=204,ed=205,ab=206,sb=207,rb=208,ob=209,lb=210,cb=211,ub=212,fb=213,hb=214,nd=0,id=1,ad=2,Or=3,sd=4,rd=5,od=6,ld=7,nS=0,db=1,pb=2,Ri=0,iS=1,aS=2,sS=3,rS=4,oS=5,lS=6,cS=7,uS=300,ys=301,Pr=302,bf=303,Tf=304,Ou=306,cd=1e3,Zi=1001,ud=1002,sn=1003,mb=1004,Ll=1005,pn=1006,Af=1007,us=1008,ti=1009,fS=1010,hS=1011,Qo=1012,Zp=1013,wi=1014,bi=1015,oa=1016,Kp=1017,Qp=1018,Jo=1020,dS=35902,pS=35899,mS=1021,gS=1022,di=1023,la=1026,fs=1027,_S=1028,Jp=1029,Es=1030,$p=1031,tm=1033,Mc=33776,yc=33777,Ec=33778,bc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,nu=37490,Sd=37491,Md=37808,yd=37809,Ed=37810,bd=37811,Td=37812,Ad=37813,Rd=37814,Cd=37815,wd=37816,Dd=37817,Ud=37818,Ld=37819,Nd=37820,Od=37821,Pd=36492,zd=36494,Bd=36495,Id=36283,Fd=36284,iu=36285,Hd=36286,gb=3200,Gd=0,_b=1,Aa="",Yn="srgb",au="srgb-linear",su="linear",ce="srgb",Ps=7680,tg=519,vb=512,xb=513,Sb=514,em=515,Mb=516,yb=517,nm=518,Eb=519,Vd=35044,eg="300 es",Ti=2e3,ru=2001;function bb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ou(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Tb(){const e=ou("canvas");return e.style.display="block",e}const ng={};function lu(...e){const t="THREE."+e.shift();console.log(t,...e)}function vS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ot(...e){e=vS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ne(...e){e=vS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xd(...e){const t=e.join(" ");t in ng||(ng[t]=!0,Ot(...e))}function Ab(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Rb={[nd]:id,[ad]:od,[sd]:ld,[Or]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Or};class ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const Po=Math.PI/180,$o=180/Math.PI;function ta(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function im(e,t){return(e%t+t)%t}function Cb(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function wb(e,t,n){return e!==t?(n-e)/(t-e):0}function zo(e,t,n){return(1-n)*e+n*t}function Db(e,t,n,i){return zo(e,t,1-Math.exp(-n*i))}function Ub(e,t=1){return t-Math.abs(im(e,t*2)-t)}function Lb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Nb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ob(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Pb(e,t){return e+Math.random()*(t-e)}function zb(e){return e*(.5-Math.random())}function Bb(e){e!==void 0&&(ig=e);let t=ig+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ib(e){return e*Po}function Fb(e){return e*$o}function Hb(e){return(e&e-1)===0&&e!==0}function Gb(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Vb(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Xb(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),d=r((t+i)/2),h=s((t-i)/2),u=r((t-i)/2),p=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*d,l*h,l*u,o*c);break;case"YZY":e.set(l*u,o*d,l*h,o*c);break;case"ZXZ":e.set(l*h,l*u,o*d,o*c);break;case"XZX":e.set(o*d,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*d,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*d,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function hi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function fe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Rf={DEG2RAD:Po,RAD2DEG:$o,generateUUID:ta,clamp:$t,euclideanModulo:im,mapLinear:Cb,inverseLerp:wb,lerp:zo,damp:Db,pingpong:Ub,smoothstep:Lb,smootherstep:Nb,randInt:Ob,randFloat:Pb,randFloatSpread:zb,seededRandom:Bb,degToRad:Ib,radToDeg:Fb,isPowerOfTwo:Hb,ceilPowerOfTwo:Gb,floorPowerOfTwo:Vb,setQuaternionFromProperEuler:Xb,normalize:fe,denormalize:hi},um=class um{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};um.prototype.isVector2=!0;let Xt=um;class Yr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],E=s[r+3];if(h!==E||l!==u||c!==p||d!==v){let g=l*u+c*p+d*v+h*E;g<0&&(u=-u,p=-p,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+E*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+E*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+d*h+l*p-c*u,t[n+1]=l*v+d*u+c*h-o*p,t[n+2]=c*v+d*p+o*u-l*h,t[n+3]=d*v-o*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fm=class fm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ag.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ag.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),d=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*d,this.y=i+l*d+o*c-s*h,this.z=a+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cf.copy(this).projectOnVector(t),this.sub(Cf)}reflect(t){return this.sub(Cf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;let P=fm;const Cf=new P,ag=new Yr,hm=class hm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],E=a[0],g=a[3],f=a[6],m=a[1],_=a[4],M=a[7],w=a[2],A=a[5],R=a[8];return s[0]=r*E+o*m+l*w,s[3]=r*g+o*_+l*A,s[6]=r*f+o*M+l*R,s[1]=c*E+d*m+h*w,s[4]=c*g+d*_+h*A,s[7]=c*f+d*M+h*R,s[2]=u*E+p*m+v*w,s[5]=u*g+p*_+v*A,s[8]=u*f+p*M+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*r-o*c,u=o*l-d*s,p=c*s-r*l,v=n*h+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=h*E,t[1]=(a*c-d*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(d*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=p*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(wf.makeScale(t,n)),this}rotate(t){return this.premultiply(wf.makeRotation(-t)),this}translate(t,n){return this.premultiply(wf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hm.prototype.isMatrix3=!0;let Bt=hm;const wf=new Bt,sg=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const e={enabled:!0,workingColorSpace:au,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(a.r=ea(a.r),a.g=ea(a.g),a.b=ea(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(a.r=yr(a.r),a.g=yr(a.g),a.b=yr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Aa?su:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Xd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Xd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[au]:{primaries:t,whitePoint:i,transfer:su,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}const ie=kb();function ea(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let zs;class Wb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=ou("canvas")),zs.width=t.width,zs.height=t.height;const a=zs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ou("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ea(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ea(n[i]/255)*255):n[i]=ea(n[i]);return{data:n,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yb=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Df(a[r].image)):s.push(Df(a[r]))}else s=Df(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Df(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let qb=0;const Uf=new P;class mn extends ws{constructor(t=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Zi,a=Zi,s=pn,r=us,o=di,l=ti,c=mn.DEFAULT_ANISOTROPY,d=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=ta(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uf).x}get height(){return this.source.getSize(Uf).y}get depth(){return this.source.getSize(Uf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cd:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cd:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=uS;mn.DEFAULT_ANISOTROPY=1;const dm=class dm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,w=(f+1)/2,A=(d+u)/4,R=(h+E)/4,S=(v+g)/4;return _>M&&_>w?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=A/i,s=R/i):M>w?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=A/a,s=S/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=R/s,a=S/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-E)*(h-E)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-E)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dm.prototype.isVector4=!0;let Fe=dm;class jb extends ws{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new mn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new am(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends jb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class xS extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=class pu{constructor(t,n,i,a,s,r,o,l,c,d,h,u,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,E,g)}set(t,n,i,a,s,r,o,l,c,d,h,u,p,v,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Bs.setFromMatrixColumn(t,0).length(),s=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,p=r*h,v=o*d,E=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,v=c*d,E=c*h;n[0]=u+E*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*d,n[9]=-o,n[2]=p*o-v,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,v=c*d,E=c*h;n[0]=u-E*o,n[4]=-r*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*d,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*d,p=r*h,v=o*d,E=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+E,n[1]=l*h,n[5]=E*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*d,n[4]=E-u*h,n[8]=v*h+p,n[1]=h,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-E*h}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+E,n[5]=r*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=E*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kb,t,Qb)}lookAt(t,n,i){const a=this.elements;return Un.subVectors(t,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),pa.crossVectors(i,Un),pa.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),pa.crossVectors(i,Un)),pa.normalize(),Nl.crossVectors(Un,pa),a[0]=pa.x,a[4]=Nl.x,a[8]=Un.x,a[1]=pa.y,a[5]=Nl.y,a[9]=Un.y,a[2]=pa.z,a[6]=Nl.z,a[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],M=i[11],w=i[15],A=a[0],R=a[4],S=a[8],T=a[12],D=a[1],U=a[5],F=a[9],q=a[13],Q=a[2],B=a[6],L=a[10],O=a[14],X=a[3],W=a[7],$=a[11],ft=a[15];return s[0]=r*A+o*D+l*Q+c*X,s[4]=r*R+o*U+l*B+c*W,s[8]=r*S+o*F+l*L+c*$,s[12]=r*T+o*q+l*O+c*ft,s[1]=d*A+h*D+u*Q+p*X,s[5]=d*R+h*U+u*B+p*W,s[9]=d*S+h*F+u*L+p*$,s[13]=d*T+h*q+u*O+p*ft,s[2]=v*A+E*D+g*Q+f*X,s[6]=v*R+E*U+g*B+f*W,s[10]=v*S+E*F+g*L+f*$,s[14]=v*T+E*q+g*O+f*ft,s[3]=m*A+_*D+M*Q+w*X,s[7]=m*R+_*U+M*B+w*W,s[11]=m*S+_*F+M*L+w*$,s[15]=m*T+_*q+M*O+w*ft,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],v=t[3],E=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*h,M=o*u-l*h,w=r*p-c*d,A=r*u-l*d,R=r*h-o*d;return n*(E*m-g*_+f*M)-i*(v*m-g*w+f*A)+a*(v*_-E*w+f*R)-s*(v*M-E*A+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],v=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,M=n*c-s*r,w=i*l-a*o,A=i*c-s*o,R=a*c-s*l,S=d*E-h*v,T=d*g-u*v,D=d*f-p*v,U=h*g-u*E,F=h*f-p*E,q=u*f-p*g,Q=m*q-_*F+M*U+w*D-A*T+R*S;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return t[0]=(o*q-l*F+c*U)*B,t[1]=(a*F-i*q-s*U)*B,t[2]=(E*R-g*A+f*w)*B,t[3]=(u*A-h*R-p*w)*B,t[4]=(l*D-r*q-c*T)*B,t[5]=(n*q-a*D+s*T)*B,t[6]=(g*M-v*R-f*_)*B,t[7]=(d*R-u*M+p*_)*B,t[8]=(r*F-o*D+c*S)*B,t[9]=(i*D-n*F-s*S)*B,t[10]=(v*A-E*M+f*m)*B,t[11]=(h*M-d*A-p*m)*B,t[12]=(o*T-r*U-l*S)*B,t[13]=(n*U-i*T+a*S)*B,t[14]=(E*_-v*w-g*m)*B,t[15]=(d*w-h*_+u*m)*B,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,h=o+o,u=s*c,p=s*d,v=s*h,E=r*d,g=r*h,f=o*h,m=l*c,_=l*d,M=l*h,w=i.x,A=i.y,R=i.z;return a[0]=(1-(E+f))*w,a[1]=(p+M)*w,a[2]=(v-_)*w,a[3]=0,a[4]=(p-M)*A,a[5]=(1-(u+f))*A,a[6]=(g+m)*A,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Bs.set(a[0],a[1],a[2]).length();const o=Bs.set(a[4],a[5],a[6]).length(),l=Bs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),oi.copy(this);const c=1/r,d=1/o,h=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=d,oi.elements[5]*=d,oi.elements[6]*=d,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,n.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Ti,l=!1){const c=this.elements,d=2*s/(n-t),h=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,E;if(l)v=s/(r-s),E=r*s/(r-s);else if(o===Ti)v=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===ru)v=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Ti,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,E;if(l)v=1/(r-s),E=r/(r-s);else if(o===Ti)v=-2/(r-s),E=-(r+s)/(r-s);else if(o===ru)v=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};pu.prototype.isMatrix4=!0;let Oe=pu;const Bs=new P,oi=new Oe,Kb=new P(0,0,0),Qb=new P(1,1,1),pa=new P,Nl=new P,Un=new P,og=new Oe,lg=new Yr;class ja{constructor(t=0,n=0,i=0,a=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return og.makeRotationFromQuaternion(t),this.setFromRotationMatrix(og,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lg.setFromEuler(this),this.setFromQuaternion(lg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jb=0;const cg=new P,Is=new Yr,Bi=new Oe,Ol=new P,eo=new P,$b=new P,tT=new Yr,ug=new P(1,0,0),fg=new P(0,1,0),hg=new P(0,0,1),dg={type:"added"},eT={type:"removed"},Fs={type:"childadded",child:null},Lf={type:"childremoved",child:null};class on extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new P,n=new ja,i=new Yr,a=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Bt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(ug,t)}rotateY(t){return this.rotateOnAxis(fg,t)}rotateZ(t){return this.rotateOnAxis(hg,t)}translateOnAxis(t,n){return cg.copy(t).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ug,t)}translateY(t){return this.translateOnAxis(fg,t)}translateZ(t){return this.translateOnAxis(hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ol.copy(t):Ol.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(eo,Ol,this.up):Bi.lookAt(Ol,eo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Bi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eT),Lf.child=t,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,$b),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,tT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}on.DEFAULT_UP=new P(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xo extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nT={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const SS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Of(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Vt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ie.workingColorSpace){return this.r=t,this.g=n,this.b=i,ie.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ie.workingColorSpace){if(t=im(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Of(r,s,t+1/3),this.g=Of(r,s,t),this.b=Of(r,s,t-1/3)}return ie.colorSpaceToWorking(this,a),this}setStyle(t,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ot("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Yn){const i=SS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ea(t.r),this.g=ea(t.g),this.b=ea(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return ie.workingToColorSpace(hn.copy(this),t),Math.round($t(hn.r*255,0,255))*65536+Math.round($t(hn.g*255,0,255))*256+Math.round($t(hn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ie.workingColorSpace){ie.workingToColorSpace(hn.copy(this),n);const i=hn.r,a=hn.g,s=hn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=ie.workingColorSpace){return ie.workingToColorSpace(hn.copy(this),n),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Yn){ie.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,a=hn.b;return t!==Yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ma),this.setHSL(ma.h+t,ma.s+n,ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ma),t.getHSL(Pl);const i=zo(ma.h,Pl.h,n),a=zo(ma.s,Pl.s,n),s=zo(ma.l,Pl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Vt;Vt.NAMES=SS;class rm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=n}clone(){return new rm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iT extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const li=new P,Ii=new P,Pf=new P,Fi=new P,Hs=new P,Gs=new P,pg=new P,zf=new P,Bf=new P,If=new P,Ff=new Fe,Hf=new Fe,Gf=new Fe;class ei{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),li.subVectors(t,n),a.cross(li);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){li.subVectors(a,n),Ii.subVectors(i,n),Pf.subVectors(t,n);const r=li.dot(li),o=li.dot(Ii),l=li.dot(Pf),c=Ii.dot(Ii),d=Ii.dot(Pf),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(r*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Ff.setScalar(0),Hf.setScalar(0),Gf.setScalar(0),Ff.fromBufferAttribute(t,n),Hf.fromBufferAttribute(t,i),Gf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Ff,s.x),r.addScaledVector(Hf,s.y),r.addScaledVector(Gf,s.z),r}static isFrontFacing(t,n,i,a){return li.subVectors(i,n),Ii.subVectors(t,n),li.cross(Ii).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ei.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ei.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Hs.subVectors(a,i),Gs.subVectors(s,i),zf.subVectors(t,i);const l=Hs.dot(zf),c=Gs.dot(zf);if(l<=0&&c<=0)return n.copy(i);Bf.subVectors(t,a);const d=Hs.dot(Bf),h=Gs.dot(Bf);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Hs,r);If.subVectors(t,s);const p=Hs.dot(If),v=Gs.dot(If);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Gs,o);const g=d*v-p*h;if(g<=0&&h-d>=0&&p-v>=0)return pg.subVectors(s,a),o=(h-d)/(h-d+(p-v)),n.copy(a).addScaledVector(pg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Hs,r).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class hl{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ci):ci.fromBufferAttribute(s,r),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(t.matrixWorld),this.union(zl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Bl.subVectors(this.max,no),Vs.subVectors(t.a,no),Xs.subVectors(t.b,no),ks.subVectors(t.c,no),ga.subVectors(Xs,Vs),_a.subVectors(ks,Xs),$a.subVectors(Vs,ks);let n=[0,-ga.z,ga.y,0,-_a.z,_a.y,0,-$a.z,$a.y,ga.z,0,-ga.x,_a.z,0,-_a.x,$a.z,0,-$a.x,-ga.y,ga.x,0,-_a.y,_a.x,0,-$a.y,$a.x,0];return!Vf(n,Vs,Xs,ks,Bl)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Vs,Xs,ks,Bl))?!1:(Il.crossVectors(ga,_a),n=[Il.x,Il.y,Il.z],Vf(n,Vs,Xs,ks,Bl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hi=[new P,new P,new P,new P,new P,new P,new P,new P],ci=new P,zl=new hl,Vs=new P,Xs=new P,ks=new P,ga=new P,_a=new P,$a=new P,no=new P,Bl=new P,Il=new P,ts=new P;function Vf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){ts.fromArray(e,s);const o=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),l=t.dot(ts),c=n.dot(ts),d=i.dot(ts);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ge=new P,Fl=new Xt;let aT=0;class ai extends ws{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(t),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix3(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix4(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyNormalMatrix(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.transformDirection(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=hi(n,this.array)),n}setX(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=hi(n,this.array)),n}setY(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=hi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=hi(n,this.array)),n}setW(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array),s=fe(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vd&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class MS extends ai{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class yS extends ai{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ln extends ai{constructor(t,n,i){super(new Float32Array(t),n,i)}}const sT=new hl,io=new P,Xf=new P;class Pu{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):sT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const n=io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(io,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Xf)),this.expandByPoint(io.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rT=0;const kn=new Oe,kf=new on,Ws=new P,Ln=new hl,ao=new hl,Ke=new P;class wn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bb(t)?yS:MS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return kf.lookAt(t),kf.updateMatrix(),this.applyMatrix4(kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Ln.min,ao.min),Ln.expandByPoint(Ke),Ke.addVectors(Ln.max,ao.max),Ln.expandByPoint(Ke)):(Ln.expandByPoint(ao.min),Ln.expandByPoint(ao.max))}Ln.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ke.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),Ke.add(Ws)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new P,l[S]=new P;const c=new P,d=new P,h=new P,u=new Xt,p=new Xt,v=new Xt,E=new P,g=new P;function f(S,T,D){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,D),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,D),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(U),o[S].add(E),o[T].add(E),o[D].add(E),l[S].add(g),l[T].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let S=0,T=m.length;S<T;++S){const D=m[S],U=D.start,F=D.count;for(let q=U,Q=U+F;q<Q;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const _=new P,M=new P,w=new P,A=new P;function R(S){w.fromBufferAttribute(a,S),A.copy(w);const T=o[S];_.copy(T),_.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(A,T);const U=M.dot(l[S])<0?-1:1;r.setXYZW(S,_.x,_.y,_.z,U)}for(let S=0,T=m.length;S<T;++S){const D=m[S],U=D.start,F=D.count;for(let q=U,Q=U+F;q<Q;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new P,s=new P,r=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),h.subVectors(a,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new ai(u,d,h)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=ta()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new P;class cu{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=hi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=hi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=hi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=hi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array),s=fe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){lu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new ai(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lT=0;class Ds extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Mr,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ot(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==qa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==td&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ES extends Ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ys;const so=new P,qs=new P,js=new P,Zs=new Xt,ro=new Xt,bS=new Oe,Hl=new P,oo=new P,Gl=new P,mg=new Xt,Wf=new Xt,gg=new Xt;class cT extends on{constructor(t=new ES){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new wn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oT(n,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new cu(i,3,0,!1)),Ys.setAttribute("uv",new cu(i,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new Xt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),bS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-js.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;Vl(Hl.set(-.5,-.5,0),js,r,qs,a,s),Vl(oo.set(.5,-.5,0),js,r,qs,a,s),Vl(Gl.set(.5,.5,0),js,r,qs,a,s),mg.set(0,0),Wf.set(1,0),gg.set(1,1);let o=t.ray.intersectTriangle(Hl,oo,Gl,!1,so);if(o===null&&(Vl(oo.set(-.5,.5,0),js,r,qs,a,s),Wf.set(0,1),o=t.ray.intersectTriangle(Hl,Gl,oo,!1,so),o===null))return;const l=t.ray.origin.distanceTo(so);l<t.near||l>t.far||n.push({distance:l,point:so.clone(),uv:ei.getInterpolation(so,Hl,oo,Gl,mg,Wf,gg,new Xt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vl(e,t,n,i,a,s){Zs.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(ro.x=s*Zs.x-a*Zs.y,ro.y=a*Zs.x+s*Zs.y):ro.copy(Zs),e.copy(t),e.x+=ro.x,e.y+=ro.y,e.applyMatrix4(bS)}const Gi=new P,Yf=new P,Xl=new P,va=new P,qf=new P,kl=new P,jf=new P;class om{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Gi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Yf.copy(t).add(n).multiplyScalar(.5),Xl.copy(n).sub(t).normalize(),va.copy(this.origin).sub(Yf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Xl),o=va.dot(this.direction),l=-va.dot(Xl),c=va.lengthSq(),d=Math.abs(1-r*r);let h,u,p,v;if(d>0)if(h=r*l-o,u=r*o-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const E=1/d;h*=E,u*=E,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Yf).addScaledVector(Xl,u),p}intersectSphere(t,n){Gi.subVectors(t.center,this.origin);const i=Gi.dot(this.direction),a=Gi.dot(Gi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,n,i,a,s){qf.subVectors(n,t),kl.subVectors(i,t),jf.crossVectors(qf,kl);let r=this.direction.dot(jf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;va.subVectors(this.origin,t);const l=o*this.direction.dot(kl.crossVectors(va,kl));if(l<0)return null;const c=o*this.direction.dot(qf.cross(va));if(c<0||l+c>r)return null;const d=-o*va.dot(jf);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uu extends Ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=nS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _g=new Oe,es=new om,Wl=new Pu,vg=new P,Yl=new P,ql=new P,jl=new P,Zf=new P,Zl=new P,xg=new P,Kl=new P;class dn extends on{constructor(t=new wn,n=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Zf.fromBufferAttribute(h,t),r?Zl.addScaledVector(Zf,d):Zl.addScaledVector(Zf.sub(n),d))}n.add(Zl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),es.copy(t.ray).recast(t.near),!(Wl.containsPoint(es.origin)===!1&&(es.intersectSphere(Wl,vg)===null||es.origin.distanceToSquared(vg)>(t.far-t.near)**2))&&(_g.copy(s).invert(),es.copy(t.ray).applyMatrix4(_g),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,es)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=_;M<w;M+=3){const A=o.getX(M),R=o.getX(M+1),S=o.getX(M+2);a=Ql(this,f,t,i,c,d,h,A,R,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);a=Ql(this,r,t,i,c,d,h,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=_;M<w;M+=3){const A=M,R=M+1,S=M+2;a=Ql(this,f,t,i,c,d,h,A,R,S),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=g,_=g+1,M=g+2;a=Ql(this,r,t,i,c,d,h,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function uT(e,t,n,i,a,s,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===qa,o),l===null)return null;Kl.copy(o),Kl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Kl);return c<n.near||c>n.far?null:{distance:c,point:Kl.clone(),object:e}}function Ql(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Yl),e.getVertexPosition(l,ql),e.getVertexPosition(c,jl);const d=uT(e,t,n,i,Yl,ql,jl,xg);if(d){const h=new P;ei.getBarycoord(xg,Yl,ql,jl,h),a&&(d.uv=ei.getInterpolatedAttribute(a,o,l,c,h,new Xt)),s&&(d.uv1=ei.getInterpolatedAttribute(s,o,l,c,h,new Xt)),r&&(d.normal=ei.getInterpolatedAttribute(r,o,l,c,h,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};ei.getNormal(Yl,ql,jl,u.normal),d.face=u,d.barycoord=h}return d}class fT extends mn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=sn,d=sn,h,u){super(null,r,o,l,c,d,a,s,h,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kf=new P,hT=new P,dT=new Bt;class os{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Kf.subVectors(i,n).cross(hT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Kf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||dT.getNormalMatrix(t),a=this.coplanarPoint(Kf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Pu,pT=new Xt(.5,.5),Jl=new P;class TS{constructor(t=new os,n=new os,i=new os,a=new os,s=new os,r=new os){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],M=s[14],w=s[15];if(a[0].setComponents(c-r,p-d,f-v,w-m).normalize(),a[1].setComponents(c+r,p+d,f+v,w+m).normalize(),a[2].setComponents(c+o,p+h,f+E,w+_).normalize(),a[3].setComponents(c-o,p-h,f-E,w-_).normalize(),i)a[4].setComponents(l,u,g,M).normalize(),a[5].setComponents(c-l,p-u,f-g,w-M).normalize();else if(a[4].setComponents(c-l,p-u,f-g,w-M).normalize(),n===Ti)a[5].setComponents(c+l,p+u,f+g,w+M).normalize();else if(n===ru)a[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);const n=pT.distanceTo(t.center);return ns.radius=.7071067811865476+n,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Jl.x=a.normal.x>0?t.max.x:t.min.x,Jl.y=a.normal.y>0?t.max.y:t.min.y,Jl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mT extends Ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new P,hu=new P,Sg=new Oe,lo=new om,$l=new Pu,Qf=new P,Mg=new P;class gT extends on{constructor(t=new wn,n=new mT){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)fu.fromBufferAttribute(n,a-1),hu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new ln(i,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(a),$l.radius+=s,t.ray.intersectsSphere($l)===!1)return;Sg.copy(a).invert(),lo.copy(t.ray).applyMatrix4(Sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=d.getX(E),m=d.getX(E+1),_=tc(this,t,lo,l,f,m,E);_&&n.push(_)}if(this.isLineLoop){const E=d.getX(v-1),g=d.getX(p),f=tc(this,t,lo,l,E,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=tc(this,t,lo,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=tc(this,t,lo,l,v-1,p,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(fu.fromBufferAttribute(o,a),hu.fromBufferAttribute(o,s),n.distanceSqToSegment(fu,hu,Qf,Mg)>i)return;Qf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Qf);if(!(c<t.near||c>t.far))return{distance:c,point:Mg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class AS extends mn{constructor(t=[],n=ys,i,a,s,r,o,l,c,d){super(t,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _T extends mn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zr extends mn{constructor(t,n,i=wi,a,s,r,o=sn,l=sn,c,d=la,h=1){if(d!==la&&d!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:h};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vT extends zr{constructor(t,n=wi,i=ys,a,s,r=sn,o=sn,l,c=la){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,n,i,a,s,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class RS extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Va extends wn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function v(E,g,f,m,_,M,w,A,R,S,T){const D=M/R,U=w/S,F=M/2,q=w/2,Q=A/2,B=R+1,L=S+1;let O=0,X=0;const W=new P;for(let $=0;$<L;$++){const ft=$*U-q;for(let Tt=0;Tt<B;Tt++){const kt=Tt*D-F;W[E]=kt*m,W[g]=ft*_,W[f]=Q,c.push(W.x,W.y,W.z),W[E]=0,W[g]=0,W[f]=A>0?1:-1,d.push(W.x,W.y,W.z),h.push(Tt/R),h.push(1-$/S),O+=1}}for(let $=0;$<S;$++)for(let ft=0;ft<R;ft++){const Tt=u+ft+B*$,kt=u+ft+B*($+1),Zt=u+(ft+1)+B*($+1),Nt=u+(ft+1)+B*$;l.push(Tt,kt,Nt),l.push(kt,Zt,Nt),X+=6}o.addGroup(p,X,T),p+=X,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lm extends wn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(s.slice(),3)),this.setAttribute("uv",new ln(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new P,M=new P,w=new P;for(let A=0;A<n.length;A+=3)p(n[A+0],_),p(n[A+1],M),p(n[A+2],w),l(_,M,w,m)}function l(m,_,M,w){const A=w+1,R=[];for(let S=0;S<=A;S++){R[S]=[];const T=m.clone().lerp(M,S/A),D=_.clone().lerp(M,S/A),U=A-S;for(let F=0;F<=U;F++)F===0&&S===A?R[S][F]=T:R[S][F]=T.clone().lerp(D,F/U)}for(let S=0;S<A;S++)for(let T=0;T<2*(A-S)-1;T++){const D=Math.floor(T/2);T%2===0?(u(R[S][D+1]),u(R[S+1][D]),u(R[S][D])):(u(R[S][D+1]),u(R[S+1][D+1]),u(R[S+1][D]))}}function c(m){const _=new P;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(m),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function d(){const m=new P;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const M=g(m)/2/Math.PI+.5,w=f(m)/Math.PI+.5;r.push(M,1-w)}v(),h()}function h(){for(let m=0;m<r.length;m+=6){const _=r[m+0],M=r[m+2],w=r[m+4],A=Math.max(_,M,w),R=Math.min(_,M,w);A>.9&&R<.1&&(_<.2&&(r[m+0]+=1),M<.2&&(r[m+2]+=1),w<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const M=m*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function v(){const m=new P,_=new P,M=new P,w=new P,A=new Xt,R=new Xt,S=new Xt;for(let T=0,D=0;T<s.length;T+=9,D+=6){m.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),A.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),S.set(r[D+4],r[D+5]),w.copy(m).add(_).add(M).divideScalar(3);const U=g(w);E(A,D+0,m,U),E(R,D+2,_,U),E(S,D+4,M,U)}}function E(m,_,M,w){w<0&&m.x===1&&(r[_]=m.x-1),M.x===0&&M.z===0&&(r[_]=w/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lm(t.vertices,t.indices,t.radius,t.detail)}}class cm extends lm{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new cm(t.radius,t.detail)}}class dl extends wn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,u=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<d;f++){const m=f*u-r;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),w=m+1+c*(f+1),A=m+1+c*f;p.push(_,M,A),p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class du extends wn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new P,u=new P,p=[],v=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let M=0;f===0&&r===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const A=w/n;h.x=-t*Math.cos(a+A*s)*Math.sin(r+_*o),h.y=t*Math.cos(r+_*o),h.z=t*Math.sin(a+A*s)*Math.sin(r+_*o),v.push(h.x,h.y,h.z),u.copy(h).normalize(),E.push(u.x,u.y,u.z),g.push(A+M,1-_),m.push(c++)}d.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=d[f][m+1],M=d[f][m],w=d[f+1][m],A=d[f+1][m+1];(f!==0||r>0)&&p.push(_,M,A),(f!==i-1||l<Math.PI)&&p.push(M,w,A)}this.setIndex(p),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Br(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(yg(a))a.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(yg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function _n(e){const t={};for(let n=0;n<e.length;n++){const i=Br(e[n]);for(const a in i)t[a]=i[a]}return t}function yg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function xT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function CS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ST={clone:Br,merge:_n};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=yT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=xT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ET extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class co extends Ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bT extends Ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TT extends Ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class AT extends on{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class RT extends AT{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const ec=new P,nc=new Yr,vi=new P;class wS extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ec,nc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,vi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ec,nc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xa=new P,Eg=new Xt,bg=new Xt;class Kn extends wS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-t/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xa.x,xa.y).multiplyScalar(-t/xa.z)}getViewSize(t,n){return this.getViewBounds(t,Eg,bg),n.subVectors(bg,Eg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Po*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class DS extends wS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ks=-90,Qs=1;class CT extends on{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ks,Qs,t,n);a.layers=this.layers,this.add(a);const s=new Kn(Ks,Qs,t,n);s.layers=this.layers,this.add(s);const r=new Kn(Ks,Qs,t,n);r.layers=this.layers,this.add(r);const o=new Kn(Ks,Qs,t,n);o.layers=this.layers,this.add(o);const l=new Kn(Ks,Qs,t,n);l.layers=this.layers,this.add(l);const c=new Kn(Ks,Qs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(h,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wT extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tg=new Oe;class Ag{constructor(t,n,i=0,a=1/0){this.ray=new om(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ne("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Tg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(t,n=!0,i=[]){return kd(t,this,i,n),i.sort(Rg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)kd(t[a],this,i,n);return i.sort(Rg),i}}function Rg(e,t){return e.distance-t.distance}function kd(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)kd(s[r],t,n,!0)}}const pm=class pm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};pm.prototype.isMatrix2=!0;let Cg=pm;function wg(e,t,n,i){const a=DT(i);switch(n){case mS:return e*t;case _S:return e*t/a.components*a.byteLength;case Jp:return e*t/a.components*a.byteLength;case Es:return e*t*2/a.components*a.byteLength;case $p:return e*t*2/a.components*a.byteLength;case gS:return e*t*3/a.components*a.byteLength;case di:return e*t*4/a.components*a.byteLength;case tm:return e*t*4/a.components*a.byteLength;case Mc:case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ec:case bc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(e,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(e,8)*Math.max(t,8)/2;case md:case gd:case vd:case xd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _d:case nu:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Od:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pd:case zd:case Bd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Id:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case iu:case Hd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DT(e){switch(e){case ti:case fS:return{byteLength:1,components:1};case Qo:case hS:case oa:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case wi:case Zp:case bi:return{byteLength:4,components:1};case dS:case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function US(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function UT(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],E=h[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,h[u]=E)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const E=h[p];e.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
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
#endif`,OT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IT=`#ifdef USE_AOMAP
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
#endif`,FT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
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
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WT=`#ifdef USE_IRIDESCENCE
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
#endif`,YT=`#ifdef USE_BUMPMAP
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
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,D1=`uniform sampler2D dfgLUT;
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
}`,U1=`
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eA=`#ifdef USE_NORMALMAP
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
#endif`,nA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_A=`float getShadowMask() {
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
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,SA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MA=`#ifdef USE_SKINNING
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
#endif`,yA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AA=`#ifdef USE_TRANSMISSION
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
#endif`,RA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
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
}`,FA=`#if DEPTH_PACKING == 3200
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
}`,HA=`#define DISTANCE
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
}`,GA=`#define DISTANCE
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`uniform float scale;
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
}`,WA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,qA=`uniform vec3 diffuse;
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
}`,jA=`#define LAMBERT
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
}`,ZA=`#define LAMBERT
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
}`,KA=`#define MATCAP
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
}`,QA=`#define MATCAP
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
}`,JA=`#define NORMAL
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
}`,$A=`#define NORMAL
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
}`,tR=`#define PHONG
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
}`,eR=`#define PHONG
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
}`,nR=`#define STANDARD
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
}`,iR=`#define STANDARD
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
}`,aR=`#define TOON
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
}`,sR=`#define TOON
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
}`,rR=`uniform float size;
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
}`,oR=`uniform vec3 diffuse;
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
}`,lR=`#include <common>
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
}`,cR=`uniform vec3 color;
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
}`,uR=`uniform float rotation;
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
}`,fR=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:LT,alphahash_pars_fragment:NT,alphamap_fragment:OT,alphamap_pars_fragment:PT,alphatest_fragment:zT,alphatest_pars_fragment:BT,aomap_fragment:IT,aomap_pars_fragment:FT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:VT,beginnormal_vertex:XT,bsdfs:kT,iridescence_fragment:WT,bumpmap_pars_fragment:YT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:jT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:KT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:$T,color_vertex:t1,common:e1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:b1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:y1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:w1,lights_physical_pars_fragment:D1,lights_fragment_begin:U1,lights_fragment_maps:L1,lights_fragment_end:N1,lightprobes_pars_fragment:O1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:I1,map_fragment:F1,map_pars_fragment:H1,map_particle_fragment:G1,map_particle_pars_fragment:V1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:k1,morphinstance_vertex:W1,morphcolor_vertex:Y1,morphnormal_vertex:q1,morphtarget_pars_vertex:j1,morphtarget_vertex:Z1,normal_fragment_begin:K1,normal_fragment_maps:Q1,normal_pars_fragment:J1,normal_pars_vertex:$1,normal_vertex:tA,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:aA,iridescence_pars_fragment:sA,opaque_fragment:rA,packing:oA,premultiplied_alpha_fragment:lA,project_vertex:cA,dithering_fragment:uA,dithering_pars_fragment:fA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:vA,skinning_pars_vertex:xA,skinning_vertex:SA,skinnormal_vertex:MA,specularmap_fragment:yA,specularmap_pars_fragment:EA,tonemapping_fragment:bA,tonemapping_pars_fragment:TA,transmission_fragment:AA,transmission_pars_fragment:RA,uv_pars_fragment:CA,uv_pars_vertex:wA,uv_vertex:DA,worldpos_vertex:UA,background_vert:LA,background_frag:NA,backgroundCube_vert:OA,backgroundCube_frag:PA,cube_vert:zA,cube_frag:BA,depth_vert:IA,depth_frag:FA,distance_vert:HA,distance_frag:GA,equirect_vert:VA,equirect_frag:XA,linedashed_vert:kA,linedashed_frag:WA,meshbasic_vert:YA,meshbasic_frag:qA,meshlambert_vert:jA,meshlambert_frag:ZA,meshmatcap_vert:KA,meshmatcap_frag:QA,meshnormal_vert:JA,meshnormal_frag:$A,meshphong_vert:tR,meshphong_frag:eR,meshphysical_vert:nR,meshphysical_frag:iR,meshtoon_vert:aR,meshtoon_frag:sR,points_vert:rR,points_frag:oR,shadow_vert:lR,shadow_frag:cR,sprite_vert:uR,sprite_frag:fR},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Si={basic:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:_n([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:_n([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:_n([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:_n([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:_n([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:_n([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:_n([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:_n([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Si.physical={uniforms:_n([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ic={r:0,b:0,g:0},hR=new Oe,LS=new Bt;LS.set(-1,0,0,0,1,0,0,0,1);function dR(e,t,n,i,a,s){const r=new Vt(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=t.get(_,M)}return _}function v(m){let _=!1;const M=p(m);M===null?g(r,o):M&&M.isColor&&(g(M,1),_=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Ou)?(c===void 0&&(c=new dn(new Va(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Br(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(LS),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ce,(d!==M||h!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new dn(new dl(2,2),new pi({name:"BackgroundMaterial",uniforms:Br(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(ic,CS(e)),n.buffers.color.setClear(ic.r,ic.g,ic.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:E,dispose:f}}function pR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(U,F,q,Q,B){let L=!1;const O=h(U,Q,q,F);s!==O&&(s=O,c(s.object)),L=p(U,Q,q,B),L&&v(U,Q,q,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,M(U,F,q,Q),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function d(U){return e.deleteVertexArray(U)}function h(U,F,q,Q){const B=Q.wireframe===!0;let L=i[F.id];L===void 0&&(L={},i[F.id]=L);const O=U.isInstancedMesh===!0?U.id:0;let X=L[O];X===void 0&&(X={},L[O]=X);let W=X[q.id];W===void 0&&(W={},X[q.id]=W);let $=W[B];return $===void 0&&($=u(l()),W[B]=$),$}function u(U){const F=[],q=[],Q=[];for(let B=0;B<n;B++)F[B]=0,q[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Q,object:U,attributes:{},index:null}}function p(U,F,q,Q){const B=s.attributes,L=F.attributes;let O=0;const X=q.getAttributes();for(const W in X)if(X[W].location>=0){const ft=B[W];let Tt=L[W];if(Tt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),ft===void 0||ft.attribute!==Tt||Tt&&ft.data!==Tt.data)return!0;O++}return s.attributesNum!==O||s.index!==Q}function v(U,F,q,Q){const B={},L=F.attributes;let O=0;const X=q.getAttributes();for(const W in X)if(X[W].location>=0){let ft=L[W];ft===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ft=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ft=U.instanceColor));const Tt={};Tt.attribute=ft,ft&&ft.data&&(Tt.data=ft.data),B[W]=Tt,O++}s.attributes=B,s.attributesNum=O,s.index=Q}function E(){const U=s.newAttributes;for(let F=0,q=U.length;F<q;F++)U[F]=0}function g(U){f(U,0)}function f(U,F){const q=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;q[U]=1,Q[U]===0&&(e.enableVertexAttribArray(U),Q[U]=1),B[U]!==F&&(e.vertexAttribDivisor(U,F),B[U]=F)}function m(){const U=s.newAttributes,F=s.enabledAttributes;for(let q=0,Q=F.length;q<Q;q++)F[q]!==U[q]&&(e.disableVertexAttribArray(q),F[q]=0)}function _(U,F,q,Q,B,L,O){O===!0?e.vertexAttribIPointer(U,F,q,B,L):e.vertexAttribPointer(U,F,q,Q,B,L)}function M(U,F,q,Q){E();const B=Q.attributes,L=q.getAttributes(),O=F.defaultAttributeValues;for(const X in L){const W=L[X];if(W.location>=0){let $=B[X];if($===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){const ft=$.normalized,Tt=$.itemSize,kt=t.get($);if(kt===void 0)continue;const Zt=kt.buffer,Nt=kt.type,J=kt.bytesPerElement,ht=Nt===e.INT||Nt===e.UNSIGNED_INT||$.gpuType===Zp;if($.isInterleavedBufferAttribute){const rt=$.data,Ut=rt.stride,Pt=$.offset;if(rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<W.locationSize;Lt++)f(W.location+Lt,rt.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Lt=0;Lt<W.locationSize;Lt++)g(W.location+Lt);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let Lt=0;Lt<W.locationSize;Lt++)_(W.location+Lt,Tt/W.locationSize,Nt,ft,Ut*J,(Pt+Tt/W.locationSize*Lt)*J,ht)}else{if($.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)f(W.location+rt,$.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let rt=0;rt<W.locationSize;rt++)g(W.location+rt);e.bindBuffer(e.ARRAY_BUFFER,Zt);for(let rt=0;rt<W.locationSize;rt++)_(W.location+rt,Tt/W.locationSize,Nt,ft,Tt*J,Tt/W.locationSize*rt*J,ht)}}else if(O!==void 0){const ft=O[X];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(W.location,ft);break;case 3:e.vertexAttrib3fv(W.location,ft);break;case 4:e.vertexAttrib4fv(W.location,ft);break;default:e.vertexAttrib1fv(W.location,ft)}}}}m()}function w(){T();for(const U in i){const F=i[U];for(const q in F){const Q=F[q];for(const B in Q){const L=Q[B];for(const O in L)d(L[O].object),delete L[O];delete Q[B]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const q in F){const Q=F[q];for(const B in Q){const L=Q[B];for(const O in L)d(L[O].object),delete L[O];delete Q[B]}}delete i[U.id]}function R(U){for(const F in i){const q=i[F];for(const Q in q){const B=q[Q];if(B[U.id]===void 0)continue;const L=B[U.id];for(const O in L)d(L[O].object),delete L[O];delete B[U.id]}}}function S(U){for(const F in i){const q=i[F],Q=U.isInstancedMesh===!0?U.id:0,B=q[Q];if(B!==void 0){for(const L in B){const O=B[L];for(const X in O)d(O[X].object),delete O[X];delete B[L]}delete q[Q],Object.keys(q).length===0&&delete i[F]}}}function T(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function mR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(e.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function gR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==di&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const S=R===oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bi&&!S)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ot("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:w,samples:A}}function _R(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new os,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,f=e.get(h);if(!a||v===null||v.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=d(v,u,_,p);for(let w=0;w!==_;++w)M[w]=n[w];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,p,v){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=p;_!==E;++_,M+=4)r.copy(h[_]).applyMatrix4(m,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const La=4,Dg=[.125,.215,.35,.446,.526,.582],cs=20,vR=256,uo=new DS,Ug=new Vt;let Jf=null,$f=0,th=0,eh=!1;const xR=new P;class Lg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=xR}=s;Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jf,$f,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ys||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:oa,format:di,colorSpace:au,depthBuffer:!1},a=Ng(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SR(s)),this._blurMaterial=yR(s,t,n),this._ggxMaterial=MR(s,t,n)}return a}_compileMaterial(t){const n=new dn(new wn,t);this._renderer.compile(n,uo)}_sceneToCubeUV(t,n,i,a,s){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ug),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Va,new uu({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(Ug),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const w=this._cubeSize;Js(a,M*w,_>2?w:0,w,w),h.setRenderTarget(a),f&&h.render(E,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===ys||t.mapping===Pr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,uo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-La?i-v+La:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,Js(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Js(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,uo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*cs-1),E=s/v,g=isFinite(s)?1+Math.floor(d*E):cs;g>cs&&Ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const f=[];let m=0;for(let R=0;R<cs;++R){const S=R/E,T=Math.exp(-S*S/2);f.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const M=this._sizeLods[a],w=3*M*(a>_-La?a-_+La:0),A=4*(this._cubeSize-M);Js(n,w,A,3*M,2*M),l.setRenderTarget(n),l.render(h,uo)}}function SR(e){const t=[],n=[],i=[];let a=e;const s=e-La+1+Dg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-La?l=Dg[r-e+La-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,E=3,g=2,f=1,m=new Float32Array(E*v*p),_=new Float32Array(g*v*p),M=new Float32Array(f*v*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,S=A>2?0:-1,T=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];m.set(T,E*v*A),_.set(u,g*v*A);const D=[A,A,A,A,A,A];M.set(D,f*v*A)}const w=new wn;w.setAttribute("position",new ai(m,E)),w.setAttribute("uv",new ai(_,g)),w.setAttribute("faceIndex",new ai(M,f)),i.push(new dn(w,null)),a>La&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Ng(e,t,n){const i=new Ci(e,t,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function MR(e,t,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function yR(e,t,n){const i=new Float32Array(cs),a=new P(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Og(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pg(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}class NS extends Ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new AS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Va(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:$i});s.uniforms.tEquirect.value=n;const r=new dn(a,s),o=n.minFilter;return n.minFilter===us&&(n.minFilter=pn),new CT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function ER(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===bf||p===Tf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new NS(v.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===bf||p===Tf,E=p===ys||p===Pr;if(v||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Lg(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new Lg(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===bf?u.mapping=ys:p===Tf&&(u.mapping=Pr),u}function l(u){let p=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function bR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Xd("WebGLRenderer: "+i+" extension not supported."),a}}}function TR(e,t,n,i){const a={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let _=0,M=m.length;_<M;_+=3){const w=m[_+0],A=m[_+1],R=m[_+2];u.push(w,A,A,R,R,w)}}else{const m=v.array;E=v.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const w=_+0,A=_+1,R=_+2;u.push(w,A,A,R,R,w)}}const g=new(v.count>=65535?yS:MS)(u,1);g.version=E;const f=s.get(h);f&&t.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function AR(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,u){e.drawElements(i,u,s,h*r),n.update(u,i,1)}function c(h,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,h*r,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let E=0;for(let g=0;g<p;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function RR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ne("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function CR(e,t,n){const i=new WeakMap,a=new Fe;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let D=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var p=D;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*A*4*h),S=new xS(R,w,A,h);S.type=bi,S.needsUpdate=!0;const T=M*4;for(let U=0;U<h;U++){const F=f[U],q=m[U],Q=_[U],B=w*A*4*U;for(let L=0;L<F.count;L++){const O=L*T;v===!0&&(a.fromBufferAttribute(F,L),R[B+O+0]=a.x,R[B+O+1]=a.y,R[B+O+2]=a.z,R[B+O+3]=0),E===!0&&(a.fromBufferAttribute(q,L),R[B+O+4]=a.x,R[B+O+5]=a.y,R[B+O+6]=a.z,R[B+O+7]=0),g===!0&&(a.fromBufferAttribute(Q,L),R[B+O+8]=a.x,R[B+O+9]=a.y,R[B+O+10]=a.z,R[B+O+11]=Q.itemSize===4?a.w:1)}}u={count:h,texture:S,size:new Xt(w,A)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function wR(e,t,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==d&&(t.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const DR={[iS]:"LINEAR_TONE_MAPPING",[aS]:"REINHARD_TONE_MAPPING",[sS]:"CINEON_TONE_MAPPING",[rS]:"ACES_FILMIC_TONE_MAPPING",[lS]:"AGX_TONE_MAPPING",[cS]:"NEUTRAL_TONE_MAPPING",[oS]:"CUSTOM_TONE_MAPPING"};function UR(e,t,n,i,a){const s=new Ci(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new zr(t,n):void 0}),r=new Ci(t,n,{type:oa,depthBuffer:!1,stencilBuffer:!1}),o=new wn;o.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new ET({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new dn(o,l),d=new DS(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let M=0;M<g.length;M++){const w=g[M];w.setSize&&w.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,M=s.height;for(let w=0;w<g.length;w++){const A=g[w];A.setSize&&A.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===Ri&&g.length===0)return!1;if(E=_,_!==null){const M=_.width,w=_.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ri,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let M=s,w=r;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(m,w,M,_),R.needsSwap!==!1)){const S=M;M=w,w=S}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},ie.getTransfer(h)===ce&&(l.defines.SRGB_TRANSFER="");const A=DR[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(E),m.render(c,d),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const OS=new mn,Wd=new zr(1,1),PS=new xS,zS=new Zb,BS=new AS,zg=[],Bg=[],Ig=new Float32Array(16),Fg=new Float32Array(9),Hg=new Float32Array(4);function qr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=zg[a];if(s===void 0&&(s=new Float32Array(a),zg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Bu(e,t){let n=Bg[t];n===void 0&&(n=new Int32Array(t),Bg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function LR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function NR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function OR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function PR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function zR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;Hg.set(i),e.uniformMatrix2fv(this.addr,!1,Hg),Ze(n,i)}}function BR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;Fg.set(i),e.uniformMatrix3fv(this.addr,!1,Fg),Ze(n,i)}}function IR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;Ig.set(i),e.uniformMatrix4fv(this.addr,!1,Ig),Ze(n,i)}}function FR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function HR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function GR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function VR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function XR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function kR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function WR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function YR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function qR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?nm:em,s=Wd):s=OS,n.setTexture2D(t||s,a)}function jR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||zS,a)}function ZR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||BS,a)}function KR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||PS,a)}function QR(e){switch(e){case 5126:return LR;case 35664:return NR;case 35665:return OR;case 35666:return PR;case 35674:return zR;case 35675:return BR;case 35676:return IR;case 5124:case 35670:return FR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return XR;case 36294:return kR;case 36295:return WR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return qR;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return KR}}function JR(e,t){e.uniform1fv(this.addr,t)}function $R(e,t){const n=qr(t,this.size,2);e.uniform2fv(this.addr,n)}function t3(e,t){const n=qr(t,this.size,3);e.uniform3fv(this.addr,n)}function e3(e,t){const n=qr(t,this.size,4);e.uniform4fv(this.addr,n)}function n3(e,t){const n=qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function i3(e,t){const n=qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function a3(e,t){const n=qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function s3(e,t){e.uniform1iv(this.addr,t)}function r3(e,t){e.uniform2iv(this.addr,t)}function o3(e,t){e.uniform3iv(this.addr,t)}function l3(e,t){e.uniform4iv(this.addr,t)}function c3(e,t){e.uniform1uiv(this.addr,t)}function u3(e,t){e.uniform2uiv(this.addr,t)}function f3(e,t){e.uniform3uiv(this.addr,t)}function h3(e,t){e.uniform4uiv(this.addr,t)}function d3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Wd:r=OS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function p3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||zS,s[r])}function m3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||BS,s[r])}function g3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||PS,s[r])}function _3(e){switch(e){case 5126:return JR;case 35664:return $R;case 35665:return t3;case 35666:return e3;case 35674:return n3;case 35675:return i3;case 35676:return a3;case 5124:case 35670:return s3;case 35667:case 35671:return r3;case 35668:case 35672:return o3;case 35669:case 35673:return l3;case 5125:return c3;case 36294:return u3;case 36295:return f3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return d3;case 35679:case 36299:case 36307:return p3;case 35680:case 36300:case 36308:case 36293:return m3;case 36289:case 36303:case 36311:case 36292:return g3}}class v3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QR(n.type)}}class x3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_3(n.type)}}class S3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function Gg(e,t){e.seq.push(t),e.map[t.id]=t}function M3(e,t,n){const i=e.name,a=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),r=nh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Gg(n,c===void 0?new v3(o,e,t):new x3(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new S3(o),Gg(n,h)),n=h}}}class Tc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);M3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Vg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const y3=37297;let E3=0;function b3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Xg=new Bt;function T3(e){ie._getMatrix(Xg,ie.workingColorSpace,e);const t=`mat3( ${Xg.elements.map(n=>n.toFixed(4))} )`;switch(ie.getTransfer(e)){case su:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+b3(e.getShaderSource(t),o)}else return s}function A3(e,t){const n=T3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const R3={[iS]:"Linear",[aS]:"Reinhard",[sS]:"Cineon",[rS]:"ACESFilmic",[lS]:"AgX",[cS]:"Neutral",[oS]:"Custom"};function C3(e,t){const n=R3[t];return n===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ac=new P;function w3(){ie.getLuminanceCoefficients(ac);const e=ac.x.toFixed(4),t=ac.y.toFixed(4),n=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function U3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function L3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function So(e){return e!==""}function Wg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(e){return e.replace(N3,P3)}const O3=new Map;function P3(e,t){let n=Yt[t];if(n===void 0){const i=O3.get(t);if(i!==void 0)n=Yt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yd(n)}const z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(e){return e.replace(z3,B3)}function B3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function jg(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const I3={[Sc]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function F3(e){return I3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H3={[ys]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function G3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":H3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const V3={[Pr]:"ENVMAP_MODE_REFRACTION"};function X3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":V3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const k3={[nS]:"ENVMAP_BLENDING_MULTIPLY",[db]:"ENVMAP_BLENDING_MIX",[pb]:"ENVMAP_BLENDING_ADD"};function W3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":k3[e.combine]||"ENVMAP_BLENDING_NONE"}function Y3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=F3(n),c=G3(n),d=X3(n),h=W3(n),u=Y3(n),p=D3(n),v=U3(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(So).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(So).join(`
`),f.length>0&&(f+=`
`)):(g=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),f=[jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?Yt.tonemapping_pars_fragment:"",n.toneMapping!==Ri?C3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,A3("linearToOutputTexel",n.outputColorSpace),w3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(So).join(`
`)),r=Yd(r),r=Wg(r,n),r=Yg(r,n),o=Yd(o),o=Wg(o,n),o=Yg(o,n),r=qg(r),o=qg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,M=m+f+o,w=Vg(a,a.VERTEX_SHADER,_),A=Vg(a,a.FRAGMENT_SHADER,M);a.attachShader(E,w),a.attachShader(E,A),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(E)||"",q=a.getShaderInfoLog(w)||"",Q=a.getShaderInfoLog(A)||"",B=F.trim(),L=q.trim(),O=Q.trim();let X=!0,W=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(X=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,w,A);else{const $=kg(a,w,"vertex"),ft=kg(a,A,"fragment");ne("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+$+`
`+ft)}else B!==""?Ot("WebGLProgram: Program Info Log:",B):(L===""||O==="")&&(W=!1);W&&(U.diagnostics={runnable:X,programLog:B,vertexShader:{log:L,prefix:g},fragmentShader:{log:O,prefix:f}})}a.deleteShader(w),a.deleteShader(A),S=new Tc(a,E),T=L3(a,E)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,y3)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=A,this}let j3=0;class Z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new K3(t),n.set(t,i)),i}}class K3{constructor(t){this.id=j3++,this.code=t,this.usedTimes=0}}function Q3(e){return e===Es||e===nu||e===iu}function J3(e,t,n,i,a,s){const r=new sm,o=new Z3,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function E(S,T,D,U,F,q){const Q=U.fog,B=F.geometry,L=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,X=t.get(S.envMap||L,O),W=X&&X.mapping===Ou?X.image.height:null,$=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Ot("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Tt=ft!==void 0?ft.length:0;let kt=0;B.morphAttributes.position!==void 0&&(kt=1),B.morphAttributes.normal!==void 0&&(kt=2),B.morphAttributes.color!==void 0&&(kt=3);let Zt,Nt,J,ht;if($){const Ft=Si[$];Zt=Ft.vertexShader,Nt=Ft.fragmentShader}else Zt=S.vertexShader,Nt=S.fragmentShader,o.update(S),J=o.getVertexShaderID(S),ht=o.getFragmentShaderID(S);const rt=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),Pt=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,Me=!!S.map,qt=!!S.matcap,re=!!X,de=!!S.aoMap,Wt=!!S.lightMap,De=!!S.bumpMap,ye=!!S.normalMap,cn=!!S.displacementMap,C=!!S.emissiveMap,ct=!!S.metalnessMap,dt=!!S.roughnessMap,yt=S.anisotropy>0,tt=S.clearcoat>0,Kt=S.dispersion>0,b=S.iridescence>0,x=S.sheen>0,z=S.transmission>0,Y=yt&&!!S.anisotropyMap,et=tt&&!!S.clearcoatMap,st=tt&&!!S.clearcoatNormalMap,lt=tt&&!!S.clearcoatRoughnessMap,k=b&&!!S.iridescenceMap,Z=b&&!!S.iridescenceThicknessMap,pt=x&&!!S.sheenColorMap,xt=x&&!!S.sheenRoughnessMap,ot=!!S.specularMap,it=!!S.specularColorMap,bt=!!S.specularIntensityMap,St=z&&!!S.transmissionMap,ee=z&&!!S.thicknessMap,N=!!S.gradientMap,at=!!S.alphaMap,j=S.alphaTest>0,_t=!!S.alphaHash,ut=!!S.extensions;let nt=Ri;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(nt=e.toneMapping);const Ct={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Zt,fragmentShader:Nt,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,instancingMorph:Pt&&F.morphTexture!==null,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Me,matcap:qt,envMap:re,envMapMode:re&&X.mapping,envMapCubeUVHeight:W,aoMap:de,lightMap:Wt,bumpMap:De,normalMap:ye,displacementMap:cn,emissiveMap:C,normalMapObjectSpace:ye&&S.normalMapType===_b,normalMapTangentSpace:ye&&S.normalMapType===Gd,packedNormalMap:ye&&S.normalMapType===Gd&&Q3(S.normalMap.format),metalnessMap:ct,roughnessMap:dt,anisotropy:yt,anisotropyMap:Y,clearcoat:tt,clearcoatMap:et,clearcoatNormalMap:st,clearcoatRoughnessMap:lt,dispersion:Kt,iridescence:b,iridescenceMap:k,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:pt,sheenRoughnessMap:xt,specularMap:ot,specularColorMap:it,specularIntensityMap:bt,transmission:z,transmissionMap:St,thicknessMap:ee,gradientMap:N,opaque:S.transparent===!1&&S.blending===Mr&&S.alphaToCoverage===!1,alphaMap:at,alphaTest:j,alphaHash:_t,combine:S.combine,mapUv:Me&&v(S.map.channel),aoMapUv:de&&v(S.aoMap.channel),lightMapUv:Wt&&v(S.lightMap.channel),bumpMapUv:De&&v(S.bumpMap.channel),normalMapUv:ye&&v(S.normalMap.channel),displacementMapUv:cn&&v(S.displacementMap.channel),emissiveMapUv:C&&v(S.emissiveMap.channel),metalnessMapUv:ct&&v(S.metalnessMap.channel),roughnessMapUv:dt&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:et&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(S.sheenRoughnessMap.channel),specularMapUv:ot&&v(S.specularMap.channel),specularColorMapUv:it&&v(S.specularColorMap.channel),specularIntensityMapUv:bt&&v(S.specularIntensityMap.channel),transmissionMapUv:St&&v(S.transmissionMap.channel),thicknessMapUv:ee&&v(S.thicknessMap.channel),alphaMapUv:at&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||yt),vertexNormals:!!B.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Me||at),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&ye===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:C&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wi,flipSided:S.side===An,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(f(T,S),m(T,S),T.push(e.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function f(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),S.push(r.mask)}function _(S){const T=p[S.type];let D;if(T){const U=Si[T];D=ST.clone(U.uniforms)}else D=S.uniforms;return D}function M(S,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new q3(e,T,S,a),c.push(D),d.set(T,D)),D}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:R}}function $3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function t2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Zg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kg(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||t2),i.length>1&&i.sort(p||Zg),a.length>1&&a.sort(p||Zg)}function h(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:h,sort:d}}function e2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Kg,e.set(i,[r])):a>=s.length?(r=new Kg,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function n2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Vt};break;case"SpotLight":n={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function i2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let a2=0;function s2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function r2(e){const t=new n2,n=i2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new Oe,r=new Oe;function o(c){let d=0,h=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,m=0,_=0,M=0,w=0,A=0,R=0;c.sort(s2);for(let T=0,D=c.length;T<D;T++){const U=c[T],F=U.color,q=U.intensity,Q=U.distance;let B=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Es?B=U.shadow.map.texture:B=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=F.r*q,h+=F.g*q,u+=F.b*q;else if(U.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(U.sh.coefficients[L],q);R++}else if(U.isDirectionalLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const O=U.shadow,X=n.get(U);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=U.shadow.matrix,m++}i.directional[p]=L,p++}else if(U.isSpotLight){const L=t.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(F).multiplyScalar(q),L.distance=Q,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,i.spot[E]=L;const O=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,O.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[E]=O.matrix,U.castShadow){const X=n.get(U);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=B,M++}E++}else if(U.isRectAreaLight){const L=t.get(U);L.color.copy(F).multiplyScalar(q),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=L,g++}else if(U.isPointLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),L.distance=U.distance,L.decay=U.decay,U.castShadow){const O=U.shadow,X=n.get(U);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,X.shadowCameraNear=O.camera.near,X.shadowCameraFar=O.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=U.shadow.matrix,_++}i.point[v]=L,v++}else if(U.isHemisphereLight){const L=t.get(U);L.skyColor.copy(U.color).multiplyScalar(q),L.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[f]=L,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==v||S.spotLength!==E||S.rectAreaLength!==g||S.hemiLength!==f||S.numDirectionalShadows!==m||S.numPointShadows!==_||S.numSpotShadows!==M||S.numSpotMaps!==w||S.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,S.directionalLength=p,S.pointLength=v,S.spotLength=E,S.rectAreaLength=g,S.hemiLength=f,S.numDirectionalShadows=m,S.numPointShadows=_,S.numSpotShadows=M,S.numSpotMaps=w,S.numLightProbes=R,i.version=a2++)}function l(c,d){let h=0,u=0,p=0,v=0,E=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Qg(e){const t=new r2(e),n=[],i=[],a=[];function s(u){h.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function d(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function o2(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Qg(e),t.set(a,[o])):s>=r.length?(o=new Qg(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c2=`uniform sampler2D shadow_pass;
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
}`,u2=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],f2=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Jg=new Oe,fo=new P,ih=new P;function h2(e,t,n){let i=new TS;const a=new Xt,s=new Xt,r=new Fe,o=new bT,l=new TT,c={},d=n.maxTextureSize,h={[qa]:An,[An]:qa,[Wi]:Wi},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new wn;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new dn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let f=this.type;this.render=function(A,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===jE&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);const T=e.getRenderTarget(),D=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=A.length;Q<B;Q++){const L=A[Q],O=L.shadow;if(O===void 0){Ot("WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const X=O.getFrameExtents();a.multiply(X),s.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/X.x),a.x=s.x*X.x,O.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/X.y),a.y=s.y*X.y,O.mapSize.y=s.y));const W=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||q===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===vo){if(L.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ci(a.x,a.y,{format:Es,type:oa,minFilter:pn,magFilter:pn,generateMipmaps:!1}),O.map.texture.name=L.name+".shadowMap",O.map.depthTexture=new zr(a.x,a.y,bi),O.map.depthTexture.name=L.name+".shadowMapDepth",O.map.depthTexture.format=la,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn}else L.isPointLight?(O.map=new NS(a.x),O.map.depthTexture=new vT(a.x,wi)):(O.map=new Ci(a.x,a.y),O.map.depthTexture=new zr(a.x,a.y,wi)),O.map.depthTexture.name=L.name+".shadowMap",O.map.depthTexture.format=la,this.type===Sc?(O.map.depthTexture.compareFunction=W?nm:em,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn);O.camera.updateProjectionMatrix()}const $=O.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<$;ft++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,ft),e.clear();else{ft===0&&(e.setRenderTarget(O.map),e.clear());const Tt=O.getViewport(ft);r.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),F.viewport(r)}if(L.isPointLight){const Tt=O.camera,kt=O.matrix,Zt=L.distance||Tt.far;Zt!==Tt.far&&(Tt.far=Zt,Tt.updateProjectionMatrix()),fo.setFromMatrixPosition(L.matrixWorld),Tt.position.copy(fo),ih.copy(Tt.position),ih.add(u2[ft]),Tt.up.copy(f2[ft]),Tt.lookAt(ih),Tt.updateMatrixWorld(),kt.makeTranslation(-fo.x,-fo.y,-fo.z),Jg.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Jg,Tt.coordinateSystem,Tt.reversedDepth)}else O.updateMatrices(L);i=O.getFrustum(),M(R,S,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===vo&&m(O,S),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(T,D,U)};function m(A,R){const S=t.update(E);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(a.x,a.y,{format:Es,type:oa})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,S,u,E,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,S,p,E,null)}function _(A,R,S,T){let D=null;const U=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)D=U;else if(D=S.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=D.uuid,q=R.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let B=Q[q];B===void 0&&(B=D.clone(),Q[q]=B,R.addEventListener("dispose",w)),D=B}if(D.visible=R.visible,D.wireframe=R.wireframe,T===vo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:h[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=e.properties.get(D);F.light=S}return D}function M(A,R,S,T,D){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===vo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const q=t.update(A),Q=A.material;if(Array.isArray(Q)){const B=q.groups;for(let L=0,O=B.length;L<O;L++){const X=B[L],W=Q[X.materialIndex];if(W&&W.visible){const $=_(A,W,T,D);A.onBeforeShadow(e,A,R,S,q,$,X),e.renderBufferDirect(S,null,q,$,A,X),A.onAfterShadow(e,A,R,S,q,$,X)}}}else if(Q.visible){const B=_(A,Q,T,D);A.onBeforeShadow(e,A,R,S,q,B,null),e.renderBufferDirect(S,null,q,B,A,null),A.onAfterShadow(e,A,R,S,q,B,null)}}const F=A.children;for(let q=0,Q=F.length;q<Q;q++)M(F[q],R,S,T,D)}function w(A){A.target.removeEventListener("dispose",w);for(const S in c){const T=c[S],D=A.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function d2(e,t){function n(){let N=!1;const at=new Fe;let j=null;const _t=new Fe(0,0,0,0);return{setMask:function(ut){j!==ut&&!N&&(e.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){N=ut},setClear:function(ut,nt,Ct,Ft,Pe){Pe===!0&&(ut*=Ft,nt*=Ft,Ct*=Ft),at.set(ut,nt,Ct,Ft),_t.equals(at)===!1&&(e.clearColor(ut,nt,Ct,Ft),_t.copy(at))},reset:function(){N=!1,j=null,_t.set(-1,0,0,0)}}}function i(){let N=!1,at=!1,j=null,_t=null,ut=null;return{setReversed:function(nt){if(at!==nt){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),at=nt;const Ft=ut;ut=null,this.setClear(Ft)}},getReversed:function(){return at},setTest:function(nt){nt?rt(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(nt){j!==nt&&!N&&(e.depthMask(nt),j=nt)},setFunc:function(nt){if(at&&(nt=Rb[nt]),_t!==nt){switch(nt){case nd:e.depthFunc(e.NEVER);break;case id:e.depthFunc(e.ALWAYS);break;case ad:e.depthFunc(e.LESS);break;case Or:e.depthFunc(e.LEQUAL);break;case sd:e.depthFunc(e.EQUAL);break;case rd:e.depthFunc(e.GEQUAL);break;case od:e.depthFunc(e.GREATER);break;case ld:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ut!==nt&&(ut=nt,at&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,j=null,_t=null,ut=null,at=!1}}}function a(){let N=!1,at=null,j=null,_t=null,ut=null,nt=null,Ct=null,Ft=null,Pe=null;return{setTest:function(pe){N||(pe?rt(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(pe){at!==pe&&!N&&(e.stencilMask(pe),at=pe)},setFunc:function(pe,Li,gi){(j!==pe||_t!==Li||ut!==gi)&&(e.stencilFunc(pe,Li,gi),j=pe,_t=Li,ut=gi)},setOp:function(pe,Li,gi){(nt!==pe||Ct!==Li||Ft!==gi)&&(e.stencilOp(pe,Li,gi),nt=pe,Ct=Li,Ft=gi)},setLocked:function(pe){N=pe},setClear:function(pe){Pe!==pe&&(e.clearStencil(pe),Pe=pe)},reset:function(){N=!1,at=null,j=null,_t=null,ut=null,nt=null,Ct=null,Ft=null,Pe=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,w=null,A=null,R=null,S=new Vt(0,0,0),T=0,D=!1,U=null,F=null,q=null,Q=null,B=null;const L=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=X>=2);let $=null,ft={};const Tt=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),Zt=new Fe().fromArray(Tt),Nt=new Fe().fromArray(kt);function J(N,at,j,_t){const ut=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ct=0;Ct<j;Ct++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,ut):e.texImage2D(at+Ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ut);return nt}const ht={};ht[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ht[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ht[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(e.DEPTH_TEST),r.setFunc(Or),De(!1),ye(Q0),rt(e.CULL_FACE),de($i);function rt(N){d[N]!==!0&&(e.enable(N),d[N]=!0)}function Ut(N){d[N]!==!1&&(e.disable(N),d[N]=!1)}function Pt(N,at){return u[N]!==at?(e.bindFramebuffer(N,at),u[N]=at,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=at),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Lt(N,at){let j=v,_t=!1;if(N){j=p.get(at),j===void 0&&(j=[],p.set(at,j));const ut=N.textures;if(j.length!==ut.length||j[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Ct=ut.length;nt<Ct;nt++)j[nt]=e.COLOR_ATTACHMENT0+nt;j.length=ut.length,_t=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,_t=!0);_t&&e.drawBuffers(j)}function Me(N){return E!==N?(e.useProgram(N),E=N,!0):!1}const qt={[ls]:e.FUNC_ADD,[KE]:e.FUNC_SUBTRACT,[QE]:e.FUNC_REVERSE_SUBTRACT};qt[JE]=e.MIN,qt[$E]=e.MAX;const re={[tb]:e.ZERO,[eb]:e.ONE,[nb]:e.SRC_COLOR,[td]:e.SRC_ALPHA,[lb]:e.SRC_ALPHA_SATURATE,[rb]:e.DST_COLOR,[ab]:e.DST_ALPHA,[ib]:e.ONE_MINUS_SRC_COLOR,[ed]:e.ONE_MINUS_SRC_ALPHA,[ob]:e.ONE_MINUS_DST_COLOR,[sb]:e.ONE_MINUS_DST_ALPHA,[cb]:e.CONSTANT_COLOR,[ub]:e.ONE_MINUS_CONSTANT_COLOR,[fb]:e.CONSTANT_ALPHA,[hb]:e.ONE_MINUS_CONSTANT_ALPHA};function de(N,at,j,_t,ut,nt,Ct,Ft,Pe,pe){if(N===$i){g===!0&&(Ut(e.BLEND),g=!1);return}if(g===!1&&(rt(e.BLEND),g=!0),N!==ZE){if(N!==f||pe!==D){if((m!==ls||w!==ls)&&(e.blendEquation(e.FUNC_ADD),m=ls,w=ls),pe)switch(N){case Mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eu:e.blendFunc(e.ONE,e.ONE);break;case J0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eu:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case J0:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}_=null,M=null,A=null,R=null,S.set(0,0,0),T=0,f=N,D=pe}return}ut=ut||at,nt=nt||j,Ct=Ct||_t,(at!==m||ut!==w)&&(e.blendEquationSeparate(qt[at],qt[ut]),m=at,w=ut),(j!==_||_t!==M||nt!==A||Ct!==R)&&(e.blendFuncSeparate(re[j],re[_t],re[nt],re[Ct]),_=j,M=_t,A=nt,R=Ct),(Ft.equals(S)===!1||Pe!==T)&&(e.blendColor(Ft.r,Ft.g,Ft.b,Pe),S.copy(Ft),T=Pe),f=N,D=!1}function Wt(N,at){N.side===Wi?Ut(e.CULL_FACE):rt(e.CULL_FACE);let j=N.side===An;at&&(j=!j),De(j),N.blending===Mr&&N.transparent===!1?de($i):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const _t=N.stencilWrite;o.setTest(_t),_t&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),C(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(N){U!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),U=N)}function ye(N){N!==YE?(rt(e.CULL_FACE),N!==F&&(N===Q0?e.cullFace(e.BACK):N===qE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),F=N}function cn(N){N!==q&&(O&&e.lineWidth(N),q=N)}function C(N,at,j){N?(rt(e.POLYGON_OFFSET_FILL),(Q!==at||B!==j)&&(Q=at,B=j,r.getReversed()&&(at=-at),e.polygonOffset(at,j))):Ut(e.POLYGON_OFFSET_FILL)}function ct(N){N?rt(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function dt(N){N===void 0&&(N=e.TEXTURE0+L-1),$!==N&&(e.activeTexture(N),$=N)}function yt(N,at,j){j===void 0&&($===null?j=e.TEXTURE0+L-1:j=$);let _t=ft[j];_t===void 0&&(_t={type:void 0,texture:void 0},ft[j]=_t),(_t.type!==N||_t.texture!==at)&&($!==j&&(e.activeTexture(j),$=j),e.bindTexture(N,at||ht[N]),_t.type=N,_t.texture=at)}function tt(){const N=ft[$];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{e.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function b(){try{e.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function z(){try{e.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function et(){try{e.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function st(){try{e.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function lt(){try{e.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function k(){try{e.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Z(){try{e.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function pt(N){return h[N]!==void 0?h[N]:e.getParameter(N)}function xt(N,at){h[N]!==at&&(e.pixelStorei(N,at),h[N]=at)}function ot(N){Zt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Zt.copy(N))}function it(N){Nt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Nt.copy(N))}function bt(N,at){let j=c.get(at);j===void 0&&(j=new WeakMap,c.set(at,j));let _t=j.get(N);_t===void 0&&(_t=e.getUniformBlockIndex(at,N.name),j.set(N,_t))}function St(N,at){const _t=c.get(at).get(N);l.get(at)!==_t&&(e.uniformBlockBinding(at,_t,N.__bindingPointIndex),l.set(at,_t))}function ee(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},h={},$=null,ft={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,w=null,A=null,R=null,S=new Vt(0,0,0),T=0,D=!1,U=null,F=null,q=null,Q=null,B=null,Zt.set(0,0,e.canvas.width,e.canvas.height),Nt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:rt,disable:Ut,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:Me,setBlending:de,setMaterial:Wt,setFlipSided:De,setCullFace:ye,setLineWidth:cn,setPolygonOffset:C,setScissorTest:ct,activeTexture:dt,bindTexture:yt,unbindTexture:tt,compressedTexImage2D:Kt,compressedTexImage3D:b,texImage2D:k,texImage3D:Z,pixelStorei:xt,getParameter:pt,updateUBOMapping:bt,uniformBlockBinding:St,texStorage2D:st,texStorage3D:lt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:et,scissor:ot,viewport:it,reset:ee}}function p2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,x){return v?new OffscreenCanvas(b,x):ou("canvas")}function g(b,x,z){let Y=1;const et=Kt(b);if((et.width>z||et.height>z)&&(Y=z/Math.max(et.width,et.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const st=Math.floor(Y*et.width),lt=Math.floor(Y*et.height);u===void 0&&(u=E(st,lt));const k=x?E(st,lt):u;return k.width=st,k.height=lt,k.getContext("2d").drawImage(b,0,0,st,lt),Ot("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+st+"x"+lt+")."),k}else return"data"in b&&Ot("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function f(b){return b.generateMipmaps}function m(b){e.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(b,x,z,Y,et,st=!1){if(b!==null){if(e[b]!==void 0)return e[b];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let lt;Y&&(lt=t.get("EXT_texture_norm16"),lt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=x;if(x===e.RED&&(z===e.FLOAT&&(k=e.R32F),z===e.HALF_FLOAT&&(k=e.R16F),z===e.UNSIGNED_BYTE&&(k=e.R8),z===e.UNSIGNED_SHORT&&lt&&(k=lt.R16_EXT),z===e.SHORT&&lt&&(k=lt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(k=e.R8UI),z===e.UNSIGNED_SHORT&&(k=e.R16UI),z===e.UNSIGNED_INT&&(k=e.R32UI),z===e.BYTE&&(k=e.R8I),z===e.SHORT&&(k=e.R16I),z===e.INT&&(k=e.R32I)),x===e.RG&&(z===e.FLOAT&&(k=e.RG32F),z===e.HALF_FLOAT&&(k=e.RG16F),z===e.UNSIGNED_BYTE&&(k=e.RG8),z===e.UNSIGNED_SHORT&&lt&&(k=lt.RG16_EXT),z===e.SHORT&&lt&&(k=lt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(k=e.RG8UI),z===e.UNSIGNED_SHORT&&(k=e.RG16UI),z===e.UNSIGNED_INT&&(k=e.RG32UI),z===e.BYTE&&(k=e.RG8I),z===e.SHORT&&(k=e.RG16I),z===e.INT&&(k=e.RG32I)),x===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(k=e.RGB8UI),z===e.UNSIGNED_SHORT&&(k=e.RGB16UI),z===e.UNSIGNED_INT&&(k=e.RGB32UI),z===e.BYTE&&(k=e.RGB8I),z===e.SHORT&&(k=e.RGB16I),z===e.INT&&(k=e.RGB32I)),x===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),z===e.UNSIGNED_INT&&(k=e.RGBA32UI),z===e.BYTE&&(k=e.RGBA8I),z===e.SHORT&&(k=e.RGBA16I),z===e.INT&&(k=e.RGBA32I)),x===e.RGB&&(z===e.UNSIGNED_SHORT&&lt&&(k=lt.RGB16_EXT),z===e.SHORT&&lt&&(k=lt.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),x===e.RGBA){const Z=st?su:ie.getTransfer(et);z===e.FLOAT&&(k=e.RGBA32F),z===e.HALF_FLOAT&&(k=e.RGBA16F),z===e.UNSIGNED_BYTE&&(k=Z===ce?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&lt&&(k=lt.RGBA16_EXT),z===e.SHORT&&lt&&(k=lt.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function w(b,x){let z;return b?x===null||x===wi||x===Jo?z=e.DEPTH24_STENCIL8:x===bi?z=e.DEPTH32F_STENCIL8:x===Qo&&(z=e.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===Jo?z=e.DEPTH_COMPONENT24:x===bi?z=e.DEPTH_COMPONENT32F:x===Qo&&(z=e.DEPTH_COMPONENT16),z}function A(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==sn&&b.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function S(b){const x=b.target;x.removeEventListener("dispose",S),U(x)}function T(b){const x=i.get(b);if(x.__webglInit===void 0)return;const z=b.source,Y=p.get(z);if(Y){const et=Y[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(b),Object.keys(Y).length===0&&p.delete(z)}i.remove(b)}function D(b){const x=i.get(b);e.deleteTexture(x.__webglTexture);const z=b.source,Y=p.get(z);delete Y[x.__cacheKey],r.memory.textures--}function U(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let et=0;et<x.__webglFramebuffer[Y].length;et++)e.deleteFramebuffer(x.__webglFramebuffer[Y][et]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=b.textures;for(let Y=0,et=z.length;Y<et;Y++){const st=i.get(z[Y]);st.__webglTexture&&(e.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(z[Y])}i.remove(b)}let F=0;function q(){F=0}function Q(){return F}function B(b){F=b}function L(){const b=F;return b>=a.maxTextures&&Ot("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),F+=1,b}function O(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){const z=i.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){const Y=b.image;if(Y===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(z,b,x);return}}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+x)}function W(b,x){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Ut(z,b,x);return}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+x)}function $(b,x){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Ut(z,b,x);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+x)}function ft(b,x){const z=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&z.__version!==b.version){Pt(z,b,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+x)}const Tt={[cd]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[ud]:e.MIRRORED_REPEAT},kt={[sn]:e.NEAREST,[mb]:e.NEAREST_MIPMAP_NEAREST,[Ll]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[Af]:e.LINEAR_MIPMAP_NEAREST,[us]:e.LINEAR_MIPMAP_LINEAR},Zt={[vb]:e.NEVER,[Eb]:e.ALWAYS,[xb]:e.LESS,[em]:e.LEQUAL,[Sb]:e.EQUAL,[nm]:e.GEQUAL,[Mb]:e.GREATER,[yb]:e.NOTEQUAL};function Nt(b,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===Af||x.magFilter===Ll||x.magFilter===us||x.minFilter===pn||x.minFilter===Af||x.minFilter===Ll||x.minFilter===us)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,Tt[x.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,Tt[x.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,Tt[x.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,kt[x.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,kt[x.minFilter]),x.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Zt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==Ll&&x.minFilter!==us||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let et=p.get(Y);et===void 0&&(et={},p.set(Y,et));const st=O(x);if(st!==b.__cacheKey){et[st]===void 0&&(et[st]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),et[st].usedTimes++;const lt=et[b.__cacheKey];lt!==void 0&&(et[b.__cacheKey].usedTimes--,lt.usedTimes===0&&D(x)),b.__cacheKey=st,b.__webglTexture=et[st].texture}return z}function ht(b,x,z){return Math.floor(Math.floor(b/z)/x)}function rt(b,x,z,Y){const st=b.updateRanges;if(st.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,z,Y,x.data);else{st.sort((xt,ot)=>xt.start-ot.start);let lt=0;for(let xt=1;xt<st.length;xt++){const ot=st[lt],it=st[xt],bt=ot.start+ot.count,St=ht(it.start,x.width,4),ee=ht(ot.start,x.width,4);it.start<=bt+1&&St===ee&&ht(it.start+it.count-1,x.width,4)===St?ot.count=Math.max(ot.count,it.start+it.count-ot.start):(++lt,st[lt]=it)}st.length=lt+1;const k=n.getParameter(e.UNPACK_ROW_LENGTH),Z=n.getParameter(e.UNPACK_SKIP_PIXELS),pt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let xt=0,ot=st.length;xt<ot;xt++){const it=st[xt],bt=Math.floor(it.start/4),St=Math.ceil(it.count/4),ee=bt%x.width,N=Math.floor(bt/x.width),at=St,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ee,N,at,j,z,Y,x.data)}b.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,k),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(e.UNPACK_SKIP_ROWS,pt)}}function Ut(b,x,z){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);const et=J(b,x),st=x.source;n.bindTexture(Y,b.__webglTexture,e.TEXTURE0+z);const lt=i.get(st);if(st.version!==lt.__version||et===!0){if(n.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=ie.getPrimaries(ie.workingColorSpace),_t=x.colorSpace===Aa?null:ie.getPrimaries(x.colorSpace),ut=x.colorSpace===Aa||j===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=g(x.image,!1,a.maxTextureSize);Z=tt(x,Z);const pt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type);let ot=M(x.internalFormat,pt,xt,x.normalized,x.colorSpace,x.isVideoTexture);Nt(Y,x);let it;const bt=x.mipmaps,St=x.isVideoTexture!==!0,ee=lt.__version===void 0||et===!0,N=st.dataReady,at=A(x,Z);if(x.isDepthTexture)ot=w(x.format===fs,x.type),ee&&(St?n.texStorage2D(e.TEXTURE_2D,1,ot,Z.width,Z.height):n.texImage2D(e.TEXTURE_2D,0,ot,Z.width,Z.height,0,pt,xt,null));else if(x.isDataTexture)if(bt.length>0){St&&ee&&n.texStorage2D(e.TEXTURE_2D,at,ot,bt[0].width,bt[0].height);for(let j=0,_t=bt.length;j<_t;j++)it=bt[j],St?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,it.width,it.height,pt,xt,it.data):n.texImage2D(e.TEXTURE_2D,j,ot,it.width,it.height,0,pt,xt,it.data);x.generateMipmaps=!1}else St?(ee&&n.texStorage2D(e.TEXTURE_2D,at,ot,Z.width,Z.height),N&&rt(x,Z,pt,xt)):n.texImage2D(e.TEXTURE_2D,0,ot,Z.width,Z.height,0,pt,xt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){St&&ee&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,ot,bt[0].width,bt[0].height,Z.depth);for(let j=0,_t=bt.length;j<_t;j++)if(it=bt[j],x.format!==di)if(pt!==null)if(St){if(N)if(x.layerUpdates.size>0){const ut=wg(it.width,it.height,x.format,x.type);for(const nt of x.layerUpdates){const Ct=it.data.subarray(nt*ut/it.data.BYTES_PER_ELEMENT,(nt+1)*ut/it.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,nt,it.width,it.height,1,pt,Ct)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,it.width,it.height,Z.depth,pt,it.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,ot,it.width,it.height,Z.depth,0,it.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,it.width,it.height,Z.depth,pt,xt,it.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,ot,it.width,it.height,Z.depth,0,pt,xt,it.data)}else{St&&ee&&n.texStorage2D(e.TEXTURE_2D,at,ot,bt[0].width,bt[0].height);for(let j=0,_t=bt.length;j<_t;j++)it=bt[j],x.format!==di?pt!==null?St?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,it.width,it.height,pt,it.data):n.compressedTexImage2D(e.TEXTURE_2D,j,ot,it.width,it.height,0,it.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,it.width,it.height,pt,xt,it.data):n.texImage2D(e.TEXTURE_2D,j,ot,it.width,it.height,0,pt,xt,it.data)}else if(x.isDataArrayTexture)if(St){if(ee&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,ot,Z.width,Z.height,Z.depth),N)if(x.layerUpdates.size>0){const j=wg(Z.width,Z.height,x.format,x.type);for(const _t of x.layerUpdates){const ut=Z.data.subarray(_t*j/Z.data.BYTES_PER_ELEMENT,(_t+1)*j/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,_t,Z.width,Z.height,1,pt,xt,ut)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,pt,xt,Z.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ot,Z.width,Z.height,Z.depth,0,pt,xt,Z.data);else if(x.isData3DTexture)St?(ee&&n.texStorage3D(e.TEXTURE_3D,at,ot,Z.width,Z.height,Z.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,pt,xt,Z.data)):n.texImage3D(e.TEXTURE_3D,0,ot,Z.width,Z.height,Z.depth,0,pt,xt,Z.data);else if(x.isFramebufferTexture){if(ee)if(St)n.texStorage2D(e.TEXTURE_2D,at,ot,Z.width,Z.height);else{let j=Z.width,_t=Z.height;for(let ut=0;ut<at;ut++)n.texImage2D(e.TEXTURE_2D,ut,ot,j,_t,0,pt,xt,null),j>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),h.add(x),j.onpaint=Ft=>{const Pe=Ft.changedElements;for(const pe of h)Pe.includes(pe.image)&&(pe.needsUpdate=!0)},j.requestPaint();return}const _t=0,ut=e.RGBA,nt=e.RGBA,Ct=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,_t,ut,nt,Ct,Z),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(bt.length>0){if(St&&ee){const j=Kt(bt[0]);n.texStorage2D(e.TEXTURE_2D,at,ot,j.width,j.height)}for(let j=0,_t=bt.length;j<_t;j++)it=bt[j],St?N&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt,xt,it):n.texImage2D(e.TEXTURE_2D,j,ot,pt,xt,it);x.generateMipmaps=!1}else if(St){if(ee){const j=Kt(Z);n.texStorage2D(e.TEXTURE_2D,at,ot,j.width,j.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,xt,Z)}else n.texImage2D(e.TEXTURE_2D,0,ot,pt,xt,Z);f(x)&&m(Y),lt.__version=st.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Pt(b,x,z){if(x.image.length!==6)return;const Y=J(b,x),et=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+z);const st=i.get(et);if(et.version!==st.__version||Y===!0){n.activeTexture(e.TEXTURE0+z);const lt=ie.getPrimaries(ie.workingColorSpace),k=x.colorSpace===Aa?null:ie.getPrimaries(x.colorSpace),Z=x.colorSpace===Aa||lt===k?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const pt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let nt=0;nt<6;nt++)!pt&&!xt?ot[nt]=g(x.image[nt],!0,a.maxCubemapSize):ot[nt]=xt?x.image[nt].image:x.image[nt],ot[nt]=tt(x,ot[nt]);const it=ot[0],bt=s.convert(x.format,x.colorSpace),St=s.convert(x.type),ee=M(x.internalFormat,bt,St,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,at=st.__version===void 0||Y===!0,j=et.dataReady;let _t=A(x,it);Nt(e.TEXTURE_CUBE_MAP,x);let ut;if(pt){N&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,ee,it.width,it.height);for(let nt=0;nt<6;nt++){ut=ot[nt].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const Ft=ut[Ct];x.format!==di?bt!==null?N?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,Ft.width,Ft.height,bt,Ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,ee,Ft.width,Ft.height,0,Ft.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,0,0,Ft.width,Ft.height,bt,St,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct,ee,Ft.width,Ft.height,0,bt,St,Ft.data)}}}else{if(ut=x.mipmaps,N&&at){ut.length>0&&_t++;const nt=Kt(ot[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,ee,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(xt){N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ot[nt].width,ot[nt].height,bt,St,ot[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,ot[nt].width,ot[nt].height,0,bt,St,ot[nt].data);for(let Ct=0;Ct<ut.length;Ct++){const Pe=ut[Ct].image[nt].image;N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,Pe.width,Pe.height,bt,St,Pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,ee,Pe.width,Pe.height,0,bt,St,Pe.data)}}else{N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt,St,ot[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,bt,St,ot[nt]);for(let Ct=0;Ct<ut.length;Ct++){const Ft=ut[Ct];N?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,0,0,bt,St,Ft.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ct+1,ee,bt,St,Ft.image[nt])}}}f(x)&&m(e.TEXTURE_CUBE_MAP),st.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Lt(b,x,z,Y,et,st){const lt=s.convert(z.format,z.colorSpace),k=s.convert(z.type),Z=M(z.internalFormat,lt,k,z.normalized,z.colorSpace),pt=i.get(x),xt=i.get(z);if(xt.__renderTarget=x,!pt.__hasExternalTextures){const ot=Math.max(1,x.width>>st),it=Math.max(1,x.height>>st);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,st,Z,ot,it,x.depth,0,lt,k,null):n.texImage2D(et,st,Z,ot,it,0,lt,k,null)}n.bindFramebuffer(e.FRAMEBUFFER,b),dt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,et,xt.__webglTexture,0,ct(x)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,et,xt.__webglTexture,st),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(b,x,z){if(e.bindRenderbuffer(e.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,et=Y&&Y.isDepthTexture?Y.type:null,st=w(x.stencilBuffer,et),lt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct(x),st,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct(x),st,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,st,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,lt,e.RENDERBUFFER,b)}else{const Y=x.textures;for(let et=0;et<Y.length;et++){const st=Y[et],lt=s.convert(st.format,st.colorSpace),k=s.convert(st.type),Z=M(st.internalFormat,lt,k,st.normalized,st.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct(x),Z,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct(x),Z,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,Z,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qt(b,x,z){const Y=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(x.depthTexture);if(et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(et.__webglInit===void 0&&(et.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,x.depthTexture);const pt=s.convert(x.depthTexture.format),xt=s.convert(x.depthTexture.type);let ot;x.depthTexture.format===la?ot=e.DEPTH_COMPONENT24:x.depthTexture.format===fs&&(ot=e.DEPTH24_STENCIL8);for(let it=0;it<6;it++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ot,x.width,x.height,0,pt,xt,null)}}else X(x.depthTexture,0);const st=et.__webglTexture,lt=ct(x),k=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,Z=x.depthTexture.format===fs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===la)dt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,k,st,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,Z,k,st,0);else if(x.depthTexture.format===fs)dt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,k,st,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,Z,k,st,0);else throw new Error("Unknown depthTexture format")}function re(b){const x=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",et)};Y.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)qt(x.__webglFramebuffer[Y],b,Y);else{const Y=b.texture.mipmaps;Y&&Y.length>0?qt(x.__webglFramebuffer[0],b,0):qt(x.__webglFramebuffer,b,0)}else if(z){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),Me(x.__webglDepthbuffer[Y],b,!1);else{const et=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,st)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Me(x.__webglDepthbuffer,b,!1);else{const et=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,st)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(b,x,z){const Y=i.get(b);x!==void 0&&Lt(Y.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&re(b)}function Wt(b){const x=b.texture,z=i.get(b),Y=i.get(x);b.addEventListener("dispose",S);const et=b.textures,st=b.isWebGLCubeRenderTarget===!0,lt=et.length>1;if(lt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,r.memory.textures++),st){z.__webglFramebuffer=[];for(let k=0;k<6;k++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[k]=[];for(let Z=0;Z<x.mipmaps.length;Z++)z.__webglFramebuffer[k][Z]=e.createFramebuffer()}else z.__webglFramebuffer[k]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let k=0;k<x.mipmaps.length;k++)z.__webglFramebuffer[k]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(lt)for(let k=0,Z=et.length;k<Z;k++){const pt=i.get(et[k]);pt.__webglTexture===void 0&&(pt.__webglTexture=e.createTexture(),r.memory.textures++)}if(b.samples>0&&dt(b)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let k=0;k<et.length;k++){const Z=et[k];z.__webglColorRenderbuffer[k]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[k]);const pt=s.convert(Z.format,Z.colorSpace),xt=s.convert(Z.type),ot=M(Z.internalFormat,pt,xt,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),it=ct(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,ot,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+k,e.RENDERBUFFER,z.__webglColorRenderbuffer[k])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,x);for(let k=0;k<6;k++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Lt(z.__webglFramebuffer[k][Z],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,Z);else Lt(z.__webglFramebuffer[k],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(x)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(lt){for(let k=0,Z=et.length;k<Z;k++){const pt=et[k],xt=i.get(pt);let ot=e.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,xt.__webglTexture),Nt(ot,pt),Lt(z.__webglFramebuffer,b,pt,e.COLOR_ATTACHMENT0+k,ot,0),f(pt)&&m(ot)}n.unbindTexture()}else{let k=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(k=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(k,Y.__webglTexture),Nt(k,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Lt(z.__webglFramebuffer[Z],b,x,e.COLOR_ATTACHMENT0,k,Z);else Lt(z.__webglFramebuffer,b,x,e.COLOR_ATTACHMENT0,k,0);f(x)&&m(k),n.unbindTexture()}b.depthBuffer&&re(b)}function De(b){const x=b.textures;for(let z=0,Y=x.length;z<Y;z++){const et=x[z];if(f(et)){const st=_(b),lt=i.get(et).__webglTexture;n.bindTexture(st,lt),m(st),n.unbindTexture()}}}const ye=[],cn=[];function C(b){if(b.samples>0){if(dt(b)===!1){const x=b.textures,z=b.width,Y=b.height;let et=e.COLOR_BUFFER_BIT;const st=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=i.get(b),k=x.length>1;if(k)for(let pt=0;pt<x.length;pt++)n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Z=b.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),k){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,lt.__webglColorRenderbuffer[pt]);const xt=i.get(x[pt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xt,0)}e.blitFramebuffer(0,0,z,Y,0,0,z,Y,et,e.NEAREST),l===!0&&(ye.length=0,cn.length=0,ye.push(e.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ye.push(st),cn.push(st),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,cn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),k)for(let pt=0;pt<x.length;pt++){n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,lt.__webglColorRenderbuffer[pt]);const xt=i.get(x[pt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,xt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ct(b){return Math.min(a.maxSamples,b.samples)}function dt(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(b){const x=r.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function tt(b,x){const z=b.colorSpace,Y=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==au&&z!==Aa&&(ie.getTransfer(z)===ce?(Y!==di||et!==ti)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",z)),x}function Kt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=ft,this.rebindTextures=de,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function m2(e,t){function n(i,a=Aa){let s;const r=ie.getTransfer(a);if(i===ti)return e.UNSIGNED_BYTE;if(i===Kp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===dS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===pS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===fS)return e.BYTE;if(i===hS)return e.SHORT;if(i===Qo)return e.UNSIGNED_SHORT;if(i===Zp)return e.INT;if(i===wi)return e.UNSIGNED_INT;if(i===bi)return e.FLOAT;if(i===oa)return e.HALF_FLOAT;if(i===mS)return e.ALPHA;if(i===gS)return e.RGB;if(i===di)return e.RGBA;if(i===la)return e.DEPTH_COMPONENT;if(i===fs)return e.DEPTH_STENCIL;if(i===_S)return e.RED;if(i===Jp)return e.RED_INTEGER;if(i===Es)return e.RG;if(i===$p)return e.RG_INTEGER;if(i===tm)return e.RGBA_INTEGER;if(i===Mc||i===yc||i===Ec||i===bc)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===hd||i===dd||i===pd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===md||i===gd||i===_d||i===vd||i===xd||i===nu||i===Sd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===md||i===gd)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vd)return s.COMPRESSED_R11_EAC;if(i===xd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nu)return s.COMPRESSED_RG11_EAC;if(i===Sd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Md||i===yd||i===Ed||i===bd||i===Td||i===Ad||i===Rd||i===Cd||i===wd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Md)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Td)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Od)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pd||i===zd||i===Bd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Pd)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Fd||i===iu||i===Hd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Id)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
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

}`;class v2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new RS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new pi({vertexShader:g2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dn(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends ws{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new v2,f={},m=n.getContextAttributes();let _=null,M=null;const w=[],A=[],R=new Xt;let S=null;const T=new Kn;T.viewport=new Fe;const D=new Kn;D.viewport=new Fe;const U=[T,D],F=new wT;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=w[J];return ht===void 0&&(ht=new Nf,w[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=w[J];return ht===void 0&&(ht=new Nf,w[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=w[J];return ht===void 0&&(ht=new Nf,w[J]=ht),ht.getHandSpace()};function B(J){const ht=A.indexOf(J.inputSource);if(ht===-1)return;const rt=w[ht];rt!==void 0&&(rt.update(J.inputSource,J.frame,c||r),rt.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",O);for(let J=0;J<w.length;J++){const ht=A[J];ht!==null&&(A[J]=null,w[J].disconnect(ht))}q=null,Q=null,g.reset();for(const J in f)delete f[J];t.setRenderTarget(_),p=null,u=null,h=null,a=null,M=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",L),a.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Ut=null,Pt=null;m.depth&&(Pt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=m.stencil?fs:la,Ut=m.stencil?Jo:wi);const Lt={colorFormat:n.RGBA8,depthFormat:Pt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Lt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ci(u.textureWidth,u.textureHeight,{format:di,type:ti,depthTexture:new zr(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,rt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ci(p.framebufferWidth,p.framebufferHeight,{format:di,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Nt.setContext(a),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(J){for(let ht=0;ht<J.removed.length;ht++){const rt=J.removed[ht],Ut=A.indexOf(rt);Ut>=0&&(A[Ut]=null,w[Ut].disconnect(rt))}for(let ht=0;ht<J.added.length;ht++){const rt=J.added[ht];let Ut=A.indexOf(rt);if(Ut===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=A.length){A.push(rt),Ut=Lt;break}else if(A[Lt]===null){A[Lt]=rt,Ut=Lt;break}if(Ut===-1)break}const Pt=w[Ut];Pt&&Pt.connect(rt)}}const X=new P,W=new P;function $(J,ht,rt){X.setFromMatrixPosition(ht.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);const Ut=X.distanceTo(W),Pt=ht.projectionMatrix.elements,Lt=rt.projectionMatrix.elements,Me=Pt[14]/(Pt[10]-1),qt=Pt[14]/(Pt[10]+1),re=(Pt[9]+1)/Pt[5],de=(Pt[9]-1)/Pt[5],Wt=(Pt[8]-1)/Pt[0],De=(Lt[8]+1)/Lt[0],ye=Me*Wt,cn=Me*De,C=Ut/(-Wt+De),ct=C*-Wt;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ct),J.translateZ(C),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pt[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const dt=Me+C,yt=qt+C,tt=ye-ct,Kt=cn+(Ut-ct),b=re*qt/yt*dt,x=de*qt/yt*dt;J.projectionMatrix.makePerspective(tt,Kt,b,x,dt,yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ht=J.near,rt=J.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),F.near=D.near=T.near=ht,F.far=D.far=T.far=rt,(q!==F.near||Q!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,Q=F.far),F.layers.mask=J.layers.mask|6,T.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Ut=J.parent,Pt=F.cameras;ft(F,Ut);for(let Lt=0;Lt<Pt.length;Lt++)ft(Pt[Lt],Ut);Pt.length===2?$(F,T,D):F.projectionMatrix.copy(T.projectionMatrix),Tt(J,F,Ut)};function Tt(J,ht,rt){rt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$o*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(J){return f[J]};let kt=null;function Zt(J,ht){if(d=ht.getViewerPose(c||r),v=ht,d!==null){const rt=d.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ut=!1;rt.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let qt=0;qt<rt.length;qt++){const re=rt[qt];let de=null;if(p!==null)de=p.getViewport(re);else{const De=h.getViewSubImage(u,re);de=De.viewport,qt===0&&(t.setRenderTargetTextures(M,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(M))}let Wt=U[qt];Wt===void 0&&(Wt=new Kn,Wt.layers.enable(qt),Wt.viewport=new Fe,U[qt]=Wt),Wt.matrix.fromArray(re.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(re.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),qt===0&&(F.matrix.copy(Wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(Wt)}const Pt=a.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const qt=h.getDepthInformation(rt[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,a.renderState)}if(Pt&&Pt.includes("camera-access")&&E){t.state.unbindTexture(),h=i.getBinding();for(let qt=0;qt<rt.length;qt++){const re=rt[qt].camera;if(re){let de=f[re];de||(de=new RS,f[re]=de);const Wt=h.getCameraImage(re);de.sourceTexture=Wt}}}}for(let rt=0;rt<w.length;rt++){const Ut=A[rt],Pt=w[rt];Ut!==null&&Pt!==void 0&&Pt.update(Ut,ht,c||r)}kt&&kt(J,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),v=null}const Nt=new US;Nt.setAnimationLoop(Zt),this.setAnimationLoop=function(J){kt=J},this.dispose=function(){}}}const S2=new Oe,IS=new Bt;IS.set(-1,0,0,0,1,0,0,0,1);function M2(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,CS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===An&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===An&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(IS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function y2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=a[m.id];M===void 0&&(v(m),M=d(m),a[m.id]=M,m.addEventListener("dispose",g));const w=_.program;i.updateUBOMapping(m,w);const A=t.render.frame;s[m.id]!==A&&(u(m),s[m.id]=A)}function d(m){const _=h();m.__bindingPointIndex=_;const M=e.createBuffer(),w=m.__size,A=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,w,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,M),M}function h(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],M=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,R=M.length;A<R;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,D=S.length;T<D;T++){const U=S[T];if(p(U,A,T,w)===!0){const F=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let B=0;B<q.length;B++){const L=q[B],O=E(L);typeof L=="number"||typeof L=="boolean"?(U.__data[0]=L,e.bufferSubData(e.UNIFORM_BUFFER,F+Q,U.__data)):L.isMatrix3?(U.__data[0]=L.elements[0],U.__data[1]=L.elements[1],U.__data[2]=L.elements[2],U.__data[3]=0,U.__data[4]=L.elements[3],U.__data[5]=L.elements[4],U.__data[6]=L.elements[5],U.__data[7]=0,U.__data[8]=L.elements[6],U.__data[9]=L.elements[7],U.__data[10]=L.elements[8],U.__data[11]=0):ArrayBuffer.isView(L)?U.__data.set(new L.constructor(L.buffer,L.byteOffset,U.__data.length)):(L.toArray(U.__data,Q),Q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,M,w){const A=m.value,R=_+"_"+M;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:ArrayBuffer.isView(A)?w[R]=A.slice():w[R]=A.clone(),!0;{const S=w[R];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return w[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(S.equals(A)===!1)return S.copy(A),!0}}return!1}function v(m){const _=m.uniforms;let M=0;const w=16;for(let R=0,S=_.length;R<S;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,U=T.length;D<U;D++){const F=T[D],q=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,B=q.length;Q<B;Q++){const L=q[Q],O=E(L),X=M%w,W=X%O.boundary,$=X+W;M+=W,$!==0&&w-$<O.storage&&(M+=w-$),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=O.storage}}}const A=M%w;return A>0&&(M+=w-A),m.__size=M,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const E2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function b2(){return xi===null&&(xi=new fT(E2,16,16,Es,oa),xi.name="DFG_LUT",xi.minFilter=pn,xi.magFilter=pn,xi.wrapS=Zi,xi.wrapT=Zi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class T2{constructor(t={}){const{canvas:n=Tb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const E=p,g=new Set([tm,$p,Jp]),f=new Set([ti,wi,Qo,Jo,Kp,Qp]),m=new Uint32Array(4),_=new Int32Array(4),M=new P;let w=null,A=null;const R=[],S=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,F=null;this._outputColorSpace=Yn;let q=0,Q=0,B=null,L=-1,O=null;const X=new Fe,W=new Fe;let $=null;const ft=new Vt(0);let Tt=0,kt=n.width,Zt=n.height,Nt=1,J=null,ht=null;const rt=new Fe(0,0,kt,Zt),Ut=new Fe(0,0,kt,Zt);let Pt=!1;const Lt=new TS;let Me=!1,qt=!1;const re=new Oe,de=new P,Wt=new Fe,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function cn(){return B===null?Nt:1}let C=i;function ct(y,I){return n.getContext(y,I)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jp}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),C===null){const I="webgl2";if(C=ct(I,y),C===null)throw ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw ne("WebGLRenderer: "+y.message),y}let dt,yt,tt,Kt,b,x,z,Y,et,st,lt,k,Z,pt,xt,ot,it,bt,St,ee,N,at,j;function _t(){dt=new bR(C),dt.init(),N=new m2(C,dt),yt=new gR(C,dt,t,N),tt=new d2(C,dt),yt.reversedDepthBuffer&&u&&tt.buffers.depth.setReversed(!0),Kt=new RR(C),b=new $3,x=new p2(C,dt,tt,b,yt,N,Kt),z=new ER(D),Y=new UT(C),at=new pR(C,Y),et=new TR(C,Y,Kt,at),st=new wR(C,et,Y,at,Kt),bt=new CR(C,yt,x),xt=new _R(b),lt=new J3(D,z,dt,yt,at,xt),k=new M2(D,b),Z=new e2,pt=new o2(dt),it=new dR(D,z,tt,st,v,l),ot=new h2(D,st,yt),j=new y2(C,Kt,yt,tt),St=new mR(C,dt,Kt),ee=new AR(C,dt,Kt),Kt.programs=lt.programs,D.capabilities=yt,D.extensions=dt,D.properties=b,D.renderLists=Z,D.shadowMap=ot,D.state=tt,D.info=Kt}_t(),E!==ti&&(T=new UR(E,n.width,n.height,a,s));const ut=new x2(D,C);this.xr=ut,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(y){y!==void 0&&(Nt=y,this.setSize(kt,Zt,!1))},this.getSize=function(y){return y.set(kt,Zt)},this.setSize=function(y,I,V=!0){if(ut.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=y,Zt=I,n.width=Math.floor(y*Nt),n.height=Math.floor(I*Nt),V===!0&&(n.style.width=y+"px",n.style.height=I+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(kt*Nt,Zt*Nt).floor()},this.setDrawingBufferSize=function(y,I,V){kt=y,Zt=I,Nt=V,n.width=Math.floor(y*V),n.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(E===ti){ne("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ot("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(rt)},this.setViewport=function(y,I,V,H){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,I,V,H),tt.viewport(X.copy(rt).multiplyScalar(Nt).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,I,V,H){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,I,V,H),tt.scissor(W.copy(Ut).multiplyScalar(Nt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(y){tt.setScissorTest(Pt=y)},this.setOpaqueSort=function(y){J=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let H=0;if(y){let G=!1;if(B!==null){const vt=B.texture.format;G=g.has(vt)}if(G){const vt=B.texture.type,Et=f.has(vt),gt=it.getClearColor(),At=it.getClearAlpha(),wt=gt.r,Ht=gt.g,jt=gt.b;Et?(m[0]=wt,m[1]=Ht,m[2]=jt,m[3]=At,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=wt,_[1]=Ht,_[2]=jt,_[3]=At,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}I&&(H|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),it.dispose(),Z.dispose(),pt.dispose(),b.dispose(),z.dispose(),st.dispose(),at.dispose(),j.dispose(),lt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",mm),ut.removeEventListener("sessionend",gm),Qa.stop()};function nt(y){y.preventDefault(),lu("WebGLRenderer: Context Lost."),U=!0}function Ct(){lu("WebGLRenderer: Context Restored."),U=!1;const y=Kt.autoReset,I=ot.enabled,V=ot.autoUpdate,H=ot.needsUpdate,G=ot.type;_t(),Kt.autoReset=y,ot.enabled=I,ot.autoUpdate=V,ot.needsUpdate=H,ot.type=G}function Ft(y){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){const I=y.target;I.removeEventListener("dispose",Pe),pe(I)}function pe(y){Li(y),b.remove(y)}function Li(y){const I=b.get(y).programs;I!==void 0&&(I.forEach(function(V){lt.releaseProgram(V)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,H,G,vt){I===null&&(I=De);const Et=G.isMesh&&G.matrixWorld.determinant()<0,gt=GS(y,I,V,H,G);tt.setMaterial(H,Et);let At=V.index,wt=1;if(H.wireframe===!0){if(At=et.getWireframeAttribute(V),At===void 0)return;wt=2}const Ht=V.drawRange,jt=V.attributes.position;let Dt=Ht.start*wt,me=(Ht.start+Ht.count)*wt;vt!==null&&(Dt=Math.max(Dt,vt.start*wt),me=Math.min(me,(vt.start+vt.count)*wt)),At!==null?(Dt=Math.max(Dt,0),me=Math.min(me,At.count)):jt!=null&&(Dt=Math.max(Dt,0),me=Math.min(me,jt.count));const ze=me-Dt;if(ze<0||ze===1/0)return;at.setup(G,H,gt,V,At);let Ue,ve=St;if(At!==null&&(Ue=Y.get(At),ve=ee,ve.setIndex(Ue)),G.isMesh)H.wireframe===!0?(tt.setLineWidth(H.wireframeLinewidth*cn()),ve.setMode(C.LINES)):ve.setMode(C.TRIANGLES);else if(G.isLine){let un=H.linewidth;un===void 0&&(un=1),tt.setLineWidth(un*cn()),G.isLineSegments?ve.setMode(C.LINES):G.isLineLoop?ve.setMode(C.LINE_LOOP):ve.setMode(C.LINE_STRIP)}else G.isPoints?ve.setMode(C.POINTS):G.isSprite&&ve.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const un=G._multiDrawStarts,Mt=G._multiDrawCounts,Dn=G._multiDrawCount,se=At?Y.get(At).bytesPerElement:1,Xn=b.get(H).currentProgram.getUniforms();for(let _i=0;_i<Dn;_i++)Xn.setValue(C,"_gl_DrawID",_i),ve.render(un[_i]/se,Mt[_i])}else if(G.isInstancedMesh)ve.renderInstances(Dt,ze,G.count);else if(V.isInstancedBufferGeometry){const un=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mt=Math.min(V.instanceCount,un);ve.renderInstances(Dt,ze,Mt)}else ve.render(Dt,ze)};function gi(y,I,V){y.transparent===!0&&y.side===Wi&&y.forceSinglePass===!1?(y.side=An,y.needsUpdate=!0,ml(y,I,V),y.side=qa,y.needsUpdate=!0,ml(y,I,V),y.side=Wi):ml(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),A=pt.get(V),A.init(I),S.push(A),V.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){const gt=vt[Et];gi(gt,V,G),H.add(gt)}else gi(vt,V,G),H.add(vt)}),A=S.pop(),H},this.compileAsync=function(y,I,V=null){const H=this.compile(y,I,V);return new Promise(G=>{function vt(){if(H.forEach(function(Et){b.get(Et).currentProgram.isReady()&&H.delete(Et)}),H.size===0){G(y);return}setTimeout(vt,10)}dt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Iu=null;function FS(y){Iu&&Iu(y)}function mm(){Qa.stop()}function gm(){Qa.start()}const Qa=new US;Qa.setAnimationLoop(FS),typeof self<"u"&&Qa.setContext(self),this.setAnimationLoop=function(y){Iu=y,ut.setAnimationLoop(y),y===null?Qa.stop():Qa.start()},ut.addEventListener("sessionstart",mm),ut.addEventListener("sessionend",gm),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(y,I);const V=ut.enabled===!0&&ut.isPresenting===!0,H=T!==null&&(B===null||V)&&T.begin(D,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,I,B),A=pt.get(y,S.length),A.init(I),A.state.textureUnits=x.getTextureUnits(),S.push(A),re.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Lt.setFromProjectionMatrix(re,Ti,I.reversedDepth),qt=this.localClippingEnabled,Me=xt.init(this.clippingPlanes,qt),w=Z.get(y,R.length),w.init(),R.push(w),ut.enabled===!0&&ut.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Fu(Et,I,-1/0,D.sortObjects)}Fu(y,I,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(J,ht),ye=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ye&&it.addToRenderList(w,y),this.info.render.frame++,Me===!0&&xt.beginShadows();const G=A.state.shadowsArray;if(ot.render(G,y,I),Me===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&T.hasRenderPass())===!1){const Et=w.opaque,gt=w.transmissive;if(A.setupLights(),I.isArrayCamera){const At=I.cameras;if(gt.length>0)for(let wt=0,Ht=At.length;wt<Ht;wt++){const jt=At[wt];vm(Et,gt,y,jt)}ye&&it.render(y);for(let wt=0,Ht=At.length;wt<Ht;wt++){const jt=At[wt];_m(w,y,jt,jt.viewport)}}else gt.length>0&&vm(Et,gt,y,I),ye&&it.render(y),_m(w,y,I)}B!==null&&Q===0&&(x.updateMultisampleRenderTarget(B),x.updateRenderTargetMipmap(B)),H&&T.end(D),y.isScene===!0&&y.onAfterRender(D,y,I),at.resetDefaultState(),L=-1,O=null,S.pop(),S.length>0?(A=S[S.length-1],x.setTextureUnits(A.state.textureUnits),Me===!0&&xt.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function Fu(y,I,V,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Lt.intersectsSprite(y)){H&&Wt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);const Et=st.update(y),gt=y.material;gt.visible&&w.push(y,Et,gt,V,Wt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Lt.intersectsObject(y))){const Et=st.update(y),gt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Wt.copy(y.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Wt.copy(Et.boundingSphere.center)),Wt.applyMatrix4(y.matrixWorld).applyMatrix4(re)),Array.isArray(gt)){const At=Et.groups;for(let wt=0,Ht=At.length;wt<Ht;wt++){const jt=At[wt],Dt=gt[jt.materialIndex];Dt&&Dt.visible&&w.push(y,Et,Dt,V,Wt.z,jt)}}else gt.visible&&w.push(y,Et,gt,V,Wt.z,null)}}const vt=y.children;for(let Et=0,gt=vt.length;Et<gt;Et++)Fu(vt[Et],I,V,H)}function _m(y,I,V,H){const{opaque:G,transmissive:vt,transparent:Et}=y;A.setupLightsView(V),Me===!0&&xt.setGlobalState(D.clippingPlanes,V),H&&tt.viewport(X.copy(H)),G.length>0&&pl(G,I,V),vt.length>0&&pl(vt,I,V),Et.length>0&&pl(Et,I,V),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function vm(y,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Dt=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:Dt?oa:ti,minFilter:us,samples:Math.max(4,yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const vt=A.state.transmissionRenderTarget[H.id],Et=H.viewport||X;vt.setSize(Et.z*D.transmissionResolutionScale,Et.w*D.transmissionResolutionScale);const gt=D.getRenderTarget(),At=D.getActiveCubeFace(),wt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(ft),Tt=D.getClearAlpha(),Tt<1&&D.setClearColor(16777215,.5),D.clear(),ye&&it.render(V);const Ht=D.toneMapping;D.toneMapping=Ri;const jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Me===!0&&xt.setGlobalState(D.clippingPlanes,H),pl(y,V,H),x.updateMultisampleRenderTarget(vt),x.updateRenderTargetMipmap(vt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let me=0,ze=I.length;me<ze;me++){const Ue=I[me],{object:ve,geometry:un,material:Mt,group:Dn}=Ue;if(Mt.side===Wi&&ve.layers.test(H.layers)){const se=Mt.side;Mt.side=An,Mt.needsUpdate=!0,xm(ve,V,H,un,Mt,Dn),Mt.side=se,Mt.needsUpdate=!0,Dt=!0}}Dt===!0&&(x.updateMultisampleRenderTarget(vt),x.updateRenderTargetMipmap(vt))}D.setRenderTarget(gt,At,wt),D.setClearColor(ft,Tt),jt!==void 0&&(H.viewport=jt),D.toneMapping=Ht}function pl(y,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,vt=y.length;G<vt;G++){const Et=y[G],{object:gt,geometry:At,group:wt}=Et;let Ht=Et.material;Ht.allowOverride===!0&&H!==null&&(Ht=H),gt.layers.test(V.layers)&&xm(gt,I,V,At,Ht,wt)}}function xm(y,I,V,H,G,vt){y.onBeforeRender(D,I,V,H,G,vt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(D,I,V,H,y,vt),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,D.renderBufferDirect(V,I,H,G,y,vt),G.side=qa,G.needsUpdate=!0,D.renderBufferDirect(V,I,H,G,y,vt),G.side=Wi):D.renderBufferDirect(V,I,H,G,y,vt),y.onAfterRender(D,I,V,H,G,vt)}function ml(y,I,V){I.isScene!==!0&&(I=De);const H=b.get(y),G=A.state.lights,vt=A.state.shadowsArray,Et=G.state.version,gt=lt.getParameters(y,G.state,vt,I,V,A.state.lightProbeGridArray),At=lt.getProgramCacheKey(gt);let wt=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=z.get(y.envMap||H.environment,Ht),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",Pe),wt=new Map,H.programs=wt);let jt=wt.get(At);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===Et)return Mm(y,gt),jt}else gt.uniforms=lt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,V,gt),y.onBeforeCompile(gt,D),jt=lt.acquireProgram(gt,At),wt.set(At,jt),H.uniforms=gt.uniforms;const Dt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Dt.clippingPlanes=xt.uniform),Mm(y,gt),H.needsLights=XS(y),H.lightsStateVersion=Et,H.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function Sm(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Tc.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Mm(y,I){const V=b.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function HS(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let V=0,H=y.length;V<H;V++){const G=y[V];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function GS(y,I,V,H,G){I.isScene!==!0&&(I=De),x.resetTextureUnits();const vt=I.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,gt=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ie.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=z.get(H.envMap||Et,At),Ht=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,jt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,ze=!!V.morphAttributes.color;let Ue=Ri;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ue=D.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,un=ve!==void 0?ve.length:0,Mt=b.get(H),Dn=A.state.lights;if(Me===!0&&(qt===!0||y!==O)){const Ee=y===O&&H.id===L;xt.setState(H,y,Ee)}let se=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Dn.state.version||Mt.outputColorSpace!==gt||G.isBatchedMesh&&Mt.batching===!1||!G.isBatchedMesh&&Mt.batching===!0||G.isBatchedMesh&&Mt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Mt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Mt.instancing===!1||!G.isInstancedMesh&&Mt.instancing===!0||G.isSkinnedMesh&&Mt.skinning===!1||!G.isSkinnedMesh&&Mt.skinning===!0||G.isInstancedMesh&&Mt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Mt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Mt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Mt.instancingMorph===!1&&G.morphTexture!==null||Mt.envMap!==wt||H.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==xt.numPlanes||Mt.numIntersection!==xt.numIntersection)||Mt.vertexAlphas!==Ht||Mt.vertexTangents!==jt||Mt.morphTargets!==Dt||Mt.morphNormals!==me||Mt.morphColors!==ze||Mt.toneMapping!==Ue||Mt.morphTargetsCount!==un||!!Mt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Mt.__version=H.version);let Xn=Mt.currentProgram;se===!0&&(Xn=ml(H,I,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,Xn,Mt));let _i=!1,ua=!1,Us=!1;const xe=Xn.getUniforms(),Be=Mt.uniforms;if(tt.useProgram(Xn.program)&&(_i=!0,ua=!0,Us=!0),H.id!==L&&(L=H.id,ua=!0),Mt.needsLights){const Ee=HS(A.state.lightProbeGridArray,G);Mt.lightProbeGrid!==Ee&&(Mt.lightProbeGrid=Ee,ua=!0)}if(_i||O!==y){tt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(C,"projectionMatrix",y.projectionMatrix),xe.setValue(C,"viewMatrix",y.matrixWorldInverse);const ha=xe.map.cameraPosition;ha!==void 0&&ha.setValue(C,de.setFromMatrixPosition(y.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),O!==y&&(O=y,ua=!0,Us=!0)}if(Mt.needsLights&&(Dn.state.directionalShadowMap.length>0&&xe.setValue(C,"directionalShadowMap",Dn.state.directionalShadowMap,x),Dn.state.spotShadowMap.length>0&&xe.setValue(C,"spotShadowMap",Dn.state.spotShadowMap,x),Dn.state.pointShadowMap.length>0&&xe.setValue(C,"pointShadowMap",Dn.state.pointShadowMap,x)),G.isSkinnedMesh){xe.setOptional(C,G,"bindMatrix"),xe.setOptional(C,G,"bindMatrixInverse");const Ee=G.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),xe.setValue(C,"boneTexture",Ee.boneTexture,x))}G.isBatchedMesh&&(xe.setOptional(C,G,"batchingTexture"),xe.setValue(C,"batchingTexture",G._matricesTexture,x),xe.setOptional(C,G,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",G._indirectTexture,x),xe.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",G._colorsTexture,x));const fa=V.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&bt.update(G,V,Xn),(ua||Mt.receiveShadow!==G.receiveShadow)&&(Mt.receiveShadow=G.receiveShadow,xe.setValue(C,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Be.envMapIntensity.value=I.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=b2()),ua){if(xe.setValue(C,"toneMappingExposure",D.toneMappingExposure),Mt.needsLights&&VS(Be,Us),vt&&H.fog===!0&&k.refreshFogUniforms(Be,vt),k.refreshMaterialUniforms(Be,H,Nt,Zt,A.state.transmissionRenderTarget[y.id]),Mt.needsLights&&Mt.lightProbeGrid){const Ee=Mt.lightProbeGrid;Be.probesSH.value=Ee.texture,Be.probesMin.value.copy(Ee.boundingBox.min),Be.probesMax.value.copy(Ee.boundingBox.max),Be.probesResolution.value.copy(Ee.resolution)}Tc.upload(C,Sm(Mt),Be,x)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tc.upload(C,Sm(Mt),Be,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(C,"center",G.center),xe.setValue(C,"modelViewMatrix",G.modelViewMatrix),xe.setValue(C,"normalMatrix",G.normalMatrix),xe.setValue(C,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const Ee=H.uniformsGroups;for(let ha=0,Ls=Ee.length;ha<Ls;ha++){const ym=Ee[ha];j.update(ym,Xn),j.bind(ym,Xn)}}return Xn}function VS(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function XS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,I,V){const H=b.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(y.texture).__webglTexture=I,b.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const V=b.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const kS=C.createFramebuffer();this.setRenderTarget=function(y,I=0,V=0){B=y,q=I,Q=V;let H=null,G=!1,vt=!1;if(y){const gt=b.get(y);if(gt.__useDefaultFramebuffer!==void 0){tt.bindFramebuffer(C.FRAMEBUFFER,gt.__webglFramebuffer),X.copy(y.viewport),W.copy(y.scissor),$=y.scissorTest,tt.viewport(X),tt.scissor(W),tt.setScissorTest($),L=-1;return}else if(gt.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(gt.__hasExternalTextures)x.rebindTextures(y,b.get(y.texture).__webglTexture,b.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ht=y.depthTexture;if(gt.__boundDepthTexture!==Ht){if(Ht!==null&&b.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);const wt=b.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?H=wt[I][V]:H=wt[I],G=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?H=b.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[V]:H=wt,X.copy(y.viewport),W.copy(y.scissor),$=y.scissorTest}else X.copy(rt).multiplyScalar(Nt).floor(),W.copy(Ut).multiplyScalar(Nt).floor(),$=Pt;if(V!==0&&(H=kS),tt.bindFramebuffer(C.FRAMEBUFFER,H)&&tt.drawBuffers(y,H),tt.viewport(X),tt.scissor(W),tt.setScissorTest($),G){const gt=b.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,V)}else if(vt){const gt=I;for(let At=0;At<y.textures.length;At++){const wt=b.get(y.textures[At]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+At,wt.__webglTexture,V,gt)}}else if(y!==null&&V!==0){const gt=b.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gt.__webglTexture,V)}L=-1},this.readRenderTargetPixels=function(y,I,V,H,G,vt,Et,gt=0){if(!(y&&y.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){tt.bindFramebuffer(C.FRAMEBUFFER,At);try{const wt=y.textures[gt],Ht=wt.format,jt=wt.type;if(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),!yt.textureFormatReadable(Ht)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(jt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&V>=0&&V<=y.height-G&&C.readPixels(I,V,H,G,N.convert(Ht),N.convert(jt),vt)}finally{const wt=B!==null?b.get(B).__webglFramebuffer:null;tt.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,H,G,vt,Et,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=b.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(I>=0&&I<=y.width-H&&V>=0&&V<=y.height-G){tt.bindFramebuffer(C.FRAMEBUFFER,At);const wt=y.textures[gt],Ht=wt.format,jt=wt.type;if(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+gt),!yt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(I,V,H,G,N.convert(Ht),N.convert(jt),0);const me=B!==null?b.get(B).__webglFramebuffer:null;tt.bindFramebuffer(C.FRAMEBUFFER,me);const ze=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ab(C,ze,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Dt),C.deleteSync(ze),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){const H=Math.pow(2,-V),G=Math.floor(y.image.width*H),vt=Math.floor(y.image.height*H),Et=I!==null?I.x:0,gt=I!==null?I.y:0;x.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Et,gt,G,vt),tt.unbindTexture()};const WS=C.createFramebuffer(),YS=C.createFramebuffer();this.copyTextureToTexture=function(y,I,V=null,H=null,G=0,vt=0){let Et,gt,At,wt,Ht,jt,Dt,me,ze;const Ue=y.isCompressedTexture?y.mipmaps[vt]:y.image;if(V!==null)Et=V.max.x-V.min.x,gt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Ht=V.min.y,jt=V.isBox3?V.min.z:0;else{const Be=Math.pow(2,-G);Et=Math.floor(Ue.width*Be),gt=Math.floor(Ue.height*Be),y.isDataArrayTexture?At=Ue.depth:y.isData3DTexture?At=Math.floor(Ue.depth*Be):At=1,wt=0,Ht=0,jt=0}H!==null?(Dt=H.x,me=H.y,ze=H.z):(Dt=0,me=0,ze=0);const ve=N.convert(I.format),un=N.convert(I.type);let Mt;I.isData3DTexture?(x.setTexture3D(I,0),Mt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(x.setTexture2DArray(I,0),Mt=C.TEXTURE_2D_ARRAY):(x.setTexture2D(I,0),Mt=C.TEXTURE_2D),tt.activeTexture(C.TEXTURE0),tt.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),tt.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),tt.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Dn=tt.getParameter(C.UNPACK_ROW_LENGTH),se=tt.getParameter(C.UNPACK_IMAGE_HEIGHT),Xn=tt.getParameter(C.UNPACK_SKIP_PIXELS),_i=tt.getParameter(C.UNPACK_SKIP_ROWS),ua=tt.getParameter(C.UNPACK_SKIP_IMAGES);tt.pixelStorei(C.UNPACK_ROW_LENGTH,Ue.width),tt.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ue.height),tt.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),tt.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),tt.pixelStorei(C.UNPACK_SKIP_IMAGES,jt);const Us=y.isDataArrayTexture||y.isData3DTexture,xe=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Be=b.get(y),fa=b.get(I),Ee=b.get(Be.__renderTarget),ha=b.get(fa.__renderTarget);tt.bindFramebuffer(C.READ_FRAMEBUFFER,Ee.__webglFramebuffer),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Ls=0;Ls<At;Ls++)Us&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(y).__webglTexture,G,jt+Ls),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(I).__webglTexture,vt,ze+Ls)),C.blitFramebuffer(wt,Ht,Et,gt,Dt,me,Et,gt,C.DEPTH_BUFFER_BIT,C.NEAREST);tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||b.has(y)){const Be=b.get(y),fa=b.get(I);tt.bindFramebuffer(C.READ_FRAMEBUFFER,WS),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,YS);for(let Ee=0;Ee<At;Ee++)Us?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,G,jt+Ee):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Be.__webglTexture,G),xe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fa.__webglTexture,vt,ze+Ee):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fa.__webglTexture,vt),G!==0?C.blitFramebuffer(wt,Ht,Et,gt,Dt,me,Et,gt,C.COLOR_BUFFER_BIT,C.NEAREST):xe?C.copyTexSubImage3D(Mt,vt,Dt,me,ze+Ee,wt,Ht,Et,gt):C.copyTexSubImage2D(Mt,vt,Dt,me,wt,Ht,Et,gt);tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else xe?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Mt,vt,Dt,me,ze,Et,gt,At,ve,un,Ue.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,vt,Dt,me,ze,Et,gt,At,ve,Ue.data):C.texSubImage3D(Mt,vt,Dt,me,ze,Et,gt,At,ve,un,Ue):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,Dt,me,Et,gt,ve,un,Ue.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,Dt,me,Ue.width,Ue.height,ve,Ue.data):C.texSubImage2D(C.TEXTURE_2D,vt,Dt,me,Et,gt,ve,un,Ue);tt.pixelStorei(C.UNPACK_ROW_LENGTH,Dn),tt.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se),tt.pixelStorei(C.UNPACK_SKIP_PIXELS,Xn),tt.pixelStorei(C.UNPACK_SKIP_ROWS,_i),tt.pixelStorei(C.UNPACK_SKIP_IMAGES,ua),vt===0&&I.generateMipmaps&&C.generateMipmap(Mt),tt.unbindTexture()},this.initRenderTarget=function(y){b.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),tt.unbindTexture()},this.resetState=function(){q=0,Q=0,B=null,tt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=ie._getUnpackColorSpace()}}const A2=()=>{const e=ui.useRef(),[t,n]=ui.useState(0),[i,a]=ui.useState(0),[s,r]=ui.useState(!1),[o,l]=ui.useState(!1),[c,d]=ui.useState(!1),h={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},u={skyTwilight:988970,fogColor:132631,snow:new Vt(2236966),pink:new Vt(16756684),blue:new Vt(10670847),glow:6333946,fire:15680580};return ui.useEffect(()=>{var E;const p=window.matchMedia("(pointer: coarse)"),v=()=>{d(p.matches||navigator.maxTouchPoints>0)};return v(),(E=p.addEventListener)==null||E.call(p,"change",v),()=>{var g;(g=p.removeEventListener)==null||g.call(p,"change",v)}},[]),ui.useEffect(()=>{if(!e.current)return;const p=(C,ct,dt)=>Math.max(ct,Math.min(dt,C)),v=new iT;v.background=new Vt(u.skyTwilight),v.fog=new rm(u.fogColor,.006);const E=new Kn(75,window.innerWidth/window.innerHeight,.1,3e3),g=new T2({antialias:!0});g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(g.domElement);const m=(()=>{const C=document.createElement("canvas");C.width=64,C.height=64;const ct=C.getContext("2d"),dt=ct.createRadialGradient(32,32,0,32,32,32);return dt.addColorStop(0,"rgba(255, 255, 255, 1)"),dt.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),dt.addColorStop(1,"rgba(255, 255, 255, 0)"),ct.fillStyle=dt,ct.fillRect(0,0,64,64),new _T(C)})(),_=(C,ct)=>{const dt=Math.sin(C*.045)*Math.cos(ct*.045)*2.8,yt=Math.cos(C*.02+ct*.03)*3.5;return dt+yt},M=new dl(1200,1200,h.segments,h.segments);M.rotateX(-Math.PI/2);const w=M.attributes.position.array,A=[];for(let C=0;C<w.length/3;C++){const ct=w[C*3],dt=w[C*3+2],yt=_(ct,dt);w[C*3+1]=yt;const tt=u.snow.clone().multiplyScalar(.4+yt*.1);A.push(tt.r,tt.g,tt.b)}M.setAttribute("color",new ln(A,3));const R=new co({vertexColors:!0,roughness:1}),S=new dn(M,R);v.add(S);const T={pos:new P(0,10,20),vel:new P,yaw:0,pitch:0},D=[],U=[],F=[],q=(C,ct)=>{const dt=new ES({map:m,color:C,transparent:!0,opacity:0,blending:eu}),yt=new cT(dt);return yt.scale.set(ct,ct,1),yt},Q=()=>{const C=[];for(let ct=0;ct<h.obeliskCount;ct++){let dt,yt;do dt=(Math.random()-.5)*h.worldSize,yt=(Math.random()-.5)*h.worldSize;while(Math.hypot(dt,yt)<100||C.some(tt=>Math.hypot(tt.x-dt,tt.z-yt)<130));C.push({x:dt,z:yt})}return a(h.obeliskCount),C},B=(C,ct,dt=!1)=>{const yt=_(C,ct),tt=new xo;if(tt.position.set(C,yt,ct),dt){const Kt=new dn(new Va(3.5,3.5,3.5),new co({color:16777215,emissive:16777215,emissiveIntensity:2}));Kt.position.set(0,1.75,0),tt.add(Kt);const b=q(16777215,20);b.position.y=3,b.material.opacity=.5,tt.add(b),v.add(tt),D.push({pillar:null,shrine:Kt,tipGlow:b,shrineGlow:b,pos:new P(C,yt,ct),tipPos:new P(C,yt+5,ct),shrinePos:new P(C,yt+1.75,ct),activated:!0})}else{const Kt=new dn(new Va(5.5,h.obeliskHeight,5.5),new co({color:65793}));Kt.position.y=h.obeliskHeight/2-2,tt.add(Kt);const b=new dn(new cm(2.5),new co({color:1118481}));b.position.y=h.obeliskHeight+2,tt.add(b);const x=q(u.blue,15);x.position.y=h.obeliskHeight+2,tt.add(x);const z=new dn(new Va(3,3,3),new co({color:526344}));z.position.set(0,1.5,12),z.userData={id:D.length},tt.add(z),U.push(z);const Y=q(u.pink,12);Y.position.set(0,3,12),tt.add(Y),v.add(tt),D.push({pillar:Kt,shrine:z,tipGlow:x,shrineGlow:Y,pos:new P(C,yt,ct),tipPos:new P(C,yt+h.obeliskHeight+2,ct),shrinePos:new P(C,yt+1.5,ct+12),activated:!1})}};B(0,0,!0),Q().forEach(C=>B(C.x,C.z));class L{constructor(){this.mesh=new dn(new du(.25,8,8),new uu({color:16777215})),this.trailPoints=[];for(let dt=0;dt<h.trailLength;dt++)this.trailPoints.push(new P(0,0,0));const ct=new Float32Array(h.trailLength);for(let dt=0;dt<h.trailLength;dt++)ct[dt]=1-dt/h.trailLength;this.trailGeo=new wn().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new ai(ct,1)),this.trailMat=new pi({transparent:!0,uniforms:{color:{value:new Vt(u.glow)}},vertexShader:`
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
          `,blending:eu}),this.line=new gT(this.trailGeo,this.trailMat),this.pos=new P(0,20,0),this.vel=new P,this.acc=new P,v.add(this.mesh),v.add(this.line)}update(ct,dt){const yt=new P,tt=new P,Kt=new P;let b=0;dt.forEach(z=>{const Y=this.pos.distanceTo(z.pos);Y>0&&Y<12&&(yt.add(z.pos),Kt.add(z.vel),tt.add(this.pos.clone().sub(z.pos).divideScalar(Y)),b++)}),b>0&&(yt.divideScalar(b).sub(this.pos).multiplyScalar(.01),Kt.divideScalar(b).sub(this.vel).multiplyScalar(.04),tt.divideScalar(b).multiplyScalar(.12));const x=ct.clone().sub(this.pos).multiplyScalar(.03);this.acc.add(yt).add(tt).add(Kt).add(x),this.vel.add(this.acc).clampLength(0,.45),this.pos.add(this.vel),this.acc.multiplyScalar(0),this.mesh.position.copy(this.pos);for(let z=h.trailLength-1;z>0;z--)this.trailPoints[z].copy(this.trailPoints[z-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}}const O=[];for(let C=0;C<h.fireflyCount;C++)O.push(new L);const X={moveX:0,moveY:0},W={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},$={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,KeyQ:!1,KeyE:!1},ft={locked:!1,dragging:!1,lastX:0,lastY:0},Tt=.0024,kt=.005,Zt=.032,Nt=(C,ct,dt)=>{T.yaw-=C*dt,T.pitch=p(T.pitch-ct*dt,-1.4,1.4)},J=()=>({moveX:($.KeyD||$.ArrowRight?1:0)-($.KeyA||$.ArrowLeft?1:0),moveY:($.KeyW||$.ArrowUp?1:0)-($.KeyS||$.ArrowDown?1:0),turn:($.KeyQ?1:0)-($.KeyE?1:0)}),ht=()=>{const C=new Ag;C.setFromCamera(new Xt(0,0),E);const ct=C.intersectObjects(U);if(ct.length>0){const dt=ct[0].object.userData.id,yt=D[dt];T.pos.distanceTo(yt.pos)<h.interactDist&&!yt.activated&&(yt.activated=!0,yt.pillar.material.color.set(16777215),yt.pillar.material.emissive.set(16777215),yt.pillar.material.emissiveIntensity=2,yt.shrine.material.color.set(16777215),yt.shrine.material.emissive.set(16777215),yt.shrine.material.emissiveIntensity=2,yt.tipGlow.material.opacity=.6,yt.shrineGlow.material.opacity=.6,n(tt=>(tt+1===h.obeliskCount&&r(!0),tt+1)))}},rt=C=>{C.preventDefault();for(let ct of C.changedTouches)ct.clientX<window.innerWidth/2?(W.left=ct.identifier,W.lx=ct.clientX,W.ly=ct.clientY):(W.right=ct.identifier,W.rx=ct.clientX,W.ry=ct.clientY,ht())},Ut=C=>{C.preventDefault();for(let ct of C.changedTouches)ct.identifier===W.left?(X.moveX=p((ct.clientX-W.lx)/50,-1,1),X.moveY=p(-(ct.clientY-W.ly)/50,-1,1)):ct.identifier===W.right&&(Nt(ct.clientX-W.rx,ct.clientY-W.ry,kt),W.rx=ct.clientX,W.ry=ct.clientY)},Pt=C=>{for(let ct of C.changedTouches)ct.identifier===W.left?(W.left=-1,X.moveX=0,X.moveY=0):ct.identifier===W.right&&(W.right=-1)},Lt=C=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(C.code)&&C.preventDefault(),Object.hasOwn($,C.code)&&($[C.code]=!0),C.code==="Space"&&!C.repeat&&ht()},Me=C=>{Object.hasOwn($,C.code)&&($[C.code]=!1)},qt=()=>{ft.locked=document.pointerLockElement===g.domElement,ft.locked||(ft.dragging=!1)},re=C=>{var ct,dt;C.button===0&&(ft.dragging=!0,ft.lastX=C.clientX,ft.lastY=C.clientY,(dt=(ct=g.domElement).requestPointerLock)==null||dt.call(ct))},de=C=>{if(ft.locked){Nt(C.movementX,C.movementY,Tt);return}ft.dragging&&(Nt(C.clientX-ft.lastX,C.clientY-ft.lastY,kt),ft.lastX=C.clientX,ft.lastY=C.clientY)},Wt=()=>{ft.dragging=!1},De=C=>{C.button===0&&ht()},ye=C=>{C.preventDefault()};window.addEventListener("touchstart",rt,{passive:!1}),window.addEventListener("touchmove",Ut,{passive:!1}),window.addEventListener("touchend",Pt),window.addEventListener("touchcancel",Pt),window.addEventListener("keydown",Lt),window.addEventListener("keyup",Me),window.addEventListener("mousemove",de),window.addEventListener("mouseup",Wt),document.addEventListener("pointerlockchange",qt),g.domElement.addEventListener("mousedown",re),g.domElement.addEventListener("click",De),g.domElement.addEventListener("contextmenu",ye);const cn=()=>{requestAnimationFrame(cn);const C=J();C.turn!==0&&(T.yaw+=C.turn*Zt);const ct=new P(-Math.sin(T.yaw),0,-Math.cos(T.yaw)),dt=new P(-Math.cos(T.yaw),0,Math.sin(T.yaw)),yt=p(X.moveX+C.moveX,-1,1),tt=p(X.moveY+C.moveY,-1,1),Kt=new P().addScaledVector(ct,tt).addScaledVector(dt,-yt);Kt.length()>0&&T.pos.addScaledVector(Kt.normalize(),h.moveSpeed);const b=_(T.pos.x,T.pos.z)+h.playerHeight;T.vel.y-=h.gravity,T.pos.y+=T.vel.y,T.pos.y<b&&(T.pos.y=b,T.vel.y=0),E.position.copy(T.pos),E.rotation.set(T.pitch,T.yaw,0,"YXZ");let x=D[0].shrinePos,z=D[0],Y=1/0;D.forEach(bt=>{if(bt.activated)x=bt.shrinePos;else{const St=T.pos.distanceTo(bt.pos);St<Y&&(Y=St,z=bt)}});const et=Math.sin(Date.now()*6e-4)*.5+.5,st=new P().lerpVectors(x,z.tipPos,et);O.forEach(bt=>bt.update(st,O));let lt=.6;const k=M.attributes.color,Z=M.attributes.position;let pt=!1;D.forEach(bt=>{if(bt.activated){if(Math.random()>.86){const St=new dn(new du(.12),new uu({color:u.fire,transparent:!0}));St.position.copy(bt.shrinePos).add(new P((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),St.userData={v:new P((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},v.add(St),F.push(St)}lt+=Math.max(0,1-T.pos.distanceTo(bt.pos)/160)*.7,bt.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,bt.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let St=0;St<Z.count;St++){const ee=Z.getX(St),N=Z.getZ(St),at=Math.hypot(ee-bt.pos.x,N-bt.pos.z);if(at<65){const j=Math.max(0,1-at/65),_t=u.pink.clone().lerp(u.blue,Math.sin(ee*.1)*.5+.5);k.setXYZ(St,Rf.lerp(k.getX(St),_t.r,j*.06),Rf.lerp(k.getY(St),_t.g,j*.06),Rf.lerp(k.getZ(St),_t.b,j*.06)),pt=!0}}}}),pt&&(k.needsUpdate=!0);for(let bt=F.length-1;bt>=0;bt--){const St=F[bt];St.position.add(St.userData.v),St.userData.l-=.015,St.material.opacity=St.userData.l,St.scale.setScalar(St.userData.l),St.userData.l<=0&&(v.remove(St),F.splice(bt,1))}const xt=new Vt(u.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,lt)));v.background.lerp(xt,.04),v.fog.color.lerp(xt,.04);const ot=new Ag;ot.setFromCamera(new Xt(0,0),E);const it=ot.intersectObjects(U);l(it.length>0&&T.pos.distanceTo(it[0].object.parent.position)<h.interactDist),g.render(v,E)};return cn(),v.add(new RT(16777215,1118498,1.1)),()=>{var C,ct;window.removeEventListener("touchstart",rt),window.removeEventListener("touchmove",Ut),window.removeEventListener("touchend",Pt),window.removeEventListener("touchcancel",Pt),window.removeEventListener("keydown",Lt),window.removeEventListener("keyup",Me),window.removeEventListener("mousemove",de),window.removeEventListener("mouseup",Wt),document.removeEventListener("pointerlockchange",qt),g.domElement.removeEventListener("mousedown",re),g.domElement.removeEventListener("click",De),g.domElement.removeEventListener("contextmenu",ye),document.pointerLockElement===g.domElement&&((C=document.exitPointerLock)==null||C.call(document)),(ct=e.current)==null||ct.removeChild(g.domElement)}},[]),Rt.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[Rt.jsx("div",{ref:e,className:"w-full h-full"}),Rt.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[Rt.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),Rt.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),Rt.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),Rt.jsx("div",{className:"absolute top-14 right-10 flex flex-col items-end",children:Rt.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-8 py-3 text-white flex items-center gap-4",children:[Rt.jsx("span",{className:"text-[10px] opacity-25 tracking-widest",children:"SIGILS"}),Rt.jsxs("span",{className:"text-2xl font-bold",children:[t," / ",i]})]})}),Rt.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[Rt.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),Rt.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),Rt.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),Rt.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:Rt.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[c?Rt.jsxs("span",{className:"flex items-center gap-3",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Rt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Tap Right Half"})]}):Rt.jsxs("span",{className:"flex items-center gap-3",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Rt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Space / Click"})]}),Rt.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),Rt.jsx("div",{className:`absolute bottom-8 left-8 right-8 flex ${c?"justify-end":"justify-start"} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`,children:Rt.jsxs("div",{className:`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${c?"text-right":""}`,children:[Rt.jsx("p",{className:"text-white/35",children:c?"Touch":"Desktop"}),c?Rt.jsxs(Rt.Fragment,{children:[Rt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Left Half"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Right Half"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Tap Right Half"})]})]}):Rt.jsxs(Rt.Fragment,{children:[Rt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"WASD / Arrows"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Rotate"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Q / E"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Mouse"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Space / Click"})]})]})]})}),s&&Rt.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[Rt.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),Rt.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),Rt.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),Rt.jsx("button",{onPointerDown:p=>{p.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),Rt.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};WE.createRoot(document.getElementById("root")).render(Rt.jsx(fM.StrictMode,{children:Rt.jsx(A2,{})}));
