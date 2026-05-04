(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function $g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t_={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=Symbol.for("react.transitional.element"),ZS=Symbol.for("react.fragment");function e_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:qS,type:e,key:i,ref:t!==void 0?t:null,props:n}}mu.Fragment=ZS;mu.jsx=e_;mu.jsxs=e_;t_.exports=mu;var ye=t_.exports,n_={exports:{}},zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=Symbol.for("react.transitional.element"),jS=Symbol.for("react.portal"),KS=Symbol.for("react.fragment"),QS=Symbol.for("react.strict_mode"),JS=Symbol.for("react.profiler"),$S=Symbol.for("react.consumer"),tM=Symbol.for("react.context"),eM=Symbol.for("react.forward_ref"),nM=Symbol.for("react.suspense"),iM=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),aM=Symbol.for("react.activity"),Em=Symbol.iterator;function sM(e){return e===null||typeof e!="object"?null:(e=Em&&e[Em]||e["@@iterator"],typeof e=="function"?e:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s_=Object.assign,r_={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=r_,this.updater=n||a_}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function o_(){}o_.prototype=Ir.prototype;function Zd(e,t,n){this.props=e,this.context=t,this.refs=r_,this.updater=n||a_}var jd=Zd.prototype=new o_;jd.constructor=Zd;s_(jd,Ir.prototype);jd.isPureReactComponent=!0;var bm=Array.isArray;function ah(){}var Ae={H:null,A:null,T:null,S:null},l_=Object.prototype.hasOwnProperty;function Kd(e,t,n){var i=n.ref;return{$$typeof:qd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function rM(e,t){return Kd(e.type,t,e.props)}function Qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===qd}function oM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tm=/\/+/g;function Hu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?oM(""+e.key):t.toString(36)}function lM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ah,ah):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $s(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case qd:case jS:r=!0;break;case i_:return r=e._init,$s(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Hu(e,0):i,bm(a)?(n="",r!=null&&(n=r.replace(Tm,"$&/")+"/"),$s(a,t,n,"",function(c){return c})):a!=null&&(Qd(a)&&(a=rM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Tm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(bm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Hu(i,l),r+=$s(i,t,n,s,a);else if(l=sM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Hu(i,l++),r+=$s(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return $s(lM(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function gl(e,t,n){if(e==null)return e;var i=[],a=0;return $s(e,i,"","",function(s){return t.call(n,s,a++)}),i}function cM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Am=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},uM={map:gl,forEach:function(e,t,n){gl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gl(e,function(){t++}),t},toArray:function(e){return gl(e,function(t){return t})||[]},only:function(e){if(!Qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=aM;zt.Children=uM;zt.Component=Ir;zt.Fragment=KS;zt.Profiler=JS;zt.PureComponent=Zd;zt.StrictMode=QS;zt.Suspense=nM;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ae;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ae.H.useMemoCache(e)}};zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=s_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!l_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Kd(e.type,a,i)};zt.createContext=function(e){return e={$$typeof:tM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:$S,_context:e},e};zt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)l_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Kd(e,s,a)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:eM,render:e}};zt.isValidElement=Qd;zt.lazy=function(e){return{$$typeof:i_,_payload:{_status:-1,_result:e},_init:cM}};zt.memo=function(e,t){return{$$typeof:iM,type:e,compare:t===void 0?null:t}};zt.startTransition=function(e){var t=Ae.T,n={};Ae.T=n;try{var i=e(),a=Ae.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ah,Am)}catch(s){Am(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ae.T=t}};zt.unstable_useCacheRefresh=function(){return Ae.H.useCacheRefresh()};zt.use=function(e){return Ae.H.use(e)};zt.useActionState=function(e,t,n){return Ae.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return Ae.H.useCallback(e,t)};zt.useContext=function(e){return Ae.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return Ae.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return Ae.H.useEffect(e,t)};zt.useEffectEvent=function(e){return Ae.H.useEffectEvent(e)};zt.useId=function(){return Ae.H.useId()};zt.useImperativeHandle=function(e,t,n){return Ae.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return Ae.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return Ae.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return Ae.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return Ae.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return Ae.H.useReducer(e,t,n)};zt.useRef=function(e){return Ae.H.useRef(e)};zt.useState=function(e){return Ae.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return Ae.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return Ae.H.useTransition()};zt.version="19.2.5";n_.exports=zt;var Vi=n_.exports;const fM=$g(Vi);var c_={exports:{}},gu={},u_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,N){var k=D.length;D.push(N);t:for(;0<k;){var J=k-1>>>1,it=D[J];if(0<a(it,N))D[J]=N,D[k]=it,k=J;else break t}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var N=D[0],k=D.pop();if(k!==N){D[0]=k;t:for(var J=0,it=D.length,vt=it>>>1;J<vt;){var $=2*(J+1)-1,at=D[$],xt=$+1,st=D[xt];if(0>a(at,k))xt<it&&0>a(st,at)?(D[J]=st,D[xt]=k,J=xt):(D[J]=at,D[$]=k,J=$);else if(xt<it&&0>a(st,k))D[J]=st,D[xt]=k,J=xt;else break t}}return N}function a(D,N){var k=D.sortIndex-N.sortIndex;return k!==0?k:D.id-N.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,d=null,u=3,p=!1,v=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function M(D){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=D)i(c),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(c)}}function C(D){if(E=!1,M(D),!v)if(n(l)!==null)v=!0,b||(b=!0,I());else{var N=n(c);N!==null&&z(C,N.startTime-D)}}var b=!1,R=-1,x=5,A=-1;function U(){return g?!0:!(e.unstable_now()-A<x)}function w(){if(g=!1,b){var D=e.unstable_now();A=D;var N=!0;try{t:{v=!1,E&&(E=!1,m(R),R=-1),p=!0;var k=u;try{e:{for(M(D),d=n(l);d!==null&&!(d.expirationTime>D&&U());){var J=d.callback;if(typeof J=="function"){d.callback=null,u=d.priorityLevel;var it=J(d.expirationTime<=D);if(D=e.unstable_now(),typeof it=="function"){d.callback=it,M(D),N=!0;break e}d===n(l)&&i(l),M(D)}else i(l);d=n(l)}if(d!==null)N=!0;else{var vt=n(c);vt!==null&&z(C,vt.startTime-D),N=!1}}break t}finally{d=null,u=k,p=!1}N=void 0}}finally{N?I():b=!1}}}var I;if(typeof _=="function")I=function(){_(w)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,j=Y.port2;Y.port1.onmessage=w,I=function(){j.postMessage(null)}}else I=function(){f(w,0)};function z(D,N){R=f(function(){D(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(D){switch(u){case 1:case 2:case 3:var N=3;break;default:N=u}var k=u;u=N;try{return D()}finally{u=k}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=u;u=D;try{return N()}finally{u=k}},e.unstable_scheduleCallback=function(D,N,k){var J=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?J+k:J):k=J,D){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=k+it,D={id:h++,callback:N,priorityLevel:D,startTime:k,expirationTime:it,sortIndex:-1},k>J?(D.sortIndex=k,t(c,D),n(l)===null&&D===n(c)&&(E?(m(R),R=-1):E=!0,z(C,k-J))):(D.sortIndex=it,t(l,D),v||p||(v=!0,b||(b=!0,I()))),D},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(D){var N=u;return function(){var k=u;u=N;try{return D.apply(this,arguments)}finally{u=k}}}})(f_);u_.exports=f_;var hM=u_.exports,h_={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dM=Vi;function d_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function da(){}var xn={d:{f:da,r:function(){throw Error(d_(522))},D:da,C:da,L:da,m:da,X:da,S:da,M:da},p:0,findDOMNode:null},pM=Symbol.for("react.portal");function mM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Mo=dM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _u(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(d_(299));return mM(e,t,null,n)};Sn.flushSync=function(e){var t=Mo.T,n=xn.p;try{if(Mo.T=null,xn.p=2,e)return e()}finally{Mo.T=t,xn.p=n,xn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=_u(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=_u(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};Sn.requestFormReset=function(e){xn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return Mo.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return Mo.H.useHostTransitionStatus()};Sn.version="19.2.5";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(e){console.error(e)}}p_(),h_.exports=Sn;var gM=h_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=hM,m_=Vi,_M=gM;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function __(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rm(e){if(tl(e)!==e)throw Error(K(188))}function vM(e){var t=e.alternate;if(!t){if(t=tl(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Rm(a),e;if(s===i)return Rm(a),t;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function x_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x_(e),t!==null)return t;e=e.sibling}return null}var Re=Object.assign,xM=Symbol.for("react.element"),_l=Symbol.for("react.transitional.element"),ho=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),M_=Symbol.for("react.consumer"),Yi=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Sa=Symbol.for("react.lazy"),lh=Symbol.for("react.activity"),SM=Symbol.for("react.memo_cache_sentinel"),Cm=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=Cm&&e[Cm]||e["@@iterator"],typeof e=="function"?e:null)}var MM=Symbol.for("react.client.reference");function ch(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===MM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case sh:return"Profiler";case S_:return"StrictMode";case rh:return"Suspense";case oh:return"SuspenseList";case lh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ho:return"Portal";case Yi:return e.displayName||"Context";case M_:return(e._context.displayName||"Context")+".Consumer";case Jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $d:return t=e.displayName||null,t!==null?t:ch(e.type)||"Memo";case Sa:t=e._payload,e=e._init;try{return ch(e(t))}catch{}}return null}var po=Array.isArray,Lt=m_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=_M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hs={pending:!1,data:null,method:null,action:null},uh=[],ir=-1;function wi(e){return{current:e}}function tn(e){0>ir||(e.current=uh[ir],uh[ir]=null,ir--)}function Ee(e,t){ir++,uh[ir]=e.current,e.current=t}var Ti=wi(null),Bo=wi(null),Na=wi(null),Ac=wi(null);function Rc(e,t){switch(Ee(Na,t),Ee(Bo,e),Ee(Ti,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?O0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=O0(t),e=Gx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Ti),Ee(Ti,e)}function Er(){tn(Ti),tn(Bo),tn(Na)}function fh(e){e.memoizedState!==null&&Ee(Ac,e);var t=Ti.current,n=Gx(t,e.type);t!==n&&(Ee(Bo,e),Ee(Ti,n))}function Cc(e){Bo.current===e&&(tn(Ti),tn(Bo)),Ac.current===e&&(tn(Ac),Zo._currentValue=hs)}var Gu,wm;function is(e){if(Gu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gu=t&&t[1]||"",wm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gu+e+wm}var Vu=!1;function Xu(e,t){if(!e||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var u=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){u=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){u=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?is(n):""}function yM(e,t){switch(e.tag){case 26:case 27:case 5:return is(e.type);case 16:return is("Lazy");case 13:return e.child!==t&&t!==null?is("Suspense Fallback"):is("Suspense");case 19:return is("SuspenseList");case 0:case 15:return Xu(e.type,!1);case 11:return Xu(e.type.render,!1);case 1:return Xu(e.type,!0);case 31:return is("Activity");default:return""}}function Dm(e){try{var t="",n=null;do t+=yM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var hh=Object.prototype.hasOwnProperty,tp=Ze.unstable_scheduleCallback,ku=Ze.unstable_cancelCallback,EM=Ze.unstable_shouldYield,bM=Ze.unstable_requestPaint,Bn=Ze.unstable_now,TM=Ze.unstable_getCurrentPriorityLevel,y_=Ze.unstable_ImmediatePriority,E_=Ze.unstable_UserBlockingPriority,wc=Ze.unstable_NormalPriority,AM=Ze.unstable_LowPriority,b_=Ze.unstable_IdlePriority,RM=Ze.log,CM=Ze.unstable_setDisableYieldValue,el=null,In=null;function Ra(e){if(typeof RM=="function"&&CM(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(el,e)}catch{}}var Fn=Math.clz32?Math.clz32:UM,wM=Math.log,DM=Math.LN2;function UM(e){return e>>>=0,e===0?32:31-(wM(e)/DM|0)|0}var vl=256,xl=262144,Sl=4194304;function as(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=as(i):(r&=o,r!==0?a=as(r):n||(n=o&~e,n!==0&&(a=as(n))))):(o=i&~s,o!==0?a=as(o):r!==0?a=as(r):n||(n=i&~e,n!==0&&(a=as(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function nl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function LM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T_(){var e=Sl;return Sl<<=1,!(Sl&62914560)&&(Sl=4194304),e}function Wu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function NM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Fn(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&A_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function A_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function R_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function C_(e,t){var n=t&-t;return n=n&42?1:ep(n),n&(e.suspendedLanes|t)?0:n}function ep(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function np(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function w_(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Jx(e.type))}function Um(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var ja=Math.random().toString(36).slice(2),nn="__reactFiber$"+ja,Rn="__reactProps$"+ja,Fr="__reactContainer$"+ja,dh="__reactEvents$"+ja,OM="__reactListeners$"+ja,PM="__reactHandles$"+ja,Lm="__reactResources$"+ja,al="__reactMarker$"+ja;function ip(e){delete e[nn],delete e[Rn],delete e[dh],delete e[OM],delete e[PM]}function ar(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=F0(e);e!==null;){if(n=e[nn])return n;e=F0(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[nn]||e[Fr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function mo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function pr(e){var t=e[Lm];return t||(t=e[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[al]=!0}var D_=new Set,U_={};function bs(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(U_[e]=t,e=0;e<t.length;e++)D_.add(t[e])}var zM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nm={},Om={};function BM(e){return hh.call(Om,e)?!0:hh.call(Nm,e)?!1:zM.test(e)?Om[e]=!0:(Nm[e]=!0,!1)}function sc(e,t,n){if(BM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ml(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Li(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ph(e){if(!e._valueTracker){var t=L_(e)?"checked":"value";e._valueTracker=IM(e,t,""+e[t])}}function N_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=L_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var FM=/[\n"\\]/g;function Qn(e){return e.replace(FM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?gh(e,r,qn(t)):n!=null?gh(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function O_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ph(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ph(e)}function gh(e,t,n){t==="number"&&Dc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function P_(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function z_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(po(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ph(e)}function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var HM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||HM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function B_(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Pm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Pm(e,s,t[s])}function ap(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(e){return VM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var _h=null;function sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,gr=null;function zm(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[Rn]||null;t:switch(e=t.stateNode,t.type){case"input":if(mh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Rn]||null;if(!a)throw Error(K(90));mh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&N_(i)}break t;case"textarea":P_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var Yu=!1;function I_(e,t,n){if(Yu)return e(t,n);Yu=!0;try{var i=e(t);return i}finally{if(Yu=!1,(sr!==null||gr!==null)&&(Du(),sr&&(t=sr,e=gr,gr=sr=null,zm(t),e)))for(t=0;t<e.length;t++)zm(e[t])}}function Io(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=!1;if(na)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){vh=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{vh=!1}var Ca=null,rp=null,oc=null;function F_(){if(oc)return oc;var e,t=rp,n=t.length,i,a="value"in Ca?Ca.value:Ca.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return oc=a.slice(e,1<i?1-i:void 0)}function lc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Bm(){return!1}function Cn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yl:Bm,this.isPropagationStopped=Bm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),t}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Cn(Ts),sl=Re({},Ts,{view:0,detail:0}),XM=Cn(sl),qu,Zu,Kr,Su=Re({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(qu=e.screenX-Kr.screenX,Zu=e.screenY-Kr.screenY):Zu=qu=0,Kr=e),qu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Im=Cn(Su),kM=Re({},Su,{dataTransfer:0}),WM=Cn(kM),YM=Re({},sl,{relatedTarget:0}),ju=Cn(YM),qM=Re({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),ZM=Cn(qM),jM=Re({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),KM=Cn(jM),QM=Re({},Ts,{data:0}),Fm=Cn(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function op(){return ey}var ny=Re({},sl,{key:function(e){if(e.key){var t=JM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$M[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(e){return e.type==="keypress"?lc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iy=Cn(ny),ay=Re({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Cn(ay),sy=Re({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),ry=Cn(sy),oy=Re({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Cn(oy),cy=Re({},Su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=Cn(cy),fy=Re({},Ts,{newState:0,oldState:0}),hy=Cn(fy),dy=[9,13,27,32],lp=na&&"CompositionEvent"in window,yo=null;na&&"documentMode"in document&&(yo=document.documentMode);var py=na&&"TextEvent"in window&&!yo,H_=na&&(!lp||yo&&8<yo&&11>=yo),Gm=" ",Vm=!1;function G_(e,t){switch(e){case"keyup":return dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function my(e,t){switch(e){case"compositionend":return V_(t);case"keypress":return t.which!==32?null:(Vm=!0,Gm);case"textInput":return e=t.data,e===Gm&&Vm?null:e;default:return null}}function gy(e,t){if(rr)return e==="compositionend"||!lp&&G_(e,t)?(e=F_(),oc=rp=Ca=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return H_&&t.locale!=="ko"?null:t.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_y[e.type]:t==="textarea"}function X_(e,t,n,i){sr?gr?gr.push(i):gr=[i]:sr=i,t=Zc(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Eo=null,Fo=null;function vy(e){Ix(e,0)}function Mu(e){var t=mo(e);if(N_(t))return e}function km(e,t){if(e==="change")return t}var k_=!1;if(na){var Ku;if(na){var Qu="oninput"in document;if(!Qu){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Qu=typeof Wm.oninput=="function"}Ku=Qu}else Ku=!1;k_=Ku&&(!document.documentMode||9<document.documentMode)}function Ym(){Eo&&(Eo.detachEvent("onpropertychange",W_),Fo=Eo=null)}function W_(e){if(e.propertyName==="value"&&Mu(Fo)){var t=[];X_(t,Fo,e,sp(e)),I_(vy,t)}}function xy(e,t,n){e==="focusin"?(Ym(),Eo=t,Fo=n,Eo.attachEvent("onpropertychange",W_)):e==="focusout"&&Ym()}function Sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mu(Fo)}function My(e,t){if(e==="click")return Mu(t)}function yy(e,t){if(e==="input"||e==="change")return Mu(t)}function Ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:Ey;function Ho(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!hh.call(t,a)||!Gn(e[a],t[a]))return!1}return!0}function qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zm(e,t){var n=qm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=qm(n)}}function Y_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Y_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function q_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dc(e.document)}return t}function cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var by=na&&"documentMode"in document&&11>=document.documentMode,or=null,xh=null,bo=null,Sh=!1;function jm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||or==null||or!==Dc(i)||(i=or,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Ho(bo,i)||(bo=i,i=Zc(xh,"onSelect"),0<i.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=or)))}function Ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Ju={},Z_={};na&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function As(e){if(Ju[e])return Ju[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Z_)return Ju[e]=t[n];return e}var j_=As("animationend"),K_=As("animationiteration"),Q_=As("animationstart"),Ty=As("transitionrun"),Ay=As("transitionstart"),Ry=As("transitioncancel"),J_=As("transitionend"),$_=new Map,Mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mh.push("scrollEnd");function pi(e,t){$_.set(e,t),bs(t,[e])}var Uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],cr=0,up=0;function yu(){for(var e=cr,t=up=cr=0;t<e;){var n=Wn[t];Wn[t++]=null;var i=Wn[t];Wn[t++]=null;var a=Wn[t];Wn[t++]=null;var s=Wn[t];if(Wn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&tv(n,a,s)}}function Eu(e,t,n,i){Wn[cr++]=e,Wn[cr++]=t,Wn[cr++]=n,Wn[cr++]=i,up|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fp(e,t,n,i){return Eu(e,t,n,i),Lc(e)}function Rs(e,t){return Eu(e,null,null,t),Lc(e)}function tv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Fn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Lc(e){if(50<No)throw No=0,Vh=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ur={};function Cy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new Cy(e,t,n,i)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ev(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")hp(e)&&(r=1);else if(typeof e=="string")r=NE(e,n,Ti.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case lh:return e=Pn(31,n,t,a),e.elementType=lh,e.lanes=s,e;case nr:return ds(n.children,a,s,t);case S_:r=8,a|=24;break;case sh:return e=Pn(12,n,t,a|2),e.elementType=sh,e.lanes=s,e;case rh:return e=Pn(13,n,t,a),e.elementType=rh,e.lanes=s,e;case oh:return e=Pn(19,n,t,a),e.elementType=oh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yi:r=10;break t;case M_:r=9;break t;case Jd:r=11;break t;case $d:r=14;break t;case Sa:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ds(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function $u(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function nv(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function tf(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Km=new WeakMap;function Jn(e,t){if(typeof e=="object"&&e!==null){var n=Km.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Dm(t)},Km.set(e,t),t)}return{value:e,source:t,stack:Dm(t)}}var fr=[],hr=0,Nc=null,Go=0,Zn=[],jn=0,Xa=null,Si=1,Mi="";function Xi(e,t){fr[hr++]=Go,fr[hr++]=Nc,Nc=e,Go=t}function iv(e,t,n){Zn[jn++]=Si,Zn[jn++]=Mi,Zn[jn++]=Xa,Xa=e;var i=Si;e=Mi;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Si=1<<32-Fn(t)+a|n<<a|i,Mi=s+e}else Si=1<<s|n<<a|i,Mi=e}function dp(e){e.return!==null&&(Xi(e,1),iv(e,1,0))}function pp(e){for(;e===Nc;)Nc=fr[--hr],fr[hr]=null,Go=fr[--hr],fr[hr]=null;for(;e===Xa;)Xa=Zn[--jn],Zn[jn]=null,Mi=Zn[--jn],Zn[jn]=null,Si=Zn[--jn],Zn[jn]=null}function av(e,t){Zn[jn++]=Si,Zn[jn++]=Mi,Zn[jn++]=Xa,Si=t.id,Mi=t.overflow,Xa=e}var an=null,Te=null,ee=!1,Oa=null,$n=!1,yh=Error(K(519));function ka(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Jn(t,e)),yh}function Qm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[nn]=e,t[Rn]=i,n){case"dialog":jt("cancel",t),jt("close",t);break;case"iframe":case"object":case"embed":jt("load",t);break;case"video":case"audio":for(n=0;n<Yo.length;n++)jt(Yo[n],t);break;case"source":jt("error",t);break;case"img":case"image":case"link":jt("error",t),jt("load",t);break;case"details":jt("toggle",t);break;case"input":jt("invalid",t),O_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":jt("invalid",t);break;case"textarea":jt("invalid",t),z_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Hx(t.textContent,n)?(i.popover!=null&&(jt("beforetoggle",t),jt("toggle",t)),i.onScroll!=null&&jt("scroll",t),i.onScrollEnd!=null&&jt("scrollend",t),i.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||ka(e,!0)}function Jm(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:an=an.return}}function Ns(e){if(e!==an)return!1;if(!ee)return Jm(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qh(e.type,e.memoizedProps)),n=!n),n&&Te&&ka(e),Jm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Te=I0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));Te=I0(e)}else t===27?(t=Te,Ka(e.type)?(e=Qh,Qh=null,Te=e):Te=t):Te=an?ii(e.stateNode.nextSibling):null;return!0}function _s(){Te=an=null,ee=!1}function ef(){var e=Oa;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Oa=null),e}function Vo(e){Oa===null?Oa=[e]:Oa.push(e)}var Eh=wi(null),Cs=null,Zi=null;function ya(e,t,n){Ee(Eh,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Eh.current,tn(Eh)}function bh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Th(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),bh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(K(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),bh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Gr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=a.type;Gn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Ac.current){if(r=a.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}a=a.return}e!==null&&Th(t,e,n,i),t.flags|=262144}function Oc(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){Cs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return sv(Cs,e)}function El(e,t){return Cs===null&&vs(e),sv(e,t)}function sv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(K(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var wy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Dy=Ze.unstable_scheduleCallback,Uy=Ze.unstable_NormalPriority,We={$$typeof:Yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new wy,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&Dy(Uy,function(){e.controller.abort()})}var To=null,Ah=0,Ar=0,_r=null;function Ly(e,t){if(To===null){var n=To=[];Ah=0,Ar=Hp(),_r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ah++,t.then($m,$m),t}function $m(){if(--Ah===0&&To!==null){_r!==null&&(_r.status="fulfilled");var e=To;To=null,Ar=0,_r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ny(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var t0=Lt.S;Lt.S=function(e,t){xx=Bn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ly(e,t),t0!==null&&t0(e,t)};var ps=wi(null);function gp(){var e=ps.current;return e!==null?e:Se.pooledCache}function uc(e,t){t===null?Ee(ps,ps.current):Ee(ps,t.pool)}function rv(){var e=gp();return e===null?null:{parent:We._currentValue,pool:e}}var Vr=Error(K(460)),_p=Error(K(474)),bu=Error(K(542)),Pc={then:function(){}};function e0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ov(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qi,qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e;default:if(typeof t.status=="string")t.then(qi,qi);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,i0(e),e}throw ms=t,Vr}}function ss(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ms=n,Vr):n}}var ms=null;function n0(){if(ms===null)throw Error(K(459));var e=ms;return ms=null,e}function i0(e){if(e===Vr||e===bu)throw Error(K(483))}var vr=null,Xo=0;function bl(e){var t=Xo;return Xo+=1,vr===null&&(vr=[]),ov(vr,e,t)}function Qr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tl(e,t){throw t.$$typeof===xM?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function lv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=Ki(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,M){return m===null||m.tag!==6?(m=$u(_,f.mode,M),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,M){var C=_.type;return C===nr?h(f,m,_.props.children,M,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sa&&ss(C)===m.type)?(m=a(m,_.props),Qr(m,_),m.return=f,m):(m=cc(_.type,_.key,_.props,null,f.mode,M),Qr(m,_),m.return=f,m)}function c(f,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=tf(_,f.mode,M),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function h(f,m,_,M,C){return m===null||m.tag!==7?(m=ds(_,f.mode,M,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function d(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=$u(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _l:return _=cc(m.type,m.key,m.props,null,f.mode,_),Qr(_,m),_.return=f,_;case ho:return m=tf(m,f.mode,_),m.return=f,m;case Sa:return m=ss(m),d(f,m,_)}if(po(m)||Zr(m))return m=ds(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return d(f,bl(m),_);if(m.$$typeof===Yi)return d(f,El(f,m),_);Tl(f,m)}return null}function u(f,m,_,M){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:return _.key===C?l(f,m,_,M):null;case ho:return _.key===C?c(f,m,_,M):null;case Sa:return _=ss(_),u(f,m,_,M)}if(po(_)||Zr(_))return C!==null?null:h(f,m,_,M,null);if(typeof _.then=="function")return u(f,m,bl(_),M);if(_.$$typeof===Yi)return u(f,m,El(f,_),M);Tl(f,_)}return null}function p(f,m,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return f=f.get(_)||null,o(m,f,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _l:return f=f.get(M.key===null?_:M.key)||null,l(m,f,M,C);case ho:return f=f.get(M.key===null?_:M.key)||null,c(m,f,M,C);case Sa:return M=ss(M),p(f,m,_,M,C)}if(po(M)||Zr(M))return f=f.get(_)||null,h(m,f,M,C,null);if(typeof M.then=="function")return p(f,m,_,bl(M),C);if(M.$$typeof===Yi)return p(f,m,_,El(m,M),C);Tl(m,M)}return null}function v(f,m,_,M){for(var C=null,b=null,R=m,x=m=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var U=u(f,R,_[x],M);if(U===null){R===null&&(R=A);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,x),b===null?C=U:b.sibling=U,b=U,R=A}if(x===_.length)return n(f,R),ee&&Xi(f,x),C;if(R===null){for(;x<_.length;x++)R=d(f,_[x],M),R!==null&&(m=s(R,m,x),b===null?C=R:b.sibling=R,b=R);return ee&&Xi(f,x),C}for(R=i(R);x<_.length;x++)A=p(R,f,x,_[x],M),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(w){return t(f,w)}),ee&&Xi(f,x),C}function E(f,m,_,M){if(_==null)throw Error(K(151));for(var C=null,b=null,R=m,x=m=0,A=null,U=_.next();R!==null&&!U.done;x++,U=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var w=u(f,R,U.value,M);if(w===null){R===null&&(R=A);break}e&&R&&w.alternate===null&&t(f,R),m=s(w,m,x),b===null?C=w:b.sibling=w,b=w,R=A}if(U.done)return n(f,R),ee&&Xi(f,x),C;if(R===null){for(;!U.done;x++,U=_.next())U=d(f,U.value,M),U!==null&&(m=s(U,m,x),b===null?C=U:b.sibling=U,b=U);return ee&&Xi(f,x),C}for(R=i(R);!U.done;x++,U=_.next())U=p(R,f,x,U.value,M),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?x:U.key),m=s(U,m,x),b===null?C=U:b.sibling=U,b=U);return e&&R.forEach(function(I){return t(f,I)}),ee&&Xi(f,x),C}function g(f,m,_,M){if(typeof _=="object"&&_!==null&&_.type===nr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===nr){if(m.tag===7){n(f,m.sibling),M=a(m,_.props.children),M.return=f,f=M;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sa&&ss(C)===m.type){n(f,m.sibling),M=a(m,_.props),Qr(M,_),M.return=f,f=M;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===nr?(M=ds(_.props.children,f.mode,M,_.key),M.return=f,f=M):(M=cc(_.type,_.key,_.props,null,f.mode,M),Qr(M,_),M.return=f,f=M)}return r(f);case ho:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),M=a(m,_.children||[]),M.return=f,f=M;break t}else{n(f,m);break}else t(f,m);m=m.sibling}M=tf(_,f.mode,M),M.return=f,f=M}return r(f);case Sa:return _=ss(_),g(f,m,_,M)}if(po(_))return v(f,m,_,M);if(Zr(_)){if(C=Zr(_),typeof C!="function")throw Error(K(150));return _=C.call(_),E(f,m,_,M)}if(typeof _.then=="function")return g(f,m,bl(_),M);if(_.$$typeof===Yi)return g(f,m,El(f,_),M);Tl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),M=a(m,_),M.return=f,f=M):(n(f,m),M=$u(_,f.mode,M),M.return=f,f=M),r(f)):n(f,m)}return function(f,m,_,M){try{Xo=0;var C=g(f,m,_,M);return vr=null,C}catch(R){if(R===Vr||R===bu)throw R;var b=Pn(29,R,null,f.mode);return b.lanes=M,b.return=f,b}finally{}}}var xs=lv(!0),cv=lv(!1),Ma=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Lc(e),tv(e,null,n),t}return Eu(e,i,t,n),Lc(e)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,R_(e,n)}}function nf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ch=!1;function Ro(){if(Ch){var e=_r;if(e!==null)throw e}}function Co(e,t,n,i){Ch=!1;var a=e.updateQueue;Ma=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Jt&u)===u:(i&u)===u){u!==0&&u===Ar&&(Ch=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(v=E.payload,typeof v=="function"){d=v.call(g,d,u);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(g,d,u):v,u==null)break t;d=Re({},d,u);break t;case 2:Ma=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Ya|=r,e.lanes=r,e.memoizedState=d}}function uv(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function fv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)uv(n[e],t)}var Rr=wi(null),zc=wi(0);function a0(e,t){e=ra,Ee(zc,e),Ee(Rr,t),ra=e|t.baseLanes}function wh(){Ee(zc,ra),Ee(Rr,Rr.current)}function xp(){ra=zc.current,tn(Rr),tn(zc)}var Vn=wi(null),ni=null;function Ea(e){var t=e.alternate;Ee(Fe,Fe.current&1),Ee(Vn,e),ni===null&&(t===null||Rr.current!==null||t.memoizedState!==null)&&(ni=e)}function Dh(e){Ee(Fe,Fe.current),Ee(Vn,e),ni===null&&(ni=e)}function hv(e){e.tag===22?(Ee(Fe,Fe.current),Ee(Vn,e),ni===null&&(ni=e)):ba()}function ba(){Ee(Fe,Fe.current),Ee(Vn,Vn.current)}function On(e){tn(Vn),ni===e&&(ni=null),tn(Fe)}var Fe=wi(0);function Bc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||jh(n)||Kh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Ft=null,_e=null,Xe=null,Ic=!1,xr=!1,Ss=!1,Fc=0,ko=0,Sr=null,Oy=0;function Le(){throw Error(K(321))}function Sp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Mp(e,t,n,i,a,s){return ia=s,Ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?Xv:Lp,Ss=!1,s=n(i,a),Ss=!1,xr&&(s=pv(t,n,i,a)),dv(e),s}function dv(e){Lt.H=Wo;var t=_e!==null&&_e.next!==null;if(ia=0,Xe=_e=Ft=null,Ic=!1,ko=0,Sr=null,t)throw Error(K(300));e===null||Ye||(e=e.dependencies,e!==null&&Oc(e)&&(Ye=!0))}function pv(e,t,n,i){Ft=e;var a=0;do{if(xr&&(Sr=null),ko=0,xr=!1,25<=a)throw Error(K(301));if(a+=1,Xe=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Lt.H=kv,s=t(n,i)}while(xr);return s}function Py(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?ol(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Ft.flags|=1024),t}function yp(){var e=Fc!==0;return Fc=0,e}function Ep(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bp(e){if(Ic){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ic=!1}ia=0,Xe=_e=Ft=null,xr=!1,ko=Fc=0,Sr=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(_e===null){var e=Ft.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Xe===null?Ft.memoizedState:Xe.next;if(t!==null)Xe=t,_e=e;else{if(e===null)throw Ft.alternate===null?Error(K(467)):Error(K(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Xe===null?Ft.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(e){var t=ko;return ko+=1,Sr===null&&(Sr=[]),e=ov(Sr,e,t),t=Ft,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?Xv:Lp),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ol(e);if(e.$$typeof===Yi)return sn(e)}throw Error(K(438,String(e)))}function Tp(e){var t=null,n=Ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ft.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tu(),Ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=SM;return t.index++,n}function aa(e,t){return typeof t=="function"?t(e):t}function fc(e){var t=Ge();return Ap(t,_e,e)}function Ap(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Jt&d)===d:(ia&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ar&&(h=!0);else if((ia&u)===u){c=c.next,u===Ar&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Ft.lanes|=u,Ya|=u;d=c.action,Ss&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Ft.lanes|=d,Ya|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Gn(s,e.memoizedState)&&(Ye=!0,h&&(n=_r,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function af(e){var t=Ge(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Gn(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function mv(e,t,n){var i=Ft,a=Ge(),s=ee;if(s){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!Gn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,Ye=!0),a=a.queue,Rp(vv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Cr(9,{destroy:void 0},_v.bind(null,i,a,n,t),null),Se===null)throw Error(K(349));s||ia&127||gv(i,t,n)}return n}function gv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ft.updateQueue,t===null?(t=Tu(),Ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _v(e,t,n,i){t.value=n,t.getSnapshot=i,xv(t)&&Sv(e)}function vv(e,t,n){return n(function(){xv(t)&&Sv(e)})}function xv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function Sv(e){var t=Rs(e,2);t!==null&&Tn(t,e,2)}function Uh(e){var t=vn();if(typeof e=="function"){var n=e;if(e=n(),Ss){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function Mv(e,t,n,i){return e.baseState=n,Ap(e,_e,typeof i=="function"?i:aa)}function zy(e,t,n,i,a){if(Cu(e))throw Error(K(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Lt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,yv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function yv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Lt.T,r={};Lt.T=r;try{var o=n(a,i),l=Lt.S;l!==null&&l(r,o),s0(e,t,o)}catch(c){Lh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Lt.T=s}}else try{s=n(a,i),s0(e,t,s)}catch(c){Lh(e,t,c)}}function s0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){r0(e,t,i)},function(i){return Lh(e,t,i)}):r0(e,t,n)}function r0(e,t,n){t.status="fulfilled",t.value=n,Ev(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,yv(e,n)))}function Lh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ev(t),t=t.next;while(t!==i)}e.action=null}function Ev(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bv(e,t){return t}function o0(e,t){if(ee){var n=Se.formState;if(n!==null){t:{var i=Ft;if(ee){if(Te){e:{for(var a=Te,s=$n;a.nodeType!==8;){if(!s){a=null;break e}if(a=ii(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Te=ii(a.nextSibling),i=a.data==="F!";break t}}ka(i)}i=!1}i&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bv,lastRenderedState:t},n.queue=i,n=Hv.bind(null,Ft,i),i.dispatch=n,i=Uh(!1),s=Up.bind(null,Ft,!1,i.queue),i=vn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=zy.bind(null,Ft,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function l0(e){var t=Ge();return Tv(t,_e,e)}function Tv(e,t,n){if(t=Ap(e,t,bv)[0],e=fc(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ol(t)}catch(r){throw r===Vr?bu:r}else i=t;t=Ge();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Ft.flags|=2048,Cr(9,{destroy:void 0},By.bind(null,a,n),null)),[i,s,e]}function By(e,t){e.action=t}function c0(e){var t=Ge(),n=_e;if(n!==null)return Tv(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Cr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ft.updateQueue,t===null&&(t=Tu(),Ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Av(){return Ge().memoizedState}function hc(e,t,n,i){var a=vn();Ft.flags|=e,a.memoizedState=Cr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ru(e,t,n,i){var a=Ge();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&Sp(i,_e.memoizedState.deps)?a.memoizedState=Cr(t,s,n,i):(Ft.flags|=e,a.memoizedState=Cr(1|t,s,n,i))}function u0(e,t){hc(8390656,8,e,t)}function Rp(e,t){Ru(2048,8,e,t)}function Iy(e){Ft.flags|=4;var t=Ft.updateQueue;if(t===null)t=Tu(),Ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rv(e){var t=Ge().memoizedState;return Iy({ref:t,nextImpl:e}),function(){if(se&2)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function Cv(e,t){return Ru(4,2,e,t)}function wv(e,t){return Ru(4,4,e,t)}function Dv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uv(e,t,n){n=n!=null?n.concat([e]):null,Ru(4,4,Dv.bind(null,t,e),n)}function Cp(){}function Lv(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Nv(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sp(t,i[1]))return i[0];if(i=e(),Ss){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i}function wp(e,t,n){return n===void 0||ia&1073741824&&!(Jt&261930)?e.memoizedState=t:(e.memoizedState=n,e=Mx(),Ft.lanes|=e,Ya|=e,n)}function Ov(e,t,n,i){return Gn(n,t)?n:Rr.current!==null?(e=wp(e,n,i),Gn(e,t)||(Ye=!0),e):!(ia&42)||ia&1073741824&&!(Jt&261930)?(Ye=!0,e.memoizedState=n):(e=Mx(),Ft.lanes|=e,Ya|=e,t)}function Pv(e,t,n,i,a){var s=re.p;re.p=s!==0&&8>s?s:8;var r=Lt.T,o={};Lt.T=o,Up(e,!1,t,n);try{var l=a(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Ny(l,i);wo(e,t,h,Hn(e))}else wo(e,t,i,Hn(e))}catch(d){wo(e,t,{then:function(){},status:"rejected",reason:d},Hn())}finally{re.p=s,r!==null&&o.types!==null&&(r.types=o.types),Lt.T=r}}function Fy(){}function Nh(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=zv(e).queue;Pv(e,a,t,hs,n===null?Fy:function(){return Bv(e),n(i)})}function zv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:hs,baseState:hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:hs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bv(e){var t=zv(e);t.next===null&&(t=e.alternate.memoizedState),wo(e,t.next.queue,{},Hn())}function Dp(){return sn(Zo)}function Iv(){return Ge().memoizedState}function Fv(){return Ge().memoizedState}function Hy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=Pa(n);var i=za(t,e,n);i!==null&&(Tn(i,t,n),Ao(i,t,n)),t={cache:mp()},e.payload=t;return}t=t.return}}function Gy(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e)?Gv(t,n):(n=fp(e,t,n,i),n!==null&&(Tn(n,e,i),Vv(n,t,i)))}function Hv(e,t,n){var i=Hn();wo(e,t,n,i)}function wo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Gv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Gn(o,r))return Eu(e,t,a,0),Se===null&&yu(),!1}catch{}finally{}if(n=fp(e,t,a,i),n!==null)return Tn(n,e,i),Vv(n,t,i),!0}return!1}function Up(e,t,n,i){if(i={lane:2,revertLane:Hp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(t)throw Error(K(479))}else t=fp(e,n,i,2),t!==null&&Tn(t,e,2)}function Cu(e){var t=e.alternate;return e===Ft||t!==null&&t===Ft}function Gv(e,t){xr=Ic=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,R_(e,n)}}var Wo={readContext:sn,use:Au,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Wo.useEffectEvent=Le;var Xv={readContext:sn,use:Au,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:u0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hc(4194308,4,Dv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hc(4194308,4,e,t)},useInsertionEffect:function(e,t){hc(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var i=e();if(Ss){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vn();if(n!==void 0){var a=n(t);if(Ss){Ra(!0);try{n(t)}finally{Ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Gy.bind(null,Ft,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=Uh(e);var t=e.queue,n=Hv.bind(null,Ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cp,useDeferredValue:function(e,t){var n=vn();return wp(n,e,t)},useTransition:function(){var e=Uh(!1);return e=Pv.bind(null,Ft,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ft,a=vn();if(ee){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),Se===null)throw Error(K(349));Jt&127||gv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,u0(vv.bind(null,i,s,e),[e]),i.flags|=2048,Cr(9,{destroy:void 0},_v.bind(null,i,s,n,t),null),n},useId:function(){var e=vn(),t=Se.identifierPrefix;if(ee){var n=Mi,i=Si;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Oy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dp,useFormState:o0,useActionState:o0,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Up.bind(null,Ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tp,useCacheRefresh:function(){return vn().memoizedState=Hy.bind(null,Ft)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if(se&2)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},Lp={readContext:sn,use:Au,useCallback:Lv,useContext:sn,useEffect:Rp,useImperativeHandle:Uv,useInsertionEffect:Cv,useLayoutEffect:wv,useMemo:Nv,useReducer:fc,useRef:Av,useState:function(){return fc(aa)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=Ge();return Ov(n,_e.memoizedState,e,t)},useTransition:function(){var e=fc(aa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:mv,useId:Iv,useHostTransitionStatus:Dp,useFormState:l0,useActionState:l0,useOptimistic:function(e,t){var n=Ge();return Mv(n,_e,e,t)},useMemoCache:Tp,useCacheRefresh:Fv};Lp.useEffectEvent=Rv;var kv={readContext:sn,use:Au,useCallback:Lv,useContext:sn,useEffect:Rp,useImperativeHandle:Uv,useInsertionEffect:Cv,useLayoutEffect:wv,useMemo:Nv,useReducer:af,useRef:Av,useState:function(){return af(aa)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=Ge();return _e===null?wp(n,e,t):Ov(n,_e.memoizedState,e,t)},useTransition:function(){var e=af(aa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ol(e),t]},useSyncExternalStore:mv,useId:Iv,useHostTransitionStatus:Dp,useFormState:c0,useActionState:c0,useOptimistic:function(e,t){var n=Ge();return _e!==null?Mv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tp,useCacheRefresh:Fv};kv.useEffectEvent=Rv;function sf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),a=Pa(i);a.payload=t,n!=null&&(a.callback=n),t=za(e,a,i),t!==null&&(Tn(t,e,i),Ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),a=Pa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=za(e,a,i),t!==null&&(Tn(t,e,i),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=Pa(n);i.tag=2,t!=null&&(i.callback=t),t=za(e,i,n),t!==null&&(Tn(t,e,n),Ao(t,e,n))}};function f0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,i)||!Ho(a,s):!0}function h0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Oh.enqueueReplaceState(t,t.state,null)}function Ms(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Wv(e){Uc(e)}function Yv(e){console.error(e)}function qv(e){Uc(e)}function Hc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function d0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ph(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Hc(e,t)},n}function Zv(e){return e=Pa(e),e.tag=3,e}function jv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){d0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){d0(t,n,i),typeof a!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Vy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Gr(t,n,a,!0),n=Vn.current,n!==null){switch(n.tag){case 31:case 13:return ni===null?Wc():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Pc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),gf(e,i,a)),!1;case 22:return n.flags|=65536,i===Pc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),gf(e,i,a)),!1}throw Error(K(435,n.tag))}return gf(e,i,a),Wc(),!1}if(ee)return t=Vn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==yh&&(e=Error(K(422),{cause:i}),Vo(Jn(e,n)))):(i!==yh&&(t=Error(K(423),{cause:i}),Vo(Jn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Jn(i,n),a=Ph(e.stateNode,i,a),nf(e,a),Ne!==4&&(Ne=2)),!1;var s=Error(K(520),{cause:i});if(s=Jn(s,n),Lo===null?Lo=[s]:Lo.push(s),Ne!==4&&(Ne=2),t===null)return!0;i=Jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ph(n.stateNode,i,e),nf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zv(a),jv(a,e,n,i),nf(n,a),!1}n=n.return}while(n!==null);return!1}var Np=Error(K(461)),Ye=!1;function en(e,t,n,i){t.child=e===null?cv(t,null,n,i):xs(t,e.child,n,i)}function p0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return vs(t),i=Mp(e,t,n,r,s,a),o=yp(),e!==null&&!Ye?(Ep(e,t,a),sa(e,t,a)):(ee&&o&&dp(t),t.flags|=1,en(e,t,i,a),t.child)}function m0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Kv(e,t,s,i,a)):(e=cc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Op(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(r,i)&&e.ref===t.ref)return sa(e,t,a)}return t.flags|=1,e=Ki(s,i),e.ref=t.ref,e.return=t,t.child=e}function Kv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Ho(s,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=s,Op(e,a))e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,sa(e,t,a)}return zh(e,t,n,i,a)}function Qv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return g0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&uc(t,s!==null?s.cachePool:null),s!==null?a0(t,s):wh(),hv(t);else return i=t.lanes=536870912,g0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(uc(t,s.cachePool),a0(t,s),ba(),t.memoizedState=null):(e!==null&&uc(t,null),wh(),ba());return en(e,t,a,n),t.child}function go(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function g0(e,t,n,i,a){var s=gp();return s=s===null?null:{parent:We._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&uc(t,null),wh(),hv(t),e!==null&&Gr(e,t,i,!0),t.childLanes=a,null}function dc(e,t){return t=Gc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _0(e,t,n){return xs(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,On(t),t.memoizedState=null,e}function Xy(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=dc(t,i),t.lanes=536870912,go(null,e);if(Dh(t),(e=Te)?(e=Xx(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=nv(e),n.return=t,t.child=n,an=t,Te=null)):e=null,e===null)throw ka(t);return t.lanes=536870912,null}return dc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Dh(t),a)if(t.flags&256)t.flags&=-257,t=_0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(Ye||Gr(e,t,n,!1),a=(n&e.childLanes)!==0,Ye||a){if(i=Se,i!==null&&(r=C_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Rs(e,r),Tn(i,e,r),Np;Wc(),t=_0(e,t,n)}else e=s.treeContext,Te=ii(r.nextSibling),an=t,ee=!0,Oa=null,$n=!1,e!==null&&av(t,e),t=dc(t,i),t.flags|=4096;return t}return e=Ki(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zh(e,t,n,i,a){return vs(t),n=Mp(e,t,n,i,void 0,a),i=yp(),e!==null&&!Ye?(Ep(e,t,a),sa(e,t,a)):(ee&&i&&dp(t),t.flags|=1,en(e,t,n,a),t.child)}function v0(e,t,n,i,a,s){return vs(t),t.updateQueue=null,n=pv(t,i,n,a),dv(e),i=yp(),e!==null&&!Ye?(Ep(e,t,s),sa(e,t,s)):(ee&&i&&dp(t),t.flags|=1,en(e,t,n,s),t.child)}function x0(e,t,n,i,a){if(vs(t),t.stateNode===null){var s=ur,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Oh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},vp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):ur,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(sf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Oh.enqueueReplaceState(s,s.state,null),Co(t,i,s,a),Ro(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ms(n,o);s.props=l;var c=s.context,h=n.contextType;r=ur,typeof h=="object"&&h!==null&&(r=sn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&h0(t,s,i,r),Ma=!1;var u=t.memoizedState;s.state=u,Co(t,i,s,a),Ro(),c=t.memoizedState,o||u!==c||Ma?(typeof d=="function"&&(sf(t,n,d,i),c=t.memoizedState),(l=Ma||f0(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Rh(e,t),r=t.memoizedProps,h=Ms(n,r),s.props=h,d=t.pendingProps,u=s.context,c=n.contextType,l=ur,typeof c=="object"&&c!==null&&(l=sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||u!==l)&&h0(t,s,i,l),Ma=!1,u=t.memoizedState,s.state=u,Co(t,i,s,a),Ro();var p=t.memoizedState;r!==d||u!==p||Ma||e!==null&&e.dependencies!==null&&Oc(e.dependencies)?(typeof o=="function"&&(sf(t,n,o,i),p=t.memoizedState),(h=Ma||f0(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&Oc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,pc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=xs(t,e.child,null,a),t.child=xs(t,null,n,a)):en(e,t,n,a),t.memoizedState=s.state,e=t.child):e=sa(e,t,a),e}function S0(e,t,n,i){return _s(),t.flags|=256,en(e,t,n,i),t.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:rv()}}function lf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zn),e}function Jv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(a?Ea(t):ba(),(e=Te)?(e=Xx(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},n=nv(e),n.return=t,t.child=n,an=t,Te=null)):e=null,e===null)throw ka(t);return Kh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(ba(),a=t.mode,o=Gc({mode:"hidden",children:o},a),i=ds(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,go(null,i)):(Ea(t),Bh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ea(t),t.flags&=-257,t=cf(e,t,n)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),o=i.fallback,a=t.mode,i=Gc({mode:"visible",children:i.children},a),o=ds(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,xs(t,e.child,null,n),i=t.child,i.memoizedState=of(n),i.childLanes=lf(e,r,n),t.memoizedState=rf,t=go(null,i));else if(Ea(t),Kh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,Vo({value:i,source:null,stack:null}),t=cf(e,t,n)}else if(Ye||Gr(e,t,n,!1),r=(n&e.childLanes)!==0,Ye||r){if(r=Se,r!==null&&(i=C_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Rs(e,i),Tn(r,e,i),Np;jh(o)||Wc(),t=cf(e,t,n)}else jh(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=ii(o.nextSibling),an=t,ee=!0,Oa=null,$n=!1,e!==null&&av(t,e),t=Bh(t,i.children),t.flags|=4096);return t}return a?(ba(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Ki(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Ki(c,o):(o=ds(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,go(null,i),i=t.child,o=e.child.memoizedState,o===null?o=of(n):(a=o.cachePool,a!==null?(l=We._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=rv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=lf(e,r,n),t.memoizedState=rf,go(e.child,i)):(Ea(t),n=e.child,e=n.sibling,n=Ki(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Bh(e,t){return t=Gc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gc(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function cf(e,t,n){return xs(t,e.child,null,n),e=Bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bh(e.return,t,n)}function uf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function $v(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Fe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Fe,r),en(e,t,i,n),i=ee?Go:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,n,t);else if(e.tag===19)M0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Bc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),uf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Bc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}uf(t,!0,n,null,s,i);break;case"together":uf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function sa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,!(n&t.childLanes))if(e!==null){if(Gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Oc(e)))}function ky(e,t,n){switch(t.tag){case 3:Rc(t,t.stateNode.containerInfo),ya(t,We,e.memoizedState.cache),_s();break;case 27:case 5:fh(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ea(t),t.flags|=128,null):n&t.child.childLanes?Jv(e,t,n):(Ea(t),e=sa(e,t,n),e!==null?e.sibling:null);Ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Gr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return $v(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Fe,Fe.current),i)break;return null;case 22:return t.lanes=0,Qv(e,t,n,t.pendingProps);case 24:ya(t,We,e.memoizedState.cache)}return sa(e,t,n)}function tx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Op(e,n)&&!(t.flags&128))return Ye=!1,ky(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,ee&&t.flags&1048576&&iv(t,Go,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ss(t.elementType),t.type=e,typeof e=="function")hp(e)?(i=Ms(e,i),t.tag=1,t=x0(null,t,e,i,n)):(t.tag=0,t=zh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Jd){t.tag=11,t=p0(null,t,e,i,n);break t}else if(a===$d){t.tag=14,t=m0(null,t,e,i,n);break t}}throw t=ch(e)||e,Error(K(306,t,""))}}return t;case 0:return zh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ms(i,t.pendingProps),x0(e,t,i,a,n);case 3:t:{if(Rc(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Rh(e,t),Co(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ya(t,We,i),i!==s.cache&&Th(t,[We],n,!0),Ro(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=S0(e,t,i,n);break t}else if(i!==a){a=Jn(Error(K(424)),t),Vo(a),t=S0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=ii(e.firstChild),an=t,ee=!0,Oa=null,$n=!0,n=cv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_s(),i===a){t=sa(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=G0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(n=t.type,e=t.pendingProps,i=jc(Na.current).createElement(n),i[nn]=t,i[Rn]=e,on(i,n,e),$e(i),t.stateNode=i):t.memoizedState=G0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fh(t),e===null&&ee&&(i=t.stateNode=kx(t.type,t.pendingProps,Na.current),an=t,$n=!0,a=Te,Ka(t.type)?(Qh=a,Te=ii(i.firstChild)):Te=a),en(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((a=i=Te)&&(i=SE(i,t.type,t.pendingProps,$n),i!==null?(t.stateNode=i,an=t,Te=ii(i.firstChild),$n=!1,a=!0):a=!1),a||ka(t)),fh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,qh(a,s)?i=null:r!==null&&qh(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Mp(e,t,Py,null,null,n),Zo._currentValue=a),pc(e,t),en(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Te)&&(n=ME(n,t.pendingProps,$n),n!==null?(t.stateNode=n,an=t,Te=null,e=!0):e=!1),e||ka(t)),null;case 13:return Jv(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xs(t,null,i,n):en(e,t,i,n),t.child;case 11:return p0(e,t,t.type,t.pendingProps,n);case 7:return en(e,t,t.pendingProps,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ya(t,t.type,i.value),en(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,vs(t),a=sn(a),i=i(a),t.flags|=1,en(e,t,i,n),t.child;case 14:return m0(e,t,t.type,t.pendingProps,n);case 15:return Kv(e,t,t.type,t.pendingProps,n);case 19:return $v(e,t,n);case 31:return Xy(e,t,n);case 22:return Qv(e,t,n,t.pendingProps);case 24:return vs(t),i=sn(We),e===null?(a=gp(),a===null&&(a=Se,s=mp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},vp(t),ya(t,We,a)):(e.lanes&n&&(Rh(e,t),Co(t,null,null,n),Ro()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ya(t,We,i)):(i=s.cache,ya(t,We,i),i!==a.cache&&Th(t,[We],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function Ni(e){e.flags|=4}function ff(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(bx())e.flags|=8192;else throw ms=Pc,_p}else e.flags&=-16777217}function y0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!qx(t))if(bx())e.flags|=8192;else throw ms=Pc,_p}function Al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?T_():536870912,e.lanes|=t,wr|=t)}function Jr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Wy(e,t,n){var i=t.pendingProps;switch(pp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Qi(We),Er(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ns(t)?Ni(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ef())),be(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Ni(t),s!==null?(be(t),y0(t,s)):(be(t),ff(t,a,null,i,n))):s?s!==e.memoizedState?(Ni(t),be(t),y0(t,s)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ni(t),be(t),ff(t,a,e,i,n)),null;case 27:if(Cc(t),n=Na.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return be(t),null}e=Ti.current,Ns(t)?Qm(t):(e=kx(a,i,n),t.stateNode=e,Ni(t))}return be(t),null;case 5:if(Cc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return be(t),null}if(s=Ti.current,Ns(t))Qm(t);else{var r=jc(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=t,s[Rn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(on(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ni(t)}}return be(t),ff(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ni(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Na.current,Ns(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[nn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Hx(e.nodeValue,n)),e||ka(t,!0)}else e=jc(e).createTextNode(i),e[nn]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ns(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[nn]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(On(t),t):(On(t),null);if(t.flags&128)throw Error(K(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ns(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[nn]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(On(t),t):(On(t),null)}return On(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Al(t,t.updateQueue),be(t),null);case 4:return Er(),e===null&&Gp(t.stateNode.containerInfo),be(t),null;case 10:return Qi(t.type),be(t),null;case 19:if(tn(Fe),i=t.memoizedState,i===null)return be(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Jr(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bc(e),s!==null){for(t.flags|=128,Jr(i,!1),e=s.updateQueue,t.updateQueue=e,Al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ev(n,e),n=n.sibling;return Ee(Fe,Fe.current&1|2),ee&&Xi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bn()>Xc&&(t.flags|=128,a=!0,Jr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Bc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Al(t,e),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ee)return be(t),null}else 2*Bn()-i.renderingStartTime>Xc&&n!==536870912&&(t.flags|=128,a=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bn(),e.sibling=null,n=Fe.current,Ee(Fe,a?n&1|2:n&1),ee&&Xi(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return On(t),xp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&Al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(ps),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(We),be(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function Yy(e,t){switch(pp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(We),Er(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cc(t),null;case 31:if(t.memoizedState!==null){if(On(t),t.alternate===null)throw Error(K(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(On(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(Fe),null;case 4:return Er(),null;case 10:return Qi(t.type),null;case 22:case 23:return On(t),xp(),e!==null&&tn(ps),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(We),null;case 25:return null;default:return null}}function ex(e,t){switch(pp(t),t.tag){case 3:Qi(We),Er();break;case 26:case 27:case 5:Cc(t);break;case 4:Er();break;case 31:t.memoizedState!==null&&On(t);break;case 13:On(t);break;case 19:tn(Fe);break;case 10:Qi(t.type);break;case 22:case 23:On(t),xp(),e!==null&&tn(ps);break;case 24:Qi(We)}}function ll(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){he(t,t.return,o)}}function Wa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){he(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){he(t,t.return,h)}}function nx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fv(t,n)}catch(i){he(e,e.return,i)}}}function ix(e,t,n){n.props=Ms(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function Do(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){he(e,t,a)}}function yi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){he(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){he(e,t,a)}else n.current=null}function ax(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){he(e,e.return,a)}}function hf(e,t,n){try{var i=e.stateNode;pE(i,e.type,n,t),i[Rn]=t}catch(a){he(e,e.return,a)}}function sx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ih(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(i===27&&Ka(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ih(e,t,n),e=e.sibling;e!==null;)Ih(e,t,n),e=e.sibling}function Vc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ka(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function rx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);on(t,i,n),t[nn]=e,t[Rn]=n}catch(s){he(e,e.return,s)}}var ki=!1,ke=!1,pf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,Je=null;function qy(e,t){if(e=e.containerInfo,Wh=$c,e=q_(e),cp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,u=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:e,selectionRange:n},$c=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Ms(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){he(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Zh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function ox(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n),i&4&&ll(5,n);break;case 1:if(Pi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){he(n,n.return,r)}else{var a=Ms(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){he(n,n.return,r)}}i&64&&nx(n),i&512&&Do(n,n.return);break;case 3:if(Pi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fv(e,t)}catch(r){he(n,n.return,r)}}break;case 27:t===null&&i&4&&rx(n);case 26:case 5:Pi(e,n),t===null&&i&4&&ax(n),i&512&&Do(n,n.return);break;case 12:Pi(e,n);break;case 31:Pi(e,n),i&4&&ux(e,n);break;case 13:Pi(e,n),i&4&&fx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nE.bind(null,n),yE(e,n))));break;case 22:if(i=n.memoizedState!==null||ki,!i){t=t!==null&&t.memoizedState!==null||ke,a=ki;var s=ke;ki=i,(ke=t)&&!s?Gi(e,n,(n.subtreeFlags&8772)!==0):Pi(e,n),ki=a,ke=s}break;case 30:break;default:Pi(e,n)}}function lx(e){var t=e.alternate;t!==null&&(e.alternate=null,lx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ip(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,En=!1;function Oi(e,t,n){for(n=n.child;n!==null;)cx(e,t,n),n=n.sibling}function cx(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 26:ke||yi(n,t),Oi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||yi(n,t);var i=Ce,a=En;Ka(n.type)&&(Ce=n.stateNode,En=!1),Oi(e,t,n),Oo(n.stateNode),Ce=i,En=a;break;case 5:ke||yi(n,t);case 6:if(i=Ce,a=En,Ce=null,Oi(e,t,n),Ce=i,En=a,Ce!==null)if(En)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(s){he(n,t,s)}else try{Ce.removeChild(n.stateNode)}catch(s){he(n,t,s)}break;case 18:Ce!==null&&(En?(e=Ce,z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Nr(e)):z0(Ce,n.stateNode));break;case 4:i=Ce,a=En,Ce=n.stateNode.containerInfo,En=!0,Oi(e,t,n),Ce=i,En=a;break;case 0:case 11:case 14:case 15:Wa(2,n,t),ke||Wa(4,n,t),Oi(e,t,n);break;case 1:ke||(yi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ix(n,t,i)),Oi(e,t,n);break;case 21:Oi(e,t,n);break;case 22:ke=(i=ke)||n.memoizedState!==null,Oi(e,t,n),ke=i;break;default:Oi(e,t,n)}}function ux(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nr(e)}catch(n){he(t,t.return,n)}}}function fx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nr(e)}catch(n){he(t,t.return,n)}}function Zy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new E0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new E0),t;default:throw Error(K(435,e.tag))}}function Rl(e,t){var n=Zy(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=iE.bind(null,e,i);i.then(a,a)}})}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ka(o.type)){Ce=o.stateNode,En=!1;break t}break;case 5:Ce=o.stateNode,En=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,En=!0;break t}o=o.return}if(Ce===null)throw Error(K(160));cx(s,r,a),Ce=null,En=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}var ui=null;function hx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mn(t,e),yn(e),i&4&&(Wa(3,e,e.return),ll(3,e),Wa(5,e,e.return));break;case 1:Mn(t,e),yn(e),i&512&&(ke||n===null||yi(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ui;if(Mn(t,e),yn(e),i&512&&(ke||n===null||yi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[al]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),on(s,i,n),s[nn]=e,$e(s),i=s;break t;case"link":var r=X0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;case"meta":if(r=X0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),on(s,i,n),a.head.appendChild(s);break;default:throw Error(K(468,i))}s[nn]=e,$e(s),i=s}e.stateNode=i}else k0(a,e.type,e.stateNode);else e.stateNode=V0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?k0(a,e.type,e.stateNode):V0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hf(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mn(t,e),yn(e),i&512&&(ke||n===null||yi(n,n.return)),n!==null&&i&4&&hf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mn(t,e),yn(e),i&512&&(ke||n===null||yi(n,n.return)),e.flags&32){a=e.stateNode;try{Tr(a,"")}catch(v){he(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,hf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(pf=!0);break;case 6:if(Mn(t,e),yn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){he(e,e.return,v)}}break;case 3:if(_c=null,a=ui,ui=Kc(t.containerInfo),Mn(t,e),ui=a,yn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(v){he(e,e.return,v)}pf&&(pf=!1,dx(e));break;case 4:i=ui,ui=Kc(e.stateNode.containerInfo),Mn(t,e),yn(e),ui=i;break;case 12:Mn(t,e),yn(e);break;case 31:Mn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 13:Mn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wu=Bn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ki,h=ke;if(ki=c||a,ke=h||l,Mn(t,e),ke=h,ki=c,yn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ki||ke||rs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){he(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){he(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?B0(p,!0):B0(l.stateNode,!1)}catch(v){he(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rl(e,n))));break;case 19:Mn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 30:break;case 21:break;default:Mn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sx(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,s=df(e);Vc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Tr(r,""),n.flags&=-33);var o=df(e);Vc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=df(e);Ih(e,c,l);break;default:throw Error(K(161))}}catch(h){he(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ox(e,t.alternate,t),t=t.sibling}function rs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wa(4,t,t.return),rs(t);break;case 1:yi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ix(t,t.return,n),rs(t);break;case 27:Oo(t.stateNode);case 26:case 5:yi(t,t.return),rs(t);break;case 22:t.memoizedState===null&&rs(t);break;case 30:rs(t);break;default:rs(t)}e=e.sibling}}function Gi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(a,s,n),ll(4,s);break;case 1:if(Gi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){he(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)uv(l[a],o)}catch(c){he(i,i.return,c)}}n&&r&64&&nx(s),Do(s,s.return);break;case 27:rx(s);case 26:case 5:Gi(a,s,n),n&&i===null&&r&4&&ax(s),Do(s,s.return);break;case 12:Gi(a,s,n);break;case 31:Gi(a,s,n),n&&r&4&&ux(a,s);break;case 13:Gi(a,s,n),n&&r&4&&fx(a,s);break;case 22:s.memoizedState===null&&Gi(a,s,n),Do(s,s.return);break;case 30:break;default:Gi(a,s,n)}t=t.sibling}}function Pp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&rl(n))}function zp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function ri(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)px(e,t,n,i),t=t.sibling}function px(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ri(e,t,n,i),a&2048&&ll(9,t);break;case 1:ri(e,t,n,i);break;case 3:ri(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(a&2048){ri(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ri(e,t,n,i);break;case 31:ri(e,t,n,i);break;case 13:ri(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ri(e,t,n,i):Uo(e,t):s._visibility&2?ri(e,t,n,i):(s._visibility|=2,tr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Pp(r,t);break;case 24:ri(e,t,n,i),a&2048&&zp(t.alternate,t);break;default:ri(e,t,n,i)}}function tr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:tr(s,r,o,l,a),ll(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?tr(s,r,o,l,a):Uo(s,r):(h._visibility|=2,tr(s,r,o,l,a)),a&&c&2048&&Pp(r.alternate,r);break;case 24:tr(s,r,o,l,a),a&&c&2048&&zp(r.alternate,r);break;default:tr(s,r,o,l,a)}t=t.sibling}}function Uo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Uo(n,i),a&2048&&Pp(i.alternate,i);break;case 24:Uo(n,i),a&2048&&zp(i.alternate,i);break;default:Uo(n,i)}t=t.sibling}}var _o=8192;function Os(e,t,n){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)mx(e,t,n),e=e.sibling}function mx(e,t,n){switch(e.tag){case 26:Os(e,t,n),e.flags&_o&&e.memoizedState!==null&&OE(n,ui,e.memoizedState,e.memoizedProps);break;case 5:Os(e,t,n);break;case 3:case 4:var i=ui;ui=Kc(e.stateNode.containerInfo),Os(e,t,n),ui=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=_o,_o=16777216,Os(e,t,n),_o=i):Os(e,t,n));break;default:Os(e,t,n)}}function gx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $r(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,vx(i,e)}gx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_x(e),e=e.sibling}function _x(e){switch(e.tag){case 0:case 11:case 15:$r(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:$r(e);break;case 12:$r(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mc(e)):$r(e);break;default:$r(e)}}function mc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,vx(i,e)}gx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wa(8,t,t.return),mc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mc(t));break;default:mc(t)}e=e.sibling}}function vx(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:Wa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var a=i.sibling,s=i.return;if(lx(i),i===n){Je=null;break t}if(a!==null){a.return=s,Je=a;break t}Je=s}}}var jy={getCacheForType:function(e){var t=sn(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(We).controller.signal}},Ky=typeof WeakMap=="function"?WeakMap:Map,se=0,Se=null,Kt=null,Jt=0,ue=0,Nn=null,wa=!1,Xr=!1,Bp=!1,ra=0,Ne=0,Ya=0,gs=0,Ip=0,zn=0,wr=0,Lo=null,bn=null,Fh=!1,wu=0,xx=0,Xc=1/0,kc=null,Ba=null,qe=0,Ia=null,Dr=null,Ji=0,Hh=0,Gh=null,Sx=null,No=0,Vh=null;function Hn(){return se&2&&Jt!==0?Jt&-Jt:Lt.T!==null?Hp():w_()}function Mx(){if(zn===0)if(!(Jt&536870912)||ee){var e=xl;xl<<=1,!(xl&3932160)&&(xl=262144),zn=e}else zn=536870912;return e=Vn.current,e!==null&&(e.flags|=32),zn}function Tn(e,t,n){(e===Se&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Ur(e,0),Da(e,Jt,zn,!1)),il(e,n),(!(se&2)||e!==Se)&&(e===Se&&(!(se&2)&&(gs|=n),Ne===4&&Da(e,Jt,zn,!1)),Di(e))}function yx(e,t,n){if(se&6)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||nl(e,t),a=i?$y(e,t):mf(e,t,!0),s=i;do{if(a===0){Xr&&!i&&Da(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Qy(n)){a=mf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Lo;var l=o.current.memoizedState.isDehydrated;if(l&&(Ur(o,r).flags|=256),r=mf(o,r,!1),r!==2){if(Bp&&!l){o.errorRecoveryDisabledLanes|=s,gs|=s,a=4;break t}s=bn,bn=a,s!==null&&(bn===null?bn=s:bn.push.apply(bn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Ur(e,0),Da(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:Da(i,t,zn,!wa);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(a=wu+300-Bn(),10<a)){if(Da(i,t,zn,!wa),vu(i,0,!0)!==0)break t;Ji=t,i.timeoutHandle=Vx(b0.bind(null,i,n,bn,kc,Fh,t,zn,gs,wr,wa,s,"Throttled",-0,0),a);break t}b0(i,n,bn,kc,Fh,t,zn,gs,wr,wa,s,null,-0,0)}}break}while(!0);Di(e)}function b0(e,t,n,i,a,s,r,o,l,c,h,d,u,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},mx(t,s,d);var v=(s&62914560)===s?wu-Bn():(s&4194048)===s?xx-Bn():0;if(v=PE(d,v),v!==null){Ji=s,e.cancelPendingCommit=v(A0.bind(null,e,t,s,n,i,a,r,o,l,h,d,null,u,p)),Da(e,s,r,!c);return}}A0(e,t,s,n,i,a,r,o,l)}function Qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Gn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,n,i){t&=~Ip,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&A_(e,n,t)}function Du(){return se&6?!0:(cl(0),!1)}function Fp(){if(Kt!==null){if(ue===0)var e=Kt.return;else e=Kt,Zi=Cs=null,bp(e),vr=null,Xo=0,e=Kt;for(;e!==null;)ex(e.alternate,e),e=e.return;Kt=null}}function Ur(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_E(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ji=0,Fp(),Se=e,Kt=n=Ki(e.current,null),Jt=t,ue=0,Nn=null,wa=!1,Xr=nl(e,t),Bp=!1,wr=zn=Ip=gs=Ya=Ne=0,bn=Lo=null,Fh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Fn(i),s=1<<a;t|=e[a],i&=~s}return ra=t,yu(),n}function Ex(e,t){Ft=null,Lt.H=Wo,t===Vr||t===bu?(t=n0(),ue=3):t===_p?(t=n0(),ue=4):ue=t===Np?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nn=t,Kt===null&&(Ne=1,Hc(e,Jn(t,e.current)))}function bx(){var e=Vn.current;return e===null?!0:(Jt&4194048)===Jt?ni===null:(Jt&62914560)===Jt||Jt&536870912?e===ni:!1}function Tx(){var e=Lt.H;return Lt.H=Wo,e===null?Wo:e}function Ax(){var e=Lt.A;return Lt.A=jy,e}function Wc(){Ne=4,wa||(Jt&4194048)!==Jt&&Vn.current!==null||(Xr=!0),!(Ya&134217727)&&!(gs&134217727)||Se===null||Da(Se,Jt,zn,!1)}function mf(e,t,n){var i=se;se|=2;var a=Tx(),s=Ax();(Se!==e||Jt!==t)&&(kc=null,Ur(e,t)),t=!1;var r=Ne;t:do try{if(ue!==0&&Kt!==null){var o=Kt,l=Nn;switch(ue){case 8:Fp(),r=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(t=!0);var c=ue;if(ue=0,Nn=null,dr(e,o,l,c),n&&Xr){r=0;break t}break;default:c=ue,ue=0,Nn=null,dr(e,o,l,c)}}Jy(),r=Ne;break}catch(h){Ex(e,h)}while(!0);return t&&e.shellSuspendCounter++,Zi=Cs=null,se=i,Lt.H=a,Lt.A=s,Kt===null&&(Se=null,Jt=0,yu()),r}function Jy(){for(;Kt!==null;)Rx(Kt)}function $y(e,t){var n=se;se|=2;var i=Tx(),a=Ax();Se!==e||Jt!==t?(kc=null,Xc=Bn()+500,Ur(e,t)):Xr=nl(e,t);t:do try{if(ue!==0&&Kt!==null){t=Kt;var s=Nn;e:switch(ue){case 1:ue=0,Nn=null,dr(e,t,s,1);break;case 2:case 9:if(e0(s)){ue=0,Nn=null,T0(t);break}t=function(){ue!==2&&ue!==9||Se!==e||(ue=7),Di(e)},s.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:e0(s)?(ue=0,Nn=null,T0(t)):(ue=0,Nn=null,dr(e,t,s,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?qx(r):o.stateNode.complete){ue=0,Nn=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,Uu(c)):Kt=null}break e}}ue=0,Nn=null,dr(e,t,s,5);break;case 6:ue=0,Nn=null,dr(e,t,s,6);break;case 8:Fp(),Ne=6;break t;default:throw Error(K(462))}}tE();break}catch(h){Ex(e,h)}while(!0);return Zi=Cs=null,Lt.H=i,Lt.A=a,se=n,Kt!==null?0:(Se=null,Jt=0,yu(),Ne)}function tE(){for(;Kt!==null&&!EM();)Rx(Kt)}function Rx(e){var t=tx(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Uu(e):Kt=t}function T0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=v0(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=v0(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:bp(t);default:ex(n,t),t=Kt=ev(t,ra),t=tx(n,t,ra)}e.memoizedProps=e.pendingProps,t===null?Uu(e):Kt=t}function dr(e,t,n,i){Zi=Cs=null,bp(t),vr=null,Xo=0;var a=t.return;try{if(Vy(e,a,t,n,Jt)){Ne=1,Hc(e,Jn(n,e.current)),Kt=null;return}}catch(s){if(a!==null)throw Kt=a,s;Ne=1,Hc(e,Jn(n,e.current)),Kt=null;return}t.flags&32768?(ee||i===1?e=!0:Xr||Jt&536870912?e=!1:(wa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Vn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Cx(t,e)):Uu(t)}function Uu(e){var t=e;do{if(t.flags&32768){Cx(t,wa);return}e=t.return;var n=Wy(t.alternate,t,ra);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Ne===0&&(Ne=5)}function Cx(e,t){do{var n=Yy(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Ne=6,Kt=null}function A0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Lu();while(qe!==0);if(se&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(s=t.lanes|t.childLanes,s|=up,NM(e,n,s,r,o,l),e===Se&&(Kt=Se=null,Jt=0),Dr=t,Ia=e,Ji=n,Hh=s,Gh=a,Sx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,aE(wc,function(){return Nx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Lt.T,Lt.T=null,a=re.p,re.p=2,r=se,se|=4;try{qy(e,t,n)}finally{se=r,re.p=a,Lt.T=i}}qe=1,wx(),Dx(),Ux()}}function wx(){if(qe===1){qe=0;var e=Ia,t=Dr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Lt.T,Lt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{hx(t,e);var s=Yh,r=q_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Y_(o.ownerDocument.documentElement,o)){if(l!==null&&cp(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,E=Math.min(l.start,v),g=l.end===void 0?E:Math.min(l.end,v);!p.extend&&E>g&&(r=g,g=E,E=r);var f=Zm(o,E),m=Zm(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),E>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var M=d[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}$c=!!Wh,Yh=Wh=null}finally{se=a,re.p=i,Lt.T=n}}e.current=t,qe=2}}function Dx(){if(qe===2){qe=0;var e=Ia,t=Dr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Lt.T,Lt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{ox(e,t.alternate,t)}finally{se=a,re.p=i,Lt.T=n}}qe=3}}function Ux(){if(qe===4||qe===3){qe=0,bM();var e=Ia,t=Dr,n=Ji,i=Sx;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,Dr=Ia=null,Lx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ba=null),np(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Lt.T,a=re.p,re.p=2,Lt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Lt.T=t,re.p=a}}Ji&3&&Lu(),Di(e),a=e.pendingLanes,n&261930&&a&42?e===Vh?No++:(No=0,Vh=e):No=0,cl(0)}}function Lx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function Lu(){return wx(),Dx(),Ux(),Nx()}function Nx(){if(qe!==5)return!1;var e=Ia,t=Hh;Hh=0;var n=np(Ji),i=Lt.T,a=re.p;try{re.p=32>n?32:n,Lt.T=null,n=Gh,Gh=null;var s=Ia,r=Ji;if(qe=0,Dr=Ia=null,Ji=0,se&6)throw Error(K(331));var o=se;if(se|=4,_x(s.current),px(s,s.current,r,n),se=o,cl(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(el,s)}catch{}return!0}finally{re.p=a,Lt.T=i,Lx(e,t)}}function R0(e,t,n){t=Jn(n,t),t=Ph(e.stateNode,t,2),e=za(e,t,2),e!==null&&(il(e,2),Di(e))}function he(e,t,n){if(e.tag===3)R0(e,e,n);else for(;t!==null;){if(t.tag===3){R0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))){e=Jn(n,e),n=Zv(2),i=za(t,n,2),i!==null&&(jv(n,i,t,e),il(i,2),Di(i));break}}t=t.return}}function gf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ky;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Bp=!0,a.add(n),e=eE.bind(null,e,t,n),t.then(e,e))}function eE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(Jt&n)===n&&(Ne===4||Ne===3&&(Jt&62914560)===Jt&&300>Bn()-wu?!(se&2)&&Ur(e,0):Ip|=n,wr===Jt&&(wr=0)),Di(e)}function Ox(e,t){t===0&&(t=T_()),e=Rs(e,t),e!==null&&(il(e,t),Di(e))}function nE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ox(e,n)}function iE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),Ox(e,n)}function aE(e,t){return tp(e,t)}var Yc=null,er=null,Xh=!1,qc=!1,_f=!1,Ua=0;function Di(e){e!==er&&e.next===null&&(er===null?Yc=er=e:er=er.next=e),qc=!0,Xh||(Xh=!0,rE())}function cl(e,t){if(!_f&&qc){_f=!0;do for(var n=!1,i=Yc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Fn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,C0(i,s))}else s=Jt,s=vu(i,i===Se?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||nl(i,s)||(n=!0,C0(i,s));i=i.next}while(n);_f=!1}}function sE(){Px()}function Px(){qc=Xh=!1;var e=0;Ua!==0&&gE()&&(e=Ua);for(var t=Bn(),n=null,i=Yc;i!==null;){var a=i.next,s=zx(i,t);s===0?(i.next=null,n===null?Yc=a:n.next=a,a===null&&(er=n)):(n=i,(e!==0||s&3)&&(qc=!0)),i=a}qe!==0&&qe!==5||cl(e),Ua!==0&&(Ua=0)}function zx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Fn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=LM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Se,n=Jt,n=vu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ku(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ku(i),np(n)){case 2:case 8:n=E_;break;case 32:n=wc;break;case 268435456:n=b_;break;default:n=wc}return i=Bx.bind(null,e),n=tp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ku(i),e.callbackPriority=2,e.callbackNode=null,2}function Bx(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Lu()&&e.callbackNode!==n)return null;var i=Jt;return i=vu(e,e===Se?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(yx(e,i,t),zx(e,Bn()),e.callbackNode!=null&&e.callbackNode===n?Bx.bind(null,e):null)}function C0(e,t){if(Lu())return null;yx(e,t,!0)}function rE(){vE(function(){se&6?tp(y_,sE):Px()})}function Hp(){if(Ua===0){var e=Ar;e===0&&(e=vl,vl<<=1,!(vl&261888)&&(vl=256)),Ua=e}return Ua}function w0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rc(""+e)}function D0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function oE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=w0((a[Rn]||null).action),r=i.submitter;r&&(t=(t=r[Rn]||null)?w0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new xu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ua!==0){var l=r?D0(a,r):new FormData(a);Nh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?D0(a,r):new FormData(a),Nh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var vf=0;vf<Mh.length;vf++){var xf=Mh[vf],lE=xf.toLowerCase(),cE=xf[0].toUpperCase()+xf.slice(1);pi(lE,"on"+cE)}pi(j_,"onAnimationEnd");pi(K_,"onAnimationIteration");pi(Q_,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(Ty,"onTransitionRun");pi(Ay,"onTransitionStart");pi(Ry,"onTransitionCancel");pi(J_,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function Ix(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Uc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Uc(h)}a.currentTarget=null,s=l}}}}function jt(e,t){var n=t[dh];n===void 0&&(n=t[dh]=new Set);var i=e+"__bubble";n.has(i)||(Fx(t,e,2,!1),n.add(i))}function Sf(e,t,n){var i=0;t&&(i|=4),Fx(n,e,i,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Gp(e){if(!e[Cl]){e[Cl]=!0,D_.forEach(function(n){n!=="selectionchange"&&(uE.has(n)||Sf(n,!1,e),Sf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,Sf("selectionchange",!1,t))}}function Fx(e,t,n,i){switch(Jx(t)){case 2:var a=IE;break;case 8:a=FE;break;default:a=Wp}n=a.bind(null,t,n,e),a=void 0,!vh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Mf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=ar(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}I_(function(){var c=s,h=sp(n),d=[];t:{var u=$_.get(e);if(u!==void 0){var p=xu,v=e;switch(e){case"keypress":if(lc(n)===0)break t;case"keydown":case"keyup":p=iy;break;case"focusin":v="focus",p=ju;break;case"focusout":v="blur",p=ju;break;case"beforeblur":case"afterblur":p=ju;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=WM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ry;break;case j_:case K_:case Q_:p=ZM;break;case J_:p=ly;break;case"scroll":case"scrollend":p=XM;break;case"wheel":p=uy;break;case"copy":case"cut":case"paste":p=KM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hm;break;case"toggle":case"beforetoggle":p=hy}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){var M=m;if(_=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||_===null||f===null||(M=Io(m,f),M!=null&&E.push(qo(m,M,_))),g)break;m=m.return}0<E.length&&(u=new p(u,v,null,n,h),d.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==_h&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[Fr]))break t;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ar(v):null,v!==null&&(g=tl(v),E=v.tag,v!==g||E!==5&&E!==27&&E!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=Im,M="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=Hm,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:mo(p),_=v==null?u:mo(v),u=new E(M,m+"leave",p,n,h),u.target=g,u.relatedTarget=_,M=null,ar(h)===c&&(E=new E(f,m+"enter",v,n,h),E.target=_,E.relatedTarget=g,M=E),g=M,p&&v)e:{for(E=fE,f=p,m=v,_=0,M=f;M;M=E(M))_++;M=0;for(var C=m;C;C=E(C))M++;for(;0<_-M;)f=E(f),_--;for(;0<M-_;)m=E(m),M--;for(;_--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;p!==null&&U0(d,u,p,E,!1),v!==null&&g!==null&&U0(d,g,v,E,!0)}}t:{if(u=c?mo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=km;else if(Xm(u))if(k_)b=yy;else{b=Sy;var R=xy}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&ap(c.elementType)&&(b=km):b=My;if(b&&(b=b(e,c))){X_(d,b,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&gh(u,"number",u.value)}switch(R=c?mo(c):window,e){case"focusin":(Xm(R)||R.contentEditable==="true")&&(or=R,xh=c,bo=null);break;case"focusout":bo=xh=or=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,jm(d,n,h);break;case"selectionchange":if(by)break;case"keydown":case"keyup":jm(d,n,h)}var x;if(lp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else rr?G_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(H_&&n.locale!=="ko"&&(rr||A!=="onCompositionStart"?A==="onCompositionEnd"&&rr&&(x=F_()):(Ca=h,rp="value"in Ca?Ca.value:Ca.textContent,rr=!0)),R=Zc(c,A),0<R.length&&(A=new Fm(A,e,null,n,h),d.push({event:A,listeners:R}),x?A.data=x:(x=V_(n),x!==null&&(A.data=x)))),(x=py?my(e,n):gy(e,n))&&(A=Zc(c,"onBeforeInput"),0<A.length&&(R=new Fm("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:A}),R.data=x)),oE(d,e,c,n,h)}Ix(d,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Io(e,n),a!=null&&i.unshift(qo(e,a,s)),a=Io(e,t),a!=null&&i.push(qo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function fE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Io(n,s),c!=null&&r.unshift(qo(n,c,l))):a||(c=Io(n,s),c!=null&&r.push(qo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var hE=/\r\n?/g,dE=/\u0000|\uFFFD/g;function L0(e){return(typeof e=="string"?e:""+e).replace(hE,`
`).replace(dE,"")}function Hx(e,t){return t=L0(t),L0(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Tr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Tr(e,""+i);break;case"className":Ml(e,"class",i);break;case"tabIndex":Ml(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(e,n,i);break;case"style":B_(e,i,s);break;case"data":if(t!=="object"){Ml(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qi);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=rc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":jt("beforetoggle",e),jt("toggle",e),sc(e,"popover",i);break;case"xlinkActuate":Li(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Li(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Li(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Li(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Li(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Li(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Li(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Li(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Li(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":sc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=GM.get(n)||n,sc(e,n,i))}}function kh(e,t,n,i,a,s){switch(n){case"style":B_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Tr(e,i):(typeof i=="number"||typeof i=="bigint")&&Tr(e,""+i);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!U_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Rn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):sc(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":jt("error",e),jt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":jt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:ge(e,t,i,h,n,null)}}O_(e,s,o,l,c,r,a,!1);return;case"select":jt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":jt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ge(e,t,r,o,n,null)}z_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":jt("beforetoggle",e),jt("toggle",e),jt("cancel",e),jt("close",e);break;case"iframe":case"object":jt("load",e);break;case"video":case"audio":for(i=0;i<Yo.length;i++)jt(Yo[i],e);break;case"image":jt("error",e),jt("load",e);break;case"details":jt("toggle",e);break;case"embed":case"source":case"link":jt("error",e),jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ge(e,t,c,i,n,null)}return;default:if(ap(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&kh(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function pE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==d&&ge(e,t,u,p,i,d)}}mh(e,r,o,l,c,h,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==s&&ge(e,t,r,a,i,s)}P_(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ge(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ge(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ge(e,t,E,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,t));break;default:ge(e,t,c,u,i,p)}return;default:if(ap(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&kh(e,t,g,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||kh(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||ge(e,t,d,u,i,p)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&N0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&N0(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wh=null,Yh=null;function jc(e){return e.nodeType===9?e:e.ownerDocument}function O0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=null;function gE(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var Vx=typeof setTimeout=="function"?setTimeout:void 0,_E=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(e){return P0.resolve(null).then(e).catch(xE)}:Vx;function xE(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function z0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Nr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Oo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Oo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[al]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Oo(e.ownerDocument.body);n=a}while(n);Nr(t)}function B0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Zh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zh(n),ip(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function SE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[al])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ii(e.nextSibling),e===null)break}return null}function ME(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ii(e.nextSibling),e===null))return null;return e}function Xx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ii(e.nextSibling),e===null))return null;return e}function jh(e){return e.data==="$?"||e.data==="$~"}function Kh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qh=null;function I0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ii(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function F0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function kx(e,t,n){switch(t=jc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function Oo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ip(e)}var si=new Map,H0=new Set;function Kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=re.d;re.d={f:EE,r:bE,D:TE,C:AE,L:RE,m:CE,X:DE,S:wE,M:UE};function EE(){var e=ca.f(),t=Du();return e||t}function bE(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Bv(t):ca.r(e)}var kr=typeof document>"u"?null:document;function Wx(e,t,n){var i=kr;if(i&&typeof t=="string"&&t){var a=Qn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),H0.has(a)||(H0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),on(t,"link",e),$e(t),i.head.appendChild(t)))}}function TE(e){ca.D(e),Wx("dns-prefetch",e,null)}function AE(e,t){ca.C(e,t),Wx("preconnect",e,t)}function RE(e,t,n){ca.L(e,t,n);var i=kr;if(i&&e&&t){var a='link[rel="preload"][as="'+Qn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Qn(n.imageSizes)+'"]')):a+='[href="'+Qn(e)+'"]';var s=a;switch(t){case"style":s=Lr(e);break;case"script":s=Wr(e)}si.has(s)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),si.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(ul(s))||t==="script"&&i.querySelector(fl(s))||(t=i.createElement("link"),on(t,"link",e),$e(t),i.head.appendChild(t)))}}function CE(e,t){ca.m(e,t);var n=kr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Qn(i)+'"][href="'+Qn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Wr(e)}if(!si.has(s)&&(e=Re({rel:"modulepreload",href:e},t),si.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fl(s)))return}i=n.createElement("link"),on(i,"link",e),$e(i),n.head.appendChild(i)}}}function wE(e,t,n){ca.S(e,t,n);var i=kr;if(i&&e){var a=pr(i).hoistableStyles,s=Lr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ul(s)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=si.get(s))&&Vp(e,n);var l=r=i.createElement("link");$e(l),on(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,gc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function DE(e,t){ca.X(e,t);var n=kr;if(n&&e){var i=pr(n).hoistableScripts,a=Wr(e),s=i.get(a);s||(s=n.querySelector(fl(a)),s||(e=Re({src:e,async:!0},t),(t=si.get(a))&&Xp(e,t),s=n.createElement("script"),$e(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function UE(e,t){ca.M(e,t);var n=kr;if(n&&e){var i=pr(n).hoistableScripts,a=Wr(e),s=i.get(a);s||(s=n.querySelector(fl(a)),s||(e=Re({src:e,async:!0,type:"module"},t),(t=si.get(a))&&Xp(e,t),s=n.createElement("script"),$e(s),on(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function G0(e,t,n,i){var a=(a=Na.current)?Kc(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Lr(n.href),n=pr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Lr(n.href);var s=pr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(ul(e)))&&!s._p&&(r.instance=s,r.state.loading=5),si.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},si.set(e,n),s||LE(a,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wr(n),n=pr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function Lr(e){return'href="'+Qn(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function Yx(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function LE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),$e(t),e.head.appendChild(t))}function Wr(e){return'[src="'+Qn(e)+'"]'}function fl(e){return"script[async]"+e}function V0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qn(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var a=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),on(i,"style",a),gc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Lr(n.href);var s=e.querySelector(ul(a));if(s)return t.state.loading|=4,t.instance=s,$e(s),s;i=Yx(n),(a=si.get(a))&&Vp(i,a),s=(e.ownerDocument||e).createElement("link"),$e(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),t.state.loading|=4,gc(s,n.precedence,e),t.instance=s;case"script":return s=Wr(n.src),(a=e.querySelector(fl(s)))?(t.instance=a,$e(a),a):(i=n,(a=si.get(s))&&(i=Re({},n),Xp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),$e(a),on(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,gc(i,n.precedence,e));return t.instance}function gc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _c=null;function X0(e,t,n){if(_c===null){var i=new Map,a=_c=new Map;a.set(n,i)}else a=_c,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[al]||s[nn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function k0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function NE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qx(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function OE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Lr(i.href),s=t.querySelector(ul(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,$e(s);return}s=t.ownerDocument||t,i=Yx(i),(a=si.get(a))&&Vp(i,a),s=s.createElement("link"),$e(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ef=0;function PE(e,t){return e.stylesheets&&e.count===0&&vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Ef===0&&(Ef=62500*mE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Ef?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jc=null;function vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jc=new Map,t.forEach(zE,e),Jc=null,Qc.call(e))}function zE(e,t){if(!(t.state.loading&4)){var n=Jc.get(e);if(n)var i=n.get(null);else{n=new Map,Jc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Qc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Zo={$$typeof:Yi,Provider:null,Consumer:null,_currentValue:hs,_currentValue2:hs,_threadCount:0};function BE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Zx(e,t,n,i,a,s,r,o,l,c,h,d){return e=new BE(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=Pn(3,null,null,t),e.current=s,s.stateNode=e,t=mp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},vp(s),e}function jx(e){return e?(e=ur,e):ur}function Kx(e,t,n,i,a,s){a=jx(a),i.context===null?i.context=a:i.pendingContext=a,i=Pa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=za(e,i,t),n!==null&&(Tn(n,e,t),Ao(n,e,t))}function W0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kp(e,t){W0(e,t),(e=e.alternate)&&W0(e,t)}function Qx(e){if(e.tag===13||e.tag===31){var t=Rs(e,67108864);t!==null&&Tn(t,e,67108864),kp(e,67108864)}}function Y0(e){if(e.tag===13||e.tag===31){var t=Hn();t=ep(t);var n=Rs(e,t);n!==null&&Tn(n,e,t),kp(e,t)}}var $c=!0;function IE(e,t,n,i){var a=Lt.T;Lt.T=null;var s=re.p;try{re.p=2,Wp(e,t,n,i)}finally{re.p=s,Lt.T=a}}function FE(e,t,n,i){var a=Lt.T;Lt.T=null;var s=re.p;try{re.p=8,Wp(e,t,n,i)}finally{re.p=s,Lt.T=a}}function Wp(e,t,n,i){if($c){var a=Jh(i);if(a===null)Mf(e,t,i,tu,n),q0(e,i);else if(GE(a,e,t,n,i))i.stopPropagation();else if(q0(e,i),t&4&&-1<HE.indexOf(e)){for(;a!==null;){var s=Hr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=as(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Di(s),!(se&6)&&(Xc=Bn()+500,cl(0))}}break;case 31:case 13:o=Rs(s,2),o!==null&&Tn(o,s,2),Du(),kp(s,2)}if(s=Jh(i),s===null&&Mf(e,t,i,tu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Mf(e,t,i,null,n)}}function Jh(e){return e=sp(e),Yp(e)}var tu=null;function Yp(e){if(tu=null,e=ar(e),e!==null){var t=tl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=__(t),e!==null)return e;e=null}else if(n===31){if(e=v_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tu=e,null}function Jx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(TM()){case y_:return 2;case E_:return 8;case wc:case AM:return 32;case b_:return 268435456;default:return 32}default:return 32}}var $h=!1,Fa=null,Ha=null,Ga=null,jo=new Map,Ko=new Map,Ta=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function to(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Hr(t),t!==null&&Qx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function GE(e,t,n,i,a){switch(t){case"focusin":return Fa=to(Fa,e,t,n,i,a),!0;case"dragenter":return Ha=to(Ha,e,t,n,i,a),!0;case"mouseover":return Ga=to(Ga,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return jo.set(s,to(jo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ko.set(s,to(Ko.get(s)||null,e,t,n,i,a)),!0}return!1}function $x(e){var t=ar(e.target);if(t!==null){var n=tl(t);if(n!==null){if(t=n.tag,t===13){if(t=__(n),t!==null){e.blockedOn=t,Um(e.priority,function(){Y0(n)});return}}else if(t===31){if(t=v_(n),t!==null){e.blockedOn=t,Um(e.priority,function(){Y0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);_h=i,n.target.dispatchEvent(i),_h=null}else return t=Hr(n),t!==null&&Qx(t),e.blockedOn=n,!1;t.shift()}return!0}function Z0(e,t,n){xc(e)&&n.delete(t)}function VE(){$h=!1,Fa!==null&&xc(Fa)&&(Fa=null),Ha!==null&&xc(Ha)&&(Ha=null),Ga!==null&&xc(Ga)&&(Ga=null),jo.forEach(Z0),Ko.forEach(Z0)}function wl(e,t){e.blockedOn===t&&(e.blockedOn=null,$h||($h=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,VE)))}var Dl=null;function j0(e){Dl!==e&&(Dl=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){Dl===e&&(Dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Yp(i||n)===null)continue;break}var s=Hr(n);s!==null&&(e.splice(t,3),t-=3,Nh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Nr(e){function t(l){return wl(l,e)}Fa!==null&&wl(Fa,e),Ha!==null&&wl(Ha,e),Ga!==null&&wl(Ga,e),jo.forEach(t),Ko.forEach(t);for(var n=0;n<Ta.length;n++){var i=Ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)$x(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Rn]||null;if(typeof s=="function")r||j0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Rn]||null)o=r.formAction;else if(Yp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),j0(n)}}}function tS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function qp(e){this._internalRoot=e}Nu.prototype.render=qp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=Hn();Kx(n,i,e,t,null,null)};Nu.prototype.unmount=qp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kx(e.current,2,null,e,null,null),Du(),t[Fr]=null}};function Nu(e){this._internalRoot=e}Nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=w_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&$x(e)}};var K0=m_.version;if(K0!=="19.2.5")throw Error(K(527,K0,"19.2.5"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=vM(t),e=e!==null?x_(e):null,e=e===null?null:e.stateNode,e};var XE={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{el=Ul.inject(XE),In=Ul}catch{}}gu.createRoot=function(e,t){if(!g_(e))throw Error(K(299));var n=!1,i="",a=Wv,s=Yv,r=qv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Zx(e,1,!1,null,null,n,i,null,a,s,r,tS),e[Fr]=t.current,Gp(e),new qp(t)};gu.hydrateRoot=function(e,t,n){if(!g_(e))throw Error(K(299));var i=!1,a="",s=Wv,r=Yv,o=qv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Zx(e,1,!0,t,n??null,i,a,l,s,r,o,tS),t.context=jx(null),n=t.current,i=Hn(),i=ep(i),a=Pa(i),a.callback=null,za(n,a,i),n=i,t.current.lanes=n,il(t,n),Di(t),e[Fr]=t.current,Gp(e),new Nu(t)};gu.version="19.2.5";function eS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eS)}catch(e){console.error(e)}}eS(),c_.exports=gu;var kE=c_.exports;const WE=$g(kE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zp="184",YE=0,Q0=1,qE=2,Sc=1,ZE=2,vo=3,qa=0,An=1,Wi=2,$i=0,Mr=1,eu=2,J0=3,$0=4,jE=5,ls=100,KE=101,QE=102,JE=103,$E=104,tb=200,eb=201,nb=202,ib=203,td=204,ed=205,ab=206,sb=207,rb=208,ob=209,lb=210,cb=211,ub=212,fb=213,hb=214,nd=0,id=1,ad=2,Or=3,sd=4,rd=5,od=6,ld=7,nS=0,db=1,pb=2,Ai=0,iS=1,aS=2,sS=3,rS=4,oS=5,lS=6,cS=7,uS=300,ys=301,Pr=302,bf=303,Tf=304,Ou=306,cd=1e3,ji=1001,ud=1002,rn=1003,mb=1004,Ll=1005,pn=1006,Af=1007,us=1008,ti=1009,fS=1010,hS=1011,Qo=1012,jp=1013,Ci=1014,Ei=1015,oa=1016,Kp=1017,Qp=1018,Jo=1020,dS=35902,pS=35899,mS=1021,gS=1022,hi=1023,la=1026,fs=1027,_S=1028,Jp=1029,Es=1030,$p=1031,tm=1033,Mc=33776,yc=33777,Ec=33778,bc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,nu=37490,Sd=37491,Md=37808,yd=37809,Ed=37810,bd=37811,Td=37812,Ad=37813,Rd=37814,Cd=37815,wd=37816,Dd=37817,Ud=37818,Ld=37819,Nd=37820,Od=37821,Pd=36492,zd=36494,Bd=36495,Id=36283,Fd=36284,iu=36285,Hd=36286,gb=3200,Gd=0,_b=1,Aa="",Yn="srgb",au="srgb-linear",su="linear",ce="srgb",Ps=7680,tg=519,vb=512,xb=513,Sb=514,em=515,Mb=516,yb=517,nm=518,Eb=519,Vd=35044,eg="300 es",bi=2e3,ru=2001;function bb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ou(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Tb(){const e=ou("canvas");return e.style.display="block",e}const ng={};function lu(...e){const t="THREE."+e.shift();console.log(t,...e)}function vS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ut(...e){e=vS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function $t(...e){e=vS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xd(...e){const t=e.join(" ");t in ng||(ng[t]=!0,Ut(...e))}function Ab(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Rb={[nd]:id,[ad]:od,[sd]:ld,[Or]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Or};class ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const Po=Math.PI/180,$o=180/Math.PI;function ta(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function im(e,t){return(e%t+t)%t}function Cb(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function wb(e,t,n){return e!==t?(n-e)/(t-e):0}function zo(e,t,n){return(1-n)*e+n*t}function Db(e,t,n,i){return zo(e,t,1-Math.exp(-n*i))}function Ub(e,t=1){return t-Math.abs(im(e,t*2)-t)}function Lb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Nb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ob(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Pb(e,t){return e+Math.random()*(t-e)}function zb(e){return e*(.5-Math.random())}function Bb(e){e!==void 0&&(ig=e);let t=ig+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ib(e){return e*Po}function Fb(e){return e*$o}function Hb(e){return(e&e-1)===0&&e!==0}function Gb(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Vb(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Xb(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),d=s((t-i)/2),u=r((t-i)/2),p=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*h,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function fi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function fe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Rf={DEG2RAD:Po,RAD2DEG:$o,generateUUID:ta,clamp:Qt,euclideanModulo:im,mapLinear:Cb,inverseLerp:wb,lerp:zo,damp:Db,pingpong:Ub,smoothstep:Lb,smootherstep:Nb,randInt:Ob,randFloat:Pb,randFloatSpread:zb,seededRandom:Bb,degToRad:Ib,radToDeg:Fb,isPowerOfTwo:Hb,ceilPowerOfTwo:Gb,floorPowerOfTwo:Vb,setQuaternionFromProperEuler:Xb,normalize:fe,denormalize:fi},um=class um{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};um.prototype.isVector2=!0;let Vt=um;class Yr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],E=s[r+3];if(d!==E||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*E;g<0&&(u=-u,p=-p,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+E*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+E*o;const m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+h*d+l*p-c*u,t[n+1]=l*v+h*u+c*d-o*p,t[n+2]=c*v+h*p+o*u-l*d,t[n+3]=h*v-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fm=class fm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ag.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ag.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cf.copy(this).projectOnVector(t),this.sub(Cf)}reflect(t){return this.sub(Cf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;let O=fm;const Cf=new O,ag=new Yr,hm=class hm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],E=a[0],g=a[3],f=a[6],m=a[1],_=a[4],M=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*E+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*M+l*R,s[1]=c*E+h*m+d*C,s[4]=c*g+h*_+d*b,s[7]=c*f+h*M+d*R,s[2]=u*E+p*m+v*C,s[5]=u*g+p*_+v*b,s[8]=u*f+p*M+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,v=n*d+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=d*E,t[1]=(a*c-h*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(h*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=p*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(wf.makeScale(t,n)),this}rotate(t){return this.premultiply(wf.makeRotation(-t)),this}translate(t,n){return this.premultiply(wf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hm.prototype.isMatrix3=!0;let Pt=hm;const wf=new Pt,sg=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const e={enabled:!0,workingColorSpace:au,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ce&&(a.r=ea(a.r),a.g=ea(a.g),a.b=ea(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(a.r=yr(a.r),a.g=yr(a.g),a.b=yr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Aa?su:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Xd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Xd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[au]:{primaries:t,whitePoint:i,transfer:su,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:sg,fromXYZ:rg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}const te=kb();function ea(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let zs;class Wb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=ou("canvas")),zs.width=t.width,zs.height=t.height;const a=zs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ou("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ea(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ea(n[i]/255)*255):n[i]=ea(n[i]);return{data:n,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yb=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Df(a[r].image)):s.push(Df(a[r]))}else s=Df(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Df(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Wb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let qb=0;const Uf=new O;class mn extends ws{constructor(t=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=ji,a=ji,s=pn,r=us,o=hi,l=ti,c=mn.DEFAULT_ANISOTROPY,h=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=ta(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uf).x}get height(){return this.source.getSize(Uf).y}get depth(){return this.source.getSize(Uf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ut(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cd:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cd:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=uS;mn.DEFAULT_ANISOTROPY=1;const dm=class dm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,C=(f+1)/2,b=(h+u)/4,R=(d+E)/4,x=(v+g)/4;return _>M&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):M>C?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=b/a,s=x/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-E)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dm.prototype.isVector4=!0;let He=dm;class Zb extends ws{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new mn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new am(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Zb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class xS extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jb extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=class pu{constructor(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g)}set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Bs.setFromMatrixColumn(t,0).length(),s=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*d,v=o*h,E=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,v=c*h,E=c*d;n[0]=u+E*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,v=c*h,E=c*d;n[0]=u-E*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,v=o*h,E=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=u*c+E,n[1]=l*d,n[5]=E*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-u*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=u-E*d}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+E,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=E*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kb,t,Qb)}lookAt(t,n,i){const a=this.elements;return Un.subVectors(t,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),pa.crossVectors(i,Un),pa.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),pa.crossVectors(i,Un)),pa.normalize(),Nl.crossVectors(Un,pa),a[0]=pa.x,a[4]=Nl.x,a[8]=Un.x,a[1]=pa.y,a[5]=Nl.y,a[9]=Un.y,a[2]=pa.z,a[6]=Nl.z,a[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],M=i[11],C=i[15],b=a[0],R=a[4],x=a[8],A=a[12],U=a[1],w=a[5],I=a[9],Y=a[13],j=a[2],z=a[6],D=a[10],N=a[14],k=a[3],J=a[7],it=a[11],vt=a[15];return s[0]=r*b+o*U+l*j+c*k,s[4]=r*R+o*w+l*z+c*J,s[8]=r*x+o*I+l*D+c*it,s[12]=r*A+o*Y+l*N+c*vt,s[1]=h*b+d*U+u*j+p*k,s[5]=h*R+d*w+u*z+p*J,s[9]=h*x+d*I+u*D+p*it,s[13]=h*A+d*Y+u*N+p*vt,s[2]=v*b+E*U+g*j+f*k,s[6]=v*R+E*w+g*z+f*J,s[10]=v*x+E*I+g*D+f*it,s[14]=v*A+E*Y+g*N+f*vt,s[3]=m*b+_*U+M*j+C*k,s[7]=m*R+_*w+M*z+C*J,s[11]=m*x+_*I+M*D+C*it,s[15]=m*A+_*Y+M*N+C*vt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],E=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*d,M=o*u-l*d,C=r*p-c*h,b=r*u-l*h,R=r*d-o*h;return n*(E*m-g*_+f*M)-i*(v*m-g*C+f*b)+a*(v*_-E*C+f*R)-s*(v*M-E*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,M=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=h*E-d*v,A=h*g-u*v,U=h*f-p*v,w=d*g-u*E,I=d*f-p*E,Y=u*f-p*g,j=m*Y-_*I+M*w+C*U-b*A+R*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/j;return t[0]=(o*Y-l*I+c*w)*z,t[1]=(a*I-i*Y-s*w)*z,t[2]=(E*R-g*b+f*C)*z,t[3]=(u*b-d*R-p*C)*z,t[4]=(l*U-r*Y-c*A)*z,t[5]=(n*Y-a*U+s*A)*z,t[6]=(g*M-v*R-f*_)*z,t[7]=(h*R-u*M+p*_)*z,t[8]=(r*I-o*U+c*x)*z,t[9]=(i*U-n*I-s*x)*z,t[10]=(v*b-E*M+f*m)*z,t[11]=(d*M-h*b-p*m)*z,t[12]=(o*A-r*w-l*x)*z,t[13]=(n*w-i*A+a*x)*z,t[14]=(E*_-v*C-g*m)*z,t[15]=(h*C-d*_+u*m)*z,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,v=s*d,E=r*h,g=r*d,f=o*d,m=l*c,_=l*h,M=l*d,C=i.x,b=i.y,R=i.z;return a[0]=(1-(E+f))*C,a[1]=(p+M)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(p-M)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Bs.set(a[0],a[1],a[2]).length();const o=Bs.set(a[4],a[5],a[6]).length(),l=Bs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),oi.copy(this);const c=1/r,h=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,n.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=bi,l=!1){const c=this.elements,h=2*s/(n-t),d=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,E;if(l)v=s/(r-s),E=r*s/(r-s);else if(o===bi)v=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===ru)v=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=bi,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,E;if(l)v=1/(r-s),E=r/(r-s);else if(o===bi)v=-2/(r-s),E=-(r+s)/(r-s);else if(o===ru)v=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};pu.prototype.isMatrix4=!0;let Oe=pu;const Bs=new O,oi=new Oe,Kb=new O(0,0,0),Qb=new O(1,1,1),pa=new O,Nl=new O,Un=new O,og=new Oe,lg=new Yr;class Za{constructor(t=0,n=0,i=0,a=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return og.makeRotationFromQuaternion(t),this.setFromRotationMatrix(og,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lg.setFromEuler(this),this.setFromQuaternion(lg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jb=0;const cg=new O,Is=new Yr,zi=new Oe,Ol=new O,eo=new O,$b=new O,tT=new Yr,ug=new O(1,0,0),fg=new O(0,1,0),hg=new O(0,0,1),dg={type:"added"},eT={type:"removed"},Fs={type:"childadded",child:null},Lf={type:"childremoved",child:null};class ln extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new O,n=new Za,i=new Yr,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Pt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(ug,t)}rotateY(t){return this.rotateOnAxis(fg,t)}rotateZ(t){return this.rotateOnAxis(hg,t)}translateOnAxis(t,n){return cg.copy(t).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ug,t)}translateY(t){return this.translateOnAxis(fg,t)}translateZ(t){return this.translateOnAxis(hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ol.copy(t):Ol.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(eo,Ol,this.up):zi.lookAt(Ol,eo,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(zi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eT),Lf.child=t,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,$b),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,tT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}ln.DEFAULT_UP=new O(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xo extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nT={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const SS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Of(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Gt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=te.workingColorSpace){return this.r=t,this.g=n,this.b=i,te.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=te.workingColorSpace){if(t=im(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Of(r,s,t+1/3),this.g=Of(r,s,t),this.b=Of(r,s,t-1/3)}return te.colorSpaceToWorking(this,a),this}setStyle(t,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ut("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Yn){const i=SS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ea(t.r),this.g=ea(t.g),this.b=ea(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return te.workingToColorSpace(hn.copy(this),t),Math.round(Qt(hn.r*255,0,255))*65536+Math.round(Qt(hn.g*255,0,255))*256+Math.round(Qt(hn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=te.workingColorSpace){te.workingToColorSpace(hn.copy(this),n);const i=hn.r,a=hn.g,s=hn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=te.workingColorSpace){return te.workingToColorSpace(hn.copy(this),n),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Yn){te.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,a=hn.b;return t!==Yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ma),this.setHSL(ma.h+t,ma.s+n,ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ma),t.getHSL(Pl);const i=zo(ma.h,Pl.h,n),a=zo(ma.s,Pl.s,n),s=zo(ma.l,Pl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Gt;Gt.NAMES=SS;class rm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=n}clone(){return new rm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iT extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Za,this.environmentIntensity=1,this.environmentRotation=new Za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const li=new O,Bi=new O,Pf=new O,Ii=new O,Hs=new O,Gs=new O,pg=new O,zf=new O,Bf=new O,If=new O,Ff=new He,Hf=new He,Gf=new He;class ei{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),li.subVectors(t,n),a.cross(li);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){li.subVectors(a,n),Bi.subVectors(i,n),Pf.subVectors(t,n);const r=li.dot(li),o=li.dot(Bi),l=li.dot(Pf),c=Bi.dot(Bi),h=Bi.dot(Pf),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,v=(r*h-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(r,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Ff.setScalar(0),Hf.setScalar(0),Gf.setScalar(0),Ff.fromBufferAttribute(t,n),Hf.fromBufferAttribute(t,i),Gf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Ff,s.x),r.addScaledVector(Hf,s.y),r.addScaledVector(Gf,s.z),r}static isFrontFacing(t,n,i,a){return li.subVectors(i,n),Bi.subVectors(t,n),li.cross(Bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),li.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ei.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ei.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Hs.subVectors(a,i),Gs.subVectors(s,i),zf.subVectors(t,i);const l=Hs.dot(zf),c=Gs.dot(zf);if(l<=0&&c<=0)return n.copy(i);Bf.subVectors(t,a);const h=Hs.dot(Bf),d=Gs.dot(Bf);if(h>=0&&d<=h)return n.copy(a);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Hs,r);If.subVectors(t,s);const p=Hs.dot(If),v=Gs.dot(If);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Gs,o);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return pg.subVectors(s,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(pg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Hs,r).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class hl{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ci):ci.fromBufferAttribute(s,r),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(t.matrixWorld),this.union(zl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Bl.subVectors(this.max,no),Vs.subVectors(t.a,no),Xs.subVectors(t.b,no),ks.subVectors(t.c,no),ga.subVectors(Xs,Vs),_a.subVectors(ks,Xs),$a.subVectors(Vs,ks);let n=[0,-ga.z,ga.y,0,-_a.z,_a.y,0,-$a.z,$a.y,ga.z,0,-ga.x,_a.z,0,-_a.x,$a.z,0,-$a.x,-ga.y,ga.x,0,-_a.y,_a.x,0,-$a.y,$a.x,0];return!Vf(n,Vs,Xs,ks,Bl)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Vs,Xs,ks,Bl))?!1:(Il.crossVectors(ga,_a),n=[Il.x,Il.y,Il.z],Vf(n,Vs,Xs,ks,Bl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fi=[new O,new O,new O,new O,new O,new O,new O,new O],ci=new O,zl=new hl,Vs=new O,Xs=new O,ks=new O,ga=new O,_a=new O,$a=new O,no=new O,Bl=new O,Il=new O,ts=new O;function Vf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){ts.fromArray(e,s);const o=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),l=t.dot(ts),c=n.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ve=new O,Fl=new Vt;let aT=0;class ai extends ws{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(t),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array),s=fe(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vd&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class MS extends ai{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class yS extends ai{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class cn extends ai{constructor(t,n,i){super(new Float32Array(t),n,i)}}const sT=new hl,io=new O,Xf=new O;class Pu{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):sT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const n=io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(io,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Xf)),this.expandByPoint(io.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rT=0;const kn=new Oe,kf=new ln,Ws=new O,Ln=new hl,ao=new hl,Qe=new O;class wn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bb(t)?yS:MS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return kf.lookAt(t),kf.updateMatrix(),this.applyMatrix4(kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Ln.min,ao.min),Ln.expandByPoint(Qe),Qe.addVectors(Ln.max,ao.max),Ln.expandByPoint(Qe)):(Ln.expandByPoint(ao.min),Ln.expandByPoint(ao.max))}Ln.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Qe.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Qe));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),Qe.add(Ws)),a=Math.max(a,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new Vt,p=new Vt,v=new Vt,E=new O,g=new O;function f(x,A,U){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,U),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(w),o[x].add(E),o[A].add(E),o[U].add(E),l[x].add(g),l[A].add(g),l[U].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const U=m[x],w=U.start,I=U.count;for(let Y=w,j=w+I;Y<j;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const _=new O,M=new O,C=new O,b=new O;function R(x){C.fromBufferAttribute(a,x),b.copy(C);const A=o[x];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(b,A);const w=M.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,w)}for(let x=0,A=m.length;x<A;++x){const U=m[x],w=U.start,I=U.count;for(let Y=w,j=w+I;Y<j;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new ai(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=ta()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new O;class cu{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=fi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=fe(n,this.array),i=fe(i,this.array),a=fe(a,this.array),s=fe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){lu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new ai(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lT=0;class Ds extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Mr,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ut(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==qa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==td&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ES extends Ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ys;const so=new O,qs=new O,Zs=new O,js=new Vt,ro=new Vt,bS=new Oe,Hl=new O,oo=new O,Gl=new O,mg=new Vt,Wf=new Vt,gg=new Vt;class cT extends ln{constructor(t=new ES){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new wn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oT(n,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new cu(i,3,0,!1)),Ys.setAttribute("uv",new cu(i,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new Vt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),bS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Zs.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;Vl(Hl.set(-.5,-.5,0),Zs,r,qs,a,s),Vl(oo.set(.5,-.5,0),Zs,r,qs,a,s),Vl(Gl.set(.5,.5,0),Zs,r,qs,a,s),mg.set(0,0),Wf.set(1,0),gg.set(1,1);let o=t.ray.intersectTriangle(Hl,oo,Gl,!1,so);if(o===null&&(Vl(oo.set(-.5,.5,0),Zs,r,qs,a,s),Wf.set(0,1),o=t.ray.intersectTriangle(Hl,Gl,oo,!1,so),o===null))return;const l=t.ray.origin.distanceTo(so);l<t.near||l>t.far||n.push({distance:l,point:so.clone(),uv:ei.getInterpolation(so,Hl,oo,Gl,mg,Wf,gg,new Vt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vl(e,t,n,i,a,s){js.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(ro.x=s*js.x-a*js.y,ro.y=a*js.x+s*js.y):ro.copy(js),e.copy(t),e.x+=ro.x,e.y+=ro.y,e.applyMatrix4(bS)}const Hi=new O,Yf=new O,Xl=new O,va=new O,qf=new O,kl=new O,Zf=new O;class om{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Yf.copy(t).add(n).multiplyScalar(.5),Xl.copy(n).sub(t).normalize(),va.copy(this.origin).sub(Yf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Xl),o=va.dot(this.direction),l=-va.dot(Xl),c=va.lengthSq(),h=Math.abs(1-r*r);let d,u,p,v;if(h>0)if(d=r*l-o,u=r*o-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const E=1/h;d*=E,u*=E,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Yf).addScaledVector(Xl,u),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,s){qf.subVectors(n,t),kl.subVectors(i,t),Zf.crossVectors(qf,kl);let r=this.direction.dot(Zf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;va.subVectors(this.origin,t);const l=o*this.direction.dot(kl.crossVectors(va,kl));if(l<0)return null;const c=o*this.direction.dot(qf.cross(va));if(c<0||l+c>r)return null;const h=-o*va.dot(Zf);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uu extends Ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=nS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _g=new Oe,es=new om,Wl=new Pu,vg=new O,Yl=new O,ql=new O,Zl=new O,jf=new O,jl=new O,xg=new O,Kl=new O;class dn extends ln{constructor(t=new wn,n=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(jf.fromBufferAttribute(d,t),r?jl.addScaledVector(jf,h):jl.addScaledVector(jf.sub(n),h))}n.add(jl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),es.copy(t.ray).recast(t.near),!(Wl.containsPoint(es.origin)===!1&&(es.intersectSphere(Wl,vg)===null||es.origin.distanceToSquared(vg)>(t.far-t.near)**2))&&(_g.copy(s).invert(),es.copy(t.ray).applyMatrix4(_g),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,es)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const b=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);a=Ql(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);a=Ql(this,r,t,i,c,h,d,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,C=_;M<C;M+=3){const b=M,R=M+1,x=M+2;a=Ql(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=g,_=g+1,M=g+2;a=Ql(this,r,t,i,c,h,d,m,_,M),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function uT(e,t,n,i,a,s,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===qa,o),l===null)return null;Kl.copy(o),Kl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Kl);return c<n.near||c>n.far?null:{distance:c,point:Kl.clone(),object:e}}function Ql(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Yl),e.getVertexPosition(l,ql),e.getVertexPosition(c,Zl);const h=uT(e,t,n,i,Yl,ql,Zl,xg);if(h){const d=new O;ei.getBarycoord(xg,Yl,ql,Zl,d),a&&(h.uv=ei.getInterpolatedAttribute(a,o,l,c,d,new Vt)),s&&(h.uv1=ei.getInterpolatedAttribute(s,o,l,c,d,new Vt)),r&&(h.normal=ei.getInterpolatedAttribute(r,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};ei.getNormal(Yl,ql,Zl,u.normal),h.face=u,h.barycoord=d}return h}class fT extends mn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=rn,h=rn,d,u){super(null,r,o,l,c,h,a,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kf=new O,hT=new O,dT=new Pt;class os{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Kf.subVectors(i,n).cross(hT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Kf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||dT.getNormalMatrix(t),a=this.coplanarPoint(Kf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Pu,pT=new Vt(.5,.5),Jl=new O;class TS{constructor(t=new os,n=new os,i=new os,a=new os,s=new os,r=new os){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],M=s[14],C=s[15];if(a[0].setComponents(c-r,p-h,f-v,C-m).normalize(),a[1].setComponents(c+r,p+h,f+v,C+m).normalize(),a[2].setComponents(c+o,p+d,f+E,C+_).normalize(),a[3].setComponents(c-o,p-d,f-E,C-_).normalize(),i)a[4].setComponents(l,u,g,M).normalize(),a[5].setComponents(c-l,p-u,f-g,C-M).normalize();else if(a[4].setComponents(c-l,p-u,f-g,C-M).normalize(),n===bi)a[5].setComponents(c+l,p+u,f+g,C+M).normalize();else if(n===ru)a[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);const n=pT.distanceTo(t.center);return ns.radius=.7071067811865476+n,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Jl.x=a.normal.x>0?t.max.x:t.min.x,Jl.y=a.normal.y>0?t.max.y:t.min.y,Jl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mT extends Ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new O,hu=new O,Sg=new Oe,lo=new om,$l=new Pu,Qf=new O,Mg=new O;class gT extends ln{constructor(t=new wn,n=new mT){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)fu.fromBufferAttribute(n,a-1),hu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new cn(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(a),$l.radius+=s,t.ray.intersectsSphere($l)===!1)return;Sg.copy(a).invert(),lo.copy(t.ray).applyMatrix4(Sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=h.getX(E),m=h.getX(E+1),_=tc(this,t,lo,l,f,m,E);_&&n.push(_)}if(this.isLineLoop){const E=h.getX(v-1),g=h.getX(p),f=tc(this,t,lo,l,E,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=tc(this,t,lo,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=tc(this,t,lo,l,v-1,p,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(fu.fromBufferAttribute(o,a),hu.fromBufferAttribute(o,s),n.distanceSqToSegment(fu,hu,Qf,Mg)>i)return;Qf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Qf);if(!(c<t.near||c>t.far))return{distance:c,point:Mg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class AS extends mn{constructor(t=[],n=ys,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _T extends mn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zr extends mn{constructor(t,n,i=Ci,a,s,r,o=rn,l=rn,c,h=la,d=1){if(h!==la&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vT extends zr{constructor(t,n=Ci,i=ys,a,s,r=rn,o=rn,l,c=la){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class RS extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Va extends wn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2));function v(E,g,f,m,_,M,C,b,R,x,A){const U=M/R,w=C/x,I=M/2,Y=C/2,j=b/2,z=R+1,D=x+1;let N=0,k=0;const J=new O;for(let it=0;it<D;it++){const vt=it*w-Y;for(let $=0;$<z;$++){const at=$*U-I;J[E]=at*m,J[g]=vt*_,J[f]=j,c.push(J.x,J.y,J.z),J[E]=0,J[g]=0,J[f]=b>0?1:-1,h.push(J.x,J.y,J.z),d.push($/R),d.push(1-it/x),N+=1}}for(let it=0;it<x;it++)for(let vt=0;vt<R;vt++){const $=u+vt+z*it,at=u+vt+z*(it+1),xt=u+(vt+1)+z*(it+1),st=u+(vt+1)+z*it;l.push($,at,st),l.push(at,xt,st),k+=6}o.addGroup(p,k,A),p+=k,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lm extends wn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new O,M=new O,C=new O;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],M),p(n[b+2],C),l(_,M,C,m)}function l(m,_,M,C){const b=C+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(M,x/b),U=_.clone().lerp(M,x/b),w=b-x;for(let I=0;I<=w;I++)I===0&&x===b?R[x][I]=A:R[x][I]=A.clone().lerp(U,I/w)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const U=Math.floor(A/2);A%2===0?(u(R[x][U+1]),u(R[x+1][U]),u(R[x][U])):(u(R[x][U+1]),u(R[x+1][U+1]),u(R[x+1][U]))}}function c(m){const _=new O;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(m),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const m=new O;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const M=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(M,1-C)}v(),d()}function d(){for(let m=0;m<r.length;m+=6){const _=r[m+0],M=r[m+2],C=r[m+4],b=Math.max(_,M,C),R=Math.min(_,M,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),M<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const M=m*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function v(){const m=new O,_=new O,M=new O,C=new O,b=new Vt,R=new Vt,x=new Vt;for(let A=0,U=0;A<s.length;A+=9,U+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),b.set(r[U+0],r[U+1]),R.set(r[U+2],r[U+3]),x.set(r[U+4],r[U+5]),C.copy(m).add(_).add(M).divideScalar(3);const w=g(C);E(b,U+0,m,w),E(R,U+2,_,w),E(x,U+4,M,w)}}function E(m,_,M,C){C<0&&m.x===1&&(r[_]=m.x-1),M.x===0&&M.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lm(t.vertices,t.indices,t.radius,t.detail)}}class cm extends lm{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new cm(t.radius,t.detail)}}class dl extends wn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let _=0;_<c;_++){const M=_*d-s;v.push(M,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;p.push(_,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class du extends wn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new O,u=new O,p=[],v=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let M=0;f===0&&r===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const b=C/n;d.x=-t*Math.cos(a+b*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(a+b*s)*Math.sin(r+_*o),v.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),g.push(b+M,1-_),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=h[f][m+1],M=h[f][m],C=h[f+1][m],b=h[f+1][m+1];(f!==0||r>0)&&p.push(_,M,b),(f!==i-1||l<Math.PI)&&p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Br(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(yg(a))a.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(yg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function _n(e){const t={};for(let n=0;n<e.length;n++){const i=Br(e[n]);for(const a in i)t[a]=i[a]}return t}function yg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function xT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function CS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ST={clone:Br,merge:_n};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=yT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=xT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ET extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class co extends Ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bT extends Ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TT extends Ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class AT extends ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class RT extends AT{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const ec=new O,nc=new Yr,_i=new O;class wS extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ec,nc,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,_i.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ec,nc,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,nc,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xa=new O,Eg=new Vt,bg=new Vt;class Kn extends wS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-t/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xa.x,xa.y).multiplyScalar(-t/xa.z)}getViewSize(t,n){return this.getViewBounds(t,Eg,bg),n.subVectors(bg,Eg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Po*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class DS extends wS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ks=-90,Qs=1;class CT extends ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ks,Qs,t,n);a.layers=this.layers,this.add(a);const s=new Kn(Ks,Qs,t,n);s.layers=this.layers,this.add(s);const r=new Kn(Ks,Qs,t,n);r.layers=this.layers,this.add(r);const o=new Kn(Ks,Qs,t,n);o.layers=this.layers,this.add(o);const l=new Kn(Ks,Qs,t,n);l.layers=this.layers,this.add(l);const c=new Kn(Ks,Qs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wT extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tg=new Oe;class Ag{constructor(t,n,i=0,a=1/0){this.ray=new om(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):$t("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Tg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(t,n=!0,i=[]){return kd(t,this,i,n),i.sort(Rg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)kd(t[a],this,i,n);return i.sort(Rg),i}}function Rg(e,t){return e.distance-t.distance}function kd(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)kd(s[r],t,n,!0)}}const pm=class pm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};pm.prototype.isMatrix2=!0;let Cg=pm;function wg(e,t,n,i){const a=DT(i);switch(n){case mS:return e*t;case _S:return e*t/a.components*a.byteLength;case Jp:return e*t/a.components*a.byteLength;case Es:return e*t*2/a.components*a.byteLength;case $p:return e*t*2/a.components*a.byteLength;case gS:return e*t*3/a.components*a.byteLength;case hi:return e*t*4/a.components*a.byteLength;case tm:return e*t*4/a.components*a.byteLength;case Mc:case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ec:case bc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hd:case pd:return Math.max(e,16)*Math.max(t,8)/4;case fd:case dd:return Math.max(e,8)*Math.max(t,8)/2;case md:case gd:case vd:case xd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _d:case nu:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Od:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pd:case zd:case Bd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Id:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case iu:case Hd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DT(e){switch(e){case ti:case fS:return{byteLength:1,components:1};case Qo:case hS:case oa:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case Ci:case jp:case Ei:return{byteLength:4,components:1};case dS:case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function US(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function UT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],E=d[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const E=d[p];e.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var LT=`#ifdef USE_ALPHAHASH
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
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,j1=`#ifdef USE_MORPHTARGETS
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
}`,ZA=`#define LAMBERT
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
}`,jA=`#define LAMBERT
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
}`,Yt={alphahash_fragment:LT,alphahash_pars_fragment:NT,alphamap_fragment:OT,alphamap_pars_fragment:PT,alphatest_fragment:zT,alphatest_pars_fragment:BT,aomap_fragment:IT,aomap_pars_fragment:FT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:VT,beginnormal_vertex:XT,bsdfs:kT,iridescence_fragment:WT,bumpmap_pars_fragment:YT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:jT,clipping_planes_vertex:KT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:$T,color_vertex:t1,common:e1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:b1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:y1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:w1,lights_physical_pars_fragment:D1,lights_fragment_begin:U1,lights_fragment_maps:L1,lights_fragment_end:N1,lightprobes_pars_fragment:O1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:I1,map_fragment:F1,map_pars_fragment:H1,map_particle_fragment:G1,map_particle_pars_fragment:V1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:k1,morphinstance_vertex:W1,morphcolor_vertex:Y1,morphnormal_vertex:q1,morphtarget_pars_vertex:Z1,morphtarget_vertex:j1,normal_fragment_begin:K1,normal_fragment_maps:Q1,normal_pars_fragment:J1,normal_pars_vertex:$1,normal_vertex:tA,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:aA,iridescence_pars_fragment:sA,opaque_fragment:rA,packing:oA,premultiplied_alpha_fragment:lA,project_vertex:cA,dithering_fragment:uA,dithering_pars_fragment:fA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:vA,skinning_pars_vertex:xA,skinning_vertex:SA,skinnormal_vertex:MA,specularmap_fragment:yA,specularmap_pars_fragment:EA,tonemapping_fragment:bA,tonemapping_pars_fragment:TA,transmission_fragment:AA,transmission_pars_fragment:RA,uv_pars_fragment:CA,uv_pars_vertex:wA,uv_vertex:DA,worldpos_vertex:UA,background_vert:LA,background_frag:NA,backgroundCube_vert:OA,backgroundCube_frag:PA,cube_vert:zA,cube_frag:BA,depth_vert:IA,depth_frag:FA,distance_vert:HA,distance_frag:GA,equirect_vert:VA,equirect_frag:XA,linedashed_vert:kA,linedashed_frag:WA,meshbasic_vert:YA,meshbasic_frag:qA,meshlambert_vert:ZA,meshlambert_frag:jA,meshmatcap_vert:KA,meshmatcap_frag:QA,meshnormal_vert:JA,meshnormal_frag:$A,meshphong_vert:tR,meshphong_frag:eR,meshphysical_vert:nR,meshphysical_frag:iR,meshtoon_vert:aR,meshtoon_frag:sR,points_vert:rR,points_frag:oR,shadow_vert:lR,shadow_frag:cR,sprite_vert:uR,sprite_frag:fR},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},xi={basic:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:_n([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:_n([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:_n([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:_n([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:_n([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:_n([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:_n([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:_n([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:_n([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:_n([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};xi.physical={uniforms:_n([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ic={r:0,b:0,g:0},hR=new Oe,LS=new Pt;LS.set(-1,0,0,0,1,0,0,0,1);function dR(e,t,n,i,a,s){const r=new Gt(0);let o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=t.get(_,M)}return _}function v(m){let _=!1;const M=p(m);M===null?g(r,o):M&&M.isColor&&(g(M,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Ou)?(c===void 0&&(c=new dn(new Va(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Br(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hR.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(LS),c.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,(h!==M||d!==M.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new dn(new dl(2,2),new di({name:"BackgroundMaterial",uniforms:Br(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(ic,CS(e)),n.buffers.color.setClear(ic.r,ic.g,ic.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:E,dispose:f}}function pR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(w,I,Y,j,z){let D=!1;const N=d(w,j,Y,I);s!==N&&(s=N,c(s.object)),D=p(w,j,Y,z),D&&v(w,j,Y,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,M(w,I,Y,j),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function h(w){return e.deleteVertexArray(w)}function d(w,I,Y,j){const z=j.wireframe===!0;let D=i[I.id];D===void 0&&(D={},i[I.id]=D);const N=w.isInstancedMesh===!0?w.id:0;let k=D[N];k===void 0&&(k={},D[N]=k);let J=k[Y.id];J===void 0&&(J={},k[Y.id]=J);let it=J[z];return it===void 0&&(it=u(l()),J[z]=it),it}function u(w){const I=[],Y=[],j=[];for(let z=0;z<n;z++)I[z]=0,Y[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:j,object:w,attributes:{},index:null}}function p(w,I,Y,j){const z=s.attributes,D=I.attributes;let N=0;const k=Y.getAttributes();for(const J in k)if(k[J].location>=0){const vt=z[J];let $=D[J];if($===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),vt===void 0||vt.attribute!==$||$&&vt.data!==$.data)return!0;N++}return s.attributesNum!==N||s.index!==j}function v(w,I,Y,j){const z={},D=I.attributes;let N=0;const k=Y.getAttributes();for(const J in k)if(k[J].location>=0){let vt=D[J];vt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const $={};$.attribute=vt,vt&&vt.data&&($.data=vt.data),z[J]=$,N++}s.attributes=z,s.attributesNum=N,s.index=j}function E(){const w=s.newAttributes;for(let I=0,Y=w.length;I<Y;I++)w[I]=0}function g(w){f(w,0)}function f(w,I){const Y=s.newAttributes,j=s.enabledAttributes,z=s.attributeDivisors;Y[w]=1,j[w]===0&&(e.enableVertexAttribArray(w),j[w]=1),z[w]!==I&&(e.vertexAttribDivisor(w,I),z[w]=I)}function m(){const w=s.newAttributes,I=s.enabledAttributes;for(let Y=0,j=I.length;Y<j;Y++)I[Y]!==w[Y]&&(e.disableVertexAttribArray(Y),I[Y]=0)}function _(w,I,Y,j,z,D,N){N===!0?e.vertexAttribIPointer(w,I,Y,z,D):e.vertexAttribPointer(w,I,Y,j,z,D)}function M(w,I,Y,j){E();const z=j.attributes,D=Y.getAttributes(),N=I.defaultAttributeValues;for(const k in D){const J=D[k];if(J.location>=0){let it=z[k];if(it===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(it=w.instanceColor)),it!==void 0){const vt=it.normalized,$=it.itemSize,at=t.get(it);if(at===void 0)continue;const xt=at.buffer,st=at.type,X=at.bytesPerElement,rt=st===e.INT||st===e.UNSIGNED_INT||it.gpuType===jp;if(it.isInterleavedBufferAttribute){const tt=it.data,Ct=tt.stride,bt=it.offset;if(tt.isInstancedInterleavedBuffer){for(let At=0;At<J.locationSize;At++)f(J.location+At,tt.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let At=0;At<J.locationSize;At++)g(J.location+At);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let At=0;At<J.locationSize;At++)_(J.location+At,$/J.locationSize,st,vt,Ct*X,(bt+$/J.locationSize*At)*X,rt)}else{if(it.isInstancedBufferAttribute){for(let tt=0;tt<J.locationSize;tt++)f(J.location+tt,it.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let tt=0;tt<J.locationSize;tt++)g(J.location+tt);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let tt=0;tt<J.locationSize;tt++)_(J.location+tt,$/J.locationSize,st,vt,$*X,$/J.locationSize*tt*X,rt)}}else if(N!==void 0){const vt=N[k];if(vt!==void 0)switch(vt.length){case 2:e.vertexAttrib2fv(J.location,vt);break;case 3:e.vertexAttrib3fv(J.location,vt);break;case 4:e.vertexAttrib4fv(J.location,vt);break;default:e.vertexAttrib1fv(J.location,vt)}}}}m()}function C(){A();for(const w in i){const I=i[w];for(const Y in I){const j=I[Y];for(const z in j){const D=j[z];for(const N in D)h(D[N].object),delete D[N];delete j[z]}}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const Y in I){const j=I[Y];for(const z in j){const D=j[z];for(const N in D)h(D[N].object),delete D[N];delete j[z]}}delete i[w.id]}function R(w){for(const I in i){const Y=i[I];for(const j in Y){const z=Y[j];if(z[w.id]===void 0)continue;const D=z[w.id];for(const N in D)h(D[N].object),delete D[N];delete z[w.id]}}}function x(w){for(const I in i){const Y=i[I],j=w.isInstancedMesh===!0?w.id:0,z=Y[j];if(z!==void 0){for(const D in z){const N=z[D];for(const k in N)h(N[k].object),delete N[k];delete z[D]}delete Y[j],Object.keys(Y).length===0&&delete i[I]}}}function A(){U(),r=!0,s!==a&&(s=a,c(s.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function mR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function gR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==hi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ei&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:C,samples:b}}function _R(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new os,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||a;return a=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!a||v===null||v.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=h(v,u,_,p);for(let C=0;C!==_;++C)M[C]=n[C];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=p;_!==E;++_,M+=4)r.copy(d[_]).applyMatrix4(m,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const La=4,Dg=[.125,.215,.35,.446,.526,.582],cs=20,vR=256,uo=new DS,Ug=new Gt;let Jf=null,$f=0,th=0,eh=!1;const xR=new O;class Lg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=xR}=s;Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jf,$f,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ys||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:oa,format:hi,colorSpace:au,depthBuffer:!1},a=Ng(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SR(s)),this._blurMaterial=yR(s,t,n),this._ggxMaterial=MR(s,t,n)}return a}_compileMaterial(t){const n=new dn(new wn,t);this._renderer.compile(n,uo)}_sceneToCubeUV(t,n,i,a,s){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ug),d.toneMapping=Ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new Va,new uu({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(Ug),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;Js(a,M*C,_>2?C:0,C,C),d.setRenderTarget(a),f&&d.render(E,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===ys||t.mapping===Pr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,uo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-La?i-v+La:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,Js(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Js(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,uo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*cs-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):cs;g>cs&&Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const f=[];let m=0;for(let R=0;R<cs;++R){const x=R/E,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const M=this._sizeLods[a],C=3*M*(a>_-La?a-_+La:0),b=4*(this._cubeSize-M);Js(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(d,uo)}}function SR(e){const t=[],n=[],i=[];let a=e;const s=e-La+1+Dg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-La?l=Dg[r-e+La-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,E=3,g=2,f=1,m=new Float32Array(E*v*p),_=new Float32Array(g*v*p),M=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,E*v*b),_.set(u,g*v*b);const U=[b,b,b,b,b,b];M.set(U,f*v*b)}const C=new wn;C.setAttribute("position",new ai(m,E)),C.setAttribute("uv",new ai(_,g)),C.setAttribute("faceIndex",new ai(M,f)),i.push(new dn(C,null)),a>La&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Ng(e,t,n){const i=new Ri(e,t,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function MR(e,t,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function yR(e,t,n){const i=new Float32Array(cs),a=new O(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Og(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pg(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

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
	`}class NS extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new AS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Va(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:$i});s.uniforms.tEquirect.value=n;const r=new dn(a,s),o=n.minFilter;return n.minFilter===us&&(n.minFilter=pn),new CT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function ER(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===bf||p===Tf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new NS(v.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===bf||p===Tf,E=p===ys||p===Pr;if(v||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Lg(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new Lg(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===bf?u.mapping=ys:p===Tf&&(u.mapping=Pr),u}function l(u){let p=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function bR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Xd("WebGLRenderer: "+i+" extension not supported."),a}}}function TR(e,t,n,i){const a={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let _=0,M=m.length;_<M;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=v.array;E=v.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(v.count>=65535?yS:MS)(u,1);g.version=E;const f=s.get(d);f&&t.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function AR(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,s,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let E=0;for(let g=0;g<p;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function RR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:$t("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function CR(e,t,n){const i=new WeakMap,a=new He;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var p=U;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*b*4*d),x=new xS(R,C,b,d);x.type=Ei,x.needsUpdate=!0;const A=M*4;for(let w=0;w<d;w++){const I=f[w],Y=m[w],j=_[w],z=C*b*4*w;for(let D=0;D<I.count;D++){const N=D*A;v===!0&&(a.fromBufferAttribute(I,D),R[z+N+0]=a.x,R[z+N+1]=a.y,R[z+N+2]=a.z,R[z+N+3]=0),E===!0&&(a.fromBufferAttribute(Y,D),R[z+N+4]=a.x,R[z+N+5]=a.y,R[z+N+6]=a.z,R[z+N+7]=0),g===!0&&(a.fromBufferAttribute(j,D),R[z+N+8]=a.x,R[z+N+9]=a.y,R[z+N+10]=a.z,R[z+N+11]=j.itemSize===4?a.w:1)}}u={count:d,texture:x,size:new Vt(C,b)},i.set(o,u),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function wR(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const DR={[iS]:"LINEAR_TONE_MAPPING",[aS]:"REINHARD_TONE_MAPPING",[sS]:"CINEON_TONE_MAPPING",[rS]:"ACES_FILMIC_TONE_MAPPING",[lS]:"AGX_TONE_MAPPING",[cS]:"NEUTRAL_TONE_MAPPING",[oS]:"CUSTOM_TONE_MAPPING"};function UR(e,t,n,i,a){const s=new Ri(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new zr(t,n):void 0}),r=new Ri(t,n,{type:oa,depthBuffer:!1,stencilBuffer:!1}),o=new wn;o.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new cn([0,2,0,0,2,0],2));const l=new ET({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new dn(o,l),h=new DS(-1,1,1,-1,0,1);let d=null,u=null,p=!1,v,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,M=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===Ai&&g.length===0)return!1;if(E=_,_!==null){const M=_.width,C=_.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ai,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let M=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,M,_),R.needsSwap!==!1)){const x=M;M=C,C=x}}if(d!==m.outputColorSpace||u!==m.toneMapping){d=m.outputColorSpace,u=m.toneMapping,l.defines={},te.getTransfer(d)===ce&&(l.defines.SRGB_TRANSFER="");const b=DR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(E),m.render(c,h),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const OS=new mn,Wd=new zr(1,1),PS=new xS,zS=new jb,BS=new AS,zg=[],Bg=[],Ig=new Float32Array(16),Fg=new Float32Array(9),Hg=new Float32Array(4);function qr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=zg[a];if(s===void 0&&(s=new Float32Array(a),zg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Bu(e,t){let n=Bg[t];n===void 0&&(n=new Int32Array(t),Bg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function LR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function NR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function OR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function PR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function zR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(je(n,i))return;Hg.set(i),e.uniformMatrix2fv(this.addr,!1,Hg),Ke(n,i)}}function BR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(je(n,i))return;Fg.set(i),e.uniformMatrix3fv(this.addr,!1,Fg),Ke(n,i)}}function IR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(je(n,i))return;Ig.set(i),e.uniformMatrix4fv(this.addr,!1,Ig),Ke(n,i)}}function FR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function HR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function GR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function VR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function XR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function kR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function WR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function YR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function qR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?nm:em,s=Wd):s=OS,n.setTexture2D(t||s,a)}function ZR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||zS,a)}function jR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||BS,a)}function KR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||PS,a)}function QR(e){switch(e){case 5126:return LR;case 35664:return NR;case 35665:return OR;case 35666:return PR;case 35674:return zR;case 35675:return BR;case 35676:return IR;case 5124:case 35670:return FR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return XR;case 36294:return kR;case 36295:return WR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return qR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return KR}}function JR(e,t){e.uniform1fv(this.addr,t)}function $R(e,t){const n=qr(t,this.size,2);e.uniform2fv(this.addr,n)}function t3(e,t){const n=qr(t,this.size,3);e.uniform3fv(this.addr,n)}function e3(e,t){const n=qr(t,this.size,4);e.uniform4fv(this.addr,n)}function n3(e,t){const n=qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function i3(e,t){const n=qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function a3(e,t){const n=qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function s3(e,t){e.uniform1iv(this.addr,t)}function r3(e,t){e.uniform2iv(this.addr,t)}function o3(e,t){e.uniform3iv(this.addr,t)}function l3(e,t){e.uniform4iv(this.addr,t)}function c3(e,t){e.uniform1uiv(this.addr,t)}function u3(e,t){e.uniform2uiv(this.addr,t)}function f3(e,t){e.uniform3uiv(this.addr,t)}function h3(e,t){e.uniform4uiv(this.addr,t)}function d3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Wd:r=OS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function p3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||zS,s[r])}function m3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||BS,s[r])}function g3(e,t,n){const i=this.cache,a=t.length,s=Bu(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||PS,s[r])}function _3(e){switch(e){case 5126:return JR;case 35664:return $R;case 35665:return t3;case 35666:return e3;case 35674:return n3;case 35675:return i3;case 35676:return a3;case 5124:case 35670:return s3;case 35667:case 35671:return r3;case 35668:case 35672:return o3;case 35669:case 35673:return l3;case 5125:return c3;case 36294:return u3;case 36295:return f3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return d3;case 35679:case 36299:case 36307:return p3;case 35680:case 36300:case 36308:case 36293:return m3;case 36289:case 36303:case 36311:case 36292:return g3}}class v3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QR(n.type)}}class x3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_3(n.type)}}class S3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function Gg(e,t){e.seq.push(t),e.map[t.id]=t}function M3(e,t,n){const i=e.name,a=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),r=nh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Gg(n,c===void 0?new v3(o,e,t):new x3(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new S3(o),Gg(n,d)),n=d}}}class Tc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);M3(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Vg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const y3=37297;let E3=0;function b3(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Xg=new Pt;function T3(e){te._getMatrix(Xg,te.workingColorSpace,e);const t=`mat3( ${Xg.elements.map(n=>n.toFixed(4))} )`;switch(te.getTransfer(e)){case su:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+b3(e.getShaderSource(t),o)}else return s}function A3(e,t){const n=T3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const R3={[iS]:"Linear",[aS]:"Reinhard",[sS]:"Cineon",[rS]:"ACESFilmic",[lS]:"AgX",[cS]:"Neutral",[oS]:"Custom"};function C3(e,t){const n=R3[t];return n===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ac=new O;function w3(){te.getLuminanceCoefficients(ac);const e=ac.x.toFixed(4),t=ac.y.toFixed(4),n=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function U3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function L3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function So(e){return e!==""}function Wg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(e){return e.replace(N3,P3)}const O3=new Map;function P3(e,t){let n=Yt[t];if(n===void 0){const i=O3.get(t);if(i!==void 0)n=Yt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yd(n)}const z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(e){return e.replace(z3,B3)}function B3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Zg(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const I3={[Sc]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function F3(e){return I3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H3={[ys]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function G3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":H3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const V3={[Pr]:"ENVMAP_MODE_REFRACTION"};function X3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":V3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const k3={[nS]:"ENVMAP_BLENDING_MULTIPLY",[db]:"ENVMAP_BLENDING_MIX",[pb]:"ENVMAP_BLENDING_ADD"};function W3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":k3[e.combine]||"ENVMAP_BLENDING_NONE"}function Y3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=F3(n),c=G3(n),h=X3(n),d=W3(n),u=Y3(n),p=D3(n),v=U3(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(So).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(So).join(`
`),f.length>0&&(f+=`
`)):(g=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),f=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?Yt.tonemapping_pars_fragment:"",n.toneMapping!==Ai?C3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,A3("linearToOutputTexel",n.outputColorSpace),w3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(So).join(`
`)),r=Yd(r),r=Wg(r,n),r=Yg(r,n),o=Yd(o),o=Wg(o,n),o=Yg(o,n),r=qg(r),o=qg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,M=m+f+o,C=Vg(a,a.VERTEX_SHADER,_),b=Vg(a,a.FRAGMENT_SHADER,M);a.attachShader(E,C),a.attachShader(E,b),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(w){if(e.debug.checkShaderErrors){const I=a.getProgramInfoLog(E)||"",Y=a.getShaderInfoLog(C)||"",j=a.getShaderInfoLog(b)||"",z=I.trim(),D=Y.trim(),N=j.trim();let k=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,C,b);else{const it=kg(a,C,"vertex"),vt=kg(a,b,"fragment");$t("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+it+`
`+vt)}else z!==""?Ut("WebGLProgram: Program Info Log:",z):(D===""||N==="")&&(J=!1);J&&(w.diagnostics={runnable:k,programLog:z,vertexShader:{log:D,prefix:g},fragmentShader:{log:N,prefix:f}})}a.deleteShader(C),a.deleteShader(b),x=new Tc(a,E),A=L3(a,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(E,y3)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=b,this}let Z3=0;class j3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new K3(t),n.set(t,i)),i}}class K3{constructor(t){this.id=Z3++,this.code=t,this.usedTimes=0}}function Q3(e){return e===Es||e===nu||e===iu}function J3(e,t,n,i,a,s){const r=new sm,o=new j3,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,U,w,I,Y){const j=w.fog,z=I.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||D,N),J=k&&k.mapping===Ou?k.image.height:null,it=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$=vt!==void 0?vt.length:0;let at=0;z.morphAttributes.position!==void 0&&(at=1),z.morphAttributes.normal!==void 0&&(at=2),z.morphAttributes.color!==void 0&&(at=3);let xt,st,X,rt;if(it){const Bt=xi[it];xt=Bt.vertexShader,st=Bt.fragmentShader}else xt=x.vertexShader,st=x.fragmentShader,o.update(x),X=o.getVertexShaderID(x),rt=o.getFragmentShaderID(x);const tt=e.getRenderTarget(),Ct=e.state.buffers.depth.getReversed(),bt=I.isInstancedMesh===!0,At=I.isBatchedMesh===!0,le=!!x.map,Xt=!!x.matcap,ae=!!k,de=!!x.aoMap,kt=!!x.lightMap,we=!!x.bumpMap,Ot=!!x.normalMap,Wt=!!x.displacementMap,P=!!x.emissiveMap,Pe=!!x.metalnessMap,qt=!!x.roughnessMap,oe=x.anisotropy>0,dt=x.clearcoat>0,De=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,F=x.transmission>0,Z=oe&&!!x.anisotropyMap,nt=dt&&!!x.clearcoatMap,ot=dt&&!!x.clearcoatNormalMap,ht=dt&&!!x.clearcoatRoughnessMap,W=T&&!!x.iridescenceMap,Q=T&&!!x.iridescenceThicknessMap,_t=S&&!!x.sheenColorMap,yt=S&&!!x.sheenRoughnessMap,ut=!!x.specularMap,lt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,Ht=F&&!!x.transmissionMap,ie=F&&!!x.thicknessMap,L=!!x.gradientMap,ct=!!x.alphaMap,q=x.alphaTest>0,St=!!x.alphaHash,ft=!!x.extensions;let et=Ai;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(et=e.toneMapping);const Rt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:xt,fragmentShader:st,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:At,batchingColor:At&&I._colorsTexture!==null,instancing:bt,instancingColor:bt&&I.instanceColor!==null,instancingMorph:bt&&I.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:le,matcap:Xt,envMap:ae,envMapMode:ae&&k.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:kt,bumpMap:we,normalMap:Ot,displacementMap:Wt,emissiveMap:P,normalMapObjectSpace:Ot&&x.normalMapType===_b,normalMapTangentSpace:Ot&&x.normalMapType===Gd,packedNormalMap:Ot&&x.normalMapType===Gd&&Q3(x.normalMap.format),metalnessMap:Pe,roughnessMap:qt,anisotropy:oe,anisotropyMap:Z,clearcoat:dt,clearcoatMap:nt,clearcoatNormalMap:ot,clearcoatRoughnessMap:ht,dispersion:De,iridescence:T,iridescenceMap:W,iridescenceThicknessMap:Q,sheen:S,sheenColorMap:_t,sheenRoughnessMap:yt,specularMap:ut,specularColorMap:lt,specularIntensityMap:Nt,transmission:F,transmissionMap:Ht,thicknessMap:ie,gradientMap:L,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:q,alphaHash:St,combine:x.combine,mapUv:le&&v(x.map.channel),aoMapUv:de&&v(x.aoMap.channel),lightMapUv:kt&&v(x.lightMap.channel),bumpMapUv:we&&v(x.bumpMap.channel),normalMapUv:Ot&&v(x.normalMap.channel),displacementMapUv:Wt&&v(x.displacementMap.channel),emissiveMapUv:P&&v(x.emissiveMap.channel),metalnessMapUv:Pe&&v(x.metalnessMap.channel),roughnessMapUv:qt&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:nt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(x.sheenRoughnessMap.channel),specularMapUv:ut&&v(x.specularMap.channel),specularColorMapUv:lt&&v(x.specularColorMap.channel),specularIntensityMapUv:Nt&&v(x.specularIntensityMap.channel),transmissionMapUv:Ht&&v(x.transmissionMap.channel),thicknessMapUv:ie&&v(x.thicknessMap.channel),alphaMapUv:ct&&v(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ot||oe),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(le||ct),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:et,decodeVideoTexture:le&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:P&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function _(x){const A=p[x.type];let U;if(A){const w=xi[A];U=ST.clone(w.uniforms)}else U=x.uniforms;return U}function M(x,A){let U=h.get(A);return U!==void 0?++U.usedTimes:(U=new q3(e,A,x,a),c.push(U),h.set(A,U)),U}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function $3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function t2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function jg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kg(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||t2),i.length>1&&i.sort(p||jg),a.length>1&&a.sort(p||jg)}function d(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function e2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Kg,e.set(i,[r])):a>=s.length?(r=new Kg,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function n2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Gt};break;case"SpotLight":n={position:new O,direction:new O,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function i2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let a2=0;function s2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function r2(e){const t=new n2,n=i2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new Oe,r=new Oe;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,m=0,_=0,M=0,C=0,b=0,R=0;c.sort(s2);for(let A=0,U=c.length;A<U;A++){const w=c[A],I=w.color,Y=w.intensity,j=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Es?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=I.r*Y,d+=I.g*Y,u+=I.b*Y;else if(w.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(w.sh.coefficients[D],Y);R++}else if(w.isDirectionalLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const N=w.shadow,k=n.get(w);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=w.shadow.matrix,m++}i.directional[p]=D,p++}else if(w.isSpotLight){const D=t.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(I).multiplyScalar(Y),D.distance=j,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,i.spot[E]=D;const N=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,N.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[E]=N.matrix,w.castShadow){const k=n.get(w);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=z,M++}E++}else if(w.isRectAreaLight){const D=t.get(w);D.color.copy(I).multiplyScalar(Y),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=D,g++}else if(w.isPointLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){const N=w.shadow,k=n.get(w);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=w.shadow.matrix,_++}i.point[v]=D,v++}else if(w.isHemisphereLight){const D=t.get(w);D.skyColor.copy(w.color).multiplyScalar(Y),D.groundColor.copy(w.groundColor).multiplyScalar(Y),i.hemi[f]=D,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=C,x.numLightProbes=R,i.version=a2++)}function l(c,h){let d=0,u=0,p=0,v=0,E=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),d++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Qg(e){const t=new r2(e),n=[],i=[],a=[];function s(u){d.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function o2(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Qg(e),t.set(a,[o])):s>=r.length?(o=new Qg(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const l2=`void main() {
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
}`,u2=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],f2=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Jg=new Oe,fo=new O,ih=new O;function h2(e,t,n){let i=new TS;const a=new Vt,s=new Vt,r=new He,o=new bT,l=new TT,c={},h=n.maxTextureSize,d={[qa]:An,[An]:qa,[Wi]:Wi},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new wn;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new dn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===ZE&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);const A=e.getRenderTarget(),U=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),I=e.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(z=>z.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,z=b.length;j<z;j++){const D=b[j],N=D.shadow;if(N===void 0){Ut("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const k=N.getFrameExtents();a.multiply(k),s.copy(N.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/k.x),a.x=s.x*k.x,N.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/k.y),a.y=s.y*k.y,N.mapSize.y=s.y));const J=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=J,N.map===null||Y===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===vo){if(D.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ri(a.x,a.y,{format:Es,type:oa,minFilter:pn,magFilter:pn,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new zr(a.x,a.y,Ei),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=la,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn}else D.isPointLight?(N.map=new NS(a.x),N.map.depthTexture=new vT(a.x,Ci)):(N.map=new Ri(a.x,a.y),N.map.depthTexture=new zr(a.x,a.y,Ci)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=la,this.type===Sc?(N.map.depthTexture.compareFunction=J?nm:em,N.map.depthTexture.minFilter=pn,N.map.depthTexture.magFilter=pn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn);N.camera.updateProjectionMatrix()}const it=N.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<it;vt++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,vt),e.clear();else{vt===0&&(e.setRenderTarget(N.map),e.clear());const $=N.getViewport(vt);r.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),I.viewport(r)}if(D.isPointLight){const $=N.camera,at=N.matrix,xt=D.distance||$.far;xt!==$.far&&($.far=xt,$.updateProjectionMatrix()),fo.setFromMatrixPosition(D.matrixWorld),$.position.copy(fo),ih.copy($.position),ih.add(u2[vt]),$.up.copy(f2[vt]),$.lookAt(ih),$.updateMatrixWorld(),at.makeTranslation(-fo.x,-fo.y,-fo.z),Jg.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Jg,$.coordinateSystem,$.reversedDepth)}else N.updateMatrices(D);i=N.getFrustum(),M(R,x,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===vo&&m(N,x),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,U,w)};function m(b,R){const x=t.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ri(a.x,a.y,{format:Es,type:oa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,p,E,null)}function _(b,R,x,A){let U=null;const w=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)U=w;else if(U=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=U.uuid,Y=R.uuid;let j=c[I];j===void 0&&(j={},c[I]=j);let z=j[Y];z===void 0&&(z=U.clone(),j[Y]=z,R.addEventListener("dispose",C)),U=z}if(U.visible=R.visible,U.wireframe=R.wireframe,A===vo?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:d[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=e.properties.get(U);I.light=x}return U}function M(b,R,x,A,U){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===vo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),j=b.material;if(Array.isArray(j)){const z=Y.groups;for(let D=0,N=z.length;D<N;D++){const k=z[D],J=j[k.materialIndex];if(J&&J.visible){const it=_(b,J,A,U);b.onBeforeShadow(e,b,R,x,Y,it,k),e.renderBufferDirect(x,null,Y,it,b,k),b.onAfterShadow(e,b,R,x,Y,it,k)}}}else if(j.visible){const z=_(b,j,A,U);b.onBeforeShadow(e,b,R,x,Y,z,null),e.renderBufferDirect(x,null,Y,z,b,null),b.onAfterShadow(e,b,R,x,Y,z,null)}}const I=b.children;for(let Y=0,j=I.length;Y<j;Y++)M(I[Y],R,x,A,U)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const A=c[x],U=b.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function d2(e,t){function n(){let L=!1;const ct=new He;let q=null;const St=new He(0,0,0,0);return{setMask:function(ft){q!==ft&&!L&&(e.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){L=ft},setClear:function(ft,et,Rt,Bt,ze){ze===!0&&(ft*=Bt,et*=Bt,Rt*=Bt),ct.set(ft,et,Rt,Bt),St.equals(ct)===!1&&(e.clearColor(ft,et,Rt,Bt),St.copy(ct))},reset:function(){L=!1,q=null,St.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,q=null,St=null,ft=null;return{setReversed:function(et){if(ct!==et){const Rt=t.get("EXT_clip_control");et?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const Bt=ft;ft=null,this.setClear(Bt)}},getReversed:function(){return ct},setTest:function(et){et?tt(e.DEPTH_TEST):Ct(e.DEPTH_TEST)},setMask:function(et){q!==et&&!L&&(e.depthMask(et),q=et)},setFunc:function(et){if(ct&&(et=Rb[et]),St!==et){switch(et){case nd:e.depthFunc(e.NEVER);break;case id:e.depthFunc(e.ALWAYS);break;case ad:e.depthFunc(e.LESS);break;case Or:e.depthFunc(e.LEQUAL);break;case sd:e.depthFunc(e.EQUAL);break;case rd:e.depthFunc(e.GEQUAL);break;case od:e.depthFunc(e.GREATER);break;case ld:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}St=et}},setLocked:function(et){L=et},setClear:function(et){ft!==et&&(ft=et,ct&&(et=1-et),e.clearDepth(et))},reset:function(){L=!1,q=null,St=null,ft=null,ct=!1}}}function a(){let L=!1,ct=null,q=null,St=null,ft=null,et=null,Rt=null,Bt=null,ze=null;return{setTest:function(pe){L||(pe?tt(e.STENCIL_TEST):Ct(e.STENCIL_TEST))},setMask:function(pe){ct!==pe&&!L&&(e.stencilMask(pe),ct=pe)},setFunc:function(pe,Ui,mi){(q!==pe||St!==Ui||ft!==mi)&&(e.stencilFunc(pe,Ui,mi),q=pe,St=Ui,ft=mi)},setOp:function(pe,Ui,mi){(et!==pe||Rt!==Ui||Bt!==mi)&&(e.stencilOp(pe,Ui,mi),et=pe,Rt=Ui,Bt=mi)},setLocked:function(pe){L=pe},setClear:function(pe){ze!==pe&&(e.clearStencil(pe),ze=pe)},reset:function(){L=!1,ct=null,q=null,St=null,ft=null,et=null,Rt=null,Bt=null,ze=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,C=null,b=null,R=null,x=new Gt(0,0,0),A=0,U=!1,w=null,I=null,Y=null,j=null,z=null;const D=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const J=e.getParameter(e.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=k>=2);let it=null,vt={};const $=e.getParameter(e.SCISSOR_BOX),at=e.getParameter(e.VIEWPORT),xt=new He().fromArray($),st=new He().fromArray(at);function X(L,ct,q,St){const ft=new Uint8Array(4),et=e.createTexture();e.bindTexture(L,et),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<q;Rt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,St,0,e.RGBA,e.UNSIGNED_BYTE,ft):e.texImage2D(ct+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ft);return et}const rt={};rt[e.TEXTURE_2D]=X(e.TEXTURE_2D,e.TEXTURE_2D,1),rt[e.TEXTURE_CUBE_MAP]=X(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[e.TEXTURE_2D_ARRAY]=X(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),rt[e.TEXTURE_3D]=X(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Or),we(!1),Ot(Q0),tt(e.CULL_FACE),de($i);function tt(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function Ct(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function bt(L,ct){return u[L]!==ct?(e.bindFramebuffer(L,ct),u[L]=ct,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function At(L,ct){let q=v,St=!1;if(L){q=p.get(ct),q===void 0&&(q=[],p.set(ct,q));const ft=L.textures;if(q.length!==ft.length||q[0]!==e.COLOR_ATTACHMENT0){for(let et=0,Rt=ft.length;et<Rt;et++)q[et]=e.COLOR_ATTACHMENT0+et;q.length=ft.length,St=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,St=!0);St&&e.drawBuffers(q)}function le(L){return E!==L?(e.useProgram(L),E=L,!0):!1}const Xt={[ls]:e.FUNC_ADD,[KE]:e.FUNC_SUBTRACT,[QE]:e.FUNC_REVERSE_SUBTRACT};Xt[JE]=e.MIN,Xt[$E]=e.MAX;const ae={[tb]:e.ZERO,[eb]:e.ONE,[nb]:e.SRC_COLOR,[td]:e.SRC_ALPHA,[lb]:e.SRC_ALPHA_SATURATE,[rb]:e.DST_COLOR,[ab]:e.DST_ALPHA,[ib]:e.ONE_MINUS_SRC_COLOR,[ed]:e.ONE_MINUS_SRC_ALPHA,[ob]:e.ONE_MINUS_DST_COLOR,[sb]:e.ONE_MINUS_DST_ALPHA,[cb]:e.CONSTANT_COLOR,[ub]:e.ONE_MINUS_CONSTANT_COLOR,[fb]:e.CONSTANT_ALPHA,[hb]:e.ONE_MINUS_CONSTANT_ALPHA};function de(L,ct,q,St,ft,et,Rt,Bt,ze,pe){if(L===$i){g===!0&&(Ct(e.BLEND),g=!1);return}if(g===!1&&(tt(e.BLEND),g=!0),L!==jE){if(L!==f||pe!==U){if((m!==ls||C!==ls)&&(e.blendEquation(e.FUNC_ADD),m=ls,C=ls),pe)switch(L){case Mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eu:e.blendFunc(e.ONE,e.ONE);break;case J0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$t("WebGLState: Invalid blending: ",L);break}else switch(L){case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case eu:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case J0:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",L);break}_=null,M=null,b=null,R=null,x.set(0,0,0),A=0,f=L,U=pe}return}ft=ft||ct,et=et||q,Rt=Rt||St,(ct!==m||ft!==C)&&(e.blendEquationSeparate(Xt[ct],Xt[ft]),m=ct,C=ft),(q!==_||St!==M||et!==b||Rt!==R)&&(e.blendFuncSeparate(ae[q],ae[St],ae[et],ae[Rt]),_=q,M=St,b=et,R=Rt),(Bt.equals(x)===!1||ze!==A)&&(e.blendColor(Bt.r,Bt.g,Bt.b,ze),x.copy(Bt),A=ze),f=L,U=!1}function kt(L,ct){L.side===Wi?Ct(e.CULL_FACE):tt(e.CULL_FACE);let q=L.side===An;ct&&(q=!q),we(q),L.blending===Mr&&L.transparent===!1?de($i):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const St=L.stencilWrite;o.setTest(St),St&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),P(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):Ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){w!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),w=L)}function Ot(L){L!==YE?(tt(e.CULL_FACE),L!==I&&(L===Q0?e.cullFace(e.BACK):L===qE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ct(e.CULL_FACE),I=L}function Wt(L){L!==Y&&(N&&e.lineWidth(L),Y=L)}function P(L,ct,q){L?(tt(e.POLYGON_OFFSET_FILL),(j!==ct||z!==q)&&(j=ct,z=q,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,q))):Ct(e.POLYGON_OFFSET_FILL)}function Pe(L){L?tt(e.SCISSOR_TEST):Ct(e.SCISSOR_TEST)}function qt(L){L===void 0&&(L=e.TEXTURE0+D-1),it!==L&&(e.activeTexture(L),it=L)}function oe(L,ct,q){q===void 0&&(it===null?q=e.TEXTURE0+D-1:q=it);let St=vt[q];St===void 0&&(St={type:void 0,texture:void 0},vt[q]=St),(St.type!==L||St.texture!==ct)&&(it!==q&&(e.activeTexture(q),it=q),e.bindTexture(L,ct||rt[L]),St.type=L,St.texture=ct)}function dt(){const L=vt[it];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function S(){try{e.texSubImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function F(){try{e.texSubImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function nt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function ht(){try{e.texStorage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function W(){try{e.texImage2D(...arguments)}catch(L){$t("WebGLState:",L)}}function Q(){try{e.texImage3D(...arguments)}catch(L){$t("WebGLState:",L)}}function _t(L){return d[L]!==void 0?d[L]:e.getParameter(L)}function yt(L,ct){d[L]!==ct&&(e.pixelStorei(L,ct),d[L]=ct)}function ut(L){xt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),xt.copy(L))}function lt(L){st.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Nt(L,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let St=q.get(L);St===void 0&&(St=e.getUniformBlockIndex(ct,L.name),q.set(L,St))}function Ht(L,ct){const St=c.get(ct).get(L);l.get(ct)!==St&&(e.uniformBlockBinding(ct,St,L.__bindingPointIndex),l.set(ct,St))}function ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,vt={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,C=null,b=null,R=null,x=new Gt(0,0,0),A=0,U=!1,w=null,I=null,Y=null,j=null,z=null,xt.set(0,0,e.canvas.width,e.canvas.height),st.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:Ct,bindFramebuffer:bt,drawBuffers:At,useProgram:le,setBlending:de,setMaterial:kt,setFlipSided:we,setCullFace:Ot,setLineWidth:Wt,setPolygonOffset:P,setScissorTest:Pe,activeTexture:qt,bindTexture:oe,unbindTexture:dt,compressedTexImage2D:De,compressedTexImage3D:T,texImage2D:W,texImage3D:Q,pixelStorei:yt,getParameter:_t,updateUBOMapping:Nt,uniformBlockBinding:Ht,texStorage2D:ot,texStorage3D:ht,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:ut,viewport:lt,reset:ie}}function p2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,S){return v?new OffscreenCanvas(T,S):ou("canvas")}function g(T,S,F){let Z=1;const nt=De(T);if((nt.width>F||nt.height>F)&&(Z=F/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ot=Math.floor(Z*nt.width),ht=Math.floor(Z*nt.height);u===void 0&&(u=E(ot,ht));const W=S?E(ot,ht):u;return W.width=ot,W.height=ht,W.getContext("2d").drawImage(T,0,0,ot,ht),Ut("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ot+"x"+ht+")."),W}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(T,S,F,Z,nt,ot=!1){if(T!==null){if(e[T]!==void 0)return e[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht;Z&&(ht=t.get("EXT_texture_norm16"),ht||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===e.RED&&(F===e.FLOAT&&(W=e.R32F),F===e.HALF_FLOAT&&(W=e.R16F),F===e.UNSIGNED_BYTE&&(W=e.R8),F===e.UNSIGNED_SHORT&&ht&&(W=ht.R16_EXT),F===e.SHORT&&ht&&(W=ht.R16_SNORM_EXT)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.R8UI),F===e.UNSIGNED_SHORT&&(W=e.R16UI),F===e.UNSIGNED_INT&&(W=e.R32UI),F===e.BYTE&&(W=e.R8I),F===e.SHORT&&(W=e.R16I),F===e.INT&&(W=e.R32I)),S===e.RG&&(F===e.FLOAT&&(W=e.RG32F),F===e.HALF_FLOAT&&(W=e.RG16F),F===e.UNSIGNED_BYTE&&(W=e.RG8),F===e.UNSIGNED_SHORT&&ht&&(W=ht.RG16_EXT),F===e.SHORT&&ht&&(W=ht.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RG8UI),F===e.UNSIGNED_SHORT&&(W=e.RG16UI),F===e.UNSIGNED_INT&&(W=e.RG32UI),F===e.BYTE&&(W=e.RG8I),F===e.SHORT&&(W=e.RG16I),F===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RGB8UI),F===e.UNSIGNED_SHORT&&(W=e.RGB16UI),F===e.UNSIGNED_INT&&(W=e.RGB32UI),F===e.BYTE&&(W=e.RGB8I),F===e.SHORT&&(W=e.RGB16I),F===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),F===e.UNSIGNED_INT&&(W=e.RGBA32UI),F===e.BYTE&&(W=e.RGBA8I),F===e.SHORT&&(W=e.RGBA16I),F===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(F===e.UNSIGNED_SHORT&&ht&&(W=ht.RGB16_EXT),F===e.SHORT&&ht&&(W=ht.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){const Q=ot?su:te.getTransfer(nt);F===e.FLOAT&&(W=e.RGBA32F),F===e.HALF_FLOAT&&(W=e.RGBA16F),F===e.UNSIGNED_BYTE&&(W=Q===ce?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&ht&&(W=ht.RGBA16_EXT),F===e.SHORT&&ht&&(W=ht.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(T,S){let F;return T?S===null||S===Ci||S===Jo?F=e.DEPTH24_STENCIL8:S===Ei?F=e.DEPTH32F_STENCIL8:S===Qo&&(F=e.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===Jo?F=e.DEPTH_COMPONENT24:S===Ei?F=e.DEPTH_COMPONENT32F:S===Qo&&(F=e.DEPTH_COMPONENT16),F}function b(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function x(T){const S=T.target;S.removeEventListener("dispose",x),w(S)}function A(T){const S=i.get(T);if(S.__webglInit===void 0)return;const F=T.source,Z=p.get(F);if(Z){const nt=Z[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&U(T),Object.keys(Z).length===0&&p.delete(F)}i.remove(T)}function U(T){const S=i.get(T);e.deleteTexture(S.__webglTexture);const F=T.source,Z=p.get(F);delete Z[S.__cacheKey],r.memory.textures--}function w(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let nt=0;nt<S.__webglFramebuffer[Z].length;nt++)e.deleteFramebuffer(S.__webglFramebuffer[Z][nt]);else e.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[Z]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=T.textures;for(let Z=0,nt=F.length;Z<nt;Z++){const ot=i.get(F[Z]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(F[Z])}i.remove(T)}let I=0;function Y(){I=0}function j(){return I}function z(T){I=T}function D(){const T=I;return T>=a.maxTextures&&Ut("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),I+=1,T}function N(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function k(T,S){const F=i.get(T);if(T.isVideoTexture&&oe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const Z=T.image;if(Z===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(F,T,S);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function J(T,S){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Ct(F,T,S);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function it(T,S){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Ct(F,T,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function vt(T,S){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){bt(F,T,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}const $={[cd]:e.REPEAT,[ji]:e.CLAMP_TO_EDGE,[ud]:e.MIRRORED_REPEAT},at={[rn]:e.NEAREST,[mb]:e.NEAREST_MIPMAP_NEAREST,[Ll]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[Af]:e.LINEAR_MIPMAP_NEAREST,[us]:e.LINEAR_MIPMAP_LINEAR},xt={[vb]:e.NEVER,[Eb]:e.ALWAYS,[xb]:e.LESS,[em]:e.LEQUAL,[Sb]:e.EQUAL,[nm]:e.GEQUAL,[Mb]:e.GREATER,[yb]:e.NOTEQUAL};function st(T,S){if(S.type===Ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===Af||S.magFilter===Ll||S.magFilter===us||S.minFilter===pn||S.minFilter===Af||S.minFilter===Ll||S.minFilter===us)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,$[S.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,$[S.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,$[S.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,at[S.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Ll&&S.minFilter!==us||S.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function X(T,S){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let nt=p.get(Z);nt===void 0&&(nt={},p.set(Z,nt));const ot=N(S);if(ot!==T.__cacheKey){nt[ot]===void 0&&(nt[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),nt[ot].usedTimes++;const ht=nt[T.__cacheKey];ht!==void 0&&(nt[T.__cacheKey].usedTimes--,ht.usedTimes===0&&U(S)),T.__cacheKey=ot,T.__webglTexture=nt[ot].texture}return F}function rt(T,S,F){return Math.floor(Math.floor(T/F)/S)}function tt(T,S,F,Z){const ot=T.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,F,Z,S.data);else{ot.sort((yt,ut)=>yt.start-ut.start);let ht=0;for(let yt=1;yt<ot.length;yt++){const ut=ot[ht],lt=ot[yt],Nt=ut.start+ut.count,Ht=rt(lt.start,S.width,4),ie=rt(ut.start,S.width,4);lt.start<=Nt+1&&Ht===ie&&rt(lt.start+lt.count-1,S.width,4)===Ht?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++ht,ot[ht]=lt)}ot.length=ht+1;const W=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),_t=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let yt=0,ut=ot.length;yt<ut;yt++){const lt=ot[yt],Nt=Math.floor(lt.start/4),Ht=Math.ceil(lt.count/4),ie=Nt%S.width,L=Math.floor(Nt/S.width),ct=Ht,q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,ie,L,ct,q,F,Z,S.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,_t)}}function Ct(T,S,F){let Z=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=e.TEXTURE_3D);const nt=X(T,S),ot=S.source;n.bindTexture(Z,T.__webglTexture,e.TEXTURE0+F);const ht=i.get(ot);if(ot.version!==ht.__version||nt===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const q=te.getPrimaries(te.workingColorSpace),St=S.colorSpace===Aa?null:te.getPrimaries(S.colorSpace),ft=S.colorSpace===Aa||q===St?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=g(S.image,!1,a.maxTextureSize);Q=dt(S,Q);const _t=s.convert(S.format,S.colorSpace),yt=s.convert(S.type);let ut=M(S.internalFormat,_t,yt,S.normalized,S.colorSpace,S.isVideoTexture);st(Z,S);let lt;const Nt=S.mipmaps,Ht=S.isVideoTexture!==!0,ie=ht.__version===void 0||nt===!0,L=ot.dataReady,ct=b(S,Q);if(S.isDepthTexture)ut=C(S.format===fs,S.type),ie&&(Ht?n.texStorage2D(e.TEXTURE_2D,1,ut,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,ut,Q.width,Q.height,0,_t,yt,null));else if(S.isDataTexture)if(Nt.length>0){Ht&&ie&&n.texStorage2D(e.TEXTURE_2D,ct,ut,Nt[0].width,Nt[0].height);for(let q=0,St=Nt.length;q<St;q++)lt=Nt[q],Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,lt.width,lt.height,_t,yt,lt.data):n.texImage2D(e.TEXTURE_2D,q,ut,lt.width,lt.height,0,_t,yt,lt.data);S.generateMipmaps=!1}else Ht?(ie&&n.texStorage2D(e.TEXTURE_2D,ct,ut,Q.width,Q.height),L&&tt(S,Q,_t,yt)):n.texImage2D(e.TEXTURE_2D,0,ut,Q.width,Q.height,0,_t,yt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ut,Nt[0].width,Nt[0].height,Q.depth);for(let q=0,St=Nt.length;q<St;q++)if(lt=Nt[q],S.format!==hi)if(_t!==null)if(Ht){if(L)if(S.layerUpdates.size>0){const ft=wg(lt.width,lt.height,S.format,S.type);for(const et of S.layerUpdates){const Rt=lt.data.subarray(et*ft/lt.data.BYTES_PER_ELEMENT,(et+1)*ft/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,et,lt.width,lt.height,1,_t,Rt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,Q.depth,_t,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,ut,lt.width,lt.height,Q.depth,0,lt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,Q.depth,_t,yt,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,q,ut,lt.width,lt.height,Q.depth,0,_t,yt,lt.data)}else{Ht&&ie&&n.texStorage2D(e.TEXTURE_2D,ct,ut,Nt[0].width,Nt[0].height);for(let q=0,St=Nt.length;q<St;q++)lt=Nt[q],S.format!==hi?_t!==null?Ht?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,lt.width,lt.height,_t,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,q,ut,lt.width,lt.height,0,lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,lt.width,lt.height,_t,yt,lt.data):n.texImage2D(e.TEXTURE_2D,q,ut,lt.width,lt.height,0,_t,yt,lt.data)}else if(S.isDataArrayTexture)if(Ht){if(ie&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ut,Q.width,Q.height,Q.depth),L)if(S.layerUpdates.size>0){const q=wg(Q.width,Q.height,S.format,S.type);for(const St of S.layerUpdates){const ft=Q.data.subarray(St*q/Q.data.BYTES_PER_ELEMENT,(St+1)*q/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,St,Q.width,Q.height,1,_t,yt,ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_t,yt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ut,Q.width,Q.height,Q.depth,0,_t,yt,Q.data);else if(S.isData3DTexture)Ht?(ie&&n.texStorage3D(e.TEXTURE_3D,ct,ut,Q.width,Q.height,Q.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_t,yt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,ut,Q.width,Q.height,Q.depth,0,_t,yt,Q.data);else if(S.isFramebufferTexture){if(ie)if(Ht)n.texStorage2D(e.TEXTURE_2D,ct,ut,Q.width,Q.height);else{let q=Q.width,St=Q.height;for(let ft=0;ft<ct;ft++)n.texImage2D(e.TEXTURE_2D,ft,ut,q,St,0,_t,yt,null),q>>=1,St>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){const q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Q.parentNode!==q){q.appendChild(Q),d.add(S),q.onpaint=Bt=>{const ze=Bt.changedElements;for(const pe of d)ze.includes(pe.image)&&(pe.needsUpdate=!0)},q.requestPaint();return}const St=0,ft=e.RGBA,et=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,St,ft,et,Rt,Q),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ht&&ie){const q=De(Nt[0]);n.texStorage2D(e.TEXTURE_2D,ct,ut,q.width,q.height)}for(let q=0,St=Nt.length;q<St;q++)lt=Nt[q],Ht?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,_t,yt,lt):n.texImage2D(e.TEXTURE_2D,q,ut,_t,yt,lt);S.generateMipmaps=!1}else if(Ht){if(ie){const q=De(Q);n.texStorage2D(e.TEXTURE_2D,ct,ut,q.width,q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,_t,yt,Q)}else n.texImage2D(e.TEXTURE_2D,0,ut,_t,yt,Q);f(S)&&m(Z),ht.__version=ot.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function bt(T,S,F){if(S.image.length!==6)return;const Z=X(T,S),nt=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+F);const ot=i.get(nt);if(nt.version!==ot.__version||Z===!0){n.activeTexture(e.TEXTURE0+F);const ht=te.getPrimaries(te.workingColorSpace),W=S.colorSpace===Aa?null:te.getPrimaries(S.colorSpace),Q=S.colorSpace===Aa||ht===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const _t=S.isCompressedTexture||S.image[0].isCompressedTexture,yt=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!_t&&!yt?ut[et]=g(S.image[et],!0,a.maxCubemapSize):ut[et]=yt?S.image[et].image:S.image[et],ut[et]=dt(S,ut[et]);const lt=ut[0],Nt=s.convert(S.format,S.colorSpace),Ht=s.convert(S.type),ie=M(S.internalFormat,Nt,Ht,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,ct=ot.__version===void 0||Z===!0,q=nt.dataReady;let St=b(S,lt);st(e.TEXTURE_CUBE_MAP,S);let ft;if(_t){L&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,St,ie,lt.width,lt.height);for(let et=0;et<6;et++){ft=ut[et].mipmaps;for(let Rt=0;Rt<ft.length;Rt++){const Bt=ft[Rt];S.format!==hi?Nt!==null?L?q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Bt.width,Bt.height,Nt,Bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,ie,Bt.width,Bt.height,0,Bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Bt.width,Bt.height,Nt,Ht,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,ie,Bt.width,Bt.height,0,Nt,Ht,Bt.data)}}}else{if(ft=S.mipmaps,L&&ct){ft.length>0&&St++;const et=De(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,St,ie,et.width,et.height)}for(let et=0;et<6;et++)if(yt){L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,Nt,Ht,ut[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,ut[et].width,ut[et].height,0,Nt,Ht,ut[et].data);for(let Rt=0;Rt<ft.length;Rt++){const ze=ft[Rt].image[et].image;L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,ze.width,ze.height,Nt,Ht,ze.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,ie,ze.width,ze.height,0,Nt,Ht,ze.data)}}else{L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,Ht,ut[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Nt,Ht,ut[et]);for(let Rt=0;Rt<ft.length;Rt++){const Bt=ft[Rt];L?q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,Nt,Ht,Bt.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,ie,Nt,Ht,Bt.image[et])}}}f(S)&&m(e.TEXTURE_CUBE_MAP),ot.__version=nt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function At(T,S,F,Z,nt,ot){const ht=s.convert(F.format,F.colorSpace),W=s.convert(F.type),Q=M(F.internalFormat,ht,W,F.normalized,F.colorSpace),_t=i.get(S),yt=i.get(F);if(yt.__renderTarget=S,!_t.__hasExternalTextures){const ut=Math.max(1,S.width>>ot),lt=Math.max(1,S.height>>ot);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,ot,Q,ut,lt,S.depth,0,ht,W,null):n.texImage2D(nt,ot,Q,ut,lt,0,ht,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),qt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,nt,yt.__webglTexture,0,Pe(S)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,nt,yt.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(T,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,T),S.depthBuffer){const Z=S.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,ot=C(S.stencilBuffer,nt),ht=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;qt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(S),ot,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(S),ot,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ot,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,T)}else{const Z=S.textures;for(let nt=0;nt<Z.length;nt++){const ot=Z[nt],ht=s.convert(ot.format,ot.colorSpace),W=s.convert(ot.type),Q=M(ot.internalFormat,ht,W,ot.normalized,ot.colorSpace);qt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(S),Q,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(S),Q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Q,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Xt(T,S,F){const Z=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(S.depthTexture);if(nt.__renderTarget=S,(!nt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),st(e.TEXTURE_CUBE_MAP,S.depthTexture);const _t=s.convert(S.depthTexture.format),yt=s.convert(S.depthTexture.type);let ut;S.depthTexture.format===la?ut=e.DEPTH_COMPONENT24:S.depthTexture.format===fs&&(ut=e.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,S.width,S.height,0,_t,yt,null)}}else k(S.depthTexture,0);const ot=nt.__webglTexture,ht=Pe(S),W=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,Q=S.depthTexture.format===fs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===la)qt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,W,ot,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,Q,W,ot,0);else if(S.depthTexture.format===fs)qt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,W,ot,0,ht):e.framebufferTexture2D(e.FRAMEBUFFER,Q,W,ot,0);else throw new Error("Unknown depthTexture format")}function ae(T){const S=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=Z}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Xt(S.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Xt(S.__webglFramebuffer[0],T,0):Xt(S.__webglFramebuffer,T,0)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=e.createRenderbuffer(),le(S.__webglDepthbuffer[Z],T,!1);else{const nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,ot)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),le(S.__webglDepthbuffer,T,!1);else{const nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(T,S,F){const Z=i.get(T);S!==void 0&&At(Z.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&ae(T)}function kt(T){const S=T.texture,F=i.get(T),Z=i.get(S);T.addEventListener("dispose",x);const nt=T.textures,ot=T.isWebGLCubeRenderTarget===!0,ht=nt.length>1;if(ht||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=S.version,r.memory.textures++),ot){F.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[W]=[];for(let Q=0;Q<S.mipmaps.length;Q++)F.__webglFramebuffer[W][Q]=e.createFramebuffer()}else F.__webglFramebuffer[W]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)F.__webglFramebuffer[W]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(ht)for(let W=0,Q=nt.length;W<Q;W++){const _t=i.get(nt[W]);_t.__webglTexture===void 0&&(_t.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&qt(T)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<nt.length;W++){const Q=nt[W];F.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[W]);const _t=s.convert(Q.format,Q.colorSpace),yt=s.convert(Q.type),ut=M(Q.internalFormat,_t,yt,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),lt=Pe(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ut,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,F.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),le(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),st(e.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)At(F.__webglFramebuffer[W][Q],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q);else At(F.__webglFramebuffer[W],T,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(S)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ht){for(let W=0,Q=nt.length;W<Q;W++){const _t=nt[W],yt=i.get(_t);let ut=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,yt.__webglTexture),st(ut,_t),At(F.__webglFramebuffer,T,_t,e.COLOR_ATTACHMENT0+W,ut,0),f(_t)&&m(ut)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,Z.__webglTexture),st(W,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)At(F.__webglFramebuffer[Q],T,S,e.COLOR_ATTACHMENT0,W,Q);else At(F.__webglFramebuffer,T,S,e.COLOR_ATTACHMENT0,W,0);f(S)&&m(W),n.unbindTexture()}T.depthBuffer&&ae(T)}function we(T){const S=T.textures;for(let F=0,Z=S.length;F<Z;F++){const nt=S[F];if(f(nt)){const ot=_(T),ht=i.get(nt).__webglTexture;n.bindTexture(ot,ht),m(ot),n.unbindTexture()}}}const Ot=[],Wt=[];function P(T){if(T.samples>0){if(qt(T)===!1){const S=T.textures,F=T.width,Z=T.height;let nt=e.COLOR_BUFFER_BIT;const ot=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(T),W=S.length>1;if(W)for(let _t=0;_t<S.length;_t++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const Q=T.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[_t]);const yt=i.get(S[_t]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,yt,0)}e.blitFramebuffer(0,0,F,Z,0,0,F,Z,nt,e.NEAREST),l===!0&&(Ot.length=0,Wt.length=0,Ot.push(e.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ot.push(ot),Wt.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Wt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let _t=0;_t<S.length;_t++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.RENDERBUFFER,ht.__webglColorRenderbuffer[_t]);const yt=i.get(S[_t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.TEXTURE_2D,yt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Pe(T){return Math.min(a.maxSamples,T.samples)}function qt(T){const S=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(T){const S=r.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function dt(T,S){const F=T.colorSpace,Z=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==au&&F!==Aa&&(te.getTransfer(F)===ce?(Z!==hi||nt!==ti)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",F)),S}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=vt,this.rebindTextures=de,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=At,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function m2(e,t){function n(i,a=Aa){let s;const r=te.getTransfer(a);if(i===ti)return e.UNSIGNED_BYTE;if(i===Kp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===dS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===pS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===fS)return e.BYTE;if(i===hS)return e.SHORT;if(i===Qo)return e.UNSIGNED_SHORT;if(i===jp)return e.INT;if(i===Ci)return e.UNSIGNED_INT;if(i===Ei)return e.FLOAT;if(i===oa)return e.HALF_FLOAT;if(i===mS)return e.ALPHA;if(i===gS)return e.RGB;if(i===hi)return e.RGBA;if(i===la)return e.DEPTH_COMPONENT;if(i===fs)return e.DEPTH_STENCIL;if(i===_S)return e.RED;if(i===Jp)return e.RED_INTEGER;if(i===Es)return e.RG;if(i===$p)return e.RG_INTEGER;if(i===tm)return e.RGBA_INTEGER;if(i===Mc||i===yc||i===Ec||i===bc)if(r===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===hd||i===dd||i===pd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===md||i===gd||i===_d||i===vd||i===xd||i===nu||i===Sd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===md||i===gd)return r===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vd)return s.COMPRESSED_R11_EAC;if(i===xd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nu)return s.COMPRESSED_RG11_EAC;if(i===Sd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Md||i===yd||i===Ed||i===bd||i===Td||i===Ad||i===Rd||i===Cd||i===wd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Md)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Td)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Od)return r===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pd||i===zd||i===Bd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Pd)return r===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===Fd||i===iu||i===Hd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Id)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const g2=`
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

}`;class v2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new RS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new di({vertexShader:g2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dn(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends ws{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new v2,f={},m=n.getContextAttributes();let _=null,M=null;const C=[],b=[],R=new Vt;let x=null;const A=new Kn;A.viewport=new He;const U=new Kn;U.viewport=new He;const w=[A,U],I=new wT;let Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=C[X];return rt===void 0&&(rt=new Nf,C[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=C[X];return rt===void 0&&(rt=new Nf,C[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=C[X];return rt===void 0&&(rt=new Nf,C[X]=rt),rt.getHandSpace()};function z(X){const rt=b.indexOf(X.inputSource);if(rt===-1)return;const tt=C[rt];tt!==void 0&&(tt.update(X.inputSource,X.frame,c||r),tt.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",D),a.removeEventListener("inputsourceschange",N);for(let X=0;X<C.length;X++){const rt=b[X];rt!==null&&(b[X]=null,C[X].disconnect(rt))}Y=null,j=null,g.reset();for(const X in f)delete f[X];t.setRenderTarget(_),p=null,u=null,d=null,a=null,M=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",D),a.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,Ct=null,bt=null;m.depth&&(bt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=m.stencil?fs:la,Ct=m.stencil?Jo:Ci);const At={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(At),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ri(u.textureWidth,u.textureHeight,{format:hi,type:ti,depthTexture:new zr(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,tt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ri(p.framebufferWidth,p.framebufferHeight,{format:hi,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),st.setContext(a),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(X){for(let rt=0;rt<X.removed.length;rt++){const tt=X.removed[rt],Ct=b.indexOf(tt);Ct>=0&&(b[Ct]=null,C[Ct].disconnect(tt))}for(let rt=0;rt<X.added.length;rt++){const tt=X.added[rt];let Ct=b.indexOf(tt);if(Ct===-1){for(let At=0;At<C.length;At++)if(At>=b.length){b.push(tt),Ct=At;break}else if(b[At]===null){b[At]=tt,Ct=At;break}if(Ct===-1)break}const bt=C[Ct];bt&&bt.connect(tt)}}const k=new O,J=new O;function it(X,rt,tt){k.setFromMatrixPosition(rt.matrixWorld),J.setFromMatrixPosition(tt.matrixWorld);const Ct=k.distanceTo(J),bt=rt.projectionMatrix.elements,At=tt.projectionMatrix.elements,le=bt[14]/(bt[10]-1),Xt=bt[14]/(bt[10]+1),ae=(bt[9]+1)/bt[5],de=(bt[9]-1)/bt[5],kt=(bt[8]-1)/bt[0],we=(At[8]+1)/At[0],Ot=le*kt,Wt=le*we,P=Ct/(-kt+we),Pe=P*-kt;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(P),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const qt=le+P,oe=Xt+P,dt=Ot-Pe,De=Wt+(Ct-Pe),T=ae*Xt/oe*qt,S=de*Xt/oe*qt;X.projectionMatrix.makePerspective(dt,De,T,S,qt,oe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function vt(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let rt=X.near,tt=X.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(tt=g.depthFar)),I.near=U.near=A.near=rt,I.far=U.far=A.far=tt,(Y!==I.near||j!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),Y=I.near,j=I.far),I.layers.mask=X.layers.mask|6,A.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Ct=X.parent,bt=I.cameras;vt(I,Ct);for(let At=0;At<bt.length;At++)vt(bt[At],Ct);bt.length===2?it(I,A,U):I.projectionMatrix.copy(A.projectionMatrix),$(X,I,Ct)};function $(X,rt,tt){tt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$o*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(X){return f[X]};let at=null;function xt(X,rt){if(h=rt.getViewerPose(c||r),v=rt,h!==null){const tt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ct=!1;tt.length!==I.cameras.length&&(I.cameras.length=0,Ct=!0);for(let Xt=0;Xt<tt.length;Xt++){const ae=tt[Xt];let de=null;if(p!==null)de=p.getViewport(ae);else{const we=d.getViewSubImage(u,ae);de=we.viewport,Xt===0&&(t.setRenderTargetTextures(M,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(M))}let kt=w[Xt];kt===void 0&&(kt=new Kn,kt.layers.enable(Xt),kt.viewport=new He,w[Xt]=kt),kt.matrix.fromArray(ae.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ae.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(de.x,de.y,de.width,de.height),Xt===0&&(I.matrix.copy(kt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ct===!0&&I.cameras.push(kt)}const bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const Xt=d.getDepthInformation(tt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,a.renderState)}if(bt&&bt.includes("camera-access")&&E){t.state.unbindTexture(),d=i.getBinding();for(let Xt=0;Xt<tt.length;Xt++){const ae=tt[Xt].camera;if(ae){let de=f[ae];de||(de=new RS,f[ae]=de);const kt=d.getCameraImage(ae);de.sourceTexture=kt}}}}for(let tt=0;tt<C.length;tt++){const Ct=b[tt],bt=C[tt];Ct!==null&&bt!==void 0&&bt.update(Ct,rt,c||r)}at&&at(X,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),v=null}const st=new US;st.setAnimationLoop(xt),this.setAnimationLoop=function(X){at=X},this.dispose=function(){}}}const S2=new Oe,IS=new Pt;IS.set(-1,0,0,0,1,0,0,0,1);function M2(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,CS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===An&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===An&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(IS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function y2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=a[m.id];M===void 0&&(v(m),M=h(m),a[m.id]=M,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function h(m){const _=d();m.__bindingPointIndex=_;const M=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,M),M}function d(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],M=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=M.length;b<R;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,U=x.length;A<U;A++){const w=x[A];if(p(w,b,A,C)===!0){const I=w.__offset,Y=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let z=0;z<Y.length;z++){const D=Y[z],N=E(D);typeof D=="number"||typeof D=="boolean"?(w.__data[0]=D,e.bufferSubData(e.UNIFORM_BUFFER,I+j,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=0,w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=0,w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=0):ArrayBuffer.isView(D)?w.__data.set(new D.constructor(D.buffer,D.byteOffset,w.__data.length)):(D.toArray(w.__data,j),j+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,w.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,M,C){const b=m.value,R=_+"_"+M;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let M=0;const C=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let U=0,w=A.length;U<w;U++){const I=A[U],Y=Array.isArray(I.value)?I.value:[I.value];for(let j=0,z=Y.length;j<z;j++){const D=Y[j],N=E(D),k=M%C,J=k%N.boundary,it=k+J;M+=J,it!==0&&C-it<N.storage&&(M+=C-it),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=N.storage}}}const b=M%C;return b>0&&(M+=C-b),m.__size=M,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const E2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function b2(){return vi===null&&(vi=new fT(E2,16,16,Es,oa),vi.name="DFG_LUT",vi.minFilter=pn,vi.magFilter=pn,vi.wrapS=ji,vi.wrapT=ji,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class T2{constructor(t={}){const{canvas:n=Tb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const E=p,g=new Set([tm,$p,Jp]),f=new Set([ti,Ci,Qo,Jo,Kp,Qp]),m=new Uint32Array(4),_=new Int32Array(4),M=new O;let C=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let w=!1,I=null;this._outputColorSpace=Yn;let Y=0,j=0,z=null,D=-1,N=null;const k=new He,J=new He;let it=null;const vt=new Gt(0);let $=0,at=n.width,xt=n.height,st=1,X=null,rt=null;const tt=new He(0,0,at,xt),Ct=new He(0,0,at,xt);let bt=!1;const At=new TS;let le=!1,Xt=!1;const ae=new Oe,de=new O,kt=new He,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Wt(){return z===null?st:1}let P=i;function Pe(y,B){return n.getContext(y,B)}try{const y={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",Bt,!1),P===null){const B="webgl2";if(P=Pe(B,y),P===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw $t("WebGLRenderer: "+y.message),y}let qt,oe,dt,De,T,S,F,Z,nt,ot,ht,W,Q,_t,yt,ut,lt,Nt,Ht,ie,L,ct,q;function St(){qt=new bR(P),qt.init(),L=new m2(P,qt),oe=new gR(P,qt,t,L),dt=new d2(P,qt),oe.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),De=new RR(P),T=new $3,S=new p2(P,qt,dt,T,oe,L,De),F=new ER(U),Z=new UT(P),ct=new pR(P,Z),nt=new TR(P,Z,De,ct),ot=new wR(P,nt,Z,ct,De),Nt=new CR(P,oe,S),yt=new _R(T),ht=new J3(U,F,qt,oe,ct,yt),W=new M2(U,T),Q=new e2,_t=new o2(qt),lt=new dR(U,F,dt,ot,v,l),ut=new h2(U,ot,oe),q=new y2(P,De,oe,dt),Ht=new mR(P,qt,De),ie=new AR(P,qt,De),De.programs=ht.programs,U.capabilities=oe,U.extensions=qt,U.properties=T,U.renderLists=Q,U.shadowMap=ut,U.state=dt,U.info=De}St(),E!==ti&&(A=new UR(E,n.width,n.height,a,s));const ft=new x2(U,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=qt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){y!==void 0&&(st=y,this.setSize(at,xt,!1))},this.getSize=function(y){return y.set(at,xt)},this.setSize=function(y,B,V=!0){if(ft.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}at=y,xt=B,n.width=Math.floor(y*st),n.height=Math.floor(B*st),V===!0&&(n.style.width=y+"px",n.style.height=B+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(at*st,xt*st).floor()},this.setDrawingBufferSize=function(y,B,V){at=y,xt=B,st=V,n.width=Math.floor(y*V),n.height=Math.floor(B*V),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(E===ti){$t("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){Ut("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(k)},this.getViewport=function(y){return y.copy(tt)},this.setViewport=function(y,B,V,H){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,B,V,H),dt.viewport(k.copy(tt).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(Ct)},this.setScissor=function(y,B,V,H){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,B,V,H),dt.scissor(J.copy(Ct).multiplyScalar(st).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(y){dt.setScissorTest(bt=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){rt=y},this.getClearColor=function(y){return y.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,V=!0){let H=0;if(y){let G=!1;if(z!==null){const gt=z.texture.format;G=g.has(gt)}if(G){const gt=z.texture.type,Et=f.has(gt),mt=lt.getClearColor(),Tt=lt.getClearAlpha(),wt=mt.r,It=mt.g,Zt=mt.b;Et?(m[0]=wt,m[1]=It,m[2]=Zt,m[3]=Tt,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=wt,_[1]=It,_[2]=Zt,_[3]=Tt,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}B&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",Bt,!1),lt.dispose(),Q.dispose(),_t.dispose(),T.dispose(),F.dispose(),ot.dispose(),ct.dispose(),q.dispose(),ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",mm),ft.removeEventListener("sessionend",gm),Qa.stop()};function et(y){y.preventDefault(),lu("WebGLRenderer: Context Lost."),w=!0}function Rt(){lu("WebGLRenderer: Context Restored."),w=!1;const y=De.autoReset,B=ut.enabled,V=ut.autoUpdate,H=ut.needsUpdate,G=ut.type;St(),De.autoReset=y,ut.enabled=B,ut.autoUpdate=V,ut.needsUpdate=H,ut.type=G}function Bt(y){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){const B=y.target;B.removeEventListener("dispose",ze),pe(B)}function pe(y){Ui(y),T.remove(y)}function Ui(y){const B=T.get(y).programs;B!==void 0&&(B.forEach(function(V){ht.releaseProgram(V)}),y.isShaderMaterial&&ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,V,H,G,gt){B===null&&(B=we);const Et=G.isMesh&&G.matrixWorld.determinant()<0,mt=GS(y,B,V,H,G);dt.setMaterial(H,Et);let Tt=V.index,wt=1;if(H.wireframe===!0){if(Tt=nt.getWireframeAttribute(V),Tt===void 0)return;wt=2}const It=V.drawRange,Zt=V.attributes.position;let Dt=It.start*wt,me=(It.start+It.count)*wt;gt!==null&&(Dt=Math.max(Dt,gt.start*wt),me=Math.min(me,(gt.start+gt.count)*wt)),Tt!==null?(Dt=Math.max(Dt,0),me=Math.min(me,Tt.count)):Zt!=null&&(Dt=Math.max(Dt,0),me=Math.min(me,Zt.count));const Be=me-Dt;if(Be<0||Be===1/0)return;ct.setup(G,H,mt,V,Tt);let Ue,ve=Ht;if(Tt!==null&&(Ue=Z.get(Tt),ve=ie,ve.setIndex(Ue)),G.isMesh)H.wireframe===!0?(dt.setLineWidth(H.wireframeLinewidth*Wt()),ve.setMode(P.LINES)):ve.setMode(P.TRIANGLES);else if(G.isLine){let un=H.linewidth;un===void 0&&(un=1),dt.setLineWidth(un*Wt()),G.isLineSegments?ve.setMode(P.LINES):G.isLineLoop?ve.setMode(P.LINE_LOOP):ve.setMode(P.LINE_STRIP)}else G.isPoints?ve.setMode(P.POINTS):G.isSprite&&ve.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))ve.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const un=G._multiDrawStarts,Mt=G._multiDrawCounts,Dn=G._multiDrawCount,ne=Tt?Z.get(Tt).bytesPerElement:1,Xn=T.get(H).currentProgram.getUniforms();for(let gi=0;gi<Dn;gi++)Xn.setValue(P,"_gl_DrawID",gi),ve.render(un[gi]/ne,Mt[gi])}else if(G.isInstancedMesh)ve.renderInstances(Dt,Be,G.count);else if(V.isInstancedBufferGeometry){const un=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mt=Math.min(V.instanceCount,un);ve.renderInstances(Dt,Be,Mt)}else ve.render(Dt,Be)};function mi(y,B,V){y.transparent===!0&&y.side===Wi&&y.forceSinglePass===!1?(y.side=An,y.needsUpdate=!0,ml(y,B,V),y.side=qa,y.needsUpdate=!0,ml(y,B,V),y.side=Wi):ml(y,B,V)}this.compile=function(y,B,V=null){V===null&&(V=y),b=_t.get(V),b.init(B),x.push(b),V.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const mt=gt[Et];mi(mt,V,G),H.add(mt)}else mi(gt,V,G),H.add(gt)}),b=x.pop(),H},this.compileAsync=function(y,B,V=null){const H=this.compile(y,B,V);return new Promise(G=>{function gt(){if(H.forEach(function(Et){T.get(Et).currentProgram.isReady()&&H.delete(Et)}),H.size===0){G(y);return}setTimeout(gt,10)}qt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Iu=null;function FS(y){Iu&&Iu(y)}function mm(){Qa.stop()}function gm(){Qa.start()}const Qa=new US;Qa.setAnimationLoop(FS),typeof self<"u"&&Qa.setContext(self),this.setAnimationLoop=function(y){Iu=y,ft.setAnimationLoop(y),y===null?Qa.stop():Qa.start()},ft.addEventListener("sessionstart",mm),ft.addEventListener("sessionend",gm),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I!==null&&I.renderStart(y,B);const V=ft.enabled===!0&&ft.isPresenting===!0,H=A!==null&&(z===null||V)&&A.begin(U,z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(B),B=ft.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,B,z),b=_t.get(y,x.length),b.init(B),b.state.textureUnits=S.getTextureUnits(),x.push(b),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),At.setFromProjectionMatrix(ae,bi,B.reversedDepth),Xt=this.localClippingEnabled,le=yt.init(this.clippingPlanes,Xt),C=Q.get(y,R.length),C.init(),R.push(C),ft.enabled===!0&&ft.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&Fu(Et,B,-1/0,U.sortObjects)}Fu(y,B,0,U.sortObjects),C.finish(),U.sortObjects===!0&&C.sort(X,rt),Ot=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ot&&lt.addToRenderList(C,y),this.info.render.frame++,le===!0&&yt.beginShadows();const G=b.state.shadowsArray;if(ut.render(G,y,B),le===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Et=C.opaque,mt=C.transmissive;if(b.setupLights(),B.isArrayCamera){const Tt=B.cameras;if(mt.length>0)for(let wt=0,It=Tt.length;wt<It;wt++){const Zt=Tt[wt];vm(Et,mt,y,Zt)}Ot&&lt.render(y);for(let wt=0,It=Tt.length;wt<It;wt++){const Zt=Tt[wt];_m(C,y,Zt,Zt.viewport)}}else mt.length>0&&vm(Et,mt,y,B),Ot&&lt.render(y),_m(C,y,B)}z!==null&&j===0&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),H&&A.end(U),y.isScene===!0&&y.onAfterRender(U,y,B),ct.resetDefaultState(),D=-1,N=null,x.pop(),x.length>0?(b=x[x.length-1],S.setTextureUnits(b.state.textureUnits),le===!0&&yt.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,I!==null&&I.renderEnd()};function Fu(y,B,V,H){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||At.intersectsSprite(y)){H&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ae);const Et=ot.update(y),mt=y.material;mt.visible&&C.push(y,Et,mt,V,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||At.intersectsObject(y))){const Et=ot.update(y),mt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),kt.copy(Et.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(ae)),Array.isArray(mt)){const Tt=Et.groups;for(let wt=0,It=Tt.length;wt<It;wt++){const Zt=Tt[wt],Dt=mt[Zt.materialIndex];Dt&&Dt.visible&&C.push(y,Et,Dt,V,kt.z,Zt)}}else mt.visible&&C.push(y,Et,mt,V,kt.z,null)}}const gt=y.children;for(let Et=0,mt=gt.length;Et<mt;Et++)Fu(gt[Et],B,V,H)}function _m(y,B,V,H){const{opaque:G,transmissive:gt,transparent:Et}=y;b.setupLightsView(V),le===!0&&yt.setGlobalState(U.clippingPlanes,V),H&&dt.viewport(k.copy(H)),G.length>0&&pl(G,B,V),gt.length>0&&pl(gt,B,V),Et.length>0&&pl(Et,B,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function vm(y,B,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Dt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Ri(1,1,{generateMipmaps:!0,type:Dt?oa:ti,minFilter:us,samples:Math.max(4,oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const gt=b.state.transmissionRenderTarget[H.id],Et=H.viewport||k;gt.setSize(Et.z*U.transmissionResolutionScale,Et.w*U.transmissionResolutionScale);const mt=U.getRenderTarget(),Tt=U.getActiveCubeFace(),wt=U.getActiveMipmapLevel();U.setRenderTarget(gt),U.getClearColor(vt),$=U.getClearAlpha(),$<1&&U.setClearColor(16777215,.5),U.clear(),Ot&&lt.render(V);const It=U.toneMapping;U.toneMapping=Ai;const Zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),le===!0&&yt.setGlobalState(U.clippingPlanes,H),pl(y,V,H),S.updateMultisampleRenderTarget(gt),S.updateRenderTargetMipmap(gt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let me=0,Be=B.length;me<Be;me++){const Ue=B[me],{object:ve,geometry:un,material:Mt,group:Dn}=Ue;if(Mt.side===Wi&&ve.layers.test(H.layers)){const ne=Mt.side;Mt.side=An,Mt.needsUpdate=!0,xm(ve,V,H,un,Mt,Dn),Mt.side=ne,Mt.needsUpdate=!0,Dt=!0}}Dt===!0&&(S.updateMultisampleRenderTarget(gt),S.updateRenderTargetMipmap(gt))}U.setRenderTarget(mt,Tt,wt),U.setClearColor(vt,$),Zt!==void 0&&(H.viewport=Zt),U.toneMapping=It}function pl(y,B,V){const H=B.isScene===!0?B.overrideMaterial:null;for(let G=0,gt=y.length;G<gt;G++){const Et=y[G],{object:mt,geometry:Tt,group:wt}=Et;let It=Et.material;It.allowOverride===!0&&H!==null&&(It=H),mt.layers.test(V.layers)&&xm(mt,B,V,Tt,It,wt)}}function xm(y,B,V,H,G,gt){y.onBeforeRender(U,B,V,H,G,gt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(U,B,V,H,y,gt),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,U.renderBufferDirect(V,B,H,G,y,gt),G.side=qa,G.needsUpdate=!0,U.renderBufferDirect(V,B,H,G,y,gt),G.side=Wi):U.renderBufferDirect(V,B,H,G,y,gt),y.onAfterRender(U,B,V,H,G,gt)}function ml(y,B,V){B.isScene!==!0&&(B=we);const H=T.get(y),G=b.state.lights,gt=b.state.shadowsArray,Et=G.state.version,mt=ht.getParameters(y,G.state,gt,B,V,b.state.lightProbeGridArray),Tt=ht.getProgramCacheKey(mt);let wt=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const It=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=F.get(y.envMap||H.environment,It),H.envMapRotation=H.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",ze),wt=new Map,H.programs=wt);let Zt=wt.get(Tt);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===Et)return Mm(y,mt),Zt}else mt.uniforms=ht.getUniforms(y),I!==null&&y.isNodeMaterial&&I.build(y,V,mt),y.onBeforeCompile(mt,U),Zt=ht.acquireProgram(mt,Tt),wt.set(Tt,Zt),H.uniforms=mt.uniforms;const Dt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Dt.clippingPlanes=yt.uniform),Mm(y,mt),H.needsLights=XS(y),H.lightsStateVersion=Et,H.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Zt,H.uniformsList=null,Zt}function Sm(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Tc.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Mm(y,B){const V=T.get(y);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function HS(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let V=0,H=y.length;V<H;V++){const G=y[V];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function GS(y,B,V,H,G){B.isScene!==!0&&(B=we),S.resetTextureUnits();const gt=B.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,mt=z===null?U.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:te.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=F.get(H.envMap||Et,Tt),It=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!V.morphAttributes.position,me=!!V.morphAttributes.normal,Be=!!V.morphAttributes.color;let Ue=Ai;H.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ue=U.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,un=ve!==void 0?ve.length:0,Mt=T.get(H),Dn=b.state.lights;if(le===!0&&(Xt===!0||y!==N)){const Me=y===N&&H.id===D;yt.setState(H,y,Me)}let ne=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Dn.state.version||Mt.outputColorSpace!==mt||G.isBatchedMesh&&Mt.batching===!1||!G.isBatchedMesh&&Mt.batching===!0||G.isBatchedMesh&&Mt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Mt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Mt.instancing===!1||!G.isInstancedMesh&&Mt.instancing===!0||G.isSkinnedMesh&&Mt.skinning===!1||!G.isSkinnedMesh&&Mt.skinning===!0||G.isInstancedMesh&&Mt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Mt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Mt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Mt.instancingMorph===!1&&G.morphTexture!==null||Mt.envMap!==wt||H.fog===!0&&Mt.fog!==gt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==yt.numPlanes||Mt.numIntersection!==yt.numIntersection)||Mt.vertexAlphas!==It||Mt.vertexTangents!==Zt||Mt.morphTargets!==Dt||Mt.morphNormals!==me||Mt.morphColors!==Be||Mt.toneMapping!==Ue||Mt.morphTargetsCount!==un||!!Mt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Mt.__version=H.version);let Xn=Mt.currentProgram;ne===!0&&(Xn=ml(H,B,G),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Xn,Mt));let gi=!1,ua=!1,Us=!1;const xe=Xn.getUniforms(),Ie=Mt.uniforms;if(dt.useProgram(Xn.program)&&(gi=!0,ua=!0,Us=!0),H.id!==D&&(D=H.id,ua=!0),Mt.needsLights){const Me=HS(b.state.lightProbeGridArray,G);Mt.lightProbeGrid!==Me&&(Mt.lightProbeGrid=Me,ua=!0)}if(gi||N!==y){dt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(P,"projectionMatrix",y.projectionMatrix),xe.setValue(P,"viewMatrix",y.matrixWorldInverse);const ha=xe.map.cameraPosition;ha!==void 0&&ha.setValue(P,de.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),N!==y&&(N=y,ua=!0,Us=!0)}if(Mt.needsLights&&(Dn.state.directionalShadowMap.length>0&&xe.setValue(P,"directionalShadowMap",Dn.state.directionalShadowMap,S),Dn.state.spotShadowMap.length>0&&xe.setValue(P,"spotShadowMap",Dn.state.spotShadowMap,S),Dn.state.pointShadowMap.length>0&&xe.setValue(P,"pointShadowMap",Dn.state.pointShadowMap,S)),G.isSkinnedMesh){xe.setOptional(P,G,"bindMatrix"),xe.setOptional(P,G,"bindMatrixInverse");const Me=G.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(P,"boneTexture",Me.boneTexture,S))}G.isBatchedMesh&&(xe.setOptional(P,G,"batchingTexture"),xe.setValue(P,"batchingTexture",G._matricesTexture,S),xe.setOptional(P,G,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",G._indirectTexture,S),xe.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",G._colorsTexture,S));const fa=V.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&Nt.update(G,V,Xn),(ua||Mt.receiveShadow!==G.receiveShadow)&&(Mt.receiveShadow=G.receiveShadow,xe.setValue(P,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Ie.envMapIntensity.value=B.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=b2()),ua){if(xe.setValue(P,"toneMappingExposure",U.toneMappingExposure),Mt.needsLights&&VS(Ie,Us),gt&&H.fog===!0&&W.refreshFogUniforms(Ie,gt),W.refreshMaterialUniforms(Ie,H,st,xt,b.state.transmissionRenderTarget[y.id]),Mt.needsLights&&Mt.lightProbeGrid){const Me=Mt.lightProbeGrid;Ie.probesSH.value=Me.texture,Ie.probesMin.value.copy(Me.boundingBox.min),Ie.probesMax.value.copy(Me.boundingBox.max),Ie.probesResolution.value.copy(Me.resolution)}Tc.upload(P,Sm(Mt),Ie,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tc.upload(P,Sm(Mt),Ie,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(P,"center",G.center),xe.setValue(P,"modelViewMatrix",G.modelViewMatrix),xe.setValue(P,"normalMatrix",G.normalMatrix),xe.setValue(P,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const Me=H.uniformsGroups;for(let ha=0,Ls=Me.length;ha<Ls;ha++){const ym=Me[ha];q.update(ym,Xn),q.bind(ym,Xn)}}return Xn}function VS(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function XS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,B,V){const H=T.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(y.texture).__webglTexture=B,T.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const V=T.get(y);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0};const kS=P.createFramebuffer();this.setRenderTarget=function(y,B=0,V=0){z=y,Y=B,j=V;let H=null,G=!1,gt=!1;if(y){const mt=T.get(y);if(mt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(P.FRAMEBUFFER,mt.__webglFramebuffer),k.copy(y.viewport),J.copy(y.scissor),it=y.scissorTest,dt.viewport(k),dt.scissor(J),dt.setScissorTest(it),D=-1;return}else if(mt.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(mt.__hasExternalTextures)S.rebindTextures(y,T.get(y.texture).__webglTexture,T.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const It=y.depthTexture;if(mt.__boundDepthTexture!==It){if(It!==null&&T.has(It)&&(y.width!==It.image.width||y.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}const Tt=y.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(gt=!0);const wt=T.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[B])?H=wt[B][V]:H=wt[B],G=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?H=T.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[V]:H=wt,k.copy(y.viewport),J.copy(y.scissor),it=y.scissorTest}else k.copy(tt).multiplyScalar(st).floor(),J.copy(Ct).multiplyScalar(st).floor(),it=bt;if(V!==0&&(H=kS),dt.bindFramebuffer(P.FRAMEBUFFER,H)&&dt.drawBuffers(y,H),dt.viewport(k),dt.scissor(J),dt.setScissorTest(it),G){const mt=T.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,V)}else if(gt){const mt=B;for(let Tt=0;Tt<y.textures.length;Tt++){const wt=T.get(y.textures[Tt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Tt,wt.__webglTexture,V,mt)}}else if(y!==null&&V!==0){const mt=T.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,V)}D=-1},this.readRenderTargetPixels=function(y,B,V,H,G,gt,Et,mt=0){if(!(y&&y.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){dt.bindFramebuffer(P.FRAMEBUFFER,Tt);try{const wt=y.textures[mt],It=wt.format,Zt=wt.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),!oe.textureFormatReadable(It)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Zt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-H&&V>=0&&V<=y.height-G&&P.readPixels(B,V,H,G,L.convert(It),L.convert(Zt),gt)}finally{const wt=z!==null?T.get(z).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,B,V,H,G,gt,Et,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt)if(B>=0&&B<=y.width-H&&V>=0&&V<=y.height-G){dt.bindFramebuffer(P.FRAMEBUFFER,Tt);const wt=y.textures[mt],It=wt.format,Zt=wt.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),!oe.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(B,V,H,G,L.convert(It),L.convert(Zt),0);const me=z!==null?T.get(z).__webglFramebuffer:null;dt.bindFramebuffer(P.FRAMEBUFFER,me);const Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ab(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.deleteBuffer(Dt),P.deleteSync(Be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,V=0){const H=Math.pow(2,-V),G=Math.floor(y.image.width*H),gt=Math.floor(y.image.height*H),Et=B!==null?B.x:0,mt=B!==null?B.y:0;S.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Et,mt,G,gt),dt.unbindTexture()};const WS=P.createFramebuffer(),YS=P.createFramebuffer();this.copyTextureToTexture=function(y,B,V=null,H=null,G=0,gt=0){let Et,mt,Tt,wt,It,Zt,Dt,me,Be;const Ue=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(V!==null)Et=V.max.x-V.min.x,mt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,It=V.min.y,Zt=V.isBox3?V.min.z:0;else{const Ie=Math.pow(2,-G);Et=Math.floor(Ue.width*Ie),mt=Math.floor(Ue.height*Ie),y.isDataArrayTexture?Tt=Ue.depth:y.isData3DTexture?Tt=Math.floor(Ue.depth*Ie):Tt=1,wt=0,It=0,Zt=0}H!==null?(Dt=H.x,me=H.y,Be=H.z):(Dt=0,me=0,Be=0);const ve=L.convert(B.format),un=L.convert(B.type);let Mt;B.isData3DTexture?(S.setTexture3D(B,0),Mt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(S.setTexture2DArray(B,0),Mt=P.TEXTURE_2D_ARRAY):(S.setTexture2D(B,0),Mt=P.TEXTURE_2D),dt.activeTexture(P.TEXTURE0),dt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),dt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),dt.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Dn=dt.getParameter(P.UNPACK_ROW_LENGTH),ne=dt.getParameter(P.UNPACK_IMAGE_HEIGHT),Xn=dt.getParameter(P.UNPACK_SKIP_PIXELS),gi=dt.getParameter(P.UNPACK_SKIP_ROWS),ua=dt.getParameter(P.UNPACK_SKIP_IMAGES);dt.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),dt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),dt.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),dt.pixelStorei(P.UNPACK_SKIP_ROWS,It),dt.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt);const Us=y.isDataArrayTexture||y.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const Ie=T.get(y),fa=T.get(B),Me=T.get(Ie.__renderTarget),ha=T.get(fa.__renderTarget);dt.bindFramebuffer(P.READ_FRAMEBUFFER,Me.__webglFramebuffer),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Ls=0;Ls<Tt;Ls++)Us&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(y).__webglTexture,G,Zt+Ls),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(B).__webglTexture,gt,Be+Ls)),P.blitFramebuffer(wt,It,Et,mt,Dt,me,Et,mt,P.DEPTH_BUFFER_BIT,P.NEAREST);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||T.has(y)){const Ie=T.get(y),fa=T.get(B);dt.bindFramebuffer(P.READ_FRAMEBUFFER,WS),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,YS);for(let Me=0;Me<Tt;Me++)Us?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,G,Zt+Me):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,G),xe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fa.__webglTexture,gt,Be+Me):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fa.__webglTexture,gt),G!==0?P.blitFramebuffer(wt,It,Et,mt,Dt,me,Et,mt,P.COLOR_BUFFER_BIT,P.NEAREST):xe?P.copyTexSubImage3D(Mt,gt,Dt,me,Be+Me,wt,It,Et,mt):P.copyTexSubImage2D(Mt,gt,Dt,me,wt,It,Et,mt);dt.bindFramebuffer(P.READ_FRAMEBUFFER,null),dt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xe?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Mt,gt,Dt,me,Be,Et,mt,Tt,ve,un,Ue.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,gt,Dt,me,Be,Et,mt,Tt,ve,Ue.data):P.texSubImage3D(Mt,gt,Dt,me,Be,Et,mt,Tt,ve,un,Ue):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,gt,Dt,me,Et,mt,ve,un,Ue.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,gt,Dt,me,Ue.width,Ue.height,ve,Ue.data):P.texSubImage2D(P.TEXTURE_2D,gt,Dt,me,Et,mt,ve,un,Ue);dt.pixelStorei(P.UNPACK_ROW_LENGTH,Dn),dt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ne),dt.pixelStorei(P.UNPACK_SKIP_PIXELS,Xn),dt.pixelStorei(P.UNPACK_SKIP_ROWS,gi),dt.pixelStorei(P.UNPACK_SKIP_IMAGES,ua),gt===0&&B.generateMipmaps&&P.generateMipmap(Mt),dt.unbindTexture()},this.initRenderTarget=function(y){T.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){Y=0,j=0,z=null,dt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),n.unpackColorSpace=te._getUnpackColorSpace()}}const A2=()=>{const e=Vi.useRef(),[t,n]=Vi.useState(0),[i,a]=Vi.useState(0),[s,r]=Vi.useState(!1),[o,l]=Vi.useState(!1),c={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},h={skyTwilight:988970,fogColor:132631,snow:new Gt(2236966),pink:new Gt(16756684),blue:new Gt(10670847),glow:6333946,fire:15680580};return Vi.useEffect(()=>{if(!e.current)return;const d=new iT;d.background=new Gt(h.skyTwilight),d.fog=new rm(h.fogColor,.006);const u=new Kn(75,window.innerWidth/window.innerHeight,.1,3e3),p=new T2({antialias:!0});p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(p.domElement);const E=(()=>{const $=document.createElement("canvas");$.width=64,$.height=64;const at=$.getContext("2d"),xt=at.createRadialGradient(32,32,0,32,32,32);return xt.addColorStop(0,"rgba(255, 255, 255, 1)"),xt.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),xt.addColorStop(1,"rgba(255, 255, 255, 0)"),at.fillStyle=xt,at.fillRect(0,0,64,64),new _T($)})(),g=($,at)=>{const xt=Math.sin($*.045)*Math.cos(at*.045)*2.8,st=Math.cos($*.02+at*.03)*3.5;return xt+st},f=new dl(1200,1200,c.segments,c.segments);f.rotateX(-Math.PI/2);const m=f.attributes.position.array,_=[];for(let $=0;$<m.length/3;$++){const at=m[$*3],xt=m[$*3+2],st=g(at,xt);m[$*3+1]=st;const X=h.snow.clone().multiplyScalar(.4+st*.1);_.push(X.r,X.g,X.b)}f.setAttribute("color",new cn(_,3));const M=new co({vertexColors:!0,roughness:1}),C=new dn(f,M);d.add(C);const b={pos:new O(0,10,20),vel:new O,yaw:0,pitch:0},R=[],x=[],A=[],U=($,at)=>{const xt=new ES({map:E,color:$,transparent:!0,opacity:0,blending:eu}),st=new cT(xt);return st.scale.set(at,at,1),st},w=()=>{const $=[];for(let at=0;at<c.obeliskCount;at++){let xt,st;do xt=(Math.random()-.5)*c.worldSize,st=(Math.random()-.5)*c.worldSize;while(Math.hypot(xt,st)<100||$.some(X=>Math.hypot(X.x-xt,X.z-st)<130));$.push({x:xt,z:st})}return a(c.obeliskCount),$},I=($,at,xt=!1)=>{const st=g($,at),X=new xo;if(X.position.set($,st,at),xt){const rt=new dn(new Va(3.5,3.5,3.5),new co({color:16777215,emissive:16777215,emissiveIntensity:2}));rt.position.set(0,1.75,0),X.add(rt);const tt=U(16777215,20);tt.position.y=3,tt.material.opacity=.5,X.add(tt),d.add(X),R.push({pillar:null,shrine:rt,tipGlow:tt,shrineGlow:tt,pos:new O($,st,at),tipPos:new O($,st+5,at),shrinePos:new O($,st+1.75,at),activated:!0})}else{const rt=new dn(new Va(5.5,c.obeliskHeight,5.5),new co({color:65793}));rt.position.y=c.obeliskHeight/2-2,X.add(rt);const tt=new dn(new cm(2.5),new co({color:1118481}));tt.position.y=c.obeliskHeight+2,X.add(tt);const Ct=U(h.blue,15);Ct.position.y=c.obeliskHeight+2,X.add(Ct);const bt=new dn(new Va(3,3,3),new co({color:526344}));bt.position.set(0,1.5,12),bt.userData={id:R.length},X.add(bt),x.push(bt);const At=U(h.pink,12);At.position.set(0,3,12),X.add(At),d.add(X),R.push({pillar:rt,shrine:bt,tipGlow:Ct,shrineGlow:At,pos:new O($,st,at),tipPos:new O($,st+c.obeliskHeight+2,at),shrinePos:new O($,st+1.5,at+12),activated:!1})}};I(0,0,!0),w().forEach($=>I($.x,$.z));class Y{constructor(){this.mesh=new dn(new du(.25,8,8),new uu({color:16777215})),this.trailPoints=[];for(let xt=0;xt<c.trailLength;xt++)this.trailPoints.push(new O(0,0,0));const at=new Float32Array(c.trailLength);for(let xt=0;xt<c.trailLength;xt++)at[xt]=1-xt/c.trailLength;this.trailGeo=new wn().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new ai(at,1)),this.trailMat=new di({transparent:!0,uniforms:{color:{value:new Gt(h.glow)}},vertexShader:`
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
          `,blending:eu}),this.line=new gT(this.trailGeo,this.trailMat),this.pos=new O(0,20,0),this.vel=new O,this.acc=new O,d.add(this.mesh),d.add(this.line)}update(at,xt){const st=new O,X=new O,rt=new O;let tt=0;xt.forEach(bt=>{const At=this.pos.distanceTo(bt.pos);At>0&&At<12&&(st.add(bt.pos),rt.add(bt.vel),X.add(this.pos.clone().sub(bt.pos).divideScalar(At)),tt++)}),tt>0&&(st.divideScalar(tt).sub(this.pos).multiplyScalar(.01),rt.divideScalar(tt).sub(this.vel).multiplyScalar(.04),X.divideScalar(tt).multiplyScalar(.12));const Ct=at.clone().sub(this.pos).multiplyScalar(.03);this.acc.add(st).add(X).add(rt).add(Ct),this.vel.add(this.acc).clampLength(0,.45),this.pos.add(this.vel),this.acc.multiplyScalar(0),this.mesh.position.copy(this.pos);for(let bt=c.trailLength-1;bt>0;bt--)this.trailPoints[bt].copy(this.trailPoints[bt-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}}const j=[];for(let $=0;$<c.fireflyCount;$++)j.push(new Y);const z={moveX:0,moveY:0},D={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},N=$=>{for(let at of $.changedTouches)at.clientX<window.innerWidth/2?(D.left=at.identifier,D.lx=at.clientX,D.ly=at.clientY):(D.right=at.identifier,D.rx=at.clientX,D.ry=at.clientY,it())},k=$=>{for(let at of $.changedTouches)at.identifier===D.left?(z.moveX=(at.clientX-D.lx)/50,z.moveY=-(at.clientY-D.ly)/50):at.identifier===D.right&&(b.yaw-=(at.clientX-D.rx)*.005,b.pitch-=(at.clientY-D.ry)*.005,b.pitch=Math.max(-1.4,Math.min(1.4,b.pitch)),D.rx=at.clientX,D.ry=at.clientY)},J=$=>{for(let at of $.changedTouches)at.identifier===D.left?(D.left=-1,z.moveX=0,z.moveY=0):D.right=-1},it=()=>{const $=new Ag;$.setFromCamera(new Vt(0,0),u);const at=$.intersectObjects(x);if(at.length>0){const xt=at[0].object.userData.id,st=R[xt];b.pos.distanceTo(st.pos)<c.interactDist&&!st.activated&&(st.activated=!0,st.pillar.material.color.set(16777215),st.pillar.material.emissive.set(16777215),st.pillar.material.emissiveIntensity=2,st.shrine.material.color.set(16777215),st.shrine.material.emissive.set(16777215),st.shrine.material.emissiveIntensity=2,st.tipGlow.material.opacity=.6,st.shrineGlow.material.opacity=.6,n(X=>(X+1===c.obeliskCount&&r(!0),X+1)))}};window.addEventListener("touchstart",N,{passive:!1}),window.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("touchend",J);const vt=()=>{requestAnimationFrame(vt);const $=new O(-Math.sin(b.yaw),0,-Math.cos(b.yaw)),at=new O(-Math.cos(b.yaw),0,Math.sin(b.yaw)),xt=new O().addScaledVector($,z.moveY).addScaledVector(at,-z.moveX);xt.length()>0&&b.pos.addScaledVector(xt.normalize(),c.moveSpeed);const st=g(b.pos.x,b.pos.z)+c.playerHeight;b.vel.y-=c.gravity,b.pos.y+=b.vel.y,b.pos.y<st&&(b.pos.y=st,b.vel.y=0),u.position.copy(b.pos),u.rotation.set(b.pitch,b.yaw,0,"YXZ");let X=R[0].shrinePos,rt=R[0],tt=1/0;R.forEach(Ot=>{if(Ot.activated)X=Ot.shrinePos;else{const Wt=b.pos.distanceTo(Ot.pos);Wt<tt&&(tt=Wt,rt=Ot)}});const Ct=Math.sin(Date.now()*6e-4)*.5+.5,bt=new O().lerpVectors(X,rt.tipPos,Ct);j.forEach(Ot=>Ot.update(bt,j));let At=.6;const le=f.attributes.color,Xt=f.attributes.position;let ae=!1;R.forEach(Ot=>{if(Ot.activated){if(Math.random()>.86){const Wt=new dn(new du(.12),new uu({color:h.fire,transparent:!0}));Wt.position.copy(Ot.shrinePos).add(new O((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),Wt.userData={v:new O((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},d.add(Wt),A.push(Wt)}At+=Math.max(0,1-b.pos.distanceTo(Ot.pos)/160)*.7,Ot.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,Ot.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let Wt=0;Wt<Xt.count;Wt++){const P=Xt.getX(Wt),Pe=Xt.getZ(Wt),qt=Math.hypot(P-Ot.pos.x,Pe-Ot.pos.z);if(qt<65){const oe=Math.max(0,1-qt/65),dt=h.pink.clone().lerp(h.blue,Math.sin(P*.1)*.5+.5);le.setXYZ(Wt,Rf.lerp(le.getX(Wt),dt.r,oe*.06),Rf.lerp(le.getY(Wt),dt.g,oe*.06),Rf.lerp(le.getZ(Wt),dt.b,oe*.06)),ae=!0}}}}),ae&&(le.needsUpdate=!0);for(let Ot=A.length-1;Ot>=0;Ot--){const Wt=A[Ot];Wt.position.add(Wt.userData.v),Wt.userData.l-=.015,Wt.material.opacity=Wt.userData.l,Wt.scale.setScalar(Wt.userData.l),Wt.userData.l<=0&&(d.remove(Wt),A.splice(Ot,1))}const de=new Gt(h.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,At)));d.background.lerp(de,.04),d.fog.color.lerp(de,.04);const kt=new Ag;kt.setFromCamera(new Vt(0,0),u);const we=kt.intersectObjects(x);l(we.length>0&&b.pos.distanceTo(we[0].object.parent.position)<c.interactDist),p.render(d,u)};return vt(),d.add(new RT(16777215,1118498,1.1)),()=>{var $;window.removeEventListener("touchstart",N),window.removeEventListener("touchmove",k),($=e.current)==null||$.removeChild(p.domElement)}},[]),ye.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[ye.jsx("div",{ref:e,className:"w-full h-full"}),ye.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[ye.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),ye.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),ye.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),ye.jsx("div",{className:"absolute top-14 right-10 flex flex-col items-end",children:ye.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-8 py-3 text-white flex items-center gap-4",children:[ye.jsx("span",{className:"text-[10px] opacity-25 tracking-widest",children:"SIGILS"}),ye.jsxs("span",{className:"text-2xl font-bold",children:[t," / ",i]})]})}),ye.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[ye.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),ye.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),ye.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),ye.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:ye.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[ye.jsx("span",{children:"Ignite the Sigil"}),ye.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),s&&ye.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[ye.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),ye.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),ye.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),ye.jsx("button",{onPointerDown:d=>{d.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),ye.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};WE.createRoot(document.getElementById("root")).render(ye.jsx(fM.StrictMode,{children:ye.jsx(A2,{})}));
